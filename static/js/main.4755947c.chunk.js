(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(9),r=a.n(n),i=(a(15),a(7));var l=a(0);var j=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("header",{className:"flex-row space-between px-2 header-color",children:[Object(l.jsx)("h2",{children:Object(l.jsx)("a",{href:"/",children:Object(l.jsx)("span",{className:"flex-start",children:"Dave Beckstead"})})}),Object(l.jsx)("div",{children:Object(l.jsx)("ul",{className:"flex-row",children:["About Me","Contact","Portfolio","Resume"].map((function(t){return Object(l.jsx)("li",{className:"mx-2",children:Object(l.jsx)("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link active":"nav-link",children:t})},t)}))})})]}),Object(l.jsxs)("footer",{className:"footer flex-row space-around header-color",children:[Object(l.jsx)("a",{href:"https://github.com/bbec0689",children:"Github"}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/dave-b-15027a1b8/",children:"LinkedIn"}),Object(l.jsx)("a",{href:"https://stackoverflow.com/users/14330596/dave-b",children:"Stack Overflow"})]})]})};var b=function(){return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{id:"about",className:"text-color about-styling",children:"About me"}),Object(l.jsx)("div",{className:"my-2",children:Object(l.jsxs)("p",{className:"text-color center-spacing",children:["Hey there,",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),'My name is Dave Beckstead, I am currently a student at the University of Utah to become a full stack developer. I also work at Paramount Acceptance as an IT Technician, QA Tester, and part time Web Developer. I have an amazing wife, 3 dogs and a cat at home. I am a soccer fanatic and have been working with computers my whole life. If you have any questions at all visit the "Contact" section of this website.']})})]})},o=a(6),h=a(10);var m=function(){var e,t=Object(c.useState)({name:"",email:"",message:""}),a=Object(i.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(""),j=Object(i.a)(r,2),b=j[0],m=j[1],d=(s.name,s.email),x=s.message,u=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);m(t?"":"Your email is invalid.")}else e.target.value.length?m(""):m("".concat(e.target.name," is required."))};return console.log(s),Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{id:"about",className:"text-color contact-styling",children:"Contact "}),Object(l.jsx)("div",{children:Object(l.jsxs)("form",{className:"form-s",onSubmit:function(e){e.preventDefault(),b||(n(Object(o.a)({},e.target.name,e.target.value)),console.log("Form",s))},children:[Object(l.jsx)("label",{htmlfor:"name",children:"Name:"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{className:"input-s",placeholder:"Your Name...",type:"text",defaultValue:s.name,onChange:u,name:"name"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{htmlFor:"email",children:"Email Address:"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("input",(e={type:"email",name:"email",className:"input-s",placeholder:"example@example.com"},Object(o.a)(e,"type","email"),Object(o.a)(e,"defaultValue",d),Object(o.a)(e,"onChange",u),Object(o.a)(e,"name","email"),e)),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{name:"message",defaultValue:x,onChange:u,rows:"5",className:"input-s",placeholder:"Your message here..."}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(h.a,{className:"btn",type:"submit",value:"Submit",href:"mailto:bbec0689@gmail.com",children:"Send"})]})})]})},d=a(20),x=a(21),u=a(22),O=a.p+"static/media/gym-rats.15a98bf1.png",g=a.p+"static/media/urban-fiesta.2b0ec2c8.PNG",p=a.p+"static/media/run-buddy.a09d5372.PNG",f=a.p+"static/media/password-generator.3c5b3d13.png",N=a.p+"static/media/note-taker.1f944cbb.png",v=a.p+"static/media/weather-dashboard.a64ace0f.png";var w=function(e){return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{id:"about",className:"text-color port-style",children:"Portfolio"}),Object(l.jsxs)(d.a,{className:" center-spacing",children:[Object(l.jsxs)(x.a,{className:"flex-row",children:[Object(l.jsx)(u.a,{className:"flex-row",children:Object(l.jsx)("a",{href:"https://gym-rats-1.herokuapp.com/",target:"_blank",children:Object(l.jsx)("img",{width:200,height:200,className:"center-spacing img-thumbnail mx-1",src:O})})}),Object(l.jsx)(u.a,{className:"flex-row",children:Object(l.jsx)("a",{href:"https://kenneththelarson.github.io/urban-fiesta/",target:"_blank",children:Object(l.jsx)("img",{width:200,height:200,className:"center-spacing img-thumbnail mx-1",src:g})})}),Object(l.jsx)(u.a,{className:"flex-row",children:Object(l.jsx)("a",{href:"https://bbec0689.github.io/weather-dashboard-2/",target:"_blank",children:Object(l.jsx)("img",{width:200,height:200,className:"center-spacing img-thumbnail mx-1",src:v})})})]}),Object(l.jsxs)(x.a,{className:"flex-row",children:[Object(l.jsx)(u.a,{className:"flex-row",children:Object(l.jsx)("a",{href:"https://bbec0689.github.io/run-buddy/",target:"_blank",children:Object(l.jsx)("img",{width:200,height:200,className:"center-spacing img-thumbnail mx-1",src:p})})}),Object(l.jsx)(u.a,{className:"flex-row",children:Object(l.jsx)("a",{href:"https://bbec0689.github.io/password-generator/",target:"_blank",children:Object(l.jsx)("img",{width:200,height:200,className:"center-spacing img-thumbnail mx-1",src:f})})}),Object(l.jsx)(u.a,{className:"flex-row",children:Object(l.jsx)("a",{href:"https://bbec0689.github.io/note-taker/",target:"_blank",children:Object(l.jsx)("img",{width:200,height:200,className:"center-spacing img-thumbnail mx-1",src:N})})})]})]})]})};var y=function(){return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{id:"about",className:"text-color about-styling",children:"Resume"}),Object(l.jsx)("div",{className:"my-2",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("h3",{className:"lang-known",children:"Languages Known:"}),Object(l.jsx)("li",{className:"text-color center-spacing",children:"HTML, CSS, Javascript"}),Object(l.jsx)("li",{className:"text-color center-spacing",children:"MERN"}),Object(l.jsx)("li",{className:"text-color center-spacing",children:"nodeJS"}),Object(l.jsx)("li",{className:"text-color center-spacing",children:"ExpressJs"}),Object(l.jsx)("li",{className:"text-color center-spacing",children:"SQL"}),Object(l.jsx)("li",{className:"text-color center-spacing",children:"jest"})]})})]})};var k=function(){var e=Object(c.useState)("About Me"),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("nav",{children:[Object(l.jsx)(j,{currentPage:a,handlePageChange:s}),Object(l.jsx)("div",{children:function(){switch(a){case"About Me":return Object(l.jsx)(b,{});case"Portfolio":return Object(l.jsx)(w,{});case"Contact":return Object(l.jsx)(m,{});case"Resume":return Object(l.jsx)(y,{})}}()})]})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),C()}},[[17,1,2]]]);
//# sourceMappingURL=main.4755947c.chunk.js.map