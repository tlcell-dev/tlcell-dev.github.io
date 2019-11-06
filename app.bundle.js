!function (I) {
    function e(e) {
        for (var r, n, t = e[0], o = e[1], i = e[2], d = 0, c = []; d < t.length; d++) n = t[d], Object.prototype.hasOwnProperty.call(J, n) && J[n] && c.push(J[n][0]), J[n] = 0;
        for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (I[r] = o[r]);
        for (O && O(e); c.length;) c.shift()();
        return w.push.apply(w, i || []), a();
    }

    function a() {
        for (var e, r = 0; r < w.length; r++) {
            for (var n = w[r], t = !0, o = 1; o < n.length; o++) {
                var i = n[o];
                0 !== J[i] && (t = !1);
            }
            t && (w.splice(r--, 1), e = L(L.s = n[0]));
        }
        return e;
    }

    var n = window.webpackHotUpdate;
    window.webpackHotUpdate = function (e, r) {
        !function (e, r) {
            if (!C[e] || !f[e]) return;
            for (var n in f[e] = !1, r) Object.prototype.hasOwnProperty.call(r, n) && (U[n] = r[n]);
            0 == --l && 0 === u && v();
        }(e, r), n && n(e, r);
    };
    var i, t = !0, M = '98bff21986916a469985', r = 1e4, k = {}, A = [], o = [];

    function d(r) {
        var n = F[r];
        if (!n) return L;

        function t(e) {
            return n.hot.active ? (F[e] ? -1 === F[e].parents.indexOf(r) && F[e].parents.push(r) : (A = [r], i = e), -1 === n.children.indexOf(e) && n.children.push(e)) : (console.warn('[HMR] unexpected require(' + e + ') from disposed module ' + r), A = []), L(e);
        }

        function e(r) {
            return {
                configurable: !0, enumerable: !0, get: function () {
                    return L[r];
                }, set: function (e) {
                    L[r] = e;
                }
            };
        }

        for (var o in L) Object.prototype.hasOwnProperty.call(L, o) && 'e' !== o && 't' !== o && Object.defineProperty(t, o, e(o));
        return t.e = function (e) {
            return 'ready' === q && S('prepare'), u++, L.e(e).then(r, function (e) {
                throw r(), e;
            });

            function r() {
                u--, 'prepare' === q && (p[e] || y(e), 0 === u && 0 === l && v());
            }
        }, t.t = function (e, r) {
            return 1 & r && (e = t(e)), L.t(e, -2 & r);
        }, t;
    }

    var c = [], q = 'idle';

    function S(e) {
        q = e;
        for (var r = 0; r < c.length; r++) c[r].call(null, e);
    }

    var s, U, T, l = 0, u = 0, p = {}, f = {}, C = {};

    function R(e) {
        return +e + '' === e ? +e : e;
    }

    function h(e) {
        if ('idle' !== q) throw new Error('check() is only allowed in idle status');
        return t = e, S('check'), function (e) {
            return e = e || 1e4, new Promise(function (r, n) {
                if ('undefined' == typeof XMLHttpRequest) return n(new Error('No browser support'));
                try {
                    var t = new XMLHttpRequest, o = L.p + '' + M + '.hot-update.json';
                    t.open('GET', o, !0), t.timeout = e, t.send(null);
                } catch (e) {return n(e);}
                t.onreadystatechange = function () {
                    if (4 === t.readyState) if (0 === t.status) n(new Error('Manifest request to ' + o + ' timed out.')); else if (404 === t.status) r(); else if (200 !== t.status && 304 !== t.status) n(new Error('Manifest request to ' + o + ' failed.')); else {
                        try {var e = JSON.parse(t.responseText);} catch (e) {return void n(e);}
                        r(e);
                    }
                };
            });
        }(r).then(function (e) {
            if (!e) return S('idle'), null;
            f = {}, p = {}, C = e.c, T = e.h, S('prepare');
            var r = new Promise(function (e, r) {
                s = {resolve: e, reject: r};
            });
            for (var n in U = {}, J) y(n);
            return 'prepare' === q && 0 === u && 0 === l && v(), r;
        });
    }

    function y(e) {
        C[e] ? (f[e] = !0, l++, function (e) {
            var r = document.createElement('script');
            r.charset = 'utf-8', r.src = L.p + '' + e + '.' + M + '.hot-update.js', document.head.appendChild(r);
        }(e)) : p[e] = !0;
    }

    function v() {
        S('ready');
        var r = s;
        if (s = null, r) if (t) Promise.resolve().then(function () {
            return b(t);
        }).then(function (e) {
            r.resolve(e);
        }, function (e) {
            r.reject(e);
        }); else {
            var e = [];
            for (var n in U) Object.prototype.hasOwnProperty.call(U, n) && e.push(R(n));
            r.resolve(e);
        }
    }

    function b(n) {
        if ('ready' !== q) throw new Error('apply() is only allowed in ready status');
        var e, r, t, l, o;

        function i(e) {
            for (var r = [e], n = {}, t = r.map(function (e) {
                return {chain: [e], id: e};
            }); 0 < t.length;) {
                var o = t.pop(), i = o.id, d = o.chain;
                if ((l = F[i]) && !l.hot._selfAccepted) {
                    if (l.hot._selfDeclined) return {
                        type: 'self-declined',
                        chain: d,
                        moduleId: i
                    };
                    if (l.hot._main) return {type: 'unaccepted', chain: d, moduleId: i};
                    for (var c = 0; c < l.parents.length; c++) {
                        var a = l.parents[c], s = F[a];
                        if (s) {
                            if (s.hot._declinedDependencies[i]) return {
                                type: 'declined',
                                chain: d.concat([a]),
                                moduleId: i,
                                parentId: a
                            };
                            -1 === r.indexOf(a) && (s.hot._acceptedDependencies[i] ? (n[a] || (n[a] = []), u(n[a], [i])) : (delete n[a], r.push(a), t.push({
                                chain: d.concat([a]),
                                id: a
                            })));
                        }
                    }
                }
            }
            return {type: 'accepted', moduleId: e, outdatedModules: r, outdatedDependencies: n};
        }

        function u(e, r) {
            for (var n = 0; n < r.length; n++) {
                var t = r[n];
                -1 === e.indexOf(t) && e.push(t);
            }
        }

        n = n || {};

        function d() {
            console.warn('[HMR] unexpected require(' + f.moduleId + ') to disposed module');
        }

        var c = {}, a = [], s = {};
        for (var p in U) if (Object.prototype.hasOwnProperty.call(U, p)) {
            var f;
            o = R(p);
            var h = !1, y = !1, v = !1, b = '';
            switch ((f = U[p] ? i(o) : {
                type: 'disposed',
                moduleId: p
            }).chain && (b = '\nUpdate propagation: ' + f.chain.join(' -> ')), f.type) {
                case'self-declined':
                    n.onDeclined && n.onDeclined(f), n.ignoreDeclined || (h = new Error('Aborted because of self decline: ' + f.moduleId + b));
                    break;
                case'declined':
                    n.onDeclined && n.onDeclined(f), n.ignoreDeclined || (h = new Error('Aborted because of declined dependency: ' + f.moduleId + ' in ' + f.parentId + b));
                    break;
                case'unaccepted':
                    n.onUnaccepted && n.onUnaccepted(f), n.ignoreUnaccepted || (h = new Error('Aborted because ' + o + ' is not accepted' + b));
                    break;
                case'accepted':
                    n.onAccepted && n.onAccepted(f), y = !0;
                    break;
                case'disposed':
                    n.onDisposed && n.onDisposed(f), v = !0;
                    break;
                default:
                    throw new Error('Unexception type ' + f.type);
            }
            if (h) return S('abort'), Promise.reject(h);
            if (y) for (o in s[o] = U[o], u(a, f.outdatedModules), f.outdatedDependencies) Object.prototype.hasOwnProperty.call(f.outdatedDependencies, o) && (c[o] || (c[o] = []), u(c[o], f.outdatedDependencies[o]));
            v && (u(a, [f.moduleId]), s[o] = d);
        }
        var w, m = [];
        for (r = 0; r < a.length; r++) o = a[r], F[o] && F[o].hot._selfAccepted && s[o] !== d && m.push({
            module: o,
            errorHandler: F[o].hot._selfAccepted
        });
        S('dispose'), Object.keys(C).forEach(function (e) {
            !1 === C[e] && function (e) {
                delete J[e];
            }(e);
        });
        for (var j, _, O = a.slice(); 0 < O.length;) if (o = O.pop(), l = F[o]) {
            var g = {}, x = l.hot._disposeHandlers;
            for (t = 0; t < x.length; t++) (e = x[t])(g);
            for (k[o] = g, l.hot.active = !1, delete F[o], delete c[o], t = 0; t < l.children.length; t++) {
                var D = F[l.children[t]];
                D && 0 <= (w = D.parents.indexOf(o)) && D.parents.splice(w, 1);
            }
        }
        for (o in c) if (Object.prototype.hasOwnProperty.call(c, o) && (l = F[o])) for (_ = c[o], t = 0; t < _.length; t++) j = _[t], 0 <= (w = l.children.indexOf(j)) && l.children.splice(w, 1);
        for (o in S('apply'), M = T, s) Object.prototype.hasOwnProperty.call(s, o) && (I[o] = s[o]);
        var P = null;
        for (o in c) if (Object.prototype.hasOwnProperty.call(c, o) && (l = F[o])) {
            _ = c[o];
            var E = [];
            for (r = 0; r < _.length; r++) if (j = _[r], e = l.hot._acceptedDependencies[j]) {
                if (-1 !== E.indexOf(e)) continue;
                E.push(e);
            }
            for (r = 0; r < E.length; r++) {
                e = E[r];
                try {e(_);} catch (e) {
                    n.onErrored && n.onErrored({
                        type: 'accept-errored',
                        moduleId: o,
                        dependencyId: _[r],
                        error: e
                    }), n.ignoreErrored || (P = P || e);
                }
            }
        }
        for (r = 0; r < m.length; r++) {
            var H = m[r];
            o = H.module, A = [o];
            try {L(o);} catch (r) {
                if ('function' == typeof H.errorHandler) try {H.errorHandler(r);} catch (e) {
                    n.onErrored && n.onErrored({
                        type: 'self-accept-error-handler-errored',
                        moduleId: o,
                        error: e,
                        originalError: r
                    }), n.ignoreErrored || (P = P || e), P = P || r;
                } else n.onErrored && n.onErrored({
                    type: 'self-accept-errored',
                    moduleId: o,
                    error: r
                }), n.ignoreErrored || (P = P || r);
            }
        }
        return P ? (S('fail'), Promise.reject(P)) : (S('idle'), new Promise(function (e) {
            e(a);
        }));
    }

    var F = {}, J = {0: 0}, w = [];

    function L(e) {
        if (F[e]) return F[e].exports;
        var r = F[e] = {
            i: e, l: !1, exports: {}, hot: function (e) {
                var t = {
                    _acceptedDependencies: {},
                    _declinedDependencies: {},
                    _selfAccepted: !1,
                    _selfDeclined: !1,
                    _disposeHandlers: [],
                    _main: i !== e,
                    active: !0,
                    accept: function (e, r) {
                        if (void 0 === e) t._selfAccepted = !0; else if ('function' == typeof e) t._selfAccepted = e; else if ('object' == typeof e) for (var n = 0; n < e.length; n++) t._acceptedDependencies[e[n]] = r || function () {
                        }; else t._acceptedDependencies[e] = r || function () {
                        };
                    },
                    decline: function (e) {
                        if (void 0 === e) t._selfDeclined = !0; else if ('object' == typeof e) for (var r = 0; r < e.length; r++) t._declinedDependencies[e[r]] = !0; else t._declinedDependencies[e] = !0;
                    },
                    dispose: function (e) {
                        t._disposeHandlers.push(e);
                    },
                    addDisposeHandler: function (e) {
                        t._disposeHandlers.push(e);
                    },
                    removeDisposeHandler: function (e) {
                        var r = t._disposeHandlers.indexOf(e);
                        0 <= r && t._disposeHandlers.splice(r, 1);
                    },
                    check: h,
                    apply: b,
                    status: function (e) {
                        if (!e) return q;
                        c.push(e);
                    },
                    addStatusHandler: function (e) {
                        c.push(e);
                    },
                    removeStatusHandler: function (e) {
                        var r = c.indexOf(e);
                        0 <= r && c.splice(r, 1);
                    },
                    data: k[e]
                };
                return i = void 0, t;
            }(e), parents: (o = A, A = [], o), children: []
        };
        return I[e].call(r.exports, r, r.exports, d(e)), r.l = !0, r.exports;
    }

    L.m = I, L.c = F, L.d = function (e, r, n) {
        L.o(e, r) || Object.defineProperty(e, r, {enumerable: !0, get: n});
    }, L.r = function (e) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(e, '__esModule', {value: !0});
    }, L.t = function (r, e) {
        if (1 & e && (r = L(r)), 8 & e) return r;
        if (4 & e && 'object' == typeof r && r && r.__esModule) return r;
        var n = Object.create(null);
        if (L.r(n), Object.defineProperty(n, 'default', {
            enumerable: !0,
            value: r
        }), 2 & e && 'string' != typeof r) for (var t in r) L.d(n, t, function (e) {
            return r[e];
        }.bind(null, t));
        return n;
    }, L.n = function (e) {
        var r = e && e.__esModule ? function () {
            return e.default;
        } : function () {
            return e;
        };
        return L.d(r, 'a', r), r;
    }, L.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
    }, L.p = '', L.h = function () {
        return M;
    };
    var m = window.webpackJsonp = window.webpackJsonp || [], j = m.push.bind(m);
    m.push = e, m = m.slice();
    for (var _ = 0; _ < m.length; _++) e(m[_]);
    var O = j;
    w.push([0, 2]), a();
}({
    './src/index.js': function (e, r, n) {
        'use strict';
        n('./src/sass/styles.sass');
        var t, o = n('./node_modules/jquery/dist/jquery.js'), i = (t = o) && t.__esModule ? t : {default: t},
            d = n('./src/js/header.js');
        (0, i.default)(document).ready(function () {
            (0, d.setFixedHeader)();
        });
    }, './src/js/header.js': function (e, r, n) {
        'use strict';
        Object.defineProperty(r, '__esModule', {value: !0}), r.setFixedHeader = void 0;
        var t, o = n('./node_modules/jquery/dist/jquery.js'), i = (t = o) && t.__esModule ? t : {default: t};
        r.setFixedHeader = function () {
            var e = (0, i.default)('#topLine');
            (0, i.default)('body');
            (0, i.default)(window).scroll(function () {
                50 < (0, i.default)(this).scrollTop() ? (e.removeClass('top-line'), e.addClass('top-line--fixed'), e.slideDown(400)) : (0, i.default)(this).scrollTop() < 50 && (e.removeClass('top-line--fixed'), e.removeAttr('style'), e.addClass('top-line'));
            });
        };
    }, './src/sass/styles.sass': function (e, r, n) {
    }, 0: function (e, r, n) {
        n('./node_modules/babel-polyfill/lib/index.js'), e.exports = n('./src/index.js');
    }
});
