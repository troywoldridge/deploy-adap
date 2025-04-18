;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3758],
  {
    2573: (e, t, r) => {
      'use strict'
      var n = r(32105)
      function i(e) {
        return Object.keys(e)
          .sort()
          .reduce(function (t, r) {
            return (t[r] = e[r]), t
          }, {})
      }
      var a = {
        _getQueries: function (e, t) {
          var r = []
          return (
            r.push({ indexName: e, params: a._getHitsSearchParams(t) }),
            t.getRefinedDisjunctiveFacets().forEach(function (n) {
              r.push({ indexName: e, params: a._getDisjunctiveFacetSearchParams(t, n) })
            }),
            t.getRefinedHierarchicalFacets().forEach(function (n) {
              var i = t.getHierarchicalFacetByName(n),
                o = t.getHierarchicalRefinement(n),
                s = t._getHierarchicalFacetSeparator(i)
              if (o.length > 0 && o[0].split(s).length > 1) {
                var c = o[0]
                  .split(s)
                  .slice(0, -1)
                  .reduce(function (e, t, r) {
                    return e.concat({
                      attribute: i.attributes[r],
                      value: 0 === r ? t : [e[e.length - 1].value, t].join(s),
                    })
                  }, [])
                c.forEach(function (n, o) {
                  var s = a._getDisjunctiveFacetSearchParams(t, n.attribute, 0 === o)
                  function u(e) {
                    return i.attributes.some(function (t) {
                      return t === e.split(':')[0]
                    })
                  }
                  var l = (s.facetFilters || []).reduce(function (e, t) {
                      if (Array.isArray(t)) {
                        var r = t.filter(function (e) {
                          return !u(e)
                        })
                        r.length > 0 && e.push(r)
                      }
                      return 'string' != typeof t || u(t) || e.push(t), e
                    }, []),
                    f = c[o - 1]
                  o > 0
                    ? (s.facetFilters = l.concat(f.attribute + ':' + f.value))
                    : l.length > 0
                      ? (s.facetFilters = l)
                      : delete s.facetFilters,
                    r.push({ indexName: e, params: s })
                })
              }
            }),
            r
          )
        },
        _getCompositionQueries: function (e) {
          return [
            {
              compositionID: e.index,
              requestBody: { params: a._getCompositionHitsSearchParams(e) },
            },
          ]
        },
        _getHitsSearchParams: function (e) {
          var t = e.facets
              .concat(e.disjunctiveFacets)
              .concat(a._getHitsHierarchicalFacetsAttributes(e))
              .sort(),
            r = a._getFacetFilters(e),
            o = a._getNumericFilters(e),
            s = a._getTagFilters(e),
            c = {}
          return (
            t.length > 0 && (c.facets = t.indexOf('*') > -1 ? ['*'] : t),
            s.length > 0 && (c.tagFilters = s),
            r.length > 0 && (c.facetFilters = r),
            o.length > 0 && (c.numericFilters = o),
            i(n({}, e.getQueryParams(), c))
          )
        },
        _getCompositionHitsSearchParams: function (e) {
          var t = e.facets
              .concat(
                e.disjunctiveFacets.map(function (t) {
                  return e.disjunctiveFacetsRefinements &&
                    e.disjunctiveFacetsRefinements[t] &&
                    e.disjunctiveFacetsRefinements[t].length > 0
                    ? 'disjunctive(' + t + ')'
                    : t
                })
              )
              .concat(a._getHitsHierarchicalFacetsAttributes(e))
              .sort(),
            r = a._getFacetFilters(e),
            o = a._getNumericFilters(e),
            s = a._getTagFilters(e),
            c = {}
          t.length > 0 && (c.facets = t.indexOf('*') > -1 ? ['*'] : t),
            s.length > 0 && (c.tagFilters = s),
            r.length > 0 && (c.facetFilters = r),
            o.length > 0 && (c.numericFilters = o)
          var u = e.getQueryParams()
          return delete u.highlightPreTag, delete u.highlightPostTag, delete u.index, i(n({}, u, c))
        },
        _getDisjunctiveFacetSearchParams: function (e, t, r) {
          var o = a._getFacetFilters(e, t, r),
            s = a._getNumericFilters(e, t),
            c = a._getTagFilters(e),
            u = { hitsPerPage: 0, page: 0, analytics: !1, clickAnalytics: !1 }
          c.length > 0 && (u.tagFilters = c)
          var l = e.getHierarchicalFacetByName(t)
          return (
            l ? (u.facets = a._getDisjunctiveHierarchicalFacetAttribute(e, l, r)) : (u.facets = t),
            s.length > 0 && (u.numericFilters = s),
            o.length > 0 && (u.facetFilters = o),
            i(n({}, e.getQueryParams(), u))
          )
        },
        _getNumericFilters: function (e, t) {
          if (e.numericFilters) return e.numericFilters
          var r = []
          return (
            Object.keys(e.numericRefinements).forEach(function (n) {
              var i = e.numericRefinements[n] || {}
              Object.keys(i).forEach(function (e) {
                var a = i[e] || []
                t !== n &&
                  a.forEach(function (t) {
                    if (Array.isArray(t)) {
                      var i = t.map(function (t) {
                        return n + e + t
                      })
                      r.push(i)
                    } else r.push(n + e + t)
                  })
              })
            }),
            r
          )
        },
        _getTagFilters: function (e) {
          return e.tagFilters ? e.tagFilters : e.tagRefinements.join(',')
        },
        _getFacetFilters: function (e, t, r) {
          var n = [],
            i = e.facetsRefinements || {}
          Object.keys(i)
            .sort()
            .forEach(function (e) {
              ;(i[e] || [])
                .slice()
                .sort()
                .forEach(function (t) {
                  n.push(e + ':' + t)
                })
            })
          var a = e.facetsExcludes || {}
          Object.keys(a)
            .sort()
            .forEach(function (e) {
              ;(a[e] || []).sort().forEach(function (t) {
                n.push(e + ':-' + t)
              })
            })
          var o = e.disjunctiveFacetsRefinements || {}
          Object.keys(o)
            .sort()
            .forEach(function (e) {
              var r = o[e] || []
              if (e !== t && r && 0 !== r.length) {
                var i = []
                r
                  .slice()
                  .sort()
                  .forEach(function (t) {
                    i.push(e + ':' + t)
                  }),
                  n.push(i)
              }
            })
          var s = e.hierarchicalFacetsRefinements || {}
          return (
            Object.keys(s)
              .sort()
              .forEach(function (i) {
                var a,
                  o,
                  c = (s[i] || [])[0]
                if (void 0 !== c) {
                  var u = e.getHierarchicalFacetByName(i),
                    l = e._getHierarchicalFacetSeparator(u),
                    f = e._getHierarchicalRootPath(u)
                  if (t === i) {
                    if (
                      -1 === c.indexOf(l) ||
                      (!f && !0 === r) ||
                      (f && f.split(l).length === c.split(l).length)
                    )
                      return
                    f
                      ? ((o = f.split(l).length - 1), (c = f))
                      : ((o = c.split(l).length - 2), (c = c.slice(0, c.lastIndexOf(l)))),
                      (a = u.attributes[o])
                  } else (o = c.split(l).length - 1), (a = u.attributes[o])
                  a && n.push([a + ':' + c])
                }
              }),
            n
          )
        },
        _getHitsHierarchicalFacetsAttributes: function (e) {
          return e.hierarchicalFacets.reduce(function (t, r) {
            var n = e.getHierarchicalRefinement(r.name)[0]
            if (!n) return t.push(r.attributes[0]), t
            var i = e._getHierarchicalFacetSeparator(r),
              a = n.split(i).length,
              o = r.attributes.slice(0, a + 1)
            return t.concat(o)
          }, [])
        },
        _getDisjunctiveHierarchicalFacetAttribute: function (e, t, r) {
          var n = e._getHierarchicalFacetSeparator(t)
          if (!0 === r) {
            var i = e._getHierarchicalRootPath(t),
              a = 0
            return i && (a = i.split(n).length), [t.attributes[a]]
          }
          var o = (e.getHierarchicalRefinement(t.name)[0] || '').split(n).length - 1
          return t.attributes.slice(0, o + 1)
        },
        getSearchForFacetQuery: function (e, t, r, o) {
          var s = o.isDisjunctiveFacet(e) ? o.clearRefinements(e) : o,
            c = { facetQuery: t, facetName: e }
          return (
            'number' == typeof r && (c.maxFacetHits = r), i(n({}, a._getHitsSearchParams(s), c))
          )
        },
      }
      e.exports = a
    },
    7772: (e) => {
      'use strict'
      e.exports = function (e) {
        return Array.isArray(e) ? e.filter(Boolean) : []
      }
    },
    8304: (e) => {
      'use strict'
      e.exports = function (e, t) {
        if (Array.isArray(e)) {
          for (var r = 0; r < e.length; r++) if (t(e[r])) return e[r]
        }
      }
    },
    10150: (e) => {
      'use strict'
      e.exports = function (e, t) {
        if (null === e) return {}
        var r,
          n,
          i = {},
          a = Object.keys(e)
        for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r])
        return i
      }
    },
    12087: (e, t, r) => {
      'use strict'
      function n() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r]
        var n = t
          .map(function (e) {
            var t
            return [
              'https://www.algolia.com/doc/api-reference/widgets/',
              e.name,
              '/js/',
              void 0 !== (t = e.connector) && t ? '#connector' : '',
            ].join('')
          })
          .join(', ')
        return function (e) {
          return [e, 'See documentation: '.concat(n)].filter(Boolean).join('\n\n')
        }
      }
      r.d(t, { V: () => n })
    },
    13174: (e, t, r) => {
      'use strict'
      r.d(t, { m: () => n })
      var n = (0, r(25234).createContext)(null)
    },
    14117: (e, t, r) => {
      'use strict'
      function n(e) {
        return (n =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      r.d(t, {
        j: () =>
          function e(t, r, a) {
            var o, s
            if ((null != a && a(t, r)) || t === r) return !0
            if (t && r && (o = t.constructor) === r.constructor) {
              if (o === Date) return t.getTime() === r.getTime()
              if (o === RegExp) return t.toString() === r.toString()
              if (o === Array) {
                if ((s = t.length) === r.length) for (; s-- && e(t[s], r[s], a); );
                return -1 === s
              }
              if (!o || 'object' === n(t)) {
                for (o in ((s = 0), t))
                  if ((i.call(t, o) && ++s && !i.call(r, o)) || !(o in r) || !e(t[o], r[o], a))
                    return !1
                return Object.keys(r).length === s
              }
            }
            return t != t && r != r
          },
      })
      var i = Object.prototype.hasOwnProperty
    },
    14852: (e, t, r) => {
      'use strict'
      var n = r(16340)
      r.o(n, 'useRouter') &&
        r.d(t, {
          useRouter: function () {
            return n.useRouter
          },
        })
    },
    15291: (e, t, r) => {
      'use strict'
      function n() {}
      r.d(t, { l: () => n })
    },
    17335: (e) => {
      'use strict'
      e.exports = function (e, t) {
        e.prototype = Object.create(t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })
      }
    },
    17484: (e) => {
      'use strict'
      e.exports = function (e, t) {
        if (!Array.isArray(e)) return -1
        for (var r = 0; r < e.length; r++) if (t(e[r])) return r
        return -1
      }
    },
    18370: (e, t, r) => {
      'use strict'
      r.d(t, { G: () => tf })
      var n = r(25234),
        i = r(13174),
        a = r(93861),
        o = r(27080),
        s = r(50174)
      function c(e) {
        return (c =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function u(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { fallback: function () {} },
          r = t.fallback
        return 'undefined' == typeof window ? r() : e({ window: window })
      }
      var l = r(15291)
      function f(e, t) {
        for (var r, n = 0; n < e.length; n++) if (t((r = e[n]), n, e)) return r
      }
      function h(e) {
        return (h =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function d(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                var n, i, a
                ;(n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ('object' != h(e) || !e) return e
                      var r = e[Symbol.toPrimitive]
                      if (void 0 !== r) {
                        var n = r.call(e, t || 'default')
                        if ('object' != h(n)) return n
                        throw TypeError('@@toPrimitive must return a primitive value.')
                      }
                      return ('string' === t ? String : Number)(e)
                    })(e, 'string')
                    return 'symbol' == h(t) ? t : String(t)
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a)
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : d(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return e
      }
      function p(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
            if (null != r) {
              var n,
                i,
                a,
                o,
                s = [],
                c = !0,
                u = !1
              try {
                if (((a = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return
                  c = !1
                } else
                  for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
              } catch (e) {
                ;(u = !0), (i = e)
              } finally {
                try {
                  if (!c && null != r.return && ((o = r.return()), Object(o) !== o)) return
                } finally {
                  if (u) throw i
                }
              }
              return s
            }
          })(e, t) ||
          g(e, t) ||
          (function () {
            throw TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function g(e, t) {
        if (e) {
          if ('string' == typeof e) return y(e, t)
          var r = Object.prototype.toString.call(e).slice(8, -1)
          if (
            ('Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r)
          )
            return Array.from(e)
          if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return y(e, t)
        }
      }
      function y(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      var v = '2.17.2',
        b = 'https://cdn.jsdelivr.net/npm/search-insights@'.concat(
          v,
          '/dist/search-insights.min.js'
        )
      function S() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.insightsClient,
          r = e.insightsInitParams,
          n = e.onEvent,
          i = e.$$internal,
          a = void 0 !== i && i,
          o = e.$$automatic,
          s = void 0 !== o && o,
          h = t
        t ||
          null === t ||
          u(function (e) {
            var t = e.window,
              r = t.AlgoliaAnalyticsObject || 'aa'
            'string' == typeof r && (h = t[r]),
              h ||
                ((t.AlgoliaAnalyticsObject = r),
                t[r] ||
                  ((t[r] = function () {
                    t[r].queue || (t[r].queue = [])
                    for (var e = arguments.length, n = Array(e), i = 0; i < e; i++)
                      n[i] = arguments[i]
                    t[r].queue.push(n)
                  }),
                  (t[r].version = v),
                  (t[r].shouldAddScript = !0)),
                (h = t[r]))
          })
        var d = h || l.l
        return function (e) {
          var t,
            i,
            o = e.instantSearchInstance,
            u = o.middleware
              .filter(function (e) {
                return 'ais.insights' === e.instance.$$type && e.instance.$$internal
              })
              .map(function (e) {
                return e.creator
              })
          o.unuse.apply(
            o,
            (function (e) {
              if (Array.isArray(e)) return y(e)
            })(u) ||
              (function (e) {
                if (
                  ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
                  null != e['@@iterator']
                )
                  return Array.from(e)
              })(u) ||
              g(u) ||
              (function () {
                throw TypeError(
                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
              })()
          )
          var h = p(
              (function (e) {
                if (e.appId && e.apiKey) return [e.appId, e.apiKey]
                if (!e.transporter) return [e.applicationID, e.apiKey]
                var t = e.transporter,
                  r = t.headers || t.baseHeaders,
                  n = t.queryParameters || t.baseQueryParameters,
                  i = 'x-algolia-application-id',
                  a = 'x-algolia-api-key'
                return [r[i] || n[i], r[a] || n[a]]
              })(o.client),
              2
            ),
            v = h[0],
            S = h[1],
            R = void 0,
            P = void 0,
            w = void 0,
            F = d.queue
          if (Array.isArray(F)) {
            var x = ['setUserToken', 'init'].map(function (e) {
                var t =
                  f(F.slice().reverse(), function (t) {
                    return p(t, 1)[0] === e
                  }) || []
                return p(t, 2)[1]
              }),
              _ = p(x, 2)
            ;(P = _[0]), (R = _[1])
          }
          return (
            d('getUserToken', null, function (e, t) {
              w = j(t)
            }),
            (r || !O(d)) && d('init', m({ appId: v, apiKey: S, partial: !0 }, r)),
            {
              $$type: 'ais.insights',
              $$internal: a,
              $$automatic: s,
              onStateChange: function () {},
              subscribe: function () {
                if (d.shouldAddScript) {
                  var e =
                    '[insights middleware]: could not load search-insights.js. Please load it manually following https://alg.li/insights-init'
                  try {
                    var t = document.createElement('script')
                    ;(t.async = !0),
                      (t.src = b),
                      (t.onerror = function () {
                        o.emit('error', Error(e))
                      }),
                      document.body.appendChild(t),
                      (d.shouldAddScript = !1)
                  } catch (t) {
                    ;(d.shouldAddScript = !1), o.emit('error', Error(e))
                  }
                }
              },
              started: function () {
                d('addAlgoliaAgent', 'insights-middleware'), (i = o.mainHelper)
                var e,
                  u,
                  l,
                  h,
                  g,
                  y,
                  b,
                  F,
                  x,
                  _,
                  E,
                  T,
                  A,
                  I = d.queue
                if (Array.isArray(I)) {
                  var C = ['setUserToken', 'init'].map(function (e) {
                      var t =
                        f(I.slice().reverse(), function (t) {
                          return p(t, 1)[0] === e
                        }) || []
                      return p(t, 2)[1]
                    }),
                    D = p(C, 2)
                  ;(P = D[0]), (R = D[1])
                }
                ;(h =
                  (null == (u = (e = o)._initialResults) || null == (l = u[e.indexName])
                    ? void 0
                    : l.state) || {}),
                  (g = e.mainHelper.state),
                  (t = {
                    userToken: h.userToken || g.userToken,
                    clickAnalytics: h.clickAnalytics || g.clickAnalytics,
                  }),
                  s ||
                    i.overrideStateWithoutTriggeringChangeEvent(
                      m(m({}, i.state), {}, { clickAnalytics: !0 })
                    ),
                  a || o.scheduleSearch()
                var N = function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = j(e)
                  if (r) {
                    var n = i.state.userToken
                    t ? a() : setTimeout(a, 0)
                  }
                  function a() {
                    i.overrideStateWithoutTriggeringChangeEvent(
                      m(m({}, i.state), {}, { userToken: r })
                    ),
                      n && n !== e && o.scheduleSearch()
                  }
                }
                function k(e) {
                  N(e, !0), d('setUserToken', e)
                }
                var H = void 0,
                  Q = (function () {
                    if (
                      ('undefined' == typeof document ? 'undefined' : c(document)) === 'object' &&
                      'string' == typeof document.cookie
                    )
                      for (
                        var e = ''.concat('_ALGOLIA', '='), t = document.cookie.split(';'), r = 0;
                        r < t.length;
                        r++
                      ) {
                        for (var n = t[r]; ' ' === n.charAt(0); ) n = n.substring(1)
                        if (0 === n.indexOf(e)) return n.substring(e.length, n.length)
                      }
                  })()
                H =
                  Q ||
                  'anonymous-'.concat(
                    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
                      var t = (16 * Math.random()) | 0
                      return ('x' === e ? t : (3 & t) | 8).toString(16)
                    })
                  )
                var W = t.userToken
                null != r && r.userToken && (_ = r.userToken),
                  _
                    ? k(_)
                    : W
                      ? k(W)
                      : w
                        ? k(w)
                        : P
                          ? k(P)
                          : H &&
                            (k(H),
                            ((null != r && r.useCookie) || (null != (E = R) && E.useCookie)) &&
                              ((y = H),
                              (b =
                                (null == r ? void 0 : r.cookieDuration) ||
                                (null == (T = R) ? void 0 : T.cookieDuration)),
                              (F = new Date()).setTime(F.getTime() + (b || 15552e6)),
                              (x = 'expires='.concat(F.toUTCString())),
                              (document.cookie = '_ALGOLIA='.concat(y, ';').concat(x, ';path=/')))),
                  d(
                    'onUserTokenChange',
                    function (e) {
                      return N(e, !0)
                    },
                    { immediate: !0 }
                  )
                var L = d
                O(d) &&
                  (L = function (e, t) {
                    return d(e, t, {
                      headers: { 'X-Algolia-Application-Id': v, 'X-Algolia-API-Key': S },
                    })
                  })
                var U = new Set()
                o.mainHelper.derivedHelpers[0].on('result', function (e) {
                  var t = e.results
                  t && (!t.queryID || t.queryID !== A) && ((A = t.queryID), U.clear())
                }),
                  (o.sendEventToInsights = function (e) {
                    if (n) n(e, L)
                    else if (e.insightsMethod) {
                      if ('viewedObjectIDs' === e.insightsMethod) {
                        var t = e.payload,
                          r = t.objectIDs.filter(function (e) {
                            return !U.has(e)
                          })
                        if (0 === r.length) return
                        r.forEach(function (e) {
                          return U.add(e)
                        }),
                          (t.objectIDs = r)
                      }
                      ;(e.payload.algoliaSource = ['instantsearch']),
                        s && e.payload.algoliaSource.push('instantsearch-automatic'),
                        'internal' === e.eventModifier &&
                          e.payload.algoliaSource.push('instantsearch-internal'),
                        L(e.insightsMethod, e.payload)
                    }
                  })
              },
              unsubscribe: function () {
                d('onUserTokenChange', void 0),
                  (o.sendEventToInsights = l.l),
                  i &&
                    t &&
                    (i.overrideStateWithoutTriggeringChangeEvent(m(m({}, i.state), t)),
                    o.scheduleSearch())
              },
            }
          )
        }
      }
      function O(e) {
        var t = p((e.version || '').split('.').map(Number), 2),
          r = t[0],
          n = t[1]
        return r >= 3 || (2 === r && n >= 6) || (1 === r && n >= 10)
      }
      function j(e) {
        if (e) return 'number' == typeof e ? e.toString() : e
      }
      function R(e, t, r) {
        var n = t.getHelper()
        return {
          uiState: r,
          helper: n,
          parent: t,
          instantSearchInstance: e,
          state: n.state,
          renderState: e.renderState,
          templatesConfig: e.templatesConfig,
          createURL: t.createURL,
          scopedResults: [],
          searchMetadata: { isSearchStalled: 'stalled' === e.status },
          status: e.status,
          error: e.error,
        }
      }
      function P(e, t, r) {
        var n = t.getResultsForWidget(r),
          i = t.getHelper()
        return {
          helper: i,
          parent: t,
          instantSearchInstance: e,
          results: n,
          scopedResults: t.getScopedResults(),
          state: n && '_state' in n ? n._state : i.state,
          renderState: e.renderState,
          templatesConfig: e.templatesConfig,
          createURL: t.createURL,
          searchMetadata: { isSearchStalled: 'stalled' === e.status },
          status: e.status,
          error: e.error,
        }
      }
      var w = r(99684)
      function F(e) {
        return (F =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function x(e, t, r) {
        return (
          (t = _(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function _(e) {
        var t = (function (e, t) {
          if ('object' != F(e) || !e) return e
          var r = e[Symbol.toPrimitive]
          if (void 0 !== r) {
            var n = r.call(e, t || 'default')
            if ('object' != F(n)) return n
            throw TypeError('@@toPrimitive must return a primitive value.')
          }
          return ('string' === t ? String : Number)(e)
        })(e, 'string')
        return 'symbol' == F(t) ? t : String(t)
      }
      var E = function (e) {
          e && (window.document.title = e)
        },
        T = (function () {
          var e
          function t(e) {
            var r = this,
              n = e.windowTitle,
              i = e.writeDelay,
              a = e.createURL,
              o = e.parseURL,
              s = e.getLocation,
              c = e.start,
              l = e.dispose,
              f = e.push,
              h = e.cleanUrlOnDispose
            if (!(this instanceof t)) throw TypeError('Cannot call a class as a function')
            x(this, '$$type', 'ais.browser'),
              x(this, 'windowTitle', void 0),
              x(this, 'writeDelay', void 0),
              x(this, '_createURL', void 0),
              x(this, 'parseURL', void 0),
              x(this, 'getLocation', void 0),
              x(this, 'writeTimer', void 0),
              x(this, '_onPopState', void 0),
              x(this, 'inPopState', !1),
              x(this, 'isDisposed', !1),
              x(this, 'latestAcknowledgedHistory', 0),
              x(this, '_start', void 0),
              x(this, '_dispose', void 0),
              x(this, '_push', void 0),
              x(this, '_cleanUrlOnDispose', void 0),
              (this.windowTitle = n),
              (this.writeTimer = void 0),
              (this.writeDelay = void 0 === i ? 400 : i),
              (this._createURL = a),
              (this.parseURL = o),
              (this.getLocation = s),
              (this._start = c),
              (this._dispose = l),
              (this._push = f),
              (this._cleanUrlOnDispose = void 0 === h || h),
              u(function (e) {
                var t = e.window
                E(r.windowTitle && r.windowTitle(r.read())),
                  (r.latestAcknowledgedHistory = t.history.length)
              })
          }
          return (
            (e = [
              {
                key: 'read',
                value: function () {
                  return this.parseURL({ qsModule: w, location: this.getLocation() })
                },
              },
              {
                key: 'write',
                value: function (e) {
                  var t = this
                  u(function (r) {
                    var n = r.window,
                      i = t.createURL(e),
                      a = t.windowTitle && t.windowTitle(e)
                    t.writeTimer && clearTimeout(t.writeTimer),
                      (t.writeTimer = setTimeout(function () {
                        E(a),
                          t.shouldWrite(i) &&
                            (t._push ? t._push(i) : n.history.pushState(e, a || '', i),
                            (t.latestAcknowledgedHistory = n.history.length)),
                          (t.inPopState = !1),
                          (t.writeTimer = void 0)
                      }, t.writeDelay))
                  })
                },
              },
              {
                key: 'onUpdate',
                value: function (e) {
                  var t = this
                  this._start &&
                    this._start(function () {
                      e(t.read())
                    }),
                    (this._onPopState = function () {
                      t.writeTimer && (clearTimeout(t.writeTimer), (t.writeTimer = void 0)),
                        (t.inPopState = !0),
                        e(t.read())
                    }),
                    u(function (e) {
                      e.window.addEventListener('popstate', t._onPopState)
                    })
                },
              },
              {
                key: 'createURL',
                value: function (e) {
                  return this._createURL({
                    qsModule: w,
                    routeState: e,
                    location: this.getLocation(),
                  })
                },
              },
              {
                key: 'dispose',
                value: function () {
                  var e = this
                  this._dispose && this._dispose(),
                    (this.isDisposed = !0),
                    u(function (t) {
                      var r = t.window
                      e._onPopState && r.removeEventListener('popstate', e._onPopState)
                    }),
                    this.writeTimer && clearTimeout(this.writeTimer),
                    this._cleanUrlOnDispose && this.write({})
                },
              },
              {
                key: 'start',
                value: function () {
                  this.isDisposed = !1
                },
              },
              {
                key: 'shouldWrite',
                value: function (e) {
                  var t = this
                  return u(function (r) {
                    var n = r.window
                    if (t.isDisposed && !t._cleanUrlOnDispose) return !1
                    var i = !(t.isDisposed && t.latestAcknowledgedHistory !== n.history.length)
                    return !t.inPopState && i && e !== n.location.href
                  })
                },
              },
            ]),
            (function (e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r]
                ;(n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  'value' in n && (n.writable = !0),
                  Object.defineProperty(e, _(n.key), n)
              }
            })(t.prototype, e),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            t
          )
        })()
      function A(e) {
        return (A =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      var I = ['configure']
      function C(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? C(Object(r), !0).forEach(function (t) {
                N(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : C(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return e
      }
      function N(e, t, r) {
        var n
        return (
          ((n = (function (e, t) {
            if ('object' != A(e) || !e) return e
            var r = e[Symbol.toPrimitive]
            if (void 0 !== r) {
              var n = r.call(e, t || 'default')
              if ('object' != A(n)) return n
              throw TypeError('@@toPrimitive must return a primitive value.')
            }
            return ('string' === t ? String : Number)(e)
          })(t, 'string')),
          (t = 'symbol' == A(n) ? n : String(n)) in e)
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function k(e) {
        return (
          e.configure,
          (function (e, t) {
            if (null == e) return {}
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {}
                var r,
                  n,
                  i = {},
                  a = Object.keys(e)
                for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r])
                return i
              })(e, t)
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e)
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (i[r] = e[r])
            }
            return i
          })(e, I)
        )
      }
      function H(e) {
        return e !== Object(e)
      }
      function Q(e) {
        return (Q =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function W(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? W(Object(r), !0).forEach(function (t) {
                U(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : W(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return e
      }
      function U(e, t, r) {
        var n
        return (
          ((n = (function (e, t) {
            if ('object' != Q(e) || !e) return e
            var r = e[Symbol.toPrimitive]
            if (void 0 !== r) {
              var n = r.call(e, t || 'default')
              if ('object' != Q(n)) return n
              throw TypeError('@@toPrimitive must return a primitive value.')
            }
            return ('string' === t ? String : Number)(e)
          })(t, 'string')),
          (t = 'symbol' == Q(n) ? n : String(n)) in e)
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      var q = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.router,
            r =
              void 0 === t
                ? (function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                      t = e.createURL,
                      r =
                        void 0 === t
                          ? function (e) {
                              var t = e.qsModule,
                                r = e.routeState,
                                n = e.location,
                                i = n.protocol,
                                a = n.hostname,
                                o = n.port,
                                s = void 0 === o ? '' : o,
                                c = n.pathname,
                                u = n.hash,
                                l = t.stringify(r),
                                f = '' === s ? '' : ':'.concat(s)
                              return l
                                ? ''
                                    .concat(i, '//')
                                    .concat(a)
                                    .concat(f)
                                    .concat(c, '?')
                                    .concat(l)
                                    .concat(u)
                                : ''.concat(i, '//').concat(a).concat(f).concat(c).concat(u)
                            }
                          : t,
                      n = e.parseURL,
                      i =
                        void 0 === n
                          ? function (e) {
                              var t = e.qsModule,
                                r = e.location
                              return t.parse(r.search.slice(1), { arrayLimit: 99 })
                            }
                          : n,
                      a = e.writeDelay,
                      o = e.windowTitle,
                      s = e.getLocation
                    return new T({
                      createURL: r,
                      parseURL: i,
                      writeDelay: void 0 === a ? 400 : a,
                      windowTitle: o,
                      getLocation:
                        void 0 === s
                          ? function () {
                              return u(
                                function (e) {
                                  return e.window.location
                                },
                                {
                                  fallback: function () {
                                    throw Error(
                                      'You need to provide `getLocation` to the `history` router in environments where `window` does not exist.'
                                    )
                                  },
                                }
                              )
                            }
                          : s,
                      start: e.start,
                      dispose: e.dispose,
                      push: e.push,
                      cleanUrlOnDispose: e.cleanUrlOnDispose,
                    })
                  })()
                : t,
            n = e.stateMapping,
            i =
              void 0 === n
                ? {
                    $$type: 'ais.simple',
                    stateToRoute: function (e) {
                      return Object.keys(e).reduce(function (t, r) {
                        return D(D({}, t), {}, N({}, r, k(e[r])))
                      }, {})
                    },
                    routeToState: function () {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      return Object.keys(e).reduce(function (t, r) {
                        return D(D({}, t), {}, N({}, r, k(e[r])))
                      }, {})
                    },
                  }
                : n,
            a = e.$$internal,
            o = void 0 !== a && a
          return function (e) {
            var t = e.instantSearchInstance
            t._createURL = function (e) {
              var n =
                  0 === t.mainIndex.getWidgets().length
                    ? t._initialUiState
                    : t.mainIndex.getWidgetUiState({}),
                a = Object.keys(e).reduce(function (t, r) {
                  return L(L({}, t), {}, U({}, r, e[r]))
                }, n),
                o = i.stateToRoute(a)
              return r.createURL(o)
            }
            var n = void 0,
              a = t._initialUiState
            return {
              $$type: 'ais.router({router:'
                .concat(r.$$type || '__unknown__', ', stateMapping:')
                .concat(i.$$type || '__unknown__', '})'),
              $$internal: o,
              onStateChange: function (e) {
                var t = e.uiState,
                  a = i.stateToRoute(t)
                ;(void 0 === n ||
                  !(function e(t, r) {
                    if (t === r) return !0
                    if (H(t) || H(r) || 'function' == typeof t || 'function' == typeof r)
                      return t === r
                    if (Object.keys(t).length !== Object.keys(r).length) return !1
                    for (var n = 0, i = Object.keys(t); n < i.length; n++) {
                      var a = i[n]
                      if (!(a in r) || !e(t[a], r[a])) return !1
                    }
                    return !0
                  })(n, a)) &&
                  (r.write(a), (n = a))
              },
              subscribe: function () {
                ;(t._initialUiState = L(L({}, a), i.routeToState(r.read()))),
                  r.onUpdate(function (e) {
                    t.mainIndex.getWidgets().length > 0 && t.setUiState(i.routeToState(e))
                  })
              },
              started: function () {
                var e
                null == (e = r.start) || e.call(r)
              },
              unsubscribe: function () {
                r.dispose()
              },
            }
          }
        },
        $ = r(12087)
      function V(e) {
        return 'ais.index' === e.$$type
      }
      var B = r(78461),
        M = 0
      function J(e) {
        return (J =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      var z = ['initialSearchParameters'],
        G = ['initialRecommendParameters']
      function K(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? K(Object(r), !0).forEach(function (t) {
                X(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : K(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return e
      }
      function X(e, t, r) {
        var n
        return (
          ((n = (function (e, t) {
            if ('object' != J(e) || !e) return e
            var r = e[Symbol.toPrimitive]
            if (void 0 !== r) {
              var n = r.call(e, t || 'default')
              if ('object' != J(n)) return n
              throw TypeError('@@toPrimitive must return a primitive value.')
            }
            return ('string' === t ? String : Number)(e)
          })(t, 'string')),
          (t = 'symbol' == J(n) ? n : String(n)) in e)
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function Y(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return ee(e)
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e)
          })(e) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return ee(e, void 0)
              var r = Object.prototype.toString.call(e).slice(8, -1)
              if (
                ('Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r)
              )
                return Array.from(e)
              if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return ee(e, t)
            }
          })(e) ||
          (function () {
            throw TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function ee(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function et(e, t) {
        if (null == e) return {}
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {}
            var r,
              n,
              i = {},
              a = Object.keys(e)
            for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r])
            return i
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              !(t.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, r) &&
                (i[r] = e[r])
        }
        return i
      }
      var er = (0, $.V)({ name: 'index-widget' })
      function en(e, t) {
        var r = t.state,
          n = t.recommendState,
          i = t.isPageReset,
          a = t._uiState
        r !== e.state &&
          ((e.state = r),
          e.emit('change', {
            state: e.state,
            results: e.lastResults,
            isPageReset: i,
            _uiState: a,
          })),
          n !== e.recommendState && (e.recommendState = n)
      }
      function ei(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        return e.reduce(function (e, r) {
          return !V(r) && (r.getWidgetUiState || r.getWidgetState)
            ? r.getWidgetUiState
              ? r.getWidgetUiState(e, t)
              : r.getWidgetState(e, t)
            : e
        }, r)
      }
      function ea(e, t) {
        var r = t.initialSearchParameters,
          n = et(t, z)
        return e.reduce(function (e, t) {
          return !t.getWidgetSearchParameters || V(t)
            ? e
            : 'search' === t.dependsOn && t.getWidgetParameters
              ? t.getWidgetParameters(e, n)
              : t.getWidgetSearchParameters(e, n)
        }, r)
      }
      function eo(e, t) {
        var r = t.initialRecommendParameters,
          n = et(t, G)
        return e.reduce(function (e, t) {
          return !V(t) && 'recommend' === t.dependsOn && t.getWidgetParameters
            ? t.getWidgetParameters(e, n)
            : e
        }, r)
      }
      let es = function (e) {
        if (void 0 === e || void 0 === e.indexName)
          throw Error(er('The `indexName` option is required.'))
        var t = e.indexName,
          r = e.indexId,
          n = void 0 === r ? t : r,
          i = [],
          a = {},
          o = null,
          c = null,
          u = null,
          l = null,
          f = null,
          h = !1,
          d = !1
        return {
          $$type: 'ais.index',
          $$widgetType: 'ais.index',
          getIndexName: function () {
            return t
          },
          getIndexId: function () {
            return n
          },
          getHelper: function () {
            return u
          },
          getResults: function () {
            var e
            return null != (e = l) && e.lastResults
              ? ((l.lastResults._state = u.state), l.lastResults)
              : null
          },
          getResultsForWidget: function (e) {
            var t
            return 'recommend' !== e.dependsOn || V(e) || void 0 === e.$$id
              ? this.getResults()
              : null != (t = u) && t.lastRecommendResults
                ? u.lastRecommendResults[e.$$id]
                : null
          },
          getPreviousState: function () {
            return f
          },
          getScopedResults: function () {
            var e,
              r = this.getParent()
            return (function e(t) {
              return t.filter(V).reduce(function (t, r) {
                return t.concat.apply(
                  t,
                  [
                    { indexId: r.getIndexId(), results: r.getResults(), helper: r.getHelper() },
                  ].concat(Y(e(r.getWidgets())))
                )
              }, [])
            })(r ? r.getWidgets() : 0 === t.length ? this.getWidgets() : [this])
          },
          getParent: function () {
            return c
          },
          createURL: function (e) {
            return 'function' == typeof e
              ? o._createURL(X({}, n, e(a)))
              : o._createURL(X({}, n, ei(i, { searchParameters: e, helper: u })))
          },
          getWidgets: function () {
            return i
          },
          addWidgets: function (e) {
            var t = this
            if (!Array.isArray(e))
              throw Error(er('The `addWidgets` method expects an array of widgets.'))
            if (
              e.some(function (e) {
                return 'function' != typeof e.init && 'function' != typeof e.render
              })
            )
              throw Error(er('The widget definition expects a `render` and/or an `init` method.'))
            return (
              e.forEach(function (e) {
                !V(e) &&
                  (o && 'recommend' === e.dependsOn
                    ? (o._hasRecommendWidget = !0)
                    : o
                      ? (o._hasSearchWidget = !0)
                      : 'recommend' === e.dependsOn
                        ? (h = !0)
                        : (d = !0),
                  'recommend' === e.dependsOn && (e.$$id = M++))
              }),
              (i = i.concat(e)),
              o &&
                e.length &&
                (en(u, {
                  state: ea(i, { uiState: a, initialSearchParameters: u.state }),
                  recommendState: eo(i, {
                    uiState: a,
                    initialRecommendParameters: u.recommendState,
                  }),
                  _uiState: a,
                }),
                e.forEach(function (e) {
                  e.getRenderState &&
                    ec({
                      renderState: e.getRenderState(
                        o.renderState[t.getIndexId()] || {},
                        R(o, t, o._initialUiState)
                      ),
                      instantSearchInstance: o,
                      parent: t,
                    })
                }),
                e.forEach(function (e) {
                  e.init && e.init(R(o, t, o._initialUiState))
                }),
                o.scheduleSearch()),
              this
            )
          },
          removeWidgets: function (e) {
            var t = this
            if (!Array.isArray(e))
              throw Error(er('The `removeWidgets` method expects an array of widgets.'))
            if (
              e.some(function (e) {
                return 'function' != typeof e.dispose
              })
            )
              throw Error(er('The widget definition expects a `dispose` method.'))
            if (
              ((i = i.filter(function (t) {
                return -1 === e.indexOf(t)
              })).forEach(function (e) {
                V(e) ||
                  (o && 'recommend' === e.dependsOn
                    ? (o._hasRecommendWidget = !0)
                    : o
                      ? (o._hasSearchWidget = !0)
                      : 'recommend' === e.dependsOn
                        ? (h = !0)
                        : (d = !0))
              }),
              o && e.length)
            ) {
              var r = e.reduce(
                  function (e, r) {
                    var n = r.dispose({
                      helper: u,
                      state: e.cleanedSearchState,
                      recommendState: e.cleanedRecommendState,
                      parent: t,
                    })
                    return (
                      n instanceof s.RecommendParameters
                        ? (e.cleanedRecommendState = n)
                        : n && (e.cleanedSearchState = n),
                      e
                    )
                  },
                  { cleanedSearchState: u.state, cleanedRecommendState: u.recommendState }
                ),
                n = r.cleanedSearchState,
                c = r.cleanedRecommendState,
                l = o.future.preserveSharedStateOnUnmount
                  ? ea(i, {
                      uiState: a,
                      initialSearchParameters: new s.SearchParameters({
                        index: this.getIndexName(),
                      }),
                    })
                  : ea(i, {
                      uiState: ei(i, { searchParameters: n, helper: u }),
                      initialSearchParameters: n,
                    })
              ;(a = ei(i, { searchParameters: l, helper: u })),
                u.setState(l),
                (u.recommendState = c),
                i.length && o.scheduleSearch()
            }
            return this
          },
          init: function (e) {
            var r,
              m = this,
              p = e.instantSearchInstance,
              g = e.parent,
              y = e.uiState
            if (null === u) {
              ;(o = p), (c = g), (a = y[n] || {})
              var v = p.mainHelper,
                b = ea(i, {
                  uiState: a,
                  initialSearchParameters: new s.SearchParameters({ index: t }),
                }),
                S = eo(i, { uiState: a, initialRecommendParameters: new s.RecommendParameters() })
              ;((u = s({}, b.index, b)).recommendState = S),
                (u.search = function () {
                  return p.onStateChange
                    ? (p.onStateChange({
                        uiState: p.mainIndex.getWidgetUiState({}),
                        setUiState: function (e) {
                          return p.setUiState(e, !1)
                        },
                      }),
                      v)
                    : v.search()
                }),
                (u.searchWithoutTriggeringOnStateChange = function () {
                  return v.search()
                }),
                (u.searchForFacetValues = function (e, t, r, n) {
                  var i = u.state.setQueryParameters(n)
                  return v.searchForFacetValues(e, t, r, i)
                }),
                (l = v.derive(
                  function () {
                    return B.p.apply(
                      void 0,
                      [v.state].concat(
                        Y(
                          (function (e) {
                            for (var t = e.getParent(), r = [e.getHelper().state]; null !== t; )
                              (r = [t.getHelper().state].concat(r)), (t = t.getParent())
                            return r
                          })(m)
                        )
                      )
                    )
                  },
                  function () {
                    return m.getHelper().recommendState
                  }
                ))
              var O = null == (r = p._initialResults) ? void 0 : r[this.getIndexId()]
              if (null != O && O.results) {
                var j = new s.SearchResults(new s.SearchParameters(O.state), O.results)
                ;(l.lastResults = j), (u.lastResults = j)
              }
              if (null != O && O.recommendResults) {
                var P = new s.RecommendResults(
                  new s.RecommendParameters({ params: O.recommendResults.params }),
                  O.recommendResults.results
                )
                ;(l.lastRecommendResults = P), (u.lastRecommendResults = P)
              }
              u.on('change', function (e) {
                e.isPageReset &&
                  (function e(t) {
                    var r = t.filter(V)
                    0 !== r.length &&
                      r.forEach(function (t) {
                        var r = t.getHelper()
                        en(r, {
                          state: r.state.resetPage(),
                          recommendState: r.recommendState,
                          isPageReset: !0,
                        }),
                          e(t.getWidgets())
                      })
                  })(i)
              }),
                l.on('search', function () {
                  p.scheduleStalledRender()
                }),
                l.on('result', function (e) {
                  var t = e.results
                  p.scheduleRender(), (u.lastResults = t), (f = null == t ? void 0 : t._state)
                }),
                l.on('recommend:result', function (e) {
                  var t = e.recommend
                  p.scheduleRender(), (u.lastRecommendResults = t.results)
                }),
                i.forEach(function (e) {
                  e.getRenderState &&
                    ec({
                      renderState: e.getRenderState(
                        p.renderState[m.getIndexId()] || {},
                        R(p, m, y)
                      ),
                      instantSearchInstance: p,
                      parent: m,
                    })
                }),
                i.forEach(function (e) {
                  e.init && e.init(R(p, m, y))
                }),
                u.on('change', function (e) {
                  var t = e.state,
                    r = e._uiState
                  ;(a = ei(i, { searchParameters: t, helper: u }, r || {})),
                    p.onStateChange || p.onInternalStateChange()
                }),
                O && p.scheduleRender(),
                h && (p._hasRecommendWidget = !0),
                d && (p._hasSearchWidget = !0)
            }
          },
          render: function (e) {
            var t,
              r = this,
              n = e.instantSearchInstance
            'error' === n.status && !n.mainHelper.hasPendingRequests() && f && u.setState(f)
            var a =
              this.getResults() || (null != (t = l) && t.lastRecommendResults) ? i : i.filter(V)
            ;(a = a.filter(function (e) {
              return !e.shouldRender || e.shouldRender({ instantSearchInstance: n })
            })).forEach(function (e) {
              e.getRenderState &&
                ec({
                  renderState: e.getRenderState(n.renderState[r.getIndexId()] || {}, P(n, r, e)),
                  instantSearchInstance: n,
                  parent: r,
                })
            }),
              a.forEach(function (e) {
                e.render && e.render(P(n, r, e))
              })
          },
          dispose: function () {
            var e,
              t,
              r = this
            i.forEach(function (e) {
              e.dispose &&
                u &&
                e.dispose({
                  helper: u,
                  state: u.state,
                  recommendState: u.recommendState,
                  parent: r,
                })
            }),
              (o = null),
              (c = null),
              null == (e = u) || e.removeAllListeners(),
              (u = null),
              null == (t = l) || t.detach(),
              (l = null)
          },
          getWidgetUiState: function (e) {
            return i.filter(V).reduce(
              function (e, t) {
                return t.getWidgetUiState(e)
              },
              Z(Z({}, e), {}, X({}, n, Z(Z({}, e[n]), a)))
            )
          },
          getWidgetState: function (e) {
            return this.getWidgetUiState(e)
          },
          getWidgetSearchParameters: function (e, t) {
            var r = t.uiState
            return ea(i, { uiState: r, initialSearchParameters: e })
          },
          refreshUiState: function () {
            a = ei(i, { searchParameters: this.getHelper().state, helper: this.getHelper() }, a)
          },
          setIndexUiState: function (e) {
            var t = 'function' == typeof e ? e(a) : e
            o.setUiState(function (e) {
              return Z(Z({}, e), {}, X({}, n, t))
            })
          },
        }
      }
      function ec(e) {
        var t = e.renderState,
          r = e.instantSearchInstance,
          n = e.parent,
          i = n ? n.getIndexId() : r.mainIndex.getIndexId()
        r.renderState = Z(Z({}, r.renderState), {}, X({}, i, Z(Z({}, r.renderState[i]), t)))
      }
      var eu = function (e) {
        return function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = t.descendantName,
            n = t.modifierName
          return ''
            .concat('ais', '-')
            .concat(e)
            .concat(r ? '-'.concat(r) : '')
            .concat(n ? '--'.concat(n) : '')
        }
      }
      function el(e, t) {
        return (Array.isArray(t) ? t : t.split('.')).reduce(function (e, t) {
          return e && e[t]
        }, e)
      }
      function ef(e) {
        return (ef =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function eh(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ed(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? eh(Object(r), !0).forEach(function (t) {
                em(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eh(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return e
      }
      function em(e, t, r) {
        var n
        return (
          ((n = (function (e, t) {
            if ('object' != ef(e) || !e) return e
            var r = e[Symbol.toPrimitive]
            if (void 0 !== r) {
              var n = r.call(e, t || 'default')
              if ('object' != ef(n)) return n
              throw TypeError('@@toPrimitive must return a primitive value.')
            }
            return ('string' === t ? String : Number)(e)
          })(t, 'string')),
          (t = 'symbol' == ef(n) ? n : String(n)) in e)
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      var ep = { highlightPreTag: '__ais-highlight__', highlightPostTag: '__/ais-highlight__' },
        eg = { highlightPreTag: '<mark>', highlightPostTag: '</mark>' }
      function ey(e) {
        return isPlainObject(e) && 'string' != typeof e.value
          ? Object.keys(e).reduce(function (t, r) {
              return ed(ed({}, t), {}, em({}, r, ey(e[r])))
            }, {})
          : Array.isArray(e)
            ? e.map(ey)
            : ed(
                ed({}, e),
                {},
                {
                  value: escape(e.value)
                    .replace(RegExp(ep.highlightPreTag, 'g'), eg.highlightPreTag)
                    .replace(RegExp(ep.highlightPostTag, 'g'), eg.highlightPostTag),
                }
              )
      }
      var ev = eu('Highlight')
      function eb(e) {
        var t = eg.highlightPreTag,
          r = eg.highlightPostTag
        return e
          .map(function (e) {
            return e.isHighlighted ? t + e.value + r : e.value
          })
          .join('')
      }
      RegExp(/[&<>"']/g.source)
      var eS = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" },
        eO = /&(amp|quot|lt|gt|#39);/g,
        ej = RegExp(eO.source),
        eR = new RegExp(/\w/i)
      function eP(e) {
        return (eP =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function ew(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function eF(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ew(Object(r), !0).forEach(function (t) {
                var n, i, a
                ;(n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ('object' != eP(e) || !e) return e
                      var r = e[Symbol.toPrimitive]
                      if (void 0 !== r) {
                        var n = r.call(e, t || 'default')
                        if ('object' != eP(n)) return n
                        throw TypeError('@@toPrimitive must return a primitive value.')
                      }
                      return ('string' === t ? String : Number)(e)
                    })(e, 'string')
                    return 'symbol' == eP(t) ? t : String(t)
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a)
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ew(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return e
      }
      function ex(e) {
        return e.some(function (e) {
          return e.isHighlighted
        })
          ? e.map(function (t, r) {
              var n, i, a, o, s, c
              return eF(
                eF({}, t),
                {},
                {
                  isHighlighted:
                    ((a = e[r]),
                    (o = (null == (n = e[r + 1]) ? void 0 : n.isHighlighted) || !0),
                    (s = (null == (i = e[r - 1]) ? void 0 : i.isHighlighted) || !0),
                    eR.test(
                      (c = a.value) && ej.test(c)
                        ? c.replace(eO, function (e) {
                            return eS[e]
                          })
                        : c
                    ) || s !== o
                      ? !a.isHighlighted
                      : !s),
                }
              )
            })
          : e.map(function (e) {
              return eF(eF({}, e), {}, { isHighlighted: !1 })
            })
      }
      function e_(e) {
        var t = eg.highlightPostTag,
          r = eg.highlightPreTag,
          n = e.split(r),
          i = n.shift(),
          a = i ? [{ value: i, isHighlighted: !1 }] : []
        return (
          n.forEach(function (e) {
            var r = e.split(t)
            a.push({ value: r[0], isHighlighted: !0 }),
              '' !== r[1] && a.push({ value: r[1], isHighlighted: !1 })
          }),
          a
        )
      }
      var eE = eu('ReverseHighlight'),
        eT = eu('Snippet'),
        eA = eu('ReverseSnippet')
      function eI(e) {
        return (eI =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function eC(e) {
        return (eC =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function eD(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function eN(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? eD(Object(r), !0).forEach(function (t) {
                var n, i, a
                ;(n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ('object' != eC(e) || !e) return e
                      var r = e[Symbol.toPrimitive]
                      if (void 0 !== r) {
                        var n = r.call(e, t || 'default')
                        if ('object' != eC(n)) return n
                        throw TypeError('@@toPrimitive must return a primitive value.')
                      }
                      return ('string' === t ? String : Number)(e)
                    })(e, 'string')
                    return 'symbol' == eC(t) ? t : String(t)
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a)
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eD(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return e
      }
      var ek = Promise.resolve()
      function eH(e) {
        var t = null,
          r = !1,
          n = function () {
            for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a]
            null === t &&
              (t = ek.then(function () {
                if (((t = null), r)) {
                  r = !1
                  return
                }
                e.apply(void 0, i)
              }))
          }
        return (
          (n.wait = function () {
            if (null === t)
              throw Error('The deferred function should be called before calling `wait()`')
            return t
          }),
          (n.cancel = function () {
            null !== t && (r = !0)
          }),
          n
        )
      }
      function eQ(e) {
        return (eQ =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function eW(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function eL(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function eU(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? eL(Object(r), !0).forEach(function (t) {
                eq(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eL(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return e
      }
      function eq(e, t, r) {
        var n
        return (
          ((n = (function (e, t) {
            if ('object' != eQ(e) || !e) return e
            var r = e[Symbol.toPrimitive]
            if (void 0 !== r) {
              var n = r.call(e, t || 'default')
              if ('object' != eQ(n)) return n
              throw TypeError('@@toPrimitive must return a primitive value.')
            }
            return ('string' === t ? String : Number)(e)
          })(t, 'string')),
          (t = 'symbol' == eQ(n) ? n : String(n)) in e)
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function e$(e) {
        var t = function (e) {
          for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
            r[n - 1] = arguments[n]
          var i = 0
          return e.replace(/%s/g, function () {
            return encodeURIComponent(r[i++])
          })
        }
        return Object.keys(e)
          .map(function (r) {
            var n
            return t(
              '%s=%s',
              r,
              ((n = e[r]),
              '[object Object]' === Object.prototype.toString.call(n) ||
                '[object Array]' === Object.prototype.toString.call(n))
                ? JSON.stringify(e[r])
                : e[r]
            )
          })
          .join('&')
      }
      function eV(e) {
        return (eV =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function eB(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function eM(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? eB(Object(r), !0).forEach(function (t) {
                var n, i, a
                ;(n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ('object' != eV(e) || !e) return e
                      var r = e[Symbol.toPrimitive]
                      if (void 0 !== r) {
                        var n = r.call(e, t || 'default')
                        if ('object' != eV(n)) return n
                        throw TypeError('@@toPrimitive must return a primitive value.')
                      }
                      return ('string' === t ? String : Number)(e)
                    })(e, 'string')
                    return 'symbol' == eV(t) ? t : String(t)
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a)
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eB(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return e
      }
      function eJ(e, t) {
        var r = e[t.getIndexId()] || {}
        t.getHelper().setState(t.getWidgetSearchParameters(t.getHelper().state, { uiState: r })),
          t
            .getWidgets()
            .filter(V)
            .forEach(function (t) {
              return eJ(e, t)
            })
      }
      function ez(e) {
        return (ez =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function eG(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function eK(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? eG(Object(r), !0).forEach(function (t) {
                e0(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eG(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return e
      }
      function eZ(e, t) {
        return (eZ = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e
            })(e, t)
      }
      function eX(e) {
        if (void 0 === e)
          throw ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      function eY(e) {
        return (eY = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function e0(e, t, r) {
        return (
          (t = e1(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function e1(e) {
        var t = (function (e, t) {
          if ('object' != ez(e) || !e) return e
          var r = e[Symbol.toPrimitive]
          if (void 0 !== r) {
            var n = r.call(e, t || 'default')
            if ('object' != ez(n)) return n
            throw TypeError('@@toPrimitive must return a primitive value.')
          }
          return ('string' === t ? String : Number)(e)
        })(e, 'string')
        return 'symbol' == ez(t) ? t : String(t)
      }
      var e2 = (0, $.V)({ name: 'instantsearch' })
      function e8() {
        return '#'
      }
      var e6 = { preserveSharedStateOnUnmount: !1, persistHierarchicalRootCount: !1 },
        e3 = (function (e) {
          if ('function' != typeof e && null !== e)
            throw TypeError('Super expression must either be null or a function')
          ;(i.prototype = Object.create(e && e.prototype, {
            constructor: { value: i, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(i, 'prototype', { writable: !1 }),
            e && eZ(i, e)
          var t,
            r,
            n =
              ((t = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                  return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return (
                    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                  )
                } catch (e) {
                  return !1
                }
              })()),
              function () {
                var e,
                  r = eY(i)
                return (
                  (e = t
                    ? Reflect.construct(r, arguments, eY(this).constructor)
                    : r.apply(this, arguments)),
                  (function (e, t) {
                    if (t && ('object' === ez(t) || 'function' == typeof t)) return t
                    if (void 0 !== t)
                      throw TypeError('Derived constructors may only return object or undefined')
                    return eX(e)
                  })(this, e)
                )
              })
          function i(e) {
            if (!(this instanceof i)) throw TypeError('Cannot call a class as a function')
            e0(eX((t = n.call(this))), 'client', void 0),
              e0(eX(t), 'indexName', void 0),
              e0(eX(t), 'compositionID', void 0),
              e0(eX(t), 'insightsClient', void 0),
              e0(eX(t), 'onStateChange', null),
              e0(eX(t), 'future', void 0),
              e0(eX(t), 'helper', void 0),
              e0(eX(t), 'mainHelper', void 0),
              e0(eX(t), 'mainIndex', void 0),
              e0(eX(t), 'started', void 0),
              e0(eX(t), 'templatesConfig', void 0),
              e0(eX(t), 'renderState', {}),
              e0(eX(t), '_stalledSearchDelay', void 0),
              e0(eX(t), '_searchStalledTimer', void 0),
              e0(eX(t), '_initialUiState', void 0),
              e0(eX(t), '_initialResults', void 0),
              e0(eX(t), '_createURL', void 0),
              e0(eX(t), '_searchFunction', void 0),
              e0(eX(t), '_mainHelperSearch', void 0),
              e0(eX(t), '_hasSearchWidget', !1),
              e0(eX(t), '_hasRecommendWidget', !1),
              e0(eX(t), '_insights', void 0),
              e0(eX(t), 'middleware', []),
              e0(eX(t), 'sendEventToInsights', void 0),
              e0(eX(t), 'status', 'idle'),
              e0(eX(t), 'error', void 0),
              e0(
                eX(t),
                'scheduleSearch',
                eH(function () {
                  t.started && t.mainHelper.search()
                })
              ),
              e0(
                eX(t),
                'scheduleRender',
                eH(function () {
                  var e,
                    r = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0]
                  !(null != (e = t.mainHelper) && e.hasPendingRequests()) &&
                    (clearTimeout(t._searchStalledTimer),
                    (t._searchStalledTimer = null),
                    r && ((t.status = 'idle'), (t.error = void 0))),
                    t.mainIndex.render({ instantSearchInstance: eX(t) }),
                    t.emit('render')
                })
              ),
              e0(
                eX(t),
                'onInternalStateChange',
                eH(function () {
                  var e = t.mainIndex.getWidgetUiState({})
                  t.middleware.forEach(function (t) {
                    t.instance.onStateChange({ uiState: e })
                  })
                })
              ),
              t.setMaxListeners(100)
            var t,
              r = e.indexName,
              a = e.compositionID,
              o = e.numberLocale,
              s = e.initialUiState,
              c = e.routing,
              f = void 0 === c ? null : c,
              h = e.insights,
              d = void 0 === h ? void 0 : h,
              m = e.searchFunction,
              p = e.stalledSearchDelay,
              g = e.searchClient,
              y = void 0 === g ? null : g,
              v = e.insightsClient,
              b = void 0 === v ? null : v,
              O = e.onStateChange,
              j = e.future,
              P = void 0 === j ? eK(eK({}, e6), e.future || {}) : j
            if (null === y) throw Error(e2('The `searchClient` option is required.'))
            if ('function' != typeof y.search)
              throw Error(
                'The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/'
              )
            if (
              ('function' == typeof y.addAlgoliaAgent &&
                y.addAlgoliaAgent('instantsearch.js ('.concat('4.78.1', ')')),
              b && 'function' != typeof b)
            )
              throw Error(e2('The `insightsClient` option should be a function.'))
            if (
              ((t.client = y),
              (t.future = P),
              (t.insightsClient = b),
              (t.indexName = void 0 === r ? '' : r),
              (t.compositionID = a),
              (t.helper = null),
              (t.mainHelper = null),
              (t.mainIndex = es({ indexName: t.compositionID || t.indexName })),
              (t.onStateChange = void 0 === O ? null : O),
              (t.started = !1),
              (t.templatesConfig = {
                helpers: {
                  formatNumber: function (e, t) {
                    var r
                    return (r = Number(t(e))), r.toLocaleString(o)
                  },
                  highlight: function (e, t) {
                    try {
                      var r,
                        n,
                        i,
                        a,
                        o,
                        s,
                        c,
                        u,
                        l,
                        f = JSON.parse(e)
                      return t(
                        ((n = (r = eN(eN({}, f), {}, { hit: this })).attribute),
                        (i = r.highlightedTagName),
                        (a = void 0 === i ? 'mark' : i),
                        (o = r.hit),
                        (s = r.cssClasses),
                        (c = void 0 === s ? {} : s),
                        (u = (el(o._highlightResult, n) || {}).value),
                        (l =
                          ev({ descendantName: 'highlighted' }) +
                          (c.highlighted ? ' '.concat(c.highlighted) : '')),
                        (void 0 === u ? '' : u)
                          .replace(
                            RegExp(eg.highlightPreTag, 'g'),
                            '<'.concat(a, ' class="').concat(l, '">')
                          )
                          .replace(RegExp(eg.highlightPostTag, 'g'), '</'.concat(a, '>')))
                      )
                    } catch (e) {
                      throw Error(
                        '\nThe highlight helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }'
                      )
                    }
                  },
                  reverseHighlight: function (e, t) {
                    try {
                      var r,
                        n,
                        i,
                        a,
                        o,
                        s,
                        c,
                        u,
                        l,
                        f = JSON.parse(e)
                      return t(
                        ((n = (r = eN(eN({}, f), {}, { hit: this })).attribute),
                        (i = r.highlightedTagName),
                        (a = void 0 === i ? 'mark' : i),
                        (o = r.hit),
                        (s = r.cssClasses),
                        (c = void 0 === s ? {} : s),
                        (u = (el(o._highlightResult, n) || {}).value),
                        (l =
                          eE({ descendantName: 'highlighted' }) +
                          (c.highlighted ? ' '.concat(c.highlighted) : '')),
                        eb(ex(e_(void 0 === u ? '' : u)))
                          .replace(
                            RegExp(eg.highlightPreTag, 'g'),
                            '<'.concat(a, ' class="').concat(l, '">')
                          )
                          .replace(RegExp(eg.highlightPostTag, 'g'), '</'.concat(a, '>')))
                      )
                    } catch (e) {
                      throw Error(
                        '\n  The reverseHighlight helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }'
                      )
                    }
                  },
                  snippet: function (e, t) {
                    try {
                      var r,
                        n,
                        i,
                        a,
                        o,
                        s,
                        c,
                        u,
                        l,
                        f = JSON.parse(e)
                      return t(
                        ((n = (r = eN(eN({}, f), {}, { hit: this })).attribute),
                        (i = r.highlightedTagName),
                        (a = void 0 === i ? 'mark' : i),
                        (o = r.hit),
                        (s = r.cssClasses),
                        (c = void 0 === s ? {} : s),
                        (u = (el(o._snippetResult, n) || {}).value),
                        (l =
                          eT({ descendantName: 'highlighted' }) +
                          (c.highlighted ? ' '.concat(c.highlighted) : '')),
                        (void 0 === u ? '' : u)
                          .replace(
                            RegExp(eg.highlightPreTag, 'g'),
                            '<'.concat(a, ' class="').concat(l, '">')
                          )
                          .replace(RegExp(eg.highlightPostTag, 'g'), '</'.concat(a, '>')))
                      )
                    } catch (e) {
                      throw Error(
                        '\nThe snippet helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }'
                      )
                    }
                  },
                  reverseSnippet: function (e, t) {
                    try {
                      var r,
                        n,
                        i,
                        a,
                        o,
                        s,
                        c,
                        u,
                        l,
                        f = JSON.parse(e)
                      return t(
                        ((n = (r = eN(eN({}, f), {}, { hit: this })).attribute),
                        (i = r.highlightedTagName),
                        (a = void 0 === i ? 'mark' : i),
                        (o = r.hit),
                        (s = r.cssClasses),
                        (c = void 0 === s ? {} : s),
                        (u = (el(o._snippetResult, n) || {}).value),
                        (l =
                          eA({ descendantName: 'highlighted' }) +
                          (c.highlighted ? ' '.concat(c.highlighted) : '')),
                        eb(ex(e_(void 0 === u ? '' : u)))
                          .replace(
                            RegExp(eg.highlightPreTag, 'g'),
                            '<'.concat(a, ' class="').concat(l, '">')
                          )
                          .replace(RegExp(eg.highlightPostTag, 'g'), '</'.concat(a, '>')))
                      )
                    } catch (e) {
                      throw Error(
                        '\n  The reverseSnippet helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }'
                      )
                    }
                  },
                  insights: function (e, t) {
                    try {
                      var r,
                        n = JSON.parse(e),
                        i = n.method,
                        a = n.payload
                      return t(
                        ((r = eN({ objectIDs: [this.objectID] }, a)),
                        (function (e) {
                          var t,
                            r = e.method,
                            n = e.payload
                          if ('object' !== eI(n))
                            throw Error('The insights helper expects the payload to be an object.')
                          try {
                            t = btoa(encodeURIComponent(JSON.stringify(n)))
                          } catch (e) {
                            throw Error('Could not JSON serialize the payload object.')
                          }
                          return 'data-insights-method="'
                            .concat(r, '" data-insights-payload="')
                            .concat(t, '"')
                        })({ method: i, payload: r }))
                      )
                    } catch (e) {
                      throw Error(
                        '\nThe insights helper expects a JSON object of the format:\n{ "method": "method-name", "payload": { "eventName": "name of the event" } }'
                      )
                    }
                  },
                },
                compileOptions: {},
              }),
              (t._stalledSearchDelay = void 0 === p ? 200 : p),
              (t._searchStalledTimer = null),
              (t._createURL = e8),
              (t._initialUiState = void 0 === s ? {} : s),
              (t._initialResults = null),
              (t._insights = d),
              m && (t._searchFunction = m),
              (t.sendEventToInsights = l.l),
              f)
            ) {
              var w = 'boolean' == typeof f ? {} : f
              ;(w.$$internal = !0), t.use(q(w))
            }
            if (d) {
              var F = 'boolean' == typeof d ? {} : d
              ;(F.$$internal = !0), t.use(S(F))
            }
            return (
              u(
                function (e) {
                  var t, r
                  return (
                    (null == (t = e.window.navigator) || null == (r = t.userAgent)
                      ? void 0
                      : r.indexOf('Algolia Crawler')) > -1
                  )
                },
                {
                  fallback: function () {
                    return !1
                  },
                }
              ) &&
                t.use(
                  (function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                      t = e.$$internal,
                      r = void 0 !== t && t
                    return function (e) {
                      var t = e.instantSearchInstance,
                        n = { widgets: [] },
                        i = document.createElement('meta'),
                        a = document.querySelector('head')
                      return (
                        (i.name = 'instantsearch:widgets'),
                        {
                          $$type: 'ais.metadata',
                          $$internal: r,
                          onStateChange: function () {},
                          subscribe: function () {
                            setTimeout(function () {
                              var e = t.client
                              ;(n.ua =
                                e.transporter && e.transporter.userAgent
                                  ? e.transporter.userAgent.value
                                  : e._ua),
                                (function e(t, r, n) {
                                  var i = R(r, r.mainIndex, r._initialUiState)
                                  t.forEach(function (t) {
                                    var a = {}
                                    if (t.getWidgetRenderState) {
                                      var o = t.getWidgetRenderState(i)
                                      o && o.widgetParams && (a = o.widgetParams)
                                    }
                                    var s = Object.keys(a).filter(function (e) {
                                      return void 0 !== a[e]
                                    })
                                    n.widgets.push({
                                      type: t.$$type,
                                      widgetType: t.$$widgetType,
                                      params: s,
                                    }),
                                      'ais.index' === t.$$type && e(t.getWidgets(), r, n)
                                  })
                                })(t.mainIndex.getWidgets(), t, n),
                                t.middleware.forEach(function (e) {
                                  return n.widgets.push({
                                    middleware: !0,
                                    type: e.instance.$$type,
                                    internal: e.instance.$$internal,
                                  })
                                }),
                                (i.content = JSON.stringify(n)),
                                a.appendChild(i)
                            }, 0)
                          },
                          started: function () {},
                          unsubscribe: function () {
                            i.remove()
                          },
                        }
                      )
                    }
                  })({ $$internal: !0 })
                ),
              t
            )
          }
          return (
            (r = [
              {
                key: '_isSearchStalled',
                get: function () {
                  return 'stalled' === this.status
                },
              },
              {
                key: 'use',
                value: function () {
                  for (var e = this, t = arguments.length, r = Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n]
                  var i = r.map(function (t) {
                    var r = eK(
                      {
                        $$type: '__unknown__',
                        $$internal: !1,
                        subscribe: l.l,
                        started: l.l,
                        unsubscribe: l.l,
                        onStateChange: l.l,
                      },
                      t({ instantSearchInstance: e })
                    )
                    return e.middleware.push({ creator: t, instance: r }), r
                  })
                  return (
                    this.started &&
                      i.forEach(function (e) {
                        e.subscribe(), e.started()
                      }),
                    this
                  )
                },
              },
              {
                key: 'unuse',
                value: function () {
                  for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                    t[r] = arguments[r]
                  return (
                    this.middleware
                      .filter(function (e) {
                        return t.includes(e.creator)
                      })
                      .forEach(function (e) {
                        return e.instance.unsubscribe()
                      }),
                    (this.middleware = this.middleware.filter(function (e) {
                      return !t.includes(e.creator)
                    })),
                    this
                  )
                },
              },
              {
                key: 'EXPERIMENTAL_use',
                value: function () {
                  return this.use.apply(this, arguments)
                },
              },
              {
                key: 'addWidget',
                value: function (e) {
                  return this.addWidgets([e])
                },
              },
              {
                key: 'addWidgets',
                value: function (e) {
                  if (!Array.isArray(e))
                    throw Error(
                      e2(
                        'The `addWidgets` method expects an array of widgets. Please use `addWidget`.'
                      )
                    )
                  if (
                    e.some(function (e) {
                      return 'function' != typeof e.init && 'function' != typeof e.render
                    })
                  )
                    throw Error(
                      e2('The widget definition expects a `render` and/or an `init` method.')
                    )
                  if (this.compositionID && e.some(V))
                    throw Error(
                      e2(
                        'The `index` widget cannot be used with a composition-based InstantSearch implementation.'
                      )
                    )
                  return this.mainIndex.addWidgets(e), this
                },
              },
              {
                key: 'removeWidget',
                value: function (e) {
                  return this.removeWidgets([e])
                },
              },
              {
                key: 'removeWidgets',
                value: function (e) {
                  if (!Array.isArray(e))
                    throw Error(
                      e2(
                        'The `removeWidgets` method expects an array of widgets. Please use `removeWidget`.'
                      )
                    )
                  if (
                    e.some(function (e) {
                      return 'function' != typeof e.dispose
                    })
                  )
                    throw Error(e2('The widget definition expects a `dispose` method.'))
                  return this.mainIndex.removeWidgets(e), this
                },
              },
              {
                key: 'start',
                value: function () {
                  var e = this
                  if (this.started)
                    throw Error(e2('The `start` method has already been called once.'))
                  var t =
                    this.mainHelper ||
                    s(this.client, this.indexName, void 0, {
                      persistHierarchicalRootCount: this.future.persistHierarchicalRootCount,
                    })
                  if (
                    (this.compositionID &&
                      (t.searchForFacetValues = t.searchForCompositionFacetValues.bind(t)),
                    (t.search = function () {
                      return (
                        (e.status = 'loading'),
                        e.scheduleRender(!1),
                        e._hasSearchWidget &&
                          (e.compositionID
                            ? t.searchWithComposition()
                            : t.searchOnlyWithDerivedHelpers()),
                        e._hasRecommendWidget && t.recommend(),
                        t
                      )
                    }),
                    this._searchFunction)
                  ) {
                    var r = {
                      search: function () {
                        return new Promise(l.l)
                      },
                    }
                    ;(this._mainHelperSearch = t.search.bind(t)),
                      (t.search = function () {
                        var n = e.mainIndex.getHelper(),
                          i = s(r, n.state.index, n.state)
                        return (
                          i.once('search', function (t) {
                            var r = t.state
                            n.overrideStateWithoutTriggeringChangeEvent(r), e._mainHelperSearch()
                          }),
                          i.on('change', function (e) {
                            var t = e.state
                            n.setState(t)
                          }),
                          e._searchFunction(i),
                          t
                        )
                      })
                  }
                  if (
                    (t.on('error', function (t) {
                      var r = t.error
                      if (!(r instanceof Error)) {
                        var n = r
                        r = Object.keys(n).reduce(function (e, t) {
                          return (e[t] = n[t]), e
                        }, Error(n.message))
                      }
                      ;(r.error = r),
                        (e.error = r),
                        (e.status = 'error'),
                        e.scheduleRender(!1),
                        e.emit('error', r)
                    }),
                    (this.mainHelper = t),
                    this.middleware.forEach(function (e) {
                      e.instance.subscribe()
                    }),
                    this.mainIndex.init({
                      instantSearchInstance: this,
                      parent: null,
                      uiState: this._initialUiState,
                    }),
                    this._initialResults)
                  ) {
                    !(function (e, t) {
                      if (
                        t &&
                        (('transporter' in e && !e._cacheHydrated) ||
                          (e._useCache && 'function' == typeof e.addAlgoliaAgent))
                      ) {
                        var r = [
                            Object.keys(t).reduce(function (e, r) {
                              var n = t[r],
                                i = n.state,
                                a = n.requestParams,
                                o = n.results,
                                s =
                                  o && i
                                    ? o.map(function (e, t) {
                                        return eU(
                                          { indexName: i.index || e.index },
                                          (null != a && a[t]) || e.params
                                            ? {
                                                params: e$(
                                                  (null == a ? void 0 : a[t]) ||
                                                    e.params.split('&').reduce(function (e, t) {
                                                      var r,
                                                        n =
                                                          (function (e) {
                                                            if (Array.isArray(e)) return e
                                                          })((r = t.split('='))) ||
                                                          (function (e, t) {
                                                            var r =
                                                              null == e
                                                                ? null
                                                                : ('undefined' != typeof Symbol &&
                                                                    e[Symbol.iterator]) ||
                                                                  e['@@iterator']
                                                            if (null != r) {
                                                              var n,
                                                                i,
                                                                a,
                                                                o,
                                                                s = [],
                                                                c = !0,
                                                                u = !1
                                                              try {
                                                                ;(a = (r = r.call(e)).next), !1
                                                                for (
                                                                  ;
                                                                  !(c = (n = a.call(r)).done) &&
                                                                  (s.push(n.value), s.length !== t);
                                                                  c = !0
                                                                );
                                                              } catch (e) {
                                                                ;(u = !0), (i = e)
                                                              } finally {
                                                                try {
                                                                  if (
                                                                    !c &&
                                                                    null != r.return &&
                                                                    ((o = r.return()),
                                                                    Object(o) !== o)
                                                                  )
                                                                    return
                                                                } finally {
                                                                  if (u) throw i
                                                                }
                                                              }
                                                              return s
                                                            }
                                                          })(r, 2) ||
                                                          (function (e, t) {
                                                            if (e) {
                                                              if ('string' == typeof e)
                                                                return eW(e, 2)
                                                              var r = Object.prototype.toString
                                                                .call(e)
                                                                .slice(8, -1)
                                                              if (
                                                                ('Object' === r &&
                                                                  e.constructor &&
                                                                  (r = e.constructor.name),
                                                                'Map' === r || 'Set' === r)
                                                              )
                                                                return Array.from(e)
                                                              if (
                                                                'Arguments' === r ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                  r
                                                                )
                                                              )
                                                                return eW(e, t)
                                                            }
                                                          })(r, 2) ||
                                                          (function () {
                                                            throw TypeError(
                                                              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                                            )
                                                          })(),
                                                        i = n[0],
                                                        a = n[1]
                                                      return (
                                                        (e[i] = a ? decodeURIComponent(a) : ''), e
                                                      )
                                                    }, {})
                                                ),
                                              }
                                            : {}
                                        )
                                      })
                                    : []
                              return e.concat(s)
                            }, []),
                          ],
                          n = Object.keys(t).reduce(function (e, r) {
                            var n = t[r].results
                            return n ? e.concat(n) : e
                          }, [])
                        if ('transporter' in e && !e._cacheHydrated) {
                          e._cacheHydrated = !0
                          var i = e.search.bind(e)
                          ;(e.search = function (t) {
                            for (
                              var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1;
                              a < r;
                              a++
                            )
                              n[a - 1] = arguments[a]
                            var o = Array.isArray(t)
                              ? t.map(function (e) {
                                  return eU(eU({}, e), {}, { params: e$(e.params) })
                                })
                              : e$(t.requestBody.params)
                            return e.transporter.responsesCache.get(
                              { method: 'search', args: [o].concat(n) },
                              function () {
                                return i.apply(void 0, [t].concat(n))
                              }
                            )
                          }),
                            e.transporter.responsesCache.set(
                              { method: 'search', args: r },
                              { results: n }
                            )
                        }
                        if (!('transporter' in e)) {
                          var a = '/1/indexes/*/queries_body_'.concat(
                            JSON.stringify({ requests: r })
                          )
                          e.cache = eU(
                            eU({}, e.cache),
                            {},
                            eq(
                              {},
                              a,
                              JSON.stringify({
                                results: Object.keys(t).map(function (e) {
                                  return t[e].results
                                }),
                              })
                            )
                          )
                        }
                      }
                    })(this.client, this._initialResults),
                      (this.mainHelper._recommendCache = Object.keys(
                        (n = this._initialResults)
                      ).reduce(function (e, t) {
                        var r = n[t]
                        return r.recommendResults ? eM(eM({}, e), r.recommendResults.results) : e
                      }, {}))
                    var n,
                      i = this.scheduleSearch
                    ;(this.scheduleSearch = eH(l.l)),
                      eH(function () {
                        e.scheduleSearch = i
                      })()
                  } else this.mainIndex.getWidgets().length > 0 && this.scheduleSearch()
                  ;(this.helper = this.mainIndex.getHelper()),
                    (this.started = !0),
                    this.middleware.forEach(function (e) {
                      e.instance.started()
                    }),
                    void 0 === this._insights &&
                      t.derivedHelpers[0].once('result', function () {
                        e.mainIndex.getScopedResults().some(function (e) {
                          var t = e.results
                          return null == t ? void 0 : t._automaticInsights
                        }) && e.use(S({ $$internal: !0, $$automatic: !0 }))
                      })
                },
              },
              {
                key: 'dispose',
                value: function () {
                  var e
                  this.scheduleSearch.cancel(),
                    this.scheduleRender.cancel(),
                    clearTimeout(this._searchStalledTimer),
                    this.removeWidgets(this.mainIndex.getWidgets()),
                    this.mainIndex.dispose(),
                    (this.started = !1),
                    this.removeAllListeners(),
                    null == (e = this.mainHelper) || e.removeAllListeners(),
                    (this.mainHelper = null),
                    (this.helper = null),
                    this.middleware.forEach(function (e) {
                      e.instance.unsubscribe()
                    })
                },
              },
              {
                key: 'scheduleStalledRender',
                value: function () {
                  var e = this
                  this._searchStalledTimer ||
                    (this._searchStalledTimer = setTimeout(function () {
                      ;(e.status = 'stalled'), e.scheduleRender()
                    }, this._stalledSearchDelay))
                },
              },
              {
                key: 'setUiState',
                value: function (e) {
                  var t = this,
                    r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1]
                  if (!this.mainHelper)
                    throw Error(e2('The `start` method needs to be called before `setUiState`.'))
                  this.mainIndex.refreshUiState()
                  var n = 'function' == typeof e ? e(this.mainIndex.getWidgetUiState({})) : e
                  this.onStateChange && r
                    ? this.onStateChange({
                        uiState: n,
                        setUiState: function (e) {
                          eJ('function' == typeof e ? e(n) : e, t.mainIndex),
                            t.scheduleSearch(),
                            t.onInternalStateChange()
                        },
                      })
                    : (eJ(n, this.mainIndex), this.scheduleSearch(), this.onInternalStateChange())
                },
              },
              {
                key: 'getUiState',
                value: function () {
                  return (
                    this.started && this.mainIndex.refreshUiState(),
                    this.mainIndex.getWidgetUiState({})
                  )
                },
              },
              {
                key: 'createURL',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  if (!this.started)
                    throw Error(e2('The `start` method needs to be called before `createURL`.'))
                  return this._createURL(e)
                },
              },
              {
                key: 'refresh',
                value: function () {
                  if (!this.mainHelper)
                    throw Error(e2('The `start` method needs to be called before `refresh`.'))
                  this.mainHelper.clearCache().search()
                },
              },
            ]),
            (function (e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r]
                ;(n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  'value' in n && (n.writable = !0),
                  Object.defineProperty(e, e1(n.key), n)
              }
            })(i.prototype, r),
            Object.defineProperty(i, 'prototype', { writable: !1 }),
            i
          )
        })(o),
        e4 = r(84343)
      let e5 = '7.15.5'
      var e7 = r(14117)
      function e9(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      var te = r(76476),
        tt = r(66075),
        tr = r(68476),
        tn = r(86816)
      function ti(e) {
        return (ti =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function ta(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function to(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ta(Object(r), !0).forEach(function (t) {
                var n, i, a
                ;(n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ('object' != ti(e) || !e) return e
                      var r = e[Symbol.toPrimitive]
                      if (void 0 !== r) {
                        var n = r.call(e, t || 'default')
                        if ('object' != ti(n)) return n
                        throw TypeError('@@toPrimitive must return a primitive value.')
                      }
                      return ('string' === t ? String : Number)(e)
                    })(e, 'string')
                    return 'symbol' == ti(t) ? t : String(t)
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a)
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ta(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return e
      }
      var ts = [
          'react ('.concat(n.version, ')'),
          'react-instantsearch ('.concat(e5, ')'),
          'react-instantsearch-core ('.concat(e5, ')'),
        ],
        tc = 'react-instantsearch-server ('.concat(e5, ')')
      function tu(e, t) {
        'function' == typeof e.addAlgoliaAgent &&
          t.filter(Boolean).forEach(function (t) {
            e.addAlgoliaAgent(t)
          })
      }
      var tl = ['children']
      function tf(e) {
        var t = e.children,
          r = (function (e) {
            var t = ((function (e) {
                if (Array.isArray(e)) return e
              })(
                (h = (0, n.useReducer)(function (e) {
                  return e + 1
                }, 0))
              ) ||
                (function (e, t) {
                  var r =
                    null == e
                      ? null
                      : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
                  if (null != r) {
                    var n,
                      i,
                      a,
                      o,
                      s = [],
                      c = !0,
                      u = !1
                    try {
                      ;(a = (r = r.call(e)).next), !1
                      for (
                        ;
                        !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t);
                        c = !0
                      );
                    } catch (e) {
                      ;(u = !0), (i = e)
                    } finally {
                      try {
                        if (!c && null != r.return && ((o = r.return()), Object(o) !== o)) return
                      } finally {
                        if (u) throw i
                      }
                    }
                    return s
                  }
                })(h, 2) ||
                (function (e, t) {
                  if (e) {
                    if ('string' == typeof e) return e9(e, 2)
                    var r = Object.prototype.toString.call(e).slice(8, -1)
                    if (
                      ('Object' === r && e.constructor && (r = e.constructor.name),
                      'Map' === r || 'Set' === r)
                    )
                      return Array.from(e)
                    if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                      return e9(e, t)
                  }
                })(h, 2) ||
                (function () {
                  throw TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  )
                })())[1],
              r = (0, te.r)(),
              i = (0, tt.m)(),
              a = (0, tr.t)(),
              o = null == i ? void 0 : i.initialResults,
              s = (0, n.useRef)(e),
              c = r || o || a,
              u = (0, n.useRef)(null)
            if ((i && (u = i.ssrSearchRef), null === u.current)) {
              var l,
                f,
                h,
                d,
                m = new e3(e)
              ;(m._schedule = function (e) {
                m._schedule.queue.push(e),
                  clearTimeout(m._schedule.timer),
                  (m._schedule.timer = setTimeout(function () {
                    m._schedule.queue.forEach(function (e) {
                      e()
                    }),
                      (m._schedule.queue = [])
                  }, 0))
              }),
                (m._schedule.queue = []),
                c && (m._initialResults = o || {}),
                tu(
                  e.searchClient,
                  [].concat(ts, [
                    r && tc,
                    (d =
                      ('undefined' != typeof window &&
                        (null == (l = window.next) ? void 0 : l.version)) ||
                      (void 0 !== tn ? (null == tn.env ? void 0 : '') : void 0))
                      ? 'next.js ('.concat(d, ')')
                      : null,
                  ])
                ),
                c && m.start(),
                r && r.notifyServer({ search: m }),
                e.routing,
                (u.current = m)
            }
            var p,
              g = u.current,
              y = s.current
            y.indexName !== e.indexName &&
              (g.helper.setIndex(e.indexName || '').search(), (s.current = e)),
              y.searchClient !== e.searchClient &&
                (tu(e.searchClient, [].concat(ts, [r && tc])),
                g.mainHelper.setClient(e.searchClient).search(),
                (s.current = e)),
              y.onStateChange !== e.onStateChange &&
                ((g.onStateChange = e.onStateChange), (s.current = e)),
              y.searchFunction !== e.searchFunction &&
                ((g._searchFunction = e.searchFunction), (s.current = e)),
              y.stalledSearchDelay !== e.stalledSearchDelay &&
                ((g._stalledSearchDelay = null != (p = e.stalledSearchDelay) ? p : 200),
                (s.current = e)),
              (0, e7.j)(y.future, e.future) ||
                ((g.future = to(to({}, e6), e.future)), (s.current = e))
            var v = (0, n.useRef)(null)
            return (0, e4.useSyncExternalStore)(
              (0, n.useCallback)(
                function () {
                  var e = u.current
                  return (
                    null === v.current
                      ? e.started || (e.start(), t())
                      : (clearTimeout(v.current), (e._preventWidgetCleanup = !1)),
                    function () {
                      clearTimeout(e._schedule.timer),
                        (v.current = setTimeout(function () {
                          e.dispose()
                        })),
                        (e._preventWidgetCleanup = !0)
                    }
                  )
                },
                [t]
              ),
              function () {
                return u.current
              },
              function () {
                return u.current
              }
            )
          })(
            (function (e, t) {
              if (null == e) return {}
              var r,
                n,
                i = (function (e, t) {
                  if (null == e) return {}
                  var r,
                    n,
                    i = {},
                    a = Object.keys(e)
                  for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r])
                  return i
                })(e, t)
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e)
                for (n = 0; n < a.length; n++)
                  (r = a[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (i[r] = e[r])
              }
              return i
            })(e, tl)
          )
        return r.started
          ? n.createElement(
              a.t.Provider,
              { value: r },
              n.createElement(i.m.Provider, { value: r.mainIndex }, t)
            )
          : null
      }
    },
    20539: (e, t, r) => {
      'use strict'
      var n = r(93649),
        i = Object.prototype.hasOwnProperty,
        a = Array.isArray,
        o = {
          allowDots: !1,
          allowPrototypes: !1,
          arrayLimit: 20,
          charset: 'utf-8',
          charsetSentinel: !1,
          comma: !1,
          decoder: n.decode,
          delimiter: '&',
          depth: 5,
          ignoreQueryPrefix: !1,
          interpretNumericEntities: !1,
          parameterLimit: 1e3,
          parseArrays: !0,
          plainObjects: !1,
          strictNullHandling: !1,
        },
        s = function (e, t) {
          return e && 'string' == typeof e && t.comma && e.indexOf(',') > -1 ? e.split(',') : e
        },
        c = function (e, t) {
          var r = {},
            c = t.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
            u = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
            l = c.split(t.delimiter, u),
            f = -1,
            h = t.charset
          if (t.charsetSentinel)
            for (d = 0; d < l.length; ++d)
              0 === l[d].indexOf('utf8=') &&
                ('utf8=%E2%9C%93' === l[d]
                  ? (h = 'utf-8')
                  : 'utf8=%26%2310003%3B' === l[d] && (h = 'iso-8859-1'),
                (f = d),
                (d = l.length))
          for (d = 0; d < l.length; ++d)
            if (d !== f) {
              var d,
                m,
                p,
                g = l[d],
                y = g.indexOf(']='),
                v = -1 === y ? g.indexOf('=') : y + 1
              ;-1 === v
                ? ((m = t.decoder(g, o.decoder, h, 'key')), (p = t.strictNullHandling ? null : ''))
                : ((m = t.decoder(g.slice(0, v), o.decoder, h, 'key')),
                  (p = n.maybeMap(s(g.slice(v + 1), t), function (e) {
                    return t.decoder(e, o.decoder, h, 'value')
                  }))),
                p &&
                  t.interpretNumericEntities &&
                  'iso-8859-1' === h &&
                  (p = p.replace(/&#(\d+);/g, function (e, t) {
                    return String.fromCharCode(parseInt(t, 10))
                  })),
                g.indexOf('[]=') > -1 && (p = a(p) ? [p] : p),
                i.call(r, m) ? (r[m] = n.combine(r[m], p)) : (r[m] = p)
            }
          return r
        },
        u = function (e, t, r, n) {
          for (var i = n ? t : s(t, r), a = e.length - 1; a >= 0; --a) {
            var o,
              c = e[a]
            if ('[]' === c && r.parseArrays) o = [].concat(i)
            else {
              o = r.plainObjects ? Object.create(null) : {}
              var u = '[' === c.charAt(0) && ']' === c.charAt(c.length - 1) ? c.slice(1, -1) : c,
                l = parseInt(u, 10)
              r.parseArrays || '' !== u
                ? !isNaN(l) &&
                  c !== u &&
                  String(l) === u &&
                  l >= 0 &&
                  r.parseArrays &&
                  l <= r.arrayLimit
                  ? ((o = [])[l] = i)
                  : '__proto__' !== u && (o[u] = i)
                : (o = { 0: i })
            }
            i = o
          }
          return i
        },
        l = function (e, t, r, n) {
          if (e) {
            var a = r.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
              o = /(\[[^[\]]*])/g,
              s = r.depth > 0 && /(\[[^[\]]*])/.exec(a),
              c = s ? a.slice(0, s.index) : a,
              l = []
            if (c) {
              if (!r.plainObjects && i.call(Object.prototype, c) && !r.allowPrototypes) return
              l.push(c)
            }
            for (var f = 0; r.depth > 0 && null !== (s = o.exec(a)) && f < r.depth; ) {
              if (
                ((f += 1),
                !r.plainObjects &&
                  i.call(Object.prototype, s[1].slice(1, -1)) &&
                  !r.allowPrototypes)
              )
                return
              l.push(s[1])
            }
            return s && l.push('[' + a.slice(s.index) + ']'), u(l, t, r, n)
          }
        },
        f = function (e) {
          if (!e) return o
          if (null !== e.decoder && void 0 !== e.decoder && 'function' != typeof e.decoder)
            throw TypeError('Decoder has to be a function.')
          if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset)
            throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined')
          var t = void 0 === e.charset ? o.charset : e.charset
          return {
            allowDots: void 0 === e.allowDots ? o.allowDots : !!e.allowDots,
            allowPrototypes:
              'boolean' == typeof e.allowPrototypes ? e.allowPrototypes : o.allowPrototypes,
            arrayLimit: 'number' == typeof e.arrayLimit ? e.arrayLimit : o.arrayLimit,
            charset: t,
            charsetSentinel:
              'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : o.charsetSentinel,
            comma: 'boolean' == typeof e.comma ? e.comma : o.comma,
            decoder: 'function' == typeof e.decoder ? e.decoder : o.decoder,
            delimiter:
              'string' == typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : o.delimiter,
            depth: 'number' == typeof e.depth || !1 === e.depth ? +e.depth : o.depth,
            ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
            interpretNumericEntities:
              'boolean' == typeof e.interpretNumericEntities
                ? e.interpretNumericEntities
                : o.interpretNumericEntities,
            parameterLimit:
              'number' == typeof e.parameterLimit ? e.parameterLimit : o.parameterLimit,
            parseArrays: !1 !== e.parseArrays,
            plainObjects: 'boolean' == typeof e.plainObjects ? e.plainObjects : o.plainObjects,
            strictNullHandling:
              'boolean' == typeof e.strictNullHandling
                ? e.strictNullHandling
                : o.strictNullHandling,
          }
        }
      e.exports = function (e, t) {
        var r = f(t)
        if ('' === e || null == e) return r.plainObjects ? Object.create(null) : {}
        for (
          var i = 'string' == typeof e ? c(e, r) : e,
            a = r.plainObjects ? Object.create(null) : {},
            o = Object.keys(i),
            s = 0;
          s < o.length;
          ++s
        ) {
          var u = o[s],
            h = l(u, i[u], r, 'string' == typeof e)
          a = n.merge(a, h, r)
        }
        return n.compact(a)
      }
    },
    27080: (e) => {
      function t() {
        ;(this._events = this._events || {}), (this._maxListeners = this._maxListeners || void 0)
      }
      function r(e) {
        return 'function' == typeof e
      }
      function n(e) {
        return 'object' == typeof e && null !== e
      }
      ;(e.exports = t),
        (t.prototype._events = void 0),
        (t.prototype._maxListeners = void 0),
        (t.defaultMaxListeners = 10),
        (t.prototype.setMaxListeners = function (e) {
          if ('number' != typeof e || e < 0 || isNaN(e))
            throw TypeError('n must be a positive number')
          return (this._maxListeners = e), this
        }),
        (t.prototype.emit = function (e) {
          var t, i, a, o, s, c
          if (
            (this._events || (this._events = {}),
            'error' === e &&
              (!this._events.error || (n(this._events.error) && !this._events.error.length)))
          ) {
            if (((t = arguments[1]), t instanceof Error)) throw t
            var u = Error('Uncaught, unspecified "error" event. (' + t + ')')
            throw ((u.context = t), u)
          }
          if (void 0 === (i = this._events[e])) return !1
          if (r(i))
            switch (arguments.length) {
              case 1:
                i.call(this)
                break
              case 2:
                i.call(this, arguments[1])
                break
              case 3:
                i.call(this, arguments[1], arguments[2])
                break
              default:
                ;(o = Array.prototype.slice.call(arguments, 1)), i.apply(this, o)
            }
          else if (n(i))
            for (
              s = 0, o = Array.prototype.slice.call(arguments, 1), a = (c = i.slice()).length;
              s < a;
              s++
            )
              c[s].apply(this, o)
          return !0
        }),
        (t.prototype.addListener = function (e, i) {
          var a
          if (!r(i)) throw TypeError('listener must be a function')
          return (
            this._events || (this._events = {}),
            this._events.newListener && this.emit('newListener', e, r(i.listener) ? i.listener : i),
            this._events[e]
              ? n(this._events[e])
                ? this._events[e].push(i)
                : (this._events[e] = [this._events[e], i])
              : (this._events[e] = i),
            n(this._events[e]) &&
              !this._events[e].warned &&
              (a = void 0 === this._maxListeners ? t.defaultMaxListeners : this._maxListeners) &&
              a > 0 &&
              this._events[e].length > a &&
              ((this._events[e].warned = !0),
              console.error(
                '(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',
                this._events[e].length
              ),
              'function' == typeof console.trace && console.trace()),
            this
          )
        }),
        (t.prototype.on = t.prototype.addListener),
        (t.prototype.once = function (e, t) {
          if (!r(t)) throw TypeError('listener must be a function')
          var n = !1
          function i() {
            this.removeListener(e, i), n || ((n = !0), t.apply(this, arguments))
          }
          return (i.listener = t), this.on(e, i), this
        }),
        (t.prototype.removeListener = function (e, t) {
          var i, a, o, s
          if (!r(t)) throw TypeError('listener must be a function')
          if (!this._events || !this._events[e]) return this
          if (
            ((o = (i = this._events[e]).length),
            (a = -1),
            i === t || (r(i.listener) && i.listener === t))
          )
            delete this._events[e], this._events.removeListener && this.emit('removeListener', e, t)
          else if (n(i)) {
            for (s = o; s-- > 0; )
              if (i[s] === t || (i[s].listener && i[s].listener === t)) {
                a = s
                break
              }
            if (a < 0) return this
            1 === i.length ? ((i.length = 0), delete this._events[e]) : i.splice(a, 1),
              this._events.removeListener && this.emit('removeListener', e, t)
          }
          return this
        }),
        (t.prototype.removeAllListeners = function (e) {
          var t, n
          if (!this._events) return this
          if (!this._events.removeListener)
            return (
              0 == arguments.length
                ? (this._events = {})
                : this._events[e] && delete this._events[e],
              this
            )
          if (0 == arguments.length) {
            for (t in this._events) 'removeListener' !== t && this.removeAllListeners(t)
            return this.removeAllListeners('removeListener'), (this._events = {}), this
          }
          if (r((n = this._events[e]))) this.removeListener(e, n)
          else if (n) for (; n.length; ) this.removeListener(e, n[n.length - 1])
          return delete this._events[e], this
        }),
        (t.prototype.listeners = function (e) {
          var t
          return this._events && this._events[e]
            ? r(this._events[e])
              ? [this._events[e]]
              : this._events[e].slice()
            : []
        }),
        (t.prototype.listenerCount = function (e) {
          if (this._events) {
            var t = this._events[e]
            if (r(t)) return 1
            if (t) return t.length
          }
          return 0
        }),
        (t.listenerCount = function (e, t) {
          return e.listenerCount(t)
        })
    },
    32105: (e) => {
      'use strict'
      function t(e) {
        return (
          'function' == typeof e ||
          Array.isArray(e) ||
          '[object Object]' === Object.prototype.toString.call(e)
        )
      }
      e.exports = function (e) {
        t(e) || (e = {})
        for (var r = 1, n = arguments.length; r < n; r++) {
          var i = arguments[r]
          t(i) &&
            (function e(r, n) {
              if (r === n) return r
              for (var i in n)
                if (
                  Object.prototype.hasOwnProperty.call(n, i) &&
                  '__proto__' !== i &&
                  'constructor' !== i
                ) {
                  var a = n[i],
                    o = r[i]
                  ;(void 0 === o || void 0 !== a) &&
                    (t(o) && t(a)
                      ? (r[i] = e(o, a))
                      : (r[i] =
                          'object' == typeof a && null !== a
                            ? e(Array.isArray(a) ? [] : {}, a)
                            : a))
                }
              return r
            })(e, i)
        }
        return e
      }
    },
    37063: function (e) {
      e.exports = (function () {
        'use strict'
        function e(e, t) {
          var r = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e)
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              r.push.apply(r, n)
          }
          return r
        }
        function t(t) {
          for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {}
            r % 2
              ? e(Object(n), !0).forEach(function (e) {
                  var r
                  ;(r = n[e]),
                    e in t
                      ? Object.defineProperty(t, e, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (t[e] = r)
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : e(Object(n)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                  })
          }
          return t
        }
        function r(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              if (
                Symbol.iterator in Object(e) ||
                '[object Arguments]' === Object.prototype.toString.call(e)
              ) {
                var r = [],
                  n = !0,
                  i = !1,
                  a = void 0
                try {
                  for (
                    var o, s = e[Symbol.iterator]();
                    !(n = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t);
                    n = !0
                  );
                } catch (e) {
                  ;(i = !0), (a = e)
                } finally {
                  try {
                    n || null == s.return || s.return()
                  } finally {
                    if (i) throw a
                  }
                }
                return r
              }
            })(e, t) ||
            (function () {
              throw TypeError('Invalid attempt to destructure non-iterable instance')
            })()
          )
        }
        function n(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t]
                return r
              }
            })(e) ||
            (function (e) {
              if (
                Symbol.iterator in Object(e) ||
                '[object Arguments]' === Object.prototype.toString.call(e)
              )
                return Array.from(e)
            })(e) ||
            (function () {
              throw TypeError('Invalid attempt to spread non-iterable instance')
            })()
          )
        }
        function i() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { serializable: !0 },
            t = {}
          return {
            get: function (r, n) {
              var i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {
                        miss: function () {
                          return Promise.resolve()
                        },
                      },
                a = JSON.stringify(r)
              if (a in t) return Promise.resolve(e.serializable ? JSON.parse(t[a]) : t[a])
              var o = n(),
                s =
                  (i && i.miss) ||
                  function () {
                    return Promise.resolve()
                  }
              return o
                .then(function (e) {
                  return s(e)
                })
                .then(function () {
                  return o
                })
            },
            set: function (r, n) {
              return (
                (t[JSON.stringify(r)] = e.serializable ? JSON.stringify(n) : n), Promise.resolve(n)
              )
            },
            delete: function (e) {
              return delete t[JSON.stringify(e)], Promise.resolve()
            },
            clear: function () {
              return (t = {}), Promise.resolve()
            },
          }
        }
        function a(e, t) {
          return (
            t &&
              Object.keys(t).forEach(function (r) {
                e[r] = t[r](e)
              }),
            e
          )
        }
        function o(e) {
          for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
            r[n - 1] = arguments[n]
          var i = 0
          return e.replace(/%s/g, function () {
            return encodeURIComponent(r[i++])
          })
        }
        var s = { WithinQueryParameters: 0, WithinHeaders: 1 }
        function c(e, t) {
          var r = e || {},
            n = r.data || {}
          return (
            Object.keys(r).forEach(function (e) {
              ;-1 === ['timeout', 'headers', 'queryParameters', 'data', 'cacheable'].indexOf(e) &&
                (n[e] = r[e])
            }),
            {
              data: Object.entries(n).length > 0 ? n : void 0,
              timeout: r.timeout || t,
              headers: r.headers || {},
              queryParameters: r.queryParameters || {},
              cacheable: r.cacheable,
            }
          )
        }
        var u = { Read: 1, Write: 2, Any: 3 }
        function l(e) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
          return t(t({}, e), {}, { status: r, lastUpdate: Date.now() })
        }
        function f(e) {
          return 'string' == typeof e
            ? { protocol: 'https', url: e, accept: u.Any }
            : { protocol: e.protocol || 'https', url: e.url, accept: e.accept || u.Any }
        }
        var h = 'POST'
        function d(e, r, i, a) {
          var o,
            s,
            c,
            u = [],
            h = (function (e, r) {
              if ('GET' !== e.method && (void 0 !== e.data || void 0 !== r.data))
                return JSON.stringify(Array.isArray(e.data) ? e.data : t(t({}, e.data), r.data))
            })(i, a),
            d =
              ((o = t(t({}, e.headers), a.headers)),
              (s = {}),
              Object.keys(o).forEach(function (e) {
                var t = o[e]
                s[e.toLowerCase()] = t
              }),
              s),
            y = i.method,
            v = 'GET' !== i.method ? {} : t(t({}, i.data), a.data),
            b = t(
              t(t({ 'x-algolia-agent': e.userAgent.value }, e.queryParameters), v),
              a.queryParameters
            ),
            S = 0,
            O = function t(r, n) {
              var o,
                s,
                c,
                f,
                v = r.pop()
              if (void 0 === v)
                throw {
                  name: 'RetryError',
                  message:
                    'Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support .',
                  transporterStackTrace: p(u),
                }
              var O = {
                  data: h,
                  headers: d,
                  method: y,
                  url:
                    ((o = v),
                    (s = i.path),
                    (c = m(b)),
                    (f = ''
                      .concat(o.protocol, '://')
                      .concat(o.url, '/')
                      .concat('/' === s.charAt(0) ? s.substr(1) : s)),
                    c.length && (f += '?'.concat(c)),
                    f),
                  connectTimeout: n(S, e.timeouts.connect),
                  responseTimeout: n(S, a.timeout),
                },
                j = function (e) {
                  var t = { request: O, response: e, host: v, triesLeft: r.length }
                  return u.push(t), t
                },
                R = {
                  onSuccess: function (e) {
                    try {
                      return JSON.parse(e.content)
                    } catch (t) {
                      throw { name: 'DeserializationError', message: t.message, response: e }
                    }
                  },
                  onRetry: function (i) {
                    var a = j(i)
                    return (
                      i.isTimedOut && S++,
                      Promise.all([
                        e.logger.info('Retryable failure', g(a)),
                        e.hostsCache.set(v, l(v, i.isTimedOut ? 3 : 2)),
                      ]).then(function () {
                        return t(r, n)
                      })
                    )
                  },
                  onFail: function (e) {
                    throw (
                      (j(e),
                      (function (e, t) {
                        var r = e.content,
                          n = e.status,
                          i = r
                        try {
                          i = JSON.parse(r).message
                        } catch (e) {}
                        return { name: 'ApiError', message: i, status: n, transporterStackTrace: t }
                      })(e, p(u)))
                    )
                  },
                }
              return e.requester.send(O).then(function (e) {
                var t, r, n
                return ((t = e.status),
                e.isTimedOut ||
                  ((r = e.isTimedOut), (n = e.status), !r && 0 == ~~n) ||
                  (2 != ~~(t / 100) && 4 != ~~(t / 100)))
                  ? R.onRetry(e)
                  : 2 == ~~(e.status / 100)
                    ? R.onSuccess(e)
                    : R.onFail(e)
              })
            }
          return ((c = e.hostsCache),
          Promise.all(
            r.map(function (e) {
              return c.get(e, function () {
                return Promise.resolve(l(e))
              })
            })
          ).then(function (e) {
            var t = e.filter(function (e) {
                return 1 === e.status || Date.now() - e.lastUpdate > 12e4
              }),
              i = e.filter(function (e) {
                return 3 === e.status && Date.now() - e.lastUpdate <= 12e4
              }),
              a = [].concat(n(t), n(i))
            return {
              getTimeout: function (e, t) {
                return (0 === i.length && 0 === e ? 1 : i.length + 3 + e) * t
              },
              statelessHosts:
                a.length > 0
                  ? a.map(function (e) {
                      return f(e)
                    })
                  : r,
            }
          })).then(function (e) {
            return O(n(e.statelessHosts).reverse(), e.getTimeout)
          })
        }
        function m(e) {
          return Object.keys(e)
            .map(function (t) {
              var r
              return o(
                '%s=%s',
                t,
                ((r = e[t]),
                '[object Object]' === Object.prototype.toString.call(r) ||
                '[object Array]' === Object.prototype.toString.call(r)
                  ? JSON.stringify(e[t])
                  : e[t])
              )
            })
            .join('&')
        }
        function p(e) {
          return e.map(function (e) {
            return g(e)
          })
        }
        function g(e) {
          var r = e.request.headers['x-algolia-api-key'] ? { 'x-algolia-api-key': '*****' } : {}
          return t(
            t({}, e),
            {},
            { request: t(t({}, e.request), {}, { headers: t(t({}, e.request.headers), r) }) }
          )
        }
        var y = function (e) {
            var n,
              i,
              o,
              l,
              h,
              m,
              p,
              g,
              y,
              v,
              b,
              S,
              O,
              j = e.appId,
              R =
                ((n = void 0 !== e.authMode ? e.authMode : s.WithinHeaders),
                (i = { 'x-algolia-api-key': e.apiKey, 'x-algolia-application-id': j }),
                {
                  headers: function () {
                    return n === s.WithinHeaders ? i : {}
                  },
                  queryParameters: function () {
                    return n === s.WithinQueryParameters ? i : {}
                  },
                }),
              P =
                ((l = (o = t(
                  t(
                    {
                      hosts: [
                        { url: ''.concat(j, '-dsn.algolia.net'), accept: u.Read },
                        { url: ''.concat(j, '.algolia.net'), accept: u.Write },
                      ].concat(
                        (function (e) {
                          for (var t = e.length - 1; t > 0; t--) {
                            var r = Math.floor(Math.random() * (t + 1)),
                              n = e[t]
                            ;(e[t] = e[r]), (e[r] = n)
                          }
                          return e
                        })([
                          { url: ''.concat(j, '-1.algolianet.com') },
                          { url: ''.concat(j, '-2.algolianet.com') },
                          { url: ''.concat(j, '-3.algolianet.com') },
                        ])
                      ),
                    },
                    e
                  ),
                  {},
                  {
                    headers: t(
                      t(t({}, R.headers()), {
                        'content-type': 'application/x-www-form-urlencoded',
                      }),
                      e.headers
                    ),
                    queryParameters: t(t({}, R.queryParameters()), e.queryParameters),
                  }
                )).hostsCache),
                (h = o.logger),
                (m = o.requester),
                (p = o.requestsCache),
                (g = o.responsesCache),
                (y = o.timeouts),
                (v = o.userAgent),
                (b = o.hosts),
                (S = o.queryParameters),
                (O = {
                  hostsCache: l,
                  logger: h,
                  requester: m,
                  requestsCache: p,
                  responsesCache: g,
                  timeouts: y,
                  userAgent: v,
                  headers: o.headers,
                  queryParameters: S,
                  hosts: b.map(function (e) {
                    return f(e)
                  }),
                  read: function (e, t) {
                    var n = c(t, O.timeouts.read),
                      i = function () {
                        return d(
                          O,
                          O.hosts.filter(function (e) {
                            return 0 != (e.accept & u.Read)
                          }),
                          e,
                          n
                        )
                      }
                    if (!0 !== (void 0 !== n.cacheable ? n.cacheable : e.cacheable)) return i()
                    var a = {
                      request: e,
                      mappedRequestOptions: n,
                      transporter: { queryParameters: O.queryParameters, headers: O.headers },
                    }
                    return O.responsesCache.get(
                      a,
                      function () {
                        return O.requestsCache.get(a, function () {
                          return O.requestsCache
                            .set(a, i())
                            .then(
                              function (e) {
                                return Promise.all([O.requestsCache.delete(a), e])
                              },
                              function (e) {
                                return Promise.all([O.requestsCache.delete(a), Promise.reject(e)])
                              }
                            )
                            .then(function (e) {
                              var t = r(e, 2)
                              return t[0], t[1]
                            })
                        })
                      },
                      {
                        miss: function (e) {
                          return O.responsesCache.set(a, e)
                        },
                      }
                    )
                  },
                  write: function (e, t) {
                    return d(
                      O,
                      O.hosts.filter(function (e) {
                        return 0 != (e.accept & u.Write)
                      }),
                      e,
                      c(t, O.timeouts.write)
                    )
                  },
                }))
            return a(
              {
                transporter: P,
                appId: j,
                addAlgoliaAgent: function (e, t) {
                  P.userAgent.add({ segment: e, version: t })
                },
                clearCache: function () {
                  return Promise.all([P.requestsCache.clear(), P.responsesCache.clear()]).then(
                    function () {}
                  )
                },
              },
              e.methods
            )
          },
          v = function (e) {
            return function (t, r) {
              return 'GET' === t.method ? e.transporter.read(t, r) : e.transporter.write(t, r)
            }
          },
          b = function (e) {
            return function (t) {
              var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              return a({ transporter: e.transporter, appId: e.appId, indexName: t }, r.methods)
            }
          },
          S = function (e) {
            return function (r, n) {
              var i = r.map(function (e) {
                return t(t({}, e), {}, { params: m(e.params || {}) })
              })
              return e.transporter.read(
                { method: h, path: '1/indexes/*/queries', data: { requests: i }, cacheable: !0 },
                n
              )
            }
          },
          O = function (e) {
            return function (r, n) {
              return Promise.all(
                r.map(function (r) {
                  var i = r.params,
                    a = i.facetName,
                    o = i.facetQuery,
                    s = (function (e, t) {
                      if (null == e) return {}
                      var r,
                        n,
                        i = (function (e, t) {
                          if (null == e) return {}
                          var r,
                            n,
                            i = {},
                            a = Object.keys(e)
                          for (n = 0; n < a.length; n++)
                            (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r])
                          return i
                        })(e, t)
                      if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e)
                        for (n = 0; n < a.length; n++)
                          (r = a[n]),
                            t.indexOf(r) >= 0 ||
                              (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]))
                      }
                      return i
                    })(i, ['facetName', 'facetQuery'])
                  return b(e)(r.indexName, {
                    methods: { searchForFacetValues: P },
                  }).searchForFacetValues(a, o, t(t({}, n), s))
                })
              )
            }
          },
          j = function (e) {
            return function (t, r, n) {
              return e.transporter.read(
                {
                  method: h,
                  path: o('1/answers/%s/prediction', e.indexName),
                  data: { query: t, queryLanguages: r },
                  cacheable: !0,
                },
                n
              )
            }
          },
          R = function (e) {
            return function (t, r) {
              return e.transporter.read(
                {
                  method: h,
                  path: o('1/indexes/%s/query', e.indexName),
                  data: { query: t },
                  cacheable: !0,
                },
                r
              )
            }
          },
          P = function (e) {
            return function (t, r, n) {
              return e.transporter.read(
                {
                  method: h,
                  path: o('1/indexes/%s/facets/%s/query', e.indexName, t),
                  data: { facetQuery: r },
                  cacheable: !0,
                },
                n
              )
            }
          },
          w = function (e) {
            return function (r, n) {
              var i = r.map(function (e) {
                return t(t({}, e), {}, { threshold: e.threshold || 0 })
              })
              return e.transporter.read(
                {
                  method: h,
                  path: '1/indexes/*/recommendations',
                  data: { requests: i },
                  cacheable: !0,
                },
                n
              )
            }
          }
        function F(e, a, o) {
          var c, u, l, f, h, d, m, p
          return y(
            t(
              t(
                t(
                  {},
                  {
                    appId: e,
                    apiKey: a,
                    timeouts: { connect: 1, read: 2, write: 30 },
                    requester: {
                      send: function (e) {
                        return new Promise(function (t) {
                          var r = new XMLHttpRequest()
                          r.open(e.method, e.url, !0),
                            Object.keys(e.headers).forEach(function (t) {
                              return r.setRequestHeader(t, e.headers[t])
                            })
                          var n,
                            i = function (e, n) {
                              return setTimeout(function () {
                                r.abort(), t({ status: 0, content: n, isTimedOut: !0 })
                              }, 1e3 * e)
                            },
                            a = i(e.connectTimeout, 'Connection timeout')
                          ;(r.onreadystatechange = function () {
                            r.readyState > r.OPENED &&
                              void 0 === n &&
                              (clearTimeout(a), (n = i(e.responseTimeout, 'Socket timeout')))
                          }),
                            (r.onerror = function () {
                              0 === r.status &&
                                (clearTimeout(a),
                                clearTimeout(n),
                                t({
                                  content: r.responseText || 'Network request failed',
                                  status: r.status,
                                  isTimedOut: !1,
                                }))
                            }),
                            (r.onload = function () {
                              clearTimeout(a),
                                clearTimeout(n),
                                t({ content: r.responseText, status: r.status, isTimedOut: !1 })
                            }),
                            r.send(e.data)
                        })
                      },
                    },
                    logger: {
                      debug: function (e, t) {
                        return Promise.resolve()
                      },
                      info: function (e, t) {
                        return Promise.resolve()
                      },
                      error: function (e, t) {
                        return console.error(e, t), Promise.resolve()
                      },
                    },
                    responsesCache: i(),
                    requestsCache: i({ serializable: !1 }),
                    hostsCache: (function e(t) {
                      var i = n(t.caches),
                        a = i.shift()
                      return void 0 === a
                        ? {
                            get: function (e, t) {
                              var n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : {
                                      miss: function () {
                                        return Promise.resolve()
                                      },
                                    }
                              return t()
                                .then(function (e) {
                                  return Promise.all([e, n.miss(e)])
                                })
                                .then(function (e) {
                                  return r(e, 1)[0]
                                })
                            },
                            set: function (e, t) {
                              return Promise.resolve(t)
                            },
                            delete: function (e) {
                              return Promise.resolve()
                            },
                            clear: function () {
                              return Promise.resolve()
                            },
                          }
                        : {
                            get: function (t, r) {
                              var n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : {
                                      miss: function () {
                                        return Promise.resolve()
                                      },
                                    }
                              return a.get(t, r, n).catch(function () {
                                return e({ caches: i }).get(t, r, n)
                              })
                            },
                            set: function (t, r) {
                              return a.set(t, r).catch(function () {
                                return e({ caches: i }).set(t, r)
                              })
                            },
                            delete: function (t) {
                              return a.delete(t).catch(function () {
                                return e({ caches: i }).delete(t)
                              })
                            },
                            clear: function () {
                              return a.clear().catch(function () {
                                return e({ caches: i }).clear()
                              })
                            },
                          }
                    })({
                      caches: [
                        ((c = { key: ''.concat('4.24.0', '-').concat(e) }),
                        (l = 'algoliasearch-client-js-'.concat(c.key)),
                        (f = function () {
                          return void 0 === u && (u = c.localStorage || window.localStorage), u
                        }),
                        (h = function () {
                          return JSON.parse(f().getItem(l) || '{}')
                        }),
                        (d = function (e) {
                          f().setItem(l, JSON.stringify(e))
                        }),
                        (m = function () {
                          var e = c.timeToLive ? 1e3 * c.timeToLive : null,
                            t = Object.fromEntries(
                              Object.entries(h()).filter(function (e) {
                                return void 0 !== r(e, 2)[1].timestamp
                              })
                            )
                          d(t),
                            e &&
                              d(
                                Object.fromEntries(
                                  Object.entries(t).filter(function (t) {
                                    var n = r(t, 2)[1],
                                      i = new Date().getTime()
                                    return !(n.timestamp + e < i)
                                  })
                                )
                              )
                        }),
                        {
                          get: function (e, t) {
                            var n =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {
                                    miss: function () {
                                      return Promise.resolve()
                                    },
                                  }
                            return Promise.resolve()
                              .then(function () {
                                m()
                                var t = JSON.stringify(e)
                                return h()[t]
                              })
                              .then(function (e) {
                                return Promise.all([e ? e.value : t(), void 0 !== e])
                              })
                              .then(function (e) {
                                var t = r(e, 2),
                                  i = t[0]
                                return Promise.all([i, t[1] || n.miss(i)])
                              })
                              .then(function (e) {
                                return r(e, 1)[0]
                              })
                          },
                          set: function (e, t) {
                            return Promise.resolve().then(function () {
                              var r = h()
                              return (
                                (r[JSON.stringify(e)] = {
                                  timestamp: new Date().getTime(),
                                  value: t,
                                }),
                                f().setItem(l, JSON.stringify(r)),
                                t
                              )
                            })
                          },
                          delete: function (e) {
                            return Promise.resolve().then(function () {
                              var t = h()
                              delete t[JSON.stringify(e)], f().setItem(l, JSON.stringify(t))
                            })
                          },
                          clear: function () {
                            return Promise.resolve().then(function () {
                              f().removeItem(l)
                            })
                          },
                        }),
                        i(),
                      ],
                    }),
                    userAgent: (p = {
                      value: 'Algolia for JavaScript ('.concat('4.24.0', ')'),
                      add: function (e) {
                        var t = '; '
                          .concat(e.segment)
                          .concat(void 0 !== e.version ? ' ('.concat(e.version, ')') : '')
                        return (
                          -1 === p.value.indexOf(t) && (p.value = ''.concat(p.value).concat(t)), p
                        )
                      },
                    }).add({ segment: 'Browser', version: 'lite' }),
                    authMode: s.WithinQueryParameters,
                  }
                ),
                o
              ),
              {},
              {
                methods: {
                  search: S,
                  searchForFacetValues: O,
                  multipleQueries: S,
                  multipleSearchForFacetValues: O,
                  customRequest: v,
                  initIndex: function (e) {
                    return function (t) {
                      return b(e)(t, {
                        methods: { search: R, searchForFacetValues: P, findAnswers: j },
                      })
                    }
                  },
                  getRecommendations: w,
                },
              }
            )
          )
        }
        return (F.version = '4.24.0'), F
      })()
    },
    41940: (e, t, r) => {
      'use strict'
      r.d(t, { V: () => h })
      var n = r(12087),
        i = r(15291)
      function a(e) {
        return (a =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function o(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                var n, i, o
                ;(n = e),
                  (i = t),
                  (o = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ('object' != a(e) || !e) return e
                      var r = e[Symbol.toPrimitive]
                      if (void 0 !== r) {
                        var n = r.call(e, t || 'default')
                        if ('object' != a(n)) return n
                        throw TypeError('@@toPrimitive must return a primitive value.')
                      }
                      return ('string' === t ? String : Number)(e)
                    })(e, 'string')
                    return 'symbol' == a(t) ? t : String(t)
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = o)
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : o(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return e
      }
      var c = (0, n.V)({ name: 'search-box', connector: !0 }),
        u = function (e, t) {
          return t(e)
        }
      let l = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.l,
          r = c()
        if (void 0 === e || 'function' != typeof e)
          throw Error(
            'The render function is not valid (received type '
              .concat(Object.prototype.toString.call(e).slice(8, -1), ').\n\n')
              .concat(r)
          )
        return function (r) {
          var n,
            i,
            a = (r || {}).queryHook,
            o = void 0 === a ? u : a
          return {
            $$type: 'ais.searchBox',
            init: function (t) {
              var r = t.instantSearchInstance
              e(s(s({}, this.getWidgetRenderState(t)), {}, { instantSearchInstance: r }), !0)
            },
            render: function (t) {
              var r = t.instantSearchInstance
              e(s(s({}, this.getWidgetRenderState(t)), {}, { instantSearchInstance: r }), !1)
            },
            dispose: function (e) {
              var r = e.state
              return t(), r.setQueryParameter('query', void 0)
            },
            getRenderState: function (e, t) {
              return s(s({}, e), {}, { searchBox: this.getWidgetRenderState(t) })
            },
            getWidgetRenderState: function (e) {
              var t = e.helper,
                a = e.instantSearchInstance,
                s = e.state
              return (
                n ||
                  ((n = function (e) {
                    o(e, function (e) {
                      return t.setQuery(e).search()
                    })
                  }),
                  (i = function () {
                    t.setQuery('').search()
                  })),
                {
                  query: s.query || '',
                  refine: n,
                  clear: i,
                  widgetParams: r,
                  isSearchStalled: 'stalled' === a.status,
                }
              )
            },
            getWidgetUiState: function (e, t) {
              var r = t.searchParameters.query || ''
              return '' === r || (e && e.query === r) ? e : s(s({}, e), {}, { query: r })
            },
            getWidgetSearchParameters: function (e, t) {
              var r = t.uiState
              return e.setQueryParameter('query', r.query || '')
            },
          }
        }
      }
      var f = r(50361)
      function h(e, t) {
        return (0, f.Z)(l, e, t)
      }
    },
    45434: (e) => {
      'use strict'
      e.exports = function (e, t) {
        return e.filter(function (r, n) {
          return t.indexOf(r) > -1 && e.indexOf(r) === n
        })
      }
    },
    48272: (e) => {
      e.exports = function (e) {
        return e.reduce(function (e, t) {
          return e.concat(t)
        }, [])
      }
    },
    50174: (e, t, r) => {
      'use strict'
      var n = r(63906),
        i = r(90454),
        a = r(87606),
        o = r(50178),
        s = r(74218)
      function c(e, t, r, i) {
        return new n(e, t, r, i)
      }
      ;(c.version = r(53171)),
        (c.AlgoliaSearchHelper = n),
        (c.SearchParameters = o),
        (c.RecommendParameters = i),
        (c.SearchResults = s),
        (c.RecommendResults = a),
        (e.exports = c)
    },
    50178: (e, t, r) => {
      'use strict'
      var n = r(54127),
        i = r(8304),
        a = r(45434),
        o = r(32105),
        s = r(75164),
        c = r(10150),
        u = r(54466),
        l = r(86025),
        f = r(94799)
      function h(e, t) {
        return Array.isArray(e) && Array.isArray(t)
          ? e.length === t.length &&
              e.every(function (e, r) {
                return h(t[r], e)
              })
          : e === t
      }
      function d(e) {
        var t = e ? d._parseNumbers(e) : {}
        void 0 === t.userToken ||
          l(t.userToken) ||
          console.warn(
            '[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}'
          ),
          (this.facets = t.facets || []),
          (this.disjunctiveFacets = t.disjunctiveFacets || []),
          (this.hierarchicalFacets = t.hierarchicalFacets || []),
          (this.facetsRefinements = t.facetsRefinements || {}),
          (this.facetsExcludes = t.facetsExcludes || {}),
          (this.disjunctiveFacetsRefinements = t.disjunctiveFacetsRefinements || {}),
          (this.numericRefinements = t.numericRefinements || {}),
          (this.tagRefinements = t.tagRefinements || []),
          (this.hierarchicalFacetsRefinements = t.hierarchicalFacetsRefinements || {})
        var r = this
        Object.keys(t).forEach(function (e) {
          var n = -1 !== d.PARAMETERS.indexOf(e),
            i = void 0 !== t[e]
          !n && i && (r[e] = t[e])
        })
      }
      ;(d.PARAMETERS = Object.keys(new d())),
        (d._parseNumbers = function (e) {
          if (e instanceof d) return e
          var t = {}
          if (
            ([
              'aroundPrecision',
              'aroundRadius',
              'getRankingInfo',
              'minWordSizefor2Typos',
              'minWordSizefor1Typo',
              'page',
              'maxValuesPerFacet',
              'distinct',
              'minimumAroundRadius',
              'hitsPerPage',
              'minProximity',
            ].forEach(function (r) {
              var n = e[r]
              if ('string' == typeof n) {
                var i = parseFloat(n)
                t[r] = isNaN(i) ? n : i
              }
            }),
            Array.isArray(e.insideBoundingBox) &&
              (t.insideBoundingBox = e.insideBoundingBox.map(function (e) {
                return Array.isArray(e)
                  ? e.map(function (e) {
                      return parseFloat(e)
                    })
                  : e
              })),
            e.numericRefinements)
          ) {
            var r = {}
            Object.keys(e.numericRefinements).forEach(function (t) {
              var n = e.numericRefinements[t] || {}
              ;(r[t] = {}),
                Object.keys(n).forEach(function (e) {
                  var i = n[e].map(function (e) {
                    return Array.isArray(e)
                      ? e.map(function (e) {
                          return 'string' == typeof e ? parseFloat(e) : e
                        })
                      : 'string' == typeof e
                        ? parseFloat(e)
                        : e
                  })
                  r[t][e] = i
                })
            }),
              (t.numericRefinements = r)
          }
          return o(e, t)
        }),
        (d.make = function (e) {
          var t = new d(e)
          return (
            (e.hierarchicalFacets || []).forEach(function (e) {
              if (e.rootPath) {
                var r = t.getHierarchicalRefinement(e.name)
                r.length > 0 && 0 !== r[0].indexOf(e.rootPath) && (t = t.clearRefinements(e.name)),
                  0 === (r = t.getHierarchicalRefinement(e.name)).length &&
                    (t = t.toggleHierarchicalFacetRefinement(e.name, e.rootPath))
              }
            }),
            t
          )
        }),
        (d.validate = function (e, t) {
          var r = t || {}
          return e.tagFilters && r.tagRefinements && r.tagRefinements.length > 0
            ? Error(
                '[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.'
              )
            : e.tagRefinements.length > 0 && r.tagFilters
              ? Error(
                  '[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.'
                )
              : e.numericFilters && r.numericRefinements && s(r.numericRefinements)
                ? Error(
                    "[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters."
                  )
                : s(e.numericRefinements) && r.numericFilters
                  ? Error(
                      "[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters."
                    )
                  : null
        }),
        (d.prototype = {
          constructor: d,
          clearRefinements: function (e) {
            var t = {
              numericRefinements: this._clearNumericRefinements(e),
              facetsRefinements: f.clearRefinement(this.facetsRefinements, e, 'conjunctiveFacet'),
              facetsExcludes: f.clearRefinement(this.facetsExcludes, e, 'exclude'),
              disjunctiveFacetsRefinements: f.clearRefinement(
                this.disjunctiveFacetsRefinements,
                e,
                'disjunctiveFacet'
              ),
              hierarchicalFacetsRefinements: f.clearRefinement(
                this.hierarchicalFacetsRefinements,
                e,
                'hierarchicalFacet'
              ),
            }
            return t.numericRefinements === this.numericRefinements &&
              t.facetsRefinements === this.facetsRefinements &&
              t.facetsExcludes === this.facetsExcludes &&
              t.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements &&
              t.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements
              ? this
              : this.setQueryParameters(t)
          },
          clearTags: function () {
            return void 0 === this.tagFilters && 0 === this.tagRefinements.length
              ? this
              : this.setQueryParameters({ tagFilters: void 0, tagRefinements: [] })
          },
          setIndex: function (e) {
            return e === this.index ? this : this.setQueryParameters({ index: e })
          },
          setQuery: function (e) {
            return e === this.query ? this : this.setQueryParameters({ query: e })
          },
          setPage: function (e) {
            return e === this.page ? this : this.setQueryParameters({ page: e })
          },
          setFacets: function (e) {
            return this.setQueryParameters({ facets: e })
          },
          setDisjunctiveFacets: function (e) {
            return this.setQueryParameters({ disjunctiveFacets: e })
          },
          setHitsPerPage: function (e) {
            return this.hitsPerPage === e ? this : this.setQueryParameters({ hitsPerPage: e })
          },
          setTypoTolerance: function (e) {
            return this.typoTolerance === e ? this : this.setQueryParameters({ typoTolerance: e })
          },
          addNumericRefinement: function (e, t, r) {
            var n = u(r)
            if (this.isNumericRefined(e, t, n)) return this
            var i = o({}, this.numericRefinements)
            return (
              (i[e] = o({}, i[e])),
              i[e][t] ? ((i[e][t] = i[e][t].slice()), i[e][t].push(n)) : (i[e][t] = [n]),
              this.setQueryParameters({ numericRefinements: i })
            )
          },
          getConjunctiveRefinements: function (e) {
            return (this.isConjunctiveFacet(e) && this.facetsRefinements[e]) || []
          },
          getDisjunctiveRefinements: function (e) {
            return (this.isDisjunctiveFacet(e) && this.disjunctiveFacetsRefinements[e]) || []
          },
          getHierarchicalRefinement: function (e) {
            return this.hierarchicalFacetsRefinements[e] || []
          },
          getExcludeRefinements: function (e) {
            return (this.isConjunctiveFacet(e) && this.facetsExcludes[e]) || []
          },
          removeNumericRefinement: function (e, t, r) {
            return void 0 !== r
              ? this.isNumericRefined(e, t, r)
                ? this.setQueryParameters({
                    numericRefinements: this._clearNumericRefinements(function (n, i) {
                      return i === e && n.op === t && h(n.val, u(r))
                    }),
                  })
                : this
              : void 0 !== t
                ? this.isNumericRefined(e, t)
                  ? this.setQueryParameters({
                      numericRefinements: this._clearNumericRefinements(function (r, n) {
                        return n === e && r.op === t
                      }),
                    })
                  : this
                : this.isNumericRefined(e)
                  ? this.setQueryParameters({
                      numericRefinements: this._clearNumericRefinements(function (t, r) {
                        return r === e
                      }),
                    })
                  : this
          },
          getNumericRefinements: function (e) {
            return this.numericRefinements[e] || {}
          },
          getNumericRefinement: function (e, t) {
            return this.numericRefinements[e] && this.numericRefinements[e][t]
          },
          _clearNumericRefinements: function (e) {
            if (void 0 === e) return s(this.numericRefinements) ? {} : this.numericRefinements
            if ('string' == typeof e) return c(this.numericRefinements, [e])
            if ('function' == typeof e) {
              var t = !1,
                r = this.numericRefinements,
                n = Object.keys(r).reduce(function (n, i) {
                  var a = r[i],
                    o = {}
                  return (
                    Object.keys((a = a || {})).forEach(function (r) {
                      var n = a[r] || [],
                        s = []
                      n.forEach(function (t) {
                        e({ val: t, op: r }, i, 'numeric') || s.push(t)
                      }),
                        s.length !== n.length && (t = !0),
                        (o[r] = s)
                    }),
                    (n[i] = o),
                    n
                  )
                }, {})
              return t ? n : this.numericRefinements
            }
          },
          addFacet: function (e) {
            return this.isConjunctiveFacet(e)
              ? this
              : this.setQueryParameters({ facets: this.facets.concat([e]) })
          },
          addDisjunctiveFacet: function (e) {
            return this.isDisjunctiveFacet(e)
              ? this
              : this.setQueryParameters({ disjunctiveFacets: this.disjunctiveFacets.concat([e]) })
          },
          addHierarchicalFacet: function (e) {
            if (this.isHierarchicalFacet(e.name))
              throw Error(
                'Cannot declare two hierarchical facets with the same name: `' + e.name + '`'
              )
            return this.setQueryParameters({
              hierarchicalFacets: this.hierarchicalFacets.concat([e]),
            })
          },
          addFacetRefinement: function (e, t) {
            if (!this.isConjunctiveFacet(e))
              throw Error(e + ' is not defined in the facets attribute of the helper configuration')
            return f.isRefined(this.facetsRefinements, e, t)
              ? this
              : this.setQueryParameters({
                  facetsRefinements: f.addRefinement(this.facetsRefinements, e, t),
                })
          },
          addExcludeRefinement: function (e, t) {
            if (!this.isConjunctiveFacet(e))
              throw Error(e + ' is not defined in the facets attribute of the helper configuration')
            return f.isRefined(this.facetsExcludes, e, t)
              ? this
              : this.setQueryParameters({
                  facetsExcludes: f.addRefinement(this.facetsExcludes, e, t),
                })
          },
          addDisjunctiveFacetRefinement: function (e, t) {
            if (!this.isDisjunctiveFacet(e))
              throw Error(
                e + ' is not defined in the disjunctiveFacets attribute of the helper configuration'
              )
            return f.isRefined(this.disjunctiveFacetsRefinements, e, t)
              ? this
              : this.setQueryParameters({
                  disjunctiveFacetsRefinements: f.addRefinement(
                    this.disjunctiveFacetsRefinements,
                    e,
                    t
                  ),
                })
          },
          addTagRefinement: function (e) {
            if (this.isTagRefined(e)) return this
            var t = { tagRefinements: this.tagRefinements.concat(e) }
            return this.setQueryParameters(t)
          },
          removeFacet: function (e) {
            return this.isConjunctiveFacet(e)
              ? this.clearRefinements(e).setQueryParameters({
                  facets: this.facets.filter(function (t) {
                    return t !== e
                  }),
                })
              : this
          },
          removeDisjunctiveFacet: function (e) {
            return this.isDisjunctiveFacet(e)
              ? this.clearRefinements(e).setQueryParameters({
                  disjunctiveFacets: this.disjunctiveFacets.filter(function (t) {
                    return t !== e
                  }),
                })
              : this
          },
          removeHierarchicalFacet: function (e) {
            return this.isHierarchicalFacet(e)
              ? this.clearRefinements(e).setQueryParameters({
                  hierarchicalFacets: this.hierarchicalFacets.filter(function (t) {
                    return t.name !== e
                  }),
                })
              : this
          },
          removeFacetRefinement: function (e, t) {
            if (!this.isConjunctiveFacet(e))
              throw Error(e + ' is not defined in the facets attribute of the helper configuration')
            return f.isRefined(this.facetsRefinements, e, t)
              ? this.setQueryParameters({
                  facetsRefinements: f.removeRefinement(this.facetsRefinements, e, t),
                })
              : this
          },
          removeExcludeRefinement: function (e, t) {
            if (!this.isConjunctiveFacet(e))
              throw Error(e + ' is not defined in the facets attribute of the helper configuration')
            return f.isRefined(this.facetsExcludes, e, t)
              ? this.setQueryParameters({
                  facetsExcludes: f.removeRefinement(this.facetsExcludes, e, t),
                })
              : this
          },
          removeDisjunctiveFacetRefinement: function (e, t) {
            if (!this.isDisjunctiveFacet(e))
              throw Error(
                e + ' is not defined in the disjunctiveFacets attribute of the helper configuration'
              )
            return f.isRefined(this.disjunctiveFacetsRefinements, e, t)
              ? this.setQueryParameters({
                  disjunctiveFacetsRefinements: f.removeRefinement(
                    this.disjunctiveFacetsRefinements,
                    e,
                    t
                  ),
                })
              : this
          },
          removeTagRefinement: function (e) {
            if (!this.isTagRefined(e)) return this
            var t = {
              tagRefinements: this.tagRefinements.filter(function (t) {
                return t !== e
              }),
            }
            return this.setQueryParameters(t)
          },
          toggleRefinement: function (e, t) {
            return this.toggleFacetRefinement(e, t)
          },
          toggleFacetRefinement: function (e, t) {
            if (this.isHierarchicalFacet(e)) return this.toggleHierarchicalFacetRefinement(e, t)
            if (this.isConjunctiveFacet(e)) return this.toggleConjunctiveFacetRefinement(e, t)
            if (this.isDisjunctiveFacet(e)) return this.toggleDisjunctiveFacetRefinement(e, t)
            throw Error(
              'Cannot refine the undeclared facet ' +
                e +
                '; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets'
            )
          },
          toggleConjunctiveFacetRefinement: function (e, t) {
            if (!this.isConjunctiveFacet(e))
              throw Error(e + ' is not defined in the facets attribute of the helper configuration')
            return this.setQueryParameters({
              facetsRefinements: f.toggleRefinement(this.facetsRefinements, e, t),
            })
          },
          toggleExcludeFacetRefinement: function (e, t) {
            if (!this.isConjunctiveFacet(e))
              throw Error(e + ' is not defined in the facets attribute of the helper configuration')
            return this.setQueryParameters({
              facetsExcludes: f.toggleRefinement(this.facetsExcludes, e, t),
            })
          },
          toggleDisjunctiveFacetRefinement: function (e, t) {
            if (!this.isDisjunctiveFacet(e))
              throw Error(
                e + ' is not defined in the disjunctiveFacets attribute of the helper configuration'
              )
            return this.setQueryParameters({
              disjunctiveFacetsRefinements: f.toggleRefinement(
                this.disjunctiveFacetsRefinements,
                e,
                t
              ),
            })
          },
          toggleHierarchicalFacetRefinement: function (e, t) {
            if (!this.isHierarchicalFacet(e))
              throw Error(
                e +
                  ' is not defined in the hierarchicalFacets attribute of the helper configuration'
              )
            var r = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e)),
              i = {}
            return (
              void 0 !== this.hierarchicalFacetsRefinements[e] &&
              this.hierarchicalFacetsRefinements[e].length > 0 &&
              (this.hierarchicalFacetsRefinements[e][0] === t ||
                0 === this.hierarchicalFacetsRefinements[e][0].indexOf(t + r))
                ? -1 === t.indexOf(r)
                  ? (i[e] = [])
                  : (i[e] = [t.slice(0, t.lastIndexOf(r))])
                : (i[e] = [t]),
              this.setQueryParameters({
                hierarchicalFacetsRefinements: n(i, this.hierarchicalFacetsRefinements),
              })
            )
          },
          addHierarchicalFacetRefinement: function (e, t) {
            if (this.isHierarchicalFacetRefined(e)) throw Error(e + ' is already refined.')
            if (!this.isHierarchicalFacet(e))
              throw Error(
                e +
                  ' is not defined in the hierarchicalFacets attribute of the helper configuration.'
              )
            var r = {}
            return (
              (r[e] = [t]),
              this.setQueryParameters({
                hierarchicalFacetsRefinements: n(r, this.hierarchicalFacetsRefinements),
              })
            )
          },
          removeHierarchicalFacetRefinement: function (e) {
            if (!this.isHierarchicalFacetRefined(e)) return this
            var t = {}
            return (
              (t[e] = []),
              this.setQueryParameters({
                hierarchicalFacetsRefinements: n(t, this.hierarchicalFacetsRefinements),
              })
            )
          },
          toggleTagRefinement: function (e) {
            return this.isTagRefined(e) ? this.removeTagRefinement(e) : this.addTagRefinement(e)
          },
          isDisjunctiveFacet: function (e) {
            return this.disjunctiveFacets.indexOf(e) > -1
          },
          isHierarchicalFacet: function (e) {
            return void 0 !== this.getHierarchicalFacetByName(e)
          },
          isConjunctiveFacet: function (e) {
            return this.facets.indexOf(e) > -1
          },
          isFacetRefined: function (e, t) {
            return !!this.isConjunctiveFacet(e) && f.isRefined(this.facetsRefinements, e, t)
          },
          isExcludeRefined: function (e, t) {
            return !!this.isConjunctiveFacet(e) && f.isRefined(this.facetsExcludes, e, t)
          },
          isDisjunctiveFacetRefined: function (e, t) {
            return (
              !!this.isDisjunctiveFacet(e) && f.isRefined(this.disjunctiveFacetsRefinements, e, t)
            )
          },
          isHierarchicalFacetRefined: function (e, t) {
            if (!this.isHierarchicalFacet(e)) return !1
            var r = this.getHierarchicalRefinement(e)
            return t ? -1 !== r.indexOf(t) : r.length > 0
          },
          isNumericRefined: function (e, t, r) {
            if (void 0 === r && void 0 === t) return !!this.numericRefinements[e]
            var n,
              a = this.numericRefinements[e] && void 0 !== this.numericRefinements[e][t]
            if (void 0 === r || !a) return a
            var o = u(r),
              s =
                void 0 !==
                ((n = this.numericRefinements[e][t]),
                i(n, function (e) {
                  return h(e, o)
                }))
            return a && s
          },
          isTagRefined: function (e) {
            return -1 !== this.tagRefinements.indexOf(e)
          },
          getRefinedDisjunctiveFacets: function () {
            var e = this,
              t = a(
                Object.keys(this.numericRefinements).filter(function (t) {
                  return Object.keys(e.numericRefinements[t]).length > 0
                }),
                this.disjunctiveFacets
              )
            return Object.keys(this.disjunctiveFacetsRefinements)
              .filter(function (t) {
                return e.disjunctiveFacetsRefinements[t].length > 0
              })
              .concat(t)
              .concat(this.getRefinedHierarchicalFacets())
              .sort()
          },
          getRefinedHierarchicalFacets: function () {
            var e = this
            return a(
              this.hierarchicalFacets.map(function (e) {
                return e.name
              }),
              Object.keys(this.hierarchicalFacetsRefinements).filter(function (t) {
                return e.hierarchicalFacetsRefinements[t].length > 0
              })
            ).sort()
          },
          getUnrefinedDisjunctiveFacets: function () {
            var e = this.getRefinedDisjunctiveFacets()
            return this.disjunctiveFacets.filter(function (t) {
              return -1 === e.indexOf(t)
            })
          },
          managedParameters: [
            'index',
            'facets',
            'disjunctiveFacets',
            'facetsRefinements',
            'hierarchicalFacets',
            'facetsExcludes',
            'disjunctiveFacetsRefinements',
            'numericRefinements',
            'tagRefinements',
            'hierarchicalFacetsRefinements',
          ],
          getQueryParams: function () {
            var e = this.managedParameters,
              t = {},
              r = this
            return (
              Object.keys(this).forEach(function (n) {
                var i = r[n]
                ;-1 === e.indexOf(n) && void 0 !== i && (t[n] = i)
              }),
              t
            )
          },
          setQueryParameter: function (e, t) {
            if (this[e] === t) return this
            var r = {}
            return (r[e] = t), this.setQueryParameters(r)
          },
          setQueryParameters: function (e) {
            if (!e) return this
            var t = d.validate(this, e)
            if (t) throw t
            var r = this,
              n = d._parseNumbers(e),
              i = Object.keys(this).reduce(function (e, t) {
                return (e[t] = r[t]), e
              }, {}),
              a = Object.keys(n).reduce(function (e, t) {
                var r = void 0 !== e[t],
                  i = void 0 !== n[t]
                return r && !i ? c(e, [t]) : (i && (e[t] = n[t]), e)
              }, i)
            return new this.constructor(a)
          },
          resetPage: function () {
            return void 0 === this.page ? this : this.setPage(0)
          },
          _getHierarchicalFacetSortBy: function (e) {
            return e.sortBy || ['isRefined:desc', 'name:asc']
          },
          _getHierarchicalFacetSeparator: function (e) {
            return e.separator || ' > '
          },
          _getHierarchicalRootPath: function (e) {
            return e.rootPath || null
          },
          _getHierarchicalShowParentLevel: function (e) {
            return 'boolean' != typeof e.showParentLevel || e.showParentLevel
          },
          getHierarchicalFacetByName: function (e) {
            return i(this.hierarchicalFacets, function (t) {
              return t.name === e
            })
          },
          getHierarchicalFacetBreadcrumb: function (e) {
            if (!this.isHierarchicalFacet(e)) return []
            var t = this.getHierarchicalRefinement(e)[0]
            if (!t) return []
            var r = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e))
            return t.split(r).map(function (e) {
              return e.trim()
            })
          },
          toString: function () {
            return JSON.stringify(this, null, 2)
          },
        }),
        (e.exports = d)
    },
    50361: (e, t, r) => {
      'use strict'
      r.d(t, { Z: () => E })
      var n = r(25234),
        i = r.t(n, 2),
        a = r(14117),
        o = r(50174)
      function s(e) {
        var t, r, n
        return new o.SearchResults(
          e,
          [
            {
              query: null != (t = e.query) ? t : '',
              page: null != (r = e.page) ? r : 0,
              hitsPerPage: null != (n = e.hitsPerPage) ? n : 20,
              hits: [],
              nbHits: 0,
              nbPages: 0,
              params: '',
              exhaustiveNbHits: !0,
              exhaustiveFacetsCount: !0,
              processingTimeMS: 0,
              index: e.index,
            },
          ],
          { __isArtificial: !0 }
        )
      }
      function c(e) {
        return (c =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function u(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                var n, i, a
                ;(n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ('object' != c(e) || !e) return e
                      var r = e[Symbol.toPrimitive]
                      if (void 0 !== r) {
                        var n = r.call(e, t || 'default')
                        if ('object' != c(n)) return n
                        throw TypeError('@@toPrimitive must return a primitive value.')
                      }
                      return ('string' === t ? String : Number)(e)
                    })(e, 'string')
                    return 'symbol' == c(t) ? t : String(t)
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a)
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : u(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return e
      }
      var f = r(13174)
      function h(e, t) {
        if (!e) throw Error('Invariant failed')
      }
      var d = r(93861)
      function m() {
        var e = (0, n.useContext)(d.t)
        return (
          h(
            null !== e,
            'Hooks must be used inside the <InstantSearch> component.\n\nThey are not compatible with the `react-instantsearch-core@6.x` and `react-instantsearch-dom` packages, so make sure to use the <InstantSearch> component from `react-instantsearch-core@7.x`.'
          ),
          e
        )
      }
      var p = r(76476),
        g = r(66075)
      function y(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function v(e) {
        var t,
          r =
            (function (e) {
              if (Array.isArray(e)) return e
            })(
              (t = (0, n.useState)(function () {
                return e
              }))
            ) ||
            (function (e, t) {
              var r =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
              if (null != r) {
                var n,
                  i,
                  a,
                  o,
                  s = [],
                  c = !0,
                  u = !1
                try {
                  ;(a = (r = r.call(e)).next), !1
                  for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
                } catch (e) {
                  ;(u = !0), (i = e)
                } finally {
                  try {
                    if (!c && null != r.return && ((o = r.return()), Object(o) !== o)) return
                  } finally {
                    if (u) throw i
                  }
                }
                return s
              }
            })(t, 2) ||
            (function (e, t) {
              if (e) {
                if ('string' == typeof e) return y(e, 2)
                var r = Object.prototype.toString.call(e).slice(8, -1)
                if (
                  ('Object' === r && e.constructor && (r = e.constructor.name),
                  'Map' === r || 'Set' === r)
                )
                  return Array.from(e)
                if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                  return y(e, t)
              }
            })(t, 2) ||
            (function () {
              throw TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })(),
          i = r[0],
          o = r[1]
        return (0, a.j)(i, e) || o(e), i
      }
      var b = i.use,
        S = 'undefined' != typeof window ? n.useLayoutEffect : n.useEffect,
        O = r(68476)
      function j(e) {
        return (j =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      var R = ['instantSearchInstance', 'widgetParams'],
        P = ['widgetParams']
      function w(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      function F(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? F(Object(r), !0).forEach(function (t) {
                var n, i, a
                ;(n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ('object' != j(e) || !e) return e
                      var r = e[Symbol.toPrimitive]
                      if (void 0 !== r) {
                        var n = r.call(e, t || 'default')
                        if ('object' != j(n)) return n
                        throw TypeError('@@toPrimitive must return a primitive value.')
                      }
                      return ('string' === t ? String : Number)(e)
                    })(e, 'string')
                    return 'symbol' == j(t) ? t : String(t)
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a)
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : F(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return e
      }
      function _(e, t) {
        if (null == e) return {}
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {}
            var r,
              n,
              i = {},
              a = Object.keys(e)
            for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r])
            return i
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              !(t.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, r) &&
                (i[r] = e[r])
        }
        return i
      }
      function E(e) {
        var t,
          r,
          i,
          o,
          c,
          u,
          d,
          y,
          j,
          F,
          E,
          T,
          A,
          I,
          C,
          D = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          N = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          k = (0, p.r)(),
          H = (0, g.m)(),
          Q = m(),
          W =
            (h(
              null !== (t = (0, n.useContext)(f.m)),
              'The <Index> component must be used within <InstantSearch>.'
            ),
            t),
          L = v(D),
          U = v(N),
          q = (0, n.useRef)(!0),
          $ = (0, n.useRef)(null),
          V = (0, n.useRef)(Q.status),
          B = (0, n.useMemo)(
            function () {
              return x(
                x(
                  {},
                  e(
                    function (e, t) {
                      if (t) {
                        q.current = !0
                        return
                      }
                      if (q.current) {
                        var r = e.instantSearchInstance,
                          n = (e.widgetParams, _(e, R))
                        ;((0, a.j)(n, $.current, function (e, t) {
                          return (
                            (null == e ? void 0 : e.constructor) === Function &&
                            (null == t ? void 0 : t.constructor) === Function
                          )
                        }) &&
                          r.status === V.current) ||
                          (z(n), ($.current = n), (V.current = r.status))
                      }
                    },
                    function () {
                      q.current = !1
                    }
                  )(L)
                ),
                U
              )
            },
            [e, L, U]
          ),
          M =
            (function (e) {
              if (Array.isArray(e)) return e
            })(
              (r = (0, n.useState)(function () {
                if (B.getWidgetRenderState) {
                  var e,
                    t,
                    r,
                    n,
                    i = W.getHelper(),
                    a = W.getWidgetUiState({})[W.getIndexId()]
                  i.state =
                    (null == (n = B.getWidgetSearchParameters)
                      ? void 0
                      : n.call(B, i.state, { uiState: a })) || i.state
                  var o =
                      ((e = W.getHelper()),
                      (t = W.getResults() || s(e.state)),
                      (r = W.getScopedResults().map(function (e) {
                        var r = e.indexId === W.getIndexId() ? t : s(e.helper.state)
                        return l(l({}, e), {}, { results: e.results || r })
                      })),
                      { results: t, scopedResults: r, recommendResults: e.lastRecommendResults }),
                    c = o.results,
                    u = o.scopedResults,
                    f = o.recommendResults,
                    h = B.getWidgetRenderState({
                      helper: i,
                      parent: W,
                      instantSearchInstance: Q,
                      results:
                        'recommend' === B.dependsOn && f && H ? f[H.recommendIdx.current++] : c,
                      scopedResults: u,
                      state: i.state,
                      renderState: Q.renderState,
                      templatesConfig: Q.templatesConfig,
                      createURL: W.createURL,
                      searchMetadata: { isSearchStalled: 'stalled' === Q.status },
                      status: Q.status,
                      error: Q.error,
                    })
                  return h.widgetParams, _(h, P)
                }
                return {}
              }))
            ) ||
            (function (e, t) {
              var r =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
              if (null != r) {
                var n,
                  i,
                  a,
                  o,
                  s = [],
                  c = !0,
                  u = !1
                try {
                  ;(a = (r = r.call(e)).next), !1
                  for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
                } catch (e) {
                  ;(u = !0), (i = e)
                } finally {
                  try {
                    if (!c && null != r.return && ((o = r.return()), Object(o) !== o)) return
                  } finally {
                    if (u) throw i
                  }
                }
                return s
              }
            })(r, 2) ||
            (function (e, t) {
              if (e) {
                if ('string' == typeof e) return w(e, 2)
                var r = Object.prototype.toString.call(e).slice(8, -1)
                if (
                  ('Object' === r && e.constructor && (r = e.constructor.name),
                  'Map' === r || 'Set' === r)
                )
                  return Array.from(e)
                if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                  return w(e, t)
              }
            })(r, 2) ||
            (function () {
              throw TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })(),
          J = M[0],
          z = M[1]
        return (
          (u = (i = { widget: B, parentIndex: W, props: L, shouldSsr: !!k }).widget),
          (d = i.parentIndex),
          (y = i.props),
          (j = i.shouldSsr),
          (F = (0, O.t)()),
          (E = (0, n.useRef)(y)),
          (0, n.useEffect)(
            function () {
              E.current = y
            },
            [y]
          ),
          (T = (0, n.useRef)(u)),
          (0, n.useEffect)(
            function () {
              T.current = u
            },
            [u]
          ),
          (A = (0, n.useRef)(null)),
          (I = j && !d.getWidgets().includes(u)),
          S(
            function () {
              var e = T.current
              return (
                A.current
                  ? (clearTimeout(A.current),
                    (0, a.j)(y, E.current) || (d.removeWidgets([e]), d.addWidgets([u])))
                  : j || d.addWidgets([u]),
                function () {
                  A.current = setTimeout(function () {
                    C._schedule(function () {
                      C._preventWidgetCleanup || d.removeWidgets([e])
                    })
                  })
                }
              )
            },
            [d, u, j, (C = m()), y]
          ),
          (I || (null == F || null == (o = F.current) ? void 0 : o.status) === 'pending') &&
            d.addWidgets([u]),
          'undefined' == typeof window &&
            null != F &&
            F.current &&
            'ais.index' !== u.$$type &&
            (b(F.current),
            'ais.dynamicWidgets' !== u.$$type &&
              null != (c = C.helper) &&
              c.lastResults &&
              b(F.current)),
          J
        )
      }
    },
    52186: (e, t, r) => {
      'use strict'
      r.d(t, { k5: () => l })
      var n = r(25234),
        i = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
        a = n.createContext && n.createContext(i),
        o = ['attr', 'size', 'title']
      function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t]
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
            }).apply(this, arguments)
      }
      function c(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                var n, i, a
                ;(n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ('object' != typeof e || !e) return e
                      var r = e[Symbol.toPrimitive]
                      if (void 0 !== r) {
                        var n = r.call(e, t || 'default')
                        if ('object' != typeof n) return n
                        throw TypeError('@@toPrimitive must return a primitive value.')
                      }
                      return ('string' === t ? String : Number)(e)
                    })(e, 'string')
                    return 'symbol' == typeof t ? t : t + ''
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a)
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : c(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return e
      }
      function l(e) {
        return (t) =>
          n.createElement(
            f,
            s({ attr: u({}, e.attr) }, t),
            (function e(t) {
              return t && t.map((t, r) => n.createElement(t.tag, u({ key: r }, t.attr), e(t.child)))
            })(e.child)
          )
      }
      function f(e) {
        var t = (t) => {
          var r,
            { attr: i, size: a, title: c } = e,
            l = (function (e, t) {
              if (null == e) return {}
              var r,
                n,
                i = (function (e, t) {
                  if (null == e) return {}
                  var r = {}
                  for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                      if (t.indexOf(n) >= 0) continue
                      r[n] = e[n]
                    }
                  return r
                })(e, t)
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e)
                for (n = 0; n < a.length; n++)
                  (r = a[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (i[r] = e[r])
              }
              return i
            })(e, o),
            f = a || t.size || '1em'
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + ' ' : '') + e.className),
            n.createElement(
              'svg',
              s({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, t.attr, i, l, {
                className: r,
                style: u(u({ color: e.color || t.color }, t.style), e.style),
                height: f,
                width: f,
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              c && n.createElement('title', null, c),
              e.children
            )
          )
        }
        return void 0 !== a ? n.createElement(a.Consumer, null, (e) => t(e)) : t(i)
      }
    },
    53171: (e) => {
      'use strict'
      e.exports = '3.24.3'
    },
    53631: (e, t, r) => {
      'use strict'
      r.d(t, { default: () => i.a })
      var n = r(85668),
        i = r.n(n)
    },
    54127: (e) => {
      'use strict'
      e.exports = function () {
        var e = Array.prototype.slice.call(arguments)
        return e.reduceRight(function (e, t) {
          return (
            Object.keys(Object(t)).forEach(function (r) {
              void 0 !== t[r] && (void 0 !== e[r] && delete e[r], (e[r] = t[r]))
            }),
            e
          )
        }, {})
      }
    },
    54466: (e) => {
      'use strict'
      e.exports = function e(t) {
        if ('number' == typeof t) return t
        if ('string' == typeof t) return parseFloat(t)
        if (Array.isArray(t)) return t.map(e)
        throw Error('The value should be a number, a parsable string or an array of those.')
      }
    },
    56302: (e) => {
      'use strict'
      e.exports = function () {
        var e = Array.prototype.slice.call(arguments)
        return e.reduceRight(function (e, t) {
          return (
            Object.keys(Object(t)).forEach(function (r) {
              var n = 'number' == typeof e[r] ? e[r] : 0,
                i = t[r]
              void 0 !== i && i >= n && (void 0 !== e[r] && delete e[r], (e[r] = i))
            }),
            e
          )
        }, {})
      }
    },
    57368: (e, t, r) => {
      'use strict'
      e.exports = function (e) {
        return function (t, r) {
          var n,
            u,
            l,
            f,
            h,
            d = e.hierarchicalFacets[r],
            m =
              (e.hierarchicalFacetsRefinements[d.name] &&
                e.hierarchicalFacetsRefinements[d.name][0]) ||
              '',
            p = e._getHierarchicalFacetSeparator(d),
            g = e._getHierarchicalRootPath(d),
            y = e._getHierarchicalShowParentLevel(d),
            v = a(e._getHierarchicalFacetSortBy(d)),
            b = t.every(function (e) {
              return e.exhaustive
            }),
            S =
              ((n = v),
              (u = p),
              (l = g),
              (f = y),
              (h = m),
              function (e, t, r) {
                var a = e
                if (r > 0) {
                  var d = 0
                  for (a = e; d < r; )
                    (a = i(a && Array.isArray(a.data) ? a.data : [], function (e) {
                      return e.isRefined
                    })),
                      d++
                }
                if (a) {
                  var m = Object.keys(t.data)
                    .map(function (e) {
                      return [e, t.data[e]]
                    })
                    .filter(function (e) {
                      var t, r, n, i, o, s
                      return (
                        (t = e[0]),
                        (r = a.path || l),
                        (n = h),
                        (i = u),
                        (o = l),
                        (s = f),
                        (!o || (0 === t.indexOf(o) && o !== t)) &&
                          ((!o && -1 === t.indexOf(i)) ||
                            (o && t.split(i).length - o.split(i).length == 1) ||
                            (-1 === t.indexOf(i) && -1 === n.indexOf(i)) ||
                            0 === n.indexOf(t) ||
                            (0 === t.indexOf(r + i) && (s || 0 === t.indexOf(n))))
                      )
                    })
                  a.data = o(
                    m.map(function (e) {
                      var r,
                        n,
                        i,
                        a,
                        o,
                        l,
                        f = e[0]
                      return (
                        (r = e[1]),
                        (n = f),
                        (i = u),
                        (a = c(h)),
                        (o = t.exhaustive),
                        {
                          name: (l = n.split(i))[l.length - 1].trim(),
                          path: n,
                          escapedValue: s(n),
                          count: r,
                          isRefined: a === n || 0 === a.indexOf(n + i),
                          exhaustive: o,
                          data: null,
                        }
                      )
                    }),
                    n[0],
                    n[1]
                  )
                }
                return e
              }),
            O = t
          return (
            g && (O = t.slice(g.split(p).length)),
            O.reduce(S, {
              name: e.hierarchicalFacets[r].name,
              count: null,
              isRefined: !0,
              path: null,
              escapedValue: null,
              exhaustive: b,
              data: null,
            })
          )
        }
      }
      var n = r(72140),
        i = r(8304),
        a = r(76320),
        o = r(67488),
        s = n.escapeFacetValue,
        c = n.unescapeFacetValue
    },
    63906: (e, t, r) => {
      'use strict'
      var n = r(27080),
        i = r(64549),
        a = r(72140).escapeFacetValue,
        o = r(17335),
        s = r(32105),
        c = r(75164),
        u = r(10150),
        l = r(90454),
        f = r(87606),
        h = r(2573),
        d = r(50178),
        m = r(74218),
        p = r(73660),
        g = r(53171)
      function y(e, t, r, n) {
        'function' == typeof e.addAlgoliaAgent && e.addAlgoliaAgent('JS Helper (' + g + ')'),
          this.setClient(e)
        var i = r || {}
        ;(i.index = t),
          (this.state = d.make(i)),
          (this.recommendState = new l({ params: i.recommendState })),
          (this.lastResults = null),
          (this.lastRecommendResults = null),
          (this._queryId = 0),
          (this._recommendQueryId = 0),
          (this._lastQueryIdReceived = -1),
          (this._lastRecommendQueryIdReceived = -1),
          (this.derivedHelpers = []),
          (this._currentNbQueries = 0),
          (this._currentNbRecommendQueries = 0),
          (this._searchResultsOptions = n),
          (this._recommendCache = {})
      }
      function v(e) {
        if (e < 0) throw Error('Page requested below 0.')
        return this._change({ state: this.state.setPage(e), isPageReset: !1 }), this
      }
      function b() {
        return this.state.page
      }
      o(y, n),
        (y.prototype.search = function () {
          return this._search({ onlyWithDerivedHelpers: !1 }), this
        }),
        (y.prototype.searchOnlyWithDerivedHelpers = function () {
          return this._search({ onlyWithDerivedHelpers: !0 }), this
        }),
        (y.prototype.searchWithComposition = function () {
          return this._runComposition({ onlyWithDerivedHelpers: !0 }), this
        }),
        (y.prototype.recommend = function () {
          return this._recommend(), this
        }),
        (y.prototype.getQuery = function () {
          var e = this.state
          return h._getHitsSearchParams(e)
        }),
        (y.prototype.searchOnce = function (e, t) {
          var r = e ? this.state.setQueryParameters(e) : this.state,
            n = h._getQueries(r.index, r),
            i = this
          return (this._currentNbQueries++, this.emit('searchOnce', { state: r }), t)
            ? void this.client
                .search(n)
                .then(function (e) {
                  i._currentNbQueries--,
                    0 === i._currentNbQueries && i.emit('searchQueueEmpty'),
                    t(null, new m(r, e.results), r)
                })
                .catch(function (e) {
                  i._currentNbQueries--,
                    0 === i._currentNbQueries && i.emit('searchQueueEmpty'),
                    t(e, null, r)
                })
            : this.client.search(n).then(
                function (e) {
                  return (
                    i._currentNbQueries--,
                    0 === i._currentNbQueries && i.emit('searchQueueEmpty'),
                    { content: new m(r, e.results), state: r, _originalResponse: e }
                  )
                },
                function (e) {
                  throw (
                    (i._currentNbQueries--,
                    0 === i._currentNbQueries && i.emit('searchQueueEmpty'),
                    e)
                  )
                }
              )
        }),
        (y.prototype.findAnswers = function (e) {
          console.warn('[algoliasearch-helper] answers is no longer supported')
          var t = this.state,
            r = this.derivedHelpers[0]
          if (!r) return Promise.resolve([])
          var n = r.getModifiedState(t),
            i = s(
              { attributesForPrediction: e.attributesForPrediction, nbHits: e.nbHits },
              {
                params: u(h._getHitsSearchParams(n), [
                  'attributesToSnippet',
                  'hitsPerPage',
                  'restrictSearchableAttributes',
                  'snippetEllipsisText',
                ]),
              }
            ),
            a =
              'search for answers was called, but this client does not have a function client.initIndex(index).findAnswers'
          if ('function' != typeof this.client.initIndex) throw Error(a)
          var o = this.client.initIndex(n.index)
          if ('function' != typeof o.findAnswers) throw Error(a)
          return o.findAnswers(n.query, e.queryLanguages, i)
        }),
        (y.prototype.searchForFacetValues = function (e, t, r, n) {
          var i,
            o =
              'function' == typeof this.client.searchForFacetValues &&
              'function' != typeof this.client.searchForFacets,
            s = 'function' == typeof this.client.initIndex
          if (!o && !s && 'function' != typeof this.client.search)
            throw Error(
              'search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues'
            )
          var c = this.state.setQueryParameters(n || {}),
            u = c.isDisjunctiveFacet(e),
            l = h.getSearchForFacetQuery(e, t, r, c)
          this._currentNbQueries++
          var f = this
          return (
            o
              ? (i = this.client.searchForFacetValues([{ indexName: c.index, params: l }]))
              : s
                ? (i = this.client.initIndex(c.index).searchForFacetValues(l))
                : (delete l.facetName,
                  (i = this.client
                    .search([{ type: 'facet', facet: e, indexName: c.index, params: l }])
                    .then(function (e) {
                      return e.results[0]
                    }))),
            this.emit('searchForFacetValues', { state: c, facet: e, query: t }),
            i.then(
              function (t) {
                return (
                  f._currentNbQueries--,
                  0 === f._currentNbQueries && f.emit('searchQueueEmpty'),
                  (t = Array.isArray(t) ? t[0] : t).facetHits.forEach(function (t) {
                    ;(t.escapedValue = a(t.value)),
                      (t.isRefined = u
                        ? c.isDisjunctiveFacetRefined(e, t.escapedValue)
                        : c.isFacetRefined(e, t.escapedValue))
                  }),
                  t
                )
              },
              function (e) {
                throw (
                  (f._currentNbQueries--,
                  0 === f._currentNbQueries && f.emit('searchQueueEmpty'),
                  e)
                )
              }
            )
          )
        }),
        (y.prototype.searchForCompositionFacetValues = function (e, t, r, n) {
          if ('function' != typeof this.client.searchForFacetValues)
            throw Error(
              'search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues'
            )
          var i,
            o = this.state.setQueryParameters(n || {}),
            s = o.isDisjunctiveFacet(e)
          this._currentNbQueries++
          var c = this
          return (
            (i = this.client.searchForFacetValues({
              compositionID: o.index,
              facetName: e,
              searchForFacetValuesRequest: {
                params: {
                  query: t,
                  maxFacetHits: r,
                  searchQuery: h._getCompositionHitsSearchParams(o),
                },
              },
            })),
            this.emit('searchForFacetValues', { state: o, facet: e, query: t }),
            i.then(
              function (t) {
                return (
                  c._currentNbQueries--,
                  0 === c._currentNbQueries && c.emit('searchQueueEmpty'),
                  (t = t.results[0]).facetHits.forEach(function (t) {
                    ;(t.escapedValue = a(t.value)),
                      (t.isRefined = s
                        ? o.isDisjunctiveFacetRefined(e, t.escapedValue)
                        : o.isFacetRefined(e, t.escapedValue))
                  }),
                  t
                )
              },
              function (e) {
                throw (
                  (c._currentNbQueries--,
                  0 === c._currentNbQueries && c.emit('searchQueueEmpty'),
                  e)
                )
              }
            )
          )
        }),
        (y.prototype.setQuery = function (e) {
          return this._change({ state: this.state.resetPage().setQuery(e), isPageReset: !0 }), this
        }),
        (y.prototype.clearRefinements = function (e) {
          return (
            this._change({ state: this.state.resetPage().clearRefinements(e), isPageReset: !0 }),
            this
          )
        }),
        (y.prototype.clearTags = function () {
          return this._change({ state: this.state.resetPage().clearTags(), isPageReset: !0 }), this
        }),
        (y.prototype.addDisjunctiveFacetRefinement = function (e, t) {
          return (
            this._change({
              state: this.state.resetPage().addDisjunctiveFacetRefinement(e, t),
              isPageReset: !0,
            }),
            this
          )
        }),
        (y.prototype.addDisjunctiveRefine = function () {
          return this.addDisjunctiveFacetRefinement.apply(this, arguments)
        }),
        (y.prototype.addHierarchicalFacetRefinement = function (e, t) {
          return (
            this._change({
              state: this.state.resetPage().addHierarchicalFacetRefinement(e, t),
              isPageReset: !0,
            }),
            this
          )
        }),
        (y.prototype.addNumericRefinement = function (e, t, r) {
          return (
            this._change({
              state: this.state.resetPage().addNumericRefinement(e, t, r),
              isPageReset: !0,
            }),
            this
          )
        }),
        (y.prototype.addFacetRefinement = function (e, t) {
          return (
            this._change({
              state: this.state.resetPage().addFacetRefinement(e, t),
              isPageReset: !0,
            }),
            this
          )
        }),
        (y.prototype.addRefine = function () {
          return this.addFacetRefinement.apply(this, arguments)
        }),
        (y.prototype.addFacetExclusion = function (e, t) {
          return (
            this._change({
              state: this.state.resetPage().addExcludeRefinement(e, t),
              isPageReset: !0,
            }),
            this
          )
        }),
        (y.prototype.addExclude = function () {
          return this.addFacetExclusion.apply(this, arguments)
        }),
        (y.prototype.addTag = function (e) {
          return (
            this._change({ state: this.state.resetPage().addTagRefinement(e), isPageReset: !0 }),
            this
          )
        }),
        (y.prototype.addFrequentlyBoughtTogether = function (e) {
          return (
            this._recommendChange({ state: this.recommendState.addFrequentlyBoughtTogether(e) }),
            this
          )
        }),
        (y.prototype.addRelatedProducts = function (e) {
          return this._recommendChange({ state: this.recommendState.addRelatedProducts(e) }), this
        }),
        (y.prototype.addTrendingItems = function (e) {
          return this._recommendChange({ state: this.recommendState.addTrendingItems(e) }), this
        }),
        (y.prototype.addTrendingFacets = function (e) {
          return this._recommendChange({ state: this.recommendState.addTrendingFacets(e) }), this
        }),
        (y.prototype.addLookingSimilar = function (e) {
          return this._recommendChange({ state: this.recommendState.addLookingSimilar(e) }), this
        }),
        (y.prototype.removeNumericRefinement = function (e, t, r) {
          return (
            this._change({
              state: this.state.resetPage().removeNumericRefinement(e, t, r),
              isPageReset: !0,
            }),
            this
          )
        }),
        (y.prototype.removeDisjunctiveFacetRefinement = function (e, t) {
          return (
            this._change({
              state: this.state.resetPage().removeDisjunctiveFacetRefinement(e, t),
              isPageReset: !0,
            }),
            this
          )
        }),
        (y.prototype.removeDisjunctiveRefine = function () {
          return this.removeDisjunctiveFacetRefinement.apply(this, arguments)
        }),
        (y.prototype.removeHierarchicalFacetRefinement = function (e) {
          return (
            this._change({
              state: this.state.resetPage().removeHierarchicalFacetRefinement(e),
              isPageReset: !0,
            }),
            this
          )
        }),
        (y.prototype.removeFacetRefinement = function (e, t) {
          return (
            this._change({
              state: this.state.resetPage().removeFacetRefinement(e, t),
              isPageReset: !0,
            }),
            this
          )
        }),
        (y.prototype.removeRefine = function () {
          return this.removeFacetRefinement.apply(this, arguments)
        }),
        (y.prototype.removeFacetExclusion = function (e, t) {
          return (
            this._change({
              state: this.state.resetPage().removeExcludeRefinement(e, t),
              isPageReset: !0,
            }),
            this
          )
        }),
        (y.prototype.removeExclude = function () {
          return this.removeFacetExclusion.apply(this, arguments)
        }),
        (y.prototype.removeTag = function (e) {
          return (
            this._change({ state: this.state.resetPage().removeTagRefinement(e), isPageReset: !0 }),
            this
          )
        }),
        (y.prototype.removeFrequentlyBoughtTogether = function (e) {
          return this._recommendChange({ state: this.recommendState.removeParams(e) }), this
        }),
        (y.prototype.removeRelatedProducts = function (e) {
          return this._recommendChange({ state: this.recommendState.removeParams(e) }), this
        }),
        (y.prototype.removeTrendingItems = function (e) {
          return this._recommendChange({ state: this.recommendState.removeParams(e) }), this
        }),
        (y.prototype.removeTrendingFacets = function (e) {
          return this._recommendChange({ state: this.recommendState.removeParams(e) }), this
        }),
        (y.prototype.removeLookingSimilar = function (e) {
          return this._recommendChange({ state: this.recommendState.removeParams(e) }), this
        }),
        (y.prototype.toggleFacetExclusion = function (e, t) {
          return (
            this._change({
              state: this.state.resetPage().toggleExcludeFacetRefinement(e, t),
              isPageReset: !0,
            }),
            this
          )
        }),
        (y.prototype.toggleExclude = function () {
          return this.toggleFacetExclusion.apply(this, arguments)
        }),
        (y.prototype.toggleRefinement = function (e, t) {
          return this.toggleFacetRefinement(e, t)
        }),
        (y.prototype.toggleFacetRefinement = function (e, t) {
          return (
            this._change({
              state: this.state.resetPage().toggleFacetRefinement(e, t),
              isPageReset: !0,
            }),
            this
          )
        }),
        (y.prototype.toggleRefine = function () {
          return this.toggleFacetRefinement.apply(this, arguments)
        }),
        (y.prototype.toggleTag = function (e) {
          return (
            this._change({ state: this.state.resetPage().toggleTagRefinement(e), isPageReset: !0 }),
            this
          )
        }),
        (y.prototype.nextPage = function () {
          var e = this.state.page || 0
          return this.setPage(e + 1)
        }),
        (y.prototype.previousPage = function () {
          var e = this.state.page || 0
          return this.setPage(e - 1)
        }),
        (y.prototype.setCurrentPage = v),
        (y.prototype.setPage = v),
        (y.prototype.setIndex = function (e) {
          return this._change({ state: this.state.resetPage().setIndex(e), isPageReset: !0 }), this
        }),
        (y.prototype.setQueryParameter = function (e, t) {
          return (
            this._change({
              state: this.state.resetPage().setQueryParameter(e, t),
              isPageReset: !0,
            }),
            this
          )
        }),
        (y.prototype.setState = function (e) {
          return this._change({ state: d.make(e), isPageReset: !1 }), this
        }),
        (y.prototype.overrideStateWithoutTriggeringChangeEvent = function (e) {
          return (this.state = new d(e)), this
        }),
        (y.prototype.hasRefinements = function (e) {
          return (
            !!c(this.state.getNumericRefinements(e)) ||
            (this.state.isConjunctiveFacet(e)
              ? this.state.isFacetRefined(e)
              : this.state.isDisjunctiveFacet(e)
                ? this.state.isDisjunctiveFacetRefined(e)
                : !!this.state.isHierarchicalFacet(e) && this.state.isHierarchicalFacetRefined(e))
          )
        }),
        (y.prototype.isExcluded = function (e, t) {
          return this.state.isExcludeRefined(e, t)
        }),
        (y.prototype.isDisjunctiveRefined = function (e, t) {
          return this.state.isDisjunctiveFacetRefined(e, t)
        }),
        (y.prototype.hasTag = function (e) {
          return this.state.isTagRefined(e)
        }),
        (y.prototype.isTagRefined = function () {
          return this.hasTagRefinements.apply(this, arguments)
        }),
        (y.prototype.getIndex = function () {
          return this.state.index
        }),
        (y.prototype.getCurrentPage = b),
        (y.prototype.getPage = b),
        (y.prototype.getTags = function () {
          return this.state.tagRefinements
        }),
        (y.prototype.getRefinements = function (e) {
          var t = []
          this.state.isConjunctiveFacet(e)
            ? (this.state.getConjunctiveRefinements(e).forEach(function (e) {
                t.push({ value: e, type: 'conjunctive' })
              }),
              this.state.getExcludeRefinements(e).forEach(function (e) {
                t.push({ value: e, type: 'exclude' })
              }))
            : this.state.isDisjunctiveFacet(e) &&
              this.state.getDisjunctiveRefinements(e).forEach(function (e) {
                t.push({ value: e, type: 'disjunctive' })
              })
          var r = this.state.getNumericRefinements(e)
          return (
            Object.keys(r).forEach(function (e) {
              var n = r[e]
              t.push({ value: n, operator: e, type: 'numeric' })
            }),
            t
          )
        }),
        (y.prototype.getNumericRefinement = function (e, t) {
          return this.state.getNumericRefinement(e, t)
        }),
        (y.prototype.getHierarchicalFacetBreadcrumb = function (e) {
          return this.state.getHierarchicalFacetBreadcrumb(e)
        }),
        (y.prototype._search = function (e) {
          var t = this.state,
            r = [],
            n = []
          e.onlyWithDerivedHelpers ||
            ((n = h._getQueries(t.index, t)),
            r.push({ state: t, queriesCount: n.length, helper: this }),
            this.emit('search', { state: t, results: this.lastResults }))
          var i = this.derivedHelpers.map(function (e) {
              var n = e.getModifiedState(t),
                i = n.index ? h._getQueries(n.index, n) : []
              return (
                r.push({ state: n, queriesCount: i.length, helper: e }),
                e.emit('search', { state: n, results: e.lastResults }),
                i
              )
            }),
            a = Array.prototype.concat.apply(n, i),
            o = this._queryId++
          if ((this._currentNbQueries++, !a.length))
            return Promise.resolve({ results: [] }).then(
              this._dispatchAlgoliaResponse.bind(this, r, o)
            )
          try {
            this.client
              .search(a)
              .then(this._dispatchAlgoliaResponse.bind(this, r, o))
              .catch(this._dispatchAlgoliaError.bind(this, o))
          } catch (e) {
            this.emit('error', { error: e })
          }
        }),
        (y.prototype._runComposition = function () {
          var e = this.state,
            t = [],
            r = this.derivedHelpers.map(function (r) {
              var n = r.getModifiedState(e),
                i = h._getCompositionQueries(n)
              return (
                t.push({ state: n, queriesCount: i.length, helper: r }),
                r.emit('search', { state: n, results: r.lastResults }),
                i
              )
            }),
            n = Array.prototype.concat.apply([], r),
            i = this._queryId++
          if ((this._currentNbQueries++, !n.length))
            return Promise.resolve({ results: [] }).then(
              this._dispatchAlgoliaResponse.bind(this, t, i)
            )
          if (n.length > 1) throw Error('Only one query is allowed when using a composition.')
          var a = n[0]
          try {
            this.client
              .search(a)
              .then(this._dispatchAlgoliaResponse.bind(this, t, i))
              .catch(this._dispatchAlgoliaError.bind(this, i))
          } catch (e) {
            this.emit('error', { error: e })
          }
        }),
        (y.prototype._recommend = function () {
          var e = this.state,
            t = this.recommendState,
            r = this.getIndex(),
            n = [{ state: t, index: r, helper: this }],
            i = t.params.map(function (e) {
              return e.$$id
            })
          this.emit('fetch', { recommend: { state: t, results: this.lastRecommendResults } })
          var a = this._recommendCache,
            o = this.derivedHelpers.map(function (t) {
              var r = t.getModifiedState(e).index
              if (!r) return []
              var o = t.getModifiedRecommendState(new l())
              return (
                n.push({ state: o, index: r, helper: t }),
                (i = Array.prototype.concat.apply(
                  i,
                  o.params.map(function (e) {
                    return e.$$id
                  })
                )),
                t.emit('fetch', { recommend: { state: o, results: t.lastRecommendResults } }),
                o._buildQueries(r, a)
              )
            }),
            s = Array.prototype.concat.apply(this.recommendState._buildQueries(r, a), o)
          if (0 !== s.length) {
            if (s.length > 0 && void 0 === this.client.getRecommendations)
              return void console.warn(
                'Please update algoliasearch/lite to the latest version in order to use recommend widgets.'
              )
            var c = this._recommendQueryId++
            this._currentNbRecommendQueries++
            try {
              this.client
                .getRecommendations(s)
                .then(this._dispatchRecommendResponse.bind(this, c, n, i))
                .catch(this._dispatchRecommendError.bind(this, c))
            } catch (e) {
              this.emit('error', { error: e })
            }
          }
        }),
        (y.prototype._dispatchAlgoliaResponse = function (e, t, r) {
          var n = this
          if (!(t < this._lastQueryIdReceived)) {
            ;(this._currentNbQueries -= t - this._lastQueryIdReceived),
              (this._lastQueryIdReceived = t),
              0 === this._currentNbQueries && this.emit('searchQueueEmpty')
            var i = r.results.slice(),
              a = Object.keys(r).reduce(function (e, t) {
                return 'results' !== t && (e[t] = r[t]), e
              }, {})
            Object.keys(a).length <= 0 && (a = void 0),
              e.forEach(function (e) {
                var t = e.state,
                  r = e.queriesCount,
                  o = e.helper,
                  s = i.splice(0, r)
                if (!t.index) return void o.emit('result', { results: null, state: t })
                ;(o.lastResults = new m(t, s, n._searchResultsOptions)),
                  void 0 !== a && (o.lastResults._rawContent = a),
                  o.emit('result', { results: o.lastResults, state: t })
              })
          }
        }),
        (y.prototype._dispatchRecommendResponse = function (e, t, r, n) {
          if (!(e < this._lastRecommendQueryIdReceived)) {
            ;(this._currentNbRecommendQueries -= e - this._lastRecommendQueryIdReceived),
              (this._lastRecommendQueryIdReceived = e),
              0 === this._currentNbRecommendQueries && this.emit('recommendQueueEmpty')
            var i = this._recommendCache,
              a = {}
            r
              .filter(function (e) {
                return void 0 === i[e]
              })
              .forEach(function (e, t) {
                a[e] || (a[e] = []), a[e].push(t)
              }),
              Object.keys(a).forEach(function (e) {
                var t = a[e],
                  r = n.results[t[0]]
                if (1 === t.length) {
                  i[e] = r
                  return
                }
                i[e] = Object.assign({}, r, {
                  hits: p(
                    t.map(function (e) {
                      return n.results[e].hits
                    })
                  ),
                })
              })
            var o = {}
            r.forEach(function (e) {
              o[e] = i[e]
            }),
              t.forEach(function (e) {
                var t = e.state,
                  r = e.helper
                if (!e.index) return void r.emit('recommend:result', { results: null, state: t })
                ;(r.lastRecommendResults = new f(t, o)),
                  r.emit('recommend:result', {
                    recommend: { results: r.lastRecommendResults, state: t },
                  })
              })
          }
        }),
        (y.prototype._dispatchAlgoliaError = function (e, t) {
          e < this._lastQueryIdReceived ||
            ((this._currentNbQueries -= e - this._lastQueryIdReceived),
            (this._lastQueryIdReceived = e),
            this.emit('error', { error: t }),
            0 === this._currentNbQueries && this.emit('searchQueueEmpty'))
        }),
        (y.prototype._dispatchRecommendError = function (e, t) {
          e < this._lastRecommendQueryIdReceived ||
            ((this._currentNbRecommendQueries -= e - this._lastRecommendQueryIdReceived),
            (this._lastRecommendQueryIdReceived = e),
            this.emit('error', { error: t }),
            0 === this._currentNbRecommendQueries && this.emit('recommendQueueEmpty'))
        }),
        (y.prototype.containsRefinement = function (e, t, r, n) {
          return e || 0 !== t.length || 0 !== r.length || 0 !== n.length
        }),
        (y.prototype._hasDisjunctiveRefinements = function (e) {
          return (
            this.state.disjunctiveRefinements[e] && this.state.disjunctiveRefinements[e].length > 0
          )
        }),
        (y.prototype._change = function (e) {
          var t = e.state,
            r = e.isPageReset
          t !== this.state &&
            ((this.state = t),
            this.emit('change', { state: this.state, results: this.lastResults, isPageReset: r }))
        }),
        (y.prototype._recommendChange = function (e) {
          var t = e.state
          t !== this.recommendState &&
            ((this.recommendState = t),
            this.emit('recommend:change', {
              search: { results: this.lastResults, state: this.state },
              recommend: { results: this.lastRecommendResults, state: this.recommendState },
            }))
        }),
        (y.prototype.clearCache = function () {
          return this.client.clearCache && this.client.clearCache(), this
        }),
        (y.prototype.setClient = function (e) {
          return (
            this.client === e ||
              ('function' == typeof e.addAlgoliaAgent && e.addAlgoliaAgent('JS Helper (' + g + ')'),
              (this.client = e)),
            this
          )
        }),
        (y.prototype.getClient = function () {
          return this.client
        }),
        (y.prototype.derive = function (e, t) {
          var r = new i(this, e, t)
          return this.derivedHelpers.push(r), r
        }),
        (y.prototype.detachDerivedHelper = function (e) {
          var t = this.derivedHelpers.indexOf(e)
          if (-1 === t) throw Error('Derived helper already detached')
          this.derivedHelpers.splice(t, 1)
        }),
        (y.prototype.hasPendingRequests = function () {
          return this._currentNbQueries > 0
        }),
        (e.exports = y)
    },
    64549: (e, t, r) => {
      'use strict'
      var n = r(27080)
      function i(e, t, r) {
        ;(this.main = e),
          (this.fn = t),
          (this.recommendFn = r),
          (this.lastResults = null),
          (this.lastRecommendResults = null)
      }
      r(17335)(i, n),
        (i.prototype.detach = function () {
          this.removeAllListeners(), this.main.detachDerivedHelper(this)
        }),
        (i.prototype.getModifiedState = function (e) {
          return this.fn(e)
        }),
        (i.prototype.getModifiedRecommendState = function (e) {
          return this.recommendFn(e)
        }),
        (e.exports = i)
    },
    66075: (e, t, r) => {
      'use strict'
      r.d(t, { m: () => a })
      var n = r(25234),
        i = (0, n.createContext)(null)
      function a() {
        return (0, n.useContext)(i)
      }
    },
    67488: (e) => {
      'use strict'
      e.exports = function (e, t, r) {
        if (!Array.isArray(e)) return []
        Array.isArray(r) || (r = [])
        var n = e.map(function (e, r) {
          return {
            criteria: t.map(function (t) {
              return e[t]
            }),
            index: r,
            value: e,
          }
        })
        return (
          n.sort(function (e, t) {
            for (var n = -1; ++n < e.criteria.length; ) {
              var i = (function (e, t) {
                if (e !== t) {
                  var r = void 0 !== e,
                    n = null === e,
                    i = void 0 !== t,
                    a = null === t
                  if ((!a && e > t) || (n && i) || !r) return 1
                  if ((!n && e < t) || (a && r) || !i) return -1
                }
                return 0
              })(e.criteria[n], t.criteria[n])
              if (i) {
                if (n >= r.length) return i
                if ('desc' === r[n]) return -i
                return i
              }
            }
            return e.index - t.index
          }),
          n.map(function (e) {
            return e.value
          })
        )
      }
    },
    68476: (e, t, r) => {
      'use strict'
      r.d(t, { t: () => a })
      var n = r(25234),
        i = (0, n.createContext)(null)
      function a() {
        return (0, n.useContext)(i)
      }
    },
    72061: (e, t, r) => {
      'use strict'
      var n = r(93649),
        i = r(96316),
        a = Object.prototype.hasOwnProperty,
        o = {
          brackets: function (e) {
            return e + '[]'
          },
          comma: 'comma',
          indices: function (e, t) {
            return e + '[' + t + ']'
          },
          repeat: function (e) {
            return e
          },
        },
        s = Array.isArray,
        c = String.prototype.split,
        u = Array.prototype.push,
        l = function (e, t) {
          u.apply(e, s(t) ? t : [t])
        },
        f = Date.prototype.toISOString,
        h = i.default,
        d = {
          addQueryPrefix: !1,
          allowDots: !1,
          charset: 'utf-8',
          charsetSentinel: !1,
          delimiter: '&',
          encode: !0,
          encoder: n.encode,
          encodeValuesOnly: !1,
          format: h,
          formatter: i.formatters[h],
          indices: !1,
          serializeDate: function (e) {
            return f.call(e)
          },
          skipNulls: !1,
          strictNullHandling: !1,
        },
        m = function e(t, r, i, a, o, u, f, h, m, p, g, y, v, b) {
          var S,
            O,
            j = t
          if (
            ('function' == typeof f
              ? (j = f(r, j))
              : j instanceof Date
                ? (j = p(j))
                : 'comma' === i &&
                  s(j) &&
                  (j = n.maybeMap(j, function (e) {
                    return e instanceof Date ? p(e) : e
                  })),
            null === j)
          ) {
            if (a) return u && !v ? u(r, d.encoder, b, 'key', g) : r
            j = ''
          }
          if (
            'string' == typeof (S = j) ||
            'number' == typeof S ||
            'boolean' == typeof S ||
            'symbol' == typeof S ||
            'bigint' == typeof S ||
            n.isBuffer(j)
          ) {
            if (u) {
              var R = v ? r : u(r, d.encoder, b, 'key', g)
              if ('comma' === i && v) {
                for (var P = c.call(String(j), ','), w = '', F = 0; F < P.length; ++F)
                  w += (0 === F ? '' : ',') + y(u(P[F], d.encoder, b, 'value', g))
                return [y(R) + '=' + w]
              }
              return [y(R) + '=' + y(u(j, d.encoder, b, 'value', g))]
            }
            return [y(r) + '=' + y(String(j))]
          }
          var x = []
          if (void 0 === j) return x
          if ('comma' === i && s(j)) O = [{ value: j.length > 0 ? j.join(',') || null : void 0 }]
          else if (s(f)) O = f
          else {
            var _ = Object.keys(j)
            O = h ? _.sort(h) : _
          }
          for (var E = 0; E < O.length; ++E) {
            var T = O[E],
              A = 'object' == typeof T && void 0 !== T.value ? T.value : j[T]
            ;(o && null === A) ||
              l(
                x,
                e(
                  A,
                  s(j) ? ('function' == typeof i ? i(r, T) : r) : r + (m ? '.' + T : '[' + T + ']'),
                  i,
                  a,
                  o,
                  u,
                  f,
                  h,
                  m,
                  p,
                  g,
                  y,
                  v,
                  b
                )
              )
          }
          return x
        },
        p = function (e) {
          if (!e) return d
          if (null !== e.encoder && void 0 !== e.encoder && 'function' != typeof e.encoder)
            throw TypeError('Encoder has to be a function.')
          var t = e.charset || d.charset
          if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset)
            throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined')
          var r = i.default
          if (void 0 !== e.format) {
            if (!a.call(i.formatters, e.format)) throw TypeError('Unknown format option provided.')
            r = e.format
          }
          var n = i.formatters[r],
            o = d.filter
          return (
            ('function' == typeof e.filter || s(e.filter)) && (o = e.filter),
            {
              addQueryPrefix:
                'boolean' == typeof e.addQueryPrefix ? e.addQueryPrefix : d.addQueryPrefix,
              allowDots: void 0 === e.allowDots ? d.allowDots : !!e.allowDots,
              charset: t,
              charsetSentinel:
                'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : d.charsetSentinel,
              delimiter: void 0 === e.delimiter ? d.delimiter : e.delimiter,
              encode: 'boolean' == typeof e.encode ? e.encode : d.encode,
              encoder: 'function' == typeof e.encoder ? e.encoder : d.encoder,
              encodeValuesOnly:
                'boolean' == typeof e.encodeValuesOnly ? e.encodeValuesOnly : d.encodeValuesOnly,
              filter: o,
              format: r,
              formatter: n,
              serializeDate:
                'function' == typeof e.serializeDate ? e.serializeDate : d.serializeDate,
              skipNulls: 'boolean' == typeof e.skipNulls ? e.skipNulls : d.skipNulls,
              sort: 'function' == typeof e.sort ? e.sort : null,
              strictNullHandling:
                'boolean' == typeof e.strictNullHandling
                  ? e.strictNullHandling
                  : d.strictNullHandling,
            }
          )
        }
      e.exports = function (e, t) {
        var r,
          n,
          i,
          a = e,
          c = p(t)
        'function' == typeof c.filter ? (a = (0, c.filter)('', a)) : s(c.filter) && (r = c.filter)
        var u = []
        if ('object' != typeof a || null === a) return ''
        i =
          t && t.arrayFormat in o
            ? t.arrayFormat
            : t && 'indices' in t
              ? t.indices
                ? 'indices'
                : 'repeat'
              : 'indices'
        var f = o[i]
        r || (r = Object.keys(a)), c.sort && r.sort(c.sort)
        for (var h = 0; h < r.length; ++h) {
          var d = r[h]
          ;(c.skipNulls && null === a[d]) ||
            l(
              u,
              m(
                a[d],
                d,
                f,
                c.strictNullHandling,
                c.skipNulls,
                c.encode ? c.encoder : null,
                c.filter,
                c.sort,
                c.allowDots,
                c.serializeDate,
                c.format,
                c.formatter,
                c.encodeValuesOnly,
                c.charset
              )
            )
        }
        var g = u.join(c.delimiter),
          y = !0 === c.addQueryPrefix ? '?' : ''
        return (
          c.charsetSentinel &&
            ('iso-8859-1' === c.charset ? (y += 'utf8=%26%2310003%3B&') : (y += 'utf8=%E2%9C%93&')),
          g.length > 0 ? y + g : ''
        )
      }
    },
    72140: (e) => {
      'use strict'
      e.exports = {
        escapeFacetValue: function (e) {
          return 'string' != typeof e ? e : String(e).replace(/^-/, '\\-')
        },
        unescapeFacetValue: function (e) {
          return 'string' != typeof e ? e : e.replace(/^\\-/, '-')
        },
      }
    },
    73660: (e, t, r) => {
      'use strict'
      var n = r(8304),
        i = r(48272)
      e.exports = function (e) {
        var t,
          r,
          a = {}
        return (
          e.forEach(function (e) {
            e.forEach(function (e, t) {
              a[e.objectID]
                ? (a[e.objectID] = {
                    indexSum: a[e.objectID].indexSum + t,
                    count: a[e.objectID].count + 1,
                  })
                : (a[e.objectID] = { indexSum: t, count: 1 })
            })
          }),
          ((t = e.length),
          (r = []),
          Object.keys(a).forEach(function (e) {
            a[e].count < 2 && (a[e].indexSum += 100),
              r.push({ objectID: e, avgOfIndices: a[e].indexSum / t })
          }),
          r.sort(function (e, t) {
            return e.avgOfIndices > t.avgOfIndices ? 1 : -1
          })).reduce(function (t, r) {
            var a = n(i(e), function (e) {
              return e.objectID === r.objectID
            })
            return a ? t.concat(a) : t
          }, [])
        )
      }
    },
    74218: (e, t, r) => {
      'use strict'
      var n = r(7772),
        i = r(54127),
        a = r(72140),
        o = r(8304),
        s = r(17484),
        c = r(76320),
        u = r(56302),
        l = r(67488),
        f = a.escapeFacetValue,
        h = a.unescapeFacetValue,
        d = r(57368)
      function m(e) {
        var t = {}
        return (
          e.forEach(function (e, r) {
            t[e] = r
          }),
          t
        )
      }
      function p(e, t, r) {
        t && t[r] && (e.stats = t[r])
      }
      function g(e, t, r) {
        var a = t[0] || {}
        this._rawResults = t
        var c = this
        Object.keys(a).forEach(function (e) {
          c[e] = a[e]
        })
        var l = i(r, { persistHierarchicalRootCount: !1 })
        Object.keys(l).forEach(function (e) {
          c[e] = l[e]
        }),
          (this.processingTimeMS = t.reduce(function (e, t) {
            return void 0 === t.processingTimeMS ? e : e + t.processingTimeMS
          }, 0)),
          (this.disjunctiveFacets = []),
          (this.hierarchicalFacets = e.hierarchicalFacets.map(function () {
            return []
          })),
          (this.facets = [])
        var f = e.getRefinedDisjunctiveFacets(),
          g = m(e.facets),
          y = m(e.disjunctiveFacets),
          v = 1,
          b = a.facets || {}
        Object.keys(b).forEach(function (t) {
          var r = b[t],
            n =
              ((l = e.hierarchicalFacets),
              o(l, function (e) {
                return (e.attributes || []).indexOf(t) > -1
              }))
          if (n) {
            var i = n.attributes.indexOf(t),
              u = s(e.hierarchicalFacets, function (e) {
                return e.name === n.name
              })
            c.hierarchicalFacets[u][i] = {
              attribute: t,
              data: r,
              exhaustive: a.exhaustiveFacetsCount,
            }
          } else {
            var l,
              f,
              h = -1 !== e.disjunctiveFacets.indexOf(t),
              d = -1 !== e.facets.indexOf(t)
            h &&
              ((f = y[t]),
              (c.disjunctiveFacets[f] = { name: t, data: r, exhaustive: a.exhaustiveFacetsCount }),
              p(c.disjunctiveFacets[f], a.facets_stats, t)),
              d &&
                ((f = g[t]),
                (c.facets[f] = { name: t, data: r, exhaustive: a.exhaustiveFacetsCount }),
                p(c.facets[f], a.facets_stats, t))
          }
        }),
          (this.hierarchicalFacets = n(this.hierarchicalFacets)),
          f.forEach(function (r) {
            var n = t[v],
              o = n && n.facets ? n.facets : {},
              l = e.getHierarchicalFacetByName(r)
            Object.keys(o).forEach(function (t) {
              var r,
                f = o[t]
              if (l) {
                r = s(e.hierarchicalFacets, function (e) {
                  return e.name === l.name
                })
                var d = s(c.hierarchicalFacets[r], function (e) {
                  return e.attribute === t
                })
                if (-1 === d) return
                c.hierarchicalFacets[r][d].data = c.persistHierarchicalRootCount
                  ? u(c.hierarchicalFacets[r][d].data, f)
                  : i(f, c.hierarchicalFacets[r][d].data)
              } else {
                r = y[t]
                var m = (a.facets && a.facets[t]) || {}
                ;(c.disjunctiveFacets[r] = {
                  name: t,
                  data: u(m, f),
                  exhaustive: n.exhaustiveFacetsCount,
                }),
                  p(c.disjunctiveFacets[r], n.facets_stats, t),
                  e.disjunctiveFacetsRefinements[t] &&
                    e.disjunctiveFacetsRefinements[t].forEach(function (n) {
                      !c.disjunctiveFacets[r].data[n] &&
                        e.disjunctiveFacetsRefinements[t].indexOf(h(n)) > -1 &&
                        (c.disjunctiveFacets[r].data[n] = 0)
                    })
              }
            }),
              v++
          }),
          e.getRefinedHierarchicalFacets().forEach(function (r) {
            var n = e.getHierarchicalFacetByName(r),
              a = e._getHierarchicalFacetSeparator(n),
              o = e.getHierarchicalRefinement(r)
            0 === o.length ||
              o[0].split(a).length < 2 ||
              t.slice(v).forEach(function (t) {
                var r = t && t.facets ? t.facets : {}
                Object.keys(r).forEach(function (t) {
                  var u = r[t],
                    l = s(e.hierarchicalFacets, function (e) {
                      return e.name === n.name
                    }),
                    f = s(c.hierarchicalFacets[l], function (e) {
                      return e.attribute === t
                    })
                  if (-1 !== f) {
                    var h = {}
                    if (o.length > 0 && !c.persistHierarchicalRootCount) {
                      var d = o[0].split(a)[0]
                      h[d] = c.hierarchicalFacets[l][f].data[d]
                    }
                    c.hierarchicalFacets[l][f].data = i(h, u, c.hierarchicalFacets[l][f].data)
                  }
                }),
                  v++
              })
          }),
          Object.keys(e.facetsExcludes).forEach(function (t) {
            var r = e.facetsExcludes[t],
              n = g[t]
            ;(c.facets[n] = { name: t, data: b[t], exhaustive: a.exhaustiveFacetsCount }),
              r.forEach(function (e) {
                ;(c.facets[n] = c.facets[n] || { name: t }),
                  (c.facets[n].data = c.facets[n].data || {}),
                  (c.facets[n].data[e] = 0)
              })
          }),
          (this.hierarchicalFacets = this.hierarchicalFacets.map(d(e))),
          (this.facets = n(this.facets)),
          (this.disjunctiveFacets = n(this.disjunctiveFacets)),
          (this._state = e)
      }
      function y(e, t) {
        var r = o(e, function (e) {
          return e.name === t
        })
        return r && r.stats
      }
      function v(e, t, r, n, i) {
        var a = o(i, function (e) {
            return e.name === r
          }),
          s = a && a.data && a.data[n] ? a.data[n] : 0
        return {
          type: t,
          attributeName: r,
          name: n,
          count: s,
          exhaustive: (a && a.exhaustive) || !1,
        }
      }
      ;(g.prototype.getFacetByName = function (e) {
        function t(t) {
          return t.name === e
        }
        return o(this.facets, t) || o(this.disjunctiveFacets, t) || o(this.hierarchicalFacets, t)
      }),
        (g.DEFAULT_SORT = ['isRefined:desc', 'count:desc', 'name:asc']),
        (g.prototype.getFacetValues = function (e, t) {
          var r,
            n = (function (e, t) {
              function r(e) {
                return e.name === t
              }
              if (e._state.isConjunctiveFacet(t)) {
                var n = o(e.facets, r)
                return n
                  ? Object.keys(n.data).map(function (r) {
                      var i = f(r)
                      return {
                        name: r,
                        escapedValue: i,
                        count: n.data[r],
                        isRefined: e._state.isFacetRefined(t, i),
                        isExcluded: e._state.isExcludeRefined(t, r),
                      }
                    })
                  : []
              }
              if (e._state.isDisjunctiveFacet(t)) {
                var i = o(e.disjunctiveFacets, r)
                return i
                  ? Object.keys(i.data).map(function (r) {
                      var n = f(r)
                      return {
                        name: r,
                        escapedValue: n,
                        count: i.data[r],
                        isRefined: e._state.isDisjunctiveFacetRefined(t, n),
                      }
                    })
                  : []
              }
              if (e._state.isHierarchicalFacet(t)) {
                var a = o(e.hierarchicalFacets, r)
                if (!a) return a
                var s = e._state.getHierarchicalFacetByName(t),
                  c = e._state._getHierarchicalFacetSeparator(s),
                  u = h(e._state.getHierarchicalRefinement(t)[0] || '')
                0 === u.indexOf(s.rootPath) && (u = u.replace(s.rootPath + c, ''))
                var l = u.split(c)
                return (
                  l.unshift(t),
                  (function e(t, r, n) {
                    ;(t.isRefined = t.name === (r[n] && r[n].trim())),
                      t.data &&
                        t.data.forEach(function (t) {
                          e(t, r, n + 1)
                        })
                  })(a, l, 0),
                  a
                )
              }
            })(this, e)
          if (n) {
            var a = i(t, { sortBy: g.DEFAULT_SORT, facetOrdering: !(t && t.sortBy) }),
              s = this
            return (
              (r = Array.isArray(n) ? [e] : s._state.getHierarchicalFacetByName(n.name).attributes),
              (function e(t, r, n, a) {
                if (((a = a || 0), Array.isArray(r))) return t(r, n[a])
                if (!r.data || 0 === r.data.length) return r
                var o = r.data.map(function (r) {
                  return e(t, r, n, a + 1)
                })
                return i({ data: t(o, n[a]) }, r)
              })(
                function (e, t) {
                  if (a.facetOrdering) {
                    var r,
                      n,
                      i,
                      o,
                      u,
                      f,
                      h,
                      d =
                        s.renderingContent &&
                        s.renderingContent.facetOrdering &&
                        s.renderingContent.facetOrdering.values &&
                        s.renderingContent.facetOrdering.values[t]
                    if (d)
                      return (
                        (i = []),
                        (o = []),
                        (u = d.hide || []),
                        (f = (d.order || []).reduce(function (e, t, r) {
                          return (e[t] = r), e
                        }, {})),
                        e.forEach(function (e) {
                          var t = e.path || e.name,
                            r = u.indexOf(t) > -1
                          r || void 0 === f[t] ? r || o.push(e) : (i[f[t]] = e)
                        }),
                        (i = i.filter(function (e) {
                          return e
                        })),
                        'hidden' === (h = d.sortRemainingBy)
                          ? i
                          : ((n =
                              'alpha' === h
                                ? [
                                    ['path', 'name'],
                                    ['asc', 'asc'],
                                  ]
                                : [['count'], ['desc']]),
                            i.concat(l(o, n[0], n[1])))
                      )
                  }
                  if (Array.isArray(a.sortBy)) {
                    var m = c(a.sortBy, g.DEFAULT_SORT)
                    return l(e, m[0], m[1])
                  }
                  if ('function' == typeof a.sortBy) return (r = a.sortBy), e.sort(r)
                  throw Error(
                    'options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function'
                  )
                },
                n,
                r
              )
            )
          }
        }),
        (g.prototype.getFacetStats = function (e) {
          return this._state.isConjunctiveFacet(e)
            ? y(this.facets, e)
            : this._state.isDisjunctiveFacet(e)
              ? y(this.disjunctiveFacets, e)
              : void 0
        }),
        (g.prototype.getRefinements = function () {
          var e = this._state,
            t = this,
            r = []
          return (
            Object.keys(e.facetsRefinements).forEach(function (n) {
              e.facetsRefinements[n].forEach(function (i) {
                r.push(v(e, 'facet', n, i, t.facets))
              })
            }),
            Object.keys(e.facetsExcludes).forEach(function (n) {
              e.facetsExcludes[n].forEach(function (i) {
                r.push(v(e, 'exclude', n, i, t.facets))
              })
            }),
            Object.keys(e.disjunctiveFacetsRefinements).forEach(function (n) {
              e.disjunctiveFacetsRefinements[n].forEach(function (i) {
                r.push(v(e, 'disjunctive', n, i, t.disjunctiveFacets))
              })
            }),
            Object.keys(e.hierarchicalFacetsRefinements).forEach(function (n) {
              e.hierarchicalFacetsRefinements[n].forEach(function (i) {
                var a, s, c, u, l, f, h, d, m, p, g
                r.push(
                  ((a = e),
                  (s = n),
                  (c = i),
                  (u = t.hierarchicalFacets),
                  (l = a.getHierarchicalFacetByName(s)),
                  (f = a._getHierarchicalFacetSeparator(l)),
                  (h = c.split(f)),
                  (d = o(u, function (e) {
                    return e.name === s
                  })),
                  (p =
                    ((m = h.reduce(function (e, t) {
                      var r =
                        e &&
                        o(e.data, function (e) {
                          return e.name === t
                        })
                      return void 0 !== r ? r : e
                    }, d)) &&
                      m.count) ||
                    0),
                  (g = (m && m.exhaustive) || !1),
                  {
                    type: 'hierarchical',
                    attributeName: s,
                    name: (m && m.path) || '',
                    count: p,
                    exhaustive: g,
                  })
                )
              })
            }),
            Object.keys(e.numericRefinements).forEach(function (t) {
              var n = e.numericRefinements[t]
              Object.keys(n).forEach(function (e) {
                n[e].forEach(function (n) {
                  r.push({
                    type: 'numeric',
                    attributeName: t,
                    name: n,
                    numericValue: n,
                    operator: e,
                  })
                })
              })
            }),
            e.tagRefinements.forEach(function (e) {
              r.push({ type: 'tag', attributeName: '_tags', name: e })
            }),
            r
          )
        }),
        (e.exports = g)
    },
    75164: (e) => {
      'use strict'
      e.exports = function (e) {
        return e && Object.keys(e).length > 0
      }
    },
    76320: (e, t, r) => {
      'use strict'
      var n = r(8304)
      e.exports = function (e, t) {
        var r = (t || []).map(function (e) {
          return e.split(':')
        })
        return e.reduce(
          function (e, t) {
            var i = t.split(':'),
              a = n(r, function (e) {
                return e[0] === i[0]
              })
            return (
              i.length > 1 || !a
                ? (e[0].push(i[0]), e[1].push(i[1]))
                : (e[0].push(a[0]), e[1].push(a[1])),
              e
            )
          },
          [[], []]
        )
      }
    },
    76476: (e, t, r) => {
      'use strict'
      r.d(t, { r: () => a })
      var n = r(25234),
        i = (0, n.createContext)(null)
      function a() {
        return (0, n.useContext)(i)
      }
    },
    78461: (e, t, r) => {
      'use strict'
      function n(e) {
        return (n =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      r.d(t, { p: () => u })
      var i = [
        'facets',
        'disjunctiveFacets',
        'facetsRefinements',
        'facetsExcludes',
        'disjunctiveFacetsRefinements',
        'numericRefinements',
        'tagRefinements',
        'hierarchicalFacets',
        'hierarchicalFacetsRefinements',
        'ruleContexts',
      ]
      function a(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                var i, a, o
                ;(i = e),
                  (a = t),
                  (o = r[t]),
                  (a = (function (e) {
                    var t = (function (e, t) {
                      if ('object' != n(e) || !e) return e
                      var r = e[Symbol.toPrimitive]
                      if (void 0 !== r) {
                        var i = r.call(e, t || 'default')
                        if ('object' != n(i)) return i
                        throw TypeError('@@toPrimitive must return a primitive value.')
                      }
                      return ('string' === t ? String : Number)(e)
                    })(e, 'string')
                    return 'symbol' == n(t) ? t : String(t)
                  })(a)) in i
                    ? Object.defineProperty(i, a, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (i[a] = o)
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : a(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return e
      }
      var s = function (e, t) {
          t.facets,
            t.disjunctiveFacets,
            t.facetsRefinements,
            t.facetsExcludes,
            t.disjunctiveFacetsRefinements,
            t.numericRefinements,
            t.tagRefinements,
            t.hierarchicalFacets,
            t.hierarchicalFacetsRefinements,
            t.ruleContexts
          var r = (function (e, t) {
            if (null == e) return {}
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {}
                var r,
                  n,
                  i = {},
                  a = Object.keys(e)
                for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r])
                return i
              })(e, t)
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e)
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (i[r] = e[r])
            }
            return i
          })(t, i)
          return e.setQueryParameters(r)
        },
        c = function (e, t) {
          var r = []
            .concat(e.ruleContexts)
            .concat(t.ruleContexts)
            .filter(Boolean)
            .filter(function (e, t, r) {
              return r.indexOf(e) === t
            })
          return r.length > 0 ? e.setQueryParameters({ ruleContexts: r }) : e
        },
        u = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r]
          return t.reduce(function (e, t) {
            var r, n, i, a, u, l, f, h
            return s(
              ((h = c(
                ((r = e.setQueryParameters({
                  hierarchicalFacetsRefinements: o(
                    o({}, e.hierarchicalFacetsRefinements),
                    t.hierarchicalFacetsRefinements
                  ),
                })),
                (n = r.setQueryParameters({
                  hierarchicalFacets: t.hierarchicalFacets.reduce(function (e, t) {
                    var r = (function (e, t) {
                      if (!Array.isArray(e)) return -1
                      for (var r = 0; r < e.length; r++) if (t(e[r])) return r
                      return -1
                    })(e, function (e) {
                      return e.name === t.name
                    })
                    if (-1 === r) return e.concat(t)
                    var n = e.slice()
                    return n.splice(r, 1, t), n
                  }, r.hierarchicalFacets),
                })),
                (i = t.tagRefinements.reduce(function (e, t) {
                  return e.addTagRefinement(t)
                }, n)),
                (a = i.setQueryParameters({
                  numericRefinements: o(o({}, i.numericRefinements), t.numericRefinements),
                })),
                (u = a.setQueryParameters({
                  disjunctiveFacetsRefinements: o(
                    o({}, a.disjunctiveFacetsRefinements),
                    t.disjunctiveFacetsRefinements
                  ),
                })),
                (l = u.setQueryParameters({
                  facetsExcludes: o(o({}, u.facetsExcludes), t.facetsExcludes),
                })),
                (f = l.setQueryParameters({
                  facetsRefinements: o(o({}, l.facetsRefinements), t.facetsRefinements),
                })),
                t.disjunctiveFacets.reduce(function (e, t) {
                  return e.addDisjunctiveFacet(t)
                }, f)),
                t
              )),
              t.facets.reduce(function (e, t) {
                return e.addFacet(t)
              }, h)),
              t
            )
          })
        }
    },
    82866: (e, t, r) => {
      'use strict'
      var n = r(25234),
        i =
          'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              },
        a = n.useState,
        o = n.useEffect,
        s = n.useLayoutEffect,
        c = n.useDebugValue
      function u(e) {
        var t = e.getSnapshot
        e = e.value
        try {
          var r = t()
          return !i(e, r)
        } catch (e) {
          return !0
        }
      }
      var l =
        'undefined' == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t()
            }
          : function (e, t) {
              var r = t(),
                n = a({ inst: { value: r, getSnapshot: t } }),
                i = n[0].inst,
                l = n[1]
              return (
                s(
                  function () {
                    ;(i.value = r), (i.getSnapshot = t), u(i) && l({ inst: i })
                  },
                  [e, r, t]
                ),
                o(
                  function () {
                    return (
                      u(i) && l({ inst: i }),
                      e(function () {
                        u(i) && l({ inst: i })
                      })
                    )
                  },
                  [e]
                ),
                c(r),
                r
              )
            }
      t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : l
    },
    84343: (e, t, r) => {
      'use strict'
      e.exports = r(82866)
    },
    85668: (e, t, r) => {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
        })(t, {
          default: function () {
            return c
          },
          getImageProps: function () {
            return s
          },
        })
      let n = r(60283),
        i = r(80680),
        a = r(49460),
        o = n._(r(83180))
      function s(e) {
        let { props: t } = (0, i.getImgProps)(e, {
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
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e]
        return { props: t }
      }
      let c = a.Image
    },
    86025: (e) => {
      'use strict'
      e.exports = function (e) {
        return null !== e && /^[a-zA-Z0-9_-]{1,64}$/.test(e)
      }
    },
    87606: (e) => {
      'use strict'
      function t(e, t) {
        ;(this._state = e), (this._rawResults = {})
        var r = this
        e.params.forEach(function (e) {
          var n = e.$$id
          ;(r[n] = t[n]), (r._rawResults[n] = t[n])
        })
      }
      ;(t.prototype = { constructor: t }), (e.exports = t)
    },
    90454: (e) => {
      'use strict'
      function t(e) {
        ;(e = e || {}), (this.params = e.params || [])
      }
      ;(t.prototype = {
        constructor: t,
        addParams: function (e) {
          var r = this.params.slice()
          return r.push(e), new t({ params: r })
        },
        removeParams: function (e) {
          return new t({
            params: this.params.filter(function (t) {
              return t.$$id !== e
            }),
          })
        },
        addFrequentlyBoughtTogether: function (e) {
          return this.addParams(Object.assign({}, e, { model: 'bought-together' }))
        },
        addRelatedProducts: function (e) {
          return this.addParams(Object.assign({}, e, { model: 'related-products' }))
        },
        addTrendingItems: function (e) {
          return this.addParams(Object.assign({}, e, { model: 'trending-items' }))
        },
        addTrendingFacets: function (e) {
          return this.addParams(Object.assign({}, e, { model: 'trending-facets' }))
        },
        addLookingSimilar: function (e) {
          return this.addParams(Object.assign({}, e, { model: 'looking-similar' }))
        },
        _buildQueries: function (e, t) {
          return this.params
            .filter(function (e) {
              return void 0 === t[e.$$id]
            })
            .map(function (t) {
              var r = Object.assign({}, t, { indexName: e, threshold: t.threshold || 0 })
              return delete r.$$id, r
            })
        },
      }),
        (e.exports = t)
    },
    93649: (e, t, r) => {
      'use strict'
      var n = r(96316),
        i = Object.prototype.hasOwnProperty,
        a = Array.isArray,
        o = (function () {
          for (var e = [], t = 0; t < 256; ++t)
            e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase())
          return e
        })(),
        s = function (e) {
          for (; e.length > 1; ) {
            var t = e.pop(),
              r = t.obj[t.prop]
            if (a(r)) {
              for (var n = [], i = 0; i < r.length; ++i) void 0 !== r[i] && n.push(r[i])
              t.obj[t.prop] = n
            }
          }
        },
        c = function (e, t) {
          for (var r = t && t.plainObjects ? Object.create(null) : {}, n = 0; n < e.length; ++n)
            void 0 !== e[n] && (r[n] = e[n])
          return r
        }
      e.exports = {
        arrayToObject: c,
        assign: function (e, t) {
          return Object.keys(t).reduce(function (e, r) {
            return (e[r] = t[r]), e
          }, e)
        },
        combine: function (e, t) {
          return [].concat(e, t)
        },
        compact: function (e) {
          for (var t = [{ obj: { o: e }, prop: 'o' }], r = [], n = 0; n < t.length; ++n)
            for (var i = t[n], a = i.obj[i.prop], o = Object.keys(a), c = 0; c < o.length; ++c) {
              var u = o[c],
                l = a[u]
              'object' == typeof l &&
                null !== l &&
                -1 === r.indexOf(l) &&
                (t.push({ obj: a, prop: u }), r.push(l))
            }
          return s(t), e
        },
        decode: function (e, t, r) {
          var n = e.replace(/\+/g, ' ')
          if ('iso-8859-1' === r) return n.replace(/%[0-9a-f]{2}/gi, unescape)
          try {
            return decodeURIComponent(n)
          } catch (e) {
            return n
          }
        },
        encode: function (e, t, r, i, a) {
          if (0 === e.length) return e
          var s = e
          if (
            ('symbol' == typeof e
              ? (s = Symbol.prototype.toString.call(e))
              : 'string' != typeof e && (s = String(e)),
            'iso-8859-1' === r)
          )
            return escape(s).replace(/%u[0-9a-f]{4}/gi, function (e) {
              return '%26%23' + parseInt(e.slice(2), 16) + '%3B'
            })
          for (var c = '', u = 0; u < s.length; ++u) {
            var l = s.charCodeAt(u)
            if (
              45 === l ||
              46 === l ||
              95 === l ||
              126 === l ||
              (l >= 48 && l <= 57) ||
              (l >= 65 && l <= 90) ||
              (l >= 97 && l <= 122) ||
              (a === n.RFC1738 && (40 === l || 41 === l))
            ) {
              c += s.charAt(u)
              continue
            }
            if (l < 128) {
              c += o[l]
              continue
            }
            if (l < 2048) {
              c += o[192 | (l >> 6)] + o[128 | (63 & l)]
              continue
            }
            if (l < 55296 || l >= 57344) {
              c += o[224 | (l >> 12)] + o[128 | ((l >> 6) & 63)] + o[128 | (63 & l)]
              continue
            }
            ;(u += 1),
              (c +=
                o[240 | ((l = 65536 + (((1023 & l) << 10) | (1023 & s.charCodeAt(u)))) >> 18)] +
                o[128 | ((l >> 12) & 63)] +
                o[128 | ((l >> 6) & 63)] +
                o[128 | (63 & l)])
          }
          return c
        },
        isBuffer: function (e) {
          return (
            !!e &&
            'object' == typeof e &&
            !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
          )
        },
        isRegExp: function (e) {
          return '[object RegExp]' === Object.prototype.toString.call(e)
        },
        maybeMap: function (e, t) {
          if (a(e)) {
            for (var r = [], n = 0; n < e.length; n += 1) r.push(t(e[n]))
            return r
          }
          return t(e)
        },
        merge: function e(t, r, n) {
          if (!r) return t
          if ('object' != typeof r) {
            if (a(t)) t.push(r)
            else {
              if (!t || 'object' != typeof t) return [t, r]
              ;((n && (n.plainObjects || n.allowPrototypes)) || !i.call(Object.prototype, r)) &&
                (t[r] = !0)
            }
            return t
          }
          if (!t || 'object' != typeof t) return [t].concat(r)
          var o = t
          return (a(t) && !a(r) && (o = c(t, n)), a(t) && a(r))
            ? (r.forEach(function (r, a) {
                if (i.call(t, a)) {
                  var o = t[a]
                  o && 'object' == typeof o && r && 'object' == typeof r
                    ? (t[a] = e(o, r, n))
                    : t.push(r)
                } else t[a] = r
              }),
              t)
            : Object.keys(r).reduce(function (t, a) {
                var o = r[a]
                return i.call(t, a) ? (t[a] = e(t[a], o, n)) : (t[a] = o), t
              }, o)
        },
      }
    },
    93861: (e, t, r) => {
      'use strict'
      r.d(t, { t: () => n })
      var n = (0, r(25234).createContext)(null)
    },
    94799: (e, t, r) => {
      'use strict'
      var n = r(54127),
        i = r(75164),
        a = r(10150),
        o = {
          addRefinement: function (e, t, r) {
            if (o.isRefined(e, t, r)) return e
            var i = '' + r,
              a = e[t] ? e[t].concat(i) : [i],
              s = {}
            return (s[t] = a), n(s, e)
          },
          removeRefinement: function (e, t, r) {
            if (void 0 === r)
              return o.clearRefinement(e, function (e, r) {
                return t === r
              })
            var n = '' + r
            return o.clearRefinement(e, function (e, r) {
              return t === r && n === e
            })
          },
          toggleRefinement: function (e, t, r) {
            if (void 0 === r) throw Error('toggleRefinement should be used with a value')
            return o.isRefined(e, t, r) ? o.removeRefinement(e, t, r) : o.addRefinement(e, t, r)
          },
          clearRefinement: function (e, t, r) {
            if (void 0 === t) return i(e) ? {} : e
            if ('string' == typeof t) return a(e, [t])
            if ('function' == typeof t) {
              var n = !1,
                o = Object.keys(e).reduce(function (i, a) {
                  var o = e[a] || [],
                    s = o.filter(function (e) {
                      return !t(e, a, r)
                    })
                  return s.length !== o.length && (n = !0), (i[a] = s), i
                }, {})
              return n ? o : e
            }
          },
          isRefined: function (e, t, r) {
            var n = !!e[t] && e[t].length > 0
            return void 0 !== r && n ? -1 !== e[t].indexOf('' + r) : n
          },
        }
      e.exports = o
    },
    95546: (e, t, r) => {
      'use strict'
      r.d(t, { Z: () => v })
      var n = r(50174),
        i = r(12087),
        a = r(15291)
      function o(e) {
        return (o =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      var s = r(78461)
      function c(e) {
        return (c =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function u(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                f(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : u(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return e
      }
      function f(e, t, r) {
        var n
        return (
          ((n = (function (e, t) {
            if ('object' != c(e) || !e) return e
            var r = e[Symbol.toPrimitive]
            if (void 0 !== r) {
              var n = r.call(e, t || 'default')
              if ('object' != c(n)) return n
              throw TypeError('@@toPrimitive must return a primitive value.')
            }
            return ('string' === t ? String : Number)(e)
          })(t, 'string')),
          (t = 'symbol' == c(n) ? n : String(n)) in e)
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      var h = (0, i.V)({ name: 'configure', connector: !0 })
      function d(e, t) {
        return e.setQueryParameters(
          Object.keys(t.searchParameters).reduce(function (e, t) {
            return l(l({}, e), {}, f({}, t, void 0))
          }, {})
        )
      }
      let m = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.l,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.l
        return function (r) {
          if (
            !r ||
            !(function (e) {
              if (
                'object' !== o(e) ||
                null === e ||
                '[object Object]' !==
                  (null === e
                    ? void 0 === e
                      ? '[object Undefined]'
                      : '[object Null]'
                    : Object.prototype.toString.call(e))
              )
                return !1
              if (null === Object.getPrototypeOf(e)) return !0
              for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t)
              return Object.getPrototypeOf(e) === t
            })(r.searchParameters)
          )
            throw Error(h('The `searchParameters` option expects an object.'))
          var i = {}
          return {
            $$type: 'ais.configure',
            init: function (t) {
              var r = t.instantSearchInstance
              e(l(l({}, this.getWidgetRenderState(t)), {}, { instantSearchInstance: r }), !0)
            },
            render: function (t) {
              var r = t.instantSearchInstance
              e(l(l({}, this.getWidgetRenderState(t)), {}, { instantSearchInstance: r }), !1)
            },
            dispose: function (e) {
              var n = e.state
              return t(), d(n, r)
            },
            getRenderState: function (e, t) {
              var r,
                i = this.getWidgetRenderState(t)
              return l(
                l({}, e),
                {},
                {
                  configure: l(
                    l({}, i),
                    {},
                    {
                      widgetParams: l(
                        l({}, i.widgetParams),
                        {},
                        {
                          searchParameters: (0, s.p)(
                            new n.SearchParameters(
                              null == (r = e.configure) ? void 0 : r.widgetParams.searchParameters
                            ),
                            new n.SearchParameters(i.widgetParams.searchParameters)
                          ).getQueryParams(),
                        }
                      ),
                    }
                  ),
                }
              )
            },
            getWidgetRenderState: function (e) {
              var t = e.helper
              return (
                i.refine ||
                  (i.refine = function (e) {
                    var i = d(t.state, r),
                      a = (0, s.p)(i, new n.SearchParameters(e))
                    ;(r.searchParameters = e), t.setState(a).search()
                  }),
                { refine: i.refine, widgetParams: r }
              )
            },
            getWidgetSearchParameters: function (e, t) {
              var i = t.uiState
              return (0, s.p)(e, new n.SearchParameters(l(l({}, i.configure), r.searchParameters)))
            },
            getWidgetUiState: function (e) {
              return l(l({}, e), {}, { configure: l(l({}, e.configure), r.searchParameters) })
            },
          }
        }
      }
      var p = r(50361)
      function g(e) {
        return (g =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function y(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function v(e) {
        var t, r
        return (
          (t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? y(Object(r), !0).forEach(function (t) {
                    var n, i, a
                    ;(n = e),
                      (i = t),
                      (a = r[t]),
                      (i = (function (e) {
                        var t = (function (e, t) {
                          if ('object' != g(e) || !e) return e
                          var r = e[Symbol.toPrimitive]
                          if (void 0 !== r) {
                            var n = r.call(e, t || 'default')
                            if ('object' != g(n)) return n
                            throw TypeError('@@toPrimitive must return a primitive value.')
                          }
                          return ('string' === t ? String : Number)(e)
                        })(e, 'string')
                        return 'symbol' == g(t) ? t : String(t)
                      })(i)) in n
                        ? Object.defineProperty(n, i, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (n[i] = a)
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                  : y(Object(r)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
            }
            return e
          })({}, e)),
          (r = { $$widgetType: 'ais.configure' }),
          (0, p.Z)(m, { searchParameters: t }, r),
          null
        )
      }
    },
    96316: (e) => {
      'use strict'
      var t = String.prototype.replace,
        r = /%20/g,
        n = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' }
      e.exports = {
        default: n.RFC3986,
        formatters: {
          RFC1738: function (e) {
            return t.call(e, r, '+')
          },
          RFC3986: function (e) {
            return String(e)
          },
        },
        RFC1738: n.RFC1738,
        RFC3986: n.RFC3986,
      }
    },
    99684: (e, t, r) => {
      'use strict'
      var n = r(72061),
        i = r(20539)
      e.exports = { formats: r(96316), parse: i, stringify: n }
    },
  },
])
