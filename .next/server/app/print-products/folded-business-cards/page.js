;(() => {
  var e = {}
  ;(e.id = 3739),
    (e.ids = [3739]),
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
      21012: (e, s, r) => {
        'use strict'
        r.r(s),
          r.d(s, {
            GlobalError: () => i.a,
            __next_app__: () => p,
            pages: () => c,
            routeModule: () => u,
            tree: () => l,
          })
        var t = r(11892),
          d = r(12875),
          n = r(75043),
          i = r.n(n),
          a = r(28188),
          o = {}
        for (let e in a)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (o[e] = () => a[e])
        r.d(s, o)
        let l = {
            children: [
              '',
              {
                children: [
                  'print-products',
                  {
                    children: [
                      'folded-business-cards',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(r.bind(r, 83751)),
                              '/var/www/deploy-adap/src/app/print-products/folded-business-cards/page.tsx',
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
          c = ['/var/www/deploy-adap/src/app/print-products/folded-business-cards/page.tsx'],
          p = { require: r, loadChunk: () => Promise.resolve() },
          u = new t.AppPageRouteModule({
            definition: {
              kind: d.RouteKind.APP_PAGE,
              page: '/print-products/folded-business-cards/page',
              pathname: '/print-products/folded-business-cards',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: l },
          })
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
      83751: (e, s, r) => {
        'use strict'
        r.r(s), r.d(s, { default: () => o })
        var t = r(21396)
        r(88525)
        var d = r(77175),
          n = r.n(d),
          i = r(9203)
        let a = [
            {
              label: 'Folded Business Cards',
              href: '/print-products/folded-business-cards',
              src: 'https://d12ufawtd6351k.cloudfront.net/folded-business-cards.jpg',
              alt: 'Folded Business Cards',
              sublinks: [
                {
                  label: '14pt UV (High Gloss)',
                  href: '/print-products/folded-business-cards/14pt-uv-fb',
                  src: 'https://d12ufawtd6351k.cloudfront.net/14pt-uv-fb',
                  alt: '14pt UV Folded Business Cards',
                },
                {
                  label: '14pt Matte Finish',
                  href: '/print-products/folded-business-cards/14pt-matte-fb',
                  src: 'https://d12ufawtd6351k.cloudfront.net/14pt-matte-finish-fb',
                  alt: '14pt Matte Finish Folded Business Cards',
                },
                {
                  label: '13pt Enviro Uncoated',
                  href: '/print-products/folded-business-cards/13pt-enviro-fb',
                  src: 'https://d12ufawtd6351k.cloudfront.net/13pt-enviro-fb',
                  alt: '13pt Enviro Uncoated Folded Business Cards',
                },
              ],
            },
          ],
          o = () => {
            console.log('DigitalSheetsPage loaded successfully')
            let e = (s) =>
              (0, t.jsx)('ul', {
                className: 'ml-6 border-l border-gray-300 pl-4',
                children: s.map((s, r) =>
                  (0, t.jsxs)(
                    'li',
                    {
                      className: 'mb-4',
                      children: [
                        (0, t.jsx)(n(), {
                          href: s.href,
                          children: (0, t.jsxs)('div', {
                            className:
                              'flex items-start gap-4 hover:bg-gray-100 p-2 rounded-lg transition',
                            children: [
                              (0, t.jsx)(i.default, {
                                src: s.src,
                                alt: s.alt,
                                width: 64,
                                height: 64,
                                className: 'w-16 h-16 object-cover rounded',
                              }),
                              (0, t.jsx)('span', {
                                className: 'font-medium text-lg',
                                children: s.label,
                              }),
                            ],
                          }),
                        }),
                        s.sublinks && e(s.sublinks),
                      ],
                    },
                    r
                  )
                ),
              })
            return (0, t.jsxs)('div', {
              className: 'container mx-auto px-6 py-8',
              children: [
                (0, t.jsx)('h1', {
                  className: 'text-4xl font-bold mb-6 text-center',
                  children: 'Digital Sheets',
                }),
                (0, t.jsx)('p', {
                  className: 'mb-8 text-center text-lg text-gray-700',
                  children:
                    'Folded Business Cards stand out from the crowd. With extra design space for your client to make a good impression, wholesale Folded Business Cards are essential to successful networking.',
                }),
                (0, t.jsx)('div', {
                  className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
                  children: a.map((s, r) =>
                    (0, t.jsxs)(
                      'div',
                      {
                        className: 'border rounded-lg shadow-lg p-4',
                        children: [
                          (0, t.jsx)(n(), {
                            href: s.href,
                            children: (0, t.jsxs)('div', {
                              className: 'cursor-pointer',
                              children: [
                                (0, t.jsx)(i.default, {
                                  src: s.src,
                                  alt: s.alt,
                                  width: 150,
                                  height: 150,
                                  className: 'w-full h-40 object-cover rounded-lg mb-4',
                                }),
                                (0, t.jsx)('h2', {
                                  className: 'text-xl font-semibold text-center mb-2',
                                  children: s.label,
                                }),
                              ],
                            }),
                          }),
                          s.sublinks && e(s.sublinks),
                        ],
                      },
                      r
                    )
                  ),
                }),
              ],
            })
          }
      },
    })
  var s = require('../../../webpack-runtime.js')
  s.C(e)
  var r = (e) => s((s.s = e)),
    t = s.X(0, [7920, 1813, 9203, 3245], () => r(21012))
  module.exports = t
})()
