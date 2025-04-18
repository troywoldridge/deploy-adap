;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [572],
  {
    53631: (e, t, r) => {
      'use strict'
      r.d(t, { default: () => l.a })
      var a = r(85668),
        l = r.n(a)
    },
    69936: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 91242))
    },
    85668: (e, t, r) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
        })(t, {
          default: function () {
            return n
          },
          getImageProps: function () {
            return i
          },
        })
      let a = r(60283),
        l = r(80680),
        s = r(49460),
        c = a._(r(83180))
      function i(e) {
        let { props: t } = (0, l.getImgProps)(e, {
          defaultLoader: c.default,
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
      let n = s.Image
    },
    91242: (e, t, r) => {
      'use strict'
      r.r(t), r.d(t, { default: () => n })
      var a = r(86202)
      r(25234)
      var l = r(83),
        s = r.n(l),
        c = r(53631)
      let i = [
          {
            label: 'Metallic Foil',
            href: '/print-products/greeting-cards/specialty/metallic-foil-gc',
            src: 'https://d12ufawtd6351k.cloudfront.net/metallic-foil-gc.png',
            alt: 'Metallic Foil Greeting Cards',
          },
          {
            label: 'Spot UV',
            href: '/print-products/greeting-cards/specialty/spot-uv-gc',
            src: 'https://d12ufawtd6351k.cloudfront.net/spot-uv-gc.png',
            alt: 'Spot UV Greeting Cards',
          },
          {
            label: 'Kraft Paper',
            href: '/print-products/greeting-cards/specialty/kraft-paper-gc',
            src: 'https://d12ufawtd6351k.cloudfront.net/kraft-paper-gc.png',
            alt: 'Kraft Paper Greeting Cards',
          },
          {
            label: 'Pearl Paper',
            href: '/print-products/greeting-cards/specialty/pearl-paper-gc',
            src: 'https://d12ufawtd6351k.cloudfront.net/pearl-paper-gc.png',
            alt: 'Pearl Paper Greeting Cards',
          },
        ],
        n = () =>
          (0, a.jsxs)('div', {
            className: 'container mx-auto px-6 py-8',
            children: [
              (0, a.jsx)('h1', {
                className: 'text-4xl font-bold text-center mb-6',
                children: 'Specialty Greeting Cards',
              }),
              (0, a.jsx)('p', {
                className: 'mb-8 text-center text-lg text-gray-700',
                children: 'Select your specialty greeting cards option.',
              }),
              (0, a.jsx)('div', {
                className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6',
                children: i.map((e, t) =>
                  (0, a.jsx)(
                    s(),
                    {
                      href: e.href,
                      children: (0, a.jsxs)('div', {
                        className:
                          'border rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer',
                        children: [
                          (0, a.jsx)('div', {
                            className: 'relative w-full h-56',
                            children: (0, a.jsx)(c.default, {
                              src: e.src,
                              alt: e.alt,
                              fill: !0,
                              style: { objectFit: 'cover' },
                              className: 'rounded-t-lg',
                            }),
                          }),
                          (0, a.jsx)('div', {
                            className: 'p-4',
                            children: (0, a.jsx)('h2', {
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
  },
  (e) => {
    var t = (t) => e((e.s = t))
    e.O(0, [9460, 83, 3623, 6605, 7358], () => t(69936)), (_N_E = e.O())
  },
])
