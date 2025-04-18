;(() => {
  var e = {}
  ;(e.id = 8580),
    (e.ids = [8580]),
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
      55511: (e) => {
        'use strict'
        e.exports = require('crypto')
      },
      55591: (e) => {
        'use strict'
        e.exports = require('https')
      },
      56752: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => o })
        var a = t(21396)
        t(88525)
        var s = t(77175),
          n = t.n(s),
          l = t(9203)
        let i = [
            {
              label: 'Standard',
              href: '/large-format/pull-up-banners/standard',
              src: 'https://d12ufawtd6351k.cloudfront.net/standard_pull_up-banner.jpg',
              alt: '13oz matte banner',
              description: 'A durable 13oz matte banner for everyday indoor/outdoor use.',
            },
            {
              label: 'Premium',
              href: '/large-format/pull-up-banners/premium',
              src: 'https://d12ufawtd6351k.cloudfront.net/premium-regular-pull-up.png',
              alt: '13oz glossy banner',
              description: 'A glossy vinyl banner offering extra durability for outdoor signage.',
            },
            {
              label: 'Table-Top',
              href: '/large-format/pull-up-banners/table-top',
              src: 'https://d12ufawtd6351k.cloudfront.net/table-top-banner.png',
              alt: 'table-top banner',
              description: 'A compact tabletop banner, perfect for smaller displays and events.',
            },
            {
              label: 'Wide Premium',
              href: '/large-format/pull-up-banners/wide-premium',
              src: 'https://d12ufawtd6351k.cloudfront.net/premium-wide-banner.png',
              alt: 'wide premium banner',
              description: 'A wider premium banner for robust signage with enhanced stiffness.',
            },
            {
              label: 'Double-Sided',
              href: '/large-format/pull-up-banners/double-sided',
              src: 'https://d12ufawtd6351k.cloudfront.net/double-sided-banner.png',
              alt: 'double-sided banner',
              description: 'A double-sided banner for maximum visibility in high-traffic areas.',
            },
            {
              label: 'X-Frame',
              href: '/large-format/pull-up-banners/x-frame',
              src: 'https://d12ufawtd6351k.cloudfront.net/x-frame-1.jpg',
              alt: 'x-frame banner',
              description: 'An X-frame banner stand designed for easy setup and portability.',
            },
          ],
          o = () =>
            (0, a.jsxs)('div', {
              className: 'container py-8',
              style: { maxWidth: '1200px' },
              children: [
                (0, a.jsx)('h1', { className: 'mb-4 text-center', children: 'Pull Up Banners' }),
                (0, a.jsx)('div', {
                  className: 'row row-cols-1 row-cols-md-3 g-4',
                  children: i.map((e, r) =>
                    (0, a.jsx)(
                      'div',
                      {
                        className: 'col',
                        children: (0, a.jsxs)('div', {
                          className: 'card h-100 text-center',
                          children: [
                            (0, a.jsx)('div', {
                              className: 'd-flex align-items-center justify-content-center',
                              style: { height: '200px', overflow: 'hidden' },
                              children: (0, a.jsx)(l.default, {
                                src: e.src,
                                alt: e.alt,
                                width: 200,
                                height: 200,
                                style: { objectFit: 'contain' },
                              }),
                            }),
                            (0, a.jsxs)('div', {
                              className: 'card-body',
                              children: [
                                (0, a.jsx)('h5', { className: 'card-title', children: e.label }),
                                (0, a.jsx)('p', {
                                  className: 'card-text',
                                  children: e.description,
                                }),
                              ],
                            }),
                            (0, a.jsx)('div', {
                              className: 'card-footer bg-white border-0',
                              children: (0, a.jsxs)(n(), {
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
      85646: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            GlobalError: () => l.a,
            __next_app__: () => u,
            pages: () => p,
            routeModule: () => c,
            tree: () => d,
          })
        var a = t(11892),
          s = t(12875),
          n = t(75043),
          l = t.n(n),
          i = t(28188),
          o = {}
        for (let e in i)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (o[e] = () => i[e])
        t.d(r, o)
        let d = {
            children: [
              '',
              {
                children: [
                  'large-format',
                  {
                    children: [
                      'pull-up-banners',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(t.bind(t, 56752)),
                              '/var/www/deploy-adap/src/app/large-format/pull-up-banners/page.tsx',
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
          p = ['/var/www/deploy-adap/src/app/large-format/pull-up-banners/page.tsx'],
          u = { require: t, loadChunk: () => Promise.resolve() },
          c = new a.AppPageRouteModule({
            definition: {
              kind: s.RouteKind.APP_PAGE,
              page: '/large-format/pull-up-banners/page',
              pathname: '/large-format/pull-up-banners',
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
    a = r.X(0, [7920, 1813, 9203, 3245], () => t(85646))
  module.exports = a
})()
