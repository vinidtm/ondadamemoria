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

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${lora.variable} ${openSans.variable}`}>
      <head>
        {/* Otimização de Carregamento da Vturb */}
        <link rel="preload" href="https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/684afea5e6c281d4affd78cd/v4/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script" />
        <link rel="preload" href="https://cdn.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/684afe9ba691d5032736115a/main.m3u8" as="fetch" />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
        
<script
  src="https://cdn.utmify.com.br/scripts/utms/latest.js"
  data-utmify-prevent-xcod-sck
  data-utmify-prevent-subids
  async
  defer
></script>

      </head>
      <body className="font-lora antialiased" style={{
        fontFamily: 'Lora, serif',
        fontWeight: 400,
        color: '#000',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      }}>
        
        {/* CSS customizado para aplicar fontes como no original */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body {
              font-family: 'Lora', serif;
              font-weight: 400;
              color: #000;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            
            /* Aplicar Open Sans nas referências científicas como no original */
            .ref-list li {
              font-family: 'Open Sans', sans-serif !important;
              font-size: 14px !important;
              line-height: 20px !important;
            }
            
            /* Garantir que outros elementos usem as fontes corretas */
            .font-open-sans {
              font-family: 'Open Sans', sans-serif;
            }
            
            .font-lora {
              font-family: 'Lora', serif;
            }
          `
        }} />
        {children}
      </body>
    </html>
  )
}