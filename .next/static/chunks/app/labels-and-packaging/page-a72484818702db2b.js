;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3838],
  {
    10318: (e, t, l) => {
      Promise.resolve().then(l.bind(l, 19540))
    },
    19540: (e, t, l) => {
      'use strict'
      l.r(t), l.d(t, { default: () => n })
      var s = l(86202),
        a = l(83),
        r = l.n(a),
        o = l(53631)
      let n = () =>
        (0, s.jsxs)('div', {
          className: 'container mx-auto px-4 py-24',
          children: [
            (0, s.jsx)('h1', {
              className: 'text-4xl font-bold text-center mb-10',
              children: 'Labels And Packaging',
            }),
            (0, s.jsxs)('div', {
              className: 'mb-12 text-center',
              children: [
                (0, s.jsx)('h2', {
                  className: 'text-3xl font-semibold mb-4',
                  children: 'Roll Labels',
                }),
                (0, s.jsx)(r(), {
                  href: '/roll-labels',
                  children: (0, s.jsx)(o.default, {
                    src: 'https://d12ufawtd6351k.cloudfront.net/roll-label-3.webp',
                    alt: 'Roll Labels',
                    className: 'mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform',
                    width: 500,
                    height: 300,
                  }),
                }),
              ],
            }),
            (0, s.jsxs)('div', {
              className: 'text-center',
              children: [
                (0, s.jsx)('h2', {
                  className: 'text-3xl font-semibold mb-4',
                  children: 'Product Boxes',
                }),
                (0, s.jsx)(r(), {
                  href: '/product-boxes',
                  children: (0, s.jsx)(o.default, {
                    src: 'https://d12ufawtd6351k.cloudfront.net/productbox-1.webp',
                    alt: 'Product Boxes',
                    className: 'mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform',
                    width: 500,
                    height: 300,
                  }),
                }),
              ],
            }),
          ],
        })
    },
    53631: (e, t, l) => {
      'use strict'
      l.d(t, { default: () => a.a })
      var s = l(85668),
        a = l.n(s)
    },
    85668: (e, t, l) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var l in t) Object.defineProperty(e, l, { enumerable: !0, get: t[l] })
        })(t, {
          default: function () {
            return d
          },
          getImageProps: function () {
            return n
          },
        })
      let s = l(60283),
        a = l(80680),
        r = l(49460),
        o = s._(l(83180))
      function n(e) {
        let { props: t } = (0, a.getImgProps)(e, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: '/_next/image',
            loader: 'default',
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        })
        for (let [e, l] of Object.entries(t)) void 0 === l && delete t[e]
        return { props: t }
      }
      let d = r.Image
    },
  },
  (e) => {
    var t = (t) => e((e.s = t))
    e.O(0, [9460, 83, 3623, 6605, 7358], () => t(10318)), (_N_E = e.O())
  },
])
