;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1855],
  {
    51089: (e, t, a) => {
      'use strict'
      a.r(t), a.d(t, { default: () => d })
      var r = a(86202)
      a(25234)
      var s = a(83),
        l = a.n(s),
        i = a(53631)
      let n = [
          {
            label: 'Plastics',
            href: '/print-products/plastics/14pt',
            src: 'https://d12ufawtd6351k.cloudfront.net/plastics-1.webp',
            alt: 'Plastics',
            description: 'Durable plastic prints for a modern look.',
          },
        ],
        d = () =>
          (0, r.jsxs)('div', {
            className: 'container mx-auto px-6 py-10',
            children: [
              (0, r.jsx)('h1', {
                className: 'text-6xl font-extrabold mb-6 text-center',
                children: 'Plastic Cards',
              }),
              (0, r.jsx)('p', {
                className: 'mb-8 text-center text-2xl font-bold text-gray-700',
                children:
                  'Plastic cards offer a durable, high-quality solution that stands up to everyday wear and tear. Made from premium materials, these cards deliver crisp, vibrant prints and a professional finish that enhances your brand’s identity. Ideal for membership, loyalty, or business cards, they provide a lasting impression and superior resistance to water, scratches, and fading.',
              }),
              (0, r.jsx)('div', {
                className: 'flex justify-center',
                children: n.map((e, t) =>
                  (0, r.jsx)(
                    'div',
                    {
                      className: 'border rounded-lg shadow-lg p-4 w-full max-w-md',
                      children: (0, r.jsx)(l(), {
                        href: e.href,
                        children: (0, r.jsxs)('div', {
                          className: 'cursor-pointer',
                          children: [
                            (0, r.jsx)(i.default, {
                              src: e.src,
                              alt: e.alt,
                              width: 256,
                              height: 160,
                              className: 'w-full h-72 object-cover rounded-lg mb-4',
                            }),
                            (0, r.jsx)('h2', {
                              className: 'text-3xl font-semibold text-center mb-2',
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
    53631: (e, t, a) => {
      'use strict'
      a.d(t, { default: () => s.a })
      var r = a(85668),
        s = a.n(r)
    },
    76003: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 51089))
    },
    85668: (e, t, a) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var a in t) Object.defineProperty(e, a, { enumerable: !0, get: t[a] })
        })(t, {
          default: function () {
            return d
          },
          getImageProps: function () {
            return n
          },
        })
      let r = a(60283),
        s = a(80680),
        l = a(49460),
        i = r._(a(83180))
      function n(e) {
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
        for (let [e, a] of Object.entries(t)) void 0 === a && delete t[e]
        return { props: t }
      }
      let d = l.Image
    },
  },
  (e) => {
    var t = (t) => e((e.s = t))
    e.O(0, [9460, 83, 3623, 6605, 7358], () => t(76003)), (_N_E = e.O())
  },
])
