(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{393:(e,t,n)=>{Promise.resolve().then(n.bind(n,9853))},9853:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var l=n(7437);let s=e=>{let{keyName:t,editMode:n,onEditModeChange:s,keyChangeMode:r,onKeyChangeModeChange:c,onKeyChange:o}=e;return(0,l.jsxs)("div",{className:"max-w-7xl flex items-center justify-between gap-[1px] w-full px-4 pb-4 text-[14px] leading-5",children:[n&&!r&&(0,l.jsx)("button",{className:"w-fit py-[6px] px-3 rounded-[100px] ring-1 ring-[#E6FF81] bg-[#3C3F2F] text-[#E6FF81]",onClick:c,children:"Change key"}),n&&r&&(0,l.jsx)("button",{className:"w-[30px] h-[30px] p-[6px] shrink-0 flex items-center justify-center rounded-[100px] ring-1 ring-[#E6FF81] bg-[#3C3F2F] text-[#E6FF81]",onClick:c,children:(0,l.jsx)("img",{src:"/CloseNoteContainer.svg",alt:"Close"})}),r&&(0,l.jsxs)("div",{className:"min-w-0 flex-shrink w-full relative",children:[(0,l.jsx)("div",{className:"absolute w-[33px] h-full left-0 top-0 bg-gradient-to-r from-[#101013]"}),(0,l.jsxs)("div",{className:"flex overflow-x-auto font-medium",children:[(0,l.jsx)("div",{className:"\n                min-w-[56px] h-[32px] rounded-[24px] p-[6px] flex items-center justify-center \n                bg-[#1D1F2C] text-[#B3BDC7] \n                select-none",children:"Key"}),["C","C#-Db","D","D#-Eb","E","F","F#-Gb","G","G#-Ab","A","A#-Bb","B"].map((e,n)=>(0,l.jsx)("button",{className:"\n                min-w-[56px] h-[32px] rounded-[24px] p-[6px] flex items-center justify-center \n                ".concat(t===e?"bg-[#E6FF81] text-[#1D1F2C]":"bg-[#1D1F2C] text-[#B3BDC7]"," \n                select-none"),onClick:()=>o(e),children:e},n))]}),(0,l.jsx)("div",{className:"pointer-events-none absolute w-[33px] h-full right-0 top-0 bg-gradient-to-r from-transparent to-[#101013]"})]}),(0,l.jsx)("button",{className:"min-w-fit flex-shrink w-fit h-8 py-[6px] px-3 rounded-[100px] bg-[#1D1F2C] text-[#B3BDC7] ml-auto",onClick:s,children:"Edit mode"})]})};var r=n(2265);let c=()=>(0,l.jsxs)("nav",{className:"flex items-center justify-between w-full h-[38px] sm:h-auto pt-2 px-4 text-[#B3BDC7] text-[11px] leading-3",children:[(0,l.jsx)("h1",{className:"px-4",children:"Acorde"}),(0,l.jsx)("a",{className:"px-4 py-2",href:"./settings",children:"Settings"})]});var o=n(5149);let i=e=>{let{children:t,className:n,id:s}=e,{attributes:r,listeners:c,setNodeRef:i,transform:a}=(0,o.O1)({id:s}),x=a?{transform:"translate3d(".concat(a.x,"px, ").concat(a.y,"px, 0)"),zIndex:3e3}:{zIndex:1e3};return(0,l.jsx)("div",{className:n,ref:i,style:x,...c,...r,children:t})},a=e=>{let{id:t,interval:n,noteName:s,state:r}=e;return(0,l.jsx)(i,{id:t,className:"w-[44px] h-[72px] sm:w-[72px] sm:h-[44px] flex",children:(0,l.jsxs)("div",{id:t,className:"\n        select-none\n        touch-none\n        w-full h-full rounded-[200px] p-1\n        flex flex-col items-center justify-center\n        ".concat("R"===n?"bg-[#E6FF81]":"bg-[#E3EFF1]","\n        ").concat("dragging"===r?"animate-bounce":"","\n      "),children:[(0,l.jsx)("div",{className:"text-[#141935] text-[24px] font-semibold leading-7",children:n}),(0,l.jsx)("div",{className:"text-[#535B86] text-[14px] font-semibold leading-4",children:s})]})})},x=e=>{let{id:t,className:n,children:s}=e,{isOver:r,setNodeRef:c}=(0,o.Zj)({id:t});return(0,l.jsx)("div",{className:n,ref:c,style:{color:r?"green":void 0},children:s})},d=e=>{let{id:t,children:n,string:s,caseNumber:r,noteState:c,onAddNote:o}=e;return(0,l.jsxs)(x,{id:t,className:"\n      w-[49px] \n      h-[159px] \n      sm:w-[159px] \n      sm:h-[49px] \n      flex \n      items-center \n      justify-center \n      relative\n      before:absolute\n      before:content-['']\n      before:h-full\n      before:bg-[#E3EFF1]\n      before:left-1/2\n      before:-translate-x-1/2\n      sm:before:w-full\n      sm:before:top-1/2\n      sm:before:-translate-y-1/2\n      sm:before:left-0\n      sm:before:translate-x-0\n      ".concat({1:"before:w-[1px] sm:before:h-[1px]",2:"before:w-[2px] sm:before:h-[2px]",3:"before:w-[3px] sm:before:h-[3px]",4:"before:w-[4px] sm:before:h-[4px]",5:"before:w-[5px] sm:before:h-[5px]",6:"before:w-[6px] sm:before:h-[6px]"}[s],"\n      "),children:[n,!c&&(0,l.jsx)("button",{onClick:()=>o(s,r),className:"w-6 h-8 rounded-full bg-[#3E4648] px-1 py-2 flex items-center justify-center z-10 text-[#E3EFF1] select-none",children:"+"})]})},f=()=>{let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{{t(window.innerWidth<=640);let e=()=>{t(window.innerWidth<=640)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}},[]),e};var m=n(5565);let u=e=>{let{interval:t}=e;return(0,l.jsx)("div",{className:" flex items-center justify-center w-[49px] sm:h-[49px]  sm:w-[28px] p-1 text-[#D0D8FF]  text-[16px]  leading-5  font-semibold",children:t})},p=e=>{let{keyName:t,tunning:n}=e;return(0,l.jsx)("div",{className:" bg-[#192149]  px-4  rounded-full  flex  sm:flex-col sm:h-auto sm:px-0  items-center  justify-center sticky top-0 sm:top-auto sm:left-0 z-[2000] ",children:Array.from({length:6}).map((e,s)=>{let{interval:r}=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"E",l=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],s=t[e];return{interval:({0:"R",1:"m2",2:"2",3:"m3",4:"3",5:"P4",6:"Aug4",7:"5",8:"m6",9:"6",10:"7",11:"M7"})[(l.findIndex(e=>e===s)%l.length-l.findIndex(e=>e===n)+l.length)%l.length]}}(6-s,n,t);return(0,l.jsx)(u,{interval:r},s)})})},h=e=>{let{keyName:t}=e,n={1:"E",2:"B",3:"G",4:"D",5:"A",6:"E"},[s,c]=(0,r.useState)({}),[i,x]=(0,r.useState)(Array.from({length:72},(e,t)=>t%24)),[u,h]=(0,r.useState)(!1),g=f(),b=g?[6,5,4,3,2,1]:[1,2,3,4,5,6];function j(e,t){c(n=>{if(n["".concat(e,"-").concat(t)])return n;let l="".concat(e,"-").concat(t);return{...n,[l]:"idle"}})}if((0,r.useLayoutEffect)(()=>{h(!0)},[]),!u)return(0,l.jsx)("div",{className:"flex items-center justify-center w-full h-full",children:(0,l.jsx)("div",{className:"animate-pulse text-[#B3BDC7]",children:"Loading..."})});let v=i.map((e,r)=>{let c="case-".concat(e,"-").concat(r);return(0,l.jsxs)("div",{id:c,className:"flex sm:flex-col relative",children:[b.map(c=>(0,l.jsx)(d,{id:"cell-".concat(c,"-").concat(e,"-").concat(r),caseNumber:e,string:c,onAddNote:j,noteState:s["".concat(c,"-").concat(e)],children:(()=>{let o=s["".concat(c,"-").concat(e)];if(!o)return null;let{interval:i,noteName:x}=function(e,t,n){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"E",s=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],r=n[e],c=(s.findIndex(e=>e===r)+t+1)%s.length;return{interval:({0:"R",1:"m2",2:"2",3:"m3",4:"3",5:"P4",6:"Aug4",7:"5",8:"m6",9:"6",10:"7",11:"M7"})[(c-s.findIndex(e=>e===l)+s.length)%s.length],noteName:s[c]}}(c,e,n,t),d="note-".concat(c,"-").concat(e,"-").concat(r);return(0,l.jsx)(a,{id:d,interval:i,noteName:x,state:o},d)})()},"".concat(c,"-").concat(e,"-").concat(r))),(0,l.jsx)("div",{className:"absolute top-0 left-0 w-fit text-[#B3BDC7] text-xs",children:e+1})]},c)});return(0,l.jsx)(o.LB,{onDragStart:function(e){let{active:t}=e,[,n,l]=t.id.split("-");c(e=>{let t="".concat(n,"-").concat(l);return{...e,[t]:"dragging"}})},onDragEnd:function(e){let{over:t}=e,[,n,l]=e.active.id.split("-");if(null==t?void 0:t.id){let[,e,r]=t.id.split("-");if(s["".concat(e,"-").concat(r)]){c(e=>({...e,["".concat(n,"-").concat(l)]:"idle"}));return}c(t=>{let s={...t};return delete s["".concat(n,"-").concat(l)],s["".concat(e,"-").concat(r)]="idle",s})}else c(e=>({...e,["".concat(n,"-").concat(l)]:"idle"}))},modifiers:[m.lv],children:(0,l.jsxs)("div",{onScroll:function(e){let t=e.target,n=()=>{x(e=>[...e.slice(12),...e.slice(0,12)])},l=()=>{x(Array.from({length:72},(e,t)=>t%24))};if(g){let e=t.scrollTop+t.clientHeight>=t.scrollHeight-159,s=0===t.scrollTop;e&&(t.scrollTop=t.scrollTop-1908-88,n()),s&&l()}else{let e=t.scrollLeft+t.clientWidth>=t.scrollWidth-159,s=0===t.scrollLeft;e&&(t.scrollTo({left:t.scrollLeft-1908-88}),n()),s&&l()}},className:" container mx-auto my-2 sm:my-0 flex flex-col items-center sm:flex-row h-full relative flex-1 overflow-y-auto sm:overflow-x-auto sm:overflow-y-hidden ",children:[(0,l.jsx)(p,{tunning:n,keyName:t}),(0,l.jsx)("div",{className:" flex flex-col items-center sm:flex-row sm:justify-start mt-[8px] sm:mt-0 sm:ml-[8px] gap-2 ",children:v})]})})};function g(){let[e,t]=(0,r.useState)("E"),[n,o]=(0,r.useState)(!1),[i,a]=(0,r.useState)(!1);return(0,l.jsxs)("div",{className:"flex flex-col w-full h-dvh items-center bg-[#101013]",children:[(0,l.jsx)(c,{}),(0,l.jsx)(h,{keyName:e}),(0,l.jsx)(s,{keyName:e,editMode:n,keyChangeMode:i,onEditModeChange:function(){n&&a(!1),o(!n)},onKeyChangeModeChange:function(){a(!i)},onKeyChange:function(e){t(e)}})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[246,130,215,744],()=>t(393)),_N_E=e.O()}]);