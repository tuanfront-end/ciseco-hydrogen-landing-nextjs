import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { Testimonial } from '@/components/Testimonial'
import avatarImage2 from '@/images/avatars/avatar-2.jpeg'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      {/* <NavBar />
      <TableOfContents /> */}
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Jenna Smith',
          role: 'Web Developer',
          image: avatarImage2,
        }}
      >
        <p>
          {` “Ciseco is lightning fast, great UI, smart filter, CMS easy with Shopify’s metaobject, and more 🤤.”`}
        </p>
      </Testimonial>
      <Screencasts />
      <FreeChapters />
      <Resources />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <Author />
      <Footer />
    </>
  )
}
