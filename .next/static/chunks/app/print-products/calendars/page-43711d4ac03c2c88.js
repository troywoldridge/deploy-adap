;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3061],
  {
    27885: (e, r, a) => {
      Promise.resolve().then(a.bind(a, 66247))
    },
    53631: (e, r, a) => {
      'use strict'
      a.d(r, { default: () => t.a })
      var l = a(85668),
        t = a.n(l)
    },
    66247: (e, r, a) => {
      'use strict'
      a.r(r), a.d(r, { default: () => c })
      var l = a(86202)
      a(25234)
      var t = a(83),
        s = a.n(t),
        d = a(53631)
      let n = [
          {
            label: 'Self-Cover Calendars',
            href: '/print-products/calendars/self-cover',
            src: 'https://d12ufawtd6351k.cloudfront.net/Calendars .png',
            alt: 'Self-Cover Calendars',
          },
          {
            label: 'Hard-Cover Calendars',
            href: '/print-products/calendars/hard-cover',
            src: 'https://d12ufawtd6351k.cloudfront.net/hard-cover-calendars2.webp',
            alt: 'Hard-Cover Calendars',
          },
          {
            label: 'Spiral Calendars',
            href: '/print-products/calendars/spiral',
            src: 'https://d12ufawtd6351k.cloudfront.net/spiral-bind-calendars_1.webp',
            alt: 'Spiral Calendars',
          },
          {
            label: '12 x 12 Calendars',
            href: '/print-products/calendars/12x12',
            src: 'https://d12ufawtd6351k.cloudfront.net/hard-cover-calendars_1.webp',
            alt: '12 x 12 Calendars',
          },
          {
            label: '11 x 8.5 Calendars',
            href: '/print-products/calendars/11x8.5',
            src: 'https://d12ufawtd6351k.cloudfront.net/Calendars .png',
            alt: '11 x 8.5 Calendars',
          },
          {
            label: '9 x 12 Calendars',
            href: '/print-products/calendars/9x12',
            src: 'https://d12ufawtd6351k.cloudfront.net/spiral-bind-calendars2.webp',
            alt: '9 x 12 Calendars',
          },
        ],
        c = () =>
          (0, l.jsxs)('div', {
            className: 'container mx-auto px-6 py-10',
            children: [
              (0, l.jsx)('h1', {
                className: 'text-4xl font-bold text-center mb-6',
                children: 'Calendars',
              }),
              (0, l.jsx)('p', {
                className: 'mb-8 text-center text-lg text-gray-700',
                children: 'Choose from our range of high-quality calendars to suit your needs.',
              }),
              (0, l.jsx)('div', {
                className:
                  'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6',
                children: n.map((e, r) =>
                  (0, l.jsx)(
                    s(),
                    {
                      href: e.href,
                      children: (0, l.jsxs)('div', {
                        className:
                          'border rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer',
                        children: [
                          (0, l.jsx)('div', {
                            className: 'relative w-full h-56',
                            children: (0, l.jsx)(d.default, {
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
    85668: (e, r, a) => {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: !0 }),
        !(function (e, r) {
          for (var a in r) Object.defineProperty(e, a, { enumerable: !0, get: r[a] })
        })(r, {
          default: function () {
            return c
          },
          getImageProps: function () {
            return n
          },
        })
      let l = a(60283),
        t = a(80680),
        s = a(49460),
        d = l._(a(83180))
      function n(e) {
        let { props: r } = (0, t.getImgProps)(e, {
          defaultLoader: d.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: '/_next/image',
            loader: 'default',
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        })
        for (let [e, a] of Object.entries(r)) void 0 === a && delete r[e]
        return { props: r }
      }
      let c = s.Image
    },
  },
  (e) => {
    var r = (r) => e((e.s = r))
    e.O(0, [9460, 83, 3623, 6605, 7358], () => r(27885)), (_N_E = e.O())
  },
])
