(function(e){function t(t){for(var r,a,u=t[0],i=t[1],b=t[2],l=0,v=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&v.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(v.length)v.shift()();return o.push.apply(o,b||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var b=0;b<u.length;b++)t(u[b]);var s=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"357b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={id:"nav"},o=Object(r["h"])("Events"),a=Object(r["h"])(" | "),u=Object(r["h"])("About");function i(e,t){var n=Object(r["y"])("router-link"),i=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",c,[Object(r["i"])(n,{to:{name:"EventList"}},{default:Object(r["D"])((function(){return[o]})),_:1}),a,Object(r["i"])(n,{to:{name:"About"}},{default:Object(r["D"])((function(){return[u]})),_:1})]),Object(r["i"])(i)],64)}n("d219");var b=n("6b0d"),s=n.n(b);const l={},v=s()(l,[["render",i]]);var d=v,f=n("6c02"),p=function(e){return Object(r["u"])("data-v-7978df24"),e=e(),Object(r["s"])(),e},j={class:"events"},O=p((function(){return Object(r["g"])("h1",null,"Events For Good",-1)}));function h(e,t,n,c,o,a){var u=Object(r["y"])("EventCard");return Object(r["r"])(),Object(r["f"])("div",j,[O,(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(o.events,(function(e){return Object(r["r"])(),Object(r["d"])(u,{key:e.id,event:e},null,8,["event"])})),128))])}var g={class:"event-card"};function y(e,t,n,c,o,a){var u=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["d"])(u,{class:"event-link",to:{name:"EventDetails",params:{id:n.event.id}}},{default:Object(r["D"])((function(){return[Object(r["g"])("div",g,[Object(r["g"])("span",null,"@ "+Object(r["A"])(n.event.time)+" on "+Object(r["A"])(n.event.date),1),Object(r["g"])("h4",null,Object(r["A"])(n.event.title),1)])]})),_:1},8,["to"])}var m={name:"EventCard",props:{event:Object}};n("bbca");const E=s()(m,[["render",y],["__scopeId","data-v-34b2abcc"]]);var _=E,w=n("bc3a"),A=n.n(w),k=A.a.create({baseURL:"https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),P={getEvents:function(){return k.get("/events")},getEvent:function(e){return k.get("events/"+e)}},x={name:"EventList",components:{EventCard:_},data:function(){return{events:null}},created:function(){var e=this;P.getEvents().then((function(t){e.events=t.data})).catch((function(e){console.log(e)}))}};n("f56e");const C=s()(x,[["render",h],["__scopeId","data-v-7978df24"]]);var D=C,S={class:"about"},L=Object(r["g"])("h1",null,"A site for events to better the world",-1),M=[L];function T(e,t){return Object(r["r"])(),Object(r["f"])("div",S,M)}const I={},J=s()(I,[["render",T]]);var R=J,F=(n("a4d3"),n("e01a"),{key:0});function G(e,t,n,c,o,a){return o.event?(Object(r["r"])(),Object(r["f"])("div",F,[Object(r["g"])("h1",null,Object(r["A"])(o.event.title),1),Object(r["g"])("p",null,Object(r["A"])(o.event.time)+" on "+Object(r["A"])(o.event.date),1),Object(r["g"])("p",null,Object(r["A"])(o.event.description),1)])):Object(r["e"])("",!0)}var U={props:["id"],data:function(){return{event:null}},created:function(){var e=this;P.getEvent(this.id).then((function(t){e.event=t.data})).catch((function(e){console.log(e)}))}};const V=s()(U,[["render",G]]);var W=V,q=[{path:"/",name:"EventList",component:D},{path:"/about",name:"About",component:R},{path:"/event/:id",name:"EventDetails",props:!0,component:W}],z=Object(f["a"])({history:Object(f["b"])("/"),routes:q}),B=z,H=n("5502"),K=Object(H["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(d).use(K).use(B).mount("#app")},b18b:function(e,t,n){},b4cb:function(e,t,n){},bbca:function(e,t,n){"use strict";n("b18b")},d219:function(e,t,n){"use strict";n("357b")},f56e:function(e,t,n){"use strict";n("b4cb")}});
//# sourceMappingURL=app.e34d7a31.js.map