(this.webpackJsonppractise=this.webpackJsonppractise||[]).push([[0],{107:function(e,t){},108:function(e,t,c){},109:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(32),s=c.n(a),j=(c(70),c(71),c(72),c(7)),l=c(8),i=c(10),d=c.n(i),h=c(21),b=c(9),x=c(22),o=c.n(x),O=c(111),u=c(112),m=c(62),p=c(118),g=c(113),f=c(114),v=(c(43),c(117)),y=c(119),C=c(0);var w=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(v.a,{bg:"dark",variant:"dark",children:[Object(C.jsx)(v.a.Brand,{as:j.b,to:"/",children:"Home Page"}),Object(C.jsx)(y.a,{children:Object(C.jsx)(y.a.Link,{as:j.b,to:"/counter",children:"Counter App"})}),Object(C.jsx)(y.a,{children:Object(C.jsx)(y.a.Link,{as:j.b,to:"/calculator",children:"Calculator App"})}),Object(C.jsx)(y.a,{children:Object(C.jsx)(y.a.Link,{as:j.b,to:"/bmi",children:"BMI App"})}),Object(C.jsx)(y.a,{children:Object(C.jsx)(y.a.Link,{as:j.b,to:"/budget",children:"Budget App"})}),Object(C.jsx)(y.a,{children:Object(C.jsx)(y.a.Link,{as:j.b,to:"/list",children:"Users CRUD App"})})]})})};var N=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1];Object(n.useEffect)((function(){a()}),[]);var a=function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("http://localhost:3003/users");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.delete("http://localhost:3003/users/".concat(t));case 2:a();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(w,{}),Object(C.jsx)(O.a,{className:"mt-5",children:Object(C.jsx)(u.a,{children:Object(C.jsx)(m.a,{children:Object(C.jsxs)(p.a,{children:[Object(C.jsx)(j.b,{to:"/create",children:Object(C.jsx)(g.a,{type:"button",variant:"primary",className:"mt-2 mr-2",children:"Create Employee"})}),Object(C.jsxs)(f.a,{striped:!0,bordered:!0,hover:!0,className:"mt-2",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"#"}),Object(C.jsx)("th",{children:"Name"}),Object(C.jsx)("th",{children:"User Name"}),Object(C.jsx)("th",{children:"Email Id"}),Object(C.jsx)("th",{children:"Phone"}),Object(C.jsx)("th",{className:"text-right",children:"Action"})]})}),Object(C.jsx)("tbody",{children:c.map((function(e,t){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:t+1}),Object(C.jsx)("td",{children:e.name}),Object(C.jsx)("td",{children:e.username}),Object(C.jsx)("td",{children:e.email}),Object(C.jsx)("td",{children:e.phone}),Object(C.jsxs)("td",{className:"text-right",children:[Object(C.jsx)(j.b,{to:"/edit/".concat(e.id),children:Object(C.jsx)(g.a,{className:"mr-2",variant:"outline-primary",children:"Edit"})}),Object(C.jsx)(g.a,{variant:"outline-danger",onClick:function(){return s(e.id)},children:"Delete"})]})]})}))})]})]})})})})]})},k=c(30),S=c(33);var E=function(){var e=Object(n.useState)({name:"",username:"",email:"",phone:""}),t=Object(b.a)(e,2),c=t[0],r=t[1],a=Object(l.f)(),s=c.name,i=c.username,x=c.email,f=c.phone,v=function(e){r(Object(S.a)(Object(S.a)({},c),{},Object(k.a)({},e.target.name,e.target.value))),console.log(c)},y=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,o.a.post("http://localhost:3003/users",c);case 3:a.push("/list");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(w,{}),Object(C.jsx)(O.a,{className:"mt-5",children:Object(C.jsx)(u.a,{children:Object(C.jsx)(m.a,{children:Object(C.jsxs)(p.a,{onSubmit:y,children:[Object(C.jsxs)(p.a.Group,{children:[Object(C.jsx)(p.a.Label,{children:"Name"}),Object(C.jsx)(p.a.Control,{type:"text",placeholder:"Enter your name",name:"name",value:s,onChange:v}),Object(C.jsx)(p.a.Text,{className:"text-muted"})]}),Object(C.jsxs)(p.a.Group,{className:"mt-2",children:[Object(C.jsx)(p.a.Label,{children:"Username"}),Object(C.jsx)(p.a.Control,{type:"text",placeholder:"Enter your username",name:"username",value:i,onChange:v})]}),Object(C.jsxs)(p.a.Group,{className:"mt-2",children:[Object(C.jsx)(p.a.Label,{children:"Email"}),Object(C.jsx)(p.a.Control,{type:"email",placeholder:"Enter your email",name:"email",value:x,onChange:v})]}),Object(C.jsxs)(p.a.Group,{className:"mt-2",children:[Object(C.jsx)(p.a.Label,{children:"Phone"}),Object(C.jsx)(p.a.Control,{type:"number",placeholder:"Enter your phone",name:"phone",value:f,onChange:v})]}),Object(C.jsx)(g.a,{variant:"primary",type:"submit",className:"mt-2 mr-2",children:"Submit"}),Object(C.jsx)(j.b,{to:"/list",children:Object(C.jsx)(g.a,{type:"button",variant:"warning",className:"mt-2 mr-2",children:"Go Back"})})]})})})})]})};var B=function(){var e=Object(n.useState)({name:"",username:"",email:"",phone:""}),t=Object(b.a)(e,2),c=t[0],r=t[1],a=c.name,s=c.username,i=c.email,x=c.phone,f=Object(l.g)().id,v=Object(l.f)();Object(n.useEffect)((function(){y()}),[]);var y=function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("http://localhost:3003/users/".concat(f));case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){r(Object(S.a)(Object(S.a)({},c),{},Object(k.a)({},e.target.name,e.target.value)))},E=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,o.a.put("http://localhost:3003/users/".concat(f),c);case 3:v.push("/list");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(w,{}),Object(C.jsx)(O.a,{className:"mt-5",children:Object(C.jsx)(u.a,{children:Object(C.jsx)(m.a,{children:Object(C.jsxs)(p.a,{onSubmit:E,children:[Object(C.jsxs)(p.a.Group,{controlId:"formBasicEmail",children:[Object(C.jsx)(p.a.Label,{children:"Name"}),Object(C.jsx)(p.a.Control,{type:"text",placeholder:"Enter your name",name:"name",value:a,onChange:N}),Object(C.jsx)(p.a.Text,{className:"text-muted"})]}),Object(C.jsxs)(p.a.Group,{className:"mt-2",children:[Object(C.jsx)(p.a.Label,{children:"Username"}),Object(C.jsx)(p.a.Control,{type:"text",placeholder:"Enter your username",name:"username",value:s,onChange:N})]}),Object(C.jsxs)(p.a.Group,{className:"mt-2",children:[Object(C.jsx)(p.a.Label,{children:"Email"}),Object(C.jsx)(p.a.Control,{type:"email",placeholder:"Enter your email",name:"email",value:i,onChange:N})]}),Object(C.jsxs)(p.a.Group,{className:"mt-2",children:[Object(C.jsx)(p.a.Label,{children:"Phone"}),Object(C.jsx)(p.a.Control,{type:"number",placeholder:"Enter your phone",name:"phone",value:x,onChange:N})]}),Object(C.jsx)(g.a,{variant:"primary",type:"submit",className:"mt-2 mr-2",children:"Submit"}),Object(C.jsx)(j.b,{to:"/list",children:Object(C.jsx)(g.a,{type:"button",variant:"warning",className:"mt-2 mr-2",children:"Go Back"})})]})})})})]})};var D=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(O.a,{className:"mt-5",children:Object(C.jsx)(u.a,{children:Object(C.jsx)(m.a,{children:Object(C.jsx)(p.a,{children:Object(C.jsxs)(f.a,{striped:!0,bordered:!0,hover:!0,children:[Object(C.jsxs)("thead",{children:[Object(C.jsx)("tr",{children:Object(C.jsx)("th",{colspan:"6",className:"text-center bg-dark text-white",children:"Sample React Applications (Beginner to Advanced)"})}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"#"}),Object(C.jsx)("th",{children:"Project Name"}),Object(C.jsx)("th",{children:"Description"}),Object(C.jsx)("th",{children:"Status"}),Object(C.jsx)("th",{children:"Difficulty Level"}),Object(C.jsx)("th",{className:"text-right",children:"Action"})]})]}),Object(C.jsxs)("tbody",{children:[Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"1"}),Object(C.jsx)("td",{children:"Simple Counter App"}),Object(C.jsx)("td",{children:"This was my first react task project"}),Object(C.jsx)("td",{children:"Completed"}),Object(C.jsx)("td",{children:"0.1/10 \ud83d\ude05"}),Object(C.jsx)("td",{className:"text-right",children:Object(C.jsx)(j.b,{to:"/counter",children:Object(C.jsx)(g.a,{variation:"warning",children:"View Demo"})})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"2"}),Object(C.jsx)("td",{children:"Calculator App"}),Object(C.jsx)("td",{children:"A calculator with all basic functionalities"}),Object(C.jsx)("td",{children:"Completed"}),Object(C.jsx)("td",{children:"2/10"}),Object(C.jsx)("td",{className:"text-right",children:Object(C.jsx)(j.b,{to:"/calculator",children:Object(C.jsx)(g.a,{variation:"warning",children:"View Demo"})})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"3"}),Object(C.jsx)("td",{children:"BMI calculator"}),Object(C.jsx)("td",{children:"works on Metric and Imperial as well"}),Object(C.jsx)("td",{children:"Completed"}),Object(C.jsx)("td",{children:"2.5/10"}),Object(C.jsx)("td",{className:"text-right",children:Object(C.jsx)(j.b,{to:"/bmi",children:Object(C.jsx)(g.a,{variation:"warning",children:"View Demo"})})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"4"}),Object(C.jsx)("td",{children:"Budget App"}),Object(C.jsx)("td",{children:"I'm storing date, price and description here"}),Object(C.jsx)("td",{children:"In Progress"}),Object(C.jsx)("td",{children:"3/10"}),Object(C.jsx)("td",{className:"text-right",children:Object(C.jsx)(j.b,{to:"/budget",children:Object(C.jsx)(g.a,{variation:"warning",children:"View Demo"})})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"5"}),Object(C.jsx)("td",{children:"Users CRUD"}),Object(C.jsx)("td",{children:"I've used fake json-server here as database and performing all operations there"}),Object(C.jsx)("td",{children:"Completed"}),Object(C.jsx)("td",{children:"3.4/10 \ud83e\udd13"}),Object(C.jsx)("td",{className:"text-right",children:Object(C.jsx)(j.b,{to:"/list",children:Object(C.jsx)(g.a,{variation:"warning",children:"View Demo"})})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"6"}),Object(C.jsx)("td",{children:"React Datatable"}),Object(C.jsx)("td",{children:"Will implement Datatable here"}),Object(C.jsx)("td",{children:"Planned"}),Object(C.jsx)("td",{children:"\ud83e\udd2b"}),Object(C.jsx)("td",{className:"text-right",children:Object(C.jsx)(g.a,{variation:"warning",children:"Coming Soon"})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"7"}),Object(C.jsx)("td",{children:"Form Repeater"}),Object(C.jsxs)("td",{children:["Will implement something like ",Object(C.jsx)("b",{children:'"ADD MORE"'})," on form fields"]}),Object(C.jsx)("td",{children:"Planned"}),Object(C.jsx)("td",{children:"\ud83e\udd2b"}),Object(C.jsx)("td",{className:"text-right",children:Object(C.jsx)(g.a,{variation:"warning",children:"Coming Soon"})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"8"}),Object(C.jsx)("td",{children:"Login & Register forms with validation"}),Object(C.jsx)("td",{children:"It will be same as real one"}),Object(C.jsx)("td",{children:"Planned"}),Object(C.jsx)("td",{children:"\ud83e\udd2b"}),Object(C.jsx)("td",{className:"text-right",children:Object(C.jsx)(g.a,{variation:"warning",children:"Coming Soon"})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"9"}),Object(C.jsx)("td",{children:"Will Work on modals, popups, sweet-alert, toast, select2, choosen"}),Object(C.jsx)("td",{children:"Will Work on modals, popups, sweet-alert, toast, select2, choosen"}),Object(C.jsx)("td",{children:"Planned"}),Object(C.jsx)("td",{children:"\ud83e\udd2b"}),Object(C.jsx)("td",{className:"text-right",children:Object(C.jsx)(g.a,{variation:"warning",children:"Coming Soon"})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"10"}),Object(C.jsx)("td",{children:"Working with localization"}),Object(C.jsx)("td",{children:"Will use multiple language support here "}),Object(C.jsx)("td",{children:"Planning"}),Object(C.jsx)("td",{children:"\ud83e\udde0"}),Object(C.jsx)("td",{className:"text-right",children:Object(C.jsx)(g.a,{variation:"warning",children:"Coming Soon"})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"11"}),Object(C.jsx)("td",{children:"Minor Project"}),Object(C.jsx)("td",{children:"still planning about it \ud83e\udd14 Do you have any suggestion ? \ud83d\ude0b"}),Object(C.jsx)("td",{children:"Planning"}),Object(C.jsx)("td",{children:"\ud83e\udd2b"}),Object(C.jsx)("td",{className:"text-right",children:Object(C.jsx)(g.a,{variation:"warning",children:"Coming Soon"})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"12"}),Object(C.jsx)("td",{children:"Major Project"}),Object(C.jsxs)("td",{children:["Will use ",Object(C.jsx)("b",{children:"REDUX"})," here "]}),Object(C.jsx)("td",{children:"Planning"}),Object(C.jsx)("td",{children:"\ud83e\udde0"}),Object(C.jsx)("td",{className:"text-right",children:Object(C.jsx)(g.a,{variation:"warning",children:"Coming Soon"})})]})]})]})})})})})})};var I=function(e){var t=Object(n.useState)(0),c=Object(b.a)(t,2),r=c[0],a=c[1],s={center:{display:"flex",justifyContent:"center",alignItems:"center"},mt:{marginTop:"30px"}};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(w,{}),Object(C.jsxs)(O.a,{children:[Object(C.jsx)(u.a,{style:s.mt,children:Object(C.jsxs)(m.a,{style:s.center,children:[Object(C.jsx)(g.a,{variant:"primary",onClick:function(){a(r=(r-=1)<=0?0:r)},children:"-"}),Object(C.jsx)(p.a.Control,{type:"number",placeholder:"Counter",value:r}),Object(C.jsx)(g.a,{variant:"primary",onClick:function(){a(r+=1)},children:"+"})]})}),Object(C.jsx)(u.a,{children:Object(C.jsxs)(m.a,{children:["The Value of counter is : ",r]})})]})]})},L=(c(99),function(e){return Object(C.jsx)("div",{className:"button-wrapper ".concat((t=e.children,isNaN(t)&&"."!==t&&"="!==t?"operator":null)),onClick:function(){e.handleClick(e.children)},children:e.children});var t}),G=c(116);var P=function(e){var t=Object(n.useState)(0),c=Object(b.a)(t,2),r=c[0],a=c[1],s={app:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100%"},calcWrapper:{width:"400px",height:"600px"},row:{display:"flex",width:"100%"},clearBtn:{height:"4em",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"lighter",fontSize:"1.4em",backgroundColor:"#c5c3cd",color:"#000000",flex:1,outline:"1px solid #888888"}},j=function(e){a((r=0===r?"":r)+e)};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(w,{}),Object(C.jsx)("div",{style:s.app,children:Object(C.jsxs)("div",{style:s.calcWrapper,children:[Object(C.jsx)("div",{className:"input",children:r}),Object(C.jsxs)("div",{style:s.row,children:[Object(C.jsx)(L,{handleClick:j,children:"7"}),Object(C.jsx)(L,{handleClick:j,children:"8"}),Object(C.jsx)(L,{handleClick:j,children:"9"}),Object(C.jsx)(L,{handleClick:j,children:"/"})]}),Object(C.jsxs)("div",{style:s.row,children:[Object(C.jsx)(L,{handleClick:j,children:"4"}),Object(C.jsx)(L,{handleClick:j,children:"5"}),Object(C.jsx)(L,{handleClick:j,children:"6"}),Object(C.jsx)(L,{handleClick:j,children:"*"})]}),Object(C.jsxs)("div",{style:s.row,children:[Object(C.jsx)(L,{handleClick:j,children:"1"}),Object(C.jsx)(L,{handleClick:j,children:"2"}),Object(C.jsx)(L,{handleClick:j,children:"3"}),Object(C.jsx)(L,{handleClick:j,children:"+"})]}),Object(C.jsxs)("div",{style:s.row,children:[Object(C.jsx)(L,{handleClick:j,children:"."}),Object(C.jsx)(L,{handleClick:j,children:"0"}),Object(C.jsx)(L,{handleClick:function(e){a(Object(G.a)(r))},children:"="}),Object(C.jsx)(L,{handleClick:j,children:"-"})]}),Object(C.jsx)("div",{style:s.row,onClick:function(){a(0)},children:Object(C.jsx)("div",{style:s.clearBtn,children:"Clear All"})})]})})]})};var A=function(){var e=Object(n.useState)("metric"),t=Object(b.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(0),s=Object(b.a)(a,2),j=s[0],l=s[1],i=Object(n.useState)(0),d=Object(b.a)(i,2),h=d[0],x=d[1],o=Object(n.useState)(0),v=Object(b.a)(o,2),y=v[0],N=v[1],k={center:{display:"flex",justifyContent:"center",alignItems:"center"},mt:{marginTop:"5%"},mt2:{marginTop:"15px"},ml2:{marginLeft:"15px"}};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(w,{}),Object(C.jsxs)(O.a,{style:k.mt,children:[Object(C.jsxs)(u.a,{children:[Object(C.jsx)(m.a,{lg:6,children:Object(C.jsxs)(p.a,{children:[Object(C.jsxs)(p.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(C.jsx)(p.a.Label,{children:"Units"}),Object(C.jsxs)(p.a.Control,{as:"select",onChange:function(e){e.preventDefault(),r(e.target.value)},children:[Object(C.jsx)("option",{value:"metric",children:"Metric"}),Object(C.jsx)("option",{value:"imperial",children:"Imperial"})]})]}),Object(C.jsxs)(p.a.Group,{controlId:"formBasicEmail",style:k.mt2,children:[Object(C.jsx)(p.a.Label,{children:"Weight (KG)"}),Object(C.jsx)(p.a.Control,{name:"weight",type:"number",placeholder:"Enter Weight",value:h,onChange:function(e){e.preventDefault(),x(e.target.value)}})]}),Object(C.jsxs)(p.a.Group,{controlId:"formBasicPassword",style:k.mt2,children:[Object(C.jsx)(p.a.Label,{children:"Height (CM)"}),Object(C.jsx)(p.a.Control,{name:"height",type:"number",placeholder:"Enter Height",value:j,onChange:function(e){e.preventDefault(),l(e.target.value)}})]}),Object(C.jsx)(g.a,{variant:"primary",type:"submit",style:k.mt2,onClick:function(e){e.preventDefault();var t="metric"===c?Object(G.a)(h/j):Object(G.a)(703*h/j);N(Math.round(t))},children:"Calculate"}),Object(C.jsx)(g.a,{style:k.mt2,variant:"danger",type:"button",onClick:function(e){e.preventDefault(),r("metric"),l(0),x(0),N(0)},children:"Clear"})]})}),Object(C.jsx)(m.a,{lg:6,children:Object(C.jsxs)(f.a,{children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"BMI"}),Object(C.jsx)("th",{children:"BMI Category"})]})}),Object(C.jsxs)("tbody",{children:[Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Less than 15"}),Object(C.jsx)("td",{children:"Very severely underweight"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Between 15 and 16"}),Object(C.jsx)("td",{children:"Severely underweight"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Between 16 and 18.5"}),Object(C.jsx)("td",{children:"underweight"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Between 18.5 and 25"}),Object(C.jsx)("td",{children:"Normal (healthy weight)"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Between 25 and 30"}),Object(C.jsx)("td",{children:"underweight"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Between 30 and 35"}),Object(C.jsx)("td",{children:"Moderately obese"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Between 35 and 40"}),Object(C.jsx)("td",{children:"Severely obese"})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"Over 40"}),Object(C.jsx)("td",{children:"Very severely obese"})]})]})]})})]}),Object(C.jsx)(u.a,{children:Object(C.jsxs)("h5",{className:"text-center mt-3",children:["Your BMI value is ",y]})})]})]})},F=c(115);c(108);var M=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(w,{}),Object(C.jsx)(O.a,{children:Object(C.jsx)(u.a,{children:Object(C.jsxs)(m.a,{children:[Object(C.jsx)(F.a,{fluid:!0,className:"jumbotron-form",children:Object(C.jsxs)(O.a,{children:[Object(C.jsxs)(u.a,{children:[Object(C.jsx)(m.a,{children:Object(C.jsxs)(p.a.Group,{controlId:"title",children:[Object(C.jsx)(p.a.Label,{children:"Title"}),Object(C.jsx)(p.a.Control,{type:"text",placeholder:"Enter title"})]})}),Object(C.jsx)(m.a,{children:Object(C.jsxs)(p.a.Group,{controlId:"amount",children:[Object(C.jsx)(p.a.Label,{children:"Amount"}),Object(C.jsx)(p.a.Control,{type:"number",placeholder:"Enter amount"})]})}),Object(C.jsx)(m.a,{children:Object(C.jsxs)(p.a.Group,{controlId:"date",children:[Object(C.jsx)(p.a.Label,{children:"Date"}),Object(C.jsx)(p.a.Control,{type:"date",placeholder:"Enter date"})]})})]}),Object(C.jsx)(m.a,{children:Object(C.jsx)(g.a,{variant:"primary",className:"expense-btn",type:"submit",children:"Add Expense"})})]})}),Object(C.jsx)(F.a,{fluid:!0,className:"jumbotron-list",children:Object(C.jsxs)(O.a,{children:[Object(C.jsxs)(u.a,{children:[Object(C.jsx)(m.a,{className:"d-flex",children:Object(C.jsx)("h4",{children:"Filter By Year"})}),Object(C.jsx)(m.a,{className:"d-flex flex-row-reverse",children:Object(C.jsx)(p.a.Group,{className:"year-filter",children:Object(C.jsxs)(p.a.Control,{as:"select",children:[Object(C.jsx)("option",{children:"2021"}),Object(C.jsx)("option",{children:"2020"}),Object(C.jsx)("option",{children:"2019"}),Object(C.jsx)("option",{children:"2018"}),Object(C.jsx)("option",{children:"2017"})]})})})]}),Object(C.jsx)(u.a,{children:Object(C.jsx)(m.a,{className:"budget-data-content",children:Object(C.jsx)(O.a,{children:Object(C.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(C.jsxs)("div",{className:"budget-date",children:[Object(C.jsx)("div",{className:"text-center text-bold",children:"March"}),Object(C.jsx)("div",{className:"text-center p-0",children:"2021"}),Object(C.jsx)("h2",{className:"text-center",children:"12"})]}),Object(C.jsx)("div",{className:"pl-30",children:"this ia hbfhd sbasdkjgsjak sakgsadjhk dsbgsjhda bgsjgab kgjsabbgahsuk suobr qugrbeugkbsuearkabf aukhgfb ausbuasbf sudjhfbsuyfhbsdku fbsdufbsdufbsdb afbsdgabfjhs s ubsady sdy sadh fgysdyay"}),Object(C.jsx)("div",{className:"budget-price",children:"$1111.00"})]})})})})]})})]})})})]})};var W=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(j.a,{children:Object(C.jsxs)(l.c,{children:[Object(C.jsx)(l.a,{path:"/counter",children:Object(C.jsx)(I,{})}),Object(C.jsx)(l.a,{path:"/calculator",children:Object(C.jsx)(P,{})}),Object(C.jsx)(l.a,{path:"/bmi",children:Object(C.jsx)(A,{})}),Object(C.jsx)(l.a,{path:"/budget",children:Object(C.jsx)(M,{})}),Object(C.jsx)(l.a,{path:"/list",children:Object(C.jsx)(N,{})}),Object(C.jsx)(l.a,{path:"/create",children:Object(C.jsx)(E,{})}),Object(C.jsx)(l.a,{path:"/edit/:id",children:Object(C.jsx)(B,{})}),Object(C.jsx)(l.a,{path:"/",children:Object(C.jsx)(D,{})})]})})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,120)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(W,{})}),document.getElementById("root")),T()},43:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},99:function(e,t,c){}},[[109,1,2]]]);
//# sourceMappingURL=main.c0dd7771.chunk.js.map