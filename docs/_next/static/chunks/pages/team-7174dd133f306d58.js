(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [38],
  {
    4320: function (e, a, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/team",
        function () {
          return i(9675);
        },
      ]);
    },
    4535: function (e, a, i) {
      "use strict";
      i.d(a, {
        Z: function () {
          return o;
        },
      });
      var n = i(5893),
        r = i(8829),
        t = i.n(r);
      function o(e) {
        var a = e.children;
        return (0, n.jsx)("div", { className: t().container, children: a });
      }
    },
    6619: function (e, a, i) {
      "use strict";
      i.d(a, {
        Z: function () {
          return f;
        },
      });
      var n = i(5893),
        r = i(9008),
        t = i(4535),
        o = i(1664),
        s = i(4668),
        l = i.n(s);
      function d() {
        return (0, n.jsxs)("nav", {
          className: l().nav,
          children: [
            (0, n.jsx)("div", {
              className: l().logo,
              children: (0, n.jsx)(o.default, {
                href: "/",
                children: "FOSCH Group",
              }),
            }),
            (0, n.jsxs)("div", {
              className: l().links,
              children: [
                (0, n.jsx)(o.default, { href: "/team", children: "Our Team" }),
                (0, n.jsx)(o.default, {
                  href: "/research",
                  children: "Research",
                }),
                (0, n.jsx)(o.default, {
                  href: "/divulgacion",
                  children: "Divulgaci\xf3n",
                }),
                (0, n.jsx)(o.default, {
                  href: "/formacion",
                  children: "Formaci\xf3n",
                }),
                (0, n.jsx)(o.default, {
                  href: "/resources",
                  children: "Resources",
                }),
              ],
            }),
          ],
        });
      }
      var c = i(9050),
        u = i.n(c);
      function f(e) {
        var a = e.children,
          i = e.title,
          o = e.alt,
          s = e.image;
        return (0, n.jsx)("div", {
          className: u().wrapper,
          children: (0, n.jsxs)("div", {
            className: u().container,
            children: [
              (0, n.jsx)(r.default, {
                children: (0, n.jsx)("title", { children: i }),
              }),
              (0, n.jsx)("header", {
                className: u().header,
                children: (0, n.jsx)(d, {}),
              }),
              (0, n.jsxs)("main", {
                className: u().main,
                children: [
                  (0, n.jsxs)(t.Z, {
                    children: [
                      s && (0, n.jsx)("img", { alt: o, src: s }),
                      (0, n.jsx)("h1", { className: u().title, children: i }),
                    ],
                  }),
                  a,
                ],
              }),
              (0, n.jsx)("footer", {
                children: (0, n.jsxs)(t.Z, {
                  children: [
                    (0, n.jsx)("h2", { children: "Contact us" }),
                    (0, n.jsx)("p", {
                      children:
                        "For general inquiries, please write to: fosch@uam.es",
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "For research/investigation questions, please write to: fosch.research@uam.es",
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "For formation issues or MSc/PhD stay, please write to: fosch.educa@uam.es",
                    }),
                    (0, n.jsx)("p", {
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
    8418: function (e, a, i) {
      "use strict";
      function n(e, a) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, a) {
            var i = [],
              n = !0,
              r = !1,
              t = void 0;
            try {
              for (
                var o, s = e[Symbol.iterator]();
                !(n = (o = s.next()).done) &&
                (i.push(o.value), !a || i.length !== a);
                n = !0
              );
            } catch (l) {
              (r = !0), (t = l);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (r) throw t;
              }
            }
            return i;
          })(e, a) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      a.default = void 0;
      var r,
        t = (r = i(7294)) && r.__esModule ? r : { default: r },
        o = i(6273),
        s = i(387),
        l = i(7190);
      var d = {};
      function c(e, a, i, n) {
        if (e && o.isLocalURL(a)) {
          e.prefetch(a, i, n).catch(function (e) {
            0;
          });
          var r =
            n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
          d[a + "%" + i + (r ? "%" + r : "")] = !0;
        }
      }
      var u = function (e) {
        var a,
          i = !1 !== e.prefetch,
          r = s.useRouter(),
          u = t.default.useMemo(
            function () {
              var a = n(o.resolveHref(r, e.href, !0), 2),
                i = a[0],
                t = a[1];
              return { href: i, as: e.as ? o.resolveHref(r, e.as) : t || i };
            },
            [r, e.href, e.as]
          ),
          f = u.href,
          h = u.as,
          g = e.children,
          p = e.replace,
          m = e.shallow,
          v = e.scroll,
          j = e.locale;
        "string" === typeof g && (g = t.default.createElement("a", null, g));
        var y =
            (a = t.default.Children.only(g)) && "object" === typeof a && a.ref,
          x = n(l.useIntersection({ rootMargin: "200px" }), 2),
          b = x[0],
          M = x[1],
          w = t.default.useCallback(
            function (e) {
              b(e),
                y &&
                  ("function" === typeof y
                    ? y(e)
                    : "object" === typeof y && (y.current = e));
            },
            [y, b]
          );
        t.default.useEffect(
          function () {
            var e = M && i && o.isLocalURL(f),
              a = "undefined" !== typeof j ? j : r && r.locale,
              n = d[f + "%" + h + (a ? "%" + a : "")];
            e && !n && c(r, f, h, { locale: a });
          },
          [h, f, M, j, i, r]
        );
        var C = {
          ref: w,
          onClick: function (e) {
            a.props &&
              "function" === typeof a.props.onClick &&
              a.props.onClick(e),
              e.defaultPrevented ||
                (function (e, a, i, n, r, t, s, l) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var a = e.currentTarget.target;
                      return (
                        (a && "_self" !== a) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      o.isLocalURL(i))) &&
                    (e.preventDefault(),
                    null == s && n.indexOf("#") >= 0 && (s = !1),
                    a[r ? "replace" : "push"](i, n, {
                      shallow: t,
                      locale: l,
                      scroll: s,
                    }));
                })(e, r, f, h, p, m, v, j);
          },
          onMouseEnter: function (e) {
            a.props &&
              "function" === typeof a.props.onMouseEnter &&
              a.props.onMouseEnter(e),
              o.isLocalURL(f) && c(r, f, h, { priority: !0 });
          },
        };
        if (e.passHref || ("a" === a.type && !("href" in a.props))) {
          var _ = "undefined" !== typeof j ? j : r && r.locale,
            S =
              r &&
              r.isLocaleDomain &&
              o.getDomainLocale(h, _, r && r.locales, r && r.domainLocales);
          C.href = S || o.addBasePath(o.addLocale(h, _, r && r.defaultLocale));
        }
        return t.default.cloneElement(a, C);
      };
      a.default = u;
    },
    7190: function (e, a, i) {
      "use strict";
      function n(e, a) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, a) {
            var i = [],
              n = !0,
              r = !1,
              t = void 0;
            try {
              for (
                var o, s = e[Symbol.iterator]();
                !(n = (o = s.next()).done) &&
                (i.push(o.value), !a || i.length !== a);
                n = !0
              );
            } catch (l) {
              (r = !0), (t = l);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (r) throw t;
              }
            }
            return i;
          })(e, a) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.useIntersection = function (e) {
          var a = e.rootMargin,
            i = e.disabled || !o,
            l = r.useRef(),
            d = n(r.useState(!1), 2),
            c = d[0],
            u = d[1],
            f = r.useCallback(
              function (e) {
                l.current && (l.current(), (l.current = void 0)),
                  i ||
                    c ||
                    (e &&
                      e.tagName &&
                      (l.current = (function (e, a, i) {
                        var n = (function (e) {
                            var a = e.rootMargin || "",
                              i = s.get(a);
                            if (i) return i;
                            var n = new Map(),
                              r = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var a = n.get(e.target),
                                    i =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  a && i && a(i);
                                });
                              }, e);
                            return (
                              s.set(
                                a,
                                (i = { id: a, observer: r, elements: n })
                              ),
                              i
                            );
                          })(i),
                          r = n.id,
                          t = n.observer,
                          o = n.elements;
                        return (
                          o.set(e, a),
                          t.observe(e),
                          function () {
                            o.delete(e),
                              t.unobserve(e),
                              0 === o.size && (t.disconnect(), s.delete(r));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && u(e);
                        },
                        { rootMargin: a }
                      )));
              },
              [i, a, c]
            );
          return (
            r.useEffect(
              function () {
                if (!o && !c) {
                  var e = t.requestIdleCallback(function () {
                    return u(!0);
                  });
                  return function () {
                    return t.cancelIdleCallback(e);
                  };
                }
              },
              [c]
            ),
            [f, c]
          );
        });
      var r = i(7294),
        t = i(9311),
        o = "undefined" !== typeof IntersectionObserver;
      var s = new Map();
    },
    9675: function (e, a, i) {
      "use strict";
      i.r(a),
        i.d(a, {
          default: function () {
            return d;
          },
        });
      var n = i(5893),
        r = i(4535),
        t = i(6619),
        o = i(1270),
        s = i.n(o);
      function l(e) {
        var a = e.id,
          i = e.image,
          r = e.alt,
          t = e.title,
          o = e.link,
          l = e.position,
          d = e.bio;
        return (0, n.jsxs)("div", {
          className: s().profile,
          id: a,
          children: [
            (0, n.jsx)("div", {
              children: (0, n.jsx)("img", {
                className: s().image,
                src: i,
                alt: r,
              }),
            }),
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)("div", { className: s().title, children: t }),
                o &&
                  (0, n.jsx)("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: o,
                    children: "Link",
                  }),
                (0, n.jsx)("div", { className: s().position, children: l }),
                (0, n.jsx)("div", { className: s().bio, children: d }),
              ],
            }),
          ],
        });
      }
      function d() {
        return (0, n.jsxs)(t.Z, {
          title: "Faculty and Researchers",
          children: [
            (0, n.jsxs)(r.Z, {
              children: [
                (0, n.jsx)("h2", { children: "Principal Investigators" }),
                (0, n.jsx)(l, {
                  id: "silvia",
                  image: "/images/silvia.png",
                  alt: "Una foto de Silvia M. Arribas",
                  title: "Dra. Silvia M. Arribas Rodr\xedguez",
                  link: "https://www.uam.es/Medicina/ArribasRodriguezSilvia/1242677452339.htm?pid=1242677452589&%20Silvia",
                  position:
                    "Head of area: Oxidavive Stress, Fetal Programming and Cardiometabolic Health.",
                  bio: "PhD in Biomolecular Sciences by Universidad Aut\xf3noma de Madrid. Her research was focused on the fetal programming of the cardiovascular disease. She has extensive expertis in the oxidative stress pathways and their implication to physio-pathology balance. She was head of Physiology Department where is Professor of human physiology.",
                }),
                (0, n.jsx)(l, {
                  id: "maria",
                  image: "/images/maria.jpg",
                  alt: "Una foto de Maria Angeles Martin",
                  title: "Dra. Mar\xeda \xc1ngeles Mart\xedn Cabrejas",
                  link: "https://www.uam.es/Ciencias/Martin_Cabrejas_Maris-Angeles/1446767769606.htm?language=es&pid=1446765791606&n%20Cabrejas,%20Mar?a%20?ngeles",
                  position:
                    "Head of area: Food Technology and New Ingredient Development.",
                  bio: "PhD in Chemical Sciences by Universidad Aut\xf3noma de Madrid. An important part of her research was dedicated to search the revalorization of agri-food by-products as strategy to obtain new ingredients. She has gained broad experience in the characterization of plant-derived waste products and their conversion into food ingredients. She is Full Professor receiving additional award of 5th Plan for Scientific Research and Technological Innovation.",
                }),
              ],
            }),
            (0, n.jsxs)(r.Z, {
              children: [
                (0, n.jsx)("h2", { children: "Junior Investigators" }),
                (0, n.jsx)(l, {
                  id: "yolanda",
                  image: "/images/yolanda.jpg",
                  alt: "Una foto de Yolanda Aguilera",
                  title: "Dra. Yolanda Aguilera Guti\xe9rrez",
                  link: "https://www.uam.es/Ciencias/Yolanda-Aguilera-Guti%C3%A9rrez/1446766152599.htm?language=es&pid=1446765791606&rrez,%20Yolanda",
                  position: "Coordinator of New Ingredient Development unit.",
                  bio: "PhD in Food Science and Technology by Universidad Aut\xf3noma de Madrid. Her research focuses on insects for human consumption and their effect on health due to their antioxidant compounds. At present, she is an Associate Professor in the agricultural chemistry unit of the Faculty of Sciences of the Universidad Autonoma de Madrid.",
                }),
                (0, n.jsx)(l, {
                  id: "ignacio",
                  image: "/images/ignacio.jpg",
                  alt: "Una foto de Ignacio Monedero",
                  title: "Dr. Ignacio Monedero Cobeta",
                  link: "https://www.uam.es/Medicina/MonederoCobetaIgnacio/1446774319870.htm?pid=1242663815769&%20Ignacio",
                  position: "Leader of Genomic Technology",
                  bio: "PhD in Molecular Biology by Universidad Aut\xf3noma de Madrid. He is a specialist in developmental biology and its molecular factors controlling neuronal division. He studies the control of proliferation of the nervous system and its effect on memory. Currently, he is an Associate Professor of Physiology of the Faculty of Medicine of the Universidad Aut\xf3noma de Madrid",
                }),
                (0, n.jsx)(l, {
                  id: "Vanesa",
                  image: "/images/vanesa.jpg",
                  alt: "Una foto de Vanesa Benitez",
                  title: "Dra. Vanesa Benitez Garc\xeda",
                  link: "https://www.uam.es/Ciencias/Ben%C3%ADtez-Garcia_Vanesa/1446767457251.htm?pid=1446766111829&language=es",
                  position: "Coordinator of Food Technology unit.",
                }),
                (0, n.jsx)(l, {
                  id: "Alicia",
                  image: "/images/alicia.jpg",
                  alt: "Una foto de Alicia Gil",
                  title: "Dra. Alicia Gil Ram\xedrez",
                  link: "https://www.uam.es/Ciencias/Gil-Ramirez_Alicia/1446816498069.htm?language=es&pid=1446765791606&rez,%20Alicia",
                }),
                (0, n.jsx)(l, {
                  id: "David",
                  image: "/images/david.jpg",
                  alt: "Una foto de David Ramiro",
                  title: "Dr. David Ramiro Cortijo",
                  link: "https://www.uam.es/Medicina/RamiroCortijoDavid/1446825270432.htm?language=es&pid=1242663815769&title=Ramiro%20Cortijo%20David",
                  position: "Coordinator of Pregnancy and Lactation unit.",
                }),
                (0, n.jsx)(l, {
                  id: "Pilar",
                  image: "/images/pilar.jpg",
                  alt: "Una foto de Pilar Rodr\xedguez",
                  title: "Dra. Pilar Rodr\xedguez Rodr\xedguez",
                  link: "https://uam.es/Medicina/RodriguezRodriguezPilar/1242691508065.htm?language=es&pid=1242664265346&title=Rodr?guez%20Rodr?guez%20Pilar",
                  position:
                    "Coordinator of Fetal Programming unit and Animal models.",
                }),
              ],
            }),
            (0, n.jsxs)(r.Z, {
              children: [
                (0, n.jsx)("h2", { children: "Postdoctoral Researchers" }),
                (0, n.jsx)(l, {
                  id: "andrea",
                  image: "/images/andrea.jpg",
                  alt: "Una foto de Andrea Gila",
                  title: "Dra. Andrea Gila D\xedaz",
                  link: "https://www.researchgate.net/profile/Andrea-Gila-Diaz",
                }),
                (0, n.jsx)(l, {
                  id: "miguel",
                  image: "/images/miguel.png",
                  alt: "Una foto de Miguel Rebollo",
                  title: "Dr. Miguel Rebollo Hern\xe1nz",
                  link: "https://scholar.google.com/citations?user=2twRnqMAAAAJ",
                }),
              ],
            }),
            (0, n.jsxs)(r.Z, {
              children: [
                (0, n.jsx)("h2", { children: "PhD Students" }),
                (0, n.jsx)(l, {
                  id: "silvia-ca\xf1as",
                  image: "/images/canas.jpg",
                  alt: "Una foto de Silvia Ca\xf1as",
                  title: "Silvia Ca\xf1as Rodr\xedguez",
                  link: "https://www.uam.es/Ciencias/Ca%C3%B1as-Rodr%C3%ADguez,-Silvia/1446805074232.htm?language=es&pid=1446765791620&as%20Rodr?guez,%20Silvia",
                }),
                (0, n.jsx)(l, {
                  id: "cheyenne",
                  image: "/images/cheyenne.jpg",
                  alt: "Una foto de Cheyenne Braojos",
                  title: "Cheyenne Braojos Molero",
                  link: "https://www.linkedin.com/in/cheyennebma/",
                }),
                (0, n.jsx)(l, {
                  id: "santiago",
                  image: "/images/avatar.png",
                  alt: "Una foto de Santiago Ruvira",
                  title: "Santiago Ruvira",
                }),
              ],
            }),
            (0, n.jsxs)(r.Z, {
              children: [
                (0, n.jsx)("h2", { children: "Emeritus Professors" }),
                (0, n.jsx)(l, {
                  id: "rosario",
                  image: "/images/charo.jpeg",
                  alt: "Una foto de M. Rosario L\xf3pez",
                  title: "Dra. Mar\xeda Rosario L\xf3pez Gim\xe9nez",
                }),
                (0, n.jsx)(l, {
                  id: "angel",
                  image: "/images/angel_luis.jpeg",
                  alt: "Una foto de \xc1ngel L. L\xf3pez de Pablo",
                  title: "Dr. \xc1ngel L. L\xf3pez de Pablo Le\xf3n",
                }),
                (0, n.jsx)(l, {
                  id: "carmen",
                  image: "/images/mari_carmen.jpg",
                  alt: "Una foto de Maria dek Carmen Gonz\xe1lez",
                  title: "Dra. Mar\xeda del Carmen Gonz\xe1lez",
                }),
              ],
            }),
            (0, n.jsxs)(r.Z, {
              children: [
                (0, n.jsx)("h2", {
                  children: "External Colaborators and Advisory Board",
                }),
                (0, n.jsx)("p", {
                  children: "Dra. Bego\xf1a Quintana Villamandos",
                }),
                (0, n.jsx)("p", {
                  children:
                    '"Cardiac surgery unit of Anesthesiology and Resuscitation Service at Hospital General Universitario Gregorio Mara\xf1\xf3n (Madrid, Spain)"',
                }),
                (0, n.jsx)(l, {
                  title: "Dra. Bego\xf1a Quintana Villamandos",
                  bio: "Cardiac surgery unit of Anesthesiology and Resuscitation Service at Hospital General Universitario Gregorio Mara\xf1\xf3n (Madrid, Spain)",
                }),
                (0, n.jsx)(l, {
                  title: "Dra. Maria de la Calle Fern\xe1ndez-Miranda",
                  bio: "High-risk unit of OBS/GYN Service at Hospital Universitario La Paz (Madrid, Spain)",
                }),
                (0, n.jsx)(l, {
                  title: "Dr. Miguel S\xe1en de Pipa\xf3n Marcos",
                  bio: "Neonatal Intensive Care unit of Neonatology Service at Hospital Universitario La Paz (Madrid, Spain)",
                }),
                (0, n.jsx)(l, {
                  title: "Dr. Jose Maria",
                  bio: "Cardiac surgery unit of Anesthesiology and Resuscitation Service at Hospital General Universitario Gregorio Mara\xf1\xf3n (Madrid, Spain)",
                }),
                (0, n.jsx)(l, {
                  title: "Dra. Gloria Hern\xe1ndez Carrillo",
                  bio: "Neonatology Service at Hospital Cl\xednico San Carlos (Madrid, Spain)",
                }),
                (0, n.jsx)(l, {
                  title: "Dra. Eva Garrosa Hern\xe1ndez",
                  bio: "Department of psychology-biology and health psychology of Faculty of Psychology of Universidad Aut\xf3noma de Madrid (Spain)",
                }),
                (0, n.jsx)(l, {
                  title: "Dra. Mar\xeda de la F\xe9 Rodriguez Mu\xf1oz",
                  bio: "Department of Personality Psychology, Treatment and Assesment of Faculty of Psychology of Universidad Nacional de Educaci\xf3n a Distancia (Spain)",
                }),
                (0, n.jsx)(l, {
                  title: "Dra. Marta Gil Ortega",
                  bio: "Neonatology Service at Hospital Cl\xednico San Carlos (Madrid, Spain)",
                }),
                (0, n.jsx)(l, {
                  title: "Dra. Beatriz Somoza",
                  bio: "Neonatology Service at Hospital Cl\xednico San Carlos (Madrid, Spain)",
                }),
                (0, n.jsx)(l, {
                  title: "Dra. Perla Y. Gutierrez Arzapalo",
                  bio: "Neonatology Service at Hospital Cl\xednico San Carlos (Madrid, Spain)",
                }),
              ],
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
    1270: function (e) {
      e.exports = {
        profile: "profile_profile__kjj9C",
        title: "profile_title__Z6Fgb",
        image: "profile_image___mzNU",
        position: "profile_position__cUUar",
      };
    },
    9008: function (e, a, i) {
      e.exports = i(5443);
    },
    1664: function (e, a, i) {
      e.exports = i(8418);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (a = 4320), e((e.s = a));
      var a;
    });
    var a = e.O();
    _N_E = a;
  },
]);