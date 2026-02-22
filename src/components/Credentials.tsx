type CredentialItem = {
  title: string
  description?: string
  year?: string
  issuer?: string
}

type CredentialsContent = {
  heading: string
  items: CredentialItem[]
}

export function Credentials({ content }: { content: CredentialsContent }) {
  return (
    <section id="credentials" aria-labelledby="credentials-heading">
      <h2 id="credentials-heading">{content.heading}</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        {content.items.map((item, i) => (
          <li key={i} className="card">
            <strong>{item.title}</strong>
            {item.issuer && <span style={{ color: 'var(--color-text-muted)' }}> · {item.issuer}</span>}
            {item.year && <span style={{ color: 'var(--color-text-muted)' }}> · {item.year}</span>}
            {item.description && <p style={{ margin: 'var(--space-xs) 0 0', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{item.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}
