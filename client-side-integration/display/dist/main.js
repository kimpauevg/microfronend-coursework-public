(()=>{var e,r,t,n,a,o,i,l,u,s,d,f,p,h,c={966:(e,r,t)=>{Promise.all([t.e(822),t.e(918)]).then(t.bind(t,918))}},v={};function m(e){var r=v[e];if(void 0!==r)return r.exports;var t=v[e]={exports:{}};return c[e](t,t.exports,m),t.exports}m.m=c,m.c=v,m.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return m.d(r,{a:r}),r},m.d=(e,r)=>{for(var t in r)m.o(r,t)&&!m.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},m.f={},m.e=e=>Promise.all(Object.keys(m.f).reduce(((r,t)=>(m.f[t](e,r),r)),[])),m.u=e=>e+".js",m.miniCssF=e=>e+".css",m.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="display:",m.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,m.nc&&i.setAttribute("nonce",m.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},m.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{m.S={};var e={},r={};m.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];m.o(m.S,t)||(m.S[t]={});var o=m.S[t],i="display",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},l=a[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("react-dom","18.2.0",(()=>Promise.all([m.e(935),m.e(822)]).then((()=>()=>m(935))))),l("react","18.2.0",(()=>m.e(294).then((()=>()=>m(294)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),m.p="http://display-csi.localhost/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,d,f=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(d=(typeof(s=r[i]))[0]))return!u||("u"==f?l>n&&!o:""==f!=o);if("u"==d){if(!u||"u"!=f)return!1}else if(u)if(f==d)if(l<=n){if(s!=e[l])return!1}else{if(o?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=f&&"n"!=f){if(o||l<=n)return!1;u=!1,l--}else{if(l<=n||d<f!=o)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,l--)}}var p=[],h=p.pop.bind(p);for(i=1;i<e.length;i++){var c=e[i];p.push(1==c?h()|h():2==c?h()&h():c?a(c,r):!h())}return!!h()},o=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||n(e,r)?r:e),0))&&t[r]},i=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},l=e=>(e.loaded=1,e.get()),s=(u=e=>function(r,t,n,a){var o=m.I(r);return o&&o.then?o.then(e.bind(e,r,m.S[r],t,n,a)):e(r,m.S[r],t,n,a)})(((e,r,t,n)=>r&&m.o(r,t)?l(o(r,t)):n())),d=u(((e,r,t,n,a)=>{var o=r&&m.o(r,t)&&i(r,t,n);return o?l(o):a()})),f={},p={822:()=>d("default","react",[1,18,2,0],(()=>m.e(294).then((()=>()=>m(294))))),171:()=>s("default","react-dom",(()=>m.e(935).then((()=>()=>m(935)))))},h={822:[822],918:[171]},m.f.consumes=(e,r)=>{m.o(h,e)&&h[e].forEach((e=>{if(m.o(f,e))return r.push(f[e]);var t=r=>{f[e]=0,m.m[e]=t=>{delete m.c[e],t.exports=r()}},n=r=>{delete f[e],m.m[e]=t=>{throw delete m.c[e],r}};try{var a=p[e]();a.then?r.push(f[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{if("undefined"!=typeof document){var e={179:0};m.f.miniCss=(r,t)=>{e[r]?t.push(e[r]):0!==e[r]&&{918:1}[r]&&t.push(e[r]=(e=>new Promise(((r,t)=>{var n=m.miniCssF(e),a=m.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var a=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===r))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===r)return i}})(n,a))return r();((e,r,t,n,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=t=>{if(o.onerror=o.onload=null,"load"===t.type)n();else{var i=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,o.parentNode&&o.parentNode.removeChild(o),a(u)}},o.href=r,document.head.appendChild(o)})(e,a,0,r,t)})))(r).then((()=>{e[r]=0}),(t=>{throw delete e[r],t})))}}})(),(()=>{var e={179:0};m.f.j=(r,t)=>{var n=m.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(822!=r){var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=m.p+m.u(r),i=new Error;m.l(o,(t=>{if(m.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,a,o=t[0],i=t[1],l=t[2],u=0;if(o.some((r=>0!==e[r]))){for(n in i)m.o(i,n)&&(m.m[n]=i[n]);l&&l(m)}for(r&&r(t);u<o.length;u++)a=o[u],m.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkdisplay=self.webpackChunkdisplay||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),m(966)})();