"use client"
import Link from 'next/link'

export default function ChatPage() {
    return (
        <div className="min-h-screen bg-background-dark flex flex-col items-center justify-center text-center p-4">
            <span className="material-symbols-outlined text-6xl text-primary mb-4">chat</span>
            <h1 className="text-white text-2xl md:text-4xl font-black uppercase tracking-wide mb-2">Em Breve: <span className="text-primary">Chatbot</span> Luxe Motors</h1>
            <p className="text-text-secondary text-lg mb-8 max-w-lg">Nossa inteligência artificial avançada de vendas estará disponível em breve para guiar você na escolha do seu próximo veículo premium.</p>
            <Link href="/" className="bg-primary text-background-dark px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:scale-105 transition-transform shadow-[0_0_15px_rgba(245,159,10,0.3)]">
                Voltar para o Início
            </Link>
        </div>
    )
}
