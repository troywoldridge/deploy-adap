;(() => {
  var e = {}
  ;(e.id = 8455),
    (e.ids = [8455]),
    (e.modules = {
      3295: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      10846: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      11730: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            GlobalError: () => i.a,
            __next_app__: () => p,
            pages: () => c,
            routeModule: () => h,
            tree: () => d,
          })
        var s = t(11892),
          o = t(12875),
          a = t(75043),
          i = t.n(a),
          l = t(28188),
          n = {}
        for (let e in l)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (n[e] = () => l[e])
        t.d(r, n)
        let d = {
            children: [
              '',
              {
                children: [
                  'large-format',
                  {
                    children: [
                      'floor-graphics',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(t.bind(t, 96617)),
                              '/var/www/deploy-adap/src/app/large-format/floor-graphics/page.tsx',
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
          c = ['/var/www/deploy-adap/src/app/large-format/floor-graphics/page.tsx'],
          p = { require: t, loadChunk: () => Promise.resolve() },
          h = new s.AppPageRouteModule({
            definition: {
              kind: o.RouteKind.APP_PAGE,
              page: '/large-format/floor-graphics/page',
              pathname: '/large-format/floor-graphics',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: d },
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
      96617: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => n })
        var s = t(21396)
        t(88525)
        var o = t(77175),
          a = t.n(o),
          i = t(9203)
        let l = [
            {
              label: 'Custom',
              href: '/large-format/floor-graphics/custom',
              src: 'https://d12ufawtd6351k.cloudfront.net/floor-graphic.png',
              alt: 'Custom graphics',
              description: 'Custom graphics tailored to your specifications.',
            },
            {
              label: 'Directional',
              href: '/large-format/floor-graphics/directional',
              src: 'https://d12ufawtd6351k.cloudfront.net/floor-graphics-directional.jpg',
              alt: 'Directional floor graphics',
              description: 'Directional floor graphics to guide customers effectively.',
            },
          ],
          n = () =>
            (0, s.jsxs)('div', {
              className: 'container py-8',
              children: [
                (0, s.jsx)('h1', { className: 'mb-4 text-center', children: 'Floor Graphics' }),
                (0, s.jsx)('div', {
                  className: 'row row-cols-1 row-cols-md-2 g-4',
                  children: l.map((e, r) =>
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
                              children: (0, s.jsx)(i.default, {
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
    })
  var r = require('../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [7920, 1813, 9203, 3245], () => t(11730))
  module.exports = s
})()
