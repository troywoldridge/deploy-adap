;(() => {
  var e = {}
  ;(e.id = 3881),
    (e.ids = [3881]),
    (e.modules = {
      473: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            patchFetch: () => m,
            routeModule: () => l,
            serverHooks: () => j,
            workAsyncStorage: () => x,
            workUnitAsyncStorage: () => v,
          })
        var s = {}
        t.r(s), t.d(s, { DELETE: () => d, GET: () => p, POST: () => i, PUT: () => c })
        var n = t(74098),
          o = t(12875),
          a = t(71978),
          u = t(17811)
        async function p(e) {
          try {
            return u.NextResponse.json({ message: 'GET all cart items' })
          } catch (e) {
            return (
              console.error(e),
              u.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        async function i() {
          try {
            return u.NextResponse.json({ message: 'POST OK' })
          } catch (e) {
            return (
              console.error(e),
              u.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        async function c() {
          try {
            return u.NextResponse.json({ message: 'PUT OK' })
          } catch (e) {
            return (
              console.error(e),
              u.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        async function d() {
          try {
            return u.NextResponse.json({ message: 'DELETE OK' })
          } catch (e) {
            return (
              console.error(e),
              u.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        let l = new n.AppRouteRouteModule({
            definition: {
              kind: o.RouteKind.APP_ROUTE,
              page: '/api/v1/leaderboard/route',
              pathname: '/api/v1/leaderboard',
              filename: 'route',
              bundlePath: 'app/api/v1/leaderboard/route',
            },
            resolvedPagePath: '/var/www/deploy-adap/src/app/api/v1/leaderboard/route.ts',
            nextConfigOutput: 'standalone',
            userland: s,
          }),
          { workAsyncStorage: x, workUnitAsyncStorage: v, serverHooks: j } = l
        function m() {
          return (0, a.patchFetch)({ workAsyncStorage: x, workUnitAsyncStorage: v })
        }
      },
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
    })
  var r = require('../../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [7920, 9748], () => t(473))
  module.exports = s
})()
