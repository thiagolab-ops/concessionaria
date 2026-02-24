"use client"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-screen-md bg-background-dark relative shadow-2xl flex flex-col">
      <main className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
          <h1 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-tight">
            Bem-vindo à página oficial da<br /><span className="text-primary">Luxe Motors</span>
          </h1>
          <p className="text-text-secondary text-lg md:text-xl mb-12 font-medium">Exclusividade e performance em cada detalhe.</p>
          <Link href="/veiculos" className="bg-primary hover:bg-primary-dark text-background-dark px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(245,159,10,0.3)] hover:shadow-[0_0_30px_rgba(245,159,10,0.5)] hover:scale-105 active:scale-95">
            Ver Estoque Completo
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-dark border-t border-surface-border p-8 pb-32 relative z-10">
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
            <a className="h-10 w-10 rounded-full bg-surface-border/30 flex items-center justify-center text-white hover:bg-primary transition-all" href="#">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
            </a>
            <a className="h-10 w-10 rounded-full bg-surface-border/30 flex items-center justify-center text-white hover:bg-primary transition-all" href="#">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.063zm1.326 2.186H12c-2.57 0-2.91.01-3.953.058-.996.046-1.536.216-1.896.356a3.003 3.003 0 00-1.12.73 2.997 2.997 0 00-.729 1.12c-.14.36-.31.9-.356 1.895-.048 1.043-.058 1.384-.058 3.954v.473c0 2.57.01 2.91.058 3.953.046.996.216 1.536.356 1.896.257.662.636 1.164 1.284 1.417.36.14.9.31 1.896.356 1.043.048 1.384.058 3.954.058h.473c2.57 0 2.91-.01 3.953-.058.996-.046 1.536-.216 1.896-.356a3.003 3.003 0 001.12-.73 2.997 2.997 0 00.729-1.12c.14-.36.31-.9.356-1.895.048-1.043.058-1.384.058-3.954v-.473c0-2.57-.01-2.91-.058-3.953-.046-.996-.216-1.536-.356-1.896a3.003 3.003 0 00-1.12-.73 2.997 2.997 0 00-.729-1.12c-.14-.36-.31-.9-.356-1.895-.048-1.043-.058-1.384-.058-3.954zm-4.462 8.136a4.136 4.136 0 118.272 0 4.136 4.136 0 01-8.272 0zm1.884 0a2.251 2.251 0 104.503 0 2.251 2.251 0 00-4.503 0zm6.942-5.748a.796.796 0 11-1.593 0 .796.796 0 011.593 0z"></path></svg>
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-surface-border/30 pt-6 text-center">
          <p className="text-text-secondary/60 text-[10px] font-bold uppercase tracking-widest">© 2024 Luxe Motors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
