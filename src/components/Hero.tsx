type HeroContent = {
  name: string
  designation: string
  tagline: string
  ctaText?: string
  ctaHref?: string
  backgroundImageUrl?: string
}

export function Hero({ content }: { content: HeroContent }) {
  const hasBgImage = Boolean(content.backgroundImageUrl?.trim())
  return (
    <section
      id="hero"
      className={`hero-section ${hasBgImage ? 'hero-section--with-image' : ''}`}
      aria-labelledby="hero-heading"
      style={hasBgImage ? { backgroundImage: `url(${content.backgroundImageUrl})` } : undefined}
    >
      <h1 id="hero-heading">{content.name}</h1>
      <p className="designation">{content.designation}</p>
      <p className="tagline">{content.tagline}</p>
      {content.ctaText && content.ctaHref && (
        <a href={content.ctaHref} className="hero-cta">
          {content.ctaText}
        </a>
      )}
    </section>
  )
}
