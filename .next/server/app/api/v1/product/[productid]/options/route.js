;(() => {
  var e = {}
  ;(e.id = 4803),
    (e.ids = [4803]),
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
      34016: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            patchFetch: () => g,
            routeModule: () => l,
            serverHooks: () => y,
            workAsyncStorage: () => x,
            workUnitAsyncStorage: () => v,
          })
        var s = {}
        t.r(s), t.d(s, { DELETE: () => d, GET: () => u, POST: () => i, PUT: () => c })
        var o = t(74098),
          n = t(12875),
          a = t(71978),
          p = t(17811)
        async function u(e, r) {
          let { id: t } = r.params
          try {
            return p.NextResponse.json({ message: `GET category ${t}` })
          } catch (e) {
            return (
              console.error(e),
              p.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        async function i() {
          try {
            return p.NextResponse.json({ message: 'POST OK' })
          } catch (e) {
            return (
              console.error(e),
              p.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        async function c() {
          try {
            return p.NextResponse.json({ message: 'PUT OK' })
          } catch (e) {
            return (
              console.error(e),
              p.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        async function d() {
          try {
            return p.NextResponse.json({ message: 'DELETE OK' })
          } catch (e) {
            return (
              console.error(e),
              p.NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
            )
          }
        }
        let l = new o.AppRouteRouteModule({
            definition: {
              kind: n.RouteKind.APP_ROUTE,
              page: '/api/v1/product/[productid]/options/route',
              pathname: '/api/v1/product/[productid]/options',
              filename: 'route',
              bundlePath: 'app/api/v1/product/[productid]/options/route',
            },
            resolvedPagePath:
              '/var/www/deploy-adap/src/app/api/v1/product/[productid]/options/route.ts',
            nextConfigOutput: 'standalone',
            userland: s,
          }),
          { workAsyncStorage: x, workUnitAsyncStorage: v, serverHooks: y } = l
        function g() {
          return (0, a.patchFetch)({ workAsyncStorage: x, workUnitAsyncStorage: v })
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
  var r = require('../../../../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [7920, 9748], () => t(34016))
  module.exports = s
})()
