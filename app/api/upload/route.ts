import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

export async function POST(request: Request) {
    try {
        const data = await request.formData()
        const files = data.getAll('files') as File[]

        if (files.length === 0) {
            return NextResponse.json({ error: 'Nenhum arquivo enviado' }, { status: 400 })
        }

        const uploadedUrls: string[] = []

        // Ensure directory exists
        const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'veiculos')
        await mkdir(uploadDir, { recursive: true }).catch(() => { }) // Ignore if exists

        for (const file of files) {
            const bytes = await file.arrayBuffer()
            const buffer = new Uint8Array(bytes)

            const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`
            const filename = `${uniqueSuffix}-${file.name.replace(/[^a-zA-Z0-9.]/g, '')}`
            const filepath = path.join(uploadDir, filename)

            await writeFile(filepath, buffer)
            uploadedUrls.push(`/uploads/veiculos/${filename}`)
        }

        return NextResponse.json({ urls: uploadedUrls })
    } catch (error) {
        console.error('Erro no upload:', error)
        return NextResponse.json({ error: 'Erro no upload' }, { status: 500 })
    }
}
