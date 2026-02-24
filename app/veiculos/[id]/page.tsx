"use client"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

const MOCK_VEHICLE = {
    id: "clf201",
    brand: "BMW",
    model: "320i M Sport",
    year: 2023,
    price: 315000,
    category: "Sedan",
    hasAuction: false,
    status: "AVAILABLE",
    images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDN4v0YI6J65HzXOlI6dil4Bw4YeBwZ6ePjWBreXsMdST39OjwgBKceR4jaqBpO2exrEG7w0zvnOIA07L_YoZXtf3PkP_xPfqAD3BStEr1QOHt-6rgPL8m--1U_U30vV-UxtLbQbpZd-80ilP_k0DHyxgMNE_arcxdBmtgKgRiZ-XQNBDDkKTmSxy_E2UjEat0ZtCzbYai8Pu7lnmEtM6BwB8QEcmkpa3CtCEdJ9xMXYLXW-3SmJcV_xgu2Txp8Ndv4ClspEXaF1ME",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB3WzAgDpGusaQn-GwOZ_POn1DjtPkSPYKUWebcTngYAeDQ8-gClR6Ebdd-evq4MEzi0aiM73qe2sCiKCH1KRMsWF9e7MI4xBIZ_csiemAqXyBgjq0OvdMFnEhERF1C2NSdtObdGS-gZhVqpGAASnSHhZIBWDzUu-1Xh3SaR_q-VcuVR-OFcLBXCXRAxeNOlTDzJahgXK1q3gV9F6lgLBa_npJHCRwhHqJskpSsX59hXQuvB3z6o6RT6MnL3vRJshKnNlFltNrFGgo",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC0eKq_tg9-8R6P0SXaugFeAT-LC3DREhgUuh9ab4bClOjkzSiUT_pycSkhlPNrv6SRv_n4D8rfafHcqtI87-_XgoJOuSZ7rGxpIIobokZHl1zdm9F-snYTidseu8gO_TWEBmhP1rOZUy7B0zhksrNpiX8XqRSmnCxtmFPw9uYChM22paB6DnKRFI6qyocZ9Edd1Ho5Yr3ns1oRIeUd9z2JCCYOK2SpYN1LDTJ6S-4pUClbme_giQGwGUSGWi5WSWU7XvXa2dngR6o",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCjoPmSo54sNJXuzj6QpmjH8EcALLwAKXEkn0fAxIVj-TsTlHzjxvLM5UBi8HulMy8mZme1SzX2wIBUhFMxOuRntivf67yXTnUPY0ywQ1fATcIydKa5nzwXkP63BFUoFGyqpuIxxraoyDTiXMEkJ5yy0hZ1ByYiRbzJbkn2W6gmgcdfdGGyNEqg14ZmQuYKTFL695o9COQPDMhWoIDVqL6HubV9ureIYBbuvUe0m1xBooC0qLDdqKvS-nng-Bd_QQLFP_q8kME5y1E"
    ],
    specs: {
        engine: "2.0 Turbo",
        transmission: "Automático 8M",
        fuel: "Flex",
        mileage: "15.000 km",
    },
    description: "Veículo impecável, único dono, com todas as revisões feitas em concessionária. A versão M Sport oferece o máximo em desempenho e sofisticação, com interior em couro Premium, teto solar, painel digital, e pacote de segurança completo. Não perca essa oportunidade de realizar o seu sonho com a Luxe Motors."
}

