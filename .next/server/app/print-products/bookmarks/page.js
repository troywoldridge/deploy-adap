;(() => {
  var t = {}
  ;(t.id = 4439),
    (t.ids = [4439]),
    (t.modules = {
      3295: (t) => {
        'use strict'
        t.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      10846: (t) => {
        'use strict'
        t.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      19121: (t) => {
        'use strict'
        t.exports = require('next/dist/server/app-render/action-async-storage.external.js')
      },
      29294: (t) => {
        'use strict'
        t.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
      33873: (t) => {
        'use strict'
        t.exports = require('path')
      },
      36125: (t, e, r) => {
        Promise.resolve().then(r.bind(r, 69149))
      },
      48135: (t, e, r) => {
        'use strict'
        r.r(e), r.d(e, { default: () => s })
        let s = (0, r(56968).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/var/www/deploy-adap/src/app/print-products/bookmarks/page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            )
          },
          '/var/www/deploy-adap/src/app/print-products/bookmarks/page.tsx',
          'default'
        )
      },
      51536: (t, e, r) => {
        'use strict'
        r.r(e),
          r.d(e, {
            GlobalError: () => n.a,
            __next_app__: () => c,
            pages: () => d,
            routeModule: () => m,
            tree: () => p,
          })
        var s = r(11892),
          o = r(12875),
          a = r(75043),
          n = r.n(a),
          i = r(28188),
          l = {}
        for (let t in i)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(t) &&
            (l[t] = () => i[t])
        r.d(e, l)
        let p = {
            children: [
              '',
              {
                children: [
                  'print-products',
                  {
                    children: [
                      'bookmarks',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(r.bind(r, 48135)),
                              '/var/www/deploy-adap/src/app/print-products/bookmarks/page.tsx',
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
          d = ['/var/www/deploy-adap/src/app/print-products/bookmarks/page.tsx'],
          c = { require: r, loadChunk: () => Promise.resolve() },
          m = new s.AppPageRouteModule({
            definition: {
              kind: o.RouteKind.APP_PAGE,
              page: '/print-products/bookmarks/page',
              pathname: '/print-products/bookmarks',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: p },
          })
      },
      55511: (t) => {
        'use strict'
        t.exports = require('crypto')
      },
      55591: (t) => {
        'use strict'
        t.exports = require('https')
      },
      63033: (t) => {
        'use strict'
        t.exports = require('next/dist/server/app-render/work-unit-async-storage.external.js')
      },
      69149: (t, e, r) => {
        'use strict'
        r.r(e), r.d(e, { default: () => p })
        var s = r(24518)
        r(76615)
        var o = r(53309),
          a = r.n(o),
          n = r(79797)
        let i = {
            label: 'Bookmarks',
            sublinks: [
              {
                label: 'Matte Bookmarks',
                href: '/print-products/bookmarks/matte',
                src: 'https://d12ufawtd6351k.cloudfront.net/matte-finish-bm.jpg',
                alt: 'Matte Finish Bookmarks',
                sublinks: [
                  {
                    label: '10pt Matte Finish',
                    href: '/print-products/bookmarks/matte/10pt',
                    src: 'https://d12ufawtd6351k.cloudfront.net/10pt-matte-finish-bm.jpg',
                    alt: '10pt Matte Finish Bookmarks',
                  },
                  {
                    label: '14pt Matte Finish',
                    href: '/print-products/bookmarks/matte/14pt',
                    src: 'https://d12ufawtd6351k.cloudfront.net/14pt-matte-finish-bm.jpg',
                    alt: '14pt Matte Finish Bookmarks',
                  },
                  {
                    label: '16pt Matte Finish',
                    href: '/print-products/bookmarks/matte/16pt',
                    src: 'https://d12ufawtd6351k.cloudfront.net/16pt-matte-finish-bm.jpg',
                    alt: '16pt Matte Finish Bookmarks',
                  },
                ],
              },
              {
                label: 'UV (High Gloss) Bookmarks',
                href: '/print-products/bookmarks/uv',
                src: 'https://d12ufawtd6351k.cloudfront.net/uv-bm.jpg',
                alt: 'UV High Gloss Bookmarks',
                sublinks: [
                  {
                    label: '14pt UV (High Gloss)',
                    href: '/print-products/bookmarks/uv/14pt',
                    src: 'https://d12ufawtd6351k.cloudfront.net/14pt-uv-bm.jpg',
                    alt: '14pt UV High Gloss Bookmarks',
                  },
                  {
                    label: '16pt UV (High Gloss)',
                    href: '/print-products/bookmarks/uv/16pt',
                    src: 'https://d12ufawtd6351k.cloudfront.net/16pt-uv-bm.jpg',
                    alt: '16pt UV High Gloss Bookmarks',
                  },
                ],
              },
              {
                label: 'Lamination Bookmarks',
                href: '/print-products/bookmarks/lamination',
                src: 'https://d12ufawtd6351k.cloudfront.net/lamination-bm.jpg',
                alt: 'Lamination Bookmarks',
                sublinks: [
                  {
                    label: '18pt Matte With Silk Lamination',
                    href: '/print-products/bookmarks/lamination/18pt-matte-silk',
                    src: 'https://d12ufawtd6351k.cloudfront.net/18pt-silk-lam-bm.jpg',
                    alt: '18pt Matte Silk Lamination Bookmarks',
                  },
                  {
                    label: '18pt Gloss Lamination',
                    href: '/print-products/bookmarks/lamination/18pt-gloss-lamination',
                    src: 'https://d12ufawtd6351k.cloudfront.net/18pt-gloss-lam-bm.jpg',
                    alt: '18pt Gloss Lamination Bookmarks',
                  },
                ],
              },
              {
                label: 'Specialty Bookmarks',
                href: '/print-products/bookmarks/specialty',
                src: 'https://d12ufawtd6351k.cloudfront.net/specialty-bm.jpg',
                alt: 'Specialty Bookmarks',
                sublinks: [
                  {
                    label: '13pt Enviro Uncoated Bookmarks',
                    href: '/print-products/bookmarks/specialty/13pt-enviro-bm',
                    src: 'https://d12ufawtd6351k.cloudfront.net/13pt-enviro-bm.jpg',
                    alt: '13pt Enviro Uncoated Bookmarks',
                  },
                  {
                    label: '13pt Linen Uncoated Bookmarks',
                    href: '/print-products/bookmarks/specialty/13pt-linen-bm',
                    src: 'https://d12ufawtd6351k.cloudfront.net/13pt-linen-bm.jpg',
                    alt: '13pt Linen Bookmarks',
                  },
                  {
                    label: '14pt Writable + UV (C1S)',
                    href: '/print-products/bookmarks/specialty/14pt-writable-uv',
                    src: 'https://d12ufawtd6351k.cloudfront.net/14pt-writable-uv-bm.jpg',
                    alt: '14pt Writable + UV Bookmarks',
                  },
                  {
                    label: '18pt Matte Lam + Spot UV',
                    href: '/print-products/bookmarks/specialty/18pt-matte-lam-spot-uv',
                    src: 'https://d12ufawtd6351k.cloudfront.net/18pt-matte-lam-spot-uv-bm.jpg',
                    alt: '18pt Matte Lam + Spot UV Bookmarks',
                  },
                ],
              },
            ],
          },
          l = (t) =>
            (0, s.jsx)('ul', {
              className: 'ml-6 border-l border-gray-300 pl-4 mt-2',
              children: t.map((t, e) =>
                (0, s.jsxs)(
                  'li',
                  {
                    className: 'mb-2',
                    children: [
                      (0, s.jsx)(a(), {
                        href: t.href,
                        children: (0, s.jsxs)('div', {
                          className:
                            'flex items-center gap-2 hover:bg-gray-100 p-1 rounded transition',
                          children: [
                            (0, s.jsx)(n.default, {
                              src: t.src,
                              alt: t.alt,
                              width: 48,
                              height: 48,
                              className: 'w-12 h-12 object-cover rounded',
                            }),
                            (0, s.jsx)('span', {
                              className: 'text-sm font-medium',
                              children: t.label,
                            }),
                          ],
                        }),
                      }),
                      t.sublinks && l(t.sublinks),
                    ],
                  },
                  e
                )
              ),
            }),
          p = () =>
            (0, s.jsxs)('div', {
              className: 'container mx-auto px-6 py-8',
              children: [
                (0, s.jsx)('h1', {
                  className: 'text-4xl font-bold mb-6 text-center',
                  children: i.label,
                }),
                (0, s.jsx)('p', {
                  className: 'mb-8 text-center text-lg text-gray-700',
                  children:
                    'Explore our range of bookmarks available in a variety of finishes and styles.',
                }),
                (0, s.jsx)('div', {
                  className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
                  children:
                    i.sublinks &&
                    i.sublinks.map((t, e) =>
                      (0, s.jsxs)(
                        'div',
                        {
                          className: 'border rounded-lg shadow-lg p-4',
                          children: [
                            (0, s.jsx)(a(), {
                              href: t.href,
                              children: (0, s.jsxs)('div', {
                                className: 'cursor-pointer',
                                children: [
                                  (0, s.jsx)(n.default, {
                                    src: t.src,
                                    alt: t.alt,
                                    width: 300,
                                    height: 200,
                                    className: 'w-full h-40 object-cover rounded-lg mb-4',
                                  }),
                                  (0, s.jsx)('h2', {
                                    className: 'text-xl font-semibold text-center mb-2',
                                    children: t.label,
                                  }),
                                ],
                              }),
                            }),
                            t.sublinks && l(t.sublinks),
                          ],
                        },
                        e
                      )
                    ),
                }),
              ],
            })
      },
      79551: (t) => {
        'use strict'
        t.exports = require('url')
      },
      81630: (t) => {
        'use strict'
        t.exports = require('http')
      },
      92157: (t, e, r) => {
        Promise.resolve().then(r.bind(r, 48135))
      },
    })
  var e = require('../../../webpack-runtime.js')
  e.C(t)
  var r = (t) => e((e.s = t)),
    s = e.X(0, [7920, 1813, 3245], () => r(51536))
  module.exports = s
})()
