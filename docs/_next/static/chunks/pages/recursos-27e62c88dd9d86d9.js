(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[816],{3147:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/recursos",function(){return r(5116)}])},4535:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(5893),o=r(8829),a=r.n(o);function i(e){var n=e.children;return(0,t.jsx)("div",{className:a().container,children:n})}},6619:function(e,n,r){"use strict";r.d(n,{Z:function(){return d}});var t=r(5893),o=r(9008),a=r(4535),i=r(1664),c=r(4668),u=r.n(c);function l(){return(0,t.jsxs)("nav",{className:u().nav,children:[(0,t.jsx)(i.default,{href:"/",children:"FOSCH Group"}),(0,t.jsx)(i.default,{href:"/nuestro-equipo",children:"Nuestro Equipo"}),(0,t.jsx)(i.default,{href:"/investigacion",children:"Investigaci\xf3n"}),(0,t.jsx)(i.default,{href:"/divulgacion",children:"Divulgaci\xf3n"}),(0,t.jsx)(i.default,{href:"/formacion",children:"Formaci\xf3n"}),(0,t.jsx)(i.default,{href:"/recursos",children:"Recursos"})]})}var s=r(9050),f=r.n(s);function d(e){var n=e.children,r=e.titulo;return(0,t.jsx)("div",{className:f().wrapper,children:(0,t.jsxs)("div",{className:f().container,children:[(0,t.jsx)(o.default,{children:(0,t.jsx)("title",{children:r})}),(0,t.jsx)("header",{className:f().header,children:(0,t.jsx)(l,{})}),(0,t.jsxs)("main",{children:[(0,t.jsx)(a.Z,{children:(0,t.jsx)("h1",{className:f().title,children:r})}),n]}),(0,t.jsx)("footer",{})]})})}},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(u){o=!0,a=u}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},i=r(6273),c=r(387),u=r(7190);var l={};function s(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var n=t(i.resolveHref(o,e.href,!0),2),r=n[0],a=n[1];return{href:r,as:e.as?i.resolveHref(o,e.as):a||r}}),[o,e.href,e.as]),d=f.href,h=f.as,v=e.children,p=e.replace,y=e.shallow,x=e.scroll,_=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,j=t(u.useIntersection({rootMargin:"200px"}),2),g=j[0],b=j[1],w=a.default.useCallback((function(e){g(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,g]);a.default.useEffect((function(){var e=b&&r&&i.isLocalURL(d),n="undefined"!==typeof _?_:o&&o.locale,t=l[d+"%"+h+(n?"%"+n:"")];e&&!t&&s(o,d,h,{locale:n})}),[h,d,b,_,r,o]);var E={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,c,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==c&&t.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](r,t,{shallow:a,locale:u,scroll:c}))}(e,o,d,h,p,y,x,_)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&s(o,d,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var N="undefined"!==typeof _?_:o&&o.locale,L=o&&o.isLocaleDomain&&i.getDomainLocale(h,N,o&&o.locales,o&&o.domainLocales);E.href=L||i.addBasePath(i.addLocale(h,N,o&&o.defaultLocale))}return a.default.cloneElement(n,E)};n.default=f},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(u){o=!0,a=u}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,u=o.useRef(),l=t(o.useState(!1),2),s=l[0],f=l[1],d=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||s||e&&e.tagName&&(u.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=c.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,a=t.observer,i=t.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[r,n,s]);return o.useEffect((function(){if(!i&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=r(7294),a=r(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},5116:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return i}});var t=r(5893),o=r(4535),a=r(6619);function i(){return(0,t.jsx)(a.Z,{titulo:"Herramientas y Recursos",children:(0,t.jsxs)(o.Z,{children:[(0,t.jsx)("img",{src:"https://placekitten.com/g/250/250"}),(0,t.jsx)("h2",{children:"Contacta con nosotros"}),(0,t.jsx)("h2",{children:"Alojamientos"})]})})}},8829:function(e){e.exports={container:"container_container__7U8A5"}},9050:function(e){e.exports={title:"layout_title__ITdWE",header:"layout_header__WIdrS"}},4668:function(e){e.exports={nav:"navbar_nav__Yro3z"}},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=3147,e(e.s=n);var n}));var n=e.O();_N_E=n}]);