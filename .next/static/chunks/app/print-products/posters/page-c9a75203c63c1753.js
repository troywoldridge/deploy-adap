;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5496],
  {
    38994: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 63654))
    },
    53631: (e, t, r) => {
      'use strict'
      r.d(t, { default: () => l.a })
      var s = r(85668),
        l = r.n(s)
    },
    63654: (e, t, r) => {
      'use strict'
      r.r(t), r.d(t, { default: () => n })
      var s = r(86202)
      r(25234)
      var l = r(83),
        o = r.n(l),
        a = r(53631)
      let d = [
          {
            label: '100lb Gloss Text',
            href: '/print-products/posters/100lb-gloss',
            src: 'https://d12ufawtd6351k.cloudfront.net/gloss-book-posters.webp',
            alt: '100lb Gloss Text Poster',
          },
          {
            label: '100lb Matte Finish',
            href: '/print-products/posters/100lb-matte',
            src: 'https://d12ufawtd6351k.cloudfront.net/gloss-book-poster_b_w.webp',
            alt: '100lb Matte Finish Poster',
          },
          {
            label: '100lb UV (High Gloss)',
            href: '/print-products/posters/100lb-uv',
            src: 'https://d12ufawtd6351k.cloudfront.net/photo_gloss_posters_three.webp',
            alt: '100lb UV Poster',
          },
          {
            label: '80lb Enviro Uncoated',
            href: '/print-products/posters/80lb-enviro',
            src: 'https://d12ufawtd6351k.cloudfront.net/dull-book-poster_b_w_2.webp',
            alt: '80lb Enviro Uncoated Poster',
          },
          {
            label: '8pt C2S Stock Large Format',
            href: '/print-products/posters/large-format',
            src: 'https://d12ufawtd6351k.cloudfront.net/backlit-posters.webp',
            alt: '8pt C2S Stock Large Format Poster',
          },
        ],
        n = () =>
          (0, s.jsxs)('div', {
            className: 'container mx-auto px-6 py-8',
            children: [
              (0, s.jsx)('h1', {
                className: 'text-4xl font-bold mb-6 text-center',
                children: 'Posters',
              }),
              (0, s.jsx)('p', {
                className: 'mb-8 text-center text-lg text-gray-700',
                children:
                  'Posters are a great way to promote events and advertising with bold imagery.',
              }),
              (0, s.jsx)('div', {
                className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6',
                children: d.map((e, t) =>
                  (0, s.jsx)(
                    o(),
                    {
                      href: e.href,
                      children: (0, s.jsxs)('div', {
                        className:
                          'border rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer',
                        children: [
                          (0, s.jsx)('div', {
                            className: 'relative w-full h-56',
                            children: (0, s.jsx)(a.default, {
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
      let s = r(60283),
        l = r(80680),
        o = r(49460),
        a = s._(r(83180))
      function d(e) {
        let { props: t } = (0, l.getImgProps)(e, {
          defaultLoader: a.default,
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
      let n = o.Image
    },
  },
  (e) => {
    var t = (t) => e((e.s = t))
    e.O(0, [9460, 83, 3623, 6605, 7358], () => t(38994)), (_N_E = e.O())
  },
])
