;(() => {
  var e = {}
  ;(e.id = 7095),
    (e.ids = [7095]),
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
      29364: (e, r, s) => {
        'use strict'
        s.r(r),
          s.d(r, {
            GlobalError: () => n.a,
            __next_app__: () => p,
            pages: () => c,
            routeModule: () => u,
            tree: () => l,
          })
        var t = s(11892),
          a = s(12875),
          i = s(75043),
          n = s.n(i),
          d = s(28188),
          o = {}
        for (let e in d)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (o[e] = () => d[e])
        s.d(r, o)
        let l = {
            children: [
              '',
              {
                children: [
                  'business-cards',
                  {
                    children: [
                      '__PAGE__',
                      {},
                      {
                        page: [
                          () => Promise.resolve().then(s.bind(s, 83091)),
                          '/var/www/deploy-adap/src/app/business-cards/page.tsx',
                        ],
                      },
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
          c = ['/var/www/deploy-adap/src/app/business-cards/page.tsx'],
          p = { require: s, loadChunk: () => Promise.resolve() },
          u = new t.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: '/business-cards/page',
              pathname: '/business-cards',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: l },
          })
      },
      32848: (e, r, s) => {
        Promise.resolve().then(s.t.bind(s, 53309, 23)),
          Promise.resolve().then(s.t.bind(s, 13484, 23))
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
      83091: (e, r, s) => {
        'use strict'
        s.r(r), s.d(r, { default: () => o })
        var t = s(21396)
        s(88525)
        var a = s(77175),
          i = s.n(a),
          n = s(9203)
        let d = [
            {
              label: 'Standard',
              href: '/business-cards/standard',
              src: 'https://d12ufawtd6351k.cloudfront.net/business-card-endurace.webp',
              alt: 'Standard Business Cards',
              description: 'Explore our range of standard business cards.',
            },
            {
              label: 'Specialty',
              href: '/business-cards/specialty',
              src: 'https://d12ufawtd6351k.cloudfront.net/magestic_duo_raised_gold_foil_and_raised_spuv_2_group.webp',
              alt: 'Specialty Business Cards',
              description: 'Discover our unique specialty business cards.',
            },
          ],
          o = () =>
            (0, t.jsxs)('div', {
              className: 'container py-8',
              children: [
                (0, t.jsx)('h1', { className: 'mb-4 text-center', children: 'Business Cards' }),
                (0, t.jsx)('div', {
                  className: 'row row-cols-1 row-cols-md-2 g-4',
                  children: d.map((e, r) =>
                    (0, t.jsx)(
                      'div',
                      {
                        className: 'col',
                        children: (0, t.jsxs)('div', {
                          className: 'card h-100 text-center',
                          children: [
                            (0, t.jsx)('div', {
                              className: 'd-flex align-items-center justify-content-center pt-10',
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
                              children: (0, t.jsxs)(i(), {
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
  var r = require('../../webpack-runtime.js')
  r.C(e)
  var s = (e) => r((r.s = e)),
    t = r.X(0, [7920, 1813, 9203, 3245], () => s(29364))
  module.exports = t
})()
