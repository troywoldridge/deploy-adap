;(() => {
  var e = {}
  ;(e.id = 6219),
    (e.ids = [6219]),
    (e.modules = {
      3295: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      3345: (e, t, s) => {
        'use strict'
        s.r(t), s.d(t, { default: () => d })
        var r = s(24518),
          a = s(76615),
          i = s(30324),
          n = s(79297),
          l = s(62222),
          o = s(26182)
        let d = () => {
          let [e, t] = (0, a.useState)(null),
            [s, d] = (0, a.useState)(''),
            [c, p] = (0, a.useState)('')
          if (
            ((0, a.useEffect)(
              () => (
                (async () => {
                  try {
                    let e = await fetch('http://192.168.0.100:8000/api/v1/products/10', {
                      cache: 'no-store',
                    })
                    if (!e.ok) throw Error(`Fetch failed with status ${e.status}`)
                    let s = await e.json()
                    t(s), d(s.price)
                  } catch (e) {
                    console.error('Error fetching product data:', e),
                      p('Failed to load product data. Please try again later.')
                  }
                })(),
                () => console.log('GlossLam18Page unmounted')
              ),
              [10]
            ),
            c)
          )
            return (0, r.jsx)('div', {
              className: 'container mx-auto px-4 py-24',
              children: (0, r.jsx)('p', { className: 'text-center text-red-500', children: c }),
            })
          if (!e)
            return (0, r.jsx)('div', {
              className: 'container mx-auto px-4 py-24',
              children: (0, r.jsx)('p', { className: 'text-center', children: 'Loading...' }),
            })
          let u = e.image_url.startsWith('http')
              ? e.image_url
              : `https://d12ufawtd6351k.cloudfront.net${e.image_url}`,
            x = [{ id: e.id, image_url: u, alt_text: e.name }]
          return (0, r.jsxs)('div', {
            className: 'container mx-auto px-4 py-24',
            children: [
              (0, r.jsxs)('h1', {
                className: 'text-3xl font-bold text-center mb-8',
                children: [e.name, ' - 16pt Matte Business Cards'],
              }),
              (0, r.jsxs)('div', {
                className: 'grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8',
                children: [
                  (0, r.jsx)(i.A, { images: x }),
                  (0, r.jsxs)('div', {
                    className: 'space-y-6',
                    children: [
                      (0, r.jsx)(o.A, {
                        productId: 10,
                        onPriceUpdate: d,
                        onOptionsChange: (e) => console.log('Selected options:', e),
                      }),
                      (0, r.jsx)(n.A, {
                        productId: 10,
                        basePrice: s,
                        pricing: e.pricing,
                        options: e.options,
                        selectedOptions: {},
                        finalPrice: s,
                        price: s,
                      }),
                      (0, r.jsxs)('div', {
                        className: 'flex gap-4 flex-wrap',
                        children: [
                          (0, r.jsx)('button', {
                            className:
                              'bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded shadow',
                            children: 'Upload Artwork',
                          }),
                          (0, r.jsx)('button', {
                            className:
                              'bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded shadow',
                            children: 'Calculate Shipping',
                          }),
                          (0, r.jsx)('button', {
                            className:
                              'bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded shadow',
                            children: 'Markup Calculator',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)('div', {
                className: 'mt-24',
                children: (0, r.jsx)(l.A, {
                  description: e.description,
                  attributes: e.attributes || {},
                  rating: e.rating || 0,
                  reviewCount: e.review_count || 0,
                }),
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
      26182: (e, t, s) => {
        'use strict'
        s.d(t, { A: () => i })
        var r = s(24518),
          a = s(76615)
        let i = ({ productId: e, onOptionsChange: t, onPriceUpdate: s }) => {
          let [i, n] = (0, a.useState)([]),
            [l, o] = (0, a.useState)({}),
            [d, c] = (0, a.useState)(''),
            [p, u] = (0, a.useState)(!0)
          ;(0, a.useEffect)(() => {
            ;(async () => {
              try {
                let t = await fetch(`http://192.168.0.100:8000/api/v1/products/${e}/options`)
                if (!t.ok) throw Error(`Failed with status ${t.status}`)
                let s = await t.json()
                n(s)
              } catch (e) {
                console.error('Failed to fetch product options:', e),
                  c('Failed to load product options.')
              } finally {
                u(!1)
              }
            })()
          }, [e])
          let x = (e, r) => {
            let a = { ...l, [e]: r }
            o(a), t(a), s && s((100 * Math.random()).toFixed(2))
          }
          return d
            ? (0, r.jsx)('p', { className: 'text-red-500', children: d })
            : p
              ? (0, r.jsx)('p', { children: 'Loading product options...' })
              : (0, r.jsx)('div', {
                  className: 'space-y-4',
                  children: i.map((e) =>
                    (0, r.jsxs)(
                      'div',
                      {
                        children: [
                          (0, r.jsx)('label', {
                            className: 'block font-semibold mb-1',
                            children: e.group,
                          }),
                          (0, r.jsxs)('select', {
                            className: 'w-full border rounded px-3 py-2',
                            onChange: (t) => x(e.group, parseInt(t.target.value)),
                            value: l[e.group] || '',
                            children: [
                              (0, r.jsxs)('option', {
                                value: '',
                                disabled: !0,
                                children: ['Select ', e.group],
                              }),
                              e.options.map((e) =>
                                (0, r.jsx)('option', { value: e.id, children: e.name }, e.id)
                              ),
                            ],
                          }),
                        ],
                      },
                      e.group
                    )
                  ),
                })
        }
      },
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
      },
      30324: (e, t, s) => {
        'use strict'
        s.d(t, { A: () => n })
        var r = s(24518),
          a = s(76615),
          i = s(79797)
        function n({ images: e }) {
          let t = Array.isArray(e) ? e : [],
            [s, n] = (0, a.useState)(t?.[0]?.image_url || '')
          return 0 === t.length
            ? (0, r.jsx)('p', { children: 'No images available' })
            : (0, r.jsxs)('div', {
                className: 'flex flex-col gap-4 items-center',
                children: [
                  (0, r.jsx)('div', {
                    className:
                      'w-full mt-20 h-[400px] bg-gray-100 rounded-lg shadow flex items-center justify-center',
                    children: s
                      ? (0, r.jsx)(i.default, {
                          src: s,
                          alt: t[0]?.alt_text || 'Main Product Image',
                          width: 400,
                          height: 400,
                          className: 'rounded-lg shadow',
                        })
                      : (0, r.jsx)('p', { children: 'No image available' }),
                  }),
                  t.length > 1 &&
                    (0, r.jsx)('div', {
                      className: 'flex gap-2 overflow-x-auto mt-4',
                      children: t
                        .slice(1)
                        .map((e) =>
                          (0, r.jsx)(
                            'div',
                            {
                              onClick: () => n(e.image_url),
                              className:
                                'cursor-pointer transition-transform transform hover:scale-105',
                              children: (0, r.jsx)(i.default, {
                                src: e.image_url,
                                alt: e.alt_text || 'Product Thumbnail',
                                width: 100,
                                height: 75,
                                className: 'rounded shadow object-cover',
                              }),
                            },
                            e.id
                          )
                        ),
                    }),
                ],
              })
        }
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
      62222: (e, t, s) => {
        'use strict'
        s.d(t, { A: () => p })
        var r = s(24518),
          a = s(76615),
          i = s(67242)
        function n(...e) {
          return e.filter(Boolean).join(' ')
        }
        let l = i.bL,
          o = a.forwardRef(({ className: e, ...t }, s) =>
            (0, r.jsx)(i.B8, {
              ref: s,
              className: n(
                'inline-flex items-center justify-center rounded-lg bg-muted p-1',
                e || ''
              ),
              ...t,
            })
          )
        o.displayName = 'TabsList'
        let d = a.forwardRef(({ className: e, ...t }, s) =>
          (0, r.jsx)(i.l9, {
            ref: s,
            className: n(
              'inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 rounded text-sm font-medium ring-offset-background transition-colors',
              'data-[state=active]:bg-primary data-[state=active]:text-white',
              e || ''
            ),
            ...t,
          })
        )
        d.displayName = 'TabsTrigger'
        let c = a.forwardRef(({ className: e, ...t }, s) =>
          (0, r.jsx)(i.UC, { ref: s, className: n('mt-2', e || ''), ...t })
        )
        c.displayName = 'TabsContent'
        let p = ({ description: e, attributes: t, rating: s, reviewCount: a }) =>
          (0, r.jsxs)(l, {
            defaultValue: 'details',
            children: [
              (0, r.jsxs)(o, {
                children: [
                  (0, r.jsx)(d, { value: 'details', children: 'Details' }),
                  (0, r.jsxs)(d, { value: 'reviews', children: ['Reviews (', a, ')'] }),
                ],
              }),
              (0, r.jsx)(c, {
                value: 'details',
                children: (0, r.jsxs)('div', {
                  className: 'p-4 bg-white shadow rounded',
                  children: [
                    (0, r.jsx)('p', { className: 'mb-4', children: e }),
                    t &&
                      (0, r.jsx)('ul', {
                        children: Object.entries(t).map(([e, t]) =>
                          (0, r.jsxs)(
                            'li',
                            { children: [(0, r.jsxs)('strong', { children: [e, ':'] }), ' ', t] },
                            e
                          )
                        ),
                      }),
                  ],
                }),
              }),
              (0, r.jsx)(c, {
                value: 'reviews',
                children: (0, r.jsxs)('div', {
                  className: 'p-4 bg-white shadow rounded',
                  children: [
                    (0, r.jsxs)('p', { children: ['Rating: ', s ?? 'No ratings yet.'] }),
                    (0, r.jsxs)('p', { children: [a, ' reviews'] }),
                  ],
                }),
              }),
            ],
          })
      },
      63033: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-unit-async-storage.external.js')
      },
      76115: (e, t, s) => {
        Promise.resolve().then(s.bind(s, 79503))
      },
      79297: (e, t, s) => {
        'use strict'
        s.d(t, { A: () => a })
        var r = s(24518)
        s(76615)
        let a = ({ pricing: e, selectedOptions: t, basePrice: s, finalPrice: a }) => {
          let i = Array.isArray(e) ? e : [],
            n = Object.values(t || {}).join('-'),
            l = i.find((e) => e.option_hash === n),
            o = l?.base_price ?? s
          return (
            parseFloat(o) !== parseFloat(a),
            (0, r.jsxs)('div', {
              children: [
                (0, r.jsxs)('p', { children: ['Base Price: ', s] }),
                (0, r.jsxs)('p', { children: ['Final Price: ', a] }),
                (0, r.jsxs)('p', { children: ['New Price: ', o] }),
              ],
            })
          )
        }
      },
      79503: (e, t, s) => {
        'use strict'
        s.r(t), s.d(t, { default: () => r })
        let r = (0, s(56968).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/var/www/deploy-adap/src/app/business-cards/standard/18pt-gloss-lam/page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            )
          },
          '/var/www/deploy-adap/src/app/business-cards/standard/18pt-gloss-lam/page.tsx',
          'default'
        )
      },
      79551: (e) => {
        'use strict'
        e.exports = require('url')
      },
      81630: (e) => {
        'use strict'
        e.exports = require('http')
      },
      86891: (e, t, s) => {
        Promise.resolve().then(s.bind(s, 3345))
      },
      92496: (e, t, s) => {
        'use strict'
        s.r(t),
          s.d(t, {
            GlobalError: () => n.a,
            __next_app__: () => p,
            pages: () => c,
            routeModule: () => u,
            tree: () => d,
          })
        var r = s(11892),
          a = s(12875),
          i = s(75043),
          n = s.n(i),
          l = s(28188),
          o = {}
        for (let e in l)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (o[e] = () => l[e])
        s.d(t, o)
        let d = {
            children: [
              '',
              {
                children: [
                  'business-cards',
                  {
                    children: [
                      'standard',
                      {
                        children: [
                          '18pt-gloss-lam',
                          {
                            children: [
                              '__PAGE__',
                              {},
                              {
                                page: [
                                  () => Promise.resolve().then(s.bind(s, 79503)),
                                  '/var/www/deploy-adap/src/app/business-cards/standard/18pt-gloss-lam/page.tsx',
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
          c = ['/var/www/deploy-adap/src/app/business-cards/standard/18pt-gloss-lam/page.tsx'],
          p = { require: s, loadChunk: () => Promise.resolve() },
          u = new r.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: '/business-cards/standard/18pt-gloss-lam/page',
              pathname: '/business-cards/standard/18pt-gloss-lam',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: d },
          })
      },
    })
  var t = require('../../../../webpack-runtime.js')
  t.C(e)
  var s = (e) => t((t.s = e)),
    r = t.X(0, [1978, 1813, 7242, 3245], () => s(92496))
  module.exports = r
})()
