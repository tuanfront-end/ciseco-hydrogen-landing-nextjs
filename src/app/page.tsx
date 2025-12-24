import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { Screencasts } from '@/components/Screencasts'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <FreeChapters />
      <Screencasts />
      <Author />
      <Footer />
    </>
  )
}
