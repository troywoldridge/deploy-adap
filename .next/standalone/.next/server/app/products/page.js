;(() => {
  var e = {}
  ;(e.id = 3571),
    (e.ids = [3571]),
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
      33873: (e) => {
        'use strict'
        e.exports = require('path')
      },
      37769: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => a })
        var s = t(24518),
          o = t(76615)
        function a() {
          let [e, r] = (0, o.useState)([]),
            [t, a] = (0, o.useState)(!0),
            [n, i] = (0, o.useState)(null),
            [d, p] = (0, o.useState)(1),
            [l, u] = (0, o.useState)(1),
            [c, x] = (0, o.useState)(''),
            [h, v] = (0, o.useState)(c),
            m = async (e = d, t = 10, s = h) => {
              try {
                let o = await fetch(`/api/products?page=${e}&limit=${t}&search=${s}`)
                if (!o.ok) throw Error('Failed to fetch products')
                let a = await o.json()
                r(a.products), u(a.totalPages), p(a.page)
              } catch (e) {
                i(e instanceof Error ? e.message : 'An unknown error occurred')
              } finally {
                a(!1)
              }
            },
            f = (e) => {
              e > 0 && e <= l && (a(!0), p(e), m(e))
            }
          return t
            ? (0, s.jsx)('div', { children: 'Loading...' })
            : n
              ? (0, s.jsxs)('div', { children: ['Error: ', n] })
              : (0, s.jsxs)('div', {
                  children: [
                    (0, s.jsx)('h1', { children: 'Products' }),
                    (0, s.jsx)('input', {
                      type: 'text',
                      value: c,
                      onChange: (e) => {
                        x(e.target.value), a(!0), p(1)
                      },
                      placeholder: 'Search products...',
                      className: 'border p-2 mb-4',
                    }),
                    (0, s.jsx)('ul', {
                      children: e.map((e) =>
                        (0, s.jsxs)(
                          'li',
                          {
                            children: [
                              (0, s.jsx)('h2', { children: e.name }),
                              (0, s.jsx)('p', { children: e.description }),
                              (0, s.jsxs)('p', { children: ['$', e.price] }),
                            ],
                          },
                          e.id
                        )
                      ),
                    }),
                    (0, s.jsxs)('div', {
                      className: 'pagination',
                      children: [
                        (0, s.jsx)('button', {
                          onClick: () => f(d - 1),
                          disabled: 1 === d,
                          'aria-label': 'Previous Page',
                          children: 'Previous',
                        }),
                        (0, s.jsxs)('span', { children: ['Page ', d, ' of ', l] }),
                        (0, s.jsx)('button', {
                          onClick: () => f(d + 1),
                          disabled: d === l,
                          'aria-label': 'Next Page',
                          children: 'Next',
                        }),
                      ],
                    }),
                  ],
                })
        }
      },
      47519: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 52083))
      },
      52083: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => s })
        let s = (0, t(56968).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/var/www/deploy-adap/src/app/products/page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            )
          },
          '/var/www/deploy-adap/src/app/products/page.tsx',
          'default'
        )
      },
      55072: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            GlobalError: () => n.a,
            __next_app__: () => u,
            pages: () => l,
            routeModule: () => c,
            tree: () => p,
          })
        var s = t(11892),
          o = t(12875),
          a = t(75043),
          n = t.n(a),
          i = t(28188),
          d = {}
        for (let e in i)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (d[e] = () => i[e])
        t.d(r, d)
        let p = {
            children: [
              '',
              {
                children: [
                  'products',
                  {
                    children: [
                      '__PAGE__',
                      {},
                      {
                        page: [
                          () => Promise.resolve().then(t.bind(t, 52083)),
                          '/var/www/deploy-adap/src/app/products/page.tsx',
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
          l = ['/var/www/deploy-adap/src/app/products/page.tsx'],
          u = { require: t, loadChunk: () => Promise.resolve() },
          c = new s.AppPageRouteModule({
            definition: {
              kind: o.RouteKind.APP_PAGE,
              page: '/products/page',
              pathname: '/products',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: p },
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
      63033: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-unit-async-storage.external.js')
      },
      79551: (e) => {
        'use strict'
        e.exports = require('url')
      },
      81630: (e) => {
        'use strict'
        e.exports = require('http')
      },
      84471: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 37769))
      },
    })
  var r = require('../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [1978, 1813, 3245], () => t(55072))
  module.exports = s
})()
