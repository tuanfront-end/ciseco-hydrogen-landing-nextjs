import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Pattern } from '@/components/Pattern'
import { DATA } from '@/data/data'

export function FreeChapters() {
  return (
    <section
      id="free-chapters"
      aria-label="Free preview"
      className="scroll-mt-14 bg-blue-600 sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern className="absolute -top-32 left-0 w-full sm:-top-5 sm:left-3/4 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:left-2/3 xl:right-auto" />
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Get started today with Ciseco
            </h2>
            <p className="mt-4 text-lg tracking-tight text-blue-200">
              It’s time to improve your website. Buy the Ciseco storefront so
              you can feel like you’re doing something productive.
            </p>
          </div>
          <div className="lg:pl-16">
            <h3 className="text-base font-medium tracking-tight text-white">
              Discover the full potential of Ciseco {` `}
              <span aria-hidden="true">&rarr;</span>
            </h3>
            <div className="mt-4 flex flex-wrap gap-4">
              <Button
                color="white"
                href={DATA.previewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live preview demo
              </Button>
              <Button
                color="slate"
                variant="solid"
                href={DATA.buyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy now for {DATA.price}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
