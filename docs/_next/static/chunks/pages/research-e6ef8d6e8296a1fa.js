(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [465],
  {
    8812: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/research",
        function () {
          return i(6611);
        },
      ]);
    },
    4535: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = i(5893),
        a = i(8829),
        s = i.n(a);
      function r(e) {
        var t = e.children;
        return (0, n.jsx)("div", { className: s().container, children: t });
      }
    },
    6619: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return h;
        },
      });
      var n = i(5893),
        a = i(9008),
        s = i(4535),
        r = i(1664),
        o = i(4668),
        c = i.n(o);
      function l() {
        return (0, n.jsxs)("nav", {
          className: c().nav,
          children: [
            (0, n.jsx)("div", {
              className: c().logo,
              children: (0, n.jsx)(r.default, {
                href: "/",
                children: "FOSCH Group",
              }),
            }),
            (0, n.jsxs)("div", {
              className: c().links,
              children: [
                (0, n.jsx)(r.default, { href: "/team", children: "Our Team" }),
                (0, n.jsx)(r.default, {
                  href: "/research",
                  children: "Research",
                }),
                (0, n.jsx)(r.default, {
                  href: "/divulgacion",
                  children: "Divulgaci\xf3n",
                }),
                (0, n.jsx)(r.default, {
                  href: "/formacion",
                  children: "Formaci\xf3n",
                }),
                (0, n.jsx)(r.default, {
                  href: "/resources",
                  children: "Resources",
                }),
              ],
            }),
          ],
        });
      }
      var d = i(9050),
        u = i.n(d);
      function h(e) {
        var t = e.children,
          i = e.title,
          r = e.alt,
          o = e.image;
        return (0, n.jsx)("div", {
          className: u().wrapper,
          children: (0, n.jsxs)("div", {
            className: u().container,
            children: [
              (0, n.jsx)(a.default, {
                children: (0, n.jsx)("title", { children: i }),
              }),
              (0, n.jsx)("header", {
                className: u().header,
                children: (0, n.jsx)(l, {}),
              }),
              (0, n.jsxs)("main", {
                className: u().main,
                children: [
                  (0, n.jsxs)(s.Z, {
                    children: [
                      o && (0, n.jsx)("img", { alt: r, src: o }),
                      (0, n.jsx)("h1", { className: u().title, children: i }),
                    ],
                  }),
                  t,
                ],
              }),
              (0, n.jsx)("footer", {
                children: (0, n.jsxs)(s.Z, {
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
    8418: function (e, t, i) {
      "use strict";
      function n(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var i = [],
              n = !0,
              a = !1,
              s = void 0;
            try {
              for (
                var r, o = e[Symbol.iterator]();
                !(n = (r = o.next()).done) &&
                (i.push(r.value), !t || i.length !== t);
                n = !0
              );
            } catch (c) {
              (a = !0), (s = c);
            } finally {
              try {
                n || null == o.return || o.return();
              } finally {
                if (a) throw s;
              }
            }
            return i;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      t.default = void 0;
      var a,
        s = (a = i(7294)) && a.__esModule ? a : { default: a },
        r = i(6273),
        o = i(387),
        c = i(7190);
      var l = {};
      function d(e, t, i, n) {
        if (e && r.isLocalURL(t)) {
          e.prefetch(t, i, n).catch(function (e) {
            0;
          });
          var a =
            n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
          l[t + "%" + i + (a ? "%" + a : "")] = !0;
        }
      }
      var u = function (e) {
        var t,
          i = !1 !== e.prefetch,
          a = o.useRouter(),
          u = s.default.useMemo(
            function () {
              var t = n(r.resolveHref(a, e.href, !0), 2),
                i = t[0],
                s = t[1];
              return { href: i, as: e.as ? r.resolveHref(a, e.as) : s || i };
            },
            [a, e.href, e.as]
          ),
          h = u.href,
          m = u.as,
          p = e.children,
          f = e.replace,
          g = e.shallow,
          w = e.scroll,
          v = e.locale;
        "string" === typeof p && (p = s.default.createElement("a", null, p));
        var y =
            (t = s.default.Children.only(p)) && "object" === typeof t && t.ref,
          b = n(c.useIntersection({ rootMargin: "200px" }), 2),
          x = b[0],
          j = b[1],
          k = s.default.useCallback(
            function (e) {
              x(e),
                y &&
                  ("function" === typeof y
                    ? y(e)
                    : "object" === typeof y && (y.current = e));
            },
            [y, x]
          );
        s.default.useEffect(
          function () {
            var e = j && i && r.isLocalURL(h),
              t = "undefined" !== typeof v ? v : a && a.locale,
              n = l[h + "%" + m + (t ? "%" + t : "")];
            e && !n && d(a, h, m, { locale: t });
          },
          [m, h, j, v, i, a]
        );
        var _ = {
          ref: k,
          onClick: function (e) {
            t.props &&
              "function" === typeof t.props.onClick &&
              t.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, i, n, a, s, o, c) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      r.isLocalURL(i))) &&
                    (e.preventDefault(),
                    null == o && n.indexOf("#") >= 0 && (o = !1),
                    t[a ? "replace" : "push"](i, n, {
                      shallow: s,
                      locale: c,
                      scroll: o,
                    }));
                })(e, a, h, m, f, g, w, v);
          },
          onMouseEnter: function (e) {
            t.props &&
              "function" === typeof t.props.onMouseEnter &&
              t.props.onMouseEnter(e),
              r.isLocalURL(h) && d(a, h, m, { priority: !0 });
          },
        };
        if (e.passHref || ("a" === t.type && !("href" in t.props))) {
          var A = "undefined" !== typeof v ? v : a && a.locale,
            P =
              a &&
              a.isLocaleDomain &&
              r.getDomainLocale(m, A, a && a.locales, a && a.domainLocales);
          _.href = P || r.addBasePath(r.addLocale(m, A, a && a.defaultLocale));
        }
        return s.default.cloneElement(t, _);
      };
      t.default = u;
    },
    7190: function (e, t, i) {
      "use strict";
      function n(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var i = [],
              n = !0,
              a = !1,
              s = void 0;
            try {
              for (
                var r, o = e[Symbol.iterator]();
                !(n = (r = o.next()).done) &&
                (i.push(r.value), !t || i.length !== t);
                n = !0
              );
            } catch (c) {
              (a = !0), (s = c);
            } finally {
              try {
                n || null == o.return || o.return();
              } finally {
                if (a) throw s;
              }
            }
            return i;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            i = e.disabled || !r,
            c = a.useRef(),
            l = n(a.useState(!1), 2),
            d = l[0],
            u = l[1],
            h = a.useCallback(
              function (e) {
                c.current && (c.current(), (c.current = void 0)),
                  i ||
                    d ||
                    (e &&
                      e.tagName &&
                      (c.current = (function (e, t, i) {
                        var n = (function (e) {
                            var t = e.rootMargin || "",
                              i = o.get(t);
                            if (i) return i;
                            var n = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = n.get(e.target),
                                    i =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && i && t(i);
                                });
                              }, e);
                            return (
                              o.set(
                                t,
                                (i = { id: t, observer: a, elements: n })
                              ),
                              i
                            );
                          })(i),
                          a = n.id,
                          s = n.observer,
                          r = n.elements;
                        return (
                          r.set(e, t),
                          s.observe(e),
                          function () {
                            r.delete(e),
                              s.unobserve(e),
                              0 === r.size && (s.disconnect(), o.delete(a));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && u(e);
                        },
                        { rootMargin: t }
                      )));
              },
              [i, t, d]
            );
          return (
            a.useEffect(
              function () {
                if (!r && !d) {
                  var e = s.requestIdleCallback(function () {
                    return u(!0);
                  });
                  return function () {
                    return s.cancelIdleCallback(e);
                  };
                }
              },
              [d]
            ),
            [h, d]
          );
        });
      var a = i(7294),
        s = i(9311),
        r = "undefined" !== typeof IntersectionObserver;
      var o = new Map();
    },
    6611: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return f;
          },
        });
      var n = i(5893),
        a = i(4184),
        s = i.n(a),
        r = i(7294),
        o = i(2061),
        c = i.n(o);
      function l(e) {
        var t = e.title,
          i = e.children,
          a = (0, r.useState)(!1),
          o = a[0],
          l = a[1];
        return (0, n.jsxs)("div", {
          className: s()(o ? c().show : c().hide, c().accordion),
          children: [
            (0, n.jsx)("h3", {
              onClick: function () {
                l(!o);
              },
              className: c().title,
              children: t,
            }),
            (0, n.jsx)("div", { className: c().details, children: i }),
          ],
        });
      }
      var d = i(2932),
        u = i.n(d);
      function h(e) {
        var t = e.title,
          i = e.abstract,
          a = e.link,
          s = e.image;
        return (0, n.jsxs)("div", {
          className: u().article,
          children: [
            (0, n.jsx)("a", {
              target: "_blank",
              rel: "noreferrer",
              href: a,
              className: u().title,
              children: t,
            }),
            (0, n.jsx)("div", { className: u().article, children: i }),
            s && (0, n.jsx)("img", { className: u().image, alt: t, src: s }),
          ],
        });
      }
      var m = i(4535),
        p = i(6619);
      function f() {
        return (0, n.jsxs)(p.Z, {
          title: "Our Research",
          children: [
            (0, n.jsx)(m.Z, {
              children: (0, n.jsx)("h2", { children: "Research Topics" }),
            }),
            (0, n.jsx)(m.Z, {
              children: (0, n.jsx)("h2", { children: "Competitive Projects" }),
            }),
            (0, n.jsx)(m.Z, {
              children: (0, n.jsx)("h2", {
                children: "Industry-transferency Projects",
              }),
            }),
            (0, n.jsxs)(m.Z, {
              children: [
                (0, n.jsx)("h2", { children: "Articles" }),
                (0, n.jsx)(l, {
                  title: "General Nutrition",
                  children: (0, n.jsx)(h, {
                    title:
                      "Development and Validation of a Questionnaire to Assess Adherence to the Healthy Food Pyramid in Spanish Adults",
                    abstract:
                      "AP-Q is a questionnaire to assess healthy food pyramid adherence, easy to complete, cost-effective, timesaving and has the competency to assess, besides diet, several features affecting health status.",
                    link: "https://www.mdpi.com/2072-6643/12/6/1656",
                  }),
                }),
                (0, n.jsxs)(l, {
                  title: "Food Technology and Developmental of New Ingredients",
                  children: [
                    (0, n.jsx)(h, {
                      title:
                        "Bioavailability of Melatonin from Lentil Sprouts and Its Role in the Plasmatic Antioxidant Status in Rats",
                      abstract:
                        "We investigated the bioavailability of melatonin from lentil sprouts and its role in plasmatic antioxidant status. Their intake could increase melatonin plasmatic concentration and attenuate plasmatic oxidative stress.",
                      link: "https://www.mdpi.com/2304-8158/9/3/330",
                      image: "/images/foods_1.png",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Teas and herbal infusions as sources of melatonin and other bioactive non-nutrient components",
                      abstract:
                        "The teas and herbal infusions could be consided as suitable drinks herein validated for their bioactive compounds that may act as antioxidants and non-protein inhibitors of digestive enzymes.",
                      link: "https://www.sciencedirect.com/science/article/abs/pii/S0023643817307697",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Phenolic compounds from coffee by-products modulate adipogenesis-related inflammation, mitochondrial dysfunction, and insulin resistance in adipocytes, via insulin/PI3K/AKT signaling pathways",
                      abstract:
                        "Coffee silverskin and husk are beneficial in reducing adipogenesis and inflammation-related disorders.",
                      link: "https://www.sciencedirect.com/science/article/pii/S0278691519304612",
                      image: "/images/CSE_1.jpg",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Extraction of phenolic compounds from cocoa shell: Modeling using response surface methodology and artificial neural networks",
                      abstract:
                        "Green extraction of phenolic compounds from the cocoa shell was modeled and optimized.",
                      link: "https://www.sciencedirect.com/science/article/pii/S1383586621004913",
                      image: "/images/foods_2.jpg",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Black bean coats: New source of anthocyanins stabilized by \u03b2-cyclodextrin copigmentation in a sport beverage",
                      abstract:
                        "These black bean coat aqueous extracts and powders might represent natural alternatives to synthetic colorants, ecologically extracted, and with a high antioxidant potential.",
                      link: "https://www.sciencedirect.com/science/article/abs/pii/S0308814616309153",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Coffee parchment as a new dietary fiber ingredient: Functional and physiological characterization",
                      abstract:
                        "Milling is a strategy for developing fiber-rich coffee parchment-based ingredients. Coffee parchment shows promising hypoglycemic and hypolipidemic capacities.",
                      link: "https://www.sciencedirect.com/science/article/abs/pii/S096399691930225X",
                      image: "/images/CSE_2.jpg",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Impact of Melatonin Enrichment during Germination of Legumes on Bioactive Compounds and Antioxidant Activity",
                      abstract:
                        "The melatonin-enriched foods exhibited potent free radical scavenger and antioxidant functions that may be used as a nutritional strategy to alleviate chronic and age-related diseases.",
                      link: "https://pubs.acs.org/doi/abs/10.1021/acs.jafc.5b03128",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Revalorization of Coffee Husk: Modeling and Optimizing the Green Sustainable Extraction of Phenolic Compounds",
                      abstract:
                        "The phenolic aqueous extracts from the coffee husk could be used as sustainable food ingredients and nutraceutical products.",
                      link: "https://www.mdpi.com/2304-8158/10/3/653",
                      image: "/images/CSE_5.png",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Relationship of the Phytochemicals from Coffee and Cocoa By-Products with their Potential to Modulate Biomarkers of Metabolic Syndrome In Vitro",
                      abstract:
                        "We identified the phytochemicals from coffee and cocoa by-products and offered new insights into their associations with biomarkers of inflammation, oxidative stress, adipogenesis, and insulin resistance in vitro.",
                      link: "https://www.mdpi.com/2076-3921/8/8/279",
                      image: "/images/CSE_3.png",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Cocoa Shell Aqueous Phenolic Extract Preserves Mitochondrial Function and Insulin Sensitivity by Attenuating Inflammation between Macrophages and Adipocytes In Vitro",
                      abstract:
                        "Cocoa shell phenolics promote a beige phenotype in adipocytes. Macrophages-adipocytes inflammatory interaction is reduced preventing mitochondrial dysfunction and insulin resistance.",
                      link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/mnfr.201801413",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Inhibition of the Maillard Reaction by Phytochemicals Composing an Aqueous Coffee Silverskin Extract via a Mixed Mechanism of Action",
                      abstract:
                        "Isoflavones and melatonin may contribute to the antiglycative/antiglycoxidative properties associated with coffee silverskin.",
                      link: "https://www.mdpi.com/2304-8158/8/10/438",
                      image: "/images/CSE_4.webp",
                    }),
                  ],
                }),
                (0, n.jsxs)(l, {
                  title: "Related to Gestational Health",
                  children: [
                    (0, n.jsx)(h, {
                      title:
                        "Maternal plasma antioxidant status in the first trimester of pregnancy and development of obstetric complications",
                      abstract:
                        "In early gestation, low antioxidants were associated with development of complications.",
                      link: "https://www.sciencedirect.com/science/article/abs/pii/S0143400416304969?via%3Dihub",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "First trimester elevations of hematocrit, lipid peroxidation and nitrates in women with twin pregnancies who develop preeclampsia",
                      abstract:
                        "We showed an association between red blood cells, hematocrit, malondialdehyde, and nitrates with preeclampsia in twin pregnancies.",
                      link: "https://www.sciencedirect.com/science/article/abs/pii/S2210778920301215?via%3Dihub",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Maternal Resources, Pregnancy Concerns, and Biological Factors Associated to Birth Weight and Psychological Health",
                      abstract:
                        "The relevance of psychological health during pregnancy for maternal and neonatal outcome, and to consider it in preventive policies in OBS/GYN.",
                      link: "https://www.mdpi.com/2077-0383/10/4/695",
                      image: "/images/ECUSA_news1.png",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Effects of Arachidonic and Docosohexahenoic Acid Supplementation during Gestation in Rats. Implication of Placental Oxidative Stress",
                      abstract:
                        "High arachidonic acid during gestation associates with intrauterine growth restriction, through placental oxidative stress, with females being more susceptible.",
                      link: "https://www.mdpi.com/1422-0067/19/12/3863",
                      image: "/images/IJMS_2.png",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Maternal Psychological and Biological Factors Associated to Gestational Complications",
                      abstract:
                        "High maternal melatonin and life satisfaction could be protective factors against the maternal complications during pregnancy. Low anxiety and cortisol and reduced work\u2013life conflicts could prevent fetal complications.",
                      link: "https://www.mdpi.com/2075-4426/11/3/183",
                      image: "/images/JPM_1.jpeg",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Maternal Antioxidant Status in Early Pregnancy and Development of Fetal Complications in Twin Pregnancies: A Pilot Study",
                      abstract:
                        "In twin gestations, maternal antioxidants and melatonin could be biomarkers to be included in algorithms to predict fetal growth restriction and preterm labor.",
                      link: "https://www.mdpi.com/2076-3921/9/4/269",
                      image: "/images/antioxidants_cover.png",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Early Association Factors for Depression Symptoms in Pregnancy: A Comparison between Spanish Women Spontaneously Gestation and with Assisted Reproduction Techniques",
                      abstract:
                        "Women undergoing ART need interventions to reduce anxiety and stressful life events, and to improve resilience, self-esteem, and emotional partner support to prevent depressive symptomatology during early pregnancy.",
                      link: "https://www.mdpi.com/2077-0383/10/23/5672",
                      image: "/images/ART_twiter.jpeg",
                    }),
                  ],
                }),
                (0, n.jsxs)(l, {
                  title: "Related to Pregnancy Epidemiology",
                  children: [
                    (0, n.jsx)(h, {
                      title:
                        "Obstetric Outcomes in the Surviving Fetus after Intrauterine Fetal Death in Bichorionic Twin Gestations",
                      abstract:
                        "Single intrauterine fetal death in twin gestations is a rare complication that should be monitored and attended by a clinical multidisciplinary team.",
                      link: "https://www.mdpi.com/2227-9067/8/10/927",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Women Aged over 40 with Twin Pregnancies Have a Higher Risk of Adverse Obstetrical Outcomes",
                      abstract:
                        "Over 40 years old are an independent risk factor for complications in twin pregnancies.",
                      link: "https://www.mdpi.com/1660-4601/18/24/13117",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Younger Age in Adolescent Pregnancies Is Associated with Higher Risk of Adverse Outcomes",
                      abstract:
                        "Young adolescents are at risk of complications during pregnancy and labor.",
                      link: "https://www.mdpi.com/1660-4601/18/16/8514",
                    }),
                  ],
                }),
                (0, n.jsxs)(l, {
                  title:
                    "Fetal Progaming of Cardiovascular Disease: Sex differences and Maternal Undernutrition",
                  children: [
                    (0, n.jsx)(h, {
                      title:
                        "Role of fetal nutrient restriction and postnatal catch-up growth on structural and mechanical alterations of rat aorta",
                      abstract:
                        "Fetal undernutrition induces similar aortic structural and mechanical alterations in young male and female rats. Our data argue against an early mechanical cause for the sex differences in hypertension development.",
                      link: "https://physoc.onlinelibrary.wiley.com/doi/10.1113/JP275030",
                      image: "/images/JPHY_1.jpeg",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Male fetal sex is associated with low maternal plasma anti-inflammatory cytokine profile in the first trimester of healthy pregnancies",
                      abstract:
                        "Women with a male fetus may have a worse capacity to counteract an inflammatory response. They may have better vasodilator capacity, but in the presence of an oxidative environment, a higher nitrosative damage may occur.",
                      link: "https://www.sciencedirect.com/science/article/abs/pii/S1043466620303069?via%3Dihub",
                      image: "/images/cytokines_1.png",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Fetal undernutrition is associated with perinatal sex-dependent alterations in oxidative status",
                      abstract:
                        "Adult males with maternal undernutrition (MUN) during gestation were hypertensive and exhibited the higher carbonyl levels compared to Controls. Adult MUN females were normotensive and did not exhibit differences in any of the biomarkers.",
                      link: "https://www.sciencedirect.com/science/article/abs/pii/S0955286315001989?via%3Dihub",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Long term effects of fetal undernutrition on rat heart. Role of hypertension and oxidative stress",
                      abstract:
                        "During perinatal life, females exposed to fetal undernutrition are protected from cardiac alterations, but in ageing they exhibit ventricular hypertrophy and functional loss. The severity of cardiac damage might be greater in males due to hypertension.",
                      link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0171544",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Sex Differences in Placental Protein Expression and Efficiency in a Rat Model of Fetal Programming Induced by Maternal Undernutrition",
                      abstract:
                        "Male placenta has worse adaptation to undernutrition with lower efficiency, associated with oxidative disbalance and reduced vascularization and glucocorticoid barrier.",
                      link: "https://www.mdpi.com/1422-0067/22/1/237",
                      image: "/images/IJMS_1.png",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Fetal Undernutrition Induces Resistance Artery Remodeling and Stiffness in Male and Female Rats Independent of Hypertension",
                      abstract:
                        "Fetal undernutrition induces resistence artery inward eutrophic remodeling and stiffness in both sexes. Resistance artery structural and mechanical alterations can participate in the development of hypertension in aged females.",
                      link: "https://www.mdpi.com/2227-9059/8/10/424",
                      image: "/images/MRA_1.png",
                    }),
                  ],
                }),
                (0, n.jsxs)(l, {
                  title:
                    "Related to Healthy Habits in Lactation Period: Nutrition and Psychological Stage",
                  children: [
                    (0, n.jsx)(h, {
                      title:
                        "Assessment of Adherence to the Healthy Food Pyramid in Pregnant and Lactating Women",
                      abstract:
                        "Breastfeeding mothers of young age and low socioeconomic/educational level would be the target population to carry out nutritional interventions that improve their adherence to the Healthy Foos Piramyd.",
                      link: "https://www.mdpi.com/2072-6643/13/7/2372",
                      image: "/images/ECUSA_news2.png",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Influence of Maternal Age and Gestational Age on Breast Milk Antioxidants During the First Month of Lactation",
                      abstract:
                        "Breast milk antioxidants are linked to gestational age providing higher levels to infants with lower maturation; maternal ageing has a negative influence on melatonin.",
                      link: "https://www.mdpi.com/2072-6643/12/9/2569",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Multidimensional Approach to Assess Nutrition and Lifestyle in Breastfeeding Women during the First Month of Lactation",
                      abstract:
                        "During the 1st month postpartum, breastfeeding women exhibited nutritional imbalances and poor physical activity negatively influencing anthropometric parameters.",
                      link: "https://www.mdpi.com/2072-6643/13/6/1766",
                      image: "/images/nutrients_1.png",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Healthy Habits and Emotional Balance in Women during the Postpartum Period: Differences between Term and Preterm Delivery",
                      abstract:
                        "Healthcare professional counseling is essential during the breastfeeding period, particularly in vulnerable mothers with preterm delivery.",
                      link: "https://www.mdpi.com/2227-9067/8/10/937",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Association between Maternal Postpartum Depression, Stress, Optimism, and Breastfeeding Pattern in the First Six Months",
                      abstract:
                        "In the 3rd month of breastfeeding, women with mixed breastfeeding exhibited higher stress and depression compared to those with exclusively breastfeeding. Evaluation of maternal psychological concerns and providing support to lactating mothers may help improving breastfeeding adherence.",
                      link: "https://www.mdpi.com/1660-4601/17/19/7153",
                      image: "/images/IJERPH_1.png",
                    }),
                  ],
                }),
                (0, n.jsxs)(l, {
                  title: "Nutrition During Neonatal Period",
                  children: [
                    (0, n.jsx)(h, {
                      title:
                        "Maltodextrin-induced intestinal injury in a neonatal mouse model",
                      abstract:
                        "This model allows for further interrogation of the effects of nutrients on pathogenic factors leading to intestinal injury in preterm infants.",
                      link: "https://journals.biologists.com/dmm/article/13/8/dmm044776/225253/Maltodextrin-induced-intestinal-injury-in-a",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Parenteral Fish-Oil Containing Lipid Emulsions Limit Initial Lipopolysaccharide-Induced Host Immune Responses in Preterm Pigs",
                      abstract:
                        "Host priming with soybean oil in the early postnatal period preserves a higher ARA:DHA ratio and the ability to acutely respond to an external stimulus. In contrast, fish-oil containing lipid emulsions increase DHA, exacerbate a deficit in ARA, and limit the initial LPS-induced inflammatory responses in preterm pigs.",
                      link: "https://www.mdpi.com/2072-6643/13/1/205",
                      image: "/images/nutrients_2.png",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Plasma Oxidative Status in Preterm Infants Receiving LCPUFA Supplementation: A Pilot Study",
                      abstract:
                        "ARA:DHA supplementation in preterm neonates resulted in an improvement in antioxidant to oxidant balance and a decrease in early fatty acid precursors of the n-6 relative to the n-3 pathway. These effects may reduce oxidative stress and inflammation.",
                      link: "https://www.mdpi.com/2072-6643/12/1/122",
                    }),
                  ],
                }),
                (0, n.jsxs)(l, {
                  title: "Models to Explore Cardiovascular Health",
                  children: [
                    (0, n.jsx)(h, {
                      title:
                        "Beneficial Effect of Bariatric Surgery on Abnormal MMP-9 and AMPK Activities: Potential Markers of Obesity-Related CV Risk",
                      abstract:
                        "Bariatric surgery has a beneficial effect on abnormal MMP-9, LDH and AMPK activities that might be associated with the development of arterial stiffness in obese patients. They could constitute biomarkers of cardiovascular risk in morbid obesity.",
                      link: "https://www.frontiersin.org/articles/10.3389/fphys.2019.00553/full",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Finerenone Attenuates Endothelial Dysfunction and Albuminuria in a Chronic Kidney Disease Model by a Reduction in Oxidative Stress",
                      abstract:
                        "Finerenone improves endothelial dysfunction through an enhancement in NO bioavailability and a decrease in superoxide anion levels due to an upregulation in SOD activity. This is associated with an increase in renal SOD activity and a reduction of albuminuria.",
                      link: "https://www.frontiersin.org/articles/10.3389/fphar.2018.01131/full",
                      image: "/images/finerenona.jpeg",
                    }),
                  ],
                }),
                (0, n.jsxs)(l, {
                  title: "Reviews",
                  children: [
                    (0, n.jsx)(h, {
                      title:
                        "Implication of Oxidative Stress in Fetal Programming of Cardiovascular Disease",
                      abstract:
                        "This review summarize the alterations in oxidative balance in fetal stress factors covering: the evidence from human studies of low birth weight, and the specific redox alterations in cardiovascular control organs induced by exposure to stress factors.",
                      link: "https://www.frontiersin.org/articles/10.3389/fphys.2018.00602/full",
                      image: "/images/review_frontiers_in_phys.jpeg",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "A Review of Bioactive Factors in Human Breastmilk: A Focus on Prematurity",
                      abstract:
                        "The aim of the review is to summarize the knowledge regarding bioactive factors present in breastmilk, namely antioxidants, growth factors, adipokines, and cytokines, paying attention to prematurity.",
                      link: "https://www.mdpi.com/2072-6643/11/6/1307",
                      image: "/images/review_nutrients1.webp",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Breast Milk Lipids and Fatty Acids in Regulating Neonatal Intestinal Development and Protecting against Intestinal Injury",
                      abstract:
                        "In this review, we focus on lipids and fatty acids present in breast milk and their impact on neonatal gut development and the risk of disease.",
                      link: "https://www.mdpi.com/2072-6643/12/2/534",
                      image: "/images/review_nutrients2.webp",
                    }),
                    (0, n.jsx)(h, {
                      title:
                        "Specialized Pro-Resolving Lipid Mediators in Neonatal Cardiovascular Physiology and Diseases",
                      abstract:
                        "In this review, we discuss LCPUFAs metabolism, SPMs, and their effect on cardiovascular health and diseases primarily focusing in neonates.",
                      link: "https://www.mdpi.com/2076-3921/10/6/933",
                      image: "/images/review_antioxidants1.webp",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)(m.Z, {
              children: [
                (0, n.jsx)("h2", { children: "Books and Chapters" }),
                (0, n.jsx)(h, {
                  title:
                    "Legumes: Nutritional Quality, Processing and Potential Health Benefits",
                  link: "https://pubs.rsc.org/en/content/ebook/978-1-78801-161-7",
                }),
                (0, n.jsx)(h, {
                  title:
                    "Fetal Undernutrition and Oxidative Stress: Influence of Sex and Gender",
                  link: "https://link.springer.com/referenceworkentry/10.1007%2F978-3-319-55387-0_32",
                }),
                (0, n.jsx)(h, {
                  title: "Coffee: Antioxidants in Chronic Diseases",
                  link: "https://pubs.rsc.org/en/content/chapter/bk9781788014977-00020/978-1-78801-497-7",
                }),
              ],
            }),
          ],
        });
      }
    },
    2061: function (e) {
      e.exports = {
        accordion: "accordion_accordion__aiuEK",
        title: "accordion_title__VZc0a",
        show: "accordion_show__SEmSP",
        hide: "accordion_hide__n3USI",
        details: "accordion_details__iQvzW",
      };
    },
    2932: function (e) {
      e.exports = {
        title: "article_title__U1WXy",
        image: "article_image__luGWS",
        article: "article_article__DPXKT",
      };
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
    9008: function (e, t, i) {
      e.exports = i(5443);
    },
    1664: function (e, t, i) {
      e.exports = i(8418);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 8812), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);