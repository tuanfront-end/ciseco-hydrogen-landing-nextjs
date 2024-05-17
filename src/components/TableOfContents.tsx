import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  Cart: {
    'Leverage a feature-rich, server-side, edge rendered cart that effortlessly handles discounts, metafields, and everything critical to convert.': 1,
  },
  Markets: {
    'Effortlessly sell to multiple countries and scale internationally, all from a single Shopify store, without changing a line of code.': 21,
  },
  Analytics: {
    'Explore how your customers shop your storefront with built-in support for Shopify analytics tracking, dashboards, and Live View.': 50,
  },
  'Search and Discovery': {
    'Enhance your store with search, predictive search, and personalized product recommendations.': 82,
  },
  Metaobjects: {
    'Easily render custom content models on your site for a tailored user experience.': 82,
  },
  Pixels: {
    'Improve performance and attribution with Web Pixels, including server-side syncing to all your marketing channels.': 82,
  },
  'Customer Accounts': {
    'Add authentication and account management effortlessly, and enable a seamless user experience with passwordless logins.': 82,
  },
  'Discount Links': {
    'Simplify marketing campaigns with discount links that automatically apply promotions, streamlining the customer journey.': 82,
  },
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Table of contents
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Accelerate development with built-in Shopify features critical to
          conversion
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          “Everything Starts as a Square” is comprised of 240 tightly edited,
          highly visual pages designed to teach you everything you need to know
          about icon design with no unnecessary filler.
        </p>
        <Expandable>
          <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
            <ExpandableItems>
              {Object.entries(tableOfContents).map(([title, pages]) => (
                <li key={title}>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <ol
                    role="list"
                    className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                  >
                    {Object.entries(pages).map(([title, pageNumber]) => (
                      <li
                        key={title}
                        className="flex justify-between py-3"
                        aria-label={`${title} on page ${pageNumber}`}
                      >
                        <span
                          className="font-medium text-slate-900"
                          aria-hidden="true"
                        >
                          {title}
                        </span>
                        <span
                          className="font-mono text-slate-400"
                          aria-hidden="true"
                        >
                          {pageNumber}
                        </span>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ExpandableItems>
          </ol>
          <ExpandableButton>See more</ExpandableButton>
        </Expandable>
      </Container>
    </section>
  )
}
