type BioContent = {
  heading: string
  paragraphs: string[]
  highlights: string[]
  imageUrl?: string
}

export function Bio({ content }: { content: BioContent }) {
  const bioImageUrl = content.imageUrl?.trim()
  const showImage = Boolean(content.imageUrl?.trim())

  return (
    <section id="bio" className="section-alt" aria-labelledby="bio-heading">
      <h2 id="bio-heading">{content.heading}</h2>
      <div style={{ display: 'grid', gap: 'var(--space-md)', gridTemplateColumns: showImage ? '1fr 200px' : '1fr', alignItems: 'start' }}>
        <div>
          {content.paragraphs.map((p, i) => (
            <p key={i} style={{ maxWidth: 'var(--line-length)' }}>{p}</p>
          ))}
          <ul style={{ paddingLeft: '1.25rem', marginTop: 'var(--space-sm)' }}>
            {content.highlights.map((h, i) => (
              <li key={i} style={{ marginBottom: 'var(--space-xs)' }}>{h}</li>
            ))}
          </ul>
        </div>
        {showImage && (
          <img
            src={bioImageUrl}
            alt=""
            className="bio-photo"
          />
        )}
      </div>
    </section>
  )
}
