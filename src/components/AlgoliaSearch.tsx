'use client'

import React, { useEffect } from 'react'

// Define a minimal type for a hit returned from your Algolia index.
interface Hit {
  [attribute: string]: unknown
}

// Define an interface for the template parameters passed to the hits widget template.
interface TemplateProps {
  html: (strings: TemplateStringsArray, ...values: unknown[]) => string
  components: {
    Highlight: (args: { hit: Hit; attribute: string }) => string
  }
}

// Define a custom type for the InstantSearch instance with widgets.
interface InstantSearchWithWidgets {
  addWidgets: (widgets: unknown[]) => void
  start: () => void
  widgets: {
    searchBox: (config: { container: string; placeholder?: string }) => unknown
    hits: (config: {
      container: string
      templates: { item: (hit: Hit, props: TemplateProps) => string }
    }) => unknown
    configure: (config: { hitsPerPage: number }) => unknown
    pagination: (config: { container: string }) => unknown
  }
}

const AlgoliaSearch: React.FC = () => {
  useEffect(() => {
    // Cast window to provide types for algoliasearch and instantsearch.
    const { algoliasearch, instantsearch } = window as unknown as {
      algoliasearch: typeof import('algoliasearch/lite').default
      instantsearch: (config: Record<string, unknown>) => InstantSearchWithWidgets
    }

    const searchClient = algoliasearch('12N0JD5MJD', '198c6e8c46b1332bc153a07585c84872')

    const search = instantsearch({
      indexName: 'products',
      searchClient,
      future: { preserveSharedStateOnUnmount: true },
    })

    search.addWidgets([
      // Search box widget.
      search.widgets.searchBox({
        container: '#searchbox',
        placeholder: 'Search for products...',
      }),
      // Hits widget with explicit type annotations.
      search.widgets.hits({
        container: '#hits',
        templates: {
          item: (hit: Hit, { html, components }: TemplateProps) => html`
            <article className="hit-item">
              <div>
                <h1>${components.Highlight({ hit, attribute: 'name' })}</h1>
                <p>${components.Highlight({ hit, attribute: 'description' })}</p>
                <p>${components.Highlight({ hit, attribute: 'category' })}</p>
              </div>
            </article>
          `,
        },
      }),
      // Configure hits per page.
      search.widgets.configure({
        hitsPerPage: 8,
      }),
      // Pagination widget.
      search.widgets.pagination({
        container: '#pagination',
      }),
    ])

    search.start()
  }, [])

  return (
    <div className="algolia-search">
      <div id="searchbox"></div>
      <div className="search-container flex">
        <aside className="sidebar pr-4">
          <div id="category-refinement" className="mb-4"></div>
          <div id="size-refinement" className="mb-4"></div>
          <div id="stock-refinement" className="mb-4"></div>
          <div id="coating-refinement" className="mb-4"></div>
          <div id="colorspec-refinement" className="mb-4"></div>
        </aside>
        <section className="results flex-1">
          <div id="hits"></div>
          <div id="pagination" className="mt-4"></div>
        </section>
      </div>
    </div>
  )
}

export default AlgoliaSearch
