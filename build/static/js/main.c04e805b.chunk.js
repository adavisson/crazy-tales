(this["webpackJsonpcrazy-tales"]=this["webpackJsonpcrazy-tales"]||[]).push([[0],{52:function(e,t,a){e.exports=a(84)},58:function(e,t,a){},59:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);a(53);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=(a(58),a(59),a(49)),i=a(12),u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Crazy Tales"),r.a.createElement("div",{className:"story"},r.a.createElement("p",null,"Welcome to Crazy Tales! Click ",r.a.createElement("a",{href:"/templates"},"here")," to get started, or if you would like to read more about this project then click ",r.a.createElement("a",{href:"/about"},"here")," to go to the about page.")))},s=a(88),m=a(89),p=function(){return r.a.createElement(s.a,{sticky:"top",expand:"lg"},r.a.createElement(s.a.Brand,{href:"/"},"Crazy Tales"),r.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(m.a,{className:"mr-auto"},r.a.createElement(m.a.Link,{href:"/templates"},"Templates"),r.a.createElement(m.a.Link,{href:"/about"},"About")),r.a.createElement(m.a,{inline:!0},r.a.createElement(m.a.Link,{href:"https://andydavisson.com"},"Back to andydavisson.com"))))},b=a(24),f=a(25),h=a.n(f),E=a(47),d=a(21),v=a(87),y=a(86),g=a(48),O=a.n(g),j=function(e){return r.a.createElement("div",{className:"story"},r.a.createElement("p",null,r.a.createElement(r.a.Fragment,null,e.template.value.map((function(t,a){return console.log(t),0!=t&&e.values[a]?"".concat(t)+"".concat(e.values[a]):!t&&e.values[a]?"".concat(e.values[a]):0!=t?"".concat(t):void 0})))))};function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var w=function(){var e=Object(n.useState)({blanks:[]}),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),o=Object(d.a)(l,2),i=o[0],u=o[1],s=Object(n.useState)(!1),m=Object(d.a)(s,2),p=m[0],f=m[1];Object(n.useEffect)((function(){(function(){var e=Object(E.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()("https://madlibz.herokuapp.com/api/random");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var g=function(e){e.preventDefault(),f(!0)},w=function(e){u(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},i,Object(b.a)({},e.target.id,e.target.value))),console.log(i)},P=function(){window.location.reload(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,a.title),!p&&r.a.createElement(y.a,{onClick:P,variant:"link"},"Different Story"),r.a.createElement("br",null),!p&&r.a.createElement(v.a,{onSubmit:g},a.blanks.map((function(e,t){return r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null,e),r.a.createElement(v.a.Control,{type:"text",id:"word_".concat(t),value:i[t],onChange:w,required:!0}))})),r.a.createElement(y.a,{variant:"primary",type:"submit"},"Submit")),!!p&&r.a.createElement(j,{template:a,values:Object.values(i)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),!!p&&r.a.createElement(y.a,{variant:"primary",onClick:P},"Another Story"))},P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"About Page"),r.a.createElement("div",{className:"story"},r.a.createElement("p",null,"This app uses the Madlibz API found ",r.a.createElement("a",{target:"_blank",href:"https://madlibz.herokuapp.com/api"},"here"),". This mimics another project I did called Wacky Stories, but with this project I am not using Redux and I am using a pre-existing API. This is also my first project attempting to use React Hooks.")))};var S=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(i.a,{exact:!0,path:"/",component:u}),r.a.createElement(i.a,{path:"/templates",component:w}),r.a.createElement(i.a,{path:"/about",component:P})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.c04e805b.chunk.js.map