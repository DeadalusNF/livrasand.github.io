this.PrimaryPane = function(t) {
	var r = {};

	function e(o) {
		if (r[o]) return r[o].exports;
		var i = r[o] = {
			i: o,
			l: !1,
			exports: {}
		};
		return t[o].call(i.exports, i, i.exports, e), i.l = !0, i.exports
	}
	return e.m = t, e.c = r, e.d = function(t, r, o) {
		e.o(t, r) || Object.defineProperty(t, r, {
			enumerable: !0,
			get: o
		})
	}, e.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, e.t = function(t, r) {
		if (1 & r && (t = e(t)), 8 & r) return t;
		if (4 & r && "object" == typeof t && t && t.__esModule) return t;
		var o = Object.create(null);
		if (e.r(o), Object.defineProperty(o, "default", {
				enumerable: !0,
				value: t
			}), 2 & r && "string" != typeof t)
			for (var i in t) e.d(o, i, function(r) {
				return t[r]
			}.bind(null, i));
		return o
	}, e.n = function(t) {
		var r = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return e.d(r, "a", r), r
	}, e.o = function(t, r) {
		return Object.prototype.hasOwnProperty.call(t, r)
	}, e.p = "", e(e.s = 536)
}([function(t, r, e) {
	"use strict";
	t.exports = function(t, r) {
		return r || (r = {}), "string" != typeof(t = t && t.__esModule ? t.default : t) ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), r.hash && (t += r.hash), /["'() \t\n]/.test(t) || r.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t)
	}
}, function(t, r, e) {
	"use strict";

	function o(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}
	e.d(r, "a", (function() {
		return o
	}))
}, function(t, r, e) {
	"use strict";
	t.exports = e(325)
}, function(t, r, e) {
	"use strict";

	function o(t, r, e) {
		return r in t ? Object.defineProperty(t, r, {
			value: e,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[r] = e, t
	}
	e.d(r, "a", (function() {
		return o
	}))
}, function(t, r, e) {
	"use strict";
	e.d(r, "a", (function() {
		return s
	})), e.d(r, "b", (function() {
		return O
	})), e.d(r, "c", (function() {
		return x
	})), e.d(r, "d", (function() {
		return y
	}));
	var o = e(359),
		i = e.n(o),
		a = e(2),
		n = e(296);

	function l(t, r, e) {
		var o = "";
		return e.split(" ").forEach((function(e) {
			void 0 !== t[e] ? r.push(t[e]) : o += e + " "
		})), o
	}
	var c = function(t, r, e) {
			var o = t.key + "-" + r.name;
			if (!1 === e && void 0 === t.registered[o] && (t.registered[o] = r.styles), void 0 === t.inserted[r.name]) {
				var i = r;
				do {
					t.insert("." + o, i, t.sheet, !0);
					i = i.next
				} while (void 0 !== i)
			}
		},
		d = e(72),
		m = e(294),
		p = e(44),
		u = Object(a.createContext)(Object(n.a)()),
		g = Object(a.createContext)({}),
		s = u.Provider,
		b = function(t) {
			return Object(a.forwardRef)((function(r, e) {
				return Object(a.createElement)(u.Consumer, null, (function(o) {
					return t(r, o, e)
				}))
			}))
		},
		w = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
		f = Object.prototype.hasOwnProperty,
		h = function(t, r, e, o) {
			var i = r[w],
				n = [],
				m = "",
				p = null === e ? r.css : r.css(e);
			"string" == typeof p && void 0 !== t.registered[p] && (p = t.registered[p]), n.push(p), void 0 !== r.className && (m = l(t.registered, n, r.className));
			var u = Object(d.a)(n);
			c(t, u, "string" == typeof i);
			m += t.key + "-" + u.name;
			var g = {};
			for (var s in r) f.call(r, s) && "css" !== s && s !== w && (g[s] = r[s]);
			return g.ref = o, g.className = m, Object(a.createElement)(i, g)
		},
		j = b((function(t, r, e) {
			return "function" == typeof t.css ? Object(a.createElement)(g.Consumer, null, (function(o) {
				return h(r, t, o, e)
			})) : h(r, t, null, e)
		}));
	var x = function(t, r) {
			var e = arguments;
			if (null == r || null == r.css) return a.createElement.apply(void 0, e);
			var o = e.length,
				i = new Array(o);
			i[0] = j;
			var n = {};
			for (var l in r) f.call(r, l) && (n[l] = r[l]);
			n[w] = t, i[1] = n;
			for (var c = 2; c < o; c++) i[c] = e[c];
			return a.createElement.apply(null, i)
		},
		y = (a.Component, function() {
			var t = p.a.apply(void 0, arguments),
				r = "animation-" + t.name;
			return {
				name: r,
				styles: "@keyframes " + r + "{" + t.styles + "}",
				anim: 1,
				toString: function() {
					return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
				}
			}
		}),
		S = function t(r) {
			for (var e = r.length, o = 0, i = ""; o < e; o++) {
				var a = r[o];
				if (null != a) {
					var n = void 0;
					switch (typeof a) {
						case "boolean":
							break;
						case "object":
							if (Array.isArray(a)) n = t(a);
							else
								for (var l in n = "", a) a[l] && l && (n && (n += " "), n += l);
							break;
						default:
							n = a
					}
					n && (i && (i += " "), i += n)
				}
			}
			return i
		};

	function v(t, r, e) {
		var o = [],
			i = l(t, o, e);
		return o.length < 2 ? e : i + r(o)
	}
	var O = b((function(t, r) {
		return Object(a.createElement)(g.Consumer, null, (function(e) {
			var o = function() {
					for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) e[o] = arguments[o];
					var i = Object(d.a)(e, r.registered);
					return c(r, i, !1), r.key + "-" + i.name
				},
				i = {
					css: o,
					cx: function() {
						for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
						return v(r.registered, o, S(e))
					},
					theme: e
				},
				a = t.children(i);
			return !0, a
		}))
	}))
}, function(t, r, e) {
	"use strict";

	function o() {
		return (o = Object.assign || function(t) {
			for (var r = 1; r < arguments.length; r++) {
				var e = arguments[r];
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			}
			return t
		}).apply(this, arguments)
	}
	e.d(r, "a", (function() {
		return o
	}))
}, function(t, r, e) {
	(function(r) {
		var e = function(t) {
			return t && t.Math == Math && t
		};
		t.exports = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof r && r) || Function("return this")()
	}).call(this, e(67))
}, function(t, r, e) {
	"use strict";
	e.d(r, "a", (function() {
		return C
	})), e.d(r, "b", (function() {
		return G
	})), e.d(r, "c", (function() {
		return ot
	})), e.d(r, "d", (function() {
		return X
	})), e.d(r, "e", (function() {
		return J
	})), e.d(r, "f", (function() {
		return at
	})), e.d(r, "g", (function() {
		return Z
	})), e.d(r, "h", (function() {
		return it
	})), e.d(r, "i", (function() {
		return nt
	})), e.d(r, "j", (function() {
		return W
	})), e.d(r, "k", (function() {
		return N
	})), e.d(r, "l", (function() {
		return A
	})), e.d(r, "m", (function() {
		return tt
	})), e.d(r, "n", (function() {
		return E
	})), e.d(r, "o", (function() {
		return M
	})), e.d(r, "p", (function() {
		return ct
	})), e.d(r, "q", (function() {
		return dt
	})), e.d(r, "r", (function() {
		return mt
	})), e.d(r, "s", (function() {
		return I
	})), e.d(r, "t", (function() {
		return wt
	})), e.d(r, "u", (function() {
		return ft
	})), e.d(r, "v", (function() {
		return ht
	})), e.d(r, "w", (function() {
		return B
	})), e.d(r, "x", (function() {
		return xt
	})), e.d(r, "y", (function() {
		return H
	})), e.d(r, "z", (function() {
		return jt
	}));
	var o = e(36),
		i = e(5),
		a = e(27),
		n = e(16),
		l = e(17),
		c = e(18),
		d = e(19),
		m = e(20),
		p = e(1),
		u = e(3),
		g = e(2),
		s = e(4),
		b = e(26),
		w = e(46),
		f = e.n(w),
		h = e(49),
		j = e(12),
		x = e(44),
		y = e(178),
		S = e(179),
		v = e.n(S);

	function O(t) {
		var r = t.maxHeight,
			e = t.menuEl,
			o = t.minHeight,
			i = t.placement,
			a = t.shouldScroll,
			n = t.isFixedPosition,
			l = t.theme.spacing,
			c = Object(j.a)(e),
			d = {
				placement: "bottom",
				maxHeight: r
			};
		if (!e || !e.offsetParent) return d;
		var m = c.getBoundingClientRect().height,
			p = e.getBoundingClientRect(),
			u = p.bottom,
			g = p.height,
			s = p.top,
			b = e.offsetParent.getBoundingClientRect().top,
			w = window.innerHeight,
			f = Object(j.b)(c),
			h = parseInt(getComputedStyle(e).marginBottom, 10),
			x = parseInt(getComputedStyle(e).marginTop, 10),
			y = b - x,
			S = w - s,
			v = y + f,
			O = m - f - s,
			k = u - w + f + h,
			E = f + s - x;
		switch (i) {
			case "auto":
			case "bottom":
				if (S >= g) return {
					placement: "bottom",
					maxHeight: r
				};
				if (O >= g && !n) return a && Object(j.c)(c, k, 160), {
					placement: "bottom",
					maxHeight: r
				};
				if (!n && O >= o || n && S >= o) return a && Object(j.c)(c, k, 160), {
					placement: "bottom",
					maxHeight: n ? S - h : O - h
				};
				if ("auto" === i || n) {
					var C = r,
						A = n ? y : v;
					return A >= o && (C = Math.min(A - h - l.controlHeight, r)), {
						placement: "top",
						maxHeight: C
					}
				}
				if ("bottom" === i) return Object(j.l)(c, k), {
					placement: "bottom",
					maxHeight: r
				};
				break;
			case "top":
				if (y >= g) return {
					placement: "top",
					maxHeight: r
				};
				if (v >= g && !n) return a && Object(j.c)(c, E, 160), {
					placement: "top",
					maxHeight: r
				};
				if (!n && v >= o || n && y >= o) {
					var T = r;
					return (!n && v >= o || n && y >= o) && (T = n ? y - x : v - x), a && Object(j.c)(c, E, 160), {
						placement: "top",
						maxHeight: T
					}
				}
				return {
					placement: "bottom", maxHeight: r
				};
			default:
				throw new Error('Invalid placement provided "'.concat(i, '".'))
		}
		return d
	}
	var k = function(t) {
			return "auto" === t ? "bottom" : t
		},
		E = function(t) {
			var r, e = t.placement,
				o = t.theme,
				i = o.borderRadius,
				a = o.spacing,
				n = o.colors;
			return r = {
				label: "menu"
			}, Object(u.a)(r, function(t) {
				return t ? {
					bottom: "top",
					top: "bottom"
				} [t] : "bottom"
			}(e), "100%"), Object(u.a)(r, "backgroundColor", n.neutral0), Object(u.a)(r, "borderRadius", i), Object(u.a)(r, "boxShadow", "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"), Object(u.a)(r, "marginBottom", a.menuGutter), Object(u.a)(r, "marginTop", a.menuGutter), Object(u.a)(r, "position", "absolute"), Object(u.a)(r, "width", "100%"), Object(u.a)(r, "zIndex", 1), r
		},
		C = function(t) {
			function r() {
				var t, e;
				Object(n.a)(this, r);
				for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
				return e = Object(c.a)(this, (t = Object(d.a)(r)).call.apply(t, [this].concat(i))), Object(u.a)(Object(p.a)(Object(p.a)(e)), "state", {
					maxHeight: e.props.maxMenuHeight,
					placement: null
				}), Object(u.a)(Object(p.a)(Object(p.a)(e)), "getPlacement", (function(t) {
					var r = e.props,
						o = r.minMenuHeight,
						i = r.maxMenuHeight,
						a = r.menuPlacement,
						n = r.menuPosition,
						l = r.menuShouldScrollIntoView,
						c = r.theme,
						d = e.context.getPortalPlacement;
					if (t) {
						var m = "fixed" === n,
							p = O({
								maxHeight: i,
								menuEl: t,
								minHeight: o,
								placement: a,
								shouldScroll: l && !m,
								isFixedPosition: m,
								theme: c
							});
						d && d(p), e.setState(p)
					}
				})), Object(u.a)(Object(p.a)(Object(p.a)(e)), "getUpdatedProps", (function() {
					var t = e.props.menuPlacement,
						r = e.state.placement || k(t);
					return Object(a.a)({}, e.props, {
						placement: r,
						maxHeight: e.state.maxHeight
					})
				})), e
			}
			return Object(m.a)(r, t), Object(l.a)(r, [{
				key: "render",
				value: function() {
					return (0, this.props.children)({
						ref: this.getPlacement,
						placerProps: this.getUpdatedProps()
					})
				}
			}]), r
		}(g.Component);
	Object(u.a)(C, "contextTypes", {
		getPortalPlacement: f.a.func
	});
	var A = function(t) {
			var r = t.maxHeight,
				e = t.theme.spacing.baseUnit;
			return {
				maxHeight: r,
				overflowY: "auto",
				paddingBottom: e,
				paddingTop: e,
				position: "relative",
				WebkitOverflowScrolling: "touch"
			}
		},
		T = function(t) {
			var r = t.theme,
				e = r.spacing.baseUnit;
			return {
				color: r.colors.neutral40,
				padding: "".concat(2 * e, "px ").concat(3 * e, "px"),
				textAlign: "center"
			}
		},
		I = T,
		N = T,
		_ = function(t) {
			var r = t.children,
				e = t.className,
				o = t.cx,
				a = t.getStyles,
				n = t.innerProps;
			return Object(s.c)("div", Object(i.a)({
				css: a("noOptionsMessage", t),
				className: o({
					"menu-notice": !0,
					"menu-notice--no-options": !0
				}, e)
			}, n), r)
		};
	_.defaultProps = {
		children: "No options"
	};
	var R = function(t) {
		var r = t.children,
			e = t.className,
			o = t.cx,
			a = t.getStyles,
			n = t.innerProps;
		return Object(s.c)("div", Object(i.a)({
			css: a("loadingMessage", t),
			className: o({
				"menu-notice": !0,
				"menu-notice--loading": !0
			}, e)
		}, n), r)
	};
	R.defaultProps = {
		children: "Loading..."
	};
	var M = function(t) {
			var r = t.rect,
				e = t.offset,
				o = t.position;
			return {
				left: r.left,
				position: o,
				top: e,
				width: r.width,
				zIndex: 1
			}
		},
		L = function(t) {
			function r() {
				var t, e;
				Object(n.a)(this, r);
				for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
				return e = Object(c.a)(this, (t = Object(d.a)(r)).call.apply(t, [this].concat(i))), Object(u.a)(Object(p.a)(Object(p.a)(e)), "state", {
					placement: null
				}), Object(u.a)(Object(p.a)(Object(p.a)(e)), "getPortalPlacement", (function(t) {
					var r = t.placement;
					r !== k(e.props.menuPlacement) && e.setState({
						placement: r
					})
				})), e
			}
			return Object(m.a)(r, t), Object(l.a)(r, [{
				key: "getChildContext",
				value: function() {
					return {
						getPortalPlacement: this.getPortalPlacement
					}
				}
			}, {
				key: "render",
				value: function() {
					var t = this.props,
						r = t.appendTo,
						e = t.children,
						o = t.controlElement,
						i = t.menuPlacement,
						a = t.menuPosition,
						n = t.getStyles,
						l = "fixed" === a;
					if (!r && !l || !o) return null;
					var c = this.state.placement || k(i),
						d = Object(j.g)(o),
						m = l ? 0 : window.pageYOffset,
						p = {
							offset: d[c] + m,
							position: a,
							rect: d
						},
						u = Object(s.c)("div", {
							css: n("menuPortal", p)
						}, e);
					return r ? Object(b.createPortal)(u, r) : u
				}
			}]), r
		}(g.Component);
	Object(u.a)(L, "childContextTypes", {
		getPortalPlacement: f.a.func
	});
	var D = Array.isArray,
		P = Object.keys,
		z = Object.prototype.hasOwnProperty;

	function H(t, r) {
		try {
			return function t(r, e) {
				if (r === e) return !0;
				if (r && e && "object" == Object(h.a)(r) && "object" == Object(h.a)(e)) {
					var o, i, a, n = D(r),
						l = D(e);
					if (n && l) {
						if ((i = r.length) != e.length) return !1;
						for (o = i; 0 != o--;)
							if (!t(r[o], e[o])) return !1;
						return !0
					}
					if (n != l) return !1;
					var c = r instanceof Date,
						d = e instanceof Date;
					if (c != d) return !1;
					if (c && d) return r.getTime() == e.getTime();
					var m = r instanceof RegExp,
						p = e instanceof RegExp;
					if (m != p) return !1;
					if (m && p) return r.toString() == e.toString();
					var u = P(r);
					if ((i = u.length) !== P(e).length) return !1;
					for (o = i; 0 != o--;)
						if (!z.call(e, u[o])) return !1;
					for (o = i; 0 != o--;)
						if (!("_owner" === (a = u[o]) && r.$$typeof || t(r[a], e[a]))) return !1;
					return !0
				}
				return r != r && e != e
			}(t, r)
		} catch (t) {
			if (t.message && t.message.match(/stack|recursion/i)) return console.warn("Warning: react-fast-compare does not handle circular references.", t.name, t.message), !1;
			throw t
		}
	}
	var G = function(t) {
			var r = t.isDisabled;
			return {
				label: "container",
				direction: t.isRtl ? "rtl" : null,
				pointerEvents: r ? "none" : null,
				position: "relative"
			}
		},
		B = function(t) {
			var r = t.theme.spacing;
			return {
				alignItems: "center",
				display: "flex",
				flex: 1,
				flexWrap: "wrap",
				padding: "".concat(r.baseUnit / 2, "px ").concat(2 * r.baseUnit, "px"),
				WebkitOverflowScrolling: "touch",
				position: "relative",
				overflow: "hidden"
			}
		},
		U = function(t) {
			function r() {
				return Object(n.a)(this, r), Object(c.a)(this, Object(d.a)(r).apply(this, arguments))
			}
			return Object(m.a)(r, t), Object(l.a)(r, [{
				key: "render",
				value: function() {
					var t = this.props,
						r = t.children,
						e = t.className,
						o = t.cx,
						i = t.isMulti,
						a = t.getStyles,
						n = t.hasValue;
					return Object(s.c)("div", {
						css: a("valueContainer", this.props),
						className: o({
							"value-container": !0,
							"value-container--is-multi": i,
							"value-container--has-value": n
						}, e)
					}, r)
				}
			}]), r
		}(g.Component),
		W = function() {
			return {
				alignItems: "center",
				alignSelf: "stretch",
				display: "flex",
				flexShrink: 0
			}
		};

	function F() {
		var t = Object(y.a)(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"]);
		return F = function() {
			return t
		}, t
	}
	var V = {
			name: "19bqh2r",
			styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;"
		},
		K = function(t) {
			var r = t.size,
				e = Object(o.a)(t, ["size"]);
			return Object(s.c)("svg", Object(i.a)({
				height: r,
				width: r,
				viewBox: "0 0 20 20",
				"aria-hidden": "true",
				focusable: "false",
				css: V
			}, e))
		},
		Y = function(t) {
			return Object(s.c)(K, Object(i.a)({
				size: 20
			}, t), Object(s.c)("path", {
				d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
			}))
		},
		q = function(t) {
			return Object(s.c)(K, Object(i.a)({
				size: 20
			}, t), Object(s.c)("path", {
				d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
			}))
		},
		Q = function(t) {
			var r = t.isFocused,
				e = t.theme,
				o = e.spacing.baseUnit,
				i = e.colors;
			return {
				label: "indicatorContainer",
				color: r ? i.neutral60 : i.neutral20,
				display: "flex",
				padding: 2 * o,
				transition: "color 150ms",
				":hover": {
					color: r ? i.neutral80 : i.neutral40
				}
			}
		},
		J = Q,
		X = Q,
		Z = function(t) {
			var r = t.isDisabled,
				e = t.theme,
				o = e.spacing.baseUnit,
				i = e.colors;
			return {
				label: "indicatorSeparator",
				alignSelf: "stretch",
				backgroundColor: r ? i.neutral10 : i.neutral20,
				marginBottom: 2 * o,
				marginTop: 2 * o,
				width: 1
			}
		},
		$ = Object(s.d)(F()),
		tt = function(t) {
			var r = t.isFocused,
				e = t.size,
				o = t.theme,
				i = o.colors,
				a = o.spacing.baseUnit;
			return {
				label: "loadingIndicator",
				color: r ? i.neutral60 : i.neutral20,
				display: "flex",
				padding: 2 * a,
				transition: "color 150ms",
				alignSelf: "center",
				fontSize: e,
				lineHeight: 1,
				marginRight: e,
				textAlign: "center",
				verticalAlign: "middle"
			}
		},
		rt = function(t) {
			var r = t.color,
				e = t.delay,
				o = t.offset;
			return Object(s.c)("span", {
				css: Object(x.a)({
					animation: "".concat($, " 1s ease-in-out ").concat(e, "ms infinite;"),
					backgroundColor: r,
					borderRadius: "1em;",
					display: "inline-block;",
					marginLeft: o ? "1em;" : null,
					height: "1em;",
					verticalAlign: "top;",
					width: "1em;"
				}, "")
			})
		},
		et = function(t) {
			var r = t.className,
				e = t.cx,
				o = t.getStyles,
				a = t.innerProps,
				n = t.isFocused,
				l = t.isRtl,
				c = t.theme.colors,
				d = n ? c.neutral80 : c.neutral20;
			return Object(s.c)("div", Object(i.a)({}, a, {
				css: o("loadingIndicator", t),
				className: e({
					indicator: !0,
					"loading-indicator": !0
				}, r)
			}), Object(s.c)(rt, {
				color: d,
				delay: 0,
				offset: l
			}), Object(s.c)(rt, {
				color: d,
				delay: 160,
				offset: !0
			}), Object(s.c)(rt, {
				color: d,
				delay: 320,
				offset: !l
			}))
		};
	et.defaultProps = {
		size: 4
	};
	var ot = function(t) {
			var r = t.isDisabled,
				e = t.isFocused,
				o = t.theme,
				i = o.colors,
				a = o.borderRadius,
				n = o.spacing;
			return {
				label: "control",
				alignItems: "center",
				backgroundColor: r ? i.neutral5 : i.neutral0,
				borderColor: r ? i.neutral10 : e ? i.primary : i.neutral20,
				borderRadius: a,
				borderStyle: "solid",
				borderWidth: 1,
				boxShadow: e ? "0 0 0 1px ".concat(i.primary) : null,
				cursor: "default",
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "space-between",
				minHeight: n.controlHeight,
				outline: "0 !important",
				position: "relative",
				transition: "all 100ms",
				"&:hover": {
					borderColor: e ? i.primary : i.neutral30
				}
			}
		},
		it = function(t) {
			var r = t.theme.spacing;
			return {
				paddingBottom: 2 * r.baseUnit,
				paddingTop: 2 * r.baseUnit
			}
		},
		at = function(t) {
			var r = t.theme.spacing;
			return {
				label: "group",
				color: "#999",
				cursor: "default",
				display: "block",
				fontSize: "75%",
				fontWeight: "500",
				marginBottom: "0.25em",
				paddingLeft: 3 * r.baseUnit,
				paddingRight: 3 * r.baseUnit,
				textTransform: "uppercase"
			}
		},
		nt = function(t) {
			var r = t.isDisabled,
				e = t.theme,
				o = e.spacing,
				i = e.colors;
			return {
				margin: o.baseUnit / 2,
				paddingBottom: o.baseUnit / 2,
				paddingTop: o.baseUnit / 2,
				visibility: r ? "hidden" : "visible",
				color: i.neutral80
			}
		},
		lt = function(t) {
			return {
				label: "input",
				background: 0,
				border: 0,
				fontSize: "inherit",
				opacity: t ? 0 : 1,
				outline: 0,
				padding: 0,
				color: "inherit"
			}
		},
		ct = function(t) {
			var r = t.theme,
				e = r.spacing,
				o = r.borderRadius;
			return {
				label: "multiValue",
				backgroundColor: r.colors.neutral10,
				borderRadius: o / 2,
				display: "flex",
				margin: e.baseUnit / 2,
				minWidth: 0
			}
		},
		dt = function(t) {
			var r = t.theme,
				e = r.borderRadius,
				o = r.colors,
				i = t.cropWithEllipsis;
			return {
				borderRadius: e / 2,
				color: o.neutral80,
				fontSize: "85%",
				overflow: "hidden",
				padding: 3,
				paddingLeft: 6,
				textOverflow: i ? "ellipsis" : null,
				whiteSpace: "nowrap"
			}
		},
		mt = function(t) {
			var r = t.theme,
				e = r.spacing,
				o = r.borderRadius,
				i = r.colors;
			return {
				alignItems: "center",
				borderRadius: o / 2,
				backgroundColor: t.isFocused && i.dangerLight,
				display: "flex",
				paddingLeft: e.baseUnit,
				paddingRight: e.baseUnit,
				":hover": {
					backgroundColor: i.dangerLight,
					color: i.danger
				}
			}
		},
		pt = function(t) {
			var r = t.children,
				e = t.innerProps;
			return Object(s.c)("div", e, r)
		},
		ut = pt,
		gt = pt,
		st = function(t) {
			function r() {
				return Object(n.a)(this, r), Object(c.a)(this, Object(d.a)(r).apply(this, arguments))
			}
			return Object(m.a)(r, t), Object(l.a)(r, [{
				key: "render",
				value: function() {
					var t = this.props,
						r = t.children,
						e = t.innerProps;
					return Object(s.c)("div", e, r || Object(s.c)(Y, {
						size: 14
					}))
				}
			}]), r
		}(g.Component),
		bt = function(t) {
			function r() {
				return Object(n.a)(this, r), Object(c.a)(this, Object(d.a)(r).apply(this, arguments))
			}
			return Object(m.a)(r, t), Object(l.a)(r, [{
				key: "render",
				value: function() {
					var t = this,
						r = this.props,
						e = r.children,
						o = r.className,
						i = r.components,
						n = r.cx,
						l = r.data,
						c = r.getStyles,
						d = r.innerProps,
						m = r.isDisabled,
						p = r.removeProps,
						u = r.selectProps,
						g = i.Container,
						b = i.Label,
						w = i.Remove;
					return Object(s.c)(s.b, null, (function(r) {
						var i = r.css,
							f = r.cx;
						return Object(s.c)(g, {
							data: l,
							innerProps: Object(a.a)({}, d, {
								className: f(i(c("multiValue", t.props)), n({
									"multi-value": !0,
									"multi-value--is-disabled": m
								}, o))
							}),
							selectProps: u
						}, Object(s.c)(b, {
							data: l,
							innerProps: {
								className: f(i(c("multiValueLabel", t.props)), n({
									"multi-value__label": !0
								}, o))
							},
							selectProps: u
						}, e), Object(s.c)(w, {
							data: l,
							innerProps: Object(a.a)({
								className: f(i(c("multiValueRemove", t.props)), n({
									"multi-value__remove": !0
								}, o))
							}, p),
							selectProps: u
						}))
					}))
				}
			}]), r
		}(g.Component);
	Object(u.a)(bt, "defaultProps", {
		cropWithEllipsis: !0
	});
	var wt = function(t) {
			var r = t.isDisabled,
				e = t.isFocused,
				o = t.isSelected,
				i = t.theme,
				a = i.spacing,
				n = i.colors;
			return {
				label: "option",
				backgroundColor: o ? n.primary : e ? n.primary25 : "transparent",
				color: r ? n.neutral20 : o ? n.neutral0 : "inherit",
				cursor: "default",
				display: "block",
				fontSize: "inherit",
				padding: "".concat(2 * a.baseUnit, "px ").concat(3 * a.baseUnit, "px"),
				width: "100%",
				userSelect: "none",
				WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
				":active": {
					backgroundColor: !r && (o ? n.primary : n.primary50)
				}
			}
		},
		ft = function(t) {
			var r = t.theme,
				e = r.spacing;
			return {
				label: "placeholder",
				color: r.colors.neutral50,
				marginLeft: e.baseUnit / 2,
				marginRight: e.baseUnit / 2,
				position: "absolute",
				top: "50%",
				transform: "translateY(-50%)"
			}
		},
		ht = function(t) {
			var r = t.isDisabled,
				e = t.theme,
				o = e.spacing,
				i = e.colors;
			return {
				label: "singleValue",
				color: r ? i.neutral40 : i.neutral80,
				marginLeft: o.baseUnit / 2,
				marginRight: o.baseUnit / 2,
				maxWidth: "calc(100% - ".concat(2 * o.baseUnit, "px)"),
				overflow: "hidden",
				position: "absolute",
				textOverflow: "ellipsis",
				whiteSpace: "nowrap",
				top: "50%",
				transform: "translateY(-50%)"
			}
		},
		jt = {
			ClearIndicator: function(t) {
				var r = t.children,
					e = t.className,
					o = t.cx,
					a = t.getStyles,
					n = t.innerProps;
				return Object(s.c)("div", Object(i.a)({}, n, {
					css: a("clearIndicator", t),
					className: o({
						indicator: !0,
						"clear-indicator": !0
					}, e)
				}), r || Object(s.c)(Y, null))
			},
			Control: function(t) {
				var r = t.children,
					e = t.cx,
					o = t.getStyles,
					a = t.className,
					n = t.isDisabled,
					l = t.isFocused,
					c = t.innerRef,
					d = t.innerProps,
					m = t.menuIsOpen;
				return Object(s.c)("div", Object(i.a)({
					ref: c,
					css: o("control", t),
					className: e({
						control: !0,
						"control--is-disabled": n,
						"control--is-focused": l,
						"control--menu-is-open": m
					}, a)
				}, d), r)
			},
			DropdownIndicator: function(t) {
				var r = t.children,
					e = t.className,
					o = t.cx,
					a = t.getStyles,
					n = t.innerProps;
				return Object(s.c)("div", Object(i.a)({}, n, {
					css: a("dropdownIndicator", t),
					className: o({
						indicator: !0,
						"dropdown-indicator": !0
					}, e)
				}), r || Object(s.c)(q, null))
			},
			DownChevron: q,
			CrossIcon: Y,
			Group: function(t) {
				var r = t.children,
					e = t.className,
					o = t.cx,
					a = t.getStyles,
					n = t.Heading,
					l = t.headingProps,
					c = t.label,
					d = t.theme,
					m = t.selectProps;
				return Object(s.c)("div", {
					css: a("group", t),
					className: o({
						group: !0
					}, e)
				}, Object(s.c)(n, Object(i.a)({}, l, {
					selectProps: m,
					theme: d,
					getStyles: a,
					cx: o
				}), c), Object(s.c)("div", null, r))
			},
			GroupHeading: function(t) {
				var r = t.className,
					e = t.cx,
					n = t.getStyles,
					l = t.theme,
					c = (t.selectProps, Object(o.a)(t, ["className", "cx", "getStyles", "theme", "selectProps"]));
				return Object(s.c)("div", Object(i.a)({
					css: n("groupHeading", Object(a.a)({
						theme: l
					}, c)),
					className: e({
						"group-heading": !0
					}, r)
				}, c))
			},
			IndicatorsContainer: function(t) {
				var r = t.children,
					e = t.className,
					o = t.cx,
					i = t.getStyles;
				return Object(s.c)("div", {
					css: i("indicatorsContainer", t),
					className: o({
						indicators: !0
					}, e)
				}, r)
			},
			IndicatorSeparator: function(t) {
				var r = t.className,
					e = t.cx,
					o = t.getStyles,
					a = t.innerProps;
				return Object(s.c)("span", Object(i.a)({}, a, {
					css: o("indicatorSeparator", t),
					className: e({
						"indicator-separator": !0
					}, r)
				}))
			},
			Input: function(t) {
				var r = t.className,
					e = t.cx,
					n = t.getStyles,
					l = t.innerRef,
					c = t.isHidden,
					d = t.isDisabled,
					m = t.theme,
					p = (t.selectProps, Object(o.a)(t, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]));
				return Object(s.c)("div", {
					css: n("input", Object(a.a)({
						theme: m
					}, p))
				}, Object(s.c)(v.a, Object(i.a)({
					className: e({
						input: !0
					}, r),
					inputRef: l,
					inputStyle: lt(c),
					disabled: d
				}, p)))
			},
			LoadingIndicator: et,
			Menu: function(t) {
				var r = t.children,
					e = t.className,
					o = t.cx,
					a = t.getStyles,
					n = t.innerRef,
					l = t.innerProps;
				return Object(s.c)("div", Object(i.a)({
					css: a("menu", t),
					className: o({
						menu: !0
					}, e)
				}, l, {
					ref: n
				}), r)
			},
			MenuList: function(t) {
				var r = t.children,
					e = t.className,
					o = t.cx,
					i = t.getStyles,
					a = t.isMulti,
					n = t.innerRef;
				return Object(s.c)("div", {
					css: i("menuList", t),
					className: o({
						"menu-list": !0,
						"menu-list--is-multi": a
					}, e),
					ref: n
				}, r)
			},
			MenuPortal: L,
			LoadingMessage: R,
			NoOptionsMessage: _,
			MultiValue: bt,
			MultiValueContainer: ut,
			MultiValueLabel: gt,
			MultiValueRemove: st,
			Option: function(t) {
				var r = t.children,
					e = t.className,
					o = t.cx,
					a = t.getStyles,
					n = t.isDisabled,
					l = t.isFocused,
					c = t.isSelected,
					d = t.innerRef,
					m = t.innerProps;
				return Object(s.c)("div", Object(i.a)({
					css: a("option", t),
					className: o({
						option: !0,
						"option--is-disabled": n,
						"option--is-focused": l,
						"option--is-selected": c
					}, e),
					ref: d
				}, m), r)
			},
			Placeholder: function(t) {
				var r = t.children,
					e = t.className,
					o = t.cx,
					a = t.getStyles,
					n = t.innerProps;
				return Object(s.c)("div", Object(i.a)({
					css: a("placeholder", t),
					className: o({
						placeholder: !0
					}, e)
				}, n), r)
			},
			SelectContainer: function(t) {
				var r = t.children,
					e = t.className,
					o = t.cx,
					a = t.getStyles,
					n = t.innerProps,
					l = t.isDisabled,
					c = t.isRtl;
				return Object(s.c)("div", Object(i.a)({
					css: a("container", t),
					className: o({
						"--is-disabled": l,
						"--is-rtl": c
					}, e)
				}, n), r)
			},
			SingleValue: function(t) {
				var r = t.children,
					e = t.className,
					o = t.cx,
					a = t.getStyles,
					n = t.isDisabled,
					l = t.innerProps;
				return Object(s.c)("div", Object(i.a)({
					css: a("singleValue", t),
					className: o({
						"single-value": !0,
						"single-value--is-disabled": n
					}, e)
				}, l), r)
			},
			ValueContainer: U
		},
		xt = function(t) {
			return Object(a.a)({}, jt, t.components)
		}
}, function(t, r, e) {
	"use strict";
	Object.defineProperty(r, "__esModule", {
			value: !0
		}), r.STUDY_PANE_ANIMATE_NONE = r.STUDY_PANE_ANIMATE_OUT = r.STUDY_PANE_ANIMATE_IN = r.Appearance = r.BlockType = r.HeaderIcon = r.TagItemType = r.UserMarkStyle = r.UserMarkColor = r.ScrollTargetType = r.StudySection = r.ExtractionType = void 0,
		function(t) {
			t[t.BibleCitation = 0] = "BibleCitation", t[t.Extraction = 1] = "Extraction"
		}(r.ExtractionType || (r.ExtractionType = {})),
		function(t) {
			t[t.Gems = 0] = "Gems", t[t.Supplementary = 1] = "Supplementary", t[t.Marginals = 2] = "Marginals"
		}(r.StudySection || (r.StudySection = {})),
		function(t) {
			t[t.Verse = 0] = "Verse", t[t.Paragraph = 1] = "Paragraph", t[t.Footnote = 2] = "Footnote", t[t.Marginal = 3] = "Marginal", t[t.Extraction = 4] = "Extraction", t[t.BibleCitation = 5] = "BibleCitation", t[t.Element = 6] = "Element", t[t.Note = 7] = "Note", t[t.VerseLabel = 8] = "VerseLabel", t[t.ParagraphLabel = 9] = "ParagraphLabel", t[t.Endnote = 10] = "Endnote"
		}(r.ScrollTargetType || (r.ScrollTargetType = {})),
		function(t) {
			t[t.None = 0] = "None", t[t.Yellow = 1] = "Yellow", t[t.Green = 2] = "Green", t[t.Blue = 3] = "Blue", t[t.Pink = 4] = "Pink", t[t.Orange = 5] = "Orange", t[t.Purple = 6] = "Purple"
		}(r.UserMarkColor || (r.UserMarkColor = {})),
		function(t) {
			t[t.Highlight = 0] = "Highlight", t[t.Underline = 1] = "Underline"
		}(r.UserMarkStyle || (r.UserMarkStyle = {})),
		function(t) {
			t[t.Location = 0] = "Location", t[t.Note = 1] = "Note"
		}(r.TagItemType || (r.TagItemType = {})),
		function(t) {
			t[t.None = 0] = "None", t[t.ParallelMarginal = 1] = "ParallelMarginal", t[t.QuotationMarginal = 2] = "QuotationMarginal"
		}(r.HeaderIcon || (r.HeaderIcon = {})),
		function(t) {
			t.Verse = "v", t.Paragraph = "p"
		}(r.BlockType || (r.BlockType = {})),
		function(t) {
			t[t.Default = 0] = "Default", t[t.Light = 1] = "Light", t[t.Dark = 2] = "Dark"
		}(r.Appearance || (r.Appearance = {})), r.STUDY_PANE_ANIMATE_IN = "in", r.STUDY_PANE_ANIMATE_OUT = "out", r.STUDY_PANE_ANIMATE_NONE = "none"
}, function(t, r, e) {
	var o = e(6),
		i = e(85),
		a = e(10),
		n = e(55),
		l = e(90),
		c = e(305),
		d = i("wks"),
		m = o.Symbol,
		p = c ? m : m && m.withoutSetter || n;
	t.exports = function(t) {
		return a(d, t) || (l && a(m, t) ? d[t] = m[t] : d[t] = p("Symbol." + t)), d[t]
	}
}, function(t, r) {
	var e = {}.hasOwnProperty;
	t.exports = function(t, r) {
		return e.call(t, r)
	}
}, function(t, r, e) {
	"use strict";
	t.exports = function(t) {
		var r = [];
		return r.toString = function() {
			return this.map((function(r) {
				var e = function(t, r) {
					var e = t[1] || "",
						o = t[3];
					if (!o) return e;
					if (r && "function" == typeof btoa) {
						var i = (n = o, l = btoa(unescape(encodeURIComponent(JSON.stringify(n)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l), "/*# ".concat(c, " */")),
							a = o.sources.map((function(t) {
								return "/*# sourceURL=".concat(o.sourceRoot || "").concat(t, " */")
							}));
						return [e].concat(a).concat([i]).join("\n")
					}
					var n, l, c;
					return [e].join("\n")
				}(r, t);
				return r[2] ? "@media ".concat(r[2], " {").concat(e, "}") : e
			})).join("")
		}, r.i = function(t, e, o) {
			"string" == typeof t && (t = [
				[null, t, ""]
			]);
			var i = {};
			if (o)
				for (var a = 0; a < this.length; a++) {
					var n = this[a][0];
					null != n && (i[n] = !0)
				}
			for (var l = 0; l < t.length; l++) {
				var c = [].concat(t[l]);
				o && i[c[0]] || (e && (c[2] ? c[2] = "".concat(e, " and ").concat(c[2]) : c[2] = e), r.push(c))
			}
		}, r
	}
}, function(t, r, e) {
	"use strict";
	e.d(r, "a", (function() {
		return g
	})), e.d(r, "b", (function() {
		return p
	})), e.d(r, "c", (function() {
		return b
	})), e.d(r, "d", (function() {
		return j
	})), e.d(r, "e", (function() {
		return m
	})), e.d(r, "f", (function() {
		return d
	})), e.d(r, "g", (function() {
		return f
	})), e.d(r, "h", (function() {
		return w
	})), e.d(r, "i", (function() {
		return h
	})), e.d(r, "j", (function() {
		return c
	})), e.d(r, "k", (function() {
		return n
	})), e.d(r, "l", (function() {
		return u
	}));
	var o = e(49),
		i = e(77),
		a = e.n(i),
		n = function() {};

	function l(t, r) {
		return r ? "-" === r[0] ? t + r : t + "__" + r : t
	}

	function c(t, r, e) {
		var o = [e];
		if (r && t)
			for (var i in r) r.hasOwnProperty(i) && r[i] && o.push("".concat(l(t, i)));
		return o.filter((function(t) {
			return t
		})).map((function(t) {
			return String(t).trim()
		})).join(" ")
	}
	var d = function(t) {
		return Array.isArray(t) ? t.filter(Boolean) : "object" === Object(o.a)(t) && null !== t ? [t] : []
	};

	function m(t) {
		return [document.documentElement, document.body, window].indexOf(t) > -1
	}

	function p(t) {
		return m(t) ? window.pageYOffset : t.scrollTop
	}

	function u(t, r) {
		m(t) ? window.scrollTo(0, r) : t.scrollTop = r
	}

	function g(t) {
		var r = getComputedStyle(t),
			e = "absolute" === r.position,
			o = /(auto|scroll)/,
			i = document.documentElement;
		if ("fixed" === r.position) return i;
		for (var a = t; a = a.parentElement;)
			if (r = getComputedStyle(a), (!e || "static" !== r.position) && o.test(r.overflow + r.overflowY + r.overflowX)) return a;
		return i
	}

	function s(t, r, e, o) {
		return e * ((t = t / o - 1) * t * t + 1) + r
	}

	function b(t, r) {
		var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200,
			o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n,
			i = p(t),
			l = r - i,
			c = 10,
			d = 0;

		function m() {
			var r = s(d += c, i, l, e);
			u(t, r), d < e ? a()(m) : o(t)
		}
		m()
	}

	function w(t, r) {
		var e = t.getBoundingClientRect(),
			o = r.getBoundingClientRect(),
			i = r.offsetHeight / 3;
		o.bottom + i > e.bottom ? u(t, Math.min(r.offsetTop + r.clientHeight - t.offsetHeight + i, t.scrollHeight)) : o.top - i < e.top && u(t, Math.max(r.offsetTop - i, 0))
	}

	function f(t) {
		var r = t.getBoundingClientRect();
		return {
			bottom: r.bottom,
			height: r.height,
			left: r.left,
			right: r.right,
			top: r.top,
			width: r.width
		}
	}

	function h() {
		try {
			return document.createEvent("TouchEvent"), !0
		} catch (t) {
			return !1
		}
	}

	function j() {
		try {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
		} catch (t) {
			return !1
		}
	}
}, function(t, r) {
	t.exports = function(t) {
		try {
			return !!t()
		} catch (t) {
			return !0
		}
	}
}, function(t, r, e) {
	var o = e(21),
		i = e(81),
		a = e(24),
		n = e(73),
		l = Object.defineProperty;
	r.f = o ? l : function(t, r, e) {
		if (a(t), r = n(r, !0), a(e), i) try {
			return l(t, r, e)
		} catch (t) {}
		if ("get" in e || "set" in e) throw TypeError("Accessors not supported");
		return "value" in e && (t[r] = e.value), t
	}
}, function(t, r) {
	t.exports = function(t) {
		return "object" == typeof t ? null !== t : "function" == typeof t
	}
}, function(t, r, e) {
	"use strict";

	function o(t, r) {
		if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
	}
	e.d(r, "a", (function() {
		return o
	}))
}, function(t, r, e) {
	"use strict";

	function o(t, r) {
		for (var e = 0; e < r.length; e++) {
			var o = r[e];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
		}
	}

	function i(t, r, e) {
		return r && o(t.prototype, r), e && o(t, e), t
	}
	e.d(r, "a", (function() {
		return i
	}))
}, function(t, r, e) {
	"use strict";
	e.d(r, "a", (function() {
		return a
	}));
	var o = e(49),
		i = e(1);

	function a(t, r) {
		return !r || "object" !== Object(o.a)(r) && "function" != typeof r ? Object(i.a)(t) : r
	}
}, function(t, r, e) {
	"use strict";

	function o(t) {
		return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}
	e.d(r, "a", (function() {
		return o
	}))
}, function(t, r, e) {
	"use strict";

	function o(t, r) {
		return (o = Object.setPrototypeOf || function(t, r) {
			return t.__proto__ = r, t
		})(t, r)
	}

	function i(t, r) {
		if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
		t.prototype = Object.create(r && r.prototype, {
			constructor: {
				value: t,
				writable: !0,
				configurable: !0
			}
		}), r && o(t, r)
	}
	e.d(r, "a", (function() {
		return i
	}))
}, function(t, r, e) {
	var o = e(13);
	t.exports = !o((function() {
		return 7 != Object.defineProperty({}, 1, {
			get: function() {
				return 7
			}
		})[1]
	}))
}, function(t, r, e) {
	"use strict";
	e.d(r, "a", (function() {
		return o
	}));
	var o = !0
}, function(t, r, e) {
	var o = e(21),
		i = e(14),
		a = e(47);
	t.exports = o ? function(t, r, e) {
		return i.f(t, r, a(1, e))
	} : function(t, r, e) {
		return t[r] = e, t
	}
}, function(t, r, e) {
	var o = e(15);
	t.exports = function(t) {
		if (!o(t)) throw TypeError(String(t) + " is not an object");
		return t
	}
}, function(t, r, e) {
	"use strict";
	var o = function() {
		function t() {}
		return t.send = function(t) {
			window && window.external && "notify" in window.external && window.external.notify(JSON.stringify(t))
		}, t.sendCommand = function(t) {
			0
		}, t
	}();
	t.exports = o
}, function(t, r, e) {
	"use strict";
	! function t() {
		if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
			0;
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
			} catch (t) {
				console.error(t)
			}
		}
	}(), t.exports = e(326)
}, function(t, r, e) {
	"use strict";
	e.d(r, "a", (function() {
		return i
	}));
	var o = e(3);

	function i(t) {
		for (var r = 1; r < arguments.length; r++) {
			var e = null != arguments[r] ? arguments[r] : {},
				i = Object.keys(e);
			"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(e).filter((function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			})))), i.forEach((function(r) {
				Object(o.a)(t, r, e[r])
			}))
		}
		return t
	}
}, function(t, r, e) {
	"use strict";
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.NATIVE_ACTION_DISMISS_RESEARCH_GUIDE_DOWNLOAD_BOX = r.NATIVE_ACTION_DOWNLOAD_RESEARCH_GUIDE = r.NATIVE_ACTION_REQUEST_IMAGE_CONTENT = r.NATIVE_ACTION_UPDATE_INPUT_FIELDS = r.NATIVE_ACTION_REQUEST_BREAKING_NEWS = r.NATIVE_ACTION_REQUEST_PUBLICATION_REFERENCE = r.NATIVE_ACTION_SELECT_MULTIMEDIA = r.NATIVE_ACTION_REQUEST_YEAR_TEXT = r.NATIVE_ACTION_SHOW_MEDIA = r.NATIVE_ACTION_SHOW_IMAGE = r.NATIVE_ACTION_NAVIGATE_TAG = r.NATIVE_ACTION_NOTE_EDIT_MODE_EXITED = r.NATIVE_ACTION_NOTE_EDIT_MODE_ENTERED = r.NATIVE_ACTION_SHOW_NOTE_OPTIONS = r.NATIVE_ACTION_REQUEST_NOTE_EDITOR_CONTENT = r.NATIVE_ACTION_PERSIST_TAG_ITEM_POSITION = r.NATIVE_ACTION_PERSIST_NOTE = r.NATIVE_ACTION_UPDATE_SCROLL_POSITION = r.NATIVE_ACTION_UPDATE_TOP_ELEMENT = r.NATIVE_ACTION_CUSTOMIZE_BIBLE_LOOKUP_SET = r.NATIVE_ACTION_REQUEST_MARGINAL = r.NATIVE_ACTION_REQUEST_EXTRACTION = r.NATIVE_ACTION_NAVIGATE_ONLINE_LINK = r.NATIVE_ACTION_NAVIGATE = r.NATIVE_ACTION_HIDE_LOUPE = r.NATIVE_ACTION_SHOW_LOUPE = r.NATIVE_ACTION_HIDE_USER_MARK_MENU = r.NATIVE_ACTION_SHOW_USER_MARK_MENU = r.NATIVE_ACTION_SHOW_EDIT_USER_MARK_MENU = r.NATIVE_ACTION_PERSIST_USER_MARK = r.NATIVE_ACTION_REQUEST_MEDIA = r.NATIVE_ACTION_SHOW_PARAGRAPH_MENU = r.NATIVE_ACTION_REQUEST_STUDY_CONTENT = r.NATIVE_ACTION_REQUEST_PRIMARY_CONTENT = r.NATIVE_EVENT_IMAGE_CONTENT_LOADED = r.NATIVE_EVENT_PRIMARY_IMAGE_TAPPED = r.NATIVE_EVENT_TEXT_SELECTION_CREATED = r.NATIVE_EVENT_USER_MARK_DRAWN = r.NATIVE_EVENT_STUDY_CONTENT_LOADED = r.NATIVE_EVENT_PRIMARY_CONTENT_LOADED = r.NATIVE_EVENT_SPEEDBAR_HIDDEN = r.NATIVE_EVENT_SPEEDBAR_SHOWN = void 0, r.NATIVE_EVENT_SPEEDBAR_SHOWN = "NATIVE_EVENT_SPEEDBAR_SHOWN", r.NATIVE_EVENT_SPEEDBAR_HIDDEN = "NATIVE_EVENT_SPEEDBAR_HIDDEN", r.NATIVE_EVENT_PRIMARY_CONTENT_LOADED = "NATIVE_EVENT_PRIMARY_CONTENT_LOADED", r.NATIVE_EVENT_STUDY_CONTENT_LOADED = "NATIVE_EVENT_STUDY_CONTENT_LOADED", r.NATIVE_EVENT_USER_MARK_DRAWN = "NATIVE_EVENT_USER_MARK_DRAWN", r.NATIVE_EVENT_TEXT_SELECTION_CREATED = "NATIVE_EVENT_TEXT_SELECTION_CREATED", r.NATIVE_EVENT_PRIMARY_IMAGE_TAPPED = "NATIVE_EVENT_PRIMARY_IMAGE_TAPPED", r.NATIVE_EVENT_IMAGE_CONTENT_LOADED = "NATIVE_EVENT_IMAGE_CONTENT_LOADED", r.NATIVE_ACTION_REQUEST_PRIMARY_CONTENT = "NATIVE_ACTION_REQUEST_PRIMARY_CONTENT", r.NATIVE_ACTION_REQUEST_STUDY_CONTENT = "NATIVE_ACTION_REQUEST_STUDY_CONTENT", r.NATIVE_ACTION_SHOW_PARAGRAPH_MENU = "NATIVE_ACTION_SHOW_PARAGRAPH_MENU", r.NATIVE_ACTION_REQUEST_MEDIA = "NATIVE_ACTION_REQUEST_MEDIA", r.NATIVE_ACTION_PERSIST_USER_MARK = "NATIVE_ACTION_PERSIST_USER_MARK", r.NATIVE_ACTION_SHOW_EDIT_USER_MARK_MENU = "NATIVE_ACTION_SHOW_EDIT_USER_MARK_MENU", r.NATIVE_ACTION_SHOW_USER_MARK_MENU = "NATIVE_ACTION_SHOW_USER_MARK_MENU", r.NATIVE_ACTION_HIDE_USER_MARK_MENU = "NATIVE_ACTION_HIDE_USER_MARK_MENU", r.NATIVE_ACTION_SHOW_LOUPE = "NATIVE_ACTION_SHOW_LOUPE", r.NATIVE_ACTION_HIDE_LOUPE = "NATIVE_ACTION_HIDE_LOUPE", r.NATIVE_ACTION_NAVIGATE = "NATIVE_ACTION_NAVIGATE", r.NATIVE_ACTION_NAVIGATE_ONLINE_LINK = "NATIVE_ACTION_NAVIGATE_ONLINE_LINK", r.NATIVE_ACTION_REQUEST_EXTRACTION = "NATIVE_ACTION_REQUEST_EXTRACTION", r.NATIVE_ACTION_REQUEST_MARGINAL = "NATIVE_ACTION_REQUEST_MARGINAL", r.NATIVE_ACTION_CUSTOMIZE_BIBLE_LOOKUP_SET = "NATIVE_ACTION_CUSTOMIZE_BIBLE_LOOKUP_SET", r.NATIVE_ACTION_UPDATE_TOP_ELEMENT = "NATIVE_ACTION_UPDATE_TOP_ELEMENT", r.NATIVE_ACTION_UPDATE_SCROLL_POSITION = "NATIVE_ACTION_UPDATE_SCROLL_POSITION", r.NATIVE_ACTION_PERSIST_NOTE = "NATIVE_ACTION_PERSIST_NOTE", r.NATIVE_ACTION_PERSIST_TAG_ITEM_POSITION = "NATIVE_ACTION_PERSIST_TAG_ITEM_POSITION", r.NATIVE_ACTION_REQUEST_NOTE_EDITOR_CONTENT = "NATIVE_ACTION_REQUEST_NOTE_EDITOR_CONTENT", r.NATIVE_ACTION_SHOW_NOTE_OPTIONS = "NATIVE_ACTION_SHOW_NOTE_OPTIONS", r.NATIVE_ACTION_NOTE_EDIT_MODE_ENTERED = "NATIVE_ACTION_NOTE_EDIT_MODE_ENTERED", r.NATIVE_ACTION_NOTE_EDIT_MODE_EXITED = "NATIVE_ACTION_NOTE_EDIT_MODE_EXITED", r.NATIVE_ACTION_NAVIGATE_TAG = "NATIVE_ACTION_NAVIGATE_TAG", r.NATIVE_ACTION_SHOW_IMAGE = "NATIVE_ACTION_SHOW_IMAGE", r.NATIVE_ACTION_SHOW_MEDIA = "NATIVE_ACTION_SHOW_MEDIA", r.NATIVE_ACTION_REQUEST_YEAR_TEXT = "NATIVE_ACTION_REQUEST_YEAR_TEXT", r.NATIVE_ACTION_SELECT_MULTIMEDIA = "NATIVE_ACTION_SELECT_MULTIMEDIA", r.NATIVE_ACTION_REQUEST_PUBLICATION_REFERENCE = "NATIVE_ACTION_REQUEST_PUBLICATION_REFERENCE", r.NATIVE_ACTION_REQUEST_BREAKING_NEWS = "NATIVE_ACTION_REQUEST_BREAKING_NEWS", r.NATIVE_ACTION_UPDATE_INPUT_FIELDS = "NATIVE_ACTION_UPDATE_INPUT_FIELDS", r.NATIVE_ACTION_REQUEST_IMAGE_CONTENT = "NATIVE_ACTION_REQUEST_IMAGE_CONTENT", r.NATIVE_ACTION_DOWNLOAD_RESEARCH_GUIDE = "NATIVE_ACTION_DOWNLOAD_RESEARCH_GUIDE", r.NATIVE_ACTION_DISMISS_RESEARCH_GUIDE_DOWNLOAD_BOX = "NATIVE_ACTION_DISMISS_RESEARCH_GUIDE_DOWNLOAD_BOX"
}, function(t, r, e) {
	"use strict";
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.SELECT_PUBLICATION_REFERENCE = r.SET_OS = r.SET_APPEARANCE = r.SET_IMAGE = r.SET_CURRENT_MEDIA_MARKER = r.SET_INPUT_FIELDS = r.SET_BREAKING_NEWS = r.SET_YEAR_TEXT = r.CLEAR_FOCUSED_GEM = r.CLEAR_STUDY_CONTENT = r.EXIT_NOTE_EDIT_MODE = r.ENTER_NOTE_EDIT_MODE = r.UPDATE_NOTE = r.SET_USE_NEW_GESTURE_SYSTEM = r.SET_LOCALIZED_STRINGS = r.SET_NOTE_EDITOR_FOCUS = r.SET_NOTE_EDITOR_CONTENT = r.SET_TAGS = r.SET_NOTE_MARKERS = r.SET_BOOKMARKS = r.CREATE_USER_MARK_FROM_SELECTED_TEXT = r.SET_CONTEXT_MENU_VISIBLE = r.SET_AUTO_HIDE_CONTEXT_MENU = r.HIGHLIGHT_SEARCH_TERMS = r.SAVE_USER_MARK = r.SET_USER_MARK_STYLE = r.SET_USER_MARK_COLOR = r.MERGE_USER_MARKS = r.REMOVE_USER_MARK = r.CACHE_PERSISTED_USER_MARK = r.CACHE_USER_MARK = r.SET_LOCATED_USER_MARKS = r.SCROLL_TO_POSITION = r.SCROLL_TO_ELEMENT = r.SET_KEYBOARD_HEIGHT = r.SET_BOTTOM_PADDING = r.SET_TOP_PADDING = r.SET_FONT_SIZE = r.SELECT_VERSES = r.SELECT_PARAGRAPHS = r.UPDATE_PRIMARY_PROCESSED_CONTENT = r.SET_SUPPLEMENTARY_CONTENT = r.SET_GEM_CONTENT = r.SET_PRIMARY_CONTENT = r.SELECT_OUTLINE = r.SELECT_ALL_MARGINALS = r.SELECT_SECTION = r.SELECT_EXTRACTION = r.SELECT_COMMENTARY = r.SELECT_NOTE = r.SELECT_PARAGRAPH_LABEL = r.SELECT_VERSE_LABEL = r.SELECT_MARGINAL = r.SELECT_ENDNOTE = r.SELECT_FOOTNOTE = r.SHOW_EXPANDED_OUTLINE = r.SELECT_ALL_MARGINALS_PANE = r.SELECT_GEMS_PANE = void 0, r.SELECT_GEMS_PANE = "SELECT_GEMS_PANE", r.SELECT_ALL_MARGINALS_PANE = "SELECT_ALL_MARGINALS_PANE", r.SHOW_EXPANDED_OUTLINE = "SHOW_EXPANDED_OUTLINE", r.SELECT_FOOTNOTE = "SELECT_FOOTNOTE", r.SELECT_ENDNOTE = "SELECT_ENDNOTE", r.SELECT_MARGINAL = "SELECT_MARGINAL", r.SELECT_VERSE_LABEL = "SELECT_VERSE_LABEL", r.SELECT_PARAGRAPH_LABEL = "SELECT_PARAGRAPH_LABEL", r.SELECT_NOTE = "SELECT_NOTE", r.SELECT_COMMENTARY = "SELECT_COMMENTARY", r.SELECT_EXTRACTION = "SELECT_EXTRACTION", r.SELECT_SECTION = "SELECT_SECTION", r.SELECT_ALL_MARGINALS = "SELECT_ALL_MARGINALS", r.SELECT_OUTLINE = "SELECT_OUTLINE", r.SET_PRIMARY_CONTENT = "SET_PRIMARY_CONTENT", r.SET_GEM_CONTENT = "SET_GEM_CONTENT", r.SET_SUPPLEMENTARY_CONTENT = "SET_SUPPLEMENTARY_CONTENT", r.UPDATE_PRIMARY_PROCESSED_CONTENT = "UPDATE_PRIMARY_PROCESSED_CONTENT", r.SELECT_PARAGRAPHS = "SELECT_PARAGRAPHS", r.SELECT_VERSES = "SELECT_VERSES", r.SET_FONT_SIZE = "SET_FONT_SIZE", r.SET_TOP_PADDING = "SET_TOP_PADDING", r.SET_BOTTOM_PADDING = "SET_BOTTOM_PADDING", r.SET_KEYBOARD_HEIGHT = "SET_KEYBOARD_HEIGHT", r.SCROLL_TO_ELEMENT = "SCROLL_TO_ELEMENT", r.SCROLL_TO_POSITION = "SCROLL_TO_POSITION", r.SET_LOCATED_USER_MARKS = "SET_LOCATED_USER_MARKS", r.CACHE_USER_MARK = "CACHE_USER_MARK", r.CACHE_PERSISTED_USER_MARK = "CACHE_PERSISTED_USER_MARK", r.REMOVE_USER_MARK = "REMOVE_USER_MARK", r.MERGE_USER_MARKS = "MERGE_USER_MARKS", r.SET_USER_MARK_COLOR = "SET_USER_MARK_COLOR", r.SET_USER_MARK_STYLE = "SET_USER_MARK_STYLE", r.SAVE_USER_MARK = "SAVE_USER_MARK", r.HIGHLIGHT_SEARCH_TERMS = "HIGHLIGHT_SEARCH_TERMS", r.SET_AUTO_HIDE_CONTEXT_MENU = "SET_AUTO_HIDE_CONTEXT_MENU", r.SET_CONTEXT_MENU_VISIBLE = "SET_CONTEXT_MENU_VISIBLE", r.CREATE_USER_MARK_FROM_SELECTED_TEXT = "CREATE_USER_MARK_FROM_SELECTED_TEXT", r.SET_BOOKMARKS = "SET_BOOKMARKS", r.SET_NOTE_MARKERS = "SET_NOTE_MARKERS", r.SET_TAGS = "SET_TAGS", r.SET_NOTE_EDITOR_CONTENT = "SET_NOTE_EDITOR_CONTENT", r.SET_NOTE_EDITOR_FOCUS = "SET_NOTE_EDITOR_FOCUS", r.SET_LOCALIZED_STRINGS = "SET_LOCALIZED_STRINGS", r.SET_USE_NEW_GESTURE_SYSTEM = "SET_USE_NEW_GESTURE_SYSTEM", r.UPDATE_NOTE = "UPDATE_NOTE", r.ENTER_NOTE_EDIT_MODE = "ENTER_NOTE_EDIT_MODE", r.EXIT_NOTE_EDIT_MODE = "EXIT_NOTE_EDIT_MODE", r.CLEAR_STUDY_CONTENT = "CLEAR_STUDY_CONTENT", r.CLEAR_FOCUSED_GEM = "CLEAR_FOCUSED_GEM", r.SET_YEAR_TEXT = "SET_YEAR_TEXT", r.SET_BREAKING_NEWS = "SET_BREAKING_NEWS", r.SET_INPUT_FIELDS = "SET_INPUT_FIELDS", r.SET_CURRENT_MEDIA_MARKER = "SET_CURRENT_MEDIA_MARKER", r.SET_IMAGE = "SET_IMAGE", r.SET_APPEARANCE = "SET_APPEARANCE", r.SET_OS = "SET_OS", r.SELECT_PUBLICATION_REFERENCE = "SELECT_PUBLICATION_REFERENCE"
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(34),
		n = e(43),
		l = e(29),
		c = e(8),
		d = new(function(t) {
			function r() {
				var r = t.call(this) || this;
				return r.CHANGE_EVENT = "change", r._fontSize = 100, r._topPadding = 0, r._bottomPadding = 0, r._keyboardHeight = 0, r._autoHideContextMenu = !0, r._contextMenuVisible = !1, r._useNewGestureSystem = !1, r
			}
			return i(r, t), r.prototype.emitChange = function() {
				this.emit(this.CHANGE_EVENT)
			}, r.prototype.addChangeListener = function(t) {
				this.on(this.CHANGE_EVENT, t)
			}, r.prototype.removeChangeListener = function(t) {
				this.removeListener(this.CHANGE_EVENT, t)
			}, r.prototype.getFontSize = function() {
				return this._fontSize
			}, r.prototype.setFontSize = function(t) {
				this._fontSize = t
			}, r.prototype.getTopPadding = function() {
				return this._topPadding
			}, r.prototype.setTopPadding = function(t) {
				this._topPadding = t
			}, r.prototype.getBottomPadding = function() {
				return this._bottomPadding
			}, r.prototype.setBottomPadding = function(t) {
				this._bottomPadding = t
			}, r.prototype.getKeyboardHeight = function() {
				return this._keyboardHeight
			}, r.prototype.setKeyboardHeight = function(t) {
				this._keyboardHeight = t
			}, r.prototype.setAutoHideContextMenu = function(t) {
				this._autoHideContextMenu = t
			}, r.prototype.shouldAutoHideContextMenu = function() {
				return this._autoHideContextMenu
			}, r.prototype.setContextMenuVisible = function(t) {
				this._contextMenuVisible = t
			}, r.prototype.getContextMenuVisible = function() {
				return this._contextMenuVisible
			}, r.prototype.setLocalizedStrings = function(t) {
				this._localizedStrings = t
			}, r.prototype.getLocalizedStrings = function() {
				return this._localizedStrings || (this._localizedStrings = {}), this._localizedStrings
			}, r.prototype.getLocalizedString = function(t) {
				return this._localizedStrings ? this._localizedStrings[t] : null
			}, r.prototype.setUseNewGestureSystem = function(t) {
				this._useNewGestureSystem = t
			}, r.prototype.shouldUseNewGestureSystem = function() {
				return this._useNewGestureSystem
			}, r.prototype.getAppearance = function() {
				return this._appearance
			}, r.prototype.setAppearance = function(t) {
				this._appearance = t
			}, r.prototype.isInDarkMode = function() {
				return this._appearance === c.Appearance.Dark
			}, r.prototype.getOS = function() {
				return this._os
			}, r.prototype.setOS = function(t) {
				this._os = t
			}, r
		}(n.EventEmitter));
	a.register((function(t) {
		switch (t.type) {
			case l.SET_AUTO_HIDE_CONTEXT_MENU:
				var r = t.autoHide;
				d.setAutoHideContextMenu(r);
				break;
			case l.SET_FONT_SIZE:
				d.setFontSize(t.fontSize), d.emitChange();
				break;
			case l.SET_TOP_PADDING:
				d.setTopPadding(t.topPadding), d.emitChange();
				break;
			case l.SET_BOTTOM_PADDING:
				d.setBottomPadding(t.bottomPadding), d.emitChange();
				break;
			case l.SET_KEYBOARD_HEIGHT:
				d.setKeyboardHeight(t.keyboardHeight), d.emitChange();
				break;
			case l.SET_CONTEXT_MENU_VISIBLE:
				d.setContextMenuVisible(t.visible), d.emitChange();
				break;
			case l.SET_LOCALIZED_STRINGS:
				d.setLocalizedStrings(t.localizedStrings), d.emitChange();
				break;
			case l.SET_USE_NEW_GESTURE_SYSTEM:
				d.setUseNewGestureSystem(t.useNewGestureSystem), d.emitChange();
				break;
			case l.SET_APPEARANCE:
				d.setAppearance(t.appearance), d.emitChange();
				break;
			case l.SET_OS:
				d.setOS(t.os), d.emitChange()
		}
	})), t.exports = d
}, function(t, r, e) {
	var o = e(6),
		i = e(23),
		a = e(10),
		n = e(52),
		l = e(83),
		c = e(41),
		d = c.get,
		m = c.enforce,
		p = String(String).split("String");
	(t.exports = function(t, r, e, l) {
		var c = !!l && !!l.unsafe,
			d = !!l && !!l.enumerable,
			u = !!l && !!l.noTargetGet;
		"function" == typeof e && ("string" != typeof r || a(e, "name") || i(e, "name", r), m(e).source = p.join("string" == typeof r ? r : "")), t !== o ? (c ? !u && t[r] && (d = !0) : delete t[r], d ? t[r] = e : i(t, r, e)) : d ? t[r] = e : n(r, e)
	})(Function.prototype, "toString", (function() {
		return "function" == typeof this && d(this).source || l(this)
	}))
}, function(t, r) {
	t.exports = {}
}, function(t, r, e) {
	"use strict";
	var o, i = function() {
			return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o
		},
		a = function() {
			var t = {};
			return function(r) {
				if (void 0 === t[r]) {
					var e = document.querySelector(r);
					if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
						e = e.contentDocument.head
					} catch (t) {
						e = null
					}
					t[r] = e
				}
				return t[r]
			}
		}(),
		n = [];

	function l(t) {
		for (var r = -1, e = 0; e < n.length; e++)
			if (n[e].identifier === t) {
				r = e;
				break
			} return r
	}

	function c(t, r) {
		for (var e = {}, o = [], i = 0; i < t.length; i++) {
			var a = t[i],
				c = r.base ? a[0] + r.base : a[0],
				d = e[c] || 0,
				m = "".concat(c, " ").concat(d);
			e[c] = d + 1;
			var p = l(m),
				u = {
					css: a[1],
					media: a[2],
					sourceMap: a[3]
				}; - 1 !== p ? (n[p].references++, n[p].updater(u)) : n.push({
				identifier: m,
				updater: w(u, r),
				references: 1
			}), o.push(m)
		}
		return o
	}

	function d(t) {
		var r = document.createElement("style"),
			o = t.attributes || {};
		if (void 0 === o.nonce) {
			var i = e.nc;
			i && (o.nonce = i)
		}
		if (Object.keys(o).forEach((function(t) {
				r.setAttribute(t, o[t])
			})), "function" == typeof t.insert) t.insert(r);
		else {
			var n = a(t.insert || "head");
			if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
			n.appendChild(r)
		}
		return r
	}
	var m, p = (m = [], function(t, r) {
		return m[t] = r, m.filter(Boolean).join("\n")
	});

	function u(t, r, e, o) {
		var i = e ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
		if (t.styleSheet) t.styleSheet.cssText = p(r, i);
		else {
			var a = document.createTextNode(i),
				n = t.childNodes;
			n[r] && t.removeChild(n[r]), n.length ? t.insertBefore(a, n[r]) : t.appendChild(a)
		}
	}

	function g(t, r, e) {
		var o = e.css,
			i = e.media,
			a = e.sourceMap;
		if (i ? t.setAttribute("media", i) : t.removeAttribute("media"), a && btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), t.styleSheet) t.styleSheet.cssText = o;
		else {
			for (; t.firstChild;) t.removeChild(t.firstChild);
			t.appendChild(document.createTextNode(o))
		}
	}
	var s = null,
		b = 0;

	function w(t, r) {
		var e, o, i;
		if (r.singleton) {
			var a = b++;
			e = s || (s = d(r)), o = u.bind(null, e, a, !1), i = u.bind(null, e, a, !0)
		} else e = d(r), o = g.bind(null, e, r), i = function() {
			! function(t) {
				if (null === t.parentNode) return !1;
				t.parentNode.removeChild(t)
			}(e)
		};
		return o(t),
			function(r) {
				if (r) {
					if (r.css === t.css && r.media === t.media && r.sourceMap === t.sourceMap) return;
					o(t = r)
				} else i()
			}
	}
	t.exports = function(t, r) {
		(r = r || {}).singleton || "boolean" == typeof r.singleton || (r.singleton = i());
		var e = c(t = t || [], r);
		return function(t) {
			if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
				for (var o = 0; o < e.length; o++) {
					var i = l(e[o]);
					n[i].references--
				}
				for (var a = c(t, r), d = 0; d < e.length; d++) {
					var m = l(e[d]);
					0 === n[m].references && (n[m].updater(), n.splice(m, 1))
				}
				e = a
			}
		}
	}
}, function(t, r, e) {
	"use strict";
	var o = e(329),
		i = new(function() {
			function t() {}
			return t.prototype.dispatch = function(r) {
				t.dispatcher.dispatch(r)
			}, t.prototype.register = function(r) {
				return t.dispatcher.register(r)
			}, t.prototype.unregister = function(r) {
				t.dispatcher.unregister(r)
			}, t.dispatcher = new o.Dispatcher, t
		}());
	window.AppDispatcher = i, t.exports = i
}, function(t, r, e) {
	"use strict";
	var o = e(34),
		i = e(8),
		a = e(25),
		n = e(70),
		l = e(29),
		c = function() {
			function t() {}
			return t.selectFootnote = function(t, r) {
				void 0 === r && (r = !0);
				var e = {
					type: l.SELECT_FOOTNOTE,
					footnoteID: t,
					scroll: !0
				};
				o.dispatch(e), r && a.send({
					type: l.SELECT_FOOTNOTE,
					scroll: !0,
					footnoteID: t
				})
			}, t.selectEndnote = function(t, r) {
				void 0 === r && (r = !0);
				var e = {
					type: l.SELECT_ENDNOTE,
					endnoteID: t,
					scroll: !0
				};
				o.dispatch(e), r && a.send({
					type: l.SELECT_ENDNOTE,
					scroll: !0,
					endnoteID: t
				})
			}, t.selectMarginal = function(t, r, e) {
				void 0 === e && (e = !0);
				var i = {
					type: l.SELECT_MARGINAL,
					marginalID: t,
					marginalClass: r
				};
				o.dispatch(i), e && a.send({
					type: l.SELECT_MARGINAL,
					scroll: !0,
					marginalID: t,
					marginalClass: r
				})
			}, t.selectNote = function(t, r) {
				void 0 === r && (r = !0);
				var e = {
					type: l.SELECT_NOTE,
					noteID: t
				};
				o.dispatch(e), r && a.send({
					type: l.SELECT_NOTE,
					scroll: !0,
					noteID: t
				})
			}, t.selectCommentary = function(t, r, e) {
				void 0 === e && (e = !0);
				var i = {
					type: l.SELECT_COMMENTARY,
					verse: t,
					paragraph: r
				};
				o.dispatch(i), e && a.send({
					type: l.SELECT_COMMENTARY,
					scroll: !0,
					verse: t,
					paragraph: r
				})
			}, t.selectVerseLabel = function(t, r) {
				void 0 === r && (r = !0);
				var e = {
					type: l.SELECT_VERSE_LABEL,
					verse: t
				};
				o.dispatch(e), r && a.send({
					type: l.SELECT_VERSE_LABEL,
					scroll: !0,
					verse: t
				})
			}, t.selectParagraphLabel = function(t, r) {
				void 0 === r && (r = !0);
				var e = {
					type: l.SELECT_PARAGRAPH_LABEL,
					paragraph: t
				};
				o.dispatch(e), r && a.send({
					type: l.SELECT_PARAGRAPH_LABEL,
					scroll: !0,
					paragraph: t
				})
			}, t.selectPublicationReference = function(t) {
				var r = {
					type: l.SELECT_PUBLICATION_REFERENCE,
					verseNumber: t
				};
				a.send(r), o.dispatch(r)
			}, t.selectExtraction = function(t, r, e, i) {
				void 0 === i && (i = !0);
				var n = {
					type: l.SELECT_EXTRACTION,
					extractionType: t,
					extractionID: r,
					jwPubLink: e
				};
				o.dispatch(n), i && a.send(n)
			}, t.selectSection = function(t) {
				var r = {
					type: l.SELECT_SECTION,
					section: t
				};
				o.dispatch(r)
			}, t.selectAllMarginals = function(t) {
				void 0 === t && (t = !0);
				var r = {
					type: l.SELECT_ALL_MARGINALS
				};
				o.dispatch(r), t && a.send({
					type: l.SELECT_ALL_MARGINALS
				})
			}, t.selectOutline = function(t) {
				void 0 === t && (t = !0);
				var r = {
					type: l.SELECT_OUTLINE
				};
				o.dispatch(r), t && a.send({
					type: l.SELECT_OUTLINE
				})
			}, t.setPrimaryContent = function(t) {
				this.reset(), o.dispatch({
					type: l.SET_PRIMARY_CONTENT,
					content: t
				})
			}, t.updatePrimaryProcessedContent = function(t) {
				o.dispatch({
					type: l.UPDATE_PRIMARY_PROCESSED_CONTENT,
					processedContent: t.processedContent,
					documentInfo: t.documentInfo
				})
			}, t.setGemContent = function(t, r) {
				void 0 === r && (r = !1), o.dispatch({
					type: l.SET_GEM_CONTENT,
					content: t,
					showRsgDownloadBox: r
				})
			}, t.setSupplementaryContent = function(t, r) {
				o.dispatch({
					type: l.SET_SUPPLEMENTARY_CONTENT,
					content: t,
					animate: r
				})
			}, t.selectGemsPane = function() {
				o.dispatch({
					type: l.SELECT_GEMS_PANE
				})
			}, t.selectAllMarginalsPane = function(t) {
				o.dispatch({
					type: l.SELECT_ALL_MARGINALS_PANE,
					animate: t
				})
			}, t.showExpandedOutline = function(t) {
				o.dispatch({
					type: l.SHOW_EXPANDED_OUTLINE,
					animate: t
				})
			}, t.updateNote = function(t) {
				o.dispatch({
					type: l.UPDATE_NOTE,
					note: t
				})
			}, t.selectParagraphs = function(t, r, e) {
				void 0 === e && (e = !0);
				var i = {
					type: l.SELECT_PARAGRAPHS,
					ids: t,
					snippet: r
				};
				o.dispatch(i), e && a.send(i)
			}, t.selectVerses = function(t, r, e, i) {
				void 0 === i && (i = !0);
				var n = {
					type: l.SELECT_VERSES,
					firstVerse: t,
					lastVerse: r,
					snippet: e
				};
				o.dispatch(n), i && a.send(n)
			}, t.clearVerseSelection = function(t) {
				void 0 === t && (t = !0);
				var r = {
					type: l.SELECT_VERSES
				};
				o.dispatch(r), t && a.send(r)
			}, t.clearParagraphSelection = function(t) {
				void 0 === t && (t = !0);
				var r = {
					type: l.SELECT_PARAGRAPHS
				};
				o.dispatch(r), t && a.send(r)
			}, t.scrollToVerse = function(t, r) {
				o.dispatch({
					type: l.SCROLL_TO_ELEMENT,
					scrollTargetType: i.ScrollTargetType.Verse,
					id: "" + t,
					offset: r
				})
			}, t.scrollToParagraph = function(t, r) {
				o.dispatch({
					type: l.SCROLL_TO_ELEMENT,
					scrollTargetType: i.ScrollTargetType.Paragraph,
					id: "" + t,
					offset: r
				})
			}, t.scrollToFootnote = function(t) {
				o.dispatch({
					type: l.SCROLL_TO_ELEMENT,
					scrollTargetType: i.ScrollTargetType.Footnote,
					id: "" + t
				})
			}, t.scrollToEndnote = function(t) {
				o.dispatch({
					type: l.SCROLL_TO_ELEMENT,
					scrollTargetType: i.ScrollTargetType.Endnote,
					id: "" + t
				})
			}, t.scrollToMarginal = function(t) {
				o.dispatch({
					type: l.SCROLL_TO_ELEMENT,
					scrollTargetType: i.ScrollTargetType.Marginal,
					id: "" + t
				})
			}, t.scrollToExtraction = function(t) {
				o.dispatch({
					type: l.SCROLL_TO_ELEMENT,
					scrollTargetType: i.ScrollTargetType.Extraction,
					id: t
				})
			}, t.scrollToBibleCitation = function(t) {
				o.dispatch({
					type: l.SCROLL_TO_ELEMENT,
					scrollTargetType: i.ScrollTargetType.BibleCitation,
					id: t
				})
			}, t.scrollToNote = function(t) {
				o.dispatch({
					type: l.SCROLL_TO_ELEMENT,
					scrollTargetType: i.ScrollTargetType.Note,
					id: t
				})
			}, t.scrollToVerseLabel = function(t) {
				o.dispatch({
					type: l.SCROLL_TO_ELEMENT,
					scrollTargetType: i.ScrollTargetType.VerseLabel,
					id: t
				})
			}, t.scrollToParagraphLabel = function(t) {
				o.dispatch({
					type: l.SCROLL_TO_ELEMENT,
					scrollTargetType: i.ScrollTargetType.ParagraphLabel,
					id: t
				})
			}, t.scrollToPosition = function(t, r) {
				o.dispatch({
					type: l.SCROLL_TO_POSITION,
					section: t,
					scrollPosition: r
				})
			}, t.setFontSize = function(t) {
				o.dispatch({
					type: l.SET_FONT_SIZE,
					fontSize: t
				})
			}, t.setTopPadding = function(t) {
				o.dispatch({
					type: l.SET_TOP_PADDING,
					topPadding: t
				})
			}, t.setBottomPadding = function(t) {
				o.dispatch({
					type: l.SET_BOTTOM_PADDING,
					bottomPadding: t
				})
			}, t.setKeyboardHeight = function(t) {
				o.dispatch({
					type: l.SET_KEYBOARD_HEIGHT,
					keyboardHeight: t
				})
			}, t.removeUserMark = function(t) {
				"string" == typeof t ? o.dispatch({
					type: l.REMOVE_USER_MARK,
					markIdentifier: t
				}) : "number" == typeof t && o.dispatch({
					type: l.REMOVE_USER_MARK,
					userMarkID: t
				})
			}, t.setUserMarkColor = function(t, r) {
				"string" == typeof t ? o.dispatch({
					type: l.SET_USER_MARK_COLOR,
					markIdentifier: t,
					color: r
				}) : "number" == typeof t && o.dispatch({
					type: l.SET_USER_MARK_COLOR,
					userMarkID: t,
					color: r
				})
			}, t.createUserMarkFromSelectedText = function(t, r, e) {
				o.dispatch({
					type: l.CREATE_USER_MARK_FROM_SELECTED_TEXT,
					color: t,
					style: r,
					ranges: e
				})
			}, t.cacheUserMark = function(t) {
				o.dispatch({
					type: l.CACHE_USER_MARK,
					mark: t
				})
			}, t.cachePersistedUserMark = function(t) {
				o.dispatch({
					type: l.CACHE_PERSISTED_USER_MARK,
					mark: t
				})
			}, t.setLocatedUserMarks = function(t) {
				o.dispatch({
					type: l.SET_LOCATED_USER_MARKS,
					locatedUserMarks: t
				})
			}, t.mergeUserMarks = function(t, r, e) {
				o.dispatch({
					type: l.MERGE_USER_MARKS,
					createdMark: t,
					deletedMarks: r,
					sendUserMarkMenuMessageAfter: e
				})
			}, t.setBookmarks = function(t) {
				o.dispatch({
					type: l.SET_BOOKMARKS,
					bookmarks: t
				})
			}, t.setNoteMarkers = function(t) {
				o.dispatch({
					type: l.SET_NOTE_MARKERS,
					noteMarkers: t
				})
			}, t.setCurrentMediaMarker = function(t) {
				o.dispatch({
					type: l.SET_CURRENT_MEDIA_MARKER,
					mediaMarker: t
				})
			}, t.triggerWillResizeEvent = function() {
				t.sendCustomEvent("willResize")
			}, t.triggerPersistNoteEditorContentEvent = function() {
				t.sendCustomEvent("persistNoteEditorContent")
			}, t.highlightSearchTerms = function(t) {
				o.dispatch({
					type: l.HIGHLIGHT_SEARCH_TERMS,
					targets: t
				})
			}, t.setAutoHideContextMenu = function(t) {
				o.dispatch({
					type: l.SET_AUTO_HIDE_CONTEXT_MENU,
					autoHide: t
				})
			}, t.setContextMenuVisible = function(t) {
				o.dispatch({
					type: l.SET_CONTEXT_MENU_VISIBLE,
					visible: t
				})
			}, t.setUseNewGestureSystem = function(t) {
				o.dispatch({
					type: l.SET_USE_NEW_GESTURE_SYSTEM,
					useNewGestureSystem: t
				})
			}, t.reset = function() {
				window.scrollTo(0, 0), document.documentElement.msContentZoomFactor = 1, n.setUserMarks([]), t.sendCustomEvent("clearContentBasedCache")
			}, t.sendCustomEvent = function(t) {
				var r = document.createEvent("Event");
				r.initEvent(t, !0, !0), window.dispatchEvent(r)
			}, t.clearPrimaryContent = function() {
				t.setPrimaryContent({
					content: null,
					isLargeDocument: null,
					language: null
				})
			}, t.clearStudyContent = function() {
				o.dispatch({
					type: l.CLEAR_STUDY_CONTENT
				})
			}, t.clearTextSelection = function() {
				t.sendCustomEvent("clearTextSelection")
			}, t.setTags = function(t) {
				o.dispatch({
					type: l.SET_TAGS,
					tags: t
				})
			}, t.setNoteEditorContent = function(t, r) {
				o.dispatch({
					type: l.SET_NOTE_EDITOR_CONTENT,
					note: t,
					autoFocus: r
				})
			}, t.setNoteEditorFocus = function() {
				o.dispatch({
					type: l.SET_NOTE_EDITOR_FOCUS
				})
			}, t.setLocalizedStrings = function(t) {
				o.dispatch({
					type: l.SET_LOCALIZED_STRINGS,
					localizedStrings: t
				})
			}, t.enterNoteEditMode = function(t) {
				o.dispatch({
					type: l.ENTER_NOTE_EDIT_MODE,
					noteID: t
				})
			}, t.exitNoteEditMode = function() {
				o.dispatch({
					type: l.EXIT_NOTE_EDIT_MODE
				})
			}, t.setYearText = function(t, r) {
				o.dispatch({
					type: l.SET_YEAR_TEXT,
					yearText: t,
					yearTextYear: r
				})
			}, t.clearFocusedGem = function() {
				o.dispatch({
					type: l.CLEAR_FOCUSED_GEM
				})
			}, t.setBreakingNews = function(t) {
				o.dispatch({
					type: l.SET_BREAKING_NEWS,
					news: t
				})
			}, t.setInputFields = function(t) {
				o.dispatch({
					type: l.SET_INPUT_FIELDS,
					inputFields: t
				})
			}, t.setImage = function(t) {
				o.dispatch({
					type: l.SET_IMAGE,
					image: t
				})
			}, t.setAppearance = function(t) {
				o.dispatch({
					type: l.SET_APPEARANCE,
					appearance: t
				})
			}, t.setOS = function(t) {
				o.dispatch({
					type: l.SET_OS,
					os: t
				})
			}, t
		}();
	window.ActionCreators = c, t.exports = c
}, function(t, r, e) {
	"use strict";

	function o(t, r) {
		if (null == t) return {};
		var e, o, i = function(t, r) {
			if (null == t) return {};
			var e, o, i = {},
				a = Object.keys(t);
			for (o = 0; o < a.length; o++) e = a[o], r.indexOf(e) >= 0 || (i[e] = t[e]);
			return i
		}(t, r);
		if (Object.getOwnPropertySymbols) {
			var a = Object.getOwnPropertySymbols(t);
			for (o = 0; o < a.length; o++) e = a[o], r.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(t, e) && (i[e] = t[e])
		}
		return i
	}
	e.d(r, "a", (function() {
		return o
	}))
}, function(t, r, e) {
	"use strict";
	var o = e(38),
		i = function() {
			function t() {}
			return t.getTokenInfoByElementID = function(r) {
				if (r) {
					var e = t._tokenInfosByElementID[r];
					if (!e) {
						var i = document.getElementById(r);
						i && (e = new o(i)) && (t._tokenInfosByElementID[r] = e, e.elementAttrMarkId && (t._tokenInfosByJWDID[e.elementAttrMarkId] = e))
					}
					return e
				}
				return null
			}, t.getTokenInfoByJWDID = function(r) {
				if (r) {
					var e = t._tokenInfosByJWDID[r];
					if (!e) {
						var i = document.querySelector("[" + o.WORD_ATTR_MARK + "='" + r + "']");
						i && (e = new o(i)) && (t._tokenInfosByElementID[e.elementId] = e, t._tokenInfosByJWDID[r] = e)
					}
					return e
				}
				return null
			}, t.getLastTokenInfoAfterTokenAndAbovePoint = function(r, e) {
				var i = null;
				if (r && e)
					for (var a = r.groupId, n = r.groupWordIndex + 1, l = o.elementIdFromParts(a, n), c = t.getTokenInfoByElementID(l); c;) {
						var d = c.calculateRect();
						if (c.isMarkableWord()) {
							if (!(d.top <= e.y)) break;
							i = c
						}
						n++, l = o.elementIdFromParts(a, n), c = t.getTokenInfoByElementID(l)
					}
				return i
			}, t.getFirstTokenInfoBeforeTokenAndBelowPoint = function(r, e) {
				var i = null;
				if (r && e)
					for (var a = r.groupId, n = r.groupWordIndex - 1, l = o.elementIdFromParts(a, n), c = t.getTokenInfoByElementID(l); c;) {
						var d = c.calculateRect();
						if (c.isMarkableWord()) {
							if (!(d.maxY() >= e.y)) break;
							i = c
						}
						if (0 === n) break;
						n--, l = o.elementIdFromParts(a, n), c = t.getTokenInfoByElementID(l)
					}
				return i
			}, t.getRectContainingFirstLineOfElement = function(r) {
				for (var e = null, o = r.querySelectorAll("[data-jwd-id]"), i = 0; i < o.length; i++) {
					var a = o[i],
						n = t.getTokenInfoByElementID(a.id);
					if (n && n.isMarkableWord()) {
						var l = n.calculateRect();
						if (l)
							if (e) {
								if (l.top > e.top) break;
								e.width = l.maxX() - e.left
							} else e = {
								left: l.left,
								top: l.top,
								width: l.width,
								height: l.height
							}
					}
				}
				return e && (e.top -= window.pageYOffset, e.top + e.height < 0 && (e.top = 0)), e
			}, t.getHorizontalDistanceBetweenTokenAndPoint = function(t, r, e) {
				if (t) {
					var o = t.calculateRect();
					if (e >= o.top - 2 && e <= o.maxY() + 2) {
						if (r < o.left) return o.left - r;
						if (r > o.maxX()) return r - o.maxX()
					}
				}
				return null
			}, t.getClosestMarkableTokenForToken = function(r, e, i) {
				if (r) {
					var a = o.elementIdFromParts(r.groupId, r.groupWordIndex - 1),
						n = t.getTokenInfoByElementID(a),
						l = o.elementIdFromParts(r.groupId, r.groupWordIndex + 1),
						c = t.getTokenInfoByElementID(l);
					if (n && n.isMarkableWord() && c && c.isMarkableWord()) {
						var d = t.getHorizontalDistanceBetweenTokenAndPoint(n, e, i),
							m = t.getHorizontalDistanceBetweenTokenAndPoint(c, e, i);
						if (d && m) {
							if (d < m && d <= 5) return n;
							if (m < d && m <= 5) return c;
							if (d === m && d <= 5) return n.calculateRect().width < c.calculateRect().width ? n : c
						} else {
							if (d && d <= 5) return n;
							if (m && m <= 5) return c
						}
					} else if (n && n.isMarkableWord()) {
						if ((d = t.getHorizontalDistanceBetweenTokenAndPoint(n, e, i)) && d <= 5) return n
					} else if (c && c.isMarkableWord()) {
						if ((m = t.getHorizontalDistanceBetweenTokenAndPoint(c, e, i)) && m <= 5) return c
					}
				}
				return null
			}, t.clearCache = function() {
				t._tokenInfosByElementID = {}, t._tokenInfosByJWDID = {}
			}, t._tokenInfosByElementID = {}, t._tokenInfosByJWDID = {}, t
		}();
	window.addEventListener("clearContentBasedCache", i.clearCache), t.exports = i
}, function(t, r, e) {
	"use strict";
	var o = e(63),
		i = e(8),
		a = function() {
			function t(t) {
				var r = [];
				t && 0 === t.id.indexOf("jwd-") && (r = t.id.split("-")), 3 === r.length ? this._setAttributes(t, r) : (this.blockPrefix = null, this.blockId = -1, this.blockWordIndex = -1, this.groupId = -1, this.groupWordIndex = -1)
			}
			return t.isMarkableElement = function(r) {
				return null !== t._getContainerAttributes(r)
			}, t.elementIdFromParts = function(r, e) {
				return t.WordElementClass + "-" + r + "-" + e
			}, t.idIsValid = function(t) {
				if (t) {
					var r = t.match(this.idRegex);
					return null != r && r.length > 0
				}
				return !1
			}, t.prototype.isMarkableWord = function() {
				return null !== this.blockPrefix
			}, t.prototype.calculateRect = function() {
				var t = this.element;
				return t ? new o.JWLClientRect(t.getBoundingClientRect()) : null
			}, t.prototype._setAttributes = function(r, e) {
				this.groupId = Number(e[1]), this.groupWordIndex = Number(e[2]);
				var o = t._getContainerAttributes(r);
				o ? (this.blockPrefix = o[0], this.blockId = Number(o[1]), this.blockWordIndex = Number(o[2])) : (this.blockPrefix = null, this.blockId = -1, this.blockWordIndex = -1)
			}, t._getContainerAttributes = function(r) {
				if (!r) return null;
				var e = r.attributes.getNamedItem(t.WORD_ATTR_MARK);
				if (e) {
					var o = e.value.substr(0, 1),
						a = e.value.indexOf("-");
					if (-1 !== a && (o === i.BlockType.Paragraph || o === i.BlockType.Verse)) return [o, e.value.substr(1, a - 1), e.value.substr(a + 1)]
				}
				return null
			}, Object.defineProperty(t.prototype, "elementId", {
				get: function() {
					return t.WordElementClass + "-" + this.groupId + "-" + this.groupWordIndex
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "element", {
				get: function() {
					return document.getElementById(this.elementId)
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "elementAttrMarkId", {
				get: function() {
					return !this._elementAttrMarkId && this.blockPrefix && "number" == typeof this.blockId && this.blockId > -1 && "number" == typeof this.blockWordIndex && this.blockWordIndex > -1 && (this._elementAttrMarkId = this.blockPrefix + this.blockId + "-" + this.blockWordIndex), this._elementAttrMarkId
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "textContent", {
				get: function() {
					if (void 0 === this._textContent) {
						var t = this.element;
						t && (this._textContent = t.textContent)
					}
					return this._textContent
				},
				enumerable: !1,
				configurable: !0
			}), t.prototype.containsPoint = function(t, r) {
				return this.calculateRect().containsPoint(t, r)
			}, t.WORD_ATTR_MARK = "data-jwd-id", t.WordElementClass = "jwd", t.idRegex = /^jwd\-\d+\-\d+$/, t
		}();
	t.exports = a
}, function(t, r, e) {
	"use strict";
	var o = e(8),
		i = e(48),
		a = e(37),
		n = e(76),
		l = e(38),
		c = e(63),
		d = function() {
			function t() {}
			return t.getTokenInfos = function(r, e) {
				if (r.isBlank()) return null;
				for (var o = null, i = null, a = 0; a < r.ranges.length; a++) {
					var n = r.ranges[a],
						l = t.getBoundingTokenInfosForTokenRange(n);
					l && 2 === l.length && ((!o || l[0].groupWordIndex < o.groupWordIndex) && (o = l[0]), (!i || l[1].groupWordIndex > i.groupWordIndex) && (i = l[1]))
				}
				return o && i ? t.getTokenInfosFromJWDIDs(o.elementAttrMarkId, i.elementAttrMarkId, e) : null
			}, t.getTokenInfosForTokenRange = function(r, e) {
				if (r) {
					var o = t.getBoundingTokenInfosForTokenRange(r);
					if (o && 2 === o.length) {
						var i = o[0],
							a = o[1];
						return t.getTokenInfosFromElementIDs(i.elementId, a.elementId, e)
					}
				}
				return null
			}, t.getBoundingTokenInfosForTokenRange = function(r) {
				if (r) {
					var e = r.startTokenJWDID,
						o = null,
						i = null,
						n = null;
					if (r.hasEndTokenIndex() ? o = r.endTokenJWDID : n = t.getLastTokenInfo(r.blockPrefix, r.blockID), !i && e && (i = a.getTokenInfoByJWDID(e)), n || (o && (n = a.getTokenInfoByJWDID(o)), n || (n = t.getLastTokenInfo(r.blockPrefix, r.blockID)) && r.endTokenIndex <= n.blockWordIndex && (n = null)), i && n) return [i, n]
				}
				return null
			}, t.getLastTokenInfo = function(t, r) {
				var e, o = n.getDocumentBlockInfo(t + r);
				if (o && (e = a.getTokenInfoByElementID(o.endTokenElementID)), !e) {
					var i = document.querySelectorAll("[" + l.WORD_ATTR_MARK + "^='" + t + r + "-']");
					if (i && i.length > 0) {
						var c = i[i.length - 1];
						e = a.getTokenInfoByElementID(c.id)
					}
				}
				return e
			}, t.getTokenInfosFromJWDIDs = function(r, e, o) {
				if (r && e) {
					var i = a.getTokenInfoByJWDID(r),
						n = a.getTokenInfoByJWDID(e);
					if (i && n) return t.getTokenInfosFromElementIDs(i.elementId, n.elementId, o)
				}
				return []
			}, t.getTokenInfosFromElementIDs = function(t, r, e) {
				if (t && r) {
					for (var o = a.getTokenInfoByElementID(t), i = a.getTokenInfoByElementID(r), n = o.groupId, c = Math.min(o.groupWordIndex, i.groupWordIndex), d = Math.max(o.groupWordIndex, i.groupWordIndex), m = [], p = c; p <= d; p++) {
						var u = l.elementIdFromParts(n, p),
							g = a.getTokenInfoByElementID(u);
						!g || !0 !== e && !0 !== g.isMarkableWord() || m.push(g)
					}
					return m
				}
			}, t.getRangesBetweenTokenInfos = function(r, e) {
				if (r && e) {
					if (r.blockPrefix + r.blockId === e.blockPrefix + e.blockId) {
						var a = r.blockPrefix === o.BlockType.Paragraph ? r.blockId : void 0,
							n = r.blockPrefix === o.BlockType.Verse ? r.blockId : void 0;
						return [new i(a, n, Math.min(r.blockWordIndex, e.blockWordIndex), Math.max(r.blockWordIndex, e.blockWordIndex))]
					}
					var l = {},
						c = t.getTokenInfosFromJWDIDs(r.elementAttrMarkId, e.elementAttrMarkId);
					if (!c || 0 === c.length) return null;
					for (var d = 0, m = c; d < m.length; d++) {
						var p = m[d],
							u = p.blockPrefix + p.blockId,
							g = l[u];
						if (g) p.blockWordIndex < g.startTokenIndex && (g.startTokenIndex = p.blockWordIndex), p.blockWordIndex > g.endTokenIndex && (g.endTokenIndex = p.blockWordIndex);
						else {
							a = p.blockPrefix === o.BlockType.Paragraph ? p.blockId : void 0, n = p.blockPrefix === o.BlockType.Verse ? p.blockId : void 0;
							g = new i(a, n, p.blockWordIndex, p.blockWordIndex), l[u] = g
						}
					}
					var s = [];
					for (var b in l) l.hasOwnProperty(b) && s.push(l[b]);
					return s
				}
			}, t.getGroupID = function(t) {
				if (t.isBlank()) return null;
				var r = t.ranges[0],
					e = n.getDocumentBlockInfo(r.blockPrefix + r.blockID);
				if (e) return e.groupID;
				var o = t.ranges[0].startTokenJWDID,
					i = a.getTokenInfoByJWDID(o);
				return i ? i.groupId : null
			}, t.getGroupStartTokenIndex = function(r) {
				if (r.isBlank()) return null;
				var e = null,
					o = r.ranges[0],
					i = n.getDocumentBlockInfo(o.blockPrefix + o.blockID);
				if (i && (e = i.startTokenIndex), null == e) {
					var a = t.getTokenInfos(r, !0);
					a && a.length > 0 && (e = a[0].groupWordIndex)
				}
				return e
			}, t.getGroupEndTokenIndex = function(r) {
				if (r.isBlank()) return null;
				var e = null,
					o = r.ranges[0],
					i = n.getDocumentBlockInfo(o.blockPrefix + o.blockID);
				if (i && (e = i.endTokenIndex), null == e) {
					var a = t.getTokenInfos(r, !0);
					a && a.length > 0 && (e = a[a.length - 1].groupWordIndex)
				}
				return e
			}, t.isTokenInfoContained = function(r, e) {
				if (r && e && t.getGroupID(r) === e.groupId) {
					var o = t.getGroupStartTokenIndex(r),
						i = t.getGroupEndTokenIndex(r);
					return e.groupWordIndex >= o && e.groupWordIndex <= i
				}
				return !1
			}, t.getBoundingRect = function(t) {
				if (!t || t.isBlank()) return null;
				var r = this.getTokenInfos(t, !0);
				if (!r || 0 === r.length) return null;
				var e = r[0].calculateRect(),
					o = e.left,
					i = e.top,
					a = 0,
					n = 0;
				return r.forEach((function(t) {
					var r = t.calculateRect();
					r.left < o && (o = r.left), r.top < i && (i = r.top), r.maxX() > a && (a = r.maxX()), r.maxY() > n && (n = r.maxY())
				})), new c.JWLRect(o, i, a - o, n - i)
			}, t.getBoundingClientRect = function(r) {
				var e = t.getBoundingRect(r);
				return null === e ? null : (window.pageYOffset > 0 && (e.top -= window.pageYOffset), window.pageXOffset > 0 && (e.left -= window.pageXOffset), e)
			}, t.getFirstClientLineRect = function(r) {
				var e = t.getLineRects(r);
				if (e && e.length > 0) {
					var o = e[0];
					return window.pageYOffset > 0 && (o.top -= window.pageYOffset, o.maxY() < 0) ? null : o
				}
				return null
			}, t.getLineRects = function(t) {
				if (!t || t.isBlank()) return null;
				var r = this.getTokenInfos(t, !0);
				if (!r || 0 === r.length) return null;
				var e = [],
					o = null;
				return r.forEach((function(t) {
					var r = t.calculateRect();
					o ? r.top !== o.top ? (e.push(o), o = c.JWLRect.RectFromRect(r)) : r.left < o.left ? (o.left = r.left, o.width += r.width) : r.maxX() > o.maxX() && (o.width += r.width) : o = c.JWLRect.RectFromRect(r)
				})), o && e.push(o), e
			}, t.getTextContent = function(r) {
				if (!r || r.isBlank()) return null;
				var e = t.getTokenInfos(r, !0);
				return this.getTextContentOfTokenInfos(e, !0)
			}, t.getTextContentOfTokenInfos = function(t, r, e) {
				if (void 0 === r && (r = !1), void 0 === e && (e = !0), !t || 0 === t.length) return null;
				var o = [];
				return t.forEach((function(t, i) {
					var a = t.element,
						n = a.previousElementSibling;
					!r || e && 0 === i || 0 === t.blockWordIndex && n && (n.classList.contains("cl") || n.classList.contains("vl") || "STRONG" === n.tagName.toUpperCase()) && n.textContent && (o.length > 0 ? o.push(" " + n.textContent) : o.push(n.textContent));
					var l = a.parentElement;
					!n && l && l.classList.contains("v") && 0 !== i && o.push(" "), "\n" === t.textContent ? o.push(" ") : o.push(t.textContent)
				})), o.join("")
			}, t.isPointContained = function(t, r, e) {
				for (var o = !1, i = 0, a = t.ranges; i < a.length; i++) {
					var n = a[i],
						l = this.getBoundingTokenInfosForTokenRange(n);
					if (l && 2 === l.length) {
						var c = l[0].calculateRect(),
							d = l[1].calculateRect();
						if (r.y >= c.top && r.y <= d.maxY()) {
							o = !0;
							break
						}
					}
				}
				if (!o) return !1;
				if (t && !t.isBlank() && r && e && 0 !== e.length) {
					var m = void 0,
						p = e[0],
						u = e[e.length - 1];
					if (r.y < p.top || r.y > u.maxY()) return !1;
					for (var g = 0; g < e.length; g++) {
						var s = e[g];
						if (s.containsPoint(r.x, r.y)) return !0;
						if (e.length > 1 && s.top > r.y) {
							m = [e[g - 1], s];
							break
						}
					}
					if (m && m[0].left <= r.x && m[0].maxX() >= r.x && m[1].left <= r.x && m[1].maxX() >= r.x) return !0
				}
				return !1
			}, t.shouldMarkTokenInfo = function(t, r) {
				if (t.isMarkableWord()) return !0;
				var e = r.previousElementSibling;
				return !e || !e.classList.contains("m") && !e.classList.contains("fn")
			}, t
		}();
	t.exports = d
}, function(t, r, e) {
	var o = e(167),
		i = e(51);
	t.exports = function(t) {
		return o(i(t))
	}
}, function(t, r, e) {
	var o, i, a, n = e(299),
		l = e(6),
		c = e(15),
		d = e(23),
		m = e(10),
		p = e(53),
		u = e(42),
		g = l.WeakMap;
	if (n) {
		var s = new g,
			b = s.get,
			w = s.has,
			f = s.set;
		o = function(t, r) {
			return f.call(s, t, r), r
		}, i = function(t) {
			return b.call(s, t) || {}
		}, a = function(t) {
			return w.call(s, t)
		}
	} else {
		var h = p("state");
		u[h] = !0, o = function(t, r) {
			return d(t, h, r), r
		}, i = function(t) {
			return m(t, h) ? t[h] : {}
		}, a = function(t) {
			return m(t, h)
		}
	}
	t.exports = {
		set: o,
		get: i,
		has: a,
		enforce: function(t) {
			return a(t) ? i(t) : o(t, {})
		},
		getterFor: function(t) {
			return function(r) {
				var e;
				if (!c(r) || (e = i(r)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
				return e
			}
		}
	}
}, function(t, r) {
	t.exports = {}
}, function(t, r, e) {
	"use strict";
	var o = Object.prototype.hasOwnProperty,
		i = "~";

	function a() {}

	function n(t, r, e) {
		this.fn = t, this.context = r, this.once = e || !1
	}

	function l(t, r, e, o, a) {
		if ("function" != typeof e) throw new TypeError("The listener must be a function");
		var l = new n(e, o || t, a),
			c = i ? i + r : r;
		return t._events[c] ? t._events[c].fn ? t._events[c] = [t._events[c], l] : t._events[c].push(l) : (t._events[c] = l, t._eventsCount++), t
	}

	function c(t, r) {
		0 == --t._eventsCount ? t._events = new a : delete t._events[r]
	}

	function d() {
		this._events = new a, this._eventsCount = 0
	}
	Object.create && (a.prototype = Object.create(null), (new a).__proto__ || (i = !1)), d.prototype.eventNames = function() {
		var t, r, e = [];
		if (0 === this._eventsCount) return e;
		for (r in t = this._events) o.call(t, r) && e.push(i ? r.slice(1) : r);
		return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
	}, d.prototype.listeners = function(t) {
		var r = i ? i + t : t,
			e = this._events[r];
		if (!e) return [];
		if (e.fn) return [e.fn];
		for (var o = 0, a = e.length, n = new Array(a); o < a; o++) n[o] = e[o].fn;
		return n
	}, d.prototype.listenerCount = function(t) {
		var r = i ? i + t : t,
			e = this._events[r];
		return e ? e.fn ? 1 : e.length : 0
	}, d.prototype.emit = function(t, r, e, o, a, n) {
		var l = i ? i + t : t;
		if (!this._events[l]) return !1;
		var c, d, m = this._events[l],
			p = arguments.length;
		if (m.fn) {
			switch (m.once && this.removeListener(t, m.fn, void 0, !0), p) {
				case 1:
					return m.fn.call(m.context), !0;
				case 2:
					return m.fn.call(m.context, r), !0;
				case 3:
					return m.fn.call(m.context, r, e), !0;
				case 4:
					return m.fn.call(m.context, r, e, o), !0;
				case 5:
					return m.fn.call(m.context, r, e, o, a), !0;
				case 6:
					return m.fn.call(m.context, r, e, o, a, n), !0
			}
			for (d = 1, c = new Array(p - 1); d < p; d++) c[d - 1] = arguments[d];
			m.fn.apply(m.context, c)
		} else {
			var u, g = m.length;
			for (d = 0; d < g; d++) switch (m[d].once && this.removeListener(t, m[d].fn, void 0, !0), p) {
				case 1:
					m[d].fn.call(m[d].context);
					break;
				case 2:
					m[d].fn.call(m[d].context, r);
					break;
				case 3:
					m[d].fn.call(m[d].context, r, e);
					break;
				case 4:
					m[d].fn.call(m[d].context, r, e, o);
					break;
				default:
					if (!c)
						for (u = 1, c = new Array(p - 1); u < p; u++) c[u - 1] = arguments[u];
					m[d].fn.apply(m[d].context, c)
			}
		}
		return !0
	}, d.prototype.on = function(t, r, e) {
		return l(this, t, r, e, !1)
	}, d.prototype.once = function(t, r, e) {
		return l(this, t, r, e, !0)
	}, d.prototype.removeListener = function(t, r, e, o) {
		var a = i ? i + t : t;
		if (!this._events[a]) return this;
		if (!r) return c(this, a), this;
		var n = this._events[a];
		if (n.fn) n.fn !== r || o && !n.once || e && n.context !== e || c(this, a);
		else {
			for (var l = 0, d = [], m = n.length; l < m; l++)(n[l].fn !== r || o && !n[l].once || e && n[l].context !== e) && d.push(n[l]);
			d.length ? this._events[a] = 1 === d.length ? d[0] : d : c(this, a)
		}
		return this
	}, d.prototype.removeAllListeners = function(t) {
		var r;
		return t ? (r = i ? i + t : t, this._events[r] && c(this, r)) : (this._events = new a, this._eventsCount = 0), this
	}, d.prototype.off = d.prototype.removeListener, d.prototype.addListener = d.prototype.on, d.prefixed = i, d.EventEmitter = d, t.exports = d
}, function(t, r, e) {
	"use strict";
	var o = e(72);
	r.a = function() {
		for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++) r[e] = arguments[e];
		return Object(o.a)(r)
	}
}, function(t, r, e) {
	var o = e(6);
	t.exports = o
}, function(t, r, e) {
	t.exports = e(403)()
}, function(t, r) {
	t.exports = function(t, r) {
		return {
			enumerable: !(1 & t),
			configurable: !(2 & t),
			writable: !(4 & t),
			value: r
		}
	}
}, function(t, r, e) {
	"use strict";
	var o = e(8),
		i = function() {
			function t(t, r, e, o) {
				var i = this;
				void 0 === t && (t = void 0), void 0 === r && (r = void 0), void 0 === e && (e = void 0), void 0 === o && (o = void 0), this.hasStartTokenIndex = function() {
					return "number" == typeof i.startTokenIndex && i.startTokenIndex > -1
				}, this.hasEndTokenIndex = function() {
					return "number" == typeof i.endTokenIndex && i.endTokenIndex > -1
				}, this.isEncompassingWholeBlock = function() {
					return !i.hasStartTokenIndex() && !i.hasEndTokenIndex()
				}, this.isInVerse = function() {
					return "number" == typeof i.verseID && i.verseID > -1
				}, this.isInParagraph = function() {
					return "number" == typeof i.paragraphID && i.paragraphID > -1
				}, this.paragraphID = t, this.verseID = r, this.startTokenIndex = e, this.endTokenIndex = o
			}
			return t.TokenRangesFromDTTokenRanges = function(r) {
				if (r && r.length > 0) {
					for (var e = [], o = 0, i = r; o < i.length; o++) {
						var a = i[o],
							n = t.TokenRangeFromDTTokenRange(a);
						n && e.push(n)
					}
					return e
				}
				return []
			}, t.TokenRangeFromDTTokenRange = function(r) {
				if (r) {
					var e = void 0,
						o = void 0;
					return r.start && "number" == typeof r.start.token && r.start.token > -1 && (e = r.start.token), r.end && "number" == typeof r.end.token && r.end.token > -1 && (o = r.end.token), new t(r.pid, r.vid, e, o)
				}
				return null
			}, Object.defineProperty(t.prototype, "identifier", {
				get: function() {
					return this.startTokenJWDID
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "blockPrefix", {
				get: function() {
					return this.isInVerse() ? o.BlockType.Verse : o.BlockType.Paragraph
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "blockID", {
				get: function() {
					return this.isInVerse() ? this.verseID : this.paragraphID
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "startTokenJWDID", {
				get: function() {
					var t = this.hasStartTokenIndex() ? this.startTokenIndex : 0;
					return this.blockPrefix + this.blockID + "-" + t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "endTokenJWDID", {
				get: function() {
					return this.hasEndTokenIndex() ? this.blockPrefix + this.blockID + "-" + this.endTokenIndex : null
				},
				enumerable: !1,
				configurable: !0
			}), t.prototype.toJson = function() {
				var t = {};
				if (this.isInVerse()) t.vid = this.verseID;
				else {
					if (!this.isInParagraph()) return null;
					t.pid = this.paragraphID
				}
				return this.isEncompassingWholeBlock() || (this.hasStartTokenIndex() && (t.start = {
					token: this.startTokenIndex
				}), this.hasEndTokenIndex() && (t.end = {
					token: this.endTokenIndex
				})), t
			}, t.prototype.containsTokenAt = function(t, r, e) {
				return (this.paragraphID === t || this.verseID === r) && this.startTokenIndex <= e && this.endTokenIndex >= e
			}, t.prototype.matchesTokenRange = function(t) {
				return this.startTokenJWDID === t.startTokenJWDID && this.endTokenJWDID === t.endTokenJWDID
			}, t.prototype.isInSameBlockAsRange = function(t) {
				return !(!this.isInVerse() || !t.isInVerse() || this.verseID !== t.verseID) || !(!this.isInParagraph() || !t.isInParagraph() || this.paragraphID !== t.paragraphID)
			}, t.prototype.containsTokenRange = function(t) {
				return this.isInVerse() === t.isInVerse() && ((this.isInVerse() !== t.isInVerse() || this.verseID === t.verseID) && ((this.isInParagraph() !== t.isInParagraph() || this.paragraphID === t.paragraphID) && (!(this.hasStartTokenIndex() && (!t.hasStartTokenIndex() || this.startTokenIndex > t.startTokenIndex)) && !(this.hasEndTokenIndex() && (!t.hasEndTokenIndex() || this.endTokenIndex < t.endTokenIndex)))))
			}, t
		}();
	t.exports = i
}, function(t, r, e) {
	"use strict";

	function o(t) {
		return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function i(t) {
		return (i = "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? function(t) {
			return o(t)
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : o(t)
		})(t)
	}
	e.d(r, "a", (function() {
		return i
	}))
}, function(t, r, e) {
	"use strict";
	var o = e(63),
		i = function() {
			function t() {}
			return t.elementHasAncestorWithTag = function(t, r) {
				if (!t || !r || "" === r) return !1;
				for (; t;) {
					if (t.tagName && t.tagName.toUpperCase() === r) return !0;
					t = t.parentElement
				}
				return !1
			}, t.ancestorElementMatchingID = function(t, r) {
				if (!t || !r) return null;
				for (; t;) {
					if (r.exec(t.id)) return t;
					t = t.parentElement
				}
				return null
			}, t.ancestorElementWithAttribute = function(t, r) {
				if (!t || !r || "" === r) return null;
				for (; t;) {
					var e = t.getAttribute(r);
					if (null !== e && "" !== e) return t;
					t = t.parentElement
				}
				return null
			}, t.ancestorElementWithClass = function(r, e) {
				if (!r || !e || "" === e) return null;
				for (r = t.ancestorElementWithClassList(r); r;) {
					if (r.classList.contains(e)) return r;
					r = r.parentElement
				}
				return null
			}, t.ancestorElementWithClassList = function(t) {
				if (!t) return null;
				for ("undefined" != typeof SVGElementInstance && t instanceof SVGElementInstance && (t = t.correspondingUseElement); t;) {
					if (t.classList) return t;
					t = t.parentElement
				}
				return null
			}, t.textSnippetForSelector = function(t, r) {
				if (!t || !r) return null;
				if (!t.querySelector(r)) return null;
				var e = t.querySelector(r).cloneNode(!0);
				if (!e) return null;
				return [].map.call(e.querySelectorAll(".fn,.m"), (function(t) {
					t.parentNode.removeChild(t)
				})), e.textContent
			}, t.textSnippetForVerse = function(t, r) {
				if (!t || !r) return null;
				var e = "",
					o = r.split("-"),
					i = "";
				i = o.length < 3 ? o.join("-") : o[0] + "-" + o[1] + "-" + o[2] + "-";
				for (var a = t.querySelectorAll('span[id^="' + i + '"]'), n = 0; n < a.length; n++) {
					var l = a[n].cloneNode(!0);
					[].map.call(l.querySelectorAll(".fn,.m"), (function(t) {
						t.parentNode.removeChild(t)
					})), e.length > 0 && (e += " "), e += l.textContent
				}
				return e
			}, t.setViewportAttributes = function(t) {}, t.findChildElementMatchingIDNearestPoint = function(t, r, e, i) {
				if (!t) return null;
				var a = t.children;
				if (!a) return null;
				for (var n = null, l = null, c = 0; c < a.length; c++) {
					var d = a[c];
					if (r.exec(d.id)) {
						var m = new o.JWLClientRect(d.getBoundingClientRect()),
							p = null;
						i < m.top ? p = m.top - i : i > m.maxY() && (p = i - m.maxY()), (!n || p < n) && (n = p, l = d)
					}
				}
				return l
			}, t.findChildElementMatchingIDContainingPoint = function(t, r, e, i) {
				if (!t) return null;
				var a = t.children;
				if (!a) return null;
				for (var n = 0; n < a.length; n++) {
					var l = a[n];
					if (r.exec(l.id))
						if (new o.JWLClientRect(l.getBoundingClientRect()).containsPoint(e, i)) return l
				}
				return null
			}, t
		}();
	t.exports = i
}, function(t, r) {
	t.exports = function(t) {
		if (null == t) throw TypeError("Can't call method on " + t);
		return t
	}
}, function(t, r, e) {
	var o = e(6),
		i = e(23);
	t.exports = function(t, r) {
		try {
			i(o, t, r)
		} catch (e) {
			o[t] = r
		}
		return r
	}
}, function(t, r, e) {
	var o = e(85),
		i = e(55),
		a = o("keys");
	t.exports = function(t) {
		return a[t] || (a[t] = i(t))
	}
}, function(t, r) {
	t.exports = !1
}, function(t, r) {
	var e = 0,
		o = Math.random();
	t.exports = function(t) {
		return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++e + o).toString(36)
	}
}, function(t, r, e) {
	var o = e(45),
		i = e(6),
		a = function(t) {
			return "function" == typeof t ? t : void 0
		};
	t.exports = function(t, r) {
		return arguments.length < 2 ? a(o[t]) || a(i[t]) : o[t] && o[t][r] || i[t] && i[t][r]
	}
}, function(t, r) {
	var e = Math.ceil,
		o = Math.floor;
	t.exports = function(t) {
		return isNaN(t = +t) ? 0 : (t > 0 ? o : e)(t)
	}
}, function(t, r) {
	t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, r, e) {
	var o = {};
	o[e(9)("toStringTag")] = "z", t.exports = "[object z]" === String(o)
}, function(t, r, e) {
	var o = e(14).f,
		i = e(10),
		a = e(9)("toStringTag");
	t.exports = function(t, r, e) {
		t && !i(t = e ? t : t.prototype, a) && o(t, a, {
			configurable: !0,
			value: r
		})
	}
}, function(t, r, e) {
	var o, i = e(24),
		a = e(309),
		n = e(58),
		l = e(42),
		c = e(310),
		d = e(82),
		m = e(53),
		p = m("IE_PROTO"),
		u = function() {},
		g = function(t) {
			return "<script>" + t + "<\/script>"
		},
		s = function() {
			try {
				o = document.domain && new ActiveXObject("htmlfile")
			} catch (t) {}
			var t, r;
			s = o ? function(t) {
				t.write(g("")), t.close();
				var r = t.parentWindow.Object;
				return t = null, r
			}(o) : ((r = d("iframe")).style.display = "none", c.appendChild(r), r.src = String("javascript:"), (t = r.contentWindow.document).open(), t.write(g("document.F=Object")), t.close(), t.F);
			for (var e = n.length; e--;) delete s.prototype[n[e]];
			return s()
		};
	l[p] = !0, t.exports = Object.create || function(t, r) {
		var e;
		return null !== t ? (u.prototype = i(t), e = new u, u.prototype = null, e[p] = t) : e = s(), void 0 === r ? e : a(e, r)
	}
}, function(t, r, e) {
	"use strict";
	var o = e(65),
		i = e(312),
		a = e(96),
		n = e(93),
		l = e(60),
		c = e(23),
		d = e(31),
		m = e(9),
		p = e(54),
		u = e(32),
		g = e(95),
		s = g.IteratorPrototype,
		b = g.BUGGY_SAFARI_ITERATORS,
		w = m("iterator"),
		f = function() {
			return this
		};
	t.exports = function(t, r, e, m, g, h, j) {
		i(e, r, m);
		var x, y, S, v = function(t) {
				if (t === g && A) return A;
				if (!b && t in E) return E[t];
				switch (t) {
					case "keys":
					case "values":
					case "entries":
						return function() {
							return new e(this, t)
						}
				}
				return function() {
					return new e(this)
				}
			},
			O = r + " Iterator",
			k = !1,
			E = t.prototype,
			C = E[w] || E["@@iterator"] || g && E[g],
			A = !b && C || v(g),
			T = "Array" == r && E.entries || C;
		if (T && (x = a(T.call(new t)), s !== Object.prototype && x.next && (p || a(x) === s || (n ? n(x, s) : "function" != typeof x[w] && c(x, w, f)), l(x, O, !0, !0), p && (u[O] = f))), "values" == g && C && "values" !== C.name && (k = !0, A = function() {
				return C.call(this)
			}), p && !j || E[w] === A || c(E, w, A), u[r] = A, g)
			if (y = {
					values: v("values"),
					keys: h ? A : v("keys"),
					entries: v("entries")
				}, j)
				for (S in y)(b || k || !(S in E)) && d(E, S, y[S]);
			else o({
				target: r,
				proto: !0,
				forced: b || k
			}, y);
		return y
	}
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
		return (o = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(t, r) {
				t.__proto__ = r
			} || function(t, r) {
				for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
			})(t, r)
	}, function(t, r) {
		function e() {
			this.constructor = t
		}
		o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
	});
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.JWLClientRect = r.JWLRect = void 0;
	var a = function() {
		function t(t, r, e, o) {
			this.left = Math.round(t), this.top = Math.round(r), this.width = Math.round(e), this.height = Math.round(o)
		}
		return t.RectFromRect = function(r) {
			return new t(r.left, r.top, r.width, r.height)
		}, t.prototype.maxX = function() {
			return this.left + this.width
		}, t.prototype.maxY = function() {
			return this.top + this.height
		}, t.prototype.containsPoint = function(t, r) {
			return t >= this.left && t <= this.maxX() && r >= this.top && r <= this.maxY()
		}, t.prototype.containsRect = function(t) {
			return 0 !== t.width && 0 !== t.height && 0 !== this.width && 0 !== this.height && (this.left <= t.left && this.maxX() >= t.maxX() && this.top <= t.top && this.maxY() >= t.maxY())
		}, t.prototype.intersectsRect = function(t) {
			return 0 !== t.width && 0 !== t.height && 0 !== this.width && 0 !== this.height && !(this.maxX() < t.left || this.left > t.maxX() || this.maxY() < t.top || this.top > t.maxY())
		}, t.WindowRect = new t(0, 0, window.innerWidth, window.innerHeight), t
	}();
	r.JWLRect = a;
	var n = function(t) {
		function r(r) {
			return t.call(this, r.left, r.top + window.pageYOffset, r.width, r.height) || this
		}
		return i(r, t), r
	}(a);
	r.JWLClientRect = n
}, function(t, r, e) {
	"use strict";
	var o = e(48),
		i = e(8),
		a = function() {
			function t(t, r, e, o, a) {
				this.ranges = e, this.color = t, this.style = r, this.userMarkID = o, this.userMarkGuid = a, this.isPending = !1, this.style !== i.UserMarkStyle.Highlight && this.style !== i.UserMarkStyle.Underline && (this.style = i.UserMarkStyle.Highlight)
			}
			return t.UserMarkFromDTUserMark = function(r) {
				if (r) {
					var e = o.TokenRangesFromDTTokenRanges(r.ranges);
					return new t(r.color, r.style, e, r.id, r.guid)
				}
				return null
			}, Object.defineProperty(t.prototype, "identifier", {
				get: function() {
					return this._identifier || (this._identifier = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
						var r = 16 * Math.random() | 0;
						return ("x" === t ? r : 3 & r | 8).toString(16)
					}))), this._identifier
				},
				enumerable: !1,
				configurable: !0
			}), t.prototype.isBlank = function() {
				return !this.ranges || 0 === this.ranges.length
			}, t.prototype.containsTokenInfo = function(t) {
				if (!0 === this.isBlank() || !t) return !1;
				for (var r = 0, e = this.ranges; r < e.length; r++) {
					var o = e[r];
					if (t.blockPrefix === i.BlockType.Verse && o.isInVerse() && o.verseID === t.blockId && o.startTokenIndex <= t.blockWordIndex && o.endTokenIndex >= t.blockWordIndex) return !0;
					if (t.blockPrefix === i.BlockType.Paragraph && o.isInParagraph() && o.paragraphID === t.blockId && o.startTokenIndex <= t.blockWordIndex && o.endTokenIndex >= t.blockWordIndex) return !0
				}
				return !1
			}, t.prototype.matchesAttributesOfPersistedMark = function(t) {
				if (!t) return !1;
				if (this.color !== t.color || this.style !== t.style) return !1;
				if (!this.ranges || !t.ranges) return !1;
				if (this.ranges.length !== t.ranges.length) return !1;
				for (var r = this.ranges.slice(), e = o.TokenRangesFromDTTokenRanges(t.ranges); 0 !== e.length;) {
					for (var i = e.shift(), a = null, n = 0; n < r.length; n++)
						if (r[n].matchesTokenRange(i)) {
							a = r.splice(n, 1);
							break
						} if (!a) return !1
				}
				return 0 === r.length
			}, t.prototype.updateWithPersistedMark = function(t) {
				t && ("number" == typeof t.id && (this.userMarkID = t.id), "number" == typeof t.color && (this.color = t.color), "number" == typeof t.style && (this.style = t.style), t.ranges && 0 !== t.ranges.length && (this.ranges = o.TokenRangesFromDTTokenRanges(t.ranges)))
			}, t
		}();
	t.exports = a
}, function(t, r, e) {
	var o = e(6),
		i = e(79).f,
		a = e(23),
		n = e(31),
		l = e(52),
		c = e(300),
		d = e(87);
	t.exports = function(t, r) {
		var e, m, p, u, g, s = t.target,
			b = t.global,
			w = t.stat;
		if (e = b ? o : w ? o[s] || l(s, {}) : (o[s] || {}).prototype)
			for (m in r) {
				if (u = r[m], p = t.noTargetGet ? (g = i(e, m)) && g.value : e[m], !d(b ? m : s + (w ? "." : "#") + m, t.forced) && void 0 !== p) {
					if (typeof u == typeof p) continue;
					c(u, p)
				}(t.sham || p && p.sham) && a(u, "sham", !0), n(e, m, u, t)
			}
	}
}, function(t, r, e) {
	"use strict";
	e.d(r, "a", (function() {
		return Z
	})), e.d(r, "b", (function() {
		return Q
	})), e.d(r, "c", (function() {
		return E
	})), e.d(r, "d", (function() {
		return q
	}));
	var o = e(36),
		i = e(5),
		a = e(71),
		n = e(27),
		l = e(16),
		c = e(17),
		d = e(18),
		m = e(19),
		p = e(20),
		u = e(1),
		g = e(3),
		s = e(2),
		b = e.n(s),
		w = e(164),
		f = e(4),
		h = e(26),
		j = e(12),
		x = e(7),
		y = e(44),
		S = [{
			base: "A",
			letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
		}, {
			base: "AA",
			letters: /[\uA732]/g
		}, {
			base: "AE",
			letters: /[\u00C6\u01FC\u01E2]/g
		}, {
			base: "AO",
			letters: /[\uA734]/g
		}, {
			base: "AU",
			letters: /[\uA736]/g
		}, {
			base: "AV",
			letters: /[\uA738\uA73A]/g
		}, {
			base: "AY",
			letters: /[\uA73C]/g
		}, {
			base: "B",
			letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
		}, {
			base: "C",
			letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
		}, {
			base: "D",
			letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
		}, {
			base: "DZ",
			letters: /[\u01F1\u01C4]/g
		}, {
			base: "Dz",
			letters: /[\u01F2\u01C5]/g
		}, {
			base: "E",
			letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
		}, {
			base: "F",
			letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
		}, {
			base: "G",
			letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
		}, {
			base: "H",
			letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
		}, {
			base: "I",
			letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
		}, {
			base: "J",
			letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
		}, {
			base: "K",
			letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
		}, {
			base: "L",
			letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
		}, {
			base: "LJ",
			letters: /[\u01C7]/g
		}, {
			base: "Lj",
			letters: /[\u01C8]/g
		}, {
			base: "M",
			letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
		}, {
			base: "N",
			letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
		}, {
			base: "NJ",
			letters: /[\u01CA]/g
		}, {
			base: "Nj",
			letters: /[\u01CB]/g
		}, {
			base: "O",
			letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
		}, {
			base: "OI",
			letters: /[\u01A2]/g
		}, {
			base: "OO",
			letters: /[\uA74E]/g
		}, {
			base: "OU",
			letters: /[\u0222]/g
		}, {
			base: "P",
			letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
		}, {
			base: "Q",
			letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
		}, {
			base: "R",
			letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
		}, {
			base: "S",
			letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
		}, {
			base: "T",
			letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
		}, {
			base: "TZ",
			letters: /[\uA728]/g
		}, {
			base: "U",
			letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
		}, {
			base: "V",
			letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
		}, {
			base: "VY",
			letters: /[\uA760]/g
		}, {
			base: "W",
			letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
		}, {
			base: "X",
			letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
		}, {
			base: "Y",
			letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
		}, {
			base: "Z",
			letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
		}, {
			base: "a",
			letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
		}, {
			base: "aa",
			letters: /[\uA733]/g
		}, {
			base: "ae",
			letters: /[\u00E6\u01FD\u01E3]/g
		}, {
			base: "ao",
			letters: /[\uA735]/g
		}, {
			base: "au",
			letters: /[\uA737]/g
		}, {
			base: "av",
			letters: /[\uA739\uA73B]/g
		}, {
			base: "ay",
			letters: /[\uA73D]/g
		}, {
			base: "b",
			letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
		}, {
			base: "c",
			letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
		}, {
			base: "d",
			letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
		}, {
			base: "dz",
			letters: /[\u01F3\u01C6]/g
		}, {
			base: "e",
			letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
		}, {
			base: "f",
			letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
		}, {
			base: "g",
			letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
		}, {
			base: "h",
			letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
		}, {
			base: "hv",
			letters: /[\u0195]/g
		}, {
			base: "i",
			letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
		}, {
			base: "j",
			letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
		}, {
			base: "k",
			letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
		}, {
			base: "l",
			letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
		}, {
			base: "lj",
			letters: /[\u01C9]/g
		}, {
			base: "m",
			letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
		}, {
			base: "n",
			letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
		}, {
			base: "nj",
			letters: /[\u01CC]/g
		}, {
			base: "o",
			letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
		}, {
			base: "oi",
			letters: /[\u01A3]/g
		}, {
			base: "ou",
			letters: /[\u0223]/g
		}, {
			base: "oo",
			letters: /[\uA74F]/g
		}, {
			base: "p",
			letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
		}, {
			base: "q",
			letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
		}, {
			base: "r",
			letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
		}, {
			base: "s",
			letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
		}, {
			base: "t",
			letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
		}, {
			base: "tz",
			letters: /[\uA729]/g
		}, {
			base: "u",
			letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
		}, {
			base: "v",
			letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
		}, {
			base: "vy",
			letters: /[\uA761]/g
		}, {
			base: "w",
			letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
		}, {
			base: "x",
			letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
		}, {
			base: "y",
			letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
		}, {
			base: "z",
			letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
		}],
		v = function(t) {
			for (var r = 0; r < S.length; r++) t = t.replace(S[r].letters, S[r].base);
			return t
		},
		O = function(t) {
			return t.replace(/^\s+|\s+$/g, "")
		},
		k = function(t) {
			return "".concat(t.label, " ").concat(t.value)
		},
		E = function(t) {
			return function(r, e) {
				var o = Object(n.a)({
						ignoreCase: !0,
						ignoreAccents: !0,
						stringify: k,
						trim: !0,
						matchFrom: "any"
					}, t),
					i = o.ignoreCase,
					a = o.ignoreAccents,
					l = o.stringify,
					c = o.trim,
					d = o.matchFrom,
					m = c ? O(e) : e,
					p = c ? O(l(r)) : l(r);
				return i && (m = m.toLowerCase(), p = p.toLowerCase()), a && (m = v(m), p = v(p)), "start" === d ? p.substr(0, m.length) === m : p.indexOf(m) > -1
			}
		},
		C = {
			name: "1laao21-a11yText",
			styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;"
		},
		A = function(t) {
			return Object(f.c)("span", Object(i.a)({
				css: C
			}, t))
		},
		T = function(t) {
			function r() {
				return Object(l.a)(this, r), Object(d.a)(this, Object(m.a)(r).apply(this, arguments))
			}
			return Object(p.a)(r, t), Object(c.a)(r, [{
				key: "render",
				value: function() {
					var t = this.props,
						r = (t.in, t.out, t.onExited, t.appear, t.enter, t.exit, t.innerRef),
						e = (t.emotion, Object(o.a)(t, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]));
					return Object(f.c)("input", Object(i.a)({
						ref: r
					}, e, {
						css: Object(y.a)({
							label: "dummyInput",
							background: 0,
							border: 0,
							fontSize: "inherit",
							outline: 0,
							padding: 0,
							width: 1,
							color: "transparent",
							left: -100,
							opacity: 0,
							position: "relative",
							transform: "scale(0)"
						}, "")
					}))
				}
			}]), r
		}(s.Component),
		I = function(t) {
			function r() {
				return Object(l.a)(this, r), Object(d.a)(this, Object(m.a)(r).apply(this, arguments))
			}
			return Object(p.a)(r, t), Object(c.a)(r, [{
				key: "componentDidMount",
				value: function() {
					this.props.innerRef(Object(h.findDOMNode)(this))
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.props.innerRef(null)
				}
			}, {
				key: "render",
				value: function() {
					return this.props.children
				}
			}]), r
		}(s.Component),
		N = ["boxSizing", "height", "overflow", "paddingRight", "position"],
		_ = {
			boxSizing: "border-box",
			overflow: "hidden",
			position: "relative",
			height: "100%"
		};

	function R(t) {
		t.preventDefault()
	}

	function M(t) {
		t.stopPropagation()
	}

	function L() {
		var t = this.scrollTop,
			r = this.scrollHeight,
			e = t + this.offsetHeight;
		0 === t ? this.scrollTop = 1 : e === r && (this.scrollTop = t - 1)
	}

	function D() {
		return "ontouchstart" in window || navigator.maxTouchPoints
	}
	var P = !(!window.document || !window.document.createElement),
		z = 0,
		H = function(t) {
			function r() {
				var t, e;
				Object(l.a)(this, r);
				for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
				return e = Object(d.a)(this, (t = Object(m.a)(r)).call.apply(t, [this].concat(i))), Object(g.a)(Object(u.a)(Object(u.a)(e)), "originalStyles", {}), Object(g.a)(Object(u.a)(Object(u.a)(e)), "listenerOptions", {
					capture: !1,
					passive: !1
				}), e
			}
			return Object(p.a)(r, t), Object(c.a)(r, [{
				key: "componentDidMount",
				value: function() {
					var t = this;
					if (P) {
						var r = this.props,
							e = r.accountForScrollbars,
							o = r.touchScrollTarget,
							i = document.body,
							a = i && i.style;
						if (e && N.forEach((function(r) {
								var e = a && a[r];
								t.originalStyles[r] = e
							})), e && z < 1) {
							var n = parseInt(this.originalStyles.paddingRight, 10) || 0,
								l = document.body ? document.body.clientWidth : 0,
								c = window.innerWidth - l + n || 0;
							Object.keys(_).forEach((function(t) {
								var r = _[t];
								a && (a[t] = r)
							})), a && (a.paddingRight = "".concat(c, "px"))
						}
						i && D() && (i.addEventListener("touchmove", R, this.listenerOptions), o && (o.addEventListener("touchstart", L, this.listenerOptions), o.addEventListener("touchmove", M, this.listenerOptions))), z += 1
					}
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					var t = this;
					if (P) {
						var r = this.props,
							e = r.accountForScrollbars,
							o = r.touchScrollTarget,
							i = document.body,
							a = i && i.style;
						z = Math.max(z - 1, 0), e && z < 1 && N.forEach((function(r) {
							var e = t.originalStyles[r];
							a && (a[r] = e)
						})), i && D() && (i.removeEventListener("touchmove", R, this.listenerOptions), o && (o.removeEventListener("touchstart", L, this.listenerOptions), o.removeEventListener("touchmove", M, this.listenerOptions)))
					}
				}
			}, {
				key: "render",
				value: function() {
					return null
				}
			}]), r
		}(s.Component);
	Object(g.a)(H, "defaultProps", {
		accountForScrollbars: !0
	});
	var G = {
			name: "1dsbpcp",
			styles: "position:fixed;left:0;bottom:0;right:0;top:0;"
		},
		B = function(t) {
			function r() {
				var t, e;
				Object(l.a)(this, r);
				for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
				return e = Object(d.a)(this, (t = Object(m.a)(r)).call.apply(t, [this].concat(i))), Object(g.a)(Object(u.a)(Object(u.a)(e)), "state", {
					touchScrollTarget: null
				}), Object(g.a)(Object(u.a)(Object(u.a)(e)), "getScrollTarget", (function(t) {
					t !== e.state.touchScrollTarget && e.setState({
						touchScrollTarget: t
					})
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "blurSelectInput", (function() {
					document.activeElement && document.activeElement.blur()
				})), e
			}
			return Object(p.a)(r, t), Object(c.a)(r, [{
				key: "render",
				value: function() {
					var t = this.props,
						r = t.children,
						e = t.isEnabled,
						o = this.state.touchScrollTarget;
					return e ? Object(f.c)("div", null, Object(f.c)("div", {
						onClick: this.blurSelectInput,
						css: G
					}), Object(f.c)(I, {
						innerRef: this.getScrollTarget
					}, r), o ? Object(f.c)(H, {
						touchScrollTarget: o
					}) : null) : r
				}
			}]), r
		}(s.PureComponent),
		U = function(t) {
			function r() {
				var t, e;
				Object(l.a)(this, r);
				for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
				return e = Object(d.a)(this, (t = Object(m.a)(r)).call.apply(t, [this].concat(i))), Object(g.a)(Object(u.a)(Object(u.a)(e)), "isBottom", !1), Object(g.a)(Object(u.a)(Object(u.a)(e)), "isTop", !1), Object(g.a)(Object(u.a)(Object(u.a)(e)), "scrollTarget", void 0), Object(g.a)(Object(u.a)(Object(u.a)(e)), "touchStart", void 0), Object(g.a)(Object(u.a)(Object(u.a)(e)), "cancelScroll", (function(t) {
					t.preventDefault(), t.stopPropagation()
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "handleEventDelta", (function(t, r) {
					var o = e.props,
						i = o.onBottomArrive,
						a = o.onBottomLeave,
						n = o.onTopArrive,
						l = o.onTopLeave,
						c = e.scrollTarget,
						d = c.scrollTop,
						m = c.scrollHeight,
						p = c.clientHeight,
						u = e.scrollTarget,
						g = r > 0,
						s = m - p - d,
						b = !1;
					s > r && e.isBottom && (a && a(t), e.isBottom = !1), g && e.isTop && (l && l(t), e.isTop = !1), g && r > s ? (i && !e.isBottom && i(t), u.scrollTop = m, b = !0, e.isBottom = !0) : !g && -r > d && (n && !e.isTop && n(t), u.scrollTop = 0, b = !0, e.isTop = !0), b && e.cancelScroll(t)
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onWheel", (function(t) {
					e.handleEventDelta(t, t.deltaY)
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onTouchStart", (function(t) {
					e.touchStart = t.changedTouches[0].clientY
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onTouchMove", (function(t) {
					var r = e.touchStart - t.changedTouches[0].clientY;
					e.handleEventDelta(t, r)
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "getScrollTarget", (function(t) {
					e.scrollTarget = t
				})), e
			}
			return Object(p.a)(r, t), Object(c.a)(r, [{
				key: "componentDidMount",
				value: function() {
					this.startListening(this.scrollTarget)
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.stopListening(this.scrollTarget)
				}
			}, {
				key: "startListening",
				value: function(t) {
					t && (t.scrollHeight <= t.clientHeight || ("function" == typeof t.addEventListener && t.addEventListener("wheel", this.onWheel, !1), "function" == typeof t.addEventListener && t.addEventListener("touchstart", this.onTouchStart, !1), "function" == typeof t.addEventListener && t.addEventListener("touchmove", this.onTouchMove, !1)))
				}
			}, {
				key: "stopListening",
				value: function(t) {
					t.scrollHeight <= t.clientHeight || ("function" == typeof t.removeEventListener && t.removeEventListener("wheel", this.onWheel, !1), "function" == typeof t.removeEventListener && t.removeEventListener("touchstart", this.onTouchStart, !1), "function" == typeof t.removeEventListener && t.removeEventListener("touchmove", this.onTouchMove, !1))
				}
			}, {
				key: "render",
				value: function() {
					return b.a.createElement(I, {
						innerRef: this.getScrollTarget
					}, this.props.children)
				}
			}]), r
		}(s.Component),
		W = function(t) {
			function r() {
				return Object(l.a)(this, r), Object(d.a)(this, Object(m.a)(r).apply(this, arguments))
			}
			return Object(p.a)(r, t), Object(c.a)(r, [{
				key: "render",
				value: function() {
					var t = this.props,
						r = t.isEnabled,
						e = Object(o.a)(t, ["isEnabled"]);
					return r ? b.a.createElement(U, e) : this.props.children
				}
			}]), r
		}(s.Component);
	Object(g.a)(W, "defaultProps", {
		isEnabled: !0
	});
	var F = function(t) {
			var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				e = r.isSearchable,
				o = r.isMulti,
				i = r.label,
				a = r.isDisabled;
			switch (t) {
				case "menu":
					return "Use Up and Down to choose options".concat(a ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu, press Tab to select the option and exit the menu.");
				case "input":
					return "".concat(i || "Select", " is focused ").concat(e ? ",type to refine list" : "", ", press Down to open the menu, ").concat(o ? " press left to focus selected values" : "");
				case "value":
					return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value"
			}
		},
		V = function(t, r) {
			var e = r.value,
				o = r.isDisabled;
			if (e) switch (t) {
				case "deselect-option":
				case "pop-value":
				case "remove-value":
					return "option ".concat(e, ", deselected.");
				case "select-option":
					return "option ".concat(e, o ? " is disabled. Select another option." : ", selected.")
			}
		},
		K = function(t) {
			return !!t.isDisabled
		},
		Y = {
			clearIndicator: x.d,
			container: x.b,
			control: x.c,
			dropdownIndicator: x.e,
			group: x.h,
			groupHeading: x.f,
			indicatorsContainer: x.j,
			indicatorSeparator: x.g,
			input: x.i,
			loadingIndicator: x.m,
			loadingMessage: x.k,
			menu: x.n,
			menuList: x.l,
			menuPortal: x.o,
			multiValue: x.p,
			multiValueLabel: x.q,
			multiValueRemove: x.r,
			noOptionsMessage: x.s,
			option: x.t,
			placeholder: x.u,
			singleValue: x.v,
			valueContainer: x.w
		};

	function q(t) {
		var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			e = Object(n.a)({}, t);
		return Object.keys(r).forEach((function(o) {
			t[o] ? e[o] = function(e, i) {
				return r[o](t[o](e, i), i)
			} : e[o] = r[o]
		})), e
	}
	var Q = {
			borderRadius: 4,
			colors: {
				primary: "#2684FF",
				primary75: "#4C9AFF",
				primary50: "#B2D4FF",
				primary25: "#DEEBFF",
				danger: "#DE350B",
				dangerLight: "#FFBDAD",
				neutral0: "hsl(0, 0%, 100%)",
				neutral5: "hsl(0, 0%, 95%)",
				neutral10: "hsl(0, 0%, 90%)",
				neutral20: "hsl(0, 0%, 80%)",
				neutral30: "hsl(0, 0%, 70%)",
				neutral40: "hsl(0, 0%, 60%)",
				neutral50: "hsl(0, 0%, 50%)",
				neutral60: "hsl(0, 0%, 40%)",
				neutral70: "hsl(0, 0%, 30%)",
				neutral80: "hsl(0, 0%, 20%)",
				neutral90: "hsl(0, 0%, 10%)"
			},
			spacing: {
				baseUnit: 4,
				controlHeight: 38,
				menuGutter: 8
			}
		},
		J = {
			backspaceRemovesValue: !0,
			blurInputOnSelect: Object(j.i)(),
			captureMenuScroll: !Object(j.i)(),
			closeMenuOnSelect: !0,
			closeMenuOnScroll: !1,
			components: {},
			controlShouldRenderValue: !0,
			escapeClearsValue: !1,
			filterOption: E(),
			formatGroupLabel: function(t) {
				return t.label
			},
			getOptionLabel: function(t) {
				return t.label
			},
			getOptionValue: function(t) {
				return t.value
			},
			isDisabled: !1,
			isLoading: !1,
			isMulti: !1,
			isRtl: !1,
			isSearchable: !0,
			isOptionDisabled: K,
			loadingMessage: function() {
				return "Loading..."
			},
			maxMenuHeight: 300,
			minMenuHeight: 140,
			menuIsOpen: !1,
			menuPlacement: "bottom",
			menuPosition: "absolute",
			menuShouldBlockScroll: !1,
			menuShouldScrollIntoView: !Object(j.d)(),
			noOptionsMessage: function() {
				return "No options"
			},
			openMenuOnFocus: !1,
			openMenuOnClick: !0,
			options: [],
			pageSize: 5,
			placeholder: "Select...",
			screenReaderStatus: function(t) {
				var r = t.count;
				return "".concat(r, " result").concat(1 !== r ? "s" : "", " available")
			},
			styles: {},
			tabIndex: "0",
			tabSelectsValue: !0
		},
		X = 1,
		Z = function(t) {
			function r(t) {
				var e;
				Object(l.a)(this, r), e = Object(d.a)(this, Object(m.a)(r).call(this, t)), Object(g.a)(Object(u.a)(Object(u.a)(e)), "state", {
					ariaLiveSelection: "",
					ariaLiveContext: "",
					focusedOption: null,
					focusedValue: null,
					inputIsHidden: !1,
					isFocused: !1,
					menuOptions: {
						render: [],
						focusable: []
					},
					selectValue: []
				}), Object(g.a)(Object(u.a)(Object(u.a)(e)), "blockOptionHover", !1), Object(g.a)(Object(u.a)(Object(u.a)(e)), "isComposing", !1), Object(g.a)(Object(u.a)(Object(u.a)(e)), "clearFocusValueOnUpdate", !1), Object(g.a)(Object(u.a)(Object(u.a)(e)), "commonProps", void 0), Object(g.a)(Object(u.a)(Object(u.a)(e)), "components", void 0), Object(g.a)(Object(u.a)(Object(u.a)(e)), "hasGroups", !1), Object(g.a)(Object(u.a)(Object(u.a)(e)), "initialTouchX", 0), Object(g.a)(Object(u.a)(Object(u.a)(e)), "initialTouchY", 0), Object(g.a)(Object(u.a)(Object(u.a)(e)), "inputIsHiddenAfterUpdate", void 0), Object(g.a)(Object(u.a)(Object(u.a)(e)), "instancePrefix", ""), Object(g.a)(Object(u.a)(Object(u.a)(e)), "openAfterFocus", !1), Object(g.a)(Object(u.a)(Object(u.a)(e)), "scrollToFocusedOptionOnUpdate", !1), Object(g.a)(Object(u.a)(Object(u.a)(e)), "userIsDragging", void 0), Object(g.a)(Object(u.a)(Object(u.a)(e)), "controlRef", null), Object(g.a)(Object(u.a)(Object(u.a)(e)), "getControlRef", (function(t) {
					e.controlRef = t
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "focusedOptionRef", null), Object(g.a)(Object(u.a)(Object(u.a)(e)), "getFocusedOptionRef", (function(t) {
					e.focusedOptionRef = t
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "menuListRef", null), Object(g.a)(Object(u.a)(Object(u.a)(e)), "getMenuListRef", (function(t) {
					e.menuListRef = t
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "inputRef", null), Object(g.a)(Object(u.a)(Object(u.a)(e)), "getInputRef", (function(t) {
					e.inputRef = t
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "cacheComponents", (function(t) {
					e.components = Object(x.x)({
						components: t
					})
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "focus", e.focusInput), Object(g.a)(Object(u.a)(Object(u.a)(e)), "blur", e.blurInput), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onChange", (function(t, r) {
					var o = e.props,
						i = o.onChange,
						a = o.name;
					i(t, Object(n.a)({}, r, {
						name: a
					}))
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "setValue", (function(t) {
					var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "set-value",
						o = arguments.length > 2 ? arguments[2] : void 0,
						i = e.props,
						a = i.closeMenuOnSelect,
						n = i.isMulti;
					e.onInputChange("", {
						action: "set-value"
					}), a && (e.inputIsHiddenAfterUpdate = !n, e.onMenuClose()), e.clearFocusValueOnUpdate = !0, e.onChange(t, {
						action: r,
						option: o
					})
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "selectOption", (function(t) {
					var r = e.props,
						o = r.blurInputOnSelect,
						i = r.isMulti,
						n = e.state.selectValue;
					if (i)
						if (e.isOptionSelected(t, n)) {
							var l = e.getOptionValue(t);
							e.setValue(n.filter((function(t) {
								return e.getOptionValue(t) !== l
							})), "deselect-option", t), e.announceAriaLiveSelection({
								event: "deselect-option",
								context: {
									value: e.getOptionLabel(t)
								}
							})
						} else e.isOptionDisabled(t, n) ? e.announceAriaLiveSelection({
							event: "select-option",
							context: {
								value: e.getOptionLabel(t),
								isDisabled: !0
							}
						}) : (e.setValue([].concat(Object(a.a)(n), [t]), "select-option", t), e.announceAriaLiveSelection({
							event: "select-option",
							context: {
								value: e.getOptionLabel(t)
							}
						}));
					else e.isOptionDisabled(t, n) ? e.announceAriaLiveSelection({
						event: "select-option",
						context: {
							value: e.getOptionLabel(t),
							isDisabled: !0
						}
					}) : (e.setValue(t, "select-option"), e.announceAriaLiveSelection({
						event: "select-option",
						context: {
							value: e.getOptionLabel(t)
						}
					}));
					o && e.blurInput()
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "removeValue", (function(t) {
					var r = e.state.selectValue,
						o = e.getOptionValue(t),
						i = r.filter((function(t) {
							return e.getOptionValue(t) !== o
						}));
					e.onChange(i.length ? i : null, {
						action: "remove-value",
						removedValue: t
					}), e.announceAriaLiveSelection({
						event: "remove-value",
						context: {
							value: t ? e.getOptionLabel(t) : ""
						}
					}), e.focusInput()
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "clearValue", (function() {
					var t = e.props.isMulti;
					e.onChange(t ? [] : null, {
						action: "clear"
					})
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "popValue", (function() {
					var t = e.state.selectValue,
						r = t[t.length - 1],
						o = t.slice(0, t.length - 1);
					e.announceAriaLiveSelection({
						event: "pop-value",
						context: {
							value: r ? e.getOptionLabel(r) : ""
						}
					}), e.onChange(o.length ? o : null, {
						action: "pop-value",
						removedValue: r
					})
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "getOptionLabel", (function(t) {
					return e.props.getOptionLabel(t)
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "getOptionValue", (function(t) {
					return e.props.getOptionValue(t)
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "getStyles", (function(t, r) {
					var o = Y[t](r);
					o.boxSizing = "border-box";
					var i = e.props.styles[t];
					return i ? i(o, r) : o
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "getElementId", (function(t) {
					return "".concat(e.instancePrefix, "-").concat(t)
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "getActiveDescendentId", (function() {
					var t = e.props.menuIsOpen,
						r = e.state,
						o = r.menuOptions,
						i = r.focusedOption;
					if (i && t) {
						var a = o.focusable.indexOf(i),
							n = o.render[a];
						return n && n.key
					}
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "announceAriaLiveSelection", (function(t) {
					var r = t.event,
						o = t.context;
					e.setState({
						ariaLiveSelection: V(r, o)
					})
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "announceAriaLiveContext", (function(t) {
					var r = t.event,
						o = t.context;
					e.setState({
						ariaLiveContext: F(r, Object(n.a)({}, o, {
							label: e.props["aria-label"]
						}))
					})
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onMenuMouseDown", (function(t) {
					0 === t.button && (t.stopPropagation(), t.preventDefault(), e.focusInput())
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onMenuMouseMove", (function(t) {
					e.blockOptionHover = !1
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onControlMouseDown", (function(t) {
					var r = e.props.openMenuOnClick;
					e.state.isFocused ? e.props.menuIsOpen ? "INPUT" !== t.target.tagName && e.onMenuClose() : r && e.openMenu("first") : (r && (e.openAfterFocus = !0), e.focusInput()), "INPUT" !== t.target.tagName && t.preventDefault()
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onDropdownIndicatorMouseDown", (function(t) {
					if (!(t && "mousedown" === t.type && 0 !== t.button || e.props.isDisabled)) {
						var r = e.props,
							o = r.isMulti,
							i = r.menuIsOpen;
						e.focusInput(), i ? (e.inputIsHiddenAfterUpdate = !o, e.onMenuClose()) : e.openMenu("first"), t.preventDefault(), t.stopPropagation()
					}
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onClearIndicatorMouseDown", (function(t) {
					t && "mousedown" === t.type && 0 !== t.button || (e.clearValue(), t.stopPropagation(), e.openAfterFocus = !1, "touchend" === t.type ? e.focusInput() : setTimeout((function() {
						return e.focusInput()
					})))
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onScroll", (function(t) {
					"boolean" == typeof e.props.closeMenuOnScroll ? t.target instanceof HTMLElement && Object(j.e)(t.target) && e.props.onMenuClose() : "function" == typeof e.props.closeMenuOnScroll && e.props.closeMenuOnScroll(t) && e.props.onMenuClose()
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onCompositionStart", (function() {
					e.isComposing = !0
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onCompositionEnd", (function() {
					e.isComposing = !1
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onTouchStart", (function(t) {
					var r = t.touches.item(0);
					r && (e.initialTouchX = r.clientX, e.initialTouchY = r.clientY, e.userIsDragging = !1)
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onTouchMove", (function(t) {
					var r = t.touches.item(0);
					if (r) {
						var o = Math.abs(r.clientX - e.initialTouchX),
							i = Math.abs(r.clientY - e.initialTouchY);
						e.userIsDragging = o > 5 || i > 5
					}
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onTouchEnd", (function(t) {
					e.userIsDragging || (e.controlRef && !e.controlRef.contains(t.target) && e.menuListRef && !e.menuListRef.contains(t.target) && e.onMenuClose(), e.initialTouchX = 0, e.initialTouchY = 0)
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onControlTouchEnd", (function(t) {
					e.userIsDragging || e.onControlMouseDown(t)
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onClearIndicatorTouchEnd", (function(t) {
					e.userIsDragging || e.onClearIndicatorMouseDown(t)
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onDropdownIndicatorTouchEnd", (function(t) {
					e.userIsDragging || e.onDropdownIndicatorMouseDown(t)
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "handleInputChange", (function(t) {
					var r = t.currentTarget.value;
					e.inputIsHiddenAfterUpdate = !1, e.onInputChange(r, {
						action: "input-change"
					}), e.onMenuOpen()
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onInputFocus", (function(t) {
					var r = e.props,
						o = r.isSearchable,
						i = r.isMulti;
					e.props.onFocus && e.props.onFocus(t), e.inputIsHiddenAfterUpdate = !1, e.announceAriaLiveContext({
						event: "input",
						context: {
							isSearchable: o,
							isMulti: i
						}
					}), e.setState({
						isFocused: !0
					}), (e.openAfterFocus || e.props.openMenuOnFocus) && e.openMenu("first"), e.openAfterFocus = !1
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onInputBlur", (function(t) {
					e.menuListRef && e.menuListRef.contains(document.activeElement) ? e.inputRef.focus() : (e.props.onBlur && e.props.onBlur(t), e.onInputChange("", {
						action: "input-blur"
					}), e.onMenuClose(), e.setState({
						focusedValue: null,
						isFocused: !1
					}))
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onOptionHover", (function(t) {
					e.blockOptionHover || e.state.focusedOption === t || e.setState({
						focusedOption: t
					})
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "shouldHideSelectedOptions", (function() {
					var t = e.props,
						r = t.hideSelectedOptions,
						o = t.isMulti;
					return void 0 === r ? o : r
				})), Object(g.a)(Object(u.a)(Object(u.a)(e)), "onKeyDown", (function(t) {
					var r = e.props,
						o = r.isMulti,
						i = r.backspaceRemovesValue,
						a = r.escapeClearsValue,
						n = r.inputValue,
						l = r.isClearable,
						c = r.isDisabled,
						d = r.menuIsOpen,
						m = r.onKeyDown,
						p = r.tabSelectsValue,
						u = r.openMenuOnFocus,
						g = e.state,
						s = g.focusedOption,
						b = g.focusedValue,
						w = g.selectValue;
					if (!(c || "function" == typeof m && (m(t), t.defaultPrevented))) {
						switch (e.blockOptionHover = !0, t.key) {
							case "ArrowLeft":
								if (!o || n) return;
								e.focusValue("previous");
								break;
							case "ArrowRight":
								if (!o || n) return;
								e.focusValue("next");
								break;
							case "Delete":
							case "Backspace":
								if (n) return;
								if (b) e.removeValue(b);
								else {
									if (!i) return;
									o ? e.popValue() : l && e.clearValue()
								}
								break;
							case "Tab":
								if (e.isComposing) return;
								if (t.shiftKey || !d || !p || !s || u && e.isOptionSelected(s, w)) return;
								e.selectOption(s);
								break;
							case "Enter":
								if (229 === t.keyCode) break;
								if (d) {
									if (!s) return;
									if (e.isComposing) return;
									e.selectOption(s);
									break
								}
								return;
							case "Escape":
								d ? (e.inputIsHiddenAfterUpdate = !1, e.onInputChange("", {
									action: "menu-close"
								}), e.onMenuClose()) : l && a && e.clearValue();
								break;
							case " ":
								if (n) return;
								if (!d) {
									e.openMenu("first");
									break
								}
								if (!s) return;
								e.selectOption(s);
								break;
							case "ArrowUp":
								d ? e.focusOption("up") : e.openMenu("last");
								break;
							case "ArrowDown":
								d ? e.focusOption("down") : e.openMenu("first");
								break;
							case "PageUp":
								if (!d) return;
								e.focusOption("pageup");
								break;
							case "PageDown":
								if (!d) return;
								e.focusOption("pagedown");
								break;
							case "Home":
								if (!d) return;
								e.focusOption("first");
								break;
							case "End":
								if (!d) return;
								e.focusOption("last");
								break;
							default:
								return
						}
						t.preventDefault()
					}
				}));
				var o = t.value;
				e.cacheComponents = Object(w.a)(e.cacheComponents, x.y).bind(Object(u.a)(Object(u.a)(e))), e.cacheComponents(t.components), e.instancePrefix = "react-select-" + (e.props.instanceId || ++X);
				var i = Object(j.f)(o),
					c = t.menuIsOpen ? e.buildMenuOptions(t, i) : {
						render: [],
						focusable: []
					};
				return e.state.menuOptions = c, e.state.selectValue = i, e
			}
			return Object(p.a)(r, t), Object(c.a)(r, [{
				key: "componentDidMount",
				value: function() {
					this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput()
				}
			}, {
				key: "componentWillReceiveProps",
				value: function(t) {
					var r = this.props,
						e = r.options,
						o = r.value,
						i = r.menuIsOpen,
						a = r.inputValue;
					if (this.cacheComponents(t.components), t.value !== o || t.options !== e || t.menuIsOpen !== i || t.inputValue !== a) {
						var n = Object(j.f)(t.value),
							l = t.menuIsOpen ? this.buildMenuOptions(t, n) : {
								render: [],
								focusable: []
							},
							c = this.getNextFocusedValue(n),
							d = this.getNextFocusedOption(l.focusable);
						this.setState({
							menuOptions: l,
							selectValue: n,
							focusedOption: d,
							focusedValue: c
						})
					}
					null != this.inputIsHiddenAfterUpdate && (this.setState({
						inputIsHidden: this.inputIsHiddenAfterUpdate
					}), delete this.inputIsHiddenAfterUpdate)
				}
			}, {
				key: "componentDidUpdate",
				value: function(t) {
					var r = this.props,
						e = r.isDisabled,
						o = r.menuIsOpen,
						i = this.state.isFocused;
					(i && !e && t.isDisabled || i && o && !t.menuIsOpen) && this.focusInput(), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && Object(j.h)(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0)
				}
			}, {
				key: "onMenuOpen",
				value: function() {
					this.props.onMenuOpen()
				}
			}, {
				key: "onMenuClose",
				value: function() {
					var t = this.props,
						r = t.isSearchable,
						e = t.isMulti;
					this.announceAriaLiveContext({
						event: "input",
						context: {
							isSearchable: r,
							isMulti: e
						}
					}), this.onInputChange("", {
						action: "menu-close"
					}), this.props.onMenuClose()
				}
			}, {
				key: "onInputChange",
				value: function(t, r) {
					this.props.onInputChange(t, r)
				}
			}, {
				key: "focusInput",
				value: function() {
					this.inputRef && this.inputRef.focus()
				}
			}, {
				key: "blurInput",
				value: function() {
					this.inputRef && this.inputRef.blur()
				}
			}, {
				key: "openMenu",
				value: function(t) {
					var r = this.state,
						e = r.menuOptions,
						o = r.selectValue,
						i = r.isFocused,
						a = this.props.isMulti,
						n = "first" === t ? 0 : e.focusable.length - 1;
					if (!a) {
						var l = e.focusable.indexOf(o[0]);
						l > -1 && (n = l)
					}
					this.scrollToFocusedOptionOnUpdate = !(i && this.menuListRef), this.inputIsHiddenAfterUpdate = !1, this.onMenuOpen(), this.setState({
						focusedValue: null,
						focusedOption: e.focusable[n]
					}), this.announceAriaLiveContext({
						event: "menu"
					})
				}
			}, {
				key: "focusValue",
				value: function(t) {
					var r = this.props,
						e = r.isMulti,
						o = r.isSearchable,
						i = this.state,
						a = i.selectValue,
						n = i.focusedValue;
					if (e) {
						this.setState({
							focusedOption: null
						});
						var l = a.indexOf(n);
						n || (l = -1, this.announceAriaLiveContext({
							event: "value"
						}));
						var c = a.length - 1,
							d = -1;
						if (a.length) {
							switch (t) {
								case "previous":
									d = 0 === l ? 0 : -1 === l ? c : l - 1;
									break;
								case "next":
									l > -1 && l < c && (d = l + 1)
							} - 1 === d && this.announceAriaLiveContext({
								event: "input",
								context: {
									isSearchable: o,
									isMulti: e
								}
							}), this.setState({
								inputIsHidden: -1 !== d,
								focusedValue: a[d]
							})
						}
					}
				}
			}, {
				key: "focusOption",
				value: function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "first",
						r = this.props.pageSize,
						e = this.state,
						o = e.focusedOption,
						i = e.menuOptions,
						a = i.focusable;
					if (a.length) {
						var n = 0,
							l = a.indexOf(o);
						o || (l = -1, this.announceAriaLiveContext({
							event: "menu"
						})), "up" === t ? n = l > 0 ? l - 1 : a.length - 1 : "down" === t ? n = (l + 1) % a.length : "pageup" === t ? (n = l - r) < 0 && (n = 0) : "pagedown" === t ? (n = l + r) > a.length - 1 && (n = a.length - 1) : "last" === t && (n = a.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
							focusedOption: a[n],
							focusedValue: null
						}), this.announceAriaLiveContext({
							event: "menu",
							context: {
								isDisabled: K(a[n])
							}
						})
					}
				}
			}, {
				key: "getTheme",
				value: function() {
					return this.props.theme ? "function" == typeof this.props.theme ? this.props.theme(Q) : Object(n.a)({}, Q, this.props.theme) : Q
				}
			}, {
				key: "getCommonProps",
				value: function() {
					var t = this.clearValue,
						r = this.getStyles,
						e = this.setValue,
						o = this.selectOption,
						i = this.props,
						a = i.classNamePrefix,
						n = i.isMulti,
						l = i.isRtl,
						c = i.options,
						d = this.state.selectValue,
						m = this.hasValue();
					return {
						cx: j.j.bind(null, a),
						clearValue: t,
						getStyles: r,
						getValue: function() {
							return d
						},
						hasValue: m,
						isMulti: n,
						isRtl: l,
						options: c,
						selectOption: o,
						setValue: e,
						selectProps: i,
						theme: this.getTheme()
					}
				}
			}, {
				key: "getNextFocusedValue",
				value: function(t) {
					if (this.clearFocusValueOnUpdate) return this.clearFocusValueOnUpdate = !1, null;
					var r = this.state,
						e = r.focusedValue,
						o = r.selectValue.indexOf(e);
					if (o > -1) {
						if (t.indexOf(e) > -1) return e;
						if (o < t.length) return t[o]
					}
					return null
				}
			}, {
				key: "getNextFocusedOption",
				value: function(t) {
					var r = this.state.focusedOption;
					return r && t.indexOf(r) > -1 ? r : t[0]
				}
			}, {
				key: "hasValue",
				value: function() {
					return this.state.selectValue.length > 0
				}
			}, {
				key: "hasOptions",
				value: function() {
					return !!this.state.menuOptions.render.length
				}
			}, {
				key: "countOptions",
				value: function() {
					return this.state.menuOptions.focusable.length
				}
			}, {
				key: "isClearable",
				value: function() {
					var t = this.props,
						r = t.isClearable,
						e = t.isMulti;
					return void 0 === r ? e : r
				}
			}, {
				key: "isOptionDisabled",
				value: function(t, r) {
					return "function" == typeof this.props.isOptionDisabled && this.props.isOptionDisabled(t, r)
				}
			}, {
				key: "isOptionSelected",
				value: function(t, r) {
					var e = this;
					if (r.indexOf(t) > -1) return !0;
					if ("function" == typeof this.props.isOptionSelected) return this.props.isOptionSelected(t, r);
					var o = this.getOptionValue(t);
					return r.some((function(t) {
						return e.getOptionValue(t) === o
					}))
				}
			}, {
				key: "filterOption",
				value: function(t, r) {
					return !this.props.filterOption || this.props.filterOption(t, r)
				}
			}, {
				key: "formatOptionLabel",
				value: function(t, r) {
					if ("function" == typeof this.props.formatOptionLabel) {
						var e = this.props.inputValue,
							o = this.state.selectValue;
						return this.props.formatOptionLabel(t, {
							context: r,
							inputValue: e,
							selectValue: o
						})
					}
					return this.getOptionLabel(t)
				}
			}, {
				key: "formatGroupLabel",
				value: function(t) {
					return this.props.formatGroupLabel(t)
				}
			}, {
				key: "startListeningComposition",
				value: function() {
					document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1))
				}
			}, {
				key: "stopListeningComposition",
				value: function() {
					document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd))
				}
			}, {
				key: "startListeningToTouch",
				value: function() {
					document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1))
				}
			}, {
				key: "stopListeningToTouch",
				value: function() {
					document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd))
				}
			}, {
				key: "buildMenuOptions",
				value: function(t, r) {
					var e = this,
						o = t.inputValue,
						i = void 0 === o ? "" : o,
						a = t.options,
						n = function(t, o) {
							var a = e.isOptionDisabled(t, r),
								n = e.isOptionSelected(t, r),
								l = e.getOptionLabel(t),
								c = e.getOptionValue(t);
							if (!(e.shouldHideSelectedOptions() && n || !e.filterOption({
									label: l,
									value: c,
									data: t
								}, i))) {
								var d = a ? void 0 : function() {
										return e.onOptionHover(t)
									},
									m = a ? void 0 : function() {
										return e.selectOption(t)
									},
									p = "".concat(e.getElementId("option"), "-").concat(o);
								return {
									innerProps: {
										id: p,
										onClick: m,
										onMouseMove: d,
										onMouseOver: d,
										tabIndex: -1
									},
									data: t,
									isDisabled: a,
									isSelected: n,
									key: p,
									label: l,
									type: "option",
									value: c
								}
							}
						};
					return a.reduce((function(t, r, o) {
						if (r.options) {
							e.hasGroups || (e.hasGroups = !0);
							var i = r.options.map((function(r, e) {
								var i = n(r, "".concat(o, "-").concat(e));
								return i && t.focusable.push(r), i
							})).filter(Boolean);
							if (i.length) {
								var a = "".concat(e.getElementId("group"), "-").concat(o);
								t.render.push({
									type: "group",
									key: a,
									data: r,
									options: i
								})
							}
						} else {
							var l = n(r, "".concat(o));
							l && (t.render.push(l), t.focusable.push(r))
						}
						return t
					}), {
						render: [],
						focusable: []
					})
				}
			}, {
				key: "constructAriaLiveMessage",
				value: function() {
					var t = this.state,
						r = t.ariaLiveContext,
						e = t.selectValue,
						o = t.focusedValue,
						i = t.focusedOption,
						a = this.props,
						n = a.options,
						l = a.menuIsOpen,
						c = a.inputValue,
						d = a.screenReaderStatus,
						m = o ? function(t) {
							var r = t.focusedValue,
								e = t.getOptionLabel,
								o = t.selectValue;
							return "value ".concat(e(r), " focused, ").concat(o.indexOf(r) + 1, " of ").concat(o.length, ".")
						}({
							focusedValue: o,
							getOptionLabel: this.getOptionLabel,
							selectValue: e
						}) : "",
						p = i && l ? function(t) {
							var r = t.focusedOption,
								e = t.getOptionLabel,
								o = t.options;
							return "option ".concat(e(r), " focused").concat(r.isDisabled ? " disabled" : "", ", ").concat(o.indexOf(r) + 1, " of ").concat(o.length, ".")
						}({
							focusedOption: i,
							getOptionLabel: this.getOptionLabel,
							options: n
						}) : "",
						u = function(t) {
							var r = t.inputValue,
								e = t.screenReaderMessage;
							return "".concat(e).concat(r ? " for search term " + r : "", ".")
						}({
							inputValue: c,
							screenReaderMessage: d({
								count: this.countOptions()
							})
						});
					return "".concat(m, " ").concat(p, " ").concat(u, " ").concat(r)
				}
			}, {
				key: "renderInput",
				value: function() {
					var t = this.props,
						r = t.isDisabled,
						e = t.isSearchable,
						o = t.inputId,
						a = t.inputValue,
						n = t.tabIndex,
						l = this.components.Input,
						c = this.state.inputIsHidden,
						d = o || this.getElementId("input");
					if (!e) return b.a.createElement(T, {
						id: d,
						innerRef: this.getInputRef,
						onBlur: this.onInputBlur,
						onChange: j.k,
						onFocus: this.onInputFocus,
						readOnly: !0,
						disabled: r,
						tabIndex: n,
						value: ""
					});
					var m = {
							"aria-autocomplete": "list",
							"aria-label": this.props["aria-label"],
							"aria-labelledby": this.props["aria-labelledby"]
						},
						p = this.commonProps,
						u = p.cx,
						g = p.theme,
						s = p.selectProps;
					return b.a.createElement(l, Object(i.a)({
						autoCapitalize: "none",
						autoComplete: "off",
						autoCorrect: "off",
						cx: u,
						getStyles: this.getStyles,
						id: d,
						innerRef: this.getInputRef,
						isDisabled: r,
						isHidden: c,
						onBlur: this.onInputBlur,
						onChange: this.handleInputChange,
						onFocus: this.onInputFocus,
						selectProps: s,
						spellCheck: "false",
						tabIndex: n,
						theme: g,
						type: "text",
						value: a
					}, m))
				}
			}, {
				key: "renderPlaceholderOrValue",
				value: function() {
					var t = this,
						r = this.components,
						e = r.MultiValue,
						o = r.MultiValueContainer,
						a = r.MultiValueLabel,
						n = r.MultiValueRemove,
						l = r.SingleValue,
						c = r.Placeholder,
						d = this.commonProps,
						m = this.props,
						p = m.controlShouldRenderValue,
						u = m.isDisabled,
						g = m.isMulti,
						s = m.inputValue,
						w = m.placeholder,
						f = this.state,
						h = f.selectValue,
						j = f.focusedValue,
						x = f.isFocused;
					if (!this.hasValue() || !p) return s ? null : b.a.createElement(c, Object(i.a)({}, d, {
						key: "placeholder",
						isDisabled: u,
						isFocused: x
					}), w);
					if (g) return h.map((function(r) {
						var l = r === j;
						return b.a.createElement(e, Object(i.a)({}, d, {
							components: {
								Container: o,
								Label: a,
								Remove: n
							},
							isFocused: l,
							isDisabled: u,
							key: t.getOptionValue(r),
							removeProps: {
								onClick: function() {
									return t.removeValue(r)
								},
								onTouchEnd: function() {
									return t.removeValue(r)
								},
								onMouseDown: function(t) {
									t.preventDefault(), t.stopPropagation()
								}
							},
							data: r
						}), t.formatOptionLabel(r, "value"))
					}));
					if (s) return null;
					var y = h[0];
					return b.a.createElement(l, Object(i.a)({}, d, {
						data: y,
						isDisabled: u
					}), this.formatOptionLabel(y, "value"))
				}
			}, {
				key: "renderClearIndicator",
				value: function() {
					var t = this.components.ClearIndicator,
						r = this.commonProps,
						e = this.props,
						o = e.isDisabled,
						a = e.isLoading,
						n = this.state.isFocused;
					if (!this.isClearable() || !t || o || !this.hasValue() || a) return null;
					var l = {
						onMouseDown: this.onClearIndicatorMouseDown,
						onTouchEnd: this.onClearIndicatorTouchEnd,
						"aria-hidden": "true"
					};
					return b.a.createElement(t, Object(i.a)({}, r, {
						innerProps: l,
						isFocused: n
					}))
				}
			}, {
				key: "renderLoadingIndicator",
				value: function() {
					var t = this.components.LoadingIndicator,
						r = this.commonProps,
						e = this.props,
						o = e.isDisabled,
						a = e.isLoading,
						n = this.state.isFocused;
					if (!t || !a) return null;
					return b.a.createElement(t, Object(i.a)({}, r, {
						innerProps: {
							"aria-hidden": "true"
						},
						isDisabled: o,
						isFocused: n
					}))
				}
			}, {
				key: "renderIndicatorSeparator",
				value: function() {
					var t = this.components,
						r = t.DropdownIndicator,
						e = t.IndicatorSeparator;
					if (!r || !e) return null;
					var o = this.commonProps,
						a = this.props.isDisabled,
						n = this.state.isFocused;
					return b.a.createElement(e, Object(i.a)({}, o, {
						isDisabled: a,
						isFocused: n
					}))
				}
			}, {
				key: "renderDropdownIndicator",
				value: function() {
					var t = this.components.DropdownIndicator;
					if (!t) return null;
					var r = this.commonProps,
						e = this.props.isDisabled,
						o = this.state.isFocused,
						a = {
							onMouseDown: this.onDropdownIndicatorMouseDown,
							onTouchEnd: this.onDropdownIndicatorTouchEnd,
							"aria-hidden": "true"
						};
					return b.a.createElement(t, Object(i.a)({}, r, {
						innerProps: a,
						isDisabled: e,
						isFocused: o
					}))
				}
			}, {
				key: "renderMenu",
				value: function() {
					var t = this,
						r = this.components,
						e = r.Group,
						a = r.GroupHeading,
						n = r.Menu,
						l = r.MenuList,
						c = r.MenuPortal,
						d = r.LoadingMessage,
						m = r.NoOptionsMessage,
						p = r.Option,
						u = this.commonProps,
						g = this.state,
						s = g.focusedOption,
						w = g.menuOptions,
						f = this.props,
						h = f.captureMenuScroll,
						j = f.inputValue,
						y = f.isLoading,
						S = f.loadingMessage,
						v = f.minMenuHeight,
						O = f.maxMenuHeight,
						k = f.menuIsOpen,
						E = f.menuPlacement,
						C = f.menuPosition,
						A = f.menuPortalTarget,
						T = f.menuShouldBlockScroll,
						I = f.menuShouldScrollIntoView,
						N = f.noOptionsMessage,
						_ = f.onMenuScrollToTop,
						R = f.onMenuScrollToBottom;
					if (!k) return null;
					var M, L = function(r) {
						var e = s === r.data;
						return r.innerRef = e ? t.getFocusedOptionRef : void 0, b.a.createElement(p, Object(i.a)({}, u, r, {
							isFocused: e
						}), t.formatOptionLabel(r.data, "menu"))
					};
					if (this.hasOptions()) M = w.render.map((function(r) {
						if ("group" === r.type) {
							r.type;
							var n = Object(o.a)(r, ["type"]),
								l = "".concat(r.key, "-heading");
							return b.a.createElement(e, Object(i.a)({}, u, n, {
								Heading: a,
								headingProps: {
									id: l
								},
								label: t.formatGroupLabel(r.data)
							}), r.options.map((function(t) {
								return L(t)
							})))
						}
						if ("option" === r.type) return L(r)
					}));
					else if (y) {
						var D = S({
							inputValue: j
						});
						if (null === D) return null;
						M = b.a.createElement(d, u, D)
					} else {
						var P = N({
							inputValue: j
						});
						if (null === P) return null;
						M = b.a.createElement(m, u, P)
					}
					var z = {
							minMenuHeight: v,
							maxMenuHeight: O,
							menuPlacement: E,
							menuPosition: C,
							menuShouldScrollIntoView: I
						},
						H = b.a.createElement(x.a, Object(i.a)({}, u, z), (function(r) {
							var e = r.ref,
								o = r.placerProps,
								a = o.placement,
								c = o.maxHeight;
							return b.a.createElement(n, Object(i.a)({}, u, z, {
								innerRef: e,
								innerProps: {
									onMouseDown: t.onMenuMouseDown,
									onMouseMove: t.onMenuMouseMove
								},
								isLoading: y,
								placement: a
							}), b.a.createElement(W, {
								isEnabled: h,
								onTopArrive: _,
								onBottomArrive: R
							}, b.a.createElement(B, {
								isEnabled: T
							}, b.a.createElement(l, Object(i.a)({}, u, {
								innerRef: t.getMenuListRef,
								isLoading: y,
								maxHeight: c
							}), M))))
						}));
					return A || "fixed" === C ? b.a.createElement(c, Object(i.a)({}, u, {
						appendTo: A,
						controlElement: this.controlRef,
						menuPlacement: E,
						menuPosition: C
					}), H) : H
				}
			}, {
				key: "renderFormField",
				value: function() {
					var t = this,
						r = this.props,
						e = r.delimiter,
						o = r.isDisabled,
						i = r.isMulti,
						a = r.name,
						n = this.state.selectValue;
					if (a && !o) {
						if (i) {
							if (e) {
								var l = n.map((function(r) {
									return t.getOptionValue(r)
								})).join(e);
								return b.a.createElement("input", {
									name: a,
									type: "hidden",
									value: l
								})
							}
							var c = n.length > 0 ? n.map((function(r, e) {
								return b.a.createElement("input", {
									key: "i-".concat(e),
									name: a,
									type: "hidden",
									value: t.getOptionValue(r)
								})
							})) : b.a.createElement("input", {
								name: a,
								type: "hidden"
							});
							return b.a.createElement("div", null, c)
						}
						var d = n[0] ? this.getOptionValue(n[0]) : "";
						return b.a.createElement("input", {
							name: a,
							type: "hidden",
							value: d
						})
					}
				}
			}, {
				key: "renderLiveRegion",
				value: function() {
					return this.state.isFocused ? b.a.createElement(A, {
						"aria-live": "polite"
					}, b.a.createElement("p", {
						id: "aria-selection-event"
					}, " ", this.state.ariaLiveSelection), b.a.createElement("p", {
						id: "aria-context"
					}, " ", this.constructAriaLiveMessage())) : null
				}
			}, {
				key: "render",
				value: function() {
					var t = this.components,
						r = t.Control,
						e = t.IndicatorsContainer,
						o = t.SelectContainer,
						a = t.ValueContainer,
						n = this.props,
						l = n.className,
						c = n.id,
						d = n.isDisabled,
						m = n.menuIsOpen,
						p = this.state.isFocused,
						u = this.commonProps = this.getCommonProps();
					return b.a.createElement(o, Object(i.a)({}, u, {
						className: l,
						innerProps: {
							id: c,
							onKeyDown: this.onKeyDown
						},
						isDisabled: d,
						isFocused: p
					}), this.renderLiveRegion(), b.a.createElement(r, Object(i.a)({}, u, {
						innerRef: this.getControlRef,
						innerProps: {
							onMouseDown: this.onControlMouseDown,
							onTouchEnd: this.onControlTouchEnd
						},
						isDisabled: d,
						isFocused: p,
						menuIsOpen: m
					}), b.a.createElement(a, Object(i.a)({}, u, {
						isDisabled: d
					}), this.renderPlaceholderOrValue(), this.renderInput()), b.a.createElement(e, Object(i.a)({}, u, {
						isDisabled: d
					}), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField())
				}
			}]), r
		}(s.Component);
	Object(g.a)(Z, "defaultProps", J)
}, function(t, r) {
	var e;
	e = function() {
		return this
	}();
	try {
		e = e || new Function("return this")()
	} catch (t) {
		"object" == typeof window && (e = window)
	}
	t.exports = e
}, function(t, r, e) {
	var o = e(306);
	t.exports = function(t, r, e) {
		if (o(t), void 0 === r) return t;
		switch (e) {
			case 0:
				return function() {
					return t.call(r)
				};
			case 1:
				return function(e) {
					return t.call(r, e)
				};
			case 2:
				return function(e, o) {
					return t.call(r, e, o)
				};
			case 3:
				return function(e, o, i) {
					return t.call(r, e, o, i)
				}
		}
		return function() {
			return t.apply(r, arguments)
		}
	}
}, function(t, r, e) {
	"use strict";
	var o = e(321),
		i = e(30),
		a = e(8),
		n = function() {
			function t() {}
			return t.imageSourceWithOptimalResolution = function(t) {
				if (t) {
					var r = t.lastIndexOf(".");
					if (r > 0) {
						var e = t.substring(0, r),
							o = t.substring(r),
							i = this.normalizedDevicePixelRatio(),
							a = "";
						return i > 1 && (a = "@" + i + "x"), [e, a, o].join("")
					}
				}
				return null
			}, t.normalizedDevicePixelRatio = function() {
				if (window && void 0 !== window.devicePixelRatio) {
					var t = Math.ceil(window.devicePixelRatio);
					return t > 3 && (t = 3), t
				}
				return 2
			}, t.getMarginalClassificationImage = function(t) {
				switch (t) {
					case o.TYPE_PARALLEL_ACCOUNT:
						return i.isInDarkMode() ? "./images/marginal_parallel_dark.svg" : "./images/marginal_parallel.svg";
					case o.TYPE_QUOTATION:
						return i.isInDarkMode() ? "./images/marginal_quotation_dark.svg" : "./images/marginal_quotation.svg";
					case o.TYPE_UNCLASSIFIED:
					case o.TYPE_INVALID:
					default:
						return null
				}
			}, t.getHeaderIcon = function(t) {
				switch (t) {
					case a.HeaderIcon.ParallelMarginal:
						return i.isInDarkMode() ? "./images/marginal_parallel_dark.svg" : "./images/marginal_parallel.svg";
					case a.HeaderIcon.QuotationMarginal:
						return i.isInDarkMode() ? "./images/marginal_quotation_dark.svg" : "./images/marginal_quotation.svg";
					case a.HeaderIcon.None:
					default:
						return null
				}
			}, t.getReferenceWorksImage = function() {
				return i.isInDarkMode() ? "./images/reference_works_dark.svg" : "./images/reference_works.svg"
			}, t.getRSGIcon = function() {
				return i.isInDarkMode() ? "./images/rsg_dark.svg" : "./images/rsg.svg"
			}, t.getXIcon = function() {
				return i.isInDarkMode() ? "./images/x_dark.svg" : "./images/x.svg"
			}, t.getMarginalImage = function() {
				return i.isInDarkMode() ? "./images/marginal_dark.svg" : "./images/marginal.svg"
			}, t
		}();
	t.exports = n
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(34),
		n = e(176),
		l = (e(99), e(43)),
		c = e(8),
		d = e(64),
		m = (e(48), e(29)),
		p = new(function(t) {
			function r() {
				var r = t.call(this) || this;
				return r._userMarks = {}, r._CHANGE_EVENT = "change", r
			}
			return i(r, t), r.prototype.emitCacheChange = function() {
				this.emit(this._CHANGE_EVENT)
			}, r.prototype.emitChange = function(t, r, e) {
				this.emit(this._CHANGE_EVENT, t, r, e)
			}, r.prototype.addChangeListener = function(t) {
				this.on(this._CHANGE_EVENT, t)
			}, r.prototype.removeChangeListener = function(t) {
				this.removeListener(this._CHANGE_EVENT, t)
			}, r.prototype.cacheUserMark = function(t) {
				if (t) {
					var r = t.identifier;
					this._userMarks[r] = t
				}
			}, r.prototype.cachePersistedUserMark = function(t) {
				if (t) {
					var r = this._markMatchingAttributesOfPersistedMark(t);
					if (r) r.updateWithPersistedMark(t);
					else if (r = d.UserMarkFromDTUserMark(t)) return this._userMarks[r.identifier] = r, r
				}
				return null
			}, r.prototype.deleteUserMark = function(t) {
				"number" == typeof t && (t = this.markWithIdentifierOrID(t).identifier);
				this._userMarks && delete this._userMarks[t]
			}, r.prototype.setUserMarkColor = function(t, r) {
				var e = this.markWithIdentifierOrID(t);
				e && (e.color = r)
			}, r.prototype.setUserMarks = function(t) {
				for (var r = {}, e = 0, o = t; e < o.length; e++) {
					var i, a = o[e];
					(i = a.identifier) && (r[i] = a)
				}
				this._userMarks = r
			}, r.prototype.getAll = function() {
				var t = [];
				for (var r in this._userMarks)
					if (this._userMarks.hasOwnProperty(r)) {
						var e = this._userMarks[r];
						t.push(e)
					} return t
			}, r.prototype.markWithIdentifierOrID = function(t) {
				return "number" == typeof t ? this.markWithID(t) : this.markWithIdentifier(t)
			}, r.prototype.markWithIdentifier = function(t) {
				return this._userMarks[t]
			}, r.prototype.markWithID = function(t) {
				for (var r in this._userMarks)
					if (this._userMarks.hasOwnProperty(r)) {
						var e = this._userMarks[r];
						if (e.userMarkID && e.userMarkID === t) return e
					} return null
			}, r.prototype.mergeUserMarks = function(t, e) {
				var o = this,
					i = [];
				return e.forEach((function(t) {
					if (t.id === r.UNKNOWN_USER_MARK_ID || "number" != typeof t.id)(a = o._markMatchingAttributesOfPersistedMark(t)) && i.push(a.identifier);
					else
						for (var e in o._userMarks)
							if (o._userMarks.hasOwnProperty(e)) {
								var a = o._userMarks[e];
								if (t.id >= 0 && t.id === a.userMarkID) {
									i.push(e);
									break
								}
							}
				})), i.forEach((function(t) {
					o.deleteUserMark(t)
				})), this.cachePersistedUserMark(t)
			}, r.prototype._markMatchingAttributesOfPersistedMark = function(t) {
				for (var r in this._userMarks)
					if (this._userMarks.hasOwnProperty(r)) {
						var e = this._userMarks[r];
						if (e.matchesAttributesOfPersistedMark(t)) return e
					} return null
			}, r.UNKNOWN_USER_MARK_ID = -1, r
		}(l.EventEmitter));
	p.defaultColor = c.UserMarkColor.Yellow, p.style = c.UserMarkStyle.Highlight, a.register((function(t) {
		switch (t.type) {
			case m.CACHE_USER_MARK:
				p.cacheUserMark(t.mark), p.emitChange(!1, t.mark);
				break;
			case m.CACHE_PERSISTED_USER_MARK:
				p.cachePersistedUserMark(t.mark);
				break;
			case m.SET_USER_MARK_COLOR:
				p.defaultColor = t.color;
				var r = t.markIdentifier;
				r || (r = t.userMarkID), r && (p.setUserMarkColor(r, t.color), p.emitChange(!1, p.markWithIdentifierOrID(r)));
				break;
			case m.CREATE_USER_MARK_FROM_SELECTED_TEXT:
				var e = t.color,
					o = t.style;
				p.defaultColor = e;
				var i = null;
				(i = n.createUserMarkFromSelection(e, o)) && (p.cacheUserMark(i), p.emitChange(!1, i, !0));
				break;
			case m.REMOVE_USER_MARK:
				var a = t.markIdentifier;
				if (a || (a = t.userMarkID), a) {
					var l = p.markWithIdentifierOrID(a);
					l && (p.deleteUserMark(a), l.ranges = []), p.emitChange(!1, l)
				}
				break;
			case m.SET_LOCATED_USER_MARKS:
				var c = [],
					u = t.locatedUserMarks;
				if (u && u.userMarks)
					for (var g = 0, s = u.userMarks; g < s.length; g++) {
						var b = s[g];
						(i = d.UserMarkFromDTUserMark(b)) && c.push(i)
					}
				p.setUserMarks(c), p.emitChange();
				break;
			case m.MERGE_USER_MARKS:
				var w = t.createdMark;
				p.defaultColor = w.color;
				var f = t.deletedMarks,
					h = p.mergeUserMarks(w, f);
				if (t.sendUserMarkMenuMessageAfter) {
					var j = t.sendUserMarkMenuMessageAfter;
					p.emitChange(j, h)
				} else p.emitChange()
		}
	})), t.exports = p
}, function(t, r, e) {
	"use strict";

	function o(t) {
		return function(t) {
			if (Array.isArray(t)) {
				for (var r = 0, e = new Array(t.length); r < t.length; r++) e[r] = t[r];
				return e
			}
		}(t) || function(t) {
			if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
		}(t) || function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance")
		}()
	}
	e.d(r, "a", (function() {
		return o
	}))
}, function(t, r, e) {
	"use strict";
	e.d(r, "a", (function() {
		return g
	}));
	var o = function(t) {
			for (var r, e = t.length, o = e ^ e, i = 0; e >= 4;) r = 1540483477 * (65535 & (r = 255 & t.charCodeAt(i) | (255 & t.charCodeAt(++i)) << 8 | (255 & t.charCodeAt(++i)) << 16 | (255 & t.charCodeAt(++i)) << 24)) + ((1540483477 * (r >>> 16) & 65535) << 16), o = 1540483477 * (65535 & o) + ((1540483477 * (o >>> 16) & 65535) << 16) ^ (r = 1540483477 * (65535 & (r ^= r >>> 24)) + ((1540483477 * (r >>> 16) & 65535) << 16)), e -= 4, ++i;
			switch (e) {
				case 3:
					o ^= (255 & t.charCodeAt(i + 2)) << 16;
				case 2:
					o ^= (255 & t.charCodeAt(i + 1)) << 8;
				case 1:
					o = 1540483477 * (65535 & (o ^= 255 & t.charCodeAt(i))) + ((1540483477 * (o >>> 16) & 65535) << 16)
			}
			return o = 1540483477 * (65535 & (o ^= o >>> 13)) + ((1540483477 * (o >>> 16) & 65535) << 16), ((o ^= o >>> 15) >>> 0).toString(36)
		},
		i = {
			animationIterationCount: 1,
			borderImageOutset: 1,
			borderImageSlice: 1,
			borderImageWidth: 1,
			boxFlex: 1,
			boxFlexGroup: 1,
			boxOrdinalGroup: 1,
			columnCount: 1,
			columns: 1,
			flex: 1,
			flexGrow: 1,
			flexPositive: 1,
			flexShrink: 1,
			flexNegative: 1,
			flexOrder: 1,
			gridRow: 1,
			gridRowEnd: 1,
			gridRowSpan: 1,
			gridRowStart: 1,
			gridColumn: 1,
			gridColumnEnd: 1,
			gridColumnSpan: 1,
			gridColumnStart: 1,
			msGridRow: 1,
			msGridRowSpan: 1,
			msGridColumn: 1,
			msGridColumnSpan: 1,
			fontWeight: 1,
			lineHeight: 1,
			opacity: 1,
			order: 1,
			orphans: 1,
			tabSize: 1,
			widows: 1,
			zIndex: 1,
			zoom: 1,
			WebkitLineClamp: 1,
			fillOpacity: 1,
			floodOpacity: 1,
			stopOpacity: 1,
			strokeDasharray: 1,
			strokeDashoffset: 1,
			strokeMiterlimit: 1,
			strokeOpacity: 1,
			strokeWidth: 1
		};
	var a = /[A-Z]|^ms/g,
		n = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
		l = function(t) {
			return 45 === t.charCodeAt(1)
		},
		c = function(t) {
			var r = {};
			return function(e) {
				return void 0 === r[e] && (r[e] = t(e)), r[e]
			}
		}((function(t) {
			return l(t) ? t : t.replace(a, "-$&").toLowerCase()
		})),
		d = function(t, r) {
			if (null == r || "boolean" == typeof r) return "";
			switch (t) {
				case "animation":
				case "animationName":
					"string" == typeof r && (r = r.replace(n, (function(t, r, e) {
						return p = {
							name: r,
							styles: e,
							next: p
						}, r
					})))
			}
			return 1 === i[t] || l(t) || "number" != typeof r || 0 === r ? r : r + "px"
		};

	function m(t, r, e, o) {
		if (null == e) return "";
		if (void 0 !== e.__emotion_styles) return e;
		switch (typeof e) {
			case "boolean":
				return "";
			case "object":
				if (1 === e.anim) return p = {
					name: e.name,
					styles: e.styles,
					next: p
				}, e.name;
				if (void 0 !== e.styles) {
					var i = e.next;
					if (void 0 !== i)
						for (; void 0 !== i;) p = {
							name: i.name,
							styles: i.styles,
							next: p
						}, i = i.next;
					return e.styles
				}
				return function(t, r, e) {
					var o = "";
					if (Array.isArray(e))
						for (var i = 0; i < e.length; i++) o += m(t, r, e[i], !1);
					else
						for (var a in e) {
							var n = e[a];
							if ("object" != typeof n) null != r && void 0 !== r[n] ? o += a + "{" + r[n] + "}" : o += c(a) + ":" + d(a, n) + ";";
							else if (!Array.isArray(n) || "string" != typeof n[0] || null != r && void 0 !== r[n[0]]) o += a + "{" + m(t, r, n, !1) + "}";
							else
								for (var l = 0; l < n.length; l++) o += c(a) + ":" + d(a, n[l]) + ";"
						}
					return o
				}(t, r, e);
			case "function":
				if (void 0 !== t) {
					var a = p,
						n = e(t);
					return p = a, m(t, r, n, o)
				}
				default:
					if (null == r) return e;
					var l = r[e];
					return void 0 === l || o ? e : l
		}
	}
	var p, u = /label:\s*([^\s;\n{]+)\s*;/g;
	var g = function(t, r, e) {
		if (1 === t.length && "object" == typeof t[0] && null !== t[0] && void 0 !== t[0].styles) return t[0];
		var i = !0,
			a = "";
		p = void 0;
		var n = t[0];
		null == n || void 0 === n.raw ? (i = !1, a += m(e, r, n, !1)) : a += n[0];
		for (var l = 1; l < t.length; l++) a += m(e, r, t[l], 46 === a.charCodeAt(a.length - 1)), i && (a += n[l]);
		u.lastIndex = 0;
		for (var c, d = ""; null !== (c = u.exec(a));) d += "-" + c[1];
		return {
			name: o(a) + d,
			styles: a,
			next: p
		}
	}
}, function(t, r, e) {
	var o = e(15);
	t.exports = function(t, r) {
		if (!o(t)) return t;
		var e, i;
		if (r && "function" == typeof(e = t.toString) && !o(i = e.call(t))) return i;
		if ("function" == typeof(e = t.valueOf) && !o(i = e.call(t))) return i;
		if (!r && "function" == typeof(e = t.toString) && !o(i = e.call(t))) return i;
		throw TypeError("Can't convert object to primitive value")
	}
}, function(t, r, e) {
	var o = e(57),
		i = Math.min;
	t.exports = function(t) {
		return t > 0 ? i(o(t), 9007199254740991) : 0
	}
}, function(t, r, e) {
	"use strict";
	var o = e(316).charAt,
		i = e(41),
		a = e(62),
		n = i.set,
		l = i.getterFor("String Iterator");
	a(String, "String", (function(t) {
		n(this, {
			type: "String Iterator",
			string: String(t),
			index: 0
		})
	}), (function() {
		var t, r = l(this),
			e = r.string,
			i = r.index;
		return i >= e.length ? {
			value: void 0,
			done: !0
		} : (t = o(e, i), r.index += t.length, {
			value: t,
			done: !1
		})
	}))
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(34),
		n = e(43),
		l = e(8);
	var c = e(29),
		d = new(function(t) {
			function r() {
				var r = t.call(this) || this;
				return r._CHANGE_EVENT = "change", r._clearValues(), r
			}
			return i(r, t), r.prototype._clearValues = function() {
				this._primaryContent = null, this._documentInfo = null, this._selectedParagraphs = [], this._selectedVerses = [], this._snippet = null, this._searchTermHighlightTargets = [], this._bookmarks = [], this._noteMarkers = [], this._currentMediaMarker = null
			}, r.prototype.emitChange = function() {
				this.emit(this._CHANGE_EVENT)
			}, r.prototype.addChangeListener = function(t) {
				this.on(this._CHANGE_EVENT, t)
			}, r.prototype.removeChangeListener = function(t) {
				this.removeListener(this._CHANGE_EVENT, t)
			}, r.prototype.getContent = function() {
				return this._primaryContent
			}, r.prototype.setContent = function(t) {
				if (this._clearValues(), t);
				this._primaryContent = t
			}, Object.defineProperty(r.prototype, "isNativeTextSelectionAllowed", {
				get: function() {
					return !(this._primaryContent && this._primaryContent.processedContent)
				},
				enumerable: !1,
				configurable: !0
			}), r.prototype.updateProcessedContent = function(t, r) {
				t && this._primaryContent && (this._primaryContent.processedContent = t), this._documentInfo = r
			}, r.prototype.getDocumentInfo = function() {
				return this._documentInfo
			}, r.prototype.getDocumentBlockInfo = function(t) {
				return t && this._documentInfo && this._documentInfo.blocks ? this._documentInfo.blocks[t] : null
			}, r.prototype.getSelectedParagraphs = function() {
				return this._selectedParagraphs
			}, r.prototype.setSelectedParagraphs = function(t, r) {
				this._selectedParagraphs = t, this._snippet = r
			}, r.prototype.hasSelectedParagraphs = function() {
				return this._selectedParagraphs && this._selectedParagraphs.length > 0
			}, r.prototype.getSelectedVerses = function() {
				return this._selectedVerses
			}, r.prototype.setSelectedVerses = function(t, r) {
				this._selectedVerses = t, this._snippet = r
			}, r.prototype.hasSelectedVerses = function() {
				return this._selectedVerses && this._selectedVerses.length > 0
			}, r.prototype.getSnippet = function() {
				return this._snippet
			}, r.prototype.setScrollTargetDescriptor = function(t) {
				this._scrollTargetDescriptor = t
			}, r.prototype.getScrollTargetDescriptorOnce = function() {
				var t = this._scrollTargetDescriptor;
				return this._scrollTargetDescriptor = null, t
			}, r.prototype.setSearchTermHighlightTargets = function(t) {
				this._searchTermHighlightTargets = t
			}, r.prototype.getSearchTermHighlightTargets = function() {
				return this._searchTermHighlightTargets
			}, r.prototype.setBookmarks = function(t) {
				this._bookmarks = t
			}, r.prototype.getBookmarks = function() {
				return this._bookmarks
			}, r.prototype.setNoteMarkers = function(t) {
				this._noteMarkers = t
			}, r.prototype.getNoteMarkers = function() {
				return this._noteMarkers
			}, r.prototype.setInputFields = function(t) {
				this._inputFields = t
			}, r.prototype.getInputFields = function() {
				return this._inputFields
			}, r.prototype.setCurrentMediaMarker = function(t) {
				this._currentMediaMarker = t
			}, r.prototype.getCurrentMediaMarker = function() {
				return this._currentMediaMarker
			}, r
		}(n.EventEmitter));
	a.register((function(t) {
		var r = function(t, r, e, o) {
			var i = null;
			if (t) {
				var a = null;
				if (r === l.ScrollTargetType.Paragraph) a = "#p" + t;
				else if (r === l.ScrollTargetType.Verse) {
					var n = d.getContent();
					n && n.bibleBook && n.bibleChapter && (a = "#v" + n.bibleBook + "-" + n.bibleChapter + "-" + t + "-1")
				} else r === l.ScrollTargetType.Footnote ? a = ".tt[data-rel-fnid='" + t + "']" : r === l.ScrollTargetType.Endnote ? a = ".tt[data-rel-enid='" + t + "']" : r === l.ScrollTargetType.Marginal ? a = ".tt[data-rel-mid='" + t + "']" : r === l.ScrollTargetType.Extraction ? a = "a[data-xtid='" + t + "']" : r === l.ScrollTargetType.BibleCitation ? a = "a[data-bid='" + t + "']" : r === l.ScrollTargetType.Note && (a = "[data-notemarker-id='" + t + "']");
				a && (i = {
					force: o,
					selector: a
				}, "number" == typeof e && (i.offset = e))
			}
			return i
		};
		switch (t.type) {
			case c.SET_PRIMARY_CONTENT:
				d.setContent(t.content), d.emitChange();
				break;
			case c.UPDATE_PRIMARY_PROCESSED_CONTENT:
				d.updateProcessedContent(t.processedContent, t.documentInfo), d.emitChange();
				break;
			case c.SELECT_PARAGRAPHS:
				d.setSelectedVerses([], null), d.setSelectedParagraphs(t.ids, t.snippet), d.emitChange();
				break;
			case c.SELECT_VERSES:
				var e = [];
				if (d.setSelectedParagraphs([], null), void 0 !== t.firstVerse) {
					var o = parseInt(t.firstVerse, 10);
					if (e.push(o), void 0 !== t.lastVerse) {
						var i = parseInt(t.lastVerse, 10);
						if (i > o)
							for (var a = o + 1; a <= i; a += 1) e.push(a)
					}
				}
				d.setSelectedVerses(e, t.snippet), d.emitChange();
				break;
			case c.SELECT_FOOTNOTE:
				if (t.scroll) {
					var n = r(t.footnoteID, l.ScrollTargetType.Footnote, null, !1);
					d.setScrollTargetDescriptor(n), n && d.emitChange()
				}
				break;
			case c.SELECT_ENDNOTE:
				if (t.scroll) {
					var m = r(t.endnoteID, l.ScrollTargetType.Endnote, null, !1);
					d.setScrollTargetDescriptor(m), m && d.emitChange()
				}
				break;
			case c.SELECT_MARGINAL:
				if (t.scroll) {
					var p = r(t.marginalID, l.ScrollTargetType.Marginal, null, !1);
					d.setScrollTargetDescriptor(p), p && d.emitChange()
				}
				break;
			case c.SELECT_NOTE:
				if (t.scroll) {
					var u = r(t.noteID, l.ScrollTargetType.Note, null, !1);
					d.setScrollTargetDescriptor(u), u && d.emitChange()
				}
				break;
			case c.SELECT_COMMENTARY:
				if (t.scroll) {
					var g = null;
					"number" == typeof t.verse ? g = r(t.verse, l.ScrollTargetType.Verse, null, !1) : "number" == typeof t.paragraph && (g = r(t.paragraph, l.ScrollTargetType.Paragraph, null, !1)), g && (d.setScrollTargetDescriptor(g), d.emitChange())
				}
				break;
			case c.SCROLL_TO_ELEMENT:
				var s = r(t.id, t.scrollTargetType, t.offset, !0);
				d.setScrollTargetDescriptor(s), s && d.emitChange();
				break;
			case c.HIGHLIGHT_SEARCH_TERMS:
				var b = t.targets;
				if (b && b.length > 0) {
					var w = b[0];
					if ("number" == typeof w.verse) {
						var f = r("" + w.verse, l.ScrollTargetType.Verse, null, !1);
						d.setScrollTargetDescriptor(f)
					} else if ("number" == typeof w.paragraph) {
						var h = r("" + w.paragraph, l.ScrollTargetType.Paragraph, null, !1);
						d.setScrollTargetDescriptor(h)
					}
				}
				d.setSearchTermHighlightTargets(b), d.emitChange();
				break;
			case c.SET_BOOKMARKS:
				d.setBookmarks(t.bookmarks), d.emitChange();
				break;
			case c.SET_NOTE_MARKERS:
				d.setNoteMarkers(t.noteMarkers), d.emitChange();
				break;
			case c.SET_INPUT_FIELDS:
				d.setInputFields(t.inputFields), d.emitChange();
				break;
			case c.SET_CURRENT_MEDIA_MARKER:
				d.setCurrentMediaMarker(t.mediaMarker), d.emitChange();
				break;
			case c.SELECT_PUBLICATION_REFERENCE:
				var j = r(t.verseNumber, l.ScrollTargetType.Verse, null, !1);
				d.setScrollTargetDescriptor(j), d.emitChange()
		}
	})), t.exports = d
}, function(t, r, e) {
	(function(r) {
		for (var o = e(341), i = "undefined" == typeof window ? r : window, a = ["moz", "webkit"], n = "AnimationFrame", l = i["request" + n], c = i["cancel" + n] || i["cancelRequest" + n], d = 0; !l && d < a.length; d++) l = i[a[d] + "Request" + n], c = i[a[d] + "Cancel" + n] || i[a[d] + "CancelRequest" + n];
		if (!l || !c) {
			var m = 0,
				p = 0,
				u = [];
			l = function(t) {
				if (0 === u.length) {
					var r = o(),
						e = Math.max(0, 1e3 / 60 - (r - m));
					m = e + r, setTimeout((function() {
						var t = u.slice(0);
						u.length = 0;
						for (var r = 0; r < t.length; r++)
							if (!t[r].cancelled) try {
								t[r].callback(m)
							} catch (t) {
								setTimeout((function() {
									throw t
								}), 0)
							}
					}), Math.round(e))
				}
				return u.push({
					handle: ++p,
					callback: t,
					cancelled: !1
				}), p
			}, c = function(t) {
				for (var r = 0; r < u.length; r++) u[r].handle === t && (u[r].cancelled = !0)
			}
		}
		t.exports = function(t) {
			return l.call(i, t)
		}, t.exports.cancel = function() {
			c.apply(i, arguments)
		}, t.exports.polyfill = function(t) {
			t || (t = i), t.requestAnimationFrame = l, t.cancelAnimationFrame = c
		}
	}).call(this, e(67))
}, function(t, r, e) {
	"use strict";
	var o = e(65),
		i = e(6),
		a = e(87),
		n = e(31),
		l = e(88),
		c = e(89),
		d = e(92),
		m = e(15),
		p = e(13),
		u = e(173),
		g = e(60),
		s = e(307);
	t.exports = function(t, r, e) {
		var b = -1 !== t.indexOf("Map"),
			w = -1 !== t.indexOf("Weak"),
			f = b ? "set" : "add",
			h = i[t],
			j = h && h.prototype,
			x = h,
			y = {},
			S = function(t) {
				var r = j[t];
				n(j, t, "add" == t ? function(t) {
					return r.call(this, 0 === t ? 0 : t), this
				} : "delete" == t ? function(t) {
					return !(w && !m(t)) && r.call(this, 0 === t ? 0 : t)
				} : "get" == t ? function(t) {
					return w && !m(t) ? void 0 : r.call(this, 0 === t ? 0 : t)
				} : "has" == t ? function(t) {
					return !(w && !m(t)) && r.call(this, 0 === t ? 0 : t)
				} : function(t, e) {
					return r.call(this, 0 === t ? 0 : t, e), this
				})
			};
		if (a(t, "function" != typeof h || !(w || j.forEach && !p((function() {
				(new h).entries().next()
			}))))) x = e.getConstructor(r, t, b, f), l.REQUIRED = !0;
		else if (a(t, !0)) {
			var v = new x,
				O = v[f](w ? {} : -0, 1) != v,
				k = p((function() {
					v.has(1)
				})),
				E = u((function(t) {
					new h(t)
				})),
				C = !w && p((function() {
					for (var t = new h, r = 5; r--;) t[f](r, r);
					return !t.has(-0)
				}));
			E || ((x = r((function(r, e) {
				d(r, x, t);
				var o = s(new h, r, x);
				return null != e && c(e, o[f], o, b), o
			}))).prototype = j, j.constructor = x), (k || C) && (S("delete"), S("has"), b && S("get")), (C || O) && S(f), w && j.clear && delete j.clear
		}
		return y[t] = x, o({
			global: !0,
			forced: x != h
		}, y), g(x, t), w || e.setStrong(x, t, b), x
	}
}, function(t, r, e) {
	var o = e(21),
		i = e(166),
		a = e(47),
		n = e(40),
		l = e(73),
		c = e(10),
		d = e(81),
		m = Object.getOwnPropertyDescriptor;
	r.f = o ? m : function(t, r) {
		if (t = n(t), r = l(r, !0), d) try {
			return m(t, r)
		} catch (t) {}
		if (c(t, r)) return a(!i.f.call(t, r), t[r])
	}
}, function(t, r) {
	var e = {}.toString;
	t.exports = function(t) {
		return e.call(t).slice(8, -1)
	}
}, function(t, r, e) {
	var o = e(21),
		i = e(13),
		a = e(82);
	t.exports = !o && !i((function() {
		return 7 != Object.defineProperty(a("div"), "a", {
			get: function() {
				return 7
			}
		}).a
	}))
}, function(t, r, e) {
	var o = e(6),
		i = e(15),
		a = o.document,
		n = i(a) && i(a.createElement);
	t.exports = function(t) {
		return n ? a.createElement(t) : {}
	}
}, function(t, r, e) {
	var o = e(84),
		i = Function.toString;
	"function" != typeof o.inspectSource && (o.inspectSource = function(t) {
		return i.call(t)
	}), t.exports = o.inspectSource
}, function(t, r, e) {
	var o = e(6),
		i = e(52),
		a = o["__core-js_shared__"] || i("__core-js_shared__", {});
	t.exports = a
}, function(t, r, e) {
	var o = e(54),
		i = e(84);
	(t.exports = function(t, r) {
		return i[t] || (i[t] = void 0 !== r ? r : {})
	})("versions", []).push({
		version: "3.6.5",
		mode: o ? "pure" : "global",
		copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
	})
}, function(t, r, e) {
	var o = e(10),
		i = e(40),
		a = e(168).indexOf,
		n = e(42);
	t.exports = function(t, r) {
		var e, l = i(t),
			c = 0,
			d = [];
		for (e in l) !o(n, e) && o(l, e) && d.push(e);
		for (; r.length > c;) o(l, e = r[c++]) && (~a(d, e) || d.push(e));
		return d
	}
}, function(t, r, e) {
	var o = e(13),
		i = /#|\.prototype\./,
		a = function(t, r) {
			var e = l[n(t)];
			return e == d || e != c && ("function" == typeof r ? o(r) : !!r)
		},
		n = a.normalize = function(t) {
			return String(t).replace(i, ".").toLowerCase()
		},
		l = a.data = {},
		c = a.NATIVE = "N",
		d = a.POLYFILL = "P";
	t.exports = a
}, function(t, r, e) {
	var o = e(42),
		i = e(15),
		a = e(10),
		n = e(14).f,
		l = e(55),
		c = e(304),
		d = l("meta"),
		m = 0,
		p = Object.isExtensible || function() {
			return !0
		},
		u = function(t) {
			n(t, d, {
				value: {
					objectID: "O" + ++m,
					weakData: {}
				}
			})
		},
		g = t.exports = {
			REQUIRED: !1,
			fastKey: function(t, r) {
				if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
				if (!a(t, d)) {
					if (!p(t)) return "F";
					if (!r) return "E";
					u(t)
				}
				return t[d].objectID
			},
			getWeakData: function(t, r) {
				if (!a(t, d)) {
					if (!p(t)) return !0;
					if (!r) return !1;
					u(t)
				}
				return t[d].weakData
			},
			onFreeze: function(t) {
				return c && g.REQUIRED && p(t) && !a(t, d) && u(t), t
			}
		};
	o[d] = !0
}, function(t, r, e) {
	var o = e(24),
		i = e(170),
		a = e(74),
		n = e(68),
		l = e(171),
		c = e(172),
		d = function(t, r) {
			this.stopped = t, this.result = r
		};
	(t.exports = function(t, r, e, m, p) {
		var u, g, s, b, w, f, h, j = n(r, e, m ? 2 : 1);
		if (p) u = t;
		else {
			if ("function" != typeof(g = l(t))) throw TypeError("Target is not iterable");
			if (i(g)) {
				for (s = 0, b = a(t.length); b > s; s++)
					if ((w = m ? j(o(h = t[s])[0], h[1]) : j(t[s])) && w instanceof d) return w;
				return new d(!1)
			}
			u = g.call(t)
		}
		for (f = u.next; !(h = f.call(u)).done;)
			if ("object" == typeof(w = c(u, j, h.value, m)) && w && w instanceof d) return w;
		return new d(!1)
	}).stop = function(t) {
		return new d(!0, t)
	}
}, function(t, r, e) {
	var o = e(13);
	t.exports = !!Object.getOwnPropertySymbols && !o((function() {
		return !String(Symbol())
	}))
}, function(t, r, e) {
	var o = e(59),
		i = e(80),
		a = e(9)("toStringTag"),
		n = "Arguments" == i(function() {
			return arguments
		}());
	t.exports = o ? i : function(t) {
		var r, e, o;
		return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = function(t, r) {
			try {
				return t[r]
			} catch (t) {}
		}(r = Object(t), a)) ? e : n ? i(r) : "Object" == (o = i(r)) && "function" == typeof r.callee ? "Arguments" : o
	}
}, function(t, r) {
	t.exports = function(t, r, e) {
		if (!(t instanceof r)) throw TypeError("Incorrect " + (e ? e + " " : "") + "invocation");
		return t
	}
}, function(t, r, e) {
	var o = e(24),
		i = e(308);
	t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
		var t, r = !1,
			e = {};
		try {
			(t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), r = e instanceof Array
		} catch (t) {}
		return function(e, a) {
			return o(e), i(a), r ? t.call(e, a) : e.__proto__ = a, e
		}
	}() : void 0)
}, function(t, r, e) {
	"use strict";
	var o = e(14).f,
		i = e(61),
		a = e(311),
		n = e(68),
		l = e(92),
		c = e(89),
		d = e(62),
		m = e(314),
		p = e(21),
		u = e(88).fastKey,
		g = e(41),
		s = g.set,
		b = g.getterFor;
	t.exports = {
		getConstructor: function(t, r, e, d) {
			var m = t((function(t, o) {
					l(t, m, r), s(t, {
						type: r,
						index: i(null),
						first: void 0,
						last: void 0,
						size: 0
					}), p || (t.size = 0), null != o && c(o, t[d], t, e)
				})),
				g = b(r),
				w = function(t, r, e) {
					var o, i, a = g(t),
						n = f(t, r);
					return n ? n.value = e : (a.last = n = {
						index: i = u(r, !0),
						key: r,
						value: e,
						previous: o = a.last,
						next: void 0,
						removed: !1
					}, a.first || (a.first = n), o && (o.next = n), p ? a.size++ : t.size++, "F" !== i && (a.index[i] = n)), t
				},
				f = function(t, r) {
					var e, o = g(t),
						i = u(r);
					if ("F" !== i) return o.index[i];
					for (e = o.first; e; e = e.next)
						if (e.key == r) return e
				};
			return a(m.prototype, {
				clear: function() {
					for (var t = g(this), r = t.index, e = t.first; e;) e.removed = !0, e.previous && (e.previous = e.previous.next = void 0), delete r[e.index], e = e.next;
					t.first = t.last = void 0, p ? t.size = 0 : this.size = 0
				},
				delete: function(t) {
					var r = g(this),
						e = f(this, t);
					if (e) {
						var o = e.next,
							i = e.previous;
						delete r.index[e.index], e.removed = !0, i && (i.next = o), o && (o.previous = i), r.first == e && (r.first = o), r.last == e && (r.last = i), p ? r.size-- : this.size--
					}
					return !!e
				},
				forEach: function(t) {
					for (var r, e = g(this), o = n(t, arguments.length > 1 ? arguments[1] : void 0, 3); r = r ? r.next : e.first;)
						for (o(r.value, r.key, this); r && r.removed;) r = r.previous
				},
				has: function(t) {
					return !!f(this, t)
				}
			}), a(m.prototype, e ? {
				get: function(t) {
					var r = f(this, t);
					return r && r.value
				},
				set: function(t, r) {
					return w(this, 0 === t ? 0 : t, r)
				}
			} : {
				add: function(t) {
					return w(this, t = 0 === t ? 0 : t, t)
				}
			}), p && o(m.prototype, "size", {
				get: function() {
					return g(this).size
				}
			}), m
		},
		setStrong: function(t, r, e) {
			var o = r + " Iterator",
				i = b(r),
				a = b(o);
			d(t, r, (function(t, r) {
				s(this, {
					type: o,
					target: t,
					state: i(t),
					kind: r,
					last: void 0
				})
			}), (function() {
				for (var t = a(this), r = t.kind, e = t.last; e && e.removed;) e = e.previous;
				return t.target && (t.last = e = e ? e.next : t.state.first) ? "keys" == r ? {
					value: e.key,
					done: !1
				} : "values" == r ? {
					value: e.value,
					done: !1
				} : {
					value: [e.key, e.value],
					done: !1
				} : (t.target = void 0, {
					value: void 0,
					done: !0
				})
			}), e ? "entries" : "values", !e, !0), m(r)
		}
	}
}, function(t, r, e) {
	"use strict";
	var o, i, a, n = e(96),
		l = e(23),
		c = e(10),
		d = e(9),
		m = e(54),
		p = d("iterator"),
		u = !1;
	[].keys && ("next" in (a = [].keys()) ? (i = n(n(a))) !== Object.prototype && (o = i) : u = !0), null == o && (o = {}), m || c(o, p) || l(o, p, (function() {
		return this
	})), t.exports = {
		IteratorPrototype: o,
		BUGGY_SAFARI_ITERATORS: u
	}
}, function(t, r, e) {
	var o = e(10),
		i = e(162),
		a = e(53),
		n = e(313),
		l = a("IE_PROTO"),
		c = Object.prototype;
	t.exports = n ? Object.getPrototypeOf : function(t) {
		return t = i(t), o(t, l) ? t[l] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null
	}
}, function(t, r, e) {
	var o = e(59),
		i = e(31),
		a = e(315);
	o || i(Object.prototype, "toString", a, {
		unsafe: !0
	})
}, function(t, r, e) {
	var o = e(6),
		i = e(317),
		a = e(318),
		n = e(23),
		l = e(9),
		c = l("iterator"),
		d = l("toStringTag"),
		m = a.values;
	for (var p in i) {
		var u = o[p],
			g = u && u.prototype;
		if (g) {
			if (g[c] !== m) try {
				n(g, c, m)
			} catch (t) {
				g[c] = m
			}
			if (g[d] || n(g, d, p), i[p])
				for (var s in a)
					if (g[s] !== a[s]) try {
						n(g, s, a[s])
					} catch (t) {
						g[s] = a[s]
					}
		}
	}
}, function(t, r, e) {
	"use strict";
	var o, i = e(64),
		a = e(37),
		n = e(39),
		l = e(69);
	! function(t) {
		t[t.Forward = 0] = "Forward", t[t.Backward = 1] = "Backward"
	}(o || (o = {}));
	var c = function() {
		function t() {}
		return t.drawSelection = function(r, e, o) {
			var i = n.getTokenInfos(r, !0),
				l = [];
			if (i)
				for (var c = 0, d = i; c < d.length; c++) {
					var m = d[c];
					(b = m.element) && n.shouldMarkTokenInfo(m, b) && (b.classList.contains(t.TEXT_SELECTION_COLOR_CLASS) || b.classList.add(t.TEXT_SELECTION_COLOR_CLASS), l.push(m.elementId), b.setAttribute(t.TEXT_SELECTION_COLOR_ATTR, t.TEXT_SELECTION_COLOR_CLASS))
				}
			var p = t.selectionWordInfoElementIDMap.selection;
			if (p)
				for (var u = 0, g = p; u < g.length; u++) {
					var s = g[u];
					if (-1 === l.indexOf(s)) {
						var b, w = a.getTokenInfoByElementID(s);
						if (w)(b = w.element) && (b.classList.remove(t.TEXT_SELECTION_COLOR_CLASS), b.removeAttribute(t.TEXT_SELECTION_COLOR_ATTR))
					}
				}
			t.selectionWordInfoElementIDMap.selection = l, this._positionHandlesAroundSelection(r, e, o)
		}, t.clearSelection = function(r) {
			r && (r.ranges = [], t.drawSelection(r), this.showSelectionHandles(!1), this.START_HANDLE_TOP_THRESHOLD = void 0, this.END_HANDLE_TOP_THRESHOLD = void 0)
		}, t.showSelectionHandles = function(r) {
			var e = r ? "inline" : "none",
				o = document.getElementById(t.START_HANDLE_ID);
			o && (o.style.display = e), (o = document.getElementById(t.END_HANDLE_ID)) && (o.style.display = e);
			var i = document.getElementById(t.START_HANDLE_LINE_ID);
			i && (i.style.display = e), (i = document.getElementById(t.END_HANDLE_LINE_ID)) && (i.style.display = e)
		}, t.serializeSelection = function(t, r) {
			if (t && t.ranges && t.ranges.length > 0) {
				var e = [],
					o = null;
				t.isBlank() || (o = t.ranges[0]);
				for (var i = 0, a = t.ranges; i < a.length; i++) {
					var l = a[i];
					e.push(l.toJson())
				}
				var c = n.getFirstClientLineRect(t);
				if (!c && !(c = n.getBoundingClientRect(t))) return null;
				var d = "";
				r && (d = n.getTextContent(t));
				var m = {
					ranges: e,
					text: d,
					rect: c
				};
				return o && (o.isInVerse() ? m.verseID = o.verseID : m.paragraphID = o.paragraphID), m
			}
			return null
		}, t.createUserMarkFromRanges = function(t, r, e) {
			return new i(t, r, e)
		}, t._positionHandlesAroundSelection = function(t, r, e) {
			var o = !0 === e ? "none" : "inline",
				i = document.getElementById(this.START_HANDLE_ID);
			i || (i = this._createHandleElement(this.START_HANDLE_ID, r)), i.style.display = o;
			var a, n = t.startTokenInfo.calculateRect();
			i.style.left = r ? n.maxX() - 11 + "px" : n.left - 12 + "px", a = n.top - 18, i.style.top = a + "px", this.START_HANDLE_TOP_THRESHOLD = n.top - a, (l = document.getElementById(this.START_HANDLE_LINE_ID)) || (l = this._createHandleLineElement(this.START_HANDLE_LINE_ID)), l.style.display = o, l.style.height = n.height + "px", l.style.top = n.top + "px", l.style.left = r ? n.maxX() + "px" : n.left - 1 + "px", (i = document.getElementById(this.END_HANDLE_ID)) || (i = this._createHandleElement(this.END_HANDLE_ID, r)), i.style.display = o;
			var l, c = t.endTokenInfo.calculateRect();
			i.style.left = r ? c.left - 12 + "px" : c.maxX() - 11 + "px", a = c.maxY() - 6, i.style.top = a + "px", this.END_HANDLE_TOP_THRESHOLD = a - c.top, (l = document.getElementById(this.END_HANDLE_LINE_ID)) || (l = this._createHandleLineElement(this.END_HANDLE_LINE_ID)), l.style.display = o, l.style.height = c.height + "px", l.style.top = c.top + "px", l.style.left = r ? c.left - 1 + "px" : c.maxX() + "px"
		}, t.resetHandleElements = function(t) {}, t._createHandleElement = function(r, e) {
			var o = document.createElement("span");
			o.id = r, o.className = t.HANDLE_CONTAINER_CLASS, o.style.position = "absolute";
			var i = document.createElement("img");
			return i.className = t.HANDLE_IMAGE_CLASS, i.src = l.imageSourceWithOptimalResolution("./images/ios_text_selection_handle.png"), i.width = 12, i.height = 12, i.style.left = "6px", i.style.top = "6px", o.appendChild(i), o.style.width = 2 * i.width + "px", o.style.height = 2 * i.height + "px", document.body.appendChild(o), o
		}, t._createHandleLineElement = function(r) {
			var e = document.createElement("div");
			return e.id = r, e.className = t.HANDLE_LINE_CLASS, e.style.position = "absolute", document.body.appendChild(e), e
		}, t.clearCache = function() {
			t.selectionWordInfoElementIDMap = {}
		}, t.HANDLE_CONTAINER_CLASS = "selection_handle_container", t.START_HANDLE_ID = "jwd-select-start", t.END_HANDLE_ID = "jwd-select-end", t.START_HANDLE_LINE_ID = "jwd_selection_start_line", t.END_HANDLE_LINE_ID = "jwd_selection_end_line", t.HANDLE_LINE_CLASS = "jwd_selection_line", t.HANDLE_IMAGE_CLASS = "text_selection_handle_image", t.TEXT_SELECTION_COLOR_ATTR = "data-jwd-sc", t.TEXT_SELECTION_COLOR_CLASS = "text_selection_color", t.selectionWordInfoElementIDMap = {}, t
	}();
	window.addEventListener("clearContentBasedCache", c.clearCache), t.exports = c
}, , , function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark0_margin.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark0_margin@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark0_margin@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark1_margin.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark1_margin@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark1_margin@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark2_margin.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark2_margin@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark2_margin@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark3_margin.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark3_margin@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark3_margin@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark4_margin.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark4_margin@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark4_margin@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark5_margin.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark5_margin@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark5_margin@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark6_margin.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark6_margin@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark6_margin@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark7_margin.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark7_margin@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark7_margin@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark8_margin.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark8_margin@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark8_margin@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark9_margin.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark9_margin@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark9_margin@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark0_margin_dark.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark0_margin_dark@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark0_margin_dark@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark1_margin_dark.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark1_margin_dark@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark1_margin_dark@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark2_margin_dark.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark2_margin_dark@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark2_margin_dark@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark3_margin_dark.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark3_margin_dark@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark3_margin_dark@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark4_margin_dark.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark4_margin_dark@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark4_margin_dark@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark5_margin_dark.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark5_margin_dark@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark5_margin_dark@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark6_margin_dark.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark6_margin_dark@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark6_margin_dark@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark7_margin_dark.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark7_margin_dark@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark7_margin_dark@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark8_margin_dark.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark8_margin_dark@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark8_margin_dark@3x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark9_margin_dark.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark9_margin_dark@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/bookmark9_margin_dark@3x.png"
}, function(t, r, e) {
	var o = e(51);
	t.exports = function(t) {
		return Object(o(t))
	}
}, function(t, r, e) {
	"use strict";
	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	var o = Object.getOwnPropertySymbols,
		i = Object.prototype.hasOwnProperty,
		a = Object.prototype.propertyIsEnumerable;

	function n(t) {
		if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
		return Object(t)
	}
	t.exports = function() {
		try {
			if (!Object.assign) return !1;
			var t = new String("abc");
			if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
			for (var r = {}, e = 0; e < 10; e++) r["_" + String.fromCharCode(e)] = e;
			if ("0123456789" !== Object.getOwnPropertyNames(r).map((function(t) {
					return r[t]
				})).join("")) return !1;
			var o = {};
			return "abcdefghijklmnopqrst".split("").forEach((function(t) {
				o[t] = t
			})), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
		} catch (t) {
			return !1
		}
	}() ? Object.assign : function(t, r) {
		for (var e, l, c = n(t), d = 1; d < arguments.length; d++) {
			for (var m in e = Object(arguments[d])) i.call(e, m) && (c[m] = e[m]);
			if (o) {
				l = o(e);
				for (var p = 0; p < l.length; p++) a.call(e, l[p]) && (c[l[p]] = e[l[p]])
			}
		}
		return c
	}
}, function(t, r, e) {
	"use strict";

	function o(t, r) {
		if (t.length !== r.length) return !1;
		for (var e = 0; e < t.length; e++)
			if (t[e] !== r[e]) return !1;
		return !0
	}
	r.a = function(t, r) {
		var e;
		void 0 === r && (r = o);
		var i, a = [],
			n = !1;
		return function() {
			for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++) l[c] = arguments[c];
			return n && e === this && r(l, a) || (i = t.apply(this, l), n = !0, e = this, a = l), i
		}
	}
}, , function(t, r, e) {
	"use strict";
	var o = {}.propertyIsEnumerable,
		i = Object.getOwnPropertyDescriptor,
		a = i && !o.call({
			1: 2
		}, 1);
	r.f = a ? function(t) {
		var r = i(this, t);
		return !!r && r.enumerable
	} : o
}, function(t, r, e) {
	var o = e(13),
		i = e(80),
		a = "".split;
	t.exports = o((function() {
		return !Object("z").propertyIsEnumerable(0)
	})) ? function(t) {
		return "String" == i(t) ? a.call(t, "") : Object(t)
	} : Object
}, function(t, r, e) {
	var o = e(40),
		i = e(74),
		a = e(303),
		n = function(t) {
			return function(r, e, n) {
				var l, c = o(r),
					d = i(c.length),
					m = a(n, d);
				if (t && e != e) {
					for (; d > m;)
						if ((l = c[m++]) != l) return !0
				} else
					for (; d > m; m++)
						if ((t || m in c) && c[m] === e) return t || m || 0;
				return !t && -1
			}
		};
	t.exports = {
		includes: n(!0),
		indexOf: n(!1)
	}
}, function(t, r) {
	r.f = Object.getOwnPropertySymbols
}, function(t, r, e) {
	var o = e(9),
		i = e(32),
		a = o("iterator"),
		n = Array.prototype;
	t.exports = function(t) {
		return void 0 !== t && (i.Array === t || n[a] === t)
	}
}, function(t, r, e) {
	var o = e(91),
		i = e(32),
		a = e(9)("iterator");
	t.exports = function(t) {
		if (null != t) return t[a] || t["@@iterator"] || i[o(t)]
	}
}, function(t, r, e) {
	var o = e(24);
	t.exports = function(t, r, e, i) {
		try {
			return i ? r(o(e)[0], e[1]) : r(e)
		} catch (r) {
			var a = t.return;
			throw void 0 !== a && o(a.call(t)), r
		}
	}
}, function(t, r, e) {
	var o = e(9)("iterator"),
		i = !1;
	try {
		var a = 0,
			n = {
				next: function() {
					return {
						done: !!a++
					}
				},
				return: function() {
					i = !0
				}
			};
		n[o] = function() {
			return this
		}, Array.from(n, (function() {
			throw 2
		}))
	} catch (t) {}
	t.exports = function(t, r) {
		if (!r && !i) return !1;
		var e = !1;
		try {
			var a = {};
			a[o] = function() {
				return {
					next: function() {
						return {
							done: e = !0
						}
					}
				}
			}, t(a)
		} catch (t) {}
		return e
	}
}, function(t, r, e) {
	var o = e(86),
		i = e(58);
	t.exports = Object.keys || function(t) {
		return o(t, i)
	}
}, function(t, r, e) {
	var o = e(9),
		i = e(61),
		a = e(14),
		n = o("unscopables"),
		l = Array.prototype;
	null == l[n] && a.f(l, n, {
		configurable: !0,
		value: i(null)
	}), t.exports = function(t) {
		l[n][t] = !0
	}
}, function(t, r, e) {
	"use strict";
	var o = e(38),
		i = e(332),
		a = e(64),
		n = e(37),
		l = e(39),
		c = function() {
			function t() {}
			return t.clearAllSelection = function() {
				var r = window.getSelection();
				r && r.removeAllRanges(), t.CurrentSelectionRange = null
			}, t.createUserMarkFromSelection = function(r, e) {
				var i = null;
				if (t.CurrentSelectionRange) {
					var c = this.getFirstSelectedWordId(),
						d = this.getLastSelectedWordId();
					if (o.idIsValid(c) && o.idIsValid(d)) {
						var m = n.getTokenInfoByElementID(c),
							p = n.getTokenInfoByElementID(d),
							u = l.getRangesBetweenTokenInfos(m, p);
						i = new a(r, e, u), t.clearAllSelection()
					}
				}
				return i
			}, t.createTokenGroupRangeFromSelection = function() {
				var r = null;
				if (t.CurrentSelectionRange) {
					var e = this.getFirstSelectedWordId(),
						a = this.getLastSelectedWordId();
					if (o.idIsValid(e) && o.idIsValid(a)) {
						var l = n.getTokenInfoByElementID(e),
							c = n.getTokenInfoByElementID(a);
						r = new i(l.groupId, l.groupWordIndex, c.groupWordIndex)
					}
				}
				return r
			}, t.getFirstSelectedWordId = function() {
				var r = t.CurrentSelectionRange.startContainer,
					e = r instanceof HTMLElement ? r : r.parentElement,
					o = t.getClosestNextTokenToElement(e);
				return o ? o.id : null
			}, t.getLastSelectedWordId = function() {
				var r = t.CurrentSelectionRange.endContainer,
					e = r.nodeType === Node.ELEMENT_NODE,
					o = e ? r : r.parentElement,
					i = t.getClosestPreviousTokenToElement(o);
				return i && !e && 0 === t.CurrentSelectionRange.endOffset && " " !== r.textContent && (i = i.previousElementSibling, i = t.getClosestPreviousTokenToElement(i)), i ? i.id : null
			}, t.getClosestNextTokenToElement = function(t) {
				for (; t && (!t.hasAttribute || !t.hasAttribute(o.WORD_ATTR_MARK));) t = t.children && t.children.length > 0 ? t.children[0] : t.nextElementSibling ? t.nextElementSibling : t.parentElement.nextElementSibling;
				return t
			}, t.getClosestPreviousTokenToElement = function(t) {
				for (; t && (!t.hasAttribute || !t.hasAttribute(o.WORD_ATTR_MARK));) t = t.children && t.children.length > 0 ? t.children[t.children.length - 1] : t.previousElementSibling ? t.previousElementSibling : t.parentElement.previousElementSibling;
				return t
			}, t
		}();
	t.exports = c
}, function(t, r, e) {
	"use strict";
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.search_results_none = r.messages_help_download_bibles = r.message_verse_not_present = r.message_tap_link = r.message_no_study_content = r.message_download_research_guide = r.message_content_not_available_in_selected_language = r.label_research_guide = r.label_note_title = r.label_note = r.label_more = r.label_marginal_quotation = r.label_marginal_parallel_account = r.label_marginal_general = r.action_download = r.action_remove_tag = r.action_add_a_tag = void 0, r.action_add_a_tag = "action_add_a_tag", r.action_remove_tag = "action_remove_tag", r.action_download = "action_download", r.label_marginal_general = "label_marginal_general", r.label_marginal_parallel_account = "label_marginal_parallel_account", r.label_marginal_quotation = "label_marginal_quotation", r.label_more = "label_more", r.label_note = "label_note", r.label_note_title = "label_note_title", r.label_research_guide = "label_research_guide", r.message_content_not_available_in_selected_language = "message_content_not_available_in_selected_language", r.message_download_research_guide = "message_download_research_guide", r.message_no_study_content = "message_no_study_content", r.message_tap_link = "message_tap_link", r.message_verse_not_present = "message_verse_not_present", r.messages_help_download_bibles = "messages_help_download_bibles", r.search_results_none = "search_results_none"
}, function(t, r, e) {
	"use strict";

	function o(t, r) {
		return r || (r = t.slice(0)), Object.freeze(Object.defineProperties(t, {
			raw: {
				value: Object.freeze(r)
			}
		}))
	}
	e.d(r, "a", (function() {
		return o
	}))
}, function(t, r, e) {
	"use strict";
	Object.defineProperty(r, "__esModule", {
		value: !0
	});
	var o = Object.assign || function(t) {
			for (var r = 1; r < arguments.length; r++) {
				var e = arguments[r];
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			}
			return t
		},
		i = function() {
			function t(t, r) {
				for (var e = 0; e < r.length; e++) {
					var o = r[e];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
				}
			}
			return function(r, e, o) {
				return e && t(r.prototype, e), o && t(r, o), r
			}
		}(),
		a = e(2),
		n = c(a),
		l = c(e(46));

	function c(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var d = {
			position: "absolute",
			top: 0,
			left: 0,
			visibility: "hidden",
			height: 0,
			overflow: "scroll",
			whiteSpace: "pre"
		},
		m = ["extraWidth", "injectStyles", "inputClassName", "inputRef", "inputStyle", "minWidth", "onAutosize", "placeholderIsMinWidth"],
		p = function(t, r) {
			r.style.fontSize = t.fontSize, r.style.fontFamily = t.fontFamily, r.style.fontWeight = t.fontWeight, r.style.fontStyle = t.fontStyle, r.style.letterSpacing = t.letterSpacing, r.style.textTransform = t.textTransform
		},
		u = !("undefined" == typeof window || !window.navigator) && /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent),
		g = function() {
			return u ? "_" + Math.random().toString(36).substr(2, 12) : void 0
		},
		s = function(t) {
			function r(t) {
				! function(t, r) {
					if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
				}(this, r);
				var e = function(t, r) {
					if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !r || "object" != typeof r && "function" != typeof r ? t : r
				}(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, t));
				return e.inputRef = function(t) {
					e.input = t, "function" == typeof e.props.inputRef && e.props.inputRef(t)
				}, e.placeHolderSizerRef = function(t) {
					e.placeHolderSizer = t
				}, e.sizerRef = function(t) {
					e.sizer = t
				}, e.state = {
					inputWidth: t.minWidth,
					inputId: t.id || g()
				}, e
			}
			return function(t, r) {
				if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
				t.prototype = Object.create(r && r.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), r && (Object.setPrototypeOf ? Object.setPrototypeOf(t, r) : t.__proto__ = r)
			}(r, t), i(r, [{
				key: "componentDidMount",
				value: function() {
					this.mounted = !0, this.copyInputStyles(), this.updateInputWidth()
				}
			}, {
				key: "componentWillReceiveProps",
				value: function(t) {
					var r = t.id;
					r !== this.props.id && this.setState({
						inputId: r || g()
					})
				}
			}, {
				key: "componentDidUpdate",
				value: function(t, r) {
					r.inputWidth !== this.state.inputWidth && "function" == typeof this.props.onAutosize && this.props.onAutosize(this.state.inputWidth), this.updateInputWidth()
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.mounted = !1
				}
			}, {
				key: "copyInputStyles",
				value: function() {
					if (this.mounted && window.getComputedStyle) {
						var t = this.input && window.getComputedStyle(this.input);
						t && (p(t, this.sizer), this.placeHolderSizer && p(t, this.placeHolderSizer))
					}
				}
			}, {
				key: "updateInputWidth",
				value: function() {
					if (this.mounted && this.sizer && void 0 !== this.sizer.scrollWidth) {
						var t = void 0;
						t = this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth) ? Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2 : this.sizer.scrollWidth + 2, (t += "number" === this.props.type && void 0 === this.props.extraWidth ? 16 : parseInt(this.props.extraWidth) || 0) < this.props.minWidth && (t = this.props.minWidth), t !== this.state.inputWidth && this.setState({
							inputWidth: t
						})
					}
				}
			}, {
				key: "getInput",
				value: function() {
					return this.input
				}
			}, {
				key: "focus",
				value: function() {
					this.input.focus()
				}
			}, {
				key: "blur",
				value: function() {
					this.input.blur()
				}
			}, {
				key: "select",
				value: function() {
					this.input.select()
				}
			}, {
				key: "renderStyles",
				value: function() {
					var t = this.props.injectStyles;
					return u && t ? n.default.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "input#" + this.state.inputId + "::-ms-clear {display: none;}"
						}
					}) : null
				}
			}, {
				key: "render",
				value: function() {
					var t = [this.props.defaultValue, this.props.value, ""].reduce((function(t, r) {
							return null != t ? t : r
						})),
						r = o({}, this.props.style);
					r.display || (r.display = "inline-block");
					var e = o({
							boxSizing: "content-box",
							width: this.state.inputWidth + "px"
						}, this.props.inputStyle),
						i = function(t, r) {
							var e = {};
							for (var o in t) r.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
							return e
						}(this.props, []);
					return function(t) {
						m.forEach((function(r) {
							return delete t[r]
						}))
					}(i), i.className = this.props.inputClassName, i.id = this.state.inputId, i.style = e, n.default.createElement("div", {
						className: this.props.className,
						style: r
					}, this.renderStyles(), n.default.createElement("input", o({}, i, {
						ref: this.inputRef
					})), n.default.createElement("div", {
						ref: this.sizerRef,
						style: d
					}, t), this.props.placeholder ? n.default.createElement("div", {
						ref: this.placeHolderSizerRef,
						style: d
					}, this.props.placeholder) : null)
				}
			}]), r
		}(a.Component);
	s.propTypes = {
		className: l.default.string,
		defaultValue: l.default.any,
		extraWidth: l.default.oneOfType([l.default.number, l.default.string]),
		id: l.default.string,
		injectStyles: l.default.bool,
		inputClassName: l.default.string,
		inputRef: l.default.func,
		inputStyle: l.default.object,
		minWidth: l.default.oneOfType([l.default.number, l.default.string]),
		onAutosize: l.default.func,
		onChange: l.default.func,
		placeholder: l.default.string,
		placeholderIsMinWidth: l.default.bool,
		style: l.default.object,
		value: l.default.any
	}, s.defaultProps = {
		minWidth: 1,
		injectStyles: !0
	}, r.default = s
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "jw-icons-external-1970474.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "jw-icons-external-1970474.ttf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/spinner--small@2x.png"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "images/spinner--default@2x.png"
}, function(t, r) {
	t.exports = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><style>.cls-1{fill:#799fcc;}.cls-2{fill:#fff;}</style></defs><title>wol-trademark-color</title><rect id="Rectangle-path" class="cls-1" width="38" height="38"/><path id="Shape" class="cls-2" d="M30.55,7.13H25.34V9.79H24V7.13h-2.6V9.79h-1.3V7.13h-2.6V9.79H16.23V7.13h-2.6V9.79h-1.3V7.13H7.13v9.31h1.3v1.33h1.3v13.3H28V17.77h1.3V16.44h1.3Z"/><path class="cls-1" d="M41,33.77H39.68V33h3.45v.77H41.84V38H41Z"/><path class="cls-1" d="M43.76,33h.86l1.26,2.47L47.13,33H48v5h-.87V34.5l-1,2.1h-.47l-1-2.1V38h-.86Z"/></svg>'
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSans-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSans-Italic.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSans-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSans-BoldItalic.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSerif-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSerif-Italic.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSerif-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSerif-BoldItalic.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansArmenian-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansArmenian-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSerifArmenian-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSerifArmenian-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansGeorgian-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansGeorgian-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSerifGeorgian-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSerifGeorgian-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSerifKannada-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSerifKannada-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansArabic-Regular.ttf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansArabic-Bold.ttf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoNaskhArabic-Regular.ttf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoNaskhArabic-Bold.ttf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansHebrew-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansHebrew-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSerifHebrew-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSerifHebrew-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansMalayalam-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansMalayalam-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansMyanmar-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansMyanmar-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansTamil-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansTamil-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansDevanagari-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansDevanagari-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSerifDevanagari-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSerifDevanagari-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansBengali-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansBengali-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansGujarati-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansGujarati-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSerifGujarati-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSerifGujarati-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansOriya-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansOriya-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansGurmukhi-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansGurmukhi-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansSinhala-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansSinhala-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansTelugu-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansTelugu-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/notosanstibetan-regular-webfont.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansKhmer-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansKhmer-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSerifKhmer-Regular.ttf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSerifKhmer-Bold.ttf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansKannada-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansKannada-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansKR-Regular.otf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansKR-Bold.otf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansJP-Regular.otf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansJP-Bold.otf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansSC-Regular.otf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansSC-Bold.otf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansTC-Regular.otf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/NotoSansTC-Bold.otf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/karen-text.ttf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/DejaVuSans.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/DejaVuSans-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/DejaVuSans-Oblique.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/DejaVuSans-BoldOblique.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/abyssinicasil-r-webfont.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/XB-Zar-Regular.ttf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/XB-Zar-Bold.ttf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/XB-Zar-Italic.ttf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/XB-Zar-BoldItalic.ttf"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/padauk-regular-webfont.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/nafees_pakistani_naskh-webfont.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Roboto-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Roboto-Italic.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Roboto-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Roboto-BoldItalic.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-MannaSansTibetan-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-MannaSansTibetan-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/WT-MannaSansMyanmar-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/WT-MannaSansMyanmar-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-MannaNastaliqUrdu-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-MannaNastaliqUrdu-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-ClearText-Medium.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-ClearText-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-ClearText-MediumItalic.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-ClearText-BoldItalic.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-ClearTextJapanese-Medium.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-Jonathan.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-BaeumMyungjo-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-BaeumMyungjo-Italic.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-TextNew-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-TextNew-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-TextNew-Italic.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-TextNew-BoldItalic.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-FootnoteSerif-Book.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-OmerSansMazahua-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-OmerSansMazahua-Italic.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-OmerSansMazahua-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-OmerSansMazahua-BoldItalic.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-UKIJSpecial-Regular.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-UKIJSpecial-Italic.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-UKIJSpecial-Bold.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-UKIJSpecial-BoldItalic.woff"
}, function(t, r, e) {
	"use strict";
	r.a = e.p + "fonts/Wt-SetthaSpecial-Regular.woff"
}, function(t, r, e) {
	"use strict";
	e.d(r, "a", (function() {
		return o
	}));
	var o = function() {
		function t(t) {
			this.isSpeedy = void 0 === t.speedy || t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.before = null
		}
		var r = t.prototype;
		return r.insert = function(t) {
			if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
				var r, e = function(t) {
					var r = document.createElement("style");
					return r.setAttribute("data-emotion", t.key), void 0 !== t.nonce && r.setAttribute("nonce", t.nonce), r.appendChild(document.createTextNode("")), r
				}(this);
				r = 0 === this.tags.length ? this.before : this.tags[this.tags.length - 1].nextSibling, this.container.insertBefore(e, r), this.tags.push(e)
			}
			var o = this.tags[this.tags.length - 1];
			if (this.isSpeedy) {
				var i = function(t) {
					if (t.sheet) return t.sheet;
					for (var r = 0; r < document.styleSheets.length; r++)
						if (document.styleSheets[r].ownerNode === t) return document.styleSheets[r]
				}(o);
				try {
					var a = 105 === t.charCodeAt(1) && 64 === t.charCodeAt(0);
					i.insertRule(t, a ? 0 : i.cssRules.length)
				} catch (t) {
					0
				}
			} else o.appendChild(document.createTextNode(t));
			this.ctr++
		}, r.flush = function() {
			this.tags.forEach((function(t) {
				return t.parentNode.removeChild(t)
			})), this.tags = [], this.ctr = 0
		}, t
	}()
}, function(t, r, e) {
	"use strict";
	e.d(r, "a", (function() {
		return b
	}));
	var o = e(36),
		i = e(5),
		a = e(16),
		n = e(17),
		l = e(18),
		c = e(19),
		d = e(20),
		m = e(1),
		p = e(3),
		u = e(2),
		g = e.n(u),
		s = {
			defaultInputValue: "",
			defaultMenuIsOpen: !1,
			defaultValue: null
		},
		b = function(t) {
			var r, e;
			return e = r = function(r) {
				function e() {
					var t, r;
					Object(a.a)(this, e);
					for (var o = arguments.length, i = new Array(o), n = 0; n < o; n++) i[n] = arguments[n];
					return r = Object(l.a)(this, (t = Object(c.a)(e)).call.apply(t, [this].concat(i))), Object(p.a)(Object(m.a)(Object(m.a)(r)), "select", void 0), Object(p.a)(Object(m.a)(Object(m.a)(r)), "state", {
						inputValue: void 0 !== r.props.inputValue ? r.props.inputValue : r.props.defaultInputValue,
						menuIsOpen: void 0 !== r.props.menuIsOpen ? r.props.menuIsOpen : r.props.defaultMenuIsOpen,
						value: void 0 !== r.props.value ? r.props.value : r.props.defaultValue
					}), Object(p.a)(Object(m.a)(Object(m.a)(r)), "onChange", (function(t, e) {
						r.callProp("onChange", t, e), r.setState({
							value: t
						})
					})), Object(p.a)(Object(m.a)(Object(m.a)(r)), "onInputChange", (function(t, e) {
						var o = r.callProp("onInputChange", t, e);
						r.setState({
							inputValue: void 0 !== o ? o : t
						})
					})), Object(p.a)(Object(m.a)(Object(m.a)(r)), "onMenuOpen", (function() {
						r.callProp("onMenuOpen"), r.setState({
							menuIsOpen: !0
						})
					})), Object(p.a)(Object(m.a)(Object(m.a)(r)), "onMenuClose", (function() {
						r.callProp("onMenuClose"), r.setState({
							menuIsOpen: !1
						})
					})), r
				}
				return Object(d.a)(e, r), Object(n.a)(e, [{
					key: "focus",
					value: function() {
						this.select.focus()
					}
				}, {
					key: "blur",
					value: function() {
						this.select.blur()
					}
				}, {
					key: "getProp",
					value: function(t) {
						return void 0 !== this.props[t] ? this.props[t] : this.state[t]
					}
				}, {
					key: "callProp",
					value: function(t) {
						if ("function" == typeof this.props[t]) {
							for (var r, e = arguments.length, o = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) o[i - 1] = arguments[i];
							return (r = this.props)[t].apply(r, o)
						}
					}
				}, {
					key: "render",
					value: function() {
						var r = this,
							e = this.props,
							a = (e.defaultInputValue, e.defaultMenuIsOpen, e.defaultValue, Object(o.a)(e, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]));
						return g.a.createElement(t, Object(i.a)({}, a, {
							ref: function(t) {
								r.select = t
							},
							inputValue: this.getProp("inputValue"),
							menuIsOpen: this.getProp("menuIsOpen"),
							onChange: this.onChange,
							onInputChange: this.onInputChange,
							onMenuClose: this.onMenuClose,
							onMenuOpen: this.onMenuOpen,
							value: this.getProp("value")
						}))
					}
				}]), e
			}(u.Component), Object(p.a)(r, "defaultProps", s), e
		}
}, function(t, r, e) {
	"use strict";
	var o = e(294);
	var i = function(t) {
		function r(t, r, o) {
			var i = r.trim().split(s);
			r = i;
			var a = i.length,
				n = t.length;
			switch (n) {
				case 0:
				case 1:
					var l = 0;
					for (t = 0 === n ? "" : t[0] + " "; l < a; ++l) r[l] = e(t, r[l], o).trim();
					break;
				default:
					var c = l = 0;
					for (r = []; l < a; ++l)
						for (var d = 0; d < n; ++d) r[c++] = e(t[d] + " ", i[l], o).trim()
			}
			return r
		}

		function e(t, r, e) {
			var o = r.charCodeAt(0);
			switch (33 > o && (o = (r = r.trim()).charCodeAt(0)), o) {
				case 38:
					return r.replace(b, "$1" + t.trim());
				case 58:
					return t.trim() + r.replace(b, "$1" + t.trim());
				default:
					if (0 < 1 * e && 0 < r.indexOf("\f")) return r.replace(b, (58 === t.charCodeAt(0) ? "" : "$1") + t.trim())
			}
			return t + r
		}

		function o(t, r, e, a) {
			var n = t + ";",
				l = 2 * r + 3 * e + 4 * a;
			if (944 === l) {
				t = n.indexOf(":", 9) + 1;
				var c = n.substring(t, n.length - 1).trim();
				return c = n.substring(0, t).trim() + c + ";", 1 === T || 2 === T && i(c, 1) ? "-webkit-" + c + c : c
			}
			if (0 === T || 2 === T && !i(n, 1)) return n;
			switch (l) {
				case 1015:
					return 97 === n.charCodeAt(10) ? "-webkit-" + n + n : n;
				case 951:
					return 116 === n.charCodeAt(3) ? "-webkit-" + n + n : n;
				case 963:
					return 110 === n.charCodeAt(5) ? "-webkit-" + n + n : n;
				case 1009:
					if (100 !== n.charCodeAt(4)) break;
				case 969:
				case 942:
					return "-webkit-" + n + n;
				case 978:
					return "-webkit-" + n + "-moz-" + n + n;
				case 1019:
				case 983:
					return "-webkit-" + n + "-moz-" + n + "-ms-" + n + n;
				case 883:
					if (45 === n.charCodeAt(8)) return "-webkit-" + n + n;
					if (0 < n.indexOf("image-set(", 11)) return n.replace(k, "$1-webkit-$2") + n;
					break;
				case 932:
					if (45 === n.charCodeAt(4)) switch (n.charCodeAt(5)) {
						case 103:
							return "-webkit-box-" + n.replace("-grow", "") + "-webkit-" + n + "-ms-" + n.replace("grow", "positive") + n;
						case 115:
							return "-webkit-" + n + "-ms-" + n.replace("shrink", "negative") + n;
						case 98:
							return "-webkit-" + n + "-ms-" + n.replace("basis", "preferred-size") + n
					}
					return "-webkit-" + n + "-ms-" + n + n;
				case 964:
					return "-webkit-" + n + "-ms-flex-" + n + n;
				case 1023:
					if (99 !== n.charCodeAt(8)) break;
					return "-webkit-box-pack" + (c = n.substring(n.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + n + "-ms-flex-pack" + c + n;
				case 1005:
					return u.test(n) ? n.replace(p, ":-webkit-") + n.replace(p, ":-moz-") + n : n;
				case 1e3:
					switch (r = (c = n.substring(13).trim()).indexOf("-") + 1, c.charCodeAt(0) + c.charCodeAt(r)) {
						case 226:
							c = n.replace(j, "tb");
							break;
						case 232:
							c = n.replace(j, "tb-rl");
							break;
						case 220:
							c = n.replace(j, "lr");
							break;
						default:
							return n
					}
					return "-webkit-" + n + "-ms-" + c + n;
				case 1017:
					if (-1 === n.indexOf("sticky", 9)) break;
				case 975:
					switch (r = (n = t).length - 10, l = (c = (33 === n.charCodeAt(r) ? n.substring(0, r) : n).substring(t.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | c.charCodeAt(7))) {
						case 203:
							if (111 > c.charCodeAt(8)) break;
						case 115:
							n = n.replace(c, "-webkit-" + c) + ";" + n;
							break;
						case 207:
						case 102:
							n = n.replace(c, "-webkit-" + (102 < l ? "inline-" : "") + "box") + ";" + n.replace(c, "-webkit-" + c) + ";" + n.replace(c, "-ms-" + c + "box") + ";" + n
					}
					return n + ";";
				case 938:
					if (45 === n.charCodeAt(5)) switch (n.charCodeAt(6)) {
						case 105:
							return c = n.replace("-items", ""), "-webkit-" + n + "-webkit-box-" + c + "-ms-flex-" + c + n;
						case 115:
							return "-webkit-" + n + "-ms-flex-item-" + n.replace(S, "") + n;
						default:
							return "-webkit-" + n + "-ms-flex-line-pack" + n.replace("align-content", "").replace(S, "") + n
					}
					break;
				case 973:
				case 989:
					if (45 !== n.charCodeAt(3) || 122 === n.charCodeAt(4)) break;
				case 931:
				case 953:
					if (!0 === O.test(t)) return 115 === (c = t.substring(t.indexOf(":") + 1)).charCodeAt(0) ? o(t.replace("stretch", "fill-available"), r, e, a).replace(":fill-available", ":stretch") : n.replace(c, "-webkit-" + c) + n.replace(c, "-moz-" + c.replace("fill-", "")) + n;
					break;
				case 962:
					if (n = "-webkit-" + n + (102 === n.charCodeAt(5) ? "-ms-" + n : "") + n, 211 === e + a && 105 === n.charCodeAt(13) && 0 < n.indexOf("transform", 10)) return n.substring(0, n.indexOf(";", 27) + 1).replace(g, "$1-webkit-$2") + n
			}
			return n
		}

		function i(t, r) {
			var e = t.indexOf(1 === r ? ":" : "{"),
				o = t.substring(0, 3 !== r ? e : 10);
			return e = t.substring(e + 1, t.length - 1), R(2 !== r ? o : o.replace(v, "$1"), e, r)
		}

		function a(t, r) {
			var e = o(r, r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2));
			return e !== r + ";" ? e.replace(y, " or ($1)").substring(4) : "(" + r + ")"
		}

		function n(t, r, e, o, i, a, n, l, d, m) {
			for (var p, u = 0, g = r; u < _; ++u) switch (p = N[u].call(c, t, g, e, o, i, a, n, l, d, m)) {
				case void 0:
				case !1:
				case !0:
				case null:
					break;
				default:
					g = p
			}
			if (g !== r) return g
		}

		function l(t) {
			return void 0 !== (t = t.prefix) && (R = null, t ? "function" != typeof t ? T = 1 : (T = 2, R = t) : T = 0), l
		}

		function c(t, e) {
			var l = t;
			if (33 > l.charCodeAt(0) && (l = l.trim()), l = [l], 0 < _) {
				var c = n(-1, e, l, l, C, E, 0, 0, 0, 0);
				void 0 !== c && "string" == typeof c && (e = c)
			}
			var p = function t(e, l, c, p, u) {
				for (var g, s, b, j, y, S = 0, v = 0, O = 0, k = 0, N = 0, R = 0, L = b = g = 0, D = 0, P = 0, z = 0, H = 0, G = c.length, B = G - 1, U = "", W = "", F = "", V = ""; D < G;) {
					if (s = c.charCodeAt(D), D === B && 0 !== v + k + O + S && (0 !== v && (s = 47 === v ? 10 : 47), k = O = S = 0, G++, B++), 0 === v + k + O + S) {
						if (D === B && (0 < P && (U = U.replace(m, "")), 0 < U.trim().length)) {
							switch (s) {
								case 32:
								case 9:
								case 59:
								case 13:
								case 10:
									break;
								default:
									U += c.charAt(D)
							}
							s = 59
						}
						switch (s) {
							case 123:
								for (g = (U = U.trim()).charCodeAt(0), b = 1, H = ++D; D < G;) {
									switch (s = c.charCodeAt(D)) {
										case 123:
											b++;
											break;
										case 125:
											b--;
											break;
										case 47:
											switch (s = c.charCodeAt(D + 1)) {
												case 42:
												case 47:
													t: {
														for (L = D + 1; L < B; ++L) switch (c.charCodeAt(L)) {
															case 47:
																if (42 === s && 42 === c.charCodeAt(L - 1) && D + 2 !== L) {
																	D = L + 1;
																	break t
																}
																break;
															case 10:
																if (47 === s) {
																	D = L + 1;
																	break t
																}
														}
														D = L
													}
											}
											break;
										case 91:
											s++;
										case 40:
											s++;
										case 34:
										case 39:
											for (; D++ < B && c.charCodeAt(D) !== s;);
									}
									if (0 === b) break;
									D++
								}
								switch (b = c.substring(H, D), 0 === g && (g = (U = U.replace(d, "").trim()).charCodeAt(0)), g) {
									case 64:
										switch (0 < P && (U = U.replace(m, "")), s = U.charCodeAt(1)) {
											case 100:
											case 109:
											case 115:
											case 45:
												P = l;
												break;
											default:
												P = I
										}
										if (H = (b = t(l, P, b, s, u + 1)).length, 0 < _ && (y = n(3, b, P = r(I, U, z), l, C, E, H, s, u, p), U = P.join(""), void 0 !== y && 0 === (H = (b = y.trim()).length) && (s = 0, b = "")), 0 < H) switch (s) {
											case 115:
												U = U.replace(x, a);
											case 100:
											case 109:
											case 45:
												b = U + "{" + b + "}";
												break;
											case 107:
												b = (U = U.replace(w, "$1 $2")) + "{" + b + "}", b = 1 === T || 2 === T && i("@" + b, 3) ? "@-webkit-" + b + "@" + b : "@" + b;
												break;
											default:
												b = U + b, 112 === p && (W += b, b = "")
										} else b = "";
										break;
									default:
										b = t(l, r(l, U, z), b, p, u + 1)
								}
								F += b, b = z = P = L = g = 0, U = "", s = c.charCodeAt(++D);
								break;
							case 125:
							case 59:
								if (1 < (H = (U = (0 < P ? U.replace(m, "") : U).trim()).length)) switch (0 === L && (g = U.charCodeAt(0), 45 === g || 96 < g && 123 > g) && (H = (U = U.replace(" ", ":")).length), 0 < _ && void 0 !== (y = n(1, U, l, e, C, E, W.length, p, u, p)) && 0 === (H = (U = y.trim()).length) && (U = "\0\0"), g = U.charCodeAt(0), s = U.charCodeAt(1), g) {
									case 0:
										break;
									case 64:
										if (105 === s || 99 === s) {
											V += U + c.charAt(D);
											break
										}
										default:
											58 !== U.charCodeAt(H - 1) && (W += o(U, g, s, U.charCodeAt(2)))
								}
								z = P = L = g = 0, U = "", s = c.charCodeAt(++D)
						}
					}
					switch (s) {
						case 13:
						case 10:
							47 === v ? v = 0 : 0 === 1 + g && 107 !== p && 0 < U.length && (P = 1, U += "\0"), 0 < _ * M && n(0, U, l, e, C, E, W.length, p, u, p), E = 1, C++;
							break;
						case 59:
						case 125:
							if (0 === v + k + O + S) {
								E++;
								break
							}
							default:
								switch (E++, j = c.charAt(D), s) {
									case 9:
									case 32:
										if (0 === k + S + v) switch (N) {
											case 44:
											case 58:
											case 9:
											case 32:
												j = "";
												break;
											default:
												32 !== s && (j = " ")
										}
										break;
									case 0:
										j = "\\0";
										break;
									case 12:
										j = "\\f";
										break;
									case 11:
										j = "\\v";
										break;
									case 38:
										0 === k + v + S && (P = z = 1, j = "\f" + j);
										break;
									case 108:
										if (0 === k + v + S + A && 0 < L) switch (D - L) {
											case 2:
												112 === N && 58 === c.charCodeAt(D - 3) && (A = N);
											case 8:
												111 === R && (A = R)
										}
										break;
									case 58:
										0 === k + v + S && (L = D);
										break;
									case 44:
										0 === v + O + k + S && (P = 1, j += "\r");
										break;
									case 34:
									case 39:
										0 === v && (k = k === s ? 0 : 0 === k ? s : k);
										break;
									case 91:
										0 === k + v + O && S++;
										break;
									case 93:
										0 === k + v + O && S--;
										break;
									case 41:
										0 === k + v + S && O--;
										break;
									case 40:
										if (0 === k + v + S) {
											if (0 === g) switch (2 * N + 3 * R) {
												case 533:
													break;
												default:
													g = 1
											}
											O++
										}
										break;
									case 64:
										0 === v + O + k + S + L + b && (b = 1);
										break;
									case 42:
									case 47:
										if (!(0 < k + S + O)) switch (v) {
											case 0:
												switch (2 * s + 3 * c.charCodeAt(D + 1)) {
													case 235:
														v = 47;
														break;
													case 220:
														H = D, v = 42
												}
												break;
											case 42:
												47 === s && 42 === N && H + 2 !== D && (33 === c.charCodeAt(H + 2) && (W += c.substring(H, D + 1)), j = "", v = 0)
										}
								}
								0 === v && (U += j)
					}
					R = N, N = s, D++
				}
				if (0 < (H = W.length)) {
					if (P = l, 0 < _ && (void 0 !== (y = n(2, W, P, e, C, E, H, p, u, p)) && 0 === (W = y).length)) return V + W + F;
					if (W = P.join(",") + "{" + W + "}", 0 != T * A) {
						switch (2 !== T || i(W, 2) || (A = 0), A) {
							case 111:
								W = W.replace(h, ":-moz-$1") + W;
								break;
							case 112:
								W = W.replace(f, "::-webkit-input-$1") + W.replace(f, "::-moz-$1") + W.replace(f, ":-ms-input-$1") + W
						}
						A = 0
					}
				}
				return V + W + F
			}(I, l, e, 0, 0);
			return 0 < _ && (void 0 !== (c = n(-2, p, l, l, C, E, p.length, 0, 0, 0)) && (p = c)), "", A = 0, E = C = 1, p
		}
		var d = /^\0+/g,
			m = /[\0\r\f]/g,
			p = /: */g,
			u = /zoo|gra/,
			g = /([,: ])(transform)/g,
			s = /,\r+?/g,
			b = /([\t\r\n ])*\f?&/g,
			w = /@(k\w+)\s*(\S*)\s*/,
			f = /::(place)/g,
			h = /:(read-only)/g,
			j = /[svh]\w+-[tblr]{2}/,
			x = /\(\s*(.*)\s*\)/g,
			y = /([\s\S]*?);/g,
			S = /-self|flex-/g,
			v = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
			O = /stretch|:\s*\w+\-(?:conte|avail)/,
			k = /([^-])(image-set\()/,
			E = 1,
			C = 1,
			A = 0,
			T = 1,
			I = [],
			N = [],
			_ = 0,
			R = null,
			M = 0;
		return c.use = function t(r) {
			switch (r) {
				case void 0:
				case null:
					_ = N.length = 0;
					break;
				default:
					if ("function" == typeof r) N[_++] = r;
					else if ("object" == typeof r)
						for (var e = 0, o = r.length; e < o; ++e) t(r[e]);
					else M = 0 | !!r
			}
			return t
		}, c.set = l, void 0 !== t && l(t), c
	};

	function a(t) {
		t && n.current.insert(t + "}")
	}
	var n = {
			current: null
		},
		l = function(t, r, e, o, i, l, c, d, m, p) {
			switch (t) {
				case 1:
					switch (r.charCodeAt(0)) {
						case 64:
							return n.current.insert(r + ";"), "";
						case 108:
							if (98 === r.charCodeAt(2)) return ""
					}
					break;
				case 2:
					if (0 === d) return r + "/*|*/";
					break;
				case 3:
					switch (d) {
						case 102:
						case 112:
							return n.current.insert(e[0] + r), "";
						default:
							return r + (0 === p ? "/*|*/" : "")
					}
					case -2:
						r.split("/*|*/}").forEach(a)
			}
		};
	r.a = function(t) {
		void 0 === t && (t = {});
		var r, e = t.key || "css";
		void 0 !== t.prefix && (r = {
			prefix: t.prefix
		});
		var a = new i(r);
		var c, d = {};
		c = t.container || document.head;
		var m, p = document.querySelectorAll("style[data-emotion-" + e + "]");
		Array.prototype.forEach.call(p, (function(t) {
			t.getAttribute("data-emotion-" + e).split(" ").forEach((function(t) {
				d[t] = !0
			})), t.parentNode !== c && c.appendChild(t)
		})), a.use(t.stylisPlugins)(l), m = function(t, r, e, o) {
			var i = r.name;
			n.current = e, a(t, r.styles), o && (u.inserted[i] = !0)
		};
		var u = {
			key: e,
			sheet: new o.a({
				key: e,
				container: c,
				nonce: t.nonce,
				speedy: t.speedy
			}),
			nonce: t.nonce,
			inserted: d,
			registered: {},
			insert: m
		};
		return u
	}
}, function(t, r, e) {
	e(298), e(97), e(75), e(98);
	var o = e(45);
	t.exports = o.Map
}, function(t, r, e) {
	"use strict";
	var o = e(78),
		i = e(94);
	t.exports = o("Map", (function(t) {
		return function() {
			return t(this, arguments.length ? arguments[0] : void 0)
		}
	}), i)
}, function(t, r, e) {
	var o = e(6),
		i = e(83),
		a = o.WeakMap;
	t.exports = "function" == typeof a && /native code/.test(i(a))
}, function(t, r, e) {
	var o = e(10),
		i = e(301),
		a = e(79),
		n = e(14);
	t.exports = function(t, r) {
		for (var e = i(r), l = n.f, c = a.f, d = 0; d < e.length; d++) {
			var m = e[d];
			o(t, m) || l(t, m, c(r, m))
		}
	}
}, function(t, r, e) {
	var o = e(56),
		i = e(302),
		a = e(169),
		n = e(24);
	t.exports = o("Reflect", "ownKeys") || function(t) {
		var r = i.f(n(t)),
			e = a.f;
		return e ? r.concat(e(t)) : r
	}
}, function(t, r, e) {
	var o = e(86),
		i = e(58).concat("length", "prototype");
	r.f = Object.getOwnPropertyNames || function(t) {
		return o(t, i)
	}
}, function(t, r, e) {
	var o = e(57),
		i = Math.max,
		a = Math.min;
	t.exports = function(t, r) {
		var e = o(t);
		return e < 0 ? i(e + r, 0) : a(e, r)
	}
}, function(t, r, e) {
	var o = e(13);
	t.exports = !o((function() {
		return Object.isExtensible(Object.preventExtensions({}))
	}))
}, function(t, r, e) {
	var o = e(90);
	t.exports = o && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function(t, r) {
	t.exports = function(t) {
		if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
		return t
	}
}, function(t, r, e) {
	var o = e(15),
		i = e(93);
	t.exports = function(t, r, e) {
		var a, n;
		return i && "function" == typeof(a = r.constructor) && a !== e && o(n = a.prototype) && n !== e.prototype && i(t, n), t
	}
}, function(t, r, e) {
	var o = e(15);
	t.exports = function(t) {
		if (!o(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
		return t
	}
}, function(t, r, e) {
	var o = e(21),
		i = e(14),
		a = e(24),
		n = e(174);
	t.exports = o ? Object.defineProperties : function(t, r) {
		a(t);
		for (var e, o = n(r), l = o.length, c = 0; l > c;) i.f(t, e = o[c++], r[e]);
		return t
	}
}, function(t, r, e) {
	var o = e(56);
	t.exports = o("document", "documentElement")
}, function(t, r, e) {
	var o = e(31);
	t.exports = function(t, r, e) {
		for (var i in r) o(t, i, r[i], e);
		return t
	}
}, function(t, r, e) {
	"use strict";
	var o = e(95).IteratorPrototype,
		i = e(61),
		a = e(47),
		n = e(60),
		l = e(32),
		c = function() {
			return this
		};
	t.exports = function(t, r, e) {
		var d = r + " Iterator";
		return t.prototype = i(o, {
			next: a(1, e)
		}), n(t, d, !1, !0), l[d] = c, t
	}
}, function(t, r, e) {
	var o = e(13);
	t.exports = !o((function() {
		function t() {}
		return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
	}))
}, function(t, r, e) {
	"use strict";
	var o = e(56),
		i = e(14),
		a = e(9),
		n = e(21),
		l = a("species");
	t.exports = function(t) {
		var r = o(t),
			e = i.f;
		n && r && !r[l] && e(r, l, {
			configurable: !0,
			get: function() {
				return this
			}
		})
	}
}, function(t, r, e) {
	"use strict";
	var o = e(59),
		i = e(91);
	t.exports = o ? {}.toString : function() {
		return "[object " + i(this) + "]"
	}
}, function(t, r, e) {
	var o = e(57),
		i = e(51),
		a = function(t) {
			return function(r, e) {
				var a, n, l = String(i(r)),
					c = o(e),
					d = l.length;
				return c < 0 || c >= d ? t ? "" : void 0 : (a = l.charCodeAt(c)) < 55296 || a > 56319 || c + 1 === d || (n = l.charCodeAt(c + 1)) < 56320 || n > 57343 ? t ? l.charAt(c) : a : t ? l.slice(c, c + 2) : n - 56320 + (a - 55296 << 10) + 65536
			}
		};
	t.exports = {
		codeAt: a(!1),
		charAt: a(!0)
	}
}, function(t, r) {
	t.exports = {
		CSSRuleList: 0,
		CSSStyleDeclaration: 0,
		CSSValueList: 0,
		ClientRectList: 0,
		DOMRectList: 0,
		DOMStringList: 0,
		DOMTokenList: 1,
		DataTransferItemList: 0,
		FileList: 0,
		HTMLAllCollection: 0,
		HTMLCollection: 0,
		HTMLFormElement: 0,
		HTMLSelectElement: 0,
		MediaList: 0,
		MimeTypeArray: 0,
		NamedNodeMap: 0,
		NodeList: 1,
		PaintRequestList: 0,
		Plugin: 0,
		PluginArray: 0,
		SVGLengthList: 0,
		SVGNumberList: 0,
		SVGPathSegList: 0,
		SVGPointList: 0,
		SVGStringList: 0,
		SVGTransformList: 0,
		SourceBufferList: 0,
		StyleSheetList: 0,
		TextTrackCueList: 0,
		TextTrackList: 0,
		TouchList: 0
	}
}, function(t, r, e) {
	"use strict";
	var o = e(40),
		i = e(175),
		a = e(32),
		n = e(41),
		l = e(62),
		c = n.set,
		d = n.getterFor("Array Iterator");
	t.exports = l(Array, "Array", (function(t, r) {
		c(this, {
			type: "Array Iterator",
			target: o(t),
			index: 0,
			kind: r
		})
	}), (function() {
		var t = d(this),
			r = t.target,
			e = t.kind,
			o = t.index++;
		return !r || o >= r.length ? (t.target = void 0, {
			value: void 0,
			done: !0
		}) : "keys" == e ? {
			value: o,
			done: !1
		} : "values" == e ? {
			value: r[o],
			done: !1
		} : {
			value: [o, r[o]],
			done: !1
		}
	}), "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries")
}, function(t, r, e) {
	e(320), e(97), e(75), e(98);
	var o = e(45);
	t.exports = o.Set
}, function(t, r, e) {
	"use strict";
	var o = e(78),
		i = e(94);
	t.exports = o("Set", (function(t) {
		return function() {
			return t(this, arguments.length ? arguments[0] : void 0)
		}
	}), i)
}, function(t, r, e) {
	"use strict";
	var o;
	! function(t) {
		t.TYPE_INVALID = 0, t.TYPE_UNCLASSIFIED = 1, t.TYPE_PARALLEL_ACCOUNT = 2, t.TYPE_QUOTATION = 3
	}(o || (o = {})), t.exports = o
}, function(t, r, e) {
	"use strict";
	Object.defineProperty(r, "__esModule", {
			value: !0
		}), r.GestureRecognizerState = void 0,
		function(t) {
			t.Possible = "possible", t.Began = "began", t.Changed = "changed", t.Ended = "ended", t.Cancelled = "cancelled", t.Failed = "failed", t.Recognized = "ended"
		}(r.GestureRecognizerState || (r.GestureRecognizerState = {}))
}, , , function(t, r, e) {
	"use strict";
	/** @license React v16.13.1
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var o = e(163),
		i = "function" == typeof Symbol && Symbol.for,
		a = i ? Symbol.for("react.element") : 60103,
		n = i ? Symbol.for("react.portal") : 60106,
		l = i ? Symbol.for("react.fragment") : 60107,
		c = i ? Symbol.for("react.strict_mode") : 60108,
		d = i ? Symbol.for("react.profiler") : 60114,
		m = i ? Symbol.for("react.provider") : 60109,
		p = i ? Symbol.for("react.context") : 60110,
		u = i ? Symbol.for("react.forward_ref") : 60112,
		g = i ? Symbol.for("react.suspense") : 60113,
		s = i ? Symbol.for("react.memo") : 60115,
		b = i ? Symbol.for("react.lazy") : 60116,
		w = "function" == typeof Symbol && Symbol.iterator;

	function f(t) {
		for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, e = 1; e < arguments.length; e++) r += "&args[]=" + encodeURIComponent(arguments[e]);
		return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	}
	var h = {
			isMounted: function() {
				return !1
			},
			enqueueForceUpdate: function() {},
			enqueueReplaceState: function() {},
			enqueueSetState: function() {}
		},
		j = {};

	function x(t, r, e) {
		this.props = t, this.context = r, this.refs = j, this.updater = e || h
	}

	function y() {}

	function S(t, r, e) {
		this.props = t, this.context = r, this.refs = j, this.updater = e || h
	}
	x.prototype.isReactComponent = {}, x.prototype.setState = function(t, r) {
		if ("object" != typeof t && "function" != typeof t && null != t) throw Error(f(85));
		this.updater.enqueueSetState(this, t, r, "setState")
	}, x.prototype.forceUpdate = function(t) {
		this.updater.enqueueForceUpdate(this, t, "forceUpdate")
	}, y.prototype = x.prototype;
	var v = S.prototype = new y;
	v.constructor = S, o(v, x.prototype), v.isPureReactComponent = !0;
	var O = {
			current: null
		},
		k = Object.prototype.hasOwnProperty,
		E = {
			key: !0,
			ref: !0,
			__self: !0,
			__source: !0
		};

	function C(t, r, e) {
		var o, i = {},
			n = null,
			l = null;
		if (null != r)
			for (o in void 0 !== r.ref && (l = r.ref), void 0 !== r.key && (n = "" + r.key), r) k.call(r, o) && !E.hasOwnProperty(o) && (i[o] = r[o]);
		var c = arguments.length - 2;
		if (1 === c) i.children = e;
		else if (1 < c) {
			for (var d = Array(c), m = 0; m < c; m++) d[m] = arguments[m + 2];
			i.children = d
		}
		if (t && t.defaultProps)
			for (o in c = t.defaultProps) void 0 === i[o] && (i[o] = c[o]);
		return {
			$$typeof: a,
			type: t,
			key: n,
			ref: l,
			props: i,
			_owner: O.current
		}
	}

	function A(t) {
		return "object" == typeof t && null !== t && t.$$typeof === a
	}
	var T = /\/+/g,
		I = [];

	function N(t, r, e, o) {
		if (I.length) {
			var i = I.pop();
			return i.result = t, i.keyPrefix = r, i.func = e, i.context = o, i.count = 0, i
		}
		return {
			result: t,
			keyPrefix: r,
			func: e,
			context: o,
			count: 0
		}
	}

	function _(t) {
		t.result = null, t.keyPrefix = null, t.func = null, t.context = null, t.count = 0, 10 > I.length && I.push(t)
	}

	function R(t, r, e) {
		return null == t ? 0 : function t(r, e, o, i) {
			var l = typeof r;
			"undefined" !== l && "boolean" !== l || (r = null);
			var c = !1;
			if (null === r) c = !0;
			else switch (l) {
				case "string":
				case "number":
					c = !0;
					break;
				case "object":
					switch (r.$$typeof) {
						case a:
						case n:
							c = !0
					}
			}
			if (c) return o(i, r, "" === e ? "." + M(r, 0) : e), 1;
			if (c = 0, e = "" === e ? "." : e + ":", Array.isArray(r))
				for (var d = 0; d < r.length; d++) {
					var m = e + M(l = r[d], d);
					c += t(l, m, o, i)
				} else if (null === r || "object" != typeof r ? m = null : m = "function" == typeof(m = w && r[w] || r["@@iterator"]) ? m : null, "function" == typeof m)
					for (r = m.call(r), d = 0; !(l = r.next()).done;) c += t(l = l.value, m = e + M(l, d++), o, i);
				else if ("object" === l) throw o = "" + r, Error(f(31, "[object Object]" === o ? "object with keys {" + Object.keys(r).join(", ") + "}" : o, ""));
			return c
		}(t, "", r, e)
	}

	function M(t, r) {
		return "object" == typeof t && null !== t && null != t.key ? function(t) {
			var r = {
				"=": "=0",
				":": "=2"
			};
			return "$" + ("" + t).replace(/[=:]/g, (function(t) {
				return r[t]
			}))
		}(t.key) : r.toString(36)
	}

	function L(t, r) {
		t.func.call(t.context, r, t.count++)
	}

	function D(t, r, e) {
		var o = t.result,
			i = t.keyPrefix;
		t = t.func.call(t.context, r, t.count++), Array.isArray(t) ? P(t, o, e, (function(t) {
			return t
		})) : null != t && (A(t) && (t = function(t, r) {
			return {
				$$typeof: a,
				type: t.type,
				key: r,
				ref: t.ref,
				props: t.props,
				_owner: t._owner
			}
		}(t, i + (!t.key || r && r.key === t.key ? "" : ("" + t.key).replace(T, "$&/") + "/") + e)), o.push(t))
	}

	function P(t, r, e, o, i) {
		var a = "";
		null != e && (a = ("" + e).replace(T, "$&/") + "/"), R(t, D, r = N(r, a, o, i)), _(r)
	}
	var z = {
		current: null
	};

	function H() {
		var t = z.current;
		if (null === t) throw Error(f(321));
		return t
	}
	var G = {
		ReactCurrentDispatcher: z,
		ReactCurrentBatchConfig: {
			suspense: null
		},
		ReactCurrentOwner: O,
		IsSomeRendererActing: {
			current: !1
		},
		assign: o
	};
	r.Children = {
		map: function(t, r, e) {
			if (null == t) return t;
			var o = [];
			return P(t, o, null, r, e), o
		},
		forEach: function(t, r, e) {
			if (null == t) return t;
			R(t, L, r = N(null, null, r, e)), _(r)
		},
		count: function(t) {
			return R(t, (function() {
				return null
			}), null)
		},
		toArray: function(t) {
			var r = [];
			return P(t, r, null, (function(t) {
				return t
			})), r
		},
		only: function(t) {
			if (!A(t)) throw Error(f(143));
			return t
		}
	}, r.Component = x, r.Fragment = l, r.Profiler = d, r.PureComponent = S, r.StrictMode = c, r.Suspense = g, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G, r.cloneElement = function(t, r, e) {
		if (null == t) throw Error(f(267, t));
		var i = o({}, t.props),
			n = t.key,
			l = t.ref,
			c = t._owner;
		if (null != r) {
			if (void 0 !== r.ref && (l = r.ref, c = O.current), void 0 !== r.key && (n = "" + r.key), t.type && t.type.defaultProps) var d = t.type.defaultProps;
			for (m in r) k.call(r, m) && !E.hasOwnProperty(m) && (i[m] = void 0 === r[m] && void 0 !== d ? d[m] : r[m])
		}
		var m = arguments.length - 2;
		if (1 === m) i.children = e;
		else if (1 < m) {
			d = Array(m);
			for (var p = 0; p < m; p++) d[p] = arguments[p + 2];
			i.children = d
		}
		return {
			$$typeof: a,
			type: t.type,
			key: n,
			ref: l,
			props: i,
			_owner: c
		}
	}, r.createContext = function(t, r) {
		return void 0 === r && (r = null), (t = {
			$$typeof: p,
			_calculateChangedBits: r,
			_currentValue: t,
			_currentValue2: t,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}).Provider = {
			$$typeof: m,
			_context: t
		}, t.Consumer = t
	}, r.createElement = C, r.createFactory = function(t) {
		var r = C.bind(null, t);
		return r.type = t, r
	}, r.createRef = function() {
		return {
			current: null
		}
	}, r.forwardRef = function(t) {
		return {
			$$typeof: u,
			render: t
		}
	}, r.isValidElement = A, r.lazy = function(t) {
		return {
			$$typeof: b,
			_ctor: t,
			_status: -1,
			_result: null
		}
	}, r.memo = function(t, r) {
		return {
			$$typeof: s,
			type: t,
			compare: void 0 === r ? null : r
		}
	}, r.useCallback = function(t, r) {
		return H().useCallback(t, r)
	}, r.useContext = function(t, r) {
		return H().useContext(t, r)
	}, r.useDebugValue = function() {}, r.useEffect = function(t, r) {
		return H().useEffect(t, r)
	}, r.useImperativeHandle = function(t, r, e) {
		return H().useImperativeHandle(t, r, e)
	}, r.useLayoutEffect = function(t, r) {
		return H().useLayoutEffect(t, r)
	}, r.useMemo = function(t, r) {
		return H().useMemo(t, r)
	}, r.useReducer = function(t, r, e) {
		return H().useReducer(t, r, e)
	}, r.useRef = function(t) {
		return H().useRef(t)
	}, r.useState = function(t) {
		return H().useState(t)
	}, r.version = "16.13.1"
}, function(t, r, e) {
	"use strict";
	/** @license React v16.13.1
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var o = e(2),
		i = e(163),
		a = e(327);

	function n(t) {
		for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, e = 1; e < arguments.length; e++) r += "&args[]=" + encodeURIComponent(arguments[e]);
		return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	}
	if (!o) throw Error(n(227));

	function l(t, r, e, o, i, a, n, l, c) {
		var d = Array.prototype.slice.call(arguments, 3);
		try {
			r.apply(e, d)
		} catch (t) {
			this.onError(t)
		}
	}
	var c = !1,
		d = null,
		m = !1,
		p = null,
		u = {
			onError: function(t) {
				c = !0, d = t
			}
		};

	function g(t, r, e, o, i, a, n, m, p) {
		c = !1, d = null, l.apply(u, arguments)
	}
	var s = null,
		b = null,
		w = null;

	function f(t, r, e) {
		var o = t.type || "unknown-event";
		t.currentTarget = w(e),
			function(t, r, e, o, i, a, l, u, s) {
				if (g.apply(this, arguments), c) {
					if (!c) throw Error(n(198));
					var b = d;
					c = !1, d = null, m || (m = !0, p = b)
				}
			}(o, r, void 0, t), t.currentTarget = null
	}
	var h = null,
		j = {};

	function x() {
		if (h)
			for (var t in j) {
				var r = j[t],
					e = h.indexOf(t);
				if (!(-1 < e)) throw Error(n(96, t));
				if (!S[e]) {
					if (!r.extractEvents) throw Error(n(97, t));
					for (var o in S[e] = r, e = r.eventTypes) {
						var i = void 0,
							a = e[o],
							l = r,
							c = o;
						if (v.hasOwnProperty(c)) throw Error(n(99, c));
						v[c] = a;
						var d = a.phasedRegistrationNames;
						if (d) {
							for (i in d) d.hasOwnProperty(i) && y(d[i], l, c);
							i = !0
						} else a.registrationName ? (y(a.registrationName, l, c), i = !0) : i = !1;
						if (!i) throw Error(n(98, o, t))
					}
				}
			}
	}

	function y(t, r, e) {
		if (O[t]) throw Error(n(100, t));
		O[t] = r, k[t] = r.eventTypes[e].dependencies
	}
	var S = [],
		v = {},
		O = {},
		k = {};

	function E(t) {
		var r, e = !1;
		for (r in t)
			if (t.hasOwnProperty(r)) {
				var o = t[r];
				if (!j.hasOwnProperty(r) || j[r] !== o) {
					if (j[r]) throw Error(n(102, r));
					j[r] = o, e = !0
				}
			} e && x()
	}
	var C = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
		A = null,
		T = null,
		I = null;

	function N(t) {
		if (t = b(t)) {
			if ("function" != typeof A) throw Error(n(280));
			var r = t.stateNode;
			r && (r = s(r), A(t.stateNode, t.type, r))
		}
	}

	function _(t) {
		T ? I ? I.push(t) : I = [t] : T = t
	}

	function R() {
		if (T) {
			var t = T,
				r = I;
			if (I = T = null, N(t), r)
				for (t = 0; t < r.length; t++) N(r[t])
		}
	}

	function M(t, r) {
		return t(r)
	}

	function L(t, r, e, o, i) {
		return t(r, e, o, i)
	}

	function D() {}
	var P = M,
		z = !1,
		H = !1;

	function G() {
		null === T && null === I || (D(), R())
	}

	function B(t, r, e) {
		if (H) return t(r, e);
		H = !0;
		try {
			return P(t, r, e)
		} finally {
			H = !1, G()
		}
	}
	var U = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
		W = Object.prototype.hasOwnProperty,
		F = {},
		V = {};

	function K(t, r, e, o, i, a) {
		this.acceptsBooleans = 2 === r || 3 === r || 4 === r, this.attributeName = o, this.attributeNamespace = i, this.mustUseProperty = e, this.propertyName = t, this.type = r, this.sanitizeURL = a
	}
	var Y = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(t) {
		Y[t] = new K(t, 0, !1, t, null, !1)
	})), [
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach((function(t) {
		var r = t[0];
		Y[r] = new K(r, 1, !1, t[1], null, !1)
	})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(t) {
		Y[t] = new K(t, 2, !1, t.toLowerCase(), null, !1)
	})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(t) {
		Y[t] = new K(t, 2, !1, t, null, !1)
	})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(t) {
		Y[t] = new K(t, 3, !1, t.toLowerCase(), null, !1)
	})), ["checked", "multiple", "muted", "selected"].forEach((function(t) {
		Y[t] = new K(t, 3, !0, t, null, !1)
	})), ["capture", "download"].forEach((function(t) {
		Y[t] = new K(t, 4, !1, t, null, !1)
	})), ["cols", "rows", "size", "span"].forEach((function(t) {
		Y[t] = new K(t, 6, !1, t, null, !1)
	})), ["rowSpan", "start"].forEach((function(t) {
		Y[t] = new K(t, 5, !1, t.toLowerCase(), null, !1)
	}));
	var q = /[\-:]([a-z])/g;

	function Q(t) {
		return t[1].toUpperCase()
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(t) {
		var r = t.replace(q, Q);
		Y[r] = new K(r, 1, !1, t, null, !1)
	})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(t) {
		var r = t.replace(q, Q);
		Y[r] = new K(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1)
	})), ["xml:base", "xml:lang", "xml:space"].forEach((function(t) {
		var r = t.replace(q, Q);
		Y[r] = new K(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1)
	})), ["tabIndex", "crossOrigin"].forEach((function(t) {
		Y[t] = new K(t, 1, !1, t.toLowerCase(), null, !1)
	})), Y.xlinkHref = new K("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function(t) {
		Y[t] = new K(t, 1, !1, t.toLowerCase(), null, !0)
	}));
	var J = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function X(t, r, e, o) {
		var i = Y.hasOwnProperty(r) ? Y[r] : null;
		(null !== i ? 0 === i.type : !o && (2 < r.length && ("o" === r[0] || "O" === r[0]) && ("n" === r[1] || "N" === r[1]))) || (function(t, r, e, o) {
			if (null == r || function(t, r, e, o) {
					if (null !== e && 0 === e.type) return !1;
					switch (typeof r) {
						case "function":
						case "symbol":
							return !0;
						case "boolean":
							return !o && (null !== e ? !e.acceptsBooleans : "data-" !== (t = t.toLowerCase().slice(0, 5)) && "aria-" !== t);
						default:
							return !1
					}
				}(t, r, e, o)) return !0;
			if (o) return !1;
			if (null !== e) switch (e.type) {
				case 3:
					return !r;
				case 4:
					return !1 === r;
				case 5:
					return isNaN(r);
				case 6:
					return isNaN(r) || 1 > r
			}
			return !1
		}(r, e, i, o) && (e = null), o || null === i ? function(t) {
			return !!W.call(V, t) || !W.call(F, t) && (U.test(t) ? V[t] = !0 : (F[t] = !0, !1))
		}(r) && (null === e ? t.removeAttribute(r) : t.setAttribute(r, "" + e)) : i.mustUseProperty ? t[i.propertyName] = null === e ? 3 !== i.type && "" : e : (r = i.attributeName, o = i.attributeNamespace, null === e ? t.removeAttribute(r) : (e = 3 === (i = i.type) || 4 === i && !0 === e ? "" : "" + e, o ? t.setAttributeNS(o, r, e) : t.setAttribute(r, e))))
	}
	J.hasOwnProperty("ReactCurrentDispatcher") || (J.ReactCurrentDispatcher = {
		current: null
	}), J.hasOwnProperty("ReactCurrentBatchConfig") || (J.ReactCurrentBatchConfig = {
		suspense: null
	});
	var Z = /^(.*)[\\\/]/,
		$ = "function" == typeof Symbol && Symbol.for,
		tt = $ ? Symbol.for("react.element") : 60103,
		rt = $ ? Symbol.for("react.portal") : 60106,
		et = $ ? Symbol.for("react.fragment") : 60107,
		ot = $ ? Symbol.for("react.strict_mode") : 60108,
		it = $ ? Symbol.for("react.profiler") : 60114,
		at = $ ? Symbol.for("react.provider") : 60109,
		nt = $ ? Symbol.for("react.context") : 60110,
		lt = $ ? Symbol.for("react.concurrent_mode") : 60111,
		ct = $ ? Symbol.for("react.forward_ref") : 60112,
		dt = $ ? Symbol.for("react.suspense") : 60113,
		mt = $ ? Symbol.for("react.suspense_list") : 60120,
		pt = $ ? Symbol.for("react.memo") : 60115,
		ut = $ ? Symbol.for("react.lazy") : 60116,
		gt = $ ? Symbol.for("react.block") : 60121,
		st = "function" == typeof Symbol && Symbol.iterator;

	function bt(t) {
		return null === t || "object" != typeof t ? null : "function" == typeof(t = st && t[st] || t["@@iterator"]) ? t : null
	}

	function wt(t) {
		if (null == t) return null;
		if ("function" == typeof t) return t.displayName || t.name || null;
		if ("string" == typeof t) return t;
		switch (t) {
			case et:
				return "Fragment";
			case rt:
				return "Portal";
			case it:
				return "Profiler";
			case ot:
				return "StrictMode";
			case dt:
				return "Suspense";
			case mt:
				return "SuspenseList"
		}
		if ("object" == typeof t) switch (t.$$typeof) {
			case nt:
				return "Context.Consumer";
			case at:
				return "Context.Provider";
			case ct:
				var r = t.render;
				return r = r.displayName || r.name || "", t.displayName || ("" !== r ? "ForwardRef(" + r + ")" : "ForwardRef");
			case pt:
				return wt(t.type);
			case gt:
				return wt(t.render);
			case ut:
				if (t = 1 === t._status ? t._result : null) return wt(t)
		}
		return null
	}

	function ft(t) {
		var r = "";
		do {
			t: switch (t.tag) {
				case 3:
				case 4:
				case 6:
				case 7:
				case 10:
				case 9:
					var e = "";
					break t;
				default:
					var o = t._debugOwner,
						i = t._debugSource,
						a = wt(t.type);
					e = null, o && (e = wt(o.type)), o = a, a = "", i ? a = " (at " + i.fileName.replace(Z, "") + ":" + i.lineNumber + ")" : e && (a = " (created by " + e + ")"), e = "\n    in " + (o || "Unknown") + a
			}
			r += e,
			t = t.return
		} while (t);
		return r
	}

	function ht(t) {
		switch (typeof t) {
			case "boolean":
			case "number":
			case "object":
			case "string":
			case "undefined":
				return t;
			default:
				return ""
		}
	}

	function jt(t) {
		var r = t.type;
		return (t = t.nodeName) && "input" === t.toLowerCase() && ("checkbox" === r || "radio" === r)
	}

	function xt(t) {
		t._valueTracker || (t._valueTracker = function(t) {
			var r = jt(t) ? "checked" : "value",
				e = Object.getOwnPropertyDescriptor(t.constructor.prototype, r),
				o = "" + t[r];
			if (!t.hasOwnProperty(r) && void 0 !== e && "function" == typeof e.get && "function" == typeof e.set) {
				var i = e.get,
					a = e.set;
				return Object.defineProperty(t, r, {
					configurable: !0,
					get: function() {
						return i.call(this)
					},
					set: function(t) {
						o = "" + t, a.call(this, t)
					}
				}), Object.defineProperty(t, r, {
					enumerable: e.enumerable
				}), {
					getValue: function() {
						return o
					},
					setValue: function(t) {
						o = "" + t
					},
					stopTracking: function() {
						t._valueTracker = null, delete t[r]
					}
				}
			}
		}(t))
	}

	function yt(t) {
		if (!t) return !1;
		var r = t._valueTracker;
		if (!r) return !0;
		var e = r.getValue(),
			o = "";
		return t && (o = jt(t) ? t.checked ? "true" : "false" : t.value), (t = o) !== e && (r.setValue(t), !0)
	}

	function St(t, r) {
		var e = r.checked;
		return i({}, r, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: null != e ? e : t._wrapperState.initialChecked
		})
	}

	function vt(t, r) {
		var e = null == r.defaultValue ? "" : r.defaultValue,
			o = null != r.checked ? r.checked : r.defaultChecked;
		e = ht(null != r.value ? r.value : e), t._wrapperState = {
			initialChecked: o,
			initialValue: e,
			controlled: "checkbox" === r.type || "radio" === r.type ? null != r.checked : null != r.value
		}
	}

	function Ot(t, r) {
		null != (r = r.checked) && X(t, "checked", r, !1)
	}

	function kt(t, r) {
		Ot(t, r);
		var e = ht(r.value),
			o = r.type;
		if (null != e) "number" === o ? (0 === e && "" === t.value || t.value != e) && (t.value = "" + e) : t.value !== "" + e && (t.value = "" + e);
		else if ("submit" === o || "reset" === o) return void t.removeAttribute("value");
		r.hasOwnProperty("value") ? Ct(t, r.type, e) : r.hasOwnProperty("defaultValue") && Ct(t, r.type, ht(r.defaultValue)), null == r.checked && null != r.defaultChecked && (t.defaultChecked = !!r.defaultChecked)
	}

	function Et(t, r, e) {
		if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
			var o = r.type;
			if (!("submit" !== o && "reset" !== o || void 0 !== r.value && null !== r.value)) return;
			r = "" + t._wrapperState.initialValue, e || r === t.value || (t.value = r), t.defaultValue = r
		}
		"" !== (e = t.name) && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, "" !== e && (t.name = e)
	}

	function Ct(t, r, e) {
		"number" === r && t.ownerDocument.activeElement === t || (null == e ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + e && (t.defaultValue = "" + e))
	}

	function At(t, r) {
		return t = i({
			children: void 0
		}, r), (r = function(t) {
			var r = "";
			return o.Children.forEach(t, (function(t) {
				null != t && (r += t)
			})), r
		}(r.children)) && (t.children = r), t
	}

	function Tt(t, r, e, o) {
		if (t = t.options, r) {
			r = {};
			for (var i = 0; i < e.length; i++) r["$" + e[i]] = !0;
			for (e = 0; e < t.length; e++) i = r.hasOwnProperty("$" + t[e].value), t[e].selected !== i && (t[e].selected = i), i && o && (t[e].defaultSelected = !0)
		} else {
			for (e = "" + ht(e), r = null, i = 0; i < t.length; i++) {
				if (t[i].value === e) return t[i].selected = !0, void(o && (t[i].defaultSelected = !0));
				null !== r || t[i].disabled || (r = t[i])
			}
			null !== r && (r.selected = !0)
		}
	}

	function It(t, r) {
		if (null != r.dangerouslySetInnerHTML) throw Error(n(91));
		return i({}, r, {
			value: void 0,
			defaultValue: void 0,
			children: "" + t._wrapperState.initialValue
		})
	}

	function Nt(t, r) {
		var e = r.value;
		if (null == e) {
			if (e = r.children, r = r.defaultValue, null != e) {
				if (null != r) throw Error(n(92));
				if (Array.isArray(e)) {
					if (!(1 >= e.length)) throw Error(n(93));
					e = e[0]
				}
				r = e
			}
			null == r && (r = ""), e = r
		}
		t._wrapperState = {
			initialValue: ht(e)
		}
	}

	function _t(t, r) {
		var e = ht(r.value),
			o = ht(r.defaultValue);
		null != e && ((e = "" + e) !== t.value && (t.value = e), null == r.defaultValue && t.defaultValue !== e && (t.defaultValue = e)), null != o && (t.defaultValue = "" + o)
	}

	function Rt(t) {
		var r = t.textContent;
		r === t._wrapperState.initialValue && "" !== r && null !== r && (t.value = r)
	}
	var Mt = "http://www.w3.org/1999/xhtml",
		Lt = "http://www.w3.org/2000/svg";

	function Dt(t) {
		switch (t) {
			case "svg":
				return "http://www.w3.org/2000/svg";
			case "math":
				return "http://www.w3.org/1998/Math/MathML";
			default:
				return "http://www.w3.org/1999/xhtml"
		}
	}

	function Pt(t, r) {
		return null == t || "http://www.w3.org/1999/xhtml" === t ? Dt(r) : "http://www.w3.org/2000/svg" === t && "foreignObject" === r ? "http://www.w3.org/1999/xhtml" : t
	}
	var zt, Ht = function(t) {
		return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(r, e, o, i) {
			MSApp.execUnsafeLocalFunction((function() {
				return t(r, e)
			}))
		} : t
	}((function(t, r) {
		if (t.namespaceURI !== Lt || "innerHTML" in t) t.innerHTML = r;
		else {
			for ((zt = zt || document.createElement("div")).innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = zt.firstChild; t.firstChild;) t.removeChild(t.firstChild);
			for (; r.firstChild;) t.appendChild(r.firstChild)
		}
	}));

	function Gt(t, r) {
		if (r) {
			var e = t.firstChild;
			if (e && e === t.lastChild && 3 === e.nodeType) return void(e.nodeValue = r)
		}
		t.textContent = r
	}

	function Bt(t, r) {
		var e = {};
		return e[t.toLowerCase()] = r.toLowerCase(), e["Webkit" + t] = "webkit" + r, e["Moz" + t] = "moz" + r, e
	}
	var Ut = {
			animationend: Bt("Animation", "AnimationEnd"),
			animationiteration: Bt("Animation", "AnimationIteration"),
			animationstart: Bt("Animation", "AnimationStart"),
			transitionend: Bt("Transition", "TransitionEnd")
		},
		Wt = {},
		Ft = {};

	function Vt(t) {
		if (Wt[t]) return Wt[t];
		if (!Ut[t]) return t;
		var r, e = Ut[t];
		for (r in e)
			if (e.hasOwnProperty(r) && r in Ft) return Wt[t] = e[r];
		return t
	}
	C && (Ft = document.createElement("div").style, "AnimationEvent" in window || (delete Ut.animationend.animation, delete Ut.animationiteration.animation, delete Ut.animationstart.animation), "TransitionEvent" in window || delete Ut.transitionend.transition);
	var Kt = Vt("animationend"),
		Yt = Vt("animationiteration"),
		qt = Vt("animationstart"),
		Qt = Vt("transitionend"),
		Jt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
		Xt = new("function" == typeof WeakMap ? WeakMap : Map);

	function Zt(t) {
		var r = Xt.get(t);
		return void 0 === r && (r = new Map, Xt.set(t, r)), r
	}

	function $t(t) {
		var r = t,
			e = t;
		if (t.alternate)
			for (; r.return;) r = r.return;
		else {
			t = r;
			do {
				0 != (1026 & (r = t).effectTag) && (e = r.return), t = r.return
			} while (t)
		}
		return 3 === r.tag ? e : null
	}

	function tr(t) {
		if (13 === t.tag) {
			var r = t.memoizedState;
			if (null === r && (null !== (t = t.alternate) && (r = t.memoizedState)), null !== r) return r.dehydrated
		}
		return null
	}

	function rr(t) {
		if ($t(t) !== t) throw Error(n(188))
	}

	function er(t) {
		if (!(t = function(t) {
				var r = t.alternate;
				if (!r) {
					if (null === (r = $t(t))) throw Error(n(188));
					return r !== t ? null : t
				}
				for (var e = t, o = r;;) {
					var i = e.return;
					if (null === i) break;
					var a = i.alternate;
					if (null === a) {
						if (null !== (o = i.return)) {
							e = o;
							continue
						}
						break
					}
					if (i.child === a.child) {
						for (a = i.child; a;) {
							if (a === e) return rr(i), t;
							if (a === o) return rr(i), r;
							a = a.sibling
						}
						throw Error(n(188))
					}
					if (e.return !== o.return) e = i, o = a;
					else {
						for (var l = !1, c = i.child; c;) {
							if (c === e) {
								l = !0, e = i, o = a;
								break
							}
							if (c === o) {
								l = !0, o = i, e = a;
								break
							}
							c = c.sibling
						}
						if (!l) {
							for (c = a.child; c;) {
								if (c === e) {
									l = !0, e = a, o = i;
									break
								}
								if (c === o) {
									l = !0, o = a, e = i;
									break
								}
								c = c.sibling
							}
							if (!l) throw Error(n(189))
						}
					}
					if (e.alternate !== o) throw Error(n(190))
				}
				if (3 !== e.tag) throw Error(n(188));
				return e.stateNode.current === e ? t : r
			}(t))) return null;
		for (var r = t;;) {
			if (5 === r.tag || 6 === r.tag) return r;
			if (r.child) r.child.return = r, r = r.child;
			else {
				if (r === t) break;
				for (; !r.sibling;) {
					if (!r.return || r.return === t) return null;
					r = r.return
				}
				r.sibling.return = r.return, r = r.sibling
			}
		}
		return null
	}

	function or(t, r) {
		if (null == r) throw Error(n(30));
		return null == t ? r : Array.isArray(t) ? Array.isArray(r) ? (t.push.apply(t, r), t) : (t.push(r), t) : Array.isArray(r) ? [t].concat(r) : [t, r]
	}

	function ir(t, r, e) {
		Array.isArray(t) ? t.forEach(r, e) : t && r.call(e, t)
	}
	var ar = null;

	function nr(t) {
		if (t) {
			var r = t._dispatchListeners,
				e = t._dispatchInstances;
			if (Array.isArray(r))
				for (var o = 0; o < r.length && !t.isPropagationStopped(); o++) f(t, r[o], e[o]);
			else r && f(t, r, e);
			t._dispatchListeners = null, t._dispatchInstances = null, t.isPersistent() || t.constructor.release(t)
		}
	}

	function lr(t) {
		if (null !== t && (ar = or(ar, t)), t = ar, ar = null, t) {
			if (ir(t, nr), ar) throw Error(n(95));
			if (m) throw t = p, m = !1, p = null, t
		}
	}

	function cr(t) {
		return (t = t.target || t.srcElement || window).correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t
	}

	function dr(t) {
		if (!C) return !1;
		var r = (t = "on" + t) in document;
		return r || ((r = document.createElement("div")).setAttribute(t, "return;"), r = "function" == typeof r[t]), r
	}
	var mr = [];

	function pr(t) {
		t.topLevelType = null, t.nativeEvent = null, t.targetInst = null, t.ancestors.length = 0, 10 > mr.length && mr.push(t)
	}

	function ur(t, r, e, o) {
		if (mr.length) {
			var i = mr.pop();
			return i.topLevelType = t, i.eventSystemFlags = o, i.nativeEvent = r, i.targetInst = e, i
		}
		return {
			topLevelType: t,
			eventSystemFlags: o,
			nativeEvent: r,
			targetInst: e,
			ancestors: []
		}
	}

	function gr(t) {
		var r = t.targetInst,
			e = r;
		do {
			if (!e) {
				t.ancestors.push(e);
				break
			}
			var o = e;
			if (3 === o.tag) o = o.stateNode.containerInfo;
			else {
				for (; o.return;) o = o.return;
				o = 3 !== o.tag ? null : o.stateNode.containerInfo
			}
			if (!o) break;
			5 !== (r = e.tag) && 6 !== r || t.ancestors.push(e), e = Ee(o)
		} while (e);
		for (e = 0; e < t.ancestors.length; e++) {
			r = t.ancestors[e];
			var i = cr(t.nativeEvent);
			o = t.topLevelType;
			var a = t.nativeEvent,
				n = t.eventSystemFlags;
			0 === e && (n |= 64);
			for (var l = null, c = 0; c < S.length; c++) {
				var d = S[c];
				d && (d = d.extractEvents(o, r, a, i, n)) && (l = or(l, d))
			}
			lr(l)
		}
	}

	function sr(t, r, e) {
		if (!e.has(t)) {
			switch (t) {
				case "scroll":
					qr(r, "scroll", !0);
					break;
				case "focus":
				case "blur":
					qr(r, "focus", !0), qr(r, "blur", !0), e.set("blur", null), e.set("focus", null);
					break;
				case "cancel":
				case "close":
					dr(t) && qr(r, t, !0);
					break;
				case "invalid":
				case "submit":
				case "reset":
					break;
				default:
					-1 === Jt.indexOf(t) && Yr(t, r)
			}
			e.set(t, null)
		}
	}
	var br, wr, fr, hr = !1,
		jr = [],
		xr = null,
		yr = null,
		Sr = null,
		vr = new Map,
		Or = new Map,
		kr = [],
		Er = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
		Cr = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

	function Ar(t, r, e, o, i) {
		return {
			blockedOn: t,
			topLevelType: r,
			eventSystemFlags: 32 | e,
			nativeEvent: i,
			container: o
		}
	}

	function Tr(t, r) {
		switch (t) {
			case "focus":
			case "blur":
				xr = null;
				break;
			case "dragenter":
			case "dragleave":
				yr = null;
				break;
			case "mouseover":
			case "mouseout":
				Sr = null;
				break;
			case "pointerover":
			case "pointerout":
				vr.delete(r.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				Or.delete(r.pointerId)
		}
	}

	function Ir(t, r, e, o, i, a) {
		return null === t || t.nativeEvent !== a ? (t = Ar(r, e, o, i, a), null !== r && (null !== (r = Ce(r)) && wr(r)), t) : (t.eventSystemFlags |= o, t)
	}

	function Nr(t) {
		var r = Ee(t.target);
		if (null !== r) {
			var e = $t(r);
			if (null !== e)
				if (13 === (r = e.tag)) {
					if (null !== (r = tr(e))) return t.blockedOn = r, void a.unstable_runWithPriority(t.priority, (function() {
						fr(e)
					}))
				} else if (3 === r && e.stateNode.hydrate) return void(t.blockedOn = 3 === e.tag ? e.stateNode.containerInfo : null)
		}
		t.blockedOn = null
	}

	function _r(t) {
		if (null !== t.blockedOn) return !1;
		var r = Zr(t.topLevelType, t.eventSystemFlags, t.container, t.nativeEvent);
		if (null !== r) {
			var e = Ce(r);
			return null !== e && wr(e), t.blockedOn = r, !1
		}
		return !0
	}

	function Rr(t, r, e) {
		_r(t) && e.delete(r)
	}

	function Mr() {
		for (hr = !1; 0 < jr.length;) {
			var t = jr[0];
			if (null !== t.blockedOn) {
				null !== (t = Ce(t.blockedOn)) && br(t);
				break
			}
			var r = Zr(t.topLevelType, t.eventSystemFlags, t.container, t.nativeEvent);
			null !== r ? t.blockedOn = r : jr.shift()
		}
		null !== xr && _r(xr) && (xr = null), null !== yr && _r(yr) && (yr = null), null !== Sr && _r(Sr) && (Sr = null), vr.forEach(Rr), Or.forEach(Rr)
	}

	function Lr(t, r) {
		t.blockedOn === r && (t.blockedOn = null, hr || (hr = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Mr)))
	}

	function Dr(t) {
		function r(r) {
			return Lr(r, t)
		}
		if (0 < jr.length) {
			Lr(jr[0], t);
			for (var e = 1; e < jr.length; e++) {
				var o = jr[e];
				o.blockedOn === t && (o.blockedOn = null)
			}
		}
		for (null !== xr && Lr(xr, t), null !== yr && Lr(yr, t), null !== Sr && Lr(Sr, t), vr.forEach(r), Or.forEach(r), e = 0; e < kr.length; e++)(o = kr[e]).blockedOn === t && (o.blockedOn = null);
		for (; 0 < kr.length && null === (e = kr[0]).blockedOn;) Nr(e), null === e.blockedOn && kr.shift()
	}
	var Pr = {},
		zr = new Map,
		Hr = new Map,
		Gr = ["abort", "abort", Kt, "animationEnd", Yt, "animationIteration", qt, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Qt, "transitionEnd", "waiting", "waiting"];

	function Br(t, r) {
		for (var e = 0; e < t.length; e += 2) {
			var o = t[e],
				i = t[e + 1],
				a = "on" + (i[0].toUpperCase() + i.slice(1));
			a = {
				phasedRegistrationNames: {
					bubbled: a,
					captured: a + "Capture"
				},
				dependencies: [o],
				eventPriority: r
			}, Hr.set(o, r), zr.set(o, a), Pr[i] = a
		}
	}
	Br("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Br("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Br(Gr, 2);
	for (var Ur = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Wr = 0; Wr < Ur.length; Wr++) Hr.set(Ur[Wr], 0);
	var Fr = a.unstable_UserBlockingPriority,
		Vr = a.unstable_runWithPriority,
		Kr = !0;

	function Yr(t, r) {
		qr(r, t, !1)
	}

	function qr(t, r, e) {
		var o = Hr.get(r);
		switch (void 0 === o ? 2 : o) {
			case 0:
				o = Qr.bind(null, r, 1, t);
				break;
			case 1:
				o = Jr.bind(null, r, 1, t);
				break;
			default:
				o = Xr.bind(null, r, 1, t)
		}
		e ? t.addEventListener(r, o, !0) : t.addEventListener(r, o, !1)
	}

	function Qr(t, r, e, o) {
		z || D();
		var i = Xr,
			a = z;
		z = !0;
		try {
			L(i, t, r, e, o)
		} finally {
			(z = a) || G()
		}
	}

	function Jr(t, r, e, o) {
		Vr(Fr, Xr.bind(null, t, r, e, o))
	}

	function Xr(t, r, e, o) {
		if (Kr)
			if (0 < jr.length && -1 < Er.indexOf(t)) t = Ar(null, t, r, e, o), jr.push(t);
			else {
				var i = Zr(t, r, e, o);
				if (null === i) Tr(t, o);
				else if (-1 < Er.indexOf(t)) t = Ar(i, t, r, e, o), jr.push(t);
				else if (! function(t, r, e, o, i) {
						switch (r) {
							case "focus":
								return xr = Ir(xr, t, r, e, o, i), !0;
							case "dragenter":
								return yr = Ir(yr, t, r, e, o, i), !0;
							case "mouseover":
								return Sr = Ir(Sr, t, r, e, o, i), !0;
							case "pointerover":
								var a = i.pointerId;
								return vr.set(a, Ir(vr.get(a) || null, t, r, e, o, i)), !0;
							case "gotpointercapture":
								return a = i.pointerId, Or.set(a, Ir(Or.get(a) || null, t, r, e, o, i)), !0
						}
						return !1
					}(i, t, r, e, o)) {
					Tr(t, o), t = ur(t, o, null, r);
					try {
						B(gr, t)
					} finally {
						pr(t)
					}
				}
			}
	}

	function Zr(t, r, e, o) {
		if (null !== (e = Ee(e = cr(o)))) {
			var i = $t(e);
			if (null === i) e = null;
			else {
				var a = i.tag;
				if (13 === a) {
					if (null !== (e = tr(i))) return e;
					e = null
				} else if (3 === a) {
					if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
					e = null
				} else i !== e && (e = null)
			}
		}
		t = ur(t, o, e, r);
		try {
			B(gr, t)
		} finally {
			pr(t)
		}
		return null
	}
	var $r = {
			animationIterationCount: !0,
			borderImageOutset: !0,
			borderImageSlice: !0,
			borderImageWidth: !0,
			boxFlex: !0,
			boxFlexGroup: !0,
			boxOrdinalGroup: !0,
			columnCount: !0,
			columns: !0,
			flex: !0,
			flexGrow: !0,
			flexPositive: !0,
			flexShrink: !0,
			flexNegative: !0,
			flexOrder: !0,
			gridArea: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowSpan: !0,
			gridRowStart: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnSpan: !0,
			gridColumnStart: !0,
			fontWeight: !0,
			lineClamp: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			tabSize: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
			fillOpacity: !0,
			floodOpacity: !0,
			stopOpacity: !0,
			strokeDasharray: !0,
			strokeDashoffset: !0,
			strokeMiterlimit: !0,
			strokeOpacity: !0,
			strokeWidth: !0
		},
		te = ["Webkit", "ms", "Moz", "O"];

	function re(t, r, e) {
		return null == r || "boolean" == typeof r || "" === r ? "" : e || "number" != typeof r || 0 === r || $r.hasOwnProperty(t) && $r[t] ? ("" + r).trim() : r + "px"
	}

	function ee(t, r) {
		for (var e in t = t.style, r)
			if (r.hasOwnProperty(e)) {
				var o = 0 === e.indexOf("--"),
					i = re(e, r[e], o);
				"float" === e && (e = "cssFloat"), o ? t.setProperty(e, i) : t[e] = i
			}
	}
	Object.keys($r).forEach((function(t) {
		te.forEach((function(r) {
			r = r + t.charAt(0).toUpperCase() + t.substring(1), $r[r] = $r[t]
		}))
	}));
	var oe = i({
		menuitem: !0
	}, {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	});

	function ie(t, r) {
		if (r) {
			if (oe[t] && (null != r.children || null != r.dangerouslySetInnerHTML)) throw Error(n(137, t, ""));
			if (null != r.dangerouslySetInnerHTML) {
				if (null != r.children) throw Error(n(60));
				if ("object" != typeof r.dangerouslySetInnerHTML || !("__html" in r.dangerouslySetInnerHTML)) throw Error(n(61))
			}
			if (null != r.style && "object" != typeof r.style) throw Error(n(62, ""))
		}
	}

	function ae(t, r) {
		if (-1 === t.indexOf("-")) return "string" == typeof r.is;
		switch (t) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0
		}
	}
	var ne = Mt;

	function le(t, r) {
		var e = Zt(t = 9 === t.nodeType || 11 === t.nodeType ? t : t.ownerDocument);
		r = k[r];
		for (var o = 0; o < r.length; o++) sr(r[o], t, e)
	}

	function ce() {}

	function de(t) {
		if (void 0 === (t = t || ("undefined" != typeof document ? document : void 0))) return null;
		try {
			return t.activeElement || t.body
		} catch (r) {
			return t.body
		}
	}

	function me(t) {
		for (; t && t.firstChild;) t = t.firstChild;
		return t
	}

	function pe(t, r) {
		var e, o = me(t);
		for (t = 0; o;) {
			if (3 === o.nodeType) {
				if (e = t + o.textContent.length, t <= r && e >= r) return {
					node: o,
					offset: r - t
				};
				t = e
			}
			t: {
				for (; o;) {
					if (o.nextSibling) {
						o = o.nextSibling;
						break t
					}
					o = o.parentNode
				}
				o = void 0
			}
			o = me(o)
		}
	}

	function ue() {
		for (var t = window, r = de(); r instanceof t.HTMLIFrameElement;) {
			try {
				var e = "string" == typeof r.contentWindow.location.href
			} catch (t) {
				e = !1
			}
			if (!e) break;
			r = de((t = r.contentWindow).document)
		}
		return r
	}

	function ge(t) {
		var r = t && t.nodeName && t.nodeName.toLowerCase();
		return r && ("input" === r && ("text" === t.type || "search" === t.type || "tel" === t.type || "url" === t.type || "password" === t.type) || "textarea" === r || "true" === t.contentEditable)
	}
	var se = null,
		be = null;

	function we(t, r) {
		switch (t) {
			case "button":
			case "input":
			case "select":
			case "textarea":
				return !!r.autoFocus
		}
		return !1
	}

	function fe(t, r) {
		return "textarea" === t || "option" === t || "noscript" === t || "string" == typeof r.children || "number" == typeof r.children || "object" == typeof r.dangerouslySetInnerHTML && null !== r.dangerouslySetInnerHTML && null != r.dangerouslySetInnerHTML.__html
	}
	var he = "function" == typeof setTimeout ? setTimeout : void 0,
		je = "function" == typeof clearTimeout ? clearTimeout : void 0;

	function xe(t) {
		for (; null != t; t = t.nextSibling) {
			var r = t.nodeType;
			if (1 === r || 3 === r) break
		}
		return t
	}

	function ye(t) {
		t = t.previousSibling;
		for (var r = 0; t;) {
			if (8 === t.nodeType) {
				var e = t.data;
				if ("$" === e || "$!" === e || "$?" === e) {
					if (0 === r) return t;
					r--
				} else "/$" === e && r++
			}
			t = t.previousSibling
		}
		return null
	}
	var Se = Math.random().toString(36).slice(2),
		ve = "__reactInternalInstance$" + Se,
		Oe = "__reactEventHandlers$" + Se,
		ke = "__reactContainere$" + Se;

	function Ee(t) {
		var r = t[ve];
		if (r) return r;
		for (var e = t.parentNode; e;) {
			if (r = e[ke] || e[ve]) {
				if (e = r.alternate, null !== r.child || null !== e && null !== e.child)
					for (t = ye(t); null !== t;) {
						if (e = t[ve]) return e;
						t = ye(t)
					}
				return r
			}
			e = (t = e).parentNode
		}
		return null
	}

	function Ce(t) {
		return !(t = t[ve] || t[ke]) || 5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag ? null : t
	}

	function Ae(t) {
		if (5 === t.tag || 6 === t.tag) return t.stateNode;
		throw Error(n(33))
	}

	function Te(t) {
		return t[Oe] || null
	}

	function Ie(t) {
		do {
			t = t.return
		} while (t && 5 !== t.tag);
		return t || null
	}

	function Ne(t, r) {
		var e = t.stateNode;
		if (!e) return null;
		var o = s(e);
		if (!o) return null;
		e = o[r];
		t: switch (r) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(o = !o.disabled) || (o = !("button" === (t = t.type) || "input" === t || "select" === t || "textarea" === t)), t = !o;
				break t;
			default:
				t = !1
		}
		if (t) return null;
		if (e && "function" != typeof e) throw Error(n(231, r, typeof e));
		return e
	}

	function _e(t, r, e) {
		(r = Ne(t, e.dispatchConfig.phasedRegistrationNames[r])) && (e._dispatchListeners = or(e._dispatchListeners, r), e._dispatchInstances = or(e._dispatchInstances, t))
	}

	function Re(t) {
		if (t && t.dispatchConfig.phasedRegistrationNames) {
			for (var r = t._targetInst, e = []; r;) e.push(r), r = Ie(r);
			for (r = e.length; 0 < r--;) _e(e[r], "captured", t);
			for (r = 0; r < e.length; r++) _e(e[r], "bubbled", t)
		}
	}

	function Me(t, r, e) {
		t && e && e.dispatchConfig.registrationName && (r = Ne(t, e.dispatchConfig.registrationName)) && (e._dispatchListeners = or(e._dispatchListeners, r), e._dispatchInstances = or(e._dispatchInstances, t))
	}

	function Le(t) {
		t && t.dispatchConfig.registrationName && Me(t._targetInst, null, t)
	}

	function De(t) {
		ir(t, Re)
	}
	var Pe = null,
		ze = null,
		He = null;

	function Ge() {
		if (He) return He;
		var t, r, e = ze,
			o = e.length,
			i = "value" in Pe ? Pe.value : Pe.textContent,
			a = i.length;
		for (t = 0; t < o && e[t] === i[t]; t++);
		var n = o - t;
		for (r = 1; r <= n && e[o - r] === i[a - r]; r++);
		return He = i.slice(t, 1 < r ? 1 - r : void 0)
	}

	function Be() {
		return !0
	}

	function Ue() {
		return !1
	}

	function We(t, r, e, o) {
		for (var i in this.dispatchConfig = t, this._targetInst = r, this.nativeEvent = e, t = this.constructor.Interface) t.hasOwnProperty(i) && ((r = t[i]) ? this[i] = r(e) : "target" === i ? this.target = o : this[i] = e[i]);
		return this.isDefaultPrevented = (null != e.defaultPrevented ? e.defaultPrevented : !1 === e.returnValue) ? Be : Ue, this.isPropagationStopped = Ue, this
	}

	function Fe(t, r, e, o) {
		if (this.eventPool.length) {
			var i = this.eventPool.pop();
			return this.call(i, t, r, e, o), i
		}
		return new this(t, r, e, o)
	}

	function Ve(t) {
		if (!(t instanceof this)) throw Error(n(279));
		t.destructor(), 10 > this.eventPool.length && this.eventPool.push(t)
	}

	function Ke(t) {
		t.eventPool = [], t.getPooled = Fe, t.release = Ve
	}
	i(We.prototype, {
		preventDefault: function() {
			this.defaultPrevented = !0;
			var t = this.nativeEvent;
			t && (t.preventDefault ? t.preventDefault() : "unknown" != typeof t.returnValue && (t.returnValue = !1), this.isDefaultPrevented = Be)
		},
		stopPropagation: function() {
			var t = this.nativeEvent;
			t && (t.stopPropagation ? t.stopPropagation() : "unknown" != typeof t.cancelBubble && (t.cancelBubble = !0), this.isPropagationStopped = Be)
		},
		persist: function() {
			this.isPersistent = Be
		},
		isPersistent: Ue,
		destructor: function() {
			var t, r = this.constructor.Interface;
			for (t in r) this[t] = null;
			this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = Ue, this._dispatchInstances = this._dispatchListeners = null
		}
	}), We.Interface = {
		type: null,
		target: null,
		currentTarget: function() {
			return null
		},
		eventPhase: null,
		bubbles: null,
		cancelable: null,
		timeStamp: function(t) {
			return t.timeStamp || Date.now()
		},
		defaultPrevented: null,
		isTrusted: null
	}, We.extend = function(t) {
		function r() {}

		function e() {
			return o.apply(this, arguments)
		}
		var o = this;
		r.prototype = o.prototype;
		var a = new r;
		return i(a, e.prototype), e.prototype = a, e.prototype.constructor = e, e.Interface = i({}, o.Interface, t), e.extend = o.extend, Ke(e), e
	}, Ke(We);
	var Ye = We.extend({
			data: null
		}),
		qe = We.extend({
			data: null
		}),
		Qe = [9, 13, 27, 32],
		Je = C && "CompositionEvent" in window,
		Xe = null;
	C && "documentMode" in document && (Xe = document.documentMode);
	var Ze = C && "TextEvent" in window && !Xe,
		$e = C && (!Je || Xe && 8 < Xe && 11 >= Xe),
		to = String.fromCharCode(32),
		ro = {
			beforeInput: {
				phasedRegistrationNames: {
					bubbled: "onBeforeInput",
					captured: "onBeforeInputCapture"
				},
				dependencies: ["compositionend", "keypress", "textInput", "paste"]
			},
			compositionEnd: {
				phasedRegistrationNames: {
					bubbled: "onCompositionEnd",
					captured: "onCompositionEndCapture"
				},
				dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
			},
			compositionStart: {
				phasedRegistrationNames: {
					bubbled: "onCompositionStart",
					captured: "onCompositionStartCapture"
				},
				dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
			},
			compositionUpdate: {
				phasedRegistrationNames: {
					bubbled: "onCompositionUpdate",
					captured: "onCompositionUpdateCapture"
				},
				dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
			}
		},
		eo = !1;

	function oo(t, r) {
		switch (t) {
			case "keyup":
				return -1 !== Qe.indexOf(r.keyCode);
			case "keydown":
				return 229 !== r.keyCode;
			case "keypress":
			case "mousedown":
			case "blur":
				return !0;
			default:
				return !1
		}
	}

	function io(t) {
		return "object" == typeof(t = t.detail) && "data" in t ? t.data : null
	}
	var ao = !1;
	var no = {
			eventTypes: ro,
			extractEvents: function(t, r, e, o) {
				var i;
				if (Je) t: {
					switch (t) {
						case "compositionstart":
							var a = ro.compositionStart;
							break t;
						case "compositionend":
							a = ro.compositionEnd;
							break t;
						case "compositionupdate":
							a = ro.compositionUpdate;
							break t
					}
					a = void 0
				}
				else ao ? oo(t, e) && (a = ro.compositionEnd) : "keydown" === t && 229 === e.keyCode && (a = ro.compositionStart);
				return a ? ($e && "ko" !== e.locale && (ao || a !== ro.compositionStart ? a === ro.compositionEnd && ao && (i = Ge()) : (ze = "value" in (Pe = o) ? Pe.value : Pe.textContent, ao = !0)), a = Ye.getPooled(a, r, e, o), i ? a.data = i : null !== (i = io(e)) && (a.data = i), De(a), i = a) : i = null, (t = Ze ? function(t, r) {
					switch (t) {
						case "compositionend":
							return io(r);
						case "keypress":
							return 32 !== r.which ? null : (eo = !0, to);
						case "textInput":
							return (t = r.data) === to && eo ? null : t;
						default:
							return null
					}
				}(t, e) : function(t, r) {
					if (ao) return "compositionend" === t || !Je && oo(t, r) ? (t = Ge(), He = ze = Pe = null, ao = !1, t) : null;
					switch (t) {
						case "paste":
							return null;
						case "keypress":
							if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
								if (r.char && 1 < r.char.length) return r.char;
								if (r.which) return String.fromCharCode(r.which)
							}
							return null;
						case "compositionend":
							return $e && "ko" !== r.locale ? null : r.data;
						default:
							return null
					}
				}(t, e)) ? ((r = qe.getPooled(ro.beforeInput, r, e, o)).data = t, De(r)) : r = null, null === i ? r : null === r ? i : [i, r]
			}
		},
		lo = {
			color: !0,
			date: !0,
			datetime: !0,
			"datetime-local": !0,
			email: !0,
			month: !0,
			number: !0,
			password: !0,
			range: !0,
			search: !0,
			tel: !0,
			text: !0,
			time: !0,
			url: !0,
			week: !0
		};

	function co(t) {
		var r = t && t.nodeName && t.nodeName.toLowerCase();
		return "input" === r ? !!lo[t.type] : "textarea" === r
	}
	var mo = {
		change: {
			phasedRegistrationNames: {
				bubbled: "onChange",
				captured: "onChangeCapture"
			},
			dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
		}
	};

	function po(t, r, e) {
		return (t = We.getPooled(mo.change, t, r, e)).type = "change", _(e), De(t), t
	}
	var uo = null,
		go = null;

	function so(t) {
		lr(t)
	}

	function bo(t) {
		if (yt(Ae(t))) return t
	}

	function wo(t, r) {
		if ("change" === t) return r
	}
	var fo = !1;

	function ho() {
		uo && (uo.detachEvent("onpropertychange", jo), go = uo = null)
	}

	function jo(t) {
		if ("value" === t.propertyName && bo(go))
			if (t = po(go, t, cr(t)), z) lr(t);
			else {
				z = !0;
				try {
					M(so, t)
				} finally {
					z = !1, G()
				}
			}
	}

	function xo(t, r, e) {
		"focus" === t ? (ho(), go = e, (uo = r).attachEvent("onpropertychange", jo)) : "blur" === t && ho()
	}

	function yo(t) {
		if ("selectionchange" === t || "keyup" === t || "keydown" === t) return bo(go)
	}

	function So(t, r) {
		if ("click" === t) return bo(r)
	}

	function vo(t, r) {
		if ("input" === t || "change" === t) return bo(r)
	}
	C && (fo = dr("input") && (!document.documentMode || 9 < document.documentMode));
	var Oo = {
			eventTypes: mo,
			_isInputEventSupported: fo,
			extractEvents: function(t, r, e, o) {
				var i = r ? Ae(r) : window,
					a = i.nodeName && i.nodeName.toLowerCase();
				if ("select" === a || "input" === a && "file" === i.type) var n = wo;
				else if (co(i))
					if (fo) n = vo;
					else {
						n = yo;
						var l = xo
					}
				else(a = i.nodeName) && "input" === a.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (n = So);
				if (n && (n = n(t, r))) return po(n, e, o);
				l && l(t, i, r), "blur" === t && (t = i._wrapperState) && t.controlled && "number" === i.type && Ct(i, "number", i.value)
			}
		},
		ko = We.extend({
			view: null,
			detail: null
		}),
		Eo = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey"
		};

	function Co(t) {
		var r = this.nativeEvent;
		return r.getModifierState ? r.getModifierState(t) : !!(t = Eo[t]) && !!r[t]
	}

	function Ao() {
		return Co
	}
	var To = 0,
		Io = 0,
		No = !1,
		_o = !1,
		Ro = ko.extend({
			screenX: null,
			screenY: null,
			clientX: null,
			clientY: null,
			pageX: null,
			pageY: null,
			ctrlKey: null,
			shiftKey: null,
			altKey: null,
			metaKey: null,
			getModifierState: Ao,
			button: null,
			buttons: null,
			relatedTarget: function(t) {
				return t.relatedTarget || (t.fromElement === t.srcElement ? t.toElement : t.fromElement)
			},
			movementX: function(t) {
				if ("movementX" in t) return t.movementX;
				var r = To;
				return To = t.screenX, No ? "mousemove" === t.type ? t.screenX - r : 0 : (No = !0, 0)
			},
			movementY: function(t) {
				if ("movementY" in t) return t.movementY;
				var r = Io;
				return Io = t.screenY, _o ? "mousemove" === t.type ? t.screenY - r : 0 : (_o = !0, 0)
			}
		}),
		Mo = Ro.extend({
			pointerId: null,
			width: null,
			height: null,
			pressure: null,
			tangentialPressure: null,
			tiltX: null,
			tiltY: null,
			twist: null,
			pointerType: null,
			isPrimary: null
		}),
		Lo = {
			mouseEnter: {
				registrationName: "onMouseEnter",
				dependencies: ["mouseout", "mouseover"]
			},
			mouseLeave: {
				registrationName: "onMouseLeave",
				dependencies: ["mouseout", "mouseover"]
			},
			pointerEnter: {
				registrationName: "onPointerEnter",
				dependencies: ["pointerout", "pointerover"]
			},
			pointerLeave: {
				registrationName: "onPointerLeave",
				dependencies: ["pointerout", "pointerover"]
			}
		},
		Do = {
			eventTypes: Lo,
			extractEvents: function(t, r, e, o, i) {
				var a = "mouseover" === t || "pointerover" === t,
					n = "mouseout" === t || "pointerout" === t;
				if (a && 0 == (32 & i) && (e.relatedTarget || e.fromElement) || !n && !a) return null;
				(a = o.window === o ? o : (a = o.ownerDocument) ? a.defaultView || a.parentWindow : window, n) ? (n = r, null !== (r = (r = e.relatedTarget || e.toElement) ? Ee(r) : null) && (r !== $t(r) || 5 !== r.tag && 6 !== r.tag) && (r = null)) : n = null;
				if (n === r) return null;
				if ("mouseout" === t || "mouseover" === t) var l = Ro,
					c = Lo.mouseLeave,
					d = Lo.mouseEnter,
					m = "mouse";
				else "pointerout" !== t && "pointerover" !== t || (l = Mo, c = Lo.pointerLeave, d = Lo.pointerEnter, m = "pointer");
				if (t = null == n ? a : Ae(n), a = null == r ? a : Ae(r), (c = l.getPooled(c, n, e, o)).type = m + "leave", c.target = t, c.relatedTarget = a, (e = l.getPooled(d, r, e, o)).type = m + "enter", e.target = a, e.relatedTarget = t, m = r, (o = n) && m) t: {
					for (d = m, n = 0, t = l = o; t; t = Ie(t)) n++;
					for (t = 0, r = d; r; r = Ie(r)) t++;
					for (; 0 < n - t;) l = Ie(l),
					n--;
					for (; 0 < t - n;) d = Ie(d),
					t--;
					for (; n--;) {
						if (l === d || l === d.alternate) break t;
						l = Ie(l), d = Ie(d)
					}
					l = null
				}
				else l = null;
				for (d = l, l = []; o && o !== d && (null === (n = o.alternate) || n !== d);) l.push(o), o = Ie(o);
				for (o = []; m && m !== d && (null === (n = m.alternate) || n !== d);) o.push(m), m = Ie(m);
				for (m = 0; m < l.length; m++) Me(l[m], "bubbled", c);
				for (m = o.length; 0 < m--;) Me(o[m], "captured", e);
				return 0 == (64 & i) ? [c] : [c, e]
			}
		};
	var Po = "function" == typeof Object.is ? Object.is : function(t, r) {
			return t === r && (0 !== t || 1 / t == 1 / r) || t != t && r != r
		},
		zo = Object.prototype.hasOwnProperty;

	function Ho(t, r) {
		if (Po(t, r)) return !0;
		if ("object" != typeof t || null === t || "object" != typeof r || null === r) return !1;
		var e = Object.keys(t),
			o = Object.keys(r);
		if (e.length !== o.length) return !1;
		for (o = 0; o < e.length; o++)
			if (!zo.call(r, e[o]) || !Po(t[e[o]], r[e[o]])) return !1;
		return !0
	}
	var Go = C && "documentMode" in document && 11 >= document.documentMode,
		Bo = {
			select: {
				phasedRegistrationNames: {
					bubbled: "onSelect",
					captured: "onSelectCapture"
				},
				dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
			}
		},
		Uo = null,
		Wo = null,
		Fo = null,
		Vo = !1;

	function Ko(t, r) {
		var e = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
		return Vo || null == Uo || Uo !== de(e) ? null : ("selectionStart" in (e = Uo) && ge(e) ? e = {
			start: e.selectionStart,
			end: e.selectionEnd
		} : e = {
			anchorNode: (e = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection()).anchorNode,
			anchorOffset: e.anchorOffset,
			focusNode: e.focusNode,
			focusOffset: e.focusOffset
		}, Fo && Ho(Fo, e) ? null : (Fo = e, (t = We.getPooled(Bo.select, Wo, t, r)).type = "select", t.target = Uo, De(t), t))
	}
	var Yo = {
			eventTypes: Bo,
			extractEvents: function(t, r, e, o, i, a) {
				if (!(a = !(i = a || (o.window === o ? o.document : 9 === o.nodeType ? o : o.ownerDocument)))) {
					t: {
						i = Zt(i),
						a = k.onSelect;
						for (var n = 0; n < a.length; n++)
							if (!i.has(a[n])) {
								i = !1;
								break t
							} i = !0
					}
					a = !i
				}
				if (a) return null;
				switch (i = r ? Ae(r) : window, t) {
					case "focus":
						(co(i) || "true" === i.contentEditable) && (Uo = i, Wo = r, Fo = null);
						break;
					case "blur":
						Fo = Wo = Uo = null;
						break;
					case "mousedown":
						Vo = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						return Vo = !1, Ko(e, o);
					case "selectionchange":
						if (Go) break;
					case "keydown":
					case "keyup":
						return Ko(e, o)
				}
				return null
			}
		},
		qo = We.extend({
			animationName: null,
			elapsedTime: null,
			pseudoElement: null
		}),
		Qo = We.extend({
			clipboardData: function(t) {
				return "clipboardData" in t ? t.clipboardData : window.clipboardData
			}
		}),
		Jo = ko.extend({
			relatedTarget: null
		});

	function Xo(t) {
		var r = t.keyCode;
		return "charCode" in t ? 0 === (t = t.charCode) && 13 === r && (t = 13) : t = r, 10 === t && (t = 13), 32 <= t || 13 === t ? t : 0
	}
	var Zo = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified"
		},
		$o = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta"
		},
		ti = ko.extend({
			key: function(t) {
				if (t.key) {
					var r = Zo[t.key] || t.key;
					if ("Unidentified" !== r) return r
				}
				return "keypress" === t.type ? 13 === (t = Xo(t)) ? "Enter" : String.fromCharCode(t) : "keydown" === t.type || "keyup" === t.type ? $o[t.keyCode] || "Unidentified" : ""
			},
			location: null,
			ctrlKey: null,
			shiftKey: null,
			altKey: null,
			metaKey: null,
			repeat: null,
			locale: null,
			getModifierState: Ao,
			charCode: function(t) {
				return "keypress" === t.type ? Xo(t) : 0
			},
			keyCode: function(t) {
				return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
			},
			which: function(t) {
				return "keypress" === t.type ? Xo(t) : "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
			}
		}),
		ri = Ro.extend({
			dataTransfer: null
		}),
		ei = ko.extend({
			touches: null,
			targetTouches: null,
			changedTouches: null,
			altKey: null,
			metaKey: null,
			ctrlKey: null,
			shiftKey: null,
			getModifierState: Ao
		}),
		oi = We.extend({
			propertyName: null,
			elapsedTime: null,
			pseudoElement: null
		}),
		ii = Ro.extend({
			deltaX: function(t) {
				return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
			},
			deltaY: function(t) {
				return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
			},
			deltaZ: null,
			deltaMode: null
		}),
		ai = {
			eventTypes: Pr,
			extractEvents: function(t, r, e, o) {
				var i = zr.get(t);
				if (!i) return null;
				switch (t) {
					case "keypress":
						if (0 === Xo(e)) return null;
					case "keydown":
					case "keyup":
						t = ti;
						break;
					case "blur":
					case "focus":
						t = Jo;
						break;
					case "click":
						if (2 === e.button) return null;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						t = Ro;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						t = ri;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						t = ei;
						break;
					case Kt:
					case Yt:
					case qt:
						t = qo;
						break;
					case Qt:
						t = oi;
						break;
					case "scroll":
						t = ko;
						break;
					case "wheel":
						t = ii;
						break;
					case "copy":
					case "cut":
					case "paste":
						t = Qo;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						t = Mo;
						break;
					default:
						t = We
				}
				return De(r = t.getPooled(i, r, e, o)), r
			}
		};
	if (h) throw Error(n(101));
	h = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), x(), s = Te, b = Ce, w = Ae, E({
		SimpleEventPlugin: ai,
		EnterLeaveEventPlugin: Do,
		ChangeEventPlugin: Oo,
		SelectEventPlugin: Yo,
		BeforeInputEventPlugin: no
	});
	var ni = [],
		li = -1;

	function ci(t) {
		0 > li || (t.current = ni[li], ni[li] = null, li--)
	}

	function di(t, r) {
		li++, ni[li] = t.current, t.current = r
	}
	var mi = {},
		pi = {
			current: mi
		},
		ui = {
			current: !1
		},
		gi = mi;

	function si(t, r) {
		var e = t.type.contextTypes;
		if (!e) return mi;
		var o = t.stateNode;
		if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
		var i, a = {};
		for (i in e) a[i] = r[i];
		return o && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = r, t.__reactInternalMemoizedMaskedChildContext = a), a
	}

	function bi(t) {
		return null != (t = t.childContextTypes)
	}

	function wi() {
		ci(ui), ci(pi)
	}

	function fi(t, r, e) {
		if (pi.current !== mi) throw Error(n(168));
		di(pi, r), di(ui, e)
	}

	function hi(t, r, e) {
		var o = t.stateNode;
		if (t = r.childContextTypes, "function" != typeof o.getChildContext) return e;
		for (var a in o = o.getChildContext())
			if (!(a in t)) throw Error(n(108, wt(r) || "Unknown", a));
		return i({}, e, {}, o)
	}

	function ji(t) {
		return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || mi, gi = pi.current, di(pi, t), di(ui, ui.current), !0
	}

	function xi(t, r, e) {
		var o = t.stateNode;
		if (!o) throw Error(n(169));
		e ? (t = hi(t, r, gi), o.__reactInternalMemoizedMergedChildContext = t, ci(ui), ci(pi), di(pi, t)) : ci(ui), di(ui, e)
	}
	var yi = a.unstable_runWithPriority,
		Si = a.unstable_scheduleCallback,
		vi = a.unstable_cancelCallback,
		Oi = a.unstable_requestPaint,
		ki = a.unstable_now,
		Ei = a.unstable_getCurrentPriorityLevel,
		Ci = a.unstable_ImmediatePriority,
		Ai = a.unstable_UserBlockingPriority,
		Ti = a.unstable_NormalPriority,
		Ii = a.unstable_LowPriority,
		Ni = a.unstable_IdlePriority,
		_i = {},
		Ri = a.unstable_shouldYield,
		Mi = void 0 !== Oi ? Oi : function() {},
		Li = null,
		Di = null,
		Pi = !1,
		zi = ki(),
		Hi = 1e4 > zi ? ki : function() {
			return ki() - zi
		};

	function Gi() {
		switch (Ei()) {
			case Ci:
				return 99;
			case Ai:
				return 98;
			case Ti:
				return 97;
			case Ii:
				return 96;
			case Ni:
				return 95;
			default:
				throw Error(n(332))
		}
	}

	function Bi(t) {
		switch (t) {
			case 99:
				return Ci;
			case 98:
				return Ai;
			case 97:
				return Ti;
			case 96:
				return Ii;
			case 95:
				return Ni;
			default:
				throw Error(n(332))
		}
	}

	function Ui(t, r) {
		return t = Bi(t), yi(t, r)
	}

	function Wi(t, r, e) {
		return t = Bi(t), Si(t, r, e)
	}

	function Fi(t) {
		return null === Li ? (Li = [t], Di = Si(Ci, Ki)) : Li.push(t), _i
	}

	function Vi() {
		if (null !== Di) {
			var t = Di;
			Di = null, vi(t)
		}
		Ki()
	}

	function Ki() {
		if (!Pi && null !== Li) {
			Pi = !0;
			var t = 0;
			try {
				var r = Li;
				Ui(99, (function() {
					for (; t < r.length; t++) {
						var e = r[t];
						do {
							e = e(!0)
						} while (null !== e)
					}
				})), Li = null
			} catch (r) {
				throw null !== Li && (Li = Li.slice(t + 1)), Si(Ci, Vi), r
			} finally {
				Pi = !1
			}
		}
	}

	function Yi(t, r, e) {
		return 1073741821 - (1 + ((1073741821 - t + r / 10) / (e /= 10) | 0)) * e
	}

	function qi(t, r) {
		if (t && t.defaultProps)
			for (var e in r = i({}, r), t = t.defaultProps) void 0 === r[e] && (r[e] = t[e]);
		return r
	}
	var Qi = {
			current: null
		},
		Ji = null,
		Xi = null,
		Zi = null;

	function $i() {
		Zi = Xi = Ji = null
	}

	function ta(t) {
		var r = Qi.current;
		ci(Qi), t.type._context._currentValue = r
	}

	function ra(t, r) {
		for (; null !== t;) {
			var e = t.alternate;
			if (t.childExpirationTime < r) t.childExpirationTime = r, null !== e && e.childExpirationTime < r && (e.childExpirationTime = r);
			else {
				if (!(null !== e && e.childExpirationTime < r)) break;
				e.childExpirationTime = r
			}
			t = t.return
		}
	}

	function ea(t, r) {
		Ji = t, Zi = Xi = null, null !== (t = t.dependencies) && null !== t.firstContext && (t.expirationTime >= r && (In = !0), t.firstContext = null)
	}

	function oa(t, r) {
		if (Zi !== t && !1 !== r && 0 !== r)
			if ("number" == typeof r && 1073741823 !== r || (Zi = t, r = 1073741823), r = {
					context: t,
					observedBits: r,
					next: null
				}, null === Xi) {
				if (null === Ji) throw Error(n(308));
				Xi = r, Ji.dependencies = {
					expirationTime: 0,
					firstContext: r,
					responders: null
				}
			} else Xi = Xi.next = r;
		return t._currentValue
	}
	var ia = !1;

	function aa(t) {
		t.updateQueue = {
			baseState: t.memoizedState,
			baseQueue: null,
			shared: {
				pending: null
			},
			effects: null
		}
	}

	function na(t, r) {
		t = t.updateQueue, r.updateQueue === t && (r.updateQueue = {
			baseState: t.baseState,
			baseQueue: t.baseQueue,
			shared: t.shared,
			effects: t.effects
		})
	}

	function la(t, r) {
		return (t = {
			expirationTime: t,
			suspenseConfig: r,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		}).next = t
	}

	function ca(t, r) {
		if (null !== (t = t.updateQueue)) {
			var e = (t = t.shared).pending;
			null === e ? r.next = r : (r.next = e.next, e.next = r), t.pending = r
		}
	}

	function da(t, r) {
		var e = t.alternate;
		null !== e && na(e, t), null === (e = (t = t.updateQueue).baseQueue) ? (t.baseQueue = r.next = r, r.next = r) : (r.next = e.next, e.next = r)
	}

	function ma(t, r, e, o) {
		var a = t.updateQueue;
		ia = !1;
		var n = a.baseQueue,
			l = a.shared.pending;
		if (null !== l) {
			if (null !== n) {
				var c = n.next;
				n.next = l.next, l.next = c
			}
			n = l, a.shared.pending = null, null !== (c = t.alternate) && (null !== (c = c.updateQueue) && (c.baseQueue = l))
		}
		if (null !== n) {
			c = n.next;
			var d = a.baseState,
				m = 0,
				p = null,
				u = null,
				g = null;
			if (null !== c)
				for (var s = c;;) {
					if ((l = s.expirationTime) < o) {
						var b = {
							expirationTime: s.expirationTime,
							suspenseConfig: s.suspenseConfig,
							tag: s.tag,
							payload: s.payload,
							callback: s.callback,
							next: null
						};
						null === g ? (u = g = b, p = d) : g = g.next = b, l > m && (m = l)
					} else {
						null !== g && (g = g.next = {
							expirationTime: 1073741823,
							suspenseConfig: s.suspenseConfig,
							tag: s.tag,
							payload: s.payload,
							callback: s.callback,
							next: null
						}), ac(l, s.suspenseConfig);
						t: {
							var w = t,
								f = s;
							switch (l = r, b = e, f.tag) {
								case 1:
									if ("function" == typeof(w = f.payload)) {
										d = w.call(b, d, l);
										break t
									}
									d = w;
									break t;
								case 3:
									w.effectTag = -4097 & w.effectTag | 64;
								case 0:
									if (null == (l = "function" == typeof(w = f.payload) ? w.call(b, d, l) : w)) break t;
									d = i({}, d, l);
									break t;
								case 2:
									ia = !0
							}
						}
						null !== s.callback && (t.effectTag |= 32, null === (l = a.effects) ? a.effects = [s] : l.push(s))
					}
					if (null === (s = s.next) || s === c) {
						if (null === (l = a.shared.pending)) break;
						s = n.next = l.next, l.next = c, a.baseQueue = n = l, a.shared.pending = null
					}
				}
			null === g ? p = d : g.next = u, a.baseState = p, a.baseQueue = g, nc(m), t.expirationTime = m, t.memoizedState = d
		}
	}

	function pa(t, r, e) {
		if (t = r.effects, r.effects = null, null !== t)
			for (r = 0; r < t.length; r++) {
				var o = t[r],
					i = o.callback;
				if (null !== i) {
					if (o.callback = null, o = i, i = e, "function" != typeof o) throw Error(n(191, o));
					o.call(i)
				}
			}
	}
	var ua = J.ReactCurrentBatchConfig,
		ga = (new o.Component).refs;

	function sa(t, r, e, o) {
		e = null == (e = e(o, r = t.memoizedState)) ? r : i({}, r, e), t.memoizedState = e, 0 === t.expirationTime && (t.updateQueue.baseState = e)
	}
	var ba = {
		isMounted: function(t) {
			return !!(t = t._reactInternalFiber) && $t(t) === t
		},
		enqueueSetState: function(t, r, e) {
			t = t._reactInternalFiber;
			var o = Kl(),
				i = ua.suspense;
			(i = la(o = Yl(o, t, i), i)).payload = r, null != e && (i.callback = e), ca(t, i), ql(t, o)
		},
		enqueueReplaceState: function(t, r, e) {
			t = t._reactInternalFiber;
			var o = Kl(),
				i = ua.suspense;
			(i = la(o = Yl(o, t, i), i)).tag = 1, i.payload = r, null != e && (i.callback = e), ca(t, i), ql(t, o)
		},
		enqueueForceUpdate: function(t, r) {
			t = t._reactInternalFiber;
			var e = Kl(),
				o = ua.suspense;
			(o = la(e = Yl(e, t, o), o)).tag = 2, null != r && (o.callback = r), ca(t, o), ql(t, e)
		}
	};

	function wa(t, r, e, o, i, a, n) {
		return "function" == typeof(t = t.stateNode).shouldComponentUpdate ? t.shouldComponentUpdate(o, a, n) : !r.prototype || !r.prototype.isPureReactComponent || (!Ho(e, o) || !Ho(i, a))
	}

	function fa(t, r, e) {
		var o = !1,
			i = mi,
			a = r.contextType;
		return "object" == typeof a && null !== a ? a = oa(a) : (i = bi(r) ? gi : pi.current, a = (o = null != (o = r.contextTypes)) ? si(t, i) : mi), r = new r(e, a), t.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null, r.updater = ba, t.stateNode = r, r._reactInternalFiber = t, o && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, t.__reactInternalMemoizedMaskedChildContext = a), r
	}

	function ha(t, r, e, o) {
		t = r.state, "function" == typeof r.componentWillReceiveProps && r.componentWillReceiveProps(e, o), "function" == typeof r.UNSAFE_componentWillReceiveProps && r.UNSAFE_componentWillReceiveProps(e, o), r.state !== t && ba.enqueueReplaceState(r, r.state, null)
	}

	function ja(t, r, e, o) {
		var i = t.stateNode;
		i.props = e, i.state = t.memoizedState, i.refs = ga, aa(t);
		var a = r.contextType;
		"object" == typeof a && null !== a ? i.context = oa(a) : (a = bi(r) ? gi : pi.current, i.context = si(t, a)), ma(t, e, i, o), i.state = t.memoizedState, "function" == typeof(a = r.getDerivedStateFromProps) && (sa(t, r, a, e), i.state = t.memoizedState), "function" == typeof r.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (r = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), r !== i.state && ba.enqueueReplaceState(i, i.state, null), ma(t, e, i, o), i.state = t.memoizedState), "function" == typeof i.componentDidMount && (t.effectTag |= 4)
	}
	var xa = Array.isArray;

	function ya(t, r, e) {
		if (null !== (t = e.ref) && "function" != typeof t && "object" != typeof t) {
			if (e._owner) {
				if (e = e._owner) {
					if (1 !== e.tag) throw Error(n(309));
					var o = e.stateNode
				}
				if (!o) throw Error(n(147, t));
				var i = "" + t;
				return null !== r && null !== r.ref && "function" == typeof r.ref && r.ref._stringRef === i ? r.ref : ((r = function(t) {
					var r = o.refs;
					r === ga && (r = o.refs = {}), null === t ? delete r[i] : r[i] = t
				})._stringRef = i, r)
			}
			if ("string" != typeof t) throw Error(n(284));
			if (!e._owner) throw Error(n(290, t))
		}
		return t
	}

	function Sa(t, r) {
		if ("textarea" !== t.type) throw Error(n(31, "[object Object]" === Object.prototype.toString.call(r) ? "object with keys {" + Object.keys(r).join(", ") + "}" : r, ""))
	}

	function va(t) {
		function r(r, e) {
			if (t) {
				var o = r.lastEffect;
				null !== o ? (o.nextEffect = e, r.lastEffect = e) : r.firstEffect = r.lastEffect = e, e.nextEffect = null, e.effectTag = 8
			}
		}

		function e(e, o) {
			if (!t) return null;
			for (; null !== o;) r(e, o), o = o.sibling;
			return null
		}

		function o(t, r) {
			for (t = new Map; null !== r;) null !== r.key ? t.set(r.key, r) : t.set(r.index, r), r = r.sibling;
			return t
		}

		function i(t, r) {
			return (t = Ec(t, r)).index = 0, t.sibling = null, t
		}

		function a(r, e, o) {
			return r.index = o, t ? null !== (o = r.alternate) ? (o = o.index) < e ? (r.effectTag = 2, e) : o : (r.effectTag = 2, e) : e
		}

		function l(r) {
			return t && null === r.alternate && (r.effectTag = 2), r
		}

		function c(t, r, e, o) {
			return null === r || 6 !== r.tag ? ((r = Tc(e, t.mode, o)).return = t, r) : ((r = i(r, e)).return = t, r)
		}

		function d(t, r, e, o) {
			return null !== r && r.elementType === e.type ? ((o = i(r, e.props)).ref = ya(t, r, e), o.return = t, o) : ((o = Cc(e.type, e.key, e.props, null, t.mode, o)).ref = ya(t, r, e), o.return = t, o)
		}

		function m(t, r, e, o) {
			return null === r || 4 !== r.tag || r.stateNode.containerInfo !== e.containerInfo || r.stateNode.implementation !== e.implementation ? ((r = Ic(e, t.mode, o)).return = t, r) : ((r = i(r, e.children || [])).return = t, r)
		}

		function p(t, r, e, o, a) {
			return null === r || 7 !== r.tag ? ((r = Ac(e, t.mode, o, a)).return = t, r) : ((r = i(r, e)).return = t, r)
		}

		function u(t, r, e) {
			if ("string" == typeof r || "number" == typeof r) return (r = Tc("" + r, t.mode, e)).return = t, r;
			if ("object" == typeof r && null !== r) {
				switch (r.$$typeof) {
					case tt:
						return (e = Cc(r.type, r.key, r.props, null, t.mode, e)).ref = ya(t, null, r), e.return = t, e;
					case rt:
						return (r = Ic(r, t.mode, e)).return = t, r
				}
				if (xa(r) || bt(r)) return (r = Ac(r, t.mode, e, null)).return = t, r;
				Sa(t, r)
			}
			return null
		}

		function g(t, r, e, o) {
			var i = null !== r ? r.key : null;
			if ("string" == typeof e || "number" == typeof e) return null !== i ? null : c(t, r, "" + e, o);
			if ("object" == typeof e && null !== e) {
				switch (e.$$typeof) {
					case tt:
						return e.key === i ? e.type === et ? p(t, r, e.props.children, o, i) : d(t, r, e, o) : null;
					case rt:
						return e.key === i ? m(t, r, e, o) : null
				}
				if (xa(e) || bt(e)) return null !== i ? null : p(t, r, e, o, null);
				Sa(t, e)
			}
			return null
		}

		function s(t, r, e, o, i) {
			if ("string" == typeof o || "number" == typeof o) return c(r, t = t.get(e) || null, "" + o, i);
			if ("object" == typeof o && null !== o) {
				switch (o.$$typeof) {
					case tt:
						return t = t.get(null === o.key ? e : o.key) || null, o.type === et ? p(r, t, o.props.children, i, o.key) : d(r, t, o, i);
					case rt:
						return m(r, t = t.get(null === o.key ? e : o.key) || null, o, i)
				}
				if (xa(o) || bt(o)) return p(r, t = t.get(e) || null, o, i, null);
				Sa(r, o)
			}
			return null
		}

		function b(i, n, l, c) {
			for (var d = null, m = null, p = n, b = n = 0, w = null; null !== p && b < l.length; b++) {
				p.index > b ? (w = p, p = null) : w = p.sibling;
				var f = g(i, p, l[b], c);
				if (null === f) {
					null === p && (p = w);
					break
				}
				t && p && null === f.alternate && r(i, p), n = a(f, n, b), null === m ? d = f : m.sibling = f, m = f, p = w
			}
			if (b === l.length) return e(i, p), d;
			if (null === p) {
				for (; b < l.length; b++) null !== (p = u(i, l[b], c)) && (n = a(p, n, b), null === m ? d = p : m.sibling = p, m = p);
				return d
			}
			for (p = o(i, p); b < l.length; b++) null !== (w = s(p, i, b, l[b], c)) && (t && null !== w.alternate && p.delete(null === w.key ? b : w.key), n = a(w, n, b), null === m ? d = w : m.sibling = w, m = w);
			return t && p.forEach((function(t) {
				return r(i, t)
			})), d
		}

		function w(i, l, c, d) {
			var m = bt(c);
			if ("function" != typeof m) throw Error(n(150));
			if (null == (c = m.call(c))) throw Error(n(151));
			for (var p = m = null, b = l, w = l = 0, f = null, h = c.next(); null !== b && !h.done; w++, h = c.next()) {
				b.index > w ? (f = b, b = null) : f = b.sibling;
				var j = g(i, b, h.value, d);
				if (null === j) {
					null === b && (b = f);
					break
				}
				t && b && null === j.alternate && r(i, b), l = a(j, l, w), null === p ? m = j : p.sibling = j, p = j, b = f
			}
			if (h.done) return e(i, b), m;
			if (null === b) {
				for (; !h.done; w++, h = c.next()) null !== (h = u(i, h.value, d)) && (l = a(h, l, w), null === p ? m = h : p.sibling = h, p = h);
				return m
			}
			for (b = o(i, b); !h.done; w++, h = c.next()) null !== (h = s(b, i, w, h.value, d)) && (t && null !== h.alternate && b.delete(null === h.key ? w : h.key), l = a(h, l, w), null === p ? m = h : p.sibling = h, p = h);
			return t && b.forEach((function(t) {
				return r(i, t)
			})), m
		}
		return function(t, o, a, c) {
			var d = "object" == typeof a && null !== a && a.type === et && null === a.key;
			d && (a = a.props.children);
			var m = "object" == typeof a && null !== a;
			if (m) switch (a.$$typeof) {
				case tt:
					t: {
						for (m = a.key, d = o; null !== d;) {
							if (d.key === m) {
								switch (d.tag) {
									case 7:
										if (a.type === et) {
											e(t, d.sibling), (o = i(d, a.props.children)).return = t, t = o;
											break t
										}
										break;
									default:
										if (d.elementType === a.type) {
											e(t, d.sibling), (o = i(d, a.props)).ref = ya(t, d, a), o.return = t, t = o;
											break t
										}
								}
								e(t, d);
								break
							}
							r(t, d), d = d.sibling
						}
						a.type === et ? ((o = Ac(a.props.children, t.mode, c, a.key)).return = t, t = o) : ((c = Cc(a.type, a.key, a.props, null, t.mode, c)).ref = ya(t, o, a), c.return = t, t = c)
					}
					return l(t);
				case rt:
					t: {
						for (d = a.key; null !== o;) {
							if (o.key === d) {
								if (4 === o.tag && o.stateNode.containerInfo === a.containerInfo && o.stateNode.implementation === a.implementation) {
									e(t, o.sibling), (o = i(o, a.children || [])).return = t, t = o;
									break t
								}
								e(t, o);
								break
							}
							r(t, o), o = o.sibling
						}(o = Ic(a, t.mode, c)).return = t,
						t = o
					}
					return l(t)
			}
			if ("string" == typeof a || "number" == typeof a) return a = "" + a, null !== o && 6 === o.tag ? (e(t, o.sibling), (o = i(o, a)).return = t, t = o) : (e(t, o), (o = Tc(a, t.mode, c)).return = t, t = o), l(t);
			if (xa(a)) return b(t, o, a, c);
			if (bt(a)) return w(t, o, a, c);
			if (m && Sa(t, a), void 0 === a && !d) switch (t.tag) {
				case 1:
				case 0:
					throw t = t.type, Error(n(152, t.displayName || t.name || "Component"))
			}
			return e(t, o)
		}
	}
	var Oa = va(!0),
		ka = va(!1),
		Ea = {},
		Ca = {
			current: Ea
		},
		Aa = {
			current: Ea
		},
		Ta = {
			current: Ea
		};

	function Ia(t) {
		if (t === Ea) throw Error(n(174));
		return t
	}

	function Na(t, r) {
		switch (di(Ta, r), di(Aa, t), di(Ca, Ea), t = r.nodeType) {
			case 9:
			case 11:
				r = (r = r.documentElement) ? r.namespaceURI : Pt(null, "");
				break;
			default:
				r = Pt(r = (t = 8 === t ? r.parentNode : r).namespaceURI || null, t = t.tagName)
		}
		ci(Ca), di(Ca, r)
	}

	function _a() {
		ci(Ca), ci(Aa), ci(Ta)
	}

	function Ra(t) {
		Ia(Ta.current);
		var r = Ia(Ca.current),
			e = Pt(r, t.type);
		r !== e && (di(Aa, t), di(Ca, e))
	}

	function Ma(t) {
		Aa.current === t && (ci(Ca), ci(Aa))
	}
	var La = {
		current: 0
	};

	function Da(t) {
		for (var r = t; null !== r;) {
			if (13 === r.tag) {
				var e = r.memoizedState;
				if (null !== e && (null === (e = e.dehydrated) || "$?" === e.data || "$!" === e.data)) return r
			} else if (19 === r.tag && void 0 !== r.memoizedProps.revealOrder) {
				if (0 != (64 & r.effectTag)) return r
			} else if (null !== r.child) {
				r.child.return = r, r = r.child;
				continue
			}
			if (r === t) break;
			for (; null === r.sibling;) {
				if (null === r.return || r.return === t) return null;
				r = r.return
			}
			r.sibling.return = r.return, r = r.sibling
		}
		return null
	}

	function Pa(t, r) {
		return {
			responder: t,
			props: r
		}
	}
	var za = J.ReactCurrentDispatcher,
		Ha = J.ReactCurrentBatchConfig,
		Ga = 0,
		Ba = null,
		Ua = null,
		Wa = null,
		Fa = !1;

	function Va() {
		throw Error(n(321))
	}

	function Ka(t, r) {
		if (null === r) return !1;
		for (var e = 0; e < r.length && e < t.length; e++)
			if (!Po(t[e], r[e])) return !1;
		return !0
	}

	function Ya(t, r, e, o, i, a) {
		if (Ga = a, Ba = r, r.memoizedState = null, r.updateQueue = null, r.expirationTime = 0, za.current = null === t || null === t.memoizedState ? fn : hn, t = e(o, i), r.expirationTime === Ga) {
			a = 0;
			do {
				if (r.expirationTime = 0, !(25 > a)) throw Error(n(301));
				a += 1, Wa = Ua = null, r.updateQueue = null, za.current = jn, t = e(o, i)
			} while (r.expirationTime === Ga)
		}
		if (za.current = wn, r = null !== Ua && null !== Ua.next, Ga = 0, Wa = Ua = Ba = null, Fa = !1, r) throw Error(n(300));
		return t
	}

	function qa() {
		var t = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return null === Wa ? Ba.memoizedState = Wa = t : Wa = Wa.next = t, Wa
	}

	function Qa() {
		if (null === Ua) {
			var t = Ba.alternate;
			t = null !== t ? t.memoizedState : null
		} else t = Ua.next;
		var r = null === Wa ? Ba.memoizedState : Wa.next;
		if (null !== r) Wa = r, Ua = t;
		else {
			if (null === t) throw Error(n(310));
			t = {
				memoizedState: (Ua = t).memoizedState,
				baseState: Ua.baseState,
				baseQueue: Ua.baseQueue,
				queue: Ua.queue,
				next: null
			}, null === Wa ? Ba.memoizedState = Wa = t : Wa = Wa.next = t
		}
		return Wa
	}

	function Ja(t, r) {
		return "function" == typeof r ? r(t) : r
	}

	function Xa(t) {
		var r = Qa(),
			e = r.queue;
		if (null === e) throw Error(n(311));
		e.lastRenderedReducer = t;
		var o = Ua,
			i = o.baseQueue,
			a = e.pending;
		if (null !== a) {
			if (null !== i) {
				var l = i.next;
				i.next = a.next, a.next = l
			}
			o.baseQueue = i = a, e.pending = null
		}
		if (null !== i) {
			i = i.next, o = o.baseState;
			var c = l = a = null,
				d = i;
			do {
				var m = d.expirationTime;
				if (m < Ga) {
					var p = {
						expirationTime: d.expirationTime,
						suspenseConfig: d.suspenseConfig,
						action: d.action,
						eagerReducer: d.eagerReducer,
						eagerState: d.eagerState,
						next: null
					};
					null === c ? (l = c = p, a = o) : c = c.next = p, m > Ba.expirationTime && (Ba.expirationTime = m, nc(m))
				} else null !== c && (c = c.next = {
					expirationTime: 1073741823,
					suspenseConfig: d.suspenseConfig,
					action: d.action,
					eagerReducer: d.eagerReducer,
					eagerState: d.eagerState,
					next: null
				}), ac(m, d.suspenseConfig), o = d.eagerReducer === t ? d.eagerState : t(o, d.action);
				d = d.next
			} while (null !== d && d !== i);
			null === c ? a = o : c.next = l, Po(o, r.memoizedState) || (In = !0), r.memoizedState = o, r.baseState = a, r.baseQueue = c, e.lastRenderedState = o
		}
		return [r.memoizedState, e.dispatch]
	}

	function Za(t) {
		var r = Qa(),
			e = r.queue;
		if (null === e) throw Error(n(311));
		e.lastRenderedReducer = t;
		var o = e.dispatch,
			i = e.pending,
			a = r.memoizedState;
		if (null !== i) {
			e.pending = null;
			var l = i = i.next;
			do {
				a = t(a, l.action), l = l.next
			} while (l !== i);
			Po(a, r.memoizedState) || (In = !0), r.memoizedState = a, null === r.baseQueue && (r.baseState = a), e.lastRenderedState = a
		}
		return [a, o]
	}

	function $a(t) {
		var r = qa();
		return "function" == typeof t && (t = t()), r.memoizedState = r.baseState = t, t = (t = r.queue = {
			pending: null,
			dispatch: null,
			lastRenderedReducer: Ja,
			lastRenderedState: t
		}).dispatch = bn.bind(null, Ba, t), [r.memoizedState, t]
	}

	function tn(t, r, e, o) {
		return t = {
			tag: t,
			create: r,
			destroy: e,
			deps: o,
			next: null
		}, null === (r = Ba.updateQueue) ? (r = {
			lastEffect: null
		}, Ba.updateQueue = r, r.lastEffect = t.next = t) : null === (e = r.lastEffect) ? r.lastEffect = t.next = t : (o = e.next, e.next = t, t.next = o, r.lastEffect = t), t
	}

	function rn() {
		return Qa().memoizedState
	}

	function en(t, r, e, o) {
		var i = qa();
		Ba.effectTag |= t, i.memoizedState = tn(1 | r, e, void 0, void 0 === o ? null : o)
	}

	function on(t, r, e, o) {
		var i = Qa();
		o = void 0 === o ? null : o;
		var a = void 0;
		if (null !== Ua) {
			var n = Ua.memoizedState;
			if (a = n.destroy, null !== o && Ka(o, n.deps)) return void tn(r, e, a, o)
		}
		Ba.effectTag |= t, i.memoizedState = tn(1 | r, e, a, o)
	}

	function an(t, r) {
		return en(516, 4, t, r)
	}

	function nn(t, r) {
		return on(516, 4, t, r)
	}

	function ln(t, r) {
		return on(4, 2, t, r)
	}

	function cn(t, r) {
		return "function" == typeof r ? (t = t(), r(t), function() {
			r(null)
		}) : null != r ? (t = t(), r.current = t, function() {
			r.current = null
		}) : void 0
	}

	function dn(t, r, e) {
		return e = null != e ? e.concat([t]) : null, on(4, 2, cn.bind(null, r, t), e)
	}

	function mn() {}

	function pn(t, r) {
		return qa().memoizedState = [t, void 0 === r ? null : r], t
	}

	function un(t, r) {
		var e = Qa();
		r = void 0 === r ? null : r;
		var o = e.memoizedState;
		return null !== o && null !== r && Ka(r, o[1]) ? o[0] : (e.memoizedState = [t, r], t)
	}

	function gn(t, r) {
		var e = Qa();
		r = void 0 === r ? null : r;
		var o = e.memoizedState;
		return null !== o && null !== r && Ka(r, o[1]) ? o[0] : (t = t(), e.memoizedState = [t, r], t)
	}

	function sn(t, r, e) {
		var o = Gi();
		Ui(98 > o ? 98 : o, (function() {
			t(!0)
		})), Ui(97 < o ? 97 : o, (function() {
			var o = Ha.suspense;
			Ha.suspense = void 0 === r ? null : r;
			try {
				t(!1), e()
			} finally {
				Ha.suspense = o
			}
		}))
	}

	function bn(t, r, e) {
		var o = Kl(),
			i = ua.suspense;
		i = {
			expirationTime: o = Yl(o, t, i),
			suspenseConfig: i,
			action: e,
			eagerReducer: null,
			eagerState: null,
			next: null
		};
		var a = r.pending;
		if (null === a ? i.next = i : (i.next = a.next, a.next = i), r.pending = i, a = t.alternate, t === Ba || null !== a && a === Ba) Fa = !0, i.expirationTime = Ga, Ba.expirationTime = Ga;
		else {
			if (0 === t.expirationTime && (null === a || 0 === a.expirationTime) && null !== (a = r.lastRenderedReducer)) try {
				var n = r.lastRenderedState,
					l = a(n, e);
				if (i.eagerReducer = a, i.eagerState = l, Po(l, n)) return
			} catch (t) {}
			ql(t, o)
		}
	}
	var wn = {
			readContext: oa,
			useCallback: Va,
			useContext: Va,
			useEffect: Va,
			useImperativeHandle: Va,
			useLayoutEffect: Va,
			useMemo: Va,
			useReducer: Va,
			useRef: Va,
			useState: Va,
			useDebugValue: Va,
			useResponder: Va,
			useDeferredValue: Va,
			useTransition: Va
		},
		fn = {
			readContext: oa,
			useCallback: pn,
			useContext: oa,
			useEffect: an,
			useImperativeHandle: function(t, r, e) {
				return e = null != e ? e.concat([t]) : null, en(4, 2, cn.bind(null, r, t), e)
			},
			useLayoutEffect: function(t, r) {
				return en(4, 2, t, r)
			},
			useMemo: function(t, r) {
				var e = qa();
				return r = void 0 === r ? null : r, t = t(), e.memoizedState = [t, r], t
			},
			useReducer: function(t, r, e) {
				var o = qa();
				return r = void 0 !== e ? e(r) : r, o.memoizedState = o.baseState = r, t = (t = o.queue = {
					pending: null,
					dispatch: null,
					lastRenderedReducer: t,
					lastRenderedState: r
				}).dispatch = bn.bind(null, Ba, t), [o.memoizedState, t]
			},
			useRef: function(t) {
				return t = {
					current: t
				}, qa().memoizedState = t
			},
			useState: $a,
			useDebugValue: mn,
			useResponder: Pa,
			useDeferredValue: function(t, r) {
				var e = $a(t),
					o = e[0],
					i = e[1];
				return an((function() {
					var e = Ha.suspense;
					Ha.suspense = void 0 === r ? null : r;
					try {
						i(t)
					} finally {
						Ha.suspense = e
					}
				}), [t, r]), o
			},
			useTransition: function(t) {
				var r = $a(!1),
					e = r[0];
				return r = r[1], [pn(sn.bind(null, r, t), [r, t]), e]
			}
		},
		hn = {
			readContext: oa,
			useCallback: un,
			useContext: oa,
			useEffect: nn,
			useImperativeHandle: dn,
			useLayoutEffect: ln,
			useMemo: gn,
			useReducer: Xa,
			useRef: rn,
			useState: function() {
				return Xa(Ja)
			},
			useDebugValue: mn,
			useResponder: Pa,
			useDeferredValue: function(t, r) {
				var e = Xa(Ja),
					o = e[0],
					i = e[1];
				return nn((function() {
					var e = Ha.suspense;
					Ha.suspense = void 0 === r ? null : r;
					try {
						i(t)
					} finally {
						Ha.suspense = e
					}
				}), [t, r]), o
			},
			useTransition: function(t) {
				var r = Xa(Ja),
					e = r[0];
				return r = r[1], [un(sn.bind(null, r, t), [r, t]), e]
			}
		},
		jn = {
			readContext: oa,
			useCallback: un,
			useContext: oa,
			useEffect: nn,
			useImperativeHandle: dn,
			useLayoutEffect: ln,
			useMemo: gn,
			useReducer: Za,
			useRef: rn,
			useState: function() {
				return Za(Ja)
			},
			useDebugValue: mn,
			useResponder: Pa,
			useDeferredValue: function(t, r) {
				var e = Za(Ja),
					o = e[0],
					i = e[1];
				return nn((function() {
					var e = Ha.suspense;
					Ha.suspense = void 0 === r ? null : r;
					try {
						i(t)
					} finally {
						Ha.suspense = e
					}
				}), [t, r]), o
			},
			useTransition: function(t) {
				var r = Za(Ja),
					e = r[0];
				return r = r[1], [un(sn.bind(null, r, t), [r, t]), e]
			}
		},
		xn = null,
		yn = null,
		Sn = !1;

	function vn(t, r) {
		var e = Oc(5, null, null, 0);
		e.elementType = "DELETED", e.type = "DELETED", e.stateNode = r, e.return = t, e.effectTag = 8, null !== t.lastEffect ? (t.lastEffect.nextEffect = e, t.lastEffect = e) : t.firstEffect = t.lastEffect = e
	}

	function On(t, r) {
		switch (t.tag) {
			case 5:
				var e = t.type;
				return null !== (r = 1 !== r.nodeType || e.toLowerCase() !== r.nodeName.toLowerCase() ? null : r) && (t.stateNode = r, !0);
			case 6:
				return null !== (r = "" === t.pendingProps || 3 !== r.nodeType ? null : r) && (t.stateNode = r, !0);
			case 13:
			default:
				return !1
		}
	}

	function kn(t) {
		if (Sn) {
			var r = yn;
			if (r) {
				var e = r;
				if (!On(t, r)) {
					if (!(r = xe(e.nextSibling)) || !On(t, r)) return t.effectTag = -1025 & t.effectTag | 2, Sn = !1, void(xn = t);
					vn(xn, e)
				}
				xn = t, yn = xe(r.firstChild)
			} else t.effectTag = -1025 & t.effectTag | 2, Sn = !1, xn = t
		}
	}

	function En(t) {
		for (t = t.return; null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;) t = t.return;
		xn = t
	}

	function Cn(t) {
		if (t !== xn) return !1;
		if (!Sn) return En(t), Sn = !0, !1;
		var r = t.type;
		if (5 !== t.tag || "head" !== r && "body" !== r && !fe(r, t.memoizedProps))
			for (r = yn; r;) vn(t, r), r = xe(r.nextSibling);
		if (En(t), 13 === t.tag) {
			if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null)) throw Error(n(317));
			t: {
				for (t = t.nextSibling, r = 0; t;) {
					if (8 === t.nodeType) {
						var e = t.data;
						if ("/$" === e) {
							if (0 === r) {
								yn = xe(t.nextSibling);
								break t
							}
							r--
						} else "$" !== e && "$!" !== e && "$?" !== e || r++
					}
					t = t.nextSibling
				}
				yn = null
			}
		} else yn = xn ? xe(t.stateNode.nextSibling) : null;
		return !0
	}

	function An() {
		yn = xn = null, Sn = !1
	}
	var Tn = J.ReactCurrentOwner,
		In = !1;

	function Nn(t, r, e, o) {
		r.child = null === t ? ka(r, null, e, o) : Oa(r, t.child, e, o)
	}

	function _n(t, r, e, o, i) {
		e = e.render;
		var a = r.ref;
		return ea(r, i), o = Ya(t, r, e, o, a, i), null === t || In ? (r.effectTag |= 1, Nn(t, r, o, i), r.child) : (r.updateQueue = t.updateQueue, r.effectTag &= -517, t.expirationTime <= i && (t.expirationTime = 0), qn(t, r, i))
	}

	function Rn(t, r, e, o, i, a) {
		if (null === t) {
			var n = e.type;
			return "function" != typeof n || kc(n) || void 0 !== n.defaultProps || null !== e.compare || void 0 !== e.defaultProps ? ((t = Cc(e.type, null, o, null, r.mode, a)).ref = r.ref, t.return = r, r.child = t) : (r.tag = 15, r.type = n, Mn(t, r, n, o, i, a))
		}
		return n = t.child, i < a && (i = n.memoizedProps, (e = null !== (e = e.compare) ? e : Ho)(i, o) && t.ref === r.ref) ? qn(t, r, a) : (r.effectTag |= 1, (t = Ec(n, o)).ref = r.ref, t.return = r, r.child = t)
	}

	function Mn(t, r, e, o, i, a) {
		return null !== t && Ho(t.memoizedProps, o) && t.ref === r.ref && (In = !1, i < a) ? (r.expirationTime = t.expirationTime, qn(t, r, a)) : Dn(t, r, e, o, a)
	}

	function Ln(t, r) {
		var e = r.ref;
		(null === t && null !== e || null !== t && t.ref !== e) && (r.effectTag |= 128)
	}

	function Dn(t, r, e, o, i) {
		var a = bi(e) ? gi : pi.current;
		return a = si(r, a), ea(r, i), e = Ya(t, r, e, o, a, i), null === t || In ? (r.effectTag |= 1, Nn(t, r, e, i), r.child) : (r.updateQueue = t.updateQueue, r.effectTag &= -517, t.expirationTime <= i && (t.expirationTime = 0), qn(t, r, i))
	}

	function Pn(t, r, e, o, i) {
		if (bi(e)) {
			var a = !0;
			ji(r)
		} else a = !1;
		if (ea(r, i), null === r.stateNode) null !== t && (t.alternate = null, r.alternate = null, r.effectTag |= 2), fa(r, e, o), ja(r, e, o, i), o = !0;
		else if (null === t) {
			var n = r.stateNode,
				l = r.memoizedProps;
			n.props = l;
			var c = n.context,
				d = e.contextType;
			"object" == typeof d && null !== d ? d = oa(d) : d = si(r, d = bi(e) ? gi : pi.current);
			var m = e.getDerivedStateFromProps,
				p = "function" == typeof m || "function" == typeof n.getSnapshotBeforeUpdate;
			p || "function" != typeof n.UNSAFE_componentWillReceiveProps && "function" != typeof n.componentWillReceiveProps || (l !== o || c !== d) && ha(r, n, o, d), ia = !1;
			var u = r.memoizedState;
			n.state = u, ma(r, o, n, i), c = r.memoizedState, l !== o || u !== c || ui.current || ia ? ("function" == typeof m && (sa(r, e, m, o), c = r.memoizedState), (l = ia || wa(r, e, l, o, u, c, d)) ? (p || "function" != typeof n.UNSAFE_componentWillMount && "function" != typeof n.componentWillMount || ("function" == typeof n.componentWillMount && n.componentWillMount(), "function" == typeof n.UNSAFE_componentWillMount && n.UNSAFE_componentWillMount()), "function" == typeof n.componentDidMount && (r.effectTag |= 4)) : ("function" == typeof n.componentDidMount && (r.effectTag |= 4), r.memoizedProps = o, r.memoizedState = c), n.props = o, n.state = c, n.context = d, o = l) : ("function" == typeof n.componentDidMount && (r.effectTag |= 4), o = !1)
		} else n = r.stateNode, na(t, r), l = r.memoizedProps, n.props = r.type === r.elementType ? l : qi(r.type, l), c = n.context, "object" == typeof(d = e.contextType) && null !== d ? d = oa(d) : d = si(r, d = bi(e) ? gi : pi.current), (p = "function" == typeof(m = e.getDerivedStateFromProps) || "function" == typeof n.getSnapshotBeforeUpdate) || "function" != typeof n.UNSAFE_componentWillReceiveProps && "function" != typeof n.componentWillReceiveProps || (l !== o || c !== d) && ha(r, n, o, d), ia = !1, c = r.memoizedState, n.state = c, ma(r, o, n, i), u = r.memoizedState, l !== o || c !== u || ui.current || ia ? ("function" == typeof m && (sa(r, e, m, o), u = r.memoizedState), (m = ia || wa(r, e, l, o, c, u, d)) ? (p || "function" != typeof n.UNSAFE_componentWillUpdate && "function" != typeof n.componentWillUpdate || ("function" == typeof n.componentWillUpdate && n.componentWillUpdate(o, u, d), "function" == typeof n.UNSAFE_componentWillUpdate && n.UNSAFE_componentWillUpdate(o, u, d)), "function" == typeof n.componentDidUpdate && (r.effectTag |= 4), "function" == typeof n.getSnapshotBeforeUpdate && (r.effectTag |= 256)) : ("function" != typeof n.componentDidUpdate || l === t.memoizedProps && c === t.memoizedState || (r.effectTag |= 4), "function" != typeof n.getSnapshotBeforeUpdate || l === t.memoizedProps && c === t.memoizedState || (r.effectTag |= 256), r.memoizedProps = o, r.memoizedState = u), n.props = o, n.state = u, n.context = d, o = m) : ("function" != typeof n.componentDidUpdate || l === t.memoizedProps && c === t.memoizedState || (r.effectTag |= 4), "function" != typeof n.getSnapshotBeforeUpdate || l === t.memoizedProps && c === t.memoizedState || (r.effectTag |= 256), o = !1);
		return zn(t, r, e, o, a, i)
	}

	function zn(t, r, e, o, i, a) {
		Ln(t, r);
		var n = 0 != (64 & r.effectTag);
		if (!o && !n) return i && xi(r, e, !1), qn(t, r, a);
		o = r.stateNode, Tn.current = r;
		var l = n && "function" != typeof e.getDerivedStateFromError ? null : o.render();
		return r.effectTag |= 1, null !== t && n ? (r.child = Oa(r, t.child, null, a), r.child = Oa(r, null, l, a)) : Nn(t, r, l, a), r.memoizedState = o.state, i && xi(r, e, !0), r.child
	}

	function Hn(t) {
		var r = t.stateNode;
		r.pendingContext ? fi(0, r.pendingContext, r.pendingContext !== r.context) : r.context && fi(0, r.context, !1), Na(t, r.containerInfo)
	}
	var Gn, Bn, Un, Wn = {
		dehydrated: null,
		retryTime: 0
	};

	function Fn(t, r, e) {
		var o, i = r.mode,
			a = r.pendingProps,
			n = La.current,
			l = !1;
		if ((o = 0 != (64 & r.effectTag)) || (o = 0 != (2 & n) && (null === t || null !== t.memoizedState)), o ? (l = !0, r.effectTag &= -65) : null !== t && null === t.memoizedState || void 0 === a.fallback || !0 === a.unstable_avoidThisFallback || (n |= 1), di(La, 1 & n), null === t) {
			if (void 0 !== a.fallback && kn(r), l) {
				if (l = a.fallback, (a = Ac(null, i, 0, null)).return = r, 0 == (2 & r.mode))
					for (t = null !== r.memoizedState ? r.child.child : r.child, a.child = t; null !== t;) t.return = a, t = t.sibling;
				return (e = Ac(l, i, e, null)).return = r, a.sibling = e, r.memoizedState = Wn, r.child = a, e
			}
			return i = a.children, r.memoizedState = null, r.child = ka(r, null, i, e)
		}
		if (null !== t.memoizedState) {
			if (i = (t = t.child).sibling, l) {
				if (a = a.fallback, (e = Ec(t, t.pendingProps)).return = r, 0 == (2 & r.mode) && (l = null !== r.memoizedState ? r.child.child : r.child) !== t.child)
					for (e.child = l; null !== l;) l.return = e, l = l.sibling;
				return (i = Ec(i, a)).return = r, e.sibling = i, e.childExpirationTime = 0, r.memoizedState = Wn, r.child = e, i
			}
			return e = Oa(r, t.child, a.children, e), r.memoizedState = null, r.child = e
		}
		if (t = t.child, l) {
			if (l = a.fallback, (a = Ac(null, i, 0, null)).return = r, a.child = t, null !== t && (t.return = a), 0 == (2 & r.mode))
				for (t = null !== r.memoizedState ? r.child.child : r.child, a.child = t; null !== t;) t.return = a, t = t.sibling;
			return (e = Ac(l, i, e, null)).return = r, a.sibling = e, e.effectTag |= 2, a.childExpirationTime = 0, r.memoizedState = Wn, r.child = a, e
		}
		return r.memoizedState = null, r.child = Oa(r, t, a.children, e)
	}

	function Vn(t, r) {
		t.expirationTime < r && (t.expirationTime = r);
		var e = t.alternate;
		null !== e && e.expirationTime < r && (e.expirationTime = r), ra(t.return, r)
	}

	function Kn(t, r, e, o, i, a) {
		var n = t.memoizedState;
		null === n ? t.memoizedState = {
			isBackwards: r,
			rendering: null,
			renderingStartTime: 0,
			last: o,
			tail: e,
			tailExpiration: 0,
			tailMode: i,
			lastEffect: a
		} : (n.isBackwards = r, n.rendering = null, n.renderingStartTime = 0, n.last = o, n.tail = e, n.tailExpiration = 0, n.tailMode = i, n.lastEffect = a)
	}

	function Yn(t, r, e) {
		var o = r.pendingProps,
			i = o.revealOrder,
			a = o.tail;
		if (Nn(t, r, o.children, e), 0 != (2 & (o = La.current))) o = 1 & o | 2, r.effectTag |= 64;
		else {
			if (null !== t && 0 != (64 & t.effectTag)) t: for (t = r.child; null !== t;) {
				if (13 === t.tag) null !== t.memoizedState && Vn(t, e);
				else if (19 === t.tag) Vn(t, e);
				else if (null !== t.child) {
					t.child.return = t, t = t.child;
					continue
				}
				if (t === r) break t;
				for (; null === t.sibling;) {
					if (null === t.return || t.return === r) break t;
					t = t.return
				}
				t.sibling.return = t.return, t = t.sibling
			}
			o &= 1
		}
		if (di(La, o), 0 == (2 & r.mode)) r.memoizedState = null;
		else switch (i) {
			case "forwards":
				for (e = r.child, i = null; null !== e;) null !== (t = e.alternate) && null === Da(t) && (i = e), e = e.sibling;
				null === (e = i) ? (i = r.child, r.child = null) : (i = e.sibling, e.sibling = null), Kn(r, !1, i, e, a, r.lastEffect);
				break;
			case "backwards":
				for (e = null, i = r.child, r.child = null; null !== i;) {
					if (null !== (t = i.alternate) && null === Da(t)) {
						r.child = i;
						break
					}
					t = i.sibling, i.sibling = e, e = i, i = t
				}
				Kn(r, !0, e, null, a, r.lastEffect);
				break;
			case "together":
				Kn(r, !1, null, null, void 0, r.lastEffect);
				break;
			default:
				r.memoizedState = null
		}
		return r.child
	}

	function qn(t, r, e) {
		null !== t && (r.dependencies = t.dependencies);
		var o = r.expirationTime;
		if (0 !== o && nc(o), r.childExpirationTime < e) return null;
		if (null !== t && r.child !== t.child) throw Error(n(153));
		if (null !== r.child) {
			for (e = Ec(t = r.child, t.pendingProps), r.child = e, e.return = r; null !== t.sibling;) t = t.sibling, (e = e.sibling = Ec(t, t.pendingProps)).return = r;
			e.sibling = null
		}
		return r.child
	}

	function Qn(t, r) {
		switch (t.tailMode) {
			case "hidden":
				r = t.tail;
				for (var e = null; null !== r;) null !== r.alternate && (e = r), r = r.sibling;
				null === e ? t.tail = null : e.sibling = null;
				break;
			case "collapsed":
				e = t.tail;
				for (var o = null; null !== e;) null !== e.alternate && (o = e), e = e.sibling;
				null === o ? r || null === t.tail ? t.tail = null : t.tail.sibling = null : o.sibling = null
		}
	}

	function Jn(t, r, e) {
		var o = r.pendingProps;
		switch (r.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return null;
			case 1:
				return bi(r.type) && wi(), null;
			case 3:
				return _a(), ci(ui), ci(pi), (e = r.stateNode).pendingContext && (e.context = e.pendingContext, e.pendingContext = null), null !== t && null !== t.child || !Cn(r) || (r.effectTag |= 4), null;
			case 5:
				Ma(r), e = Ia(Ta.current);
				var a = r.type;
				if (null !== t && null != r.stateNode) Bn(t, r, a, o, e), t.ref !== r.ref && (r.effectTag |= 128);
				else {
					if (!o) {
						if (null === r.stateNode) throw Error(n(166));
						return null
					}
					if (t = Ia(Ca.current), Cn(r)) {
						o = r.stateNode, a = r.type;
						var l = r.memoizedProps;
						switch (o[ve] = r, o[Oe] = l, a) {
							case "iframe":
							case "object":
							case "embed":
								Yr("load", o);
								break;
							case "video":
							case "audio":
								for (t = 0; t < Jt.length; t++) Yr(Jt[t], o);
								break;
							case "source":
								Yr("error", o);
								break;
							case "img":
							case "image":
							case "link":
								Yr("error", o), Yr("load", o);
								break;
							case "form":
								Yr("reset", o), Yr("submit", o);
								break;
							case "details":
								Yr("toggle", o);
								break;
							case "input":
								vt(o, l), Yr("invalid", o), le(e, "onChange");
								break;
							case "select":
								o._wrapperState = {
									wasMultiple: !!l.multiple
								}, Yr("invalid", o), le(e, "onChange");
								break;
							case "textarea":
								Nt(o, l), Yr("invalid", o), le(e, "onChange")
						}
						for (var c in ie(a, l), t = null, l)
							if (l.hasOwnProperty(c)) {
								var d = l[c];
								"children" === c ? "string" == typeof d ? o.textContent !== d && (t = ["children", d]) : "number" == typeof d && o.textContent !== "" + d && (t = ["children", "" + d]) : O.hasOwnProperty(c) && null != d && le(e, c)
							} switch (a) {
							case "input":
								xt(o), Et(o, l, !0);
								break;
							case "textarea":
								xt(o), Rt(o);
								break;
							case "select":
							case "option":
								break;
							default:
								"function" == typeof l.onClick && (o.onclick = ce)
						}
						e = t, r.updateQueue = e, null !== e && (r.effectTag |= 4)
					} else {
						switch (c = 9 === e.nodeType ? e : e.ownerDocument, t === ne && (t = Dt(a)), t === ne ? "script" === a ? ((t = c.createElement("div")).innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : "string" == typeof o.is ? t = c.createElement(a, {
								is: o.is
							}) : (t = c.createElement(a), "select" === a && (c = t, o.multiple ? c.multiple = !0 : o.size && (c.size = o.size))) : t = c.createElementNS(t, a), t[ve] = r, t[Oe] = o, Gn(t, r), r.stateNode = t, c = ae(a, o), a) {
							case "iframe":
							case "object":
							case "embed":
								Yr("load", t), d = o;
								break;
							case "video":
							case "audio":
								for (d = 0; d < Jt.length; d++) Yr(Jt[d], t);
								d = o;
								break;
							case "source":
								Yr("error", t), d = o;
								break;
							case "img":
							case "image":
							case "link":
								Yr("error", t), Yr("load", t), d = o;
								break;
							case "form":
								Yr("reset", t), Yr("submit", t), d = o;
								break;
							case "details":
								Yr("toggle", t), d = o;
								break;
							case "input":
								vt(t, o), d = St(t, o), Yr("invalid", t), le(e, "onChange");
								break;
							case "option":
								d = At(t, o);
								break;
							case "select":
								t._wrapperState = {
									wasMultiple: !!o.multiple
								}, d = i({}, o, {
									value: void 0
								}), Yr("invalid", t), le(e, "onChange");
								break;
							case "textarea":
								Nt(t, o), d = It(t, o), Yr("invalid", t), le(e, "onChange");
								break;
							default:
								d = o
						}
						ie(a, d);
						var m = d;
						for (l in m)
							if (m.hasOwnProperty(l)) {
								var p = m[l];
								"style" === l ? ee(t, p) : "dangerouslySetInnerHTML" === l ? null != (p = p ? p.__html : void 0) && Ht(t, p) : "children" === l ? "string" == typeof p ? ("textarea" !== a || "" !== p) && Gt(t, p) : "number" == typeof p && Gt(t, "" + p) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (O.hasOwnProperty(l) ? null != p && le(e, l) : null != p && X(t, l, p, c))
							} switch (a) {
							case "input":
								xt(t), Et(t, o, !1);
								break;
							case "textarea":
								xt(t), Rt(t);
								break;
							case "option":
								null != o.value && t.setAttribute("value", "" + ht(o.value));
								break;
							case "select":
								t.multiple = !!o.multiple, null != (e = o.value) ? Tt(t, !!o.multiple, e, !1) : null != o.defaultValue && Tt(t, !!o.multiple, o.defaultValue, !0);
								break;
							default:
								"function" == typeof d.onClick && (t.onclick = ce)
						}
						we(a, o) && (r.effectTag |= 4)
					}
					null !== r.ref && (r.effectTag |= 128)
				}
				return null;
			case 6:
				if (t && null != r.stateNode) Un(0, r, t.memoizedProps, o);
				else {
					if ("string" != typeof o && null === r.stateNode) throw Error(n(166));
					e = Ia(Ta.current), Ia(Ca.current), Cn(r) ? (e = r.stateNode, o = r.memoizedProps, e[ve] = r, e.nodeValue !== o && (r.effectTag |= 4)) : ((e = (9 === e.nodeType ? e : e.ownerDocument).createTextNode(o))[ve] = r, r.stateNode = e)
				}
				return null;
			case 13:
				return ci(La), o = r.memoizedState, 0 != (64 & r.effectTag) ? (r.expirationTime = e, r) : (e = null !== o, o = !1, null === t ? void 0 !== r.memoizedProps.fallback && Cn(r) : (o = null !== (a = t.memoizedState), e || null === a || null !== (a = t.child.sibling) && (null !== (l = r.firstEffect) ? (r.firstEffect = a, a.nextEffect = l) : (r.firstEffect = r.lastEffect = a, a.nextEffect = null), a.effectTag = 8)), e && !o && 0 != (2 & r.mode) && (null === t && !0 !== r.memoizedProps.unstable_avoidThisFallback || 0 != (1 & La.current) ? Cl === xl && (Cl = yl) : (Cl !== xl && Cl !== yl || (Cl = Sl), 0 !== _l && null !== Ol && (Rc(Ol, El), Mc(Ol, _l)))), (e || o) && (r.effectTag |= 4), null);
			case 4:
				return _a(), null;
			case 10:
				return ta(r), null;
			case 17:
				return bi(r.type) && wi(), null;
			case 19:
				if (ci(La), null === (o = r.memoizedState)) return null;
				if (a = 0 != (64 & r.effectTag), null === (l = o.rendering)) {
					if (a) Qn(o, !1);
					else if (Cl !== xl || null !== t && 0 != (64 & t.effectTag))
						for (l = r.child; null !== l;) {
							if (null !== (t = Da(l))) {
								for (r.effectTag |= 64, Qn(o, !1), null !== (a = t.updateQueue) && (r.updateQueue = a, r.effectTag |= 4), null === o.lastEffect && (r.firstEffect = null), r.lastEffect = o.lastEffect, o = r.child; null !== o;) l = e, (a = o).effectTag &= 2, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, null === (t = a.alternate) ? (a.childExpirationTime = 0, a.expirationTime = l, a.child = null, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null) : (a.childExpirationTime = t.childExpirationTime, a.expirationTime = t.expirationTime, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, l = t.dependencies, a.dependencies = null === l ? null : {
									expirationTime: l.expirationTime,
									firstContext: l.firstContext,
									responders: l.responders
								}), o = o.sibling;
								return di(La, 1 & La.current | 2), r.child
							}
							l = l.sibling
						}
				} else {
					if (!a)
						if (null !== (t = Da(l))) {
							if (r.effectTag |= 64, a = !0, null !== (e = t.updateQueue) && (r.updateQueue = e, r.effectTag |= 4), Qn(o, !0), null === o.tail && "hidden" === o.tailMode && !l.alternate) return null !== (r = r.lastEffect = o.lastEffect) && (r.nextEffect = null), null
						} else 2 * Hi() - o.renderingStartTime > o.tailExpiration && 1 < e && (r.effectTag |= 64, a = !0, Qn(o, !1), r.expirationTime = r.childExpirationTime = e - 1);
					o.isBackwards ? (l.sibling = r.child, r.child = l) : (null !== (e = o.last) ? e.sibling = l : r.child = l, o.last = l)
				}
				return null !== o.tail ? (0 === o.tailExpiration && (o.tailExpiration = Hi() + 500), e = o.tail, o.rendering = e, o.tail = e.sibling, o.lastEffect = r.lastEffect, o.renderingStartTime = Hi(), e.sibling = null, r = La.current, di(La, a ? 1 & r | 2 : 1 & r), e) : null
		}
		throw Error(n(156, r.tag))
	}

	function Xn(t) {
		switch (t.tag) {
			case 1:
				bi(t.type) && wi();
				var r = t.effectTag;
				return 4096 & r ? (t.effectTag = -4097 & r | 64, t) : null;
			case 3:
				if (_a(), ci(ui), ci(pi), 0 != (64 & (r = t.effectTag))) throw Error(n(285));
				return t.effectTag = -4097 & r | 64, t;
			case 5:
				return Ma(t), null;
			case 13:
				return ci(La), 4096 & (r = t.effectTag) ? (t.effectTag = -4097 & r | 64, t) : null;
			case 19:
				return ci(La), null;
			case 4:
				return _a(), null;
			case 10:
				return ta(t), null;
			default:
				return null
		}
	}

	function Zn(t, r) {
		return {
			value: t,
			source: r,
			stack: ft(r)
		}
	}
	Gn = function(t, r) {
		for (var e = r.child; null !== e;) {
			if (5 === e.tag || 6 === e.tag) t.appendChild(e.stateNode);
			else if (4 !== e.tag && null !== e.child) {
				e.child.return = e, e = e.child;
				continue
			}
			if (e === r) break;
			for (; null === e.sibling;) {
				if (null === e.return || e.return === r) return;
				e = e.return
			}
			e.sibling.return = e.return, e = e.sibling
		}
	}, Bn = function(t, r, e, o, a) {
		var n = t.memoizedProps;
		if (n !== o) {
			var l, c, d = r.stateNode;
			switch (Ia(Ca.current), t = null, e) {
				case "input":
					n = St(d, n), o = St(d, o), t = [];
					break;
				case "option":
					n = At(d, n), o = At(d, o), t = [];
					break;
				case "select":
					n = i({}, n, {
						value: void 0
					}), o = i({}, o, {
						value: void 0
					}), t = [];
					break;
				case "textarea":
					n = It(d, n), o = It(d, o), t = [];
					break;
				default:
					"function" != typeof n.onClick && "function" == typeof o.onClick && (d.onclick = ce)
			}
			for (l in ie(e, o), e = null, n)
				if (!o.hasOwnProperty(l) && n.hasOwnProperty(l) && null != n[l])
					if ("style" === l)
						for (c in d = n[l]) d.hasOwnProperty(c) && (e || (e = {}), e[c] = "");
					else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (O.hasOwnProperty(l) ? t || (t = []) : (t = t || []).push(l, null));
			for (l in o) {
				var m = o[l];
				if (d = null != n ? n[l] : void 0, o.hasOwnProperty(l) && m !== d && (null != m || null != d))
					if ("style" === l)
						if (d) {
							for (c in d) !d.hasOwnProperty(c) || m && m.hasOwnProperty(c) || (e || (e = {}), e[c] = "");
							for (c in m) m.hasOwnProperty(c) && d[c] !== m[c] && (e || (e = {}), e[c] = m[c])
						} else e || (t || (t = []), t.push(l, e)), e = m;
				else "dangerouslySetInnerHTML" === l ? (m = m ? m.__html : void 0, d = d ? d.__html : void 0, null != m && d !== m && (t = t || []).push(l, m)) : "children" === l ? d === m || "string" != typeof m && "number" != typeof m || (t = t || []).push(l, "" + m) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (O.hasOwnProperty(l) ? (null != m && le(a, l), t || d === m || (t = [])) : (t = t || []).push(l, m))
			}
			e && (t = t || []).push("style", e), a = t, (r.updateQueue = a) && (r.effectTag |= 4)
		}
	}, Un = function(t, r, e, o) {
		e !== o && (r.effectTag |= 4)
	};
	var $n = "function" == typeof WeakSet ? WeakSet : Set;

	function tl(t, r) {
		var e = r.source,
			o = r.stack;
		null === o && null !== e && (o = ft(e)), null !== e && wt(e.type), r = r.value, null !== t && 1 === t.tag && wt(t.type);
		try {
			console.error(r)
		} catch (t) {
			setTimeout((function() {
				throw t
			}))
		}
	}

	function rl(t) {
		var r = t.ref;
		if (null !== r)
			if ("function" == typeof r) try {
				r(null)
			} catch (r) {
				hc(t, r)
			} else r.current = null
	}

	function el(t, r) {
		switch (r.tag) {
			case 0:
			case 11:
			case 15:
			case 22:
				return;
			case 1:
				if (256 & r.effectTag && null !== t) {
					var e = t.memoizedProps,
						o = t.memoizedState;
					r = (t = r.stateNode).getSnapshotBeforeUpdate(r.elementType === r.type ? e : qi(r.type, e), o), t.__reactInternalSnapshotBeforeUpdate = r
				}
				return;
			case 3:
			case 5:
			case 6:
			case 4:
			case 17:
				return
		}
		throw Error(n(163))
	}

	function ol(t, r) {
		if (null !== (r = null !== (r = r.updateQueue) ? r.lastEffect : null)) {
			var e = r = r.next;
			do {
				if ((e.tag & t) === t) {
					var o = e.destroy;
					e.destroy = void 0, void 0 !== o && o()
				}
				e = e.next
			} while (e !== r)
		}
	}

	function il(t, r) {
		if (null !== (r = null !== (r = r.updateQueue) ? r.lastEffect : null)) {
			var e = r = r.next;
			do {
				if ((e.tag & t) === t) {
					var o = e.create;
					e.destroy = o()
				}
				e = e.next
			} while (e !== r)
		}
	}

	function al(t, r, e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
			case 22:
				return void il(3, e);
			case 1:
				if (t = e.stateNode, 4 & e.effectTag)
					if (null === r) t.componentDidMount();
					else {
						var o = e.elementType === e.type ? r.memoizedProps : qi(e.type, r.memoizedProps);
						t.componentDidUpdate(o, r.memoizedState, t.__reactInternalSnapshotBeforeUpdate)
					} return void(null !== (r = e.updateQueue) && pa(e, r, t));
			case 3:
				if (null !== (r = e.updateQueue)) {
					if (t = null, null !== e.child) switch (e.child.tag) {
						case 5:
							t = e.child.stateNode;
							break;
						case 1:
							t = e.child.stateNode
					}
					pa(e, r, t)
				}
				return;
			case 5:
				return t = e.stateNode, void(null === r && 4 & e.effectTag && we(e.type, e.memoizedProps) && t.focus());
			case 6:
			case 4:
			case 12:
				return;
			case 13:
				return void(null === e.memoizedState && (e = e.alternate, null !== e && (e = e.memoizedState, null !== e && (e = e.dehydrated, null !== e && Dr(e)))));
			case 19:
			case 17:
			case 20:
			case 21:
				return
		}
		throw Error(n(163))
	}

	function nl(t, r, e) {
		switch ("function" == typeof Sc && Sc(r), r.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
			case 22:
				if (null !== (t = r.updateQueue) && null !== (t = t.lastEffect)) {
					var o = t.next;
					Ui(97 < e ? 97 : e, (function() {
						var t = o;
						do {
							var e = t.destroy;
							if (void 0 !== e) {
								var i = r;
								try {
									e()
								} catch (t) {
									hc(i, t)
								}
							}
							t = t.next
						} while (t !== o)
					}))
				}
				break;
			case 1:
				rl(r), "function" == typeof(e = r.stateNode).componentWillUnmount && function(t, r) {
					try {
						r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount()
					} catch (r) {
						hc(t, r)
					}
				}(r, e);
				break;
			case 5:
				rl(r);
				break;
			case 4:
				ml(t, r, e)
		}
	}

	function ll(t) {
		var r = t.alternate;
		t.return = null, t.child = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.alternate = null, t.firstEffect = null, t.lastEffect = null, t.pendingProps = null, t.memoizedProps = null, t.stateNode = null, null !== r && ll(r)
	}

	function cl(t) {
		return 5 === t.tag || 3 === t.tag || 4 === t.tag
	}

	function dl(t) {
		t: {
			for (var r = t.return; null !== r;) {
				if (cl(r)) {
					var e = r;
					break t
				}
				r = r.return
			}
			throw Error(n(160))
		}
		switch (r = e.stateNode, e.tag) {
			case 5:
				var o = !1;
				break;
			case 3:
			case 4:
				r = r.containerInfo, o = !0;
				break;
			default:
				throw Error(n(161))
		}
		16 & e.effectTag && (Gt(r, ""), e.effectTag &= -17);t: r: for (e = t;;) {
			for (; null === e.sibling;) {
				if (null === e.return || cl(e.return)) {
					e = null;
					break t
				}
				e = e.return
			}
			for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
				if (2 & e.effectTag) continue r;
				if (null === e.child || 4 === e.tag) continue r;
				e.child.return = e, e = e.child
			}
			if (!(2 & e.effectTag)) {
				e = e.stateNode;
				break t
			}
		}
		o ? function t(r, e, o) {
			var i = r.tag,
				a = 5 === i || 6 === i;
			if (a) r = a ? r.stateNode : r.stateNode.instance, e ? 8 === o.nodeType ? o.parentNode.insertBefore(r, e) : o.insertBefore(r, e) : (8 === o.nodeType ? (e = o.parentNode).insertBefore(r, o) : (e = o).appendChild(r), null !== (o = o._reactRootContainer) && void 0 !== o || null !== e.onclick || (e.onclick = ce));
			else if (4 !== i && null !== (r = r.child))
				for (t(r, e, o), r = r.sibling; null !== r;) t(r, e, o), r = r.sibling
		}(t, e, r) : function t(r, e, o) {
			var i = r.tag,
				a = 5 === i || 6 === i;
			if (a) r = a ? r.stateNode : r.stateNode.instance, e ? o.insertBefore(r, e) : o.appendChild(r);
			else if (4 !== i && null !== (r = r.child))
				for (t(r, e, o), r = r.sibling; null !== r;) t(r, e, o), r = r.sibling
		}(t, e, r)
	}

	function ml(t, r, e) {
		for (var o, i, a = r, l = !1;;) {
			if (!l) {
				l = a.return;
				t: for (;;) {
					if (null === l) throw Error(n(160));
					switch (o = l.stateNode, l.tag) {
						case 5:
							i = !1;
							break t;
						case 3:
						case 4:
							o = o.containerInfo, i = !0;
							break t
					}
					l = l.return
				}
				l = !0
			}
			if (5 === a.tag || 6 === a.tag) {
				t: for (var c = t, d = a, m = e, p = d;;)
					if (nl(c, p, m), null !== p.child && 4 !== p.tag) p.child.return = p, p = p.child;
					else {
						if (p === d) break t;
						for (; null === p.sibling;) {
							if (null === p.return || p.return === d) break t;
							p = p.return
						}
						p.sibling.return = p.return, p = p.sibling
					}i ? (c = o, d = a.stateNode, 8 === c.nodeType ? c.parentNode.removeChild(d) : c.removeChild(d)) : o.removeChild(a.stateNode)
			}
			else if (4 === a.tag) {
				if (null !== a.child) {
					o = a.stateNode.containerInfo, i = !0, a.child.return = a, a = a.child;
					continue
				}
			} else if (nl(t, a, e), null !== a.child) {
				a.child.return = a, a = a.child;
				continue
			}
			if (a === r) break;
			for (; null === a.sibling;) {
				if (null === a.return || a.return === r) return;
				4 === (a = a.return).tag && (l = !1)
			}
			a.sibling.return = a.return, a = a.sibling
		}
	}

	function pl(t, r) {
		switch (r.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
			case 22:
				return void ol(3, r);
			case 1:
				return;
			case 5:
				var e = r.stateNode;
				if (null != e) {
					var o = r.memoizedProps,
						i = null !== t ? t.memoizedProps : o;
					t = r.type;
					var a = r.updateQueue;
					if (r.updateQueue = null, null !== a) {
						for (e[Oe] = o, "input" === t && "radio" === o.type && null != o.name && Ot(e, o), ae(t, i), r = ae(t, o), i = 0; i < a.length; i += 2) {
							var l = a[i],
								c = a[i + 1];
							"style" === l ? ee(e, c) : "dangerouslySetInnerHTML" === l ? Ht(e, c) : "children" === l ? Gt(e, c) : X(e, l, c, r)
						}
						switch (t) {
							case "input":
								kt(e, o);
								break;
							case "textarea":
								_t(e, o);
								break;
							case "select":
								r = e._wrapperState.wasMultiple, e._wrapperState.wasMultiple = !!o.multiple, null != (t = o.value) ? Tt(e, !!o.multiple, t, !1) : r !== !!o.multiple && (null != o.defaultValue ? Tt(e, !!o.multiple, o.defaultValue, !0) : Tt(e, !!o.multiple, o.multiple ? [] : "", !1))
						}
					}
				}
				return;
			case 6:
				if (null === r.stateNode) throw Error(n(162));
				return void(r.stateNode.nodeValue = r.memoizedProps);
			case 3:
				return void((r = r.stateNode).hydrate && (r.hydrate = !1, Dr(r.containerInfo)));
			case 12:
				return;
			case 13:
				if (e = r, null === r.memoizedState ? o = !1 : (o = !0, e = r.child, Ml = Hi()), null !== e) t: for (t = e;;) {
					if (5 === t.tag) a = t.stateNode, o ? "function" == typeof(a = a.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (a = t.stateNode, i = null != (i = t.memoizedProps.style) && i.hasOwnProperty("display") ? i.display : null, a.style.display = re("display", i));
					else if (6 === t.tag) t.stateNode.nodeValue = o ? "" : t.memoizedProps;
					else {
						if (13 === t.tag && null !== t.memoizedState && null === t.memoizedState.dehydrated) {
							(a = t.child.sibling).return = t, t = a;
							continue
						}
						if (null !== t.child) {
							t.child.return = t, t = t.child;
							continue
						}
					}
					if (t === e) break;
					for (; null === t.sibling;) {
						if (null === t.return || t.return === e) break t;
						t = t.return
					}
					t.sibling.return = t.return, t = t.sibling
				}
				return void ul(r);
			case 19:
				return void ul(r);
			case 17:
				return
		}
		throw Error(n(163))
	}

	function ul(t) {
		var r = t.updateQueue;
		if (null !== r) {
			t.updateQueue = null;
			var e = t.stateNode;
			null === e && (e = t.stateNode = new $n), r.forEach((function(r) {
				var o = xc.bind(null, t, r);
				e.has(r) || (e.add(r), r.then(o, o))
			}))
		}
	}
	var gl = "function" == typeof WeakMap ? WeakMap : Map;

	function sl(t, r, e) {
		(e = la(e, null)).tag = 3, e.payload = {
			element: null
		};
		var o = r.value;
		return e.callback = function() {
			Dl || (Dl = !0, Pl = o), tl(t, r)
		}, e
	}

	function bl(t, r, e) {
		(e = la(e, null)).tag = 3;
		var o = t.type.getDerivedStateFromError;
		if ("function" == typeof o) {
			var i = r.value;
			e.payload = function() {
				return tl(t, r), o(i)
			}
		}
		var a = t.stateNode;
		return null !== a && "function" == typeof a.componentDidCatch && (e.callback = function() {
			"function" != typeof o && (null === zl ? zl = new Set([this]) : zl.add(this), tl(t, r));
			var e = r.stack;
			this.componentDidCatch(r.value, {
				componentStack: null !== e ? e : ""
			})
		}), e
	}
	var wl, fl = Math.ceil,
		hl = J.ReactCurrentDispatcher,
		jl = J.ReactCurrentOwner,
		xl = 0,
		yl = 3,
		Sl = 4,
		vl = 0,
		Ol = null,
		kl = null,
		El = 0,
		Cl = xl,
		Al = null,
		Tl = 1073741823,
		Il = 1073741823,
		Nl = null,
		_l = 0,
		Rl = !1,
		Ml = 0,
		Ll = null,
		Dl = !1,
		Pl = null,
		zl = null,
		Hl = !1,
		Gl = null,
		Bl = 90,
		Ul = null,
		Wl = 0,
		Fl = null,
		Vl = 0;

	function Kl() {
		return 0 != (48 & vl) ? 1073741821 - (Hi() / 10 | 0) : 0 !== Vl ? Vl : Vl = 1073741821 - (Hi() / 10 | 0)
	}

	function Yl(t, r, e) {
		if (0 == (2 & (r = r.mode))) return 1073741823;
		var o = Gi();
		if (0 == (4 & r)) return 99 === o ? 1073741823 : 1073741822;
		if (0 != (16 & vl)) return El;
		if (null !== e) t = Yi(t, 0 | e.timeoutMs || 5e3, 250);
		else switch (o) {
			case 99:
				t = 1073741823;
				break;
			case 98:
				t = Yi(t, 150, 100);
				break;
			case 97:
			case 96:
				t = Yi(t, 5e3, 250);
				break;
			case 95:
				t = 2;
				break;
			default:
				throw Error(n(326))
		}
		return null !== Ol && t === El && --t, t
	}

	function ql(t, r) {
		if (50 < Wl) throw Wl = 0, Fl = null, Error(n(185));
		if (null !== (t = Ql(t, r))) {
			var e = Gi();
			1073741823 === r ? 0 != (8 & vl) && 0 == (48 & vl) ? $l(t) : (Xl(t), 0 === vl && Vi()) : Xl(t), 0 == (4 & vl) || 98 !== e && 99 !== e || (null === Ul ? Ul = new Map([
				[t, r]
			]) : (void 0 === (e = Ul.get(t)) || e > r) && Ul.set(t, r))
		}
	}

	function Ql(t, r) {
		t.expirationTime < r && (t.expirationTime = r);
		var e = t.alternate;
		null !== e && e.expirationTime < r && (e.expirationTime = r);
		var o = t.return,
			i = null;
		if (null === o && 3 === t.tag) i = t.stateNode;
		else
			for (; null !== o;) {
				if (e = o.alternate, o.childExpirationTime < r && (o.childExpirationTime = r), null !== e && e.childExpirationTime < r && (e.childExpirationTime = r), null === o.return && 3 === o.tag) {
					i = o.stateNode;
					break
				}
				o = o.return
			}
		return null !== i && (Ol === i && (nc(r), Cl === Sl && Rc(i, El)), Mc(i, r)), i
	}

	function Jl(t) {
		var r = t.lastExpiredTime;
		if (0 !== r) return r;
		if (!_c(t, r = t.firstPendingTime)) return r;
		var e = t.lastPingedTime;
		return 2 >= (t = e > (t = t.nextKnownPendingLevel) ? e : t) && r !== t ? 0 : t
	}

	function Xl(t) {
		if (0 !== t.lastExpiredTime) t.callbackExpirationTime = 1073741823, t.callbackPriority = 99, t.callbackNode = Fi($l.bind(null, t));
		else {
			var r = Jl(t),
				e = t.callbackNode;
			if (0 === r) null !== e && (t.callbackNode = null, t.callbackExpirationTime = 0, t.callbackPriority = 90);
			else {
				var o = Kl();
				if (1073741823 === r ? o = 99 : 1 === r || 2 === r ? o = 95 : o = 0 >= (o = 10 * (1073741821 - r) - 10 * (1073741821 - o)) ? 99 : 250 >= o ? 98 : 5250 >= o ? 97 : 95, null !== e) {
					var i = t.callbackPriority;
					if (t.callbackExpirationTime === r && i >= o) return;
					e !== _i && vi(e)
				}
				t.callbackExpirationTime = r, t.callbackPriority = o, r = 1073741823 === r ? Fi($l.bind(null, t)) : Wi(o, Zl.bind(null, t), {
					timeout: 10 * (1073741821 - r) - Hi()
				}), t.callbackNode = r
			}
		}
	}

	function Zl(t, r) {
		if (Vl = 0, r) return Lc(t, r = Kl()), Xl(t), null;
		var e = Jl(t);
		if (0 !== e) {
			if (r = t.callbackNode, 0 != (48 & vl)) throw Error(n(327));
			if (bc(), t === Ol && e === El || ec(t, e), null !== kl) {
				var o = vl;
				vl |= 16;
				for (var i = ic();;) try {
					cc();
					break
				} catch (r) {
					oc(t, r)
				}
				if ($i(), vl = o, hl.current = i, 1 === Cl) throw r = Al, ec(t, e), Rc(t, e), Xl(t), r;
				if (null === kl) switch (i = t.finishedWork = t.current.alternate, t.finishedExpirationTime = e, o = Cl, Ol = null, o) {
					case xl:
					case 1:
						throw Error(n(345));
					case 2:
						Lc(t, 2 < e ? 2 : e);
						break;
					case yl:
						if (Rc(t, e), e === (o = t.lastSuspendedTime) && (t.nextKnownPendingLevel = pc(i)), 1073741823 === Tl && 10 < (i = Ml + 500 - Hi())) {
							if (Rl) {
								var a = t.lastPingedTime;
								if (0 === a || a >= e) {
									t.lastPingedTime = e, ec(t, e);
									break
								}
							}
							if (0 !== (a = Jl(t)) && a !== e) break;
							if (0 !== o && o !== e) {
								t.lastPingedTime = o;
								break
							}
							t.timeoutHandle = he(uc.bind(null, t), i);
							break
						}
						uc(t);
						break;
					case Sl:
						if (Rc(t, e), e === (o = t.lastSuspendedTime) && (t.nextKnownPendingLevel = pc(i)), Rl && (0 === (i = t.lastPingedTime) || i >= e)) {
							t.lastPingedTime = e, ec(t, e);
							break
						}
						if (0 !== (i = Jl(t)) && i !== e) break;
						if (0 !== o && o !== e) {
							t.lastPingedTime = o;
							break
						}
						if (1073741823 !== Il ? o = 10 * (1073741821 - Il) - Hi() : 1073741823 === Tl ? o = 0 : (o = 10 * (1073741821 - Tl) - 5e3, 0 > (o = (i = Hi()) - o) && (o = 0), (e = 10 * (1073741821 - e) - i) < (o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * fl(o / 1960)) - o) && (o = e)), 10 < o) {
							t.timeoutHandle = he(uc.bind(null, t), o);
							break
						}
						uc(t);
						break;
					case 5:
						if (1073741823 !== Tl && null !== Nl) {
							a = Tl;
							var l = Nl;
							if (0 >= (o = 0 | l.busyMinDurationMs) ? o = 0 : (i = 0 | l.busyDelayMs, o = (a = Hi() - (10 * (1073741821 - a) - (0 | l.timeoutMs || 5e3))) <= i ? 0 : i + o - a), 10 < o) {
								Rc(t, e), t.timeoutHandle = he(uc.bind(null, t), o);
								break
							}
						}
						uc(t);
						break;
					default:
						throw Error(n(329))
				}
				if (Xl(t), t.callbackNode === r) return Zl.bind(null, t)
			}
		}
		return null
	}

	function $l(t) {
		var r = t.lastExpiredTime;
		if (r = 0 !== r ? r : 1073741823, 0 != (48 & vl)) throw Error(n(327));
		if (bc(), t === Ol && r === El || ec(t, r), null !== kl) {
			var e = vl;
			vl |= 16;
			for (var o = ic();;) try {
				lc();
				break
			} catch (r) {
				oc(t, r)
			}
			if ($i(), vl = e, hl.current = o, 1 === Cl) throw e = Al, ec(t, r), Rc(t, r), Xl(t), e;
			if (null !== kl) throw Error(n(261));
			t.finishedWork = t.current.alternate, t.finishedExpirationTime = r, Ol = null, uc(t), Xl(t)
		}
		return null
	}

	function tc(t, r) {
		var e = vl;
		vl |= 1;
		try {
			return t(r)
		} finally {
			0 === (vl = e) && Vi()
		}
	}

	function rc(t, r) {
		var e = vl;
		vl &= -2, vl |= 8;
		try {
			return t(r)
		} finally {
			0 === (vl = e) && Vi()
		}
	}

	function ec(t, r) {
		t.finishedWork = null, t.finishedExpirationTime = 0;
		var e = t.timeoutHandle;
		if (-1 !== e && (t.timeoutHandle = -1, je(e)), null !== kl)
			for (e = kl.return; null !== e;) {
				var o = e;
				switch (o.tag) {
					case 1:
						null != (o = o.type.childContextTypes) && wi();
						break;
					case 3:
						_a(), ci(ui), ci(pi);
						break;
					case 5:
						Ma(o);
						break;
					case 4:
						_a();
						break;
					case 13:
					case 19:
						ci(La);
						break;
					case 10:
						ta(o)
				}
				e = e.return
			}
		Ol = t, kl = Ec(t.current, null), El = r, Cl = xl, Al = null, Il = Tl = 1073741823, Nl = null, _l = 0, Rl = !1
	}

	function oc(t, r) {
		for (;;) {
			try {
				if ($i(), za.current = wn, Fa)
					for (var e = Ba.memoizedState; null !== e;) {
						var o = e.queue;
						null !== o && (o.pending = null), e = e.next
					}
				if (Ga = 0, Wa = Ua = Ba = null, Fa = !1, null === kl || null === kl.return) return Cl = 1, Al = r, kl = null;
				t: {
					var i = t,
						a = kl.return,
						n = kl,
						l = r;
					if (r = El, n.effectTag |= 2048, n.firstEffect = n.lastEffect = null, null !== l && "object" == typeof l && "function" == typeof l.then) {
						var c = l;
						if (0 == (2 & n.mode)) {
							var d = n.alternate;
							d ? (n.updateQueue = d.updateQueue, n.memoizedState = d.memoizedState, n.expirationTime = d.expirationTime) : (n.updateQueue = null, n.memoizedState = null)
						}
						var m = 0 != (1 & La.current),
							p = a;
						do {
							var u;
							if (u = 13 === p.tag) {
								var g = p.memoizedState;
								if (null !== g) u = null !== g.dehydrated;
								else {
									var s = p.memoizedProps;
									u = void 0 !== s.fallback && (!0 !== s.unstable_avoidThisFallback || !m)
								}
							}
							if (u) {
								var b = p.updateQueue;
								if (null === b) {
									var w = new Set;
									w.add(c), p.updateQueue = w
								} else b.add(c);
								if (0 == (2 & p.mode)) {
									if (p.effectTag |= 64, n.effectTag &= -2981, 1 === n.tag)
										if (null === n.alternate) n.tag = 17;
										else {
											var f = la(1073741823, null);
											f.tag = 2, ca(n, f)
										} n.expirationTime = 1073741823;
									break t
								}
								l = void 0, n = r;
								var h = i.pingCache;
								if (null === h ? (h = i.pingCache = new gl, l = new Set, h.set(c, l)) : void 0 === (l = h.get(c)) && (l = new Set, h.set(c, l)), !l.has(n)) {
									l.add(n);
									var j = jc.bind(null, i, c, n);
									c.then(j, j)
								}
								p.effectTag |= 4096, p.expirationTime = r;
								break t
							}
							p = p.return
						} while (null !== p);
						l = Error((wt(n.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + ft(n))
					}
					5 !== Cl && (Cl = 2),
					l = Zn(l, n),
					p = a;do {
						switch (p.tag) {
							case 3:
								c = l, p.effectTag |= 4096, p.expirationTime = r, da(p, sl(p, c, r));
								break t;
							case 1:
								c = l;
								var x = p.type,
									y = p.stateNode;
								if (0 == (64 & p.effectTag) && ("function" == typeof x.getDerivedStateFromError || null !== y && "function" == typeof y.componentDidCatch && (null === zl || !zl.has(y)))) {
									p.effectTag |= 4096, p.expirationTime = r, da(p, bl(p, c, r));
									break t
								}
						}
						p = p.return
					} while (null !== p)
				}
				kl = mc(kl)
			} catch (t) {
				r = t;
				continue
			}
			break
		}
	}

	function ic() {
		var t = hl.current;
		return hl.current = wn, null === t ? wn : t
	}

	function ac(t, r) {
		t < Tl && 2 < t && (Tl = t), null !== r && t < Il && 2 < t && (Il = t, Nl = r)
	}

	function nc(t) {
		t > _l && (_l = t)
	}

	function lc() {
		for (; null !== kl;) kl = dc(kl)
	}

	function cc() {
		for (; null !== kl && !Ri();) kl = dc(kl)
	}

	function dc(t) {
		var r = wl(t.alternate, t, El);
		return t.memoizedProps = t.pendingProps, null === r && (r = mc(t)), jl.current = null, r
	}

	function mc(t) {
		kl = t;
		do {
			var r = kl.alternate;
			if (t = kl.return, 0 == (2048 & kl.effectTag)) {
				if (r = Jn(r, kl, El), 1 === El || 1 !== kl.childExpirationTime) {
					for (var e = 0, o = kl.child; null !== o;) {
						var i = o.expirationTime,
							a = o.childExpirationTime;
						i > e && (e = i), a > e && (e = a), o = o.sibling
					}
					kl.childExpirationTime = e
				}
				if (null !== r) return r;
				null !== t && 0 == (2048 & t.effectTag) && (null === t.firstEffect && (t.firstEffect = kl.firstEffect), null !== kl.lastEffect && (null !== t.lastEffect && (t.lastEffect.nextEffect = kl.firstEffect), t.lastEffect = kl.lastEffect), 1 < kl.effectTag && (null !== t.lastEffect ? t.lastEffect.nextEffect = kl : t.firstEffect = kl, t.lastEffect = kl))
			} else {
				if (null !== (r = Xn(kl))) return r.effectTag &= 2047, r;
				null !== t && (t.firstEffect = t.lastEffect = null, t.effectTag |= 2048)
			}
			if (null !== (r = kl.sibling)) return r;
			kl = t
		} while (null !== kl);
		return Cl === xl && (Cl = 5), null
	}

	function pc(t) {
		var r = t.expirationTime;
		return r > (t = t.childExpirationTime) ? r : t
	}

	function uc(t) {
		var r = Gi();
		return Ui(99, gc.bind(null, t, r)), null
	}

	function gc(t, r) {
		do {
			bc()
		} while (null !== Gl);
		if (0 != (48 & vl)) throw Error(n(327));
		var e = t.finishedWork,
			o = t.finishedExpirationTime;
		if (null === e) return null;
		if (t.finishedWork = null, t.finishedExpirationTime = 0, e === t.current) throw Error(n(177));
		t.callbackNode = null, t.callbackExpirationTime = 0, t.callbackPriority = 90, t.nextKnownPendingLevel = 0;
		var i = pc(e);
		if (t.firstPendingTime = i, o <= t.lastSuspendedTime ? t.firstSuspendedTime = t.lastSuspendedTime = t.nextKnownPendingLevel = 0 : o <= t.firstSuspendedTime && (t.firstSuspendedTime = o - 1), o <= t.lastPingedTime && (t.lastPingedTime = 0), o <= t.lastExpiredTime && (t.lastExpiredTime = 0), t === Ol && (kl = Ol = null, El = 0), 1 < e.effectTag ? null !== e.lastEffect ? (e.lastEffect.nextEffect = e, i = e.firstEffect) : i = e : i = e.firstEffect, null !== i) {
			var a = vl;
			vl |= 32, jl.current = null, se = Kr;
			var l = ue();
			if (ge(l)) {
				if ("selectionStart" in l) var c = {
					start: l.selectionStart,
					end: l.selectionEnd
				};
				else t: {
					var d = (c = (c = l.ownerDocument) && c.defaultView || window).getSelection && c.getSelection();
					if (d && 0 !== d.rangeCount) {
						c = d.anchorNode;
						var m = d.anchorOffset,
							p = d.focusNode;
						d = d.focusOffset;
						try {
							c.nodeType, p.nodeType
						} catch (t) {
							c = null;
							break t
						}
						var u = 0,
							g = -1,
							s = -1,
							b = 0,
							w = 0,
							f = l,
							h = null;
						r: for (;;) {
							for (var j; f !== c || 0 !== m && 3 !== f.nodeType || (g = u + m), f !== p || 0 !== d && 3 !== f.nodeType || (s = u + d), 3 === f.nodeType && (u += f.nodeValue.length), null !== (j = f.firstChild);) h = f, f = j;
							for (;;) {
								if (f === l) break r;
								if (h === c && ++b === m && (g = u), h === p && ++w === d && (s = u), null !== (j = f.nextSibling)) break;
								h = (f = h).parentNode
							}
							f = j
						}
						c = -1 === g || -1 === s ? null : {
							start: g,
							end: s
						}
					} else c = null
				}
				c = c || {
					start: 0,
					end: 0
				}
			} else c = null;
			be = {
				activeElementDetached: null,
				focusedElem: l,
				selectionRange: c
			}, Kr = !1, Ll = i;
			do {
				try {
					sc()
				} catch (t) {
					if (null === Ll) throw Error(n(330));
					hc(Ll, t), Ll = Ll.nextEffect
				}
			} while (null !== Ll);
			Ll = i;
			do {
				try {
					for (l = t, c = r; null !== Ll;) {
						var x = Ll.effectTag;
						if (16 & x && Gt(Ll.stateNode, ""), 128 & x) {
							var y = Ll.alternate;
							if (null !== y) {
								var S = y.ref;
								null !== S && ("function" == typeof S ? S(null) : S.current = null)
							}
						}
						switch (1038 & x) {
							case 2:
								dl(Ll), Ll.effectTag &= -3;
								break;
							case 6:
								dl(Ll), Ll.effectTag &= -3, pl(Ll.alternate, Ll);
								break;
							case 1024:
								Ll.effectTag &= -1025;
								break;
							case 1028:
								Ll.effectTag &= -1025, pl(Ll.alternate, Ll);
								break;
							case 4:
								pl(Ll.alternate, Ll);
								break;
							case 8:
								ml(l, m = Ll, c), ll(m)
						}
						Ll = Ll.nextEffect
					}
				} catch (t) {
					if (null === Ll) throw Error(n(330));
					hc(Ll, t), Ll = Ll.nextEffect
				}
			} while (null !== Ll);
			if (S = be, y = ue(), x = S.focusedElem, c = S.selectionRange, y !== x && x && x.ownerDocument && function t(r, e) {
					return !(!r || !e) && (r === e || (!r || 3 !== r.nodeType) && (e && 3 === e.nodeType ? t(r, e.parentNode) : "contains" in r ? r.contains(e) : !!r.compareDocumentPosition && !!(16 & r.compareDocumentPosition(e))))
				}(x.ownerDocument.documentElement, x)) {
				null !== c && ge(x) && (y = c.start, void 0 === (S = c.end) && (S = y), "selectionStart" in x ? (x.selectionStart = y, x.selectionEnd = Math.min(S, x.value.length)) : (S = (y = x.ownerDocument || document) && y.defaultView || window).getSelection && (S = S.getSelection(), m = x.textContent.length, l = Math.min(c.start, m), c = void 0 === c.end ? l : Math.min(c.end, m), !S.extend && l > c && (m = c, c = l, l = m), m = pe(x, l), p = pe(x, c), m && p && (1 !== S.rangeCount || S.anchorNode !== m.node || S.anchorOffset !== m.offset || S.focusNode !== p.node || S.focusOffset !== p.offset) && ((y = y.createRange()).setStart(m.node, m.offset), S.removeAllRanges(), l > c ? (S.addRange(y), S.extend(p.node, p.offset)) : (y.setEnd(p.node, p.offset), S.addRange(y))))), y = [];
				for (S = x; S = S.parentNode;) 1 === S.nodeType && y.push({
					element: S,
					left: S.scrollLeft,
					top: S.scrollTop
				});
				for ("function" == typeof x.focus && x.focus(), x = 0; x < y.length; x++)(S = y[x]).element.scrollLeft = S.left, S.element.scrollTop = S.top
			}
			Kr = !!se, be = se = null, t.current = e, Ll = i;
			do {
				try {
					for (x = t; null !== Ll;) {
						var v = Ll.effectTag;
						if (36 & v && al(x, Ll.alternate, Ll), 128 & v) {
							y = void 0;
							var O = Ll.ref;
							if (null !== O) {
								var k = Ll.stateNode;
								switch (Ll.tag) {
									case 5:
										y = k;
										break;
									default:
										y = k
								}
								"function" == typeof O ? O(y) : O.current = y
							}
						}
						Ll = Ll.nextEffect
					}
				} catch (t) {
					if (null === Ll) throw Error(n(330));
					hc(Ll, t), Ll = Ll.nextEffect
				}
			} while (null !== Ll);
			Ll = null, Mi(), vl = a
		} else t.current = e;
		if (Hl) Hl = !1, Gl = t, Bl = r;
		else
			for (Ll = i; null !== Ll;) r = Ll.nextEffect, Ll.nextEffect = null, Ll = r;
		if (0 === (r = t.firstPendingTime) && (zl = null), 1073741823 === r ? t === Fl ? Wl++ : (Wl = 0, Fl = t) : Wl = 0, "function" == typeof yc && yc(e.stateNode, o), Xl(t), Dl) throw Dl = !1, t = Pl, Pl = null, t;
		return 0 != (8 & vl) || Vi(), null
	}

	function sc() {
		for (; null !== Ll;) {
			var t = Ll.effectTag;
			0 != (256 & t) && el(Ll.alternate, Ll), 0 == (512 & t) || Hl || (Hl = !0, Wi(97, (function() {
				return bc(), null
			}))), Ll = Ll.nextEffect
		}
	}

	function bc() {
		if (90 !== Bl) {
			var t = 97 < Bl ? 97 : Bl;
			return Bl = 90, Ui(t, wc)
		}
	}

	function wc() {
		if (null === Gl) return !1;
		var t = Gl;
		if (Gl = null, 0 != (48 & vl)) throw Error(n(331));
		var r = vl;
		for (vl |= 32, t = t.current.firstEffect; null !== t;) {
			try {
				var e = t;
				if (0 != (512 & e.effectTag)) switch (e.tag) {
					case 0:
					case 11:
					case 15:
					case 22:
						ol(5, e), il(5, e)
				}
			} catch (r) {
				if (null === t) throw Error(n(330));
				hc(t, r)
			}
			e = t.nextEffect, t.nextEffect = null, t = e
		}
		return vl = r, Vi(), !0
	}

	function fc(t, r, e) {
		ca(t, r = sl(t, r = Zn(e, r), 1073741823)), null !== (t = Ql(t, 1073741823)) && Xl(t)
	}

	function hc(t, r) {
		if (3 === t.tag) fc(t, t, r);
		else
			for (var e = t.return; null !== e;) {
				if (3 === e.tag) {
					fc(e, t, r);
					break
				}
				if (1 === e.tag) {
					var o = e.stateNode;
					if ("function" == typeof e.type.getDerivedStateFromError || "function" == typeof o.componentDidCatch && (null === zl || !zl.has(o))) {
						ca(e, t = bl(e, t = Zn(r, t), 1073741823)), null !== (e = Ql(e, 1073741823)) && Xl(e);
						break
					}
				}
				e = e.return
			}
	}

	function jc(t, r, e) {
		var o = t.pingCache;
		null !== o && o.delete(r), Ol === t && El === e ? Cl === Sl || Cl === yl && 1073741823 === Tl && Hi() - Ml < 500 ? ec(t, El) : Rl = !0 : _c(t, e) && (0 !== (r = t.lastPingedTime) && r < e || (t.lastPingedTime = e, Xl(t)))
	}

	function xc(t, r) {
		var e = t.stateNode;
		null !== e && e.delete(r), 0 === (r = 0) && (r = Yl(r = Kl(), t, null)), null !== (t = Ql(t, r)) && Xl(t)
	}
	wl = function(t, r, e) {
		var o = r.expirationTime;
		if (null !== t) {
			var i = r.pendingProps;
			if (t.memoizedProps !== i || ui.current) In = !0;
			else {
				if (o < e) {
					switch (In = !1, r.tag) {
						case 3:
							Hn(r), An();
							break;
						case 5:
							if (Ra(r), 4 & r.mode && 1 !== e && i.hidden) return r.expirationTime = r.childExpirationTime = 1, null;
							break;
						case 1:
							bi(r.type) && ji(r);
							break;
						case 4:
							Na(r, r.stateNode.containerInfo);
							break;
						case 10:
							o = r.memoizedProps.value, i = r.type._context, di(Qi, i._currentValue), i._currentValue = o;
							break;
						case 13:
							if (null !== r.memoizedState) return 0 !== (o = r.child.childExpirationTime) && o >= e ? Fn(t, r, e) : (di(La, 1 & La.current), null !== (r = qn(t, r, e)) ? r.sibling : null);
							di(La, 1 & La.current);
							break;
						case 19:
							if (o = r.childExpirationTime >= e, 0 != (64 & t.effectTag)) {
								if (o) return Yn(t, r, e);
								r.effectTag |= 64
							}
							if (null !== (i = r.memoizedState) && (i.rendering = null, i.tail = null), di(La, La.current), !o) return null
					}
					return qn(t, r, e)
				}
				In = !1
			}
		} else In = !1;
		switch (r.expirationTime = 0, r.tag) {
			case 2:
				if (o = r.type, null !== t && (t.alternate = null, r.alternate = null, r.effectTag |= 2), t = r.pendingProps, i = si(r, pi.current), ea(r, e), i = Ya(null, r, o, t, i, e), r.effectTag |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof) {
					if (r.tag = 1, r.memoizedState = null, r.updateQueue = null, bi(o)) {
						var a = !0;
						ji(r)
					} else a = !1;
					r.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, aa(r);
					var l = o.getDerivedStateFromProps;
					"function" == typeof l && sa(r, o, l, t), i.updater = ba, r.stateNode = i, i._reactInternalFiber = r, ja(r, o, t, e), r = zn(null, r, o, !0, a, e)
				} else r.tag = 0, Nn(null, r, i, e), r = r.child;
				return r;
			case 16:
				t: {
					if (i = r.elementType, null !== t && (t.alternate = null, r.alternate = null, r.effectTag |= 2), t = r.pendingProps, function(t) {
							if (-1 === t._status) {
								t._status = 0;
								var r = t._ctor;
								r = r(), t._result = r, r.then((function(r) {
									0 === t._status && (r = r.default, t._status = 1, t._result = r)
								}), (function(r) {
									0 === t._status && (t._status = 2, t._result = r)
								}))
							}
						}(i), 1 !== i._status) throw i._result;
					switch (i = i._result, r.type = i, a = r.tag = function(t) {
							if ("function" == typeof t) return kc(t) ? 1 : 0;
							if (null != t) {
								if ((t = t.$$typeof) === ct) return 11;
								if (t === pt) return 14
							}
							return 2
						}(i), t = qi(i, t), a) {
						case 0:
							r = Dn(null, r, i, t, e);
							break t;
						case 1:
							r = Pn(null, r, i, t, e);
							break t;
						case 11:
							r = _n(null, r, i, t, e);
							break t;
						case 14:
							r = Rn(null, r, i, qi(i.type, t), o, e);
							break t
					}
					throw Error(n(306, i, ""))
				}
				return r;
			case 0:
				return o = r.type, i = r.pendingProps, Dn(t, r, o, i = r.elementType === o ? i : qi(o, i), e);
			case 1:
				return o = r.type, i = r.pendingProps, Pn(t, r, o, i = r.elementType === o ? i : qi(o, i), e);
			case 3:
				if (Hn(r), o = r.updateQueue, null === t || null === o) throw Error(n(282));
				if (o = r.pendingProps, i = null !== (i = r.memoizedState) ? i.element : null, na(t, r), ma(r, o, null, e), (o = r.memoizedState.element) === i) An(), r = qn(t, r, e);
				else {
					if ((i = r.stateNode.hydrate) && (yn = xe(r.stateNode.containerInfo.firstChild), xn = r, i = Sn = !0), i)
						for (e = ka(r, null, o, e), r.child = e; e;) e.effectTag = -3 & e.effectTag | 1024, e = e.sibling;
					else Nn(t, r, o, e), An();
					r = r.child
				}
				return r;
			case 5:
				return Ra(r), null === t && kn(r), o = r.type, i = r.pendingProps, a = null !== t ? t.memoizedProps : null, l = i.children, fe(o, i) ? l = null : null !== a && fe(o, a) && (r.effectTag |= 16), Ln(t, r), 4 & r.mode && 1 !== e && i.hidden ? (r.expirationTime = r.childExpirationTime = 1, r = null) : (Nn(t, r, l, e), r = r.child), r;
			case 6:
				return null === t && kn(r), null;
			case 13:
				return Fn(t, r, e);
			case 4:
				return Na(r, r.stateNode.containerInfo), o = r.pendingProps, null === t ? r.child = Oa(r, null, o, e) : Nn(t, r, o, e), r.child;
			case 11:
				return o = r.type, i = r.pendingProps, _n(t, r, o, i = r.elementType === o ? i : qi(o, i), e);
			case 7:
				return Nn(t, r, r.pendingProps, e), r.child;
			case 8:
			case 12:
				return Nn(t, r, r.pendingProps.children, e), r.child;
			case 10:
				t: {
					o = r.type._context,
					i = r.pendingProps,
					l = r.memoizedProps,
					a = i.value;
					var c = r.type._context;
					if (di(Qi, c._currentValue), c._currentValue = a, null !== l)
						if (c = l.value, 0 === (a = Po(c, a) ? 0 : 0 | ("function" == typeof o._calculateChangedBits ? o._calculateChangedBits(c, a) : 1073741823))) {
							if (l.children === i.children && !ui.current) {
								r = qn(t, r, e);
								break t
							}
						} else
							for (null !== (c = r.child) && (c.return = r); null !== c;) {
								var d = c.dependencies;
								if (null !== d) {
									l = c.child;
									for (var m = d.firstContext; null !== m;) {
										if (m.context === o && 0 != (m.observedBits & a)) {
											1 === c.tag && ((m = la(e, null)).tag = 2, ca(c, m)), c.expirationTime < e && (c.expirationTime = e), null !== (m = c.alternate) && m.expirationTime < e && (m.expirationTime = e), ra(c.return, e), d.expirationTime < e && (d.expirationTime = e);
											break
										}
										m = m.next
									}
								} else l = 10 === c.tag && c.type === r.type ? null : c.child;
								if (null !== l) l.return = c;
								else
									for (l = c; null !== l;) {
										if (l === r) {
											l = null;
											break
										}
										if (null !== (c = l.sibling)) {
											c.return = l.return, l = c;
											break
										}
										l = l.return
									}
								c = l
							}
					Nn(t, r, i.children, e),
					r = r.child
				}
				return r;
			case 9:
				return i = r.type, o = (a = r.pendingProps).children, ea(r, e), o = o(i = oa(i, a.unstable_observedBits)), r.effectTag |= 1, Nn(t, r, o, e), r.child;
			case 14:
				return a = qi(i = r.type, r.pendingProps), Rn(t, r, i, a = qi(i.type, a), o, e);
			case 15:
				return Mn(t, r, r.type, r.pendingProps, o, e);
			case 17:
				return o = r.type, i = r.pendingProps, i = r.elementType === o ? i : qi(o, i), null !== t && (t.alternate = null, r.alternate = null, r.effectTag |= 2), r.tag = 1, bi(o) ? (t = !0, ji(r)) : t = !1, ea(r, e), fa(r, o, i), ja(r, o, i, e), zn(null, r, o, !0, t, e);
			case 19:
				return Yn(t, r, e)
		}
		throw Error(n(156, r.tag))
	};
	var yc = null,
		Sc = null;

	function vc(t, r, e, o) {
		this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
	}

	function Oc(t, r, e, o) {
		return new vc(t, r, e, o)
	}

	function kc(t) {
		return !(!(t = t.prototype) || !t.isReactComponent)
	}

	function Ec(t, r) {
		var e = t.alternate;
		return null === e ? ((e = Oc(t.tag, r, t.key, t.mode)).elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = r, e.effectTag = 0, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null), e.childExpirationTime = t.childExpirationTime, e.expirationTime = t.expirationTime, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, r = t.dependencies, e.dependencies = null === r ? null : {
			expirationTime: r.expirationTime,
			firstContext: r.firstContext,
			responders: r.responders
		}, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e
	}

	function Cc(t, r, e, o, i, a) {
		var l = 2;
		if (o = t, "function" == typeof t) kc(t) && (l = 1);
		else if ("string" == typeof t) l = 5;
		else t: switch (t) {
			case et:
				return Ac(e.children, i, a, r);
			case lt:
				l = 8, i |= 7;
				break;
			case ot:
				l = 8, i |= 1;
				break;
			case it:
				return (t = Oc(12, e, r, 8 | i)).elementType = it, t.type = it, t.expirationTime = a, t;
			case dt:
				return (t = Oc(13, e, r, i)).type = dt, t.elementType = dt, t.expirationTime = a, t;
			case mt:
				return (t = Oc(19, e, r, i)).elementType = mt, t.expirationTime = a, t;
			default:
				if ("object" == typeof t && null !== t) switch (t.$$typeof) {
					case at:
						l = 10;
						break t;
					case nt:
						l = 9;
						break t;
					case ct:
						l = 11;
						break t;
					case pt:
						l = 14;
						break t;
					case ut:
						l = 16, o = null;
						break t;
					case gt:
						l = 22;
						break t
				}
				throw Error(n(130, null == t ? t : typeof t, ""))
		}
		return (r = Oc(l, e, r, i)).elementType = t, r.type = o, r.expirationTime = a, r
	}

	function Ac(t, r, e, o) {
		return (t = Oc(7, t, o, r)).expirationTime = e, t
	}

	function Tc(t, r, e) {
		return (t = Oc(6, t, null, r)).expirationTime = e, t
	}

	function Ic(t, r, e) {
		return (r = Oc(4, null !== t.children ? t.children : [], t.key, r)).expirationTime = e, r.stateNode = {
			containerInfo: t.containerInfo,
			pendingChildren: null,
			implementation: t.implementation
		}, r
	}

	function Nc(t, r, e) {
		this.tag = r, this.current = null, this.containerInfo = t, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = e, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
	}

	function _c(t, r) {
		var e = t.firstSuspendedTime;
		return t = t.lastSuspendedTime, 0 !== e && e >= r && t <= r
	}

	function Rc(t, r) {
		var e = t.firstSuspendedTime,
			o = t.lastSuspendedTime;
		e < r && (t.firstSuspendedTime = r), (o > r || 0 === e) && (t.lastSuspendedTime = r), r <= t.lastPingedTime && (t.lastPingedTime = 0), r <= t.lastExpiredTime && (t.lastExpiredTime = 0)
	}

	function Mc(t, r) {
		r > t.firstPendingTime && (t.firstPendingTime = r);
		var e = t.firstSuspendedTime;
		0 !== e && (r >= e ? t.firstSuspendedTime = t.lastSuspendedTime = t.nextKnownPendingLevel = 0 : r >= t.lastSuspendedTime && (t.lastSuspendedTime = r + 1), r > t.nextKnownPendingLevel && (t.nextKnownPendingLevel = r))
	}

	function Lc(t, r) {
		var e = t.lastExpiredTime;
		(0 === e || e > r) && (t.lastExpiredTime = r)
	}

	function Dc(t, r, e, o) {
		var i = r.current,
			a = Kl(),
			l = ua.suspense;
		a = Yl(a, i, l);
		t: if (e) {
			r: {
				if ($t(e = e._reactInternalFiber) !== e || 1 !== e.tag) throw Error(n(170));
				var c = e;do {
					switch (c.tag) {
						case 3:
							c = c.stateNode.context;
							break r;
						case 1:
							if (bi(c.type)) {
								c = c.stateNode.__reactInternalMemoizedMergedChildContext;
								break r
							}
					}
					c = c.return
				} while (null !== c);
				throw Error(n(171))
			}
			if (1 === e.tag) {
				var d = e.type;
				if (bi(d)) {
					e = hi(e, d, c);
					break t
				}
			}
			e = c
		}
		else e = mi;
		return null === r.context ? r.context = e : r.pendingContext = e, (r = la(a, l)).payload = {
			element: t
		}, null !== (o = void 0 === o ? null : o) && (r.callback = o), ca(i, r), ql(i, a), a
	}

	function Pc(t) {
		if (!(t = t.current).child) return null;
		switch (t.child.tag) {
			case 5:
			default:
				return t.child.stateNode
		}
	}

	function zc(t, r) {
		null !== (t = t.memoizedState) && null !== t.dehydrated && t.retryTime < r && (t.retryTime = r)
	}

	function Hc(t, r) {
		zc(t, r), (t = t.alternate) && zc(t, r)
	}

	function Gc(t, r, e) {
		var o = new Nc(t, r, e = null != e && !0 === e.hydrate),
			i = Oc(3, null, null, 2 === r ? 7 : 1 === r ? 3 : 0);
		o.current = i, i.stateNode = o, aa(i), t[ke] = o.current, e && 0 !== r && function(t, r) {
			var e = Zt(r);
			Er.forEach((function(t) {
				sr(t, r, e)
			})), Cr.forEach((function(t) {
				sr(t, r, e)
			}))
		}(0, 9 === t.nodeType ? t : t.ownerDocument), this._internalRoot = o
	}

	function Bc(t) {
		return !(!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType && (8 !== t.nodeType || " react-mount-point-unstable " !== t.nodeValue))
	}

	function Uc(t, r, e, o, i) {
		var a = e._reactRootContainer;
		if (a) {
			var n = a._internalRoot;
			if ("function" == typeof i) {
				var l = i;
				i = function() {
					var t = Pc(n);
					l.call(t)
				}
			}
			Dc(r, n, t, i)
		} else {
			if (a = e._reactRootContainer = function(t, r) {
					if (r || (r = !(!(r = t ? 9 === t.nodeType ? t.documentElement : t.firstChild : null) || 1 !== r.nodeType || !r.hasAttribute("data-reactroot"))), !r)
						for (var e; e = t.lastChild;) t.removeChild(e);
					return new Gc(t, 0, r ? {
						hydrate: !0
					} : void 0)
				}(e, o), n = a._internalRoot, "function" == typeof i) {
				var c = i;
				i = function() {
					var t = Pc(n);
					c.call(t)
				}
			}
			rc((function() {
				Dc(r, n, t, i)
			}))
		}
		return Pc(n)
	}

	function Wc(t, r, e) {
		var o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: rt,
			key: null == o ? null : "" + o,
			children: t,
			containerInfo: r,
			implementation: e
		}
	}

	function Fc(t, r) {
		var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!Bc(r)) throw Error(n(200));
		return Wc(t, r, null, e)
	}
	Gc.prototype.render = function(t) {
		Dc(t, this._internalRoot, null, null)
	}, Gc.prototype.unmount = function() {
		var t = this._internalRoot,
			r = t.containerInfo;
		Dc(null, t, null, (function() {
			r[ke] = null
		}))
	}, br = function(t) {
		if (13 === t.tag) {
			var r = Yi(Kl(), 150, 100);
			ql(t, r), Hc(t, r)
		}
	}, wr = function(t) {
		13 === t.tag && (ql(t, 3), Hc(t, 3))
	}, fr = function(t) {
		if (13 === t.tag) {
			var r = Kl();
			ql(t, r = Yl(r, t, null)), Hc(t, r)
		}
	}, A = function(t, r, e) {
		switch (r) {
			case "input":
				if (kt(t, e), r = e.name, "radio" === e.type && null != r) {
					for (e = t; e.parentNode;) e = e.parentNode;
					for (e = e.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < e.length; r++) {
						var o = e[r];
						if (o !== t && o.form === t.form) {
							var i = Te(o);
							if (!i) throw Error(n(90));
							yt(o), kt(o, i)
						}
					}
				}
				break;
			case "textarea":
				_t(t, e);
				break;
			case "select":
				null != (r = e.value) && Tt(t, !!e.multiple, r, !1)
		}
	}, M = tc, L = function(t, r, e, o, i) {
		var a = vl;
		vl |= 4;
		try {
			return Ui(98, t.bind(null, r, e, o, i))
		} finally {
			0 === (vl = a) && Vi()
		}
	}, D = function() {
		0 == (49 & vl) && (function() {
			if (null !== Ul) {
				var t = Ul;
				Ul = null, t.forEach((function(t, r) {
					Lc(r, t), Xl(r)
				})), Vi()
			}
		}(), bc())
	}, P = function(t, r) {
		var e = vl;
		vl |= 2;
		try {
			return t(r)
		} finally {
			0 === (vl = e) && Vi()
		}
	};
	var Vc, Kc, Yc = {
		Events: [Ce, Ae, Te, E, v, De, function(t) {
			ir(t, Le)
		}, _, R, Xr, lr, bc, {
			current: !1
		}]
	};
	Kc = (Vc = {
			findFiberByHostInstance: Ee,
			bundleType: 0,
			version: "16.13.1",
			rendererPackageName: "react-dom"
		}).findFiberByHostInstance,
		function(t) {
			if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
			var r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
			if (r.isDisabled || !r.supportsFiber) return !0;
			try {
				var e = r.inject(t);
				yc = function(t) {
					try {
						r.onCommitFiberRoot(e, t, void 0, 64 == (64 & t.current.effectTag))
					} catch (t) {}
				}, Sc = function(t) {
					try {
						r.onCommitFiberUnmount(e, t)
					} catch (t) {}
				}
			} catch (t) {}
		}(i({}, Vc, {
			overrideHookState: null,
			overrideProps: null,
			setSuspenseHandler: null,
			scheduleUpdate: null,
			currentDispatcherRef: J.ReactCurrentDispatcher,
			findHostInstanceByFiber: function(t) {
				return null === (t = er(t)) ? null : t.stateNode
			},
			findFiberByHostInstance: function(t) {
				return Kc ? Kc(t) : null
			},
			findHostInstancesForRefresh: null,
			scheduleRefresh: null,
			scheduleRoot: null,
			setRefreshHandler: null,
			getCurrentFiber: null
		})), r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yc, r.createPortal = Fc, r.findDOMNode = function(t) {
			if (null == t) return null;
			if (1 === t.nodeType) return t;
			var r = t._reactInternalFiber;
			if (void 0 === r) {
				if ("function" == typeof t.render) throw Error(n(188));
				throw Error(n(268, Object.keys(t)))
			}
			return t = null === (t = er(r)) ? null : t.stateNode
		}, r.flushSync = function(t, r) {
			if (0 != (48 & vl)) throw Error(n(187));
			var e = vl;
			vl |= 1;
			try {
				return Ui(99, t.bind(null, r))
			} finally {
				vl = e, Vi()
			}
		}, r.hydrate = function(t, r, e) {
			if (!Bc(r)) throw Error(n(200));
			return Uc(null, t, r, !0, e)
		}, r.render = function(t, r, e) {
			if (!Bc(r)) throw Error(n(200));
			return Uc(null, t, r, !1, e)
		}, r.unmountComponentAtNode = function(t) {
			if (!Bc(t)) throw Error(n(40));
			return !!t._reactRootContainer && (rc((function() {
				Uc(null, null, t, !1, (function() {
					t._reactRootContainer = null, t[ke] = null
				}))
			})), !0)
		}, r.unstable_batchedUpdates = tc, r.unstable_createPortal = function(t, r) {
			return Fc(t, r, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
		}, r.unstable_renderSubtreeIntoContainer = function(t, r, e, o) {
			if (!Bc(e)) throw Error(n(200));
			if (null == t || void 0 === t._reactInternalFiber) throw Error(n(38));
			return Uc(t, r, e, !1, o)
		}, r.version = "16.13.1"
}, function(t, r, e) {
	"use strict";
	t.exports = e(328)
}, function(t, r, e) {
	"use strict";
	/** @license React v0.19.1
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var o, i, a, n, l;
	if ("undefined" == typeof window || "function" != typeof MessageChannel) {
		var c = null,
			d = null,
			m = function() {
				if (null !== c) try {
					var t = r.unstable_now();
					c(!0, t), c = null
				} catch (t) {
					throw setTimeout(m, 0), t
				}
			},
			p = Date.now();
		r.unstable_now = function() {
			return Date.now() - p
		}, o = function(t) {
			null !== c ? setTimeout(o, 0, t) : (c = t, setTimeout(m, 0))
		}, i = function(t, r) {
			d = setTimeout(t, r)
		}, a = function() {
			clearTimeout(d)
		}, n = function() {
			return !1
		}, l = r.unstable_forceFrameRate = function() {}
	} else {
		var u = window.performance,
			g = window.Date,
			s = window.setTimeout,
			b = window.clearTimeout;
		if ("undefined" != typeof console) {
			var w = window.cancelAnimationFrame;
			"function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof w && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
		}
		if ("object" == typeof u && "function" == typeof u.now) r.unstable_now = function() {
			return u.now()
		};
		else {
			var f = g.now();
			r.unstable_now = function() {
				return g.now() - f
			}
		}
		var h = !1,
			j = null,
			x = -1,
			y = 5,
			S = 0;
		n = function() {
			return r.unstable_now() >= S
		}, l = function() {}, r.unstable_forceFrameRate = function(t) {
			0 > t || 125 < t ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : y = 0 < t ? Math.floor(1e3 / t) : 5
		};
		var v = new MessageChannel,
			O = v.port2;
		v.port1.onmessage = function() {
			if (null !== j) {
				var t = r.unstable_now();
				S = t + y;
				try {
					j(!0, t) ? O.postMessage(null) : (h = !1, j = null)
				} catch (t) {
					throw O.postMessage(null), t
				}
			} else h = !1
		}, o = function(t) {
			j = t, h || (h = !0, O.postMessage(null))
		}, i = function(t, e) {
			x = s((function() {
				t(r.unstable_now())
			}), e)
		}, a = function() {
			b(x), x = -1
		}
	}

	function k(t, r) {
		var e = t.length;
		t.push(r);
		t: for (;;) {
			var o = e - 1 >>> 1,
				i = t[o];
			if (!(void 0 !== i && 0 < A(i, r))) break t;
			t[o] = r, t[e] = i, e = o
		}
	}

	function E(t) {
		return void 0 === (t = t[0]) ? null : t
	}

	function C(t) {
		var r = t[0];
		if (void 0 !== r) {
			var e = t.pop();
			if (e !== r) {
				t[0] = e;
				t: for (var o = 0, i = t.length; o < i;) {
					var a = 2 * (o + 1) - 1,
						n = t[a],
						l = a + 1,
						c = t[l];
					if (void 0 !== n && 0 > A(n, e)) void 0 !== c && 0 > A(c, n) ? (t[o] = c, t[l] = e, o = l) : (t[o] = n, t[a] = e, o = a);
					else {
						if (!(void 0 !== c && 0 > A(c, e))) break t;
						t[o] = c, t[l] = e, o = l
					}
				}
			}
			return r
		}
		return null
	}

	function A(t, r) {
		var e = t.sortIndex - r.sortIndex;
		return 0 !== e ? e : t.id - r.id
	}
	var T = [],
		I = [],
		N = 1,
		_ = null,
		R = 3,
		M = !1,
		L = !1,
		D = !1;

	function P(t) {
		for (var r = E(I); null !== r;) {
			if (null === r.callback) C(I);
			else {
				if (!(r.startTime <= t)) break;
				C(I), r.sortIndex = r.expirationTime, k(T, r)
			}
			r = E(I)
		}
	}

	function z(t) {
		if (D = !1, P(t), !L)
			if (null !== E(T)) L = !0, o(H);
			else {
				var r = E(I);
				null !== r && i(z, r.startTime - t)
			}
	}

	function H(t, e) {
		L = !1, D && (D = !1, a()), M = !0;
		var o = R;
		try {
			for (P(e), _ = E(T); null !== _ && (!(_.expirationTime > e) || t && !n());) {
				var l = _.callback;
				if (null !== l) {
					_.callback = null, R = _.priorityLevel;
					var c = l(_.expirationTime <= e);
					e = r.unstable_now(), "function" == typeof c ? _.callback = c : _ === E(T) && C(T), P(e)
				} else C(T);
				_ = E(T)
			}
			if (null !== _) var d = !0;
			else {
				var m = E(I);
				null !== m && i(z, m.startTime - e), d = !1
			}
			return d
		} finally {
			_ = null, R = o, M = !1
		}
	}

	function G(t) {
		switch (t) {
			case 1:
				return -1;
			case 2:
				return 250;
			case 5:
				return 1073741823;
			case 4:
				return 1e4;
			default:
				return 5e3
		}
	}
	var B = l;
	r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(t) {
		t.callback = null
	}, r.unstable_continueExecution = function() {
		L || M || (L = !0, o(H))
	}, r.unstable_getCurrentPriorityLevel = function() {
		return R
	}, r.unstable_getFirstCallbackNode = function() {
		return E(T)
	}, r.unstable_next = function(t) {
		switch (R) {
			case 1:
			case 2:
			case 3:
				var r = 3;
				break;
			default:
				r = R
		}
		var e = R;
		R = r;
		try {
			return t()
		} finally {
			R = e
		}
	}, r.unstable_pauseExecution = function() {}, r.unstable_requestPaint = B, r.unstable_runWithPriority = function(t, r) {
		switch (t) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				break;
			default:
				t = 3
		}
		var e = R;
		R = t;
		try {
			return r()
		} finally {
			R = e
		}
	}, r.unstable_scheduleCallback = function(t, e, n) {
		var l = r.unstable_now();
		if ("object" == typeof n && null !== n) {
			var c = n.delay;
			c = "number" == typeof c && 0 < c ? l + c : l, n = "number" == typeof n.timeout ? n.timeout : G(t)
		} else n = G(t), c = l;
		return t = {
			id: N++,
			callback: e,
			priorityLevel: t,
			startTime: c,
			expirationTime: n = c + n,
			sortIndex: -1
		}, c > l ? (t.sortIndex = c, k(I, t), null === E(T) && t === E(I) && (D ? a() : D = !0, i(z, c - l))) : (t.sortIndex = n, k(T, t), L || M || (L = !0, o(H))), t
	}, r.unstable_shouldYield = function() {
		var t = r.unstable_now();
		P(t);
		var e = E(T);
		return e !== _ && null !== _ && null !== e && null !== e.callback && e.startTime <= t && e.expirationTime < _.expirationTime || n()
	}, r.unstable_wrapCallback = function(t) {
		var r = R;
		return function() {
			var e = R;
			R = r;
			try {
				return t.apply(this, arguments)
			} finally {
				R = e
			}
		}
	}
}, function(t, r, e) {
	t.exports.Dispatcher = e(330)
}, function(t, r, e) {
	"use strict";
	r.__esModule = !0;
	var o = e(331),
		i = function() {
			function t() {
				! function(t, r) {
					if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
				}(this, t), this._callbacks = {}, this._isDispatching = !1, this._isHandled = {}, this._isPending = {}, this._lastID = 1
			}
			return t.prototype.register = function(t) {
				var r = "ID_" + this._lastID++;
				return this._callbacks[r] = t, r
			}, t.prototype.unregister = function(t) {
				this._callbacks[t] || o(!1), delete this._callbacks[t]
			}, t.prototype.waitFor = function(t) {
				this._isDispatching || o(!1);
				for (var r = 0; r < t.length; r++) {
					var e = t[r];
					this._isPending[e] ? this._isHandled[e] || o(!1) : (this._callbacks[e] || o(!1), this._invokeCallback(e))
				}
			}, t.prototype.dispatch = function(t) {
				this._isDispatching && o(!1), this._startDispatching(t);
				try {
					for (var r in this._callbacks) this._isPending[r] || this._invokeCallback(r)
				} finally {
					this._stopDispatching()
				}
			}, t.prototype.isDispatching = function() {
				return this._isDispatching
			}, t.prototype._invokeCallback = function(t) {
				this._isPending[t] = !0, this._callbacks[t](this._pendingPayload), this._isHandled[t] = !0
			}, t.prototype._startDispatching = function(t) {
				for (var r in this._callbacks) this._isPending[r] = !1, this._isHandled[r] = !1;
				this._pendingPayload = t, this._isDispatching = !0
			}, t.prototype._stopDispatching = function() {
				delete this._pendingPayload, this._isDispatching = !1
			}, t
		}();
	t.exports = i
}, function(t, r, e) {
	"use strict";
	t.exports = function(t, r, e, o, i, a, n, l) {
		if (!t) {
			var c;
			if (void 0 === r) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
			else {
				var d = [e, o, i, a, n, l],
					m = 0;
				(c = new Error(r.replace(/%s/g, (function() {
					return d[m++]
				})))).name = "Invariant Violation"
			}
			throw c.framesToPop = 1, c
		}
	}
}, function(t, r, e) {
	"use strict";
	var o = e(38),
		i = e(39),
		a = e(37),
		n = function() {
			function t(t, r, e) {
				this.groupId = t, this.groupStartWordIndex = r, this.groupEndWordIndex = e
			}
			return t.TokenGroupRangeFromTokenInfo = function(r) {
				return new t(r.groupId, r.groupWordIndex, r.groupWordIndex)
			}, Object.defineProperty(t.prototype, "identifier", {
				get: function() {
					return this.groupId + "-" + this.groupStartWordIndex + "-" + this.groupEndWordIndex
				},
				enumerable: !1,
				configurable: !0
			}), t.prototype.containsGroupRange = function(t) {
				return this.groupId === t.groupId && this.groupStartWordIndex <= t.groupStartWordIndex && this.groupEndWordIndex >= t.groupEndWordIndex
			}, t.prototype.getTokenInfos = function(t) {
				return i.getTokenInfosFromElementIDs(o.elementIdFromParts(this.groupId, this.groupStartWordIndex), o.elementIdFromParts(this.groupId, this.groupEndWordIndex), t)
			}, t.prototype.toString = function() {
				return i.getTextContentOfTokenInfos(this.getTokenInfos(!0))
			}, t.prototype.containsWordAt = function(t, r) {
				return this.groupId === t && this.groupStartWordIndex <= r && this.groupEndWordIndex >= r
			}, t.prototype.expand = function(t) {
				if (t && 0 !== t.length) {
					var r = t[0],
						e = t[t.length - 1];
					r.groupWordIndex > this.groupEndWordIndex ? this.groupEndWordIndex = e.groupWordIndex : r.groupWordIndex < this.groupStartWordIndex && (this.groupStartWordIndex = r.groupWordIndex)
				}
			}, Object.defineProperty(t.prototype, "textBlockRanges", {
				get: function() {
					var t = a.getTokenInfoByElementID(o.elementIdFromParts(this.groupId, this.groupStartWordIndex)),
						r = a.getTokenInfoByElementID(o.elementIdFromParts(this.groupId, this.groupEndWordIndex));
					return t && r ? i.getRangesBetweenTokenInfos(t, r) : []
				},
				enumerable: !1,
				configurable: !0
			}), t
		}();
	t.exports = n
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(34),
		n = e(379),
		l = e(380),
		c = e(43),
		d = e(8),
		m = e(29),
		p = new(function(t) {
			function r() {
				var r = t.call(this) || this;
				return r.CHANGE_EVENT = "change", r.SECTION_CHANGE_EVENT = "section_change", r._selectedSection = d.StudySection.Gems, r._animate = d.STUDY_PANE_ANIMATE_NONE, r._supplementaryAnimate = !1, r._studySectionScrollPosition = {}, r.clearSelections(), r
			}
			return i(r, t), r.prototype.emitChange = function() {
				this.emit(this.CHANGE_EVENT)
			}, r.prototype.emitSectionChange = function() {
				this.emit(this.SECTION_CHANGE_EVENT)
			}, r.prototype.setGemContent = function(t, r) {
				this._gemContent = t, this._marginalGroups = null, this._outlineContent = null, this.setShowRsgDownloadBox(r), this.clearSelections()
			}, r.prototype.getGemContent = function() {
				return this._gemContent
			}, r.prototype.getShowRsgDownloadBox = function() {
				return this._showRsgDownloadBox
			}, r.prototype.setShowRsgDownloadBox = function(t) {
				this._showRsgDownloadBox = t
			}, r.prototype.selectSection = function(t, r) {
				this._selectedSection = t, this._animate = r, this.emitSectionChange()
			}, r.prototype.getSelectedSection = function() {
				return this._selectedSection
			}, r.prototype.getAnimate = function() {
				return this._animate
			}, r.prototype.getSupplementaryAnimate = function() {
				return this._supplementaryAnimate
			}, r.prototype.setSupplementaryContent = function(t, r) {
				this._supplementaryContent = t, this._supplementaryAnimate = r !== d.STUDY_PANE_ANIMATE_NONE
			}, r.prototype.getSupplementaryContent = function() {
				return this._supplementaryContent
			}, r.prototype.getOutlineContent = function() {
				return this._outlineContent
			}, r.prototype.getMarginalGroups = function() {
				return this._marginalGroups
			}, r.prototype.addChangeListener = function(t) {
				this.on(this.CHANGE_EVENT, t)
			}, r.prototype.removeChangeListener = function(t) {
				this.removeListener(this.CHANGE_EVENT, t)
			}, r.prototype.addSectionChangeListener = function(t) {
				this.on(this.SECTION_CHANGE_EVENT, t)
			}, r.prototype.removeSectionChangeListener = function(t) {
				this.removeListener(this.SECTION_CHANGE_EVENT, t)
			}, r.prototype.selectFootnote = function(t) {
				if (this.clearSelections(), this._selectedFootnoteID = t, this._gemContent && this._gemContent.gems)
					for (var r in this._gemContent.gems) {
						var e = this._gemContent.gems[r].footnotes;
						if (e)
							for (var o = 0, i = e; o < i.length; o++) {
								if (i[o].id === t) return void(this._highlightedGemIndex = parseInt(r, 10))
							}
					}
			}, r.prototype.getSelectedFootnoteID = function() {
				return this._selectedFootnoteID
			}, r.prototype.selectEndnote = function(t) {
				if (this.clearSelections(), this._selectedEndnoteID = t, this._gemContent && this._gemContent.gems)
					for (var r in this._gemContent.gems) {
						var e = this._gemContent.gems[r].endnotes;
						if (e)
							for (var o = 0, i = e; o < i.length; o++) {
								if (i[o].id === t) return void(this._highlightedGemIndex = parseInt(r, 10))
							}
					}
			}, r.prototype.getSelectedEndnoteID = function() {
				return this._selectedEndnoteID
			}, r.prototype.selectMarginal = function(t, r) {
				if (this.clearSelections(), this._selectedMarginalID = t, this._selectedMarginalClass = r, this._gemContent && this._gemContent.gems)
					for (var e in this._gemContent.gems) {
						var o = this._gemContent.gems[e].marginals;
						if (o)
							for (var i = 0, a = o; i < a.length; i++) {
								if (a[i].id === t) return void(this._highlightedGemIndex = parseInt(e, 10))
							}
					}
			}, r.prototype.getSelectedMarginalID = function() {
				return this._selectedMarginalID
			}, r.prototype.getSelectedMarginalClass = function() {
				return this._selectedMarginalClass
			}, r.prototype.selectVerseLabel = function(t) {
				if (this.clearSelections(), this._selectedVerseLabelID = t, this._gemContent && this._gemContent.gems)
					for (var r in this._gemContent.gems) {
						if (this._gemContent.gems[r].verse === t) return void(this._highlightedGemIndex = parseInt(r, 10))
					}
			}, r.prototype.getSelectedVerseLabelID = function() {
				return this._selectedVerseLabelID
			}, r.prototype.selectParagraphLabel = function(t) {
				if (this.clearSelections(), this._selectedParagraphLabelID = t, this._gemContent && this._gemContent.gems)
					for (var r in this._gemContent.gems) {
						if (this._gemContent.gems[r].paragraph === t) return void(this._highlightedGemIndex = parseInt(r, 10))
					}
			}, r.prototype.getSelectedParagraphLabelID = function() {
				return this._selectedParagraphLabelID
			}, r.prototype.selectNote = function(t) {
				if (this.clearSelections(), this._selectedNoteID = t, this._gemContent && this._gemContent.gems)
					for (var r in this._gemContent.gems) {
						var e = this._gemContent.gems[r].notes;
						if (e)
							for (var o = 0, i = e; o < i.length; o++) {
								if (i[o].id === t) return void(this._highlightedGemIndex = parseInt(r, 10))
							}
					}
			}, r.prototype.getSelectedNoteID = function() {
				return this._selectedNoteID
			}, r.prototype.setScrollTargetDescriptor = function(t) {
				this._scrollTargetDescriptor = t
			}, r.prototype.getScrollTargetDescriptorOnce = function() {
				var t = this._scrollTargetDescriptor;
				return this._scrollTargetDescriptor = null, t
			}, r.prototype.setScrollPosition = function(t, r) {
				this._studySectionScrollPosition[t] = r
			}, r.prototype.getScrollPositionOnce = function(t) {
				var r = this._studySectionScrollPosition[t];
				return this._studySectionScrollPosition[t] = null, r
			}, r.prototype.getHighlightedGemIndex = function() {
				return this._highlightedGemIndex
			}, r.prototype.clearSelections = function() {
				this._highlightedGemIndex = void 0, this._selectedFootnoteID = void 0, this._selectedEndnoteID = void 0, this._selectedMarginalID = void 0, this._selectedMarginalClass = void 0, this._selectedNoteID = void 0, this._selectedVerseLabelID = void 0, this._selectedParagraphLabelID = void 0
			}, r.prototype.clearHighlightedGem = function() {
				this._highlightedGemIndex = void 0
			}, r.prototype.updateNote = function(t) {
				if (t && t.id > 0 && this._gemContent && this._gemContent.gems)
					for (var r in this._gemContent.gems) {
						var e = this._gemContent.gems[r].notes;
						if (e)
							for (var o in e) {
								if (e[o].id === t.id) return void(e[o] = t)
							}
					}
			}, r.prototype.setCurrentEditingNoteId = function(t) {
				this._currentEditingNoteId = t
			}, r.prototype.getCurrentEditingNoteId = function() {
				return this._currentEditingNoteId
			}, r.prototype.setSelectedPubReferenceVerseNumber = function(t) {
				this._selectedPubReferenceVerseNumber = t
			}, r.prototype.getSelectedPubReferenceVerseNumber = function() {
				return this._selectedPubReferenceVerseNumber
			}, r.prototype.loadMarginalGroupsAndOutline = function() {
				if (!this._marginalGroups && !this._outlineContent && this._gemContent && this._gemContent.gems && this._gemContent.gems.length > 0 && this._gemContent.gems[0].type === l.TYPE_ALL_MARGINALS)
					for (var t in this._marginalGroups = {}, this._gemContent.gems) {
						var r = this._gemContent.gems[t];
						if (r.type === l.TYPE_LOCATION_OUTLINES) {
							var e = r;
							if (e) {
								var o = new Array;
								for (var i in e.outlines) {
									var a;
									a = {
										outline: e.outlines[i],
										language: this._gemContent.language
									}, o.push(a)
								}
								this._outlineContent = {
									type: n.TYPE_OUTLINE,
									items: o
								}
							}
						} else if (r.type === l.TYPE_VERSE) {
							var c = r;
							if (c.marginals) {
								var d = function(t) {
										var r = c.marginals[t],
											e = [];
										for (var o in r.citations.forEach((function(t) {
												e[t.classification] || (e[t.classification] = new Array), e[t.classification].push(t)
											})), e) {
											var i = e[o];
											m._marginalGroups[o] || (m._marginalGroups[o] = new Array), m._marginalGroups[o].push({
												id: r.id,
												classification: parseInt(o, null),
												marker: r.marker,
												verseLabel: r.verseLabel,
												citations: i
											})
										}
									},
									m = this;
								for (var p in c.marginals) d(p)
							}
						}
					}
			}, r
		}(c.EventEmitter));
	a.register((function(t) {
		var r = function(r, e, o) {
			var i = null;
			if (r) {
				var a = null;
				e === d.ScrollTargetType.Footnote ? a = "#fn" + r : e === d.ScrollTargetType.Endnote ? a = "#en" + r : e === d.ScrollTargetType.Note ? a = "#note" + r : e === d.ScrollTargetType.Marginal ? a = "#mar" + r : e === d.ScrollTargetType.VerseLabel ? a = "#lv" + r : e === d.ScrollTargetType.ParagraphLabel && (a = "#lp" + r), a && (i = {
					force: o,
					selector: a
				}, "number" == typeof t.offset && (i.offset = t.offset))
			}
			return i
		};
		switch (t.type) {
			case m.SET_GEM_CONTENT:
				p.setGemContent(t.content, t.showRsgDownloadBox), p.loadMarginalGroupsAndOutline(), p.emitChange();
				break;
			case m.SET_SUPPLEMENTARY_CONTENT:
				p.setSupplementaryContent(t.content, t.animate), p.emitChange(), p.selectSection(d.StudySection.Supplementary, t.animate);
				break;
			case m.SELECT_GEMS_PANE:
				p.selectSection(d.StudySection.Gems, d.STUDY_PANE_ANIMATE_OUT);
				break;
			case m.SELECT_ALL_MARGINALS_PANE:
				p.selectSection(d.StudySection.Marginals, t.animate);
				break;
			case m.SHOW_EXPANDED_OUTLINE:
				var e = p.getOutlineContent();
				e && (p.setSupplementaryContent(e, t.animate), p.emitChange(), p.selectSection(d.StudySection.Supplementary, t.animate));
				break;
			case m.UPDATE_NOTE:
				p.updateNote(t.note), p.emitChange();
				break;
			case m.SELECT_FOOTNOTE:
				if (p.selectFootnote(t.footnoteID), t.scroll) {
					var o = r(t.footnoteID, d.ScrollTargetType.Footnote, !1);
					p.setScrollTargetDescriptor(o)
				}
				p.emitChange(), p.selectSection(d.StudySection.Gems, d.STUDY_PANE_ANIMATE_OUT);
				break;
			case m.SELECT_ENDNOTE:
				if (p.selectEndnote(t.endnoteID), t.scroll) {
					o = r(t.endnoteID, d.ScrollTargetType.Endnote, !1);
					p.setScrollTargetDescriptor(o)
				}
				p.emitChange(), p.selectSection(d.StudySection.Gems, d.STUDY_PANE_ANIMATE_OUT);
				break;
			case m.SELECT_MARGINAL:
				if (p.selectMarginal(t.marginalID, t.marginalClass), t.scroll) {
					o = r(t.marginalID, d.ScrollTargetType.Marginal, !1);
					p.setScrollTargetDescriptor(o)
				}
				p.emitChange();
				break;
			case m.SELECT_VERSE_LABEL:
				if (p.selectVerseLabel(t.verse), t.scroll) {
					o = r(t.verse, d.ScrollTargetType.VerseLabel, !1);
					p.setScrollTargetDescriptor(o)
				}
				p.emitChange();
				break;
			case m.SELECT_PARAGRAPH_LABEL:
				if (p.selectParagraphLabel(t.paragraph), t.scroll) {
					o = r(t.paragraph, d.ScrollTargetType.ParagraphLabel, !1);
					p.setScrollTargetDescriptor(o)
				}
				p.emitChange();
				break;
			case m.SELECT_SECTION:
				p.selectSection(t.section, d.STUDY_PANE_ANIMATE_OUT);
				break;
			case m.SELECT_NOTE:
				if (p.selectNote(t.noteID), t.scroll) {
					o = r(t.noteID, d.ScrollTargetType.Note, !1);
					p.setScrollTargetDescriptor(o)
				}
				p.emitChange(), p.selectSection(d.StudySection.Gems, d.STUDY_PANE_ANIMATE_OUT);
				break;
			case m.SCROLL_TO_ELEMENT:
				o = r(t.id, t.scrollTargetType, !0);
				p.setScrollTargetDescriptor(o), o && p.emitChange();
				break;
			case m.SCROLL_TO_POSITION:
				p.setScrollPosition(t.section, parseFloat(t.scrollPosition)), p.emitChange();
				break;
			case m.ENTER_NOTE_EDIT_MODE:
				p.setCurrentEditingNoteId(t.noteID), p.emitChange();
				break;
			case m.EXIT_NOTE_EDIT_MODE:
				void 0 !== p.getCurrentEditingNoteId() && (p.setCurrentEditingNoteId(void 0), p.emitChange());
				break;
			case m.CLEAR_FOCUSED_GEM:
				p.clearHighlightedGem(), p.emitChange();
				break;
			case m.SELECT_PUBLICATION_REFERENCE:
				p.clearSelections(), p.setSelectedPubReferenceVerseNumber(t.verseNumber), p.emitChange()
		}
	})), t.exports = p
}, function(t, r, e) {
	"use strict";
	Object.defineProperty(r, "__esModule", {
			value: !0
		}), r.TouchEventCallbackType = void 0,
		function(t) {
			t[t.DrawUserMark = 0] = "DrawUserMark", t[t.DrawSelection = 1] = "DrawSelection", t[t.ClearTextSelection = 2] = "ClearTextSelection", t[t.ClearVerseOrParagraphSelection = 3] = "ClearVerseOrParagraphSelection", t[t.StopMediaMarkerFocusing = 4] = "StopMediaMarkerFocusing", t[t.FocusVerseOrParagraph = 5] = "FocusVerseOrParagraph"
		}(r.TouchEventCallbackType || (r.TouchEventCallbackType = {}))
}, function(t, r, e) {
	"use strict";
	var o = e(349),
		i = e(37),
		a = e(39),
		n = e(70),
		l = e(384),
		c = e(30),
		d = function() {
			function t() {}
			return t.drawUserMark = function(r) {
				var e = a.getTokenInfos(r, !0),
					i = [],
					n = o.getCSSClassName(r.color, c.isInDarkMode());
				if (e)
					for (var l = 0, d = e; l < d.length; l++) {
						var m = d[l],
							p = m.element;
						if (p && a.shouldMarkTokenInfo(m, p)) {
							var u = p.getAttribute(t.USER_MARK_COLOR_ATTR);
							u !== n && (p.classList.contains(u) && p.classList.remove(u), p.classList.contains(n) || p.classList.add(n)), i.push(m.elementId), r.isPending ? (p.setAttribute(t.USER_MARK_PEND_COLOR_ATTR, n), p.setAttribute(t.USER_MARK_PEND_ID_ATTR, r.identifier)) : (p.setAttribute(t.USER_MARK_COLOR_ATTR, n), p.setAttribute(t.USER_MARK_ID_ATTR, r.identifier), p.removeAttribute(t.USER_MARK_PEND_COLOR_ATTR), p.removeAttribute(t.USER_MARK_PEND_ID_ATTR))
						}
					}
				var g = t.userMarkTokenInfoElementIDMap[r.identifier];
				if (g)
					for (var s = 0, b = g; s < b.length; s++) {
						var w = b[s]; - 1 === i.indexOf(w) && t._clearUserMarkOnElementWithID(w, r.isPending)
					}
				t.userMarkTokenInfoElementIDMap[r.identifier] = i
			}, t._clearUserMarkOnElementWithID = function(r, e) {
				void 0 === e && (e = !1);
				var o = i.getTokenInfoByElementID(r);
				if (o) {
					var a = o.element;
					if (a) {
						var n = a.getAttribute(t.USER_MARK_PEND_COLOR_ATTR);
						if (n && a.classList.remove(n), a.removeAttribute(t.USER_MARK_PEND_COLOR_ATTR), a.removeAttribute(t.USER_MARK_PEND_ID_ATTR), e) {
							var l = a.getAttribute(t.USER_MARK_COLOR_ATTR);
							l && a.classList.add(l)
						} else(n = a.getAttribute(t.USER_MARK_COLOR_ATTR)) && a.classList.remove(n), a.removeAttribute(t.USER_MARK_COLOR_ATTR), a.removeAttribute(t.USER_MARK_ID_ATTR)
					}
				}
			}, t.clearUserMark = function(r) {
				r && (r.ranges = [], t.drawUserMark(r), this.clearCachedTextLineRectsForMark(r))
			}, t.clearAllUserMarks = function() {
				if (t.userMarkTokenInfoElementIDMap) {
					for (var r in t.userMarkTokenInfoElementIDMap)
						if (t.userMarkTokenInfoElementIDMap.hasOwnProperty(r)) {
							var e = t.userMarkTokenInfoElementIDMap[r];
							if (e) {
								for (var o = 0, i = e; o < i.length; o++) {
									var a = i[o];
									t._clearUserMarkOnElementWithID(a)
								}
								t.userMarkTokenInfoElementIDMap[r] = []
							}
						} t.userMarkTokenInfoElementIDMap = {}
				}
			}, t.serializeSingleLocatedUserMark = function(r, e) {
				var o = l.getLocationFromPrimaryContent();
				return o && r ? {
					location: o,
					userMark: t.serializeUserMark(r, e)
				} : null
			}, t.serializeUserMark = function(t, r) {
				if (t && t.ranges && t.ranges.length > 0) {
					for (var e = [], o = 0, i = t.ranges; o < i.length; o++) {
						var n = i[o];
						e.push(n.toJson())
					}
					var l = a.getFirstClientLineRect(t);
					if (!l && !(l = a.getBoundingClientRect(t))) return null;
					var c = "";
					return r && (c = a.getTextContent(t)), {
						identifier: t.identifier,
						id: t.userMarkID,
						guid: t.userMarkGuid,
						ranges: e,
						text: c,
						rect: l,
						color: t.color,
						style: t.style
					}
				}
				return null
			}, t.getTextLineRectsForMark = function(t) {
				var r = this._textLineRectMap[t.identifier];
				return r || (r = a.getLineRects(t), this._textLineRectMap[t.identifier] = r), r
			}, t.clearTextLineRectMap = function() {
				this._textLineRectMap = null
			}, t.cacheTextLineRects = function() {
				this._textLineRectMap = {};
				for (var t = 0, r = n.getAll(); t < r.length; t++) {
					var e = r[t];
					e.isBlank() || this.cacheTextLineRectsForMark(e)
				}
			}, t.cacheTextLineRectsForMark = function(t) {
				if (t) {
					this._textLineRectMap || (this._textLineRectMap = {});
					var r = t.identifier;
					if (r && "" !== r) {
						var e = a.getLineRects(t);
						e && (this._textLineRectMap[r] = e)
					}
				}
			}, t.clearCachedTextLineRectsForMark = function(t) {
				if (t) {
					var r = t.identifier;
					this._textLineRectMap && r && delete this._textLineRectMap[r]
				}
			}, t.clearCache = function() {
				t.clearTextLineRectMap()
			}, t.USER_MARK_ID_ATTR = "data-jwd-umid", t.USER_MARK_COLOR_ATTR = "data-jwd-hc", t.USER_MARK_PEND_ID_ATTR = "data-jwd-pend-umid", t.USER_MARK_PEND_COLOR_ATTR = "data-jwd-pend-hc", t.userMarkTokenInfoElementIDMap = {}, t._textLineRectMap = {}, t
		}();
	window.addEventListener("clearContentBasedCache", d.clearCache), t.exports = d
}, function(t, r, e) {
	"use strict";
	var o;
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.GestureRecognizer = void 0;
	var i = e(322),
		a = e(373);
	e(395);
	var n = a.Machine({
			id: "gestureRecognizerMachine",
			initial: i.GestureRecognizerState.Possible,
			context: {
				gestureRecognizer: void 0,
				callback: void 0,
				changeEventCount: 0
			},
			states: (o = {}, o[i.GestureRecognizerState.Possible] = {
				entry: "resetChangeEventCount",
				on: {
					BEGAN: i.GestureRecognizerState.Began,
					ENDED: i.GestureRecognizerState.Ended,
					FAILED: i.GestureRecognizerState.Failed
				}
			}, o[i.GestureRecognizerState.Began] = {
				entry: "invokeCallback",
				on: {
					MOVED: i.GestureRecognizerState.Changed,
					ENDED: i.GestureRecognizerState.Ended,
					FAILED: i.GestureRecognizerState.Failed,
					CANCELLED: i.GestureRecognizerState.Cancelled
				}
			}, o[i.GestureRecognizerState.Changed] = {
				entry: ["incrementChangeEventCount", "invokeCallback"],
				on: {
					MOVED: i.GestureRecognizerState.Changed,
					ENDED: i.GestureRecognizerState.Ended,
					FAILED: i.GestureRecognizerState.Failed,
					CANCELLED: i.GestureRecognizerState.Cancelled
				}
			}, o[i.GestureRecognizerState.Ended] = {
				entry: "invokeCallback",
				after: {
					100: {
						target: i.GestureRecognizerState.Possible
					}
				}
			}, o[i.GestureRecognizerState.Failed] = {
				entry: "invokeCallback",
				after: {
					100: {
						target: i.GestureRecognizerState.Possible
					}
				}
			}, o[i.GestureRecognizerState.Cancelled] = {
				entry: "invokeCallback",
				after: {
					100: {
						target: i.GestureRecognizerState.Possible
					}
				}
			}, o)
		}, {
			actions: {
				resetChangeEventCount: a.assign({
					changeEventCount: 0
				}),
				incrementChangeEventCount: a.assign({
					changeEventCount: function(t, r) {
						return t.changeEventCount + 1
					}
				}),
				invokeCallback: function(t, r) {
					t.callback && t.gestureRecognizer && t.callback(t.gestureRecognizer)
				}
			}
		}),
		l = function() {
			function t(t) {
				var r = this;
				this._enabled = !0;
				var e = n.withContext({
					gestureRecognizer: this,
					callback: t,
					changeEventCount: 0
				});
				this._stateMachineService = a.interpret(e).onTransition((function(t) {
					switch (t.value) {
						case i.GestureRecognizerState.Ended:
						case i.GestureRecognizerState.Cancelled:
						case i.GestureRecognizerState.Failed:
							r.reset()
					}
				})), this._stateMachineService.start()
			}
			return t.gesturePointFromEvent = function(t) {
				if (this.hasPointerEventSupport && t instanceof PointerEvent) return {
					clientX: t.clientX,
					clientY: t.clientY,
					pageX: t.pageX,
					pageY: t.pageY
				};
				if ("undefined" != typeof TouchEvent && t instanceof TouchEvent) {
					var r = t.changedTouches[0];
					return {
						clientX: r.clientX,
						clientY: r.clientY,
						pageX: r.pageX,
						pageY: r.pageY
					}
				}
				return {
					clientX: 0,
					clientY: 0,
					pageX: 0,
					pageY: 0
				}
			}, t.pointerIdFromEvent = function(t) {
				return this.hasPointerEventSupport && t instanceof PointerEvent ? t.pointerId : "undefined" != typeof TouchEvent && t instanceof TouchEvent ? t.changedTouches[0].identifier : void 0
			}, Object.defineProperty(t.prototype, "state", {
				get: function() {
					return this._stateMachineService.state.value
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "changeEventCount", {
				get: function() {
					return this._stateMachineService.state.context.changeEventCount
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "lastPointerEvent", {
				get: function() {
					return this._lastPointerEvent
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "clientX", {
				get: function() {
					return t.gesturePointFromEvent(this._lastPointerEvent).clientX
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "clientY", {
				get: function() {
					return t.gesturePointFromEvent(this._lastPointerEvent).clientY
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "pageX", {
				get: function() {
					return t.gesturePointFromEvent(this._lastPointerEvent).pageX
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "pageY", {
				get: function() {
					return t.gesturePointFromEvent(this._lastPointerEvent).pageY
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "pointerType", {
				get: function() {
					var r;
					return t.hasPointerEventSupport && this._lastPointerEvent instanceof PointerEvent ? null === (r = this._lastPointerEvent) || void 0 === r ? void 0 : r.pointerType : "touch"
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "enabled", {
				get: function() {
					return this._enabled
				},
				set: function(t) {
					t || this.state !== i.GestureRecognizerState.Began && this.state !== i.GestureRecognizerState.Changed || this.updateStateWithEvent({
						type: "CANCELLED"
					}, void 0), this._enabled = t
				},
				enumerable: !1,
				configurable: !0
			}), t.prototype.updateStateWithEvent = function(t, r) {
				this.enabled && (this._lastPointerEvent = r, this._stateMachineService.send(t))
			}, t.prototype.pointerCancelled = function(t) {
				this.updateStateWithEvent({
					type: "CANCELLED"
				}, t)
			}, t.prototype.shouldHandleEvent = function(t) {
				return this.enabled
			}, t.prototype.reset = function() {
				this._lastPointerEvent = void 0
			}, t.hasPointerEventSupport = "undefined" != typeof PointerEvent, t
		}();
	r.GestureRecognizer = l
}, , , , function(t, r, e) {
	e(77).polyfill()
}, function(t, r, e) {
	(function(r) {
		(function() {
			var e, o, i, a, n, l;
			"undefined" != typeof performance && null !== performance && performance.now ? t.exports = function() {
				return performance.now()
			} : null != r && r.hrtime ? (t.exports = function() {
				return (e() - n) / 1e6
			}, o = r.hrtime, a = (e = function() {
				var t;
				return 1e9 * (t = o())[0] + t[1]
			})(), l = 1e9 * r.uptime(), n = a - l) : Date.now ? (t.exports = function() {
				return Date.now() - i
			}, i = Date.now()) : (t.exports = function() {
				return (new Date).getTime() - i
			}, i = (new Date).getTime())
		}).call(this)
	}).call(this, e(342))
}, function(t, r) {
	var e, o, i = t.exports = {};

	function a() {
		throw new Error("setTimeout has not been defined")
	}

	function n() {
		throw new Error("clearTimeout has not been defined")
	}

	function l(t) {
		if (e === setTimeout) return setTimeout(t, 0);
		if ((e === a || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
		try {
			return e(t, 0)
		} catch (r) {
			try {
				return e.call(null, t, 0)
			} catch (r) {
				return e.call(this, t, 0)
			}
		}
	}! function() {
		try {
			e = "function" == typeof setTimeout ? setTimeout : a
		} catch (t) {
			e = a
		}
		try {
			o = "function" == typeof clearTimeout ? clearTimeout : n
		} catch (t) {
			o = n
		}
	}();
	var c, d = [],
		m = !1,
		p = -1;

	function u() {
		m && c && (m = !1, c.length ? d = c.concat(d) : p = -1, d.length && g())
	}

	function g() {
		if (!m) {
			var t = l(u);
			m = !0;
			for (var r = d.length; r;) {
				for (c = d, d = []; ++p < r;) c && c[p].run();
				p = -1, r = d.length
			}
			c = null, m = !1,
				function(t) {
					if (o === clearTimeout) return clearTimeout(t);
					if ((o === n || !o) && clearTimeout) return o = clearTimeout, clearTimeout(t);
					try {
						o(t)
					} catch (r) {
						try {
							return o.call(null, t)
						} catch (r) {
							return o.call(this, t)
						}
					}
				}(t)
		}
	}

	function s(t, r) {
		this.fun = t, this.array = r
	}

	function b() {}
	i.nextTick = function(t) {
		var r = new Array(arguments.length - 1);
		if (arguments.length > 1)
			for (var e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
		d.push(new s(t, r)), 1 !== d.length || m || l(g)
	}, s.prototype.run = function() {
		this.fun.apply(null, this.array)
	}, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = b, i.addListener = b, i.once = b, i.off = b, i.removeListener = b, i.removeAllListeners = b, i.emit = b, i.prependListener = b, i.prependOnceListener = b, i.listeners = function(t) {
		return []
	}, i.binding = function(t) {
		throw new Error("process.binding is not supported")
	}, i.cwd = function() {
		return "/"
	}, i.chdir = function(t) {
		throw new Error("process.chdir is not supported")
	}, i.umask = function() {
		return 0
	}
}, function(t, r, e) {
	var o = e(33),
		i = e(344);
	"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
		[t.i, i, ""]
	]);
	var a = {
		insert: "head",
		singleton: !1
	};
	o(i, a);
	t.exports = i.locals || {}
}, function(t, r, e) {
	"use strict";
	e.r(r);
	var o = e(11),
		i = e.n(o),
		a = e(0),
		n = e.n(a),
		l = e(180),
		c = e(181),
		d = e(182),
		m = e(183),
		p = e(184),
		u = e.n(p),
		g = i()(!1),
		s = n()(l.a),
		b = n()(c.a),
		w = n()(d.a),
		f = n()(m.a),
		h = n()(u.a);
}, function(t, r, e) {
	var o = e(33),
		i = e(346);
	"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
		[t.i, i, ""]
	]);
	var a = {
		insert: "head",
		singleton: !1
	};
	o(i, a);
	t.exports = i.locals || {}
}, function(t, r, e) {
	"use strict";
	e.r(r);
	var o = e(11),
		i = e.n(o),
		a = e(0),
		n = e.n(a),
		l = e(185),
		c = e(186),
		d = e(187),
		m = e(188),
		p = e(189),
		u = e(190),
		g = e(191),
		s = e(192),
		b = e(193),
		w = e(194),
		f = e(195),
		h = e(196),
		j = e(197),
		x = e(198),
		y = e(199),
		S = e(200),
		v = e(201),
		O = e(202),
		k = e(203),
		E = e(204),
		C = e(205),
		A = e(206),
		T = e(207),
		I = e(208),
		N = e(209),
		_ = e(210),
		R = e(211),
		M = e(212),
		L = e(213),
		D = e(214),
		P = e(215),
		z = e(216),
		H = e(217),
		G = e(218),
		B = e(219),
		U = e(220),
		W = e(221),
		F = e(222),
		V = e(223),
		K = e(224),
		Y = e(225),
		q = e(226),
		Q = e(227),
		J = e(228),
		X = e(229),
		Z = e(230),
		$ = e(231),
		tt = e(232),
		rt = e(233),
		et = e(234),
		ot = e(235),
		it = e(236),
		at = e(237),
		nt = e(238),
		lt = e(239),
		ct = e(240),
		dt = e(241),
		mt = e(242),
		pt = e(243),
		ut = e(244),
		gt = e(245),
		st = e(246),
		bt = e(247),
		wt = e(248),
		ft = e(249),
		ht = e(250),
		jt = e(251),
		xt = e(252),
		yt = e(253),
		St = e(254),
		vt = e(255),
		Ot = e(256),
		kt = e(257),
		Et = e(258),
		Ct = e(259),
		At = e(260),
		Tt = e(261),
		It = e(262),
		Nt = e(263),
		_t = e(264),
		Rt = e(265),
		Mt = e(266),
		Lt = e(267),
		Dt = e(268),
		Pt = e(269),
		zt = e(270),
		Ht = e(271),
		Gt = e(272),
		Bt = e(273),
		Ut = e(274),
		Wt = e(275),
		Ft = e(276),
		Vt = e(277),
		Kt = e(278),
		Yt = e(279),
		qt = e(280),
		Qt = e(281),
		Jt = e(282),
		Xt = e(283),
		Zt = e(284),
		$t = e(285),
		tr = e(286),
		rr = e(287),
		er = e(288),
		or = e(289),
		ir = e(290),
		ar = e(291),
		nr = e(292),
		lr = e(293),
		cr = i()(!1),
		dr = n()(l.a),
		mr = n()(c.a),
		pr = n()(d.a),
		ur = n()(m.a),
		gr = n()(p.a),
		sr = n()(u.a),
		br = n()(g.a),
		wr = n()(s.a),
		fr = n()(b.a),
		hr = n()(w.a),
		jr = n()(f.a),
		xr = n()(h.a),
		yr = n()(j.a),
		Sr = n()(x.a),
		vr = n()(y.a),
		Or = n()(S.a),
		kr = n()(v.a),
		Er = n()(O.a),
		Cr = n()(k.a),
		Ar = n()(E.a),
		Tr = n()(C.a),
		Ir = n()(A.a),
		Nr = n()(T.a),
		_r = n()(I.a),
		Rr = n()(N.a),
		Mr = n()(_.a),
		Lr = n()(R.a),
		Dr = n()(M.a),
		Pr = n()(L.a),
		zr = n()(D.a),
		Hr = n()(P.a),
		Gr = n()(z.a),
		Br = n()(H.a),
		Ur = n()(G.a),
		Wr = n()(B.a),
		Fr = n()(U.a),
		Vr = n()(W.a),
		Kr = n()(F.a),
		Yr = n()(V.a),
		qr = n()(K.a),
		Qr = n()(Y.a),
		Jr = n()(q.a),
		Xr = n()(Q.a),
		Zr = n()(J.a),
		$r = n()(X.a),
		te = n()(Z.a),
		re = n()($.a),
		ee = n()(tt.a),
		oe = n()(rt.a),
		ie = n()(et.a),
		ae = n()(ot.a),
		ne = n()(it.a),
		le = n()(at.a),
		ce = n()(nt.a),
		de = n()(lt.a),
		me = n()(ct.a),
		pe = n()(dt.a),
		ue = n()(mt.a),
		ge = n()(pt.a),
		se = n()(ut.a),
		be = n()(gt.a),
		we = n()(st.a),
		fe = n()(bt.a),
		he = n()(wt.a),
		je = n()(ft.a),
		xe = n()(ht.a),
		ye = n()(jt.a),
		Se = n()(xt.a),
		ve = n()(yt.a),
		Oe = n()(St.a),
		ke = n()(vt.a),
		Ee = n()(Ot.a),
		Ce = n()(kt.a),
		Ae = n()(Et.a),
		Te = n()(Ct.a),
		Ie = n()(At.a),
		Ne = n()(Tt.a),
		_e = n()(It.a),
		Re = n()(Nt.a),
		Me = n()(_t.a),
		Le = n()(Rt.a),
		De = n()(Mt.a),
		Pe = n()(Lt.a),
		ze = n()(Dt.a),
		He = n()(Pt.a),
		Ge = n()(zt.a),
		Be = n()(Ht.a),
		Ue = n()(Gt.a),
		We = n()(Bt.a),
		Fe = n()(Ut.a),
		Ve = n()(Wt.a),
		Ke = n()(Ft.a),
		Ye = n()(Vt.a),
		qe = n()(Kt.a),
		Qe = n()(Yt.a),
		Je = n()(qt.a),
		Xe = n()(Qt.a),
		Ze = n()(Jt.a),
		$e = n()(Xt.a),
		to = n()(Zt.a),
		ro = n()($t.a),
		eo = n()(tr.a),
		oo = n()(rr.a),
		io = n()(er.a),
		ao = n()(or.a),
		no = n()(ir.a),
		lo = n()(ar.a),
		co = n()(nr.a),
		mo = n()(lr.a);
	cr.push([t.i, "@font-face{font-family:NotoSans;src:url(" + dr + ') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:NotoSans;src:url(' + mr + ') format("woff");font-weight:400;font-style:italic;font-display:swap}@font-face{font-family:NotoSans;src:url(' + pr + ') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:NotoSans;src:url(' + ur + ') format("woff");font-weight:700;font-style:italic;font-display:swap}@font-face{font-family:NotoSerif;src:url(' + gr + ') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:NotoSerif;src:url(' + sr + ') format("woff");font-weight:400;font-style:italic;font-display:swap}@font-face{font-family:NotoSerif;src:url(' + br + ') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:NotoSerif;src:url(' + wr + ') format("woff");font-weight:700;font-style:italic;font-display:swap}@font-face{font-family:NotoSansArmenian;src:url(' + fr + ') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:NotoSansArmenian;src:url(' + hr + ') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:NotoSerifArmenian;src:url(' + jr + ') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:NotoSerifArmenian;src:url(' + xr + ') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:NotoSansGeorgian;src:url(' + yr + ') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:NotoSansGeorgian;src:url(' + Sr + ') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:NotoSerifGeorgian;src:url(' + vr + ') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:NotoSerifGeorgian;src:url(' + Or + ') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:NotoSerifKannada;src:url(' + kr + ') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:NotoSerifKannada;src:url(' + Er + ') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:NotoSansArabic;src:url(' + Cr + ') format("truetype");font-weight:400;font-display:swap}@font-face{font-family:NotoSansArabic;src:url(' + Ar + ') format("truetype");font-weight:700;font-display:swap}@font-face{font-family:NotoNaskhArabic;src:url(' + Tr + ') format("truetype");font-weight:400;font-display:swap}@font-face{font-family:NotoNaskhArabic;src:url(' + Ir + ') format("truetype");font-weight:700;font-display:swap}@font-face{font-family:NotoSansHebrew;src:url(' + Nr + ') format("woff");font-weight:400;font-display:swap}@font-face{font-family:NotoSansHebrew;src:url(' + _r + ') format("woff");font-weight:700;font-display:swap}@font-face{font-family:NotoSerifHebrew;src:url(' + Rr + ') format("woff");font-weight:400;font-display:swap}@font-face{font-family:NotoSerifHebrew;src:url(' + Mr + ') format("woff");font-weight:700;font-display:swap}@font-face{font-family:NotoSansMalayalam;src:url(' + Lr + ') format("woff");font-weight:400;font-display:swap}@font-face{font-family:NotoSansMalayalam;src:url(' + Dr + ') format("woff");font-weight:700;font-display:swap}@font-face{font-family:NotoSansMyanmar;src:url(' + Pr + ') format("woff");font-weight:400;font-display:swap}@font-face{font-family:NotoSansMyanmar;src:url(' + zr + ') format("woff");font-weight:700;font-display:swap}@font-face{font-family:NotoSansTamil;src:url(' + Hr + ') format("woff");font-weight:400;font-display:swap}@font-face{font-family:NotoSansTamil;src:url(' + Gr + ') format("woff");font-weight:700;font-display:swap}@font-face{font-family:NotoSansDevanagari;src:url(' + Br + ') format("woff");font-weight:400;font-display:swap}@font-face{font-family:NotoSansDevanagari;src:url(' + Ur + ') format("woff");font-weight:700;font-display:swap}@font-face{font-family:NotoSerifDevanagari;src:url(' + Wr + ') format("woff");font-weight:400;font-display:swap}@font-face{font-family:NotoSerifDevanagari;src:url(' + Fr + ') format("woff");font-weight:700;font-display:swap}@font-face{font-family:NotoSansBengali;src:url(' + Vr + ') format("woff");font-weight:400;font-display:swap}@font-face{font-family:NotoSansBengali;src:url(' + Kr + ') format("woff");font-weight:700;font-display:swap}@font-face{font-family:NotoSansGujarati;src:url(' + Yr + ') format("woff");font-weight:400;font-display:swap}@font-face{font-family:NotoSansGujarati;src:url(' + qr + ') format("woff");font-weight:700;font-display:swap}@font-face{font-family:NotoSerifGujarati;src:url(' + Qr + ') format("woff");font-weight:400;font-display:swap}@font-face{font-family:NotoSerifGujarati;src:url(' + Jr + ') format("woff");font-weight:700;font-display:swap}@font-face{font-family:NotoSansOriya;src:url(' + Xr + ') format("woff");font-weight:400;font-display:swap}@font-face{font-family:NotoSansOriya;src:url(' + Zr + ') format("woff");font-weight:700;font-display:swap}@font-face{font-family:NotoSansGurmukhi;src:url(' + $r + ') format("woff");font-weight:400;font-display:swap}@font-face{font-family:NotoSansGurmukhi;src:url(' + te + ') format("woff");font-weight:700;font-display:swap}@font-face{font-family:NotoSansSinhala;src:url(' + re + ') format("woff");font-weight:400;font-display:swap}@font-face{font-family:NotoSansSinhala;src:url(' + ee + ') format("woff");font-weight:700;font-display:swap}@font-face{font-family:NotoSansTelugu;src:url(' + oe + ') format("woff");font-weight:400;font-display:swap}@font-face{font-family:NotoSansTelugu;src:url(' + ie + ') format("woff");font-weight:700;font-display:swap}@font-face{font-family:NotoSansTibetan;src:url(' + ae + ') format("woff");font-display:swap}@font-face{font-family:NotoSansKhmer;src:url(' + ne + ') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:NotoSansKhmer;src:url(' + le + ') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:NotoSerifKhmer;src:url(' + ce + ') format("truetype");font-weight:400;font-display:swap}@font-face{font-family:NotoSerifKhmer;src:url(' + de + ') format("truetype");font-weight:700;font-display:swap}@font-face{font-family:NotoSansKannada;src:url(' + me + ') format("woff");font-weight:400;font-display:swap}@font-face{font-family:NotoSansKannada;src:url(' + pe + ') format("woff");font-weight:700;font-display:swap}@font-face{font-family:NotoSansKR;src:url(' + ue + ') format("opentype");font-weight:400;font-display:swap}@font-face{font-family:NotoSansKR;src:url(' + ge + ') format("opentype");font-weight:700;font-display:swap}@font-face{font-family:NotoSansJP;src:url(' + se + ') format("opentype");font-weight:400;font-display:swap}@font-face{font-family:NotoSansJP;src:url(' + be + ') format("opentype");font-weight:700;font-display:swap}@font-face{font-family:NotoSansSC;src:url(' + we + ') format("opentype");font-weight:400;font-display:swap}@font-face{font-family:NotoSansSC;src:url(' + fe + ') format("opentype");font-weight:700;font-display:swap}@font-face{font-family:NotoSansTC;src:url(' + he + ') format("opentype");font-weight:400;font-display:swap}@font-face{font-family:NotoSansTC;src:url(' + je + ') format("opentype");font-weight:700;font-display:swap}@font-face{font-family:KarenText;src:url(' + xe + ') format("truetype");font-display:swap}@font-face{font-family:DejaVuSans;src:url(' + ye + ') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:DejaVuSans;src:url(' + Se + ') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:DejaVuSans;src:url(' + ve + ') format("woff");font-weight:400;font-style:italic;font-display:swap}@font-face{font-family:DejaVuSans;src:url(' + Oe + ') format("woff");font-weight:700;font-style:italic;font-display:swap}@font-face{font-family:AbyssinicaSIL;src:url(' + ke + ') format("woff");font-display:swap}@font-face{font-family:XBZar;src:url(' + Ee + ') format("truetype");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:XBZar;src:url(' + Ce + ') format("truetype");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:XBZar;src:url(' + Ae + ') format("truetype");font-weight:400;font-style:italic;font-display:swap}@font-face{font-family:XBZar;src:url(' + Te + ') format("truetype");font-weight:700;font-style:italic;font-display:swap}@font-face{font-family:Padauk;src:url(' + Ie + ') format("woff");font-display:swap}@font-face{font-family:NafeesNaskh;src:url(' + Ne + ') format("woff");font-display:swap}@font-face{font-family:RobotoEPUB;src:url(' + _e + ') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:RobotoEPUB;src:url(' + Re + ') format("woff");font-weight:400;font-style:italic;font-display:swap}@font-face{font-family:RobotoEPUB;src:url(' + Me + ') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:RobotoEPUB;src:url(' + Le + ') format("woff");font-weight:700;font-style:italic;font-display:swap}@font-face{font-family:WTMannaSansTibetan;src:url(' + De + ') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:WTMannaSansTibetan;src:url(' + Pe + ') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:WTMannaSansMyanmar;src:url(' + ze + ') format("woff");font-weight:400;font-display:swap}@font-face{font-family:WTMannaSansMyanmar;src:url(' + He + ') format("woff");font-weight:700;font-display:swap}@font-face{font-family:WTMannaNastaliqUrdu;src:url(' + Ge + ') format("woff");font-weight:400;font-display:swap}@font-face{font-family:WTMannaNastaliqUrdu;src:url(' + Be + ') format("woff");font-weight:700;font-display:swap}@font-face{font-family:WTClearText;src:url(' + Ue + ') format("woff");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:WTClearText;src:url(' + We + ') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:WTClearText;src:url(' + Fe + ') format("woff");font-weight:500;font-style:italic;font-display:swap}@font-face{font-family:WTClearText;src:url(' + Ve + ') format("woff");font-weight:700;font-style:italic;font-display:swap}@font-face{font-family:WTClearTextJapanese;src:url(' + Ke + ') format("woff");font-display:swap}@font-face{font-family:WTJonathan;src:url(' + Ye + ') format("woff");font-display:swap}@font-face{font-family:WTBaeumMyungjo;src:url(' + qe + ') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:WTBaeumMyungjo;src:url(' + Qe + ') format("woff");font-weight:400;font-style:italic;font-display:swap}@font-face{font-family:WTTextNew;src:url(' + Je + ') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:WTTextNew;src:url(' + Xe + ') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:WTTextNew;src:url(' + Ze + ') format("woff");font-weight:400;font-style:italic;font-display:swap}@font-face{font-family:WTTextNew;src:url(' + $e + ') format("woff");font-weight:700;font-style:italic;font-display:swap}@font-face{font-family:WTFootnote;src:url(' + to + ') format("woff");font-display:swap}@font-face{font-family:WTOmerSansMazahua;src:url(' + ro + ') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:WTOmerSansMazahua;src:url(' + eo + ') format("woff");font-weight:400;font-style:italic;font-display:swap}@font-face{font-family:WTOmerSansMazahua;src:url(' + oo + ') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:WTOmerSansMazahua;src:url(' + io + ') format("woff");font-weight:700;font-style:italic;font-display:swap}@font-face{font-family:WTUKIJSpecial;src:url(' + ao + ') format("woff");font-weight:400;font-display:swap}@font-face{font-family:WTUKIJSpecial;src:url(' + no + ') format("woff");font-weight:400;font-style:italic;font-display:swap}@font-face{font-family:WTUKIJSpecial;src:url(' + lo + ') format("woff");font-weight:700;font-display:swap}@font-face{font-family:WTUKIJSpecial;src:url(' + co + ') format("woff");font-weight:700;font-style:italic;font-display:swap}@font-face{font-family:WTSetthaSpecial;src:url(' + mo + ') format("woff");font-display:swap}\n', ""]), r.default = cr
}, function(t, r, e) {
	var o = e(33),
		i = e(348);
	"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
		[t.i, i, ""]
	]);
	var a = {
		insert: "head",
		singleton: !1
	};
	o(i, a);
	t.exports = i.locals || {}
}, function(t, r, e) {
	"use strict";
	e.r(r);
	var o = e(11),
		i = e.n(o),
		a = e(0),
		n = e.n(a),
		l = e(102),
		c = e(103),
		d = e(104),
		m = e(105),
		p = e(106),
		u = e(107),
		g = e(108),
		s = e(109),
		b = e(110),
		w = e(111),
		f = e(112),
		h = e(113),
		j = e(114),
		x = e(115),
		y = e(116),
		S = e(117),
		v = e(118),
		O = e(119),
		k = e(120),
		E = e(121),
		C = e(122),
		A = e(123),
		T = e(124),
		I = e(125),
		N = e(126),
		_ = e(127),
		R = e(128),
		M = e(129),
		L = e(130),
		D = e(131),
		P = e(132),
		z = e(133),
		H = e(134),
		G = e(135),
		B = e(136),
		U = e(137),
		W = e(138),
		F = e(139),
		V = e(140),
		K = e(141),
		Y = e(142),
		q = e(143),
		Q = e(144),
		J = e(145),
		X = e(146),
		Z = e(147),
		$ = e(148),
		tt = e(149),
		rt = e(150),
		et = e(151),
		ot = e(152),
		it = e(153),
		at = e(154),
		nt = e(155),
		lt = e(156),
		ct = e(157),
		dt = e(158),
		mt = e(159),
		pt = e(160),
		ut = e(161),
		gt = i()(!1),
		st = n()(l.a),
		bt = n()(c.a),
		wt = n()(d.a),
		ft = n()(m.a),
		ht = n()(p.a),
		jt = n()(u.a),
		xt = n()(g.a),
		yt = n()(s.a),
		St = n()(b.a),
		vt = n()(w.a),
		Ot = n()(f.a),
		kt = n()(h.a),
		Et = n()(j.a),
		Ct = n()(x.a),
		At = n()(y.a),
		Tt = n()(S.a),
		It = n()(v.a),
		Nt = n()(O.a),
		_t = n()(k.a),
		Rt = n()(E.a),
		Mt = n()(C.a),
		Lt = n()(A.a),
		Dt = n()(T.a),
		Pt = n()(I.a),
		zt = n()(N.a),
		Ht = n()(_.a),
		Gt = n()(R.a),
		Bt = n()(M.a),
		Ut = n()(L.a),
		Wt = n()(D.a),
		Ft = n()(P.a),
		Vt = n()(z.a),
		Kt = n()(H.a),
		Yt = n()(G.a),
		qt = n()(B.a),
		Qt = n()(U.a),
		Jt = n()(W.a),
		Xt = n()(F.a),
		Zt = n()(V.a),
		$t = n()(K.a),
		tr = n()(Y.a),
		rr = n()(q.a),
		er = n()(Q.a),
		or = n()(J.a),
		ir = n()(X.a),
		ar = n()(Z.a),
		nr = n()($.a),
		lr = n()(tt.a),
		cr = n()(rt.a),
		dr = n()(et.a),
		mr = n()(ot.a),
		pr = n()(it.a),
		ur = n()(at.a),
		gr = n()(nt.a),
		sr = n()(lt.a),
		br = n()(ct.a),
		wr = n()(dt.a),
		fr = n()(mt.a),
		hr = n()(pt.a),
		jr = n()(ut.a);
	gt.push([t.i, ".bookmark{display:inline-block;height:18px;width:10px;margin-top:0.5ex}.dir-ltr .bookmark{float:left}.dir-rtl .bookmark{float:right}.cc-theme--light .bookmark-0{background-image:url(" + st + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-0{background-image:url(" + bt + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-0{background-image:url(" + wt + ");background-size:10px 18px}}.cc-theme--light .bookmark-1{background-image:url(" + ft + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-1{background-image:url(" + ht + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-1{background-image:url(" + jt + ");background-size:10px 18px}}.cc-theme--light .bookmark-2{background-image:url(" + xt + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-2{background-image:url(" + yt + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-2{background-image:url(" + St + ");background-size:10px 18px}}.cc-theme--light .bookmark-3{background-image:url(" + vt + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-3{background-image:url(" + Ot + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-3{background-image:url(" + kt + ");background-size:10px 18px}}.cc-theme--light .bookmark-4{background-image:url(" + Et + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-4{background-image:url(" + Ct + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-4{background-image:url(" + At + ");background-size:10px 18px}}.cc-theme--light .bookmark-5{background-image:url(" + Tt + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-5{background-image:url(" + It + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-5{background-image:url(" + Nt + ");background-size:10px 18px}}.cc-theme--light .bookmark-6{background-image:url(" + _t + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-6{background-image:url(" + Rt + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-6{background-image:url(" + Mt + ");background-size:10px 18px}}.cc-theme--light .bookmark-7{background-image:url(" + Lt + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-7{background-image:url(" + Dt + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-7{background-image:url(" + Pt + ");background-size:10px 18px}}.cc-theme--light .bookmark-8{background-image:url(" + zt + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-8{background-image:url(" + Ht + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-8{background-image:url(" + Gt + ");background-size:10px 18px}}.cc-theme--light .bookmark-9{background-image:url(" + Bt + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-9{background-image:url(" + Ut + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-9{background-image:url(" + Wt + ");background-size:10px 18px}}.cc-theme--dark .bookmark-0{background-image:url(" + Ft + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-0{background-image:url(" + Vt + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-0{background-image:url(" + Kt + ");background-size:10px 18px}}.cc-theme--dark .bookmark-1{background-image:url(" + Yt + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-1{background-image:url(" + qt + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-1{background-image:url(" + Qt + ");background-size:10px 18px}}.cc-theme--dark .bookmark-2{background-image:url(" + Jt + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-2{background-image:url(" + Xt + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-2{background-image:url(" + Zt + ");background-size:10px 18px}}.cc-theme--dark .bookmark-3{background-image:url(" + $t + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-3{background-image:url(" + tr + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-3{background-image:url(" + rr + ");background-size:10px 18px}}.cc-theme--dark .bookmark-4{background-image:url(" + er + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-4{background-image:url(" + or + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-4{background-image:url(" + ir + ");background-size:10px 18px}}.cc-theme--dark .bookmark-5{background-image:url(" + ar + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-5{background-image:url(" + nr + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-5{background-image:url(" + lr + ");background-size:10px 18px}}.cc-theme--dark .bookmark-6{background-image:url(" + cr + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-6{background-image:url(" + dr + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-6{background-image:url(" + mr + ");background-size:10px 18px}}.cc-theme--dark .bookmark-7{background-image:url(" + pr + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-7{background-image:url(" + ur + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-7{background-image:url(" + gr + ");background-size:10px 18px}}.cc-theme--dark .bookmark-8{background-image:url(" + sr + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-8{background-image:url(" + br + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-8{background-image:url(" + wr + ");background-size:10px 18px}}.cc-theme--dark .bookmark-9{background-image:url(" + fr + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-9{background-image:url(" + hr + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-9{background-image:url(" + jr + ");background-size:10px 18px}}@font-face{font-family:'DeviceUI';font-weight:200;src:local(\"Segoe UI Light\")}@font-face{font-family:'DeviceUI';font-weight:300;src:local(\"Segoe UI Semilight\")}@font-face{font-family:'DeviceUI';font-weight:400;src:local(\"Segoe UI\")}@font-face{font-family:'DeviceUI';font-weight:600;src:local(\"Segoe UI Semibold\")}@font-face{font-family:'DeviceUI';font-weight:700;src:local(\"Segoe UI Bold\")}.cc-theme--light ::selection{background:#2F8AC9;color:#FFFFFF}.cc-theme--dark ::selection{background:#1971AC;color:#FFFFFF}body{padding:0;-ms-content-zooming:none;pen-action:none}#debug{background:#333333;color:#999999;display:none;font-family:monospace;font-size:0.8em;opacity:0.95;position:fixed;right:0;top:0;z-index:999}#debug .error{color:#cc0000}.dir-ltr .m.pr span.tt.m{left:.75em}.dir-rtl .m.pr span.tt.m{right:.75em}span.tt.vl{top:-0.1em}.dir-ltr span.tt.vl{left:-.25em}.dir-rtl span.tt.vl{right:-.25em}span.tt.cl{top:0.05em;height:0.6em}.dir-ltr span.tt.cl{left:-.075em}.dir-rtl span.tt.cl{right:-.075em}.speedbar{background:white;bottom:4px;opacity:0;position:fixed;right:0;top:4px;touch-action:none;width:32px}.speedbar>.scrollbar{background-color:white;border-radius:0;height:100%;opacity:0;position:absolute;right:0;transition:none;width:1em}.speedbar>.scrollbar>.track{width:1em}.speedbar>.scrollbar>.track>.thumb{background-color:transparent}.outline a.it{position:relative;z-index:20}.jwac figure:not(.gen-flipbook){display:block}\n", ""]), r.default = gt
}, function(t, r, e) {
	"use strict";
	var o = e(8),
		i = e(382),
		a = function() {
			function t() {}
			return t.getNoteColor = function(r, e) {
				if (e) switch (r) {
					case o.UserMarkColor.None:
						return t.NoteGrayDarkColor;
					case o.UserMarkColor.Yellow:
						return t.NoteYellowDarkColor;
					case o.UserMarkColor.Green:
						return t.NoteGreenDarkColor;
					case o.UserMarkColor.Blue:
						return t.NoteBlueDarkColor;
					case o.UserMarkColor.Pink:
						return t.NotePinkDarkColor;
					case o.UserMarkColor.Purple:
						return t.NotePurpleDarkColor;
					case o.UserMarkColor.Orange:
						return t.NoteOrangeDarkColor
				}
				switch (r) {
					case o.UserMarkColor.None:
						return t.NoteGrayColor;
					case o.UserMarkColor.Yellow:
						return t.NoteYellowColor;
					case o.UserMarkColor.Green:
						return t.NoteGreenColor;
					case o.UserMarkColor.Blue:
						return t.NoteBlueColor;
					case o.UserMarkColor.Pink:
						return t.NotePinkColor;
					case o.UserMarkColor.Purple:
						return t.NotePurpleColor;
					case o.UserMarkColor.Orange:
						return t.NoteOrangeColor
				}
				return null
			}, t.getUserMarkColor = function(r, e) {
				if (e) switch (r) {
					case o.UserMarkColor.Yellow:
						return t.UserMarkYellowDarkColor;
					case o.UserMarkColor.Green:
						return t.UserMarkGreenDarkColor;
					case o.UserMarkColor.Blue:
						return t.UserMarkBlueDarkColor;
					case o.UserMarkColor.Pink:
						return t.UserMarkPinkDarkColor;
					case o.UserMarkColor.Purple:
						return t.UserMarkPurpleDarkColor;
					case o.UserMarkColor.Orange:
						return t.UserMarkOrangeDarkColor
				}
				switch (r) {
					case o.UserMarkColor.Yellow:
						return t.UserMarkYellowColor;
					case o.UserMarkColor.Green:
						return t.UserMarkGreenColor;
					case o.UserMarkColor.Blue:
						return t.UserMarkBlueColor;
					case o.UserMarkColor.Pink:
						return t.UserMarkPinkColor;
					case o.UserMarkColor.Purple:
						return t.UserMarkPurpleColor;
					case o.UserMarkColor.Orange:
						return t.UserMarkOrangeColor
				}
				return null
			}, t.getUserMarkColorRGBA = function(r, e) {
				return this.colorRGBAFromCSS(t.getUserMarkColor(r, e))
			}, t.getSearchTermColorRGBA = function() {
				var t = this.colorCSSFromMap("search-term");
				return this.colorRGBAFromCSS(t)
			}, t.getCSSClassName = function(t, r) {
				var e = "highlight_color_",
					i = r ? "_dark" : "";
				switch (t) {
					case o.UserMarkColor.Yellow:
						return e + "yellow" + i;
					case o.UserMarkColor.Green:
						return e + "green" + i;
					case o.UserMarkColor.Blue:
						return e + "blue" + i;
					case o.UserMarkColor.Pink:
						return e + "pink" + i;
					case o.UserMarkColor.Purple:
						return e + "purple" + i;
					case o.UserMarkColor.Orange:
						return e + "orange" + i
				}
				return null
			}, t.colorRGBAFromCSS = function(t) {
				return t.replace(/rgba\(|\)/gi, "").split(",").map((function(t) {
					return parseFloat(t)
				}))
			}, t.colorCSSFromMap = function(t) {
				return i[t]
			}, t.NoteGrayColor = t.colorCSSFromMap("note-gray"), t.NoteYellowColor = t.colorCSSFromMap("note-yellow"), t.NoteGreenColor = t.colorCSSFromMap("note-green"), t.NoteBlueColor = t.colorCSSFromMap("note-blue"), t.NotePinkColor = t.colorCSSFromMap("note-pink"), t.NotePurpleColor = t.colorCSSFromMap("note-purple"), t.NoteOrangeColor = t.colorCSSFromMap("note-orange"), t.NoteGrayDarkColor = t.colorCSSFromMap("note-gray-dark"), t.NoteYellowDarkColor = t.colorCSSFromMap("note-yellow-dark"), t.NoteGreenDarkColor = t.colorCSSFromMap("note-green-dark"), t.NoteBlueDarkColor = t.colorCSSFromMap("note-blue-dark"), t.NotePinkDarkColor = t.colorCSSFromMap("note-pink-dark"), t.NotePurpleDarkColor = t.colorCSSFromMap("note-purple-dark"), t.NoteOrangeDarkColor = t.colorCSSFromMap("note-orange-dark"), t.UserMarkYellowColor = t.colorCSSFromMap("highlight-yellow"), t.UserMarkGreenColor = t.colorCSSFromMap("highlight-green"), t.UserMarkBlueColor = t.colorCSSFromMap("highlight-blue"), t.UserMarkPinkColor = t.colorCSSFromMap("highlight-pink"), t.UserMarkPurpleColor = t.colorCSSFromMap("highlight-purple"), t.UserMarkOrangeColor = t.colorCSSFromMap("highlight-orange"), t.UserMarkYellowDarkColor = t.colorCSSFromMap("highlight-yellow-dark"), t.UserMarkGreenDarkColor = t.colorCSSFromMap("highlight-green-dark"), t.UserMarkBlueDarkColor = t.colorCSSFromMap("highlight-blue-dark"), t.UserMarkPinkDarkColor = t.colorCSSFromMap("highlight-pink-dark"), t.UserMarkPurpleDarkColor = t.colorCSSFromMap("highlight-purple-dark"), t.UserMarkOrangeDarkColor = t.colorCSSFromMap("highlight-orange-dark"), t
		}();
	t.exports = a
}, function(t, r, e) {
	"use strict";
	var o = e(8),
		i = e(367),
		a = e(35),
		n = e(25),
		l = e(28),
		c = e(50),
		d = e(368),
		m = function() {
			var t = this;
			this.linkTapHandler = function(r) {
				var e = r.target;
				t.linkTapHandleElement(e) && (r.preventDefault(), r.stopPropagation())
			}, this.linkTapHandleElement = function(t) {
				for (var r = !1; t && "A" !== t.tagName.toUpperCase();) t = t.parentElement;
				if (t)
					if (t.classList.contains("b") || t.classList.contains("xt")) {
						r = !0;
						var e = void 0,
							m = void 0,
							p = void 0,
							u = void 0,
							g = void 0,
							s = void 0,
							b = t.getAttribute("href");
						if (t.classList.contains("b")) e = o.ExtractionType.BibleCitation, m = i.TYPE_BIBLE_CITATION, p = t.getAttribute("data-bid");
						else {
							e = o.ExtractionType.Extraction, m = i.TYPE_EXTRACTION, p = t.getAttribute("data-xtid");
							var w = c.ancestorElementWithClass(t, "jwl-extraction-item");
							w && (u = w.getAttribute("data-pubsymbol"), g = w.getAttribute("data-publanguage"), s = w.getAttribute("data-pubissue"))
						}
						a.selectExtraction(e, p, b, !1);
						var f = void 0;
						f = u && g && s ? {
							type: l.NATIVE_ACTION_REQUEST_EXTRACTION,
							extractionType: m,
							extractionID: p,
							jwPubLink: b,
							pubSymbol: u,
							pubLanguage: g,
							pubIssue: s
						} : {
							type: l.NATIVE_ACTION_REQUEST_EXTRACTION,
							extractionType: m,
							extractionID: p,
							jwPubLink: b
						}, n.send(f)
					} else if (t.classList.contains("fn-symbol")) {
					r = !0;
					var h = t.getAttribute("href"),
						j = "#footnotesource";
					if (h.startsWith(j)) {
						var x = Number(h.substring(j.length));
						a.selectFootnote(x, !1)
					}
				} else if (t.getAttribute("href").startsWith("#endnotesource")) {
					r = !0;
					var y = t.getAttribute("href"),
						S = (j = "#endnotesource", Number(y.substring(j.length)));
					a.selectEndnote(S, !1)
				} else {
					var v = t,
						O = v.getAttribute("data-video"),
						k = v.getAttribute("data-audio"),
						E = v.getAttribute("data-online-link");
					if (O || k) {
						var C = O || k,
							A = v.getBoundingClientRect(),
							T = {
								left: A.left,
								top: A.top,
								width: A.width,
								height: A.height
							},
							I = new d(C);
						r = !0, n.send({
							type: l.NATIVE_ACTION_REQUEST_MEDIA,
							fallbackURL: v.href,
							attributes: I.getQuery(),
							mediaType: O ? "video" : "audio",
							rect: T
						})
					} else if (E) r = !0, n.send({
						type: l.NATIVE_ACTION_NAVIGATE_ONLINE_LINK,
						uri: E,
						fallbackUri: v.href
					});
					else if (v.href) {
						var N = v.hasAttribute("data-citation") ? v.getAttribute("data-citation") : v.href,
							_ = null;
						r = !0, _ = "jwpub://" === N.substr(0, 8) ? N.replace("jwpub://", "jwlibrary://v1/jwpub/") : N, n.send({
							type: l.NATIVE_ACTION_NAVIGATE,
							uri: _,
							fallbackUri: v.hasAttribute("data-citation") ? v.href : null
						})
					}
				}
				return r
			}
		};
	t.exports = m
}, function(t, r, e) {
	"use strict";
	var o = e(8),
		i = function() {
			function t() {}
			return t.setAppearance = function(t, r) {
				switch (t.classList.remove("cc-theme--light"), t.classList.remove("cc-theme--dark"), r) {
					case o.Appearance.Light:
						t.classList.add("cc-theme--light");
						break;
					case o.Appearance.Dark:
						t.classList.add("cc-theme--dark")
				}
			}, t
		}();
	t.exports = i
}, , , , , , function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(34),
		n = e(43),
		l = e(29),
		c = new(function(t) {
			function r() {
				var r = t.call(this) || this;
				return r.CHANGE_EVENT = "change", r._tagItems = [], r
			}
			return i(r, t), r.prototype.emitChange = function() {
				this.emit(this.CHANGE_EVENT)
			}, r.prototype.setTags = function(t) {
				t || (t = []), this._tagItems = t
			}, r.prototype.getTags = function() {
				return this._tagItems
			}, r.prototype.addChangeListener = function(t) {
				this.on(this.CHANGE_EVENT, t)
			}, r.prototype.removeChangeListener = function(t) {
				this.removeListener(this.CHANGE_EVENT, t)
			}, r
		}(n.EventEmitter));
	a.register((function(t) {
		switch (t.type) {
			case l.SET_TAGS:
				c.setTags(t.tags), c.emitChange()
		}
	})), t.exports = c
}, , function(t, r) {
	t.exports = function(t, r) {
		t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r
	}
}, function(t, r, e) {
	"use strict";
	Object.defineProperty(r, "__esModule", {
		value: !0
	});
	var o, i = e(2),
		a = (o = i) && "object" == typeof o && "default" in o ? o.default : o,
		n = new(e(423)),
		l = n.getBrowser(),
		c = (n.getCPU(), n.getDevice()),
		d = n.getEngine(),
		m = n.getOS(),
		p = n.getUA(),
		u = function(t) {
			var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
			return t || r
		},
		g = function() {
			return !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
		},
		s = function(t) {
			var r = g();
			return r && r.platform && (-1 !== r.platform.indexOf(t) || "MacIntel" === r.platform && r.maxTouchPoints > 1 && !window.MSStream)
		};

	function b(t) {
		return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function w(t, r) {
		for (var e = 0; e < r.length; e++) {
			var o = r[e];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
		}
	}

	function f(t, r, e) {
		return r in t ? Object.defineProperty(t, r, {
			value: e,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[r] = e, t
	}

	function h() {
		return (h = Object.assign || function(t) {
			for (var r = 1; r < arguments.length; r++) {
				var e = arguments[r];
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			}
			return t
		}).apply(this, arguments)
	}

	function j(t, r) {
		var e = Object.keys(t);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(t);
			r && (o = o.filter((function(r) {
				return Object.getOwnPropertyDescriptor(t, r).enumerable
			}))), e.push.apply(e, o)
		}
		return e
	}

	function x(t) {
		return (x = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function y(t, r) {
		return (y = Object.setPrototypeOf || function(t, r) {
			return t.__proto__ = r, t
		})(t, r)
	}

	function S(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}
	var v = "mobile",
		O = "tablet",
		k = "smarttv",
		E = "console",
		C = "wearable",
		A = void 0,
		T = "Chrome",
		I = "Firefox",
		N = "Opera",
		_ = "Yandex",
		R = "Safari",
		M = "Internet Explorer",
		L = "Edge",
		D = "Chromium",
		P = "IE",
		z = "Mobile Safari",
		H = "MIUI Browser",
		G = "iOS",
		B = "Android",
		U = "Windows Phone",
		W = "Windows",
		F = "Mac OS",
		V = {
			isMobile: !1,
			isTablet: !1,
			isBrowser: !1,
			isSmartTV: !1,
			isConsole: !1,
			isWearable: !1
		},
		K = function(t, r, e, o) {
			return function(t) {
				for (var r = 1; r < arguments.length; r++) {
					var e = null != arguments[r] ? arguments[r] : {};
					r % 2 ? j(e, !0).forEach((function(r) {
						f(t, r, e[r])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : j(e).forEach((function(r) {
						Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
					}))
				}
				return t
			}({}, t, {
				vendor: u(r.vendor),
				model: u(r.model),
				os: u(e.name),
				osVersion: u(e.version),
				ua: u(o)
			})
		},
		Y = function(t) {
			switch (t) {
				case v:
					return {
						isMobile: !0
					};
				case O:
					return {
						isTablet: !0
					};
				case k:
					return {
						isSmartTV: !0
					};
				case E:
					return {
						isConsole: !0
					};
				case C:
					return {
						isWearable: !0
					};
				case A:
					return {
						isBrowser: !0
					};
				default:
					return V
			}
		}(c.type);
	var q, Q = function() {
			return "string" == typeof p && -1 !== p.indexOf("Edg/")
		},
		J = function() {
			return l.name === L
		},
		X = function() {
			return s("iPad")
		},
		Z = c.type === k,
		$ = c.type === E,
		tt = c.type === C,
		rt = l.name === z || X(),
		et = l.name === D,
		ot = function() {
			switch (c.type) {
				case v:
				case O:
					return !0;
				default:
					return !1
			}
		}() || X(),
		it = c.type === v,
		at = c.type === O || X(),
		nt = c.type === A,
		lt = m.name === B,
		ct = m.name === U,
		dt = m.name === G || X(),
		mt = l.name === T,
		pt = l.name === I,
		ut = l.name === R || l.name === z,
		gt = l.name === N,
		st = l.name === M || l.name === P,
		bt = u(m.version),
		wt = u(m.name),
		ft = u(l.version),
		ht = u(l.major),
		jt = u(l.name),
		xt = u(c.vendor),
		yt = u(c.model),
		St = u(d.name),
		vt = u(d.version),
		Ot = u(p),
		kt = J() || Q(),
		Et = l.name === _,
		Ct = u(c.type, "browser"),
		At = (q = g()) && (/iPad|iPhone|iPod/.test(q.platform) || "MacIntel" === q.platform && q.maxTouchPoints > 1) && !window.MSStream,
		Tt = X(),
		It = s("iPhone"),
		Nt = s("iPod"),
		_t = function() {
			var t = g(),
				r = t && t.userAgent.toLowerCase();
			return "string" == typeof r && /electron/.test(r)
		}(),
		Rt = Q(),
		Mt = J() && !Q(),
		Lt = m.name === W,
		Dt = m.name === F,
		Pt = l.name === H;
	r.AndroidView = function(t) {
		var r = t.renderWithFragment,
			e = t.children,
			o = t.viewClassName,
			n = t.style;
		return lt ? r ? a.createElement(i.Fragment, null, e) : a.createElement("div", {
			className: o,
			style: n
		}, e) : null
	}, r.BrowserView = function(t) {
		var r = t.renderWithFragment,
			e = t.children,
			o = t.viewClassName,
			n = t.style;
		return nt ? r ? a.createElement(i.Fragment, null, e) : a.createElement("div", {
			className: o,
			style: n
		}, e) : null
	}, r.ConsoleView = function(t) {
		var r = t.renderWithFragment,
			e = t.children,
			o = t.viewClassName,
			n = t.style;
		return $ ? r ? a.createElement(i.Fragment, null, e) : a.createElement("div", {
			className: o,
			style: n
		}, e) : null
	}, r.CustomView = function(t) {
		var r = t.renderWithFragment,
			e = t.children,
			o = t.viewClassName,
			n = t.style;
		return t.condition ? r ? a.createElement(i.Fragment, null, e) : a.createElement("div", {
			className: o,
			style: n
		}, e) : null
	}, r.IEView = function(t) {
		var r = t.renderWithFragment,
			e = t.children,
			o = t.viewClassName,
			n = t.style;
		return st ? r ? a.createElement(i.Fragment, null, e) : a.createElement("div", {
			className: o,
			style: n
		}, e) : null
	}, r.IOSView = function(t) {
		var r = t.renderWithFragment,
			e = t.children,
			o = t.viewClassName,
			n = t.style;
		return dt ? r ? a.createElement(i.Fragment, null, e) : a.createElement("div", {
			className: o,
			style: n
		}, e) : null
	}, r.MobileOnlyView = function(t) {
		var r = t.renderWithFragment,
			e = t.children,
			o = t.viewClassName,
			n = t.style;
		return it ? r ? a.createElement(i.Fragment, null, e) : a.createElement("div", {
			className: o,
			style: n
		}, e) : null
	}, r.MobileView = function(t) {
		var r = t.renderWithFragment,
			e = t.children,
			o = t.viewClassName,
			n = t.style;
		return ot ? r ? a.createElement(i.Fragment, null, e) : a.createElement("div", {
			className: o,
			style: n
		}, e) : null
	}, r.SmartTVView = function(t) {
		var r = t.renderWithFragment,
			e = t.children,
			o = t.viewClassName,
			n = t.style;
		return Z ? r ? a.createElement(i.Fragment, null, e) : a.createElement("div", {
			className: o,
			style: n
		}, e) : null
	}, r.TabletView = function(t) {
		var r = t.renderWithFragment,
			e = t.children,
			o = t.viewClassName,
			n = t.style;
		return at ? r ? a.createElement(i.Fragment, null, e) : a.createElement("div", {
			className: o,
			style: n
		}, e) : null
	}, r.WearableView = function(t) {
		var r = t.renderWithFragment,
			e = t.children,
			o = t.viewClassName,
			n = t.style;
		return tt ? r ? a.createElement(i.Fragment, null, e) : a.createElement("div", {
			className: o,
			style: n
		}, e) : null
	}, r.WinPhoneView = function(t) {
		var r = t.renderWithFragment,
			e = t.children,
			o = t.viewClassName,
			n = t.style;
		return ct ? r ? a.createElement(i.Fragment, null, e) : a.createElement("div", {
			className: o,
			style: n
		}, e) : null
	}, r.browserName = jt, r.browserVersion = ht, r.deviceDetect = function() {
		var t = Y.isBrowser,
			r = Y.isMobile,
			e = Y.isTablet,
			o = Y.isSmartTV,
			i = Y.isConsole,
			a = Y.isWearable;
		return t ? function(t, r, e, o, i) {
			return {
				isBrowser: t,
				browserMajorVersion: u(r.major),
				browserFullVersion: u(r.version),
				browserName: u(r.name),
				engineName: u(e.name),
				engineVersion: u(e.version),
				osName: u(o.name),
				osVersion: u(o.version),
				userAgent: u(i)
			}
		}(t, l, d, m, p) : o ? function(t, r, e, o) {
			return {
				isSmartTV: t,
				engineName: u(r.name),
				engineVersion: u(r.version),
				osName: u(e.name),
				osVersion: u(e.version),
				userAgent: u(o)
			}
		}(o, d, m, p) : i ? function(t, r, e, o) {
			return {
				isConsole: t,
				engineName: u(r.name),
				engineVersion: u(r.version),
				osName: u(e.name),
				osVersion: u(e.version),
				userAgent: u(o)
			}
		}(i, d, m, p) : r || e ? K(Y, c, m, p) : a ? function(t, r, e, o) {
			return {
				isWearable: t,
				engineName: u(r.name),
				engineVersion: u(r.version),
				osName: u(e.name),
				osVersion: u(e.version),
				userAgent: u(o)
			}
		}(a, d, m, p) : void 0
	}, r.deviceType = Ct, r.engineName = St, r.engineVersion = vt, r.fullBrowserVersion = ft, r.getUA = Ot, r.isAndroid = lt, r.isBrowser = nt, r.isChrome = mt, r.isChromium = et, r.isConsole = $, r.isEdge = kt, r.isEdgeChromium = Rt, r.isElectron = _t, r.isFirefox = pt, r.isIE = st, r.isIOS = dt, r.isIOS13 = At, r.isIPad13 = Tt, r.isIPhone13 = It, r.isIPod13 = Nt, r.isLegacyEdge = Mt, r.isMIUI = Pt, r.isMacOs = Dt, r.isMobile = ot, r.isMobileOnly = it, r.isMobileSafari = rt, r.isOpera = gt, r.isSafari = ut, r.isSmartTV = Z, r.isTablet = at, r.isWearable = tt, r.isWinPhone = ct, r.isWindows = Lt, r.isYandex = Et, r.mobileModel = yt, r.mobileVendor = xt, r.osName = wt, r.osVersion = bt, r.withOrientationChange = function(t) {
		return function(r) {
			function e(t) {
				var r;
				return function(t, r) {
					if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
				}(this, e), (r = function(t, r) {
					return !r || "object" != typeof r && "function" != typeof r ? S(t) : r
				}(this, x(e).call(this, t))).isEventListenerAdded = !1, r.handleOrientationChange = r.handleOrientationChange.bind(S(r)), r.onOrientationChange = r.onOrientationChange.bind(S(r)), r.onPageLoad = r.onPageLoad.bind(S(r)), r.state = {
					isLandscape: !1,
					isPortrait: !1
				}, r
			}
			var o, i, n;
			return function(t, r) {
				if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(r && r.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), r && y(t, r)
			}(e, r), o = e, (i = [{
				key: "handleOrientationChange",
				value: function() {
					this.isEventListenerAdded || (this.isEventListenerAdded = !0);
					var t = window.innerWidth > window.innerHeight ? 90 : 0;
					this.setState({
						isPortrait: 0 === t,
						isLandscape: 90 === t
					})
				}
			}, {
				key: "onOrientationChange",
				value: function() {
					this.handleOrientationChange()
				}
			}, {
				key: "onPageLoad",
				value: function() {
					this.handleOrientationChange()
				}
			}, {
				key: "componentDidMount",
				value: function() {
					void 0 !== ("undefined" == typeof window ? "undefined" : b(window)) && ot && (this.isEventListenerAdded ? window.removeEventListener("load", this.onPageLoad, !1) : (this.handleOrientationChange(), window.addEventListener("load", this.onPageLoad, !1)), window.addEventListener("resize", this.onOrientationChange, !1))
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					window.removeEventListener("resize", this.onOrientationChange, !1)
				}
			}, {
				key: "render",
				value: function() {
					return a.createElement(t, h({}, this.props, {
						isLandscape: this.state.isLandscape,
						isPortrait: this.state.isPortrait
					}))
				}
			}]) && w(o.prototype, i), n && w(o, n), e
		}(a.Component)
	}
}, function(t, r, e) {
	var o = e(33),
		i = e(362);
	"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
		[t.i, i, ""]
	]);
	var a = {
		insert: "head",
		singleton: !1
	};
	o(i, a);
	t.exports = i.locals || {}
}, function(t, r, e) {
	"use strict";
	e.r(r);
	var o = e(11),
		i = e.n(o)()(!1);
	i.push([t.i, ".cl,.vl,.m,.fn,.en{position:relative;display:inline}span.tt{box-sizing:content-box;display:inline-block;position:absolute;opacity:0;height:1.5em;border-radius:2px;z-index:10;cursor:pointer}span.tt.selected{background-color:#9d9d9d;opacity:0.3}span.tt.m{border-radius:1.5em;width:3.5ex;height:3.5ex;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);-webkit-transform:translateY(-50%) translateX(-50%)}span.tt.fn{border-radius:1.5em;z-index:20;width:3.1ex;height:3.1ex;top:50%;left:50%;transform:translateY(-50%) translateY(-0.65ex) translateX(-50%);-webkit-transform:translateY(-50%) translateY(-0.65ex) translateX(-50%)}span.tt.en{border-radius:1.5em;z-index:20;width:3.1ex;height:3.1ex;top:50%;left:50%;transform:translateY(-50%) translateY(-0.65ex) translateX(-50%);-webkit-transform:translateY(-50%) translateY(-0.65ex) translateX(-50%)}span.tt.b{width:100%;padding:0 0 4px 0;top:-2px;height:1.25em}.dir-ltr span.tt.b{left:0}.dir-rtl span.tt.b{right:0}span.tt.xt{width:100%;padding:0 0 4px 0;top:-2px;height:1.25em}.dir-ltr span.tt.xt{left:0}.dir-rtl span.tt.xt{right:0}span.tt.vl{width:100%;padding:0 0.1em 0.1em 0;top:-0.25em;height:1.5em;min-width:1.5em;border-radius:0.75em}.dir-ltr span.tt.vl{left:-.25em}.dir-rtl span.tt.vl{right:-.25em}span.tt.cl{width:100%;padding:0;top:0;height:0.6em;min-width:0;border-radius:0.15em}.dir-ltr span.tt.cl{left:-.05em}.dir-rtl span.tt.cl{right:-.05em}a.selected{background-color:rgba(157,157,157,0.3)}.fn.pr+.m.pr{display:inline-block}.dir-ltr .fn.pr+.m.pr{margin-left:1em}.dir-rtl .fn.pr+.m.pr{margin-right:1em}.fn.pr+.m.pr::before{content:' '}.dimmed{opacity:0.5}body{font-family:DeviceUI,sans-serif;font-size:12pt;-webkit-tap-highlight-color:rgba(0,0,0,0)}table{margin:0;padding:0;max-width:none;border-collapse:collapse}tr{padding:0;margin:0;border-spacing:0}td{vertical-align:top;text-wrap:avoid}th p.se{margin-top:0}.document th{text-wrap:none}.dir-ltr .document th{text-align:left}.dir-rtl .document th{text-align:right}.document td p,.document th p{margin:0;padding:4px 8px}.imageDocument{width:100%}.refLink,.reflink{margin:1em 0;font-size:1.3em;font-weight:normal}#secondary .pageNum,#dailyText .pageNum{display:none}.article{max-width:40em}.primary-pane,.secondary-pane,.gems-pane,.supplementary-pane,.marginals-pane{margin-bottom:80px}.speedbar{position:fixed;width:24px;top:4px;bottom:4px}.dir-ltr .speedbar{right:2px}.dir-rtl .speedbar{left:2px}.speedbar.dir-ltr{right:2px}.speedbar.dir-rtl{left:2px}.speedbar.short{top:42px}.speedbar>.sensor{position:absolute;height:100%;width:100%;-webkit-user-select:none;-ms-user-select:none;user-select:none}.speedbar>.scrollbar{position:absolute;height:100%;width:9px;border-radius:4px;background-color:#ecebe7;opacity:0;-webkit-transition-property:opacity;-moz-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:0.3s;-moz-transition-duration:0.3s;-o-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.speedbar>.scrollbar.dir-ltr{right:2px}.speedbar>.scrollbar.dir-rtl{left:2px}.speedbar>.scrollbar.scrolling{opacity:0.5}.speedbar>.scrollbar>.track{position:absolute;width:5px;top:2px;left:2px;bottom:2px}.speedbar>.scrollbar>.track>.thumb{position:absolute;width:100%;border-radius:2px;background-color:#000000;opacity:0;-webkit-transition-property:opacity;-moz-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:0.3s;-moz-transition-duration:0.3s;-o-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.speedbar>.scrollbar>.track>.thumb.scrolling{opacity:0.5}.flipbook-container{overflow:hidden;background:white;position:relative;touch-action:pan-y;user-select:none}.flipbook-container img.gen-flipbook{position:absolute;top:0;left:0;transition:opacity 1s ease-in-out;opacity:0;width:100%;height:auto;pointer-events:none}.flipbook-container img.flipbook-sizing-image{display:block;opacity:0;width:100%;height:auto}.flipbook-container img.opaque{opacity:1}.flipbook-arrow{width:40px;background:rgba(0,0,0,0.5);color:#ffffff;font-size:25px;top:calc(50% - 80px / 2);position:absolute;z-index:2;display:flex;align-items:center;justify-content:center;height:80px;cursor:pointer}.flipbook-arrow svg{color:#ffffff;display:inline-block;font-size:inherit;width:24px;height:24px;overflow:visible;vertical-align:-.125em}.flipbook-navigation-dots{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;position:absolute;bottom:5px;min-height:40px;width:100%;margin:0;padding:0}.flipbook-container ul.flipbook-navigation-dots{margin:0;padding:0;padding-left:0;padding-right:0;list-style:none;pointer-events:none}.flipbook-navigation-dots li{list-style:none;pointer-events:initial}.flipbook-navigation-dots button{font-size:0;background-color:rgba(255,255,255,0.5);width:15px;height:15px;padding:0;margin:0 10px 5px 10px;border-radius:50%;padding-inline:0;cursor:pointer;color:rgba(255,255,255,0.5);border:1px solid rgba(0,0,0,0.2);outline:none}.flipbook-active-dot button{background-color:#fff;color:#fff}.flipbook-navigation-dots button:hover,.flipbook-navigation-dots button:focus{outline:none}\n", ""]), r.default = i
}, function(t, r, e) {
	var o, i, a;
	/*!
		autosize 4.0.2
		license: MIT
		http://www.jacklmoore.com/autosize
	*/
	i = [t, r], void 0 === (a = "function" == typeof(o = function(t, r) {
		"use strict";
		var e, o, i = "function" == typeof Map ? new Map : (e = [], o = [], {
				has: function(t) {
					return e.indexOf(t) > -1
				},
				get: function(t) {
					return o[e.indexOf(t)]
				},
				set: function(t, r) {
					-1 === e.indexOf(t) && (e.push(t), o.push(r))
				},
				delete: function(t) {
					var r = e.indexOf(t);
					r > -1 && (e.splice(r, 1), o.splice(r, 1))
				}
			}),
			a = function(t) {
				return new Event(t, {
					bubbles: !0
				})
			};
		try {
			new Event("test")
		} catch (t) {
			a = function(t) {
				var r = document.createEvent("Event");
				return r.initEvent(t, !0, !1), r
			}
		}

		function n(t) {
			if (t && t.nodeName && "TEXTAREA" === t.nodeName && !i.has(t)) {
				var r, e = null,
					o = null,
					n = null,
					l = function() {
						t.clientWidth !== o && p()
					},
					c = function(r) {
						window.removeEventListener("resize", l, !1), t.removeEventListener("input", p, !1), t.removeEventListener("keyup", p, !1), t.removeEventListener("autosize:destroy", c, !1), t.removeEventListener("autosize:update", p, !1), Object.keys(r).forEach((function(e) {
							t.style[e] = r[e]
						})), i.delete(t)
					}.bind(t, {
						height: t.style.height,
						resize: t.style.resize,
						overflowY: t.style.overflowY,
						overflowX: t.style.overflowX,
						wordWrap: t.style.wordWrap
					});
				t.addEventListener("autosize:destroy", c, !1), "onpropertychange" in t && "oninput" in t && t.addEventListener("keyup", p, !1), window.addEventListener("resize", l, !1), t.addEventListener("input", p, !1), t.addEventListener("autosize:update", p, !1), t.style.overflowX = "hidden", t.style.wordWrap = "break-word", i.set(t, {
					destroy: c,
					update: p
				}), "vertical" === (r = window.getComputedStyle(t, null)).resize ? t.style.resize = "none" : "both" === r.resize && (t.style.resize = "horizontal"), e = "content-box" === r.boxSizing ? -(parseFloat(r.paddingTop) + parseFloat(r.paddingBottom)) : parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth), isNaN(e) && (e = 0), p()
			}

			function d(r) {
				var e = t.style.width;
				t.style.width = "0px", t.offsetWidth, t.style.width = e, t.style.overflowY = r
			}

			function m() {
				if (0 !== t.scrollHeight) {
					var r = function(t) {
							for (var r = []; t && t.parentNode && t.parentNode instanceof Element;) t.parentNode.scrollTop && r.push({
								node: t.parentNode,
								scrollTop: t.parentNode.scrollTop
							}), t = t.parentNode;
							return r
						}(t),
						i = document.documentElement && document.documentElement.scrollTop;
					t.style.height = "", t.style.height = t.scrollHeight + e + "px", o = t.clientWidth, r.forEach((function(t) {
						t.node.scrollTop = t.scrollTop
					})), i && (document.documentElement.scrollTop = i)
				}
			}

			function p() {
				m();
				var r = Math.round(parseFloat(t.style.height)),
					e = window.getComputedStyle(t, null),
					o = "content-box" === e.boxSizing ? Math.round(parseFloat(e.height)) : t.offsetHeight;
				if (o < r ? "hidden" === e.overflowY && (d("scroll"), m(), o = "content-box" === e.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight) : "hidden" !== e.overflowY && (d("hidden"), m(), o = "content-box" === e.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight), n !== o) {
					n = o;
					var i = a("autosize:resized");
					try {
						t.dispatchEvent(i)
					} catch (t) {}
				}
			}
		}

		function l(t) {
			var r = i.get(t);
			r && r.destroy()
		}

		function c(t) {
			var r = i.get(t);
			r && r.update()
		}
		var d = null;
		"undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((d = function(t) {
			return t
		}).destroy = function(t) {
			return t
		}, d.update = function(t) {
			return t
		}) : ((d = function(t, r) {
			return t && Array.prototype.forEach.call(t.length ? t : [t], (function(t) {
				return n(t)
			})), t
		}).destroy = function(t) {
			return t && Array.prototype.forEach.call(t.length ? t : [t], l), t
		}, d.update = function(t) {
			return t && Array.prototype.forEach.call(t.length ? t : [t], c), t
		}), r.default = d, t.exports = r.default
	}) ? o.apply(r, i) : o) || (t.exports = a)
}, function(t, r, e) {
	"use strict";
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.TargetTextHelper = void 0;
	var o = e(76),
		i = e(50),
		a = e(334),
		n = function() {
			function t() {}
			return t.clearTargetTextIfNeeded = function(t, r) {
				return !(!o.hasSelectedVerses() && !o.hasSelectedParagraphs() || null !== i.ancestorElementWithClass(t, "highlight")) && (r({
					type: a.TouchEventCallbackType.ClearVerseOrParagraphSelection
				}), !0)
			}, t
		}();
	r.TargetTextHelper = n
}, function(t, r, e) {
	"use strict";
	var o = function() {
		function t(t) {
			this.ranges = t
		}
		return t.prototype.isBlank = function() {
			return !this.ranges || 0 === this.ranges.length
		}, t
	}();
	t.exports = o
}, function(t, r, e) {
	"use strict";
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.TextHelper = void 0;
	var o = function() {
		function t() {}
		return t.getVerseNumberFromVerseID = function(t) {
			var r = t.split("-");
			if (r.length >= 3) return parseInt(r[2], 10)
		}, t.getSnippetForSelector = function(t, r) {
			var e = t.querySelector(r);
			if (e) {
				var o = e.cloneNode(!0);
				return [].map.call(o.querySelectorAll(".fn,.m,.en"), (function(t) {
					t.parentNode.removeChild(t)
				})), o.textContent
			}
		}, t
	}();
	r.TextHelper = o
}, function(t, r, e) {
	"use strict";
	var o;
	! function(t) {
		t.TYPE_EXTRACTION = "ex", t.TYPE_BIBLE_CITATION = "bc", t.TYPE_REFERENCE = "re"
	}(o || (o = {})), t.exports = o
}, function(t, r, e) {
	"use strict";
	var o = e(387),
		i = function() {
			function t(t) {
				this.rawURI = t, this.isValidURI() && (this.parsedUri = o.parse(t, !0))
			}
			return t.prototype.getQuery = function() {
				return this.parsedUri ? (this.parsedQuery || (this.parsedQuery = this.parsedUri.query, this.parsedQuery && this.parsedQuery.issue && 6 === this.parsedQuery.issue.length && (this.parsedQuery.issue = this.parsedQuery.issue + "00"), this.uriIsVideo() ? this.parsedQuery.mediaType = "video" : this.uriIsAudio() && (this.parsedQuery.mediaType = "audio")), this.parsedQuery) : null
			}, t.prototype.isValidURI = function() {
				return this.uriIsVideo() || this.uriIsAudio()
			}, t.prototype.uriIsVideo = function() {
				return 0 === this.rawURI.indexOf(t.WebPubVideoProtocol)
			}, t.prototype.uriIsAudio = function() {
				return 0 === this.rawURI.indexOf(t.WebPubAudioProtocol)
			}, t.WebPubVideoProtocol = "webpubvid://", t.WebPubAudioProtocol = "webpubaud://", t
		}();
	t.exports = i
}, , , , , function(t, r, e) {
	"use strict";
	e.r(r), e.d(r, "actions", (function() {
		return i
	})), e.d(r, "toActorRef", (function() {
		return Kt
	})), e.d(r, "Interpreter", (function() {
		return wr
	})), e.d(r, "InterpreterStatus", (function() {
		return sr
	})), e.d(r, "interpret", (function() {
		return hr
	})), e.d(r, "spawn", (function() {
		return fr
	})), e.d(r, "Machine", (function() {
		return Or
	})), e.d(r, "createMachine", (function() {
		return kr
	})), e.d(r, "mapState", (function() {
		return Er
	})), e.d(r, "matchState", (function() {
		return Cr
	})), e.d(r, "createSchema", (function() {
		return Ar
	})), e.d(r, "t", (function() {
		return Tr
	})), e.d(r, "State", (function() {
		return or
	})), e.d(r, "StateNode", (function() {
		return vr
	})), e.d(r, "spawnBehavior", (function() {
		return gr
	})), e.d(r, "ActionTypes", (function() {
		return a
	})), e.d(r, "SpecialTargets", (function() {
		return n
	})), e.d(r, "matchesState", (function() {
		return R
	})), e.d(r, "toEventObject", (function() {
		return it
	})), e.d(r, "toObserver", (function() {
		return dt
	})), e.d(r, "toSCXMLEvent", (function() {
		return at
	})), e.d(r, "assign", (function() {
		return Ir
	})), e.d(r, "doneInvoke", (function() {
		return Lr
	})), e.d(r, "forwardTo", (function() {
		return Mr
	})), e.d(r, "send", (function() {
		return Nr
	})), e.d(r, "sendParent", (function() {
		return _r
	})), e.d(r, "sendUpdate", (function() {
		return Rr
	}));
	var o = {};
	e.r(o), e.d(o, "after", (function() {
		return x
	})), e.d(o, "assign", (function() {
		return j
	})), e.d(o, "cancel", (function() {
		return f
	})), e.d(o, "choose", (function() {
		return T
	})), e.d(o, "doneState", (function() {
		return y
	})), e.d(o, "error", (function() {
		return C
	})), e.d(o, "errorExecution", (function() {
		return k
	})), e.d(o, "errorPlatform", (function() {
		return E
	})), e.d(o, "init", (function() {
		return v
	})), e.d(o, "invoke", (function() {
		return O
	})), e.d(o, "log", (function() {
		return S
	})), e.d(o, "nullEvent", (function() {
		return h
	})), e.d(o, "pure", (function() {
		return I
	})), e.d(o, "raise", (function() {
		return b
	})), e.d(o, "send", (function() {
		return w
	})), e.d(o, "start", (function() {
		return g
	})), e.d(o, "stop", (function() {
		return s
	})), e.d(o, "update", (function() {
		return A
	}));
	var i = {};
	e.r(i), e.d(i, "actionTypes", (function() {
		return o
	})), e.d(i, "after", (function() {
		return Rt
	})), e.d(i, "assign", (function() {
		return Nt
	})), e.d(i, "cancel", (function() {
		return Ct
	})), e.d(i, "choose", (function() {
		return Gt
	})), e.d(i, "done", (function() {
		return Mt
	})), e.d(i, "doneInvoke", (function() {
		return Lt
	})), e.d(i, "error", (function() {
		return Dt
	})), e.d(i, "escalate", (function() {
		return Ht
	})), e.d(i, "forwardTo", (function() {
		return zt
	})), e.d(i, "getActionFunction", (function() {
		return ut
	})), e.d(i, "initEvent", (function() {
		return pt
	})), e.d(i, "isActionObject", (function() {
		return _t
	})), e.d(i, "log", (function() {
		return kt
	})), e.d(i, "pure", (function() {
		return Pt
	})), e.d(i, "raise", (function() {
		return wt
	})), e.d(i, "resolveActions", (function() {
		return Bt
	})), e.d(i, "resolveLog", (function() {
		return Et
	})), e.d(i, "resolveRaise", (function() {
		return ft
	})), e.d(i, "resolveSend", (function() {
		return jt
	})), e.d(i, "resolveStop", (function() {
		return It
	})), e.d(i, "respond", (function() {
		return vt
	})), e.d(i, "send", (function() {
		return ht
	})), e.d(i, "sendParent", (function() {
		return xt
	})), e.d(i, "sendTo", (function() {
		return yt
	})), e.d(i, "sendUpdate", (function() {
		return St
	})), e.d(i, "start", (function() {
		return At
	})), e.d(i, "stop", (function() {
		return Tt
	})), e.d(i, "toActionObject", (function() {
		return gt
	})), e.d(i, "toActionObjects", (function() {
		return st
	})), e.d(i, "toActivityDefinition", (function() {
		return bt
	}));
	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	var a, n, l = function() {
		return (l = Object.assign || function(t) {
			for (var r, e = 1, o = arguments.length; e < o; e++)
				for (var i in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
			return t
		}).apply(this, arguments)
	};

	function c(t, r) {
		var e = {};
		for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && r.indexOf(o) < 0 && (e[o] = t[o]);
		if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
			var i = 0;
			for (o = Object.getOwnPropertySymbols(t); i < o.length; i++) r.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[i]) && (e[o[i]] = t[o[i]])
		}
		return e
	}

	function d(t) {
		var r = "function" == typeof Symbol && Symbol.iterator,
			e = r && t[r],
			o = 0;
		if (e) return e.call(t);
		if (t && "number" == typeof t.length) return {
			next: function() {
				return t && o >= t.length && (t = void 0), {
					value: t && t[o++],
					done: !t
				}
			}
		};
		throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
	}

	function m(t, r) {
		var e = "function" == typeof Symbol && t[Symbol.iterator];
		if (!e) return t;
		var o, i, a = e.call(t),
			n = [];
		try {
			for (;
				(void 0 === r || r-- > 0) && !(o = a.next()).done;) n.push(o.value)
		} catch (t) {
			i = {
				error: t
			}
		} finally {
			try {
				o && !o.done && (e = a.return) && e.call(a)
			} finally {
				if (i) throw i.error
			}
		}
		return n
	}

	function p(t, r, e) {
		if (e || 2 === arguments.length)
			for (var o, i = 0, a = r.length; i < a; i++) !o && i in r || (o || (o = Array.prototype.slice.call(r, 0, i)), o[i] = r[i]);
		return t.concat(o || Array.prototype.slice.call(r))
	}! function(t) {
		t.Start = "xstate.start", t.Stop = "xstate.stop", t.Raise = "xstate.raise", t.Send = "xstate.send", t.Cancel = "xstate.cancel", t.NullEvent = "", t.Assign = "xstate.assign", t.After = "xstate.after", t.DoneState = "done.state", t.DoneInvoke = "done.invoke", t.Log = "xstate.log", t.Init = "xstate.init", t.Invoke = "xstate.invoke", t.ErrorExecution = "error.execution", t.ErrorCommunication = "error.communication", t.ErrorPlatform = "error.platform", t.ErrorCustom = "xstate.error", t.Update = "xstate.update", t.Pure = "xstate.pure", t.Choose = "xstate.choose"
	}(a || (a = {})),
	function(t) {
		t.Parent = "#_parent", t.Internal = "#_internal"
	}(n || (n = {}));
	var u, g = a.Start,
		s = a.Stop,
		b = a.Raise,
		w = a.Send,
		f = a.Cancel,
		h = a.NullEvent,
		j = a.Assign,
		x = a.After,
		y = a.DoneState,
		S = a.Log,
		v = a.Init,
		O = a.Invoke,
		k = a.ErrorExecution,
		E = a.ErrorPlatform,
		C = a.ErrorCustom,
		A = a.Update,
		T = a.Choose,
		I = a.Pure,
		N = {},
		_ = e(22);

	function R(t, r, e) {
		void 0 === e && (e = ".");
		var o = D(t, e),
			i = D(r, e);
		return $(i) ? !!$(o) && i === o : $(o) ? o in i : Object.keys(o).every((function(t) {
			return t in i && R(o[t], i[t])
		}))
	}

	function M(t) {
		try {
			return $(t) || "number" == typeof t ? "".concat(t) : t.type
		} catch (t) {
			throw new Error("Events must be strings or objects with a string event.type property.")
		}
	}

	function L(t, r) {
		try {
			return X(t) ? t : t.toString().split(r)
		} catch (r) {
			throw new Error("'".concat(t, "' is not a valid state path."))
		}
	}

	function D(t, r) {
		return "object" == typeof(e = t) && "value" in e && "context" in e && "event" in e && "_event" in e ? t.value : X(t) ? P(t) : "string" != typeof t ? t : P(L(t, r));
		var e
	}

	function P(t) {
		if (1 === t.length) return t[0];
		for (var r = {}, e = r, o = 0; o < t.length - 1; o++) o === t.length - 2 ? e[t[o]] = t[o + 1] : (e[t[o]] = {}, e = e[t[o]]);
		return r
	}

	function z(t, r) {
		for (var e = {}, o = Object.keys(t), i = 0; i < o.length; i++) {
			var a = o[i];
			e[a] = r(t[a], a, t, i)
		}
		return e
	}

	function H(t, r, e) {
		var o, i, a = {};
		try {
			for (var n = d(Object.keys(t)), l = n.next(); !l.done; l = n.next()) {
				var c = l.value,
					m = t[c];
				e(m) && (a[c] = r(m, c, t))
			}
		} catch (t) {
			o = {
				error: t
			}
		} finally {
			try {
				l && !l.done && (i = n.return) && i.call(n)
			} finally {
				if (o) throw o.error
			}
		}
		return a
	}
	var G = function(t) {
		return function(r) {
			var e, o, i = r;
			try {
				for (var a = d(t), n = a.next(); !n.done; n = a.next()) {
					i = i[n.value]
				}
			} catch (t) {
				e = {
					error: t
				}
			} finally {
				try {
					n && !n.done && (o = a.return) && o.call(a)
				} finally {
					if (e) throw e.error
				}
			}
			return i
		}
	};

	function B(t) {
		return t ? $(t) ? [
			[t]
		] : U(Object.keys(t).map((function(r) {
			var e = t[r];
			return "string" == typeof e || e && Object.keys(e).length ? B(t[r]).map((function(t) {
				return [r].concat(t)
			})) : [
				[r]
			]
		}))) : [
			[]
		]
	}

	function U(t) {
		var r;
		return (r = []).concat.apply(r, p([], m(t), !1))
	}

	function W(t) {
		return X(t) ? t : [t]
	}

	function F(t) {
		return void 0 === t ? [] : W(t)
	}

	function V(t, r, e) {
		var o, i;
		if (Z(t)) return t(r, e.data);
		var a = {};
		try {
			for (var n = d(Object.keys(t)), l = n.next(); !l.done; l = n.next()) {
				var c = l.value,
					m = t[c];
				Z(m) ? a[c] = m(r, e.data) : a[c] = m
			}
		} catch (t) {
			o = {
				error: t
			}
		} finally {
			try {
				l && !l.done && (i = n.return) && i.call(n)
			} finally {
				if (o) throw o.error
			}
		}
		return a
	}

	function K(t) {
		return t instanceof Promise || !(null === t || !Z(t) && "object" != typeof t || !Z(t.then))
	}

	function Y(t, r) {
		var e, o, i = m([
				[],
				[]
			], 2),
			a = i[0],
			n = i[1];
		try {
			for (var l = d(t), c = l.next(); !c.done; c = l.next()) {
				var p = c.value;
				r(p) ? a.push(p) : n.push(p)
			}
		} catch (t) {
			e = {
				error: t
			}
		} finally {
			try {
				c && !c.done && (o = l.return) && o.call(l)
			} finally {
				if (e) throw e.error
			}
		}
		return [a, n]
	}

	function q(t, r) {
		return z(t.states, (function(t, e) {
			if (t) {
				var o = ($(r) ? void 0 : r[e]) || (t ? t.current : void 0);
				if (o) return {
					current: o,
					states: q(t, o)
				}
			}
		}))
	}

	function Q(t, r, e, o) {
		return _.a || J(!!t, "Attempting to update undefined context"), t ? e.reduce((function(t, e) {
			var i, a, n = e.assignment,
				l = {
					state: o,
					action: e,
					_event: r
				},
				c = {};
			if (Z(n)) c = n(t, r.data, l);
			else try {
				for (var m = d(Object.keys(n)), p = m.next(); !p.done; p = m.next()) {
					var u = p.value,
						g = n[u];
					c[u] = Z(g) ? g(t, r.data, l) : g
				}
			} catch (t) {
				i = {
					error: t
				}
			} finally {
				try {
					p && !p.done && (a = m.return) && a.call(m)
				} finally {
					if (i) throw i.error
				}
			}
			return Object.assign({}, t, c)
		}), t) : t
	}
	var J = function() {};

	function X(t) {
		return Array.isArray(t)
	}

	function Z(t) {
		return "function" == typeof t
	}

	function $(t) {
		return "string" == typeof t
	}

	function tt(t, r) {
		if (t) return $(t) ? {
			type: "xstate.guard",
			name: t,
			predicate: r ? r[t] : void 0
		} : Z(t) ? {
			type: "xstate.guard",
			name: t.name,
			predicate: t
		} : t
	}
	_.a || (J = function(t, r) {
		var e = t instanceof Error ? t : void 0;
		if ((e || !t) && void 0 !== console) {
			var o = ["Warning: ".concat(r)];
			e && o.push(e), console.warn.apply(console, o)
		}
	});
	var rt = function() {
		return "function" == typeof Symbol && Symbol.observable || "@@observable"
	}();
	(u = {})[rt] = function() {
		return this
	}, u[Symbol.observable] = function() {
		return this
	};

	function et(t) {
		return !!t && "__xstatenode" in t
	}
	var ot = function() {
		var t = 0;
		return function() {
			return (++t).toString(16)
		}
	}();

	function it(t, r) {
		return $(t) || "number" == typeof t ? l({
			type: t
		}, r) : t
	}

	function at(t, r) {
		if (!$(t) && "$$type" in t && "scxml" === t.$$type) return t;
		var e = it(t);
		return l({
			name: e.type,
			data: e,
			$$type: "scxml",
			type: "external"
		}, r)
	}

	function nt(t, r) {
		return W(r).map((function(r) {
			return void 0 === r || "string" == typeof r || et(r) ? {
				target: r,
				event: t
			} : l(l({}, r), {
				event: t
			})
		}))
	}

	function lt(t, r, e, o, i) {
		var a = t.options.guards,
			n = {
				state: i,
				cond: r,
				_event: o
			};
		if ("xstate.guard" === r.type) return ((null == a ? void 0 : a[r.name]) || r.predicate)(e, o.data, n);
		var l = null == a ? void 0 : a[r.type];
		if (!l) throw new Error("Guard '".concat(r.type, "' is not implemented on machine '").concat(t.id, "'."));
		return l(e, o.data, n)
	}

	function ct(t) {
		return "string" == typeof t ? {
			type: t
		} : t
	}

	function dt(t, r, e) {
		if ("object" == typeof t) return t;
		var o = function() {};
		return {
			next: t,
			error: r || o,
			complete: e || o
		}
	}

	function mt(t, r) {
		return "".concat(t, ":invocation[").concat(r, "]")
	}
	var pt = at({
		type: v
	});

	function ut(t, r) {
		return r && r[t] || void 0
	}

	function gt(t, r) {
		var e;
		if ($(t) || "number" == typeof t) e = Z(o = ut(t, r)) ? {
			type: t,
			exec: o
		} : o || {
			type: t,
			exec: void 0
		};
		else if (Z(t)) e = {
			type: t.name || t.toString(),
			exec: t
		};
		else {
			var o;
			if (Z(o = ut(t.type, r))) e = l(l({}, t), {
				exec: o
			});
			else if (o) {
				var i = o.type || t.type;
				e = l(l(l({}, o), t), {
					type: i
				})
			} else e = t
		}
		return e
	}
	var st = function(t, r) {
		return t ? (X(t) ? t : [t]).map((function(t) {
			return gt(t, r)
		})) : []
	};

	function bt(t) {
		var r = gt(t);
		return l(l({
			id: $(t) ? t : r.id
		}, r), {
			type: r.type
		})
	}

	function wt(t) {
		return $(t) ? {
			type: b,
			event: t
		} : ht(t, {
			to: n.Internal
		})
	}

	function ft(t) {
		return {
			type: b,
			_event: at(t.event)
		}
	}

	function ht(t, r) {
		return {
			to: r ? r.to : void 0,
			type: w,
			event: Z(t) ? t : it(t),
			delay: r ? r.delay : void 0,
			id: r && void 0 !== r.id ? r.id : Z(t) ? t.name : M(t)
		}
	}

	function jt(t, r, e, o) {
		var i, a = {
				_event: e
			},
			n = at(Z(t.event) ? t.event(r, e.data, a) : t.event);
		if ($(t.delay)) {
			var c = o && o[t.delay];
			i = Z(c) ? c(r, e.data, a) : c
		} else i = Z(t.delay) ? t.delay(r, e.data, a) : t.delay;
		var d = Z(t.to) ? t.to(r, e.data, a) : t.to;
		return l(l({}, t), {
			to: d,
			_event: n,
			event: n.data,
			delay: i
		})
	}

	function xt(t, r) {
		return ht(t, l(l({}, r), {
			to: n.Parent
		}))
	}

	function yt(t, r, e) {
		return ht(r, l(l({}, e), {
			to: t
		}))
	}

	function St() {
		return xt(A)
	}

	function vt(t, r) {
		return ht(t, l(l({}, r), {
			to: function(t, r, e) {
				return e._event.origin
			}
		}))
	}
	var Ot = function(t, r) {
		return {
			context: t,
			event: r
		}
	};

	function kt(t, r) {
		return void 0 === t && (t = Ot), {
			type: S,
			label: r,
			expr: t
		}
	}
	var Et = function(t, r, e) {
			return l(l({}, t), {
				value: $(t.expr) ? t.expr : t.expr(r, e.data, {
					_event: e
				})
			})
		},
		Ct = function(t) {
			return {
				type: f,
				sendId: t
			}
		};

	function At(t) {
		var r = bt(t);
		return {
			type: a.Start,
			activity: r,
			exec: void 0
		}
	}

	function Tt(t) {
		var r = Z(t) ? t : bt(t);
		return {
			type: a.Stop,
			activity: r,
			exec: void 0
		}
	}

	function It(t, r, e) {
		var o = Z(t.activity) ? t.activity(r, e.data) : t.activity,
			i = "string" == typeof o ? {
				id: o
			} : o;
		return {
			type: a.Stop,
			activity: i
		}
	}
	var Nt = function(t) {
		return {
			type: j,
			assignment: t
		}
	};

	function _t(t) {
		return "object" == typeof t && "type" in t
	}

	function Rt(t, r) {
		var e = r ? "#".concat(r) : "";
		return "".concat(a.After, "(").concat(t, ")").concat(e)
	}

	function Mt(t, r) {
		var e = "".concat(a.DoneState, ".").concat(t),
			o = {
				type: e,
				data: r,
				toString: function() {
					return e
				}
			};
		return o
	}

	function Lt(t, r) {
		var e = "".concat(a.DoneInvoke, ".").concat(t),
			o = {
				type: e,
				data: r,
				toString: function() {
					return e
				}
			};
		return o
	}

	function Dt(t, r) {
		var e = "".concat(a.ErrorPlatform, ".").concat(t),
			o = {
				type: e,
				data: r,
				toString: function() {
					return e
				}
			};
		return o
	}

	function Pt(t) {
		return {
			type: a.Pure,
			get: t
		}
	}

	function zt(t, r) {
		return ht((function(t, r) {
			return r
		}), l(l({}, r), {
			to: t
		}))
	}

	function Ht(t, r) {
		return xt((function(r, e, o) {
			return {
				type: C,
				data: Z(t) ? t(r, e, o) : t
			}
		}), l(l({}, r), {
			to: n.Parent
		}))
	}

	function Gt(t) {
		return {
			type: a.Choose,
			conds: t
		}
	}

	function Bt(t, r, e, o, i, a) {
		void 0 === a && (a = !1);
		var n = m(a ? [
				[], i
			] : Y(i, (function(t) {
				return t.type === j
			})), 2),
			c = n[0],
			d = n[1],
			u = c.length ? Q(e, o, c, r) : e,
			g = a ? [e] : void 0;
		return [U(d.map((function(e) {
			var i;
			switch (e.type) {
				case b:
					return ft(e);
				case w:
					var n = jt(e, u, o, t.options.delays);
					return _.a || J(!$(e.delay) || "number" == typeof n.delay, "No delay reference for delay expression '".concat(e.delay, "' was found on machine '").concat(t.id, "'")), n;
				case S:
					return Et(e, u, o);
				case T:
					if (!(h = null === (i = e.conds.find((function(e) {
							var i = tt(e.cond, t.options.guards);
							return !i || lt(t, i, u, o, r)
						}))) || void 0 === i ? void 0 : i.actions)) return [];
					var c = m(Bt(t, r, u, o, st(F(h), t.options.actions), a), 2),
						d = c[0],
						f = c[1];
					return u = f, null == g || g.push(u), d;
				case I:
					var h;
					if (!(h = e.get(u, o.data))) return [];
					var x = m(Bt(t, r, u, o, st(F(h), t.options.actions), a), 2),
						y = x[0],
						v = x[1];
					return u = v, null == g || g.push(u), y;
				case s:
					return It(e, u, o);
				case j:
					u = Q(u, o, [e], r), null == g || g.push(u);
					break;
				default:
					var O = gt(e, t.options.actions),
						k = O.exec;
					if (k && g) {
						var E = g.length - 1;
						O = l(l({}, O), {
							exec: function(t) {
								for (var r = [], e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
								k.apply(void 0, p([g[E]], m(r), !1))
							}
						})
					}
					return O
			}
		})).filter((function(t) {
			return !!t
		}))), u]
	}
	var Ut = [],
		Wt = function(t, r) {
			Ut.push(t);
			var e = r(t);
			return Ut.pop(), e
		};

	function Ft(t) {
		var r;
		return (r = {
			id: t,
			send: function() {},
			subscribe: function() {
				return {
					unsubscribe: function() {}
				}
			},
			getSnapshot: function() {},
			toJSON: function() {
				return {
					id: t
				}
			}
		})[rt] = function() {
			return this
		}, r
	}

	function Vt(t, r, e) {
		var o = Ft(r);
		if (o.deferred = !0, et(t)) {
			var i = o.state = Wt(void 0, (function() {
				return (e ? t.withContext(e) : t).initialState
			}));
			o.getSnapshot = function() {
				return i
			}
		}
		return o
	}

	function Kt(t) {
		var r;
		return l(((r = {
			subscribe: function() {
				return {
					unsubscribe: function() {}
				}
			},
			id: "anonymous",
			getSnapshot: function() {}
		})[rt] = function() {
			return this
		}, r), t)
	}
	var Yt = function(t) {
		return "atomic" === t.type || "final" === t.type
	};

	function qt(t) {
		return Object.keys(t.states).map((function(r) {
			return t.states[r]
		}))
	}

	function Qt(t) {
		var r = [t];
		return Yt(t) ? r : r.concat(U(qt(t).map(Qt)))
	}

	function Jt(t, r) {
		var e, o, i, a, n, l, c, m, p = Xt(new Set(t)),
			u = new Set(r);
		try {
			for (var g = d(u), s = g.next(); !s.done; s = g.next())
				for (var b = (O = s.value).parent; b && !u.has(b);) u.add(b), b = b.parent
		} catch (t) {
			e = {
				error: t
			}
		} finally {
			try {
				s && !s.done && (o = g.return) && o.call(g)
			} finally {
				if (e) throw e.error
			}
		}
		var w = Xt(u);
		try {
			for (var f = d(u), h = f.next(); !h.done; h = f.next()) {
				if ("compound" !== (O = h.value).type || w.get(O) && w.get(O).length) {
					if ("parallel" === O.type) try {
						for (var j = (n = void 0, d(qt(O))), x = j.next(); !x.done; x = j.next()) {
							var y = x.value;
							"history" !== y.type && (u.has(y) || (u.add(y), p.get(y) ? p.get(y).forEach((function(t) {
								return u.add(t)
							})) : y.initialStateNodes.forEach((function(t) {
								return u.add(t)
							}))))
						}
					} catch (t) {
						n = {
							error: t
						}
					} finally {
						try {
							x && !x.done && (l = j.return) && l.call(j)
						} finally {
							if (n) throw n.error
						}
					}
				} else p.get(O) ? p.get(O).forEach((function(t) {
					return u.add(t)
				})) : O.initialStateNodes.forEach((function(t) {
					return u.add(t)
				}))
			}
		} catch (t) {
			i = {
				error: t
			}
		} finally {
			try {
				h && !h.done && (a = f.return) && a.call(f)
			} finally {
				if (i) throw i.error
			}
		}
		try {
			for (var S = d(u), v = S.next(); !v.done; v = S.next()) {
				var O;
				for (b = (O = v.value).parent; b && !u.has(b);) u.add(b), b = b.parent
			}
		} catch (t) {
			c = {
				error: t
			}
		} finally {
			try {
				v && !v.done && (m = S.return) && m.call(S)
			} finally {
				if (c) throw c.error
			}
		}
		return u
	}

	function Xt(t) {
		var r, e, o = new Map;
		try {
			for (var i = d(t), a = i.next(); !a.done; a = i.next()) {
				var n = a.value;
				o.has(n) || o.set(n, []), n.parent && (o.has(n.parent) || o.set(n.parent, []), o.get(n.parent).push(n))
			}
		} catch (t) {
			r = {
				error: t
			}
		} finally {
			try {
				a && !a.done && (e = i.return) && e.call(i)
			} finally {
				if (r) throw r.error
			}
		}
		return o
	}

	function Zt(t, r) {
		return function t(r, e) {
			var o = e.get(r);
			if (!o) return {};
			if ("compound" === r.type) {
				var i = o[0];
				if (!i) return {};
				if (Yt(i)) return i.key
			}
			var a = {};
			return o.forEach((function(r) {
				a[r.key] = t(r, e)
			})), a
		}(t, Xt(Jt([t], r)))
	}

	function $t(t, r) {
		return Array.isArray(t) ? t.some((function(t) {
			return t === r
		})) : t instanceof Set && t.has(r)
	}

	function tr(t, r) {
		return "compound" === r.type ? qt(r).some((function(r) {
			return "final" === r.type && $t(t, r)
		})) : "parallel" === r.type && qt(r).every((function(r) {
			return tr(t, r)
		}))
	}

	function rr(t) {
		return new Set(U(t.map((function(t) {
			return t.tags
		}))))
	}

	function er(t) {
		return "object" == typeof t && null !== t && ("value" in t && "_event" in t)
	}
	var or = function() {
			function t(t) {
				var r, e, o = this;
				this.actions = [], this.activities = N, this.meta = {}, this.events = [], this.value = t.value, this.context = t.context, this._event = t._event, this._sessionid = t._sessionid, this.event = this._event.data, this.historyValue = t.historyValue, this.history = t.history, this.actions = t.actions || [], this.activities = t.activities || N, this.meta = (void 0 === (e = t.configuration) && (e = []), e.reduce((function(t, r) {
					return void 0 !== r.meta && (t[r.id] = r.meta), t
				}), {})), this.events = t.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = t.configuration, this.transitions = t.transitions, this.children = t.children, this.done = !!t.done, this.tags = null !== (r = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) && void 0 !== r ? r : new Set, this.machine = t.machine, Object.defineProperty(this, "nextEvents", {
					get: function() {
						return function(t) {
							return p([], m(new Set(U(p([], m(t.map((function(t) {
								return t.ownEvents
							}))), !1)))), !1)
						}(o.configuration)
					}
				})
			}
			return t.from = function(r, e) {
				return r instanceof t ? r.context !== e ? new t({
					value: r.value,
					context: e,
					_event: r._event,
					_sessionid: null,
					historyValue: r.historyValue,
					history: r.history,
					actions: [],
					activities: r.activities,
					meta: {},
					events: [],
					configuration: [],
					transitions: [],
					children: {}
				}) : r : new t({
					value: r,
					context: e,
					_event: pt,
					_sessionid: null,
					historyValue: void 0,
					history: void 0,
					actions: [],
					activities: void 0,
					meta: void 0,
					events: [],
					configuration: [],
					transitions: [],
					children: {}
				})
			}, t.create = function(r) {
				return new t(r)
			}, t.inert = function(r, e) {
				if (r instanceof t) {
					if (!r.actions.length) return r;
					var o = pt;
					return new t({
						value: r.value,
						context: e,
						_event: o,
						_sessionid: null,
						historyValue: r.historyValue,
						history: r.history,
						activities: r.activities,
						configuration: r.configuration,
						transitions: [],
						children: {}
					})
				}
				return t.from(r, e)
			}, t.prototype.toStrings = function(t, r) {
				var e = this;
				if (void 0 === t && (t = this.value), void 0 === r && (r = "."), $(t)) return [t];
				var o = Object.keys(t);
				return o.concat.apply(o, p([], m(o.map((function(o) {
					return e.toStrings(t[o], r).map((function(t) {
						return o + r + t
					}))
				}))), !1))
			}, t.prototype.toJSON = function() {
				var t = this;
				t.configuration, t.transitions;
				var r = t.tags;
				t.machine;
				var e = c(t, ["configuration", "transitions", "tags", "machine"]);
				return l(l({}, e), {
					tags: Array.from(r)
				})
			}, t.prototype.matches = function(t) {
				return R(t, this.value)
			}, t.prototype.hasTag = function(t) {
				return this.tags.has(t)
			}, t.prototype.can = function(t) {
				var r;
				_.a && J(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
				var e = null === (r = this.machine) || void 0 === r ? void 0 : r.getTransitionData(this, t);
				return !!(null == e ? void 0 : e.transitions.length) && e.transitions.some((function(t) {
					return void 0 !== t.target || t.actions.length
				}))
			}, t
		}(),
		ir = {
			deferEvents: !1
		},
		ar = function() {
			function t(t) {
				this.processingEvent = !1, this.queue = [], this.initialized = !1, this.options = l(l({}, ir), t)
			}
			return t.prototype.initialize = function(t) {
				if (this.initialized = !0, t) {
					if (!this.options.deferEvents) return void this.schedule(t);
					this.process(t)
				}
				this.flushEvents()
			}, t.prototype.schedule = function(t) {
				if (this.initialized && !this.processingEvent) {
					if (0 !== this.queue.length) throw new Error("Event queue should be empty when it is not processing events");
					this.process(t), this.flushEvents()
				} else this.queue.push(t)
			}, t.prototype.clear = function() {
				this.queue = []
			}, t.prototype.flushEvents = function() {
				for (var t = this.queue.shift(); t;) this.process(t), t = this.queue.shift()
			}, t.prototype.process = function(t) {
				this.processingEvent = !0;
				try {
					t()
				} catch (t) {
					throw this.clear(), t
				} finally {
					this.processingEvent = !1
				}
			}, t
		}(),
		nr = new Map,
		lr = 0,
		cr = function() {
			return "x:".concat(lr++)
		},
		dr = function(t, r) {
			return nr.set(t, r), t
		},
		mr = function(t) {
			return nr.get(t)
		},
		pr = function(t) {
			nr.delete(t)
		},
		ur = e(374);

	function gr(t, r) {
		void 0 === r && (r = {});
		var e = t.initialState,
			o = new Set,
			i = [],
			a = !1,
			n = Kt({
				id: r.id,
				send: function(r) {
					i.push(r),
						function() {
							if (!a) {
								for (a = !0; i.length > 0;) {
									var r = i.shift();
									e = t.transition(e, r, l), o.forEach((function(t) {
										return t.next(e)
									}))
								}
								a = !1
							}
						}()
				},
				getSnapshot: function() {
					return e
				},
				subscribe: function(t, r, i) {
					var a = dt(t, r, i);
					return o.add(a), a.next(e), {
						unsubscribe: function() {
							o.delete(a)
						}
					}
				}
			}),
			l = {
				parent: r.parent,
				self: n,
				id: r.id || "anonymous",
				observers: o
			};
		return e = t.start ? t.start(l) : e, n
	}
	var sr, br = {
		sync: !1,
		autoForward: !1
	};
	! function(t) {
		t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped"
	}(sr || (sr = {}));
	var wr = function() {
		function t(r, e) {
			var o = this;
			void 0 === e && (e = t.defaultOptions), this.machine = r, this.scheduler = new ar, this.delayedEventsMap = {}, this.listeners = new Set, this.contextListeners = new Set, this.stopListeners = new Set, this.doneListeners = new Set, this.eventListeners = new Set, this.sendListeners = new Set, this.initialized = !1, this.status = sr.NotStarted, this.children = new Map, this.forwardTo = new Set, this.init = this.start, this.send = function(t, r) {
				if (X(t)) return o.batch(t), o.state;
				var e = at(it(t, r));
				if (o.status === sr.Stopped) return _.a || J(!1, 'Event "'.concat(e.name, '" was sent to stopped service "').concat(o.machine.id, '". This service has already reached its final state, and will not transition.\nEvent: ').concat(JSON.stringify(e.data))), o.state;
				if (o.status !== sr.Running && !o.options.deferEvents) throw new Error('Event "'.concat(e.name, '" was sent to uninitialized service "').concat(o.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: ').concat(JSON.stringify(e.data)));
				return o.scheduler.schedule((function() {
					o.forward(e);
					var t = o.nextState(e);
					o.update(t, e)
				})), o._state
			}, this.sendTo = function(t, r) {
				var e, i = o.parent && (r === n.Parent || o.parent.id === r),
					a = i ? o.parent : $(r) ? o.children.get(r) || mr(r) : (e = r) && "function" == typeof e.send ? r : void 0;
				if (a) "machine" in a ? a.send(l(l({}, t), {
					name: t.name === C ? "".concat(Dt(o.id)) : t.name,
					origin: o.sessionId
				})) : a.send(t.data);
				else {
					if (!i) throw new Error("Unable to send event to child '".concat(r, "' from service '").concat(o.id, "'."));
					_.a || J(!1, "Service '".concat(o.id, "' has no parent: unable to send event ").concat(t.type))
				}
			};
			var i = l(l({}, t.defaultOptions), e),
				a = i.clock,
				c = i.logger,
				d = i.parent,
				m = i.id,
				p = void 0 !== m ? m : r.id;
			this.id = p, this.logger = c, this.clock = a, this.parent = d, this.options = i, this.scheduler = new ar({
				deferEvents: this.options.deferEvents
			}), this.sessionId = cr()
		}
		return Object.defineProperty(t.prototype, "initialState", {
			get: function() {
				var t = this;
				return this._initialState ? this._initialState : Wt(this, (function() {
					return t._initialState = t.machine.initialState, t._initialState
				}))
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(t.prototype, "state", {
			get: function() {
				return _.a || J(this.status !== sr.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state
			},
			enumerable: !1,
			configurable: !0
		}), t.prototype.execute = function(t, r) {
			var e, o;
			try {
				for (var i = d(t.actions), a = i.next(); !a.done; a = i.next()) {
					var n = a.value;
					this.exec(n, t, r)
				}
			} catch (t) {
				e = {
					error: t
				}
			} finally {
				try {
					a && !a.done && (o = i.return) && o.call(i)
				} finally {
					if (e) throw e.error
				}
			}
		}, t.prototype.update = function(t, r) {
			var e, o, i, a, n, l, c, m, p = this;
			if (t._sessionid = this.sessionId, this._state = t, this.options.execute && this.execute(this.state), this.children.forEach((function(t) {
					p.state.children[t.id] = t
				})), this.devTools && this.devTools.send(r.data, t), t.event) try {
				for (var u = d(this.eventListeners), g = u.next(); !g.done; g = u.next()) {
					(0, g.value)(t.event)
				}
			} catch (t) {
				e = {
					error: t
				}
			} finally {
				try {
					g && !g.done && (o = u.return) && o.call(u)
				} finally {
					if (e) throw e.error
				}
			}
			try {
				for (var s = d(this.listeners), b = s.next(); !b.done; b = s.next()) {
					(0, b.value)(t, t.event)
				}
			} catch (t) {
				i = {
					error: t
				}
			} finally {
				try {
					b && !b.done && (a = s.return) && a.call(s)
				} finally {
					if (i) throw i.error
				}
			}
			try {
				for (var w = d(this.contextListeners), f = w.next(); !f.done; f = w.next()) {
					(0, f.value)(this.state.context, this.state.history ? this.state.history.context : void 0)
				}
			} catch (t) {
				n = {
					error: t
				}
			} finally {
				try {
					f && !f.done && (l = w.return) && l.call(w)
				} finally {
					if (n) throw n.error
				}
			}
			var h = tr(t.configuration || [], this.machine);
			if (this.state.configuration && h) {
				var j = t.configuration.find((function(t) {
						return "final" === t.type && t.parent === p.machine
					})),
					x = j && j.doneData ? V(j.doneData, t.context, r) : void 0;
				try {
					for (var y = d(this.doneListeners), S = y.next(); !S.done; S = y.next()) {
						(0, S.value)(Lt(this.id, x))
					}
				} catch (t) {
					c = {
						error: t
					}
				} finally {
					try {
						S && !S.done && (m = y.return) && m.call(y)
					} finally {
						if (c) throw c.error
					}
				}
				this.stop()
			}
		}, t.prototype.onTransition = function(t) {
			return this.listeners.add(t), this.status === sr.Running && t(this.state, this.state.event), this
		}, t.prototype.subscribe = function(t, r, e) {
			var o, i = this;
			if (!t) return {
				unsubscribe: function() {}
			};
			var a = e;
			return "function" == typeof t ? o = t : (o = t.next.bind(t), a = t.complete.bind(t)), this.listeners.add(o), this.status === sr.Running && o(this.state), a && this.onDone(a), {
				unsubscribe: function() {
					o && i.listeners.delete(o), a && i.doneListeners.delete(a)
				}
			}
		}, t.prototype.onEvent = function(t) {
			return this.eventListeners.add(t), this
		}, t.prototype.onSend = function(t) {
			return this.sendListeners.add(t), this
		}, t.prototype.onChange = function(t) {
			return this.contextListeners.add(t), this
		}, t.prototype.onStop = function(t) {
			return this.stopListeners.add(t), this
		}, t.prototype.onDone = function(t) {
			return this.doneListeners.add(t), this
		}, t.prototype.off = function(t) {
			return this.listeners.delete(t), this.eventListeners.delete(t), this.sendListeners.delete(t), this.stopListeners.delete(t), this.doneListeners.delete(t), this.contextListeners.delete(t), this
		}, t.prototype.start = function(t) {
			var r = this;
			if (this.status === sr.Running) return this;
			this.machine._init(), dr(this.sessionId, this), this.initialized = !0, this.status = sr.Running;
			var e = void 0 === t ? this.initialState : Wt(this, (function() {
				return er(t) ? r.machine.resolveState(t) : r.machine.resolveState(or.from(t, r.machine.context))
			}));
			return this.options.devTools && this.attachDev(), this.scheduler.initialize((function() {
				r.update(e, pt)
			})), this
		}, t.prototype.stop = function() {
			var t, r, e, o, i, a, n, l, c, u, g = this;
			try {
				for (var s = d(this.listeners), b = s.next(); !b.done; b = s.next()) {
					var w = b.value;
					this.listeners.delete(w)
				}
			} catch (r) {
				t = {
					error: r
				}
			} finally {
				try {
					b && !b.done && (r = s.return) && r.call(s)
				} finally {
					if (t) throw t.error
				}
			}
			try {
				for (var f = d(this.stopListeners), h = f.next(); !h.done; h = f.next()) {
					(w = h.value)(), this.stopListeners.delete(w)
				}
			} catch (t) {
				e = {
					error: t
				}
			} finally {
				try {
					h && !h.done && (o = f.return) && o.call(f)
				} finally {
					if (e) throw e.error
				}
			}
			try {
				for (var j = d(this.contextListeners), x = j.next(); !x.done; x = j.next()) {
					w = x.value;
					this.contextListeners.delete(w)
				}
			} catch (t) {
				i = {
					error: t
				}
			} finally {
				try {
					x && !x.done && (a = j.return) && a.call(j)
				} finally {
					if (i) throw i.error
				}
			}
			try {
				for (var y = d(this.doneListeners), S = y.next(); !S.done; S = y.next()) {
					w = S.value;
					this.doneListeners.delete(w)
				}
			} catch (t) {
				n = {
					error: t
				}
			} finally {
				try {
					S && !S.done && (l = y.return) && l.call(y)
				} finally {
					if (n) throw n.error
				}
			}
			if (!this.initialized) return this;
			p([], m(this.state.configuration), !1).sort((function(t, r) {
				return r.order - t.order
			})).forEach((function(t) {
				var r, e;
				try {
					for (var o = d(t.definition.exit), i = o.next(); !i.done; i = o.next()) {
						var a = i.value;
						g.exec(a, g.state)
					}
				} catch (t) {
					r = {
						error: t
					}
				} finally {
					try {
						i && !i.done && (e = o.return) && e.call(o)
					} finally {
						if (r) throw r.error
					}
				}
			})), this.children.forEach((function(t) {
				Z(t.stop) && t.stop()
			}));
			try {
				for (var v = d(Object.keys(this.delayedEventsMap)), O = v.next(); !O.done; O = v.next()) {
					var k = O.value;
					this.clock.clearTimeout(this.delayedEventsMap[k])
				}
			} catch (t) {
				c = {
					error: t
				}
			} finally {
				try {
					O && !O.done && (u = v.return) && u.call(v)
				} finally {
					if (c) throw c.error
				}
			}
			return this.scheduler.clear(), this.initialized = !1, this.status = sr.Stopped, pr(this.sessionId), this
		}, t.prototype.batch = function(t) {
			var r = this;
			if (this.status === sr.NotStarted && this.options.deferEvents) _.a || J(!1, "".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '" and are deferred. Make sure .start() is called for this service.\nEvent: ').concat(JSON.stringify(event)));
			else if (this.status !== sr.Running) throw new Error("".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
			this.scheduler.schedule((function() {
				var e, o, i = r.state,
					a = !1,
					n = [],
					c = function(t) {
						var e = at(t);
						r.forward(e), i = Wt(r, (function() {
							return r.machine.transition(i, e)
						})), n.push.apply(n, p([], m(i.actions.map((function(t) {
							return e = i, o = (r = t).exec, l(l({}, r), {
								exec: void 0 !== o ? function() {
									return o(e.context, e.event, {
										action: r,
										state: e,
										_event: e._event
									})
								} : void 0
							});
							var r, e, o
						}))), !1)), a = a || !!i.changed
					};
				try {
					for (var u = d(t), g = u.next(); !g.done; g = u.next()) {
						c(g.value)
					}
				} catch (t) {
					e = {
						error: t
					}
				} finally {
					try {
						g && !g.done && (o = u.return) && o.call(u)
					} finally {
						if (e) throw e.error
					}
				}
				i.changed = a, i.actions = n, r.update(i, at(t[t.length - 1]))
			}))
		}, t.prototype.sender = function(t) {
			return this.send.bind(this, t)
		}, t.prototype.nextState = function(t) {
			var r = this,
				e = at(t);
			if (0 === e.name.indexOf(E) && !this.state.nextEvents.some((function(t) {
					return 0 === t.indexOf(E)
				}))) throw e.data.data;
			return Wt(this, (function() {
				return r.machine.transition(r.state, e)
			}))
		}, t.prototype.forward = function(t) {
			var r, e;
			try {
				for (var o = d(this.forwardTo), i = o.next(); !i.done; i = o.next()) {
					var a = i.value,
						n = this.children.get(a);
					if (!n) throw new Error("Unable to forward event '".concat(t, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(a, "'."));
					n.send(t)
				}
			} catch (t) {
				r = {
					error: t
				}
			} finally {
				try {
					i && !i.done && (e = o.return) && e.call(o)
				} finally {
					if (r) throw r.error
				}
			}
		}, t.prototype.defer = function(t) {
			var r = this;
			this.delayedEventsMap[t.id] = this.clock.setTimeout((function() {
				t.to ? r.sendTo(t._event, t.to) : r.send(t._event)
			}), t.delay)
		}, t.prototype.cancel = function(t) {
			this.clock.clearTimeout(this.delayedEventsMap[t]), delete this.delayedEventsMap[t]
		}, t.prototype.exec = function(t, r, e) {
			void 0 === e && (e = this.machine.options.actions);
			var o = r.context,
				i = r._event,
				n = t.exec || ut(t.type, e),
				l = Z(n) ? n : n ? n.exec : t.exec;
			if (l) try {
				return l(o, i.data, {
					action: t,
					state: this.state,
					_event: i
				})
			} catch (t) {
				throw this.parent && this.parent.send({
					type: "xstate.error",
					data: t
				}), t
			}
			switch (t.type) {
				case w:
					var c = t;
					if ("number" == typeof c.delay) return void this.defer(c);
					c.to ? this.sendTo(c._event, c.to) : this.send(c._event);
					break;
				case f:
					this.cancel(t.sendId);
					break;
				case g:
					if (this.status !== sr.Running) return;
					var d = t.activity;
					if (!this.state.activities[d.id || d.type]) break;
					if (d.type === a.Invoke) {
						var m = ct(d.src),
							p = this.machine.options.services ? this.machine.options.services[m.type] : void 0,
							u = d.id,
							b = d.data;
						_.a || J(!("forward" in d), "`forward` property is deprecated (found in invocation of '".concat(d.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
						var h = "autoForward" in d ? d.autoForward : !!d.forward;
						if (!p) return void(_.a || J(!1, "No service found for invocation '".concat(d.src, "' in machine '").concat(this.machine.id, "'.")));
						var j = b ? V(b, o, i) : void 0;
						if ("string" == typeof p) return;
						var x = Z(p) ? p(o, i.data, {
							data: j,
							src: m,
							meta: d.meta
						}) : p;
						if (!x) return;
						var y = void 0;
						et(x) && (x = j ? x.withContext(j) : x, y = {
							autoForward: h
						}), this.spawn(x, u, y)
					} else this.spawnActivity(d);
					break;
				case s:
					this.stopChild(t.activity.id);
					break;
				case S:
					var v = t.label,
						O = t.value;
					v ? this.logger(v, O) : this.logger(O);
					break;
				default:
					_.a || J(!1, "No implementation found for action type '".concat(t.type, "'"))
			}
		}, t.prototype.removeChild = function(t) {
			var r;
			this.children.delete(t), this.forwardTo.delete(t), null === (r = this.state) || void 0 === r || delete r.children[t]
		}, t.prototype.stopChild = function(t) {
			var r = this.children.get(t);
			r && (this.removeChild(t), Z(r.stop) && r.stop())
		}, t.prototype.spawn = function(t, r, e) {
			if (K(t)) return this.spawnPromise(Promise.resolve(t), r);
			if (Z(t)) return this.spawnCallback(t, r);
			if (function(t) {
					try {
						return "function" == typeof t.send
					} catch (t) {
						return !1
					}
				}(i = t) && "id" in i) return this.spawnActor(t, r);
			if (function(t) {
					try {
						return "subscribe" in t && Z(t.subscribe)
					} catch (t) {
						return !1
					}
				}(t)) return this.spawnObservable(t, r);
			if (et(t)) return this.spawnMachine(t, l(l({}, e), {
				id: r
			}));
			if (null !== (o = t) && "object" == typeof o && "transition" in o && "function" == typeof o.transition) return this.spawnBehavior(t, r);
			throw new Error('Unable to spawn entity "'.concat(r, '" of type "').concat(typeof t, '".'));
			var o, i
		}, t.prototype.spawnMachine = function(r, e) {
			var o = this;
			void 0 === e && (e = {});
			var i = new t(r, l(l({}, this.options), {
					parent: this,
					id: e.id || r.id
				})),
				a = l(l({}, br), e);
			a.sync && i.onTransition((function(t) {
				o.send(A, {
					state: t,
					id: i.id
				})
			}));
			var n = i;
			return this.children.set(i.id, n), a.autoForward && this.forwardTo.add(i.id), i.onDone((function(t) {
				o.removeChild(i.id), o.send(at(t, {
					origin: i.id
				}))
			})).start(), n
		}, t.prototype.spawnBehavior = function(t, r) {
			var e = gr(t, {
				id: r,
				parent: this
			});
			return this.children.set(r, e), e
		}, t.prototype.spawnPromise = function(t, r) {
			var e, o, i = this,
				a = !1;
			t.then((function(t) {
				a || (o = t, i.removeChild(r), i.send(at(Lt(r, t), {
					origin: r
				})))
			}), (function(t) {
				if (!a) {
					i.removeChild(r);
					var e = Dt(r, t);
					try {
						i.send(at(e, {
							origin: r
						}))
					} catch (o) {
						! function(t, r, e) {
							if (!_.a) {
								var o = t.stack ? " Stacktrace was '".concat(t.stack, "'") : "";
								if (t === r) console.error("Missing onError handler for invocation '".concat(e, "', error was '").concat(t, "'.").concat(o));
								else {
									var i = r.stack ? " Stacktrace was '".concat(r.stack, "'") : "";
									console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(e, "'. ") + "Original error: '".concat(t, "'. ").concat(o, " Current error is '").concat(r, "'.").concat(i))
								}
							}
						}(t, o, r), i.devTools && i.devTools.send(e, i.state), i.machine.strict && i.stop()
					}
				}
			}));
			var n = ((e = {
				id: r,
				send: function() {},
				subscribe: function(r, e, o) {
					var i = dt(r, e, o),
						a = !1;
					return t.then((function(t) {
						a || (i.next(t), a || i.complete())
					}), (function(t) {
						a || i.error(t)
					})), {
						unsubscribe: function() {
							return a = !0
						}
					}
				},
				stop: function() {
					a = !0
				},
				toJSON: function() {
					return {
						id: r
					}
				},
				getSnapshot: function() {
					return o
				}
			})[rt] = function() {
				return this
			}, e);
			return this.children.set(r, n), n
		}, t.prototype.spawnCallback = function(t, r) {
			var e, o, i, a = this,
				n = !1,
				l = new Set,
				c = new Set;
			try {
				i = t((function(t) {
					o = t, c.forEach((function(r) {
						return r(t)
					})), n || a.send(at(t, {
						origin: r
					}))
				}), (function(t) {
					l.add(t)
				}))
			} catch (t) {
				this.send(Dt(r, t))
			}
			if (K(i)) return this.spawnPromise(i, r);
			var d = ((e = {
				id: r,
				send: function(t) {
					return l.forEach((function(r) {
						return r(t)
					}))
				},
				subscribe: function(t) {
					var r = dt(t);
					return c.add(r.next), {
						unsubscribe: function() {
							c.delete(r.next)
						}
					}
				},
				stop: function() {
					n = !0, Z(i) && i()
				},
				toJSON: function() {
					return {
						id: r
					}
				},
				getSnapshot: function() {
					return o
				}
			})[rt] = function() {
				return this
			}, e);
			return this.children.set(r, d), d
		}, t.prototype.spawnObservable = function(t, r) {
			var e, o, i = this,
				a = t.subscribe((function(t) {
					o = t, i.send(at(t, {
						origin: r
					}))
				}), (function(t) {
					i.removeChild(r), i.send(at(Dt(r, t), {
						origin: r
					}))
				}), (function() {
					i.removeChild(r), i.send(at(Lt(r), {
						origin: r
					}))
				})),
				n = ((e = {
					id: r,
					send: function() {},
					subscribe: function(r, e, o) {
						return t.subscribe(r, e, o)
					},
					stop: function() {
						return a.unsubscribe()
					},
					getSnapshot: function() {
						return o
					},
					toJSON: function() {
						return {
							id: r
						}
					}
				})[rt] = function() {
					return this
				}, e);
			return this.children.set(r, n), n
		}, t.prototype.spawnActor = function(t, r) {
			return this.children.set(r, t), t
		}, t.prototype.spawnActivity = function(t) {
			var r = this.machine.options && this.machine.options.activities ? this.machine.options.activities[t.type] : void 0;
			if (r) {
				var e = r(this.state.context, t);
				this.spawnEffect(t.id, e)
			} else _.a || J(!1, "No implementation found for activity '".concat(t.type, "'"))
		}, t.prototype.spawnEffect = function(t, r) {
			var e;
			this.children.set(t, ((e = {
				id: t,
				send: function() {},
				subscribe: function() {
					return {
						unsubscribe: function() {}
					}
				},
				stop: r || void 0,
				getSnapshot: function() {},
				toJSON: function() {
					return {
						id: t
					}
				}
			})[rt] = function() {
				return this
			}, e))
		}, t.prototype.attachDev = function() {
			var t = Object(ur.a)();
			if (this.options.devTools && t) {
				if (t.__REDUX_DEVTOOLS_EXTENSION__) {
					var r = "object" == typeof this.options.devTools ? this.options.devTools : void 0;
					this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect(l(l({
						name: this.id,
						autoPause: !0,
						stateSanitizer: function(t) {
							return {
								value: t.value,
								context: t.context,
								actions: t.actions
							}
						}
					}, r), {
						features: l({
							jump: !1,
							skip: !1
						}, r ? r.features : void 0)
					}), this.machine), this.devTools.init(this.state)
				}
				Object(ur.b)(this)
			}
		}, t.prototype.toJSON = function() {
			return {
				id: this.id
			}
		}, t.prototype[rt] = function() {
			return this
		}, t.prototype.getSnapshot = function() {
			return this.status === sr.NotStarted ? this.initialState : this._state
		}, t.defaultOptions = {
			execute: !0,
			deferEvents: !0,
			clock: {
				setTimeout: function(t, r) {
					return setTimeout(t, r)
				},
				clearTimeout: function(t) {
					return clearTimeout(t)
				}
			},
			logger: console.log.bind(console),
			devTools: !1
		}, t.interpret = hr, t
	}();

	function fr(t, r) {
		var e = function(t) {
			return $(t) ? l(l({}, br), {
				name: t
			}) : l(l(l({}, br), {
				name: ot()
			}), t)
		}(r);
		return function(r) {
			if (!_.a) {
				var o = et(t) || Z(t);
				J(!!r || o, 'Attempted to spawn an Actor (ID: "'.concat(et(t) ? t.id : "undefined", '") outside of a service. This will have no effect.'))
			}
			return r ? r.spawn(t, e.name, e) : Vt(t, e.name)
		}(Ut[Ut.length - 1])
	}

	function hr(t, r) {
		return new wr(t, r)
	}

	function jr(t) {
		if ("string" == typeof t) {
			var r = {
				type: t,
				toString: function() {
					return t
				}
			};
			return r
		}
		return t
	}

	function xr(t) {
		return l(l({
			type: O
		}, t), {
			toJSON: function() {
				t.onDone, t.onError;
				var r = c(t, ["onDone", "onError"]);
				return l(l({}, r), {
					type: O,
					src: jr(t.src)
				})
			}
		})
	}
	var yr = {},
		Sr = function(t) {
			return "#" === t[0]
		},
		vr = function() {
			function t(r, e, o, i) {
				var a, n = this;
				void 0 === o && (o = "context" in r ? r.context : void 0), this.config = r, this._context = o, this.order = -1, this.__xstatenode = !0, this.__cache = {
					events: void 0,
					relativeValue: new Map,
					initialStateValue: void 0,
					initialState: void 0,
					on: void 0,
					transitions: void 0,
					candidates: {},
					delayedTransitions: void 0
				}, this.idMap = {}, this.tags = [], this.options = Object.assign({
					actions: {},
					guards: {},
					services: {},
					activities: {},
					delays: {}
				}, e), this.parent = null == i ? void 0 : i.parent, this.key = this.config.key || (null == i ? void 0 : i.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : "."), this.id = this.config.id || p([this.machine.key], m(this.path), !1).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : null !== (a = this.config.schema) && void 0 !== a ? a : {}, this.description = this.config.description, _.a || J(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? z(this.config.states, (function(r, e) {
					var o, i = new t(r, {}, void 0, {
						parent: n,
						key: e
					});
					return Object.assign(n.idMap, l(((o = {})[i.id] = i, o), i.idMap)), i
				})) : yr;
				var c = 0;
				! function t(r) {
					var e, o;
					r.order = c++;
					try {
						for (var i = d(qt(r)), a = i.next(); !a.done; a = i.next()) {
							t(a.value)
						}
					} catch (t) {
						e = {
							error: t
						}
					} finally {
						try {
							a && !a.done && (o = i.return) && o.call(i)
						} finally {
							if (e) throw e.error
						}
					}
				}(this), this.history = !0 === this.config.history ? "shallow" : this.config.history || !1, this._transient = !!this.config.always || !!this.config.on && (Array.isArray(this.config.on) ? this.config.on.some((function(t) {
					return "" === t.event
				})) : "" in this.config.on), this.strict = !!this.config.strict, this.onEntry = F(this.config.entry || this.config.onEntry).map((function(t) {
					return gt(t)
				})), this.onExit = F(this.config.exit || this.config.onExit).map((function(t) {
					return gt(t)
				})), this.meta = this.config.meta, this.doneData = "final" === this.type ? this.config.data : void 0, this.invoke = F(this.config.invoke).map((function(t, r) {
					var e, o;
					if (et(t)) {
						var i = mt(n.id, r);
						return n.machine.options.services = l(((e = {})[i] = t, e), n.machine.options.services), xr({
							src: i,
							id: i
						})
					}
					if ($(t.src)) {
						i = t.id || mt(n.id, r);
						return xr(l(l({}, t), {
							id: i,
							src: t.src
						}))
					}
					if (et(t.src) || Z(t.src)) {
						i = t.id || mt(n.id, r);
						return n.machine.options.services = l(((o = {})[i] = t.src, o), n.machine.options.services), xr(l(l({
							id: i
						}, t), {
							src: i
						}))
					}
					var a = t.src;
					return xr(l(l({
						id: mt(n.id, r)
					}, t), {
						src: a
					}))
				})), this.activities = F(this.config.activities).concat(this.invoke).map((function(t) {
					return bt(t)
				})), this.transition = this.transition.bind(this), this.tags = F(this.config.tags)
			}
			return t.prototype._init = function() {
				this.__cache.transitions || Qt(this).forEach((function(t) {
					return t.on
				}))
			}, t.prototype.withConfig = function(r, e) {
				var o = this.options,
					i = o.actions,
					a = o.activities,
					n = o.guards,
					c = o.services,
					d = o.delays;
				return new t(this.config, {
					actions: l(l({}, i), r.actions),
					activities: l(l({}, a), r.activities),
					guards: l(l({}, n), r.guards),
					services: l(l({}, c), r.services),
					delays: l(l({}, d), r.delays)
				}, null != e ? e : this.context)
			}, t.prototype.withContext = function(r) {
				return new t(this.config, this.options, r)
			}, Object.defineProperty(t.prototype, "context", {
				get: function() {
					return Z(this._context) ? this._context() : this._context
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "definition", {
				get: function() {
					return {
						id: this.id,
						key: this.key,
						version: this.version,
						context: this.context,
						type: this.type,
						initial: this.initial,
						history: this.history,
						states: z(this.states, (function(t) {
							return t.definition
						})),
						on: this.on,
						transitions: this.transitions,
						entry: this.onEntry,
						exit: this.onExit,
						activities: this.activities || [],
						meta: this.meta,
						order: this.order || -1,
						data: this.doneData,
						invoke: this.invoke,
						description: this.description,
						tags: this.tags
					}
				},
				enumerable: !1,
				configurable: !0
			}), t.prototype.toJSON = function() {
				return this.definition
			}, Object.defineProperty(t.prototype, "on", {
				get: function() {
					if (this.__cache.on) return this.__cache.on;
					var t = this.transitions;
					return this.__cache.on = t.reduce((function(t, r) {
						return t[r.eventType] = t[r.eventType] || [], t[r.eventType].push(r), t
					}), {})
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "after", {
				get: function() {
					return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions)
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "transitions", {
				get: function() {
					return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions)
				},
				enumerable: !1,
				configurable: !0
			}), t.prototype.getCandidates = function(t) {
				if (this.__cache.candidates[t]) return this.__cache.candidates[t];
				var r = "" === t,
					e = this.transitions.filter((function(e) {
						var o = e.eventType === t;
						return r ? o : o || "*" === e.eventType
					}));
				return this.__cache.candidates[t] = e, e
			}, t.prototype.getDelayedTransitions = function() {
				var t = this,
					r = this.config.after;
				if (!r) return [];
				var e = function(r, e) {
					var o = Rt(Z(r) ? "".concat(t.id, ":delay[").concat(e, "]") : r, t.id);
					return t.onEntry.push(ht(o, {
						delay: r
					})), t.onExit.push(Ct(o)), o
				};
				return (X(r) ? r.map((function(t, r) {
					var o = e(t.delay, r);
					return l(l({}, t), {
						event: o
					})
				})) : U(Object.keys(r).map((function(t, o) {
					var i = r[t],
						a = $(i) ? {
							target: i
						} : i,
						n = isNaN(+t) ? t : +t,
						c = e(n, o);
					return F(a).map((function(t) {
						return l(l({}, t), {
							event: c,
							delay: n
						})
					}))
				})))).map((function(r) {
					var e = r.delay;
					return l(l({}, t.formatTransition(r)), {
						delay: e
					})
				}))
			}, t.prototype.getStateNodes = function(t) {
				var r, e = this;
				if (!t) return [];
				var o = t instanceof or ? t.value : D(t, this.delimiter);
				if ($(o)) {
					var i = this.getStateNode(o).initial;
					return void 0 !== i ? this.getStateNodes(((r = {})[o] = i, r)) : [this, this.states[o]]
				}
				var a = Object.keys(o),
					n = [this];
				return n.push.apply(n, p([], m(U(a.map((function(t) {
					return e.getStateNode(t).getStateNodes(o[t])
				})))), !1)), n
			}, t.prototype.handles = function(t) {
				var r = M(t);
				return this.events.includes(r)
			}, t.prototype.resolveState = function(t) {
				var r = t instanceof or ? t : or.create(t),
					e = Array.from(Jt([], this.getStateNodes(r.value)));
				return new or(l(l({}, r), {
					value: this.resolve(r.value),
					configuration: e,
					done: tr(e, this),
					tags: rr(e),
					machine: this.machine
				}))
			}, t.prototype.transitionLeafNode = function(t, r, e) {
				var o = this.getStateNode(t).next(r, e);
				return o && o.transitions.length ? o : this.next(r, e)
			}, t.prototype.transitionCompoundNode = function(t, r, e) {
				var o = Object.keys(t),
					i = this.getStateNode(o[0])._transition(t[o[0]], r, e);
				return i && i.transitions.length ? i : this.next(r, e)
			}, t.prototype.transitionParallelNode = function(t, r, e) {
				var o, i, a = {};
				try {
					for (var n = d(Object.keys(t)), l = n.next(); !l.done; l = n.next()) {
						var c = l.value,
							m = t[c];
						if (m) {
							var p = this.getStateNode(c)._transition(m, r, e);
							p && (a[c] = p)
						}
					}
				} catch (t) {
					o = {
						error: t
					}
				} finally {
					try {
						l && !l.done && (i = n.return) && i.call(n)
					} finally {
						if (o) throw o.error
					}
				}
				var u = Object.keys(a).map((function(t) {
						return a[t]
					})),
					g = U(u.map((function(t) {
						return t.transitions
					})));
				if (!u.some((function(t) {
						return t.transitions.length > 0
					}))) return this.next(r, e);
				var s = U(u.map((function(t) {
						return t.entrySet
					}))),
					b = U(Object.keys(a).map((function(t) {
						return a[t].configuration
					})));
				return {
					transitions: g,
					entrySet: s,
					exitSet: U(u.map((function(t) {
						return t.exitSet
					}))),
					configuration: b,
					source: r,
					actions: U(Object.keys(a).map((function(t) {
						return a[t].actions
					})))
				}
			}, t.prototype._transition = function(t, r, e) {
				return $(t) ? this.transitionLeafNode(t, r, e) : 1 === Object.keys(t).length ? this.transitionCompoundNode(t, r, e) : this.transitionParallelNode(t, r, e)
			}, t.prototype.getTransitionData = function(t, r) {
				return this._transition(t.value, t, at(r))
			}, t.prototype.next = function(t, r) {
				var e, o, i, a = this,
					n = r.name,
					l = [],
					c = [];
				try {
					for (var u = d(this.getCandidates(n)), g = u.next(); !g.done; g = u.next()) {
						var s = g.value,
							b = s.cond,
							w = s.in,
							f = t.context,
							h = !w || ($(w) && Sr(w) ? t.matches(D(this.getStateNodeById(w).path, this.delimiter)) : R(D(w, this.delimiter), G(this.path.slice(0, -2))(t.value))),
							j = !1;
						try {
							j = !b || lt(this.machine, b, f, r, t)
						} catch (t) {
							throw new Error("Unable to evaluate guard '".concat(b.name || b.type, "' in transition for event '").concat(n, "' in state node '").concat(this.id, "':\n").concat(t.message))
						}
						if (j && h) {
							void 0 !== s.target && (c = s.target), l.push.apply(l, p([], m(s.actions), !1)), i = s;
							break
						}
					}
				} catch (t) {
					e = {
						error: t
					}
				} finally {
					try {
						g && !g.done && (o = u.return) && o.call(u)
					} finally {
						if (e) throw e.error
					}
				}
				if (i) {
					if (!c.length) return {
						transitions: [i],
						entrySet: [],
						exitSet: [],
						configuration: t.value ? [this] : [],
						source: t,
						actions: l
					};
					var x = U(c.map((function(r) {
							return a.getRelativeStateNodes(r, t.historyValue)
						}))),
						y = !!i.internal;
					return {
						transitions: [i],
						entrySet: y ? [] : U(x.map((function(t) {
							return a.nodesFromChild(t)
						}))),
						exitSet: y ? [] : [this],
						configuration: x,
						source: t,
						actions: l
					}
				}
			}, t.prototype.nodesFromChild = function(t) {
				if (t.escapes(this)) return [];
				for (var r = [], e = t; e && e !== this;) r.push(e), e = e.parent;
				return r.push(this), r
			}, t.prototype.escapes = function(t) {
				if (this === t) return !1;
				for (var r = this.parent; r;) {
					if (r === t) return !1;
					r = r.parent
				}
				return !0
			}, t.prototype.getActions = function(t, r, e, o) {
				var i, a, n, l, c = Jt([], o ? this.getStateNodes(o.value) : [this]),
					u = t.configuration.length ? Jt(c, t.configuration) : c;
				try {
					for (var g = d(u), s = g.next(); !s.done; s = g.next()) {
						$t(c, f = s.value) || t.entrySet.push(f)
					}
				} catch (t) {
					i = {
						error: t
					}
				} finally {
					try {
						s && !s.done && (a = g.return) && a.call(g)
					} finally {
						if (i) throw i.error
					}
				}
				try {
					for (var b = d(c), w = b.next(); !w.done; w = b.next()) {
						var f;
						$t(u, f = w.value) && !$t(t.exitSet, f.parent) || t.exitSet.push(f)
					}
				} catch (t) {
					n = {
						error: t
					}
				} finally {
					try {
						w && !w.done && (l = b.return) && l.call(b)
					} finally {
						if (n) throw n.error
					}
				}
				var h = U(t.entrySet.map((function(o) {
					var i = [];
					if ("final" !== o.type) return i;
					var a = o.parent;
					if (!a.parent) return i;
					i.push(Mt(o.id, o.doneData), Mt(a.id, o.doneData ? V(o.doneData, r, e) : void 0));
					var n = a.parent;
					return "parallel" === n.type && qt(n).every((function(r) {
						return tr(t.configuration, r)
					})) && i.push(Mt(n.id)), i
				})));
				t.exitSet.sort((function(t, r) {
					return r.order - t.order
				})), t.entrySet.sort((function(t, r) {
					return t.order - r.order
				}));
				var j = new Set(t.entrySet),
					x = new Set(t.exitSet),
					y = m([U(Array.from(j).map((function(t) {
						return p(p([], m(t.activities.map((function(t) {
							return At(t)
						}))), !1), m(t.onEntry), !1)
					}))).concat(h.map(wt)), U(Array.from(x).map((function(t) {
						return p(p([], m(t.onExit), !1), m(t.activities.map((function(t) {
							return Tt(t)
						}))), !1)
					})))], 2),
					S = y[0],
					v = y[1];
				return st(v.concat(t.actions).concat(S), this.machine.options.actions)
			}, t.prototype.transition = function(t, r, e) {
				void 0 === t && (t = this.initialState);
				var o, i, a = at(r);
				if (t instanceof or) o = void 0 === e ? t : this.resolveState(or.from(t, e));
				else {
					var n = $(t) ? this.resolve(P(this.getResolvedPath(t))) : this.resolve(t),
						l = null != e ? e : this.machine.context;
					o = this.resolveState(or.from(n, l))
				}
				if (!_.a && "*" === a.name) throw new Error("An event cannot have the wildcard type ('".concat("*", "')"));
				if (this.strict && !this.events.includes(a.name) && (i = a.name, !/^(done|error)\./.test(i))) throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(a.name, "'"));
				var c = this._transition(o.value, o, a) || {
						transitions: [],
						configuration: [],
						entrySet: [],
						exitSet: [],
						source: o,
						actions: []
					},
					d = Jt([], this.getStateNodes(o.value)),
					u = c.configuration.length ? Jt(d, c.configuration) : d;
				return c.configuration = p([], m(u), !1), this.resolveTransition(c, o, o.context, a)
			}, t.prototype.resolveRaisedTransition = function(t, r, e) {
				var o, i = t.actions;
				return (t = this.transition(t, r))._event = e, t.event = e.data, (o = t.actions).unshift.apply(o, p([], m(i), !1)), t
			}, t.prototype.resolveTransition = function(t, r, e, o) {
				var i, a, c = this;
				void 0 === o && (o = pt);
				var p = t.configuration,
					u = !r || t.transitions.length > 0,
					f = u ? Zt(this.machine, p) : void 0,
					j = r ? r.historyValue ? r.historyValue : t.source ? this.machine.historyValue(r.value) : void 0 : void 0,
					x = this.getActions(t, e, o, r),
					y = r ? l({}, r.activities) : {};
				try {
					for (var S = d(x), v = S.next(); !v.done; v = S.next()) {
						var k = v.value;
						k.type === g ? y[k.activity.id || k.activity.type] = k : k.type === s && (y[k.activity.id || k.activity.type] = !1)
					}
				} catch (t) {
					i = {
						error: t
					}
				} finally {
					try {
						v && !v.done && (a = S.return) && a.call(S)
					} finally {
						if (i) throw i.error
					}
				}
				var E, C, T = m(Bt(this, r, e, o, x, this.machine.config.preserveActionOrder), 2),
					I = T[0],
					N = T[1],
					_ = m(Y(I, (function(t) {
						return t.type === b || t.type === w && t.to === n.Internal
					})), 2),
					R = _[0],
					M = _[1],
					L = I.filter((function(t) {
						var r;
						return t.type === g && (null === (r = t.activity) || void 0 === r ? void 0 : r.type) === O
					})).reduce((function(t, r) {
						return t[r.activity.id] = function(t, r, e, o) {
							var i, a = ct(t.src),
								n = null === (i = null == r ? void 0 : r.options.services) || void 0 === i ? void 0 : i[a.type],
								l = t.data ? V(t.data, e, o) : void 0,
								c = n ? Vt(n, t.id, l) : Ft(t.id);
							return c.meta = t, c
						}(r.activity, c.machine, N, o), t
					}), r ? l({}, r.children) : {}),
					D = u ? t.configuration : r ? r.configuration : [],
					P = tr(D, this),
					z = new or({
						value: f || r.value,
						context: N,
						_event: o,
						_sessionid: r ? r._sessionid : null,
						historyValue: f ? j ? (E = j, C = f, {
							current: C,
							states: q(E, C)
						}) : void 0 : r ? r.historyValue : void 0,
						history: !f || t.source ? r : void 0,
						actions: f ? M : [],
						activities: f ? y : r ? r.activities : {},
						events: [],
						configuration: D,
						transitions: t.transitions,
						children: L,
						done: P,
						tags: null == r ? void 0 : r.tags,
						machine: this
					}),
					H = e !== N;
				z.changed = o.name === A || H;
				var G = z.history;
				G && delete G.history;
				var B = !P && (this._transient || p.some((function(t) {
					return t._transient
				})));
				if (!(u || B && "" !== o.name)) return z;
				var U = z;
				if (!P)
					for (B && (U = this.resolveRaisedTransition(U, {
							type: h
						}, o)); R.length;) {
						var W = R.shift();
						U = this.resolveRaisedTransition(U, W._event, o)
					}
				var F = U.changed || (G ? !!U.actions.length || H || typeof G.value != typeof U.value || ! function t(r, e) {
					if (r === e) return !0;
					if (void 0 === r || void 0 === e) return !1;
					if ($(r) || $(e)) return r === e;
					var o = Object.keys(r),
						i = Object.keys(e);
					return o.length === i.length && o.every((function(o) {
						return t(r[o], e[o])
					}))
				}(U.value, G.value) : void 0);
				return U.changed = F, U.history = G, U.tags = rr(U.configuration), U
			}, t.prototype.getStateNode = function(t) {
				if (Sr(t)) return this.machine.getStateNodeById(t);
				if (!this.states) throw new Error("Unable to retrieve child state '".concat(t, "' from '").concat(this.id, "'; no child states exist."));
				var r = this.states[t];
				if (!r) throw new Error("Child state '".concat(t, "' does not exist on '").concat(this.id, "'"));
				return r
			}, t.prototype.getStateNodeById = function(t) {
				var r = Sr(t) ? t.slice("#".length) : t;
				if (r === this.id) return this;
				var e = this.machine.idMap[r];
				if (!e) throw new Error("Child state node '#".concat(r, "' does not exist on machine '").concat(this.id, "'"));
				return e
			}, t.prototype.getStateNodeByPath = function(t) {
				if ("string" == typeof t && Sr(t)) try {
					return this.getStateNodeById(t.slice(1))
				} catch (t) {}
				for (var r = L(t, this.delimiter).slice(), e = this; r.length;) {
					var o = r.shift();
					if (!o.length) break;
					e = e.getStateNode(o)
				}
				return e
			}, t.prototype.resolve = function(t) {
				var r, e = this;
				if (!t) return this.initialStateValue || yr;
				switch (this.type) {
					case "parallel":
						return z(this.initialStateValue, (function(r, o) {
							return r ? e.getStateNode(o).resolve(t[o] || r) : yr
						}));
					case "compound":
						if ($(t)) {
							var o = this.getStateNode(t);
							return "parallel" === o.type || "compound" === o.type ? ((r = {})[t] = o.initialStateValue, r) : t
						}
						return Object.keys(t).length ? z(t, (function(t, r) {
							return t ? e.getStateNode(r).resolve(t) : yr
						})) : this.initialStateValue || {};
					default:
						return t || yr
				}
			}, t.prototype.getResolvedPath = function(t) {
				if (Sr(t)) {
					var r = this.machine.idMap[t.slice("#".length)];
					if (!r) throw new Error("Unable to find state node '".concat(t, "'"));
					return r.path
				}
				return L(t, this.delimiter)
			}, Object.defineProperty(t.prototype, "initialStateValue", {
				get: function() {
					var t, r;
					if (this.__cache.initialStateValue) return this.__cache.initialStateValue;
					if ("parallel" === this.type) r = H(this.states, (function(t) {
						return t.initialStateValue || yr
					}), (function(t) {
						return !("history" === t.type)
					}));
					else if (void 0 !== this.initial) {
						if (!this.states[this.initial]) throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
						r = Yt(this.states[this.initial]) ? this.initial : ((t = {})[this.initial] = this.states[this.initial].initialStateValue, t)
					} else r = {};
					return this.__cache.initialStateValue = r, this.__cache.initialStateValue
				},
				enumerable: !1,
				configurable: !0
			}), t.prototype.getInitialState = function(t, r) {
				this._init();
				var e = this.getStateNodes(t);
				return this.resolveTransition({
					configuration: e,
					entrySet: e,
					exitSet: [],
					transitions: [],
					source: void 0,
					actions: []
				}, void 0, null != r ? r : this.machine.context, void 0)
			}, Object.defineProperty(t.prototype, "initialState", {
				get: function() {
					var t = this.initialStateValue;
					if (!t) throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
					return this.getInitialState(t)
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "target", {
				get: function() {
					var t;
					if ("history" === this.type) {
						var r = this.config;
						t = $(r.target) && Sr(r.target) ? P(this.machine.getStateNodeById(r.target).path.slice(this.path.length - 1)) : r.target
					}
					return t
				},
				enumerable: !1,
				configurable: !0
			}), t.prototype.getRelativeStateNodes = function(t, r, e) {
				return void 0 === e && (e = !0), e ? "history" === t.type ? t.resolveHistory(r) : t.initialStateNodes : [t]
			}, Object.defineProperty(t.prototype, "initialStateNodes", {
				get: function() {
					var t = this;
					return Yt(this) ? [this] : "compound" !== this.type || this.initial ? U(B(this.initialStateValue).map((function(r) {
						return t.getFromRelativePath(r)
					}))) : (_.a || J(!1, "Compound state node '".concat(this.id, "' has no initial state.")), [this])
				},
				enumerable: !1,
				configurable: !0
			}), t.prototype.getFromRelativePath = function(t) {
				if (!t.length) return [this];
				var r = m(t),
					e = r[0],
					o = r.slice(1);
				if (!this.states) throw new Error("Cannot retrieve subPath '".concat(e, "' from node with no states"));
				var i = this.getStateNode(e);
				if ("history" === i.type) return i.resolveHistory();
				if (!this.states[e]) throw new Error("Child state '".concat(e, "' does not exist on '").concat(this.id, "'"));
				return this.states[e].getFromRelativePath(o)
			}, t.prototype.historyValue = function(t) {
				if (Object.keys(this.states).length) return {
					current: t || this.initialStateValue,
					states: H(this.states, (function(r, e) {
						if (!t) return r.historyValue();
						var o = $(t) ? void 0 : t[e];
						return r.historyValue(o || r.initialStateValue)
					}), (function(t) {
						return !t.history
					}))
				}
			}, t.prototype.resolveHistory = function(t) {
				var r = this;
				if ("history" !== this.type) return [this];
				var e = this.parent;
				if (!t) {
					var o = this.target;
					return o ? U(B(o).map((function(t) {
						return e.getFromRelativePath(t)
					}))) : e.initialStateNodes
				}
				var i, a, n = (i = e.path, a = "states", function(t) {
					var r, e, o = t;
					try {
						for (var n = d(i), l = n.next(); !l.done; l = n.next()) {
							var c = l.value;
							o = o[a][c]
						}
					} catch (t) {
						r = {
							error: t
						}
					} finally {
						try {
							l && !l.done && (e = n.return) && e.call(n)
						} finally {
							if (r) throw r.error
						}
					}
					return o
				})(t).current;
				return $(n) ? [e.getStateNode(n)] : U(B(n).map((function(t) {
					return "deep" === r.history ? e.getFromRelativePath(t) : [e.states[t[0]]]
				})))
			}, Object.defineProperty(t.prototype, "stateIds", {
				get: function() {
					var t = this,
						r = U(Object.keys(this.states).map((function(r) {
							return t.states[r].stateIds
						})));
					return [this.id].concat(r)
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "events", {
				get: function() {
					var t, r, e, o;
					if (this.__cache.events) return this.__cache.events;
					var i = this.states,
						a = new Set(this.ownEvents);
					if (i) try {
						for (var n = d(Object.keys(i)), l = n.next(); !l.done; l = n.next()) {
							var c = i[l.value];
							if (c.states) try {
								for (var m = (e = void 0, d(c.events)), p = m.next(); !p.done; p = m.next()) {
									var u = p.value;
									a.add("".concat(u))
								}
							} catch (t) {
								e = {
									error: t
								}
							} finally {
								try {
									p && !p.done && (o = m.return) && o.call(m)
								} finally {
									if (e) throw e.error
								}
							}
						}
					} catch (r) {
						t = {
							error: r
						}
					} finally {
						try {
							l && !l.done && (r = n.return) && r.call(n)
						} finally {
							if (t) throw t.error
						}
					}
					return this.__cache.events = Array.from(a)
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t.prototype, "ownEvents", {
				get: function() {
					var t = new Set(this.transitions.filter((function(t) {
						return !(!t.target && !t.actions.length && t.internal)
					})).map((function(t) {
						return t.eventType
					})));
					return Array.from(t)
				},
				enumerable: !1,
				configurable: !0
			}), t.prototype.resolveTarget = function(t) {
				var r = this;
				if (void 0 !== t) return t.map((function(t) {
					if (!$(t)) return t;
					var e = t[0] === r.delimiter;
					if (e && !r.parent) return r.getStateNodeByPath(t.slice(1));
					var o = e ? r.key + t : t;
					if (!r.parent) return r.getStateNodeByPath(o);
					try {
						return r.parent.getStateNodeByPath(o)
					} catch (t) {
						throw new Error("Invalid transition definition for state node '".concat(r.id, "':\n").concat(t.message))
					}
				}))
			}, t.prototype.formatTransition = function(t) {
				var r = this,
					e = function(t) {
						if (void 0 !== t && "" !== t) return F(t)
					}(t.target),
					o = "internal" in t ? t.internal : !e || e.some((function(t) {
						return $(t) && t[0] === r.delimiter
					})),
					i = this.machine.options.guards,
					a = this.resolveTarget(e),
					n = l(l({}, t), {
						actions: st(F(t.actions)),
						cond: tt(t.cond, i),
						target: a,
						source: this,
						internal: o,
						eventType: t.event,
						toJSON: function() {
							return l(l({}, n), {
								target: n.target ? n.target.map((function(t) {
									return "#".concat(t.id)
								})) : void 0,
								source: "#".concat(r.id)
							})
						}
					});
				return n
			}, t.prototype.formatTransitions = function() {
				var t, r, e, o = this;
				if (this.config.on)
					if (Array.isArray(this.config.on)) e = this.config.on;
					else {
						var i = this.config.on,
							a = i["*"],
							n = void 0 === a ? [] : a,
							l = c(i, ["*"]);
						e = U(Object.keys(l).map((function(t) {
							_.a || "" !== t || J(!1, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(o.id, '".'));
							var r = nt(t, l[t]);
							return _.a || function(t, r, e) {
								var o = e.slice(0, -1).some((function(t) {
										return !("cond" in t) && !("in" in t) && ($(t.target) || et(t.target))
									})),
									i = "" === r ? "the transient event" : "event '".concat(r, "'");
								J(!o, "One or more transitions for ".concat(i, " on state '").concat(t.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.")
							}(o, t, r), r
						})).concat(nt("*", n)))
					}
				else e = [];
				var u = this.config.always ? nt("", this.config.always) : [],
					g = this.config.onDone ? nt(String(Mt(this.id)), this.config.onDone) : [];
				_.a || J(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
				var s = U(this.invoke.map((function(t) {
						var r = [];
						return t.onDone && r.push.apply(r, p([], m(nt(String(Lt(t.id)), t.onDone)), !1)), t.onError && r.push.apply(r, p([], m(nt(String(Dt(t.id)), t.onError)), !1)), r
					}))),
					b = this.after,
					w = U(p(p(p(p([], m(g), !1), m(s), !1), m(e), !1), m(u), !1).map((function(t) {
						return F(t).map((function(t) {
							return o.formatTransition(t)
						}))
					})));
				try {
					for (var f = d(b), h = f.next(); !h.done; h = f.next()) {
						var j = h.value;
						w.push(j)
					}
				} catch (r) {
					t = {
						error: r
					}
				} finally {
					try {
						h && !h.done && (r = f.return) && r.call(f)
					} finally {
						if (t) throw t.error
					}
				}
				return w
			}, t
		}();

	function Or(t, r, e) {
		return void 0 === e && (e = t.context), new vr(t, r, e)
	}

	function kr(t, r) {
		return new vr(t, r)
	}

	function Er(t, r) {
		var e, o, i;
		try {
			for (var a = d(Object.keys(t)), n = a.next(); !n.done; n = a.next()) {
				var l = n.value;
				R(l, r) && (!i || r.length > i.length) && (i = l)
			}
		} catch (t) {
			e = {
				error: t
			}
		} finally {
			try {
				n && !n.done && (o = a.return) && o.call(a)
			} finally {
				if (e) throw e.error
			}
		}
		return t[i]
	}

	function Cr(t, r, e) {
		var o, i, a = or.from(t, t instanceof or ? t.context : void 0);
		try {
			for (var n = d(r), l = n.next(); !l.done; l = n.next()) {
				var c = m(l.value, 2),
					p = c[0],
					u = c[1];
				if (a.matches(p)) return u(a)
			}
		} catch (t) {
			o = {
				error: t
			}
		} finally {
			try {
				l && !l.done && (i = n.return) && i.call(n)
			} finally {
				if (o) throw o.error
			}
		}
		return e(a)
	}

	function Ar(t) {
		return t
	}
	var Tr = Ar,
		Ir = Nt,
		Nr = ht,
		_r = xt,
		Rr = St,
		Mr = zt,
		Lr = Lt
}, function(t, r, e) {
	"use strict";
	(function(t) {
		e.d(r, "a", (function() {
			return i
		})), e.d(r, "b", (function() {
			return a
		}));
		var o = e(22);

		function i() {
			return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : void(o.a || console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues"))
		}

		function a(t) {
			if (i()) {
				var r = function() {
					var t = i();
					if (t && "__xstate__" in t) return t.__xstate__
				}();
				r && r.register(t)
			}
		}
	}).call(this, e(67))
}, , , function(t, r, e) {
	var o = e(33),
		i = e(378);
	"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
		[t.i, i, ""]
	]);
	var a = {
		insert: "head",
		singleton: !1
	};
	o(i, a);
	t.exports = i.locals || {}
}, function(t, r, e) {
	"use strict";
	e.r(r);
	var o = e(11),
		i = e.n(o)()(!1);
	i.push([t.i, ".cc-theme--light .jwl-study-multimedia-title{color:#4a6da7}.cc-theme--light .jwl-publication-reference{color:#4a6da7}.cc-theme--light .jwl-extraction-title,.cc-theme--light .jwl-extraction-title-with-icon,.cc-theme--light .jwl-extraction-subtitle{color:#121212}.cc-theme--dark .jwl-study-multimedia-title{color:#9fb9e3}.cc-theme--dark .jwl-publication-reference{color:#9fb9e3}.cc-theme--dark .jwl-extraction-title,.cc-theme--dark .jwl-extraction-title-with-icon,.cc-theme--dark .jwl-extraction-subtitle{color:#fff}.page-wrap{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.primary-pane{width:100%;-webkit-box-ordinal-group:1;-moz-box-ordinal-group:1;-ms-flex-order:1;-webkit-order:1;order:1}.secondary-pane{width:100%;background-color:#f7f7f5;-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-ordinal-group:2;-moz-box-ordinal-group:2;-ms-flex-order:2;-webkit-order:2;order:2}.jwl-study-pane-item-ios{position:absolute;top:0;left:0;right:0}.jwl-study-pane-item{position:fixed;top:0;left:0;right:0;bottom:0;overflow-y:scroll;-webkit-overflow-scrolling:touch;-ms-overflow-style:none}#jwl-gems-pane,#jwl-marginals-pane,#jwl-supplementary-pane{-ms-overflow-style:-ms-autohiding-scrollbar}#jwl-gems-pane ul,#jwl-marginals-pane ul,#jwl-supplementary-pane ul{padding-left:16px;padding-right:16px}.hidden{position:fixed;top:0;bottom:0;visibility:hidden;overflow-y:hidden;height:100%}.background{min-height:100%}h3.jwl-gem-label{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:calc(100% - 16px)}.dir-ltr h3.jwl-gem-label{padding-left:16px}.dir-rtl h3.jwl-gem-label{padding-right:16px}.jwl-first-gem{margin-top:1.25em !important}.jwl-gem{padding-left:0px !important;padding-right:0px !important}.jwl-gem a{cursor:pointer}.jwl-reference-header{width:100%;position:relative;background-color:#ecebe7}.jwl-extraction-item{padding-bottom:1em}.jwl-extraction-item ul{margin-top:.5em}.jwl-extraction-item .ss{margin-top:.5em}.jwl-extraction-header{height:50px;line-height:50px}.jwl-extraction-image{width:50px;height:50px;background-position:center center;background-repeat:no-repeat;background-size:cover;background-color:#7b7b7b;position:absolute}.jwl-extraction-title-container{position:absolute;right:26px;left:0px;top:0px;bottom:0px}.jwl-extraction-flex-container{display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;align-items:center;justify-content:center;flex-direction:column;align-items:center;height:50px;margin-left:60px;max-width:calc(100% - 60px)}.jwl-extraction-title,.jwl-extraction-title-with-icon{align-self:left;font-size:12pt !important;line-height:1.8em !important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.jwl-extraction-title-with-icon{margin-left:20px;max-width:calc(100% - 20px)}.jwl-extraction-subtitle{align-self:left;font-size:9pt !important;line-height:1.6em !important;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;width:100%}.jwl-extraction-subtitle-bible-fix{display:table}.jwl-extraction-subtitle .eloc{display:none}.jwl-extraction-chevron{position:absolute;top:0px;right:10px;bottom:0px;width:9px;height:100%;background-position:center center;background-repeat:no-repeat;background-size:contain}.jwl-extraction-header-icon{width:12px;height:100%;margin-left:60px;position:absolute}.jwl-study-multimedia-item{padding-left:16px;padding-right:16px;margin-top:1em;margin-bottom:1em}.jwl-study-multimedia{text-align:left}.jwl-study-image{width:100%;height:auto;vertical-align:top;background-position:center center;background-repeat:no-repeat;background-size:cover;display:block}#summary .contextTtl{display:none}.jwl-study-outlines .bible .outline .chapterNo+ul{margin-left:-16px !important}.jwl-study-outlines .bible .outline .chapterNo{display:none}.jwl-study-outlines .itemLabel{display:none}.jwd_selection_line{background-color:#146fe1;width:2px}.text_selection_handle_image{position:absolute;max-width:50%;max-height:50%;align-self:center}.jwl-marginal-classification-header{padding-left:16px;margin-top:1.5em;margin-bottom:.2em;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:calc(100% - 16px)}.jwl-marginal-classification-header:first-child{margin-top:0em}.jwl-marginal-classification-image{width:.6em;height:.6em;position:relative;margin-right:.4em;vertical-align:middle;margin-bottom:.15em}.jwl-all-marginals-image{width:1.4em;height:1.4em;margin-left:16px;margin-right:5pt;vertical-align:top}.no_data_message{padding-top:1.2em !important}.jwl-publication-reference-image{width:1.2em;height:1.2em;position:relative;margin-right:.4em;vertical-align:middle;margin-bottom:.15em}.video-poster-image-wrapper{display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;align-items:center;justify-content:center;flex-direction:column;align-items:center;position:relative;width:100%}.video-poster-image{position:relative;filter:brightness(80%)}.video-overlay{pointer-events:none;position:absolute;width:25%;height:auto}@keyframes fade-in{0%{opacity:0.8}1%{visibility:visible;opacity:0.8}100%{opacity:1}}@keyframes fade-out{0%{visibility:visible;opacity:1}1%{opacity:1}100%{opacity:0.8}}@keyframes anim{0%{visibility:hidden;opacity:1;transform:translateX(100%)}1%{display:block;visibility:visible;transform:translateX(100%)}100%{transform:translateX(0)}}@keyframes anim-out{0%{position:fixed;top:0;bottom:0;display:block;visibility:visible;opacity:1;transform:translateX(0)}99%{opacity:1;visibility:hidden;transform:translateX(100%)}100%{visibility:hidden;transform:translateX(100%)}}@keyframes anim-out-visible{0%{display:block;visibility:visible;opacity:1;transform:translateX(0)}100%{opacity:1;transform:translateX(100%)}}.fade-enter{opacity:0.8}.fade-enter.fade-enter-active{opacity:1;animation:fade-in .25s ease-in;animation-fill-mode:forwards}.fade-exit{opacity:1}.fade-exit.fade-exit-active{opacity:0.8;animation:fade-out .25s ease-out;animation-fill-mode:forwards}.slide-enter{opacity:1}.slide-enter.slide-enter-active{opacity:1;animation:anim .25s ease-in;animation-fill-mode:forwards}.slide-exit{opacity:1}.slide-exit.slide-exit-active{opacity:1;animation:anim-out .25s ease-out;animation-fill-mode:forwards}.slideIn-enter{opacity:1}.slideIn-enter.slideIn-enter-active{opacity:1;animation:anim .25s ease-in;animation-fill-mode:forwards}.slideIn-exit{opacity:1}.slideIn-exit.slideIn-exit-active{opacity:1;animation:anim .25s ease-in;animation-fill-mode:forwards}.slideOut-enter,.slideOut2-enter{opacity:1}.slideOut-enter.slideOut-enter-active,.slideOut2-enter.slideOut2-enter-active{opacity:1;animation:anim-out-visible .25s ease-out;animation-fill-mode:forwards}.slideOut-exit,.slideOut2-exit{opacity:1}.slideOut-exit.slideOut-exit-active,.slideOut2-exit.slideOut2-exit-active{opacity:1;animation:anim-out-visible .25s ease-out;animation-fill-mode:forwards}\n", ""]), r.default = i
}, function(t, r, e) {
	"use strict";
	var o;
	! function(t) {
		t.TYPE_ACTION_CONTENT = "a", t.TYPE_CONTENT = "c", t.TYPE_OUTLINE = "o"
	}(o || (o = {})), t.exports = o
}, function(t, r, e) {
	"use strict";
	var o;
	! function(t) {
		t.TYPE_VERSE = "v", t.TYPE_PARAGRAPH = "p", t.TYPE_MESSAGE = "m", t.TYPE_LOCATION_NOTES = "n", t.TYPE_LOCATION_OUTLINES = "o", t.TYPE_CAPTION_CONTENT = "cc", t.TYPE_ALL_MARGINALS = "am"
	}(o || (o = {})), t.exports = o
}, function(t, r, e) {
	"use strict";
	var o, i = e(364),
		a = e(8),
		n = e(35),
		l = e(38),
		c = e(64),
		d = e(365),
		m = e(99),
		p = e(70),
		u = e(335),
		g = e(37),
		s = e(25),
		b = e(30),
		w = e(48),
		f = e(39),
		h = e(76),
		j = e(50),
		x = e(334),
		y = e(28),
		S = e(366);
	! function(t) {
		t[t.None = 0] = "None", t[t.Anchored = 1] = "Anchored", t[t.Highlighting = 2] = "Highlighting", t[t.RangeSelected = 3] = "RangeSelected", t[t.BackHandleSelecting = 4] = "BackHandleSelecting", t[t.ForwardHandleSelecting = 5] = "ForwardHandleSelecting"
	}(o || (o = {}));
	var v = function() {
		function t(r, e, a) {
			var l = this;
			this._touchStartTime = 0, this._lastFrameMoveTime = 0, this.touchStart = function(t, r, e, i, a, c) {
				if (void 0 === c && (c = !0), !t) return !1;
				if (l._touchStartTime = Date.now(), !document.activeElement || "TEXTAREA" !== document.activeElement.tagName && "INPUT" !== document.activeElement.tagName || "TEXTAREA" === t.tagName || "INPUT" === t.tagName || document.activeElement.blur(), l._currentTouchStartCoordinates = {
						x: i,
						y: a
					}, b.getContextMenuVisible() ? (n.setContextMenuVisible(!1), l._touchFiredWithMenuVisible = !0, s.send({
						type: y.NATIVE_ACTION_HIDE_USER_MARK_MENU
					})) : l._touchFiredWithMenuVisible = !1, j.elementHasAncestorWithTag(t, "A")) return l._clearTargetTextIfNeeded(t), !1;
				var d = t.parentElement;
				return (t.classList && t.classList.contains(m.HANDLE_CONTAINER_CLASS) || d && d.classList && d.classList.contains(m.HANDLE_CONTAINER_CLASS)) && (!0, l._touchCanEither([o.ForwardHandleSelecting, o.BackHandleSelecting]) && (t.id === m.END_HANDLE_ID || d && d.id === m.END_HANDLE_ID ? l._touchState = o.ForwardHandleSelecting : (t.id === m.START_HANDLE_ID || d && d.id === m.START_HANDLE_ID) && (l._touchState = o.BackHandleSelecting))), l._clearMarkWindowTimer(), l._clearLongPressTimer(), l._isApplePencil = !1, (!t.classList || !t.classList.contains("tt") && !t.classList.contains("notemarker-use")) && (l._touchState = o.Highlighting, l._touchMoved = !1, l._clearLongPressTimer(), l._clearContextMenuTimer(), l._touchIs(o.RangeSelected) || (s.send({
					type: y.NATIVE_ACTION_HIDE_USER_MARK_MENU
				}), l._startUserMarkFromTouch(r, e, i, a)), !1)
			}, this.touchMove = function(r, e, i, a) {
				var n = !1;
				if (l._clearMarkWindowTimer(), l._clearLongPressTimer(), l._touchMoved = !0, !0 !== l._touchIs(o.Highlighting) && !0 !== l._touchCan(o.Highlighting)) return n;
				if (n = !0, Date.now() < l._lastFrameMoveTime + 1e3 / 60) return n;
				if (l._lastFrameMoveTime = Date.now(), l._currentTouchStartCoordinates && null != l._currentTouchStartCoordinates.x && null != l._currentTouchStartCoordinates.y) {
					var d = Math.abs(i - l._currentTouchStartCoordinates.x),
						m = Math.abs(a - l._currentTouchStartCoordinates.y);
					if (d <= t.TOUCH_MOVE_THRESHOLD && m <= t.TOUCH_MOVE_THRESHOLD) return n
				}
				l._lastTouchCoordinates = [i, a];
				var u = document.elementFromPoint(r, e),
					s = null;
				if (u.id) {
					if (!((s = g.getTokenInfoByElementID(u.id)).isMarkableWord() || (s = l._findMatchingTokenInLine(i, a, u)) && s.isMarkableWord())) return n
				} else if (!(s = l._findMatchingTokenInLine(i, a, u)) || !s.isMarkableWord()) return n;
				if (l._touchState !== o.Highlighting && null === u) return n;
				if (l._stopMediaMarkerFocusing(), l._lastSelectedTokenInfo && l._lastSelectedTokenInfo.groupId === s.groupId && l._lastSelectedTokenInfo.groupWordIndex === s.groupWordIndex) return n;
				if (l._pendingUserMark && !l._pendingUserMark.isBlank() && f.getGroupID(l._pendingUserMark) !== s.groupId) return l._lastTouchCoordinates = null, l._lastSelectedTokenInfo = null, n;
				if (l._pendingUserMark && !0 !== l._pendingUserMark.isBlank()) {
					!0 === s.isMarkableWord() && l._updateUserMarkFromAnchorToTokenInfo(s)
				} else !0 === s.isMarkableWord() && (l._pendingUserMark = new c(p.defaultColor, p.style), l._pendingUserMark.isPending = !0, l._anchorTokenInfo || (l._anchorTokenInfo = s), l._updateUserMarkFromAnchorToTokenInfo(s), l._clearTargetTextIfNeeded(u));
				return l._touchState = o.Highlighting, l._lastTouchCoordinates = [i, a], l._lastSelectedTokenInfo = s, n
			}, this.isHighlighting = function() {
				return l._touchState === o.Highlighting
			}, this.touchEnd = function(r, e, i, a, c) {
				var d, g;
				if ((d = j.ancestorElementWithClassList(r)) && (d.classList.contains("tt") || d.classList.contains("notemarker-use")) && !d.classList.contains("vl") && !d.classList.contains("cl") || l._elementOrAncestorHasClassName(r, "gen-field")) return l._clearTargetTextIfNeeded(d), !1;
				l._clearMarkWindowTimer(), l._clearLongPressTimer(), l._lastTouchCoordinates = null, l._currentTouchStartCoordinates = null, l._lastSelectedTokenInfo = null;
				var w = document.elementFromPoint(e, i);
				if (w = j.ancestorElementWithClassList(w), l._touchState === o.Highlighting) l._pendingUserMark && (l._pendingUserMark.isPending = !1, n.cacheUserMark(l._pendingUserMark), u.cacheTextLineRectsForMark(l._pendingUserMark), s.send({
					type: y.NATIVE_ACTION_SHOW_USER_MARK_MENU,
					userMark: u.serializeSingleLocatedUserMark(l._pendingUserMark, !0)
				}), l._contextMenuTimer = setTimeout((function() {
					b.shouldAutoHideContextMenu() && s.send({
						type: y.NATIVE_ACTION_HIDE_USER_MARK_MENU
					})
				}), t.CONTEXT_MENU_TIME_THRESHOLD), b.setAutoHideContextMenu(!0)), l._touchState = o.None;
				else if (l._touchState !== o.Anchored || l._isApplePencil) {
					l._clearContextMenuTimer();
					var h = {
							x: a,
							y: c
						},
						x = !1;
					l._touchFiredWithMenuVisible && (l._clearSelection(), l._touchState = o.None, l._touchFiredWithMenuVisible = !1, x = !0);
					var S = f.getLineRects(l._selection);
					if (!x && l._touchIs(o.RangeSelected) && S && f.isPointContained(l._selection, h, S)) s.send({
						type: y.NATIVE_EVENT_TEXT_SELECTION_CREATED,
						selection: m.serializeSelection(l._selection, !0)
					}), g = !0;
					else if (l._touchState = o.None, l._clearSelection(), !l._touchMoved || l._isApplePencil) {
						var v = null,
							O = !1,
							k = l._clearTargetTextIfNeeded(d);
						if (w)
							if ("A" === w.tagName.toUpperCase() || j.elementHasAncestorWithTag(w, "A")) O = !0;
							else if (w.classList.contains("vl") || w.classList.contains("cl")) {
							var E = j.ancestorElementMatchingID(w, /^v\d+\-\d+-\d+\-\d+$/);
							E && (O = !0, g = !0, l._selectVerseLabel(w, E))
						} else v = p.markWithIdentifier(w.getAttribute(u.USER_MARK_ID_ATTR));
						if (x) return !0;
						if (v) s.send({
							type: y.NATIVE_ACTION_SHOW_EDIT_USER_MARK_MENU,
							userMark: u.serializeSingleLocatedUserMark(v, !0)
						}), g = !0;
						else if (O || k) k && (g = !0);
						else;
					} else if (x) return !0
				} else 0;
				return l._touchMoved = !1, l._isApplePencil = !1, l._pendingUserMark = null, l._anchorTokenInfo = null, l._lastSelectedTokenInfo = null, l._touchFiredWithMenuVisible = !1, g
			}, this.touchCancel = function() {
				l._touchFiredWithMenuVisible ? l._touchFiredWithMenuVisible = !1 : (l._resetTouchState(), l._selection && l._clearSelection())
			}, this._clearTargetTextIfNeeded = function(t) {
				return i.TargetTextHelper.clearTargetTextIfNeeded(t, l._callbackHandler)
			}, this._selectionHandleTouchStart = function(t) {
				var r = t.target;
				r && l._touchCanEither([o.ForwardHandleSelecting, o.BackHandleSelecting]) && (t.preventDefault(), r.id === m.END_HANDLE_ID || r.parentElement && r.parentElement.id === m.END_HANDLE_ID ? l._touchState = o.ForwardHandleSelecting : (r.id === m.START_HANDLE_ID || r.parentElement && r.parentElement.id === m.START_HANDLE_ID) && (l._touchState = o.BackHandleSelecting))
			}, this._selectionHandleTouchMove = function(t) {
				if (l._touchIsEither([o.BackHandleSelecting, o.ForwardHandleSelecting]) && !(Date.now() < l._lastFrameMoveTime + 1e3 / 60)) {
					var r, e, i, a;
					l._lastFrameMoveTime = Date.now();
					var n = t.changedTouches[0];
					r = n.clientX, e = n.clientY, i = n.pageX, a = n.pageY;
					var c = l._touchIs(o.ForwardHandleSelecting),
						d = c ? m.END_HANDLE_TOP_THRESHOLD : m.START_HANDLE_TOP_THRESHOLD,
						p = e;
					p = c ? e - d : e + d;
					var u = document.elementFromPoint(r, p);
					if (u) {
						var s = g.getTokenInfoByElementID(u.id);
						if (s && s.isMarkableWord() && !(c && s.groupWordIndex < l._selection.startTokenInfo.groupWordIndex || !c && s.groupWordIndex > l._selection.endTokenInfo.groupWordIndex || (l._stopMediaMarkerFocusing(), l._lastSelectedTokenInfo && l._lastSelectedTokenInfo.groupId === s.groupId && l._lastSelectedTokenInfo.groupWordIndex === s.groupWordIndex))) {
							if (l._selection && !l._selection.isBlank() && f.getGroupID(l._selection) !== s.groupId) return l._lastTouchCoordinates = null, void(l._lastSelectedTokenInfo = null);
							l._lastTouchCoordinates = [i, a], l._lastSelectedTokenInfo = s, c ? l._selection.endTokenInfo = s : l._selection.startTokenInfo = s, l._updateSelectionFromEndToEnd(), t.preventDefault()
						}
					}
				}
			}, this._selectionHandleTouchEnd = function(t) {
				t.preventDefault(), l._clearMarkWindowTimer(), l._clearLongPressTimer(), l._lastTouchCoordinates = null, l._lastSelectedTokenInfo = null, l._touchState = o.RangeSelected, s.send({
					type: y.NATIVE_EVENT_TEXT_SELECTION_CREATED,
					selection: m.serializeSelection(l._selection, !0)
				})
			}, this._selectVerseLabel = function(t, r) {
				var e = t.getBoundingClientRect(),
					o = {
						left: e.left,
						top: e.top,
						width: e.width,
						height: e.height
					},
					i = S.TextHelper.getVerseNumberFromVerseID(r.id);
				n.selectVerseLabel(i);
				var a, c = j.textSnippetForVerse(l._contentElement, r.id),
					d = h.getContent();
				if (d) {
					var m;
					(m = d.uriPrefix) && (a = m + i)
				}
				var p = {
					verseID: i,
					text: c,
					rect: o,
					uri: a
				};
				s.send({
					type: y.NATIVE_ACTION_SHOW_PARAGRAPH_MENU,
					blockSelection: p,
					actionSource: "verseLabel"
				}), l._callbackHandler({
					type: x.TouchEventCallbackType.FocusVerseOrParagraph,
					verseID: i
				})
			}, this._selectParagraph = function(t, r) {
				var e = r.getAttribute("data-pid");
				if (e && e.length > 0) {
					var o = parseInt(e, 10);
					n.selectParagraphLabel(o);
					var i = j.textSnippetForSelector(l._contentElement, '[data-pid="' + o + '"]'),
						a = g.getRectContainingFirstLineOfElement(r);
					if (!a) {
						var c = r.getBoundingClientRect();
						a = {
							left: c.left,
							top: c.top,
							width: c.width,
							height: c.height
						}
					}
					if (!isNaN(o)) {
						var d = {
							paragraphID: o,
							text: i,
							rect: a
						};
						s.send({
							type: y.NATIVE_ACTION_SHOW_PARAGRAPH_MENU,
							blockSelection: d
						}), l._callbackHandler({
							type: x.TouchEventCallbackType.FocusVerseOrParagraph,
							paragraphID: o
						})
					}
				}
			}, this._selectVerse = function(t, r) {
				var e, o = r.id,
					i = S.TextHelper.getVerseNumberFromVerseID(o);
				if (void 0 !== i) {
					n.selectVerseLabel(i);
					var a = void 0;
					a = 1 === i ? 'span[data-vlid="vl0"], span[data-vlid="1"]' : 'span[data-vlid="' + i + '"]';
					var c = document.querySelector(a);
					if (c) {
						var d = c.getBoundingClientRect();
						e = {
							left: d.left,
							top: d.top,
							width: d.width,
							height: d.height
						}
					}
					var m = j.textSnippetForVerse(l._contentElement, o),
						p = void 0,
						u = h.getContent(),
						g = void 0;
					if (u) {
						var b = u.uriPrefix;
						b && (g = b + i)
					}
					p = {
						verseID: i,
						text: m,
						rect: e,
						uri: g
					}, s.send({
						type: y.NATIVE_ACTION_SHOW_PARAGRAPH_MENU,
						blockSelection: p
					}), l._callbackHandler({
						type: x.TouchEventCallbackType.FocusVerseOrParagraph,
						verseID: i
					})
				}
			}, this._onWindowDidResize = function() {
				l._selection && l._callbackHandler({
					type: x.TouchEventCallbackType.DrawSelection,
					selection: l._selection
				})
			}, this._contentElement = e, this._callbackHandler = r, this._touchState = o.None, this._lastTouchCoordinates = null, this._currentTouchStartCoordinates = null, this._lastSelectedTokenInfo = null, this._anchorTokenInfo = null, this._pendingUserMark = null, this._selection = null, this._touchMoved = !1, this._isApplePencil = !1, this.eventTarget = e, this._isBibleChapter = a
		}
		return t.prototype.resetSelection = function() {
			this._touchState = o.None, this._clearSelection()
		}, t.prototype._findMatchingTokenInLine = function(t, r, e) {
			if (this._lastSelectedTokenInfo) {
				var o = this._lastSelectedTokenInfo.calculateRect();
				this._lastSelectedTokenInfo.groupId, this._lastSelectedTokenInfo.groupWordIndex;
				if (r > o.maxY()) return g.getLastTokenInfoAfterTokenAndAbovePoint(this._lastSelectedTokenInfo, {
					x: t,
					y: r
				});
				if (r < o.top) return g.getFirstTokenInfoBeforeTokenAndBelowPoint(this._lastSelectedTokenInfo, {
					x: t,
					y: r
				})
			}
			return null
		}, t.prototype._resetTouchState = function() {
			this._touchState = o.None, this._lastTouchCoordinates = null, this._currentTouchStartCoordinates = null, this._lastSelectedTokenInfo = null, this._pendingUserMark = null, this._touchMoved = !1, this._isApplePencil = !1, this._touchFiredWithMenuVisible = !1, this._clearLongPressTimer(), this._clearMarkWindowTimer(), this._clearContextMenuTimer()
		}, t.prototype._clearLongPressTimer = function() {
			"number" == typeof this._longPressTimer && (clearTimeout(this._longPressTimer), this._longPressTimer = null)
		}, t.prototype._clearMarkWindowTimer = function() {
			"number" == typeof this._markWindowTimer && (clearTimeout(this._markWindowTimer), this._markWindowTimer = null)
		}, t.prototype._clearContextMenuTimer = function() {
			"number" == typeof this._contextMenuTimer && (clearTimeout(this._contextMenuTimer), this._contextMenuTimer = null)
		}, t.prototype._touchIsOnCBG = function(t) {
			if (b.getContextMenuVisible()) return !1;
			var r = j.ancestorElementWithAttribute(t, "data-bg-image");
			return r && !r.classList.contains("suppressZoom")
		}, t.prototype._createSelection = function() {
			this._clearSelection();
			var t = this._anchorTokenInfo;
			if (t) {
				var r = t.blockPrefix === a.BlockType.Paragraph ? t.blockId : void 0,
					e = t.blockPrefix === a.BlockType.Verse ? t.blockId : void 0,
					o = new w(r, e, t.blockWordIndex, t.blockWordIndex);
				this._selection = new d([o]), this._selection.startTokenInfo = this._selection.endTokenInfo = t, this._callbackHandler({
					type: x.TouchEventCallbackType.DrawSelection,
					selection: this._selection
				});
				var i = document.getElementById(m.START_HANDLE_ID);
				i && (i.addEventListener("touchstart", this._selectionHandleTouchStart), i.addEventListener("touchmove", this._selectionHandleTouchMove), i.addEventListener("touchend", this._selectionHandleTouchEnd)), (i = document.getElementById(m.END_HANDLE_ID)) && (i.addEventListener("touchstart", this._selectionHandleTouchStart), i.addEventListener("touchmove", this._selectionHandleTouchMove), i.addEventListener("touchend", this._selectionHandleTouchEnd))
			}
		}, t.prototype._clearSelection = function() {
			if (this._selection) {
				var t = document.getElementById(m.START_HANDLE_ID);
				t && (t.removeEventListener("touchstart", this._selectionHandleTouchStart), t.removeEventListener("touchmove", this._selectionHandleTouchMove), t.removeEventListener("touchend", this._selectionHandleTouchEnd)), (t = document.getElementById(m.END_HANDLE_ID)) && (t.removeEventListener("touchstart", this._selectionHandleTouchStart), t.removeEventListener("touchmove", this._selectionHandleTouchMove), t.removeEventListener("touchend", this._selectionHandleTouchEnd)), this._callbackHandler({
					type: x.TouchEventCallbackType.ClearTextSelection,
					selection: this._selection
				}), this._selection = null
			}
		}, t.prototype._stopMediaMarkerFocusing = function() {
			this._callbackHandler({
				type: x.TouchEventCallbackType.StopMediaMarkerFocusing
			})
		}, t.prototype._startUserMarkFromTouch = function(r, e, i, a) {
			var n = this,
				l = document.elementFromPoint(r, e);
			if (l && (!l.parentElement || "A" !== l.parentElement.tagName)) {
				var c = g.getTokenInfoByElementID(l.id);
				c && !c.isMarkableWord() && (c = g.getClosestMarkableTokenForToken(c, i, a)), c && !0 === c.isMarkableWord() && (this._lastTouchCoordinates = [i, a], this._anchorTokenInfo = c, this._touchState = o.Anchored, this._clearSelection(), this._markWindowTimer && this._clearMarkWindowTimer(), this._markWindowTimer = setTimeout((function() {
					n._resetTouchState()
				}), t.CONTEXT_MENU_TIME_THRESHOLD))
			}
		}, t.prototype._updateUserMarkFromAnchorToTokenInfo = function(t) {
			var r = this._pendingUserMark;
			r.ranges = f.getRangesBetweenTokenInfos(t, this._anchorTokenInfo), this._callbackHandler({
				type: x.TouchEventCallbackType.DrawUserMark,
				userMark: r
			})
		}, t.prototype._getTokenInfosBetween = function(t, r, e) {
			for (var o = [], i = r; i <= e; i++) {
				var a = l.elementIdFromParts(t, i),
					n = g.getTokenInfoByElementID(a);
				n && o.push(n)
			}
			return o
		}, t.prototype._updateSelectionFromEndToEnd = function() {
			var t = this._selection;
			t.ranges = f.getRangesBetweenTokenInfos(t.startTokenInfo, t.endTokenInfo), this._callbackHandler({
				type: x.TouchEventCallbackType.DrawSelection,
				selection: t
			})
		}, t.prototype._loupePositionInfo = function(t, r) {
			return t && r ? {
				touch: {
					x: t,
					y: r
				},
				windowSize: {
					width: window.innerWidth,
					height: window.innerHeight
				}
			} : null
		}, t.prototype._touchCan = function(t) {
			for (var r = [], e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
			switch (this._touchState) {
				case o.None:
					return t === o.Anchored;
				case o.Anchored:
					return t === o.RangeSelected || t === o.Highlighting;
				case o.RangeSelected:
					return t === o.None || t === o.BackHandleSelecting || t === o.ForwardHandleSelecting;
				case o.BackHandleSelecting:
				case o.ForwardHandleSelecting:
					return t === o.RangeSelected;
				case o.Highlighting:
					return t === o.None;
				default:
					return !1
			}
		}, t.prototype._touchCanEither = function(t) {
			for (var r = 0, e = t; r < e.length; r++) {
				var o = e[r];
				if (this._touchCan(o)) return !0
			}
			return !1
		}, t.prototype._touchIs = function(t) {
			return this._touchState === t
		}, t.prototype._touchIsEither = function(t) {
			for (var r = 0, e = t; r < e.length; r++) {
				var o = e[r];
				if (this._touchIs(o)) return !0
			}
			return !1
		}, t.prototype._elementOrAncestorHasClassName = function(t, r) {
			return !!t && (!(!t.classList || !t.classList.contains(r)) || t.parentNode && this._elementOrAncestorHasClassName(t.parentNode, r))
		}, t.LONG_PRESS_TIME_THRESHOLD = 300, t.PEN_TAP_TIME_THRESHOLD = 200, t.CONTEXT_MENU_TIME_THRESHOLD = 2e3, t.TOUCH_MOVE_THRESHOLD = 3, t
	}();
	t.exports = v
}, function(t, r, e) {
	var o = e(33),
		i = e(383);
	"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
		[t.i, i, ""]
	]);
	var a = {
		insert: "head",
		singleton: !1
	};
	o(i, a);
	t.exports = i.locals || {}
}, function(t, r, e) {
	"use strict";
	e.r(r);
	var o = e(11),
		i = e.n(o)()(!1);
	i.push([t.i, "\n", ""]), i.locals = {
		"search-term": "rgba(255,185,46,0.8)",
		"highlight-yellow": "rgba(255,243,122,0.5)",
		"highlight-green": "rgba(183,228,146,0.5)",
		"highlight-blue": "rgba(152,216,255,0.5)",
		"highlight-pink": "rgba(246,152,188,0.5)",
		"highlight-purple": "rgba(193,167,226,0.5)",
		"highlight-orange": "rgba(255,186,138,0.5)",
		"highlight-yellow-dark": "rgba(250,217,41,0.5)",
		"highlight-green-dark": "rgba(129,189,79,0.5)",
		"highlight-blue-dark": "rgba(95,180,239,0.5)",
		"highlight-pink-dark": "rgba(219,93,141,0.5)",
		"highlight-purple-dark": "rgba(146,111,189,0.5)",
		"highlight-orange-dark": "rgba(255,134,46,0.5)",
		"note-gray": "#f1f1f1",
		"note-yellow": "#fffce6",
		"note-green": "#effbe6",
		"note-blue": "#e6f7ff",
		"note-pink": "#ffe6f0",
		"note-purple": "#f1eafa",
		"note-orange": "#fff0e6",
		"note-gray-dark": "#292929",
		"note-yellow-dark": "#49400E",
		"note-green-dark": "#233315",
		"note-blue-dark": "#203646",
		"note-pink-dark": "#401F2C",
		"note-purple-dark": "#2D2438",
		"note-orange-dark": "#49290E"
	}, r.default = i
}, function(t, r, e) {
	"use strict";
	var o = e(76),
		i = function() {
			function t() {}
			return t.getLocationFromPrimaryContent = function() {
				var t = o.getContent();
				if (t) {
					var r = null;
					t.language && (r = t.language.mepsLanguage);
					var e = t.docID && t.docID > 0 ? t.docID : null;
					return {
						book: t.bibleBook,
						chap: t.bibleChapter,
						doc: e,
						issue: t.issueTagNumber,
						keySym: t.pubSymbol,
						lang: r
					}
				}
				return null
			}, t
		}();
	t.exports = i
}, function(t, r, e) {
	"use strict";
	var o = e(386),
		i = e(25),
		a = e(28),
		n = function() {
			function t() {}
			return t.registerTopElementChanged = function() {
				window.addEventListener("scroll", t._onScrollTopElement)
			}, t.registerScrollPositionChanged = function(r) {
				r.addEventListener("scroll", t._onScrollPosition)
			}, t.registerWindowScrollPositionChanged = function() {
				window.addEventListener("scroll", t._onScrollPosition)
			}, t.unregisterTopElementChanged = function() {
				window.removeEventListener("scroll", t._onScrollTopElement)
			}, t.unregisterScrollPositionChanged = function(r) {
				r.removeEventListener("scroll", t._onScrollPosition)
			}, t.unregisterWindowScrollPositionChanged = function() {
				window.removeEventListener("scroll", t._onScrollPosition)
			}, t._onScrollTopElement = function() {
				var r = (new Date).getTime();
				if (t._lastTopElementScrollTime) {
					if (r < t._lastTopElementScrollTime + 250) return
				} else t._lastTopElementScrollTime = r;
				t._lastTopElementScrollTime = r;
				var e = o.getTopVerseOrParagraph(),
					n = null;
				if ("verseID" in e ? n = "verseID" : "paragraphID" in e && (n = "paragraphID"), n) {
					var l = e[n];
					l !== t._lastTopElement && (t._lastTopElement = l, i.send({
						type: a.NATIVE_ACTION_UPDATE_TOP_ELEMENT,
						elementID: t._lastTopElement
					}))
				}
			}, t._onScrollPosition = function(r) {
				var e = r.target,
					o = (new Date).getTime();
				if (t._lastScrollPositionScrollTime) {
					if (o < t._lastScrollPositionScrollTime + 250) return
				} else t._lastScrollPositionScrollTime = o;
				t._lastScrollPositionScrollTime = o;
				var n = e.scrollTop / e.scrollHeight;
				if (n !== t._lastScrollPosition) {
					var l = n < 0 ? 0 : n;
					t._lastScrollPosition = l, i.send({
						type: a.NATIVE_ACTION_UPDATE_SCROLL_POSITION,
						scrollPosition: l.toString()
					})
				}
			}, t
		}();
	t.exports = n
}, function(t, r, e) {
	"use strict";
	var o = e(50),
		i = function() {
			function t() {}
			return t.getTopVerseOrParagraph = function() {
				for (var t = /^v\d+-\d+-\d+-\d+$/, r = 75, e = null != document.querySelector(".vl"), i = document.elementFromPoint(window.innerWidth / 2, r); i && i.getBoundingClientRect().top < 0;) r += 10, i = document.elementFromPoint(window.innerWidth / 2, r);
				if (i) {
					var a = i.firstChild;
					if (a && a.nodeType === Node.ELEMENT_NODE && a.id && t.test(a.id) && (i = a), i) {
						for (var n = o.ancestorElementMatchingID(i, t), l = e && null == n; l;) r += 10, (i = document.elementFromPoint(window.innerWidth / 2, r)) ? ((n = o.ancestorElementMatchingID(i, t)) || r > 200) && (l = !1) : r > 200 && (l = !1);
						if (n) {
							var c = n.id.split("-"),
								d = null;
							return c.length >= 3 && (d = parseInt(c[2], 10)), {
								verseID: d,
								offset: n.getBoundingClientRect().top
							}
						}
						var m = o.ancestorElementWithAttribute(i, "data-pid");
						if (m) return {
							paragraphID: parseInt(m.getAttribute("data-pid"), 10),
							offset: m.getBoundingClientRect().top
						}
					}
				}
				return {}
			}, t
		}();
	window.Messenger = i, t.exports = i
}, function(t, r, e) {
	"use strict";
	var o = e(388),
		i = e(390);

	function a() {
		this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
	}
	r.parse = j, r.resolve = function(t, r) {
		return j(t, !1, !0).resolve(r)
	}, r.resolveObject = function(t, r) {
		return t ? j(t, !1, !0).resolveObject(r) : r
	}, r.format = function(t) {
		i.isString(t) && (t = j(t));
		return t instanceof a ? t.format() : a.prototype.format.call(t)
	}, r.Url = a;
	var n = /^([a-z0-9.+-]+:)/i,
		l = /:[0-9]*$/,
		c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
		d = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
		m = ["'"].concat(d),
		p = ["%", "/", "?", ";", "#"].concat(m),
		u = ["/", "?", "#"],
		g = /^[+a-z0-9A-Z_-]{0,63}$/,
		s = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
		b = {
			javascript: !0,
			"javascript:": !0
		},
		w = {
			javascript: !0,
			"javascript:": !0
		},
		f = {
			http: !0,
			https: !0,
			ftp: !0,
			gopher: !0,
			file: !0,
			"http:": !0,
			"https:": !0,
			"ftp:": !0,
			"gopher:": !0,
			"file:": !0
		},
		h = e(391);

	function j(t, r, e) {
		if (t && i.isObject(t) && t instanceof a) return t;
		var o = new a;
		return o.parse(t, r, e), o
	}
	a.prototype.parse = function(t, r, e) {
		if (!i.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
		var a = t.indexOf("?"),
			l = -1 !== a && a < t.indexOf("#") ? "?" : "#",
			d = t.split(l);
		d[0] = d[0].replace(/\\/g, "/");
		var j = t = d.join(l);
		if (j = j.trim(), !e && 1 === t.split("#").length) {
			var x = c.exec(j);
			if (x) return this.path = j, this.href = j, this.pathname = x[1], x[2] ? (this.search = x[2], this.query = r ? h.parse(this.search.substr(1)) : this.search.substr(1)) : r && (this.search = "", this.query = {}), this
		}
		var y = n.exec(j);
		if (y) {
			var S = (y = y[0]).toLowerCase();
			this.protocol = S, j = j.substr(y.length)
		}
		if (e || y || j.match(/^\/\/[^@\/]+@[^@\/]+/)) {
			var v = "//" === j.substr(0, 2);
			!v || y && w[y] || (j = j.substr(2), this.slashes = !0)
		}
		if (!w[y] && (v || y && !f[y])) {
			for (var O, k, E = -1, C = 0; C < u.length; C++) {
				-1 !== (A = j.indexOf(u[C])) && (-1 === E || A < E) && (E = A)
			} - 1 !== (k = -1 === E ? j.lastIndexOf("@") : j.lastIndexOf("@", E)) && (O = j.slice(0, k), j = j.slice(k + 1), this.auth = decodeURIComponent(O)), E = -1;
			for (C = 0; C < p.length; C++) {
				var A; - 1 !== (A = j.indexOf(p[C])) && (-1 === E || A < E) && (E = A)
			} - 1 === E && (E = j.length), this.host = j.slice(0, E), j = j.slice(E), this.parseHost(), this.hostname = this.hostname || "";
			var T = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
			if (!T)
				for (var I = this.hostname.split(/\./), N = (C = 0, I.length); C < N; C++) {
					var _ = I[C];
					if (_ && !_.match(g)) {
						for (var R = "", M = 0, L = _.length; M < L; M++) _.charCodeAt(M) > 127 ? R += "x" : R += _[M];
						if (!R.match(g)) {
							var D = I.slice(0, C),
								P = I.slice(C + 1),
								z = _.match(s);
							z && (D.push(z[1]), P.unshift(z[2])), P.length && (j = "/" + P.join(".") + j), this.hostname = D.join(".");
							break
						}
					}
				}
			this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), T || (this.hostname = o.toASCII(this.hostname));
			var H = this.port ? ":" + this.port : "",
				G = this.hostname || "";
			this.host = G + H, this.href += this.host, T && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== j[0] && (j = "/" + j))
		}
		if (!b[S])
			for (C = 0, N = m.length; C < N; C++) {
				var B = m[C];
				if (-1 !== j.indexOf(B)) {
					var U = encodeURIComponent(B);
					U === B && (U = escape(B)), j = j.split(B).join(U)
				}
			}
		var W = j.indexOf("#"); - 1 !== W && (this.hash = j.substr(W), j = j.slice(0, W));
		var F = j.indexOf("?");
		if (-1 !== F ? (this.search = j.substr(F), this.query = j.substr(F + 1), r && (this.query = h.parse(this.query)), j = j.slice(0, F)) : r && (this.search = "", this.query = {}), j && (this.pathname = j), f[S] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
			H = this.pathname || "";
			var V = this.search || "";
			this.path = H + V
		}
		return this.href = this.format(), this
	}, a.prototype.format = function() {
		var t = this.auth || "";
		t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
		var r = this.protocol || "",
			e = this.pathname || "",
			o = this.hash || "",
			a = !1,
			n = "";
		this.host ? a = t + this.host : this.hostname && (a = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (a += ":" + this.port)), this.query && i.isObject(this.query) && Object.keys(this.query).length && (n = h.stringify(this.query));
		var l = this.search || n && "?" + n || "";
		return r && ":" !== r.substr(-1) && (r += ":"), this.slashes || (!r || f[r]) && !1 !== a ? (a = "//" + (a || ""), e && "/" !== e.charAt(0) && (e = "/" + e)) : a || (a = ""), o && "#" !== o.charAt(0) && (o = "#" + o), l && "?" !== l.charAt(0) && (l = "?" + l), r + a + (e = e.replace(/[?#]/g, (function(t) {
			return encodeURIComponent(t)
		}))) + (l = l.replace("#", "%23")) + o
	}, a.prototype.resolve = function(t) {
		return this.resolveObject(j(t, !1, !0)).format()
	}, a.prototype.resolveObject = function(t) {
		if (i.isString(t)) {
			var r = new a;
			r.parse(t, !1, !0), t = r
		}
		for (var e = new a, o = Object.keys(this), n = 0; n < o.length; n++) {
			var l = o[n];
			e[l] = this[l]
		}
		if (e.hash = t.hash, "" === t.href) return e.href = e.format(), e;
		if (t.slashes && !t.protocol) {
			for (var c = Object.keys(t), d = 0; d < c.length; d++) {
				var m = c[d];
				"protocol" !== m && (e[m] = t[m])
			}
			return f[e.protocol] && e.hostname && !e.pathname && (e.path = e.pathname = "/"), e.href = e.format(), e
		}
		if (t.protocol && t.protocol !== e.protocol) {
			if (!f[t.protocol]) {
				for (var p = Object.keys(t), u = 0; u < p.length; u++) {
					var g = p[u];
					e[g] = t[g]
				}
				return e.href = e.format(), e
			}
			if (e.protocol = t.protocol, t.host || w[t.protocol]) e.pathname = t.pathname;
			else {
				for (var s = (t.pathname || "").split("/"); s.length && !(t.host = s.shift()););
				t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== s[0] && s.unshift(""), s.length < 2 && s.unshift(""), e.pathname = s.join("/")
			}
			if (e.search = t.search, e.query = t.query, e.host = t.host || "", e.auth = t.auth, e.hostname = t.hostname || t.host, e.port = t.port, e.pathname || e.search) {
				var b = e.pathname || "",
					h = e.search || "";
				e.path = b + h
			}
			return e.slashes = e.slashes || t.slashes, e.href = e.format(), e
		}
		var j = e.pathname && "/" === e.pathname.charAt(0),
			x = t.host || t.pathname && "/" === t.pathname.charAt(0),
			y = x || j || e.host && t.pathname,
			S = y,
			v = e.pathname && e.pathname.split("/") || [],
			O = (s = t.pathname && t.pathname.split("/") || [], e.protocol && !f[e.protocol]);
		if (O && (e.hostname = "", e.port = null, e.host && ("" === v[0] ? v[0] = e.host : v.unshift(e.host)), e.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === s[0] ? s[0] = t.host : s.unshift(t.host)), t.host = null), y = y && ("" === s[0] || "" === v[0])), x) e.host = t.host || "" === t.host ? t.host : e.host, e.hostname = t.hostname || "" === t.hostname ? t.hostname : e.hostname, e.search = t.search, e.query = t.query, v = s;
		else if (s.length) v || (v = []), v.pop(), v = v.concat(s), e.search = t.search, e.query = t.query;
		else if (!i.isNullOrUndefined(t.search)) {
			if (O) e.hostname = e.host = v.shift(), (T = !!(e.host && e.host.indexOf("@") > 0) && e.host.split("@")) && (e.auth = T.shift(), e.host = e.hostname = T.shift());
			return e.search = t.search, e.query = t.query, i.isNull(e.pathname) && i.isNull(e.search) || (e.path = (e.pathname ? e.pathname : "") + (e.search ? e.search : "")), e.href = e.format(), e
		}
		if (!v.length) return e.pathname = null, e.search ? e.path = "/" + e.search : e.path = null, e.href = e.format(), e;
		for (var k = v.slice(-1)[0], E = (e.host || t.host || v.length > 1) && ("." === k || ".." === k) || "" === k, C = 0, A = v.length; A >= 0; A--) "." === (k = v[A]) ? v.splice(A, 1) : ".." === k ? (v.splice(A, 1), C++) : C && (v.splice(A, 1), C--);
		if (!y && !S)
			for (; C--; C) v.unshift("..");
		!y || "" === v[0] || v[0] && "/" === v[0].charAt(0) || v.unshift(""), E && "/" !== v.join("/").substr(-1) && v.push("");
		var T, I = "" === v[0] || v[0] && "/" === v[0].charAt(0);
		O && (e.hostname = e.host = I ? "" : v.length ? v.shift() : "", (T = !!(e.host && e.host.indexOf("@") > 0) && e.host.split("@")) && (e.auth = T.shift(), e.host = e.hostname = T.shift()));
		return (y = y || e.host && v.length) && !I && v.unshift(""), v.length ? e.pathname = v.join("/") : (e.pathname = null, e.path = null), i.isNull(e.pathname) && i.isNull(e.search) || (e.path = (e.pathname ? e.pathname : "") + (e.search ? e.search : "")), e.auth = t.auth || e.auth, e.slashes = e.slashes || t.slashes, e.href = e.format(), e
	}, a.prototype.parseHost = function() {
		var t = this.host,
			r = l.exec(t);
		r && (":" !== (r = r[0]) && (this.port = r.substr(1)), t = t.substr(0, t.length - r.length)), t && (this.hostname = t)
	}
}, function(t, r, e) {
	(function(t, o) {
		var i; /*! https://mths.be/punycode v1.4.1 by @mathias */
		! function(a) {
			r && r.nodeType, t && t.nodeType;
			var n = "object" == typeof o && o;
			n.global !== n && n.window !== n && n.self;
			var l, c = 2147483647,
				d = /^xn--/,
				m = /[^\x20-\x7E]/,
				p = /[\x2E\u3002\uFF0E\uFF61]/g,
				u = {
					overflow: "Overflow: input needs wider integers to process",
					"not-basic": "Illegal input >= 0x80 (not a basic code point)",
					"invalid-input": "Invalid input"
				},
				g = Math.floor,
				s = String.fromCharCode;

			function b(t) {
				throw new RangeError(u[t])
			}

			function w(t, r) {
				for (var e = t.length, o = []; e--;) o[e] = r(t[e]);
				return o
			}

			function f(t, r) {
				var e = t.split("@"),
					o = "";
				return e.length > 1 && (o = e[0] + "@", t = e[1]), o + w((t = t.replace(p, ".")).split("."), r).join(".")
			}

			function h(t) {
				for (var r, e, o = [], i = 0, a = t.length; i < a;)(r = t.charCodeAt(i++)) >= 55296 && r <= 56319 && i < a ? 56320 == (64512 & (e = t.charCodeAt(i++))) ? o.push(((1023 & r) << 10) + (1023 & e) + 65536) : (o.push(r), i--) : o.push(r);
				return o
			}

			function j(t) {
				return w(t, (function(t) {
					var r = "";
					return t > 65535 && (r += s((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), r += s(t)
				})).join("")
			}

			function x(t, r) {
				return t + 22 + 75 * (t < 26) - ((0 != r) << 5)
			}

			function y(t, r, e) {
				var o = 0;
				for (t = e ? g(t / 700) : t >> 1, t += g(t / r); t > 455; o += 36) t = g(t / 35);
				return g(o + 36 * t / (t + 38))
			}

			function S(t) {
				var r, e, o, i, a, n, l, d, m, p, u, s = [],
					w = t.length,
					f = 0,
					h = 128,
					x = 72;
				for ((e = t.lastIndexOf("-")) < 0 && (e = 0), o = 0; o < e; ++o) t.charCodeAt(o) >= 128 && b("not-basic"), s.push(t.charCodeAt(o));
				for (i = e > 0 ? e + 1 : 0; i < w;) {
					for (a = f, n = 1, l = 36; i >= w && b("invalid-input"), ((d = (u = t.charCodeAt(i++)) - 48 < 10 ? u - 22 : u - 65 < 26 ? u - 65 : u - 97 < 26 ? u - 97 : 36) >= 36 || d > g((c - f) / n)) && b("overflow"), f += d * n, !(d < (m = l <= x ? 1 : l >= x + 26 ? 26 : l - x)); l += 36) n > g(c / (p = 36 - m)) && b("overflow"), n *= p;
					x = y(f - a, r = s.length + 1, 0 == a), g(f / r) > c - h && b("overflow"), h += g(f / r), f %= r, s.splice(f++, 0, h)
				}
				return j(s)
			}

			function v(t) {
				var r, e, o, i, a, n, l, d, m, p, u, w, f, j, S, v = [];
				for (w = (t = h(t)).length, r = 128, e = 0, a = 72, n = 0; n < w; ++n)(u = t[n]) < 128 && v.push(s(u));
				for (o = i = v.length, i && v.push("-"); o < w;) {
					for (l = c, n = 0; n < w; ++n)(u = t[n]) >= r && u < l && (l = u);
					for (l - r > g((c - e) / (f = o + 1)) && b("overflow"), e += (l - r) * f, r = l, n = 0; n < w; ++n)
						if ((u = t[n]) < r && ++e > c && b("overflow"), u == r) {
							for (d = e, m = 36; !(d < (p = m <= a ? 1 : m >= a + 26 ? 26 : m - a)); m += 36) S = d - p, j = 36 - p, v.push(s(x(p + S % j, 0))), d = g(S / j);
							v.push(s(x(d, 0))), a = y(e, f, o == i), e = 0, ++o
						}++ e, ++r
				}
				return v.join("")
			}
			l = {
				version: "1.4.1",
				ucs2: {
					decode: h,
					encode: j
				},
				decode: S,
				encode: v,
				toASCII: function(t) {
					return f(t, (function(t) {
						return m.test(t) ? "xn--" + v(t) : t
					}))
				},
				toUnicode: function(t) {
					return f(t, (function(t) {
						return d.test(t) ? S(t.slice(4).toLowerCase()) : t
					}))
				}
			}, void 0 === (i = function() {
				return l
			}.call(r, e, r, t)) || (t.exports = i)
		}()
	}).call(this, e(389)(t), e(67))
}, function(t, r) {
	t.exports = function(t) {
		return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
			enumerable: !0,
			get: function() {
				return t.l
			}
		}), Object.defineProperty(t, "id", {
			enumerable: !0,
			get: function() {
				return t.i
			}
		}), t.webpackPolyfill = 1), t
	}
}, function(t, r, e) {
	"use strict";
	t.exports = {
		isString: function(t) {
			return "string" == typeof t
		},
		isObject: function(t) {
			return "object" == typeof t && null !== t
		},
		isNull: function(t) {
			return null === t
		},
		isNullOrUndefined: function(t) {
			return null == t
		}
	}
}, function(t, r, e) {
	"use strict";
	r.decode = r.parse = e(392), r.encode = r.stringify = e(393)
}, function(t, r, e) {
	"use strict";

	function o(t, r) {
		return Object.prototype.hasOwnProperty.call(t, r)
	}
	t.exports = function(t, r, e, a) {
		r = r || "&", e = e || "=";
		var n = {};
		if ("string" != typeof t || 0 === t.length) return n;
		var l = /\+/g;
		t = t.split(r);
		var c = 1e3;
		a && "number" == typeof a.maxKeys && (c = a.maxKeys);
		var d = t.length;
		c > 0 && d > c && (d = c);
		for (var m = 0; m < d; ++m) {
			var p, u, g, s, b = t[m].replace(l, "%20"),
				w = b.indexOf(e);
			w >= 0 ? (p = b.substr(0, w), u = b.substr(w + 1)) : (p = b, u = ""), g = decodeURIComponent(p), s = decodeURIComponent(u), o(n, g) ? i(n[g]) ? n[g].push(s) : n[g] = [n[g], s] : n[g] = s
		}
		return n
	};
	var i = Array.isArray || function(t) {
		return "[object Array]" === Object.prototype.toString.call(t)
	}
}, function(t, r, e) {
	"use strict";
	var o = function(t) {
		switch (typeof t) {
			case "string":
				return t;
			case "boolean":
				return t ? "true" : "false";
			case "number":
				return isFinite(t) ? t : "";
			default:
				return ""
		}
	};
	t.exports = function(t, r, e, l) {
		return r = r || "&", e = e || "=", null === t && (t = void 0), "object" == typeof t ? a(n(t), (function(n) {
			var l = encodeURIComponent(o(n)) + e;
			return i(t[n]) ? a(t[n], (function(t) {
				return l + encodeURIComponent(o(t))
			})).join(r) : l + encodeURIComponent(o(t[n]))
		})).join(r) : l ? encodeURIComponent(o(l)) + e + encodeURIComponent(o(t)) : ""
	};
	var i = Array.isArray || function(t) {
		return "[object Array]" === Object.prototype.toString.call(t)
	};

	function a(t, r) {
		if (t.map) return t.map(r);
		for (var e = [], o = 0; o < t.length; o++) e.push(r(t[o], o));
		return e
	}
	var n = Object.keys || function(t) {
		var r = [];
		for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && r.push(e);
		return r
	}
}, function(t, r, e) {
	e(443);
	var o = e(445);
	t.exports = o("Array", "includes")
}, function(t, r, e) {
	e(447);
	var o = e(45);
	t.exports = o.Object.assign
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(2),
		n = e(35),
		l = e(30),
		c = function(t) {
			function r(r) {
				var e = t.call(this, r) || this;
				return e._onClick = function(t) {
					n.selectOutline(), t.stopPropagation()
				}, e._onDisplaySettingsChange = function() {
					e.setState({
						fontSize: l.getFontSize()
					})
				}, e.state = {
					fontSize: l.getFontSize()
				}, e
			}
			return i(r, t), r.prototype.componentDidMount = function() {
				l.addChangeListener(this._onDisplaySettingsChange)
			}, r.prototype.componentWillUnmount = function() {
				l.removeChangeListener(this._onDisplaySettingsChange)
			}, r.prototype.render = function() {
				if (this.props.outline) {
					var t = this.props.outline,
						r = [],
						e = "",
						o = "",
						i = "",
						n = 100,
						l = this.props.language;
					if (l) {
						this.state.fontSize && (n = this.state.fontSize);
						var c = l.mepsSymbol,
							d = l.script;
						e = l.dir, o = l.ietfSymbol, i = "html5 jwac ml-" + c + " dir-" + e + " ms-" + d + " "
					}
					if (t.showChildren) {
						var m = "<p><ul class='outline'>";
						m += this._deepestChild(t.content, "li").outerHTML || "", m += this._allChildren(t), m += "</ul></p>", i += "bible", l ? r.push(a.createElement("div", {
							className: i,
							key: "outline-content",
							dir: e,
							lang: o
						}, a.createElement("div", {
							style: {
								fontSize: n + "%"
							},
							dangerouslySetInnerHTML: {
								__html: m
							}
						}))) : r.push(a.createElement("div", {
							className: i,
							key: "outline-content",
							dangerouslySetInnerHTML: {
								__html: m
							}
						}))
					} else i += "overview", l ? r.push(a.createElement("div", {
						className: i,
						key: "outline-content",
						dir: e,
						lang: o
					}, a.createElement("a", {
						style: {
							fontSize: n + "%"
						},
						onClick: this._onClick,
						dangerouslySetInnerHTML: {
							__html: t.content
						}
					}))) : r.push(a.createElement("a", {
						className: i,
						key: "outline-content",
						onClick: this._onClick,
						dangerouslySetInnerHTML: {
							__html: t.content
						}
					}));
					return a.createElement("div", null, r)
				}
				return a.createElement("ul", null)
			}, r.prototype._allChildren = function(t) {
				var r = "<ul>";
				for (var e in t.children) {
					var o = t.children[e];
					r += this._deepestChild(o.content, "li").outerHTML || "", o.children && o.children.length > 0 && (r += this._allChildren(o))
				}
				return r += "</ul>"
			}, r.prototype._deepestChild = function(t, r) {
				var e = (new DOMParser).parseFromString(t, "text/html");
				if (!e) return !1;
				var o = e.querySelectorAll(r);
				return !!o.length && o[o.length - 1]
			}, r
		}(a.Component);
	t.exports = c
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(2),
		n = e(35),
		l = function(t) {
			function r(r) {
				var e = t.call(this, r) || this;
				return e.handleClick = function(t) {
					e.props.commentary && (n.selectCommentary(e.props.commentary.verse, e.props.commentary.paragraph), t.stopPropagation())
				}, e
			}
			return i(r, t), r.prototype.render = function() {
				if (this.props.commentary) {
					var t = this.props.commentary;
					return a.createElement("ul", {
						onClick: this.handleClick,
						className: "noIndent noMarker"
					}, a.createElement("li", {
						className: "contents",
						dangerouslySetInnerHTML: {
							__html: t.content
						}
					}))
				}
				return a.createElement("ul", null)
			}, r
		}(a.Component);
	t.exports = l
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(2),
		n = e(461),
		l = e(25),
		c = e(28),
		d = function(t) {
			function r(r) {
				var e = t.call(this, r) || this;
				return e.handleClick = function(t) {
					var r = e.props.multimedia;
					r && (l.send({
						type: c.NATIVE_ACTION_SELECT_MULTIMEDIA,
						id: r.id,
						bibleCitation: r.bibleCitation,
						textCitation: r.textCitation,
						sourcePubSymbol: r.sourcePubSymbol,
						sourceIssueTagNumber: r.sourceIssueTagNumber,
						sourceMepsLanguage: r.sourceMepsLanguage
					}), t.stopPropagation())
				}, e
			}
			return i(r, t), r.prototype.render = function() {
				if (!this.props.multimedia) return a.createElement("ul", null);
				var t = this.props.multimedia,
					r = a.createElement("img", {
						className: "jwl-study-image",
						src: t.imageUrl
					});
				return t.multimediaType === n.TYPE_VIDEO && (r = a.createElement("div", {
					className: "video-poster-image-wrapper"
				}, r, a.createElement("img", {
					src: "./images/overlay_video.svg",
					className: "video-overlay"
				}))), a.createElement("div", {
					className: "jwl-study-multimedia-item",
					onClick: this.handleClick,
					id: "cm-" + t.id
				}, r, a.createElement("div", {
					className: "jwl-study-multimedia-header",
					dir: "ltr"
				}, a.createElement("span", {
					className: "jwl-study-multimedia-title",
					dangerouslySetInnerHTML: {
						__html: t.content
					}
				})))
			}, r
		}(a.Component);
	t.exports = d
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(2),
		n = e(35),
		l = e(25),
		c = e(28),
		d = function(t) {
			function r(r) {
				var e = t.call(this, r) || this;
				return e._handleReferencesClick = function(t) {
					e._dispatchMarginalSelection(e.props.marginal, !0), t.stopPropagation()
				}, e._handleMarginalClick = function(t) {
					e._dispatchMarginalSelection(e.props.marginal, !1), t.stopPropagation()
				}, e
			}
			return i(r, t), r.prototype._dispatchMarginalSelection = function(t, r) {
				t && (n.selectMarginal(t.id, t.classification), r && l.send({
					type: c.NATIVE_ACTION_REQUEST_MARGINAL,
					marginalID: t.id,
					label: t.marker,
					classification: t.classification
				}))
			}, r.prototype.render = function() {
				var t = this.props.marginal;
				if (t) {
					for (var r = [], e = t.citations.length, o = 0, i = t.citations; o < i.length; o++) {
						var n = i[o],
							l = !0;
						e > 1 && t.citations[e - 1] !== n && (l = !1);
						var c = this.props.citationSeparator,
							d = c && "" !== c ? c : ";";
						r.push(a.createElement("span", {
							key: "mar" + t.id + "-" + n.citation
						}, a.createElement("span", {
							className: "citation"
						}, n.citation), l ? "" : d + " "))
					}
					var m = t.classification ? "mar" + t.id + "-" + t.classification : "mar" + t.id;
					return a.createElement("ul", {
						id: m,
						className: "cc noMarker noIndent",
						onClick: this._handleMarginalClick,
						style: {
							display: "block"
						}
					}, a.createElement("li", {
						className: "marker"
					}, t.marker), a.createElement("li", {
						onClick: this._handleReferencesClick,
						dir: "ltr"
					}, r), a.createElement("li", {
						className: "contents bible",
						id: "b" + t.id
					}, a.createElement("div", {
						className: "cgc",
						style: {
							cursor: "pointer"
						}
					})))
				}
				return a.createElement("ul", null)
			}, r
		}(a.Component);
	t.exports = d
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = this && this.__spreadArrays || function() {
			for (var t = 0, r = 0, e = arguments.length; r < e; r++) t += arguments[r].length;
			var o = Array(t),
				i = 0;
			for (r = 0; r < e; r++)
				for (var a = arguments[r], n = 0, l = a.length; n < l; n++, i++) o[i] = a[n];
			return o
		},
		n = e(2),
		l = e(413),
		c = (e(363), e(357)),
		d = e(30),
		m = e(349),
		p = e(35),
		u = e(25),
		g = e(401),
		s = e(63),
		b = e(50),
		w = e(28),
		f = e(177),
		h = e(69),
		j = function(t) {
			function r(r) {
				var e = t.call(this, r) || this;
				return e._enterKeyCode = 13, e._noteTagId = "note-tag-id", e._delayMilliseconds = 3e3, e.persistCurrentNoteContent = function() {
					var t = !1;
					e._contentSaveTimer && (clearTimeout(e._contentSaveTimer), e._contentSaveTimer = null, t = !0), t ? e._saveNoteContent() : u.send({
						type: w.NATIVE_ACTION_PERSIST_NOTE
					})
				}, e.setFocus = function() {
					!e._titleTextArea || !e.state.note || e.state.note.title && "" !== e.state.note.title ? e._contentTextArea && e._focusContentTextarea() : e._focusTitleTextarea()
				}, e._onBlur = function() {
					setTimeout((function() {
						b.ancestorElementWithClass(document.activeElement, "note-edit") || p.exitNoteEditMode()
					}), 100)
				}, e._onNoteClick = function() {
					e.props.inEditMode || (e._titleTextArea && e._titleTextArea.blur(), e._contentTextArea && e._contentTextArea.blur(), p.selectNote(e.state.note.id))
				}, e._onTitleTextAreaResize = function() {
					e._lastTitleTextAreaHeight = e._handleTextAreaResize(e._titleTextArea, e._lastTitleTextAreaHeight)
				}, e._onContentTextAreaResize = function() {
					e._lastContentTextAreaHeight = e._handleTextAreaResize(e._contentTextArea, e._lastContentTextAreaHeight)
				}, e._handleTextAreaResize = function(t, r) {
					if (t && e.props.inEditMode) {
						if (r) {
							var o = t.clientHeight - r;
							e._scrollFromElement(t, o)
						}
						return t.clientHeight
					}
					return 0
				}, e._registerTextAreaAutosizeCallbacks = function() {
					0
				}, e._unregisterTextAreaAutosizeCallbacks = function() {
					0
				}, e._schedulePersistence = function() {
					e._contentSaveTimer && clearTimeout(e._contentSaveTimer), e._contentSaveTimer = setTimeout((function() {
						e._saveNoteContent(), e._contentSaveTimer = null
					}), e._delayMilliseconds)
				}, e._scrollToPosition = function(t, r) {
					if (t) {
						var e = window.innerHeight - d.getKeyboardHeight();
						(r > t.scrollTop || r + e < t.scrollTop) && (t.scrollTop = r)
					}
				}, e._scrollFromElement = function(t, r) {
					if (e.props.fullScreen) window.scrollBy(0, r);
					else if (t) {
						var o = b.ancestorElementWithClass(t, "note-editing-scroll-element");
						if (o) {
							var i = window.innerHeight - d.getKeyboardHeight();
							b.ancestorElementWithClass(t, "note-component").clientHeight >= i && (o.scrollTop = o.scrollTop + r)
						}
					}
				}, e._onTitleChanged = function() {
					var t = null;
					e._titleTextArea && (t = e._titleTextArea.value), e.state.note.title = t, e._schedulePersistence()
				}, e._onTitleFocus = function() {
					e._focusTitleTextarea(), e._titleTextArea.addEventListener("keypress", e._onTitleKeyPress)
				}, e._onContentFocus = function(t) {
					t.preventDefault(), e._focusContentTextarea()
				}, e._onTitleBlur = function() {
					e._titleTextArea.removeEventListener("keypress", e._onTitleKeyPress)
				}, e._onTitleKeyPress = function(t) {
					t.keyCode === e._enterKeyCode && (t.preventDefault(), e._focusContentTextarea())
				}, e._onContentChanged = function() {
					var t = null;
					e._contentTextArea && (t = e._contentTextArea.value), e.state.note.content = t, e._schedulePersistence()
				}, e._onTagsChanged = function(t) {
					e.state.note.tags = t, e.setState({
						selectedTags: e.state.note.tags
					}), e._schedulePersistence();
					var r = t.filter((function(t) {
						return -1 === e.state.allTags.indexOf(t)
					}));
					if (r.length > 0) {
						var o = c.getTags();
						p.setTags(a(o, r))
					}
				}, e._onTagClicked = function(t) {
					u.send({
						type: w.NATIVE_ACTION_NAVIGATE_TAG,
						name: t
					})
				}, e._onOptionsClick = function(t) {
					var r = e._optionsButton.getBoundingClientRect(),
						o = new s.JWLRect(r.left, r.top, r.width, r.height);
					u.send({
						type: w.NATIVE_ACTION_SHOW_NOTE_OPTIONS,
						note: e.state.note,
						rect: o
					}), t.stopPropagation()
				}, e._saveNoteContent = function() {
					setTimeout((function() {
						p.updateNote(e.state.note)
					}), 0), u.send({
						type: w.NATIVE_ACTION_PERSIST_NOTE,
						note: e.state.note
					})
				}, e._onDisplaySettingsChange = function(t) {
					e.state.fontSize !== d.getFontSize() && e.setState({
						fontSize: d.getFontSize()
					}), e.state.appearance !== d.getAppearance() && e.setState({
						appearance: d.getAppearance()
					})
				}, e._resizeComponents = function() {
					e._titleTextArea && e._titleTextArea && e.setState({
						updateTextareaAutosize: !e.state.updateTextareaAutosize
					}), e._contentTextArea && e._contentTextArea && e.setState({
						updateTextareaAutosize: !e.state.updateTextareaAutosize
					})
				}, e._updateTitleAndContent = function(t) {
					if (t) {
						var r = !1,
							o = null == t.title ? "" : t.title.replace(/\r\n/g, "\n"),
							i = null == e._titleTextArea.value ? "" : e._titleTextArea.value.replace(/\r\n/g, "\n"),
							a = null == t.content ? "" : t.content.replace(/\r\n/g, "\n"),
							n = null == e._contentTextArea.value ? "" : e._contentTextArea.value.replace(/\r\n/g, "\n");
						e._titleTextArea && i !== o && (e._titleTextArea.value = o, r = !0), e._contentTextArea && n !== a && (e._contentTextArea.value = a, r = !0), r && e._resizeComponents()
					}
				}, e._focusTitleTextarea = function() {
					e._titleTextArea.focus(), setTimeout((function() {
						e._titleTextArea.setSelectionRange(e._titleTextArea.value.length, e._titleTextArea.value.length)
					}), 1)
				}, e._focusContentTextarea = function() {
					e._contentTextArea.focus(), setTimeout((function() {
						e._contentTextArea.setSelectionRange(e._contentTextArea.value.length, e._contentTextArea.value.length)
					}), 1)
				}, e._updateDimensions = e._updateDimensions.bind(e), e.state = {
					note: r.note,
					allTags: c.getTags(),
					selectedTags: e.props.note.tags,
					fontSize: d.getFontSize(),
					updateTextareaAutosize: !1
				}, e
			}
			return i(r, t), r.prototype.componentDidMount = function() {
				var t = this;
				this.props.fullScreen && this._registerTextAreaAutosizeCallbacks(), d.addChangeListener(this._onDisplaySettingsChange), this._updateTitleAndContent(this.state.note), this.props.fullScreen && !this.props.autoFocusTextAreas && window.scrollTo(0, 0), window.addEventListener("resize", this._updateDimensions), setTimeout((function() {
					t._resizeComponents()
				}), 100)
			}, r.prototype.componentWillUnmount = function() {
				d.removeChangeListener(this._onDisplaySettingsChange), this.props.inEditMode && this.persistCurrentNoteContent(), this.props.fullScreen && this._unregisterTextAreaAutosizeCallbacks(), window.removeEventListener("resize", this._updateDimensions)
			}, r.prototype.shouldComponentUpdate = function(t, r) {
				return this.props.inEditMode !== t.inEditMode || this.props.fullScreen !== t.fullScreen || this.props.autoFocusTextAreas !== t.autoFocusTextAreas || this.props.note !== t.note || this.state.selectedTags !== r.selectedTags || this.state.allTags !== r.allTags || this.state.fontSize !== r.fontSize || this.state.updateTextareaAutosize !== r.updateTextareaAutosize || this.state.appearance !== r.appearance
			}, r.prototype.componentDidUpdate = function(t) {
				if (this.props.note !== t.note && this.setState({
						note: this.props.note,
						selectedTags: this.props.note.tags
					}), this._wasPreviouslyInEditMode = !this.props.inEditMode && t.inEditMode, this._enteringEditMode = this.props.inEditMode && !t.inEditMode, this._wasPreviouslyInEditMode && (this._unregisterTextAreaAutosizeCallbacks(), this._titleTextArea && this._titleTextArea.blur(), this._contentTextArea && this._contentTextArea.blur(), this._tagComponent && this._tagComponent.blur()), this._updateTitleAndContent(this.state.note), this._enteringEditMode) {
					if (this._registerTextAreaAutosizeCallbacks(), u.send({
							type: w.NATIVE_ACTION_NOTE_EDIT_MODE_ENTERED,
							noteId: this.state.note.id
						}), this._enteringEditMode = !1, this.props.autoFocusTextAreas) {
						var r = b.ancestorElementWithClass(this._titleTextArea, "note-component");
						if (this.state.note.title && "" !== this.state.note.title) {
							this._focusContentTextarea(), r.scrollIntoView();
							var e = window.innerHeight - d.getKeyboardHeight();
							(a = r.clientHeight) > e && this._scrollFromElement(this._contentTextArea, a - e)
						} else this._focusTitleTextarea(), r.scrollIntoView()
					}
				} else if (this._wasPreviouslyInEditMode) {
					var o = this.persistCurrentNoteContent;
					setTimeout((function() {
						o(), u.send({
							type: w.NATIVE_ACTION_NOTE_EDIT_MODE_EXITED
						})
					}), 0)
				} else if (document.activeElement && document.activeElement.id === this._noteTagId) {
					var i = void 0;
					if (i = this.props.fullScreen ? document.body : b.ancestorElementWithClass(document.activeElement, "note-editing-scroll-element")) {
						r = b.ancestorElementWithClass(document.activeElement, "note-component"), e = window.innerHeight - d.getKeyboardHeight();
						var a = r.offsetTop + r.clientHeight;
						this._scrollToPosition(i, a - e)
					}
				}
			}, r.prototype.render = function() {
				var t = this;
				if (this.state.note) {
					var r = this.state.note,
						e = m.getNoteColor(r.color, d.isInDarkMode()),
						o = d.getLocalizedString(f.label_more),
						i = [],
						a = void 0,
						c = void 0,
						p = "note-component jwac";
					if (r.language) {
						var u = r.language.mepsSymbol,
							s = r.language.script;
						a = r.language.dir, c = r.language.ietfSymbol, p += " ml-" + u + " dir-" + a + " ms-" + s
					}
					var b = this.props.inEditMode,
						w = this.props.fullScreen,
						j = r.title && "" !== r.title,
						x = r.content && "" !== r.content,
						y = r.tags && r.tags.length > 0,
						S = j || x || y,
						v = j || b ? "" : "note-hidden-element",
						O = x || b ? "" : "note-hidden-element",
						k = y || b ? "" : "note-hidden-element";
					j || b ? v += " note-top-element" : x ? O += " note-top-element" : y && (k += " note-top-element note-tags-top-element");
					var E = w ? {
							margin: "10pt 1pt 7pt 10pt"
						} : {
							margin: "10pt 10pt 7pt"
						},
						C = d.isInDarkMode() ? "./images/more_dark.png" : "./images/more.png",
						A = n.createElement("div", {
							ref: function(r) {
								return t._optionsButton = r
							},
							key: "note-options-element-" + r.id,
							onClick: this._onOptionsClick,
							style: E,
							className: "action-button options",
							role: "button",
							"aria-label": o
						}, n.createElement("img", {
							src: h.imageSourceWithOptimalResolution(C),
							style: {
								width: "100%",
								height: "auto",
								verticalAlign: "top"
							}
						})),
						T = n.createElement("div", {
							className: v,
							key: "note-title-element-" + r.id
						}, n.createElement(l.default, {
							className: "note-edit note-title",
							rows: 1,
							onInput: this._onTitleChanged,
							onFocus: this._onTitleFocus,
							onHeightChange: this._onTitleTextAreaResize,
							onBlur: this._onTitleBlur,
							placeholder: d.getLocalizedString(f.label_note_title),
							ref: function(r) {
								return t._titleTextArea = r
							},
							readOnly: !this.props.inEditMode
						})),
						I = n.createElement("div", {
							className: O,
							key: "note-content-element-" + r.id
						}, n.createElement(l.default, {
							className: "note-edit note-content",
							rows: 1,
							onInput: this._onContentChanged,
							onFocus: this._onContentFocus,
							onHeightChange: this._onContentTextAreaResize,
							placeholder: d.getLocalizedString(f.label_note),
							readOnly: !this.props.inEditMode,
							ref: function(r) {
								return t._contentTextArea = r
							}
						})),
						N = {
							display: this.props.inEditMode ? "none" : "flex",
							justifyContent: "flex-end",
							flexGrow: 1,
							flexShrink: 1,
							flexBasis: "0%",
							flexWrap: "wrap",
							marginTop: "8px"
						},
						_ = {
							backgroundColor: d.isInDarkMode() ? "rgba(18, 18, 18, .5)" : "rgba(216, 216, 216, .5)",
							borderRadius: "2em",
							display: "flex",
							margin: "2px"
						},
						R = {
							borderRadius: "2px",
							color: d.isInDarkMode() ? "#9FB9E3" : "#4A6DA7",
							fontSize: "85%",
							padding: "0.6em 1.1em",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
							boxSizing: "border-box"
						},
						M = d.getLocalizedString(f.action_add_a_tag),
						L = d.getLocalizedString(f.search_results_none),
						D = d.getLocalizedString(f.action_remove_tag),
						P = n.createElement("div", {
							className: k,
							key: "note-tag-element-" + r.id
						}, n.createElement("div", {
							style: N
						}, r.tags.map((function(r, e) {
							return n.createElement("div", {
								className: "readonly-tag-wrapper",
								key: e,
								style: _,
								onClick: function() {
									return t._onTagClicked(r)
								}
							}, n.createElement("div", {
								style: R
							}, r))
						}))), n.createElement(g.default, {
							noteTagId: this._noteTagId + "-" + r.id,
							inEditMode: this.props.inEditMode,
							selectedTags: this.state.selectedTags,
							onTagsChanged: this._onTagsChanged,
							addTagString: M,
							noResultsString: L,
							removeTagString: D,
							appearance: this.state.appearance,
							ref: function(r) {
								return t._tagComponent = r
							}
						}));
					return i.push(A), i.push(T), i.push(I), i.push(P), n.createElement("div", {
						onBlur: this._onBlur,
						onClick: this._onNoteClick,
						className: p,
						dir: a,
						lang: c,
						style: {
							backgroundColor: e,
							alignItems: S ? "inherit" : "flex-end",
							fontSize: "100%"
						},
						id: "note" + r.id
					}, i)
				}
				return n.createElement("div", null)
			}, r.prototype._updateDimensions = function() {
				if (this.props.fullScreen) {
					this._resizeComponents();
					var t = !1;
					if (this._contentTextArea && document.activeElement.className === this._contentTextArea.className ? this._contentTextArea.selectionEnd === this._contentTextArea.value.length && (t = !0) : document.activeElement && document.activeElement.id === this._noteTagId && (t = !0), t) {
						var r = this._contentTextArea.clientHeight;
						this._scrollFromElement(this._contentTextArea, r)
					}
				}
			}, r
		}(n.Component);
	t.exports = j
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = this && this.__assign || function() {
			return (a = Object.assign || function(t) {
				for (var r, e = 1, o = arguments.length; e < o; e++)
					for (var i in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
				return t
			}).apply(this, arguments)
		},
		n = this && this.__rest || function(t, r) {
			var e = {};
			for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && r.indexOf(o) < 0 && (e[o] = t[o]);
			if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
				var i = 0;
				for (o = Object.getOwnPropertySymbols(t); i < o.length; i++) r.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[i]) && (e[o[i]] = t[o[i]])
			}
			return e
		};
	Object.defineProperty(r, "__esModule", {
		value: !0
	});
	var l = e(2),
		c = e(402),
		d = e(405),
		m = e(406),
		p = e(357),
		u = e(30),
		g = function(t) {
			return l.createElement("div", {
				style: t.styles.wrapperStyle
			}, l.createElement("span", {
				style: t.styles.spanStyle,
				role: "button",
				"aria-pressed": "false",
				"aria-label": t.label
			}, t.children))
		},
		s = function(t) {
			function r(r) {
				var e = t.call(this, r) || this;
				return e.onChange = function(t) {
					var r = null == t ? [] : t.map((function(t) {
						return t.value
					}));
					e.props.onTagsChanged(r)
				}, e.onKeyDown = function(t) {
					0
				}, e.onInputChange = function(t) {
					e.setState({
						inputValue: t
					})
				}, e.onInputFocus = function() {
					e.setState({
						isFocused: !0
					})
				}, e.onInputBlur = function() {
					e.setState({
						isFocused: !1
					})
				}, e._getTagOptions = function(t) {
					var r = [];
					if (t)
						for (var e = 0, o = t; e < o.length; e++) {
							var i = o[e];
							r.push({
								value: i,
								label: i
							})
						}
					return r
				}, e._isValidNewOption = function(t, r) {
					if (t && r) {
						var e = t.trim();
						return "" !== e && -1 === r.indexOf(e)
					}
					return !1
				}, e.state = {
					isFocused: !1
				}, e.setValueContainer(), e.setMultiValueRemove(), e
			}
			return i(r, t), r.prototype.setValueContainer = function() {
				var t = d.components.ValueContainer,
					r = d.components.Placeholder,
					e = this.props.addTagString,
					o = {
						wrapperStyle: {
							height: "2em",
							width: "2em",
							lineHeight: "unset"
						},
						spanStyle: {
							fontSize: "1.4em"
						}
					},
					i = l.createElement(g, {
						styles: o,
						label: e
					}, "＋"),
					c = l.createElement(g, {
						styles: {
							wrapperStyle: {
								padding: ".4em .7em"
							},
							spanStyle: {
								fontSize: "0.9em"
							}
						},
						label: e
					}, "＋", " ", e);
				this._valueContainer = function(e) {
					var o = e.children,
						d = n(e, ["children"]);
					return l.createElement(t, a({}, d), l.Children.map(o, (function(t) {
						return t && t.type !== r ? t : null
					})), l.createElement(r, a({}, d), d.hasValue ? i : c))
				}
			}, r.prototype.setMultiValueRemove = function() {
				var t = this.props.removeTagString;
				this._multiValueRemove = function(r) {
					return l.createElement(d.components.MultiValueRemove, a({}, r), l.createElement("span", {
						role: "button",
						"aria-pressed": "false",
						"aria-label": t,
						className: "remove-tag"
					}, "✕"))
				}
			}, r.prototype.render = function() {
				var t = this,
					r = p.getTags(),
					e = this.props,
					o = e.inEditMode,
					i = e.noteTagId,
					a = e.addTagString,
					n = e.noResultsString,
					d = e.selectedTags,
					g = this.state,
					s = g.isFocused,
					b = g.inputValue;
				return l.createElement(c.default, {
					className: "note-edit note-tag-editor",
					ref: function(r) {
						return t._selectRef = r
					},
					classNamePrefix: "platform_win",
					styles: m.default(o, s, u.isInDarkMode()),
					id: i,
					inputValue: b,
					blurInputOnSelect: !1,
					captureMenuScroll: !1,
					closeMenuOnSelect: !0,
					value: d.map((function(t) {
						return {
							label: r = t,
							value: r
						};
						var r
					})),
					isDisabled: !o,
					isClearable: !1,
					noOptionsMessage: function() {
						return n
					},
					options: this._getTagOptions(r),
					onFocus: this.onInputFocus,
					onBlur: this.onInputBlur,
					isMulti: !0,
					escapeClearsValue: !1,
					components: {
						ValueContainer: this._valueContainer,
						MultiValueRemove: this._multiValueRemove
					},
					isValidNewOption: function(e) {
						return t._isValidNewOption(e, r)
					},
					onChange: this.onChange,
					onInputChange: this.onInputChange,
					onKeyDown: this.onKeyDown,
					formatCreateLabel: function(t) {
						return a + ' "' + t + '"'
					},
					createOptionPosition: "first",
					menuPlacement: "auto",
					maxMenuHeight: 198
				})
			}, r.prototype.blur = function() {
				this._selectRef.blur()
			}, r
		}(l.PureComponent);
	r.default = s
}, function(t, r, e) {
	"use strict";
	e.r(r), e.d(r, "defaultProps", (function() {
		return x
	})), e.d(r, "makeCreatableSelect", (function() {
		return y
	}));
	e(36);
	var o = e(5),
		i = e(71),
		a = e(27),
		n = e(16),
		l = e(17),
		c = e(18),
		d = e(19),
		m = e(20),
		p = e(1),
		u = e(3),
		g = e(2),
		s = e.n(g),
		b = (e(4), e(26), e(46), e(49), e(77), e(12)),
		w = e(66),
		f = (e(44), e(178), e(179), e(295)),
		h = function() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
				r = arguments.length > 1 ? arguments[1] : void 0,
				e = String(t).toLowerCase(),
				o = String(r.value).toLowerCase(),
				i = String(r.label).toLowerCase();
			return o === e || i === e
		},
		j = {
			formatCreateLabel: function(t) {
				return 'Create "'.concat(t, '"')
			},
			isValidNewOption: function(t, r, e) {
				return !(!t || r.some((function(r) {
					return h(t, r)
				})) || e.some((function(r) {
					return h(t, r)
				})))
			},
			getNewOptionData: function(t, r) {
				return {
					label: r,
					value: t,
					__isNew__: !0
				}
			}
		},
		x = Object(a.a)({
			allowCreateWhileLoading: !1,
			createOptionPosition: "last"
		}, j),
		y = function(t) {
			var r, e;
			return e = r = function(r) {
				function e(t) {
					var r;
					Object(n.a)(this, e), r = Object(c.a)(this, Object(d.a)(e).call(this, t)), Object(u.a)(Object(p.a)(Object(p.a)(r)), "select", void 0), Object(u.a)(Object(p.a)(Object(p.a)(r)), "onChange", (function(t, e) {
						var o = r.props,
							a = o.getNewOptionData,
							n = o.inputValue,
							l = o.isMulti,
							c = o.onChange,
							d = o.onCreateOption,
							m = o.value;
						if ("select-option" !== e.action) return c(t, e);
						var p = r.state.newOption,
							u = Array.isArray(t) ? t : [t];
						if (u[u.length - 1] !== p) c(t, e);
						else if (d) d(n);
						else {
							var g = a(n, n),
								s = {
									action: "create-option"
								};
							c(l ? [].concat(Object(i.a)(Object(b.f)(m)), [g]) : g, s)
						}
					}));
					var o = t.options || [];
					return r.state = {
						newOption: void 0,
						options: o
					}, r
				}
				return Object(m.a)(e, r), Object(l.a)(e, [{
					key: "componentWillReceiveProps",
					value: function(t) {
						var r = t.allowCreateWhileLoading,
							e = t.createOptionPosition,
							o = t.formatCreateLabel,
							a = t.getNewOptionData,
							n = t.inputValue,
							l = t.isLoading,
							c = t.isValidNewOption,
							d = t.value,
							m = t.options || [],
							p = this.state.newOption;
						p = c(n, Object(b.f)(d), m) ? a(n, o(n)) : void 0, this.setState({
							newOption: p,
							options: !r && l || !p ? m : "first" === e ? [p].concat(Object(i.a)(m)) : [].concat(Object(i.a)(m), [p])
						})
					}
				}, {
					key: "focus",
					value: function() {
						this.select.focus()
					}
				}, {
					key: "blur",
					value: function() {
						this.select.blur()
					}
				}, {
					key: "render",
					value: function() {
						var r = this,
							e = Object(o.a)({}, this.props),
							i = this.state.options;
						return s.a.createElement(t, Object(o.a)({}, e, {
							ref: function(t) {
								r.select = t
							},
							options: i,
							onChange: this.onChange
						}))
					}
				}]), e
			}(g.Component), Object(u.a)(r, "defaultProps", x), e
		},
		S = y(w.a),
		v = Object(f.a)(S);
	r.default = v
}, function(t, r, e) {
	"use strict";
	var o = e(404);

	function i() {}

	function a() {}
	a.resetWarningCache = i, t.exports = function() {
		function t(t, r, e, i, a, n) {
			if (n !== o) {
				var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw l.name = "Invariant Violation", l
			}
		}

		function r() {
			return t
		}
		t.isRequired = t;
		var e = {
			array: t,
			bool: t,
			func: t,
			number: t,
			object: t,
			string: t,
			symbol: t,
			any: t,
			arrayOf: r,
			element: t,
			elementType: t,
			instanceOf: r,
			node: t,
			objectOf: r,
			oneOf: r,
			oneOfType: r,
			shape: r,
			exact: r,
			checkPropTypes: a,
			resetWarningCache: i
		};
		return e.PropTypes = e, e
	}
}, function(t, r, e) {
	"use strict";
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(t, r, e) {
	"use strict";
	e.r(r), e.d(r, "NonceProvider", (function() {
		return h
	}));
	e(36), e(5), e(71), e(27);
	var o = e(16),
		i = e(17),
		a = e(18),
		n = e(19),
		l = e(20),
		c = e(1),
		d = e(3),
		m = e(2),
		p = e.n(m),
		u = e(164),
		g = e(4),
		s = (e(26), e(46), e(49), e(77), e(7));
	e.d(r, "components", (function() {
		return s.z
	}));
	var b = e(66);
	e.d(r, "createFilter", (function() {
		return b.c
	})), e.d(r, "defaultTheme", (function() {
		return b.b
	})), e.d(r, "mergeStyles", (function() {
		return b.d
	}));
	e(44), e(178), e(179);
	var w = e(295),
		f = e(296),
		h = function(t) {
			function r(t) {
				var e;
				return Object(o.a)(this, r), e = Object(a.a)(this, Object(n.a)(r).call(this, t)), Object(d.a)(Object(c.a)(Object(c.a)(e)), "createEmotionCache", (function(t) {
					return Object(f.a)({
						nonce: t
					})
				})), e.createEmotionCache = Object(u.a)(e.createEmotionCache), e
			}
			return Object(l.a)(r, t), Object(i.a)(r, [{
				key: "render",
				value: function() {
					var t = this.createEmotionCache(this.props.nonce);
					return p.a.createElement(g.a, {
						value: t
					}, this.props.children)
				}
			}]), r
		}(m.Component),
		j = Object(w.a)(b.a);
	r.default = j
}, function(t, r, e) {
	"use strict";
	var o = this && this.__assign || function() {
		return (o = Object.assign || function(t) {
			for (var r, e = 1, o = arguments.length; e < o; e++)
				for (var i in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
			return t
		}).apply(this, arguments)
	};
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.default = function(t, r, e) {
		var i = e ? "#121212" : "#ffffff",
			a = e ? "rgba(18, 18, 18, .5)" : "rgba(216, 216, 216, .5)",
			n = e ? "#ffffff" : "#121212",
			l = e ? "#224680" : "#c2d4f1",
			c = e ? "#f1f1f1" : "#4f4f4f";
		return {
			container: function(r, e) {
				return o(o({}, r), {
					display: t ? r.display : "none"
				})
			},
			control: function(t, r) {
				return {
					background: "transparent",
					border: "0"
				}
			},
			input: function(t, e) {
				return o(o({}, t), {
					fontSize: "0.9em",
					color: n,
					minWidth: r ? "1.8em" : "initial",
					textAlign: "right"
				})
			},
			option: function(t, r) {
				return o(o({}, t), {
					backgroundColor: r.isFocused ? l : t.backgroundColor
				})
			},
			indicatorsContainer: function(t, r) {
				return {
					display: "none"
				}
			},
			menu: function(t) {
				return o(o({}, t), {
					fontSize: "0.9em",
					wordWrap: "break-word",
					backgroundColor: i,
					color: n,
					width: "200px",
					right: "0"
				})
			},
			multiValueContainer: function(t, r) {
				return o({}, t)
			},
			multiValue: function(t, r) {
				return o(o({}, t), {
					backgroundColor: a,
					color: c,
					borderRadius: "2em"
				})
			},
			multiValueLabel: function(t, r) {
				return o(o({}, t), {
					paddingTop: ".6em",
					paddingRight: ".5em",
					paddingBottom: ".6em",
					paddingLeft: "1.1em",
					color: n
				})
			},
			multiValueRemove: function(t, r) {
				return o(o({}, t), {
					fontSize: "0.9em",
					cursor: "pointer",
					paddingTop: ".6em",
					paddingRight: ".6em",
					paddingBottom: ".6em",
					paddingLeft: ".5em",
					lineHeight: "1",
					"&:hover": {
						backgroundColor: "rgba(0, 0, 0, 0.05)",
						color: e ? "rgb(142, 142, 142)" : "rgb(167, 167, 167)"
					}
				})
			},
			valueContainer: function(t, r) {
				return o(o({}, t), {
					minHeight: "2.5em",
					justifyContent: "flex-end"
				})
			},
			placeholder: function(t, e) {
				return o(o({}, t), {
					cursor: "pointer",
					fontSize: "1em",
					color: c,
					margin: "2px",
					overflow: "hidden",
					textOverflow: "ellipsis",
					whiteSpace: "nowrap",
					textAlign: "center",
					position: "initial",
					top: "unset",
					transform: "unset",
					border: "1px solid " + c,
					borderRadius: "2em",
					display: r ? "none" : "initial"
				})
			}
		}
	}
}, , , , , , , function(t, r, e) {
	"use strict";

	function o() {
		return (o = Object.assign || function(t) {
			for (var r = 1; r < arguments.length; r++) {
				var e = arguments[r];
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			}
			return t
		}).apply(this, arguments)
	}
	e.r(r);
	var i = e(2),
		a = i.useLayoutEffect,
		n = function(t) {
			var r = Object(i.useRef)(t);
			return a((function() {
				r.current = t
			})), r
		},
		l = function(t, r) {
			"function" != typeof t ? t.current = r : t(r)
		},
		c = function(t, r) {
			var e = Object(i.useRef)();
			return Object(i.useCallback)((function(o) {
				t.current = o, e.current && l(e.current, null), e.current = r, r && l(r, o)
			}), [r])
		},
		d = {
			"min-height": "0",
			"max-height": "none",
			height: "0",
			visibility: "hidden",
			overflow: "hidden",
			position: "absolute",
			"z-index": "-1000",
			top: "0",
			right: "0"
		},
		m = function(t) {
			Object.keys(d).forEach((function(r) {
				t.style.setProperty(r, d[r], "important")
			}))
		},
		p = null;
	var u = function() {},
		g = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width", "wordBreak"],
		s = !!document.documentElement.currentStyle,
		b = function(t, r) {
			var e = t.cacheMeasurements,
				a = t.maxRows,
				l = t.minRows,
				d = t.onChange,
				b = void 0 === d ? u : d,
				w = t.onHeightChange,
				f = void 0 === w ? u : w,
				h = function(t, r) {
					if (null == t) return {};
					var e, o, i = {},
						a = Object.keys(t);
					for (o = 0; o < a.length; o++) e = a[o], r.indexOf(e) >= 0 || (i[e] = t[e]);
					return i
				}(t, ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"]);
			var j, x = void 0 !== h.value,
				y = Object(i.useRef)(null),
				S = c(y, r),
				v = Object(i.useRef)(0),
				O = Object(i.useRef)(),
				k = function() {
					var t = y.current,
						r = e && O.current ? O.current : function(t) {
							var r = window.getComputedStyle(t);
							if (null === r) return null;
							var e, o = (e = r, g.reduce((function(t, r) {
									return t[r] = e[r], t
								}), {})),
								i = o.boxSizing;
							return "" === i ? null : (s && "border-box" === i && (o.width = parseFloat(o.width) + parseFloat(o.borderRightWidth) + parseFloat(o.borderLeftWidth) + parseFloat(o.paddingRight) + parseFloat(o.paddingLeft) + "px"), {
								sizingStyle: o,
								paddingSize: parseFloat(o.paddingBottom) + parseFloat(o.paddingTop),
								borderSize: parseFloat(o.borderBottomWidth) + parseFloat(o.borderTopWidth)
							})
						}(t);
					if (r) {
						O.current = r;
						var o = function(t, r, e, o) {
								void 0 === e && (e = 1), void 0 === o && (o = 1 / 0), p || ((p = document.createElement("textarea")).setAttribute("tabindex", "-1"), p.setAttribute("aria-hidden", "true"), m(p)), null === p.parentNode && document.body.appendChild(p);
								var i = t.paddingSize,
									a = t.borderSize,
									n = t.sizingStyle,
									l = n.boxSizing;
								Object.keys(n).forEach((function(t) {
									var r = t;
									p.style[r] = n[r]
								})), m(p), p.value = r;
								var c = function(t, r) {
									var e = t.scrollHeight;
									return "border-box" === r.sizingStyle.boxSizing ? e + r.borderSize : e - r.paddingSize
								}(p, t);
								p.value = "x";
								var d = p.scrollHeight - i,
									u = d * e;
								"border-box" === l && (u = u + i + a), c = Math.max(u, c);
								var g = d * o;
								return "border-box" === l && (g = g + i + a), [c = Math.min(g, c), d]
							}(r, t.value || t.placeholder || "x", l, a),
							i = o[0],
							n = o[1];
						v.current !== i && (v.current = i, t.style.setProperty("height", i + "px", "important"), f(i, {
							rowHeight: n
						}))
					}
				};
			return Object(i.useLayoutEffect)(k), j = n(k), Object(i.useLayoutEffect)((function() {
				var t = function(t) {
					j.current(t)
				};
				return window.addEventListener("resize", t),
					function() {
						window.removeEventListener("resize", t)
					}
			}), []), Object(i.createElement)("textarea", o({}, h, {
				onChange: function(t) {
					x || k(), b(t)
				},
				ref: S
			}))
		},
		w = Object(i.forwardRef)(b);
	r.default = w
}, , , , , , , , , , function(t, r, e) {
	var o;
	/*!
	 * UAParser.js v0.7.23
	 * Lightweight JavaScript-based User-Agent string parser
	 * https://github.com/faisalman/ua-parser-js
	 *
	 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
	 * Licensed under MIT License
	 */
	! function(i, a) {
		"use strict";
		var n = "model",
			l = "name",
			c = "type",
			d = "vendor",
			m = "version",
			p = "mobile",
			u = "tablet",
			g = "smarttv",
			s = {
				extend: function(t, r) {
					var e = {};
					for (var o in t) r[o] && r[o].length % 2 == 0 ? e[o] = r[o].concat(t[o]) : e[o] = t[o];
					return e
				},
				has: function(t, r) {
					return "string" == typeof t && -1 !== r.toLowerCase().indexOf(t.toLowerCase())
				},
				lowerize: function(t) {
					return t.toLowerCase()
				},
				major: function(t) {
					return "string" == typeof t ? t.replace(/[^\d\.]/g, "").split(".")[0] : void 0
				},
				trim: function(t) {
					return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
				}
			},
			b = {
				rgx: function(t, r) {
					for (var e, o, i, a, n, l, c = 0; c < r.length && !n;) {
						var d = r[c],
							m = r[c + 1];
						for (e = o = 0; e < d.length && !n;)
							if (n = d[e++].exec(t))
								for (i = 0; i < m.length; i++) l = n[++o], "object" == typeof(a = m[i]) && a.length > 0 ? 2 == a.length ? "function" == typeof a[1] ? this[a[0]] = a[1].call(this, l) : this[a[0]] = a[1] : 3 == a.length ? "function" != typeof a[1] || a[1].exec && a[1].test ? this[a[0]] = l ? l.replace(a[1], a[2]) : void 0 : this[a[0]] = l ? a[1].call(this, l, a[2]) : void 0 : 4 == a.length && (this[a[0]] = l ? a[3].call(this, l.replace(a[1], a[2])) : void 0) : this[a] = l || void 0;
						c += 2
					}
				},
				str: function(t, r) {
					for (var e in r)
						if ("object" == typeof r[e] && r[e].length > 0) {
							for (var o = 0; o < r[e].length; o++)
								if (s.has(r[e][o], t)) return "?" === e ? void 0 : e
						} else if (s.has(r[e], t)) return "?" === e ? void 0 : e;
					return t
				}
			},
			w = {
				browser: {
					oldsafari: {
						version: {
							"1.0": "/8",
							1.2: "/1",
							1.3: "/3",
							"2.0": "/412",
							"2.0.2": "/416",
							"2.0.3": "/417",
							"2.0.4": "/419",
							"?": "/"
						}
					}
				},
				device: {
					amazon: {
						model: {
							"Fire Phone": ["SD", "KF"]
						}
					},
					sprint: {
						model: {
							"Evo Shift 4G": "7373KT"
						},
						vendor: {
							HTC: "APA",
							Sprint: "Sprint"
						}
					}
				},
				os: {
					windows: {
						version: {
							ME: "4.90",
							"NT 3.11": "NT3.51",
							"NT 4.0": "NT4.0",
							2e3: "NT 5.0",
							XP: ["NT 5.1", "NT 5.2"],
							Vista: "NT 6.0",
							7: "NT 6.1",
							8: "NT 6.2",
							8.1: "NT 6.3",
							10: ["NT 6.4", "NT 10.0"],
							RT: "ARM"
						}
					}
				}
			},
			f = {
				browser: [
					[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
					[l, m],
					[/(opios)[\/\s]+([\w\.]+)/i],
					[
						[l, "Opera Mini"], m
					],
					[/\s(opr)\/([\w\.]+)/i],
					[
						[l, "Opera"], m
					],
					[/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
					[l, m],
					[/(konqueror)\/([\w\.]+)/i],
					[
						[l, "Konqueror"], m
					],
					[/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],
					[
						[l, "IE"], m
					],
					[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
					[
						[l, "Edge"], m
					],
					[/(yabrowser)\/([\w\.]+)/i],
					[
						[l, "Yandex"], m
					],
					[/(Avast)\/([\w\.]+)/i],
					[
						[l, "Avast Secure Browser"], m
					],
					[/(AVG)\/([\w\.]+)/i],
					[
						[l, "AVG Secure Browser"], m
					],
					[/(puffin)\/([\w\.]+)/i],
					[
						[l, "Puffin"], m
					],
					[/(focus)\/([\w\.]+)/i],
					[
						[l, "Firefox Focus"], m
					],
					[/(opt)\/([\w\.]+)/i],
					[
						[l, "Opera Touch"], m
					],
					[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
					[
						[l, "UCBrowser"], m
					],
					[/(comodo_dragon)\/([\w\.]+)/i],
					[
						[l, /_/g, " "], m
					],
					[/(windowswechat qbcore)\/([\w\.]+)/i],
					[
						[l, "WeChat(Win) Desktop"], m
					],
					[/(micromessenger)\/([\w\.]+)/i],
					[
						[l, "WeChat"], m
					],
					[/(brave)\/([\w\.]+)/i],
					[
						[l, "Brave"], m
					],
					[/(whale)\/([\w\.]+)/i],
					[
						[l, "Whale"], m
					],
					[/(qqbrowserlite)\/([\w\.]+)/i],
					[l, m],
					[/(QQ)\/([\d\.]+)/i],
					[l, m],
					[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
					[l, m],
					[/(baiduboxapp)[\/\s]?([\w\.]+)/i],
					[l, m],
					[/(2345Explorer)[\/\s]?([\w\.]+)/i],
					[l, m],
					[/(MetaSr)[\/\s]?([\w\.]+)/i],
					[l],
					[/(LBBROWSER)/i],
					[l],
					[/xiaomi\/miuibrowser\/([\w\.]+)/i],
					[m, [l, "MIUI Browser"]],
					[/;fbav\/([\w\.]+);/i],
					[m, [l, "Facebook"]],
					[/FBAN\/FBIOS|FB_IAB\/FB4A/i],
					[
						[l, "Facebook"]
					],
					[/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
					[l, m],
					[/headlesschrome(?:\/([\w\.]+)|\s)/i],
					[m, [l, "Chrome Headless"]],
					[/\swv\).+(chrome)\/([\w\.]+)/i],
					[
						[l, /(.+)/, "$1 WebView"], m
					],
					[/((?:oculus|samsung)browser)\/([\w\.]+)/i],
					[
						[l, /(.+(?:g|us))(.+)/, "$1 $2"], m
					],
					[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
					[m, [l, "Android Browser"]],
					[/(sailfishbrowser)\/([\w\.]+)/i],
					[
						[l, "Sailfish Browser"], m
					],
					[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
					[l, m],
					[/(dolfin)\/([\w\.]+)/i],
					[
						[l, "Dolphin"], m
					],
					[/(qihu|qhbrowser|qihoobrowser|360browser)/i],
					[
						[l, "360 Browser"]
					],
					[/((?:android.+)crmo|crios)\/([\w\.]+)/i],
					[
						[l, "Chrome"], m
					],
					[/(coast)\/([\w\.]+)/i],
					[
						[l, "Opera Coast"], m
					],
					[/fxios\/([\w\.-]+)/i],
					[m, [l, "Firefox"]],
					[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
					[m, [l, "Mobile Safari"]],
					[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
					[m, l],
					[/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i],
					[
						[l, "GSA"], m
					],
					[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
					[l, [m, b.str, w.browser.oldsafari.version]],
					[/(webkit|khtml)\/([\w\.]+)/i],
					[l, m],
					[/(navigator|netscape)\/([\w\.-]+)/i],
					[
						[l, "Netscape"], m
					],
					[/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
					[l, m]
				],
				cpu: [
					[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
					[
						["architecture", "amd64"]
					],
					[/(ia32(?=;))/i],
					[
						["architecture", s.lowerize]
					],
					[/((?:i[346]|x)86)[;\)]/i],
					[
						["architecture", "ia32"]
					],
					[/windows\s(ce|mobile);\sppc;/i],
					[
						["architecture", "arm"]
					],
					[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
					[
						["architecture", /ower/, "", s.lowerize]
					],
					[/(sun4\w)[;\)]/i],
					[
						["architecture", "sparc"]
					],
					[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
					[
						["architecture", s.lowerize]
					]
				],
				device: [
					[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
					[n, d, [c, u]],
					[/applecoremedia\/[\w\.]+ \((ipad)/],
					[n, [d, "Apple"],
						[c, u]
					],
					[/(apple\s{0,1}tv)/i],
					[
						[n, "Apple TV"],
						[d, "Apple"],
						[c, g]
					],
					[/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
					[d, n, [c, u]],
					[/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],
					[n, [d, "Amazon"],
						[c, u]
					],
					[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
					[
						[n, b.str, w.device.amazon.model],
						[d, "Amazon"],
						[c, p]
					],
					[/android.+aft([bms])\sbuild/i],
					[n, [d, "Amazon"],
						[c, g]
					],
					[/\((ip[honed|\s\w*]+);.+(apple)/i],
					[n, d, [c, p]],
					[/\((ip[honed|\s\w*]+);/i],
					[n, [d, "Apple"],
						[c, p]
					],
					[/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
					[d, n, [c, p]],
					[/\(bb10;\s(\w+)/i],
					[n, [d, "BlackBerry"],
						[c, p]
					],
					[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
					[n, [d, "Asus"],
						[c, u]
					],
					[/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
					[
						[d, "Sony"],
						[n, "Xperia Tablet"],
						[c, u]
					],
					[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
					[n, [d, "Sony"],
						[c, p]
					],
					[/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
					[d, n, [c, "console"]],
					[/android.+;\s(shield)\sbuild/i],
					[n, [d, "Nvidia"],
						[c, "console"]
					],
					[/(playstation\s[34portablevi]+)/i],
					[n, [d, "Sony"],
						[c, "console"]
					],
					[/(sprint\s(\w+))/i],
					[
						[d, b.str, w.device.sprint.vendor],
						[n, b.str, w.device.sprint.model],
						[c, p]
					],
					[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
					[d, [n, /_/g, " "],
						[c, p]
					],
					[/(nexus\s9)/i],
					[n, [d, "HTC"],
						[c, u]
					],
					[/d\/huawei([\w\s-]+)[;\)]/i, /android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i],
					[n, [d, "Huawei"],
						[c, p]
					],
					[/android.+(bah2?-a?[lw]\d{2})/i],
					[n, [d, "Huawei"],
						[c, u]
					],
					[/(microsoft);\s(lumia[\s\w]+)/i],
					[d, n, [c, p]],
					[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
					[n, [d, "Microsoft"],
						[c, "console"]
					],
					[/(kin\.[onetw]{3})/i],
					[
						[n, /\./g, " "],
						[d, "Microsoft"],
						[c, p]
					],
					[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
					[n, [d, "Motorola"],
						[c, p]
					],
					[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
					[n, [d, "Motorola"],
						[c, u]
					],
					[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
					[
						[d, s.trim],
						[n, s.trim],
						[c, g]
					],
					[/hbbtv.+maple;(\d+)/i],
					[
						[n, /^/, "SmartTV"],
						[d, "Samsung"],
						[c, g]
					],
					[/\(dtv[\);].+(aquos)/i],
					[n, [d, "Sharp"],
						[c, g]
					],
					[/android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
					[
						[d, "Samsung"], n, [c, u]
					],
					[/smart-tv.+(samsung)/i],
					[d, [c, g], n],
					[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
					[
						[d, "Samsung"], n, [c, p]
					],
					[/sie-(\w*)/i],
					[n, [d, "Siemens"],
						[c, p]
					],
					[/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
					[
						[d, "Nokia"], n, [c, p]
					],
					[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
					[n, [d, "Acer"],
						[c, u]
					],
					[/android.+([vl]k\-?\d{3})\s+build/i],
					[n, [d, "LG"],
						[c, u]
					],
					[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
					[
						[d, "LG"], n, [c, u]
					],
					[/linux;\snetcast.+smarttv/i, /lg\snetcast\.tv-201\d/i],
					[
						[d, "LG"], n, [c, g]
					],
					[/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
					[n, [d, "LG"],
						[c, p]
					],
					[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
					[d, n, [c, u]],
					[/android.+(ideatab[a-z0-9\-\s]+)/i],
					[n, [d, "Lenovo"],
						[c, u]
					],
					[/(lenovo)[_\s-]?([\w-]+)/i],
					[d, n, [c, p]],
					[/linux;.+((jolla));/i],
					[d, n, [c, p]],
					[/((pebble))app\/[\d\.]+\s/i],
					[d, n, [c, "wearable"]],
					[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
					[d, n, [c, p]],
					[/crkey/i],
					[
						[n, "Chromecast"],
						[d, "Google"],
						[c, g]
					],
					[/android.+;\s(glass)\s\d/i],
					[n, [d, "Google"],
						[c, "wearable"]
					],
					[/android.+;\s(pixel c)[\s)]/i],
					[n, [d, "Google"],
						[c, u]
					],
					[/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],
					[n, [d, "Google"],
						[c, p]
					],
					[/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i, /android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],
					[
						[n, /_/g, " "],
						[d, "Xiaomi"],
						[c, p]
					],
					[/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i],
					[
						[n, /_/g, " "],
						[d, "Xiaomi"],
						[c, u]
					],
					[/android.+;\s(m[1-5]\snote)\sbuild/i],
					[n, [d, "Meizu"],
						[c, p]
					],
					[/(mz)-([\w-]{2,})/i],
					[
						[d, "Meizu"], n, [c, p]
					],
					[/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
					[n, [d, "OnePlus"],
						[c, p]
					],
					[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
					[n, [d, "RCA"],
						[c, u]
					],
					[/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],
					[n, [d, "Dell"],
						[c, u]
					],
					[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
					[n, [d, "Verizon"],
						[c, u]
					],
					[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
					[
						[d, "Barnes & Noble"], n, [c, u]
					],
					[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
					[n, [d, "NuVision"],
						[c, u]
					],
					[/android.+;\s(k88)\sbuild/i],
					[n, [d, "ZTE"],
						[c, u]
					],
					[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
					[n, [d, "Swiss"],
						[c, p]
					],
					[/android.+[;\/]\s*(zur\d{3})\s+build/i],
					[n, [d, "Swiss"],
						[c, u]
					],
					[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
					[n, [d, "Zeki"],
						[c, u]
					],
					[/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
					[
						[d, "Dragon Touch"], n, [c, u]
					],
					[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
					[n, [d, "Insignia"],
						[c, u]
					],
					[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
					[n, [d, "NextBook"],
						[c, u]
					],
					[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
					[
						[d, "Voice"], n, [c, p]
					],
					[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
					[
						[d, "LvTel"], n, [c, p]
					],
					[/android.+;\s(PH-1)\s/i],
					[n, [d, "Essential"],
						[c, p]
					],
					[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
					[n, [d, "Envizen"],
						[c, u]
					],
					[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
					[d, n, [c, u]],
					[/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],
					[n, [d, "MachSpeed"],
						[c, u]
					],
					[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
					[d, n, [c, u]],
					[/android.+[;\/]\s*TU_(1491)\s+build/i],
					[n, [d, "Rotor"],
						[c, u]
					],
					[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
					[d, n, [c, u]],
					[/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
					[n, [c, p]],
					[/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
					[n, [c, u]],
					[/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
					[
						[c, s.lowerize], d, n
					],
					[/[\s\/\(](smart-?tv)[;\)]/i],
					[
						[c, g]
					],
					[/(android[\w\.\s\-]{0,9});.+build/i],
					[n, [d, "Generic"]]
				],
				engine: [
					[/windows.+\sedge\/([\w\.]+)/i],
					[m, [l, "EdgeHTML"]],
					[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
					[m, [l, "Blink"]],
					[/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
					[l, m],
					[/rv\:([\w\.]{1,9}).+(gecko)/i],
					[m, l]
				],
				os: [
					[/microsoft\s(windows)\s(vista|xp)/i],
					[l, m],
					[/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
					[l, [m, b.str, w.os.windows.version]],
					[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
					[
						[l, "Windows"],
						[m, b.str, w.os.windows.version]
					],
					[/\((bb)(10);/i],
					[
						[l, "BlackBerry"], m
					],
					[/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
					[l, m],
					[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
					[
						[l, "Symbian"], m
					],
					[/\((series40);/i],
					[l],
					[/mozilla.+\(mobile;.+gecko.+firefox/i],
					[
						[l, "Firefox OS"], m
					],
					[/crkey\/([\d\.]+)/i],
					[m, [l, "Chromecast"]],
					[/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
					[l, m],
					[/(cros)\s[\w]+\s([\w\.]+\w)/i],
					[
						[l, "Chromium OS"], m
					],
					[/(sunos)\s?([\w\.\d]*)/i],
					[
						[l, "Solaris"], m
					],
					[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
					[l, m],
					[/(haiku)\s(\w+)/i],
					[l, m],
					[/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
					[
						[m, /_/g, "."],
						[l, "iOS"]
					],
					[/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
					[
						[l, "Mac OS"],
						[m, /_/g, "."]
					],
					[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
					[l, m]
				]
			},
			h = function(t, r) {
				if ("object" == typeof t && (r = t, t = void 0), !(this instanceof h)) return new h(t, r).getResult();
				var e = t || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
					o = r ? s.extend(f, r) : f;
				return this.getBrowser = function() {
					var t = {
						name: void 0,
						version: void 0
					};
					return b.rgx.call(t, e, o.browser), t.major = s.major(t.version), t
				}, this.getCPU = function() {
					var t = {
						architecture: void 0
					};
					return b.rgx.call(t, e, o.cpu), t
				}, this.getDevice = function() {
					var t = {
						vendor: void 0,
						model: void 0,
						type: void 0
					};
					return b.rgx.call(t, e, o.device), t
				}, this.getEngine = function() {
					var t = {
						name: void 0,
						version: void 0
					};
					return b.rgx.call(t, e, o.engine), t
				}, this.getOS = function() {
					var t = {
						name: void 0,
						version: void 0
					};
					return b.rgx.call(t, e, o.os), t
				}, this.getResult = function() {
					return {
						ua: this.getUA(),
						browser: this.getBrowser(),
						engine: this.getEngine(),
						os: this.getOS(),
						device: this.getDevice(),
						cpu: this.getCPU()
					}
				}, this.getUA = function() {
					return e
				}, this.setUA = function(t) {
					return e = t, this
				}, this
			};
		h.VERSION = "0.7.23", h.BROWSER = {
			NAME: l,
			MAJOR: "major",
			VERSION: m
		}, h.CPU = {
			ARCHITECTURE: "architecture"
		}, h.DEVICE = {
			MODEL: n,
			VENDOR: d,
			TYPE: c,
			CONSOLE: "console",
			MOBILE: p,
			SMARTTV: g,
			TABLET: u,
			WEARABLE: "wearable",
			EMBEDDED: "embedded"
		}, h.ENGINE = {
			NAME: l,
			VERSION: m
		}, h.OS = {
			NAME: l,
			VERSION: m
		}, void 0 !== r ? (void 0 !== t && t.exports && (r = t.exports = h), r.UAParser = h) : void 0 === (o = function() {
			return h
		}.call(r, e, r, t)) || (t.exports = o);
		var j = i && (i.jQuery || i.Zepto);
		if (j && !j.ua) {
			var x = new h;
			j.ua = x.getResult(), j.ua.get = function() {
				return x.getUA()
			}, j.ua.set = function(t) {
				x.setUA(t);
				var r = x.getResult();
				for (var e in r) j.ua[e] = r[e]
			}
		}
	}("object" == typeof window ? window : this)
}, function(t, r, e) {
	var o = e(33),
		i = e(425);
	"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
		[t.i, i, ""]
	]);
	var a = {
		insert: "head",
		singleton: !1
	};
	o(i, a);
	t.exports = i.locals || {}
}, function(t, r, e) {
	"use strict";
	e.r(r);
	var o = e(11),
		i = e.n(o),
		a = e(0),
		n = e.n(a),
		l = e(102),
		c = e(103),
		d = e(104),
		m = e(105),
		p = e(106),
		u = e(107),
		g = e(108),
		s = e(109),
		b = e(110),
		w = e(111),
		f = e(112),
		h = e(113),
		j = e(114),
		x = e(115),
		y = e(116),
		S = e(117),
		v = e(118),
		O = e(119),
		k = e(120),
		E = e(121),
		C = e(122),
		A = e(123),
		T = e(124),
		I = e(125),
		N = e(126),
		_ = e(127),
		R = e(128),
		M = e(129),
		L = e(130),
		D = e(131),
		P = e(132),
		z = e(133),
		H = e(134),
		G = e(135),
		B = e(136),
		U = e(137),
		W = e(138),
		F = e(139),
		V = e(140),
		K = e(141),
		Y = e(142),
		q = e(143),
		Q = e(144),
		J = e(145),
		X = e(146),
		Z = e(147),
		$ = e(148),
		tt = e(149),
		rt = e(150),
		et = e(151),
		ot = e(152),
		it = e(153),
		at = e(154),
		nt = e(155),
		lt = e(156),
		ct = e(157),
		dt = e(158),
		mt = e(159),
		pt = e(160),
		ut = e(161),
		gt = i()(!1),
		st = n()(l.a),
		bt = n()(c.a),
		wt = n()(d.a),
		ft = n()(m.a),
		ht = n()(p.a),
		jt = n()(u.a),
		xt = n()(g.a),
		yt = n()(s.a),
		St = n()(b.a),
		vt = n()(w.a),
		Ot = n()(f.a),
		kt = n()(h.a),
		Et = n()(j.a),
		Ct = n()(x.a),
		At = n()(y.a),
		Tt = n()(S.a),
		It = n()(v.a),
		Nt = n()(O.a),
		_t = n()(k.a),
		Rt = n()(E.a),
		Mt = n()(C.a),
		Lt = n()(A.a),
		Dt = n()(T.a),
		Pt = n()(I.a),
		zt = n()(N.a),
		Ht = n()(_.a),
		Gt = n()(R.a),
		Bt = n()(M.a),
		Ut = n()(L.a),
		Wt = n()(D.a),
		Ft = n()(P.a),
		Vt = n()(z.a),
		Kt = n()(H.a),
		Yt = n()(G.a),
		qt = n()(B.a),
		Qt = n()(U.a),
		Jt = n()(W.a),
		Xt = n()(F.a),
		Zt = n()(V.a),
		$t = n()(K.a),
		tr = n()(Y.a),
		rr = n()(q.a),
		er = n()(Q.a),
		or = n()(J.a),
		ir = n()(X.a),
		ar = n()(Z.a),
		nr = n()($.a),
		lr = n()(tt.a),
		cr = n()(rt.a),
		dr = n()(et.a),
		mr = n()(ot.a),
		pr = n()(it.a),
		ur = n()(at.a),
		gr = n()(nt.a),
		sr = n()(lt.a),
		br = n()(ct.a),
		wr = n()(dt.a),
		fr = n()(mt.a),
		hr = n()(pt.a),
		jr = n()(ut.a);
	gt.push([t.i, ".bookmark{display:inline-block;height:18px;width:10px;margin-top:0.5ex}.dir-ltr .bookmark{float:left}.dir-rtl .bookmark{float:right}.cc-theme--light .bookmark-0{background-image:url(" + st + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-0{background-image:url(" + bt + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-0{background-image:url(" + wt + ");background-size:10px 18px}}.cc-theme--light .bookmark-1{background-image:url(" + ft + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-1{background-image:url(" + ht + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-1{background-image:url(" + jt + ");background-size:10px 18px}}.cc-theme--light .bookmark-2{background-image:url(" + xt + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-2{background-image:url(" + yt + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-2{background-image:url(" + St + ");background-size:10px 18px}}.cc-theme--light .bookmark-3{background-image:url(" + vt + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-3{background-image:url(" + Ot + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-3{background-image:url(" + kt + ");background-size:10px 18px}}.cc-theme--light .bookmark-4{background-image:url(" + Et + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-4{background-image:url(" + Ct + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-4{background-image:url(" + At + ");background-size:10px 18px}}.cc-theme--light .bookmark-5{background-image:url(" + Tt + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-5{background-image:url(" + It + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-5{background-image:url(" + Nt + ");background-size:10px 18px}}.cc-theme--light .bookmark-6{background-image:url(" + _t + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-6{background-image:url(" + Rt + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-6{background-image:url(" + Mt + ");background-size:10px 18px}}.cc-theme--light .bookmark-7{background-image:url(" + Lt + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-7{background-image:url(" + Dt + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-7{background-image:url(" + Pt + ");background-size:10px 18px}}.cc-theme--light .bookmark-8{background-image:url(" + zt + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-8{background-image:url(" + Ht + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-8{background-image:url(" + Gt + ");background-size:10px 18px}}.cc-theme--light .bookmark-9{background-image:url(" + Bt + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--light .bookmark-9{background-image:url(" + Ut + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--light .bookmark-9{background-image:url(" + Wt + ");background-size:10px 18px}}.cc-theme--dark .bookmark-0{background-image:url(" + Ft + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-0{background-image:url(" + Vt + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-0{background-image:url(" + Kt + ");background-size:10px 18px}}.cc-theme--dark .bookmark-1{background-image:url(" + Yt + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-1{background-image:url(" + qt + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-1{background-image:url(" + Qt + ");background-size:10px 18px}}.cc-theme--dark .bookmark-2{background-image:url(" + Jt + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-2{background-image:url(" + Xt + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-2{background-image:url(" + Zt + ");background-size:10px 18px}}.cc-theme--dark .bookmark-3{background-image:url(" + $t + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-3{background-image:url(" + tr + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-3{background-image:url(" + rr + ");background-size:10px 18px}}.cc-theme--dark .bookmark-4{background-image:url(" + er + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-4{background-image:url(" + or + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-4{background-image:url(" + ir + ");background-size:10px 18px}}.cc-theme--dark .bookmark-5{background-image:url(" + ar + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-5{background-image:url(" + nr + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-5{background-image:url(" + lr + ");background-size:10px 18px}}.cc-theme--dark .bookmark-6{background-image:url(" + cr + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-6{background-image:url(" + dr + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-6{background-image:url(" + mr + ");background-size:10px 18px}}.cc-theme--dark .bookmark-7{background-image:url(" + pr + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-7{background-image:url(" + ur + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-7{background-image:url(" + gr + ");background-size:10px 18px}}.cc-theme--dark .bookmark-8{background-image:url(" + sr + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-8{background-image:url(" + br + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-8{background-image:url(" + wr + ");background-size:10px 18px}}.cc-theme--dark .bookmark-9{background-image:url(" + fr + ")}@media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx){.cc-theme--dark .bookmark-9{background-image:url(" + hr + ");background-size:10px 18px}}@media (min--moz-device-pixel-ratio: 2.5), (-o-min-device-pixel-ratio: 5 / 2), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 2.5dppx){.cc-theme--dark .bookmark-9{background-image:url(" + jr + ");background-size:10px 18px}}.cc-theme--light .notemarker-0{fill:silver;stroke:silver}.cc-theme--light .notemarker-1{fill:#fff37a;stroke:#fff37a}.cc-theme--light .notemarker-2{fill:#b7e492;stroke:#b7e492}.cc-theme--light .notemarker-3{fill:#98d8ff;stroke:#98d8ff}.cc-theme--light .notemarker-4{fill:#f698bc;stroke:#f698bc}.cc-theme--light .notemarker-5{fill:#ffba8a;stroke:#ffba8a}.cc-theme--light .notemarker-6{fill:#c1a7e2;stroke:#c1a7e2}.cc-theme--dark .notemarker-0{fill:#626262;stroke:#626262}.cc-theme--dark .notemarker-1{fill:#e9c600;stroke:#e9c600}.cc-theme--dark .notemarker-2{fill:#66a333;stroke:#66a333}.cc-theme--dark .notemarker-3{fill:#4aa1dd;stroke:#4aa1dd}.cc-theme--dark .notemarker-4{fill:#c64677;stroke:#c64677}.cc-theme--dark .notemarker-5{fill:#e96d00;stroke:#e96d00}.cc-theme--dark .notemarker-6{fill:#7b57a7;stroke:#7b57a7}.cl,.vl,.m,.fn,.en{position:relative;display:inline}span.tt{box-sizing:content-box;display:inline-block;position:absolute;opacity:0;height:1.5em;border-radius:2px;z-index:10;cursor:pointer}span.tt.selected{background-color:#9d9d9d;opacity:0.3}span.tt.m{border-radius:1.5em;width:3.5ex;height:3.5ex;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);-webkit-transform:translateY(-50%) translateX(-50%)}span.tt.fn{border-radius:1.5em;z-index:20;width:3.1ex;height:3.1ex;top:50%;left:50%;transform:translateY(-50%) translateY(-0.65ex) translateX(-50%);-webkit-transform:translateY(-50%) translateY(-0.65ex) translateX(-50%)}span.tt.en{border-radius:1.5em;z-index:20;width:3.1ex;height:3.1ex;top:50%;left:50%;transform:translateY(-50%) translateY(-0.65ex) translateX(-50%);-webkit-transform:translateY(-50%) translateY(-0.65ex) translateX(-50%)}span.tt.b{width:100%;padding:0 0 4px 0;top:-2px;height:1.25em}.dir-ltr span.tt.b{left:0}.dir-rtl span.tt.b{right:0}span.tt.xt{width:100%;padding:0 0 4px 0;top:-2px;height:1.25em}.dir-ltr span.tt.xt{left:0}.dir-rtl span.tt.xt{right:0}span.tt.vl{width:100%;padding:0 0.1em 0.1em 0;top:-0.25em;height:1.5em;min-width:1.5em;border-radius:0.75em}.dir-ltr span.tt.vl{left:-.25em}.dir-rtl span.tt.vl{right:-.25em}span.tt.cl{width:100%;padding:0;top:0;height:0.6em;min-width:0;border-radius:0.15em}.dir-ltr span.tt.cl{left:-.05em}.dir-rtl span.tt.cl{right:-.05em}a.selected{background-color:rgba(157,157,157,0.3)}.fn.pr+.m.pr{display:inline-block}.dir-ltr .fn.pr+.m.pr{margin-left:1em}.dir-rtl .fn.pr+.m.pr{margin-right:1em}.fn.pr+.m.pr::before{content:' '}#summary .jwac{background-color:transparent}.article{margin-top:1em;margin-bottom:2em;margin-left:48px;margin-right:48px}.dir-ltr .bookmark{margin-left:-22px}.dir-rtl .bookmark{margin-right:-22px}aside .bookmark,.stdPullQuote .bookmark,.sl .bookmark{position:absolute}.dir-ltr aside .bookmark,.dir-ltr .stdPullQuote .bookmark,.dir-ltr .sl .bookmark{left:47px}.dir-rtl aside .bookmark,.dir-rtl .stdPullQuote .bookmark,.dir-rtl .sl .bookmark{right:47px}figure .bookmark{zoom:0.7;position:relative;margin-top:1ex}.dir-ltr figure .bookmark{margin-left:-13px}.dir-rtl figure .bookmark{margin-right:-13px}.notemarker{position:absolute;display:inline-block;height:19px;width:19px;margin-top:0.5ex}.dir-ltr .notemarker{margin-left:-22px}.dir-rtl .notemarker{margin-right:-22px}.dir-ltr .notemarker{left:40px}.dir-rtl .notemarker{right:40px}figure .notemarker{zoom:0.7;margin-top:1ex}.dir-ltr figure .notemarker{margin-left:-13px}.dir-rtl figure .notemarker{margin-right:-13px}.dir-ltr figure .notemarker{left:20px}.dir-rtl figure .notemarker{right:20px}.notemarker svg{width:100%;height:100%;display:block}.toc-additional-reading-group{margin-top:2.3em}@media handheld, screen and (max-width: 498px){.article{margin-left:20px;margin-right:20px}.dir-ltr .bookmark{margin-left:-15px}.dir-rtl .bookmark{margin-right:-15px}aside .bookmark,.stdPullQuote .bookmark,.sl .bookmark{position:absolute}.dir-ltr aside .bookmark,.dir-ltr .stdPullQuote .bookmark,.dir-ltr .sl .bookmark{left:20px}.dir-rtl aside .bookmark,.dir-rtl .stdPullQuote .bookmark,.dir-rtl .sl .bookmark{right:20px}figure .bookmark{zoom:0.7;position:relative;margin-top:1ex}.dir-ltr figure .bookmark{margin-left:-13px}.dir-rtl figure .bookmark{margin-right:-13px}.notemarker{position:absolute;display:inline-block;height:13px;width:13px;margin-top:1ex}.dir-ltr .notemarker{margin-left:-20px}.dir-rtl .notemarker{margin-right:-20px}.dir-ltr .notemarker{left:24px}.dir-rtl .notemarker{right:24px}figure .notemarker{zoom:0.7;margin-top:1ex}.dir-ltr figure .notemarker{margin-left:-13px}.dir-rtl figure .notemarker{margin-right:-13px}.dir-ltr figure .notemarker{left:20px}.dir-rtl figure .notemarker{right:20px}.notemarker svg{width:100%;height:100%;display:block}}\n", ""]), r.default = gt
}, function(t, r) {
	t.exports = 'export default __webpack_public_path__ + "images/overlay_video.svg";'
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(2),
		n = e(428),
		l = e(455),
		c = e(456),
		d = e(25),
		m = (e(386), e(28)),
		p = e(50),
		u = function(t) {
			function r(r) {
				var e = t.call(this, r) || this;
				return e
			}
			return i(r, t), r.prototype.componentDidMount = function() {
				p.setViewportAttributes(document), "primary" === this.props.mode ? d.send({
					type: m.NATIVE_ACTION_REQUEST_PRIMARY_CONTENT
				}) : "study" === this.props.mode && d.send({
					type: m.NATIVE_ACTION_REQUEST_STUDY_CONTENT
				})
			}, r.prototype.render = function() {
				var t;
				return "primary" === this.props.mode ? t = a.createElement(n, null) : "study" === this.props.mode && (t = a.createElement(c, null)), t ? a.createElement("div", {
					className: "__page-wrap"
				}, a.createElement(l, null), t) : a.createElement("div", {
					className: "__page-wrap"
				}, "Invalid mode.")
			}, r
		}(a.PureComponent);
	t.exports = u
}, function(t, r, e) {
	"use strict";
	var o, i, a = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		n = e(2),
		l = e(26),
		c = (e(360), e(363)),
		d = e(76),
		m = e(30),
		p = e(429),
		u = e(70),
		g = e(333),
		s = e(35),
		b = e(25),
		w = e(430),
		f = e(431),
		h = e(8),
		j = (e(432), e(433)),
		x = e(434),
		y = e(335),
		S = e(385),
		v = e(99),
		O = e(39),
		k = e(435),
		E = e(50),
		C = e(334),
		A = e(350),
		T = e(351),
		I = e(436),
		N = e(28),
		_ = e(384),
		R = e(437),
		M = e(442),
		L = e(446),
		D = e(322),
		P = (e(449), e(450)),
		z = e(366),
		H = e(451),
		G = e(452),
		B = e(453),
		U = e(336);
	e(454);
	e(394),
		function(t) {
			t[t.Content = 0] = "Content", t[t.ProcessedContent = 1] = "ProcessedContent", t[t.TouchTargetSelection = 2] = "TouchTargetSelection", t[t.SearchTermHighlights = 3] = "SearchTermHighlights", t[t.VerseOrParagraphSelection = 4] = "VerseOrParagraphSelection", t[t.VerseOrParagraphFocus = 5] = "VerseOrParagraphFocus", t[t.MediaMarker = 6] = "MediaMarker", t[t.FontSize = 7] = "FontSize", t[t.TopPadding = 8] = "TopPadding", t[t.ScrollTarget = 9] = "ScrollTarget", t[t.Bookmarks = 10] = "Bookmarks", t[t.NoteMarkers = 11] = "NoteMarkers", t[t.InputFields = 12] = "InputFields", t[t.KeyboardHeight = 13] = "KeyboardHeight"
		}(i || (i = {}));
	var W = function(t) {
		function r(r) {
			var e = t.call(this, r) || this;
			return e._touchMoveThreshold = 3, e._sendMessageWhenContentHasSettled = function(t, r) {
				var o = !1;
				if (e._lastDocumentHeights || (e._lastDocumentHeights = []), e._lastDocumentHeights.push(document.documentElement.scrollHeight), e._lastDocumentHeights.length >= 3) {
					var i = e._lastDocumentHeights.length,
						a = e._lastDocumentHeights[i - 1],
						n = e._lastDocumentHeights[i - 2],
						l = e._lastDocumentHeights[i - 3];
					a === n && n === l && (o = !0, e._lastDocumentHeights = null)
				}
				o ? b.send(r) : window.setTimeout((function() {
					e._sendMessageWhenContentHasSettled(t, r)
				}), 50)
			}, e._handleContextMenu = function(t) {
				var r = window.getSelection();
				r && !r.isCollapsed && t.preventDefault()
			}, e._isBibleChapter = function() {
				return e.state.content && void 0 !== e.state.content.bibleBook && e.state.content.bibleBook > 0 && void 0 !== e.state.content.bibleChapter && e.state.content.bibleChapter > 0
			}, e._isRTL = function() {
				var t, r;
				return "rtl" === (null === (r = null === (t = e.state.content) || void 0 === t ? void 0 : t.language) || void 0 === r ? void 0 : r.dir)
			}, e._schemaVersion = function() {
				return (e.state.content ? e.state.content.pubSchemaVersion : 6) || 6
			}, e._isLargeDocument = function() {
				return e.state.content && e.state.content.isLargeDocument
			}, e._updateUserEventHandlers = function() {
				var t = e._isBibleChapter(),
					r = e,
					o = l.findDOMNode(e);
				if (e._tapGestureHandler = new P.TapGestureHandler(e._touchEventCallbackHandler, o, e._isBibleChapter()), e.state.shouldUseNewGestureSystem) {
					e._PointerEventsHandler && e._PointerEventsHandler.detachEventListeners(), e._touchEventsHandler && e._touchEventsHandler.detachEventListeners(), e._textInteractionEventsHandler = new H.TextInteractionEventsHandler(e._touchEventCallbackHandler, e._tapGestureHandler), e._textSelectionEventsHandler && e._textSelectionEventsHandler.detachEventListeners(), e._textSelectionEventsHandler.attachEventListeners(), o.style.webkitUserSelect = "auto", e._gestureRegion && e._gestureRegion.detachEventListeners(), e._gestureRegion = new M.GestureRegion(o), e._gestureRegion.attachEventListeners();
					var i = new L.TapGestureRecognizer((function(t) {
						if (t.state === D.GestureRecognizerState.Recognized) {
							var r = t.lastPointerEvent.target;
							if (r) {
								if (["INPUT", "TEXTAREA"].includes(r.tagName.toUpperCase())) return;
								if (r.getAttribute(y.USER_MARK_ID_ATTR)) {
									t.lastPointerEvent.preventDefault(), t.lastPointerEvent.stopPropagation()
								}
								var o = 0;
								U.GestureRecognizer.hasPointerEventSupport && t.lastPointerEvent instanceof PointerEvent && (o = t.lastPointerEvent.button), e._textInteractionEventsHandler.handleTap(r, {
									clientX: t.clientX,
									clientY: t.clientY,
									pageX: t.pageX,
									pageY: t.pageY,
									pointerType: t.pointerType,
									button: o
								})
							}
						}
					}));
					e._gestureRegion.addGestureRecognizer(i), [].map.call(o.querySelectorAll("a"), (function(t) {
						t.addEventListener("click", e._linkTapHandler.linkTapHandler)
					}));
					var a = new G.PenPanGestureRecognizer((function(t) {
						var r = t.lastPointerEvent;
						if (0 === window.getSelection().toString().length) {
							var o = U.GestureRecognizer.gesturePointFromEvent(r);
							t.state === D.GestureRecognizerState.Began ? e._textInteractionEventsHandler.handleAnchor(r.target, o.clientX, o.clientY, o.pageX, o.pageY, H.TextInteractionPointerType.pen) : t.state === D.GestureRecognizerState.Changed ? e._textInteractionEventsHandler.handleMove(o.clientX, o.clientY, o.pageX, o.pageY) : t.state === D.GestureRecognizerState.Recognized ? e._textInteractionEventsHandler.handleEnd() : t.state === D.GestureRecognizerState.Cancelled && e._textInteractionEventsHandler.handleCancel()
						}
					}));
					e._gestureRegion.addGestureRecognizer(a)
				} else e._PointerEventsHandler && e._PointerEventsHandler.detachEventListeners(), e._PointerEventsHandler = new j(e._touchEventCallbackHandler), e._PointerEventsHandler.attachEventListeners(), [].map.call(o.querySelectorAll("span.tt.fn"), (function(t) {
					t.addEventListener("click", r._footnoteTapHandler)
				})), [].map.call(o.querySelectorAll("span.tt.en"), (function(t) {
					t.addEventListener("click", r._endnoteTapHandler)
				})), [].map.call(o.querySelectorAll("span.tt.m"), (function(t) {
					t.addEventListener("click", r._marginalTapHandler)
				})), [].map.call(o.querySelectorAll("a"), (function(t) {
					t.addEventListener("click", e._linkTapHandler.linkTapHandler)
				})), t && [].map.call(o.querySelectorAll("span.tt.vl,span.tt.cl"), (function(t) {
					t.addEventListener("pointerdown", r._verseLabelTapHandler)
				})), [].map.call(o.querySelectorAll("img:not(.gen-flipbook)"), (function(t) {
					t.addEventListener("click", r._imageTapHandler)
				})), [].map.call(o.querySelectorAll("[data-bg-image]"), (function(t) {
					t.addEventListener("click", r._contentBackgroundImageTapHandler)
				}));
				[].map.call(o.querySelectorAll(".gen-field input, .gen-field textarea"), (function(t) {
					"textarea" === t.tagName.toLowerCase() || "text" === t.type ? t.addEventListener("input", r._scheduleInputFieldPersistence) : t.addEventListener("change", r._inputFieldChangeHandler)
				})), e.state.fontSize && e.updateInputFieldsAppearance(e.state.fontSize), c(document.querySelectorAll(".gen-field textarea"))
			}, e._updateSearchTermHighlights = function() {
				for (var t = l.findDOMNode(e), r = t.querySelectorAll(".highlight_term"), o = 0; o < r.length; o++) {
					(f = r[o]).classList.remove("highlight_term")
				}
				if (e.state.searchTermHighlightTargets)
					for (var i = 0, a = e.state.searchTermHighlightTargets; i < a.length; i++) {
						var n = a[i],
							c = null;
						if (void 0 !== n.paragraph) c = '[data-pid="' + n.paragraph + '"]';
						else if (void 0 !== n.verse) {
							var d = e.state.content;
							d && d.bibleBook && d.bibleChapter && (c = "span[id^=v" + d.bibleBook + "-" + d.bibleChapter + "-" + n.verse + "]")
						}
						if (c && n.offsets && n.offsets.length > 0)
							for (var m = t.querySelectorAll(c), p = 0, u = n.offsets[0], g = 0, s = !1, b = 0; b < m.length; b++) {
								for (var w = document.createTreeWalker(m[b], NodeFilter.SHOW_TEXT, null), f = void 0; f = w.nextNode();) {
									var h = p >= u.start && p <= u.end;
									if (p += f.textContent.length, h && f.parentNode && "SPAN" === f.parentNode.tagName && f.parentNode.getAttribute("data-jwd-id") && f.parentNode.classList.add("highlight_term"), p >= u.end) {
										if (!(++g < n.offsets.length)) {
											s = !0;
											break
										}
										u = n.offsets[g]
									}
								}
								if (s) break
							}
					}
			}, e._updateBookmarks = function() {
				e._updateDocumentMarkers("bookmark", e.state.bookmarks, 9)
			}, e._updateNoteMarkers = function() {
				e._updateDocumentMarkers("notemarker", e.state.noteMarkers, 6)
			}, e._updateDocumentMarkers = function(t, r, o) {
				var i = "data-" + t + "-container-id",
					a = document.querySelectorAll("." + t),
					n = [];
				if (a && a.length > 0 && (n = Array.prototype.slice.call(a)), r && r.length > 0) {
					var c = null,
						d = null;
					e.state.content && (c = e.state.content.bibleBook, d = e.state.content.bibleChapter);
					for (var m = 0, p = r; m < p.length; m++) {
						var g = p[m],
							s = null,
							b = !1,
							w = !1;
						if ("number" == typeof g.userMarkID && g.userMarkID > 0) {
							var f = u.markWithID(g.userMarkID);
							if (f) {
								var h = O.getTokenInfos(f, !1);
								h && h.length > 0 && (s = h[0].elementId, w = !0)
							}
						} else if ("number" == typeof g.verseID && g.verseID > -1 && c && d) s = "v" + c + "-" + d + "-" + g.verseID + "-1", b = !0;
						else if ("number" == typeof g.paragraphID && g.paragraphID > -1) s = "p" + g.paragraphID;
						else if (g.isEntireDocument) {
							var j = l.findDOMNode(e).querySelector("[data-pid]");
							j && (s = j.id)
						}
						if (s) {
							for (var x = null, y = 0, S = n; y < S.length; y++) {
								if ((N = S[y]).getAttribute(i) === s) {
									x = N;
									break
								}
							}
							if (x) {
								for (var v = 0; v <= o; v++) v !== g.style && x.classList.remove(t + "-" + v);
								e._configureMarkerElementWithMarker(t, x, g);
								var k = n.indexOf(x);
								n.splice(k, 1)
							} else {
								var E = document.getElementById(s);
								if (E) {
									var C = E.firstChild,
										A = document.createElement("span");
									A.classList.add(t), e._configureMarkerElementWithMarker(t, A, g), A.setAttribute(i, s), w ? E.appendChild(A) : E.insertBefore(A, b && C ? C.nextSibling : C)
								}
							}
						}
					}
				}
				if (n && n.length > 0)
					for (var T = 0, I = n; T < I.length; T++) {
						var N;
						(N = I[T]).parentElement.removeChild(N)
					}
			}, e._configureMarkerElementWithMarker = function(t, r, o) {
				if (r && o) {
					var i = "data-" + t + "-style",
						a = "data-" + t + "-id",
						n = e;
					if (r.setAttribute(i, "" + o.style), r.classList.add(t + "-" + o.style), o.type === x.TYPE_NOTE) {
						r.setAttribute(a, "" + o.id), r.setAttribute(a, "" + o.id), r.innerHTML = '<svg viewBox="0 0 21 21"><use class="notemarker-use" xlink:href="#notemarker-single"/></svg>', o.id && (e.state.shouldUseNewGestureSystem || r.addEventListener("click", n._noteMarkerTapHandler))
					}
				}
			}, e._updateMetaTags = function() {
				var t, r = document.getElementsByTagName("head")[0],
					e = document.getElementsByName("viewport");
				e && e.length > 0 && (t = e[0]), t ? r.removeChild(t) : ((t = document.createElement("meta")).name = "viewport", r.appendChild(t)), t.content = "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
			}, e._touchEventCallbackHandler = function(t) {
				if (t)
					if (t.type === C.TouchEventCallbackType.DrawUserMark) y.drawUserMark(t.userMark);
					else if (t.type === C.TouchEventCallbackType.DrawSelection) {
					var r = e.state.content,
						o = !1;
					r && r.language && r.language.dir && "rtl" === r.language.dir && (o = !0), v.drawSelection(t.selection, o, t.hideSelectionHandles)
				} else t.type === C.TouchEventCallbackType.ClearTextSelection ? v.clearSelection(t.selection) : t.type === C.TouchEventCallbackType.ClearVerseOrParagraphSelection ? (e.state.selectedVerses && e.state.selectedVerses.length > 0 && s.clearVerseSelection(), e.state.selectedParagraphs && e.state.selectedParagraphs.length > 0 && s.clearParagraphSelection()) : t.type === C.TouchEventCallbackType.FocusVerseOrParagraph ? "number" == typeof t.verseID ? e.setState({
					focusedVerse: t.verseID
				}) : "number" == typeof t.paragraphID && e.setState({
					focusedParagraph: t.paragraphID
				}) : t.type === C.TouchEventCallbackType.StopMediaMarkerFocusing && e._stopMediaMarkerFocusing()
			}, e._stopMediaMarkerFocusing = function() {
				e._mediaMarkerFocusTimer && (clearTimeout(e._mediaMarkerFocusTimer), e._mediaMarkerFocusTimer = void 0), window.setTimeout((function() {
					e.setState({
						shouldFocusMediaMarker: !1
					}), s.setCurrentMediaMarker(null)
				}), 0)
			}, e._resetMediaMarkerFocusTimer = function() {
				e._mediaMarkerFocusTimer && clearTimeout(e._mediaMarkerFocusTimer), e._mediaMarkerFocusTimer = window.setTimeout((function() {
					if (!m.getContextMenuVisible()) {
						var t = {
							shouldFocusMediaMarker: !0
						};
						e.state.currentMediaMarker && !e.state.currentMediaMarker.forceFocus && (t.currentMediaMarker = void 0), e.setState(t)
					}
				}), 3e3)
			}, e._updateTouchTargetSelection = function() {
				var t;
				if ("number" == typeof e.state.selectedFootnoteID && e.state.selectedFootnoteID > -1 ? t = ".tt[data-rel-fnid='" + e.state.selectedFootnoteID + "']" : "number" == typeof e.state.selectedEndnoteID && e.state.selectedEndnoteID > -1 ? t = ".tt[data-rel-enid='" + e.state.selectedEndnoteID + "']" : "number" == typeof e.state.selectedMarginalID && e.state.selectedMarginalID > -1 ? t = ".tt[data-rel-mid='" + e.state.selectedMarginalID + "']" : "number" == typeof e.state.selectedVerseLabel && e.state.selectedVerseLabel > -1 ? t = null : e.state.selectedBibleCitationID ? t = "a[data-bid='" + e.state.selectedBibleCitationID + "']" : e.state.selectedExtractionID && (t = "a[data-xtid='" + e.state.selectedExtractionID + "']"), [].map.call(l.findDOMNode(e).querySelectorAll(".selected"), (function(t) {
						t.classList.remove("selected")
					})), t) {
					var r = l.findDOMNode(e).querySelector(t);
					if (r) r.classList.add("selected")
				}
			}, e._updateSelectedVersesOrParagraphs = function() {
				var t = e._isBibleChapter(),
					r = !1,
					o = [];
				if (t && e.state.content && "number" == typeof e.state.focusedVerse ? o.push(e._getVerseSelector(e.state.content.bibleBook, e.state.content.bibleChapter, e.state.focusedVerse)) : t && e.state.content && e.state.currentMediaMarker && (e.state.currentMediaMarker.forceFocus || e.state.shouldFocusMediaMarker) ? e.state.currentMediaMarker.blockPrefix === h.BlockType.Verse ? o.push(e._getVerseSelector(e.state.content.bibleBook, e.state.content.bibleChapter, e.state.currentMediaMarker.blockId)) : o.push('[data-pid="' + e.state.currentMediaMarker.blockId + '"]') : t && e.state.content && e.state.selectedVerses ? (r = !0, e.state.selectedVerses.forEach((function(t) {
						o.push(e._getVerseSelector(e.state.content.bibleBook, e.state.content.bibleChapter, t))
					}))) : "number" == typeof e.state.focusedParagraph ? o.push('[data-pid="' + e.state.focusedParagraph + '"]') : e.state.currentMediaMarker && e.state.currentMediaMarker.blockPrefix === h.BlockType.Paragraph && (e.state.currentMediaMarker.forceFocus || e.state.shouldFocusMediaMarker) ? o.push('[data-pid="' + e.state.currentMediaMarker.blockId + '"]') : e.state.selectedParagraphs && (r = !0, e.state.selectedParagraphs.forEach((function(t) {
						o.push('[data-pid="' + t + '"]')
					}))), o.length > 0) {
					if (e._removeAllHighlights(), o.forEach((function(t) {
							[].map.call(l.findDOMNode(e).querySelectorAll(t), (function(t) {
								t.classList.add("highlight");
								var r = t.getAttribute("data-rel-pid");
								if (r) {
									r = r.replace(/[^\d]+/g, "");
									var o = l.findDOMNode(e).querySelector("#p" + r);
									o && o.classList.add("highlight")
								}
							}))
						})), e._shouldUseProgressiveFocusDimming()) e._refreshIntersectionObserver(e._dimmableElementsSelector());
					else {
						var i = l.findDOMNode(e).querySelectorAll(e._dimmableElementsSelector());
						[].forEach.call(i, (function(t) {
							t.classList.contains("highlight") || t.classList.add("dimmed")
						}))
					}
					if (r && !e.state.snippet) {
						var a = z.TextHelper.getSnippetForSelector(l.findDOMNode(e), ".highlight");
						if (a && a.length > 0)
							if (t) {
								var n = e.state.selectedVerses;
								window.setTimeout((function() {
									s.selectVerses(n[0], n[n.length - 1], a)
								}), 0)
							} else {
								var c = e.state.selectedParagraphs;
								window.setTimeout((function() {
									s.selectParagraphs(c, a)
								}), 0)
							}
					}
				} else e._removeAllHighlights()
			}, e._dimmableElementsSelector = function() {
				return e._isBibleChapter() ? "h1, .ss, .v" : "h1, h2, p"
			}, e._refreshIntersectionObserver = function(t) {
				if (e._shouldUseProgressiveFocusDimming()) {
					var r = l.findDOMNode(e).querySelectorAll(t);
					[].forEach.call(r, (function(t) {
						e._focusTextIntersectionObserver.unobserve(t), e._focusTextIntersectionObserver.observe(t)
					}))
				}
			}, e._updateAllUserMarks = function() {
				var t = u.getAll();
				if (y.clearAllUserMarks(), y.clearTextLineRectMap(), t)
					for (var r = 0, e = t; r < e.length; r++) {
						var o = e[r];
						y.drawUserMark(o)
					}
			}, e._updateInputFields = function() {
				var t = d.getInputFields();
				if (t && t.location && t.fields) {
					var r = _.getLocationFromPrimaryContent();
					r.doc && r.doc === t.location.doc && t.fields.forEach((function(t) {
						var r = document.getElementById(t.textTag),
							e = String(t.value);
						if (r) {
							var o = r.tagName.toLowerCase();
							if ("input" === o) {
								var i = r;
								"checkbox" === i.type || "radio" === i.type ? i.checked = "1" === e : "text" !== i.type && "date" !== i.type || (i.value = e)
							} else if ("textarea" === o) {
								var a = r;
								a.value = e, c.update(a)
							}
						}
					}))
				}
			}, e._removeAllHighlights = function() {
				var t = document.querySelectorAll(".dimmed");
				[].map.call(l.findDOMNode(e).querySelectorAll(".highlight"), (function(t) {
					t.classList.remove("highlight")
				})), e._shouldUseProgressiveFocusDimming() ? e._refreshIntersectionObserver(".dimmed") : [].forEach.call(t, (function(t) {
					t.classList.remove("dimmed")
				}))
			}, e._setTouchTargetSelection = function(t) {
				var r = {
					selectedMarginalID: void 0,
					selectedFootnoteID: void 0,
					selectedEndnoteID: void 0,
					selectedVerseLabel: void 0,
					selectedBibleCitationID: void 0,
					selectedExtractionID: void 0,
					scrollTargetDescriptor: void 0,
					selectedVerses: void 0
				};
				for (var o in t) t.hasOwnProperty(o) && (r[o] = t[o]);
				if (e.setState(r), null != d.getCurrentMediaMarker()) {
					var i = null;
					t.selectedBibleCitationID ? i = document.querySelector("a[data-bid='" + t.selectedBibleCitationID + "']") : t.selectedExtractionID ? i = document.querySelector("a[data-xtid='" + t.selectedExtractionID + "']") : t.selectedFootnoteID ? i = document.querySelector(".fn[data-fnid='" + t.selectedFootnoteID + "']") : t.selectedEndnoteID ? i = document.querySelector(".en[data-enid='" + t.selectedEndnoteID + "']") : t.selectedMarginalID && (i = document.querySelector(".m[data-mid='" + t.selectedMarginalID + "']")), null === i || null === i.parentElement || i.parentElement.classList.contains("highlight") || e._stopMediaMarkerFocusing()
				}
			}, e._footnoteTapHandler = function(t) {
				t.preventDefault(), t.stopPropagation();
				var r = t.target;
				e._tapGestureHandler.handleFootnoteTap(r)
			}, e._endnoteTapHandler = function(t) {
				t.preventDefault(), t.stopPropagation();
				var r = t.target;
				e._tapGestureHandler.handleEndnoteTap(r)
			}, e._contentBackgroundImageTapHandler = function(t) {
				t.preventDefault(), t.stopPropagation();
				var r = t.target;
				if (r) {
					if ("SPAN" === r.tagName || "IMG" === r.tagName || "A" === r.tagName) return;
					var o = e._PointerEventsHandler.getStartPoint();
					if (Math.abs(o.x - t.pageX) > e._touchMoveThreshold || Math.abs(o.y - t.pageY) > e._touchMoveThreshold) return;
					e._tapGestureHandler.handleContentBackgroundImageTap(r)
				}
			}, e._imageTapHandler = function(t) {
				t.preventDefault(), t.stopPropagation();
				var r = t.target;
				e._tapGestureHandler.handleImageTap(r)
			}, e._marginalTapHandler = function(t) {
				t.preventDefault(), t.stopPropagation();
				var r = t.target;
				e._tapGestureHandler.handleMarginalTap(r)
			}, e._scheduleInputFieldPersistence = function(t) {
				e._inputFieldSaveTimer && clearTimeout(e._inputFieldSaveTimer), e._inputFieldSaveTimer = setTimeout((function() {
					var r = t.target;
					r && e._persistInputField(r), e._inputFieldSaveTimer = null
				}), 500)
			}, e._inputFieldChangeHandler = function(t) {
				t.preventDefault(), t.stopPropagation();
				var r = t.target;
				r && e._persistInputField(r)
			}, e._noteMarkerTapHandler = function(t) {
				t.preventDefault(), t.stopPropagation();
				var r = E.ancestorElementWithClass(t.currentTarget, "notemarker");
				e._tapGestureHandler.handleNoteMarkerTap(r)
			}, e._verseLabelTapHandler = function(t) {
				t.preventDefault(), t.stopPropagation();
				var r = t.target;
				e._tapGestureHandler.handleVerseLabelTap(r)
			}, e._isAllowingCSSHasHighlightClass = function() {
				return !e.state.content || -1 === [1001061175, 1200004775, 1200004776].indexOf(e.state.content.docID)
			}, e._shouldUseProgressiveFocusDimming = function() {
				return !1
			}, e._onWindowWillResize = function() {
				var t = document.elementFromPoint(window.innerWidth / 2, 50);
				if (e._scrollTargetElement = null, t) {
					for (var r = [], o = 0; o < t.childNodes.length; o++) {
						var i = t.childNodes[o];
						r.push(i)
					}
					r.push(t);
					for (o = 0; o < r.length; o++) {
						var a = r[o];
						if (a.nodeType === Node.ELEMENT_NODE) {
							var n = a.getBoundingClientRect();
							if (n.top >= 0 && n.left >= 0 && n.bottom <= window.innerHeight && n.right <= window.innerWidth) {
								e._scrollTargetElement = a, e._scrollTargetElementTopOffset = n.top;
								break
							}
						}
					}
				}
			}, e._onWindowDidResize = function() {
				e._scrollTargetElement && (e._windowResizeTimer && clearTimeout(e._windowResizeTimer), e._windowResizeTimer = window.setTimeout((function() {
					if (e._windowResizeTimer = null, e._scrollTargetElement) {
						var t = e._scrollTargetElement.getBoundingClientRect().top + window.pageYOffset - (document.documentElement.clientTop || 0) - e._scrollTargetElementTopOffset;
						window.scroll(0, t), e._scrollTargetElement = null
					}
				}), 1)), y.clearTextLineRectMap(), e._touchEventsHandler
			}, e._onClearTextSelection = function() {
				e._touchEventsHandler && e._touchEventsHandler.resetSelection(), e.state.shouldUseNewGestureSystem && e._textInteractionEventsHandler && e._textInteractionEventsHandler.handleCancel()
			}, e._onDisplaySettingsChange = function() {
				e.state.fontSize !== m.getFontSize() ? (e._onWindowWillResize(), e.setState({
					fontSize: m.getFontSize()
				}), e.updateInputFieldsAppearance(e.state.fontSize)) : "number" != typeof e.state.focusedVerse && "number" != typeof e.state.focusedParagraph || m.getContextMenuVisible() ? e.state.topPadding !== m.getTopPadding() && e.setState({
					topPadding: m.getTopPadding()
				}) : e.setState({
					focusedVerse: void 0,
					focusedParagraph: void 0
				}), e.state.keyboardHeight !== m.getKeyboardHeight() && e.setState({
					keyboardHeight: m.getKeyboardHeight()
				}), e.state.shouldUseNewGestureSystem !== m.shouldUseNewGestureSystem() && e.setState({
					shouldUseNewGestureSystem: m.shouldUseNewGestureSystem()
				}), e.state.os !== m.getOS() && e.setState({
					os: m.getOS()
				}), e.state.shouldFocusMediaMarker && m.getContextMenuVisible() ? e._stopMediaMarkerFocusing() : e.state.shouldFocusMediaMarker || m.getContextMenuVisible() || e._resetMediaMarkerFocusTimer(), e.state.appearance !== m.getAppearance() && e.setState({
					appearance: m.getAppearance()
				})
			}, e._onPrimaryContentChange = function() {
				var t = {},
					r = d.getContent();
				e.state.content !== r && (e.state.shouldUseNewGestureSystem && e._textInteractionEventsHandler && e._textInteractionEventsHandler.handleCancel(), t = {
					content: r,
					selectedMarginalID: void 0,
					selectedFootnoteID: void 0,
					selectedEndnoteID: void 0,
					selectedVerseLabel: void 0,
					selectedBibleCitationID: void 0,
					selectedExtractionID: void 0,
					scrollTargetDescriptor: void 0,
					searchTermHighlightTargets: void 0,
					bookmarks: void 0,
					noteMarkers: void 0,
					focusedVerse: void 0,
					focusedParagraph: void 0,
					inputFields: void 0,
					currentMediaMarker: void 0
				});
				r && (t.isContentProcessed = "string" == typeof r.processedContent, t.selectedVerses = d.getSelectedVerses(), t.selectedParagraphs = d.getSelectedParagraphs(), t.snippet = d.getSnippet(), t.scrollTargetDescriptor = d.getScrollTargetDescriptorOnce(), t.searchTermHighlightTargets = d.getSearchTermHighlightTargets(), t.bookmarks = d.getBookmarks(), t.noteMarkers = d.getNoteMarkers(), t.inputFields = d.getInputFields(), t.currentMediaMarker = d.getCurrentMediaMarker());
				var o = null == t ? void 0 : t.content;
				t.isSummaryContent = void 0 !== (null == o ? void 0 : o.docClass) && "study" === (null == o ? void 0 : o.context) && (null == o ? void 0 : o.docClass) === w.DOC_CLASS_BibleBookChapterHeadings, e.setState(t)
			}, e._onStudyPaneSelectionChange = function() {
				var t, r, o, i = void 0,
					a = void 0,
					n = g.getSelectedVerseLabelID();
				t = g.getSelectedFootnoteID(), r = g.getSelectedEndnoteID(), o = g.getSelectedMarginalID();
				var l = p.getExtractionID();
				p.getExtractionType() === h.ExtractionType.BibleCitation ? i = l : a = l, e._setTouchTargetSelection({
					selectedFootnoteID: t,
					selectedEndnoteID: r,
					selectedMarginalID: o,
					selectedBibleCitationID: i,
					selectedExtractionID: a,
					selectedVerseLabel: n
				})
			}, e._onExtractionChange = function() {
				var t = p.getExtractionID();
				p.getExtractionType() === h.ExtractionType.BibleCitation ? e._setTouchTargetSelection({
					selectedBibleCitationID: t
				}) : e._setTouchTargetSelection({
					selectedExtractionID: t
				})
			}, e._onUserMarkChange = function(t, r, o) {
				e.state.shouldUseNewGestureSystem && e._textInteractionEventsHandler && e._textInteractionEventsHandler.state.matches("selecting") && e._textInteractionEventsHandler.handleCancel(), e._touchEventsHandler && e._touchEventsHandler.resetSelection(), r && !t ? (y.drawUserMark(r), r.isBlank() && y.clearCachedTextLineRectsForMark(r), o && b.send({
					type: N.NATIVE_ACTION_PERSIST_USER_MARK,
					userMark: y.serializeSingleLocatedUserMark(r, !0)
				})) : (e._updateAllUserMarks(), t && r && b.send({
					type: N.NATIVE_ACTION_SHOW_EDIT_USER_MARK_MENU,
					userMark: y.serializeSingleLocatedUserMark(r, !0)
				}))
			}, e.state = {
				fontSize: m.getFontSize(),
				topPadding: m.getTopPadding(),
				shouldFocusMediaMarker: !0,
				shouldUseNewGestureSystem: m.shouldUseNewGestureSystem()
			}, e._linkTapHandler = new A, e._flipbookHelper = new R.FlipbookHelper, e._textSelectionEventsHandler = new B.TextSelectionEventsHandler, e
		}
		return a(r, t), r.prototype.componentDidMount = function() {
			var t = this;
			k.applyColorStyles(), d.addChangeListener(this._onPrimaryContentChange), g.addChangeListener(this._onStudyPaneSelectionChange), m.addChangeListener(this._onDisplaySettingsChange), p.addChangeListener(this._onExtractionChange), u.addChangeListener(this._onUserMarkChange), window.addEventListener("resize", this._onWindowDidResize), window.addEventListener("willResize", this._onWindowWillResize), window.addEventListener("clearTextSelection", this._onClearTextSelection), window.addEventListener("contextmenu", this._handleContextMenu), S.registerTopElementChanged();
			document.querySelector("button");
			this._shouldUseProgressiveFocusDimming() && (this._focusTextIntersectionObserver = new IntersectionObserver((function(r) {
				var e = l.findDOMNode(t).querySelectorAll(".highlight").length > 0;
				r.forEach((function(t) {
					var r = t.target;
					t.isIntersecting && (e ? r.classList.contains("highlight") ? r.classList.remove("dimmed") : r.classList.add("dimmed") : r.classList.remove("dimmed"))
				}))
			}), {
				rootMargin: "300px 0px 300px 0px"
			}))
		}, r.prototype.componentDidUpdate = function(t, r) {
			var e = [];
			r.content !== this.state.content && e.push(i.Content), !r.isContentProcessed && this.state.isContentProcessed && e.push(i.ProcessedContent), r.selectedFootnoteID === this.state.selectedFootnoteID && r.selectedEndnoteID === this.state.selectedEndnoteID && r.selectedMarginalID === this.state.selectedMarginalID && r.selectedVerseLabel === this.state.selectedVerseLabel && r.selectedBibleCitationID === this.state.selectedBibleCitationID && r.selectedExtractionID === this.state.selectedExtractionID || e.push(i.TouchTargetSelection), r.selectedVerses === this.state.selectedVerses && r.selectedParagraphs === this.state.selectedParagraphs || e.push(i.VerseOrParagraphSelection), r.focusedVerse === this.state.focusedVerse && r.focusedParagraph === this.state.focusedParagraph || e.push(i.VerseOrParagraphFocus), r.currentMediaMarker === this.state.currentMediaMarker && r.shouldFocusMediaMarker === this.state.shouldFocusMediaMarker || e.push(i.MediaMarker), r.fontSize !== this.state.fontSize && e.push(i.FontSize), r.topPadding !== this.state.topPadding && e.push(i.TopPadding), r.scrollTargetDescriptor !== this.state.scrollTargetDescriptor && e.push(i.ScrollTarget), r.searchTermHighlightTargets !== this.state.searchTermHighlightTargets && e.push(i.SearchTermHighlights), r.bookmarks !== this.state.bookmarks && e.push(i.Bookmarks), r.noteMarkers !== this.state.noteMarkers && e.push(i.NoteMarkers), r.keyboardHeight !== this.state.keyboardHeight && e.push(i.KeyboardHeight), r.inputFields !== this.state.inputFields && e.push(i.InputFields), r.appearance !== this.state.appearance && (T.setAppearance(document.body, this.state.appearance), this._updateAllUserMarks(), this._updateNoteMarkers(), this._updateBookmarks());
			var o = -1 !== e.indexOf(i.Content);
			if ((o || -1 !== e.indexOf(i.ScrollTarget)) && this._isLargeDocument())
				for (var a = document.querySelectorAll(".section"), n = 0; n < a.length; n++) {
					var l = a[n];
					"section1" !== l.id && l.id !== this._expandedLargeDocumentSectionID && (l.style.display = "none")
				}
			if (o || -1 === e.indexOf(i.FontSize) || this._onWindowDidResize(), -1 !== e.indexOf(i.ScrollTarget)) {
				var c = this.state.scrollTargetDescriptor;
				if (c && c.selector)(d = document.querySelector(c.selector)) && (!c.force && this._isElementInView(d) || this._scrollElementIntoView(d, c.offset))
			}
			if (-1 !== e.indexOf(i.KeyboardHeight)) {
				var d, m = document.activeElement;
				!m || "TEXTAREA" !== m.tagName.toUpperCase() && "INPUT" !== m.tagName.toUpperCase() || this._isElementInView(m) || this._scrollElementIntoView(m, null)
			}(o || r.shouldUseNewGestureSystem !== this.state.shouldUseNewGestureSystem || r.os !== this.state.os || -1 !== e.indexOf(i.ProcessedContent)) && (this._updateUserEventHandlers(), this._flipbookHelper.setupIfNeeded(document.querySelectorAll("figure.gen-flipbook"), this._isRTL(), (function(t) {
				b.send({
					type: N.NATIVE_ACTION_SHOW_IMAGE,
					url: t
				})
			}))), (o || -1 !== e.indexOf(i.TouchTargetSelection)) && this._updateTouchTargetSelection(), (o || -1 !== e.indexOf(i.ProcessedContent) || -1 !== e.indexOf(i.VerseOrParagraphSelection) || -1 !== e.indexOf(i.VerseOrParagraphFocus) || -1 !== e.indexOf(i.MediaMarker)) && this._updateSelectedVersesOrParagraphs(), (o || -1 !== e.indexOf(i.ProcessedContent) || -1 !== e.indexOf(i.SearchTermHighlights)) && this._updateSearchTermHighlights(), (o || -1 !== e.indexOf(i.ProcessedContent) || -1 !== e.indexOf(i.Bookmarks)) && this._updateBookmarks(), (o || -1 !== e.indexOf(i.ProcessedContent) || -1 !== e.indexOf(i.NoteMarkers)) && this._updateNoteMarkers(), (o || -1 !== e.indexOf(i.ProcessedContent)) && this._updateAllUserMarks(), (o || -1 !== e.indexOf(i.ProcessedContent) || -1 !== e.indexOf(i.InputFields)) && this._updateInputFields(), o && (this._updateMetaTags(), document.body.style["touch-action"] = "pan-x pan-y", document.body.style["-ms-touch-action"] = "pan-x pan-y", document.body.style["-ms-content-zooming"] = "none", this._sendMessageWhenContentHasSettled("", {
				type: N.NATIVE_EVENT_PRIMARY_CONTENT_LOADED
			}))
		}, r.prototype.componentWillUnmount = function() {
			d.removeChangeListener(this._onPrimaryContentChange), g.removeChangeListener(this._onStudyPaneSelectionChange), m.removeChangeListener(this._onDisplaySettingsChange), p.removeChangeListener(this._onExtractionChange), u.removeChangeListener(this._onUserMarkChange), window.removeEventListener("resize", this._onWindowDidResize), window.removeEventListener("willResize", this._onWindowWillResize), window.removeEventListener("clearTextSelection", this._onClearTextSelection), S.unregisterTopElementChanged(), this.state.shouldUseNewGestureSystem ? (this._gestureRegion.detachEventListeners(), this._textSelectionEventsHandler.detachEventListeners()) : (window.removeEventListener("contextmenu", this._handleContextMenu), this._PointerEventsHandler.detachEventListeners())
		}, r.prototype.render = function() {
			var t = "",
				r = "",
				e = "ltr",
				o = "",
				i = !1,
				a = 100,
				l = 0,
				c = this._isBibleChapter(),
				d = 0;
			this.state.keyboardHeight && (d = this.state.keyboardHeight);
			var m = n.createElement("div", {
				id: "__bottom-spacer",
				style: {
					display: "block",
					height: d + "px"
				}
			});
			if (this.state.content) {
				t = this.state.content.processedContent || this.state.content.content;
				var p = "";
				if (this.state.content.pubSymbol && (p = " pub-" + this.state.content.pubSymbol), this.state.fontSize && (a = this.state.fontSize), this.state.topPadding && (l = this.state.topPadding), void 0 !== this.state.content.docClass && (i = this.state.content.docClass === w.DOC_CLASS_DailyText), this.state.content.language) {
					var u = this.state.content.language.mepsSymbol,
						g = this.state.content.language.script;
					e = this.state.content.language.dir, o = this.state.content.language.ietfSymbol, r = "jwac ml-" + u + " dir-" + e + " ms-" + g
				}
				if (c) {
					var s = "";
					this.state.content.bibleBook && (s = " bibleBook-" + this.state.content.bibleBook), r += " article bible scalableUI html5" + p + s
				} else {
					var b = "",
						h = "";
					this.state.content.docClass && (b = " docClass-" + this.state.content.docClass), this.state.content.docID && (h = " docId-" + this.state.content.docID), r += " article scalableUI html5" + p + b + h, this.state.content.docClass !== w.DOC_CLASS_BibleBookChapterHeadings && (r += " publication")
				}
			}
			c && t && (t = '<div class="bible">' + t + "</div>");
			var j = n.createElement("svg", {
					version: "1.1",
					style: {
						display: "none"
					},
					dangerouslySetInnerHTML: {
						__html: I
					}
				}),
				x = n.createElement("div", {
					id: "__top-spacer",
					style: {
						display: "block",
						height: l + "px"
					}
				}),
				y = n.createElement("article", {
					id: "article",
					className: r,
					role: "article",
					dir: e,
					lang: o,
					"data-uri-prefix": "",
					style: {
						fontSize: a + "%"
					},
					dangerouslySetInnerHTML: {
						__html: t
					}
				});
			i ? y = n.createElement("div", {
				id: "dailyText"
			}, y) : !0 === this.state.isSummaryContent && (y = n.createElement("div", {
				id: "summary"
			}, y));
			return n.createElement("div", {
				id: "__primary-pane",
				className: "primary-pane"
			}, x, y, j, n.createElement(f, {
				dir: e || "ltr"
			}), m)
		}, r.prototype._scrollElementIntoView = function(t, r) {
			if (this._expandedLargeDocumentSectionID = null, this._isLargeDocument()) {
				for (var e = void 0, o = t; o.parentElement;) {
					if ("section" === o.className) {
						e = o;
						break
					}
					o = o.parentElement
				}
				e && (this._expandedLargeDocumentSectionID = e.id, e.style.display = "block")
			}
			window.setTimeout((function() {
				var e = t.getBoundingClientRect().top + window.pageYOffset - (document.documentElement.clientTop || 0) - ("number" == typeof r ? r : 80);
				window.scroll(0, e)
			}), 1)
		}, r.prototype._isElementInView = function(t) {
			var r = t.getBoundingClientRect(),
				e = (window.innerHeight || document.documentElement.clientHeight) - this.state.keyboardHeight,
				o = window.innerWidth || document.documentElement.clientWidth;
			return r.top >= 0 && e - r.top > r.height && r.left >= 0 && r.left <= o
		}, r.prototype._isElementIntersectingViewport = function(t) {
			var r = t.getBoundingClientRect();
			return r.bottom > 0 && r.right > 0 && r.left < (window.innerWidth || document.documentElement.clientWidth) && r.top < (window.innerHeight || document.documentElement.clientHeight)
		}, r.prototype._persistInputField = function(t) {
			var r = [],
				e = t.tagName.toLowerCase();
			if ("input" === e) {
				var o = t;
				if ("radio" === o.type) {
					var i = document.getElementsByName(o.name);
					i && [].forEach.call(i, (function(t) {
						r.push({
							textTag: t.id,
							value: t.checked ? "1" : "0"
						})
					}))
				} else "checkbox" === o.type ? r.push({
					textTag: o.id,
					value: o.checked ? "1" : "0"
				}) : "text" !== o.type && "date" !== o.type || r.push({
					textTag: o.id,
					value: o.value
				})
			} else if ("textarea" === e) {
				var a = t;
				r.push({
					textTag: a.id,
					value: a.value
				})
			}
			var n = {
				fields: r,
				location: _.getLocationFromPrimaryContent()
			};
			b.send({
				type: N.NATIVE_ACTION_UPDATE_INPUT_FIELDS,
				payload: n
			})
		}, r.prototype.updateInputFieldsAppearance = function(t) {
			[].map.call(document.querySelectorAll(".gen-field textarea"), (function(t) {
				c.update(t)
			}))
		}, r.prototype._getVerseSelector = function(t, r, e) {
			return 'span[id^="v' + t + "-" + r + "-" + e + '-"]'
		}, r
	}(n.Component);
	t.exports = W
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(34),
		n = e(43),
		l = e(29),
		c = new(function(t) {
			function r() {
				var r = t.call(this) || this;
				return r.CHANGE_EVENT = "change", r
			}
			return i(r, t), r.prototype.setExtractionContent = function(t) {
				this.extractionContent = t
			}, r.prototype.getExtractionContent = function() {
				return this.extractionContent
			}, r.prototype.setExtractionID = function(t) {
				this.extractionID = t
			}, r.prototype.getExtractionID = function() {
				return this.extractionID
			}, r.prototype.setExtractionType = function(t) {
				this.extractionType = t
			}, r.prototype.getExtractionType = function() {
				return this.extractionType
			}, r.prototype.setExtractionLink = function(t) {
				this.extractionLink = t
			}, r.prototype.getExtractionLink = function() {
				return this.extractionLink
			}, r.prototype.emitChange = function() {
				this.emit(this.CHANGE_EVENT)
			}, r.prototype.addChangeListener = function(t) {
				this.on(this.CHANGE_EVENT, t)
			}, r.prototype.removeChangeListener = function(t) {
				this.removeListener(this.CHANGE_EVENT, t)
			}, r
		}(n.EventEmitter));
	a.register((function(t) {
		switch (t.type) {
			case l.SELECT_EXTRACTION:
				c.setExtractionType(t.extractionType), c.setExtractionID(t.extractionID), c.setExtractionLink(t.jwPubLink), c.emitChange()
		}
	})), t.exports = c
}, function(t, r, e) {
	"use strict";
	var o;
	! function(t) {
		t.DOC_CLASS_BibleEncyclopedia = 2, t.DOC_CLASS_DailyText = 4, t.DOC_CLASS_BackMaterial = 12, t.DOC_CLASS_Appendix = 14, t.DOC_CLASS_PublicationTOC = 19, t.DOC_CLASS_BibleBookChapterHeadings = 115
	}(o || (o = {})), t.exports = o
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(2),
		n = e(26),
		l = e(25),
		c = e(28),
		d = function(t) {
			function r(e) {
				var o = t.call(this, e) || this;
				return o._handleScroll = function(t) {
					o._canHandleEvents = !0, o._timerForEvents && (window.clearTimeout(o._timerForEvents), o._timerForEvents = void 0), o._timerForEvents = window.setTimeout((function() {
						o._canHandleEvents = !1, o._timerForEvents = void 0
					}), r.LONG_DELAY)
				}, o._documentTouchStartEventHandler = function(t) {
					o._canHandleEvents && o._hideBar(r.NO_DELAY)
				}, o._sensorTouchStartAndMoveEventHandler = function(t) {
					if (o._canHandleEvents) {
						var e = t;
						if (e && void 0 !== e.pointerType && "mouse" !== e.pointerType && "pen" !== e.pointerType) {
							var i = o._getPosY(t),
								a = void 0;
							if (!(i < 0 || i > o.sensor().clientHeight)) {
								if ("touchstart" === t.type || "pointerdown" === t.type) o._onShowing(), o._savePosY = i;
								else;
								if (o._timerForHideBar && (window.clearTimeout(o._timerForHideBar), o._timerForHideBar = void 0), o._isBarVisible) {
									var n = o.sensor().clientHeight - 2 * r.TOUCH_MARGIN;
									0 !== (a = Math.min(Math.max(i, r.TOUCH_MARGIN) - r.TOUCH_MARGIN, n) / n) && 1 !== a && o._scrollToRatio(a)
								} else o._showBar(), a = o._currentScrollYOffset() / (o._getContentHeight() - o._getViewHeight());
								o._moveThumbTo(a), t.stopImmediatePropagation()
							}
						}
					}
				}, o._sensorTouchEndEventHandler = function(t) {
					o._canHandleEvents && (o._onHiding(), o._savePosY === o._getPosY(t) ? o._hideBar(r.LONG_DELAY) : o._hideBar(r.SHORT_DELAY), o._savePosY = -1, o._lastPageY = 0, o._lastClientY = 0, t.stopImmediatePropagation())
				}, o._isBarVisible = !1, o._savePosY = -1, o
			}
			return i(r, t), r.prototype.scrollbar = function() {
				return this.refs ? n.findDOMNode(this.refs.scrollbar) : null
			}, r.prototype.track = function() {
				return this.refs ? n.findDOMNode(this.refs.track) : null
			}, r.prototype.thumb = function() {
				return this.refs ? n.findDOMNode(this.refs.thumb) : null
			}, r.prototype.sensor = function() {
				return this.refs ? n.findDOMNode(this.refs.sensor) : null
			}, r.prototype._getContentHeight = function() {
				return document.documentElement.scrollHeight
			}, r.prototype._getViewHeight = function() {
				return window.innerHeight
			}, r.prototype._scrollToOffset = function(t) {
				window.scrollTo(0, t)
			}, r.prototype._currentScrollYOffset = function() {
				return window.pageYOffset || document.documentElement.scrollTop
			}, r.prototype._getPosY = function(t) {
				var r, e = (r = t).target.parentNode.offsetTop;
				return r.clientY - e
			}, r.prototype._onShowing = function() {
				l.send({
					type: c.NATIVE_EVENT_SPEEDBAR_SHOWN
				})
			}, r.prototype._onHiding = function() {
				l.send({
					type: c.NATIVE_EVENT_SPEEDBAR_HIDDEN
				})
			}, r.prototype._moveThumbTo = function(t) {
				if (void 0 !== t && NaN !== t) {
					var e = this.track().clientHeight,
						o = e * (this._getViewHeight() / this._getContentHeight()),
						i = (e - (o = Math.max(o, r.MIN_THUMB_HEIGHT))) * t;
					this.thumb().style.height = o + "px", this.thumb().style.top = i + "px"
				}
			}, r.prototype._scrollToRatio = function(t) {
				if (void 0 !== t && NaN !== t) {
					var r = (this._getContentHeight() - this._getViewHeight()) * t;
					this._scrollToOffset(r)
				}
			}, r.prototype._showBar = function() {
				this.scrollbar().style.display = "block", this._addClassToElement(this.thumb(), "scrolling"), this._addClassToElement(this.scrollbar(), "scrolling"), this._isBarVisible = !0
			}, r.prototype._hideBar = function(t) {
				var e = this;
				this._timerForHideBar && window.clearTimeout(this._timerForHideBar), this._timerForHideBar = window.setTimeout((function() {
					t === r.NO_DELAY && (e.scrollbar().style.display = "none"), e._removeClassFromElement(e.thumb(), "scrolling"), e._removeClassFromElement(e.scrollbar(), "scrolling"), e._timerForHideBar = void 0, e._isBarVisible = !1
				}), t)
			}, r.prototype._addClassToElement = function(t, r) {
				t && r && (t.classList ? t.classList.add(r) : t.className += " " + r)
			}, r.prototype._removeClassFromElement = function(t, r) {
				t && r && (t.classList ? t.classList.remove(r) : t.className = t.className.replace(RegExp("(^|\\s)+" + r + "($|\\s)+", "g"), " "))
			}, r.prototype._initialSetup = function() {
				var t = this._currentScrollYOffset() / (this._getContentHeight() - this._getViewHeight());
				this._moveThumbTo(t), this._onShowing(), this._showBar(), this._onHiding(), this._hideBar(r.LONG_DELAY), this._lastPageY = 0, this._lastClientY = 0
			}, r.prototype.componentDidMount = function() {
				var t = this;
				"touchstart touchmove pointerdown pointermove".split(" ").forEach((function(r) {
					t.sensor().addEventListener(r, t._sensorTouchStartAndMoveEventHandler)
				})), "touchend pointerup".split(" ").forEach((function(r) {
					t.sensor().addEventListener(r, t._sensorTouchEndEventHandler)
				})), document.addEventListener("scroll", this._handleScroll), this._initialSetup()
			}, r.prototype.componentWillUnmount = function() {
				var t = this;
				"touchstart touchmove pointerdown pointermove".split(" ").forEach((function(r) {
					t.sensor().removeEventListener(r, t._sensorTouchStartAndMoveEventHandler)
				})), "touchend pointerup".split(" ").forEach((function(r) {
					t.sensor().removeEventListener(r, t._sensorTouchEndEventHandler)
				})), document.removeEventListener("scroll", this._handleScroll)
			}, r.prototype.render = function() {
				return a.createElement("div", {
					className: "speedbar dir-" + this.props.dir,
					ref: "speedbar"
				}, a.createElement("div", {
					className: "scrollbar dir-" + this.props.dir,
					ref: "scrollbar"
				}, a.createElement("div", {
					className: "track",
					ref: "track"
				}, a.createElement("div", {
					className: "thumb",
					ref: "thumb"
				}))), a.createElement("div", {
					className: "sensor",
					ref: "sensor"
				}))
			}, r.TOUCH_MARGIN = 32, r.MIN_THUMB_HEIGHT = 40, r.LONG_DELAY = 2e3, r.SHORT_DELAY = 1e3, r.NO_DELAY = 0, r
		}(a.Component);
	t.exports = d
}, function(t, r, e) {
	"use strict";
	var o = e(381),
		i = function() {
			function t(t, r, e) {
				var i = this;
				this._startPoint = {
					x: 0,
					y: 0
				}, this._handleTouchStart = function(t) {
					var r = t.changedTouches[0];
					i._startPoint = {
						x: r.pageX,
						y: r.pageY
					};
					i._gestureRecognizer.touchStart(t.target, r.clientX, r.clientY, r.pageX, r.pageY, !0) && t.preventDefault()
				}, this._handleTouchMove = function(t) {
					var r = t.changedTouches[0];
					i._gestureRecognizer.touchMove(r.clientX, r.clientY, r.pageX, r.pageY) && t.preventDefault()
				}, this._handleTouchEnd = function(t) {
					var r = t.changedTouches[0];
					i._gestureRecognizer.touchEnd(t.target, r.clientX, r.clientY, r.pageX, r.pageY) && t.preventDefault()
				}, this._handleTouchCancel = function(t) {
					i._gestureRecognizer.touchCancel()
				}, this.eventTarget = r, this._gestureRecognizer = new o(t, r, e)
			}
			return t.prototype.getStartPoint = function() {
				return this._startPoint
			}, t.prototype.attachEventListeners = function() {
				this.eventTarget.addEventListener("touchstart", this._handleTouchStart), this.eventTarget.addEventListener("touchmove", this._handleTouchMove), this.eventTarget.addEventListener("touchend", this._handleTouchEnd), this.eventTarget.addEventListener("touchcancel", this._handleTouchCancel)
			}, t.prototype.detachEventListeners = function() {
				this.eventTarget.removeEventListener("touchstart", this._handleTouchStart), this.eventTarget.removeEventListener("touchmove", this._handleTouchMove), this.eventTarget.removeEventListener("touchend", this._handleTouchEnd), this.eventTarget.removeEventListener("touchcancel", this._handleTouchCancel)
			}, t.prototype.resetSelection = function() {
				this._gestureRecognizer.resetSelection()
			}, t
		}();
	t.exports = i
}, function(t, r, e) {
	"use strict";
	var o = e(63),
		i = e(48),
		a = e(335),
		n = e(70),
		l = e(176),
		c = e(381),
		d = e(39),
		m = e(50),
		p = e(25),
		u = e(28),
		g = e(29),
		s = e(8),
		b = function() {
			function t(r) {
				var e = this;
				this.sendCloseMenuOnScroll = !0, this._startPoint = {
					x: 0,
					y: 0
				}, this.handlePointerDown = function(t) {
					var r, o = document.elementFromPoint(t.clientX, t.clientY);
					if (e._startPoint = {
							x: t.pageX,
							y: t.pageY
						}, o && (r = n.markWithIdentifier(o.getAttribute(a.USER_MARK_ID_ATTR))), o && r) t.preventDefault(), p.send({
						type: u.NATIVE_ACTION_SHOW_EDIT_USER_MARK_MENU,
						userMark: a.serializeSingleLocatedUserMark(r, !0)
					});
					else if ("pen" === t.pointerType) {
						if (e._penDown || m.elementHasAncestorWithTag(o, "A")) return;
						t.preventDefault(), e._penDown = !0, e.eventTarget.removeEventListener("selectionchange", e.handleSelectionChange), e._gestureRecognizer.touchStart(t.target, t.clientX, t.clientY, t.pageX, t.pageY)
					} else p.send({
						type: u.NATIVE_ACTION_HIDE_USER_MARK_MENU
					})
				}, this.handlePointerMove = function(t) {
					e._penDown && e._gestureRecognizer.touchMove(t.clientX, t.clientY, t.pageX, t.pageY)
				}, this.handlePointerUp = function(r) {
					if (e._penDown) e._penDown = !1, e.eventTarget.addEventListener("selectionchange", e.handleSelectionChange);
					else if ("mouse" === r.pointerType) {
						var o = window.getSelection();
						o && !o.isCollapsed && o.rangeCount > 0 && (l.CurrentSelectionRange = o.getRangeAt(0).cloneRange(), t._showUserMarkToolbarAtSelection(!0))
					}
					e._gestureRecognizer.touchEnd(r.target, r.clientX, r.clientY, r.pageX, r.pageY)
				}, this.handlePointerCancel = function(t) {
					e._penDown && (e._penDown = !1, e.eventTarget.addEventListener("selectionchange", e.handleSelectionChange)), e._gestureRecognizer.touchCancel()
				}, this.handleSelectionChange = function(r) {
					t._showUserMarkToolbarAtSelection(!0)
				}, this.handleScroll = function(r) {
					var o = e;
					e.sendCloseMenuOnScroll && (p.send({
						type: u.NATIVE_ACTION_HIDE_USER_MARK_MENU
					}), e.sendCloseMenuOnScroll = !1), window.clearTimeout(e.scrollTimer), e.scrollTimer = window.setTimeout((function() {
						o.sendCloseMenuOnScroll = !0, t._showUserMarkToolbarAtSelection(!1)
					}), 100)
				}, this.eventTarget = document, this._gestureRecognizer = new c(r, this.eventTarget, !1)
			}
			return t.prototype.attachEventListeners = function() {
				this.eventTarget.addEventListener("pointerdown", this.handlePointerDown), this.eventTarget.addEventListener("pointermove", this.handlePointerMove), this.eventTarget.addEventListener("pointerup", this.handlePointerUp), this.eventTarget.addEventListener("pointercancel", this.handlePointerCancel), this.eventTarget.addEventListener("selectionchange", this.handleSelectionChange), this.eventTarget.addEventListener("scroll", this.handleScroll)
			}, t.prototype.detachEventListeners = function() {
				this.eventTarget.removeEventListener("pointerdown", this.handlePointerDown), this.eventTarget.removeEventListener("pointermove", this.handlePointerMove), this.eventTarget.removeEventListener("pointerup", this.handlePointerUp), this.eventTarget.removeEventListener("pointercancel", this.handlePointerCancel), this.eventTarget.removeEventListener("selectionchange", this.handleSelectionChange), this.eventTarget.removeEventListener("scroll", this.handleScroll)
			}, t.prototype.getStartPoint = function() {
				return this._startPoint
			}, t._showUserMarkToolbarAtSelection = function(t) {
				var r = window.getSelection();
				if (r && !r.isCollapsed && r.rangeCount > 0) {
					l.CurrentSelectionRange = r.getRangeAt(0).cloneRange();
					var e = l.createTokenGroupRangeFromSelection(),
						a = void 0,
						n = void 0,
						c = [];
					if (e) {
						e.textBlockRanges;
						var m = [],
							b = [];
						e.textBlockRanges.forEach((function(t, r) {
							c.push(t.blockPrefix + t.blockID);
							var e = null;
							t.blockPrefix === s.BlockType.Paragraph ? e = new i(t.blockID, null, null, null) : t.blockPrefix === s.BlockType.Verse && (e = new i(null, t.blockID, null, null));
							var o = d.getTokenInfosForTokenRange(e, !0);
							b.push(d.getTextContentOfTokenInfos(o));
							var a = d.getTokenInfosForTokenRange(t, !0);
							m.push(d.getTextContentOfTokenInfos(a, !0, 0 === r))
						})), a = b.join(""), n = m.join("")
					}
					var w = document.createRange();
					w.selectNodeContents(r.anchorNode), r.focusNode && r.focusNode.lastChild ? w.setEnd(r.focusNode.lastChild, 0) : w.setEnd(r.focusNode, 0);
					var f = w.getBoundingClientRect(),
						h = {
							rect: new o.JWLRect(f.left, f.top, f.width, f.height),
							text: n,
							blocks: c,
							blockText: a
						};
					p.send({
						type: u.NATIVE_EVENT_TEXT_SELECTION_CREATED,
						selection: h
					})
				} else p.send({
					type: u.NATIVE_ACTION_HIDE_USER_MARK_MENU
				});
				t && p.send({
					type: g.EXIT_NOTE_EDIT_MODE
				})
			}, t
		}();
	t.exports = b
}, function(t, r, e) {
	"use strict";
	var o;
	! function(t) {
		t.TYPE_NOTE = "n", t.TYPE_BOOKMARK = "b"
	}(o || (o = {})), t.exports = o
}, function(t, r, e) {
	"use strict";
	var o = e(8),
		i = e(349),
		a = function() {
			function t() {}
			return t.applyColorStyles = function() {
				var r = document.getElementById("color_style_container");
				if (!r) {
					var e = document.head;
					(r = document.createElement("style")).type = "text/css", r.id = "color_style_container", e.appendChild(r)
				}
				r.innerHTML = t.createStylesForColors()
			}, t.createStylesForColors = function() {
				var t = [],
					r = [{
						color: i.getUserMarkColorRGBA(o.UserMarkColor.Yellow, !1),
						name: ".highlight_color_yellow"
					}, {
						color: i.getUserMarkColorRGBA(o.UserMarkColor.Green, !1),
						name: ".highlight_color_green"
					}, {
						color: i.getUserMarkColorRGBA(o.UserMarkColor.Blue, !1),
						name: ".highlight_color_blue"
					}, {
						color: i.getUserMarkColorRGBA(o.UserMarkColor.Pink, !1),
						name: ".highlight_color_pink"
					}, {
						color: i.getUserMarkColorRGBA(o.UserMarkColor.Purple, !1),
						name: ".highlight_color_purple"
					}, {
						color: i.getUserMarkColorRGBA(o.UserMarkColor.Orange, !1),
						name: ".highlight_color_orange"
					}, {
						color: i.getUserMarkColorRGBA(o.UserMarkColor.Yellow, !0),
						name: ".highlight_color_yellow_dark"
					}, {
						color: i.getUserMarkColorRGBA(o.UserMarkColor.Green, !0),
						name: ".highlight_color_green_dark"
					}, {
						color: i.getUserMarkColorRGBA(o.UserMarkColor.Blue, !0),
						name: ".highlight_color_blue_dark"
					}, {
						color: i.getUserMarkColorRGBA(o.UserMarkColor.Pink, !0),
						name: ".highlight_color_pink_dark"
					}, {
						color: i.getUserMarkColorRGBA(o.UserMarkColor.Purple, !0),
						name: ".highlight_color_purple_dark"
					}, {
						color: i.getUserMarkColorRGBA(o.UserMarkColor.Orange, !0),
						name: ".highlight_color_orange_dark"
					}],
					e = {
						color: i.getSearchTermColorRGBA(),
						name: ".highlight_term"
					},
					a = null;
				a = {
					color: [34, 100, 185, .2],
					name: ".text_selection_color"
				};
				for (var n = 0, l = r; n < l.length; n++) {
					var c = l[n];
					t.push(this.blendColors([c]))
				}
				t.push(this.blendColors([e])), t.push(this.blendColors([a]));
				for (var d = 0, m = r; d < m.length; d++) {
					c = m[d];
					t.push(this.blendColors([c, e], .8))
				}
				for (var p = 0, u = r; p < u.length; p++) {
					c = u[p];
					t.push(this.blendColors([c, a]))
				}
				t.push(this.blendColors([e, a], .8));
				for (var g = 0, s = r; g < s.length; g++) {
					c = s[g];
					t.push(this.blendColors([c, a, e], .8))
				}
				return t.join("")
			}, t.blendColors = function(t, r) {
				var e = t.length,
					o = [Math.ceil(t.reduce((function(t, r) {
						return t + r.color[0]
					}), 0) / e), Math.ceil(t.reduce((function(t, r) {
						return t + r.color[1]
					}), 0) / e), Math.ceil(t.reduce((function(t, r) {
						return t + r.color[2]
					}), 0) / e), Math.ceil(t.reduce((function(t, r) {
						return t + r.color[3]
					}), 0) / e * 10) / 10];
				return void 0 !== r && (o[3] = r), t.reduce((function(t, r) {
					return t + r.name
				}), "") + " {background-color: rgba(" + o.join(", ") + ")}"
			}, t
		}();
	t.exports = a
}, function(t, r) {
	t.exports = '<defs>\r\n    <rect id="notemarker-rect" x="1" y="1" width="19" height="19" rx="0"></rect>        \r\n    <mask id="notemarker-mask" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="-1" y="-1" width="21" height="21">\r\n        <rect x="0" y="0" width="21" height="21" fillX="white"></rect>\r\n        <use xlink:href="#notemarker-rect" fillX="black"></use>\r\n    </mask>\r\n    \r\n    <g id="notemarker-single">\r\n        <use fillX="#FFEB3B" fill-rule="evenodd" xlink:href="#notemarker-rect"></use>\r\n        <use strokeX="#FBC02D" fillX="#FFEB3B" mask="url(#notemarker-mask)" stroke-width="2" xlink:href="#notemarker-rect"></use>\r\n    </g>\r\n    \r\n    <g id="notemarker-multiple">\r\n        <use fillX="#FFEB3B" fill-rule="evenodd" x="5" y="1" xlink:href="#notemarker-single"></use>\r\n        <use fillX="#FFEB3B" fill-rule="evenodd" x="1" y="5" xlink:href="#notemarker-single"></use>\r\n    </g>\r\n</defs>'
}, function(t, r, e) {
	"use strict";
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.Flipbook = r.FlipbookHelper = void 0, e(438);
	var o = function() {
		function t() {
			this._flipbooks = []
		}
		return t.prototype.setupIfNeeded = function(t, r, e) {
			for (var o = 0; o < t.length; o++) {
				var a = t[o];
				a.classList.contains("flipbook-initialized") || (a.classList.add("flipbook-initialized"), this._flipbooks.push(new i(a, r, e)))
			}
		}, t
	}();
	r.FlipbookHelper = o;
	var i = function() {
		function t(t, r, e) {
			this.PREV_SVG_PATH = "M15.5 19a.493.493 0 01-.315-.112l-8-6.5a.5.5 0 010-.776l8-6.5a.5.5 0 11.63.776L8.293 12l7.522 6.112A.5.5 0 0115.5 19z", this.NEXT_SVG_PATH = "M8.5 19a.5.5 0 01-.315-.888L15.707 12 8.185 5.888a.5.5 0 11.63-.776l8 6.5a.5.5 0 010 .776l-8 6.5A.499.499 0 018.5 19z", this._rootElement = t, this._isRTL = r, this._imageTapHandler = e, this.setupContainer(), this.setupImages(), this.addNavigationButtons(), this.addNavigationDots()
		}
		return t.prototype.setupContainer = function() {
			var t = this.getImageElements(),
				r = document.createElement("div");
			r.classList.add("flipbook-container"), t.forEach((function(t) {
				r.appendChild(t)
			})), this._rootElement.insertBefore(r, this._rootElement.childNodes[0]), this._containerElement = r
		}, t.prototype.setupImages = function() {
			var t = this,
				r = this.getImageElements(),
				e = document.createElement("img");
			e.onclick = function() {
				t.selectedImageTapped()
			}, e.classList.add("flipbook-sizing-image"), r.forEach((function(t, r) {
				0 !== r || t.classList.contains("opaque") || (t.classList.add("opaque"), e.src = t.src)
			})), this._containerElement.appendChild(e)
		}, t.prototype.addNavigationButtons = function() {
			var t = this,
				r = this.createPrevArrowElement(),
				e = this.createNextArrowElement();
			r.addEventListener("click", (function(r) {
				r.stopPropagation(), t._isRTL ? t.goToNext() : t.goToPrev()
			})), e.addEventListener("click", (function(r) {
				r.stopPropagation(), t._isRTL ? t.goToPrev() : t.goToNext()
			})), this._containerElement.appendChild(r), this._containerElement.appendChild(e)
		}, t.prototype.addNavigationDots = function() {
			var t = this,
				r = this.getImageElements(),
				e = document.createElement("ul");
			e.classList.add("flipbook-navigation-dots"), r.forEach((function(r, o) {
				var i = document.createElement("li"),
					a = document.createElement("button");
				0 === o && t.changeSelectedNavigationDot(null, i), a.addEventListener("click", (function(e) {
					var o = t.getSelectedImageElement();
					e.stopPropagation(), t.changeSelectedImage(o, r)
				})), i.appendChild(a), e.appendChild(i)
			})), this._containerElement.appendChild(e)
		}, t.prototype.goToNext = function() {
			this.changeImage("next")
		}, t.prototype.goToPrev = function() {
			this.changeImage("prev")
		}, t.prototype.changeImage = function(t) {
			var r = this.getSelectedImageElement(),
				e = this.getImageElements(),
				o = e.indexOf(r),
				i = void 0;
			"next" === t && o < e.length ? i = e[o + 1] : "prev" === t && o > 0 && (i = e[o - 1]), i = i || ("next" === t ? e[0] : e[e.length - 1]), this.changeSelectedImage(r, i)
		}, t.prototype.changeSelectedImage = function(t, r) {
			var e = this.getNavigationDotElements(),
				o = this.getImageElements(),
				i = this.getSelectedNavigationDotElement(),
				a = o.indexOf(r);
			this.changeSelectedNavigationDot(i, e[a]), t.classList.remove("opaque"), r.classList.add("opaque")
		}, t.prototype.changeSelectedNavigationDot = function(t, r) {
			t && t.classList.remove("flipbook-active-dot"), r.classList.add("flipbook-active-dot")
		}, t.prototype.selectedImageTapped = function() {
			this._imageTapHandler(this.getSelectedImageElement().src)
		}, t.prototype.getSizingImageElement = function() {
			return this._containerElement.querySelector("img.flipbook-sizing-image")
		}, t.prototype.getSelectedImageElement = function() {
			return this._containerElement.querySelector("img.opaque")
		}, t.prototype.getSelectedNavigationDotElement = function() {
			return this._containerElement.querySelector("li.flipbook-active-dot")
		}, t.prototype.getNavigationDotElements = function() {
			return Array.from(this._containerElement.querySelectorAll("li"))
		}, t.prototype.getImageElements = function() {
			return Array.from(this._rootElement.querySelectorAll("img.gen-flipbook"))
		}, t.prototype.createPrevArrowElement = function() {
			var t = this.createArrowElement(this.PREV_SVG_PATH);
			return t.style.left = "0", t
		}, t.prototype.createNextArrowElement = function() {
			var t = this.createArrowElement(this.NEXT_SVG_PATH);
			return t.style.right = "0", t
		}, t.prototype.createArrowElement = function(t) {
			var r = document.createElement("div");
			r.classList.add("flipbook-arrow");
			var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			e.setAttribute("viewbox", "0 0 24 24");
			var o = document.createElementNS("http://www.w3.org/2000/svg", "path");
			return o.setAttribute("fill", "currentColor"), o.setAttribute("d", t), e.appendChild(o), r.appendChild(e), r
		}, t
	}();
	r.Flipbook = i
}, function(t, r, e) {
	e(75), e(439);
	var o = e(45);
	t.exports = o.Array.from
}, function(t, r, e) {
	var o = e(65),
		i = e(440);
	o({
		target: "Array",
		stat: !0,
		forced: !e(173)((function(t) {
			Array.from(t)
		}))
	}, {
		from: i
	})
}, function(t, r, e) {
	"use strict";
	var o = e(68),
		i = e(162),
		a = e(172),
		n = e(170),
		l = e(74),
		c = e(441),
		d = e(171);
	t.exports = function(t) {
		var r, e, m, p, u, g, s = i(t),
			b = "function" == typeof this ? this : Array,
			w = arguments.length,
			f = w > 1 ? arguments[1] : void 0,
			h = void 0 !== f,
			j = d(s),
			x = 0;
		if (h && (f = o(f, w > 2 ? arguments[2] : void 0, 2)), null == j || b == Array && n(j))
			for (e = new b(r = l(s.length)); r > x; x++) g = h ? f(s[x], x) : s[x], c(e, x, g);
		else
			for (u = (p = j.call(s)).next, e = new b; !(m = u.call(p)).done; x++) g = h ? a(p, f, [m.value, x], !0) : m.value, c(e, x, g);
		return e.length = x, e
	}
}, function(t, r, e) {
	"use strict";
	var o = e(73),
		i = e(14),
		a = e(47);
	t.exports = function(t, r, e) {
		var n = o(r);
		n in t ? i.f(t, n, a(0, e)) : t[n] = e
	}
}, function(t, r, e) {
	"use strict";
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.GestureRegion = void 0, e(394);
	var o = function() {
		function t(t) {
			var r = this;
			this._gestureRecognizers = [], this._eventListenerSignatures = [], this._handlePointerDown = function(t) {
				r._gestureRecognizers.forEach((function(r) {
					r.shouldHandleEvent(t) && r.pointerBegan(t)
				}))
			}, this._handlePointerMove = function(t) {
				r._gestureRecognizers.forEach((function(r) {
					r.shouldHandleEvent(t) && r.pointerMoved(t)
				}))
			}, this._handlePointerUp = function(t) {
				r._gestureRecognizers.forEach((function(r) {
					r.shouldHandleEvent(t) && r.pointerEnded(t)
				}))
			}, this._handlePointerCancel = function(t) {
				r._gestureRecognizers.forEach((function(r) {
					r.shouldHandleEvent(t) && r.pointerCancelled(t)
				}))
			}, this._regionElement = t
		}
		return t.prototype.attachEventListeners = function() {
			this._eventListenerSignatures = [
				["pointerdown", this._handlePointerDown, {
					capture: !0
				}],
				["pointermove", this._handlePointerMove, {
					capture: !0,
					passive: !1
				}],
				["pointerup", this._handlePointerUp, {
					capture: !0
				}],
				["pointercancel", this._handlePointerCancel, {
					capture: !0
				}],
				["touchstart", this._handlePointerDown, {
					capture: !0
				}],
				["touchmove", this._handlePointerMove, {
					capture: !0,
					passive: !1
				}],
				["touchend", this._handlePointerUp, {
					capture: !0
				}],
				["touchcancel", this._handlePointerCancel, {
					capture: !0
				}]
			];
			for (var t = 0, r = this._eventListenerSignatures; t < r.length; t++) {
				var e = r[t];
				this._regionElement.addEventListener.apply(this._regionElement, e)
			}
		}, t.prototype.detachEventListeners = function() {
			for (var t = 0, r = this._eventListenerSignatures; t < r.length; t++) {
				var e = r[t];
				this._regionElement.removeEventListener.apply(this._regionElement, e)
			}
		}, t.prototype.addGestureRecognizer = function(t) {
			this._gestureRecognizers.includes(t) || this._gestureRecognizers.push(t)
		}, t.prototype.removeGestureRecognizer = function(t) {
			var r = this._gestureRecognizers.indexOf(t);
			r > -1 && this._gestureRecognizers.splice(r, 1)
		}, t
	}();
	r.GestureRegion = o
}, function(t, r, e) {
	"use strict";
	var o = e(65),
		i = e(168).includes,
		a = e(175);
	o({
		target: "Array",
		proto: !0,
		forced: !e(444)("indexOf", {
			ACCESSORS: !0,
			1: 0
		})
	}, {
		includes: function(t) {
			return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), a("includes")
}, function(t, r, e) {
	var o = e(21),
		i = e(13),
		a = e(10),
		n = Object.defineProperty,
		l = {},
		c = function(t) {
			throw t
		};
	t.exports = function(t, r) {
		if (a(l, t)) return l[t];
		r || (r = {});
		var e = [][t],
			d = !!a(r, "ACCESSORS") && r.ACCESSORS,
			m = a(r, 0) ? r[0] : c,
			p = a(r, 1) ? r[1] : void 0;
		return l[t] = !!e && !i((function() {
			if (d && !o) return !0;
			var t = {
				length: -1
			};
			d ? n(t, 1, {
				enumerable: !0,
				get: c
			}) : t[1] = 1, e.call(t, m, p)
		}))
	}
}, function(t, r, e) {
	var o = e(6),
		i = e(68),
		a = Function.call;
	t.exports = function(t, r, e) {
		return i(a, o[t].prototype[r], e)
	}
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
		return (o = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(t, r) {
				t.__proto__ = r
			} || function(t, r) {
				for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
			})(t, r)
	}, function(t, r) {
		function e() {
			this.constructor = t
		}
		o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
	});
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.TapGestureRecognizer = void 0;
	var a = e(336),
		n = e(322),
		l = e(28),
		c = e(25),
		d = function(t) {
			function r() {
				var r = null !== t && t.apply(this, arguments) || this;
				return r._initialPoint = void 0, r._initialPointerId = -1, r._initialTouchTimeStamp = 0, r
			}
			return i(r, t), r.prototype.pointerBegan = function(t) {
				this._initialPoint = a.GestureRecognizer.gesturePointFromEvent(t), this._initialPointerId = a.GestureRecognizer.pointerIdFromEvent(t), this._initialTouchTimeStamp = Date.now(), c.send({
					type: l.NATIVE_ACTION_HIDE_USER_MARK_MENU
				})
			}, r.prototype.pointerMoved = function(t) {
				this._initialPoint && !this._isWithinAllowableMovement(t) && this.updateStateWithEvent({
					type: "FAILED"
				}, t)
			}, r.prototype.pointerEnded = function(t) {
				this.state === n.GestureRecognizerState.Possible && this._isWithinAllowableMovement(t) && Date.now() - this._initialTouchTimeStamp <= 200 ? this.updateStateWithEvent({
					type: "ENDED"
				}, t) : this.updateStateWithEvent({
					type: "FAILED"
				}, t)
			}, r.prototype.shouldHandleEvent = function(r) {
				if (t.prototype.shouldHandleEvent.call(this, r)) {
					if (a.GestureRecognizer.hasPointerEventSupport && r instanceof PointerEvent) return "pointerdown" === r.type || a.GestureRecognizer.pointerIdFromEvent(r) === this._initialPointerId;
					if (!a.GestureRecognizer.hasPointerEventSupport && r instanceof TouchEvent) return "touchstart" === r.type || a.GestureRecognizer.pointerIdFromEvent(r) === this._initialPointerId
				}
				return !1
			}, r.prototype.reset = function() {
				t.prototype.reset.call(this), this._initialPoint = void 0, this._initialPointerId = -1, this._initialTouchTimeStamp = 0
			}, r.prototype._isWithinAllowableMovement = function(t) {
				if (this._initialPoint) {
					var r = a.GestureRecognizer.gesturePointFromEvent(t);
					if (Math.abs(this._initialPoint.clientX - r.clientX) <= 30 && Math.abs(this._initialPoint.clientY - r.clientY) <= 30) return !0
				}
				return !1
			}, r
		}(a.GestureRecognizer);
	r.TapGestureRecognizer = d
}, function(t, r, e) {
	var o = e(65),
		i = e(448);
	o({
		target: "Object",
		stat: !0,
		forced: Object.assign !== i
	}, {
		assign: i
	})
}, function(t, r, e) {
	"use strict";
	var o = e(21),
		i = e(13),
		a = e(174),
		n = e(169),
		l = e(166),
		c = e(162),
		d = e(167),
		m = Object.assign,
		p = Object.defineProperty;
	t.exports = !m || i((function() {
		if (o && 1 !== m({
				b: 1
			}, m(p({}, "a", {
				enumerable: !0,
				get: function() {
					p(this, "b", {
						value: 3,
						enumerable: !1
					})
				}
			}), {
				b: 2
			})).b) return !0;
		var t = {},
			r = {},
			e = Symbol();
		return t[e] = 7, "abcdefghijklmnopqrst".split("").forEach((function(t) {
			r[t] = t
		})), 7 != m({}, t)[e] || "abcdefghijklmnopqrst" != a(m({}, r)).join("")
	})) ? function(t, r) {
		for (var e = c(t), i = arguments.length, m = 1, p = n.f, u = l.f; i > m;)
			for (var g, s = d(arguments[m++]), b = p ? a(s).concat(p(s)) : a(s), w = b.length, f = 0; w > f;) g = b[f++], o && !u.call(s, g) || (e[g] = s[g]);
		return e
	} : m
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
		return (o = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(t, r) {
				t.__proto__ = r
			} || function(t, r) {
				for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
			})(t, r)
	}, function(t, r) {
		function e() {
			this.constructor = t
		}
		o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
	});
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.LongPressGestureRecognizer = void 0;
	var a = e(336),
		n = e(322),
		l = function(t) {
			function r() {
				var r = null !== t && t.apply(this, arguments) || this;
				return r._initialPoint = void 0, r._initialTimeStamp = 0, r._initialPointerId = -1, r._touchBeganEvent = void 0, r
			}
			return i(r, t), Object.defineProperty(r.prototype, "didMove", {
				get: function() {
					return this._didMove
				},
				enumerable: !1,
				configurable: !0
			}), r.prototype.pointerBegan = function(t) {
				var r = this;
				if (t.currentTarget !== t.target) {
					var e = t.changedTouches[0];
					this._initialPoint = {
						clientX: e.clientX,
						clientY: e.clientY
					}, this._initialTimeStamp = Date.now(), this._initialPointerId = e.identifier, this._touchBeganEvent = t, this._didMove = !1, this._minimumPressDurationTimer = setTimeout((function() {
						r.state === n.GestureRecognizerState.Possible && (t.preventDefault(), r.updateStateWithEvent({
							type: "BEGAN"
						}, r._touchBeganEvent))
					}), 300)
				}
			}, r.prototype.pointerMoved = function(t) {
				if (t.changedTouches[0].identifier === this._initialPointerId) {
					this._clearTimerIfNeeded();
					var r = this._hasMinTimeElapsed();
					r || !this._initialPoint || this._isWithinAllowableMovement(t) ? r && !this._isWithinAllowableMovement(t) && (this._didMove = !0, this.state === n.GestureRecognizerState.Possible ? (t.preventDefault(), this.updateStateWithEvent({
						type: "BEGAN"
					}, this._touchBeganEvent)) : this.state !== n.GestureRecognizerState.Began && this.state !== n.GestureRecognizerState.Changed || (t.preventDefault(), this.updateStateWithEvent({
						type: "MOVED"
					}, t))) : this.updateStateWithEvent({
						type: "FAILED"
					}, t)
				}
			}, r.prototype.pointerEnded = function(t) {
				t.changedTouches[0].identifier === this._initialPointerId && (this._clearTimerIfNeeded(), this.state === n.GestureRecognizerState.Began || this.state === n.GestureRecognizerState.Changed ? this.updateStateWithEvent({
					type: "ENDED"
				}, t) : this.updateStateWithEvent({
					type: "FAILED"
				}, t))
			}, r.prototype.shouldHandleEvent = function(r) {
				return !!(t.prototype.shouldHandleEvent.call(this, r) && r instanceof TouchEvent) && "stylus" !== r.changedTouches[0].touchType
			}, r.prototype.reset = function() {
				t.prototype.reset.call(this), this._clearTimerIfNeeded(), this._initialPoint = void 0, this._initialTimeStamp = 0, this._initialPointerId = -1, this._touchBeganEvent = void 0, this._didMove = !1
			}, r.prototype._isWithinAllowableMovement = function(t) {
				if (this._initialPoint) {
					var r = t.changedTouches[0];
					if (Math.abs(this._initialPoint.clientX - r.clientX) <= 3 && Math.abs(this._initialPoint.clientY - r.clientY) <= 3) return !0
				}
				return !1
			}, r.prototype._hasMinTimeElapsed = function() {
				return Date.now() - this._initialTimeStamp >= 300
			}, r.prototype._clearTimerIfNeeded = function() {
				this._minimumPressDurationTimer && (clearTimeout(this._minimumPressDurationTimer), this._minimumPressDurationTimer = void 0)
			}, r
		}(a.GestureRecognizer);
	r.LongPressGestureRecognizer = l
}, function(t, r, e) {
	"use strict";
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.TapGestureHandler = void 0;
	var o = e(25),
		i = e(50),
		a = e(28),
		n = e(35),
		l = e(30),
		c = e(76),
		d = e(368),
		m = e(334),
		p = e(37),
		u = e(366),
		g = e(70),
		s = e(335),
		b = e(364),
		w = function() {
			function t(t, r, e) {
				var w = this;
				this._initialEventInfo = void 0, this.handleTap = function(t, r) {
					var e;
					if (e = i.ancestorElementWithClassList(t), w._initialEventInfo = r, l.getContextMenuVisible()) return n.setContextMenuVisible(!1), void o.send({
						type: a.NATIVE_ACTION_HIDE_USER_MARK_MENU
					});
					var c = b.TargetTextHelper.clearTargetTextIfNeeded(e, w._callbackHandler);
					if (e.classList.contains("tt")) {
						if (e.classList.contains("vl") || e.classList.contains("cl")) return void w.handleVerseLabelTap(e);
						if (e.classList.contains("fn")) return void w.handleFootnoteTap(e);
						if (e.classList.contains("m")) return void w.handleMarginalTap(e);
						if (e.classList.contains("en")) return void w.handleEndnoteTap(e)
					} else {
						if ("A" === t.tagName.toUpperCase() || i.elementHasAncestorWithTag(t, "A")) return;
						if (i.ancestorElementWithClass(t, "gen-field")) return;
						if ("IMG" === t.tagName.toUpperCase()) return void w.handleImageTap(t)
					}
					var d = i.ancestorElementWithClass(e, "notemarker");
					if (d) w.handleNoteMarkerTap(d);
					else if (t.getAttribute(s.USER_MARK_ID_ATTR)) w.handleUserMarkTap(t);
					else {
						if (!c && ("mouse" !== r.pointerType || 2 === r.button)) {
							if (w._isBibleChapter) return void w.handleBibleContentTap(t);
							var m = i.ancestorElementWithAttribute(t, "data-pid");
							if (m) {
								var p = document.querySelector('[data-pid="' + m.getAttribute("data-pid") + '"]');
								return p && (m = p), void w._selectParagraph(t, m)
							}
						}
						i.ancestorElementWithAttribute(e, "data-bg-image") && w.handleContentBackgroundImageTap(e)
					}
				}, this.handleMarginalTap = function(t) {
					var r = parseInt(t.getAttribute("data-rel-mid"), 10);
					n.selectMarginal(r, void 0);
					var e = t.parentElement ? t.parentElement.innerText.trim() : "";
					o.send({
						type: a.NATIVE_ACTION_REQUEST_MARGINAL,
						marginalID: r,
						label: e
					})
				}, this.handleFootnoteTap = function(t) {
					var r = parseInt(t.getAttribute("data-rel-fnid"), 10);
					n.selectFootnote(r)
				}, this.handleEndnoteTap = function(t) {
					var r = parseInt(t.getAttribute("data-rel-enid"), 10);
					n.selectEndnote(r)
				}, this.handleVerseLabelTap = function(t) {
					l.getContextMenuVisible() && n.setContextMenuVisible(!1);
					var r = i.ancestorElementMatchingID(t, /^v\d+\-\d+-\d+\-\d+$/),
						e = t.getBoundingClientRect(),
						d = {
							left: e.left,
							top: e.top,
							width: e.width,
							height: e.height
						},
						p = u.TextHelper.getVerseNumberFromVerseID(r.id);
					n.selectVerseLabel(p);
					var g, s = i.textSnippetForVerse(w._primaryDomNode, r.id),
						b = c.getContent();
					if (b) {
						var f;
						(f = b.uriPrefix) && (g = f + p)
					}
					var h = {
						verseID: p,
						text: s,
						rect: d,
						uri: g
					};
					o.send({
						type: a.NATIVE_ACTION_SHOW_PARAGRAPH_MENU,
						blockSelection: h
					}), w._callbackHandler({
						type: m.TouchEventCallbackType.FocusVerseOrParagraph,
						verseID: p
					})
				}, this.handleImageTap = function(t) {
					if (t) {
						var r = t.parentElement;
						if (r && "A" === r.tagName.toUpperCase()) r.click();
						else {
							var e = t.getAttribute("data-video");
							if (e) {
								var i = new d(e);
								o.send({
									type: a.NATIVE_ACTION_SHOW_MEDIA,
									mediaParams: i.getQuery()
								})
							} else t.classList.contains("suppressZoom") || o.send({
								type: a.NATIVE_ACTION_SHOW_IMAGE,
								url: t.src
							})
						}
					}
				}, this.handleContentBackgroundImageTap = function(t) {
					if (t) {
						var r = i.ancestorElementWithAttribute(t, "data-bg-image"),
							e = r.getAttribute("data-bg-image");
						e && !r.classList.contains("suppressZoom") && o.send({
							type: a.NATIVE_ACTION_SHOW_IMAGE,
							url: e
						})
					}
				}, this.handleUserMarkTap = function(t) {
					var r = g.markWithIdentifier(t.getAttribute(s.USER_MARK_ID_ATTR));
					r && o.send({
						type: a.NATIVE_ACTION_SHOW_EDIT_USER_MARK_MENU,
						userMark: s.serializeSingleLocatedUserMark(r, !0)
					})
				}, this.handleNoteMarkerTap = function(t) {
					var r = parseInt(t.getAttribute("data-notemarker-id"), 10);
					n.selectNote(r)
				}, this._selectVerse = function(t, r) {
					var e, l = r.id,
						d = u.TextHelper.getVerseNumberFromVerseID(l);
					if (void 0 !== d) {
						n.selectVerseLabel(d);
						var p = void 0;
						p = 1 === d ? 'span[data-vlid="vl0"], span[data-vlid="1"]' : 'span[data-vlid="' + d + '"]';
						var g = document.querySelector(p);
						if (g) {
							var s = g.getBoundingClientRect();
							e = {
								left: s.left,
								top: s.top,
								width: s.width,
								height: s.height
							}
						}
						var b = i.textSnippetForVerse(w._primaryDomNode, l),
							f = void 0,
							h = c.getContent(),
							j = void 0;
						if (h) {
							var x = h.uriPrefix;
							x && (j = x + d)
						}
						f = {
							verseID: d,
							text: b,
							rect: e,
							uri: j
						}, o.send({
							type: a.NATIVE_ACTION_SHOW_PARAGRAPH_MENU,
							blockSelection: f
						}), w._callbackHandler({
							type: m.TouchEventCallbackType.FocusVerseOrParagraph,
							verseID: d
						})
					}
				}, this._selectParagraph = function(t, r) {
					var e = r.getAttribute("data-pid");
					if (e && e.length > 0) {
						var l = parseInt(e, 10);
						n.selectParagraphLabel(l);
						var c = i.textSnippetForSelector(w._primaryDomNode, '[data-pid="' + l + '"]'),
							d = p.getRectContainingFirstLineOfElement(r);
						if (!d) {
							var u = r.getBoundingClientRect();
							d = {
								left: u.left,
								top: u.top,
								width: u.width,
								height: u.height
							}
						}
						if (!isNaN(l)) {
							var g = {
								paragraphID: l,
								text: c,
								rect: d
							};
							o.send({
								type: a.NATIVE_ACTION_SHOW_PARAGRAPH_MENU,
								blockSelection: g
							}), w._callbackHandler({
								type: m.TouchEventCallbackType.FocusVerseOrParagraph,
								paragraphID: l
							})
						}
					}
				}, this._callbackHandler = t, this._isBibleChapter = e, this._primaryDomNode = r
			}
			return t.prototype.handleBibleContentTap = function(t) {
				var r = i.ancestorElementWithClassList(t),
					e = null;
				if (((e = i.ancestorElementMatchingID(r, /^v\d+\-\d+-\d+\-\d+$/)) || (e = i.findChildElementMatchingIDContainingPoint(r, /^v\d+\-\d+-\d+\-\d+$/, this._initialEventInfo.pageX, this._initialEventInfo.pageY))) && this._selectVerse(r, e), !e) {
					var o = i.ancestorElementWithAttribute(r, "data-pid");
					if (o) {
						var a = document.querySelector('[data-pid="' + o.getAttribute("data-pid") + '"]');
						a && (o = a), (e = i.findChildElementMatchingIDNearestPoint(r, /^v\d+\-\d+-\d+\-\d+$/, this._initialEventInfo.pageX, this._initialEventInfo.pageY)) ? this._selectVerse(r, e) : this._selectParagraph(r, o)
					}
				}
			}, t
		}();
	r.TapGestureHandler = w
}, function(t, r, e) {
	"use strict";
	var o;
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.TextInteractionEventsHandler = r.TextInteractionPointerType = void 0;
	var i, a = e(35),
		n = e(64),
		l = e(70),
		c = e(335),
		d = e(37),
		m = e(25),
		p = e(30),
		u = e(39),
		g = e(334),
		s = e(28),
		b = e(364),
		w = e(373),
		f = e(48),
		h = e(365),
		j = e(8),
		x = e(99);
	! function(t) {
		t[t.touch = 0] = "touch", t[t.pen = 1] = "pen", t[t.mouse = 2] = "mouse"
	}(i = r.TextInteractionPointerType || (r.TextInteractionPointerType = {}));
	var y = w.createMachine({
			id: "textInteractionMachine",
			initial: "idle",
			context: {},
			states: {
				idle: {
					entry: ["reset", "hideUserMarkMenu"],
					on: {
						ANCHOR: "anchored"
					}
				},
				anchored: {
					entry: "hideLoupe",
					on: {
						BEGIN_HIGHLIGHT: "highlighting",
						BEGIN_SELECTION: "selecting",
						CANCEL: "idle"
					}
				},
				highlighting: {
					initial: "began",
					states: {
						began: {
							entry: "hideUserMarkMenu",
							on: {
								MOVE: "changing",
								CANCEL: "canceled"
							}
						},
						changing: {
							on: {
								MOVE: "changing",
								END: "showingMenu",
								CANCEL: "canceled"
							}
						},
						showingMenu: {
							entry: "handleUserMarkChange",
							exit: "hideUserMarkMenu",
							after: (o = {}, o[2e3] = {
								target: "ended"
							}, o),
							on: {
								END: "ended",
								CANCEL: "canceled"
							}
						},
						canceled: {
							type: "final"
						},
						ended: {
							type: "final"
						}
					},
					onDone: "idle"
				},
				selecting: {
					entry: "createSelectionFromAnchor",
					initial: "active",
					states: {
						active: {
							entry: "handleSelectionChange",
							on: {
								MOVE_LEADING_HANDLE: "movingLeadingHandle",
								MOVE_TRAILING_HANDLE: "movingTrailingHandle",
								MOVE_POINTER: "movingPointer",
								CLEAR: "cleared",
								CANCEL: "canceled",
								END: "active"
							}
						},
						movingLeadingHandle: {
							on: {
								MOVE_LEADING_HANDLE: "movingLeadingHandle",
								CANCEL: "canceled",
								END: "active"
							}
						},
						movingTrailingHandle: {
							on: {
								MOVE_TRAILING_HANDLE: "movingTrailingHandle",
								CANCEL: "canceled",
								END: "active"
							}
						},
						movingPointer: {
							on: {
								MOVE_POINTER: "movingPointer",
								CANCEL: "canceled",
								END: "active"
							}
						},
						canceled: {
							type: "final"
						},
						cleared: {
							type: "final"
						}
					},
					onDone: "idle"
				}
			}
		}, {
			actions: {
				handleUserMarkChange: function(t, r) {
					p.setAutoHideContextMenu(!0), t.handleUserMarkChange()
				},
				hideUserMarkMenu: function(t, r) {
					p.shouldAutoHideContextMenu() && m.send({
						type: s.NATIVE_ACTION_HIDE_USER_MARK_MENU
					})
				},
				createSelectionFromAnchor: function(t, r) {
					t.createSelectionFromAnchor()
				},
				handleSelectionChange: function(t, r) {
					"END" === r.type && (t.handleSelectionChange(), t.resetPointerType())
				},
				reset: function(t, r) {
					t.reset()
				},
				hideLoupe: function(t, r) {
					m.send({
						type: s.NATIVE_ACTION_HIDE_LOUPE
					})
				}
			}
		}),
		S = function() {
			function t(t, r) {
				var e = this;
				this._lastFrameMoveTime = 0, this.handleAnchor = function(t, r, o, i, a, n) {
					e._currentPointerType = n, e.state.matches({
						highlighting: "showingMenu"
					}) && e._stateMachineService.send("END"), e._updateAnchorToken(t, r, o, i, a), e._anchorTokenInfo && (e._stateMachineService.send("ANCHOR"), b.TargetTextHelper.clearTargetTextIfNeeded(t, e._callbackHandler))
				}, this.handleMove = function(t, r, o, a) {
					e.state.matches("anchored") && e._anchorTokenInfo && (e._currentPointerType === i.mouse ? e._stateMachineService.send("BEGIN_SELECTION") : e._stateMachineService.send("BEGIN_HIGHLIGHT")), e.state.matches("highlighting") ? e._handleHighlightingMove(t, r, o, a) : e.state.matches("selecting") && e._handleSelectingMove(t, r, o, a)
				}, this.handleEnd = function(t) {
					void 0 === t && (t = !0), e._currentPointerType, i.pen, !t && e.state.matches("anchored") && e._anchorTokenInfo && e._stateMachineService.send("BEGIN_SELECTION"), e._stateMachineService.send("END")
				}, this.handleCancel = function() {
					e._stateMachineService.send("CANCEL")
				}, this.handleTap = function(t, r) {
					e.state.matches("idle") ? e._tapGestureHandler.handleTap(t, r) : e._stateMachineService.send("CANCEL")
				}, this._updateAnchorToken = function(t, r, o, i, a) {
					if (t && e.state.matches("idle")) {
						var n = document.elementFromPoint(r, o);
						if (n && (!n.parentElement || "A" !== n.parentElement.tagName)) {
							var l = d.getTokenInfoByElementID(n.id);
							l && !l.isMarkableWord() && (l = d.getClosestMarkableTokenForToken(l, i, a)), l && !0 === l.isMarkableWord() ? e._anchorTokenInfo = l : e._anchorTokenInfo = null
						}
					}
				}, this._handleHighlightingMove = function(t, r, o, a) {
					if (e.state.matches("highlighting") && !(Date.now() < e._lastFrameMoveTime + 1e3 / 60)) {
						e._lastFrameMoveTime = Date.now(), e._currentPointerType, i.pen;
						var c = document.elementFromPoint(t, r),
							m = null;
						if (b.TargetTextHelper.clearTargetTextIfNeeded(c, e._callbackHandler), c.id) {
							if (!((m = d.getTokenInfoByElementID(c.id)).isMarkableWord() || (m = e._findMatchingTokenInLine(o, a)) && m.isMarkableWord())) return
						} else if (!(m = e._findMatchingTokenInLine(o, a)) || !m.isMarkableWord()) return;
						null !== c && (e._stopMediaMarkerFocusing(), e._lastSelectedTokenInfo && e._lastSelectedTokenInfo.groupId === m.groupId && e._lastSelectedTokenInfo.groupWordIndex === m.groupWordIndex || (!e._pendingUserMark || e._pendingUserMark.isBlank() || u.getGroupID(e._pendingUserMark) === m.groupId ? (e._pendingUserMark && !0 !== e._pendingUserMark.isBlank() ? !0 === m.isMarkableWord() && e._updateUserMarkFromAnchorToTokenInfo(m) : !0 === m.isMarkableWord() && (e._pendingUserMark = new n(l.defaultColor, l.style), e._pendingUserMark.isPending = !0, e._anchorTokenInfo || (e._anchorTokenInfo = m), e._updateUserMarkFromAnchorToTokenInfo(m), b.TargetTextHelper.clearTargetTextIfNeeded(c, e._callbackHandler)), e._lastSelectedTokenInfo = m, e._stateMachineService.send("MOVE")) : e._lastSelectedTokenInfo = null))
					}
				}, this._handleSelectingMove = function(t, r, o, a) {
					if (!(Date.now() < e._lastFrameMoveTime + 1e3 / 60)) {
						var n;
						e._lastFrameMoveTime = Date.now();
						var l = r;
						if (e._currentPointerType === i.mouse) e._stateMachineService.send("MOVE_POINTER");
						else {
							var c = (n = e.state.matches({
								selecting: "movingTrailingHandle"
							})) ? x.END_HANDLE_TOP_THRESHOLD : x.START_HANDLE_TOP_THRESHOLD;
							l = n ? r - c : r + c, e._stateMachineService.send(n ? "MOVE_TRAILING_HANDLE" : "MOVE_LEADING_HANDLE")
						}
						var p = document.elementFromPoint(t, l);
						if (p) {
							var g = d.getTokenInfoByElementID(p.id);
							g && g.isMarkableWord() && (e._currentPointerType === i.mouse && (n = e._anchorTokenInfo.groupWordIndex < g.groupWordIndex), n && g.groupWordIndex < e._selection.startTokenInfo.groupWordIndex || !n && g.groupWordIndex > e._selection.endTokenInfo.groupWordIndex || (e._stopMediaMarkerFocusing(), b.TargetTextHelper.clearTargetTextIfNeeded(p, e._callbackHandler), e._currentPointerType === i.touch && m.send({
								type: s.NATIVE_ACTION_SHOW_LOUPE,
								positionInfo: e._loupePositionInfo(t, l)
							}), e._lastSelectedTokenInfo && e._lastSelectedTokenInfo.groupId === g.groupId && e._lastSelectedTokenInfo.groupWordIndex === g.groupWordIndex || (!e._selection || e._selection.isBlank() || u.getGroupID(e._selection) === g.groupId ? (e._lastSelectedTokenInfo = g, n ? (e._currentPointerType === i.mouse && (e._selection.startTokenInfo = e._anchorTokenInfo), e._selection.endTokenInfo = g) : (e._selection.startTokenInfo = g, e._currentPointerType === i.mouse && (e._selection.endTokenInfo = e._anchorTokenInfo)), e._updateSelectionFromEndToEnd()) : e._lastSelectedTokenInfo = null)))
						}
					}
				}, this._onWindowDidResize = function() {
					e._selection && e._callbackHandler({
						type: g.TouchEventCallbackType.DrawSelection,
						selection: e._selection
					})
				}, this._selectionHandleTouchStart = function(t) {
					var r = t.target;
					r && (t.preventDefault(), r.id === x.END_HANDLE_ID || r.parentElement && r.parentElement.id === x.END_HANDLE_ID ? e._stateMachineService.send("MOVE_TRAILING_HANDLE") : (r.id === x.START_HANDLE_ID || r.parentElement && r.parentElement.id === x.START_HANDLE_ID) && e._stateMachineService.send("MOVE_LEADING_HANDLE"))
				}, this._selectionHandleTouchMove = function(t) {
					t.preventDefault();
					var r = t.changedTouches[0];
					e._handleSelectingMove(r.clientX, r.clientY, r.pageX, r.pageY)
				}, this._selectionHandleTouchEnd = function(t) {
					t.preventDefault(), e._lastSelectedTokenInfo = null, e._stateMachineService.send("END")
				}, this._callbackHandler = t, this._tapGestureHandler = r, this._lastSelectedTokenInfo = null, this._anchorTokenInfo = null, this._pendingUserMark = null, this._currentPointerType = null;
				var o = y.withContext({
					handleUserMarkChange: function() {
						e._pendingUserMark && (e._pendingUserMark.isPending = !1, a.cacheUserMark(e._pendingUserMark), c.cacheTextLineRectsForMark(e._pendingUserMark), m.send({
							type: s.NATIVE_ACTION_SHOW_USER_MARK_MENU,
							userMark: c.serializeSingleLocatedUserMark(e._pendingUserMark, !0)
						})), e._pendingUserMark = null, e._anchorTokenInfo = null, e._lastSelectedTokenInfo = null
					},
					createSelectionFromAnchor: function() {
						e._anchorTokenInfo && e._createSelection()
					},
					handleSelectionChange: function() {
						e._selection && (x.showSelectionHandles(e._currentPointerType !== i.mouse), m.send({
							type: s.NATIVE_EVENT_TEXT_SELECTION_CREATED,
							selection: x.serializeSelection(e._selection, !0)
						}))
					},
					resetPointerType: function() {
						e._currentPointerType = null
					},
					reset: function() {
						e._anchorTokenInfo = null, e._lastSelectedTokenInfo = null, e._pendingUserMark = null, e._currentPointerType = null, e._clearSelection()
					}
				});
				this._stateMachineService = w.interpret(o), this._stateMachineService.start()
			}
			return Object.defineProperty(t.prototype, "state", {
				get: function() {
					return this._stateMachineService.state
				},
				enumerable: !1,
				configurable: !0
			}), t.prototype._findMatchingTokenInLine = function(t, r) {
				if (this._lastSelectedTokenInfo) {
					var e = this._lastSelectedTokenInfo.calculateRect();
					if (r > e.maxY()) return d.getLastTokenInfoAfterTokenAndAbovePoint(this._lastSelectedTokenInfo, {
						x: t,
						y: r
					});
					if (r < e.top) return d.getFirstTokenInfoBeforeTokenAndBelowPoint(this._lastSelectedTokenInfo, {
						x: t,
						y: r
					})
				}
				return null
			}, t.prototype._createSelection = function() {
				this._clearSelection();
				var t = this._anchorTokenInfo;
				if (t) {
					var r = t.blockPrefix === j.BlockType.Paragraph ? t.blockId : void 0,
						e = t.blockPrefix === j.BlockType.Verse ? t.blockId : void 0,
						o = new f(r, e, t.blockWordIndex, t.blockWordIndex);
					this._selection = new h([o]), this._selection.startTokenInfo = this._selection.endTokenInfo = t, this._callbackHandler({
						type: g.TouchEventCallbackType.DrawSelection,
						selection: this._selection,
						hideSelectionHandles: this._currentPointerType === i.mouse
					});
					var a = document.getElementById(x.START_HANDLE_ID);
					a && (a.addEventListener("touchstart", this._selectionHandleTouchStart), a.addEventListener("touchmove", this._selectionHandleTouchMove), a.addEventListener("touchend", this._selectionHandleTouchEnd)), (a = document.getElementById(x.END_HANDLE_ID)) && (a.addEventListener("touchstart", this._selectionHandleTouchStart), a.addEventListener("touchmove", this._selectionHandleTouchMove), a.addEventListener("touchend", this._selectionHandleTouchEnd))
				}
			}, t.prototype._clearSelection = function() {
				if (this._selection) {
					var t = document.getElementById(x.START_HANDLE_ID);
					t && (t.removeEventListener("touchstart", this._selectionHandleTouchStart), t.removeEventListener("touchmove", this._selectionHandleTouchMove), t.removeEventListener("touchend", this._selectionHandleTouchEnd)), (t = document.getElementById(x.END_HANDLE_ID)) && (t.removeEventListener("touchstart", this._selectionHandleTouchStart), t.removeEventListener("touchmove", this._selectionHandleTouchMove), t.removeEventListener("touchend", this._selectionHandleTouchEnd)), this._callbackHandler({
						type: g.TouchEventCallbackType.ClearTextSelection,
						selection: this._selection
					}), this._selection = null
				}
			}, t.prototype._stopMediaMarkerFocusing = function() {
				this._callbackHandler({
					type: g.TouchEventCallbackType.StopMediaMarkerFocusing
				})
			}, t.prototype._updateUserMarkFromAnchorToTokenInfo = function(t) {
				var r = this._pendingUserMark;
				r.ranges = u.getRangesBetweenTokenInfos(t, this._anchorTokenInfo), this._callbackHandler({
					type: g.TouchEventCallbackType.DrawUserMark,
					userMark: r
				})
			}, t.prototype._loupePositionInfo = function(t, r) {
				return t && r ? {
					touch: {
						x: t,
						y: r
					},
					windowSize: {
						width: window.innerWidth,
						height: window.innerHeight
					}
				} : null
			}, t.prototype._updateSelectionFromEndToEnd = function() {
				var t = this._selection;
				t.ranges = u.getRangesBetweenTokenInfos(t.startTokenInfo, t.endTokenInfo), this._callbackHandler({
					type: g.TouchEventCallbackType.DrawSelection,
					selection: t,
					hideSelectionHandles: this._currentPointerType === i.mouse
				})
			}, t
		}();
	r.TextInteractionEventsHandler = S
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
		return (o = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(t, r) {
				t.__proto__ = r
			} || function(t, r) {
				for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
			})(t, r)
	}, function(t, r) {
		function e() {
			this.constructor = t
		}
		o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
	});
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.PenPanGestureRecognizer = void 0;
	var a = e(38),
		n = e(336),
		l = e(322),
		c = function(t) {
			function r() {
				var r = null !== t && t.apply(this, arguments) || this;
				return r._initialPoint = void 0, r._initialPointerId = -1, r._hasCrossedMovementThresholdOnce = !1, r._startingEvent = void 0, r
			}
			return i(r, t), r.prototype.pointerBegan = function(t) {
				this._initialPoint = n.GestureRecognizer.gesturePointFromEvent(t), this._initialPointerId = n.GestureRecognizer.pointerIdFromEvent(t), this._startingEvent = t
			}, r.prototype.pointerMoved = function(t) {
				n.GestureRecognizer.pointerIdFromEvent(t) === this._initialPointerId && this._hasCrossedMovementThreshold(t) && (t.preventDefault(), this.state === l.GestureRecognizerState.Possible ? this.updateStateWithEvent({
					type: "BEGAN"
				}, this._startingEvent) : this.state !== l.GestureRecognizerState.Began && this.state !== l.GestureRecognizerState.Changed || this.updateStateWithEvent({
					type: "MOVED"
				}, t))
			}, r.prototype.pointerEnded = function(t) {
				n.GestureRecognizer.pointerIdFromEvent(t) === this._initialPointerId && (this._hasCrossedMovementThreshold(t) ? this.updateStateWithEvent({
					type: "ENDED"
				}, t) : this.updateStateWithEvent({
					type: "FAILED"
				}, t))
			}, r.prototype.shouldHandleEvent = function(r) {
				if (!t.prototype.shouldHandleEvent.call(this, r)) return !1;
				if ("undefined" != typeof TouchEvent && r instanceof TouchEvent) {
					var e = r.changedTouches[0];
					if ("stylus" === e.touchType || "touchend" === r.type) return "touchstart" === r.type ? a.isMarkableElement(e.target) : e.identifier === this._initialPointerId
				} else if (n.GestureRecognizer.hasPointerEventSupport && r instanceof PointerEvent && ("pen" === r.pointerType || "pointerup" === r.type)) return "pointerdown" === r.type ? a.isMarkableElement(r.target) : n.GestureRecognizer.pointerIdFromEvent(r) === this._initialPointerId;
				return !1
			}, r.prototype.reset = function() {
				t.prototype.reset.call(this), this._initialPointerId = -1, this._initialPoint = void 0, this._hasCrossedMovementThresholdOnce = !1, this._startingEvent = void 0
			}, r.prototype._hasCrossedMovementThreshold = function(t) {
				if (this._hasCrossedMovementThresholdOnce) return !0;
				if (this._initialPoint) {
					var r = n.GestureRecognizer.gesturePointFromEvent(t);
					if (Math.abs(this._initialPoint.clientX - r.clientX) >= 8 || Math.abs(this._initialPoint.clientY - r.clientY) >= 8) return this._hasCrossedMovementThresholdOnce = !0, !0
				}
				return !1
			}, r
		}(n.GestureRecognizer);
	r.PenPanGestureRecognizer = c
}, function(t, r, e) {
	"use strict";
	var o;
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.TextSelectionEventsHandler = void 0;
	var i, a = e(25),
		n = e(28),
		l = e(39),
		c = e(365),
		d = e(176),
		m = e(99),
		p = e(373);
	e(360);
	e(395),
		function(t) {
			t.Possible = "possible", t.Began = "began", t.Changed = "changed", t.Ended = "ended"
		}(i || (i = {}));
	var u = p.Machine({
			id: "textSelectionMachine",
			initial: i.Possible,
			context: {},
			states: (o = {}, o[i.Possible] = {
				on: {
					CHANGE: {
						target: i.Began,
						cond: "hasSelection"
					}
				}
			}, o[i.Began] = {
				entry: "hideMenu",
				on: {
					CHANGE: i.Changed,
					END: i.Ended
				}
			}, o[i.Changed] = {
				entry: "hideMenu",
				on: {
					CHANGE: i.Changed,
					END: i.Ended
				}
			}, o[i.Ended] = {
				entry: "showMenu",
				after: {
					100: {
						target: i.Possible
					}
				}
			}, o)
		}, {
			actions: {
				hideMenu: function(t, r) {
					a.send({
						type: n.NATIVE_ACTION_HIDE_USER_MARK_MENU
					})
				},
				showMenu: function(t, r) {
					var e = window.getSelection();
					if (e && !e.isCollapsed && e.rangeCount > 0) {
						d.CurrentSelectionRange = e.getRangeAt(0).cloneRange();
						var o = new c([]),
							i = d.createTokenGroupRangeFromSelection();
						if (i) {
							var p = i.getTokenInfos();
							o.startTokenInfo = p[0], o.endTokenInfo = p[p.length - 1], o.ranges = l.getRangesBetweenTokenInfos(o.startTokenInfo, o.endTokenInfo), a.send({
								type: n.NATIVE_EVENT_TEXT_SELECTION_CREATED,
								selection: m.serializeSelection(o, !0)
							})
						}
					} else a.send({
						type: n.NATIVE_ACTION_HIDE_USER_MARK_MENU
					})
				}
			},
			guards: {
				hasSelection: function() {
					var t = window.getSelection();
					return t && !t.isCollapsed && t.rangeCount > 0
				}
			}
		}),
		g = function() {
			function t() {
				var t = this;
				this._osRequiresTimeoutHack = !0, this._handleSelectionChanged = function(r) {
					t._stateMachineService.send("CHANGE"), t._osRequiresTimeoutHack && (t._selectionEndTimer && clearTimeout(t._selectionEndTimer), t._selectionEndTimer = setTimeout((function() {
						t._stateMachineService.send("END")
					}), 400))
				}, this._handlePointerUp = function(r) {
					t._stateMachineService.send("END")
				}, this._stateMachineService = p.interpret(u), this._stateMachineService.start()
			}
			return Object.defineProperty(t.prototype, "state", {
				get: function() {
					return this._stateMachineService.state.value
				},
				enumerable: !1,
				configurable: !0
			}), t.prototype.attachEventListeners = function() {
				document.addEventListener("selectionchange", this._handleSelectionChanged), this._osRequiresTimeoutHack || (document.addEventListener("pointerup", this._handlePointerUp), document.addEventListener("mouseup", this._handlePointerUp))
			}, t.prototype.detachEventListeners = function() {
				document.removeEventListener("selectionchange", this._handleSelectionChanged), this._osRequiresTimeoutHack || (document.removeEventListener("pointerup", this._handlePointerUp), document.removeEventListener("mouseup", this._handlePointerUp))
			}, t
		}();
	r.TextSelectionEventsHandler = g
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
		return (o = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(t, r) {
				t.__proto__ = r
			} || function(t, r) {
				for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
			})(t, r)
	}, function(t, r) {
		function e() {
			this.constructor = t
		}
		o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
	});
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), r.MousePanGestureRecognizer = void 0;
	var a = e(38),
		n = e(336),
		l = e(322),
		c = function(t) {
			function r() {
				var r = null !== t && t.apply(this, arguments) || this;
				return r._initialPoint = void 0, r._initialPointerId = -1, r._hasCrossedMovementThresholdOnce = !1, r._pointerBeganEvent = void 0, r
			}
			return i(r, t), r.prototype.pointerBegan = function(t) {
				this._initialPoint = n.GestureRecognizer.gesturePointFromEvent(t), this._initialPointerId = t.pointerId, this._pointerBeganEvent = t
			}, r.prototype.pointerMoved = function(t) {
				t.pointerId === this._initialPointerId && this._hasCrossedMovementThreshold(t) && (t.preventDefault(), this.state === l.GestureRecognizerState.Possible ? this.updateStateWithEvent({
					type: "BEGAN"
				}, this._pointerBeganEvent) : this.state !== l.GestureRecognizerState.Began && this.state !== l.GestureRecognizerState.Changed || this.updateStateWithEvent({
					type: "MOVED"
				}, t))
			}, r.prototype.pointerEnded = function(t) {
				t.pointerId === this._initialPointerId && (this._hasCrossedMovementThreshold(t) ? this.updateStateWithEvent({
					type: "ENDED"
				}, t) : this.updateStateWithEvent({
					type: "FAILED"
				}, t))
			}, r.prototype.shouldHandleEvent = function(r) {
				return !!(t.prototype.shouldHandleEvent.call(this, r) && n.GestureRecognizer.hasPointerEventSupport && r instanceof PointerEvent && "mouse" === r.pointerType) && ("pointerdown" === r.type ? a.isMarkableElement(r.target) : r.pointerId === this._initialPointerId)
			}, r.prototype.reset = function() {
				t.prototype.reset.call(this), this._initialPointerId = -1, this._initialPoint = void 0, this._hasCrossedMovementThresholdOnce = !1, this._pointerBeganEvent = void 0
			}, r.prototype._hasCrossedMovementThreshold = function(t) {
				return !!this._hasCrossedMovementThresholdOnce || !(!this._initialPoint || !(Math.abs(this._initialPoint.clientX - t.clientX) >= 8 || Math.abs(this._initialPoint.clientY - t.clientY) >= 8)) && (this._hasCrossedMovementThresholdOnce = !0, !0)
			}, r
		}(n.GestureRecognizer);
	r.MousePanGestureRecognizer = c
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(2),
		n = function(t) {
			function r() {
				return null !== t && t.apply(this, arguments) || this
			}
			return i(r, t), r.prototype.render = function() {
				return a.createElement("div", {
					style: {
						position: "absolute",
						visibility: "hidden",
						width: "0px",
						height: "0px"
					}
				}, a.createElement("div", {
					style: {
						fontFamily: "WtFootnote",
						fontWeight: 300
					}
				}, "."), a.createElement("div", {
					style: {
						fontFamily: "WtClearText",
						fontWeight: 500
					}
				}, "."))
			}, r
		}(a.Component);
	t.exports = n
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(2),
		n = e(457),
		l = e(468),
		c = e(470),
		d = e(333),
		m = e(8),
		p = e(501),
		u = (e(385), e(351)),
		g = e(30),
		s = function(t) {
			function r(r) {
				var e = t.call(this, r) || this;
				e._onSectionChange = function() {
					e.setState({
						section: d.getSelectedSection(),
						previousSection: e.state.section,
						animate: d.getAnimate()
					})
				}, e._onDisplaySettingsChange = function() {
					e.state.appearance !== g.getAppearance() && e.setState({
						appearance: g.getAppearance()
					})
				};
				var o = d.getSelectedSection();
				return e.state = {
					section: o,
					previousSection: o,
					animate: m.STUDY_PANE_ANIMATE_NONE
				}, e
			}
			return i(r, t), r.prototype.componentDidMount = function() {
				d.addSectionChangeListener(this._onSectionChange), g.addChangeListener(this._onDisplaySettingsChange)
			}, r.prototype.componentWillUnmount = function() {
				d.removeSectionChangeListener(this._onSectionChange), g.removeChangeListener(this._onDisplaySettingsChange)
			}, r.prototype.render = function() {
				var t = this.state.section === m.StudySection.Gems,
					r = this.state.section === m.StudySection.Supplementary,
					e = this.state.section === m.StudySection.Marginals,
					o = "jwl-study-pane-item background",
					i = this.state.animate === m.STUDY_PANE_ANIMATE_IN && r && this.state.previousSection !== m.StudySection.Supplementary || this.state.animate !== m.STUDY_PANE_ANIMATE_NONE && this.state.previousSection === m.StudySection.Supplementary || t ? "slide" : "",
					d = this.state.animate === m.STUDY_PANE_ANIMATE_IN && e && this.state.previousSection !== m.StudySection.Marginals || this.state.animate === m.STUDY_PANE_ANIMATE_OUT && this.state.previousSection === m.StudySection.Marginals || t ? "slide" : "",
					u = r,
					g = o;
				return this.state.section === m.StudySection.Supplementary && this.state.section === this.state.previousSection && this.state.animate !== m.STUDY_PANE_ANIMATE_NONE ? (i = this.state.animate === m.STUDY_PANE_ANIMATE_IN ? "slideIn" : "slideOut", u = this._supplementaryToggle, g = this._supplementaryToggle ? o : o + " second", this._supplementaryToggle = !this._supplementaryToggle) : this._supplementaryToggle = !1, a.createElement("div", {
					id: "__secondary-pane",
					className: "secondary-pane"
				}, a.createElement("div", {
					id: "secondary"
				}, a.createElement(p.CSSTransition, {
					classNames: "fade",
					timeout: 600,
					in: t
				}, a.createElement("div", {
					id: "jwl-gems-pane",
					className: t ? o + " note-editing-scroll-element " : "jwl-study-pane-item background hidden"
				}, a.createElement(n, {
					appearance: this.state.appearance
				}))), a.createElement(p.CSSTransition, {
					classNames: d,
					timeout: 600,
					in: e
				}, a.createElement("div", {
					id: "jwl-marginals-pane",
					className: e ? o : "jwl-study-pane-item background hidden"
				}, a.createElement(c, null))), a.createElement(p.CSSTransition, {
					classNames: i,
					timeout: 600,
					in: u
				}, a.createElement("div", {
					id: "jwl-supplementary-pane",
					className: r ? g : "jwl-study-pane-item background hidden"
				}, a.createElement(l, {
					appearance: this.state.appearance
				})))))
			}, r.prototype.componentDidUpdate = function(t, r) {
				u.setAppearance(document.body, this.state.appearance)
			}, r
		}(a.PureComponent);
	t.exports = s
}, function(t, r, e) {
	"use strict";
	var o, i, a = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		n = e(2),
		l = e(26),
		c = e(333),
		d = e(458),
		m = e(30),
		p = e(350),
		u = e(25),
		g = e(50),
		s = e(35),
		b = e(8),
		w = e(28),
		f = e(177),
		h = e(465);
	! function(t) {
		t[t.Content = 0] = "Content", t[t.FontSize = 1] = "FontSize"
	}(i || (i = {}));
	var j = function(t) {
		function r(r) {
			var e = t.call(this, r) || this;
			return e._updateTouchTargetSelection = function() {
				var t = void 0,
					r = c.getSelectedFootnoteID(),
					o = c.getSelectedEndnoteID(),
					i = c.getSelectedMarginalID(),
					a = c.getSelectedVerseLabelID(),
					n = c.getSelectedParagraphLabelID(),
					d = c.getSelectedPubReferenceVerseNumber();
				if ("number" == typeof r ? t = "#fn" + r : "number" == typeof o ? t = "#en" + o : "number" == typeof i ? t = "#mar" + i : "number" == typeof a ? t = "#lv" + a : "number" == typeof n ? t = "#lp" + n : "number" == typeof d && (t = "#pubRef" + d), [].map.call(l.findDOMNode(e).querySelectorAll(".selected"), (function(t) {
						t.classList.remove("selected")
					})), t) {
					var m = l.findDOMNode(e).querySelector(t);
					m && m.classList.add("selected")
				}
			}, e._rsgDownloadBoxOnDownload = function() {
				u.send({
					type: w.NATIVE_ACTION_DOWNLOAD_RESEARCH_GUIDE
				})
			}, e._rsgDownloadBoxOnClose = function() {
				u.send({
					type: w.NATIVE_ACTION_DISMISS_RESEARCH_GUIDE_DOWNLOAD_BOX
				}), c.setShowRsgDownloadBox(!1)
			}, e._onEmptySpaceClick = function() {
				s.clearFocusedGem()
			}, e._onChange = function() {
				var t = !1;
				"number" == typeof c.getHighlightedGemIndex() && (t = !0), e.setState({
					gemContent: c.getGemContent(),
					showRsgDownloadBox: c.getShowRsgDownloadBox(),
					hasFocusedGem: t,
					currentEditingNoteId: c.getCurrentEditingNoteId(),
					selectedPubReferenceVerseNumber: c.getSelectedPubReferenceVerseNumber()
				})
			}, e._onDisplaySettingsChange = function() {
				e.setState({
					fontSize: m.getFontSize(),
					bottomPadding: m.getBottomPadding(),
					localizedStrings: m.getLocalizedStrings()
				})
			}, e.state = {
				fontSize: m.getFontSize(),
				gemContent: c.getGemContent(),
				showRsgDownloadBox: c.getShowRsgDownloadBox()
			}, e._linkTapHandler = new p, e
		}
		return a(r, t), r.prototype.componentDidMount = function() {
			m.addChangeListener(this._onDisplaySettingsChange), c.addChangeListener(this._onChange)
		}, r.prototype.componentWillUnmount = function() {
			m.removeChangeListener(this._onDisplaySettingsChange), c.removeChangeListener(this._onChange)
		}, r.prototype.componentDidUpdate = function(t, r) {
			var e = this,
				o = [];
			r.gemContent !== this.state.gemContent && o.push(i.Content), r.fontSize !== this.state.fontSize && o.push(i.FontSize);
			var a = -1 !== o.indexOf(i.Content),
				n = l.findDOMNode(this);
			this._updateTouchTargetSelection();
			c.getScrollPositionOnce(b.StudySection.Gems);
			var d = void 0,
				m = void 0;
			this.state.gemContent && (d = this.state.gemContent, m = this.state.gemContent);
			var p = c.getScrollTargetDescriptorOnce();
			if (this._elementToScroll) this._scrollElementIntoView(this._elementToScroll, this._scrollOffset, !1);
			else if (p && p.selector) {
				var g = document.querySelector(p.selector);
				g && this._scrollElementIntoView(g, p.offset, !1)
			} else {
				if (null === this.state.gemContent || d && (d.bibleBook !== this._previousBibleBook || d.bibleChapter !== this._previousBibleChapter) || m && m.documentId !== this._previousDocumentId) {
					this._elementToScroll = null, this._scrollOffset = null;
					var s = document.getElementById("jwl-gems-pane");
					s && (s.scrollTop = 0)
				}
			}
			this._previousBibleBook = d ? d.bibleBook : void 0, this._previousBibleChapter = d ? d.bibleChapter : void 0, this._previousDocumentId = m ? m.documentId : void 0, a && [].map.call(n.querySelectorAll("a"), (function(t) {
				t.addEventListener("click", e._linkTapHandler.linkTapHandler)
			})), a && u.send({
				type: w.NATIVE_EVENT_STUDY_CONTENT_LOADED,
				handleNatively: !0
			})
		}, r.prototype._scrollElementIntoView = function(t, r, e) {
			var o = this;
			"SPAN" === t.tagName && t.className.indexOf("label") && (t = t.parentElement.parentElement), !e && this._isElementInView(t) || window.setTimeout((function() {
				var e = g.ancestorElementWithClass(t, "note-editing-scroll-element");
				if (e)
					if ("number" != typeof r && (r = 80), e.classList && e.classList.contains("hidden")) o._elementToScroll = t, o._scrollOffset = r;
					else {
						o._elementToScroll = null, o._scrollOffset = null, t.scrollIntoView();
						var i = e.scrollTop;
						e.scrollHeight - i - r >= window.innerHeight && (e.scrollTop -= r)
					}
			}), 300)
		}, r.prototype._isElementInView = function(t) {
			var r = t.getBoundingClientRect(),
				e = window.innerHeight || document.documentElement.clientHeight,
				o = window.innerWidth || document.documentElement.clientWidth;
			return r.top >= 0 && e - r.top > r.height && r.left >= 0 && r.left <= o
		}, r.prototype.render = function() {
			var t = this.state.gemContent,
				r = this.state.localizedStrings || {},
				e = [],
				o = "",
				i = "",
				a = "gems-pane ",
				l = 0,
				m = 100;
			this.state.bottomPadding && (l = this.state.bottomPadding);
			var p = n.createElement("div", {
				id: "__bottom-spacer",
				style: {
					display: "block",
					height: l + "px"
				}
			});
			if (t) {
				var u = c.getHighlightedGemIndex();
				if (t.language) {
					var g = t.language.mepsSymbol,
						s = t.language.script;
					o = t.language.dir, i = t.language.ietfSymbol, a += "jwac ml-" + g + " dir-" + o + " ms-" + s
				}
				if (this.state.fontSize && (m = this.state.fontSize), t.gems && t.gems.length > 0)
					for (var b in t.gems) {
						var w = t.gems[b],
							j = "gem-" + w.type;
						"p" === w.type ? j += w.paragraph : j += w.verse;
						var x = parseInt(b, 10);
						e.push(n.createElement(d, {
							gem: w,
							key: j,
							appearance: this.props.appearance,
							firstItem: 0 === x,
							highlighted: u === x,
							currentEditingNoteId: this.state.currentEditingNoteId,
							selectedPubReferenceVerseNumber: this.state.selectedPubReferenceVerseNumber,
							bibleCitationSeparator: t.bibleCitationSeparator
						}))
					}
			}
			0 === e.length && e.push(n.createElement("div", {
				className: "no_data_message",
				key: "gemspane-no-data-container"
			}, r[f.message_no_study_content])), this.state.hasFocusedGem && (a += " hasHighlight");
			var y = this.state.showRsgDownloadBox ? n.createElement(h, {
				onClose: this._rsgDownloadBoxOnClose,
				onDownload: this._rsgDownloadBoxOnDownload,
				title: r[f.label_research_guide],
				description: r[f.message_download_research_guide],
				downloadButtonText: r[f.action_download]
			}) : null;
			return n.createElement("div", {
				id: "__gems-pane",
				className: a,
				onClick: this._onEmptySpaceClick,
				dir: o,
				lang: i
			}, n.createElement("div", {
				style: {
					fontSize: m + "%"
				}
			}, y, e, p))
		}, r
	}(n.Component);
	t.exports = j
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(2),
		n = e(380),
		l = e(459),
		c = e(396),
		d = e(397),
		m = e(460),
		p = e(398),
		u = e(462),
		g = e(463),
		s = e(399),
		b = e(464),
		w = e(400),
		f = e(35),
		h = function(t) {
			function r(r) {
				return t.call(this, r) || this
			}
			return i(r, t), r.prototype.render = function() {
				var t = this;
				if (!this.props.gem) return a.createElement("ul", null);
				var r = this.props.gem,
					e = null,
					o = null,
					i = null,
					h = null,
					j = null,
					x = null,
					y = null,
					S = null,
					v = null,
					O = null,
					k = "jwl-gem";
				if (r.type === n.TYPE_VERSE || r.type === n.TYPE_PARAGRAPH || r.type === n.TYPE_LOCATION_NOTES || r.type === n.TYPE_LOCATION_OUTLINES || r.type === n.TYPE_CAPTION_CONTENT || r.type === n.TYPE_ALL_MARGINALS) {
					var E = null,
						C = null,
						A = null,
						T = null,
						I = null,
						N = null,
						_ = null,
						R = null,
						M = null;
					if (r.type === n.TYPE_VERSE) _ = "lv" + (Y = r).verse, Y.commentaries && (E = Y.commentaries), Y.multimedia && (C = Y.multimedia), Y.footnotes && (A = Y.footnotes), Y.notes && (N = Y.notes), Y.pubReferences && (M = Y.pubReferences);
					else if (r.type === n.TYPE_PARAGRAPH) {
						var L = r;
						_ = "lp" + L.paragraph, L.commentaries && (E = L.commentaries), L.multimedia && (C = L.multimedia), L.footnotes && (A = L.footnotes), L.endnotes && (T = L.endnotes), L.notes && (N = L.notes)
					} else if (r.type === n.TYPE_LOCATION_OUTLINES) {
						var D = r;
						D.outlines && (I = D.outlines)
					} else if (r.type === n.TYPE_LOCATION_NOTES) {
						var P = r;
						P.notes && (N = P.notes)
					} else if (r.type === n.TYPE_CAPTION_CONTENT) {
						var z = r;
						z.captionContent && (R = z.captionContent)
					} else if (r.type === n.TYPE_ALL_MARGINALS) {
						var H = r;
						H && (v = a.createElement("li", null, a.createElement("div", {
							className: "jwl-all-marginals html5"
						}, a.createElement(l, {
							appearance: this.props.appearance,
							label: H.allMarginalsLabel
						}))))
					}
					if (R)(G = []).push(a.createElement(b, {
						captionContent: R
					})), S = a.createElement("li", null, a.createElement("div", {
						className: "jwl-caption-content html5"
					}, G));
					if (I && I.length > 0) {
						var G = [];
						for (var B in I) {
							var U = I[B];
							G.push(a.createElement(c, {
								outline: U
							}))
						}
						y = a.createElement("li", null, a.createElement("div", {
							className: "jwl-study-outlines html5"
						}, G))
					}
					if (E && E.length > 0) {
						G = [];
						for (var B in E) {
							var W = E[B];
							G.push(a.createElement(d, {
								commentary: W
							}))
						}
						e = a.createElement("li", null, a.createElement("div", {
							className: "commentaries html5"
						}, G))
					}
					if (C && C.length > 0) {
						G = [];
						for (var B in C) {
							var F = C[B];
							G.push(a.createElement(p, {
								multimedia: F
							}))
						}
						o = a.createElement("li", null, a.createElement("div", {
							className: "jwl-study-multimedia html5"
						}, G))
					}
					if (A && A.length > 0) {
						G = [];
						for (var B in A) {
							var V = A[B];
							G.push(a.createElement(u, {
								footnote: V,
								key: "fn" + V.id
							}))
						}
						i = a.createElement("li", null, a.createElement("div", {
							className: "footnotes html5"
						}, G))
					}
					if (T && T.length > 0) {
						G = [];
						for (var B in T) {
							var K = T[B];
							G.push(a.createElement(g, {
								endnote: K,
								key: "en" + K.id
							}))
						}
						h = a.createElement("li", null, a.createElement("div", {
							className: "endnotes html5"
						}, G))
					}
					if (r.type === n.TYPE_VERSE) {
						var Y, q = (Y = r).marginals;
						if (q && q.length > 0) {
							G = [];
							for (var B in q) {
								var Q = q[B];
								G.push(a.createElement(s, {
									marginal: Q,
									key: "mar" + Q.id,
									citationSeparator: this.props.bibleCitationSeparator
								}))
							}
							j = a.createElement("li", null, a.createElement("div", {
								className: "crossrefs article publication html5 pub-nwt"
							}, G))
						}
						if (M && M.length > 0) {
							G = [];
							var J = function(t) {
									var r = M[t],
										e = Y.verse;
									G.push(a.createElement(m, {
										pubReference: r,
										appearance: X.props.appearance,
										verseNumber: e,
										selectPublicationReference: function() {
											return f.selectPublicationReference(e)
										}
									}))
								},
								X = this;
							for (var B in M) J(B);
							O = a.createElement("li", null, a.createElement("div", {
								className: "pubReferences html5"
							}, G))
						}
					}
					if (N && N.length > 0) {
						x = a.createElement("li", null, a.createElement("div", {
							className: "notes html5"
						}, N.map((function(r) {
							return a.createElement(w, {
								note: r,
								autoFocusTextAreas: !0,
								key: "note" + r.id,
								fullScreen: !1,
								inEditMode: t.props.currentEditingNoteId === r.id
							})
						}))))
					}
					this.props.firstItem && (k += " jwl-first-gem"), this.props.highlighted && (k += " highlight"), k += " noIndent noMarker";
					var Z = null;
					return r.label && r.label.length > 0 && (Z = a.createElement("h3", {
						className: "jwl-gem-label",
						id: _ && _.length > 0 ? _ : ""
					}, r.label)), a.createElement("ul", {
						className: k
					}, Z, v, S, y, e, o, i, h, j, O, x)
				}
				return r.type === n.TYPE_MESSAGE ? a.createElement("ul", {
					className: k
				}, a.createElement("li", null, r.content)) : a.createElement("ul", null)
			}, r
		}(a.PureComponent);
	t.exports = h
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(2),
		n = e(35),
		l = e(69),
		c = function(t) {
			function r(r) {
				var e = t.call(this, r) || this;
				return e.handleClick = function(t) {
					n.selectAllMarginals(), t.stopPropagation()
				}, e
			}
			return i(r, t), r.prototype.render = function() {
				var t = this.props.label;
				if (t) {
					var r = l.getMarginalImage(),
						e = a.createElement("img", {
							src: r,
							className: "jwl-all-marginals-image"
						});
					return a.createElement("div", null, e, " ", a.createElement("a", {
						className: "allMarginals",
						onClick: this.handleClick,
						dangerouslySetInnerHTML: {
							__html: t
						}
					}))
				}
				return a.createElement("div", null)
			}, r
		}(a.Component);
	t.exports = c
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(2),
		n = e(25),
		l = e(28),
		c = e(69),
		d = function(t) {
			function r(r) {
				var e = t.call(this, r) || this;
				return e.handleLinkClick = function(t) {
					var r = e.props.pubReference;
					e.props.selectPublicationReference(), r && n.send({
						type: l.NATIVE_ACTION_REQUEST_PUBLICATION_REFERENCE,
						scroll: !0,
						verse: r.verse,
						sourcePubSymbol: r.sourcePubSymbol,
						sourceMepsLanguage: r.sourceMepsLanguage,
						sourceIssueTagNumber: r.sourceIssueTagNumber
					}), t.stopPropagation()
				}, e.handleBackgroundClick = function(t) {
					e.props.selectPublicationReference(), t.stopPropagation()
				}, e
			}
			return i(r, t), r.prototype.render = function() {
				if (this.props.pubReference) {
					var t = this.props.pubReference,
						r = c.getReferenceWorksImage(),
						e = void 0;
					return r && (e = a.createElement("img", {
						src: r,
						className: "jwl-publication-reference-image"
					})), a.createElement("ul", {
						id: "pubRef" + this.props.verseNumber,
						className: "jwl-publication-reference-header noIndent noMarker",
						onClick: this.handleBackgroundClick
					}, a.createElement("li", null, e, a.createElement("span", {
						className: "contents jwl-publication-reference",
						dangerouslySetInnerHTML: {
							__html: t.title
						},
						onClick: this.handleLinkClick
					})))
				}
				return a.createElement("div", null)
			}, r
		}(a.Component);
	t.exports = d
}, function(t, r, e) {
	"use strict";
	var o;
	! function(t) {
		t.TYPE_VIDEO = "v", t.TYPE_AUDIO = "a", t.TYPE_IMAGE = "i", t.TYPE_NONE = "n"
	}(o || (o = {})), t.exports = o
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(2),
		n = e(35),
		l = function(t) {
			function r(r) {
				var e = t.call(this, r) || this;
				return e.handleClick = function(t) {
					n.selectFootnote(e.props.footnote.id), t.stopPropagation()
				}, e
			}
			return i(r, t), r.prototype.render = function() {
				if (this.props.footnote) {
					var t = this.props.footnote;
					return a.createElement("ul", {
						onClick: this.handleClick,
						id: "fn" + t.id,
						className: "noMarker noIndent"
					}, a.createElement("li", {
						className: "marker"
					}, t.marker), a.createElement("li", {
						className: "contents",
						dangerouslySetInnerHTML: {
							__html: t.content
						}
					}))
				}
				return a.createElement("ul", null)
			}, r
		}(a.Component);
	t.exports = l
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(2),
		n = e(35),
		l = function(t) {
			function r(r) {
				var e = t.call(this, r) || this;
				return e.handleClick = function(t) {
					n.selectEndnote(e.props.endnote.id), t.stopPropagation()
				}, e
			}
			return i(r, t), r.prototype.render = function() {
				if (this.props.endnote) {
					var t = this.props.endnote,
						r = (t.content || "").replace('class="groupEndnote"', "");
					return a.createElement("ul", {
						onClick: this.handleClick,
						id: "en" + t.id,
						className: "noMarker noIndent"
					}, a.createElement("li", {
						className: "contents",
						dangerouslySetInnerHTML: {
							__html: r
						}
					}))
				}
				return a.createElement("ul", null)
			}, r
		}(a.Component);
	t.exports = l
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(2),
		n = function(t) {
			function r(r) {
				return t.call(this, r) || this
			}
			return i(r, t), r.prototype.render = function() {
				var t = this.props.captionContent;
				if (t && t.content) {
					var r = void 0;
					return t.title && (r = a.createElement("li", null, a.createElement("h3", {
						className: "title",
						dangerouslySetInnerHTML: {
							__html: t.title
						}
					}))), a.createElement("ul", {
						id: "captionContent",
						className: "cc noIndent noMarker",
						style: {
							display: "block"
						}
					}, r, a.createElement("li", {
						className: "contents caption"
					}, a.createElement("div", {
						className: "cc",
						dangerouslySetInnerHTML: {
							__html: t.content
						}
					})))
				}
				return a.createElement("ul", null)
			}, r
		}(a.Component);
	t.exports = n
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(2),
		n = e(69);
	e(466);
	var l = function(t) {
		function r(r) {
			var e = t.call(this, r) || this;
			return e.onDownload = function() {
				e.setState({
					isButtonDisabled: !0
				}), e.props.onDownload(), setTimeout((function() {
					return e.setState({
						isButtonDisabled: !1
					})
				}), 2e3)
			}, e.onClose = function() {
				e.props.onClose()
			}, e.state = {
				isButtonDisabled: !1
			}, e
		}
		return i(r, t), r.prototype.render = function() {
			return a.createElement("div", {
				className: "research-guide-download-box-wrapper"
			}, a.createElement("div", null, a.createElement("img", {
				src: n.getRSGIcon(),
				className: "rsg-icon"
			}), a.createElement("span", {
				className: "title"
			}, this.props.title), a.createElement("img", {
				src: n.getXIcon(),
				onClick: this.onClose,
				className: "close-button"
			})), a.createElement("p", null, this.props.description), a.createElement("button", {
				disabled: this.state.isButtonDisabled,
				onClick: this.onDownload,
				className: "download-button"
			}, this.props.downloadButtonText))
		}, r
	}(a.Component);
	t.exports = l
}, function(t, r, e) {
	var o = e(33),
		i = e(467);
	"string" == typeof(i = i.__esModule ? i.default : i) && (i = [
		[t.i, i, ""]
	]);
	var a = {
		insert: "head",
		singleton: !1
	};
	o(i, a);
	t.exports = i.locals || {}
}, function(t, r, e) {
	"use strict";
	e.r(r);
	var o = e(11),
		i = e.n(o)()(!1);
	i.push([t.i, ".research-guide-download-box-wrapper{background-color:transparent;padding:20px;border-bottom:1px solid #cfcfcf}.research-guide-download-box-wrapper .title{font-weight:bold;vertical-align:middle}.research-guide-download-box-wrapper .close-button{width:1.5em;height:1.5em;float:right;vertical-align:middle;background-color:transparent;border:transparent}.research-guide-download-box-wrapper .download-button{border:none;background-color:#757575;color:white;padding:5px 20px}.research-guide-download-box-wrapper .rsg-icon{width:1.5em;height:1.5em;margin-right:0.7em;vertical-align:middle}\n", ""]), r.default = i
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(2),
		n = e(26),
		l = e(333),
		c = e(396),
		d = e(469),
		m = e(30),
		p = e(379),
		u = e(25),
		g = e(350),
		s = e(8),
		b = e(177),
		w = function(t) {
			function r(r) {
				var e = t.call(this, r) || this;
				return e._onChange = function() {
					e.setState({
						supplementaryContent: l.getSupplementaryContent(),
						animate: l.getSupplementaryAnimate()
					})
				}, e._onDisplaySettingsChange = function() {
					e.state.fontSize !== m.getFontSize() && e.setState({
						fontSize: m.getFontSize()
					})
				}, e._handleActionClick = function(t) {
					var r = e.state.supplementaryContent;
					if (r && r.type === p.TYPE_ACTION_CONTENT) {
						var o = r;
						o.action && u.send({
							type: o.action.type,
							jwPubLink: o.jwPubLink
						})
					}
				}, e.state = {
					fontSize: m.getFontSize(),
					supplementaryContent: l.getSupplementaryContent(),
					animate: l.getSupplementaryAnimate()
				}, e._linkTapHandler = new g, e
			}
			return i(r, t), r.prototype.componentDidMount = function() {
				m.addChangeListener(this._onDisplaySettingsChange), l.addChangeListener(this._onChange)
			}, r.prototype.componentWillUnmount = function() {
				m.removeChangeListener(this._onDisplaySettingsChange), l.removeChangeListener(this._onChange)
			}, r.prototype.componentDidUpdate = function(t, r) {
				var e = this,
					o = !1;
				r.supplementaryContent !== this.state.supplementaryContent && (o = !0);
				var i = n.findDOMNode(this),
					a = 100;
				this.state.fontSize && (a = this.state.fontSize), [].map.call(i.querySelectorAll("a"), (function(t) {
					t.addEventListener("click", e._linkTapHandler.linkTapHandler)
				})), [].map.call(i.querySelectorAll(".scalableUI"), (function(t) {
					t.style.fontSize = a + "%"
				}));
				var c = document.getElementById("jwl-supplementary-pane");
				if (o) c && (c.scrollTop = 0);
				else {
					var d = l.getScrollPositionOnce(s.StudySection.Supplementary);
					if (d)
						if (c) {
							var m = c.scrollHeight * d;
							c.scrollTop = m
						}
				}
			}, r.prototype.render = function() {
				var t = this.state.supplementaryContent,
					r = [];
				if (t)
					if (t.type === p.TYPE_OUTLINE)
						for (var e in t.items) {
							var o = {
									content: (n = t.items[e]).outline.content,
									showChildren: !0,
									children: n.outline.children
								},
								i = "item-" + t.type + "-" + e;
							r.push(a.createElement("div", {
								className: "jwl-study-outlines"
							}, a.createElement(c, {
								outline: o,
								language: n.language,
								key: i
							})))
						} else if (t.type === p.TYPE_CONTENT || t.type === p.TYPE_ACTION_CONTENT)
							if (0 === t.items.length) r.push(a.createElement("div", {
								className: "no_data_message scalableUI"
							}, m.getLocalizedString(b.messages_help_download_bibles)));
							else {
								for (var e in t.items) {
									var n;
									i = "item-" + t.type + "-" + e;
									null != (n = t.items[e]) && r.push(a.createElement(d, {
										appearance: this.props.appearance,
										supplementary: n,
										key: i
									}))
								}
								if (t.type === p.TYPE_ACTION_CONTENT) {
									var l = t;
									if (l.action) {
										var u = "",
											g = "",
											s = "";
										if (l.action.language) {
											var w = l.action.language.mepsSymbol,
												f = l.action.language.script;
											u = l.action.language.dir, g = l.action.language.ietfSymbol, s = "ml-" + w + " dir-" + u + " ms-" + f
										}
										r.push(a.createElement("div", {
											className: s,
											dir: u,
											lang: g
										}, a.createElement("div", {
											className: "buttonContainer",
											style: {
												paddingBottom: "14px"
											}
										}, a.createElement("div", {
											className: "button",
											id: "customize_bible_set_btn",
											onClick: this._handleActionClick
										}, l.action.label))))
									}
								}
							}
				else r.push(a.createElement("div", {
					className: "no_data_message scalableUI"
				}, m.getLocalizedString(b.message_tap_link)));
				return a.createElement("div", {
					id: "__supplementary-pane",
					className: "supplementary-pane"
				}, r)
			}, r
		}(a.Component);
	t.exports = w
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(2),
		n = e(367),
		l = e(69),
		c = e(30),
		d = e(397),
		m = e(398),
		p = e(177),
		u = function(t) {
			function r(r) {
				return t.call(this, r) || this
			}
			return i(r, t), r.prototype.render = function() {
				if (this.props.supplementary) {
					var t = this.props.supplementary,
						r = "pub-" + t.pubSymbol,
						e = "",
						o = "",
						i = t.content || "",
						u = t.type === n.TYPE_BIBLE_CITATION;
					if (t.language) {
						var g = t.language.mepsSymbol,
							s = t.language.script;
						e = t.language.dir, o = t.language.ietfSymbol, r += " jwac ml-" + g + " dir-" + e + " ms-" + s
					}
					t.hideImages && (r += " no-image");
					var b = "article bibleCitation html5 scalableUI " + r,
						w = "article publication html5 scalableUI " + r,
						f = "contents";
					t.type === n.TYPE_REFERENCE ? f += " fullDocument sb" : f += " unstyled";
					var h = [];
					if (t.header) {
						var j = t.header.subtitle && t.header.subtitle.length > 0 ? a.createElement("span", {
								className: "jwl-extraction-subtitle",
								dangerouslySetInnerHTML: {
									__html: t.header.subtitle
								}
							}) : null,
							x = void 0;
						if (!j && t.header.headerIcon) {
							var y = l.getHeaderIcon(t.header.headerIcon);
							y && (x = a.createElement("img", {
								src: y,
								className: "jwl-extraction-header-icon"
							}))
						}
						var S = x ? "jwl-extraction-title-with-icon" : "jwl-extraction-title",
							v = c.isInDarkMode() ? "studypane_chevron_dark.png" : "studypane_chevron.png",
							O = l.imageSourceWithOptimalResolution("./images/" + v);
						h.push(a.createElement("a", {
							className: "cn",
							href: t.header.uri,
							key: "supplementary-header-element"
						}, a.createElement("div", {
							className: "jwl-reference-header jwl-extraction-header",
							dir: "ltr"
						}, a.createElement("div", {
							className: "jwl-extraction-title-container"
						}, a.createElement("div", {
							className: "jwl-extraction-image",
							style: {
								backgroundImage: "url('" + (t.header.imageUrl || "") + "')"
							}
						}), x, a.createElement("div", {
							className: "jwl-extraction-flex-container"
						}, a.createElement("span", {
							className: S,
							dangerouslySetInnerHTML: {
								__html: t.header.title
							}
						}), j)), t.header.showNavigateChevron && t.header.uri ? a.createElement("div", {
							className: "jwl-extraction-chevron",
							style: {
								backgroundImage: "url('" + O + "')"
							}
						}) : null))), u && !t.header.uri && (i = c.getLocalizedString(p.message_verse_not_present))
					}
					h.push(a.createElement("ul", {
						key: "supplementary-content-element",
						className: "noIndent noMarker"
					}, a.createElement("li", {
						className: f
					}, a.createElement("article", {
						className: u ? b : w,
						dir: e,
						lang: o,
						role: "article",
						"data-uri-prefix": "",
						dangerouslySetInnerHTML: {
							__html: i
						}
					}))));
					var k = t;
					if (k) {
						var E = w,
							C = [];
						if (k.commentaries && k.commentaries.length > 0)
							for (var A in k.commentaries) {
								var T = k.commentaries[A];
								null != T && C.push(a.createElement(d, {
									commentary: T,
									key: "commentary-" + A
								}))
							}
						if (k.multimedia && k.multimedia.length > 0)
							for (var A in k.multimedia) {
								var I = k.multimedia[A];
								null != I && C.push(a.createElement(m, {
									multimedia: I,
									key: "multimedia-" + A
								}))
							}
						h.push(a.createElement("div", {
							className: E,
							key: "supplementary-rich-content-element"
						}, C))
					}
					return a.createElement("div", {
						className: "jwl-extraction-item " + r,
						"data-pubsymbol": t.pubSymbol,
						"data-publanguage": t.language.mepsLanguage,
						"data-pubissue": t.issueTagNumber
					}, h)
				}
				return a.createElement("div", null)
			}, r
		}(a.Component);
	t.exports = u
}, function(t, r, e) {
	"use strict";
	var o, i = this && this.__extends || (o = function(t, r) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				})(t, r)
		}, function(t, r) {
			function e() {
				this.constructor = t
			}
			o(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
		}),
		a = e(2),
		n = e(26),
		l = e(399),
		c = e(333),
		d = e(30),
		m = e(321),
		p = e(69),
		u = e(177),
		g = function(t) {
			function r(r) {
				var e = t.call(this, r) || this;
				return e._onChange = function() {
					e.setState({
						marginalGroups: c.getMarginalGroups()
					})
				}, e._onDisplaySettingsChange = function() {
					e.setState({
						fontSize: d.getFontSize()
					})
				}, e._getClassificationTitle = function(t) {
					switch (t) {
						case m.TYPE_PARALLEL_ACCOUNT:
							return d.getLocalizedString(u.label_marginal_parallel_account);
						case m.TYPE_QUOTATION:
							return d.getLocalizedString(u.label_marginal_quotation);
						case m.TYPE_UNCLASSIFIED:
						case m.TYPE_INVALID:
						default:
							return d.getLocalizedString(u.label_marginal_general)
					}
				}, e._updateTouchTargetSelection = function() {
					[].map.call(n.findDOMNode(e).querySelectorAll(".selected"), (function(t) {
						t.classList.remove("selected")
					}));
					var t = c.getSelectedMarginalID(),
						r = c.getSelectedMarginalClass();
					if ("number" == typeof t && "number" == typeof r) {
						var o = "#mar" + t + "-" + r,
							i = n.findDOMNode(e).querySelector(o);
						i && i.classList.add("selected")
					}
				}, e.state = {
					marginalGroups: c.getMarginalGroups(),
					fontSize: d.getFontSize()
				}, e
			}
			return i(r, t), r.prototype.componentDidMount = function() {
				c.addChangeListener(this._onChange), d.addChangeListener(this._onDisplaySettingsChange)
			}, r.prototype.componentWillUnmount = function() {
				c.removeChangeListener(this._onChange), d.removeChangeListener(this._onDisplaySettingsChange)
			}, r.prototype.componentDidUpdate = function() {
				this._updateTouchTargetSelection()
			}, r.prototype.render = function() {
				var t = c.getGemContent(),
					r = this.state.marginalGroups,
					e = [];
				if (r) {
					var o = [m.TYPE_PARALLEL_ACCOUNT, m.TYPE_QUOTATION, m.TYPE_UNCLASSIFIED, m.TYPE_INVALID];
					for (var i in o) {
						var n = r[o[i]];
						if (n && n.length > 0) {
							var d = p.getMarginalClassificationImage(n[0].classification),
								u = void 0;
							for (var g in d && (u = a.createElement("img", {
									src: d,
									className: "jwl-marginal-classification-image"
								})), e.push(a.createElement("h3", {
									className: "jwl-marginal-classification-header"
								}, u, a.createElement("span", null, this._getClassificationTitle(n[0].classification)))), n) {
								var s = n[g];
								e.push(a.createElement(l, {
									marginal: s,
									citationSeparator: t.bibleCitationSeparator
								}))
							}
						}
					}
				}
				0 === e.length && e.push(a.createElement("div", {
					className: "no_data_message"
				}));
				var b = "",
					w = "",
					f = "",
					h = 100;
				if (this.state.fontSize && (h = this.state.fontSize), t && t.language) {
					var j = t.language.mepsSymbol,
						x = t.language.script;
					b = t.language.dir, w = t.language.ietfSymbol, f = "marginals-pane crossrefs article publication html5 pub-nwt jwac ml-" + j + " dir-" + b + " ms-" + x
				}
				return a.createElement("div", {
					id: "__marginals-pane",
					dir: b,
					lang: w,
					className: f
				}, a.createElement("div", {
					style: {
						fontSize: h + "%"
					}
				}, e))
			}, r
		}(a.Component);
	t.exports = g
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, r, e) {
	"use strict";

	function o() {
		return (o = Object.assign || function(t) {
			for (var r = 1; r < arguments.length; r++) {
				var e = arguments[r];
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
			}
			return t
		}).apply(this, arguments)
	}

	function i(t, r) {
		if (null == t) return {};
		var e, o, i = {},
			a = Object.keys(t);
		for (o = 0; o < a.length; o++) e = a[o], r.indexOf(e) >= 0 || (i[e] = t[e]);
		return i
	}

	function a(t, r) {
		t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r
	}
	e.r(r), e.d(r, "CSSTransition", (function() {
		return x
	})), e.d(r, "ReplaceTransition", (function() {
		return I
	})), e.d(r, "SwitchTransition", (function() {
		return P
	})), e.d(r, "TransitionGroup", (function() {
		return E
	})), e.d(r, "Transition", (function() {
		return f
	})), e.d(r, "config", (function() {
		return p
	}));
	e(46);

	function n(t, r) {
		return t.replace(new RegExp("(^|\\s)" + r + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
	}
	var l = e(2),
		c = e.n(l),
		d = e(26),
		m = e.n(d),
		p = {
			disabled: !1
		},
		u = c.a.createContext(null),
		g = "entering",
		s = "entered",
		b = function(t) {
			function r(r, e) {
				var o;
				o = t.call(this, r, e) || this;
				var i, a = e && !e.isMounting ? r.enter : r.appear;
				return o.appearStatus = null, r.in ? a ? (i = "exited", o.appearStatus = g) : i = s : i = r.unmountOnExit || r.mountOnEnter ? "unmounted" : "exited", o.state = {
					status: i
				}, o.nextCallback = null, o
			}
			a(r, t), r.getDerivedStateFromProps = function(t, r) {
				return t.in && "unmounted" === r.status ? {
					status: "exited"
				} : null
			};
			var e = r.prototype;
			return e.componentDidMount = function() {
				this.updateStatus(!0, this.appearStatus)
			}, e.componentDidUpdate = function(t) {
				var r = null;
				if (t !== this.props) {
					var e = this.state.status;
					this.props.in ? e !== g && e !== s && (r = g) : e !== g && e !== s || (r = "exiting")
				}
				this.updateStatus(!1, r)
			}, e.componentWillUnmount = function() {
				this.cancelNextCallback()
			}, e.getTimeouts = function() {
				var t, r, e, o = this.props.timeout;
				return t = r = e = o, null != o && "number" != typeof o && (t = o.exit, r = o.enter, e = void 0 !== o.appear ? o.appear : r), {
					exit: t,
					enter: r,
					appear: e
				}
			}, e.updateStatus = function(t, r) {
				void 0 === t && (t = !1), null !== r ? (this.cancelNextCallback(), r === g ? this.performEnter(t) : this.performExit()) : this.props.unmountOnExit && "exited" === this.state.status && this.setState({
					status: "unmounted"
				})
			}, e.performEnter = function(t) {
				var r = this,
					e = this.props.enter,
					o = this.context ? this.context.isMounting : t,
					i = this.props.nodeRef ? [o] : [m.a.findDOMNode(this), o],
					a = i[0],
					n = i[1],
					l = this.getTimeouts(),
					c = o ? l.appear : l.enter;
				!t && !e || p.disabled ? this.safeSetState({
					status: s
				}, (function() {
					r.props.onEntered(a)
				})) : (this.props.onEnter(a, n), this.safeSetState({
					status: g
				}, (function() {
					r.props.onEntering(a, n), r.onTransitionEnd(c, (function() {
						r.safeSetState({
							status: s
						}, (function() {
							r.props.onEntered(a, n)
						}))
					}))
				})))
			}, e.performExit = function() {
				var t = this,
					r = this.props.exit,
					e = this.getTimeouts(),
					o = this.props.nodeRef ? void 0 : m.a.findDOMNode(this);
				r && !p.disabled ? (this.props.onExit(o), this.safeSetState({
					status: "exiting"
				}, (function() {
					t.props.onExiting(o), t.onTransitionEnd(e.exit, (function() {
						t.safeSetState({
							status: "exited"
						}, (function() {
							t.props.onExited(o)
						}))
					}))
				}))) : this.safeSetState({
					status: "exited"
				}, (function() {
					t.props.onExited(o)
				}))
			}, e.cancelNextCallback = function() {
				null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
			}, e.safeSetState = function(t, r) {
				r = this.setNextCallback(r), this.setState(t, r)
			}, e.setNextCallback = function(t) {
				var r = this,
					e = !0;
				return this.nextCallback = function(o) {
					e && (e = !1, r.nextCallback = null, t(o))
				}, this.nextCallback.cancel = function() {
					e = !1
				}, this.nextCallback
			}, e.onTransitionEnd = function(t, r) {
				this.setNextCallback(r);
				var e = this.props.nodeRef ? this.props.nodeRef.current : m.a.findDOMNode(this),
					o = null == t && !this.props.addEndListener;
				if (e && !o) {
					if (this.props.addEndListener) {
						var i = this.props.nodeRef ? [this.nextCallback] : [e, this.nextCallback],
							a = i[0],
							n = i[1];
						this.props.addEndListener(a, n)
					}
					null != t && setTimeout(this.nextCallback, t)
				} else setTimeout(this.nextCallback, 0)
			}, e.render = function() {
				var t = this.state.status;
				if ("unmounted" === t) return null;
				var r = this.props,
					e = r.children,
					o = (r.in, r.mountOnEnter, r.unmountOnExit, r.appear, r.enter, r.exit, r.timeout, r.addEndListener, r.onEnter, r.onEntering, r.onEntered, r.onExit, r.onExiting, r.onExited, r.nodeRef, i(r, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
				return c.a.createElement(u.Provider, {
					value: null
				}, "function" == typeof e ? e(t, o) : c.a.cloneElement(c.a.Children.only(e), o))
			}, r
		}(c.a.Component);

	function w() {}
	b.contextType = u, b.propTypes = {}, b.defaultProps = {
		in: !1,
		mountOnEnter: !1,
		unmountOnExit: !1,
		appear: !1,
		enter: !0,
		exit: !0,
		onEnter: w,
		onEntering: w,
		onEntered: w,
		onExit: w,
		onExiting: w,
		onExited: w
	}, b.UNMOUNTED = "unmounted", b.EXITED = "exited", b.ENTERING = g, b.ENTERED = s, b.EXITING = "exiting";
	var f = b,
		h = function(t, r) {
			return t && r && r.split(" ").forEach((function(r) {
				return o = r, void((e = t).classList ? e.classList.remove(o) : "string" == typeof e.className ? e.className = n(e.className, o) : e.setAttribute("class", n(e.className && e.className.baseVal || "", o)));
				var e, o
			}))
		},
		j = function(t) {
			function r() {
				for (var r, e = arguments.length, o = new Array(e), i = 0; i < e; i++) o[i] = arguments[i];
				return (r = t.call.apply(t, [this].concat(o)) || this).appliedClasses = {
					appear: {},
					enter: {},
					exit: {}
				}, r.onEnter = function(t, e) {
					var o = r.resolveArguments(t, e),
						i = o[0],
						a = o[1];
					r.removeClasses(i, "exit"), r.addClass(i, a ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(t, e)
				}, r.onEntering = function(t, e) {
					var o = r.resolveArguments(t, e),
						i = o[0],
						a = o[1] ? "appear" : "enter";
					r.addClass(i, a, "active"), r.props.onEntering && r.props.onEntering(t, e)
				}, r.onEntered = function(t, e) {
					var o = r.resolveArguments(t, e),
						i = o[0],
						a = o[1] ? "appear" : "enter";
					r.removeClasses(i, a), r.addClass(i, a, "done"), r.props.onEntered && r.props.onEntered(t, e)
				}, r.onExit = function(t) {
					var e = r.resolveArguments(t)[0];
					r.removeClasses(e, "appear"), r.removeClasses(e, "enter"), r.addClass(e, "exit", "base"), r.props.onExit && r.props.onExit(t)
				}, r.onExiting = function(t) {
					var e = r.resolveArguments(t)[0];
					r.addClass(e, "exit", "active"), r.props.onExiting && r.props.onExiting(t)
				}, r.onExited = function(t) {
					var e = r.resolveArguments(t)[0];
					r.removeClasses(e, "exit"), r.addClass(e, "exit", "done"), r.props.onExited && r.props.onExited(t)
				}, r.resolveArguments = function(t, e) {
					return r.props.nodeRef ? [r.props.nodeRef.current, t] : [t, e]
				}, r.getClassNames = function(t) {
					var e = r.props.classNames,
						o = "string" == typeof e,
						i = o ? "" + (o && e ? e + "-" : "") + t : e[t];
					return {
						baseClassName: i,
						activeClassName: o ? i + "-active" : e[t + "Active"],
						doneClassName: o ? i + "-done" : e[t + "Done"]
					}
				}, r
			}
			a(r, t);
			var e = r.prototype;
			return e.addClass = function(t, r, e) {
				var o = this.getClassNames(r)[e + "ClassName"],
					i = this.getClassNames("enter").doneClassName;
				"appear" === r && "done" === e && i && (o += " " + i), "active" === e && t && t.scrollTop, o && (this.appliedClasses[r][e] = o, function(t, r) {
					t && r && r.split(" ").forEach((function(r) {
						return o = r, void((e = t).classList ? e.classList.add(o) : function(t, r) {
							return t.classList ? !!r && t.classList.contains(r) : -1 !== (" " + (t.className.baseVal || t.className) + " ").indexOf(" " + r + " ")
						}(e, o) || ("string" == typeof e.className ? e.className = e.className + " " + o : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + o)));
						var e, o
					}))
				}(t, o))
			}, e.removeClasses = function(t, r) {
				var e = this.appliedClasses[r],
					o = e.base,
					i = e.active,
					a = e.done;
				this.appliedClasses[r] = {}, o && h(t, o), i && h(t, i), a && h(t, a)
			}, e.render = function() {
				var t = this.props,
					r = (t.classNames, i(t, ["classNames"]));
				return c.a.createElement(f, o({}, r, {
					onEnter: this.onEnter,
					onEntered: this.onEntered,
					onEntering: this.onEntering,
					onExit: this.onExit,
					onExiting: this.onExiting,
					onExited: this.onExited
				}))
			}, r
		}(c.a.Component);
	j.defaultProps = {
		classNames: ""
	}, j.propTypes = {};
	var x = j;

	function y(t, r) {
		var e = Object.create(null);
		return t && l.Children.map(t, (function(t) {
			return t
		})).forEach((function(t) {
			e[t.key] = function(t) {
				return r && Object(l.isValidElement)(t) ? r(t) : t
			}(t)
		})), e
	}

	function S(t, r, e) {
		return null != e[r] ? e[r] : t.props[r]
	}

	function v(t, r, e) {
		var o = y(t.children),
			i = function(t, r) {
				function e(e) {
					return e in r ? r[e] : t[e]
				}
				t = t || {}, r = r || {};
				var o, i = Object.create(null),
					a = [];
				for (var n in t) n in r ? a.length && (i[n] = a, a = []) : a.push(n);
				var l = {};
				for (var c in r) {
					if (i[c])
						for (o = 0; o < i[c].length; o++) {
							var d = i[c][o];
							l[i[c][o]] = e(d)
						}
					l[c] = e(c)
				}
				for (o = 0; o < a.length; o++) l[a[o]] = e(a[o]);
				return l
			}(r, o);
		return Object.keys(i).forEach((function(a) {
			var n = i[a];
			if (Object(l.isValidElement)(n)) {
				var c = a in r,
					d = a in o,
					m = r[a],
					p = Object(l.isValidElement)(m) && !m.props.in;
				!d || c && !p ? d || !c || p ? d && c && Object(l.isValidElement)(m) && (i[a] = Object(l.cloneElement)(n, {
					onExited: e.bind(null, n),
					in: m.props.in,
					exit: S(n, "exit", t),
					enter: S(n, "enter", t)
				})) : i[a] = Object(l.cloneElement)(n, {
					in: !1
				}) : i[a] = Object(l.cloneElement)(n, {
					onExited: e.bind(null, n),
					in: !0,
					exit: S(n, "exit", t),
					enter: S(n, "enter", t)
				})
			}
		})), i
	}
	var O = Object.values || function(t) {
			return Object.keys(t).map((function(r) {
				return t[r]
			}))
		},
		k = function(t) {
			function r(r, e) {
				var o, i = (o = t.call(this, r, e) || this).handleExited.bind(function(t) {
					if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return t
				}(o));
				return o.state = {
					contextValue: {
						isMounting: !0
					},
					handleExited: i,
					firstRender: !0
				}, o
			}
			a(r, t);
			var e = r.prototype;
			return e.componentDidMount = function() {
				this.mounted = !0, this.setState({
					contextValue: {
						isMounting: !1
					}
				})
			}, e.componentWillUnmount = function() {
				this.mounted = !1
			}, r.getDerivedStateFromProps = function(t, r) {
				var e, o, i = r.children,
					a = r.handleExited;
				return {
					children: r.firstRender ? (e = t, o = a, y(e.children, (function(t) {
						return Object(l.cloneElement)(t, {
							onExited: o.bind(null, t),
							in: !0,
							appear: S(t, "appear", e),
							enter: S(t, "enter", e),
							exit: S(t, "exit", e)
						})
					}))) : v(t, i, a),
					firstRender: !1
				}
			}, e.handleExited = function(t, r) {
				var e = y(this.props.children);
				t.key in e || (t.props.onExited && t.props.onExited(r), this.mounted && this.setState((function(r) {
					var e = o({}, r.children);
					return delete e[t.key], {
						children: e
					}
				})))
			}, e.render = function() {
				var t = this.props,
					r = t.component,
					e = t.childFactory,
					o = i(t, ["component", "childFactory"]),
					a = this.state.contextValue,
					n = O(this.state.children).map(e);
				return delete o.appear, delete o.enter, delete o.exit, null === r ? c.a.createElement(u.Provider, {
					value: a
				}, n) : c.a.createElement(u.Provider, {
					value: a
				}, c.a.createElement(r, o, n))
			}, r
		}(c.a.Component);
	k.propTypes = {}, k.defaultProps = {
		component: "div",
		childFactory: function(t) {
			return t
		}
	};
	var E = k,
		C = function(t) {
			function r() {
				for (var r, e = arguments.length, o = new Array(e), i = 0; i < e; i++) o[i] = arguments[i];
				return (r = t.call.apply(t, [this].concat(o)) || this).handleEnter = function() {
					for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) e[o] = arguments[o];
					return r.handleLifecycle("onEnter", 0, e)
				}, r.handleEntering = function() {
					for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) e[o] = arguments[o];
					return r.handleLifecycle("onEntering", 0, e)
				}, r.handleEntered = function() {
					for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) e[o] = arguments[o];
					return r.handleLifecycle("onEntered", 0, e)
				}, r.handleExit = function() {
					for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) e[o] = arguments[o];
					return r.handleLifecycle("onExit", 1, e)
				}, r.handleExiting = function() {
					for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) e[o] = arguments[o];
					return r.handleLifecycle("onExiting", 1, e)
				}, r.handleExited = function() {
					for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) e[o] = arguments[o];
					return r.handleLifecycle("onExited", 1, e)
				}, r
			}
			a(r, t);
			var e = r.prototype;
			return e.handleLifecycle = function(t, r, e) {
				var o, i = this.props.children,
					a = c.a.Children.toArray(i)[r];
				if (a.props[t] && (o = a.props)[t].apply(o, e), this.props[t]) {
					var n = a.props.nodeRef ? void 0 : m.a.findDOMNode(this);
					this.props[t](n)
				}
			}, e.render = function() {
				var t = this.props,
					r = t.children,
					e = t.in,
					o = i(t, ["children", "in"]),
					a = c.a.Children.toArray(r),
					n = a[0],
					l = a[1];
				return delete o.onEnter, delete o.onEntering, delete o.onEntered, delete o.onExit, delete o.onExiting, delete o.onExited, c.a.createElement(E, o, e ? c.a.cloneElement(n, {
					key: "first",
					onEnter: this.handleEnter,
					onEntering: this.handleEntering,
					onEntered: this.handleEntered
				}) : c.a.cloneElement(l, {
					key: "second",
					onEnter: this.handleExit,
					onEntering: this.handleExiting,
					onEntered: this.handleExited
				}))
			}, r
		}(c.a.Component);
	C.propTypes = {};
	var A, T, I = C;
	var N = "out-in",
		_ = "in-out",
		R = function(t, r, e) {
			return function() {
				var o;
				t.props[r] && (o = t.props)[r].apply(o, arguments), e()
			}
		},
		M = ((A = {})[N] = function(t) {
			var r = t.current,
				e = t.changeState;
			return c.a.cloneElement(r, {
				in: !1,
				onExited: R(r, "onExited", (function() {
					e(g, null)
				}))
			})
		}, A[_] = function(t) {
			var r = t.current,
				e = t.changeState,
				o = t.children;
			return [r, c.a.cloneElement(o, {
				in: !0,
				onEntered: R(o, "onEntered", (function() {
					e(g)
				}))
			})]
		}, A),
		L = ((T = {})[N] = function(t) {
			var r = t.children,
				e = t.changeState;
			return c.a.cloneElement(r, {
				in: !0,
				onEntered: R(r, "onEntered", (function() {
					e(s, c.a.cloneElement(r, {
						in: !0
					}))
				}))
			})
		}, T[_] = function(t) {
			var r = t.current,
				e = t.children,
				o = t.changeState;
			return [c.a.cloneElement(r, {
				in: !1,
				onExited: R(r, "onExited", (function() {
					o(s, c.a.cloneElement(e, {
						in: !0
					}))
				}))
			}), c.a.cloneElement(e, {
				in: !0
			})]
		}, T),
		D = function(t) {
			function r() {
				for (var r, e = arguments.length, o = new Array(e), i = 0; i < e; i++) o[i] = arguments[i];
				return (r = t.call.apply(t, [this].concat(o)) || this).state = {
					status: s,
					current: null
				}, r.appeared = !1, r.changeState = function(t, e) {
					void 0 === e && (e = r.state.current), r.setState({
						status: t,
						current: e
					})
				}, r
			}
			a(r, t);
			var e = r.prototype;
			return e.componentDidMount = function() {
				this.appeared = !0
			}, r.getDerivedStateFromProps = function(t, r) {
				return null == t.children ? {
					current: null
				} : r.status === g && t.mode === _ ? {
					status: g
				} : !r.current || (e = r.current, o = t.children, e === o || c.a.isValidElement(e) && c.a.isValidElement(o) && null != e.key && e.key === o.key) ? {
					current: c.a.cloneElement(t.children, {
						in: !0
					})
				} : {
					status: "exiting"
				};
				var e, o
			}, e.render = function() {
				var t, r = this.props,
					e = r.children,
					o = r.mode,
					i = this.state,
					a = i.status,
					n = i.current,
					l = {
						children: e,
						current: n,
						changeState: this.changeState,
						status: a
					};
				switch (a) {
					case g:
						t = L[o](l);
						break;
					case "exiting":
						t = M[o](l);
						break;
					case s:
						t = n
				}
				return c.a.createElement(u.Provider, {
					value: {
						isMounting: !this.appeared
					}
				}, t)
			}, r
		}(c.a.Component);
	D.propTypes = {}, D.defaultProps = {
		mode: N
	};
	var P = D
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, r, e) {
	"use strict";
	Object.defineProperty(r, "__esModule", {
		value: !0
	}), e(297), e(319), e(340);
	e(360);
	e(343), e(345), e(424), e(361), e(377), e(347), e(537), e(426);
	var o = e(427),
		i = e(2);
	e(26).render(i.createElement(o, {
		mode: "primary"
	}), document.body)
}, function(t, r, e) {
	"use strict";
	e.r(r), r.default = e.p + "primary.html"
}]);