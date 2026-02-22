type TestimonialItem = {
  quote: string
  author: string
  roleOrContext?: string
  outcome?: string
}

type TestimonialsContent = {
  heading: string
  items: TestimonialItem[]
}

export function Testimonials({ content }: { content: TestimonialsContent }) {
  return (
    <section id="testimonials" className="section-alt" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading">{content.heading}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        {content.items.map((item, i) => (
          <blockquote key={i} className="testimonial-block">
            <p style={{ fontStyle: 'italic', margin: '0 0 var(--space-sm)' }}>"{item.quote}"</p>
            <footer>
              <strong>{item.author}</strong>
              {item.roleOrContext && <span style={{ color: 'var(--color-text-muted)' }}> · {item.roleOrContext}</span>}
              {item.outcome && <p style={{ margin: 'var(--space-xs) 0 0', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{item.outcome}</p>}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
