(this.webpackJsonptoskaboiler=this.webpackJsonptoskaboiler||[]).push([[7],{290:function(e,t,n){"use strict";n.r(t);var a=n(221),r=n.n(a),s=n(222),i=n(16),c=n(0),u=n(204),o=n(206),l=n(172),d=n(289),b=n(293),j=n(294),f=n(292),m=n(291),g=n(295),v=n(262),h=n.n(v),p=n(227),O=n(267),k=n(57),x=n(243),w=n.n(x),y=n(92),U=n(81),_=n(82),A=n(261),L=n.n(A).a.namespace("toskaboiler"),N={username:"mluukkai",firstName:"Matti",lastName:"Luukkainen",email:"matti.luukkainen@helsinki.fi"},I=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.fallbackUser,a=void 0===n?N:n;Object(U.a)(this,e),this.fallbackUser=a}return Object(_.a)(e,[{key:"getUser",value:function(){var e;return null!==(e=L.get("mockUser"))&&void 0!==e?e:this.fallbackUser}},{key:"getHeaders",value:function(){var e=this.getUser();return{uid:e.username,givenname:e.firstName,sn:e.lastName,mail:e.email}}},{key:"setUser",value:function(e){L.set("mockUser",e),window.location.reload()}}]),e}(),H=new I;window.__mockUser__=H;var S=H,M=new(function(){function e(){Object(U.a)(this,e)}return Object(_.a)(e,[{key:"login",value:function(e){L.set("adminLoggedInAs",e),window.location.reload()}},{key:"clear",value:function(){L.remove("adminLoggedInAs"),window.location.reload()}},{key:"getUsername",value:function(){return L.get("adminLoggedInAs")}},{key:"getHeaders",value:function(){var e=this.getUsername();return e?{"x-admin-logged-in-as":e}:{}}}]),e}());window.__loginAs__=M;var P=M,q=w.a.create({baseURL:"".concat(y.BASE_PATH,"/api")});q.interceptors.request.use((function(e){var t=Object(p.a)(Object(p.a)(Object(p.a)({},e.headers),y.IN_PRODUCTION?{}:S.getHeaders()),P.getHeaders());return Object(p.a)(Object(p.a)({},e),{},{headers:t})}));var C=q,D=["data"],J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="messages",n=function(){var e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("/messages");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=Object(k.useQuery)(t,n,e),i=a.data,c=Object(O.a)(a,D);return Object(p.a)({messages:i},c)},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post("/messages",t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=Object(k.useMutation)(t,e);return n},T=n(61),B=n(2);t.default=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],v=J(),p=v.messages,O=v.isLoading,k=v.refetch,x=R(),w=x.mutateAsync,y=x.isLoading;if(O)return Object(B.jsx)(T.a,{});var U=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,w({message:n});case 4:a(""),k(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(u.a,{component:"h1",variant:"h4",mb:2,children:"Messages"}),Object(B.jsxs)(o.a,{children:[Object(B.jsx)(l.a,{p:2,children:Object(B.jsx)("form",{onSubmit:U,disabled:y,children:Object(B.jsx)(d.a,{label:"Message",value:n,disabled:y,onChange:function(e){return a(e.target.value)},InputProps:{endAdornment:Object(B.jsx)(b.a,{position:"end",children:Object(B.jsx)(j.a,{type:"submit",color:"primary",disabled:y,children:Object(B.jsx)(h.a,{})})})},fullWidth:!0,required:!0})})}),0===p.length&&Object(B.jsx)(u.a,{color:"textSecondary",align:"center",children:"No messages yet. Send a message!"}),Object(B.jsx)(f.a,{children:p.map((function(e,t){return Object(B.jsx)(m.a,{divider:t<p.length-1,children:Object(B.jsx)(g.a,{primary:e.body})},e.id)}))})]})]})}}}]);
//# sourceMappingURL=7.37b9c02d.chunk.js.map