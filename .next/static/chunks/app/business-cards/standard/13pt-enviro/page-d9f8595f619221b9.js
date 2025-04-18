;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6312],
  {
    20298: (e, t, a) => {
      'use strict'
      a.d(t, { A: () => s })
      var r = a(86202),
        l = a(25234)
      let s = (e) => {
        let { productId: t, onOptionsChange: a, onPriceUpdate: s } = e,
          [i, o] = (0, l.useState)([]),
          [n, c] = (0, l.useState)({}),
          [d, u] = (0, l.useState)(''),
          [p, h] = (0, l.useState)(!0)
        ;(0, l.useEffect)(() => {
          ;(async () => {
            try {
              let e = await fetch(
                'http://192.168.0.100:8000/api/v1/products/'.concat(t, '/options')
              )
              if (!e.ok) throw Error('Failed with status '.concat(e.status))
              let a = await e.json()
              o(a)
            } catch (e) {
              console.error('Failed to fetch product options:', e),
                u('Failed to load product options.')
            } finally {
              h(!1)
            }
          })()
        }, [t])
        let x = (e, t) => {
          let r = { ...n, [e]: t }
          c(r), a(r), s && s((100 * Math.random()).toFixed(2))
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
                          value: n[e.group] || '',
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
    31030: (e, t, a) => {
      'use strict'
      a.r(t), a.d(t, { default: () => n })
      var r = a(86202),
        l = a(25234),
        s = a(72094),
        i = a(48213),
        o = a(20298)
      let n = () => {
        var e, t
        let [a, n] = (0, l.useState)(null),
          [c, d] = (0, l.useState)({}),
          [u, p] = (0, l.useState)('0.00'),
          [h, x] = (0, l.useState)(''),
          [m, f] = (0, l.useState)([])
        ;(0, l.useEffect)(() => {
          ;(async () => {
            try {
              let e = await fetch('http://192.168.0.100:8000/api/v1/products/'.concat(13), {
                cache: 'no-store',
              })
              if (!e.ok) throw Error('Fetch failed with status '.concat(e.status))
              let t = await e.json()
              n(t)
            } catch (e) {
              console.error('Error fetching product data:', e),
                x('Failed to load product data. Please try again later.')
            }
          })()
        }, [13])
        let g = async (e) => {
          console.log(
            'Generated option_chain:',
            Object.values(e)
              .map(Number)
              .sort((e, t) => e - t)
              .join('-')
          )
          try {
            let t = await fetch('http://192.168.0.100:8000/api/v1/calculateFinalPrice', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ product_id: 13, options: e }),
              }),
              a = await t.text()
            if ((console.log('API Response Text:', a), !t.ok))
              throw Error('Failed to fetch price: '.concat(a))
            let r = await t.json()
            console.log('Fetched Price Data:', r),
              r && r.final_price
                ? p(r.final_price.toFixed(2))
                : (console.error('No final price returned from API.'), p('0.00'))
          } catch (e) {
            console.error('Error fetching price:', e), p('0.00')
          }
        }
        if (h)
          return (0, r.jsx)('div', {
            className: 'container mx-auto px-4 py-24',
            children: (0, r.jsx)('p', { className: 'text-center text-red-500', children: h }),
          })
        if (!a)
          return (0, r.jsx)('div', {
            className: 'container mx-auto px-4 py-24',
            children: (0, r.jsx)('p', { className: 'text-center', children: 'Loading...' }),
          })
        let v = null == a || null == (e = a.pricing) ? void 0 : e[0]
        parseFloat((null == v ? void 0 : v.weight_per_box) || '0'),
          parseInt((null == v ? void 0 : v.number_of_boxes) || '1')
        let [j, b, N] = (null == v || null == (t = v.box_size)
          ? void 0
          : t.split(' x ').map(Number)) || [0, 0, 0]
        return (0, r.jsxs)('div', {
          className: 'container mx-auto px-4 py-24',
          children: [
            (0, r.jsxs)('h1', {
              className: 'text-3xl font-bold text-center mb-8',
              children: [a.name, ' - 13pt Enviro Business Cards'],
            }),
            (0, r.jsxs)('div', {
              className: 'grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8',
              children: [
                (0, r.jsx)(s.A, { images: a.images }),
                (0, r.jsxs)('div', {
                  className: 'space-y-6',
                  children: [
                    (0, r.jsx)(o.A, {
                      productId: 13,
                      onOptionsChange: (e) => {
                        d(e), g(e)
                      },
                    }),
                    (0, r.jsx)(i.A, {
                      pricing: [v],
                      selectedOptions: c,
                      basePrice: (null == a ? void 0 : a.price) || '0.00',
                      finalPrice: u,
                      productId: (null == a ? void 0 : a.id) || 0,
                      options: (null == a ? void 0 : a.options) || [],
                      price: (null == a ? void 0 : a.price) || '0.00',
                    }),
                    (0, r.jsx)('div', {
                      className: 'flex gap-4 flex-wrap',
                      children: (0, r.jsx)('button', {
                        className:
                          'bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded shadow',
                        children: 'Upload Artwork',
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
    },
    48213: (e, t, a) => {
      'use strict'
      a.d(t, { A: () => l })
      var r = a(86202)
      a(25234)
      let l = (e) => {
        var t
        let { pricing: a, selectedOptions: l, basePrice: s, finalPrice: i } = e,
          o = Array.isArray(a) ? a : [],
          n = Object.values(l || {}).join('-'),
          c = o.find((e) => e.option_hash === n),
          d = null != (t = null == c ? void 0 : c.base_price) ? t : s
        return (
          parseFloat(d) !== parseFloat(i),
          (0, r.jsxs)('div', {
            children: [
              (0, r.jsxs)('p', { children: ['Base Price: ', s] }),
              (0, r.jsxs)('p', { children: ['Final Price: ', i] }),
              (0, r.jsxs)('p', { children: ['New Price: ', d] }),
            ],
          })
        )
      }
    },
    53631: (e, t, a) => {
      'use strict'
      a.d(t, { default: () => l.a })
      var r = a(85668),
        l = a.n(r)
    },
    57352: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 31030))
    },
    72094: (e, t, a) => {
      'use strict'
      a.d(t, { A: () => i })
      var r = a(86202),
        l = a(25234),
        s = a(53631)
      function i(e) {
        var t, a
        let { images: i } = e,
          o = Array.isArray(i) ? i : [],
          [n, c] = (0, l.useState)((null == o || null == (t = o[0]) ? void 0 : t.image_url) || '')
        return 0 === o.length
          ? (0, r.jsx)('p', { children: 'No images available' })
          : (0, r.jsxs)('div', {
              className: 'flex flex-col gap-4 items-center',
              children: [
                (0, r.jsx)('div', {
                  className:
                    'w-full mt-20 h-[400px] bg-gray-100 rounded-lg shadow flex items-center justify-center',
                  children: n
                    ? (0, r.jsx)(s.default, {
                        src: n,
                        alt: (null == (a = o[0]) ? void 0 : a.alt_text) || 'Main Product Image',
                        width: 400,
                        height: 400,
                        className: 'rounded-lg shadow',
                      })
                    : (0, r.jsx)('p', { children: 'No image available' }),
                }),
                o.length > 1 &&
                  (0, r.jsx)('div', {
                    className: 'flex gap-2 overflow-x-auto mt-4',
                    children: o.slice(1).map((e) =>
                      (0, r.jsx)(
                        'div',
                        {
                          onClick: () => c(e.image_url),
                          className:
                            'cursor-pointer transition-transform transform hover:scale-105',
                          children: (0, r.jsx)(s.default, {
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
    85668: (e, t, a) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var a in t) Object.defineProperty(e, a, { enumerable: !0, get: t[a] })
        })(t, {
          default: function () {
            return n
          },
          getImageProps: function () {
            return o
          },
        })
      let r = a(60283),
        l = a(80680),
        s = a(49460),
        i = r._(a(83180))
      function o(e) {
        let { props: t } = (0, l.getImgProps)(e, {
          defaultLoader: i.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: '/_next/image',
            loader: 'default',
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        })
        for (let [e, a] of Object.entries(t)) void 0 === a && delete t[e]
        return { props: t }
      }
      let n = s.Image
    },
  },
  (e) => {
    var t = (t) => e((e.s = t))
    e.O(0, [9460, 3623, 6605, 7358], () => t(57352)), (_N_E = e.O())
  },
])
