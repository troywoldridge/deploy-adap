;(() => {
  var e = {}
  ;(e.id = 5117),
    (e.ids = [5117]),
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
      84493: (e, r, s) => {
        'use strict'
        s.r(r), s.d(r, { default: () => l })
        var t = s(21396)
        s(88525)
        var i = s(77175),
          a = s.n(i),
          n = s(9203)
        let o = [
            {
              label: 'Bookmarks',
              href: '/print-products/bookmarks',
              src: '/images/bookmarks-main.jpg',
              alt: 'Bookmarks',
              description: "Custom printed bookmarks to keep your brand in your reader's hands.",
            },
            {
              label: 'Brochures',
              href: '/print-products/brochures',
              src: '/images/brochure-main.jpg',
              alt: 'Brochures',
              description: 'Eye-catching brochures for all your marketing needs.',
            },
            {
              label: 'Clings',
              href: '/print-products/clings',
              src: '/images/clings-main.jpg',
              alt: 'Clings',
              description: 'High-quality printed clings for windows and displays.',
            },
            {
              label: 'Digital Sheets',
              href: '/print-products/digital-sheets',
              src: '/images/digital-sheets.jpg',
              alt: 'Digital Sheets',
              description: 'Vibrant digital prints on premium paper.',
            },
            {
              label: 'Door Hangers',
              href: '/print-products/door-hangers',
              src: '/images/door-hanger.jpg',
              alt: 'Door Hangers',
              description: 'Creative door hangers that capture attention.',
            },
            {
              label: 'Flyers',
              href: '/print-products/flyers',
              src: '/images/flyer.png',
              alt: 'Flyers',
              description: 'Versatile flyers to boost your event or promotion.',
            },
            {
              label: 'Folded Business Cards',
              href: '/print-products/folded-business-cards',
              src: '/images/folded-business-cards.jpg',
              alt: 'Folded Business Cards',
              description: 'Innovative folded business cards that make an impact.',
            },
            {
              label: 'Greeting Cards',
              href: '/print-products/greeting-cards',
              src: '/images/greeting-cards.png',
              alt: 'Greeting Cards',
              description: 'Beautifully printed greeting cards for every occasion.',
            },
            {
              label: 'Magnets',
              href: '/print-products/magnets',
              src: '/images/30mil-cut-to-shape-magnets-3.png',
              alt: 'Magnets',
              description: 'Custom magnets to keep your brand on display.',
            },
            {
              label: 'Numbered Tickets',
              href: '/print-products/numbered-tickets',
              src: '/images/numbered-tickets.png',
              alt: 'Numbered Tickets',
              description: 'High-quality tickets for events with secure numbering.',
            },
            {
              label: 'Plastics',
              href: '/print-products/plastics',
              src: '/images/plastics.jpg',
              alt: 'Plastics',
              description: 'Durable plastic prints for a modern look.',
            },
            {
              label: 'Postcards',
              href: '/print-products/postcards',
              src: '/images/postcards.png',
              alt: 'Postcards',
              description: 'Versatile postcards in a range of finishes and sizes.',
            },
            {
              label: 'Posters',
              href: '/print-products/posters',
              src: '/images/posters.jpg',
              alt: 'Posters',
              description: 'Large format posters for high impact visual communication.',
            },
            {
              label: 'Tent Cards',
              href: '/print-products/tent-cards',
              src: '/images/tent-cards.jpg',
              alt: 'Tent Cards',
              description: 'Attention-grabbing tent cards for table-top displays.',
            },
            {
              label: 'Variable Printing',
              href: '/print-products/variable-printing',
              src: '/images/variable-printing.png',
              alt: 'Variable Printing',
              description: 'Customizable prints for personalized marketing solutions.',
            },
            {
              label: 'Wall Calendars',
              href: '/print-products/calendars',
              src: '/images/wall-calendars.png',
              alt: 'Wall Calendars',
              description: 'Customizable prints for personalized marketing solutions.',
            },
          ],
          l = () =>
            (0, t.jsxs)('div', {
              className: 'container py-5',
              children: [
                (0, t.jsx)('h1', { className: 'mb-4 text-center', children: 'Print Products' }),
                (0, t.jsx)('div', {
                  className: 'row row-cols-1 row-cols-md-3 g-4',
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
      97892: (e, r, s) => {
        'use strict'
        s.r(r),
          s.d(r, {
            GlobalError: () => n.a,
            __next_app__: () => c,
            pages: () => p,
            routeModule: () => u,
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
                  'print-products',
                  {
                    children: [
                      '__PAGE__',
                      {},
                      {
                        page: [
                          () => Promise.resolve().then(s.bind(s, 84493)),
                          '/var/www/deploy-adap/src/app/print-products/page.tsx',
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
          p = ['/var/www/deploy-adap/src/app/print-products/page.tsx'],
          c = { require: s, loadChunk: () => Promise.resolve() },
          u = new t.AppPageRouteModule({
            definition: {
              kind: i.RouteKind.APP_PAGE,
              page: '/print-products/page',
              pathname: '/print-products',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: d },
          })
      },
    })
  var r = require('../../webpack-runtime.js')
  r.C(e)
  var s = (e) => r((r.s = e)),
    t = r.X(0, [7920, 1813, 9203, 3245], () => s(97892))
  module.exports = t
})()
