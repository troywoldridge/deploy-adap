;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7801],
  {
    9433: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 75963))
    },
    53631: (e, t, a) => {
      'use strict'
      a.d(t, { default: () => l.a })
      var s = a(85668),
        l = a.n(s)
    },
    75963: (e, t, a) => {
      'use strict'
      a.r(t), a.d(t, { default: () => o })
      var s = a(86202)
      a(25234)
      var l = a(83),
        r = a.n(l),
        n = a(53631)
      let i = [
          {
            label: '14pt Magnets',
            href: '/print-products/magnets/14pt-magnets',
            src: 'https://d12ufawtd6351k.cloudfront.net/magnets-1.webp',
            alt: '14pt Magnets',
          },
          {
            label: '30mil Car Magnets',
            href: '/print-products/magnets/30mil-car-magnets',
            src: 'https://d12ufawtd6351k.cloudfront.net/car-magnet-1.webp',
            alt: '30 Mil Car Magnets',
          },
          {
            label: '30mil Cut To Shape Magnets',
            href: '/print-products/magnets/30mil-magnets',
            src: 'https://d12ufawtd6351k.cloudfront.net/contour-cut-4.webp',
            alt: '30 Mil Cut To Shape Magnets',
          },
          {
            label: '20mil Cut To Shape Magnets',
            href: '/print-products/magnets/20mil-magnets',
            src: 'https://d12ufawtd6351k.cloudfront.net/20mil-cut-to-shape-magnets-1.png',
            alt: '20 Mil Cut To Shape Magnets',
          },
        ],
        o = () =>
          (0, s.jsxs)('div', {
            className: 'container mx-auto px-6 py-8',
            children: [
              (0, s.jsx)('h1', {
                className: 'text-4xl font-bold text-center mb-6',
                children: 'Magnets',
              }),
              (0, s.jsx)('p', {
                className: 'mb-8 text-center text-lg text-gray-700',
                children:
                  'Explore our selection of magnets available in a variety of finishes and styles.',
              }),
              (0, s.jsx)('div', {
                className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6',
                children: i.map((e, t) =>
                  (0, s.jsx)(
                    r(),
                    {
                      href: e.href,
                      children: (0, s.jsxs)('div', {
                        className:
                          'border rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer',
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
    85668: (e, t, a) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var a in t) Object.defineProperty(e, a, { enumerable: !0, get: t[a] })
        })(t, {
          default: function () {
            return o
          },
          getImageProps: function () {
            return i
          },
        })
      let s = a(60283),
        l = a(80680),
        r = a(49460),
        n = s._(a(83180))
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
        for (let [e, a] of Object.entries(t)) void 0 === a && delete t[e]
        return { props: t }
      }
      let o = r.Image
    },
  },
  (e) => {
    var t = (t) => e((e.s = t))
    e.O(0, [9460, 83, 3623, 6605, 7358], () => t(9433)), (_N_E = e.O())
  },
])
