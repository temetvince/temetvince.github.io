"use strict";(self.webpackChunktemplate_typescript_react=self.webpackChunktemplate_typescript_react||[]).push([[496],{496:function(e,n,t){t.r(n),t.d(n,{getCLS:function(){return L},getFCP:function(){return E},getFID:function(){return k},getINP:function(){return z},getLCP:function(){return J},getTTFB:function(){return Q},onCLS:function(){return L},onFCP:function(){return E},onFID:function(){return k},onINP:function(){return z},onLCP:function(){return J},onTTFB:function(){return Q}});var r,i,a,o,u,c=-1,f=function(e){addEventListener("pageshow",(function(n){n.persisted&&(c=n.timeStamp,e(n))}),!0)},s=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},d=function(){var e=s();return e&&e.activationStart||0},p=function(e,n){var t=s(),r="navigate";return c>=0?r="back-forward-cache":t&&(r=document.prerendering||d()>0?"prerender":t.type.replace(/_/g,"-")),{name:e,value:void 0===n?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},l=function(e,n,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){n(e.getEntries())}));return r.observe(Object.assign({type:e,buffered:!0},t||{})),r}}catch(e){}},v=function(e,n){var t=function t(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(e(r),n&&(removeEventListener("visibilitychange",t,!0),removeEventListener("pagehide",t,!0)))};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},m=function(e,n,t,r){var i,a;return function(o){n.value>=0&&(o||r)&&((a=n.value-(i||0))||void 0===i)&&(i=n.value,n.delta=a,n.rating=function(e,n){return e>n[1]?"poor":e>n[0]?"needs-improvement":"good"}(n.value,t),e(n))}},h=-1,g=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},y=function(){v((function(e){var n=e.timeStamp;h=n}),!0)},T=function(){return h<0&&(h=g(),y(),f((function(){setTimeout((function(){h=g(),y()}),0)}))),{get firstHiddenTime(){return h}}},E=function(e,n){n=n||{};var t,r=[1800,3e3],i=T(),a=p("FCP"),o=function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(c&&c.disconnect(),e.startTime<i.firstHiddenTime&&(a.value=e.startTime-d(),a.entries.push(e),t(!0)))}))},u=window.performance&&window.performance.getEntriesByName&&window.performance.getEntriesByName("first-contentful-paint")[0],c=u?null:l("paint",o);(u||c)&&(t=m(e,a,r,n.reportAllChanges),u&&o([u]),f((function(i){a=p("FCP"),t=m(e,a,r,n.reportAllChanges),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,t(!0)}))}))})))},C=!1,w=-1,L=function(e,n){n=n||{};var t=[.1,.25];C||(E((function(e){w=e.value})),C=!0);var r,i=function(n){w>-1&&e(n)},a=p("CLS",0),o=0,u=[],c=function(e){e.forEach((function(e){if(!e.hadRecentInput){var n=u[0],t=u[u.length-1];o&&e.startTime-t.startTime<1e3&&e.startTime-n.startTime<5e3?(o+=e.value,u.push(e)):(o=e.value,u=[e]),o>a.value&&(a.value=o,a.entries=u,r())}}))},s=l("layout-shift",c);s&&(r=m(i,a,t,n.reportAllChanges),v((function(){c(s.takeRecords()),r(!0)})),f((function(){o=0,w=-1,a=p("CLS",0),r=m(i,a,t,n.reportAllChanges)})))},S={passive:!0,capture:!0},b=new Date,A=function(e,n){r||(r=n,i=e,a=new Date,P(removeEventListener),F())},F=function(){if(i>=0&&i<a-b){var e={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+i};o.forEach((function(n){n(e)})),o=[]}},I=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,n){var t=function(){A(e,n),i()},r=function(){i()},i=function(){removeEventListener("pointerup",t,S),removeEventListener("pointercancel",r,S)};addEventListener("pointerup",t,S),addEventListener("pointercancel",r,S)}(n,e):A(n,e)}},P=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return e(n,I,S)}))},k=function(e,n){n=n||{};var t,a=[100,300],u=T(),c=p("FID"),s=function(e){e.startTime<u.firstHiddenTime&&(c.value=e.processingStart-e.startTime,c.entries.push(e),t(!0))},d=function(e){e.forEach(s)},h=l("first-input",d);t=m(e,c,a,n.reportAllChanges),h&&v((function(){d(h.takeRecords()),h.disconnect()}),!0),h&&f((function(){var u;c=p("FID"),t=m(e,c,a,n.reportAllChanges),o=[],i=-1,r=null,P(addEventListener),u=s,o.push(u),F()}))},B=0,D=1/0,M=0,N=function(e){e.forEach((function(e){e.interactionId&&(D=Math.min(D,e.interactionId),M=Math.max(M,e.interactionId),B=M?(M-D)/7+1:0)}))},R=function(){return u?B:performance.interactionCount||0},_=function(){"interactionCount"in performance||u||(u=l("event",N,{type:"event",buffered:!0,durationThreshold:0}))},q=0,H=function(){return R()-q},x=[],O={},j=function(e){var n=x[x.length-1],t=O[e.interactionId];if(t||x.length<10||e.duration>n.latency){if(t)t.entries.push(e),t.latency=Math.max(t.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};O[r.id]=r,x.push(r)}x.sort((function(e,n){return n.latency-e.latency})),x.splice(10).forEach((function(e){delete O[e.id]}))}},z=function(e,n){n=n||{};var t=[200,500];_();var r,i=p("INP"),a=function(e){e.forEach((function(e){e.interactionId&&j(e),"first-input"===e.entryType&&!x.some((function(n){return n.entries.some((function(n){return e.duration===n.duration&&e.startTime===n.startTime}))}))&&j(e)}));var n,t=(n=Math.min(x.length-1,Math.floor(H()/50)),x[n]);t&&t.latency!==i.value&&(i.value=t.latency,i.entries=t.entries,r())},o=l("event",a,{durationThreshold:n.durationThreshold||40});r=m(e,i,t,n.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),v((function(){a(o.takeRecords()),i.value<0&&H()>0&&(i.value=0,i.entries=[]),r(!0)})),f((function(){x=[],q=R(),i=p("INP"),r=m(e,i,t,n.reportAllChanges)})))},G={},J=function(e,n){n=n||{};var t,r=[2500,4e3],i=T(),a=p("LCP"),o=function(e){var n=e[e.length-1];if(n){var r=n.startTime-d();r<i.firstHiddenTime&&(a.value=r,a.entries=[n],t())}},u=l("largest-contentful-paint",o);if(u){t=m(e,a,r,n.reportAllChanges);var c=function(){G[a.id]||(o(u.takeRecords()),u.disconnect(),G[a.id]=!0,t(!0))};["keydown","click"].forEach((function(e){addEventListener(e,c,{once:!0,capture:!0})})),v(c,!0),f((function(i){a=p("LCP"),t=m(e,a,r,n.reportAllChanges),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,G[a.id]=!0,t(!0)}))}))}))}},K=function e(n){document.prerendering?addEventListener("prerenderingchange",(function(){return e(n)}),!0):"complete"!==document.readyState?addEventListener("load",(function(){return e(n)}),!0):setTimeout(n,0)},Q=function(e,n){n=n||{};var t=[800,1800],r=p("TTFB"),i=m(e,r,t,n.reportAllChanges);K((function(){var a=s();if(a){if(r.value=Math.max(a.responseStart-d(),0),r.value<0||r.value>performance.now())return;r.entries=[a],i(!0),f((function(){r=p("TTFB",0),(i=m(e,r,t,n.reportAllChanges))(!0)}))}}))}}}]);
//# sourceMappingURL=496.0139415e.chunk.js.map