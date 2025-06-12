// app/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [showBuyButton, setShowBuyButton] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  // Timer para mostrar o botão de compra após 15 minutos (900 segundos)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBuyButton(true)
    }, 900000) // 15 minutos

    // Para teste, você pode reduzir para 5 segundos: 5000

    return () => clearTimeout(timer)
  }, [])

  // Detectar tentativa de sair da página
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showPopup) {
        setShowPopup(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [showPopup])

  return (
    <>
      {/* Header com VSL */}
      <header className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Neurocientista de Nova York Revela:<br />
              <span className="text-4xl md:text-6xl text-yellow-300">
                "Faça Este Truque de 8 Segundos no Ouvido
              </span>
            </h1>
            <h2 className="bg-yellow-400 text-blue-900 text-2xl md:text-4xl font-bold inline-block px-6 py-2 mt-4">
              Para Melhorar Sua Memória..."
            </h2>
          </div>

          {/* Vídeo VSL */}
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              {/* Aqui você vai inserir o código embed da Vturb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-xl">
                  [INSERIR CÓDIGO EMBED DA VTURB AQUI]
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Botão de Compra (aparece após o timer) */}
      {showBuyButton && (
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-xl p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">
                Ative Sua Onda da Memória<br />
                <span className="text-xl text-gray-600">(Garantia de 90 Dias)</span>
              </h3>
              
              <div className="flex justify-center mb-8">
                <Image
                  src="/images/product.png"
                  alt="Onda da Memória"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>

              <div className="flex justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white text-2xl">%</span>
                  </div>
                  <p className="text-sm">Desconto<br />Especial</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <p className="text-sm">Acesso<br />Instantâneo</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white text-2xl">🎁</span>
                  </div>
                  <p className="text-sm">Bônus<br />Exclusivos</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-xl mb-2">Hoje Apenas Por</p>
                <p className="text-6xl font-bold text-green-600">R$ 147</p>
              </div>

              <a
                href="#" // Substitua pelo link de checkout
                className="inline-block bg-green-500 hover:bg-green-600 text-white text-2xl font-bold py-6 px-12 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg animate-pulse"
              >
                QUERO MELHORAR MINHA MEMÓRIA AGORA
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Logos de credibilidade */}
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-xl font-semibold mb-6">
            Referências Científicas e Estudos Espirituais:
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {/* Adicione os logos das universidades/instituições aqui */}
            <div className="text-gray-500">Harvard</div>
            <div className="text-gray-500">MIT</div>
            <div className="text-gray-500">Stanford</div>
            <div className="text-gray-500">Yale</div>
          </div>
        </div>
      </section>

      {/* Referências Científicas */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">Referências Científicas:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Riedel, G., & Micheau, J. (2001). Function of the hippocampus in memory formation...
                </li>
                <li>
                  Wong, F., Omori, S., Donghia, N. M., Zheng, E. J., & Collins, J. J. (2023)...
                </li>
                {/* Adicione mais referências conforme necessário */}
              </ol>
            </div>
            <div>
              <ol className="list-decimal list-inside space-y-2" start={25}>
                <li>
                  Pignolo, R. J., Law, S. F., & Chandra, A. (2021). Bone Aging...
                </li>
                <li>
                  magazine, M. S. (2017). To Stay Young, Kill Zombie Cells...
                </li>
                {/* Adicione mais referências conforme necessário */}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <div className="flex justify-center gap-6 mb-4">
              <Link href="/privacidade" className="text-gray-600 hover:text-gray-800">
                Política de Privacidade
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/termos" className="text-gray-600 hover:text-gray-800">
                Termos e Condições
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/faq" className="text-gray-600 hover:text-gray-800">
                FAQ
              </Link>
              <span className="text-gray-400">|</span>
              <a href="mailto:suporte@ondadamemoria.com" className="text-gray-600 hover:text-gray-800">
                Contato
              </a>
            </div>
            <p className="text-gray-600">
              Copyright © {new Date().getFullYear()} Onda da Memória. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-500 mt-4 max-w-4xl mx-auto">
              Aviso Legal: Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença...
            </p>
          </div>
        </div>
      </footer>

      {/* Popup de Saída */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
            
            <h4 className="text-3xl font-bold text-center mb-4">
              <span className="text-red-600">ESPERE!</span>{' '}
              <span className="text-blue-800">Em Apenas 1:49...</span>
            </h4>
            
            <h5 className="text-xl text-center text-blue-800 mb-6">
              Vou Revelar Meu Truque de 8 Segundos no Ouvido Para Uma Memória Melhor!
            </h5>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="flex-shrink-0">
                <Image
                  src="/images/doctor.png"
                  alt="Doutor"
                  width={160}
                  height={142}
                  className="rounded-lg"
                />
              </div>
              <div>
                <p className="text-gray-700">
                  Você consegue tocar seu lóbulo da orelha? Então você pode usar este truque de 8 segundos, 
                  comprovado pela ciência, para ter um pensamento mais aguçado e uma memória melhor - 
                  não importa sua idade! Se você tem mais de 50 anos, você precisa ver isso...
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-lg animate-pulse"
              >
                <strong>
                  <u>Continuar Assistindo Para Ver o Truque de 8 Segundos &gt;&gt;</u>
                </strong>
              </button>
              
              <p className="mt-4 text-sm">
                Ou prefere ler?{' '}
                <Link href="/texto" className="text-blue-600 underline hover:text-blue-800">
                  Veja a versão em texto aqui...
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}