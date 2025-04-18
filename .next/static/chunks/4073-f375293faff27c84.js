'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4073],
  {
    53631: (e, t, n) => {
      n.d(t, { default: () => o.a })
      var r = n(85668),
        o = n.n(r)
    },
    85668: (e, t, n) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] })
        })(t, {
          default: function () {
            return u
          },
          getImageProps: function () {
            return l
          },
        })
      let r = n(60283),
        o = n(80680),
        i = n(49460),
        a = r._(n(83180))
      function l(e) {
        let { props: t } = (0, o.getImgProps)(e, {
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
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e]
        return { props: t }
      }
      let u = i.Image
    },
    88375: (e, t, n) => {
      n.d(t, { UC: () => ei, B8: () => er, bL: () => en, l9: () => eo })
      var r = n(25234),
        o = n.t(r, 2)
      function i(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r)
        }
      }
      var a = n(86202)
      function l(e, t = []) {
        let n = [],
          o = () => {
            let t = n.map((e) => r.createContext(e))
            return function (n) {
              let o = n?.[e] || t
              return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o])
            }
          }
        return (
          (o.scopeName = e),
          [
            function (t, o) {
              let i = r.createContext(o),
                l = n.length
              n = [...n, o]
              let u = (t) => {
                let { scope: n, children: o, ...u } = t,
                  s = n?.[e]?.[l] || i,
                  c = r.useMemo(() => u, Object.values(u))
                return (0, a.jsx)(s.Provider, { value: c, children: o })
              }
              return (
                (u.displayName = t + 'Provider'),
                [
                  u,
                  function (n, a) {
                    let u = a?.[e]?.[l] || i,
                      s = r.useContext(u)
                    if (s) return s
                    if (void 0 !== o) return o
                    throw Error(`\`${n}\` must be used within \`${t}\``)
                  },
                ]
              )
            },
            (function (...e) {
              let t = e[0]
              if (1 === e.length) return t
              let n = () => {
                let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }))
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`]
                    return { ...t, ...o }
                  }, {})
                  return r.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o])
                }
              }
              return (n.scopeName = t.scopeName), n
            })(o, ...t),
          ]
        )
      }
      function u(e, t) {
        if ('function' == typeof e) return e(t)
        null != e && (e.current = t)
      }
      function s(...e) {
        return (t) => {
          let n = !1,
            r = e.map((e) => {
              let r = u(e, t)
              return n || 'function' != typeof r || (n = !0), r
            })
          if (n)
            return () => {
              for (let t = 0; t < r.length; t++) {
                let n = r[t]
                'function' == typeof n ? n() : u(e[t], null)
              }
            }
        }
      }
      function c(...e) {
        return r.useCallback(s(...e), e)
      }
      function f(e) {
        let t = (function (e) {
            let t = r.forwardRef((e, t) => {
              let { children: n, ...o } = e
              if (r.isValidElement(n)) {
                var i
                let e,
                  a,
                  l =
                    ((i = n),
                    (a =
                      (e = Object.getOwnPropertyDescriptor(i.props, 'ref')?.get) &&
                      'isReactWarning' in e &&
                      e.isReactWarning)
                      ? i.ref
                      : (a =
                            (e = Object.getOwnPropertyDescriptor(i, 'ref')?.get) &&
                            'isReactWarning' in e &&
                            e.isReactWarning)
                        ? i.props.ref
                        : i.props.ref || i.ref),
                  u = (function (e, t) {
                    let n = { ...t }
                    for (let r in t) {
                      let o = e[r],
                        i = t[r]
                      ;/^on[A-Z]/.test(r)
                        ? o && i
                          ? (n[r] = (...e) => {
                              i(...e), o(...e)
                            })
                          : o && (n[r] = o)
                        : 'style' === r
                          ? (n[r] = { ...o, ...i })
                          : 'className' === r && (n[r] = [o, i].filter(Boolean).join(' '))
                    }
                    return { ...e, ...n }
                  })(o, n.props)
                return n.type !== r.Fragment && (u.ref = t ? s(t, l) : l), r.cloneElement(n, u)
              }
              return r.Children.count(n) > 1 ? r.Children.only(null) : null
            })
            return (t.displayName = `${e}.SlotClone`), t
          })(e),
          n = r.forwardRef((e, n) => {
            let { children: o, ...i } = e,
              l = r.Children.toArray(o),
              u = l.find(p)
            if (u) {
              let e = u.props.children,
                o = l.map((t) =>
                  t !== u
                    ? t
                    : r.Children.count(e) > 1
                      ? r.Children.only(null)
                      : r.isValidElement(e)
                        ? e.props.children
                        : null
                )
              return (0, a.jsx)(t, {
                ...i,
                ref: n,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null,
              })
            }
            return (0, a.jsx)(t, { ...i, ref: n, children: o })
          })
        return (n.displayName = `${e}.Slot`), n
      }
      var d = Symbol('radix.slottable')
      function p(e) {
        return (
          r.isValidElement(e) &&
          'function' == typeof e.type &&
          '__radixId' in e.type &&
          e.type.__radixId === d
        )
      }
      var m = globalThis?.document ? r.useLayoutEffect : () => {},
        v = o[' useId '.trim().toString()] || (() => void 0),
        y = 0
      function g(e) {
        let [t, n] = r.useState(v())
        return (
          m(() => {
            e || n((e) => e ?? String(y++))
          }, [e]),
          e || (t ? `radix-${t}` : '')
        )
      }
      n(92079)
      var b = [
        'a',
        'button',
        'div',
        'form',
        'h2',
        'h3',
        'img',
        'input',
        'label',
        'li',
        'nav',
        'ol',
        'p',
        'span',
        'svg',
        'ul',
      ].reduce((e, t) => {
        let n = f(`Primitive.${t}`),
          o = r.forwardRef((e, r) => {
            let { asChild: o, ...i } = e
            return (
              'undefined' != typeof window && (window[Symbol.for('radix-ui')] = !0),
              (0, a.jsx)(o ? n : t, { ...i, ref: r })
            )
          })
        return (o.displayName = `Primitive.${t}`), { ...e, [t]: o }
      }, {})
      function w(e) {
        let t = r.useRef(e)
        return (
          r.useEffect(() => {
            t.current = e
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        )
      }
      function h({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [o, i] = (function ({ defaultProp: e, onChange: t }) {
            let n = r.useState(e),
              [o] = n,
              i = r.useRef(o),
              a = w(t)
            return (
              r.useEffect(() => {
                i.current !== o && (a(o), (i.current = o))
              }, [o, i, a]),
              n
            )
          })({ defaultProp: t, onChange: n }),
          a = void 0 !== e,
          l = a ? e : o,
          u = w(n)
        return [
          l,
          r.useCallback(
            (t) => {
              if (a) {
                let n = 'function' == typeof t ? t(e) : t
                n !== e && u(n)
              } else i(t)
            },
            [a, e, i, u]
          ),
        ]
      }
      var N = r.createContext(void 0)
      function R(e) {
        let t = r.useContext(N)
        return e || t || 'ltr'
      }
      var x = 'rovingFocusGroup.onEntryFocus',
        C = { bubbles: !1, cancelable: !0 },
        I = 'RovingFocusGroup',
        [E, M, j] = (function (e) {
          let t = e + 'CollectionProvider',
            [n, o] = l(t),
            [i, u] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
            s = (e) => {
              let { scope: t, children: n } = e,
                o = r.useRef(null),
                l = r.useRef(new Map()).current
              return (0, a.jsx)(i, { scope: t, itemMap: l, collectionRef: o, children: n })
            }
          s.displayName = t
          let d = e + 'CollectionSlot',
            p = f(d),
            m = r.forwardRef((e, t) => {
              let { scope: n, children: r } = e,
                o = c(t, u(d, n).collectionRef)
              return (0, a.jsx)(p, { ref: o, children: r })
            })
          m.displayName = d
          let v = e + 'CollectionItemSlot',
            y = 'data-radix-collection-item',
            g = f(v),
            b = r.forwardRef((e, t) => {
              let { scope: n, children: o, ...i } = e,
                l = r.useRef(null),
                s = c(t, l),
                f = u(v, n)
              return (
                r.useEffect(
                  () => (f.itemMap.set(l, { ref: l, ...i }), () => void f.itemMap.delete(l))
                ),
                (0, a.jsx)(g, { ...{ [y]: '' }, ref: s, children: o })
              )
            })
          return (
            (b.displayName = v),
            [
              { Provider: s, Slot: m, ItemSlot: b },
              function (t) {
                let n = u(e + 'CollectionConsumer', t)
                return r.useCallback(() => {
                  let e = n.collectionRef.current
                  if (!e) return []
                  let t = Array.from(e.querySelectorAll('['.concat(y, ']')))
                  return Array.from(n.itemMap.values()).sort(
                    (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                  )
                }, [n.collectionRef, n.itemMap])
              },
              o,
            ]
          )
        })(I),
        [A, T] = l(I, [j]),
        [S, O] = A(I),
        _ = r.forwardRef((e, t) =>
          (0, a.jsx)(E.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, a.jsx)(E.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, a.jsx)(D, { ...e, ref: t }),
            }),
          })
        )
      _.displayName = I
      var D = r.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              orientation: o,
              loop: l = !1,
              dir: u,
              currentTabStopId: s,
              defaultCurrentTabStopId: f,
              onCurrentTabStopIdChange: d,
              onEntryFocus: p,
              preventScrollOnEntryFocus: m = !1,
              ...v
            } = e,
            y = r.useRef(null),
            g = c(t, y),
            N = R(u),
            [I = null, E] = h({ prop: s, defaultProp: f, onChange: d }),
            [j, A] = r.useState(!1),
            T = w(p),
            O = M(n),
            _ = r.useRef(!1),
            [D, P] = r.useState(0)
          return (
            r.useEffect(() => {
              let e = y.current
              if (e) return e.addEventListener(x, T), () => e.removeEventListener(x, T)
            }, [T]),
            (0, a.jsx)(S, {
              scope: n,
              orientation: o,
              dir: N,
              loop: l,
              currentTabStopId: I,
              onItemFocus: r.useCallback((e) => E(e), [E]),
              onItemShiftTab: r.useCallback(() => A(!0), []),
              onFocusableItemAdd: r.useCallback(() => P((e) => e + 1), []),
              onFocusableItemRemove: r.useCallback(() => P((e) => e - 1), []),
              children: (0, a.jsx)(b.div, {
                tabIndex: j || 0 === D ? -1 : 0,
                'data-orientation': o,
                ...v,
                ref: g,
                style: { outline: 'none', ...e.style },
                onMouseDown: i(e.onMouseDown, () => {
                  _.current = !0
                }),
                onFocus: i(e.onFocus, (e) => {
                  let t = !_.current
                  if (e.target === e.currentTarget && t && !j) {
                    let t = new CustomEvent(x, C)
                    if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                      let e = O().filter((e) => e.focusable)
                      k(
                        [e.find((e) => e.active), e.find((e) => e.id === I), ...e]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        m
                      )
                    }
                  }
                  _.current = !1
                }),
                onBlur: i(e.onBlur, () => A(!1)),
              }),
            })
          )
        }),
        P = 'RovingFocusGroupItem',
        F = r.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              focusable: o = !0,
              active: l = !1,
              tabStopId: u,
              ...s
            } = e,
            c = g(),
            f = u || c,
            d = O(P, n),
            p = d.currentTabStopId === f,
            m = M(n),
            { onFocusableItemAdd: v, onFocusableItemRemove: y } = d
          return (
            r.useEffect(() => {
              if (o) return v(), () => y()
            }, [o, v, y]),
            (0, a.jsx)(E.ItemSlot, {
              scope: n,
              id: f,
              focusable: o,
              active: l,
              children: (0, a.jsx)(b.span, {
                tabIndex: p ? 0 : -1,
                'data-orientation': d.orientation,
                ...s,
                ref: t,
                onMouseDown: i(e.onMouseDown, (e) => {
                  o ? d.onItemFocus(f) : e.preventDefault()
                }),
                onFocus: i(e.onFocus, () => d.onItemFocus(f)),
                onKeyDown: i(e.onKeyDown, (e) => {
                  if ('Tab' === e.key && e.shiftKey) return void d.onItemShiftTab()
                  if (e.target !== e.currentTarget) return
                  let t = (function (e, t, n) {
                    var r
                    let o =
                      ((r = e.key),
                      'rtl' !== n
                        ? r
                        : 'ArrowLeft' === r
                          ? 'ArrowRight'
                          : 'ArrowRight' === r
                            ? 'ArrowLeft'
                            : r)
                    if (
                      !('vertical' === t && ['ArrowLeft', 'ArrowRight'].includes(o)) &&
                      !('horizontal' === t && ['ArrowUp', 'ArrowDown'].includes(o))
                    )
                      return L[o]
                  })(e, d.orientation, d.dir)
                  if (void 0 !== t) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return
                    e.preventDefault()
                    let n = m()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current)
                    if ('last' === t) n.reverse()
                    else if ('prev' === t || 'next' === t) {
                      'prev' === t && n.reverse()
                      let r = n.indexOf(e.currentTarget)
                      n = d.loop
                        ? (function (e, t) {
                            return e.map((n, r) => e[(t + r) % e.length])
                          })(n, r + 1)
                        : n.slice(r + 1)
                    }
                    setTimeout(() => k(n))
                  }
                }),
              }),
            })
          )
        })
      F.displayName = P
      var L = {
        ArrowLeft: 'prev',
        ArrowUp: 'prev',
        ArrowRight: 'next',
        ArrowDown: 'next',
        PageUp: 'first',
        Home: 'first',
        PageDown: 'last',
        End: 'last',
      }
      function k(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = document.activeElement
        for (let r of e)
          if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return
      }
      var U = (e) => {
        let { present: t, children: n } = e,
          o = (function (e) {
            var t, n
            let [o, i] = r.useState(),
              a = r.useRef({}),
              l = r.useRef(e),
              u = r.useRef('none'),
              [s, c] =
                ((t = e ? 'mounted' : 'unmounted'),
                (n = {
                  mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
                  unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
                  unmounted: { MOUNT: 'mounted' },
                }),
                r.useReducer((e, t) => {
                  let r = n[e][t]
                  return null != r ? r : e
                }, t))
            return (
              r.useEffect(() => {
                let e = K(a.current)
                u.current = 'mounted' === s ? e : 'none'
              }, [s]),
              m(() => {
                let t = a.current,
                  n = l.current
                if (n !== e) {
                  let r = u.current,
                    o = K(t)
                  e
                    ? c('MOUNT')
                    : 'none' === o || (null == t ? void 0 : t.display) === 'none'
                      ? c('UNMOUNT')
                      : n && r !== o
                        ? c('ANIMATION_OUT')
                        : c('UNMOUNT'),
                    (l.current = e)
                }
              }, [e, c]),
              m(() => {
                if (o) {
                  var e
                  let t,
                    n = null != (e = o.ownerDocument.defaultView) ? e : window,
                    r = (e) => {
                      let r = K(a.current).includes(e.animationName)
                      if (e.target === o && r && (c('ANIMATION_END'), !l.current)) {
                        let e = o.style.animationFillMode
                        ;(o.style.animationFillMode = 'forwards'),
                          (t = n.setTimeout(() => {
                            'forwards' === o.style.animationFillMode &&
                              (o.style.animationFillMode = e)
                          }))
                      }
                    },
                    i = (e) => {
                      e.target === o && (u.current = K(a.current))
                    }
                  return (
                    o.addEventListener('animationstart', i),
                    o.addEventListener('animationcancel', r),
                    o.addEventListener('animationend', r),
                    () => {
                      n.clearTimeout(t),
                        o.removeEventListener('animationstart', i),
                        o.removeEventListener('animationcancel', r),
                        o.removeEventListener('animationend', r)
                    }
                  )
                }
                c('ANIMATION_END')
              }, [o, c]),
              {
                isPresent: ['mounted', 'unmountSuspended'].includes(s),
                ref: r.useCallback((e) => {
                  e && (a.current = getComputedStyle(e)), i(e)
                }, []),
              }
            )
          })(t),
          i = 'function' == typeof n ? n({ present: o.isPresent }) : r.Children.only(n),
          a = c(
            o.ref,
            (function (e) {
              var t, n
              let r =
                  null == (t = Object.getOwnPropertyDescriptor(e.props, 'ref')) ? void 0 : t.get,
                o = r && 'isReactWarning' in r && r.isReactWarning
              return o
                ? e.ref
                : (o =
                      (r =
                        null == (n = Object.getOwnPropertyDescriptor(e, 'ref')) ? void 0 : n.get) &&
                      'isReactWarning' in r &&
                      r.isReactWarning)
                  ? e.props.ref
                  : e.props.ref || e.ref
            })(i)
          )
        return 'function' == typeof n || o.isPresent ? r.cloneElement(i, { ref: a }) : null
      }
      function K(e) {
        return (null == e ? void 0 : e.animationName) || 'none'
      }
      U.displayName = 'Presence'
      var V = 'Tabs',
        [$, W] = l(V, [T]),
        G = T(),
        [z, B] = $(V),
        q = r.forwardRef((e, t) => {
          let {
              __scopeTabs: n,
              value: r,
              onValueChange: o,
              defaultValue: i,
              orientation: l = 'horizontal',
              dir: u,
              activationMode: s = 'automatic',
              ...c
            } = e,
            f = R(u),
            [d, p] = h({ prop: r, onChange: o, defaultProp: i })
          return (0, a.jsx)(z, {
            scope: n,
            baseId: g(),
            value: d,
            onValueChange: p,
            orientation: l,
            dir: f,
            activationMode: s,
            children: (0, a.jsx)(b.div, { dir: f, 'data-orientation': l, ...c, ref: t }),
          })
        })
      q.displayName = V
      var H = 'TabsList',
        Z = r.forwardRef((e, t) => {
          let { __scopeTabs: n, loop: r = !0, ...o } = e,
            i = B(H, n),
            l = G(n)
          return (0, a.jsx)(_, {
            asChild: !0,
            ...l,
            orientation: i.orientation,
            dir: i.dir,
            loop: r,
            children: (0, a.jsx)(b.div, {
              role: 'tablist',
              'aria-orientation': i.orientation,
              ...o,
              ref: t,
            }),
          })
        })
      Z.displayName = H
      var J = 'TabsTrigger',
        Q = r.forwardRef((e, t) => {
          let { __scopeTabs: n, value: r, disabled: o = !1, ...l } = e,
            u = B(J, n),
            s = G(n),
            c = ee(u.baseId, r),
            f = et(u.baseId, r),
            d = r === u.value
          return (0, a.jsx)(F, {
            asChild: !0,
            ...s,
            focusable: !o,
            active: d,
            children: (0, a.jsx)(b.button, {
              type: 'button',
              role: 'tab',
              'aria-selected': d,
              'aria-controls': f,
              'data-state': d ? 'active' : 'inactive',
              'data-disabled': o ? '' : void 0,
              disabled: o,
              id: c,
              ...l,
              ref: t,
              onMouseDown: i(e.onMouseDown, (e) => {
                o || 0 !== e.button || !1 !== e.ctrlKey ? e.preventDefault() : u.onValueChange(r)
              }),
              onKeyDown: i(e.onKeyDown, (e) => {
                ;[' ', 'Enter'].includes(e.key) && u.onValueChange(r)
              }),
              onFocus: i(e.onFocus, () => {
                let e = 'manual' !== u.activationMode
                d || o || !e || u.onValueChange(r)
              }),
            }),
          })
        })
      Q.displayName = J
      var X = 'TabsContent',
        Y = r.forwardRef((e, t) => {
          let { __scopeTabs: n, value: o, forceMount: i, children: l, ...u } = e,
            s = B(X, n),
            c = ee(s.baseId, o),
            f = et(s.baseId, o),
            d = o === s.value,
            p = r.useRef(d)
          return (
            r.useEffect(() => {
              let e = requestAnimationFrame(() => (p.current = !1))
              return () => cancelAnimationFrame(e)
            }, []),
            (0, a.jsx)(U, {
              present: i || d,
              children: (n) => {
                let { present: r } = n
                return (0, a.jsx)(b.div, {
                  'data-state': d ? 'active' : 'inactive',
                  'data-orientation': s.orientation,
                  role: 'tabpanel',
                  'aria-labelledby': c,
                  hidden: !r,
                  id: f,
                  tabIndex: 0,
                  ...u,
                  ref: t,
                  style: { ...e.style, animationDuration: p.current ? '0s' : void 0 },
                  children: r && l,
                })
              },
            })
          )
        })
      function ee(e, t) {
        return ''.concat(e, '-trigger-').concat(t)
      }
      function et(e, t) {
        return ''.concat(e, '-content-').concat(t)
      }
      Y.displayName = X
      var en = q,
        er = Z,
        eo = Q,
        ei = Y
    },
  },
])
