;(() => {
  var e = {}
  ;(e.id = 6983),
    (e.ids = [6983]),
    (e.modules = {
      3295: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      10846: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      14406: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            GlobalError: () => a.a,
            __next_app__: () => c,
            pages: () => p,
            routeModule: () => u,
            tree: () => i,
          })
        var s = t(11892),
          o = t(12875),
          n = t(75043),
          a = t.n(n),
          d = t(28188),
          l = {}
        for (let e in d)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (l[e] = () => d[e])
        t.d(r, l)
        let i = {
            children: [
              '',
              {
                children: [
                  'print-products',
                  {
                    children: [
                      'door-hangers',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(t.bind(t, 97701)),
                              '/var/www/deploy-adap/src/app/print-products/door-hangers/page.tsx',
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
          p = ['/var/www/deploy-adap/src/app/print-products/door-hangers/page.tsx'],
          c = { require: t, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: o.RouteKind.APP_PAGE,
              page: '/print-products/door-hangers/page',
              pathname: '/print-products/door-hangers',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: i },
          })
      },
      19121: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/action-async-storage.external.js')
      },
      23120: (e, r, t) => {
        Promise.resolve().then(t.t.bind(t, 77175, 23)),
          Promise.resolve().then(t.t.bind(t, 68474, 23))
      },
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
      32848: (e, r, t) => {
        Promise.resolve().then(t.t.bind(t, 53309, 23)),
          Promise.resolve().then(t.t.bind(t, 13484, 23))
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
      79551: (e) => {
        'use strict'
        e.exports = require('url')
      },
      81630: (e) => {
        'use strict'
        e.exports = require('http')
      },
      97701: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => l })
        var s = t(21396)
        t(88525)
        var o = t(77175),
          n = t.n(o),
          a = t(9203)
        let d = [
            {
              label: 'Door Hangers',
              href: '/print-products/door-hangers',
              src: 'https://d12ufawtd6351k.cloudfront.net/door-hanger.jpg',
              alt: 'Door Hangers',
              sublinks: [
                {
                  label: 'AQ Door Hangers',
                  href: '/print-products/door-hangers/14pt-aq-dh',
                  src: 'https://d12ufawtd6351k.cloudfront.net/14pt-aq-dh.jpg',
                  alt: '14pt AQ Door Hangers',
                },
                {
                  label: '14pt UV (High Gloss)',
                  href: '/print-products/door-hangers/14pt-uv-dh',
                  src: 'https://d12ufawtd6351k.cloudfront.net/14pt-uv-dh.jpg',
                  alt: '14pt UV Door Hangers',
                },
                {
                  label: '14pt Matte',
                  href: '/print-products/door-hangers/14pt-matte-dh',
                  src: 'https://d12ufawtd6351k.cloudfront.net/14pt-matte-dh',
                  alt: '14pt Matte Door Hangers',
                },
                {
                  label: '13pt Enviro Uncoated',
                  href: '/print-products/door-hangers/13pt-enviro-dh',
                  src: 'https://d12ufawtd6351k.cloudfront.net/13pt-enviro-dh.jpg',
                  alt: '13pt Enviro Door Hangers',
                },
              ],
            },
          ],
          l = () => {
            console.log('DoorHangersPage loaded successfully')
            let e = (r) =>
              (0, s.jsx)('ul', {
                className: 'ml-6 border-l border-gray-300 pl-4',
                children: r.map((r, t) =>
                  (0, s.jsxs)(
                    'li',
                    {
                      className: 'mb-4',
                      children: [
                        (0, s.jsx)(n(), {
                          href: r.href,
                          children: (0, s.jsxs)('div', {
                            className:
                              'flex items-start gap-4 hover:bg-gray-100 p-2 rounded-lg transition',
                            children: [
                              (0, s.jsx)(a.default, {
                                src: r.src,
                                alt: r.alt,
                                width: 164,
                                height: 164,
                                className: 'w-16 h-16 object-cover rounded',
                              }),
                              (0, s.jsx)('span', {
                                className: 'font-medium text-lg',
                                children: r.label,
                              }),
                            ],
                          }),
                        }),
                        r.sublinks && e(r.sublinks),
                      ],
                    },
                    t
                  )
                ),
              })
            return (0, s.jsxs)('div', {
              className: 'container mx-auto px-6 py-8',
              children: [
                (0, s.jsx)('h1', {
                  className: 'text-4xl font-bold mb-6 text-center',
                  children: 'Door Hangers',
                }),
                (0, s.jsx)('p', {
                  className: 'mb-8 text-center text-lg text-gray-700',
                  children:
                    'Door Hangers are highly effective marketing tools that are immediately noticed when opening the door.',
                }),
                (0, s.jsx)('div', {
                  className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
                  children: d.map((r, t) =>
                    (0, s.jsxs)(
                      'div',
                      {
                        className: 'border rounded-lg shadow-lg p-4',
                        children: [
                          (0, s.jsx)(n(), {
                            href: r.href,
                            children: (0, s.jsxs)('div', {
                              className: 'cursor-pointer',
                              children: [
                                (0, s.jsx)(a.default, {
                                  src: r.src,
                                  alt: r.alt,
                                  width: 164,
                                  height: 164,
                                  className: 'w-full h-40 object-cover rounded-lg mb-4',
                                }),
                                (0, s.jsx)('h2', {
                                  className: 'text-xl font-semibold text-center mb-2',
                                  children: r.label,
                                }),
                              ],
                            }),
                          }),
                          r.sublinks && e(r.sublinks),
                        ],
                      },
                      t
                    )
                  ),
                }),
              ],
            })
          }
      },
    })
  var r = require('../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [7920, 1813, 9203, 3245], () => t(14406))
  module.exports = s
})()
