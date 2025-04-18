;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3970],
  {
    10568: (e, t, r) => {
      'use strict'
      r.r(t), r.d(t, { default: () => c })
      var s = r(86202)
      r(25234)
      var l = r(83),
        a = r.n(l),
        n = r(53631)
      let d = [
          {
            label: '14pt Numbered Tickets',
            href: '/print-products/numbered-tickets/14pt',
            src: 'https://d12ufawtd6351k.cloudfront.net/numbered-tickets.png',
            alt: '14pt Numbered Tickets',
          },
        ],
        c = () =>
          (0, s.jsxs)('div', {
            className: 'container mx-auto px-6 py-10',
            children: [
              (0, s.jsx)('h1', {
                className: 'text-6xl font-bold mb-6 text-center',
                children: 'Numbered Tickets',
              }),
              (0, s.jsx)('p', {
                className: 'mb-8 text-center text-2xl font-medium text-gray-700',
                children:
                  'Explore our selection of numbered tickets available in various styles, perfect for concerts, raffles, and events.',
              }),
              (0, s.jsx)('div', {
                className: 'flex justify-center',
                children: d.map((e, t) =>
                  (0, s.jsx)(
                    'div',
                    {
                      className: 'border rounded-lg shadow-lg p-4 w-full max-w-md',
                      children: (0, s.jsx)(a(), {
                        href: e.href,
                        children: (0, s.jsxs)('div', {
                          className: 'cursor-pointer',
                          children: [
                            (0, s.jsx)(n.default, {
                              src: e.src,
                              alt: e.alt,
                              width: 256,
                              height: 160,
                              className: 'w-full h-40 object-cover rounded-lg mb-4',
                            }),
                            (0, s.jsx)('h2', {
                              className: 'text-xl font-semibold text-center mb-2',
                              children: e.label,
                            }),
                          ],
                        }),
                      }),
                    },
                    t
                  )
                ),
              }),
            ],
          })
    },
    53631: (e, t, r) => {
      'use strict'
      r.d(t, { default: () => l.a })
      var s = r(85668),
        l = r.n(s)
    },
    71896: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 10568))
    },
    85668: (e, t, r) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
        })(t, {
          default: function () {
            return c
          },
          getImageProps: function () {
            return d
          },
        })
      let s = r(60283),
        l = r(80680),
        a = r(49460),
        n = s._(r(83180))
      function d(e) {
        let { props: t } = (0, l.getImgProps)(e, {
          defaultLoader: n.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: '/_next/image',
            loader: 'default',
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        })
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e]
        return { props: t }
      }
      let c = a.Image
    },
  },
  (e) => {
    var t = (t) => e((e.s = t))
    e.O(0, [9460, 83, 3623, 6605, 7358], () => t(71896)), (_N_E = e.O())
  },
])
