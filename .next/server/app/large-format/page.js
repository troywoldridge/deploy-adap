;(() => {
  var e = {}
  ;(e.id = 6837),
    (e.ids = [6837]),
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
      26738: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            GlobalError: () => o.a,
            __next_app__: () => p,
            pages: () => c,
            routeModule: () => u,
            tree: () => d,
          })
        var a = t(11892),
          s = t(12875),
          n = t(75043),
          o = t.n(n),
          l = t(28188),
          i = {}
        for (let e in l)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (i[e] = () => l[e])
        t.d(r, i)
        let d = {
            children: [
              '',
              {
                children: [
                  'large-format',
                  {
                    children: [
                      '__PAGE__',
                      {},
                      {
                        page: [
                          () => Promise.resolve().then(t.bind(t, 62602)),
                          '/var/www/deploy-adap/src/app/large-format/page.tsx',
                        ],
                      },
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
          c = ['/var/www/deploy-adap/src/app/large-format/page.tsx'],
          p = { require: t, loadChunk: () => Promise.resolve() },
          u = new a.AppPageRouteModule({
            definition: {
              kind: s.RouteKind.APP_PAGE,
              page: '/large-format/page',
              pathname: '/large-format',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: d },
          })
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
      62602: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => i })
        var a = t(21396)
        t(88525)
        var s = t(77175),
          n = t.n(s),
          o = t(9203)
        let l = [
            {
              label: 'Coroplast',
              href: '/large-format/coroplast',
              src: 'https://d12ufawtd6351k.cloudfront.net/coroplast-group-1.png',
              alt: 'Coroplast',
              description: 'Durable, lightweight signage for indoor and outdoor use.',
            },
            {
              label: 'Floor Graphics',
              href: '/large-format/floor-graphics',
              src: 'https://d12ufawtd6351k.cloudfront.net/floor-graphic.png',
              alt: 'Floor Graphics',
              description: 'Attention-grabbing floor graphics to promote your brand.',
            },
            {
              label: 'Foam Board',
              href: '/large-format/foam-board',
              src: 'https://d12ufawtd6351k.cloudfront.net/foamboard-1.jpg',
              alt: 'Foam Board',
              description: 'High-quality foam board for displays and presentations.',
            },
            {
              label: 'Banners',
              href: '/large-format/banners',
              src: 'https://d12ufawtd6351k.cloudfront.net/banners-1.png',
              alt: 'Banners',
              description: 'Custom banners perfect for any event or promotion.',
            },
            {
              label: 'Pull Up Banners',
              href: '/large-format/pull-up-banners',
              src: 'https://d12ufawtd6351k.cloudfront.net/pull-up-banner-1.png',
              alt: 'Pull Up Banners',
              description: 'Portable pull up banners for quick setup and impact.',
            },
            {
              label: 'Aluminum Signs',
              href: '/large-format/aluminum-signs',
              src: 'https://d12ufawtd6351k.cloudfront.net/aluminum-signs-1.jpg',
              alt: 'Aluminum Signs',
              description: 'Durable aluminum signs ideal for outdoor display.',
            },
            {
              label: 'Table Covers',
              href: '/large-format/table-covers',
              src: 'https://d12ufawtd6351k.cloudfront.net/tablecloth-1.png',
              alt: 'Table Covers',
              description: 'Customized table covers to showcase your brand.',
            },
            {
              label: 'Adhesive Vinyl',
              href: '/large-format/adhesive-vinyl',
              src: 'https://d12ufawtd6351k.cloudfront.net/adhesive-vinyl.jpg',
              alt: 'Adhesive Vinyl',
              description: 'High-quality adhesive vinyl for signage and decals.',
            },
            {
              label: 'Window Graphics',
              href: '/large-format/window-graphics',
              src: 'https://d12ufawtd6351k.cloudfront.net/window-graphics-2.jpg',
              alt: 'Window Graphics',
              description: 'Impactful window graphics to attract attention.',
            },
            {
              label: 'Styrene Signs',
              href: '/large-format/styrene-signs',
              src: 'https://d12ufawtd6351k.cloudfront.net/styrene-1.jpg',
              alt: 'Styrene Signs',
              description: 'Cost-effective styrene signs for indoor and outdoor use.',
            },
            {
              label: 'Display Board',
              href: '/large-format/display-board',
              src: 'https://d12ufawtd6351k.cloudfront.net/display-board-40-pt-a.jpg',
              alt: 'Display Board',
              description: 'Versatile display boards for presentations and events.',
            },
            {
              label: 'Canvas',
              href: '/large-format/canvas',
              src: 'https://d12ufawtd6351k.cloudfront.net/canvas-1.jpg',
              alt: 'Canvas',
              description: 'Premium canvas prints for art and advertising.',
            },
            {
              label: 'Sintra / PVC',
              href: '/large-format/sintra',
              src: 'https://d12ufawtd6351k.cloudfront.net/sintra-4.jpg',
              alt: 'Sintra / PVC',
              description: 'Durable Sintra and PVC materials for long-lasting signage.',
            },
            {
              label: 'A-Frame Signs',
              href: '/large-format/a-frame',
              src: 'https://d12ufawtd6351k.cloudfront.net/a-frame-1.jpg',
              alt: 'A-Frame Signs',
              description: 'Flexible A-Frame signs for storefronts and events.',
            },
            {
              label: 'Wall Decals',
              href: '/large-format/wall-decals',
              src: 'https://d12ufawtd6351k.cloudfront.net/wall-decal-1.jpg',
              alt: 'Wall Decals',
              description: 'Custom wall decals to enhance any space.',
            },
            {
              label: 'A Frame Stands',
              href: '/large-format/a-frame-stands',
              src: 'https://d12ufawtd6351k.cloudfront.net/a-frame-stands.jpg',
              alt: 'A Frame Stands',
              description: 'Sturdy A Frame stands for effective promotions.',
            },
            {
              label: 'H Stands',
              href: '/large-format/h-stands',
              src: 'https://d12ufawtd6351k.cloudfront.net/h-stands.jpg',
              alt: 'H Stands',
              description: 'Professional H stands for trade shows and exhibitions.',
            },
          ],
          i = () =>
            (0, a.jsxs)('div', {
              className: 'container py-8',
              children: [
                (0, a.jsx)('h1', { className: 'mb-4 text-center', children: 'Large Format' }),
                (0, a.jsx)('div', {
                  className: 'row row-cols-1 row-cols-md-3 g-4',
                  children: l.map((e, r) =>
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
                              children: (0, a.jsx)(o.default, {
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
    })
  var r = require('../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    a = r.X(0, [7920, 1813, 9203, 3245], () => t(26738))
  module.exports = a
})()
