(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{393:(e,t,n)=>{Promise.resolve().then(n.bind(n,5874))},5874:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>U});var s=n(7437),l=n(2265);let i=e=>{let{keyName:t,editMode:n,onEditModeChange:i,keyChangeMode:r,onKeyChangeModeChange:a,onKeyChange:c}=e,o=(0,l.useRef)(null),d=["C","C#-Db","D","D#-Eb","E","F","F#-Gb","G","G#-Ab","A","A#-Bb","B"],x=(0,l.useRef)(64*d.indexOf(t));return(0,l.useEffect)(()=>{r&&o.current&&(o.current.scrollLeft=x.current)},[r]),(0,s.jsxs)("div",{className:"max-w-7xl basis-[82px] shrink-0 flex items-center justify-between gap-[1px] w-full px-4 pt-4 pb-6 text-[14px] leading-5",children:[!n&&(0,s.jsx)("div",{className:"min-w-[56px] h-full flex items-center justify-center text-[#E6FF81] font-bold ring-1 ring-inset ring-[#E6FF81] px-3 py-[6px] rounded-3xl",children:t.includes("-")?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"",children:t.split("-")[0]}),(0,s.jsx)("div",{className:"rounded-full h-1 w-1 bg-[#E6FF81]"}),(0,s.jsx)("div",{className:"",children:t.split("-")[1]})]}):t}),n&&!r&&(0,s.jsx)("button",{className:"w-fit h-full py-[6px] px-3 rounded-[100px] ring-1 ring-inset ring-[#E6FF81] bg-[#3C3F2F] text-[#E6FF81]",onClick:a,children:"Change key"}),n&&r&&(0,s.jsx)("button",{className:"w-[42px] h-full p-[6px] shrink-0 flex items-center justify-center rounded-[100px] ring-1 ring-inset ring-[#E6FF81] bg-[#3C3F2F] text-[#E6FF81]",onClick:a,children:(0,s.jsx)("img",{src:"/CloseNoteContainer.svg",alt:"Close"})}),r&&(0,s.jsxs)("div",{className:"min-w-0 h-full flex-shrink w-full relative",children:[(0,s.jsx)("div",{className:"pointer-events-none absolute w-[33px] h-full left-0 top-0 bg-gradient-to-r from-[#101013]"}),(0,s.jsxs)("div",{ref:o,className:"h-full flex overflow-x-auto font-medium",onScroll:function(e){let t=e.target;x.current=t.scrollLeft},children:[(0,s.jsx)("div",{className:"\n                min-w-[56px] h-full rounded-[24px] p-[6px] flex items-center justify-center \n                bg-[#1D1F2C] text-[#B3BDC7] \n                select-none",children:"Key"}),d.map((e,n)=>(0,s.jsx)("button",{className:"\n                  font-medium\n                  min-w-[56px] h-full rounded-[24px] p-[6px] flex items-center justify-center gap-[2px] \n                  ".concat(t===e?"bg-[#E6FF81] text-[#1D1F2C]":"bg-[#1D1F2C] text-[#B3BDC7]","  \n                  select-none\n                "),onClick:()=>c(e),children:e.includes("-")?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:e.split("-")[0]}),(0,s.jsx)("div",{className:"rounded-full h-1 w-1 \n                    ".concat(t===e?"bg-[#1D1F2C]":"bg-[#B3BDC7]"," \n                    ")}),(0,s.jsx)("div",{children:e.split("-")[1]})]}):e},n))]}),(0,s.jsx)("div",{className:"pointer-events-none absolute w-[33px] h-full right-0 top-0 bg-gradient-to-r from-transparent to-[#101013]"})]}),(0,s.jsxs)("button",{className:"min-w-fit flex-shrink flex items-center gap-1 w-fit h-full py-[6px] px-3 rounded-[100px] bg-[#1D1F2C] text-[#B3BDC7] ml-auto select-none",onClick:i,children:[n&&(0,s.jsx)("img",{src:"/CloseNoteContainerWhite.svg",alt:"Close"}),"Edit mode"]})]})},r=e=>{let{settingsMode:t,toggleSettingsMode:n}=e;return(0,s.jsxs)("nav",{className:"\n  flex items-center justify-between\n  w-full h-[38px] sm:h-auto pt-2 px-4 \n  text-[#B3BDC7] text-[11px] leading-3\n  ".concat(t?"bg-[#181A24]":"bg-transparent","\n  transition-colors ease-in-out\n  ").concat(t?"duration-0":"duration-1000","\n  z-[1000]\n  "),children:[(0,s.jsx)("h1",{className:"px-4",children:"Acorde"}),(0,s.jsx)("button",{className:"px-4 py-2",onClick:n,children:"Settings"})]})};var a=n(5149),c=n(5565);let o=["C","C#-Db","D","D#-Eb","E","F","F#-Gb","G","G#-Ab","A","A#-Bb","B"],d={0:"R",1:"m2",2:"2",3:"m3",4:"3",5:"P4",6:"Aug4",7:"5",8:"m6",9:"6",10:"7",11:"M7"};function x(e,t,n){let s={};for(let l=1;l<=6;l++){let i=o.findIndex(e=>e===n[Number(l)]);for(let n=0;n<=24;n++){let r=((i+n)%o.length-o.findIndex(e=>e===t)+o.length)%o.length;e.includes(d[r])&&(s["".concat(l,"-").concat(n)]={status:"idle",initialPosition:{x:0,y:0}})}}return s}function u(e,t,n){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"E",l=n[e],i=(o.findIndex(e=>e===l)+t)%o.length;return{interval:d[(i-o.findIndex(e=>e===s)+o.length)%o.length],noteName:o[i]}}function h(e,t){let n=(o.findIndex(t=>t===e)+t+o.length)%o.length;return o[n]}var f=n(4446),m=n(8606);let g={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},p=e=>{let{interval:t,editMode:n,stringNum:i,isScrolledDown:r,isScrolledUp:a,cellDimensions:c,onNutClick:o,noteName:d}=e,[x,u]=(0,l.useState)(!1);(0,l.useEffect)(()=>{if(x){let e=setTimeout(()=>{u(!1)},1e3);return()=>clearTimeout(e)}},[x]);let h=(0,s.jsx)(f.M,{mode:"wait",children:t?(0,s.jsxs)(m.E.div,{className:"\n        select-none\n        rounded-[200px] p-1\n        w-[41px] h-[72px] sm:w-[72px] sm:h-[41px]\n        flex flex-col items-center justify-center\n        bg-[#212C60]\n      ",initial:"initial",animate:"animate",exit:"exit",variants:g,transition:{duration:.2,ease:"easeInOut"},layout:"size",children:[(0,s.jsx)("div",{className:"text-[#E3EFF1] text-[24px] font-semibold leading-7",children:t}),(0,s.jsx)("div",{className:"text-[#535B86] flex flex-col sm:flex-row sm:gap-[2px] justify-center items-center text-[14px] font-semibold leading-4",children:d.includes("-")?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:d.split("-")[0]}),(0,s.jsx)("div",{className:"hidden sm:block rounded-full h-1 w-1 bg-[#535B86]"}),(0,s.jsx)("div",{children:d.split("-")[1]})]}):d})]}):(0,s.jsxs)(m.E.svg,{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",initial:"initial",animate:"animate",exit:"exit",variants:g,transition:{duration:.2,ease:"easeInOut"},className:"fill-[#192149] hover:fill-[#212C60]",layout:!0,children:[(0,s.jsx)("rect",{width:"20",height:"20",rx:"10"}),(0,s.jsx)("path",{d:"M10 16V4",stroke:"#E3EFF1",strokeWidth:"2"}),(0,s.jsx)("path",{d:"M4 10H16",stroke:"#E3EFF1",strokeWidth:"2"})]},"add")});return(x&&(h=(0,s.jsx)(f.M,{mode:"wait",children:(0,s.jsx)(m.E.img,{src:"selected_nut.svg",alt:"selected nut",initial:"initial",animate:"animate",exit:"exit",variants:g,transition:{duration:.2,ease:"easeInOut"},layout:!0},"selected")})),n)?(0,s.jsx)("button",{onClick:function(){t||u(!0),o(i)},style:{width:159===c.width?"fit-content":c.width,height:159===c.height?"fit-content":c.height},className:"flex items-center justify-center p-1 text-[#D0D8FF] text-[16px] leading-5 font-semibold",children:h}):(0,s.jsx)(m.E.div,{style:{width:159===c.width?"fit-content":c.width,height:159===c.height?"fit-content":c.height},className:"\n      flex items-center justify-center\n      p-1\n      text-[#D0D8FF] \n      text-[16px] \n      leading-5 \n      font-semibold    \n      ",transition:{duration:.05,ease:"easeInOut"},layout:"size",children:r&&!a&&t?(0,s.jsx)("div",{className:"rounded-full h-1 w-1 bg-[#B3BDC7]"}):t})},j=e=>{let{id:t,className:n,style:l,children:i}=e,{setNodeRef:r}=(0,a.Zj)({id:t});return(0,s.jsx)("div",{style:l,className:n,ref:r,children:i})},b=e=>{let{id:t,children:n,string:l,fretNumber:i,noteState:r,editMode:a,cellDimensions:c,onAddNote:o}=e;return(0,s.jsxs)(j,{id:t,className:"\n      flex \n      items-center \n      justify-center \n      relative\n      before:absolute\n      before:content-['']\n      before:h-full\n      ".concat(r?"before:bg-[#E3EFF1]":"before:bg-[#3E4648]","\n      before:left-1/2\n      before:-translate-x-1/2\n      sm:before:w-full\n      sm:before:top-1/2\n      sm:before:-translate-y-1/2\n      sm:before:left-0\n      sm:before:translate-x-0\n      ").concat({1:"before:w-[1px] sm:before:h-[1px]",2:"before:w-[2px] sm:before:h-[2px]",3:"before:w-[3px] sm:before:h-[3px]",4:"before:w-[4px] sm:before:h-[4px]",5:"before:w-[5px] sm:before:h-[5px]",6:"before:w-[6px] sm:before:h-[6px]"}[l],"\n      "),style:{width:c.width,height:c.height},children:[n,!r&&a&&(0,s.jsx)("button",{onClick:()=>o(l,i),className:"w-6 h-8 rounded-full bg-[#3E4648] px-1 py-2 flex items-center justify-center z-10 text-[#E3EFF1] select-none",children:"+"})]})},w=e=>{var t,n;let{children:l,state:i,editMode:r,className:c,id:o}=e,{attributes:d,listeners:x,setNodeRef:u,transform:h}=(0,a.O1)({id:o}),f=h?{transform:"translate3d(".concat(h.x,"px, ").concat(h.y,"px, 0)"),zIndex:3e3}:{zIndex:1e3},g={type:"spring"};return"dragging"===i.status&&(g={type:"tween",ease:"easeOut",duration:.1,delay:-.01}),(0,s.jsxs)(s.Fragment,{children:[!r&&(0,s.jsx)(m.E.div,{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[44px] h-[72px] sm:w-[72px] sm:h-[44px] the-container"}),(0,s.jsx)(m.E.div,{className:"touch-none ".concat(c),ref:u,style:{zIndex:f.zIndex},...x,...d,initial:i.initialPosition,animate:{x:null!==(t=null==h?void 0:h.x)&&void 0!==t?t:0,y:null!==(n=null==h?void 0:h.y)&&void 0!==n?n:0},transition:g,...r?{}:{drag:!0,dragConstraints:{left:0,right:0,top:0,bottom:0},dragElastic:.1,dragMomentum:!1,dragTransition:{bounceStiffness:600,bounceDamping:10}},children:l})]})},v=e=>{let{id:t,interval:n,noteName:l,state:i,editMode:r}=e;return(0,s.jsx)(w,{id:t,className:"w-[44px] h-[72px] sm:w-[72px] sm:h-[44px] flex relative",state:i,editMode:r,children:(0,s.jsxs)("div",{id:t,className:"\n        select-none\n        w-full h-full rounded-[200px] p-1\n        flex flex-col items-center justify-center\n        ".concat("R"===n?"bg-[#E6FF81]":"bg-[#E3EFF1]","\n        ").concat((i.status,""),"\n      "),children:[(0,s.jsx)("div",{className:"text-[#141935] text-[24px] font-semibold leading-7",children:n}),(0,s.jsx)("div",{className:"text-[#535B86] flex flex-col sm:flex-row sm:gap-[2px] justify-center items-center text-[14px] font-semibold leading-4",children:l.includes("-")?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:l.split("-")[0]}),(0,s.jsx)("div",{className:"hidden sm:block rounded-full h-1 w-1 bg-[#535B86]"}),(0,s.jsx)("div",{children:l.split("-")[1]})]}):l})]})})},N={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},y=e=>{let{onClick:t}=e;return(0,s.jsx)(m.E.button,{initial:"initial",animate:"animate",exit:"exit",variants:N,transition:{duration:.2,ease:"easeInOut"},layout:!0,className:"absolute top-8 -left-2 sm:-top-2 sm:left-8 w-8 h-8 flex items-center justify-center z-[1000]",onClick:t,children:(0,s.jsx)("div",{className:"w-5 h-5 rounded-full bg-[#1D1F2C] ring-[1px] ring-[#79747E] flex items-center justify-center",children:(0,s.jsx)("img",{src:"/remove_nut.svg",alt:"close"})})},"remove")},F=e=>{let{keyName:t,neckIntervals:n,tuning:l,strings:i,editMode:r,isScrolledDown:a,isScrolledUp:c,cellDimensions:o,onNutClick:d}=e;return(0,s.jsx)("div",{className:" sticky top-0 sm:top-auto sm:left-0 z-[2000] bg-[#101013] rounded-b-full sm:rounded-none sm:rounded-r-full ",children:(0,s.jsx)(m.E.div,{className:" bg-[#192149]  rounded-3xl px-4 sm:px-0 sm:py-4 w-[326px] sm:w-auto sm:h-[326px] flex sm:flex-col items-center  justify-center ",layout:!0,transition:{duration:.05,ease:"easeInOut"},children:i.map((e,i)=>{let{interval:x}=u(e,0,l,t);return n["".concat(e,"-0")]||(x=""),(0,s.jsx)(p,{interval:x,stringNum:e,onNutClick:d,editMode:r,isScrolledDown:a,isScrolledUp:c,cellDimensions:o,noteName:l[e]},i)})})})},C=e=>{let{keyName:t,neckIntervals:n,tuning:i,fretNumber:r,index:a,strings:c,editMode:o,cellDimensions:d,onAddNote:x,onRemoveNote:h}=e,m="fret-".concat(r,"-").concat(a),[g,p]=function(){let e=(0,l.useRef)(null),[t,n]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let t=new IntersectionObserver(e=>{let[t]=e;n(t.isIntersecting)},{threshold:.1}),s=e.current;return s&&t.observe(s),()=>{s&&t.unobserve(s)}},[]),[e,t]}(),j=!1;for(let e=0;e<c.length;e++){var w;if((null===(w=n["".concat(c[e],"-").concat(r)])||void 0===w?void 0:w.status)==="dragging"){j=!0;break}}return(0,s.jsxs)("div",{id:m,ref:g,className:"flex sm:flex-col relative  h-[159px]  w-[calc(49px*6)] sm:w-[159px]  sm:h-[calc(49px*6)] items-center justify-center ",children:[(p||j)&&c.map(e=>{var l;return(0,s.jsx)(b,{id:"cell-".concat(e,"-").concat(r,"-").concat(a),fretNumber:r,string:e,noteState:null===(l=n["".concat(e,"-").concat(r)])||void 0===l?void 0:l.status,editMode:o,onAddNote:x,cellDimensions:d,children:(()=>{let l=n["".concat(e,"-").concat(r)];if(!l)return null;let{interval:c,noteName:d}=u(e,r,i,t),x="note-".concat(e,"-").concat(r,"-").concat(a);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{id:x,interval:c,noteName:d,state:l,stringNumber:e,fretNumber:r,editMode:o},x),(0,s.jsx)(f.M,{mode:"wait",children:o&&"dragging"!==l.status&&(0,s.jsx)(y,{onClick:function(){h(e,r)}},"".concat(x,"-close"))})]})})()},"".concat(e,"-").concat(r,"-").concat(a))}),p&&(0,s.jsx)("div",{className:"absolute top-0 left-0 w-fit text-[#B3BDC7] text-xs",children:r})]})},E=e=>{let{enabled:t,children:n,handleDragStart:l,handleDragEnd:i,modifiers:r,sensors:c}=e;return t?(0,s.jsx)(a.LB,{onDragStart:l,onDragEnd:i,modifiers:r,sensors:c,children:n}):(0,s.jsx)(s.Fragment,{children:n})},k=e=>{let{keyName:t,neckIntervals:n,handleAddNote:i,handleRemoveNote:r,handleNutClick:o,startNoteDragging:d,updateNotePosition:x,resetNoteDragging:u,tuning:h,editMode:f,strings:m,isSmallScreen:g,cellDimensions:p}=e,j=(0,a.VT)(a.we,{activationConstraint:{delay:30,tolerance:5}}),b=(0,a.Dy)(j),w=Array.from({length:72},(e,t)=>t%24+1),[v,N]=(0,l.useState)(!1),y=(0,l.useRef)({x:0,y:0}),k=(0,l.useRef)({x:0,y:0}),D=(0,l.useRef)(null),[S,L]=(0,l.useState)(!1),[M,B]=(0,l.useState)(!1);return((0,l.useEffect)(()=>{D.current&&(D.current.scrollTo({left:k.current.x,top:k.current.y,behavior:"auto"}),L(!1),B(!1))},[f]),(0,l.useLayoutEffect)(()=>{N(!0)},[]),v)?(0,s.jsx)(E,{handleDragStart:function(e){let{active:t}=e,[,n,s]=t.id.split("-");d(Number(n),Number(s))},handleDragEnd:function(e){let{over:t}=e,[,s,l]=e.active.id.split("-");if(null==t?void 0:t.id){let[,i,r]=t.id.split("-");if(n["".concat(i,"-").concat(r)]){u(Number(s),Number(l));return}let a=e.delta.x,c=e.delta.y,o=a>0?Math.floor((a+p.width/2)/p.width):Math.ceil((a-p.width/2)/p.width),d=c>0?Math.floor((c+p.height/2)/(p.height+8)):Math.ceil((c-p.height/2)/(p.height+8));a-=o*p.width,c-=d*(p.height+8),x(Number(s),Number(l),Number(i),Number(r),a,c)}else u(Number(s),Number(l))},modifiers:[c.lv],sensors:b,enabled:f,children:(0,s.jsxs)("div",{ref:D,onScroll:function(e){let t=e.target;k.current={x:t.scrollLeft||0,y:t.scrollTop||0};let n=t.scrollTop-y.current.y,s=t.scrollLeft-y.current.x;n<0&&Math.abs(n)>20?(B(!0),L(!1),y.current.y=t.scrollTop):n>0&&Math.abs(n)>150&&(L(!0),B(!1),y.current.y=t.scrollTop),s<0&&Math.abs(s)>20?(B(!0),L(!1),y.current.x=t.scrollLeft):s>0&&Math.abs(s)>150&&(L(!0),B(!1),y.current.x=t.scrollLeft),g?t.scrollTop+t.clientHeight>=t.scrollHeight-p.height&&(t.scrollTop=t.scrollTop-24*p.height-184):t.scrollLeft+t.clientWidth>=t.scrollWidth-p.width&&(t.scrollLeft=t.scrollLeft-24*p.width-184)},className:" container mx-auto mt-2 sm:my-0 flex flex-col items-center sm:flex-row h-full relative flex-1 overflow-y-auto sm:overflow-x-auto sm:overflow-y-hidden custom-scrollbar ",children:[(0,s.jsx)(F,{tuning:h,keyName:t,neckIntervals:n,strings:m,editMode:f,isScrolledDown:S,isScrolledUp:M,onNutClick:o,cellDimensions:p}),(0,s.jsx)("div",{className:" flex flex-col items-center sm:flex-row sm:justify-start mt-[8px] sm:mt-0 sm:ml-[8px] gap-2 ",children:w.map((e,l)=>(0,s.jsx)(C,{fretNumber:e,index:l,keyName:t,tuning:h,strings:m,editMode:f,onAddNote:i,onRemoveNote:r,neckIntervals:n,cellDimensions:p},"".concat(e,"-").concat(l)))})]})}):(0,s.jsx)("div",{className:"flex items-center justify-center w-full h-full",children:(0,s.jsx)("div",{className:"animate-pulse text-[#B3BDC7]",children:"Loading..."})})},D=e=>{let{selectedPreset:t,handleSelectPreset:n,presets:l}=e;return(0,s.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,s.jsx)("span",{className:"",children:"Presets"}),(0,s.jsx)("div",{className:"flex h-[40px] leading-5 text-[#D0D8FF]",children:l.map(e=>(0,s.jsx)("button",{onClick:()=>n(e),className:"w-full h-full rounded-3xl bg-[#192149] text-[14px] flex items-center justify-center",children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("span",{className:"".concat(t===e?"text-[#E3EFF1] font-bold":""),children:e[0].toLocaleUpperCase()+e.slice(1)}),t===e&&(0,s.jsx)("div",{className:"w-1 h-1 bg-[#E3EFF1] rounded-full"})]})},e))})]})},S=(0,s.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("mask",{id:"mask0_825_5301",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"18",height:"18",children:(0,s.jsx)("rect",{width:"18",height:"18",fill:"#D9D9D9"})}),(0,s.jsx)("g",{mask:"url(#mask0_825_5301)",children:(0,s.jsx)("path",{d:"M9 16.5C8.0625 16.5 7.18438 16.3219 6.36563 15.9656C5.54688 15.6094 4.83438 15.1281 4.22813 14.5219C3.62188 13.9156 3.14062 13.2031 2.78438 12.3844C2.42813 11.5656 2.25 10.6875 2.25 9.75H3.75C3.75 11.2125 4.25937 12.4531 5.27812 13.4719C6.29688 14.4906 7.5375 15 9 15C10.4625 15 11.7031 14.4906 12.7219 13.4719C13.7406 12.4531 14.25 11.2125 14.25 9.75C14.25 8.2875 13.7406 7.04688 12.7219 6.02812C11.7031 5.00938 10.4625 4.5 9 4.5H8.8875L10.05 5.6625L9 6.75L6 3.75L9 0.75L10.05 1.8375L8.8875 3H9C9.9375 3 10.8156 3.17813 11.6344 3.53438C12.4531 3.89062 13.1656 4.37188 13.7719 4.97813C14.3781 5.58438 14.8594 6.29688 15.2156 7.11563C15.5719 7.93438 15.75 8.8125 15.75 9.75C15.75 10.6875 15.5719 11.5656 15.2156 12.3844C14.8594 13.2031 14.3781 13.9156 13.7719 14.5219C13.1656 15.1281 12.4531 15.6094 11.6344 15.9656C10.8156 16.3219 9.9375 16.5 9 16.5Z",fill:"#D0D8FF"})})]}),L=(0,s.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("mask",{id:"mask0_825_5429",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"18",height:"18",children:(0,s.jsx)("rect",{width:"18",height:"18",fill:"#D0D8FF"})}),(0,s.jsx)("g",{mask:"url(#mask0_825_5429)",children:(0,s.jsx)("path",{d:"M8.25 9.75H3.75V8.25H8.25V3.75H9.75V8.25H14.25V9.75H9.75V14.25H8.25V9.75Z",fill:"#D0D8FF"})})]}),M=(0,s.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("mask",{id:"mask0_825_5433",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"18",height:"18",children:(0,s.jsx)("rect",{width:"18",height:"18",fill:"#D0D8FF"})}),(0,s.jsx)("g",{mask:"url(#mask0_825_5433)",children:(0,s.jsx)("path",{d:"M3.75 9.75V8.25H14.25V9.75H3.75Z",fill:"#D0D8FF"})})]}),B=(0,s.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("mask",{id:"mask0_825_5383",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"18",height:"18",children:(0,s.jsx)("rect",{width:"18",height:"18",fill:"#D0D8FF"})}),(0,s.jsx)("g",{mask:"url(#mask0_825_5383)",children:(0,s.jsx)("path",{d:"M4.8 14.25L3.75 13.2L7.95 9L3.75 4.8L4.8 3.75L9 7.95L13.2 3.75L14.25 4.8L10.05 9L14.25 13.2L13.2 14.25L9 10.05L4.8 14.25Z",fill:"#D0D8FF"})})]}),O=(0,s.jsx)("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M12.332 11.3251L8.88203 14.7751L7.83203 13.7251L12.332 9.2251L16.832 13.7251L15.782 14.7751L12.332 11.3251Z",fill:"#D0D8FF"})}),I=(0,s.jsx)("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M12.332 12.6749L8.88203 9.2249L7.83203 10.2749L12.332 14.7749L16.832 10.2749L15.782 9.2249L12.332 12.6749Z",fill:"#D0D8FF"})}),_=e=>{let{tuning:t,strings:n,transposePlus:i,transposeMinus:r}=e,[a,c]=(0,l.useState)(!1);function o(){c(!a)}return(0,s.jsxs)("div",{className:"w-full h-[102px] flex flex-col gap-2",children:[(0,s.jsx)("span",{className:"",children:"Transpose"}),(0,s.jsxs)("div",{className:"flex flex-1 h-full leading-5 text-[#D0D8FF]",children:[(0,s.jsx)("button",{className:"w-8 h-full rounded-3xl bg-[#192149] text-[14px] flex items-center justify-center",onClick:a?function(){}:function(){for(let e=1;e<=n.length;e++)r(e)},children:a?S:M}),(0,s.jsx)("div",{className:"flex flex-1 px-1 items-center justify-evenly text-[12px] bg-[#192149] rounded-3xl",children:n.map(e=>{let n=t[e];return(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center w-full h-full",children:[a&&(0,s.jsx)("button",{onClick:()=>r(Number(e)),children:O}),(0,s.jsx)("span",{className:"h-full  flex items-center justify-center  text-center",children:n.split("-")[0]}),a&&(0,s.jsx)("button",{onClick:()=>i(Number(e)),children:I})]},e)})}),(0,s.jsx)("button",{className:"w-8 h-full rounded-3xl bg-[#192149] text-[14px] flex items-center justify-center",onClick:a?o:function(){for(let e=1;e<=n.length;e++)i(e)},children:a?B:L})]}),!a&&(0,s.jsx)("button",{onClick:o,className:"h-[32px] rounded-3xl w-full border border-[#D0D8FF] text-[#D0D8FF]",children:"Custom tuning"})]})},A=e=>{let{stringCount:t,handleChangeStringCount:n}=e;return(0,s.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,s.jsx)("span",{className:"",children:"Number of strings"}),(0,s.jsxs)("div",{className:"flex h-[40px] leading-5 text-[14px] text-[#D0D8FF] rounded-3xl bg-[#192149]",children:[(0,s.jsxs)("button",{onClick:()=>n(6),className:"w-full h-full pl-6 pr-4 pt-1 pb-[6px] flex flex-col items-center justify-center",children:[(0,s.jsx)("span",{className:"".concat(6===t?"text-[#E3EFF1] font-bold":""),children:"6"}),6===t&&(0,s.jsx)("div",{className:"w-1 h-1 bg-[#E3EFF1] rounded-full"})]}),(0,s.jsxs)("button",{onClick:()=>n(5),className:"w-full h-full pl-6 pr-4 pt-1 pb-[6px] flex flex-col items-center justify-center",children:[(0,s.jsx)("span",{className:"".concat(5===t?"text-[#E3EFF1] font-bold":""),children:"5"}),5===t&&(0,s.jsx)("div",{className:"w-1 h-1 bg-[#E3EFF1] rounded-full"})]}),(0,s.jsxs)("button",{onClick:()=>n(4),className:"w-full h-full pl-6 pr-4 pt-1 pb-[6px] flex flex-col items-center justify-center",children:[(0,s.jsx)("span",{className:"".concat(4===t?"text-[#E3EFF1] font-bold":""),children:"4"}),4===t&&(0,s.jsx)("div",{className:"w-1 h-1 bg-[#E3EFF1] rounded-full"})]})]})]})},P=e=>{let{stringOrientation:t,toggleStringOrientation:n}=e;return(0,s.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,s.jsx)("span",{className:"",children:"String orientation"}),(0,s.jsxs)("div",{className:"flex h-[40px] text-[14px] leading-5 text-[#D0D8FF] rounded-3xl bg-[#192149]",children:[(0,s.jsxs)("button",{onClick:n,className:"w-full h-full pl-6 pr-4 pt-1 pb-[6px] flex flex-col items-center justify-center",children:[(0,s.jsx)("span",{className:"".concat("right"===t?"text-[#E3EFF1] font-bold":""),children:"Right"}),"right"===t&&(0,s.jsx)("div",{className:"w-1 h-1 bg-[#E3EFF1] rounded-full"})]}),(0,s.jsxs)("button",{onClick:n,className:"w-full h-full pl-6 pr-4 pt-1 pb-[6px] flex flex-col items-center justify-center",children:[(0,s.jsx)("span",{className:"".concat("left"===t?"text-[#E3EFF1] font-bold":""),children:"Left"}),"left"===t&&(0,s.jsx)("div",{className:"w-1 h-1 bg-[#E3EFF1] rounded-full"})]})]})]})},T=e=>{let{tuning:t,stringCount:n,stringOrientation:l,settingsMode:i,selectedPreset:r,presets:a,strings:c,handleSelectPreset:o,transposePlus:d,transposeMinus:x,toggleStringOrientation:u,handleChangeStringCount:h,handleResetApp:g}=e,p=[...c].sort((e,t)=>e-t);return"right"===l&&p.reverse(),(0,s.jsx)(f.M,{children:i&&(0,s.jsx)(m.E.div,{initial:{height:0},animate:i?{height:350,paddingTop:24}:{height:0,paddingTop:0},exit:{height:0,paddingTop:0},className:"text-[#B3BDC7] text-[11px] leading-3 px-4 overflow-hidden w-full bg-[#181A24] rounded-b-3xl",children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center max-w-[328px] mx-auto gap-4",children:[(0,s.jsx)(D,{selectedPreset:r,presets:a,handleSelectPreset:o}),(0,s.jsx)(_,{tuning:t,strings:p,transposeMinus:x,transposePlus:d}),(0,s.jsxs)("div",{className:"flex items-center w-full gap-4 justify-between",children:[(0,s.jsx)(A,{stringCount:n,handleChangeStringCount:h}),(0,s.jsx)(P,{stringOrientation:l,toggleStringOrientation:u})]}),(0,s.jsx)("button",{onClick:g,className:"self-start text-[#F2B8B5] leading-5 flex items-center justify-center h-8",children:"Reset app"})]})})})},R=()=>{let[e,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{{t(window.innerWidth<=640);let e=()=>{t(window.innerWidth<=640)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}},[]),e},H="neck-intervals-map",z={guitar:{6:"E",5:"A",4:"D",3:"G",2:"B",1:"E"},bass:{6:"B",5:"E",4:"A",3:"D",2:"G",1:"C"},ukulele:{4:"G",3:"C",2:"E",1:"A"}};function U(){let{keyName:e,editMode:t,keyChangeMode:n,tuning:a,neckIntervals:c,settingsMode:o,stringCount:d,presets:u,selectedPreset:f,strings:m,isSmallScreen:g,handleSelectPreset:p,handleChangeStringCount:j,toggleSettingsMode:b,handleAddNote:w,handleRemoveNote:v,handleNutClick:N,startNoteDragging:y,updateNotePosition:F,resetNoteDragging:C,handleEditModeChange:E,handleKeyChangeModeChange:D,handleKeyChange:S,transposePlus:L,transposeMinus:M,toggleStringOrientation:B,stringOrientation:O,handleResetApp:I,cellDimensions:_}=function(e){let[t,n]=(0,l.useState)("E"),[s,i]=(0,l.useState)(!1),[r,a]=(0,l.useState)(!1),[c]=(0,l.useState)(["R","3","5"]),[o,d]=(0,l.useState)("right"),[u,f]=(0,l.useState)(!1),[m,g]=(0,l.useState)(()=>{let e=localStorage.getItem(H);return e?JSON.parse(e):{}}),[p,j]=(0,l.useState)("guitar"),[b,w]=(0,l.useState)(z[p]),[v,N]=(0,l.useState)(6),y=Object.keys(z),F=R(),C={height:159,width:49};5===v?C.width=58.8:4===v&&(C.width=73.5),F||(C.width=159,C.height=49,5===v?C.height=58.8:4!==v||(C.height=73.5)),(0,l.useEffect)(()=>{if(!m[t]){let e=x(c,t,b);g(n=>({...n,[t]:e}))}},[t,c,b]),(0,l.useEffect)(()=>{localStorage.setItem(H,JSON.stringify(m))},[m]);let E=[1,2,3,4,5,6],k=Object.keys(b).length;return E=E.slice(0,k).slice(-v),"bass"===p&&4===v&&(E=[2,3,4,5]),"right"===o&&E.reverse(),F||E.reverse(),{keyName:t,editMode:s,keyChangeMode:r,intervals:c,tuning:b,neckIntervals:m[t]||{},settingsMode:u,selectedPreset:p,presets:y,stringCount:v,strings:E,isSmallScreen:F,handleSelectPreset:function(e){j(e),"guitar"===e&&(N(6),w(z.guitar)),"bass"===e&&(N(5),w(z.bass)),"ukulele"===e&&(N(4),w(z.ukulele))},toggleSettingsMode:function(){f(e=>!e)},handleAddNote:function(e,n){g(s=>{if(s[t]["".concat(e,"-").concat(n)])return s;let l="".concat(e,"-").concat(n),i={...s[t],[l]:{status:"idle",initialPosition:{x:0,y:0}}};return{...s,[t]:i}})},handleRemoveNote:function(e,n){g(s=>{let l={...s};return delete l[t]["".concat(e,"-").concat(n)],l})},handleNutClick:function(e){g(n=>{let s={...n,[t]:{...n[t]}},l="".concat(e,"-0");return s[t][l]?delete s[t][l]:s[t][l]={status:"idle",initialPosition:{x:0,y:0}},s})},startNoteDragging:function(e,n){g(s=>{let l={...s};return l[t]["".concat(e,"-").concat(n)]={status:"dragging",initialPosition:{x:0,y:0}},l})},updateNotePosition:function(e,n,s,l,i,r){g(a=>{let c={...a};return delete c[t]["".concat(e,"-").concat(n)],c[t]["".concat(s,"-").concat(l)]={...c[t]["".concat(s,"-").concat(l)],initialPosition:{x:i,y:r},status:"idle"},c})},resetNoteDragging:function(e,n){g(s=>{let l={...s};return l[t]["".concat(e,"-").concat(n)]={status:"idle",initialPosition:{x:0,y:0}},l})},handleEditModeChange:function(){s&&a(!1),i(!s)},handleKeyChangeModeChange:function(){a(!r)},handleKeyChange:function(e){n(e)},handleChangeStringCount:function(e){Object.keys(b).length<e&&w(t=>{let n={...t};for(let s=Object.keys(t).length+1;s<=e;s++)n[s]="E";return n}),N(e)},transposePlus:function(e){w(t=>{let n={...t},s=h(t[e],1);return n[e]=s,n})},transposeMinus:function(e){w(t=>{let n={...t},s=h(t[e],-1);return n[e]=s,n})},toggleStringOrientation:function(){d(e=>"right"===e?"left":"right")},stringOrientation:o,handleResetApp:function(){g({}),n("E"),i(!1),a(!1),d("right"),f(!1),j("guitar"),w(z.guitar),N(6);let e=x(c,t,z.guitar);g(n=>({...n,[t]:e})),localStorage.removeItem(H)},cellDimensions:C}}(0);return(0,s.jsxs)("div",{className:"flex flex-col w-full h-dvh items-center bg-[#101013]",children:[(0,s.jsx)(r,{settingsMode:o,toggleSettingsMode:b}),(0,s.jsx)(T,{tuning:a,stringCount:d,stringOrientation:O,settingsMode:o,selectedPreset:f,presets:u,strings:m,handleSelectPreset:p,transposePlus:L,transposeMinus:M,toggleStringOrientation:B,handleChangeStringCount:j,handleResetApp:I}),(0,s.jsx)(k,{keyName:e,neckIntervals:c,tuning:a,editMode:t,strings:m,isSmallScreen:g,handleAddNote:w,handleRemoveNote:v,handleNutClick:N,startNoteDragging:y,updateNotePosition:F,resetNoteDragging:C,cellDimensions:_}),(0,s.jsx)(i,{keyName:e,editMode:t,keyChangeMode:n,onEditModeChange:E,onKeyChangeModeChange:D,onKeyChange:S})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[432,130,215,744],()=>t(393)),_N_E=e.O()}]);