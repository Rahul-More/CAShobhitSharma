type ServiceAreaContent = {
  heading: string
  intro?: string
  areas: string[] | { name: string; description?: string }[]
}

function isAreaObject(area: string | { name: string; description?: string }): area is { name: string; description?: string } {
  return typeof area === 'object' && area !== null && 'name' in area
}

export function ServiceArea({ content }: { content: ServiceAreaContent }) {
  return (
    <section id="service-area" aria-labelledby="service-area-heading">
      <h2 id="service-area-heading">{content.heading}</h2>
      {content.intro && <p style={{ maxWidth: 'var(--line-length)' }}>{content.intro}</p>}
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)', listStyle: 'none', padding: 0, margin: 'var(--space-sm) 0 0' }}>
        {content.areas.map((area, i) => {
          const name = isAreaObject(area) ? area.name : area
          const desc = isAreaObject(area) ? area.description : null
          return (
            <li key={i} className="area-tag">
              <strong>{name}</strong>
              {desc && <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{desc}</span>}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
