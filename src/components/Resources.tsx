import Image from 'next/image'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import figmaImage from '@/images/resources/figma.svg'
import cartImage from '@/images/resources/cart.png'
import checkoutImage from '@/images/resources/checkout.png'
import marketsImage from '@/images/resources/markets.png'
import analyticsImage from '@/images/resources/Analytics.png'
import searchImage from '@/images/resources/search.png'
import definitionsImage from '@/images/resources/metaiobject.png'
import accountImage from '@/images/resources/account.png'
import ociImage from '@/images/resources/oci.png'
import { DATA } from '@/data/data'

const resources = [
  {
    title: 'Shopping Cart',
    description:
      'Leverage a feature-rich, server-side, edge rendered cart that effortlessly handles discounts, metafields, and everything critical to convert.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center ">
          <Image
            src={cartImage}
            fill
            alt=""
            className="object-cover object-top"
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Markets',
    description:
      'Effortlessly sell to multiple countries and scale internationally, all from a single Shopify store, without changing a line of code.',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="object-cover object-left-top"
            src={marketsImage}
            alt=""
            fill
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Analytics & Seo',
    description:
      'Discover how customers shop at your store with built-in support for Shopify analytics and great SEO architecture.',
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image
            src={analyticsImage}
            fill
            className="object-cover object-left-top"
            alt=""
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Search and Discovery',
    description:
      'Enhance your store with search, predictive search, and personalized product recommendations.',
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image
            src={searchImage}
            fill
            alt=""
            className="object-cover object-left-top"
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Metaobjects CMS',
    description:
      'Easily manage the content of sections of pages using Metaobject entries.',
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image
            src={definitionsImage}
            fill
            alt=""
            className="object-cover object-left-top"
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Pixels',
    description:
      'Improve performance and attribution with Web Pixels, including server-side syncing to all your marketing channels.',
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={figmaImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Customer Accounts',
    description:
      'Add authentication and account management effortlessly, and enable a seamless user experience with passwordless logins.',
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center ">
          <Image
            src={accountImage}
            alt=""
            fill
            className="object-contain object-top"
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Checkout and Discounts',
    description:
      'Simplify marketing campaigns with discount links that automatically apply promotions, streamlining the customer journey.',
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center ">
          <Image
            src={checkoutImage}
            alt=""
            className="object-cover object-top"
            fill
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'One click import',
    description:
      'Import the demo Definitions and demo entries with one click and get a ready website just like a demo.',
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center ">
          <Image
            src={ociImage}
            alt=""
            className="object-cover object-bottom"
            fill
            unoptimized
          />
        </div>
      )
    },
  },
]

export function Resources() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="resources-title">
          Features
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Ciseco - Hydrogen Shopify’s Headless, which provides users with a fast
          and reliable storefront.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Our team crafts themes that transcend beauty and functionality,
          delivering unrivaled page speed and a genuine mobile-first approach
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <a
                href={DATA.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60"
              >
                <resource.image />
              </a>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
