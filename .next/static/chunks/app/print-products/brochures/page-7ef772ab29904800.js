;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8407],
  {
    53631: (e, r, t) => {
      'use strict'
      t.d(r, { default: () => s.a })
      var l = t(85668),
        s = t.n(l)
    },
    85668: (e, r, t) => {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: !0 }),
        !(function (e, r) {
          for (var t in r) Object.defineProperty(e, t, { enumerable: !0, get: r[t] })
        })(r, {
          default: function () {
            return c
          },
          getImageProps: function () {
            return n
          },
        })
      let l = t(60283),
        s = t(80680),
        a = t(49460),
        o = l._(t(83180))
      function n(e) {
        let { props: r } = (0, s.getImgProps)(e, {
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
        for (let [e, t] of Object.entries(r)) void 0 === t && delete r[e]
        return { props: r }
      }
      let c = a.Image
    },
    94681: (e, r, t) => {
      'use strict'
      t.r(r), t.d(r, { default: () => c })
      var l = t(86202)
      t(25234)
      var s = t(83),
        a = t.n(s),
        o = t(53631)
      let n = [
          {
            label: '100lb Gloss Text',
            href: '/print-products/brochures/gloss',
            src: 'https://d12ufawtd6351k.cloudfront.net/brochure-1.png',
            alt: '100lb Gloss Text Brochures',
          },
          {
            label: '100lb Matte Finish',
            href: '/print-products/brochures/matte',
            src: 'https://d12ufawtd6351k.cloudfront.net/brochure-4.png',
            alt: '100lb Matte Finish Brochures',
          },
          {
            label: '100lb UV',
            href: '/print-products/brochures/uv',
            src: 'https://d12ufawtd6351k.cloudfront.net/brochure-3.png',
            alt: '100lb UV Brochures',
          },
          {
            label: '80lb Enviro Uncoated',
            href: '/print-products/brochures/enviro',
            src: 'https://d12ufawtd6351k.cloudfront.net/brochure-2.png',
            alt: '80lb Enviro Uncoated Brochures',
          },
        ],
        c = () =>
          (0, l.jsxs)('div', {
            className: 'container mx-16 p-12',
            children: [
              (0, l.jsx)('h1', {
                className: 'text-6xl font-bold mb-6 text-center',
                children: 'Brochures',
              }),
              (0, l.jsx)('p', {
                className: 'mb-4 text-2xl text-center',
                children:
                  'Explore our range of high-quality brochures, available in a variety of finishes and styles.',
              }),
              (0, l.jsx)('div', {
                className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',
                children: n.map((e, r) =>
                  (0, l.jsx)(
                    a(),
                    {
                      href: e.href,
                      children: (0, l.jsxs)('div', {
                        className:
                          'border rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer',
                        children: [
                          (0, l.jsx)('div', {
                            className: 'relative w-full h-80',
                            children: (0, l.jsx)(o.default, {
                              src: e.src,
                              alt: e.alt,
                              fill: !0,
                              style: { objectFit: 'cover' },
                              className: 'rounded-t-lg',
                            }),
                          }),
                          (0, l.jsx)('div', {
                            className: 'p-4',
                            children: (0, l.jsx)('h2', {
                              className: 'text-xl font-semibold text-center',
                              children: e.label,
                            }),
                          }),
                        ],
                      }),
                    },
                    r
                  )
                ),
              }),
            ],
          })
    },
    99467: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 94681))
    },
  },
  (e) => {
    var r = (r) => e((e.s = r))
    e.O(0, [9460, 83, 3623, 6605, 7358], () => r(99467)), (_N_E = e.O())
  },
])
