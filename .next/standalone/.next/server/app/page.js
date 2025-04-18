;(() => {
  var e = {}
  ;(e.id = 8974),
    (e.ids = [8974]),
    (e.modules = {
      596: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 31780))
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
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
      31780: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => s })
        let s = (0, r(56968).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/var/www/deploy-adap/src/app/page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            )
          },
          '/var/www/deploy-adap/src/app/page.tsx',
          'default'
        )
      },
      33873: (e) => {
        'use strict'
        e.exports = require('path')
      },
      37419: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => x })
        var s = r(24518),
          a = r(76615),
          o = r(79797),
          i = r(53309),
          n = r.n(i)
        let l = [
          {
            title: 'Welcome to AdapNow!',
            text: 'Your one-stop shop for premium print products and e-commerce solutions.',
            buttonText: 'Shop Now',
            buttonLink: '#featured',
            image: '/images/free-shipping.jpg',
          },
          {
            title: 'Quality Print Products',
            text: 'Discover premium business cards, flyers, and more.',
            buttonText: 'Browse Catalog',
            buttonLink: '/print-products',
            image: '/images/apparel.jpeg',
          },
          {
            title: 'Large Format Printing',
            text: 'Banners, posters, and more for your business needs.',
            buttonText: 'Explore Large Format',
            buttonLink: '/large-format',
            image: '/images/glossy-banners-b.jpg',
          },
          {
            title: 'Stationery & Labels',
            text: 'Custom stationery and labels for every occasion.',
            buttonText: 'View Stationery',
            buttonLink: '/stationery',
            image: '/images/60lb-uncoated-letterhead.jpg',
          },
          {
            title: 'Apparel & Merchandise',
            text: 'Custom apparel to elevate your brand or event.',
            buttonText: 'View Apparel',
            buttonLink: '/apparel',
            image: '/images/apparel-2.jpeg',
          },
        ]
        function d() {
          let [e, t] = (0, a.useState)(0)
          return (0, s.jsx)('section', {
            className: 'mt-10 mb-2 bg- gray rounded-xl overflow-hidden',
            style: { height: '250px' },
            children: (0, s.jsx)('div', {
              className:
                'relative max-w-screen-xl mx-auto px-4 py-24 bg-slate-200 rounded-xl shadow-gray-500',
              children: l.map((t, r) =>
                (0, s.jsxs)(
                  'div',
                  {
                    className: `absolute top-0 left-0 w-full h-full flex items-center transition-opacity duration-700 ${r === e ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none z-0'}`,
                    children: [
                      (0, s.jsxs)('div', {
                        className: 'flex-1 hidden md:flex flex-col justify-center px-16',
                        children: [
                          (0, s.jsx)('h1', { className: 'text-lg font-bold', children: t.title }),
                          (0, s.jsx)('p', { className: 'text-md', children: t.text }),
                          (0, s.jsx)(n(), {
                            href: t.buttonLink,
                            children: (0, s.jsx)('span', {
                              className:
                                'bg-blue-600 text-white py-2 px-8 rounded hover:bg-blue-700 cursor-pointer text-xs mt-4 inline-block',
                              children: t.buttonText,
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsx)('div', {
                        className: 'flex-1 flex justify-center items-center',
                        children: (0, s.jsx)(o.default, {
                          src: t.image,
                          alt: t.title,
                          width: 200,
                          height: 100,
                          className: 'object-contain',
                          style: { maxHeight: '500px', maxWidth: '200%' },
                          priority: !0,
                          sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
                          loading: 'eager',
                        }),
                      }),
                    ],
                  },
                  r
                )
              ),
            }),
          })
        }
        function p() {
          return (0, s.jsx)('section', {
            className: 'py-8 bg-white',
            children: (0, s.jsxs)('div', {
              className: 'max-w-screen-xl mx-auto px-4 text-center',
              children: [
                (0, s.jsx)('h2', {
                  className: 'text-2xl font-bold mb-4',
                  children: 'Stay in the Loop',
                }),
                (0, s.jsx)('p', {
                  className: 'text-gray-700 mb-6',
                  children: 'Subscribe to our newsletter for updates and special offers!',
                }),
                (0, s.jsxs)('form', {
                  className: 'inline-block',
                  children: [
                    (0, s.jsx)('input', {
                      type: 'email',
                      placeholder: 'Enter your email',
                      className: 'px-3 py-2 border border-gray-300 rounded-l',
                    }),
                    (0, s.jsx)('button', {
                      className: 'bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700',
                      children: 'Subscribe',
                    }),
                  ],
                }),
              ],
            }),
          })
        }
        let c = [
          {
            label: 'Business Cards',
            href: '/categories/business-cards',
            img: '/images/spot-uv-pc-2.png',
          },
          {
            label: 'Large Format',
            href: '/categories/large-format',
            img: '/images/glossy-banners-b.jpg',
          },
          {
            label: 'Stationery',
            href: '/categories/stationery',
            img: '/images/60lb-uncoated-letterhead.jpg',
          },
          { label: 'Apparel', href: '/categories/apparel', img: '/images/apparel.jpeg' },
        ]
        function u() {
          return (0, s.jsx)('section', {
            className: 'w-full bg-gray-100 py-10',
            id: 'categories',
            children: (0, s.jsxs)('div', {
              className: 'w-full px-6',
              children: [
                (0, s.jsx)('h2', {
                  className: 'text-2xl font-bold mb-6 text-center',
                  children: 'Featured Categories',
                }),
                (0, s.jsx)('div', {
                  className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6',
                  children: c.map((e) =>
                    (0, s.jsx)(
                      n(),
                      {
                        href: e.href,
                        children: (0, s.jsxs)('div', {
                          className:
                            'border rounded-xl overflow-hidden shadow-xl hover:shadow-md transition-shadow bg-white',
                          children: [
                            (0, s.jsx)(o.default, {
                              src: e.img,
                              alt: e.label,
                              width: 500,
                              height: 192,
                              className: 'w-full h-48 object-cover object-top',
                            }),
                            (0, s.jsx)('div', {
                              className: 'p-4 text-center',
                              children: (0, s.jsx)('h3', {
                                className: 'font-bold',
                                children: e.label,
                              }),
                            }),
                          ],
                        }),
                      },
                      e.label
                    )
                  ),
                }),
              ],
            }),
          })
        }
        let x = () =>
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(d, {}),
              (0, s.jsxs)('main', {
                className: 'container mx-auto px-4 py-8 text-center',
                children: [
                  (0, s.jsx)('h1', {
                    className: 'text-6xl font-bold mb-6',
                    children: 'Welcome to American Design And Printing',
                  }),
                  (0, s.jsx)('p', {
                    className: 'text-4xl mb-4',
                    children:
                      'Explore our range of cutting-edge products and services designed to empower your business.',
                  }),
                ],
              }),
              (0, s.jsx)(u, {}),
              (0, s.jsx)(p, {}),
            ],
          })
      },
      53332: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 37419))
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
      95200: (e, t, r) => {
        'use strict'
        r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => c,
            pages: () => p,
            routeModule: () => u,
            tree: () => d,
          })
        var s = r(11892),
          a = r(12875),
          o = r(75043),
          i = r.n(o),
          n = r(28188),
          l = {}
        for (let e in n)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (l[e] = () => n[e])
        r.d(t, l)
        let d = [
            '',
            {
              children: [
                '__PAGE__',
                {},
                {
                  page: [
                    () => Promise.resolve().then(r.bind(r, 31780)),
                    '/var/www/deploy-adap/src/app/page.tsx',
                  ],
                },
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
          p = ['/var/www/deploy-adap/src/app/page.tsx'],
          c = { require: r, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: '/page',
              pathname: '/',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: d },
          })
      },
    })
  var t = require('../webpack-runtime.js')
  t.C(e)
  var r = (e) => t((t.s = e)),
    s = t.X(0, [1978, 1813, 3245], () => r(95200))
  module.exports = s
})()
