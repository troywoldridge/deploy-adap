;(() => {
  var e = {}
  ;(e.id = 3061),
    (e.ids = [3061]),
    (e.modules = {
      3295: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      10846: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      16720: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            GlobalError: () => d.a,
            __next_app__: () => c,
            pages: () => p,
            routeModule: () => u,
            tree: () => i,
          })
        var s = t(11892),
          a = t(12875),
          n = t(75043),
          d = t.n(n),
          l = t(28188),
          o = {}
        for (let e in l)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (o[e] = () => l[e])
        t.d(r, o)
        let i = {
            children: [
              '',
              {
                children: [
                  'print-products',
                  {
                    children: [
                      'calendars',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(t.bind(t, 96009)),
                              '/var/www/deploy-adap/src/app/print-products/calendars/page.tsx',
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
          p = ['/var/www/deploy-adap/src/app/print-products/calendars/page.tsx'],
          c = { require: t, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: '/print-products/calendars/page',
              pathname: '/print-products/calendars',
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
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
      33873: (e) => {
        'use strict'
        e.exports = require('path')
      },
      36851: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => o })
        var s = t(24518)
        t(76615)
        var a = t(53309),
          n = t.n(a),
          d = t(79797)
        let l = [
            {
              label: 'Self-Cover Calendars',
              href: '/print-products/calendars/self-cover',
              src: 'https://d12ufawtd6351k.cloudfront.net/Calendars .png',
              alt: 'Self-Cover Calendars',
            },
            {
              label: 'Hard-Cover Calendars',
              href: '/print-products/calendars/hard-cover',
              src: 'https://d12ufawtd6351k.cloudfront.net/hard-cover-calendars2.webp',
              alt: 'Hard-Cover Calendars',
            },
            {
              label: 'Spiral Calendars',
              href: '/print-products/calendars/spiral',
              src: 'https://d12ufawtd6351k.cloudfront.net/spiral-bind-calendars_1.webp',
              alt: 'Spiral Calendars',
            },
            {
              label: '12 x 12 Calendars',
              href: '/print-products/calendars/12x12',
              src: 'https://d12ufawtd6351k.cloudfront.net/hard-cover-calendars_1.webp',
              alt: '12 x 12 Calendars',
            },
            {
              label: '11 x 8.5 Calendars',
              href: '/print-products/calendars/11x8.5',
              src: 'https://d12ufawtd6351k.cloudfront.net/Calendars .png',
              alt: '11 x 8.5 Calendars',
            },
            {
              label: '9 x 12 Calendars',
              href: '/print-products/calendars/9x12',
              src: 'https://d12ufawtd6351k.cloudfront.net/spiral-bind-calendars2.webp',
              alt: '9 x 12 Calendars',
            },
          ],
          o = () =>
            (0, s.jsxs)('div', {
              className: 'container mx-auto px-6 py-10',
              children: [
                (0, s.jsx)('h1', {
                  className: 'text-4xl font-bold text-center mb-6',
                  children: 'Calendars',
                }),
                (0, s.jsx)('p', {
                  className: 'mb-8 text-center text-lg text-gray-700',
                  children: 'Choose from our range of high-quality calendars to suit your needs.',
                }),
                (0, s.jsx)('div', {
                  className:
                    'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6',
                  children: l.map((e, r) =>
                    (0, s.jsx)(
                      n(),
                      {
                        href: e.href,
                        children: (0, s.jsxs)('div', {
                          className:
                            'border rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer',
                          children: [
                            (0, s.jsx)('div', {
                              className: 'relative w-full h-56',
                              children: (0, s.jsx)(d.default, {
                                src: e.src,
                                alt: e.alt,
                                fill: !0,
                                style: { objectFit: 'cover' },
                                className: 'rounded-t-lg',
                              }),
                            }),
                            (0, s.jsx)('div', {
                              className: 'p-4',
                              children: (0, s.jsx)('h2', {
                                className: 'text-xl font-semibold text-center',
                                children: e.label,
                              }),
                            }),
                          ],
                        }),
                      },
                      r
                    )
                  ),
                }),
              ],
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
      74459: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 96009))
      },
      79551: (e) => {
        'use strict'
        e.exports = require('url')
      },
      81630: (e) => {
        'use strict'
        e.exports = require('http')
      },
      85075: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 36851))
      },
      96009: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => s })
        let s = (0, t(56968).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/var/www/deploy-adap/src/app/print-products/calendars/page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            )
          },
          '/var/www/deploy-adap/src/app/print-products/calendars/page.tsx',
          'default'
        )
      },
    })
  var r = require('../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [7920, 1813, 3245], () => t(16720))
  module.exports = s
})()
