;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1953],
  {
    1409: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 64467))
    },
    53631: (e, t, r) => {
      'use strict'
      r.d(t, { default: () => l.a })
      var s = r(85668),
        l = r.n(s)
    },
    64467: (e, t, r) => {
      'use strict'
      r.r(t), r.d(t, { default: () => c })
      var s = r(86202)
      r(25234)
      var l = r(83),
        a = r.n(l),
        n = r(53631)
      let d = [
          {
            label: 'Tent Cards',
            href: '/print-products/tent-cards',
            src: 'https://d12ufawtd6351k.cloudfront.net/tent-card-1.webp',
            alt: 'Tent Cards',
            sublinks: [
              {
                label: '14pt Matte Finish',
                href: '/print-products/tent-cards/14pt',
                src: 'https://d12ufawtd6351k.cloudfront.net/tent-card-2.webp',
                alt: '14pt Tent Cards',
              },
            ],
          },
        ],
        i = (e) =>
          (0, s.jsx)('ul', {
            className: 'ml-6 border-l border-gray-300 pl-4 mt-2',
            children: e.map((e, t) =>
              (0, s.jsxs)(
                'li',
                {
                  className: 'mb-2',
                  children: [
                    (0, s.jsx)(a(), {
                      href: e.href,
                      children: (0, s.jsxs)('div', {
                        className:
                          'flex items-center gap-2 hover:bg-gray-100 p-2 rounded transition',
                        children: [
                          (0, s.jsx)(n.default, {
                            src: e.src,
                            alt: e.alt,
                            width: 300,
                            height: 300,
                            unoptimized: !0,
                            className: 'w-32 h-32 object-cover rounded',
                          }),
                          (0, s.jsx)('span', { className: 'text-xl font-bold', children: e.label }),
                        ],
                      }),
                    }),
                    e.sublinks && i(e.sublinks),
                  ],
                },
                t
              )
            ),
          }),
        c = () => {
          let e = d[0]
          return (0, s.jsxs)('div', {
            className: 'container mx-auto px-6 py-8',
            children: [
              (0, s.jsx)('h1', {
                className: 'text-6xl font-extrabold mb-6 text-center',
                children: 'Tent Cards',
              }),
              (0, s.jsx)('p', {
                className: 'mb-8 text-center text-2xl font-extrabold text-gray-700',
                children:
                  'Tent cards are multi-dimensional print products that can be conveniently placed on tables for promotional purposes. They offer a smooth look and feel.',
              }),
              (0, s.jsx)('div', {
                className: 'flex justify-center',
                children: (0, s.jsxs)('div', {
                  className: 'border rounded-lg shadow-lg p-4 w-full max-w-md',
                  children: [
                    (0, s.jsx)(a(), {
                      href: e.href,
                      children: (0, s.jsxs)('div', {
                        className: 'cursor-pointer',
                        children: [
                          (0, s.jsx)(n.default, {
                            src: e.src,
                            alt: e.alt,
                            width: 300,
                            height: 300,
                            className: 'w-full h-72 object-cover rounded-lg mb-4',
                            unoptimized: !0,
                          }),
                          (0, s.jsx)('h2', {
                            className: 'text-3xl font-semibold text-center mb-2',
                            children: e.label,
                          }),
                        ],
                      }),
                    }),
                    e.sublinks && i(e.sublinks),
                  ],
                }),
              }),
            ],
          })
        }
    },
    85668: (e, t, r) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
        })(t, {
          default: function () {
            return i
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
      let i = a.Image
    },
  },
  (e) => {
    var t = (t) => e((e.s = t))
    e.O(0, [9460, 83, 3623, 6605, 7358], () => t(1409)), (_N_E = e.O())
  },
])
