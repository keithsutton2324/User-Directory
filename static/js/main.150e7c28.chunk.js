(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(16),s=n.n(a),i=(n(22),n.p,n(23),n(3)),o=n(4),l=n(6),h=n(5),j=n(17),u=n.n(j),d=n(0);var p=function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.firstname}),Object(d.jsx)("td",{children:e.lastname}),Object(d.jsx)("td",{children:e.gender}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("img",{src:e.picture})]})},m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={searchString:""},e.getInput=function(t){var n=t.target.value;e.setState({searchString:n}),console.log(e.state.searchString)},e.searchEmployee=function(){e.props.handleSearch(e.state.searchString)},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",onChange:this.getInput,name:"searchStr",value:this.state.searchString}),Object(d.jsx)("button",{onClick:this.searchEmployee,children:"Search Employee"}),Object(d.jsx)("input",{type:"text",onChange:this.getInput,name:"searchStr",value:this.state.searchString}),Object(d.jsx)("button",{onClick:this.searchEmployee,children:"Sort Employees"})]})}}]),n}(c.a.Component),b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={employeeRecords:[],masterEmployeeRecords:[]},e.componentDidMount=function(){u.a.get("https://randomuser.me/api/?results=200&nat=us").then((function(t){var n=t.data.results;console.log("API",n);for(var r=[],c=0;c<n.length;c++)r.push({firstname:n[c].name.first,lastname:n[c].name.last,gender:n[c].gender,email:n[c].email,picture:n[c].picture.thumbnail});e.setState({employeeRecords:r,masterEmployeeRecords:r}),console.log(e.state.employeeRecords)}))},e.handleSearchEmployee=function(t){console.log(t);for(var n=[],r=e.state.masterEmployeeRecords,c=0;c<r.length;c++)r[c].firstname.toUpperCase()!=t.toUpperCase()&&r[c].lastname.toUpperCase()!=t.toUpperCase()||n.push(r[c]);e.setState({employeeRecords:n})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Employee Directory"}),Object(d.jsx)(m,{handleSearch:this.handleSearchEmployee}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Firstname"}),Object(d.jsx)("th",{children:"Lastname"}),Object(d.jsx)("th",{children:"Gender"}),Object(d.jsx)("th",{children:"Email"}),Object(d.jsx)("th",{children:"Picture"})]})}),Object(d.jsx)("tbody",{children:this.state.employeeRecords.map((function(e,t){return Object(d.jsx)(p,{firstname:e.firstname,lastname:e.lastname,gender:e.gender,email:e.email,picture:e.picture},t)}))})]})]})}}]),n}(c.a.Component);var O=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(b,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),g()}},[[43,1,2]]]);
//# sourceMappingURL=main.150e7c28.chunk.js.map