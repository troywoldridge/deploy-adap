;(() => {
  var e = {}
  ;(e.id = 8407),
    (e.ids = [8407]),
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
      24653: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 97825))
      },
      26861: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 95679))
      },
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
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
      78504: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            GlobalError: () => a.a,
            __next_app__: () => p,
            pages: () => c,
            routeModule: () => u,
            tree: () => d,
          })
        var s = t(11892),
          o = t(12875),
          n = t(75043),
          a = t.n(n),
          i = t(28188),
          l = {}
        for (let e in i)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (l[e] = () => i[e])
        t.d(r, l)
        let d = {
            children: [
              '',
              {
                children: [
                  'print-products',
                  {
                    children: [
                      'brochures',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(t.bind(t, 95679)),
                              '/var/www/deploy-adap/src/app/print-products/brochures/page.tsx',
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
          c = ['/var/www/deploy-adap/src/app/print-products/brochures/page.tsx'],
          p = { require: t, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: o.RouteKind.APP_PAGE,
              page: '/print-products/brochures/page',
              pathname: '/print-products/brochures',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: d },
          })
      },
      79551: (e) => {
        'use strict'
        e.exports = require('url')
      },
      81630: (e) => {
        'use strict'
        e.exports = require('http')
      },
      95679: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => s })
        let s = (0, t(56968).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/var/www/deploy-adap/src/app/print-products/brochures/page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            )
          },
          '/var/www/deploy-adap/src/app/print-products/brochures/page.tsx',
          'default'
        )
      },
      97825: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => l })
        var s = t(24518)
        t(76615)
        var o = t(53309),
          n = t.n(o),
          a = t(79797)
        let i = [
            {
              label: '100lb Gloss Text',
              href: '/print-products/brochures/gloss',
              src: 'https://d12ufawtd6351k.cloudfront.net/brochure-1.png',
              alt: '100lb Gloss Text Brochures',
            },
            {
              label: '100lb Matte Finish',
              href: '/print-products/brochures/matte',
              src: 'https://d12ufawtd6351k.cloudfront.net/brochure-4.png',
              alt: '100lb Matte Finish Brochures',
            },
            {
              label: '100lb UV',
              href: '/print-products/brochures/uv',
              src: 'https://d12ufawtd6351k.cloudfront.net/brochure-3.png',
              alt: '100lb UV Brochures',
            },
            {
              label: '80lb Enviro Uncoated',
              href: '/print-products/brochures/enviro',
              src: 'https://d12ufawtd6351k.cloudfront.net/brochure-2.png',
              alt: '80lb Enviro Uncoated Brochures',
            },
          ],
          l = () =>
            (0, s.jsxs)('div', {
              className: 'container mx-16 p-12',
              children: [
                (0, s.jsx)('h1', {
                  className: 'text-6xl font-bold mb-6 text-center',
                  children: 'Brochures',
                }),
                (0, s.jsx)('p', {
                  className: 'mb-4 text-2xl text-center',
                  children:
                    'Explore our range of high-quality brochures, available in a variety of finishes and styles.',
                }),
                (0, s.jsx)('div', {
                  className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
                  children: i.map((e, r) =>
                    (0, s.jsx)(
                      n(),
                      {
                        href: e.href,
                        children: (0, s.jsxs)('div', {
                          className:
                            'border rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer',
                          children: [
                            (0, s.jsx)('div', {
                              className: 'relative w-full h-80',
                              children: (0, s.jsx)(a.default, {
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
    })
  var r = require('../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [1978, 1813, 3245], () => t(78504))
  module.exports = s
})()
