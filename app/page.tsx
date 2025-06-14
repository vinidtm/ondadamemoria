// app/page.tsx
'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  // Carregar script da Vturb e configurar delay
  useEffect(() => {
    // Adiciona o CSS para esconder elementos
    const style = document.createElement('style')
    style.textContent = `
      .esconder {
        display: none;
      }
    `
    document.head.appendChild(style)

    // Carrega o script da Vturb
    if (!document.querySelector('script[src*="converteai.net"]')) {
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/684afea5e6c281d4affd78cd/v4/player.js";
      script.async = true;
      document.head.appendChild(script);
    }

    // Função de delay da Vturb para mostrar botão
    const initDelayForHiddenElements = () => {
      const delaySeconds = 1038; // ALTERE AQUI OS SEGUNDOS PARA APARECER O BOTÃO
      
      const player = document.querySelector("vturb-smartplayer");
      if (!player) {
        setTimeout(initDelayForHiddenElements, 500);
        return;
      }
      
      player.addEventListener("player:ready", () => {
        showElementsAfterDelay(player, delaySeconds);
      });
    };

    const showElementsAfterDelay = (player: Element, seconds: number) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (player as any).displayHiddenElements(seconds, [".esconder"], {
        persist: true
      });
    };

    // Inicia o delay quando o DOM estiver pronto
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initDelayForHiddenElements);
    } else {
      initDelayForHiddenElements();
    }

    // Cleanup
    return () => {
      document.removeEventListener('DOMContentLoaded', initDelayForHiddenElements);
    };
  }, [])

  return (
    <>
      {/* Header com VSL */}
      <header className="relative bg-gradient-to-b from-blue-900 to-blue-800 text-white py-10">
        {/* Imagem de fundo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header-bg.jpg" // Adicione sua imagem aqui
            alt="Background"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-4 md:px-4 relative z-10">
          <div className="text-center mb-6">
            <p className="text-xl md:text-5xl font-bold mb-1 text-white px-2 md:px-0">
              <span className="hidden md:block">Famoso Neurocientista de Nova York:</span>
              <span className="block md:hidden">Famoso Neurocientista de Nova York:</span>
              <br />
              <span className="text-3xl md:text-6xl text-white block px-1 md:px-0">
                &ldquo;Faça Este Truque de 8 Segundos no Ouvido
              </span>
            </p>
            <div className="inline-block w-full md:w-auto">
              <p className="bg-red-500 text-white text-3xl md:text-6xl font-bold px-2 md:px-4 py-2 block mx-1 md:mx-0">
                Para Melhorar Sua Memória..&rdquo;
              </p>
            </div>
          </div>

          {/* Vídeo VSL */}
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border-4 border-white">
              {/* Player da Vturb */}
              <div
                className="w-full h-full"
                dangerouslySetInnerHTML={{
                  __html: `<vturb-smartplayer id="vid-684afea5e6c281d4affd78cd" style="display: block; margin: 0 auto; width: 100%; height: 100%;"></vturb-smartplayer>`
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Botão de Compra (controlado pela Vturb com classe .esconder) */}
      <section className="bg-gray-100 py-12 esconder">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gradient-to-b from-yellow-50 to-white rounded-lg shadow-xl overflow-hidden">
            {/* Título Principal com fundo amarelo */}
            <div className="bg-yellow-100 text-center py-10">
              <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                Ative Sua Onda da Memória
              </h3>
              <p className="text-2xl md:text-3xl text-blue-900 font-bold">
                (Garantia de 90 Dias)
              </p>
            </div>
            
            {/* Conteúdo principal */}
            <div className="p-8 md:p-12">
              {/* Imagem do Produto */}
              <div className="flex justify-center mb-10">
                <Image
                  src="/images/imagemproduto.png"
                  alt="Onda da Memória - Produto Completo"
                  width={600}
                  height={360}
                  className="max-w-full h-auto"
                />
              </div>

              {/* Ícones de Benefícios */}
              <div className="flex justify-center mb-10 px-4">
                {/* Desktop - com ícones */}
                <div className="hidden md:flex overflow-hidden rounded-full shadow-lg">
                  <div className="bg-purple-500 text-white px-8 py-4 flex items-center gap-3">
                    <Image
                      src="/images/desconto.png"
                      alt="Desconto"
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                    <span className="font-semibold text-base">Desconto<br />Especial</span>
                  </div>
                  <div className="bg-blue-500 text-white px-8 py-4 flex items-center gap-3">
                    <Image
                      src="/images/acesso.png"
                      alt="Acesso"
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                    <span className="font-semibold text-base">Acesso<br />Instantâneo</span>
                  </div>
                  <div className="bg-teal-500 text-white px-8 py-4 flex items-center gap-3">
                    <Image
                      src="/images/dinheiro.png"
                      alt="Bônus"
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                    <span className="font-semibold text-base">Bônus de<br />Início Rápido</span>
                  </div>
                </div>

                {/* Mobile - sem ícones */}
                <div className="flex md:hidden overflow-hidden rounded-xl shadow-lg w-full max-w-sm">
                  <div className="bg-purple-500 text-white px-4 py-4 flex items-center justify-center flex-1">
                    <span className="font-bold text-sm text-center leading-tight">
                      Desconto<br />Especial
                    </span>
                  </div>
                  <div className="bg-blue-500 text-white px-4 py-4 flex items-center justify-center flex-1">
                    <span className="font-bold text-sm text-center leading-tight">
                      Acesso<br />Instantâneo
                    </span>
                  </div>
                  <div className="bg-teal-500 text-white px-4 py-4 flex items-center justify-center flex-1">
                    <span className="font-bold text-sm text-center leading-tight">
                      Bônus de<br />Início Rápido
                    </span>
                  </div>
                </div>
              </div>

              {/* Preço com Setas */}
              <div className="text-center mb-8">
                <p className="text-xl md:text-2xl font-black mb-2">Hoje Apenas Por</p>
                <div className="flex items-center justify-center gap-4 md:gap-8">
                  <span className="text-green-500 text-3xl md:text-4xl">→</span>
                  <p className="text-5xl md:text-6xl font-bold text-blue-900">R$ 47</p>
                  <span className="text-green-500 text-3xl md:text-4xl">←</span>
                </div>
              </div>

              {/* Botão de Compra com garantia já incluída na imagem */}
              <div className="flex justify-center">
                <a
                  href="https://pay.kiwify.com.br/VRI6fuu"
                  className="inline-block transform hover:scale-105 transition-all duration-200"
                >
                  <Image
                    src="/images/compraragora.png"
                    alt="Comprar Agora - Garantia 90 dias"
                    width={400}
                    height={120}
                    className="cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos de credibilidade */}
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-xl font-semibold mb-6">
            Referências Científicas e Estudos Espirituais:
          </p>
          {/* Imagem para Desktop */}
          <div className="hidden md:block">
            <Image
              src="/images/logos-desktop.png" // Adicione sua imagem de logos para desktop
              alt="Universidades e Instituições"
              width={956}
              height={102}
              className="mx-auto"
            />
          </div>
          {/* Imagem para Mobile */}
          <div className="block md:hidden">
            <Image
              src="/images/logos-mobile.png" // Adicione sua imagem de logos para mobile
              alt="Universidades e Instituições"
              width={349}
              height={127}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Referências Científicas */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">Referências Científicas:</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Coluna Esquerda - Referências 1-24 */}
            <div>
              <ol className="ref-list list-none space-y-3 text-sm text-gray-600">
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">1.</span>
                  Riedel, G., &amp; Micheau, J. (2001). Function of the hippocampus in memory formation: desperately seeking resolution. <i>Progress in Neuro-Psychopharmacology and Biological Psychiatry</i>, <i>25</i>(4), 835–853.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">2.</span>
                  Wong, F., Omori, S., Donghia, N. M., Zheng, E. J., &amp; Collins, J. J. (2023). Discovering small-molecule senolytics with deep neural networks. <i>Nature Aging</i>, 1–17.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">3.</span>
                  Smith, F. (2024, June 26). <i>&ldquo;Zombie cells&rdquo; could hold the secret to Alzheimer&rsquo;s cure</i>. Magazine.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">4.</span>
                  Reporter, P. D. S. S. (2023, November 23). <i>Killing &ldquo;zombie&rdquo; cells can reverse COVID brain aging</i>. Newsweek.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">5.</span>
                  Lin, Y.-F., Wang, L.-Y., Chen, C.-S., Li, C.-C., &amp; Hsiao, Y.-H. (2021). Cellular senescence as a driver of cognitive decline triggered by chronic unpredictable stress. <i>Neurobiology of Stress</i>, <i>15</i>, 100341.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">6.</span>
                  Chan, D., Suk, H., Jackson , B., Milman, N., Stark, D., Klerman, E., Kitchener, E., &amp; Avalos, V. (2021). <i>40Hz sensory stimulation induces gamma entrainment and affects brain structure, sleep and cognition in patients with Alzheimer&rsquo;s disease</i>.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">7.</span>
                  <i>How Does the Brain Make Memories?</i> (2022). How Does the Brain Make Memories?
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">8.</span>
                  The University of Queensland. (2016, December 2). <i>How are memories formed?</i> Qbi.uq.edu.au.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">9.</span>
                  Saldivar, A. (2015). <i>How many neurons die in ourselves every day?</i> Prezi.com.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">10.</span>
                  Herculano-Houzel, S. (2009). The Human Brain in numbers: a Linearly scaled-up Primate Brain. <i>Frontiers in Human Neuroscience</i>, <i>3</i>(31).
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">11.</span>
                  Dhikav, V., &amp; Anand, K. S. (2012). Hippocampus in Health and disease: an Overview. <i>Annals of Indian Academy of Neurology</i>, <i>15</i>(4), 239–246.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">12.</span>
                  American Academy of Neurology. (2023). <i>Smaller hippocampus linked to cognitive decline</i>. ScienceDaily.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">13.</span>
                  <i>Zombies: Are They Already in Your Head?</i> (n.d.). Wake Forest University School of Medicine.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">14.</span>
                  Neumann, H., Kotter, M. R., &amp; Franklin, R. J. M. (2008). Debris clearance by microglia: an essential link between degeneration and regeneration. <i>Brain</i>, <i>132</i>(2), 288–295.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">15.</span>
                  Neumann, H., Kotter, M. R., &amp; Franklin, R. J. M. (2008). Debris clearance by microglia: an essential link between degeneration and regeneration. <i>Brain</i>, <i>132</i>(2), 288–295.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">16.</span>
                  Conde, J. R., &amp; Streit, W. J. (2006). Microglia in the Aging Brain. <i>Journal of Neuropathology and Experimental Neurology</i>, <i>65</i>(3), 199–203.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">17.</span>
                  Smith, F. (2024, June 26). <i>&ldquo;Zombie cells&rdquo; could hold the secret to Alzheimer&rsquo;s cure</i>. Magazine.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">18.</span>
                  <i>Zombies: Are They Already in Your Head?</i> (n.d.). Wake Forest University School of Medicine.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">19.</span>
                  Integrative Family Medicine of Asheville. (2022, October 28). <i>Brain Fog | Integrative Family Medicine | Asheville</i>.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">20.</span>
                  McCarthy, J. (2023). <i>Study finds &ldquo;zombie cells&rdquo; produce at accelerated rate due to COVID-19</i>.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">21.</span>
                  Ouvrier, B., Ismael, S., &amp; Bix, G. J. (2024). Senescence and SASP Are Potential Therapeutic Targets for Ischemic Stroke. <i>Pharmaceuticals</i>, <i>17</i>(3), 312.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">22.</span>
                  Kumar, M., Yan, P., Kuchel, G. A., &amp; Xu, M. (2024). Cellular Senescence as a Targetable Risk Factor for Cardiovascular Diseases. <i>JACC. Basic to Translational Science</i>, <i>9</i>(4), 522–534.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">23.</span>
                  Rubén Aquino-Martínez. (2023). The Emerging Role of Accelerated Cellular Senescence in Periodontitis. <i>Journal of Dental Research</i>, <i>102</i>(8), 854–862.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">24.</span>
                  Lee, K. S., Lin, S., Copland, D. A., Dick, A. D., &amp; Liu, J. (2021). Cellular senescence in the aging retina and developments of senotherapies for age-related macular degeneration. <i>Journal of Neuroinflammation</i>, <i>18</i>(1).
                </li>
              </ol>
            </div>
            
            {/* Coluna Direita - Referências 25-44 */}
            <div>
              <ol className="ref-list list-none space-y-3 text-sm text-gray-600" start={25}>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">25.</span>
                  Pignolo, R. J., Law, S. F., &amp; Chandra, A. (2021). Bone Aging, Cellular Senescence, and Osteoporosis. <i>JBMR Plus</i>, <i>5</i>(4).
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">26.</span>
                  magazine, M. S. (2017). <i>To Stay Young, Kill Zombie Cells</i>. Scientific American.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">27.</span>
                  Cole, W. (2024, March 20). <i>Zombie Cells And Longevity: What You Need To Know</i>.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">28.</span>
                  The Picower Institute for Learning and Memory. (2024). <i>40Hz rhythms fight Alzheimer&rsquo;s at the cellular and molecular level | Picower Institute</i>.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">29.</span>
                  Singer, A. C., Martorell, A. J., Douglas, J. M., Abdurrob, F., Attokaren, M. K., Tipton, J., Mathys, H., Adaikkan, C., &amp; Tsai, L.-H. (2018). Noninvasive 40-Hz light flicker to recruit microglia and reduce amyloid beta load. <i>Nature Protocols</i>, <i>13</i>(8), 1850–1868.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">30.</span>
                  Ruth Maria Ingendoh, Posny, E. S., &amp; Heine, A. (2023). Binaural beats to entrain the brain? A systematic review of the effects of binaural beat stimulation on brain oscillatory activity. <i>PLoS ONE</i>, <i>18</i>(5).
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">31.</span>
                  Liu, C., Han, T., Xu, Z., Liu, J., Zhang, M., Du, J., Zhou, Q., Duan, Y., Li, Y., Wang, J., Cui, D., &amp; Wang, Y. (2021). Modulating Gamma Oscillations Promotes Brain Connectivity to Improve Cognitive Impairment. <i>Cerebral Cortex</i>.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">32.</span>
                  Melinosky, C. (2023, August 16). <i>What to Know About Gamma Brain Waves</i>. WebMD.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">33.</span>
                  Ruth Maria Ingendoh, Posny, E. S., &amp; Heine, A. (2023). Binaural beats to entrain the brain? A systematic review. <i>PLoS ONE</i>, <i>18</i>(5).
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">34.</span>
                  Jirakittayakorn, N., &amp; Wongsawat, Y. (2017). Brain Responses to a 6-Hz Binaural Beat: Effects on General Theta Rhythm and Frontal Midline Theta Activity. <i>Frontiers in Neuroscience</i>, <i>11</i>.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">35.</span>
                  Singer, A. C., Martorell, A. J., Douglas, J. M., et al. (2018). Noninvasive 40-Hz light flicker to recruit microglia. <i>Nature Protocols</i>, <i>13</i>(8), 1850–1868.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">36.</span>
                  Ortiz, T., Martínez, A. M., Fernández, A., et al. (2008). Impact of auditory stimulation at a frequency of 5 Hz in verbal memory. <i>Actas Espanolas de Psiquiatria</i>, <i>36</i>(6), 307–313.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">37.</span>
                  Staff, R. T., Hogan, M. J., Williams, D. S., &amp; Whalley, L. J. (2018). Intellectual engagement and cognitive ability in later life. <i>BMJ</i>, <i>363</i>.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">38.</span>
                  Neurology live. (2023, January 28). <i>Gamma Frequency Sensory Stimulation as a Potential Therapy for Alzheimer Disease</i>.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">39.</span>
                  Cantero, J. L., Atienza, M., Madsen, J. R., &amp; Stickgold, R. (2004). Gamma EEG dynamics in neocortex and hippocampus during human wakefulness and sleep. <i>NeuroImage</i>, <i>22</i>(3), 1271–1280.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">40.</span>
                  Massari, P. (2024). <i>Colloquy Podcast: Meditation Changes Your Brain. Here&rsquo;s How. | The Harvard Kenneth C. Griffin Graduate School</i>.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">41.</span>
                  Madhavan, R., Millman, D., Tang, H., et al. (2014). Decrease in gamma-band activity tracks sequence learning. <i>Frontiers in Systems Neuroscience</i>, <i>8</i>, 222.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">42.</span>
                  NIH Research Matters. (2021, April 27). <i>Lack of sleep in middle age may increase dementia risk</i>. National Institute on Aging.
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">43.</span>
                  Chan, D., Suk, H.-J., Jackson, B. L., et al. (2022). Gamma frequency sensory stimulation in mild probable Alzheimer&rsquo;s disease patients. <i>PLOS ONE</i>, <i>17</i>(12).
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 text-gray-500">44.</span>
                  Cimenser, A., Hempel, E., Travers, T., et al. (2021). Sensory-Evoked 40-Hz Gamma Oscillation Improves Sleep and Daily Living Activities in Alzheimer&rsquo;s Disease Patients. <i>Frontiers in Systems Neuroscience</i>, <i>15</i>.
                </li>
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
              <span className="text-gray-600 cursor-default">
                Política de Privacidade
              </span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600 cursor-default">
                Termos e Condições
              </span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600 cursor-default">
                FAQ
              </span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600 cursor-default">
                Contato
              </span>
            </div>
            <p className="text-gray-600">
              Copyright © {new Date().getFullYear()} Onda da Memória. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-500 mt-4 max-w-4xl mx-auto">
              Aviso Legal: Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. 
              Roberto Almeida é um pseudônimo usado com o consentimento de nosso principal neurocientista, 
              que deseja manter a privacidade pessoal para si e sua família. As qualificações e credenciais 
              atribuídas a este nome são genuínas e verificadas. Esta medida é tomada para proteger a 
              privacidade do indivíduo sem enganar nossos clientes. Agradecemos sua compreensão.
            </p>
          </div>
        </div>
      </footer>

      {/* Popup de Saída removido para testes iniciais */}
    </>
  )
}