;(() => {
  var e = {}
  ;(e.id = 7627),
    (e.ids = [7627]),
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
      23120: (e, t, r) => {
        Promise.resolve().then(r.t.bind(r, 77175, 23)),
          Promise.resolve().then(r.t.bind(r, 68474, 23))
      },
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
      32848: (e, t, r) => {
        Promise.resolve().then(r.t.bind(r, 53309, 23)),
          Promise.resolve().then(r.t.bind(r, 13484, 23))
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
      74762: (e, t, r) => {
        'use strict'
        r.r(t),
          r.d(t, {
            GlobalError: () => n.a,
            __next_app__: () => c,
            pages: () => l,
            routeModule: () => u,
            tree: () => p,
          })
        var s = r(11892),
          i = r(12875),
          a = r(75043),
          n = r.n(a),
          o = r(28188),
          d = {}
        for (let e in o)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (d[e] = () => o[e])
        r.d(t, d)
        let p = {
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
                          'matte-finish',
                          {
                            children: [
                              '__PAGE__',
                              {},
                              {
                                page: [
                                  () => Promise.resolve().then(r.bind(r, 85913)),
                                  '/var/www/deploy-adap/src/app/print-products/postcards/matte-finish/page.tsx',
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
          l = ['/var/www/deploy-adap/src/app/print-products/postcards/matte-finish/page.tsx'],
          c = { require: r, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: i.RouteKind.APP_PAGE,
              page: '/print-products/postcards/matte-finish/page',
              pathname: '/print-products/postcards/matte-finish',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: p },
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
      85913: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => d })
        var s = r(21396)
        r(88525)
        var i = r(77175),
          a = r.n(i),
          n = r(9203)
        let o = [
            {
              label: '10pt Matte Finish',
              href: '/print-products/postcards/matte-finish/10pt',
              src: 'https://d12ufawtd6351k.cloudfront.net/10pt-matte-finish-pc.webp',
              alt: '10pt Matte Finish Post Cards',
            },
            {
              label: '14pt Matte Finish',
              href: '/print-products/postcards/matte-finish/14pt',
              src: 'https://d12ufawtd6351k.cloudfront.net/14pt-matte-finish-pc.webp',
              alt: '14pt Matte Finish Post Cards',
            },
            {
              label: '16pt Matte Finish',
              href: '/print-products/postcards/matte-finish/16pt',
              src: 'https://d12ufawtd6351k.cloudfront.net/16pt-matte-finish-pc.webp',
              alt: '16pt Matte Finish Post Cards',
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
                    children: 'Matte Finish Postcards',
                  }),
                  (0, s.jsx)('p', {
                    className: 'text-center text-xl font-medium mb-8',
                    children:
                      'Explore our range of high-quality matte finish postcards, perfect for an elegant, velvety look and feel.',
                  }),
                  (0, s.jsx)('div', {
                    className: 'grid grid-cols-1 md:grid-cols-3 gap-6',
                    children: o.map((e, t) =>
                      (0, s.jsx)(
                        'div',
                        {
                          className:
                            'border rounded-lg shadow-lg p-4 flex flex-col items-center text-center bg-white',
                          children: (0, s.jsx)(a(), {
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
                        t
                      )
                    ),
                  }),
                ],
              }),
            })
      },
    })
  var t = require('../../../../webpack-runtime.js')
  t.C(e)
  var r = (e) => t((t.s = e)),
    s = t.X(0, [7920, 1813, 9203, 3245], () => r(74762))
  module.exports = s
})()
