;(() => {
  var e = {}
  ;(e.id = 1736),
    (e.ids = [1736]),
    (e.modules = {
      3295: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      10822: () => {},
      10846: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      16848: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            GlobalError: () => i.a,
            __next_app__: () => l,
            pages: () => u,
            routeModule: () => c,
            tree: () => p,
          })
        var s = t(11892),
          o = t(12875),
          n = t(75043),
          i = t.n(n),
          d = t(28188),
          a = {}
        for (let e in d)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (a[e] = () => d[e])
        t.d(r, a)
        let p = {
            children: [
              '',
              {
                children: [
                  'products',
                  {
                    children: [
                      '[productId]',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(t.bind(t, 69106)),
                              '/var/www/deploy-adap/src/app/products/[productId]/page.js',
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
          u = ['/var/www/deploy-adap/src/app/products/[productId]/page.js'],
          l = { require: t, loadChunk: () => Promise.resolve() },
          c = new s.AppPageRouteModule({
            definition: {
              kind: o.RouteKind.APP_PAGE,
              page: '/products/[productId]/page',
              pathname: '/products/[productId]',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: p },
          })
      },
      19070: () => {},
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
      69106: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => o })
        var s = t(74554)
        async function o(e, r) {
          let { productId: t } = e.query
          if ('GET' === e.method) {
            let e = await s.z.product.findUnique({ where: { id: parseInt(t) } })
            return e ? r.status(200).json(e) : r.status(404).json({ message: 'Product not found' })
          }
          return r.status(405).json({ message: 'Method Not Allowed' })
        }
      },
      74554: (e, r, t) => {
        'use strict'
        t.d(r, { z: () => o })
        let s = require('@prisma/client'),
          o = global.prisma || new s.PrismaClient()
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
    s = r.X(0, [7920, 1813, 3245], () => t(16848))
  module.exports = s
})()
