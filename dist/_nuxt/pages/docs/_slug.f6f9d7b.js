(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{210:function(t,e,r){"use strict";r.r(e);r(73),r(21);var n=r(3),c={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("docs",n.slug||"intro").fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){for(var t=document.getElementsByTagName("a"),e=window.location.href.split("?")[0].split("#")[0],i=0;i<t.length;i++){var r=t[i].getAttribute("href");r&&0===r.indexOf("#")&&(t[i].href=e+r)}}},o=r(2),component=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"prose prose-sm sm:prose lg:prose-lg xl:prose-xl",attrs:{id:"article"}},[e("h1",[this._v("\n    "+this._s(this.article.title)+"\n  ")]),this._v(" "),e("nuxt-content",{attrs:{document:this.article}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);