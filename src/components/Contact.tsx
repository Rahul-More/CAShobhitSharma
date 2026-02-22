import { useState } from 'react'
import type { FormEvent } from 'react'

type FooterContent = {
  contactLine?: string
  email?: string
  trustBadges?: string[]
  whatsappNumber?: string
  whatsappMessage?: string
  whatsappLabel?: string
}

function buildMailto(email: string, subject: string, body: string): string {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const q = params.toString()
  return `mailto:${email}${q ? `?${q}` : ''}`
}

export function Contact({ content }: { content: FooterContent }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const to = content.email || 'contact@example.com'
    const subject = `Contact from website${name ? ` – ${name}` : ''}`
    const body = [name && `Name: ${name}`, email && `Email: ${email}`, message && `Message:\n${message}`].filter(Boolean).join('\n\n')
    window.location.href = buildMailto(to, subject, body)
  }

  const whatsappUrl = content.whatsappNumber
    ? `https://wa.me/${content.whatsappNumber.replace(/\D/g, '')}${content.whatsappMessage ? `?text=${encodeURIComponent(content.whatsappMessage)}` : ''}`
    : null
  const whatsappLabel = content.whatsappLabel || 'Chat on WhatsApp'

  return (
    <>
      <section id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact</h2>
        {content.contactLine && <p style={{ maxWidth: 'var(--line-length)' }}>{content.contactLine}</p>}

        <div style={{ display: 'grid', gap: 'var(--space-lg)', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: 'var(--space-md)' }}>
          <div>
            {content.email && (
              <p>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${content.email}`}>{content.email}</a>
              </p>
            )}
            {whatsappUrl && (
              <p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>
                  {whatsappLabel}
                </a>
              </p>
            )}
            {content.trustBadges && content.trustBadges.length > 0 && (
              <p style={{ marginTop: 'var(--space-sm)', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                {content.trustBadges.join(' · ')}
              </p>
            )}
          </div>

          <form className="contact-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', maxWidth: '400px' }}>
            <label htmlFor="contact-name">
              <span className="sr-only">Name</span>
              <input
                id="contact-name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Your name"
              />
            </label>
            <label htmlFor="contact-email">
              <span className="sr-only">Email</span>
              <input
                id="contact-email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Your email"
              />
            </label>
            <label htmlFor="contact-message">
              <span className="sr-only">Message</span>
              <textarea
                id="contact-message"
                placeholder="Message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-label="Your message"
              />
            </label>
            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              Send via email
            </button>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>
              Opens your email client with the message pre-filled.
            </p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        {content.contactLine && <p style={{ margin: '0 0 var(--space-sm)' }}>{content.contactLine}</p>}
        {content.email && (
          <p style={{ margin: '0 0 var(--space-xs)' }}>
            <a href={`mailto:${content.email}`}>{content.email}</a>
          </p>
        )}
        {whatsappUrl && (
          <p style={{ margin: '0 0 var(--space-sm)' }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{whatsappLabel}</a>
          </p>
        )}
        {content.trustBadges && content.trustBadges.length > 0 && (
          <p style={{ fontSize: '0.9rem', opacity: 0.9, margin: 0 }}>{content.trustBadges.join(' · ')}</p>
        )}
      </footer>

      {whatsappUrl && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={whatsappLabel}
          className="whatsapp-float"
        >
          <span aria-hidden="true">💬</span>
        </a>
      )}
    </>
  )
}
