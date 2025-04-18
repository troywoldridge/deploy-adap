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
            patchFetch: () => y,
            routeModule: () => v,
            serverHooks: () => j,
            workAsyncStorage: () => x,
            workUnitAsyncStorage: () => l,
          })
        var s = {}
        t.r(s), t.d(s, { DELETE: () => d, GET: () => p, POST: () => i, PUT: () => c })
        var n = t(74098),
          o = t(12875),
          a = t(71978),
          u = t(17811)
        async function p() {
          try {
            return u.NextResponse.json({ message: 'GET OK' })
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
          { workAsyncStorage: x, workUnitAsyncStorage: l, serverHooks: j } = v
        function y() {
          return (0, a.patchFetch)({ workAsyncStorage: x, workUnitAsyncStorage: l })
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
    })
  var r = require('../../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [1978, 9748], () => t(32755))
  module.exports = s
})()
