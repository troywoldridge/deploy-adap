;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5172],
  {
    11096: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 24130))
    },
    24130: (e, s, t) => {
      'use strict'
      t.r(s), t.d(s, { default: () => r })
      var a = t(86202),
        l = t(25234)
      let r = () => {
        let e = () => {
            let e = new Date('2025-05-01T00:00:00').getTime() - new Date().getTime()
            return {
              days: Math.floor(e / 864e5),
              hours: Math.floor((e / 36e5) % 24),
              minutes: Math.floor((e / 6e4) % 60),
              seconds: Math.floor((e / 1e3) % 60),
            }
          },
          [s, t] = (0, l.useState)(e())
        return (
          (0, l.useEffect)(() => {
            let s = setInterval(() => {
              t(e())
            }, 1e3)
            return () => clearInterval(s)
          }, []),
          (0, a.jsxs)('div', {
            className:
              'flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-6',
            children: [
              (0, a.jsx)('h1', { className: 'text-5xl font-bold mb-4', children: 'Coming Soon' }),
              (0, a.jsx)('p', {
                className: 'text-lg mb-6',
                children: "We're working on something amazing. Stay tuned!",
              }),
              (0, a.jsxs)('div', {
                className: 'flex space-x-4 text-2xl font-semibold',
                children: [
                  (0, a.jsxs)('div', {
                    className: 'p-4 bg-white text-black rounded-lg',
                    children: [
                      s.days,
                      ' ',
                      (0, a.jsx)('span', { className: 'text-sm block', children: 'Days' }),
                    ],
                  }),
                  (0, a.jsxs)('div', {
                    className: 'p-4 bg-white text-black rounded-lg',
                    children: [
                      s.hours,
                      ' ',
                      (0, a.jsx)('span', { className: 'text-sm block', children: 'Hours' }),
                    ],
                  }),
                  (0, a.jsxs)('div', {
                    className: 'p-4 bg-white text-black rounded-lg',
                    children: [
                      s.minutes,
                      ' ',
                      (0, a.jsx)('span', { className: 'text-sm block', children: 'Minutes' }),
                    ],
                  }),
                  (0, a.jsxs)('div', {
                    className: 'p-4 bg-white text-black rounded-lg',
                    children: [
                      s.seconds,
                      ' ',
                      (0, a.jsx)('span', { className: 'text-sm block', children: 'Seconds' }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)('p', { className: 'mt-6', children: 'Follow us for updates!' }),
              (0, a.jsxs)('div', {
                className: 'flex space-x-4 mt-3',
                children: [
                  (0, a.jsx)('a', {
                    href: '#',
                    className: 'text-xl hover:opacity-80 transition',
                    children: '\uD83D\uDE80 Twitter',
                  }),
                  (0, a.jsx)('a', {
                    href: '#',
                    className: 'text-xl hover:opacity-80 transition',
                    children: '\uD83D\uDCD8 Facebook',
                  }),
                  (0, a.jsx)('a', {
                    href: '#',
                    className: 'text-xl hover:opacity-80 transition',
                    children: '\uD83D\uDCF8 Instagram',
                  }),
                ],
              }),
            ],
          })
        )
      }
    },
  },
  (e) => {
    var s = (s) => e((e.s = s))
    e.O(0, [3623, 6605, 7358], () => s(11096)), (_N_E = e.O())
  },
])
