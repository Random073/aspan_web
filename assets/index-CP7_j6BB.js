(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ul(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const pt={},Dr=[],Bn=()=>{},mm=()=>!1,ca=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Nl=n=>n.startsWith("onUpdate:"),Lt=Object.assign,Fl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},gm=Object.prototype.hasOwnProperty,at=(n,e)=>gm.call(n,e),Oe=Array.isArray,Ur=n=>la(n)==="[object Map]",Yh=n=>la(n)==="[object Set]",Ve=n=>typeof n=="function",Mt=n=>typeof n=="string",Fi=n=>typeof n=="symbol",mt=n=>n!==null&&typeof n=="object",jh=n=>(mt(n)||Ve(n))&&Ve(n.then)&&Ve(n.catch),Kh=Object.prototype.toString,la=n=>Kh.call(n),_m=n=>la(n).slice(8,-1),$h=n=>la(n)==="[object Object]",Ol=n=>Mt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Es=Ul(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ua=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},vm=/-(\w)/g,_n=ua(n=>n.replace(vm,(e,t)=>t?t.toUpperCase():"")),ym=/\B([A-Z])/g,dr=ua(n=>n.replace(ym,"-$1").toLowerCase()),da=ua(n=>n.charAt(0).toUpperCase()+n.slice(1)),Pa=ua(n=>n?`on${da(n)}`:""),Ii=(n,e)=>!Object.is(n,e),Ia=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Zh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},xm=n=>{const e=parseFloat(n);return isNaN(e)?n:e},bm=n=>{const e=Mt(n)?Number(n):NaN;return isNaN(e)?n:e};let Tu;const ha=()=>Tu||(Tu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bl(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Mt(i)?Tm(i):Bl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Mt(n)||mt(n))return n}const Sm=/;(?![^(]*\))/g,Mm=/:([^]+)/,Em=/\/\*[^]*?\*\//g;function Tm(n){const e={};return n.replace(Em,"").split(Sm).forEach(t=>{if(t){const i=t.split(Mm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Fs(n){let e="";if(Mt(n))e=n;else if(Oe(n))for(let t=0;t<n.length;t++){const i=Fs(n[t]);i&&(e+=i+" ")}else if(mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Am="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wm=Ul(Am);function Jh(n){return!!n||n===""}const Qh=n=>!!(n&&n.__v_isRef===!0),En=n=>Mt(n)?n:n==null?"":Oe(n)||mt(n)&&(n.toString===Kh||!Ve(n.toString))?Qh(n)?En(n.value):JSON.stringify(n,ef,2):String(n),ef=(n,e)=>Qh(e)?ef(n,e.value):Ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[La(i,s)+" =>"]=r,t),{})}:Yh(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>La(t))}:Fi(e)?La(e):mt(e)&&!Oe(e)&&!$h(e)?String(e):e,La=(n,e="")=>{var t;return Fi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sn;class Rm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=sn,!e&&sn&&(this.index=(sn.scopes||(sn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=sn;try{return sn=this,e()}finally{sn=t}}}on(){sn=this}off(){sn=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Cm(){return sn}let ft;const Da=new WeakSet;class tf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,sn&&sn.active&&sn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Da.has(this)&&(Da.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||rf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Au(this),sf(this);const e=ft,t=Cn;ft=this,Cn=!0;try{return this.fn()}finally{of(this),ft=e,Cn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)zl(e);this.deps=this.depsTail=void 0,Au(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Da.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wc(this)&&this.run()}get dirty(){return wc(this)}}let nf=0,Ts,As;function rf(n,e=!1){if(n.flags|=8,e){n.next=As,As=n;return}n.next=Ts,Ts=n}function kl(){nf++}function Hl(){if(--nf>0)return;if(As){let e=As;for(As=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ts;){let e=Ts;for(Ts=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function sf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function of(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),zl(i),Pm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function wc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(af(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function af(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Os))return;n.globalVersion=Os;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!wc(n)){n.flags&=-3;return}const t=ft,i=Cn;ft=n,Cn=!0;try{sf(n);const r=n.fn(n._value);(e.version===0||Ii(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ft=t,Cn=i,of(n),n.flags&=-3}}function zl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)zl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Pm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Cn=!0;const cf=[];function Oi(){cf.push(Cn),Cn=!1}function Bi(){const n=cf.pop();Cn=n===void 0?!0:n}function Au(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ft;ft=void 0;try{e()}finally{ft=t}}}let Os=0;class Im{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ft||!Cn||ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ft)t=this.activeLink=new Im(ft,this),ft.deps?(t.prevDep=ft.depsTail,ft.depsTail.nextDep=t,ft.depsTail=t):ft.deps=ft.depsTail=t,lf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ft.depsTail,t.nextDep=void 0,ft.depsTail.nextDep=t,ft.depsTail=t,ft.deps===t&&(ft.deps=i)}return t}trigger(e){this.version++,Os++,this.notify(e)}notify(e){kl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Hl()}}}function lf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)lf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Rc=new WeakMap,ar=Symbol(""),Cc=Symbol(""),Bs=Symbol("");function Bt(n,e,t){if(Cn&&ft){let i=Rc.get(n);i||Rc.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Vl),r.map=i,r.key=t),r.track()}}function ri(n,e,t,i,r,s){const o=Rc.get(n);if(!o){Os++;return}const a=c=>{c&&c.trigger()};if(kl(),e==="clear")o.forEach(a);else{const c=Oe(n),l=c&&Ol(t);if(c&&t==="length"){const u=Number(i);o.forEach((d,h)=>{(h==="length"||h===Bs||!Fi(h)&&h>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),l&&a(o.get(Bs)),e){case"add":c?l&&a(o.get("length")):(a(o.get(ar)),Ur(n)&&a(o.get(Cc)));break;case"delete":c||(a(o.get(ar)),Ur(n)&&a(o.get(Cc)));break;case"set":Ur(n)&&a(o.get(ar));break}}Hl()}function fr(n){const e=nt(n);return e===n?e:(Bt(e,"iterate",Bs),gn(n)?e:e.map(kt))}function fa(n){return Bt(n=nt(n),"iterate",Bs),n}const Lm={__proto__:null,[Symbol.iterator](){return Ua(this,Symbol.iterator,kt)},concat(...n){return fr(this).concat(...n.map(e=>Oe(e)?fr(e):e))},entries(){return Ua(this,"entries",n=>(n[1]=kt(n[1]),n))},every(n,e){return qn(this,"every",n,e,void 0,arguments)},filter(n,e){return qn(this,"filter",n,e,t=>t.map(kt),arguments)},find(n,e){return qn(this,"find",n,e,kt,arguments)},findIndex(n,e){return qn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return qn(this,"findLast",n,e,kt,arguments)},findLastIndex(n,e){return qn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return qn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Na(this,"includes",n)},indexOf(...n){return Na(this,"indexOf",n)},join(n){return fr(this).join(n)},lastIndexOf(...n){return Na(this,"lastIndexOf",n)},map(n,e){return qn(this,"map",n,e,void 0,arguments)},pop(){return ls(this,"pop")},push(...n){return ls(this,"push",n)},reduce(n,...e){return wu(this,"reduce",n,e)},reduceRight(n,...e){return wu(this,"reduceRight",n,e)},shift(){return ls(this,"shift")},some(n,e){return qn(this,"some",n,e,void 0,arguments)},splice(...n){return ls(this,"splice",n)},toReversed(){return fr(this).toReversed()},toSorted(n){return fr(this).toSorted(n)},toSpliced(...n){return fr(this).toSpliced(...n)},unshift(...n){return ls(this,"unshift",n)},values(){return Ua(this,"values",kt)}};function Ua(n,e,t){const i=fa(n),r=i[e]();return i!==n&&!gn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Dm=Array.prototype;function qn(n,e,t,i,r,s){const o=fa(n),a=o!==n&&!gn(n),c=o[e];if(c!==Dm[e]){const d=c.apply(n,s);return a?kt(d):d}let l=t;o!==n&&(a?l=function(d,h){return t.call(this,kt(d),h,n)}:t.length>2&&(l=function(d,h){return t.call(this,d,h,n)}));const u=c.call(o,l,i);return a&&r?r(u):u}function wu(n,e,t,i){const r=fa(n);let s=t;return r!==n&&(gn(n)?t.length>3&&(s=function(o,a,c){return t.call(this,o,a,c,n)}):s=function(o,a,c){return t.call(this,o,kt(a),c,n)}),r[e](s,...i)}function Na(n,e,t){const i=nt(n);Bt(i,"iterate",Bs);const r=i[e](...t);return(r===-1||r===!1)&&Xl(t[0])?(t[0]=nt(t[0]),i[e](...t)):r}function ls(n,e,t=[]){Oi(),kl();const i=nt(n)[e].apply(n,t);return Hl(),Bi(),i}const Um=Ul("__proto__,__v_isRef,__isVue"),uf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Fi));function Nm(n){Fi(n)||(n=String(n));const e=nt(this);return Bt(e,"has",n),e.hasOwnProperty(n)}class df{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Xm:mf:s?pf:ff).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Oe(e);if(!r){let c;if(o&&(c=Lm[t]))return c;if(t==="hasOwnProperty")return Nm}const a=Reflect.get(e,t,zt(e)?e:i);return(Fi(t)?uf.has(t):Um(t))||(r||Bt(e,"get",t),s)?a:zt(a)?o&&Ol(t)?a:a.value:mt(a)?r?_f(a):pa(a):a}}class hf extends df{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const c=cr(s);if(!gn(i)&&!cr(i)&&(s=nt(s),i=nt(i)),!Oe(e)&&zt(s)&&!zt(i))return c?!1:(s.value=i,!0)}const o=Oe(e)&&Ol(t)?Number(t)<e.length:at(e,t),a=Reflect.set(e,t,i,zt(e)?e:r);return e===nt(r)&&(o?Ii(i,s)&&ri(e,"set",t,i):ri(e,"add",t,i)),a}deleteProperty(e,t){const i=at(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&ri(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Fi(t)||!uf.has(t))&&Bt(e,"has",t),i}ownKeys(e){return Bt(e,"iterate",Oe(e)?"length":ar),Reflect.ownKeys(e)}}class Fm extends df{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Om=new hf,Bm=new Fm,km=new hf(!0);const Pc=n=>n,oo=n=>Reflect.getPrototypeOf(n);function Hm(n,e,t){return function(...i){const r=this.__v_raw,s=nt(r),o=Ur(s),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=r[n](...i),u=t?Pc:e?Ic:kt;return!e&&Bt(s,"iterate",c?Cc:ar),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function ao(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function zm(n,e){const t={get(r){const s=this.__v_raw,o=nt(s),a=nt(r);n||(Ii(r,a)&&Bt(o,"get",r),Bt(o,"get",a));const{has:c}=oo(o),l=e?Pc:n?Ic:kt;if(c.call(o,r))return l(s.get(r));if(c.call(o,a))return l(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Bt(nt(r),"iterate",ar),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=nt(s),a=nt(r);return n||(Ii(r,a)&&Bt(o,"has",r),Bt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,c=nt(a),l=e?Pc:n?Ic:kt;return!n&&Bt(c,"iterate",ar),a.forEach((u,d)=>r.call(s,l(u),l(d),o))}};return Lt(t,n?{add:ao("add"),set:ao("set"),delete:ao("delete"),clear:ao("clear")}:{add(r){!e&&!gn(r)&&!cr(r)&&(r=nt(r));const s=nt(this);return oo(s).has.call(s,r)||(s.add(r),ri(s,"add",r,r)),this},set(r,s){!e&&!gn(s)&&!cr(s)&&(s=nt(s));const o=nt(this),{has:a,get:c}=oo(o);let l=a.call(o,r);l||(r=nt(r),l=a.call(o,r));const u=c.call(o,r);return o.set(r,s),l?Ii(s,u)&&ri(o,"set",r,s):ri(o,"add",r,s),this},delete(r){const s=nt(this),{has:o,get:a}=oo(s);let c=o.call(s,r);c||(r=nt(r),c=o.call(s,r)),a&&a.call(s,r);const l=s.delete(r);return c&&ri(s,"delete",r,void 0),l},clear(){const r=nt(this),s=r.size!==0,o=r.clear();return s&&ri(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Hm(r,n,e)}),t}function Gl(n,e){const t=zm(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(at(t,r)&&r in i?t:i,r,s)}const Vm={get:Gl(!1,!1)},Gm={get:Gl(!1,!0)},Wm={get:Gl(!0,!1)};const ff=new WeakMap,pf=new WeakMap,mf=new WeakMap,Xm=new WeakMap;function qm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ym(n){return n.__v_skip||!Object.isExtensible(n)?0:qm(_m(n))}function pa(n){return cr(n)?n:Wl(n,!1,Om,Vm,ff)}function gf(n){return Wl(n,!1,km,Gm,pf)}function _f(n){return Wl(n,!0,Bm,Wm,mf)}function Wl(n,e,t,i,r){if(!mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Ym(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Nr(n){return cr(n)?Nr(n.__v_raw):!!(n&&n.__v_isReactive)}function cr(n){return!!(n&&n.__v_isReadonly)}function gn(n){return!!(n&&n.__v_isShallow)}function Xl(n){return n?!!n.__v_raw:!1}function nt(n){const e=n&&n.__v_raw;return e?nt(e):n}function jm(n){return!at(n,"__v_skip")&&Object.isExtensible(n)&&Zh(n,"__v_skip",!0),n}const kt=n=>mt(n)?pa(n):n,Ic=n=>mt(n)?_f(n):n;function zt(n){return n?n.__v_isRef===!0:!1}function ks(n){return vf(n,!1)}function Km(n){return vf(n,!0)}function vf(n,e){return zt(n)?n:new $m(n,e)}class $m{constructor(e,t){this.dep=new Vl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:nt(e),this._value=t?e:kt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||gn(e)||cr(e);e=i?e:nt(e),Ii(e,t)&&(this._rawValue=e,this._value=i?e:kt(e),this.dep.trigger())}}function Fr(n){return zt(n)?n.value:n}const Zm={get:(n,e,t)=>e==="__v_raw"?n:Fr(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return zt(r)&&!zt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function yf(n){return Nr(n)?n:new Proxy(n,Zm)}class Jm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Vl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Os-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return rf(this,!0),!0}get value(){const e=this.dep.track();return af(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Qm(n,e,t=!1){let i,r;return Ve(n)?i=n:(i=n.get,r=n.set),new Jm(i,r,t)}const co={},Ko=new WeakMap;let Qi;function eg(n,e=!1,t=Qi){if(t){let i=Ko.get(t);i||Ko.set(t,i=[]),i.push(n)}}function tg(n,e,t=pt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:c}=t,l=x=>r?x:gn(x)||r===!1||r===0?wi(x,1):wi(x);let u,d,h,f,g=!1,_=!1;if(zt(n)?(d=()=>n.value,g=gn(n)):Nr(n)?(d=()=>l(n),g=!0):Oe(n)?(_=!0,g=n.some(x=>Nr(x)||gn(x)),d=()=>n.map(x=>{if(zt(x))return x.value;if(Nr(x))return l(x);if(Ve(x))return c?c(x,2):x()})):Ve(n)?e?d=c?()=>c(n,2):n:d=()=>{if(h){Oi();try{h()}finally{Bi()}}const x=Qi;Qi=u;try{return c?c(n,3,[f]):n(f)}finally{Qi=x}}:d=Bn,e&&r){const x=d,I=r===!0?1/0:r;d=()=>wi(x(),I)}const m=Cm(),p=()=>{u.stop(),m&&m.active&&Fl(m.effects,u)};if(s&&e){const x=e;e=(...I)=>{x(...I),p()}}let A=_?new Array(n.length).fill(co):co;const T=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const I=u.run();if(r||g||(_?I.some((P,C)=>Ii(P,A[C])):Ii(I,A))){h&&h();const P=Qi;Qi=u;try{const C=[I,A===co?void 0:_&&A[0]===co?[]:A,f];c?c(e,3,C):e(...C),A=I}finally{Qi=P}}}else u.run()};return a&&a(T),u=new tf(d),u.scheduler=o?()=>o(T,!1):T,f=x=>eg(x,!1,u),h=u.onStop=()=>{const x=Ko.get(u);if(x){if(c)c(x,4);else for(const I of x)I();Ko.delete(u)}},e?i?T(!0):A=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function wi(n,e=1/0,t){if(e<=0||!mt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,zt(n))wi(n.value,e,t);else if(Oe(n))for(let i=0;i<n.length;i++)wi(n[i],e,t);else if(Yh(n)||Ur(n))n.forEach(i=>{wi(i,e,t)});else if($h(n)){for(const i in n)wi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&wi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zs(n,e,t,i){try{return i?n(...i):n()}catch(r){ma(r,e,t)}}function In(n,e,t,i){if(Ve(n)){const r=Zs(n,e,t,i);return r&&jh(r)&&r.catch(s=>{ma(s,e,t)}),r}if(Oe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(In(n[s],e,t,i));return r}}function ma(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||pt;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,c,l)===!1)return}a=a.parent}if(s){Oi(),Zs(s,null,10,[n,c,l]),Bi();return}}ng(n,t,r,i,o)}function ng(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const qt=[];let Un=-1;const Or=[];let Mi=null,Cr=0;const xf=Promise.resolve();let $o=null;function bf(n){const e=$o||xf;return n?e.then(this?n.bind(this):n):e}function ig(n){let e=Un+1,t=qt.length;for(;e<t;){const i=e+t>>>1,r=qt[i],s=Hs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function ql(n){if(!(n.flags&1)){const e=Hs(n),t=qt[qt.length-1];!t||!(n.flags&2)&&e>=Hs(t)?qt.push(n):qt.splice(ig(e),0,n),n.flags|=1,Sf()}}function Sf(){$o||($o=xf.then(Ef))}function rg(n){Oe(n)?Or.push(...n):Mi&&n.id===-1?Mi.splice(Cr+1,0,n):n.flags&1||(Or.push(n),n.flags|=1),Sf()}function Ru(n,e,t=Un+1){for(;t<qt.length;t++){const i=qt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;qt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Mf(n){if(Or.length){const e=[...new Set(Or)].sort((t,i)=>Hs(t)-Hs(i));if(Or.length=0,Mi){Mi.push(...e);return}for(Mi=e,Cr=0;Cr<Mi.length;Cr++){const t=Mi[Cr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Mi=null,Cr=0}}const Hs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ef(n){try{for(Un=0;Un<qt.length;Un++){const e=qt[Un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Un<qt.length;Un++){const e=qt[Un];e&&(e.flags&=-2)}Un=-1,qt.length=0,Mf(),$o=null,(qt.length||Or.length)&&Ef()}}let pn=null,Tf=null;function Zo(n){const e=pn;return pn=n,Tf=n&&n.type.__scopeId||null,e}function bt(n,e=pn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&ku(-1);const s=Zo(e);let o;try{o=n(...r)}finally{Zo(s),i._d&&ku(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Vi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(Oi(),In(c,t,8,[n.el,a,n,e]),Bi())}}const sg=Symbol("_vte"),Af=n=>n.__isTeleport,Ei=Symbol("_leaveCb"),lo=Symbol("_enterCb");function og(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return va(()=>{n.isMounted=!0}),Nf(()=>{n.isUnmounting=!0}),n}const dn=[Function,Array],wf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dn,onEnter:dn,onAfterEnter:dn,onEnterCancelled:dn,onBeforeLeave:dn,onLeave:dn,onAfterLeave:dn,onLeaveCancelled:dn,onBeforeAppear:dn,onAppear:dn,onAfterAppear:dn,onAppearCancelled:dn},Rf=n=>{const e=n.subTree;return e.component?Rf(e.component):e},ag={name:"BaseTransition",props:wf,setup(n,{slots:e}){const t=s_(),i=og();return()=>{const r=e.default&&If(e.default(),!0);if(!r||!r.length)return;const s=Cf(r),o=nt(n),{mode:a}=o;if(i.isLeaving)return Fa(s);const c=Cu(s);if(!c)return Fa(s);let l=Lc(c,o,i,t,d=>l=d);c.type!==Jt&&zs(c,l);let u=t.subTree&&Cu(t.subTree);if(u&&u.type!==Jt&&!nr(c,u)&&Rf(t).type!==Jt){let d=Lc(u,o,i,t);if(zs(u,d),a==="out-in"&&c.type!==Jt)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},Fa(s);a==="in-out"&&c.type!==Jt?d.delayLeave=(h,f,g)=>{const _=Pf(i,u);_[String(u.key)]=u,h[Ei]=()=>{f(),h[Ei]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{g(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Cf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Jt){e=t;break}}return e}const cg=ag;function Pf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Lc(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:A,onAppearCancelled:T}=e,x=String(n.key),I=Pf(t,n),P=(E,S)=>{E&&In(E,i,9,S)},C=(E,S)=>{const D=S[1];P(E,S),Oe(E)?E.every(U=>U.length<=1)&&D():E.length<=1&&D()},N={mode:o,persisted:a,beforeEnter(E){let S=c;if(!t.isMounted)if(s)S=m||c;else return;E[Ei]&&E[Ei](!0);const D=I[x];D&&nr(n,D)&&D.el[Ei]&&D.el[Ei](),P(S,[E])},enter(E){let S=l,D=u,U=d;if(!t.isMounted)if(s)S=p||l,D=A||u,U=T||d;else return;let B=!1;const Q=E[lo]=ne=>{B||(B=!0,ne?P(U,[E]):P(D,[E]),N.delayedLeave&&N.delayedLeave(),E[lo]=void 0)};S?C(S,[E,Q]):Q()},leave(E,S){const D=String(n.key);if(E[lo]&&E[lo](!0),t.isUnmounting)return S();P(h,[E]);let U=!1;const B=E[Ei]=Q=>{U||(U=!0,S(),Q?P(_,[E]):P(g,[E]),E[Ei]=void 0,I[D]===n&&delete I[D])};I[D]=n,f?C(f,[E,B]):B()},clone(E){const S=Lc(E,e,t,i,r);return r&&r(S),S}};return N}function Fa(n){if(ga(n))return n=Ui(n),n.children=null,n}function Cu(n){if(!ga(n))return Af(n.type)&&n.children?Cf(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ve(t.default))return t.default()}}function zs(n,e){n.shapeFlag&6&&n.component?(n.transition=e,zs(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function If(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Ht?(o.patchFlag&128&&r++,i=i.concat(If(o.children,e,a))):(e||o.type!==Jt)&&i.push(a!=null?Ui(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Lf(n,e){return Ve(n)?Lt({name:n.name},e,{setup:n}):n}function Df(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Jo(n,e,t,i,r=!1){if(Oe(n)){n.forEach((g,_)=>Jo(g,e&&(Oe(e)?e[_]:e),t,i,r));return}if(ws(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Jo(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Kl(i.component):i.el,o=r?null:s,{i:a,r:c}=n,l=e&&e.r,u=a.refs===pt?a.refs={}:a.refs,d=a.setupState,h=nt(d),f=d===pt?()=>!1:g=>at(h,g);if(l!=null&&l!==c&&(Mt(l)?(u[l]=null,f(l)&&(d[l]=null)):zt(l)&&(l.value=null)),Ve(c))Zs(c,a,12,[o,u]);else{const g=Mt(c),_=zt(c);if(g||_){const m=()=>{if(n.f){const p=g?f(c)?d[c]:u[c]:c.value;r?Oe(p)&&Fl(p,s):Oe(p)?p.includes(s)||p.push(s):g?(u[c]=[s],f(c)&&(d[c]=u[c])):(c.value=[s],n.k&&(u[n.k]=c.value))}else g?(u[c]=o,f(c)&&(d[c]=o)):_&&(c.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,rn(m,t)):m()}}}ha().requestIdleCallback;ha().cancelIdleCallback;const ws=n=>!!n.type.__asyncLoader,ga=n=>n.type.__isKeepAlive;function lg(n,e){Uf(n,"a",e)}function ug(n,e){Uf(n,"da",e)}function Uf(n,e,t=Ut){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(_a(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ga(r.parent.vnode)&&dg(i,e,t,r),r=r.parent}}function dg(n,e,t,i){const r=_a(e,n,i,!0);ya(()=>{Fl(i[e],r)},t)}function _a(n,e,t=Ut,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Oi();const a=Qs(t),c=In(e,t,n,o);return a(),Bi(),c});return i?r.unshift(s):r.push(s),s}}const hi=n=>(e,t=Ut)=>{(!Gs||n==="sp")&&_a(n,(...i)=>e(...i),t)},hg=hi("bm"),va=hi("m"),fg=hi("bu"),pg=hi("u"),Nf=hi("bum"),ya=hi("um"),mg=hi("sp"),gg=hi("rtg"),_g=hi("rtc");function vg(n,e=Ut){_a("ec",n,e)}const yg="components";function Br(n,e){return bg(yg,n,!0,e)||n}const xg=Symbol.for("v-ndc");function bg(n,e,t=!0,i=!1){const r=pn||Ut;if(r){const s=r.type;{const a=u_(s,!1);if(a&&(a===e||a===_n(e)||a===da(_n(e))))return s}const o=Pu(r[n]||s[n],e)||Pu(r.appContext[n],e);return!o&&i?s:o}}function Pu(n,e){return n&&(n[e]||n[_n(e)]||n[da(_n(e))])}function Qo(n,e,t,i){let r;const s=t,o=Oe(n);if(o||Mt(n)){const a=o&&Nr(n);let c=!1;a&&(c=!gn(n),n=fa(n)),r=new Array(n.length);for(let l=0,u=n.length;l<u;l++)r[l]=e(c?kt(n[l]):n[l],l,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(mt(n))if(n[Symbol.iterator])r=Array.from(n,(a,c)=>e(a,c,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];r[c]=e(n[u],u,c,s)}}else r=[];return r}const Dc=n=>n?np(n)?Kl(n):Dc(n.parent):null,Rs=Lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Dc(n.parent),$root:n=>Dc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Of(n),$forceUpdate:n=>n.f||(n.f=()=>{ql(n.update)}),$nextTick:n=>n.n||(n.n=bf.bind(n.proxy)),$watch:n=>Vg.bind(n)}),Oa=(n,e)=>n!==pt&&!n.__isScriptSetup&&at(n,e),Sg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=n;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Oa(i,e))return o[e]=1,i[e];if(r!==pt&&at(r,e))return o[e]=2,r[e];if((l=n.propsOptions[0])&&at(l,e))return o[e]=3,s[e];if(t!==pt&&at(t,e))return o[e]=4,t[e];Uc&&(o[e]=0)}}const u=Rs[e];let d,h;if(u)return e==="$attrs"&&Bt(n.attrs,"get",""),u(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==pt&&at(t,e))return o[e]=4,t[e];if(h=c.config.globalProperties,at(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Oa(r,e)?(r[e]=t,!0):i!==pt&&at(i,e)?(i[e]=t,!0):at(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==pt&&at(n,o)||Oa(e,o)||(a=s[0])&&at(a,o)||at(i,o)||at(Rs,o)||at(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:at(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Iu(n){return Oe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Uc=!0;function Mg(n){const e=Of(n),t=n.proxy,i=n.ctx;Uc=!1,e.beforeCreate&&Lu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:f,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:T,unmounted:x,render:I,renderTracked:P,renderTriggered:C,errorCaptured:N,serverPrefetch:E,expose:S,inheritAttrs:D,components:U,directives:B,filters:Q}=e;if(l&&Eg(l,i,null),o)for(const j in o){const V=o[j];Ve(V)&&(i[j]=V.bind(t))}if(r){const j=r.call(t,t);mt(j)&&(n.data=pa(j))}if(Uc=!0,s)for(const j in s){const V=s[j],pe=Ve(V)?V.bind(t,t):Ve(V.get)?V.get.bind(t,t):Bn,ve=!Ve(V)&&Ve(V.set)?V.set.bind(t):Bn,Re=Tn({get:pe,set:ve});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Ie=>Re.value=Ie})}if(a)for(const j in a)Ff(a[j],i,t,j);if(c){const j=Ve(c)?c.call(t):c;Reflect.ownKeys(j).forEach(V=>{Bo(V,j[V])})}u&&Lu(u,n,"c");function Z(j,V){Oe(V)?V.forEach(pe=>j(pe.bind(t))):V&&j(V.bind(t))}if(Z(hg,d),Z(va,h),Z(fg,f),Z(pg,g),Z(lg,_),Z(ug,m),Z(vg,N),Z(_g,P),Z(gg,C),Z(Nf,A),Z(ya,x),Z(mg,E),Oe(S))if(S.length){const j=n.exposed||(n.exposed={});S.forEach(V=>{Object.defineProperty(j,V,{get:()=>t[V],set:pe=>t[V]=pe})})}else n.exposed||(n.exposed={});I&&n.render===Bn&&(n.render=I),D!=null&&(n.inheritAttrs=D),U&&(n.components=U),B&&(n.directives=B),E&&Df(n)}function Eg(n,e,t=Bn){Oe(n)&&(n=Nc(n));for(const i in n){const r=n[i];let s;mt(r)?"default"in r?s=ai(r.from||i,r.default,!0):s=ai(r.from||i):s=ai(r),zt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Lu(n,e,t){In(Oe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ff(n,e,t,i){let r=i.includes(".")?Zf(t,i):()=>t[i];if(Mt(n)){const s=e[n];Ve(s)&&Cs(r,s)}else if(Ve(n))Cs(r,n.bind(t));else if(mt(n))if(Oe(n))n.forEach(s=>Ff(s,e,t,i));else{const s=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(s)&&Cs(r,s,n)}}function Of(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!t&&!i?c=e:(c={},r.length&&r.forEach(l=>ea(c,l,o,!0)),ea(c,e,o)),mt(e)&&s.set(e,c),c}function ea(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ea(n,s,t,!0),r&&r.forEach(o=>ea(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Tg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Tg={data:Du,props:Uu,emits:Uu,methods:bs,computed:bs,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:bs,directives:bs,watch:wg,provide:Du,inject:Ag};function Du(n,e){return e?n?function(){return Lt(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function Ag(n,e){return bs(Nc(n),Nc(e))}function Nc(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Wt(n,e){return n?[...new Set([].concat(n,e))]:e}function bs(n,e){return n?Lt(Object.create(null),n,e):e}function Uu(n,e){return n?Oe(n)&&Oe(e)?[...new Set([...n,...e])]:Lt(Object.create(null),Iu(n),Iu(e??{})):e}function wg(n,e){if(!n)return e;if(!e)return n;const t=Lt(Object.create(null),n);for(const i in e)t[i]=Wt(n[i],e[i]);return t}function Bf(){return{app:null,config:{isNativeTag:mm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rg=0;function Cg(n,e){return function(i,r=null){Ve(i)||(i=Lt({},i)),r!=null&&!mt(r)&&(r=null);const s=Bf(),o=new WeakSet,a=[];let c=!1;const l=s.app={_uid:Rg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:h_,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&Ve(u.install)?(o.add(u),u.install(l,...d)):Ve(u)&&(o.add(u),u(l,...d))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,d){return d?(s.components[u]=d,l):s.components[u]},directive(u,d){return d?(s.directives[u]=d,l):s.directives[u]},mount(u,d,h){if(!c){const f=l._ceVNode||je(i,r);return f.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(f,u,h),c=!0,l._container=u,u.__vue_app__=l,Kl(f.component)}},onUnmount(u){a.push(u)},unmount(){c&&(In(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(u,d){return s.provides[u]=d,l},runWithContext(u){const d=kr;kr=l;try{return u()}finally{kr=d}}};return l}}let kr=null;function Bo(n,e){if(Ut){let t=Ut.provides;const i=Ut.parent&&Ut.parent.provides;i===t&&(t=Ut.provides=Object.create(i)),t[n]=e}}function ai(n,e,t=!1){const i=Ut||pn;if(i||kr){const r=kr?kr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}const kf={},Hf=()=>Object.create(kf),zf=n=>Object.getPrototypeOf(n)===kf;function Pg(n,e,t,i=!1){const r={},s=Hf();n.propsDefaults=Object.create(null),Vf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:gf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Ig(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=nt(r),[c]=n.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(xa(n.emitsOptions,h))continue;const f=e[h];if(c)if(at(s,h))f!==s[h]&&(s[h]=f,l=!0);else{const g=_n(h);r[g]=Fc(c,a,g,f,n,!1)}else f!==s[h]&&(s[h]=f,l=!0)}}}else{Vf(n,e,r,s)&&(l=!0);let u;for(const d in a)(!e||!at(e,d)&&((u=dr(d))===d||!at(e,u)))&&(c?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=Fc(c,a,d,void 0,n,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!at(e,d))&&(delete s[d],l=!0)}l&&ri(n.attrs,"set","")}function Vf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(Es(c))continue;const l=e[c];let u;r&&at(r,u=_n(c))?!s||!s.includes(u)?t[u]=l:(a||(a={}))[u]=l:xa(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(s){const c=nt(t),l=a||pt;for(let u=0;u<s.length;u++){const d=s[u];t[d]=Fc(r,c,d,l[d],n,!at(l,d))}}return o}function Fc(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=at(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(c)){const{propsDefaults:l}=r;if(t in l)i=l[t];else{const u=Qs(r);i=l[t]=c.call(null,e),u()}}else i=c;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===dr(t))&&(i=!0))}return i}const Lg=new WeakMap;function Gf(n,e,t=!1){const i=t?Lg:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let c=!1;if(!Ve(n)){const u=d=>{c=!0;const[h,f]=Gf(d,e,!0);Lt(o,h),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!c)return mt(n)&&i.set(n,Dr),Dr;if(Oe(s))for(let u=0;u<s.length;u++){const d=_n(s[u]);Nu(d)&&(o[d]=pt)}else if(s)for(const u in s){const d=_n(u);if(Nu(d)){const h=s[u],f=o[d]=Oe(h)||Ve(h)?{type:h}:Lt({},h),g=f.type;let _=!1,m=!0;if(Oe(g))for(let p=0;p<g.length;++p){const A=g[p],T=Ve(A)&&A.name;if(T==="Boolean"){_=!0;break}else T==="String"&&(m=!1)}else _=Ve(g)&&g.name==="Boolean";f[0]=_,f[1]=m,(_||at(f,"default"))&&a.push(d)}}const l=[o,a];return mt(n)&&i.set(n,l),l}function Nu(n){return n[0]!=="$"&&!Es(n)}const Wf=n=>n[0]==="_"||n==="$stable",Yl=n=>Oe(n)?n.map(Nn):[Nn(n)],Dg=(n,e,t)=>{if(e._n)return e;const i=bt((...r)=>Yl(e(...r)),t);return i._c=!1,i},Xf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Wf(r))continue;const s=n[r];if(Ve(s))e[r]=Dg(r,s,i);else if(s!=null){const o=Yl(s);e[r]=()=>o}}},qf=(n,e)=>{const t=Yl(e);n.slots.default=()=>t},Yf=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Ug=(n,e,t)=>{const i=n.slots=Hf();if(n.vnode.shapeFlag&32){const r=e._;r?(Yf(i,e,t),t&&Zh(i,"_",r,!0)):Xf(e,i)}else e&&qf(n,e)},Ng=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=pt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Yf(r,e,t):(s=!e.$stable,Xf(e,r)),o=e}else e&&(qf(n,e),o={default:1});if(s)for(const a in r)!Wf(a)&&o[a]==null&&delete r[a]},rn=Kg;function Fg(n){return Og(n)}function Og(n,e){const t=ha();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:f=Bn,insertStaticContent:g}=n,_=(w,R,y,ie=null,$=null,q=null,ee=void 0,le=null,J=!!R.dynamicChildren)=>{if(w===R)return;w&&!nr(w,R)&&(ie=F(w),Ie(w,$,q,!0),w=null),R.patchFlag===-2&&(J=!1,R.dynamicChildren=null);const{type:b,ref:v,shapeFlag:L}=R;switch(b){case ba:m(w,R,y,ie);break;case Jt:p(w,R,y,ie);break;case ko:w==null&&A(R,y,ie,ee);break;case Ht:U(w,R,y,ie,$,q,ee,le,J);break;default:L&1?I(w,R,y,ie,$,q,ee,le,J):L&6?B(w,R,y,ie,$,q,ee,le,J):(L&64||L&128)&&b.process(w,R,y,ie,$,q,ee,le,J,ce)}v!=null&&$&&Jo(v,w&&w.ref,q,R||w,!R)},m=(w,R,y,ie)=>{if(w==null)i(R.el=a(R.children),y,ie);else{const $=R.el=w.el;R.children!==w.children&&l($,R.children)}},p=(w,R,y,ie)=>{w==null?i(R.el=c(R.children||""),y,ie):R.el=w.el},A=(w,R,y,ie)=>{[w.el,w.anchor]=g(w.children,R,y,ie,w.el,w.anchor)},T=({el:w,anchor:R},y,ie)=>{let $;for(;w&&w!==R;)$=h(w),i(w,y,ie),w=$;i(R,y,ie)},x=({el:w,anchor:R})=>{let y;for(;w&&w!==R;)y=h(w),r(w),w=y;r(R)},I=(w,R,y,ie,$,q,ee,le,J)=>{R.type==="svg"?ee="svg":R.type==="math"&&(ee="mathml"),w==null?P(R,y,ie,$,q,ee,le,J):E(w,R,$,q,ee,le,J)},P=(w,R,y,ie,$,q,ee,le)=>{let J,b;const{props:v,shapeFlag:L,transition:G,dirs:Y}=w;if(J=w.el=o(w.type,q,v&&v.is,v),L&8?u(J,w.children):L&16&&N(w.children,J,null,ie,$,Ba(w,q),ee,le),Y&&Vi(w,null,ie,"created"),C(J,w,w.scopeId,ee,ie),v){for(const me in v)me!=="value"&&!Es(me)&&s(J,me,null,v[me],q,ie);"value"in v&&s(J,"value",null,v.value,q),(b=v.onVnodeBeforeMount)&&Dn(b,ie,w)}Y&&Vi(w,null,ie,"beforeMount");const W=Bg($,G);W&&G.beforeEnter(J),i(J,R,y),((b=v&&v.onVnodeMounted)||W||Y)&&rn(()=>{b&&Dn(b,ie,w),W&&G.enter(J),Y&&Vi(w,null,ie,"mounted")},$)},C=(w,R,y,ie,$)=>{if(y&&f(w,y),ie)for(let q=0;q<ie.length;q++)f(w,ie[q]);if($){let q=$.subTree;if(R===q||Qf(q.type)&&(q.ssContent===R||q.ssFallback===R)){const ee=$.vnode;C(w,ee,ee.scopeId,ee.slotScopeIds,$.parent)}}},N=(w,R,y,ie,$,q,ee,le,J=0)=>{for(let b=J;b<w.length;b++){const v=w[b]=le?Ti(w[b]):Nn(w[b]);_(null,v,R,y,ie,$,q,ee,le)}},E=(w,R,y,ie,$,q,ee)=>{const le=R.el=w.el;let{patchFlag:J,dynamicChildren:b,dirs:v}=R;J|=w.patchFlag&16;const L=w.props||pt,G=R.props||pt;let Y;if(y&&Gi(y,!1),(Y=G.onVnodeBeforeUpdate)&&Dn(Y,y,R,w),v&&Vi(R,w,y,"beforeUpdate"),y&&Gi(y,!0),(L.innerHTML&&G.innerHTML==null||L.textContent&&G.textContent==null)&&u(le,""),b?S(w.dynamicChildren,b,le,y,ie,Ba(R,$),q):ee||V(w,R,le,null,y,ie,Ba(R,$),q,!1),J>0){if(J&16)D(le,L,G,y,$);else if(J&2&&L.class!==G.class&&s(le,"class",null,G.class,$),J&4&&s(le,"style",L.style,G.style,$),J&8){const W=R.dynamicProps;for(let me=0;me<W.length;me++){const ue=W[me],ge=L[ue],Ne=G[ue];(Ne!==ge||ue==="value")&&s(le,ue,ge,Ne,$,y)}}J&1&&w.children!==R.children&&u(le,R.children)}else!ee&&b==null&&D(le,L,G,y,$);((Y=G.onVnodeUpdated)||v)&&rn(()=>{Y&&Dn(Y,y,R,w),v&&Vi(R,w,y,"updated")},ie)},S=(w,R,y,ie,$,q,ee)=>{for(let le=0;le<R.length;le++){const J=w[le],b=R[le],v=J.el&&(J.type===Ht||!nr(J,b)||J.shapeFlag&70)?d(J.el):y;_(J,b,v,null,ie,$,q,ee,!0)}},D=(w,R,y,ie,$)=>{if(R!==y){if(R!==pt)for(const q in R)!Es(q)&&!(q in y)&&s(w,q,R[q],null,$,ie);for(const q in y){if(Es(q))continue;const ee=y[q],le=R[q];ee!==le&&q!=="value"&&s(w,q,le,ee,$,ie)}"value"in y&&s(w,"value",R.value,y.value,$)}},U=(w,R,y,ie,$,q,ee,le,J)=>{const b=R.el=w?w.el:a(""),v=R.anchor=w?w.anchor:a("");let{patchFlag:L,dynamicChildren:G,slotScopeIds:Y}=R;Y&&(le=le?le.concat(Y):Y),w==null?(i(b,y,ie),i(v,y,ie),N(R.children||[],y,v,$,q,ee,le,J)):L>0&&L&64&&G&&w.dynamicChildren?(S(w.dynamicChildren,G,y,$,q,ee,le),(R.key!=null||$&&R===$.subTree)&&jf(w,R,!0)):V(w,R,y,v,$,q,ee,le,J)},B=(w,R,y,ie,$,q,ee,le,J)=>{R.slotScopeIds=le,w==null?R.shapeFlag&512?$.ctx.activate(R,y,ie,ee,J):Q(R,y,ie,$,q,ee,J):ne(w,R,J)},Q=(w,R,y,ie,$,q,ee)=>{const le=w.component=r_(w,ie,$);if(ga(w)&&(le.ctx.renderer=ce),o_(le,!1,ee),le.asyncDep){if($&&$.registerDep(le,Z,ee),!w.el){const J=le.subTree=je(Jt);p(null,J,R,y)}}else Z(le,w,R,y,$,q,ee)},ne=(w,R,y)=>{const ie=R.component=w.component;if(Yg(w,R,y))if(ie.asyncDep&&!ie.asyncResolved){j(ie,R,y);return}else ie.next=R,ie.update();else R.el=w.el,ie.vnode=R},Z=(w,R,y,ie,$,q,ee)=>{const le=()=>{if(w.isMounted){let{next:L,bu:G,u:Y,parent:W,vnode:me}=w;{const xe=Kf(w);if(xe){L&&(L.el=me.el,j(w,L,ee)),xe.asyncDep.then(()=>{w.isUnmounted||le()});return}}let ue=L,ge;Gi(w,!1),L?(L.el=me.el,j(w,L,ee)):L=me,G&&Ia(G),(ge=L.props&&L.props.onVnodeBeforeUpdate)&&Dn(ge,W,L,me),Gi(w,!0);const Ne=Ou(w),de=w.subTree;w.subTree=Ne,_(de,Ne,d(de.el),F(de),w,$,q),L.el=Ne.el,ue===null&&jg(w,Ne.el),Y&&rn(Y,$),(ge=L.props&&L.props.onVnodeUpdated)&&rn(()=>Dn(ge,W,L,me),$)}else{let L;const{el:G,props:Y}=R,{bm:W,m:me,parent:ue,root:ge,type:Ne}=w,de=ws(R);Gi(w,!1),W&&Ia(W),!de&&(L=Y&&Y.onVnodeBeforeMount)&&Dn(L,ue,R),Gi(w,!0);{ge.ce&&ge.ce._injectChildStyle(Ne);const xe=w.subTree=Ou(w);_(null,xe,y,ie,w,$,q),R.el=xe.el}if(me&&rn(me,$),!de&&(L=Y&&Y.onVnodeMounted)){const xe=R;rn(()=>Dn(L,ue,xe),$)}(R.shapeFlag&256||ue&&ws(ue.vnode)&&ue.vnode.shapeFlag&256)&&w.a&&rn(w.a,$),w.isMounted=!0,R=y=ie=null}};w.scope.on();const J=w.effect=new tf(le);w.scope.off();const b=w.update=J.run.bind(J),v=w.job=J.runIfDirty.bind(J);v.i=w,v.id=w.uid,J.scheduler=()=>ql(v),Gi(w,!0),b()},j=(w,R,y)=>{R.component=w;const ie=w.vnode.props;w.vnode=R,w.next=null,Ig(w,R.props,ie,y),Ng(w,R.children,y),Oi(),Ru(w),Bi()},V=(w,R,y,ie,$,q,ee,le,J=!1)=>{const b=w&&w.children,v=w?w.shapeFlag:0,L=R.children,{patchFlag:G,shapeFlag:Y}=R;if(G>0){if(G&128){ve(b,L,y,ie,$,q,ee,le,J);return}else if(G&256){pe(b,L,y,ie,$,q,ee,le,J);return}}Y&8?(v&16&&be(b,$,q),L!==b&&u(y,L)):v&16?Y&16?ve(b,L,y,ie,$,q,ee,le,J):be(b,$,q,!0):(v&8&&u(y,""),Y&16&&N(L,y,ie,$,q,ee,le,J))},pe=(w,R,y,ie,$,q,ee,le,J)=>{w=w||Dr,R=R||Dr;const b=w.length,v=R.length,L=Math.min(b,v);let G;for(G=0;G<L;G++){const Y=R[G]=J?Ti(R[G]):Nn(R[G]);_(w[G],Y,y,null,$,q,ee,le,J)}b>v?be(w,$,q,!0,!1,L):N(R,y,ie,$,q,ee,le,J,L)},ve=(w,R,y,ie,$,q,ee,le,J)=>{let b=0;const v=R.length;let L=w.length-1,G=v-1;for(;b<=L&&b<=G;){const Y=w[b],W=R[b]=J?Ti(R[b]):Nn(R[b]);if(nr(Y,W))_(Y,W,y,null,$,q,ee,le,J);else break;b++}for(;b<=L&&b<=G;){const Y=w[L],W=R[G]=J?Ti(R[G]):Nn(R[G]);if(nr(Y,W))_(Y,W,y,null,$,q,ee,le,J);else break;L--,G--}if(b>L){if(b<=G){const Y=G+1,W=Y<v?R[Y].el:ie;for(;b<=G;)_(null,R[b]=J?Ti(R[b]):Nn(R[b]),y,W,$,q,ee,le,J),b++}}else if(b>G)for(;b<=L;)Ie(w[b],$,q,!0),b++;else{const Y=b,W=b,me=new Map;for(b=W;b<=G;b++){const _e=R[b]=J?Ti(R[b]):Nn(R[b]);_e.key!=null&&me.set(_e.key,b)}let ue,ge=0;const Ne=G-W+1;let de=!1,xe=0;const Pe=new Array(Ne);for(b=0;b<Ne;b++)Pe[b]=0;for(b=Y;b<=L;b++){const _e=w[b];if(ge>=Ne){Ie(_e,$,q,!0);continue}let Be;if(_e.key!=null)Be=me.get(_e.key);else for(ue=W;ue<=G;ue++)if(Pe[ue-W]===0&&nr(_e,R[ue])){Be=ue;break}Be===void 0?Ie(_e,$,q,!0):(Pe[Be-W]=b+1,Be>=xe?xe=Be:de=!0,_(_e,R[Be],y,null,$,q,ee,le,J),ge++)}const Fe=de?kg(Pe):Dr;for(ue=Fe.length-1,b=Ne-1;b>=0;b--){const _e=W+b,Be=R[_e],ze=_e+1<v?R[_e+1].el:ie;Pe[b]===0?_(null,Be,y,ze,$,q,ee,le,J):de&&(ue<0||b!==Fe[ue]?Re(Be,y,ze,2):ue--)}}},Re=(w,R,y,ie,$=null)=>{const{el:q,type:ee,transition:le,children:J,shapeFlag:b}=w;if(b&6){Re(w.component.subTree,R,y,ie);return}if(b&128){w.suspense.move(R,y,ie);return}if(b&64){ee.move(w,R,y,ce);return}if(ee===Ht){i(q,R,y);for(let L=0;L<J.length;L++)Re(J[L],R,y,ie);i(w.anchor,R,y);return}if(ee===ko){T(w,R,y);return}if(ie!==2&&b&1&&le)if(ie===0)le.beforeEnter(q),i(q,R,y),rn(()=>le.enter(q),$);else{const{leave:L,delayLeave:G,afterLeave:Y}=le,W=()=>i(q,R,y),me=()=>{L(q,()=>{W(),Y&&Y()})};G?G(q,W,me):me()}else i(q,R,y)},Ie=(w,R,y,ie=!1,$=!1)=>{const{type:q,props:ee,ref:le,children:J,dynamicChildren:b,shapeFlag:v,patchFlag:L,dirs:G,cacheIndex:Y}=w;if(L===-2&&($=!1),le!=null&&Jo(le,null,y,w,!0),Y!=null&&(R.renderCache[Y]=void 0),v&256){R.ctx.deactivate(w);return}const W=v&1&&G,me=!ws(w);let ue;if(me&&(ue=ee&&ee.onVnodeBeforeUnmount)&&Dn(ue,R,w),v&6)fe(w.component,y,ie);else{if(v&128){w.suspense.unmount(y,ie);return}W&&Vi(w,null,R,"beforeUnmount"),v&64?w.type.remove(w,R,y,ce,ie):b&&!b.hasOnce&&(q!==Ht||L>0&&L&64)?be(b,R,y,!1,!0):(q===Ht&&L&384||!$&&v&16)&&be(J,R,y),ie&&Je(w)}(me&&(ue=ee&&ee.onVnodeUnmounted)||W)&&rn(()=>{ue&&Dn(ue,R,w),W&&Vi(w,null,R,"unmounted")},y)},Je=w=>{const{type:R,el:y,anchor:ie,transition:$}=w;if(R===Ht){re(y,ie);return}if(R===ko){x(w);return}const q=()=>{r(y),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:ee,delayLeave:le}=$,J=()=>ee(y,q);le?le(w.el,q,J):J()}else q()},re=(w,R)=>{let y;for(;w!==R;)y=h(w),r(w),w=y;r(R)},fe=(w,R,y)=>{const{bum:ie,scope:$,job:q,subTree:ee,um:le,m:J,a:b}=w;Fu(J),Fu(b),ie&&Ia(ie),$.stop(),q&&(q.flags|=8,Ie(ee,w,R,y)),le&&rn(le,R),rn(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},be=(w,R,y,ie=!1,$=!1,q=0)=>{for(let ee=q;ee<w.length;ee++)Ie(w[ee],R,y,ie,$)},F=w=>{if(w.shapeFlag&6)return F(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const R=h(w.anchor||w.el),y=R&&R[sg];return y?h(y):R};let se=!1;const ae=(w,R,y)=>{w==null?R._vnode&&Ie(R._vnode,null,null,!0):_(R._vnode||null,w,R,null,null,null,y),R._vnode=w,se||(se=!0,Ru(),Mf(),se=!1)},ce={p:_,um:Ie,m:Re,r:Je,mt:Q,mc:N,pc:V,pbc:S,n:F,o:n};return{render:ae,hydrate:void 0,createApp:Cg(ae)}}function Ba({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Gi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Bg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function jf(n,e,t=!1){const i=n.children,r=e.children;if(Oe(i)&&Oe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ti(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&jf(o,a)),a.type===ba&&(a.el=o.el)}}function kg(n){const e=n.slice(),t=[0];let i,r,s,o,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(r=t[t.length-1],n[r]<l){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<l?s=a+1:o=a;l<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Kf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Kf(e)}function Fu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Hg=Symbol.for("v-scx"),zg=()=>ai(Hg);function Cs(n,e,t){return $f(n,e,t)}function $f(n,e,t=pt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Lt({},t),c=e&&i||!e&&s!=="post";let l;if(Gs){if(s==="sync"){const f=zg();l=f.__watcherHandles||(f.__watcherHandles=[])}else if(!c){const f=()=>{};return f.stop=Bn,f.resume=Bn,f.pause=Bn,f}}const u=Ut;a.call=(f,g,_)=>In(f,u,g,_);let d=!1;s==="post"?a.scheduler=f=>{rn(f,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(f,g)=>{g?f():ql(f)}),a.augmentJob=f=>{e&&(f.flags|=4),d&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const h=tg(n,e,a);return Gs&&(l?l.push(h):c&&h()),h}function Vg(n,e,t){const i=this.proxy,r=Mt(n)?n.includes(".")?Zf(i,n):()=>i[n]:n.bind(i,i);let s;Ve(e)?s=e:(s=e.handler,t=e);const o=Qs(this),a=$f(r,s.bind(i),t);return o(),a}function Zf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Gg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${_n(e)}Modifiers`]||n[`${dr(e)}Modifiers`];function Wg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||pt;let r=t;const s=e.startsWith("update:"),o=s&&Gg(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Mt(u)?u.trim():u)),o.number&&(r=t.map(xm)));let a,c=i[a=Pa(e)]||i[a=Pa(_n(e))];!c&&s&&(c=i[a=Pa(dr(e))]),c&&In(c,n,6,r);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,In(l,n,6,r)}}function Jf(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ve(n)){const c=l=>{const u=Jf(l,e,!0);u&&(a=!0,Lt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?(mt(n)&&i.set(n,null),null):(Oe(s)?s.forEach(c=>o[c]=null):Lt(o,s),mt(n)&&i.set(n,o),o)}function xa(n,e){return!n||!ca(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(n,e[0].toLowerCase()+e.slice(1))||at(n,dr(e))||at(n,e))}function Ou(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:h,setupState:f,ctx:g,inheritAttrs:_}=n,m=Zo(n);let p,A;try{if(t.shapeFlag&4){const x=r||i,I=x;p=Nn(l.call(I,x,u,d,f,h,g)),A=a}else{const x=e;p=Nn(x.length>1?x(d,{attrs:a,slots:o,emit:c}):x(d,null)),A=e.props?a:Xg(a)}}catch(x){Ps.length=0,ma(x,n,1),p=je(Jt)}let T=p;if(A&&_!==!1){const x=Object.keys(A),{shapeFlag:I}=T;x.length&&I&7&&(s&&x.some(Nl)&&(A=qg(A,s)),T=Ui(T,A,!1,!0))}return t.dirs&&(T=Ui(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&zs(T,t.transition),p=T,Zo(m),p}const Xg=n=>{let e;for(const t in n)(t==="class"||t==="style"||ca(t))&&((e||(e={}))[t]=n[t]);return e},qg=(n,e)=>{const t={};for(const i in n)(!Nl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Yg(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?Bu(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==i[h]&&!xa(l,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Bu(i,o,l):!0:!!o;return!1}function Bu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!xa(t,s))return!0}return!1}function jg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Qf=n=>n.__isSuspense;function Kg(n,e){e&&e.pendingBranch?Oe(n)?e.effects.push(...n):e.effects.push(n):rg(n)}const Ht=Symbol.for("v-fgt"),ba=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),ko=Symbol.for("v-stc"),Ps=[];let on=null;function xt(n=!1){Ps.push(on=n?null:[])}function $g(){Ps.pop(),on=Ps[Ps.length-1]||null}let Vs=1;function ku(n,e=!1){Vs+=n,n<0&&on&&e&&(on.hasOnce=!0)}function ep(n){return n.dynamicChildren=Vs>0?on||Dr:null,$g(),Vs>0&&on&&on.push(n),n}function St(n,e,t,i,r,s){return ep(Te(n,e,t,i,r,s,!0))}function Zg(n,e,t,i,r){return ep(je(n,e,t,i,r,!0))}function ta(n){return n?n.__v_isVNode===!0:!1}function nr(n,e){return n.type===e.type&&n.key===e.key}const tp=({key:n})=>n??null,Ho=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Mt(n)||zt(n)||Ve(n)?{i:pn,r:n,k:e,f:!!t}:n:null);function Te(n,e=null,t=null,i=0,r=null,s=n===Ht?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&tp(e),ref:e&&Ho(e),scopeId:Tf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:pn};return a?(jl(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=Mt(t)?8:16),Vs>0&&!o&&on&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&on.push(c),c}const je=Jg;function Jg(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===xg)&&(n=Jt),ta(n)){const a=Ui(n,e,!0);return t&&jl(a,t),Vs>0&&!s&&on&&(a.shapeFlag&6?on[on.indexOf(n)]=a:on.push(a)),a.patchFlag=-2,a}if(d_(n)&&(n=n.__vccOpts),e){e=Qg(e);let{class:a,style:c}=e;a&&!Mt(a)&&(e.class=Fs(a)),mt(c)&&(Xl(c)&&!Oe(c)&&(c=Lt({},c)),e.style=Bl(c))}const o=Mt(n)?1:Qf(n)?128:Af(n)?64:mt(n)?4:Ve(n)?2:0;return Te(n,e,t,i,r,o,s,!0)}function Qg(n){return n?Xl(n)||zf(n)?Lt({},n):n:null}function Ui(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:c}=n,l=e?t_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&tp(l),ref:e&&e.ref?t&&s?Oe(s)?s.concat(Ho(e)):[s,Ho(e)]:Ho(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ht?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ui(n.ssContent),ssFallback:n.ssFallback&&Ui(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&zs(u,c.clone(u)),u}function At(n=" ",e=0){return je(ba,null,n,e)}function Js(n,e){const t=je(ko,null,n);return t.staticCount=e,t}function e_(n="",e=!1){return e?(xt(),Zg(Jt,null,n)):je(Jt,null,n)}function Nn(n){return n==null||typeof n=="boolean"?je(Jt):Oe(n)?je(Ht,null,n.slice()):ta(n)?Ti(n):je(ba,null,String(n))}function Ti(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ui(n)}function jl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),jl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!zf(e)?e._ctx=pn:r===3&&pn&&(pn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:pn},t=32):(e=String(e),i&64?(t=16,e=[At(e)]):t=8);n.children=e,n.shapeFlag|=t}function t_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Fs([e.class,i.class]));else if(r==="style")e.style=Bl([e.style,i.style]);else if(ca(r)){const s=e[r],o=i[r];o&&s!==o&&!(Oe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Dn(n,e,t,i=null){In(n,e,7,[t,i])}const n_=Bf();let i_=0;function r_(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||n_,s={uid:i_++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gf(i,r),emitsOptions:Jf(i,r),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:i.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Wg.bind(null,s),n.ce&&n.ce(s),s}let Ut=null;const s_=()=>Ut||pn;let na,Oc;{const n=ha(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};na=e("__VUE_INSTANCE_SETTERS__",t=>Ut=t),Oc=e("__VUE_SSR_SETTERS__",t=>Gs=t)}const Qs=n=>{const e=Ut;return na(n),n.scope.on(),()=>{n.scope.off(),na(e)}},Hu=()=>{Ut&&Ut.scope.off(),na(null)};function np(n){return n.vnode.shapeFlag&4}let Gs=!1;function o_(n,e=!1,t=!1){e&&Oc(e);const{props:i,children:r}=n.vnode,s=np(n);Pg(n,i,s,e),Ug(n,r,t);const o=s?a_(n,e):void 0;return e&&Oc(!1),o}function a_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Sg);const{setup:i}=t;if(i){Oi();const r=n.setupContext=i.length>1?l_(n):null,s=Qs(n),o=Zs(i,n,0,[n.props,r]),a=jh(o);if(Bi(),s(),(a||n.sp)&&!ws(n)&&Df(n),a){if(o.then(Hu,Hu),e)return o.then(c=>{zu(n,c)}).catch(c=>{ma(c,n,0)});n.asyncDep=o}else zu(n,o)}else ip(n)}function zu(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:mt(e)&&(n.setupState=yf(e)),ip(n)}function ip(n,e,t){const i=n.type;n.render||(n.render=i.render||Bn);{const r=Qs(n);Oi();try{Mg(n)}finally{Bi(),r()}}}const c_={get(n,e){return Bt(n,"get",""),n[e]}};function l_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,c_),slots:n.slots,emit:n.emit,expose:e}}function Kl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(yf(jm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Rs)return Rs[t](n)},has(e,t){return t in e||t in Rs}})):n.proxy}function u_(n,e=!0){return Ve(n)?n.displayName||n.name:n.name||e&&n.__name}function d_(n){return Ve(n)&&"__vccOpts"in n}const Tn=(n,e)=>Qm(n,e,Gs);function $l(n,e,t){const i=arguments.length;return i===2?mt(e)&&!Oe(e)?ta(e)?je(n,null,[e]):je(n,e):je(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ta(t)&&(t=[t]),je(n,e,t))}const h_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bc;const Vu=typeof window<"u"&&window.trustedTypes;if(Vu)try{Bc=Vu.createPolicy("vue",{createHTML:n=>n})}catch{}const rp=Bc?n=>Bc.createHTML(n):n=>n,f_="http://www.w3.org/2000/svg",p_="http://www.w3.org/1998/Math/MathML",ni=typeof document<"u"?document:null,Gu=ni&&ni.createElement("template"),m_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?ni.createElementNS(f_,n):e==="mathml"?ni.createElementNS(p_,n):t?ni.createElement(n,{is:t}):ni.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ni.createTextNode(n),createComment:n=>ni.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ni.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Gu.innerHTML=rp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Gu.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},pi="transition",us="animation",Ws=Symbol("_vtc"),sp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},g_=Lt({},wf,sp),__=n=>(n.displayName="Transition",n.props=g_,n),kc=__((n,{slots:e})=>$l(cg,v_(n),e)),Wi=(n,e=[])=>{Oe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Wu=n=>n?Oe(n)?n.some(e=>e.length>1):n.length>1:!1;function v_(n){const e={};for(const U in n)U in sp||(e[U]=n[U]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:c=s,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:f=`${t}-leave-to`}=n,g=y_(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:A,onEnterCancelled:T,onLeave:x,onLeaveCancelled:I,onBeforeAppear:P=p,onAppear:C=A,onAppearCancelled:N=T}=e,E=(U,B,Q,ne)=>{U._enterCancelled=ne,Xi(U,B?u:a),Xi(U,B?l:o),Q&&Q()},S=(U,B)=>{U._isLeaving=!1,Xi(U,d),Xi(U,f),Xi(U,h),B&&B()},D=U=>(B,Q)=>{const ne=U?C:A,Z=()=>E(B,U,Q);Wi(ne,[B,Z]),Xu(()=>{Xi(B,U?c:s),Yn(B,U?u:a),Wu(ne)||qu(B,i,_,Z)})};return Lt(e,{onBeforeEnter(U){Wi(p,[U]),Yn(U,s),Yn(U,o)},onBeforeAppear(U){Wi(P,[U]),Yn(U,c),Yn(U,l)},onEnter:D(!1),onAppear:D(!0),onLeave(U,B){U._isLeaving=!0;const Q=()=>S(U,B);Yn(U,d),U._enterCancelled?(Yn(U,h),Ku()):(Ku(),Yn(U,h)),Xu(()=>{U._isLeaving&&(Xi(U,d),Yn(U,f),Wu(x)||qu(U,i,m,Q))}),Wi(x,[U,Q])},onEnterCancelled(U){E(U,!1,void 0,!0),Wi(T,[U])},onAppearCancelled(U){E(U,!0,void 0,!0),Wi(N,[U])},onLeaveCancelled(U){S(U),Wi(I,[U])}})}function y_(n){if(n==null)return null;if(mt(n))return[ka(n.enter),ka(n.leave)];{const e=ka(n);return[e,e]}}function ka(n){return bm(n)}function Yn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ws]||(n[Ws]=new Set)).add(e)}function Xi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Ws];t&&(t.delete(e),t.size||(n[Ws]=void 0))}function Xu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let x_=0;function qu(n,e,t,i){const r=n._endId=++x_,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:c}=b_(n,e);if(!o)return i();const l=o+"end";let u=0;const d=()=>{n.removeEventListener(l,h),s()},h=f=>{f.target===n&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),n.addEventListener(l,h)}function b_(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${pi}Delay`),s=i(`${pi}Duration`),o=Yu(r,s),a=i(`${us}Delay`),c=i(`${us}Duration`),l=Yu(a,c);let u=null,d=0,h=0;e===pi?o>0&&(u=pi,d=o,h=s.length):e===us?l>0&&(u=us,d=l,h=c.length):(d=Math.max(o,l),u=d>0?o>l?pi:us:null,h=u?u===pi?s.length:c.length:0);const f=u===pi&&/\b(transform|all)(,|$)/.test(i(`${pi}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:f}}function Yu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>ju(t)+ju(n[i])))}function ju(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Ku(){return document.body.offsetHeight}function S_(n,e,t){const i=n[Ws];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const $u=Symbol("_vod"),M_=Symbol("_vsh"),E_=Symbol(""),T_=/(^|;)\s*display\s*:/;function A_(n,e,t){const i=n.style,r=Mt(t);let s=!1;if(t&&!r){if(e)if(Mt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&zo(i,a,"")}else for(const o in e)t[o]==null&&zo(i,o,"");for(const o in t)o==="display"&&(s=!0),zo(i,o,t[o])}else if(r){if(e!==t){const o=i[E_];o&&(t+=";"+o),i.cssText=t,s=T_.test(t)}}else e&&n.removeAttribute("style");$u in n&&(n[$u]=s?i.display:"",n[M_]&&(i.display="none"))}const Zu=/\s*!important$/;function zo(n,e,t){if(Oe(t))t.forEach(i=>zo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=w_(n,e);Zu.test(t)?n.setProperty(dr(i),t.replace(Zu,""),"important"):n[i]=t}}const Ju=["Webkit","Moz","ms"],Ha={};function w_(n,e){const t=Ha[e];if(t)return t;let i=_n(e);if(i!=="filter"&&i in n)return Ha[e]=i;i=da(i);for(let r=0;r<Ju.length;r++){const s=Ju[r]+i;if(s in n)return Ha[e]=s}return e}const Qu="http://www.w3.org/1999/xlink";function ed(n,e,t,i,r,s=wm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Qu,e.slice(6,e.length)):n.setAttributeNS(Qu,e,t):t==null||s&&!Jh(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Fi(t)?String(t):t)}function td(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?rp(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Jh(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function R_(n,e,t,i){n.addEventListener(e,t,i)}function C_(n,e,t,i){n.removeEventListener(e,t,i)}const nd=Symbol("_vei");function P_(n,e,t,i,r=null){const s=n[nd]||(n[nd]={}),o=s[e];if(i&&o)o.value=i;else{const[a,c]=I_(e);if(i){const l=s[e]=U_(i,r);R_(n,a,l,c)}else o&&(C_(n,a,o,c),s[e]=void 0)}}const id=/(?:Once|Passive|Capture)$/;function I_(n){let e;if(id.test(n)){e={};let i;for(;i=n.match(id);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):dr(n.slice(2)),e]}let za=0;const L_=Promise.resolve(),D_=()=>za||(L_.then(()=>za=0),za=Date.now());function U_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;In(N_(i,t.value),e,5,[i])};return t.value=n,t.attached=D_(),t}function N_(n,e){if(Oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const rd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,F_=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?S_(n,i,o):e==="style"?A_(n,t,i):ca(e)?Nl(e)||P_(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):O_(n,e,i,o))?(td(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ed(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Mt(i))?td(n,_n(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),ed(n,e,i,o))};function O_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&rd(e)&&Ve(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return rd(e)&&Mt(t)?!1:e in n}const B_=Lt({patchProp:F_},m_);let sd;function k_(){return sd||(sd=Fg(B_))}const H_=(...n)=>{const e=k_().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=V_(i);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,z_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function z_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function V_(n){return Mt(n)?document.querySelector(n):n}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Pr=typeof document<"u";function op(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function G_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&op(n.default)}const ot=Object.assign;function Va(n,e){const t={};for(const i in e){const r=e[i];t[i]=Ln(r)?r.map(n):n(r)}return t}const Is=()=>{},Ln=Array.isArray,ap=/#/g,W_=/&/g,X_=/\//g,q_=/=/g,Y_=/\?/g,cp=/\+/g,j_=/%5B/g,K_=/%5D/g,lp=/%5E/g,$_=/%60/g,up=/%7B/g,Z_=/%7C/g,dp=/%7D/g,J_=/%20/g;function Zl(n){return encodeURI(""+n).replace(Z_,"|").replace(j_,"[").replace(K_,"]")}function Q_(n){return Zl(n).replace(up,"{").replace(dp,"}").replace(lp,"^")}function Hc(n){return Zl(n).replace(cp,"%2B").replace(J_,"+").replace(ap,"%23").replace(W_,"%26").replace($_,"`").replace(up,"{").replace(dp,"}").replace(lp,"^")}function ev(n){return Hc(n).replace(q_,"%3D")}function tv(n){return Zl(n).replace(ap,"%23").replace(Y_,"%3F")}function nv(n){return n==null?"":tv(n).replace(X_,"%2F")}function Xs(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const iv=/\/$/,rv=n=>n.replace(iv,"");function Ga(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=cv(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Xs(o)}}function sv(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function od(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function ov(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Wr(e.matched[i],t.matched[r])&&hp(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Wr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function hp(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!av(n[t],e[t]))return!1;return!0}function av(n,e){return Ln(n)?ad(n,e):Ln(e)?ad(e,n):n===e}function ad(n,e){return Ln(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function cv(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const mi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var qs;(function(n){n.pop="pop",n.push="push"})(qs||(qs={}));var Ls;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ls||(Ls={}));function lv(n){if(!n)if(Pr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),rv(n)}const uv=/^[^#]+#/;function dv(n,e){return n.replace(uv,"#")+e}function hv(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Sa=()=>({left:window.scrollX,top:window.scrollY});function fv(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=hv(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function cd(n,e){return(history.state?history.state.position-e:-1)+n}const zc=new Map;function pv(n,e){zc.set(n,e)}function mv(n){const e=zc.get(n);return zc.delete(n),e}let gv=()=>location.protocol+"//"+location.host;function fp(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),od(c,"")}return od(t,n)+i+r}function _v(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const f=fp(n,location),g=t.value,_=e.value;let m=0;if(h){if(t.value=f,e.value=h,o&&o===g){o=null;return}m=_?h.position-_.position:0}else i(f);r.forEach(p=>{p(t.value,g,{delta:m,type:qs.pop,direction:m?m>0?Ls.forward:Ls.back:Ls.unknown})})};function c(){o=t.value}function l(h){r.push(h);const f=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(f),f}function u(){const{history:h}=window;h.state&&h.replaceState(ot({},h.state,{scroll:Sa()}),"")}function d(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function ld(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Sa():null}}function vv(n){const{history:e,location:t}=window,i={value:fp(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const d=n.indexOf("#"),h=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+c:gv()+n+c;try{e[u?"replaceState":"pushState"](l,"",h),r.value=l}catch(f){console.error(f),t[u?"replace":"assign"](h)}}function o(c,l){const u=ot({},e.state,ld(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});s(c,u,!0),i.value=c}function a(c,l){const u=ot({},r.value,e.state,{forward:c,scroll:Sa()});s(u.current,u,!0);const d=ot({},ld(i.value,c,null),{position:u.position+1},l);s(c,d,!1),i.value=c}return{location:i,state:r,push:a,replace:o}}function yv(n){n=lv(n);const e=vv(n),t=_v(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=ot({location:"",base:n,go:i,createHref:dv.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function xv(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),yv(n)}function bv(n){return typeof n=="string"||n&&typeof n=="object"}function pp(n){return typeof n=="string"||typeof n=="symbol"}const mp=Symbol("");var ud;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(ud||(ud={}));function Xr(n,e){return ot(new Error,{type:n,[mp]:!0},e)}function jn(n,e){return n instanceof Error&&mp in n&&(e==null||!!(n.type&e))}const dd="[^/]+?",Sv={sensitive:!1,strict:!1,start:!0,end:!0},Mv=/[.+*?^${}()[\]/\\]/g;function Ev(n,e){const t=ot({},Sv,e),i=[];let r=t.start?"^":"";const s=[];for(const l of n){const u=l.length?[]:[90];t.strict&&!l.length&&(r+="/");for(let d=0;d<l.length;d++){const h=l[d];let f=40+(t.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(Mv,"\\$&"),f+=40;else if(h.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=h;s.push({name:g,repeatable:_,optional:m});const A=p||dd;if(A!==dd){f+=10;try{new RegExp(`(${A})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${A}): `+x.message)}}let T=_?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;d||(T=m&&l.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),r+=T,f+=20,m&&(f+=-8),_&&(f+=-20),A===".*"&&(f+=-50)}u.push(f)}i.push(u)}if(t.strict&&t.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const f=u[h]||"",g=s[h-1];d[g.name]=f&&g.repeatable?f.split("/"):f}return d}function c(l){let u="",d=!1;for(const h of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of h)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:_,optional:m}=f,p=g in l?l[g]:"";if(Ln(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const A=Ln(p)?p.join("/"):p;if(!A)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=A}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:c}}function Tv(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function gp(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Tv(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(hd(i))return 1;if(hd(r))return-1}return r.length-i.length}function hd(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Av={type:0,value:""},wv=/[a-zA-Z0-9_]/;function Rv(n){if(!n)return[[]];if(n==="/")return[[Av]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(f){throw new Error(`ERR (${t})/"${l}": ${f}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,c,l="",u="";function d(){l&&(t===0?s.push({type:0,value:l}):t===1||t===2||t===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),t=1):h();break;case 4:h(),t=i;break;case 1:c==="("?t=2:wv.test(c)?h():(d(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:t=3:u+=c;break;case 3:d(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),r}function Cv(n,e,t){const i=Ev(Rv(n.path),t),r=ot(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Pv(n,e){const t=[],i=new Map;e=gd({strict:!1,end:!0,sensitive:!1},e);function r(d){return i.get(d)}function s(d,h,f){const g=!f,_=pd(d);_.aliasOf=f&&f.record;const m=gd(e,d),p=[_];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const I of x)p.push(pd(ot({},_,{components:f?f.record.components:_.components,path:I,aliasOf:f?f.record:_})))}let A,T;for(const x of p){const{path:I}=x;if(h&&I[0]!=="/"){const P=h.record.path,C=P[P.length-1]==="/"?"":"/";x.path=h.record.path+(I&&C+I)}if(A=Cv(x,h,m),f?f.alias.push(A):(T=T||A,T!==A&&T.alias.push(A),g&&d.name&&!md(A)&&o(d.name)),_p(A)&&c(A),_.children){const P=_.children;for(let C=0;C<P.length;C++)s(P[C],A,f&&f.children[C])}f=f||A}return T?()=>{o(T)}:Is}function o(d){if(pp(d)){const h=i.get(d);h&&(i.delete(d),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(d);h>-1&&(t.splice(h,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return t}function c(d){const h=Dv(d,t);t.splice(h,0,d),d.record.name&&!md(d)&&i.set(d.record.name,d)}function l(d,h){let f,g={},_,m;if("name"in d&&d.name){if(f=i.get(d.name),!f)throw Xr(1,{location:d});m=f.record.name,g=ot(fd(h.params,f.keys.filter(T=>!T.optional).concat(f.parent?f.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),d.params&&fd(d.params,f.keys.map(T=>T.name))),_=f.stringify(g)}else if(d.path!=null)_=d.path,f=t.find(T=>T.re.test(_)),f&&(g=f.parse(_),m=f.record.name);else{if(f=h.name?i.get(h.name):t.find(T=>T.re.test(h.path)),!f)throw Xr(1,{location:d,currentLocation:h});m=f.record.name,g=ot({},h.params,d.params),_=f.stringify(g)}const p=[];let A=f;for(;A;)p.unshift(A.record),A=A.parent;return{name:m,path:_,params:g,matched:p,meta:Lv(p)}}n.forEach(d=>s(d));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function fd(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function pd(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Iv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Iv(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function md(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Lv(n){return n.reduce((e,t)=>ot(e,t.meta),{})}function gd(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Dv(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;gp(n,e[s])<0?i=s:t=s+1}const r=Uv(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function Uv(n){let e=n;for(;e=e.parent;)if(_p(e)&&gp(n,e)===0)return e}function _p({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Nv(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(cp," "),o=s.indexOf("="),a=Xs(o<0?s:s.slice(0,o)),c=o<0?null:Xs(s.slice(o+1));if(a in e){let l=e[a];Ln(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function _d(n){let e="";for(let t in n){const i=n[t];if(t=ev(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Ln(i)?i.map(s=>s&&Hc(s)):[i&&Hc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Fv(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Ln(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Ov=Symbol(""),vd=Symbol(""),Jl=Symbol(""),vp=Symbol(""),Vc=Symbol("");function ds(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ai(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const l=h=>{h===!1?c(Xr(4,{from:t,to:e})):h instanceof Error?c(h):bv(h)?c(Xr(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,l));let d=Promise.resolve(u);n.length<3&&(d=d.then(l)),d.catch(h=>c(h))})}function Wa(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(op(c)){const u=(c.__vccOpts||c)[e];u&&s.push(Ai(u,t,i,o,a,r))}else{let l=c();s.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=G_(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[e];return f&&Ai(f,t,i,o,a,r)()}))}}return s}function yd(n){const e=ai(Jl),t=ai(vp),i=Tn(()=>{const c=Fr(n.to);return e.resolve(c)}),r=Tn(()=>{const{matched:c}=i.value,{length:l}=c,u=c[l-1],d=t.matched;if(!u||!d.length)return-1;const h=d.findIndex(Wr.bind(null,u));if(h>-1)return h;const f=xd(c[l-2]);return l>1&&xd(u)===f&&d[d.length-1].path!==f?d.findIndex(Wr.bind(null,c[l-2])):h}),s=Tn(()=>r.value>-1&&Vv(t.params,i.value.params)),o=Tn(()=>r.value>-1&&r.value===t.matched.length-1&&hp(t.params,i.value.params));function a(c={}){if(zv(c)){const l=e[Fr(n.replace)?"replace":"push"](Fr(n.to)).catch(Is);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:i,href:Tn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function Bv(n){return n.length===1?n[0]:n}const kv=Lf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:yd,setup(n,{slots:e}){const t=pa(yd(n)),{options:i}=ai(Jl),r=Tn(()=>({[bd(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[bd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&Bv(e.default(t));return n.custom?s:$l("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Hv=kv;function zv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Vv(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Ln(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function xd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const bd=(n,e,t)=>n??e??t,Gv=Lf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=ai(Vc),r=Tn(()=>n.route||i.value),s=ai(vd,0),o=Tn(()=>{let l=Fr(s);const{matched:u}=r.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=Tn(()=>r.value.matched[o.value]);Bo(vd,Tn(()=>o.value+1)),Bo(Ov,a),Bo(Vc,r);const c=ks();return Cs(()=>[c.value,a.value,n.name],([l,u,d],[h,f,g])=>{u&&(u.instances[d]=l,f&&f!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!Wr(u,f)||!h)&&(u.enterCallbacks[d]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=r.value,u=n.name,d=a.value,h=d&&d.components[u];if(!h)return Sd(t.default,{Component:h,route:l});const f=d.props[u],g=f?f===!0?l.params:typeof f=="function"?f(l):f:null,m=$l(h,ot({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Sd(t.default,{Component:m,route:l})||m}}});function Sd(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Wv=Gv;function Xv(n){const e=Pv(n.routes,n),t=n.parseQuery||Nv,i=n.stringifyQuery||_d,r=n.history,s=ds(),o=ds(),a=ds(),c=Km(mi);let l=mi;Pr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Va.bind(null,F=>""+F),d=Va.bind(null,nv),h=Va.bind(null,Xs);function f(F,se){let ae,ce;return pp(F)?(ae=e.getRecordMatcher(F),ce=se):ce=F,e.addRoute(ce,ae)}function g(F){const se=e.getRecordMatcher(F);se&&e.removeRoute(se)}function _(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function p(F,se){if(se=ot({},se||c.value),typeof F=="string"){const y=Ga(t,F,se.path),ie=e.resolve({path:y.path},se),$=r.createHref(y.fullPath);return ot(y,ie,{params:h(ie.params),hash:Xs(y.hash),redirectedFrom:void 0,href:$})}let ae;if(F.path!=null)ae=ot({},F,{path:Ga(t,F.path,se.path).path});else{const y=ot({},F.params);for(const ie in y)y[ie]==null&&delete y[ie];ae=ot({},F,{params:d(y)}),se.params=d(se.params)}const ce=e.resolve(ae,se),Ue=F.hash||"";ce.params=u(h(ce.params));const w=sv(i,ot({},F,{hash:Q_(Ue),path:ce.path})),R=r.createHref(w);return ot({fullPath:w,hash:Ue,query:i===_d?Fv(F.query):F.query||{}},ce,{redirectedFrom:void 0,href:R})}function A(F){return typeof F=="string"?Ga(t,F,c.value.path):ot({},F)}function T(F,se){if(l!==F)return Xr(8,{from:se,to:F})}function x(F){return C(F)}function I(F){return x(ot(A(F),{replace:!0}))}function P(F){const se=F.matched[F.matched.length-1];if(se&&se.redirect){const{redirect:ae}=se;let ce=typeof ae=="function"?ae(F):ae;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=A(ce):{path:ce},ce.params={}),ot({query:F.query,hash:F.hash,params:ce.path!=null?{}:F.params},ce)}}function C(F,se){const ae=l=p(F),ce=c.value,Ue=F.state,w=F.force,R=F.replace===!0,y=P(ae);if(y)return C(ot(A(y),{state:typeof y=="object"?ot({},Ue,y.state):Ue,force:w,replace:R}),se||ae);const ie=ae;ie.redirectedFrom=se;let $;return!w&&ov(i,ce,ae)&&($=Xr(16,{to:ie,from:ce}),Re(ce,ce,!0,!1)),($?Promise.resolve($):S(ie,ce)).catch(q=>jn(q)?jn(q,2)?q:ve(q):V(q,ie,ce)).then(q=>{if(q){if(jn(q,2))return C(ot({replace:R},A(q.to),{state:typeof q.to=="object"?ot({},Ue,q.to.state):Ue,force:w}),se||ie)}else q=U(ie,ce,!0,R,Ue);return D(ie,ce,q),q})}function N(F,se){const ae=T(F,se);return ae?Promise.reject(ae):Promise.resolve()}function E(F){const se=re.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(F):F()}function S(F,se){let ae;const[ce,Ue,w]=qv(F,se);ae=Wa(ce.reverse(),"beforeRouteLeave",F,se);for(const y of ce)y.leaveGuards.forEach(ie=>{ae.push(Ai(ie,F,se))});const R=N.bind(null,F,se);return ae.push(R),be(ae).then(()=>{ae=[];for(const y of s.list())ae.push(Ai(y,F,se));return ae.push(R),be(ae)}).then(()=>{ae=Wa(Ue,"beforeRouteUpdate",F,se);for(const y of Ue)y.updateGuards.forEach(ie=>{ae.push(Ai(ie,F,se))});return ae.push(R),be(ae)}).then(()=>{ae=[];for(const y of w)if(y.beforeEnter)if(Ln(y.beforeEnter))for(const ie of y.beforeEnter)ae.push(Ai(ie,F,se));else ae.push(Ai(y.beforeEnter,F,se));return ae.push(R),be(ae)}).then(()=>(F.matched.forEach(y=>y.enterCallbacks={}),ae=Wa(w,"beforeRouteEnter",F,se,E),ae.push(R),be(ae))).then(()=>{ae=[];for(const y of o.list())ae.push(Ai(y,F,se));return ae.push(R),be(ae)}).catch(y=>jn(y,8)?y:Promise.reject(y))}function D(F,se,ae){a.list().forEach(ce=>E(()=>ce(F,se,ae)))}function U(F,se,ae,ce,Ue){const w=T(F,se);if(w)return w;const R=se===mi,y=Pr?history.state:{};ae&&(ce||R?r.replace(F.fullPath,ot({scroll:R&&y&&y.scroll},Ue)):r.push(F.fullPath,Ue)),c.value=F,Re(F,se,ae,R),ve()}let B;function Q(){B||(B=r.listen((F,se,ae)=>{if(!fe.listening)return;const ce=p(F),Ue=P(ce);if(Ue){C(ot(Ue,{replace:!0,force:!0}),ce).catch(Is);return}l=ce;const w=c.value;Pr&&pv(cd(w.fullPath,ae.delta),Sa()),S(ce,w).catch(R=>jn(R,12)?R:jn(R,2)?(C(ot(A(R.to),{force:!0}),ce).then(y=>{jn(y,20)&&!ae.delta&&ae.type===qs.pop&&r.go(-1,!1)}).catch(Is),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),V(R,ce,w))).then(R=>{R=R||U(ce,w,!1),R&&(ae.delta&&!jn(R,8)?r.go(-ae.delta,!1):ae.type===qs.pop&&jn(R,20)&&r.go(-1,!1)),D(ce,w,R)}).catch(Is)}))}let ne=ds(),Z=ds(),j;function V(F,se,ae){ve(F);const ce=Z.list();return ce.length?ce.forEach(Ue=>Ue(F,se,ae)):console.error(F),Promise.reject(F)}function pe(){return j&&c.value!==mi?Promise.resolve():new Promise((F,se)=>{ne.add([F,se])})}function ve(F){return j||(j=!F,Q(),ne.list().forEach(([se,ae])=>F?ae(F):se()),ne.reset()),F}function Re(F,se,ae,ce){const{scrollBehavior:Ue}=n;if(!Pr||!Ue)return Promise.resolve();const w=!ae&&mv(cd(F.fullPath,0))||(ce||!ae)&&history.state&&history.state.scroll||null;return bf().then(()=>Ue(F,se,w)).then(R=>R&&fv(R)).catch(R=>V(R,F,se))}const Ie=F=>r.go(F);let Je;const re=new Set,fe={currentRoute:c,listening:!0,addRoute:f,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:x,replace:I,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:pe,install(F){const se=this;F.component("RouterLink",Hv),F.component("RouterView",Wv),F.config.globalProperties.$router=se,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Fr(c)}),Pr&&!Je&&c.value===mi&&(Je=!0,x(r.location).catch(Ue=>{}));const ae={};for(const Ue in mi)Object.defineProperty(ae,Ue,{get:()=>c.value[Ue],enumerable:!0});F.provide(Jl,se),F.provide(vp,gf(ae)),F.provide(Vc,c);const ce=F.unmount;re.add(F),F.unmount=function(){re.delete(F),re.size<1&&(l=mi,B&&B(),B=null,c.value=mi,Je=!1,j=!1),ce()}}};function be(F){return F.reduce((se,ae)=>se.then(()=>E(ae)),Promise.resolve())}return fe}function qv(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(l=>Wr(l,a))?i.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(l=>Wr(l,c))||r.push(c))}return[t,i,r]}const vn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Yv={setup(){const n="ontouchstart"in window||navigator.maxTouchPoints>0,e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,t=ks(!1),i=ks((window.innerWidth<=768||e)&&n),r=()=>{i.value=(window.innerWidth<=768||e)&&n},s=()=>{t.value=!1};va(()=>{window.addEventListener("resize",r),window.addEventListener("orientationchange",r)}),ya(()=>{window.removeEventListener("resize",r),window.removeEventListener("orientationchange",r)});const o=()=>{t.value=!t.value};return Cs(t,a=>{a?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")}),{mobileMenuOpen:t,toggleMobileMenu:o,closeMobileMenu:s}}},jv={class:"header"},Kv={class:"container"},$v={class:"nav"},Zv={key:0,class:"mobile-menu"},Jv={class:"mobile-menu-content"};function Qv(n,e,t,i,r,s){const o=Br("RouterLink");return xt(),St("header",jv,[Te("div",Kv,[je(o,{to:"/",class:"logo"},{default:bt(()=>e[2]||(e[2]=[At("ASpan")])),_:1}),Te("nav",$v,[je(o,{to:"/",class:"nav-link"},{default:bt(()=>e[3]||(e[3]=[At(" Главная ")])),_:1}),je(o,{to:"/microlessons",class:"nav-link"},{default:bt(()=>e[4]||(e[4]=[At("Микроуроки")])),_:1}),je(o,{to:"/islands",class:"nav-link"},{default:bt(()=>e[5]||(e[5]=[At("Острова")])),_:1}),je(o,{to:"/volunteer",class:"nav-link"},{default:bt(()=>e[6]||(e[6]=[At("Волонтерство")])),_:1}),je(o,{to:"/hackathon",class:"nav-link"},{default:bt(()=>e[7]||(e[7]=[At("Хакатон")])),_:1}),je(o,{to:"/about-us",class:"nav-link"},{default:bt(()=>e[8]||(e[8]=[At("О нас")])),_:1})]),Te("button",{class:"mobile-menu-button",onClick:e[0]||(e[0]=(...a)=>i.toggleMobileMenu&&i.toggleMobileMenu(...a))},"☰")]),je(kc,{name:"mobile-menu"},{default:bt(()=>[i.mobileMenuOpen?(xt(),St("div",Zv,[Te("button",{class:"close-button",onClick:e[1]||(e[1]=(...a)=>i.toggleMobileMenu&&i.toggleMobileMenu(...a))},"×"),Te("div",Jv,[je(o,{to:"/",class:"mobile-menu-item",onClick:i.closeMobileMenu},{default:bt(()=>e[9]||(e[9]=[At("Главная")])),_:1},8,["onClick"]),je(o,{to:"/microlessons",class:"mobile-menu-item",onClick:i.closeMobileMenu},{default:bt(()=>e[10]||(e[10]=[At("Микроуроки")])),_:1},8,["onClick"]),je(o,{to:"/islands",class:"mobile-menu-item",onClick:i.closeMobileMenu},{default:bt(()=>e[11]||(e[11]=[At("Острова")])),_:1},8,["onClick"]),je(o,{to:"/volunteer",class:"mobile-menu-item",onClick:i.closeMobileMenu},{default:bt(()=>e[12]||(e[12]=[At("Волонтерство")])),_:1},8,["onClick"]),je(o,{to:"/hackathon",class:"mobile-menu-item",onClick:i.closeMobileMenu},{default:bt(()=>e[13]||(e[13]=[At("Хакатон")])),_:1},8,["onClick"]),je(o,{to:"/about-us",class:"mobile-menu-item",onClick:i.closeMobileMenu},{default:bt(()=>e[14]||(e[14]=[At("О нас")])),_:1},8,["onClick"])])])):e_("",!0)]),_:1})])}const ey=vn(Yv,[["render",Qv],["__scopeId","data-v-ce9b943d"]]),ty="/aspan_web/assets/instagram-icon.png",ny="/aspan_web/assets/whatsapp-icon.png",iy={data(){return{currentYear:new Date().getFullYear()}}},ry={class:"main-footer"},sy={class:"footer-navigation"},oy={class:"footer-credit"};function ay(n,e,t,i,r,s){const o=Br("RouterLink");return xt(),St("footer",ry,[e[4]||(e[4]=Js('<div class="social-links" data-v-99be3d32><a href="https://www.instagram.com/aspanapp/" target="_blank" data-v-99be3d32><img src="'+ty+'" alt="Instagram" data-v-99be3d32></a><a href="https://wa.me/77473889664" target="_blank" data-v-99be3d32><img src="'+ny+'" alt="WhatsApp" data-v-99be3d32></a></div>',1)),Te("ul",sy,[Te("li",null,[je(o,{to:"/",class:"footer-element"},{default:bt(()=>e[0]||(e[0]=[At("Главная")])),_:1})]),Te("li",null,[je(o,{to:"/about-us",class:"footer-element"},{default:bt(()=>e[1]||(e[1]=[At("О нас")])),_:1})]),Te("li",null,[je(o,{to:"/terms-of-use",class:"footer-element"},{default:bt(()=>e[2]||(e[2]=[At("Условия использования")])),_:1})]),Te("li",null,[je(o,{to:"/privacy-policy",class:"footer-element"},{default:bt(()=>e[3]||(e[3]=[At("Политика конфиденциальности")])),_:1})])]),Te("p",oy,"ASpan © "+En(r.currentYear),1)])}const cy=vn(iy,[["render",ay],["__scopeId","data-v-99be3d32"]]),ly={components:{Header:ey,Footer:cy}};function uy(n,e,t,i,r,s){const o=Br("Header"),a=Br("RouterView"),c=Br("Footer");return xt(),St(Ht,null,[je(o),Te("main",null,[je(a)]),je(c)],64)}const dy=vn(ly,[["render",uy]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ql="173",hy=0,Md=1,fy=2,yp=1,py=2,ti=3,ui=0,Qt=1,On=2,Li=0,Hr=1,Ed=2,Td=3,Ad=4,my=5,ir=100,gy=101,_y=102,vy=103,yy=104,xy=200,by=201,Sy=202,My=203,Gc=204,Wc=205,Ey=206,Ty=207,Ay=208,wy=209,Ry=210,Cy=211,Py=212,Iy=213,Ly=214,Xc=0,qc=1,Yc=2,qr=3,jc=4,Kc=5,$c=6,Zc=7,xp=0,Dy=1,Uy=2,Di=0,Ny=1,Fy=2,Oy=3,bp=4,By=5,ky=6,Hy=7,wd="attached",zy="detached",Sp=300,Yr=301,jr=302,Jc=303,Qc=304,Ma=306,Kr=1e3,Ci=1001,ia=1002,Yt=1003,Mp=1004,Ss=1005,an=1006,Vo=1007,si=1008,di=1009,Ep=1010,Tp=1011,Ys=1012,eu=1013,lr=1014,Rn=1015,eo=1016,tu=1017,nu=1018,$r=1020,Ap=35902,wp=1021,Rp=1022,mn=1023,Cp=1024,Pp=1025,zr=1026,Zr=1027,iu=1028,ru=1029,Ip=1030,su=1031,ou=1033,Go=33776,Wo=33777,Xo=33778,qo=33779,el=35840,tl=35841,nl=35842,il=35843,rl=36196,sl=37492,ol=37496,al=37808,cl=37809,ll=37810,ul=37811,dl=37812,hl=37813,fl=37814,pl=37815,ml=37816,gl=37817,_l=37818,vl=37819,yl=37820,xl=37821,Yo=36492,bl=36494,Sl=36495,Lp=36283,Ml=36284,El=36285,Tl=36286,js=2300,Ks=2301,Xa=2302,Rd=2400,Cd=2401,Pd=2402,Vy=2500,Gy=0,Dp=1,Al=2,Wy=3200,Xy=3201,Up=0,qy=1,Ri="",Pt="srgb",Kt="srgb-linear",ra="linear",dt="srgb",pr=7680,Id=519,Yy=512,jy=513,Ky=514,Np=515,$y=516,Zy=517,Jy=518,Qy=519,wl=35044,Ld="300 es",oi=2e3,sa=2001;class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dd=1234567;const Ds=Math.PI/180,Jr=180/Math.PI;function Pn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function au(n,e){return(n%e+e)%e}function e0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function t0(n,e,t){return n!==e?(t-n)/(e-n):0}function Us(n,e,t){return(1-t)*n+t*e}function n0(n,e,t,i){return Us(n,e,1-Math.exp(-t*i))}function i0(n,e=1){return e-Math.abs(au(n,e*2)-e)}function r0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function s0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function o0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function a0(n,e){return n+Math.random()*(e-n)}function c0(n){return n*(.5-Math.random())}function l0(n){n!==void 0&&(Dd=n);let e=Dd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function u0(n){return n*Ds}function d0(n){return n*Jr}function h0(n){return(n&n-1)===0&&n!==0}function f0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function p0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function m0(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function An(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const g0={DEG2RAD:Ds,RAD2DEG:Jr,generateUUID:Pn,clamp:Ke,euclideanModulo:au,mapLinear:e0,inverseLerp:t0,lerp:Us,damp:n0,pingpong:i0,smoothstep:r0,smootherstep:s0,randInt:o0,randFloat:a0,randFloatSpread:c0,seededRandom:l0,degToRad:u0,radToDeg:d0,isPowerOfTwo:h0,ceilPowerOfTwo:f0,floorPowerOfTwo:p0,setQuaternionFromProperEuler:m0,normalize:lt,denormalize:An};class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,i,r,s,o,a,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],A=r[1],T=r[4],x=r[7],I=r[2],P=r[5],C=r[8];return s[0]=o*_+a*A+c*I,s[3]=o*m+a*T+c*P,s[6]=o*p+a*x+c*C,s[1]=l*_+u*A+d*I,s[4]=l*m+u*T+d*P,s[7]=l*p+u*x+d*C,s[2]=h*_+f*A+g*I,s[5]=h*m+f*T+g*P,s[8]=h*p+f*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,g=t*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qa.makeScale(e,t)),this}rotate(e){return this.premultiply(qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new qe;function Fp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $s(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _0(){const n=$s("canvas");return n.style.display="block",n}const Ud={};function Ir(n){n in Ud||(Ud[n]=!0,console.warn(n))}function v0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function y0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function x0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Nd=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fd=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b0(){const n={enabled:!0,workingColorSpace:Kt,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===dt&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(r.r=Vr(r.r),r.g=Vr(r.g),r.b=Vr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ri?ra:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Kt]:{primaries:e,whitePoint:i,transfer:ra,toXYZ:Nd,fromXYZ:Fd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Nd,fromXYZ:Fd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),n}const Qe=b0();function ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let mr;class S0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mr===void 0&&(mr=$s("canvas")),mr.width=e.width,mr.height=e.height;const i=mr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=mr}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$s("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ci(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ci(t[i]/255)*255):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let M0=0;class Op{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ya(r[o].image)):s.push(Ya(r[o]))}else s=Ya(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ya(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?S0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let E0=0;class It extends is{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=Ci,r=Ci,s=an,o=si,a=mn,c=di,l=It.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Pn(),this.name="",this.source=new Op(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kr:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kr:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Sp;It.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,x=(f+1)/2,I=(p+1)/2,P=(u+h)/4,C=(d+_)/4,N=(g+m)/4;return T>x&&T>I?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=P/i,s=C/i):x>I?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=P/r,s=N/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=C/s,r=N/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(d-_)/A,this.z=(h-u)/A,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class T0 extends is{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new It(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Op(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ur extends T0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bp extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class A0 extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==h||l!==f||u!==g){let m=1-a;const p=c*h+l*f+u*g+d*_,A=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const I=Math.sqrt(T),P=Math.atan2(I,p*A);m=Math.sin(m*P)/I,a=Math.sin(a*P)/I}const x=a*A;if(c=c*m+h*x,l=l*m+f*x,u=u*m+g*x,d=d*m+_*x,m===1-a){const I=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=I,l*=I,u*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-a*f,e[t+2]=l*g+u*f+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Od.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Od.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ja.copy(this).projectOnVector(e),this.sub(ja)}reflect(e){return this.sub(ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new z,Od=new ki;class fi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(s,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(e.matrixWorld),this.union(uo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),ho.subVectors(this.max,hs),gr.subVectors(e.a,hs),_r.subVectors(e.b,hs),vr.subVectors(e.c,hs),gi.subVectors(_r,gr),_i.subVectors(vr,_r),qi.subVectors(gr,vr);let t=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-qi.z,qi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,qi.z,0,-qi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-qi.y,qi.x,0];return!Ka(t,gr,_r,vr,ho)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,gr,_r,vr,ho))?!1:(fo.crossVectors(gi,_i),t=[fo.x,fo.y,fo.z],Ka(t,gr,_r,vr,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new z,new z,new z,new z,new z,new z,new z,new z],bn=new z,uo=new fi,gr=new z,_r=new z,vr=new z,gi=new z,_i=new z,qi=new z,hs=new z,ho=new z,fo=new z,Yi=new z;function Ka(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Yi.fromArray(n,s);const a=r.x*Math.abs(Yi.x)+r.y*Math.abs(Yi.y)+r.z*Math.abs(Yi.z),c=e.dot(Yi),l=t.dot(Yi),u=i.dot(Yi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const w0=new fi,fs=new z,$a=new z;class zn{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):w0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);const t=fs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(fs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add($a)),this.expandByPoint(fs.copy(e.center).sub($a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new z,Za=new z,po=new z,vi=new z,Ja=new z,mo=new z,Qa=new z;class to{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Za.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(Za);const s=e.distanceTo(t)*.5,o=-this.direction.dot(po),a=vi.dot(this.direction),c=-vi.dot(po),l=vi.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Za).addScaledVector(po,h),f}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const i=$n.dot(this.direction),r=$n.dot($n)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,i,r,s){Ja.subVectors(t,e),mo.subVectors(i,e),Qa.crossVectors(Ja,mo);let o=this.direction.dot(Qa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const c=a*this.direction.dot(mo.crossVectors(vi,mo));if(c<0)return null;const l=a*this.direction.dot(Ja.cross(vi));if(l<0||c+l>o)return null;const u=-a*vi.dot(Qa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(e,t,i,r,s,o,a,c,l,u,d,h,f,g,_,m){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,f,g,_,m)}set(e,t,i,r,s,o,a,c,l,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/yr.setFromMatrixColumn(e,0).length(),s=1/yr.setFromMatrixColumn(e,1).length(),o=1/yr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,g=l*u,_=l*d;t[0]=h+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,g=l*u,_=l*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R0,e,C0)}lookAt(e,t,i){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),yi.crossVectors(i,tn),yi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),yi.crossVectors(i,tn)),yi.normalize(),go.crossVectors(tn,yi),r[0]=yi.x,r[4]=go.x,r[8]=tn.x,r[1]=yi.y,r[5]=go.y,r[9]=tn.y,r[2]=yi.z,r[6]=go.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],A=i[3],T=i[7],x=i[11],I=i[15],P=r[0],C=r[4],N=r[8],E=r[12],S=r[1],D=r[5],U=r[9],B=r[13],Q=r[2],ne=r[6],Z=r[10],j=r[14],V=r[3],pe=r[7],ve=r[11],Re=r[15];return s[0]=o*P+a*S+c*Q+l*V,s[4]=o*C+a*D+c*ne+l*pe,s[8]=o*N+a*U+c*Z+l*ve,s[12]=o*E+a*B+c*j+l*Re,s[1]=u*P+d*S+h*Q+f*V,s[5]=u*C+d*D+h*ne+f*pe,s[9]=u*N+d*U+h*Z+f*ve,s[13]=u*E+d*B+h*j+f*Re,s[2]=g*P+_*S+m*Q+p*V,s[6]=g*C+_*D+m*ne+p*pe,s[10]=g*N+_*U+m*Z+p*ve,s[14]=g*E+_*B+m*j+p*Re,s[3]=A*P+T*S+x*Q+I*V,s[7]=A*C+T*D+x*ne+I*pe,s[11]=A*N+T*U+x*Z+I*ve,s[15]=A*E+T*B+x*j+I*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*f-i*c*f)+_*(+t*c*f-t*l*h+s*o*h-r*o*f+r*l*u-s*c*u)+m*(+t*l*d-t*a*f-s*o*d+i*o*f+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],A=d*m*l-_*h*l+_*c*f-a*m*f-d*c*p+a*h*p,T=g*h*l-u*m*l-g*c*f+o*m*f+u*c*p-o*h*p,x=u*_*l-g*d*l+g*a*f-o*_*f-u*a*p+o*d*p,I=g*d*c-u*_*c-g*a*h+o*_*h+u*a*m-o*d*m,P=t*A+i*T+r*x+s*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=A*C,e[1]=(_*h*s-d*m*s-_*r*f+i*m*f+d*r*p-i*h*p)*C,e[2]=(a*m*s-_*c*s+_*r*l-i*m*l-a*r*p+i*c*p)*C,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*f-i*c*f)*C,e[4]=T*C,e[5]=(u*m*s-g*h*s+g*r*f-t*m*f-u*r*p+t*h*p)*C,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*C,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*f+t*c*f)*C,e[8]=x*C,e[9]=(g*d*s-u*_*s-g*i*f+t*_*f+u*i*p-t*d*p)*C,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*p+t*a*p)*C,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*f-t*a*f)*C,e[12]=I*C,e[13]=(u*_*r-g*d*r+g*i*h-t*_*h-u*i*m+t*d*m)*C,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*m-t*a*m)*C,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,g=s*d,_=o*u,m=o*d,p=a*d,A=c*l,T=c*u,x=c*d,I=i.x,P=i.y,C=i.z;return r[0]=(1-(_+p))*I,r[1]=(f+x)*I,r[2]=(g-T)*I,r[3]=0,r[4]=(f-x)*P,r[5]=(1-(h+p))*P,r[6]=(m+A)*P,r[7]=0,r[8]=(g+T)*C,r[9]=(m-A)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=yr.set(r[0],r[1],r[2]).length();const o=yr.set(r[4],r[5],r[6]).length(),a=yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const l=1/s,u=1/o,d=1/a;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,t.setFromRotationMatrix(Sn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=oi){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let f,g;if(a===oi)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===sa)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=oi){const c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,f=(i+r)*u;let g,_;if(a===oi)g=(o+s)*d,_=-2*d;else if(a===sa)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yr=new z,Sn=new We,R0=new z(0,0,0),C0=new z(1,1,1),yi=new z,go=new z,tn=new z,Bd=new We,kd=new ki;class Hn{constructor(e=0,t=0,i=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kd.setFromEuler(this),this.setFromQuaternion(kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class cu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P0=0;const Hd=new z,xr=new ki,Zn=new We,_o=new z,ps=new z,I0=new z,L0=new ki,zd=new z(1,0,0),Vd=new z(0,1,0),Gd=new z(0,0,1),Wd={type:"added"},D0={type:"removed"},br={type:"childadded",child:null},ec={type:"childremoved",child:null};class _t extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new z,t=new Hn,i=new ki,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new We},normalMatrix:{value:new qe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(zd,e)}rotateY(e){return this.rotateOnAxis(Vd,e)}rotateZ(e){return this.rotateOnAxis(Gd,e)}translateOnAxis(e,t){return Hd.copy(e).applyQuaternion(this.quaternion),this.position.add(Hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zd,e)}translateY(e){return this.translateOnAxis(Vd,e)}translateZ(e){return this.translateOnAxis(Gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_o.copy(e):_o.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(ps,_o,this.up):Zn.lookAt(_o,ps,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),xr.setFromRotationMatrix(Zn),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wd),br.child=e,this.dispatchEvent(br),br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(D0),ec.child=e,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wd),br.child=e,this.dispatchEvent(br),br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,I0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,L0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_t.DEFAULT_UP=new z(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new z,Jn=new z,tc=new z,Qn=new z,Sr=new z,Mr=new z,Xd=new z,nc=new z,ic=new z,rc=new z,sc=new it,oc=new it,ac=new it;class wn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Mn.subVectors(e,t),r.cross(Mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Mn.subVectors(r,t),Jn.subVectors(i,t),tc.subVectors(e,t);const o=Mn.dot(Mn),a=Mn.dot(Jn),c=Mn.dot(tc),l=Jn.dot(Jn),u=Jn.dot(tc),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Qn.x),c.addScaledVector(o,Qn.y),c.addScaledVector(a,Qn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return sc.setScalar(0),oc.setScalar(0),ac.setScalar(0),sc.fromBufferAttribute(e,t),oc.fromBufferAttribute(e,i),ac.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(sc,s.x),o.addScaledVector(oc,s.y),o.addScaledVector(ac,s.z),o}static isFrontFacing(e,t,i,r){return Mn.subVectors(i,t),Jn.subVectors(e,t),Mn.cross(Jn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Mn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Sr.subVectors(r,i),Mr.subVectors(s,i),nc.subVectors(e,i);const c=Sr.dot(nc),l=Mr.dot(nc);if(c<=0&&l<=0)return t.copy(i);ic.subVectors(e,r);const u=Sr.dot(ic),d=Mr.dot(ic);if(u>=0&&d<=u)return t.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Sr,o);rc.subVectors(e,s);const f=Sr.dot(rc),g=Mr.dot(rc);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Mr,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Xd.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(Xd,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(Sr,o).addScaledVector(Mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},vo={h:0,s:0,l:0};function cc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=au(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=cc(o,s,e+1/3),this.g=cc(o,s,e),this.b=cc(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Pt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const i=kp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Qe.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Ke(Ot.r*255,0,255))*65536+Math.round(Ke(Ot.g*255,0,255))*256+Math.round(Ke(Ot.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ot.copy(this),t);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Pt){Qe.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,r=Ot.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(vo);const i=Us(xi.h,vo.h,t),r=Us(xi.s,vo.s,t),s=Us(xi.l,vo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Ge;Ge.NAMES=kp;let U0=0;class kn extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Hr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gc&&(i.blendSrc=this.blendSrc),this.blendDst!==Wc&&(i.blendDst=this.blendDst),this.blendEquation!==ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Id&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sr extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=xp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new z,yo=new Ze;let N0=0;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:N0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wl,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)yo.fromBufferAttribute(this,t),yo.applyMatrix3(e),this.setXY(t,yo.x,yo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=An(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wl&&(e.usage=this.usage),e}}class Hp extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zp extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class li extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let F0=0;const hn=new We,lc=new _t,Er=new z,nn=new fi,ms=new fi,Ct=new z;class Vn extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fp(e)?zp:Hp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,i){return hn.makeTranslation(e,t,i),this.applyMatrix4(hn),this}scale(e,t,i){return hn.makeScale(e,t,i),this.applyMatrix4(hn),this}lookAt(e){return lc.lookAt(e),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new li(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(nn.min,ms.min),nn.expandByPoint(Ct),Ct.addVectors(nn.max,ms.max),nn.expandByPoint(Ct)):(nn.expandByPoint(ms.min),nn.expandByPoint(ms.max))}nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ct.fromBufferAttribute(a,l),c&&(Er.fromBufferAttribute(e,l),Ct.add(Er)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new z,c[N]=new z;const l=new z,u=new z,d=new z,h=new Ze,f=new Ze,g=new Ze,_=new z,m=new z;function p(N,E,S){l.fromBufferAttribute(i,N),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,N),f.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),a[N].add(_),a[E].add(_),a[S].add(_),c[N].add(m),c[E].add(m),c[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,E=A.length;N<E;++N){const S=A[N],D=S.start,U=S.count;for(let B=D,Q=D+U;B<Q;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new z,x=new z,I=new z,P=new z;function C(N){I.fromBufferAttribute(r,N),P.copy(I);const E=a[N];T.copy(E),T.sub(I.multiplyScalar(I.dot(E))).normalize(),x.crossVectors(P,E);const D=x.dot(c[N])<0?-1:1;o.setXYZW(N,T.x,T.y,T.z,D)}for(let N=0,E=A.length;N<E;++N){const S=A[N],D=S.start,U=S.count;for(let B=D,Q=D+U;B<Q;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,c=new z,l=new z,u=new z,d=new z;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new jt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qd=new We,ji=new to,xo=new zn,Yd=new z,bo=new z,So=new z,Mo=new z,uc=new z,Eo=new z,jd=new z,To=new z;class cn extends _t{constructor(e=new Vn,t=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Eo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(uc.fromBufferAttribute(d,e),o?Eo.addScaledVector(uc,u):Eo.addScaledVector(uc.sub(t),u))}t.add(Eo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),ji.copy(e.ray).recast(e.near),!(xo.containsPoint(ji.origin)===!1&&(ji.intersectSphere(xo,Yd)===null||ji.origin.distanceToSquared(Yd)>(e.far-e.near)**2))&&(qd.copy(s).invert(),ji.copy(e.ray).applyMatrix4(qd),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],A=Math.max(m.start,f.start),T=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=A,I=T;x<I;x+=3){const P=a.getX(x),C=a.getX(x+1),N=a.getX(x+2);r=Ao(this,p,e,i,l,u,d,P,C,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const A=a.getX(m),T=a.getX(m+1),x=a.getX(m+2);r=Ao(this,o,e,i,l,u,d,A,T,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],A=Math.max(m.start,f.start),T=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=A,I=T;x<I;x+=3){const P=x,C=x+1,N=x+2;r=Ao(this,p,e,i,l,u,d,P,C,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const A=m,T=m+1,x=m+2;r=Ao(this,o,e,i,l,u,d,A,T,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function O0(n,e,t,i,r,s,o,a){let c;if(e.side===Qt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===ui,a),c===null)return null;To.copy(a),To.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(To);return l<t.near||l>t.far?null:{distance:l,point:To.clone(),object:n}}function Ao(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,bo),n.getVertexPosition(c,So),n.getVertexPosition(l,Mo);const u=O0(n,e,t,i,bo,So,Mo,jd);if(u){const d=new z;wn.getBarycoord(jd,bo,So,Mo,d),r&&(u.uv=wn.getInterpolatedAttribute(r,a,c,l,d,new Ze)),s&&(u.uv1=wn.getInterpolatedAttribute(s,a,c,l,d,new Ze)),o&&(u.normal=wn.getInterpolatedAttribute(o,a,c,l,d,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new z,materialIndex:0};wn.getNormal(bo,So,Mo,h.normal),u.face=h,u.barycoord=d}return u}class no extends Vn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new li(l,3)),this.setAttribute("normal",new li(u,3)),this.setAttribute("uv",new li(d,2));function g(_,m,p,A,T,x,I,P,C,N,E){const S=x/C,D=I/N,U=x/2,B=I/2,Q=P/2,ne=C+1,Z=N+1;let j=0,V=0;const pe=new z;for(let ve=0;ve<Z;ve++){const Re=ve*D-B;for(let Ie=0;Ie<ne;Ie++){const Je=Ie*S-U;pe[_]=Je*A,pe[m]=Re*T,pe[p]=Q,l.push(pe.x,pe.y,pe.z),pe[_]=0,pe[m]=0,pe[p]=P>0?1:-1,u.push(pe.x,pe.y,pe.z),d.push(Ie/C),d.push(1-ve/N),j+=1}}for(let ve=0;ve<N;ve++)for(let Re=0;Re<C;Re++){const Ie=h+Re+ne*ve,Je=h+Re+ne*(ve+1),re=h+(Re+1)+ne*(ve+1),fe=h+(Re+1)+ne*ve;c.push(Ie,Je,fe),c.push(Je,re,fe),V+=6}a.addGroup(f,V,E),f+=V,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=Qr(n[t]);for(const r in i)e[r]=i[r]}return e}function B0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const k0={clone:Qr,merge:Xt};var H0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H0,this.fragmentShader=z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=B0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gp extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new z,Kd=new Ze,$d=new Ze;class Zt extends Gp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Kd,$d),t.subVectors($d,Kd)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ds*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Tr=-90,Ar=1;class V0 extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(Tr,Ar,e,t);r.layers=this.layers,this.add(r);const s=new Zt(Tr,Ar,e,t);s.layers=this.layers,this.add(s);const o=new Zt(Tr,Ar,e,t);o.layers=this.layers,this.add(o);const a=new Zt(Tr,Ar,e,t);a.layers=this.layers,this.add(a);const c=new Zt(Tr,Ar,e,t);c.layers=this.layers,this.add(c);const l=new Zt(Tr,Ar,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Wp extends It{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Yr,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class G0 extends ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Wp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new no(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:Qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Li});s.uniforms.tEquirect.value=t;const o=new cn(r,s),a=t.minFilter;return t.minFilter===si&&(t.minFilter=an),new V0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class or extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W0={type:"move"};class dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(W0)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new or;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class X0 extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class q0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wl,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new z;class lu{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=An(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new lu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Zd=new z,Jd=new it,Qd=new it,Y0=new z,eh=new We,wo=new z,hc=new zn,th=new We,fc=new to;class j0 extends cn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wd,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,wo),this.boundingBox.expandByPoint(wo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,wo),this.boundingSphere.expandByPoint(wo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hc.copy(this.boundingSphere),hc.applyMatrix4(r),e.ray.intersectsSphere(hc)!==!1&&(th.copy(r).invert(),fc.copy(e.ray).applyMatrix4(th),!(this.boundingBox!==null&&fc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,fc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Jd.fromBufferAttribute(r.attributes.skinIndex,e),Qd.fromBufferAttribute(r.attributes.skinWeight,e),Zd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Qd.getComponent(s);if(o!==0){const a=Jd.getComponent(s);eh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Y0.copy(Zd).applyMatrix4(eh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Xp extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qp extends It{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Yt,u=Yt,d,h){super(null,o,a,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nh=new We,K0=new We;class uu{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new We;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:K0;nh.multiplyMatrices(a,t[s]),nh.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new uu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new qp(t,e,e,mn,Rn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Xp),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Rl extends jt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const wr=new We,ih=new We,Ro=[],rh=new fi,$0=new We,gs=new cn,_s=new zn;class Z0 extends cn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,$0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,wr),rh.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(rh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,wr),_s.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(_s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(i),e.ray.intersectsSphere(_s)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,wr),ih.multiplyMatrices(i,wr),gs.matrixWorld=ih,gs.raycast(e,Ro);for(let o=0,a=Ro.length;o<a;o++){const c=Ro[o];c.instanceId=s,c.object=this,t.push(c)}Ro.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new qp(new Float32Array(r*this.count),r,this.count,iu,Rn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const pc=new z,J0=new z,Q0=new qe;class er{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=pc.subVectors(i,t).cross(J0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(pc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Q0.getNormalMatrix(e),r=this.coplanarPoint(pc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new zn,Co=new z;class du{constructor(e=new er,t=new er,i=new er,r=new er,s=new er,o=new er){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],A=r[13],T=r[14],x=r[15];if(i[0].setComponents(c-s,h-l,m-f,x-p).normalize(),i[1].setComponents(c+s,h+l,m+f,x+p).normalize(),i[2].setComponents(c+o,h+u,m+g,x+A).normalize(),i[3].setComponents(c-o,h-u,m-g,x-A).normalize(),i[4].setComponents(c-a,h-d,m-_,x-T).normalize(),t===oi)i[5].setComponents(c+a,h+d,m+_,x+T).normalize();else if(t===sa)i[5].setComponents(a,d,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Co.x=r.normal.x>0?e.max.x:e.min.x,Co.y=r.normal.y>0?e.max.y:e.min.y,Co.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yp extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oa=new z,aa=new z,sh=new We,vs=new to,Po=new zn,mc=new z,oh=new z;class hu extends _t{constructor(e=new Vn,t=new Yp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)oa.fromBufferAttribute(t,r-1),aa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=oa.distanceTo(aa);e.setAttribute("lineDistance",new li(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),Po.radius+=s,e.ray.intersectsSphere(Po)===!1)return;sh.copy(r).invert(),vs.copy(e.ray).applyMatrix4(sh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),A=u.getX(_+1),T=Io(this,e,vs,c,p,A,_);T&&t.push(T)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Io(this,e,vs,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Io(this,e,vs,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Io(this,e,vs,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Io(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(oa.fromBufferAttribute(a,r),aa.fromBufferAttribute(a,s),t.distanceSqToSegment(oa,aa,mc,oh)>i)return;mc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(mc);if(!(l<e.near||l>e.far))return{distance:l,point:oh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const ah=new z,ch=new z;class ex extends hu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ah.fromBufferAttribute(t,r),ch.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ah.distanceTo(ch);e.setAttribute("lineDistance",new li(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tx extends hu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class jp extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lh=new We,Cl=new to,Lo=new zn,Do=new z;class nx extends _t{constructor(e=new Vn,t=new jp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(r),Lo.radius+=s,e.ray.intersectsSphere(Lo)===!1)return;lh.copy(r).invert(),Cl.copy(e.ray).applyMatrix4(lh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=h,_=f;g<_;g++){const m=l.getX(g);Do.fromBufferAttribute(d,m),uh(Do,m,c,r,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,_=f;g<_;g++)Do.fromBufferAttribute(d,g),uh(Do,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function uh(n,e,t,i,r,s,o){const a=Cl.distanceSqToPoint(n);if(a<t){const c=new z;Cl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Kp extends It{constructor(e,t,i,r,s,o,a,c,l,u=zr){if(u!==zr&&u!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zr&&(i=lr),i===void 0&&u===Zr&&(i=$r),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yt,this.minFilter=c!==void 0?c:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ea extends Vn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const A=p*h-o;for(let T=0;T<l;T++){const x=T*d-s;g.push(x,-A,0),_.push(0,0,1),m.push(T/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let A=0;A<a;A++){const T=A+l*p,x=A+l*(p+1),I=A+1+l*(p+1),P=A+1+l*p;f.push(T,x,P),f.push(x,I,P)}this.setIndex(f),this.setAttribute("position",new li(g,3)),this.setAttribute("normal",new li(_,3)),this.setAttribute("uv",new li(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.width,e.height,e.widthSegments,e.heightSegments)}}class fu extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Up,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gn extends fu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ix extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rx extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Uo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function sx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ox(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function dh(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r}function $p(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class io{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ax extends io{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rd,endingEnd:Rd}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cd:s=e,a=2*t-i;break;case Pd:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Cd:o=e,c=2*i-t;break;case Pd:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}const l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,A=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,T=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let I=0;I!==a;++I)s[I]=p*o[u+I]+A*o[l+I]+T*o[c+I]+x*o[d+I];return s}}class cx extends io{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}}class lx extends io{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Uo(t,this.TimeBufferType),this.values=Uo(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Uo(e.times,Array),values:Uo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new lx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ax(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case Xa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return Xa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&sx(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Xa,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{const d=a*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){const _=t[d+g];if(_!==t[h+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Ks;class rs extends Wn{constructor(e,t,i){super(e,t,i)}}rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=js;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Zp extends Wn{}Zp.prototype.ValueTypeName="color";class es extends Wn{}es.prototype.ValueTypeName="number";class ux extends io{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t);let l=e*a;for(let u=l+a;l!==u;l+=4)ki.slerpFlat(s,0,o,l-a,o,l,c);return s}}class ts extends Wn{InterpolantFactoryMethodLinear(e){return new ux(this.times,this.values,this.getValueSize(),e)}}ts.prototype.ValueTypeName="quaternion";ts.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends Wn{constructor(e,t,i){super(e,t,i)}}ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=js;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class ns extends Wn{}ns.prototype.ValueTypeName="vector";class dx{constructor(e="",t=-1,i=[],r=Vy){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(fx(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Wn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=ox(c);c=dh(c,1,u),l=dh(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new es(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const d=u[1];let h=r[d];h||(r[d]=h=[]),h.push(l)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,h,f,g,_){if(f.length!==0){const m=[],p=[];$p(f,m,p,g),m.length!==0&&_.push(new d(h,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const h=l[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)f[h[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let A=0;A!==h[g].morphTargets.length;++A){const T=h[g];m.push(T.time),p.push(T.morphTarget===_?1:0)}r.push(new es(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[d].name+"]";i(ns,f+".position",h,"pos",r),i(ts,f+".quaternion",h,"rot",r),i(ns,f+".scale",h,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function hx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return es;case"vector":case"vector2":case"vector3":case"vector4":return ns;case"color":return Zp;case"quaternion":return ts;case"bool":case"boolean":return rs;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function fx(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=hx(n.type);if(n.times===void 0){const t=[],i=[];$p(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Pi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class px{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const mx=new px;class os{constructor(e){this.manager=e!==void 0?e:mx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}os.DEFAULT_MATERIAL_NAME="__DEFAULT";const ei={};class gx extends Error{constructor(e,t){super(e),this.response=t}}class Jp extends os{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Pi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:i,onError:r});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ei[e],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){A();function A(){d.read().then(({done:T,value:x})=>{if(T)p.close();else{_+=x.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let P=0,C=u.length;P<C;P++){const N=u[P];N.onProgress&&N.onProgress(I)}p.enqueue(x),A()}},T=>{p.error(T)})}}});return new Response(m)}else throw new gx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Pi.add(e,l);const u=ei[e];delete ei[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=ei[e];if(u===void 0)throw this.manager.itemError(e),l;delete ei[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _x extends os{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=$s("img");function c(){u(),Pi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class vx extends os{constructor(e){super(e)}load(e,t,i,r){const s=new It,o=new _x(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ta extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const gc=new We,hh=new z,fh=new z;class pu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new du,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(hh),fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fh),t.updateMatrixWorld(),gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yx extends pu{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Jr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class xx extends Ta{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new yx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ph=new We,ys=new z,_c=new z;class bx extends pu{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ys.setFromMatrixPosition(e.matrixWorld),i.position.copy(ys),_c.copy(i.position),_c.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(_c),i.updateMatrixWorld(),r.makeTranslation(-ys.x,-ys.y,-ys.z),ph.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ph)}}class Sx extends Ta{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new bx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Aa extends Gp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Mx extends pu{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qp extends Ta{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Mx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ex extends Ta{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ns{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Tx extends os{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{r&&r(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Pi.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),Pi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Pi.add(e,c),s.manager.itemStart(e)}}class Ax extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const mu="\\[\\]\\.:\\/",wx=new RegExp("["+mu+"]","g"),gu="[^"+mu+"]",Rx="[^"+mu.replace("\\.","")+"]",Cx=/((?:WC+[\/:])*)/.source.replace("WC",gu),Px=/(WCOD+)?/.source.replace("WCOD",Rx),Ix=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gu),Lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gu),Dx=new RegExp("^"+Cx+Px+Ix+Lx+"$"),Ux=["material","materials","bones","map"];class Nx{constructor(e,t,i){const r=i||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ut{constructor(e,t,i){this.path=t,this.parsedPath=i||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,i):new ut(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wx,"")}static parseTrackName(e){const t=Dx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);Ux.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[r];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=Nx;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const mh=new We;class Fx{constructor(e,t,i=0,r=1/0){this.ray=new to(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new cu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mh),this}intersectObject(e,t=!0,i=[]){return Pl(e,this,i,t),i.sort(gh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Pl(e[r],this,i,t);return i.sort(gh),i}}function gh(n,e){return n.distance-e.distance}function Pl(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Pl(s[o],e,t,!0)}}function _h(n,e,t,i){const r=Ox(i);switch(t){case wp:return n*e;case Cp:return n*e;case Pp:return n*e*2;case iu:return n*e/r.components*r.byteLength;case ru:return n*e/r.components*r.byteLength;case Ip:return n*e*2/r.components*r.byteLength;case su:return n*e*2/r.components*r.byteLength;case Rp:return n*e*3/r.components*r.byteLength;case mn:return n*e*4/r.components*r.byteLength;case ou:return n*e*4/r.components*r.byteLength;case Go:case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xo:case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tl:case il:return Math.max(n,16)*Math.max(e,8)/4;case el:case nl:return Math.max(n,8)*Math.max(e,8)/2;case rl:case sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ll:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ul:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ml:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _l:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case yl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Yo:case bl:case Sl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Lp:case Ml:return Math.ceil(n/4)*Math.ceil(e/4)*8;case El:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ox(n){switch(n){case di:case Ep:return{byteLength:1,components:1};case Ys:case Tp:case eo:return{byteLength:2,components:1};case tu:case nu:return{byteLength:2,components:4};case lr:case eu:case Rn:return{byteLength:4,components:1};case Ap:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ql);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function em(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Bx(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ub=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,db=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mb="gl_FragColor = linearToOutputTexel( gl_FragColor );",gb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_b=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ab=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ib=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Db=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ub=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ob=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$b=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_S=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,SS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,MS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ES=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:kx,alphahash_pars_fragment:Hx,alphamap_fragment:zx,alphamap_pars_fragment:Vx,alphatest_fragment:Gx,alphatest_pars_fragment:Wx,aomap_fragment:Xx,aomap_pars_fragment:qx,batching_pars_vertex:Yx,batching_vertex:jx,begin_vertex:Kx,beginnormal_vertex:$x,bsdfs:Zx,iridescence_fragment:Jx,bumpmap_pars_fragment:Qx,clipping_planes_fragment:eb,clipping_planes_pars_fragment:tb,clipping_planes_pars_vertex:nb,clipping_planes_vertex:ib,color_fragment:rb,color_pars_fragment:sb,color_pars_vertex:ob,color_vertex:ab,common:cb,cube_uv_reflection_fragment:lb,defaultnormal_vertex:ub,displacementmap_pars_vertex:db,displacementmap_vertex:hb,emissivemap_fragment:fb,emissivemap_pars_fragment:pb,colorspace_fragment:mb,colorspace_pars_fragment:gb,envmap_fragment:_b,envmap_common_pars_fragment:vb,envmap_pars_fragment:yb,envmap_pars_vertex:xb,envmap_physical_pars_fragment:Ib,envmap_vertex:bb,fog_vertex:Sb,fog_pars_vertex:Mb,fog_fragment:Eb,fog_pars_fragment:Tb,gradientmap_pars_fragment:Ab,lightmap_pars_fragment:wb,lights_lambert_fragment:Rb,lights_lambert_pars_fragment:Cb,lights_pars_begin:Pb,lights_toon_fragment:Lb,lights_toon_pars_fragment:Db,lights_phong_fragment:Ub,lights_phong_pars_fragment:Nb,lights_physical_fragment:Fb,lights_physical_pars_fragment:Ob,lights_fragment_begin:Bb,lights_fragment_maps:kb,lights_fragment_end:Hb,logdepthbuf_fragment:zb,logdepthbuf_pars_fragment:Vb,logdepthbuf_pars_vertex:Gb,logdepthbuf_vertex:Wb,map_fragment:Xb,map_pars_fragment:qb,map_particle_fragment:Yb,map_particle_pars_fragment:jb,metalnessmap_fragment:Kb,metalnessmap_pars_fragment:$b,morphinstance_vertex:Zb,morphcolor_vertex:Jb,morphnormal_vertex:Qb,morphtarget_pars_vertex:eS,morphtarget_vertex:tS,normal_fragment_begin:nS,normal_fragment_maps:iS,normal_pars_fragment:rS,normal_pars_vertex:sS,normal_vertex:oS,normalmap_pars_fragment:aS,clearcoat_normal_fragment_begin:cS,clearcoat_normal_fragment_maps:lS,clearcoat_pars_fragment:uS,iridescence_pars_fragment:dS,opaque_fragment:hS,packing:fS,premultiplied_alpha_fragment:pS,project_vertex:mS,dithering_fragment:gS,dithering_pars_fragment:_S,roughnessmap_fragment:vS,roughnessmap_pars_fragment:yS,shadowmap_pars_fragment:xS,shadowmap_pars_vertex:bS,shadowmap_vertex:SS,shadowmask_pars_fragment:MS,skinbase_vertex:ES,skinning_pars_vertex:TS,skinning_vertex:AS,skinnormal_vertex:wS,specularmap_fragment:RS,specularmap_pars_fragment:CS,tonemapping_fragment:PS,tonemapping_pars_fragment:IS,transmission_fragment:LS,transmission_pars_fragment:DS,uv_pars_fragment:US,uv_pars_vertex:NS,uv_vertex:FS,worldpos_vertex:OS,background_vert:BS,background_frag:kS,backgroundCube_vert:HS,backgroundCube_frag:zS,cube_vert:VS,cube_frag:GS,depth_vert:WS,depth_frag:XS,distanceRGBA_vert:qS,distanceRGBA_frag:YS,equirect_vert:jS,equirect_frag:KS,linedashed_vert:$S,linedashed_frag:ZS,meshbasic_vert:JS,meshbasic_frag:QS,meshlambert_vert:eM,meshlambert_frag:tM,meshmatcap_vert:nM,meshmatcap_frag:iM,meshnormal_vert:rM,meshnormal_frag:sM,meshphong_vert:oM,meshphong_frag:aM,meshphysical_vert:cM,meshphysical_frag:lM,meshtoon_vert:uM,meshtoon_frag:dM,points_vert:hM,points_frag:fM,shadow_vert:pM,shadow_frag:mM,sprite_vert:gM,sprite_frag:_M},ye={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Fn={basic:{uniforms:Xt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Xt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Xt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Xt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Xt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Xt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Xt([ye.points,ye.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Xt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Xt([ye.common,ye.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Xt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Xt([ye.sprite,ye.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Xt([ye.common,ye.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Xt([ye.lights,ye.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Fn.physical={uniforms:Xt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const No={r:0,b:0,g:0},$i=new Hn,vM=new We;function yM(n,e,t,i,r,s,o){const a=new Ge(0);let c=s===!0?0:1,l,u,d=null,h=0,f=null;function g(T){let x=T.isScene===!0?T.background:null;return x&&x.isTexture&&(x=(T.backgroundBlurriness>0?t:e).get(x)),x}function _(T){let x=!1;const I=g(T);I===null?p(a,c):I&&I.isColor&&(p(I,1),x=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,x){const I=g(x);I&&(I.isCubeTexture||I.mapping===Ma)?(u===void 0&&(u=new cn(new no(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:Qr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),$i.copy(x.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vM.makeRotationFromEuler($i)),u.material.toneMapped=Qe.getTransfer(I.colorSpace)!==dt,(d!==I||h!==I.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=I,h=I.version,f=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new cn(new Ea(2,2),new Ni({name:"BackgroundMaterial",uniforms:Qr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(I.colorSpace)!==dt,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||h!==I.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=I,h=I.version,f=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,x){T.getRGB(No,Vp(n)),i.buffers.color.setClear(No.r,No.g,No.b,x,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,x=1){a.set(T),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:_,addToRenderList:m,dispose:A}}function xM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,D,U,B,Q){let ne=!1;const Z=d(B,U,D);s!==Z&&(s=Z,l(s.object)),ne=f(S,B,U,Q),ne&&g(S,B,U,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,x(S,D,U,B),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,D,U){const B=U.wireframe===!0;let Q=i[S.id];Q===void 0&&(Q={},i[S.id]=Q);let ne=Q[D.id];ne===void 0&&(ne={},Q[D.id]=ne);let Z=ne[B];return Z===void 0&&(Z=h(c()),ne[B]=Z),Z}function h(S){const D=[],U=[],B=[];for(let Q=0;Q<t;Q++)D[Q]=0,U[Q]=0,B[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,D,U,B){const Q=s.attributes,ne=D.attributes;let Z=0;const j=U.getAttributes();for(const V in j)if(j[V].location>=0){const ve=Q[V];let Re=ne[V];if(Re===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Re=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Re=S.instanceColor)),ve===void 0||ve.attribute!==Re||Re&&ve.data!==Re.data)return!0;Z++}return s.attributesNum!==Z||s.index!==B}function g(S,D,U,B){const Q={},ne=D.attributes;let Z=0;const j=U.getAttributes();for(const V in j)if(j[V].location>=0){let ve=ne[V];ve===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor));const Re={};Re.attribute=ve,ve&&ve.data&&(Re.data=ve.data),Q[V]=Re,Z++}s.attributes=Q,s.attributesNum=Z,s.index=B}function _(){const S=s.newAttributes;for(let D=0,U=S.length;D<U;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const U=s.newAttributes,B=s.enabledAttributes,Q=s.attributeDivisors;U[S]=1,B[S]===0&&(n.enableVertexAttribArray(S),B[S]=1),Q[S]!==D&&(n.vertexAttribDivisor(S,D),Q[S]=D)}function A(){const S=s.newAttributes,D=s.enabledAttributes;for(let U=0,B=D.length;U<B;U++)D[U]!==S[U]&&(n.disableVertexAttribArray(U),D[U]=0)}function T(S,D,U,B,Q,ne,Z){Z===!0?n.vertexAttribIPointer(S,D,U,Q,ne):n.vertexAttribPointer(S,D,U,B,Q,ne)}function x(S,D,U,B){_();const Q=B.attributes,ne=U.getAttributes(),Z=D.defaultAttributeValues;for(const j in ne){const V=ne[j];if(V.location>=0){let pe=Q[j];if(pe===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),pe!==void 0){const ve=pe.normalized,Re=pe.itemSize,Ie=e.get(pe);if(Ie===void 0)continue;const Je=Ie.buffer,re=Ie.type,fe=Ie.bytesPerElement,be=re===n.INT||re===n.UNSIGNED_INT||pe.gpuType===eu;if(pe.isInterleavedBufferAttribute){const F=pe.data,se=F.stride,ae=pe.offset;if(F.isInstancedInterleavedBuffer){for(let ce=0;ce<V.locationSize;ce++)p(V.location+ce,F.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ce=0;ce<V.locationSize;ce++)m(V.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let ce=0;ce<V.locationSize;ce++)T(V.location+ce,Re/V.locationSize,re,ve,se*fe,(ae+Re/V.locationSize*ce)*fe,be)}else{if(pe.isInstancedBufferAttribute){for(let F=0;F<V.locationSize;F++)p(V.location+F,pe.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let F=0;F<V.locationSize;F++)m(V.location+F);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let F=0;F<V.locationSize;F++)T(V.location+F,Re/V.locationSize,re,ve,Re*fe,Re/V.locationSize*F*fe,be)}}else if(Z!==void 0){const ve=Z[j];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(V.location,ve);break;case 3:n.vertexAttrib3fv(V.location,ve);break;case 4:n.vertexAttrib4fv(V.location,ve);break;default:n.vertexAttrib1fv(V.location,ve)}}}}A()}function I(){N();for(const S in i){const D=i[S];for(const U in D){const B=D[U];for(const Q in B)u(B[Q].object),delete B[Q];delete D[U]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const U in D){const B=D[U];for(const Q in B)u(B[Q].object),delete B[Q];delete D[U]}delete i[S.id]}function C(S){for(const D in i){const U=i[D];if(U[S.id]===void 0)continue;const B=U[S.id];for(const Q in B)u(B[Q].object),delete B[Q];delete U[S.id]}}function N(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function bM(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function c(l,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function SM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==mn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const N=C===eo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==di&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Rn&&!N)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:I,maxSamples:P}}function MM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new er,a=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const A=s?0:i,T=A*4;let x=p.clippingState||null;c.value=x,x=u(g,h,T,f);for(let I=0;I!==T;++I)x[I]=t[I];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,x=f;T!==_;++T,x+=4)o.copy(d[T]).applyMatrix4(A,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function EM(n){let e=new WeakMap;function t(o,a){return a===Jc?o.mapping=Yr:a===Qc&&(o.mapping=jr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jc||a===Qc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new G0(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Lr=4,vh=[.125,.215,.35,.446,.526,.582],rr=20,vc=new Aa,yh=new Ge;let yc=null,xc=0,bc=0,Sc=!1;const tr=(1+Math.sqrt(5))/2,Rr=1/tr,xh=[new z(-tr,Rr,0),new z(tr,Rr,0),new z(-Rr,0,tr),new z(Rr,0,tr),new z(0,tr,-Rr),new z(0,tr,Rr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class bh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){yc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yc,xc,bc),this._renderer.xr.enabled=Sc,e.scissorTest=!1,Fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:eo,format:mn,colorSpace:Kt,depthBuffer:!1},r=Sh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TM(s)),this._blurMaterial=AM(s,e,t)}return r}_compileMaterial(e){const t=new cn(this._lodPlanes[0],e);this._renderer.compile(t,vc)}_sceneToCubeUV(e,t,i,r){const a=new Zt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(yh),u.toneMapping=Di,u.autoClear=!1;const f=new sr({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new cn(new no,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(yh),_=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):A===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const T=this._cubeSize;Fo(r,A*T,p>2?T:0,T,T),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Yr||e.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new cn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Fo(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,vc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xh[(r-s-1)%xh.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new cn(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*rr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):rr;m>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rr}`);const p=[];let A=0;for(let C=0;C<rr;++C){const N=C/_,E=Math.exp(-N*N/2);p.push(E),C===0?A+=E:C<m&&(A+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=g,h.mipInt.value=T-i;const x=this._sizeLods[r],I=3*x*(r>T-Lr?r-T+Lr:0),P=4*(this._cubeSize-x);Fo(t,I,P,3*x,2*x),c.setRenderTarget(t),c.render(d,vc)}}function TM(n){const e=[],t=[],i=[];let r=n;const s=n-Lr+1+vh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Lr?c=vh[o-n+Lr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,A=new Float32Array(_*g*f),T=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let P=0;P<f;P++){const C=P%3*2/3-1,N=P>2?0:-1,E=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];A.set(E,_*g*P),T.set(h,m*g*P);const S=[P,P,P,P,P,P];x.set(S,p*g*P)}const I=new Vn;I.setAttribute("position",new jt(A,_)),I.setAttribute("uv",new jt(T,m)),I.setAttribute("faceIndex",new jt(x,p)),e.push(I),r>Lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Sh(n,e,t){const i=new ur(n,e,t);return i.texture.mapping=Ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function AM(n,e,t){const i=new Float32Array(rr),r=new z(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Mh(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Eh(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function _u(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Jc||c===Qc,u=c===Yr||c===jr;if(l||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new bh(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new bh(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function RM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ir("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function CM(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const A=f.array;_=f.version;for(let T=0,x=A.length;T<x;T+=3){const I=A[T+0],P=A[T+1],C=A[T+2];h.push(I,P,P,C,C,I)}}else if(g!==void 0){const A=g.array;_=g.version;for(let T=0,x=A.length/3-1;T<x;T+=3){const I=T+0,P=T+1,C=T+2;h.push(I,P,P,C,C,I)}}else return;const m=new(Fp(h)?zp:Hp)(h,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function PM(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function l(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,h*o,g),t.update(f,i,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(h,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,_,0,g);let p=0;for(let A=0;A<g;A++)p+=f[A]*_[A];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function IM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function LM(n,e,t){const i=new WeakMap,r=new it;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var f=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let I=a.attributes.position.count*x,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const C=new Float32Array(I*P*4*d),N=new Bp(C,I,P,d);N.type=Rn,N.needsUpdate=!0;const E=x*4;for(let D=0;D<d;D++){const U=p[D],B=A[D],Q=T[D],ne=I*P*4*D;for(let Z=0;Z<U.count;Z++){const j=Z*E;g===!0&&(r.fromBufferAttribute(U,Z),C[ne+j+0]=r.x,C[ne+j+1]=r.y,C[ne+j+2]=r.z,C[ne+j+3]=0),_===!0&&(r.fromBufferAttribute(B,Z),C[ne+j+4]=r.x,C[ne+j+5]=r.y,C[ne+j+6]=r.z,C[ne+j+7]=0),m===!0&&(r.fromBufferAttribute(Q,Z),C[ne+j+8]=r.x,C[ne+j+9]=r.y,C[ne+j+10]=r.z,C[ne+j+11]=Q.itemSize===4?r.w:1)}}h={count:d,texture:N,size:new Ze(I,P)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function DM(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const tm=new It,Th=new Kp(1,1),nm=new Bp,im=new A0,rm=new Wp,Ah=[],wh=[],Rh=new Float32Array(16),Ch=new Float32Array(9),Ph=new Float32Array(4);function as(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ah[r];if(s===void 0&&(s=new Float32Array(r),Ah[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wa(n,e){let t=wh[e];t===void 0&&(t=new Int32Array(e),wh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function UM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function NM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function FM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function OM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function BM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;Ph.set(i),n.uniformMatrix2fv(this.addr,!1,Ph),Rt(t,i)}}function kM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;Ch.set(i),n.uniformMatrix3fv(this.addr,!1,Ch),Rt(t,i)}}function HM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;Rh.set(i),n.uniformMatrix4fv(this.addr,!1,Rh),Rt(t,i)}}function zM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function VM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function GM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function WM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function XM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function YM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function jM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function KM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Th.compareFunction=Np,s=Th):s=tm,t.setTexture2D(e||s,r)}function $M(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||im,r)}function ZM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rm,r)}function JM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||nm,r)}function QM(n){switch(n){case 5126:return UM;case 35664:return NM;case 35665:return FM;case 35666:return OM;case 35674:return BM;case 35675:return kM;case 35676:return HM;case 5124:case 35670:return zM;case 35667:case 35671:return VM;case 35668:case 35672:return GM;case 35669:case 35673:return WM;case 5125:return XM;case 36294:return qM;case 36295:return YM;case 36296:return jM;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}function eE(n,e){n.uniform1fv(this.addr,e)}function tE(n,e){const t=as(e,this.size,2);n.uniform2fv(this.addr,t)}function nE(n,e){const t=as(e,this.size,3);n.uniform3fv(this.addr,t)}function iE(n,e){const t=as(e,this.size,4);n.uniform4fv(this.addr,t)}function rE(n,e){const t=as(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function sE(n,e){const t=as(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function oE(n,e){const t=as(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function aE(n,e){n.uniform1iv(this.addr,e)}function cE(n,e){n.uniform2iv(this.addr,e)}function lE(n,e){n.uniform3iv(this.addr,e)}function uE(n,e){n.uniform4iv(this.addr,e)}function dE(n,e){n.uniform1uiv(this.addr,e)}function hE(n,e){n.uniform2uiv(this.addr,e)}function fE(n,e){n.uniform3uiv(this.addr,e)}function pE(n,e){n.uniform4uiv(this.addr,e)}function mE(n,e,t){const i=this.cache,r=e.length,s=wa(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||tm,s[o])}function gE(n,e,t){const i=this.cache,r=e.length,s=wa(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||im,s[o])}function _E(n,e,t){const i=this.cache,r=e.length,s=wa(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||rm,s[o])}function vE(n,e,t){const i=this.cache,r=e.length,s=wa(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||nm,s[o])}function yE(n){switch(n){case 5126:return eE;case 35664:return tE;case 35665:return nE;case 35666:return iE;case 35674:return rE;case 35675:return sE;case 35676:return oE;case 5124:case 35670:return aE;case 35667:case 35671:return cE;case 35668:case 35672:return lE;case 35669:case 35673:return uE;case 5125:return dE;case 36294:return hE;case 36295:return fE;case 36296:return pE;case 35678:case 36198:case 36298:case 36306:case 35682:return mE;case 35679:case 36299:case 36307:return gE;case 35680:case 36300:case 36308:case 36293:return _E;case 36289:case 36303:case 36311:case 36292:return vE}}class xE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=QM(t.type)}}class bE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yE(t.type)}}class SE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Mc=/(\w+)(\])?(\[|\.)?/g;function Ih(n,e){n.seq.push(e),n.map[e.id]=e}function ME(n,e,t){const i=n.name,r=i.length;for(Mc.lastIndex=0;;){const s=Mc.exec(i),o=Mc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Ih(t,l===void 0?new xE(a,n,e):new bE(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new SE(a),Ih(t,d)),t=d}}}class jo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ME(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Lh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const EE=37297;let TE=0;function AE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Dh=new qe;function wE(n){Qe._getMatrix(Dh,Qe.workingColorSpace,n);const e=`mat3( ${Dh.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case ra:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Uh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+AE(n.getShaderSource(e),o)}else return r}function RE(n,e){const t=wE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function CE(n,e){let t;switch(e){case Ny:t="Linear";break;case Fy:t="Reinhard";break;case Oy:t="Cineon";break;case bp:t="ACESFilmic";break;case ky:t="AgX";break;case Hy:t="Neutral";break;case By:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oo=new z;function PE(){Qe.getLuminanceCoefficients(Oo);const n=Oo.x.toFixed(4),e=Oo.y.toFixed(4),t=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function LE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function DE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ms(n){return n!==""}function Nh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(n){return n.replace(UE,FE)}const NE=new Map;function FE(n,e){let t=Ye[e];if(t===void 0){const i=NE.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Il(t)}const OE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(n){return n.replace(OE,BE)}function BE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===py?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function HE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yr:case jr:e="ENVMAP_TYPE_CUBE";break;case Ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function VE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xp:e="ENVMAP_BLENDING_MULTIPLY";break;case Dy:e="ENVMAP_BLENDING_MIX";break;case Uy:e="ENVMAP_BLENDING_ADD";break}return e}function GE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function WE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=kE(t),l=HE(t),u=zE(t),d=VE(t),h=GE(t),f=IE(t),g=LE(s),_=r.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ms).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ms).join(`
`),p.length>0&&(p+=`
`)):(m=[Bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),p=[Bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Di?CE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,RE("linearToOutputTexel",t.outputColorSpace),PE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),o=Il(o),o=Nh(o,t),o=Fh(o,t),a=Il(a),a=Nh(a,t),a=Fh(a,t),o=Oh(o),a=Oh(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=A+m+o,x=A+p+a,I=Lh(r,r.VERTEX_SHADER,T),P=Lh(r,r.FRAGMENT_SHADER,x);r.attachShader(_,I),r.attachShader(_,P),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(D){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(I).trim(),Q=r.getShaderInfoLog(P).trim();let ne=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,I,P);else{const j=Uh(r,I,"vertex"),V=Uh(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+j+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(B===""||Q==="")&&(Z=!1);Z&&(D.diagnostics={runnable:ne,programLog:U,vertexShader:{log:B,prefix:m},fragmentShader:{log:Q,prefix:p}})}r.deleteShader(I),r.deleteShader(P),N=new jo(r,_),E=DE(r,_)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,EE)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=TE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=P,this}let XE=0;class qE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new YE(e),t.set(e,i)),i}}class YE{constructor(e){this.id=XE++,this.code=e,this.usedTimes=0}}function jE(n,e,t,i,r,s,o){const a=new cu,c=new qE,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,S,D,U,B){const Q=U.fog,ne=B.geometry,Z=E.isMeshStandardMaterial?U.environment:null,j=(E.isMeshStandardMaterial?t:e).get(E.envMap||Z),V=j&&j.mapping===Ma?j.image.height:null,pe=g[E.type];E.precision!==null&&(f=r.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ve=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Re=ve!==void 0?ve.length:0;let Ie=0;ne.morphAttributes.position!==void 0&&(Ie=1),ne.morphAttributes.normal!==void 0&&(Ie=2),ne.morphAttributes.color!==void 0&&(Ie=3);let Je,re,fe,be;if(pe){const ct=Fn[pe];Je=ct.vertexShader,re=ct.fragmentShader}else Je=E.vertexShader,re=E.fragmentShader,c.update(E),fe=c.getVertexShaderID(E),be=c.getFragmentShaderID(E);const F=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),ae=B.isInstancedMesh===!0,ce=B.isBatchedMesh===!0,Ue=!!E.map,w=!!E.matcap,R=!!j,y=!!E.aoMap,ie=!!E.lightMap,$=!!E.bumpMap,q=!!E.normalMap,ee=!!E.displacementMap,le=!!E.emissiveMap,J=!!E.metalnessMap,b=!!E.roughnessMap,v=E.anisotropy>0,L=E.clearcoat>0,G=E.dispersion>0,Y=E.iridescence>0,W=E.sheen>0,me=E.transmission>0,ue=v&&!!E.anisotropyMap,ge=L&&!!E.clearcoatMap,Ne=L&&!!E.clearcoatNormalMap,de=L&&!!E.clearcoatRoughnessMap,xe=Y&&!!E.iridescenceMap,Pe=Y&&!!E.iridescenceThicknessMap,Fe=W&&!!E.sheenColorMap,_e=W&&!!E.sheenRoughnessMap,Be=!!E.specularMap,ze=!!E.specularColorMap,ht=!!E.specularIntensityMap,O=me&&!!E.transmissionMap,Se=me&&!!E.thicknessMap,te=!!E.gradientMap,oe=!!E.alphaMap,Ae=E.alphaTest>0,Ee=!!E.alphaHash,Xe=!!E.extensions;let vt=Di;E.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(vt=n.toneMapping);const Nt={shaderID:pe,shaderType:E.type,shaderName:E.name,vertexShader:Je,fragmentShader:re,defines:E.defines,customVertexShaderID:fe,customFragmentShaderID:be,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:ce,batchingColor:ce&&B._colorsTexture!==null,instancing:ae,instancingColor:ae&&B.instanceColor!==null,instancingMorph:ae&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Kt,alphaToCoverage:!!E.alphaToCoverage,map:Ue,matcap:w,envMap:R,envMapMode:R&&j.mapping,envMapCubeUVHeight:V,aoMap:y,lightMap:ie,bumpMap:$,normalMap:q,displacementMap:h&&ee,emissiveMap:le,normalMapObjectSpace:q&&E.normalMapType===qy,normalMapTangentSpace:q&&E.normalMapType===Up,metalnessMap:J,roughnessMap:b,anisotropy:v,anisotropyMap:ue,clearcoat:L,clearcoatMap:ge,clearcoatNormalMap:Ne,clearcoatRoughnessMap:de,dispersion:G,iridescence:Y,iridescenceMap:xe,iridescenceThicknessMap:Pe,sheen:W,sheenColorMap:Fe,sheenRoughnessMap:_e,specularMap:Be,specularColorMap:ze,specularIntensityMap:ht,transmission:me,transmissionMap:O,thicknessMap:Se,gradientMap:te,opaque:E.transparent===!1&&E.blending===Hr&&E.alphaToCoverage===!1,alphaMap:oe,alphaTest:Ae,alphaHash:Ee,combine:E.combine,mapUv:Ue&&_(E.map.channel),aoMapUv:y&&_(E.aoMap.channel),lightMapUv:ie&&_(E.lightMap.channel),bumpMapUv:$&&_(E.bumpMap.channel),normalMapUv:q&&_(E.normalMap.channel),displacementMapUv:ee&&_(E.displacementMap.channel),emissiveMapUv:le&&_(E.emissiveMap.channel),metalnessMapUv:J&&_(E.metalnessMap.channel),roughnessMapUv:b&&_(E.roughnessMap.channel),anisotropyMapUv:ue&&_(E.anisotropyMap.channel),clearcoatMapUv:ge&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(E.sheenRoughnessMap.channel),specularMapUv:Be&&_(E.specularMap.channel),specularColorMapUv:ze&&_(E.specularColorMap.channel),specularIntensityMapUv:ht&&_(E.specularIntensityMap.channel),transmissionMapUv:O&&_(E.transmissionMap.channel),thicknessMapUv:Se&&_(E.thicknessMap.channel),alphaMapUv:oe&&_(E.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(q||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!ne.attributes.uv&&(Ue||oe),fog:!!Q,useFog:E.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:se,skinning:B.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:Ue&&E.map.isVideoTexture===!0&&Qe.getTransfer(E.map.colorSpace)===dt,decodeVideoTextureEmissive:le&&E.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(E.emissiveMap.colorSpace)===dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===On,flipSided:E.side===Qt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Xe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&E.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)S.push(D),S.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(A(S,E),T(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function A(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function T(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const S=g[E.type];let D;if(S){const U=Fn[S];D=k0.clone(U.uniforms)}else D=E.uniforms;return D}function I(E,S){let D;for(let U=0,B=u.length;U<B;U++){const Q=u[U];if(Q.cacheKey===S){D=Q,++D.usedTimes;break}}return D===void 0&&(D=new WE(n,S,E,s),u.push(D)),D}function P(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function C(E){c.remove(E)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:P,releaseShaderCache:C,programs:u,dispose:N}}function KE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function $E(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,f,g,_,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,h,f,g,_,m){const p=o(d,h,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(d,h,f,g,_,m){const p=o(d,h,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,h){t.length>1&&t.sort(d||$E),i.length>1&&i.sort(h||kh),r.length>1&&r.sort(h||kh)}function u(){for(let d=e,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function ZE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Hh,n.set(i,[o])):r>=s.length?(o=new Hh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function JE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ge};break;case"SpotLight":t={position:new z,direction:new z,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function QE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let eT=0;function tT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function nT(n){const e=new JE,t=QE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);const r=new z,s=new We,o=new We;function a(l){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,A=0,T=0,x=0,I=0,P=0,C=0;l.sort(tT);for(let E=0,S=l.length;E<S;E++){const D=l[E],U=D.color,B=D.intensity,Q=D.distance,ne=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=U.r*B,d+=U.g*B,h+=U.b*B;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],B);C++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,V=t.get(D);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=ne,i.directionalShadowMatrix[f]=D.shadow.matrix,A++}i.directional[f]=Z,f++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(U).multiplyScalar(B),Z.distance=Q,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[_]=Z;const j=D.shadow;if(D.map&&(i.spotLightMap[I]=D.map,I++,j.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[_]=j.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=ne,x++}_++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(U).multiplyScalar(B),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=Z,m++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const j=D.shadow,V=t.get(D);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=D.shadow.matrix,T++}i.point[g]=Z,g++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(B),Z.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[p]=Z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==A||N.numPointShadows!==T||N.numSpotShadows!==x||N.numSpotMaps!==I||N.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=x+I-P,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,N.directionalLength=f,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=A,N.numPointShadows=T,N.numSpotShadows=x,N.numSpotMaps=I,N.numLightProbes=C,i.version=eT++)}function c(l,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,A=l.length;p<A;p++){const T=l[p];if(T.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(T.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function zh(n){const e=new nT(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function iT(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new zh(n),e.set(r,[a])):s>=o.length?(a=new zh(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const rT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function oT(n,e,t){let i=new du;const r=new Ze,s=new Ze,o=new it,a=new ix({depthPacking:Xy}),c=new rx,l={},u=t.maxTextureSize,d={[ui]:Qt,[Qt]:ui,[On]:On},h=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:rT,fragmentShader:sT}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Vn;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new cn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yp;let p=this.type;this.render=function(P,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Li),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=p!==ti&&this.type===ti,Q=p===ti&&this.type!==ti;for(let ne=0,Z=P.length;ne<Z;ne++){const j=P[ne],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const pe=V.getFrameExtents();if(r.multiply(pe),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,V.mapSize.y=s.y)),V.map===null||B===!0||Q===!0){const Re=this.type!==ti?{minFilter:Yt,magFilter:Yt}:{};V.map!==null&&V.map.dispose(),V.map=new ur(r.x,r.y,Re),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ve=V.getViewportCount();for(let Re=0;Re<ve;Re++){const Ie=V.getViewport(Re);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),U.viewport(o),V.updateMatrices(j,Re),i=V.getFrustum(),x(C,N,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===ti&&A(V,N),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,D)};function A(P,C){const N=e.update(_);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ur(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(C,null,N,h,_,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(C,null,N,f,_,null)}function T(P,C,N,E){let S=null;const D=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)S=D;else if(S=N.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const U=S.uuid,B=C.uuid;let Q=l[U];Q===void 0&&(Q={},l[U]=Q);let ne=Q[B];ne===void 0&&(ne=S.clone(),Q[B]=ne,C.addEventListener("dispose",I)),S=ne}if(S.visible=C.visible,S.wireframe=C.wireframe,E===ti?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:d[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=n.properties.get(S);U.light=N}return S}function x(P,C,N,E,S){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===ti)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const B=e.update(P),Q=P.material;if(Array.isArray(Q)){const ne=B.groups;for(let Z=0,j=ne.length;Z<j;Z++){const V=ne[Z],pe=Q[V.materialIndex];if(pe&&pe.visible){const ve=T(P,pe,E,S);P.onBeforeShadow(n,P,C,N,B,ve,V),n.renderBufferDirect(N,null,B,ve,P,V),P.onAfterShadow(n,P,C,N,B,ve,V)}}}else if(Q.visible){const ne=T(P,Q,E,S);P.onBeforeShadow(n,P,C,N,B,ne,null),n.renderBufferDirect(N,null,B,ne,P,null),P.onAfterShadow(n,P,C,N,B,ne,null)}}const U=P.children;for(let B=0,Q=U.length;B<Q;B++)x(U[B],C,N,E,S)}function I(P){P.target.removeEventListener("dispose",I);for(const N in l){const E=l[N],S=P.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const aT={[Xc]:qc,[Yc]:$c,[jc]:Zc,[qr]:Kc,[qc]:Xc,[$c]:Yc,[Zc]:jc,[Kc]:qr};function cT(n,e){function t(){let O=!1;const Se=new it;let te=null;const oe=new it(0,0,0,0);return{setMask:function(Ae){te!==Ae&&!O&&(n.colorMask(Ae,Ae,Ae,Ae),te=Ae)},setLocked:function(Ae){O=Ae},setClear:function(Ae,Ee,Xe,vt,Nt){Nt===!0&&(Ae*=vt,Ee*=vt,Xe*=vt),Se.set(Ae,Ee,Xe,vt),oe.equals(Se)===!1&&(n.clearColor(Ae,Ee,Xe,vt),oe.copy(Se))},reset:function(){O=!1,te=null,oe.set(-1,0,0,0)}}}function i(){let O=!1,Se=!1,te=null,oe=null,Ae=null;return{setReversed:function(Ee){if(Se!==Ee){const Xe=e.get("EXT_clip_control");Se?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);const vt=Ae;Ae=null,this.setClear(vt)}Se=Ee},getReversed:function(){return Se},setTest:function(Ee){Ee?F(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(Ee){te!==Ee&&!O&&(n.depthMask(Ee),te=Ee)},setFunc:function(Ee){if(Se&&(Ee=aT[Ee]),oe!==Ee){switch(Ee){case Xc:n.depthFunc(n.NEVER);break;case qc:n.depthFunc(n.ALWAYS);break;case Yc:n.depthFunc(n.LESS);break;case qr:n.depthFunc(n.LEQUAL);break;case jc:n.depthFunc(n.EQUAL);break;case Kc:n.depthFunc(n.GEQUAL);break;case $c:n.depthFunc(n.GREATER);break;case Zc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Ee}},setLocked:function(Ee){O=Ee},setClear:function(Ee){Ae!==Ee&&(Se&&(Ee=1-Ee),n.clearDepth(Ee),Ae=Ee)},reset:function(){O=!1,te=null,oe=null,Ae=null,Se=!1}}}function r(){let O=!1,Se=null,te=null,oe=null,Ae=null,Ee=null,Xe=null,vt=null,Nt=null;return{setTest:function(ct){O||(ct?F(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(ct){Se!==ct&&!O&&(n.stencilMask(ct),Se=ct)},setFunc:function(ct,yn,Xn){(te!==ct||oe!==yn||Ae!==Xn)&&(n.stencilFunc(ct,yn,Xn),te=ct,oe=yn,Ae=Xn)},setOp:function(ct,yn,Xn){(Ee!==ct||Xe!==yn||vt!==Xn)&&(n.stencilOp(ct,yn,Xn),Ee=ct,Xe=yn,vt=Xn)},setLocked:function(ct){O=ct},setClear:function(ct){Nt!==ct&&(n.clearStencil(ct),Nt=ct)},reset:function(){O=!1,Se=null,te=null,oe=null,Ae=null,Ee=null,Xe=null,vt=null,Nt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,A=null,T=null,x=null,I=null,P=null,C=new Ge(0,0,0),N=0,E=!1,S=null,D=null,U=null,B=null,Q=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,j=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),Z=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Z=j>=2);let pe=null,ve={};const Re=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),Je=new it().fromArray(Re),re=new it().fromArray(Ie);function fe(O,Se,te,oe){const Ae=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(O,Ee),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<te;Xe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(Se+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return Ee}const be={};be[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(n.DEPTH_TEST),o.setFunc(qr),$(!1),q(Md),F(n.CULL_FACE),y(Li);function F(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function se(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function ae(O,Se){return d[O]!==Se?(n.bindFramebuffer(O,Se),d[O]=Se,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Se),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function ce(O,Se){let te=f,oe=!1;if(O){te=h.get(Se),te===void 0&&(te=[],h.set(Se,te));const Ae=O.textures;if(te.length!==Ae.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,Xe=Ae.length;Ee<Xe;Ee++)te[Ee]=n.COLOR_ATTACHMENT0+Ee;te.length=Ae.length,oe=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,oe=!0);oe&&n.drawBuffers(te)}function Ue(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const w={[ir]:n.FUNC_ADD,[gy]:n.FUNC_SUBTRACT,[_y]:n.FUNC_REVERSE_SUBTRACT};w[vy]=n.MIN,w[yy]=n.MAX;const R={[xy]:n.ZERO,[by]:n.ONE,[Sy]:n.SRC_COLOR,[Gc]:n.SRC_ALPHA,[Ry]:n.SRC_ALPHA_SATURATE,[Ay]:n.DST_COLOR,[Ey]:n.DST_ALPHA,[My]:n.ONE_MINUS_SRC_COLOR,[Wc]:n.ONE_MINUS_SRC_ALPHA,[wy]:n.ONE_MINUS_DST_COLOR,[Ty]:n.ONE_MINUS_DST_ALPHA,[Cy]:n.CONSTANT_COLOR,[Py]:n.ONE_MINUS_CONSTANT_COLOR,[Iy]:n.CONSTANT_ALPHA,[Ly]:n.ONE_MINUS_CONSTANT_ALPHA};function y(O,Se,te,oe,Ae,Ee,Xe,vt,Nt,ct){if(O===Li){_===!0&&(se(n.BLEND),_=!1);return}if(_===!1&&(F(n.BLEND),_=!0),O!==my){if(O!==m||ct!==E){if((p!==ir||x!==ir)&&(n.blendEquation(n.FUNC_ADD),p=ir,x=ir),ct)switch(O){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ed:n.blendFunc(n.ONE,n.ONE);break;case Td:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ad:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ed:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Td:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ad:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}A=null,T=null,I=null,P=null,C.set(0,0,0),N=0,m=O,E=ct}return}Ae=Ae||Se,Ee=Ee||te,Xe=Xe||oe,(Se!==p||Ae!==x)&&(n.blendEquationSeparate(w[Se],w[Ae]),p=Se,x=Ae),(te!==A||oe!==T||Ee!==I||Xe!==P)&&(n.blendFuncSeparate(R[te],R[oe],R[Ee],R[Xe]),A=te,T=oe,I=Ee,P=Xe),(vt.equals(C)===!1||Nt!==N)&&(n.blendColor(vt.r,vt.g,vt.b,Nt),C.copy(vt),N=Nt),m=O,E=!1}function ie(O,Se){O.side===On?se(n.CULL_FACE):F(n.CULL_FACE);let te=O.side===Qt;Se&&(te=!te),$(te),O.blending===Hr&&O.transparent===!1?y(Li):y(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const oe=O.stencilWrite;a.setTest(oe),oe&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),le(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(O){S!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),S=O)}function q(O){O!==hy?(F(n.CULL_FACE),O!==D&&(O===Md?n.cullFace(n.BACK):O===fy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),D=O}function ee(O){O!==U&&(Z&&n.lineWidth(O),U=O)}function le(O,Se,te){O?(F(n.POLYGON_OFFSET_FILL),(B!==Se||Q!==te)&&(n.polygonOffset(Se,te),B=Se,Q=te)):se(n.POLYGON_OFFSET_FILL)}function J(O){O?F(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function b(O){O===void 0&&(O=n.TEXTURE0+ne-1),pe!==O&&(n.activeTexture(O),pe=O)}function v(O,Se,te){te===void 0&&(pe===null?te=n.TEXTURE0+ne-1:te=pe);let oe=ve[te];oe===void 0&&(oe={type:void 0,texture:void 0},ve[te]=oe),(oe.type!==O||oe.texture!==Se)&&(pe!==te&&(n.activeTexture(te),pe=te),n.bindTexture(O,Se||be[O]),oe.type=O,oe.texture=Se)}function L(){const O=ve[pe];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(O){Je.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Je.copy(O))}function _e(O){re.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function Be(O,Se){let te=l.get(Se);te===void 0&&(te=new WeakMap,l.set(Se,te));let oe=te.get(O);oe===void 0&&(oe=n.getUniformBlockIndex(Se,O.name),te.set(O,oe))}function ze(O,Se){const oe=l.get(Se).get(O);c.get(Se)!==oe&&(n.uniformBlockBinding(Se,oe,O.__bindingPointIndex),c.set(Se,oe))}function ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},pe=null,ve={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,A=null,T=null,x=null,I=null,P=null,C=new Ge(0,0,0),N=0,E=!1,S=null,D=null,U=null,B=null,Q=null,Je.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:F,disable:se,bindFramebuffer:ae,drawBuffers:ce,useProgram:Ue,setBlending:y,setMaterial:ie,setFlipSided:$,setCullFace:q,setLineWidth:ee,setPolygonOffset:le,setScissorTest:J,activeTexture:b,bindTexture:v,unbindTexture:L,compressedTexImage2D:G,compressedTexImage3D:Y,texImage2D:xe,texImage3D:Pe,updateUBOMapping:Be,uniformBlockBinding:ze,texStorage2D:Ne,texStorage3D:de,texSubImage2D:W,texSubImage3D:me,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:Fe,viewport:_e,reset:ht}}function lT(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return f?new OffscreenCanvas(b,v):$s("canvas")}function _(b,v,L){let G=1;const Y=J(b);if((Y.width>L||Y.height>L)&&(G=L/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const W=Math.floor(G*Y.width),me=Math.floor(G*Y.height);d===void 0&&(d=g(W,me));const ue=v?g(W,me):d;return ue.width=W,ue.height=me,ue.getContext("2d").drawImage(b,0,0,W,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+W+"x"+me+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(b,v,L,G,Y=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=v;if(v===n.RED&&(L===n.FLOAT&&(W=n.R32F),L===n.HALF_FLOAT&&(W=n.R16F),L===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.R8UI),L===n.UNSIGNED_SHORT&&(W=n.R16UI),L===n.UNSIGNED_INT&&(W=n.R32UI),L===n.BYTE&&(W=n.R8I),L===n.SHORT&&(W=n.R16I),L===n.INT&&(W=n.R32I)),v===n.RG&&(L===n.FLOAT&&(W=n.RG32F),L===n.HALF_FLOAT&&(W=n.RG16F),L===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.RG8UI),L===n.UNSIGNED_SHORT&&(W=n.RG16UI),L===n.UNSIGNED_INT&&(W=n.RG32UI),L===n.BYTE&&(W=n.RG8I),L===n.SHORT&&(W=n.RG16I),L===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.RGB8UI),L===n.UNSIGNED_SHORT&&(W=n.RGB16UI),L===n.UNSIGNED_INT&&(W=n.RGB32UI),L===n.BYTE&&(W=n.RGB8I),L===n.SHORT&&(W=n.RGB16I),L===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),L===n.UNSIGNED_INT&&(W=n.RGBA32UI),L===n.BYTE&&(W=n.RGBA8I),L===n.SHORT&&(W=n.RGBA16I),L===n.INT&&(W=n.RGBA32I)),v===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),v===n.RGBA){const me=Y?ra:Qe.getTransfer(G);L===n.FLOAT&&(W=n.RGBA32F),L===n.HALF_FLOAT&&(W=n.RGBA16F),L===n.UNSIGNED_BYTE&&(W=me===dt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(b,v){let L;return b?v===null||v===lr||v===$r?L=n.DEPTH24_STENCIL8:v===Rn?L=n.DEPTH32F_STENCIL8:v===Ys&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===lr||v===$r?L=n.DEPTH_COMPONENT24:v===Rn?L=n.DEPTH_COMPONENT32F:v===Ys&&(L=n.DEPTH_COMPONENT16),L}function I(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Yt&&b.minFilter!==an?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function P(b){const v=b.target;v.removeEventListener("dispose",P),N(v),v.isVideoTexture&&u.delete(v)}function C(b){const v=b.target;v.removeEventListener("dispose",C),S(v)}function N(b){const v=i.get(b);if(v.__webglInit===void 0)return;const L=b.source,G=h.get(L);if(G){const Y=G[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&E(b),Object.keys(G).length===0&&h.delete(L)}i.remove(b)}function E(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const L=b.source,G=h.get(L);delete G[v.__cacheKey],o.memory.textures--}function S(b){const v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let Y=0;Y<v.__webglFramebuffer[G].length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[G][Y]);else n.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)n.deleteFramebuffer(v.__webglFramebuffer[G]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const L=b.textures;for(let G=0,Y=L.length;G<Y;G++){const W=i.get(L[G]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(L[G])}i.remove(b)}let D=0;function U(){D=0}function B(){const b=D;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),D+=1,b}function Q(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function ne(b,v){const L=i.get(b);if(b.isVideoTexture&&ee(b),b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){const G=b.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(L,b,v);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function Z(b,v){const L=i.get(b);if(b.version>0&&L.__version!==b.version){re(L,b,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function j(b,v){const L=i.get(b);if(b.version>0&&L.__version!==b.version){re(L,b,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function V(b,v){const L=i.get(b);if(b.version>0&&L.__version!==b.version){fe(L,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}const pe={[Kr]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[ia]:n.MIRRORED_REPEAT},ve={[Yt]:n.NEAREST,[Mp]:n.NEAREST_MIPMAP_NEAREST,[Ss]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Vo]:n.LINEAR_MIPMAP_NEAREST,[si]:n.LINEAR_MIPMAP_LINEAR},Re={[Yy]:n.NEVER,[Qy]:n.ALWAYS,[jy]:n.LESS,[Np]:n.LEQUAL,[Ky]:n.EQUAL,[Jy]:n.GEQUAL,[$y]:n.GREATER,[Zy]:n.NOTEQUAL};function Ie(b,v){if(v.type===Rn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===an||v.magFilter===Vo||v.magFilter===Ss||v.magFilter===si||v.minFilter===an||v.minFilter===Vo||v.minFilter===Ss||v.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,pe[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,pe[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,pe[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ve[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ve[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Yt||v.minFilter!==Ss&&v.minFilter!==si||v.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Je(b,v){let L=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",P));const G=v.source;let Y=h.get(G);Y===void 0&&(Y={},h.set(G,Y));const W=Q(v);if(W!==b.__cacheKey){Y[W]===void 0&&(Y[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),Y[W].usedTimes++;const me=Y[b.__cacheKey];me!==void 0&&(Y[b.__cacheKey].usedTimes--,me.usedTimes===0&&E(v)),b.__cacheKey=W,b.__webglTexture=Y[W].texture}return L}function re(b,v,L){let G=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=n.TEXTURE_3D);const Y=Je(b,v),W=v.source;t.bindTexture(G,b.__webglTexture,n.TEXTURE0+L);const me=i.get(W);if(W.version!==me.__version||Y===!0){t.activeTexture(n.TEXTURE0+L);const ue=Qe.getPrimaries(Qe.workingColorSpace),ge=v.colorSpace===Ri?null:Qe.getPrimaries(v.colorSpace),Ne=v.colorSpace===Ri||ue===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let de=_(v.image,!1,r.maxTextureSize);de=le(v,de);const xe=s.convert(v.format,v.colorSpace),Pe=s.convert(v.type);let Fe=T(v.internalFormat,xe,Pe,v.colorSpace,v.isVideoTexture);Ie(G,v);let _e;const Be=v.mipmaps,ze=v.isVideoTexture!==!0,ht=me.__version===void 0||Y===!0,O=W.dataReady,Se=I(v,de);if(v.isDepthTexture)Fe=x(v.format===Zr,v.type),ht&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Fe,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Fe,de.width,de.height,0,xe,Pe,null));else if(v.isDataTexture)if(Be.length>0){ze&&ht&&t.texStorage2D(n.TEXTURE_2D,Se,Fe,Be[0].width,Be[0].height);for(let te=0,oe=Be.length;te<oe;te++)_e=Be[te],ze?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,_e.width,_e.height,xe,Pe,_e.data):t.texImage2D(n.TEXTURE_2D,te,Fe,_e.width,_e.height,0,xe,Pe,_e.data);v.generateMipmaps=!1}else ze?(ht&&t.texStorage2D(n.TEXTURE_2D,Se,Fe,de.width,de.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,xe,Pe,de.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,de.width,de.height,0,xe,Pe,de.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ze&&ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Fe,Be[0].width,Be[0].height,de.depth);for(let te=0,oe=Be.length;te<oe;te++)if(_e=Be[te],v.format!==mn)if(xe!==null)if(ze){if(O)if(v.layerUpdates.size>0){const Ae=_h(_e.width,_e.height,v.format,v.type);for(const Ee of v.layerUpdates){const Xe=_e.data.subarray(Ee*Ae/_e.data.BYTES_PER_ELEMENT,(Ee+1)*Ae/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Ee,_e.width,_e.height,1,xe,Xe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,_e.width,_e.height,de.depth,xe,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Fe,_e.width,_e.height,de.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,_e.width,_e.height,de.depth,xe,Pe,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Fe,_e.width,_e.height,de.depth,0,xe,Pe,_e.data)}else{ze&&ht&&t.texStorage2D(n.TEXTURE_2D,Se,Fe,Be[0].width,Be[0].height);for(let te=0,oe=Be.length;te<oe;te++)_e=Be[te],v.format!==mn?xe!==null?ze?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,_e.width,_e.height,xe,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Fe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,_e.width,_e.height,xe,Pe,_e.data):t.texImage2D(n.TEXTURE_2D,te,Fe,_e.width,_e.height,0,xe,Pe,_e.data)}else if(v.isDataArrayTexture)if(ze){if(ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Fe,de.width,de.height,de.depth),O)if(v.layerUpdates.size>0){const te=_h(de.width,de.height,v.format,v.type);for(const oe of v.layerUpdates){const Ae=de.data.subarray(oe*te/de.data.BYTES_PER_ELEMENT,(oe+1)*te/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,de.width,de.height,1,xe,Pe,Ae)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,xe,Pe,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,de.width,de.height,de.depth,0,xe,Pe,de.data);else if(v.isData3DTexture)ze?(ht&&t.texStorage3D(n.TEXTURE_3D,Se,Fe,de.width,de.height,de.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,xe,Pe,de.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,de.width,de.height,de.depth,0,xe,Pe,de.data);else if(v.isFramebufferTexture){if(ht)if(ze)t.texStorage2D(n.TEXTURE_2D,Se,Fe,de.width,de.height);else{let te=de.width,oe=de.height;for(let Ae=0;Ae<Se;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Fe,te,oe,0,xe,Pe,null),te>>=1,oe>>=1}}else if(Be.length>0){if(ze&&ht){const te=J(Be[0]);t.texStorage2D(n.TEXTURE_2D,Se,Fe,te.width,te.height)}for(let te=0,oe=Be.length;te<oe;te++)_e=Be[te],ze?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,xe,Pe,_e):t.texImage2D(n.TEXTURE_2D,te,Fe,xe,Pe,_e);v.generateMipmaps=!1}else if(ze){if(ht){const te=J(de);t.texStorage2D(n.TEXTURE_2D,Se,Fe,te.width,te.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Pe,de)}else t.texImage2D(n.TEXTURE_2D,0,Fe,xe,Pe,de);m(v)&&p(G),me.__version=W.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function fe(b,v,L){if(v.image.length!==6)return;const G=Je(b,v),Y=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+L);const W=i.get(Y);if(Y.version!==W.__version||G===!0){t.activeTexture(n.TEXTURE0+L);const me=Qe.getPrimaries(Qe.workingColorSpace),ue=v.colorSpace===Ri?null:Qe.getPrimaries(v.colorSpace),ge=v.colorSpace===Ri||me===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ne=v.isCompressedTexture||v.image[0].isCompressedTexture,de=v.image[0]&&v.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!Ne&&!de?xe[oe]=_(v.image[oe],!0,r.maxCubemapSize):xe[oe]=de?v.image[oe].image:v.image[oe],xe[oe]=le(v,xe[oe]);const Pe=xe[0],Fe=s.convert(v.format,v.colorSpace),_e=s.convert(v.type),Be=T(v.internalFormat,Fe,_e,v.colorSpace),ze=v.isVideoTexture!==!0,ht=W.__version===void 0||G===!0,O=Y.dataReady;let Se=I(v,Pe);Ie(n.TEXTURE_CUBE_MAP,v);let te;if(Ne){ze&&ht&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Be,Pe.width,Pe.height);for(let oe=0;oe<6;oe++){te=xe[oe].mipmaps;for(let Ae=0;Ae<te.length;Ae++){const Ee=te[Ae];v.format!==mn?Fe!==null?ze?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae,0,0,Ee.width,Ee.height,Fe,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae,Be,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae,0,0,Ee.width,Ee.height,Fe,_e,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae,Be,Ee.width,Ee.height,0,Fe,_e,Ee.data)}}}else{if(te=v.mipmaps,ze&&ht){te.length>0&&Se++;const oe=J(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Be,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(de){ze?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,Fe,_e,xe[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Be,xe[oe].width,xe[oe].height,0,Fe,_e,xe[oe].data);for(let Ae=0;Ae<te.length;Ae++){const Xe=te[Ae].image[oe].image;ze?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae+1,0,0,Xe.width,Xe.height,Fe,_e,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae+1,Be,Xe.width,Xe.height,0,Fe,_e,Xe.data)}}else{ze?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Fe,_e,xe[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Be,Fe,_e,xe[oe]);for(let Ae=0;Ae<te.length;Ae++){const Ee=te[Ae];ze?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae+1,0,0,Fe,_e,Ee.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae+1,Be,Fe,_e,Ee.image[oe])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),W.__version=Y.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function be(b,v,L,G,Y,W){const me=s.convert(L.format,L.colorSpace),ue=s.convert(L.type),ge=T(L.internalFormat,me,ue,L.colorSpace),Ne=i.get(v),de=i.get(L);if(de.__renderTarget=v,!Ne.__hasExternalTextures){const xe=Math.max(1,v.width>>W),Pe=Math.max(1,v.height>>W);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,W,ge,xe,Pe,v.depth,0,me,ue,null):t.texImage2D(Y,W,ge,xe,Pe,0,me,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,Y,de.__webglTexture,0,$(v)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,Y,de.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(b,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){const G=v.depthTexture,Y=G&&G.isDepthTexture?G.type:null,W=x(v.stencilBuffer,Y),me=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=$(v);q(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,W,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,b)}else{const G=v.textures;for(let Y=0;Y<G.length;Y++){const W=G[Y],me=s.convert(W.format,W.colorSpace),ue=s.convert(W.type),ge=T(W.internalFormat,me,ue,W.colorSpace),Ne=$(v);L&&q(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ge,v.width,v.height):q(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,ge,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ge,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(v.depthTexture);G.__renderTarget=v,(!G.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ne(v.depthTexture,0);const Y=G.__webglTexture,W=$(v);if(v.depthTexture.format===zr)q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(v.depthTexture.format===Zr)q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function ae(b){const v=i.get(b),L=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const G=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){const Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=G}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");se(v.__webglFramebuffer,b)}else if(L){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=n.createRenderbuffer(),F(v.__webglDepthbuffer[G],b,!1);else{const Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,W)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),F(v.__webglDepthbuffer,b,!1);else{const G=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,Y)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(b,v,L){const G=i.get(b);v!==void 0&&be(G.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&ae(b)}function Ue(b){const v=b.texture,L=i.get(b),G=i.get(v);b.addEventListener("dispose",C);const Y=b.textures,W=b.isWebGLCubeRenderTarget===!0,me=Y.length>1;if(me||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=v.version,o.memory.textures++),W){L.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[ue]=[];for(let ge=0;ge<v.mipmaps.length;ge++)L.__webglFramebuffer[ue][ge]=n.createFramebuffer()}else L.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)L.__webglFramebuffer[ue]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(me)for(let ue=0,ge=Y.length;ue<ge;ue++){const Ne=i.get(Y[ue]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&q(b)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ue=0;ue<Y.length;ue++){const ge=Y[ue];L.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ue]);const Ne=s.convert(ge.format,ge.colorSpace),de=s.convert(ge.type),xe=T(ge.internalFormat,Ne,de,ge.colorSpace,b.isXRRenderTarget===!0),Pe=$(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,xe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,L.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),F(L.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)be(L.__webglFramebuffer[ue][ge],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else be(L.__webglFramebuffer[ue],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ue=0,ge=Y.length;ue<ge;ue++){const Ne=Y[ue],de=i.get(Ne);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),Ie(n.TEXTURE_2D,Ne),be(L.__webglFramebuffer,b,Ne,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(Ne)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,G.__webglTexture),Ie(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)be(L.__webglFramebuffer[ge],b,v,n.COLOR_ATTACHMENT0,ue,ge);else be(L.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,ue,0);m(v)&&p(ue),t.unbindTexture()}b.depthBuffer&&ae(b)}function w(b){const v=b.textures;for(let L=0,G=v.length;L<G;L++){const Y=v[L];if(m(Y)){const W=A(b),me=i.get(Y).__webglTexture;t.bindTexture(W,me),p(W),t.unbindTexture()}}}const R=[],y=[];function ie(b){if(b.samples>0){if(q(b)===!1){const v=b.textures,L=b.width,G=b.height;let Y=n.COLOR_BUFFER_BIT;const W=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(b),ue=v.length>1;if(ue)for(let ge=0;ge<v.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ge=0;ge<v.length;ge++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);const Ne=i.get(v[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,L,G,0,0,L,G,Y,n.NEAREST),c===!0&&(R.length=0,y.length=0,R.push(n.COLOR_ATTACHMENT0+ge),b.depthBuffer&&b.resolveDepthBuffer===!1&&(R.push(W),y.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<v.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);const Ne=i.get(v[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function $(b){return Math.min(r.maxSamples,b.samples)}function q(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ee(b){const v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function le(b,v){const L=b.colorSpace,G=b.format,Y=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||L!==Kt&&L!==Ri&&(Qe.getTransfer(L)===dt?(G!==mn||Y!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function J(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.setTexture2D=ne,this.setTexture2DArray=Z,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=ce,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=be,this.useMultisampledRTT=q}function uT(n,e){function t(i,r=Ri){let s;const o=Qe.getTransfer(r);if(i===di)return n.UNSIGNED_BYTE;if(i===tu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ap)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ep)return n.BYTE;if(i===Tp)return n.SHORT;if(i===Ys)return n.UNSIGNED_SHORT;if(i===eu)return n.INT;if(i===lr)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===eo)return n.HALF_FLOAT;if(i===wp)return n.ALPHA;if(i===Rp)return n.RGB;if(i===mn)return n.RGBA;if(i===Cp)return n.LUMINANCE;if(i===Pp)return n.LUMINANCE_ALPHA;if(i===zr)return n.DEPTH_COMPONENT;if(i===Zr)return n.DEPTH_STENCIL;if(i===iu)return n.RED;if(i===ru)return n.RED_INTEGER;if(i===Ip)return n.RG;if(i===su)return n.RG_INTEGER;if(i===ou)return n.RGBA_INTEGER;if(i===Go||i===Wo||i===Xo||i===qo)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Go)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Go)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===el||i===tl||i===nl||i===il)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===el)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===il)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rl||i===sl||i===ol)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===rl||i===sl)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ol)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===al||i===cl||i===ll||i===ul||i===dl||i===hl||i===fl||i===pl||i===ml||i===gl||i===_l||i===vl||i===yl||i===xl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===al)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cl)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ll)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ul)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dl)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hl)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fl)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pl)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ml)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gl)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_l)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vl)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yl)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xl)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yo||i===bl||i===Sl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Yo)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lp||i===Ml||i===El||i===Tl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Yo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ml)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===El)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const dT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new It,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ni({vertexShader:dT,fragmentShader:hT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new cn(new Ea(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pT extends is{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const _=new fT,m=t.getContextAttributes();let p=null,A=null;const T=[],x=[],I=new Ze;let P=null;const C=new Zt;C.viewport=new it;const N=new Zt;N.viewport=new it;const E=[C,N],S=new Ax;let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let fe=T[re];return fe===void 0&&(fe=new dc,T[re]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(re){let fe=T[re];return fe===void 0&&(fe=new dc,T[re]=fe),fe.getGripSpace()},this.getHand=function(re){let fe=T[re];return fe===void 0&&(fe=new dc,T[re]=fe),fe.getHandSpace()};function B(re){const fe=x.indexOf(re.inputSource);if(fe===-1)return;const be=T[fe];be!==void 0&&(be.update(re.inputSource,re.frame,l||o),be.dispatchEvent({type:re.type,data:re.inputSource}))}function Q(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",ne);for(let re=0;re<T.length;re++){const fe=x[re];fe!==null&&(x[re]=null,T[re].disconnect(fe))}D=null,U=null,_.reset(),e.setRenderTarget(p),f=null,h=null,d=null,r=null,A=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,F=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=m.stencil?Zr:zr,F=m.stencil?$r:lr);const ae={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new ur(h.textureWidth,h.textureHeight,{format:mn,type:di,depthTexture:new Kp(h.textureWidth,h.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new ur(f.framebufferWidth,f.framebufferHeight,{format:mn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(re){for(let fe=0;fe<re.removed.length;fe++){const be=re.removed[fe],F=x.indexOf(be);F>=0&&(x[F]=null,T[F].disconnect(be))}for(let fe=0;fe<re.added.length;fe++){const be=re.added[fe];let F=x.indexOf(be);if(F===-1){for(let ae=0;ae<T.length;ae++)if(ae>=x.length){x.push(be),F=ae;break}else if(x[ae]===null){x[ae]=be,F=ae;break}if(F===-1)break}const se=T[F];se&&se.connect(be)}}const Z=new z,j=new z;function V(re,fe,be){Z.setFromMatrixPosition(fe.matrixWorld),j.setFromMatrixPosition(be.matrixWorld);const F=Z.distanceTo(j),se=fe.projectionMatrix.elements,ae=be.projectionMatrix.elements,ce=se[14]/(se[10]-1),Ue=se[14]/(se[10]+1),w=(se[9]+1)/se[5],R=(se[9]-1)/se[5],y=(se[8]-1)/se[0],ie=(ae[8]+1)/ae[0],$=ce*y,q=ce*ie,ee=F/(-y+ie),le=ee*-y;if(fe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(le),re.translateZ(ee),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),se[10]===-1)re.projectionMatrix.copy(fe.projectionMatrix),re.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const J=ce+ee,b=Ue+ee,v=$-le,L=q+(F-le),G=w*Ue/b*J,Y=R*Ue/b*J;re.projectionMatrix.makePerspective(v,L,G,Y,J,b),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function pe(re,fe){fe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(fe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let fe=re.near,be=re.far;_.texture!==null&&(_.depthNear>0&&(fe=_.depthNear),_.depthFar>0&&(be=_.depthFar)),S.near=N.near=C.near=fe,S.far=N.far=C.far=be,(D!==S.near||U!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,U=S.far),C.layers.mask=re.layers.mask|2,N.layers.mask=re.layers.mask|4,S.layers.mask=C.layers.mask|N.layers.mask;const F=re.parent,se=S.cameras;pe(S,F);for(let ae=0;ae<se.length;ae++)pe(se[ae],F);se.length===2?V(S,C,N):S.projectionMatrix.copy(C.projectionMatrix),ve(re,S,F)};function ve(re,fe,be){be===null?re.matrix.copy(fe.matrixWorld):(re.matrix.copy(be.matrixWorld),re.matrix.invert(),re.matrix.multiply(fe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(fe.projectionMatrix),re.projectionMatrixInverse.copy(fe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Jr*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(re){c=re,h!==null&&(h.fixedFoveation=re),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=re)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Re=null;function Ie(re,fe){if(u=fe.getViewerPose(l||o),g=fe,u!==null){const be=u.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let F=!1;be.length!==S.cameras.length&&(S.cameras.length=0,F=!0);for(let ce=0;ce<be.length;ce++){const Ue=be[ce];let w=null;if(f!==null)w=f.getViewport(Ue);else{const y=d.getViewSubImage(h,Ue);w=y.viewport,ce===0&&(e.setRenderTargetTextures(A,y.colorTexture,h.ignoreDepthValues?void 0:y.depthStencilTexture),e.setRenderTarget(A))}let R=E[ce];R===void 0&&(R=new Zt,R.layers.enable(ce),R.viewport=new it,E[ce]=R),R.matrix.fromArray(Ue.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Ue.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(w.x,w.y,w.width,w.height),ce===0&&(S.matrix.copy(R.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),F===!0&&S.cameras.push(R)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const ce=d.getDepthInformation(be[0]);ce&&ce.isValid&&ce.texture&&_.init(e,ce,r.renderState)}}for(let be=0;be<T.length;be++){const F=x[be],se=T[be];F!==null&&se!==void 0&&se.update(F,fe,l||o)}Re&&Re(re,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}const Je=new em;Je.setAnimationLoop(Ie),this.setAnimationLoop=function(re){Re=re},this.dispose=function(){}}}const Zi=new Hn,mT=new We;function gT(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Vp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,T,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,A,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),T=A.envMap,x=A.envMapRotation;T&&(m.envMap.value=T,Zi.copy(x),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),m.envMapRotation.value.setFromMatrix4(mT.makeRotationFromEuler(Zi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,A,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _T(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,T){const x=T.program;i.uniformBlockBinding(A,x)}function l(A,T){let x=r[A.id];x===void 0&&(g(A),x=u(A),r[A.id]=x,A.addEventListener("dispose",m));const I=T.program;i.updateUBOMapping(A,I);const P=e.render.frame;s[A.id]!==P&&(h(A),s[A.id]=P)}function u(A){const T=d();A.__bindingPointIndex=T;const x=n.createBuffer(),I=A.__size,P=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,I,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,x),x}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const T=r[A.id],x=A.uniforms,I=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let P=0,C=x.length;P<C;P++){const N=Array.isArray(x[P])?x[P]:[x[P]];for(let E=0,S=N.length;E<S;E++){const D=N[E];if(f(D,P,E,I)===!0){const U=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let Q=0;for(let ne=0;ne<B.length;ne++){const Z=B[ne],j=_(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,U+Q,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):(Z.toArray(D.__data,Q),Q+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(A,T,x,I){const P=A.value,C=T+"_"+x;if(I[C]===void 0)return typeof P=="number"||typeof P=="boolean"?I[C]=P:I[C]=P.clone(),!0;{const N=I[C];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return I[C]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function g(A){const T=A.uniforms;let x=0;const I=16;for(let C=0,N=T.length;C<N;C++){const E=Array.isArray(T[C])?T[C]:[T[C]];for(let S=0,D=E.length;S<D;S++){const U=E[S],B=Array.isArray(U.value)?U.value:[U.value];for(let Q=0,ne=B.length;Q<ne;Q++){const Z=B[Q],j=_(Z),V=x%I,pe=V%j.boundary,ve=V+pe;x+=pe,ve!==0&&I-ve<j.storage&&(x+=I-ve),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=j.storage}}}const P=x%I;return P>0&&(x+=I-P),A.__size=x,A.__cache={},this}function _(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const x=o.indexOf(T.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class vT{constructor(e={}){const{canvas:t=_0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this.toneMapping=Di,this.toneMappingExposure=1;const x=this;let I=!1,P=0,C=0,N=null,E=-1,S=null;const D=new it,U=new it;let B=null;const Q=new Ge(0);let ne=0,Z=t.width,j=t.height,V=1,pe=null,ve=null;const Re=new it(0,0,Z,j),Ie=new it(0,0,Z,j);let Je=!1;const re=new du;let fe=!1,be=!1;this.transmissionResolutionScale=1;const F=new We,se=new We,ae=new z,ce=new it,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function R(){return N===null?V:1}let y=i;function ie(M,k){return t.getContext(M,k)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ql}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),y===null){const k="webgl2";if(y=ie(k,M),y===null)throw ie(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let $,q,ee,le,J,b,v,L,G,Y,W,me,ue,ge,Ne,de,xe,Pe,Fe,_e,Be,ze,ht,O;function Se(){$=new RM(y),$.init(),ze=new uT(y,$),q=new SM(y,$,e,ze),ee=new cT(y,$),q.reverseDepthBuffer&&h&&ee.buffers.depth.setReversed(!0),le=new IM(y),J=new KE,b=new lT(y,$,ee,J,q,ze,le),v=new EM(x),L=new wM(x),G=new Bx(y),ht=new xM(y,G),Y=new CM(y,G,le,ht),W=new DM(y,Y,G,le),Fe=new LM(y,q,b),de=new MM(J),me=new jE(x,v,L,$,q,ht,de),ue=new gT(x,J),ge=new ZE,Ne=new iT($),Pe=new yM(x,v,L,ee,W,f,c),xe=new oT(x,W,q),O=new _T(y,le,q,ee),_e=new bM(y,$,le),Be=new PM(y,$,le),le.programs=me.programs,x.capabilities=q,x.extensions=$,x.properties=J,x.renderLists=ge,x.shadowMap=xe,x.state=ee,x.info=le}Se();const te=new pT(x,y);this.xr=te,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const M=$.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=$.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(Z,j,!1))},this.getSize=function(M){return M.set(Z,j)},this.setSize=function(M,k,X=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,j=k,t.width=Math.floor(M*V),t.height=Math.floor(k*V),X===!0&&(t.style.width=M+"px",t.style.height=k+"px"),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set(Z*V,j*V).floor()},this.setDrawingBufferSize=function(M,k,X){Z=M,j=k,V=X,t.width=Math.floor(M*X),t.height=Math.floor(k*X),this.setViewport(0,0,M,k)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(Re)},this.setViewport=function(M,k,X,K){M.isVector4?Re.set(M.x,M.y,M.z,M.w):Re.set(M,k,X,K),ee.viewport(D.copy(Re).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(Ie)},this.setScissor=function(M,k,X,K){M.isVector4?Ie.set(M.x,M.y,M.z,M.w):Ie.set(M,k,X,K),ee.scissor(U.copy(Ie).multiplyScalar(V).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(M){ee.setScissorTest(Je=M)},this.setOpaqueSort=function(M){pe=M},this.setTransparentSort=function(M){ve=M},this.getClearColor=function(M){return M.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(M=!0,k=!0,X=!0){let K=0;if(M){let H=!1;if(N!==null){const he=N.texture.format;H=he===ou||he===su||he===ru}if(H){const he=N.texture.type,Me=he===di||he===lr||he===Ys||he===$r||he===tu||he===nu,we=Pe.getClearColor(),Ce=Pe.getClearAlpha(),ke=we.r,He=we.g,Le=we.b;Me?(g[0]=ke,g[1]=He,g[2]=Le,g[3]=Ce,y.clearBufferuiv(y.COLOR,0,g)):(_[0]=ke,_[1]=He,_[2]=Le,_[3]=Ce,y.clearBufferiv(y.COLOR,0,_))}else K|=y.COLOR_BUFFER_BIT}k&&(K|=y.DEPTH_BUFFER_BIT),X&&(K|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Pe.dispose(),ge.dispose(),Ne.dispose(),J.dispose(),v.dispose(),L.dispose(),W.dispose(),ht.dispose(),O.dispose(),me.dispose(),te.dispose(),te.removeEventListener("sessionstart",vu),te.removeEventListener("sessionend",yu),Hi.stop()};function oe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const M=le.autoReset,k=xe.enabled,X=xe.autoUpdate,K=xe.needsUpdate,H=xe.type;Se(),le.autoReset=M,xe.enabled=k,xe.autoUpdate=X,xe.needsUpdate=K,xe.type=H}function Ee(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Xe(M){const k=M.target;k.removeEventListener("dispose",Xe),vt(k)}function vt(M){Nt(M),J.remove(M)}function Nt(M){const k=J.get(M).programs;k!==void 0&&(k.forEach(function(X){me.releaseProgram(X)}),M.isShaderMaterial&&me.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,X,K,H,he){k===null&&(k=Ue);const Me=H.isMesh&&H.matrixWorld.determinant()<0,we=lm(M,k,X,K,H);ee.setMaterial(K,Me);let Ce=X.index,ke=1;if(K.wireframe===!0){if(Ce=Y.getWireframeAttribute(X),Ce===void 0)return;ke=2}const He=X.drawRange,Le=X.attributes.position;let et=He.start*ke,rt=(He.start+He.count)*ke;he!==null&&(et=Math.max(et,he.start*ke),rt=Math.min(rt,(he.start+he.count)*ke)),Ce!==null?(et=Math.max(et,0),rt=Math.min(rt,Ce.count)):Le!=null&&(et=Math.max(et,0),rt=Math.min(rt,Le.count));const Et=rt-et;if(Et<0||Et===1/0)return;ht.setup(H,K,we,X,Ce);let yt,tt=_e;if(Ce!==null&&(yt=G.get(Ce),tt=Be,tt.setIndex(yt)),H.isMesh)K.wireframe===!0?(ee.setLineWidth(K.wireframeLinewidth*R()),tt.setMode(y.LINES)):tt.setMode(y.TRIANGLES);else if(H.isLine){let De=K.linewidth;De===void 0&&(De=1),ee.setLineWidth(De*R()),H.isLineSegments?tt.setMode(y.LINES):H.isLineLoop?tt.setMode(y.LINE_LOOP):tt.setMode(y.LINE_STRIP)}else H.isPoints?tt.setMode(y.POINTS):H.isSprite&&tt.setMode(y.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)tt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if($.get("WEBGL_multi_draw"))tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const De=H._multiDrawStarts,Dt=H._multiDrawCounts,st=H._multiDrawCount,xn=Ce?G.get(Ce).bytesPerElement:1,hr=J.get(K).currentProgram.getUniforms();for(let en=0;en<st;en++)hr.setValue(y,"_gl_DrawID",en),tt.render(De[en]/xn,Dt[en])}else if(H.isInstancedMesh)tt.renderInstances(et,Et,H.count);else if(X.isInstancedBufferGeometry){const De=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Dt=Math.min(X.instanceCount,De);tt.renderInstances(et,Et,Dt)}else tt.render(et,Et)};function ct(M,k,X){M.transparent===!0&&M.side===On&&M.forceSinglePass===!1?(M.side=Qt,M.needsUpdate=!0,so(M,k,X),M.side=ui,M.needsUpdate=!0,so(M,k,X),M.side=On):so(M,k,X)}this.compile=function(M,k,X=null){X===null&&(X=M),p=Ne.get(X),p.init(k),T.push(p),X.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),M!==X&&M.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const K=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const he=H.material;if(he)if(Array.isArray(he))for(let Me=0;Me<he.length;Me++){const we=he[Me];ct(we,X,H),K.add(we)}else ct(he,X,H),K.add(he)}),T.pop(),p=null,K},this.compileAsync=function(M,k,X=null){const K=this.compile(M,k,X);return new Promise(H=>{function he(){if(K.forEach(function(Me){J.get(Me).currentProgram.isReady()&&K.delete(Me)}),K.size===0){H(M);return}setTimeout(he,10)}$.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let yn=null;function Xn(M){yn&&yn(M)}function vu(){Hi.stop()}function yu(){Hi.start()}const Hi=new em;Hi.setAnimationLoop(Xn),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(M){yn=M,te.setAnimationLoop(M),M===null?Hi.stop():Hi.start()},te.addEventListener("sessionstart",vu),te.addEventListener("sessionend",yu),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(k),k=te.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,k,N),p=Ne.get(M,T.length),p.init(k),T.push(p),se.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),re.setFromProjectionMatrix(se),be=this.localClippingEnabled,fe=de.init(this.clippingPlanes,be),m=ge.get(M,A.length),m.init(),A.push(m),te.enabled===!0&&te.isPresenting===!0){const he=x.xr.getDepthSensingMesh();he!==null&&Ra(he,k,-1/0,x.sortObjects)}Ra(M,k,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(pe,ve),w=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,w&&Pe.addToRenderList(m,M),this.info.render.frame++,fe===!0&&de.beginShadows();const X=p.state.shadowsArray;xe.render(X,M,k),fe===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){const he=k.cameras;if(H.length>0)for(let Me=0,we=he.length;Me<we;Me++){const Ce=he[Me];bu(K,H,M,Ce)}w&&Pe.render(M);for(let Me=0,we=he.length;Me<we;Me++){const Ce=he[Me];xu(m,M,Ce,Ce.viewport)}}else H.length>0&&bu(K,H,M,k),w&&Pe.render(M),xu(m,M,k);N!==null&&C===0&&(b.updateMultisampleRenderTarget(N),b.updateRenderTargetMipmap(N)),M.isScene===!0&&M.onAfterRender(x,M,k),ht.resetDefaultState(),E=-1,S=null,T.pop(),T.length>0?(p=T[T.length-1],fe===!0&&de.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ra(M,k,X,K){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||re.intersectsSprite(M)){K&&ce.setFromMatrixPosition(M.matrixWorld).applyMatrix4(se);const Me=W.update(M),we=M.material;we.visible&&m.push(M,Me,we,X,ce.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||re.intersectsObject(M))){const Me=W.update(M),we=M.material;if(K&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ce.copy(M.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ce.copy(Me.boundingSphere.center)),ce.applyMatrix4(M.matrixWorld).applyMatrix4(se)),Array.isArray(we)){const Ce=Me.groups;for(let ke=0,He=Ce.length;ke<He;ke++){const Le=Ce[ke],et=we[Le.materialIndex];et&&et.visible&&m.push(M,Me,et,X,ce.z,Le)}}else we.visible&&m.push(M,Me,we,X,ce.z,null)}}const he=M.children;for(let Me=0,we=he.length;Me<we;Me++)Ra(he[Me],k,X,K)}function xu(M,k,X,K){const H=M.opaque,he=M.transmissive,Me=M.transparent;p.setupLightsView(X),fe===!0&&de.setGlobalState(x.clippingPlanes,X),K&&ee.viewport(D.copy(K)),H.length>0&&ro(H,k,X),he.length>0&&ro(he,k,X),Me.length>0&&ro(Me,k,X),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function bu(M,k,X,K){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new ur(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?eo:di,minFilter:si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const he=p.state.transmissionRenderTarget[K.id],Me=K.viewport||D;he.setSize(Me.z*x.transmissionResolutionScale,Me.w*x.transmissionResolutionScale);const we=x.getRenderTarget();x.setRenderTarget(he),x.getClearColor(Q),ne=x.getClearAlpha(),ne<1&&x.setClearColor(16777215,.5),x.clear(),w&&Pe.render(X);const Ce=x.toneMapping;x.toneMapping=Di;const ke=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),fe===!0&&de.setGlobalState(x.clippingPlanes,K),ro(M,X,K),b.updateMultisampleRenderTarget(he),b.updateRenderTargetMipmap(he),$.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Le=0,et=k.length;Le<et;Le++){const rt=k[Le],Et=rt.object,yt=rt.geometry,tt=rt.material,De=rt.group;if(tt.side===On&&Et.layers.test(K.layers)){const Dt=tt.side;tt.side=Qt,tt.needsUpdate=!0,Su(Et,X,K,yt,tt,De),tt.side=Dt,tt.needsUpdate=!0,He=!0}}He===!0&&(b.updateMultisampleRenderTarget(he),b.updateRenderTargetMipmap(he))}x.setRenderTarget(we),x.setClearColor(Q,ne),ke!==void 0&&(K.viewport=ke),x.toneMapping=Ce}function ro(M,k,X){const K=k.isScene===!0?k.overrideMaterial:null;for(let H=0,he=M.length;H<he;H++){const Me=M[H],we=Me.object,Ce=Me.geometry,ke=K===null?Me.material:K,He=Me.group;we.layers.test(X.layers)&&Su(we,k,X,Ce,ke,He)}}function Su(M,k,X,K,H,he){M.onBeforeRender(x,k,X,K,H,he),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(x,k,X,K,M,he),H.transparent===!0&&H.side===On&&H.forceSinglePass===!1?(H.side=Qt,H.needsUpdate=!0,x.renderBufferDirect(X,k,K,H,M,he),H.side=ui,H.needsUpdate=!0,x.renderBufferDirect(X,k,K,H,M,he),H.side=On):x.renderBufferDirect(X,k,K,H,M,he),M.onAfterRender(x,k,X,K,H,he)}function so(M,k,X){k.isScene!==!0&&(k=Ue);const K=J.get(M),H=p.state.lights,he=p.state.shadowsArray,Me=H.state.version,we=me.getParameters(M,H.state,he,k,X),Ce=me.getProgramCacheKey(we);let ke=K.programs;K.environment=M.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(M.isMeshStandardMaterial?L:v).get(M.envMap||K.environment),K.envMapRotation=K.environment!==null&&M.envMap===null?k.environmentRotation:M.envMapRotation,ke===void 0&&(M.addEventListener("dispose",Xe),ke=new Map,K.programs=ke);let He=ke.get(Ce);if(He!==void 0){if(K.currentProgram===He&&K.lightsStateVersion===Me)return Eu(M,we),He}else we.uniforms=me.getUniforms(M),M.onBeforeCompile(we,x),He=me.acquireProgram(we,Ce),ke.set(Ce,He),K.uniforms=we.uniforms;const Le=K.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=de.uniform),Eu(M,we),K.needsLights=dm(M),K.lightsStateVersion=Me,K.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.directionalShadowMap.value=H.state.directionalShadowMap,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotShadowMap.value=H.state.spotShadowMap,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMap.value=H.state.pointShadowMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix),K.currentProgram=He,K.uniformsList=null,He}function Mu(M){if(M.uniformsList===null){const k=M.currentProgram.getUniforms();M.uniformsList=jo.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function Eu(M,k){const X=J.get(M);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function lm(M,k,X,K,H){k.isScene!==!0&&(k=Ue),b.resetTextureUnits();const he=k.fog,Me=K.isMeshStandardMaterial?k.environment:null,we=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Kt,Ce=(K.isMeshStandardMaterial?L:v).get(K.envMap||Me),ke=K.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,He=!!X.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Le=!!X.morphAttributes.position,et=!!X.morphAttributes.normal,rt=!!X.morphAttributes.color;let Et=Di;K.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Et=x.toneMapping);const yt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,tt=yt!==void 0?yt.length:0,De=J.get(K),Dt=p.state.lights;if(fe===!0&&(be===!0||M!==S)){const Vt=M===S&&K.id===E;de.setState(K,M,Vt)}let st=!1;K.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Dt.state.version||De.outputColorSpace!==we||H.isBatchedMesh&&De.batching===!1||!H.isBatchedMesh&&De.batching===!0||H.isBatchedMesh&&De.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&De.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&De.instancing===!1||!H.isInstancedMesh&&De.instancing===!0||H.isSkinnedMesh&&De.skinning===!1||!H.isSkinnedMesh&&De.skinning===!0||H.isInstancedMesh&&De.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&De.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&De.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&De.instancingMorph===!1&&H.morphTexture!==null||De.envMap!==Ce||K.fog===!0&&De.fog!==he||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==de.numPlanes||De.numIntersection!==de.numIntersection)||De.vertexAlphas!==ke||De.vertexTangents!==He||De.morphTargets!==Le||De.morphNormals!==et||De.morphColors!==rt||De.toneMapping!==Et||De.morphTargetsCount!==tt)&&(st=!0):(st=!0,De.__version=K.version);let xn=De.currentProgram;st===!0&&(xn=so(K,k,H));let hr=!1,en=!1,cs=!1;const gt=xn.getUniforms(),ln=De.uniforms;if(ee.useProgram(xn.program)&&(hr=!0,en=!0,cs=!0),K.id!==E&&(E=K.id,en=!0),hr||S!==M){ee.buffers.depth.getReversed()?(F.copy(M.projectionMatrix),y0(F),x0(F),gt.setValue(y,"projectionMatrix",F)):gt.setValue(y,"projectionMatrix",M.projectionMatrix),gt.setValue(y,"viewMatrix",M.matrixWorldInverse);const $t=gt.map.cameraPosition;$t!==void 0&&$t.setValue(y,ae.setFromMatrixPosition(M.matrixWorld)),q.logarithmicDepthBuffer&&gt.setValue(y,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&gt.setValue(y,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,en=!0,cs=!0)}if(H.isSkinnedMesh){gt.setOptional(y,H,"bindMatrix"),gt.setOptional(y,H,"bindMatrixInverse");const Vt=H.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),gt.setValue(y,"boneTexture",Vt.boneTexture,b))}H.isBatchedMesh&&(gt.setOptional(y,H,"batchingTexture"),gt.setValue(y,"batchingTexture",H._matricesTexture,b),gt.setOptional(y,H,"batchingIdTexture"),gt.setValue(y,"batchingIdTexture",H._indirectTexture,b),gt.setOptional(y,H,"batchingColorTexture"),H._colorsTexture!==null&&gt.setValue(y,"batchingColorTexture",H._colorsTexture,b));const un=X.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Fe.update(H,X,xn),(en||De.receiveShadow!==H.receiveShadow)&&(De.receiveShadow=H.receiveShadow,gt.setValue(y,"receiveShadow",H.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ln.envMap.value=Ce,ln.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&k.environment!==null&&(ln.envMapIntensity.value=k.environmentIntensity),en&&(gt.setValue(y,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&um(ln,cs),he&&K.fog===!0&&ue.refreshFogUniforms(ln,he),ue.refreshMaterialUniforms(ln,K,V,j,p.state.transmissionRenderTarget[M.id]),jo.upload(y,Mu(De),ln,b)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(jo.upload(y,Mu(De),ln,b),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&gt.setValue(y,"center",H.center),gt.setValue(y,"modelViewMatrix",H.modelViewMatrix),gt.setValue(y,"normalMatrix",H.normalMatrix),gt.setValue(y,"modelMatrix",H.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Vt=K.uniformsGroups;for(let $t=0,Ca=Vt.length;$t<Ca;$t++){const zi=Vt[$t];O.update(zi,xn),O.bind(zi,xn)}}return xn}function um(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function dm(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,k,X){J.get(M.texture).__webglTexture=k,J.get(M.depthTexture).__webglTexture=X;const K=J.get(M);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=X===void 0,K.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,k){const X=J.get(M);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0};const hm=y.createFramebuffer();this.setRenderTarget=function(M,k=0,X=0){N=M,P=k,C=X;let K=!0,H=null,he=!1,Me=!1;if(M){const Ce=J.get(M);if(Ce.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(y.FRAMEBUFFER,null),K=!1;else if(Ce.__webglFramebuffer===void 0)b.setupRenderTarget(M);else if(Ce.__hasExternalTextures)b.rebindTextures(M,J.get(M.texture).__webglTexture,J.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Le=M.depthTexture;if(Ce.__boundDepthTexture!==Le){if(Le!==null&&J.has(Le)&&(M.width!==Le.image.width||M.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(M)}}const ke=M.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Me=!0);const He=J.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(He[k])?H=He[k][X]:H=He[k],he=!0):M.samples>0&&b.useMultisampledRTT(M)===!1?H=J.get(M).__webglMultisampledFramebuffer:Array.isArray(He)?H=He[X]:H=He,D.copy(M.viewport),U.copy(M.scissor),B=M.scissorTest}else D.copy(Re).multiplyScalar(V).floor(),U.copy(Ie).multiplyScalar(V).floor(),B=Je;if(X!==0&&(H=hm),ee.bindFramebuffer(y.FRAMEBUFFER,H)&&K&&ee.drawBuffers(M,H),ee.viewport(D),ee.scissor(U),ee.setScissorTest(B),he){const Ce=J.get(M.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ce.__webglTexture,X)}else if(Me){const Ce=J.get(M.texture),ke=k;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ce.__webglTexture,X,ke)}else if(M!==null&&X!==0){const Ce=J.get(M.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Ce.__webglTexture,X)}E=-1},this.readRenderTargetPixels=function(M,k,X,K,H,he,Me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){ee.bindFramebuffer(y.FRAMEBUFFER,we);try{const Ce=M.texture,ke=Ce.format,He=Ce.type;if(!q.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-K&&X>=0&&X<=M.height-H&&y.readPixels(k,X,K,H,ze.convert(ke),ze.convert(He),he)}finally{const Ce=N!==null?J.get(N).__webglFramebuffer:null;ee.bindFramebuffer(y.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(M,k,X,K,H,he,Me){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){const Ce=M.texture,ke=Ce.format,He=Ce.type;if(!q.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=M.width-K&&X>=0&&X<=M.height-H){ee.bindFramebuffer(y.FRAMEBUFFER,we);const Le=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Le),y.bufferData(y.PIXEL_PACK_BUFFER,he.byteLength,y.STREAM_READ),y.readPixels(k,X,K,H,ze.convert(ke),ze.convert(He),0);const et=N!==null?J.get(N).__webglFramebuffer:null;ee.bindFramebuffer(y.FRAMEBUFFER,et);const rt=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await v0(y,rt,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Le),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,he),y.deleteBuffer(Le),y.deleteSync(rt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,k=null,X=0){M.isTexture!==!0&&(Ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1]);const K=Math.pow(2,-X),H=Math.floor(M.image.width*K),he=Math.floor(M.image.height*K),Me=k!==null?k.x:0,we=k!==null?k.y:0;b.setTexture2D(M,0),y.copyTexSubImage2D(y.TEXTURE_2D,X,0,0,Me,we,H,he),ee.unbindTexture()};const fm=y.createFramebuffer(),pm=y.createFramebuffer();this.copyTextureToTexture=function(M,k,X=null,K=null,H=0,he=null){M.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,M=arguments[1],k=arguments[2],he=arguments[3]||0,X=null),he===null&&(H!==0?(Ir("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=H,H=0):he=0);let Me,we,Ce,ke,He,Le,et,rt,Et;const yt=M.isCompressedTexture?M.mipmaps[he]:M.image;if(X!==null)Me=X.max.x-X.min.x,we=X.max.y-X.min.y,Ce=X.isBox3?X.max.z-X.min.z:1,ke=X.min.x,He=X.min.y,Le=X.isBox3?X.min.z:0;else{const un=Math.pow(2,-H);Me=Math.floor(yt.width*un),we=Math.floor(yt.height*un),M.isDataArrayTexture?Ce=yt.depth:M.isData3DTexture?Ce=Math.floor(yt.depth*un):Ce=1,ke=0,He=0,Le=0}K!==null?(et=K.x,rt=K.y,Et=K.z):(et=0,rt=0,Et=0);const tt=ze.convert(k.format),De=ze.convert(k.type);let Dt;k.isData3DTexture?(b.setTexture3D(k,0),Dt=y.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(b.setTexture2DArray(k,0),Dt=y.TEXTURE_2D_ARRAY):(b.setTexture2D(k,0),Dt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,k.unpackAlignment);const st=y.getParameter(y.UNPACK_ROW_LENGTH),xn=y.getParameter(y.UNPACK_IMAGE_HEIGHT),hr=y.getParameter(y.UNPACK_SKIP_PIXELS),en=y.getParameter(y.UNPACK_SKIP_ROWS),cs=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,yt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,yt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,ke),y.pixelStorei(y.UNPACK_SKIP_ROWS,He),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Le);const gt=M.isDataArrayTexture||M.isData3DTexture,ln=k.isDataArrayTexture||k.isData3DTexture;if(M.isDepthTexture){const un=J.get(M),Vt=J.get(k),$t=J.get(un.__renderTarget),Ca=J.get(Vt.__renderTarget);ee.bindFramebuffer(y.READ_FRAMEBUFFER,$t.__webglFramebuffer),ee.bindFramebuffer(y.DRAW_FRAMEBUFFER,Ca.__webglFramebuffer);for(let zi=0;zi<Ce;zi++)gt&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,J.get(M).__webglTexture,H,Le+zi),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,J.get(k).__webglTexture,he,Et+zi)),y.blitFramebuffer(ke,He,Me,we,et,rt,Me,we,y.DEPTH_BUFFER_BIT,y.NEAREST);ee.bindFramebuffer(y.READ_FRAMEBUFFER,null),ee.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||J.has(M)){const un=J.get(M),Vt=J.get(k);ee.bindFramebuffer(y.READ_FRAMEBUFFER,fm),ee.bindFramebuffer(y.DRAW_FRAMEBUFFER,pm);for(let $t=0;$t<Ce;$t++)gt?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,un.__webglTexture,H,Le+$t):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,un.__webglTexture,H),ln?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Vt.__webglTexture,he,Et+$t):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Vt.__webglTexture,he),H!==0?y.blitFramebuffer(ke,He,Me,we,et,rt,Me,we,y.COLOR_BUFFER_BIT,y.NEAREST):ln?y.copyTexSubImage3D(Dt,he,et,rt,Et+$t,ke,He,Me,we):y.copyTexSubImage2D(Dt,he,et,rt,ke,He,Me,we);ee.bindFramebuffer(y.READ_FRAMEBUFFER,null),ee.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else ln?M.isDataTexture||M.isData3DTexture?y.texSubImage3D(Dt,he,et,rt,Et,Me,we,Ce,tt,De,yt.data):k.isCompressedArrayTexture?y.compressedTexSubImage3D(Dt,he,et,rt,Et,Me,we,Ce,tt,yt.data):y.texSubImage3D(Dt,he,et,rt,Et,Me,we,Ce,tt,De,yt):M.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,he,et,rt,Me,we,tt,De,yt.data):M.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,he,et,rt,yt.width,yt.height,tt,yt.data):y.texSubImage2D(y.TEXTURE_2D,he,et,rt,Me,we,tt,De,yt);y.pixelStorei(y.UNPACK_ROW_LENGTH,st),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,xn),y.pixelStorei(y.UNPACK_SKIP_PIXELS,hr),y.pixelStorei(y.UNPACK_SKIP_ROWS,en),y.pixelStorei(y.UNPACK_SKIP_IMAGES,cs),he===0&&k.generateMipmaps&&y.generateMipmap(Dt),ee.unbindTexture()},this.copyTextureToTexture3D=function(M,k,X=null,K=null,H=0){return M.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,K=arguments[1]||null,M=arguments[2],k=arguments[3],H=arguments[4]||0),Ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,k,X,K,H)},this.initRenderTarget=function(M){J.get(M).__webglFramebuffer===void 0&&b.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?b.setTextureCube(M,0):M.isData3DTexture?b.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?b.setTexture2DArray(M,0):b.setTexture2D(M,0),ee.unbindTexture()},this.resetState=function(){P=0,C=0,N=null,ee.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function Vh(n,e){if(e===Gy)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Al||e===Dp){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Al)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class yT extends os{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ET(t)}),this.register(function(t){return new TT(t)}),this.register(function(t){return new UT(t)}),this.register(function(t){return new NT(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new wT(t)}),this.register(function(t){return new RT(t)}),this.register(function(t){return new CT(t)}),this.register(function(t){return new PT(t)}),this.register(function(t){return new MT(t)}),this.register(function(t){return new IT(t)}),this.register(function(t){return new AT(t)}),this.register(function(t){return new DT(t)}),this.register(function(t){return new LT(t)}),this.register(function(t){return new bT(t)}),this.register(function(t){return new OT(t)}),this.register(function(t){return new BT(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Ns.extractUrlBase(e);o=Ns.resolveURL(l,this.path)}else o=Ns.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Jp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===sm){try{o[$e.KHR_BINARY_GLTF]=new kT(e)}catch(d){r&&r(d);return}s=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new JT(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case $e.KHR_MATERIALS_UNLIT:o[d]=new ST;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[d]=new HT(s,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[d]=new zT;break;case $e.KHR_MESH_QUANTIZATION:o[d]=new VT;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function xT(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class bT{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ge(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Kt);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Qp(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Sx(u),l.distance=d;break;case"spot":l=new xx(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ii(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class ST{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return sr}extendParams(e,t,i){const r=[];e.color=new Ge(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Kt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Pt))}return Promise.all(r)}}class MT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class ET{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(a,a)}return Promise.all(s)}}class TT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class AT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class wT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Kt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Pt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class RT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class CT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(a[0],a[1],a[2],Kt),Promise.all(s)}}class PT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class IT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(a[0],a[1],a[2],Kt),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Pt)),Promise.all(s)}}class LT{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class DT{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class UT{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class NT{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class FT{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class OT{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=r.byteOffset||0,l=r.byteLength||0,u=r.count,d=r.byteStride,h=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,r.mode,r.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(f),u,d,h,r.mode,r.filter),f})})}else return null}}class BT{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const l of r.primitives)if(l.mode!==fn.TRIANGLES&&l.mode!==fn.TRIANGLE_STRIP&&l.mode!==fn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),d=u.isGroup?u.children:[u],h=l[0].count,f=[];for(const g of d){const _=new We,m=new z,p=new ki,A=new z(1,1,1),T=new Z0(g.geometry,g.material,h);for(let x=0;x<h;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&A.fromBufferAttribute(c.SCALE,x),T.setMatrixAt(x,_.compose(m,p,A));for(const x in c)if(x==="_COLOR_0"){const I=c[x];T.instanceColor=new Rl(I.array,I.itemSize,I.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);_t.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),f.push(T)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const sm="glTF",xs=12,Gh={JSON:1313821514,BIN:5130562};class kT{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,xs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-xs,s=new DataView(e,xs);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Gh.JSON){const l=new Uint8Array(e,xs+o,a);this.content=i.decode(l)}else if(c===Gh.BIN){const l=xs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class HT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const d=Ll[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Ll[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],f=Gr[h.componentType];l[d]=f.name,c[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){r.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}d(f)},a,l,Kt,h)})})}}class zT{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class VT{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class om extends io{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=r-t,d=(i-t)/u,h=d*d,f=h*d,g=e*l,_=g-l,m=-2*f+3*h,p=f-h,A=1-m,T=p-h+d;for(let x=0;x!==a;x++){const I=o[_+x+a],P=o[_+x+c]*u,C=o[g+x+a],N=o[g+x]*u;s[x]=A*I+T*P+m*C+p*N}return s}}const GT=new ki;class WT extends om{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return GT.fromArray(s).normalize().toArray(s),s}}const fn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Gr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wh={9728:Yt,9729:an,9984:Mp,9985:Vo,9986:Ss,9987:si},Xh={33071:Ci,33648:ia,10497:Kr},Ec={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ll={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},XT={CUBICSPLINE:void 0,LINEAR:Ks,STEP:js},Tc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qT(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new fu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ui})),n.DefaultMaterial}function Ji(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ii(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function YT(n,e,t){let i=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const d=e[l];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];if(i){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(h)}if(r){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;c.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],d=l[1],h=l[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function jT(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function KT(n){let e;const t=n.extensions&&n.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ac(t.attributes):e=n.indices+":"+Ac(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Ac(n.targets[i]);return e}function Ac(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Dl(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $T(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ZT=new We;class JT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);r=i&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new vx(this.options.manager):this.textureLoader=new Tx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Ji(s,a,r),ii(a,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Ns.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Ec[r.type],a=Gr[r.componentType],c=r.normalized===!0,l=new a(r.count*o);return Promise.resolve(new jt(l,o,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Ec[r.type],l=Gr[r.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,h=r.byteOffset||0,f=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(f&&f!==d){const p=Math.floor(h/f),A="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let T=t.cache.get(A);T||(_=new l(a,p*f,r.count*f/u),T=new q0(_,f/u),t.cache.add(A,T)),m=new lu(T,c,h%f/u,g)}else a===null?_=new l(r.count*c):_=new l(a,h,r.count*c),m=new jt(_,c,g);if(r.sparse!==void 0){const p=Ec.SCALAR,A=Gr[r.sparse.indices.componentType],T=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,I=new A(o[1],T,r.sparse.count*p),P=new l(o[2],x,r.sparse.count*c);a!==null&&(m=new jt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,N=I.length;C<N;C++){const E=I[C];if(m.setX(E,P[C*c]),c>=2&&m.setY(E,P[C*c+1]),c>=3&&m.setZ(E,P[C*c+2]),c>=4&&m.setW(E,P[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Wh[h.magFilter]||an,u.minFilter=Wh[h.minFilter]||si,u.wrapS=Xh[h.wrapS]||Kr,u.wrapT=Xh[h.wrapT]||Kr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Yt&&u.minFilter!==an,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(d){l=!0;const h=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(h),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new It(_);m.needsUpdate=!0,h(m)}),t.load(Ns.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),ii(d,o),d.userData.mimeType=o.mimeType||$T(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new jp,kn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new Yp,kn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return fu}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const d=r[$e.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),l.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Ge(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Kt),a.opacity=h[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,Pt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=On);const u=s.alphaMode||Tc.OPAQUE;if(u===Tc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Tc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==sr&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ze(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==sr&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==sr){const d=s.emissiveFactor;a.emissive=new Ge().setRGB(d[0],d[1],d[2],Kt)}return s.emissiveTexture!==void 0&&o!==sr&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Pt)),Promise.all(l).then(function(){const d=new o(a);return s.name&&(d.name=s.name),ii(d,s),t.associations.set(d,{materials:e}),s.extensions&&Ji(r,d,s),d})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return qh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=KT(l),d=r[u];if(d)o.push(d.promise);else{let h;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?h=s(l):h=qh(new Vn,l,t),r[u]={primitive:l,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?qT(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const A=l[f];if(m.mode===fn.TRIANGLES||m.mode===fn.TRIANGLE_STRIP||m.mode===fn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new j0(_,A):new cn(_,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===fn.TRIANGLE_STRIP?p.geometry=Vh(p.geometry,Dp):m.mode===fn.TRIANGLE_FAN&&(p.geometry=Vh(p.geometry,Al));else if(m.mode===fn.LINES)p=new ex(_,A);else if(m.mode===fn.LINE_STRIP)p=new hu(_,A);else if(m.mode===fn.LINE_LOOP)p=new tx(_,A);else if(m.mode===fn.POINTS)p=new nx(_,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&jT(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ii(p,s),m.extensions&&Ji(r,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&Ji(r,d[0],s),d[0];const h=new or;s.extensions&&Ji(r,h,s),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Zt(g0.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Aa(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ii(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const d=o[l];if(d){a.push(d);const h=new We;s!==null&&h.fromArray(s.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new uu(a,c)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let d=0,h=r.channels.length;d<h;d++){const f=r.channels[d],g=r.samplers[f.sampler],_=f.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,A=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",A)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let A=0,T=h.length;A<T;A++){const x=h[A],I=f[A],P=g[A],C=_[A],N=m[A];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const E=i._createAnimationTracks(x,I,P,C,N);if(E)for(let S=0;S<E.length;S++)p.push(E[S])}return new dx(s,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let l=0,u=a.length;l<u;l++)o.push(i.getDependency("node",a[l]));const c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const u=l[0],d=l[1],h=l[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,ZT)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new Xp:l.length>1?u=new or:l.length===1?u=l[0]:u=new _t,u!==l[0])for(let d=0,h=l.length;d<h;d++)u.add(l[d]);if(s.name&&(u.userData.name=s.name,u.name=o),ii(u,s),s.extensions&&Ji(i,u,s),s.matrix!==void 0){const d=new We;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new or;i.name&&(s.name=r.createUniqueName(i.name)),ii(s,i),i.extensions&&Ji(t,s,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(r.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,d=c.length;u<d;u++)s.add(c[u]);const l=u=>{const d=new Map;for(const[h,f]of r.associations)(h instanceof kn||h instanceof It)&&d.set(h,f);return u.traverse(h=>{const f=r.associations.get(h);f!=null&&d.set(h,f)}),d};return r.associations=l(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,c=[];Si[s.path]===Si.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(a);let l;switch(Si[s.path]){case Si.weights:l=es;break;case Si.rotation:l=ts;break;case Si.position:case Si.scale:l=ns;break;default:switch(i.itemSize){case 1:l=es;break;case 2:case 3:default:l=ns;break}break}const u=r.interpolation!==void 0?XT[r.interpolation]:Ks,d=this._getArrayFromAccessor(i);for(let h=0,f=c.length;h<f;h++){const g=new l(c[h]+"."+Si[s.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Dl(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof ts?WT:om;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function QT(n,e,t){const i=e.attributes,r=new fi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new z(c[0],c[1],c[2]),new z(l[0],l[1],l[2])),a.normalized){const u=Dl(Gr[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new z,c=new z;for(let l=0,u=s.length;l<u;l++){const d=s[l];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const _=Dl(Gr[h.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new zn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function qh(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(const o in i){const a=Ll[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Qe.workingColorSpace!==Kt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),ii(n,e),QT(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?YT(n,e.targets,t):n})}const eA={setup(){const n="ontouchstart"in window||navigator.maxTouchPoints>0,e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,t=ks((window.innerWidth<=768||e)&&n),i=()=>{if(t.value=(window.innerWidth<=768||e)&&n,l){const A=window.innerWidth/window.innerHeight,T=t.value?14:11;l.left=-T*A/2,l.right=T*A/2,l.top=T/2,l.bottom=-T/2,l.updateProjectionMatrix()}},r=ks(null),s=.001,o=.2,a=.95;let c,l,u,d=[],h=null;const f=new Fx,g=3e-4,_=5e-4;va(()=>{m(),p(),window.addEventListener("resize",i),window.addEventListener("orientationchange",i)}),ya(()=>{window.removeEventListener("resize",i),window.removeEventListener("orientationchange",i)});function m(){c=new X0;const A=window.innerWidth/window.innerHeight,T=t.value?14:11;l=new Aa(-T*A/2,T*A/2,T/2,-T/2,.1,1e3),l.position.set(0,0,11),l.lookAt(c.position);const x=t.value?.6:.8;l.zoom=x,l.updateProjectionMatrix(),u=new vT({antialias:!0,alpha:!0}),u.setSize(window.innerWidth,window.innerHeight),u.outputEncoding=Pt,u.toneMapping=bp,u.toneMappingExposure=1.2,u.domElement.style.pointerEvents="none",r.value.appendChild(u.domElement);const I=new Qp(16777215,.8);I.position.set(3,5,5),c.add(I),c.add(new Ex(16777215,.6)),t.value||(u.domElement.addEventListener("pointerdown",N),u.domElement.addEventListener("pointermove",E),u.domElement.addEventListener("pointerup",S),u.domElement.addEventListener("pointerleave",S),window.addEventListener("mousemove",C)),window.addEventListener("scroll",()=>{const U=window.scrollY,B=3e-4,Q=t.value?.4:.3,ne=x,Z=x-U*B*.5,j=Math.max(Q,Math.min(ne,Z));l.zoom=j,l.updateProjectionMatrix()}),window.addEventListener("resize",()=>{const U=window.innerWidth/window.innerHeight;l.left=-T*U/2,l.right=T*U/2,l.top=T/2,l.bottom=-T/2,l.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)}),window.addEventListener("mousemove",C),u.domElement.addEventListener("pointerdown",N),u.domElement.addEventListener("pointermove",E),u.domElement.addEventListener("pointerup",S),u.domElement.addEventListener("pointerleave",S);function P(U){let B=U;for(;B;){const Q=d.find(ne=>ne.mesh===B);if(Q)return Q;B=B.parent}return null}function C(U){if(h){u.domElement.style.pointerEvents="auto";return}const B=u.domElement.getBoundingClientRect(),Q=new Ze((U.clientX-B.left)/B.width*2-1,-((U.clientY-B.top)/B.height)*2+1);f.setFromCamera(Q,l);const ne=[];d.forEach(j=>{j.mesh.traverse(V=>{V.isMesh&&ne.push(V)})});const Z=f.intersectObjects(ne,!0);u.domElement.style.pointerEvents=Z.length>0?"auto":"none"}function N(U){const B=u.domElement.getBoundingClientRect(),Q=new Ze((U.clientX-B.left)/B.width*2-1,-((U.clientY-B.top)/B.height)*2+1);f.setFromCamera(Q,l);const ne=[];d.forEach(j=>{j.mesh.traverse(V=>{V.isMesh&&ne.push(V)})});const Z=f.intersectObjects(ne,!0);if(Z.length>0){const j=P(Z[0].object);j&&(j.isDragging=!0,h=j,j.dragStart={pointerX:U.clientX,pointerY:U.clientY,rotationX:j.mesh.rotation.x,rotationY:j.mesh.rotation.y,time:performance.now()})}}function E(U){if(h&&h.isDragging&&h.dragStart){const B=U.clientX-h.dragStart.pointerX,Q=U.clientY-h.dragStart.pointerY,ne=h.dragStart.rotationY+B*s,Z=h.dragStart.rotationX+Q*s,j=performance.now(),V=j-h.dragStart.time||16,pe=Q*s/(V/1e3)*o,ve=B*s/(V/1e3)*o;h.rotationVelocity={x:pe,y:ve},h.dragStart.pointerX=U.clientX,h.dragStart.pointerY=U.clientY,h.dragStart.rotationX=h.mesh.rotation.x,h.dragStart.rotationY=h.mesh.rotation.y,h.dragStart.time=j,h.mesh.rotation.x=Z,h.mesh.rotation.y=ne}}function S(){h&&(h.isDragging=!1,h.dragStart=null,h=null),window.dispatchEvent(new Event("mousemove"))}function D(){requestAnimationFrame(D),d.forEach(U=>{U.mesh.rotation.y+=U.autoRotationSpeed,!t.value&&!U.isDragging&&U.rotationVelocity&&(U.mesh.rotation.x+=U.rotationVelocity.x,U.mesh.rotation.y+=U.rotationVelocity.y,U.rotationVelocity.x*=a,U.rotationVelocity.y*=a)}),u.render(c,l)}D()}function p(){const A=new yT;let T,x,I;t.value?(T=[{x:-3.5,y:5,z:1.5,rotX:Math.PI/5,rotY:-Math.PI/10,rotZ:-.2},{x:-2.5,y:-6,z:0,rotX:Math.PI/10,rotY:-Math.PI/12,rotZ:-.3},{x:4,y:-1,z:.5,rotX:Math.PI/4.5,rotY:Math.PI/5,rotZ:.1}],x=["/aspan_web/assets/islandTennis.glb","/aspan_web/assets/islandFerrariF40.glb","/aspan_web/assets/islandFootball.glb"],I=.95):(T=[{x:-7.5,y:2,z:1.5,rotX:Math.PI/5,rotY:-Math.PI/10,rotZ:-.2},{x:-7.2,y:-3.5,z:.2,rotX:Math.PI/8,rotY:-Math.PI/15,rotZ:-.2},{x:7.5,y:1.8,z:.5,rotX:Math.PI/4.5,rotY:Math.PI/5,rotZ:.1},{x:7.5,y:-3.2,z:0,rotX:Math.PI/8,rotY:-Math.PI/20,rotZ:.2},{x:0,y:-4.3,z:1,rotX:Math.PI/15,rotY:0,rotZ:0}],x=["/aspan_web/assets/islandTennis.glb","/aspan_web/assets/islandHouse.glb","/aspan_web/assets/islandGarage.glb","/aspan_web/assets/islandFootball.glb","/aspan_web/assets/islandFerrariF40.glb"],I=.8),T.forEach((P,C)=>{A.load(x[C],N=>{const E=N.scene;E.position.set(P.x,P.y,P.z),E.scale.set(I,I,I),E.rotation.set(P.rotX,P.rotY,P.rotZ),c.add(E),d.push({mesh:E,isDragging:!1,rotationVelocity:{x:0,y:0},dragStart:null,autoRotationSpeed:g+Math.random()*_})},void 0,N=>console.error("Error loading model:",N))})}return{threeContainer:r}}},tA={ref:"threeContainer",class:"three-container"};function nA(n,e,t,i,r,s){return xt(),St("div",tA,null,512)}const am=vn(eA,[["render",nA],["__scopeId","data-v-22c389f1"]]),iA="/aspan_web/assets/problem-map.png",rA="/aspan_web/assets/aspan-screen-gallery.png",sA="/aspan_web/assets/lessons-square.png",oA="/aspan_web/assets/quiz-square.png",aA="/aspan_web/assets/categories-square.png",cA="/aspan_web/assets/review-rectangleh.png",lA="/aspan_web/assets/hearts-rectanglev.png",uA="/aspan_web/assets/streak-square.png",dA="/aspan_web/assets/islands-square.png",hA="/aspan_web/assets/features-topics.png",fA="/aspan_web/assets/features-lessons.png",pA="/aspan_web/assets/features-quiz.png",mA="/aspan_web/assets/features-islands.png",gA={components:{IslandContainer:am},methods:{scrollToWidgets(){const n=document.getElementById("widgets-section");n&&n.scrollIntoView({behavior:"smooth"})}}},_A={class:"hero"},vA={class:"hero-content"};function yA(n,e,t,i,r,s){const o=Br("IslandContainer");return xt(),St(Ht,null,[je(o),e[3]||(e[3]=Te("section",{class:"blue-screen"},null,-1)),Te("section",_A,[Te("div",vA,[e[1]||(e[1]=Te("h1",{class:"hero-title"},[At("Строй знания"),Te("br"),At("Остров за Островом")],-1)),e[2]||(e[2]=Te("p",{class:"hero-subtitle"},"Проходи микроуроки в игровом формате",-1)),Te("button",{class:"cta-button",onClick:e[0]||(e[0]=(...a)=>s.scrollToWidgets&&s.scrollToWidgets(...a))}," Начни свой путь ")])]),e[4]||(e[4]=Js('<section class="problem-section" data-v-63e99803><div class="problem-container" data-v-63e99803><div class="problem-statement" data-v-63e99803><h2 class="classic-heading-centred" data-v-63e99803>Нехватка обучения</h2><p class="classic-description-centred" data-v-63e99803> На сегодняшний день в стране не хватает 270,000 учебных мест и 5 тысяч учителей. В интернете нет полезнах и доступных материалов для изучения различных тем на казахском и русском языках. </p></div><div class="solution-statement" data-v-63e99803><h2 class="classic-heading-centred" data-v-63e99803>Но есть ASpan</h2><p class="classic-description-centred" data-v-63e99803> ASpan это - приложение, которое предоставляет качественные материалы в интересном игровом формате. Наши микро-уроки были специально составленные учениками и учителями НИШа для максимально легкого и быстрого усвоения информации. </p></div><div class="problem-statement-image" data-v-63e99803><img src="'+iA+'" alt="Not enough schools in Kazakhstan" data-v-63e99803></div><div class="solution-statement-image" data-v-63e99803><img src="'+rA+'" alt="Gallery of panels of ASpan app" data-v-63e99803></div></div></section><section id="widgets-section" class="widgets-section" data-v-63e99803><div class="widget-container" data-v-63e99803><div class="widget square" data-v-63e99803><img src="'+sA+'" alt="Уроки" data-v-63e99803></div><div class="widget square" data-v-63e99803><img src="'+oA+'" alt="Квиз" data-v-63e99803></div><div class="widget square" data-v-63e99803><img src="'+aA+'" alt="Острова" data-v-63e99803></div><div class="widget rectangle-h" data-v-63e99803><img src="'+cA+'" alt="Обзор" data-v-63e99803></div><div class="widget rectangle-v" data-v-63e99803><img src="'+lA+'" alt="Сердца" data-v-63e99803></div><div class="widget square" data-v-63e99803><img src="'+uA+'" alt="Стрик" data-v-63e99803></div><div class="widget square" data-v-63e99803><img src="'+dA+'" alt="Длительность" data-v-63e99803></div></div></section><section class="features-section" data-v-63e99803><div class="features-grid" data-v-63e99803><div class="topics-image first-order" data-v-63e99803><img src="'+hA+'" alt="Topics" data-v-63e99803></div><div class="topics-text second-order" data-v-63e99803><h2 class="classic-heading" data-v-63e99803>Куча различных тем</h2><p class="classic-description" data-v-63e99803> В нашем приложении представлено множество разнообразных тем, чтобы удовлетворить любые интересы пользователей. Здесь вы найдёте материалы о ЗОЖ, финансах, космосе, истории, биологии и искусстве. Каждая тема разработана с учётом современных тенденций и потребностей, чтобы вы могли получить актуальную и полезную информацию. Мы уверены, что каждый найдёт что-то интересное и полезное для себя. </p></div><div class="topics-text third-order" data-v-63e99803><h2 class="classic-heading" data-v-63e99803>Уроки на каждую тему</h2><p class="classic-description" data-v-63e99803> На каждую тему у нас есть масса уроков, которые помогут разобраться во всём от начала до конца. Все уроки понятные и логичные, так что даже если ты только начинаешь, всё получится! </p></div><div class="topics-image fourth-order" data-v-63e99803><img src="'+fA+'" alt="Topics" data-v-63e99803></div><div class="topics-image fifth-order" data-v-63e99803><img src="'+pA+'" alt="Topics" data-v-63e99803></div><div class="topics-text sixth-order" data-v-63e99803><h2 class="classic-heading" data-v-63e99803>Викторины на каждый урок</h2><p class="classic-description" data-v-63e99803> К каждому уроку у нас есть викторины и всякие интерактивные штуки, чтобы учёба была не скучной. Наши тесты и игры помогут проверить, насколько ты понял материал, и сделать процесс обучения реально интересным. Это отличный способ учиться, играя и узнавая новое! </p></div><div class="topics-text seventh-order" data-v-63e99803><h2 class="classic-heading" data-v-63e99803>Зарабатывай и строй</h2><p class="classic-description" data-v-63e99803> В нашем приложении ты зарабатываешь валюту, проходя уроки и выполняя задания. Эти деньги можно тратить на покупку островов и других крутых бонусов, что делает обучение ещё более увлекательным и мотивирующим. </p></div><div class="topics-image eighth-order" data-v-63e99803><img src="'+mA+'" alt="Topics" data-v-63e99803></div></div></section>',3))],64)}const xA=vn(gA,[["render",yA],["__scopeId","data-v-63e99803"]]),bA={name:"LearningPaths",data(){return{spaceLessons:[{title:"Солнечная система",icon:"solar-system.png"},{title:"Первые люди в космосе",icon:"first-people.png"},{title:"Марс",icon:"mars.png"}],taxesLessons:[{title:"Зачем нам нужны налоги?",icon:"why-need-taxes.png"}]}},methods:{getImageUrl(n){return"/aspan_web/assets/"+n}}},SA={class:"learning-paths-container"},MA={class:"path-section"},EA={class:"path-header"},TA={class:"path-header-icon"},AA=["src"],wA={class:"path-items-container"},RA={class:"path-items"},CA=["src","alt"],PA={class:"item-title"},IA={class:"path-section"},LA={class:"path-header"},DA={class:"path-header-icon"},UA=["src"],NA={class:"path-items-container"},FA={class:"path-items"},OA=["src","alt"],BA={class:"item-title"};function kA(n,e,t,i,r,s){return xt(),St("div",SA,[e[2]||(e[2]=Te("h1",{class:"main-heading"},"Микроуроки",-1)),e[3]||(e[3]=Te("p",{class:"main-subtitle"},"Выберите свой путь к знаниям",-1)),Te("section",MA,[Te("div",EA,[Te("div",TA,[Te("img",{src:s.getImageUrl("space-icon.png"),alt:"Space Icon"},null,8,AA)]),e[0]||(e[0]=Te("div",{class:"path-header-text"},[Te("h2",{class:"path-title"},"Космос"),Te("p",{class:"path-subtitle"},"Изучайте тайны вселенной")],-1))]),Te("div",wA,[Te("div",RA,[(xt(!0),St(Ht,null,Qo(r.spaceLessons,(o,a)=>(xt(),St("div",{key:a,class:"path-item"},[Te("img",{src:s.getImageUrl(o.icon),alt:o.title,class:"item-icon"},null,8,CA),Te("p",PA,En(o.title),1)]))),128))])])]),Te("section",IA,[Te("div",LA,[Te("div",DA,[Te("img",{src:s.getImageUrl("finances-icon.png"),alt:"Taxes Icon"},null,8,UA)]),e[1]||(e[1]=Te("div",{class:"path-header-text"},[Te("h2",{class:"path-title"},"Налоги"),Te("p",{class:"path-subtitle"},"Откройте мир финансовых отношений")],-1))]),Te("div",NA,[Te("div",FA,[(xt(!0),St(Ht,null,Qo(r.taxesLessons,(o,a)=>(xt(),St("div",{key:a,class:"path-item"},[Te("img",{src:s.getImageUrl(o.icon),alt:o.title,class:"item-icon"},null,8,OA),Te("p",BA,En(o.title),1)]))),128))])])])])}const HA=vn(bA,[["render",kA],["__scopeId","data-v-c028885d"]]),zA={};function VA(n,e){return xt(),St("h1",null,"Islands")}const GA=vn(zA,[["render",VA]]),WA={};function XA(n,e){return xt(),St("h1",null,"Volunteer")}const qA=vn(WA,[["render",XA]]),YA={};function jA(n,e){return xt(),St("h1",null,"Hackathon")}const KA=vn(YA,[["render",jA]]),$A="/aspan_web/assets/mission.png",ZA={name:"AboutUs",data(){return{history:[{date:"12.2024",title:"Грант Тәуелсіздік Ұрпақтары на 3 миллиона тенге",description:"В декабре 2024 года, команда ASpan выиграла грант размером 3 миллиона тенге.",image:"assets/timeline/tauelsizdik.png"},{date:"01.2025",title:"2 место на Zhastar Forum",description:"В январе 2025 года, команда ASpan заняла 2 место на Zhastar Forum.",image:"assets/timeline/zhastar.png"},{date:"02.2025",title:"2 место на хакатоне RIS Prime",description:"В феврале 2025 года, команда ASpan заняла 2 место на RIS Prime.",image:"assets/timeline/risprime.png"}],currentHistoryIndex:0,coreTeam:[{id:1,name:"Шоманов Асанали",role:"CEO",photo:"assets/team/asanali.png"},{id:2,name:"Толеев Нурхан",role:"CTO",photo:"assets/team/nurkhan.png"},{id:3,name:"Медетбаев Саги",role:"COO",photo:"assets/team/sagi.png"},{id:4,name:"Исенов Нариман",role:"Дизайнер",photo:"assets/team/nariman.png"},{id:5,name:"Ермек Алимжан",role:"Дизайнер",photo:"assets/team/alimzhan.png"},{id:6,name:"Кан Бен",role:"Монтажер",photo:"assets/team/ben.png"},{id:7,name:"Мендыбай Тимур",role:"SMM",photo:"assets/team/timur.png"},{id:8,name:"Баймурзина Нургуль",role:"SMM",photo:"assets/team/nurgul.png"},{id:9,name:"Мирман Исатай",role:"Составитель уроков",photo:"assets/team/isatay.png"},{id:10,name:"Саркулова Динара",role:"Составитель уроков",photo:"assets/team/dinara.png"},{id:11,name:"Мухаммеджанова Аружан",role:"Составитель уроков",photo:"assets/team/aruzhan.png"},{id:12,name:"Муссаева Аяжан",role:"Составитель уроков",photo:"assets/team/ayazhan.png"}],volunteers:[]}},computed:{currentHistory(){return this.history[this.currentHistoryIndex]}},methods:{nextHistory(){this.currentHistoryIndex<this.history.length-1&&this.currentHistoryIndex++},prevHistory(){this.currentHistoryIndex>0&&this.currentHistoryIndex--}}},JA={class:"history-section"},QA={class:"container"},ew=["src"],tw={class:"history-text"},nw={class:"history-date"},iw={class:"history-subheading"},rw={class:"history-description"},sw={class:"arrows"},ow={class:"team-section"},aw={class:"container"},cw={class:"team-category"},lw={class:"team-grid"},uw=["src","alt"],dw={class:"team-name"},hw={class:"team-role"},fw={class:"team-category"},pw={class:"team-grid"},mw=["src","alt"],gw={class:"team-name"},_w={class:"team-role"};function vw(n,e,t,i,r,s){return xt(),St("div",null,[e[5]||(e[5]=Js('<section class="mission-section" data-v-34a605d6><div class="container" data-v-34a605d6><div class="mission-text" data-v-34a605d6><h1 class="mission-heading" data-v-34a605d6>Наша миссия</h1><p class="mission-description" data-v-34a605d6> Мы стремимся вдохновлять и развивать знания, делая обучение доступным и увлекательным для каждого. Наша цель – создавать пространство, где образование превращается в яркое приключение. </p></div><div class="mission-image" data-v-34a605d6><img src="'+$A+'" alt="Mission Image" data-v-34a605d6></div></div></section>',1)),Te("section",JA,[Te("div",QA,[je(kc,{name:"slide-fade",mode:"out-in"},{default:bt(()=>[(xt(),St("div",{class:"history-image",key:"image-"+r.currentHistoryIndex},[Te("img",{src:s.currentHistory.image,alt:"History Image"},null,8,ew)]))]),_:1}),Te("div",tw,[je(kc,{name:"slide-fade",mode:"out-in"},{default:bt(()=>[(xt(),St("div",{key:"text-"+r.currentHistoryIndex},[Te("h2",nw,En(s.currentHistory.date),1),Te("h3",iw,En(s.currentHistory.title),1),Te("p",rw,En(s.currentHistory.description),1)]))]),_:1}),Te("div",sw,[Te("span",{class:Fs(["arrow",{disabled:r.currentHistoryIndex<=0}]),onClick:e[0]||(e[0]=(...o)=>s.prevHistory&&s.prevHistory(...o))}," ↑ ",2),Te("span",{class:Fs(["arrow",{disabled:r.currentHistoryIndex>=r.history.length-1}]),onClick:e[1]||(e[1]=(...o)=>s.nextHistory&&s.nextHistory(...o))}," ↓ ",2)])])])]),Te("section",ow,[Te("div",aw,[e[4]||(e[4]=Te("h2",{class:"section-heading"},"Наша команда",-1)),Te("div",cw,[e[2]||(e[2]=Te("h3",{class:"category-heading"},"Основные участники",-1)),Te("div",lw,[(xt(!0),St(Ht,null,Qo(r.coreTeam,o=>(xt(),St("div",{key:o.id,class:"team-card"},[Te("img",{src:o.photo,alt:o.name,class:"team-photo"},null,8,uw),Te("h4",dw,En(o.name),1),Te("p",hw,En(o.role),1)]))),128))])]),Te("div",fw,[e[3]||(e[3]=Te("h3",{class:"category-heading"},"Волонтеры",-1)),Te("div",pw,[(xt(!0),St(Ht,null,Qo(r.volunteers,o=>(xt(),St("div",{key:o.id,class:"team-card"},[Te("img",{src:o.photo,alt:o.name,class:"team-photo"},null,8,mw),Te("h4",gw,En(o.name),1),Te("p",_w,En(o.role),1)]))),128))])])])])])}const yw=vn(ZA,[["render",vw],["__scopeId","data-v-34a605d6"]]),xw={};function bw(n,e){return e[0]||(e[0]=Js('<h1 data-v-aa944c40><strong data-v-aa944c40>ASpan Terms and Conditions of Service</strong></h1><p data-v-aa944c40><strong data-v-aa944c40>Last Updated:</strong> February 28, 2025</p><h2 data-v-aa944c40><strong data-v-aa944c40>1. Introduction &amp; Acceptance of Terms</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>1.1What ASpan Is:</strong> ASpan is a non-commercial microlearning educational platform that provides short, factual, and clear pieces of knowledge on various topics. The Service is operated by ASpan, located at Kazakhstan, Astana, Seifullin 8 street (referred to in these Terms as &quot;ASpan,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using ASpan (including any content, functionality, and services offered on or through it), <strong data-v-aa944c40>you agree to be bound by these Terms and Conditions of Service</strong> (the &quot;Terms&quot;). These Terms form a legally binding agreement between you (the user) and ASpan. If you do not agree with any part of these Terms, <strong data-v-aa944c40>do not use the Service</strong>. </p><p data-v-aa944c40><strong data-v-aa944c40>1.2Acceptance of Terms:</strong> Your use of ASpan indicates your acceptance of and compliance with these Terms. You understand that these Terms may be updated from time to time as described in Section 9 below. In addition, ASpan has a separate <strong data-v-aa944c40>Privacy Policy</strong> that describes how we collect, use, and protect your personal information. Please review the Privacy Policy as it is incorporated by reference into these Terms. Using ASpan means you also agree to the Privacy Policy. If you have any questions about these Terms, please contact us at <strong data-v-aa944c40>[Contact Information]</strong> before using the Service. </p><h2 data-v-aa944c40><strong data-v-aa944c40>2. Eligibility &amp; User Accounts</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>2.1Age Requirements:</strong> ASpan is intended for users who are <strong data-v-aa944c40>12 years of age or older</strong>. By using the Service, you represent and warrant that you meet this age requirement. If you are under the age of majority in your jurisdiction (typically under 18 years old), you must have the permission of a parent or legal guardian to use ASpan. <strong data-v-aa944c40>Users between 12 and 17 years of age</strong> should review these Terms with a parent or guardian, and by using the Service you confirm that such review has occurred and that your parent/guardian consents to your use of ASpan. If you are <strong data-v-aa944c40>under 12 years old, you are not permitted to use ASpan</strong>. We reserve the right to request proof of age or parental consent at any time to verify compliance with this section. </p><p data-v-aa944c40><strong data-v-aa944c40>2.2 Account Registration:</strong> To access certain features of ASpan, you may need to create a user account. When registering an account, you agree to provide accurate, current, and complete information about yourself. At a minimum, account registration will require you to choose a username and provide a valid email address and a secure password. This information, along with a record of your last activity date on the platform, will be stored in our database (operated via AppWrite). You agree to keep your information up-to-date and to not misrepresent your identity. <strong data-v-aa944c40>Accounts are for personal use only</strong> – you may not create an account on behalf of someone else without proper authorization, and you may not sell, transfer, or license your account to any other person. </p><p data-v-aa944c40><strong data-v-aa944c40>2.3 Account Security:</strong> You are responsible for maintaining the confidentiality of your login credentials and for restricting access to your account. <strong data-v-aa944c40>You assume full responsibility for all activities that occur under your account</strong> (whether or not authorized by you). If you believe your account has been compromised or accessed without authorization, you must notify ASpan immediately. We are not liable for any loss or damage arising from your failure to safeguard your account information. ASpan reserves the right to disable or terminate any account that it suspects is involved in unauthorized activity or in violation of these Terms. </p><h2 data-v-aa944c40><strong data-v-aa944c40>3. Description of Services</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>3.1 Educational Content:</strong> ASpan provides a collection of microlearning content designed to help users quickly learn facts and key points about a wide range of topics (for example, science, history, technology, and more). Each learning module or snippet on ASpan is intentionally brief, focusing on clear and factual information that is easy to digest. The content on ASpan is generated with the assistance of advanced AI (specifically, a GPT-based language model) and is then reviewed and fact-checked by our team for accuracy and clarity. We strive to ensure that the information presented is reliable and up-to-date. Along with the textual content, ASpan includes references or links to factual sources (such as articles, textbooks, or reputable websites) so that users can verify information and explore the topic further if they wish. <strong data-v-aa944c40>These source links are provided for transparency and educational value</strong>, and by clicking them you will be navigating to third-party sites (see Section 6 regarding third-party links and our liability). </p><p data-v-aa944c40><strong data-v-aa944c40>3.2 Visual Aids:</strong> To enhance the learning experience, ASpan supplements text-based content with visual elements, including images and graphics. Some of these visuals are generated by artificial intelligence tools and others are created by human designers. Notably, ASpan collaborates with <strong data-v-aa944c40>Krea AI</strong> for certain AI-generated imagery under a formal agreement, which ensures ASpan has the rights to use and display those visuals. All visuals are selected or produced to be relevant to the educational content and to aid in understanding the material. While the visuals are illustrative and intended to reinforce learning, they are not meant to be exact representations in every context (for example, an AI-generated historical scene is for concept illustration only). </p><p data-v-aa944c40><strong data-v-aa944c40>3.3 Non-Commercial Service:</strong> ASpan is a non-commercial platform, meaning that we do not charge users for access to the educational content and we are not primarily driven by profit motives. The Service is provided for your personal, non-commercial use to support learning. We may introduce new features, content, or functional improvements over time to better serve our users. Any new features or tools which are added to ASpan will also be subject to these Terms. We reserve the right to modify or discontinue (temporarily or permanently) the Service or any part of it with or without notice, though we will endeavor to inform users of significant changes in advance when possible. </p><h2 data-v-aa944c40><strong data-v-aa944c40>4. User Conduct &amp; Restrictions</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>4.1</strong> When using ASpan, you agree to conduct yourself in a responsible, respectful manner. <strong data-v-aa944c40>You must use the Service in compliance with all applicable laws and regulations</strong>. By using ASpan, you further agree that you will <strong data-v-aa944c40>not</strong> engage in any of the following prohibited activities: </p><ul data-v-aa944c40><li data-v-aa944c40><strong data-v-aa944c40>Misrepresentation and Content Modification:</strong> ASpan is committed to maintaining the integrity and accuracy of its educational content. Users must not misrepresent ASpan’s materials by modifying, distorting, or falsifying lesson content (e.g., through screenshots, editing, or other manipulations) to present misleading or false information. Any attempt to alter ASpan’s educational materials in a way that misleads others or portrays the platform in a false or harmful manner is strictly prohibited </li></ul><ul data-v-aa944c40><li data-v-aa944c40><strong data-v-aa944c40>Disruption of Service:</strong> Do not disrupt or interfere with the normal operation of ASpan. This means you must not attempt to interfere with the servers, networks, or infrastructure of the Service (for example, by transmitting worms, viruses, malware, or any code of a destructive nature). You agree not to initiate any attacks, overload, or flood the platform, and not to take any action that imposes an unreasonable or disproportionately large load on our infrastructure.<br data-v-aa944c40></li><li data-v-aa944c40><strong data-v-aa944c40>Unauthorized Access:</strong> Do not attempt to gain unauthorized access to any portion or feature of ASpan, including other users’ accounts, or any system or network connected to the Service. This includes refraining from hacking, password “mining,” or any other illegitimate means of accessing data not intended for you. If you are not explicitly authorized to access an area of the Service, you must not try to do so.<br data-v-aa944c40></li><li data-v-aa944c40><strong data-v-aa944c40>No Data Scraping or Mining:</strong> You are expressly prohibited from using any automated means (such as scripts, bots, spiders, or crawlers) to access, query, or collect information or content from ASpan without our prior written permission. This includes <strong data-v-aa944c40>no web scraping, data mining, or harvesting of content or users’ information</strong>. You also agree not to use the Service or its content in order to develop, train, or improve any data-generating or AI model (for example, using ASpan content to train another AI) without our explicit consent.<br data-v-aa944c40></li><li data-v-aa944c40><strong data-v-aa944c40>No Reverse Engineering:</strong> You must not copy, decompile, reverse engineer, disassemble, or attempt to derive the source code or underlying ideas or algorithms of any part of ASpan (except as permitted by applicable law). This prohibition extends to any software or technology used in providing the Service. Tampering with or attempting to probe, scan, or test the vulnerability of any ASpan system or network without authorization is strictly forbidden.<br data-v-aa944c40></li><li data-v-aa944c40><strong data-v-aa944c40>Unauthorized Use of Content:</strong> ASpan’s content is provided for your personal learning. You agree not to reproduce, duplicate, copy, sell, trade, resell, or exploit any portion of the Service or content obtained through the Service for any commercial purpose. You may not remove any copyright, trademark, or other proprietary notices displayed on the content. (See Section 5 on Intellectual Property for more details on content usage rights.)<br data-v-aa944c40></li><li data-v-aa944c40><strong data-v-aa944c40>Respect for Others:</strong> IDo not collect or store personal data about other users without their consent. Any form of cheating, plagiarism, or academic dishonesty using the platform’s content is also prohibited – use ASpan to learn and educate yourself, not to deceive others about your knowledge.<br data-v-aa944c40></li></ul><p data-v-aa944c40><strong data-v-aa944c40>4.2</strong> Violating any of the above rules <strong data-v-aa944c40>may result in immediate suspension or termination of your access to ASpan</strong> (see Section 8 on Termination) and may also expose you to civil or criminal liability. ASpan reserves the right to investigate any misuse of the Service and to cooperate with law enforcement in prosecuting users who violate the law. We also reserve the right (but assume no obligation) to monitor your use of the Service for compliance with these Terms. </p><h2 data-v-aa944c40><strong data-v-aa944c40>5. Intellectual Property &amp; Licensing</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>5.1 ASpan Content Ownership:</strong> All content available on ASpan – including but not limited to text, articles, explanations, images, graphics, illustrations, designs, and the overall compilation and arrangement of such content – is the <strong data-v-aa944c40>intellectual property of ASpan</strong> or its licensors and is protected by copyright, trademark, and other intellectual property laws. This means ASpan (or our content providers) retains all rights, title, and interest in the content and the Service. The <strong data-v-aa944c40>microlearning texts</strong> and educational materials on ASpan are original works generated and curated by us (with the assistance of AI and human fact-checkers), and the <strong data-v-aa944c40>visual elements</strong> (images, graphics) are created or obtained by us, including those produced in collaboration with <strong data-v-aa944c40>Krea AI</strong> under a formal agreement. Our agreement with Krea AI grants ASpan the rights to use and display the AI-generated visuals as part of our content. All such materials are collectively referred to as &quot;ASpan Content.&quot; </p><p data-v-aa944c40><strong data-v-aa944c40>5.2 Trademarks:</strong> The name <strong data-v-aa944c40>&quot;ASpan&quot;</strong>, our logos, and any other ASpan product or service names or slogans that appear on the Service are trademarks or service marks of [Company Legal Name] (unless otherwise noted). You are not granted any right or license to use any of ASpan’s trademarks by these Terms. Any unauthorized use of our trademarks is strictly prohibited. Other trademarks, logos, or service marks appearing in the Service (for example, names of third-party source sites or tools like &quot;Krea AI&quot;) are the property of their respective owners. </p><p data-v-aa944c40><strong data-v-aa944c40>5.3 Limited License to Users:</strong> Subject to your compliance with these Terms, ASpan grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Service <strong data-v-aa944c40>for your personal, non-commercial educational purposes only</strong>. This license allows you to view and use the ASpan Content through our platform interface. <strong data-v-aa944c40>However, this license does not permit you to</strong> do any of the following without our prior written consent: </p><ul data-v-aa944c40><li data-v-aa944c40> Download, copy, or save ASpan Content to a personal repository (except as necessary for caching in your web browser or unless explicitly enabled by a download feature on the Service). </li><li data-v-aa944c40> Reproduce or <strong data-v-aa944c40>redistribute</strong> ASpan Content on any other website, app, publication, or platform. </li><li data-v-aa944c40> Modify, translate, or create derivative works based on ASpan Content (for example, you may not take our text or images and alter them to publish elsewhere). </li><li data-v-aa944c40><strong data-v-aa944c40>Publish or commercialize</strong> any ASpan Content, i.e., you cannot sell, rent, or license our educational materials to others. </li><li data-v-aa944c40> Remove or obscure any copyright or other proprietary notices contained in ASpan or in ASpan Content. </li><li data-v-aa944c40> Use ASpan Content in a manner that suggests any association with or endorsement by ASpan or [Company Name] without our approval. </li></ul><p data-v-aa944c40><strong data-v-aa944c40>5.4</strong> Any use of the Service or content outside the scope of the permitted use as set forth in these Terms <strong data-v-aa944c40>is strictly prohibited</strong> and will terminate the license granted herein. If you wish to use ASpan Content beyond what is allowed by these Terms (for example, if a teacher or organization wants to distribute materials in a classroom setting or include our content in a presentation), please <strong data-v-aa944c40>contact us for permission</strong>. We may be open to certain educational uses, but you must obtain written permission from us and comply with any licensing terms we provide. </p><p data-v-aa944c40><strong data-v-aa944c40>5.5 User-Submitted Content:</strong> (Note: ASpan is primarily a one-way content platform, and we do not currently allow users to post their own content publicly. If in the future ASpan offers features like user comments, contributions, or content sharing, additional terms will govern those submissions. For now, this section is to clarify intellectual property in ASpan’s content itself.) </p><p data-v-aa944c40><strong data-v-aa944c40>5.6 Reservation of Rights:</strong> All rights not expressly granted to you in these Terms are reserved by ASpan and its content providers. This means that except for the limited license above, you have no additional rights or ownership in the content or Service. ASpan may at any time revoke the permission to use content if you violate these Terms. Misuse of ASpan’s intellectual property may result in legal action, in addition to account termination. </p><h2 data-v-aa944c40><strong data-v-aa944c40>6. Disclaimers &amp; Limitations of Liability</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>6.1 &quot;As Is&quot; Service Disclaimer:</strong> ASpan is provided to you on an <strong data-v-aa944c40>&quot;as is&quot; and &quot;as available&quot;</strong> basis. While we are passionate about providing high-quality, accurate educational content, <strong data-v-aa944c40>ASpan makes no warranty or guarantee</strong> that the Service will meet your requirements or expectations. <strong data-v-aa944c40>To the fullest extent permitted by law</strong>, ASpan disclaims all warranties of any kind, whether express, implied, or statutory, regarding the Service and the content. This includes, but is not limited to, any implied warranties of <strong data-v-aa944c40>accuracy, completeness, reliability, merchantability, fitness for a particular purpose, title, non-infringement</strong>, or any warranty that the Service will be uninterrupted, error-free, secure, or free of harmful components (like viruses). We do not warrant that any errors or defects in the content will be corrected, although we strive to fix mistakes when identified. The educational information provided on ASpan is <strong data-v-aa944c40>for general knowledge purposes only</strong> and should not be relied upon as professional advice. For example, nothing on ASpan is intended to constitute medical, legal, financial, or other professional advice specific to your situation. Always consult a qualified professional for advice in those areas. </p><p data-v-aa944c40><strong data-v-aa944c40>6.2 Content Accuracy:</strong> ASpan’s team works hard to fact-check and verify the information presented. However, we <strong data-v-aa944c40>do not guarantee</strong> that all content is 100% accurate, up-to-date, or error-free. Sources may have inaccuracies or become outdated, and AI-generated content can occasionally contain mistakes despite our reviews. <strong data-v-aa944c40>Use your judgment</strong> and cross-reference critical information with the provided sources or other trusted resources. By using ASpan, you understand and agree that any reliance you place on the content is <strong data-v-aa944c40>at your own risk</strong>. If you spot an error or have a concern about any content, we welcome your feedback so we can improve the Service. </p><p data-v-aa944c40><strong data-v-aa944c40>6.3 Third-Party Links &amp; Sources:</strong> ASpan content often includes links or references to third-party websites and sources (for example, a link to a Wikipedia article, scientific journal, or news site for further reading or verification). These links are provided for your convenience and to enhance your learning. However, <strong data-v-aa944c40>ASpan has no control over the content or practices of those third-party sites</strong>. We do not endorse, guarantee, or assume responsibility for the information, services, or products that third-party websites may offer. Once you click a third-party link and leave ASpan, <strong data-v-aa944c40>these Terms no longer govern</strong>; any browsing or interaction on other websites is subject to that website’s own terms and policies. ASpan will not be liable for any loss or damage that may arise from your use of, or reliance on, content from third-party sources. We encourage you to review the terms and privacy policies of any third-party sites you visit. </p><p data-v-aa944c40><strong data-v-aa944c40>6.4 Limitation of Liability:</strong><strong data-v-aa944c40>To the maximum extent permitted by applicable law</strong>, in no event shall ASpan, or any of our affiliates, officers, employees, agents, partners, or licensors be liable for any <strong data-v-aa944c40>indirect, incidental, special, consequential, or punitive damages</strong> whatsoever. This includes, without limitation, damages for lost profits, lost data, loss of goodwill, business interruption, or other intangible losses arising out of or in connection with (a) your access to, use of, or inability to use the Service; (b) any conduct or content of any third party on the Service or any linked website; or (c) any content obtained from the Service, <strong data-v-aa944c40>even if</strong> ASpan has been advised of the possibility of such damages. </p><p data-v-aa944c40><strong data-v-aa944c40>6.5 </strong>In addition, ASpan’s total cumulative liability for <strong data-v-aa944c40>any claims arising out of or related to the Service</strong> or these Terms will be <strong data-v-aa944c40>limited to the greater of the amount (if any) you paid us to use the Service in the past six months or USD $50</strong>. (Since ASpan is non-commercial and typically free to use, this means our liability to you is minimal or zero.) This limitation applies to any claim, whether based on warranty, contract, statute, tort (including negligence) or any other legal theory, and whether or not ASpan has been informed of the possibility of such damage. </p><p data-v-aa944c40><strong data-v-aa944c40>6.6 Exceptions:</strong> Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. <strong data-v-aa944c40>If you reside in such a jurisdiction</strong>, some of the above limitations may not apply to you to the extent disallowed by applicable law. In such cases, ASpan’s liability will be limited to the <strong data-v-aa944c40>maximum extent permitted by law</strong>. Nothing in these Terms is intended to exclude or restrict any liability that cannot be excluded by law (for example, certain statutory warranties or liabilities under applicable consumer protection laws). </p><p data-v-aa944c40><strong data-v-aa944c40>6.7 Indemnification:</strong> You agree to indemnify and hold harmless ASpan,, its officers, employees, and agents from any claims, losses, liabilities, and expenses (including reasonable attorneys’ fees) that arise out of or relate to your misuse of the Service, violation of these Terms, or violation of any law or rights of a third party. We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, in which case you agree to cooperate with us in asserting any available defenses. </p><h2 data-v-aa944c40><strong data-v-aa944c40>7. Data Collection &amp; Privacy</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>7.1 </strong>Your privacy is important to us. ASpan limits the personal data it collects and uses it in accordance with our<a href="[https://chatgpt.com/c/67c1e7c1-7b34-8006-bdf0-4ee92fd50fce#](https://chatgpt.com/c/67c1e7c1-7b34-8006-bdf0-4ee92fd50fce#)" data-v-aa944c40> Privacy Policy</a> (see that document for full details). <strong data-v-aa944c40>By using ASpan, you agree to the collection and use of data as described here and in the Privacy Policy.</strong> Below is a summary of what data we collect and how we handle it: </p><ul data-v-aa944c40><li data-v-aa944c40><strong data-v-aa944c40>Personal Information Collected:</strong> When you create an account on ASpan, we collect certain information from you. This includes a username (which may or may not be your real name), your email address, and a password. We also log the date of your last activity on the platform (e.g., the last time you logged in or used the Service). This information is stored securely in our backend database (powered by AppWrite). We do <em data-v-aa944c40>not</em> require more sensitive personal details like physical address or phone number for basic use of the Service. ASpan is designed to gather minimal personal data necessary for account management and providing the Service.<br data-v-aa944c40></li><li data-v-aa944c40><strong data-v-aa944c40>Use of Collected Data:</strong> The information we collect is used for the following general purposes: to create and manage your user account (for instance, your email and password are used for login authentication and account recovery); to communicate with you (we might send service-related announcements or respond to support inquiries to your email); to personalize your experience (for example, remembering your progress or preferences); and to improve ASpan (using aggregated usage data to understand how the platform is used). We do <strong data-v-aa944c40>not</strong> sell your personal information to third parties. We may share data with service providers or partners who assist us in operating ASpan (such as our database host, email service, analytics provider, etc.), but only under strict obligations that they protect your data and only use it for the purposes we specify.<br data-v-aa944c40></li><li data-v-aa944c40><strong data-v-aa944c40>Data Security:</strong> We take reasonable measures to protect the information you provide to ASpan from unauthorized access or disclosure. Passwords are stored in an encrypted form (hashed) and we use security best practices to safeguard the database. However, no website or Internet transmission is completely secure, so we cannot guarantee absolute security. You also play a role in security by keeping your login credentials confidential (see Section 2 on Account Security).<br data-v-aa944c40></li><li data-v-aa944c40><strong data-v-aa944c40>Privacy Policy:</strong> For full information on how we handle user data—including details on cookies and analytics (if any), data retention practices, and your rights regarding your personal information—please review our Privacy Policy. The Privacy Policy is a separate document that is considered part of these Terms. If there is any conflict between these Terms and the Privacy Policy regarding personal data, the terms of the Privacy Policy will prevail for privacy matters. By accepting these Terms, you also agree to the terms of the Privacy Policy.<br data-v-aa944c40></li><li data-v-aa944c40><strong data-v-aa944c40>Parental Consent for Minors:</strong> If you are a parent or guardian of a user under 18 (especially for users 12-13 where parental consent may be legally required), by allowing your child to use ASpan, you consent to ASpan’s collection and use of the child’s information as described above and in the Privacy Policy. We do not knowingly collect personal data from children under 12, and if we become aware of an account registered by someone under 12 without verifiable parental consent, we will take steps to delete that account and information.<br data-v-aa944c40></li></ul><p data-v-aa944c40><strong data-v-aa944c40>7.2</strong> If you have questions about our data practices or wish to exercise any rights you may have regarding your personal data (for example, requesting deletion of your account data), please refer to the Privacy Policy for contact details and procedures. </p><h2 data-v-aa944c40><strong data-v-aa944c40>8. Termination of Service</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>8.1 By ASpan:</strong> ASpan reserves the right to <strong data-v-aa944c40>suspend or terminate your access to the Service at any time</strong>, for any reason, and without prior notice. This may include termination or suspension of individual accounts or of the Service as a whole. Some examples of situations where we might terminate or suspend access include: if you violate these Terms (or any other policies or guidelines related to ASpan), if we detect behavior that is unlawful or that poses a security risk, if required by law enforcement or other government agencies, or if we discontinue the Service. ASpan shall not be liable to you or any third party for any termination of your account or access to the Service. If your account is terminated due to a violation of these Terms, you may be barred from creating a new account or accessing ASpan in the future. </p><p data-v-aa944c40><strong data-v-aa944c40>8.2 By You:</strong> You have the right to stop using ASpan at any time. If you wish to terminate your account, you may do so by using any account deletion feature provided in the Service (if available) or by contacting us directly with a request to delete your account. Termination of your account will typically involve deactivating your profile and removing your personal data from active use. Please note that some residual data (such as logs or backups) may remain in our systems for a short period after termination, but will be purged according to our data retention policies as outlined in the Privacy Policy. </p><p data-v-aa944c40><strong data-v-aa944c40>8.3 Effect of Termination:</strong> Upon any termination of your access, whether initiated by you or by ASpan, <strong data-v-aa944c40>your right to use the Service will immediately cease</strong>. You must cease all use of ASpan content and delete any downloaded or saved content obtained from the Service (if any) in your possession. ASpan may, in its sole discretion, remove or discard any content or data associated with your account. Sections of these Terms that by their nature should survive termination (such as Intellectual Property rights, Disclaimers, Limitation of Liability, Governing Law, and Dispute Resolution) will continue to apply even after your access to the Service has been terminated. </p><h2 data-v-aa944c40><strong data-v-aa944c40>9. Amendments to Terms</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>9.1 Right to Update:</strong> ASpan may revise or update these Terms from time to time. We may do this to reflect changes in our Service, accommodate new technologies or features, comply with legal requirements, or for other valid reasons. Whenever we update the Terms, we will change the &quot;Last Updated&quot; date at the top of this document. In the case of <strong data-v-aa944c40>material changes</strong> (significant alterations to your rights or obligations under the Terms), we will make reasonable efforts to notify you in advance. Notification may occur through the Service (for example, via a prominent notice on our website or app) or via other communication methods (for example, sending an email to the address associated with your account). </p><p data-v-aa944c40><strong data-v-aa944c40>9.2 Your Responsibilities:</strong> It is your responsibility to review these Terms periodically for any changes. We encourage you to check the Terms whenever you receive notice of an update or whenever you use the Service, to stay informed about the rules that apply to you. <strong data-v-aa944c40>Continued use of ASpan after an updated version of the Terms has been posted</strong> (and after any required notice period for material changes) constitutes your acceptance of those changes. If you do not agree with any amendment to the Terms, you should discontinue use of the Service and, if necessary, terminate your account. </p><p data-v-aa944c40><strong data-v-aa944c40>9.3 Interim Changes:</strong> In some cases, ASpan might introduce new features or offers that come with their own supplemental terms. If any supplemental terms apply, we will present those to you at the relevant time (for example, when you opt to use that feature), and those terms will become part of your agreement with us if you use the feature. In the event of a conflict between these Terms and any supplemental terms, the supplemental terms will govern with respect to the specific feature or situation to which they apply. </p><h2 data-v-aa944c40><strong data-v-aa944c40>10. Governing Law &amp; Dispute Resolution</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>10.1 Governing Law:</strong> These Terms and your use of ASpan are governed by and construed in accordance with the laws of <strong data-v-aa944c40>[Country/State/Region]</strong>, <strong data-v-aa944c40>without regard to its conflict of law principles</strong>. This means that the law of the specified jurisdiction will apply to any issues or disputes relating to these Terms or the Service, even if you reside in a different jurisdiction. However, we recognize that you may have mandatory consumer rights under the laws of your own country. <strong data-v-aa944c40>Nothing in this section is intended to limit your rights as a consumer under the laws of your local jurisdiction</strong> when those laws apply mandatorily. In any case, the United Nations Convention on Contracts for the International Sale of Goods (CISG) does not apply to these Terms. </p><p data-v-aa944c40><strong data-v-aa944c40>10.2 Initial Dispute Resolution:</strong><strong data-v-aa944c40>If you have a dispute or concern</strong> regarding ASpan or these Terms, we encourage you to contact us first and attempt to resolve the issue informally. Many concerns can be resolved quickly through our support team without formal proceedings. You can reach out to us at <strong data-v-aa944c40>[Contact Email/Address]</strong> with a brief written description of your issue and your contact information. We will attempt in good faith to resolve the dispute through discussions with you. </p><p data-v-aa944c40><strong data-v-aa944c40>10.3 Formal Dispute Resolution:</strong> In the event that we are unable to resolve a dispute informally, the following provisions will apply: </p><ul data-v-aa944c40><li data-v-aa944c40><strong data-v-aa944c40>Jurisdiction and Venue:</strong> Subject to any applicable laws that mandate otherwise, you agree that any legal suit, action, or proceeding arising out of or related to these Terms or the use of the Service shall be brought exclusively in the courts of <strong data-v-aa944c40>[Jurisdiction]</strong>. You consent to the jurisdiction of and venue in such courts and waive any objection that such courts are an inconvenient forum. (If ASpan chooses to include an arbitration clause or a different dispute resolution mechanism in the future, this section will be updated accordingly. As of now, disputes will be handled in court unless otherwise agreed by both parties.) </li><li data-v-aa944c40><strong data-v-aa944c40>Time Limit to File Claims:</strong> To the extent permitted by law, any claim or cause of action arising out of or related to your use of ASpan or these Terms must be filed within <strong data-v-aa944c40>one (1) year</strong> after such claim or cause of action arose. If a claim is not filed within this time frame, it shall be permanently barred, which means you will not have the right to pursue it. </li></ul><p data-v-aa944c40><strong data-v-aa944c40>10.4 Severability:</strong> If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision shall be enforced to the maximum extent permissible, and the remaining provisions of these Terms will remain in full force and effect. The invalid or unenforceable provision will be deemed modified in a manner that is valid and enforceable and most closely matches the original intent of the provision. </p><p data-v-aa944c40><strong data-v-aa944c40>10.5 No Waiver:</strong> Our failure to enforce any right or provision of these Terms will not be considered a waiver of that right or provision. Any waiver of any provision of these Terms will be effective only if in writing and signed by an authorized representative of ASpan. <strong data-v-aa944c40>No waiver</strong> of any term hereof shall be deemed a further or continuing waiver of such term or any other term. </p><p data-v-aa944c40><strong data-v-aa944c40>10.6 Entire Agreement:</strong> These Terms (along with the Privacy Policy and any other legal notices or guidelines posted on the Service) constitute the <strong data-v-aa944c40>entire agreement</strong> between you and ASpan regarding your use of the Service. It supersedes any prior agreements, understandings, or communications (whether oral or written) between you and us concerning the same subject matter. You acknowledge that you have not relied on any representation, warranty, or statement not expressly set out in these Terms. </p><p data-v-aa944c40><strong data-v-aa944c40>10.7 Assignment:</strong> You may not assign or transfer your rights or obligations under these Terms to anyone else without our prior written consent. ASpan may assign or transfer its rights and obligations under these Terms freely to an affiliate or in connection with a merger, acquisition, or sale of assets, or by operation of law or otherwise. </p><p data-v-aa944c40><strong data-v-aa944c40>10.8 Headings:</strong> The section titles and headings in these Terms are for convenience only and have no legal or contractual effect. </p><p data-v-aa944c40><strong data-v-aa944c40>10.9 Contact Information:</strong> If you have any questions, concerns, or feedback regarding these Terms or the Service itself, you can contact ASpan at <strong data-v-aa944c40>[Contact Email]</strong> or by mail at <strong data-v-aa944c40>[Company Address]</strong>. We value our users and will do our best to address your inquiry promptly. </p><hr data-v-aa944c40><p data-v-aa944c40> By using ASpan, you acknowledge that you have read, understood, and agree to these Terms and Conditions of Service. Thank you for being a part of ASpan’s learning community and for upholding these standards. Happy learning! </p>',59))}const Sw=vn(xw,[["render",bw],["__scopeId","data-v-aa944c40"]]),Mw={};function Ew(n,e){return e[0]||(e[0]=Js("<h1 data-v-ab71d0db><strong data-v-ab71d0db>Privacy Policy for ASpan</strong></h1><p data-v-ab71d0db><strong data-v-ab71d0db>Effective Date:</strong> 03.02.2025</p><p data-v-ab71d0db><strong data-v-ab71d0db>Last Updated:</strong> 03.02.2025</p><p data-v-ab71d0db><strong data-v-ab71d0db>Welcome to ASpan.</strong> ASpan is a non-profit educational platform (available as a mobile app and via a promotional website) dedicated to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use ASpan (“the platform,” “we,” “us,” or “our”). We are committed to complying with applicable privacy laws and regulations, including those designed to protect children under 16 (such as the EU General Data Protection Regulation’s provisions for children (GDPR-K) and the U.S. Children’s Online Privacy Protection Act (COPPA)). By using ASpan, you agree to the practices described in this Privacy Policy. </p><p data-v-ab71d0db><strong data-v-ab71d0db>Note for Minors:</strong> If you are under 16 years old, please review this Policy with a parent or guardian. ASpan does not knowingly collect personal information from children under 13 without parental consent, and by using ASpan you confirm that you are at least 16 years old or have your parent/guardian’s permission to use the platform and provide your personal data. </p><h2 data-v-ab71d0db><strong data-v-ab71d0db>1. Information We Collect</strong></h2><p data-v-ab71d0db> We <strong data-v-ab71d0db>collect only the minimum personal data necessary</strong> to create and manage your ASpan account and improve your learning experience. This includes: </p><ul data-v-ab71d0db><li data-v-ab71d0db><strong data-v-ab71d0db>Username:</strong> A display name or nickname you provide when creating an account. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Email Address:</strong> Used for account verification, login, and essential communications (e.g. password resets or important service updates). </li><li data-v-ab71d0db><strong data-v-ab71d0db>Password:</strong> A password you choose to secure your account. <em data-v-ab71d0db>For your safety, passwords are stored in a secure, hashed form and <strong data-v-ab71d0db>not</strong> in plain text.</em></li><li data-v-ab71d0db><strong data-v-ab71d0db>Last Activity Date:</strong> A timestamp or date of your last activity or login on the platform. This is collected automatically to help us understand platform usage and manage inactive accounts. </li></ul><p data-v-ab71d0db> All personal data is stored securely in our <strong data-v-ab71d0db>AppWrite database</strong>, which is a cloud-based data storage service. We do <strong data-v-ab71d0db>not</strong> collect any sensitive personal information such as physical addresses, phone numbers, payment details, or government IDs. We also do not collect any unnecessary data from your device – for example, we <strong data-v-ab71d0db>do not track</strong> your precise location, contacts, or device identifiers beyond what is needed for the basic functioning of the service. </p><h2 data-v-ab71d0db><strong data-v-ab71d0db>2. How We Use Your Information</strong></h2><p data-v-ab71d0db> We use the collected information <strong data-v-ab71d0db>solely to provide and improve the ASpan educational service.</strong> Specifically, your information is used to: </p><ul data-v-ab71d0db><li data-v-ab71d0db><strong data-v-ab71d0db>Create and Manage Your Account:</strong> We use your username, email, and password to set up your account, authenticate your login, and allow you to use the app’s features (such as saving progress or preferences). </li><li data-v-ab71d0db><strong data-v-ab71d0db>Provide the Educational Services:</strong> Your data allows us to deliver personalized content (if applicable) and keep track of your activity (using the last activity date) so that you can continue where you left off and we can ensure the platform is functioning properly for you. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Communicate with You:</strong> We may send you <strong data-v-ab71d0db>essential communications</strong> related to the service. For example, we might send a verification email when you register, an email to reset your password if you request it, or to inform you of important updates like changes to this Privacy Policy. We will <strong data-v-ab71d0db>not</strong> send you marketing or promotional emails, and there are <strong data-v-ab71d0db>no advertisements</strong> within the app. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Improve and Maintain Our Platform:</strong> Aggregated data such as usage statistics (e.g., how many users are active, using the last activity date) may be used to help us understand user engagement and improve ASpan’s features or performance. This data is <strong data-v-ab71d0db>not</strong> personally identifying beyond the purposes above, and it is used internally by our team to make the app better for users. </li></ul><p data-v-ab71d0db><strong data-v-ab71d0db>Non-Profit, No Monetization:</strong> ASpan is strictly a non-profit initiative. There are <strong data-v-ab71d0db>no in-app purchases, no subscription fees, and no ads</strong> on our platform. This means <strong data-v-ab71d0db>we do not monetize your personal information</strong> in any way. We do not use your data for advertising, nor do we profile you for marketing purposes. All usage of your data is solely to serve you as an educational tool. </p><h2 data-v-ab71d0db><strong data-v-ab71d0db>3. Disclosure of Information to Third Parties</strong></h2><p data-v-ab71d0db> Your privacy is extremely important to us. We treat your personal data as confidential and <strong data-v-ab71d0db>do not share, sell, or rent your personal information to any third parties</strong> for their own marketing or other purposes. In other words, <strong data-v-ab71d0db>no one outside of ASpan’s operation will receive your personal data</strong> for independent use. </p><p data-v-ab71d0db>The only circumstances under which we might disclose user data are:</p><ul data-v-ab71d0db><li data-v-ab71d0db><strong data-v-ab71d0db>Service Providers (Processors):</strong> ASpan uses certain trusted service providers to operate the platform – most notably, our AppWrite cloud database service where your data is stored. In such cases, the service provider is <strong data-v-ab71d0db>acting under our direction and on our behalf</strong>. They are <strong data-v-ab71d0db>not allowed to use your information for any other purpose</strong> except to store or process it for us, and they are bound by strict confidentiality and data protection obligations. Aside from these infrastructure providers, we currently do not use any analytics services, advertising networks, or other third-party tools that would require access to your personal data. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Legal Requirements:</strong> We may disclose information if required to do so by law or in response to a valid legal request (e.g., a court order, subpoena, or government demand) or to protect the rights, property, or safety of ASpan, our users, or the public. For instance, if we are obliged to cooperate with law enforcement or regulatory authorities, we will only provide the minimum necessary information and only when legally compelled. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Business Transfer:</strong> Since ASpan is non-profit and not a commercial enterprise, a sale or merger is unlikely. However, if there were ever a situation where ASpan’s ownership or structure changes (for example, if it is transferred to a non-profit educational organization or combined with another project), user data might be transferred to the new owner/organization. If that happens, we will ensure the same level of privacy protection is maintained and inform users of any changes. </li></ul><p data-v-ab71d0db> Aside from the above scenarios, <strong data-v-ab71d0db>no other sharing of data occurs.</strong> Specifically, we do not share user information with advertisers, data brokers, or unrelated third parties. Your data stays within the ASpan ecosystem, used only by those who need it to operate and improve the service in line with this Policy. </p><h2 data-v-ab71d0db><strong data-v-ab71d0db>4. Data Storage and International Transfers</strong></h2><p data-v-ab71d0db> All personal data collected through ASpan is stored in our <strong data-v-ab71d0db>AppWrite database</strong>, which is a secure cloud-based datastore. Because cloud services can involve servers located in various countries, your data <strong data-v-ab71d0db>may be stored and processed on servers outside of your home country</strong>. In fact, <strong data-v-ab71d0db>data storage and processing may occur internationally</strong>, including (potentially) in countries that have different data protection laws than your country of residence. </p><p data-v-ab71d0db> We understand that international data transfers require careful handling under privacy laws like the GDPR. <strong data-v-ab71d0db>No matter where your data is processed, we will protect it under the terms of this Privacy Policy and applicable law.</strong> If you are located in the European Economic Area (EEA) or another region with data transfer restrictions, we take appropriate safeguards to ensure that your personal information remains protected according to EU standards. These safeguards may include measures such as <strong data-v-ab71d0db>standard contractual clauses</strong> or ensuring our service providers (like AppWrite) are certified under frameworks that ensure adequate data protection. By using ASpan, you acknowledge that your information may be transferred to facilities located in other countries, and you <strong data-v-ab71d0db>consent to such international transfer</strong> for the purposes of storage and processing as described here. </p><p data-v-ab71d0db> We retain your personal data on our servers <strong data-v-ab71d0db>only for as long as necessary</strong> to fulfill the purposes outlined in this Policy. In practice, this means we will keep your data while your ASpan account is active. If you choose to delete your account (or request us to delete your data), or if your account becomes inactive for an extended period, we will remove or anonymize your personal information from our active databases, subject to our backup procedures and legal obligations (see Section 7 on <strong data-v-ab71d0db>Your Rights</strong> and Section 8 on <strong data-v-ab71d0db>Data Security</strong> for more on deletion). </p><h2 data-v-ab71d0db><strong data-v-ab71d0db>5. Data Security Measures</strong></h2><p data-v-ab71d0db><strong data-v-ab71d0db>Protecting your data is our priority.</strong> We implement industry-standard security measures to safeguard your personal information against unauthorized access, alteration, disclosure, or destruction. Some of the key security practices and technologies we use include: </p><ul data-v-ab71d0db><li data-v-ab71d0db><strong data-v-ab71d0db>Encryption:</strong> All communication between your app/browser and our servers is encrypted using HTTPS/TLS protocols. This means that data (such as your login credentials) is protected in transit and cannot be easily intercepted. Additionally, where possible, we utilize encryption at rest for stored data in the AppWrite database. For example, sensitive fields like passwords are stored using strong one-way cryptographic hashing so that they cannot be read or recovered in plain text. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Access Controls:</strong> We restrict access to personal data strictly to authorized personnel who need it to operate or maintain the service. The AppWrite platform provides robust authentication and permission systems, ensuring that each user can only access their own data and that our administrators can only access what is necessary for maintenance tasks. We use role-based access controls so that no one can access user data unless it is required for their job function. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Secure Infrastructure:</strong> Our AppWrite database and servers are protected by firewalls and regular security monitoring. We apply security patches and updates to our software and infrastructure promptly to mitigate risks. AppWrite itself is built with security in mind, employing measures such as rate limiting (to prevent brute-force attacks) and audit logging of significant events. </li><li data-v-ab71d0db><strong data-v-ab71d0db>No Third-Party Exposure:</strong> Because we do not integrate external analytics or advertising services, your data isn’t being transmitted to third-party networks during normal use of the app. This reduces potential vectors for data leaks. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Employee and Contractor Obligations:</strong> (If applicable) Any team members or volunteers who help operate ASpan are trained on the importance of privacy and are contractually bound to protect user data. They must follow strict guidelines and are subject to disciplinary measures if they fail to meet our data protection standards. </li></ul><p data-v-ab71d0db> While we strive to use commercially acceptable means to protect your personal information, <strong data-v-ab71d0db>no method of transmission over the internet or method of electronic storage is 100% secure</strong>. Therefore, we cannot guarantee absolute security. However, we continuously review and enhance our security practices to keep your data as safe as possible. If there is ever any indication of a data breach that affects your personal information, we will notify you and the appropriate authorities as required by law. </p><h2 data-v-ab71d0db><strong data-v-ab71d0db>6. Your Rights and Choices</strong></h2><p data-v-ab71d0db> We believe you should have control over your personal data. Subject to applicable laws, you have the following <strong data-v-ab71d0db>rights regarding your information</strong> on ASpan: </p><ul data-v-ab71d0db><li data-v-ab71d0db><strong data-v-ab71d0db>Access Your Data:</strong> You have the right to request a copy of the personal data we hold about you. We can provide you with a summary of your username, email, and any other associated information (such as last activity date) upon request. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Rectification (Correcting Your Data):</strong> If any personal information we have is incorrect or outdated (for example, if you need to update your email address), you have the right to correct it. You can update certain information through your account profile (if such an option is available) or by contacting us to request changes. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Deletion (Right to be Forgotten):</strong> You have the right to request deletion of your personal data. This can be done by deleting your account through the app (if that feature exists) or by contacting us directly with a deletion request. Once we verify your identity and ownership of the account, we will delete or anonymize your personal data from our systems. Please note that we might retain certain minimal information if necessary for legal compliance or internal security (for example, we may keep a record that an email belonged to a deleted account to prevent fraud or re-use of the account inappropriately), but we will inform you if any such retention is required. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Data Portability:</strong> For users in some jurisdictions (such as the EU under GDPR), you may have the right to request your personal data in a common portable format. Upon request, we can provide your basic account data in a machine-readable format. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Restriction or Objection to Processing:</strong> In certain circumstances, you may have the right to object to or ask us to limit (restrict) the processing of your data. For example, if you believe the data is inaccurate or our processing is unlawful, you can request limited use until the issue is resolved. Since ASpan only processes your data to provide our non-profit service, if you object to us processing necessary data (like your email or password), it may require that you discontinue use of the service. We will inform you of any implications if you seek to exercise this right. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Withdraw Consent:</strong> In the unusual case where we rely on your consent to process any personal data (for instance, if we ever ask for permission for a new feature), you have the right to withdraw that consent at any time. Withdrawal of consent will not affect the legality of any processing we carried out prior to your withdrawal. (Note: Currently, ASpan does not base its data processing on consent but rather on the need to provide the service, except for your acceptance of this Privacy Policy and Terms of Use by using the platform.) </li></ul><p data-v-ab71d0db><strong data-v-ab71d0db>How to Exercise Your Rights:</strong> You can exercise these rights at any time by contacting us (see the <strong data-v-ab71d0db>Contact Us</strong> section at the end of this Policy). For certain requests like data access, we may need to verify your identity to ensure we’re providing information to the correct person. We will respond to your request within a reasonable timeframe and in accordance with applicable law (typically within 30 days for most requests). There is no cost for exercising your rights, though if a request is manifestly unfounded or excessive (for example, repetitive requests), we may charge a reasonable fee or refuse to act on it as permitted by law. </p><p data-v-ab71d0db> Please note, if you delete your data or object to necessary processing, <strong data-v-ab71d0db>your ability to use ASpan may be impacted</strong>. We’ll always explain the consequences of honoring your request (for example, that deleting your account will remove access to your saved progress). </p><p data-v-ab71d0db> Finally, if you have concerns about how we handle your data, you also have the right to lodge a complaint with a data protection authority or regulatory body in your country. We encourage you to contact us first so we can address your concerns directly. </p><h2 data-v-ab71d0db><strong data-v-ab71d0db>7. Children’s Privacy (Users Under 16)</strong></h2><p data-v-ab71d0db> Protecting the privacy of young users is especially important to us. ASpan is intended for a general audience of learners and is <strong data-v-ab71d0db>not directed primarily at children under the age of 13</strong>. We recognize the need to provide further privacy protections for minors under 16 years old, in line with GDPR-K and COPPA. </p><ul data-v-ab71d0db><li data-v-ab71d0db><strong data-v-ab71d0db>No Sign-Ups Under 13:</strong> We do <strong data-v-ab71d0db>not knowingly collect or solicit personal information from children under 13 years of age</strong>. If you are under 13, please do not register an account or send any personal information to us. If we discover that we have collected personal data from a child under 13 without verifiable parental consent, we will delete that information as quickly as possible. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Parental Guidance for Ages 13–16:</strong> If you are between 13 and 16 years old, you should only use ASpan with the involvement and consent of a parent or legal guardian. While we currently do <strong data-v-ab71d0db>not have a formal process to obtain parental consent</strong> during registration, by using our platform we presume that you have obtained permission from your parent or guardian to use ASpan and that they have reviewed and agreed to this Privacy Policy. We encourage parents/guardians of minors using ASpan to supervise their child’s use of the platform and educate them about safe online practices. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Parental Rights:</strong> If you are a parent or guardian and you believe we have collected personal information from your child under 16 without appropriate consent, please contact us immediately. We will work with you to review, update, or delete the child’s information as required. Parents (especially of children under 13) have the right under COPPA to request the removal of their child’s personal data from our records. We will gladly honor such requests and confirm once the data has been deleted. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Educational Context:</strong> If ASpan is ever used in a school or educational setting involving students under 16, we expect that the school or educator has obtained any necessary parental consents or is acting as the agent for the parent (consistent with COPPA’s “school official exception”). Regardless, our policy remains not to share or use students’ personal data for any commercial purposes. </li></ul><p data-v-ab71d0db> By using ASpan, users under 16 acknowledge that they understand the importance of privacy and have either reached the age of 16 or have the consent and guidance of a parent/guardian. We are committed to complying with all applicable laws regarding children’s privacy and will update our practices as needed to remain in compliance. </p><h2 data-v-ab71d0db><strong data-v-ab71d0db>8. Changes to This Privacy Policy</strong></h2><p data-v-ab71d0db> We may update or modify this Privacy Policy from time to time to reflect changes in our practices, ensure ongoing compliance with relevant laws, or for other operational, legal, or regulatory reasons. When we make changes, we will do the following: </p><ul data-v-ab71d0db><li data-v-ab71d0db><strong data-v-ab71d0db>Notification of Changes:</strong> We will post the updated Privacy Policy on our website (and within the app, if applicable) with a new <strong data-v-ab71d0db>“Last Updated”</strong> date. If changes are significant, we will provide a more prominent notice or <strong data-v-ab71d0db>notify you directly</strong> (for example, by email to the address associated with your account or by an in-app message). </li><li data-v-ab71d0db><strong data-v-ab71d0db>Consent to Changes:</strong> If you continue to use ASpan after a Privacy Policy update takes effect, you will be deemed to have accepted the revised policy. However, if any change requires separate consent by law (for example, if in the future we were to collect additional data or use it for new purposes that require consent), we will obtain that consent from you. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Review and Stay Informed:</strong> We encourage you to periodically review this Privacy Policy to stay informed about how we are protecting your information. The latest version of the Privacy Policy will always be available on our website. Past versions can be requested if you wish to see how the policy has evolved. </li></ul><p data-v-ab71d0db> If you do not agree with any updates to the Privacy Policy, you should stop using ASpan and may request that your data be deleted (see <strong data-v-ab71d0db>Your Rights</strong> above). We will not enforce material changes to this Privacy Policy retroactively without your express consent. </p><h2 data-v-ab71d0db><strong data-v-ab71d0db>9. Contact Information</strong></h2><p data-v-ab71d0db> We welcome any questions, concerns, or feedback you may have about your privacy or this Policy. If you need to contact us for any reason – whether it’s to exercise your rights, report a potential issue, or simply ask a question about how your information is handled – please reach out to us: </p><ul data-v-ab71d0db><li data-v-ab71d0db><strong data-v-ab71d0db>Email:</strong> [Privacy Contact Email Placeholder]</li><li data-v-ab71d0db><strong data-v-ab71d0db>Mailing Address:</strong> [Legal Address Placeholder]</li></ul><p data-v-ab71d0db><em data-v-ab71d0db>(We are in the process of establishing our official contact channels. Please use the above placeholder contact information for now – these will be updated once our official contact email and legal address are finalized.)</em></p><p data-v-ab71d0db><strong data-v-ab71d0db>Data Controller:</strong> For the purposes of data protection laws, the “controller” of your personal information is the ASpan team/organization. [If applicable, include the official entity name once available.] </p><p data-v-ab71d0db> We will do our best to respond promptly to your inquiries. Your privacy is important to us, and we take all complaints or questions seriously. If you contact us about a privacy issue, we may ask for verification of identity before sharing any information, in order to protect against unauthorized access to data. </p><p data-v-ab71d0db> Thank you for reading our Privacy Policy. By using ASpan, you place your trust in us, and we are committed to honoring that trust by keeping your personal information safe and using it responsibly. We hope you enjoy learning with ASpan, and we pledge to continue safeguarding your privacy every step of the way. </p>",47))}const Tw=vn(Mw,[["render",Ew],["__scopeId","data-v-ab71d0db"]]),Aw=[{path:"/",component:xA,children:[{path:"",component:am}]},{path:"/microlessons",component:HA},{path:"/islands",component:GA},{path:"/volunteer",component:qA},{path:"/hackathon",component:KA},{path:"/about-us",component:yw},{path:"/terms-of-use",component:Sw},{path:"/privacy-policy",component:Tw}],ww=Xv({history:xv("/aspan_web"),routes:Aw,scrollBehavior(n,e,t){return{top:0}}}),cm=H_(dy);cm.use(ww);cm.mount("#app");
