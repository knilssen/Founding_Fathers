! function(e) {
  function t(n) {
    if (i[n]) return i[n].exports;
    var r = i[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
  }
  var n = window.webpackJsonp;
  window.webpackJsonp = function(i, s, o) {
    for (var a, l, c, u = 0, d = []; u < i.length; u++) l = i[u], r[l] && d.push(r[l][0]), r[l] = 0;
    for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
    for (n && n(i, s, o); d.length;) d.shift()();
    if (o)
      for (u = 0; u < o.length; u++) c = t(t.s = o[u]);
    return c
  };
  var i = {},
    r = {
      39: 0
    };
  t.e = function(e) {
    function n() {
      a.onerror = a.onload = null, clearTimeout(l);
      var t = r[e];
      0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")), r[e] = void 0)
    }
    var i = r[e];
    if (0 === i) return new Promise(function(e) {
      e()
    });
    if (i) return i[2];
    var s = new Promise(function(t, n) {
      i = r[e] = [t, n]
    });
    i[2] = s;
    var o = document.getElementsByTagName("head")[0],
      a = document.createElement("script");
    a.type = "text/javascript", a.charset = "utf-8", a.async = !0, a.timeout = 12e4, t.nc && a.setAttribute("nonce", t.nc), a.src = t.p + "" + e + "." + {
      0: "6e67079363614563080c",
      1: "510ec8012122c88ed13b",
      2: "254b7ad3af6ac00071c7",
      3: "90f733c59fad4b9107c6",
      4: "d43439147cca7a64c491",
      5: "dfd8cd268955dd80e0d9",
      6: "f5cf4f651fd761f2cf1d",
      7: "a2e70ae4617090097888",
      8: "f0f8e640a5bc6f1d448b",
      9: "b2a0a6e91fe39ae511b8",
      10: "654979eb5d489df6056e",
      11: "b1f16c6521cd2b1f4af1",
      12: "4b4e7301172133bc00fc",
      13: "bc6b751d611c09b394a4",
      14: "708f673e550e48d5f794",
      15: "94912f7bed05bb1f9dce",
      16: "a72c58c807fdf4966d47",
      17: "797d606344e717059461",
      18: "b6012c880ed25d7953a8",
      19: "ae5f1507e62250b7384e",
      20: "abdf08e02a9f9307c5a7",
      21: "698862c544ad982eee27",
      22: "5cb82bb1aeafa9b28790",
      23: "5a4e344680411635bed9",
      24: "b44f863066f753bc653d",
      25: "dd3d3d8f901d4b01552c",
      26: "e607212bf95eac9f6fbd",
      27: "b41bf677e72afa5d9984",
      28: "c919968c8141a21f764b",
      29: "3f28c63ce6ab60770e36",
      30: "5e37905767c0238d02d4",
      31: "c0d90b7fd79d913814dc",
      32: "9629a009bc7bbe81b19c",
      33: "f97af97b3241db4b0829",
      34: "2eb150c9e2f05c7a2399",
      35: "4318ee2fee7f46265ed1",
      36: "640f2a2d62c6a8d1b6fe",
      37: "89ebb9537615e52b3e77",
      38: "b75c0807dca69891a34a"
    }[e] + ".js";
    var l = setTimeout(n, 12e4);
    return a.onerror = a.onload = n, o.appendChild(a), s
  }, t.m = e, t.c = i, t.d = function(e, n, i) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: i
    })
  }, t.n = function(e) {
    var n = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return t.d(n, "a", n), n
  }, t.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, t.p = "", t.oe = function(e) {
    throw console.error(e), e
  }
}([function(e, t, n) {
  var i, r;
  /*!
   * jQuery JavaScript Library v2.2.4
   * http://jquery.com/
   *
   * Includes Sizzle.js
   * http://sizzlejs.com/
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2016-05-20T17:23Z
   */
  ! function(t, n) {
    "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e)
    } : n(t)
  }("undefined" != typeof window ? window : this, function(n, s) {
    function o(e) {
      var t = !!e && "length" in e && e.length,
        n = le.type(e);
      return "function" !== n && !le.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function a(e, t, n) {
      if (le.isFunction(t)) return le.grep(e, function(e, i) {
        return !!t.call(e, i, e) !== n
      });
      if (t.nodeType) return le.grep(e, function(e) {
        return e === t !== n
      });
      if ("string" == typeof t) {
        if (_e.test(t)) return le.filter(t, e, n);
        t = le.filter(t, e)
      }
      return le.grep(e, function(e) {
        return ie.call(t, e) > -1 !== n
      })
    }

    function l(e, t) {
      for (;
        (e = e[t]) && 1 !== e.nodeType;);
      return e
    }

    function c(e) {
      var t = {};
      return le.each(e.match(ke) || [], function(e, n) {
        t[n] = !0
      }), t
    }

    function u() {
      Z.removeEventListener("DOMContentLoaded", u), n.removeEventListener("load", u), le.ready()
    }

    function d() {
      this.expando = le.expando + d.uid++
    }

    function h(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType)
        if (i = "data-" + t.replace(Ae, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
          try {
            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Oe.test(n) ? le.parseJSON(n) : n)
          } catch (e) {}
          je.set(e, t, n)
        } else n = void 0;
      return n
    }

    function f(e, t, n, i) {
      var r, s = 1,
        o = 20,
        a = i ? function() {
          return i.cur()
        } : function() {
          return le.css(e, t, "")
        },
        l = a(),
        c = n && n[3] || (le.cssNumber[t] ? "" : "px"),
        u = (le.cssNumber[t] || "px" !== c && +l) && Me.exec(le.css(e, t));
      if (u && u[3] !== c) {
        c = c || u[3], n = n || [], u = +l || 1;
        do {
          s = s || ".5", u /= s, le.style(e, t, u + c)
        } while (s !== (s = a() / l) && 1 !== s && --o)
      }
      return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }

    function p(e, t) {
      var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
      return void 0 === t || t && le.nodeName(e, t) ? le.merge([e], n) : n
    }

    function m(e, t) {
      for (var n = 0, i = e.length; n < i; n++) Se.set(e[n], "globalEval", !t || Se.get(t[n], "globalEval"))
    }

    function v(e, t, n, i, r) {
      for (var s, o, a, l, c, u, d = t.createDocumentFragment(), h = [], f = 0, v = e.length; f < v; f++)
        if ((s = e[f]) || 0 === s)
          if ("object" === le.type(s)) le.merge(h, s.nodeType ? [s] : s);
          else if (He.test(s)) {
        for (o = o || d.appendChild(t.createElement("div")), a = (qe.exec(s) || ["", ""])[1].toLowerCase(), l = De[a] || De._default, o.innerHTML = l[1] + le.htmlPrefilter(s) + l[2], u = l[0]; u--;) o = o.lastChild;
        le.merge(h, o.childNodes), o = d.firstChild, o.textContent = ""
      } else h.push(t.createTextNode(s));
      for (d.textContent = "", f = 0; s = h[f++];)
        if (i && le.inArray(s, i) > -1) r && r.push(s);
        else if (c = le.contains(s.ownerDocument, s), o = p(d.appendChild(s), "script"), c && m(o), n)
        for (u = 0; s = o[u++];) Re.test(s.type || "") && n.push(s);
      return d
    }

    function g() {
      return !0
    }

    function _() {
      return !1
    }

    function y() {
      try {
        return Z.activeElement
      } catch (e) {}
    }

    function b(e, t, n, i, r, s) {
      var o, a;
      if ("object" == typeof t) {
        "string" != typeof n && (i = i || n, n = void 0);
        for (a in t) b(e, a, n, i, t[a], s);
        return e
      }
      if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = _;
      else if (!r) return e;
      return 1 === s && (o = r, r = function(e) {
        return le().off(e), o.apply(this, arguments)
      }, r.guid = o.guid || (o.guid = le.guid++)), e.each(function() {
        le.event.add(this, t, r, i, n)
      })
    }

    function w(e, t) {
      return le.nodeName(e, "table") && le.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function x(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function k(e) {
      var t = Ve.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function C(e, t) {
      var n, i, r, s, o, a, l, c;
      if (1 === t.nodeType) {
        if (Se.hasData(e) && (s = Se.access(e), o = Se.set(t, s), c = s.events)) {
          delete o.handle, o.events = {};
          for (r in c)
            for (n = 0, i = c[r].length; n < i; n++) le.event.add(t, r, c[r][n])
        }
        je.hasData(e) && (a = je.access(e), l = le.extend({}, a), je.set(t, l))
      }
    }

    function T(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && Ne.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function E(e, t, n, i) {
      t = te.apply([], t);
      var r, s, o, a, l, c, u = 0,
        d = e.length,
        h = d - 1,
        f = t[0],
        m = le.isFunction(f);
      if (m || d > 1 && "string" == typeof f && !ae.checkClone && We.test(f)) return e.each(function(r) {
        var s = e.eq(r);
        m && (t[0] = f.call(this, r, s.html())), E(s, t, n, i)
      });
      if (d && (r = v(t, e[0].ownerDocument, !1, e, i), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || i)) {
        for (o = le.map(p(r, "script"), x), a = o.length; u < d; u++) l = r, u !== h && (l = le.clone(l, !0, !0), a && le.merge(o, p(l, "script"))), n.call(e[u], l, u);
        if (a)
          for (c = o[o.length - 1].ownerDocument, le.map(o, k), u = 0; u < a; u++) l = o[u], Re.test(l.type || "") && !Se.access(l, "globalEval") && le.contains(c, l) && (l.src ? le._evalUrl && le._evalUrl(l.src) : le.globalEval(l.textContent.replace(Je, "")))
      }
      return e
    }

    function S(e, t, n) {
      for (var i, r = t ? le.filter(t, e) : e, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || le.cleanData(p(i)), i.parentNode && (n && le.contains(i.ownerDocument, i) && m(p(i, "script")), i.parentNode.removeChild(i));
      return e
    }

    function j(e, t) {
      var n = le(t.createElement(e)).appendTo(t.body),
        i = le.css(n[0], "display");
      return n.detach(), i
    }

    function O(e) {
      var t = Z,
        n = Xe[e];
      return n || (n = j(e, t), "none" !== n && n || (Ge = (Ge || le("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ge[0].contentDocument, t.write(), t.close(), n = j(e, t), Ge.detach()), Xe[e] = n), n
    }

    function A(e, t, n) {
      var i, r, s, o, a = e.style;
      return n = n || Qe(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== o && void 0 !== o || le.contains(e.ownerDocument, e) || (o = le.style(e, t)), n && !ae.pixelMarginRight() && Ye.test(o) && Ke.test(t) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s), void 0 !== o ? o + "" : o
    }

    function L(e, t) {
      return {
        get: function() {
          return e() ? void delete this.get : (this.get = t).apply(this, arguments)
        }
      }
    }

    function M(e) {
      if (e in st) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = rt.length; n--;)
        if ((e = rt[n] + t) in st) return e
    }

    function I(e, t, n) {
      var i = Me.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function P(e, t, n, i, r) {
      for (var s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; s < 4; s += 2) "margin" === n && (o += le.css(e, n + Ie[s], !0, r)), i ? ("content" === n && (o -= le.css(e, "padding" + Ie[s], !0, r)), "margin" !== n && (o -= le.css(e, "border" + Ie[s] + "Width", !0, r))) : (o += le.css(e, "padding" + Ie[s], !0, r), "padding" !== n && (o += le.css(e, "border" + Ie[s] + "Width", !0, r)));
      return o
    }

    function N(e, t, n) {
      var i = !0,
        r = "width" === t ? e.offsetWidth : e.offsetHeight,
        s = Qe(e),
        o = "border-box" === le.css(e, "boxSizing", !1, s);
      if (r <= 0 || null == r) {
        if (r = A(e, t, s), (r < 0 || null == r) && (r = e.style[t]), Ye.test(r)) return r;
        i = o && (ae.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
      }
      return r + P(e, t, n || (o ? "border" : "content"), i, s) + "px"
    }

    function q(e, t) {
      for (var n, i, r, s = [], o = 0, a = e.length; o < a; o++) i = e[o], i.style && (s[o] = Se.get(i, "olddisplay"), n = i.style.display, t ? (s[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && Pe(i) && (s[o] = Se.access(i, "olddisplay", O(i.nodeName)))) : (r = Pe(i), "none" === n && r || Se.set(i, "olddisplay", r ? n : le.css(i, "display"))));
      for (o = 0; o < a; o++) i = e[o], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? s[o] || "" : "none"));
      return e
    }

    function R(e, t, n, i, r) {
      return new R.prototype.init(e, t, n, i, r)
    }

    function D() {
      return n.setTimeout(function() {
        ot = void 0
      }), ot = le.now()
    }

    function H(e, t) {
      var n, i = 0,
        r = {
          height: e
        };
      for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Ie[i], r["margin" + n] = r["padding" + n] = e;
      return t && (r.opacity = r.width = e), r
    }

    function F(e, t, n) {
      for (var i, r = ($.tweeners[t] || []).concat($.tweeners["*"]), s = 0, o = r.length; s < o; s++)
        if (i = r[s].call(n, t, e)) return i
    }

    function B(e, t, n) {
      var i, r, s, o, a, l, c, u = this,
        d = {},
        h = e.style,
        f = e.nodeType && Pe(e),
        p = Se.get(e, "fxshow");
      n.queue || (a = le._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
        a.unqueued || l()
      }), a.unqueued++, u.always(function() {
        u.always(function() {
          a.unqueued--, le.queue(e, "fx").length || a.empty.fire()
        })
      })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = le.css(e, "display"), "inline" === ("none" === c ? Se.get(e, "olddisplay") || O(e.nodeName) : c) && "none" === le.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", u.always(function() {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
      }));
      for (i in t)
        if (r = t[i], lt.exec(r)) {
          if (delete t[i], s = s || "toggle" === r, r === (f ? "hide" : "show")) {
            if ("show" !== r || !p || void 0 === p[i]) continue;
            f = !0
          }
          d[i] = p && p[i] || le.style(e, i)
        } else c = void 0;
      if (le.isEmptyObject(d)) "inline" === ("none" === c ? O(e.nodeName) : c) && (h.display = c);
      else {
        p ? "hidden" in p && (f = p.hidden) : p = Se.access(e, "fxshow", {}), s && (p.hidden = !f), f ? le(e).show() : u.done(function() {
          le(e).hide()
        }), u.done(function() {
          var t;
          Se.remove(e, "fxshow");
          for (t in d) le.style(e, t, d[t])
        });
        for (i in d) o = F(f ? p[i] : 0, i, u), i in p || (p[i] = o.start, f && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
      }
    }

    function U(e, t) {
      var n, i, r, s, o;
      for (n in e)
        if (i = le.camelCase(n), r = t[i], s = e[n], le.isArray(s) && (r = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (o = le.cssHooks[i]) && "expand" in o) {
          s = o.expand(s), delete e[i];
          for (n in s) n in e || (e[n] = s[n], t[n] = r)
        } else t[i] = r
    }

    function $(e, t, n) {
      var i, r, s = 0,
        o = $.prefilters.length,
        a = le.Deferred().always(function() {
          delete l.elem
        }),
        l = function() {
          if (r) return !1;
          for (var t = ot || D(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, s = 1 - i, o = 0, l = c.tweens.length; o < l; o++) c.tweens[o].run(s);
          return a.notifyWith(e, [c, s, n]), s < 1 && l ? n : (a.resolveWith(e, [c]), !1)
        },
        c = a.promise({
          elem: e,
          props: le.extend({}, t),
          opts: le.extend(!0, {
            specialEasing: {},
            easing: le.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: ot || D(),
          duration: n.duration,
          tweens: [],
          createTween: function(t, n) {
            var i = le.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
            return c.tweens.push(i), i
          },
          stop: function(t) {
            var n = 0,
              i = t ? c.tweens.length : 0;
            if (r) return this;
            for (r = !0; n < i; n++) c.tweens[n].run(1);
            return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
          }
        }),
        u = c.props;
      for (U(u, c.opts.specialEasing); s < o; s++)
        if (i = $.prefilters[s].call(c, e, u, c.opts)) return le.isFunction(i.stop) && (le._queueHooks(c.elem, c.opts.queue).stop = le.proxy(i.stop, i)), i;
      return le.map(u, F, c), le.isFunction(c.opts.start) && c.opts.start.call(e, c), le.fx.timer(le.extend(l, {
        elem: e,
        anim: c,
        queue: c.opts.queue
      })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function z(e) {
      return e.getAttribute && e.getAttribute("class") || ""
    }

    function W(e) {
      return function(t, n) {
        "string" != typeof t && (n = t, t = "*");
        var i, r = 0,
          s = t.toLowerCase().match(ke) || [];
        if (le.isFunction(n))
          for (; i = s[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
      }
    }

    function V(e, t, n, i) {
      function r(a) {
        var l;
        return s[a] = !0, le.each(e[a] || [], function(e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
        }), l
      }
      var s = {},
        o = e === jt;
      return r(t.dataTypes[0]) || !s["*"] && r("*")
    }

    function J(e, t) {
      var n, i, r = le.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
      return i && le.extend(!0, e, i), e
    }

    function G(e, t, n) {
      for (var i, r, s, o, a = e.contents, l = e.dataTypes;
        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
      if (i)
        for (r in a)
          if (a[r] && a[r].test(i)) {
            l.unshift(r);
            break
          }
      if (l[0] in n) s = l[0];
      else {
        for (r in n) {
          if (!l[0] || e.converters[r + " " + l[0]]) {
            s = r;
            break
          }
          o || (o = r)
        }
        s = s || o
      }
      if (s) return s !== l[0] && l.unshift(s), n[s]
    }

    function X(e, t, n, i) {
      var r, s, o, a, l, c = {},
        u = e.dataTypes.slice();
      if (u[1])
        for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
      for (s = u.shift(); s;)
        if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = u.shift())
          if ("*" === s) s = l;
          else if ("*" !== l && l !== s) {
        if (!(o = c[l + " " + s] || c["* " + s]))
          for (r in c)
            if (a = r.split(" "), a[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
              !0 === o ? o = c[r] : !0 !== c[r] && (s = a[0], u.unshift(a[1]));
              break
            }
        if (!0 !== o)
          if (o && e.throws) t = o(t);
          else try {
            t = o(t)
          } catch (e) {
            return {
              state: "parsererror",
              error: o ? e : "No conversion from " + l + " to " + s
            }
          }
      }
      return {
        state: "success",
        data: t
      }
    }

    function K(e, t, n, i) {
      var r;
      if (le.isArray(t)) le.each(t, function(t, r) {
        n || Mt.test(e) ? i(e, r) : K(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
      });
      else if (n || "object" !== le.type(t)) i(e, t);
      else
        for (r in t) K(e + "[" + r + "]", t[r], n, i)
    }

    function Y(e) {
      return le.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var Q = [],
      Z = n.document,
      ee = Q.slice,
      te = Q.concat,
      ne = Q.push,
      ie = Q.indexOf,
      re = {},
      se = re.toString,
      oe = re.hasOwnProperty,
      ae = {},
      le = function(e, t) {
        return new le.fn.init(e, t)
      },
      ce = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ue = /^-ms-/,
      de = /-([\da-z])/gi,
      he = function(e, t) {
        return t.toUpperCase()
      };
    le.fn = le.prototype = {
      jquery: "2.2.4",
      constructor: le,
      selector: "",
      length: 0,
      toArray: function() {
        return ee.call(this)
      },
      get: function(e) {
        return null != e ? e < 0 ? this[e + this.length] : this[e] : ee.call(this)
      },
      pushStack: function(e) {
        var t = le.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
      },
      each: function(e) {
        return le.each(this, e)
      },
      map: function(e) {
        return this.pushStack(le.map(this, function(t, n) {
          return e.call(t, n, t)
        }))
      },
      slice: function() {
        return this.pushStack(ee.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor()
      },
      push: ne,
      sort: Q.sort,
      splice: Q.splice
    }, le.extend = le.fn.extend = function() {
      var e, t, n, i, r, s, o = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
      for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || le.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
        if (null != (e = arguments[a]))
          for (t in e) n = o[t], i = e[t], o !== i && (c && i && (le.isPlainObject(i) || (r = le.isArray(i))) ? (r ? (r = !1, s = n && le.isArray(n) ? n : []) : s = n && le.isPlainObject(n) ? n : {}, o[t] = le.extend(c, s, i)) : void 0 !== i && (o[t] = i));
      return o
    }, le.extend({
      expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e)
      },
      noop: function() {},
      isFunction: function(e) {
        return "function" === le.type(e)
      },
      isArray: Array.isArray,
      isWindow: function(e) {
        return null != e && e === e.window
      },
      isNumeric: function(e) {
        var t = e && e.toString();
        return !le.isArray(e) && t - parseFloat(t) + 1 >= 0
      },
      isPlainObject: function(e) {
        var t;
        if ("object" !== le.type(e) || e.nodeType || le.isWindow(e)) return !1;
        if (e.constructor && !oe.call(e, "constructor") && !oe.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
        for (t in e);
        return void 0 === t || oe.call(e, t)
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      type: function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? re[se.call(e)] || "object" : typeof e
      },
      globalEval: function(e) {
        var t, n = eval;
        (e = le.trim(e)) && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"), t.text = e, Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
      },
      camelCase: function(e) {
        return e.replace(ue, "ms-").replace(de, he)
      },
      nodeName: function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t) {
        var n, i = 0;
        if (o(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else
          for (i in e)
            if (!1 === t.call(e[i], i, e[i])) break;
        return e
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(ce, "")
      },
      makeArray: function(e, t) {
        var n = t || [];
        return null != e && (o(Object(e)) ? le.merge(n, "string" == typeof e ? [e] : e) : ne.call(n, e)), n
      },
      inArray: function(e, t, n) {
        return null == t ? -1 : ie.call(t, e, n)
      },
      merge: function(e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return e.length = r, e
      },
      grep: function(e, t, n) {
        for (var i = [], r = 0, s = e.length, o = !n; r < s; r++) !t(e[r], r) !== o && i.push(e[r]);
        return i
      },
      map: function(e, t, n) {
        var i, r, s = 0,
          a = [];
        if (o(e))
          for (i = e.length; s < i; s++) null != (r = t(e[s], s, n)) && a.push(r);
        else
          for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
        return te.apply([], a)
      },
      guid: 1,
      proxy: function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), le.isFunction(e)) return i = ee.call(arguments, 2), r = function() {
          return e.apply(t || this, i.concat(ee.call(arguments)))
        }, r.guid = e.guid = e.guid || le.guid++, r
      },
      now: Date.now,
      support: ae
    }), "function" == typeof Symbol && (le.fn[Symbol.iterator] = Q[Symbol.iterator]), le.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      re["[object " + t + "]"] = t.toLowerCase()
    });
    var fe =
      /*!
       * Sizzle CSS Selector Engine v2.2.1
       * http://sizzlejs.com/
       *
       * Copyright jQuery Foundation and other contributors
       * Released under the MIT license
       * http://jquery.org/license
       *
       * Date: 2015-10-17
       */
      function(e) {
        function t(e, t, n, i) {
          var r, s, o, a, c, d, h, f, p = t && t.ownerDocument,
            m = t ? t.nodeType : 9;
          if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
          if (!i && ((t ? t.ownerDocument || t : D) !== A && O(t), t = t || A, M)) {
            if (11 !== m && (d = me.exec(e)))
              if (r = d[1]) {
                if (9 === m) {
                  if (!(o = t.getElementById(r))) return n;
                  if (o.id === r) return n.push(o), n
                } else if (p && (o = p.getElementById(r)) && q(t, o) && o.id === r) return n.push(o), n
              } else {
                if (d[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                if ((r = d[3]) && y.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n
              }
            if (y.qsa && !$[e + " "] && (!I || !I.test(e))) {
              if (1 !== m) p = t, f = e;
              else if ("object" !== t.nodeName.toLowerCase()) {
                for ((a = t.getAttribute("id")) ? a = a.replace(ge, "\\$&") : t.setAttribute("id", a = R), h = k(e), s = h.length, c = ue.test(a) ? "#" + a : "[id='" + a + "']"; s--;) h[s] = c + " " + u(h[s]);
                f = h.join(","), p = ve.test(e) && l(t.parentNode) || t
              }
              if (f) try {
                return K.apply(n, p.querySelectorAll(f)), n
              } catch (e) {} finally {
                a === R && t.removeAttribute("id")
              }
            }
          }
          return T(e.replace(se, "$1"), t, n, i)
        }

        function n() {
          function e(n, i) {
            return t.push(n + " ") > b.cacheLength && delete e[t.shift()], e[n + " "] = i
          }
          var t = [];
          return e
        }

        function i(e) {
          return e[R] = !0, e
        }

        function r(e) {
          var t = A.createElement("div");
          try {
            return !!e(t)
          } catch (e) {
            return !1
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null
          }
        }

        function s(e, t) {
          for (var n = e.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = t
        }

        function o(e, t) {
          var n = t && e,
            i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || W) - (~e.sourceIndex || W);
          if (i) return i;
          if (n)
            for (; n = n.nextSibling;)
              if (n === t) return -1;
          return e ? 1 : -1
        }

        function a(e) {
          return i(function(t) {
            return t = +t, i(function(n, i) {
              for (var r, s = e([], n.length, t), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r]))
            })
          })
        }

        function l(e) {
          return e && void 0 !== e.getElementsByTagName && e
        }

        function c() {}

        function u(e) {
          for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
          return i
        }

        function d(e, t, n) {
          var i = t.dir,
            r = n && "parentNode" === i,
            s = F++;
          return t.first ? function(t, n, s) {
            for (; t = t[i];)
              if (1 === t.nodeType || r) return e(t, n, s)
          } : function(t, n, o) {
            var a, l, c, u = [H, s];
            if (o) {
              for (; t = t[i];)
                if ((1 === t.nodeType || r) && e(t, n, o)) return !0
            } else
              for (; t = t[i];)
                if (1 === t.nodeType || r) {
                  if (c = t[R] || (t[R] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (a = l[i]) && a[0] === H && a[1] === s) return u[2] = a[2];
                  if (l[i] = u, u[2] = e(t, n, o)) return !0
                }
          }
        }

        function h(e) {
          return e.length > 1 ? function(t, n, i) {
            for (var r = e.length; r--;)
              if (!e[r](t, n, i)) return !1;
            return !0
          } : e[0]
        }

        function f(e, n, i) {
          for (var r = 0, s = n.length; r < s; r++) t(e, n[r], i);
          return i
        }

        function p(e, t, n, i, r) {
          for (var s, o = [], a = 0, l = e.length, c = null != t; a < l; a++)(s = e[a]) && (n && !n(s, i, r) || (o.push(s), c && t.push(a)));
          return o
        }

        function m(e, t, n, r, s, o) {
          return r && !r[R] && (r = m(r)), s && !s[R] && (s = m(s, o)), i(function(i, o, a, l) {
            var c, u, d, h = [],
              m = [],
              v = o.length,
              g = i || f(t || "*", a.nodeType ? [a] : a, []),
              _ = !e || !i && t ? g : p(g, h, e, a, l),
              y = n ? s || (i ? e : v || r) ? [] : o : _;
            if (n && n(_, y, a, l), r)
              for (c = p(y, m), r(c, [], a, l), u = c.length; u--;)(d = c[u]) && (y[m[u]] = !(_[m[u]] = d));
            if (i) {
              if (s || e) {
                if (s) {
                  for (c = [], u = y.length; u--;)(d = y[u]) && c.push(_[u] = d);
                  s(null, y = [], c, l)
                }
                for (u = y.length; u--;)(d = y[u]) && (c = s ? Q(i, d) : h[u]) > -1 && (i[c] = !(o[c] = d))
              }
            } else y = p(y === o ? y.splice(v, y.length) : y), s ? s(null, o, y, l) : K.apply(o, y)
          })
        }

        function v(e) {
          for (var t, n, i, r = e.length, s = b.relative[e[0].type], o = s || b.relative[" "], a = s ? 1 : 0, l = d(function(e) {
              return e === t
            }, o, !0), c = d(function(e) {
              return Q(t, e) > -1
            }, o, !0), f = [function(e, n, i) {
              var r = !s && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
              return t = null, r
            }]; a < r; a++)
            if (n = b.relative[e[a].type]) f = [d(h(f), n)];
            else {
              if (n = b.filter[e[a].type].apply(null, e[a].matches), n[R]) {
                for (i = ++a; i < r && !b.relative[e[i].type]; i++);
                return m(a > 1 && h(f), a > 1 && u(e.slice(0, a - 1).concat({
                  value: " " === e[a - 2].type ? "*" : ""
                })).replace(se, "$1"), n, a < i && v(e.slice(a, i)), i < r && v(e = e.slice(i)), i < r && u(e))
              }
              f.push(n)
            }
          return h(f)
        }

        function g(e, n) {
          var r = n.length > 0,
            s = e.length > 0,
            o = function(i, o, a, l, c) {
              var u, d, h, f = 0,
                m = "0",
                v = i && [],
                g = [],
                _ = E,
                y = i || s && b.find.TAG("*", c),
                w = H += null == _ ? 1 : Math.random() || .1,
                x = y.length;
              for (c && (E = o === A || o || c); m !== x && null != (u = y[m]); m++) {
                if (s && u) {
                  for (d = 0, o || u.ownerDocument === A || (O(u), a = !M); h = e[d++];)
                    if (h(u, o || A, a)) {
                      l.push(u);
                      break
                    }
                  c && (H = w)
                }
                r && ((u = !h && u) && f--, i && v.push(u))
              }
              if (f += m, r && m !== f) {
                for (d = 0; h = n[d++];) h(v, g, o, a);
                if (i) {
                  if (f > 0)
                    for (; m--;) v[m] || g[m] || (g[m] = G.call(l));
                  g = p(g)
                }
                K.apply(l, g), c && !i && g.length > 0 && f + n.length > 1 && t.uniqueSort(l)
              }
              return c && (H = w, E = _), v
            };
          return r ? i(o) : o
        }
        var _, y, b, w, x, k, C, T, E, S, j, O, A, L, M, I, P, N, q, R = "sizzle" + 1 * new Date,
          D = e.document,
          H = 0,
          F = 0,
          B = n(),
          U = n(),
          $ = n(),
          z = function(e, t) {
            return e === t && (j = !0), 0
          },
          W = 1 << 31,
          V = {}.hasOwnProperty,
          J = [],
          G = J.pop,
          X = J.push,
          K = J.push,
          Y = J.slice,
          Q = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
              if (e[n] === t) return n;
            return -1
          },
          Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          ee = "[\\x20\\t\\r\\n\\f]",
          te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
          ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
          re = new RegExp(ee + "+", "g"),
          se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
          oe = new RegExp("^" + ee + "*," + ee + "*"),
          ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
          le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
          ce = new RegExp(ie),
          ue = new RegExp("^" + te + "$"),
          de = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + ie),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + Z + ")$", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
          },
          he = /^(?:input|select|textarea|button)$/i,
          fe = /^h\d$/i,
          pe = /^[^{]+\{\s*\[native \w/,
          me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ve = /[+~]/,
          ge = /'|\\/g,
          _e = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
          ye = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
          },
          be = function() {
            O()
          };
        try {
          K.apply(J = Y.call(D.childNodes), D.childNodes), J[D.childNodes.length].nodeType
        } catch (e) {
          K = {
            apply: J.length ? function(e, t) {
              X.apply(e, Y.call(t))
            } : function(e, t) {
              for (var n = e.length, i = 0; e[n++] = t[i++];);
              e.length = n - 1
            }
          }
        }
        y = t.support = {}, x = t.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName
        }, O = t.setDocument = function(e) {
          var t, n, i = e ? e.ownerDocument || e : D;
          return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, L = A.documentElement, M = !x(A), (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", be, !1) : n.attachEvent && n.attachEvent("onunload", be)), y.attributes = r(function(e) {
            return e.className = "i", !e.getAttribute("className")
          }), y.getElementsByTagName = r(function(e) {
            return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
          }), y.getElementsByClassName = pe.test(A.getElementsByClassName), y.getById = r(function(e) {
            return L.appendChild(e).id = R, !A.getElementsByName || !A.getElementsByName(R).length
          }), y.getById ? (b.find.ID = function(e, t) {
            if (void 0 !== t.getElementById && M) {
              var n = t.getElementById(e);
              return n ? [n] : []
            }
          }, b.filter.ID = function(e) {
            var t = e.replace(_e, ye);
            return function(e) {
              return e.getAttribute("id") === t
            }
          }) : (delete b.find.ID, b.filter.ID = function(e) {
            var t = e.replace(_e, ye);
            return function(e) {
              var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return n && n.value === t
            }
          }), b.find.TAG = y.getElementsByTagName ? function(e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : y.qsa ? t.querySelectorAll(e) : void 0
          } : function(e, t) {
            var n, i = [],
              r = 0,
              s = t.getElementsByTagName(e);
            if ("*" === e) {
              for (; n = s[r++];) 1 === n.nodeType && i.push(n);
              return i
            }
            return s
          }, b.find.CLASS = y.getElementsByClassName && function(e, t) {
            if (void 0 !== t.getElementsByClassName && M) return t.getElementsByClassName(e)
          }, P = [], I = [], (y.qsa = pe.test(A.querySelectorAll)) && (r(function(e) {
            L.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + R + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || I.push(".#.+[+~]")
          }), r(function(e) {
            var t = A.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
          })), (y.matchesSelector = pe.test(N = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(e) {
            y.disconnectedMatch = N.call(e, "div"), N.call(e, "[s!='']:x"), P.push("!=", ie)
          }), I = I.length && new RegExp(I.join("|")), P = P.length && new RegExp(P.join("|")), t = pe.test(L.compareDocumentPosition), q = t || pe.test(L.contains) ? function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
              i = t && t.parentNode;
            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
          } : function(e, t) {
            if (t)
              for (; t = t.parentNode;)
                if (t === e) return !0;
            return !1
          }, z = t ? function(e, t) {
            if (e === t) return j = !0, 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !y.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === D && q(D, e) ? -1 : t === A || t.ownerDocument === D && q(D, t) ? 1 : S ? Q(S, e) - Q(S, t) : 0 : 4 & n ? -1 : 1)
          } : function(e, t) {
            if (e === t) return j = !0, 0;
            var n, i = 0,
              r = e.parentNode,
              s = t.parentNode,
              a = [e],
              l = [t];
            if (!r || !s) return e === A ? -1 : t === A ? 1 : r ? -1 : s ? 1 : S ? Q(S, e) - Q(S, t) : 0;
            if (r === s) return o(e, t);
            for (n = e; n = n.parentNode;) a.unshift(n);
            for (n = t; n = n.parentNode;) l.unshift(n);
            for (; a[i] === l[i];) i++;
            return i ? o(a[i], l[i]) : a[i] === D ? -1 : l[i] === D ? 1 : 0
          }, A) : A
        }, t.matches = function(e, n) {
          return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
          if ((e.ownerDocument || e) !== A && O(e), n = n.replace(le, "='$1']"), y.matchesSelector && M && !$[n + " "] && (!P || !P.test(n)) && (!I || !I.test(n))) try {
            var i = N.call(e, n);
            if (i || y.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
          } catch (e) {}
          return t(n, A, null, [e]).length > 0
        }, t.contains = function(e, t) {
          return (e.ownerDocument || e) !== A && O(e), q(e, t)
        }, t.attr = function(e, t) {
          (e.ownerDocument || e) !== A && O(e);
          var n = b.attrHandle[t.toLowerCase()],
            i = n && V.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
          return void 0 !== i ? i : y.attributes || !M ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
          var t, n = [],
            i = 0,
            r = 0;
          if (j = !y.detectDuplicates, S = !y.sortStable && e.slice(0), e.sort(z), j) {
            for (; t = e[r++];) t === e[r] && (i = n.push(r));
            for (; i--;) e.splice(n[i], 1)
          }
          return S = null, e
        }, w = t.getText = function(e) {
          var t, n = "",
            i = 0,
            r = e.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
            } else if (3 === r || 4 === r) return e.nodeValue
          } else
            for (; t = e[i++];) n += w(t);
          return n
        }, b = t.selectors = {
          cacheLength: 50,
          createPseudo: i,
          match: de,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function(e) {
              return e[1] = e[1].replace(_e, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(_e, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            },
            CHILD: function(e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
            },
            PSEUDO: function(e) {
              var t, n = !e[6] && e[2];
              return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
          },
          filter: {
            TAG: function(e) {
              var t = e.replace(_e, ye).toLowerCase();
              return "*" === e ? function() {
                return !0
              } : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              }
            },
            CLASS: function(e) {
              var t = B[e + " "];
              return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && B(e, function(e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
              })
            },
            ATTR: function(e, n, i) {
              return function(r) {
                var s = t.attr(r, e);
                return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
              }
            },
            CHILD: function(e, t, n, i, r) {
              var s = "nth" !== e.slice(0, 3),
                o = "last" !== e.slice(-4),
                a = "of-type" === t;
              return 1 === i && 0 === r ? function(e) {
                return !!e.parentNode
              } : function(t, n, l) {
                var c, u, d, h, f, p, m = s !== o ? "nextSibling" : "previousSibling",
                  v = t.parentNode,
                  g = a && t.nodeName.toLowerCase(),
                  _ = !l && !a,
                  y = !1;
                if (v) {
                  if (s) {
                    for (; m;) {
                      for (h = t; h = h[m];)
                        if (a ? h.nodeName.toLowerCase() === g : 1 === h.nodeType) return !1;
                      p = m = "only" === e && !p && "nextSibling"
                    }
                    return !0
                  }
                  if (p = [o ? v.firstChild : v.lastChild], o && _) {
                    for (h = v, d = h[R] || (h[R] = {}), u = d[h.uniqueID] || (d[h.uniqueID] = {}), c = u[e] || [], f = c[0] === H && c[1], y = f && c[2], h = f && v.childNodes[f]; h = ++f && h && h[m] || (y = f = 0) || p.pop();)
                      if (1 === h.nodeType && ++y && h === t) {
                        u[e] = [H, f, y];
                        break
                      }
                  } else if (_ && (h = t, d = h[R] || (h[R] = {}), u = d[h.uniqueID] || (d[h.uniqueID] = {}), c = u[e] || [], f = c[0] === H && c[1], y = f), !1 === y)
                    for (;
                      (h = ++f && h && h[m] || (y = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== g : 1 !== h.nodeType) || !++y || (_ && (d = h[R] || (h[R] = {}), u = d[h.uniqueID] || (d[h.uniqueID] = {}), u[e] = [H, y]), h !== t)););
                  return (y -= r) === i || y % i == 0 && y / i >= 0
                }
              }
            },
            PSEUDO: function(e, n) {
              var r, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
              return s[R] ? s(n) : s.length > 1 ? (r = [e, e, "", n], b.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                for (var i, r = s(e, n), o = r.length; o--;) i = Q(e, r[o]), e[i] = !(t[i] = r[o])
              }) : function(e) {
                return s(e, 0, r)
              }) : s
            }
          },
          pseudos: {
            not: i(function(e) {
              var t = [],
                n = [],
                r = C(e.replace(se, "$1"));
              return r[R] ? i(function(e, t, n, i) {
                for (var s, o = r(e, null, i, []), a = e.length; a--;)(s = o[a]) && (e[a] = !(t[a] = s))
              }) : function(e, i, s) {
                return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop()
              }
            }),
            has: i(function(e) {
              return function(n) {
                return t(e, n).length > 0
              }
            }),
            contains: i(function(e) {
              return e = e.replace(_e, ye),
                function(t) {
                  return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                }
            }),
            lang: i(function(e) {
              return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(_e, ye).toLowerCase(),
                function(t) {
                  var n;
                  do {
                    if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1
                }
            }),
            target: function(t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id
            },
            root: function(e) {
              return e === L
            },
            focus: function(e) {
              return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: function(e) {
              return !1 === e.disabled
            },
            disabled: function(e) {
              return !0 === e.disabled
            },
            checked: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected
            },
            selected: function(e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            },
            empty: function(e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0
            },
            parent: function(e) {
              return !b.pseudos.empty(e)
            },
            header: function(e) {
              return fe.test(e.nodeName)
            },
            input: function(e) {
              return he.test(e.nodeName)
            },
            button: function(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t
            },
            text: function(e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            },
            first: a(function() {
              return [0]
            }),
            last: a(function(e, t) {
              return [t - 1]
            }),
            eq: a(function(e, t, n) {
              return [n < 0 ? n + t : n]
            }),
            even: a(function(e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e
            }),
            odd: a(function(e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e
            }),
            lt: a(function(e, t, n) {
              for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
              return e
            }),
            gt: a(function(e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
              return e
            })
          }
        }, b.pseudos.nth = b.pseudos.eq;
        for (_ in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
          }) b.pseudos[_] = function(e) {
          return function(t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e
          }
        }(_);
        for (_ in {
            submit: !0,
            reset: !0
          }) b.pseudos[_] = function(e) {
          return function(t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e
          }
        }(_);
        return c.prototype = b.filters = b.pseudos, b.setFilters = new c, k = t.tokenize = function(e, n) {
          var i, r, s, o, a, l, c, u = U[e + " "];
          if (u) return n ? 0 : u.slice(0);
          for (a = e, l = [], c = b.preFilter; a;) {
            i && !(r = oe.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = ae.exec(a)) && (i = r.shift(), s.push({
              value: i,
              type: r[0].replace(se, " ")
            }), a = a.slice(i.length));
            for (o in b.filter) !(r = de[o].exec(a)) || c[o] && !(r = c[o](r)) || (i = r.shift(), s.push({
              value: i,
              type: o,
              matches: r
            }), a = a.slice(i.length));
            if (!i) break
          }
          return n ? a.length : a ? t.error(e) : U(e, l).slice(0)
        }, C = t.compile = function(e, t) {
          var n, i = [],
            r = [],
            s = $[e + " "];
          if (!s) {
            for (t || (t = k(e)), n = t.length; n--;) s = v(t[n]), s[R] ? i.push(s) : r.push(s);
            s = $(e, g(r, i)), s.selector = e
          }
          return s
        }, T = t.select = function(e, t, n, i) {
          var r, s, o, a, c, d = "function" == typeof e && e,
            h = !i && k(e = d.selector || e);
          if (n = n || [], 1 === h.length) {
            if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && y.getById && 9 === t.nodeType && M && b.relative[s[1].type]) {
              if (!(t = (b.find.ID(o.matches[0].replace(_e, ye), t) || [])[0])) return n;
              d && (t = t.parentNode), e = e.slice(s.shift().value.length)
            }
            for (r = de.needsContext.test(e) ? 0 : s.length; r-- && (o = s[r], !b.relative[a = o.type]);)
              if ((c = b.find[a]) && (i = c(o.matches[0].replace(_e, ye), ve.test(s[0].type) && l(t.parentNode) || t))) {
                if (s.splice(r, 1), !(e = i.length && u(s))) return K.apply(n, i), n;
                break
              }
          }
          return (d || C(e, h))(i, t, !M, n, !t || ve.test(e) && l(t.parentNode) || t), n
        }, y.sortStable = R.split("").sort(z).join("") === R, y.detectDuplicates = !!j, O(), y.sortDetached = r(function(e) {
          return 1 & e.compareDocumentPosition(A.createElement("div"))
        }), r(function(e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), y.attributes && r(function(e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || s("value", function(e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), r(function(e) {
          return null == e.getAttribute("disabled")
        }) || s(Z, function(e, t, n) {
          var i;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
      }(n);
    le.find = fe, le.expr = fe.selectors, le.expr[":"] = le.expr.pseudos, le.uniqueSort = le.unique = fe.uniqueSort, le.text = fe.getText, le.isXMLDoc = fe.isXML, le.contains = fe.contains;
    var pe = function(e, t, n) {
        for (var i = [], r = void 0 !== n;
          (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (r && le(e).is(n)) break;
            i.push(e)
          }
        return i
      },
      me = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      },
      ve = le.expr.match.needsContext,
      ge = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      _e = /^.[^:#\[\.,]*$/;
    le.filter = function(e, t, n) {
      var i = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? le.find.matchesSelector(i, e) ? [i] : [] : le.find.matches(e, le.grep(t, function(e) {
        return 1 === e.nodeType
      }))
    }, le.fn.extend({
      find: function(e) {
        var t, n = this.length,
          i = [],
          r = this;
        if ("string" != typeof e) return this.pushStack(le(e).filter(function() {
          for (t = 0; t < n; t++)
            if (le.contains(r[t], this)) return !0
        }));
        for (t = 0; t < n; t++) le.find(e, r[t], i);
        return i = this.pushStack(n > 1 ? le.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
      },
      filter: function(e) {
        return this.pushStack(a(this, e || [], !1))
      },
      not: function(e) {
        return this.pushStack(a(this, e || [], !0))
      },
      is: function(e) {
        return !!a(this, "string" == typeof e && ve.test(e) ? le(e) : e || [], !1).length
      }
    });
    var ye, be = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (le.fn.init = function(e, t, n) {
      var i, r;
      if (!e) return this;
      if (n = n || ye, "string" == typeof e) {
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : be.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
          if (t = t instanceof le ? t[0] : t, le.merge(this, le.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)), ge.test(i[1]) && le.isPlainObject(t))
            for (i in t) le.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this
        }
        return r = Z.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Z, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : le.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(le) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), le.makeArray(e, this))
    }).prototype = le.fn, ye = le(Z);
    var we = /^(?:parents|prev(?:Until|All))/,
      xe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    le.fn.extend({
      has: function(e) {
        var t = le(e, this),
          n = t.length;
        return this.filter(function() {
          for (var e = 0; e < n; e++)
            if (le.contains(this, t[e])) return !0
        })
      },
      closest: function(e, t) {
        for (var n, i = 0, r = this.length, s = [], o = ve.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && le.find.matchesSelector(n, e))) {
              s.push(n);
              break
            }
        return this.pushStack(s.length > 1 ? le.uniqueSort(s) : s)
      },
      index: function(e) {
        return e ? "string" == typeof e ? ie.call(le(e), this[0]) : ie.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
        return this.pushStack(le.uniqueSort(le.merge(this.get(), le(e, t))))
      },
      addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), le.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return pe(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
        return pe(e, "parentNode", n)
      },
      next: function(e) {
        return l(e, "nextSibling")
      },
      prev: function(e) {
        return l(e, "previousSibling")
      },
      nextAll: function(e) {
        return pe(e, "nextSibling")
      },
      prevAll: function(e) {
        return pe(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
        return pe(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
        return pe(e, "previousSibling", n)
      },
      siblings: function(e) {
        return me((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return me(e.firstChild)
      },
      contents: function(e) {
        return e.contentDocument || le.merge([], e.childNodes)
      }
    }, function(e, t) {
      le.fn[e] = function(n, i) {
        var r = le.map(this, t, n);
        return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = le.filter(i, r)), this.length > 1 && (xe[e] || le.uniqueSort(r), we.test(e) && r.reverse()), this.pushStack(r)
      }
    });
    var ke = /\S+/g;
    le.Callbacks = function(e) {
      e = "string" == typeof e ? c(e) : le.extend({}, e);
      var t, n, i, r, s = [],
        o = [],
        a = -1,
        l = function() {
          for (r = e.once, i = t = !0; o.length; a = -1)
            for (n = o.shift(); ++a < s.length;) !1 === s[a].apply(n[0], n[1]) && e.stopOnFalse && (a = s.length, n = !1);
          e.memory || (n = !1), t = !1, r && (s = n ? [] : "")
        },
        u = {
          add: function() {
            return s && (n && !t && (a = s.length - 1, o.push(n)), function t(n) {
              le.each(n, function(n, i) {
                le.isFunction(i) ? e.unique && u.has(i) || s.push(i) : i && i.length && "string" !== le.type(i) && t(i)
              })
            }(arguments), n && !t && l()), this
          },
          remove: function() {
            return le.each(arguments, function(e, t) {
              for (var n;
                (n = le.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= a && a--
            }), this
          },
          has: function(e) {
            return e ? le.inArray(e, s) > -1 : s.length > 0
          },
          empty: function() {
            return s && (s = []), this
          },
          disable: function() {
            return r = o = [], s = n = "", this
          },
          disabled: function() {
            return !s
          },
          lock: function() {
            return r = o = [], n || (s = n = ""), this
          },
          locked: function() {
            return !!r
          },
          fireWith: function(e, n) {
            return r || (n = n || [], n = [e, n.slice ? n.slice() : n], o.push(n), t || l()), this
          },
          fire: function() {
            return u.fireWith(this, arguments), this
          },
          fired: function() {
            return !!i
          }
        };
      return u
    }, le.extend({
      Deferred: function(e) {
        var t = [
            ["resolve", "done", le.Callbacks("once memory"), "resolved"],
            ["reject", "fail", le.Callbacks("once memory"), "rejected"],
            ["notify", "progress", le.Callbacks("memory")]
          ],
          n = "pending",
          i = {
            state: function() {
              return n
            },
            always: function() {
              return r.done(arguments).fail(arguments), this
            },
            then: function() {
              var e = arguments;
              return le.Deferred(function(n) {
                le.each(t, function(t, s) {
                  var o = le.isFunction(e[t]) && e[t];
                  r[s[1]](function() {
                    var e = o && o.apply(this, arguments);
                    e && le.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[s[0] + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
                  })
                }), e = null
              }).promise()
            },
            promise: function(e) {
              return null != e ? le.extend(e, i) : i
            }
          },
          r = {};
        return i.pipe = i.then, le.each(t, function(e, s) {
          var o = s[2],
            a = s[3];
          i[s[1]] = o.add, a && o.add(function() {
            n = a
          }, t[1 ^ e][2].disable, t[2][2].lock), r[s[0]] = function() {
            return r[s[0] + "With"](this === r ? i : this, arguments), this
          }, r[s[0] + "With"] = o.fireWith
        }), i.promise(r), e && e.call(r, r), r
      },
      when: function(e) {
        var t, n, i, r = 0,
          s = ee.call(arguments),
          o = s.length,
          a = 1 !== o || e && le.isFunction(e.promise) ? o : 0,
          l = 1 === a ? e : le.Deferred(),
          c = function(e, n, i) {
            return function(r) {
              n[e] = this, i[e] = arguments.length > 1 ? ee.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
            }
          };
        if (o > 1)
          for (t = new Array(o), n = new Array(o), i = new Array(o); r < o; r++) s[r] && le.isFunction(s[r].promise) ? s[r].promise().progress(c(r, n, t)).done(c(r, i, s)).fail(l.reject) : --a;
        return a || l.resolveWith(i, s), l.promise()
      }
    });
    var Ce;
    le.fn.ready = function(e) {
      return le.ready.promise().done(e), this
    }, le.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
        e ? le.readyWait++ : le.ready(!0)
      },
      ready: function(e) {
        (!0 === e ? --le.readyWait : le.isReady) || (le.isReady = !0, !0 !== e && --le.readyWait > 0 || (Ce.resolveWith(Z, [le]), le.fn.triggerHandler && (le(Z).triggerHandler("ready"), le(Z).off("ready"))))
      }
    }), le.ready.promise = function(e) {
      return Ce || (Ce = le.Deferred(), "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? n.setTimeout(le.ready) : (Z.addEventListener("DOMContentLoaded", u), n.addEventListener("load", u))), Ce.promise(e)
    }, le.ready.promise();
    var Te = function(e, t, n, i, r, s, o) {
        var a = 0,
          l = e.length,
          c = null == n;
        if ("object" === le.type(n)) {
          r = !0;
          for (a in n) Te(e, t, a, n[a], !0, s, o)
        } else if (void 0 !== i && (r = !0, le.isFunction(i) || (o = !0), c && (o ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
            return c.call(le(e), n)
          })), t))
          for (; a < l; a++) t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : s
      },
      Ee = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      };
    d.uid = 1, d.prototype = {
      register: function(e, t) {
        var n = t || {};
        return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
          value: n,
          writable: !0,
          configurable: !0
        }), e[this.expando]
      },
      cache: function(e) {
        if (!Ee(e)) return {};
        var t = e[this.expando];
        return t || (t = {}, Ee(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      },
      set: function(e, t, n) {
        var i, r = this.cache(e);
        if ("string" == typeof t) r[t] = n;
        else
          for (i in t) r[i] = t[i];
        return r
      },
      get: function(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
      },
      access: function(e, t, n) {
        var i;
        return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, le.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function(e, t) {
        var n, i, r, s = e[this.expando];
        if (void 0 !== s) {
          if (void 0 === t) this.register(e);
          else {
            le.isArray(t) ? i = t.concat(t.map(le.camelCase)) : (r = le.camelCase(t), t in s ? i = [t, r] : (i = r, i = i in s ? [i] : i.match(ke) || [])), n = i.length;
            for (; n--;) delete s[i[n]]
          }(void 0 === t || le.isEmptyObject(s)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !le.isEmptyObject(t)
      }
    };
    var Se = new d,
      je = new d,
      Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Ae = /[A-Z]/g;
    le.extend({
      hasData: function(e) {
        return je.hasData(e) || Se.hasData(e)
      },
      data: function(e, t, n) {
        return je.access(e, t, n)
      },
      removeData: function(e, t) {
        je.remove(e, t)
      },
      _data: function(e, t, n) {
        return Se.access(e, t, n)
      },
      _removeData: function(e, t) {
        Se.remove(e, t)
      }
    }), le.fn.extend({
      data: function(e, t) {
        var n, i, r, s = this[0],
          o = s && s.attributes;
        if (void 0 === e) {
          if (this.length && (r = je.get(s), 1 === s.nodeType && !Se.get(s, "hasDataAttrs"))) {
            for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = le.camelCase(i.slice(5)), h(s, i, r[i])));
            Se.set(s, "hasDataAttrs", !0)
          }
          return r
        }
        return "object" == typeof e ? this.each(function() {
          je.set(this, e)
        }) : Te(this, function(t) {
          var n, i;
          if (s && void 0 === t) {
            if (void 0 !== (n = je.get(s, e) || je.get(s, e.replace(Ae, "-$&").toLowerCase()))) return n;
            if (i = le.camelCase(e), void 0 !== (n = je.get(s, i))) return n;
            if (void 0 !== (n = h(s, i, void 0))) return n
          } else i = le.camelCase(e), this.each(function() {
            var n = je.get(this, i);
            je.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && je.set(this, e, t)
          })
        }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
        return this.each(function() {
          je.remove(this, e)
        })
      }
    }), le.extend({
      queue: function(e, t, n) {
        var i;
        if (e) return t = (t || "fx") + "queue", i = Se.get(e, t), n && (!i || le.isArray(n) ? i = Se.access(e, t, le.makeArray(n)) : i.push(n)), i || []
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = le.queue(e, t),
          i = n.length,
          r = n.shift(),
          s = le._queueHooks(e, t),
          o = function() {
            le.dequeue(e, t)
          };
        "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, o, s)), !i && s && s.empty.fire()
      },
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return Se.get(e, n) || Se.access(e, n, {
          empty: le.Callbacks("once memory").add(function() {
            Se.remove(e, [t + "queue", n])
          })
        })
      }
    }), le.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? le.queue(this[0], e) : void 0 === t ? this : this.each(function() {
          var n = le.queue(this, e, t);
          le._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && le.dequeue(this, e)
        })
      },
      dequeue: function(e) {
        return this.each(function() {
          le.dequeue(this, e)
        })
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
        var n, i = 1,
          r = le.Deferred(),
          s = this,
          o = this.length,
          a = function() {
            --i || r.resolveWith(s, [s])
          };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = Se.get(s[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
        return a(), r.promise(t)
      }
    });
    var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Me = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$", "i"),
      Ie = ["Top", "Right", "Bottom", "Left"],
      Pe = function(e, t) {
        return e = t || e, "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
      },
      Ne = /^(?:checkbox|radio)$/i,
      qe = /<([\w:-]+)/,
      Re = /^$|\/(?:java|ecma)script/i,
      De = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    De.optgroup = De.option, De.tbody = De.tfoot = De.colgroup = De.caption = De.thead, De.th = De.td;
    var He = /<|&#?\w+;/;
    ! function() {
      var e = Z.createDocumentFragment(),
        t = e.appendChild(Z.createElement("div")),
        n = Z.createElement("input");
      n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ae.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ae.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Fe = /^key/,
      Be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ue = /^([^.]*)(?:\.(.+)|)/;
    le.event = {
      global: {},
      add: function(e, t, n, i, r) {
        var s, o, a, l, c, u, d, h, f, p, m, v = Se.get(e);
        if (v)
          for (n.handler && (s = n, n = s.handler, r = s.selector), n.guid || (n.guid = le.guid++), (l = v.events) || (l = v.events = {}), (o = v.handle) || (o = v.handle = function(t) {
              return void 0 !== le && le.event.triggered !== t.type ? le.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(ke) || [""], c = t.length; c--;) a = Ue.exec(t[c]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f && (d = le.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = le.event.special[f] || {}, u = le.extend({
            type: f,
            origType: m,
            data: i,
            handler: n,
            guid: n.guid,
            selector: r,
            needsContext: r && le.expr.match.needsContext.test(r),
            namespace: p.join(".")
          }, s), (h = l[f]) || (h = l[f] = [], h.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, o) || e.addEventListener && e.addEventListener(f, o)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), le.event.global[f] = !0)
      },
      remove: function(e, t, n, i, r) {
        var s, o, a, l, c, u, d, h, f, p, m, v = Se.hasData(e) && Se.get(e);
        if (v && (l = v.events)) {
          for (t = (t || "").match(ke) || [""], c = t.length; c--;)
            if (a = Ue.exec(t[c]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
              for (d = le.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, h = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length; s--;) u = h[s], !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(s, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
              o && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, v.handle) || le.removeEvent(e, f, v.handle), delete l[f])
            } else
              for (f in l) le.event.remove(e, f + t[c], n, i, !0);
          le.isEmptyObject(l) && Se.remove(e, "handle events")
        }
      },
      dispatch: function(e) {
        e = le.event.fix(e);
        var t, n, i, r, s, o = [],
          a = ee.call(arguments),
          l = (Se.get(this, "events") || {})[e.type] || [],
          c = le.event.special[e.type] || {};
        if (a[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
          for (o = le.event.handlers.call(this, e, l), t = 0;
            (r = o[t++]) && !e.isPropagationStopped();)
            for (e.currentTarget = r.elem, n = 0;
              (s = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, void 0 !== (i = ((le.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, e), e.result
        }
      },
      handlers: function(e, t) {
        var n, i, r, s, o = [],
          a = t.delegateCount,
          l = e.target;
        if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
              for (i = [], n = 0; n < a; n++) s = t[n], r = s.selector + " ", void 0 === i[r] && (i[r] = s.needsContext ? le(r, this).index(l) > -1 : le.find(r, this, null, [l]).length), i[r] && i.push(s);
              i.length && o.push({
                elem: l,
                handlers: i
              })
            }
        return a < t.length && o.push({
          elem: this,
          handlers: t.slice(a)
        }), o
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(e, t) {
          var n, i, r, s = t.button;
          return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Z, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
        }
      },
      fix: function(e) {
        if (e[le.expando]) return e;
        var t, n, i, r = e.type,
          s = e,
          o = this.fixHooks[r];
        for (o || (this.fixHooks[r] = o = Be.test(r) ? this.mouseHooks : Fe.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new le.Event(s), t = i.length; t--;) n = i[t], e[n] = s[n];
        return e.target || (e.target = Z), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, s) : e
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            if (this !== y() && this.focus) return this.focus(), !1
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            if (this === y() && this.blur) return this.blur(), !1
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            if ("checkbox" === this.type && this.click && le.nodeName(this, "input")) return this.click(), !1
          },
          _default: function(e) {
            return le.nodeName(e.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      }
    }, le.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }, le.Event = function(e, t) {
      if (!(this instanceof le.Event)) return new le.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? g : _) : this.type = e, t && le.extend(this, t), this.timeStamp = e && e.timeStamp || le.now(), this[le.expando] = !0
    }, le.Event.prototype = {
      constructor: le.Event,
      isDefaultPrevented: _,
      isPropagationStopped: _,
      isImmediatePropagationStopped: _,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = g, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = g, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = g, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, le.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, t) {
      le.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var n, i = this,
            r = e.relatedTarget,
            s = e.handleObj;
          return r && (r === i || le.contains(i, r)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
        }
      }
    }), le.fn.extend({
      on: function(e, t, n, i) {
        return b(this, e, t, n, i)
      },
      one: function(e, t, n, i) {
        return b(this, e, t, n, i, 1)
      },
      off: function(e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj) return i = e.handleObj, le(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this
        }
        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = _), this.each(function() {
          le.event.remove(this, e, n, t)
        })
      }
    });
    var $e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      ze = /<script|<style|<link/i,
      We = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ve = /^true\/(.*)/,
      Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    le.extend({
      htmlPrefilter: function(e) {
        return e.replace($e, "<$1></$2>")
      },
      clone: function(e, t, n) {
        var i, r, s, o, a = e.cloneNode(!0),
          l = le.contains(e.ownerDocument, e);
        if (!(ae.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e)))
          for (o = p(a), s = p(e), i = 0, r = s.length; i < r; i++) T(s[i], o[i]);
        if (t)
          if (n)
            for (s = s || p(e), o = o || p(a), i = 0, r = s.length; i < r; i++) C(s[i], o[i]);
          else C(e, a);
        return o = p(a, "script"), o.length > 0 && m(o, !l && p(e, "script")), a
      },
      cleanData: function(e) {
        for (var t, n, i, r = le.event.special, s = 0; void 0 !== (n = e[s]); s++)
          if (Ee(n)) {
            if (t = n[Se.expando]) {
              if (t.events)
                for (i in t.events) r[i] ? le.event.remove(n, i) : le.removeEvent(n, i, t.handle);
              n[Se.expando] = void 0
            }
            n[je.expando] && (n[je.expando] = void 0)
          }
      }
    }), le.fn.extend({
      domManip: E,
      detach: function(e) {
        return S(this, e, !0)
      },
      remove: function(e) {
        return S(this, e)
      },
      text: function(e) {
        return Te(this, function(e) {
          return void 0 === e ? le.text(this) : this.empty().each(function() {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          })
        }, null, e, arguments.length)
      },
      append: function() {
        return E(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            w(this, e).appendChild(e)
          }
        })
      },
      prepend: function() {
        return E(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = w(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function() {
        return E(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function() {
        return E(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (le.cleanData(p(e, !1)), e.textContent = "");
        return this
      },
      clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function() {
          return le.clone(this, e, t)
        })
      },
      html: function(e) {
        return Te(this, function(e) {
          var t = this[0] || {},
            n = 0,
            i = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !ze.test(e) && !De[(qe.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = le.htmlPrefilter(e);
            try {
              for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (le.cleanData(p(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function() {
        var e = [];
        return E(this, arguments, function(t) {
          var n = this.parentNode;
          le.inArray(this, e) < 0 && (le.cleanData(p(this)), n && n.replaceChild(t, this))
        }, e)
      }
    }), le.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      le.fn[e] = function(e) {
        for (var n, i = [], r = le(e), s = r.length - 1, o = 0; o <= s; o++) n = o === s ? this : this.clone(!0), le(r[o])[t](n), ne.apply(i, n.get());
        return this.pushStack(i)
      }
    });
    var Ge, Xe = {
        HTML: "block",
        BODY: "block"
      },
      Ke = /^margin/,
      Ye = new RegExp("^(" + Le + ")(?!px)[a-z%]+$", "i"),
      Qe = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = n), t.getComputedStyle(e)
      },
      Ze = function(e, t, n, i) {
        var r, s, o = {};
        for (s in t) o[s] = e.style[s], e.style[s] = t[s];
        r = n.apply(e, i || []);
        for (s in t) e.style[s] = o[s];
        return r
      },
      et = Z.documentElement;
    ! function() {
      function e() {
        a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", et.appendChild(o);
        var e = n.getComputedStyle(a);
        t = "1%" !== e.top, s = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, et.removeChild(o)
      }
      var t, i, r, s, o = Z.createElement("div"),
        a = Z.createElement("div");
      a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ae.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), le.extend(ae, {
        pixelPosition: function() {
          return e(), t
        },
        boxSizingReliable: function() {
          return null == i && e(), i
        },
        pixelMarginRight: function() {
          return null == i && e(), r
        },
        reliableMarginLeft: function() {
          return null == i && e(), s
        },
        reliableMarginRight: function() {
          var e, t = a.appendChild(Z.createElement("div"));
          return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", a.style.width = "1px", et.appendChild(o), e = !parseFloat(n.getComputedStyle(t).marginRight), et.removeChild(o), a.removeChild(t), e
        }
      }))
    }();
    var tt = /^(none|table(?!-c[ea]).+)/,
      nt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      it = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      rt = ["Webkit", "O", "Moz", "ms"],
      st = Z.createElement("div").style;
    le.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var n = A(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        float: "cssFloat"
      },
      style: function(e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var r, s, o, a = le.camelCase(t),
            l = e.style;
          if (t = le.cssProps[a] || (le.cssProps[a] = M(a) || a), o = le.cssHooks[t] || le.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t];
          s = typeof n, "string" === s && (r = Me.exec(n)) && r[1] && (n = f(e, t, r), s = "number"), null != n && n === n && ("number" === s && (n += r && r[3] || (le.cssNumber[a] ? "" : "px")), ae.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (l[t] = n))
        }
      },
      css: function(e, t, n, i) {
        var r, s, o, a = le.camelCase(t);
        return t = le.cssProps[a] || (le.cssProps[a] = M(a) || a), o = le.cssHooks[t] || le.cssHooks[a], o && "get" in o && (r = o.get(e, !0, n)), void 0 === r && (r = A(e, t, i)), "normal" === r && t in it && (r = it[t]), "" === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r
      }
    }), le.each(["height", "width"], function(e, t) {
      le.cssHooks[t] = {
        get: function(e, n, i) {
          if (n) return tt.test(le.css(e, "display")) && 0 === e.offsetWidth ? Ze(e, nt, function() {
            return N(e, t, i)
          }) : N(e, t, i)
        },
        set: function(e, n, i) {
          var r, s = i && Qe(e),
            o = i && P(e, t, i, "border-box" === le.css(e, "boxSizing", !1, s), s);
          return o && (r = Me.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = le.css(e, t)), I(e, n, o)
        }
      }
    }), le.cssHooks.marginLeft = L(ae.reliableMarginLeft, function(e, t) {
      if (t) return (parseFloat(A(e, "marginLeft")) || e.getBoundingClientRect().left - Ze(e, {
        marginLeft: 0
      }, function() {
        return e.getBoundingClientRect().left
      })) + "px"
    }), le.cssHooks.marginRight = L(ae.reliableMarginRight, function(e, t) {
      if (t) return Ze(e, {
        display: "inline-block"
      }, A, [e, "marginRight"])
    }), le.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      le.cssHooks[e + t] = {
        expand: function(n) {
          for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Ie[i] + t] = s[i] || s[i - 2] || s[0];
          return r
        }
      }, Ke.test(e) || (le.cssHooks[e + t].set = I)
    }), le.fn.extend({
      css: function(e, t) {
        return Te(this, function(e, t, n) {
          var i, r, s = {},
            o = 0;
          if (le.isArray(t)) {
            for (i = Qe(e), r = t.length; o < r; o++) s[t[o]] = le.css(e, t[o], !1, i);
            return s
          }
          return void 0 !== n ? le.style(e, t, n) : le.css(e, t)
        }, e, t, arguments.length > 1)
      },
      show: function() {
        return q(this, !0)
      },
      hide: function() {
        return q(this)
      },
      toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
          Pe(this) ? le(this).show() : le(this).hide()
        })
      }
    }), le.Tween = R, R.prototype = {
      constructor: R,
      init: function(e, t, n, i, r, s) {
        this.elem = e, this.prop = n, this.easing = r || le.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (le.cssNumber[n] ? "" : "px")
      },
      cur: function() {
        var e = R.propHooks[this.prop];
        return e && e.get ? e.get(this) : R.propHooks._default.get(this)
      },
      run: function(e) {
        var t, n = R.propHooks[this.prop];
        return this.options.duration ? this.pos = t = le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
      }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = le.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
        },
        set: function(e) {
          le.fx.step[e.prop] ? le.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[le.cssProps[e.prop]] && !le.cssHooks[e.prop] ? e.elem[e.prop] = e.now : le.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, le.easing = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
    }, le.fx = R.prototype.init, le.fx.step = {};
    var ot, at, lt = /^(?:toggle|show|hide)$/,
      ct = /queueHooks$/;
    le.Animation = le.extend($, {
        tweeners: {
          "*": [function(e, t) {
            var n = this.createTween(e, t);
            return f(n.elem, e, Me.exec(t), n), n
          }]
        },
        tweener: function(e, t) {
          le.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(ke);
          for (var n, i = 0, r = e.length; i < r; i++) n = e[i], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(t)
        },
        prefilters: [B],
        prefilter: function(e, t) {
          t ? $.prefilters.unshift(e) : $.prefilters.push(e)
        }
      }), le.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? le.extend({}, e) : {
          complete: n || !n && t || le.isFunction(e) && e,
          duration: e,
          easing: n && t || t && !le.isFunction(t) && t
        };
        return i.duration = le.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in le.fx.speeds ? le.fx.speeds[i.duration] : le.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
          le.isFunction(i.old) && i.old.call(this), i.queue && le.dequeue(this, i.queue)
        }, i
      }, le.fn.extend({
        fadeTo: function(e, t, n, i) {
          return this.filter(Pe).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, i)
        },
        animate: function(e, t, n, i) {
          var r = le.isEmptyObject(e),
            s = le.speed(t, n, i),
            o = function() {
              var t = $(this, le.extend({}, e), s);
              (r || Se.get(this, "finish")) && t.stop(!0)
            };
          return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, t, n) {
          var i = function(e) {
            var t = e.stop;
            delete e.stop, t(n)
          };
          return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
            var t = !0,
              r = null != e && e + "queueHooks",
              s = le.timers,
              o = Se.get(this);
            if (r) o[r] && o[r].stop && i(o[r]);
            else
              for (r in o) o[r] && o[r].stop && ct.test(r) && i(o[r]);
            for (r = s.length; r--;) s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(n), t = !1, s.splice(r, 1));
            !t && n || le.dequeue(this, e)
          })
        },
        finish: function(e) {
          return !1 !== e && (e = e || "fx"), this.each(function() {
            var t, n = Se.get(this),
              i = n[e + "queue"],
              r = n[e + "queueHooks"],
              s = le.timers,
              o = i ? i.length : 0;
            for (n.finish = !0, le.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
            for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish
          })
        }
      }), le.each(["toggle", "show", "hide"], function(e, t) {
        var n = le.fn[t];
        le.fn[t] = function(e, i, r) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, i, r)
        }
      }), le.each({
        slideDown: H("show"),
        slideUp: H("hide"),
        slideToggle: H("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(e, t) {
        le.fn[e] = function(e, n, i) {
          return this.animate(t, e, n, i)
        }
      }), le.timers = [], le.fx.tick = function() {
        var e, t = 0,
          n = le.timers;
        for (ot = le.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || le.fx.stop(), ot = void 0
      }, le.fx.timer = function(e) {
        le.timers.push(e), e() ? le.fx.start() : le.timers.pop()
      }, le.fx.interval = 13, le.fx.start = function() {
        at || (at = n.setInterval(le.fx.tick, le.fx.interval))
      }, le.fx.stop = function() {
        n.clearInterval(at), at = null
      }, le.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, le.fn.delay = function(e, t) {
        return e = le.fx ? le.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, i) {
          var r = n.setTimeout(t, e);
          i.stop = function() {
            n.clearTimeout(r)
          }
        })
      },
      function() {
        var e = Z.createElement("input"),
          t = Z.createElement("select"),
          n = t.appendChild(Z.createElement("option"));
        e.type = "checkbox", ae.checkOn = "" !== e.value, ae.optSelected = n.selected, t.disabled = !0, ae.optDisabled = !n.disabled, e = Z.createElement("input"), e.value = "t", e.type = "radio", ae.radioValue = "t" === e.value
      }();
    var ut, dt = le.expr.attrHandle;
    le.fn.extend({
      attr: function(e, t) {
        return Te(this, le.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
        return this.each(function() {
          le.removeAttr(this, e)
        })
      }
    }), le.extend({
      attr: function(e, t, n) {
        var i, r, s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? le.prop(e, t, n) : (1 === s && le.isXMLDoc(e) || (t = t.toLowerCase(), r = le.attrHooks[t] || (le.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void le.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = le.find.attr(e, t), null == i ? void 0 : i))
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!ae.radioValue && "radio" === t && le.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n, i, r = 0,
          s = t && t.match(ke);
        if (s && 1 === e.nodeType)
          for (; n = s[r++];) i = le.propFix[n] || n, le.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
      }
    }), ut = {
      set: function(e, t, n) {
        return !1 === t ? le.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }, le.each(le.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = dt[t] || le.find.attr;
      dt[t] = function(e, t, i) {
        var r, s;
        return i || (s = dt[t], dt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, dt[t] = s), r
      }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
      ft = /^(?:a|area)$/i;
    le.fn.extend({
      prop: function(e, t) {
        return Te(this, le.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
        return this.each(function() {
          delete this[le.propFix[e] || e]
        })
      }
    }), le.extend({
      prop: function(e, t, n) {
        var i, r, s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s) return 1 === s && le.isXMLDoc(e) || (t = le.propFix[t] || t, r = le.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = le.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : ht.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), ae.optSelected || (le.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), le.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      le.propFix[this.toLowerCase()] = this
    });
    var pt = /[\t\r\n\f]/g;
    le.fn.extend({
      addClass: function(e) {
        var t, n, i, r, s, o, a, l = 0;
        if (le.isFunction(e)) return this.each(function(t) {
          le(this).addClass(e.call(this, t, z(this)))
        });
        if ("string" == typeof e && e)
          for (t = e.match(ke) || []; n = this[l++];)
            if (r = z(n), i = 1 === n.nodeType && (" " + r + " ").replace(pt, " ")) {
              for (o = 0; s = t[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
              a = le.trim(i), r !== a && n.setAttribute("class", a)
            }
        return this
      },
      removeClass: function(e) {
        var t, n, i, r, s, o, a, l = 0;
        if (le.isFunction(e)) return this.each(function(t) {
          le(this).removeClass(e.call(this, t, z(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof e && e)
          for (t = e.match(ke) || []; n = this[l++];)
            if (r = z(n), i = 1 === n.nodeType && (" " + r + " ").replace(pt, " ")) {
              for (o = 0; s = t[o++];)
                for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
              a = le.trim(i), r !== a && n.setAttribute("class", a)
            }
        return this
      },
      toggleClass: function(e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : le.isFunction(e) ? this.each(function(n) {
          le(this).toggleClass(e.call(this, n, z(this), t), t)
        }) : this.each(function() {
          var t, i, r, s;
          if ("string" === n)
            for (i = 0, r = le(this), s = e.match(ke) || []; t = s[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
          else void 0 !== e && "boolean" !== n || (t = z(this), t && Se.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Se.get(this, "__className__") || ""))
        })
      },
      hasClass: function(e) {
        var t, n, i = 0;
        for (t = " " + e + " "; n = this[i++];)
          if (1 === n.nodeType && (" " + z(n) + " ").replace(pt, " ").indexOf(t) > -1) return !0;
        return !1
      }
    });
    var mt = /\r/g,
      vt = /[\x20\t\r\n\f]+/g;
    le.fn.extend({
      val: function(e) {
        var t, n, i, r = this[0]; {
          if (arguments.length) return i = le.isFunction(e), this.each(function(n) {
            var r;
            1 === this.nodeType && (r = i ? e.call(this, n, le(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : le.isArray(r) && (r = le.map(r, function(e) {
              return null == e ? "" : e + ""
            })), (t = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
          });
          if (r) return (t = le.valHooks[r.type] || le.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(mt, "") : null == n ? "" : n)
        }
      }
    }), le.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = le.find.attr(e, "value");
            return null != t ? t : le.trim(le.text(e)).replace(vt, " ")
          }
        },
        select: {
          get: function(e) {
            for (var t, n, i = e.options, r = e.selectedIndex, s = "select-one" === e.type || r < 0, o = s ? null : [], a = s ? r + 1 : i.length, l = r < 0 ? a : s ? r : 0; l < a; l++)
              if (n = i[l], (n.selected || l === r) && (ae.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !le.nodeName(n.parentNode, "optgroup"))) {
                if (t = le(n).val(), s) return t;
                o.push(t)
              }
            return o
          },
          set: function(e, t) {
            for (var n, i, r = e.options, s = le.makeArray(t), o = r.length; o--;) i = r[o], (i.selected = le.inArray(le.valHooks.option.get(i), s) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), s
          }
        }
      }
    }), le.each(["radio", "checkbox"], function() {
      le.valHooks[this] = {
        set: function(e, t) {
          if (le.isArray(t)) return e.checked = le.inArray(le(e).val(), t) > -1
        }
      }, ae.checkOn || (le.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    });
    var gt = /^(?:focusinfocus|focusoutblur)$/;
    le.extend(le.event, {
      trigger: function(e, t, i, r) {
        var s, o, a, l, c, u, d, h = [i || Z],
          f = oe.call(e, "type") ? e.type : e,
          p = oe.call(e, "namespace") ? e.namespace.split(".") : [];
        if (o = a = i = i || Z, 3 !== i.nodeType && 8 !== i.nodeType && !gt.test(f + le.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), c = f.indexOf(":") < 0 && "on" + f, e = e[le.expando] ? e : new le.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : le.makeArray(t, [e]), d = le.event.special[f] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, t))) {
          if (!r && !d.noBubble && !le.isWindow(i)) {
            for (l = d.delegateType || f, gt.test(l + f) || (o = o.parentNode); o; o = o.parentNode) h.push(o), a = o;
            a === (i.ownerDocument || Z) && h.push(a.defaultView || a.parentWindow || n)
          }
          for (s = 0;
            (o = h[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : d.bindType || f, u = (Se.get(o, "events") || {})[e.type] && Se.get(o, "handle"), u && u.apply(o, t), (u = c && o[c]) && u.apply && Ee(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
          return e.type = f, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), t) || !Ee(i) || c && le.isFunction(i[f]) && !le.isWindow(i) && (a = i[c], a && (i[c] = null), le.event.triggered = f, i[f](), le.event.triggered = void 0, a && (i[c] = a)), e.result
        }
      },
      simulate: function(e, t, n) {
        var i = le.extend(new le.Event, n, {
          type: e,
          isSimulated: !0
        });
        le.event.trigger(i, null, t)
      }
    }), le.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          le.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        if (n) return le.event.trigger(e, t, n, !0)
      }
    }), le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
      le.fn[t] = function(e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
    }), le.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), ae.focusin = "onfocusin" in n, ae.focusin || le.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      var n = function(e) {
        le.event.simulate(t, e.target, le.event.fix(e))
      };
      le.event.special[t] = {
        setup: function() {
          var i = this.ownerDocument || this,
            r = Se.access(i, t);
          r || i.addEventListener(e, n, !0), Se.access(i, t, (r || 0) + 1)
        },
        teardown: function() {
          var i = this.ownerDocument || this,
            r = Se.access(i, t) - 1;
          r ? Se.access(i, t, r) : (i.removeEventListener(e, n, !0), Se.remove(i, t))
        }
      }
    });
    var _t = n.location,
      yt = le.now(),
      bt = /\?/;
    le.parseJSON = function(e) {
      return JSON.parse(e + "")
    }, le.parseXML = function(e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = (new n.DOMParser).parseFromString(e, "text/xml")
      } catch (e) {
        t = void 0
      }
      return t && !t.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + e), t
    };
    var wt = /#.*$/,
      xt = /([?&])_=[^&]*/,
      kt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ct = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Tt = /^(?:GET|HEAD)$/,
      Et = /^\/\//,
      St = {},
      jt = {},
      Ot = "*/".concat("*"),
      At = Z.createElement("a");
    At.href = _t.href, le.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: _t.href,
        type: "GET",
        isLocal: Ct.test(_t.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ot,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": le.parseJSON,
          "text xml": le.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(e, t) {
        return t ? J(J(e, le.ajaxSettings), t) : J(le.ajaxSettings, e)
      },
      ajaxPrefilter: W(St),
      ajaxTransport: W(jt),
      ajax: function(e, t) {
        function i(e, t, i, a) {
          var c, d, _, y, w, k = t;
          2 !== b && (b = 2, l && n.clearTimeout(l), r = void 0, o = a || "", x.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (y = G(h, x, i)), y = X(h, y, x, c), c ? (h.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (le.lastModified[s] = w), (w = x.getResponseHeader("etag")) && (le.etag[s] = w)), 204 === e || "HEAD" === h.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, d = y.data, _ = y.error, c = !_)) : (_ = k, !e && k || (k = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || k) + "", c ? m.resolveWith(f, [d, k, x]) : m.rejectWith(f, [x, k, _]), x.statusCode(g), g = void 0, u && p.trigger(c ? "ajaxSuccess" : "ajaxError", [x, h, c ? d : _]), v.fireWith(f, [x, k]), u && (p.trigger("ajaxComplete", [x, h]), --le.active || le.event.trigger("ajaxStop")))
        }
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var r, s, o, a, l, c, u, d, h = le.ajaxSetup({}, t),
          f = h.context || h,
          p = h.context && (f.nodeType || f.jquery) ? le(f) : le.event,
          m = le.Deferred(),
          v = le.Callbacks("once memory"),
          g = h.statusCode || {},
          _ = {},
          y = {},
          b = 0,
          w = "canceled",
          x = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (2 === b) {
                if (!a)
                  for (a = {}; t = kt.exec(o);) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()]
              }
              return null == t ? null : t
            },
            getAllResponseHeaders: function() {
              return 2 === b ? o : null
            },
            setRequestHeader: function(e, t) {
              var n = e.toLowerCase();
              return b || (e = y[n] = y[n] || e, _[e] = t), this
            },
            overrideMimeType: function(e) {
              return b || (h.mimeType = e), this
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (b < 2)
                  for (t in e) g[t] = [g[t], e[t]];
                else x.always(e[x.status]);
              return this
            },
            abort: function(e) {
              var t = e || w;
              return r && r.abort(t), i(0, t), this
            }
          };
        if (m.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, h.url = ((e || h.url || _t.href) + "").replace(wt, "").replace(Et, _t.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = le.trim(h.dataType || "*").toLowerCase().match(ke) || [""], null == h.crossDomain) {
          c = Z.createElement("a");
          try {
            c.href = h.url, c.href = c.href, h.crossDomain = At.protocol + "//" + At.host != c.protocol + "//" + c.host
          } catch (e) {
            h.crossDomain = !0
          }
        }
        if (h.data && h.processData && "string" != typeof h.data && (h.data = le.param(h.data, h.traditional)), V(St, h, t, x), 2 === b) return x;
        u = le.event && h.global, u && 0 == le.active++ && le.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Tt.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (bt.test(s) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = xt.test(s) ? s.replace(xt, "$1_=" + yt++) : s + (bt.test(s) ? "&" : "?") + "_=" + yt++)), h.ifModified && (le.lastModified[s] && x.setRequestHeader("If-Modified-Since", le.lastModified[s]), le.etag[s] && x.setRequestHeader("If-None-Match", le.etag[s])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : h.accepts["*"]);
        for (d in h.headers) x.setRequestHeader(d, h.headers[d]);
        if (h.beforeSend && (!1 === h.beforeSend.call(f, x, h) || 2 === b)) return x.abort();
        w = "abort";
        for (d in {
            success: 1,
            error: 1,
            complete: 1
          }) x[d](h[d]);
        if (r = V(jt, h, t, x)) {
          if (x.readyState = 1, u && p.trigger("ajaxSend", [x, h]), 2 === b) return x;
          h.async && h.timeout > 0 && (l = n.setTimeout(function() {
            x.abort("timeout")
          }, h.timeout));
          try {
            b = 1, r.send(_, i)
          } catch (e) {
            if (!(b < 2)) throw e;
            i(-1, e)
          }
        } else i(-1, "No Transport");
        return x
      },
      getJSON: function(e, t, n) {
        return le.get(e, t, n, "json")
      },
      getScript: function(e, t) {
        return le.get(e, void 0, t, "script")
      }
    }), le.each(["get", "post"], function(e, t) {
      le[t] = function(e, n, i, r) {
        return le.isFunction(n) && (r = r || i, i = n, n = void 0), le.ajax(le.extend({
          url: e,
          type: t,
          dataType: r,
          data: n,
          success: i
        }, le.isPlainObject(e) && e))
      }
    }), le._evalUrl = function(e) {
      return le.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0
      })
    }, le.fn.extend({
      wrapAll: function(e) {
        var t;
        return le.isFunction(e) ? this.each(function(t) {
          le(this).wrapAll(e.call(this, t))
        }) : (this[0] && (t = le(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e
        }).append(this)), this)
      },
      wrapInner: function(e) {
        return le.isFunction(e) ? this.each(function(t) {
          le(this).wrapInner(e.call(this, t))
        }) : this.each(function() {
          var t = le(this),
            n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        })
      },
      wrap: function(e) {
        var t = le.isFunction(e);
        return this.each(function(n) {
          le(this).wrapAll(t ? e.call(this, n) : e)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
        }).end()
      }
    }), le.expr.filters.hidden = function(e) {
      return !le.expr.filters.visible(e)
    }, le.expr.filters.visible = function(e) {
      return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var Lt = /%20/g,
      Mt = /\[\]$/,
      It = /\r?\n/g,
      Pt = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;
    le.param = function(e, t) {
      var n, i = [],
        r = function(e, t) {
          t = le.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
      if (void 0 === t && (t = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(e) || e.jquery && !le.isPlainObject(e)) le.each(e, function() {
        r(this.name, this.value)
      });
      else
        for (n in e) K(n, e[n], t, r);
      return i.join("&").replace(Lt, "+")
    }, le.fn.extend({
      serialize: function() {
        return le.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var e = le.prop(this, "elements");
          return e ? le.makeArray(e) : this
        }).filter(function() {
          var e = this.type;
          return this.name && !le(this).is(":disabled") && Nt.test(this.nodeName) && !Pt.test(e) && (this.checked || !Ne.test(e))
        }).map(function(e, t) {
          var n = le(this).val();
          return null == n ? null : le.isArray(n) ? le.map(n, function(e) {
            return {
              name: t.name,
              value: e.replace(It, "\r\n")
            }
          }) : {
            name: t.name,
            value: n.replace(It, "\r\n")
          }
        }).get()
      }
    }), le.ajaxSettings.xhr = function() {
      try {
        return new n.XMLHttpRequest
      } catch (e) {}
    };
    var qt = {
        0: 200,
        1223: 204
      },
      Rt = le.ajaxSettings.xhr();
    ae.cors = !!Rt && "withCredentials" in Rt, ae.ajax = Rt = !!Rt, le.ajaxTransport(function(e) {
      var t, i;
      if (ae.cors || Rt && !e.crossDomain) return {
        send: function(r, s) {
          var o, a = e.xhr();
          if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (o in e.xhrFields) a[o] = e.xhrFields[o];
          e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
          for (o in r) a.setRequestHeader(o, r[o]);
          t = function(e) {
            return function() {
              t && (t = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                binary: a.response
              } : {
                text: a.responseText
              }, a.getAllResponseHeaders()))
            }
          }, a.onload = t(), i = a.onerror = t("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
            4 === a.readyState && n.setTimeout(function() {
              t && i()
            })
          }, t = t("abort");
          try {
            a.send(e.hasContent && e.data || null)
          } catch (e) {
            if (t) throw e
          }
        },
        abort: function() {
          t && t()
        }
      }
    }), le.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(e) {
          return le.globalEval(e), e
        }
      }
    }), le.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), le.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function(i, r) {
            t = le("<script>").prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", n = function(e) {
              t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
            }), Z.head.appendChild(t[0])
          },
          abort: function() {
            n && n()
          }
        }
      }
    });
    var Dt = [],
      Ht = /(=)\?(?=&|$)|\?\?/;
    le.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = Dt.pop() || le.expando + "_" + yt++;
        return this[e] = !0, e
      }
    }), le.ajaxPrefilter("json jsonp", function(e, t, i) {
      var r, s, o, a = !1 !== e.jsonp && (Ht.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = le.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ht, "$1" + r) : !1 !== e.jsonp && (e.url += (bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
        return o || le.error(r + " was not called"), o[0]
      }, e.dataTypes[0] = "json", s = n[r], n[r] = function() {
        o = arguments
      }, i.always(function() {
        void 0 === s ? le(n).removeProp(r) : n[r] = s, e[r] && (e.jsonpCallback = t.jsonpCallback, Dt.push(r)), o && le.isFunction(s) && s(o[0]), o = s = void 0
      }), "script"
    }), le.parseHTML = function(e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || Z;
      var i = ge.exec(e),
        r = !n && [];
      return i ? [t.createElement(i[1])] : (i = v([e], t, r), r && r.length && le(r).remove(), le.merge([], i.childNodes))
    };
    var Ft = le.fn.load;
    le.fn.load = function(e, t, n) {
      if ("string" != typeof e && Ft) return Ft.apply(this, arguments);
      var i, r, s, o = this,
        a = e.indexOf(" ");
      return a > -1 && (i = le.trim(e.slice(a)), e = e.slice(0, a)), le.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), o.length > 0 && le.ajax({
        url: e,
        type: r || "GET",
        dataType: "html",
        data: t
      }).done(function(e) {
        s = arguments, o.html(i ? le("<div>").append(le.parseHTML(e)).find(i) : e)
      }).always(n && function(e, t) {
        o.each(function() {
          n.apply(this, s || [e.responseText, t, e])
        })
      }), this
    }, le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      le.fn[t] = function(e) {
        return this.on(t, e)
      }
    }), le.expr.filters.animated = function(e) {
      return le.grep(le.timers, function(t) {
        return e === t.elem
      }).length
    }, le.offset = {
      setOffset: function(e, t, n) {
        var i, r, s, o, a, l, c, u = le.css(e, "position"),
          d = le(e),
          h = {};
        "static" === u && (e.style.position = "relative"), a = d.offset(), s = le.css(e, "top"), l = le.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (s + l).indexOf("auto") > -1, c ? (i = d.position(), o = i.top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), le.isFunction(t) && (t = t.call(e, n, le.extend({}, a))), null != t.top && (h.top = t.top - a.top + o), null != t.left && (h.left = t.left - a.left + r), "using" in t ? t.using.call(e, h) : d.css(h)
      }
    }, le.fn.extend({
      offset: function(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function(t) {
          le.offset.setOffset(this, e, t)
        });
        var t, n, i = this[0],
          r = {
            top: 0,
            left: 0
          },
          s = i && i.ownerDocument;
        if (s) return t = s.documentElement, le.contains(t, i) ? (r = i.getBoundingClientRect(), n = Y(s), {
          top: r.top + n.pageYOffset - t.clientTop,
          left: r.left + n.pageXOffset - t.clientLeft
        }) : r
      },
      position: function() {
        if (this[0]) {
          var e, t, n = this[0],
            i = {
              top: 0,
              left: 0
            };
          return "fixed" === le.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), le.nodeName(e[0], "html") || (i = e.offset()), i.top += le.css(e[0], "borderTopWidth", !0), i.left += le.css(e[0], "borderLeftWidth", !0)), {
            top: t.top - i.top - le.css(n, "marginTop", !0),
            left: t.left - i.left - le.css(n, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent; e && "static" === le.css(e, "position");) e = e.offsetParent;
          return e || et
        })
      }
    }), le.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(e, t) {
      var n = "pageYOffset" === t;
      le.fn[e] = function(i) {
        return Te(this, function(e, i, r) {
          var s = Y(e);
          if (void 0 === r) return s ? s[t] : e[i];
          s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : e[i] = r
        }, e, i, arguments.length)
      }
    }), le.each(["top", "left"], function(e, t) {
      le.cssHooks[t] = L(ae.pixelPosition, function(e, n) {
        if (n) return n = A(e, t), Ye.test(n) ? le(e).position()[t] + "px" : n
      })
    }), le.each({
      Height: "height",
      Width: "width"
    }, function(e, t) {
      le.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(n, i) {
        le.fn[i] = function(i, r) {
          var s = arguments.length && (n || "boolean" != typeof i),
            o = n || (!0 === i || !0 === r ? "margin" : "border");
          return Te(this, function(t, n, i) {
            var r;
            return le.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? le.css(t, n, o) : le.style(t, n, i, o)
          }, t, s ? i : void 0, s, null)
        }
      })
    }), le.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      delegate: function(e, t, n, i) {
        return this.on(t, e, n, i)
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      },
      size: function() {
        return this.length
      }
    }), le.fn.andSelf = le.fn.addBack, i = [], void 0 !== (r = function() {
      return le
    }.apply(t, i)) && (e.exports = r);
    var Bt = n.jQuery,
      Ut = n.$;
    return le.noConflict = function(e) {
      return n.$ === le && (n.$ = Ut), e && n.jQuery === le && (n.jQuery = Bt), le
    }, s || (n.jQuery = n.$ = le), le
  })
}, function(e, t, n) {
  (function(i) {
    var r, s;
    ! function(o) {
      var a = "object" == typeof self && self.self === self && self || "object" == typeof i && i.global === i && i;
      r = [n(7), n(0), t], void 0 !== (s = function(e, t, n) {
        a.Backbone = o(a, n, e, t)
      }.apply(t, r)) && (e.exports = s)
    }(function(e, t, n, i) {
      var r = e.Backbone,
        s = Array.prototype.slice;
      t.VERSION = "1.3.3", t.$ = i, t.noConflict = function() {
        return e.Backbone = r, this
      }, t.emulateHTTP = !1, t.emulateJSON = !1;
      var o = function(e, t, i) {
          switch (e) {
            case 1:
              return function() {
                return n[t](this[i])
              };
            case 2:
              return function(e) {
                return n[t](this[i], e)
              };
            case 3:
              return function(e, r) {
                return n[t](this[i], l(e, this), r)
              };
            case 4:
              return function(e, r, s) {
                return n[t](this[i], l(e, this), r, s)
              };
            default:
              return function() {
                var e = s.call(arguments);
                return e.unshift(this[i]), n[t].apply(n, e)
              }
          }
        },
        a = function(e, t, i) {
          n.each(t, function(t, r) {
            n[r] && (e.prototype[r] = o(t, r, i))
          })
        },
        l = function(e, t) {
          return n.isFunction(e) ? e : n.isObject(e) && !t._isModel(e) ? c(e) : n.isString(e) ? function(t) {
            return t.get(e)
          } : e
        },
        c = function(e) {
          var t = n.matches(e);
          return function(e) {
            return t(e.attributes)
          }
        },
        u = t.Events = {},
        d = /\s+/,
        h = function(e, t, i, r, s) {
          var o, a = 0;
          if (i && "object" == typeof i) {
            void 0 !== r && "context" in s && void 0 === s.context && (s.context = r);
            for (o = n.keys(i); a < o.length; a++) t = h(e, t, o[a], i[o[a]], s)
          } else if (i && d.test(i))
            for (o = i.split(d); a < o.length; a++) t = e(t, o[a], r, s);
          else t = e(t, i, r, s);
          return t
        };
      u.on = function(e, t, n) {
        return f(this, e, t, n)
      };
      var f = function(e, t, n, i, r) {
        if (e._events = h(p, e._events || {}, t, n, {
            context: i,
            ctx: e,
            listening: r
          }), r) {
          (e._listeners || (e._listeners = {}))[r.id] = r
        }
        return e
      };
      u.listenTo = function(e, t, i) {
        if (!e) return this;
        var r = e._listenId || (e._listenId = n.uniqueId("l")),
          s = this._listeningTo || (this._listeningTo = {}),
          o = s[r];
        if (!o) {
          var a = this._listenId || (this._listenId = n.uniqueId("l"));
          o = s[r] = {
            obj: e,
            objId: r,
            id: a,
            listeningTo: s,
            count: 0
          }
        }
        return f(e, t, i, this, o), this
      };
      var p = function(e, t, n, i) {
        if (n) {
          var r = e[t] || (e[t] = []),
            s = i.context,
            o = i.ctx,
            a = i.listening;
          a && a.count++, r.push({
            callback: n,
            context: s,
            ctx: s || o,
            listening: a
          })
        }
        return e
      };
      u.off = function(e, t, n) {
        return this._events ? (this._events = h(m, this._events, e, t, {
          context: n,
          listeners: this._listeners
        }), this) : this
      }, u.stopListening = function(e, t, i) {
        var r = this._listeningTo;
        if (!r) return this;
        for (var s = e ? [e._listenId] : n.keys(r), o = 0; o < s.length; o++) {
          var a = r[s[o]];
          if (!a) break;
          a.obj.off(t, i, this)
        }
        return this
      };
      var m = function(e, t, i, r) {
        if (e) {
          var s, o = 0,
            a = r.context,
            l = r.listeners;
          if (t || i || a) {
            for (var c = t ? [t] : n.keys(e); o < c.length; o++) {
              t = c[o];
              var u = e[t];
              if (!u) break;
              for (var d = [], h = 0; h < u.length; h++) {
                var f = u[h];
                i && i !== f.callback && i !== f.callback._callback || a && a !== f.context ? d.push(f) : (s = f.listening) && 0 == --s.count && (delete l[s.id], delete s.listeningTo[s.objId])
              }
              d.length ? e[t] = d : delete e[t]
            }
            return e
          }
          for (var p = n.keys(l); o < p.length; o++) s = l[p[o]], delete l[s.id], delete s.listeningTo[s.objId]
        }
      };
      u.once = function(e, t, i) {
        var r = h(v, {}, e, t, n.bind(this.off, this));
        return "string" == typeof e && null == i && (t = void 0), this.on(r, t, i)
      }, u.listenToOnce = function(e, t, i) {
        var r = h(v, {}, t, i, n.bind(this.stopListening, this, e));
        return this.listenTo(e, r)
      };
      var v = function(e, t, i, r) {
        if (i) {
          var s = e[t] = n.once(function() {
            r(t, s), i.apply(this, arguments)
          });
          s._callback = i
        }
        return e
      };
      u.trigger = function(e) {
        if (!this._events) return this;
        for (var t = Math.max(0, arguments.length - 1), n = Array(t), i = 0; i < t; i++) n[i] = arguments[i + 1];
        return h(g, this._events, e, void 0, n), this
      };
      var g = function(e, t, n, i) {
          if (e) {
            var r = e[t],
              s = e.all;
            r && s && (s = s.slice()), r && _(r, i), s && _(s, [t].concat(i))
          }
          return e
        },
        _ = function(e, t) {
          var n, i = -1,
            r = e.length,
            s = t[0],
            o = t[1],
            a = t[2];
          switch (t.length) {
            case 0:
              for (; ++i < r;)(n = e[i]).callback.call(n.ctx);
              return;
            case 1:
              for (; ++i < r;)(n = e[i]).callback.call(n.ctx, s);
              return;
            case 2:
              for (; ++i < r;)(n = e[i]).callback.call(n.ctx, s, o);
              return;
            case 3:
              for (; ++i < r;)(n = e[i]).callback.call(n.ctx, s, o, a);
              return;
            default:
              for (; ++i < r;)(n = e[i]).callback.apply(n.ctx, t);
              return
          }
        };
      u.bind = u.on, u.unbind = u.off, n.extend(t, u);
      var y = t.Model = function(e, t) {
        var i = e || {};
        t || (t = {}), this.cid = n.uniqueId(this.cidPrefix), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (i = this.parse(i, t) || {});
        var r = n.result(this, "defaults");
        i = n.defaults(n.extend({}, r, i), r), this.set(i, t), this.changed = {}, this.initialize.apply(this, arguments)
      };
      n.extend(y.prototype, u, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        cidPrefix: "c",
        initialize: function() {},
        toJSON: function(e) {
          return n.clone(this.attributes)
        },
        sync: function() {
          return t.sync.apply(this, arguments)
        },
        get: function(e) {
          return this.attributes[e]
        },
        escape: function(e) {
          return n.escape(this.get(e))
        },
        has: function(e) {
          return null != this.get(e)
        },
        matches: function(e) {
          return !!n.iteratee(e, this)(this.attributes)
        },
        set: function(e, t, i) {
          if (null == e) return this;
          var r;
          if ("object" == typeof e ? (r = e, i = t) : (r = {})[e] = t, i || (i = {}), !this._validate(r, i)) return !1;
          var s = i.unset,
            o = i.silent,
            a = [],
            l = this._changing;
          this._changing = !0, l || (this._previousAttributes = n.clone(this.attributes), this.changed = {});
          var c = this.attributes,
            u = this.changed,
            d = this._previousAttributes;
          for (var h in r) t = r[h], n.isEqual(c[h], t) || a.push(h), n.isEqual(d[h], t) ? delete u[h] : u[h] = t, s ? delete c[h] : c[h] = t;
          if (this.idAttribute in r && (this.id = this.get(this.idAttribute)), !o) {
            a.length && (this._pending = i);
            for (var f = 0; f < a.length; f++) this.trigger("change:" + a[f], this, c[a[f]], i)
          }
          if (l) return this;
          if (!o)
            for (; this._pending;) i = this._pending, this._pending = !1, this.trigger("change", this, i);
          return this._pending = !1, this._changing = !1, this
        },
        unset: function(e, t) {
          return this.set(e, void 0, n.extend({}, t, {
            unset: !0
          }))
        },
        clear: function(e) {
          var t = {};
          for (var i in this.attributes) t[i] = void 0;
          return this.set(t, n.extend({}, e, {
            unset: !0
          }))
        },
        hasChanged: function(e) {
          return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
        },
        changedAttributes: function(e) {
          if (!e) return !!this.hasChanged() && n.clone(this.changed);
          var t = this._changing ? this._previousAttributes : this.attributes,
            i = {};
          for (var r in e) {
            var s = e[r];
            n.isEqual(t[r], s) || (i[r] = s)
          }
          return !!n.size(i) && i
        },
        previous: function(e) {
          return null != e && this._previousAttributes ? this._previousAttributes[e] : null
        },
        previousAttributes: function() {
          return n.clone(this._previousAttributes)
        },
        fetch: function(e) {
          e = n.extend({
            parse: !0
          }, e);
          var t = this,
            i = e.success;
          return e.success = function(n) {
            var r = e.parse ? t.parse(n, e) : n;
            if (!t.set(r, e)) return !1;
            i && i.call(e.context, t, n, e), t.trigger("sync", t, n, e)
          }, H(this, e), this.sync("read", this, e)
        },
        save: function(e, t, i) {
          var r;
          null == e || "object" == typeof e ? (r = e, i = t) : (r = {})[e] = t, i = n.extend({
            validate: !0,
            parse: !0
          }, i);
          var s = i.wait;
          if (r && !s) {
            if (!this.set(r, i)) return !1
          } else if (!this._validate(r, i)) return !1;
          var o = this,
            a = i.success,
            l = this.attributes;
          i.success = function(e) {
            o.attributes = l;
            var t = i.parse ? o.parse(e, i) : e;
            if (s && (t = n.extend({}, r, t)), t && !o.set(t, i)) return !1;
            a && a.call(i.context, o, e, i), o.trigger("sync", o, e, i)
          }, H(this, i), r && s && (this.attributes = n.extend({}, l, r));
          var c = this.isNew() ? "create" : i.patch ? "patch" : "update";
          "patch" !== c || i.attrs || (i.attrs = r);
          var u = this.sync(c, this, i);
          return this.attributes = l, u
        },
        destroy: function(e) {
          e = e ? n.clone(e) : {};
          var t = this,
            i = e.success,
            r = e.wait,
            s = function() {
              t.stopListening(), t.trigger("destroy", t, t.collection, e)
            };
          e.success = function(n) {
            r && s(), i && i.call(e.context, t, n, e), t.isNew() || t.trigger("sync", t, n, e)
          };
          var o = !1;
          return this.isNew() ? n.defer(e.success) : (H(this, e), o = this.sync("delete", this, e)), r || s(), o
        },
        url: function() {
          var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || D();
          if (this.isNew()) return e;
          var t = this.get(this.idAttribute);
          return e.replace(/[^\/]$/, "$&/") + encodeURIComponent(t)
        },
        parse: function(e, t) {
          return e
        },
        clone: function() {
          return new this.constructor(this.attributes)
        },
        isNew: function() {
          return !this.has(this.idAttribute)
        },
        isValid: function(e) {
          return this._validate({}, n.extend({}, e, {
            validate: !0
          }))
        },
        _validate: function(e, t) {
          if (!t.validate || !this.validate) return !0;
          e = n.extend({}, this.attributes, e);
          var i = this.validationError = this.validate(e, t) || null;
          return !i || (this.trigger("invalid", this, i, n.extend(t, {
            validationError: i
          })), !1)
        }
      }), a(y, {
        keys: 1,
        values: 1,
        pairs: 1,
        invert: 1,
        pick: 0,
        omit: 0,
        chain: 1,
        isEmpty: 1
      }, "attributes");
      var b = t.Collection = function(e, t) {
          t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
            silent: !0
          }, t))
        },
        w = {
          add: !0,
          remove: !0,
          merge: !0
        },
        x = {
          add: !0,
          remove: !1
        },
        k = function(e, t, n) {
          n = Math.min(Math.max(n, 0), e.length);
          var i, r = Array(e.length - n),
            s = t.length;
          for (i = 0; i < r.length; i++) r[i] = e[i + n];
          for (i = 0; i < s; i++) e[i + n] = t[i];
          for (i = 0; i < r.length; i++) e[i + s + n] = r[i]
        };
      n.extend(b.prototype, u, {
        model: y,
        initialize: function() {},
        toJSON: function(e) {
          return this.map(function(t) {
            return t.toJSON(e)
          })
        },
        sync: function() {
          return t.sync.apply(this, arguments)
        },
        add: function(e, t) {
          return this.set(e, n.extend({
            merge: !1
          }, t, x))
        },
        remove: function(e, t) {
          t = n.extend({}, t);
          var i = !n.isArray(e);
          e = i ? [e] : e.slice();
          var r = this._removeModels(e, t);
          return !t.silent && r.length && (t.changes = {
            added: [],
            merged: [],
            removed: r
          }, this.trigger("update", this, t)), i ? r[0] : r
        },
        set: function(e, t) {
          if (null != e) {
            t = n.extend({}, w, t), t.parse && !this._isModel(e) && (e = this.parse(e, t) || []);
            var i = !n.isArray(e);
            e = i ? [e] : e.slice();
            var r = t.at;
            null != r && (r = +r), r > this.length && (r = this.length), r < 0 && (r += this.length + 1);
            var s, o, a = [],
              l = [],
              c = [],
              u = [],
              d = {},
              h = t.add,
              f = t.merge,
              p = t.remove,
              m = !1,
              v = this.comparator && null == r && !1 !== t.sort,
              g = n.isString(this.comparator) ? this.comparator : null;
            for (o = 0; o < e.length; o++) {
              s = e[o];
              var _ = this.get(s);
              if (_) {
                if (f && s !== _) {
                  var y = this._isModel(s) ? s.attributes : s;
                  t.parse && (y = _.parse(y, t)), _.set(y, t), c.push(_), v && !m && (m = _.hasChanged(g))
                }
                d[_.cid] || (d[_.cid] = !0, a.push(_)), e[o] = _
              } else h && (s = e[o] = this._prepareModel(s, t)) && (l.push(s), this._addReference(s, t), d[s.cid] = !0, a.push(s))
            }
            if (p) {
              for (o = 0; o < this.length; o++) s = this.models[o], d[s.cid] || u.push(s);
              u.length && this._removeModels(u, t)
            }
            var b = !1,
              x = !v && h && p;
            if (a.length && x ? (b = this.length !== a.length || n.some(this.models, function(e, t) {
                return e !== a[t]
              }), this.models.length = 0, k(this.models, a, 0), this.length = this.models.length) : l.length && (v && (m = !0), k(this.models, l, null == r ? this.length : r), this.length = this.models.length), m && this.sort({
                silent: !0
              }), !t.silent) {
              for (o = 0; o < l.length; o++) null != r && (t.index = r + o), s = l[o], s.trigger("add", s, this, t);
              (m || b) && this.trigger("sort", this, t), (l.length || u.length || c.length) && (t.changes = {
                added: l,
                removed: u,
                merged: c
              }, this.trigger("update", this, t))
            }
            return i ? e[0] : e
          }
        },
        reset: function(e, t) {
          t = t ? n.clone(t) : {};
          for (var i = 0; i < this.models.length; i++) this._removeReference(this.models[i], t);
          return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
            silent: !0
          }, t)), t.silent || this.trigger("reset", this, t), e
        },
        push: function(e, t) {
          return this.add(e, n.extend({
            at: this.length
          }, t))
        },
        pop: function(e) {
          var t = this.at(this.length - 1);
          return this.remove(t, e)
        },
        unshift: function(e, t) {
          return this.add(e, n.extend({
            at: 0
          }, t))
        },
        shift: function(e) {
          var t = this.at(0);
          return this.remove(t, e)
        },
        slice: function() {
          return s.apply(this.models, arguments)
        },
        get: function(e) {
          if (null != e) return this._byId[e] || this._byId[this.modelId(e.attributes || e)] || e.cid && this._byId[e.cid]
        },
        has: function(e) {
          return null != this.get(e)
        },
        at: function(e) {
          return e < 0 && (e += this.length), this.models[e]
        },
        where: function(e, t) {
          return this[t ? "find" : "filter"](e)
        },
        findWhere: function(e) {
          return this.where(e, !0)
        },
        sort: function(e) {
          var t = this.comparator;
          if (!t) throw new Error("Cannot sort a set without a comparator");
          e || (e = {});
          var i = t.length;
          return n.isFunction(t) && (t = n.bind(t, this)), 1 === i || n.isString(t) ? this.models = this.sortBy(t) : this.models.sort(t), e.silent || this.trigger("sort", this, e), this
        },
        pluck: function(e) {
          return this.map(e + "")
        },
        fetch: function(e) {
          e = n.extend({
            parse: !0
          }, e);
          var t = e.success,
            i = this;
          return e.success = function(n) {
            var r = e.reset ? "reset" : "set";
            i[r](n, e), t && t.call(e.context, i, n, e), i.trigger("sync", i, n, e)
          }, H(this, e), this.sync("read", this, e)
        },
        create: function(e, t) {
          t = t ? n.clone(t) : {};
          var i = t.wait;
          if (!(e = this._prepareModel(e, t))) return !1;
          i || this.add(e, t);
          var r = this,
            s = t.success;
          return t.success = function(e, t, n) {
            i && r.add(e, n), s && s.call(n.context, e, t, n)
          }, e.save(null, t), e
        },
        parse: function(e, t) {
          return e
        },
        clone: function() {
          return new this.constructor(this.models, {
            model: this.model,
            comparator: this.comparator
          })
        },
        modelId: function(e) {
          return e[this.model.prototype.idAttribute || "id"]
        },
        _reset: function() {
          this.length = 0, this.models = [], this._byId = {}
        },
        _prepareModel: function(e, t) {
          if (this._isModel(e)) return e.collection || (e.collection = this), e;
          t = t ? n.clone(t) : {}, t.collection = this;
          var i = new this.model(e, t);
          return i.validationError ? (this.trigger("invalid", this, i.validationError, t), !1) : i
        },
        _removeModels: function(e, t) {
          for (var n = [], i = 0; i < e.length; i++) {
            var r = this.get(e[i]);
            if (r) {
              var s = this.indexOf(r);
              this.models.splice(s, 1), this.length--, delete this._byId[r.cid];
              var o = this.modelId(r.attributes);
              null != o && delete this._byId[o], t.silent || (t.index = s, r.trigger("remove", r, this, t)), n.push(r), this._removeReference(r, t)
            }
          }
          return n
        },
        _isModel: function(e) {
          return e instanceof y
        },
        _addReference: function(e, t) {
          this._byId[e.cid] = e;
          var n = this.modelId(e.attributes);
          null != n && (this._byId[n] = e), e.on("all", this._onModelEvent, this)
        },
        _removeReference: function(e, t) {
          delete this._byId[e.cid];
          var n = this.modelId(e.attributes);
          null != n && delete this._byId[n], this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(e, t, n, i) {
          if (t) {
            if (("add" === e || "remove" === e) && n !== this) return;
            if ("destroy" === e && this.remove(t, i), "change" === e) {
              var r = this.modelId(t.previousAttributes()),
                s = this.modelId(t.attributes);
              r !== s && (null != r && delete this._byId[r], null != s && (this._byId[s] = t))
            }
          }
          this.trigger.apply(this, arguments)
        }
      }), a(b, {
        forEach: 3,
        each: 3,
        map: 3,
        collect: 3,
        reduce: 0,
        foldl: 0,
        inject: 0,
        reduceRight: 0,
        foldr: 0,
        find: 3,
        detect: 3,
        filter: 3,
        select: 3,
        reject: 3,
        every: 3,
        all: 3,
        some: 3,
        any: 3,
        include: 3,
        includes: 3,
        contains: 3,
        invoke: 0,
        max: 3,
        min: 3,
        toArray: 1,
        size: 1,
        first: 3,
        head: 3,
        take: 3,
        initial: 3,
        rest: 3,
        tail: 3,
        drop: 3,
        last: 3,
        without: 0,
        difference: 0,
        indexOf: 3,
        shuffle: 1,
        lastIndexOf: 3,
        isEmpty: 1,
        chain: 1,
        sample: 3,
        partition: 3,
        groupBy: 3,
        countBy: 3,
        sortBy: 3,
        indexBy: 3,
        findIndex: 3,
        findLastIndex: 3
      }, "models");
      var C = t.View = function(e) {
          this.cid = n.uniqueId("view"), n.extend(this, n.pick(e, E)), this._ensureElement(), this.initialize.apply(this, arguments)
        },
        T = /^(\S+)\s*(.*)$/,
        E = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
      n.extend(C.prototype, u, {
        tagName: "div",
        $: function(e) {
          return this.$el.find(e)
        },
        initialize: function() {},
        render: function() {
          return this
        },
        remove: function() {
          return this._removeElement(), this.stopListening(), this
        },
        _removeElement: function() {
          this.$el.remove()
        },
        setElement: function(e) {
          return this.undelegateEvents(), this._setElement(e), this.delegateEvents(), this
        },
        _setElement: function(e) {
          this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0]
        },
        delegateEvents: function(e) {
          if (e || (e = n.result(this, "events")), !e) return this;
          this.undelegateEvents();
          for (var t in e) {
            var i = e[t];
            if (n.isFunction(i) || (i = this[i]), i) {
              var r = t.match(T);
              this.delegate(r[1], r[2], n.bind(i, this))
            }
          }
          return this
        },
        delegate: function(e, t, n) {
          return this.$el.on(e + ".delegateEvents" + this.cid, t, n), this
        },
        undelegateEvents: function() {
          return this.$el && this.$el.off(".delegateEvents" + this.cid), this
        },
        undelegate: function(e, t, n) {
          return this.$el.off(e + ".delegateEvents" + this.cid, t, n), this
        },
        _createElement: function(e) {
          return document.createElement(e)
        },
        _ensureElement: function() {
          if (this.el) this.setElement(n.result(this, "el"));
          else {
            var e = n.extend({}, n.result(this, "attributes"));
            this.id && (e.id = n.result(this, "id")), this.className && (e.class = n.result(this, "className")), this.setElement(this._createElement(n.result(this, "tagName"))), this._setAttributes(e)
          }
        },
        _setAttributes: function(e) {
          this.$el.attr(e)
        }
      }), t.sync = function(e, i, r) {
        var s = S[e];
        n.defaults(r || (r = {}), {
          emulateHTTP: t.emulateHTTP,
          emulateJSON: t.emulateJSON
        });
        var o = {
          type: s,
          dataType: "json"
        };
        if (r.url || (o.url = n.result(i, "url") || D()), null != r.data || !i || "create" !== e && "update" !== e && "patch" !== e || (o.contentType = "application/json", o.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
            model: o.data
          } : {}), r.emulateHTTP && ("PUT" === s || "DELETE" === s || "PATCH" === s)) {
          o.type = "POST", r.emulateJSON && (o.data._method = s);
          var a = r.beforeSend;
          r.beforeSend = function(e) {
            if (e.setRequestHeader("X-HTTP-Method-Override", s), a) return a.apply(this, arguments)
          }
        }
        "GET" === o.type || r.emulateJSON || (o.processData = !1);
        var l = r.error;
        r.error = function(e, t, n) {
          r.textStatus = t, r.errorThrown = n, l && l.call(r.context, e, t, n)
        };
        var c = r.xhr = t.ajax(n.extend(o, r));
        return i.trigger("request", i, c, r), c
      };
      var S = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        delete: "DELETE",
        read: "GET"
      };
      t.ajax = function() {
        return t.$.ajax.apply(t.$, arguments)
      };
      var j = t.Router = function(e) {
          e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
        },
        O = /\((.*?)\)/g,
        A = /(\(\?)?:\w+/g,
        L = /\*\w+/g,
        M = /[\-{}\[\]+?.,\\\^$|#\s]/g;
      n.extend(j.prototype, u, {
        initialize: function() {},
        route: function(e, i, r) {
          n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
          var s = this;
          return t.history.route(e, function(n) {
            var o = s._extractParameters(e, n);
            !1 !== s.execute(r, o, i) && (s.trigger.apply(s, ["route:" + i].concat(o)), s.trigger("route", i, o), t.history.trigger("route", s, i, o))
          }), this
        },
        execute: function(e, t, n) {
          e && e.apply(this, t)
        },
        navigate: function(e, n) {
          return t.history.navigate(e, n), this
        },
        _bindRoutes: function() {
          if (this.routes) {
            this.routes = n.result(this, "routes");
            for (var e, t = n.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
          }
        },
        _routeToRegExp: function(e) {
          return e = e.replace(M, "\\$&").replace(O, "(?:$1)?").replace(A, function(e, t) {
            return t ? e : "([^/?]+)"
          }).replace(L, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(e, t) {
          var i = e.exec(t).slice(1);
          return n.map(i, function(e, t) {
            return t === i.length - 1 ? e || null : e ? decodeURIComponent(e) : null
          })
        }
      });
      var I = t.History = function() {
          this.handlers = [], this.checkUrl = n.bind(this.checkUrl, this), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
        },
        P = /^[#\/]|\s+$/g,
        N = /^\/+|\/+$/g,
        q = /#.*$/;
      I.started = !1, n.extend(I.prototype, u, {
        interval: 50,
        atRoot: function() {
          return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch()
        },
        matchRoot: function() {
          return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root
        },
        decodeFragment: function(e) {
          return decodeURI(e.replace(/%25/g, "%2525"))
        },
        getSearch: function() {
          var e = this.location.href.replace(/#.*/, "").match(/\?.+/);
          return e ? e[0] : ""
        },
        getHash: function(e) {
          var t = (e || this).location.href.match(/#(.*)$/);
          return t ? t[1] : ""
        },
        getPath: function() {
          var e = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
          return "/" === e.charAt(0) ? e.slice(1) : e
        },
        getFragment: function(e) {
          return null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), e.replace(P, "")
        },
        start: function(e) {
          if (I.started) throw new Error("Backbone.history has already been started");
          if (I.started = !0, this.options = n.extend({
              root: "/"
            }, this.options, e), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange, this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(N, "/"), this._wantsHashChange && this._wantsPushState) {
            if (!this._hasPushState && !this.atRoot()) {
              var t = this.root.slice(0, -1) || "/";
              return this.location.replace(t + "#" + this.getPath()), !0
            }
            this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
              replace: !0
            })
          }
          if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
            this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
            var i = document.body,
              r = i.insertBefore(this.iframe, i.firstChild).contentWindow;
            r.document.open(), r.document.close(), r.location.hash = "#" + this.fragment
          }
          var s = window.addEventListener || function(e, t) {
            return attachEvent("on" + e, t)
          };
          if (this._usePushState ? s("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? s("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
        },
        stop: function() {
          var e = window.removeEventListener || function(e, t) {
            return detachEvent("on" + e, t)
          };
          this._usePushState ? e("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && e("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), I.started = !1
        },
        route: function(e, t) {
          this.handlers.unshift({
            route: e,
            callback: t
          })
        },
        checkUrl: function(e) {
          var t = this.getFragment();
          if (t === this.fragment && this.iframe && (t = this.getHash(this.iframe.contentWindow)), t === this.fragment) return !1;
          this.iframe && this.navigate(t), this.loadUrl()
        },
        loadUrl: function(e) {
          return !!this.matchRoot() && (e = this.fragment = this.getFragment(e), n.some(this.handlers, function(t) {
            if (t.route.test(e)) return t.callback(e), !0
          }))
        },
        navigate: function(e, t) {
          if (!I.started) return !1;
          t && !0 !== t || (t = {
            trigger: !!t
          }), e = this.getFragment(e || "");
          var n = this.root;
          "" !== e && "?" !== e.charAt(0) || (n = n.slice(0, -1) || "/");
          var i = n + e;
          if (e = this.decodeFragment(e.replace(q, "")), this.fragment !== e) {
            if (this.fragment = e, this._usePushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, i);
            else {
              if (!this._wantsHashChange) return this.location.assign(i);
              if (this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getHash(this.iframe.contentWindow)) {
                var r = this.iframe.contentWindow;
                t.replace || (r.document.open(), r.document.close()), this._updateHash(r.location, e, t.replace)
              }
            }
            return t.trigger ? this.loadUrl(e) : void 0
          }
        },
        _updateHash: function(e, t, n) {
          if (n) {
            var i = e.href.replace(/(javascript:|#).*$/, "");
            e.replace(i + "#" + t)
          } else e.hash = "#" + t
        }
      }), t.history = new I;
      var R = function(e, t) {
        var i, r = this;
        return i = e && n.has(e, "constructor") ? e.constructor : function() {
          return r.apply(this, arguments)
        }, n.extend(i, r, t), i.prototype = n.create(r.prototype, e), i.prototype.constructor = i, i.__super__ = r.prototype, i
      };
      y.extend = b.extend = j.extend = C.extend = I.extend = R;
      var D = function() {
          throw new Error('A "url" property or function must be specified')
        },
        H = function(e, t) {
          var n = t.error;
          t.error = function(i) {
            n && n.call(t.context, e, i, t), e.trigger("error", e, i, t)
          }
        };
      return t
    })
  }).call(t, n(23))
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  t.default = function(e, t, n, r) {
    var s, o;
    if (arguments.length < 3) throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
    if (void 0 === r && (r = n, n = t, t = "==="), s = {
        "==": function(e, t) {
          return e == t
        },
        "===": function(e, t) {
          return e === t
        },
        "!=": function(e, t) {
          return e != t
        },
        "!==": function(e, t) {
          return e !== t
        },
        "<": function(e, t) {
          return e < t
        },
        ">": function(e, t) {
          return e > t
        },
        "<=": function(e, t) {
          return e <= t
        },
        ">=": function(e, t) {
          return e >= t
        },
        typeof: function(e, t) {
          return (void 0 === e ? "undefined" : i(e)) == t
        }
      }, !s[t]) throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + t);
    return o = s[t](e, n), o ? r.fn(this) : r.inverse(this)
  }
}, function(e, t, n) {
  e.exports = n(84).default
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      s = i(r),
      o = n(45),
      a = i(o),
      l = n(46),
      c = i(l),
      u = n(19),
      d = i(u),
      h = n(25),
      f = i(h),
      p = n(71),
      m = i(p),
      v = n(72),
      g = i(v),
      _ = n(110),
      y = i(_),
      b = n(137),
      w = i(b),
      x = n(138),
      k = i(x),
      C = n(139),
      T = i(C),
      E = n(140),
      S = i(E);
    n(141);
    var j = n(73),
      O = i(j),
      A = n(48),
      L = i(A),
      M = n(5),
      I = i(M),
      P = n(7),
      N = i(P);
    n(42);
    var q = n(30),
      R = i(q);
    n(142);
    O.default.config("https://f7a5bef772c24a82ae98fc393dc433a6@data.awwwards.com/3", {
      whitelistUrls: [/awwwards\.com/, /assets\.awwwards\.com/],
      ignoreErrors: [/Blocked a frame with origin/]
    }).install();
    var D = s.default.View.extend({
      el: "body",
      heightToOpenScroll: 140,
      tooltipUser: null,
      options: {
        searchText: "",
        diffscroll: 70
      },
      events: {
        keydown: "_triggerKeyPress",
        "click .open_login": "openLoginLink",
        "click #version-color": "_changeColor",
        "click .js-toggle": "_toggle",
        "click .bt-gotop": "_goTop",
        "mouseover .hover-animation": "_changeAnimated",
        "mouseout .hover-animation": "_removeAnimation",
        "mouseenter .js-user": "_openTooltip",
        "mouseleave .js-user": "_closeTooltip",
        "click #nav-main": "_stopPropagation",
        "click #nav-main .dropdown span.item": "_slideMenuToggle",
        "click .js-nav-menu": "_openLanguageMenuClick",
        "click .js-nav-main": "openMenu",
        "click .js-close-menu": "closeMenu",
        "click #nav-main a": "closeMenu",
        "click .wrapper": "_wrapperClick",
        "click .js-mobilefilters": "_mobileFilters",
        "click .form-group": "_formClick",
        "click .js-bt-loading": "_showLoadingButton",
        "click .js-social": "_showNetworks",
        "click .navscroll": "_navigationScroll",
        "focus .js-password": "_repeatPass",
        "click .popup": "_popup",
        "click #close_box_bts": "_closeAdminBar",
        "click #open_box_bts": "_openAdminBar"
      },
      initialize: function(e) {
        this.options = Object.assign({}, this.options, e), document.body.classList.contains("style-dark") && (document.getElementById("version-color").checked = "checked"), this._headerBehavior(), this._addMenuUserMobile(), this._registerListeners();
        var t = document.querySelector("header");
        if (t) {
          var n = t.dataset.section;
          n || (n = "all"), this._addSearch(n, this.options.searchText)
        }
        k.default.initialize(), this._addCookieConsent(), (0, S.default)(), this._checkFlashMessage(), L.default.observe()
      },
      _popup: function(e) {
        e.preventDefault();
        var t = e.currentTarget,
          n = t.dataset.link ? t.dataset.link : t.href,
          i = void 0 !== window.screenLeft ? window.screenLeft : screen.left,
          r = void 0 !== window.screenTop ? window.screenTop : screen.top,
          s = document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
          o = document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
          a = window.innerWidth ? window.innerWidth : s,
          l = window.innerHeight ? window.innerHeight : o,
          c = a / 2 - 250 + i,
          u = l / 2 - 250 + r,
          d = window.open(n, "", "scrollbars=yes, width=500, height=500, top=" + u + ", left=" + c);
        window.focus && d.focus()
      },
      _checkFlashMessage: function() {
        var e = document.querySelector(".msg-alert");
        e && e.dataset.message && (e.innerHTML = "<div class='row title'><strong>" + e.dataset.message + "</strong></div>", setTimeout(function() {
          e.classList.add("hidden")
        }, 5e3))
      },
      _addCookieConsent: function() {
        window.cookieconsent.initialise({
          layout: "box-cookies",
          layouts: {
            "box-cookies": '<div class="box-cookies">{{message}}{{close}}</div>'
          },
          content: {
            message: 'This website uses cookies to ensure you get the best experience on our website. <a href="' + I.default.generate("tv_cookies_policy") + '">Learn More</a>.',
            close: "GOT IT!"
          }
        })
      },
      _navigationScroll: function(t) {
        var n, i = t.currentTarget,
          r = i.dataset.idpage,
          s = this.options.diffscroll;
        void 0 !== i.dataset.diffscroll && (s = i.dataset.diffscroll), n = R.default.getOffset(document.getElementById(r)).top - s, e("html, body").stop().animate({
          scrollTop: n
        }, 1e3)
      },
      _addSearch: function(e, t) {
        new y.default({
          section: e,
          searchText: t,
          model: new w.default
        })
      },
      _showLoadingButton: function(e) {
        f.default.addLoading(e.currentTarget)
      },
      _registerListeners: function() {
        a.default.on(c.default.MENU_FILTER, this.closeMenu, this)
      },
      _showNetworks: function(e) {
        e.currentTarget.parentElement.querySelector("ul").classList.toggle("active")
      },
      _addMenuUserMobile: function() {
        var e, t = document.createElement("li");
        if (document.querySelector("#header .logged")) {
          var n = this.el.querySelector("#header .name").textContent,
            i = this.el.querySelector(".bt-menu-user ul").innerHTML;
          e = document.createElement("span"), e.classList.add("item"), e.textContent = n, t.appendChild(e);
          var r = document.createElement("ul");
          r.innerHTML = i, t.appendChild(r), t.classList.add("dropdown", "has-mobile")
        } else e = document.createElement("span"), e.classList.add("item", "open_login"), e.textContent = "Register / Login", t.appendChild(e);
        var s = document.getElementById("menu-main");
        s && s.insertBefore(t, s.firstElementChild)
      },
      _formClick: function(t) {
        var n = t.currentTarget;
        [].forEach.call(this.el.querySelectorAll(".form-group"), function(t) {
          t.classList.remove("has-info"), t.classList.contains("has-error") || t === n || e(t.querySelector(".msg-info")).slideUp()
        });
        var i = n.querySelector(".msg-info");
        n.classList.contains("has-error") ? (n.classList.remove("has-error"), i && (i.style.display = "block")) : (n.classList.add("has-info"), i && e(i).slideDown())
      },
      _goTop: function(t) {
        t.preventDefault(), t.stopPropagation(), e("html, body").animate({
          scrollTop: 0
        }, 800)
      },
      _mobileFilters: function(e) {
        R.default.getWidth() < 700 && (this.el.querySelector(".box-filters").classList.toggle("mobile-show"), this.el.classList.toggle("nav-sidebar-open"), this.el.querySelector(".box-filters").classList.remove("active"), e.stopPropagation(), e.preventDefault())
      },
      _slideMenuToggle: function(t) {
        e(t.currentTarget).next().slideToggle()
      },
      _wrapperClick: function() {
        var e = this.el.querySelector(".box-filters");
        e && setTimeout(function() {
          e.classList.remove("mobile-hide", "mobile-show")
        }, 300), this.closeMenu()
      },
      _stopPropagation: function(e) {
        e.stopPropagation()
      },
      _toggle: function(t) {
        var n = document.getElementById(t.currentTarget.dataset.id);
        e(n).slideToggle()
      },
      _openLanguageMenuClick: function(e) {
        this._openMenu(e.currentTarget)
      },
      _openMenu: function(e) {
        var t = e,
          n = document.getElementById(t.dataset.menuId),
          i = n.dataset.menuName,
          r = n.dataset.menuId,
          s = this.el.querySelectorAll("#nav-main .menu");
        [].forEach.call(s, function(e) {
          e.classList.remove("active")
        }), n.classList.add("active"), t.classList.contains("js-nav-main") ? this.el.querySelector(".js-nav-menu").textContent = i : (t.textContent = i, t.dataset.menuId = r)
      },
      _headerBehavior: function() {
        var e = document.getElementById("bt-submit"),
          t = document.getElementById("js-search-container");
        if (e && t) {
          var n = this;
          setTimeout(function() {
            window.addEventListener("scroll", N.default.throttle(function() {
              var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                t = document.getElementById("js-search-container");
              t && (e > n.heightToOpenScroll ? t.classList.add("show-text") : t.classList.remove("show-text")), document.body.classList.contains("ht-visible") && (e > 70 ? document.body.classList.add("header-fixed") : document.body.classList.remove("header-fixed"))
            }, 100))
          }, 300)
        }
      },
      _triggerKeyPress: function(e) {
        this.trigger("key_press", e.keyCode)
      },
      _changeAnimated: function(e) {
        var t = e.currentTarget;
        t.src = t.dataset.animated
      },
      _removeAnimation: function(e) {
        var t = e.currentTarget;
        t.src = t.dataset.src
      },
      _changeColor: function() {
        var e = "style-dark",
          t = "Activate white option";
        document.body.classList.contains("style-dark") && (t = "Activate black option", e = ""), T.default.set("style_view_page", e, {
          expires: 7
        }), document.querySelector(".box-version .box-version-text").textContent = t, document.body.classList.toggle("style-dark")
      },
      openLogin: function() {
        (new d.default).open()
      },
      openLoginLink: function(e) {
        e.preventDefault(), this.openLogin()
      },
      openMenu: function(t) {
        return this.el.classList.toggle("nav-sidebar-open"), e("html, body").animate({
          scrollTop: 0
        }, 0), this._openMenu(t.currentTarget), !1
      },
      closeMenu: function() {
        this.el.classList.remove("nav-sidebar-open")
      },
      _openTooltip: function(e) {
        var t = R.default.getHeight() / 2,
          n = e.clientY,
          i = t > n ? "tooltip-bottom" : "",
          r = e.currentTarget,
          s = r.dataset.username,
          o = m.default.findOrCreateByUsername(s);
        [].forEach.call(this.el.querySelectorAll(".tooltip-user"), function(e) {
          e.classList.contains("open") ? e.classList.remove("open") : e.parentNode.removeChild(e)
        }), this.tooltipUser = new g.default({
          model: o,
          target: r,
          classBottom: i
        }).render()
      },
      _closeTooltip: function() {
        this.tooltipUser && this.tooltipUser.abort()
      },
      _repeatPass: function() {
        var t = document.getElementById("repeat-pass");
        null === t.offsetParent && e(t).slideToggle()
      },
      _closeAdminBar: function() {
        document.getElementById("box_bts").classList.add("hidden"), document.getElementById("open_box_bts").classList.remove("hidden"), T.default.set("tv_admin_bar", 0)
      },
      _openAdminBar: function() {
        document.getElementById("box_bts").classList.remove("hidden"), document.getElementById("open_box_bts").classList.add("hidden"), T.default.set("tv_admin_bar", 1)
      }
    });
    t.default = D
  }).call(t, n(0))
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), n(99), n(100);
  var i = window.fos && window.fos.Router;
  t.default = i.getInstance()
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(1),
    s = i(r),
    o = n(105),
    a = i(o),
    l = n(106),
    c = i(l);
  n(42);
  var u = s.default.View.extend({
    className: "box-lightbox",
    events: {
      "click .js-lightbox-close": "close",
      "click ": "_closeFromOutside",
      "click .yes": "_confirmationOk",
      "click .no": "close"
    },
    options: {
      close_callback: null,
      remove_after_close: !1,
      extra_info: {}
    },
    isOpen: !1,
    btnClose: null,
    initialize: function(e) {
      this.options = Object.assign({}, this.options, e), this._createCloseButton()
    },
    _createCloseButton: function() {
      this.btnClose = document.createElement("div"), this.btnClose.classList.add("bt-close", "js-lightbox-close")
    },
    openConfirmation: function(e, t, n) {
      if (!this.isOpen) {
        this.isOpen = !0;
        var i = (0, c.default)({
          msg: e,
          button: t
        });
        this.callback_confirmation = n, this.show(i)
      }
    },
    getExtraInfo: function() {
      return this.options.extra_info
    },
    _confirmationOk: function() {
      if (this.close(), this.callback_confirmation) return this.callback_confirmation()
    },
    _empty: function() {
      for (; this.el.hasChildNodes();) this.el.removeChild(this.el.firstChild)
    },
    show: function(e, t) {
      this.el.innerHTML = "", this.el.appendChild(this.btnClose), document.body.appendChild(this.el), a.default.add(this), document.body.classList.add("hidden-y"), t && this._empty(), this.$el.append(e);
      var n = this;
      setTimeout(function() {
        n.el.classList.add("open")
      }, 100)
    },
    close: function() {
      this.options.close_callback && this.options.close_callback(), document.body.classList.remove("hidden-y"), this.el.classList.remove("open"), this.isOpen = !1, this._empty(), a.default.remove();
      var e = this;
      this.options.remove_after_close && setTimeout(function() {
        e.remove()
      }, 500)
    },
    destroy: function() {
      this.close(), this.remove()
    },
    _closeFromOutside: function(e) {
      e.target && e.target.classList.contains("box-lightbox") && this.close()
    }
  });
  t.default = u
}, function(e, t, n) {
  var i, r;
  (function() {
    function n(e) {
      function t(t, n, i, r, s, o) {
        for (; s >= 0 && s < o; s += e) {
          var a = r ? r[s] : s;
          i = n(i, t[a], a, t)
        }
        return i
      }
      return function(n, i, r, s) {
        i = k(i, s, 4);
        var o = !A(n) && x.keys(n),
          a = (o || n).length,
          l = e > 0 ? 0 : a - 1;
        return arguments.length < 3 && (r = n[o ? o[l] : l], l += e), t(n, i, r, o, l, a)
      }
    }

    function s(e) {
      return function(t, n, i) {
        n = C(n, i);
        for (var r = O(t), s = e > 0 ? 0 : r - 1; s >= 0 && s < r; s += e)
          if (n(t[s], s, t)) return s;
        return -1
      }
    }

    function o(e, t, n) {
      return function(i, r, s) {
        var o = 0,
          a = O(i);
        if ("number" == typeof s) e > 0 ? o = s >= 0 ? s : Math.max(s + a, o) : a = s >= 0 ? Math.min(s + 1, a) : s + a + 1;
        else if (n && s && a) return s = n(i, r), i[s] === r ? s : -1;
        if (r !== r) return s = t(p.call(i, o, a), x.isNaN), s >= 0 ? s + o : -1;
        for (s = e > 0 ? o : a - 1; s >= 0 && s < a; s += e)
          if (i[s] === r) return s;
        return -1
      }
    }

    function a(e, t) {
      var n = N.length,
        i = e.constructor,
        r = x.isFunction(i) && i.prototype || d,
        s = "constructor";
      for (x.has(e, s) && !x.contains(t, s) && t.push(s); n--;)(s = N[n]) in e && e[s] !== r[s] && !x.contains(t, s) && t.push(s)
    }
    var l = this,
      c = l._,
      u = Array.prototype,
      d = Object.prototype,
      h = Function.prototype,
      f = u.push,
      p = u.slice,
      m = d.toString,
      v = d.hasOwnProperty,
      g = Array.isArray,
      _ = Object.keys,
      y = h.bind,
      b = Object.create,
      w = function() {},
      x = function(e) {
        return e instanceof x ? e : this instanceof x ? void(this._wrapped = e) : new x(e)
      };
    void 0 !== e && e.exports && (t = e.exports = x), t._ = x, x.VERSION = "1.8.3";
    var k = function(e, t, n) {
        if (void 0 === t) return e;
        switch (null == n ? 3 : n) {
          case 1:
            return function(n) {
              return e.call(t, n)
            };
          case 2:
            return function(n, i) {
              return e.call(t, n, i)
            };
          case 3:
            return function(n, i, r) {
              return e.call(t, n, i, r)
            };
          case 4:
            return function(n, i, r, s) {
              return e.call(t, n, i, r, s)
            }
        }
        return function() {
          return e.apply(t, arguments)
        }
      },
      C = function(e, t, n) {
        return null == e ? x.identity : x.isFunction(e) ? k(e, t, n) : x.isObject(e) ? x.matcher(e) : x.property(e)
      };
    x.iteratee = function(e, t) {
      return C(e, t, 1 / 0)
    };
    var T = function(e, t) {
        return function(n) {
          var i = arguments.length;
          if (i < 2 || null == n) return n;
          for (var r = 1; r < i; r++)
            for (var s = arguments[r], o = e(s), a = o.length, l = 0; l < a; l++) {
              var c = o[l];
              t && void 0 !== n[c] || (n[c] = s[c])
            }
          return n
        }
      },
      E = function(e) {
        if (!x.isObject(e)) return {};
        if (b) return b(e);
        w.prototype = e;
        var t = new w;
        return w.prototype = null, t
      },
      S = function(e) {
        return function(t) {
          return null == t ? void 0 : t[e]
        }
      },
      j = Math.pow(2, 53) - 1,
      O = S("length"),
      A = function(e) {
        var t = O(e);
        return "number" == typeof t && t >= 0 && t <= j
      };
    x.each = x.forEach = function(e, t, n) {
      t = k(t, n);
      var i, r;
      if (A(e))
        for (i = 0, r = e.length; i < r; i++) t(e[i], i, e);
      else {
        var s = x.keys(e);
        for (i = 0, r = s.length; i < r; i++) t(e[s[i]], s[i], e)
      }
      return e
    }, x.map = x.collect = function(e, t, n) {
      t = C(t, n);
      for (var i = !A(e) && x.keys(e), r = (i || e).length, s = Array(r), o = 0; o < r; o++) {
        var a = i ? i[o] : o;
        s[o] = t(e[a], a, e)
      }
      return s
    }, x.reduce = x.foldl = x.inject = n(1), x.reduceRight = x.foldr = n(-1), x.find = x.detect = function(e, t, n) {
      var i;
      if (void 0 !== (i = A(e) ? x.findIndex(e, t, n) : x.findKey(e, t, n)) && -1 !== i) return e[i]
    }, x.filter = x.select = function(e, t, n) {
      var i = [];
      return t = C(t, n), x.each(e, function(e, n, r) {
        t(e, n, r) && i.push(e)
      }), i
    }, x.reject = function(e, t, n) {
      return x.filter(e, x.negate(C(t)), n)
    }, x.every = x.all = function(e, t, n) {
      t = C(t, n);
      for (var i = !A(e) && x.keys(e), r = (i || e).length, s = 0; s < r; s++) {
        var o = i ? i[s] : s;
        if (!t(e[o], o, e)) return !1
      }
      return !0
    }, x.some = x.any = function(e, t, n) {
      t = C(t, n);
      for (var i = !A(e) && x.keys(e), r = (i || e).length, s = 0; s < r; s++) {
        var o = i ? i[s] : s;
        if (t(e[o], o, e)) return !0
      }
      return !1
    }, x.contains = x.includes = x.include = function(e, t, n, i) {
      return A(e) || (e = x.values(e)), ("number" != typeof n || i) && (n = 0), x.indexOf(e, t, n) >= 0
    }, x.invoke = function(e, t) {
      var n = p.call(arguments, 2),
        i = x.isFunction(t);
      return x.map(e, function(e) {
        var r = i ? t : e[t];
        return null == r ? r : r.apply(e, n)
      })
    }, x.pluck = function(e, t) {
      return x.map(e, x.property(t))
    }, x.where = function(e, t) {
      return x.filter(e, x.matcher(t))
    }, x.findWhere = function(e, t) {
      return x.find(e, x.matcher(t))
    }, x.max = function(e, t, n) {
      var i, r, s = -1 / 0,
        o = -1 / 0;
      if (null == t && null != e) {
        e = A(e) ? e : x.values(e);
        for (var a = 0, l = e.length; a < l; a++)(i = e[a]) > s && (s = i)
      } else t = C(t, n), x.each(e, function(e, n, i) {
        ((r = t(e, n, i)) > o || r === -1 / 0 && s === -1 / 0) && (s = e, o = r)
      });
      return s
    }, x.min = function(e, t, n) {
      var i, r, s = 1 / 0,
        o = 1 / 0;
      if (null == t && null != e) {
        e = A(e) ? e : x.values(e);
        for (var a = 0, l = e.length; a < l; a++)(i = e[a]) < s && (s = i)
      } else t = C(t, n), x.each(e, function(e, n, i) {
        ((r = t(e, n, i)) < o || r === 1 / 0 && s === 1 / 0) && (s = e, o = r)
      });
      return s
    }, x.shuffle = function(e) {
      for (var t, n = A(e) ? e : x.values(e), i = n.length, r = Array(i), s = 0; s < i; s++) t = x.random(0, s), t !== s && (r[s] = r[t]), r[t] = n[s];
      return r
    }, x.sample = function(e, t, n) {
      return null == t || n ? (A(e) || (e = x.values(e)), e[x.random(e.length - 1)]) : x.shuffle(e).slice(0, Math.max(0, t))
    }, x.sortBy = function(e, t, n) {
      return t = C(t, n), x.pluck(x.map(e, function(e, n, i) {
        return {
          value: e,
          index: n,
          criteria: t(e, n, i)
        }
      }).sort(function(e, t) {
        var n = e.criteria,
          i = t.criteria;
        if (n !== i) {
          if (n > i || void 0 === n) return 1;
          if (n < i || void 0 === i) return -1
        }
        return e.index - t.index
      }), "value")
    };
    var L = function(e) {
      return function(t, n, i) {
        var r = {};
        return n = C(n, i), x.each(t, function(i, s) {
          var o = n(i, s, t);
          e(r, i, o)
        }), r
      }
    };
    x.groupBy = L(function(e, t, n) {
      x.has(e, n) ? e[n].push(t) : e[n] = [t]
    }), x.indexBy = L(function(e, t, n) {
      e[n] = t
    }), x.countBy = L(function(e, t, n) {
      x.has(e, n) ? e[n]++ : e[n] = 1
    }), x.toArray = function(e) {
      return e ? x.isArray(e) ? p.call(e) : A(e) ? x.map(e, x.identity) : x.values(e) : []
    }, x.size = function(e) {
      return null == e ? 0 : A(e) ? e.length : x.keys(e).length
    }, x.partition = function(e, t, n) {
      t = C(t, n);
      var i = [],
        r = [];
      return x.each(e, function(e, n, s) {
        (t(e, n, s) ? i : r).push(e)
      }), [i, r]
    }, x.first = x.head = x.take = function(e, t, n) {
      if (null != e) return null == t || n ? e[0] : x.initial(e, e.length - t)
    }, x.initial = function(e, t, n) {
      return p.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
    }, x.last = function(e, t, n) {
      if (null != e) return null == t || n ? e[e.length - 1] : x.rest(e, Math.max(0, e.length - t))
    }, x.rest = x.tail = x.drop = function(e, t, n) {
      return p.call(e, null == t || n ? 1 : t)
    }, x.compact = function(e) {
      return x.filter(e, x.identity)
    };
    var M = function(e, t, n, i) {
      for (var r = [], s = 0, o = i || 0, a = O(e); o < a; o++) {
        var l = e[o];
        if (A(l) && (x.isArray(l) || x.isArguments(l))) {
          t || (l = M(l, t, n));
          var c = 0,
            u = l.length;
          for (r.length += u; c < u;) r[s++] = l[c++]
        } else n || (r[s++] = l)
      }
      return r
    };
    x.flatten = function(e, t) {
      return M(e, t, !1)
    }, x.without = function(e) {
      return x.difference(e, p.call(arguments, 1))
    }, x.uniq = x.unique = function(e, t, n, i) {
      x.isBoolean(t) || (i = n, n = t, t = !1), null != n && (n = C(n, i));
      for (var r = [], s = [], o = 0, a = O(e); o < a; o++) {
        var l = e[o],
          c = n ? n(l, o, e) : l;
        t ? (o && s === c || r.push(l), s = c) : n ? x.contains(s, c) || (s.push(c), r.push(l)) : x.contains(r, l) || r.push(l)
      }
      return r
    }, x.union = function() {
      return x.uniq(M(arguments, !0, !0))
    }, x.intersection = function(e) {
      for (var t = [], n = arguments.length, i = 0, r = O(e); i < r; i++) {
        var s = e[i];
        if (!x.contains(t, s)) {
          for (var o = 1; o < n && x.contains(arguments[o], s); o++);
          o === n && t.push(s)
        }
      }
      return t
    }, x.difference = function(e) {
      var t = M(arguments, !0, !0, 1);
      return x.filter(e, function(e) {
        return !x.contains(t, e)
      })
    }, x.zip = function() {
      return x.unzip(arguments)
    }, x.unzip = function(e) {
      for (var t = e && x.max(e, O).length || 0, n = Array(t), i = 0; i < t; i++) n[i] = x.pluck(e, i);
      return n
    }, x.object = function(e, t) {
      for (var n = {}, i = 0, r = O(e); i < r; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
      return n
    }, x.findIndex = s(1), x.findLastIndex = s(-1), x.sortedIndex = function(e, t, n, i) {
      n = C(n, i, 1);
      for (var r = n(t), s = 0, o = O(e); s < o;) {
        var a = Math.floor((s + o) / 2);
        n(e[a]) < r ? s = a + 1 : o = a
      }
      return s
    }, x.indexOf = o(1, x.findIndex, x.sortedIndex), x.lastIndexOf = o(-1, x.findLastIndex), x.range = function(e, t, n) {
      null == t && (t = e || 0, e = 0), n = n || 1;
      for (var i = Math.max(Math.ceil((t - e) / n), 0), r = Array(i), s = 0; s < i; s++, e += n) r[s] = e;
      return r
    };
    var I = function(e, t, n, i, r) {
      if (!(i instanceof t)) return e.apply(n, r);
      var s = E(e.prototype),
        o = e.apply(s, r);
      return x.isObject(o) ? o : s
    };
    x.bind = function(e, t) {
      if (y && e.bind === y) return y.apply(e, p.call(arguments, 1));
      if (!x.isFunction(e)) throw new TypeError("Bind must be called on a function");
      var n = p.call(arguments, 2),
        i = function() {
          return I(e, i, t, this, n.concat(p.call(arguments)))
        };
      return i
    }, x.partial = function(e) {
      var t = p.call(arguments, 1),
        n = function() {
          for (var i = 0, r = t.length, s = Array(r), o = 0; o < r; o++) s[o] = t[o] === x ? arguments[i++] : t[o];
          for (; i < arguments.length;) s.push(arguments[i++]);
          return I(e, n, this, this, s)
        };
      return n
    }, x.bindAll = function(e) {
      var t, n, i = arguments.length;
      if (i <= 1) throw new Error("bindAll must be passed function names");
      for (t = 1; t < i; t++) n = arguments[t], e[n] = x.bind(e[n], e);
      return e
    }, x.memoize = function(e, t) {
      var n = function(i) {
        var r = n.cache,
          s = "" + (t ? t.apply(this, arguments) : i);
        return x.has(r, s) || (r[s] = e.apply(this, arguments)), r[s]
      };
      return n.cache = {}, n
    }, x.delay = function(e, t) {
      var n = p.call(arguments, 2);
      return setTimeout(function() {
        return e.apply(null, n)
      }, t)
    }, x.defer = x.partial(x.delay, x, 1), x.throttle = function(e, t, n) {
      var i, r, s, o = null,
        a = 0;
      n || (n = {});
      var l = function() {
        a = !1 === n.leading ? 0 : x.now(), o = null, s = e.apply(i, r), o || (i = r = null)
      };
      return function() {
        var c = x.now();
        a || !1 !== n.leading || (a = c);
        var u = t - (c - a);
        return i = this, r = arguments, u <= 0 || u > t ? (o && (clearTimeout(o), o = null), a = c, s = e.apply(i, r), o || (i = r = null)) : o || !1 === n.trailing || (o = setTimeout(l, u)), s
      }
    }, x.debounce = function(e, t, n) {
      var i, r, s, o, a, l = function() {
        var c = x.now() - o;
        c < t && c >= 0 ? i = setTimeout(l, t - c) : (i = null, n || (a = e.apply(s, r), i || (s = r = null)))
      };
      return function() {
        s = this, r = arguments, o = x.now();
        var c = n && !i;
        return i || (i = setTimeout(l, t)), c && (a = e.apply(s, r), s = r = null), a
      }
    }, x.wrap = function(e, t) {
      return x.partial(t, e)
    }, x.negate = function(e) {
      return function() {
        return !e.apply(this, arguments)
      }
    }, x.compose = function() {
      var e = arguments,
        t = e.length - 1;
      return function() {
        for (var n = t, i = e[t].apply(this, arguments); n--;) i = e[n].call(this, i);
        return i
      }
    }, x.after = function(e, t) {
      return function() {
        if (--e < 1) return t.apply(this, arguments)
      }
    }, x.before = function(e, t) {
      var n;
      return function() {
        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
      }
    }, x.once = x.partial(x.before, 2);
    var P = !{
        toString: null
      }.propertyIsEnumerable("toString"),
      N = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    x.keys = function(e) {
      if (!x.isObject(e)) return [];
      if (_) return _(e);
      var t = [];
      for (var n in e) x.has(e, n) && t.push(n);
      return P && a(e, t), t
    }, x.allKeys = function(e) {
      if (!x.isObject(e)) return [];
      var t = [];
      for (var n in e) t.push(n);
      return P && a(e, t), t
    }, x.values = function(e) {
      for (var t = x.keys(e), n = t.length, i = Array(n), r = 0; r < n; r++) i[r] = e[t[r]];
      return i
    }, x.mapObject = function(e, t, n) {
      t = C(t, n);
      for (var i, r = x.keys(e), s = r.length, o = {}, a = 0; a < s; a++) i = r[a], o[i] = t(e[i], i, e);
      return o
    }, x.pairs = function(e) {
      for (var t = x.keys(e), n = t.length, i = Array(n), r = 0; r < n; r++) i[r] = [t[r], e[t[r]]];
      return i
    }, x.invert = function(e) {
      for (var t = {}, n = x.keys(e), i = 0, r = n.length; i < r; i++) t[e[n[i]]] = n[i];
      return t
    }, x.functions = x.methods = function(e) {
      var t = [];
      for (var n in e) x.isFunction(e[n]) && t.push(n);
      return t.sort()
    }, x.extend = T(x.allKeys), x.extendOwn = x.assign = T(x.keys), x.findKey = function(e, t, n) {
      t = C(t, n);
      for (var i, r = x.keys(e), s = 0, o = r.length; s < o; s++)
        if (i = r[s], t(e[i], i, e)) return i
    }, x.pick = function(e, t, n) {
      var i, r, s = {},
        o = e;
      if (null == o) return s;
      x.isFunction(t) ? (r = x.allKeys(o), i = k(t, n)) : (r = M(arguments, !1, !1, 1), i = function(e, t, n) {
        return t in n
      }, o = Object(o));
      for (var a = 0, l = r.length; a < l; a++) {
        var c = r[a],
          u = o[c];
        i(u, c, o) && (s[c] = u)
      }
      return s
    }, x.omit = function(e, t, n) {
      if (x.isFunction(t)) t = x.negate(t);
      else {
        var i = x.map(M(arguments, !1, !1, 1), String);
        t = function(e, t) {
          return !x.contains(i, t)
        }
      }
      return x.pick(e, t, n)
    }, x.defaults = T(x.allKeys, !0), x.create = function(e, t) {
      var n = E(e);
      return t && x.extendOwn(n, t), n
    }, x.clone = function(e) {
      return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
    }, x.tap = function(e, t) {
      return t(e), e
    }, x.isMatch = function(e, t) {
      var n = x.keys(t),
        i = n.length;
      if (null == e) return !i;
      for (var r = Object(e), s = 0; s < i; s++) {
        var o = n[s];
        if (t[o] !== r[o] || !(o in r)) return !1
      }
      return !0
    };
    var q = function(e, t, n, i) {
      if (e === t) return 0 !== e || 1 / e == 1 / t;
      if (null == e || null == t) return e === t;
      e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
      var r = m.call(e);
      if (r !== m.call(t)) return !1;
      switch (r) {
        case "[object RegExp]":
        case "[object String]":
          return "" + e == "" + t;
        case "[object Number]":
          return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
        case "[object Date]":
        case "[object Boolean]":
          return +e == +t
      }
      var s = "[object Array]" === r;
      if (!s) {
        if ("object" != typeof e || "object" != typeof t) return !1;
        var o = e.constructor,
          a = t.constructor;
        if (o !== a && !(x.isFunction(o) && o instanceof o && x.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1
      }
      n = n || [], i = i || [];
      for (var l = n.length; l--;)
        if (n[l] === e) return i[l] === t;
      if (n.push(e), i.push(t), s) {
        if ((l = e.length) !== t.length) return !1;
        for (; l--;)
          if (!q(e[l], t[l], n, i)) return !1
      } else {
        var c, u = x.keys(e);
        if (l = u.length, x.keys(t).length !== l) return !1;
        for (; l--;)
          if (c = u[l], !x.has(t, c) || !q(e[c], t[c], n, i)) return !1
      }
      return n.pop(), i.pop(), !0
    };
    x.isEqual = function(e, t) {
      return q(e, t)
    }, x.isEmpty = function(e) {
      return null == e || (A(e) && (x.isArray(e) || x.isString(e) || x.isArguments(e)) ? 0 === e.length : 0 === x.keys(e).length)
    }, x.isElement = function(e) {
      return !(!e || 1 !== e.nodeType)
    }, x.isArray = g || function(e) {
      return "[object Array]" === m.call(e)
    }, x.isObject = function(e) {
      var t = typeof e;
      return "function" === t || "object" === t && !!e
    }, x.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
      x["is" + e] = function(t) {
        return m.call(t) === "[object " + e + "]"
      }
    }), x.isArguments(arguments) || (x.isArguments = function(e) {
      return x.has(e, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (x.isFunction = function(e) {
      return "function" == typeof e || !1
    }), x.isFinite = function(e) {
      return isFinite(e) && !isNaN(parseFloat(e))
    }, x.isNaN = function(e) {
      return x.isNumber(e) && e !== +e
    }, x.isBoolean = function(e) {
      return !0 === e || !1 === e || "[object Boolean]" === m.call(e)
    }, x.isNull = function(e) {
      return null === e
    }, x.isUndefined = function(e) {
      return void 0 === e
    }, x.has = function(e, t) {
      return null != e && v.call(e, t)
    }, x.noConflict = function() {
      return l._ = c, this
    }, x.identity = function(e) {
      return e
    }, x.constant = function(e) {
      return function() {
        return e
      }
    }, x.noop = function() {}, x.property = S, x.propertyOf = function(e) {
      return null == e ? function() {} : function(t) {
        return e[t]
      }
    }, x.matcher = x.matches = function(e) {
      return e = x.extendOwn({}, e),
        function(t) {
          return x.isMatch(t, e)
        }
    }, x.times = function(e, t, n) {
      var i = Array(Math.max(0, e));
      t = k(t, n, 1);
      for (var r = 0; r < e; r++) i[r] = t(r);
      return i
    }, x.random = function(e, t) {
      return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    }, x.now = Date.now || function() {
      return (new Date).getTime()
    };
    var R = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      },
      D = x.invert(R),
      H = function(e) {
        var t = function(t) {
            return e[t]
          },
          n = "(?:" + x.keys(e).join("|") + ")",
          i = RegExp(n),
          r = RegExp(n, "g");
        return function(e) {
          return e = null == e ? "" : "" + e, i.test(e) ? e.replace(r, t) : e
        }
      };
    x.escape = H(R), x.unescape = H(D), x.result = function(e, t, n) {
      var i = null == e ? void 0 : e[t];
      return void 0 === i && (i = n), x.isFunction(i) ? i.call(e) : i
    };
    var F = 0;
    x.uniqueId = function(e) {
      var t = ++F + "";
      return e ? e + t : t
    }, x.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };
    var B = /(.)^/,
      U = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
      },
      $ = /\\|'|\r|\n|\u2028|\u2029/g,
      z = function(e) {
        return "\\" + U[e]
      };
    x.template = function(e, t, n) {
      !t && n && (t = n), t = x.defaults({}, t, x.templateSettings);
      var i = RegExp([(t.escape || B).source, (t.interpolate || B).source, (t.evaluate || B).source].join("|") + "|$", "g"),
        r = 0,
        s = "__p+='";
      e.replace(i, function(t, n, i, o, a) {
        return s += e.slice(r, a).replace($, z), r = a + t.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"), t
      }), s += "';\n", t.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
      try {
        var o = new Function(t.variable || "obj", "_", s)
      } catch (e) {
        throw e.source = s, e
      }
      var a = function(e) {
        return o.call(this, e, x)
      };
      return a.source = "function(" + (t.variable || "obj") + "){\n" + s + "}", a
    }, x.chain = function(e) {
      var t = x(e);
      return t._chain = !0, t
    };
    var W = function(e, t) {
      return e._chain ? x(t).chain() : t
    };
    x.mixin = function(e) {
      x.each(x.functions(e), function(t) {
        var n = x[t] = e[t];
        x.prototype[t] = function() {
          var e = [this._wrapped];
          return f.apply(e, arguments), W(this, n.apply(x, e))
        }
      })
    }, x.mixin(x), x.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
      var t = u[e];
      x.prototype[e] = function() {
        var n = this._wrapped;
        return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], W(this, n)
      }
    }), x.each(["concat", "join", "slice"], function(e) {
      var t = u[e];
      x.prototype[e] = function() {
        return W(this, t.apply(this._wrapped, arguments))
      }
    }), x.prototype.value = function() {
      return this._wrapped
    }, x.prototype.valueOf = x.prototype.toJSON = x.prototype.value, x.prototype.toString = function() {
      return "" + this._wrapped
    }, i = [], void 0 !== (r = function() {
      return x
    }.apply(t, i)) && (e.exports = r)
  }).call(this)
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(e, t, n, i) {
    return new s.default.SafeString(a.default.icon("user-" + e, t, n, i))
  };
  var r = n(3),
    s = i(r),
    o = n(9),
    a = i(o)
}, function(e, t, n) {
  "use strict";

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }(),
    s = "https://assets.awwwards.com",
    o = "/",
    a = function() {
      function e() {
        i(this, e)
      }
      return r(e, null, [{
        key: "asset",
        value: function(e) {
          return e ? s.replace(/\/$/g, "") + "/" + e.replace(/^\//g, "") : ""
        }
      }, {
        key: "assetTv",
        value: function(e) {
          return e ? "string" != typeof e ? "" : new RegExp("^http", "i").test(e) ? e : s.replace(/\/$/g, "") + "/awards/" + e.replace(/^\//g, "") : ""
        }
      }, {
        key: "assetLocal",
        value: function(e) {
          return e ? o.replace(/\/$/g, "") + "/" + e.replace(/^\//g, "") : ""
        }
      }, {
        key: "thumb",
        value: function(e, t) {
          if (!e) return "";
          var n = e.replace(/^\//g, "");
          return this.assetTv("media/cache/" + t + "/" + n)
        }
      }, {
        key: "isAnimated",
        value: function(e) {
          if (!e) return !1;
          var t = ["gif", "mp4", "webm"],
            n = e.split(".").pop();
          return -1 != t.indexOf(n)
        }
      }, {
        key: "isVideo",
        value: function(e) {
          var t = ["mp4", "webm"];
          return e && -1 != t.indexOf(e.split(".").pop())
        }
      }, {
        key: "typeVideo",
        value: function(e) {
          return e ? "mp4" === e.split(".").pop() ? "video/mp4" : "video/webm" : ""
        }
      }, {
        key: "getStaticVersion",
        value: function(e) {
          return e.substr(0, e.lastIndexOf(".")) + "_static.jpeg"
        }
      }, {
        key: "icon",
        value: function(e, t, n, i) {
          var r = "/bundles/tvweb/images/sprite-icons.svg#" + e;
          return '<svg class="ico-svg' + (i && "string" == typeof i ? " " + i : "") + '" viewbox="0 0 ' + t + " " + n + '" xmlns="http://www.w3.org/2000/svg"><use xlink:href="' + r + '" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>'
        }
      }, {
        key: "getImageInfo",
        value: function(e, t) {
          if (!e) return {
            static: t,
            animated: t,
            is_animated: !1,
            is_video: !1
          };
          var n = this.isAnimated(e);
          return {
            static: n ? this.getStaticVersion(e) : e,
            animated: e,
            is_animated: n,
            is_video: this.isVideo(e)
          }
        }
      }]), e
    }();
  t.default = a
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(1),
    s = i(r),
    o = n(7),
    a = i(o),
    l = n(45),
    c = i(l),
    u = n(27),
    d = i(u),
    h = n(46),
    f = i(h);
  n(42);
  var p = s.default.View.extend({
    options: {
      isTheOwnerLoggedIn: !1,
      models: [],
      ownerOptions: !1
    },
    initialize: function(e) {
      this.options = Object.assign({}, this.options, e);
      var t = this;
      this._loadEvents();
      var n = this.el.dataset.models;
      if (n) {
        n = JSON.parse(n);
        var i = this.$el.children();
        a.default.each(i, function(e, i) {
          t._getItemView(n[i], e).render()
        })
      } else {
        var i = this.$el.children();
        this._generateItemView(i)
      }
    },
    appendElements: function(e) {
      this._generateItemView(e.children), this.el.appendChild(e)
    },
    _generateItemView: function(e) {
      var t = this;
      a.default.each(e, function(e, n) {
        var i = e.dataset.model;
        if (i) {
          var r = JSON.parse(i),
            s = t._getItemView(r, e);
          s && s.render()
        }
      })
    },
    _getItemView: function(e, t) {
      var n = {
        el: t,
        isTheOwnerLoggedIn: this.options.isTheOwnerLoggedIn,
        ownerOptions: this.options.ownerOptions
      };
      return d.default.create(e, n)
    },
    _loadEvents: function() {
      c.default.on(f.default.SHOW_SEARCH_RESULTS, this.hideItems, this), c.default.on(f.default.REMOVE_SEARCH_RESULTS, this.showItems, this)
    },
    hideItems: function() {
      this.el.style.display = "none"
    },
    showItems: function() {
      this.el.style.display = "block"
    }
  });
  t.default = p
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(e, t) {
    return r.default.generate(e, t.hash)
  };
  var i = n(5),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i)
}, , function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = {
    username: "",
    displayName: "",
    id: "",
    isUserLoggedIn: !1,
    initialize: function() {
      this.setUser()
    },
    isLoggedIn: function() {
      return this.isUserLoggedIn
    },
    isSameUserLoggedIn: function(e) {
      return e > 0 && e == this.id
    },
    isSameUserLoggedInByUsername: function(e) {
      return this.username && e == this.username
    },
    isOneOfThese: function(e) {
      return !!this.isUserLoggedIn && -1 !== e.indexOf(parseInt(this.id))
    },
    setUser: function() {
      var e = document.getElementById("js-user-details");
      if (e || (e = document.querySelector(".logged")), e) {
        var t = JSON.parse(e.dataset.user);
        this.username = t.username, this.displayName = t.displayName, this.id = t.id, this.isUserLoggedIn = !0
      }
    }
  };
  i.initialize(), t.default = i
}, , , , , function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(e, t, n, i) {
    return new a.default.SafeString(s.default.icon(e, t, n, i))
  };
  var r = n(9),
    s = i(r),
    o = n(3),
    a = i(o)
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      s = i(r),
      o = n(83),
      a = i(o),
      l = n(101),
      c = i(l),
      u = n(103),
      d = i(u),
      h = n(6),
      f = i(h),
      p = s.default.View.extend({
        className: "box-content-login",
        pages: {},
        loading: null,
        events: {
          "click .js-tab-login": "_showTabLogin",
          "click .js-register": "_showTabRegister",
          "click .js-forgot-password": "_showForgotPassword"
        },
        open: function() {
          (new f.default).show(this.render().el)
        },
        openWithFloatingObjects: function() {
          (new f.default).show(this.renderWithFloatingObjects().el)
        },
        _showTabLogin: function(e) {
          e.preventDefault();
          var t = e.currentTarget.dataset.tab;
          this._changeToTab(t)
        },
        _changeToTab: function(t) {
          e(".js-tab-form").hide(), e("#" + t).fadeIn()
        },
        _showLoading: function() {
          this.$(".js-tab-form").hide(), e(this.loading).show()
        },
        _showTabRegister: function(e) {
          if (e.preventDefault(), this.el.querySelector("#tab-register")) return void this._changeToTab("tab-register");
          this._showLoading();
          var t = new c.default;
          this._addEventsToView(t), this.pages.register = t, this.pages.register.render()
        },
        _showForgotPassword: function(e) {
          if (e.preventDefault(), this.el.querySelector("#tab-forgot")) return void this._changeToTab("tab-forgot");
          this._showLoading();
          var t = new d.default;
          this._addEventsToView(t), this.pages.forgot_password = t, this.pages.forgot_password.render()
        },
        _addEventsToView: function(e) {
          e.on("loaded", this._renderView, this), e.on("show_loading", this._showLoadingView, this), e.on("hide_loading", this._hideLoadingView, this)
        },
        _showLoadingView: function(e) {
          e.el.style.display = "none", this.loading.style.display = "block"
        },
        _hideLoadingView: function(t) {
          t.el.style.display = "block", e(this.loading).fadeOut()
        },
        _renderView: function(t) {
          this.$(".box-login").append(t.$el), e(this.loading).fadeOut()
        },
        renderWithFloatingObjects: function() {
          return this.$el.html((0, a.default)({
            from_url: window.location.href,
            floating_objects: !0
          })), this.loading = this.el.querySelector(".box-msg"), this
        },
        render: function() {
          return this.$el.html((0, a.default)({
            from_url: window.location.href
          })), this.loading = this.el.querySelector(".box-msg"), this
        }
      });
    t.default = p
  }).call(t, n(0))
}, , , , function(e, t) {
  var n;
  n = function() {
    return this
  }();
  try {
    n = n || Function("return this")() || (0, eval)("this")
  } catch (e) {
    "object" == typeof window && (n = window)
  }
  e.exports = n
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return d[e]
  }

  function r(e) {
    for (var t = 1; t < arguments.length; t++)
      for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
    return e
  }

  function s(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      if (e[n] === t) return n;
    return -1
  }

  function o(e) {
    if ("string" != typeof e) {
      if (e && e.toHTML) return e.toHTML();
      if (null == e) return "";
      if (!e) return e + "";
      e = "" + e
    }
    return f.test(e) ? e.replace(h, i) : e
  }

  function a(e) {
    return !e && 0 !== e || !(!v(e) || 0 !== e.length)
  }

  function l(e) {
    var t = r({}, e);
    return t._parent = e, t
  }

  function c(e, t) {
    return e.path = t, e
  }

  function u(e, t) {
    return (e ? e + "." : "") + t
  }
  t.__esModule = !0, t.extend = r, t.indexOf = s, t.escapeExpression = o, t.isEmpty = a, t.createFrame = l, t.blockParams = c, t.appendContextPath = u;
  var d = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;",
      "=": "&#x3D;"
    },
    h = /[&<>"'`=]/g,
    f = /[&<>"'`=]/,
    p = Object.prototype.toString;
  t.toString = p;
  var m = function(e) {
    return "function" == typeof e
  };
  m(/x/) && (t.isFunction = m = function(e) {
    return "function" == typeof e && "[object Function]" === p.call(e)
  }), t.isFunction = m;
  var v = Array.isArray || function(e) {
    return !(!e || "object" != typeof e) && "[object Array]" === p.call(e)
  };
  t.isArray = v
}, function(e, t, n) {
  "use strict";

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function r(e, t) {
    if (t = t || 1e3, e.classList.remove("is-loading"), e.classList.contains("active")) var n = e.dataset.textStart;
    else var n = e.dataset.textEnd;
    setTimeout(function() {
      e.querySelector(".js-bt-content") && (e.querySelector(".js-bt-content").textContent = n), e.classList.toggle("active")
    }, t)
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var s = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    }
    return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }();
  t.loadFollowUnfollow = r;
  var o = function() {
    function e() {
      i(this, e)
    }
    return s(e, null, [{
      key: "addLoading",
      value: function(e) {
        var t = document.createElement("div");
        t.classList.add("bt-load"), e.appendChild(t), e.classList.add("is-loading")
      }
    }, {
      key: "addOne",
      value: function(e) {
        if (e.classList.add("active"), e.querySelector(".number")) {
          var t = parseInt(e.querySelector(".number").textContent) + 1;
          e.querySelector(".number").textContent = t.toString()
        }
      }
    }, {
      key: "removeLoading",
      value: function(e) {
        e.classList.remove("is-loading", "active"), e.querySelector(".bt-load").remove()
      }
    }, {
      key: "isLoading",
      value: function(e) {
        return e.classList.contains("is-loading")
      }
    }, {
      key: "load",
      value: function(e) {
        var t = document.createElement("div");
        if (t.classList.add("bt-load"), e.appendChild(t), e.classList.add("is-loading"), "loading" !== e.dataset.button) {
          e.classList.contains("active") ? setTimeout(function() {
            e.classList.remove("is-loading"), e.classList.remove("active"), e.querySelector(".bt-content").textContent = e.dataset.textStart
          }, 1e3) : setTimeout(function() {
            e.classList.remove("is-loading"), e.classList.add("active"), e.querySelector(".bt-content").textContent = e.dataset.textEnd
          }, 1e3)
        }
      }
    }]), e
  }();
  t.default = o
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      s = i(r),
      o = n(7),
      a = i(o),
      l = n(13),
      c = i(l),
      u = n(19),
      d = i(u),
      h = n(5),
      f = i(h),
      p = n(25),
      m = s.default.View.extend({
        el: "body",
        events: {
          "click .js-follow-user": "_followUser"
        },
        initialize: function() {
          this.updateFollows()
        },
        followById: function(e) {
          var t = this;
          a.default.each(e, function(e) {
            e && t._updateButtonForUser(t.el.querySelector('.js-user-following[data-user-id="' + e + '"]'))
          }, this)
        },
        updateFollows: function() {
          if (c.default.isLoggedIn()) {
            var t = this,
              n = this._getUserIds();
            0 !== n.length && e.ajax({
              type: "POST",
              data: {
                ids: n
              },
              url: f.default.generate("tv_user_check_followers"),
              success: function(e) {
                t.followById(e)
              }
            })
          }
        },
        _getUserIds: function() {
          var e = [];
          return [].forEach.call(this.el.querySelectorAll(".js-user-following"), function(t) {
            e.push(t.dataset.userId)
          }), e
        },
        _updateButtonForUser: function(e) {
          e && ((0, p.loadFollowUnfollow)(e, 1), e.href = f.default.generate("tv_user_unfollow", {
            username: e.dataset.username
          }))
        },
        _followUser: function(t) {
          if (t.preventDefault(), !c.default.isLoggedIn()) {
            return void(new d.default).open()
          }
          var n = t.currentTarget,
            i = n.href,
            r = n.classList.contains("active");
          (0, p.loadFollowUnfollow)(n, 1), e.ajax({
            type: "POST",
            url: i,
            success: function(e) {
              if (e) {
                var t = r ? "tv_user_follow" : "tv_user_unfollow";
                n.href = f.default.generate(t, {
                  username: n.dataset.username
                })
              }
            }
          })
        }
      });
    t.default = m
  }).call(t, n(0))
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function r(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var s = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }(),
    o = n(76),
    a = i(o),
    l = n(115),
    c = i(l),
    u = n(44),
    d = i(u),
    h = n(127),
    f = i(h),
    p = n(128),
    m = i(p),
    v = n(129),
    g = i(v),
    _ = n(134),
    y = i(_),
    b = n(81),
    w = i(b),
    x = {
      submission: {
        view: w.default,
        model: d.default
      },
      collection: {
        view: c.default,
        model: a.default
      },
      post: {
        view: w.default,
        model: f.default
      },
      external_element: {
        view: g.default,
        model: m.default
      },
      activity: {
        view: w.default,
        model: y.default
      }
    },
    k = function() {
      function e() {
        r(this, e)
      }
      return s(e, null, [{
        key: "create",
        value: function(e, t) {
          if (x.hasOwnProperty(e.type)) {
            var n = x[e.type];
            return t.model = new n.model(e), new n.view(t)
          }
        }
      }]), e
    }();
  t.default = k
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(e, t) {
    return r.default.thumb(e, t)
  };
  var i = n(9),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i)
}, function(e, t, n) {
  (function(e) {
    /*!
    Chosen, a Select Box Enhancer for jQuery and Prototype
    by Patrick Filler for Harvest, http://getharvest.com

    Version 1.2.0
    Full source at https://github.com/harvesthq/chosen
    Copyright (c) 2011-2014 Harvest http://getharvest.com

    MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
    This file is generated by `grunt build`, do not edit it by hand.
    */
    (function() {
      var t, n, i, r, s, o = {}.hasOwnProperty,
        a = function(e, t) {
          function n() {
            this.constructor = e
          }
          for (var i in t) o.call(t, i) && (e[i] = t[i]);
          return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        };
      r = function() {
        function e() {
          this.options_index = 0, this.parsed = []
        }
        return e.prototype.add_node = function(e) {
          return "OPTGROUP" === e.nodeName.toUpperCase() ? this.add_group(e) : this.add_option(e)
        }, e.prototype.add_group = function(e) {
          var t, n, i, r, s, o;
          for (t = this.parsed.length, this.parsed.push({
              array_index: t,
              group: !0,
              label: this.escapeExpression(e.label),
              children: 0,
              disabled: e.disabled
            }), s = e.childNodes, o = [], i = 0, r = s.length; i < r; i++) n = s[i], o.push(this.add_option(n, t, e.disabled));
          return o
        }, e.prototype.add_option = function(e, t, n) {
          if ("OPTION" === e.nodeName.toUpperCase()) return "" !== e.text ? (null != t && (this.parsed[t].children += 1), this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: e.value,
            text: e.text,
            html: e.innerHTML,
            selected: e.selected,
            disabled: !0 === n ? n : e.disabled,
            group_array_index: t,
            classes: e.className,
            style: e.style.cssText
          })) : this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: !0
          }), this.options_index += 1
        }, e.prototype.escapeExpression = function(e) {
          var t, n;
          return null == e || !1 === e ? "" : /[\&\<\>\"\'\`]/.test(e) ? (t = {
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
          }, n = /&(?!\w+;)|[\<\>\"\'\`]/g, e.replace(n, function(e) {
            return t[e] || "&amp;"
          })) : e
        }, e
      }(), r.select_to_array = function(e) {
        var t, n, i, s, o;
        for (n = new r, o = e.childNodes, i = 0, s = o.length; i < s; i++) t = o[i], n.add_node(t);
        return n.parsed
      }, n = function() {
        function e(t, n) {
          this.form_field = t, this.options = null != n ? n : {}, e.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers())
        }
        return e.prototype.set_default_values = function() {
          var e = this;
          return this.click_test_action = function(t) {
            return e.test_active_click(t)
          }, this.activate_action = function(t) {
            return e.activate_field(t)
          }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, this.group_search = null == this.options.group_search || this.options.group_search, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options, this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options
        }, e.prototype.set_default_text = function() {
          return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || e.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || e.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || e.default_no_result_text
        }, e.prototype.mouse_enter = function() {
          return this.mouse_on_container = !0
        }, e.prototype.mouse_leave = function() {
          return this.mouse_on_container = !1
        }, e.prototype.input_focus = function(e) {
          var t = this;
          if (this.is_multiple) {
            if (!this.active_field) return setTimeout(function() {
              return t.container_mousedown()
            }, 50)
          } else if (!this.active_field) return this.activate_field()
        }, e.prototype.input_blur = function(e) {
          var t = this;
          if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function() {
            return t.blur_test()
          }, 100)
        }, e.prototype.results_option_build = function(e) {
          var t, n, i, r, s;
          for (t = "", s = this.results_data, i = 0, r = s.length; i < r; i++) n = s[i], n.group ? t += this.result_add_group(n) : t += this.result_add_option(n), (null != e ? e.first : void 0) && (n.selected && this.is_multiple ? this.choice_build(n) : n.selected && !this.is_multiple && this.single_set_selected_text(n.text));
          return t
        }, e.prototype.result_add_option = function(e) {
          var t, n;
          return e.search_match && this.include_option_in_results(e) ? (t = [], e.disabled || e.selected && this.is_multiple || t.push("active-result"), !e.disabled || e.selected && this.is_multiple || t.push("disabled-result"), e.selected && t.push("result-selected"), null != e.group_array_index && t.push("group-option"), "" !== e.classes && t.push(e.classes), n = document.createElement("li"), n.className = t.join(" "), n.style.cssText = e.style, n.setAttribute("data-option-array-index", e.array_index), n.innerHTML = e.search_text, this.outerHTML(n)) : ""
        }, e.prototype.result_add_group = function(e) {
          var t;
          return (e.search_match || e.group_match) && e.active_options > 0 ? (t = document.createElement("li"), t.className = "group-result", t.innerHTML = e.search_text, this.outerHTML(t)) : ""
        }, e.prototype.results_update_field = function() {
          if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing) return this.winnow_results()
        }, e.prototype.reset_single_select_options = function() {
          var e, t, n, i, r;
          for (i = this.results_data, r = [], t = 0, n = i.length; t < n; t++) e = i[t], e.selected ? r.push(e.selected = !1) : r.push(void 0);
          return r
        }, e.prototype.results_toggle = function() {
          return this.results_showing ? this.results_hide() : this.results_show()
        }, e.prototype.results_search = function(e) {
          return this.results_showing ? this.winnow_results() : this.results_show()
        }, e.prototype.winnow_results = function() {
          var e, t, n, i, r, s, o, a, l, c, u, d;
          for (this.no_results_clear(), i = 0, s = this.get_search_text(), e = s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), l = new RegExp(e, "i"), n = this.get_search_regex(e), d = this.results_data, c = 0, u = d.length; c < u; c++) t = d[c], t.search_match = !1, r = null, this.include_option_in_results(t) && (t.group && (t.group_match = !1, t.active_options = 0), null != t.group_array_index && this.results_data[t.group_array_index] && (r = this.results_data[t.group_array_index], 0 === r.active_options && r.search_match && (i += 1), r.active_options += 1), t.group && !this.group_search || (t.search_text = t.group ? t.label : t.text, t.search_match = this.search_string_match(t.search_text, n), t.search_match && !t.group && (i += 1), t.search_match ? (s.length && (o = t.search_text.search(l), a = t.search_text.substr(0, o + s.length) + "</em>" + t.search_text.substr(o + s.length), t.search_text = a.substr(0, o) + "<em>" + a.substr(o)), null != r && (r.group_match = !0)) : null != t.group_array_index && this.results_data[t.group_array_index].search_match && (t.search_match = !0)));
          return this.result_clear_highlight(), i < 1 && s.length ? (this.update_results_content(""), this.no_results(s)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        }, e.prototype.get_search_regex = function(e) {
          var t;
          return t = this.search_contains ? "" : "^", new RegExp(t + e, "i")
        }, e.prototype.search_string_match = function(e, t) {
          var n, i, r, s;
          if (t.test(e)) return !0;
          if (this.enable_split_word_search && (e.indexOf(" ") >= 0 || 0 === e.indexOf("[")) && (i = e.replace(/\[|\]/g, "").split(" "), i.length))
            for (r = 0, s = i.length; r < s; r++)
              if (n = i[r], t.test(n)) return !0
        }, e.prototype.choices_count = function() {
          var e, t, n, i;
          if (null != this.selected_option_count) return this.selected_option_count;
          for (this.selected_option_count = 0, i = this.form_field.options, t = 0, n = i.length; t < n; t++) e = i[t], e.selected && (this.selected_option_count += 1);
          return this.selected_option_count
        }, e.prototype.choices_click = function(e) {
          if (e.preventDefault(), !this.results_showing && !this.is_disabled) return this.results_show()
        }, e.prototype.keyup_checker = function(e) {
          var t, n;
          switch (t = null != (n = e.which) ? n : e.keyCode, this.search_field_scale(), t) {
            case 8:
              if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
              if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
              break;
            case 13:
              if (e.preventDefault(), this.results_showing) return this.result_select(e);
              break;
            case 27:
              return this.results_showing && this.results_hide(), !0;
            case 9:
            case 38:
            case 40:
            case 16:
            case 91:
            case 17:
              break;
            default:
              return this.results_search()
          }
        }, e.prototype.clipboard_event_checker = function(e) {
          var t = this;
          return setTimeout(function() {
            return t.results_search()
          }, 50)
        }, e.prototype.container_width = function() {
          return null != this.options.width ? this.options.width : this.form_field.offsetWidth + "px"
        }, e.prototype.include_option_in_results = function(e) {
          return !(this.is_multiple && !this.display_selected_options && e.selected) && (!(!this.display_disabled_options && e.disabled) && !e.empty)
        }, e.prototype.search_results_touchstart = function(e) {
          return this.touch_started = !0, this.search_results_mouseover(e)
        }, e.prototype.search_results_touchmove = function(e) {
          return this.touch_started = !1, this.search_results_mouseout(e)
        }, e.prototype.search_results_touchend = function(e) {
          if (this.touch_started) return this.search_results_mouseup(e)
        }, e.prototype.outerHTML = function(e) {
          var t;
          return e.outerHTML ? e.outerHTML : (t = document.createElement("div"), t.appendChild(e), t.innerHTML)
        }, e.browser_is_supported = function() {
          return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !/iP(od|hone)/i.test(window.navigator.userAgent) && (!/Android/i.test(window.navigator.userAgent) || !/Mobile/i.test(window.navigator.userAgent))
        }, e.default_multiple_text = "Select Some Options", e.default_single_text = "Select an Option", e.default_no_result_text = "No results match", e
      }(), t = e, t.fn.extend({
        chosen: function(e) {
          return n.browser_is_supported() ? this.each(function(n) {
            var r, s;
            r = t(this), s = r.data("chosen"), "destroy" === e && s instanceof i ? s.destroy() : s instanceof i || r.data("chosen", new i(this, e))
          }) : this
        }
      }), i = function(e) {
        function n() {
          return s = n.__super__.constructor.apply(this, arguments)
        }
        return a(n, e), n.prototype.setup = function() {
          return this.form_field_jq = t(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        }, n.prototype.set_up_html = function() {
          var e, n;
          return e = ["chosen-container"], e.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl"), n = {
            class: e.join(" "),
            style: "width: " + this.container_width() + ";",
            title: this.form_field.title
          }, this.form_field.id.length && (n.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = t("<div />", n), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("chosen:ready", {
            chosen: this
          })
        }, n.prototype.register_observers = function() {
          var e = this;
          return this.container.bind("touchstart.chosen", function(t) {
            e.container_mousedown(t)
          }), this.container.bind("touchend.chosen", function(t) {
            e.container_mouseup(t)
          }), this.container.bind("mousedown.chosen", function(t) {
            e.container_mousedown(t)
          }), this.container.bind("mouseup.chosen", function(t) {
            e.container_mouseup(t)
          }), this.container.bind("mouseenter.chosen", function(t) {
            e.mouse_enter(t)
          }), this.container.bind("mouseleave.chosen", function(t) {
            e.mouse_leave(t)
          }), this.search_results.bind("mouseup.chosen", function(t) {
            e.search_results_mouseup(t)
          }), this.search_results.bind("mouseover.chosen", function(t) {
            e.search_results_mouseover(t)
          }), this.search_results.bind("mouseout.chosen", function(t) {
            e.search_results_mouseout(t)
          }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(t) {
            e.search_results_mousewheel(t)
          }), this.search_results.bind("touchstart.chosen", function(t) {
            e.search_results_touchstart(t)
          }), this.search_results.bind("touchmove.chosen", function(t) {
            e.search_results_touchmove(t)
          }), this.search_results.bind("touchend.chosen", function(t) {
            e.search_results_touchend(t)
          }), this.form_field_jq.bind("chosen:updated.chosen", function(t) {
            e.results_update_field(t)
          }), this.form_field_jq.bind("chosen:activate.chosen", function(t) {
            e.activate_field(t)
          }), this.form_field_jq.bind("chosen:open.chosen", function(t) {
            e.container_mousedown(t)
          }), this.form_field_jq.bind("chosen:close.chosen", function(t) {
            e.input_blur(t)
          }), this.search_field.bind("blur.chosen", function(t) {
            e.input_blur(t)
          }), this.search_field.bind("keyup.chosen", function(t) {
            e.keyup_checker(t)
          }), this.search_field.bind("keydown.chosen", function(t) {
            e.keydown_checker(t)
          }), this.search_field.bind("focus.chosen", function(t) {
            e.input_focus(t)
          }), this.search_field.bind("cut.chosen", function(t) {
            e.clipboard_event_checker(t)
          }), this.search_field.bind("paste.chosen", function(t) {
            e.clipboard_event_checker(t)
          }), this.is_multiple ? this.search_choices.bind("click.chosen", function(t) {
            e.choices_click(t)
          }) : this.container.bind("click.chosen", function(e) {
            e.preventDefault()
          })
        }, n.prototype.destroy = function() {
          return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, n.prototype.search_field_disabled = function() {
          return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        }, n.prototype.container_mousedown = function(e) {
          if (!this.is_disabled && (e && "mousedown" === e.type && !this.results_showing && e.preventDefault(), null == e || !t(e.target).hasClass("search-choice-close"))) return this.active_field ? this.is_multiple || !e || t(e.target)[0] !== this.selected_item[0] && !t(e.target).parents("a.chosen-single").length || (e.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), t(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field()
        }, n.prototype.container_mouseup = function(e) {
          if ("ABBR" === e.target.nodeName && !this.is_disabled) return this.results_reset(e)
        }, n.prototype.search_results_mousewheel = function(e) {
          var t;
          if (e.originalEvent && (t = e.originalEvent.deltaY || -e.originalEvent.wheelDelta || e.originalEvent.detail), null != t) return e.preventDefault(), "DOMMouseScroll" === e.type && (t *= 40), this.search_results.scrollTop(t + this.search_results.scrollTop())
        }, n.prototype.blur_test = function(e) {
          if (!this.active_field && this.container.hasClass("chosen-container-active")) return this.close_field()
        }, n.prototype.close_field = function() {
          return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, n.prototype.activate_field = function() {
          return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, n.prototype.test_active_click = function(e) {
          var n;
          return n = t(e.target).closest(".chosen-container"), n.length && this.container[0] === n[0] ? this.active_field = !0 : this.close_field()
        }, n.prototype.results_build = function() {
          return this.parsing = !0, this.selected_option_count = null, this.results_data = r.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
            first: !0
          })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
        }, n.prototype.result_do_highlight = function(e) {
          var t, n, i, r, s;
          if (e.length) {
            if (this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted"), i = parseInt(this.search_results.css("maxHeight"), 10), s = this.search_results.scrollTop(), r = i + s, n = this.result_highlight.position().top + this.search_results.scrollTop(), (t = n + this.result_highlight.outerHeight()) >= r) return this.search_results.scrollTop(t - i > 0 ? t - i : 0);
            if (n < s) return this.search_results.scrollTop(n)
          }
        }, n.prototype.result_clear_highlight = function() {
          return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, n.prototype.results_show = function() {
          return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
            chosen: this
          }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
            chosen: this
          }))
        }, n.prototype.update_results_content = function(e) {
          return this.search_results.html(e)
        }, n.prototype.results_hide = function() {
          return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
            chosen: this
          })), this.results_showing = !1
        }, n.prototype.set_tab_index = function(e) {
          var t;
          if (this.form_field.tabIndex) return t = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = t
        }, n.prototype.set_label_behavior = function() {
          var e = this;
          if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = t("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0) return this.form_field_label.bind("click.chosen", function(t) {
            return e.is_multiple ? e.container_mousedown(t) : e.activate_field()
          })
        }, n.prototype.show_search_field_default = function() {
          return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, n.prototype.search_results_mouseup = function(e) {
          var n;
          if (n = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first(), n.length) return this.result_highlight = n, this.result_select(e), this.search_field.focus()
        }, n.prototype.search_results_mouseover = function(e) {
          var n;
          if (n = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first()) return this.result_do_highlight(n)
        }, n.prototype.search_results_mouseout = function(e) {
          if (t(e.target).hasClass("active-result")) return this.result_clear_highlight()
        }, n.prototype.choice_build = function(e) {
          var n, i, r = this;
          return n = t("<li />", {
            class: "search-choice"
          }).html("<span>" + e.html + "</span>"), e.disabled ? n.addClass("search-choice-disabled") : (i = t("<a />", {
            class: "search-choice-close",
            "data-option-array-index": e.array_index
          }), i.bind("click.chosen", function(e) {
            return r.choice_destroy_link_click(e)
          }), n.append(i)), this.search_container.before(n)
        }, n.prototype.choice_destroy_link_click = function(e) {
          if (e.preventDefault(), e.stopPropagation(), !this.is_disabled) return this.choice_destroy(t(e.target))
        }, n.prototype.choice_destroy = function(e) {
          if (this.result_deselect(e[0].getAttribute("data-option-array-index"))) return this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), e.parents("li").first().remove(), this.search_field_scale()
        }, n.prototype.results_reset = function() {
          if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field) return this.results_hide()
        }, n.prototype.results_reset_cleanup = function() {
          return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
        }, n.prototype.result_select = function(e) {
          var t, n;
          if (this.result_highlight) return t = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
            chosen: this
          }), !1) : (this.is_multiple ? t.removeClass("active-result") : this.reset_single_select_options(), n = this.results_data[t[0].getAttribute("data-option-array-index")], n.selected = !0, this.form_field.options[n.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(n) : this.single_set_selected_text(n.text), (e.metaKey || e.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
            selected: this.form_field.options[n.options_index].value
          }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())
        }, n.prototype.single_set_selected_text = function(e) {
          return null == e && (e = this.default_text), e === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").text(e)
        }, n.prototype.result_deselect = function(e) {
          var t;
          return t = this.results_data[e], !this.form_field.options[t.options_index].disabled && (t.selected = !1, this.form_field.options[t.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
            deselected: this.form_field.options[t.options_index].value
          }), this.search_field_scale(), !0)
        }, n.prototype.single_deselect_control_build = function() {
          if (this.allow_single_deselect) return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")
        }, n.prototype.get_search_text = function() {
          return this.search_field.val() === this.default_text ? "" : t("<div/>").text(t.trim(this.search_field.val())).html()
        }, n.prototype.winnow_results_set_highlight = function() {
          var e, t;
          if (t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), null != (e = t.length ? t.first() : this.search_results.find(".active-result").first())) return this.result_do_highlight(e)
        }, n.prototype.no_results = function(e) {
          var n;
          return n = t('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), n.find("span").first().html(e), this.search_results.append(n), this.form_field_jq.trigger("chosen:no_results", {
            chosen: this
          })
        }, n.prototype.no_results_clear = function() {
          return this.search_results.find(".no-results").remove()
        }, n.prototype.keydown_arrow = function() {
          var e;
          return this.results_showing && this.result_highlight ? (e = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(e) : void 0 : this.results_show()
        }, n.prototype.keyup_arrow = function() {
          var e;
          return this.results_showing || this.is_multiple ? this.result_highlight ? (e = this.result_highlight.prevAll("li.active-result"), e.length ? this.result_do_highlight(e.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
        }, n.prototype.keydown_backstroke = function() {
          var e;
          return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (e = this.search_container.siblings("li.search-choice").last(), e.length && !e.hasClass("search-choice-disabled") ? (this.pending_backstroke = e, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
        }, n.prototype.clear_backstroke = function() {
          return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, n.prototype.keydown_checker = function(e) {
          var t, n;
          switch (t = null != (n = e.which) ? n : e.keyCode, this.search_field_scale(), 8 !== t && this.pending_backstroke && this.clear_backstroke(), t) {
            case 8:
              this.backstroke_length = this.search_field.val().length;
              break;
            case 9:
              this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !1;
              break;
            case 13:
              this.results_showing && e.preventDefault();
              break;
            case 32:
              this.disable_search && e.preventDefault();
              break;
            case 38:
              e.preventDefault(), this.keyup_arrow();
              break;
            case 40:
              e.preventDefault(), this.keydown_arrow()
          }
        }, n.prototype.search_field_scale = function() {
          var e, n, i, r, s, o, a, l;
          if (this.is_multiple) {
            for (0, o = 0, r = "position:absolute; left: -1000px; top: -1000px; display:none;", s = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], a = 0, l = s.length; a < l; a++) i = s[a], r += i + ":" + this.search_field.css(i) + ";";
            return e = t("<div />", {
              style: r
            }), e.text(this.search_field.val()), t("body").append(e), o = e.width() + 25, e.remove(), n = this.container.outerWidth(), o > n - 10 && (o = n - 10), this.search_field.css({
              width: o + "px"
            })
          }
        }, n
      }(n)
    }).call(this)
  }).call(t, n(0))
}, function(e, t, n) {
  "use strict";

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }(),
    s = function() {
      function e() {
        i(this, e)
      }
      return r(e, null, [{
        key: "getWidth",
        value: function() {
          var e = window,
            t = document,
            n = t.documentElement,
            i = t.getElementsByTagName("body")[0];
          return e.innerWidth || n.clientWidth || i.clientWidth
        }
      }, {
        key: "getHeight",
        value: function() {
          var e = window,
            t = document,
            n = t.documentElement,
            i = t.getElementsByTagName("body")[0];
          return e.innerHeight || n.clientHeight || i.clientHeight
        }
      }, {
        key: "getOffset",
        value: function(e) {
          var t = e.getBoundingClientRect(),
            n = document.body;
          return {
            top: t.top + n.scrollTop,
            left: t.left + n.scrollLeft
          }
        }
      }]), e
    }();
  t.default = s
}, , function(e, t, n) {
  "use strict";

  function i(e, t) {
    var n = t && t.loc,
      s = void 0,
      o = void 0;
    n && (s = n.start.line, o = n.start.column, e += " - " + s + ":" + o);
    for (var a = Error.prototype.constructor.call(this, e), l = 0; l < r.length; l++) this[r[l]] = a[r[l]];
    Error.captureStackTrace && Error.captureStackTrace(this, i);
    try {
      n && (this.lineNumber = s, Object.defineProperty ? Object.defineProperty(this, "column", {
        value: o,
        enumerable: !0
      }) : this.column = o)
    } catch (e) {}
  }
  t.__esModule = !0;
  var r = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
  i.prototype = new Error, t.default = i, e.exports = t.default
}, function(e, t, n) {
  var i, r;
  /*!
   * JavaScript Cookie v2.1.0
   * https://github.com/js-cookie/js-cookie
   *
   * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
   * Released under the MIT license
   */
  ! function(s) {
    i = s, void 0 !== (r = "function" == typeof i ? i.call(t, n, t, e) : i) && (e.exports = r)
  }(function() {
    function e() {
      for (var e = 0, t = {}; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) t[i] = n[i]
      }
      return t
    }

    function t(n) {
      function i(t, r, s) {
        var o;
        if ("undefined" != typeof document) {
          if (arguments.length > 1) {
            if (s = e({
                path: "/"
              }, i.defaults, s), "number" == typeof s.expires) {
              var a = new Date;
              a.setMilliseconds(a.getMilliseconds() + 864e5 * s.expires), s.expires = a
            }
            try {
              o = JSON.stringify(r), /^[\{\[]/.test(o) && (r = o)
            } catch (e) {}
            return r = n.write ? n.write(r, t) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape), document.cookie = [t, "=", r, s.expires && "; expires=" + s.expires.toUTCString(), s.path && "; path=" + s.path, s.domain && "; domain=" + s.domain, s.secure ? "; secure" : ""].join("")
          }
          t || (o = {});
          for (var l = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, u = 0; u < l.length; u++) {
            var d = l[u].split("="),
              h = d[0].replace(c, decodeURIComponent),
              f = d.slice(1).join("=");
            '"' === f.charAt(0) && (f = f.slice(1, -1));
            try {
              if (f = n.read ? n.read(f, h) : n(f, h) || f.replace(c, decodeURIComponent), this.json) try {
                f = JSON.parse(f)
              } catch (e) {}
              if (t === h) {
                o = f;
                break
              }
              t || (o[h] = f)
            } catch (e) {}
          }
          return o
        }
      }
      return i.get = i.set = i, i.getJSON = function() {
        return i.apply({
          json: !0
        }, [].slice.call(arguments))
      }, i.defaults = {}, i.remove = function(t, n) {
        i(t, "", e(n, {
          expires: -1
        }))
      }, i.withConverter = t, i
    }
    return t(function() {})
  })
}, , , , , , , , , function(e, t, n) {
  "use strict";
  n(107).polyfill()
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = n(1),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i),
    s = r.default.View.extend({
      tagName: "div",
      isOpen: !1,
      buttons: null,
      events: {
        "click .box-loading": "close",
        click: "triggerClose"
      },
      initialize: function() {
        this.el.style.display = "none", this._render(), this.buttons = this.el.querySelector(".bts"), document.querySelector(".wrapper").appendChild(this.el)
      },
      preload: function() {
        this.open(), this._showSpinner()
      },
      open: function() {
        var e = this;
        this.el.style.display = "block", this.isOpen = !0, setTimeout(function() {
          e.el.classList.add("show");
          var t = document.querySelector(".box-loading");
          t && t.classList.add("open")
        }, 100)
      },
      openForFilters: function(e) {
        document.querySelector(".box-filters").classList.add("active"), this.el.classList.add("box-loading", "style2"), e.appendChild(this.el), this.open()
      },
      openForSearchText: function() {
        this.trigger("open_search_text"), this.open(), this.buttons.style.display = "none"
      },
      closeLoading: function() {
        this._hideSpinner()
      },
      showLoading: function() {
        this._showSpinner()
      },
      _hideSpinner: function() {
        this.el.querySelector(".spinner").style.display = "none"
      },
      _showSpinner: function() {
        this.el.querySelector(".spinner").style.display = "block"
      },
      closeFilters: function() {
        this.close(!1), setTimeout(function() {
          document.querySelector(".box-filters").classList.remove("active")
        }, 400)
      },
      closeSearchText: function(e) {
        this.buttons.style.display = "block", e && this.trigger("close_search_text"), this.close()
      },
      triggerClose: function() {
        this.trigger("close"), this.close()
      },
      close: function() {
        var e = this;
        this.el.classList.remove("show"), setTimeout(function() {
          e._close()
        }, 400)
      },
      _close: function() {
        this.el.style.display = "none", this.el.classList.remove("box-loading", "style2", "open"), this.isOpen = !1
      },
      _render: function() {
        var e = document.createElement("div");
        e.classList.add("bts");
        var t = document.createElement("div");
        t.classList.add("bt", "bt-close"), e.appendChild(t);
        var n = document.createElement("div");
        n.classList.add("spinner"), this.el.appendChild(e), this.el.appendChild(n)
      }
    });
  t.default = new s
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(7),
      s = (i(r), n(1)),
      o = i(s),
      a = n(5),
      l = i(a),
      c = o.default.Model.extend({
        defaults: {
          id: null,
          type: null,
          slug: null,
          is_already_collected: !1
        },
        fetchUsersCollected: function(t) {
          var n = this;
          e.ajax({
            type: "GET",
            url: l.default.generate("tv_inspiration_fetch_collected", {
              id: n.get("id"),
              type: n.get("type")
            }),
            success: function(e) {
              t(e)
            }
          })
        },
        getUrlToSaveInCollection: function(e) {
          return l.default.generate("tv_favourites_create_submission_collectable", {
            slug: this.get("slug"),
            idCollection: e
          })
        },
        saveInCollection: function(t) {
          var n = this;
          e.ajax({
            type: "POST",
            url: n.getUrlToSaveInCollection(t),
            success: function() {
              n.set("is_already_collected", !0), n.trigger("successfully_collected")
            },
            error: function() {
              n.trigger("unsuccessfully_collected")
            }
          })
        },
        getImage: function() {
          return this.get("images").thumbnail
        }
      });
    t.default = c
  }).call(t, n(0))
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(1),
    s = i(r),
    o = n(7),
    a = i(o);
  t.default = a.default.clone(s.default.Events)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    MENU_FILTER: "menu.filter",
    SHOW_SEARCH_RESULTS: "show_search_results",
    REMOVE_SEARCH_RESULTS: "remove_search_results",
    REMOVE_COLLECTABLE: "remove_collectable"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(e) {
    return r.default.asset(e)
  };
  var i = n(9),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i)
}, function(e, t, n) {
  "use strict";

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    }
    return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }();
  n(75);
  var s = function() {
    function e() {
      i(this, e);
      var t = this;
      this.observer = new IntersectionObserver(function(e) {
        e.forEach(function(e) {
          e.isIntersecting && ("IMG" == e.target.tagName && t._observeImages(e.target), "VIDEO" == e.target.tagName && t._observeVideos(e.target), t.observer.unobserve(e.target))
        })
      }, {
        threshold: .3
      })
    }
    return r(e, [{
      key: "_observeImages",
      value: function(e) {
        e.dataset.src && (e.src = e.dataset.src), e.dataset.srcset && (e.srcset = e.dataset.srcset), e.classList.add("lazy-hidden"), e.onload = function() {
          e.classList.remove("lazy-hidden"), setTimeout(function() {
            e.classList.add("lazy-loaded")
          }, 100)
        }
      }
    }, {
      key: "_observeVideos",
      value: function(e) {
        e.dataset.poster && (e.poster = e.dataset.poster), [].forEach.call(e.querySelectorAll("source"), function(e) {
          e.dataset.src && (e.src = e.dataset.src)
        }), e.classList.add("lazy-hidden"), e.onloadeddata = function() {
          e.classList.remove("lazy-hidden"), setTimeout(function() {
            e.classList.add("lazy-loaded")
          }, 100)
        }, e.load()
      }
    }, {
      key: "observe",
      value: function(e) {
        e || (e = document);
        var t = this;
        [].forEach.call(e.querySelectorAll("img.lazy"), function(e) {
          t.observer.observe(e)
        }), [].forEach.call(e.querySelectorAll("video.lazy-video"), function(e) {
          t.observer.observe(e)
        })
      }
    }]), e
  }();
  t.default = new s
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(1),
    s = i(r),
    o = n(6),
    a = i(o),
    l = n(116),
    c = i(l),
    u = n(26),
    d = i(u),
    h = s.default.View.extend({
      events: {
        "click .button-loadmore": "_loadMore"
      },
      className: "box-content-likes",
      template_datas: {
        count: 0,
        users_collected: []
      },
      initialize: function() {
        var e = this;
        this.lightBox = new a.default({
          close_callback: function() {
            e.remove()
          },
          remove_after_close: !0
        })
      },
      show: function(e) {
        this.template_datas.users_collected = e, this.template_datas.count = this.template_datas.users_collected.length, this._render(), this.lightBox.show(this.el), new d.default({
          el: this.el
        })
      },
      showLoading: function() {
        this.$el.html('<div class="box-msg"><div class="box-loading style3 open"><div class="spinner"></div></div></div>'), this.lightBox.show(this.el)
      },
      render: function(e) {
        this.template_datas.users_collected = e, this.template_datas.count = this.template_datas.users_collected.length, this._render(), new d.default({
          el: this.el
        })
      },
      _render: function() {
        this.$el.html((0, c.default)({
          item: this.template_datas
        })), this.$el.find(".list-user-likes li:gt(6)").hide()
      },
      _loadMore: function() {
        this.$el.find(".list-user-likes li:gt(6)").show(), this.$el.find(".button-loadmore").hide()
      },
      setFollowUser: function(e, t) {
        var n = this._searchUser(e);
        if (!n) return !1;
        n.following = t
      },
      _searchUser: function(e) {
        for (var t = this.template_datas.users_collected.length, n = t - 1; n >= 0; n--)
          if (this.template_datas.users_collected[n].username == e) return this.template_datas.users_collected[n];
        return !1
      }
    });
  t.default = h
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(e, t) {
    return r.default.assetTv(e, t)
  };
  var i = n(9),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i)
}, function(e, t, n) {
  "use strict";

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }(),
    s = n(9),
    o = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(s),
    a = function() {
      function e() {
        i(this, e)
      }
      return r(e, null, [{
        key: "createItems",
        value: function(e) {
          for (var t = document.createDocumentFragment(), n = 0; n < e.length; n++) {
            var i = document.createElement("li");
            i.classList.add("add-colaborator");
            var r = document.createElement("img");
            r.src = o.default.thumb(e[n].photo, "thumb_user_70"), r.style.width = 32, r.style.height = 32;
            var s = document.createElement("span");
            s.textContent = e[n].display_name, i.appendChild(r), i.appendChild(s), i.dataset.user = JSON.stringify(e[n]), t.appendChild(i)
          }
          return t
        }
      }]), e
    }();
  t.default = a
}, , , , , , , , , , , , , , , , , function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function r(e, t, n) {
    this.helpers = e || {}, this.partials = t || {}, this.decorators = n || {}, l.registerDefaultHelpers(this), c.registerDefaultDecorators(this)
  }
  t.__esModule = !0, t.HandlebarsEnvironment = r;
  var s = n(24),
    o = n(32),
    a = i(o),
    l = n(85),
    c = n(93),
    u = n(95),
    d = i(u);
  t.VERSION = "4.0.10";
  t.COMPILER_REVISION = 7;
  var h = {
    1: "<= 1.0.rc.2",
    2: "== 1.0.0-rc.3",
    3: "== 1.0.0-rc.4",
    4: "== 1.x.x",
    5: "== 2.0.0-alpha.x",
    6: ">= 2.0.0-beta.1",
    7: ">= 4.0.0"
  };
  t.REVISION_CHANGES = h;
  r.prototype = {
    constructor: r,
    logger: d.default,
    log: d.default.log,
    registerHelper: function(e, t) {
      if ("[object Object]" === s.toString.call(e)) {
        if (t) throw new a.default("Arg not supported with multiple helpers");
        s.extend(this.helpers, e)
      } else this.helpers[e] = t
    },
    unregisterHelper: function(e) {
      delete this.helpers[e]
    },
    registerPartial: function(e, t) {
      if ("[object Object]" === s.toString.call(e)) s.extend(this.partials, e);
      else {
        if (void 0 === t) throw new a.default('Attempting to register a partial called "' + e + '" as undefined');
        this.partials[e] = t
      }
    },
    unregisterPartial: function(e) {
      delete this.partials[e]
    },
    registerDecorator: function(e, t) {
      if ("[object Object]" === s.toString.call(e)) {
        if (t) throw new a.default("Arg not supported with multiple decorators");
        s.extend(this.decorators, e)
      } else this.decorators[e] = t
    },
    unregisterDecorator: function(e) {
      delete this.decorators[e]
    }
  };
  var f = d.default.log;
  t.log = f, t.createFrame = s.createFrame, t.logger = d.default
}, function(e, t, n) {
  var i = n(3);
  e.exports = (i.default || i).template({
    1: function(e, t, n, i, r) {
      return " hidden"
    },
    compiler: [7, ">= 4.0.0"],
    main: function(e, t, n, i, r) {
      var s;
      return '<div class="box-msg' + (null != (s = n.if.call(null != t ? t : e.nullContext || {}, null != t ? t.not_show : t, {
        name: "if",
        hash: {},
        fn: e.program(1, r, 0),
        inverse: e.noop,
        data: r
      })) ? s : "") + '">\n    <div class="box-loading style3 open"><div class="spinner"></div></div>\n</div>'
    },
    useData: !0
  })
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      s = i(r),
      o = n(5),
      a = i(o),
      l = s.default.View.extend({
        submit: function(t) {
          t.preventDefault(), this._showLoading();
          var n = e(t.currentTarget),
            i = this;
          e.ajax({
            type: "POST",
            url: n.attr("action"),
            data: n.serialize(),
            dataType: "json",
            success: function() {
              i.$el.html(i._getTemplateSuccess())
            },
            error: function(e) {
              i._showErrors(n, e)
            },
            complete: function() {
              i._hideLoading()
            }
          })
        },
        _showLoading: function() {
          this.trigger("show_loading", this)
        },
        _hideLoading: function() {
          this.trigger("hide_loading", this)
        },
        render: function() {
          var t = this;
          e.ajax({
            type: "GET",
            url: a.default.generate(t._getRenderRoute()),
            success: function(e) {
              t.$el.html(e), t.trigger("loaded", t)
            }
          })
        }
      });
    t.default = l
  }).call(t, n(0))
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(1),
    s = i(r),
    o = n(108),
    a = i(o),
    l = s.default.Collection.extend({
      model: a.default,
      findOrCreateByUsername: function(e) {
        var t = this.findWhere({
          username: e
        });
        return t || new a.default({
          username: e
        })
      }
    });
  t.default = new l
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      s = i(r),
      o = n(109),
      a = i(o),
      l = s.default.View.extend({
        tagName: "div",
        aborted: !1,
        className: "tooltip-user",
        initialize: function(e) {
          this.options = e, this.model.on("loaded", this._render, this)
        },
        abort: function() {
          this.aborted = !0;
          var e = this;
          this.el.classList.remove("open"), this.model.abort(), setTimeout(function() {
            e.remove()
          }, 300)
        },
        render: function() {
          this._loading();
          var e = this;
          return setTimeout(function() {
            e.el.classList.add("open")
          }, 100), this.model.isLoaded() ? this._render() : this.model.fetchData(), this
        },
        _loading: function() {
          this.el.innerHTML = '<div class="box-loading style3"><div class="spinner"></div></div>', this.options.classBottom && this.el.classList.add(this.options.classBottom), this.options.target.appendChild(this.el)
        },
        _render: function() {
          if (!this.aborted) {
            var t = this;
            e(this.el.querySelector(".box-loading")).fadeOut(), this.el.innerHTML = (0, a.default)({
              user: this.model.toJSON()
            }), this.el.querySelector("img").onload = function() {
              t.options.target.appendChild(t.el)
            }
          }
        }
      });
    t.default = l
  }).call(t, n(0))
}, function(e, t, n) {
  (function(t) {
    var n, n; /*! Raven.js 3.18.1 (37d20f9) | github.com/getsentry/raven-js */
    ! function(t) {
      e.exports = t()
    }(function() {
      return function e(t, i, r) {
        function s(a, l) {
          if (!i[a]) {
            if (!t[a]) {
              var c = "function" == typeof n && n;
              if (!l && c) return n(a, !0);
              if (o) return o(a, !0);
              var u = new Error("Cannot find module '" + a + "'");
              throw u.code = "MODULE_NOT_FOUND", u
            }
            var d = i[a] = {
              exports: {}
            };
            t[a][0].call(d.exports, function(e) {
              var n = t[a][1][e];
              return s(n || e)
            }, d, d.exports, e, t, i, r)
          }
          return i[a].exports
        }
        for (var o = "function" == typeof n && n, a = 0; a < r.length; a++) s(r[a]);
        return s
      }({
        1: [function(e, t, n) {
          function i(e) {
            this.name = "RavenConfigError", this.message = e
          }
          i.prototype = new Error, i.prototype.constructor = i, t.exports = i
        }, {}],
        2: [function(e, t, n) {
          var i = function(e, t, n) {
            var i = e[t],
              r = e;
            if (t in e) {
              var s = "warn" === t ? "warning" : t;
              e[t] = function() {
                var e = [].slice.call(arguments),
                  o = "" + e.join(" "),
                  a = {
                    level: s,
                    logger: "console",
                    extra: {
                      arguments: e
                    }
                  };
                "assert" === t ? !1 === e[0] && (o = "Assertion failed: " + (e.slice(1).join(" ") || "console.assert"), a.extra.arguments = e.slice(1), n && n(o, a)) : n && n(o, a), i && Function.prototype.apply.call(i, r, e)
              }
            }
          };
          t.exports = {
            wrapMethod: i
          }
        }, {}],
        3: [function(e, n, i) {
          (function(t) {
            function i() {
              return +new Date
            }

            function r(e, t) {
              return a(t) ? function(n) {
                return t(n, e)
              } : t
            }

            function s() {
              this.a = !("object" != typeof JSON || !JSON.stringify), this.b = !o(N), this.c = !o(q), this.d = null, this.e = null, this.f = null, this.g = null, this.h = null, this.i = null, this.j = {}, this.k = {
                logger: "javascript",
                ignoreErrors: [],
                ignoreUrls: [],
                whitelistUrls: [],
                includePaths: [],
                collectWindowErrors: !0,
                maxMessageLength: 0,
                maxUrlLength: 250,
                stackTraceLimit: 50,
                autoBreadcrumbs: !0,
                instrument: !0,
                sampleRate: 1
              }, this.l = 0, this.m = !1, this.n = Error.stackTraceLimit, this.o = P.console || {}, this.p = {}, this.q = [], this.r = i(), this.s = [], this.t = [], this.u = null, this.v = P.location, this.w = this.v && this.v.href, this.x();
              for (var e in this.o) this.p[e] = this.o[e]
            }

            function o(e) {
              return void 0 === e
            }

            function a(e) {
              return "function" == typeof e
            }

            function l(e) {
              return "[object String]" === R.toString.call(e)
            }

            function c(e) {
              for (var t in e) return !1;
              return !0
            }

            function u(e, t) {
              var n, i;
              if (o(e.length))
                for (n in e) p(e, n) && t.call(null, n, e[n]);
              else if (i = e.length)
                for (n = 0; n < i; n++) t.call(null, n, e[n])
            }

            function d(e, t) {
              return t ? (u(t, function(t, n) {
                e[t] = n
              }), e) : e
            }

            function h(e) {
              return !!Object.isFrozen && Object.isFrozen(e)
            }

            function f(e, t) {
              return !t || e.length <= t ? e : e.substr(0, t) + "…"
            }

            function p(e, t) {
              return R.hasOwnProperty.call(e, t)
            }

            function m(e) {
              for (var t, n = [], i = 0, r = e.length; i < r; i++) t = e[i], l(t) ? n.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : t && t.source && n.push(t.source);
              return new RegExp(n.join("|"), "i")
            }

            function v(e) {
              var t = [];
              return u(e, function(e, n) {
                t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
              }), t.join("&")
            }

            function g(e) {
              var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
              if (!t) return {};
              var n = t[6] || "",
                i = t[8] || "";
              return {
                protocol: t[2],
                host: t[4],
                path: t[5],
                relative: t[5] + n + i
              }
            }

            function _() {
              var e = P.crypto || P.msCrypto;
              if (!o(e) && e.getRandomValues) {
                var t = new Uint16Array(8);
                e.getRandomValues(t), t[3] = 4095 & t[3] | 16384, t[4] = 16383 & t[4] | 32768;
                var n = function(e) {
                  for (var t = e.toString(16); t.length < 4;) t = "0" + t;
                  return t
                };
                return n(t[0]) + n(t[1]) + n(t[2]) + n(t[3]) + n(t[4]) + n(t[5]) + n(t[6]) + n(t[7])
              }
              return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
              })
            }

            function y(e) {
              for (var t, n = [], i = 0, r = 0, s = " > ".length; e && i++ < 5 && !("html" === (t = b(e)) || i > 1 && r + n.length * s + t.length >= 80);) n.push(t), r += t.length, e = e.parentNode;
              return n.reverse().join(" > ")
            }

            function b(e) {
              var t, n, i, r, s, o = [];
              if (!e || !e.tagName) return "";
              if (o.push(e.tagName.toLowerCase()), e.id && o.push("#" + e.id), (t = e.className) && l(t))
                for (n = t.split(/\s+/), s = 0; s < n.length; s++) o.push("." + n[s]);
              var a = ["type", "name", "title", "alt"];
              for (s = 0; s < a.length; s++) i = a[s], (r = e.getAttribute(i)) && o.push("[" + i + '="' + r + '"]');
              return o.join("")
            }

            function w(e, t) {
              return !!(!!e ^ !!t)
            }

            function x(e, t) {
              return !w(e, t) && (e = e.values[0], t = t.values[0], e.type === t.type && e.value === t.value && k(e.stacktrace, t.stacktrace))
            }

            function k(e, t) {
              if (w(e, t)) return !1;
              var n = e.frames,
                i = t.frames;
              if (n.length !== i.length) return !1;
              for (var r, s, o = 0; o < n.length; o++)
                if (r = n[o], s = i[o], r.filename !== s.filename || r.lineno !== s.lineno || r.colno !== s.colno || r.function !== s.function) return !1;
              return !0
            }

            function C(e, t, n, i) {
              var r = e[t];
              e[t] = n(r), i && i.push([e, t, r])
            }
            var T = e(6),
              E = e(7),
              S = e(1),
              j = e(5),
              O = j.isError,
              A = j.isObject,
              L = e(2).wrapMethod,
              M = "source protocol user pass host port path".split(" "),
              I = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/,
              P = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
              N = P.document,
              q = P.navigator;
            s.prototype = {
              VERSION: "3.18.1",
              debug: !1,
              TraceKit: T,
              config: function(e, t) {
                var n = this;
                if (n.g) return this.y("error", "Error: Raven has already been configured"), n;
                if (!e) return n;
                var i = n.k;
                t && u(t, function(e, t) {
                  "tags" === e || "extra" === e || "user" === e ? n.j[e] = t : i[e] = t
                }), n.setDSN(e), i.ignoreErrors.push(/^Script error\.?$/), i.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/), i.ignoreErrors = m(i.ignoreErrors), i.ignoreUrls = !!i.ignoreUrls.length && m(i.ignoreUrls), i.whitelistUrls = !!i.whitelistUrls.length && m(i.whitelistUrls), i.includePaths = m(i.includePaths), i.maxBreadcrumbs = Math.max(0, Math.min(i.maxBreadcrumbs || 100, 100));
                var r = {
                    xhr: !0,
                    console: !0,
                    dom: !0,
                    location: !0
                  },
                  s = i.autoBreadcrumbs;
                "[object Object]" === {}.toString.call(s) ? s = d(r, s) : !1 !== s && (s = r), i.autoBreadcrumbs = s;
                var o = {
                    tryCatch: !0
                  },
                  a = i.instrument;
                return "[object Object]" === {}.toString.call(a) ? a = d(o, a) : !1 !== a && (a = o), i.instrument = a, T.collectWindowErrors = !!i.collectWindowErrors, n
              },
              install: function() {
                var e = this;
                return e.isSetup() && !e.m && (T.report.subscribe(function() {
                  e.z.apply(e, arguments)
                }), e.k.instrument && e.k.instrument.tryCatch && e.A(), e.k.autoBreadcrumbs && e.B(), e.C(), e.m = !0), Error.stackTraceLimit = e.k.stackTraceLimit, this
              },
              setDSN: function(e) {
                var t = this,
                  n = t.D(e),
                  i = n.path.lastIndexOf("/"),
                  r = n.path.substr(1, i);
                t.E = e, t.h = n.user, t.F = n.pass && n.pass.substr(1), t.i = n.path.substr(i + 1), t.g = t.G(n), t.H = t.g + "/" + r + "api/" + t.i + "/store/", this.x()
              },
              context: function(e, t, n) {
                return a(e) && (n = t || [], t = e, e = void 0), this.wrap(e, t).apply(this, n)
              },
              wrap: function(e, t, n) {
                function i() {
                  var i = [],
                    s = arguments.length,
                    o = !e || e && !1 !== e.deep;
                  for (n && a(n) && n.apply(this, arguments); s--;) i[s] = o ? r.wrap(e, arguments[s]) : arguments[s];
                  try {
                    return t.apply(this, i)
                  } catch (t) {
                    throw r.I(), r.captureException(t, e), t
                  }
                }
                var r = this;
                if (o(t) && !a(e)) return e;
                if (a(e) && (t = e, e = void 0), !a(t)) return t;
                try {
                  if (t.J) return t;
                  if (t.K) return t.K
                } catch (e) {
                  return t
                }
                for (var s in t) p(t, s) && (i[s] = t[s]);
                return i.prototype = t.prototype, t.K = i, i.J = !0, i.L = t, i
              },
              uninstall: function() {
                return T.report.uninstall(), this.M(), Error.stackTraceLimit = this.n, this.m = !1, this
              },
              captureException: function(e, t) {
                if (!O(e)) return this.captureMessage(e, d({
                  trimHeadFrames: 1,
                  stacktrace: !0
                }, t));
                this.d = e;
                try {
                  var n = T.computeStackTrace(e);
                  this.N(n, t)
                } catch (t) {
                  if (e !== t) throw t
                }
                return this
              },
              captureMessage: function(e, t) {
                if (!this.k.ignoreErrors.test || !this.k.ignoreErrors.test(e)) {
                  t = t || {};
                  var n = d({
                    message: e + ""
                  }, t);
                  if (this.k.stacktrace || t && t.stacktrace) {
                    var i;
                    try {
                      throw new Error(e)
                    } catch (e) {
                      i = e
                    }
                    i.name = null, t = d({
                      fingerprint: e,
                      trimHeadFrames: (t.trimHeadFrames || 0) + 1
                    }, t);
                    var r = T.computeStackTrace(i),
                      s = this.O(r, t);
                    n.stacktrace = {
                      frames: s.reverse()
                    }
                  }
                  return this.P(n), this
                }
              },
              captureBreadcrumb: function(e) {
                var t = d({
                  timestamp: i() / 1e3
                }, e);
                if (a(this.k.breadcrumbCallback)) {
                  var n = this.k.breadcrumbCallback(t);
                  if (A(n) && !c(n)) t = n;
                  else if (!1 === n) return this
                }
                return this.t.push(t), this.t.length > this.k.maxBreadcrumbs && this.t.shift(), this
              },
              addPlugin: function(e) {
                var t = [].slice.call(arguments, 1);
                return this.q.push([e, t]), this.m && this.C(), this
              },
              setUserContext: function(e) {
                return this.j.user = e, this
              },
              setExtraContext: function(e) {
                return this.Q("extra", e), this
              },
              setTagsContext: function(e) {
                return this.Q("tags", e), this
              },
              clearContext: function() {
                return this.j = {}, this
              },
              getContext: function() {
                return JSON.parse(E(this.j))
              },
              setEnvironment: function(e) {
                return this.k.environment = e, this
              },
              setRelease: function(e) {
                return this.k.release = e, this
              },
              setDataCallback: function(e) {
                var t = this.k.dataCallback;
                return this.k.dataCallback = r(t, e), this
              },
              setBreadcrumbCallback: function(e) {
                var t = this.k.breadcrumbCallback;
                return this.k.breadcrumbCallback = r(t, e), this
              },
              setShouldSendCallback: function(e) {
                var t = this.k.shouldSendCallback;
                return this.k.shouldSendCallback = r(t, e), this
              },
              setTransport: function(e) {
                return this.k.transport = e, this
              },
              lastException: function() {
                return this.d
              },
              lastEventId: function() {
                return this.f
              },
              isSetup: function() {
                return !(!this.a || !this.g && (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0, this.y("error", "Error: Raven has not been configured.")), 1))
              },
              afterLoad: function() {
                var e = P.RavenConfig;
                e && this.config(e.dsn, e.config).install()
              },
              showReportDialog: function(e) {
                if (N) {
                  e = e || {};
                  var t = e.eventId || this.lastEventId();
                  if (!t) throw new S("Missing eventId");
                  var n = e.dsn || this.E;
                  if (!n) throw new S("Missing DSN");
                  var i = encodeURIComponent,
                    r = "";
                  r += "?eventId=" + i(t), r += "&dsn=" + i(n);
                  var s = e.user || this.j.user;
                  s && (s.name && (r += "&name=" + i(s.name)), s.email && (r += "&email=" + i(s.email)));
                  var o = this.G(this.D(n)),
                    a = N.createElement("script");
                  a.async = !0, a.src = o + "/api/embed/error-page/" + r, (N.head || N.body).appendChild(a)
                }
              },
              I: function() {
                var e = this;
                this.l += 1, setTimeout(function() {
                  e.l -= 1
                })
              },
              R: function(e, t) {
                var n, i;
                if (this.b) {
                  t = t || {}, e = "raven" + e.substr(0, 1).toUpperCase() + e.substr(1), N.createEvent ? (n = N.createEvent("HTMLEvents"), n.initEvent(e, !0, !0)) : (n = N.createEventObject(), n.eventType = e);
                  for (i in t) p(t, i) && (n[i] = t[i]);
                  if (N.createEvent) N.dispatchEvent(n);
                  else try {
                    N.fireEvent("on" + n.eventType.toLowerCase(), n)
                  } catch (e) {}
                }
              },
              S: function(e) {
                var t = this;
                return function(n) {
                  if (t.T = null, t.u !== n) {
                    t.u = n;
                    var i;
                    try {
                      i = y(n.target)
                    } catch (e) {
                      i = "<unknown>"
                    }
                    t.captureBreadcrumb({
                      category: "ui." + e,
                      message: i
                    })
                  }
                }
              },
              U: function() {
                var e = this;
                return function(t) {
                  var n;
                  try {
                    n = t.target
                  } catch (e) {
                    return
                  }
                  var i = n && n.tagName;
                  if (i && ("INPUT" === i || "TEXTAREA" === i || n.isContentEditable)) {
                    var r = e.T;
                    r || e.S("input")(t), clearTimeout(r), e.T = setTimeout(function() {
                      e.T = null
                    }, 1e3)
                  }
                }
              },
              V: function(e, t) {
                var n = g(this.v.href),
                  i = g(t),
                  r = g(e);
                this.w = t, n.protocol === i.protocol && n.host === i.host && (t = i.relative), n.protocol === r.protocol && n.host === r.host && (e = r.relative), this.captureBreadcrumb({
                  category: "navigation",
                  data: {
                    to: t,
                    from: e
                  }
                })
              },
              A: function() {
                function e(e) {
                  return function(n, i) {
                    for (var r = new Array(arguments.length), s = 0; s < r.length; ++s) r[s] = arguments[s];
                    var o = r[0];
                    return a(o) && (r[0] = t.wrap(o)), e.apply ? e.apply(this, r) : e(r[0], r[1])
                  }
                }
                var t = this,
                  n = t.s,
                  i = this.k.autoBreadcrumbs;
                C(P, "setTimeout", e, n), C(P, "setInterval", e, n), P.requestAnimationFrame && C(P, "requestAnimationFrame", function(e) {
                  return function(n) {
                    return e(t.wrap(n))
                  }
                }, n);
                for (var r = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], s = 0; s < r.length; s++) ! function(e) {
                  var r = P[e] && P[e].prototype;
                  r && r.hasOwnProperty && r.hasOwnProperty("addEventListener") && (C(r, "addEventListener", function(n) {
                    return function(r, s, o, a) {
                      try {
                        s && s.handleEvent && (s.handleEvent = t.wrap(s.handleEvent))
                      } catch (e) {}
                      var l, c, u;
                      return i && i.dom && ("EventTarget" === e || "Node" === e) && (c = t.S("click"), u = t.U(), l = function(e) {
                        if (e) {
                          var t;
                          try {
                            t = e.type
                          } catch (e) {
                            return
                          }
                          return "click" === t ? c(e) : "keypress" === t ? u(e) : void 0
                        }
                      }), n.call(this, r, t.wrap(s, void 0, l), o, a)
                    }
                  }, n), C(r, "removeEventListener", function(e) {
                    return function(t, n, i, r) {
                      try {
                        n = n && (n.K ? n.K : n)
                      } catch (e) {}
                      return e.call(this, t, n, i, r)
                    }
                  }, n))
                }(r[s])
              },
              B: function() {
                function e(e, n) {
                  e in n && a(n[e]) && C(n, e, function(e) {
                    return t.wrap(e)
                  })
                }
                var t = this,
                  n = this.k.autoBreadcrumbs,
                  i = t.s;
                if (n.xhr && "XMLHttpRequest" in P) {
                  var r = XMLHttpRequest.prototype;
                  C(r, "open", function(e) {
                    return function(n, i) {
                      return l(i) && -1 === i.indexOf(t.h) && (this.W = {
                        method: n,
                        url: i,
                        status_code: null
                      }), e.apply(this, arguments)
                    }
                  }, i), C(r, "send", function(n) {
                    return function(i) {
                      function r() {
                        if (s.W && 4 === s.readyState) {
                          try {
                            s.W.status_code = s.status
                          } catch (e) {}
                          t.captureBreadcrumb({
                            type: "http",
                            category: "xhr",
                            data: s.W
                          })
                        }
                      }
                      for (var s = this, o = ["onload", "onerror", "onprogress"], l = 0; l < o.length; l++) e(o[l], s);
                      return "onreadystatechange" in s && a(s.onreadystatechange) ? C(s, "onreadystatechange", function(e) {
                        return t.wrap(e, void 0, r)
                      }) : s.onreadystatechange = r, n.apply(this, arguments)
                    }
                  }, i)
                }
                n.xhr && "fetch" in P && C(P, "fetch", function(e) {
                  return function(n, i) {
                    for (var r = new Array(arguments.length), s = 0; s < r.length; ++s) r[s] = arguments[s];
                    var o, a = r[0],
                      l = "GET";
                    "string" == typeof a ? o = a : (o = a.url, a.method && (l = a.method)), r[1] && r[1].method && (l = r[1].method);
                    var c = {
                      method: l,
                      url: o,
                      status_code: null
                    };
                    return t.captureBreadcrumb({
                      type: "http",
                      category: "fetch",
                      data: c
                    }), e.apply(this, r).then(function(e) {
                      return c.status_code = e.status, e
                    })
                  }
                }, i), n.dom && this.b && (N.addEventListener ? (N.addEventListener("click", t.S("click"), !1), N.addEventListener("keypress", t.U(), !1)) : (N.attachEvent("onclick", t.S("click")), N.attachEvent("onkeypress", t.U())));
                var s = P.chrome,
                  o = s && s.app && s.app.runtime,
                  c = !o && P.history && history.pushState;
                if (n.location && c) {
                  var d = P.onpopstate;
                  P.onpopstate = function() {
                    var e = t.v.href;
                    if (t.V(t.w, e), d) return d.apply(this, arguments)
                  }, C(history, "pushState", function(e) {
                    return function() {
                      var n = arguments.length > 2 ? arguments[2] : void 0;
                      return n && t.V(t.w, n + ""), e.apply(this, arguments)
                    }
                  }, i)
                }
                if (n.console && "console" in P && console.log) {
                  var h = function(e, n) {
                    t.captureBreadcrumb({
                      message: e,
                      level: n.level,
                      category: "console"
                    })
                  };
                  u(["debug", "info", "warn", "error", "log"], function(e, t) {
                    L(console, t, h)
                  })
                }
              },
              M: function() {
                for (var e; this.s.length;) {
                  e = this.s.shift();
                  var t = e[0],
                    n = e[1],
                    i = e[2];
                  t[n] = i
                }
              },
              C: function() {
                var e = this;
                u(this.q, function(t, n) {
                  var i = n[0],
                    r = n[1];
                  i.apply(e, [e].concat(r))
                })
              },
              D: function(e) {
                var t = I.exec(e),
                  n = {},
                  i = 7;
                try {
                  for (; i--;) n[M[i]] = t[i] || ""
                } catch (t) {
                  throw new S("Invalid DSN: " + e)
                }
                if (n.pass && !this.k.allowSecretKey) throw new S("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
                return n
              },
              G: function(e) {
                var t = "//" + e.host + (e.port ? ":" + e.port : "");
                return e.protocol && (t = e.protocol + ":" + t), t
              },
              z: function() {
                this.l || this.N.apply(this, arguments)
              },
              N: function(e, t) {
                var n = this.O(e, t);
                this.R("handle", {
                  stackInfo: e,
                  options: t
                }), this.X(e.name, e.message, e.url, e.lineno, n, t)
              },
              O: function(e, t) {
                var n = this,
                  i = [];
                if (e.stack && e.stack.length && (u(e.stack, function(t, r) {
                    var s = n.Y(r, e.url);
                    s && i.push(s)
                  }), t && t.trimHeadFrames))
                  for (var r = 0; r < t.trimHeadFrames && r < i.length; r++) i[r].in_app = !1;
                return i = i.slice(0, this.k.stackTraceLimit)
              },
              Y: function(e, t) {
                var n = {
                  filename: e.url,
                  lineno: e.line,
                  colno: e.column,
                  function: e.func || "?"
                };
                return e.url || (n.filename = t), n.in_app = !(this.k.includePaths.test && !this.k.includePaths.test(n.filename) || /(Raven|TraceKit)\./.test(n.function) || /raven\.(min\.)?js$/.test(n.filename)), n
              },
              X: function(e, t, n, i, r, s) {
                var o = (e || "") + ": " + (t || "");
                if (!this.k.ignoreErrors.test || !this.k.ignoreErrors.test(o)) {
                  var a;
                  if (r && r.length ? (n = r[0].filename || n, r.reverse(), a = {
                      frames: r
                    }) : n && (a = {
                      frames: [{
                        filename: n,
                        lineno: i,
                        in_app: !0
                      }]
                    }), (!this.k.ignoreUrls.test || !this.k.ignoreUrls.test(n)) && (!this.k.whitelistUrls.test || this.k.whitelistUrls.test(n))) {
                    var l = d({
                      exception: {
                        values: [{
                          type: e,
                          value: t,
                          stacktrace: a
                        }]
                      },
                      culprit: n
                    }, s);
                    this.P(l)
                  }
                }
              },
              Z: function(e) {
                var t = this.k.maxMessageLength;
                if (e.message && (e.message = f(e.message, t)), e.exception) {
                  var n = e.exception.values[0];
                  n.value = f(n.value, t)
                }
                var i = e.request;
                return i && (i.url && (i.url = f(i.url, this.k.maxUrlLength)), i.Referer && (i.Referer = f(i.Referer, this.k.maxUrlLength))), e.breadcrumbs && e.breadcrumbs.values && this.$(e.breadcrumbs), e
              },
              $: function(e) {
                for (var t, n, i, r = ["to", "from", "url"], s = 0; s < e.values.length; ++s)
                  if (n = e.values[s], n.hasOwnProperty("data") && A(n.data) && !h(n.data)) {
                    i = d({}, n.data);
                    for (var o = 0; o < r.length; ++o) t = r[o], i.hasOwnProperty(t) && i[t] && (i[t] = f(i[t], this.k.maxUrlLength));
                    e.values[s].data = i
                  }
              },
              _: function() {
                if (this.c || this.b) {
                  var e = {};
                  return this.c && q.userAgent && (e.headers = {
                    "User-Agent": navigator.userAgent
                  }), this.b && (N.location && N.location.href && (e.url = N.location.href), N.referrer && (e.headers || (e.headers = {}), e.headers.Referer = N.referrer)), e
                }
              },
              x: function() {
                this.aa = 0, this.ba = null
              },
              ca: function() {
                return this.aa && i() - this.ba < this.aa
              },
              da: function(e) {
                var t = this.e;
                return !(!t || e.message !== t.message || e.culprit !== t.culprit) && (e.stacktrace || t.stacktrace ? k(e.stacktrace, t.stacktrace) : !e.exception && !t.exception || x(e.exception, t.exception))
              },
              ea: function(e) {
                if (!this.ca()) {
                  var t = e.status;
                  if (400 === t || 401 === t || 429 === t) {
                    var n;
                    try {
                      n = e.getResponseHeader("Retry-After"), n = 1e3 * parseInt(n, 10)
                    } catch (e) {}
                    this.aa = n || (2 * this.aa || 1e3), this.ba = i()
                  }
                }
              },
              P: function(e) {
                var t = this.k,
                  n = {
                    project: this.i,
                    logger: t.logger,
                    platform: "javascript"
                  },
                  r = this._();
                if (r && (n.request = r), e.trimHeadFrames && delete e.trimHeadFrames, e = d(n, e), e.tags = d(d({}, this.j.tags), e.tags), e.extra = d(d({}, this.j.extra), e.extra), e.extra["session:duration"] = i() - this.r, this.t && this.t.length > 0 && (e.breadcrumbs = {
                    values: [].slice.call(this.t, 0)
                  }), c(e.tags) && delete e.tags, this.j.user && (e.user = this.j.user), t.environment && (e.environment = t.environment), t.release && (e.release = t.release), t.serverName && (e.server_name = t.serverName), a(t.dataCallback) && (e = t.dataCallback(e) || e), e && !c(e) && (!a(t.shouldSendCallback) || t.shouldSendCallback(e))) return this.ca() ? void this.y("warn", "Raven dropped error due to backoff: ", e) : void("number" == typeof t.sampleRate ? Math.random() < t.sampleRate && this.fa(e) : this.fa(e))
              },
              ga: function() {
                return _()
              },
              fa: function(e, t) {
                var n = this,
                  i = this.k;
                if (this.isSetup()) {
                  if (e = this.Z(e), !this.k.allowDuplicates && this.da(e)) return void this.y("warn", "Raven dropped repeat event: ", e);
                  this.f = e.event_id || (e.event_id = this.ga()), this.e = e, this.y("debug", "Raven about to send:", e);
                  var r = {
                    sentry_version: "7",
                    sentry_client: "raven-js/" + this.VERSION,
                    sentry_key: this.h
                  };
                  this.F && (r.sentry_secret = this.F);
                  var s = e.exception && e.exception.values[0];
                  this.captureBreadcrumb({
                    category: "sentry",
                    message: s ? (s.type ? s.type + ": " : "") + s.value : e.message,
                    event_id: e.event_id,
                    level: e.level || "error"
                  });
                  var o = this.H;
                  (i.transport || this.ha).call(this, {
                    url: o,
                    auth: r,
                    data: e,
                    options: i,
                    onSuccess: function() {
                      n.x(), n.R("success", {
                        data: e,
                        src: o
                      }), t && t()
                    },
                    onError: function(i) {
                      n.y("error", "Raven transport failed to send: ", i), i.request && n.ea(i.request), n.R("failure", {
                        data: e,
                        src: o
                      }), i = i || new Error("Raven send failed (no additional details provided)"), t && t(i)
                    }
                  })
                }
              },
              ha: function(e) {
                var t = P.XMLHttpRequest && new P.XMLHttpRequest;
                if (t) {
                  if ("withCredentials" in t || "undefined" != typeof XDomainRequest) {
                    var n = e.url;
                    "withCredentials" in t ? t.onreadystatechange = function() {
                      if (4 === t.readyState)
                        if (200 === t.status) e.onSuccess && e.onSuccess();
                        else if (e.onError) {
                        var n = new Error("Sentry error code: " + t.status);
                        n.request = t, e.onError(n)
                      }
                    } : (t = new XDomainRequest, n = n.replace(/^https?:/, ""), e.onSuccess && (t.onload = e.onSuccess), e.onError && (t.onerror = function() {
                      var n = new Error("Sentry error code: XDomainRequest");
                      n.request = t, e.onError(n)
                    })), t.open("POST", n + "?" + v(e.auth)), t.send(E(e.data))
                  }
                }
              },
              y: function(e) {
                this.p[e] && this.debug && Function.prototype.apply.call(this.p[e], this.o, [].slice.call(arguments, 1))
              },
              Q: function(e, t) {
                o(t) ? delete this.j[e] : this.j[e] = d(this.j[e] || {}, t)
              }
            };
            var R = Object.prototype;
            s.prototype.setUser = s.prototype.setUserContext, s.prototype.setReleaseContext = s.prototype.setRelease, n.exports = s
          }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
          1: 1,
          2: 2,
          5: 5,
          6: 6,
          7: 7
        }],
        4: [function(e, n, i) {
          (function(t) {
            var i = e(3),
              r = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
              s = r.Raven,
              o = new i;
            o.noConflict = function() {
              return r.Raven = s, o
            }, o.afterLoad(), n.exports = o
          }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
          3: 3
        }],
        5: [function(e, t, n) {
          function i(e) {
            return "object" == typeof e && null !== e
          }

          function r(e) {
            switch ({}.toString.call(e)) {
              case "[object Error]":
              case "[object Exception]":
              case "[object DOMException]":
                return !0;
              default:
                return e instanceof Error
            }
          }

          function s(e) {
            function t(t, n) {
              var i = e(t) || t;
              return n ? n(i) || i : i
            }
            return t
          }
          t.exports = {
            isObject: i,
            isError: r,
            wrappedCallback: s
          }
        }, {}],
        6: [function(e, n, i) {
          (function(t) {
            function i() {
              return "undefined" == typeof document || null == document.location ? "" : document.location.href
            }
            var r = e(5),
              s = {
                collectWindowErrors: !0,
                debug: !1
              },
              o = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
              a = [].slice,
              l = "?",
              c = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
            s.report = function() {
              function e(e) {
                h(), _.push(e)
              }

              function t(e) {
                for (var t = _.length - 1; t >= 0; --t) _[t] === e && _.splice(t, 1)
              }

              function n() {
                f(), _ = []
              }

              function u(e, t) {
                var n = null;
                if (!t || s.collectWindowErrors) {
                  for (var i in _)
                    if (_.hasOwnProperty(i)) try {
                      _[i].apply(null, [e].concat(a.call(arguments, 2)))
                    } catch (e) {
                      n = e
                    }
                  if (n) throw n
                }
              }

              function d(e, t, n, o, a) {
                var d = null;
                if (w) s.computeStackTrace.augmentStackTraceWithInitialElement(w, t, n, e), p();
                else if (a && r.isError(a)) d = s.computeStackTrace(a), u(d, !0);
                else {
                  var h, f = {
                      url: t,
                      line: n,
                      column: o
                    },
                    m = void 0,
                    g = e;
                  if ("[object String]" === {}.toString.call(e)) {
                    var h = e.match(c);
                    h && (m = h[1], g = h[2])
                  }
                  f.func = l, d = {
                    name: m,
                    message: g,
                    url: i(),
                    stack: [f]
                  }, u(d, !0)
                }
                return !!v && v.apply(this, arguments)
              }

              function h() {
                g || (v = o.onerror, o.onerror = d, g = !0)
              }

              function f() {
                g && (o.onerror = v, g = !1, v = void 0)
              }

              function p() {
                var e = w,
                  t = y;
                y = null, w = null, b = null, u.apply(null, [e, !1].concat(t))
              }

              function m(e, t) {
                var n = a.call(arguments, 1);
                if (w) {
                  if (b === e) return;
                  p()
                }
                var i = s.computeStackTrace(e);
                if (w = i, b = e, y = n, setTimeout(function() {
                    b === e && p()
                  }, i.incomplete ? 2e3 : 0), !1 !== t) throw e
              }
              var v, g, _ = [],
                y = null,
                b = null,
                w = null;
              return m.subscribe = e, m.unsubscribe = t, m.uninstall = n, m
            }(), s.computeStackTrace = function() {
              function e(e) {
                if (void 0 !== e.stack && e.stack) {
                  for (var t, n, r, s = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, o = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, a = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, c = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, u = /\((\S*)(?::(\d+))(?::(\d+))\)/, d = e.stack.split("\n"), h = [], f = (/^(.*) is undefined$/.exec(e.message), 0), p = d.length; f < p; ++f) {
                    if (n = s.exec(d[f])) {
                      var m = n[2] && 0 === n[2].indexOf("native"),
                        v = n[2] && 0 === n[2].indexOf("eval");
                      v && (t = u.exec(n[2])) && (n[2] = t[1], n[3] = t[2], n[4] = t[3]), r = {
                        url: m ? null : n[2],
                        func: n[1] || l,
                        args: m ? [n[2]] : [],
                        line: n[3] ? +n[3] : null,
                        column: n[4] ? +n[4] : null
                      }
                    } else if (n = a.exec(d[f])) r = {
                      url: n[2],
                      func: n[1] || l,
                      args: [],
                      line: +n[3],
                      column: n[4] ? +n[4] : null
                    };
                    else {
                      if (!(n = o.exec(d[f]))) continue;
                      var v = n[3] && n[3].indexOf(" > eval") > -1;
                      v && (t = c.exec(n[3])) ? (n[3] = t[1], n[4] = t[2], n[5] = null) : 0 !== f || n[5] || void 0 === e.columnNumber || (h[0].column = e.columnNumber + 1), r = {
                        url: n[3],
                        func: n[1] || l,
                        args: n[2] ? n[2].split(",") : [],
                        line: n[4] ? +n[4] : null,
                        column: n[5] ? +n[5] : null
                      }
                    }!r.func && r.line && (r.func = l), h.push(r)
                  }
                  return h.length ? {
                    name: e.name,
                    message: e.message,
                    url: i(),
                    stack: h
                  } : null
                }
              }

              function t(e, t, n, i) {
                var r = {
                  url: t,
                  line: n
                };
                if (r.url && r.line) {
                  if (e.incomplete = !1, r.func || (r.func = l), e.stack.length > 0 && e.stack[0].url === r.url) {
                    if (e.stack[0].line === r.line) return !1;
                    if (!e.stack[0].line && e.stack[0].func === r.func) return e.stack[0].line = r.line, !1
                  }
                  return e.stack.unshift(r), e.partial = !0, !0
                }
                return e.incomplete = !0, !1
              }

              function n(e, o) {
                for (var a, c, u = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, d = [], h = {}, f = !1, p = n.caller; p && !f; p = p.caller)
                  if (p !== r && p !== s.report) {
                    if (c = {
                        url: null,
                        func: l,
                        line: null,
                        column: null
                      }, p.name ? c.func = p.name : (a = u.exec(p.toString())) && (c.func = a[1]), void 0 === c.func) try {
                      c.func = a.input.substring(0, a.input.indexOf("{"))
                    } catch (e) {}
                    h["" + p] ? f = !0 : h["" + p] = !0, d.push(c)
                  }
                o && d.splice(0, o);
                var m = {
                  name: e.name,
                  message: e.message,
                  url: i(),
                  stack: d
                };
                return t(m, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), m
              }

              function r(t, r) {
                var o = null;
                r = null == r ? 0 : +r;
                try {
                  if (o = e(t)) return o
                } catch (e) {
                  if (s.debug) throw e
                }
                try {
                  if (o = n(t, r + 1)) return o
                } catch (e) {
                  if (s.debug) throw e
                }
                return {
                  name: t.name,
                  message: t.message,
                  url: i()
                }
              }
              return r.augmentStackTraceWithInitialElement = t, r.computeStackTraceFromStackProp = e, r
            }(), n.exports = s
          }).call(this, void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
          5: 5
        }],
        7: [function(e, t, n) {
          function i(e, t) {
            for (var n = 0; n < e.length; ++n)
              if (e[n] === t) return n;
            return -1
          }

          function r(e, t, n, i) {
            return JSON.stringify(e, o(t, i), n)
          }

          function s(e) {
            var t = {
              stack: e.stack,
              message: e.message,
              name: e.name
            };
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
          }

          function o(e, t) {
            var n = [],
              r = [];
            return null == t && (t = function(e, t) {
                return n[0] === t ? "[Circular ~]" : "[Circular ~." + r.slice(0, i(n, t)).join(".") + "]"
              }),
              function(o, a) {
                if (n.length > 0) {
                  var l = i(n, this);
                  ~l ? n.splice(l + 1) : n.push(this), ~l ? r.splice(l, 1 / 0, o) : r.push(o), ~i(n, a) && (a = t.call(this, o, a))
                } else n.push(a);
                return null == e ? a instanceof Error ? s(a) : a : e.call(this, o, a)
              }
          }
          n = t.exports = r, n.getSerialize = o
        }, {}]
      }, {}, [4])(4)
    })
  }).call(t, n(23))
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      s = i(r),
      o = n(5),
      a = i(o),
      l = n(114),
      c = i(l),
      u = n(48),
      d = i(u),
      h = n(10),
      f = i(h),
      p = s.default.View.extend({
        text: "",
        className: "inner",
        events: {
          "click .js-bt-loadmore": "_loadMore"
        },
        page: 1,
        type: 1,
        results: [],
        footers: {},
        initialize: function(e) {
          var t = e.url || null;
          this.type = e.type, this.page = e.page || 1, this._reset(e.text, e.models, t)
        },
        _loadMore: function() {
          var t = this;
          this._changeLoadForLoading("Loading..."), this.page++, e.ajax({
            type: "GET",
            url: a.default.generate("tv_inspiration_search", {
              page: this.page,
              text: this.text,
              type: this.type
            }),
            success: function(e) {
              t._showMoreInspiration(e), t._changeLoadForLoading("Load More")
            }
          })
        },
        _changeLoadForLoading: function(e) {
          document.querySelector("#load-more-btn span").textContent = e
        },
        _showMoreInspiration: function(t) {
          t[this.type].last && (document.getElementById("load-more").style.display = "none");
          var n = this.el.querySelector(".grid .list-items.list-flex"),
            i = document.createRange().createContextualFragment(t[this.type].items_html),
            r = document.createDocumentFragment();
          [].forEach.call(e(i.querySelector(".list-items.list-flex")).children(), function(e) {
            r.appendChild(e)
          }), this.footers[this.type].appendElements(r), d.default.observe(n)
        },
        show: function(e, t) {
          this._reset(e, t), this.el.innerHTML = "", this.render()
        },
        _reset: function(e, t, n) {
          this.results = t, this.text = e, this.url = n
        },
        createHeaderAndContainer: function(e) {
          var t = document.createRange().createContextualFragment(e.items_html),
            n = document.createDocumentFragment();
          return n.appendChild(t), n
        },
        renderSubmissions: function(e) {
          return this.createHeaderAndContainer(e)
        },
        renderCollections: function(e) {
          return this.createHeaderAndContainer(e)
        },
        renderElements: function(e) {
          return this.createHeaderAndContainer(e)
        },
        renderPosts: function(e) {
          return this.createHeaderAndContainer(e)
        },
        renderJobs: function(e) {
          return this.createHeaderAndContainer(e)
        },
        renderUsers: function(e) {
          return this.createHeaderAndContainer(e)
        },
        renderSummary: function(e, t, n) {
          return '<strong><a data-idpage="' + e + '" data-diffscroll="200" href="#" class="link-1 navscroll">' + t + " " + (1 == t ? n.substring(0, n.length - 1) : n) + "</a></strong>"
        },
        render: function() {
          var e = [],
            t = [],
            n = [];
          this.results.submission && this.results.submission.total && (e.push(this.renderSummary("submission", this.results.submission.total, "websites")), t.push(this.renderSubmissions(this.results.submission)), n.push("submission")), this.results.collection && this.results.collection.total && (e.push(this.renderSummary("collection", this.results.collection.total, "collections")), t.push(this.renderCollections(this.results.collection)), n.push("collection")), this.results.element && this.results.element.total && (e.push(this.renderSummary("element", this.results.element.total, "elements")), t.push(this.renderElements(this.results.element)), n.push("element")), this.results.post && this.results.post.total && (e.push(this.renderSummary("post", this.results.post.total, "articles")), t.push(this.renderPosts(this.results.post)), n.push("post")), this.results.job && this.results.job.total && (e.push(this.renderSummary("job", this.results.job.total, "jobs")), t.push(this.renderJobs(this.results.job)), n.push("job")), this.results.user && this.results.user.total && (e.push(this.renderSummary("user", this.results.user.total, "users")), t.push(this.renderUsers(this.results.user)), n.push("user")), this.el.innerHTML = (0, c.default)({
            summary: e,
            text: this.text
          });
          var i = this;
          if (t.forEach(function(e) {
              i.el.appendChild(e)
            }), n.forEach(function(e) {
              i.footers[e] = new f.default({
                el: i.el.querySelector("#" + e + " .js-section-list")
              })
            }), "all" != this.type && 1 == t.length && 1 == Object.keys(this.results).length) {
            this.el.appendChild(document.createRange().createContextualFragment('<div class="grid" id="load-more"><span class="button button-loadmore js-bt-loadmore" id="load-more-btn"><span>Load More</span></span></div>'))
          }
          return d.default.observe(this.el), this
        },
        renderFromExisting: function() {
          var e = this;
          [].forEach.call(this.el.querySelectorAll(".js-section"), function(t) {
            e.footers[t.id] = new f.default({
              el: t.querySelector(".js-section-list")
            })
          })
        }
      });
    t.default = p
  }).call(t, n(0))
}, function(e, t) {
  ! function(e, t) {
    "use strict";

    function n(e) {
      this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || u(), this.isIntersecting = !!e.intersectionRect;
      var t = this.boundingClientRect,
        n = t.width * t.height,
        i = this.intersectionRect,
        r = i.width * i.height;
      this.intersectionRatio = n ? r / n : this.isIntersecting ? 1 : 0
    }

    function i(e, t) {
      var n = t || {};
      if ("function" != typeof e) throw new Error("callback must be a function");
      if (n.root && 1 != n.root.nodeType) throw new Error("root must be an Element");
      this._checkForIntersections = s(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(n.rootMargin), this.thresholds = this._initThresholds(n.threshold), this.root = n.root || null, this.rootMargin = this._rootMarginValues.map(function(e) {
        return e.value + e.unit
      }).join(" ")
    }

    function r() {
      return e.performance && performance.now && performance.now()
    }

    function s(e, t) {
      var n = null;
      return function() {
        n || (n = setTimeout(function() {
          e(), n = null
        }, t))
      }
    }

    function o(e, t, n, i) {
      "function" == typeof e.addEventListener ? e.addEventListener(t, n, i || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
    }

    function a(e, t, n, i) {
      "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, i || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
    }

    function l(e, t) {
      var n = Math.max(e.top, t.top),
        i = Math.min(e.bottom, t.bottom),
        r = Math.max(e.left, t.left),
        s = Math.min(e.right, t.right),
        o = s - r,
        a = i - n;
      return o >= 0 && a >= 0 && {
        top: n,
        bottom: i,
        left: r,
        right: s,
        width: o,
        height: a
      }
    }

    function c(e) {
      var t;
      try {
        t = e.getBoundingClientRect()
      } catch (e) {}
      return t ? (t.width && t.height || (t = {
        top: t.top,
        right: t.right,
        bottom: t.bottom,
        left: t.left,
        width: t.right - t.left,
        height: t.bottom - t.top
      }), t) : u()
    }

    function u() {
      return {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 0,
        height: 0
      }
    }

    function d(e, t) {
      for (var n = t; n;) {
        if (n == e) return !0;
        n = h(n)
      }
      return !1
    }

    function h(e) {
      var t = e.parentNode;
      return t && 11 == t.nodeType && t.host ? t.host : t
    }
    if (!("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype)) {
      var f = [];
      i.prototype.THROTTLE_TIMEOUT = 100, i.prototype.POLL_INTERVAL = null, i.prototype.observe = function(e) {
        if (!this._observationTargets.some(function(t) {
            return t.element == e
          })) {
          if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
          this._registerInstance(), this._observationTargets.push({
            element: e,
            entry: null
          }), this._monitorIntersections()
        }
      }, i.prototype.unobserve = function(e) {
        this._observationTargets = this._observationTargets.filter(function(t) {
          return t.element != e
        }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
      }, i.prototype.disconnect = function() {
        this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
      }, i.prototype.takeRecords = function() {
        var e = this._queuedEntries.slice();
        return this._queuedEntries = [], e
      }, i.prototype._initThresholds = function(e) {
        var t = e || [0];
        return Array.isArray(t) || (t = [t]), t.sort().filter(function(e, t, n) {
          if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
          return e !== n[t - 1]
        })
      }, i.prototype._parseRootMargin = function(e) {
        var t = e || "0px",
          n = t.split(/\s+/).map(function(e) {
            var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
            if (!t) throw new Error("rootMargin must be specified in pixels or percent");
            return {
              value: parseFloat(t[1]),
              unit: t[2]
            }
          });
        return n[1] = n[1] || n[0], n[2] = n[2] || n[0], n[3] = n[3] || n[1], n
      }, i.prototype._monitorIntersections = function() {
        this._monitoringIntersections || (this._monitoringIntersections = !0, this._checkForIntersections(), this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0
        }))))
      }, i.prototype._unmonitorIntersections = function() {
        this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, a(e, "resize", this._checkForIntersections, !0), a(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
      }, i.prototype._checkForIntersections = function() {
        var e = this._rootIsInDom(),
          t = e ? this._getRootRect() : u();
        this._observationTargets.forEach(function(i) {
          var s = i.element,
            o = c(s),
            a = this._rootContainsTarget(s),
            l = i.entry,
            u = e && a && this._computeTargetAndRootIntersection(s, t),
            d = i.entry = new n({
              time: r(),
              target: s,
              boundingClientRect: o,
              rootBounds: t,
              intersectionRect: u
            });
          l ? e && a ? this._hasCrossedThreshold(l, d) && this._queuedEntries.push(d) : l && l.isIntersecting && this._queuedEntries.push(d) : this._queuedEntries.push(d)
        }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
      }, i.prototype._computeTargetAndRootIntersection = function(n, i) {
        if ("none" != e.getComputedStyle(n).display) {
          for (var r = c(n), s = r, o = h(n), a = !1; !a;) {
            var u = null,
              d = 1 == o.nodeType ? e.getComputedStyle(o) : {};
            if ("none" == d.display) return;
            if (o == this.root || o == t ? (a = !0, u = i) : o != t.body && o != t.documentElement && "visible" != d.overflow && (u = c(o)), u && !(s = l(u, s))) break;
            o = h(o)
          }
          return s
        }
      }, i.prototype._getRootRect = function() {
        var e;
        if (this.root) e = c(this.root);
        else {
          var n = t.documentElement,
            i = t.body;
          e = {
            top: 0,
            left: 0,
            right: n.clientWidth || i.clientWidth,
            width: n.clientWidth || i.clientWidth,
            bottom: n.clientHeight || i.clientHeight,
            height: n.clientHeight || i.clientHeight
          }
        }
        return this._expandRectByRootMargin(e)
      }, i.prototype._expandRectByRootMargin = function(e) {
        var t = this._rootMarginValues.map(function(t, n) {
            return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100
          }),
          n = {
            top: e.top - t[0],
            right: e.right + t[1],
            bottom: e.bottom + t[2],
            left: e.left - t[3]
          };
        return n.width = n.right - n.left, n.height = n.bottom - n.top, n
      }, i.prototype._hasCrossedThreshold = function(e, t) {
        var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
          i = t.isIntersecting ? t.intersectionRatio || 0 : -1;
        if (n !== i)
          for (var r = 0; r < this.thresholds.length; r++) {
            var s = this.thresholds[r];
            if (s == n || s == i || s < n != s < i) return !0
          }
      }, i.prototype._rootIsInDom = function() {
        return !this.root || d(t, this.root)
      }, i.prototype._rootContainsTarget = function(e) {
        return d(this.root || t, e)
      }, i.prototype._registerInstance = function() {
        f.indexOf(this) < 0 && f.push(this)
      }, i.prototype._unregisterInstance = function() {
        var e = f.indexOf(this); - 1 != e && f.splice(e, 1)
      }, e.IntersectionObserver = i, e.IntersectionObserverEntry = n
    }
  }(window, document)
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      s = i(r),
      o = n(7),
      a = i(o),
      l = n(13),
      c = i(l),
      u = n(5),
      d = i(u),
      h = s.default.Model.extend({
        defaults: {
          id: "",
          user: {},
          name: "",
          description: "",
          category: "",
          followers: [],
          following: !1,
          isCollaborator: []
        },
        followOrUnfollow: function() {
          var t = this,
            n = this.get("following"),
            i = n ? "tv_collection_unfollow" : "tv_collection_follow";
          t.set("following", !n);
          var r = d.default.generate(i, {
            id: this.get("id")
          });
          e.ajax({
            type: "POST",
            url: r,
            success: function(e) {
              e || t.set("following", n)
            }
          })
        },
        fetchFollowers: function(t) {
          var n = this;
          e.ajax({
            type: "GET",
            url: d.default.generate("tv_collection_fetch_followers", {
              id: n.get("id")
            }),
            success: function(e) {
              t(e)
            }
          })
        },
        checkIfUserLoggedIsFollower: function() {
          if (c.default.isLoggedIn())
            for (var e = this.get("followers"), t = 0; t < e.length; t++) e[t] == c.default.id && this.set("following", !0)
        },
        removeCollectable: function(t, n) {
          e.ajax({
            type: "POST",
            url: d.default.generate("tv_collection_remove_collectable", {
              idCollection: this.get("id"),
              idCollectable: t,
              type: n
            })
          }).success(function() {})
        },
        isCollaborator: function(e) {
          var t = !1;
          return a.default.each(this.get("collaborators"), function(n, i) {
            n.id == e && (t = !0)
          }), t
        }
      });
    t.default = h
  }).call(t, n(0))
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(1),
    s = i(r),
    o = n(118),
    a = i(o),
    l = n(13),
    c = i(l),
    u = n(9),
    d = i(u),
    h = n(6),
    f = i(h),
    p = n(19),
    m = i(p),
    v = n(119),
    g = i(v),
    _ = n(121),
    y = i(_),
    b = n(78),
    w = i(b),
    x = n(79),
    k = i(x),
    C = s.default.View.extend({
      tagName: "div",
      className: "box-content-collections",
      views: null,
      currentView: null,
      events: {
        "click .bt-create-collection": "_showCreateCollection"
      },
      template: a.default,
      lightbox: null,
      initialize: function() {
        if (!c.default.isLoggedIn()) return void this.undelegateEvents()
      },
      openFolder: function(e) {
        if (!c.default.isLoggedIn()) {
          return void(new m.default).open()
        }
        this.elementModel = e, this._render(), this._showAddToFolder()
      },
      editCollection: function(e) {
        this._showEmptyLightBox(), this._showEditCollection(e)
      },
      createNewCollection: function() {
        this._showEmptyLightBox(), this._showJustCreateCollection()
      },
      closeLightBox: function() {
        this.lightbox && this.lightbox.close()
      },
      _reload: function() {
        window.location.reload()
      },
      _destroyActualView: function() {
        this.currentView && (this.currentView.destroy(), this.currentView = null)
      },
      _render: function() {
        this._showLightBox({
          image: d.default.getImageInfo(this.elementModel.getImage(), null)
        }, !1)
      },
      _showEmptyLightBox: function() {
        this._showLightBox({}, !1)
      },
      _showLightBox: function(e, t) {
        this.$el.html(this.template(e)), this.lightbox = new f.default({
          remove_after_close: !0
        }), this.lightbox.show(this.$el, t)
      },
      _showCreateCollection: function() {
        var e = this._createCreateCollectionView();
        e.on("close", this._showAddToFolder, this), this._changeCurrentView(e)
      },
      _showEditCollection: function(e) {
        var t = this._createCreateCollectionView(e);
        this._attachEventsToSingleView(t), this._changeCurrentView(t)
      },
      _showJustCreateCollection: function() {
        var e = this._createCreateCollectionView();
        this._attachEventsToSingleView(e), this._changeCurrentView(e)
      },
      _attachEventsToSingleView: function(e) {
        e.on("close", this.closeLightBox, this), e.on("collection_created", this._reload, this), e.model.on("edit", this._reload, this)
      },
      _createCreateCollectionView: function(e) {
        var t = {
          model: new w.default
        };
        return e && (t.collection = e), new k.default(t)
      },
      _showAddToFolder: function() {
        var e = new g.default({
          model: new y.default,
          itemModel: this.elementModel
        });
        e.on("close", this.closeLightBox, this), this._changeCurrentView(e)
      },
      _changeCurrentView: function(e) {
        this._destroyActualView(), this.currentView = e, this.$(".box-categories").html(this.currentView.render().$el)
      }
    });
  t.default = C
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      s = i(r),
      o = n(5),
      a = i(o),
      l = s.default.Model.extend({
        defaults: {
          route: "tv_favourites_create_folder",
          categories: []
        },
        collection: null,
        categories_loaded: !1,
        form_datas: {
          name: null,
          categoryId: null,
          isPrivate: !1
        },
        removeCollection: function(t) {
          if (t) {
            var n = this;
            e.ajax({
              type: "DELETE",
              url: a.default.generate("tv_collection_remove", {
                id: t
              })
            }).success(function() {
              n.trigger("collection_removed")
            })
          }
        },
        getCategories: function() {
          if (this.get("categories").length > 0) return void this.trigger("categories_loaded");
          var t = a.default.generate("tv_collection_collection_categories"),
            n = this;
          e.ajax({
            type: "GET",
            url: t
          }).success(function(e) {
            n.set("categories", e), n.categories_loaded = !0, n.trigger("categories_loaded")
          })
        },
        setCollection: function(e) {
          this.collection = e
        },
        setDescription: function(e) {
          this.form_datas.description = e
        },
        setFolderName: function(e) {
          this.form_datas.name = e
        },
        setPrivate: function(e) {
          this.form_datas.isPrivate = e
        },
        setCategory: function(e) {
          this.form_datas.categoryId = e
        },
        _send: function(t, n) {
          var i, r, s = this;
          "create" == t ? (r = "tv_favourites_create_folder", i = "send") : (r = "tv_favourites_edit_folder", s.form_datas.collection_id = n.collection.id, i = "edit"), e.ajax({
            type: "POST",
            url: a.default.generate(r),
            data: s.form_datas
          }).success(function() {
            s.trigger(i, s)
          })
        },
        getErrorList: function() {
          var e = [];
          return this.form_datas.categoryId.length || e.push("category"), this.form_datas.name || e.push("name"), e
        }
      });
    t.default = l
  }).call(t, n(0))
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      s = i(r),
      o = n(122),
      a = i(o),
      l = n(6),
      c = i(l),
      u = n(25),
      d = i(u);
    n(29);
    var h = s.default.View.extend({
      isActiveToSend: !0,
      className: "tab-form active",
      tagName: "div",
      options: {
        isCollectionDetail: !1,
        collection: null
      },
      actions: {
        create: {
          categories: {},
          action: "CREATE"
        },
        edit: {
          categories: {},
          collection: {},
          action: "SAVE",
          delete: !0
        }
      },
      management: "create",
      events: {
        "click .new-folder": "_send",
        "click .link-delete": "_delete",
        "click .bt-cancel": "hideForm"
      },
      initialize: function(t) {
        this.model.getCategories(), this.options = e.extend({}, this.options, t), this.options.collection && (this.management = "edit", this.actions.edit.collection = t.collection, this.model.setCollection(t.collection)), this.options.isCollectionDetail && this.model.on("edit", this._updateDetailValues, this), this.loadEvents()
      },
      _delete: function() {
        var e = new c.default,
          t = this;
        e.openConfirmation("Are you sure?", "DELETE COLLECTION!", function() {
          t.model.removeCollection(t.options.collection.id)
        })
      },
      _updateDetailValues: function() {
        var e = this.model.form_datas;
        this.options.collection.name = e.name, this.options.collection.description = e.description, this.trigger("updated", this.options.collection)
      },
      hideForm: function() {
        this.trigger("close")
      },
      close: function() {
        this.model.resetCollaborators(), this.$("#tab-form").hide()
      },
      showError: function(e) {
        this.$("." + e + "-group").addClass("has-error"), this.$("." + e + "-error-msg").show()
      },
      _send: function(e) {
        this.$(".form-group").removeClass("has-error"), this.$(".alert").hide(), this.model.setFolderName(this.$el.find("#folder-name").val()), this.model.setCategory(this.$el.find("#collection_category").val()), this.model.setDescription(this.$el.find("#folder-description").val()), this.model.setPrivate(this.$el.find("#private").is(":checked"));
        var t = this.model.getErrorList();
        if (t.length > 0)
          for (var n = 0, i = t.length; n < i; n++) this.showError(t[n]);
        else this.isActiveToSend && (d.default.addLoading(e.currentTarget), this.isActiveToSend = !1, this.model._send(this.management, this.actions[this.management]))
      },
      render: function() {
        var e = this.actions[this.management];
        return e.categories = this.model.get("categories"), this.$el.html((0, a.default)({
          data: e
        })), this.$("#collection_category").chosen({
          inherit_select_classes: !0
        }), this
      },
      destroy: function() {
        this.undelegateEvents(), this.$el.removeData().unbind(), this.remove(), s.default.View.prototype.remove.call(this)
      },
      activeButtonToSend: function() {
        this.isActiveToSend = !0, this.trigger("collection_created"), this.hideForm()
      },
      loadCollectionDatas: function(e) {
        this.actions.edit.collection = e, this.render()
      },
      _collectionRemoved: function() {
        location.reload()
      },
      loadEvents: function() {
        this.model.on("send", this.activeButtonToSend, this), this.model.on("categories_loaded", this.render, this), this.model.on("collection_removed", this._collectionRemoved, this)
      }
    });
    t.default = h
  }).call(t, n(0))
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = n(1),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i);
  n(42);
  var s = r.default.View.extend({
    options: {},
    events: {
      "mouseover .js-video-hover": "_playVideo",
      "mouseout .js-video-hover": "_pauseVideo",
      "click .js-more": "_showUsersCollected"
    },
    initialize: function(e) {
      this.options = Object.assign({}, this.options, e), this._loadEvents()
    },
    _showUsersCollected: function() {
      this._doShowUsersCollected()
    },
    _playVideo: function(e) {
      e.currentTarget.play()
    },
    _pauseVideo: function(e) {
      e.currentTarget.pause()
    },
    render: function() {
      return this
    },
    _loadEvents: function() {}
  });
  t.default = s
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(7),
    s = i(r),
    o = n(49),
    a = i(o),
    l = n(77),
    c = i(l),
    u = n(25),
    d = i(u),
    h = n(80),
    f = i(h),
    p = f.default.extend({
      events: function() {
        return s.default.extend({}, f.default.prototype.events, {
          "click .js-collect": "openFolder"
        })
      },
      _doShowUsersCollected: function() {
        var e = new a.default;
        e.showLoading(), this.model.fetchUsersCollected(function(t) {
          e.render(t)
        })
      },
      _loadEvents: function() {
        this.model.on("successfully_collected", this._closeAndActiveButton, this)
      },
      _closeAndActiveButton: function() {
        this.addToCollectionContainer.closeLightBox(), d.default.addOne(this.el.querySelector(".js-collect"))
      },
      openFolder: function() {
        this.addToCollectionContainer = new c.default, this.addToCollectionContainer.openFolder(this.model)
      }
    });
  t.default = p
}, , function(e, t, n) {
  function i(e) {
    return e && (e.__esModule ? e.default : e)
  }
  var r = n(3);
  e.exports = (r.default || r).template({
    1: function(e, t, r, s, o) {
      var a = null != t ? t : e.nullContext || {},
        l = e.escapeExpression;
      return '        <img src="' + l(i(n(47)).call(a, "bundles/tvweb/images/pages/awards-2017/circle.png", {
        name: "helpers/asset",
        hash: {},
        data: o
      })) + '" class="img-floating n-1" alt="">\n        <img src="' + l(i(n(47)).call(a, "bundles/tvweb/images/pages/awards-2017/button.png", {
        name: "helpers/asset",
        hash: {},
        data: o
      })) + '" class="img-floating n-2" alt="">\n        <img src="' + l(i(n(47)).call(a, "bundles/tvweb/images/pages/awards-2017/stick.png", {
        name: "helpers/asset",
        hash: {},
        data: o
      })) + '" class="img-floating n-3" alt="">\n'
    },
    compiler: [7, ">= 4.0.0"],
    main: function(e, t, r, s, o) {
      var a, l = null != t ? t : e.nullContext || {},
        c = e.lambda,
        u = e.escapeExpression;
      return '<div class="box-login">\n' + (null != (a = r.if.call(l, null != t ? t.floating_objects : t, {
        name: "if",
        hash: {},
        fn: e.program(1, o, 0),
        inverse: e.noop,
        data: o
      })) ? a : "") + '    <div class="tab-form js-tab-form active" id="tab-login">\n        <div class="header">\n            <h2 class="heading-xx-medium">Log in with your account</h2>\n        </div>\n        <div class="bts">\n             <p>\n                <a href="/login/twitter?_destination=' + u(c(null != t ? t.from_url : t, t)) + '" class="bt-connect bt-twitter">\n                    <span>Connect with Twitter</span>\n                    ' + u(i(n(18)).call(l, "twitter", 17, 14, {
        name: "helpers/icon",
        hash: {},
        data: o
      })) + '\n                </a>\n            </p>\n            <p>\n                <a href="/login/facebook?_destination=' + u(c(null != t ? t.from_url : t, t)) + '" class="bt-connect bt-facebook">\n                    <span>Connect with Facebook</span>\n                    ' + u(i(n(18)).call(l, "facebook", 6.5, 14, {
        name: "helpers/icon",
        hash: {},
        data: o
      })) + '\n                </a>\n            </p>\n            <p>\n                <span class="bt-connect bt-email js-tab-login" data-tab="tab-login-form">\n                    <span>Log in with your e-mail</span>\n                    ' + u(i(n(18)).call(l, "mail", 19.6, 14, {
        name: "helpers/icon",
        hash: {},
        data: o
      })) + '\n                </span>\n            </p>\n        </div>\n        <div class="footer">\n            <h4 class="heading-small">Not a member yet? <a class="js-register" href="' + u(i(n(11)).call(l, "tv_register", {
        name: "helpers/path",
        hash: {},
        data: o
      })) + '">Register now</a></h4>\n        </div>\n    </div>\n    <div class="tab-form js-tab-form" id="tab-login-form" style="display:none">\n        <div class="header">\n            <h2 class="heading-xx-medium">Login with your e-mail</h2>\n        </div>\n        <div class="form">\n            <form action="' + u(i(n(11)).call(l, "tv_login_check", {
        name: "helpers/path",
        hash: {},
        data: o
      })) + '" method="post" novalidate>\n                <p><label class="tip-form"><input name="_username" class="text-input" placeholder="Email or Username" type="text"></label></p>\n                <p><label class="tip-form"><input name="_password" class="text-input" placeholder="Password" type="password"></label></p>\n                <p class="check"><input id="remember_me" name="_remember_me" type="checkbox"> <label for="remember">Keep me logged in</label></p>\n                <p><button type="submit" class="button js-bt-loading"><span class="bt-content">LOGIN NOW!</span></button></p>\n                <p><strong><a class="link-2 js-forgot-password" href="' + u(i(n(11)).call(l, "tv_forgot_password", {
        name: "helpers/path",
        hash: {},
        data: o
      })) + '">Forgot your password?</a></strong></p>\n                <input type="hidden" name="_target_path" value="' + u(c(null != t ? t.from_url : t, t)) + '" />\n            </form>\n        </div>\n        <div class="footer">\n            <h4 class="heading-small">Not a member yet? <a class="js-register" href="' + u(i(n(11)).call(l, "tv_register", {
        name: "helpers/path",
        hash: {},
        data: o
      })) + '">Register now</a></h4>\n        </div>\n    </div>\n' + (null != (a = e.invokePartial(n(69), t, {
        name: "_loader",
        hash: {
          not_show: !0
        },
        data: o,
        indent: "    ",
        helpers: r,
        partials: s,
        decorators: e.decorators
      })) ? a : "") + "</div>\n"
    },
    usePartial: !0,
    useData: !0
  })
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function r(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t
  }

  function s() {
    var e = new a.HandlebarsEnvironment;
    return f.extend(e, a), e.SafeString = c.default, e.Exception = d.default, e.Utils = f, e.escapeExpression = f.escapeExpression, e.VM = m, e.template = function(t) {
      return m.template(t, e)
    }, e
  }
  t.__esModule = !0;
  var o = n(68),
    a = r(o),
    l = n(96),
    c = i(l),
    u = n(32),
    d = i(u),
    h = n(24),
    f = r(h),
    p = n(97),
    m = r(p),
    v = n(98),
    g = i(v),
    _ = s();
  _.create = s, g.default(_), _.default = _, t.default = _, e.exports = t.default
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function r(e) {
    o.default(e), l.default(e), u.default(e), h.default(e), p.default(e), v.default(e), _.default(e)
  }
  t.__esModule = !0, t.registerDefaultHelpers = r;
  var s = n(86),
    o = i(s),
    a = n(87),
    l = i(a),
    c = n(88),
    u = i(c),
    d = n(89),
    h = i(d),
    f = n(90),
    p = i(f),
    m = n(91),
    v = i(m),
    g = n(92),
    _ = i(g)
}, function(e, t, n) {
  "use strict";
  t.__esModule = !0;
  var i = n(24);
  t.default = function(e) {
    e.registerHelper("blockHelperMissing", function(t, n) {
      var r = n.inverse,
        s = n.fn;
      if (!0 === t) return s(this);
      if (!1 === t || null == t) return r(this);
      if (i.isArray(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : r(this);
      if (n.data && n.ids) {
        var o = i.createFrame(n.data);
        o.contextPath = i.appendContextPath(n.data.contextPath, n.name), n = {
          data: o
        }
      }
      return s(t, n)
    })
  }, e.exports = t.default
}, function(e, t, n) {
  "use strict";
  t.__esModule = !0;
  var i = n(24),
    r = n(32),
    s = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(r);
  t.default = function(e) {
    e.registerHelper("each", function(e, t) {
      function n(t, n, s) {
        c && (c.key = t, c.index = n, c.first = 0 === n, c.last = !!s, u && (c.contextPath = u + t)), l += r(e[t], {
          data: c,
          blockParams: i.blockParams([e[t], t], [u + t, null])
        })
      }
      if (!t) throw new s.default("Must pass iterator to #each");
      var r = t.fn,
        o = t.inverse,
        a = 0,
        l = "",
        c = void 0,
        u = void 0;
      if (t.data && t.ids && (u = i.appendContextPath(t.data.contextPath, t.ids[0]) + "."), i.isFunction(e) && (e = e.call(this)), t.data && (c = i.createFrame(t.data)), e && "object" == typeof e)
        if (i.isArray(e))
          for (var d = e.length; a < d; a++) a in e && n(a, a, a === e.length - 1);
        else {
          var h = void 0;
          for (var f in e) e.hasOwnProperty(f) && (void 0 !== h && n(h, a - 1), h = f, a++);
          void 0 !== h && n(h, a - 1, !0)
        }
      return 0 === a && (l = o(this)), l
    })
  }, e.exports = t.default
}, function(e, t, n) {
  "use strict";
  t.__esModule = !0;
  var i = n(32),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i);
  t.default = function(e) {
    e.registerHelper("helperMissing", function() {
      if (1 !== arguments.length) throw new r.default('Missing helper: "' + arguments[arguments.length - 1].name + '"')
    })
  }, e.exports = t.default
}, function(e, t, n) {
  "use strict";
  t.__esModule = !0;
  var i = n(24);
  t.default = function(e) {
    e.registerHelper("if", function(e, t) {
      return i.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || i.isEmpty(e) ? t.inverse(this) : t.fn(this)
    }), e.registerHelper("unless", function(t, n) {
      return e.helpers.if.call(this, t, {
        fn: n.inverse,
        inverse: n.fn,
        hash: n.hash
      })
    })
  }, e.exports = t.default
}, function(e, t, n) {
  "use strict";
  t.__esModule = !0, t.default = function(e) {
    e.registerHelper("log", function() {
      for (var t = [void 0], n = arguments[arguments.length - 1], i = 0; i < arguments.length - 1; i++) t.push(arguments[i]);
      var r = 1;
      null != n.hash.level ? r = n.hash.level : n.data && null != n.data.level && (r = n.data.level), t[0] = r, e.log.apply(e, t)
    })
  }, e.exports = t.default
}, function(e, t, n) {
  "use strict";
  t.__esModule = !0, t.default = function(e) {
    e.registerHelper("lookup", function(e, t) {
      return e && e[t]
    })
  }, e.exports = t.default
}, function(e, t, n) {
  "use strict";
  t.__esModule = !0;
  var i = n(24);
  t.default = function(e) {
    e.registerHelper("with", function(e, t) {
      i.isFunction(e) && (e = e.call(this));
      var n = t.fn;
      if (i.isEmpty(e)) return t.inverse(this);
      var r = t.data;
      return t.data && t.ids && (r = i.createFrame(t.data), r.contextPath = i.appendContextPath(t.data.contextPath, t.ids[0])), n(e, {
        data: r,
        blockParams: i.blockParams([e], [r && r.contextPath])
      })
    })
  }, e.exports = t.default
}, function(e, t, n) {
  "use strict";

  function i(e) {
    s.default(e)
  }
  t.__esModule = !0, t.registerDefaultDecorators = i;
  var r = n(94),
    s = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(r)
}, function(e, t, n) {
  "use strict";
  t.__esModule = !0;
  var i = n(24);
  t.default = function(e) {
    e.registerDecorator("inline", function(e, t, n, r) {
      var s = e;
      return t.partials || (t.partials = {}, s = function(r, s) {
        var o = n.partials;
        n.partials = i.extend({}, o, t.partials);
        var a = e(r, s);
        return n.partials = o, a
      }), t.partials[r.args[0]] = r.fn, s
    })
  }, e.exports = t.default
}, function(e, t, n) {
  "use strict";
  t.__esModule = !0;
  var i = n(24),
    r = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      lookupLevel: function(e) {
        if ("string" == typeof e) {
          var t = i.indexOf(r.methodMap, e.toLowerCase());
          e = t >= 0 ? t : parseInt(e, 10)
        }
        return e
      },
      log: function(e) {
        if (e = r.lookupLevel(e), "undefined" != typeof console && r.lookupLevel(r.level) <= e) {
          var t = r.methodMap[e];
          console[t] || (t = "log");
          for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) i[s - 1] = arguments[s];
          console[t].apply(console, i)
        }
      }
    };
  t.default = r, e.exports = t.default
}, function(e, t, n) {
  "use strict";

  function i(e) {
    this.string = e
  }
  t.__esModule = !0, i.prototype.toString = i.prototype.toHTML = function() {
    return "" + this.string
  }, t.default = i, e.exports = t.default
}, function(e, t, n) {
  "use strict";

  function i(e) {
    var t = e && e[0] || 1,
      n = m.COMPILER_REVISION;
    if (t !== n) {
      if (t < n) {
        var i = m.REVISION_CHANGES[n],
          r = m.REVISION_CHANGES[t];
        throw new p.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + r + ").")
      }
      throw new p.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
    }
  }

  function r(e, t) {
    function n(n, i, r) {
      r.hash && (i = h.extend({}, i, r.hash), r.ids && (r.ids[0] = !0)), n = t.VM.resolvePartial.call(this, n, i, r);
      var s = t.VM.invokePartial.call(this, n, i, r);
      if (null == s && t.compile && (r.partials[r.name] = t.compile(n, e.compilerOptions, t), s = r.partials[r.name](i, r)), null != s) {
        if (r.indent) {
          for (var o = s.split("\n"), a = 0, l = o.length; a < l && (o[a] || a + 1 !== l); a++) o[a] = r.indent + o[a];
          s = o.join("\n")
        }
        return s
      }
      throw new p.default("The partial " + r.name + " could not be compiled when running in runtime-only mode")
    }

    function i(t) {
      function n(t) {
        return "" + e.main(r, t, r.helpers, r.partials, o, l, a)
      }
      var s = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
        o = s.data;
      i._setup(s), !s.partial && e.useData && (o = c(t, o));
      var a = void 0,
        l = e.useBlockParams ? [] : void 0;
      return e.useDepths && (a = s.depths ? t != s.depths[0] ? [t].concat(s.depths) : s.depths : [t]), (n = u(e.main, n, r, s.depths || [], o, l))(t, s)
    }
    if (!t) throw new p.default("No environment passed to template");
    if (!e || !e.main) throw new p.default("Unknown template object: " + typeof e);
    e.main.decorator = e.main_d, t.VM.checkRevision(e.compiler);
    var r = {
      strict: function(e, t) {
        if (!(t in e)) throw new p.default('"' + t + '" not defined in ' + e);
        return e[t]
      },
      lookup: function(e, t) {
        for (var n = e.length, i = 0; i < n; i++)
          if (e[i] && null != e[i][t]) return e[i][t]
      },
      lambda: function(e, t) {
        return "function" == typeof e ? e.call(t) : e
      },
      escapeExpression: h.escapeExpression,
      invokePartial: n,
      fn: function(t) {
        var n = e[t];
        return n.decorator = e[t + "_d"], n
      },
      programs: [],
      program: function(e, t, n, i, r) {
        var o = this.programs[e],
          a = this.fn(e);
        return t || r || i || n ? o = s(this, e, a, t, n, i, r) : o || (o = this.programs[e] = s(this, e, a)), o
      },
      data: function(e, t) {
        for (; e && t--;) e = e._parent;
        return e
      },
      merge: function(e, t) {
        var n = e || t;
        return e && t && e !== t && (n = h.extend({}, t, e)), n
      },
      nullContext: Object.seal({}),
      noop: t.VM.noop,
      compilerInfo: e.compiler
    };
    return i.isTop = !0, i._setup = function(n) {
      n.partial ? (r.helpers = n.helpers, r.partials = n.partials, r.decorators = n.decorators) : (r.helpers = r.merge(n.helpers, t.helpers), e.usePartial && (r.partials = r.merge(n.partials, t.partials)), (e.usePartial || e.useDecorators) && (r.decorators = r.merge(n.decorators, t.decorators)))
    }, i._child = function(t, n, i, o) {
      if (e.useBlockParams && !i) throw new p.default("must pass block params");
      if (e.useDepths && !o) throw new p.default("must pass parent depths");
      return s(r, t, e[t], n, 0, i, o)
    }, i
  }

  function s(e, t, n, i, r, s, o) {
    function a(t) {
      var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
        a = o;
      return !o || t == o[0] || t === e.nullContext && null === o[0] || (a = [t].concat(o)), n(e, t, e.helpers, e.partials, r.data || i, s && [r.blockParams].concat(s), a)
    }
    return a = u(n, a, e, o, i, s), a.program = t, a.depth = o ? o.length : 0, a.blockParams = r || 0, a
  }

  function o(e, t, n) {
    return e ? e.call || n.name || (n.name = e, e = n.partials[e]) : e = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name], e
  }

  function a(e, t, n) {
    var i = n.data && n.data["partial-block"];
    n.partial = !0, n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
    var r = void 0;
    if (n.fn && n.fn !== l && function() {
        n.data = m.createFrame(n.data);
        var e = n.fn;
        r = n.data["partial-block"] = function(t) {
          var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
          return n.data = m.createFrame(n.data), n.data["partial-block"] = i, e(t, n)
        }, e.partials && (n.partials = h.extend({}, n.partials, e.partials))
      }(), void 0 === e && r && (e = r), void 0 === e) throw new p.default("The partial " + n.name + " could not be found");
    if (e instanceof Function) return e(t, n)
  }

  function l() {
    return ""
  }

  function c(e, t) {
    return t && "root" in t || (t = t ? m.createFrame(t) : {}, t.root = e), t
  }

  function u(e, t, n, i, r, s) {
    if (e.decorator) {
      var o = {};
      t = e.decorator(t, o, n, i && i[0], r, s, i), h.extend(t, o)
    }
    return t
  }
  t.__esModule = !0, t.checkRevision = i, t.template = r, t.wrapProgram = s, t.resolvePartial = o, t.invokePartial = a, t.noop = l;
  var d = n(24),
    h = function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }(d),
    f = n(32),
    p = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(f),
    m = n(68)
}, function(e, t, n) {
  "use strict";
  (function(n) {
    t.__esModule = !0, t.default = function(e) {
      var t = void 0 !== n ? n : window,
        i = t.Handlebars;
      e.noConflict = function() {
        return t.Handlebars === e && (t.Handlebars = i), e
      }
    }, e.exports = t.default
  }).call(t, n(23))
}, function(e, t) {
  ! function() {
    function e(e, t) {
      var n = e.split("."),
        i = u;
      n[0] in i || !i.execScript || i.execScript("var " + n[0]);
      for (var r; n.length && (r = n.shift());) n.length || void 0 === t ? i = i[r] ? i[r] : i[r] = {} : i[r] = t
    }

    function t(e) {
      var t, n = 0;
      for (t in e) n++;
      return n
    }

    function n(e) {
      var t, n = {};
      for (t in e) n[t] = e[t];
      return n
    }

    function i(e, t) {
      this.c = {}, this.b = [];
      var n = arguments.length;
      if (1 < n) {
        if (n % 2) throw Error("Uneven number of arguments");
        for (var s = 0; s < n; s += 2) this.set(arguments[s], arguments[s + 1])
      } else if (e) {
        var o;
        if (e instanceof i)
          for (r(e), s = e.b.concat(), r(e), o = [], n = 0; n < e.b.length; n++) o.push(e.c[e.b[n]]);
        else {
          var n = [],
            a = 0;
          for (s in e) n[a++] = s;
          s = n, n = [], a = 0;
          for (o in e) n[a++] = e[o];
          o = n
        }
        for (n = 0; n < s.length; n++) this.set(s[n], o[n])
      }
    }

    function r(e) {
      if (e.f != e.b.length) {
        for (var t = 0, n = 0; t < e.b.length;) {
          var i = e.b[t];
          s(e.c, i) && (e.b[n++] = i), t++
        }
        e.b.length = n
      }
      if (e.f != e.b.length) {
        for (var r = {}, n = t = 0; t < e.b.length;) i = e.b[t], s(r, i) || (e.b[n++] = i, r[i] = 1), t++;
        e.b.length = n
      }
    }

    function s(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }

    function o() {
      return u.navigator ? u.navigator.userAgent : null
    }

    function a(e, t) {
      this.a = e || {
        e: "",
        prefix: "",
        host: "",
        scheme: ""
      }, this.h(t || {})
    }

    function l(e, t, n, i) {
      var r, s = RegExp(/\[\]$/);
      if (n instanceof Array) h(n, function(n, r) {
        s.test(t) ? i(t, n) : l(e, t + "[" + ("object" == typeof n ? r : "") + "]", n, i)
      });
      else if ("object" == typeof n)
        for (r in n) l(e, t + "[" + r + "]", n[r], i);
      else i(t, n)
    }
    var c, u = this,
      d = Array.prototype,
      h = d.forEach ? function(e, t, n) {
        d.forEach.call(e, t, n)
      } : function(e, t, n) {
        for (var i = e.length, r = "string" == typeof e ? e.split("") : e, s = 0; s < i; s++) s in r && t.call(n, r[s], s, e)
      };
    i.prototype.f = 0, i.prototype.p = 0, i.prototype.get = function(e, t) {
      return s(this.c, e) ? this.c[e] : t
    }, i.prototype.set = function(e, t) {
      s(this.c, e) || (this.f++, this.b.push(e), this.p++), this.c[e] = t
    };
    var f, p, m, v;
    v = m = p = f = !1;
    var g;
    if (g = o()) {
      var _ = u.navigator;
      f = 0 == g.lastIndexOf("Opera", 0), p = !f && (-1 != g.indexOf("MSIE") || -1 != g.indexOf("Trident")), m = !f && -1 != g.indexOf("WebKit"), v = !f && !m && !p && "Gecko" == _.product
    }
    var y, b = p,
      w = v,
      x = m;
    if (f && u.opera) {
      var k = u.opera.version;
      "function" == typeof k && k()
    } else w ? y = /rv\:([^\);]+)(\)|;)/ : b ? y = /\b(?:MSIE|rv)\s+([^\);]+)(\)|;)/ : x && (y = /WebKit\/(\S+)/), y && y.exec(o());
    a.g = function() {
      return a.j ? a.j : a.j = new a
    }, c = a.prototype, c.h = function(e) {
      this.d = new i(e)
    }, c.o = function() {
      return this.d
    }, c.k = function(e) {
      this.a.e = e
    }, c.n = function() {
      return this.a.e
    }, c.l = function(e) {
      this.a.prefix = e
    }, c.i = function(e) {
      var t = this.a.prefix + e;
      if (s(this.d.c, t)) e = t;
      else if (!s(this.d.c, e)) throw Error('The route "' + e + '" does not exist.');
      return this.d.get(e)
    }, c.m = function(e, i, r) {
      var s = this.i(e),
        o = i || {},
        a = n(o),
        c = "",
        u = !0,
        d = "";
      if (h(s.tokens, function(t) {
          if ("text" === t[0]) c = t[1] + c, u = !1;
          else {
            if ("variable" !== t[0]) throw Error('The token type "' + t[0] + '" is not supported.');
            var n = t[3] in s.defaults;
            if (!1 === u || !n || t[3] in o && o[t[3]] != s.defaults[t[3]]) {
              if (t[3] in o) {
                var n = o[t[3]],
                  i = t[3];
                i in a && delete a[i]
              } else {
                if (!n) {
                  if (u) return;
                  throw Error('The route "' + e + '" requires the parameter "' + t[3] + '".')
                }
                n = s.defaults[t[3]]
              }(!0 !== n && !1 !== n && "" !== n || !u) && (i = encodeURIComponent(n).replace(/%2F/g, "/"), "null" === i && null === n && (i = ""), c = t[1] + i + c), u = !1
            } else n && (t = t[3]) in a && delete a[t]
          }
        }), "" === c && (c = "/"), h(s.hosttokens, function(e) {
          var t;
          if ("text" === e[0]) d = e[1] + d;
          else if ("variable" === e[0]) {
            if (e[3] in o) {
              t = o[e[3]];
              var n = e[3];
              n in a && delete a[n]
            } else e[3] in s.defaults && (t = s.defaults[e[3]]);
            d = e[1] + t + d
          }
        }), c = this.a.e + c, "_scheme" in s.requirements && this.a.scheme != s.requirements._scheme ? c = s.requirements._scheme + "://" + (d || this.a.host) + c : "schemes" in s && void 0 !== s.schemes[0] && this.a.scheme != s.schemes[0] ? c = s.schemes[0] + "://" + (d || this.a.host) + c : d && this.a.host !== d ? c = this.a.scheme + "://" + d + c : !0 === r && (c = this.a.scheme + "://" + this.a.host + c), 0 < t(a)) {
        var f, p = [];
        i = function(e, t) {
          t = "function" == typeof t ? t() : t, p.push(encodeURIComponent(e) + "=" + encodeURIComponent(null === t ? "" : t))
        };
        for (f in a) l(this, f, a[f], i);
        c = c + "?" + p.join("&").replace(/%20/g, "+")
      }
      return c
    }, e("fos.Router", a), e("fos.Router.setData", function(e) {
      var t = a.g();
      t.k(e.base_url), t.h(e.routes), "prefix" in e && t.l(e.prefix), t.a.host = e.host, t.a.scheme = e.scheme
    }), a.getInstance = a.g, a.prototype.setRoutes = a.prototype.h, a.prototype.getRoutes = a.prototype.o, a.prototype.setBaseUrl = a.prototype.k, a.prototype.getBaseUrl = a.prototype.n, a.prototype.generate = a.prototype.m, a.prototype.setPrefix = a.prototype.l, a.prototype.getRoute = a.prototype.i, window.Routing = a.g()
  }()
}, function(e, t, n) {
  "use strict";
  fos.Router.setData({
    base_url: "",
    routes: {
      tv_login_check: {
        tokens: [
          ["text", "/login_check"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_forgot_password: {
        tokens: [
          ["text", "/forgot-password"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_register: {
        tokens: [
          ["text", "/register/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: ["http"]
      },
      tv_register_ajax: {
        tokens: [
          ["text", "/register_ajax"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: ["http"]
      },
      tv_cookies_policy: {
        tokens: [
          ["text", "/cookies-policy/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_submission_upload_temporary_file: {
        tokens: [
          ["text", "/upload/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: ["http"]
      },
      tv_submission_upload_temporary_mobile_file: {
        tokens: [
          ["text", "/upload_mobile/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: ["http"]
      },
      tv_nominees: {
        tokens: [
          ["text", "/nominees/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_nominees_show: {
        tokens: [
          ["variable", "/", "[^/]++", "slug"],
          ["text", "/sites"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_site_show: {
        tokens: [
          ["variable", "/", "[^/]++", "slug"],
          ["text", "/sites"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_site_sotw_show: {
        tokens: [
          ["variable", "/", "[^/]++", "slug"],
          ["text", "/mobile-sites"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_site_mobile_excellence_show: {
        tokens: [
          ["text", "/mobile-excellence"],
          ["variable", "/", "[^/]++", "slug"],
          ["text", "/sites"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_site_get_user_votes: {
        tokens: [
          ["text", "/get_user_votes"],
          ["variable", "/", "[^/]++", "slug"],
          ["text", "/sites"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_site_get_user_votes_score: {
        tokens: [
          ["text", "/get_user_votes_score"],
          ["variable", "/", "[^/]++", "slug"],
          ["text", "/sites"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_sotds_gallery: {
        tokens: [
          ["text", "/awards-of-the-day/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_sotms_gallery: {
        tokens: [
          ["text", "/awards-of-the-month/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_sotms_nominees_user_vote: {
        tokens: [
          ["text", "/awards-of-the-month/nominees/vote_user"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_sotms_nominees_get_user_vote: {
        tokens: [
          ["text", "/awards-of-the-month/nominees/get_vote_user"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_sotys_gallery: {
        tokens: [
          ["text", "/awards-of-the-year/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_honorable_mention_list: {
        tokens: [
          ["text", "/honorable-mentions/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_judge_search: {
        tokens: [
          ["text", "/jury/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_judge_search_by_tag: {
        tokens: [
          ["text", "/"],
          ["variable", "/", "[^/]++", "parameter"],
          ["text", "/jury"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_contact_us: {
        tokens: [
          ["text", "/contact-us/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_book_case_studies: {
        tokens: [
          ["text", "/case_studies_vol1/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_search_websites: {
        tokens: [
          ["text", "/websites/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_search_websites_by_tag: {
        tokens: [
          ["text", "/"],
          ["variable", "/", "[^/]++", "parameter"],
          ["text", "/websites"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_vote_year_category_vote_check: {
        tokens: [
          ["text", "/check"],
          ["variable", "/", "[^/]++", "slug"],
          ["text", "/annual-awards-2016"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_vote_year_vote: {
        tokens: [
          ["variable", "/", "[^/]++", "id"],
          ["text", "/annual-awards-2016/vote"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_vote_annual_vote_2017: {
        tokens: [
          ["text", "/annual-awards-2017/vote/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: []
      },
      tv_vote_annual_category_2017: {
        tokens: [
          ["variable", "/", "[^/]++", "slug"],
          ["text", "/annual-awards-2017"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_blog_post: {
        tokens: [
          ["text", ".html"],
          ["variable", "/", "[^/\\.]++", "slug"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_search_articles: {
        tokens: [
          ["text", "/search-articles/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_search_articles_by_tag: {
        tokens: [
          ["text", "/"],
          ["variable", "/", "[^/]++", "parameter"],
          ["text", "/blog"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_job: {
        tokens: [
          ["text", "/jobs/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_job_show: {
        tokens: [
          ["text", ".html"],
          ["variable", "/", "[^/\\.]++", "slug"],
          ["text", "/jobs"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_job_search: {
        tokens: [
          ["text", "/jobs/search/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_job_search_by_tag: {
        tokens: [
          ["text", "/"],
          ["variable", "/", "[^/]++", "parameter"],
          ["text", "/jobs"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_job_upload_temporary_file: {
        tokens: [
          ["text", "/jobs/upload/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: []
      },
      tv_directory_index: {
        tokens: [
          ["text", "/directory/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_directory_search: {
        tokens: [
          ["text", "/directory/search/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_directory_suggest: {
        tokens: [
          ["text", "/directory/suggest/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_directory_search_by_tag: {
        tokens: [
          ["text", "/"],
          ["variable", "/", "[^/]++", "parameter"],
          ["text", "/directory/search"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_favourites_create_folder: {
        tokens: [
          ["text", "/favourites/create-collection"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: []
      },
      tv_favourites_edit_folder: {
        tokens: [
          ["text", "/favourites/edit-folder"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: []
      },
      tv_favourites_create_submission_collectable: {
        tokens: [
          ["variable", "/", "[^/]++", "idCollection"],
          ["text", "/add-submission"],
          ["variable", "/", "[^/]++", "slug"],
          ["text", "/favourites"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: []
      },
      tv_favourites_add_external_to_collection: {
        tokens: [
          ["variable", "/", "[^/]++", "idCollection"],
          ["text", "/add-external-to-collection"],
          ["variable", "/", "[^/]++", "id"],
          ["text", "/favourites"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: []
      },
      tv_favourites_add_collectable_to_collection: {
        tokens: [
          ["variable", "/", "[^/]++", "idCollection"],
          ["text", "/add-collectable"],
          ["variable", "/", "[^/]++", "collectableId"],
          ["text", "/favourites"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: []
      },
      tv_favourites_create_post_collectable: {
        tokens: [
          ["variable", "/", "[^/]++", "idCollection"],
          ["text", "/add-post"],
          ["variable", "/", "[^/]++", "slug"],
          ["text", "/favourites"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: []
      },
      tv_favourites_collections: {
        tokens: [
          ["text", "/favourites/collections"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_favourites_collections_by_id: {
        tokens: [
          ["text", "/favourites/collections_by_id"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_favourites_add_external_element_raw: {
        tokens: [
          ["text", "/favourites/add-external-element-raw"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: []
      },
      tv_favourites_images: {
        tokens: [
          ["text", "/favourites/images-from-url"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: []
      },
      tv_favourites_upload_image: {
        tokens: [
          ["text", "/favourites/upload-image"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: []
      },
      tv_favourites_edit_element: {
        tokens: [
          ["text", "/favourites/edit-collection-external-element"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: []
      },
      tv_favourites_sort_collections: {
        tokens: [
          ["text", "/favourites/sort-collections"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: []
      },
      tv_favourites_sort_collectables: {
        tokens: [
          ["text", "/sort-collection/"],
          ["variable", "/", "[^/]++", "id"],
          ["text", "/favourites"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: []
      },
      tv_favourites_check_user_has_submission: {
        tokens: [
          ["text", "/favourites/check-user-submission"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: []
      },
      tv_coupon_check: {
        tokens: [
          ["text", "/coupon/check-coupon"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: ["http"]
      },
      tv_ajax_comment_point: {
        tokens: [
          ["text", "/ajax/comment-registration"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["POST"],
        schemes: []
      },
      tv_ajax_load_more_inspiration: {
        tokens: [
          ["variable", "/", "[^/]++", "page"],
          ["text", "/ajax/load-more-inspiration"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: ["GET"],
        schemes: []
      },
      tv_ajax_subscriber_list: {
        tokens: [
          ["text", "/ajax/subcriber_list/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_inspiration_search: {
        tokens: [
          ["text", "/inspiration/search"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: ["GET"],
        schemes: []
      },
      tv_inspiration_fetch_collected: {
        tokens: [
          ["text", "/inspiration/fetch_collected"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: ["GET"],
        schemes: []
      },
      tv_collection_collectable: {
        tokens: [
          ["variable", "/", "[^/]++", "idCollectable"],
          ["text", "/inspiration"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: ["GET"],
        schemes: []
      },
      tv_collection_index: {
        tokens: [
          ["text", "/collections/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_collection_check_followers: {
        tokens: [
          ["text", "/collections/check-followers"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: ["POST"],
        schemes: []
      },
      tv_collection_fetch_followers: {
        tokens: [
          ["text", "/fetch-followers"],
          ["variable", "/", "[^/]++", "id"],
          ["text", "/collections"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: ["GET"],
        schemes: []
      },
      tv_collection_suggested_tags: {
        tokens: [
          ["text", "/collections/tags_suggestion"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_collection_get_collaborators: {
        tokens: [
          ["text", "/get_collaborators"],
          ["variable", "/", "[^/]++", "id"],
          ["text", "/collections"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_collection_upload_cover: {
        tokens: [
          ["text", "/upload-cover"],
          ["variable", "/", "[^/]++", "id"],
          ["text", "/collections"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_collection_remove_cover: {
        tokens: [
          ["text", "/remove-cover"],
          ["variable", "/", "[^/]++", "id"],
          ["text", "/collections"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_collection_remove: {
        tokens: [
          ["text", "/remove"],
          ["variable", "/", "[^/]++", "id"],
          ["text", "/collections"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: ["DELETE"],
        schemes: []
      },
      tv_collection_add_collaborator: {
        tokens: [
          ["text", "/add_collaborator"],
          ["variable", "/", "[^/]++", "id"],
          ["text", "/collections"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_collection_remove_collaborator: {
        tokens: [
          ["text", "/remove_collaborator"],
          ["variable", "/", "[^/]++", "id"],
          ["text", "/collections"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_collection_collection_categories: {
        tokens: [
          ["text", "/collections/collection_categories"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_collection_follow: {
        tokens: [
          ["text", "/follow"],
          ["variable", "/", "[^/]++", "id"],
          ["text", "/collections"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_collection_unfollow: {
        tokens: [
          ["text", "/unfollow"],
          ["variable", "/", "[^/]++", "id"],
          ["text", "/collections"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_collection_remove_collectable: {
        tokens: [
          ["variable", "/", "[^/]++", "type"],
          ["variable", "/", "[^/]++", "idCollectable"],
          ["variable", "/", "[^/]++", "idCollection"],
          ["text", "/collections/remove-collection"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_collection_search: {
        tokens: [
          ["text", "/collections/search/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_collection_search_by_tag: {
        tokens: [
          ["variable", "/", "[^/]++", "parameter"],
          ["text", "/collections/search"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_user_plans_page: {
        tokens: [
          ["text", "/plans/user-plans"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: []
      },
      tv_user_professional_plan: {
        tokens: [
          ["text", "/plans/professional-plan"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [],
        methods: [],
        schemes: ["http"]
      },
      tv_user_settings_directory_without_username: {
        tokens: [
          ["text", "/settings/directory/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: ["http"]
      },
      tv_submit_user_image: {
        tokens: [
          ["text", "/submit-user-image"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: ["POST"],
        schemes: ["http"]
      },
      tv_user_winner_list: {
        tokens: [
          ["text", "/winner-list/"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_user_winner_list_by_tag: {
        tokens: [
          ["variable", "/", "[^/]++", "parameter"],
          ["text", "/winner-list"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_user_check_followers: {
        tokens: [
          ["text", "/check_followers"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: ["POST"],
        schemes: []
      },
      tv_user_homepage: {
        tokens: [
          ["text", "/"],
          ["variable", "/", "[^/]++", "username"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_user_activity: {
        tokens: [
          ["text", "/activity"],
          ["variable", "/", "[^/]++", "username"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_user_contact: {
        tokens: [
          ["text", "/contact"],
          ["variable", "/", "[^/]++", "username"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: ["POST"],
        schemes: []
      },
      tv_user_collection: {
        tokens: [
          ["text", "/"],
          ["variable", "/", "[^/]++", "slug"],
          ["text", "/collections"],
          ["variable", "/", "[^/]++", "username"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_user_delete_account_post: {
        tokens: [
          ["text", "/delete-account-post"],
          ["variable", "/", "[^/]++", "username"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: ["POST"],
        schemes: ["http"]
      },
      tv_user_follow: {
        tokens: [
          ["text", "/follow"],
          ["variable", "/", "[^/]++", "username"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_user_unfollow: {
        tokens: [
          ["text", "/unfollow"],
          ["variable", "/", "[^/]++", "username"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_user_notification_markAsRead: {
        tokens: [
          ["variable", "/", "[^/]++", "notificationId"],
          ["text", "/notifications"],
          ["variable", "/", "[^/]++", "username"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      },
      tv_user_tooltip: {
        tokens: [
          ["text", "/tooltip"],
          ["variable", "/", "[^/]++", "username"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: ["GET"],
        schemes: []
      },
      tv_user_list_followers: {
        tokens: [
          ["text", "/followers-list"],
          ["variable", "/", "[^/]++", "username"]
        ],
        defaults: [],
        requirements: [],
        hosttokens: [
          ["text", "awwwards.local"]
        ],
        methods: [],
        schemes: []
      }
    },
    prefix: "",
    host: "awwwards.local",
    scheme: "http"
  })
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(70),
      s = i(r),
      o = n(102),
      a = i(o),
      l = s.default.extend({
        events: {
          "submit .register_form": "submit"
        },
        _showErrors: function(e, t) {
          var n = t.responseJSON.form.children,
            i = e.prop("name");
          this._showChildrenErrors(i, "", n)
        },
        _getRenderRoute: function() {
          return "tv_register_ajax"
        },
        _showChildrenErrors: function(e, t, n) {
          var i = "" != t ? e + "_" + t : e;
          for (var r in n) n[r].hasOwnProperty("errors") ? this._showError(i, r, n[r].errors) : n[r].hasOwnProperty("children") && this._showChildrenErrors(i, r, n[r].children)
        },
        _showError: function(t, n, i) {
          var r = t + "_" + n,
            s = e("#" + r),
            o = s.closest(".form-group");
          o.addClass("has-error"), o.find(".msg").addClass("msg-error").text(i)
        },
        _getTemplateSuccess: function() {
          return (0, a.default)()
        }
      });
    t.default = l
  }).call(t, n(0))
}, function(e, t, n) {
  function i(e) {
    return e && (e.__esModule ? e.default : e)
  }
  var r = n(3);
  e.exports = (r.default || r).template({
    compiler: [7, ">= 4.0.0"],
    main: function(e, t, r, s, o) {
      return '<div class="content">\n    <div class="header">\n        <h2 class="heading-xx-medium heading-underline">Congratulations!</h2>\n    </div>\n    <p><strong>We have sent you a verification e-mail.</strong></p>\n    <p>Please verify your account via the link in the e-mail and complete registration.</p>\n    <p>If you don\'t receive an email from us, please check your spam folder or <strong><a href="' + e.escapeExpression(i(n(11)).call(null != t ? t : e.nullContext || {}, "tv_contact_us", {
        name: "helpers/path",
        hash: {},
        data: o
      })) + '" class="link-2">contact customer support</a></strong>.</p>\n    <p><strong>Awwwards team</strong></p>\n    <p><span class="button js-lightbox-close">CLOSE</span></p>\n</div>'
    },
    useData: !0
  })
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(70),
    s = i(r),
    o = n(104),
    a = i(o),
    l = s.default.extend({
      events: {
        "submit .forgot_password_form": "submit"
      },
      _showErrors: function(e, t) {
        e.find(".form-group").addClass("has-error"), e.find(".msg").addClass("msg-error").text(t.responseJSON.errors)
      },
      _getRenderRoute: function() {
        return "tv_forgot_password"
      },
      _getTemplateSuccess: function() {
        return (0, a.default)()
      }
    });
  t.default = l
}, function(e, t, n) {
  function i(e) {
    return e && (e.__esModule ? e.default : e)
  }
  var r = n(3);
  e.exports = (r.default || r).template({
    compiler: [7, ">= 4.0.0"],
    main: function(e, t, r, s, o) {
      return '<div class="content">\n    <div class="header">\n        <h2 class="heading-underline">Forgot your password</h2>\n    </div>\n    <p><strong>We have sent you a verification e-mail.</strong></p>\n    <p>Please verify your account via the link in the e-mail and reset your password.</p>\n    <p>If you don\'t receive an email from us, please check your spam folder or <strong><a href="' + e.escapeExpression(i(n(11)).call(null != t ? t : e.nullContext || {}, "tv_contact_us", {
        name: "helpers/path",
        hash: {},
        data: o
      })) + '" class="link-2">contact customer support</a></strong>.</p>\n    <p><strong>Awwwards team</strong></p>\n    <p><span class="button js-lightbox-close">CLOSE</span></p>\n</div>'
    },
    useData: !0
  })
}, function(e, t, n) {
  "use strict";

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }(),
    s = function() {
      function e() {
        i(this, e), this.zIndex = 100, this.lightboxes = [];
        var t = this;
        document.addEventListener("keyup", function(e) {
          27 === e.which && t.lightboxes.length > 0 && t.lightboxes[t.lightboxes.length - 1].close()
        })
      }
      return r(e, [{
        key: "add",
        value: function(e) {
          this.lightboxes.push(e), e.el.style.zIndex = this.zIndex, this.zIndex++
        }
      }, {
        key: "remove",
        value: function() {
          this.lightboxes.pop(), this.zIndex--
        }
      }]), e
    }();
  t.default = new s
}, function(e, t, n) {
  var i = n(3);
  e.exports = (i.default || i).template({
    compiler: [7, ">= 4.0.0"],
    main: function(e, t, n, i, r) {
      var s, o = null != t ? t : e.nullContext || {},
        a = n.helperMissing,
        l = e.escapeExpression;
      return '<div class="box-content-collections size-small">\n    <div class="tab-form" id="tab-delete-confirm" style="display: block;">\n        <div class="content style2">\n            <div class="txt">\n                <p>' + l((s = null != (s = n.msg || (null != t ? t.msg : t)) ? s : a, "function" == typeof s ? s.call(o, {
        name: "msg",
        hash: {},
        data: r
      }) : s)) + '</p>\n                <p></p>\n                <div class="button button-red width-full yes">' + l((s = null != (s = n.button || (null != t ? t.button : t)) ? s : a, "function" == typeof s ? s.call(o, {
        name: "button",
        hash: {},
        data: r
      }) : s)) + "</div>\n                <p></p>\n            </div>\n        </div>\n    </div>\n</div>"
    },
    useData: !0
  })
}, function(e, t, n) {
  "use strict";

  function i(e, t) {
    if (void 0 === e || null === e) throw new TypeError("Cannot convert first argument to object");
    for (var n = Object(e), i = 1; i < arguments.length; i++) {
      var r = arguments[i];
      if (void 0 !== r && null !== r)
        for (var s = Object.keys(Object(r)), o = 0, a = s.length; o < a; o++) {
          var l = s[o],
            c = Object.getOwnPropertyDescriptor(r, l);
          void 0 !== c && c.enumerable && (n[l] = r[l])
        }
    }
    return n
  }

  function r() {
    Object.assign || Object.defineProperty(Object, "assign", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: i
    })
  }
  e.exports = {
    assign: i,
    polyfill: r
  }
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      s = i(r),
      o = n(5),
      a = i(o),
      l = n(71),
      c = i(l),
      u = s.default.Model.extend({
        defaults: {
          username: ""
        },
        request: null,
        isLoaded: function() {
          return this.has("homepage")
        },
        fetchData: function() {
          var t = this;
          this.request = e.ajax({
            type: "GET",
            url: a.default.generate("tv_user_tooltip", {
              username: t.get("username")
            }),
            success: function(e) {
              t.set({
                displayName: e.displayName,
                homepage: e.homepage,
                image: e.image,
                countryName: e.countryName,
                collectables: e.collectables,
                numberOfCollections: e.numberOfCollections,
                totalAwards: e.totalAwards,
                status: e.status
              }), c.default.add(t), t.trigger("loaded")
            }
          })
        },
        abort: function() {
          this.request && (this.request.abort(), this.request = null)
        }
      });
    t.default = u
  }).call(t, n(0))
}, function(e, t, n) {
  function i(e) {
    return e && (e.__esModule ? e.default : e)
  }
  var r = n(3);
  e.exports = (r.default || r).template({
    1: function(e, t, r, s, o) {
      var a, l = e.escapeExpression;
      return '            <li class="awards">\n                ' + l(e.lambda(null != (a = null != t ? t.user : t) ? a.totalAwards : a, t)) + "\n                " + l(i(n(18)).call(null != t ? t : e.nullContext || {}, "medal", 12.39, 14, {
        name: "helpers/icon",
        hash: {},
        data: o
      })) + "\n            </li>\n"
    },
    compiler: [7, ">= 4.0.0"],
    main: function(e, t, r, s, o) {
      var a, l = e.lambda,
        c = e.escapeExpression,
        u = null != t ? t : e.nullContext || {};
      return '<div class="row-user">\n    <div class="avatar-profile">\n        <a href="' + c(l(null != (a = null != t ? t.user : t) ? a.homepage : a, t)) + '">\n            <img src="' + c(i(n(28)).call(u, null != (a = null != t ? t.user : t) ? a.image : a, "thumb_user_70", {
        name: "helpers/asset_thumb",
        hash: {},
        data: o
      })) + '" width="70" height="70"  />\n            <div class="user-type">\n                ' + c(i(n(8)).call(u, null != (a = null != t ? t.user : t) ? a.status : a, 11, 14, {
        name: "helpers/icon_user",
        hash: {},
        data: o
      })) + '\n            </div>\n        </a>\n    </div>\n</div>\n<div class="row-user">\n    <strong><a href="' + c(l(null != (a = null != t ? t.user : t) ? a.homepage : a, t)) + '">' + c(l(null != (a = null != t ? t.user : t) ? a.displayName : a, t)) + '</a></strong>\n</div>\n<div class="row-user">\n    <span class="text-gray">' + c(l(null != (a = null != t ? t.user : t) ? a.countryName : a, t)) + '</span>\n</div>\n<div class="row-user">\n    <ul class="list-stats-icons">\n        <li class="favorites">\n            ' + c(l(null != (a = null != t ? t.user : t) ? a.collectables : a, t)) + "\n            " + c(i(n(18)).call(u, "heart", 15, 14, {
        name: "helpers/icon",
        hash: {},
        data: o
      })) + '\n        </li>\n        <li class="collections">\n            ' + c(l(null != (a = null != t ? t.user : t) ? a.numberOfCollections : a, t)) + "\n            " + c(i(n(18)).call(u, "books", 15.57, 14, {
        name: "helpers/icon",
        hash: {},
        data: o
      })) + "\n        </li>\n" + (null != (a = r.if.call(u, null != (a = null != t ? t.user : t) ? a.totalAwards : a, {
        name: "if",
        hash: {},
        fn: e.program(1, o, 0),
        inverse: e.noop,
        data: o
      })) ? a : "") + "    </ul>\n</div>"
    },
    useData: !0
  })
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      s = i(r),
      o = n(7),
      a = i(o),
      l = n(111),
      c = i(l),
      u = n(112),
      d = i(u),
      h = n(43),
      f = i(h),
      p = n(113),
      m = i(p),
      v = n(74),
      g = i(v),
      _ = n(135),
      y = i(_),
      b = n(45),
      w = i(b),
      x = n(46),
      k = i(x),
      C = n(5),
      T = i(C),
      E = s.default.View.extend({
        el: "body",
        viewResults: null,
        searchBox: null,
        isOpen: !1,
        filterType: null,
        urlBeforeSearch: null,
        events: {
          "click .bt-search": "_show",
          "click .bt-close": "_hide",
          "keyup #search-text": "_preSearch",
          "focusin #search-text": "_openLoader",
          "click .js-filters-search .dropdown": "_showFilters",
          "click .js-filter-type": "_setFilterType",
          click: "_closeDropdownWhenIsOpen"
        },
        options: {
          section: null,
          searchText: ""
        },
        template: c.default,
        initialize: function(t) {
          this.options = e.extend({}, this.options, t), this.options.section && (this.filterType = this.options.section), this.searchBox = this.generateSearchBox(), this.urlBeforeSearch = window.location.href, document.querySelector(".header-main").appendChild(this.searchBox), this._loadEvents(), this._searchDebounced = a.default.debounce(a.default.bind(this._search, this), 300)
        },
        generateSearchBox: function() {
          var e = document.createElement("div");
          return e.classList.add("box-search"), e.id = "box-search", e
        },
        _showFilters: function(e) {
          e.stopPropagation(), e.currentTarget.classList.toggle("open"), this.searchBox.querySelector(".search-input").focus()
        },
        _loadEvents: function() {
          this.model.on("search_load", this._loadSearch, this), f.default.on("close", this._close, this), m.default.on("go_back_history_filter", this._close, this), m.default.on("go_back_history_search", this._goBackHistory, this)
        },
        _goBackHistory: function(e) {
          var t = e.datas;
          this._show(), this.options.searchText = t.text, this._loadSearch(t.items)
        },
        _openLoader: function() {
          var e = this.isOpen;
          this.isOpen = !0, e || f.default.openForSearchText(), this.searchBox.classList.add("show")
        },
        _show: function() {
          var e = this;
          this._resetUrlBeforSearch(), this._openLoader(), this.render(), setTimeout(function() {
            e.searchBox.querySelector("#search-text").focus()
          }, 100)
        },
        _resetUrlBeforSearch: function() {
          -1 == window.location.href.indexOf("search") && (this.urlBeforeSearch = window.location.href)
        },
        _hide: function() {
          this._closeDropdown(), this._doClose(), window.history.pushState({
            href: this.urlBeforeSearch
          }, "", this.urlBeforeSearch)
        },
        _closeDropdownWhenIsOpen: function() {
          var e = this.el.querySelector(".js-filters-search .dropdown");
          e && e.classList.contains("open") && this._closeDropdown()
        },
        _close: function() {
          if (this.isOpen) {
            this._closeDropdown();
            var e = document.getElementById("search-text");
            e && e.value && e.value.length > 0 || this._doClose()
          }
        },
        _doClose: function() {
          this.isOpen = !1, w.default.trigger(k.default.REMOVE_SEARCH_RESULTS), this.options.searchText = "", f.default.closeSearchText(!0), this.searchBox.classList.remove("show");
          var e = this.el.querySelector(".results-container");
          e && e.remove(), document.querySelector("#content .content-view").style.display = "block", this.resetView()
        },
        _closeDropdown: function() {
          var e = this.el.querySelector(".js-filters-search .dropdown");
          e && e.classList.remove("open")
        },
        _preSearch: function(e) {
          var t = e.currentTarget.value;
          this._searchDebounced(t)
        },
        _setFilterType: function(e) {
          var t = e.currentTarget;
          this.filterType = t.dataset.type, this.searchBox.querySelector(".name-filter").textContent = t.textContent, this.options.searchText && this._openLoadAndSearch(this.options.searchText)
        },
        _getFilterTypeKey: function() {
          return -1 == Object.keys(y.default).indexOf(this.filterType) ? null : this.filterType
        },
        _getFilterTypeName: function() {
          return this._getFilterType().name
        },
        _getFilterType: function() {
          var e = this.filterType;
          return y.default.hasOwnProperty(e) || (e = "all"), y.default[e]
        },
        _shouldSearch: function(e) {
          return e != this.options.searchText && (-1 !== ["3d", "3D"].indexOf(e) || e.length >= 3)
        },
        _search: function(e) {
          this._shouldSearch(e) && (this.options.searchText = e, this._openLoadAndSearch(e))
        },
        _loadSearch: function(e) {
          document.querySelector("#content .content-view").style.display = "none", w.default.trigger(k.default.SHOW_SEARCH_RESULTS), this.resetView(), this._showResults(e), f.default.closeSearchText()
        },
        _showResults: function(t) {
          e("body").scrollTop(0);
          var n = T.default.generate("tv_inspiration_search", {
            text: this.options.searchText,
            type: this._getFilterTypeKey()
          });
          this._createResultsContainer(t, n), this.setHistory(this.options.searchText, t, n)
        },
        _createResultsContainer: function(e, t) {
          var n = this.el.querySelector(".results-container");
          n && n.remove();
          var i = this._generateContainerSearch();
          if (this._hasResults(e))
            if (this.viewResults) this.viewResults.show(this.options.searchText, e);
            else {
              var r = {
                models: e,
                text: this.options.searchText,
                type: this._getFilterTypeKey()
              };
              "all" != this._getFilterTypeKey() && (r.url = t), this.viewResults = new g.default(r);
              var s = i.querySelector(".search-container");
              s && (s.innerHTML = "", s.appendChild(this.viewResults.render().el))
            }
          else i.innerHTML = (0, d.default)({
            text_searched: this.options.searchText
          });
          this._hideFooter(), document.getElementById("content").appendChild(i)
        },
        _hideFooter: function() {
          var e = document.getElementById("footer");
          e && (e.style.display = "none")
        },
        _generateContainerSearch: function() {
          var e = document.createElement("div");
          e.classList.add("results-container");
          var t = document.createElement("div");
          t.classList.add("block"), t.id = "search-result";
          var n = document.createElement("div");
          return n.classList.add("search-container"), t.appendChild(n), e.appendChild(t), e
        },
        _hasResults: function(e) {
          return a.default.some(e, function(e) {
            return e.total > 0
          })
        },
        _openLoadAndSearch: function(e) {
          this.model.search(e, this._getFilterTypeKey())
        },
        setHistory: function(e, t, n) {
          n || (n = window.location.href);
          var i = {
            service: "search",
            url: n,
            datas: {
              text: e,
              items: t,
              href: n
            }
          };
          m.default.addHistoryPoint(i)
        },
        resetView: function() {
          if (this.viewResults) {
            this.viewResults.undelegateEvents(), this.viewResults.remove(), this.viewResults = null;
            var e = document.getElementById("footer");
            e && (e.style.display = "block")
          }
        },
        render: function() {
          var t = this._cleanSearchText(this.options.searchText);
          if (this.searchBox.innerHTML = this.template({
              text: t,
              types: y.default,
              typeName: this._getFilterTypeName()
            }), e(window).width() < 700) {
            var n = document.getElementById("search-text");
            n.placeholder = n.dataset.placeholderMobile
          }
        },
        _cleanSearchText: function(e) {
          return e.replace(/\s\s+/g, " ").trim()
        }
      });
    t.default = E
  }).call(t, n(0))
}, function(e, t, n) {
  function i(e) {
    return e && (e.__esModule ? e.default : e)
  }
  var r = n(3);
  e.exports = (r.default || r).template({
    1: function(e, t, n, i, r) {
      var s = e.lambda,
        o = e.escapeExpression;
      return '                                <li><strong><a class="js-filter-type" data-type="' + o(s(r && r.key, t)) + '" href="#">' + o(s(null != t ? t.name : t, t)) + "</a></strong></li>\n"
    },
    compiler: [7, ">= 4.0.0"],
    main: function(e, t, r, s, o) {
      var a, l = null != t ? t : e.nullContext || {},
        c = e.escapeExpression,
        u = e.lambda;
      return '<div class="box-left">\n    <div class="box-input">\n        <div class="item ico-search">\n            ' + c(i(n(18)).call(l, "search", 14, 14, {
        name: "helpers/icon",
        hash: {},
        data: o
      })) + '\n        </div>\n        <div class="box-filters js-filters-search">\n            <ul class="menu-filters">\n                <li class="item dropdown">\n                    <span class="name-filter">' + c(u(null != t ? t.typeName : t, t)) + '</span>\n                    <div class="menu-dropdown style2">\n                        <ul>\n' + (null != (a = r.each.call(l, null != t ? t.types : t, {
        name: "each",
        hash: {},
        fn: e.program(1, o, 0),
        inverse: e.noop,
        data: o
      })) ? a : "") + '                        </ul>\n                    </div>\n                </li>\n            </ul>\n        </div>\n\n        <input type="text" id="search-text" placeholder="SEARCH FOR INSPIRATION (HTML5, VR, RED, MINIMAL...)" data-placeholder="SEARCH FOR INSPIRATION (HTML5, VR, RED, MINIMAL...)" data-placeholder-mobile="SEARCH FOR INSPIRATION" autocomplete="off" class="search-input js-search-input" value="' + c(u(null != t ? t.text : t, t)) + '">\n        <div class="search-info">\n            <div class="row default active"><strong><a href="' + c(i(n(11)).call(l, "tv_search_websites", {
        name: "helpers/path",
        hash: {},
        data: o
      })) + '" class="link-1">SHOW FILTERS</a></strong></div>\n        </div>\n    </div>\n</div>\n<div class="box-right">\n    <div class="bt-close js-search-close"></div>\n</div>\n'
    },
    useData: !0
  })
}, function(e, t, n) {
  var i = n(3);
  e.exports = (i.default || i).template({
    compiler: [7, ">= 4.0.0"],
    main: function(e, t, n, i, r) {
      return '<div class="block flex-1 vertical-center">\n    <div class="box-noresults">\n        <div class="box-icon icon-no-snitching">\n            <svg width="144" height="144" viewBox="0 0 511.992 512">\n                <g>\n                    <path d="M188.506,184.987c0-15.417-12.508-27.918-27.927-27.918c-15.417,0-27.927,12.5-27.927,27.918 c0,15.418,12.509,27.927,27.927,27.927C175.998,212.914,188.506,200.406,188.506,184.987z" />\n                    <path d="M346.323,157.07c-15.4,0-27.927,12.509-27.927,27.927c0,15.418,12.527,27.927,27.927,27.927 c15.417,0,27.927-12.508,27.927-27.927C374.249,169.579,361.74,157.07,346.323,157.07z" />\n                    <path d="M255.996,0C114.616,0,0,114.616,0,256.004C0,397.384,114.616,512,255.996,512 c141.38,0,255.996-114.616,255.996-255.996C511.992,114.616,397.376,0,255.996,0z M255.996,493.382 c-130.888,0-237.378-106.489-237.378-237.378c0-130.898,106.49-237.386,237.378-237.386c130.89,0,237.378,106.489,237.378,237.386 C493.374,386.893,386.885,493.382,255.996,493.382z" />\n                    <path d="M346.323,117.052c-37.464,0-67.945,30.481-67.945,67.944s30.481,67.944,67.945,67.944 c37.463,0,67.944-30.481,67.944-67.944S383.785,117.052,346.323,117.052z M346.323,235.996c-28.119,0-51-22.877-51-50.999 s22.882-50.999,51-50.999c28.118,0,50.999,22.877,50.999,50.999S374.44,235.996,346.323,235.996z" />\n                    <path d="M228.524,184.997c0-37.468-30.482-67.953-67.945-67.953c-37.472,0-67.962,30.486-67.962,67.953 c0,37.463,30.49,67.944,67.962,67.944C198.042,252.941,228.524,222.459,228.524,184.997z M109.562,184.997 c0-28.127,22.89-51.008,51.017-51.008c28.118,0,50.999,22.881,50.999,51.008c0,28.122-22.881,50.999-50.999,50.999 C132.452,235.996,109.562,213.119,109.562,184.997z" />\n                    <polygon points="357.967,296.295 261.459,347.603 164.953,296.295 156.207,312.731 241.633,358.148 156.207,403.566 164.953,420.002 261.459,368.694 357.967,420.002 366.713,403.566 281.286,358.148 366.713,312.731" />\n                </g>\n            </svg>\n        </div>\n        <div class="text">\n            <h1>Your search was not successful!</h1>\n            <p>Try some different keywords.</p>\n            <p>Use more general keywords.</p>\n        </div>\n    </div>\n</div>'
    },
    useData: !0
  })
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(1),
    s = i(r),
    o = n(73),
    a = i(o),
    l = s.default.View.extend({
      el: "body",
      initialize: function() {
        var e = this;
        window.onpopstate = function(t) {
          t.state && e._goBackHistory(t.state)
        }
      },
      addHistoryPoint: function(e) {
        if (e.url)
          if ("first_state" == e.datas.point) try {
            window.history.replaceState(e, "", e.url)
          } catch (t) {
            a.default.captureException(t, {
              extra: e
            })
          } else window.history.pushState(e, "", e.url)
      },
      _goBackHistory: function(e) {
        this.trigger("go_back_history_" + e.service, e)
      }
    });
  t.default = new l
}, function(e, t, n) {
  var i = n(3);
  e.exports = (i.default || i).template({
    1: function(e, t, n, i, r) {
      var s;
      return (null != (s = n.unless.call(null != t ? t : e.nullContext || {}, r && r.first, {
        name: "unless",
        hash: {},
        fn: e.program(2, r, 0),
        inverse: e.noop,
        data: r
      })) ? s : "") + (null != (s = e.lambda(t, t)) ? s : "")
    },
    2: function(e, t, n, i, r) {
      var s;
      return null != (s = n.if.call(null != t ? t : e.nullContext || {}, r && r.last, {
        name: "if",
        hash: {},
        fn: e.program(3, r, 0),
        inverse: e.program(5, r, 0),
        data: r
      })) ? s : ""
    },
    3: function(e, t, n, i, r) {
      return " and "
    },
    5: function(e, t, n, i, r) {
      return ", "
    },
    compiler: [7, ">= 4.0.0"],
    main: function(e, t, n, i, r) {
      var s, o, a = null != t ? t : e.nullContext || {};
      return '<div class="box-heading style5">\n    <div class="box-center">\n        We found\n        ' + (null != (s = n.each.call(a, null != t ? t.summary : t, {
        name: "each",
        hash: {},
        fn: e.program(1, r, 0),
        inverse: e.noop,
        data: r
      })) ? s : "") + '\n        for "' + e.escapeExpression((o = null != (o = n.text || (null != t ? t.text : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(a, {
        name: "text",
        hash: {},
        data: r
      }) : o)) + '"\n    </div>\n</div>'
    },
    useData: !0
  })
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(7),
    s = i(r),
    o = n(13),
    a = i(o),
    l = n(49),
    c = i(l),
    u = n(77),
    d = i(u),
    h = n(19),
    f = i(h),
    p = n(123),
    m = i(p),
    v = n(80),
    g = i(v),
    _ = n(25),
    y = n(124),
    b = i(y),
    w = n(125),
    x = i(w),
    k = g.default.extend({
      events: function() {
        return s.default.extend({}, g.default.prototype.events, {
          "click .js-follow": "_followOrUnfollow",
          "click .bt-edit-collection": "_editCollection",
          "click .js-share": "_manageCollaborators"
        })
      },
      _manageCollaborators: function() {
        new x.default({
          model: new b.default
        }).show(this.model.toJSON())
      },
      _doShowUsersCollected: function() {
        var e = new c.default;
        e.showLoading(), this.model.fetchFollowers(function(t) {
          e.render(t)
        })
      },
      _followOrUnfollow: function(e) {
        if (!a.default.isLoggedIn()) {
          return void(new f.default).open()
        }
        e.preventDefault();
        var t = e.currentTarget;
        (0, _.loadFollowUnfollow)(t, 1), this.model.followOrUnfollow()
      },
      _editCollection: function(e) {
        e.preventDefault(), (new d.default).editCollection(this.model.toJSON())
      },
      _checkIfUserLoggedIsFollower: function() {
        return this.model.checkIfUserLoggedIsFollower()
      },
      render: function() {
        this._checkIfUserLoggedIsFollower();
        var e = {
            following: this.model.get("following")
          },
          t = this.model.isCollaborator(a.default.id),
          n = a.default.isSameUserLoggedIn(this.model.get("user").id);
        return this.el.querySelector(".footer .box-right").innerHTML = (0, m.default)({
          item: e,
          showOwnerOptions: this.options.ownerOptions && n,
          showButtonFollow: !n && !t
        }), this
      }
    });
  t.default = k
}, function(e, t, n) {
  function i(e) {
    return e && (e.__esModule ? e.default : e)
  }
  var r = n(3);
  e.exports = (r.default || r).template({
    1: function(e, t, r, s, o, a) {
      var l, c = null != t ? t : e.nullContext || {},
        u = e.escapeExpression,
        d = e.lambda;
      return '        <li>\n            <figure>\n                <a href="' + u(i(n(11)).call(c, "tv_user_homepage", {
        name: "helpers/path",
        hash: {
          username: null != (l = a[0][0]) ? l.username : l
        },
        data: o,
        blockParams: a
      })) + '"><img src="' + u(i(n(28)).call(c, null != (l = a[0][0]) ? l.image : l, "thumb_user_70", {
        name: "helpers/asset_thumb",
        hash: {},
        data: o,
        blockParams: a
      })) + '" width="50" height="50" alt="' + u(d(null != (l = a[0][0]) ? l.displayName : l, t)) + '"></a>\n            </figure>\n            <div class="data">\n                <div class="row">\n                    <a href="' + u(i(n(11)).call(c, "tv_user_homepage", {
        name: "helpers/path",
        hash: {
          username: null != (l = a[0][0]) ? l.username : l
        },
        data: o,
        blockParams: a
      })) + '"><strong>' + u(d(null != (l = a[0][0]) ? l.displayName : l, t)) + "</strong></a>\n                </div>\n" + (null != (l = r.if.call(c, null != (l = a[0][0]) ? l.country : l, {
        name: "if",
        hash: {},
        fn: e.program(2, o, 0, a),
        inverse: e.noop,
        data: o,
        blockParams: a
      })) ? l : "") + '            </div>\n            <div class="box-right">\n                <div class="tooltip">\n\n                    <a href="' + u(i(n(11)).call(c, "tv_user_follow", {
        name: "helpers/path",
        hash: {
          username: null != (l = a[0][0]) ? l.username : l
        },
        data: o,
        blockParams: a
      })) + '" class="bt-check js-follow-user js-user-following" data-username="' + u(d(null != (l = a[0][0]) ? l.username : l, t)) + '" data-user-id="' + u(d(null != (l = a[0][0]) ? l.id : l, t)) + '">\n                        <span class="bt-content"></span>\n                    </a>\n\n                    <div class="box-tooltip">\n                        <div class="tooltip-text" >Follow!</div>\n                    </div>\n                </div>\n            </div>\n        </li>\n'
    },
    2: function(e, t, r, s, o, a) {
      var l;
      return '                    <div class="row">\n' + (null != (l = i(n(117)).call(null != t ? t : e.nullContext || {}, null != (l = a[1][0]) ? l.country : l, {
        name: "helpers/ifObject",
        hash: {},
        fn: e.program(3, o, 0, a),
        inverse: e.program(5, o, 0, a),
        data: o,
        blockParams: a
      })) ? l : "") + "                    </div>\n"
    },
    3: function(e, t, n, i, r, s) {
      var o;
      return "                            " + e.escapeExpression(e.lambda(null != (o = null != (o = s[2][0]) ? o.country : o) ? o.name : o, t)) + "\n"
    },
    5: function(e, t, n, i, r, s) {
      var o;
      return "                            " + e.escapeExpression(e.lambda(null != (o = s[2][0]) ? o.country : o, t)) + "\n"
    },
    7: function(e, t, n, i, r) {
      return '        <div class="button button-loadmore style3">\n            <span>Load More</span>\n        </div>\n'
    },
    compiler: [7, ">= 4.0.0"],
    main: function(e, t, r, s, o, a) {
      var l, c = null != t ? t : e.nullContext || {};
      return '<div class="box-inside ">\n    <div class="info">\n        <div class="pull-left">\n            <strong>' + e.escapeExpression(e.lambda(null != (l = null != t ? t.item : t) ? l.count : l, t)) + '</strong> users like this\n        </div>\n    </div>\n    <ul class="list-user-likes">\n' + (null != (l = r.each.call(c, null != (l = null != t ? t.item : t) ? l.users_collected : l, {
        name: "each",
        hash: {},
        fn: e.program(1, o, 1, a),
        inverse: e.noop,
        data: o,
        blockParams: a
      })) ? l : "") + "    </ul>\n" + (null != (l = i(n(2)).call(c, null != (l = null != t ? t.item : t) ? l.count : l, ">", 6, {
        name: "helpers/compare",
        hash: {},
        fn: e.program(7, o, 0, a),
        inverse: e.noop,
        data: o,
        blockParams: a
      })) ? l : "") + "</div>"
    },
    useData: !0,
    useBlockParams: !0
  })
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  t.default = function(e, t) {
    return "object" === (void 0 === e ? "undefined" : i(e)) ? t.fn(this) : t.inverse(this)
  }
}, function(e, t, n) {
  function i(e) {
    return e && (e.__esModule ? e.default : e)
  }
  var r = n(3);
  e.exports = (r.default || r).template({
    1: function(e, t, n, i, r) {
      var s;
      return '    <div class="box-element">\n        <div class="content">\n' + (null != (s = n.if.call(null != t ? t : e.nullContext || {}, null != (s = null != t ? t.image : t) ? s.is_video : s, {
        name: "if",
        hash: {},
        fn: e.program(2, r, 0),
        inverse: e.program(4, r, 0),
        data: r
      })) ? s : "") + "        </div>\n    </div>\n"
    },
    2: function(e, t, r, s, o) {
      var a;
      return '                <video class="video-item" height="417" width="299" autoplay muted loop>\n                    <source src="' + e.escapeExpression(i(n(28)).call(null != t ? t : e.nullContext || {}, null != (a = null != t ? t.image : t) ? a.animated : a, "animated", {
        name: "helpers/asset_thumb",
        hash: {},
        data: o
      })) + '" type="video/mp4">\n                </video>\n'
    },
    4: function(e, t, r, s, o) {
      var a;
      return '                <img width="400" height="287" src="' + e.escapeExpression(i(n(50)).call(null != t ? t : e.nullContext || {}, null != (a = null != t ? t.image : t) ? a.static : a, {
        name: "helpers/asset_tv",
        hash: {},
        data: o
      })) + '" id="element" />\n'
    },
    compiler: [7, ">= 4.0.0"],
    main: function(e, t, n, i, r) {
      var s;
      return (null != (s = n.if.call(null != t ? t : e.nullContext || {}, null != (s = null != t ? t.image : t) ? s.static : s, {
        name: "if",
        hash: {},
        fn: e.program(1, r, 0),
        inverse: e.noop,
        data: r
      })) ? s : "") + '<div class="box-categories"></div>'
    },
    useData: !0
  })
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      s = i(r),
      o = n(120),
      a = i(o),
      l = s.default.View.extend({
        className: "tab-form active",
        itemModel: null,
        events: {
          "click .js-add-to-collection": "_addToCollection",
          "click .create_folder": "_triggerCreateFolder"
        },
        initialize: function(e) {
          this.model.on("collections_loaded", this.render, this), this.itemModel = e.itemModel, this.model.getCollections(this.itemModel)
        },
        destroy: function() {
          this.undelegateEvents(), this.$el.removeData().unbind(), this.remove(), s.default.View.prototype.remove.call(this)
        },
        _triggerCreateFolder: function() {
          this.trigger("create_folder")
        },
        render: function() {
          var e = this.model._getCollections();
          return this.$el.html((0, a.default)({
            collections: e,
            empty_collections_loaded: this.model.get("collections_loaded") && 0 === e.length,
            loading_collections: !1 === this.model.get("collections_loaded")
          })), this
        },
        _setCollectionAndSend: function(t) {
          this.model.setIdCollection(e(t.currentTarget).data("id")), this._send()
        },
        addInNewCollection: function(e) {
          this.model.addToCollection(e)
        },
        _send: function() {
          this.model._send()
        },
        _addToCollection: function(t) {
          var n = e(t.currentTarget);
          n.addClass("active"), n.removeClass("js-add-to-collection"), this.itemModel.on("unsuccessfully_collected", function() {
            n.removeClass("active"), n.addClass("js-add-to-collection")
          }, this), this.itemModel.saveInCollection(n.data("id"))
        }
      });
    t.default = l
  }).call(t, n(0))
}, function(e, t, n) {
  function i(e) {
    return e && (e.__esModule ? e.default : e)
  }
  var r = n(3);
  e.exports = (r.default || r).template({
    1: function(e, t, r, s, o) {
      return '        <div class="box-msg">\n            <div>\n                <p>\n                    ' + e.escapeExpression(i(n(18)).call(null != t ? t : e.nullContext || {}, "collections-add", 40, 40, "ico-40", {
        name: "helpers/icon",
        hash: {},
        data: o
      })) + "\n                </p>\n                <p><strong>Organize and share your Favorites</strong></p>\n                <p>Organize your favorite sites, create collections for your projects and share them with your team or clients.</p>\n            </div>\n        </div>\n"
    },
    3: function(e, t, i, r, s) {
      var o;
      return null != (o = e.invokePartial(n(69), t, {
        name: "_loader",
        data: s,
        indent: "            ",
        helpers: i,
        partials: r,
        decorators: e.decorators
      })) ? o : ""
    },
    5: function(e, t, n, i, r, s) {
      var o, a = null != t ? t : e.nullContext || {},
        l = e.lambda,
        c = e.escapeExpression;
      return '                <li class="' + (null != (o = n.if.call(a, null != (o = s[0][0]) ? o.is_collected : o, {
        name: "if",
        hash: {},
        fn: e.program(6, r, 0, s),
        inverse: e.program(8, r, 0, s),
        data: r,
        blockParams: s
      })) ? o : "") + "\" data-id='" + c(l(null != (o = s[0][0]) ? o.id : o, t)) + '\'>\n                    <div class="info">\n                        <span class="title">' + c(l(null != (o = s[0][0]) ? o.name : o, t)) + '</span>\n                        <span class="number">' + c(l(null != (o = s[0][0]) ? o.n_collected : o, t)) + " elements</span>\n" + (null != (o = n.if.call(a, null != (o = s[0][0]) ? o.is_collaborator : o, {
        name: "if",
        hash: {},
        fn: e.program(10, r, 0, s),
        inverse: e.noop,
        data: r,
        blockParams: s
      })) ? o : "") + '                    </div>\n                    <div class="thumbs">\n' + (null != (o = n.each.call(a, null != (o = s[0][0]) ? o.images : o, {
        name: "each",
        hash: {},
        fn: e.program(12, r, 1, s),
        inverse: e.noop,
        data: r,
        blockParams: s
      })) ? o : "") + "                    </div>\n                </li>\n"
    },
    6: function(e, t, n, i, r) {
      return "active"
    },
    8: function(e, t, n, i, r) {
      return "js-add-to-collection"
    },
    10: function(e, t, n, i, r) {
      return '                            <span class="collaborator">Collaborator</span>\n'
    },
    12: function(e, t, r, s, o, a) {
      var l;
      return '                            <img width="80" height="65" src="' + e.escapeExpression(i(n(50)).call(null != t ? t : e.nullContext || {}, null != (l = a[0][0]) ? l.static : l, {
        name: "helpers/asset_tv",
        hash: {},
        data: o,
        blockParams: a
      })) + '">\n'
    },
    compiler: [7, ">= 4.0.0"],
    main: function(e, t, n, i, r, s) {
      var o, a = null != t ? t : e.nullContext || {};
      return '<div class="box-content">\n    <div class="box-top">\n' + (null != (o = n.if.call(a, null != t ? t.empty_collections_loaded : t, {
        name: "if",
        hash: {},
        fn: e.program(1, r, 0, s),
        inverse: e.noop,
        data: r,
        blockParams: s
      })) ? o : "") + (null != (o = n.if.call(a, null != t ? t.loading_collections : t, {
        name: "if",
        hash: {},
        fn: e.program(3, r, 0, s),
        inverse: e.noop,
        data: r,
        blockParams: s
      })) ? o : "") + '        <ul class="list-collections">\n' + (null != (o = n.each.call(a, null != t ? t.collections : t, {
        name: "each",
        hash: {},
        fn: e.program(5, r, 1, s),
        inverse: e.noop,
        data: r,
        blockParams: s
      })) ? o : "") + '        </ul>\n    </div>\n    <div class="box-bottom">\n        <div class="bt-add cursor-pointer js-tab bt-create-collection" data-tab="tab-form">Create a new collection</div>\n    </div>\n</div>\n'
    },
    usePartial: !0,
    useData: !0,
    useBlockParams: !0
  })
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      s = i(r),
      o = n(7),
      a = i(o),
      l = n(5),
      c = i(l),
      u = n(9),
      d = i(u),
      h = s.default.Model.extend({
        defaults: {
          collections_loaded: !1,
          collections: []
        },
        getCollections: function(t) {
          var n = this,
            i = "activity" == t.get("type") ? c.default.generate("tv_favourites_collections_by_id", {
              collectableId: t.get("collectable").id
            }) : c.default.generate("tv_favourites_collections", {
              type: t.get("type"),
              id: t.get("id")
            });
          e.ajax({
            type: "GET",
            url: i
          }).success(function(e) {
            n._setCollections(e)
          })
        },
        addToCollection: function(e) {
          var t = this.get("collections");
          t.unshift(e), this.set("collections", t)
        },
        _setCollections: function(e) {
          this.set("collections", e), this.set("collections_loaded", !0), this.trigger("collections_loaded")
        },
        _getCollections: function() {
          return a.default.map(this.get("collections"), function(e) {
            return e.images = a.default.map(e.images, function(e) {
              return d.default.getImageInfo(e, null)
            }), e
          })
        }
      });
    t.default = h
  }).call(t, n(0))
}, function(e, t, n) {
  function i(e) {
    return e && (e.__esModule ? e.default : e)
  }
  var r = n(3);
  e.exports = (r.default || r).template({
    1: function(e, t, r, s, o, a, l) {
      var c, u = e.lambda,
        d = e.escapeExpression;
      return '                            <option value="' + d(u(null != (c = a[0][0]) ? c.id : c, t)) + '" ' + (null != (c = i(n(2)).call(null != t ? t : e.nullContext || {}, null != (c = a[0][0]) ? c.slug : c, null != (c = null != (c = null != (c = null != l[1] ? l[1].data : l[1]) ? c.collection : c) ? c.category : c) ? c.slug : c, {
        name: "helpers/compare",
        hash: {},
        fn: e.program(2, o, 0, a, l),
        inverse: e.noop,
        data: o,
        blockParams: a
      })) ? c : "") + " >" + d(u(null != (c = a[0][0]) ? c.name : c, t)) + "</option>\n"
    },
    2: function(e, t, n, i, r) {
      return " selected "
    },
    4: function(e, t, n, i, r) {
      return '                    <span class="link-delete cursor-pointer js-tab" data-tab="tab-delete-confirm">Delete Collection</span>\n'
    },
    6: function(e, t, n, i, r) {
      return '                    <span class="bt-cancel link-2 js-tab" data-tab="tab-collections">Cancel</span>\n'
    },
    8: function(e, t, n, i, r) {
      return ' checked="checked"'
    },
    compiler: [7, ">= 4.0.0"],
    main: function(e, t, n, i, r, s, o) {
      var a, l = e.lambda,
        c = e.escapeExpression,
        u = null != t ? t : e.nullContext || {};
      return '<div class="box-content">\n    <div class="box-top">\n        <div class="content">\n            <h3 class="heading-small">' + c(l(null != (a = null != t ? t.data : t) ? a.title : a, t)) + '</h3>\n            <div class="row">\n                <div class="form-group name-group">\n                    <input type="text" id="folder-name" class="text-input" maxlength="40" value="' + c(l(null != (a = null != (a = null != t ? t.data : t) ? a.collection : a) ? a.name : a, t)) + '" placeholder="Name..." />\n                    <div class="msg name-error-msg alert" style="display: none;">You must fill name.</div>\n                </div>\n            </div>\n            <div class="row">\n                <input type="text" id="folder-description" class="text-input"  maxlength="250" value="' + c(l(null != (a = null != (a = null != t ? t.data : t) ? a.collection : a) ? a.description : a, t)) + '" placeholder="Description..." />\n            </div>\n            <div class="row">\n                <div class="form-group category-group">\n                    <select id="collection_category" class="chosen chosen-arrow chosen-nosearch" data-placeholder="Choose a Category...">\n                         <option value=""></option>\n' + (null != (a = n.each.call(u, null != (a = null != t ? t.data : t) ? a.categories : a, {
        name: "each",
        hash: {},
        fn: e.program(1, r, 1, s, o),
        inverse: e.noop,
        data: r,
        blockParams: s
      })) ? a : "") + '                    </select>\n                    <div class="msg category-error-msg alert" style="display: none;">Choose one category.</div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="box-bottom">\n        <div class="content box-bts">\n            <div class="box-left">\n                <button type="submit" class="button new-folder"><span class="bt-content">' + c(l(null != (a = null != t ? t.data : t) ? a.action : a, t)) + "</span></button>\n" + (null != (a = n.if.call(u, null != (a = null != t ? t.data : t) ? a.delete : a, {
        name: "if",
        hash: {},
        fn: e.program(4, r, 0, s, o),
        inverse: e.program(6, r, 0, s, o),
        data: r,
        blockParams: s
      })) ? a : "") + '            </div>\n            <div class="box-right">\n                <div class="box-check">\n                    <span class="label">Private?</span>\n                    <div class="input-check-toggle">\n                        <input id="private" ' + (null != (a = n.if.call(u, null != (a = null != (a = null != t ? t.data : t) ? a.collection : a) ? a.private : a, {
        name: "if",
        hash: {},
        fn: e.program(8, r, 0, s, o),
        inverse: e.noop,
        data: r,
        blockParams: s
      })) ? a : "") + ' type="checkbox" />\n                        <label for="private">\n                            <span>No</span>\n                            <span>Yes</span>\n                            <div class="ball"></div>\n                        </label>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n'
    },
    useData: !0,
    useDepths: !0,
    useBlockParams: !0
  })
}, function(e, t, n) {
  function i(e) {
    return e && (e.__esModule ? e.default : e)
  }
  var r = n(3);
  e.exports = (r.default || r).template({
    1: function(e, t, r, s, o) {
      var a = null != t ? t : e.nullContext || {},
        l = e.escapeExpression;
      return '    <div class="bts">\n        <div class="bt-icon js-share">\n            <div class="tooltip">\n                <div class="bt-circle small gray">\n                    ' + l(i(n(18)).call(a, "user", 12, 14, {
        name: "helpers/icon",
        hash: {},
        data: o
      })) + '\n                </div>\n                <div class="box-tooltip">\n                    <div class="tooltip-text">Share with your team!</div>\n                </div>\n            </div>\n        </div>\n        <div class="bt-icon">\n            <div class="tooltip">\n                <div class="bt-circle small gray bt-edit-collection edit-collection">\n                    ' + l(i(n(18)).call(a, "settings", 14, 14, {
        name: "helpers/icon",
        hash: {},
        data: o
      })) + '\n                </div>\n                <div class="box-tooltip">\n                    <div class="tooltip-text">Edit Collection!</div>\n                </div>\n            </div>\n        </div>\n    </div>\n'
    },
    3: function(e, t, n, i, r) {
      var s, o = null != t ? t : e.nullContext || {};
      return '    <div class="box-right">\n        <div class="bt-default small js-follow' + (null != (s = n.if.call(o, null != (s = null != t ? t.item : t) ? s.following : s, {
        name: "if",
        hash: {},
        fn: e.program(4, r, 0),
        inverse: e.noop,
        data: r
      })) ? s : "") + '" data-text-start="Follow" data-text-end="Following">\n            <span class="js-bt-content">\n                ' + (null != (s = n.if.call(o, null != (s = null != t ? t.item : t) ? s.following : s, {
        name: "if",
        hash: {},
        fn: e.program(6, r, 0),
        inverse: e.program(8, r, 0),
        data: r
      })) ? s : "") + "\n            </span>\n        </div>\n    </div>\n"
    },
    4: function(e, t, n, i, r) {
      return " active"
    },
    6: function(e, t, n, i, r) {
      return "Following"
    },
    8: function(e, t, n, i, r) {
      return "Follow"
    },
    compiler: [7, ">= 4.0.0"],
    main: function(e, t, n, i, r) {
      var s, o = null != t ? t : e.nullContext || {};
      return (null != (s = n.if.call(o, null != t ? t.showOwnerOptions : t, {
        name: "if",
        hash: {},
        fn: e.program(1, r, 0),
        inverse: e.noop,
        data: r
      })) ? s : "") + "\n" + (null != (s = n.if.call(o, null != t ? t.showButtonFollow : t, {
        name: "if",
        hash: {},
        fn: e.program(3, r, 0),
        inverse: e.noop,
        data: r
      })) ? s : "") + "\n\n"
    },
    useData: !0
  })
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      s = i(r),
      o = n(5),
      a = i(o),
      l = s.default.Model.extend({
        currentCollection: null,
        currentCollaborators: [],
        fetchCollaborators: function(t) {
          var n = this;
          this.currentCollection = t, e.ajax({
            type: "GET",
            url: a.default.generate("tv_collection_get_collaborators", {
              id: t.id
            }),
            success: function(e) {
              e.length > 0 && (n.currentCollaborators = e, n.trigger("collaborators_loaded", e))
            }
          })
        },
        searchUserByUsernameOrEmail: function(t) {
          var n = this;
          e.ajax({
            type: "POST",
            url: a.default.generate("tv_directory_suggest"),
            data: {
              text: t
            },
            success: function(e) {
              e.length > 0 && n.trigger("show_users_found", e)
            }
          })
        },
        existCollaborator: function(e) {
          for (var t = 0; t < this.currentCollaborators.length; t++)
            if (this.currentCollaborators[t].id === e.id) return !0;
          return !1
        },
        addCollaborator: function(t) {
          e.ajax({
            type: "POST",
            url: a.default.generate("tv_collection_add_collaborator", {
              id: this.currentCollection.id
            }),
            data: {
              collaborator: t.id
            }
          })
        },
        removeCollaborator: function(t) {
          e.ajax({
            type: "POST",
            url: a.default.generate("tv_collection_remove_collaborator", {
              id: this.currentCollection.id
            }),
            data: {
              collaborator: t.id
            }
          })
        }
      });
    t.default = l
  }).call(t, n(0))
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      s = i(r),
      o = n(126),
      a = i(o),
      l = n(9),
      c = i(l),
      u = n(6),
      d = i(u),
      h = n(51),
      f = i(h),
      p = n(7),
      m = i(p),
      v = s.default.View.extend({
        events: {
          "keyup #username": "_preSearch",
          "click .add-colaborator": "addCollaborator"
        },
        initialize: function() {
          this.template = a.default, this.lightBox = new d.default({
            el: "#lightbox-share"
          }), this.model.on("collaborators_loaded", this.showCollaborators, this), this.model.on("show_users_found", this.showUsersFound, this), this._searchDebounced = m.default.debounce(m.default.bind(this._search, this), 300)
        },
        show: function(e) {
          this.$el.html(this.template({
            collection: e
          })), this.lightBox.show(this.el), this.model.fetchCollaborators(e)
        },
        showCollaborators: function(e) {
          for (var t = [], n = 0; n < e.length; n++) {
            var i = e[n],
              r = this._createCollaboratorItem(i);
            t.push(r)
          }
          this.$(".list-users").html(t)
        },
        _createCollaboratorItem: function(t) {
          var n = this,
            i = e('<img width="32" height="32"/>').prop("src", c.default.assetTv(t.photo)).prop("alt", t.display_name),
            r = e('<div class="bt-delete"></div>'),
            s = e("<li/>");
          r.click(function() {
            s.remove(), n.model.removeCollaborator(t)
          });
          var o = e('<div class="js-user" data-username="' + t.username + '"></div>');
          return o.append(i).append(r), s.append(o)
        },
        _preSearch: function(e) {
          var t = e.currentTarget.value;
          this._searchDebounced(t)
        },
        _search: function(e) {
          e.length < 3 || (this.model.searchUserByUsernameOrEmail(e), this.$(".box-users-autocomplete").show())
        },
        addCollaborator: function(t) {
          var n = e(t.currentTarget),
            i = n.data("user");
          if (!this.model.existCollaborator(i)) {
            this.$(".box-users-autocomplete").hide(), this.$("#username").val("");
            var r = this._createCollaboratorItem(i);
            this.$(".list-users").append(r), this.model.addCollaborator(i)
          }
        },
        showUsersFound: function(e) {
          this.$("#suggest-list").html(f.default.createItems(e))
        }
      });
    t.default = v
  }).call(t, n(0))
}, function(e, t, n) {
  var i = n(3);
  e.exports = (i.default || i).template({
    compiler: [7, ">= 4.0.0"],
    main: function(e, t, n, i, r) {
      var s;
      return '<div class="box-content-default size-small">\n    <div class="content">\n        <div class="box-share-collection">\n            <h3 class="heading-small title">Share Collection</h3>\n            <h3 class="heading-small">' + e.escapeExpression(e.lambda(null != (s = null != t ? t.collection : t) ? s.name : s, t)) + '</h3>\n            <div class="row">\n                <div class="form-collaborator">\n                    <input type="text" id="username" class="text-input js-showusers" placeholder="Email or Username" autocomplete="off">\n                    <div class="box-users-autocomplete" style="display: none;">\n                        <ul id="suggest-list"></ul>\n                    </div>\n                </div>\n                <div class="box-users-likes">\n                    <ul class="list-users"></ul>\n                </div>\n                <div class="box-bts">\n                    <div class="box-left">\n                        <input type="submit" class="button js-lightbox-close" value="DONE">\n                        <span class="link-cancel bt-cancel link-2 js-lightbox-close">Cancel</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n'
    },
    useData: !0
  })
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(5),
    s = i(r),
    o = n(44),
    a = i(o),
    l = a.default.extend({
      defaults: {
        id: "",
        slug: "",
        images: {}
      },
      getUrlToSaveInCollection: function(e) {
        return s.default.generate("tv_favourites_create_post_collectable", {
          slug: this.get("slug"),
          idCollection: e
        })
      }
    });
  t.default = l
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(5),
    s = i(r),
    o = n(44),
    a = i(o),
    l = a.default.extend({
      defaults: {
        id: "",
        main_image: "",
        type: "external"
      },
      getUrlToSaveInCollection: function(e) {
        return s.default.generate("tv_favourites_add_external_to_collection", {
          id: this.get("id"),
          idCollection: e
        })
      },
      getImage: function() {
        return this.get("main_image")
      }
    });
  t.default = l
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(7),
    s = i(r),
    o = n(130),
    a = i(o),
    l = n(81),
    c = i(l),
    u = n(131),
    d = i(u),
    h = n(133),
    f = i(h),
    p = n(13),
    m = i(p),
    v = n(6),
    g = i(v),
    _ = c.default.extend({
      events: function() {
        var e = c.default.prototype.events;
        return s.default.isFunction(e) && (e = e()), s.default.extend({}, e, {
          "click .js-edit-element": "_editElement"
        })
      },
      _editElement: function(e) {
        e.preventDefault();
        var t = this,
          n = this.model.toJSON(),
          i = {
            image: n.image,
            title: n.title,
            element_id: n.id,
            tags: n.tags
          },
          r = new g.default,
          s = new d.default({
            model: new f.default(i)
          });
        s.on("close", r.destroy, r), s.on("edited", function(e) {
          t.model.set("title", e.title), t.model.set("tags", e.tags), this.el.querySelector(".js-title a").textContent = e.title, r.destroy()
        }, this);
        var o = document.createElement("div");
        o.classList.add("box-content-collections");
        var a = document.createElement("div");
        a.classList.add("box-elements"), a.appendChild(s.render().el), o.append(a), r.show(o)
      },
      render: function() {
        if (this.el.classList.contains("js-no-render")) return this;
        var e = m.default.isSameUserLoggedIn(this.model.get("user").id);
        return this.el.querySelector(".footer .box-right").innerHTML = (0, a.default)({
          showEditOptions: this.options.isTheOwnerLoggedIn && e
        }), this
      }
    });
  t.default = _
}, function(e, t, n) {
  function i(e) {
    return e && (e.__esModule ? e.default : e)
  }
  var r = n(3);
  e.exports = (r.default || r).template({
    1: function(e, t, r, s, o) {
      return '    <div class="bt-icon js-edit-element">\n        <div class="tooltip">\n            <div class="bt-circle small gray">\n                ' + e.escapeExpression(i(n(18)).call(null != t ? t : e.nullContext || {}, "settings", 14, 14, {
        name: "helpers/icon",
        hash: {},
        data: o
      })) + '\n            </div>\n            <div class="box-tooltip">\n                <div class="tooltip-text">Edit Element!</div>\n            </div>\n        </div>\n    </div>\n'
    },
    compiler: [7, ">= 4.0.0"],
    main: function(e, t, n, i, r) {
      var s;
      return null != (s = n.if.call(null != t ? t : e.nullContext || {}, null != t ? t.showEditOptions : t, {
        name: "if",
        hash: {},
        fn: e.program(1, r, 0),
        inverse: e.noop,
        data: r
      })) ? s : ""
    },
    useData: !0
  })
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(1),
    s = i(r),
    o = n(132),
    a = i(o),
    l = n(9),
    c = i(l),
    u = n(25),
    d = i(u),
    h = s.default.View.extend({
      tagName: "div",
      className: "tab-form active",
      events: {
        "click .save": "_send",
        "click .cancel": "close"
      },
      template: a.default,
      initialize: function(e) {
        this.model.on("edited", this.triggerEdited, this)
      },
      triggerEdited: function(e) {
        this.trigger("edited", e)
      },
      close: function() {
        this.trigger("close")
      },
      _send: function(e) {
        var t = e.currentTarget;
        if (!d.default.isLoading(t)) {
          d.default.addLoading(t), this.$(".form-group").removeClass("has-error"), this.$(".alert").hide();
          var n = this.el.querySelector(".js-title").value,
            i = this.el.querySelector(".js-tags").value,
            r = this.model.getErrors(n);
          if (0 === r.length) this.model.send(n, i);
          else {
            d.default.removeLoading(t);
            for (var s = 0, o = r.length; s < o; s++) this.showError(r[s])
          }
        }
      },
      showError: function(e) {
        this.$("." + e + "-group").addClass("has-error"), this.$("." + e + "-error-msg").show()
      },
      render: function() {
        return this.$el.html(this.template({
          title: this.model.get("title"),
          tags: this.model.get("tags").join(", "),
          image: this._generateElement(this.model.get("image"))
        })), this
      },
      destroy: function() {
        this.undelegateEvents(), this.$el.removeData().unbind(), this.remove(), s.default.View.prototype.remove.call(this)
      },
      _generateElement: function(e) {
        return c.default.isVideo(e) ? '<video class="video-item" height="417" width="299" autoplay loop><source src="' + c.default.assetTv(e) + '" type="' + c.default.typeVideo(e) + '"></video>' : '<img src="' + c.default.assetTv(e) + '">'
      }
    });
  t.default = h
}, function(e, t, n) {
  var i = n(3);
  e.exports = (i.default || i).template({
    compiler: [7, ">= 4.0.0"],
    main: function(e, t, n, i, r) {
      var s, o, a = null != t ? t : e.nullContext || {},
        l = n.helperMissing,
        c = e.escapeExpression;
      return '<div class="box-add-image">\n    <div class="add-photo">\n        <div class="js-photo">\n            ' + (null != (o = null != (o = n.image || (null != t ? t.image : t)) ? o : l, s = "function" == typeof o ? o.call(a, {
        name: "image",
        hash: {},
        data: r
      }) : o) ? s : "") + '\n        </div>\n        <div class="box-loading style2">\n            <div class="spinner"></div>\n        </div>\n    </div>\n</div>\n<div class="content">\n    <div class="row">\n        <div class="form-group title-group">\n            <input type="text" class="text-input js-title" placeholder="Title" value="' + c((o = null != (o = n.title || (null != t ? t.title : t)) ? o : l, "function" == typeof o ? o.call(a, {
        name: "title",
        hash: {},
        data: r
      }) : o)) + '">\n            <div class="msg alert title-error-msg" style="display: none;">You must fill title.</div>\n        </div>\n    </div>\n    <div class="row">\n        <input type="text" class="text-input js-tags" placeholder="Tags" value="' + c((o = null != (o = n.tags || (null != t ? t.tags : t)) ? o : l, "function" == typeof o ? o.call(a, {
        name: "tags",
        hash: {},
        data: r
      }) : o)) + '">\n        <div class="ex">Ex. html5, virtual reality, portfolio</div>\n    </div>\n    <div class="box-bts">\n        <div class="box-left">\n            <button type="submit" class="button save"><span class="bt-content">SAVE</span></button>\n            <span class="bt-cancel link-2 js-tab cancel" >Cancel</span>\n        </div>\n    </div>\n</div>\n'
    },
    useData: !0
  })
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      s = i(r),
      o = n(5),
      a = i(o),
      l = s.default.Model.extend({
        defaults: {
          title: "",
          tags: "",
          element_id: null
        },
        send: function(t, n) {
          var i = this;
          e.ajax({
            type: "POST",
            url: a.default.generate("tv_favourites_edit_element"),
            data: {
              title: t,
              tags: n,
              element_id: i.get("element_id")
            },
            success: function(e) {
              i.trigger("edited", e)
            }
          })
        },
        setTitle: function(e) {
          this.set("title", e)
        },
        setTags: function(e) {
          this.set("tags", e)
        },
        getErrors: function(e) {
          var t = [];
          return e || t.push("title"), t
        }
      });
    t.default = l
  }).call(t, n(0))
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = n(5),
    s = i(r),
    o = n(44),
    a = i(o),
    l = a.default.extend({
      defaults: {
        actors: [],
        collectable: null
      },
      getUrlToSaveInCollection: function(e) {
        return s.default.generate("tv_favourites_add_collectable_to_collection", {
          collectableId: this.get("collectable").id,
          idCollection: e
        })
      },
      getImage: function() {
        return this.get("image")
      }
    });
  t.default = l
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var i = n(136),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i),
    s = {
      all: new r.default("ALL"),
      submission: new r.default("Websites"),
      collection: new r.default("Collections"),
      element: new r.default("Elements"),
      post: new r.default("Magazine"),
      job: new r.default("Jobs"),
      user: new r.default("Users")
    };
  t.default = s
}, function(e, t, n) {
  "use strict";

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }(),
    s = function() {
      function e(t) {
        i(this, e), this.name = t
      }
      return r(e, [{
        key: "name",
        value: function() {
          return this.name
        }
      }]), e
    }();
  t.default = s
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      s = i(r),
      o = n(5),
      a = i(o),
      l = s.default.Model.extend({
        searching: !1,
        request: null,
        search: function(t, n) {
          var i = this;
          this.searching = !0, i.abortRequest(), this.request = e.ajax({
            type: "GET",
            url: a.default.generate("tv_inspiration_search"),
            data: {
              text: t,
              type: n
            },
            cache: !1,
            success: function(e) {
              i.trigger("search_load", e), i.searching = !1
            }
          })
        },
        abortRequest: function() {
          this.request && this.request.abort()
        }
      });
    t.default = l
  }).call(t, n(0))
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1),
      s = i(r),
      o = n(7),
      a = i(o),
      l = {},
      c = e(window);
    a.default.extend(l, s.default.Events), l.trackScrolling = function() {
      c.on("scroll", a.default.throttle(function() {
        var e = document.body,
          t = e.scrollHeight - window.innerHeight - 100;
        (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) > t && s.default.trigger("page:scrollbottom")
      }, 1e3))
    }, l.trackScrollTo = function() {
      this.listenTo(s.default, "page:scrollto", function(e) {
        document.body.scrollTop = e
      })
    }, l.initialize = function() {
      this.trackScrolling(), this.trackScrollTo()
    }, t.default = l
  }).call(t, n(0))
}, function(e, t, n) {
  "use strict";

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
      }
    }(),
    s = n(33),
    o = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(s),
    a = {},
    l = function() {
      function e() {
        i(this, e)
      }
      return r(e, null, [{
        key: "get",
        value: function(e) {
          return a.hasOwnProperty(e) || (a[e] = o.default.get(e)), void 0 === a[e] ? "default" : a[e]
        }
      }, {
        key: "set",
        value: function(e, t, n) {
          o.default.set(e, t, n), a[e] = t
        }
      }]), e
    }();
  t.default = l
}, function(e, t, n) {
  var i, r;
  ! function(n, s) {
    i = [], void 0 !== (r = function() {
      return n.svg4everybody = s()
    }.apply(t, i)) && (e.exports = r)
  }(this, function() { /*! svg4everybody v2.0.0 | github.com/jonathantneal/svg4everybody */
    function e(e, t) {
      if (t) {
        var n = !e.getAttribute("viewBox") && t.getAttribute("viewBox"),
          i = document.createDocumentFragment(),
          r = t.cloneNode(!0);
        for (n && e.setAttribute("viewBox", n); r.childNodes.length;) i.appendChild(r.firstChild);
        e.appendChild(i)
      }
    }

    function t(t) {
      t.onreadystatechange = function() {
        if (4 === t.readyState) {
          var n = document.createElement("x");
          n.innerHTML = t.responseText, t.s.splice(0).map(function(t) {
            e(t[0], n.querySelector("#" + t[1].replace(/(\W)/g, "\\$1")))
          })
        }
      }, t.onreadystatechange()
    }

    function n(n) {
      function i() {
        for (var n; n = r[0];) {
          var c = n.parentNode;
          if (c && /svg/i.test(c.nodeName)) {
            var u = n.getAttribute("xlink:href");
            if (s && (!o || o(u, c, n))) {
              var d = u.split("#"),
                h = d[0],
                f = d[1];
              if (c.removeChild(n), h.length) {
                var p = l[h] = l[h] || new XMLHttpRequest;
                p.s || (p.s = [], p.open("GET", h), p.send()), p.s.push([c, f]), t(p)
              } else e(c, document.getElementById(f))
            }
          }
        }
        a(i, 17)
      }
      n = n || {};
      var r = document.getElementsByTagName("use"),
        s = "shim" in n ? n.shim : /\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent) || (navigator.userAgent.match(/AppleWebKit\/(\d+)/) || [])[1] < 537,
        o = n.validate,
        a = window.requestAnimationFrame || setTimeout,
        l = {};
      s && i()
    }
    return n
  })
}, function(e, t) {
  ! function(e) {
    if (!e.hasInitialised) {
      var t = {
        escapeRegExp: function(e) {
          return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        },
        hasClass: function(e, t) {
          var n = " ";
          return 1 === e.nodeType && (n + e.className + n).replace(/[\n\t]/g, n).indexOf(n + t + n) >= 0
        },
        addClass: function(e, t) {
          e.className += " " + t
        },
        removeClass: function(e, t) {
          var n = new RegExp("\\b" + this.escapeRegExp(t) + "\\b");
          e.className = e.className.replace(n, "")
        },
        interpolateString: function(e, t) {
          var n = /{{([a-z][a-z0-9\-_]*)}}/gi;
          return e.replace(n, function(e) {
            return t(arguments[1]) || ""
          })
        },
        getCookie: function(e) {
          var t = "; " + document.cookie,
            n = t.split("; " + e + "=");
          return 2 != n.length ? void 0 : n.pop().split(";").shift()
        },
        setCookie: function(e, t, n, i, r) {
          var s = new Date;
          s.setDate(s.getDate() + (n || 365));
          var o = [e + "=" + t, "expires=" + s.toUTCString(), "path=" + (r || "/")];
          i && o.push("domain=" + i), document.cookie = o.join(";")
        },
        deepExtend: function(e, t) {
          for (var n in t) t.hasOwnProperty(n) && (n in e && this.isPlainObject(e[n]) && this.isPlainObject(t[n]) ? this.deepExtend(e[n], t[n]) : e[n] = t[n]);
          return e
        },
        throttle: function(e, t) {
          var n = !1;
          return function() {
            n || (e.apply(this, arguments), n = !0, setTimeout(function() {
              n = !1
            }, t))
          }
        },
        hash: function(e) {
          var t, n, i, r = 0;
          if (0 === e.length) return r;
          for (t = 0, i = e.length; t < i; ++t) n = e.charCodeAt(t), r = (r << 5) - r + n, r |= 0;
          return r
        },
        normaliseHex: function(e) {
          return "#" == e[0] && (e = e.substr(1)), 3 == e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e
        },
        getContrast: function(e) {
          return e = this.normaliseHex(e), (299 * parseInt(e.substr(0, 2), 16) + 587 * parseInt(e.substr(2, 2), 16) + 114 * parseInt(e.substr(4, 2), 16)) / 1e3 >= 128 ? "#000" : "#fff"
        },
        getLuminance: function(e) {
          var t = parseInt(this.normaliseHex(e), 16),
            n = 38 + (t >> 16),
            i = 38 + (t >> 8 & 255),
            r = 38 + (255 & t);
          return "#" + (16777216 + 65536 * (n < 255 ? n < 1 ? 0 : n : 255) + 256 * (i < 255 ? i < 1 ? 0 : i : 255) + (r < 255 ? r < 1 ? 0 : r : 255)).toString(16).slice(1)
        },
        isMobile: function() {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        },
        isPlainObject: function(e) {
          return "object" == typeof e && null !== e && e.constructor == Object
        }
      };
      e.status = {
        deny: "deny",
        allow: "allow",
        dismiss: "dismiss"
      }, e.transitionEnd = function() {
        var e = document.createElement("div"),
          t = {
            t: "transitionend",
            OT: "oTransitionEnd",
            msT: "MSTransitionEnd",
            MozT: "transitionend",
            WebkitT: "webkitTransitionEnd"
          };
        for (var n in t)
          if (t.hasOwnProperty(n) && void 0 !== e.style[n + "ransition"]) return t[n];
        return ""
      }(), e.hasTransition = !!e.transitionEnd;
      var n = Object.keys(e.status).map(t.escapeRegExp);
      e.customStyles = {}, e.Popup = function() {
        function i() {
          this.initialise.apply(this, arguments)
        }

        function r(e) {
          this.openingTimeout = null, t.removeClass(e, "cc-invisible")
        }

        function s(t) {
          t.style.display = "none", t.removeEventListener(e.transitionEnd, this.afterTransition), this.afterTransition = null
        }

        function o() {
          var t = this.options.onInitialise.bind(this);
          if (!window.navigator.cookieEnabled) return t(e.status.deny), !0;
          if (window.CookiesOK || window.navigator.CookiesOK) return t(e.status.allow), !0;
          var n = Object.keys(e.status),
            i = this.getStatus(),
            r = n.indexOf(i) >= 0;
          return r && t(i), r
        }

        function a() {
          var e = this.options.position.split("-"),
            t = [];
          return e.forEach(function(e) {
            t.push("cc-" + e)
          }), t
        }

        function l() {
          var e = this.options,
            n = "top" == e.position || "bottom" == e.position ? "banner" : "floating";
          t.isMobile() && (n = "floating");
          var i = ["cc-" + n, "cc-type-" + e.type, "cc-theme-" + e.theme];
          return e.static && i.push("cc-static"), i.push.apply(i, a.call(this)), h.call(this, this.options.palette), this.customStyleSelector && i.push(this.customStyleSelector), i
        }

        function c() {
          var e = {},
            n = this.options;
          n.showLink || (n.elements.link = "", n.elements.messagelink = n.elements.message), Object.keys(n.elements).forEach(function(i) {
            e[i] = t.interpolateString(n.elements[i], function(e) {
              var t = n.content[e];
              return e && "string" == typeof t && t.length ? t : ""
            })
          });
          var i = n.compliance[n.type];
          i || (i = n.compliance.info), e.compliance = t.interpolateString(i, function(t) {
            return e[t]
          });
          var r = n.layouts[n.layout];
          return r || (r = n.layouts.basic), t.interpolateString(r, function(t) {
            return e[t]
          })
        }

        function u(n) {
          var i = this.options,
            r = document.createElement("div"),
            s = i.container && 1 === i.container.nodeType ? i.container : document.body;
          r.innerHTML = n;
          var o = r.children[0];
          return o.style.display = "none", t.hasClass(o, "cc-window") && e.hasTransition && t.addClass(o, "cc-invisible"), this.onButtonClick = d.bind(this), o.addEventListener("click", this.onButtonClick), i.autoAttach && (s.firstChild ? s.insertBefore(o, s.firstChild) : s.appendChild(o)), o
        }

        function d(i) {
          var r = i.target;
          if (t.hasClass(r, "cc-btn")) {
            var s = r.className.match(new RegExp("\\bcc-(" + n.join("|") + ")\\b")),
              o = s && s[1] || !1;
            o && (this.setStatus(o), this.close(!0))
          }
          t.hasClass(r, "cc-close") && (this.setStatus(e.status.dismiss), this.close(!0)), t.hasClass(r, "cc-revoke") && this.revokeChoice()
        }

        function h(e) {
          var n = t.hash(JSON.stringify(e)),
            i = "cc-color-override-" + n,
            r = t.isPlainObject(e);
          return this.customStyleSelector = r ? i : null, r && f(n, e, "." + i), r
        }

        function f(n, i, r) {
          if (e.customStyles[n]) return void++e.customStyles[n].references;
          var s = {},
            o = i.popup,
            a = i.button,
            l = i.highlight;
          o && (o.text = o.text ? o.text : t.getContrast(o.background), o.link = o.link ? o.link : o.text, s[r + ".cc-window"] = ["color: " + o.text, "background-color: " + o.background], s[r + ".cc-revoke"] = ["color: " + o.text, "background-color: " + o.background], s[r + " .cc-link," + r + " .cc-link:active," + r + " .cc-link:visited"] = ["color: " + o.link], a && (a.text = a.text ? a.text : t.getContrast(a.background), a.border = a.border ? a.border : "transparent", s[r + " .cc-btn"] = ["color: " + a.text, "border-color: " + a.border, "background-color: " + a.background], "transparent" != a.background && (s[r + " .cc-btn:hover, " + r + " .cc-btn:focus"] = ["background-color: " + p(a.background)]), l ? (l.text = l.text ? l.text : t.getContrast(l.background), l.border = l.border ? l.border : "transparent", s[r + " .cc-highlight .cc-btn:first-child"] = ["color: " + l.text, "border-color: " + l.border, "background-color: " + l.background]) : s[r + " .cc-highlight .cc-btn:first-child"] = ["color: " + o.text]));
          var c = document.createElement("style");
          document.head.appendChild(c), e.customStyles[n] = {
            references: 1,
            element: c.sheet
          };
          var u = -1;
          for (var d in s) s.hasOwnProperty(d) && c.sheet.insertRule(d + "{" + s[d].join(";") + "}", ++u)
        }

        function p(e) {
          return e = t.normaliseHex(e), "000000" == e ? "#222" : t.getLuminance(e)
        }

        function m(n) {
          if (t.isPlainObject(n)) {
            var i = t.hash(JSON.stringify(n)),
              r = e.customStyles[i];
            if (r && !--r.references) {
              var s = r.element.ownerNode;
              s && s.parentNode && s.parentNode.removeChild(s), e.customStyles[i] = null
            }
          }
        }

        function v(e, t) {
          for (var n = 0, i = e.length; n < i; ++n) {
            var r = e[n];
            if (r instanceof RegExp && r.test(t) || "string" == typeof r && r.length && r === t) return !0
          }
          return !1
        }

        function g() {
          var t = this.setStatus.bind(this),
            n = this.options.dismissOnTimeout;
          "number" == typeof n && n >= 0 && (this.dismissTimeout = window.setTimeout(function() {
            t(e.status.dismiss)
          }, Math.floor(n)));
          var i = this.options.dismissOnScroll;
          if ("number" == typeof i && i >= 0) {
            var r = function(n) {
              window.pageYOffset > Math.floor(i) && (t(e.status.dismiss), window.removeEventListener("scroll", r), this.onWindowScroll = null)
            };
            this.onWindowScroll = r, window.addEventListener("scroll", r)
          }
        }

        function _() {
          if ("info" != this.options.type && (this.options.revokable = !0), t.isMobile() && (this.options.animateRevokable = !1), this.options.revokable) {
            var e = a.call(this);
            this.options.animateRevokable && e.push("cc-animate"), this.customStyleSelector && e.push(this.customStyleSelector);
            var n = this.options.revokeBtn.replace("{{classes}}", e.join(" "));
            this.revokeBtn = u.call(this, n);
            var i = this.revokeBtn;
            if (this.options.animateRevokable) {
              var r = t.throttle(function(e) {
                var n = !1,
                  r = window.innerHeight - 20;
                t.hasClass(i, "cc-top") && e.clientY < 20 && (n = !0), t.hasClass(i, "cc-bottom") && e.clientY > r && (n = !0), n ? t.hasClass(i, "cc-active") || t.addClass(i, "cc-active") : t.hasClass(i, "cc-active") && t.removeClass(i, "cc-active")
              }, 200);
              this.onMouseMove = r, window.addEventListener("mousemove", r)
            }
          }
        }
        var y = {
          enabled: !0,
          container: null,
          cookie: {
            name: "cookieconsent_status",
            path: "/",
            domain: "",
            expiryDays: 365
          },
          onPopupOpen: function() {},
          onPopupClose: function() {},
          onInitialise: function(e) {},
          onStatusChange: function(e, t) {},
          onRevokeChoice: function() {},
          content: {
            header: "Cookies used on the website!",
            message: "This website uses cookies to ensure you get the best experience on our website.",
            dismiss: "Got it!",
            allow: "Allow cookies",
            deny: "Decline",
            link: "Learn more",
            href: "http://cookiesandyou.com",
            close: "&#x274c;"
          },
          elements: {
            header: '<span class="cc-header">{{header}}</span>&nbsp;',
            message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
            messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a></span>',
            dismiss: '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
            allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
            deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
            link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a>',
            close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'
          },
          window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>',
          revokeBtn: '<div class="cc-revoke {{classes}}">Cookie Policy</div>',
          compliance: {
            info: '<div class="cc-compliance">{{dismiss}}</div>',
            "opt-in": '<div class="cc-compliance cc-highlight">{{dismiss}}{{allow}}</div>',
            "opt-out": '<div class="cc-compliance cc-highlight">{{deny}}{{dismiss}}</div>'
          },
          type: "info",
          layouts: {
            basic: "{{messagelink}}{{compliance}}",
            "basic-close": "{{messagelink}}{{compliance}}{{close}}",
            "basic-header": "{{header}}{{message}}{{link}}{{compliance}}"
          },
          layout: "basic",
          position: "bottom",
          theme: "block",
          static: !1,
          palette: null,
          revokable: !1,
          animateRevokable: !0,
          showLink: !0,
          dismissOnScroll: !1,
          dismissOnTimeout: !1,
          autoOpen: !0,
          autoAttach: !0,
          whitelistPage: [],
          blacklistPage: [],
          overrideHTML: null
        };
        return i.prototype.initialise = function(e) {
          this.options && this.destroy(), t.deepExtend(this.options = {}, y), t.isPlainObject(e) && t.deepExtend(this.options, e), o.call(this) && (this.options.enabled = !1), v(this.options.blacklistPage, location.pathname) && (this.options.enabled = !1), v(this.options.whitelistPage, location.pathname) && (this.options.enabled = !0);
          var n = this.options.window.replace("{{classes}}", l.call(this).join(" ")).replace("{{children}}", c.call(this)),
            i = this.options.overrideHTML;
          if ("string" == typeof i && i.length && (n = i), this.options.static) {
            var r = u.call(this, '<div class="cc-grower">' + n + "</div>");
            r.style.display = "", this.element = r.firstChild, this.element.style.display = "none", t.addClass(this.element, "cc-invisible")
          } else this.element = u.call(this, n);
          g.call(this), _.call(this), this.options.autoOpen && this.autoOpen()
        }, i.prototype.destroy = function() {
          this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick), this.onButtonClick = null), this.dismissTimeout && (clearTimeout(this.dismissTimeout), this.dismissTimeout = null), this.onWindowScroll && (window.removeEventListener("scroll", this.onWindowScroll), this.onWindowScroll = null), this.onMouseMove && (window.removeEventListener("mousemove", this.onMouseMove), this.onMouseMove = null), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.revokeBtn && this.revokeBtn.parentNode && this.revokeBtn.parentNode.removeChild(this.revokeBtn), this.revokeBtn = null, m(this.options.palette), this.options = null
        }, i.prototype.open = function(t) {
          if (this.element) return this.isOpen() || (e.hasTransition ? this.fadeIn() : this.element.style.display = "", this.options.revokable && this.toggleRevokeButton(), this.options.onPopupOpen.call(this)), this
        }, i.prototype.close = function(t) {
          if (this.element) return this.isOpen() && (e.hasTransition ? this.fadeOut() : this.element.style.display = "none", t && this.options.revokable && this.toggleRevokeButton(!0), this.options.onPopupClose.call(this)), this
        }, i.prototype.fadeIn = function() {
          var n = this.element;
          if (e.hasTransition && n && (this.afterTransition && s.call(this, n), t.hasClass(n, "cc-invisible"))) {
            if (n.style.display = "", this.options.static) {
              var i = this.element.clientHeight;
              this.element.parentNode.style.maxHeight = i + "px"
            }
            this.openingTimeout = setTimeout(r.bind(this, n), 20)
          }
        }, i.prototype.fadeOut = function() {
          var n = this.element;
          e.hasTransition && n && (this.openingTimeout && (clearTimeout(this.openingTimeout), r.bind(this, n)), t.hasClass(n, "cc-invisible") || (this.options.static && (this.element.parentNode.style.maxHeight = ""), this.afterTransition = s.bind(this, n), n.addEventListener(e.transitionEnd, this.afterTransition), t.addClass(n, "cc-invisible")))
        }, i.prototype.isOpen = function() {
          return this.element && "" == this.element.style.display && (!e.hasTransition || !t.hasClass(this.element, "cc-invisible"))
        }, i.prototype.toggleRevokeButton = function(e) {
          this.revokeBtn && (this.revokeBtn.style.display = e ? "" : "none")
        }, i.prototype.revokeChoice = function(e) {
          this.options.enabled = !0, this.clearStatus(), this.options.onRevokeChoice.call(this), e || this.autoOpen()
        }, i.prototype.hasAnswered = function(t) {
          return Object.keys(e.status).indexOf(this.getStatus()) >= 0
        }, i.prototype.hasConsented = function(t) {
          var n = this.getStatus();
          return n == e.status.allow || n == e.status.dismiss
        }, i.prototype.autoOpen = function(e) {
          !this.hasAnswered() && this.options.enabled && this.open()
        }, i.prototype.setStatus = function(n) {
          var i = this.options.cookie,
            r = t.getCookie(i.name),
            s = Object.keys(e.status).indexOf(r) >= 0;
          Object.keys(e.status).indexOf(n) >= 0 ? (t.setCookie(i.name, n, i.expiryDays, i.domain, i.path), this.options.onStatusChange.call(this, n, s)) : this.clearStatus()
        }, i.prototype.getStatus = function() {
          return t.getCookie(this.options.cookie.name)
        }, i.prototype.clearStatus = function() {
          var e = this.options.cookie;
          t.setCookie(e.name, "", -1, e.domain, e.path)
        }, i
      }(), e.Location = function() {
        function e(e) {
          t.deepExtend(this.options = {}, s), t.isPlainObject(e) && t.deepExtend(this.options, e), this.currentServiceIndex = -1
        }

        function n(e, t, n) {
          var i, r = document.createElement("script");
          r.type = "text/" + (e.type || "javascript"), r.src = e.src || e, r.async = !1, r.onreadystatechange = r.onload = function() {
            var e = r.readyState;
            clearTimeout(i), t.done || e && !/loaded|complete/.test(e) || (t.done = !0, t(), r.onreadystatechange = r.onload = null)
          }, document.body.appendChild(r), i = setTimeout(function() {
            t.done = !0, t(), r.onreadystatechange = r.onload = null
          }, n)
        }

        function i(e, t, n, i, r) {
          var s = new(window.XMLHttpRequest || window.ActiveXObject)("MSXML2.XMLHTTP.3.0");
          if (s.open(i ? "POST" : "GET", e, 1), s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), Array.isArray(r))
            for (var o = 0, a = r.length; o < a; ++o) {
              var l = r[o].split(":", 2);
              s.setRequestHeader(l[0].replace(/^\s+|\s+$/g, ""), l[1].replace(/^\s+|\s+$/g, ""))
            }
          "function" == typeof t && (s.onreadystatechange = function() {
            s.readyState > 3 && t(s)
          }), s.send(i)
        }

        function r(e) {
          return new Error("Error [" + (e.code || "UNKNOWN") + "]: " + e.error)
        }
        var s = {
          timeout: 5e3,
          services: ["freegeoip", "ipinfo", "maxmind"],
          serviceDefinitions: {
            freegeoip: function() {
              return {
                url: "//freegeoip.net/json/?callback={callback}",
                isScript: !0,
                callback: function(e, t) {
                  try {
                    var n = JSON.parse(t);
                    return n.error ? r(n) : {
                      code: n.country_code
                    }
                  } catch (e) {
                    return r({
                      error: "Invalid response (" + e + ")"
                    })
                  }
                }
              }
            },
            ipinfo: function() {
              return {
                url: "//ipinfo.io",
                headers: ["Accept: application/json"],
                callback: function(e, t) {
                  try {
                    var n = JSON.parse(t);
                    return n.error ? r(n) : {
                      code: n.country
                    }
                  } catch (e) {
                    return r({
                      error: "Invalid response (" + e + ")"
                    })
                  }
                }
              }
            },
            ipinfodb: function(e) {
              return {
                url: "//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",
                isScript: !0,
                callback: function(e, t) {
                  try {
                    var n = JSON.parse(t);
                    return "ERROR" == n.statusCode ? r({
                      error: n.statusMessage
                    }) : {
                      code: n.countryCode
                    }
                  } catch (e) {
                    return r({
                      error: "Invalid response (" + e + ")"
                    })
                  }
                }
              }
            },
            maxmind: function() {
              return {
                url: "//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",
                isScript: !0,
                callback: function(e) {
                  return window.geoip2 ? void geoip2.country(function(t) {
                    try {
                      e({
                        code: t.country.iso_code
                      })
                    } catch (t) {
                      e(r(t))
                    }
                  }, function(t) {
                    e(r(t))
                  }) : void e(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))
                }
              }
            }
          }
        };
        return e.prototype.getNextService = function() {
          var e;
          do {
            e = this.getServiceByIdx(++this.currentServiceIndex)
          } while (this.currentServiceIndex < this.options.services.length && !e);
          return e
        }, e.prototype.getServiceByIdx = function(e) {
          var n = this.options.services[e];
          if ("function" == typeof n) {
            var i = n();
            return i.name && t.deepExtend(i, this.options.serviceDefinitions[i.name](i)), i
          }
          return "string" == typeof n ? this.options.serviceDefinitions[n]() : t.isPlainObject(n) ? this.options.serviceDefinitions[n.name](n) : null
        }, e.prototype.locate = function(e, t) {
          var n = this.getNextService();
          return n ? (this.callbackComplete = e, this.callbackError = t, void this.runService(n, this.runNextServiceOnError.bind(this))) : void t(new Error("No services to run"))
        }, e.prototype.setupUrl = function(e) {
          var t = this.getCurrentServiceOpts();
          return e.url.replace(/\{(.*?)\}/g, function(n, i) {
            if ("callback" === i) {
              var r = "callback" + Date.now();
              return window[r] = function(t) {
                e.__JSONP_DATA = JSON.stringify(t)
              }, r
            }
            if (i in t.interpolateUrl) return t.interpolateUrl[i]
          })
        }, e.prototype.runService = function(e, t) {
          var r = this;
          if (e && e.url && e.callback) {
            (e.isScript ? n : i)(this.setupUrl(e), function(n) {
              var i = n ? n.responseText : "";
              e.__JSONP_DATA && (i = e.__JSONP_DATA, delete e.__JSONP_DATA), r.runServiceCallback.call(r, t, e, i)
            }, this.options.timeout, e.data, e.headers)
          }
        }, e.prototype.runServiceCallback = function(e, t, n) {
          var i = this,
            r = function(t) {
              s || i.onServiceResult.call(i, e, t)
            },
            s = t.callback(r, n);
          s && this.onServiceResult.call(this, e, s)
        }, e.prototype.onServiceResult = function(e, t) {
          t instanceof Error || t && t.error ? e.call(this, t, null) : e.call(this, null, t)
        }, e.prototype.runNextServiceOnError = function(e, t) {
          if (e) {
            this.logError(e);
            var n = this.getNextService();
            n ? this.runService(n, this.runNextServiceOnError.bind(this)) : this.completeService.call(this, this.callbackError, new Error("All services failed"))
          } else this.completeService.call(this, this.callbackComplete, t)
        }, e.prototype.getCurrentServiceOpts = function() {
          var e = this.options.services[this.currentServiceIndex];
          return "string" == typeof e ? {
            name: e
          } : "function" == typeof e ? e() : t.isPlainObject(e) ? e : {}
        }, e.prototype.completeService = function(e, t) {
          this.currentServiceIndex = -1, e && e(t)
        }, e.prototype.logError = function(e) {
          var t = this.currentServiceIndex,
            n = this.getServiceByIdx(t);
          console.error("The service[" + t + "] (" + n.url + ") responded with the following error", e)
        }, e
      }(), e.Law = function() {
        function e(e) {
          this.initialise.apply(this, arguments)
        }
        var n = {
          regionalLaw: !0,
          hasLaw: ["AT", "BE", "BG", "HR", "CZ", "CY", "DK", "EE", "FI", "FR", "DE", "EL", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "SK", "SI", "ES", "SE", "GB", "UK"],
          revokable: ["HR", "CY", "DK", "EE", "FR", "DE", "LV", "LT", "NL", "PT", "ES"],
          explicitAction: ["HR", "IT", "ES"]
        };
        return e.prototype.initialise = function(e) {
          t.deepExtend(this.options = {}, n), t.isPlainObject(e) && t.deepExtend(this.options, e)
        }, e.prototype.get = function(e) {
          var t = this.options;
          return {
            hasLaw: t.hasLaw.indexOf(e) >= 0,
            revokable: t.revokable.indexOf(e) >= 0,
            explicitAction: t.explicitAction.indexOf(e) >= 0
          }
        }, e.prototype.applyLaw = function(e, t) {
          var n = this.get(t);
          return n.hasLaw || (e.enabled = !1), this.options.regionalLaw && (n.revokable && (e.revokable = !0), n.explicitAction && (e.dismissOnScroll = !1, e.dismissOnTimeout = !1)), e
        }, e
      }(), e.initialise = function(t, n, i) {
        var r = new e.Law(t.law);
        n || (n = function() {}), i || (i = function() {}), e.getCountryCode(t, function(i) {
          delete t.law, delete t.location, i.code && (t = r.applyLaw(t, i.code)), n(new e.Popup(t))
        }, function(n) {
          delete t.law, delete t.location, i(n, new e.Popup(t))
        })
      }, e.getCountryCode = function(t, n, i) {
        if (t.law && t.law.countryCode) return void n({
          code: t.law.countryCode
        });
        if (t.location) {
          return void new e.Location(t.location).locate(function(e) {
            n(e || {})
          }, i)
        }
        n({})
      }, e.utils = t, e.hasInitialised = !0, window.cookieconsent = e
    }
  }(window.cookieconsent || {})
}, function(e, t, n) {
  var i;
  /*! picturefill - v3.0.2 - 2016-02-12
   * https://scottjehl.github.io/picturefill/
   * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
   */
  /*! Gecko-Picture - v1.0
   * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
   * Firefox's early picture implementation (prior to FF41) is static and does
   * not react to viewport changes. This tiny module fixes this.
   */
  ! function(e) {
    var t = navigator.userAgent;
    e.HTMLPictureElement && /ecko/.test(t) && t.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function() {
      var t, n = document.createElement("source"),
        i = function(e) {
          var t, i, r = e.parentNode;
          "PICTURE" === r.nodeName.toUpperCase() ? (t = n.cloneNode(), r.insertBefore(t, r.firstElementChild), setTimeout(function() {
            r.removeChild(t)
          })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, i = e.sizes, e.sizes += ",100vw", setTimeout(function() {
            e.sizes = i
          }))
        },
        r = function() {
          var e, t = document.querySelectorAll("picture > img, img[srcset][sizes]");
          for (e = 0; e < t.length; e++) i(t[e])
        },
        s = function() {
          clearTimeout(t), t = setTimeout(r, 99)
        },
        o = e.matchMedia && matchMedia("(orientation: landscape)"),
        a = function() {
          s(), o && o.addListener && o.addListener(s)
        };
      return n.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a), s
    }())
  }(window),
  /*! Picturefill - v3.0.2
   * http://scottjehl.github.io/picturefill
   * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
   *  License: MIT
   */
  function(r, s, o) {
    "use strict";

    function a(e) {
      return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e
    }

    function l() {
      R = !1, F = r.devicePixelRatio, D = {}, H = {}, b.DPR = F || 1, B.width = Math.max(r.innerWidth || 0, S.clientWidth), B.height = Math.max(r.innerHeight || 0, S.clientHeight), B.vw = B.width / 100, B.vh = B.height / 100, y = [B.height, B.width, F].join("-"), B.em = b.getEmValue(), B.rem = B.em
    }

    function c(e, t, n, i) {
      var r, s, o, a;
      return "saveData" === O.algorithm ? e > 2.7 ? a = n + 1 : (s = t - n, r = Math.pow(e - .6, 1.5), o = s * r, i && (o += .1 * r), a = e + o) : a = n > 1 ? Math.sqrt(e * t) : e, a > n
    }

    function u(e) {
      var t, n = b.getSet(e),
        i = !1;
      "pending" !== n && (i = y, n && (t = b.setRes(n), b.applySetCandidate(t, e))), e[b.ns].evaled = i
    }

    function d(e, t) {
      return e.res - t.res
    }

    function h(e, t, n) {
      var i;
      return !n && t && (n = e[b.ns].sets, n = n && n[n.length - 1]), i = f(t, n), i && (t = b.makeUrl(t), e[b.ns].curSrc = t, e[b.ns].curCan = i, i.res || Z(i, i.set.sizes)), i
    }

    function f(e, t) {
      var n, i, r;
      if (e && t)
        for (r = b.parseSet(t), e = b.makeUrl(e), n = 0; n < r.length; n++)
          if (e === b.makeUrl(r[n].url)) {
            i = r[n];
            break
          }
      return i
    }

    function p(e, t) {
      var n, i, r, s, o = e.getElementsByTagName("source");
      for (n = 0, i = o.length; n < i; n++) r = o[n], r[b.ns] = !0, (s = r.getAttribute("srcset")) && t.push({
        srcset: s,
        media: r.getAttribute("media"),
        type: r.getAttribute("type"),
        sizes: r.getAttribute("sizes")
      })
    }

    function m(e, t) {
      function n(t) {
        var n, i = t.exec(e.substring(d));
        if (i) return n = i[0], d += n.length, n
      }

      function i() {
        var e, n, i, o, a, l, c, u, d, f = !1,
          p = {};
        for (o = 0; o < s.length; o++) a = s[o], l = a[a.length - 1], c = a.substring(0, a.length - 1), u = parseInt(c, 10), d = parseFloat(c), G.test(c) && "w" === l ? ((e || n) && (f = !0), 0 === u ? f = !0 : e = u) : X.test(c) && "x" === l ? ((e || n || i) && (f = !0), d < 0 ? f = !0 : n = d) : G.test(c) && "h" === l ? ((i || n) && (f = !0), 0 === u ? f = !0 : i = u) : f = !0;
        f || (p.url = r, e && (p.w = e), n && (p.d = n), i && (p.h = i), i || n || e || (p.d = 1), 1 === p.d && (t.has1x = !0), p.set = t, h.push(p))
      }
      for (var r, s, o, l, c, u = e.length, d = 0, h = [];;) {
        if (n(W), d >= u) return h;
        r = n(V), s = [], "," === r.slice(-1) ? (r = r.replace(J, ""), i()) : function() {
          for (n(z), o = "", l = "in descriptor";;) {
            if (c = e.charAt(d), "in descriptor" === l)
              if (a(c)) o && (s.push(o), o = "", l = "after descriptor");
              else {
                if ("," === c) return d += 1, o && s.push(o), void i();
                if ("(" === c) o += c, l = "in parens";
                else {
                  if ("" === c) return o && s.push(o), void i();
                  o += c
                }
              }
            else if ("in parens" === l)
              if (")" === c) o += c, l = "in descriptor";
              else {
                if ("" === c) return s.push(o), void i();
                o += c
              }
            else if ("after descriptor" === l)
              if (a(c));
              else {
                if ("" === c) return void i();
                l = "in descriptor", d -= 1
              }
            d += 1
          }
        }()
      }
    }

    function v(e) {
      var t, n, i, r, s, o, l = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
        c = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
      for (n = function(e) {
          function t() {
            r && (s.push(r), r = "")
          }

          function n() {
            s[0] && (o.push(s), s = [])
          }
          for (var i, r = "", s = [], o = [], l = 0, c = 0, u = !1;;) {
            if ("" === (i = e.charAt(c))) return t(), n(), o;
            if (u) {
              if ("*" === i && "/" === e[c + 1]) {
                u = !1, c += 2, t();
                continue
              }
              c += 1
            } else {
              if (a(i)) {
                if (e.charAt(c - 1) && a(e.charAt(c - 1)) || !r) {
                  c += 1;
                  continue
                }
                if (0 === l) {
                  t(), c += 1;
                  continue
                }
                i = " "
              } else if ("(" === i) l += 1;
              else if (")" === i) l -= 1;
              else {
                if ("," === i) {
                  t(), n(), c += 1;
                  continue
                }
                if ("/" === i && "*" === e.charAt(c + 1)) {
                  u = !0, c += 2;
                  continue
                }
              }
              r += i, c += 1
            }
          }
        }(e), i = n.length, t = 0; t < i; t++)
        if (r = n[t], s = r[r.length - 1], function(e) {
            return !!(l.test(e) && parseFloat(e) >= 0) || (!!c.test(e) || ("0" === e || "-0" === e || "+0" === e))
          }(s)) {
          if (o = s, r.pop(), 0 === r.length) return o;
          if (r = r.join(" "), b.matchesMedia(r)) return o
        }
      return "100vw"
    }
    s.createElement("picture");
    var g, _, y, b = {},
      w = !1,
      x = function() {},
      k = s.createElement("img"),
      C = k.getAttribute,
      T = k.setAttribute,
      E = k.removeAttribute,
      S = s.documentElement,
      j = {},
      O = {
        algorithm: ""
      },
      A = navigator.userAgent,
      L = /rident/.test(A) || /ecko/.test(A) && A.match(/rv\:(\d+)/) && RegExp.$1 > 35,
      M = "currentSrc",
      I = /\s+\+?\d+(e\d+)?w/,
      P = /(\([^)]+\))?\s*(.+)/,
      N = r.picturefillCFG,
      q = "font-size:100%!important;",
      R = !0,
      D = {},
      H = {},
      F = r.devicePixelRatio,
      B = {
        px: 1,
        in: 96
      },
      U = s.createElement("a"),
      $ = !1,
      z = /^[ \t\n\r\u000c]+/,
      W = /^[, \t\n\r\u000c]+/,
      V = /^[^ \t\n\r\u000c]+/,
      J = /[,]+$/,
      G = /^\d+$/,
      X = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
      K = function(e, t, n, i) {
        e.addEventListener ? e.addEventListener(t, n, i || !1) : e.attachEvent && e.attachEvent("on" + t, n)
      },
      Y = function(e) {
        var t = {};
        return function(n) {
          return n in t || (t[n] = e(n)), t[n]
        }
      },
      Q = function() {
        var e = /^([\d\.]+)(em|vw|px)$/,
          t = function() {
            for (var e = arguments, t = 0, n = e[0]; ++t in e;) n = n.replace(e[t], e[++t]);
            return n
          },
          n = Y(function(e) {
            return "return " + t((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
          });
        return function(t, i) {
          var r;
          if (!(t in D))
            if (D[t] = !1, i && (r = t.match(e))) D[t] = r[1] * B[r[2]];
            else try {
              D[t] = new Function("e", n(t))(B)
            } catch (e) {}
          return D[t]
        }
      }(),
      Z = function(e, t) {
        return e.w ? (e.cWidth = b.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e
      },
      ee = function(e) {
        if (w) {
          var t, n, i, r = e || {};
          if (r.elements && 1 === r.elements.nodeType && ("IMG" === r.elements.nodeName.toUpperCase() ? r.elements = [r.elements] : (r.context = r.elements, r.elements = null)), t = r.elements || b.qsa(r.context || s, r.reevaluate || r.reselect ? b.sel : b.selShort), i = t.length) {
            for (b.setupRun(r), $ = !0, n = 0; n < i; n++) b.fillImg(t[n], r);
            b.teardownRun(r)
          }
        }
      };
    r.console && console.warn, M in k || (M = "src"), j["image/jpeg"] = !0, j["image/gif"] = !0, j["image/png"] = !0, j["image/svg+xml"] = s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), b.ns = ("pf" + (new Date).getTime()).substr(0, 9), b.supSrcset = "srcset" in k, b.supSizes = "sizes" in k, b.supPicture = !!r.HTMLPictureElement, b.supSrcset && b.supPicture && !b.supSizes && function(e) {
      k.srcset = "data:,a", e.src = "data:,a", b.supSrcset = k.complete === e.complete, b.supPicture = b.supSrcset && b.supPicture
    }(s.createElement("img")), b.supSrcset && !b.supSizes ? function() {
      var e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        t = s.createElement("img"),
        n = function() {
          2 === t.width && (b.supSizes = !0), _ = b.supSrcset && !b.supSizes, w = !0, setTimeout(ee)
        };
      t.onload = n, t.onerror = n, t.setAttribute("sizes", "9px"), t.srcset = e + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", t.src = e
    }() : w = !0, b.selShort = "picture>img,img[srcset]", b.sel = b.selShort, b.cfg = O, b.DPR = F || 1, b.u = B, b.types = j, b.setSize = x, b.makeUrl = Y(function(e) {
      return U.href = e, U.href
    }), b.qsa = function(e, t) {
      return "querySelector" in e ? e.querySelectorAll(t) : []
    }, b.matchesMedia = function() {
      return r.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? b.matchesMedia = function(e) {
        return !e || matchMedia(e).matches
      } : b.matchesMedia = b.mMQ, b.matchesMedia.apply(this, arguments)
    }, b.mMQ = function(e) {
      return !e || Q(e)
    }, b.calcLength = function(e) {
      var t = Q(e, !0) || !1;
      return t < 0 && (t = !1), t
    }, b.supportsType = function(e) {
      return !e || j[e]
    }, b.parseSize = Y(function(e) {
      var t = (e || "").match(P);
      return {
        media: t && t[1],
        length: t && t[2]
      }
    }), b.parseSet = function(e) {
      return e.cands || (e.cands = m(e.srcset, e)), e.cands
    }, b.getEmValue = function() {
      var e;
      if (!g && (e = s.body)) {
        var t = s.createElement("div"),
          n = S.style.cssText,
          i = e.style.cssText;
        t.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", S.style.cssText = q, e.style.cssText = q, e.appendChild(t), g = t.offsetWidth, e.removeChild(t), g = parseFloat(g, 10), S.style.cssText = n, e.style.cssText = i
      }
      return g || 16
    }, b.calcListLength = function(e) {
      if (!(e in H) || O.uT) {
        var t = b.calcLength(v(e));
        H[e] = t || B.width
      }
      return H[e]
    }, b.setRes = function(e) {
      var t;
      if (e) {
        t = b.parseSet(e);
        for (var n = 0, i = t.length; n < i; n++) Z(t[n], e.sizes)
      }
      return t
    }, b.setRes.res = Z, b.applySetCandidate = function(e, t) {
      if (e.length) {
        var n, i, r, s, o, a, l, u, f, p = t[b.ns],
          m = b.DPR;
        if (a = p.curSrc || t[M], l = p.curCan || h(t, a, e[0].set), l && l.set === e[0].set && ((f = L && !t.complete && l.res - .1 > m) || (l.cached = !0, l.res >= m && (o = l))), !o)
          for (e.sort(d), s = e.length, o = e[s - 1], i = 0; i < s; i++)
            if (n = e[i], n.res >= m) {
              r = i - 1, o = e[r] && (f || a !== b.makeUrl(n.url)) && c(e[r].res, n.res, m, e[r].cached) ? e[r] : n;
              break
            }
        o && (u = b.makeUrl(o.url), p.curSrc = u, p.curCan = o, u !== a && b.setSrc(t, o), b.setSize(t))
      }
    }, b.setSrc = function(e, t) {
      var n;
      e.src = t.url, "image/svg+xml" === t.set.type && (n = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = n))
    }, b.getSet = function(e) {
      var t, n, i, r = !1,
        s = e[b.ns].sets;
      for (t = 0; t < s.length && !r; t++)
        if (n = s[t], n.srcset && b.matchesMedia(n.media) && (i = b.supportsType(n.type))) {
          "pending" === i && (n = i), r = n;
          break
        }
      return r
    }, b.parseSets = function(e, t, n) {
      var i, r, s, o, a = t && "PICTURE" === t.nodeName.toUpperCase(),
        l = e[b.ns];
      (void 0 === l.src || n.src) && (l.src = C.call(e, "src"), l.src ? T.call(e, "data-pfsrc", l.src) : E.call(e, "data-pfsrc")), (void 0 === l.srcset || n.srcset || !b.supSrcset || e.srcset) && (i = C.call(e, "srcset"), l.srcset = i, o = !0), l.sets = [], a && (l.pic = !0, p(t, l.sets)), l.srcset ? (r = {
        srcset: l.srcset,
        sizes: C.call(e, "sizes")
      }, l.sets.push(r), (s = (_ || l.src) && I.test(l.srcset || "")) || !l.src || f(l.src, r) || r.has1x || (r.srcset += ", " + l.src, r.cands.push({
        url: l.src,
        d: 1,
        set: r
      }))) : l.src && l.sets.push({
        srcset: l.src,
        sizes: null
      }), l.curCan = null, l.curSrc = void 0, l.supported = !(a || r && !b.supSrcset || s && !b.supSizes), o && b.supSrcset && !l.supported && (i ? (T.call(e, "data-pfsrcset", i), e.srcset = "") : E.call(e, "data-pfsrcset")), l.supported && !l.srcset && (!l.src && e.src || e.src !== b.makeUrl(l.src)) && (null === l.src ? e.removeAttribute("src") : e.src = l.src), l.parsed = !0
    }, b.fillImg = function(e, t) {
      var n, i = t.reselect || t.reevaluate;
      e[b.ns] || (e[b.ns] = {}), n = e[b.ns], (i || n.evaled !== y) && (n.parsed && !t.reevaluate || b.parseSets(e, e.parentNode, t), n.supported ? n.evaled = y : u(e))
    }, b.setupRun = function() {
      $ && !R && F === r.devicePixelRatio || l()
    }, b.supPicture ? (ee = x, b.fillImg = x) : function() {
      var e, t = r.attachEvent ? /d$|^c/ : /d$|^c|^i/,
        n = function() {
          var r = s.readyState || "";
          i = setTimeout(n, "loading" === r ? 200 : 999), s.body && (b.fillImgs(), (e = e || t.test(r)) && clearTimeout(i))
        },
        i = setTimeout(n, s.body ? 9 : 99),
        o = S.clientHeight,
        a = function() {
          R = Math.max(r.innerWidth || 0, S.clientWidth) !== B.width || S.clientHeight !== o, o = S.clientHeight, R && b.fillImgs()
        };
      K(r, "resize", function(e, t) {
        var n, i, r = function() {
          var s = new Date - i;
          s < t ? n = setTimeout(r, t - s) : (n = null, e())
        };
        return function() {
          i = new Date, n || (n = setTimeout(r, t))
        }
      }(a, 99)), K(s, "readystatechange", n)
    }(), b.picturefill = ee, b.fillImgs = ee, b.teardownRun = x, ee._ = b, r.picturefillCFG = {
      pf: b,
      push: function(e) {
        var t = e.shift();
        "function" == typeof b[t] ? b[t].apply(b, e) : (O[t] = e[0], $ && b.fillImgs({
          reselect: !0
        }))
      }
    };
    for (; N && N.length;) r.picturefillCFG.push(N.shift());
    r.picturefill = ee, "object" == typeof e && "object" == typeof e.exports ? e.exports = ee : void 0 !== (i = function() {
      return ee
    }.call(t, n, t, e)) && (e.exports = i), b.supPicture || (j["image/webp"] = function(e, t) {
      var n = new r.Image;
      return n.onerror = function() {
        j[e] = !1, ee()
      }, n.onload = function() {
        j[e] = 1 === n.width, ee()
      }, n.src = t, "pending"
    }("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
  }(window, document)
}]);
