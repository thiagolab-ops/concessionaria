"use client"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-screen-md bg-background-dark relative shadow-2xl overflow-hidden flex flex-col">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-[80vh] object-cover opacity-40"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-transparent to-background-dark"></div>
      </div>
      <header className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-screen-md">
        <div className="glass-panel px-4 py-3 flex items-center justify-between border-b border-surface-border/30 rounded-b-2xl mx-2 mt-2">
          <div className="flex items-center gap-3">
            <button className="text-white p-1 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
            <h2 className="text-white text-xl font-bold tracking-tight uppercase">Luxe Motors</h2>
          </div>
          <a href="tel:+5511999999999" className="flex items-center gap-2 bg-surface-dark/80 hover:bg-surface-dark border border-surface-border rounded-full px-3 py-1.5 transition-all group">
            <span className="text-text-secondary text-xs font-bold uppercase tracking-wider group-hover:text-white">Contact</span>
            <span className="material-symbols-outlined text-primary text-sm">call</span>
          </a>
        </div>
      </header>
      <main className="flex-grow flex flex-col pt-20">
        <section className="relative px-4 pt-6 pb-4">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold tracking-[0.15em] uppercase mb-3 backdrop-blur-sm">
              In Stock Now
            </span>
            <h1 className="text-white text-4xl font-black leading-none tracking-tighter uppercase mb-2">
              NOSSOS <span className="text-primary">DESTAQUES</span>
            </h1>
            <p className="text-text-secondary text-xs uppercase tracking-widest font-medium">Scroll to explore the fleet</p>
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 -mx-4 px-4">
            <div className="flex-none w-[85%] snap-center">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-surface-border group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
                <img alt="Supercar" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUyyY-BbnKUEthuVEf7rJLlqNuheFuKrqgnDcn62SED5Nq01JF3rP1gvopP-j7lzpBRx-ni2tx0AjVXCFyNkSdIrC3fCTIFjXQVAdJ5eiAekNTpWUg4GIOE4C2vgdku0YZKKvbEwIX6I49DA7LsylS4-fAOXUlF1FwZEhn1orgHP9DemtDwnGJw9yi5PJXigV69JApa6Ta8GKm2sqWsz6ueWjOSk5ATwoI5ZJ_lBcVaq2_Uq1JeJ-yf8KVvCYxWBwUX4gnhVf3Lcs" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-white text-2xl font-black uppercase mb-1">Stallion GTS</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[10px] font-bold bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/20 uppercase tracking-tighter text-white">V8 Biturbo</span>
                    <span className="text-[10px] font-bold bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/20 uppercase tracking-tighter text-white">720 HP</span>
                    <span className="text-[10px] font-bold bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/20 uppercase tracking-tighter text-white">0-100 in 2.9s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-lg">Sob Consulta</span>
                    <button className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-background-dark">
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none w-[85%] snap-center">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-surface-border group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
                <img alt="Luxury SUV" className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy43ixyR_FhnLcc3dGuSWvgp4KKOJe0WJO_qn5IsqVJvG5dPousJ0JHAhrTh0GiQIo_4wxc1xYGcIjAK10VzkghDjYETMkbdza3gxDZxMdQSoVQ7j6MfuO5fpSufuV2VpPLp7XMugikdG32woaQn6HaRHgNwvyBJxh4ZFevyyQuxk-ABEU5ljyg1MQI5C8CX1WEv77ecbf2k76DsuTMEf71m6FYsCOqu9UJ-w03E_-g8muNWzmfcoYRPbY7m9CO6xe3twegKIag2I" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-white text-2xl font-black uppercase mb-1">Apex Executive</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[10px] font-bold bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/20 uppercase tracking-tighter text-white">Hybrid V6</span>
                    <span className="text-[10px] font-bold bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/20 uppercase tracking-tighter text-white">All-Wheel Drive</span>
                    <span className="text-[10px] font-bold bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/20 uppercase tracking-tighter text-white">Full Armor Ready</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-lg">Sob Consulta</span>
                    <button className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-background-dark">
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none w-[85%] snap-center">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-surface-border group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
                <img alt="Classic Cruiser" className="absolute inset-0 h-full w-full object-cover grayscale brightness-50 transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAln9obIovO0g6PLcF6YjX01Elj0KmRrSTcGTiiXf-EfGXWiTumBQzJr0E6l4DqZ4_x94j2goBgML770p3KzQKUU4lp43xCe516PQEJEZt4iZ26-ZpNgNAUVZOzUn8YreGmc6MrTxPnEjcXYvDe_grhs1v6myu4tAaeM5eQLoHUNCTQif06M_twovBa-_mHXKFCq8csMAFFYj5jsnHA_8K-odKCVqofLB2NmsIYH3myQSsDHLpDl0CWyTFTDCD3oMt4y0dohOKXqJc" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-white text-2xl font-black uppercase mb-1">Phantom Series</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[10px] font-bold bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/20 uppercase tracking-tighter text-white">V12 Pure</span>
                    <span className="text-[10px] font-bold bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/20 uppercase tracking-tighter text-white">Midnight Edition</span>
                    <span className="text-[10px] font-bold bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/20 uppercase tracking-tighter text-white">Bespoke Interior</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-lg">Sob Consulta</span>
                    <button className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-background-dark">
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-6 bg-surface-dark/30">
          <Link href="/veiculos" className="w-full flex items-center justify-between bg-primary rounded-2xl h-16 px-6 shadow-[0_0_25px_rgba(245,159,10,0.3)] group active:scale-[0.98] transition-all">
            <span className="text-background-dark text-lg font-black uppercase tracking-tight">Ver Estoque Completo</span>
            <div className="flex items-center gap-2">
              <span className="text-background-dark/70 text-sm font-bold">42 carros</span>
              <span className="material-symbols-outlined text-background-dark font-bold group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </Link>
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-text-secondary text-[10px] font-black tracking-widest uppercase">Feedback dos Clientes</h4>
              <div className="h-px bg-surface-border flex-1 ml-4"></div>
            </div>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 -mx-4 px-4 snap-x">
              <div className="flex-none w-64 bg-surface-dark/50 border border-surface-border/50 rounded-xl p-4 snap-start">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-cover bg-center border border-primary/50" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCy43ixyR_FhnLcc3dGuSWvgp4KKOJe0WJO_qn5IsqVJvG5dPousJ0JHAhrTh0GiQIo_4wxc1xYGcIjAK10VzkghDjYETMkbdza3gxDZxMdQSoVQ7j6MfuO5fpSufuV2VpPLp7XMugikdG32woaQn6HaRHgNwvyBJxh4ZFevyyQuxk-ABEU5ljyg1MQI5C8CX1WEv77ecbf2k76DsuTMEf71m6FYsCOqu9UJ-w03E_-g8muNWzmfcoYRPbY7m9CO6xe3twegKIag2I')" }}></div>
                  <div>
                    <p className="text-white text-[11px] font-bold leading-none">João Carlos</p>
                    <div className="flex text-primary text-[10px]">
                      <span className="material-symbols-outlined text-[10px] fill-current">star</span>
                      <span className="material-symbols-outlined text-[10px] fill-current">star</span>
                      <span className="material-symbols-outlined text-[10px] fill-current">star</span>
                      <span className="material-symbols-outlined text-[10px] fill-current">star</span>
                      <span className="material-symbols-outlined text-[10px] fill-current">star</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-[10px] leading-tight line-clamp-2 italic">"Incrível experiência de compra! O atendimento foi impecável e o carro é fantástico."</p>
              </div>
              <div className="flex-none w-64 bg-surface-dark/50 border border-surface-border/50 rounded-xl p-4 snap-start">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-cover bg-center border border-primary/50" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyWKW8oOkLPbwjS-pAybmTDGQGu8WdEe9BMh103VDrbnGfHpJHoUa7gyi3CVyRkNxy0rUIkH9oTKR7qSZE6MsOqPVLxaYZz498wEaK2IdPO5-EHk-X1Z0PzT5Zi8WfdkWbp_4IiOBAOUNczGmku9LyLnGLtsdd1xEOopKsIT-PHpctU4Aa9TKjNwa9AlOfr7nRcby6y26asq5E0Vyk8ZlMwUvEisWjaXTzWM33IBCUv5Djw2ltt-E411HycSoB9YqzxaS_noE6T3Q')" }}></div>
                  <div>
                    <p className="text-white text-[11px] font-bold leading-none">Maria Silva</p>
                    <div className="flex text-primary text-[10px]">
                      <span className="material-symbols-outlined text-[10px] fill-current">star</span>
                      <span className="material-symbols-outlined text-[10px] fill-current">star</span>
                      <span className="material-symbols-outlined text-[10px] fill-current">star</span>
                      <span className="material-symbols-outlined text-[10px] fill-current">star</span>
                      <span className="material-symbols-outlined text-[10px] fill-current">star</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-[10px] leading-tight line-clamp-2 italic">"Profissionalismo e qualidade. Recomendo a todos que buscam um veículo premium."</p>
              </div>
              <div className="flex-none w-64 bg-surface-dark/50 border border-surface-border/50 rounded-xl p-4 snap-start">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-cover bg-center border border-primary/50" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAln9obIovO0g6PLcF6YjX01Elj0KmRrSTcGTiiXf-EfGXWiTumBQzJr0E6l4DqZ4_x94j2goBgML770p3KzQKUU4lp43xCe516PQEJEZt4iZ26-ZpNgNAUVZOzUn8YreGmc6MrTxPnEjcXYvDe_grhs1v6myu4tAaeM5eQLoHUNCTQif06M_twovBa-_mHXKFCq8csMAFFYj5jsnHA_8K-odKCVqofLB2NmsIYH3myQSsDHLpDl0CWyTFTDCD3oMt4y0dohOKXqJc')" }}></div>
                  <div>
                    <p className="text-white text-[11px] font-bold leading-none">Pedro Santos</p>
                    <div className="flex text-primary text-[10px]">
                      <span className="material-symbols-outlined text-[10px] fill-current">star</span>
                      <span className="material-symbols-outlined text-[10px] fill-current">star</span>
                      <span className="material-symbols-outlined text-[10px] fill-current">star</span>
                      <span className="material-symbols-outlined text-[10px] fill-current">star</span>
                      <span className="material-symbols-outlined text-[10px]">star</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-[10px] leading-tight line-clamp-2 italic">"Transparência total do início ao fim. O pós-venda também é excelente."</p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-8">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-surface-dark border border-surface-border/30 rounded-2xl p-4 text-center">
              <p className="text-primary text-xl font-black">500+</p>
              <p className="text-[8px] text-text-secondary uppercase font-bold tracking-tighter">Clientes</p>
            </div>
            <div className="bg-surface-dark border border-surface-border/30 rounded-2xl p-4 text-center">
              <p className="text-primary text-xl font-black">1.2k</p>
              <p className="text-[8px] text-text-secondary uppercase font-bold tracking-tighter">Vendidos</p>
            </div>
            <div className="bg-surface-dark border border-surface-border/30 rounded-2xl p-4 text-center">
              <p className="text-primary text-xl font-black">15</p>
              <p className="text-[8px] text-text-secondary uppercase font-bold tracking-tighter">Anos</p>
            </div>
          </div>
        </section>
        <footer className="bg-surface-dark mt-auto border-t border-surface-border p-8 pb-24">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-white text-xl font-bold tracking-tight uppercase mb-2">Luxe Motors</h2>
              <p className="text-text-secondary text-sm">Elevating your driving experience since 2009.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                <p className="text-gray-300 text-sm">Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">call</span>
                <p className="text-gray-300 text-sm">+55 (11) 99999-9999</p>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <Link className="h-10 w-10 rounded-full bg-surface-border/30 flex items-center justify-center text-white hover:bg-primary transition-all" href="#">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
              </Link>
              <Link className="h-10 w-10 rounded-full bg-surface-border/30 flex items-center justify-center text-white hover:bg-primary transition-all" href="#">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.063zm1.326 2.186H12c-2.57 0-2.91.01-3.953.058-.996.046-1.536.216-1.896.356a3.003 3.003 0 00-1.12.73 2.997 2.997 0 00-.729 1.12c-.14.36-.31.9-.356 1.895-.048 1.043-.058 1.384-.058 3.954v.473c0 2.57.01 2.91.058 3.953.046.996.216 1.536.356 1.896.257.662.636 1.164 1.284 1.417.36.14.9.31 1.896.356 1.043.048 1.384.058 3.954.058h.473c2.57 0 2.91-.01 3.953-.058.996-.046 1.536-.216 1.896-.356a3.003 3.003 0 001.12-.73 2.997 2.997 0 00.729-1.12c.14-.36.31-.9.356-1.895.048-1.043.058-1.384.058-3.954v-.473c0-2.57-.01-2.91-.058-3.953-.046-.996-.216-1.536-.356-1.896a3.003 3.003 0 00-1.12-.73 2.997 2.997 0 00-.729-1.12c-.14-.36-.31-.9-.356-1.895-.048-1.043-.058-1.384-.058-3.954zm-4.462 8.136a4.136 4.136 0 118.272 0 4.136 4.136 0 01-8.272 0zm1.884 0a2.251 2.251 0 104.503 0 2.251 2.251 0 00-4.503 0zm6.942-5.748a.796.796 0 11-1.593 0 .796.796 0 011.593 0z"></path></svg>
              </Link>
            </div>
          </div>
          <div className="mt-12 border-t border-surface-border/30 pt-6 text-center">
            <p className="text-text-secondary/60 text-[10px] font-bold uppercase tracking-widest">© 2024 Luxe Motors. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
