import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import duotoneImage from '@/images/screencasts/duotone.svg'
import gridsImage from '@/images/screencasts/grids.svg'
import setupImage from '@/images/screencasts/setup.svg'
import strokesImage from '@/images/screencasts/strokes.svg'
import { DATA } from '@/data/data'

const videos = [
  {
    title: 'Instant Feedback',
    description:
      'Optimistic UI enables user actions to feel instantaneous, while the real server requests happen behind the scenes.',
    image: setupImage,
    runtime: { minutes: 16, seconds: 54 },
    link: null,
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

const resources = [
  {
    title: 'Markets',
    description:
      'Effortlessly sell to multiple countries and scale internationally, all from a single Shopify store, without changing a line of code.',
    link: null,
  },
  {
    title: 'Analytics & Seo',
    description:
      'Discover how customers shop at your store with built-in support for Shopify analytics and great SEO architecture.',
  },
  {
    title: 'Search and Discovery',
    description:
      'Enhance your store with search, predictive search, and personalized product recommendations.',
  },
  {
    title: 'Metaobjects CMS',
    description:
      'Easily manage the content of sections of pages using Metaobject entries.',
  },
  {
    title: 'Pixels',
    description:
      'Improve performance and attribution with Web Pixels, including server-side syncing to all your marketing channels.',
  },
  {
    title: 'Customer Accounts',
    description:
      'Add authentication and account management effortlessly, and enable a seamless user experience with passwordless logins.',
  },
  {
    title: 'Checkout and Discounts',
    description:
      'Simplify marketing campaigns with discount links that automatically apply promotions, streamlining the customer journey.',
  },
  {
    title: 'One click import',
    description:
      'Import the demo Definitions and demo entries with one click and get a ready website just like a demo.',
  },
]

const demos = [
  {
    title: 'Home demo 1',
    description: '',
    link: DATA.previewLink,
  },
  {
    title: 'Home demo 2',
    description: '',
    link: DATA.previewLink + '/home-2',
  },
  {
    title: 'Collection page',
    description: '',
    link: DATA.previewLink + '/collections/up-to-80-off-retail',
  },
  {
    title: 'Search page',
    description: '',
    link: DATA.previewLink + '/search',
  },
  {
    title: 'Product page',
    description: '',
    link: DATA.previewLink + '/products/dark-denim-top?Size=XS&Color=Green',
  },
  {
    title: 'Blog page',
    description: '',
    link: DATA.previewLink + '/news',
  },
  {
    title: 'Cart page',
    description: '',
    link: DATA.previewLink + '/cart',
  },
  {
    title: '10+ more pages',
    description: '',
    link: DATA.previewLink,
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
        <SectionHeading number="" id="remix-title">
          Ciseco & Remix 🚀
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
          , the framework from the creators of React Router, which will provide
          users with a lightning-fast and reliable storefront.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Ciseco is focused on web standards and modern web app UX, you will get
          better websites, to deliver a fast, slick, and resilient user. Our
          team crafts themes that transcend beauty and functionality, delivering
          unrivaled page speed and a genuine mobile-first approach.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
        >
          {[...videos, ...resources, ...demos].map((video) => (
            <li key={video.title} className="[counter-increment:video]">
              <div className="relative flex h-1 items-center justify-center bg-neutral-100 "></div>
              <h3 className="mt-6 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                {video.link ? (
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    {video.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="ml-1.5 inline-block h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                ) : (
                  video.title
                )}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{video.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
