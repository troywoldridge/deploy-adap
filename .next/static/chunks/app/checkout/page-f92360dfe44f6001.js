;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8279],
  {
    21769: (e, t, a) => {
      'use strict'
      a.r(t), a.d(t, { default: () => c })
      var i = a(86202),
        s = a(25234),
        d = a(92198),
        l = a(14852)
      let c = () => {
        let e = (0, l.useRouter)(),
          [t, a] = (0, s.useState)({ address: '', city: '', state: '', zip: '' }),
          [c, n] = (0, s.useState)('standard'),
          [r, h] = (0, s.useState)(''),
          [p, o] = (0, s.useState)([]),
          [u, g] = (0, s.useState)(null),
          [x, y] = (0, s.useState)(!1),
          [m, j] = (0, s.useState)(null)
        ;(0, s.useEffect)(() => {
          ;(async () => {
            try {
              let e = await d.A.get('/api/cart')
              o(e.data)
            } catch (e) {
              j('Failed to load cart items')
            }
          })()
        }, [])
        let v = async () => {
            if (!t.zip) return void j('Please enter a ZIP code.')
            y(!0)
            try {
              let e = await d.A.post('/api/checkout/calculate-shipping', {
                zip: t.zip,
                weight: p.reduce((e, t) => e + t.product.weight * t.quantity, 0),
                length: 10,
                width: 10,
                height: 10,
              })
              g(e.data)
            } catch (e) {
              j('Failed to calculate shipping rates')
            } finally {
              y(!1)
            }
          },
          C = async () => {
            if (!r) return void j('Payment method is required')
            y(!0)
            try {
              let a = await d.A.post('/api/checkout/process', {
                shipping_address: t,
                shipping_method: c,
                payment_method: 'credit_card',
                payment_token: r,
              })
              e.push('/order/'.concat(a.data.order.id))
            } catch (e) {
              j('Failed to process checkout')
            } finally {
              y(!1)
            }
          }
        return (0, i.jsxs)('div', {
          className: 'checkout-page',
          children: [
            (0, i.jsx)('h1', { children: 'Checkout' }),
            m && (0, i.jsx)('div', { className: 'error', children: m }),
            (0, i.jsx)('div', {
              className: 'cart-items',
              children:
                0 === p.length
                  ? (0, i.jsx)('p', { children: 'Your cart is empty.' })
                  : p.map((e) =>
                      (0, i.jsxs)(
                        'div',
                        {
                          className: 'cart-item',
                          children: [
                            (0, i.jsx)('p', { children: e.product.name }),
                            (0, i.jsxs)('p', {
                              children: ['Price: $', e.product.price.toFixed(2)],
                            }),
                            (0, i.jsxs)('p', { children: ['Quantity: ', e.quantity] }),
                          ],
                        },
                        e.id
                      )
                    ),
            }),
            (0, i.jsx)('h2', { children: 'Shipping Address' }),
            (0, i.jsx)('input', {
              type: 'text',
              value: t.address,
              onChange: (e) => a({ ...t, address: e.target.value }),
              placeholder: 'Address',
            }),
            (0, i.jsx)('input', {
              type: 'text',
              value: t.city,
              onChange: (e) => a({ ...t, city: e.target.value }),
              placeholder: 'City',
            }),
            (0, i.jsx)('input', {
              type: 'text',
              value: t.state,
              onChange: (e) => a({ ...t, state: e.target.value }),
              placeholder: 'State',
            }),
            (0, i.jsx)('input', {
              type: 'text',
              value: t.zip,
              onChange: (e) => a({ ...t, zip: e.target.value }),
              placeholder: 'ZIP Code',
            }),
            (0, i.jsx)('button', {
              onClick: v,
              disabled: x,
              children: x ? 'Calculating Shipping...' : 'Calculate Shipping',
            }),
            u &&
              (0, i.jsxs)('div', {
                className: 'shipping-options',
                children: [
                  (0, i.jsx)('h3', { children: 'Available Shipping Methods' }),
                  u.map((e, t) =>
                    (0, i.jsxs)(
                      'div',
                      {
                        children: [
                          (0, i.jsx)('input', {
                            type: 'radio',
                            name: 'shippingMethod',
                            value: e.method,
                            checked: c === e.method,
                            onChange: () => n(e.method),
                          }),
                          (0, i.jsxs)('label', {
                            children: [
                              e.method,
                              ' - $',
                              e.price.toFixed(2),
                              ' (Est. ',
                              e.estimated_days,
                              ' days)',
                            ],
                          }),
                        ],
                      },
                      t
                    )
                  ),
                ],
              }),
            (0, i.jsx)('h2', { children: 'Payment' }),
            (0, i.jsx)('input', {
              type: 'text',
              value: r,
              onChange: (e) => h(e.target.value),
              placeholder: 'Payment Token',
            }),
            (0, i.jsx)('button', {
              onClick: C,
              disabled: x,
              children: x ? 'Processing Order...' : 'Complete Purchase',
            }),
          ],
        })
      }
    },
    66141: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 21769))
    },
  },
  (e) => {
    var t = (t) => e((e.s = t))
    e.O(0, [987, 3623, 6605, 7358], () => t(66141)), (_N_E = e.O())
  },
])
