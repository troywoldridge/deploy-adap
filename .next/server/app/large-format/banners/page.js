;(() => {
  var e = {}
  ;(e.id = 9670),
    (e.ids = [9670]),
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
      44050: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => l })
        var s = t(21396)
        t(88525)
        var n = t(77175),
          a = t.n(n),
          o = t(9203)
        let i = [
            {
              label: '13oz-matte',
              href: '/large-format/banners/13oz-matte',
              src: 'https://d12ufawtd6351k.cloudfront.net/vinyl-banner-2.webp',
              alt: '13oz matte banners',
              description: '13oz matte banners.',
            },
            {
              label: '13oz-glossy',
              href: '/large-format/banners/13oz-gloss',
              src: 'https://d12ufawtd6351k.cloudfront.net/vinyl-banner-1.webp',
              alt: '13oz-glossy banners',
              description: 'gloss Vinyl banners offering extra durability for outdoor signage.',
            },
            {
              label: '8oz-mesh',
              href: '/large-format/banners/mesh',
              src: 'https://d12ufawtd6351k.cloudfront.net/mesh-banner.webp',
              alt: '8oz mesh banners',
              description: '8mm banners for robust signage solutions with enhanced stiffness.',
            },
          ],
          l = () =>
            (0, s.jsxs)('div', {
              className: 'container py-8',
              children: [
                (0, s.jsx)('h1', { className: 'mb-4 text-center', children: 'banners' }),
                (0, s.jsx)('div', {
                  className: 'row row-cols-1 row-cols-md-2 g-4',
                  children: i.map((e, r) =>
                    (0, s.jsx)(
                      'div',
                      {
                        className: 'col',
                        children: (0, s.jsxs)('div', {
                          className: 'card h-100 text-center',
                          children: [
                            (0, s.jsx)('div', {
                              className: 'd-flex align-items-center justify-content-center',
                              style: { height: '200px', overflow: 'hidden' },
                              children: (0, s.jsx)(o.default, {
                                src: e.src,
                                alt: e.alt,
                                width: 200,
                                height: 200,
                                style: { objectFit: 'contain' },
                              }),
                            }),
                            (0, s.jsxs)('div', {
                              className: 'card-body',
                              children: [
                                (0, s.jsx)('h5', { className: 'card-title', children: e.label }),
                                (0, s.jsx)('p', {
                                  className: 'card-text',
                                  children: e.description,
                                }),
                              ],
                            }),
                            (0, s.jsx)('div', {
                              className: 'card-footer bg-white border-0',
                              children: (0, s.jsxs)(a(), {
                                href: e.href,
                                className: 'btn btn-primary',
                                children: ['Browse ', e.label],
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
      79551: (e) => {
        'use strict'
        e.exports = require('url')
      },
      81630: (e) => {
        'use strict'
        e.exports = require('http')
      },
      93546: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            GlobalError: () => o.a,
            __next_app__: () => p,
            pages: () => c,
            routeModule: () => u,
            tree: () => d,
          })
        var s = t(11892),
          n = t(12875),
          a = t(75043),
          o = t.n(a),
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
                  'large-format',
                  {
                    children: [
                      'banners',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(t.bind(t, 44050)),
                              '/var/www/deploy-adap/src/app/large-format/banners/page.tsx',
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
          c = ['/var/www/deploy-adap/src/app/large-format/banners/page.tsx'],
          p = { require: t, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: n.RouteKind.APP_PAGE,
              page: '/large-format/banners/page',
              pathname: '/large-format/banners',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: d },
          })
      },
    })
  var r = require('../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [1978, 1813, 9203, 3245], () => t(93546))
  module.exports = s
})()
