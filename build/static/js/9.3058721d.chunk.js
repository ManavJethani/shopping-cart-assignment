(this["webpackJsonpshopping-cart-assignment"]=this["webpackJsonpshopping-cart-assignment"]||[]).push([[9],{427:function(t,e,n){"use strict";var c=n(1),a=(n(428),n(3));e.a=function(t){var e=t.position,n=t.description,i=t.title,s=t.onClose,r=t.show,o=Object(c.useRef)();return r&&setTimeout((function(){s()}),5e3),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{role:"alert",className:r?"notification-container ".concat(e," ").concat(i):"notification-close",children:Object(a.jsxs)("div",{className:"notification toast ".concat(e),children:[Object(a.jsxs)("div",{ref:o,className:"notification-heading",children:[Object(a.jsx)("h4",{className:"notification-title",children:i}),Object(a.jsx)("button",{"data-testid":"toast-close-btn",onClick:s,children:"X"})]}),Object(a.jsx)("p",{className:"notification-message",children:n})]})})})}},428:function(t,e,n){},429:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(136);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],c=!0,a=!1,i=void 0;try{for(var s,r=t[Symbol.iterator]();!(c=(s=r.next()).done)&&(n.push(s.value),!e||n.length!==e);c=!0);}catch(o){a=!0,i=o}finally{try{c||null==r.return||r.return()}finally{if(a)throw i}}return n}}(t,e)||Object(c.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},443:function(t,e,n){"use strict";var c=n(456),a=n.n(c);e.a=a.a.create({baseURL:"http://localhost:3001"})},541:function(t,e,n){"use strict";n.r(e);var c=n(434),a=n.n(c),i=n(435),s=n(429),r=n(1),o=n(49),l=n(62),u=n(443),d=n(18),j=n(427),h=n(3);function b(t){var e=t.product,n=t.handleAddToCart;return Object(h.jsxs)("div",{"data-testid":"single-product",className:"single-product",children:[Object(h.jsx)("h2",{className:"min-height",children:null===e||void 0===e?void 0:e.name}),Object(h.jsxs)("div",{className:"single-product-img-text-container",children:[Object(h.jsx)("div",{className:"align-center",children:Object(h.jsx)("img",{className:"product-image-styles",loading:"lazy",src:null===e||void 0===e?void 0:e.imageURL,alt:null===e||void 0===e?void 0:e.name})}),Object(h.jsxs)("div",{className:"desc-section",children:[Object(h.jsx)("p",{className:"desc-para",children:null===e||void 0===e?void 0:e.description}),Object(h.jsxs)("div",{className:"button-desktop-style",children:["MRP Rs.",null===e||void 0===e?void 0:e.price,Object(h.jsx)("button",{"data-testid":"buy-now",className:"each-category-button-style",onClick:function(t){return n(t,e)},children:"Buy Now"})]}),Object(h.jsx)("div",{className:"button-mobile-style",children:Object(h.jsxs)("button",{"data-testid":"buy-now-mobile",className:"each-category-button-style",onClick:function(t){return n(t,e)},children:["Buy Now @ Rs.",null===e||void 0===e?void 0:e.price]})})]}),Object(h.jsx)("div",{})]})]})}var p=Object(d.g)((function(t){var e=Object(o.b)(),n=Object(d.f)(),c=Object(o.c)((function(t){return t.TestReducer.categoryData})),p=Object(o.c)((function(t){return t.TestReducer.productData})),f=Object(r.useState)(!1),m=Object(s.a)(f,2),O=m[0],g=m[1],v=Object(r.useState)([]),x=Object(s.a)(v,2),y=x[0],N=x[1];Object(r.useEffect)((function(){(function(){var t=Object(i.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==p.length){t.next=3;break}return t.next=3,u.a.get("/products").then((function(t){e(Object(l.e)(t.data)),N(t.data)})).catch((function(t){return console.log("something went wrong",t)}));case 3:if(0!==c.length){t.next=6;break}return t.next=6,u.a.get("/categories").then((function(t){e(Object(l.d)(t.data))})).catch((function(t){return console.log("something went wrong",t)}));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){"all"!==t.match.params.id?p&&N(p.reduce((function(e,n){return t.match.params.id===n.category?(e.push(n),e):e}),[])):N(p)}),[t.match.params.id]);var w=function(e,c){if(e.target.options){var a=e.target.options[e.target.selectedIndex].id;a?n.push("/products/".concat(a)):n.push("/products/all")}else c.id!==t.match.params.id?n.push("/products/".concat(c.id)):n.push("/products/all")},k=function(){var t=Object(i.a)(a.a.mark((function t(n,c){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("/addToCart",c.id);case 2:200===t.sent.status&&(Object.keys(c).includes("quantity")?e(Object(l.a)(c)):(c.quantity=1,e(Object(l.f)(c))),g(!0));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"product-style",children:[Object(h.jsx)("aside",{className:"side-section",children:Object(h.jsxs)("ul",{className:"list-style",children:[Object(h.jsx)("li",{"data-testid":"category-list-section-all",className:"each-list",onClick:function(){return n.push("/products/all")},children:"All Products"}),c.map((function(e,n){return Object(h.jsx)("li",{"data-testid":"category-list-section",className:t.match.params.id===e.id?"each-list highlight-cat":"each-list",value:e.key,onClick:function(t){return w(t,e)},children:e.name},n)}))]})}),Object(h.jsxs)("section",{role:"main",className:"main-section",children:[Object(h.jsx)("div",{"data-testid":"category-list-dropdown",className:"dropdown-style",children:Object(h.jsxs)("select",{onChange:function(t){return w(t)},children:[Object(h.jsx)("option",{children:"Select Category"}),c.map((function(t,e){return Object(h.jsx)("option",{id:t.id,"aria-label":t.name,value:t.key,children:t.name},e)}))]})}),y.length>0?y.map((function(t){return Object(h.jsx)(b,{product:t,handleAddToCart:k},t.id)})):Object(h.jsx)("p",{role:"alert",className:"no-item",children:"No Products for this Category"})]}),Object(h.jsx)(j.a,{show:O,position:"top-right",description:"Item added to cart",title:"Success",onClose:function(){return g(!1)}})]})})}));e.default=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(p,{})})}}}]);
//# sourceMappingURL=9.3058721d.chunk.js.map