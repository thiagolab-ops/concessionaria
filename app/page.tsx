import { prisma } from "@/lib/db"
import Link from "next/link"

export default async function Home() {
  const featuredVehicles = await prisma.vehicle.findMany({
    where: { status: "AVAILABLE" },
    take: 4,
    orderBy: { createdAt: "desc" }
  })

  return (
    <main className="flex flex-col min-h-screen w-full bg-background-dark overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background-dark"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 mt-20">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
            Veículos Premium & Exclusivos
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-tight">
            A sua nova <br /><span className="text-primary">Experiência</span>
          </h1>
          <p className="text-text-secondary text-lg md:text-xl mb-10 max-w-2xl font-light">
            Transparência, laudo cautelar aprovado e procedência garantida. Encontre o carro dos seus sonhos na Luxe Motors.
          </p>
          <Link href="/veiculos" className="bg-primary text-background-dark px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_30px_rgba(245,159,10,0.4)] transition-all duration-300">
            Ver Estoque Completo
          </Link>
        </div>
      </section>

      {/* VITRINE SECTION */}
      <section className="px-4 py-20 bg-background-dark relative z-10">
        <div className="max-w-screen-md mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-white text-3xl font-black uppercase tracking-tight">Recém <span className="text-primary">Chegados</span></h2>
              <p className="text-text-secondary text-sm mt-1">Os veículos mais exclusivos do nosso estoque</p>
            </div>
            <Link href="/veiculos" className="text-primary text-sm font-bold uppercase hover:underline">Ver todos &rarr;</Link>
          </div>

          {/* Grid de Carros */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredVehicles.length > 0 ? (
              featuredVehicles.map(car => (
                <Link href={`/veiculos/${car.id}`} key={car.id} className="group block bg-surface-dark border border-surface-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors shadow-lg">
                  <div className="aspect-[4/3] w-full relative overflow-hidden bg-black">
                    <img
                      src={car.images && car.images.length > 0 ? car.images[0] : "/placeholder.jpg"}
                      alt={`${car.brand} ${car.model}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-white text-xl font-bold uppercase">{car.brand} {car.model}</h3>
                    <p className="text-text-secondary text-sm mb-3">{car.year} - {car.category}</p>
                    <p className="text-primary font-bold text-lg">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(car.price)}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-text-secondary italic col-span-1 md:col-span-2 text-center py-10">Nenhum veículo em destaque no momento.</p>
            )}
          </div>
        </div>
      </section>

      {/* STATS & REVIEWS SECTION */}
      <section className="px-4 py-16 bg-surface-dark/50 border-y border-surface-border/30">
        <div className="max-w-screen-md mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-16">
            <div className="bg-background-dark border border-surface-border/50 rounded-2xl p-6 text-center shadow-lg">
              <p className="text-primary text-3xl font-black mb-1">500+</p>
              <p className="text-xs text-text-secondary uppercase font-bold tracking-widest">Clientes Satisfeitos</p>
            </div>
            <div className="bg-background-dark border border-surface-border/50 rounded-2xl p-6 text-center shadow-lg">
              <p className="text-primary text-3xl font-black mb-1">100%</p>
              <p className="text-xs text-text-secondary uppercase font-bold tracking-widest">Laudo Aprovado</p>
            </div>
            <div className="bg-background-dark border border-surface-border/50 rounded-2xl p-6 text-center shadow-lg">
              <p className="text-primary text-3xl font-black mb-1">15</p>
              <p className="text-xs text-text-secondary uppercase font-bold tracking-widest">Anos de Mercado</p>
            </div>
          </div>

          {/* Reviews */}
          <h3 className="text-white text-2xl font-black uppercase text-center mb-8">O que nossos <span className="text-primary">clientes dizem</span></h3>
          <div className="flex flex-col gap-4">
            <div className="bg-surface-dark border border-surface-border p-5 rounded-xl shadow-md">
              <div className="flex items-center gap-1 text-primary mb-2 text-sm">★★★★★</div>
              <p className="text-gray-300 text-sm italic mb-3">"Comprei minha BMW 320i sem sair de casa. O carro foi entregue na minha porta em perfeito estado, exatamente como nas fotos e no laudo. Transparência total!"</p>
              <p className="text-white text-xs font-bold uppercase">— Thiago M.</p>
            </div>
            <div className="bg-surface-dark border border-surface-border p-5 rounded-xl shadow-md">
              <div className="flex items-center gap-1 text-primary mb-2 text-sm">★★★★★</div>
              <p className="text-gray-300 text-sm italic mb-3">"A avaliação do meu usado foi muito justa e a taxa de financiamento excelente. Atendimento premium do início ao fim."</p>
              <p className="text-white text-xs font-bold uppercase">— Carlos Eduardo</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background-dark px-4 py-12 border-t border-surface-border">
        <div className="max-w-screen-md mx-auto flex flex-col gap-6 text-center md:text-left">
          <div>
            <h2 className="text-white text-2xl font-black tracking-tight uppercase mb-2">Luxe Motors</h2>
            <p className="text-text-secondary text-sm">Elevando sua experiência de direção desde 2009.</p>
          </div>
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <p className="text-gray-300 text-sm">Av. Europa, 1000 - Jardins, São Paulo - SP</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">call</span>
              <p className="text-gray-300 text-sm">+55 (11) 99999-9999</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-surface-border/30 text-center">
            <p className="text-text-secondary/60 text-xs font-bold uppercase tracking-widest">© {new Date().getFullYear()} Luxe Motors. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
