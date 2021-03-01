(this["webpackJsonpbook-store"]=this["webpackJsonpbook-store"]||[]).push([[0],{44:function(n,t,e){"use strict";e.r(t);var r={};e.r(r),e.d(r,"showBooks",(function(){return R})),e.d(r,"sortBooks",(function(){return T})),e.d(r,"filterBooks",(function(){return z})),e.d(r,"addToCart",(function(){return I})),e.d(r,"removeFromCart",(function(){return _})),e.d(r,"toggleCart",(function(){return E}));var o,i,a,c,s,l,d,b,p,h,u,x,j,g,O,f,m=e(2),w=e(0),v=e.n(w),y=e(12),k=e.n(y),C=e(3),B=e(9),S=e(5),R=function(n){return{type:"SHOW_BOOKS",payload:n}},T=function(n){return{type:"SORT_BOOKS",payload:n}},z=function(n){return{type:"FILTER_BOOKS",payload:n}},I=function(n){return{type:"ADD_TO_CART",payload:n}},_=function(n){return{type:"REMOVE_FROM_CART",payload:n}},E=function(){return{type:"TOGGLE_CART"}},A=e(1),F=C.b.li(o||(o=Object(m.a)(["\n  width: 180px;\n  margin-top: 10px;\n  box-shadow: var(--low-elevation);\n  border-radius: 4px;\n  transition: ease 0.4s;\n\n  :hover {\n    box-shadow: var(--high-elevation);\n  }\n"]))),L=C.b.img(i||(i=Object(m.a)(["\n  width: 100%;\n  display: block;\n  height: 250px;\n  margin: 0 auto;\n  border-radius: 4px 4px 0 0;\n  @media (max-width: 360px) {\n    width: 100%;\n    height: auto;\n  }\n"]))),K=C.b.h3(a||(a=Object(m.a)(["\n  font-size: 17px;\n  margin: 10px;\n  font-weight: 500;\n  width: 90%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),D=C.b.p(c||(c=Object(m.a)(["\n  margin: 0 10px;\n  color: grey;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),G=C.b.div(s||(s=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),M=C.b.p(l||(l=Object(m.a)(["\n  font-weight: 600;\n  margin: 10px;\n  width: 32px;\n"]))),H=C.b.button(d||(d=Object(m.a)(["\n  background-color: var(--accent-color);\n  color: white;\n  border: var(--accent-color) solid 2px;\n  border-radius: 4px;\n  padding: 10px;\n  margin: 10px;\n  font-size: 15px;\n  transition: ease 0.4s;\n\n  :hover {\n    color: var(--accent-color);\n    background-color: white;\n  }\n"]))),J=function(n){return Object(A.jsxs)(F,{children:[Object(A.jsx)(L,{src:n.image,alt:""}),Object(A.jsx)(K,{children:n.title}),Object(A.jsx)(D,{children:n.author}),Object(A.jsxs)(G,{children:[Object(A.jsxs)(M,{children:["$",n.price]}),Object(A.jsx)(H,{onClick:function(){return n.addToCart(n.id)},children:"Add to cart"})]})]})},V=e(6),W=Object(B.b)((function(){return{}}),(function(n){return Object(S.a)({},Object(V.a)(r,n))}))(J),$=C.b.form(b||(b=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 10px;\n"]))),N=C.b.label(p||(p=Object(m.a)(["\n  font-weight: bold;\n  font-size: 16px;\n  color: var(--accent-color);\n  margin-left: 10px;\n"]))),P=C.b.select(h||(h=Object(m.a)(["\n  color: grey;\n  background-color: transparent;\n  border: 2px solid var(--accent-color);\n  outline: none;\n  height: 36px;\n  width: 200px;\n  font-size: 16px;\n  line-height: 1;\n  border-radius: 4px;\n  margin: 8px;\n  padding: 6px;\n  opacity: 1;\n  transition: ease 0.4s;\n\n  :hover {\n    background-color: var(--grey-color);\n  }\n\n  & > option:first-child {\n    display: none;\n  }\n"]))),q=C.b.input(u||(u=Object(m.a)(["\n  color: grey;\n  background-color: transparent;\n  border: 2px solid var(--accent-color);\n  outline: none;\n  height: 36px;\n  width: 200px;\n  font-size: 16px;\n  line-height: 1;\n  border-radius: 4px;\n  margin: 8px;\n  padding: 6px;\n  transition: ease 0.4s;\n\n  @media (max-width: 520px) {\n    width: 270px;\n  }\n\n  :placeholder {\n    opacity: 1;\n  }\n\n  :hover {\n    background-color: var(--grey-color);\n  }\n"]))),Q=function(n){var t=n.sortBooks,e=n.sortBy,r=n.filterBooks,o=n.filterBy;return Object(A.jsxs)($,{children:[Object(A.jsx)(q,{type:"search",onChange:function(n){return r(n.target.value)},value:o,placeholder:"Search"}),Object(A.jsxs)("div",{children:[Object(A.jsx)(N,{htmlFor:"sortby",children:"Sort by:"}),Object(A.jsxs)(P,{id:"sortby",value:e,onChange:function(n){return t(n.target.value)},children:[Object(A.jsx)("option",{disabled:!0,value:"placeholder",children:"Sort by"}),Object(A.jsx)("option",{value:"rating",children:"Rating"}),Object(A.jsx)("option",{value:"price",children:"Price"}),Object(A.jsx)("option",{value:"title",children:"Title"}),Object(A.jsx)("option",{value:"author",children:"Author"})]})]})]})},U=Object(B.b)((function(n){return{sortBy:n.sortBy,filterBy:n.filterBy}}),(function(n){return Object(S.a)({},Object(V.a)(r,n))}))(Q),X=C.b.div(x||(x=Object(m.a)(["\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  max-width: 1000px;\n  min-height: 90vh;\n"]))),Y=C.b.ul(j||(j=Object(m.a)(["\n  display: grid;\n  grid-gap: 5px;\n  grid-template-columns: repeat(auto-fill, 180px);\n  list-style-type: none;\n  justify-content: space-evenly;\n  position: relative;\n"]))),Z=C.b.div(g||(g=Object(m.a)(["\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 30vh;\n  left: calc(50% - 27px);\n  border: 5px solid gainsboro;\n  border-left: 5px solid var(--accent-color);\n  animation: loading 1s infinite linear;\n\n  :after {\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n  }\n\n  @keyframes loading {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),nn=C.b.a(O||(O=Object(m.a)(["\n  background-color: var(--accent-color);\n  color: white;\n  display: block;\n  border-radius: 4px;\n  padding: 10px;\n  font-size: 18px;\n  width: 250px;\n  text-align: center;\n  margin: 20px auto;\n  border: var(--accent-color) solid 2px;\n  transition: ease 0.4s;\n\n  :hover {\n    color: var(--accent-color);\n    background-color: white;\n  }\n"]))),tn=C.b.p(f||(f=Object(m.a)(["\n  height: 30px;\n  width: 130px;\n  display: block;\n  font-weight: bold;\n  color: var(--accent-color);\n  margin: 100px auto;\n  font-size: 18px;\n"])));var en,rn,on,an,cn,sn,ln,dn,bn,pn,hn,un,xn,jn=function(n,t,e){switch(n=n.filter((function(n){return n.title.toLowerCase().indexOf(e.toLowerCase())>=0||n.author.toLowerCase().indexOf(e.toLowerCase())>=0})),t){case"price":return n.sort((function(n,t){return n.price-t.price}));case"title":return n.sort((function(n,t){return n.title.localeCompare(t.title)}));case"author":return n.sort((function(n,t){return n.author.localeCompare(t.author)}));default:return n.sort((function(n,t){return t.rating-n.rating}))}},gn=Object(B.b)((function(n){return{books:n.items?jn(n.items,n.sortBy,n.filterBy):[],isReady:n.isReady}}),(function(n){return Object(S.a)({},Object(V.a)(r,n))}))((function(n){var t=n.books,e=n.isReady,r=n.showBooks;return Object(w.useEffect)((function(){fetch("https://secret-ocean-49799.herokuapp.com/https://infret.github.io/book-store/books.json",{method:"GET"}).then((function(n){return n.json()})).then((function(n){r(n),console.log(n)}))}),[r]),Object(A.jsxs)(X,{children:[Object(A.jsx)(U,{}),e?Object(A.jsxs)("div",{children:[Object(A.jsxs)(Y,{children:[t.map((function(n,t){return Object(A.jsx)(W,Object(S.a)({},n),t)})),0===t.length&&Object(A.jsx)(tn,{children:"Nothing found"})]}),Object(A.jsx)(nn,{children:"Browse more books"})]}):Object(A.jsx)(Z,{})]})})),On=e.p+"static/media/book.60b02366.svg",fn=e.p+"static/media/cart.c058d20a.svg",mn=e(14),wn=e(13),vn=e.p+"static/media/close.2548618f.svg",yn=C.b.div(en||(en=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  min-height: 60px;\n  max-height: 90vh;\n  max-width: 400px;\n  background-color: white;\n  border-radius: 0 0 4px 4px;\n  box-shadow: var(--low-elevation);\n"]))),kn=C.b.div(rn||(rn=Object(m.a)(["\n  overflow-y: auto;\n  max-height: calc(90vh - 120px);\n"]))),Cn=C.b.button(on||(on=Object(m.a)(["\n  background-color: white;\n  background-image: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  border: none;\n  margin: 0 20px;\n  position: absolute;\n  top: 10px;\n  right: 0;\n  display: inline;\n  border-radius: 5px;\n  padding: 6px;\n  height: 40px;\n  width: 40px;\n  transition: ease 0.4s;\n\n  :hover {\n    background-color: var(--grey-color);\n  }\n"])),vn),Bn=C.b.div(an||(an=Object(m.a)(["\n  display: grid;\n  width: 100%;\n  align-items: center;\n  grid-template-rows: 80px;\n  grid-template-columns: 70px 1fr 20px 100px;\n  grid-template-areas: 'img desc count btn';\n"]))),Sn=C.b.img(cn||(cn=Object(m.a)(["\n  height: 70px;\n  width: auto;\n  margin: 5px 10px;\n  grid-area: img;\n"]))),Rn=C.b.div(sn||(sn=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-width: 150px;\n  grid-area: desc;\n"]))),Tn=C.b.h3(ln||(ln=Object(m.a)(["\n  font-size: 17px;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),zn=C.b.p(dn||(dn=Object(m.a)(["\n  color: grey;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),In=C.b.button(bn||(bn=Object(m.a)(["\n  background-color: var(--danger-color);\n  color: white;\n  border: none;\n  border-radius: 4px;\n  padding: 10px;\n  margin: 10px 10px 10px auto;\n  font-size: 15px;\n  height: 37px;\n"]))),_n=C.b.div(pn||(pn=Object(m.a)(["\n  display: flex;\n  align-items: center;\n"]))),En=C.b.p(hn||(hn=Object(m.a)(["\n  margin: 10px;\n  min-width: 20px;\n  font-weight: bold;\n  font-size: 18px;\n  color: var(--accent-color);\n"]))),An=Object(C.b)(wn.b)(un||(un=Object(m.a)(["\n  background-color: var(--accent-color);\n  color: white;\n  border: none;\n  border-radius: 4px;\n  padding: 10px;\n  font-size: 15px;\n  margin: 10px 10px 10px auto;\n"]))),Fn=C.b.p(xn||(xn=Object(m.a)(["\n  color: var(--accent-color);\n  font-size: 20px;\n  margin-left: 10px;\n  font-weight: bold;\n  display: inline;\n  line-height: 60px;\n"]))),Ln=function(n){var t=n.total,e=n.cartCount,r=n.cartItems,o=n.removeFromCart,i=n.toggleCart;return Object(A.jsxs)(yn,{children:[Object(A.jsx)(Fn,{children:"Cart"}),e?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(kn,{children:r.map((function(n){return Object(A.jsxs)(Bn,{children:[Object(A.jsx)(Sn,{src:n.image}),Object(A.jsxs)(Rn,{children:[Object(A.jsx)(Tn,{children:n.title}),Object(A.jsx)(zn,{children:n.author})]}),Object(A.jsx)(En,{children:n.count}),Object(A.jsx)(In,{onClick:function(){return o(n.id)},children:"Remove"})]},n.id)}))}),Object(A.jsxs)(_n,{children:[Object(A.jsxs)(En,{children:["Total: ",e," book",1!==e&&"s"," worth $",t]}),Object(A.jsx)(An,{to:"/checkout",children:"Checkout"})]})]}):Object(A.jsx)(Fn,{children:"is empty"}),Object(A.jsx)(Cn,{onClick:i})]})};var Kn,Dn,Gn,Mn,Hn,Jn,Vn,Wn,$n=Object(B.b)((function(n){return{cartItems:(t=n.cartItems,t.forEach((function(n){n.count=t.filter((function(t){return t.id===n.id})).length})),Object(mn.a)(new Set(t))),total:parseInt(n.cartItems.reduce((function(n,t){return n+t.price}),0).toFixed(1)),cartCount:n.cartItems.length};var t}),(function(n){return Object(S.a)({},Object(V.a)(r,n))}))(Ln),Nn=C.b.header(Kn||(Kn=Object(m.a)(["\n  box-shadow: var(--low-elevation);\n  height: 60px;\n  display: flex;\n  top: 0;\n  z-index: 1;\n  background-color: white;\n  border-radius: 0 0 4px 4px;\n  align-items: center;\n  position: sticky;\n  width: 100%;\n  max-width: 1000px;\n  margin: 0 auto;\n"]))),Pn=C.b.a(Dn||(Dn=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  margin: 20px;\n  text-decoration: none;\n"]))),qn=C.b.h1(Gn||(Gn=Object(m.a)(["\n  font-weight: bold;\n  margin-left: 5px;\n  font-size: 20px;\n  color: var(--accent-color);\n"]))),Qn=C.b.button(Mn||(Mn=Object(m.a)(["\n  background-color: white;\n  background-image: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  border: none;\n  margin: 0 20px 0 auto;\n  position: relative;\n  border-radius: 5px;\n  padding: 6px;\n  height: 40px;\n  width: 40px;\n  transition: ease 0.4s;\n\n  :hover {\n    background-color: var(--grey-color);\n  }\n"])),fn),Un=C.b.div(Hn||(Hn=Object(m.a)(["\n  width: 16px;\n  height: 16px;\n  font-size: 13px;\n  line-height: 15px;\n  color: white;\n  font-weight: bold;\n  border-radius: 50%;\n  background-color: var(--danger-color);\n  position: absolute;\n  top: 0;\n  right: -2px;\n"]))),Xn=function(n){var t=n.count,e=n.toggleCart,r=n.isCartShown;return Object(A.jsxs)(Nn,{children:[Object(A.jsxs)(Pn,{href:"#",children:[Object(A.jsx)("img",{src:On,alt:""}),Object(A.jsx)(qn,{children:"Bookstore"})]}),Object(A.jsx)(Qn,{onClick:e,children:t>0&&Object(A.jsx)(Un,{children:t})}),r&&Object(A.jsx)($n,{})]})},Yn=Object(B.b)((function(n){return{count:n.cartItems.length,toggleCart:n.toggleCart,isCartShown:n.isCartShown}}),(function(n){return Object(S.a)({},Object(V.a)(r,n))}))(Xn),Zn=C.b.footer(Jn||(Jn=Object(m.a)(["\n\tbox-shadow: var(--low-elevation);\n\theight: 60px;\n\tdisplay: flex;\n\tbackground-color: white;\n\tborder-radius: 4px 4px 0 0;\n\talign-items: center;\n\twidth: 100%;\n\tmax-width: 1000px;\n\tmargin: 20px auto 0 auto;\n\tposition: relative;\n\tbottom: 0;\n"]))),nt=C.b.a(Vn||(Vn=Object(m.a)(["\n\tdisplay: block;\n\ttext-transform: lowercase;\n\tfont-family: serif;\n\tcolor: grey;\n\tmargin: 0 auto;\n"]))),tt=function(){return Object(A.jsx)(Zn,{children:Object(A.jsx)(nt,{href:"https://infret.github.io",children:Object(A.jsx)("i",{children:"by Infret"})})})},et={items:[],isCartShown:!1,isReady:!1,cartItems:[],sortBy:"",filterBy:""};var rt=Object(C.a)(Wn||(Wn=Object(m.a)(["\n\t* {\n\t\t--accent-color: #427AA9;\n\t\t--danger-color: #E7493D;\n\t\t--grey-color: #ededed;\n\t\t--low-elevation: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\n\t\t--high-elevation: 0 6px 6px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\n\t\tfont-family: sans-serif;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\ttext-decoration: none;\n\t\t-moz-appearance: none;\n\t\toutline: none;\n\t}\n\ta, button {\n\t\tcursor: pointer;\n\t}\n"])));k.a.render(Object(A.jsxs)(v.a.StrictMode,{children:[Object(A.jsx)(rt,{}),Object(A.jsx)(B.a,{store:Object(V.b)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_BOOKS":return Object(S.a)(Object(S.a)({},n),{},{items:t.payload,isReady:!0});case"SORT_BOOKS":return Object(S.a)(Object(S.a)({},n),{},{sortBy:t.payload});case"FILTER_BOOKS":return Object(S.a)(Object(S.a)({},n),{},{filterBy:t.payload});case"ADD_TO_CART":return Object(S.a)(Object(S.a)({},n),{},{cartItems:[].concat(Object(mn.a)(n.cartItems),[n.items[t.payload]]),isCartShown:!1});case"REMOVE_FROM_CART":return Object(S.a)(Object(S.a)({},n),{},{cartItems:n.cartItems.filter((function(n){return n.id!==t.payload})),isCartShown:!0});case"TOGGLE_CART":return Object(S.a)(Object(S.a)({},n),{},{isCartShown:!n.isCartShown});default:return n}})),children:Object(A.jsxs)(wn.a,{children:[Object(A.jsx)(Yn,{}),Object(A.jsx)(gn,{}),Object(A.jsx)(tt,{})]})})]}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.151a2019.chunk.js.map