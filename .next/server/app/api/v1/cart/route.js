;(() => {
  var e = {}
  ;(e.id = 7950),
    (e.ids = [7950]),
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
      77719: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            patchFetch: () => R,
            routeModule: () => j,
            serverHooks: () => h,
            workAsyncStorage: () => f,
            workUnitAsyncStorage: () => y,
          })
        var s = {}
        t.r(s), t.d(s, { DELETE: () => v, GET: () => x, POST: () => m, PUT: () => w })
        var n = t(74098),
          a = t(12875),
          o = t(71978),
          i = t(17811),
          u = t(74554)
        async function c(e, r) {
          try {
            if (r.id) {
              let e = await u.z.cartItem.findUnique({ where: { id: r.id } })
              if (!e)
                return i.NextResponse.json({ message: 'Cart item not found' }, { status: 404 })
              return i.NextResponse.json(e)
            }
            let e = await u.z.cartItem.findMany()
            return i.NextResponse.json(e)
          } catch (e) {
            return (
              console.error(e),
              i.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        async function p(e) {
          try {
            let r = await e.json(),
              t = await u.z.cartItem.create({ data: r })
            return i.NextResponse.json(t, { status: 201 })
          } catch (e) {
            return (
              console.error(e),
              i.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        async function d(e) {
          try {
            let { id: r } = await e.json(),
              t = await e.json(),
              s = await u.z.cartItem.update({ where: { id: r }, data: t })
            return i.NextResponse.json(s)
          } catch (e) {
            return (
              console.error(e),
              i.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        async function l(e) {
          try {
            let r = e.nextUrl.searchParams.get('id')
            if (!r) return i.NextResponse.json({ error: 'ID is required' }, { status: 400 })
            return (
              await u.z.cartItem.delete({ where: { id: r } }),
              i.NextResponse.json({ message: `Deleted cart item ${r}` })
            )
          } catch (e) {
            return (
              console.error(e),
              i.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        async function x(e) {
          let { searchParams: r } = new URL(e.url)
          r.get('id')
          let t = e.url.split('/')
          return c(e, { id: t[t.length - 1] })
        }
        async function m(e) {
          return p(e)
        }
        async function w(e) {
          return d(e)
        }
        async function v(e) {
          return l(e)
        }
        let j = new n.AppRouteRouteModule({
            definition: {
              kind: a.RouteKind.APP_ROUTE,
              page: '/api/v1/cart/route',
              pathname: '/api/v1/cart',
              filename: 'route',
              bundlePath: 'app/api/v1/cart/route',
            },
            resolvedPagePath: '/var/www/deploy-adap/src/app/api/v1/cart/route.ts',
            nextConfigOutput: 'standalone',
            userland: s,
          }),
          { workAsyncStorage: f, workUnitAsyncStorage: y, serverHooks: h } = j
        function R() {
          return (0, o.patchFetch)({ workAsyncStorage: f, workUnitAsyncStorage: y })
        }
      },
    })
  var r = require('../../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [7920, 9748], () => t(77719))
  module.exports = s
})()
