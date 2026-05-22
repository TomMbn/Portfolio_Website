import '../globals.css'
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL('https://tommauboussin.com'),
  authors: [{ name: 'Tom Mauboussin' }],
  robots: { index: true, follow: true, googleBot: { 'max-snippet': -1, 'max-image-preview': 'large' } },
  openGraph: { type: 'website', siteName: 'Tom Mauboussin', images: [{ url: '/og-image.jpg' }] },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
}

export default function RootLayoutFR({ children }) {
  return (
    <html lang="fr">
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TM4LLNVB');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TM4LLNVB"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
