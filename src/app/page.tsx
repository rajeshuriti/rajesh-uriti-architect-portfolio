import { Navigation } from '@/components/Navigation'
import { ScrollProgress } from '@/components/ScrollProgress'
import { OpeningSequence } from '@/components/chapters/OpeningSequence'
import { Chapter1Foundation } from '@/components/chapters/Chapter1Foundation'
import { Chapter2Enterprise } from '@/components/chapters/Chapter2Enterprise'
import { Chapter3Thinking } from '@/components/chapters/Chapter3Thinking'
import { Chapter4Architect } from '@/components/chapters/Chapter4Architect'
import { Chapter5Monolith } from '@/components/chapters/Chapter5Monolith'
import { Chapter6Cloud } from '@/components/chapters/Chapter6Cloud'
import { Chapter7AI } from '@/components/chapters/Chapter7AI'
import { Chapter8AISystem } from '@/components/chapters/Chapter8AISystem'
import { Chapter9EnterpriseAI } from '@/components/chapters/Chapter9EnterpriseAI'
import { Chapter10Future } from '@/components/chapters/Chapter10Future'

export default function Home() {
  return (
    <main className="bg-[#030712]">
      <Navigation />
      <ScrollProgress />

      <section id="opening">
        <OpeningSequence />
      </section>

      <section id="foundation">
        <Chapter1Foundation />
      </section>

      <section id="enterprise">
        <Chapter2Enterprise />
      </section>

      <section id="thinking">
        <Chapter3Thinking />
      </section>

      <section id="architect">
        <Chapter4Architect />
      </section>

      <section id="monolith">
        <Chapter5Monolith />
      </section>

      <section id="cloud">
        <Chapter6Cloud />
      </section>

      <section id="ai">
        <Chapter7AI />
      </section>

      <section id="ai-system">
        <Chapter8AISystem />
      </section>

      <section id="enterprise-ai">
        <Chapter9EnterpriseAI />
      </section>

      <section id="future">
        <Chapter10Future />
      </section>
    </main>
  )
}
