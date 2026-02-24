import Link from 'next/link'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export default async function Page() {
  // Buscar 2 ou 3 serviços de destaque (ex: isBestSeller = true, ou os primeiros)
  const popularServices = await prisma.service.findMany({
    where: { isAvailable: true },
    take: 3,
    orderBy: [
      { isBestSeller: 'desc' },
      { createdAt: 'desc' },
    ],
  })

  return (
    <main className="min-h-screen bg-black flex justify-center text-slate-100 font-display selection:bg-primary selection:text-white">
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:grid lg:grid-cols-[1.3fr_1fr] bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden min-h-screen">
        {/* HEADER LOGO */}
        <header className="absolute top-0 left-0 w-full z-50 p-6 flex justify-center">
          <h1 className="font-heading text-3xl font-bold tracking-widest text-white drop-shadow-md">
            MÁFIA<span className="text-primary">BR</span>
          </h1>
        </header>

        {/* =========================================
            COLUNA ESQUERDA: HERO
            (Mobile: topo, Desktop: fixa lado esquerdo)
           ========================================= */}
        <div className="relative flex flex-col w-full h-[65vh] lg:h-screen justify-end pb-12 px-6">
          {/* VIDEO BACKGROUND */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
          <div className="absolute inset-0 z-10 bg-black/40"></div> {/* Extra darkness for readability */}

          {/* HERO CONTENT */}
          <div className="relative z-20 flex flex-col items-center text-center space-y-4">
            <h2 className="font-heading text-4xl font-bold leading-tight text-white uppercase translate-y-4 animate-fade-in-up">
              Tradição &amp; <br />
              <span className="text-primary italic font-light">Estilo</span>
            </h2>
            <p className="text-sm text-slate-300 max-w-[280px] font-light translate-y-4 animate-fade-in-up animation-delay-100">
              A barbearia dos que não abrem mão de qualidade e respeito.
            </p>

            <div className="pt-4 w-full px-4 translate-y-4 animate-fade-in-up animation-delay-200">
              <Link href="/servicos" className="block w-full">
                <button className="group relative w-full overflow-hidden rounded-none bg-primary py-4 px-6 text-background-dark transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm font-bold tracking-widest uppercase font-heading">
                    AGENDAR HORÁRIO
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================
            COLUNA DIREITA: CONTEÚDO
            (Mobile: fluxo comum, Desktop: scrollável)
           ========================================= */}
        <div className="relative flex flex-col w-full h-auto lg:h-screen lg:overflow-y-auto bg-background-dark scrollbar-hide">

          {/* BARBERS SECTION (Nossos Mestres) */}
          <section className="relative z-20 bg-surface-dark px-6 py-12 lg:py-16 flex-1">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-slate-100">
                Nossos Mestres
              </h3>
              <span className="text-xs text-primary font-bold tracking-widest uppercase cursor-pointer hover:text-white transition-colors">VER TODOS</span>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide snap-x">
              {/* Barbeiro 1 */}
              <div className="flex-shrink-0 flex flex-col items-center space-y-3 snap-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-surface-dark ring-2 ring-primary/30 p-1">
                  <img src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&amp;w=200&amp;h=200&amp;fit=crop" alt="Vito" className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-slate-200">Vito</p>
                  <p className="text-[10px] text-primary uppercase tracking-widest">Especialista</p>
                </div>
              </div>
              {/* Barbeiro 2 */}
              <div className="flex-shrink-0 flex flex-col items-center space-y-3 snap-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-surface-dark ring-2 ring-transparent p-1">
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=200&amp;h=200&amp;fit=crop" alt="Sonny" className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-slate-200">Sonny</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest">Sênior</p>
                </div>
              </div>
              {/* Barbeiro 3 */}
              <div className="flex-shrink-0 flex flex-col items-center space-y-3 snap-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-surface-dark ring-2 ring-transparent p-1">
                  <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&amp;w=200&amp;h=200&amp;fit=crop" alt="Michael" className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-slate-200">Michael</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest">Sênior</p>
                </div>
              </div>
              {/* Barbeiro 4 */}
              <div className="flex-shrink-0 flex flex-col items-center space-y-3 snap-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-surface-dark ring-2 ring-transparent p-1">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=200&amp;h=200&amp;fit=crop" alt="Tom" className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-slate-200">Tom</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest">Clássico</p>
                </div>
              </div>
            </div>
          </section>

          {/* POPULAR SERVICES */}
          <section className="relative z-20 bg-background-dark px-6 py-10 pb-20">
            <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-slate-100 mb-6">
              Serviços Populares
            </h3>

            <div className="space-y-4">
              {popularServices.length === 0 ? (
                <p className="text-sm text-slate-400">Nenhum serviço destaque no momento.</p>
              ) : (
                popularServices.map((service) => (
                  <Link href="/servicos" key={service.id}>
                    <div className="group flex items-center justify-between p-4 bg-surface-dark/50 border border-white/5 rounded-lg hover:bg-surface-dark transition-colors cursor-pointer mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-black/40 rounded flex items-center justify-center text-primary">
                          {/* Ícone Genérico Baseado no Nome */}
                          {service.name.toLowerCase().includes('barba') ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wind"><path d="M12.8 19.6A2 2 0 1 0 14 16H2" /><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" /><path d="M9.8 4.4A2 2 0 1 1 11 8H2" /></svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scissors"><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" x2="8.12" y1="4" y2="15.88" /><line x1="14.47" x2="20" y1="14.48" y2="20" /><line x1="8.12" x2="12" y1="8.12" y2="12" /></svg>
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-200 font-heading tracking-wide uppercase">{service.name}</h4>
                          <p className="text-xs text-slate-400 line-clamp-1">{service.description || 'O melhor estilo para você'}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">R$ {service.price.toFixed(2).replace('.', ',')}</p>
                        <p className="text-[10px] text-slate-500">{service.duration} min</p>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </section>

          {/* FOOTER */}
          <footer className="relative z-20 bg-black py-8 px-6 text-center border-t border-white/5">
            <h2 className="font-heading text-xl font-bold tracking-widest text-white/50 mb-4">
              MÁFIA<span className="text-primary/50">BR</span>
            </h2>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Av. Paulista, 1578 - SP</p>
            <p className="text-xs text-slate-500 uppercase tracking-widest">(11) 99999-9999</p>
          </footer>

          {/* FIM COLUNA DIREITA */}
        </div>
      </div>
    </main>
  )
}
