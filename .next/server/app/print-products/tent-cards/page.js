;(() => {
  var e = {}
  ;(e.id = 1953),
    (e.ids = [1953]),
    (e.modules = {
      3295: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      8509: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => l })
        var s = r(24518)
        r(76615)
        var n = r(53309),
          a = r.n(n),
          o = r(79797)
        let d = [
            {
              label: 'Tent Cards',
              href: '/print-products/tent-cards',
              src: 'https://d12ufawtd6351k.cloudfront.net/tent-card-1.webp',
              alt: 'Tent Cards',
              sublinks: [
                {
                  label: '14pt Matte Finish',
                  href: '/print-products/tent-cards/14pt',
                  src: 'https://d12ufawtd6351k.cloudfront.net/tent-card-2.webp',
                  alt: '14pt Tent Cards',
                },
              ],
            },
          ],
          i = (e) =>
            (0, s.jsx)('ul', {
              className: 'ml-6 border-l border-gray-300 pl-4 mt-2',
              children: e.map((e, t) =>
                (0, s.jsxs)(
                  'li',
                  {
                    className: 'mb-2',
                    children: [
                      (0, s.jsx)(a(), {
                        href: e.href,
                        children: (0, s.jsxs)('div', {
                          className:
                            'flex items-center gap-2 hover:bg-gray-100 p-2 rounded transition',
                          children: [
                            (0, s.jsx)(o.default, {
                              src: e.src,
                              alt: e.alt,
                              width: 300,
                              height: 300,
                              unoptimized: !0,
                              className: 'w-32 h-32 object-cover rounded',
                            }),
                            (0, s.jsx)('span', {
                              className: 'text-xl font-bold',
                              children: e.label,
                            }),
                          ],
                        }),
                      }),
                      e.sublinks && i(e.sublinks),
                    ],
                  },
                  t
                )
              ),
            }),
          l = () => {
            let e = d[0]
            return (0, s.jsxs)('div', {
              className: 'container mx-auto px-6 py-8',
              children: [
                (0, s.jsx)('h1', {
                  className: 'text-6xl font-extrabold mb-6 text-center',
                  children: 'Tent Cards',
                }),
                (0, s.jsx)('p', {
                  className: 'mb-8 text-center text-2xl font-extrabold text-gray-700',
                  children:
                    'Tent cards are multi-dimensional print products that can be conveniently placed on tables for promotional purposes. They offer a smooth look and feel.',
                }),
                (0, s.jsx)('div', {
                  className: 'flex justify-center',
                  children: (0, s.jsxs)('div', {
                    className: 'border rounded-lg shadow-lg p-4 w-full max-w-md',
                    children: [
                      (0, s.jsx)(a(), {
                        href: e.href,
                        children: (0, s.jsxs)('div', {
                          className: 'cursor-pointer',
                          children: [
                            (0, s.jsx)(o.default, {
                              src: e.src,
                              alt: e.alt,
                              width: 300,
                              height: 300,
                              className: 'w-full h-72 object-cover rounded-lg mb-4',
                              unoptimized: !0,
                            }),
                            (0, s.jsx)('h2', {
                              className: 'text-3xl font-semibold text-center mb-2',
                              children: e.label,
                            }),
                          ],
                        }),
                      }),
                      e.sublinks && i(e.sublinks),
                    ],
                  }),
                }),
              ],
            })
          }
      },
      10846: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      19121: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/action-async-storage.external.js')
      },
      21126: (e, t, r) => {
        'use strict'
        r.r(t),
          r.d(t, {
            GlobalError: () => o.a,
            __next_app__: () => c,
            pages: () => p,
            routeModule: () => u,
            tree: () => l,
          })
        var s = r(11892),
          n = r(12875),
          a = r(75043),
          o = r.n(a),
          d = r(28188),
          i = {}
        for (let e in d)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (i[e] = () => d[e])
        r.d(t, i)
        let l = {
            children: [
              '',
              {
                children: [
                  'print-products',
                  {
                    children: [
                      'tent-cards',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(r.bind(r, 33871)),
                              '/var/www/deploy-adap/src/app/print-products/tent-cards/page.tsx',
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
          p = ['/var/www/deploy-adap/src/app/print-products/tent-cards/page.tsx'],
          c = { require: r, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: n.RouteKind.APP_PAGE,
              page: '/print-products/tent-cards/page',
              pathname: '/print-products/tent-cards',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: l },
          })
      },
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
      31735: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 8509))
      },
      33871: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => s })
        let s = (0, r(56968).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/var/www/deploy-adap/src/app/print-products/tent-cards/page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            )
          },
          '/var/www/deploy-adap/src/app/print-products/tent-cards/page.tsx',
          'default'
        )
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
      71487: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 33871))
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
  var t = require('../../../webpack-runtime.js')
  t.C(e)
  var r = (e) => t((t.s = e)),
    s = t.X(0, [1978, 1813, 3245], () => r(21126))
  module.exports = s
})()
