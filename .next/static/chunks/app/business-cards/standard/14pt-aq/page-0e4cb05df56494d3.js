;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8996],
  {
    10799: (e, t, a) => {
      'use strict'
      a.d(t, { A: () => u })
      var s = a(86202),
        r = a(25234),
        i = a(88375)
      function l() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a]
        return t.filter(Boolean).join(' ')
      }
      let n = i.bL,
        c = r.forwardRef((e, t) => {
          let { className: a, ...r } = e
          return (0, s.jsx)(i.B8, {
            ref: t,
            className: l(
              'inline-flex items-center justify-center rounded-lg bg-muted p-1',
              a || ''
            ),
            ...r,
          })
        })
      c.displayName = 'TabsList'
      let o = r.forwardRef((e, t) => {
        let { className: a, ...r } = e
        return (0, s.jsx)(i.l9, {
          ref: t,
          className: l(
            'inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 rounded text-sm font-medium ring-offset-background transition-colors',
            'data-[state=active]:bg-primary data-[state=active]:text-white',
            a || ''
          ),
          ...r,
        })
      })
      o.displayName = 'TabsTrigger'
      let d = r.forwardRef((e, t) => {
        let { className: a, ...r } = e
        return (0, s.jsx)(i.UC, { ref: t, className: l('mt-2', a || ''), ...r })
      })
      d.displayName = 'TabsContent'
      let u = (e) => {
        let { description: t, attributes: a, rating: r, reviewCount: i } = e
        return (0, s.jsxs)(n, {
          defaultValue: 'details',
          children: [
            (0, s.jsxs)(c, {
              children: [
                (0, s.jsx)(o, { value: 'details', children: 'Details' }),
                (0, s.jsxs)(o, { value: 'reviews', children: ['Reviews (', i, ')'] }),
              ],
            }),
            (0, s.jsx)(d, {
              value: 'details',
              children: (0, s.jsxs)('div', {
                className: 'p-4 bg-white shadow rounded',
                children: [
                  (0, s.jsx)('p', { className: 'mb-4', children: t }),
                  a &&
                    (0, s.jsx)('ul', {
                      children: Object.entries(a).map((e) => {
                        let [t, a] = e
                        return (0, s.jsxs)(
                          'li',
                          { children: [(0, s.jsxs)('strong', { children: [t, ':'] }), ' ', a] },
                          t
                        )
                      }),
                    }),
                ],
              }),
            }),
            (0, s.jsx)(d, {
              value: 'reviews',
              children: (0, s.jsxs)('div', {
                className: 'p-4 bg-white shadow rounded',
                children: [
                  (0, s.jsxs)('p', { children: ['Rating: ', null != r ? r : 'No ratings yet.'] }),
                  (0, s.jsxs)('p', { children: [i, ' reviews'] }),
                ],
              }),
            }),
          ],
        })
      }
    },
    20298: (e, t, a) => {
      'use strict'
      a.d(t, { A: () => i })
      var s = a(86202),
        r = a(25234)
      let i = (e) => {
        let { productId: t, onOptionsChange: a, onPriceUpdate: i } = e,
          [l, n] = (0, r.useState)([]),
          [c, o] = (0, r.useState)({}),
          [d, u] = (0, r.useState)(''),
          [p, h] = (0, r.useState)(!0)
        ;(0, r.useEffect)(() => {
          ;(async () => {
            try {
              let e = await fetch(
                'http://192.168.0.100:8000/api/v1/products/'.concat(t, '/options')
              )
              if (!e.ok) throw Error('Failed with status '.concat(e.status))
              let a = await e.json()
              n(a)
            } catch (e) {
              console.error('Failed to fetch product options:', e),
                u('Failed to load product options.')
            } finally {
              h(!1)
            }
          })()
        }, [t])
        let x = (e, t) => {
          let s = { ...c, [e]: t }
          o(s), a(s), i && i((100 * Math.random()).toFixed(2))
        }
        return d
          ? (0, s.jsx)('p', { className: 'text-red-500', children: d })
          : p
            ? (0, s.jsx)('p', { children: 'Loading product options...' })
            : (0, s.jsx)('div', {
                className: 'space-y-4',
                children: l.map((e) =>
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
                          onChange: (t) => x(e.group, parseInt(t.target.value)),
                          value: c[e.group] || '',
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
    48213: (e, t, a) => {
      'use strict'
      a.d(t, { A: () => r })
      var s = a(86202)
      a(25234)
      let r = (e) => {
        var t
        let { pricing: a, selectedOptions: r, basePrice: i, finalPrice: l } = e,
          n = Array.isArray(a) ? a : [],
          c = Object.values(r || {}).join('-'),
          o = n.find((e) => e.option_hash === c),
          d = null != (t = null == o ? void 0 : o.base_price) ? t : i
        return (
          parseFloat(d) !== parseFloat(l),
          (0, s.jsxs)('div', {
            children: [
              (0, s.jsxs)('p', { children: ['Base Price: ', i] }),
              (0, s.jsxs)('p', { children: ['Final Price: ', l] }),
              (0, s.jsxs)('p', { children: ['New Price: ', d] }),
            ],
          })
        )
      }
    },
    52505: (e, t, a) => {
      'use strict'
      a.r(t), a.d(t, { default: () => d })
      var s = a(86202),
        r = a(25234),
        i = a(72094),
        l = a(48213),
        n = a(10799),
        c = a(20298)
      let o = (e) => {
          let { onSubmit: t } = e,
            [a, i] = (0, r.useState)('US'),
            [l, n] = (0, r.useState)(''),
            [c, o] = (0, r.useState)('')
          return (0, s.jsxs)('form', {
            onSubmit: (e) => {
              e.preventDefault(), t({ country: a, city: l, postalCode: c })
            },
            className: 'space-y-4',
            children: [
              (0, s.jsx)('input', {
                type: 'text',
                value: a,
                onChange: (e) => i(e.target.value),
                placeholder: 'Country',
                className: 'border px-3 py-2 w-full',
              }),
              (0, s.jsx)('input', {
                type: 'text',
                value: l,
                onChange: (e) => n(e.target.value),
                placeholder: 'City',
                className: 'border px-3 py-2 w-full',
              }),
              (0, s.jsx)('input', {
                type: 'text',
                value: c,
                onChange: (e) => o(e.target.value),
                placeholder: 'Postal Code',
                className: 'border px-3 py-2 w-full',
              }),
              (0, s.jsx)('button', {
                type: 'submit',
                className: 'bg-blue-600 text-white px-4 py-2 rounded',
                children: 'Get Shipping Estimate',
              }),
            ],
          })
        },
        d = () => {
          let [e, t] = (0, r.useState)(null),
            [a, d] = (0, r.useState)(''),
            [u, p] = (0, r.useState)({}),
            [h, x] = (0, r.useState)(''),
            [m, g] = (0, r.useState)('')
          ;(0, r.useEffect)(
            () => (
              (async () => {
                try {
                  let e = await fetch('http://192.168.0.100:8000/api/v1/products/'.concat(2), {
                    cache: 'no-store',
                  })
                  if (!e.ok) throw Error('Fetch failed with status '.concat(e.status))
                  let a = await e.json()
                  t(a), d(a.price)
                } catch (e) {
                  console.error('Error fetching product data:', e),
                    x('Failed to load product data. Please try again later.')
                }
              })(),
              () => console.log('Aq14Page unmounted')
            ),
            [2]
          )
          let j = async (e) => {
              try {
                let t = await fetch('http://192.168.0.100:8000/api/v1/shipping/estimate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ...e, product_id: 2, options: Object.values(u) }),
                  }),
                  a = await t.json()
                g('Estimated Shipping: $'.concat(a.shipping_cost))
              } catch (e) {
                console.error('Shipping estimate failed', e), g('Failed to calculate shipping.')
              }
            },
            f = async () => {
              let e = Object.values(u)
                .map((e) => 'option_ids[]='.concat(e))
                .join('&')
              try {
                let t = await fetch(
                    'http://192.168.0.100:8000/api/v1/products/'.concat(2, '/price?').concat(e)
                  ),
                  a = await t.json()
                d(a.price)
              } catch (e) {
                console.error('Failed to fetch price:', e)
              }
            }
          if (h)
            return (0, s.jsx)('div', {
              className: 'container mx-auto px-4 py-24',
              children: (0, s.jsx)('p', { className: 'text-center text-red-500', children: h }),
            })
          if (!e)
            return (0, s.jsx)('div', {
              className: 'container mx-auto px-4 py-24',
              children: (0, s.jsx)('p', { className: 'text-center', children: 'Loading...' }),
            })
          let v = e.image_url.startsWith('http')
              ? e.image_url
              : ''.concat('https://d12ufawtd6351k.cloudfront.net').concat(e.image_url),
            b = [{ id: e.id, image_url: v, alt_text: e.name }]
          return (0, s.jsxs)('div', {
            className: 'container mx-auto px-4 py-24',
            children: [
              (0, s.jsxs)('h1', {
                className: 'text-3xl font-bold text-center mb-8',
                children: [e.name, ' - 14pt AQ Business Cards'],
              }),
              (0, s.jsxs)('div', {
                className: 'grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8',
                children: [
                  (0, s.jsx)(i.A, { images: b }),
                  (0, s.jsxs)('div', {
                    className: 'space-y-6',
                    children: [
                      (0, s.jsx)(c.A, { productId: 2, onOptionsChange: p, onPriceUpdate: f }),
                      (0, s.jsx)(l.A, {
                        productId: 2,
                        basePrice: a,
                        pricing: e.pricing,
                        options: e.options,
                        selectedOptions: u,
                        finalPrice: a,
                        price: a,
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
              (0, s.jsxs)('div', {
                className: 'mt-12',
                children: [
                  (0, s.jsx)(o, { onSubmit: j }),
                  m &&
                    (0, s.jsx)('p', {
                      className: 'text-green-600 font-semibold mt-4',
                      children: m,
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
    55648: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 52505))
    },
    72094: (e, t, a) => {
      'use strict'
      a.d(t, { A: () => l })
      var s = a(86202),
        r = a(25234),
        i = a(53631)
      function l(e) {
        var t, a
        let { images: l } = e,
          n = Array.isArray(l) ? l : [],
          [c, o] = (0, r.useState)((null == n || null == (t = n[0]) ? void 0 : t.image_url) || '')
        return 0 === n.length
          ? (0, s.jsx)('p', { children: 'No images available' })
          : (0, s.jsxs)('div', {
              className: 'flex flex-col gap-4 items-center',
              children: [
                (0, s.jsx)('div', {
                  className:
                    'w-full mt-20 h-[400px] bg-gray-100 rounded-lg shadow flex items-center justify-center',
                  children: c
                    ? (0, s.jsx)(i.default, {
                        src: c,
                        alt: (null == (a = n[0]) ? void 0 : a.alt_text) || 'Main Product Image',
                        width: 400,
                        height: 400,
                        className: 'rounded-lg shadow',
                      })
                    : (0, s.jsx)('p', { children: 'No image available' }),
                }),
                n.length > 1 &&
                  (0, s.jsx)('div', {
                    className: 'flex gap-2 overflow-x-auto mt-4',
                    children: n.slice(1).map((e) =>
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
  },
  (e) => {
    var t = (t) => e((e.s = t))
    e.O(0, [9460, 4073, 3623, 6605, 7358], () => t(55648)), (_N_E = e.O())
  },
])
