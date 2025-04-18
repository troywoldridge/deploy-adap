;(() => {
  var e = {}
  ;(e.id = 5461),
    (e.ids = [5461]),
    (e.modules = {
      10822: () => {},
      10846: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      16098: (e, t, r) => {
        'use strict'
        r.r(t),
          r.d(t, {
            patchFetch: () => g,
            routeModule: () => u,
            serverHooks: () => l,
            workAsyncStorage: () => d,
            workUnitAsyncStorage: () => c,
          })
        var s = {}
        r.r(s), r.d(s, { GET: () => p })
        var a = r(74098),
          n = r(12875),
          i = r(71978),
          o = r(74554)
        async function p(e) {
          try {
            let { searchParams: t } = new URL(e.url),
              r = t.get('page') || '1',
              s = t.get('limit') || '10',
              a = t.get('search') || '',
              n = parseInt(r, 10),
              i = parseInt(s, 10)
            if (isNaN(n) || n < 1)
              return new Response(JSON.stringify({ message: 'Invalid page number' }), {
                status: 400,
              })
            if (isNaN(i) || i < 1)
              return new Response(JSON.stringify({ message: 'Invalid limit value' }), {
                status: 400,
              })
            let p = a ? { OR: [{ name: { contains: a } }, { description: { contains: a } }] } : {},
              u = await o.z.product.findMany({ where: p, skip: (n - 1) * i, take: i }),
              d = await o.z.product.count({ where: p }),
              c = {
                products: u.map((e) => ({
                  ...e,
                  createdAt: e.createdAt.toISOString(),
                  updatedAt: e.updatedAt.toISOString(),
                })),
                total: d,
                page: n,
                totalPages: Math.ceil(d / i),
              }
            return new Response(JSON.stringify(c), { status: 200 })
          } catch (e) {
            return (
              console.error('Error fetching products:', e),
              new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
            )
          }
        }
        let u = new a.AppRouteRouteModule({
            definition: {
              kind: n.RouteKind.APP_ROUTE,
              page: '/api/v1/product/route',
              pathname: '/api/v1/product',
              filename: 'route',
              bundlePath: 'app/api/v1/product/route',
            },
            resolvedPagePath: '/var/www/deploy-adap/src/app/api/v1/product/route.ts',
            nextConfigOutput: 'standalone',
            userland: s,
          }),
          { workAsyncStorage: d, workUnitAsyncStorage: c, serverHooks: l } = u
        function g() {
          return (0, i.patchFetch)({ workAsyncStorage: d, workUnitAsyncStorage: c })
        }
      },
      19070: () => {},
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
      44870: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-route.runtime.prod.js')
      },
      63033: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-unit-async-storage.external.js')
      },
      74098: (e, t, r) => {
        'use strict'
        e.exports = r(44870)
      },
      74554: (e, t, r) => {
        'use strict'
        r.d(t, { z: () => a })
        let s = require('@prisma/client'),
          a = global.prisma || new s.PrismaClient()
      },
    })
  var t = require('../../../../webpack-runtime.js')
  t.C(e)
  var r = (e) => t((t.s = e)),
    s = t.X(0, [1978], () => r(16098))
  module.exports = s
})()
