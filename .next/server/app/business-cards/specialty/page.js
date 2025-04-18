;(() => {
  var e = {}
  ;(e.id = 8696),
    (e.ids = [8696]),
    (e.modules = {
      3295: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      5454: (e, s, r) => {
        'use strict'
        r.r(s),
          r.d(s, {
            GlobalError: () => d.a,
            __next_app__: () => p,
            pages: () => c,
            routeModule: () => u,
            tree: () => o,
          })
        var t = r(11892),
          a = r(12875),
          i = r(75043),
          d = r.n(i),
          n = r(28188),
          l = {}
        for (let e in n)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (l[e] = () => n[e])
        r.d(s, l)
        let o = {
            children: [
              '',
              {
                children: [
                  'business-cards',
                  {
                    children: [
                      'specialty',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(r.bind(r, 89212)),
                              '/var/www/deploy-adap/src/app/business-cards/specialty/page.tsx',
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
          c = ['/var/www/deploy-adap/src/app/business-cards/specialty/page.tsx'],
          p = { require: r, loadChunk: () => Promise.resolve() },
          u = new t.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: '/business-cards/specialty/page',
              pathname: '/business-cards/specialty',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: o },
          })
      },
      10846: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      19121: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/action-async-storage.external.js')
      },
      23120: (e, s, r) => {
        Promise.resolve().then(r.t.bind(r, 77175, 23)),
          Promise.resolve().then(r.t.bind(r, 68474, 23))
      },
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
      32848: (e, s, r) => {
        Promise.resolve().then(r.t.bind(r, 53309, 23)),
          Promise.resolve().then(r.t.bind(r, 13484, 23))
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
      89212: (e, s, r) => {
        'use strict'
        r.r(s), r.d(s, { default: () => l })
        var t = r(21396)
        r(88525)
        var a = r(77175),
          i = r.n(a),
          d = r(9203)
        let n = [
            {
              label: 'Die-Cut',
              href: '/business-cards/specialty/die-cut',
              src: 'leaf-business-cards.webp',
              alt: 'Die-Cut Business Card',
              description: 'Unique shapes that make your business card truly stand out.',
            },
            {
              label: 'Durable',
              href: '/business-cards/specialty/durable',
              src: 'https://d12ufawtd6351k.cloudfront.net/business-card-endurace.webp',
              alt: 'Durable Business Card',
              description: 'Extra sturdy cards built to last through everyday wear.',
            },
            {
              label: 'Kraft-Paper',
              href: '/business-cards/specialty/kraft-paper',
              src: 'https://d12ufawtd6351k.cloudfront.net/business-card-brown-kraft.webp',
              alt: 'Kraft Paper Business Card',
              description: 'Natural kraft paper cards that offer an eco-friendly appeal.',
            },
            {
              label: 'Metallic-Foil',
              href: '/business-cards/specialty/metallic-foil',
              src: 'https://d12ufawtd6351k.cloudfront.net/foil-worx-business-cards.webp',
              alt: 'Metallic Foil Business Card',
              description: 'Striking metallic foil details for a luxurious finish.',
            },
            {
              label: 'Painted-edge',
              href: '/business-cards/specialty/painted-edge',
              src: 'https://d12ufawtd6351k.cloudfront.net/painted-edge-business-cards.webp',
              alt: 'Painted Edge Business Card',
              description: 'Artfully painted edges that add a creative twist to your card.',
            },
            {
              label: 'Pearl--Paper',
              href: '/business-cards/specialty/pearl-paper',
              src: 'https://d12ufawtd6351k.cloudfront.net/business-card-pearl1.webp',
              alt: 'Pearl Paper Business Card',
              description: 'Elegant pearl paper cards exuding sophistication and charm.',
            },
            {
              label: 'Soft-Touch',
              href: '/business-cards/specialty/soft-touch',
              src: 'https://d12ufawtd6351k.cloudfront.net/business-card-suede-2.webp',
              alt: 'Soft Touch Business Card',
              description: 'Premium soft-touch cards that feel as good as they look.',
            },
            {
              label: 'Spot-UV',
              href: '/business-cards/specialty/spot-uv',
              src: 'https://d12ufawtd6351k.cloudfront.net/magestic_duo_gold_foil_and_spotuv_2.webp',
              alt: 'Spot UV Business Card',
              description: 'Eye-catching spot UV details that highlight your design.',
            },
            {
              label: 'Ultrs-Smooth',
              href: '/business-cards/specialty/ultrs-smooth',
              src: 'https://d12ufawtd6351k.cloudfront.net/business-card-silk2.webp',
              alt: 'Ultrs Smooth Business Card',
              description: 'Exceptionally smooth cards for a refined, upscale look.',
            },
          ],
          l = () =>
            (0, t.jsxs)('div', {
              className: 'container py-5',
              children: [
                (0, t.jsx)('h1', {
                  className: 'mb-4 text-center',
                  children: 'Specialty Business Cards',
                }),
                (0, t.jsx)('div', {
                  className: 'row row-cols-1 row-cols-md-3 g-4',
                  children: n.map((e, s) =>
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
                              children: (0, t.jsx)(d.default, {
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
                      s
                    )
                  ),
                }),
              ],
            })
      },
    })
  var s = require('../../../webpack-runtime.js')
  s.C(e)
  var r = (e) => s((s.s = e)),
    t = s.X(0, [1978, 1813, 9203, 3245], () => r(5454))
  module.exports = t
})()
