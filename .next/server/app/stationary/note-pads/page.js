;(() => {
  var e = {}
  ;(e.id = 3363),
    (e.ids = [3363]),
    (e.modules = {
      419: (e, r, t) => {
        'use strict'
        t.r(r), t.d(r, { default: () => d })
        var s = t(21396)
        t(88525)
        var a = t(77175),
          n = t.n(a),
          o = t(9203)
        let i = [
            {
              label: '25 Page Notepads',
              href: '/note-pads/25-page',
              src: 'https://d12ufawtd6351k.cloudfront.net/notepad-1.webp',
              alt: '25-page Notepads',
              description: 'Convenient 25-page notepads for quick notes and memos.',
            },
            {
              label: '50 Page Notepads',
              href: '/note-pads/50-page',
              src: 'https://d12ufawtd6351k.cloudfront.net/notepad-2.webp',
              alt: '50-page Notepads',
              description: '50-page notepads for longer use and more extensive note-taking.',
            },
          ],
          d = () =>
            (0, s.jsxs)('div', {
              className: 'container py-8',
              children: [
                (0, s.jsx)('h1', { className: 'mb-4 text-center', children: 'Notepads' }),
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
                              children: (0, s.jsxs)(n(), {
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
      71248: (e, r, t) => {
        'use strict'
        t.r(r),
          t.d(r, {
            GlobalError: () => o.a,
            __next_app__: () => c,
            pages: () => p,
            routeModule: () => u,
            tree: () => l,
          })
        var s = t(11892),
          a = t(12875),
          n = t(75043),
          o = t.n(n),
          i = t(28188),
          d = {}
        for (let e in i)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (d[e] = () => i[e])
        t.d(r, d)
        let l = {
            children: [
              '',
              {
                children: [
                  'stationary',
                  {
                    children: [
                      'note-pads',
                      {
                        children: [
                          '__PAGE__',
                          {},
                          {
                            page: [
                              () => Promise.resolve().then(t.bind(t, 419)),
                              '/var/www/deploy-adap/src/app/stationary/note-pads/page.tsx',
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
          p = ['/var/www/deploy-adap/src/app/stationary/note-pads/page.tsx'],
          c = { require: t, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: '/stationary/note-pads/page',
              pathname: '/stationary/note-pads',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: l },
          })
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
  var r = require('../../../webpack-runtime.js')
  r.C(e)
  var t = (e) => r((r.s = e)),
    s = r.X(0, [7920, 1813, 9203, 3245], () => t(71248))
  module.exports = s
})()
