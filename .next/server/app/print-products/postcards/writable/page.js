;(() => {
  var e = {}
  ;(e.id = 4292),
    (e.ids = [4292]),
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
      23120: (e, r, t) => {
        Promise.resolve().then(t.t.bind(t, 77175, 23)),
          Promise.resolve().then(t.t.bind(t, 68474, 23))
      },
      28308: (e, r, t) => {
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
                      'postcards',
                      {
                        children: [
                          'writable',
                          {
                            children: [
                              '__PAGE__',
                              {},
                              {
                                page: [
                                  () => Promise.resolve().then(t.bind(t, 42798)),
                                  '/var/www/deploy-adap/src/app/print-products/postcards/writable/page.tsx',
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
          p = ['/var/www/deploy-adap/src/app/print-products/postcards/writable/page.tsx'],
          c = { require: t, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: '/print-products/postcards/writable/page',
              pathname: '/print-products/postcards/writable',
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
      32848: (e, r, t) => {
        Promise.resolve().then(t.t.bind(t, 53309, 23)),
          Promise.resolve().then(t.t.bind(t, 13484, 23))
      },
      33873: (e) => {
        'use strict'
        e.exports = require('path')
      },
      42798: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => d })
        var s = t(21396)
        t(88525)
        var a = t(77175),
          i = t.n(a),
          n = t(9203)
        let o = [
            {
              label: '13pt Enviro Uncoated',
              href: '/print-products/postcards/writable/13pt-enviro',
              src: 'https://d12ufawtd6351k.cloudfront.net/enviro-pc-1.webp',
              alt: '13pt Enviro Uncoated Postcards',
            },
            {
              label: '13pt Linen Uncoated',
              href: '/print-products/postcards/writable/13pt-linen',
              src: 'https://d12ufawtd6351k.cloudfront.net/13pt-linen-pc.png',
              alt: '13pt Linen Postcards',
            },
            {
              label: '14pt Writable + AQ',
              href: '/print-products/postcards/writable/14pt-aq',
              src: 'https://d12ufawtd6351k.cloudfront.net/aq-pc-2.webp',
              alt: '14pt Writable + AQ Postcards',
            },
            {
              label: '14pt Writable + UV',
              href: '/print-products/postcards/writable/14pt-uv',
              src: 'https://d12ufawtd6351k.cloudfront.net/silk-lam-pc-3.webp',
              alt: '14pt Writable + UV',
            },
          ],
          d = () =>
            (0, s.jsx)('div', {
              className: 'min-h-screen flex items-center justify-center bg-gray-50',
              children: (0, s.jsxs)('div', {
                className: 'max-w-8xl w-full px-4 mb-24',
                children: [
                  (0, s.jsx)('h1', {
                    className: 'text-center text-6xl font-bold mb-6',
                    children: 'Writable Postcards',
                  }),
                  (0, s.jsx)('p', {
                    className: 'text-center text-xl font-medium mb-8',
                    children:
                      'Discover our writable postcards, designed with a sophisticated matte finish that provides the perfect surface for your personal notes and messages.',
                  }),
                  (0, s.jsx)('div', {
                    className: 'grid grid-cols-1 md:grid-cols-4 gap-6',
                    children: o.map((e, r) =>
                      (0, s.jsx)(
                        'div',
                        {
                          className:
                            'border rounded-lg shadow-lg p-4 flex flex-col items-center text-center bg-white',
                          children: (0, s.jsx)(i(), {
                            href: e.href,
                            children: (0, s.jsxs)('div', {
                              className: 'cursor-pointer',
                              children: [
                                (0, s.jsx)(n.default, {
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
    })
  var r = require('../../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [7920, 1813, 9203, 3245], () => t(28308))
  module.exports = s
})()
