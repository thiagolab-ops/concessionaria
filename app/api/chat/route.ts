import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

async function askGroq(messages: { role: "system" | "user" | "assistant"; content: string }[]) {
  const apiKey = process.env.GROQ_API_KEY
  console.error("=== DEBUG GROQ ===")
  console.error("GROQ_API_KEY set?", !!apiKey)
  console.error("GROQ_MODEL:", process.env.GROQ_MODEL)

  if (!apiKey || apiKey === 'dummy_key_for_build') {
    console.error("Erro: GROQ_API_KEY não está definida no ambiente de produção.")
    throw new Error("GROQ_API_KEY not set")
  }

  const model = process.env.GROQ_MODEL || "llama-3.1-8b-instant"

  console.log("-> Chamando Groq API com modelo:", model)
  console.error("Groq model em uso:", model)

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: model,
      messages: messages,
      temperature: 0.5,
    }),
  })

  if (!res.ok) {
    const errorBody = await res.text()
    console.error("Groq status:", res.status)
    console.error("Groq body:", errorBody)
    throw new Error(`Groq error ${res.status}: ${errorBody}`)
  }

  const data = await res.json()
  const text = data.choices?.[0]?.message?.content ?? ""
  return text
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    // Aceita tanto { message: "texto" } quanto { messages: [...] } dependendo do frontend
    let userMessage = body.message
    let frontendMessages = body.messages

    if (!userMessage && frontendMessages && frontendMessages.length > 0) {
      // Se mandar array, pegamos o último user message
      userMessage = frontendMessages[frontendMessages.length - 1].content
    }

    if (!userMessage) {
      return NextResponse.json({ error: 'Mensagem não fornecida' }, { status: 400 })
    }

    const services = await prisma.service.findMany({
      where: { isAvailable: true }
    })

    const menuInfo = services.map((p: any) => `${p.name} - R$ ${p.price.toFixed(2)}: ${p.description}`).join('\n')

    const systemPrompt = `Você é um atendente inteligente da barbearia Máfia BR.
Você deve responder em português do Brasil, com um tom amigável, masculino, tradicional e profissional, focado no universo de barbearias clássicas.
Você ajuda os clientes a tirar dúvidas sobre cortes (fade, degradê, social, militar), barboterapia, horários e preços.
Responda de forma concisa e direta. Nunca invente preços que não estão na tabela.
No seu vocabulário, seja cortês e direto.

Serviços oferecidos na barbearia:
${menuInfo}

Seja educado e convide o cliente a clicar na tela de serviços para reservar.`

    const messagesToSend: any[] = [
      { role: 'system', content: systemPrompt },
    ]

    // Adiciona as mensagens anteriores se fornecidas, caso contrário, só a userMessage
    if (frontendMessages && Array.isArray(frontendMessages)) {
      // ignora messages de role 'system' enviadas do front e adiciona as outras
      frontendMessages.filter(m => m.role !== 'system').forEach(m => {
        messagesToSend.push({ role: m.role, content: m.content })
      })
    } else {
      messagesToSend.push({ role: 'user', content: userMessage })
    }

    const reply = await askGroq(messagesToSend)

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Erro geral na rota de chat:', error)
    return NextResponse.json(
      { error: 'Erro ao processar mensagem. Verifique logs do servidor.' },
      { status: 500 }
    )
  }
}
