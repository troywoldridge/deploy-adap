;(() => {
  var e = {}
  ;(e.id = 3838),
    (e.ids = [3838]),
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
      33194: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 65306))
      },
      33873: (e) => {
        'use strict'
        e.exports = require('path')
      },
      41744: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => l })
        var s = t(24518),
          a = t(53309),
          n = t.n(a),
          o = t(79797)
        let l = () =>
          (0, s.jsxs)('div', {
            className: 'container mx-auto px-4 py-24',
            children: [
              (0, s.jsx)('h1', {
                className: 'text-4xl font-bold text-center mb-10',
                children: 'Labels And Packaging',
              }),
              (0, s.jsxs)('div', {
                className: 'mb-12 text-center',
                children: [
                  (0, s.jsx)('h2', {
                    className: 'text-3xl font-semibold mb-4',
                    children: 'Roll Labels',
                  }),
                  (0, s.jsx)(n(), {
                    href: '/roll-labels',
                    children: (0, s.jsx)(o.default, {
                      src: 'https://d12ufawtd6351k.cloudfront.net/roll-label-3.webp',
                      alt: 'Roll Labels',
                      className:
                        'mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform',
                      width: 500,
                      height: 300,
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)('div', {
                className: 'text-center',
                children: [
                  (0, s.jsx)('h2', {
                    className: 'text-3xl font-semibold mb-4',
                    children: 'Product Boxes',
                  }),
                  (0, s.jsx)(n(), {
                    href: '/product-boxes',
                    children: (0, s.jsx)(o.default, {
                      src: 'https://d12ufawtd6351k.cloudfront.net/productbox-1.webp',
                      alt: 'Product Boxes',
                      className:
                        'mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform',
                      width: 500,
                      height: 300,
                    }),
                  }),
                ],
              }),
            ],
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
      62994: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            GlobalError: () => o.a,
            __next_app__: () => c,
            pages: () => p,
            routeModule: () => u,
            tree: () => d,
          })
        var s = t(11892),
          a = t(12875),
          n = t(75043),
          o = t.n(n),
          l = t(28188),
          i = {}
        for (let e in l)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (i[e] = () => l[e])
        t.d(r, i)
        let d = {
            children: [
              '',
              {
                children: [
                  'labels-and-packaging',
                  {
                    children: [
                      '__PAGE__',
                      {},
                      {
                        page: [
                          () => Promise.resolve().then(t.bind(t, 65306)),
                          '/var/www/deploy-adap/src/app/labels-and-packaging/page.tsx',
                        ],
                      },
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
          p = ['/var/www/deploy-adap/src/app/labels-and-packaging/page.tsx'],
          c = { require: t, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: '/labels-and-packaging/page',
              pathname: '/labels-and-packaging',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: d },
          })
      },
      63033: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-unit-async-storage.external.js')
      },
      65306: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => s })
        let s = (0, t(56968).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/var/www/deploy-adap/src/app/labels-and-packaging/page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            )
          },
          '/var/www/deploy-adap/src/app/labels-and-packaging/page.tsx',
          'default'
        )
      },
      79551: (e) => {
        'use strict'
        e.exports = require('url')
      },
      81630: (e) => {
        'use strict'
        e.exports = require('http')
      },
      96242: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 41744))
      },
    })
  var r = require('../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [7920, 1813, 3245], () => t(62994))
  module.exports = s
})()
