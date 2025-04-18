;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8974],
  {
    53631: (e, t, s) => {
      'use strict'
      s.d(t, { default: () => r.a })
      var a = s(85668),
        r = s.n(a)
    },
    56773: (e, t, s) => {
      'use strict'
      s.r(t), s.d(t, { default: () => x })
      var a = s(86202),
        r = s(25234),
        l = s(53631),
        i = s(83),
        n = s.n(i)
      let o = [
        {
          title: 'Welcome to AdapNow!',
          text: 'Your one-stop shop for premium print products and e-commerce solutions.',
          buttonText: 'Shop Now',
          buttonLink: '#featured',
          image: '/images/free-shipping.jpg',
        },
        {
          title: 'Quality Print Products',
          text: 'Discover premium business cards, flyers, and more.',
          buttonText: 'Browse Catalog',
          buttonLink: '/print-products',
          image: '/images/apparel.jpeg',
        },
        {
          title: 'Large Format Printing',
          text: 'Banners, posters, and more for your business needs.',
          buttonText: 'Explore Large Format',
          buttonLink: '/large-format',
          image: '/images/glossy-banners-b.jpg',
        },
        {
          title: 'Stationery & Labels',
          text: 'Custom stationery and labels for every occasion.',
          buttonText: 'View Stationery',
          buttonLink: '/stationery',
          image: '/images/60lb-uncoated-letterhead.jpg',
        },
        {
          title: 'Apparel & Merchandise',
          text: 'Custom apparel to elevate your brand or event.',
          buttonText: 'View Apparel',
          buttonLink: '/apparel',
          image: '/images/apparel-2.jpeg',
        },
      ]
      function c() {
        let [e, t] = (0, r.useState)(0)
        return (
          (0, r.useEffect)(() => {
            let e = setInterval(() => {
              t((e) => (e + 1) % o.length)
            }, 5e3)
            return () => clearInterval(e)
          }, []),
          (0, a.jsx)('section', {
            className: 'mt-10 mb-2 bg- gray rounded-xl overflow-hidden',
            style: { height: '250px' },
            children: (0, a.jsx)('div', {
              className:
                'relative max-w-screen-xl mx-auto px-4 py-24 bg-slate-200 rounded-xl shadow-gray-500',
              children: o.map((t, s) =>
                (0, a.jsxs)(
                  'div',
                  {
                    className:
                      'absolute top-0 left-0 w-full h-full flex items-center transition-opacity duration-700 '.concat(
                        s === e ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none z-0'
                      ),
                    children: [
                      (0, a.jsxs)('div', {
                        className: 'flex-1 hidden md:flex flex-col justify-center px-16',
                        children: [
                          (0, a.jsx)('h1', { className: 'text-lg font-bold', children: t.title }),
                          (0, a.jsx)('p', { className: 'text-md', children: t.text }),
                          (0, a.jsx)(n(), {
                            href: t.buttonLink,
                            children: (0, a.jsx)('span', {
                              className:
                                'bg-blue-600 text-white py-2 px-8 rounded hover:bg-blue-700 cursor-pointer text-xs mt-4 inline-block',
                              children: t.buttonText,
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)('div', {
                        className: 'flex-1 flex justify-center items-center',
                        children: (0, a.jsx)(l.default, {
                          src: t.image,
                          alt: t.title,
                          width: 200,
                          height: 100,
                          className: 'object-contain',
                          style: { maxHeight: '500px', maxWidth: '200%' },
                          priority: !0,
                          sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
                          loading: 'eager',
                        }),
                      }),
                    ],
                  },
                  s
                )
              ),
            }),
          })
        )
      }
      function d() {
        return (0, a.jsx)('section', {
          className: 'py-8 bg-white',
          children: (0, a.jsxs)('div', {
            className: 'max-w-screen-xl mx-auto px-4 text-center',
            children: [
              (0, a.jsx)('h2', {
                className: 'text-2xl font-bold mb-4',
                children: 'Stay in the Loop',
              }),
              (0, a.jsx)('p', {
                className: 'text-gray-700 mb-6',
                children: 'Subscribe to our newsletter for updates and special offers!',
              }),
              (0, a.jsxs)('form', {
                className: 'inline-block',
                children: [
                  (0, a.jsx)('input', {
                    type: 'email',
                    placeholder: 'Enter your email',
                    className: 'px-3 py-2 border border-gray-300 rounded-l',
                  }),
                  (0, a.jsx)('button', {
                    className: 'bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700',
                    children: 'Subscribe',
                  }),
                ],
              }),
            ],
          }),
        })
      }
      let m = [
        {
          label: 'Business Cards',
          href: '/categories/business-cards',
          img: '/images/spot-uv-pc-2.png',
        },
        {
          label: 'Large Format',
          href: '/categories/large-format',
          img: '/images/glossy-banners-b.jpg',
        },
        {
          label: 'Stationery',
          href: '/categories/stationery',
          img: '/images/60lb-uncoated-letterhead.jpg',
        },
        { label: 'Apparel', href: '/categories/apparel', img: '/images/apparel.jpeg' },
      ]
      function u() {
        return (0, a.jsx)('section', {
          className: 'w-full bg-gray-100 py-10',
          id: 'categories',
          children: (0, a.jsxs)('div', {
            className: 'w-full px-6',
            children: [
              (0, a.jsx)('h2', {
                className: 'text-2xl font-bold mb-6 text-center',
                children: 'Featured Categories',
              }),
              (0, a.jsx)('div', {
                className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6',
                children: m.map((e) =>
                  (0, a.jsx)(
                    n(),
                    {
                      href: e.href,
                      children: (0, a.jsxs)('div', {
                        className:
                          'border rounded-xl overflow-hidden shadow-xl hover:shadow-md transition-shadow bg-white',
                        children: [
                          (0, a.jsx)(l.default, {
                            src: e.img,
                            alt: e.label,
                            width: 500,
                            height: 192,
                            className: 'w-full h-48 object-cover object-top',
                          }),
                          (0, a.jsx)('div', {
                            className: 'p-4 text-center',
                            children: (0, a.jsx)('h3', {
                              className: 'font-bold',
                              children: e.label,
                            }),
                          }),
                        ],
                      }),
                    },
                    e.label
                  )
                ),
              }),
            ],
          }),
        })
      }
      let x = () =>
        (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(c, {}),
            (0, a.jsxs)('main', {
              className: 'container mx-auto px-4 py-8 text-center',
              children: [
                (0, a.jsx)('h1', {
                  className: 'text-6xl font-bold mb-6',
                  children: 'Welcome to American Design And Printing',
                }),
                (0, a.jsx)('p', {
                  className: 'text-4xl mb-4',
                  children:
                    'Explore our range of cutting-edge products and services designed to empower your business.',
                }),
              ],
            }),
            (0, a.jsx)(u, {}),
            (0, a.jsx)(d, {}),
          ],
        })
    },
    65820: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 56773))
    },
    85668: (e, t, s) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var s in t) Object.defineProperty(e, s, { enumerable: !0, get: t[s] })
        })(t, {
          default: function () {
            return o
          },
          getImageProps: function () {
            return n
          },
        })
      let a = s(60283),
        r = s(80680),
        l = s(49460),
        i = a._(s(83180))
      function n(e) {
        let { props: t } = (0, r.getImgProps)(e, {
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
        for (let [e, s] of Object.entries(t)) void 0 === s && delete t[e]
        return { props: t }
      }
      let o = l.Image
    },
  },
  (e) => {
    var t = (t) => e((e.s = t))
    e.O(0, [9460, 83, 3623, 6605, 7358], () => t(65820)), (_N_E = e.O())
  },
])
