(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{393:(e,t,n)=>{Promise.resolve().then(n.bind(n,8665))},8665:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>F});var l=n(7437);let s=e=>{let{keyName:t,editMode:n,onEditModeChange:s,keyChangeMode:i,onKeyChangeModeChange:a,onKeyChange:r}=e;return(0,l.jsxs)("div",{className:"max-w-7xl flex items-center justify-between gap-[1px] w-full px-4 pb-4 text-[14px] leading-5",children:[n&&!i&&(0,l.jsx)("button",{className:"w-fit py-[6px] px-3 rounded-[100px] ring-1 ring-[#E6FF81] bg-[#3C3F2F] text-[#E6FF81]",onClick:a,children:"Change key"}),n&&i&&(0,l.jsx)("button",{className:"w-[30px] h-[30px] p-[6px] shrink-0 flex items-center justify-center rounded-[100px] ring-1 ring-[#E6FF81] bg-[#3C3F2F] text-[#E6FF81]",onClick:a,children:(0,l.jsx)("img",{src:"/CloseNoteContainer.svg",alt:"Close"})}),i&&(0,l.jsxs)("div",{className:"min-w-0 flex-shrink w-full relative",children:[(0,l.jsx)("div",{className:"pointer-events-none absolute w-[33px] h-full left-0 top-0 bg-gradient-to-r from-[#101013]"}),(0,l.jsxs)("div",{className:"flex overflow-x-auto font-medium",children:[(0,l.jsx)("div",{className:"\n                min-w-[56px] h-[32px] rounded-[24px] p-[6px] flex items-center justify-center \n                bg-[#1D1F2C] text-[#B3BDC7] \n                select-none",children:"Key"}),["C","C#-Db","D","D#-Eb","E","F","F#-Gb","G","G#-Ab","A","A#-Bb","B"].map((e,n)=>(0,l.jsx)("button",{className:"\n                  font-medium\n                  min-w-[56px] h-[32px] rounded-[24px] p-[6px] flex items-center justify-center gap-[2px] \n                  ".concat(t===e?"bg-[#E6FF81] text-[#1D1F2C]":"bg-[#1D1F2C] text-[#B3BDC7]","  \n                  select-none\n                "),onClick:()=>r(e),children:e.includes("-")?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:e.split("-")[0]}),(0,l.jsx)("div",{className:"hidden sm:block rounded-full h-1 w-1 \n                    ".concat(t===e?"bg-[#1D1F2C]":"bg-[#B3BDC7]"," \n                    ")}),(0,l.jsx)("div",{children:e.split("-")[1]})]}):e},n))]}),(0,l.jsx)("div",{className:"pointer-events-none absolute w-[33px] h-full right-0 top-0 bg-gradient-to-r from-transparent to-[#101013]"})]}),(0,l.jsxs)("button",{className:"min-w-fit flex-shrink flex items-center gap-1 w-fit h-8 py-[6px] px-3 rounded-[100px] bg-[#1D1F2C] text-[#B3BDC7] ml-auto select-none",onClick:s,children:[n&&(0,l.jsx)("img",{src:"/CloseNoteContainerWhite.svg",alt:"Close"}),"Edit mode"]})]})};var i=n(2265);let a=()=>(0,l.jsxs)("nav",{className:"flex items-center justify-between w-full h-[38px] sm:h-auto pt-2 px-4 text-[#B3BDC7] text-[11px] leading-3",children:[(0,l.jsx)("h1",{className:"px-4",children:"Acorde"}),(0,l.jsx)("a",{className:"px-4 py-2",href:"./settings",children:"Settings"})]});var r=n(5149);let c=()=>{let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{{t(window.innerWidth<=640);let e=()=>{t(window.innerWidth<=640)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}},[]),e};var o=n(5565);let x=["C","C#-Db","D","D#-Eb","E","F","F#-Gb","G","G#-Ab","A","A#-Bb","B"],d={0:"R",1:"m2",2:"2",3:"m3",4:"3",5:"P4",6:"Aug4",7:"5",8:"m6",9:"6",10:"7",11:"M7"};function m(e,t,n){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"E",s=n[e],i=(x.findIndex(e=>e===s)+t)%x.length;return{interval:d[(i-x.findIndex(e=>e===l)+x.length)%x.length],noteName:x[i]}}var f=n(4446),u=n(8606);let p={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},h=e=>{let{interval:t,editMode:n,stringNum:s,onNutClick:a}=e,[r,c]=(0,i.useState)(!1);(0,i.useEffect)(()=>{if(r){let e=setTimeout(()=>{c(!1)},1e3);return()=>clearTimeout(e)}},[r]);let o=(0,l.jsx)(f.M,{mode:"wait",children:t?(0,l.jsx)(u.E.img,{src:"remove_nut.svg",alt:"remove nut",initial:"initial",animate:"animate",exit:"exit",variants:p,transition:{duration:.2,ease:"easeInOut"},layout:!0},"remove"):(0,l.jsx)(u.E.img,{src:"add_nut.svg",alt:"add nut",initial:"initial",animate:"animate",exit:"exit",variants:p,transition:{duration:.2,ease:"easeInOut"},layout:!0},"add")});return(r&&(o=(0,l.jsx)(f.M,{mode:"wait",children:(0,l.jsx)(u.E.img,{src:"selected_nut.svg",alt:"selected nut",initial:"initial",animate:"animate",exit:"exit",variants:p,transition:{duration:.2,ease:"easeInOut"},layout:!0},"selected")})),n)?(0,l.jsx)("button",{onClick:function(){t||c(!0),a(s)},className:"flex items-center justify-center w-[49px] h-[28px] sm:h-[49px] sm:w-[28px] p-1 text-[#D0D8FF] text-[16px] leading-5 font-semibold",children:(0,l.jsx)("div",{className:" p-[6px] flex items-center justify-center",children:(0,l.jsx)("div",{className:"w-[20px] h-[20px] rounded-full bg-[#192149] hover:bg-[#212C60] flex items-center justify-center",children:o})})}):(0,l.jsx)("div",{className:" flex items-center justify-center w-[49px] sm:h-[49px]  sm:w-[28px] p-1 text-[#D0D8FF]  text-[16px]  leading-5  font-semibold",children:t||(0,l.jsx)("div",{className:"rounded-full h-1 w-1 bg-[#B3BDC7]"})})},g=e=>{let{id:t,className:n,children:s}=e,{isOver:i,setNodeRef:a}=(0,r.Zj)({id:t});return(0,l.jsx)("div",{className:n,ref:a,style:{color:i?"green":void 0},children:s})},b=e=>{let{id:t,children:n,string:s,fretNumber:i,noteState:a,onAddNote:r}=e;return(0,l.jsxs)(g,{id:t,className:"\n      w-[49px] \n      h-[159px] \n      sm:w-[159px] \n      sm:h-[49px] \n      flex \n      items-center \n      justify-center \n      relative\n      before:absolute\n      before:content-['']\n      before:h-full\n      ".concat(a?"before:bg-[#E3EFF1]":"before:bg-[#3E4648]","\n      before:left-1/2\n      before:-translate-x-1/2\n      sm:before:w-full\n      sm:before:top-1/2\n      sm:before:-translate-y-1/2\n      sm:before:left-0\n      sm:before:translate-x-0\n      ").concat({1:"before:w-[1px] sm:before:h-[1px]",2:"before:w-[2px] sm:before:h-[2px]",3:"before:w-[3px] sm:before:h-[3px]",4:"before:w-[4px] sm:before:h-[4px]",5:"before:w-[5px] sm:before:h-[5px]",6:"before:w-[6px] sm:before:h-[6px]"}[s],"\n      "),children:[n,!a&&(0,l.jsx)("button",{onClick:()=>r(s,i),className:"w-6 h-8 rounded-full bg-[#3E4648] px-1 py-2 flex items-center justify-center z-10 text-[#E3EFF1] select-none",children:"+"})]})},j=e=>{let{children:t,className:n,id:s}=e,{attributes:i,listeners:a,setNodeRef:c,transform:o}=(0,r.O1)({id:s}),x=o?{transform:"translate3d(".concat(o.x,"px, ").concat(o.y,"px, 0)"),zIndex:3e3}:{zIndex:1e3};return(0,l.jsx)("div",{className:"touch-none ".concat(n),ref:c,style:x,...a,...i,children:t})},v=e=>{let{id:t,interval:n,noteName:s,state:i}=e;return(0,l.jsx)(j,{id:t,className:"w-[44px] h-[72px] sm:w-[72px] sm:h-[44px] flex relative",children:(0,l.jsxs)("div",{id:t,className:"\n        select-none\n        w-full h-full rounded-[200px] p-1\n        flex flex-col items-center justify-center\n        ".concat("R"===n?"bg-[#E6FF81]":"bg-[#E3EFF1]","\n        ").concat("","\n      "),children:[(0,l.jsx)("div",{className:"text-[#141935] text-[24px] font-semibold leading-7",children:n}),(0,l.jsx)("div",{className:"text-[#535B86] flex flex-col sm:flex-row sm:gap-[2px] justify-center items-center text-[14px] font-semibold leading-4",children:s.includes("-")?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:s.split("-")[0]}),(0,l.jsx)("div",{className:"hidden sm:block rounded-full h-1 w-1 bg-[#535B86]"}),(0,l.jsx)("div",{children:s.split("-")[1]})]}):s})]})})},w={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},N=e=>{let{onClick:t}=e;return(0,l.jsx)(f.M,{mode:"wait",children:(0,l.jsx)(u.E.button,{initial:"initial",animate:"animate",exit:"exit",variants:w,transition:{duration:.2,ease:"easeInOut"},layout:!0,className:"absolute top-8 -left-2 sm:-top-2 sm:left-8 w-8 h-8 flex items-center justify-center z-[1000]",onClick:t,children:(0,l.jsx)("div",{className:"w-5 h-5 rounded-full bg-[#1D1F2C] ring-[1px] ring-[#79747E] flex items-center justify-center",children:(0,l.jsx)("img",{src:"/remove_nut.svg",alt:"close"})})},"remove")})},y=e=>{let{keyName:t,neckIntervals:n,tunning:s,strings:i,editMode:a,onNutClick:r}=e;return(0,l.jsx)("div",{className:" bg-[#192149]  px-4  rounded-full  flex  sm:flex-col sm:h-auto sm:px-0  items-center  justify-center sticky top-0 sm:top-auto sm:left-0 z-[2000] ",children:i.map((e,i)=>{let{interval:c}=m(e,0,s,t);return n["".concat(e,"-0")]||(c=""),(0,l.jsx)(h,{interval:c,stringNum:e,onNutClick:r,editMode:a},i)})})},C=e=>{let{keyName:t,neckIntervals:n,tunning:s,fretNumber:i,index:a,strings:r,editMode:c,onAddNote:o,onRemoveNote:x}=e,d="fret-".concat(i,"-").concat(a);return(0,l.jsxs)("div",{id:d,className:"flex sm:flex-col relative",children:[r.map(e=>(0,l.jsx)(b,{id:"cell-".concat(e,"-").concat(i,"-").concat(a),fretNumber:i,string:e,onAddNote:o,noteState:n["".concat(e,"-").concat(i)],children:(()=>{let r=n["".concat(e,"-").concat(i)];if(!r)return null;let{interval:o,noteName:d}=m(e,i,s,t),f="note-".concat(e,"-").concat(i,"-").concat(a);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{id:f,interval:o,noteName:d,state:r,stringNumber:e,fretNumber:i,editMode:c},f),c&&"dragging"!==r&&(0,l.jsx)(N,{onClick:function(){x(e,i)}},"".concat(f,"-close"))]})})()},"".concat(e,"-").concat(i,"-").concat(a))),(0,l.jsx)("div",{className:"absolute top-0 left-0 w-fit text-[#B3BDC7] text-xs",children:i})]})},E=e=>{let{keyName:t,neckIntervals:n,setNeckIntervals:s,tunning:a,editMode:x}=e,d=(0,r.VT)(r.we,{activationConstraint:{delay:30,tolerance:5}}),m=(0,r.Dy)(d),[f,u]=(0,i.useState)(Array.from({length:72},(e,t)=>t%24+1)),[p,h]=(0,i.useState)(!1),g=c();(0,i.useLayoutEffect)(()=>{h(!0)},[]);let b=g?[6,5,4,3,2,1]:[1,2,3,4,5,6];function j(e,t){s(n=>{if(n["".concat(e,"-").concat(t)])return n;let l="".concat(e,"-").concat(t);return{...n,[l]:"idle"}})}function v(e,t){s(n=>{let l={...n};return delete l["".concat(e,"-").concat(t)],l})}return p?(0,l.jsx)(r.LB,{onDragStart:function(e){let{active:t}=e,[,n,l]=t.id.split("-");s(e=>{let t="".concat(n,"-").concat(l);return{...e,[t]:"dragging"}})},onDragEnd:function(e){let{over:t}=e,[,l,i]=e.active.id.split("-");if(null==t?void 0:t.id){let[,e,a]=t.id.split("-");if(n["".concat(e,"-").concat(a)]){s(e=>({...e,["".concat(l,"-").concat(i)]:"idle"}));return}s(t=>{let n={...t};return delete n["".concat(l,"-").concat(i)],n["".concat(e,"-").concat(a)]="idle",n})}else s(e=>({...e,["".concat(l,"-").concat(i)]:"idle"}))},modifiers:[o.lv],sensors:m,children:(0,l.jsxs)("div",{onScroll:function(e){let t=e.target,n=()=>{u(e=>[...e.slice(12),...e.slice(0,12)])},l=()=>{u(Array.from({length:72},(e,t)=>t%24+1))};if(g){let e=t.scrollTop+t.clientHeight>=t.scrollHeight-159,s=0===t.scrollTop;e&&(t.scrollTop=t.scrollTop-1908-88,n()),s&&l()}else{let e=t.scrollLeft+t.clientWidth>=t.scrollWidth-159,s=0===t.scrollLeft;e&&(t.scrollTo({left:t.scrollLeft-1908-88}),n()),s&&l()}},className:" container mx-auto my-2 sm:my-0 flex flex-col items-center sm:flex-row h-full relative flex-1 overflow-y-auto sm:overflow-x-auto sm:overflow-y-hidden ",children:[(0,l.jsx)(y,{tunning:a,keyName:t,neckIntervals:n,strings:b,editMode:x,onNutClick:function(e){s(t=>{let n={...t},l="".concat(e,"-0");return n[l]?delete n[l]:n[l]="idle",n})}}),(0,l.jsx)("div",{className:" flex flex-col items-center sm:flex-row sm:justify-start mt-[8px] sm:mt-0 sm:ml-[8px] gap-2 ",children:f.map((e,s)=>(0,l.jsx)(C,{fretNumber:e,index:s,keyName:t,tunning:a,strings:b,editMode:x,onAddNote:j,onRemoveNote:v,neckIntervals:n},"".concat(e,"-").concat(s)))})]})}):(0,l.jsx)("div",{className:"flex items-center justify-center w-full h-full",children:(0,l.jsx)("div",{className:"animate-pulse text-[#B3BDC7]",children:"Loading..."})})};function F(){let[e,t]=(0,i.useState)("E"),[n,r]=(0,i.useState)(!1),[c,o]=(0,i.useState)(!1),[m]=(0,i.useState)(["R","3","5"]),[f]=(0,i.useState)({1:"E",2:"B",3:"G",4:"D",5:"A",6:"E"}),[u,p]=(0,i.useState)({});return(0,i.useEffect)(()=>{p(function(e,t,n){let l={};for(let s=1;s<=6;s++){let i=x.findIndex(e=>e===n[Number(s)]);for(let n=0;n<=24;n++){let a=((i+n)%x.length-x.findIndex(e=>e===t)+x.length)%x.length;e.includes(d[a])&&(l["".concat(s,"-").concat(n)]="idle")}}return l}(m,e,f))},[e,m,f]),(0,l.jsxs)("div",{className:"flex flex-col w-full h-dvh items-center bg-[#101013]",children:[(0,l.jsx)(a,{}),(0,l.jsx)(E,{keyName:e,neckIntervals:u,setNeckIntervals:p,tunning:f,editMode:n}),(0,l.jsx)(s,{keyName:e,editMode:n,keyChangeMode:c,onEditModeChange:function(){n&&o(!1),r(!n)},onKeyChangeModeChange:function(){o(!c)},onKeyChange:function(e){t(e)}})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[432,130,215,744],()=>t(393)),_N_E=e.O()}]);