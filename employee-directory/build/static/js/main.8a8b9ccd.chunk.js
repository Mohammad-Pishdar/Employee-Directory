(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},39:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),s=a(2),o=function(e){var t=e.users,a=e.updateUsers,c=Object(n.useState)(""),l=Object(s.a)(c,2),o=l[0],u=l[1];return Object(n.useEffect)((function(){var e=""===o?t:t.filter((function(e){return e.name.last.toLowerCase().indexOf(o.toLowerCase())>=0}));a(e)}),[a,o,t]),r.a.createElement("input",{className:"mb-3 w-25 border border-success rounded",value:o,onChange:function(e){return u(e.target.value)}})},u=a(16),m=function(e){var t=e.users,a=Object(n.useState)([]),c=Object(s.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){return o(t)}),[t]),r.a.createElement("div",{className:"w-100"},r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{style:{cursor:"pointer"},scope:"col",onClick:function(){var e=Object(u.a)(t).sort((function(e,t){var a=e.name.last,n=t.name.last;return a<n?-1:a>n?1:0}));o(e)}},"Surname (click to order alphabeticaly)"),r.a.createElement("th",{scope:"col"},"Gender"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"Mobile"),r.a.createElement("th",{scope:"col"},"City"),r.a.createElement("th",{scope:"col"},"State"),r.a.createElement("th",{scope:"col"},"Postcode"),r.a.createElement("th",{scope:"col"},"Picture"))),r.a.createElement("tbody",null,l.map((function(e){var t=e.location,a=t.city,n=t.state,c=t.postcode,l=e.picture.thumbnail,s=e.cell,o=e.gender,u=e.email,m=e.name,i=m.first,E=m.last;return r.a.createElement("tr",{key:u},r.a.createElement("td",null,i),r.a.createElement("th",null,E),r.a.createElement("td",null,o),r.a.createElement("td",null,u),r.a.createElement("td",null,s),r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,c),r.a.createElement("td",null,r.a.createElement("img",{src:l,alt:"employee"})))})))))},i=a(15),E=a.n(i);a(39);var d=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),u=Object(s.a)(l,2),i=u[0],d=u[1];return Object(n.useEffect)((function(){E.a.get("https://randomuser.me/api/?results=200&nat=au").then((function(e){var t=e.data.results;return c(t)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"bg-primary"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("p",null,"To filter by surname, please begin your search in the user input below"),r.a.createElement(o,{users:a,updateUsers:d})),r.a.createElement(m,{users:i}))};a(40);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.8a8b9ccd.chunk.js.map