export default function VehicleDetailsPage({ params }: { params: { id: string } }) {
    const router = useRouter()
    const [activeImage, setActiveImage] = useState(0)

    // Em um app real faríamos um fetch ao prisma aqui usando useParams/params.id
    const vehicle = MOCK_VEHICLE

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-slate-100 max-w-screen-md mx-auto shadow-2xl">

            {/* Header Transparente */}
            <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4">
                <button
                    onClick={() => router.back()}
                    className="flex size-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition"
                >
                    <span className="material-symbols-outlined text-2xl">arrow_back</span>
                </button>
                <button className="flex size-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition group">
                    <span className="material-symbols-outlined text-2xl group-hover:text-primary transition-colors">favorite_border</span>
                </button>
            </header>

            {/* Hero Gallery */}
            <section className="relative w-full">
                {/* Main Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-dark">
                    <img
                        src={vehicle.images[activeImage]}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-black/20" />
                </div>

                {/* Thumbnails */}
                <div className="relative -mt-10 mb-6 flex gap-3 overflow-x-auto hide-scrollbar px-4 pb-2 z-10 w-full scroll-smooth">
                    {vehicle.images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveImage(idx)}
                            className={`relative size-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${activeImage === idx ? 'border-primary shadow-[0_0_15px_rgba(245,159,10,0.4)] scale-105' : 'border-surface-border opacity-60 hover:opacity-100'}`}
                        >
                            <img src={img} className="h-full w-full object-cover" alt="Thumb" />
                        </button>
                    ))}
                </div>
            </section>

            {/* Content Area */}
            <main className="flex-1 px-5 pb-32">

                {/* Title and Price */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-surface-dark border border-surface-border text-[10px] font-bold uppercase tracking-wider text-text-secondary">
                            {vehicle.year}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-surface-dark border border-surface-border text-[10px] font-bold uppercase tracking-wider text-text-secondary">
                            {vehicle.category}
                        </span>
                        {vehicle.hasAuction ? (
                            <span className="px-3 py-1 rounded-full bg-red-900/40 border border-red-500/50 text-[10px] font-bold uppercase tracking-wider text-red-400">
                                Passagem por Leilão
                            </span>
                        ) : (
                            <span className="px-3 py-1 rounded-full bg-green-900/40 border border-green-500/50 text-[10px] font-bold uppercase tracking-wider text-green-400">
                                Laudo Cautelar Aprovado
                            </span>
                        )}
                    </div>

                    <h1 className="text-3xl font-black uppercase text-white tracking-tight leading-none mb-4">
                        {vehicle.brand} <span className="font-medium text-text-secondary">{vehicle.model}</span>
                    </h1>

                    <div className="flex flex-col">
                        <span className="text-xs text-text-secondary font-medium uppercase tracking-widest">Preço à vista</span>
                        <span className="font-header text-4xl font-bold text-primary tracking-tight">
                            R$ {vehicle.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                    </div>
                </div>

                {/* Technical Sheet */}
                <div className="mb-8">
                    <h3 className="text-xs text-text-secondary font-black tracking-widest uppercase mb-4">Ficha Técnica</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-dark border border-surface-border/50">
                            <span className="material-symbols-outlined text-primary text-2xl">settings</span>
                            <div>
                                <p className="text-[10px] text-text-secondary uppercase font-bold tracking-wider">Câmbio</p>
                                <p className="text-sm font-semibold text-white">{vehicle.specs.transmission}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-dark border border-surface-border/50">
                            <span className="material-symbols-outlined text-primary text-2xl">local_gas_station</span>
                            <div>
                                <p className="text-[10px] text-text-secondary uppercase font-bold tracking-wider">Combustível</p>
                                <p className="text-sm font-semibold text-white">{vehicle.specs.fuel}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-dark border border-surface-border/50">
                            <span className="material-symbols-outlined text-primary text-2xl">speed</span>
                            <div>
                                <p className="text-[10px] text-text-secondary uppercase font-bold tracking-wider">Quilometragem</p>
                                <p className="text-sm font-semibold text-white">{vehicle.specs.mileage}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-dark border border-surface-border/50">
                            <span className="material-symbols-outlined text-primary text-2xl">directions_car</span>
                            <div>
                                <p className="text-[10px] text-text-secondary uppercase font-bold tracking-wider">Motor</p>
                                <p className="text-sm font-semibold text-white">{vehicle.specs.engine}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <h3 className="text-xs text-text-secondary font-black tracking-widest uppercase mb-4">Sobre o Veículo</h3>
                    <div className="p-5 rounded-2xl bg-surface-dark/50 border border-surface-border/30">
                        <p className="text-sm text-gray-300 leading-relaxed">
                            {vehicle.description}
                        </p>
                    </div>
                </div>
            </main>

            {/* Sticky Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-[40] w-full max-w-screen-md mx-auto pointer-events-none">
                {/* Gradient fade to prevent sharp text clipping */}
                <div className="h-10 bg-gradient-to-t from-background-dark to-transparent w-full absolute -top-10" />

                <div className="bg-background-dark/95 backdrop-blur-xl border-t border-surface-border px-4 py-4 pb-6 safely-padding-bottom pointer-events-auto">
                    {/* Adicionando pr-20 para não ficar por baixo do botão do chatbot que tem bottom-6 right-6 */}
                    <div className="flex gap-3 pr-20">
                        <a
                            href="https://wa.me/5511999999999?text=Olá, tenho interesse no BMW 320i M Sport!"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center shrink-0 w-[60px] h-[60px] rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] transition active:scale-95 shadow-lg shadow-[#25D366]/20"
                        >
                            <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.711.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.099.824z" />
                            </svg>
                        </a>

                        <Link
                            href="/agendamento"
                            className="flex-1 flex items-center justify-center rounded-2xl bg-primary hover:bg-primary-dark transition active:scale-[0.98] shadow-[0_0_20px_rgba(245,159,10,0.3)] group"
                        >
                            <span className="text-background-dark font-black text-lg uppercase tracking-tight group-hover:scale-105 transition-transform">
                                Agendar Test Drive
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
