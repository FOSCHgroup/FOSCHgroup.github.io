(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8581: function (e, r, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(3678);
        },
      ]);
    },
    4535: function (e, r, n) {
      "use strict";
      n.d(r, {
        Z: function () {
          return o;
        },
      });
      var t = n(5893),
        a = n(8829),
        i = n.n(a);
      function o(e) {
        var r = e.children;
        return (0, t.jsx)("div", { className: i().container, children: r });
      }
    },
    6619: function (e, r, n) {
      "use strict";
      n.d(r, {
        Z: function () {
          return f;
        },
      });
      var t = n(5893),
        a = n(9008),
        i = n(4535),
        o = n(1664),
        s = n(4668),
        c = n.n(s);
      function l() {
        return (0, t.jsxs)("nav", {
          className: c().nav,
          children: [
            (0, t.jsx)("div", {
              className: c().logo,
              children: (0, t.jsx)(o.default, {
                href: "/",
                children: "FOSCH Group",
              }),
            }),
            (0, t.jsxs)("div", {
              className: c().links,
              children: [
                (0, t.jsx)(o.default, { href: "/team", children: "Our Team" }),
                (0, t.jsx)(o.default, {
                  href: "/research",
                  children: "Research",
                }),
                (0, t.jsx)(o.default, {
                  href: "/divulgacion",
                  children: "Divulgaci\xf3n",
                }),
                (0, t.jsx)(o.default, {
                  href: "/formacion",
                  children: "Formaci\xf3n",
                }),
                (0, t.jsx)(o.default, {
                  href: "/resources",
                  children: "Resources",
                }),
              ],
            }),
          ],
        });
      }
      var u = n(9050),
        d = n.n(u);
      function f(e) {
        var r = e.children,
          n = e.title,
          o = e.alt,
          s = e.image;
        return (0, t.jsx)("div", {
          className: d().wrapper,
          children: (0, t.jsxs)("div", {
            className: d().container,
            children: [
              (0, t.jsx)(a.default, {
                children: (0, t.jsx)("title", { children: n }),
              }),
              (0, t.jsx)("header", {
                className: d().header,
                children: (0, t.jsx)(l, {}),
              }),
              (0, t.jsxs)("main", {
                className: d().main,
                children: [
                  (0, t.jsxs)(i.Z, {
                    children: [
                      s && (0, t.jsx)("img", { alt: o, src: s }),
                      (0, t.jsx)("h1", { className: d().title, children: n }),
                    ],
                  }),
                  r,
                ],
              }),
              (0, t.jsx)("footer", {
                children: (0, t.jsxs)(i.Z, {
                  children: [
                    (0, t.jsx)("h2", { children: "Contact us" }),
                    (0, t.jsx)("p", {
                      children:
                        "For general inquiries, please write to: fosch@uam.es",
                    }),
                    (0, t.jsx)("p", {
                      children:
                        "For research/investigation questions, please write to: fosch.research@uam.es",
                    }),
                    (0, t.jsx)("p", {
                      children:
                        "For formation issues or MSc/PhD stay, please write to: fosch.educa@uam.es",
                    }),
                    (0, t.jsx)("p", {
                      children: "Follow us in Twitter: @FoschGroup",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
    8418: function (e, r, n) {
      "use strict";
      function t(e, r) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, r) {
            var n = [],
              t = !0,
              a = !1,
              i = void 0;
            try {
              for (
                var o, s = e[Symbol.iterator]();
                !(t = (o = s.next()).done) &&
                (n.push(o.value), !r || n.length !== r);
                t = !0
              );
            } catch (c) {
              (a = !0), (i = c);
            } finally {
              try {
                t || null == s.return || s.return();
              } finally {
                if (a) throw i;
              }
            }
            return n;
          })(e, r) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      r.default = void 0;
      var a,
        i = (a = n(7294)) && a.__esModule ? a : { default: a },
        o = n(6273),
        s = n(387),
        c = n(7190);
      var l = {};
      function u(e, r, n, t) {
        if (e && o.isLocalURL(r)) {
          e.prefetch(r, n, t).catch(function (e) {
            0;
          });
          var a =
            t && "undefined" !== typeof t.locale ? t.locale : e && e.locale;
          l[r + "%" + n + (a ? "%" + a : "")] = !0;
        }
      }
      var d = function (e) {
        var r,
          n = !1 !== e.prefetch,
          a = s.useRouter(),
          d = i.default.useMemo(
            function () {
              var r = t(o.resolveHref(a, e.href, !0), 2),
                n = r[0],
                i = r[1];
              return { href: n, as: e.as ? o.resolveHref(a, e.as) : i || n };
            },
            [a, e.href, e.as]
          ),
          f = d.href,
          h = d.as,
          p = e.children,
          v = e.replace,
          x = e.shallow,
          m = e.scroll,
          j = e.locale;
        "string" === typeof p && (p = i.default.createElement("a", null, p));
        var y =
            (r = i.default.Children.only(p)) && "object" === typeof r && r.ref,
          b = t(c.useIntersection({ rootMargin: "200px" }), 2),
          _ = b[0],
          g = b[1],
          w = i.default.useCallback(
            function (e) {
              _(e),
                y &&
                  ("function" === typeof y
                    ? y(e)
                    : "object" === typeof y && (y.current = e));
            },
            [y, _]
          );
        i.default.useEffect(
          function () {
            var e = g && n && o.isLocalURL(f),
              r = "undefined" !== typeof j ? j : a && a.locale,
              t = l[f + "%" + h + (r ? "%" + r : "")];
            e && !t && u(a, f, h, { locale: r });
          },
          [h, f, g, j, n, a]
        );
        var C = {
          ref: w,
          onClick: function (e) {
            r.props &&
              "function" === typeof r.props.onClick &&
              r.props.onClick(e),
              e.defaultPrevented ||
                (function (e, r, n, t, a, i, s, c) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var r = e.currentTarget.target;
                      return (
                        (r && "_self" !== r) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      o.isLocalURL(n))) &&
                    (e.preventDefault(),
                    null == s && t.indexOf("#") >= 0 && (s = !1),
                    r[a ? "replace" : "push"](n, t, {
                      shallow: i,
                      locale: c,
                      scroll: s,
                    }));
                })(e, a, f, h, v, x, m, j);
          },
          onMouseEnter: function (e) {
            r.props &&
              "function" === typeof r.props.onMouseEnter &&
              r.props.onMouseEnter(e),
              o.isLocalURL(f) && u(a, f, h, { priority: !0 });
          },
        };
        if (e.passHref || ("a" === r.type && !("href" in r.props))) {
          var M = "undefined" !== typeof j ? j : a && a.locale,
            N =
              a &&
              a.isLocaleDomain &&
              o.getDomainLocale(h, M, a && a.locales, a && a.domainLocales);
          C.href = N || o.addBasePath(o.addLocale(h, M, a && a.defaultLocale));
        }
        return i.default.cloneElement(r, C);
      };
      r.default = d;
    },
    7190: function (e, r, n) {
      "use strict";
      function t(e, r) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, r) {
            var n = [],
              t = !0,
              a = !1,
              i = void 0;
            try {
              for (
                var o, s = e[Symbol.iterator]();
                !(t = (o = s.next()).done) &&
                (n.push(o.value), !r || n.length !== r);
                t = !0
              );
            } catch (c) {
              (a = !0), (i = c);
            } finally {
              try {
                t || null == s.return || s.return();
              } finally {
                if (a) throw i;
              }
            }
            return n;
          })(e, r) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.useIntersection = function (e) {
          var r = e.rootMargin,
            n = e.disabled || !o,
            c = a.useRef(),
            l = t(a.useState(!1), 2),
            u = l[0],
            d = l[1],
            f = a.useCallback(
              function (e) {
                c.current && (c.current(), (c.current = void 0)),
                  n ||
                    u ||
                    (e &&
                      e.tagName &&
                      (c.current = (function (e, r, n) {
                        var t = (function (e) {
                            var r = e.rootMargin || "",
                              n = s.get(r);
                            if (n) return n;
                            var t = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var r = t.get(e.target),
                                    n =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  r && n && r(n);
                                });
                              }, e);
                            return (
                              s.set(
                                r,
                                (n = { id: r, observer: a, elements: t })
                              ),
                              n
                            );
                          })(n),
                          a = t.id,
                          i = t.observer,
                          o = t.elements;
                        return (
                          o.set(e, r),
                          i.observe(e),
                          function () {
                            o.delete(e),
                              i.unobserve(e),
                              0 === o.size && (i.disconnect(), s.delete(a));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && d(e);
                        },
                        { rootMargin: r }
                      )));
              },
              [n, r, u]
            );
          return (
            a.useEffect(
              function () {
                if (!o && !u) {
                  var e = i.requestIdleCallback(function () {
                    return d(!0);
                  });
                  return function () {
                    return i.cancelIdleCallback(e);
                  };
                }
              },
              [u]
            ),
            [f, u]
          );
        });
      var a = n(7294),
        i = n(9311),
        o = "undefined" !== typeof IntersectionObserver;
      var s = new Map();
    },
    3678: function (e, r, n) {
      "use strict";
      n.r(r),
        n.d(r, {
          default: function () {
            return o;
          },
        });
      var t = n(5893),
        a = n(4535),
        i = n(6619);
      function o() {
        return (0, t.jsxs)(i.Z, {
          title: "FOSCH Research Group",
          children: [
            (0, t.jsxs)(a.Z, {
              children: [
                (0, t.jsx)("h2", {
                  children: "Foods, Oxidative Stress & Cardiovascular Health",
                }),
                (0, t.jsx)("p", {
                  children:
                    "Our focus is to study the bioavailability, biotransformation, biokinetics and bioeffects of phytochemicals from by-products to prevent cardiometabolic diseases.",
                }),
                (0, t.jsx)("img", {
                  alt: "Foods, Oxidative Stress, and Cardiovascular Health",
                  src: "/images/fosch.jpg",
                }),
              ],
            }),
            (0, t.jsxs)(a.Z, {
              children: [
                (0, t.jsx)("h2", { children: "Work address and Laboratories" }),
                (0, t.jsx)("h3", {
                  children:
                    "Area of Food Technology and New Ingredient Development",
                }),
                (0, t.jsx)("p", {
                  children:
                    "Department of Agricultural Chemistry and Bromatology",
                }),
                (0, t.jsx)("p", { children: "Faculty of Sciences" }),
                (0, t.jsx)("p", {
                  children:
                    "Department of Production and Characterization of Novel Foods",
                }),
                (0, t.jsx)("p", {
                  children: "Institute of Food Science Research (CIAL-CSIC)",
                }),
                (0, t.jsx)("p", {
                  children: "Universidad Auton\xf3noma de Madrid",
                }),
                (0, t.jsx)("p", {
                  children:
                    "Laboratory: C/ Nicol\xe1s Cabrera 9, Campus de Cantoblanco - 28049 Madrid, Spain",
                }),
                (0, t.jsx)("h3", {
                  children:
                    "Area of Oxidavive Stress, Fetal Programming and Cardiometabolic Health",
                }),
                (0, t.jsx)("p", { children: "Department of Physiology" }),
                (0, t.jsx)("p", {
                  children:
                    "Department of of Preventive Medicine, Public Health and Microbiology",
                }),
                (0, t.jsx)("p", { children: "Faculty of Medicine" }),
                (0, t.jsx)("p", {
                  children: "Universidad Auton\xf3noma de Madrid",
                }),
                (0, t.jsx)("p", {
                  children:
                    "Laboratory: C/ Arzobispo Morcillo 2, 28029 Madrid, Spain",
                }),
              ],
            }),
            (0, t.jsx)(a.Z, {
              children: (0, t.jsx)("h2", { children: "News" }),
            }),
          ],
        });
      }
    },
    8829: function (e) {
      e.exports = { container: "container_container__7U8A5" };
    },
    9050: function (e) {
      e.exports = {
        title: "layout_title__ITdWE",
        header: "layout_header__WIdrS",
        main: "layout_main__i6bTv",
      };
    },
    4668: function (e) {
      e.exports = { nav: "navbar_nav__Yro3z", links: "navbar_links__Aqu2_" };
    },
    9008: function (e, r, n) {
      e.exports = n(5443);
    },
    1664: function (e, r, n) {
      e.exports = n(8418);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (r = 8581), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);