;(() => {
  var e = {}
  ;(e.id = 5461),
    (e.ids = [5461]),
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
      16098: (e, t, r) => {
        'use strict'
        r.r(t),
          r.d(t, {
            patchFetch: () => v,
            routeModule: () => d,
            serverHooks: () => m,
            workAsyncStorage: () => c,
            workUnitAsyncStorage: () => l,
          })
        var s = {}
        r.r(s), r.d(s, { GET: () => u })
        var a = r(74098),
          n = r(12875),
          i = r(71978),
          o = r(17811),
          p = r(74554)
        async function u(e) {
          try {
            let { searchParams: t } = new URL(e.url),
              r = parseInt(t.get('page') || '1', 10),
              s = parseInt(t.get('limit') || '10', 10),
              a = t.get('search') || ''
            if (isNaN(r) || r < 1)
              return o.NextResponse.json({ message: 'Invalid page number' }, { status: 400 })
            if (isNaN(s) || s < 1)
              return o.NextResponse.json({ message: 'Invalid limit value' }, { status: 400 })
            let n = a
                ? {
                    OR: [
                      { name: { contains: a, mode: 'insensitive' } },
                      { description: { contains: a, mode: 'insensitive' } },
                    ],
                  }
                : {},
              [i, u] = await Promise.all([
                p.z.product.findMany({ where: n, skip: (r - 1) * s, take: s }),
                p.z.product.count({ where: n }),
              ]),
              d = {
                products: i.map((e) => ({
                  ...e,
                  createdAt: e.createdAt.toISOString(),
                  updatedAt: e.updatedAt.toISOString(),
                })),
                total: u,
                page: r,
                totalPages: Math.ceil(u / s),
              }
            return o.NextResponse.json(d)
          } catch (e) {
            return (
              console.error('Error fetching products:', e),
              o.NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        let d = new a.AppRouteRouteModule({
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
          { workAsyncStorage: c, workUnitAsyncStorage: l, serverHooks: m } = d
        function v() {
          return (0, i.patchFetch)({ workAsyncStorage: c, workUnitAsyncStorage: l })
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
    s = t.X(0, [7920, 9748], () => r(16098))
  module.exports = s
})()
