import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import duotoneImage from '@/images/screencasts/duotone.svg'
import gridsImage from '@/images/screencasts/grids.svg'
import setupImage from '@/images/screencasts/setup.svg'
import strokesImage from '@/images/screencasts/strokes.svg'
import Built_with_Hydrogen_sticker from '@/images/screencasts/Built_with_Hydrogen_sticker.webp'

const videos = [
  {
    title: 'Instant Feedback',
    description:
      'Optimistic UI enables user actions to feel instantaneous, while the real server requests happen behind the scenes.',
    image: setupImage,
    runtime: { minutes: 16, seconds: 54 },
  },
  {
    title: 'Smooth Transitions',
    description:
      'Nested routes allow you to only fetch and re-render the stuff that changes, making navigating between pages or filtering collections feel fast and smooth.',
    image: gridsImage,
    runtime: { minutes: 9, seconds: 12 },
  },
  {
    title: 'Rock-solid Stability',
    description:
      'Views render on the server, so you ship less client-side JavaScript to the browser. Meaning faster page loads, with zero time-to-interactive. Worrying about shaky mobile networks is a thing of the past.',
    image: strokesImage,
    runtime: { minutes: 23, seconds: 25 },
  },
  {
    title: `And Oxygen is <Free />`,
    description:
      'Oxygen is available on all Shopify plans, except Starter, at no extra cost.',
    image: duotoneImage,
    runtime: { minutes: 28, seconds: 44 },
  },
]

function PlayIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
      <circle cx="8" cy="8" r="6.25" fill="none" />
    </svg>
  )
}

export function Screencasts() {
  return (
    <section
      id="remix"
      aria-labelledby="remix-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="remix-title">
          Remix 🚀
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Ciseco Hydrogen is built on{' '}
          <a
            href="https://remix.run/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Remix
          </a>
          , the framework from the creators of React Router
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Focused on web standards and modern web app UX, you simply will get
          better websites, to deliver a fast, slick, and resilient user.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
        >
          {videos.map((video) => (
            <li key={video.title} className="[counter-increment:video]">
              <div
                className="relative flex h-1 items-center justify-center bg-neutral-100 "
                // style={{
                //   backgroundImage:
                //     'conic-gradient(from -49.8deg at 50% 50%, #7331FF 0deg, #00A3FF 59.07deg, #4E51FF 185.61deg, #39DBFF 284.23deg, #B84FF1 329.41deg, #7331FF 360deg)',
                // }}
              >
                <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                  <PlayIcon className="h-4 w-4 fill-current stroke-current" />
                  <time
                    dateTime={`${video.runtime.minutes}m ${video.runtime.seconds}s`}
                    className="ml-2"
                  >
                    {`${video.runtime.minutes}:${video.runtime.seconds
                      .toString()
                      .padStart(2, '0')}`}
                  </time>
                </div>
              </div>
              <h3 className="mt-6 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                {video.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{video.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
