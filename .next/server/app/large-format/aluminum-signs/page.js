;(() => {
  var e = {}
  ;(e.id = 6470),
    (e.ids = [6470]),
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
      23120: (e, r, s) => {
        Promise.resolve().then(s.t.bind(s, 77175, 23)),
          Promise.resolve().then(s.t.bind(s, 68474, 23))
      },
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
      32848: (e, r, s) => {
        Promise.resolve().then(s.t.bind(s, 53309, 23)),
          Promise.resolve().then(s.t.bind(s, 13484, 23))
      },
      33873: (e) => {
        'use strict'
        e.exports = require('path')
      },
      42676: (e, r, s) => {
        'use strict'
        s.r(r), s.d(r, { default: () => l })
        var t = s(21396)
        s(88525)
        var i = s(77175),
          a = s.n(i),
          n = s(9203)
        let o = [
            {
              label: 'Aluminum Signs 3mm',
              href: '/large-format/aluminum-signs/3mm-signs',
              src: 'https://d12ufawtd6351k.cloudfront.net/aluminum-signs-1.png',
              alt: 'Aluminum Signs 3mm',
              description: 'Durable 3mm aluminum signs for outdoor or indoor branding.',
            },
            {
              label: 'Aluminum Floor Graphics 20mil',
              href: '/large-format/aluminum-signs/floor-graphics',
              src: 'https://d12ufawtd6351k.cloudfront.net/aluminum-floor-graphics.webp',
              alt: 'Aluminum Floor Graphics 20mil',
              description: 'Sturdy 20mil aluminum floor graphics for high-traffic areas.',
            },
          ],
          l = () =>
            (0, t.jsxs)('div', {
              className: 'container py-8',
              children: [
                (0, t.jsx)('h1', { className: 'mb-4 text-center', children: 'Aluminum Signs' }),
                (0, t.jsx)('div', {
                  className: 'row row-cols-1 row-cols-md-2 g-4',
                  children: o.map((e, r) =>
                    (0, t.jsx)(
                      'div',
                      {
                        className: 'col',
                        children: (0, t.jsxs)('div', {
                          className: 'card h-100 text-center',
                          children: [
                            (0, t.jsx)('div', {
                              className: 'd-flex align-items-center justify-content-center',
                              style: { height: '200px', overflow: 'hidden' },
                              children: (0, t.jsx)(n.default, {
                                src: e.src,
                                alt: e.alt,
                                width: 200,
                                height: 200,
                                style: { objectFit: 'contain' },
                              }),
                            }),
                            (0, t.jsxs)('div', {
                              className: 'card-body',
                              children: [
                                (0, t.jsx)('h5', { className: 'card-title', children: e.label }),
                                (0, t.jsx)('p', {
                                  className: 'card-text',
                                  children: e.description,
                                }),
                              ],
                            }),
                            (0, t.jsx)('div', {
                              className: 'card-footer bg-white border-0',
                              children: (0, t.jsxs)(a(), {
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
      84324: (e, r, s) => {
        'use strict'
        s.r(r),
          s.d(r, {
            GlobalError: () => n.a,
            __next_app__: () => c,
            pages: () => u,
            routeModule: () => m,
            tree: () => d,
          })
        var t = s(11892),
          i = s(12875),
          a = s(75043),
          n = s.n(a),
          o = s(28188),
          l = {}
        for (let e in o)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (l[e] = () => o[e])
        s.d(r, l)
        let d = {
            children: [
              '',
              {
                children: [
                  'large-format',
                  {
                    children: [
                      'aluminum-signs',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(s.bind(s, 42676)),
                              '/var/www/deploy-adap/src/app/large-format/aluminum-signs/page.tsx',
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
                  () => Promise.resolve().then(s.bind(s, 95597)),
                  '/var/www/deploy-adap/src/app/layout.tsx',
                ],
                'not-found': [
                  () => Promise.resolve().then(s.t.bind(s, 55745, 23)),
                  'next/dist/client/components/not-found-error',
                ],
                forbidden: [
                  () => Promise.resolve().then(s.t.bind(s, 33596, 23)),
                  'next/dist/client/components/forbidden-error',
                ],
                unauthorized: [
                  () => Promise.resolve().then(s.t.bind(s, 21869, 23)),
                  'next/dist/client/components/unauthorized-error',
                ],
              },
            ],
          }.children,
          u = ['/var/www/deploy-adap/src/app/large-format/aluminum-signs/page.tsx'],
          c = { require: s, loadChunk: () => Promise.resolve() },
          m = new t.AppPageRouteModule({
            definition: {
              kind: i.RouteKind.APP_PAGE,
              page: '/large-format/aluminum-signs/page',
              pathname: '/large-format/aluminum-signs',
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
  var s = (e) => r((r.s = e)),
    t = r.X(0, [7920, 1813, 9203, 3245], () => s(84324))
  module.exports = t
})()
