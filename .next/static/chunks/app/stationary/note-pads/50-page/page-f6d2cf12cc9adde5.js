;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8591],
  {
    10799: (e, t, a) => {
      'use strict'
      a.d(t, { A: () => u })
      var s = a(86202),
        r = a(25234),
        l = a(88375)
      function i() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a]
        return t.filter(Boolean).join(' ')
      }
      let n = l.bL,
        o = r.forwardRef((e, t) => {
          let { className: a, ...r } = e
          return (0, s.jsx)(l.B8, {
            ref: t,
            className: i(
              'inline-flex items-center justify-center rounded-lg bg-muted p-1',
              a || ''
            ),
            ...r,
          })
        })
      o.displayName = 'TabsList'
      let c = r.forwardRef((e, t) => {
        let { className: a, ...r } = e
        return (0, s.jsx)(l.l9, {
          ref: t,
          className: i(
            'inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 rounded text-sm font-medium ring-offset-background transition-colors',
            'data-[state=active]:bg-primary data-[state=active]:text-white',
            a || ''
          ),
          ...r,
        })
      })
      c.displayName = 'TabsTrigger'
      let d = r.forwardRef((e, t) => {
        let { className: a, ...r } = e
        return (0, s.jsx)(l.UC, { ref: t, className: i('mt-2', a || ''), ...r })
      })
      d.displayName = 'TabsContent'
      let u = (e) => {
        let { description: t, attributes: a, rating: r, reviewCount: l } = e
        return (0, s.jsxs)(n, {
          defaultValue: 'details',
          children: [
            (0, s.jsxs)(o, {
              children: [
                (0, s.jsx)(c, { value: 'details', children: 'Details' }),
                (0, s.jsxs)(c, { value: 'reviews', children: ['Reviews (', l, ')'] }),
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
                  (0, s.jsxs)('p', { children: [l, ' reviews'] }),
                ],
              }),
            }),
          ],
        })
      }
    },
    20298: (e, t, a) => {
      'use strict'
      a.d(t, { A: () => l })
      var s = a(86202),
        r = a(25234)
      let l = (e) => {
        let { productId: t, onOptionsChange: a, onPriceUpdate: l } = e,
          [i, n] = (0, r.useState)([]),
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
          let s = { ...o, [e]: t }
          c(s), a(s), l && l((100 * Math.random()).toFixed(2))
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
                          onChange: (t) => x(e.group, parseInt(t.target.value)),
                          value: o[e.group] || '',
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
    26401: (e, t, a) => {
      'use strict'
      a.r(t), a.d(t, { default: () => c })
      var s = a(86202),
        r = a(25234),
        l = a(72094),
        i = a(48213),
        n = a(10799),
        o = a(20298)
      let c = () => {
        let [e, t] = (0, r.useState)(null),
          [a, c] = (0, r.useState)(''),
          [d, u] = (0, r.useState)('')
        if (
          ((0, r.useEffect)(
            () => (
              (async () => {
                try {
                  let e = await fetch('http://192.168.0.100:8000/api/v1/products/'.concat(83), {
                    cache: 'no-store',
                  })
                  if (!e.ok) throw Error('Fetch failed with status '.concat(e.status))
                  let a = await e.json()
                  console.log('Raw product data (50-page):', a), t(a), c(a.price)
                } catch (e) {
                  e instanceof Error
                    ? console.error('Error fetching product data (50-page):', e)
                    : console.error('Unexpected error:', e),
                    u('Failed to load product data. Please try again later.')
                }
              })(),
              () => {
                console.log('Notepad50Page unmounted')
              }
            ),
            [83]
          ),
          d)
        )
          return (0, s.jsx)('div', {
            className: 'container mx-auto px-4 py-24',
            children: (0, s.jsx)('p', { className: 'text-center text-red-500', children: d }),
          })
        if (!e)
          return (0, s.jsx)('div', {
            className: 'container mx-auto px-4 py-24',
            children: (0, s.jsx)('p', {
              className: 'text-center',
              children: 'Loading 50-page notepads...',
            }),
          })
        let p = e.image_url.startsWith('http')
            ? e.image_url
            : ''.concat('https://d12ufawtd6351k.cloudfront.net').concat(e.image_url),
          h = [{ id: e.id, image_url: p, alt_text: e.name }, ...e.images]
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
                (0, s.jsx)(l.A, { images: h }),
                (0, s.jsxs)('div', {
                  className: 'space-y-6',
                  children: [
                    (0, s.jsx)(o.A, {
                      productId: 83,
                      onPriceUpdate: c,
                      onOptionsChange: (e) => console.log('Selected options:', e),
                    }),
                    (0, s.jsx)(i.A, {
                      productId: 83,
                      basePrice: a,
                      pricing: e.pricing,
                      options: e.options,
                      selectedOptions: {},
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
    48213: (e, t, a) => {
      'use strict'
      a.d(t, { A: () => r })
      var s = a(86202)
      a(25234)
      let r = (e) => {
        var t
        let { pricing: a, selectedOptions: r, basePrice: l, finalPrice: i } = e,
          n = Array.isArray(a) ? a : [],
          o = Object.values(r || {}).join('-'),
          c = n.find((e) => e.option_hash === o),
          d = null != (t = null == c ? void 0 : c.base_price) ? t : l
        return (
          parseFloat(d) !== parseFloat(i),
          (0, s.jsxs)('div', {
            children: [
              (0, s.jsxs)('p', { children: ['Base Price: ', l] }),
              (0, s.jsxs)('p', { children: ['Final Price: ', i] }),
              (0, s.jsxs)('p', { children: ['New Price: ', d] }),
            ],
          })
        )
      }
    },
    65121: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 26401))
    },
    72094: (e, t, a) => {
      'use strict'
      a.d(t, { A: () => i })
      var s = a(86202),
        r = a(25234),
        l = a(53631)
      function i(e) {
        var t, a
        let { images: i } = e,
          n = Array.isArray(i) ? i : [],
          [o, c] = (0, r.useState)((null == n || null == (t = n[0]) ? void 0 : t.image_url) || '')
        return 0 === n.length
          ? (0, s.jsx)('p', { children: 'No images available' })
          : (0, s.jsxs)('div', {
              className: 'flex flex-col gap-4 items-center',
              children: [
                (0, s.jsx)('div', {
                  className:
                    'w-full mt-20 h-[400px] bg-gray-100 rounded-lg shadow flex items-center justify-center',
                  children: o
                    ? (0, s.jsx)(l.default, {
                        src: o,
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
                          onClick: () => c(e.image_url),
                          className:
                            'cursor-pointer transition-transform transform hover:scale-105',
                          children: (0, s.jsx)(l.default, {
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
    e.O(0, [9460, 4073, 3623, 6605, 7358], () => t(65121)), (_N_E = e.O())
  },
])
