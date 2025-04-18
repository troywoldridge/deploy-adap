'use strict'
;(exports.id = 7242),
  (exports.ids = [7242]),
  (exports.modules = {
    67242: (e, t, n) => {
      n.d(t, { UC: () => ei, B8: () => er, bL: () => en, l9: () => eo })
      var r = n(76615),
        o = n.t(r, 2)
      function i(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r)
        }
      }
      var a = n(24518)
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
      function b(e) {
        let [t, n] = r.useState(v())
        return (
          m(() => {
            e || n((e) => e ?? String(y++))
          }, [e]),
          e || (t ? `radix-${t}` : '')
        )
      }
      n(49198)
      var g = [
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
      var R = r.createContext(void 0)
      function x(e) {
        let t = r.useContext(R)
        return e || t || 'ltr'
      }
      var N = 'rovingFocusGroup.onEntryFocus',
        C = { bubbles: !1, cancelable: !0 },
        E = 'RovingFocusGroup',
        [I, M, T] = (function (e) {
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
            b = f(v),
            g = r.forwardRef((e, t) => {
              let { scope: n, children: o, ...i } = e,
                l = r.useRef(null),
                s = c(t, l),
                f = u(v, n)
              return (
                r.useEffect(
                  () => (f.itemMap.set(l, { ref: l, ...i }), () => void f.itemMap.delete(l))
                ),
                (0, a.jsx)(b, { ...{ [y]: '' }, ref: s, children: o })
              )
            })
          return (
            (g.displayName = v),
            [
              { Provider: s, Slot: m, ItemSlot: g },
              function (t) {
                let n = u(e + 'CollectionConsumer', t)
                return r.useCallback(() => {
                  let e = n.collectionRef.current
                  if (!e) return []
                  let t = Array.from(e.querySelectorAll(`[${y}]`))
                  return Array.from(n.itemMap.values()).sort(
                    (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                  )
                }, [n.collectionRef, n.itemMap])
              },
              o,
            ]
          )
        })(E),
        [A, j] = l(E, [T]),
        [S, D] = A(E),
        O = r.forwardRef((e, t) =>
          (0, a.jsx)(I.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, a.jsx)(I.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, a.jsx)(F, { ...e, ref: t }),
            }),
          })
        )
      O.displayName = E
      var F = r.forwardRef((e, t) => {
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
            b = c(t, y),
            R = x(u),
            [E = null, I] = h({ prop: s, defaultProp: f, onChange: d }),
            [T, A] = r.useState(!1),
            j = w(p),
            D = M(n),
            O = r.useRef(!1),
            [F, P] = r.useState(0)
          return (
            r.useEffect(() => {
              let e = y.current
              if (e) return e.addEventListener(N, j), () => e.removeEventListener(N, j)
            }, [j]),
            (0, a.jsx)(S, {
              scope: n,
              orientation: o,
              dir: R,
              loop: l,
              currentTabStopId: E,
              onItemFocus: r.useCallback((e) => I(e), [I]),
              onItemShiftTab: r.useCallback(() => A(!0), []),
              onFocusableItemAdd: r.useCallback(() => P((e) => e + 1), []),
              onFocusableItemRemove: r.useCallback(() => P((e) => e - 1), []),
              children: (0, a.jsx)(g.div, {
                tabIndex: T || 0 === F ? -1 : 0,
                'data-orientation': o,
                ...v,
                ref: b,
                style: { outline: 'none', ...e.style },
                onMouseDown: i(e.onMouseDown, () => {
                  O.current = !0
                }),
                onFocus: i(e.onFocus, (e) => {
                  let t = !O.current
                  if (e.target === e.currentTarget && t && !T) {
                    let t = new CustomEvent(N, C)
                    if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                      let e = D().filter((e) => e.focusable)
                      U(
                        [e.find((e) => e.active), e.find((e) => e.id === E), ...e]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        m
                      )
                    }
                  }
                  O.current = !1
                }),
                onBlur: i(e.onBlur, () => A(!1)),
              }),
            })
          )
        }),
        P = 'RovingFocusGroupItem',
        _ = r.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              focusable: o = !0,
              active: l = !1,
              tabStopId: u,
              ...s
            } = e,
            c = b(),
            f = u || c,
            d = D(P, n),
            p = d.currentTabStopId === f,
            m = M(n),
            { onFocusableItemAdd: v, onFocusableItemRemove: y } = d
          return (
            r.useEffect(() => {
              if (o) return v(), () => y()
            }, [o, v, y]),
            (0, a.jsx)(I.ItemSlot, {
              scope: n,
              id: f,
              focusable: o,
              active: l,
              children: (0, a.jsx)(g.span, {
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
                    setTimeout(() => U(n))
                  }
                }),
              }),
            })
          )
        })
      _.displayName = P
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
      function U(e, t = !1) {
        let n = document.activeElement
        for (let r of e)
          if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return
      }
      var $ = (e) => {
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
                r.useReducer((e, t) => n[e][t] ?? e, t))
            return (
              r.useEffect(() => {
                let e = k(a.current)
                u.current = 'mounted' === s ? e : 'none'
              }, [s]),
              m(() => {
                let t = a.current,
                  n = l.current
                if (n !== e) {
                  let r = u.current,
                    o = k(t)
                  e
                    ? c('MOUNT')
                    : 'none' === o || t?.display === 'none'
                      ? c('UNMOUNT')
                      : n && r !== o
                        ? c('ANIMATION_OUT')
                        : c('UNMOUNT'),
                    (l.current = e)
                }
              }, [e, c]),
              m(() => {
                if (o) {
                  let e,
                    t = o.ownerDocument.defaultView ?? window,
                    n = (n) => {
                      let r = k(a.current).includes(n.animationName)
                      if (n.target === o && r && (c('ANIMATION_END'), !l.current)) {
                        let n = o.style.animationFillMode
                        ;(o.style.animationFillMode = 'forwards'),
                          (e = t.setTimeout(() => {
                            'forwards' === o.style.animationFillMode &&
                              (o.style.animationFillMode = n)
                          }))
                      }
                    },
                    r = (e) => {
                      e.target === o && (u.current = k(a.current))
                    }
                  return (
                    o.addEventListener('animationstart', r),
                    o.addEventListener('animationcancel', n),
                    o.addEventListener('animationend', n),
                    () => {
                      t.clearTimeout(e),
                        o.removeEventListener('animationstart', r),
                        o.removeEventListener('animationcancel', n),
                        o.removeEventListener('animationend', n)
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
              let t = Object.getOwnPropertyDescriptor(e.props, 'ref')?.get,
                n = t && 'isReactWarning' in t && t.isReactWarning
              return n
                ? e.ref
                : (n =
                      (t = Object.getOwnPropertyDescriptor(e, 'ref')?.get) &&
                      'isReactWarning' in t &&
                      t.isReactWarning)
                  ? e.props.ref
                  : e.props.ref || e.ref
            })(i)
          )
        return 'function' == typeof n || o.isPresent ? r.cloneElement(i, { ref: a }) : null
      }
      function k(e) {
        return e?.animationName || 'none'
      }
      $.displayName = 'Presence'
      var K = 'Tabs',
        [V, W] = l(K, [j]),
        B = j(),
        [G, q] = V(K),
        z = r.forwardRef((e, t) => {
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
            f = x(u),
            [d, p] = h({ prop: r, onChange: o, defaultProp: i })
          return (0, a.jsx)(G, {
            scope: n,
            baseId: b(),
            value: d,
            onValueChange: p,
            orientation: l,
            dir: f,
            activationMode: s,
            children: (0, a.jsx)(g.div, { dir: f, 'data-orientation': l, ...c, ref: t }),
          })
        })
      z.displayName = K
      var H = 'TabsList',
        Z = r.forwardRef((e, t) => {
          let { __scopeTabs: n, loop: r = !0, ...o } = e,
            i = q(H, n),
            l = B(n)
          return (0, a.jsx)(O, {
            asChild: !0,
            ...l,
            orientation: i.orientation,
            dir: i.dir,
            loop: r,
            children: (0, a.jsx)(g.div, {
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
            u = q(J, n),
            s = B(n),
            c = ee(u.baseId, r),
            f = et(u.baseId, r),
            d = r === u.value
          return (0, a.jsx)(_, {
            asChild: !0,
            ...s,
            focusable: !o,
            active: d,
            children: (0, a.jsx)(g.button, {
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
            s = q(X, n),
            c = ee(s.baseId, o),
            f = et(s.baseId, o),
            d = o === s.value,
            p = r.useRef(d)
          return (
            r.useEffect(() => {
              let e = requestAnimationFrame(() => (p.current = !1))
              return () => cancelAnimationFrame(e)
            }, []),
            (0, a.jsx)($, {
              present: i || d,
              children: ({ present: n }) =>
                (0, a.jsx)(g.div, {
                  'data-state': d ? 'active' : 'inactive',
                  'data-orientation': s.orientation,
                  role: 'tabpanel',
                  'aria-labelledby': c,
                  hidden: !n,
                  id: f,
                  tabIndex: 0,
                  ...u,
                  ref: t,
                  style: { ...e.style, animationDuration: p.current ? '0s' : void 0 },
                  children: n && l,
                }),
            })
          )
        })
      function ee(e, t) {
        return `${e}-trigger-${t}`
      }
      function et(e, t) {
        return `${e}-content-${t}`
      }
      Y.displayName = X
      var en = z,
        er = Z,
        eo = Q,
        ei = Y
    },
  })
