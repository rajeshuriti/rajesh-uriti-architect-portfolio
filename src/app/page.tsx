import { StitchNav } from '@/components/stitch/StitchNav'
import { StitchHero } from '@/components/stitch/StitchHero'
import { StitchChapterSection } from '@/components/stitch/StitchChapterSection'
import { StitchProjects } from '@/components/stitch/StitchProjects'
import { StitchFooter } from '@/components/stitch/StitchFooter'
import { chapters } from '@/data/chapters'

export default function Home() {
  return (
    <main style={{ background: '#040e1f' }}>
      <StitchNav />
      <StitchHero />

      <div id="journey">
        {chapters.map((chapter, i) => (
          <StitchChapterSection key={chapter.id} chapter={chapter} index={i} />
        ))}
      </div>

      <StitchProjects />

      <StitchFooter />
    </main>
  )
}
