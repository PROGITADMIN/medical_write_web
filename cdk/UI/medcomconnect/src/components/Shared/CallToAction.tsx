import Link from "next/link"; 

export default function CallToAction({ badge, title, description, primaryAction, secondaryAction }: { badge?: string; title: string; description: string; primaryAction: { label: string; href: string }; secondaryAction?: { label: string; href: string }; }) { 
  return ( 
    <section className="section" style={{ background: "var(--brown-dark)", color: "white" }}> 
      <div className="container-site max-w-4xl text-center py-8"> 
        {badge && (
          <span className="text-xs font-medium uppercase tracking-wider mb-6 inline-block" style={{ color: "var(--sand-dark)" }}>
            {badge}
          </span>
        )} 
        <h2 className="font-display mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.15 }}> 
          {title} 
        </h2> 
        <p className="text-lg md:text-xl text-center leading-relaxed mb-10 opacity-90 mx-auto max-w-2xl"> 
          {description} 
        </p> 
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4"> 
          <Link href={primaryAction.href} className="btn-primary" style={{ background: "var(--teal)", color: "white", borderColor: "var(--teal)" }}> 
            {primaryAction.label} 
          </Link> 
          {secondaryAction && ( 
            <Link href={secondaryAction.href} className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}> 
              {secondaryAction.label} 
            </Link> 
          )} 
        </div> 
      </div> 
    </section> 
  ); 
}
