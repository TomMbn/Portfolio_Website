import Header from '../../components/header/Header'
import Home from '../../components/home/Home'
import Skills from '../../components/skills/Skills'
import Experience from '../../components/experience/Experience'
import Work from '../../components/project/Work'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'
import LangSetup from '../../components/LangSetup'

export const metadata = {
  title: 'Tom Mauboussin | Développeur Full Stack — Next.js, Vue.js & Laravel',
  description: 'Développeur Full Stack spécialisé en Next.js, Vue.js, Laravel et MySQL. Création d\'applications web modernes et performantes. Ouvert aux nouvelles opportunités.',
  alternates: {
    canonical: 'https://tommauboussin.com/fr/',
    languages: {
      'x-default': 'https://tommauboussin.com/',
      en: 'https://tommauboussin.com/',
      fr: 'https://tommauboussin.com/fr/',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Tom Mauboussin | Développeur Full Stack — Next.js, Vue.js & Laravel',
    description: 'Développeur Full Stack spécialisé en Next.js, Vue.js, Laravel et MySQL.',
    url: 'https://tommauboussin.com/fr/',
    siteName: 'Tom Mauboussin',
    images: [{ url: 'https://tommauboussin.com/og-image.jpg', width: 1200, height: 630, alt: 'Tom Mauboussin — Développeur Full Stack' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tom Mauboussin | Développeur Full Stack — Next.js, Vue.js & Laravel',
    description: 'Développeur Full Stack spécialisé en Next.js, Vue.js, Laravel et MySQL.',
    images: ['https://tommauboussin.com/og-image.jpg'],
  },
  other: {
    'content-language': 'fr',
  },
}

export default function PageFR() {
  return (
    <>
      <LangSetup lang="fr" />
      <Header lang="fr" />
      <main className="main">
        <Home lang="fr" />
        <Skills lang="fr" />
        <Experience lang="fr" />
        <Work lang="fr" />
        <Contact lang="fr" />
        <Footer />
      </main>
    </>
  )
}
