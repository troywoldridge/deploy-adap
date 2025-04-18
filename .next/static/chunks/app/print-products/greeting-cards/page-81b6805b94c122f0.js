;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5947],
  {
    5357: (e, t, r) => {
      'use strict'
      r.r(t), r.d(t, { default: () => n })
      var a = r(86202)
      r(25234)
      var s = r(83),
        l = r.n(s),
        i = r(53631)
      let d = [
          {
            label: 'Matte Greeting Cards',
            href: '/print-products/greeting-cards/matte',
            src: 'https://d12ufawtd6351k.cloudfront.net/14pt-matte-gc.jpg',
            alt: '14pt Matte Finish Greeting Cards',
          },
          {
            label: '14pt + UV (High Gloss)',
            href: '/print-products/greeting-cards/14pt-high-gloss',
            src: 'https://d12ufawtd6351k.cloudfront.net/14pt-uv-gc.jpg',
            alt: '14pt + UV (High Gloss) Greeting Cards',
          },
          {
            label: '14pt + AQ',
            href: '/print-products/greeting-cards/14pt-aq',
            src: 'https://d12ufawtd6351k.cloudfront.net/14pt-aq-gc.jpg',
            alt: '14pt AQ Greeting Cards',
          },
          {
            label: 'Writable Greeting Cards',
            href: '/print-products/greeting-cards/writable',
            src: 'https://d12ufawtd6351k.cloudfront.net/writable-gc.jpg',
            alt: 'Writable Greeting Cards',
          },
          {
            label: 'Specialty Greeting Cards',
            href: '/print-products/greeting-cards/specialty',
            src: 'https://d12ufawtd6351k.cloudfront.net/specialty-gc.png',
            alt: 'Specialty Greeting Cards',
          },
        ],
        n = () =>
          (0, a.jsxs)('div', {
            className: 'container mx-auto px-6 py-8',
            children: [
              (0, a.jsx)('h1', {
                className: 'text-4xl font-bold text-center mb-6',
                children: 'Greeting Cards',
              }),
              (0, a.jsx)('p', {
                className: 'mb-8 text-center text-lg text-gray-700',
                children: 'Discover our premium greeting cards available in a variety of finishes.',
              }),
              (0, a.jsx)('div', {
                className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6',
                children: d.map((e, t) =>
                  (0, a.jsx)(
                    l(),
                    {
                      href: e.href,
                      children: (0, a.jsxs)('div', {
                        className:
                          'border rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer',
                        children: [
                          (0, a.jsx)('div', {
                            className: 'relative w-full h-56',
                            children: (0, a.jsx)(i.default, {
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
    53631: (e, t, r) => {
      'use strict'
      r.d(t, { default: () => s.a })
      var a = r(85668),
        s = r.n(a)
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
            return d
          },
        })
      let a = r(60283),
        s = r(80680),
        l = r(49460),
        i = a._(r(83180))
      function d(e) {
        let { props: t } = (0, s.getImgProps)(e, {
          defaultLoader: i.default,
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
      let n = l.Image
    },
    89295: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 5357))
    },
  },
  (e) => {
    var t = (t) => e((e.s = t))
    e.O(0, [9460, 83, 3623, 6605, 7358], () => t(89295)), (_N_E = e.O())
  },
])
