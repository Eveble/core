(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{175:function(e,t,a){"use strict";var r=a(2),n=a(0),l=a.n(n),c=a(176),o=a.n(c),s=a(162),m=a(163),i=a.n(m),u=a(130),f=a.n(u),d=function(){return l.a.createElement("span",{className:i()(f.a.toggle,f.a.moon)})},E=function(){return l.a.createElement("span",{className:i()(f.a.toggle,f.a.sun)})};t.a=function(e){var t=Object(s.a)().isClient;return l.a.createElement(o.a,Object(r.a)({disabled:!t,icons:{checked:l.a.createElement(d,null),unchecked:l.a.createElement(E,null)}},e))}},178:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var r=a(2),n=a(9),l=a(0),c=a.n(l),o=a(163),s=a.n(o),m=a(131),i=a.n(m),u=a(165),f=a(162),d=a(164);function E(e){var t=e.to,a=e.href,l=e.label,o=e.prependBaseUrlToHref,s=Object(n.a)(e,["to","href","label","prependBaseUrlToHref"]),m=Object(d.a)(t),i=Object(d.a)(a,!0);return c.a.createElement(u.a,Object(r.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:o?i:a}:{to:m},s),l)}var _=function(e){var t=e.url,a=e.alt;return c.a.createElement("img",{className:"footer__logo",alt:a,src:t})};function h(){var e=Object(f.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=void 0===t?{}:t,r=a.footer,n=r||{},l=n.copyright,o=n.links,m=void 0===o?[]:o,u=n.logo,h=void 0===u?{}:u,v=Object(d.a)(h.src);return r?c.a.createElement("footer",{className:s()("footer",{"footer--dark":"dark"===r.style})},c.a.createElement("div",{className:"container"},m&&m.length>0&&c.a.createElement("div",{className:"row footer__links"},m.map((function(e,t){return c.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?c.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(E,e))}))):null)}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col--12"},(h||l)&&c.a.createElement("div",{className:"text--left"},h&&h.src&&c.a.createElement("div",{className:"margin-bottom--sm text--center"},h.href?c.a.createElement("a",{href:h.href,target:"_blank",rel:"noopener noreferrer",className:i.a.footerLogoLink},c.a.createElement(_,{alt:h.alt,url:v})):c.a.createElement(_,{alt:h.alt,url:v})),c.a.createElement("div",{className:"license"},"Released under ",a.project.license," License"),c.a.createElement("div",{className:"copyright",dangerouslySetInnerHTML:{__html:l}})))))):null}}}]);