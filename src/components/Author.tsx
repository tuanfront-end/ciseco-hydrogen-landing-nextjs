import Image from 'next/image'
import Link from 'next/link'
import { GridPattern } from '@/components/GridPattern'
import authorImage from '@/images/avatars/author.png'
import Built_with_Hydrogen_sticker from '@/images/screencasts/Built_with_Hydrogen_sticker.webp'
import { Button } from './Button'
import { DATA } from '@/data/data'

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8132L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
    </svg>
  )
}

export function Author() {
  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-blue-600">***</span>{' '}
              {`That's probably enough for now. What are you waiting for?`}
            </p>
            <div className="mt-12  ">
              <div className="mt-4 flex flex-wrap gap-4">
                <Button
                  color="blue"
                  href={DATA.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live preview demo{` `} &rarr;
                </Button>
                <Button
                  color="blue"
                  variant="outline"
                  href={DATA.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy now for {DATA.price}
                </Button>
              </div>
            </div>
            <p className="mt-8">
              <Link
                href="https://x.com/eden_tuan_teo/status/1790408141878046998"
                className="inline-flex items-center text-base font-medium tracking-tight text-slate-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon className="h-10 w-10 fill-current" />
                <span className="ml-4">Follow on X</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
