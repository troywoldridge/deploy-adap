;(() => {
  var e = {}
  ;(e.id = 5697),
    (e.ids = [5697]),
    (e.modules = {
      3295: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      8931: (e, t, s) => {
        'use strict'
        s.r(t), s.d(t, { default: () => n })
        var r = s(21396)
        s(88525)
        var i = s(77175),
          l = s.n(i),
          a = s(9203)
        let d = [
            {
              label: 'Digital Sheets',
              href: '/print-products/digital-sheets',
              src: 'https://d12ufawtd6351k.cloudfront.net/digital-sheets.jpg',
              alt: 'Digital Sheets',
              sublinks: [
                {
                  label: 'Matte Digital Sheets',
                  href: '/print-products/digital-sheets/matte',
                  src: 'https://d12ufawtd6351k.cloudfront.net/matte-digital-sheets.jpg',
                  alt: 'Matte Digital Sheets',
                },
                {
                  label: 'Specialty Digital Sheets',
                  href: '/print-products/digital-sheets/specialty',
                  src: 'https://d12ufawtd6351k.cloudfront.net/specialty-digital-sheets.jpg',
                  alt: ' Specialty Digital Sheets',
                  sublinks: [
                    {
                      label: '80lb Enviro Uncoated',
                      href: '/print-products/digital-sheets/matte/80lb-enviro-digital-sheets',
                      src: 'https://d12ufawtd6351k.cloudfront.net/80lb-enviro-digital-sheets.jpg',
                      alt: '80lb Enviro Digital Sheets',
                    },
                    {
                      label: '13pt Enviro Uncoated',
                      href: '/print-products/digital-sheets/matte/13pt-enviro-digital-sheets',
                      src: 'https://d12ufawtd6351k.cloudfront.net/13pt-enviro-digital-sheets',
                      alt: '13pt Enviro Digital Sheets',
                    },
                    {
                      label: '100lb Gloss Text',
                      href: '/print-products/digital-sheets/matte/100lb-gloss-text-digital-sheets',
                      src: 'https://d12ufawtd6351k.cloudfront.net/100lb-gloss-text-digital-sheets',
                      alt: '80lb Gloss Text Digital Sheets',
                    },
                  ],
                },
              ],
            },
          ],
          n = () => {
            console.log('DigitalSheetsPage loaded successfully')
            let e = (t) =>
              (0, r.jsx)('ul', {
                className: 'ml-6 border-l border-gray-300 pl-4',
                children: t.map((t, s) =>
                  (0, r.jsxs)(
                    'li',
                    {
                      className: 'mb-4',
                      children: [
                        (0, r.jsx)(l(), {
                          href: t.href,
                          children: (0, r.jsxs)('div', {
                            className:
                              'flex items-start gap-4 hover:bg-gray-100 p-2 rounded-lg transition',
                            children: [
                              (0, r.jsx)(a.default, {
                                src: t.src,
                                alt: t.alt,
                                width: 64,
                                height: 64,
                                className: 'w-16 h-16 object-cover rounded',
                              }),
                              (0, r.jsx)('span', {
                                className: 'font-medium text-lg',
                                children: t.label,
                              }),
                            ],
                          }),
                        }),
                        t.sublinks && e(t.sublinks),
                      ],
                    },
                    s
                  )
                ),
              })
            return (0, r.jsxs)('div', {
              className: 'container mx-auto px-6 py-8',
              children: [
                (0, r.jsx)('h1', {
                  className: 'text-4xl font-bold mb-6 text-center',
                  children: 'Digital Sheets',
                }),
                (0, r.jsx)('p', {
                  className: 'mb-8 text-center text-lg text-gray-700',
                  children:
                    'Digital Sheets are a cost-effective option for resellers who trim and bind in-house. Get the high-quality printing for a variety of products on 18” x 12” Digital Sheets.',
                }),
                (0, r.jsx)('div', {
                  className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
                  children: d.map((t, s) =>
                    (0, r.jsxs)(
                      'div',
                      {
                        className: 'border rounded-lg shadow-lg p-4',
                        children: [
                          (0, r.jsx)(l(), {
                            href: t.href,
                            children: (0, r.jsxs)('div', {
                              className: 'cursor-pointer',
                              children: [
                                (0, r.jsx)(a.default, {
                                  src: t.src,
                                  alt: t.alt,
                                  width: 150,
                                  height: 150,
                                  className: 'w-full h-40 object-cover rounded-lg mb-4',
                                }),
                                (0, r.jsx)('h2', {
                                  className: 'text-xl font-semibold text-center mb-2',
                                  children: t.label,
                                }),
                              ],
                            }),
                          }),
                          t.sublinks && e(t.sublinks),
                        ],
                      },
                      s
                    )
                  ),
                }),
              ],
            })
          }
      },
      10846: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      19121: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/action-async-storage.external.js')
      },
      23120: (e, t, s) => {
        Promise.resolve().then(s.t.bind(s, 77175, 23)),
          Promise.resolve().then(s.t.bind(s, 68474, 23))
      },
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
      32848: (e, t, s) => {
        Promise.resolve().then(s.t.bind(s, 53309, 23)),
          Promise.resolve().then(s.t.bind(s, 13484, 23))
      },
      33873: (e) => {
        'use strict'
        e.exports = require('path')
      },
      37718: (e, t, s) => {
        'use strict'
        s.r(t),
          s.d(t, {
            GlobalError: () => a.a,
            __next_app__: () => c,
            pages: () => p,
            routeModule: () => h,
            tree: () => o,
          })
        var r = s(11892),
          i = s(12875),
          l = s(75043),
          a = s.n(l),
          d = s(28188),
          n = {}
        for (let e in d)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (n[e] = () => d[e])
        s.d(t, n)
        let o = {
            children: [
              '',
              {
                children: [
                  'print-products',
                  {
                    children: [
                      'digital-sheets',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(s.bind(s, 8931)),
                              '/var/www/deploy-adap/src/app/print-products/digital-sheets/page.tsx',
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
          p = ['/var/www/deploy-adap/src/app/print-products/digital-sheets/page.tsx'],
          c = { require: s, loadChunk: () => Promise.resolve() },
          h = new r.AppPageRouteModule({
            definition: {
              kind: i.RouteKind.APP_PAGE,
              page: '/print-products/digital-sheets/page',
              pathname: '/print-products/digital-sheets',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: o },
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
    })
  var t = require('../../../webpack-runtime.js')
  t.C(e)
  var s = (e) => t((t.s = e)),
    r = t.X(0, [1978, 1813, 9203, 3245], () => s(37718))
  module.exports = r
})()
