;(() => {
  var e = {}
  ;(e.id = 3004),
    (e.ids = [3004]),
    (e.modules = {
      3295: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      7154: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 32328))
      },
      10846: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      19121: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/action-async-storage.external.js')
      },
      19363: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            GlobalError: () => o.a,
            __next_app__: () => c,
            pages: () => d,
            routeModule: () => u,
            tree: () => p,
          })
        var s = t(11892),
          n = t(12875),
          i = t(75043),
          o = t.n(i),
          a = t(28188),
          l = {}
        for (let e in a)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (l[e] = () => a[e])
        t.d(r, l)
        let p = {
            children: [
              '',
              {
                children: [
                  'print-products',
                  {
                    children: [
                      'clings',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(t.bind(t, 98754)),
                              '/var/www/deploy-adap/src/app/print-products/clings/page.tsx',
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
          d = ['/var/www/deploy-adap/src/app/print-products/clings/page.tsx'],
          c = { require: t, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: n.RouteKind.APP_PAGE,
              page: '/print-products/clings/page',
              pathname: '/print-products/clings',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: p },
          })
      },
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
      32328: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => l })
        var s = t(24518)
        t(76615)
        var n = t(53309),
          i = t.n(n),
          o = t(79797)
        let a = [
            {
              label: 'Transparent Clings',
              href: '/print-products/clings/transparent-clings',
              src: 'https://d12ufawtd6351k.cloudfront.net/transparent-clings.jpg',
              alt: 'Transparent Clings',
            },
            {
              label: 'White Opaque Clings',
              href: '/print-products/clings/white-opaque-clings',
              src: 'https://d12ufawtd6351k.cloudfront.net/opaque-clings.jpg',
              alt: 'White Opaque Clings',
            },
          ],
          l = () =>
            (0, s.jsxs)('div', {
              className: 'container mx-auto px-6 py-8',
              children: [
                (0, s.jsx)('h1', {
                  className: 'text-4xl font-bold text-center mb-6',
                  children: 'Clings',
                }),
                (0, s.jsx)('p', {
                  className: 'mb-8 text-center text-lg text-gray-700',
                  children: 'Choose your type of clings.',
                }),
                (0, s.jsx)('div', {
                  className: 'grid grid-cols-1 md:grid-cols-2 gap-6',
                  children: a.map((e, r) =>
                    (0, s.jsx)(
                      i(),
                      {
                        href: e.href,
                        children: (0, s.jsxs)('div', {
                          className:
                            'border rounded-lg shadow-lg p-4 hover:shadow-2xl transition transform hover:scale-105 cursor-pointer',
                          children: [
                            (0, s.jsx)('div', {
                              className: 'relative w-full h-80',
                              children: (0, s.jsx)(o.default, {
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
      33873: (e) => {
        'use strict'
        e.exports = require('path')
      },
      44106: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 98754))
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
      98754: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => s })
        let s = (0, t(56968).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/var/www/deploy-adap/src/app/print-products/clings/page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            )
          },
          '/var/www/deploy-adap/src/app/print-products/clings/page.tsx',
          'default'
        )
      },
    })
  var r = require('../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [7920, 1813, 3245], () => t(19363))
  module.exports = s
})()
