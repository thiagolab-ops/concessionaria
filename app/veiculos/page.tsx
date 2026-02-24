"use client"
import Link from 'next/link'
import { useState, useMemo } from 'react'

const MOCK_CARS = [
    {
        id: "clf201",
        brand: "Fiat",
        model: "Fastback",
        year: 2024,
        price: 105000,
        category: "SUV",
        status: "AVAILABLE",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjoPmSo54sNJXuzj6QpmjH8EcALLwAKXEkn0fAxIVj-TsTlHzjxvLM5UBi8HulMy8mZme1SzX2wIBUhFMxOuRntivf67yXTnUPY0ywQ1fATcIydKa5nzwXkP63BFUoFGyqpuIxxraoyDTiXMEkJ5yy0hZ1ByYiRbzJbkn2W6gmgcdfdGGyNEqg14ZmQuYKTFL695o9COQPDMhWoIDVqL6HubV9ureIYBbuvUe0m1xBooC0qLDdqKvS-nng-Bd_QQLFP_q8kME5y1E",
        transmission: "Automático",
        engine: "Turbo 200"
    },
    {
        id: "clf202",
        brand: "Nissan",
        model: "Sentra",
        year: 2023,
        price: 128990,
        category: "Sedan",
        status: "AVAILABLE",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0eKq_tg9-8R6P0SXaugFeAT-LC3DREhgUuh9ab4bClOjkzSiUT_pycSkhlPNrv6SRv_n4D8rfafHcqtI87-_XgoJOuSZ7rGxpIIobokZHl1zdm9F-snYTidseu8gO_TWEBmhP1rOZUy7B0zhksrNpiX8XqRSmnCxtmFPw9uYChM22paB6DnKRFI6qyocZ9Edd1Ho5Yr3ns1oRIeUd9z2JCCYOK2SpYN1LDTJ6S-4pUClbme_giQGwGUSGWi5WSWU7XvXa2dngR6o",
        transmission: "CVT",
        engine: "Exclusive"
    },
    {
        id: "clf203",
        brand: "Volkswagen",
        model: "Golf GTI",
        year: 2024,
        price: 239000,
        category: "Hatch",
        status: "AVAILABLE",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3WzAgDpGusaQn-GwOZ_POn1DjtPkSPYKUWebcTngYAeDQ8-gClR6Ebdd-evq4MEzi0aiM73qe2sCiKCH1KRMsWF9e7MI4xBIZ_csiemAqXyBgjq0OvdMFnEhERF1C2NSdtObdGS-gZhVqpGAASnSHhZIBWDzUu-1Xh3SaR_q-VcuVR-OFcLBXCXRAxeNOlTDzJahgXK1q3gV9F6lgLBa_npJHCRwhHqJskpSsX59hXQuvB3z6o6RT6MnL3vRJshKnNlFltNrFGgo",
        transmission: "DSG",
        engine: "Sport"
    },
    {
        id: "clf204",
        brand: "BMW",
        model: "320i",
        year: 2023,
        price: 315000,
        category: "Sedan",
        status: "RESERVED",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN4v0YI6J65HzXOlI6dil4Bw4YeBwZ6ePjWBreXsMdST39OjwgBKceR4jaqBpO2exrEG7w0zvnOIA07L_YoZXtf3PkP_xPfqAD3BStEr1QOHt-6rgPL8m--1U_U30vV-UxtLbQbpZd-80ilP_k0DHyxgMNE_arcxdBmtgKgRiZ-XQNBDDkKTmSxy_E2UjEat0ZtCzbYai8Pu7lnmEtM6BwB8QEcmkpa3CtCEdJ9xMXYLXW-3SmJcV_xgu2Txp8Ndv4ClspEXaF1ME",
        transmission: "Automático",
        engine: "M Sport"
    }
]

