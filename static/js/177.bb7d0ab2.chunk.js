"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[177],{3616:function(n,e,t){t.d(e,{f:function(){return Z}});var i,r,o,s,c,a=t(168),l=t(5867),p=l.ZP.div(i||(i=(0,a.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),h=l.ZP.svg(r||(r=(0,a.Z)(["\nfill: white;\nwidth: 50px;\nheight: 50px;\n"]))),u=t(184),d=function(){return(0,u.jsx)(p,{children:(0,u.jsxs)(h,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,u.jsx)("title",{children:"watchlist-add"}),(0,u.jsx)("path",{d:"M19 13v-3h1v3h3v1h-3v3h-1v-3h-3v-1h3zM20 18.978v0 0c2.803-0.253 5-2.609 5-5.478s-2.197-5.225-5-5.478v-1.031c0-1.652-1.342-2.991-2.997-2.991h-6.006c-1.655 0-2.997 1.342-2.997 2.991v21.009l6-6 6 6v-9.022zM19 18.978v6.622l-5-5-5 5v-18.606c0-1.096 0.895-1.994 2-1.994h6.001c1.112 0 2 0.893 2 1.994v1.028c-2.803 0.253-5 2.609-5 5.478s2.197 5.225 5 5.478v0 0zM19.5 18v0 0c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5z"})]})})},x=l.ZP.div(o||(o=(0,a.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),v=l.ZP.svg(s||(s=(0,a.Z)(["\nfill: white;\nwidth: 50px;\nheight: 50px;\n"]))),g=function(){return(0,u.jsx)(x,{children:(0,u.jsxs)(v,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,u.jsx)("title",{children:"bookmark-remove"}),(0,u.jsx)("path",{d:"M20 19.981v8.019l-6-6-6 6v-21.009c0-1.649 1.342-2.991 2.997-2.991h6.006c1.656 0 2.997 1.339 2.997 2.991v0.028c-0.165-0.013-0.332-0.019-0.5-0.019-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c0.168 0 0.335-0.006 0.5-0.019v0 0zM19.5 19v0c-3.038 0-5.5-2.462-5.5-5.5s2.462-5.5 5.5-5.5c3.038 0 5.5 2.462 5.5 5.5s-2.462 5.5-5.5 5.5zM16 13v1h7v-1h-7z"})]})})},f=t(6351),w=t(9434),m=t(1258),j=l.ZP.button(c||(c=(0,a.Z)(["\nposition: absolute;\ntop: 0;\nright: 0;\nbackground: rgba(0,0,0,0.8);\nborder: none;\ncursor: pointer;\nz-index: 10000000000000000000000000;\n"]))),Z=function(n){var e=n.title,t=n.movieId,i=n.poster,r=(0,w.I0)(),o=(0,w.v9)(f.c),s=function(n,e){return!n.find((function(n){return n.id===e}))},c=!s(o,t);return(0,u.jsx)(j,{type:"button",onClick:c?function(){r((0,m.fx)(t))}:function(){s(o,t)&&r((0,m.dO)(e,t,i))},children:c?(0,u.jsx)(g,{}):(0,u.jsx)(d,{})})}},7714:function(n,e,t){t.d(e,{Z:function(){return g}});var i,r,o,s=t(1087),c=t(168),a=t(5867),l=t(6048),p=t.n(l),h=a.ZP.h1(i||(i=(0,c.Z)(["\nfont-weight: 300;\n  text-transform: uppercase;\n"]))),u=a.ZP.ul(r||(r=(0,c.Z)(["\n  list-style: none;\n  margin: 20px 0;\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 25px;\n  column-gap: 15px;\n  justify-content: center;\n\n  > li {\n    width: 250px;\n    position: relative;\n\n    > a {\n      width: 250px;\n\n\n      // color: white;\n      display: flex;\n      flex-direction: column;\n      gap: 15px;\n      > img {\n        width: 250px;\n        height: 372px;\n      }\n      >p{\n        padding: 2px;\n        overflow: auto;\n        white-space: nowrap;\n        &::-webkit-scrollbar {\n        display: none; }\n      }\n    }\n  }\n"]))),d=(0,a.ZP)(p())(o||(o=(0,c.Z)(["\n  list-style: none;\n  display: flex;\n  gap: 15px;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  // color: white;\n  margin: 50px auto;\n  cursor: pointer;\n  > .active {\n    box-shadow:\n      var(--color-pink5) 0px 5px,\n      var(--color-pink3) 0px 10px;\n    padding: 5px;\n  }\n"]))),x=t(3616),v=t(184),g=function(n){var e=n.movies,t=n.heading,i=n.location,r=n.handlePageChange,o=n.totalPages,c=n.currentPage;return(0,v.jsxs)("div",{children:[(0,v.jsxs)(h,{children:[" ",t]}),(0,v.jsx)(u,{children:e.map((function(n){var e=n.title,t=n.id,r=n.poster_path;return(0,v.jsxs)("li",{children:[(0,v.jsxs)(s.rU,{to:"/movies/".concat(t),state:{from:i},children:[r?(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:"poster"}):(0,v.jsx)("img",{src:"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",alt:"profile"}),(0,v.jsx)("p",{children:e})]}),(0,v.jsx)(x.f,{title:e,movieId:t,poster:r})]},t)}))}),o>1&&(0,v.jsx)(d,{activeClassName:"active",marginPagesDisplayed:1,pageRangeDisplayed:2,pageCount:o,onPageChange:r,forcePage:c-1})]})}},2852:function(n,e,t){t.d(e,{W:function(){return c},X:function(){return a}});var i,r,o=t(168),s=t(5867),c=s.ZP.div(i||(i=(0,o.Z)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),a=s.ZP.h1(r||(r=(0,o.Z)(["\nfont-weight: 300;\n  text-transform: uppercase;\n"])))},5177:function(n,e,t){t.r(e);var i=t(2791),r=t(7689),o=t(4227),s=t(7714),c=t(2852),a=t(6351),l=t(9434),p=t(184);e.default=function(){var n=(0,l.v9)(a.c),e=(0,r.TH)(),t=n.length?"You have ".concat(n.length," movies in watch list"):"No movies in watch list";return(0,p.jsxs)(c.W,{children:[(0,p.jsx)(s.Z,{heading:t,movies:n,location:e,handlePageChange:"",totalPages:"1",currentPage:"1"}),(0,p.jsx)(i.Suspense,{fallback:(0,p.jsx)(o.a,{}),children:(0,p.jsx)(r.j3,{})})]})}},6351:function(n,e,t){t.d(e,{c:function(){return i},z:function(){return r}});var i=function(n){return n.watchList},r=function(n){return n.recentlyViewed}}}]);
//# sourceMappingURL=177.bb7d0ab2.chunk.js.map