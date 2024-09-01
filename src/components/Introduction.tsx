import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { DATA } from '@/data/data'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Ciseco – Shopify’s Hydrogen theme is a project built on Shopify’s
          Hydrogen framework and Remix. Instant Feedback - Optimistic UI enables
          user actions to feel instantaneous, while the real server requests
          happen behind the scenes.
        </p>
        <p className="mt-4">
          The Ciseco theme is built with the latest technologies such as React
          v18.x, Tailwindcss v3.x, Typescript, and HeadlessUI components. It is
          also built with the latest version of Shopify’s Hydrogen 2024, which
          provides users with a fast and reliable storefront.
        </p>

        <p className="mt-4">Some “key highlights” of the Ciseco:</p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Excellent SEO & Analytics',
            'Fast page loading speeds with Remix framework',
            'CMS based on Shopify’s Metaobject',
            'Beautiful and modern design',
            'Quick demo data import with just a few clicks',
            'Online payments with Shopify’s checkout page',
            'Smart search filter feature',
            'All the features of an online store',
            'And much more.',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          This template is suited for multi-vendor marketplace, electronics
          stores, furniture stores, clothing stores, hi-tech stores,
          organic/food stores, cosmetic stores, jewelry stores, sporting goods
          stores, and accessories stores, etc.
        </p>
        <div className="mt-10">
          <a
            href={DATA.documentationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Read the documentation {` `}
            <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            href={DATA.changeLogLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Change log {` `}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <br />
        <hr />
        <br />

        <div>
          <p className="mt-4 font-semibold">Why Headless Shopify Hydrogen?</p>
          <ul role="list" className="mt-8 space-y-3">
            {[
              'The latest e-commerce headless technology developed by Shopify.',
              'Scalable, high performance that can adapt to changing market demands.',
              'Improved server-side visibility, better data control, and great user engagement.',
              'Cost savings due to free deployment on Oxygen.',
              'Hydrogen is equipped to handle and enable brands to set new standards in e-commerce.',
            ].map((feature) => (
              <li key={feature} className="flex">
                <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
                <span className="ml-4">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
