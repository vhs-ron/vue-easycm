!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("VueEasyCm",[],e):"object"==typeof exports?exports.VueEasyCm=e():t.VueEasyCm=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,i){"use strict";e.a={name:"EasyCm",data:function(){return{importedFA5:!1,show:!1,axis:{x:0,y:0}}},props:{tag:{},list:{required:!0},underline:{default:!1},arrow:{default:!1},border:{default:!0},itemWidth:{default:140},itemHeight:{default:36},itemSize:{default:14},offset:{default:function(){return{x:6,y:2}}},borderWidth:{default:6},FA5:{default:!1}},created:function(){this.importedFA5=this.FA5},mounted:function(){var t=this;this.$root.$on("easyAxis",function(e){e.tag==t.tag&&(t.show=!0,t.axis=e)}),document.addEventListener("click",function(){t.show=!1},!0)},watch:{axis:function(){if(this.border){var t=document.body.offsetWidth,e=document.body.offsetHeight;this.axis.x+this.offset.x+this.itemWidth>=t&&(this.axis.x=t-this.itemWidth-this.borderWidth-this.offset.x),this.axis.y+this.offset.y+this.itemHeight*this.list.length>=e&&(this.axis.y=e-this.itemHeight*this.list.length-this.borderWidth-this.offset.y)}}},computed:{axisComputed:function(){return{top:this.axis.y+this.offset.y+"px",left:this.axis.x+this.offset.x+"px"}},liStyle:function(){return{width:this.itemWidth+"px",height:this.itemHeight+"px",lineHeight:this.itemHeight+"px",fontSize:this.itemSize+"px"}},firstLeft:function(){var t=document.body.offsetWidth;return this.axis.x+2*this.itemWidth>=t},secondLeft:function(){var t=document.body.offsetWidth;return this.axis.x+3*this.itemWidth>=t}},methods:{secondBorderCheck:function(t){var e=document.body.offsetWidth,i=document.body.offsetHeight,n=this.axis.y+(t+this.list[t].children.length)*this.itemHeight;return{left:this.axis.x+2*this.itemWidth>=e?"-100%":"100%",top:i>=n?0:-(this.list[t].children.length-1)*this.itemHeight+"px"}},thirdBorderCheck:function(t,e){var i=document.body.offsetWidth,n=document.body.offsetHeight,o=this.axis.y+this.list[t].children[e].children.length*this.itemHeight+(t+e)*this.itemHeight+parseInt(this.secondBorderCheck(t).top);return{left:this.axis.x+3*this.itemWidth>=i?"-100%":"100%",top:o>n?-(this.list[t].children[e].children.length-1)*this.itemHeight+"px":0}},callback:function(t){this.$emit("actionCallback",t)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(2),o={install:function(t){t.component("easy-cm",n.a),t.prototype.$easycm=function(t,e,i){t.stopPropagation(),t.preventDefault(),e.$emit("easyAxis",{tag:i,x:t.clientX,y:t.clientY})}}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,i){"use strict";function n(t){i(3)}var o=i(0),s=i(9),r=i(8),a=n,c=r(o.a,s.a,!1,a,"data-v-27c18c82",null);e.a=c.exports},function(t,e,i){var n=i(4);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(6)("51b61d28",n,!0,{})},function(t,e,i){e=t.exports=i(5)(!1),e.push([t.i,'.icon[data-v-27c18c82]{width:.9em;height:.9em;vertical-align:-.15em;fill:currentColor;overflow:hidden;position:absolute;right:0;top:50%;transform:translateY(-50%)}.cm-container[data-v-27c18c82]{position:fixed;user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;z-index:9999}.cm-ul[data-v-27c18c82]{width:100%;padding:0;margin:0;list-style:none;box-shadow:0 0 1px #666;background-color:#fff;color:#2e2e2e}.cm-ul li[data-v-27c18c82]{width:100%;box-sizing:border-box;text-align:left;position:relative;cursor:pointer}.cm-ul li:hover>ul[data-v-27c18c82]{display:block}.cm-ul li div[data-v-27c18c82]{display:inline-block;box-sizing:border-box;width:100%;height:100%;padding:0 .8em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative}.cm-ul li i[data-v-27c18c82]{display:inline-block;width:1em;font-size:1.3em;text-align:center}.cm-ul li div[data-v-27c18c82]:hover{background-color:#666;color:#fff}.cm-ul-2[data-v-27c18c82],.cm-ul-3[data-v-27c18c82]{position:absolute;top:0;display:none;z-index:10000}.cm-left svg[data-v-27c18c82]{transform:translateY(-50%) rotate(180deg);left:0}.cm-separator div[data-v-27c18c82]:after,.cm-underline li div[data-v-27c18c82]:after{content:"";width:90%;position:absolute;left:5%;top:0;height:1px;background-color:#ccc;z-index:10001}.cm-separator div[data-v-27c18c82]:hover:after,.cm-underline>li:first-child>div[data-v-27c18c82]:after,.cm-underline li div[data-v-27c18c82]:hover:after{display:none}',""])},function(t,e){function i(t,e){var i=t[1]||"",o=t[3];if(!o)return i;if(e&&"function"==typeof btoa){var s=n(o);return[i].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([s]).join("\n")}return[i].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=i(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(n[s]=!0)}for(o=0;o<t.length;o++){var r=t[o];"number"==typeof r[0]&&n[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),e.push(r))}},e}},function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=l[i.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](i.parts[o]);for(;o<i.parts.length;o++)n.parts.push(s(i.parts[o]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var r=[],o=0;o<i.parts.length;o++)r.push(s(i.parts[o]));l[i.id]={id:i.id,refs:1,parts:r}}}}function o(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function s(t){var e,i,n=document.querySelector("style["+x+'~="'+t.id+'"]');if(n){if(p)return m;n.parentNode.removeChild(n)}if(g){var s=h++;n=f||(f=o()),e=r.bind(null,n,s,!1),i=r.bind(null,n,s,!0)}else n=o(),e=a.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function r(t,e,i,n){var o=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var s=document.createTextNode(o),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}function a(t,e){var i=e.css,n=e.media,o=e.sourceMap;if(n&&t.setAttribute("media",n),v.ssrId&&t.setAttribute(x,e.id),o&&(i+="\n/*# sourceURL="+o.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=i(7),l={},u=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,p=!1,m=function(){},v=null,x="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i,o){p=i,v=o||{};var s=d(t,e);return n(s),function(e){for(var i=[],o=0;o<s.length;o++){var r=s[o],a=l[r.id];a.refs--,i.push(a)}e?(s=d(t,e),n(s)):s=[];for(var o=0;o<i.length;o++){var a=i[o];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete l[a.id]}}}};var y=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],n={},o=0;o<e.length;o++){var s=e[o],r=s[0],a=s[1],c=s[2],d=s[3],l={id:t+":"+o,css:a,media:c,sourceMap:d};n[r]?n[r].parts.push(l):i.push(n[r]={id:r,parts:[l]})}return i}},function(t,e){t.exports=function(t,e,i,n,o,s){var r,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(r=t,a=t.default);var d="function"==typeof a?a.options:a;e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),i&&(d.functional=!0),o&&(d._scopeId=o);var l;if(s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=l):n&&(l=n),l){var u=d.functional,f=u?d.render:d.beforeCreate;u?(d._injectStyles=l,d.render=function(t,e){return l.call(e),f(t,e)}):d.beforeCreate=f?[].concat(f,l):[l]}return{esModule:r,exports:a,options:d}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("div",{staticClass:"cm-container",style:t.axisComputed},[i("svg",{staticStyle:{position:"absolute",width:"0px",height:"0px",overflow:"hidden"},attrs:{"aria-hidden":"true"}},[i("symbol",{attrs:{id:"icon-youjiantou",viewBox:"0 0 1024 1024"}},[i("path",{attrs:{d:"M288.791335 65.582671l446.41733 446.417329-446.41733 446.417329z"}})])]),t._v(" "),i("ul",{staticClass:"cm-ul cm-ul-1 easy-cm-ul",class:t.underline?"cm-underline":""},t._l(t.list,function(e,n){return i("li",{key:"level1-"+n,class:e.separator?"cm-separator":"",style:t.liStyle},[e.children&&!e.action?i("div",{class:t.firstLeft?"cm-left":""},[t.importedFA5||void 0===e.icon?t._e():i("i",{class:e.icon}),t._v(" "),t.importedFA5&&void 0!==e.icon?i("font-awesome-icon",{class:e.class,attrs:{icon:e.icon}}):t._e(),t._v(" "),i("span",{domProps:{textContent:t._s(e.text)}}),t._v(" "),i("font-awesome-icon",{attrs:{icon:"caret-right"}})],1):e.children&&e.action?i("div",{class:t.firstLeft?"cm-left":"",on:{click:function(i){return i.stopPropagation(),t.callback({action:e.action,data:e.data})}}},[t.importedFA5||void 0===e.icon?t._e():i("i",{class:e.icon}),t._v(" "),t.importedFA5&&void 0!==e.icon?i("font-awesome-icon",{class:e.class,attrs:{icon:e.icon}}):t._e(),t._v(" "),i("span",{domProps:{textContent:t._s(e.text)}}),t._v(" "),i("font-awesome-icon",{attrs:{icon:"caret-right"}})],1):i("div",{class:t.firstLeft?"cm-left":"",on:{click:function(i){return i.stopPropagation(),t.callback({action:e.action,data:e.data})}}},[t.importedFA5||void 0===e.icon?t._e():i("i",{class:e.icon}),t._v(" "),t.importedFA5&&void 0!==e.icon?i("font-awesome-icon",{class:e.class,attrs:{icon:e.icon}}):t._e(),t._v(" "),i("span",{domProps:{textContent:t._s(e.text)}})],1),t._v(" "),e.children&&e.children.length>0?i("ul",{staticClass:"cm-ul cm-ul-2 easy-cm-ul",class:t.underline?"cm-underline":"",style:t.secondBorderCheck(n)},t._l(e.children,function(o,s){return i("li",{key:"level2-"+s,class:e.separator?"cm-separator":"",style:t.liStyle},[o.children&&!o.action?i("div",{class:t.secondLeft?"cm-left":""},[t.importedFA5||void 0===o.icon?t._e():i("i",{class:o.icon}),t._v(" "),t.importedFA5&&void 0!==o.icon?i("font-awesome-icon",{class:o.class,attrs:{icon:o.icon}}):t._e(),t._v(" "),i("span",{domProps:{textContent:t._s(o.text)}}),t._v(" "),i("font-awesome-icon",{attrs:{icon:"caret-right"}})],1):o.children&&o.action?i("div",{class:t.secondLeft?"cm-left":"",on:{click:function(e){return e.stopPropagation(),t.callback({action:o.action,data:o.data})}}},[t.importedFA5||void 0===o.icon?t._e():i("i",{class:o.icon}),t._v(" "),t.importedFA5&&void 0!==o.icon?i("font-awesome-icon",{class:o.class,attrs:{icon:o.icon}}):t._e(),t._v(" "),i("span",{domProps:{textContent:t._s(o.text)}}),t._v(" "),i("font-awesome-icon",{attrs:{icon:"caret-right"}})],1):i("div",{class:t.secondLeft?"cm-left":"",on:{click:function(e){return e.stopPropagation(),t.callback({action:o.action,data:o.data})}}},[t.importedFA5||void 0===o.icon?t._e():i("i",{class:o.icon}),t._v(" "),t.importedFA5&&void 0!==o.icon?i("font-awesome-icon",{class:o.class,attrs:{icon:o.icon}}):t._e(),t._v(" "),i("span",{domProps:{textContent:t._s(o.text)}})],1),t._v(" "),o.children&&o.children.length>0?i("ul",{staticClass:"cm-ul cm-ul-3 easy-cm-ul",class:t.underline?"cm-underline":"",style:t.thirdBorderCheck(n,s)},t._l(o.children,function(n,o){return i("li",{key:"level3-"+o,class:e.separator?"cm-separator":"",style:t.liStyle},[i("div",{on:{click:function(e){return e.stopPropagation(),t.callback({action:n.action,data:n.data})}}},[t.importedFA5||void 0===n.icon?t._e():i("i",{class:n.icon}),t._v(" "),t.importedFA5&&void 0!==n.icon?i("font-awesome-icon",{class:n.class,attrs:{icon:n.icon}}):t._e(),t._v(" "),i("span",{domProps:{textContent:t._s(n.text)}})],1)])}),0):t._e()])}),0):t._e()])}),0)]):t._e()},o=[],s={render:n,staticRenderFns:o};e.a=s}])});
//# sourceMappingURL=vue-easycm.js.map