;(() => {
  var e = {}
  ;(e.id = 7801),
    (e.ids = [7801]),
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
      63033: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-unit-async-storage.external.js')
      },
      66025: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => s })
        let s = (0, r(56968).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/var/www/deploy-adap/src/app/print-products/magnets/page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            )
          },
          '/var/www/deploy-adap/src/app/print-products/magnets/page.tsx',
          'default'
        )
      },
      74972: (e, t, r) => {
        'use strict'
        r.r(t),
          r.d(t, {
            GlobalError: () => o.a,
            __next_app__: () => c,
            pages: () => p,
            routeModule: () => u,
            tree: () => d,
          })
        var s = r(11892),
          a = r(12875),
          n = r(75043),
          o = r.n(n),
          i = r(28188),
          l = {}
        for (let e in i)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (l[e] = () => i[e])
        r.d(t, l)
        let d = {
            children: [
              '',
              {
                children: [
                  'print-products',
                  {
                    children: [
                      'magnets',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(r.bind(r, 66025)),
                              '/var/www/deploy-adap/src/app/print-products/magnets/page.tsx',
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
          p = ['/var/www/deploy-adap/src/app/print-products/magnets/page.tsx'],
          c = { require: r, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: '/print-products/magnets/page',
              pathname: '/print-products/magnets',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: d },
          })
      },
      74975: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 80631))
      },
      79551: (e) => {
        'use strict'
        e.exports = require('url')
      },
      80631: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => l })
        var s = r(24518)
        r(76615)
        var a = r(53309),
          n = r.n(a),
          o = r(79797)
        let i = [
            {
              label: '14pt Magnets',
              href: '/print-products/magnets/14pt-magnets',
              src: 'https://d12ufawtd6351k.cloudfront.net/magnets-1.webp',
              alt: '14pt Magnets',
            },
            {
              label: '30mil Car Magnets',
              href: '/print-products/magnets/30mil-car-magnets',
              src: 'https://d12ufawtd6351k.cloudfront.net/car-magnet-1.webp',
              alt: '30 Mil Car Magnets',
            },
            {
              label: '30mil Cut To Shape Magnets',
              href: '/print-products/magnets/30mil-magnets',
              src: 'https://d12ufawtd6351k.cloudfront.net/contour-cut-4.webp',
              alt: '30 Mil Cut To Shape Magnets',
            },
            {
              label: '20mil Cut To Shape Magnets',
              href: '/print-products/magnets/20mil-magnets',
              src: 'https://d12ufawtd6351k.cloudfront.net/20mil-cut-to-shape-magnets-1.png',
              alt: '20 Mil Cut To Shape Magnets',
            },
          ],
          l = () =>
            (0, s.jsxs)('div', {
              className: 'container mx-auto px-6 py-8',
              children: [
                (0, s.jsx)('h1', {
                  className: 'text-4xl font-bold text-center mb-6',
                  children: 'Magnets',
                }),
                (0, s.jsx)('p', {
                  className: 'mb-8 text-center text-lg text-gray-700',
                  children:
                    'Explore our selection of magnets available in a variety of finishes and styles.',
                }),
                (0, s.jsx)('div', {
                  className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6',
                  children: i.map((e, t) =>
                    (0, s.jsx)(
                      n(),
                      {
                        href: e.href,
                        children: (0, s.jsxs)('div', {
                          className:
                            'border rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer',
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
                      t
                    )
                  ),
                }),
              ],
            })
      },
      81630: (e) => {
        'use strict'
        e.exports = require('http')
      },
      93127: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 66025))
      },
    })
  var t = require('../../../webpack-runtime.js')
  t.C(e)
  var r = (e) => t((t.s = e)),
    s = t.X(0, [7920, 1813, 3245], () => r(74972))
  module.exports = s
})()
