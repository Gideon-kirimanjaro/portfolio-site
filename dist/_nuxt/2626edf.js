/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11,12],{273:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},384:function(e,t,n){e.exports=function(){"use strict";return function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" @keyframes moveSlideshow { 100% { transform: translateX(-50%); } } .vifnslb-container[data-v-2964abc9] { width: 100%; overflow: hidden; } .vifnslb-element[data-v-2964abc9] { transform: translate3d(0, 0, 0); /* Hey browser, please use my GPU */ position: relative; overflow: hidden; animation-name: moveSlideshow; animation-iteration-count: infinite; animation-timing-function: linear; display: flex; width: max-content; min-width: 200%; } .vifnslb-bar[data-v-2964abc9] { width: 50%; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}(),{_scopeId:"data-v-2964abc9",name:"vue-infinite-slide-bar",props:{barStyle:Object,duration:{type:String,default:"12s"},direction:{type:String,default:"normal"},delay:{type:String,default:"0s"}},computed:{customStyle:function(){return Object.assign({},this.barStyle,{"animation-duration":this.duration,"animation-direction":this.direction,"animation-delay":this.delay})}},render:function(e){var t=e("div",{class:"vifnslb-bar"},this.$slots.default);return e("div",{class:["vifnslb-container"]},[e("div",{class:["vifnslb-element"],style:this.customStyle},[t,t])])}}}()},391:function(e,t,n){"use strict";const r={_origin:"https://api.emailjs.com"},o=(e,t,n)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class d{constructor(e){this.status=e.status,this.text=e.responseText}}const c=(e,data,t={})=>new Promise(((n,o)=>{const c=new XMLHttpRequest;c.addEventListener("load",(({target:e})=>{const t=new d(e);200===t.status||"OK"===t.text?n(t):o(t)})),c.addEventListener("error",(({target:e})=>{o(new d(e))})),c.open("POST",r._origin+e,!0),Object.keys(t).forEach((e=>{c.setRequestHeader(e,t[e])})),c.send(data)}));t.a={init:(e,t="https://api.emailjs.com")=>{r._userID=e,r._origin=t},send:(e,t,n,d)=>{const l=d||r._userID;o(l,e,t);const m={lib_version:"3.4.0",user_id:l,service_id:e,template_id:t,template_params:n};return c("/api/v1.0/email/send",JSON.stringify(m),{"Content-type":"application/json"})},sendForm:(e,t,form,n)=>{const d=n||r._userID,l=(form=>{let e;if(e="string"==typeof form?document.querySelector(form):form,!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e})(form);o(d,e,t);const m=new FormData(l);return m.append("lib_version","3.4.0"),m.append("service_id",e),m.append("template_id",t),m.append("user_id",d),c("/api/v1.0/email/send-form",m)}}}}]);