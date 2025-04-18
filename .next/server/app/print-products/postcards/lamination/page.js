;(() => {
  var e = {}
  ;(e.id = 998),
    (e.ids = [998]),
    (e.modules = {
      3295: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      9252: (e, r, t) => {
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
                          'lamination',
                          {
                            children: [
                              '__PAGE__',
                              {},
                              {
                                page: [
                                  () => Promise.resolve().then(t.bind(t, 67604)),
                                  '/var/www/deploy-adap/src/app/print-products/postcards/lamination/page.tsx',
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
          p = ['/var/www/deploy-adap/src/app/print-products/postcards/lamination/page.tsx'],
          c = { require: t, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: '/print-products/postcards/lamination/page',
              pathname: '/print-products/postcards/lamination',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: l },
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
      67604: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => d })
        var s = t(21396)
        t(88525)
        var a = t(77175),
          i = t.n(a),
          n = t(9203)
        let o = [
            {
              label: '18pt Gloss Lamination',
              href: '/print-products/postcards/lamination/18pt-gloss',
              src: 'https://d12ufawtd6351k.cloudfront.net/gloss-lam-pc-1.webp',
              alt: '18pt Gloss Lamination Postcards',
            },
            {
              label: '18pt Matte Silk Lamination',
              href: '/print-products/postcards/lamination/18pt-silk',
              src: 'https://d12ufawtd6351k.cloudfront.net/silk-lam-pc-2.webp',
              alt: '18pt Silk Lamination Postcards',
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
                    children: 'Laminated Postcards',
                  }),
                  (0, s.jsx)('p', {
                    className: 'text-center text-3xl mb-8',
                    children:
                      'Explore our range of Laminated postcards for a vivid shine and reflective finish.',
                  }),
                  (0, s.jsx)('div', {
                    className: 'grid grid-cols-1 md:grid-cols-2 gap-6',
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
                                  width: 350,
                                  height: 250,
                                  className: 'mx-auto object-cover rounded-lg mb-2',
                                }),
                                (0, s.jsx)('h2', {
                                  className: 'text-2xl font-semibold',
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
    s = r.X(0, [7920, 1813, 9203, 3245], () => t(9252))
  module.exports = s
})()
