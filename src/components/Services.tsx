type ServiceItem = {
  title: string
  description: string
  ctaText?: string
  imageUrl?: string
}

type ServicesContent = {
  heading: string
  items: ServiceItem[]
}

export function Services({ content }: { content: ServicesContent }) {
  return (
    <section id="services" className="section-alt" aria-labelledby="services-heading">
      <h2 id="services-heading">{content.heading}</h2>
      <div style={{ display: 'grid', gap: 'var(--space-md)', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {content.items.map((item, i) => (
          <article key={i} className="card service-card">
            {item.imageUrl && (
              <img src={item.imageUrl} alt="" className="service-card__image" />
            )}
            <h3>{item.title}</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-sm)' }}>{item.description}</p>
            {item.ctaText && (
              <a href="#contact" style={{ fontWeight: 600 }}>{item.ctaText}</a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
