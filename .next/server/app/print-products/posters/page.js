;(() => {
  var e = {}
  ;(e.id = 5496),
    (e.ids = [5496]),
    (e.modules = {
      3295: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      5892: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => s })
        let s = (0, r(56968).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/var/www/deploy-adap/src/app/print-products/posters/page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            )
          },
          '/var/www/deploy-adap/src/app/print-products/posters/page.tsx',
          'default'
        )
      },
      10846: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      15806: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 5892))
      },
      19121: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/action-async-storage.external.js')
      },
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
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
      79551: (e) => {
        'use strict'
        e.exports = require('url')
      },
      81630: (e) => {
        'use strict'
        e.exports = require('http')
      },
      85177: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 85982))
      },
      85982: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => p })
        var s = r(24518)
        r(76615)
        var o = r(53309),
          a = r.n(o),
          n = r(79797)
        let l = [
            {
              label: '100lb Gloss Text',
              href: '/print-products/posters/100lb-gloss',
              src: 'https://d12ufawtd6351k.cloudfront.net/gloss-book-posters.webp',
              alt: '100lb Gloss Text Poster',
            },
            {
              label: '100lb Matte Finish',
              href: '/print-products/posters/100lb-matte',
              src: 'https://d12ufawtd6351k.cloudfront.net/gloss-book-poster_b_w.webp',
              alt: '100lb Matte Finish Poster',
            },
            {
              label: '100lb UV (High Gloss)',
              href: '/print-products/posters/100lb-uv',
              src: 'https://d12ufawtd6351k.cloudfront.net/photo_gloss_posters_three.webp',
              alt: '100lb UV Poster',
            },
            {
              label: '80lb Enviro Uncoated',
              href: '/print-products/posters/80lb-enviro',
              src: 'https://d12ufawtd6351k.cloudfront.net/dull-book-poster_b_w_2.webp',
              alt: '80lb Enviro Uncoated Poster',
            },
            {
              label: '8pt C2S Stock Large Format',
              href: '/print-products/posters/large-format',
              src: 'https://d12ufawtd6351k.cloudfront.net/backlit-posters.webp',
              alt: '8pt C2S Stock Large Format Poster',
            },
          ],
          p = () =>
            (0, s.jsxs)('div', {
              className: 'container mx-auto px-6 py-8',
              children: [
                (0, s.jsx)('h1', {
                  className: 'text-4xl font-bold mb-6 text-center',
                  children: 'Posters',
                }),
                (0, s.jsx)('p', {
                  className: 'mb-8 text-center text-lg text-gray-700',
                  children:
                    'Posters are a great way to promote events and advertising with bold imagery.',
                }),
                (0, s.jsx)('div', {
                  className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6',
                  children: l.map((e, t) =>
                    (0, s.jsx)(
                      a(),
                      {
                        href: e.href,
                        children: (0, s.jsxs)('div', {
                          className:
                            'border rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer',
                          children: [
                            (0, s.jsx)('div', {
                              className: 'relative w-full h-56',
                              children: (0, s.jsx)(n.default, {
                                src: e.src,
                                alt: e.alt,
                                fill: !0,
                                style: { objectFit: 'cover' },
                                className: 'rounded-t-lg',
                              }),
                            }),
                            (0, s.jsx)('div', {
                              className: 'p-4',
                              children: (0, s.jsx)('h2', {
                                className: 'text-xl font-semibold text-center',
                                children: e.label,
                              }),
                            }),
                          ],
                        }),
                      },
                      t
                    )
                  ),
                }),
              ],
            })
      },
      92622: (e, t, r) => {
        'use strict'
        r.r(t),
          r.d(t, {
            GlobalError: () => n.a,
            __next_app__: () => c,
            pages: () => d,
            routeModule: () => u,
            tree: () => i,
          })
        var s = r(11892),
          o = r(12875),
          a = r(75043),
          n = r.n(a),
          l = r(28188),
          p = {}
        for (let e in l)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (p[e] = () => l[e])
        r.d(t, p)
        let i = {
            children: [
              '',
              {
                children: [
                  'print-products',
                  {
                    children: [
                      'posters',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(r.bind(r, 5892)),
                              '/var/www/deploy-adap/src/app/print-products/posters/page.tsx',
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
              {
                layout: [
                  () => Promise.resolve().then(r.bind(r, 95597)),
                  '/var/www/deploy-adap/src/app/layout.tsx',
                ],
                'not-found': [
                  () => Promise.resolve().then(r.t.bind(r, 55745, 23)),
                  'next/dist/client/components/not-found-error',
                ],
                forbidden: [
                  () => Promise.resolve().then(r.t.bind(r, 33596, 23)),
                  'next/dist/client/components/forbidden-error',
                ],
                unauthorized: [
                  () => Promise.resolve().then(r.t.bind(r, 21869, 23)),
                  'next/dist/client/components/unauthorized-error',
                ],
              },
            ],
          }.children,
          d = ['/var/www/deploy-adap/src/app/print-products/posters/page.tsx'],
          c = { require: r, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: o.RouteKind.APP_PAGE,
              page: '/print-products/posters/page',
              pathname: '/print-products/posters',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: i },
          })
      },
    })
  var t = require('../../../webpack-runtime.js')
  t.C(e)
  var r = (e) => t((t.s = e)),
    s = t.X(0, [7920, 1813, 3245], () => r(92622))
  module.exports = s
})()
