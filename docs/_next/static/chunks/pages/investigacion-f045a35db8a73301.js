(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[227],{3818:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/investigacion",function(){return r(4564)}])},4535:function(e,n,r){"use strict";r.d(n,{Z:function(){return a}});var t=r(5893),i=r(8829),o=r.n(i);function a(e){var n=e.children;return(0,t.jsx)("div",{className:o().container,children:n})}},6619:function(e,n,r){"use strict";r.d(n,{Z:function(){return d}});var t=r(5893),i=r(9008),o=r(4535),a=r(1664),c=r(4668),u=r.n(c);function l(){return(0,t.jsxs)("nav",{className:u().nav,children:[(0,t.jsx)(a.default,{href:"/",children:"FOSCH Group"}),(0,t.jsx)(a.default,{href:"/nuestro-equipo",children:"Nuestro Equipo"}),(0,t.jsx)(a.default,{href:"/investigacion",children:"Investigaci\xf3n"}),(0,t.jsx)(a.default,{href:"/divulgacion",children:"Divulgaci\xf3n"}),(0,t.jsx)(a.default,{href:"/formacion",children:"Formaci\xf3n"}),(0,t.jsx)(a.default,{href:"/recursos",children:"Recursos"})]})}var s=r(9050),f=r.n(s);function d(e){var n=e.children,r=e.titulo;return(0,t.jsx)("div",{className:f().wrapper,children:(0,t.jsxs)("div",{className:f().container,children:[(0,t.jsx)(i.default,{children:(0,t.jsx)("title",{children:r})}),(0,t.jsx)("header",{className:f().header,children:(0,t.jsx)(l,{})}),(0,t.jsxs)("main",{children:[(0,t.jsx)(o.Z,{children:(0,t.jsx)("h1",{className:f().title,children:r})}),n]}),(0,t.jsx)("footer",{})]})})}},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(t=(a=c.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(u){i=!0,o=u}finally{try{t||null==c.return||c.return()}finally{if(i)throw o}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var i,o=(i=r(7294))&&i.__esModule?i:{default:i},a=r(6273),c=r(387),u=r(7190);var l={};function s(e,n,r,t){if(e&&a.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var i=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(i?"%"+i:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,i=c.useRouter(),f=o.default.useMemo((function(){var n=t(a.resolveHref(i,e.href,!0),2),r=n[0],o=n[1];return{href:r,as:e.as?a.resolveHref(i,e.as):o||r}}),[i,e.href,e.as]),d=f.href,h=f.as,v=e.children,p=e.replace,y=e.shallow,x=e.scroll,j=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var _=(n=o.default.Children.only(v))&&"object"===typeof n&&n.ref,g=t(u.useIntersection({rootMargin:"200px"}),2),m=g[0],b=g[1],w=o.default.useCallback((function(e){m(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,m]);o.default.useEffect((function(){var e=b&&r&&a.isLocalURL(d),n="undefined"!==typeof j?j:i&&i.locale,t=l[d+"%"+h+(n?"%"+n:"")];e&&!t&&s(i,d,h,{locale:n})}),[h,d,b,j,r,i]);var E={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,i,o,c,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),null==c&&t.indexOf("#")>=0&&(c=!1),n[i?"replace":"push"](r,t,{shallow:o,locale:u,scroll:c}))}(e,i,d,h,p,y,x,j)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),a.isLocalURL(d)&&s(i,d,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var I="undefined"!==typeof j?j:i&&i.locale,L=i&&i.isLocaleDomain&&a.getDomainLocale(h,I,i&&i.locales,i&&i.domainLocales);E.href=L||a.addBasePath(a.addLocale(h,I,i&&i.defaultLocale))}return o.default.cloneElement(n,E)};n.default=f},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(t=(a=c.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(u){i=!0,o=u}finally{try{t||null==c.return||c.return()}finally{if(i)throw o}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!a,u=i.useRef(),l=t(i.useState(!1),2),s=l[0],f=l[1],d=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||s||e&&e.tagName&&(u.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=c.get(n);if(r)return r;var t=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(n,r={id:n,observer:i,elements:t}),r}(r),i=t.id,o=t.observer,a=t.elements;return a.set(e,n),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[r,n,s]);return i.useEffect((function(){if(!a&&!s){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[s]),[d,s]};var i=r(7294),o=r(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},4564:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var t=r(5893),i=r(4535),o=r(6619);function a(){return(0,t.jsx)(o.Z,{titulo:"Nuestra Investigaci\xf3n",children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)("h2",{children:"L\xedneas de Investigaci\xf3n"}),(0,t.jsx)("img",{src:"https://placekitten.com/g/250/250"}),(0,t.jsx)("h2",{children:"Proyectos de Investigaci\xf3n Competitivos"}),(0,t.jsx)("h2",{children:"Proyectos con la Industria"}),(0,t.jsx)("h2",{children:"Art\xedculos Originales"}),(0,t.jsx)("h2",{children:"Revisiones"}),(0,t.jsx)("h2",{children:"Libros y Cap\xedtulos"})]})})}},8829:function(e){e.exports={container:"container_container__7U8A5"}},9050:function(e){e.exports={title:"layout_title__ITdWE",header:"layout_header__WIdrS"}},4668:function(e){e.exports={nav:"navbar_nav__Yro3z"}},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=3818,e(e.s=n);var n}));var n=e.O();_N_E=n}]);