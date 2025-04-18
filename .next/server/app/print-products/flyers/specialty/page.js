;(() => {
  var e = {}
  ;(e.id = 9982),
    (e.ids = [9982]),
    (e.modules = {
      3295: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      10846: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      16932: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => p })
        var s = t(21396)
        t(88525)
        var a = t(77175),
          l = t.n(a),
          i = t(9203)
        let o = [
            {
              label: 'Metallic Foil',
              href: '/print-products/postcards/specialty/metallic-foil',
              src: 'https://d12ufawtd6351k.cloudfront.net/foil-pc-1.webp',
              alt: 'Metallic Foil Postcards',
            },
            {
              label: 'Spot UV',
              href: '/print-products/postcards/specialty/spot-uv',
              src: 'https://d12ufawtd6351k.cloudfront.net/spot-uv-pc-1.webp',
              alt: 'Spot UV Postcards',
            },
            {
              label: 'Kraft Paper',
              href: '/print-products/postcards/specialty/kraft-paper',
              src: 'https://d12ufawtd6351k.cloudfront.net/kraft-paper-2.webp',
              alt: 'Kraft Paper Postcards',
            },
            {
              label: 'Pearl Paper',
              href: '/print-products/postcards/specialty/pearl-paper',
              src: 'https://d12ufawtd6351k.cloudfront.net/pearl-paper-pc-1.webp',
              alt: 'Pearl Paper Postcards',
            },
            {
              label: 'Durable',
              href: '/print-products/postcards/specialty/durable-pc',
              src: 'https://d12ufawtd6351k.cloudfront.net/durable-pc-1.webp',
              alt: 'Durable Postcards',
            },
          ],
          p = () =>
            (0, s.jsx)('div', {
              className: 'min-h-screen flex items-center justify-center bg-gray-50',
              children: (0, s.jsxs)('div', {
                className: 'max-w-8xl w-full px-4 mb-24',
                children: [
                  (0, s.jsx)('h1', {
                    className: 'text-center text-6xl font-bold mb-6',
                    children: 'Specialty Postcards',
                  }),
                  (0, s.jsx)('p', {
                    className: 'text-center text-xl font-medium mb-8',
                    children:
                      'Discover our unique range of specialty postcards, each crafted with a distinct finish to elevate your message. Whether its the luminous shimmer of metallic foil, the eye-catching shine of spot UV, the natural charm of kraft paper, the subtle elegance of pearl paper, or the enduring quality of our durable collection, every postcard is designed to make a lasting impression.',
                  }),
                  (0, s.jsx)('div', {
                    className: 'grid grid-cols-1 md:grid-cols-3 gap-6',
                    children: o.map((e, r) =>
                      (0, s.jsx)(
                        'div',
                        {
                          className:
                            'border rounded-lg shadow-lg p-4 flex flex-col items-center text-center bg-white',
                          children: (0, s.jsx)(l(), {
                            href: e.href,
                            children: (0, s.jsxs)('div', {
                              className: 'cursor-pointer',
                              children: [
                                (0, s.jsx)(i.default, {
                                  src: e.src,
                                  alt: e.alt,
                                  width: 205,
                                  height: 250,
                                  className: 'mx-auto object-cover rounded-lg mb-2',
                                }),
                                (0, s.jsx)('h2', {
                                  className: 'text-xl font-semibold',
                                  children: e.label,
                                }),
                              ],
                            }),
                          }),
                        },
                        r
                      )
                    ),
                  }),
                ],
              }),
            })
      },
      19121: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/action-async-storage.external.js')
      },
      23120: (e, r, t) => {
        Promise.resolve().then(t.t.bind(t, 77175, 23)),
          Promise.resolve().then(t.t.bind(t, 68474, 23))
      },
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
      32848: (e, r, t) => {
        Promise.resolve().then(t.t.bind(t, 53309, 23)),
          Promise.resolve().then(t.t.bind(t, 13484, 23))
      },
      33873: (e) => {
        'use strict'
        e.exports = require('path')
      },
      55511: (e) => {
        'use strict'
        e.exports = require('crypto')
      },
      55591: (e) => {
        'use strict'
        e.exports = require('https')
      },
      63033: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-unit-async-storage.external.js')
      },
      76048: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            GlobalError: () => i.a,
            __next_app__: () => c,
            pages: () => d,
            routeModule: () => u,
            tree: () => n,
          })
        var s = t(11892),
          a = t(12875),
          l = t(75043),
          i = t.n(l),
          o = t(28188),
          p = {}
        for (let e in o)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (p[e] = () => o[e])
        t.d(r, p)
        let n = {
            children: [
              '',
              {
                children: [
                  'print-products',
                  {
                    children: [
                      'flyers',
                      {
                        children: [
                          'specialty',
                          {
                            children: [
                              '__PAGE__',
                              {},
                              {
                                page: [
                                  () => Promise.resolve().then(t.bind(t, 16932)),
                                  '/var/www/deploy-adap/src/app/print-products/flyers/specialty/page.tsx',
                                ],
                              },
                            ],
                          },
                          {},
                        ],
                      },
                      {},
                    ],
                  },
                  {},
                ],
              },
              {
                layout: [
                  () => Promise.resolve().then(t.bind(t, 95597)),
                  '/var/www/deploy-adap/src/app/layout.tsx',
                ],
                'not-found': [
                  () => Promise.resolve().then(t.t.bind(t, 55745, 23)),
                  'next/dist/client/components/not-found-error',
                ],
                forbidden: [
                  () => Promise.resolve().then(t.t.bind(t, 33596, 23)),
                  'next/dist/client/components/forbidden-error',
                ],
                unauthorized: [
                  () => Promise.resolve().then(t.t.bind(t, 21869, 23)),
                  'next/dist/client/components/unauthorized-error',
                ],
              },
            ],
          }.children,
          d = ['/var/www/deploy-adap/src/app/print-products/flyers/specialty/page.tsx'],
          c = { require: t, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: '/print-products/flyers/specialty/page',
              pathname: '/print-products/flyers/specialty',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: n },
          })
      },
      79551: (e) => {
        'use strict'
        e.exports = require('url')
      },
      81630: (e) => {
        'use strict'
        e.exports = require('http')
      },
    })
  var r = require('../../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [7920, 1813, 9203, 3245], () => t(76048))
  module.exports = s
})()
