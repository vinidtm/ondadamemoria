// app/layout.tsx
import type { Metadata } from 'next'
import { Lora, Open_Sans } from 'next/font/google'
import './globals.css' // Certifique-se que este arquivo existe em app/globals.css

const lora = Lora({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-lora'
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans'
})

export const metadata: Metadata = {
  title: 'Onda da Memória - Melhore Sua Memória em 8 Segundos',
  description: 'Descubra o segredo de neurocientistas para melhorar sua memória com um simples truque de 8 segundos. Garantia de 90 dias.',
  keywords: 'memória, melhorar memória, truque de memória, neurocientista, onda da memória',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Onda da Memória - Melhore Sua Memória em 8 Segundos',
    description: 'Descubra o segredo de neurocientistas para melhorar sua memória com um simples truque de 8 segundos.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Onda da Memória',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${lora.variable} ${openSans.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXX');
            `,
          }}
        />
        
        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'SEU_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="font-lora">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        {children}
        
        {/* Scripts de rastreamento adicionais */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Rastreamento de tempo na página
              let timeOnPage = 0;
              setInterval(() => {
                timeOnPage += 1;
                if (timeOnPage === 15) {
                  if (typeof fbq !== 'undefined') {
                    fbq('trackCustom', 'TimeOnPage15s');
                  }
                }
                if (timeOnPage === 30) {
                  if (typeof fbq !== 'undefined') {
                    fbq('trackCustom', 'TimeOnPage30s');
                  }
                }
              }, 1000);
              
              // Rastreamento de clique no botão de compra
              document.addEventListener('click', (e) => {
                if (e.target.closest('a[href*="checkout"]')) {
                  if (typeof fbq !== 'undefined') {
                    fbq('track', 'InitiateCheckout');
                  }
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
}