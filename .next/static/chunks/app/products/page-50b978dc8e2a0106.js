;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3571],
  {
    26021: (e, t, s) => {
      'use strict'
      s.r(t), s.d(t, { default: () => i })
      var a = s(86202),
        r = s(25234)
      function i() {
        let [e, t] = (0, r.useState)([]),
          [s, i] = (0, r.useState)(!0),
          [n, l] = (0, r.useState)(null),
          [c, o] = (0, r.useState)(1),
          [d, u] = (0, r.useState)(1),
          [h, p] = (0, r.useState)(''),
          [x, f] = (0, r.useState)(h)
        ;(0, r.useEffect)(() => {
          let e = setTimeout(() => f(h), 500)
          return () => clearTimeout(e)
        }, [h])
        let j = async function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
              s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
              a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x
            try {
              let r = await fetch(
                '/api/products?page='.concat(e, '&limit=').concat(s, '&search=').concat(a)
              )
              if (!r.ok) throw Error('Failed to fetch products')
              let i = await r.json()
              t(i.products), u(i.totalPages), o(i.page)
            } catch (e) {
              l(e instanceof Error ? e.message : 'An unknown error occurred')
            } finally {
              i(!1)
            }
          },
          g = (e) => {
            e > 0 && e <= d && (i(!0), o(e), j(e))
          }
        return ((0, r.useEffect)(() => {
          j(c)
        }, [c, x]),
        s)
          ? (0, a.jsx)('div', { children: 'Loading...' })
          : n
            ? (0, a.jsxs)('div', { children: ['Error: ', n] })
            : (0, a.jsxs)('div', {
                children: [
                  (0, a.jsx)('h1', { children: 'Products' }),
                  (0, a.jsx)('input', {
                    type: 'text',
                    value: h,
                    onChange: (e) => {
                      p(e.target.value), i(!0), o(1)
                    },
                    placeholder: 'Search products...',
                    className: 'border p-2 mb-4',
                  }),
                  (0, a.jsx)('ul', {
                    children: e.map((e) =>
                      (0, a.jsxs)(
                        'li',
                        {
                          children: [
                            (0, a.jsx)('h2', { children: e.name }),
                            (0, a.jsx)('p', { children: e.description }),
                            (0, a.jsxs)('p', { children: ['$', e.price] }),
                          ],
                        },
                        e.id
                      )
                    ),
                  }),
                  (0, a.jsxs)('div', {
                    className: 'pagination',
                    children: [
                      (0, a.jsx)('button', {
                        onClick: () => g(c - 1),
                        disabled: 1 === c,
                        'aria-label': 'Previous Page',
                        children: 'Previous',
                      }),
                      (0, a.jsxs)('span', { children: ['Page ', c, ' of ', d] }),
                      (0, a.jsx)('button', {
                        onClick: () => g(c + 1),
                        disabled: c === d,
                        'aria-label': 'Next Page',
                        children: 'Next',
                      }),
                    ],
                  }),
                ],
              })
      }
    },
    92801: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 26021))
    },
  },
  (e) => {
    var t = (t) => e((e.s = t))
    e.O(0, [3623, 6605, 7358], () => t(92801)), (_N_E = e.O())
  },
])
