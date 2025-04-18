;(() => {
  var e = {}
  ;(e.id = 3970),
    (e.ids = [3970]),
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
      56608: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 95785))
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
      93056: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 97280))
      },
      93132: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            GlobalError: () => i.a,
            __next_app__: () => c,
            pages: () => l,
            routeModule: () => u,
            tree: () => p,
          })
        var s = t(11892),
          n = t(12875),
          o = t(75043),
          i = t.n(o),
          a = t(28188),
          d = {}
        for (let e in a)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (d[e] = () => a[e])
        t.d(r, d)
        let p = {
            children: [
              '',
              {
                children: [
                  'print-products',
                  {
                    children: [
                      'numbered-tickets',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(t.bind(t, 97280)),
                              '/var/www/deploy-adap/src/app/print-products/numbered-tickets/page.tsx',
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
          l = ['/var/www/deploy-adap/src/app/print-products/numbered-tickets/page.tsx'],
          c = { require: t, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: n.RouteKind.APP_PAGE,
              page: '/print-products/numbered-tickets/page',
              pathname: '/print-products/numbered-tickets',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: p },
          })
      },
      95785: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => d })
        var s = t(24518)
        t(76615)
        var n = t(53309),
          o = t.n(n),
          i = t(79797)
        let a = [
            {
              label: '14pt Numbered Tickets',
              href: '/print-products/numbered-tickets/14pt',
              src: 'https://d12ufawtd6351k.cloudfront.net/numbered-tickets.png',
              alt: '14pt Numbered Tickets',
            },
          ],
          d = () =>
            (0, s.jsxs)('div', {
              className: 'container mx-auto px-6 py-10',
              children: [
                (0, s.jsx)('h1', {
                  className: 'text-6xl font-bold mb-6 text-center',
                  children: 'Numbered Tickets',
                }),
                (0, s.jsx)('p', {
                  className: 'mb-8 text-center text-2xl font-medium text-gray-700',
                  children:
                    'Explore our selection of numbered tickets available in various styles, perfect for concerts, raffles, and events.',
                }),
                (0, s.jsx)('div', {
                  className: 'flex justify-center',
                  children: a.map((e, r) =>
                    (0, s.jsx)(
                      'div',
                      {
                        className: 'border rounded-lg shadow-lg p-4 w-full max-w-md',
                        children: (0, s.jsx)(o(), {
                          href: e.href,
                          children: (0, s.jsxs)('div', {
                            className: 'cursor-pointer',
                            children: [
                              (0, s.jsx)(i.default, {
                                src: e.src,
                                alt: e.alt,
                                width: 256,
                                height: 160,
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
      },
      97280: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => s })
        let s = (0, t(56968).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/var/www/deploy-adap/src/app/print-products/numbered-tickets/page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            )
          },
          '/var/www/deploy-adap/src/app/print-products/numbered-tickets/page.tsx',
          'default'
        )
      },
    })
  var r = require('../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [7920, 1813, 3245], () => t(93132))
  module.exports = s
})()
