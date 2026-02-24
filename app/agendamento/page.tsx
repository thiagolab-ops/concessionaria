"use client"
import Link from 'next/link'

export default function AgendamentoPage() {
    return (
        <div className="min-h-screen bg-background-dark flex flex-col items-center justify-center text-center p-4">
            <span className="material-symbols-outlined text-6xl text-primary mb-4">event_available</span>
            <h1 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wide mb-2">Agende seu <span className="text-primary">Test Drive</span></h1>
            <p className="text-text-secondary text-lg mb-8 max-w-lg">Nosso sistema de agendamento online está sendo atualizado. Por favor, entre em contato via WhatsApp para marcar seu test drive exclusivo.</p>

            <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:scale-105 transition-transform shadow-[0_0_15px_rgba(37,211,102,0.3)]">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.711.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.099.824z" /></svg>
                    Chamar no WhatsApp
                </a>
                <Link href="/veiculos" className="border-2 border-surface-border text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-surface-dark transition-colors">
                    Explorar Catálogo
                </Link>
            </div>
        </div>
    )
}
