;(() => {
  var e = {}
  ;(e.id = 5816),
    (e.ids = [5816]),
    (e.modules = {
      3295: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      5294: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => d })
        var s = t(24518)
        t(76615)
        var a = t(53309),
          i = t.n(a),
          n = t(79797)
        let o = [
            {
              label: '13pt Enviro Uncoated',
              href: '/print-products/greeting-cards/writable/13pt-enviro-gc',
              src: 'https://d12ufawtd6351k.cloudfront.net/13pt-enviro-gc.jpg',
              alt: '13pt Enviro Uncoated Greeting Cards',
            },
            {
              label: '14pt Writable + AQ (C1S)',
              href: '/print-products/greeting-cards/writable/14pt-writable-aq',
              src: 'https://d12ufawtd6351k.cloudfront.net/14pt-writable-aq-gc.jpg',
              alt: '14pt Writable + AQ (C1S) Greeting Cards',
            },
            {
              label: '14pt Writable + UV',
              href: '/print-products/greeting-cards/writable/14pt-writable-uv',
              src: 'https://d12ufawtd6351k.cloudfront.net/14pt-writable-uv-gc.jpg',
              alt: '14pt Writable + UV Greeting Cards',
            },
          ],
          d = () =>
            (0, s.jsxs)('div', {
              className: 'container mx-auto px-6 py-8',
              children: [
                (0, s.jsx)('h1', {
                  className: 'text-4xl font-bold text-center mb-6',
                  children: 'Writable Greeting Cards',
                }),
                (0, s.jsx)('p', {
                  className: 'mb-8 text-center text-lg text-gray-700',
                  children: 'Select your writable greeting cards option.',
                }),
                (0, s.jsx)('div', {
                  className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
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
      10846: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      19121: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/action-async-storage.external.js')
      },
      25788: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 29360))
      },
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
      29360: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => s })
        let s = (0, t(56968).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/var/www/deploy-adap/src/app/print-products/greeting-cards/writable/page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            )
          },
          '/var/www/deploy-adap/src/app/print-products/greeting-cards/writable/page.tsx',
          'default'
        )
      },
      33873: (e) => {
        'use strict'
        e.exports = require('path')
      },
      35516: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 5294))
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
      94390: (e, r, t) => {
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
                      'greeting-cards',
                      {
                        children: [
                          'writable',
                          {
                            children: [
                              '__PAGE__',
                              {},
                              {
                                page: [
                                  () => Promise.resolve().then(t.bind(t, 29360)),
                                  '/var/www/deploy-adap/src/app/print-products/greeting-cards/writable/page.tsx',
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
          p = ['/var/www/deploy-adap/src/app/print-products/greeting-cards/writable/page.tsx'],
          c = { require: t, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: '/print-products/greeting-cards/writable/page',
              pathname: '/print-products/greeting-cards/writable',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: l },
          })
      },
    })
  var r = require('../../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [7920, 1813, 3245], () => t(94390))
  module.exports = s
})()
