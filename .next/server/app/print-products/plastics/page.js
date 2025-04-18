;(() => {
  var e = {}
  ;(e.id = 1855),
    (e.ids = [1855]),
    (e.modules = {
      3295: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      10846: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      19121: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/action-async-storage.external.js')
      },
      26837: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => s })
        let s = (0, t(56968).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/var/www/deploy-adap/src/app/print-products/plastics/page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            )
          },
          '/var/www/deploy-adap/src/app/print-products/plastics/page.tsx',
          'default'
        )
      },
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
      33873: (e) => {
        'use strict'
        e.exports = require('path')
      },
      34357: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 26837))
      },
      45519: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => d })
        var s = t(24518)
        t(76615)
        var a = t(53309),
          i = t.n(a),
          n = t(79797)
        let o = [
            {
              label: 'Plastics',
              href: '/print-products/plastics/14pt',
              src: 'https://d12ufawtd6351k.cloudfront.net/plastics-1.webp',
              alt: 'Plastics',
              description: 'Durable plastic prints for a modern look.',
            },
          ],
          d = () =>
            (0, s.jsxs)('div', {
              className: 'container mx-auto px-6 py-10',
              children: [
                (0, s.jsx)('h1', {
                  className: 'text-6xl font-extrabold mb-6 text-center',
                  children: 'Plastic Cards',
                }),
                (0, s.jsx)('p', {
                  className: 'mb-8 text-center text-2xl font-bold text-gray-700',
                  children:
                    'Plastic cards offer a durable, high-quality solution that stands up to everyday wear and tear. Made from premium materials, these cards deliver crisp, vibrant prints and a professional finish that enhances your brand’s identity. Ideal for membership, loyalty, or business cards, they provide a lasting impression and superior resistance to water, scratches, and fading.',
                }),
                (0, s.jsx)('div', {
                  className: 'flex justify-center',
                  children: o.map((e, r) =>
                    (0, s.jsx)(
                      'div',
                      {
                        className: 'border rounded-lg shadow-lg p-4 w-full max-w-md',
                        children: (0, s.jsx)(i(), {
                          href: e.href,
                          children: (0, s.jsxs)('div', {
                            className: 'cursor-pointer',
                            children: [
                              (0, s.jsx)(n.default, {
                                src: e.src,
                                alt: e.alt,
                                width: 256,
                                height: 160,
                                className: 'w-full h-72 object-cover rounded-lg mb-4',
                              }),
                              (0, s.jsx)('h2', {
                                className: 'text-3xl font-semibold text-center mb-2',
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
      },
      47925: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 45519))
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
      71022: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            GlobalError: () => n.a,
            __next_app__: () => c,
            pages: () => p,
            routeModule: () => u,
            tree: () => l,
          })
        var s = t(11892),
          a = t(12875),
          i = t(75043),
          n = t.n(i),
          o = t(28188),
          d = {}
        for (let e in o)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (d[e] = () => o[e])
        t.d(r, d)
        let l = {
            children: [
              '',
              {
                children: [
                  'print-products',
                  {
                    children: [
                      'plastics',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(t.bind(t, 26837)),
                              '/var/www/deploy-adap/src/app/print-products/plastics/page.tsx',
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
          p = ['/var/www/deploy-adap/src/app/print-products/plastics/page.tsx'],
          c = { require: t, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: '/print-products/plastics/page',
              pathname: '/print-products/plastics',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: l },
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
    s = r.X(0, [1978, 1813, 3245], () => t(71022))
  module.exports = s
})()
