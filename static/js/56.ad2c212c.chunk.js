"use strict";(self.webpackChunkemarket=self.webpackChunkemarket||[]).push([[56],{56:(e,i,t)=>{t.r(i),t.d(i,{default:()=>d});var s=t(43),r=t(731),c=t(475),l=t(614),o=(t(298),t(120)),n=t(961),a=t(579);const d=e=>{let{prompt:i}=e;const{books:t,fieldState:d,setSpecificBook:m,promoBookSlider:u,theme:p}=(0,s.useContext)(r.O),[f,b]=(0,s.useState)(!1),[k,h]=(0,s.useState)(!1),[g,v]=(0,s.useState)(7),w=(0,s.useRef)(null),j=(0,s.useMemo)((()=>({promo:3,BookList:2,Search:2,Filter:2})),[]),M=e=>{if(w.current){const i=w.current.clientWidth;w.current.scrollBy({left:"left"===e?-i:i,behavior:"smooth"})}},y=()=>{const e=window.innerWidth;v(e<600?7:e<1200?12:20)},x=(0,l.A)(y,300);(0,s.useEffect)((()=>(y(),window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x)})),[x]);const E=(0,s.useMemo)((()=>t.filter((e=>e.Tip.split(",").includes("promo")&&"0"!==e.Visibility))),[t]),L=(0,s.useMemo)((()=>Object.keys(u).filter((e=>e!==i)).flatMap((e=>u[e])).map((e=>t.find((i=>i.id===e)))).filter((e=>e&&"0"!==e.Visibility&&!e.Tip.split(",").includes("promo")&&!E.includes(e)))),[t,u,i,E]),N=(0,s.useMemo)((()=>j.promo+Object.keys(j).filter((e=>e!==i)).reduce(((e,i)=>e+j[i]),0)),[j,i]),S=(0,s.useMemo)((()=>Math.round(j.promo/N*g)),[j,N,g]),C=(0,s.useMemo)((()=>Object.keys(j).filter((e=>"promo"!==e&&e!==i)).reduce(((e,i)=>({...e,[i]:Math.round(j[i]/N*g)})),{})),[j,g,i,N]),z=(0,s.useMemo)((()=>{const e=[...E.slice(0,S).map((e=>e.id)),...Object.keys(C).flatMap((e=>L.filter((i=>u[e].includes(i.id))).slice(0,C[e]).map((e=>e.id))))];return Array.from(new Set(e)).slice(0,g)}),[E,S,C,L,g,u]),A=e=>{const i=e.imageblockpublic&&""!==e.imageblockpublic?e.imageblockpublic.split(",").map((e=>(0,n.A)({folder:"img",filename:e}))):e.imageblock.split(",");return e.imagepublic&&""!==e.imagepublic?(0,n.A)({folder:"img",filename:e.imagepublic}):e.image&&""!==e.image?e.image:i[0]},O=(0,s.useCallback)((()=>{if(w.current){const{scrollLeft:e,scrollWidth:i,clientWidth:t}=w.current;b(e>0),h(e<i-t)}}),[]);return(0,s.useEffect)((()=>{const e=w.current;return O(),window.addEventListener("resize",O),e&&e.addEventListener("scroll",O),()=>{window.removeEventListener("resize",O),e&&e.removeEventListener("scroll",O)}}),[O,z]),(0,a.jsxs)("div",{className:"slider-wrapper ".concat(p),children:[f&&(0,a.jsx)("button",{className:"scroll-button-specific left",onClick:()=>M("left"),children:"<"}),(0,a.jsx)("div",{className:"slider-container-specific",ref:w,children:z.map((e=>{const i=t.find((i=>i.id===e));return i&&(0,a.jsxs)(c.N_,{className:"book-card-specific",to:"/specificbook",onClick:()=>(e=>{m({id:e})})(i.id),children:[(0,a.jsx)(o.A,{src:A(i),alt:i.title,className:"artmini-specific"}),i.price&&(0,a.jsxs)("b",{className:"book-size",children:[i.price,d.payment?d.payment:""]}),(0,a.jsx)("div",{children:i.title&&(i.title.length>=12?i.title.slice(0,9)+"...":i.title)})]},i.id)}))}),k&&(0,a.jsx)("button",{className:"scroll-button-specific right",onClick:()=>M("right"),children:">"})]})}}}]);
//# sourceMappingURL=56.ad2c212c.chunk.js.map