;(() => {
  var e = {}
  ;(e.id = 406),
    (e.ids = [406]),
    (e.modules = {
      3295: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js')
      },
      9170: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 66070))
      },
      10846: (e) => {
        'use strict'
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js')
      },
      19121: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/action-async-storage.external.js')
      },
      21348: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => d })
        var s = r(24518),
          a = r(76615),
          i = r(30324),
          o = r(79297),
          n = r(62222),
          l = r(26182)
        let d = () => {
          let [e, t] = (0, a.useState)(null),
            [r, d] = (0, a.useState)(''),
            [c, p] = (0, a.useState)('')
          if (
            ((0, a.useEffect)(
              () => (
                (async () => {
                  try {
                    let e = await fetch('http://192.168.0.100:8000/api/v1/products/5536', {
                      cache: 'no-store',
                    })
                    if (!e.ok) throw Error(`Fetch failed with status ${e.status}`)
                    let r = await e.json()
                    console.log('Raw product data:', r), t(r), d(r.price)
                  } catch (e) {
                    console.error('Error fetching product data:', e),
                      p('Failed to load product data. Please try again later.')
                  }
                })(),
                () => {
                  console.log('GlossBrochurePage unmounted')
                }
              ),
              [5536]
            ),
            c)
          )
            return (0, s.jsx)('div', {
              className: 'container mx-auto px-4 py-24',
              children: (0, s.jsx)('p', { className: 'text-center text-red-500', children: c }),
            })
          if (!e)
            return (0, s.jsx)('div', {
              className: 'container mx-auto px-4 py-24',
              children: (0, s.jsx)('p', { className: 'text-center', children: 'Loading...' }),
            })
          let u = e.image_url.startsWith('http')
              ? e.image_url
              : `https://d12ufawtd6351k.cloudfront.net${e.image_url}`,
            h = [{ id: e.id, image_url: u, alt_text: e.name }]
          return (0, s.jsxs)('div', {
            className: 'container mx-auto px-4 py-24',
            children: [
              (0, s.jsxs)('h1', {
                className: 'text-3xl font-bold text-center mb-8',
                children: [e.name, ' - 16pt Matte Business Cards'],
              }),
              (0, s.jsxs)('div', {
                className: 'grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8',
                children: [
                  (0, s.jsx)(i.A, { images: h }),
                  (0, s.jsxs)('div', {
                    className: 'space-y-6',
                    children: [
                      (0, s.jsx)(l.A, {
                        productId: 5536,
                        onPriceUpdate: d,
                        onOptionsChange: (e) => console.log('Selected options:', e),
                      }),
                      (0, s.jsx)(o.A, {
                        productId: 5536,
                        basePrice: r,
                        pricing: e.pricing,
                        options: e.options,
                        selectedOptions: {},
                        finalPrice: r,
                        price: r,
                      }),
                      (0, s.jsxs)('div', {
                        className: 'flex gap-4 flex-wrap',
                        children: [
                          (0, s.jsx)('button', {
                            className:
                              'bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded shadow',
                            children: 'Upload Artwork',
                          }),
                          (0, s.jsx)('button', {
                            className:
                              'bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded shadow',
                            children: 'Calculate Shipping',
                          }),
                          (0, s.jsx)('button', {
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
              (0, s.jsx)('div', {
                className: 'mt-24',
                children: (0, s.jsx)(n.A, {
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
      26182: (e, t, r) => {
        'use strict'
        r.d(t, { A: () => i })
        var s = r(24518),
          a = r(76615)
        let i = ({ productId: e, onOptionsChange: t, onPriceUpdate: r }) => {
          let [i, o] = (0, a.useState)([]),
            [n, l] = (0, a.useState)({}),
            [d, c] = (0, a.useState)(''),
            [p, u] = (0, a.useState)(!0)
          ;(0, a.useEffect)(() => {
            ;(async () => {
              try {
                let t = await fetch(`http://192.168.0.100:8000/api/v1/products/${e}/options`)
                if (!t.ok) throw Error(`Failed with status ${t.status}`)
                let r = await t.json()
                o(r)
              } catch (e) {
                console.error('Failed to fetch product options:', e),
                  c('Failed to load product options.')
              } finally {
                u(!1)
              }
            })()
          }, [e])
          let h = (e, s) => {
            let a = { ...n, [e]: s }
            l(a), t(a), r && r((100 * Math.random()).toFixed(2))
          }
          return d
            ? (0, s.jsx)('p', { className: 'text-red-500', children: d })
            : p
              ? (0, s.jsx)('p', { children: 'Loading product options...' })
              : (0, s.jsx)('div', {
                  className: 'space-y-4',
                  children: i.map((e) =>
                    (0, s.jsxs)(
                      'div',
                      {
                        children: [
                          (0, s.jsx)('label', {
                            className: 'block font-semibold mb-1',
                            children: e.group,
                          }),
                          (0, s.jsxs)('select', {
                            className: 'w-full border rounded px-3 py-2',
                            onChange: (t) => h(e.group, parseInt(t.target.value)),
                            value: n[e.group] || '',
                            children: [
                              (0, s.jsxs)('option', {
                                value: '',
                                disabled: !0,
                                children: ['Select ', e.group],
                              }),
                              e.options.map((e) =>
                                (0, s.jsx)('option', { value: e.id, children: e.name }, e.id)
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
      29958: (e, t, r) => {
        'use strict'
        r.r(t),
          r.d(t, {
            GlobalError: () => o.a,
            __next_app__: () => p,
            pages: () => c,
            routeModule: () => u,
            tree: () => d,
          })
        var s = r(11892),
          a = r(12875),
          i = r(75043),
          o = r.n(i),
          n = r(28188),
          l = {}
        for (let e in n)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', '__next_app__', 'routeModule'].indexOf(e) &&
            (l[e] = () => n[e])
        r.d(t, l)
        let d = {
            children: [
              '',
              {
                children: [
                  'print-products',
                  {
                    children: [
                      'brochures',
                      {
                        children: [
                          'gloss',
                          {
                            children: [
                              '__PAGE__',
                              {},
                              {
                                page: [
                                  () => Promise.resolve().then(r.bind(r, 66070)),
                                  '/var/www/deploy-adap/src/app/print-products/brochures/gloss/page.tsx',
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
          c = ['/var/www/deploy-adap/src/app/print-products/brochures/gloss/page.tsx'],
          p = { require: r, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: '/print-products/brochures/gloss/page',
              pathname: '/print-products/brochures/gloss',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: d },
          })
      },
      30324: (e, t, r) => {
        'use strict'
        r.d(t, { A: () => o })
        var s = r(24518),
          a = r(76615),
          i = r(79797)
        function o({ images: e }) {
          let t = Array.isArray(e) ? e : [],
            [r, o] = (0, a.useState)(t?.[0]?.image_url || '')
          return 0 === t.length
            ? (0, s.jsx)('p', { children: 'No images available' })
            : (0, s.jsxs)('div', {
                className: 'flex flex-col gap-4 items-center',
                children: [
                  (0, s.jsx)('div', {
                    className:
                      'w-full mt-20 h-[400px] bg-gray-100 rounded-lg shadow flex items-center justify-center',
                    children: r
                      ? (0, s.jsx)(i.default, {
                          src: r,
                          alt: t[0]?.alt_text || 'Main Product Image',
                          width: 400,
                          height: 400,
                          className: 'rounded-lg shadow',
                        })
                      : (0, s.jsx)('p', { children: 'No image available' }),
                  }),
                  t.length > 1 &&
                    (0, s.jsx)('div', {
                      className: 'flex gap-2 overflow-x-auto mt-4',
                      children: t.slice(1).map((e) =>
                        (0, s.jsx)(
                          'div',
                          {
                            onClick: () => o(e.image_url),
                            className:
                              'cursor-pointer transition-transform transform hover:scale-105',
                            children: (0, s.jsx)(i.default, {
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
      56026: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 21348))
      },
      62222: (e, t, r) => {
        'use strict'
        r.d(t, { A: () => p })
        var s = r(24518),
          a = r(76615),
          i = r(67242)
        function o(...e) {
          return e.filter(Boolean).join(' ')
        }
        let n = i.bL,
          l = a.forwardRef(({ className: e, ...t }, r) =>
            (0, s.jsx)(i.B8, {
              ref: r,
              className: o(
                'inline-flex items-center justify-center rounded-lg bg-muted p-1',
                e || ''
              ),
              ...t,
            })
          )
        l.displayName = 'TabsList'
        let d = a.forwardRef(({ className: e, ...t }, r) =>
          (0, s.jsx)(i.l9, {
            ref: r,
            className: o(
              'inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 rounded text-sm font-medium ring-offset-background transition-colors',
              'data-[state=active]:bg-primary data-[state=active]:text-white',
              e || ''
            ),
            ...t,
          })
        )
        d.displayName = 'TabsTrigger'
        let c = a.forwardRef(({ className: e, ...t }, r) =>
          (0, s.jsx)(i.UC, { ref: r, className: o('mt-2', e || ''), ...t })
        )
        c.displayName = 'TabsContent'
        let p = ({ description: e, attributes: t, rating: r, reviewCount: a }) =>
          (0, s.jsxs)(n, {
            defaultValue: 'details',
            children: [
              (0, s.jsxs)(l, {
                children: [
                  (0, s.jsx)(d, { value: 'details', children: 'Details' }),
                  (0, s.jsxs)(d, { value: 'reviews', children: ['Reviews (', a, ')'] }),
                ],
              }),
              (0, s.jsx)(c, {
                value: 'details',
                children: (0, s.jsxs)('div', {
                  className: 'p-4 bg-white shadow rounded',
                  children: [
                    (0, s.jsx)('p', { className: 'mb-4', children: e }),
                    t &&
                      (0, s.jsx)('ul', {
                        children: Object.entries(t).map(([e, t]) =>
                          (0, s.jsxs)(
                            'li',
                            { children: [(0, s.jsxs)('strong', { children: [e, ':'] }), ' ', t] },
                            e
                          )
                        ),
                      }),
                  ],
                }),
              }),
              (0, s.jsx)(c, {
                value: 'reviews',
                children: (0, s.jsxs)('div', {
                  className: 'p-4 bg-white shadow rounded',
                  children: [
                    (0, s.jsxs)('p', { children: ['Rating: ', r ?? 'No ratings yet.'] }),
                    (0, s.jsxs)('p', { children: [a, ' reviews'] }),
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
      66070: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => s })
        let s = (0, r(56968).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/var/www/deploy-adap/src/app/print-products/brochures/gloss/page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            )
          },
          '/var/www/deploy-adap/src/app/print-products/brochures/gloss/page.tsx',
          'default'
        )
      },
      79297: (e, t, r) => {
        'use strict'
        r.d(t, { A: () => a })
        var s = r(24518)
        r(76615)
        let a = ({ pricing: e, selectedOptions: t, basePrice: r, finalPrice: a }) => {
          let i = Array.isArray(e) ? e : [],
            o = Object.values(t || {}).join('-'),
            n = i.find((e) => e.option_hash === o),
            l = n?.base_price ?? r
          return (
            parseFloat(l) !== parseFloat(a),
            (0, s.jsxs)('div', {
              children: [
                (0, s.jsxs)('p', { children: ['Base Price: ', r] }),
                (0, s.jsxs)('p', { children: ['Final Price: ', a] }),
                (0, s.jsxs)('p', { children: ['New Price: ', l] }),
              ],
            })
          )
        }
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
  var t = require('../../../../webpack-runtime.js')
  t.C(e)
  var r = (e) => t((t.s = e)),
    s = t.X(0, [7920, 1813, 7242, 3245], () => r(29958))
  module.exports = s
})()
