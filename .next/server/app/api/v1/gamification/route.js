;(() => {
  var e = {}
  ;(e.id = 6623),
    (e.ids = [6623]),
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
      47152: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            patchFetch: () => g,
            routeModule: () => l,
            serverHooks: () => m,
            workAsyncStorage: () => x,
            workUnitAsyncStorage: () => v,
          })
        var s = {}
        t.r(s), t.d(s, { DELETE: () => d, GET: () => u, POST: () => p, PUT: () => c })
        var n = t(74098),
          o = t(12875),
          a = t(71978),
          i = t(17811)
        async function u(e) {
          try {
            return i.NextResponse.json({ message: 'GET all cart items' })
          } catch (e) {
            return (
              console.error(e),
              i.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        async function p() {
          try {
            return i.NextResponse.json({ message: 'POST OK' })
          } catch (e) {
            return (
              console.error(e),
              i.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        async function c() {
          try {
            return i.NextResponse.json({ message: 'PUT OK' })
          } catch (e) {
            return (
              console.error(e),
              i.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        async function d() {
          try {
            return i.NextResponse.json({ message: 'DELETE OK' })
          } catch (e) {
            return (
              console.error(e),
              i.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        let l = new n.AppRouteRouteModule({
            definition: {
              kind: o.RouteKind.APP_ROUTE,
              page: '/api/v1/gamification/route',
              pathname: '/api/v1/gamification',
              filename: 'route',
              bundlePath: 'app/api/v1/gamification/route',
            },
            resolvedPagePath: '/var/www/deploy-adap/src/app/api/v1/gamification/route.ts',
            nextConfigOutput: 'standalone',
            userland: s,
          }),
          { workAsyncStorage: x, workUnitAsyncStorage: v, serverHooks: m } = l
        function g() {
          return (0, a.patchFetch)({ workAsyncStorage: x, workUnitAsyncStorage: v })
        }
      },
      63033: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-unit-async-storage.external.js')
      },
    })
  var r = require('../../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [7920, 9748], () => t(47152))
  module.exports = s
})()
