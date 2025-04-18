;(() => {
  var e = {}
  ;(e.id = 5172),
    (e.ids = [5172]),
    (e.modules = {
      3295: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      10846: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      14976: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 26052))
      },
      19121: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/action-async-storage.external.js')
      },
      21236: (e, t, r) => {
        'use strict'
        r.r(t),
          r.d(t, {
            GlobalError: () => o.a,
            __next_app__: () => c,
            pages: () => p,
            routeModule: () => u,
            tree: () => d,
          })
        var s = r(11892),
          a = r(12875),
          n = r(75043),
          o = r.n(n),
          l = r(28188),
          i = {}
        for (let e in l)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (i[e] = () => l[e])
        r.d(t, i)
        let d = {
            children: [
              '',
              {
                children: [
                  'apparel',
                  {
                    children: [
                      '__PAGE__',
                      {},
                      {
                        page: [
                          () => Promise.resolve().then(r.bind(r, 91678)),
                          '/var/www/deploy-adap/src/app/apparel/page.tsx',
                        ],
                      },
                    ],
                  },
                  {},
                ],
              },
              {
                layout: [
                  () => Promise.resolve().then(r.bind(r, 95597)),
                  '/var/www/deploy-adap/src/app/layout.tsx',
                ],
                'not-found': [
                  () => Promise.resolve().then(r.t.bind(r, 55745, 23)),
                  'next/dist/client/components/not-found-error',
                ],
                forbidden: [
                  () => Promise.resolve().then(r.t.bind(r, 33596, 23)),
                  'next/dist/client/components/forbidden-error',
                ],
                unauthorized: [
                  () => Promise.resolve().then(r.t.bind(r, 21869, 23)),
                  'next/dist/client/components/unauthorized-error',
                ],
              },
            ],
          }.children,
          p = ['/var/www/deploy-adap/src/app/apparel/page.tsx'],
          c = { require: r, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: '/apparel/page',
              pathname: '/apparel',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: d },
          })
      },
      26052: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => n })
        var s = r(24518),
          a = r(76615)
        let n = () => {
          let e = () => {
              let e = new Date('2025-05-01T00:00:00').getTime() - new Date().getTime()
              return {
                days: Math.floor(e / 864e5),
                hours: Math.floor((e / 36e5) % 24),
                minutes: Math.floor((e / 6e4) % 60),
                seconds: Math.floor((e / 1e3) % 60),
              }
            },
            [t, r] = (0, a.useState)(e())
          return (
            (0, a.useEffect)(() => {
              let t = setInterval(() => {
                r(e())
              }, 1e3)
              return () => clearInterval(t)
            }, []),
            (0, s.jsxs)('div', {
              className:
                'flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-6',
              children: [
                (0, s.jsx)('h1', { className: 'text-5xl font-bold mb-4', children: 'Coming Soon' }),
                (0, s.jsx)('p', {
                  className: 'text-lg mb-6',
                  children: "We're working on something amazing. Stay tuned!",
                }),
                (0, s.jsxs)('div', {
                  className: 'flex space-x-4 text-2xl font-semibold',
                  children: [
                    (0, s.jsxs)('div', {
                      className: 'p-4 bg-white text-black rounded-lg',
                      children: [
                        t.days,
                        ' ',
                        (0, s.jsx)('span', { className: 'text-sm block', children: 'Days' }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'p-4 bg-white text-black rounded-lg',
                      children: [
                        t.hours,
                        ' ',
                        (0, s.jsx)('span', { className: 'text-sm block', children: 'Hours' }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'p-4 bg-white text-black rounded-lg',
                      children: [
                        t.minutes,
                        ' ',
                        (0, s.jsx)('span', { className: 'text-sm block', children: 'Minutes' }),
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'p-4 bg-white text-black rounded-lg',
                      children: [
                        t.seconds,
                        ' ',
                        (0, s.jsx)('span', { className: 'text-sm block', children: 'Seconds' }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)('p', { className: 'mt-6', children: 'Follow us for updates!' }),
                (0, s.jsxs)('div', {
                  className: 'flex space-x-4 mt-3',
                  children: [
                    (0, s.jsx)('a', {
                      href: '#',
                      className: 'text-xl hover:opacity-80 transition',
                      children: '\uD83D\uDE80 Twitter',
                    }),
                    (0, s.jsx)('a', {
                      href: '#',
                      className: 'text-xl hover:opacity-80 transition',
                      children: '\uD83D\uDCD8 Facebook',
                    }),
                    (0, s.jsx)('a', {
                      href: '#',
                      className: 'text-xl hover:opacity-80 transition',
                      children: '\uD83D\uDCF8 Instagram',
                    }),
                  ],
                }),
              ],
            })
          )
        }
      },
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
      33873: (e) => {
        'use strict'
        e.exports = require('path')
      },
      51424: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 91678))
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
      91678: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => s })
        let s = (0, r(56968).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/var/www/deploy-adap/src/app/apparel/page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            )
          },
          '/var/www/deploy-adap/src/app/apparel/page.tsx',
          'default'
        )
      },
    })
  var t = require('../../webpack-runtime.js')
  t.C(e)
  var r = (e) => t((t.s = e)),
    s = t.X(0, [1978, 1813, 3245], () => r(21236))
  module.exports = s
})()
