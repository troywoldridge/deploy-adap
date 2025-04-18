;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [55],
  {
    10799: (e, t, s) => {
      'use strict'
      s.d(t, { A: () => u })
      var a = s(86202),
        r = s(25234),
        l = s(88375)
      function i() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s]
        return t.filter(Boolean).join(' ')
      }
      let n = l.bL,
        c = r.forwardRef((e, t) => {
          let { className: s, ...r } = e
          return (0, a.jsx)(l.B8, {
            ref: t,
            className: i(
              'inline-flex items-center justify-center rounded-lg bg-muted p-1',
              s || ''
            ),
            ...r,
          })
        })
      c.displayName = 'TabsList'
      let o = r.forwardRef((e, t) => {
        let { className: s, ...r } = e
        return (0, a.jsx)(l.l9, {
          ref: t,
          className: i(
            'inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 rounded text-sm font-medium ring-offset-background transition-colors',
            'data-[state=active]:bg-primary data-[state=active]:text-white',
            s || ''
          ),
          ...r,
        })
      })
      o.displayName = 'TabsTrigger'
      let d = r.forwardRef((e, t) => {
        let { className: s, ...r } = e
        return (0, a.jsx)(l.UC, { ref: t, className: i('mt-2', s || ''), ...r })
      })
      d.displayName = 'TabsContent'
      let u = (e) => {
        let { description: t, attributes: s, rating: r, reviewCount: l } = e
        return (0, a.jsxs)(n, {
          defaultValue: 'details',
          children: [
            (0, a.jsxs)(c, {
              children: [
                (0, a.jsx)(o, { value: 'details', children: 'Details' }),
                (0, a.jsxs)(o, { value: 'reviews', children: ['Reviews (', l, ')'] }),
              ],
            }),
            (0, a.jsx)(d, {
              value: 'details',
              children: (0, a.jsxs)('div', {
                className: 'p-4 bg-white shadow rounded',
                children: [
                  (0, a.jsx)('p', { className: 'mb-4', children: t }),
                  s &&
                    (0, a.jsx)('ul', {
                      children: Object.entries(s).map((e) => {
                        let [t, s] = e
                        return (0, a.jsxs)(
                          'li',
                          { children: [(0, a.jsxs)('strong', { children: [t, ':'] }), ' ', s] },
                          t
                        )
                      }),
                    }),
                ],
              }),
            }),
            (0, a.jsx)(d, {
              value: 'reviews',
              children: (0, a.jsxs)('div', {
                className: 'p-4 bg-white shadow rounded',
                children: [
                  (0, a.jsxs)('p', { children: ['Rating: ', null != r ? r : 'No ratings yet.'] }),
                  (0, a.jsxs)('p', { children: [l, ' reviews'] }),
                ],
              }),
            }),
          ],
        })
      }
    },
    20298: (e, t, s) => {
      'use strict'
      s.d(t, { A: () => l })
      var a = s(86202),
        r = s(25234)
      let l = (e) => {
        let { productId: t, onOptionsChange: s, onPriceUpdate: l } = e,
          [i, n] = (0, r.useState)([]),
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
          let a = { ...c, [e]: t }
          o(a), s(a), l && l((100 * Math.random()).toFixed(2))
        }
        return d
          ? (0, a.jsx)('p', { className: 'text-red-500', children: d })
          : p
            ? (0, a.jsx)('p', { children: 'Loading product options...' })
            : (0, a.jsx)('div', {
                className: 'space-y-4',
                children: i.map((e) =>
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
                          value: c[e.group] || '',
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
    28425: (e, t, s) => {
      'use strict'
      s.r(t), s.d(t, { default: () => o })
      var a = s(86202),
        r = s(25234),
        l = s(72094),
        i = s(48213),
        n = s(10799),
        c = s(20298)
      let o = () => {
        let [e, t] = (0, r.useState)(null),
          [s, o] = (0, r.useState)(''),
          [d, u] = (0, r.useState)('')
        if (
          ((0, r.useEffect)(
            () => (
              (async () => {
                try {
                  let e = await fetch('http://192.168.0.100:8000/api/v1/products/'.concat(14676), {
                    cache: 'no-store',
                    mode: 'cors',
                  })
                  if (!e.ok) throw Error('Fetch failed with status '.concat(e.status))
                  let s = await e.json()
                  t(s), o(s.price)
                } catch (e) {
                  console.error('Error fetching product data:', e),
                    u('Failed to load product data. Please try again later.')
                }
              })(),
              () => console.log('CustomPage unmounted')
            ),
            [14676]
          ),
          d)
        )
          return (0, a.jsx)('div', {
            className: 'container mx-auto px-4 py-24',
            children: (0, a.jsx)('p', { className: 'text-center text-red-500', children: d }),
          })
        if (!e)
          return (0, a.jsx)('div', {
            className: 'container mx-auto px-4 py-24',
            children: (0, a.jsx)('p', { className: 'text-center', children: 'Loading...' }),
          })
        let p = e.image_url.startsWith('http')
            ? e.image_url
            : ''.concat('https://d12ufawtd6351k.cloudfront.net').concat(e.image_url),
          h = [{ id: e.id, image_url: p, alt_text: e.name }]
        return (0, a.jsxs)('div', {
          className: 'container mx-auto px-4 py-24',
          children: [
            (0, a.jsxs)('h1', {
              className: 'text-3xl font-bold text-center mb-8',
              children: [e.name, ' - 16pt Matte Business Cards'],
            }),
            (0, a.jsxs)('div', {
              className: 'grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8',
              children: [
                (0, a.jsx)(l.A, { images: h }),
                (0, a.jsxs)('div', {
                  className: 'space-y-6',
                  children: [
                    (0, a.jsx)(c.A, {
                      productId: 14676,
                      onPriceUpdate: o,
                      onOptionsChange: (e) => console.log('Selected options:', e),
                    }),
                    (0, a.jsx)(i.A, {
                      productId: 14676,
                      basePrice: s,
                      pricing: e.pricing,
                      options: e.options,
                      selectedOptions: {},
                      finalPrice: s,
                      price: s,
                    }),
                    (0, a.jsxs)('div', {
                      className: 'flex gap-4 flex-wrap',
                      children: [
                        (0, a.jsx)('button', {
                          className:
                            'bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded shadow',
                          children: 'Upload Artwork',
                        }),
                        (0, a.jsx)('button', {
                          className:
                            'bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded shadow',
                          children: 'Calculate Shipping',
                        }),
                        (0, a.jsx)('button', {
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
            (0, a.jsx)('div', {
              className: 'mt-24',
              children: (0, a.jsx)(n.A, {
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
    48213: (e, t, s) => {
      'use strict'
      s.d(t, { A: () => r })
      var a = s(86202)
      s(25234)
      let r = (e) => {
        var t
        let { pricing: s, selectedOptions: r, basePrice: l, finalPrice: i } = e,
          n = Array.isArray(s) ? s : [],
          c = Object.values(r || {}).join('-'),
          o = n.find((e) => e.option_hash === c),
          d = null != (t = null == o ? void 0 : o.base_price) ? t : l
        return (
          parseFloat(d) !== parseFloat(i),
          (0, a.jsxs)('div', {
            children: [
              (0, a.jsxs)('p', { children: ['Base Price: ', l] }),
              (0, a.jsxs)('p', { children: ['Final Price: ', i] }),
              (0, a.jsxs)('p', { children: ['New Price: ', d] }),
            ],
          })
        )
      }
    },
    56377: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 28425))
    },
    72094: (e, t, s) => {
      'use strict'
      s.d(t, { A: () => i })
      var a = s(86202),
        r = s(25234),
        l = s(53631)
      function i(e) {
        var t, s
        let { images: i } = e,
          n = Array.isArray(i) ? i : [],
          [c, o] = (0, r.useState)((null == n || null == (t = n[0]) ? void 0 : t.image_url) || '')
        return 0 === n.length
          ? (0, a.jsx)('p', { children: 'No images available' })
          : (0, a.jsxs)('div', {
              className: 'flex flex-col gap-4 items-center',
              children: [
                (0, a.jsx)('div', {
                  className:
                    'w-full mt-20 h-[400px] bg-gray-100 rounded-lg shadow flex items-center justify-center',
                  children: c
                    ? (0, a.jsx)(l.default, {
                        src: c,
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
                    children: n.slice(1).map((e) =>
                      (0, a.jsx)(
                        'div',
                        {
                          onClick: () => o(e.image_url),
                          className:
                            'cursor-pointer transition-transform transform hover:scale-105',
                          children: (0, a.jsx)(l.default, {
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
    e.O(0, [9460, 4073, 3623, 6605, 7358], () => t(56377)), (_N_E = e.O())
  },
])
