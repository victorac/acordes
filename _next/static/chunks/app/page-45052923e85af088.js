(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3550:(e,t,n)=>{Promise.resolve().then(n.bind(n,9183))},9183:(e,t,n)=>{"use strict";n.d(t,{default:()=>p});var l=n(7437),r=n(2265),o=n(5149);let s=e=>{let{children:t,className:n,id:r}=e,{attributes:s,listeners:c,setNodeRef:a,transform:i}=(0,o.O1)({id:r}),d=i?{transform:"translate3d(".concat(i.x,"px, ").concat(i.y,"px, 0)"),zIndex:1e3}:{zIndex:1e3};return(0,l.jsx)("div",{className:n,ref:a,style:d,...c,...s,children:t})};var c=n(7544);let a=e=>{let{id:t,interval:n,noteName:o}=e,{rive:a}=(0,c.useRive)({src:"".concat("/acordes","/note-interaction-lab.riv"),artboard:"NoteComponentRive",stateMachines:"State Machine 1",autoplay:!0});return(0,r.useEffect)(()=>{},[a]),(0,l.jsx)(s,{id:t,className:"w-[44px] h-[72px] md:w-[72px] md:h-[44px] flex",children:(0,l.jsxs)("div",{className:"\n        select-none\n        w-[44px] h-[72px] md:w-[72px] md:h-[44px] rounded-[200px] p-1 flex flex-col items-center justify-center\n        ".concat("R"===n?"bg-[#E6FF81]":"bg-[#E3EFF1]","\n      "),children:[(0,l.jsx)("span",{className:"text-[#141935] text-[24px] font-semibold leading-7",children:n}),(0,l.jsx)("span",{className:"text-[#535B86] text-[14px] font-semibold leading-4",children:o})]})})},i=e=>{let{id:t,className:n,children:r}=e,{isOver:s,setNodeRef:c}=(0,o.Zj)({id:t});return(0,l.jsx)("div",{className:n,ref:c,style:{color:s?"green":void 0},children:r})},d=e=>{let{id:t,children:n,string:r,caseNumber:o,onAddNote:s}=e;return(0,l.jsx)(i,{id:t,className:"\n      w-[49px] \n      h-[159px] \n      md:w-[159px] \n      md:h-[49px] \n      flex \n      items-center \n      justify-center \n      relative\n      before:absolute\n      before:content-['']\n      before:h-full\n      before:bg-[#E3EFF1]\n      before:left-1/2\n      before:-translate-x-1/2\n      md:before:w-full\n      md:before:top-1/2\n      md:before:-translate-y-1/2\n      md:before:left-0\n      md:before:translate-x-0\n      ".concat({1:"before:w-[1px] md:before:h-[1px]",2:"before:w-[2px] md:before:h-[2px]",3:"before:w-[3px] md:before:h-[3px]",4:"before:w-[4px] md:before:h-[4px]",5:"before:w-[5px] md:before:h-[5px]",6:"before:w-[6px] md:before:h-[6px]"}[r],"\n      "),children:n||(0,l.jsx)("button",{onClick:()=>s(r,o),className:"w-6 h-8 rounded-full bg-[#3E4648] px-1 py-2 flex items-center justify-center z-10 text-[#E3EFF1] select-none",children:"+"})})},f=()=>{let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{{t(window.innerWidth<=768);let e=()=>{t(window.innerWidth<=768)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}},[]),e};var x=n(5565);let m=()=>(0,l.jsx)("div",{className:" flex items-center justify-center w-[49px] md:h-[49px]  md:w-[28px] p-1 text-[#D0D8FF]  text-[16px]  leading-5  font-semibold",children:"R"}),u=()=>(0,l.jsx)("div",{className:" h-[28px]  w-fit bg-[#192149]  px-4  rounded-full  flex  md:flex-col md:h-auto md:px-0  items-center  justify-center  ",children:Array.from({length:6}).map((e,t)=>(0,l.jsx)(m,{},t))}),p=()=>{let e={1:"E",2:"B",3:"G",4:"D",5:"A",6:"E"},[t,n]=(0,r.useState)({}),[s,c]=(0,r.useState)(Array.from({length:24},(e,t)=>t)),[i,m]=(0,r.useState)(!1),p=f(),h=p?[6,5,4,3,2,1]:[1,2,3,4,5,6];function b(e,t){n(n=>{let l="".concat(Object.values(n).length);return{...n,[l]:{id:l,parent:"cell-".concat(e,"-").concat(t),string:e,caseNumber:t}}})}if((0,r.useLayoutEffect)(()=>{m(!0)},[]),!i)return(0,l.jsx)("div",{className:"flex items-center justify-center w-full h-full",children:(0,l.jsx)("div",{className:"animate-pulse text-[#B3BDC7]",children:"Loading..."})});let v=s.map((n,r)=>{let o="case-".concat(n,"-").concat(r);return(0,l.jsx)("div",{id:o,className:"flex md:flex-col",children:h.map(o=>(0,l.jsx)(d,{id:"cell-".concat(o,"-").concat(n,"-").concat(r),caseNumber:n,string:o,onAddNote:b,children:(()=>{let r=Object.values(t).find(e=>e.string===o&&e.caseNumber===n),{interval:s,noteName:c}=function(e,t,n){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"E",r=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],o=n[e],s=(r.findIndex(e=>e===o)+t+1)%r.length;return{interval:({0:"R",1:"m2",2:"2",3:"m3",4:"3",5:"P4",6:"Aug4",7:"5",8:"m6",9:"6",10:"7",11:"M7"})[(s-r.findIndex(e=>e===l)+r.length)%r.length],noteName:r[s]}}(o,n,e,"E");return(null==r?void 0:r.id)?(0,l.jsx)(a,{id:r.id,interval:s,noteName:c},r.id):null})()},"".concat(o,"-").concat(n,"-").concat(r)))},o)});return(0,l.jsx)(o.LB,{onDragEnd:function(e){let{over:t}=e;if(null==t?void 0:t.id){let l=t.id,r=e.active.id,[,o,s]=l.split("-"),c=parseInt(o),a=parseInt(s);n(e=>({...e,[r]:{...e[r],parent:l,string:c,caseNumber:a}}))}},modifiers:[x.lv],children:(0,l.jsxs)("div",{onScroll:function(e){let t=e.target,n=()=>{c(e=>[...e.slice(6),...e.slice(0,6)])};if(p){let e=t.scrollTop+t.clientHeight>=t.scrollHeight-159,l=0===t.scrollTop;e&&(n(),t.scrollTo({top:t.scrollTop-954-40})),l&&c(Array.from({length:24},(e,t)=>t))}else{let e=t.scrollLeft+t.clientWidth>=t.scrollWidth-159,l=0===t.scrollLeft;e&&(t.scrollTo({left:t.scrollLeft-954-40}),n()),l&&c(Array.from({length:24},(e,t)=>t))}},className:" container mx-auto flex flex-col items-center overflow-y-auto md:overflow-x-auto md:flex-row md:justify-start md:overflow-y-hidden my-2 h-full relative flex-grow gap-2",children:[(0,l.jsx)(u,{}),v]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[370,229,130,215,744],()=>t(3550)),_N_E=e.O()}]);