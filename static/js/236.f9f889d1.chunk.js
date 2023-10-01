/*! For license information please see 236.f9f889d1.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[236],{830:function(t,r,n){n.d(r,{fO:function(){return l},jP:function(){return c},tu:function(){return u},zQ:function(){return s}});var e=n(861),o=n(243);function i(){i=function(){return r};var t,r={},n=Object.prototype,e=n.hasOwnProperty,o=Object.defineProperty||function(t,r,n){t[r]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,n){return t[r]=n}}function f(t,r,n,e){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new Z(e||[]);return o(a,"_invoke",{value:j(t,n,c)}),a}function h(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",d="executing",v="completed",y={};function g(){}function m(){}function x(){}var w={};l(w,c,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(G([])));L&&L!==n&&e.call(L,c)&&(w=L);var k=x.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function n(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function j(r,n,e){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=O(c,e);if(u){if(u===y)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===p)throw o=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var s=h(r,n,e);if("normal"===s.type){if(o=e.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=v,e.method="throw",e.arg=s.arg)}}}function O(r,n){var e=n.method,o=r.iterator[e];if(o===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=t,O(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),y;var i=h(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function N(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function G(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function n(){for(;++o<r.length;)if(e.call(r,o))return n.value=r[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=x,o(k,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=l(x,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},E(_.prototype),l(_.prototype,u,(function(){return this})),r.AsyncIterator=_,r.async=function(t,n,e,o,i){void 0===i&&(i=Promise);var a=new _(f(t,n,e,o),i);return r.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(k),l(k,s,"Generator"),l(k,c,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=G,Z.prototype={constructor:Z,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function o(e,o){return c.type="throw",c.arg=r,n.next=e,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:G(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),y}},r}o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a="api_key=3eebfbe9c62ece5d5dd2cd2b1310950c",c=function(){var t=(0,e.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("trending/movie/day?language=en-US&".concat(a));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,e.Z)(i().mark((function t(r){var n,e,c,u,s,l,f,h,p;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(r,"?").concat(a));case 2:return n=t.sent,e=n.data,c=e.poster_path,u=e.original_title,s=e.release_date,l=e.vote_average,f=e.overview,h=e.genres,p={poster_path:c,filmName:u,filmYear:s.slice(0,4),vote_average:l,overview:f,filmGenres:h.map((function(t){return t.name})).join(", ")},t.abrupt("return",p);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(i().mark((function t(r){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(r,"?").concat(a));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(i().mark((function t(r){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("search/movie?query=".concat(r,"&language=en-US&").concat(a));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},378:function(t,r,n){n.d(r,{Q:function(){return e}});var e=function(t,r){return t?"".concat("https://image.tmdb.org/t/p/w500/").concat(t):"film"===r?"https://celes.club/uploads/posts/2022-05/1653089639_2-celes-club-p-znaki-voprosa-fon-krasivie-2.jpg":"https://i1.sndcdn.com/avatars-000348889688-vvjlm3-t240x240.jpg"}},628:function(t,r,n){n.d(r,{Bc:function(){return m},II:function(){return x},N0:function(){return g},PY:function(){return y},Rq:function(){return p},b6:function(){return v},ds:function(){return d}});var e,o,i,a,c,u,s,l=n(168),f=n(87),h=n(867).default,p=h.div(e||(e=(0,l.Z)(["\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',\n    'Lucida Sans', Arial, sans-serif;\n  &::before {\n    content: '';\n    position: absolute;\n    width: 750px;\n    height: 750px;\n    background: linear-gradient(#9763db, #3494e2);\n    border-radius: 50%;\n    transform: translate(20px, 0px);\n    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);\n  }\n"]))),d=h.ul(o||(o=(0,l.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 0;\n\n  &::before {\n    content: '';\n    position: absolute;\n    width: 750px;\n    height: 750px;\n    background: linear-gradient(#9763db, #3494e2);\n    border-radius: 50%;\n    transform: translate(343px, 430px);\n    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);\n  }\n"]))),v=h.li(i||(i=(0,l.Z)(["\n  position: relative;\n  display: flex;\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  margin: 10px 0;\n  cursor: pointer;\n  transition: 0.5s;\n  overflow: hidden;\n  color: white;\n  backdrop-filter: blur(25px);\n\n  & img {\n    position: relative;\n    border-radius: 10px;\n    min-width: 100px;\n    overflow: hidden;\n    margin-right: 10px;\n    object-fit: cover;\n  }\n\n  & div h4 {\n    line-height: 1.2em;\n    font-weight: 600;\n    transition: 0.5s;\n  }\n\n  & div p {\n    font-size: 0.75em;\n    transition: 0.5s;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n"]))),y=h.ul(a||(a=(0,l.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 0;\n\n  &::before {\n    content: '';\n    position: absolute;\n    width: 750px;\n    height: 750px;\n    background: linear-gradient(#9763db, #3494e2);\n    border-radius: 50%;\n    transform: translate(343px, 430px);\n    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);\n  }\n"]))),g=h.li(c||(c=(0,l.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  margin: 10px 0;\n  cursor: pointer;\n  transition: 0.5s;\n  overflow: hidden;\n  color: white;\n  backdrop-filter: blur(25px);\n\n  & h3 {\n    text-align: center;\n    font-size: 20px;\n  }\n\n  & div p {\n    font-size: 0.75em;\n    transition: 0.5s;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n"]))),m=h.div(u||(u=(0,l.Z)(["\n  position: relative;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  margin: 10px 0;\n  cursor: pointer;\n  transition: 0.5s;\n  overflow: hidden;\n  color: white;\n  backdrop-filter: blur(25px);\n"]))),x=h(f.OL)(s||(s=(0,l.Z)(["\n  text-decoration: none;\n  display: inline-block;\n  padding: 8px 16px;\n  background-color: #f1f1f1c4;\n  color: black;\n  border-radius: 50%;\n  font-size: 20px;\n  position: absolute;\n  transform: translate(-18px, -18px);\n  z-index: 100;\n\n  &:hover {\n    background-color: #ddd;\n    color: black;\n  }\n"])))},236:function(t,r,n){n.r(r);var e=n(861),o=n(439),i=n(689),a=n(830),c=n(791),u=n(628),s=n(378),l=n(184);function f(){f=function(){return r};var t,r={},n=Object.prototype,e=n.hasOwnProperty,o=Object.defineProperty||function(t,r,n){t[r]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,n){return t[r]=n}}function l(t,r,n,e){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new Z(e||[]);return o(a,"_invoke",{value:j(t,n,c)}),a}function h(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var p="suspendedStart",d="executing",v="completed",y={};function g(){}function m(){}function x(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(G([])));L&&L!==n&&e.call(L,a)&&(w=L);var k=x.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function n(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function j(r,n,e){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=O(c,e);if(u){if(u===y)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===p)throw o=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var s=h(r,n,e);if("normal"===s.type){if(o=e.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=v,e.method="throw",e.arg=s.arg)}}}function O(r,n){var e=n.method,o=r.iterator[e];if(o===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=t,O(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),y;var i=h(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function N(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function G(r){if(r||""===r){var n=r[a];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function n(){for(;++o<r.length;)if(e.call(r,o))return n.value=r[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=x,o(k,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=s(x,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},E(_.prototype),s(_.prototype,c,(function(){return this})),r.AsyncIterator=_,r.async=function(t,n,e,o,i){void 0===i&&(i=Promise);var a=new _(l(t,n,e,o),i);return r.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(k),s(k,u,"Generator"),s(k,a,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=G,Z.prototype={constructor:Z,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function o(e,o){return c.type="throw",c.arg=r,n.next=e,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:G(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),y}},r}r.default=function(){var t=(0,c.useState)([]),r=(0,o.Z)(t,2),n=r[0],h=r[1],p=(0,i.UO)().filmId,d=(0,c.useState)(!1),v=(0,o.Z)(d,2),y=v[0],g=v[1],m=(0,c.useState)(!1),x=(0,o.Z)(m,2),w=x[0],b=x[1];return(0,c.useEffect)((function(){function t(){return(t=(0,e.Z)(f().mark((function t(){var r,n;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,g(!0),b(!1),!p){t.next=9;break}return t.next=6,(0,a.zQ)("".concat(p,"/credits"));case 6:r=t.sent,n=r.cast,h(n);case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("error"),b(!0);case 15:return t.prev=15,g(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,11,15,18]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[p]),(0,l.jsx)("div",{children:(0,l.jsxs)(u.ds,{children:[n.map((function(t){var r=t.id,n=t.profile_path,e=t.name,o=t.character;return(0,l.jsxs)(u.b6,{children:[(0,l.jsx)("img",{src:(0,s.Q)(n,"actor"),width:"100px",alt:"Poster ".concat(e)}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("h3",{children:["Name: ",e]}),(0,l.jsxs)("p",{children:["Character: ",o]})]})]},r)})),y&&(0,l.jsx)("div",{children:"LOADING..."}),w&&!y&&(0,l.jsx)("div",{children:"ERROR!"})]})})}}}]);
//# sourceMappingURL=236.f9f889d1.chunk.js.map