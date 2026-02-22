import { useEffect } from 'react'
import content from './content/siteContent.json'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Bio } from './components/Bio'
import { Credentials } from './components/Credentials'
import { Services } from './components/Services'
import { ServiceArea } from './components/ServiceArea'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'

type SiteContent = {
  seo?: { metaTitle?: string; metaDescription?: string; keywords?: string; canonicalUrl?: string; ogImageUrl?: string }
  hero: { name: string; designation: string; tagline: string; ctaText?: string; ctaHref?: string }
  bio: { heading: string; paragraphs: string[]; highlights: string[]; imageUrl?: string }
  credentials: { heading: string; items: { title: string; description?: string; year?: string; issuer?: string }[] }
  services: { heading: string; items: { title: string; description: string; ctaText?: string; imageUrl?: string }[] }
  serviceArea: { heading: string; intro?: string; areas: string[] | { name: string; description?: string }[] }
  testimonials: { heading: string; items: { quote: string; author: string; roleOrContext?: string; outcome?: string }[] }
  footer: {
    contactLine?: string
    email?: string
    trustBadges?: string[]
    whatsappNumber?: string
    whatsappMessage?: string
    whatsappLabel?: string
  }
}

const data = content as SiteContent

function injectJsonLd() {
  const areaServed = Array.isArray(data.serviceArea.areas)
    ? data.serviceArea.areas.map((a) => (typeof a === 'string' ? a : a.name))
    : []
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.hero.name,
    jobTitle: data.hero.designation,
    description: data.seo?.metaDescription || data.hero.tagline,
    ...(areaServed.length > 0 && { areaServed: areaServed.map((name) => ({ '@type': 'Place', name })) }),
  }
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(jsonLd)
  document.head.appendChild(script)
}

export default function App() {
  useEffect(() => {
    if (data.seo?.metaTitle) document.title = data.seo.metaTitle
    const desc = document.querySelector('meta[name="description"]')
    if (desc && data.seo?.metaDescription) desc.setAttribute('content', data.seo.metaDescription)
    injectJsonLd()

    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID
    if (gaId && typeof gaId === 'string' && gaId.startsWith('G-')) {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
      document.head.appendChild(script)
      const config = document.createElement('script')
      config.textContent = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`
      document.head.appendChild(config)
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero content={data.hero} />
        <Bio content={data.bio} />
        <Credentials content={data.credentials} />
        <Services content={data.services} />
        <ServiceArea content={data.serviceArea} />
        <Testimonials content={data.testimonials} />
        <Contact content={data.footer} />
      </main>
    </>
  )
}
