;(() => {
  var e = {}
  ;(e.id = 2298),
    (e.ids = [2298]),
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
      82834: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => i })
        var s = t(21396)
        t(88525)
        var o = t(77175),
          a = t.n(o),
          l = t(9203)
        let n = [
            {
              label: '4mm',
              href: '/large-format/coroplast/4mm',
              src: 'https://d12ufawtd6351k.cloudfront.net/coroplast-7.png',
              alt: '4mm Coroplast',
              description:
                '4mm coroplast sheets perfect for indoor signage and lightweight displays.',
            },
            {
              label: '6mm',
              href: '/large-format/coroplast/6mm',
              src: 'https://d12ufawtd6351k.cloudfront.net/coroplast-8.png',
              alt: '6mm Coroplast',
              description: '6mm coroplast offering extra durability for outdoor signage.',
            },
            {
              label: '8mm',
              href: '/large-format/coroplast/8mm',
              src: 'https://d12ufawtd6351k.cloudfront.net/coroplast-9.png',
              alt: '8mm Coroplast',
              description: '8mm coroplast for robust signage solutions with enhanced stiffness.',
            },
            {
              label: '10mm',
              href: '/large-format/coroplast/10mm',
              src: 'https://d12ufawtd6351k.cloudfront.net/10mm-coroplast-signs-ridersign.webp',
              alt: '10mm Coroplast',
              description: '10mm coroplast for heavy-duty signage and long-lasting outdoor use.',
            },
          ],
          i = () =>
            (0, s.jsxs)('div', {
              className: 'container py-8',
              children: [
                (0, s.jsx)('h1', { className: 'mb-4 text-center', children: 'Coroplast' }),
                (0, s.jsx)('div', {
                  className: 'row row-cols-1 row-cols-md-2 g-4',
                  children: n.map((e, r) =>
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
                              children: (0, s.jsx)(l.default, {
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
      83206: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            GlobalError: () => l.a,
            __next_app__: () => p,
            pages: () => c,
            routeModule: () => m,
            tree: () => d,
          })
        var s = t(11892),
          o = t(12875),
          a = t(75043),
          l = t.n(a),
          n = t(28188),
          i = {}
        for (let e in n)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (i[e] = () => n[e])
        t.d(r, i)
        let d = {
            children: [
              '',
              {
                children: [
                  'large-format',
                  {
                    children: [
                      'coroplast',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(t.bind(t, 82834)),
                              '/var/www/deploy-adap/src/app/large-format/coroplast/page.tsx',
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
          c = ['/var/www/deploy-adap/src/app/large-format/coroplast/page.tsx'],
          p = { require: t, loadChunk: () => Promise.resolve() },
          m = new s.AppPageRouteModule({
            definition: {
              kind: o.RouteKind.APP_PAGE,
              page: '/large-format/coroplast/page',
              pathname: '/large-format/coroplast',
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
    s = r.X(0, [7920, 1813, 9203, 3245], () => t(83206))
  module.exports = s
})()
