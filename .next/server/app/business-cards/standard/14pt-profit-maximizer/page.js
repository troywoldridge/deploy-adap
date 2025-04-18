;(() => {
  var e = {}
  ;(e.id = 4917),
    (e.ids = [4917]),
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
      24146: (e, t, r) => {
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
                  'business-cards',
                  {
                    children: [
                      'standard',
                      {
                        children: [
                          '14pt-profit-maximizer',
                          {
                            children: [
                              '__PAGE__',
                              {},
                              {
                                page: [
                                  () => Promise.resolve().then(r.bind(r, 59099)),
                                  '/var/www/deploy-adap/src/app/business-cards/standard/14pt-profit-maximizer/page.tsx',
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
          c = [
            '/var/www/deploy-adap/src/app/business-cards/standard/14pt-profit-maximizer/page.tsx',
          ],
          p = { require: r, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: '/business-cards/standard/14pt-profit-maximizer/page',
              pathname: '/business-cards/standard/14pt-profit-maximizer',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: d },
          })
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
      28109: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 59099))
      },
      29294: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js')
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
      34489: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => u })
        var s = r(24518),
          a = r(76615),
          i = r.n(a),
          o = r(30324),
          n = r(79297),
          l = r(26182)
        let d = ({ productId: e, selectedOptions: t, sinaliteId: r }) => {
          let [a, o] = c({ city: '', state: '', postalCode: '' }),
            [n, l] = c(null),
            [d, p] = c(!1),
            [u, h] = c(null),
            x = (e) => {
              o({ ...a, [e.target.name]: e.target.value })
            },
            m = (function (e, t) {
              let [r, s] = i().useState(e)
              return r
            })(() => Object.values(t).sort().join('-'), 0),
            g = async () => {
              if (!e || !t || !r)
                return void h('Please select product options and ensure Sinalite ID is provided.')
              p(!0), h(null)
              try {
                let t
                console.log('\uD83D\uDE9B Fetching shipping for product:', e),
                  console.log('Option Chain:', m),
                  console.log('Sinalite ID:', r)
                let s = await fetch(
                    `http://192.168.0.100:8000/api/v1/shipping-details/${e}/${m}?sinaliteId=${r}`
                  ),
                  a = await s.text()
                console.log('Raw Response:', a)
                try {
                  t = JSON.parse(a)
                } catch (e) {
                  console.error('Failed to parse JSON:', e),
                    h('Invalid response from the server.'),
                    p(!1)
                  return
                }
                if (!s.ok || !t.weight_per_box || !t.box_size) {
                  h('Shipping details are missing or invalid.'), p(!1)
                  return
                }
                l(t)
              } catch (e) {
                console.error('�� Error:', e), h('Failed to fetch shipping estimate.')
              } finally {
                p(!1)
              }
            }
          return (0, s.jsxs)('div', {
            className: 'p-4 border rounded-lg shadow-md',
            children: [
              (0, s.jsx)('h3', {
                className: 'text-lg font-semibold mb-2',
                children: 'Calculate Shipping',
              }),
              d
                ? (0, s.jsx)('div', { children: 'Loading...' })
                : u
                  ? (0, s.jsx)('div', { className: 'text-red-500', children: u })
                  : n
                    ? (0, s.jsxs)('div', {
                        children: [
                          (0, s.jsxs)('p', {
                            children: [
                              (0, s.jsx)('strong', { children: 'Weight per Box:' }),
                              ' ',
                              n.weight_per_box,
                              ' lbs',
                            ],
                          }),
                          (0, s.jsxs)('p', {
                            children: [
                              (0, s.jsx)('strong', { children: 'Box Size:' }),
                              ' ',
                              n.box_size,
                            ],
                          }),
                          (0, s.jsxs)('p', {
                            children: [
                              (0, s.jsx)('strong', { children: 'Package Size:' }),
                              ' ',
                              n.package_size,
                            ],
                          }),
                          (0, s.jsxs)('p', {
                            className: 'font-bold',
                            children: [
                              (0, s.jsx)('strong', { children: 'Estimated Shipping Cost:' }),
                              ' $',
                              n.shipping_cost,
                            ],
                          }),
                        ],
                      })
                    : (0, s.jsxs)('div', {
                        className: 'space-y-2',
                        children: [
                          (0, s.jsx)('input', {
                            type: 'text',
                            name: 'city',
                            value: a.city,
                            onChange: x,
                            placeholder: 'City',
                            className: 'border p-2 w-full',
                          }),
                          (0, s.jsx)('input', {
                            type: 'text',
                            name: 'state',
                            value: a.state,
                            onChange: x,
                            placeholder: 'State',
                            className: 'border p-2 w-full',
                          }),
                          (0, s.jsx)('input', {
                            type: 'text',
                            name: 'postalCode',
                            value: a.postalCode,
                            onChange: x,
                            placeholder: 'Postal Code',
                            className: 'border p-2 w-full',
                          }),
                          (0, s.jsx)('button', {
                            onClick: g,
                            className: 'mt-2 bg-blue-500 text-white py-2 px-4 rounded',
                            children: 'Get Estimate',
                          }),
                        ],
                      }),
            ],
          })
        }
        function c(e) {
          return i().useState(e)
        }
        let p = ({ product: e, ...t }) =>
            (0, s.jsxs)('div', {
              children: [
                (0, s.jsx)('h2', { children: 'Product Details' }),
                (0, s.jsx)('p', { children: e.description }),
              ],
            }),
          u = () => {
            let [e] = (0, a.useState)(1),
              [t, r] = (0, a.useState)(null),
              [i, c] = (0, a.useState)(''),
              [u, h] = (0, a.useState)(''),
              [x, m] = (0, a.useState)({}),
              [g, f] = (0, a.useState)(!0)
            if (
              ((0, a.useEffect)(() => {
                ;(async () => {
                  try {
                    let e = await fetch('http://192.168.0.100:8000/api/v1/products/by-sinalite/1', {
                      cache: 'no-store',
                    })
                    if (!e.ok) throw Error(`Failed to fetch product: ${e.statusText}`)
                    let t = await e.text()
                    if (
                      (console.log('Raw API Response:', t),
                      t.trim().startsWith('{') || t.trim().startsWith('['))
                    ) {
                      let e = JSON.parse(t)
                      r(e), c(e.price), f(!1)
                    } else throw Error('Received invalid response format from API')
                  } catch (e) {
                    console.error('Error fetching product data:', e),
                      h('Failed to load product data. Please try again later.'),
                      f(!1)
                  }
                })()
              }, []),
              u)
            )
              return (0, s.jsx)('div', {
                className: 'container mx-auto px-4 py-24',
                children: (0, s.jsx)('p', { className: 'text-center text-red-500', children: u }),
              })
            if (g)
              return (0, s.jsx)('div', {
                className: 'container mx-auto px-4 py-24',
                children: (0, s.jsx)('p', { className: 'text-center', children: 'Loading...' }),
              })
            if (!t)
              return (0, s.jsx)('div', {
                className: 'container mx-auto px-4 py-24',
                children: (0, s.jsx)('p', {
                  className: 'text-center',
                  children: 'No product data found',
                }),
              })
            let v =
                t.image_url && t.image_url.startsWith('http')
                  ? t.image_url
                  : `https://d12ufawtd6351k.cloudfront.net${t.image_url || ''}`,
              j = [{ id: t.id, image_url: v, alt_text: t.name }]
            return (0, s.jsxs)('div', {
              className: 'container mx-auto px-4 py-24',
              children: [
                (0, s.jsx)('h1', {
                  className: 'text-3xl font-bold text-center mb-8',
                  children: t.name,
                }),
                (0, s.jsxs)('div', {
                  className: 'grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8',
                  children: [
                    (0, s.jsx)(o.A, { images: j }),
                    (0, s.jsxs)('div', {
                      className: 'space-y-6',
                      children: [
                        (0, s.jsx)(l.A, {
                          productId: e,
                          onOptionsChange: (e) => {
                            console.log('Selected options:', e),
                              m(
                                Object.fromEntries(
                                  Object.entries(e).map(([e, t]) => [e, t.toString()])
                                )
                              )
                          },
                        }),
                        (0, s.jsx)(n.A, {
                          productId: e,
                          basePrice: i,
                          pricing: t.pricing,
                          options: t.options,
                          selectedOptions: {},
                          finalPrice: i,
                          price: i,
                        }),
                        (0, s.jsxs)('div', {
                          className: 'flex gap-4 flex-wrap',
                          children: [
                            (0, s.jsx)('button', {
                              className:
                                'bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded shadow',
                              children: 'Upload Artwork',
                            }),
                            (0, s.jsx)('button', {
                              className:
                                'bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow',
                              children: 'Add to Cart',
                            }),
                          ],
                        }),
                        (0, s.jsx)(d, {
                          productId: t.id,
                          selectedOptions: x,
                          sinaliteId: t.sinalite_id.toString(),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(p, { product: t }),
              ],
            })
          }
      },
      55511: (e) => {
        'use strict'
        e.exports = require('crypto')
      },
      55591: (e) => {
        'use strict'
        e.exports = require('https')
      },
      59099: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => s })
        let s = (0, r(56968).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/var/www/deploy-adap/src/app/business-cards/standard/14pt-profit-maximizer/page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            )
          },
          '/var/www/deploy-adap/src/app/business-cards/standard/14pt-profit-maximizer/page.tsx',
          'default'
        )
      },
      63033: (e) => {
        'use strict'
        e.exports = require('next/dist/server/app-render/work-unit-async-storage.external.js')
      },
      75373: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 34489))
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
    s = t.X(0, [7920, 1813, 3245], () => r(24146))
  module.exports = s
})()
