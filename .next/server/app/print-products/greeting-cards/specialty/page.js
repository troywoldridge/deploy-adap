;(() => {
  var e = {}
  ;(e.id = 572),
    (e.ids = [572]),
    (e.modules = {
      3295: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      7144: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 66496))
      },
      10846: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
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
      43592: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 79818))
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
      66496: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => l })
        var s = t(24518)
        t(76615)
        var a = t(53309),
          i = t.n(a),
          n = t(79797)
        let o = [
            {
              label: 'Metallic Foil',
              href: '/print-products/greeting-cards/specialty/metallic-foil-gc',
              src: 'https://d12ufawtd6351k.cloudfront.net/metallic-foil-gc.png',
              alt: 'Metallic Foil Greeting Cards',
            },
            {
              label: 'Spot UV',
              href: '/print-products/greeting-cards/specialty/spot-uv-gc',
              src: 'https://d12ufawtd6351k.cloudfront.net/spot-uv-gc.png',
              alt: 'Spot UV Greeting Cards',
            },
            {
              label: 'Kraft Paper',
              href: '/print-products/greeting-cards/specialty/kraft-paper-gc',
              src: 'https://d12ufawtd6351k.cloudfront.net/kraft-paper-gc.png',
              alt: 'Kraft Paper Greeting Cards',
            },
            {
              label: 'Pearl Paper',
              href: '/print-products/greeting-cards/specialty/pearl-paper-gc',
              src: 'https://d12ufawtd6351k.cloudfront.net/pearl-paper-gc.png',
              alt: 'Pearl Paper Greeting Cards',
            },
          ],
          l = () =>
            (0, s.jsxs)('div', {
              className: 'container mx-auto px-6 py-8',
              children: [
                (0, s.jsx)('h1', {
                  className: 'text-4xl font-bold text-center mb-6',
                  children: 'Specialty Greeting Cards',
                }),
                (0, s.jsx)('p', {
                  className: 'mb-8 text-center text-lg text-gray-700',
                  children: 'Select your specialty greeting cards option.',
                }),
                (0, s.jsx)('div', {
                  className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6',
                  children: o.map((e, r) =>
                    (0, s.jsx)(
                      i(),
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
                      r
                    )
                  ),
                }),
              ],
            })
      },
      79551: (e) => {
        'use strict'
        e.exports = require('url')
      },
      79818: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => s })
        let s = (0, t(56968).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/var/www/deploy-adap/src/app/print-products/greeting-cards/specialty/page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            )
          },
          '/var/www/deploy-adap/src/app/print-products/greeting-cards/specialty/page.tsx',
          'default'
        )
      },
      81630: (e) => {
        'use strict'
        e.exports = require('http')
      },
      83804: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            GlobalError: () => n.a,
            __next_app__: () => c,
            pages: () => d,
            routeModule: () => u,
            tree: () => p,
          })
        var s = t(11892),
          a = t(12875),
          i = t(75043),
          n = t.n(i),
          o = t(28188),
          l = {}
        for (let e in o)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (l[e] = () => o[e])
        t.d(r, l)
        let p = {
            children: [
              '',
              {
                children: [
                  'print-products',
                  {
                    children: [
                      'greeting-cards',
                      {
                        children: [
                          'specialty',
                          {
                            children: [
                              '__PAGE__',
                              {},
                              {
                                page: [
                                  () => Promise.resolve().then(t.bind(t, 79818)),
                                  '/var/www/deploy-adap/src/app/print-products/greeting-cards/specialty/page.tsx',
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
          d = ['/var/www/deploy-adap/src/app/print-products/greeting-cards/specialty/page.tsx'],
          c = { require: t, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: '/print-products/greeting-cards/specialty/page',
              pathname: '/print-products/greeting-cards/specialty',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: p },
          })
      },
    })
  var r = require('../../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [1978, 1813, 3245], () => t(83804))
  module.exports = s
})()
