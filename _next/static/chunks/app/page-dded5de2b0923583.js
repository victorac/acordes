(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3112:(e,t,n)=>{Promise.resolve().then(n.bind(n,3743))},3743:(e,t,n)=>{"use strict";n.d(t,{default:()=>s});var i=n(7437),o=n(2265),r=n(7544),a=n.n(r);let s=e=>{let{id:t,initialX:n,initialY:r}=e,s=(0,o.useRef)(null),[u,c]=(0,o.useState)({x:n,y:r+73.5-36}),[l,f]=(0,o.useState)(!1),[d,h]=(0,o.useState)({x:0,y:0});return(0,o.useEffect)(()=>{let e=s.current;if(!e)return;let t=e.parentElement;if(!t)return;let n=e=>"touches"in e&&e.touches.length?{x:e.touches[0].clientX,y:e.touches[0].clientY}:"clientX"in e?{x:e.clientX,y:e.clientY}:{x:0,y:0},i=e=>{f(!0);let{x:t,y:i}=n(e);h({x:t-u.x,y:i-u.y}),e.preventDefault()},o=e=>{if(!l)return;let{x:i,y:o}=n(e),r=t.getBoundingClientRect();c({x:i-d.x,y:o-d.y+t.scrollTop}),i<t.scrollLeft+50?t.scrollLeft-=10:i>r.right-50&&(t.scrollLeft+=10),o<r.top+147?t.scrollTop-=10:o>r.bottom-147&&(t.scrollTop+=10)},r=()=>{f(!1),c({x:50*Math.max(Math.floor((u.x+25)/50),0),y:147*Math.max(Math.floor((u.y+36)/147),0)+73.5-36})};return e.addEventListener("mousedown",i),window.addEventListener("mousemove",o),window.addEventListener("mouseup",r),e.addEventListener("touchstart",i),window.addEventListener("touchmove",o),window.addEventListener("touchend",r),()=>{e.removeEventListener("mousedown",i),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",r),e.removeEventListener("touchstart",i),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",r)}},[l,u,d]),(0,i.jsx)("div",{id:t.toString(),ref:s,className:"w-full h-full",style:{position:"absolute",left:"".concat(u.x,"px"),top:"".concat(u.y,"px"),width:"".concat(50,"px"),height:"".concat(72,"px"),cursor:"move",touchAction:"none"},children:(0,i.jsx)(a(),{src:"".concat("/acordes","/note-interaction-lab.riv"),stateMachines:"State Machine 1",artboard:"NoteComponentRive"})})}},7544:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var i=n(2265),o=n(7715),r=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(i),a=function(){return(a=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function s(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n}function u(e){var t=e||c(),n=i.useState(t),o=n[0],r=n[1];return i.useEffect(function(){if("undefined"!=typeof window&&"matchMedia"in window){var t=function(){r(e||c())},n=window.matchMedia("screen and (resolution: ".concat(o,"dppx)"));return n.hasOwnProperty("addEventListener")?n.addEventListener("change",t):n.addListener(t),function(){n.hasOwnProperty("removeEventListener")?n.removeEventListener("change",t):n.removeListener(t)}}},[o,e]),o}function c(){return Math.min(Math.max(1,"undefined"!=typeof window&&"number"==typeof window.devicePixelRatio?window.devicePixelRatio:1),3)}"function"==typeof SuppressedError&&SuppressedError;var l=function(){function e(){}return e.prototype.observe=function(){},e.prototype.unobserve=function(){},e.prototype.disconnect=function(){},e}(),f=globalThis.ResizeObserver||l,d=void 0!==globalThis.ResizeObserver,h=!d,v={useDevicePixelRatio:!0,fitCanvasToArtboardHeight:!1,useOffscreenRenderer:!0,shouldResizeCanvasToContainer:!0};function p(e){return Object.assign({},v,e)}function w(e){var t,n,o,r,a,s,c,l=e.riveLoaded,v=void 0!==l&&l,w=e.canvasElem,b=e.containerRef,y=e.options,m=e.onCanvasHasResized,g=e.artboardBounds,E=p(void 0===y?{}:y),R=i.useState({height:0,width:0}),C=R[0],x=C.height,O=C.width,L=R[1],T=i.useState({height:0,width:0}),S=T[0],M=S.height,k=S.width,P=T[1],j=i.useState(!0),z=j[0],H=j[1],I=E.fitCanvasToArtboardHeight,N=E.shouldResizeCanvasToContainer,_=E.useDevicePixelRatio,D=E.customDevicePixelRatio,A=(void 0===(t=N)&&(t=!0),o=(n=i.useState({width:0,height:0}))[0],r=n[1],i.useEffect(function(){if("undefined"!=typeof window&&t){var e=function(){r({width:window.innerWidth,height:window.innerHeight})};return h&&(e(),window.addEventListener("resize",e)),function(){return window.removeEventListener("resize",e)}}},[]),c=i.useRef(new f((a=function(e){d&&r({width:e[e.length-1].contentRect.width,height:e[e.length-1].contentRect.height})},s=0,function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];clearTimeout(s),s=window.setTimeout(function(){return a.apply(e,t)},0)}))),i.useEffect(function(){var e=c.current;if(t){var n=b.current;return b.current&&d&&e.observe(b.current),function(){e.disconnect(),n&&d&&e.unobserve(n)}}e.disconnect()},[b,c]),o),F=u(D),X=null!=g?g:{},B=X.maxX,W=X.maxY,Y=i.useCallback(function(){var e,t,n,i,o=null!==(t=null===(e=b.current)||void 0===e?void 0:e.clientWidth)&&void 0!==t?t:0,r=null!==(i=null===(n=b.current)||void 0===n?void 0:n.clientHeight)&&void 0!==i?i:0;return I&&g?{width:o,height:o*(g.maxY/g.maxX)}:{width:o,height:r}},[b,I,B,W]);i.useEffect(function(){if(N&&b.current&&v){var e=Y(),t=e.width,n=e.height,i=!1;if(w){var o=t!==O||n!==x;if(E.fitCanvasToArtboardHeight&&o&&(b.current.style.height=n+"px",i=!0),E.useDevicePixelRatio){if(o||t*F!==k||n*F!==M){var r=F*t,a=F*n;w.width=r,w.height=a,w.style.width=t+"px",w.style.height=n+"px",P({width:r,height:a}),i=!0}}else o&&(w.width=t,w.height=n,P({width:t,height:n}),i=!0);L({width:t,height:n})}m&&(z||i)&&m&&m(),z&&H(!1)}},[w,b,A,F,Y,z,H,M,k,x,O,m,N,I,_,v]),i.useEffect(function(){P({width:0,height:0})},[w])}var b,y=function(){function e(){}return e.prototype.observe=function(){},e.prototype.unobserve=function(){},e.prototype.disconnect=function(){},e}(),m=globalThis.IntersectionObserver||y,g=function(){function e(){var e=this;this.elementsMap=new Map,this.onObserved=function(t){t.forEach(function(t){var n=e.elementsMap.get(t.target);n&&n(t)})},this.observer=new m(this.onObserved)}return e.prototype.registerCallback=function(e,t){this.observer.observe(e),this.elementsMap.set(e,t)},e.prototype.removeCallback=function(e){this.observer.unobserve(e),this.elementsMap.delete(e)},e}(),E=function(){return b||(b=new g),b};function R(e){var t=e.setContainerRef,n=e.setCanvasRef,i=e.className,o=void 0===i?"":i,u=e.style,c=e.children,l=s(e,["setContainerRef","setCanvasRef","className","style","children"]),f=a({width:"100%",height:"100%"},u);return r.default.createElement("div",a({ref:t,className:o},!o&&{style:f}),r.default.createElement("canvas",a({ref:n,style:{verticalAlign:"top",width:0,height:0}},l),c))}function C(e,t){void 0===t&&(t={});var n=i.useState(null),s=n[0],c=n[1],l=i.useRef(null),f=i.useState(null),d=f[0],h=f[1],v=!!e,b=p(t),y=u(),m=i.useCallback(function(){if(d){if(d.layout&&d.layout.fit===o.Fit.Layout&&s){var e=y*d.layout.layoutScaleFactor;d._devicePixelRatioUsed=y,d.artboard.width=(null==s?void 0:s.width)/e,d.artboard.height=(null==s?void 0:s.height)/e}d.startRendering(),d.resizeToCanvas()}},[d,y]);w({riveLoaded:!!d,canvasElem:s,containerRef:l,options:b,onCanvasHasResized:m,artboardBounds:null==d?void 0:d.bounds});var g=i.useCallback(function(e){null===e&&s&&(s.height=0,s.width=0),c(e)},[]);i.useEffect(function(){if(s&&e&&null==d){var t=b.useOffscreenRenderer,n=new o.Rive(a(a({useOffscreenRenderer:t},e),{canvas:s}));n.on(o.EventType.Load,function(){s?h(n):n.cleanup()})}},[s,v,d]);var C=i.useCallback(function(e){l.current=e},[]),x={observe:i.useCallback(function(e,t){E().registerCallback(e,t)},[]),unobserve:i.useCallback(function(e){E().removeCallback(e)},[])},O=x.observe,L=x.unobserve;i.useEffect(function(){var e,t=!1,n=function(){if(s&&t){var e=s.getBoundingClientRect();e.width>0&&e.height>0&&e.top<(window.innerHeight||document.documentElement.clientHeight)&&e.bottom>0&&e.left<(window.innerWidth||document.documentElement.clientWidth)&&e.right>0&&(null==d||d.startRendering(),t=!1)}};return s&&!1!==b.shouldUseIntersectionObserver&&O(s,function(i){i.isIntersecting?d&&d.startRendering():d&&d.stopRendering(),t=!i.isIntersecting,clearTimeout(e),i.isIntersecting||0!==i.boundingClientRect.width||(e=setTimeout(n,10))}),function(){s&&L(s)}},[O,L,d,s,b.shouldUseIntersectionObserver]),i.useEffect(function(){return function(){d&&(d.cleanup(),h(null))}},[d,s]);var T=null==e?void 0:e.animations;i.useEffect(function(){d&&T&&(d.isPlaying?(d.stop(d.animationNames),d.play(T)):d.isPaused&&(d.stop(d.animationNames),d.pause(T)))},[T,d]);var S=i.useCallback(function(e){return r.default.createElement(R,a({setContainerRef:C,setCanvasRef:g},e))},[g,C]);return{canvas:s,container:l.current,setCanvasRef:g,setContainerRef:C,rive:d,RiveComponent:S}}t.default=function(e){var t=e.src,n=e.artboard,i=e.animations,o=e.stateMachines,u=e.layout,c=e.useOffscreenRenderer,l=e.shouldDisableRiveListeners,f=e.shouldResizeCanvasToContainer,d=e.automaticallyHandleEvents,h=e.children,v=s(e,["src","artboard","animations","stateMachines","layout","useOffscreenRenderer","shouldDisableRiveListeners","shouldResizeCanvasToContainer","automaticallyHandleEvents","children"]),p=C({src:t,artboard:n,animations:i,layout:u,stateMachines:o,autoplay:!0,shouldDisableRiveListeners:void 0!==l&&l,automaticallyHandleEvents:void 0!==d&&d},{useOffscreenRenderer:void 0===c||c,shouldResizeCanvasToContainer:void 0===f||f}).RiveComponent;return r.default.createElement(p,a({},v),h)},t.useResizeCanvas=w,t.useRive=C,t.useRiveFile=function(e){var t=this,n=i.useState(null),r=n[0],a=n[1],s=i.useState("idle"),u=s[0],c=s[1];return i.useEffect(function(){var n,i,r,s=null;return n=void 0,i=void 0,r=function(){return function(e,t){var n,i,o,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=s(0),a.throw=s(1),a.return=s(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(u){return function(s){if(n)throw TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(r=0)),r;)try{if(n=1,i&&(o=2&s[0]?i.return:s[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;switch(i=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,i=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){r=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){r.label=s[1];break}if(6===s[0]&&r.label<o[1]){r.label=o[1],o=s;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(s);break}o[2]&&r.ops.pop(),r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e],i=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}(this,function(t){try{c("loading"),(s=new o.RiveFile(e)).init(),s.on(o.EventType.Load,function(){null==s||s.getInstance(),a(s),c("success")}),s.on(o.EventType.LoadError,function(){c("failed")}),a(s)}catch(e){console.error(e),c("failed")}return[2]})},new(i||(i=Promise))(function(e,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(t){var n;t.done?e(t.value):((n=t.value)instanceof i?n:new i(function(e){e(n)})).then(a,s)}u((r=r.apply(t,n||[])).next())}),function(){null==s||s.cleanup()}},[e.src,e.buffer]),{riveFile:r,status:u}},t.useStateMachineInput=function(e,t,n,r){var a=i.useState(null),s=a[0],u=a[1];return i.useEffect(function(){function i(){if(e&&t&&n||u(null),e&&t&&n){var i=e.stateMachineInputs(t);if(i){var o=i.find(function(e){return e.name===n});void 0!==r&&o&&(o.value=r),u(o||null)}}else u(null)}i(),e&&e.on(o.EventType.Load,function(){i()})},[e]),s},Object.keys(o).forEach(function(e){"default"===e||t.hasOwnProperty(e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})}},e=>{var t=t=>e(e.s=t);e.O(0,[370,130,215,744],()=>t(3112)),_N_E=e.O()}]);