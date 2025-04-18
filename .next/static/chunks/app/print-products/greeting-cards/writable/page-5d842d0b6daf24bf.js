;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5816],
  {
    6953: (e, t, r) => {
      'use strict'
      r.r(t), r.d(t, { default: () => d })
      var a = r(86202)
      r(25234)
      var l = r(83),
        s = r.n(l),
        i = r(53631)
      let n = [
          {
            label: '13pt Enviro Uncoated',
            href: '/print-products/greeting-cards/writable/13pt-enviro-gc',
            src: 'https://d12ufawtd6351k.cloudfront.net/13pt-enviro-gc.jpg',
            alt: '13pt Enviro Uncoated Greeting Cards',
          },
          {
            label: '14pt Writable + AQ (C1S)',
            href: '/print-products/greeting-cards/writable/14pt-writable-aq',
            src: 'https://d12ufawtd6351k.cloudfront.net/14pt-writable-aq-gc.jpg',
            alt: '14pt Writable + AQ (C1S) Greeting Cards',
          },
          {
            label: '14pt Writable + UV',
            href: '/print-products/greeting-cards/writable/14pt-writable-uv',
            src: 'https://d12ufawtd6351k.cloudfront.net/14pt-writable-uv-gc.jpg',
            alt: '14pt Writable + UV Greeting Cards',
          },
        ],
        d = () =>
          (0, a.jsxs)('div', {
            className: 'container mx-auto px-6 py-8',
            children: [
              (0, a.jsx)('h1', {
                className: 'text-4xl font-bold text-center mb-6',
                children: 'Writable Greeting Cards',
              }),
              (0, a.jsx)('p', {
                className: 'mb-8 text-center text-lg text-gray-700',
                children: 'Select your writable greeting cards option.',
              }),
              (0, a.jsx)('div', {
                className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
                children: n.map((e, t) =>
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
      r.d(t, { default: () => l.a })
      var a = r(85668),
        l = r.n(a)
    },
    65556: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 6953))
    },
    85668: (e, t, r) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
        })(t, {
          default: function () {
            return d
          },
          getImageProps: function () {
            return n
          },
        })
      let a = r(60283),
        l = r(80680),
        s = r(49460),
        i = a._(r(83180))
      function n(e) {
        let { props: t } = (0, l.getImgProps)(e, {
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
      let d = s.Image
    },
  },
  (e) => {
    var t = (t) => e((e.s = t))
    e.O(0, [9460, 83, 3623, 6605, 7358], () => t(65556)), (_N_E = e.O())
  },
])
