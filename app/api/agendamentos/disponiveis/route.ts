import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const dateParam = searchParams.get('date') // YYYY-MM-DD

        if (!dateParam) {
            return NextResponse.json(
                { error: 'Parâmetro data é obrigatório (YYYY-MM-DD)' },
                { status: 400 }
            )
        }

        // Criar limites de data considerando fuso horário de Brasília (UTC-3)
        const startDate = new Date(`${dateParam}T00:00:00-03:00`)
        const endDate = new Date(`${dateParam}T23:59:59-03:00`)

        // Buscar agendamentos que já existem neste dia e não estão cancelados
        const existingAppointments = await prisma.appointment.findMany({
            where: {
                scheduledTime: {
                    gte: startDate,
                    lte: endDate
                },
                status: {
                    not: 'CANCELED'
                }
            },
            select: {
                scheduledTime: true
            }
        })

        // Extrair os horários que já estão ocupados no fuso de SP
        const occupiedTimeStrings = existingAppointments.map((app: any) => {
            const spTime = new Date(app.scheduledTime.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
            const hours = spTime.getHours().toString().padStart(2, '0')
            const minutes = spTime.getMinutes().toString().padStart(2, '0')
            return `${hours}:${minutes}`
        })

        // Gerar horários disponíveis das 09:00 às 19:00, com intervalo de 30 min
        const allSlots = []
        for (let hour = 9; hour <= 19; hour++) {
            allSlots.push(`${hour.toString().padStart(2, '0')}:00`)
            if (hour !== 19) {
                allSlots.push(`${hour.toString().padStart(2, '0')}:30`)
            }
        }

        // Determinar "agora" no horário de Brasília
        const nowStr = new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
        const nowBrazil = new Date(nowStr)
        const currentHour = nowBrazil.getHours()
        const currentMinute = nowBrazil.getMinutes()

        // Verificar se a busca é pro dia de hoje
        const [year, month, day] = dateParam.split('-').map(Number)
        const isToday = (day === nowBrazil.getDate() && (month === nowBrazil.getMonth() + 1) && year === nowBrazil.getFullYear())

        const availableSlots = allSlots.filter(timeString => {
            // Verificar ocupação formal
            if (occupiedTimeStrings.includes(timeString)) {
                return false
            }

            // Excluir horas do passado caso seja hoje
            if (isToday) {
                const [hourStr, minStr] = timeString.split(':')
                const slotHour = parseInt(hourStr)
                const slotMin = parseInt(minStr)

                if (slotHour < currentHour || (slotHour === currentHour && slotMin <= currentMinute)) {
                    return false
                }
            }
            return true
        })

        return NextResponse.json({
            date: dateParam,
            availableSlots
        })
    } catch (error) {
        console.error('Erro ao buscar horários disponíveis:', error)
        return NextResponse.json({ error: 'Erro ao buscar horários' }, { status: 500 })
    }
}
