;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4917],
  {
    20298: (e, t, s) => {
      'use strict'
      s.d(t, { A: () => i })
      var a = s(86202),
        r = s(25234)
      let i = (e) => {
        let { productId: t, onOptionsChange: s, onPriceUpdate: i } = e,
          [l, n] = (0, r.useState)([]),
          [o, c] = (0, r.useState)({}),
          [d, u] = (0, r.useState)(''),
          [p, h] = (0, r.useState)(!0)
        ;(0, r.useEffect)(() => {
          ;(async () => {
            try {
              let e = await fetch(
                'http://192.168.0.100:8000/api/v1/products/'.concat(t, '/options')
              )
              if (!e.ok) throw Error('Failed with status '.concat(e.status))
              let s = await e.json()
              n(s)
            } catch (e) {
              console.error('Failed to fetch product options:', e),
                u('Failed to load product options.')
            } finally {
              h(!1)
            }
          })()
        }, [t])
        let x = (e, t) => {
          let a = { ...o, [e]: t }
          c(a), s(a), i && i((100 * Math.random()).toFixed(2))
        }
        return d
          ? (0, a.jsx)('p', { className: 'text-red-500', children: d })
          : p
            ? (0, a.jsx)('p', { children: 'Loading product options...' })
            : (0, a.jsx)('div', {
                className: 'space-y-4',
                children: l.map((e) =>
                  (0, a.jsxs)(
                    'div',
                    {
                      children: [
                        (0, a.jsx)('label', {
                          className: 'block font-semibold mb-1',
                          children: e.group,
                        }),
                        (0, a.jsxs)('select', {
                          className: 'w-full border rounded px-3 py-2',
                          onChange: (t) => x(e.group, parseInt(t.target.value)),
                          value: o[e.group] || '',
                          children: [
                            (0, a.jsxs)('option', {
                              value: '',
                              disabled: !0,
                              children: ['Select ', e.group],
                            }),
                            e.options.map((e) =>
                              (0, a.jsx)('option', { value: e.id, children: e.name }, e.id)
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
    31966: (e, t, s) => {
      'use strict'
      s.r(t), s.d(t, { default: () => u })
      var a = s(86202),
        r = s(25234),
        i = s(72094),
        l = s(48213),
        n = s(20298)
      let o = (e) => {
        let { productId: t, selectedOptions: s, sinaliteId: i } = e,
          [l, n] = c({ city: '', state: '', postalCode: '' }),
          [o, d] = c(null),
          [u, p] = c(!1),
          [h, x] = c(null),
          m = (e) => {
            n({ ...l, [e.target.name]: e.target.value })
          },
          g = (function (e, t) {
            let [s, a] = r.useState(e)
            return (
              r.useEffect(() => {
                a(e())
              }, t),
              s
            )
          })(() => Object.values(s).sort().join('-'), [s]),
          f = async () => {
            if (!t || !s || !i)
              return void x('Please select product options and ensure Sinalite ID is provided.')
            p(!0), x(null)
            try {
              let e
              console.log('\uD83D\uDE9B Fetching shipping for product:', t),
                console.log('Option Chain:', g),
                console.log('Sinalite ID:', i)
              let s = await fetch(
                  'http://192.168.0.100:8000/api/v1/shipping-details/'
                    .concat(t, '/')
                    .concat(g, '?sinaliteId=')
                    .concat(i)
                ),
                a = await s.text()
              console.log('Raw Response:', a)
              try {
                e = JSON.parse(a)
              } catch (e) {
                console.error('Failed to parse JSON:', e),
                  x('Invalid response from the server.'),
                  p(!1)
                return
              }
              if (!s.ok || !e.weight_per_box || !e.box_size) {
                x('Shipping details are missing or invalid.'), p(!1)
                return
              }
              d(e)
            } catch (e) {
              console.error('�� Error:', e), x('Failed to fetch shipping estimate.')
            } finally {
              p(!1)
            }
          }
        return (0, a.jsxs)('div', {
          className: 'p-4 border rounded-lg shadow-md',
          children: [
            (0, a.jsx)('h3', {
              className: 'text-lg font-semibold mb-2',
              children: 'Calculate Shipping',
            }),
            u
              ? (0, a.jsx)('div', { children: 'Loading...' })
              : h
                ? (0, a.jsx)('div', { className: 'text-red-500', children: h })
                : o
                  ? (0, a.jsxs)('div', {
                      children: [
                        (0, a.jsxs)('p', {
                          children: [
                            (0, a.jsx)('strong', { children: 'Weight per Box:' }),
                            ' ',
                            o.weight_per_box,
                            ' lbs',
                          ],
                        }),
                        (0, a.jsxs)('p', {
                          children: [
                            (0, a.jsx)('strong', { children: 'Box Size:' }),
                            ' ',
                            o.box_size,
                          ],
                        }),
                        (0, a.jsxs)('p', {
                          children: [
                            (0, a.jsx)('strong', { children: 'Package Size:' }),
                            ' ',
                            o.package_size,
                          ],
                        }),
                        (0, a.jsxs)('p', {
                          className: 'font-bold',
                          children: [
                            (0, a.jsx)('strong', { children: 'Estimated Shipping Cost:' }),
                            ' $',
                            o.shipping_cost,
                          ],
                        }),
                      ],
                    })
                  : (0, a.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, a.jsx)('input', {
                          type: 'text',
                          name: 'city',
                          value: l.city,
                          onChange: m,
                          placeholder: 'City',
                          className: 'border p-2 w-full',
                        }),
                        (0, a.jsx)('input', {
                          type: 'text',
                          name: 'state',
                          value: l.state,
                          onChange: m,
                          placeholder: 'State',
                          className: 'border p-2 w-full',
                        }),
                        (0, a.jsx)('input', {
                          type: 'text',
                          name: 'postalCode',
                          value: l.postalCode,
                          onChange: m,
                          placeholder: 'Postal Code',
                          className: 'border p-2 w-full',
                        }),
                        (0, a.jsx)('button', {
                          onClick: f,
                          className: 'mt-2 bg-blue-500 text-white py-2 px-4 rounded',
                          children: 'Get Estimate',
                        }),
                      ],
                    }),
          ],
        })
      }
      function c(e) {
        return r.useState(e)
      }
      let d = (e) => {
          let { product: t, ...s } = e
          return (0, a.jsxs)('div', {
            children: [
              (0, a.jsx)('h2', { children: 'Product Details' }),
              (0, a.jsx)('p', { children: t.description }),
            ],
          })
        },
        u = () => {
          let [e] = (0, r.useState)(1),
            [t, s] = (0, r.useState)(null),
            [c, u] = (0, r.useState)(''),
            [p, h] = (0, r.useState)(''),
            [x, m] = (0, r.useState)({}),
            [g, f] = (0, r.useState)(!0)
          if (
            ((0, r.useEffect)(() => {
              ;(async () => {
                try {
                  let e = await fetch(
                    'http://192.168.0.100:8000/api/v1/products/by-sinalite/'.concat(1),
                    { cache: 'no-store' }
                  )
                  if (!e.ok) throw Error('Failed to fetch product: '.concat(e.statusText))
                  let t = await e.text()
                  if (
                    (console.log('Raw API Response:', t),
                    t.trim().startsWith('{') || t.trim().startsWith('['))
                  ) {
                    let e = JSON.parse(t)
                    s(e), u(e.price), f(!1)
                  } else throw Error('Received invalid response format from API')
                } catch (e) {
                  console.error('Error fetching product data:', e),
                    h('Failed to load product data. Please try again later.'),
                    f(!1)
                }
              })()
            }, []),
            p)
          )
            return (0, a.jsx)('div', {
              className: 'container mx-auto px-4 py-24',
              children: (0, a.jsx)('p', { className: 'text-center text-red-500', children: p }),
            })
          if (g)
            return (0, a.jsx)('div', {
              className: 'container mx-auto px-4 py-24',
              children: (0, a.jsx)('p', { className: 'text-center', children: 'Loading...' }),
            })
          if (!t)
            return (0, a.jsx)('div', {
              className: 'container mx-auto px-4 py-24',
              children: (0, a.jsx)('p', {
                className: 'text-center',
                children: 'No product data found',
              }),
            })
          let j =
              t.image_url && t.image_url.startsWith('http')
                ? t.image_url
                : ''.concat('https://d12ufawtd6351k.cloudfront.net').concat(t.image_url || ''),
            v = [{ id: t.id, image_url: j, alt_text: t.name }]
          return (0, a.jsxs)('div', {
            className: 'container mx-auto px-4 py-24',
            children: [
              (0, a.jsx)('h1', {
                className: 'text-3xl font-bold text-center mb-8',
                children: t.name,
              }),
              (0, a.jsxs)('div', {
                className: 'grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8',
                children: [
                  (0, a.jsx)(i.A, { images: v }),
                  (0, a.jsxs)('div', {
                    className: 'space-y-6',
                    children: [
                      (0, a.jsx)(n.A, {
                        productId: e,
                        onOptionsChange: (e) => {
                          console.log('Selected options:', e),
                            m(
                              Object.fromEntries(
                                Object.entries(e).map((e) => {
                                  let [t, s] = e
                                  return [t, s.toString()]
                                })
                              )
                            )
                        },
                      }),
                      (0, a.jsx)(l.A, {
                        productId: e,
                        basePrice: c,
                        pricing: t.pricing,
                        options: t.options,
                        selectedOptions: {},
                        finalPrice: c,
                        price: c,
                      }),
                      (0, a.jsxs)('div', {
                        className: 'flex gap-4 flex-wrap',
                        children: [
                          (0, a.jsx)('button', {
                            className:
                              'bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded shadow',
                            children: 'Upload Artwork',
                          }),
                          (0, a.jsx)('button', {
                            className:
                              'bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow',
                            children: 'Add to Cart',
                          }),
                        ],
                      }),
                      (0, a.jsx)(o, {
                        productId: t.id,
                        selectedOptions: x,
                        sinaliteId: t.sinalite_id.toString(),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(d, { product: t }),
            ],
          })
        }
    },
    48213: (e, t, s) => {
      'use strict'
      s.d(t, { A: () => r })
      var a = s(86202)
      s(25234)
      let r = (e) => {
        var t
        let { pricing: s, selectedOptions: r, basePrice: i, finalPrice: l } = e,
          n = Array.isArray(s) ? s : [],
          o = Object.values(r || {}).join('-'),
          c = n.find((e) => e.option_hash === o),
          d = null != (t = null == c ? void 0 : c.base_price) ? t : i
        return (
          parseFloat(d) !== parseFloat(l),
          (0, a.jsxs)('div', {
            children: [
              (0, a.jsxs)('p', { children: ['Base Price: ', i] }),
              (0, a.jsxs)('p', { children: ['Final Price: ', l] }),
              (0, a.jsxs)('p', { children: ['New Price: ', d] }),
            ],
          })
        )
      }
    },
    53631: (e, t, s) => {
      'use strict'
      s.d(t, { default: () => r.a })
      var a = s(85668),
        r = s.n(a)
    },
    72094: (e, t, s) => {
      'use strict'
      s.d(t, { A: () => l })
      var a = s(86202),
        r = s(25234),
        i = s(53631)
      function l(e) {
        var t, s
        let { images: l } = e,
          n = Array.isArray(l) ? l : [],
          [o, c] = (0, r.useState)((null == n || null == (t = n[0]) ? void 0 : t.image_url) || '')
        return 0 === n.length
          ? (0, a.jsx)('p', { children: 'No images available' })
          : (0, a.jsxs)('div', {
              className: 'flex flex-col gap-4 items-center',
              children: [
                (0, a.jsx)('div', {
                  className:
                    'w-full mt-20 h-[400px] bg-gray-100 rounded-lg shadow flex items-center justify-center',
                  children: o
                    ? (0, a.jsx)(i.default, {
                        src: o,
                        alt: (null == (s = n[0]) ? void 0 : s.alt_text) || 'Main Product Image',
                        width: 400,
                        height: 400,
                        className: 'rounded-lg shadow',
                      })
                    : (0, a.jsx)('p', { children: 'No image available' }),
                }),
                n.length > 1 &&
                  (0, a.jsx)('div', {
                    className: 'flex gap-2 overflow-x-auto mt-4',
                    children: n
                      .slice(1)
                      .map((e) =>
                        (0, a.jsx)(
                          'div',
                          {
                            onClick: () => c(e.image_url),
                            className:
                              'cursor-pointer transition-transform transform hover:scale-105',
                            children: (0, a.jsx)(i.default, {
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
    73643: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 31966))
    },
    85668: (e, t, s) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var s in t) Object.defineProperty(e, s, { enumerable: !0, get: t[s] })
        })(t, {
          default: function () {
            return o
          },
          getImageProps: function () {
            return n
          },
        })
      let a = s(60283),
        r = s(80680),
        i = s(49460),
        l = a._(s(83180))
      function n(e) {
        let { props: t } = (0, r.getImgProps)(e, {
          defaultLoader: l.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: '/_next/image',
            loader: 'default',
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        })
        for (let [e, s] of Object.entries(t)) void 0 === s && delete t[e]
        return { props: t }
      }
      let o = i.Image
    },
  },
  (e) => {
    var t = (t) => e((e.s = t))
    e.O(0, [9460, 3623, 6605, 7358], () => t(73643)), (_N_E = e.O())
  },
])
