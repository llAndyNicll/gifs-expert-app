(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{16:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(8),r=n.n(c),i=(n(16),n(2)),s=n(10),u=n(0),o=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(t){o(t.target.value)}})})},j=n(11),d=n(6),l=n(7),b=n.n(l),m=n(9),p=function(){var t=Object(m.a)(b.a.mark((function t(e){var n,a,c,r,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=21&api_key=xZBI3dcgZuWIn2VcRU1ZXw5bvmXR8FP8"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{className:"animate__animated animate__zoomIn",src:n,alt:e}),Object(u.jsxs)("p",{children:[" ",e," "]})]})},O=function(t){var e=t.category,n=function(t){var e=Object(d.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),a=n[0],c=n[1];return Object(d.useEffect)((function(){p(t).then((function(t){setTimeout((function(){c({data:t,loading:!1})}),1e3)}))}),[t]),a}(e),a=n.data,c=n.loading;return Object(u.jsxs)("div",{className:"card-grid",children:[c&&Object(u.jsx)("h4",{className:"animate__animated animate__pulse",children:"Loading..."}),Object(u.jsxs)("h3",{children:[" ",e," "]}),a.map((function(t){return Object(u.jsx)(f,Object(j.a)({},t),t.id)}))]})},h=function(){var t=Object(a.useState)(["Kimetsu No Yaiba"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"animate__animated animate__backInDown",children:"Gifs Expert App"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(O,{category:t},t)}))})]})};r.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ad1fc167.chunk.js.map