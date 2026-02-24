"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function VeiculosPage() {
    const [activeFilter, setActiveFilter] = useState<string>('Todos')

    const filterOptions = ['Todos', 'Sedan', 'SUV', 'Hatch', 'Coupé', 'Elétrico']

    return (
        <div className="relative flex h-full min-h-screen w-full max-w-screen-md flex-col overflow-x-hidden bg-white dark:bg-[#181511] shadow-2xl mx-auto">
            {/* Header */}
            <header className="sticky top-0 z-20 flex items-center justify-between bg-white/95 dark:bg-[#181511]/95 px-4 py-4 backdrop-blur-md border-b border-slate-200 dark:border-[#393328]">
                <Link href="/" className="flex size-10 items-center justify-center rounded-full text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#27231b] transition-colors">
                    <span className="material-symbols-outlined text-2xl">arrow_back</span>
                </Link>
                <h2 className="font-header text-2xl font-bold uppercase tracking-wide text-slate-900 dark:text-white">Nossos Carros</h2>
                <Link href="/admin" className="flex size-10 items-center justify-center rounded-full text-primary hover:bg-primary/10 transition-colors relative">
                    <span className="material-symbols-outlined text-2xl">calendar_month</span>
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#181511]"></span>
                </Link>
            </header>

            {/* Filters */}
            <div className="sticky top-[72px] z-10 flex gap-3 overflow-x-auto px-4 py-4 bg-white dark:bg-[#181511] scrollbar-hide hide-scrollbar">
                {filterOptions.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`shrink-0 rounded-full px-6 py-2 text-sm font-medium transition-all active:scale-95 ${activeFilter === filter
                                ? 'bg-primary text-[#181511] font-bold shadow-[0_0_15px_rgba(245,159,10,0.4)]'
                                : 'border border-slate-200 dark:border-[#393328] bg-white dark:bg-[#27231b] text-slate-600 dark:text-[#baaf9c] hover:border-primary hover:text-primary'
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Car List */}
            <main className="flex flex-col gap-4 p-4 pb-24">
                {/* Card 1 */}
                <div className="@container group">
                    <div className="flex flex-col overflow-hidden rounded-2xl bg-slate-50 dark:bg-[#27231b] shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1">
                        <div className="relative aspect-[16/9] w-full overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Dark grey sleek SUV front view" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjoPmSo54sNJXuzj6QpmjH8EcALLwAKXEkn0fAxIVj-TsTlHzjxvLM5UBi8HulMy8mZme1SzX2wIBUhFMxOuRntivf67yXTnUPY0ywQ1fATcIydKa5nzwXkP63BFUoFGyqpuIxxraoyDTiXMEkJ5yy0hZ1ByYiRbzJbkn2W6gmgcdfdGGyNEqg14ZmQuYKTFL695o9COQPDMhWoIDVqL6HubV9ureIYBbuvUe0m1xBooC0qLDdqKvS-nng-Bd_QQLFP_q8kME5y1E")' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#27231b] via-transparent to-transparent opacity-80"></div>
                            <div className="absolute top-3 right-3 rounded-full bg-black/40 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                                2024
                            </div>
                        </div>
                        <div className="flex flex-col p-4 @xl:p-6">
                            <div className="mb-1 flex items-center justify-between">
                                <h3 className="font-header text-xl font-bold uppercase tracking-wide text-slate-900 dark:text-white">Fiat Fastback</h3>
                                <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">favorite</span>
                            </div>
                            <div className="mb-4 flex flex-wrap gap-2">
                                <span className="text-xs font-medium text-slate-500 dark:text-[#baaf9c]">SUV</span>
                                <span className="text-xs text-slate-400 dark:text-[#6b655b]">•</span>
                                <span className="text-xs font-medium text-slate-500 dark:text-[#baaf9c]">Automático</span>
                                <span className="text-xs text-slate-400 dark:text-[#6b655b]">•</span>
                                <span className="text-xs font-medium text-slate-500 dark:text-[#baaf9c]">Turbo 200</span>
                            </div>
                            <div className="flex items-end justify-between gap-4">
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-[#baaf9c]">A partir de</p>
                                    <p className="font-header text-2xl font-bold text-primary">R$ 105.000,00</p>
                                </div>
                                <Link href="/agendamento" className="flex h-10 items-center justify-center rounded-full bg-white dark:bg-[#393328] px-4 text-sm font-bold text-slate-900 dark:text-white transition-colors hover:bg-primary hover:text-[#181511]">
                                    Agendar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="@container group">
                    <div className="flex flex-col overflow-hidden rounded-2xl bg-slate-50 dark:bg-[#27231b] shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1">
                        <div className="relative aspect-[16/9] w-full overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Silver sedan parked in modern garage" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC0eKq_tg9-8R6P0SXaugFeAT-LC3DREhgUuh9ab4bClOjkzSiUT_pycSkhlPNrv6SRv_n4D8rfafHcqtI87-_XgoJOuSZ7rGxpIIobokZHl1zdm9F-snYTidseu8gO_TWEBmhP1rOZUy7B0zhksrNpiX8XqRSmnCxtmFPw9uYChM22paB6DnKRFI6qyocZ9Edd1Ho5Yr3ns1oRIeUd9z2JCCYOK2SpYN1LDTJ6S-4pUClbme_giQGwGUSGWi5WSWU7XvXa2dngR6o")' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#27231b] via-transparent to-transparent opacity-80"></div>
                            <div className="absolute top-3 right-3 rounded-full bg-black/40 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                                2023
                            </div>
                        </div>
                        <div className="flex flex-col p-4 @xl:p-6">
                            <div className="mb-1 flex items-center justify-between">
                                <h3 className="font-header text-xl font-bold uppercase tracking-wide text-slate-900 dark:text-white">Nissan Sentra</h3>
                                <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">favorite</span>
                            </div>
                            <div className="mb-4 flex flex-wrap gap-2">
                                <span className="text-xs font-medium text-slate-500 dark:text-[#baaf9c]">Sedan</span>
                                <span className="text-xs text-slate-400 dark:text-[#6b655b]">•</span>
                                <span className="text-xs font-medium text-slate-500 dark:text-[#baaf9c]">Exclusive</span>
                                <span className="text-xs text-slate-400 dark:text-[#6b655b]">•</span>
                                <span className="text-xs font-medium text-slate-500 dark:text-[#baaf9c]">CVT</span>
                            </div>
                            <div className="flex items-end justify-between gap-4">
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-[#baaf9c]">A partir de</p>
                                    <p className="font-header text-2xl font-bold text-primary">R$ 128.990,00</p>
                                </div>
                                <Link href="/agendamento" className="flex h-10 items-center justify-center rounded-full bg-white dark:bg-[#393328] px-4 text-sm font-bold text-slate-900 dark:text-white transition-colors hover:bg-primary hover:text-[#181511]">
                                    Agendar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="@container group">
                    <div className="flex flex-col overflow-hidden rounded-2xl bg-slate-50 dark:bg-[#27231b] shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1">
                        <div className="relative aspect-[16/9] w-full overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Blue sports car rear view city night" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3WzAgDpGusaQn-GwOZ_POn1DjtPkSPYKUWebcTngYAeDQ8-gClR6Ebdd-evq4MEzi0aiM73qe2sCiKCH1KRMsWF9e7MI4xBIZ_csiemAqXyBgjq0OvdMFnEhERF1C2NSdtObdGS-gZhVqpGAASnSHhZIBWDzUu-1Xh3SaR_q-VcuVR-OFcLBXCXRAxeNOlTDzJahgXK1q3gV9F6lgLBa_npJHCRwhHqJskpSsX59hXQuvB3z6o6RT6MnL3vRJshKnNlFltNrFGgo")' }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#27231b] via-transparent to-transparent opacity-80"></div>
                            <div className="absolute top-3 right-3 rounded-full bg-black/40 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                                2024
                            </div>
                        </div>
                        <div className="flex flex-col p-4 @xl:p-6">
                            <div className="mb-1 flex items-center justify-between">
                                <h3 className="font-header text-xl font-bold uppercase tracking-wide text-slate-900 dark:text-white">Golf GTI</h3>
                                <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">favorite</span>
                            </div>
                            <div className="mb-4 flex flex-wrap gap-2">
                                <span className="text-xs font-medium text-slate-500 dark:text-[#baaf9c]">Hatch</span>
                                <span className="text-xs text-slate-400 dark:text-[#6b655b]">•</span>
                                <span className="text-xs font-medium text-slate-500 dark:text-[#baaf9c]">Sport</span>
                                <span className="text-xs text-slate-400 dark:text-[#6b655b]">•</span>
                                <span className="text-xs font-medium text-slate-500 dark:text-[#baaf9c]">DSG</span>
                            </div>
                            <div className="flex items-end justify-between gap-4">
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-[#baaf9c]">A partir de</p>
                                    <p className="font-header text-2xl font-bold text-primary">R$ 239.000,00</p>
                                </div>
                                <Link href="/agendamento" className="flex h-10 items-center justify-center rounded-full bg-white dark:bg-[#393328] px-4 text-sm font-bold text-slate-900 dark:text-white transition-colors hover:bg-primary hover:text-[#181511]">
                                    Agendar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 4 (Sold/Waiting) */}
                <div className="@container group opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <div className="flex flex-col overflow-hidden rounded-2xl bg-slate-50 dark:bg-[#27231b] shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                        <div className="relative aspect-[16/9] w-full overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center" data-alt="Dark luxury sedan side profile" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDN4v0YI6J65HzXOlI6dil4Bw4YeBwZ6ePjWBreXsMdST39OjwgBKceR4jaqBpO2exrEG7w0zvnOIA07L_YoZXtf3PkP_xPfqAD3BStEr1QOHt-6rgPL8m--1U_U30vV-UxtLbQbpZd-80ilP_k0DHyxgMNE_arcxdBmtgKgRiZ-XQNBDDkKTmSxy_E2UjEat0ZtCzbYai8Pu7lnmEtM6BwB8QEcmkpa3CtCEdJ9xMXYLXW-3SmJcV_xgu2Txp8Ndv4ClspEXaF1ME")' }}></div>
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <span className="border-2 border-white px-4 py-1 text-sm font-bold uppercase text-white tracking-widest">Reservado</span>
                            </div>
                        </div>
                        <div className="flex flex-col p-4 @xl:p-6">
                            <div className="mb-1 flex items-center justify-between">
                                <h3 className="font-header text-xl font-bold uppercase tracking-wide text-slate-900 dark:text-white">BMW 320i</h3>
                                <span className="material-symbols-outlined text-slate-400">favorite_border</span>
                            </div>
                            <div className="mb-4 flex flex-wrap gap-2">
                                <span className="text-xs font-medium text-slate-500 dark:text-[#baaf9c]">Sedan</span>
                                <span className="text-xs text-slate-400 dark:text-[#6b655b]">•</span>
                                <span className="text-xs font-medium text-slate-500 dark:text-[#baaf9c]">M Sport</span>
                            </div>
                            <div className="flex items-end justify-between gap-4">
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-[#baaf9c]">Vendido por</p>
                                    <p className="font-header text-xl font-bold text-slate-400 dark:text-slate-500 line-through">R$ 315.000,00</p>
                                </div>
                                <button className="flex h-10 items-center justify-center rounded-full bg-slate-200 dark:bg-[#393328]/50 px-4 text-sm font-bold text-slate-400 dark:text-slate-600 cursor-not-allowed" disabled>
                                    Indisponível
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center">
                <div className="w-full max-w-screen-md border-t border-slate-200 dark:border-[#393328] bg-white/95 dark:bg-[#181511]/95 px-6 pb-6 pt-3 backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-2">
                        <Link href="/" className="group flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-[#baaf9c] transition-colors hover:text-primary dark:hover:text-primary">
                            <span className="material-symbols-outlined text-[28px] transition-transform group-hover:-translate-y-1">home</span>
                            <p className="text-[10px] font-medium uppercase tracking-wider">Início</p>
                        </Link>
                        <Link href="/veiculos" className="group flex flex-1 flex-col items-center justify-end gap-1 text-primary">
                            <div className="relative">
                                <span className="material-symbols-outlined fill-current text-[28px]">directions_car</span>
                                <span className="absolute -right-1 -top-1 size-2 rounded-full bg-primary"></span>
                            </div>
                            <p className="text-[10px] font-bold uppercase tracking-wider">Catálogo</p>
                        </Link>
                        <Link href="/favoritos" className="group flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-[#baaf9c] transition-colors hover:text-primary dark:hover:text-primary">
                            <span className="material-symbols-outlined text-[28px] transition-transform group-hover:-translate-y-1">favorite</span>
                            <p className="text-[10px] font-medium uppercase tracking-wider">Favoritos</p>
                        </Link>
                        <Link href="/perfil" className="group flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-[#baaf9c] transition-colors hover:text-primary dark:hover:text-primary">
                            <span className="material-symbols-outlined text-[28px] transition-transform group-hover:-translate-y-1">person</span>
                            <p className="text-[10px] font-medium uppercase tracking-wider">Perfil</p>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
