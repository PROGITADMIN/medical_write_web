import Image from "next/image";

export default function PageHero({ badge, title, description, imageSrc, children }: { badge?: string; title: string; description: string; imageSrc?: string; children?: React.ReactNode }) { 
  return ( 
    <section className={`section ${imageSrc ? 'py-20 md:py-32' : 'py-32 md:py-48 min-h-[50vh] flex items-center'} relative overflow-hidden`} style={{ background: "var(--warm-bg)" }}> 
      <div className="container-site max-w-6xl w-full">
        <div className={`flex flex-col w-full ${imageSrc ? 'lg:flex-row items-center gap-12 text-left' : 'items-center text-center max-w-4xl mx-auto flex-col'}`}>
          <div className="flex-1 w-full flex flex-col items-center">
            {badge && (
              <span className="inline-block border border-[var(--cream-dark)] bg-white rounded-full px-5 py-2 text-xs font-semibold tracking-widest uppercase text-[var(--teal)] mb-8 shadow-sm">
                {badge}
              </span>
            )} 
            <h1 className="font-display mb-6 text-center" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--brown-dark)", fontWeight: 400, lineHeight: 1.1 }}> 
              {title} 
            </h1> 
            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl text-[var(--text-muted)] text-center"> 
              {description} 
            </p> 
            {children && (
              <div className={`flex flex-wrap gap-4 ${imageSrc ? 'justify-start' : 'justify-center'}`}>
                {children}
              </div>
            )} 
          </div>
          {imageSrc && (
            <div className="flex-1 w-full">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[var(--cream-dark)]">
                <Image src={imageSrc} alt={title} fill className="object-cover" />
              </div>
            </div>
          )}
        </div>
      </div> 
    </section> 
  ); 
}
