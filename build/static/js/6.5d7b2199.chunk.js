(this["webpackJsonpshopping-cart-assignment"]=this["webpackJsonpshopping-cart-assignment"]||[]).push([[6],{427:function(t,e,n){"use strict";var c=n(1),i=(n(428),n(3));e.a=function(t){var e=t.position,n=t.description,s=t.title,a=t.onClose,o=t.show,r=Object(c.useRef)();return o&&setTimeout((function(){a()}),5e3),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("section",{role:"alert",className:o?"notification-container ".concat(e," ").concat(s):"notification-close",children:Object(i.jsxs)("div",{className:"notification toast ".concat(e),children:[Object(i.jsxs)("div",{ref:r,className:"notification-heading",children:[Object(i.jsx)("h4",{className:"notification-title",children:s}),Object(i.jsx)("button",{"data-testid":"toast-close-btn",onClick:a,children:"X"})]}),Object(i.jsx)("p",{className:"notification-message",children:n})]})})})}},428:function(t,e,n){},502:function(t,e,n){},539:function(t,e,n){"use strict";n.r(e);var c=n(429),i=n(1),s=n(49),a=n(137),o=n(62),r=n(139),l=n(537),j=(n(502),n(3));function d(t){return Object(j.jsx)(l.a,{in:t.show,unmountOnExit:!0,timeout:{enter:0,exit:300},children:Object(j.jsx)("div",{"data-testid":"modal",role:"dialog",className:"modal",children:Object(j.jsxs)("section",{className:"modal-content",onClick:function(t){return t.stopPropagation()},children:[Object(j.jsxs)("header",{className:"modal-header",children:[Object(j.jsx)("h4",{"data-testid":"modal-title",className:"modal-title",children:t.title}),Object(j.jsx)("button",{onClick:t.onClose,className:"button",children:"x"})]}),Object(j.jsx)("div",{className:"modal-body ".concat(t.background),children:t.children}),Object(j.jsx)("footer",{className:"modal-footer",children:t.footerContent})]})})})}var u=n(18),b=n(427),h=function(t){var e=t.item,n=t.addHandler,c=t.removeHandler;return Object(j.jsxs)("div",{className:"quantity",children:[Object(j.jsx)("button",{"data-testid":"plus",className:"each-category-button-style circle-button",id:"plus",type:"button",name:"button",onClick:function(t){return n(t,e)},children:"+"}),Object(j.jsx)("input",{"data-testid":"quantity-input","aria-label":"quantity-input",type:"number",name:"name",value:e.quantity,disabled:!0}),Object(j.jsx)("button",{"data-testid":"sub",className:"circle-button each-category-button-style",id:"sub",type:"button",name:"button",onClick:function(t){return c(t,e)},children:"-"}),Object(j.jsxs)("p",{children:[" x ",e.price]})]})},m=function(){var t=Object(s.c)((function(t){return t.TestReducer.cartData})),e=Object(s.c)((function(t){return t.TestReducer.modalFlag})),n=Object(s.b)(),l=Object(u.f)(),m=Object(i.useState)(),O=Object(c.a)(m,2),x=O[0],p=O[1],f=Object(s.c)((function(t){return t.TestReducer.auth})),g=function(t,e){n(Object(o.a)(e))},y=function(t,e){e.quantity>1?n(Object(o.h)(e)):n(Object(o.g)(e.id))},N=function(){f?(n(Object(o.j)(!1)),p(!0),n(Object(o.b)())):(p(!0),setTimeout((function(){l.push("/login"),n(Object(o.j)(!1))}),3e3))},v=function(){return Object(j.jsxs)(i.Fragment,{children:[t.map((function(t){return Object(j.jsxs)("div",{"data-testid":"cart-container",className:"cart-detail-container",children:[Object(j.jsx)("img",{src:t.imageURL,alt:t.name}),Object(j.jsxs)("div",{className:"cart-details-section",children:[Object(j.jsx)("h4",{children:t.name}),Object(j.jsxs)("div",{className:"cart-details-disp-flex",children:[Object(j.jsx)(h,{item:t,addHandler:g,removeHandler:y}),Object(j.jsxs)("p",{children:["Rs. ",t.quantity*t.price]})]})]})]},t.id)})),Object(j.jsxs)("div",{className:"cheap-image-container",children:[Object(j.jsx)("img",{src:"/static/images/lowest-price.png",alt:"lowest-price-text"}),a.b]})]})},C=function(){return t.length>0?Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)("p",{className:"align-center",children:a.a}),Object(j.jsxs)("button",{tabIndex:-1,onClick:N,className:"each-category-button-style modal-footer-button-style",children:[Object(j.jsx)("div",{children:t.length?a.k:"Start shopping"}),Object(j.jsxs)("div",{children:["Rs.",t.map((function(t){return t.price*t.quantity})).reduce((function(t,e){return t+e}),0).toFixed(2)]})]})]}):Object(j.jsx)("button",{onClick:function(){return n(Object(o.j)(!1))},className:"each-category-button-style no-item-button",children:"Start Shopping"})};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{title:t.length>0?"My Cart (".concat(Object(r.b)(t)," items)"):"My Cart",show:e,onClose:function(){return n(Object(o.j)(!1))},footerContent:Object(j.jsx)(C,{}),children:Object(j.jsx)(j.Fragment,{children:t.length>0?Object(j.jsx)(v,{}):Object(j.jsxs)("div",{className:"no-item-style",children:[Object(j.jsx)("strong",{children:a.i}),Object(j.jsx)("p",{children:a.d})]})})}),f?Object(j.jsx)(b.a,{show:x,position:"top-right",description:"Checkout Successful",title:"Success",onClose:function(){return p(!1)}}):Object(j.jsx)(b.a,{show:x,position:"top-right",description:"User not Logged In, redirecting to login screen",title:"Error",onClose:function(){return p(!1)}})]})};e.default=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(m,{})})}}}]);
//# sourceMappingURL=6.5d7b2199.chunk.js.map