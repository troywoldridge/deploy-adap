;(() => {
  var e = {}
  ;(e.id = 1416),
    (e.ids = [1416]),
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
      19070: () => {},
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
      32755: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            patchFetch: () => m,
            routeModule: () => v,
            serverHooks: () => j,
            workAsyncStorage: () => x,
            workUnitAsyncStorage: () => w,
          })
        var s = {}
        t.r(s), t.d(s, { DELETE: () => l, GET: () => p, POST: () => c, PUT: () => d })
        var n = t(74098),
          o = t(12875),
          a = t(71978),
          i = t(17811),
          u = t(74554)
        async function p(e) {
          try {
            let { searchParams: r } = new URL(e.url),
              t = r.get('productId'),
              s = await u.z.review.findMany({
                where: t ? { productId: parseInt(t, 10) } : void 0,
                include: { user: { select: { id: !0, name: !0 } } },
              })
            return i.NextResponse.json(s)
          } catch (e) {
            return (
              console.error(e),
              i.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        async function c(e) {
          try {
            let r = await e.json(),
              t = await u.z.review.create({ data: { ...r, userId: r.userId ?? '' } })
            return i.NextResponse.json(t, { status: 201 })
          } catch (e) {
            return (
              console.error(e),
              i.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        async function d() {
          try {
            return i.NextResponse.json({ message: 'PUT OK' })
          } catch (e) {
            return (
              console.error(e),
              i.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        async function l() {
          try {
            return i.NextResponse.json({ message: 'DELETE OK' })
          } catch (e) {
            return (
              console.error(e),
              i.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        let v = new n.AppRouteRouteModule({
            definition: {
              kind: o.RouteKind.APP_ROUTE,
              page: '/api/v1/review/route',
              pathname: '/api/v1/review',
              filename: 'route',
              bundlePath: 'app/api/v1/review/route',
            },
            resolvedPagePath: '/var/www/deploy-adap/src/app/api/v1/review/route.ts',
            nextConfigOutput: 'standalone',
            userland: s,
          }),
          { workAsyncStorage: x, workUnitAsyncStorage: w, serverHooks: j } = v
        function m() {
          return (0, a.patchFetch)({ workAsyncStorage: x, workUnitAsyncStorage: w })
        }
      },
      44870: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-route.runtime.prod.js')
      },
      63033: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-unit-async-storage.external.js')
      },
      74554: (e, r, t) => {
        'use strict'
        t.d(r, { z: () => n })
        let s = require('@prisma/client'),
          n = global.prisma || new s.PrismaClient()
      },
    })
  var r = require('../../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [7920, 9748], () => t(32755))
  module.exports = s
})()