export default function VeiculosPage() {
    const [activeFilter, setActiveFilter] = useState<string>('Todos')
    const [searchQuery, setSearchQuery] = useState<string>('')

    const filterOptions = ['Todos', 'Sedan', 'SUV', 'Hatch', 'Coupé', 'Elétrico']

    const filteredCars = useMemo(() => {
        return MOCK_CARS.filter((car) => {
            const matchesFilter = activeFilter === 'Todos' || car.category === activeFilter
            const searchLower = searchQuery.toLowerCase()
            const matchesSearch =
                car.brand.toLowerCase().includes(searchLower) ||
                car.model.toLowerCase().includes(searchLower) ||
                car.year.toString().includes(searchLower)

            return matchesFilter && matchesSearch
        })
    }, [activeFilter, searchQuery])

    return (
        <div className="relative flex h-full min-h-screen w-full max-w-screen-md flex-col overflow-x-hidden bg-white dark:bg-[#181511] shadow-2xl mx-auto">
            {/* Header */}
            <header className="sticky top-0 z-20 flex flex-col bg-white/95 dark:bg-[#181511]/95 backdrop-blur-md border-b border-slate-200 dark:border-[#393328]">
                <div className="flex items-center justify-between px-4 py-4">
                    <Link href="/" className="flex size-10 items-center justify-center rounded-full text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#27231b] transition-colors">
                        <span className="material-symbols-outlined text-2xl">arrow_back</span>
                    </Link>
                    <h2 className="font-header text-2xl font-bold uppercase tracking-wide text-slate-900 dark:text-white">Nossos Carros</h2>
                </div>

                {/* Search Bar */}
                <div className="px-4 pb-4">
                    <div className="relative flex items-center w-full h-12 rounded-full bg-surface-dark border border-surface-border text-white px-4 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                        <span className="material-symbols-outlined text-text-secondary mr-2">search</span>
                        <input
                            type="text"
                            placeholder="Buscar marca, modelo ou ano..."
                            className="bg-transparent border-none outline-none w-full text-sm placeholder-text-secondary/70 focus:ring-0"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </header>

            {/* Filters */}
            <div className="sticky top-[136px] z-10 flex gap-3 overflow-x-auto px-4 py-4 bg-white dark:bg-[#181511] scrollbar-hide hide-scrollbar shadow-sm">
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
            <main className="flex flex-col gap-4 p-4 pb-24 min-h-[50vh]">
                {filteredCars.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full opacity-50 space-y-4 pt-10">
                        <span className="material-symbols-outlined text-6xl text-text-secondary">directions_car</span>
                        <p className="text-text-secondary font-medium">Nenhum veículo encontrado.</p>
                    </div>
                ) : (
                    filteredCars.map((car) => {
                        const isUnavailable = car.status !== "AVAILABLE";
                        return (
                            <div key={car.id} className={`@container group ${isUnavailable ? 'opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300' : ''}`}>
                                <div className="flex flex-col overflow-hidden rounded-2xl bg-slate-50 dark:bg-[#27231b] shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1">
                                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("${car.image}")` }}></div>
                                        {isUnavailable ? (
                                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                                <span className="border-2 border-white px-4 py-1 text-sm font-bold uppercase text-white tracking-widest">{car.status === "RESERVED" ? "Reservado" : "Vendido"}</span>
                                            </div>
                                        ) : (
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#27231b] via-transparent to-transparent opacity-80"></div>
                                        )}
                                        {!isUnavailable && (
                                            <div className="absolute top-3 right-3 rounded-full bg-black/40 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                                                {car.year}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col p-4 @xl:p-6">
                                        <div className="mb-1 flex items-center justify-between">
                                            <h3 className="font-header text-xl font-bold uppercase tracking-wide text-slate-900 dark:text-white">{car.brand} {car.model}</h3>
                                            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">favorite_border</span>
                                        </div>
                                        <div className="mb-4 flex flex-wrap gap-2">
                                            <span className="text-xs font-medium text-slate-500 dark:text-[#baaf9c]">{car.category}</span>
                                            <span className="text-xs text-slate-400 dark:text-[#6b655b]">•</span>
                                            {car.transmission && (
                                                <>
                                                    <span className="text-xs font-medium text-slate-500 dark:text-[#baaf9c]">{car.transmission}</span>
                                                    <span className="text-xs text-slate-400 dark:text-[#6b655b]">•</span>
                                                </>
                                            )}
                                            <span className="text-xs font-medium text-slate-500 dark:text-[#baaf9c]">{car.engine}</span>
                                        </div>
                                        <div className="flex items-end justify-between gap-4">
                                            <div>
                                                <p className="text-xs text-slate-500 dark:text-[#baaf9c]">{isUnavailable ? 'Vendido por' : 'A partir de'}</p>
                                                <p className={`font-header text-2xl font-bold ${isUnavailable ? 'text-slate-400 dark:text-slate-500 line-through text-xl' : 'text-primary'}`}>
                                                    R$ {car.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                                </p>
                                            </div>
                                            {isUnavailable ? (
                                                <button className="flex h-10 items-center justify-center rounded-full bg-slate-200 dark:bg-[#393328]/50 px-4 text-sm font-bold text-slate-400 dark:text-slate-600 cursor-not-allowed" disabled>
                                                    Indisponível
                                                </button>
                                            ) : (
                                                <Link href={`/veiculos/${car.id}`} className="flex h-10 items-center justify-center rounded-full bg-white dark:bg-[#393328] px-4 text-sm font-bold text-slate-900 dark:text-white transition-colors hover:bg-primary hover:text-[#181511]">
                                                    Detalhes
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )}
            </main>
        </div>
    )
}
