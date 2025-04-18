;(() => {
  var e = {}
  ;(e.id = 3825),
    (e.ids = [3825]),
    (e.modules = {
      3295: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      10846: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      13755: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => a })
        var s = t(21396)
        t(88525)
        var l = t(77175),
          n = t.n(l),
          o = t(9203)
        let i = [
            {
              label: 'Flyers',
              href: '/print-products/flyers',
              src: 'https://d12ufawtd6351k.cloudfront.net/flyers.png',
              alt: 'Flyers',
              sublinks: [
                {
                  label: '100lb Gloss Text',
                  href: '/print-products/flyers/100lb-gloss-text',
                  src: 'https://d12ufawtd6351k.cloudfront.net/flyer-3.png',
                  alt: '100lb Gloss Text Flyers',
                },
                {
                  label: '100lb Matte Finish',
                  href: '/print-products/flyers/100lb-matte-finish',
                  src: 'https://d12ufawtd6351k.cloudfront.net/flyer-2.png',
                  alt: '100lb Matte Finish Flyers',
                },
                {
                  label: '100lb UV',
                  href: '/print-products/flyers/100lb-uv',
                  src: 'https://d12ufawtd6351k.cloudfront.net/100lb-uv-f.jpg',
                  alt: '100lb UV Flyers',
                },
                {
                  label: '80lb Enviro Uncoated',
                  href: '/print-products/flyers/80lb-enviro',
                  src: 'https://d12ufawtd6351k.cloudfront.net/enviro-flyer-1.webp',
                  alt: '80lb Enviro Uncoated Flyers',
                },
                {
                  label: '70lb Linen Uncoated',
                  href: '/print-products/flyers/70lb-linen',
                  src: 'https://d12ufawtd6351k.cloudfront.net/linen-flyer-1.jpg',
                  alt: '70lb Linen Uncoated Flyers',
                },
              ],
            },
          ],
          a = () => {
            let e = i.flatMap((e) => e.sublinks || [])
            return (0, s.jsxs)('div', {
              className: 'container mx-auto p-44',
              children: [
                (0, s.jsx)('h1', {
                  className: 'text-6xl font-bold mb-6 text-center',
                  children: 'Flyers',
                }),
                (0, s.jsx)('p', {
                  className: 'mb-4 text-2xl font-medium text-center',
                  children:
                    'Explore our range of high-quality flyers, available in various finishes and styles to suit your needs.',
                }),
                (0, s.jsx)('div', {
                  className:
                    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center',
                  children: e.map((e, r) =>
                    (0, s.jsx)(
                      'div',
                      {
                        className: 'border rounded-lg shadow-lg p-12 max-w-sm',
                        children: (0, s.jsx)(n(), {
                          href: e.href,
                          children: (0, s.jsxs)('div', {
                            className: 'cursor-pointer',
                            children: [
                              (0, s.jsx)(o.default, {
                                src: e.src,
                                alt: e.alt,
                                width: 164,
                                height: 164,
                                className: 'w-full h-40 object-cover rounded-lg mb-4',
                              }),
                              (0, s.jsx)('h2', {
                                className: 'text-xl font-semibold text-center mb-2',
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
            })
          }
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
      66702: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            GlobalError: () => o.a,
            __next_app__: () => u,
            pages: () => p,
            routeModule: () => c,
            tree: () => d,
          })
        var s = t(11892),
          l = t(12875),
          n = t(75043),
          o = t.n(n),
          i = t(28188),
          a = {}
        for (let e in i)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (a[e] = () => i[e])
        t.d(r, a)
        let d = {
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
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(t.bind(t, 13755)),
                              '/var/www/deploy-adap/src/app/print-products/flyers/page.tsx',
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
          p = ['/var/www/deploy-adap/src/app/print-products/flyers/page.tsx'],
          u = { require: t, loadChunk: () => Promise.resolve() },
          c = new s.AppPageRouteModule({
            definition: {
              kind: l.RouteKind.APP_PAGE,
              page: '/print-products/flyers/page',
              pathname: '/print-products/flyers',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: d },
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
  var r = require('../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [7920, 1813, 9203, 3245], () => t(66702))
  module.exports = s
})()
