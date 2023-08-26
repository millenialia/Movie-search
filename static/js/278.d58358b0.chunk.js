/*! For license information please see 278.d58358b0.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{3616:function(t,e,n){n.d(e,{f:function(){return j}});var r,o,i,a,c,s=n(168),u=n(5867),l=u.ZP.div(r||(r=(0,s.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),h=u.ZP.svg(o||(o=(0,s.Z)(["\nfill: white;\nwidth: 50px;\nheight: 50px;\n"]))),f=n(184),p=function(){return(0,f.jsx)(l,{children:(0,f.jsxs)(h,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,f.jsx)("title",{children:"watchlist-add"}),(0,f.jsx)("path",{d:"M19 13v-3h1v3h3v1h-3v3h-1v-3h-3v-1h3zM20 18.978v0 0c2.803-0.253 5-2.609 5-5.478s-2.197-5.225-5-5.478v-1.031c0-1.652-1.342-2.991-2.997-2.991h-6.006c-1.655 0-2.997 1.342-2.997 2.991v21.009l6-6 6 6v-9.022zM19 18.978v6.622l-5-5-5 5v-18.606c0-1.096 0.895-1.994 2-1.994h6.001c1.112 0 2 0.893 2 1.994v1.028c-2.803 0.253-5 2.609-5 5.478s2.197 5.225 5 5.478v0 0zM19.5 18v0 0c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5z"})]})})},v=u.ZP.div(i||(i=(0,s.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),d=u.ZP.svg(a||(a=(0,s.Z)(["\nfill: white;\nwidth: 50px;\nheight: 50px;\n"]))),g=function(){return(0,f.jsx)(v,{children:(0,f.jsxs)(d,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,f.jsx)("title",{children:"bookmark-remove"}),(0,f.jsx)("path",{d:"M20 19.981v8.019l-6-6-6 6v-21.009c0-1.649 1.342-2.991 2.997-2.991h6.006c1.656 0 2.997 1.339 2.997 2.991v0.028c-0.165-0.013-0.332-0.019-0.5-0.019-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c0.168 0 0.335-0.006 0.5-0.019v0 0zM19.5 19v0c-3.038 0-5.5-2.462-5.5-5.5s2.462-5.5 5.5-5.5c3.038 0 5.5 2.462 5.5 5.5s-2.462 5.5-5.5 5.5zM16 13v1h7v-1h-7z"})]})})},y=n(6351),x=n(9434),m=n(1258),w=u.ZP.button(c||(c=(0,s.Z)(["\nposition: absolute;\ntop: 0;\nright: 0;\nbackground: rgba(0,0,0,0.8);\nborder: none;\ncursor: pointer;\nz-index: 1000;\n"]))),j=function(t){var e=t.title,n=t.movieId,r=t.poster,o=(0,x.I0)(),i=(0,x.v9)(y.c),a=function(t,e){return!t.find((function(t){return t.id===e}))},c=!a(i,n);return(0,f.jsx)(w,{type:"button",onClick:c?function(){o((0,m.fx)(n))}:function(){a(i,n)&&o((0,m.dO)(e,n,r))},children:c?(0,f.jsx)(g,{}):(0,f.jsx)(p,{})})}},7714:function(t,e,n){n.d(e,{Z:function(){return g}});var r,o,i,a=n(1087),c=n(168),s=n(5867),u=n(6048),l=n.n(u),h=s.ZP.h1(r||(r=(0,c.Z)(["\nfont-weight: 300;\n  text-transform: uppercase;\n"]))),f=s.ZP.ul(o||(o=(0,c.Z)(["\n  list-style: none;\n  margin: 20px 0;\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 25px;\n  column-gap: 15px;\n  justify-content: center;\n\n  > li {\n    width: 250px;\n    position: relative;\n\n    > a {\n      width: 250px;\n\n\n      // color: white;\n      display: flex;\n      flex-direction: column;\n      gap: 15px;\n      > img {\n        width: 250px;\n        height: 372px;\n      }\n      >p{\n        padding: 2px;\n        overflow: auto;\n        white-space: nowrap;\n        &::-webkit-scrollbar {\n        display: none; }\n      }\n    }\n  }\n"]))),p=(0,s.ZP)(l())(i||(i=(0,c.Z)(["\n  list-style: none;\n  display: flex;\n  gap: 15px;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  // color: white;\n  margin: 50px auto;\n  cursor: pointer;\n  > .active {\n    box-shadow:\n      var(--color-pink5) 0px 5px,\n      var(--color-pink3) 0px 10px;\n    padding: 5px;\n  }\n"]))),v=n(3616),d=n(184),g=function(t){var e=t.movies,n=t.heading,r=t.location,o=t.handlePageChange,i=t.totalPages,c=t.currentPage;return(0,d.jsxs)("div",{children:[(0,d.jsxs)(h,{children:[" ",n]}),(0,d.jsx)(f,{children:e.map((function(t){var e=t.title,n=t.id,o=t.poster_path;return(0,d.jsxs)("li",{children:[(0,d.jsxs)(a.rU,{to:"/movies/".concat(n),state:{from:r},children:[o?(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(o),alt:"poster"}):(0,d.jsx)("img",{src:"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",alt:"profile"}),(0,d.jsx)("p",{children:e})]}),(0,d.jsx)(v.f,{title:e,movieId:n,poster:o})]},n)}))}),i>1&&(0,d.jsx)(p,{activeClassName:"active",marginPagesDisplayed:1,pageRangeDisplayed:2,pageCount:i,onPageChange:o,forcePage:c-1})]})}},9278:function(t,e,n){n.r(e);var r=n(1413),o=n(5861),i=n(9439),a=n(2791),c=n(1087),s=n(7689),u=n(9709),l=n(4227),h=n(7714),f=n(2852),p=n(184);function v(){v=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(O){s=function(t,e,n){return t[e]=n}}function u(t,e,n,o){var i=e&&e.prototype instanceof f?e:f,a=Object.create(i.prototype),c=new k(o||[]);return r(a,"_invoke",{value:b(t,n,c)}),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=u;var h={};function f(){}function p(){}function d(){}var g={};s(g,i,(function(){return this}));var y=Object.getPrototypeOf,x=y&&y(y(E([])));x&&x!==e&&n.call(x,i)&&(g=x);var m=d.prototype=f.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function o(r,i,a,c){var s=l(t[r],t,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,c)}))}c(s.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function b(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=Z(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function Z(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,Z(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=d,r(m,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(j.prototype),s(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new j(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),s(m,c,"Generator"),s(m,i,(function(){return this})),s(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=E,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}e.default=function(){var t,e,n,d,g=(0,a.useState)([]),y=(0,i.Z)(g,2),x=y[0],m=y[1],w=(0,a.useState)(""),j=(0,i.Z)(w,2),b=j[0],Z=j[1],L=(0,a.useState)(0),P=(0,i.Z)(L,2),k=P[0],E=P[1],_=(0,a.useState)(!1),O=(0,i.Z)(_,2),S=O[0],z=O[1],N=(0,c.lr)(),C=(0,i.Z)(N,2),G=C[0],M=C[1],I=null!==(t=G.get("query"))&&void 0!==t?t:"",T=null!==(e=G.get("genre"))&&void 0!==e?e:"",F=null!==(n=G.get("name"))&&void 0!==n?n:"",A=null!==(d=G.get("page"))&&void 0!==d?d:"",B=(0,s.TH)();(0,a.useEffect)((function(){var t=function(){var t=(0,o.Z)(v().mark((function t(){var e;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return z(!0),t.prev=1,t.next=4,(0,u.E3)(I,A);case 4:e=t.sent,m(e.results),E(e.total_pages<300?e.total_pages:300),Z(I),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0);case 13:return t.prev=13,z(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})));return function(){return t.apply(this,arguments)}}(),e=function(){var t=(0,o.Z)(v().mark((function t(){var e;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return z(!0),t.prev=1,t.next=4,(0,u.ss)(T,A);case 4:e=t.sent,m(e.results),E(500),Z(F),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0);case 13:return t.prev=13,z(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})));return function(){return t.apply(this,arguments)}}();""!==I?t():""!==T&&e()}),[G,I,T,F,A]);return S?(0,p.jsx)(l.a,{}):(0,p.jsx)(f.W,{children:(0,p.jsxs)("div",{children:[0===x.length?(0,p.jsx)(f.X,{children:" No movies found "}):(0,p.jsx)(h.Z,{heading:b,movies:x,searchQuery:I,location:B,handlePageChange:function(t){var e={page:t.selected+1};M((function(t){return new URLSearchParams((0,r.Z)((0,r.Z)({},Object.fromEntries(t.entries())),e))}))},totalPages:k,currentPage:A}),(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(l.a,{}),children:(0,p.jsx)(s.j3,{})})]})})}},2852:function(t,e,n){n.d(e,{W:function(){return c},X:function(){return s}});var r,o,i=n(168),a=n(5867),c=a.ZP.div(r||(r=(0,i.Z)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),s=a.ZP.h1(o||(o=(0,i.Z)(["\nfont-weight: 300;\n  text-transform: uppercase;\n"])))},6351:function(t,e,n){n.d(e,{c:function(){return r},z:function(){return o}});var r=function(t){return t.watchList},o=function(t){return t.recentlyViewed}}}]);
//# sourceMappingURL=278.d58358b0.chunk.js.map