(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{47:function(n,e,t){"use strict";t.r(e);var a,r,i=t(1),o=t(27),c=t.n(o),s=t(11),l=t(8),d=t(4),m=t(5),b=t(0),j=m.b.div(a||(a=Object(d.a)(["\n  .heading {\n    font-size: 2.4rem;\n    margin-bottom: 2rem;\n  }\n  li {\n    margin-bottom: 1rem;\n  }\n  a {\n    font-size: 1.8rem;\n  }\n"])));function h(n){var e=n.heading,t=void 0===e?"col heading":e,a=n.links,r=void 0===a?[{type:"Link",title:"Home",path:"/home"},{type:"Link",title:"About",path:"/about"}]:a;return Object(b.jsxs)(j,{children:[Object(b.jsx)("h1",{className:"heading",children:t}),Object(b.jsx)("ul",{children:r.map((function(n,e){return Object(b.jsx)("li",{children:"Link"===n.type?Object(b.jsx)(s.b,{to:n.path,children:n.title}):Object(b.jsx)("a",{href:n.path,target:"_blank",rel:"noreferrer",children:n.title})},e)}))})]})}var p,x=m.b.div(r||(r=Object(d.a)(["\n  max-width: 500px;\n  margin: 0 auto;\n  font-size: 1.8rem;\n  line-height: 1.8rem;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n  }\n"])));function u(n){var e=n.children;return Object(b.jsx)(x,{className:"para",children:Object(b.jsx)("p",{children:e})})}var g=m.b.div(p||(p=Object(d.a)(["\n  padding-top: 10rem;\n  background-color: var(--deep-dark);\n  .container {\n    display: flex;\n    gap: 3rem;\n  }\n  .footer__col1 {\n    flex: 2;\n  }\n  .footer__col2,\n  .footer__col3,\n  .footer__col4 {\n    flex: 1;\n  }\n  .copyright {\n    background-color: var(--deep-dark);\n    text-align: left;\n    margin-top: 5rem;\n    padding: 1rem 0;\n    .para {\n      margin-left: 0;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      gap: 0rem;\n      & > div {\n        margin-top: 5rem;\n      }\n    }\n    .footer__col1 .para {\n      max-width: 100%;\n    }\n    .copyright {\n      .container {\n        div {\n          margin-top: 0;\n        }\n      }\n    }\n  }\n"])));function f(){return Object(b.jsxs)(g,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"footer__col1",children:[Object(b.jsx)("h1",{className:"footer__col1__title",children:"Ancuta Cosovanu"}),Object(b.jsx)(u,{children:"I'm a junior full stack developer from Prato, Italy."})]}),Object(b.jsx)("div",{className:"footer__col2",children:Object(b.jsx)(h,{heading:"Important Links",links:[{title:"Home",path:"/",type:"Link"},{title:"About",path:"/about",type:"Link"},{title:"Projects",path:"/projects",type:"Link"},{title:"Contact",path:"/contact",type:"Link"}]})}),Object(b.jsx)("div",{className:"footer__col3",children:Object(b.jsx)(h,{heading:"Contact Info",links:[{title:"+393297710450",path:"tel:+393297710450"},{title:"ancuta_cosovanu@yahoo.com",path:"mailto:ancuta_cosovanu@yahoo.com"},{title:"Prato, Italy",path:"http:/google.com/maps"}]})}),Object(b.jsx)("div",{className:"footer__col4",children:Object(b.jsx)(h,{heading:"Social Links",links:[{title:"Facebook",path:"http://facebook.com/ancuta.cosovanu"},{title:"Instagram",path:"https://www.instagram.com/ancutacosovanu/"}]})})]}),Object(b.jsx)("div",{className:"copyright",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(u,{children:"2021 Ancuta Cosovanu "}),Object(b.jsx)("h3",{children:"Made with \u2764 in Italy"})]})})]})}var _,O,v=t(15),w=t(10),y=m.b.div(_||(_=Object(d.a)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--dark-bg);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: var(--deep-dark);\n      }\n    }\n    a {\n      display: inline-block;\n      font-family: 'RobotoMono Regular';\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: var(--gary-1);\n      outline: none;\n    }\n    .active {\n      color: var(--white);\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .closeNavIcon {\n    display: none;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .mobile-menu-icon {\n      display: block;\n    }\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: var(--deep-dark);\n      padding: 2rem;\n      width: 90%;\n      max-width: 300px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        margin-bottom: 1rem;\n      }\n    }\n  }\n"])));function k(){var n=Object(i.useState)(!1),e=Object(v.a)(n,2),t=e[0],a=e[1];return Object(b.jsxs)(y,{children:[Object(b.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:Object(b.jsx)(w.f,{})}),Object(b.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(b.jsx)("div",{className:"closeNavIcon",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:Object(b.jsx)(w.a,{})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/",exact:!0,onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/about",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/projects",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:"Projects"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/contact",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:"Contact"})})]})]})}function N(){var n=Object(l.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[n]),null}var I=m.b.div(O||(O=Object(d.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 2.2.rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border-radius: 8px;\n    display: inline-block;\n    border: 2px solid var(--gray-1);\n    color: ",";\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(n){return n.outline?" transparent ":"var(--gray-1)"}),(function(n){return n.outline?"var(--gray-1)":"black"}));function S(n){var e=n.btnLink,t=void 0===e?"test":e,a=n.btnText,r=void 0===a?"test":a,i=n.outline,o=void 0!==i&&i;return Object(b.jsx)(I,{outline:o,className:"button-wrapper",children:Object(b.jsx)(s.b,{className:"button",to:t,children:r})})}var z,C,B=t.p+"static/media/about-page-img.154d859e.jpg",L=m.b.div(z||(z=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 3rem;\n  position: relative;\n  .title {\n    font-size: 2.4rem;\n  }\n  .items {\n    display: flex;\n    gap: 1.5rem;\n    position: absolute;\n    left: 18rem;\n  }\n  .item {\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 8px;\n  }\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    .items {\n      position: initial;\n      gap: 1rem;\n    }\n    .title {\n      font-size: 2rem;\n    }\n  }\n  .items {\n    position: initial;\n    gap: 1rem;\n  }\n  .title {\n    font-size: 2rem;\n  }\n"])));function M(n){var e=n.title,t=void 0===e?"this is title":e,a=n.items,r=void 0===a?["HTML","CSS","JS"]:a;return Object(b.jsxs)(L,{children:[Object(b.jsx)("h1",{className:"title ",children:t}),Object(b.jsx)("div",{className:"items",children:r.map((function(n,e){return Object(b.jsx)("div",{className:"item",children:Object(b.jsx)(u,{children:n})},e)}))})]})}var P,A=m.b.div(C||(C=Object(d.a)(["\n  padding: 10rem;\n  .contactBanner__wrapper {\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    padding: 5rem 0rem;\n    text-align: center;\n  }\n  .contactBanner__heading {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n  @media only screen and(max-width: 768px) {\n    .contactBanner__heading {\n      font-size: 2.8rem;\n    }\n  }\n"])));function D(){return Object(b.jsx)(A,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"contactBanner__wrapper",children:[Object(b.jsx)(u,{children:"Have a project in mind"}),Object(b.jsx)("h3",{className:"contactBanner__heading",children:"Let me help you"}),Object(b.jsx)(S,{btnText:"Contact Me",btnLink:"/contact"})]})})})}var T,R=m.b.div(P||(P=Object(d.a)(["\n  padding: 20rem 0 10rem 0;\n  .top-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n  .left {\n    flex: 3;\n  }\n  .right {\n    flex: 2;\n    img {\n      border: 2px solid var(--gray-1);\n    }\n  }\n  .about__subheading {\n    font-size: 2.2rem;\n    margin-bottom: 2rem;\n    span {\n      background-color: var(--deep-dark);\n      padding: 0.5rem;\n      border-radius: 8px;\n    }\n  }\n  .about__heading {\n    font-size: 3.6rem;\n    margin-bottom: 3rem;\n  }\n  .about__info {\n    margin-bottom: 4rem;\n    .para {\n      max-width: 100%;\n    }\n  }\n  .right {\n    img {\n      border: 2px solid var(--gray-1);\n    }\n  }\n  .about__info__items {\n    margin-top: 15rem;\n  }\n  .about__info__item {\n    margin-bottom: 10rem;\n  }\n  .about__info__heading {\n    font-size: 3.6rem;\n    text-transform: uppercase;\n  }\n  @media only screen and(max-width:768px) {\n    padding: 10rem 0;\n    .top-section {\n      flex-direction: column;\n      gap: 5rem;\n    }\n    .about__heading {\n      font-size: 2.8rem;\n    }\n    .about__subheading {\n      font-size: 1.8rem;\n    }\n    .about__info__heading {\n      font-size: 3rem;\n    }\n  }\n"])));function E(){return Object(b.jsxs)(R,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"top-section",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsxs)("p",{className:"about__subheading",children:["Hi,I am ",Object(b.jsx)("span",{children:"Ancuta Cosovanu"})]}),Object(b.jsx)("h2",{className:"about__heading",children:"A Junior Full Stack developer"}),Object(b.jsx)("div",{className:"about__info",children:Object(b.jsxs)(u,{children:["I am from Iasi,Romania, a place of beauty and nature, but I live in Prato, Italy, a beautiful place also.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"I started coding from scratch about two years ago and I've found it very interesting, I love it and I enjoyed the process a lot.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})}),Object(b.jsx)(S,{btnText:"Download CV",btnLink:"/resume.pdf"})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)("img",{src:B,alt:"Ancuta's img"})})]}),Object(b.jsxs)("div",{className:"about__info__items",children:[Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"Education"}),Object(b.jsx)(M,{title:"High School",items:[" D.Cantemir High School, Iasi, Romania"]}),Object(b.jsx)(M,{title:"University",items:["A.I.Cuza University, Iasi, Romania","PIN, Prato, Italy"]}),Object(b.jsx)(M,{title:"Educational Platforms",items:["WellCode, Romania","Codecademy"]})]}),Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"My Skills"}),Object(b.jsx)(M,{title:"FrontEnd",items:[" HTML","CSS","JavaScript","REACT"]}),Object(b.jsx)(M,{title:"BackEnd",items:["Node","Express","MySql"]})]})]})]}),Object(b.jsx)(D,{})]})}var F,H=m.b.div(T||(T=Object(d.a)(["\n  padding: 2rem;\n  background-color: var(--deep-dark);\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  .icon {\n    color: var(--white);\n    background-color: var(--gray-2);\n    padding: 1.3rem;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n  }\n  svg {\n    width: 3.5rem;\n  }\n"])));function J(n){var e=n.icon,t=void 0===e?Object(b.jsx)(w.h,{}):e,a=n.text,r=void 0===a?"this is an info":a;return Object(b.jsxs)(H,{children:[Object(b.jsx)("div",{className:"icon",children:t}),Object(b.jsx)("div",{className:"info",children:Object(b.jsx)(u,{children:r})})]})}var W,K=m.b.div(F||(F=Object(d.a)(["\n  text-align: center;\n  p {\n    font-family: 'RobotoMono Regular';\n    font-size: 2rem;\n  }\n  h2 {\n    font-family: 'Montserrat Bold';\n    font-size: 6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n  }\n  @media onlyscreen and (max-width: 768px) {\n    p {\n      font-size: 1.2rem;\n    }\n  }\n  h {\n    font-size: 3.6rem;\n  }\n"])));function Y(n){var e=n.subheading,t=void 0===e?"This is subheading":e,a=n.heading,r=void 0===a?" This is heading":a;return Object(b.jsxs)(K,{className:"section-title",children:[Object(b.jsx)("p",{children:t}),Object(b.jsx)("h2",{children:r})]})}var G,V=m.b.form(W||(W=Object(d.a)(["\n  width: 100%;\n  .form-group {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n  label {\n    font-size: 1.8rem;\n  }\n  input,\n  textarea {\n    width: 100%;\n    font-size: 2rem;\n    padding: 1.2rem;\n    color: var(--gray-1);\n    background-color: var(--deep-dark);\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    margin-top: 1rem;\n  }\n  textarea {\n    min-height: 250px;\n    resize: vertical;\n  }\n  button[type='submit'] {\n    border-radius: 8px;\n    cursor: pointer;\n    padding: 1rem 4rem;\n    outline: none;\n    border: none;\n    display: inline-block;\n    font-size: 2rem;\n    color: var(--black);\n    background-color: var(--gray-1);\n  }\n"])));function U(){var n=Object(i.useState)(""),e=Object(v.a)(n,2),t=e[0],a=e[1],r=Object(i.useState)(""),o=Object(v.a)(r,2),c=o[0],s=o[1],l=Object(i.useState)(""),d=Object(v.a)(l,2),m=d[0],j=d[1];return Object(b.jsx)("div",{children:Object(b.jsxs)(V,{children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"name",children:["Your name",Object(b.jsx)("input",{type:"text",id:"name",name:"name",value:t,onChange:function(n){return a(n.target.value)}})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"email",children:["Your email",Object(b.jsx)("input",{type:"text",id:"email",name:"email",value:c,onChange:function(n){return s(n.target.value)}})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"message",children:["Your message",Object(b.jsx)("textarea",{type:"text",id:"message",name:"message",value:m,onChange:function(n){return j(n.target.value)}})]})}),Object(b.jsx)("button",{type:"submit",children:"Send"})]})})}var q=m.b.div(G||(G=Object(d.a)(["\n  padding: 10rem 0;\n  .contactSection__wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n  .contactSection__wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n    background-color: var(--gray-1);\n    left: 50%;\n    display: none;\n  }\n  .left {\n    width: 100%;\n    max-width: 500px;\n  }\n  .right {\n    width: 100%;\n    max-width: 500px;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactSection__wrapper {\n      flex-direction: column;\n    }\n    .contactSection__wrapper::after {\n      display: none;\n    }\n    .left,\n    .right {\n      max-width: 100%;\n    }\n    .right {\n      padding: 4rem 2 rem 2rem 2rem;\n    }\n  }\n"])));function Q(){return Object(b.jsx)(q,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(Y,{heading:"Contact",subheading:"Get in touch"}),Object(b.jsxs)("div",{className:"contactSection__wrapper",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsx)(J,{icon:Object(b.jsx)(w.e,{}),text:"00393297710450"}),Object(b.jsx)(J,{icon:Object(b.jsx)(w.d,{}),text:"ancuta_cosovanu@yahoo.com"}),Object(b.jsx)(J,{text:"Prato, Italy"})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)(U,{})})]})]})})}var X,Z=t.p+"static/media/map.e1d8e60e.jpg",$=m.b.div(X||(X=Object(d.a)(["\n  background: url(",") no-repeat;\n  background-position: center;\n  background-size: cover;\n  min-height: 400px;\n  .container {\n    position: relative;\n    min-height: 400px;\n  }\n  .map__card {\n    position: absolute;\n    right: 10%;\n    bottom: 10%;\n    padding: 2rem;\n    background: var(--deep-dark);\n    width: 100%;\n    max-width: 300px;\n    border-radius: 12px;\n  }\n  .map__card__heading {\n    font-size: 3rem;\n    margin-bottom: 1rem;\n  }\n  .map__card__link {\n    display: inline-block;\n    font-size: 1.6rem;\n    margin-top: 3rem;\n    text-decoration: underline;\n  }\n  @media only screen and (max-width: 768px) {\n    background-position: 80% center;\n  }\n  @media only screen and (max-width: 400px) {\n    .map__card {\n      max-width: none;\n      right: auto;\n    }\n  }\n"])),Z);function nn(){return Object(b.jsx)($,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"map__card",children:[Object(b.jsx)("h3",{children:"I am here"}),Object(b.jsx)(u,{children:"Prato, Italy"}),Object(b.jsx)("a",{className:"map__card__link",href:"https://www.google.it/maps/place/59100+Prato,+Province+of+Prato/@43.8782904,11.0136639,12z/data=!3m1!4b1!4m5!3m4!1s0x132af6118da49cb9:0x3af0779d39b68e!8m2!3d43.8777049!4d11.102228",target:"_blank",rel:"noreferrer",children:"Open in google map"})]})})})}function en(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(Q,{}),Object(b.jsx)(nn,{})]})}var tn,an=t.p+"static/media/hero4.50535303.jpg",rn=t.p+"static/media/social-media-arrow.f5e093ce.svg",on=t.p+"static/media/scroll-down-arrow.b013ca45.svg",cn=m.b.div(tn||(tn=Object(d.a)(["\n  .hero {\n    height: 100vh;\n    min-height: 1000px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n  .hero__heading {\n    font-size: 2rem;\n    margin-bottom: -4rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .hero__name {\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: var(--white);\n    }\n  }\n  .hero__img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n  .hero__info {\n    margin-top: -18rem;\n  }\n  .hero__social,\n  .hero__scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n    bottom: 20px;\n    width: 50px;\n  }\n  .hero__social {\n    left: 50px;\n  }\n  .hero__scrollDown {\n    right: 50px;\n  }\n  .hero__social__indicator,\n  .hero__scrollDown {\n    width: 50px;\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n  .hero__scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n  .hero__social__text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .hero {\n      min-height: 750px;\n    }\n    .hero__heading {\n      font-size: 1.4rem;\n      margin-bottom: -3rem;\n      .hero__name {\n        font-size: 4.5rem;\n      }\n    }\n    .hero__img {\n      height: 300px;\n    }\n    .hero__info {\n      margin-top: 3rem;\n    }\n    .hero__social {\n      left: 0px;\n      bottom: -15%;\n      width: 20px;\n      .hero__social__indicator {\n        width: 20px;\n        p {\n          font-size: 1.2rem;\n        }\n        img {\n          max-height: 22px;\n        }\n      }\n      .hero__social__text {\n        ul {\n          li {\n            a {\n              font-size: 1.2rem;\n              margin-bottom: 1rem;\n            }\n          }\n        }\n      }\n    }\n    .hero__scrollDown {\n      right: 0;\n      width: 20px;\n      gap: 1rem;\n      p {\n        font-size: 1.3rem;\n      }\n    }\n  }\n"])));function sn(){return Object(b.jsx)(cn,{children:Object(b.jsx)("div",{className:"hero",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h1",{className:"hero__heading",children:[Object(b.jsx)("span",{children:"Hello, I'm"}),Object(b.jsx)("span",{className:"hero__name",children:"Ancuta Cosovanu"})]}),Object(b.jsx)("div",{className:"hero__img",children:Object(b.jsx)("img",{src:an,alt:""})}),Object(b.jsxs)("div",{className:"hero__info",children:[Object(b.jsx)(u,{children:"I'm a full stack developer and I love make new web experiences for the people."}),Object(b.jsx)(S,{btnText:"see my works",btnLink:"/projects"})]}),Object(b.jsxs)("div",{className:"hero__social",children:[Object(b.jsxs)("div",{className:"hero__social__indicator",children:[Object(b.jsx)("p",{children:"Follow"}),Object(b.jsx)("img",{src:rn,alt:"icon"})]}),Object(b.jsx)("div",{className:"hero__social__text",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.facebook.com/ancuta.cosovanu",target:"_blank",rel:"noreferrer",children:"FB"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.facebook.com/ancuta.cosovanu",target:"_blank",rel:"noreferrer",children:"TW"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.facebook.com/ancuta.cosovanu",target:"_blank",rel:"noreferrer",children:"IG"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.facebook.com/ancuta.cosovanu",target:"_blank",rel:"noreferrer",children:"LI"})})]})})]}),Object(b.jsxs)("div",{className:"hero__scrollDown",children:[Object(b.jsx)("p",{children:"Scroll"}),Object(b.jsx)("img",{src:on,alt:"ScrollDown Arrow"})]})]})})})}var ln,dn,mn=t.p+"static/media/about-sec-img.242832ae.jpg",bn=m.b.div(ln||(ln=Object(d.a)(["\n  padding: 10rem 0;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .aboutSection__left,\n  .aboutSection__right {\n    flex: 1;\n  }\n  .section-title {\n    text-align: left;\n  }\n  para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n  .aboutSection__buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  @media only screen and (max-width: 950px) {\n    .aboutSection__left {\n      flex: 4;\n    }\n    .aboutSection__right {\n      flex: 3;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n    .aboutSection__left,\n    .aboutSection__right {\n      width: 100%;\n    }\n    .aboutSection__left,\n    .aboutSection__right {\n      margin-top: 3rem;\n    }\n    .section-title {\n      text-align: center;\n    }\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n    .aboutSection__buttons {\n      flex-direction: column;\n      gap: 0;\n      .button-wrapper,\n      a {\n        width: 100% text-aligncenter;\n      }\n    }\n  }\n"])));function jn(){return Object(b.jsx)(bn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"aboutSection__left",children:[Object(b.jsx)(Y,{subheading:"Let me introduce myself",heading:"About me"}),Object(b.jsx)(u,{children:"I am a Junior Full Stack developer from Italy."}),Object(b.jsxs)("div",{className:"aboutSection__buttons",children:[Object(b.jsx)(S,{btnLink:"/projects",btnText:"Works"}),Object(b.jsx)(S,{btnLink:"/about",btnText:"Read More",outline:!0})]})]}),Object(b.jsx)("div",{className:"aboutSection__right",children:Object(b.jsx)("img",{src:mn,alt:""})})]})})}var hn,pn=m.b.div(dn||(dn=Object(d.a)(["\n  text-align: center;\n  .servicesItem__icon {\n    svg {\n      width: 3rem;\n    }\n  }\n  .servicesItem__title {\n    font-size: 2.5rem;\n    font-family: 'Montserrat SemiBold';\n  }\n  .para {\n    margin-top: 2 rem;\n  }\n"])));function xn(n){var e=n.icon,t=void 0===e?Object(b.jsx)(w.c,{}):e,a=n.title,r=void 0===a?"web design":a,i=n.desc,o=void 0===i?"Lorem Ipsum...lorem":i;return Object(b.jsxs)(pn,{children:[Object(b.jsx)("div",{className:"servicesItem__icon",children:t}),Object(b.jsx)("div",{className:"servicesItem__title",children:r}),Object(b.jsx)(u,{children:o})]})}var un=m.b.div(hn||(hn=Object(d.a)(["\n  padding: 10rem;\n  .services__allItems {\n    display: flex;\n    gap: 10rem;\n    margin-top: 5rem;\n    justify-content: space-between;\n  }\n  @media only screen and (max-width: 768px) {\n    .services__allItems {\n      flex-direction: column;\n      max-width: 350px;\n      margin: 0 auto;\n      margin-top: 5rem;\n      gap: 5rem;\n    }\n  }\n"])));function gn(){return Object(b.jsx)(un,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(Y,{heading:"Services",subheading:"What I do"}),Object(b.jsxs)("div",{className:"services__allItems",children:[Object(b.jsx)(xn,{icon:Object(b.jsx)(w.c,{}),title:"Website Design",desc:"I do ui/ux desing for the website that helps website to get a unique look."}),Object(b.jsx)(xn,{icon:Object(b.jsx)(w.b,{}),title:"Web Development",desc:"I develop Webapp and Websites."}),Object(b.jsx)(xn,{icon:Object(b.jsx)(w.g,{}),title:"App Dev ",desc:"I develop mobile application."})]})]})})}var fn,_n=t(53),On=t(51),vn=t(52),wn=t(50),yn=t(54),kn=t.p+"static/media/projectImg.771236e1.png",Nn=t.p+"static/media/utracker.be1fe64a.jpg",In=t.p+"static/media/greenctg.e51b3bbd.jpg",Sn=t.p+"static/media/cointracker.8da9e0cd.jpg",zn=t.p+"static/media/cavinimg.77adeaa3.jpg",Cn=[{id:Object(yn.a)(),name:"U Tracker",desc:"An application to track your all data from one place. I developed the website and the mobile app",img:Nn},{id:Object(yn.a)(),name:"Green CTG",desc:"An app to help people to get an overview of how they can make the city beautiful.",img:In},{id:Object(yn.a)(),name:"Coin Tracker",desc:"Using this app you can track any e coin. Also you will get a good advise about investment form the professional",img:Sn},{id:Object(yn.a)(),name:"Cavin's Portfolio",desc:"A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.",img:zn},{id:Object(yn.a)(),name:"Tracking Soft",desc:"A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.",img:kn}],Bn=m.b.div(fn||(fn=Object(d.a)(["\n  .projectItem__img {\n    width: 100%;\n    height: 400px;\n    overflow: hidden;\n    border-radius: 12px;\n    display: inline-block;\n    border: 3px solid var(--gray-2);\n    img {\n      height: 100%;\n    }\n  }\n  .projectItem__info {\n    margin-top: 1rem;\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .projectItem__title {\n    font-size: 2.2.rem;\n  }\n  .projectItem__desc {\n    font-size: 1.6rem;\n    font-family: 'RobotoMono Regular';\n    margin-top: 1rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projectItem__img {\n      height: 350px;\n    }\n  }\n"])));function Ln(n){var e=n.img,t=void 0===e?kn:e,a=n.title,r=void 0===a?"Project Name":a,i=n.desc,o=void 0===i?"Lorem ipsum lorem":i;return Object(b.jsxs)(Bn,{children:[Object(b.jsx)(s.b,{to:"/projects",className:"projectItem__img",children:Object(b.jsx)("img",{src:t,alt:"project img"})}),Object(b.jsxs)("div",{className:"projectItem__info",children:[Object(b.jsx)(s.b,{children:Object(b.jsx)("h3",{className:"projectItem__title",children:r})}),Object(b.jsx)("p",{className:"projectItem__desc",children:o})]})]})}var Mn;t(46);vn.a.use([wn.a]);var Pn,An=m.b.div(Mn||(Mn=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: flex;\n    gap: 3rem;\n    margin-top: 5rem;\n  }\n  .swiper-container {\n    padding-top: 8rem;\n    max-width: 100%;\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    background-color: var(--deep-dark);\n    z-index: 10;\n    right: 60px;\n    left: auto;\n    top: 0;\n    transform: translateY(50%);\n    color: var(--gray-1);\n    border-radius: 8px;\n  }\n  .swiper-button-next {\n    right: 0;\n  }\n  .swiper-button-prev::after,\n  .swiper-button-next::after {\n    font-size: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__allItems {\n      flex-direction: column;\n      max-width: 400px;\n      margin: 0 auto;\n      margin-top: 7rem;\n      gap: 5rem;\n      .projectItem__img {\n        width: 100%;\n      }\n    }\n  }\n"])));function Dn(){return Object(b.jsx)(An,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(Y,{heading:"Projects",subheading:"Some of my recent works"}),Object(b.jsx)("div",{className:"projects__allItems",children:Object(b.jsx)(_n.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3}},children:Cn.map((function(n,e){if(!(e>=5))return Object(b.jsx)(On.a,{children:Object(b.jsx)(Ln,{title:n.name,img:n.img,desc:n.desc})},n.id)}))})})]})})}function Tn(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(sn,{}),Object(b.jsx)(jn,{}),Object(b.jsx)(gn,{}),Object(b.jsx)(Dn,{}),Object(b.jsx)(D,{})]})}var Rn,En=m.b.div(Pn||(Pn=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax (300px, 1fr));\n    gap: 5rem;\n    margin-top: 5rem;\n  }\n  .projects__searchBar {\n    position: relative;\n    width: 300px;\n    margin-top: 5rem;\n  }\n  .projects__searchBar input {\n    width: 100%;\n    font-size: 2rem;\n    padding: 0.8rem;\n    color: var(--black);\n    border-radius: 6px;\n    outline: none;\n    border: none;\n  }\n  .projects__searchBar .searchIcon {\n    position: absolute;\n    width: 2rem;\n    right: 1rem;\n  }\n  .projects__searchBar .searchIcon path {\n    color: var(--deep-dark);\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__searchBar,\n    .projects__searchBar form,\n    .projects__searchBar input {\n      width: 100%;\n    }\n  }\n"])));function Fn(){var n=Object(i.useState)(""),e=Object(v.a)(n,2),t=e[0],a=e[1],r=Object(i.useState)(Cn),o=Object(v.a)(r,2),c=o[0],s=o[1];return Object(i.useEffect)((function(){""!==t&&s((function(){return Cn.filter((function(n){return n.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]),Object(b.jsx)(En,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(Y,{heading:"Projects",subheading:"Some of my works"}),Object(b.jsx)("div",{className:"projects__searchBar",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",value:t,onChange:function(n){n.preventDefault(),a(n.target.value),!n.target.value.length>0&&s(Cn)},placeholder:"Project Name"}),Object(b.jsx)(w.i,{className:"searchIcon"})]})}),Object(b.jsx)("div",{className:"projects__allItems",children:c.map((function(n){return Object(b.jsx)(Ln,{title:n.name,desc:n.desc,img:n.img},n.id)}))})]})})}function Hn(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(k,{}),Object(b.jsx)(N,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/about",children:Object(b.jsx)(E,{})}),Object(b.jsx)(l.a,{path:"/projects",children:Object(b.jsx)(Fn,{})}),Object(b.jsx)(l.a,{path:"/contact",children:Object(b.jsx)(en,{})}),Object(b.jsx)(l.a,{path:"/",children:Object(b.jsx)(Tn,{})})]}),Object(b.jsx)(f,{})]})})}var Jn,Wn=Object(m.a)(Rn||(Rn=Object(d.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),Kn=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Yn=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",Gn=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",Vn=Object(m.a)(Jn||(Jn=Object(d.a)(["\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'Montserrat SemiBold';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'Montserrat SemiBold';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold';\n  }\n"])),Kn,Yn,Gn);c.a.render(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Wn,{}),Object(b.jsx)(Vn,{}),Object(b.jsx)(Hn,{})]}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.d76e0972.chunk.js.map