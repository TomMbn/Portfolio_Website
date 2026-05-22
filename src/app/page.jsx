import Header from '../components/header/Header'
import Home from '../components/home/Home'
import Skills from '../components/skills/Skills'
import Experience from '../components/experience/Experience'
import Work from '../components/project/Work'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
export const metadata = {
  title: 'Tom Mauboussin | Full Stack Developer — Next.js, Vue.js & Laravel',
  description: 'Full Stack developer specializing in Next.js, Vue.js, Laravel and MySQL. Building modern, performant web applications. Open to new opportunities.',
  alternates: {
    canonical: 'https://tommauboussin.com/',
    languages: {
      'x-default': 'https://tommauboussin.com/',
      en: 'https://tommauboussin.com/',
      fr: 'https://tommauboussin.com/fr/',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Tom Mauboussin | Full Stack Developer — Next.js, Vue.js & Laravel',
    description: 'Full Stack developer specializing in Next.js, Vue.js, Laravel and MySQL. Building modern, performant web applications.',
    url: 'https://tommauboussin.com/',
    siteName: 'Tom Mauboussin',
    images: [{ url: 'https://tommauboussin.com/og-image.jpg', width: 1200, height: 630, alt: 'Tom Mauboussin — Full Stack Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tom Mauboussin | Full Stack Developer — Next.js, Vue.js & Laravel',
    description: 'Full Stack developer specializing in Next.js, Vue.js, Laravel and MySQL.',
    images: ['https://tommauboussin.com/og-image.jpg'],
  },
}

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://tommauboussin.com/#person',
    name: 'Tom Mauboussin',
    jobTitle: 'Full-Stack Developer',
    description: 'Full Stack developer specializing in Next.js, Vue.js, Laravel and MySQL.',
    image: { '@type': 'ImageObject', url: 'https://tommauboussin.com/og-image.jpg' },
    email: 'tom.mauboussin@gmail.com',
    url: 'https://tommauboussin.com/',
    knowsAbout: ['Next.js', 'Vue.js', 'React', 'Laravel', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'Docker', 'TypeScript', 'Tailwind CSS'],
    sameAs: ['https://www.linkedin.com/in/tommauboussin', 'https://github.com/TomMbn'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://tommauboussin.com/#website',
    url: 'https://tommauboussin.com/',
    name: 'Tom Mauboussin',
    author: { '@id': 'https://tommauboussin.com/#person' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': 'https://tommauboussin.com/#webpage',
    url: 'https://tommauboussin.com/',
    name: 'Tom Mauboussin — Full-Stack Developer',
    isPartOf: { '@id': 'https://tommauboussin.com/#website' },
    mainEntity: { '@id': 'https://tommauboussin.com/#person' },
    about: { '@id': 'https://tommauboussin.com/#person' },
    dateModified: '2026-05-22T00:00:00+00:00',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Tom Mauboussin — Full-Stack Developer', item: 'https://tommauboussin.com/' }],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Portfolio Projects — Tom Mauboussin',
    author: { '@id': 'https://tommauboussin.com/#person' },
    itemListElement: [
      { '@type': 'ListItem', position: 1, item: { '@type': 'SoftwareSourceCode', name: 'Booki', description: 'Hotel and activity booking interface built with HTML and CSS.', programmingLanguage: ['HTML', 'CSS'], codeRepository: 'https://github.com/TomMbn/Project-2-HTML-CSS-', author: { '@id': 'https://tommauboussin.com/#person' } } },
      { '@type': 'ListItem', position: 2, item: { '@type': 'SoftwareSourceCode', name: 'Sophie Bluel', description: 'Dynamic portfolio page with admin login and project management.', programmingLanguage: ['HTML', 'CSS', 'JavaScript'], codeRepository: 'https://github.com/TomMbn/Project-3-OpenClassrooms-JS-', author: { '@id': 'https://tommauboussin.com/#person' } } },
      { '@type': 'ListItem', position: 3, item: { '@type': 'SoftwareSourceCode', name: 'Nina Carducci', description: 'SEO and performance optimization for a photographer website.', programmingLanguage: ['HTML', 'CSS', 'JavaScript'], codeRepository: 'https://github.com/TomMbn/Project-5-Debug-Optimization', author: { '@id': 'https://tommauboussin.com/#person' } } },
      { '@type': 'ListItem', position: 4, item: { '@type': 'SoftwareSourceCode', name: 'Kasa', description: 'Real estate rental SPA with dynamic listings.', programmingLanguage: ['React', 'CSS'], codeRepository: 'https://github.com/TomMbn/Projet-6---ReactJS', author: { '@id': 'https://tommauboussin.com/#person' } } },
      { '@type': 'ListItem', position: 5, item: { '@type': 'SoftwareSourceCode', name: 'Mon Vieux Grimoire', description: 'Book rating website with user accounts and ratings.', programmingLanguage: ['Node.js', 'Express', 'MongoDB'], codeRepository: 'https://github.com/TomMbn/TomMbn-Projet-7---NodeJS-Express-MongoDB', author: { '@id': 'https://tommauboussin.com/#person' } } },
    ],
  },
]

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header lang="en" />
      <main className="main">
        <Home lang="en" />
        <Skills lang="en" />
        <Experience lang="en" />
        <Work lang="en" />
        <Contact lang="en" />
        <Footer />
      </main>
    </>
  )
}
