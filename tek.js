!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , r = Object.getPrototypeOf
      , s = t.slice
      , g = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , v = n.hasOwnProperty
      , a = v.toString
      , l = a.call(Object)
      , y = {}
      , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , x = function(e) {
        return null != e && e === e.window
    }
      , E = C.document
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.0"
      , S = function(e, t) {
        return new S.fn.init(e,t)
    };
    function p(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), j = function(e, t) {
            return e === t && (l = !0),
            0
        }, D = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+","g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes),
            t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (T(e),
            e = e || C,
            E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[S] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
              , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        i = se.isXML = function(e) {
            var t = e && e.namespaceURI
              , n = e && (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
            E = !i(C),
            p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            d.scope = ce(function(e) {
                return a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            d.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = K.test(C.getElementsByClassName),
            d.getById = ce(function(e) {
                return a.appendChild(e).id = S,
                !C.getElementsByName || !C.getElementsByName(S).length
            }),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            v = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", F)
            }),
            v = v.length && new RegExp(v.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = K.test(a.compareDocumentPosition),
            y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            j = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (T(e),
            d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    N(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(j),
            l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
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
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [k, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                            !1 === d)
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]),
                                    a === e))
                                        break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace($, "$1"));
                    return s[S] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function() {
                    return [0]
                }),
                last: ve(function(e, t) {
                    return [t - 1]
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)),
            y && !y[S] && (y = Ce(y, e)),
            le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r),
                v) {
                    i = Te(p, u),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [],
                            o = p.length;
                            while (o--)
                                (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)
                            (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    y ? y(null, t, p, r) : H.apply(t, p)
            })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
        b.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument == C || (T(o),
                            n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h,
                    w = p),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && xe(o)))
                            return H.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = S.split("").sort(j).join("") === S,
        d.detectDuplicates = !!l,
        T(),
        d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(C);
    S.find = d,
    S.expr = d.selectors,
    S.expr[":"] = S.expr.pseudos,
    S.uniqueSort = S.unique = d.uniqueSort,
    S.text = d.getText,
    S.isXMLDoc = d.isXML,
    S.contains = d.contains,
    S.escapeSelector = d.escape;
    var h = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && S(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , T = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    S.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(S(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (S.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || D,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t,
                S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                N.test(r[1]) && S.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }
    ).prototype = S.fn,
    D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/
      , H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length && (H[r] || S.uniqueSort(n),
            L.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }),
        n) : S.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    S.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return S.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = S.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    S.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return S.Deferred(function(r) {
                        S.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++,
                                    t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== M && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return S.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : R)),
                        o[2][3].add(l(0, e, m(n) ? n : M))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? S.extend(e, a) : a
                }
            }
              , s = {};
            return S.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = S.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            while (t--)
                I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = S.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }),
        this
    }
    ,
    S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }),
    S.ready.then = F.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B),
    C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                $(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(S(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , _ = /^-ms-/
      , z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1,
    G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G
      , Q = new G
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o),
                1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                        Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }),
    S.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Y.get(e, t),
                n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                S.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = E.documentElement
      , ie = function(e) {
        return S.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };
    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return S.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                S.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            S.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Y.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = S.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ue[s] = u)))) : "none" !== n && (l[c] = "none",
            Y.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    S.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r))
                i && i.push(o);
            else if (l = ie(o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;
    function we() {
        return !0
    }
    function Te() {
        return !1
    }
    function Ce(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Te;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return S().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = S.guid++)),
        e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }
    function Se(e, i, o) {
        o ? (Y.set(e, i, !1),
        S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Y.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n && n.value
                } else
                    r.length && (Y.set(this, i, {
                        value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && S.find.matchesSelector(re, i),
                n.guid || (n.guid = S.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(P) || [""]).length;
                while (l--)
                    d = g = (s = be.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = S.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = S.event.special[d] || {},
                    c = S.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && S.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = S.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l),
                t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    S.Event = function(e, t) {
        if (!(this instanceof S.Event))
            return new S.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && S.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[S.expando] = !0
    }
    ,
    S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp),
    S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Se(this, e, Ce),
                !1
            },
            trigger: function() {
                return Se(this, e),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }),
    S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    S.fn.extend({
        on: function(e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Te),
            this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i
      , Ae = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }
    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e),
            a = S.extend({}, o),
            Q.set(t, a))
        }
    }
    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                He(t, r, i, o)
            });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)
                u = e,
                c !== p && (u = S.clone(u, !0, !0),
                s && S.merge(a, ve(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                S.map(a, qe),
                c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }
    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ve(r)),
            r.parentNode && (n && ie(r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Le(o[r], a[r]);
                else
                    Le(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    S.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (S.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return He(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                S(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , Re = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , Me = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , Ie = new RegExp(ne.join("|"),"i");
    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)),
        !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function Fe(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 12 === t(l.offsetWidth / 3),
                re.removeChild(u),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        y.clearCloneStyle = "content-box" === l.style.backgroundClip,
        S.extend(y, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                s
            },
            scrollboxSize: function() {
                return e(),
                i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"),
                t = E.createElement("tr"),
                n = E.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                t.style.cssText = "border:1px solid",
                t.style.height = "1px",
                n.style.height = "9px",
                n.style.display = "block",
                re.appendChild(e).appendChild(t).appendChild(n),
                r = C.getComputedStyle(t),
                a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight,
                re.removeChild(e)),
                a
            }
        }))
    }();
    var Be = ["Webkit", "Moz", "ms"]
      , $e = E.createElement("div").style
      , _e = {};
    function ze(e) {
        var t = S.cssProps[e] || _e[e];
        return t || (e in $e ? e : _e[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = Be.length;
            while (n--)
                if ((e = Be[n] + t)in $e)
                    return e
        }(e) || e)
    }
    var Ue = /^(none|table(?!-c[ea]).+)/
      , Xe = /^--/
      , Ve = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ge = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ye(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
            r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i),
            "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function Je(e, t, n) {
        var r = Re(e)
          , i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r)
          , o = i
          , a = We(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e,t,n,r,i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
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
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Xe.test(t), l = e.style;
                if (u || (t = ze(s)),
                a = S.cssHooks[t] || S.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Xe.test(t) || (t = ze(s)),
            (a = S.cssHooks[t] || S.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = We(e, t, r)),
            "normal" === i && t in Ge && (i = Ge[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function() {
                        return Je(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Re(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Qe(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)),
                s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = S.css(e, u)),
                Ye(0, t, s)
            }
        }
    }),
    S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (S.cssHooks[i + o].set = Ye)
    }),
    S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((S.Tween = Ke).prototype = {
        constructor: Ke,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || S.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
            this
        }
    }).init.prototype = Ke.prototype,
    (Ke.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    S.fx = Ke.prototype.init,
    S.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;
    function ot() {
        et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval),
        S.fx.tick())
    }
    function at() {
        return C.setTimeout(function() {
            Ze = void 0
        }),
        Ze = Date.now()
    }
    function st(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function ut(e, t, n) {
        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function lt(o, e, t) {
        var n, a, r = 0, i = lt.prefilters.length, s = S.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Ze || at(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = X(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = S.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = lt.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return S.map(c, ut, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    S.Animation = S.extend(lt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                lt.tweeners[n] = lt.tweeners[n] || [],
                lt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    S.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                rt.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Y.get(e, "display")),
                "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0),
                l = e.style.display || l,
                c = S.css(e, "display"),
                le([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && le([e], !0),
                    p.done(function() {
                        for (r in g || le([e]),
                        Y.remove(e, "fxshow"),
                        d)
                            S.style(e, r, d[r])
                    })),
                    u = ut(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }),
    S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && S.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t)
              , o = S.speed(e, n, r)
              , a = function() {
                var e = lt(this, S.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = S.timers
                  , r = Y.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && it.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
        }
    }),
    S.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    S.timers = [],
    S.fx.tick = function() {
        var e, t = 0, n = S.timers;
        for (Ze = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(),
        Ze = void 0
    }
    ,
    S.fx.timer = function(e) {
        S.timers.push(e),
        S.fx.start()
    }
    ,
    S.fx.interval = 13,
    S.fx.start = function() {
        et || (et = !0,
        ot())
    }
    ,
    S.fx.stop = function() {
        et = null
    }
    ,
    S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    tt = E.createElement("input"),
    nt = E.createElement("select").appendChild(E.createElement("option")),
    tt.type = "checkbox",
    y.checkOn = "" !== tt.value,
    y.optSelected = nt.selected,
    (tt = E.createElement("input")).value = "t",
    tt.type = "radio",
    y.radioValue = "t" === tt.value;
    var ct, ft = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }),
    S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)),
                void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    ct = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = ft[t] || S.find.attr;
        ft[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = ft[o],
            ft[o] = r,
            r = null != a(e, t, n) ? o : null,
            ft[o] = i),
            r
        }
    });
    var pt = /^(?:input|select|textarea|button)$/i
      , dt = /^(?:a|area)$/i;
    function ht(e) {
        return (e.match(P) || []).join(" ")
    }
    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }),
    S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                i = S.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }),
    S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).addClass(t.call(this, e, gt(this)))
                });
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n),
                    r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).removeClass(t.call(this, e, gt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n),
                    r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " "))
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, gt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0,
                    n = S(this),
                    r = vt(i);
                    while (e = r[t++])
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else
                    void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var yt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
        }
    }),
    S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : ht(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        },
        y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in C;
    var mt = /^(?:focusinfocus|focusoutblur)$/
      , xt = function(e) {
        e.stopPropagation()
    };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[S.expando] ? e : new S.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : S.makeArray(t, [e]),
            c = S.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                    mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                S.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, xt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, xt),
                S.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }),
    S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return S.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r);
                t || e.addEventListener(n, i, !0),
                Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Y.remove(e, r))
            }
        }
    });
    var bt = C.location
      , wt = {
        guid: Date.now()
    }
      , Tt = /\?/;
    S.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ;
    var Ct = /\[\]$/
      , Et = /\r?\n/g
      , St = /^(?:submit|button|image|reset|file)$/i
      , kt = /^(?:input|select|textarea|keygen)/i;
    function At(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function(e, t) {
                r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                At(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
            S.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                At(n, e[n], t, i);
        return r.join("&")
    }
    ,
    S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g
      , jt = /#.*$/
      , Dt = /([?&])_=[^&]*/
      , qt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Lt = /^(?:GET|HEAD)$/
      , Ht = /^\/\//
      , Ot = {}
      , Pt = {}
      , Rt = "*/".concat("*")
      , Mt = E.createElement("a");
    function It(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Wt(t, i, o, a) {
        var s = {}
          , u = t === Pt;
        function l(e) {
            var r;
            return s[e] = !0,
            S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function Ft(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r),
        e
    }
    Mt.href = bt.href,
    S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
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
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = qt.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""],
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)),
            Wt(Ot, v, t, T),
            h)
                return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Lt.test(v.type),
            f = v.url.replace(jt, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Dt, "$1"),
            o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o),
            v.url = f + o),
            v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
            S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = Wt(Pt, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}
                ),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }),
    S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n,
            n = t,
            t = void 0),
            S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }),
    S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }
    ,
    S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])),
            t = S(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }
    ,
    S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Bt = {
        0: 200,
        1223: 204
    }
      , $t = S.ajaxSettings.xhr();
    y.cors = !!$t && "withCredentials"in $t,
    y.ajax = $t = !!$t,
    S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || $t && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e),
                e
            }
        }
    }),
    S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = S("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || S.expando + "_" + wt.guid++;
            return this[e] = !0,
            e
        }
    }),
    S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || S.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? S(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                zt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === _t.childNodes.length),
    S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        t.head.appendChild(r)) : t = E),
        o = !n && [],
        (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
        o && o.length && S(o).remove(),
        S.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    S.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = ht(e.slice(s)),
        e = e.slice(0, s)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = S.css(e, "top"),
            u = S.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, S.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    S.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    S.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === S.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                    i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position"))
                    e = e.offsetParent;
                return e || re
            })
        }
    }),
    S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = Fe(y.pixelPosition, function(e, t) {
            if (t)
                return t = We(e, n),
                Pe.test(t) ? S(e).position()[n] + "px" : t
        })
    }),
    S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        m(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || S.guid++,
            i
    }
    ,
    S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }
    ,
    S.isArray = Array.isArray,
    S.parseJSON = JSON.parse,
    S.nodeName = A,
    S.isFunction = m,
    S.isWindow = x,
    S.camelCase = X,
    S.type = w,
    S.now = Date.now,
    S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Vt = C.jQuery
      , Gt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Gt),
        e && C.jQuery === S && (C.jQuery = Vt),
        S
    }
    ,
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
});
jQuery.noConflict();
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e, window)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
}(function(s, n) {
    "use strict";
    function e(e) {
        return 0 <= function(e, t) {
            for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
                if (+o[i] < +n[i])
                    return 1;
                if (+n[i] < +o[i])
                    return -1
            }
            return 0
        }(s.fn.jquery, e)
    }
    s.migrateVersion = "3.3.2",
    n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
    s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
    n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
    var r = {};
    function u(e) {
        var t = n.console;
        s.migrateDeduplicateWarnings && r[e] || (r[e] = !0,
        s.migrateWarnings.push(e),
        t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e),
        s.migrateTrace && t.trace && t.trace()))
    }
    function t(e, t, r, n) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return u(n),
                r
            },
            set: function(e) {
                u(n),
                r = e
            }
        })
    }
    function o(e, t, r, n) {
        e[t] = function() {
            return u(n),
            r.apply(this, arguments)
        }
    }
    s.migrateDeduplicateWarnings = !0,
    s.migrateWarnings = [],
    void 0 === s.migrateTrace && (s.migrateTrace = !0),
    s.migrateReset = function() {
        r = {},
        s.migrateWarnings.length = 0
    }
    ,
    "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
    var i, a, c, d = {}, l = s.fn.init, p = s.find, f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (i in s.fn.init = function(e) {
        var t = Array.prototype.slice.call(arguments);
        return "string" == typeof e && "#" === e && (u("jQuery('#') is not a valid selector"),
        t[0] = []),
        l.apply(this, t)
    }
    ,
    s.fn.init.prototype = s.fn,
    s.find = function(t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && f.test(t))
            try {
                n.document.querySelector(t)
            } catch (e) {
                t = t.replace(y, function(e, t, r, n) {
                    return "[" + t + r + '"' + n + '"]'
                });
                try {
                    n.document.querySelector(t),
                    u("Attribute selector with '#' must be quoted: " + r[0]),
                    r[0] = t
                } catch (e) {
                    u("Attribute selector with '#' was not fixed: " + r[0])
                }
            }
        return p.apply(this, r)
    }
    ,
    p)
        Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
    o(s.fn, "size", function() {
        return this.length
    }, "jQuery.fn.size() is deprecated and removed; use the .length property"),
    o(s, "parseJSON", function() {
        return JSON.parse.apply(null, arguments)
    }, "jQuery.parseJSON is deprecated; use JSON.parse"),
    o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"),
    o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"),
    t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),
    t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),
    e("3.1.1") && o(s, "trim", function(e) {
        return null == e ? "" : (e + "").replace(m, "")
    }, "jQuery.trim is deprecated; use String.prototype.trim"),
    e("3.2.0") && (o(s, "nodeName", function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, "jQuery.nodeName is deprecated"),
    o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")),
    e("3.3.0") && (o(s, "isNumeric", function(e) {
        var t = typeof e;
        return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
    }, "jQuery.isNumeric() is deprecated"),
    s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        d["[object " + t + "]"] = t.toLowerCase()
    }),
    o(s, "type", function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e
    }, "jQuery.type is deprecated"),
    o(s, "isFunction", function(e) {
        return "function" == typeof e
    }, "jQuery.isFunction() is deprecated"),
    o(s, "isWindow", function(e) {
        return null != e && e === e.window
    }, "jQuery.isWindow() is deprecated")),
    s.ajax && (a = s.ajax,
    c = /(=)\?(?=&|$)|\?\?/,
    s.ajax = function() {
        var e = a.apply(this, arguments);
        return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"),
        o(e, "error", e.fail, "jQXHR.error is deprecated and removed"),
        o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")),
        e
    }
    ,
    e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
        !1 !== e.jsonp && (c.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data)) && u("JSON-to-JSONP auto-promotion is deprecated")
    }));
    var g = s.fn.removeAttr
      , h = s.fn.toggleClass
      , v = /\S+/g;
    function j(e) {
        return e.replace(/-([a-z])/g, function(e, t) {
            return t.toUpperCase()
        })
    }
    s.fn.removeAttr = function(e) {
        var r = this;
        return s.each(e.match(v), function(e, t) {
            s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t),
            r.prop(t, !1))
        }),
        g.apply(this, arguments)
    }
    ;
    var Q, b = !(s.fn.toggleClass = function(t) {
        return void 0 !== t && "boolean" != typeof t ? h.apply(this, arguments) : (u("jQuery.fn.toggleClass(boolean) is deprecated"),
        this.each(function() {
            var e = this.getAttribute && this.getAttribute("class") || "";
            e && s.data(this, "__className__", e),
            this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
        }))
    }
    ), w = /^[a-z]/, x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r && (s.cssHooks[t].get = function() {
            var e;
            return b = !0,
            e = r.apply(this, arguments),
            b = !1,
            e
        }
        )
    }),
    s.swap = function(e, t, r, n) {
        var o, i, a = {};
        for (i in b || u("jQuery.swap() is undocumented and deprecated"),
        t)
            a[i] = e.style[i],
            e.style[i] = t[i];
        for (i in o = r.apply(e, n || []),
        t)
            e.style[i] = a[i];
        return o
    }
    ,
    e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {},{
        set: function() {
            return u("JQMIGRATE: jQuery.cssProps is deprecated"),
            Reflect.set.apply(this, arguments)
        }
    })),
    s.cssNumber || (s.cssNumber = {}),
    Q = s.fn.css,
    s.fn.css = function(e, t) {
        var r, n, o = this;
        return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
            s.fn.css.call(o, e, t)
        }),
        this) : ("number" == typeof t && (r = j(e),
        n = r,
        w.test(n) && x.test(n[0].toUpperCase() + n.slice(1)) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css("' + e + '", value)')),
        Q.apply(this, arguments))
    }
    ;
    var A, k, S, M, N = s.data;
    s.data = function(e, t, r) {
        var n, o, i;
        if (t && "object" == typeof t && 2 === arguments.length) {
            for (i in n = s.hasData(e) && N.call(this, e),
            o = {},
            t)
                i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i),
                n[i] = t[i]) : o[i] = t[i];
            return N.call(this, e, o),
            t
        }
        return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t),
        2 < arguments.length && (n[t] = r),
        n[t]) : N.apply(this, arguments)
    }
    ,
    s.fx && (S = s.Tween.prototype.run,
    M = function(e) {
        return e
    }
    ,
    s.Tween.prototype.run = function() {
        1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"),
        s.easing[this.easing] = M),
        S.apply(this, arguments)
    }
    ,
    A = s.fx.interval || 13,
    k = "jQuery.fx.interval is deprecated",
    n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return n.document.hidden || u(k),
            A
        },
        set: function(e) {
            u(k),
            A = e
        }
    }));
    var R = s.fn.load
      , H = s.event.add
      , C = s.event.fix;
    s.event.props = [],
    s.event.fixHooks = {},
    t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"),
    s.event.fix = function(e) {
        var t, r = e.type, n = this.fixHooks[r], o = s.event.props;
        if (o.length) {
            u("jQuery.event.props are deprecated and removed: " + o.join());
            while (o.length)
                s.event.addProp(o.pop())
        }
        if (n && !n._migrated_ && (n._migrated_ = !0,
        u("jQuery.event.fixHooks are deprecated and removed: " + r),
        (o = n.props) && o.length))
            while (o.length)
                s.event.addProp(o.pop());
        return t = C.call(this, e),
        n && n.filter ? n.filter(t, e) : t
    }
    ,
    s.event.add = function(e, t) {
        return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"),
        H.apply(this, arguments)
    }
    ,
    s.each(["load", "unload", "error"], function(e, t) {
        s.fn[t] = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"),
            e.splice(0, 0, t),
            arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e),
            this))
        }
    }),
    s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
        s.fn[r] = function(e, t) {
            return u("jQuery.fn." + r + "() event shorthand is deprecated"),
            0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
        }
    }),
    s(function() {
        s(n.document).triggerHandler("ready")
    }),
    s.event.special.ready = {
        setup: function() {
            this === n.document && u("'ready' event is deprecated")
        }
    },
    s.fn.extend({
        bind: function(e, t, r) {
            return u("jQuery.fn.bind() is deprecated"),
            this.on(e, null, t, r)
        },
        unbind: function(e, t) {
            return u("jQuery.fn.unbind() is deprecated"),
            this.off(e, null, t)
        },
        delegate: function(e, t, r, n) {
            return u("jQuery.fn.delegate() is deprecated"),
            this.on(t, e, r, n)
        },
        undelegate: function(e, t, r) {
            return u("jQuery.fn.undelegate() is deprecated"),
            1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
        },
        hover: function(e, t) {
            return u("jQuery.fn.hover() is deprecated"),
            this.on("mouseenter", e).on("mouseleave", t || e)
        }
    });
    function T(e) {
        var t = n.document.implementation.createHTMLDocument("");
        return t.body.innerHTML = e,
        t.body && t.body.innerHTML
    }
    function P(e) {
        var t = e.replace(O, "<$1></$2>");
        t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e)
    }
    var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , q = s.htmlPrefilter;
    s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
        s.htmlPrefilter = function(e) {
            return P(e),
            e.replace(O, "<$1></$2>")
        }
    }
    ,
    s.htmlPrefilter = function(e) {
        return P(e),
        q(e)
    }
    ;
    var D, _ = s.fn.offset;
    s.fn.offset = function() {
        var e = this[0];
        return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"),
        arguments.length ? this : void 0)
    }
    ,
    s.ajax && (D = s.param,
    s.param = function(e, t) {
        var r = s.ajaxSettings && s.ajaxSettings.traditional;
        return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
        t = r),
        D.call(this, e, t)
    }
    );
    var E, F, J = s.fn.andSelf || s.fn.addBack;
    return s.fn.andSelf = function() {
        return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),
        J.apply(this, arguments)
    }
    ,
    s.Deferred && (E = s.Deferred,
    F = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]],
    s.Deferred = function(e) {
        var i = E()
          , a = i.promise();
        return i.pipe = a.pipe = function() {
            var o = arguments;
            return u("deferred.pipe() is deprecated"),
            s.Deferred(function(n) {
                s.each(F, function(e, t) {
                    var r = "function" == typeof o[e] && o[e];
                    i[t[1]](function() {
                        var e = r && r.apply(this, arguments);
                        e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
                    })
                }),
                o = null
            }).promise()
        }
        ,
        e && e.call(i, i),
        i
    }
    ,
    s.Deferred.exceptionHook = E.exceptionHook),
    s
});
!function(a, b) {
    var c = b(a, a.document, Date);
    a.lazySizes = c,
    "object" == typeof module && module.exports && (module.exports = c)
}("undefined" != typeof window ? window : {}, function(a, b, c) {
    "use strict";
    var d, e;
    if (function() {
        var b, c = {
            lazyClass: "lazyload",
            loadedClass: "lazyloaded",
            loadingClass: "lazyloading",
            preloadClass: "lazypreload",
            errorClass: "lazyerror",
            autosizesClass: "lazyautosizes",
            srcAttr: "data-src",
            srcsetAttr: "data-srcset",
            sizesAttr: "data-sizes",
            minSize: 40,
            customMedia: {},
            init: !0,
            expFactor: 1.5,
            hFac: .8,
            loadMode: 2,
            loadHidden: !0,
            ricTimeout: 0,
            throttleDelay: 125
        };
        e = a.lazySizesConfig || a.lazysizesConfig || {};
        for (b in c)
            b in e || (e[b] = c[b])
    }(),
    !b || !b.getElementsByClassName)
        return {
            init: function() {},
            cfg: e,
            noSupport: !0
        };
    var f = b.documentElement
      , g = a.HTMLPictureElement
      , h = "addEventListener"
      , i = "getAttribute"
      , j = a[h].bind(a)
      , k = a.setTimeout
      , l = a.requestAnimationFrame || k
      , m = a.requestIdleCallback
      , n = /^picture$/i
      , o = ["load", "error", "lazyincluded", "_lazyloaded"]
      , p = {}
      , q = Array.prototype.forEach
      , r = function(a, b) {
        return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")),
        p[b].test(a[i]("class") || "") && p[b]
    }
      , s = function(a, b) {
        r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b)
    }
      , t = function(a, b) {
        var c;
        (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " "))
    }
      , u = function(a, b, c) {
        var d = c ? h : "removeEventListener";
        c && u(a, b),
        o.forEach(function(c) {
            a[d](c, b)
        })
    }
      , v = function(a, c, e, f, g) {
        var h = b.createEvent("Event");
        return e || (e = {}),
        e.instance = d,
        h.initEvent(c, !f, !g),
        h.detail = e,
        a.dispatchEvent(h),
        h
    }
      , w = function(b, c) {
        var d;
        !g && (d = a.picturefill || e.pf) ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src),
        d({
            reevaluate: !0,
            elements: [b]
        })) : c && c.src && (b.src = c.src)
    }
      , x = function(a, b) {
        return (getComputedStyle(a, null) || {})[b]
    }
      , y = function(a, b, c) {
        for (c = c || a.offsetWidth; c < e.minSize && b && !a._lazysizesWidth; )
            c = b.offsetWidth,
            b = b.parentNode;
        return c
    }
      , z = function() {
        var a, c, d = [], e = [], f = d, g = function() {
            var b = f;
            for (f = d.length ? e : d,
            a = !0,
            c = !1; b.length; )
                b.shift()();
            a = !1
        }, h = function(d, e) {
            a && !e ? d.apply(this, arguments) : (f.push(d),
            c || (c = !0,
            (b.hidden ? k : l)(g)))
        };
        return h._lsFlush = g,
        h
    }()
      , A = function(a, b) {
        return b ? function() {
            z(a)
        }
        : function() {
            var b = this
              , c = arguments;
            z(function() {
                a.apply(b, c)
            })
        }
    }
      , B = function(a) {
        var b, d = 0, f = e.throttleDelay, g = e.ricTimeout, h = function() {
            b = !1,
            d = c.now(),
            a()
        }, i = m && g > 49 ? function() {
            m(h, {
                timeout: g
            }),
            g !== e.ricTimeout && (g = e.ricTimeout)
        }
        : A(function() {
            k(h)
        }, !0);
        return function(a) {
            var e;
            (a = !0 === a) && (g = 33),
            b || (b = !0,
            e = f - (c.now() - d),
            e < 0 && (e = 0),
            a || e < 9 ? i() : k(i, e))
        }
    }
      , C = function(a) {
        var b, d, e = 99, f = function() {
            b = null,
            a()
        }, g = function() {
            var a = c.now() - d;
            a < e ? k(g, e - a) : (m || f)(f)
        };
        return function() {
            d = c.now(),
            b || (b = k(g, e))
        }
    }
      , D = function() {
        var g, m, o, p, y, D, F, G, H, I, J, K, L = /^img$/i, M = /^iframe$/i, N = "onscroll"in a && !/(gle|ing)bot/.test(navigator.userAgent), O = 0, P = 0, Q = 0, R = -1, S = function(a) {
            Q--,
            (!a || Q < 0 || !a.target) && (Q = 0)
        }, T = function(a) {
            return null == K && (K = "hidden" == x(b.body, "visibility")),
            K || !("hidden" == x(a.parentNode, "visibility") && "hidden" == x(a, "visibility"))
        }, U = function(a, c) {
            var d, e = a, g = T(a);
            for (G -= c,
            J += c,
            H -= c,
            I += c; g && (e = e.offsetParent) && e != b.body && e != f; )
                (g = (x(e, "opacity") || 1) > 0) && "visible" != x(e, "overflow") && (d = e.getBoundingClientRect(),
                g = I > d.left && H < d.right && J > d.top - 1 && G < d.bottom + 1);
            return g
        }, V = function() {
            var a, c, h, j, k, l, n, o, q, r, s, t, u = d.elements;
            if ((p = e.loadMode) && Q < 8 && (a = u.length)) {
                for (c = 0,
                R++; c < a; c++)
                    if (u[c] && !u[c]._lazyRace)
                        if (!N || d.prematureUnveil && d.prematureUnveil(u[c]))
                            ba(u[c]);
                        else if ((o = u[c][i]("data-expand")) && (l = 1 * o) || (l = P),
                        r || (r = !e.expand || e.expand < 1 ? f.clientHeight > 500 && f.clientWidth > 500 ? 500 : 370 : e.expand,
                        d._defEx = r,
                        s = r * e.expFactor,
                        t = e.hFac,
                        K = null,
                        P < s && Q < 1 && R > 2 && p > 2 && !b.hidden ? (P = s,
                        R = 0) : P = p > 1 && R > 1 && Q < 6 ? r : O),
                        q !== l && (D = innerWidth + l * t,
                        F = innerHeight + l,
                        n = -1 * l,
                        q = l),
                        h = u[c].getBoundingClientRect(),
                        (J = h.bottom) >= n && (G = h.top) <= F && (I = h.right) >= n * t && (H = h.left) <= D && (J || I || H || G) && (e.loadHidden || T(u[c])) && (m && Q < 3 && !o && (p < 3 || R < 4) || U(u[c], l))) {
                            if (ba(u[c]),
                            k = !0,
                            Q > 9)
                                break
                        } else
                            !k && m && !j && Q < 4 && R < 4 && p > 2 && (g[0] || e.preloadAfterLoad) && (g[0] || !o && (J || I || H || G || "auto" != u[c][i](e.sizesAttr))) && (j = g[0] || u[c]);
                j && !k && ba(j)
            }
        }, W = B(V), X = function(a) {
            var b = a.target;
            if (b._lazyCache)
                return void delete b._lazyCache;
            S(a),
            s(b, e.loadedClass),
            t(b, e.loadingClass),
            u(b, Z),
            v(b, "lazyloaded")
        }, Y = A(X), Z = function(a) {
            Y({
                target: a.target
            })
        }, $ = function(a, b) {
            try {
                a.contentWindow.location.replace(b)
            } catch (c) {
                a.src = b
            }
        }, _ = function(a) {
            var b, c = a[i](e.srcsetAttr);
            (b = e.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b),
            c && a.setAttribute("srcset", c)
        }, aa = A(function(a, b, c, d, f) {
            var g, h, j, l, m, p;
            (m = v(a, "lazybeforeunveil", b)).defaultPrevented || (d && (c ? s(a, e.autosizesClass) : a.setAttribute("sizes", d)),
            h = a[i](e.srcsetAttr),
            g = a[i](e.srcAttr),
            f && (j = a.parentNode,
            l = j && n.test(j.nodeName || "")),
            p = b.firesLoad || "src"in a && (h || g || l),
            m = {
                target: a
            },
            s(a, e.loadingClass),
            p && (clearTimeout(o),
            o = k(S, 2500),
            u(a, Z, !0)),
            l && q.call(j.getElementsByTagName("source"), _),
            h ? a.setAttribute("srcset", h) : g && !l && (M.test(a.nodeName) ? $(a, g) : a.src = g),
            f && (h || l) && w(a, {
                src: g
            })),
            a._lazyRace && delete a._lazyRace,
            t(a, e.lazyClass),
            z(function() {
                var b = a.complete && a.naturalWidth > 1;
                p && !b || (b && s(a, "ls-is-cached"),
                X(m),
                a._lazyCache = !0,
                k(function() {
                    "_lazyCache"in a && delete a._lazyCache
                }, 9)),
                "lazy" == a.loading && Q--
            }, !0)
        }), ba = function(a) {
            if (!a._lazyRace) {
                var b, c = L.test(a.nodeName), d = c && (a[i](e.sizesAttr) || a[i]("sizes")), f = "auto" == d;
                (!f && m || !c || !a[i]("src") && !a.srcset || a.complete || r(a, e.errorClass) || !r(a, e.lazyClass)) && (b = v(a, "lazyunveilread").detail,
                f && E.updateElem(a, !0, a.offsetWidth),
                a._lazyRace = !0,
                Q++,
                aa(a, b, f, d, c))
            }
        }, ca = C(function() {
            e.loadMode = 3,
            W()
        }), da = function() {
            3 == e.loadMode && (e.loadMode = 2),
            ca()
        }, ea = function() {
            if (!m) {
                if (c.now() - y < 999)
                    return void k(ea, 999);
                m = !0,
                e.loadMode = 3,
                W(),
                j("scroll", da, !0)
            }
        };
        return {
            _: function() {
                y = c.now(),
                d.elements = b.getElementsByClassName(e.lazyClass),
                g = b.getElementsByClassName(e.lazyClass + " " + e.preloadClass),
                j("scroll", W, !0),
                j("resize", W, !0),
                j("pageshow", function(a) {
                    if (a.persisted) {
                        var c = b.querySelectorAll("." + e.loadingClass);
                        c.length && c.forEach && l(function() {
                            c.forEach(function(a) {
                                a.complete && ba(a)
                            })
                        })
                    }
                }),
                a.MutationObserver ? new MutationObserver(W).observe(f, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0
                }) : (f[h]("DOMNodeInserted", W, !0),
                f[h]("DOMAttrModified", W, !0),
                setInterval(W, 999)),
                j("hashchange", W, !0),
                ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(a) {
                    b[h](a, W, !0)
                }),
                /d$|^c/.test(b.readyState) ? ea() : (j("load", ea),
                b[h]("DOMContentLoaded", W),
                k(ea, 2e4)),
                d.elements.length ? (V(),
                z._lsFlush()) : W()
            },
            checkElems: W,
            unveil: ba,
            _aLSL: da
        }
    }()
      , E = function() {
        var a, c = A(function(a, b, c, d) {
            var e, f, g;
            if (a._lazysizesWidth = d,
            d += "px",
            a.setAttribute("sizes", d),
            n.test(b.nodeName || ""))
                for (e = b.getElementsByTagName("source"),
                f = 0,
                g = e.length; f < g; f++)
                    e[f].setAttribute("sizes", d);
            c.detail.dataAttr || w(a, c.detail)
        }), d = function(a, b, d) {
            var e, f = a.parentNode;
            f && (d = y(a, f, d),
            e = v(a, "lazybeforesizes", {
                width: d,
                dataAttr: !!b
            }),
            e.defaultPrevented || (d = e.detail.width) && d !== a._lazysizesWidth && c(a, f, e, d))
        }, f = function() {
            var b, c = a.length;
            if (c)
                for (b = 0; b < c; b++)
                    d(a[b])
        }, g = C(f);
        return {
            _: function() {
                a = b.getElementsByClassName(e.autosizesClass),
                j("resize", g)
            },
            checkElems: g,
            updateElem: d
        }
    }()
      , F = function() {
        !F.i && b.getElementsByClassName && (F.i = !0,
        E._(),
        D._())
    };
    return k(function() {
        e.init && F()
    }),
    d = {
        cfg: e,
        autoSizer: E,
        loader: D,
        init: F,
        uP: w,
        aC: s,
        rC: t,
        hC: r,
        fire: v,
        gW: y,
        rAF: z
    }
});
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(h) {
    function t(e) {
        var t, o, n = e || window.event, a = v.call(arguments, 1), i = 0, l = 0, r = 0, s = 0, c = 0, d = 0;
        if ((e = h.event.fix(n)).type = "mousewheel",
        "detail"in n && (r = -1 * n.detail),
        "wheelDelta"in n && (r = n.wheelDelta),
        "wheelDeltaY"in n && (r = n.wheelDeltaY),
        "wheelDeltaX"in n && (l = -1 * n.wheelDeltaX),
        "axis"in n && n.axis === n.HORIZONTAL_AXIS && (l = -1 * r,
        r = 0),
        i = 0 === r ? l : r,
        "deltaY"in n && (i = r = -1 * n.deltaY),
        "deltaX"in n && (l = n.deltaX,
        0 === r && (i = -1 * l)),
        0 !== r || 0 !== l) {
            1 === n.deltaMode ? (i *= t = h.data(this, "mousewheel-line-height"),
            r *= t,
            l *= t) : 2 === n.deltaMode && (i *= o = h.data(this, "mousewheel-page-height"),
            r *= o,
            l *= o);
            var u, s = Math.max(Math.abs(r), Math.abs(l));
            return g && !(s < g) || m(n, g = s) && (g /= 40),
            m(n, s) && (i /= 40,
            l /= 40,
            r /= 40),
            i = Math[1 <= i ? "floor" : "ceil"](i / g),
            l = Math[1 <= l ? "floor" : "ceil"](l / g),
            r = Math[1 <= r ? "floor" : "ceil"](r / g),
            x.settings.normalizeOffset && this.getBoundingClientRect && (u = this.getBoundingClientRect(),
            c = e.clientX - u.left,
            d = e.clientY - u.top),
            e.deltaX = l,
            e.deltaY = r,
            e.deltaFactor = g,
            e.offsetX = c,
            e.offsetY = d,
            e.deltaMode = 0,
            a.unshift(e, i, l, r),
            p && clearTimeout(p),
            p = setTimeout(f, 200),
            (h.event.dispatch || h.event.handle).apply(this, a)
        }
    }
    function f() {
        g = null
    }
    function m(e, t) {
        return x.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
    }
    var p, g, e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], o = "onwheel"in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], v = Array.prototype.slice;
    if (h.event.fixHooks)
        for (var n = e.length; n; )
            h.event.fixHooks[e[--n]] = h.event.mouseHooks;
    var x = h.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var e = o.length; e; )
                    this.addEventListener(o[--e], t, !1);
            else
                this.onmousewheel = t;
            h.data(this, "mousewheel-line-height", x.getLineHeight(this)),
            h.data(this, "mousewheel-page-height", x.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = o.length; e; )
                    this.removeEventListener(o[--e], t, !1);
            else
                this.onmousewheel = null;
            h.removeData(this, "mousewheel-line-height"),
            h.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(e) {
            var t = h(e)
              , o = t["offsetParent"in h.fn ? "offsetParent" : "parent"]();
            return o.length || (o = h("body")),
            parseInt(o.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16
        },
        getPageHeight: function(e) {
            return h(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    h.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(h) {
    function t(e) {
        var t, o, n = e || window.event, a = v.call(arguments, 1), i = 0, l = 0, r = 0, s = 0, c = 0, d = 0;
        if ((e = h.event.fix(n)).type = "mousewheel",
        "detail"in n && (r = -1 * n.detail),
        "wheelDelta"in n && (r = n.wheelDelta),
        "wheelDeltaY"in n && (r = n.wheelDeltaY),
        "wheelDeltaX"in n && (l = -1 * n.wheelDeltaX),
        "axis"in n && n.axis === n.HORIZONTAL_AXIS && (l = -1 * r,
        r = 0),
        i = 0 === r ? l : r,
        "deltaY"in n && (i = r = -1 * n.deltaY),
        "deltaX"in n && (l = n.deltaX,
        0 === r && (i = -1 * l)),
        0 !== r || 0 !== l) {
            1 === n.deltaMode ? (i *= t = h.data(this, "mousewheel-line-height"),
            r *= t,
            l *= t) : 2 === n.deltaMode && (i *= o = h.data(this, "mousewheel-page-height"),
            r *= o,
            l *= o);
            var u, s = Math.max(Math.abs(r), Math.abs(l));
            return g && !(s < g) || m(n, g = s) && (g /= 40),
            m(n, s) && (i /= 40,
            l /= 40,
            r /= 40),
            i = Math[1 <= i ? "floor" : "ceil"](i / g),
            l = Math[1 <= l ? "floor" : "ceil"](l / g),
            r = Math[1 <= r ? "floor" : "ceil"](r / g),
            x.settings.normalizeOffset && this.getBoundingClientRect && (u = this.getBoundingClientRect(),
            c = e.clientX - u.left,
            d = e.clientY - u.top),
            e.deltaX = l,
            e.deltaY = r,
            e.deltaFactor = g,
            e.offsetX = c,
            e.offsetY = d,
            e.deltaMode = 0,
            a.unshift(e, i, l, r),
            p && clearTimeout(p),
            p = setTimeout(f, 200),
            (h.event.dispatch || h.event.handle).apply(this, a)
        }
    }
    function f() {
        g = null
    }
    function m(e, t) {
        return x.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
    }
    var p, g, e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], o = "onwheel"in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], v = Array.prototype.slice;
    if (h.event.fixHooks)
        for (var n = e.length; n; )
            h.event.fixHooks[e[--n]] = h.event.mouseHooks;
    var x = h.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var e = o.length; e; )
                    this.addEventListener(o[--e], t, !1);
            else
                this.onmousewheel = t;
            h.data(this, "mousewheel-line-height", x.getLineHeight(this)),
            h.data(this, "mousewheel-page-height", x.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = o.length; e; )
                    this.removeEventListener(o[--e], t, !1);
            else
                this.onmousewheel = null;
            h.removeData(this, "mousewheel-line-height"),
            h.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(e) {
            var t = h(e)
              , o = t["offsetParent"in h.fn ? "offsetParent" : "parent"]();
            return o.length || (o = h("body")),
            parseInt(o.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16
        },
        getPageHeight: function(e) {
            return h(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    h.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function(z) {
    var H, f, P, n, a, r, i, g, X, S, m, c, s, d, u, h, p, v, x, w, _, b, M, C, y, B, T, k, Y, l, D, O, I, E, j, L, R, A, W, U, F, q, N, V, Q, Z, G, J, K, $, o, ee, te, oe, ne, ae, ie, e, t, le;
    e = "function" == typeof define && define.amd,
    t = "undefined" != typeof module && module.exports,
    le = "https:" == document.location.protocol ? "https:" : "http:",
    e || (t ? require("jquery-mousewheel")(z) : z.event.special.mousewheel || z("head").append(decodeURI("%3Cscript src=" + le + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),
    f = "mCustomScrollbar",
    P = "mCS",
    n = ".mCustomScrollbar",
    a = {
        setTop: 0,
        setLeft: 0,
        axis: "y",
        scrollbarPosition: "inside",
        scrollInertia: 950,
        autoDraggerLength: !0,
        alwaysShowScrollbar: 0,
        snapOffset: 0,
        mouseWheel: {
            enable: !0,
            scrollAmount: "auto",
            axis: "y",
            deltaFactor: "auto",
            disableOver: ["select", "option", "keygen", "datalist", "textarea"]
        },
        scrollButtons: {
            scrollType: "stepless",
            scrollAmount: "auto"
        },
        keyboard: {
            enable: !0,
            scrollType: "stepless",
            scrollAmount: "auto"
        },
        contentTouchScroll: 25,
        documentTouchScroll: !0,
        advanced: {
            autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
            updateOnContentResize: !0,
            updateOnImageLoad: "auto",
            autoUpdateTimeout: 60
        },
        theme: "light",
        callbacks: {
            onTotalScrollOffset: 0,
            onTotalScrollBackOffset: 0,
            alwaysTriggerOffsets: !0
        }
    },
    r = 0,
    i = {},
    g = window.attachEvent && !window.addEventListener ? 1 : 0,
    X = !1,
    S = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
    m = {
        init: function(l) {
            var l = z.extend(!0, {}, a, l)
              , e = c.call(this);
            if (l.live) {
                var t = l.liveSelector || this.selector || n
                  , o = z(t);
                if ("off" === l.live)
                    return void d(t);
                i[t] = setTimeout(function() {
                    o.mCustomScrollbar(l),
                    "once" === l.live && o.length && d(t)
                }, 500)
            } else
                d(t);
            return l.setWidth = l.set_width ? l.set_width : l.setWidth,
            l.setHeight = l.set_height ? l.set_height : l.setHeight,
            l.axis = l.horizontalScroll ? "x" : u(l.axis),
            l.scrollInertia = 0 < l.scrollInertia && l.scrollInertia < 17 ? 17 : l.scrollInertia,
            "object" != typeof l.mouseWheel && 1 == l.mouseWheel && (l.mouseWheel = {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                preventDefault: !1,
                deltaFactor: "auto",
                normalizeDelta: !1,
                invert: !1
            }),
            l.mouseWheel.scrollAmount = l.mouseWheelPixels ? l.mouseWheelPixels : l.mouseWheel.scrollAmount,
            l.mouseWheel.normalizeDelta = l.advanced.normalizeMouseWheelDelta ? l.advanced.normalizeMouseWheelDelta : l.mouseWheel.normalizeDelta,
            l.scrollButtons.scrollType = h(l.scrollButtons.scrollType),
            s(l),
            z(e).each(function() {
                var e, t, o, n, a, i = z(this);
                i.data(P) || (i.data(P, {
                    idx: ++r,
                    opt: l,
                    scrollRatio: {
                        y: null,
                        x: null
                    },
                    overflowed: null,
                    contentReset: {
                        y: null,
                        x: null
                    },
                    bindEvents: !1,
                    tweenRunning: !1,
                    sequential: {},
                    langDir: i.css("direction"),
                    cbOffsets: null,
                    trigger: null,
                    poll: {
                        size: {
                            o: 0,
                            n: 0
                        },
                        img: {
                            o: 0,
                            n: 0
                        },
                        change: {
                            o: 0,
                            n: 0
                        }
                    }
                }),
                t = (e = i.data(P)).opt,
                o = i.data("mcs-axis"),
                n = i.data("mcs-scrollbar-position"),
                a = i.data("mcs-theme"),
                o && (t.axis = o),
                n && (t.scrollbarPosition = n),
                a && (t.theme = a,
                s(t)),
                p.call(this),
                e && t.callbacks.onCreate && "function" == typeof t.callbacks.onCreate && t.callbacks.onCreate.call(this),
                z("#mCSB_" + e.idx + "_container img:not(." + S[2] + ")").addClass(S[2]),
                m.update.call(null, i))
            })
        },
        update: function(e, r) {
            var t = e || c.call(this);
            return z(t).each(function() {
                var e = z(this);
                if (e.data(P)) {
                    var t = e.data(P)
                      , o = t.opt
                      , n = z("#mCSB_" + t.idx + "_container")
                      , a = z("#mCSB_" + t.idx)
                      , i = [z("#mCSB_" + t.idx + "_dragger_vertical"), z("#mCSB_" + t.idx + "_dragger_horizontal")];
                    if (!n.length)
                        return;
                    t.tweenRunning && G(e),
                    r && t && o.callbacks.onBeforeUpdate && "function" == typeof o.callbacks.onBeforeUpdate && o.callbacks.onBeforeUpdate.call(this),
                    e.hasClass(S[3]) && e.removeClass(S[3]),
                    e.hasClass(S[4]) && e.removeClass(S[4]),
                    a.css("max-height", "none"),
                    a.height() !== e.height() && a.css("max-height", e.height()),
                    x.call(this),
                    "y" === o.axis || o.advanced.autoExpandHorizontalScroll || n.css("width", v(n)),
                    t.overflowed = C.call(this),
                    k.call(this),
                    o.autoDraggerLength && _.call(this),
                    b.call(this),
                    B.call(this);
                    var l = [Math.abs(n[0].offsetTop), Math.abs(n[0].offsetLeft)];
                    "x" !== o.axis && (t.overflowed[0] ? i[0].height() > i[0].parent().height() ? y.call(this) : (J(e, l[0].toString(), {
                        dir: "y",
                        dur: 0,
                        overwrite: "none"
                    }),
                    t.contentReset.y = null) : (y.call(this),
                    "y" === o.axis ? T.call(this) : "yx" === o.axis && t.overflowed[1] && J(e, l[1].toString(), {
                        dir: "x",
                        dur: 0,
                        overwrite: "none"
                    }))),
                    "y" !== o.axis && (t.overflowed[1] ? i[1].width() > i[1].parent().width() ? y.call(this) : (J(e, l[1].toString(), {
                        dir: "x",
                        dur: 0,
                        overwrite: "none"
                    }),
                    t.contentReset.x = null) : (y.call(this),
                    "x" === o.axis ? T.call(this) : "yx" === o.axis && t.overflowed[0] && J(e, l[0].toString(), {
                        dir: "y",
                        dur: 0,
                        overwrite: "none"
                    }))),
                    r && t && (2 === r && o.callbacks.onImageLoad && "function" == typeof o.callbacks.onImageLoad ? o.callbacks.onImageLoad.call(this) : 3 === r && o.callbacks.onSelectorChange && "function" == typeof o.callbacks.onSelectorChange ? o.callbacks.onSelectorChange.call(this) : o.callbacks.onUpdate && "function" == typeof o.callbacks.onUpdate && o.callbacks.onUpdate.call(this)),
                    Z.call(this)
                }
            })
        },
        scrollTo: function(r, s) {
            if (void 0 !== r && null != r) {
                var e = c.call(this);
                return z(e).each(function() {
                    var e, t, o, n, a, i, l = z(this);
                    l.data(P) && (e = l.data(P),
                    o = {
                        trigger: "external",
                        scrollInertia: (t = e.opt).scrollInertia,
                        scrollEasing: "mcsEaseInOut",
                        moveDragger: !1,
                        timeout: 60,
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0
                    },
                    n = z.extend(!0, {}, o, s),
                    a = V.call(this, r),
                    i = 0 < n.scrollInertia && n.scrollInertia < 17 ? 17 : n.scrollInertia,
                    a[0] = Q.call(this, a[0], "y"),
                    a[1] = Q.call(this, a[1], "x"),
                    n.moveDragger && (a[0] *= e.scrollRatio.y,
                    a[1] *= e.scrollRatio.x),
                    n.dur = ie() ? 0 : i,
                    setTimeout(function() {
                        null !== a[0] && void 0 !== a[0] && "x" !== t.axis && e.overflowed[0] && (n.dir = "y",
                        n.overwrite = "all",
                        J(l, a[0].toString(), n)),
                        null !== a[1] && void 0 !== a[1] && "y" !== t.axis && e.overflowed[1] && (n.dir = "x",
                        n.overwrite = "none",
                        J(l, a[1].toString(), n))
                    }, n.timeout))
                })
            }
        },
        stop: function() {
            var e = c.call(this);
            return z(e).each(function() {
                var e = z(this);
                e.data(P) && G(e)
            })
        },
        disable: function(t) {
            var e = c.call(this);
            return z(e).each(function() {
                var e = z(this);
                e.data(P) && (e.data(P),
                Z.call(this, "remove"),
                T.call(this),
                t && y.call(this),
                k.call(this, !0),
                e.addClass(S[3]))
            })
        },
        destroy: function() {
            var l = c.call(this);
            return z(l).each(function() {
                var e, t, o, n, a, i = z(this);
                i.data(P) && (t = (e = i.data(P)).opt,
                o = z("#mCSB_" + e.idx),
                n = z("#mCSB_" + e.idx + "_container"),
                a = z(".mCSB_" + e.idx + "_scrollbar"),
                t.live && d(t.liveSelector || z(l).selector),
                Z.call(this, "remove"),
                T.call(this),
                y.call(this),
                i.removeData(P),
                ee(this, "mcs"),
                a.remove(),
                n.find("img." + S[2]).removeClass(S[2]),
                o.replaceWith(n.contents()),
                i.removeClass(f + " _" + P + "_" + e.idx + " " + S[6] + " " + S[7] + " " + S[5] + " " + S[3]).addClass(S[4]))
            })
        }
    },
    c = function() {
        return "object" != typeof z(this) || z(this).length < 1 ? n : this
    }
    ,
    s = function(e) {
        e.autoDraggerLength = !(-1 < z.inArray(e.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"])) && e.autoDraggerLength,
        e.autoExpandScrollbar = !(-1 < z.inArray(e.theme, ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"])) && e.autoExpandScrollbar,
        e.scrollButtons.enable = !(-1 < z.inArray(e.theme, ["minimal", "minimal-dark"])) && e.scrollButtons.enable,
        e.autoHideScrollbar = -1 < z.inArray(e.theme, ["minimal", "minimal-dark"]) || e.autoHideScrollbar,
        e.scrollbarPosition = -1 < z.inArray(e.theme, ["minimal", "minimal-dark"]) ? "outside" : e.scrollbarPosition
    }
    ,
    d = function(e) {
        i[e] && (clearTimeout(i[e]),
        ee(i, e))
    }
    ,
    u = function(e) {
        return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
    }
    ,
    h = function(e) {
        return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
    }
    ,
    p = function() {
        var e = z(this)
          , t = e.data(P)
          , o = t.opt
          , n = o.autoExpandScrollbar ? " " + S[1] + "_expand" : ""
          , a = ["<div id='mCSB_" + t.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + t.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_vertical" + n + "'><div class='" + S[12] + "'><div id='mCSB_" + t.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + t.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + t.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_horizontal" + n + "'><div class='" + S[12] + "'><div id='mCSB_" + t.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"]
          , i = "yx" === o.axis ? "mCSB_vertical_horizontal" : "x" === o.axis ? "mCSB_horizontal" : "mCSB_vertical"
          , l = "yx" === o.axis ? a[0] + a[1] : "x" === o.axis ? a[1] : a[0]
          , r = "yx" === o.axis ? "<div id='mCSB_" + t.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : ""
          , s = o.autoHideScrollbar ? " " + S[6] : ""
          , c = "x" !== o.axis && "rtl" === t.langDir ? " " + S[7] : "";
        o.setWidth && e.css("width", o.setWidth),
        o.setHeight && e.css("height", o.setHeight),
        o.setLeft = "y" !== o.axis && "rtl" === t.langDir ? "989999px" : o.setLeft,
        e.addClass(f + " _" + P + "_" + t.idx + s + c).wrapInner("<div id='mCSB_" + t.idx + "' class='mCustomScrollBox mCS-" + o.theme + " " + i + "'><div id='mCSB_" + t.idx + "_container' class='mCSB_container' style='position:relative; top:" + o.setTop + "; left:" + o.setLeft + ";' dir='" + t.langDir + "' /></div>");
        var d = z("#mCSB_" + t.idx)
          , u = z("#mCSB_" + t.idx + "_container");
        "y" === o.axis || o.advanced.autoExpandHorizontalScroll || u.css("width", v(u)),
        "outside" === o.scrollbarPosition ? ("static" === e.css("position") && e.css("position", "relative"),
        e.css("overflow", "visible"),
        d.addClass("mCSB_outside").after(l)) : (d.addClass("mCSB_inside").append(l),
        u.wrap(r)),
        w.call(this);
        var h = [z("#mCSB_" + t.idx + "_dragger_vertical"), z("#mCSB_" + t.idx + "_dragger_horizontal")];
        h[0].css("min-height", h[0].height()),
        h[1].css("min-width", h[1].width())
    }
    ,
    v = function(e) {
        var t = [e[0].scrollWidth, Math.max.apply(Math, e.children().map(function() {
            return z(this).outerWidth(!0)
        }).get())]
          , o = e.parent().width();
        return o < t[0] ? t[0] : o < t[1] ? t[1] : "100%"
    }
    ,
    x = function() {
        var e, t = z(this).data(P), o = t.opt, n = z("#mCSB_" + t.idx + "_container");
        o.advanced.autoExpandHorizontalScroll && "y" !== o.axis && (n.css({
            width: "auto",
            "min-width": 0,
            "overflow-x": "scroll"
        }),
        e = Math.ceil(n[0].scrollWidth),
        3 === o.advanced.autoExpandHorizontalScroll || 2 !== o.advanced.autoExpandHorizontalScroll && e > n.parent().width() ? n.css({
            width: e,
            "min-width": "100%",
            "overflow-x": "inherit"
        }) : n.css({
            "overflow-x": "inherit",
            position: "absolute"
        }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
            width: Math.ceil(n[0].getBoundingClientRect().right + .4) - Math.floor(n[0].getBoundingClientRect().left),
            "min-width": "100%",
            position: "relative"
        }).unwrap())
    }
    ,
    w = function() {
        var e = z(this).data(P)
          , t = e.opt
          , o = z(".mCSB_" + e.idx + "_scrollbar:first")
          , n = ne(t.scrollButtons.tabindex) ? "tabindex='" + t.scrollButtons.tabindex + "'" : ""
          , a = ["<a href='#' class='" + S[13] + "' " + n + " />", "<a href='#' class='" + S[14] + "' " + n + " />", "<a href='#' class='" + S[15] + "' " + n + " />", "<a href='#' class='" + S[16] + "' " + n + " />"]
          , i = ["x" === t.axis ? a[2] : a[0], "x" === t.axis ? a[3] : a[1], a[2], a[3]];
        t.scrollButtons.enable && o.prepend(i[0]).append(i[1]).next(".mCSB_scrollTools").prepend(i[2]).append(i[3])
    }
    ,
    _ = function() {
        var e = z(this).data(P)
          , t = z("#mCSB_" + e.idx)
          , o = z("#mCSB_" + e.idx + "_container")
          , n = [z("#mCSB_" + e.idx + "_dragger_vertical"), z("#mCSB_" + e.idx + "_dragger_horizontal")]
          , a = [t.height() / o.outerHeight(!1), t.width() / o.outerWidth(!1)]
          , i = [parseInt(n[0].css("min-height")), Math.round(a[0] * n[0].parent().height()), parseInt(n[1].css("min-width")), Math.round(a[1] * n[1].parent().width())]
          , l = g && i[1] < i[0] ? i[0] : i[1]
          , r = g && i[3] < i[2] ? i[2] : i[3];
        n[0].css({
            height: l,
            "max-height": n[0].parent().height() - 10
        }).find(".mCSB_dragger_bar").css({
            "line-height": i[0] + "px"
        }),
        n[1].css({
            width: r,
            "max-width": n[1].parent().width() - 10
        })
    }
    ,
    b = function() {
        var e = z(this).data(P)
          , t = z("#mCSB_" + e.idx)
          , o = z("#mCSB_" + e.idx + "_container")
          , n = [z("#mCSB_" + e.idx + "_dragger_vertical"), z("#mCSB_" + e.idx + "_dragger_horizontal")]
          , a = [o.outerHeight(!1) - t.height(), o.outerWidth(!1) - t.width()]
          , i = [a[0] / (n[0].parent().height() - n[0].height()), a[1] / (n[1].parent().width() - n[1].width())];
        e.scrollRatio = {
            y: i[0],
            x: i[1]
        }
    }
    ,
    M = function(e, t, o) {
        var n = o ? S[0] + "_expanded" : ""
          , a = e.closest(".mCSB_scrollTools");
        "active" === t ? (e.toggleClass(S[0] + " " + n),
        a.toggleClass(S[1]),
        e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(S[0]),
        a.removeClass(S[1])) : (e.addClass(S[0]),
        a.addClass(S[1])))
    }
    ,
    C = function() {
        var e = z(this).data(P)
          , t = z("#mCSB_" + e.idx)
          , o = z("#mCSB_" + e.idx + "_container")
          , n = null == e.overflowed ? o.height() : o.outerHeight(!1)
          , a = null == e.overflowed ? o.width() : o.outerWidth(!1)
          , i = o[0].scrollHeight
          , l = o[0].scrollWidth;
        return n < i && (n = i),
        a < l && (a = l),
        [n > t.height(), a > t.width()]
    }
    ,
    y = function() {
        var e, t = z(this), o = t.data(P), n = o.opt, a = z("#mCSB_" + o.idx), i = z("#mCSB_" + o.idx + "_container"), l = [z("#mCSB_" + o.idx + "_dragger_vertical"), z("#mCSB_" + o.idx + "_dragger_horizontal")];
        G(t),
        ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(i).css("top", 0),
        J(t, "_resetY")),
        ("y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) && (e = dx = 0,
        "rtl" === o.langDir && (e = a.width() - i.outerWidth(!1),
        dx = Math.abs(e / o.scrollRatio.x)),
        i.css("left", e),
        l[1].css("left", dx),
        J(t, "_resetX"))
    }
    ,
    B = function() {
        var t, o = z(this), e = o.data(P), n = e.opt;
        e.bindEvents || (l.call(this),
        n.contentTouchScroll && D.call(this),
        O.call(this),
        n.mouseWheel.enable && function e() {
            t = setTimeout(function() {
                z.event.special.mousewheel ? (clearTimeout(t),
                I.call(o[0])) : e()
            }, 100)
        }(),
        A.call(this),
        U.call(this),
        n.advanced.autoScrollOnFocus && W.call(this),
        n.scrollButtons.enable && F.call(this),
        n.keyboard.enable && q.call(this),
        e.bindEvents = !0)
    }
    ,
    T = function() {
        var e = z(this)
          , t = e.data(P)
          , o = t.opt
          , n = "mCS_" + t.idx
          , a = ".mCSB_" + t.idx + "_scrollbar"
          , i = z("#mCSB_" + t.idx + ",#mCSB_" + t.idx + "_container,#mCSB_" + t.idx + "_container_wrapper," + a + " ." + S[12] + ",#mCSB_" + t.idx + "_dragger_vertical,#mCSB_" + t.idx + "_dragger_horizontal," + a + ">a")
          , l = z("#mCSB_" + t.idx + "_container");
        o.advanced.releaseDraggableSelectors && i.add(z(o.advanced.releaseDraggableSelectors)),
        o.advanced.extraDraggableSelectors && i.add(z(o.advanced.extraDraggableSelectors)),
        t.bindEvents && (z(document).add(z(!j() || top.document)).unbind("." + n),
        i.each(function() {
            z(this).unbind("." + n)
        }),
        clearTimeout(e[0]._focusTimeout),
        ee(e[0], "_focusTimeout"),
        clearTimeout(t.sequential.step),
        ee(t.sequential, "step"),
        clearTimeout(l[0].onCompleteTimeout),
        ee(l[0], "onCompleteTimeout"),
        t.bindEvents = !1)
    }
    ,
    k = function(e) {
        var t = z(this)
          , o = t.data(P)
          , n = o.opt
          , a = z("#mCSB_" + o.idx + "_container_wrapper")
          , i = a.length ? a : z("#mCSB_" + o.idx + "_container")
          , l = [z("#mCSB_" + o.idx + "_scrollbar_vertical"), z("#mCSB_" + o.idx + "_scrollbar_horizontal")]
          , r = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
        "x" !== n.axis && (o.overflowed[0] && !e ? (l[0].add(r[0]).add(l[0].children("a")).css("display", "block"),
        i.removeClass(S[8] + " " + S[10])) : (n.alwaysShowScrollbar ? (2 !== n.alwaysShowScrollbar && r[0].css("display", "none"),
        i.removeClass(S[10])) : (l[0].css("display", "none"),
        i.addClass(S[10])),
        i.addClass(S[8]))),
        "y" !== n.axis && (o.overflowed[1] && !e ? (l[1].add(r[1]).add(l[1].children("a")).css("display", "block"),
        i.removeClass(S[9] + " " + S[11])) : (n.alwaysShowScrollbar ? (2 !== n.alwaysShowScrollbar && r[1].css("display", "none"),
        i.removeClass(S[11])) : (l[1].css("display", "none"),
        i.addClass(S[11])),
        i.addClass(S[9]))),
        o.overflowed[0] || o.overflowed[1] ? t.removeClass(S[5]) : t.addClass(S[5])
    }
    ,
    Y = function(e) {
        var t = e.type
          , o = e.target.ownerDocument !== document && null !== frameElement ? [z(frameElement).offset().top, z(frameElement).offset().left] : null
          , n = j() && e.target.ownerDocument !== top.document && null !== frameElement ? [z(e.view.frameElement).offset().top, z(e.view.frameElement).offset().left] : [0, 0];
        switch (t) {
        case "pointerdown":
        case "MSPointerDown":
        case "pointermove":
        case "MSPointerMove":
        case "pointerup":
        case "MSPointerUp":
            return o ? [e.originalEvent.pageY - o[0] + n[0], e.originalEvent.pageX - o[1] + n[1], !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
        case "touchstart":
        case "touchmove":
        case "touchend":
            var a = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]
              , i = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
            return e.target.ownerDocument !== document ? [a.screenY, a.screenX, 1 < i] : [a.pageY, a.pageX, 1 < i];
        default:
            return o ? [e.pageY - o[0] + n[0], e.pageX - o[1] + n[1], !1] : [e.pageY, e.pageX, !1]
        }
    }
    ,
    l = function() {
        function a(e, t, o, n) {
            var a, i;
            f[0].idleTimer = u.scrollInertia < 233 ? 250 : 0,
            i = l.attr("id") === h[1] ? (a = "x",
            (l[0].offsetLeft - t + n) * d.scrollRatio.x) : (a = "y",
            (l[0].offsetTop - e + o) * d.scrollRatio.y),
            J(c, i.toString(), {
                dir: a,
                drag: !0
            })
        }
        var l, r, s, c = z(this), d = c.data(P), u = d.opt, e = "mCS_" + d.idx, h = ["mCSB_" + d.idx + "_dragger_vertical", "mCSB_" + d.idx + "_dragger_horizontal"], f = z("#mCSB_" + d.idx + "_container"), t = z("#" + h[0] + ",#" + h[1]), o = u.advanced.releaseDraggableSelectors ? t.add(z(u.advanced.releaseDraggableSelectors)) : t, n = u.advanced.extraDraggableSelectors ? z(!j() || top.document).add(z(u.advanced.extraDraggableSelectors)) : z(!j() || top.document);
        t.bind("contextmenu." + e, function(e) {
            e.preventDefault()
        }).bind("mousedown." + e + " touchstart." + e + " pointerdown." + e + " MSPointerDown." + e, function(e) {
            var t, o, n, a, i;
            e.stopImmediatePropagation(),
            e.preventDefault(),
            te(e) && (X = !0,
            g && (document.onselectstart = function() {
                return !1
            }
            ),
            L.call(f, !1),
            G(c),
            t = (l = z(this)).offset(),
            o = Y(e)[0] - t.top,
            n = Y(e)[1] - t.left,
            a = l.height() + t.top,
            i = l.width() + t.left,
            o < a && 0 < o && n < i && 0 < n && (r = o,
            s = n),
            M(l, "active", u.autoExpandScrollbar))
        }).bind("touchmove." + e, function(e) {
            e.stopImmediatePropagation(),
            e.preventDefault();
            var t = l.offset()
              , o = Y(e)[0] - t.top
              , n = Y(e)[1] - t.left;
            a(r, s, o, n)
        }),
        z(document).add(n).bind("mousemove." + e + " pointermove." + e + " MSPointerMove." + e, function(e) {
            if (l) {
                var t = l.offset()
                  , o = Y(e)[0] - t.top
                  , n = Y(e)[1] - t.left;
                if (r === o && s === n)
                    return;
                a(r, s, o, n)
            }
        }).add(o).bind("mouseup." + e + " touchend." + e + " pointerup." + e + " MSPointerUp." + e, function() {
            l && (M(l, "active", u.autoExpandScrollbar),
            l = null),
            X = !1,
            g && (document.onselectstart = null),
            L.call(f, !0)
        })
    }
    ,
    D = function() {
        function t(e) {
            if (!oe(e) || X || Y(e)[2])
                return H = 0;
            y = C = 0,
            h = H = 1,
            B.removeClass("mCS_touch_action");
            var t = D.offset();
            c = Y(e)[0] - t.top,
            f = Y(e)[1] - t.left,
            A = [Y(e)[0], Y(e)[1]]
        }
        function o(e) {
            var t, o, n, a, i, l, r, s;
            !oe(e) || X || Y(e)[2] || (M.documentTouchScroll || e.preventDefault(),
            e.stopImmediatePropagation(),
            y && !C || !h) || (v = $(),
            t = k.offset(),
            o = Y(e)[0] - t.top,
            n = Y(e)[1] - t.left,
            a = "mcsLinearOut",
            I.push(o),
            E.push(n),
            A[2] = Math.abs(Y(e)[0] - A[0]),
            A[3] = Math.abs(Y(e)[1] - A[1]),
            T.overflowed[0] && (i = O[0].parent().height() - O[0].height(),
            l = 0 < c - o && o - c > -(i * T.scrollRatio.y) && (2 * A[3] < A[2] || "yx" === M.axis)),
            T.overflowed[1] && (r = O[1].parent().width() - O[1].width(),
            s = 0 < f - n && n - f > -(r * T.scrollRatio.x) && (2 * A[2] < A[3] || "yx" === M.axis)),
            l || s ? (W || e.preventDefault(),
            C = 1) : (y = 1,
            B.addClass("mCS_touch_action")),
            W && e.preventDefault(),
            S = "yx" === M.axis ? [c - o, f - n] : "x" === M.axis ? [null, f - n] : [c - o, null],
            D[0].idleTimer = 250,
            T.overflowed[0] && u(S[0], L, a, "y", "all", !0),
            T.overflowed[1] && u(S[1], L, a, "x", R, !0))
        }
        function n(e) {
            if (!oe(e) || X || Y(e)[2])
                return H = 0;
            H = 1,
            e.stopImmediatePropagation(),
            G(B),
            g = $();
            var t = k.offset();
            m = Y(e)[0] - t.top,
            p = Y(e)[1] - t.left,
            I = [],
            E = []
        }
        function a(e) {
            var t, o, n, a, i, l, r, s, c;
            !oe(e) || X || Y(e)[2] || (h = 0,
            e.stopImmediatePropagation(),
            y = C = 0,
            x = $(),
            t = k.offset(),
            o = Y(e)[0] - t.top,
            n = Y(e)[1] - t.left,
            30 < x - v || (a = "mcsEaseOut",
            l = (i = (_ = 1e3 / (x - g)) < 2.5) ? [I[I.length - 2], E[E.length - 2]] : [0, 0],
            w = i ? [o - l[0], n - l[1]] : [o - m, n - p],
            r = [Math.abs(w[0]), Math.abs(w[1])],
            _ = i ? [Math.abs(w[0] / 4), Math.abs(w[1] / 4)] : [_, _],
            s = [Math.abs(D[0].offsetTop) - w[0] * d(r[0] / _[0], _[0]), Math.abs(D[0].offsetLeft) - w[1] * d(r[1] / _[1], _[1])],
            S = "yx" === M.axis ? [s[0], s[1]] : "x" === M.axis ? [null, s[1]] : [s[0], null],
            b = [4 * r[0] + M.scrollInertia, 4 * r[1] + M.scrollInertia],
            c = parseInt(M.contentTouchScroll) || 0,
            S[0] = c < r[0] ? S[0] : 0,
            S[1] = c < r[1] ? S[1] : 0,
            T.overflowed[0] && u(S[0], b[0], a, "y", R, !1),
            T.overflowed[1] && u(S[1], b[1], a, "x", R, !1)))
        }
        function d(e, t) {
            var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
            return 90 < e ? 4 < t ? o[0] : o[3] : 60 < e ? 3 < t ? o[3] : o[2] : 30 < e ? 8 < t ? o[1] : 6 < t ? o[0] : 4 < t ? t : o[2] : 8 < t ? t : o[3]
        }
        function u(e, t, o, n, a, i) {
            e && J(B, e.toString(), {
                dur: t,
                scrollEasing: o,
                dir: n,
                overwrite: a,
                drag: i
            })
        }
        var h, c, f, m, p, g, v, x, w, _, S, b, C, y, B = z(this), T = B.data(P), M = T.opt, e = "mCS_" + T.idx, k = z("#mCSB_" + T.idx), D = z("#mCSB_" + T.idx + "_container"), O = [z("#mCSB_" + T.idx + "_dragger_vertical"), z("#mCSB_" + T.idx + "_dragger_horizontal")], I = [], E = [], L = 0, R = "yx" === M.axis ? "none" : "all", A = [], i = D.find("iframe"), l = ["touchstart." + e + " pointerdown." + e + " MSPointerDown." + e, "touchmove." + e + " pointermove." + e + " MSPointerMove." + e, "touchend." + e + " pointerup." + e + " MSPointerUp." + e], W = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
        D.bind(l[0], function(e) {
            t(e)
        }).bind(l[1], function(e) {
            o(e)
        }),
        k.bind(l[0], function(e) {
            n(e)
        }).bind(l[2], function(e) {
            a(e)
        }),
        i.length && i.each(function() {
            z(this).bind("load", function() {
                j(this) && z(this.contentDocument || this.contentWindow.document).bind(l[0], function(e) {
                    t(e),
                    n(e)
                }).bind(l[1], function(e) {
                    o(e)
                }).bind(l[2], function(e) {
                    a(e)
                })
            })
        })
    }
    ,
    O = function() {
        function a(e, t, o) {
            s.type = o && i ? "stepped" : "stepless",
            s.scrollAmount = 10,
            N(n, e, t, "mcsLinearOut", o ? 60 : null)
        }
        var i, n = z(this), l = n.data(P), r = l.opt, s = l.sequential, e = "mCS_" + l.idx, c = z("#mCSB_" + l.idx + "_container"), d = c.parent();
        c.bind("mousedown." + e, function() {
            H || i || (i = 1,
            X = !0)
        }).add(document).bind("mousemove." + e, function(e) {
            var t, o, n;
            !H && i && (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text) && (t = c.offset(),
            o = Y(e)[0] - t.top + c[0].offsetTop,
            n = Y(e)[1] - t.left + c[0].offsetLeft,
            0 < o && o < d.height() && 0 < n && n < d.width() ? s.step && a("off", null, "stepped") : ("x" !== r.axis && l.overflowed[0] && (o < 0 ? a("on", 38) : o > d.height() && a("on", 40)),
            "y" !== r.axis && l.overflowed[1] && (n < 0 ? a("on", 37) : n > d.width() && a("on", 39))))
        }).bind("mouseup." + e + " dragend." + e, function() {
            H || (i && (i = 0,
            a("off", null)),
            X = !1)
        })
    }
    ,
    I = function() {
        function o(e, t) {
            var o, n, a, i, l, r, s, c, d;
            G(u),
            R(u, e.target) || (o = "auto" !== f.mouseWheel.deltaFactor ? parseInt(f.mouseWheel.deltaFactor) : !(g && e.deltaFactor < 100) && e.deltaFactor || 100,
            n = f.scrollInertia,
            d = "x" === f.axis || "x" === f.mouseWheel.axis ? (a = "x",
            i = [Math.round(o * h.scrollRatio.x), parseInt(f.mouseWheel.scrollAmount)],
            l = "auto" !== f.mouseWheel.scrollAmount ? i[1] : i[0] >= m.width() ? .9 * m.width() : i[0],
            r = Math.abs(z("#mCSB_" + h.idx + "_container")[0].offsetLeft),
            s = p[1][0].offsetLeft,
            c = p[1].parent().width() - p[1].width(),
            "y" === f.mouseWheel.axis ? e.deltaY || t : e.deltaX) : (a = "y",
            i = [Math.round(o * h.scrollRatio.y), parseInt(f.mouseWheel.scrollAmount)],
            l = "auto" !== f.mouseWheel.scrollAmount ? i[1] : i[0] >= m.height() ? .9 * m.height() : i[0],
            r = Math.abs(z("#mCSB_" + h.idx + "_container")[0].offsetTop),
            s = p[0][0].offsetTop,
            c = p[0].parent().height() - p[0].height(),
            e.deltaY || t),
            "y" === a && !h.overflowed[0] || "x" === a && !h.overflowed[1] || ((f.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) && (d = -d),
            f.mouseWheel.normalizeDelta && (d = d < 0 ? -1 : 1),
            (0 < d && 0 !== s || d < 0 && s !== c || f.mouseWheel.preventDefault) && (e.stopImmediatePropagation(),
            e.preventDefault()),
            e.deltaFactor < 5 && !f.mouseWheel.normalizeDelta && (l = e.deltaFactor,
            n = 17),
            J(u, (r - d * l).toString(), {
                dir: a,
                dur: n
            })))
        }
        var u, h, f, e, m, p, t;
        z(this).data(P) && (u = z(this),
        h = u.data(P),
        f = h.opt,
        e = "mCS_" + h.idx,
        m = z("#mCSB_" + h.idx),
        p = [z("#mCSB_" + h.idx + "_dragger_vertical"), z("#mCSB_" + h.idx + "_dragger_horizontal")],
        (t = z("#mCSB_" + h.idx + "_container").find("iframe")).length && t.each(function() {
            z(this).bind("load", function() {
                j(this) && z(this.contentDocument || this.contentWindow.document).bind("mousewheel." + e, function(e, t) {
                    o(e, t)
                })
            })
        }),
        m.bind("mousewheel." + e, function(e, t) {
            o(e, t)
        }))
    }
    ,
    E = new Object,
    j = function(e) {
        var t = !1
          , o = !1
          , n = null;
        if (void 0 === e ? o = "#empty" : void 0 !== z(e).attr("id") && (o = z(e).attr("id")),
        !1 !== o && void 0 !== E[o])
            return E[o];
        if (e) {
            try {
                n = (e.contentDocument || e.contentWindow.document).body.innerHTML
            } catch (e) {}
            t = null !== n
        } else {
            try {
                n = top.document.body.innerHTML
            } catch (e) {}
            t = null !== n
        }
        return !1 !== o && (E[o] = t),
        t
    }
    ,
    L = function(e) {
        var t, o = this.find("iframe");
        o.length && (t = e ? "auto" : "none",
        o.css("pointer-events", t))
    }
    ,
    R = function(e, t) {
        var o = t.nodeName.toLowerCase()
          , n = e.data(P).opt.mouseWheel.disableOver;
        return -1 < z.inArray(o, n) && !(-1 < z.inArray(o, ["select", "textarea"]) && !z(t).is(":focus"))
    }
    ,
    A = function() {
        var l, r = z(this), s = r.data(P), e = "mCS_" + s.idx, c = z("#mCSB_" + s.idx + "_container"), d = c.parent();
        z(".mCSB_" + s.idx + "_scrollbar ." + S[12]).bind("mousedown." + e + " touchstart." + e + " pointerdown." + e + " MSPointerDown." + e, function(e) {
            X = !0,
            z(e.target).hasClass("mCSB_dragger") || (l = 1)
        }).bind("touchend." + e + " pointerup." + e + " MSPointerUp." + e, function() {
            X = !1
        }).bind("click." + e, function(e) {
            if (l && (l = 0,
            z(e.target).hasClass(S[12]) || z(e.target).hasClass("mCSB_draggerRail"))) {
                G(r);
                var t = z(this)
                  , o = t.find(".mCSB_dragger");
                if (0 < t.parent(".mCSB_scrollTools_horizontal").length) {
                    if (!s.overflowed[1])
                        return;
                    var n = "x"
                      , a = e.pageX > o.offset().left ? -1 : 1
                      , i = Math.abs(c[0].offsetLeft) - a * (.9 * d.width())
                } else {
                    if (!s.overflowed[0])
                        return;
                    n = "y",
                    a = e.pageY > o.offset().top ? -1 : 1,
                    i = Math.abs(c[0].offsetTop) - a * (.9 * d.height())
                }
                J(r, i.toString(), {
                    dir: n,
                    scrollEasing: "mcsEaseInOut"
                })
            }
        })
    }
    ,
    W = function() {
        var i = z(this)
          , e = i.data(P)
          , l = e.opt
          , t = "mCS_" + e.idx
          , r = z("#mCSB_" + e.idx + "_container")
          , s = r.parent();
        r.bind("focusin." + t, function() {
            var a = z(document.activeElement)
              , e = r.find(".mCustomScrollBox").length;
            a.is(l.advanced.autoScrollOnFocus) && (G(i),
            clearTimeout(i[0]._focusTimeout),
            i[0]._focusTimer = e ? 17 * e : 0,
            i[0]._focusTimeout = setTimeout(function() {
                var e = [ae(a)[0], ae(a)[1]]
                  , t = [r[0].offsetTop, r[0].offsetLeft]
                  , o = [0 <= t[0] + e[0] && t[0] + e[0] < s.height() - a.outerHeight(!1), 0 <= t[1] + e[1] && t[0] + e[1] < s.width() - a.outerWidth(!1)]
                  , n = "yx" !== l.axis || o[0] || o[1] ? "all" : "none";
                "x" === l.axis || o[0] || J(i, e[0].toString(), {
                    dir: "y",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: n,
                    dur: 0
                }),
                "y" === l.axis || o[1] || J(i, e[1].toString(), {
                    dir: "x",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: n,
                    dur: 0
                })
            }, i[0]._focusTimer))
        })
    }
    ,
    U = function() {
        var e = z(this).data(P)
          , t = "mCS_" + e.idx
          , o = z("#mCSB_" + e.idx + "_container").parent();
        o.bind("scroll." + t, function() {
            0 === o.scrollTop() && 0 === o.scrollLeft() || z(".mCSB_" + e.idx + "_scrollbar").css("visibility", "hidden")
        })
    }
    ,
    F = function() {
        var n = z(this)
          , a = n.data(P)
          , i = a.opt
          , l = a.sequential
          , e = "mCS_" + a.idx
          , t = ".mCSB_" + a.idx + "_scrollbar";
        z(t + ">a").bind("contextmenu." + e, function(e) {
            e.preventDefault()
        }).bind("mousedown." + e + " touchstart." + e + " pointerdown." + e + " MSPointerDown." + e + " mouseup." + e + " touchend." + e + " pointerup." + e + " MSPointerUp." + e + " mouseout." + e + " pointerout." + e + " MSPointerOut." + e + " click." + e, function(e) {
            function t(e, t) {
                l.scrollAmount = i.scrollButtons.scrollAmount,
                N(n, e, t)
            }
            if (e.preventDefault(),
            te(e)) {
                var o = z(this).attr("class");
                switch (l.type = i.scrollButtons.scrollType,
                e.type) {
                case "mousedown":
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                    if ("stepped" === l.type)
                        return;
                    X = !0,
                    a.tweenRunning = !1,
                    t("on", o);
                    break;
                case "mouseup":
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseout":
                case "pointerout":
                case "MSPointerOut":
                    if ("stepped" === l.type)
                        return;
                    X = !1,
                    l.dir && t("off", o);
                    break;
                case "click":
                    if ("stepped" !== l.type || a.tweenRunning)
                        return;
                    t("on", o)
                }
            }
        })
    }
    ,
    q = function() {
        function t(e) {
            function t(e, t) {
                d.type = c.keyboard.scrollType,
                d.scrollAmount = c.keyboard.scrollAmount,
                "stepped" === d.type && s.tweenRunning || N(r, e, t)
            }
            switch (e.type) {
            case "blur":
                s.tweenRunning && d.dir && t("off", null);
                break;
            case "keydown":
            case "keyup":
                var o, n, a, i = e.keyCode ? e.keyCode : e.which, l = "on";
                if ("x" !== c.axis && (38 === i || 40 === i) || "y" !== c.axis && (37 === i || 39 === i)) {
                    if ((38 === i || 40 === i) && !s.overflowed[0] || (37 === i || 39 === i) && !s.overflowed[1])
                        return;
                    "keyup" === e.type && (l = "off"),
                    z(document.activeElement).is(f) || (e.preventDefault(),
                    e.stopImmediatePropagation(),
                    t(l, i))
                } else {
                    33 === i || 34 === i ? ((s.overflowed[0] || s.overflowed[1]) && (e.preventDefault(),
                    e.stopImmediatePropagation()),
                    "keyup" === e.type && (G(r),
                    o = 34 === i ? -1 : 1,
                    a = "x" === c.axis || "yx" === c.axis && s.overflowed[1] && !s.overflowed[0] ? (n = "x",
                    Math.abs(u[0].offsetLeft) - o * (.9 * h.width())) : (n = "y",
                    Math.abs(u[0].offsetTop) - o * (.9 * h.height())),
                    J(r, a.toString(), {
                        dir: n,
                        scrollEasing: "mcsEaseInOut"
                    }))) : 35 !== i && 36 !== i || z(document.activeElement).is(f) || ((s.overflowed[0] || s.overflowed[1]) && (e.preventDefault(),
                    e.stopImmediatePropagation()),
                    "keyup" !== e.type) || (a = "x" === c.axis || "yx" === c.axis && s.overflowed[1] && !s.overflowed[0] ? (n = "x",
                    35 === i ? Math.abs(h.width() - u.outerWidth(!1)) : 0) : (n = "y",
                    35 === i ? Math.abs(h.height() - u.outerHeight(!1)) : 0),
                    J(r, a.toString(), {
                        dir: n,
                        scrollEasing: "mcsEaseInOut"
                    }))
                }
            }
        }
        var r = z(this)
          , s = r.data(P)
          , c = s.opt
          , d = s.sequential
          , e = "mCS_" + s.idx
          , o = z("#mCSB_" + s.idx)
          , u = z("#mCSB_" + s.idx + "_container")
          , h = u.parent()
          , f = "input,textarea,select,datalist,keygen,[contenteditable='true']"
          , n = u.find("iframe")
          , a = ["blur." + e + " keydown." + e + " keyup." + e];
        n.length && n.each(function() {
            z(this).bind("load", function() {
                j(this) && z(this.contentDocument || this.contentWindow.document).bind(a[0], function(e) {
                    t(e)
                })
            })
        }),
        o.attr("tabindex", "0").bind(a[0], function(e) {
            t(e)
        })
    }
    ,
    N = function(u, e, t, h, f) {
        function m(e) {
            g.snapAmount && (v.scrollAmount = g.snapAmount instanceof Array ? "x" === v.dir[0] ? g.snapAmount[1] : g.snapAmount[0] : g.snapAmount);
            var t = "stepped" !== v.type
              , o = f || (e ? t ? w / 1.5 : _ : 1e3 / 60)
              , n = e ? t ? 7.5 : 40 : 2.5
              , a = [Math.abs(x[0].offsetTop), Math.abs(x[0].offsetLeft)]
              , i = [10 < p.scrollRatio.y ? 10 : p.scrollRatio.y, 10 < p.scrollRatio.x ? 10 : p.scrollRatio.x]
              , l = "x" === v.dir[0] ? a[1] + v.dir[1] * (i[1] * n) : a[0] + v.dir[1] * (i[0] * n)
              , r = "x" === v.dir[0] ? a[1] + v.dir[1] * parseInt(v.scrollAmount) : a[0] + v.dir[1] * parseInt(v.scrollAmount)
              , s = "auto" !== v.scrollAmount ? r : l
              , c = h || (e ? t ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear")
              , d = !!e;
            return e && o < 17 && (s = "x" === v.dir[0] ? a[1] : a[0]),
            J(u, s.toString(), {
                dir: v.dir[0],
                scrollEasing: c,
                dur: o,
                onComplete: d
            }),
            e ? void (v.dir = !1) : (clearTimeout(v.step),
            void (v.step = setTimeout(function() {
                m()
            }, o)))
        }
        var p = u.data(P)
          , g = p.opt
          , v = p.sequential
          , x = z("#mCSB_" + p.idx + "_container")
          , o = "stepped" === v.type
          , w = g.scrollInertia < 26 ? 26 : g.scrollInertia
          , _ = g.scrollInertia < 1 ? 17 : g.scrollInertia;
        switch (e) {
        case "on":
            if (v.dir = [t === S[16] || t === S[15] || 39 === t || 37 === t ? "x" : "y", t === S[13] || t === S[15] || 38 === t || 37 === t ? -1 : 1],
            G(u),
            ne(t) && "stepped" === v.type)
                return;
            m(o);
            break;
        case "off":
            clearTimeout(v.step),
            ee(v, "step"),
            G(u),
            (o || p.tweenRunning && v.dir) && m(!0)
        }
    }
    ,
    V = function(e) {
        var t = z(this).data(P).opt
          , o = [];
        return "function" == typeof e && (e = e()),
        e instanceof Array ? o = 1 < e.length ? [e[0], e[1]] : "x" === t.axis ? [null, e[0]] : [e[0], null] : (o[0] = e.y ? e.y : e.x || "x" === t.axis ? null : e,
        o[1] = e.x ? e.x : e.y || "y" === t.axis ? null : e),
        "function" == typeof o[0] && (o[0] = o[0]()),
        "function" == typeof o[1] && (o[1] = o[1]()),
        o
    }
    ,
    Q = function(e, t) {
        if (null != e && void 0 !== e) {
            var o = z(this)
              , n = o.data(P)
              , a = n.opt
              , i = z("#mCSB_" + n.idx + "_container")
              , l = i.parent()
              , r = typeof e
              , s = "x" === (t = t || ("x" === a.axis ? "x" : "y")) ? i.outerWidth(!1) - l.width() : i.outerHeight(!1) - l.height()
              , c = "x" === t ? i[0].offsetLeft : i[0].offsetTop
              , d = "x" === t ? "left" : "top";
            switch (r) {
            case "function":
                return e();
            case "object":
                if (!(h = e.jquery ? e : z(e)).length)
                    return;
                return "x" === t ? ae(h)[1] : ae(h)[0];
            case "string":
            case "number":
                if (ne(e))
                    return Math.abs(e);
                if (-1 !== e.indexOf("%"))
                    return Math.abs(s * parseInt(e) / 100);
                if (-1 !== e.indexOf("-="))
                    return Math.abs(c - parseInt(e.split("-=")[1]));
                if (-1 !== e.indexOf("+=")) {
                    var u = c + parseInt(e.split("+=")[1]);
                    return 0 <= u ? 0 : Math.abs(u)
                }
                if (-1 !== e.indexOf("px") && ne(e.split("px")[0]))
                    return Math.abs(e.split("px")[0]);
                if ("top" === e || "left" === e)
                    return 0;
                if ("bottom" === e)
                    return Math.abs(l.height() - i.outerHeight(!1));
                if ("right" === e)
                    return Math.abs(l.width() - i.outerWidth(!1));
                if ("first" !== e && "last" !== e)
                    return z(e).length ? "x" === t ? ae(z(e))[1] : ae(z(e))[0] : (i.css(d, e),
                    void m.update.call(null, o[0]));
                var h = i.find(":" + e);
                return "x" === t ? ae(h)[1] : ae(h)[0]
            }
        }
    }
    ,
    Z = function(e) {
        function o(e) {
            clearTimeout(i[0].autoUpdate),
            m.update.call(null, t[0], e)
        }
        var t = z(this)
          , n = t.data(P)
          , a = n.opt
          , i = z("#mCSB_" + n.idx + "_container");
        return e ? (clearTimeout(i[0].autoUpdate),
        void ee(i[0], "autoUpdate")) : void function e() {
            return clearTimeout(i[0].autoUpdate),
            0 === t.parents("html").length ? void (t = null) : void (i[0].autoUpdate = setTimeout(function() {
                return a.advanced.updateOnSelectorChange && (n.poll.change.n = function() {
                    !0 === a.advanced.updateOnSelectorChange && (a.advanced.updateOnSelectorChange = "*");
                    var e = 0
                      , t = i.find(a.advanced.updateOnSelectorChange);
                    return a.advanced.updateOnSelectorChange && 0 < t.length && t.each(function() {
                        e += this.offsetHeight + this.offsetWidth
                    }),
                    e
                }(),
                n.poll.change.n !== n.poll.change.o) ? (n.poll.change.o = n.poll.change.n,
                void o(3)) : a.advanced.updateOnContentResize && (n.poll.size.n = t[0].scrollHeight + t[0].scrollWidth + i[0].offsetHeight + t[0].offsetHeight + t[0].offsetWidth,
                n.poll.size.n !== n.poll.size.o) ? (n.poll.size.o = n.poll.size.n,
                void o(1)) : !a.advanced.updateOnImageLoad || "auto" === a.advanced.updateOnImageLoad && "y" === a.axis || (n.poll.img.n = i.find("img").length,
                n.poll.img.n === n.poll.img.o) ? void ((a.advanced.updateOnSelectorChange || a.advanced.updateOnContentResize || a.advanced.updateOnImageLoad) && e()) : (n.poll.img.o = n.poll.img.n,
                void i.find("img").each(function() {
                    !function(e) {
                        if (z(e).hasClass(S[2]))
                            return o();
                        var t = new Image;
                        t.onload = function(e, t) {
                            return function() {
                                return t.apply(e, arguments)
                            }
                        }(t, function() {
                            this.onload = null,
                            z(e).addClass(S[2]),
                            o(2)
                        }),
                        t.src = e.src
                    }(this)
                }))
            }, a.advanced.autoUpdateTimeout))
        }()
    }
    ,
    G = function(e) {
        var t = e.data(P);
        z("#mCSB_" + t.idx + "_container,#mCSB_" + t.idx + "_container_wrapper,#mCSB_" + t.idx + "_dragger_vertical,#mCSB_" + t.idx + "_dragger_horizontal").each(function() {
            o.call(this)
        })
    }
    ,
    J = function(a, e, i) {
        function t(e) {
            return c && d.callbacks[e] && "function" == typeof d.callbacks[e]
        }
        function o() {
            var e = [m[0].offsetTop, m[0].offsetLeft]
              , t = [x[0].offsetTop, x[0].offsetLeft]
              , o = [m.outerHeight(!1), m.outerWidth(!1)]
              , n = [f.height(), f.width()];
            a[0].mcs = {
                content: m,
                top: e[0],
                left: e[1],
                draggerTop: t[0],
                draggerLeft: t[1],
                topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(o[0]) - n[0])),
                leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(o[1]) - n[1])),
                direction: i.dir
            }
        }
        var n, l, r, s, c = a.data(P), d = c.opt, u = {
            trigger: "internal",
            dir: "y",
            scrollEasing: "mcsEaseOut",
            drag: !1,
            dur: d.scrollInertia,
            overwrite: "all",
            callbacks: !0,
            onStart: !0,
            onUpdate: !0,
            onComplete: !0
        }, h = [(i = z.extend(u, i)).dur, i.drag ? 0 : i.dur], f = z("#mCSB_" + c.idx), m = z("#mCSB_" + c.idx + "_container"), p = m.parent(), g = d.callbacks.onTotalScrollOffset ? V.call(a, d.callbacks.onTotalScrollOffset) : [0, 0], v = d.callbacks.onTotalScrollBackOffset ? V.call(a, d.callbacks.onTotalScrollBackOffset) : [0, 0];
        if (c.trigger = i.trigger,
        0 === p.scrollTop() && 0 === p.scrollLeft() || (z(".mCSB_" + c.idx + "_scrollbar").css("visibility", "visible"),
        p.scrollTop(0).scrollLeft(0)),
        "_resetY" !== e || c.contentReset.y || (t("onOverflowYNone") && d.callbacks.onOverflowYNone.call(a[0]),
        c.contentReset.y = 1),
        "_resetX" !== e || c.contentReset.x || (t("onOverflowXNone") && d.callbacks.onOverflowXNone.call(a[0]),
        c.contentReset.x = 1),
        "_resetY" !== e && "_resetX" !== e) {
            switch (!c.contentReset.y && a[0].mcs || !c.overflowed[0] || (t("onOverflowY") && d.callbacks.onOverflowY.call(a[0]),
            c.contentReset.x = null),
            !c.contentReset.x && a[0].mcs || !c.overflowed[1] || (t("onOverflowX") && d.callbacks.onOverflowX.call(a[0]),
            c.contentReset.x = null),
            d.snapAmount && (n = d.snapAmount instanceof Array ? "x" === i.dir ? d.snapAmount[1] : d.snapAmount[0] : d.snapAmount,
            l = e,
            r = n,
            s = d.snapOffset,
            e = Math.round(l / r) * r - s),
            i.dir) {
            case "x":
                var x = z("#mCSB_" + c.idx + "_dragger_horizontal")
                  , w = "left"
                  , _ = m[0].offsetLeft
                  , S = [f.width() - m.outerWidth(!1), x.parent().width() - x.width()]
                  , b = [e, 0 === e ? 0 : e / c.scrollRatio.x]
                  , C = g[1]
                  , y = v[1]
                  , B = 0 < C ? C / c.scrollRatio.x : 0
                  , T = 0 < y ? y / c.scrollRatio.x : 0;
                break;
            case "y":
                x = z("#mCSB_" + c.idx + "_dragger_vertical"),
                w = "top",
                _ = m[0].offsetTop,
                S = [f.height() - m.outerHeight(!1), x.parent().height() - x.height()],
                b = [e, 0 === e ? 0 : e / c.scrollRatio.y],
                C = g[0],
                y = v[0],
                B = 0 < C ? C / c.scrollRatio.y : 0,
                T = 0 < y ? y / c.scrollRatio.y : 0
            }
            b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0],
            a[0].mcs || (o(),
            t("onInit") && d.callbacks.onInit.call(a[0])),
            clearTimeout(m[0].onCompleteTimeout),
            K(x[0], w, Math.round(b[1]), h[1], i.scrollEasing),
            !c.tweenRunning && (0 === _ && 0 <= b[0] || _ === S[0] && b[0] <= S[0]) || K(m[0], w, Math.round(b[0]), h[0], i.scrollEasing, i.overwrite, {
                onStart: function() {
                    i.callbacks && i.onStart && !c.tweenRunning && (t("onScrollStart") && (o(),
                    d.callbacks.onScrollStart.call(a[0])),
                    c.tweenRunning = !0,
                    M(x),
                    c.cbOffsets = [d.callbacks.alwaysTriggerOffsets || _ >= S[0] + C, d.callbacks.alwaysTriggerOffsets || _ <= -y])
                },
                onUpdate: function() {
                    i.callbacks && i.onUpdate && t("whileScrolling") && (o(),
                    d.callbacks.whileScrolling.call(a[0]))
                },
                onComplete: function() {
                    var e;
                    i.callbacks && i.onComplete && ("yx" === d.axis && clearTimeout(m[0].onCompleteTimeout),
                    e = m[0].idleTimer || 0,
                    m[0].onCompleteTimeout = setTimeout(function() {
                        t("onScroll") && (o(),
                        d.callbacks.onScroll.call(a[0])),
                        t("onTotalScroll") && b[1] >= S[1] - B && c.cbOffsets[0] && (o(),
                        d.callbacks.onTotalScroll.call(a[0])),
                        t("onTotalScrollBack") && b[1] <= T && c.cbOffsets[1] && (o(),
                        d.callbacks.onTotalScrollBack.call(a[0])),
                        c.tweenRunning = !1,
                        m[0].idleTimer = 0,
                        M(x, "hide")
                    }, e))
                }
            })
        }
    }
    ,
    K = function(e, t, o, n, a, i, l) {
        function r() {
            x.stop || (p || u.call(),
            p = $() - m,
            s(),
            p >= x.time && (x.time = p > x.time ? p + c - (p - x.time) : p + c - 1,
            x.time < p + 1 && (x.time = p + 1)),
            x.time < n ? x.id = d(r) : f.call())
        }
        function s() {
            0 < n ? (x.currVal = function(e, t, o, n, a) {
                switch (a) {
                case "linear":
                case "mcsLinear":
                    return o * e / n + t;
                case "mcsLinearOut":
                    return e /= n,
                    e--,
                    o * Math.sqrt(1 - e * e) + t;
                case "easeInOutSmooth":
                    return (e /= n / 2) < 1 ? o / 2 * e * e + t : -o / 2 * (--e * (e - 2) - 1) + t;
                case "easeInOutStrong":
                    return (e /= n / 2) < 1 ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--,
                    o / 2 * (2 - Math.pow(2, -10 * e)) + t);
                case "easeInOut":
                case "mcsEaseInOut":
                    return (e /= n / 2) < 1 ? o / 2 * e * e * e + t : o / 2 * ((e -= 2) * e * e + 2) + t;
                case "easeOutSmooth":
                    return e /= n,
                    -o * (--e * e * e * e - 1) + t;
                case "easeOutStrong":
                    return o * (1 - Math.pow(2, -10 * e / n)) + t;
                case "easeOut":
                case "mcsEaseOut":
                default:
                    var i = (e /= n) * e
                      , l = i * e;
                    return t + o * (.499999999999997 * l * i + -2.5 * i * i + 5.5 * l + -6.5 * i + 4 * e)
                }
            }(x.time, g, w, n, a),
            v[t] = Math.round(x.currVal) + "px") : v[t] = o + "px",
            h.call()
        }
        e._mTween || (e._mTween = {
            top: {},
            left: {}
        });
        var c, d, u = (l = l || {}).onStart || function() {}
        , h = l.onUpdate || function() {}
        , f = l.onComplete || function() {}
        , m = $(), p = 0, g = e.offsetTop, v = e.style, x = e._mTween[t];
        "left" === t && (g = e.offsetLeft);
        var w = o - g;
        x.stop = 0,
        "none" === i || null != x.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(x.id) : clearTimeout(x.id),
        x.id = null),
        c = 1e3 / 60,
        x.time = p + c,
        d = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
            return s(),
            setTimeout(e, .01)
        }
        ,
        x.id = d(r)
    }
    ,
    $ = function() {
        return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
    }
    ,
    o = function() {
        var e = this;
        e._mTween || (e._mTween = {
            top: {},
            left: {}
        });
        for (var t = ["top", "left"], o = 0; o < t.length; o++) {
            var n = t[o];
            e._mTween[n].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[n].id) : clearTimeout(e._mTween[n].id),
            e._mTween[n].id = null,
            e._mTween[n].stop = 1)
        }
    }
    ,
    ee = function(t, o) {
        try {
            delete t[o]
        } catch (e) {
            t[o] = null
        }
    }
    ,
    te = function(e) {
        return !(e.which && 1 !== e.which)
    }
    ,
    oe = function(e) {
        var t = e.originalEvent.pointerType;
        return !(t && "touch" !== t && 2 !== t)
    }
    ,
    ne = function(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }
    ,
    ae = function(e) {
        var t = e.parents(".mCSB_container");
        return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
    }
    ,
    ie = function() {
        var e = function() {
            var e = ["webkit", "moz", "ms", "o"];
            if ("hidden"in document)
                return "hidden";
            for (var t = 0; t < e.length; t++)
                if (e[t] + "Hidden"in document)
                    return e[t] + "Hidden";
            return null
        }();
        return !!e && document[e]
    }
    ,
    z.fn[f] = function(e) {
        return m[e] ? m[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void z.error("Method " + e + " does not exist") : m.init.apply(this, arguments)
    }
    ,
    z[f] = function(e) {
        return m[e] ? m[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void z.error("Method " + e + " does not exist") : m.init.apply(this, arguments)
    }
    ,
    z[f].defaults = a,
    window[f] = !0,
    z(window).bind("load", function() {
        z(n)[f](),
        z.extend(z.expr[":"], {
            mcsInView: z.expr[":"].mcsInView || function(e) {
                var t, o, n = z(e), a = n.parents(".mCSB_container");
                if (a.length)
                    return t = a.parent(),
                    0 <= (o = [a[0].offsetTop, a[0].offsetLeft])[0] + ae(n)[0] && o[0] + ae(n)[0] < t.height() - n.outerHeight(!1) && 0 <= o[1] + ae(n)[1] && o[1] + ae(n)[1] < t.width() - n.outerWidth(!1)
            }
            ,
            mcsInSight: z.expr[":"].mcsInSight || function(e, t, o) {
                var n, a, i, l, r = z(e), s = r.parents(".mCSB_container"), c = "exact" === o[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
                if (s.length)
                    return n = [r.outerHeight(!1), r.outerWidth(!1)],
                    i = [s[0].offsetTop + ae(r)[0], s[0].offsetLeft + ae(r)[1]],
                    a = [s.parent()[0].offsetHeight, s.parent()[0].offsetWidth],
                    i[0] - a[0] * (l = [n[0] < a[0] ? c[0] : c[1], n[1] < a[1] ? c[0] : c[1]])[0][0] < 0 && 0 <= i[0] + n[0] - a[0] * l[0][1] && i[1] - a[1] * l[1][0] < 0 && 0 <= i[1] + n[1] - a[1] * l[1][1]
            }
            ,
            mcsOverflow: z.expr[":"].mcsOverflow || function(e) {
                var t = z(e).data(P);
                if (t)
                    return t.overflowed[0] || t.overflowed[1]
            }
        })
    })
});
"function" !== typeof Object.create && (Object.create = function(f) {
    function g() {}
    g.prototype = f;
    return new g
}
);
(function(f, g, k) {
    var l = {
        init: function(a, b) {
            this.$elem = f(b);
            this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);
            this.userOptions = a;
            this.loadContent()
        },
        loadContent: function() {
            function a(a) {
                var d, e = "";
                if ("function" === typeof b.options.jsonSuccess)
                    b.options.jsonSuccess.apply(this, [a]);
                else {
                    for (d in a.owl)
                        a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
                    b.$elem.html(e)
                }
                b.logIn()
            }
            var b = this, e;
            "function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);
            "string" === typeof b.options.jsonPath ? (e = b.options.jsonPath,
            f.getJSON(e, a)) : b.logIn()
        },
        logIn: function() {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
            this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
            this.$elem.css({
                opacity: 0
            });
            this.orignalItems = this.options.items;
            this.checkBrowser();
            this.wrapperWidth = 0;
            this.checkVisible = null;
            this.setVars()
        },
        setVars: function() {
            if (0 === this.$elem.children().length)
                return !1;
            this.baseClass();
            this.eventTypes();
            this.$userItems = this.$elem.children();
            this.itemsAmount = this.$userItems.length;
            this.wrapItems();
            this.$owlItems = this.$elem.find(".owl-item");
            this.$owlWrapper = this.$elem.find(".owl-wrapper");
            this.playDirection = "next";
            this.prevItem = 0;
            this.prevArr = [0];
            this.currentItem = 0;
            this.customEvents();
            this.onStartup()
        },
        onStartup: function() {
            this.updateItems();
            this.calculateAll();
            this.buildControls();
            this.updateControls();
            this.response();
            this.moveEvents();
            this.stopOnHover();
            this.owlStatus();
            !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
            !0 === this.options.autoPlay && (this.options.autoPlay = 5E3);
            this.play();
            this.$elem.find(".owl-wrapper").css("display", "block");
            this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
            this.onstartup = !1;
            this.eachMoveUpdate();
            "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        },
        eachMoveUpdate: function() {
            !0 === this.options.lazyLoad && this.lazyLoad();
            !0 === this.options.autoHeight && this.autoHeight();
            this.onVisibleItems();
            "function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
        },
        updateVars: function() {
            "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
            this.watchVisibility();
            this.updateItems();
            this.calculateAll();
            this.updatePosition();
            this.updateControls();
            this.eachMoveUpdate();
            "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        },
        reload: function() {
            var a = this;
            g.setTimeout(function() {
                a.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var a = this;
            if (!1 === a.$elem.is(":visible"))
                a.$elem.css({
                    opacity: 0
                }),
                g.clearInterval(a.autoPlayInterval),
                g.clearInterval(a.checkVisible);
            else
                return !1;
            a.checkVisible = g.setInterval(function() {
                a.$elem.is(":visible") && (a.reload(),
                a.$elem.animate({
                    opacity: 1
                }, 200),
                g.clearInterval(a.checkVisible))
            }, 500)
        },
        wrapItems: function() {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
            this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
            this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
            this.$elem.css("display", "block")
        },
        baseClass: function() {
            var a = this.$elem.hasClass(this.options.baseClass)
              , b = this.$elem.hasClass(this.options.theme);
            a || this.$elem.addClass(this.options.baseClass);
            b || this.$elem.addClass(this.options.theme)
        },
        updateItems: function() {
            var a, b;
            if (!1 === this.options.responsive)
                return !1;
            if (!0 === this.options.singleItem)
                return this.options.items = this.orignalItems = 1,
                this.options.itemsCustom = !1,
                this.options.itemsDesktop = !1,
                this.options.itemsDesktopSmall = !1,
                this.options.itemsTablet = !1,
                this.options.itemsTabletSmall = !1,
                this.options.itemsMobile = !1;
            a = f(this.options.responsiveBaseWidth).width();
            a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
            if (!1 !== this.options.itemsCustom)
                for (this.options.itemsCustom.sort(function(a, b) {
                    return a[0] - b[0]
                }),
                b = 0; b < this.options.itemsCustom.length; b += 1)
                    this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
            else
                a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]),
                a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]),
                a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]),
                a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]),
                a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        },
        response: function() {
            var a = this, b, e;
            if (!0 !== a.options.responsive)
                return !1;
            e = f(g).width();
            a.resizer = function() {
                f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval),
                g.clearTimeout(b),
                b = g.setTimeout(function() {
                    e = f(g).width();
                    a.updateVars()
                }, a.options.responsiveRefreshRate))
            }
            ;
            f(g).resize(a.resizer)
        },
        updatePosition: function() {
            this.jumpTo(this.currentItem);
            !1 !== this.options.autoPlay && this.checkAp()
        },
        appendItemsSizes: function() {
            var a = this
              , b = 0
              , e = a.itemsAmount - a.options.items;
            a.$owlItems.each(function(c) {
                var d = f(this);
                d.css({
                    width: a.itemWidth
                }).data("owl-item", Number(c));
                if (0 === c % a.options.items || c === e)
                    c > e || (b += 1);
                d.data("owl-roundPages", b)
            })
        },
        appendWrapperSizes: function() {
            this.$owlWrapper.css({
                width: this.$owlItems.length * this.itemWidth * 2,
                left: 0
            });
            this.appendItemsSizes()
        },
        calculateAll: function() {
            this.calculateWidth();
            this.appendWrapperSizes();
            this.loops();
            this.max()
        },
        calculateWidth: function() {
            this.itemWidth = Math.round(this.$elem.width() / this.options.items)
        },
        max: function() {
            var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items,
            this.maximumPixels = a);
            return a
        },
        min: function() {
            return 0
        },
        loops: function() {
            var a = 0, b = 0, e, c;
            this.positionsInArray = [0];
            this.pagesInArray = [];
            for (e = 0; e < this.itemsAmount; e += 1)
                b += this.itemWidth,
                this.positionsInArray.push(-b),
                !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]),
                c = c.data("owl-roundPages"),
                c !== a && (this.pagesInArray[a] = this.positionsInArray[e],
                a = c))
        },
        buildControls: function() {
            if (!0 === this.options.navigation || !0 === this.options.pagination)
                this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
            !0 === this.options.pagination && this.buildPagination();
            !0 === this.options.navigation && this.buildButtons()
        },
        buildButtons: function() {
            var a = this
              , b = f('<div class="owl-buttons"/>');
            a.owlControls.append(b);
            a.buttonPrev = f("<div/>", {
                "class": "owl-prev",
                html: a.options.navigationText[0] || ""
            });
            a.buttonNext = f("<div/>", {
                "class": "owl-next",
                html: a.options.navigationText[1] || ""
            });
            b.append(a.buttonPrev).append(a.buttonNext);
            b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(a) {
                a.preventDefault()
            });
            b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(b) {
                b.preventDefault();
                f(this).hasClass("owl-next") ? a.next() : a.prev()
            })
        },
        buildPagination: function() {
            var a = this;
            a.paginationWrapper = f('<div class="owl-pagination"/>');
            a.owlControls.append(a.paginationWrapper);
            a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(b) {
                b.preventDefault();
                Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0)
            })
        },
        updatePagination: function() {
            var a, b, e, c, d, g;
            if (!1 === this.options.pagination)
                return !1;
            this.paginationWrapper.html("");
            a = 0;
            b = this.itemsAmount - this.itemsAmount % this.options.items;
            for (c = 0; c < this.itemsAmount; c += 1)
                0 === c % this.options.items && (a += 1,
                b === c && (e = this.itemsAmount - this.options.items),
                d = f("<div/>", {
                    "class": "owl-page"
                }),
                g = f("<span></span>", {
                    text: !0 === this.options.paginationNumbers ? a : "",
                    "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }),
                d.append(g),
                d.data("owl-page", b === c ? e : c),
                d.data("owl-roundPages", a),
                this.paginationWrapper.append(d));
            this.checkPagination()
        },
        checkPagination: function() {
            var a = this;
            if (!1 === a.options.pagination)
                return !1;
            a.paginationWrapper.find(".owl-page").each(function() {
                f(this).data("owl-roundPages") === f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"),
                f(this).addClass("active"))
            })
        },
        checkNavigation: function() {
            if (!1 === this.options.navigation)
                return !1;
            !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"),
            this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"),
            this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"),
            this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"),
            this.buttonNext.removeClass("disabled")))
        },
        updateControls: function() {
            this.updatePagination();
            this.checkNavigation();
            this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        },
        destroyControls: function() {
            this.owlControls && this.owlControls.remove()
        },
        next: function(a) {
            if (this.isTransition)
                return !1;
            this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
            if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
                if (!0 === this.options.rewindNav)
                    this.currentItem = 0,
                    a = "rewind";
                else
                    return this.currentItem = this.maximumItem,
                    !1;
            this.goTo(this.currentItem, a)
        },
        prev: function(a) {
            if (this.isTransition)
                return !1;
            this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1);
            if (0 > this.currentItem)
                if (!0 === this.options.rewindNav)
                    this.currentItem = this.maximumItem,
                    a = "rewind";
                else
                    return this.currentItem = 0,
                    !1;
            this.goTo(this.currentItem, a)
        },
        goTo: function(a, b, e) {
            var c = this;
            if (c.isTransition)
                return !1;
            "function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);
            a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);
            c.currentItem = c.owl.currentItem = a;
            if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d)
                return c.swapSpeed(0),
                !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1),
                c.afterGo(),
                c.singleItemTransition(),
                !1;
            a = c.positionsInArray[a];
            !0 === c.browser.support3d ? (c.isCss3Finish = !1,
            !0 === b ? (c.swapSpeed("paginationSpeed"),
            g.setTimeout(function() {
                c.isCss3Finish = !0
            }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed),
            g.setTimeout(function() {
                c.isCss3Finish = !0
            }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"),
            g.setTimeout(function() {
                c.isCss3Finish = !0
            }, c.options.slideSpeed)),
            c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);
            c.afterGo()
        },
        jumpTo: function(a) {
            "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
            a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);
            this.swapSpeed(0);
            !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
            this.currentItem = this.owl.currentItem = a;
            this.afterGo()
        },
        afterGo: function() {
            this.prevArr.push(this.currentItem);
            this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
            this.prevArr.shift(0);
            this.prevItem !== this.currentItem && (this.checkPagination(),
            this.checkNavigation(),
            this.eachMoveUpdate(),
            !1 !== this.options.autoPlay && this.checkAp());
            "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        },
        stop: function() {
            this.apStatus = "stop";
            g.clearInterval(this.autoPlayInterval)
        },
        checkAp: function() {
            "stop" !== this.apStatus && this.play()
        },
        play: function() {
            var a = this;
            a.apStatus = "play";
            if (!1 === a.options.autoPlay)
                return !1;
            g.clearInterval(a.autoPlayInterval);
            a.autoPlayInterval = g.setInterval(function() {
                a.next(!0)
            }, a.options.autoPlay)
        },
        swapSpeed: function(a) {
            "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
        },
        addCssSpeed: function(a) {
            return {
                "-webkit-transition": "all " + a + "ms ease",
                "-moz-transition": "all " + a + "ms ease",
                "-o-transition": "all " + a + "ms ease",
                transition: "all " + a + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function(a) {
            return {
                "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + a + "px, 0px, 0px)",
                transform: "translate3d(" + a + "px, 0px,0px)"
            }
        },
        transition3d: function(a) {
            this.$owlWrapper.css(this.doTranslate(a))
        },
        css2move: function(a) {
            this.$owlWrapper.css({
                left: a
            })
        },
        css2slide: function(a, b) {
            var e = this;
            e.isCssFinish = !1;
            e.$owlWrapper.stop(!0, !0).animate({
                left: a
            }, {
                duration: b || e.options.slideSpeed,
                complete: function() {
                    e.isCssFinish = !0
                }
            })
        },
        checkBrowser: function() {
            var a = k.createElement("div");
            a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
            a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
            this.browser = {
                support3d: null !== a && 1 === a.length,
                isTouch: "ontouchstart"in g || g.navigator.msMaxTouchPoints
            }
        },
        moveEvents: function() {
            if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag)
                this.gestures(),
                this.disabledEvents()
        },
        eventTypes: function() {
            var a = ["s", "e", "x"];
            this.ev_types = {};
            !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
            this.ev_types.start = a[0];
            this.ev_types.move = a[1];
            this.ev_types.end = a[2]
        },
        disabledEvents: function() {
            this.$elem.on("dragstart.owl", function(a) {
                a.preventDefault()
            });
            this.$elem.on("mousedown.disableTextSelect", function(a) {
                return f(a.target).is("input, textarea, select, option")
            })
        },
        gestures: function() {
            function a(a) {
                if (void 0 !== a.touches)
                    return {
                        x: a.touches[0].pageX,
                        y: a.touches[0].pageY
                    };
                if (void 0 === a.touches) {
                    if (void 0 !== a.pageX)
                        return {
                            x: a.pageX,
                            y: a.pageY
                        };
                    if (void 0 === a.pageX)
                        return {
                            x: a.clientX,
                            y: a.clientY
                        }
                }
            }
            function b(a) {
                "on" === a ? (f(k).on(d.ev_types.move, e),
                f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move),
                f(k).off(d.ev_types.end))
            }
            function e(b) {
                b = b.originalEvent || b || g.event;
                d.newPosX = a(b).x - h.offsetX;
                d.newPosY = a(b).y - h.offsetY;
                d.newRelativeX = d.newPosX - h.relativePos;
                "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0,
                d.options.startDragging.apply(d, [d.$elem]));
                (8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1,
                h.sliding = !0);
                (10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");
                d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);
                !0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX)
            }
            function c(a) {
                a = a.originalEvent || a || g.event;
                var c;
                a.target = a.target || a.srcElement;
                h.dragging = !1;
                !0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");
                d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";
                0 !== d.newRelativeX && (c = d.getNewPosition(),
                d.goTo(c, !1, "drag"),
                h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function(a) {
                    a.stopImmediatePropagation();
                    a.stopPropagation();
                    a.preventDefault();
                    f(a.target).off("click.disable")
                }),
                a = f._data(a.target, "events").click,
                c = a.pop(),
                a.splice(0, 0, c)));
                b("off")
            }
            var d = this
              , h = {
                offsetX: 0,
                offsetY: 0,
                baseElWidth: 0,
                relativePos: 0,
                position: null,
                minSwipe: null,
                maxSwipe: null,
                sliding: null,
                dargging: null,
                targetElement: null
            };
            d.isCssFinish = !0;
            d.$elem.on(d.ev_types.start, ".owl-wrapper", function(c) {
                c = c.originalEvent || c || g.event;
                var e;
                if (3 === c.which)
                    return !1;
                if (!(d.itemsAmount <= d.options.items)) {
                    if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish)
                        return !1;
                    !1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);
                    !0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");
                    d.newPosX = 0;
                    d.newRelativeX = 0;
                    f(this).css(d.removeTransition());
                    e = f(this).position();
                    h.relativePos = e.left;
                    h.offsetX = a(c).x - e.left;
                    h.offsetY = a(c).y - e.top;
                    b("on");
                    h.sliding = !1;
                    h.targetElement = c.target || c.srcElement
                }
            })
        },
        getNewPosition: function() {
            var a = this.closestItem();
            a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = a = 0);
            return a
        },
        closestItem: function() {
            var a = this
              , b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray
              , e = a.newPosX
              , c = null;
            f.each(b, function(d, g) {
                e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g,
                a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1],
                a.currentItem = f.inArray(c, a.positionsInArray)) : (c = b[d + 1],
                a.currentItem = d + 1))
            });
            return a.currentItem
        },
        moveDirection: function() {
            var a;
            0 > this.newRelativeX ? (a = "right",
            this.playDirection = "next") : (a = "left",
            this.playDirection = "prev");
            return a
        },
        customEvents: function() {
            var a = this;
            a.$elem.on("owl.next", function() {
                a.next()
            });
            a.$elem.on("owl.prev", function() {
                a.prev()
            });
            a.$elem.on("owl.play", function(b, e) {
                a.options.autoPlay = e;
                a.play();
                a.hoverStatus = "play"
            });
            a.$elem.on("owl.stop", function() {
                a.stop();
                a.hoverStatus = "stop"
            });
            a.$elem.on("owl.goTo", function(b, e) {
                a.goTo(e)
            });
            a.$elem.on("owl.jumpTo", function(b, e) {
                a.jumpTo(e)
            })
        },
        stopOnHover: function() {
            var a = this;
            !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function() {
                a.stop()
            }),
            a.$elem.on("mouseout", function() {
                "stop" !== a.hoverStatus && a.play()
            }))
        },
        lazyLoad: function() {
            var a, b, e, c, d;
            if (!1 === this.options.lazyLoad)
                return !1;
            for (a = 0; a < this.itemsAmount; a += 1)
                b = f(this.$owlItems[a]),
                "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"),
                c = b.find(".lazyOwl"),
                "string" !== typeof c.data("src") ? b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(),
                b.addClass("loading").data("owl-loaded", "checked")),
                (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)))
        },
        lazyPreload: function(a, b) {
            function e() {
                a.data("owl-loaded", "loaded").removeClass("loading");
                b.removeAttr("data-src");
                "fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();
                "function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this, [d.$elem])
            }
            function c() {
                f += 1;
                d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e()
            }
            var d = this, f = 0, k;
            "DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"),
            k = !0) : b[0].src = b.data("src");
            c()
        },
        autoHeight: function() {
            function a() {
                var a = f(e.$owlItems[e.currentItem]).height();
                e.wrapperOuter.css("height", a + "px");
                e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function() {
                    e.wrapperOuter.addClass("autoHeight")
                }, 0)
            }
            function b() {
                d += 1;
                e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b, 100) : e.wrapperOuter.css("height", "")
            }
            var e = this, c = f(e.$owlItems[e.currentItem]).find("img"), d;
            void 0 !== c.get(0) ? (d = 0,
            b()) : a()
        },
        completeImg: function(a) {
            return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0
        },
        onVisibleItems: function() {
            var a;
            !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
            this.visibleItems = [];
            for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1)
                this.visibleItems.push(a),
                !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
            this.owl.visibleItems = this.visibleItems
        },
        transitionTypes: function(a) {
            this.outClass = "owl-" + a + "-out";
            this.inClass = "owl-" + a + "-in"
        },
        singleItemTransition: function() {
            var a = this
              , b = a.outClass
              , e = a.inClass
              , c = a.$owlItems.eq(a.currentItem)
              , d = a.$owlItems.eq(a.prevItem)
              , f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem]
              , g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
            a.isTransition = !0;
            a.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": g + "px",
                "-moz-perspective-origin": g + "px",
                "perspective-origin": g + "px"
            });
            d.css({
                position: "relative",
                left: f + "px"
            }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endPrev = !0;
                d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(d, b)
            });
            c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endCurrent = !0;
                c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(c, e)
            })
        },
        clearTransStyle: function(a, b) {
            a.css({
                position: "",
                left: ""
            }).removeClass(b);
            this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"),
            this.isTransition = this.endCurrent = this.endPrev = !1)
        },
        owlStatus: function() {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        },
        clearEvents: function() {
            this.$elem.off(".owl owl mousedown.disableTextSelect");
            f(k).off(".owl owl");
            f(g).off("resize", this.resizer)
        },
        unWrap: function() {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(),
            this.$userItems.unwrap().unwrap(),
            this.owlControls && this.owlControls.remove());
            this.clearEvents();
            this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
            this.stop();
            g.clearInterval(this.checkVisible);
            this.unWrap();
            this.$elem.removeData()
        },
        reinit: function(a) {
            a = f.extend({}, this.userOptions, a);
            this.unWrap();
            this.init(a, this.$elem)
        },
        addItem: function(a, b) {
            var e;
            if (!a)
                return !1;
            if (0 === this.$elem.children().length)
                return this.$elem.append(a),
                this.setVars(),
                !1;
            this.unWrap();
            e = void 0 === b || -1 === b ? -1 : b;
            e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);
            this.setVars()
        },
        removeItem: function(a) {
            if (0 === this.$elem.children().length)
                return !1;
            a = void 0 === a || -1 === a ? -1 : a;
            this.unWrap();
            this.$userItems.eq(a).remove();
            this.setVars()
        }
    };
    f.fn.owlCarousel = function(a) {
        return this.each(function() {
            if (!0 === f(this).data("owl-init"))
                return !1;
            f(this).data("owl-init", !0);
            var b = Object.create(l);
            b.init(a, this);
            f.data(this, "owlCarousel", b)
        })
    }
    ;
    f.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1E3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: g,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
}
)(jQuery, window, document);
!function(h) {
    h.fn.idTabs = function() {
        for (var e = {}, t = 0; t < arguments.length; ++t) {
            var s = arguments[t];
            switch (s.constructor) {
            case Object:
                h.extend(e, s);
                break;
            case Boolean:
                e.change = s;
                break;
            case Number:
                e.start = s;
                break;
            case Function:
                e.click = s;
                break;
            case String:
                "." == s.charAt(0) ? e.selected = s : "!" == s.charAt(0) ? e.event = s : e.start = s
            }
        }
        return "function" == typeof e.return && (e.change = e.return),
        this.each(function() {
            h.idTabs(this, e)
        })
    }
    ,
    h.idTabs = function(n, e) {
        var t = h.metadata ? h(n).metadata() : {}
          , r = h.extend({}, h.idTabs.settings, t, e);
        "." == r.selected.charAt(0) && (r.selected = r.selected.substr(1)),
        "!" == r.event.charAt(0) && (r.event = r.event.substr(1)),
        null == r.start && (r.start = -1);
        var s = function() {
            if (h(this).is("." + r.selected))
                return r.change;
            var e = "#" + this.href.split("#")[1]
              , t = []
              , s = [];
            if (h("a", n).each(function() {
                this.href.match(/#/) && (t.push(this),
                s.push("#" + this.href.split("#")[1]))
            }),
            r.click && !r.click.apply(this, [e, s, n, r]))
                return r.change;
            for (i in t)
                h(t[i]).removeClass(r.selected);
            for (i in s)
                h(s[i]).hide();
            return h(this).addClass(r.selected),
            h(e).show(),
            r.change
        }
          , a = h("a[href*='#']", n).unbind(r.event, s).bind(r.event, s);
        a.each(function() {
            h("#" + this.href.split("#")[1]).hide()
        });
        var c = !1;
        return (c = a.filter("." + r.selected)).length || "number" == typeof r.start && (c = a.eq(r.start)).length || "string" == typeof r.start && (c = a.filter("[href*='#" + r.start + "']")).length,
        c && (c.removeClass(r.selected),
        c.trigger(r.event)),
        r
    }
    ,
    h.idTabs.settings = {
        start: 0,
        change: !1,
        click: null,
        selected: ".selected",
        event: "!click"
    },
    h.idTabs.version = "2.2",
    h(function() {
        h(".idTabs").idTabs()
    })
}(jQuery);
!function(a) {
    "use strict";
    var b = function(a) {
        return a
    }
      , c = function(b) {
        return a.isArray(b)
    }
      , d = function(a) {
        return !c(a) && a instanceof Object
    }
      , g = function(b, c) {
        return a.inArray(c, b)
    }
      , h = function(a, b) {
        return g(a, b) !== -1
    }
      , i = function(a, b) {
        for (var c in a)
            a.hasOwnProperty(c) && b(a[c], c, a)
    }
      , j = function(a) {
        return a[a.length - 1]
    }
      , k = function(a) {
        return Array.prototype.slice.call(a)
    }
      , l = function() {
        var a = {};
        return i(k(arguments), function(b) {
            i(b, function(b, c) {
                a[c] = b
            })
        }),
        a
    }
      , m = function(a, b) {
        var c = [];
        return i(a, function(a, d, e) {
            c.push(b(a, d, e))
        }),
        c
    }
      , n = function(a, b, c) {
        var d = {};
        return i(a, function(a, e, f) {
            e = c ? c(e, a) : e,
            d[e] = b(a, e, f)
        }),
        d
    }
      , o = function(a, b, d) {
        return c(a) ? m(a, b) : n(a, b, d)
    }
      , p = function(a, b) {
        return o(a, function(a) {
            return a[b]
        })
    }
      , q = function(a, b) {
        var d;
        return c(a) ? (d = [],
        i(a, function(a, c, e) {
            b(a, c, e) && d.push(a)
        })) : (d = {},
        i(a, function(a, c, e) {
            b(a, c, e) && (d[c] = a)
        })),
        d
    }
      , r = function(a, b, c) {
        return o(a, function(a, d) {
            return a[b].apply(a, c || [])
        })
    }
      , t = function(a) {
        a = a || {};
        var b = {};
        return a.publish = function(a, c) {
            i(b[a], function(a) {
                a(c)
            })
        }
        ,
        a.subscribe = function(a, c) {
            b[a] = b[a] || [],
            b[a].push(c)
        }
        ,
        a.unsubscribe = function(a) {
            i(b, function(b) {
                var c = g(b, a);
                c !== -1 && b.splice(c, 1)
            })
        }
        ,
        a
    };
    !function(a) {
        var b = function(a, b) {
            var c = t()
              , d = a.$;
            return c.getType = function() {
                throw 'implement me (return type. "text", "radio", etc.)'
            }
            ,
            c.$ = function(a) {
                return a ? d.find(a) : d
            }
            ,
            c.disable = function() {
                c.$().prop("disabled", !0),
                c.publish("isEnabled", !1)
            }
            ,
            c.enable = function() {
                c.$().prop("disabled", !1),
                c.publish("isEnabled", !0)
            }
            ,
            b.equalTo = function(a, b) {
                return a === b
            }
            ,
            b.publishChange = function() {
                var a;
                return function(d, e) {
                    var f = c.get();
                    b.equalTo(f, a) || c.publish("change", {
                        e: d,
                        domElement: e
                    }),
                    a = f
                }
            }(),
            c
        }
          , e = function(a, c) {
            var d = b(a, c);
            return d.get = function() {
                return d.$().val()
            }
            ,
            d.set = function(a) {
                d.$().val(a)
            }
            ,
            d.clear = function() {
                d.set("")
            }
            ,
            c.buildSetter = function(a) {
                return function(b) {
                    a.call(d, b)
                }
            }
            ,
            d
        }
          , f = function(a, b) {
            a = c(a) ? a : [a],
            b = c(b) ? b : [b];
            var d = !0;
            return a.length !== b.length ? d = !1 : i(a, function(a) {
                h(b, a) || (d = !1)
            }),
            d
        }
          , k = function(a) {
            var b = {}
              , c = e(a, b);
            return c.getType = function() {
                return "button"
            }
            ,
            c.$().on("change", function(a) {
                b.publishChange(a, this)
            }),
            c
        }
          , l = function(b) {
            var d = {}
              , g = e(b, d);
            return g.getType = function() {
                return "checkbox"
            }
            ,
            g.get = function() {
                var b = [];
                return g.$().filter(":checked").each(function() {
                    b.push(a(this).val())
                }),
                b
            }
            ,
            g.set = function(b) {
                b = c(b) ? b : [b],
                g.$().each(function() {
                    a(this).prop("checked", !1)
                }),
                i(b, function(a) {
                    g.$().filter('[value="' + a + '"]').prop("checked", !0)
                })
            }
            ,
            d.equalTo = f,
            g.$().change(function(a) {
                d.publishChange(a, this)
            }),
            g
        }
          , m = function(a) {
            var b = {}
              , c = x(a, b);
            return c.getType = function() {
                return "email"
            }
            ,
            c
        }
          , n = function(c) {
            var d = {}
              , e = b(c, d);
            return e.getType = function() {
                return "file"
            }
            ,
            e.get = function() {
                return j(e.$().val().split("\\"))
            }
            ,
            e.clear = function() {
                this.$().each(function() {
                    a(this).wrap("<form>").closest("form").get(0).reset(),
                    a(this).unwrap()
                })
            }
            ,
            e.$().change(function(a) {
                d.publishChange(a, this)
            }),
            e
        }
          , o = function(a) {
            var b = {}
              , c = e(a, b);
            return c.getType = function() {
                return "hidden"
            }
            ,
            c.$().change(function(a) {
                b.publishChange(a, this)
            }),
            c
        }
          , p = function(c) {
            var d = {}
              , e = b(c, d);
            return e.getType = function() {
                return "file[multiple]"
            }
            ,
            e.get = function() {
                var c, a = e.$().get(0).files || [], b = [];
                for (c = 0; c < (a.length || 0); c += 1)
                    b.push(a[c].name);
                return b
            }
            ,
            e.clear = function() {
                this.$().each(function() {
                    a(this).wrap("<form>").closest("form").get(0).reset(),
                    a(this).unwrap()
                })
            }
            ,
            e.$().change(function(a) {
                d.publishChange(a, this)
            }),
            e
        }
          , q = function(a) {
            var b = {}
              , d = e(a, b);
            return d.getType = function() {
                return "select[multiple]"
            }
            ,
            d.get = function() {
                return d.$().val() || []
            }
            ,
            d.set = function(a) {
                d.$().val("" === a ? [] : c(a) ? a : [a])
            }
            ,
            b.equalTo = f,
            d.$().change(function(a) {
                b.publishChange(a, this)
            }),
            d
        }
          , s = function(a) {
            var b = {}
              , c = x(a, b);
            return c.getType = function() {
                return "password"
            }
            ,
            c
        }
          , u = function(b) {
            var c = {}
              , d = e(b, c);
            return d.getType = function() {
                return "radio"
            }
            ,
            d.get = function() {
                return d.$().filter(":checked").val() || null
            }
            ,
            d.set = function(b) {
                b ? d.$().filter('[value="' + b + '"]').prop("checked", !0) : d.$().each(function() {
                    a(this).prop("checked", !1)
                })
            }
            ,
            d.$().change(function(a) {
                c.publishChange(a, this)
            }),
            d
        }
          , v = function(a) {
            var b = {}
              , c = e(a, b);
            return c.getType = function() {
                return "range"
            }
            ,
            c.$().change(function(a) {
                b.publishChange(a, this)
            }),
            c
        }
          , w = function(a) {
            var b = {}
              , c = e(a, b);
            return c.getType = function() {
                return "select"
            }
            ,
            c.$().change(function(a) {
                b.publishChange(a, this)
            }),
            c
        }
          , x = function(a) {
            var b = {}
              , c = e(a, b);
            return c.getType = function() {
                return "text"
            }
            ,
            c.$().on("change keyup keydown", function(a) {
                b.publishChange(a, this)
            }),
            c
        }
          , y = function(a) {
            var b = {}
              , c = e(a, b);
            return c.getType = function() {
                return "textarea"
            }
            ,
            c.$().on("change keyup keydown", function(a) {
                b.publishChange(a, this)
            }),
            c
        }
          , z = function(a) {
            var b = {}
              , c = x(a, b);
            return c.getType = function() {
                return "url"
            }
            ,
            c
        }
          , A = function(b) {
            var c = {}
              , e = b.$
              , f = b.constructorOverride || {
                button: k,
                text: x,
                url: z,
                email: m,
                password: s,
                range: v,
                textarea: y,
                select: w,
                "select[multiple]": q,
                radio: u,
                checkbox: l,
                file: n,
                "file[multiple]": p,
                hidden: o
            }
              , h = function(b, g) {
                var h = d(g) ? g : e.find(g);
                h.each(function() {
                    var d = a(this).attr("name");
                    c[d] = f[b]({
                        $: a(this)
                    })
                })
            }
              , j = function(b, h) {
                var j = []
                  , k = d(h) ? h : e.find(h);
                d(h) ? c[k.attr("name")] = f[b]({
                    $: k
                }) : (k.each(function() {
                    g(j, a(this).attr("name")) === -1 && j.push(a(this).attr("name"))
                }),
                i(j, function(a) {
                    c[a] = f[b]({
                        $: e.find('input[name="' + a + '"]')
                    })
                }))
            };
            return e.is("input, select, textarea") ? e.is('input[type="button"], button, input[type="submit"]') ? h("button", e) : e.is("textarea") ? h("textarea", e) : e.is('input[type="text"]') || e.is("input") && !e.attr("type") ? h("text", e) : e.is('input[type="password"]') ? h("password", e) : e.is('input[type="email"]') ? h("email", e) : e.is('input[type="url"]') ? h("url", e) : e.is('input[type="range"]') ? h("range", e) : e.is("select") ? e.is("[multiple]") ? h("select[multiple]", e) : h("select", e) : e.is('input[type="file"]') ? e.is("[multiple]") ? h("file[multiple]", e) : h("file", e) : e.is('input[type="hidden"]') ? h("hidden", e) : e.is('input[type="radio"]') ? j("radio", e) : e.is('input[type="checkbox"]') ? j("checkbox", e) : h("text", e) : (h("button", 'input[type="button"], button, input[type="submit"]'),
            h("text", 'input[type="text"]'),
            h("password", 'input[type="password"]'),
            h("email", 'input[type="email"]'),
            h("url", 'input[type="url"]'),
            h("range", 'input[type="range"]'),
            h("textarea", "textarea"),
            h("select", "select:not([multiple])"),
            h("select[multiple]", "select[multiple]"),
            h("file", 'input[type="file"]:not([multiple])'),
            h("file[multiple]", 'input[type="file"][multiple]'),
            h("hidden", 'input[type="hidden"]'),
            j("radio", 'input[type="radio"]'),
            j("checkbox", 'input[type="checkbox"]')),
            c
        };
        a.fn.inputVal = function(b) {
            var c = a(this)
              , d = A({
                $: c
            });
            return c.is("input, textarea, select") ? "undefined" == typeof b ? d[c.attr("name")].get() : (d[c.attr("name")].set(b),
            c) : "undefined" == typeof b ? r(d, "get") : (i(b, function(a, b) {
                d[b].set(a)
            }),
            c)
        }
        ,
        a.fn.inputOnChange = function(b) {
            var c = a(this)
              , d = A({
                $: c
            });
            return i(d, function(a) {
                a.subscribe("change", function(a) {
                    b.call(a.domElement, a.e)
                })
            }),
            c
        }
        ,
        a.fn.inputDisable = function() {
            var b = a(this);
            return r(A({
                $: b
            }), "disable"),
            b
        }
        ,
        a.fn.inputEnable = function() {
            var b = a(this);
            return r(A({
                $: b
            }), "enable"),
            b
        }
        ,
        a.fn.inputClear = function() {
            var b = a(this);
            return r(A({
                $: b
            }), "clear"),
            b
        }
    }(jQuery),
    a.fn.repeaterVal = function() {
        var b = function(a) {
            var b = [];
            return i(a, function(a, c) {
                var d = [];
                "undefined" !== c && (d.push(c.match(/^[^\[]*/)[0]),
                d = d.concat(o(c.match(/\[[^\]]*\]/g), function(a) {
                    return a.replace(/[\[\]]/g, "")
                })),
                b.push({
                    val: a,
                    key: d
                }))
            }),
            b
        }
          , c = function(a) {
            if (1 === a.length && (0 === a[0].key.length || 1 === a[0].key.length && !a[0].key[0]))
                return a[0].val;
            i(a, function(a) {
                a.head = a.key.shift()
            });
            var d, b = function() {
                var b = {};
                return i(a, function(a) {
                    b[a.head] || (b[a.head] = []),
                    b[a.head].push(a)
                }),
                b
            }();
            return /^[0-9]+$/.test(a[0].head) ? (d = [],
            i(b, function(a) {
                d.push(c(a))
            })) : (d = {},
            i(b, function(a, b) {
                d[b] = c(a)
            })),
            d
        };
        return c(b(a(this).inputVal()))
    }
    ,
    a.fn.repeater = function(c) {
        c = c || {};
        var d;
        return a(this).each(function() {
            var e = a(this)
              , f = c.show || function() {
                a(this).show()
            }
              , g = c.hide || function(a) {
                a()
            }
              , h = e.find("[data-repeater-list]").first()
              , k = function(b, c) {
                return b.filter(function() {
                    return !c || 0 === a(this).closest(p(c, "selector").join(",")).length
                })
            }
              , m = function() {
                return k(h.find("[data-repeater-item]"), c.repeaters)
            }
              , n = h.find("[data-repeater-item]").first().clone().hide()
              , r = k(k(a(this).find("[data-repeater-item]"), c.repeaters).first().find("[data-repeater-delete]"), c.repeaters);
            c.isFirstItemUndeletable && r && r.remove();
            var s = function() {
                var a = h.data("repeater-list");
                return c.$parent ? c.$parent.data("item-name") + "[" + a + "]" : a
            }
              , t = function(b) {
                c.repeaters && b.each(function() {
                    var b = a(this);
                    i(c.repeaters, function(a) {
                        b.find(a.selector).repeater(l(a, {
                            $parent: b
                        }))
                    })
                })
            }
              , u = function(a, b, c) {
                a && i(a, function(a) {
                    c.call(b.find(a.selector)[0], a)
                })
            }
              , v = function(b, c, d) {
                b.each(function(b) {
                    var e = a(this);
                    e.data("item-name", c + "[" + b + "]"),
                    k(e.find("[name]"), d).each(function() {
                        var f = a(this)
                          , g = f.attr("name").match(/\[[^\]]+\]/g)
                          , h = g ? j(g).replace(/\[|\]/g, "") : f.attr("name")
                          , i = c + "[" + b + "][" + h + "]" + (f.is(":checkbox") || f.attr("multiple") ? "[]" : "");
                        f.attr("name", i),
                        u(d, e, function(d) {
                            var e = a(this);
                            v(k(e.find("[data-repeater-item]"), d.repeaters || []), c + "[" + b + "][" + e.find("[data-repeater-list]").first().data("repeater-list") + "]", d.repeaters)
                        })
                    })
                }),
                h.find("input[name][checked]").removeAttr("checked").prop("checked", !0)
            };
            v(m(), s(), c.repeaters),
            t(m()),
            c.initEmpty && m().remove(),
            c.ready && c.ready(function() {
                v(m(), s(), c.repeaters)
            });
            var w = function() {
                var d = function(e, f, g) {
                    if (f || c.defaultValues) {
                        var h = {};
                        k(e.find("[name]"), g).each(function() {
                            var b = a(this).attr("name").match(/\[([^\]]*)(\]|\]\[\])$/)[1];
                            h[b] = a(this).attr("name")
                        }),
                        e.inputVal(o(q(f || c.defaultValues, function(a, b) {
                            return h[b]
                        }), b, function(a) {
                            return h[a]
                        }))
                    }
                    u(g, e, function(b) {
                        var c = a(this);
                        k(c.find("[data-repeater-item]"), b.repeaters).each(function() {
                            var e = c.find("[data-repeater-list]").data("repeater-list");
                            if (f && f[e]) {
                                var g = a(this).clone();
                                c.find("[data-repeater-item]").remove(),
                                i(f[e], function(a) {
                                    var e = g.clone();
                                    d(e, a, b.repeaters || []),
                                    c.find("[data-repeater-list]").append(e)
                                })
                            } else
                                d(a(this), b.defaultValues, b.repeaters || [])
                        })
                    })
                };
                return function(b, e) {
                    h.append(b),
                    v(m(), s(), c.repeaters),
                    b.find("[name]").each(function() {
                        a(this).inputClear()
                    }),
                    d(b, e || c.defaultValues, c.repeaters)
                }
            }()
              , x = function(a) {
                var b = n.clone();
                w(b, a),
                c.repeaters && t(b),
                f.call(b.get(0))
            };
            d = function(a) {
                m().remove(),
                i(a, x)
            }
            ,
            k(e.find("[data-repeater-create]"), c.repeaters).click(function() {
                x()
            }),
            h.on("click", "[data-repeater-delete]", function() {
                var b = a(this).closest("[data-repeater-item]").get(0);
                g.call(b, function() {
                    a(b).remove(),
                    v(m(), s(), c.repeaters)
                })
            })
        }),
        this.setList = d,
        this
    }
}(jQuery);
!function(b) {
    var c = "#doopostlinks";
    var a = "#dooplay-ajax-counter";
    b(function() {
        if (b("#dooplay-report-form").length == 1) {
            b(".report-video-checkbox").change(function() {
                if (b(".report-video-checkbox:checked").length >= 1) {
                    b("#report-video-message-field").show();
                    b("#report-video-email-field").show();
                    b("#report-video-button-field").show()
                } else {
                    b("#report-video-message-field").hide();
                    b("#report-video-email-field").hide();
                    b("#report-video-button-field").hide()
                }
            });
            b(document).on("submit", "#dooplay-report-form", function() {
                b("#report-response-message").html("");
                b("#report-submit-button").prop("disabled", true);
                b("#dooplay-report-form").hide();
                b(".dooplay-report-form").addClass("onloader");
                b.ajax({
                    url: dtAjax.url,
                    type: "POST",
                    dataType: "json",
                    data: b(this).serialize(),
                    success: function(i) {
                        b(".dooplay-report-form").removeClass("onloader");
                        if (i.success == true) {
                            b(".report-video-error").remove();
                            b("#dooplay-report-form").remove();
                            b("#report-response-message").html('<p class="success">' + i.message + "</p>");
                            setTimeout(function() {
                                b("#moda-report-video-error").removeClass("show");
                                b("#moda-report-video-error").addClass("hidde")
                            }, 3000)
                        }
                        if (i.success == false) {
                            b("#report-response-message").html('<p class="error jump">' + i.message + "</p>");
                            b("#report-submit-button").prop("disabled", false)
                        }
                    }
                });
                return false
            })
        }
        if (b("#dooplay-contact-form").length == 1) {
            b(document).on("submit", "#dooplay-contact-form", function() {
                b("#contact-response-message").html("");
                b("#contact-submit-button").prop("disabled", true);
                b.ajax({
                    url: dtAjax.url,
                    type: "POST",
                    dataType: "json",
                    data: b(this).serialize(),
                    success: function(i) {
                        if (i.success == true) {
                            b("#contact-response-message").html('<div class="notice success animation-3"><p>' + i.message + "</p></div>");
                            b("#contact-subject").val("");
                            b("#contact-message").val("");
                            b("#contact-link").val("")
                        }
                        if (i.success == false) {
                            b("#contact-response-message").html('<div class="notice error animation-3"><p>' + i.message + "</p></div>")
                        }
                        b("#contact-submit-button").prop("disabled", false);
                        f();
                        setTimeout(function() {
                            b("#contact-response-message").html("")
                        }, 10000)
                    }
                });
                return false
            })
        }
        b(document).on("click", ".report-video-error", function() {
            b("#moda-report-video-error").removeClass("hidde");
            b("#moda-report-video-error").addClass("show");
            return false
        });
        b(document).on("click", ".close-modal-report", function() {
            b("#moda-report-video-error").removeClass("show");
            b("#moda-report-video-error").addClass("hidde");
            return false
        });
        if (b("#dooplay_player_big_content").length == 1) {
            b("#playcontainer").appendTo("#dooplay_player_big_content")
        }
        if (b("#dooplay-reCAPTCHA-response").length == 1 && dtAjax.googlercptc) {
            return f()
        }
        function f() {
            b.getScript("https://www.google.com/recaptcha/api.js?render=" + dtAjax.googlercptc, function() {
                grecaptcha.ready(function() {
                    grecaptcha.execute(dtAjax.googlercptc, {
                        action: "dooplay_authorize"
                    }).then(function(i) {
                        b("#dooplay-reCAPTCHA-response").html('<input type="hidden" name="google-recaptcha-token" value="' + i + '">')
                    })
                })
            })
        }
        if (b(a).length == 1) {
            var d = b(a).data("postid");
            setTimeout(function() {
                b.ajax({
                    url: dtAjax.url,
                    type: "POST",
                    dataType: "json",
                    data: {
                        action: "dooplay_viewcounter",
                        post_id: d
                    },
                    success: function(i) {
                        if (i.success == true) {
                            var j = i.counting + " " + dtAjax.views;
                            b("#playernotice").attr("data-text", j);
                            b("#playernotice").html(j)
                        }
                    }
                })
            }, h(1500, 3000))
        }
        b(document).on("click", ".reco", function() {
            b(".reco").addClass("recox");
            b(".recox").removeClass("reco");
            b.ajax({
                url: dtAjax.url,
                type: "get",
                data: {
                    action: "dtpcookie_save"
                }
            })
        });
        b(document).on("click", ".recox", function() {
            b(".recox").addClass("reco");
            b(".reco").removeClass("recox");
            b.ajax({
                url: dtAjax.url,
                type: "get",
                data: {
                    action: "dtpcookie_update"
                }
            })
        });
        b(document).on("click", ".load_list_favorites", function() {
            var m = b(this);
            var n = m.data("page");
            var k = n + 1;
            var i = m.data("user");
            var l = m.data("type");
            var j = m.data("template");
            var o = dtAjax.url;
            b("#items_movies").addClass("loadingpage");
            b.ajax({
                url: o,
                type: "post",
                data: {
                    page: n,
                    typepost: l,
                    user: i,
                    template: j,
                    action: "next_page_list"
                },
                error: function(p) {
                    console.log(p)
                },
                success: function(p) {
                    m.data("page", k);
                    b("#items_movies").append(p);
                    b("#items_movies").removeClass("loadingpage")
                }
            })
        });
        b(document).on("click", ".delete_notice", function() {
            var i = b(this);
            var k = i.data("id");
            var j = dtAjax.url;
            b.ajax({
                url: j,
                type: "post",
                data: {
                    id: k,
                    action: "delete_notice_report",
                },
                error: function(l) {
                    console.log("Error")
                },
                success: function(l) {
                    console.log("Deleted");
                    b(".reports_notice_admin").hide()
                }
            })
        });
        b(document).on("click", "#update_imdb_rating", function() {
            var i = b(this);
            var l = i.data("id");
            var k = i.data("imdb");
            var j = dtAjax.url;
            b("#repimdb").html('<i class="fad fa-spinner-third fa-spin"></i>&nbsp;&nbsp;' + dtAjax.updating);
            b.ajax({
                url: j,
                type: "post",
                data: {
                    id: l,
                    imdb: k,
                    action: "dbmovies_updatedimdb",
                },
                error: function(m) {
                    console.log(m)
                },
                success: function(m) {
                    b("#repimdb").html(m)
                }
            })
        });
        b(document).on("click", ".dt_social", function() {
            var i = b(this);
            var k = i.data("id");
            var j = dtAjax.url;
            b.ajax({
                url: j,
                type: "post",
                data: {
                    id: k,
                    action: "dt_social_count"
                },
                error: function(l) {
                    console.log(l)
                },
                success: function(l) {
                    b("#social_count").html(l)
                }
            })
        });
        b(document).on("click", ".facebook", function() {
            b(".facebook").removeClass("dt_social")
        });
        b(document).on("click", ".twitter", function() {
            b(".twitter").removeClass("dt_social")
        });
        b(document).on("click", ".google", function() {
            b(".google").removeClass("dt_social")
        });
        b(document).on("click", ".pinterest", function() {
            b(".pinterest").removeClass("dt_social")
        });
        b(document).on("click", ".whatsapp", function() {
            b(".whatsapp").removeClass("dt_social")
        });
        b(document).on("click", ".load_list_views", function() {
            var m = b(this);
            var n = m.data("page");
            var k = n + 1;
            var i = m.data("user");
            var l = m.data("type");
            var j = m.data("template");
            var o = dtAjax.url;
            b("#items_views").addClass("loadingpage");
            b.ajax({
                url: o,
                type: "post",
                data: {
                    page: n,
                    typepost: l,
                    template: j,
                    user: i,
                    action: "next_page_list"
                },
                error: function(p) {
                    console.log(p)
                },
                success: function(p) {
                    m.data("page", k);
                    b("#items_views").append(p);
                    b("#items_views").removeClass("loadingpage")
                }
            })
        });
        b(document).on("click", ".load_list_links", function() {
            var k = b(this);
            var l = k.data("page");
            var j = l + 1;
            var i = k.data("user");
            var m = dtAjax.url;
            b("#item_links").addClass("loadingpage");
            b.ajax({
                url: m,
                type: "post",
                data: {
                    page: l,
                    user: i,
                    action: "next_page_link"
                },
                error: function(n) {
                    console.log(n)
                },
                success: function(n) {
                    k.data("page", j);
                    b("#item_links").append(n);
                    b("#item_links").removeClass("loadingpage")
                }
            })
        });
        b(document).on("click", ".load_list_links_profile", function() {
            var k = b(this);
            var l = k.data("page");
            var j = l + 1;
            var i = k.data("user");
            var m = dtAjax.url;
            b("#item_links").addClass("loadingpage");
            b.ajax({
                url: m,
                type: "post",
                data: {
                    page: l,
                    user: i,
                    action: "next_page_link_profile"
                },
                error: function(n) {
                    console.log(n)
                },
                success: function(n) {
                    k.data("page", j);
                    b("#item_links").append(n);
                    b("#item_links").removeClass("loadingpage")
                }
            })
        });
        b(document).on("click", ".load_admin_list_links", function() {
            var j = b(this);
            var k = j.data("page");
            var i = k + 1;
            var l = dtAjax.url;
            b("#item_links_admin").addClass("loadingpage");
            b.ajax({
                url: l,
                type: "post",
                data: {
                    page: k,
                    action: "next_page_link_admin"
                },
                error: function(m) {
                    console.log(m)
                },
                success: function(m) {
                    j.data("page", i);
                    b("#item_links_admin").append(m);
                    b("#item_links_admin").removeClass("loadingpage")
                }
            });
            return false
        });
        b(document).on("click", ".control_link", function() {
            var i = b(this);
            d = i.data("id");
            user_id = i.data("user");
            status = i.data("status");
            b("#resultado_link").html('<div class="content">' + dtAjax.updating + "</div>");
            i.toggleClass("active");
            b.ajax({
                url: dtAjax.url,
                type: "post",
                data: {
                    post_id: d,
                    user_id: user_id,
                    status: status,
                    action: "control_link_user"
                },
                error: function(j) {
                    console.log(j)
                },
                success: function(j) {
                    b("#resultado_link").html('<div class="content">' + j + "</div>");
                    b("#" + d + " > .metas").removeClass("trash");
                    b("#" + d + " > .metas").removeClass("pending");
                    b("#" + d + " > .metas").removeClass("publish");
                    b("#" + d + " > .metas").addClass(status)
                }
            });
            return false
        });
        b(document).on("click", ".control_admin_link", function() {
            b("#resultado_link").html('<div class="content">' + dtAjax.updating + "</div>");
            var l = b(this);
            l.toggleClass("active");
            var k = l.data("id");
            var j = l.data("user");
            var i = l.data("status");
            var m = dtAjax.url;
            b.ajax({
                url: m,
                type: "post",
                data: {
                    post_id: k,
                    user_id: j,
                    status: i,
                    action: "control_link_user"
                },
                error: function(n) {
                    console.log(n)
                },
                success: function(n) {
                    b("#resultado_link").html('<div class="content">' + n + "</div>");
                    b("#adm-" + k + " > .metas").removeClass("trash");
                    b("#adm-" + k + " > .metas").removeClass("pending");
                    b("#adm-" + k + " > .metas").removeClass("publish");
                    b("#adm-" + k + " > .metas").addClass(i)
                }
            });
            return false
        });
        b(document).on("click", ".edit_link", function() {
            var j = b(this);
            var i = j.data("id");
            var k = dtAjax.url;
            b.ajax({
                url: k,
                type: "post",
                data: {
                    post_id: i,
                    action: "dooformeditor_user"
                },
                error: function(l) {
                    console.log(l)
                },
                success: function(l) {
                    b("#edit_link").html('<div id="result_edit_link" class="box animation-3">' + l + "</div>")
                }
            });
            return false
        });
        b(document).on("click", ".delt_link", function() {
            var j = b(this);
            var i = j.data("id");
            var l = dtAjax.url;
            var k = confirm(dtAjax.deletelin);
            if (k) {
                b.ajax({
                    url: l,
                    type: "post",
                    data: {
                        id: i,
                        action: "doofrontdeletelink"
                    },
                    error: function(m) {
                        console.log(m)
                    },
                    success: function(m) {
                        b("#link-" + i).remove()
                    }
                })
            }
            return false
        });
        b(document).on("click", "#admin_pending_links", function() {
            var i = b(this);
            b("#adminlinks").show();
            b("#admin_back_links").show();
            b("#mylinks").hide();
            b("#admin_pending_links").hide();
            b("#text_link").html(dtAjax.ladmin)
        });
        b(document).on("click", "#admin_back_links", function() {
            var i = b(this);
            b("#adminlinks").hide();
            b("#admin_back_links").hide();
            b("#mylinks").show();
            b("#admin_pending_links").show();
            b("#text_link").html(dtAjax.lshared)
        });
        b(document).on("submit", "#doo_link_front_editor", function() {
            var i = b(this);
            b.ajax({
                url: dtAjax.url,
                type: "POST",
                data: i.serialize(),
                error: function(j) {
                    console.log(j)
                },
                success: function(j) {
                    location.reload()
                },
            });
            return false
        });
        b(document).on("click", "#cerrar_form_edit_link", function() {
            b("#result_edit_link").hide()
        });
        b(document).on("click", ".process_list", function() {
            var i = b(this);
            d = i.attr("data-post-id");
            security = i.attr("data-nonce");
            b(".ucico").removeClass("fas fa-plus-circle");
            b(".ucico").addClass("fad fa-spinner-third fa-spin");
            b.ajax({
                type: "POST",
                url: dtAjax.url,
                data: {
                    action: "dt_process_list",
                    post_id: d,
                    nonce: security
                },
                error: function(j) {
                    console.log(j)
                },
                success: function(j) {
                    b(".ucico").addClass("fas fa-plus-circle");
                    b(".ucico").removeClass("fad fa-spinner-third fa-spin");
                    b(".process_list").toggleClass("in-list");
                    b(".list-count-" + d).html(j)
                }
            });
            return false
        });
        b(document).on("click", ".process_views", function() {
            var i = b(this);
            d = i.attr("data-post-id");
            security = i.attr("data-nonce");
            b(".uvcico").removeClass("fas fa-stream");
            b(".uvcico").addClass("fad fa-spinner-third fa-spin");
            b.ajax({
                type: "POST",
                url: dtAjax.url,
                data: {
                    action: "dt_process_views",
                    post_id: d,
                    nonce: security
                },
                error: function(j) {
                    console.log(j)
                },
                success: function(j) {
                    b(".uvcico").addClass("fas fa-stream");
                    b(".uvcico").removeClass("fad fa-spinner-third fa-spin");
                    b(".process_views").toggleClass("in-views");
                    b(".views-count-" + d).html(j)
                }
            });
            return false
        });
        b(document).on("click", ".user_list_control", function() {
            var i = b(this);
            d = i.attr("data-postid");
            security = i.attr("data-nonce");
            b("#p" + d).hide();
            b.ajax({
                type: "POST",
                url: dtAjax.url,
                data: {
                    action: "dt_process_list",
                    post_id: d,
                    nonce: security,
                    total: "on"
                },
                success: function(j) {
                    b(".totalfavorites_user").html(j)
                }
            });
            return false
        });
        b(document).on("click", ".user_views_control", function() {
            var i = b(this);
            d = i.attr("data-postid");
            security = i.attr("data-nonce");
            b("#v" + d).hide();
            b.ajax({
                type: "POST",
                url: dtAjax.url,
                data: {
                    action: "dt_process_views",
                    post_id: d,
                    nonce: security,
                    total: "on"
                },
                success: function(j) {
                    b(".totalviews_user").html(j)
                }
            });
            return false
        });
        b(document).on("click", "ul.no_ajax > li.dooplay_player_option", function() {
            var i = b(this).data("nume");
            b("#fakeplayer").hide();
            b("#playcontainer").addClass("isnd");
            b(".pframe > iframe").attr("src", function(j, k) {
                return k
            });
            if (!b(this).hasClass("on")) {
                b(".dooplay_player_option").removeClass("on");
                b(".source-box").removeClass("on");
                b(this).addClass("on");
                b("#source-player-" + i).addClass("on")
            }
            return false
        });
        b(document).on("click", "ul.ajax_mode > li.dooplay_player_option", function() {
            var i = b(this).data("post");
            nume = b(this).data("nume");
            type = b(this).data("type");
            tviw = b("#playernotice").data("text");
            scds = dtGonza.playeradstime;
            b("#fakeplayer").hide();
            if (!b(this).hasClass("on")) {
                b(".dooplay_player_option").removeClass("on");
                b("#player-option-" + nume + " > span.loader").show();
                b("#played-" + i).removeClass("animation-35");
                b("#playeroptions").addClass("onload");
                if (scds > 0) {
                    b("#playernotice").addClass("flashit");
                    b("#playernotice").html('<b id="countdown"></b> ' + dtGonza.loadingplayer);
                    b("#countdown").html(scds)
                }
                b(this).addClass("on");
                if (dtAjax.play_method == "admin_ajax") {
                    b.ajax({
                        type: "POST",
                        url: dtAjax.url,
                        data: {
                            action: "doo_player_ajax",
                            post: i,
                            nume: nume,
                            type: type
                        },
                        success: function(j) {
                            g(j, scds, nume, i, tviw)
                        }
                    })
                }
                if (dtAjax.play_method == "wp_json") {
                    b.getJSON(dtAjax.player_api + i + "/" + type + "/" + nume, function(j) {
                        g(j, scds, nume, i, tviw)
                    })
                }
            }
            return false
        });

        function g(l, j, i, k, m) {
            if (j > 0) {
                e()
            }
            b("html, body").animate({
                scrollTop: 0
            }, 200);
            b("#player-option-" + i + " > span.loader").hide();
            b("#played-" + k).addClass("animation-35");
            b("#playcontainer").addClass("isnd");
            b(".asgdc").show();
            b("#dooplay_player_response").html('<div class="preplayer"></div>');
            setTimeout(function() {
                b(".asgdc").hide();
                if (l.type == "dtshcode") {
                    b("#dooplay_player_response").html('<div class="pframe">' + l.embed_url + "</div>")
                } else {
                    b("#dooplay_player_response").html('<div class="pframe"><iframe class="metaframe rptss" src="' + l.embed_url + '" frameborder="0" scrolling="no" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>')
                }
                b("#playeroptions").removeClass("onload");
                if (j > 0) {
                    b("#playernotice").html(m);
                    b("#playernotice").removeClass("flashit")
                }
            }, j * 1000)
        }
        function h(j, i) {
            return Math.floor(Math.random() * (i - j + 1) + j)
        }
        function e() {
            var i = "#countdown";
            if (b(i).length == 1) {
                var j;
                j = b(i).text();
                j = parseInt(j, 10);
                if (j == 1) {
                    b(i).remove();
                    return
                }
                j--;
                b(i).html(j);
                setTimeout(e, 1000)
            }
        }
        if (b(c).length == 1) {
            b(c).repeater({
                defaultValues: {
                    type: dtAjax.ltipe
                },
                show: function() {
                    b(this).fadeIn("fast")
                },
                hide: function(i) {
                    b(this).fadeOut("fast", function() {
                        b(this).slideUp(i)
                    })
                }
            });
            b(document).on("submit", c, function() {
                b("#resultado_link_form").html('<div class="msg"><i class="fas fa-circle-notch fa-spin"></i>' + dtAjax.sending + "</div>");
                b(".form_post_lik").hide("fast");
                b.ajax({
                    type: "POST",
                    url: dtAjax.url,
                    dataType: "json",
                    data: b(this).serialize(),
                    success: function(i) {
                        if (i.response == true) {
                            location.reload()
                        } else {
                            alert(i.message)
                        }
                    }
                });
                return false
            })
        }
        b(document).on("submit", "#dooplay_login_user", function() {
            var i = b("#dooplay_login_btn").data("btntext");
            b(".login_box").removeClass("shake");
            b("#dooplay_login_btn").prop("disabled", true);
            b("#dooplay_login_btn").val(dtAjax.loading);
            b.ajax({
                type: "POST",
                url: dtAjax.url,
                dataType: "json",
                data: b(this).serialize(),
                success: function(j) {
                    if (j.response == true) {
                        if (j.redirect) {
                            window.location.replace(j.redirect)
                        } else {
                            location.reload()
                        }
                    } else {
                        b(".login_box").addClass("shake");
                        b("#dooplay_login_btn").val(i);
                        b("#dooplay_login_btn").prop("disabled", false)
                    }
                }
            });
            return false
        });
        b(document).on("click", "#dooplay_signout", function() {
            b.ajax({
                type: "POST",
                url: dtAjax.url,
                dataType: "json",
                data: {
                    action: "dooplay_logout"
                },
                success: function(i) {
                    if (i.response == true) {
                        location.reload()
                    }
                }
            });
            return false
        });
        b(document).on("click", "#clickfakeplayer", function() {
            if (b("#player-option-1").length == 1) {
                b("#player-option-1").click()
            } else {
                b(".dooplay_player_option:first-child").click()
            }
        })
    })
}(jQuery);
