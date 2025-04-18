;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3004],
  {
    43898: (e, t, r) => {
      'use strict'
      r.r(t), r.d(t, { default: () => c })
      var s = r(86202)
      r(25234)
      var l = r(83),
        a = r.n(l),
        n = r(53631)
      let i = [
          {
            label: 'Transparent Clings',
            href: '/print-products/clings/transparent-clings',
            src: 'https://d12ufawtd6351k.cloudfront.net/transparent-clings.jpg',
            alt: 'Transparent Clings',
          },
          {
            label: 'White Opaque Clings',
            href: '/print-products/clings/white-opaque-clings',
            src: 'https://d12ufawtd6351k.cloudfront.net/opaque-clings.jpg',
            alt: 'White Opaque Clings',
          },
        ],
        c = () =>
          (0, s.jsxs)('div', {
            className: 'container mx-auto px-6 py-8',
            children: [
              (0, s.jsx)('h1', {
                className: 'text-4xl font-bold text-center mb-6',
                children: 'Clings',
              }),
              (0, s.jsx)('p', {
                className: 'mb-8 text-center text-lg text-gray-700',
                children: 'Choose your type of clings.',
              }),
              (0, s.jsx)('div', {
                className: 'grid grid-cols-1 md:grid-cols-2 gap-6',
                children: i.map((e, t) =>
                  (0, s.jsx)(
                    a(),
                    {
                      href: e.href,
                      children: (0, s.jsxs)('div', {
                        className:
                          'border rounded-lg shadow-lg p-4 hover:shadow-2xl transition transform hover:scale-105 cursor-pointer',
                        children: [
                          (0, s.jsx)('div', {
                            className: 'relative w-full h-80',
                            children: (0, s.jsx)(n.default, {
                              src: e.src,
                              alt: e.alt,
                              fill: !0,
                              style: { objectFit: 'cover' },
                              className: 'rounded-t-lg',
                            }),
                          }),
                          (0, s.jsx)('div', {
                            className: 'p-4',
                            children: (0, s.jsx)('h2', {
                              className: 'text-xl font-semibold text-center',
                              children: e.label,
                            }),
                          }),
                        ],
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
    62958: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 43898))
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
            return i
          },
        })
      let s = r(60283),
        l = r(80680),
        a = r(49460),
        n = s._(r(83180))
      function i(e) {
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
    e.O(0, [9460, 83, 3623, 6605, 7358], () => t(62958)), (_N_E = e.O())
  },
])
