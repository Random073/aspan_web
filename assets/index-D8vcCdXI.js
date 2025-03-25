(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ht={},Lr=[],On=()=>{},pm=()=>!1,sa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Il=n=>n.startsWith("onUpdate:"),wt=Object.assign,Ll=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},mm=Object.prototype.hasOwnProperty,ot=(n,e)=>mm.call(n,e),Fe=Array.isArray,Dr=n=>oa(n)==="[object Map]",qf=n=>oa(n)==="[object Set]",ze=n=>typeof n=="function",bt=n=>typeof n=="string",Ni=n=>typeof n=="symbol",mt=n=>n!==null&&typeof n=="object",Yf=n=>(mt(n)||ze(n))&&ze(n.then)&&ze(n.catch),jf=Object.prototype.toString,oa=n=>jf.call(n),gm=n=>oa(n).slice(8,-1),Kf=n=>oa(n)==="[object Object]",Dl=n=>bt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ss=Pl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},_m=/-(\w)/g,pn=aa(n=>n.replace(_m,(e,t)=>t?t.toUpperCase():"")),vm=/\B([A-Z])/g,ur=aa(n=>n.replace(vm,"-$1").toLowerCase()),ca=aa(n=>n.charAt(0).toUpperCase()+n.slice(1)),wa=aa(n=>n?`on${ca(n)}`:""),Pi=(n,e)=>!Object.is(n,e),Ra=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},$f=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ym=n=>{const e=parseFloat(n);return isNaN(e)?n:e},xm=n=>{const e=bt(n)?Number(n):NaN;return isNaN(e)?n:e};let Mu;const la=()=>Mu||(Mu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ul(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=bt(i)?Em(i):Ul(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(bt(n)||mt(n))return n}const bm=/;(?![^(]*\))/g,Sm=/:([^]+)/,Mm=/\/\*[^]*?\*\//g;function Em(n){const e={};return n.replace(Mm,"").split(bm).forEach(t=>{if(t){const i=t.split(Sm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Nl(n){let e="";if(bt(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=Nl(n[t]);i&&(e+=i+" ")}else if(mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Tm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Am=Pl(Tm);function Zf(n){return!!n||n===""}const Jf=n=>!!(n&&n.__v_isRef===!0),Qf=n=>bt(n)?n:n==null?"":Fe(n)||mt(n)&&(n.toString===jf||!ze(n.toString))?Jf(n)?Qf(n.value):JSON.stringify(n,eh,2):String(n),eh=(n,e)=>Jf(e)?eh(n,e.value):Dr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ca(i,s)+" =>"]=r,t),{})}:qf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ca(t))}:Ni(e)?Ca(e):mt(e)&&!Fe(e)&&!Kf(e)?String(e):e,Ca=(n,e="")=>{var t;return Ni(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tn;class wm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=tn,!e&&tn&&(this.index=(tn.scopes||(tn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=tn;try{return tn=this,e()}finally{tn=t}}}on(){tn=this}off(){tn=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Rm(){return tn}let ft;const Pa=new WeakSet;class th{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tn&&tn.active&&tn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pa.has(this)&&(Pa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ih(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Eu(this),rh(this);const e=ft,t=An;ft=this,An=!0;try{return this.fn()}finally{sh(this),ft=e,An=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bl(e);this.deps=this.depsTail=void 0,Eu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ec(this)&&this.run()}get dirty(){return Ec(this)}}let nh=0,Ms,Es;function ih(n,e=!1){if(n.flags|=8,e){n.next=Es,Es=n;return}n.next=Ms,Ms=n}function Fl(){nh++}function Ol(){if(--nh>0)return;if(Es){let e=Es;for(Es=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ms;){let e=Ms;for(Ms=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function rh(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sh(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Bl(i),Cm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ec(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(oh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function oh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ns))return;n.globalVersion=Ns;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Ec(n)){n.flags&=-3;return}const t=ft,i=An;ft=n,An=!0;try{rh(n);const r=n.fn(n._value);(e.version===0||Pi(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ft=t,An=i,sh(n),n.flags&=-3}}function Bl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Bl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Cm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let An=!0;const ah=[];function Fi(){ah.push(An),An=!1}function Oi(){const n=ah.pop();An=n===void 0?!0:n}function Eu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ft;ft=void 0;try{e()}finally{ft=t}}}let Ns=0;class Pm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class kl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ft||!An||ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ft)t=this.activeLink=new Pm(ft,this),ft.deps?(t.prevDep=ft.depsTail,ft.depsTail.nextDep=t,ft.depsTail=t):ft.deps=ft.depsTail=t,ch(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ft.depsTail,t.nextDep=void 0,ft.depsTail.nextDep=t,ft.depsTail=t,ft.deps===t&&(ft.deps=i)}return t}trigger(e){this.version++,Ns++,this.notify(e)}notify(e){Fl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ol()}}}function ch(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ch(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Tc=new WeakMap,or=Symbol(""),Ac=Symbol(""),Fs=Symbol("");function Nt(n,e,t){if(An&&ft){let i=Tc.get(n);i||Tc.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new kl),r.map=i,r.key=t),r.track()}}function ii(n,e,t,i,r,s){const o=Tc.get(n);if(!o){Ns++;return}const a=c=>{c&&c.trigger()};if(Fl(),e==="clear")o.forEach(a);else{const c=Fe(n),l=c&&Dl(t);if(c&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Fs||!Ni(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),l&&a(o.get(Fs)),e){case"add":c?l&&a(o.get("length")):(a(o.get(or)),Dr(n)&&a(o.get(Ac)));break;case"delete":c||(a(o.get(or)),Dr(n)&&a(o.get(Ac)));break;case"set":Dr(n)&&a(o.get(or));break}}Ol()}function fr(n){const e=tt(n);return e===n?e:(Nt(e,"iterate",Fs),wn(n)?e:e.map(zt))}function Hl(n){return Nt(n=tt(n),"iterate",Fs),n}const Im={__proto__:null,[Symbol.iterator](){return Ia(this,Symbol.iterator,zt)},concat(...n){return fr(this).concat(...n.map(e=>Fe(e)?fr(e):e))},entries(){return Ia(this,"entries",n=>(n[1]=zt(n[1]),n))},every(n,e){return Xn(this,"every",n,e,void 0,arguments)},filter(n,e){return Xn(this,"filter",n,e,t=>t.map(zt),arguments)},find(n,e){return Xn(this,"find",n,e,zt,arguments)},findIndex(n,e){return Xn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Xn(this,"findLast",n,e,zt,arguments)},findLastIndex(n,e){return Xn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Xn(this,"forEach",n,e,void 0,arguments)},includes(...n){return La(this,"includes",n)},indexOf(...n){return La(this,"indexOf",n)},join(n){return fr(this).join(n)},lastIndexOf(...n){return La(this,"lastIndexOf",n)},map(n,e){return Xn(this,"map",n,e,void 0,arguments)},pop(){return as(this,"pop")},push(...n){return as(this,"push",n)},reduce(n,...e){return Tu(this,"reduce",n,e)},reduceRight(n,...e){return Tu(this,"reduceRight",n,e)},shift(){return as(this,"shift")},some(n,e){return Xn(this,"some",n,e,void 0,arguments)},splice(...n){return as(this,"splice",n)},toReversed(){return fr(this).toReversed()},toSorted(n){return fr(this).toSorted(n)},toSpliced(...n){return fr(this).toSpliced(...n)},unshift(...n){return as(this,"unshift",n)},values(){return Ia(this,"values",zt)}};function Ia(n,e,t){const i=Hl(n),r=i[e]();return i!==n&&!wn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Lm=Array.prototype;function Xn(n,e,t,i,r,s){const o=Hl(n),a=o!==n&&!wn(n),c=o[e];if(c!==Lm[e]){const d=c.apply(n,s);return a?zt(d):d}let l=t;o!==n&&(a?l=function(d,f){return t.call(this,zt(d),f,n)}:t.length>2&&(l=function(d,f){return t.call(this,d,f,n)}));const u=c.call(o,l,i);return a&&r?r(u):u}function Tu(n,e,t,i){const r=Hl(n);let s=t;return r!==n&&(wn(n)?t.length>3&&(s=function(o,a,c){return t.call(this,o,a,c,n)}):s=function(o,a,c){return t.call(this,o,zt(a),c,n)}),r[e](s,...i)}function La(n,e,t){const i=tt(n);Nt(i,"iterate",Fs);const r=i[e](...t);return(r===-1||r===!1)&&Gl(t[0])?(t[0]=tt(t[0]),i[e](...t)):r}function as(n,e,t=[]){Fi(),Fl();const i=tt(n)[e].apply(n,t);return Ol(),Oi(),i}const Dm=Pl("__proto__,__v_isRef,__isVue"),lh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ni));function Um(n){Ni(n)||(n=String(n));const e=tt(this);return Nt(e,"has",n),e.hasOwnProperty(n)}class uh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Wm:ph:s?hh:fh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Fe(e);if(!r){let c;if(o&&(c=Im[t]))return c;if(t==="hasOwnProperty")return Um}const a=Reflect.get(e,t,Ft(e)?e:i);return(Ni(t)?lh.has(t):Dm(t))||(r||Nt(e,"get",t),s)?a:Ft(a)?o&&Dl(t)?a:a.value:mt(a)?r?gh(a):ua(a):a}}class dh extends uh{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const c=ar(s);if(!wn(i)&&!ar(i)&&(s=tt(s),i=tt(i)),!Fe(e)&&Ft(s)&&!Ft(i))return c?!1:(s.value=i,!0)}const o=Fe(e)&&Dl(t)?Number(t)<e.length:ot(e,t),a=Reflect.set(e,t,i,Ft(e)?e:r);return e===tt(r)&&(o?Pi(i,s)&&ii(e,"set",t,i):ii(e,"add",t,i)),a}deleteProperty(e,t){const i=ot(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&ii(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Ni(t)||!lh.has(t))&&Nt(e,"has",t),i}ownKeys(e){return Nt(e,"iterate",Fe(e)?"length":or),Reflect.ownKeys(e)}}class Nm extends uh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Fm=new dh,Om=new Nm,Bm=new dh(!0);const wc=n=>n,io=n=>Reflect.getPrototypeOf(n);function km(n,e,t){return function(...i){const r=this.__v_raw,s=tt(r),o=Dr(s),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=r[n](...i),u=t?wc:e?Rc:zt;return!e&&Nt(s,"iterate",c?Ac:or),{next(){const{value:d,done:f}=l.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function ro(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Hm(n,e){const t={get(r){const s=this.__v_raw,o=tt(s),a=tt(r);n||(Pi(r,a)&&Nt(o,"get",r),Nt(o,"get",a));const{has:c}=io(o),l=e?wc:n?Rc:zt;if(c.call(o,r))return l(s.get(r));if(c.call(o,a))return l(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Nt(tt(r),"iterate",or),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=tt(s),a=tt(r);return n||(Pi(r,a)&&Nt(o,"has",r),Nt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,c=tt(a),l=e?wc:n?Rc:zt;return!n&&Nt(c,"iterate",or),a.forEach((u,d)=>r.call(s,l(u),l(d),o))}};return wt(t,n?{add:ro("add"),set:ro("set"),delete:ro("delete"),clear:ro("clear")}:{add(r){!e&&!wn(r)&&!ar(r)&&(r=tt(r));const s=tt(this);return io(s).has.call(s,r)||(s.add(r),ii(s,"add",r,r)),this},set(r,s){!e&&!wn(s)&&!ar(s)&&(s=tt(s));const o=tt(this),{has:a,get:c}=io(o);let l=a.call(o,r);l||(r=tt(r),l=a.call(o,r));const u=c.call(o,r);return o.set(r,s),l?Pi(s,u)&&ii(o,"set",r,s):ii(o,"add",r,s),this},delete(r){const s=tt(this),{has:o,get:a}=io(s);let c=o.call(s,r);c||(r=tt(r),c=o.call(s,r)),a&&a.call(s,r);const l=s.delete(r);return c&&ii(s,"delete",r,void 0),l},clear(){const r=tt(this),s=r.size!==0,o=r.clear();return s&&ii(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=km(r,n,e)}),t}function zl(n,e){const t=Hm(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ot(t,r)&&r in i?t:i,r,s)}const zm={get:zl(!1,!1)},Vm={get:zl(!1,!0)},Gm={get:zl(!0,!1)};const fh=new WeakMap,hh=new WeakMap,ph=new WeakMap,Wm=new WeakMap;function Xm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qm(n){return n.__v_skip||!Object.isExtensible(n)?0:Xm(gm(n))}function ua(n){return ar(n)?n:Vl(n,!1,Fm,zm,fh)}function mh(n){return Vl(n,!1,Bm,Vm,hh)}function gh(n){return Vl(n,!0,Om,Gm,ph)}function Vl(n,e,t,i,r){if(!mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=qm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Ts(n){return ar(n)?Ts(n.__v_raw):!!(n&&n.__v_isReactive)}function ar(n){return!!(n&&n.__v_isReadonly)}function wn(n){return!!(n&&n.__v_isShallow)}function Gl(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function Ym(n){return!ot(n,"__v_skip")&&Object.isExtensible(n)&&$f(n,"__v_skip",!0),n}const zt=n=>mt(n)?ua(n):n,Rc=n=>mt(n)?gh(n):n;function Ft(n){return n?n.__v_isRef===!0:!1}function Os(n){return _h(n,!1)}function jm(n){return _h(n,!0)}function _h(n,e){return Ft(n)?n:new Km(n,e)}class Km{constructor(e,t){this.dep=new kl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:zt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||wn(e)||ar(e);e=i?e:tt(e),Pi(e,t)&&(this._rawValue=e,this._value=i?e:zt(e),this.dep.trigger())}}function Ur(n){return Ft(n)?n.value:n}const $m={get:(n,e,t)=>e==="__v_raw"?n:Ur(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ft(r)&&!Ft(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function vh(n){return Ts(n)?n:new Proxy(n,$m)}class Zm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new kl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ns-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return ih(this,!0),!0}get value(){const e=this.dep.track();return oh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Jm(n,e,t=!1){let i,r;return ze(n)?i=n:(i=n.get,r=n.set),new Zm(i,r,t)}const so={},Yo=new WeakMap;let Ji;function Qm(n,e=!1,t=Ji){if(t){let i=Yo.get(t);i||Yo.set(t,i=[]),i.push(n)}}function eg(n,e,t=ht){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:c}=t,l=x=>r?x:wn(x)||r===!1||r===0?Ai(x,1):Ai(x);let u,d,f,h,g=!1,_=!1;if(Ft(n)?(d=()=>n.value,g=wn(n)):Ts(n)?(d=()=>l(n),g=!0):Fe(n)?(_=!0,g=n.some(x=>Ts(x)||wn(x)),d=()=>n.map(x=>{if(Ft(x))return x.value;if(Ts(x))return l(x);if(ze(x))return c?c(x,2):x()})):ze(n)?e?d=c?()=>c(n,2):n:d=()=>{if(f){Fi();try{f()}finally{Oi()}}const x=Ji;Ji=u;try{return c?c(n,3,[h]):n(h)}finally{Ji=x}}:d=On,e&&r){const x=d,I=r===!0?1/0:r;d=()=>Ai(x(),I)}const m=Rm(),p=()=>{u.stop(),m&&m.active&&Ll(m.effects,u)};if(s&&e){const x=e;e=(...I)=>{x(...I),p()}}let A=_?new Array(n.length).fill(so):so;const T=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const I=u.run();if(r||g||(_?I.some((P,C)=>Pi(P,A[C])):Pi(I,A))){f&&f();const P=Ji;Ji=u;try{const C=[I,A===so?void 0:_&&A[0]===so?[]:A,h];c?c(e,3,C):e(...C),A=I}finally{Ji=P}}}else u.run()};return a&&a(T),u=new th(d),u.scheduler=o?()=>o(T,!1):T,h=x=>Qm(x,!1,u),f=u.onStop=()=>{const x=Yo.get(u);if(x){if(c)c(x,4);else for(const I of x)I();Yo.delete(u)}},e?i?T(!0):A=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ai(n,e=1/0,t){if(e<=0||!mt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ft(n))Ai(n.value,e,t);else if(Fe(n))for(let i=0;i<n.length;i++)Ai(n[i],e,t);else if(qf(n)||Dr(n))n.forEach(i=>{Ai(i,e,t)});else if(Kf(n)){for(const i in n)Ai(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ai(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ks(n,e,t,i){try{return i?n(...i):n()}catch(r){da(r,e,t)}}function Cn(n,e,t,i){if(ze(n)){const r=Ks(n,e,t,i);return r&&Yf(r)&&r.catch(s=>{da(s,e,t)}),r}if(Fe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Cn(n[s],e,t,i));return r}}function da(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ht;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,c,l)===!1)return}a=a.parent}if(s){Fi(),Ks(s,null,10,[n,c,l]),Oi();return}}tg(n,t,r,i,o)}function tg(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Vt=[];let Dn=-1;const Nr=[];let Si=null,Rr=0;const yh=Promise.resolve();let jo=null;function xh(n){const e=jo||yh;return n?e.then(this?n.bind(this):n):e}function ng(n){let e=Dn+1,t=Vt.length;for(;e<t;){const i=e+t>>>1,r=Vt[i],s=Bs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Wl(n){if(!(n.flags&1)){const e=Bs(n),t=Vt[Vt.length-1];!t||!(n.flags&2)&&e>=Bs(t)?Vt.push(n):Vt.splice(ng(e),0,n),n.flags|=1,bh()}}function bh(){jo||(jo=yh.then(Mh))}function ig(n){Fe(n)?Nr.push(...n):Si&&n.id===-1?Si.splice(Rr+1,0,n):n.flags&1||(Nr.push(n),n.flags|=1),bh()}function Au(n,e,t=Dn+1){for(;t<Vt.length;t++){const i=Vt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Vt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Sh(n){if(Nr.length){const e=[...new Set(Nr)].sort((t,i)=>Bs(t)-Bs(i));if(Nr.length=0,Si){Si.push(...e);return}for(Si=e,Rr=0;Rr<Si.length;Rr++){const t=Si[Rr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Si=null,Rr=0}}const Bs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Mh(n){try{for(Dn=0;Dn<Vt.length;Dn++){const e=Vt[Dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ks(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Dn<Vt.length;Dn++){const e=Vt[Dn];e&&(e.flags&=-2)}Dn=-1,Vt.length=0,Sh(),jo=null,(Vt.length||Nr.length)&&Mh()}}let fn=null,Eh=null;function Ko(n){const e=fn;return fn=n,Eh=n&&n.type.__scopeId||null,e}function Ct(n,e=fn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ou(-1);const s=Ko(e);let o;try{o=n(...r)}finally{Ko(s),i._d&&Ou(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function zi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(Fi(),Cn(c,t,8,[n.el,a,n,e]),Oi())}}const rg=Symbol("_vte"),Th=n=>n.__isTeleport,Mi=Symbol("_leaveCb"),oo=Symbol("_enterCb");function sg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pa(()=>{n.isMounted=!0}),Uh(()=>{n.isUnmounting=!0}),n}const cn=[Function,Array],Ah={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:cn,onEnter:cn,onAfterEnter:cn,onEnterCancelled:cn,onBeforeLeave:cn,onLeave:cn,onAfterLeave:cn,onLeaveCancelled:cn,onBeforeAppear:cn,onAppear:cn,onAfterAppear:cn,onAppearCancelled:cn},wh=n=>{const e=n.subTree;return e.component?wh(e.component):e},og={name:"BaseTransition",props:Ah,setup(n,{slots:e}){const t=r_(),i=sg();return()=>{const r=e.default&&Ph(e.default(),!0);if(!r||!r.length)return;const s=Rh(r),o=tt(n),{mode:a}=o;if(i.isLeaving)return Da(s);const c=wu(s);if(!c)return Da(s);let l=Cc(c,o,i,t,d=>l=d);c.type!==Kt&&ks(c,l);let u=t.subTree&&wu(t.subTree);if(u&&u.type!==Kt&&!tr(c,u)&&wh(t).type!==Kt){let d=Cc(u,o,i,t);if(ks(u,d),a==="out-in"&&c.type!==Kt)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},Da(s);a==="in-out"&&c.type!==Kt?d.delayLeave=(f,h,g)=>{const _=Ch(i,u);_[String(u.key)]=u,f[Mi]=()=>{h(),f[Mi]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{g(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Rh(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Kt){e=t;break}}return e}const ag=og;function Ch(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Cc(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:A,onAppearCancelled:T}=e,x=String(n.key),I=Ch(t,n),P=(E,S)=>{E&&Cn(E,i,9,S)},C=(E,S)=>{const D=S[1];P(E,S),Fe(E)?E.every(U=>U.length<=1)&&D():E.length<=1&&D()},N={mode:o,persisted:a,beforeEnter(E){let S=c;if(!t.isMounted)if(s)S=m||c;else return;E[Mi]&&E[Mi](!0);const D=I[x];D&&tr(n,D)&&D.el[Mi]&&D.el[Mi](),P(S,[E])},enter(E){let S=l,D=u,U=d;if(!t.isMounted)if(s)S=p||l,D=A||u,U=T||d;else return;let B=!1;const Q=E[oo]=ne=>{B||(B=!0,ne?P(U,[E]):P(D,[E]),N.delayedLeave&&N.delayedLeave(),E[oo]=void 0)};S?C(S,[E,Q]):Q()},leave(E,S){const D=String(n.key);if(E[oo]&&E[oo](!0),t.isUnmounting)return S();P(f,[E]);let U=!1;const B=E[Mi]=Q=>{U||(U=!0,S(),Q?P(_,[E]):P(g,[E]),E[Mi]=void 0,I[D]===n&&delete I[D])};I[D]=n,h?C(h,[E,B]):B()},clone(E){const S=Cc(E,e,t,i,r);return r&&r(S),S}};return N}function Da(n){if(fa(n))return n=Di(n),n.children=null,n}function wu(n){if(!fa(n))return Th(n.type)&&n.children?Rh(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ze(t.default))return t.default()}}function ks(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ks(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ph(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===dn?(o.patchFlag&128&&r++,i=i.concat(Ph(o.children,e,a))):(e||o.type!==Kt)&&i.push(a!=null?Di(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Ih(n,e){return ze(n)?wt({name:n.name},e,{setup:n}):n}function Lh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function $o(n,e,t,i,r=!1){if(Fe(n)){n.forEach((g,_)=>$o(g,e&&(Fe(e)?e[_]:e),t,i,r));return}if(As(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&$o(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Yl(i.component):i.el,o=r?null:s,{i:a,r:c}=n,l=e&&e.r,u=a.refs===ht?a.refs={}:a.refs,d=a.setupState,f=tt(d),h=d===ht?()=>!1:g=>ot(f,g);if(l!=null&&l!==c&&(bt(l)?(u[l]=null,h(l)&&(d[l]=null)):Ft(l)&&(l.value=null)),ze(c))Ks(c,a,12,[o,u]);else{const g=bt(c),_=Ft(c);if(g||_){const m=()=>{if(n.f){const p=g?h(c)?d[c]:u[c]:c.value;r?Fe(p)&&Ll(p,s):Fe(p)?p.includes(s)||p.push(s):g?(u[c]=[s],h(c)&&(d[c]=u[c])):(c.value=[s],n.k&&(u[n.k]=c.value))}else g?(u[c]=o,h(c)&&(d[c]=o)):_&&(c.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,en(m,t)):m()}}}la().requestIdleCallback;la().cancelIdleCallback;const As=n=>!!n.type.__asyncLoader,fa=n=>n.type.__isKeepAlive;function cg(n,e){Dh(n,"a",e)}function lg(n,e){Dh(n,"da",e)}function Dh(n,e,t=Pt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ha(e,i,t),t){let r=t.parent;for(;r&&r.parent;)fa(r.parent.vnode)&&ug(i,e,t,r),r=r.parent}}function ug(n,e,t,i){const r=ha(e,n,i,!0);ma(()=>{Ll(i[e],r)},t)}function ha(n,e,t=Pt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Fi();const a=$s(t),c=Cn(e,t,n,o);return a(),Oi(),c});return i?r.unshift(s):r.push(s),s}}const di=n=>(e,t=Pt)=>{(!zs||n==="sp")&&ha(n,(...i)=>e(...i),t)},dg=di("bm"),pa=di("m"),fg=di("bu"),hg=di("u"),Uh=di("bum"),ma=di("um"),pg=di("sp"),mg=di("rtg"),gg=di("rtc");function _g(n,e=Pt){ha("ec",n,e)}const vg="components";function Fr(n,e){return xg(vg,n,!0,e)||n}const yg=Symbol.for("v-ndc");function xg(n,e,t=!0,i=!1){const r=fn||Pt;if(r){const s=r.type;{const a=l_(s,!1);if(a&&(a===e||a===pn(e)||a===ca(pn(e))))return s}const o=Ru(r[n]||s[n],e)||Ru(r.appContext[n],e);return!o&&i?s:o}}function Ru(n,e){return n&&(n[e]||n[pn(e)]||n[ca(pn(e))])}const Pc=n=>n?tp(n)?Yl(n):Pc(n.parent):null,ws=wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Pc(n.parent),$root:n=>Pc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Fh(n),$forceUpdate:n=>n.f||(n.f=()=>{Wl(n.update)}),$nextTick:n=>n.n||(n.n=xh.bind(n.proxy)),$watch:n=>zg.bind(n)}),Ua=(n,e)=>n!==ht&&!n.__isScriptSetup&&ot(n,e),bg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=n;let l;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ua(i,e))return o[e]=1,i[e];if(r!==ht&&ot(r,e))return o[e]=2,r[e];if((l=n.propsOptions[0])&&ot(l,e))return o[e]=3,s[e];if(t!==ht&&ot(t,e))return o[e]=4,t[e];Ic&&(o[e]=0)}}const u=ws[e];let d,f;if(u)return e==="$attrs"&&Nt(n.attrs,"get",""),u(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==ht&&ot(t,e))return o[e]=4,t[e];if(f=c.config.globalProperties,ot(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ua(r,e)?(r[e]=t,!0):i!==ht&&ot(i,e)?(i[e]=t,!0):ot(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==ht&&ot(n,o)||Ua(e,o)||(a=s[0])&&ot(a,o)||ot(i,o)||ot(ws,o)||ot(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ot(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Cu(n){return Fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ic=!0;function Sg(n){const e=Fh(n),t=n.proxy,i=n.ctx;Ic=!1,e.beforeCreate&&Pu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:T,unmounted:x,render:I,renderTracked:P,renderTriggered:C,errorCaptured:N,serverPrefetch:E,expose:S,inheritAttrs:D,components:U,directives:B,filters:Q}=e;if(l&&Mg(l,i,null),o)for(const j in o){const V=o[j];ze(V)&&(i[j]=V.bind(t))}if(r){const j=r.call(t,t);mt(j)&&(n.data=ua(j))}if(Ic=!0,s)for(const j in s){const V=s[j],pe=ze(V)?V.bind(t,t):ze(V.get)?V.get.bind(t,t):On,ve=!ze(V)&&ze(V.set)?V.set.bind(t):On,we=Sn({get:pe,set:ve});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>we.value,set:Pe=>we.value=Pe})}if(a)for(const j in a)Nh(a[j],i,t,j);if(c){const j=ze(c)?c.call(t):c;Reflect.ownKeys(j).forEach(V=>{Fo(V,j[V])})}u&&Pu(u,n,"c");function Z(j,V){Fe(V)?V.forEach(pe=>j(pe.bind(t))):V&&j(V.bind(t))}if(Z(dg,d),Z(pa,f),Z(fg,h),Z(hg,g),Z(cg,_),Z(lg,m),Z(_g,N),Z(gg,P),Z(mg,C),Z(Uh,A),Z(ma,x),Z(pg,E),Fe(S))if(S.length){const j=n.exposed||(n.exposed={});S.forEach(V=>{Object.defineProperty(j,V,{get:()=>t[V],set:pe=>t[V]=pe})})}else n.exposed||(n.exposed={});I&&n.render===On&&(n.render=I),D!=null&&(n.inheritAttrs=D),U&&(n.components=U),B&&(n.directives=B),E&&Lh(n)}function Mg(n,e,t=On){Fe(n)&&(n=Lc(n));for(const i in n){const r=n[i];let s;mt(r)?"default"in r?s=oi(r.from||i,r.default,!0):s=oi(r.from||i):s=oi(r),Ft(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Pu(n,e,t){Cn(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Nh(n,e,t,i){let r=i.includes(".")?$h(t,i):()=>t[i];if(bt(n)){const s=e[n];ze(s)&&Rs(r,s)}else if(ze(n))Rs(r,n.bind(t));else if(mt(n))if(Fe(n))n.forEach(s=>Nh(s,e,t,i));else{const s=ze(n.handler)?n.handler.bind(t):e[n.handler];ze(s)&&Rs(r,s,n)}}function Fh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!t&&!i?c=e:(c={},r.length&&r.forEach(l=>Zo(c,l,o,!0)),Zo(c,e,o)),mt(e)&&s.set(e,c),c}function Zo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Zo(n,s,t,!0),r&&r.forEach(o=>Zo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Eg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Eg={data:Iu,props:Lu,emits:Lu,methods:ys,computed:ys,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:ys,directives:ys,watch:Ag,provide:Iu,inject:Tg};function Iu(n,e){return e?n?function(){return wt(ze(n)?n.call(this,this):n,ze(e)?e.call(this,this):e)}:e:n}function Tg(n,e){return ys(Lc(n),Lc(e))}function Lc(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function kt(n,e){return n?[...new Set([].concat(n,e))]:e}function ys(n,e){return n?wt(Object.create(null),n,e):e}function Lu(n,e){return n?Fe(n)&&Fe(e)?[...new Set([...n,...e])]:wt(Object.create(null),Cu(n),Cu(e??{})):e}function Ag(n,e){if(!n)return e;if(!e)return n;const t=wt(Object.create(null),n);for(const i in e)t[i]=kt(n[i],e[i]);return t}function Oh(){return{app:null,config:{isNativeTag:pm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wg=0;function Rg(n,e){return function(i,r=null){ze(i)||(i=wt({},i)),r!=null&&!mt(r)&&(r=null);const s=Oh(),o=new WeakSet,a=[];let c=!1;const l=s.app={_uid:wg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:d_,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&ze(u.install)?(o.add(u),u.install(l,...d)):ze(u)&&(o.add(u),u(l,...d))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,d){return d?(s.components[u]=d,l):s.components[u]},directive(u,d){return d?(s.directives[u]=d,l):s.directives[u]},mount(u,d,f){if(!c){const h=l._ceVNode||Ze(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),c=!0,l._container=u,u.__vue_app__=l,Yl(h.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Cn(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(u,d){return s.provides[u]=d,l},runWithContext(u){const d=Or;Or=l;try{return u()}finally{Or=d}}};return l}}let Or=null;function Fo(n,e){if(Pt){let t=Pt.provides;const i=Pt.parent&&Pt.parent.provides;i===t&&(t=Pt.provides=Object.create(i)),t[n]=e}}function oi(n,e,t=!1){const i=Pt||fn;if(i||Or){const r=Or?Or._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ze(e)?e.call(i&&i.proxy):e}}const Bh={},kh=()=>Object.create(Bh),Hh=n=>Object.getPrototypeOf(n)===Bh;function Cg(n,e,t,i=!1){const r={},s=kh();n.propsDefaults=Object.create(null),zh(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:mh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Pg(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=tt(r),[c]=n.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(ga(n.emitsOptions,f))continue;const h=e[f];if(c)if(ot(s,f))h!==s[f]&&(s[f]=h,l=!0);else{const g=pn(f);r[g]=Dc(c,a,g,h,n,!1)}else h!==s[f]&&(s[f]=h,l=!0)}}}else{zh(n,e,r,s)&&(l=!0);let u;for(const d in a)(!e||!ot(e,d)&&((u=ur(d))===d||!ot(e,u)))&&(c?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=Dc(c,a,d,void 0,n,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!ot(e,d))&&(delete s[d],l=!0)}l&&ii(n.attrs,"set","")}function zh(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ss(c))continue;const l=e[c];let u;r&&ot(r,u=pn(c))?!s||!s.includes(u)?t[u]=l:(a||(a={}))[u]=l:ga(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(s){const c=tt(t),l=a||ht;for(let u=0;u<s.length;u++){const d=s[u];t[d]=Dc(r,c,d,l[d],n,!ot(l,d))}}return o}function Dc(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=ot(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ze(c)){const{propsDefaults:l}=r;if(t in l)i=l[t];else{const u=$s(r);i=l[t]=c.call(null,e),u()}}else i=c;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ur(t))&&(i=!0))}return i}const Ig=new WeakMap;function Vh(n,e,t=!1){const i=t?Ig:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let c=!1;if(!ze(n)){const u=d=>{c=!0;const[f,h]=Vh(d,e,!0);wt(o,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!c)return mt(n)&&i.set(n,Lr),Lr;if(Fe(s))for(let u=0;u<s.length;u++){const d=pn(s[u]);Du(d)&&(o[d]=ht)}else if(s)for(const u in s){const d=pn(u);if(Du(d)){const f=s[u],h=o[d]=Fe(f)||ze(f)?{type:f}:wt({},f),g=h.type;let _=!1,m=!0;if(Fe(g))for(let p=0;p<g.length;++p){const A=g[p],T=ze(A)&&A.name;if(T==="Boolean"){_=!0;break}else T==="String"&&(m=!1)}else _=ze(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||ot(h,"default"))&&a.push(d)}}const l=[o,a];return mt(n)&&i.set(n,l),l}function Du(n){return n[0]!=="$"&&!Ss(n)}const Gh=n=>n[0]==="_"||n==="$stable",Xl=n=>Fe(n)?n.map(Un):[Un(n)],Lg=(n,e,t)=>{if(e._n)return e;const i=Ct((...r)=>Xl(e(...r)),t);return i._c=!1,i},Wh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Gh(r))continue;const s=n[r];if(ze(s))e[r]=Lg(r,s,i);else if(s!=null){const o=Xl(s);e[r]=()=>o}}},Xh=(n,e)=>{const t=Xl(e);n.slots.default=()=>t},qh=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Dg=(n,e,t)=>{const i=n.slots=kh();if(n.vnode.shapeFlag&32){const r=e._;r?(qh(i,e,t),t&&$f(i,"_",r,!0)):Wh(e,i)}else e&&Xh(n,e)},Ug=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ht;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:qh(r,e,t):(s=!e.$stable,Wh(e,r)),o=e}else e&&(Xh(n,e),o={default:1});if(s)for(const a in r)!Gh(a)&&o[a]==null&&delete r[a]},en=jg;function Ng(n){return Fg(n)}function Fg(n,e){const t=la();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=On,insertStaticContent:g}=n,_=(w,R,y,ie=null,$=null,q=null,ee=void 0,le=null,J=!!R.dynamicChildren)=>{if(w===R)return;w&&!tr(w,R)&&(ie=F(w),Pe(w,$,q,!0),w=null),R.patchFlag===-2&&(J=!1,R.dynamicChildren=null);const{type:b,ref:v,shapeFlag:L}=R;switch(b){case _a:m(w,R,y,ie);break;case Kt:p(w,R,y,ie);break;case Oo:w==null&&A(R,y,ie,ee);break;case dn:U(w,R,y,ie,$,q,ee,le,J);break;default:L&1?I(w,R,y,ie,$,q,ee,le,J):L&6?B(w,R,y,ie,$,q,ee,le,J):(L&64||L&128)&&b.process(w,R,y,ie,$,q,ee,le,J,ce)}v!=null&&$&&$o(v,w&&w.ref,q,R||w,!R)},m=(w,R,y,ie)=>{if(w==null)i(R.el=a(R.children),y,ie);else{const $=R.el=w.el;R.children!==w.children&&l($,R.children)}},p=(w,R,y,ie)=>{w==null?i(R.el=c(R.children||""),y,ie):R.el=w.el},A=(w,R,y,ie)=>{[w.el,w.anchor]=g(w.children,R,y,ie,w.el,w.anchor)},T=({el:w,anchor:R},y,ie)=>{let $;for(;w&&w!==R;)$=f(w),i(w,y,ie),w=$;i(R,y,ie)},x=({el:w,anchor:R})=>{let y;for(;w&&w!==R;)y=f(w),r(w),w=y;r(R)},I=(w,R,y,ie,$,q,ee,le,J)=>{R.type==="svg"?ee="svg":R.type==="math"&&(ee="mathml"),w==null?P(R,y,ie,$,q,ee,le,J):E(w,R,$,q,ee,le,J)},P=(w,R,y,ie,$,q,ee,le)=>{let J,b;const{props:v,shapeFlag:L,transition:G,dirs:Y}=w;if(J=w.el=o(w.type,q,v&&v.is,v),L&8?u(J,w.children):L&16&&N(w.children,J,null,ie,$,Na(w,q),ee,le),Y&&zi(w,null,ie,"created"),C(J,w,w.scopeId,ee,ie),v){for(const me in v)me!=="value"&&!Ss(me)&&s(J,me,null,v[me],q,ie);"value"in v&&s(J,"value",null,v.value,q),(b=v.onVnodeBeforeMount)&&Ln(b,ie,w)}Y&&zi(w,null,ie,"beforeMount");const W=Og($,G);W&&G.beforeEnter(J),i(J,R,y),((b=v&&v.onVnodeMounted)||W||Y)&&en(()=>{b&&Ln(b,ie,w),W&&G.enter(J),Y&&zi(w,null,ie,"mounted")},$)},C=(w,R,y,ie,$)=>{if(y&&h(w,y),ie)for(let q=0;q<ie.length;q++)h(w,ie[q]);if($){let q=$.subTree;if(R===q||Jh(q.type)&&(q.ssContent===R||q.ssFallback===R)){const ee=$.vnode;C(w,ee,ee.scopeId,ee.slotScopeIds,$.parent)}}},N=(w,R,y,ie,$,q,ee,le,J=0)=>{for(let b=J;b<w.length;b++){const v=w[b]=le?Ei(w[b]):Un(w[b]);_(null,v,R,y,ie,$,q,ee,le)}},E=(w,R,y,ie,$,q,ee)=>{const le=R.el=w.el;let{patchFlag:J,dynamicChildren:b,dirs:v}=R;J|=w.patchFlag&16;const L=w.props||ht,G=R.props||ht;let Y;if(y&&Vi(y,!1),(Y=G.onVnodeBeforeUpdate)&&Ln(Y,y,R,w),v&&zi(R,w,y,"beforeUpdate"),y&&Vi(y,!0),(L.innerHTML&&G.innerHTML==null||L.textContent&&G.textContent==null)&&u(le,""),b?S(w.dynamicChildren,b,le,y,ie,Na(R,$),q):ee||V(w,R,le,null,y,ie,Na(R,$),q,!1),J>0){if(J&16)D(le,L,G,y,$);else if(J&2&&L.class!==G.class&&s(le,"class",null,G.class,$),J&4&&s(le,"style",L.style,G.style,$),J&8){const W=R.dynamicProps;for(let me=0;me<W.length;me++){const ue=W[me],ge=L[ue],Ue=G[ue];(Ue!==ge||ue==="value")&&s(le,ue,ge,Ue,$,y)}}J&1&&w.children!==R.children&&u(le,R.children)}else!ee&&b==null&&D(le,L,G,y,$);((Y=G.onVnodeUpdated)||v)&&en(()=>{Y&&Ln(Y,y,R,w),v&&zi(R,w,y,"updated")},ie)},S=(w,R,y,ie,$,q,ee)=>{for(let le=0;le<R.length;le++){const J=w[le],b=R[le],v=J.el&&(J.type===dn||!tr(J,b)||J.shapeFlag&70)?d(J.el):y;_(J,b,v,null,ie,$,q,ee,!0)}},D=(w,R,y,ie,$)=>{if(R!==y){if(R!==ht)for(const q in R)!Ss(q)&&!(q in y)&&s(w,q,R[q],null,$,ie);for(const q in y){if(Ss(q))continue;const ee=y[q],le=R[q];ee!==le&&q!=="value"&&s(w,q,le,ee,$,ie)}"value"in y&&s(w,"value",R.value,y.value,$)}},U=(w,R,y,ie,$,q,ee,le,J)=>{const b=R.el=w?w.el:a(""),v=R.anchor=w?w.anchor:a("");let{patchFlag:L,dynamicChildren:G,slotScopeIds:Y}=R;Y&&(le=le?le.concat(Y):Y),w==null?(i(b,y,ie),i(v,y,ie),N(R.children||[],y,v,$,q,ee,le,J)):L>0&&L&64&&G&&w.dynamicChildren?(S(w.dynamicChildren,G,y,$,q,ee,le),(R.key!=null||$&&R===$.subTree)&&Yh(w,R,!0)):V(w,R,y,v,$,q,ee,le,J)},B=(w,R,y,ie,$,q,ee,le,J)=>{R.slotScopeIds=le,w==null?R.shapeFlag&512?$.ctx.activate(R,y,ie,ee,J):Q(R,y,ie,$,q,ee,J):ne(w,R,J)},Q=(w,R,y,ie,$,q,ee)=>{const le=w.component=i_(w,ie,$);if(fa(w)&&(le.ctx.renderer=ce),s_(le,!1,ee),le.asyncDep){if($&&$.registerDep(le,Z,ee),!w.el){const J=le.subTree=Ze(Kt);p(null,J,R,y)}}else Z(le,w,R,y,$,q,ee)},ne=(w,R,y)=>{const ie=R.component=w.component;if(qg(w,R,y))if(ie.asyncDep&&!ie.asyncResolved){j(ie,R,y);return}else ie.next=R,ie.update();else R.el=w.el,ie.vnode=R},Z=(w,R,y,ie,$,q,ee)=>{const le=()=>{if(w.isMounted){let{next:L,bu:G,u:Y,parent:W,vnode:me}=w;{const xe=jh(w);if(xe){L&&(L.el=me.el,j(w,L,ee)),xe.asyncDep.then(()=>{w.isUnmounted||le()});return}}let ue=L,ge;Vi(w,!1),L?(L.el=me.el,j(w,L,ee)):L=me,G&&Ra(G),(ge=L.props&&L.props.onVnodeBeforeUpdate)&&Ln(ge,W,L,me),Vi(w,!0);const Ue=Nu(w),de=w.subTree;w.subTree=Ue,_(de,Ue,d(de.el),F(de),w,$,q),L.el=Ue.el,ue===null&&Yg(w,Ue.el),Y&&en(Y,$),(ge=L.props&&L.props.onVnodeUpdated)&&en(()=>Ln(ge,W,L,me),$)}else{let L;const{el:G,props:Y}=R,{bm:W,m:me,parent:ue,root:ge,type:Ue}=w,de=As(R);Vi(w,!1),W&&Ra(W),!de&&(L=Y&&Y.onVnodeBeforeMount)&&Ln(L,ue,R),Vi(w,!0);{ge.ce&&ge.ce._injectChildStyle(Ue);const xe=w.subTree=Nu(w);_(null,xe,y,ie,w,$,q),R.el=xe.el}if(me&&en(me,$),!de&&(L=Y&&Y.onVnodeMounted)){const xe=R;en(()=>Ln(L,ue,xe),$)}(R.shapeFlag&256||ue&&As(ue.vnode)&&ue.vnode.shapeFlag&256)&&w.a&&en(w.a,$),w.isMounted=!0,R=y=ie=null}};w.scope.on();const J=w.effect=new th(le);w.scope.off();const b=w.update=J.run.bind(J),v=w.job=J.runIfDirty.bind(J);v.i=w,v.id=w.uid,J.scheduler=()=>Wl(v),Vi(w,!0),b()},j=(w,R,y)=>{R.component=w;const ie=w.vnode.props;w.vnode=R,w.next=null,Pg(w,R.props,ie,y),Ug(w,R.children,y),Fi(),Au(w),Oi()},V=(w,R,y,ie,$,q,ee,le,J=!1)=>{const b=w&&w.children,v=w?w.shapeFlag:0,L=R.children,{patchFlag:G,shapeFlag:Y}=R;if(G>0){if(G&128){ve(b,L,y,ie,$,q,ee,le,J);return}else if(G&256){pe(b,L,y,ie,$,q,ee,le,J);return}}Y&8?(v&16&&be(b,$,q),L!==b&&u(y,L)):v&16?Y&16?ve(b,L,y,ie,$,q,ee,le,J):be(b,$,q,!0):(v&8&&u(y,""),Y&16&&N(L,y,ie,$,q,ee,le,J))},pe=(w,R,y,ie,$,q,ee,le,J)=>{w=w||Lr,R=R||Lr;const b=w.length,v=R.length,L=Math.min(b,v);let G;for(G=0;G<L;G++){const Y=R[G]=J?Ei(R[G]):Un(R[G]);_(w[G],Y,y,null,$,q,ee,le,J)}b>v?be(w,$,q,!0,!1,L):N(R,y,ie,$,q,ee,le,J,L)},ve=(w,R,y,ie,$,q,ee,le,J)=>{let b=0;const v=R.length;let L=w.length-1,G=v-1;for(;b<=L&&b<=G;){const Y=w[b],W=R[b]=J?Ei(R[b]):Un(R[b]);if(tr(Y,W))_(Y,W,y,null,$,q,ee,le,J);else break;b++}for(;b<=L&&b<=G;){const Y=w[L],W=R[G]=J?Ei(R[G]):Un(R[G]);if(tr(Y,W))_(Y,W,y,null,$,q,ee,le,J);else break;L--,G--}if(b>L){if(b<=G){const Y=G+1,W=Y<v?R[Y].el:ie;for(;b<=G;)_(null,R[b]=J?Ei(R[b]):Un(R[b]),y,W,$,q,ee,le,J),b++}}else if(b>G)for(;b<=L;)Pe(w[b],$,q,!0),b++;else{const Y=b,W=b,me=new Map;for(b=W;b<=G;b++){const _e=R[b]=J?Ei(R[b]):Un(R[b]);_e.key!=null&&me.set(_e.key,b)}let ue,ge=0;const Ue=G-W+1;let de=!1,xe=0;const Ce=new Array(Ue);for(b=0;b<Ue;b++)Ce[b]=0;for(b=Y;b<=L;b++){const _e=w[b];if(ge>=Ue){Pe(_e,$,q,!0);continue}let Oe;if(_e.key!=null)Oe=me.get(_e.key);else for(ue=W;ue<=G;ue++)if(Ce[ue-W]===0&&tr(_e,R[ue])){Oe=ue;break}Oe===void 0?Pe(_e,$,q,!0):(Ce[Oe-W]=b+1,Oe>=xe?xe=Oe:de=!0,_(_e,R[Oe],y,null,$,q,ee,le,J),ge++)}const Ne=de?Bg(Ce):Lr;for(ue=Ne.length-1,b=Ue-1;b>=0;b--){const _e=W+b,Oe=R[_e],He=_e+1<v?R[_e+1].el:ie;Ce[b]===0?_(null,Oe,y,He,$,q,ee,le,J):de&&(ue<0||b!==Ne[ue]?we(Oe,y,He,2):ue--)}}},we=(w,R,y,ie,$=null)=>{const{el:q,type:ee,transition:le,children:J,shapeFlag:b}=w;if(b&6){we(w.component.subTree,R,y,ie);return}if(b&128){w.suspense.move(R,y,ie);return}if(b&64){ee.move(w,R,y,ce);return}if(ee===dn){i(q,R,y);for(let L=0;L<J.length;L++)we(J[L],R,y,ie);i(w.anchor,R,y);return}if(ee===Oo){T(w,R,y);return}if(ie!==2&&b&1&&le)if(ie===0)le.beforeEnter(q),i(q,R,y),en(()=>le.enter(q),$);else{const{leave:L,delayLeave:G,afterLeave:Y}=le,W=()=>i(q,R,y),me=()=>{L(q,()=>{W(),Y&&Y()})};G?G(q,W,me):me()}else i(q,R,y)},Pe=(w,R,y,ie=!1,$=!1)=>{const{type:q,props:ee,ref:le,children:J,dynamicChildren:b,shapeFlag:v,patchFlag:L,dirs:G,cacheIndex:Y}=w;if(L===-2&&($=!1),le!=null&&$o(le,null,y,w,!0),Y!=null&&(R.renderCache[Y]=void 0),v&256){R.ctx.deactivate(w);return}const W=v&1&&G,me=!As(w);let ue;if(me&&(ue=ee&&ee.onVnodeBeforeUnmount)&&Ln(ue,R,w),v&6)he(w.component,y,ie);else{if(v&128){w.suspense.unmount(y,ie);return}W&&zi(w,null,R,"beforeUnmount"),v&64?w.type.remove(w,R,y,ce,ie):b&&!b.hasOnce&&(q!==dn||L>0&&L&64)?be(b,R,y,!1,!0):(q===dn&&L&384||!$&&v&16)&&be(J,R,y),ie&&$e(w)}(me&&(ue=ee&&ee.onVnodeUnmounted)||W)&&en(()=>{ue&&Ln(ue,R,w),W&&zi(w,null,R,"unmounted")},y)},$e=w=>{const{type:R,el:y,anchor:ie,transition:$}=w;if(R===dn){re(y,ie);return}if(R===Oo){x(w);return}const q=()=>{r(y),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:ee,delayLeave:le}=$,J=()=>ee(y,q);le?le(w.el,q,J):J()}else q()},re=(w,R)=>{let y;for(;w!==R;)y=f(w),r(w),w=y;r(R)},he=(w,R,y)=>{const{bum:ie,scope:$,job:q,subTree:ee,um:le,m:J,a:b}=w;Uu(J),Uu(b),ie&&Ra(ie),$.stop(),q&&(q.flags|=8,Pe(ee,w,R,y)),le&&en(le,R),en(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},be=(w,R,y,ie=!1,$=!1,q=0)=>{for(let ee=q;ee<w.length;ee++)Pe(w[ee],R,y,ie,$)},F=w=>{if(w.shapeFlag&6)return F(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const R=f(w.anchor||w.el),y=R&&R[rg];return y?f(y):R};let se=!1;const ae=(w,R,y)=>{w==null?R._vnode&&Pe(R._vnode,null,null,!0):_(R._vnode||null,w,R,null,null,null,y),R._vnode=w,se||(se=!0,Au(),Sh(),se=!1)},ce={p:_,um:Pe,m:we,r:$e,mt:Q,mc:N,pc:V,pbc:S,n:F,o:n};return{render:ae,hydrate:void 0,createApp:Rg(ae)}}function Na({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Vi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Og(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Yh(n,e,t=!1){const i=n.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ei(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Yh(o,a)),a.type===_a&&(a.el=o.el)}}function Bg(n){const e=n.slice(),t=[0];let i,r,s,o,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(r=t[t.length-1],n[r]<l){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<l?s=a+1:o=a;l<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function jh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jh(e)}function Uu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const kg=Symbol.for("v-scx"),Hg=()=>oi(kg);function Rs(n,e,t){return Kh(n,e,t)}function Kh(n,e,t=ht){const{immediate:i,deep:r,flush:s,once:o}=t,a=wt({},t),c=e&&i||!e&&s!=="post";let l;if(zs){if(s==="sync"){const h=Hg();l=h.__watcherHandles||(h.__watcherHandles=[])}else if(!c){const h=()=>{};return h.stop=On,h.resume=On,h.pause=On,h}}const u=Pt;a.call=(h,g,_)=>Cn(h,u,g,_);let d=!1;s==="post"?a.scheduler=h=>{en(h,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():Wl(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=eg(n,e,a);return zs&&(l?l.push(f):c&&f()),f}function zg(n,e,t){const i=this.proxy,r=bt(n)?n.includes(".")?$h(i,n):()=>i[n]:n.bind(i,i);let s;ze(e)?s=e:(s=e.handler,t=e);const o=$s(this),a=Kh(r,s.bind(i),t);return o(),a}function $h(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Vg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${pn(e)}Modifiers`]||n[`${ur(e)}Modifiers`];function Gg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ht;let r=t;const s=e.startsWith("update:"),o=s&&Vg(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>bt(u)?u.trim():u)),o.number&&(r=t.map(ym)));let a,c=i[a=wa(e)]||i[a=wa(pn(e))];!c&&s&&(c=i[a=wa(ur(e))]),c&&Cn(c,n,6,r);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Cn(l,n,6,r)}}function Zh(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ze(n)){const c=l=>{const u=Zh(l,e,!0);u&&(a=!0,wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?(mt(n)&&i.set(n,null),null):(Fe(s)?s.forEach(c=>o[c]=null):wt(o,s),mt(n)&&i.set(n,o),o)}function ga(n,e){return!n||!sa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ot(n,e[0].toLowerCase()+e.slice(1))||ot(n,ur(e))||ot(n,e))}function Nu(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:_}=n,m=Ko(n);let p,A;try{if(t.shapeFlag&4){const x=r||i,I=x;p=Un(l.call(I,x,u,d,h,f,g)),A=a}else{const x=e;p=Un(x.length>1?x(d,{attrs:a,slots:o,emit:c}):x(d,null)),A=e.props?a:Wg(a)}}catch(x){Cs.length=0,da(x,n,1),p=Ze(Kt)}let T=p;if(A&&_!==!1){const x=Object.keys(A),{shapeFlag:I}=T;x.length&&I&7&&(s&&x.some(Il)&&(A=Xg(A,s)),T=Di(T,A,!1,!0))}return t.dirs&&(T=Di(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&ks(T,t.transition),p=T,Ko(m),p}const Wg=n=>{let e;for(const t in n)(t==="class"||t==="style"||sa(t))&&((e||(e={}))[t]=n[t]);return e},Xg=(n,e)=>{const t={};for(const i in n)(!Il(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function qg(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?Fu(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!ga(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Fu(i,o,l):!0:!!o;return!1}function Fu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ga(t,s))return!0}return!1}function Yg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Jh=n=>n.__isSuspense;function jg(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):ig(n)}const dn=Symbol.for("v-fgt"),_a=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),Oo=Symbol.for("v-stc"),Cs=[];let nn=null;function mn(n=!1){Cs.push(nn=n?null:[])}function Kg(){Cs.pop(),nn=Cs[Cs.length-1]||null}let Hs=1;function Ou(n,e=!1){Hs+=n,n<0&&nn&&e&&(nn.hasOnce=!0)}function Qh(n){return n.dynamicChildren=Hs>0?nn||Lr:null,Kg(),Hs>0&&nn&&nn.push(n),n}function Pn(n,e,t,i,r,s){return Qh(Yt(n,e,t,i,r,s,!0))}function $g(n,e,t,i,r){return Qh(Ze(n,e,t,i,r,!0))}function Jo(n){return n?n.__v_isVNode===!0:!1}function tr(n,e){return n.type===e.type&&n.key===e.key}const ep=({key:n})=>n??null,Bo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?bt(n)||Ft(n)||ze(n)?{i:fn,r:n,k:e,f:!!t}:n:null);function Yt(n,e=null,t=null,i=0,r=null,s=n===dn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ep(e),ref:e&&Bo(e),scopeId:Eh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:fn};return a?(ql(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=bt(t)?8:16),Hs>0&&!o&&nn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&nn.push(c),c}const Ze=Zg;function Zg(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===yg)&&(n=Kt),Jo(n)){const a=Di(n,e,!0);return t&&ql(a,t),Hs>0&&!s&&nn&&(a.shapeFlag&6?nn[nn.indexOf(n)]=a:nn.push(a)),a.patchFlag=-2,a}if(u_(n)&&(n=n.__vccOpts),e){e=Jg(e);let{class:a,style:c}=e;a&&!bt(a)&&(e.class=Nl(a)),mt(c)&&(Gl(c)&&!Fe(c)&&(c=wt({},c)),e.style=Ul(c))}const o=bt(n)?1:Jh(n)?128:Th(n)?64:mt(n)?4:ze(n)?2:0;return Yt(n,e,t,i,r,o,s,!0)}function Jg(n){return n?Gl(n)||Hh(n)?wt({},n):n:null}function Di(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:c}=n,l=e?e_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&ep(l),ref:e&&e.ref?t&&s?Fe(s)?s.concat(Bo(e)):[s,Bo(e)]:Bo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==dn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Di(n.ssContent),ssFallback:n.ssFallback&&Di(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&ks(u,c.clone(u)),u}function Ut(n=" ",e=0){return Ze(_a,null,n,e)}function va(n,e){const t=Ze(Oo,null,n);return t.staticCount=e,t}function Qg(n="",e=!1){return e?(mn(),$g(Kt,null,n)):Ze(Kt,null,n)}function Un(n){return n==null||typeof n=="boolean"?Ze(Kt):Fe(n)?Ze(dn,null,n.slice()):Jo(n)?Ei(n):Ze(_a,null,String(n))}function Ei(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Di(n)}function ql(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ql(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Hh(e)?e._ctx=fn:r===3&&fn&&(fn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:fn},t=32):(e=String(e),i&64?(t=16,e=[Ut(e)]):t=8);n.children=e,n.shapeFlag|=t}function e_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Nl([e.class,i.class]));else if(r==="style")e.style=Ul([e.style,i.style]);else if(sa(r)){const s=e[r],o=i[r];o&&s!==o&&!(Fe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Ln(n,e,t,i=null){Cn(n,e,7,[t,i])}const t_=Oh();let n_=0;function i_(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||t_,s={uid:n_++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vh(i,r),emitsOptions:Zh(i,r),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:i.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Gg.bind(null,s),n.ce&&n.ce(s),s}let Pt=null;const r_=()=>Pt||fn;let Qo,Uc;{const n=la(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Qo=e("__VUE_INSTANCE_SETTERS__",t=>Pt=t),Uc=e("__VUE_SSR_SETTERS__",t=>zs=t)}const $s=n=>{const e=Pt;return Qo(n),n.scope.on(),()=>{n.scope.off(),Qo(e)}},Bu=()=>{Pt&&Pt.scope.off(),Qo(null)};function tp(n){return n.vnode.shapeFlag&4}let zs=!1;function s_(n,e=!1,t=!1){e&&Uc(e);const{props:i,children:r}=n.vnode,s=tp(n);Cg(n,i,s,e),Dg(n,r,t);const o=s?o_(n,e):void 0;return e&&Uc(!1),o}function o_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,bg);const{setup:i}=t;if(i){Fi();const r=n.setupContext=i.length>1?c_(n):null,s=$s(n),o=Ks(i,n,0,[n.props,r]),a=Yf(o);if(Oi(),s(),(a||n.sp)&&!As(n)&&Lh(n),a){if(o.then(Bu,Bu),e)return o.then(c=>{ku(n,c)}).catch(c=>{da(c,n,0)});n.asyncDep=o}else ku(n,o)}else np(n)}function ku(n,e,t){ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:mt(e)&&(n.setupState=vh(e)),np(n)}function np(n,e,t){const i=n.type;n.render||(n.render=i.render||On);{const r=$s(n);Fi();try{Sg(n)}finally{Oi(),r()}}}const a_={get(n,e){return Nt(n,"get",""),n[e]}};function c_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,a_),slots:n.slots,emit:n.emit,expose:e}}function Yl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(vh(Ym(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ws)return ws[t](n)},has(e,t){return t in e||t in ws}})):n.proxy}function l_(n,e=!0){return ze(n)?n.displayName||n.name:n.name||e&&n.__name}function u_(n){return ze(n)&&"__vccOpts"in n}const Sn=(n,e)=>Jm(n,e,zs);function jl(n,e,t){const i=arguments.length;return i===2?mt(e)&&!Fe(e)?Jo(e)?Ze(n,null,[e]):Ze(n,e):Ze(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Jo(t)&&(t=[t]),Ze(n,e,t))}const d_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nc;const Hu=typeof window<"u"&&window.trustedTypes;if(Hu)try{Nc=Hu.createPolicy("vue",{createHTML:n=>n})}catch{}const ip=Nc?n=>Nc.createHTML(n):n=>n,f_="http://www.w3.org/2000/svg",h_="http://www.w3.org/1998/Math/MathML",ti=typeof document<"u"?document:null,zu=ti&&ti.createElement("template"),p_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?ti.createElementNS(f_,n):e==="mathml"?ti.createElementNS(h_,n):t?ti.createElement(n,{is:t}):ti.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ti.createTextNode(n),createComment:n=>ti.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ti.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{zu.innerHTML=ip(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=zu.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},hi="transition",cs="animation",Vs=Symbol("_vtc"),rp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m_=wt({},Ah,rp),g_=n=>(n.displayName="Transition",n.props=m_,n),__=g_((n,{slots:e})=>jl(ag,v_(n),e)),Gi=(n,e=[])=>{Fe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Vu=n=>n?Fe(n)?n.some(e=>e.length>1):n.length>1:!1;function v_(n){const e={};for(const U in n)U in rp||(e[U]=n[U]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:c=s,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,g=y_(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:A,onEnterCancelled:T,onLeave:x,onLeaveCancelled:I,onBeforeAppear:P=p,onAppear:C=A,onAppearCancelled:N=T}=e,E=(U,B,Q,ne)=>{U._enterCancelled=ne,Wi(U,B?u:a),Wi(U,B?l:o),Q&&Q()},S=(U,B)=>{U._isLeaving=!1,Wi(U,d),Wi(U,h),Wi(U,f),B&&B()},D=U=>(B,Q)=>{const ne=U?C:A,Z=()=>E(B,U,Q);Gi(ne,[B,Z]),Gu(()=>{Wi(B,U?c:s),qn(B,U?u:a),Vu(ne)||Wu(B,i,_,Z)})};return wt(e,{onBeforeEnter(U){Gi(p,[U]),qn(U,s),qn(U,o)},onBeforeAppear(U){Gi(P,[U]),qn(U,c),qn(U,l)},onEnter:D(!1),onAppear:D(!0),onLeave(U,B){U._isLeaving=!0;const Q=()=>S(U,B);qn(U,d),U._enterCancelled?(qn(U,f),Yu()):(Yu(),qn(U,f)),Gu(()=>{U._isLeaving&&(Wi(U,d),qn(U,h),Vu(x)||Wu(U,i,m,Q))}),Gi(x,[U,Q])},onEnterCancelled(U){E(U,!1,void 0,!0),Gi(T,[U])},onAppearCancelled(U){E(U,!0,void 0,!0),Gi(N,[U])},onLeaveCancelled(U){S(U),Gi(I,[U])}})}function y_(n){if(n==null)return null;if(mt(n))return[Fa(n.enter),Fa(n.leave)];{const e=Fa(n);return[e,e]}}function Fa(n){return xm(n)}function qn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Vs]||(n[Vs]=new Set)).add(e)}function Wi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Vs];t&&(t.delete(e),t.size||(n[Vs]=void 0))}function Gu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let x_=0;function Wu(n,e,t,i){const r=n._endId=++x_,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:c}=b_(n,e);if(!o)return i();const l=o+"end";let u=0;const d=()=>{n.removeEventListener(l,f),s()},f=h=>{h.target===n&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),n.addEventListener(l,f)}function b_(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${hi}Delay`),s=i(`${hi}Duration`),o=Xu(r,s),a=i(`${cs}Delay`),c=i(`${cs}Duration`),l=Xu(a,c);let u=null,d=0,f=0;e===hi?o>0&&(u=hi,d=o,f=s.length):e===cs?l>0&&(u=cs,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?hi:cs:null,f=u?u===hi?s.length:c.length:0);const h=u===hi&&/\b(transform|all)(,|$)/.test(i(`${hi}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function Xu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>qu(t)+qu(n[i])))}function qu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Yu(){return document.body.offsetHeight}function S_(n,e,t){const i=n[Vs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ju=Symbol("_vod"),M_=Symbol("_vsh"),E_=Symbol(""),T_=/(^|;)\s*display\s*:/;function A_(n,e,t){const i=n.style,r=bt(t);let s=!1;if(t&&!r){if(e)if(bt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ko(i,a,"")}else for(const o in e)t[o]==null&&ko(i,o,"");for(const o in t)o==="display"&&(s=!0),ko(i,o,t[o])}else if(r){if(e!==t){const o=i[E_];o&&(t+=";"+o),i.cssText=t,s=T_.test(t)}}else e&&n.removeAttribute("style");ju in n&&(n[ju]=s?i.display:"",n[M_]&&(i.display="none"))}const Ku=/\s*!important$/;function ko(n,e,t){if(Fe(t))t.forEach(i=>ko(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=w_(n,e);Ku.test(t)?n.setProperty(ur(i),t.replace(Ku,""),"important"):n[i]=t}}const $u=["Webkit","Moz","ms"],Oa={};function w_(n,e){const t=Oa[e];if(t)return t;let i=pn(e);if(i!=="filter"&&i in n)return Oa[e]=i;i=ca(i);for(let r=0;r<$u.length;r++){const s=$u[r]+i;if(s in n)return Oa[e]=s}return e}const Zu="http://www.w3.org/1999/xlink";function Ju(n,e,t,i,r,s=Am(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Zu,e.slice(6,e.length)):n.setAttributeNS(Zu,e,t):t==null||s&&!Zf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ni(t)?String(t):t)}function Qu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ip(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Zf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function R_(n,e,t,i){n.addEventListener(e,t,i)}function C_(n,e,t,i){n.removeEventListener(e,t,i)}const ed=Symbol("_vei");function P_(n,e,t,i,r=null){const s=n[ed]||(n[ed]={}),o=s[e];if(i&&o)o.value=i;else{const[a,c]=I_(e);if(i){const l=s[e]=U_(i,r);R_(n,a,l,c)}else o&&(C_(n,a,o,c),s[e]=void 0)}}const td=/(?:Once|Passive|Capture)$/;function I_(n){let e;if(td.test(n)){e={};let i;for(;i=n.match(td);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ur(n.slice(2)),e]}let Ba=0;const L_=Promise.resolve(),D_=()=>Ba||(L_.then(()=>Ba=0),Ba=Date.now());function U_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Cn(N_(i,t.value),e,5,[i])};return t.value=n,t.attached=D_(),t}function N_(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const nd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,F_=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?S_(n,i,o):e==="style"?A_(n,t,i):sa(e)?Il(e)||P_(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):O_(n,e,i,o))?(Qu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ju(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!bt(i))?Qu(n,pn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ju(n,e,i,o))};function O_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&nd(e)&&ze(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return nd(e)&&bt(t)?!1:e in n}const B_=wt({patchProp:F_},p_);let id;function k_(){return id||(id=Ng(B_))}const H_=(...n)=>{const e=k_().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=V_(i);if(!r)return;const s=e._component;!ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,z_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function z_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function V_(n){return bt(n)?document.querySelector(n):n}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Cr=typeof document<"u";function sp(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function G_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&sp(n.default)}const st=Object.assign;function ka(n,e){const t={};for(const i in e){const r=e[i];t[i]=In(r)?r.map(n):n(r)}return t}const Ps=()=>{},In=Array.isArray,op=/#/g,W_=/&/g,X_=/\//g,q_=/=/g,Y_=/\?/g,ap=/\+/g,j_=/%5B/g,K_=/%5D/g,cp=/%5E/g,$_=/%60/g,lp=/%7B/g,Z_=/%7C/g,up=/%7D/g,J_=/%20/g;function Kl(n){return encodeURI(""+n).replace(Z_,"|").replace(j_,"[").replace(K_,"]")}function Q_(n){return Kl(n).replace(lp,"{").replace(up,"}").replace(cp,"^")}function Fc(n){return Kl(n).replace(ap,"%2B").replace(J_,"+").replace(op,"%23").replace(W_,"%26").replace($_,"`").replace(lp,"{").replace(up,"}").replace(cp,"^")}function ev(n){return Fc(n).replace(q_,"%3D")}function tv(n){return Kl(n).replace(op,"%23").replace(Y_,"%3F")}function nv(n){return n==null?"":tv(n).replace(X_,"%2F")}function Gs(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const iv=/\/$/,rv=n=>n.replace(iv,"");function Ha(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=cv(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Gs(o)}}function sv(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function rd(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function ov(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Vr(e.matched[i],t.matched[r])&&dp(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Vr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function dp(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!av(n[t],e[t]))return!1;return!0}function av(n,e){return In(n)?sd(n,e):In(e)?sd(e,n):n===e}function sd(n,e){return In(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function cv(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ws;(function(n){n.pop="pop",n.push="push"})(Ws||(Ws={}));var Is;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Is||(Is={}));function lv(n){if(!n)if(Cr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),rv(n)}const uv=/^[^#]+#/;function dv(n,e){return n.replace(uv,"#")+e}function fv(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const ya=()=>({left:window.scrollX,top:window.scrollY});function hv(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=fv(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function od(n,e){return(history.state?history.state.position-e:-1)+n}const Oc=new Map;function pv(n,e){Oc.set(n,e)}function mv(n){const e=Oc.get(n);return Oc.delete(n),e}let gv=()=>location.protocol+"//"+location.host;function fp(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),rd(c,"")}return rd(t,n)+i+r}function _v(n,e,t,i){let r=[],s=[],o=null;const a=({state:f})=>{const h=fp(n,location),g=t.value,_=e.value;let m=0;if(f){if(t.value=h,e.value=f,o&&o===g){o=null;return}m=_?f.position-_.position:0}else i(h);r.forEach(p=>{p(t.value,g,{delta:m,type:Ws.pop,direction:m?m>0?Is.forward:Is.back:Is.unknown})})};function c(){o=t.value}function l(f){r.push(f);const h=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(st({},f.state,{scroll:ya()}),"")}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function ad(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?ya():null}}function vv(n){const{history:e,location:t}=window,i={value:fp(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const d=n.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+c:gv()+n+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(h){console.error(h),t[u?"replace":"assign"](f)}}function o(c,l){const u=st({},e.state,ad(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});s(c,u,!0),i.value=c}function a(c,l){const u=st({},r.value,e.state,{forward:c,scroll:ya()});s(u.current,u,!0);const d=st({},ad(i.value,c,null),{position:u.position+1},l);s(c,d,!1),i.value=c}return{location:i,state:r,push:a,replace:o}}function yv(n){n=lv(n);const e=vv(n),t=_v(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=st({location:"",base:n,go:i,createHref:dv.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function xv(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),yv(n)}function bv(n){return typeof n=="string"||n&&typeof n=="object"}function hp(n){return typeof n=="string"||typeof n=="symbol"}const pp=Symbol("");var cd;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(cd||(cd={}));function Gr(n,e){return st(new Error,{type:n,[pp]:!0},e)}function Yn(n,e){return n instanceof Error&&pp in n&&(e==null||!!(n.type&e))}const ld="[^/]+?",Sv={sensitive:!1,strict:!1,start:!0,end:!0},Mv=/[.+*?^${}()[\]/\\]/g;function Ev(n,e){const t=st({},Sv,e),i=[];let r=t.start?"^":"";const s=[];for(const l of n){const u=l.length?[]:[90];t.strict&&!l.length&&(r+="/");for(let d=0;d<l.length;d++){const f=l[d];let h=40+(t.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(Mv,"\\$&"),h+=40;else if(f.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=f;s.push({name:g,repeatable:_,optional:m});const A=p||ld;if(A!==ld){h+=10;try{new RegExp(`(${A})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${A}): `+x.message)}}let T=_?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;d||(T=m&&l.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),r+=T,h+=20,m&&(h+=-8),_&&(h+=-20),A===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(t.strict&&t.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",g=s[f-1];d[g.name]=h&&g.repeatable?h.split("/"):h}return d}function c(l){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:_,optional:m}=h,p=g in l?l[g]:"";if(In(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const A=In(p)?p.join("/"):p;if(!A)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=A}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:c}}function Tv(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function mp(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Tv(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(ud(i))return 1;if(ud(r))return-1}return r.length-i.length}function ud(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Av={type:0,value:""},wv=/[a-zA-Z0-9_]/;function Rv(n){if(!n)return[[]];if(n==="/")return[[Av]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${l}": ${h}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,c,l="",u="";function d(){l&&(t===0?s.push({type:0,value:l}):t===1||t===2||t===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),t=1):f();break;case 4:f(),t=i;break;case 1:c==="("?t=2:wv.test(c)?f():(d(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:t=3:u+=c;break;case 3:d(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),r}function Cv(n,e,t){const i=Ev(Rv(n.path),t),r=st(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Pv(n,e){const t=[],i=new Map;e=pd({strict:!1,end:!0,sensitive:!1},e);function r(d){return i.get(d)}function s(d,f,h){const g=!h,_=fd(d);_.aliasOf=h&&h.record;const m=pd(e,d),p=[_];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const I of x)p.push(fd(st({},_,{components:h?h.record.components:_.components,path:I,aliasOf:h?h.record:_})))}let A,T;for(const x of p){const{path:I}=x;if(f&&I[0]!=="/"){const P=f.record.path,C=P[P.length-1]==="/"?"":"/";x.path=f.record.path+(I&&C+I)}if(A=Cv(x,f,m),h?h.alias.push(A):(T=T||A,T!==A&&T.alias.push(A),g&&d.name&&!hd(A)&&o(d.name)),gp(A)&&c(A),_.children){const P=_.children;for(let C=0;C<P.length;C++)s(P[C],A,h&&h.children[C])}h=h||A}return T?()=>{o(T)}:Ps}function o(d){if(hp(d)){const f=i.get(d);f&&(i.delete(d),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(d);f>-1&&(t.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return t}function c(d){const f=Dv(d,t);t.splice(f,0,d),d.record.name&&!hd(d)&&i.set(d.record.name,d)}function l(d,f){let h,g={},_,m;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw Gr(1,{location:d});m=h.record.name,g=st(dd(f.params,h.keys.filter(T=>!T.optional).concat(h.parent?h.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),d.params&&dd(d.params,h.keys.map(T=>T.name))),_=h.stringify(g)}else if(d.path!=null)_=d.path,h=t.find(T=>T.re.test(_)),h&&(g=h.parse(_),m=h.record.name);else{if(h=f.name?i.get(f.name):t.find(T=>T.re.test(f.path)),!h)throw Gr(1,{location:d,currentLocation:f});m=h.record.name,g=st({},f.params,d.params),_=h.stringify(g)}const p=[];let A=h;for(;A;)p.unshift(A.record),A=A.parent;return{name:m,path:_,params:g,matched:p,meta:Lv(p)}}n.forEach(d=>s(d));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function dd(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function fd(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Iv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Iv(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function hd(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Lv(n){return n.reduce((e,t)=>st(e,t.meta),{})}function pd(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Dv(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;mp(n,e[s])<0?i=s:t=s+1}const r=Uv(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function Uv(n){let e=n;for(;e=e.parent;)if(gp(e)&&mp(n,e)===0)return e}function gp({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Nv(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(ap," "),o=s.indexOf("="),a=Gs(o<0?s:s.slice(0,o)),c=o<0?null:Gs(s.slice(o+1));if(a in e){let l=e[a];In(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function md(n){let e="";for(let t in n){const i=n[t];if(t=ev(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(In(i)?i.map(s=>s&&Fc(s)):[i&&Fc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Fv(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=In(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Ov=Symbol(""),gd=Symbol(""),$l=Symbol(""),_p=Symbol(""),Bc=Symbol("");function ls(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ti(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const l=f=>{f===!1?c(Gr(4,{from:t,to:e})):f instanceof Error?c(f):bv(f)?c(Gr(2,{from:e,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>n.call(i&&i.instances[r],e,t,l));let d=Promise.resolve(u);n.length<3&&(d=d.then(l)),d.catch(f=>c(f))})}function za(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(sp(c)){const u=(c.__vccOpts||c)[e];u&&s.push(Ti(u,t,i,o,a,r))}else{let l=c();s.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=G_(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const h=(d.__vccOpts||d)[e];return h&&Ti(h,t,i,o,a,r)()}))}}return s}function _d(n){const e=oi($l),t=oi(_p),i=Sn(()=>{const c=Ur(n.to);return e.resolve(c)}),r=Sn(()=>{const{matched:c}=i.value,{length:l}=c,u=c[l-1],d=t.matched;if(!u||!d.length)return-1;const f=d.findIndex(Vr.bind(null,u));if(f>-1)return f;const h=vd(c[l-2]);return l>1&&vd(u)===h&&d[d.length-1].path!==h?d.findIndex(Vr.bind(null,c[l-2])):f}),s=Sn(()=>r.value>-1&&Vv(t.params,i.value.params)),o=Sn(()=>r.value>-1&&r.value===t.matched.length-1&&dp(t.params,i.value.params));function a(c={}){if(zv(c)){const l=e[Ur(n.replace)?"replace":"push"](Ur(n.to)).catch(Ps);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:i,href:Sn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function Bv(n){return n.length===1?n[0]:n}const kv=Ih({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_d,setup(n,{slots:e}){const t=ua(_d(n)),{options:i}=oi($l),r=Sn(()=>({[yd(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[yd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&Bv(e.default(t));return n.custom?s:jl("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Hv=kv;function zv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Vv(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!In(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function vd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const yd=(n,e,t)=>n??e??t,Gv=Ih({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=oi(Bc),r=Sn(()=>n.route||i.value),s=oi(gd,0),o=Sn(()=>{let l=Ur(s);const{matched:u}=r.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=Sn(()=>r.value.matched[o.value]);Fo(gd,Sn(()=>o.value+1)),Fo(Ov,a),Fo(Bc,r);const c=Os();return Rs(()=>[c.value,a.value,n.name],([l,u,d],[f,h,g])=>{u&&(u.instances[d]=l,h&&h!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),l&&u&&(!h||!Vr(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=r.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return xd(t.default,{Component:f,route:l});const h=d.props[u],g=h?h===!0?l.params:typeof h=="function"?h(l):h:null,m=jl(f,st({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return xd(t.default,{Component:m,route:l})||m}}});function xd(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Wv=Gv;function Xv(n){const e=Pv(n.routes,n),t=n.parseQuery||Nv,i=n.stringifyQuery||md,r=n.history,s=ls(),o=ls(),a=ls(),c=jm(pi);let l=pi;Cr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ka.bind(null,F=>""+F),d=ka.bind(null,nv),f=ka.bind(null,Gs);function h(F,se){let ae,ce;return hp(F)?(ae=e.getRecordMatcher(F),ce=se):ce=F,e.addRoute(ce,ae)}function g(F){const se=e.getRecordMatcher(F);se&&e.removeRoute(se)}function _(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function p(F,se){if(se=st({},se||c.value),typeof F=="string"){const y=Ha(t,F,se.path),ie=e.resolve({path:y.path},se),$=r.createHref(y.fullPath);return st(y,ie,{params:f(ie.params),hash:Gs(y.hash),redirectedFrom:void 0,href:$})}let ae;if(F.path!=null)ae=st({},F,{path:Ha(t,F.path,se.path).path});else{const y=st({},F.params);for(const ie in y)y[ie]==null&&delete y[ie];ae=st({},F,{params:d(y)}),se.params=d(se.params)}const ce=e.resolve(ae,se),De=F.hash||"";ce.params=u(f(ce.params));const w=sv(i,st({},F,{hash:Q_(De),path:ce.path})),R=r.createHref(w);return st({fullPath:w,hash:De,query:i===md?Fv(F.query):F.query||{}},ce,{redirectedFrom:void 0,href:R})}function A(F){return typeof F=="string"?Ha(t,F,c.value.path):st({},F)}function T(F,se){if(l!==F)return Gr(8,{from:se,to:F})}function x(F){return C(F)}function I(F){return x(st(A(F),{replace:!0}))}function P(F){const se=F.matched[F.matched.length-1];if(se&&se.redirect){const{redirect:ae}=se;let ce=typeof ae=="function"?ae(F):ae;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=A(ce):{path:ce},ce.params={}),st({query:F.query,hash:F.hash,params:ce.path!=null?{}:F.params},ce)}}function C(F,se){const ae=l=p(F),ce=c.value,De=F.state,w=F.force,R=F.replace===!0,y=P(ae);if(y)return C(st(A(y),{state:typeof y=="object"?st({},De,y.state):De,force:w,replace:R}),se||ae);const ie=ae;ie.redirectedFrom=se;let $;return!w&&ov(i,ce,ae)&&($=Gr(16,{to:ie,from:ce}),we(ce,ce,!0,!1)),($?Promise.resolve($):S(ie,ce)).catch(q=>Yn(q)?Yn(q,2)?q:ve(q):V(q,ie,ce)).then(q=>{if(q){if(Yn(q,2))return C(st({replace:R},A(q.to),{state:typeof q.to=="object"?st({},De,q.to.state):De,force:w}),se||ie)}else q=U(ie,ce,!0,R,De);return D(ie,ce,q),q})}function N(F,se){const ae=T(F,se);return ae?Promise.reject(ae):Promise.resolve()}function E(F){const se=re.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(F):F()}function S(F,se){let ae;const[ce,De,w]=qv(F,se);ae=za(ce.reverse(),"beforeRouteLeave",F,se);for(const y of ce)y.leaveGuards.forEach(ie=>{ae.push(Ti(ie,F,se))});const R=N.bind(null,F,se);return ae.push(R),be(ae).then(()=>{ae=[];for(const y of s.list())ae.push(Ti(y,F,se));return ae.push(R),be(ae)}).then(()=>{ae=za(De,"beforeRouteUpdate",F,se);for(const y of De)y.updateGuards.forEach(ie=>{ae.push(Ti(ie,F,se))});return ae.push(R),be(ae)}).then(()=>{ae=[];for(const y of w)if(y.beforeEnter)if(In(y.beforeEnter))for(const ie of y.beforeEnter)ae.push(Ti(ie,F,se));else ae.push(Ti(y.beforeEnter,F,se));return ae.push(R),be(ae)}).then(()=>(F.matched.forEach(y=>y.enterCallbacks={}),ae=za(w,"beforeRouteEnter",F,se,E),ae.push(R),be(ae))).then(()=>{ae=[];for(const y of o.list())ae.push(Ti(y,F,se));return ae.push(R),be(ae)}).catch(y=>Yn(y,8)?y:Promise.reject(y))}function D(F,se,ae){a.list().forEach(ce=>E(()=>ce(F,se,ae)))}function U(F,se,ae,ce,De){const w=T(F,se);if(w)return w;const R=se===pi,y=Cr?history.state:{};ae&&(ce||R?r.replace(F.fullPath,st({scroll:R&&y&&y.scroll},De)):r.push(F.fullPath,De)),c.value=F,we(F,se,ae,R),ve()}let B;function Q(){B||(B=r.listen((F,se,ae)=>{if(!he.listening)return;const ce=p(F),De=P(ce);if(De){C(st(De,{replace:!0,force:!0}),ce).catch(Ps);return}l=ce;const w=c.value;Cr&&pv(od(w.fullPath,ae.delta),ya()),S(ce,w).catch(R=>Yn(R,12)?R:Yn(R,2)?(C(st(A(R.to),{force:!0}),ce).then(y=>{Yn(y,20)&&!ae.delta&&ae.type===Ws.pop&&r.go(-1,!1)}).catch(Ps),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),V(R,ce,w))).then(R=>{R=R||U(ce,w,!1),R&&(ae.delta&&!Yn(R,8)?r.go(-ae.delta,!1):ae.type===Ws.pop&&Yn(R,20)&&r.go(-1,!1)),D(ce,w,R)}).catch(Ps)}))}let ne=ls(),Z=ls(),j;function V(F,se,ae){ve(F);const ce=Z.list();return ce.length?ce.forEach(De=>De(F,se,ae)):console.error(F),Promise.reject(F)}function pe(){return j&&c.value!==pi?Promise.resolve():new Promise((F,se)=>{ne.add([F,se])})}function ve(F){return j||(j=!F,Q(),ne.list().forEach(([se,ae])=>F?ae(F):se()),ne.reset()),F}function we(F,se,ae,ce){const{scrollBehavior:De}=n;if(!Cr||!De)return Promise.resolve();const w=!ae&&mv(od(F.fullPath,0))||(ce||!ae)&&history.state&&history.state.scroll||null;return xh().then(()=>De(F,se,w)).then(R=>R&&hv(R)).catch(R=>V(R,F,se))}const Pe=F=>r.go(F);let $e;const re=new Set,he={currentRoute:c,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:x,replace:I,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:pe,install(F){const se=this;F.component("RouterLink",Hv),F.component("RouterView",Wv),F.config.globalProperties.$router=se,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Ur(c)}),Cr&&!$e&&c.value===pi&&($e=!0,x(r.location).catch(De=>{}));const ae={};for(const De in pi)Object.defineProperty(ae,De,{get:()=>c.value[De],enumerable:!0});F.provide($l,se),F.provide(_p,mh(ae)),F.provide(Bc,c);const ce=F.unmount;re.add(F),F.unmount=function(){re.delete(F),re.size<1&&(l=pi,B&&B(),B=null,c.value=pi,$e=!1,j=!1),ce()}}};function be(F){return F.reduce((se,ae)=>se.then(()=>E(ae)),Promise.resolve())}return he}function qv(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(l=>Vr(l,a))?i.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(l=>Vr(l,c))||r.push(c))}return[t,i,r]}const gn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Yv={setup(){const n="ontouchstart"in window||navigator.maxTouchPoints>0,e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,t=Os(!1),i=Os((window.innerWidth<=768||e)&&n),r=()=>{i.value=(window.innerWidth<=768||e)&&n};pa(()=>{window.addEventListener("resize",r),window.addEventListener("orientationchange",r)}),ma(()=>{window.removeEventListener("resize",r),window.removeEventListener("orientationchange",r)});const s=()=>{t.value=!t.value};return Rs(t,o=>{o?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")}),{mobileMenuOpen:t,toggleMobileMenu:s}}},jv={class:"header"},Kv={class:"container"},$v={class:"nav"},Zv={key:0,class:"mobile-menu"},Jv={class:"mobile-menu-content"};function Qv(n,e,t,i,r,s){const o=Fr("RouterLink");return mn(),Pn("header",jv,[Yt("div",Kv,[Ze(o,{to:"/",class:"logo"},{default:Ct(()=>e[2]||(e[2]=[Ut("ASpan")])),_:1}),Yt("nav",$v,[Ze(o,{to:"/microlessons",class:"nav-link"},{default:Ct(()=>e[3]||(e[3]=[Ut("Microlessons")])),_:1}),Ze(o,{to:"/islands",class:"nav-link"},{default:Ct(()=>e[4]||(e[4]=[Ut("Islands")])),_:1}),Ze(o,{to:"/volunteer",class:"nav-link"},{default:Ct(()=>e[5]||(e[5]=[Ut("Volunteer")])),_:1}),Ze(o,{to:"/hackathon",class:"nav-link"},{default:Ct(()=>e[6]||(e[6]=[Ut("Hackathon")])),_:1}),Ze(o,{to:"/about-us",class:"nav-link"},{default:Ct(()=>e[7]||(e[7]=[Ut("About Us")])),_:1})]),Yt("button",{class:"mobile-menu-button",onClick:e[0]||(e[0]=(...a)=>i.toggleMobileMenu&&i.toggleMobileMenu(...a))},"☰")]),Ze(__,{name:"mobile-menu"},{default:Ct(()=>[i.mobileMenuOpen?(mn(),Pn("div",Zv,[Yt("button",{class:"close-button",onClick:e[1]||(e[1]=(...a)=>i.toggleMobileMenu&&i.toggleMobileMenu(...a))},"×"),Yt("div",Jv,[Ze(o,{to:"/microlessons",class:"mobile-menu-item"},{default:Ct(()=>e[8]||(e[8]=[Ut("Microlessons")])),_:1}),Ze(o,{to:"/islands",class:"mobile-menu-item"},{default:Ct(()=>e[9]||(e[9]=[Ut("Islands")])),_:1}),Ze(o,{to:"/volunteer",class:"mobile-menu-item"},{default:Ct(()=>e[10]||(e[10]=[Ut("Volunteer")])),_:1}),Ze(o,{to:"/hackathon",class:"mobile-menu-item"},{default:Ct(()=>e[11]||(e[11]=[Ut("Hackathon")])),_:1}),Ze(o,{to:"/about-us",class:"mobile-menu-item"},{default:Ct(()=>e[12]||(e[12]=[Ut("About Us")])),_:1})])])):Qg("",!0)]),_:1})])}const ey=gn(Yv,[["render",Qv],["__scopeId","data-v-47e103f5"]]),ty="/aspan_web/assets/instagram-icon.png",ny="/aspan_web/assets/whatsapp-icon.png",iy={data(){return{currentYear:new Date().getFullYear()}}},ry={class:"main-footer"},sy={class:"footer-navigation"},oy={class:"footer-credit"};function ay(n,e,t,i,r,s){const o=Fr("RouterLink");return mn(),Pn("footer",ry,[e[4]||(e[4]=va('<div class="social-links" data-v-440cfd8b><a href="https://www.instagram.com" target="_blank" data-v-440cfd8b><img src="'+ty+'" alt="Instagram" data-v-440cfd8b></a><a href="https://www.whatsapp.com" target="_blank" data-v-440cfd8b><img src="'+ny+'" alt="WhatsApp" data-v-440cfd8b></a></div>',1)),Yt("ul",sy,[Yt("li",null,[Ze(o,{to:"/",class:"footer-element"},{default:Ct(()=>e[0]||(e[0]=[Ut("Home")])),_:1})]),Yt("li",null,[Ze(o,{to:"/about-us",class:"footer-element"},{default:Ct(()=>e[1]||(e[1]=[Ut("About Us")])),_:1})]),Yt("li",null,[Ze(o,{to:"/terms-of-use",class:"footer-element"},{default:Ct(()=>e[2]||(e[2]=[Ut("Terms of Use")])),_:1})]),Yt("li",null,[Ze(o,{to:"/privacy-policy",class:"footer-element"},{default:Ct(()=>e[3]||(e[3]=[Ut("Privacy Policy")])),_:1})])]),Yt("p",oy,"ASpan © "+Qf(r.currentYear),1)])}const cy=gn(iy,[["render",ay],["__scopeId","data-v-440cfd8b"]]),ly={components:{Header:ey,Footer:cy}};function uy(n,e,t,i,r,s){const o=Fr("Header"),a=Fr("RouterView"),c=Fr("Footer");return mn(),Pn(dn,null,[Ze(o),Yt("main",null,[Ze(a)]),Ze(c)],64)}const dy=gn(ly,[["render",uy]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zl="173",fy=0,bd=1,hy=2,vp=1,py=2,ei=3,li=0,$t=1,Fn=2,Ii=0,Br=1,Sd=2,Md=3,Ed=4,my=5,nr=100,gy=101,_y=102,vy=103,yy=104,xy=200,by=201,Sy=202,My=203,kc=204,Hc=205,Ey=206,Ty=207,Ay=208,wy=209,Ry=210,Cy=211,Py=212,Iy=213,Ly=214,zc=0,Vc=1,Gc=2,Wr=3,Wc=4,Xc=5,qc=6,Yc=7,yp=0,Dy=1,Uy=2,Li=0,Ny=1,Fy=2,Oy=3,xp=4,By=5,ky=6,Hy=7,Td="attached",zy="detached",bp=300,Xr=301,qr=302,jc=303,Kc=304,xa=306,Yr=1e3,Ri=1001,ea=1002,Gt=1003,Sp=1004,xs=1005,rn=1006,Ho=1007,ri=1008,ui=1009,Mp=1010,Ep=1011,Xs=1012,Jl=1013,cr=1014,Tn=1015,Zs=1016,Ql=1017,eu=1018,jr=1020,Tp=35902,Ap=1021,wp=1022,hn=1023,Rp=1024,Cp=1025,kr=1026,Kr=1027,tu=1028,nu=1029,Pp=1030,iu=1031,ru=1033,zo=33776,Vo=33777,Go=33778,Wo=33779,$c=35840,Zc=35841,Jc=35842,Qc=35843,el=36196,tl=37492,nl=37496,il=37808,rl=37809,sl=37810,ol=37811,al=37812,cl=37813,ll=37814,ul=37815,dl=37816,fl=37817,hl=37818,pl=37819,ml=37820,gl=37821,Xo=36492,_l=36494,vl=36495,Ip=36283,yl=36284,xl=36285,bl=36286,qs=2300,Ys=2301,Va=2302,Ad=2400,wd=2401,Rd=2402,Vy=2500,Gy=0,Lp=1,Sl=2,Wy=3200,Xy=3201,Dp=0,qy=1,wi="",Tt="srgb",Xt="srgb-linear",ta="linear",ut="srgb",hr=7680,Cd=519,Yy=512,jy=513,Ky=514,Up=515,$y=516,Zy=517,Jy=518,Qy=519,Ml=35044,Pd="300 es",si=2e3,na=2001;class ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Id=1234567;const Ls=Math.PI/180,$r=180/Math.PI;function Rn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function su(n,e){return(n%e+e)%e}function e0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function t0(n,e,t){return n!==e?(t-n)/(e-n):0}function Ds(n,e,t){return(1-t)*n+t*e}function n0(n,e,t,i){return Ds(n,e,1-Math.exp(-t*i))}function i0(n,e=1){return e-Math.abs(su(n,e*2)-e)}function r0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function s0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function o0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function a0(n,e){return n+Math.random()*(e-n)}function c0(n){return n*(.5-Math.random())}function l0(n){n!==void 0&&(Id=n);let e=Id+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function u0(n){return n*Ls}function d0(n){return n*$r}function f0(n){return(n&n-1)===0&&n!==0}function h0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function p0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function m0(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*h,a*l);break;case"YXY":n.set(c*h,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*h,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const g0={DEG2RAD:Ls,RAD2DEG:$r,generateUUID:Rn,clamp:Ye,euclideanModulo:su,mapLinear:e0,inverseLerp:t0,lerp:Ds,damp:n0,pingpong:i0,smoothstep:r0,smootherstep:s0,randInt:o0,randFloat:a0,randFloatSpread:c0,seededRandom:l0,degToRad:u0,radToDeg:d0,isPowerOfTwo:f0,ceilPowerOfTwo:h0,floorPowerOfTwo:p0,setQuaternionFromProperEuler:m0,normalize:ct,denormalize:Mn};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,o,a,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],A=r[1],T=r[4],x=r[7],I=r[2],P=r[5],C=r[8];return s[0]=o*_+a*A+c*I,s[3]=o*m+a*T+c*P,s[6]=o*p+a*x+c*C,s[1]=l*_+u*A+d*I,s[4]=l*m+u*T+d*P,s[7]=l*p+u*x+d*C,s[2]=f*_+h*A+g*I,s[5]=f*m+h*T+g*P,s[8]=f*p+h*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ga.makeScale(e,t)),this}rotate(e){return this.premultiply(Ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ga=new Xe;function Np(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _0(){const n=js("canvas");return n.style.display="block",n}const Ld={};function Pr(n){n in Ld||(Ld[n]=!0,console.warn(n))}function v0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function y0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function x0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Dd=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ud=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b0(){const n={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=ai(r.r),r.g=ai(r.g),r.b=ai(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=Hr(r.r),r.g=Hr(r.g),r.b=Hr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?ta:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xt]:{primaries:e,whitePoint:i,transfer:ta,toXYZ:Dd,fromXYZ:Ud,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:Dd,fromXYZ:Ud,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),n}const Je=b0();function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let pr;class S0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pr===void 0&&(pr=js("canvas")),pr.width=e.width,pr.height=e.height;const i=pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=pr}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=js("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ai(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ai(t[i]/255)*255):t[i]=ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let M0=0;class Fp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wa(r[o].image)):s.push(Wa(r[o]))}else s=Wa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Wa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?S0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let E0=0;class At extends ts{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,i=Ri,r=Ri,s=rn,o=ri,a=hn,c=ui,l=At.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Rn(),this.name="",this.source=new Fp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yr:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yr:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=bp;At.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,x=(h+1)/2,I=(p+1)/2,P=(u+f)/4,C=(d+_)/4,N=(g+m)/4;return T>x&&T>I?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=P/i,s=C/i):x>I?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=P/r,s=N/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=C/s,r=N/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(d-_)/A,this.z=(f-u)/A,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class T0 extends ts{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new At(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Fp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends T0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Op extends At{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class A0 extends At{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==f||l!==h||u!==g){let m=1-a;const p=c*f+l*h+u*g+d*_,A=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const I=Math.sqrt(T),P=Math.atan2(I,p*A);m=Math.sin(m*P)/I,a=Math.sin(a*P)/I}const x=a*A;if(c=c*m+f*x,l=l*m+h*x,u=u*m+g*x,d=d*m+_*x,m===1-a){const I=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=I,l*=I,u*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xa.copy(this).projectOnVector(e),this.sub(Xa)}reflect(e){return this.sub(Xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xa=new z,Nd=new Bi;class fi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(s,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ao.copy(i.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(us),co.subVectors(this.max,us),mr.subVectors(e.a,us),gr.subVectors(e.b,us),_r.subVectors(e.c,us),mi.subVectors(gr,mr),gi.subVectors(_r,gr),Xi.subVectors(mr,_r);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Xi.z,Xi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Xi.z,0,-Xi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Xi.y,Xi.x,0];return!qa(t,mr,gr,_r,co)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,mr,gr,_r,co))?!1:(lo.crossVectors(mi,gi),t=[lo.x,lo.y,lo.z],qa(t,mr,gr,_r,co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new z,new z,new z,new z,new z,new z,new z,new z],yn=new z,ao=new fi,mr=new z,gr=new z,_r=new z,mi=new z,gi=new z,Xi=new z,us=new z,co=new z,lo=new z,qi=new z;function qa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){qi.fromArray(n,s);const a=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),c=e.dot(qi),l=t.dot(qi),u=i.dot(qi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const w0=new fi,ds=new z,Ya=new z;class Hn{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):w0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);const t=ds.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ds,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add(Ya)),this.expandByPoint(ds.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new z,ja=new z,uo=new z,_i=new z,Ka=new z,fo=new z,$a=new z;class Js{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ja.copy(e).add(t).multiplyScalar(.5),uo.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(ja);const s=e.distanceTo(t)*.5,o=-this.direction.dot(uo),a=_i.dot(this.direction),c=-_i.dot(uo),l=_i.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ja).addScaledVector(uo,f),h}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,i,r,s){Ka.subVectors(t,e),fo.subVectors(i,e),$a.crossVectors(Ka,fo);let o=this.direction.dot($a),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);const c=a*this.direction.dot(fo.crossVectors(_i,fo));if(c<0)return null;const l=a*this.direction.dot(Ka.cross(_i));if(l<0||c+l>o)return null;const u=-a*_i.dot($a);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,g,_,m){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,_,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/vr.setFromMatrixColumn(e,0).length(),s=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,h=c*d,g=l*u,_=l*d;t[0]=f+_*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,h=c*d,g=l*u,_=l*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,h=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*c,h=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+_,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R0,e,C0)}lookAt(e,t,i){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),vi.crossVectors(i,Jt),vi.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),vi.crossVectors(i,Jt)),vi.normalize(),ho.crossVectors(Jt,vi),r[0]=vi.x,r[4]=ho.x,r[8]=Jt.x,r[1]=vi.y,r[5]=ho.y,r[9]=Jt.y,r[2]=vi.z,r[6]=ho.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],A=i[3],T=i[7],x=i[11],I=i[15],P=r[0],C=r[4],N=r[8],E=r[12],S=r[1],D=r[5],U=r[9],B=r[13],Q=r[2],ne=r[6],Z=r[10],j=r[14],V=r[3],pe=r[7],ve=r[11],we=r[15];return s[0]=o*P+a*S+c*Q+l*V,s[4]=o*C+a*D+c*ne+l*pe,s[8]=o*N+a*U+c*Z+l*ve,s[12]=o*E+a*B+c*j+l*we,s[1]=u*P+d*S+f*Q+h*V,s[5]=u*C+d*D+f*ne+h*pe,s[9]=u*N+d*U+f*Z+h*ve,s[13]=u*E+d*B+f*j+h*we,s[2]=g*P+_*S+m*Q+p*V,s[6]=g*C+_*D+m*ne+p*pe,s[10]=g*N+_*U+m*Z+p*ve,s[14]=g*E+_*B+m*j+p*we,s[3]=A*P+T*S+x*Q+I*V,s[7]=A*C+T*D+x*ne+I*pe,s[11]=A*N+T*U+x*Z+I*ve,s[15]=A*E+T*B+x*j+I*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*h-i*c*h)+_*(+t*c*h-t*l*f+s*o*f-r*o*h+r*l*u-s*c*u)+m*(+t*l*d-t*a*h-s*o*d+i*o*h+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],A=d*m*l-_*f*l+_*c*h-a*m*h-d*c*p+a*f*p,T=g*f*l-u*m*l-g*c*h+o*m*h+u*c*p-o*f*p,x=u*_*l-g*d*l+g*a*h-o*_*h-u*a*p+o*d*p,I=g*d*c-u*_*c-g*a*f+o*_*f+u*a*m-o*d*m,P=t*A+i*T+r*x+s*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=A*C,e[1]=(_*f*s-d*m*s-_*r*h+i*m*h+d*r*p-i*f*p)*C,e[2]=(a*m*s-_*c*s+_*r*l-i*m*l-a*r*p+i*c*p)*C,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*h-i*c*h)*C,e[4]=T*C,e[5]=(u*m*s-g*f*s+g*r*h-t*m*h-u*r*p+t*f*p)*C,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*C,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*h+t*c*h)*C,e[8]=x*C,e[9]=(g*d*s-u*_*s-g*i*h+t*_*h+u*i*p-t*d*p)*C,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*p+t*a*p)*C,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*h-t*a*h)*C,e[12]=I*C,e[13]=(u*_*r-g*d*r+g*i*f-t*_*f-u*i*m+t*d*m)*C,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*m-t*a*m)*C,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,g=s*d,_=o*u,m=o*d,p=a*d,A=c*l,T=c*u,x=c*d,I=i.x,P=i.y,C=i.z;return r[0]=(1-(_+p))*I,r[1]=(h+x)*I,r[2]=(g-T)*I,r[3]=0,r[4]=(h-x)*P,r[5]=(1-(f+p))*P,r[6]=(m+A)*P,r[7]=0,r[8]=(g+T)*C,r[9]=(m-A)*C,r[10]=(1-(f+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=vr.set(r[0],r[1],r[2]).length();const o=vr.set(r[4],r[5],r[6]).length(),a=vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);const l=1/s,u=1/o,d=1/a;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,t.setFromRotationMatrix(xn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=si){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let h,g;if(a===si)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===na)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=si){const c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,h=(i+r)*u;let g,_;if(a===si)g=(o+s)*d,_=-2*d;else if(a===na)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vr=new z,xn=new Ge,R0=new z(0,0,0),C0=new z(1,1,1),vi=new z,ho=new z,Jt=new z,Fd=new Ge,Od=new Bi;class kn{constructor(e=0,t=0,i=0,r=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Od.setFromEuler(this),this.setFromQuaternion(Od,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P0=0;const Bd=new z,yr=new Bi,$n=new Ge,po=new z,fs=new z,I0=new z,L0=new Bi,kd=new z(1,0,0),Hd=new z(0,1,0),zd=new z(0,0,1),Vd={type:"added"},D0={type:"removed"},xr={type:"childadded",child:null},Za={type:"childremoved",child:null};class gt extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new z,t=new kn,i=new Bi,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Xe}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(kd,e)}rotateY(e){return this.rotateOnAxis(Hd,e)}rotateZ(e){return this.rotateOnAxis(zd,e)}translateOnAxis(e,t){return Bd.copy(e).applyQuaternion(this.quaternion),this.position.add(Bd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kd,e)}translateY(e){return this.translateOnAxis(Hd,e)}translateZ(e){return this.translateOnAxis(zd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?po.copy(e):po.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(fs,po,this.up):$n.lookAt(po,fs,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),yr.setFromRotationMatrix($n),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vd),xr.child=e,this.dispatchEvent(xr),xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(D0),Za.child=e,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vd),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,I0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,L0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gt.DEFAULT_UP=new z(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new z,Zn=new z,Ja=new z,Jn=new z,br=new z,Sr=new z,Gd=new z,Qa=new z,ec=new z,tc=new z,nc=new nt,ic=new nt,rc=new nt;class En{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),bn.subVectors(e,t),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){bn.subVectors(r,t),Zn.subVectors(i,t),Ja.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(Zn),c=bn.dot(Ja),l=Zn.dot(Zn),u=Zn.dot(Ja),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Jn.x),c.addScaledVector(o,Jn.y),c.addScaledVector(a,Jn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return nc.setScalar(0),ic.setScalar(0),rc.setScalar(0),nc.fromBufferAttribute(e,t),ic.fromBufferAttribute(e,i),rc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(nc,s.x),o.addScaledVector(ic,s.y),o.addScaledVector(rc,s.z),o}static isFrontFacing(e,t,i,r){return bn.subVectors(i,t),Zn.subVectors(e,t),bn.cross(Zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),bn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return En.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;br.subVectors(r,i),Sr.subVectors(s,i),Qa.subVectors(e,i);const c=br.dot(Qa),l=Sr.dot(Qa);if(c<=0&&l<=0)return t.copy(i);ec.subVectors(e,r);const u=br.dot(ec),d=Sr.dot(ec);if(u>=0&&d<=u)return t.copy(r);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(br,o);tc.subVectors(e,s);const h=br.dot(tc),g=Sr.dot(tc);if(g>=0&&h<=g)return t.copy(s);const _=h*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Sr,a);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return Gd.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(Gd,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(br,o).addScaledVector(Sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},mo={h:0,s:0,l:0};function sc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=su(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=sc(o,s,e+1/3),this.g=sc(o,s,e),this.b=sc(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=Tt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const i=Bp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Je.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Ye(Dt.r*255,0,255))*65536+Math.round(Ye(Dt.g*255,0,255))*256+Math.round(Ye(Dt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,r=Dt.g,s=Dt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Tt){Je.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,r=Dt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(mo);const i=Ds(yi.h,mo.h,t),r=Ds(yi.s,mo.s,t),s=Ds(yi.l,mo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Ve;Ve.NAMES=Bp;let U0=0;class Bn extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Br,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Hc,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kc&&(i.blendSrc=this.blendSrc),this.blendDst!==Hc&&(i.blendDst=this.blendDst),this.blendEquation!==nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rr extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=yp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new z,go=new Ke;let N0=0;class Wt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:N0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ml,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)go.fromBufferAttribute(this,t),go.applyMatrix3(e),this.setXY(t,go.x,go.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ml&&(e.usage=this.usage),e}}class kp extends Wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Hp extends Wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ci extends Wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let F0=0;const ln=new Ge,oc=new gt,Mr=new z,Qt=new fi,hs=new fi,Et=new z;class zn extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Np(e)?Hp:kp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,i){return ln.makeTranslation(e,t,i),this.applyMatrix4(ln),this}scale(e,t,i){return ln.makeScale(e,t,i),this.applyMatrix4(ln),this}lookAt(e){return oc.lookAt(e),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ci(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(Qt.min,hs.min),Qt.expandByPoint(Et),Et.addVectors(Qt.max,hs.max),Qt.expandByPoint(Et)):(Qt.expandByPoint(hs.min),Qt.expandByPoint(hs.max))}Qt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Et.fromBufferAttribute(a,l),c&&(Mr.fromBufferAttribute(e,l),Et.add(Mr)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new z,c[N]=new z;const l=new z,u=new z,d=new z,f=new Ke,h=new Ke,g=new Ke,_=new z,m=new z;function p(N,E,S){l.fromBufferAttribute(i,N),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,N),h.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),u.sub(l),d.sub(l),h.sub(f),g.sub(f);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(D),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[N].add(_),a[E].add(_),a[S].add(_),c[N].add(m),c[E].add(m),c[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,E=A.length;N<E;++N){const S=A[N],D=S.start,U=S.count;for(let B=D,Q=D+U;B<Q;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new z,x=new z,I=new z,P=new z;function C(N){I.fromBufferAttribute(r,N),P.copy(I);const E=a[N];T.copy(E),T.sub(I.multiplyScalar(I.dot(E))).normalize(),x.crossVectors(P,E);const D=x.dot(c[N])<0?-1:1;o.setXYZW(N,T.x,T.y,T.z,D)}for(let N=0,E=A.length;N<E;++N){const S=A[N],D=S.start,U=S.count;for(let B=D,Q=D+U;B<Q;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,o=new z,a=new z,c=new z,l=new z,u=new z,d=new z;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let h=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?h=c[_]*a.data.stride+a.offset:h=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new Wt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wd=new Ge,Yi=new Js,_o=new Hn,Xd=new z,vo=new z,yo=new z,xo=new z,ac=new z,bo=new z,qd=new z,So=new z;class sn extends gt{constructor(e=new zn,t=new rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){bo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(ac.fromBufferAttribute(d,e),o?bo.addScaledVector(ac,u):bo.addScaledVector(ac.sub(t),u))}t.add(bo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(s),Yi.copy(e.ray).recast(e.near),!(_o.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(_o,Xd)===null||Yi.origin.distanceToSquared(Xd)>(e.far-e.near)**2))&&(Wd.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(Wd),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],A=Math.max(m.start,h.start),T=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let x=A,I=T;x<I;x+=3){const P=a.getX(x),C=a.getX(x+1),N=a.getX(x+2);r=Mo(this,p,e,i,l,u,d,P,C,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const A=a.getX(m),T=a.getX(m+1),x=a.getX(m+2);r=Mo(this,o,e,i,l,u,d,A,T,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],A=Math.max(m.start,h.start),T=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let x=A,I=T;x<I;x+=3){const P=x,C=x+1,N=x+2;r=Mo(this,p,e,i,l,u,d,P,C,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const A=m,T=m+1,x=m+2;r=Mo(this,o,e,i,l,u,d,A,T,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function O0(n,e,t,i,r,s,o,a){let c;if(e.side===$t?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===li,a),c===null)return null;So.copy(a),So.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(So);return l<t.near||l>t.far?null:{distance:l,point:So.clone(),object:n}}function Mo(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,vo),n.getVertexPosition(c,yo),n.getVertexPosition(l,xo);const u=O0(n,e,t,i,vo,yo,xo,qd);if(u){const d=new z;En.getBarycoord(qd,vo,yo,xo,d),r&&(u.uv=En.getInterpolatedAttribute(r,a,c,l,d,new Ke)),s&&(u.uv1=En.getInterpolatedAttribute(s,a,c,l,d,new Ke)),o&&(u.normal=En.getInterpolatedAttribute(o,a,c,l,d,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new z,materialIndex:0};En.getNormal(vo,yo,xo,f.normal),u.face=f,u.barycoord=d}return u}class Qs extends zn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ci(l,3)),this.setAttribute("normal",new ci(u,3)),this.setAttribute("uv",new ci(d,2));function g(_,m,p,A,T,x,I,P,C,N,E){const S=x/C,D=I/N,U=x/2,B=I/2,Q=P/2,ne=C+1,Z=N+1;let j=0,V=0;const pe=new z;for(let ve=0;ve<Z;ve++){const we=ve*D-B;for(let Pe=0;Pe<ne;Pe++){const $e=Pe*S-U;pe[_]=$e*A,pe[m]=we*T,pe[p]=Q,l.push(pe.x,pe.y,pe.z),pe[_]=0,pe[m]=0,pe[p]=P>0?1:-1,u.push(pe.x,pe.y,pe.z),d.push(Pe/C),d.push(1-ve/N),j+=1}}for(let ve=0;ve<N;ve++)for(let we=0;we<C;we++){const Pe=f+we+ne*ve,$e=f+we+ne*(ve+1),re=f+(we+1)+ne*(ve+1),he=f+(we+1)+ne*ve;c.push(Pe,$e,he),c.push($e,re,he),V+=6}a.addGroup(h,V,E),h+=V,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=Zr(n[t]);for(const r in i)e[r]=i[r]}return e}function B0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const k0={clone:Zr,merge:Ht};var H0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H0,this.fragmentShader=z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=B0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vp extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new z,Yd=new Ke,jd=new Ke;class jt extends Vp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Yd,jd),t.subVectors(jd,Yd)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ls*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Er=-90,Tr=1;class V0 extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jt(Er,Tr,e,t);r.layers=this.layers,this.add(r);const s=new jt(Er,Tr,e,t);s.layers=this.layers,this.add(s);const o=new jt(Er,Tr,e,t);o.layers=this.layers,this.add(o);const a=new jt(Er,Tr,e,t);a.layers=this.layers,this.add(a);const c=new jt(Er,Tr,e,t);c.layers=this.layers,this.add(c);const l=new jt(Er,Tr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Gp extends At{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Xr,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class G0 extends lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Gp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qs(5,5,5),s=new Ui({name:"CubemapFromEquirect",uniforms:Zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:Ii});s.uniforms.tEquirect.value=t;const o=new sn(r,s),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=rn),new V0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class sr extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W0={type:"move"};class cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(W0)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new sr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class X0 extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class q0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ml,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new z;class au{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new au(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Kd=new z,$d=new nt,Zd=new nt,Y0=new z,Jd=new Ge,Eo=new z,lc=new Hn,Qd=new Ge,uc=new Js;class j0 extends sn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Td,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Eo),this.boundingBox.expandByPoint(Eo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Eo),this.boundingSphere.expandByPoint(Eo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lc.copy(this.boundingSphere),lc.applyMatrix4(r),e.ray.intersectsSphere(lc)!==!1&&(Qd.copy(r).invert(),uc.copy(e.ray).applyMatrix4(Qd),!(this.boundingBox!==null&&uc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,uc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Td?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;$d.fromBufferAttribute(r.attributes.skinIndex,e),Zd.fromBufferAttribute(r.attributes.skinWeight,e),Kd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Zd.getComponent(s);if(o!==0){const a=$d.getComponent(s);Jd.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Y0.copy(Kd).applyMatrix4(Jd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Wp extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xp extends At{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Gt,u=Gt,d,f){super(null,o,a,c,l,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ef=new Ge,K0=new Ge;class cu{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ge;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:K0;ef.multiplyMatrices(a,t[s]),ef.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new cu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Xp(t,e,e,hn,Tn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Wp),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class El extends Wt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ar=new Ge,tf=new Ge,To=[],nf=new fi,$0=new Ge,ps=new sn,ms=new Hn;class Z0 extends sn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new El(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,$0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),nf.copy(e.boundingBox).applyMatrix4(Ar),this.boundingBox.union(nf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ar),ms.copy(e.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ms.copy(this.boundingSphere),ms.applyMatrix4(i),e.ray.intersectsSphere(ms)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ar),tf.multiplyMatrices(i,Ar),ps.matrixWorld=tf,ps.raycast(e,To);for(let o=0,a=To.length;o<a;o++){const c=To[o];c.instanceId=s,c.object=this,t.push(c)}To.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new El(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Xp(new Float32Array(r*this.count),r,this.count,tu,Tn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const dc=new z,J0=new z,Q0=new Xe;class Qi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=dc.subVectors(i,t).cross(J0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(dc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Q0.getNormalMatrix(e),r=this.coplanarPoint(dc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new Hn,Ao=new z;class lu{constructor(e=new Qi,t=new Qi,i=new Qi,r=new Qi,s=new Qi,o=new Qi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],h=r[8],g=r[9],_=r[10],m=r[11],p=r[12],A=r[13],T=r[14],x=r[15];if(i[0].setComponents(c-s,f-l,m-h,x-p).normalize(),i[1].setComponents(c+s,f+l,m+h,x+p).normalize(),i[2].setComponents(c+o,f+u,m+g,x+A).normalize(),i[3].setComponents(c-o,f-u,m-g,x-A).normalize(),i[4].setComponents(c-a,f-d,m-_,x-T).normalize(),t===si)i[5].setComponents(c+a,f+d,m+_,x+T).normalize();else if(t===na)i[5].setComponents(a,d,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ao.x=r.normal.x>0?e.max.x:e.min.x,Ao.y=r.normal.y>0?e.max.y:e.min.y,Ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qp extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ia=new z,ra=new z,rf=new Ge,gs=new Js,wo=new Hn,fc=new z,sf=new z;class uu extends gt{constructor(e=new zn,t=new qp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ia.fromBufferAttribute(t,r-1),ra.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ia.distanceTo(ra);e.setAttribute("lineDistance",new ci(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(r),wo.radius+=s,e.ray.intersectsSphere(wo)===!1)return;rf.copy(r).invert(),gs.copy(e.ray).applyMatrix4(rf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=l){const p=u.getX(_),A=u.getX(_+1),T=Ro(this,e,gs,c,p,A,_);T&&t.push(T)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=Ro(this,e,gs,c,_,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=l){const p=Ro(this,e,gs,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Ro(this,e,gs,c,g-1,h,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ro(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(ia.fromBufferAttribute(a,r),ra.fromBufferAttribute(a,s),t.distanceSqToSegment(ia,ra,fc,sf)>i)return;fc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(fc);if(!(l<e.near||l>e.far))return{distance:l,point:sf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const of=new z,af=new z;class ex extends uu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)of.fromBufferAttribute(t,r),af.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+of.distanceTo(af);e.setAttribute("lineDistance",new ci(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tx extends uu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Yp extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cf=new Ge,Tl=new Js,Co=new Hn,Po=new z;class nx extends gt{constructor(e=new zn,t=new Yp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(r),Co.radius+=s,e.ray.intersectsSphere(Co)===!1)return;cf.copy(r).invert(),Tl.copy(e.ray).applyMatrix4(cf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=f,_=h;g<_;g++){const m=l.getX(g);Po.fromBufferAttribute(d,m),lf(Po,m,c,r,e,t,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,_=h;g<_;g++)Po.fromBufferAttribute(d,g),lf(Po,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function lf(n,e,t,i,r,s,o){const a=Tl.distanceSqToPoint(n);if(a<t){const c=new z;Tl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class jp extends At{constructor(e,t,i,r,s,o,a,c,l,u=kr){if(u!==kr&&u!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===kr&&(i=cr),i===void 0&&u===Kr&&(i=jr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gt,this.minFilter=c!==void 0?c:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ba extends zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const A=p*f-o;for(let T=0;T<l;T++){const x=T*d-s;g.push(x,-A,0),_.push(0,0,1),m.push(T/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let A=0;A<a;A++){const T=A+l*p,x=A+l*(p+1),I=A+1+l*(p+1),P=A+1+l*p;h.push(T,x,P),h.push(x,I,P)}this.setIndex(h),this.setAttribute("position",new ci(g,3)),this.setAttribute("normal",new ci(_,3)),this.setAttribute("uv",new ci(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.widthSegments,e.heightSegments)}}class du extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dp,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vn extends du{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ix extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rx extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Io(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function sx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ox(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function uf(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r}function Kp(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class eo{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ax extends eo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ad,endingEnd:Ad}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case wd:s=e,a=2*t-i;break;case Rd:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case wd:o=e,c=2*i-t;break;case Rd:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}const l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,A=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,T=(-1-h)*m+(1.5+h)*_+.5*g,x=h*m-h*_;for(let I=0;I!==a;++I)s[I]=p*o[u+I]+A*o[l+I]+T*o[c+I]+x*o[d+I];return s}}class cx extends eo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}}class lx extends eo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Gn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Io(t,this.TimeBufferType),this.values=Io(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Io(e.times,Array),values:Io(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new lx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ax(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case Ys:t=this.InterpolantFactoryMethodLinear;break;case Va:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Ys;case this.InterpolantFactoryMethodSmooth:return Va}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&sx(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Va,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{const d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){const _=t[d+g];if(_!==t[f+g]||_!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Ys;class ns extends Gn{constructor(e,t,i){super(e,t,i)}}ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=qs;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;class $p extends Gn{}$p.prototype.ValueTypeName="color";class Jr extends Gn{}Jr.prototype.ValueTypeName="number";class ux extends eo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Bi.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Qr extends Gn{InterpolantFactoryMethodLinear(e){return new ux(this.times,this.values,this.getValueSize(),e)}}Qr.prototype.ValueTypeName="quaternion";Qr.prototype.InterpolantFactoryMethodSmooth=void 0;class is extends Gn{constructor(e,t,i){super(e,t,i)}}is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=qs;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;class es extends Gn{}es.prototype.ValueTypeName="vector";class dx{constructor(e="",t=-1,i=[],r=Vy){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Rn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(hx(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Gn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=ox(c);c=uf(c,1,u),l=uf(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Jr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const d=u[1];let f=r[d];f||(r[d]=f=[]),f.push(l)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,f,h,g,_){if(h.length!==0){const m=[],p=[];Kp(h,m,p,g),m.length!==0&&_.push(new d(f,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const f=l[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const h={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)h[f[g].morphTargets[_]]=-1;for(const _ in h){const m=[],p=[];for(let A=0;A!==f[g].morphTargets.length;++A){const T=f[g];m.push(T.time),p.push(T.morphTarget===_?1:0)}r.push(new Jr(".morphTargetInfluence["+_+"]",m,p))}c=h.length*o}else{const h=".bones["+t[d].name+"]";i(es,h+".position",f,"pos",r),i(Qr,h+".quaternion",f,"rot",r),i(es,h+".scale",f,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Jr;case"vector":case"vector2":case"vector3":case"vector4":return es;case"color":return $p;case"quaternion":return Qr;case"bool":case"boolean":return ns;case"string":return is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function hx(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fx(n.type);if(n.times===void 0){const t=[],i=[];Kp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Ci={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class px{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const h=l[d],g=l[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const mx=new px;class rs{constructor(e){this.manager=e!==void 0?e:mx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qn={};class gx extends Error{constructor(e,t){super(e),this.response=t}}class Zp extends rs{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ci.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Qn[e]!==void 0){Qn[e].push({onLoad:t,onProgress:i,onError:r});return}Qn[e]=[],Qn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Qn[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=f?parseInt(f):0,g=h!==0;let _=0;const m=new ReadableStream({start(p){A();function A(){d.read().then(({done:T,value:x})=>{if(T)p.close();else{_+=x.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let P=0,C=u.length;P<C;P++){const N=u[P];N.onProgress&&N.onProgress(I)}p.enqueue(x),A()}},T=>{p.error(T)})}}});return new Response(m)}else throw new gx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return l.arrayBuffer().then(g=>h.decode(g))}}}).then(l=>{Ci.add(e,l);const u=Qn[e];delete Qn[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onLoad&&h.onLoad(l)}}).catch(l=>{const u=Qn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Qn[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _x extends rs{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ci.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=js("img");function c(){u(),Ci.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class vx extends rs{constructor(e){super(e)}load(e,t,i,r){const s=new At,o=new _x(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Sa extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const hc=new Ge,df=new z,ff=new z;class fu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lu,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;df.setFromMatrixPosition(e.matrixWorld),t.position.copy(df),ff.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ff),t.updateMatrixWorld(),hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yx extends fu{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=$r*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class xx extends Sa{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new yx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hf=new Ge,_s=new z,pc=new z;class bx extends fu{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),_s.setFromMatrixPosition(e.matrixWorld),i.position.copy(_s),pc.copy(i.position),pc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(pc),i.updateMatrixWorld(),r.makeTranslation(-_s.x,-_s.y,-_s.z),hf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hf)}}class Sx extends Sa{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new bx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ma extends Vp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Mx extends fu{constructor(){super(new Ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jp extends Sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Mx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ex extends Sa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Us{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Tx extends rs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ci.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{r&&r(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ci.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),Ci.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Ci.add(e,c),s.manager.itemStart(e)}}class Ax extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const hu="\\[\\]\\.:\\/",wx=new RegExp("["+hu+"]","g"),pu="[^"+hu+"]",Rx="[^"+hu.replace("\\.","")+"]",Cx=/((?:WC+[\/:])*)/.source.replace("WC",pu),Px=/(WCOD+)?/.source.replace("WCOD",Rx),Ix=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pu),Lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pu),Dx=new RegExp("^"+Cx+Px+Ix+Lx+"$"),Ux=["material","materials","bones","map"];class Nx{constructor(e,t,i){const r=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class lt{constructor(e,t,i){this.path=t,this.parsedPath=i||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,i):new lt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wx,"")}static parseTrackName(e){const t=Dx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);Ux.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[r];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=Nx;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const pf=new Ge;class Fx{constructor(e,t,i=0,r=1/0){this.ray=new Js(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ou,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pf),this}intersectObject(e,t=!0,i=[]){return Al(e,this,i,t),i.sort(mf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Al(e[r],this,i,t);return i.sort(mf),i}}function mf(n,e){return n.distance-e.distance}function Al(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Al(s[o],e,t,!0)}}function gf(n,e,t,i){const r=Ox(i);switch(t){case Ap:return n*e;case Rp:return n*e;case Cp:return n*e*2;case tu:return n*e/r.components*r.byteLength;case nu:return n*e/r.components*r.byteLength;case Pp:return n*e*2/r.components*r.byteLength;case iu:return n*e*2/r.components*r.byteLength;case wp:return n*e*3/r.components*r.byteLength;case hn:return n*e*4/r.components*r.byteLength;case ru:return n*e*4/r.components*r.byteLength;case zo:case Vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Go:case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zc:case Qc:return Math.max(n,16)*Math.max(e,8)/4;case $c:case Jc:return Math.max(n,8)*Math.max(e,8)/2;case el:case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case sl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ol:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case cl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ul:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ml:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Xo:case _l:case vl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ip:case yl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xl:case bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ox(n){switch(n){case ui:case Mp:return{byteLength:1,components:1};case Xs:case Ep:case Zs:return{byteLength:2,components:1};case Ql:case eu:return{byteLength:2,components:4};case cr:case Jl:case Tn:return{byteLength:4,components:1};case Tp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qp(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Bx(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],_=d[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const _=d[h];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var kx=`#ifdef USE_ALPHAHASH
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
#endif`,fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hb=`#ifdef USE_EMISSIVEMAP
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
#endif`,fS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fM=`uniform float size;
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
}`,hM=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:kx,alphahash_pars_fragment:Hx,alphamap_fragment:zx,alphamap_pars_fragment:Vx,alphatest_fragment:Gx,alphatest_pars_fragment:Wx,aomap_fragment:Xx,aomap_pars_fragment:qx,batching_pars_vertex:Yx,batching_vertex:jx,begin_vertex:Kx,beginnormal_vertex:$x,bsdfs:Zx,iridescence_fragment:Jx,bumpmap_pars_fragment:Qx,clipping_planes_fragment:eb,clipping_planes_pars_fragment:tb,clipping_planes_pars_vertex:nb,clipping_planes_vertex:ib,color_fragment:rb,color_pars_fragment:sb,color_pars_vertex:ob,color_vertex:ab,common:cb,cube_uv_reflection_fragment:lb,defaultnormal_vertex:ub,displacementmap_pars_vertex:db,displacementmap_vertex:fb,emissivemap_fragment:hb,emissivemap_pars_fragment:pb,colorspace_fragment:mb,colorspace_pars_fragment:gb,envmap_fragment:_b,envmap_common_pars_fragment:vb,envmap_pars_fragment:yb,envmap_pars_vertex:xb,envmap_physical_pars_fragment:Ib,envmap_vertex:bb,fog_vertex:Sb,fog_pars_vertex:Mb,fog_fragment:Eb,fog_pars_fragment:Tb,gradientmap_pars_fragment:Ab,lightmap_pars_fragment:wb,lights_lambert_fragment:Rb,lights_lambert_pars_fragment:Cb,lights_pars_begin:Pb,lights_toon_fragment:Lb,lights_toon_pars_fragment:Db,lights_phong_fragment:Ub,lights_phong_pars_fragment:Nb,lights_physical_fragment:Fb,lights_physical_pars_fragment:Ob,lights_fragment_begin:Bb,lights_fragment_maps:kb,lights_fragment_end:Hb,logdepthbuf_fragment:zb,logdepthbuf_pars_fragment:Vb,logdepthbuf_pars_vertex:Gb,logdepthbuf_vertex:Wb,map_fragment:Xb,map_pars_fragment:qb,map_particle_fragment:Yb,map_particle_pars_fragment:jb,metalnessmap_fragment:Kb,metalnessmap_pars_fragment:$b,morphinstance_vertex:Zb,morphcolor_vertex:Jb,morphnormal_vertex:Qb,morphtarget_pars_vertex:eS,morphtarget_vertex:tS,normal_fragment_begin:nS,normal_fragment_maps:iS,normal_pars_fragment:rS,normal_pars_vertex:sS,normal_vertex:oS,normalmap_pars_fragment:aS,clearcoat_normal_fragment_begin:cS,clearcoat_normal_fragment_maps:lS,clearcoat_pars_fragment:uS,iridescence_pars_fragment:dS,opaque_fragment:fS,packing:hS,premultiplied_alpha_fragment:pS,project_vertex:mS,dithering_fragment:gS,dithering_pars_fragment:_S,roughnessmap_fragment:vS,roughnessmap_pars_fragment:yS,shadowmap_pars_fragment:xS,shadowmap_pars_vertex:bS,shadowmap_vertex:SS,shadowmask_pars_fragment:MS,skinbase_vertex:ES,skinning_pars_vertex:TS,skinning_vertex:AS,skinnormal_vertex:wS,specularmap_fragment:RS,specularmap_pars_fragment:CS,tonemapping_fragment:PS,tonemapping_pars_fragment:IS,transmission_fragment:LS,transmission_pars_fragment:DS,uv_pars_fragment:US,uv_pars_vertex:NS,uv_vertex:FS,worldpos_vertex:OS,background_vert:BS,background_frag:kS,backgroundCube_vert:HS,backgroundCube_frag:zS,cube_vert:VS,cube_frag:GS,depth_vert:WS,depth_frag:XS,distanceRGBA_vert:qS,distanceRGBA_frag:YS,equirect_vert:jS,equirect_frag:KS,linedashed_vert:$S,linedashed_frag:ZS,meshbasic_vert:JS,meshbasic_frag:QS,meshlambert_vert:eM,meshlambert_frag:tM,meshmatcap_vert:nM,meshmatcap_frag:iM,meshnormal_vert:rM,meshnormal_frag:sM,meshphong_vert:oM,meshphong_frag:aM,meshphysical_vert:cM,meshphysical_frag:lM,meshtoon_vert:uM,meshtoon_frag:dM,points_vert:fM,points_frag:hM,shadow_vert:pM,shadow_frag:mM,sprite_vert:gM,sprite_frag:_M},ye={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Nn={basic:{uniforms:Ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ve(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ht([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ht([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ve(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ht([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ht([ye.points,ye.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ht([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ht([ye.common,ye.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ht([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ht([ye.sprite,ye.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Ht([ye.common,ye.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Ht([ye.lights,ye.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Nn.physical={uniforms:Ht([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Lo={r:0,b:0,g:0},Ki=new kn,vM=new Ge;function yM(n,e,t,i,r,s,o){const a=new Ve(0);let c=s===!0?0:1,l,u,d=null,f=0,h=null;function g(T){let x=T.isScene===!0?T.background:null;return x&&x.isTexture&&(x=(T.backgroundBlurriness>0?t:e).get(x)),x}function _(T){let x=!1;const I=g(T);I===null?p(a,c):I&&I.isColor&&(p(I,1),x=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,x){const I=g(x);I&&(I.isCubeTexture||I.mapping===xa)?(u===void 0&&(u=new sn(new Qs(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Zr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ki.copy(x.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vM.makeRotationFromEuler(Ki)),u.material.toneMapped=Je.getTransfer(I.colorSpace)!==ut,(d!==I||f!==I.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=I,f=I.version,h=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new sn(new ba(2,2),new Ui({name:"BackgroundMaterial",uniforms:Zr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Je.getTransfer(I.colorSpace)!==ut,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||f!==I.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=I,f=I.version,h=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,x){T.getRGB(Lo,zp(n)),i.buffers.color.setClear(Lo.r,Lo.g,Lo.b,x,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,x=1){a.set(T),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:_,addToRenderList:m,dispose:A}}function xM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,D,U,B,Q){let ne=!1;const Z=d(B,U,D);s!==Z&&(s=Z,l(s.object)),ne=h(S,B,U,Q),ne&&g(S,B,U,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,x(S,D,U,B),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,D,U){const B=U.wireframe===!0;let Q=i[S.id];Q===void 0&&(Q={},i[S.id]=Q);let ne=Q[D.id];ne===void 0&&(ne={},Q[D.id]=ne);let Z=ne[B];return Z===void 0&&(Z=f(c()),ne[B]=Z),Z}function f(S){const D=[],U=[],B=[];for(let Q=0;Q<t;Q++)D[Q]=0,U[Q]=0,B[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:B,object:S,attributes:{},index:null}}function h(S,D,U,B){const Q=s.attributes,ne=D.attributes;let Z=0;const j=U.getAttributes();for(const V in j)if(j[V].location>=0){const ve=Q[V];let we=ne[V];if(we===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(we=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(we=S.instanceColor)),ve===void 0||ve.attribute!==we||we&&ve.data!==we.data)return!0;Z++}return s.attributesNum!==Z||s.index!==B}function g(S,D,U,B){const Q={},ne=D.attributes;let Z=0;const j=U.getAttributes();for(const V in j)if(j[V].location>=0){let ve=ne[V];ve===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor));const we={};we.attribute=ve,ve&&ve.data&&(we.data=ve.data),Q[V]=we,Z++}s.attributes=Q,s.attributesNum=Z,s.index=B}function _(){const S=s.newAttributes;for(let D=0,U=S.length;D<U;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const U=s.newAttributes,B=s.enabledAttributes,Q=s.attributeDivisors;U[S]=1,B[S]===0&&(n.enableVertexAttribArray(S),B[S]=1),Q[S]!==D&&(n.vertexAttribDivisor(S,D),Q[S]=D)}function A(){const S=s.newAttributes,D=s.enabledAttributes;for(let U=0,B=D.length;U<B;U++)D[U]!==S[U]&&(n.disableVertexAttribArray(U),D[U]=0)}function T(S,D,U,B,Q,ne,Z){Z===!0?n.vertexAttribIPointer(S,D,U,Q,ne):n.vertexAttribPointer(S,D,U,B,Q,ne)}function x(S,D,U,B){_();const Q=B.attributes,ne=U.getAttributes(),Z=D.defaultAttributeValues;for(const j in ne){const V=ne[j];if(V.location>=0){let pe=Q[j];if(pe===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),pe!==void 0){const ve=pe.normalized,we=pe.itemSize,Pe=e.get(pe);if(Pe===void 0)continue;const $e=Pe.buffer,re=Pe.type,he=Pe.bytesPerElement,be=re===n.INT||re===n.UNSIGNED_INT||pe.gpuType===Jl;if(pe.isInterleavedBufferAttribute){const F=pe.data,se=F.stride,ae=pe.offset;if(F.isInstancedInterleavedBuffer){for(let ce=0;ce<V.locationSize;ce++)p(V.location+ce,F.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ce=0;ce<V.locationSize;ce++)m(V.location+ce);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let ce=0;ce<V.locationSize;ce++)T(V.location+ce,we/V.locationSize,re,ve,se*he,(ae+we/V.locationSize*ce)*he,be)}else{if(pe.isInstancedBufferAttribute){for(let F=0;F<V.locationSize;F++)p(V.location+F,pe.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let F=0;F<V.locationSize;F++)m(V.location+F);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let F=0;F<V.locationSize;F++)T(V.location+F,we/V.locationSize,re,ve,we*he,we/V.locationSize*F*he,be)}}else if(Z!==void 0){const ve=Z[j];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(V.location,ve);break;case 3:n.vertexAttrib3fv(V.location,ve);break;case 4:n.vertexAttrib4fv(V.location,ve);break;default:n.vertexAttrib1fv(V.location,ve)}}}}A()}function I(){N();for(const S in i){const D=i[S];for(const U in D){const B=D[U];for(const Q in B)u(B[Q].object),delete B[Q];delete D[U]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const U in D){const B=D[U];for(const Q in B)u(B[Q].object),delete B[Q];delete D[U]}delete i[S.id]}function C(S){for(const D in i){const U=i[D];if(U[S.id]===void 0)continue;const B=U[S.id];for(const Q in B)u(B[Q].object),delete B[Q];delete U[S.id]}}function N(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function bM(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function SM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==hn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const N=C===Zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ui&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Tn&&!N)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:I,maxSamples:P}}function MM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Qi,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const A=s?0:i,T=A*4;let x=p.clippingState||null;c.value=x,x=u(g,f,T,h);for(let I=0;I!==T;++I)x[I]=t[I];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=h+_*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,x=h;T!==_;++T,x+=4)o.copy(d[T]).applyMatrix4(A,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function EM(n){let e=new WeakMap;function t(o,a){return a===jc?o.mapping=Xr:a===Kc&&(o.mapping=qr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===jc||a===Kc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new G0(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ir=4,_f=[.125,.215,.35,.446,.526,.582],ir=20,mc=new Ma,vf=new Ve;let gc=null,_c=0,vc=0,yc=!1;const er=(1+Math.sqrt(5))/2,wr=1/er,yf=[new z(-er,wr,0),new z(er,wr,0),new z(-wr,0,er),new z(wr,0,er),new z(0,er,-wr),new z(0,er,wr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class xf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){gc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gc,_c,vc),this._renderer.xr.enabled=yc,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Zs,format:hn,colorSpace:Xt,depthBuffer:!1},r=bf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TM(s)),this._blurMaterial=AM(s,e,t)}return r}_compileMaterial(e){const t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,mc)}_sceneToCubeUV(e,t,i,r){const a=new jt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(vf),u.toneMapping=Li,u.autoClear=!1;const h=new rr({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new sn(new Qs,h);let _=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,_=!0):(h.color.copy(vf),_=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):A===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const T=this._cubeSize;Do(r,A*T,p>2?T:0,T,T),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Xr||e.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new sn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Do(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,mc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yf[(r-s-1)%yf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new sn(this._lodPlanes[r],l),f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ir-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ir;m>ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ir}`);const p=[];let A=0;for(let C=0;C<ir;++C){const N=C/_,E=Math.exp(-N*N/2);p.push(E),C===0?A+=E:C<m&&(A+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-i;const x=this._sizeLods[r],I=3*x*(r>T-Ir?r-T+Ir:0),P=4*(this._cubeSize-x);Do(t,I,P,3*x,2*x),c.setRenderTarget(t),c.render(d,mc)}}function TM(n){const e=[],t=[],i=[];let r=n;const s=n-Ir+1+_f.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Ir?c=_f[o-n+Ir-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,_=3,m=2,p=1,A=new Float32Array(_*g*h),T=new Float32Array(m*g*h),x=new Float32Array(p*g*h);for(let P=0;P<h;P++){const C=P%3*2/3-1,N=P>2?0:-1,E=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];A.set(E,_*g*P),T.set(f,m*g*P);const S=[P,P,P,P,P,P];x.set(S,p*g*P)}const I=new zn;I.setAttribute("position",new Wt(A,_)),I.setAttribute("uv",new Wt(T,m)),I.setAttribute("faceIndex",new Wt(x,p)),e.push(I),r>Ir&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function bf(n,e,t){const i=new lr(n,e,t);return i.texture.mapping=xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Do(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function AM(n,e,t){const i=new Float32Array(ir),r=new z(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mu(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Sf(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Mf(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function mu(){return`

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
	`}function wM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===jc||c===Kc,u=c===Xr||c===qr;if(l||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new xf(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new xf(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function RM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Pr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function CM(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){const f=[],h=d.index,g=d.attributes.position;let _=0;if(h!==null){const A=h.array;_=h.version;for(let T=0,x=A.length;T<x;T+=3){const I=A[T+0],P=A[T+1],C=A[T+2];f.push(I,P,P,C,C,I)}}else if(g!==void 0){const A=g.array;_=g.version;for(let T=0,x=A.length/3-1;T<x;T+=3){const I=T+0,P=T+1,C=T+2;f.push(I,P,P,C,C,I)}}else return;const m=new(Np(f)?Hp:kp)(f,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function PM(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,_,0,g);let p=0;for(let A=0;A<g;A++)p+=h[A]*_[A];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function IM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function LM(n,e,t){const i=new WeakMap,r=new nt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var h=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let I=a.attributes.position.count*x,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const C=new Float32Array(I*P*4*d),N=new Op(C,I,P,d);N.type=Tn,N.needsUpdate=!0;const E=x*4;for(let D=0;D<d;D++){const U=p[D],B=A[D],Q=T[D],ne=I*P*4*D;for(let Z=0;Z<U.count;Z++){const j=Z*E;g===!0&&(r.fromBufferAttribute(U,Z),C[ne+j+0]=r.x,C[ne+j+1]=r.y,C[ne+j+2]=r.z,C[ne+j+3]=0),_===!0&&(r.fromBufferAttribute(B,Z),C[ne+j+4]=r.x,C[ne+j+5]=r.y,C[ne+j+6]=r.z,C[ne+j+7]=0),m===!0&&(r.fromBufferAttribute(Q,Z),C[ne+j+8]=r.x,C[ne+j+9]=r.y,C[ne+j+10]=r.z,C[ne+j+11]=Q.itemSize===4?r.w:1)}}f={count:d,texture:N,size:new Ke(I,P)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function DM(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const em=new At,Ef=new jp(1,1),tm=new Op,nm=new A0,im=new Gp,Tf=[],Af=[],wf=new Float32Array(16),Rf=new Float32Array(9),Cf=new Float32Array(4);function ss(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Tf[r];if(s===void 0&&(s=new Float32Array(r),Tf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ea(n,e){let t=Af[e];t===void 0&&(t=new Int32Array(e),Af[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function UM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function NM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function FM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function OM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function BM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Cf.set(i),n.uniformMatrix2fv(this.addr,!1,Cf),Mt(t,i)}}function kM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Rf.set(i),n.uniformMatrix3fv(this.addr,!1,Rf),Mt(t,i)}}function HM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;wf.set(i),n.uniformMatrix4fv(this.addr,!1,wf),Mt(t,i)}}function zM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function VM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function GM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function WM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function XM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function YM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function jM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function KM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ef.compareFunction=Up,s=Ef):s=em,t.setTexture2D(e||s,r)}function $M(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||nm,r)}function ZM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||im,r)}function JM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||tm,r)}function QM(n){switch(n){case 5126:return UM;case 35664:return NM;case 35665:return FM;case 35666:return OM;case 35674:return BM;case 35675:return kM;case 35676:return HM;case 5124:case 35670:return zM;case 35667:case 35671:return VM;case 35668:case 35672:return GM;case 35669:case 35673:return WM;case 5125:return XM;case 36294:return qM;case 36295:return YM;case 36296:return jM;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}function eE(n,e){n.uniform1fv(this.addr,e)}function tE(n,e){const t=ss(e,this.size,2);n.uniform2fv(this.addr,t)}function nE(n,e){const t=ss(e,this.size,3);n.uniform3fv(this.addr,t)}function iE(n,e){const t=ss(e,this.size,4);n.uniform4fv(this.addr,t)}function rE(n,e){const t=ss(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function sE(n,e){const t=ss(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function oE(n,e){const t=ss(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function aE(n,e){n.uniform1iv(this.addr,e)}function cE(n,e){n.uniform2iv(this.addr,e)}function lE(n,e){n.uniform3iv(this.addr,e)}function uE(n,e){n.uniform4iv(this.addr,e)}function dE(n,e){n.uniform1uiv(this.addr,e)}function fE(n,e){n.uniform2uiv(this.addr,e)}function hE(n,e){n.uniform3uiv(this.addr,e)}function pE(n,e){n.uniform4uiv(this.addr,e)}function mE(n,e,t){const i=this.cache,r=e.length,s=Ea(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||em,s[o])}function gE(n,e,t){const i=this.cache,r=e.length,s=Ea(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||nm,s[o])}function _E(n,e,t){const i=this.cache,r=e.length,s=Ea(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||im,s[o])}function vE(n,e,t){const i=this.cache,r=e.length,s=Ea(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||tm,s[o])}function yE(n){switch(n){case 5126:return eE;case 35664:return tE;case 35665:return nE;case 35666:return iE;case 35674:return rE;case 35675:return sE;case 35676:return oE;case 5124:case 35670:return aE;case 35667:case 35671:return cE;case 35668:case 35672:return lE;case 35669:case 35673:return uE;case 5125:return dE;case 36294:return fE;case 36295:return hE;case 36296:return pE;case 35678:case 36198:case 36298:case 36306:case 35682:return mE;case 35679:case 36299:case 36307:return gE;case 35680:case 36300:case 36308:case 36293:return _E;case 36289:case 36303:case 36311:case 36292:return vE}}class xE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=QM(t.type)}}class bE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yE(t.type)}}class SE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const xc=/(\w+)(\])?(\[|\.)?/g;function Pf(n,e){n.seq.push(e),n.map[e.id]=e}function ME(n,e,t){const i=n.name,r=i.length;for(xc.lastIndex=0;;){const s=xc.exec(i),o=xc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Pf(t,l===void 0?new xE(a,n,e):new bE(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new SE(a),Pf(t,d)),t=d}}}class qo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ME(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function If(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const EE=37297;let TE=0;function AE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Lf=new Xe;function wE(n){Je._getMatrix(Lf,Je.workingColorSpace,n);const e=`mat3( ${Lf.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case ta:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Df(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+AE(n.getShaderSource(e),o)}else return r}function RE(n,e){const t=wE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function CE(n,e){let t;switch(e){case Ny:t="Linear";break;case Fy:t="Reinhard";break;case Oy:t="Cineon";break;case xp:t="ACESFilmic";break;case ky:t="AgX";break;case Hy:t="Neutral";break;case By:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uo=new z;function PE(){Je.getLuminanceCoefficients(Uo);const n=Uo.x.toFixed(4),e=Uo.y.toFixed(4),t=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function LE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function DE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function bs(n){return n!==""}function Uf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UE=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(n){return n.replace(UE,FE)}const NE=new Map;function FE(n,e){let t=qe[e];if(t===void 0){const i=NE.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wl(t)}const OE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ff(n){return n.replace(OE,BE)}function BE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Of(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function kE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===py?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function HE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xr:case qr:e="ENVMAP_TYPE_CUBE";break;case xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}function VE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yp:e="ENVMAP_BLENDING_MULTIPLY";break;case Dy:e="ENVMAP_BLENDING_MIX";break;case Uy:e="ENVMAP_BLENDING_ADD";break}return e}function GE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function WE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=kE(t),l=HE(t),u=zE(t),d=VE(t),f=GE(t),h=IE(t),g=LE(s),_=r.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bs).join(`
`),p.length>0&&(p+=`
`)):(m=[Of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),p=[Of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?qe.tonemapping_pars_fragment:"",t.toneMapping!==Li?CE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,RE("linearToOutputTexel",t.outputColorSpace),PE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),o=wl(o),o=Uf(o,t),o=Nf(o,t),a=wl(a),a=Uf(a,t),a=Nf(a,t),o=Ff(o),a=Ff(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=A+m+o,x=A+p+a,I=If(r,r.VERTEX_SHADER,T),P=If(r,r.FRAGMENT_SHADER,x);r.attachShader(_,I),r.attachShader(_,P),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(D){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(I).trim(),Q=r.getShaderInfoLog(P).trim();let ne=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,I,P);else{const j=Df(r,I,"vertex"),V=Df(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+j+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(B===""||Q==="")&&(Z=!1);Z&&(D.diagnostics={runnable:ne,programLog:U,vertexShader:{log:B,prefix:m},fragmentShader:{log:Q,prefix:p}})}r.deleteShader(I),r.deleteShader(P),N=new qo(r,_),E=DE(r,_)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,EE)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=TE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=P,this}let XE=0;class qE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new YE(e),t.set(e,i)),i}}class YE{constructor(e){this.id=XE++,this.code=e,this.usedTimes=0}}function jE(n,e,t,i,r,s,o){const a=new ou,c=new qE,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,S,D,U,B){const Q=U.fog,ne=B.geometry,Z=E.isMeshStandardMaterial?U.environment:null,j=(E.isMeshStandardMaterial?t:e).get(E.envMap||Z),V=j&&j.mapping===xa?j.image.height:null,pe=g[E.type];E.precision!==null&&(h=r.getMaxPrecision(E.precision),h!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",h,"instead."));const ve=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,we=ve!==void 0?ve.length:0;let Pe=0;ne.morphAttributes.position!==void 0&&(Pe=1),ne.morphAttributes.normal!==void 0&&(Pe=2),ne.morphAttributes.color!==void 0&&(Pe=3);let $e,re,he,be;if(pe){const at=Nn[pe];$e=at.vertexShader,re=at.fragmentShader}else $e=E.vertexShader,re=E.fragmentShader,c.update(E),he=c.getVertexShaderID(E),be=c.getFragmentShaderID(E);const F=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),ae=B.isInstancedMesh===!0,ce=B.isBatchedMesh===!0,De=!!E.map,w=!!E.matcap,R=!!j,y=!!E.aoMap,ie=!!E.lightMap,$=!!E.bumpMap,q=!!E.normalMap,ee=!!E.displacementMap,le=!!E.emissiveMap,J=!!E.metalnessMap,b=!!E.roughnessMap,v=E.anisotropy>0,L=E.clearcoat>0,G=E.dispersion>0,Y=E.iridescence>0,W=E.sheen>0,me=E.transmission>0,ue=v&&!!E.anisotropyMap,ge=L&&!!E.clearcoatMap,Ue=L&&!!E.clearcoatNormalMap,de=L&&!!E.clearcoatRoughnessMap,xe=Y&&!!E.iridescenceMap,Ce=Y&&!!E.iridescenceThicknessMap,Ne=W&&!!E.sheenColorMap,_e=W&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,He=!!E.specularColorMap,dt=!!E.specularIntensityMap,O=me&&!!E.transmissionMap,Se=me&&!!E.thicknessMap,te=!!E.gradientMap,oe=!!E.alphaMap,Te=E.alphaTest>0,Ee=!!E.alphaHash,We=!!E.extensions;let _t=Li;E.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(_t=n.toneMapping);const It={shaderID:pe,shaderType:E.type,shaderName:E.name,vertexShader:$e,fragmentShader:re,defines:E.defines,customVertexShaderID:he,customFragmentShaderID:be,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:h,batching:ce,batchingColor:ce&&B._colorsTexture!==null,instancing:ae,instancingColor:ae&&B.instanceColor!==null,instancingMorph:ae&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Xt,alphaToCoverage:!!E.alphaToCoverage,map:De,matcap:w,envMap:R,envMapMode:R&&j.mapping,envMapCubeUVHeight:V,aoMap:y,lightMap:ie,bumpMap:$,normalMap:q,displacementMap:f&&ee,emissiveMap:le,normalMapObjectSpace:q&&E.normalMapType===qy,normalMapTangentSpace:q&&E.normalMapType===Dp,metalnessMap:J,roughnessMap:b,anisotropy:v,anisotropyMap:ue,clearcoat:L,clearcoatMap:ge,clearcoatNormalMap:Ue,clearcoatRoughnessMap:de,dispersion:G,iridescence:Y,iridescenceMap:xe,iridescenceThicknessMap:Ce,sheen:W,sheenColorMap:Ne,sheenRoughnessMap:_e,specularMap:Oe,specularColorMap:He,specularIntensityMap:dt,transmission:me,transmissionMap:O,thicknessMap:Se,gradientMap:te,opaque:E.transparent===!1&&E.blending===Br&&E.alphaToCoverage===!1,alphaMap:oe,alphaTest:Te,alphaHash:Ee,combine:E.combine,mapUv:De&&_(E.map.channel),aoMapUv:y&&_(E.aoMap.channel),lightMapUv:ie&&_(E.lightMap.channel),bumpMapUv:$&&_(E.bumpMap.channel),normalMapUv:q&&_(E.normalMap.channel),displacementMapUv:ee&&_(E.displacementMap.channel),emissiveMapUv:le&&_(E.emissiveMap.channel),metalnessMapUv:J&&_(E.metalnessMap.channel),roughnessMapUv:b&&_(E.roughnessMap.channel),anisotropyMapUv:ue&&_(E.anisotropyMap.channel),clearcoatMapUv:ge&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(E.sheenRoughnessMap.channel),specularMapUv:Oe&&_(E.specularMap.channel),specularColorMapUv:He&&_(E.specularColorMap.channel),specularIntensityMapUv:dt&&_(E.specularIntensityMap.channel),transmissionMapUv:O&&_(E.transmissionMap.channel),thicknessMapUv:Se&&_(E.thicknessMap.channel),alphaMapUv:oe&&_(E.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(q||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!ne.attributes.uv&&(De||oe),fog:!!Q,useFog:E.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:se,skinning:B.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Pe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,decodeVideoTexture:De&&E.map.isVideoTexture===!0&&Je.getTransfer(E.map.colorSpace)===ut,decodeVideoTextureEmissive:le&&E.emissiveMap.isVideoTexture===!0&&Je.getTransfer(E.emissiveMap.colorSpace)===ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Fn,flipSided:E.side===$t,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:We&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&E.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)S.push(D),S.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(A(S,E),T(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function A(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function T(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const S=g[E.type];let D;if(S){const U=Nn[S];D=k0.clone(U.uniforms)}else D=E.uniforms;return D}function I(E,S){let D;for(let U=0,B=u.length;U<B;U++){const Q=u[U];if(Q.cacheKey===S){D=Q,++D.usedTimes;break}}return D===void 0&&(D=new WE(n,S,E,s),u.push(D)),D}function P(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function C(E){c.remove(E)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:P,releaseShaderCache:C,programs:u,dispose:N}}function KE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function $E(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function kf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,g,_,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,f,h,g,_,m){const p=o(d,f,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(d,f,h,g,_,m){const p=o(d,f,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||$E),i.length>1&&i.sort(f||Bf),r.length>1&&r.sort(f||Bf)}function u(){for(let d=e,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function ZE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new kf,n.set(i,[o])):r>=s.length?(o=new kf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function JE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ve};break;case"SpotLight":t={position:new z,direction:new z,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function QE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let eT=0;function tT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function nT(n){const e=new JE,t=QE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);const r=new z,s=new Ge,o=new Ge;function a(l){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,A=0,T=0,x=0,I=0,P=0,C=0;l.sort(tT);for(let E=0,S=l.length;E<S;E++){const D=l[E],U=D.color,B=D.intensity,Q=D.distance,ne=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=U.r*B,d+=U.g*B,f+=U.b*B;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],B);C++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,V=t.get(D);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=ne,i.directionalShadowMatrix[h]=D.shadow.matrix,A++}i.directional[h]=Z,h++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(U).multiplyScalar(B),Z.distance=Q,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[_]=Z;const j=D.shadow;if(D.map&&(i.spotLightMap[I]=D.map,I++,j.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[_]=j.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=ne,x++}_++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(U).multiplyScalar(B),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=Z,m++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const j=D.shadow,V=t.get(D);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=D.shadow.matrix,T++}i.point[g]=Z,g++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(B),Z.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[p]=Z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==h||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==A||N.numPointShadows!==T||N.numSpotShadows!==x||N.numSpotMaps!==I||N.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=x+I-P,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,N.directionalLength=h,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=A,N.numPointShadows=T,N.numSpotShadows=x,N.numSpotMaps=I,N.numLightProbes=C,i.version=eT++)}function c(l,u){let d=0,f=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,A=l.length;p<A;p++){const T=l[p];if(T.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(T.isSpotLight){const x=i.spot[h];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(T.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function Hf(n){const e=new nT(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function iT(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Hf(n),e.set(r,[a])):s>=o.length?(a=new Hf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const rT=`void main() {
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
}`;function oT(n,e,t){let i=new lu;const r=new Ke,s=new Ke,o=new nt,a=new ix({depthPacking:Xy}),c=new rx,l={},u=t.maxTextureSize,d={[li]:$t,[$t]:li,[Fn]:Fn},f=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:rT,fragmentShader:sT}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new zn;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new sn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vp;let p=this.type;this.render=function(P,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ii),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=p!==ei&&this.type===ei,Q=p===ei&&this.type!==ei;for(let ne=0,Z=P.length;ne<Z;ne++){const j=P[ne],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const pe=V.getFrameExtents();if(r.multiply(pe),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,V.mapSize.y=s.y)),V.map===null||B===!0||Q===!0){const we=this.type!==ei?{minFilter:Gt,magFilter:Gt}:{};V.map!==null&&V.map.dispose(),V.map=new lr(r.x,r.y,we),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ve=V.getViewportCount();for(let we=0;we<ve;we++){const Pe=V.getViewport(we);o.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),U.viewport(o),V.updateMatrices(j,we),i=V.getFrustum(),x(C,N,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===ei&&A(V,N),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,D)};function A(P,C){const N=e.update(_);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new lr(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(C,null,N,f,_,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(C,null,N,h,_,null)}function T(P,C,N,E){let S=null;const D=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)S=D;else if(S=N.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const U=S.uuid,B=C.uuid;let Q=l[U];Q===void 0&&(Q={},l[U]=Q);let ne=Q[B];ne===void 0&&(ne=S.clone(),Q[B]=ne,C.addEventListener("dispose",I)),S=ne}if(S.visible=C.visible,S.wireframe=C.wireframe,E===ei?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:d[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=n.properties.get(S);U.light=N}return S}function x(P,C,N,E,S){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===ei)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const B=e.update(P),Q=P.material;if(Array.isArray(Q)){const ne=B.groups;for(let Z=0,j=ne.length;Z<j;Z++){const V=ne[Z],pe=Q[V.materialIndex];if(pe&&pe.visible){const ve=T(P,pe,E,S);P.onBeforeShadow(n,P,C,N,B,ve,V),n.renderBufferDirect(N,null,B,ve,P,V),P.onAfterShadow(n,P,C,N,B,ve,V)}}}else if(Q.visible){const ne=T(P,Q,E,S);P.onBeforeShadow(n,P,C,N,B,ne,null),n.renderBufferDirect(N,null,B,ne,P,null),P.onAfterShadow(n,P,C,N,B,ne,null)}}const U=P.children;for(let B=0,Q=U.length;B<Q;B++)x(U[B],C,N,E,S)}function I(P){P.target.removeEventListener("dispose",I);for(const N in l){const E=l[N],S=P.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const aT={[zc]:Vc,[Gc]:qc,[Wc]:Yc,[Wr]:Xc,[Vc]:zc,[qc]:Gc,[Yc]:Wc,[Xc]:Wr};function cT(n,e){function t(){let O=!1;const Se=new nt;let te=null;const oe=new nt(0,0,0,0);return{setMask:function(Te){te!==Te&&!O&&(n.colorMask(Te,Te,Te,Te),te=Te)},setLocked:function(Te){O=Te},setClear:function(Te,Ee,We,_t,It){It===!0&&(Te*=_t,Ee*=_t,We*=_t),Se.set(Te,Ee,We,_t),oe.equals(Se)===!1&&(n.clearColor(Te,Ee,We,_t),oe.copy(Se))},reset:function(){O=!1,te=null,oe.set(-1,0,0,0)}}}function i(){let O=!1,Se=!1,te=null,oe=null,Te=null;return{setReversed:function(Ee){if(Se!==Ee){const We=e.get("EXT_clip_control");Se?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);const _t=Te;Te=null,this.setClear(_t)}Se=Ee},getReversed:function(){return Se},setTest:function(Ee){Ee?F(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(Ee){te!==Ee&&!O&&(n.depthMask(Ee),te=Ee)},setFunc:function(Ee){if(Se&&(Ee=aT[Ee]),oe!==Ee){switch(Ee){case zc:n.depthFunc(n.NEVER);break;case Vc:n.depthFunc(n.ALWAYS);break;case Gc:n.depthFunc(n.LESS);break;case Wr:n.depthFunc(n.LEQUAL);break;case Wc:n.depthFunc(n.EQUAL);break;case Xc:n.depthFunc(n.GEQUAL);break;case qc:n.depthFunc(n.GREATER);break;case Yc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Ee}},setLocked:function(Ee){O=Ee},setClear:function(Ee){Te!==Ee&&(Se&&(Ee=1-Ee),n.clearDepth(Ee),Te=Ee)},reset:function(){O=!1,te=null,oe=null,Te=null,Se=!1}}}function r(){let O=!1,Se=null,te=null,oe=null,Te=null,Ee=null,We=null,_t=null,It=null;return{setTest:function(at){O||(at?F(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(at){Se!==at&&!O&&(n.stencilMask(at),Se=at)},setFunc:function(at,_n,Wn){(te!==at||oe!==_n||Te!==Wn)&&(n.stencilFunc(at,_n,Wn),te=at,oe=_n,Te=Wn)},setOp:function(at,_n,Wn){(Ee!==at||We!==_n||_t!==Wn)&&(n.stencilOp(at,_n,Wn),Ee=at,We=_n,_t=Wn)},setLocked:function(at){O=at},setClear:function(at){It!==at&&(n.clearStencil(at),It=at)},reset:function(){O=!1,Se=null,te=null,oe=null,Te=null,Ee=null,We=null,_t=null,It=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,A=null,T=null,x=null,I=null,P=null,C=new Ve(0,0,0),N=0,E=!1,S=null,D=null,U=null,B=null,Q=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,j=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),Z=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Z=j>=2);let pe=null,ve={};const we=n.getParameter(n.SCISSOR_BOX),Pe=n.getParameter(n.VIEWPORT),$e=new nt().fromArray(we),re=new nt().fromArray(Pe);function he(O,Se,te,oe){const Te=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(O,Ee),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<te;We++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(Se+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return Ee}const be={};be[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(n.DEPTH_TEST),o.setFunc(Wr),$(!1),q(bd),F(n.CULL_FACE),y(Ii);function F(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function se(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function ae(O,Se){return d[O]!==Se?(n.bindFramebuffer(O,Se),d[O]=Se,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Se),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function ce(O,Se){let te=h,oe=!1;if(O){te=f.get(Se),te===void 0&&(te=[],f.set(Se,te));const Te=O.textures;if(te.length!==Te.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,We=Te.length;Ee<We;Ee++)te[Ee]=n.COLOR_ATTACHMENT0+Ee;te.length=Te.length,oe=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,oe=!0);oe&&n.drawBuffers(te)}function De(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const w={[nr]:n.FUNC_ADD,[gy]:n.FUNC_SUBTRACT,[_y]:n.FUNC_REVERSE_SUBTRACT};w[vy]=n.MIN,w[yy]=n.MAX;const R={[xy]:n.ZERO,[by]:n.ONE,[Sy]:n.SRC_COLOR,[kc]:n.SRC_ALPHA,[Ry]:n.SRC_ALPHA_SATURATE,[Ay]:n.DST_COLOR,[Ey]:n.DST_ALPHA,[My]:n.ONE_MINUS_SRC_COLOR,[Hc]:n.ONE_MINUS_SRC_ALPHA,[wy]:n.ONE_MINUS_DST_COLOR,[Ty]:n.ONE_MINUS_DST_ALPHA,[Cy]:n.CONSTANT_COLOR,[Py]:n.ONE_MINUS_CONSTANT_COLOR,[Iy]:n.CONSTANT_ALPHA,[Ly]:n.ONE_MINUS_CONSTANT_ALPHA};function y(O,Se,te,oe,Te,Ee,We,_t,It,at){if(O===Ii){_===!0&&(se(n.BLEND),_=!1);return}if(_===!1&&(F(n.BLEND),_=!0),O!==my){if(O!==m||at!==E){if((p!==nr||x!==nr)&&(n.blendEquation(n.FUNC_ADD),p=nr,x=nr),at)switch(O){case Br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sd:n.blendFunc(n.ONE,n.ONE);break;case Md:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ed:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Md:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ed:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}A=null,T=null,I=null,P=null,C.set(0,0,0),N=0,m=O,E=at}return}Te=Te||Se,Ee=Ee||te,We=We||oe,(Se!==p||Te!==x)&&(n.blendEquationSeparate(w[Se],w[Te]),p=Se,x=Te),(te!==A||oe!==T||Ee!==I||We!==P)&&(n.blendFuncSeparate(R[te],R[oe],R[Ee],R[We]),A=te,T=oe,I=Ee,P=We),(_t.equals(C)===!1||It!==N)&&(n.blendColor(_t.r,_t.g,_t.b,It),C.copy(_t),N=It),m=O,E=!1}function ie(O,Se){O.side===Fn?se(n.CULL_FACE):F(n.CULL_FACE);let te=O.side===$t;Se&&(te=!te),$(te),O.blending===Br&&O.transparent===!1?y(Ii):y(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const oe=O.stencilWrite;a.setTest(oe),oe&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),le(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(O){S!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),S=O)}function q(O){O!==fy?(F(n.CULL_FACE),O!==D&&(O===bd?n.cullFace(n.BACK):O===hy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),D=O}function ee(O){O!==U&&(Z&&n.lineWidth(O),U=O)}function le(O,Se,te){O?(F(n.POLYGON_OFFSET_FILL),(B!==Se||Q!==te)&&(n.polygonOffset(Se,te),B=Se,Q=te)):se(n.POLYGON_OFFSET_FILL)}function J(O){O?F(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function b(O){O===void 0&&(O=n.TEXTURE0+ne-1),pe!==O&&(n.activeTexture(O),pe=O)}function v(O,Se,te){te===void 0&&(pe===null?te=n.TEXTURE0+ne-1:te=pe);let oe=ve[te];oe===void 0&&(oe={type:void 0,texture:void 0},ve[te]=oe),(oe.type!==O||oe.texture!==Se)&&(pe!==te&&(n.activeTexture(te),pe=te),n.bindTexture(O,Se||be[O]),oe.type=O,oe.texture=Se)}function L(){const O=ve[pe];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(O){$e.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),$e.copy(O))}function _e(O){re.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function Oe(O,Se){let te=l.get(Se);te===void 0&&(te=new WeakMap,l.set(Se,te));let oe=te.get(O);oe===void 0&&(oe=n.getUniformBlockIndex(Se,O.name),te.set(O,oe))}function He(O,Se){const oe=l.get(Se).get(O);c.get(Se)!==oe&&(n.uniformBlockBinding(Se,oe,O.__bindingPointIndex),c.set(Se,oe))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},pe=null,ve={},d={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,A=null,T=null,x=null,I=null,P=null,C=new Ve(0,0,0),N=0,E=!1,S=null,D=null,U=null,B=null,Q=null,$e.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:F,disable:se,bindFramebuffer:ae,drawBuffers:ce,useProgram:De,setBlending:y,setMaterial:ie,setFlipSided:$,setCullFace:q,setLineWidth:ee,setPolygonOffset:le,setScissorTest:J,activeTexture:b,bindTexture:v,unbindTexture:L,compressedTexImage2D:G,compressedTexImage3D:Y,texImage2D:xe,texImage3D:Ce,updateUBOMapping:Oe,uniformBlockBinding:He,texStorage2D:Ue,texStorage3D:de,texSubImage2D:W,texSubImage3D:me,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:Ne,viewport:_e,reset:dt}}function lT(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return h?new OffscreenCanvas(b,v):js("canvas")}function _(b,v,L){let G=1;const Y=J(b);if((Y.width>L||Y.height>L)&&(G=L/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const W=Math.floor(G*Y.width),me=Math.floor(G*Y.height);d===void 0&&(d=g(W,me));const ue=v?g(W,me):d;return ue.width=W,ue.height=me,ue.getContext("2d").drawImage(b,0,0,W,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+W+"x"+me+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(b,v,L,G,Y=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=v;if(v===n.RED&&(L===n.FLOAT&&(W=n.R32F),L===n.HALF_FLOAT&&(W=n.R16F),L===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.R8UI),L===n.UNSIGNED_SHORT&&(W=n.R16UI),L===n.UNSIGNED_INT&&(W=n.R32UI),L===n.BYTE&&(W=n.R8I),L===n.SHORT&&(W=n.R16I),L===n.INT&&(W=n.R32I)),v===n.RG&&(L===n.FLOAT&&(W=n.RG32F),L===n.HALF_FLOAT&&(W=n.RG16F),L===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.RG8UI),L===n.UNSIGNED_SHORT&&(W=n.RG16UI),L===n.UNSIGNED_INT&&(W=n.RG32UI),L===n.BYTE&&(W=n.RG8I),L===n.SHORT&&(W=n.RG16I),L===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.RGB8UI),L===n.UNSIGNED_SHORT&&(W=n.RGB16UI),L===n.UNSIGNED_INT&&(W=n.RGB32UI),L===n.BYTE&&(W=n.RGB8I),L===n.SHORT&&(W=n.RGB16I),L===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),L===n.UNSIGNED_INT&&(W=n.RGBA32UI),L===n.BYTE&&(W=n.RGBA8I),L===n.SHORT&&(W=n.RGBA16I),L===n.INT&&(W=n.RGBA32I)),v===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),v===n.RGBA){const me=Y?ta:Je.getTransfer(G);L===n.FLOAT&&(W=n.RGBA32F),L===n.HALF_FLOAT&&(W=n.RGBA16F),L===n.UNSIGNED_BYTE&&(W=me===ut?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(b,v){let L;return b?v===null||v===cr||v===jr?L=n.DEPTH24_STENCIL8:v===Tn?L=n.DEPTH32F_STENCIL8:v===Xs&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===cr||v===jr?L=n.DEPTH_COMPONENT24:v===Tn?L=n.DEPTH_COMPONENT32F:v===Xs&&(L=n.DEPTH_COMPONENT16),L}function I(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Gt&&b.minFilter!==rn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function P(b){const v=b.target;v.removeEventListener("dispose",P),N(v),v.isVideoTexture&&u.delete(v)}function C(b){const v=b.target;v.removeEventListener("dispose",C),S(v)}function N(b){const v=i.get(b);if(v.__webglInit===void 0)return;const L=b.source,G=f.get(L);if(G){const Y=G[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&E(b),Object.keys(G).length===0&&f.delete(L)}i.remove(b)}function E(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const L=b.source,G=f.get(L);delete G[v.__cacheKey],o.memory.textures--}function S(b){const v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let Y=0;Y<v.__webglFramebuffer[G].length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[G][Y]);else n.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)n.deleteFramebuffer(v.__webglFramebuffer[G]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const L=b.textures;for(let G=0,Y=L.length;G<Y;G++){const W=i.get(L[G]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(L[G])}i.remove(b)}let D=0;function U(){D=0}function B(){const b=D;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),D+=1,b}function Q(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function ne(b,v){const L=i.get(b);if(b.isVideoTexture&&ee(b),b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){const G=b.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(L,b,v);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function Z(b,v){const L=i.get(b);if(b.version>0&&L.__version!==b.version){re(L,b,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function j(b,v){const L=i.get(b);if(b.version>0&&L.__version!==b.version){re(L,b,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function V(b,v){const L=i.get(b);if(b.version>0&&L.__version!==b.version){he(L,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}const pe={[Yr]:n.REPEAT,[Ri]:n.CLAMP_TO_EDGE,[ea]:n.MIRRORED_REPEAT},ve={[Gt]:n.NEAREST,[Sp]:n.NEAREST_MIPMAP_NEAREST,[xs]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[Ho]:n.LINEAR_MIPMAP_NEAREST,[ri]:n.LINEAR_MIPMAP_LINEAR},we={[Yy]:n.NEVER,[Qy]:n.ALWAYS,[jy]:n.LESS,[Up]:n.LEQUAL,[Ky]:n.EQUAL,[Jy]:n.GEQUAL,[$y]:n.GREATER,[Zy]:n.NOTEQUAL};function Pe(b,v){if(v.type===Tn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===rn||v.magFilter===Ho||v.magFilter===xs||v.magFilter===ri||v.minFilter===rn||v.minFilter===Ho||v.minFilter===xs||v.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,pe[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,pe[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,pe[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ve[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ve[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,we[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Gt||v.minFilter!==xs&&v.minFilter!==ri||v.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function $e(b,v){let L=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",P));const G=v.source;let Y=f.get(G);Y===void 0&&(Y={},f.set(G,Y));const W=Q(v);if(W!==b.__cacheKey){Y[W]===void 0&&(Y[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),Y[W].usedTimes++;const me=Y[b.__cacheKey];me!==void 0&&(Y[b.__cacheKey].usedTimes--,me.usedTimes===0&&E(v)),b.__cacheKey=W,b.__webglTexture=Y[W].texture}return L}function re(b,v,L){let G=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=n.TEXTURE_3D);const Y=$e(b,v),W=v.source;t.bindTexture(G,b.__webglTexture,n.TEXTURE0+L);const me=i.get(W);if(W.version!==me.__version||Y===!0){t.activeTexture(n.TEXTURE0+L);const ue=Je.getPrimaries(Je.workingColorSpace),ge=v.colorSpace===wi?null:Je.getPrimaries(v.colorSpace),Ue=v.colorSpace===wi||ue===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let de=_(v.image,!1,r.maxTextureSize);de=le(v,de);const xe=s.convert(v.format,v.colorSpace),Ce=s.convert(v.type);let Ne=T(v.internalFormat,xe,Ce,v.colorSpace,v.isVideoTexture);Pe(G,v);let _e;const Oe=v.mipmaps,He=v.isVideoTexture!==!0,dt=me.__version===void 0||Y===!0,O=W.dataReady,Se=I(v,de);if(v.isDepthTexture)Ne=x(v.format===Kr,v.type),dt&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ne,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ne,de.width,de.height,0,xe,Ce,null));else if(v.isDataTexture)if(Oe.length>0){He&&dt&&t.texStorage2D(n.TEXTURE_2D,Se,Ne,Oe[0].width,Oe[0].height);for(let te=0,oe=Oe.length;te<oe;te++)_e=Oe[te],He?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,_e.width,_e.height,xe,Ce,_e.data):t.texImage2D(n.TEXTURE_2D,te,Ne,_e.width,_e.height,0,xe,Ce,_e.data);v.generateMipmaps=!1}else He?(dt&&t.texStorage2D(n.TEXTURE_2D,Se,Ne,de.width,de.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,xe,Ce,de.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,de.width,de.height,0,xe,Ce,de.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){He&&dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ne,Oe[0].width,Oe[0].height,de.depth);for(let te=0,oe=Oe.length;te<oe;te++)if(_e=Oe[te],v.format!==hn)if(xe!==null)if(He){if(O)if(v.layerUpdates.size>0){const Te=gf(_e.width,_e.height,v.format,v.type);for(const Ee of v.layerUpdates){const We=_e.data.subarray(Ee*Te/_e.data.BYTES_PER_ELEMENT,(Ee+1)*Te/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Ee,_e.width,_e.height,1,xe,We)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,_e.width,_e.height,de.depth,xe,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Ne,_e.width,_e.height,de.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,_e.width,_e.height,de.depth,xe,Ce,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Ne,_e.width,_e.height,de.depth,0,xe,Ce,_e.data)}else{He&&dt&&t.texStorage2D(n.TEXTURE_2D,Se,Ne,Oe[0].width,Oe[0].height);for(let te=0,oe=Oe.length;te<oe;te++)_e=Oe[te],v.format!==hn?xe!==null?He?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,_e.width,_e.height,xe,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Ne,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,_e.width,_e.height,xe,Ce,_e.data):t.texImage2D(n.TEXTURE_2D,te,Ne,_e.width,_e.height,0,xe,Ce,_e.data)}else if(v.isDataArrayTexture)if(He){if(dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ne,de.width,de.height,de.depth),O)if(v.layerUpdates.size>0){const te=gf(de.width,de.height,v.format,v.type);for(const oe of v.layerUpdates){const Te=de.data.subarray(oe*te/de.data.BYTES_PER_ELEMENT,(oe+1)*te/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,de.width,de.height,1,xe,Ce,Te)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,xe,Ce,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,de.width,de.height,de.depth,0,xe,Ce,de.data);else if(v.isData3DTexture)He?(dt&&t.texStorage3D(n.TEXTURE_3D,Se,Ne,de.width,de.height,de.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,xe,Ce,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,de.width,de.height,de.depth,0,xe,Ce,de.data);else if(v.isFramebufferTexture){if(dt)if(He)t.texStorage2D(n.TEXTURE_2D,Se,Ne,de.width,de.height);else{let te=de.width,oe=de.height;for(let Te=0;Te<Se;Te++)t.texImage2D(n.TEXTURE_2D,Te,Ne,te,oe,0,xe,Ce,null),te>>=1,oe>>=1}}else if(Oe.length>0){if(He&&dt){const te=J(Oe[0]);t.texStorage2D(n.TEXTURE_2D,Se,Ne,te.width,te.height)}for(let te=0,oe=Oe.length;te<oe;te++)_e=Oe[te],He?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,xe,Ce,_e):t.texImage2D(n.TEXTURE_2D,te,Ne,xe,Ce,_e);v.generateMipmaps=!1}else if(He){if(dt){const te=J(de);t.texStorage2D(n.TEXTURE_2D,Se,Ne,te.width,te.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ce,de)}else t.texImage2D(n.TEXTURE_2D,0,Ne,xe,Ce,de);m(v)&&p(G),me.__version=W.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function he(b,v,L){if(v.image.length!==6)return;const G=$e(b,v),Y=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+L);const W=i.get(Y);if(Y.version!==W.__version||G===!0){t.activeTexture(n.TEXTURE0+L);const me=Je.getPrimaries(Je.workingColorSpace),ue=v.colorSpace===wi?null:Je.getPrimaries(v.colorSpace),ge=v.colorSpace===wi||me===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ue=v.isCompressedTexture||v.image[0].isCompressedTexture,de=v.image[0]&&v.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!Ue&&!de?xe[oe]=_(v.image[oe],!0,r.maxCubemapSize):xe[oe]=de?v.image[oe].image:v.image[oe],xe[oe]=le(v,xe[oe]);const Ce=xe[0],Ne=s.convert(v.format,v.colorSpace),_e=s.convert(v.type),Oe=T(v.internalFormat,Ne,_e,v.colorSpace),He=v.isVideoTexture!==!0,dt=W.__version===void 0||G===!0,O=Y.dataReady;let Se=I(v,Ce);Pe(n.TEXTURE_CUBE_MAP,v);let te;if(Ue){He&&dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Oe,Ce.width,Ce.height);for(let oe=0;oe<6;oe++){te=xe[oe].mipmaps;for(let Te=0;Te<te.length;Te++){const Ee=te[Te];v.format!==hn?Ne!==null?He?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,0,0,Ee.width,Ee.height,Ne,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,Oe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,0,0,Ee.width,Ee.height,Ne,_e,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te,Oe,Ee.width,Ee.height,0,Ne,_e,Ee.data)}}}else{if(te=v.mipmaps,He&&dt){te.length>0&&Se++;const oe=J(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Oe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(de){He?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,Ne,_e,xe[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Oe,xe[oe].width,xe[oe].height,0,Ne,_e,xe[oe].data);for(let Te=0;Te<te.length;Te++){const We=te[Te].image[oe].image;He?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,0,0,We.width,We.height,Ne,_e,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,Oe,We.width,We.height,0,Ne,_e,We.data)}}else{He?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ne,_e,xe[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Oe,Ne,_e,xe[oe]);for(let Te=0;Te<te.length;Te++){const Ee=te[Te];He?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,0,0,Ne,_e,Ee.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te+1,Oe,Ne,_e,Ee.image[oe])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),W.__version=Y.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function be(b,v,L,G,Y,W){const me=s.convert(L.format,L.colorSpace),ue=s.convert(L.type),ge=T(L.internalFormat,me,ue,L.colorSpace),Ue=i.get(v),de=i.get(L);if(de.__renderTarget=v,!Ue.__hasExternalTextures){const xe=Math.max(1,v.width>>W),Ce=Math.max(1,v.height>>W);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,W,ge,xe,Ce,v.depth,0,me,ue,null):t.texImage2D(Y,W,ge,xe,Ce,0,me,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,Y,de.__webglTexture,0,$(v)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,Y,de.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(b,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){const G=v.depthTexture,Y=G&&G.isDepthTexture?G.type:null,W=x(v.stencilBuffer,Y),me=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=$(v);q(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,W,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,b)}else{const G=v.textures;for(let Y=0;Y<G.length;Y++){const W=G[Y],me=s.convert(W.format,W.colorSpace),ue=s.convert(W.type),ge=T(W.internalFormat,me,ue,W.colorSpace),Ue=$(v);L&&q(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,ge,v.width,v.height):q(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,ge,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ge,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(v.depthTexture);G.__renderTarget=v,(!G.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ne(v.depthTexture,0);const Y=G.__webglTexture,W=$(v);if(v.depthTexture.format===kr)q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(v.depthTexture.format===Kr)q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function ae(b){const v=i.get(b),L=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const G=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){const Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=G}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");se(v.__webglFramebuffer,b)}else if(L){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=n.createRenderbuffer(),F(v.__webglDepthbuffer[G],b,!1);else{const Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,W)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),F(v.__webglDepthbuffer,b,!1);else{const G=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,Y)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(b,v,L){const G=i.get(b);v!==void 0&&be(G.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&ae(b)}function De(b){const v=b.texture,L=i.get(b),G=i.get(v);b.addEventListener("dispose",C);const Y=b.textures,W=b.isWebGLCubeRenderTarget===!0,me=Y.length>1;if(me||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=v.version,o.memory.textures++),W){L.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[ue]=[];for(let ge=0;ge<v.mipmaps.length;ge++)L.__webglFramebuffer[ue][ge]=n.createFramebuffer()}else L.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)L.__webglFramebuffer[ue]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(me)for(let ue=0,ge=Y.length;ue<ge;ue++){const Ue=i.get(Y[ue]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&q(b)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ue=0;ue<Y.length;ue++){const ge=Y[ue];L.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ue]);const Ue=s.convert(ge.format,ge.colorSpace),de=s.convert(ge.type),xe=T(ge.internalFormat,Ue,de,ge.colorSpace,b.isXRRenderTarget===!0),Ce=$(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,xe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,L.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),F(L.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)be(L.__webglFramebuffer[ue][ge],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else be(L.__webglFramebuffer[ue],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ue=0,ge=Y.length;ue<ge;ue++){const Ue=Y[ue],de=i.get(Ue);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),Pe(n.TEXTURE_2D,Ue),be(L.__webglFramebuffer,b,Ue,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(Ue)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,G.__webglTexture),Pe(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)be(L.__webglFramebuffer[ge],b,v,n.COLOR_ATTACHMENT0,ue,ge);else be(L.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,ue,0);m(v)&&p(ue),t.unbindTexture()}b.depthBuffer&&ae(b)}function w(b){const v=b.textures;for(let L=0,G=v.length;L<G;L++){const Y=v[L];if(m(Y)){const W=A(b),me=i.get(Y).__webglTexture;t.bindTexture(W,me),p(W),t.unbindTexture()}}}const R=[],y=[];function ie(b){if(b.samples>0){if(q(b)===!1){const v=b.textures,L=b.width,G=b.height;let Y=n.COLOR_BUFFER_BIT;const W=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(b),ue=v.length>1;if(ue)for(let ge=0;ge<v.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ge=0;ge<v.length;ge++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);const Ue=i.get(v[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,L,G,0,0,L,G,Y,n.NEAREST),c===!0&&(R.length=0,y.length=0,R.push(n.COLOR_ATTACHMENT0+ge),b.depthBuffer&&b.resolveDepthBuffer===!1&&(R.push(W),y.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<v.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);const Ue=i.get(v[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function $(b){return Math.min(r.maxSamples,b.samples)}function q(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ee(b){const v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function le(b,v){const L=b.colorSpace,G=b.format,Y=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||L!==Xt&&L!==wi&&(Je.getTransfer(L)===ut?(G!==hn||Y!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function J(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.setTexture2D=ne,this.setTexture2DArray=Z,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=ce,this.setupRenderTarget=De,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=be,this.useMultisampledRTT=q}function uT(n,e){function t(i,r=wi){let s;const o=Je.getTransfer(r);if(i===ui)return n.UNSIGNED_BYTE;if(i===Ql)return n.UNSIGNED_SHORT_4_4_4_4;if(i===eu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mp)return n.BYTE;if(i===Ep)return n.SHORT;if(i===Xs)return n.UNSIGNED_SHORT;if(i===Jl)return n.INT;if(i===cr)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===Zs)return n.HALF_FLOAT;if(i===Ap)return n.ALPHA;if(i===wp)return n.RGB;if(i===hn)return n.RGBA;if(i===Rp)return n.LUMINANCE;if(i===Cp)return n.LUMINANCE_ALPHA;if(i===kr)return n.DEPTH_COMPONENT;if(i===Kr)return n.DEPTH_STENCIL;if(i===tu)return n.RED;if(i===nu)return n.RED_INTEGER;if(i===Pp)return n.RG;if(i===iu)return n.RG_INTEGER;if(i===ru)return n.RGBA_INTEGER;if(i===zo||i===Vo||i===Go||i===Wo)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$c||i===Zc||i===Jc||i===Qc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$c)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===el||i===tl||i===nl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===el||i===tl)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===il||i===rl||i===sl||i===ol||i===al||i===cl||i===ll||i===ul||i===dl||i===fl||i===hl||i===pl||i===ml||i===gl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===il)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ol)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===al)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ll)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ul)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ml)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xo||i===_l||i===vl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Xo)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_l)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ip||i===yl||i===xl||i===bl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const dT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fT=`
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

}`;class hT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new At,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ui({vertexShader:dT,fragmentShader:fT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new sn(new ba(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pT extends ts{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null;const _=new hT,m=t.getContextAttributes();let p=null,A=null;const T=[],x=[],I=new Ke;let P=null;const C=new jt;C.viewport=new nt;const N=new jt;N.viewport=new nt;const E=[C,N],S=new Ax;let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let he=T[re];return he===void 0&&(he=new cc,T[re]=he),he.getTargetRaySpace()},this.getControllerGrip=function(re){let he=T[re];return he===void 0&&(he=new cc,T[re]=he),he.getGripSpace()},this.getHand=function(re){let he=T[re];return he===void 0&&(he=new cc,T[re]=he),he.getHandSpace()};function B(re){const he=x.indexOf(re.inputSource);if(he===-1)return;const be=T[he];be!==void 0&&(be.update(re.inputSource,re.frame,l||o),be.dispatchEvent({type:re.type,data:re.inputSource}))}function Q(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",ne);for(let re=0;re<T.length;re++){const he=x[re];he!==null&&(x[re]=null,T[re].disconnect(he))}D=null,U=null,_.reset(),e.setRenderTarget(p),h=null,f=null,d=null,r=null,A=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,F=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=m.stencil?Kr:kr,F=m.stencil?jr:cr);const ae={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new lr(f.textureWidth,f.textureHeight,{format:hn,type:ui,depthTexture:new jp(f.textureWidth,f.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),A=new lr(h.framebufferWidth,h.framebufferHeight,{format:hn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(re){for(let he=0;he<re.removed.length;he++){const be=re.removed[he],F=x.indexOf(be);F>=0&&(x[F]=null,T[F].disconnect(be))}for(let he=0;he<re.added.length;he++){const be=re.added[he];let F=x.indexOf(be);if(F===-1){for(let ae=0;ae<T.length;ae++)if(ae>=x.length){x.push(be),F=ae;break}else if(x[ae]===null){x[ae]=be,F=ae;break}if(F===-1)break}const se=T[F];se&&se.connect(be)}}const Z=new z,j=new z;function V(re,he,be){Z.setFromMatrixPosition(he.matrixWorld),j.setFromMatrixPosition(be.matrixWorld);const F=Z.distanceTo(j),se=he.projectionMatrix.elements,ae=be.projectionMatrix.elements,ce=se[14]/(se[10]-1),De=se[14]/(se[10]+1),w=(se[9]+1)/se[5],R=(se[9]-1)/se[5],y=(se[8]-1)/se[0],ie=(ae[8]+1)/ae[0],$=ce*y,q=ce*ie,ee=F/(-y+ie),le=ee*-y;if(he.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(le),re.translateZ(ee),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),se[10]===-1)re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const J=ce+ee,b=De+ee,v=$-le,L=q+(F-le),G=w*De/b*J,Y=R*De/b*J;re.projectionMatrix.makePerspective(v,L,G,Y,J,b),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function pe(re,he){he===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(he.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let he=re.near,be=re.far;_.texture!==null&&(_.depthNear>0&&(he=_.depthNear),_.depthFar>0&&(be=_.depthFar)),S.near=N.near=C.near=he,S.far=N.far=C.far=be,(D!==S.near||U!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,U=S.far),C.layers.mask=re.layers.mask|2,N.layers.mask=re.layers.mask|4,S.layers.mask=C.layers.mask|N.layers.mask;const F=re.parent,se=S.cameras;pe(S,F);for(let ae=0;ae<se.length;ae++)pe(se[ae],F);se.length===2?V(S,C,N):S.projectionMatrix.copy(C.projectionMatrix),ve(re,S,F)};function ve(re,he,be){be===null?re.matrix.copy(he.matrixWorld):(re.matrix.copy(be.matrixWorld),re.matrix.invert(),re.matrix.multiply(he.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=$r*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(re){c=re,f!==null&&(f.fixedFoveation=re),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=re)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let we=null;function Pe(re,he){if(u=he.getViewerPose(l||o),g=he,u!==null){const be=u.views;h!==null&&(e.setRenderTargetFramebuffer(A,h.framebuffer),e.setRenderTarget(A));let F=!1;be.length!==S.cameras.length&&(S.cameras.length=0,F=!0);for(let ce=0;ce<be.length;ce++){const De=be[ce];let w=null;if(h!==null)w=h.getViewport(De);else{const y=d.getViewSubImage(f,De);w=y.viewport,ce===0&&(e.setRenderTargetTextures(A,y.colorTexture,f.ignoreDepthValues?void 0:y.depthStencilTexture),e.setRenderTarget(A))}let R=E[ce];R===void 0&&(R=new jt,R.layers.enable(ce),R.viewport=new nt,E[ce]=R),R.matrix.fromArray(De.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(De.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(w.x,w.y,w.width,w.height),ce===0&&(S.matrix.copy(R.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),F===!0&&S.cameras.push(R)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const ce=d.getDepthInformation(be[0]);ce&&ce.isValid&&ce.texture&&_.init(e,ce,r.renderState)}}for(let be=0;be<T.length;be++){const F=x[be],se=T[be];F!==null&&se!==void 0&&se.update(F,he,l||o)}we&&we(re,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const $e=new Qp;$e.setAnimationLoop(Pe),this.setAnimationLoop=function(re){we=re},this.dispose=function(){}}}const $i=new kn,mT=new Ge;function gT(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,zp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,T,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,A,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),T=A.envMap,x=A.envMapRotation;T&&(m.envMap.value=T,$i.copy(x),$i.x*=-1,$i.y*=-1,$i.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(mT.makeRotationFromEuler($i)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,A,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _T(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,T){const x=T.program;i.uniformBlockBinding(A,x)}function l(A,T){let x=r[A.id];x===void 0&&(g(A),x=u(A),r[A.id]=x,A.addEventListener("dispose",m));const I=T.program;i.updateUBOMapping(A,I);const P=e.render.frame;s[A.id]!==P&&(f(A),s[A.id]=P)}function u(A){const T=d();A.__bindingPointIndex=T;const x=n.createBuffer(),I=A.__size,P=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,I,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,x),x}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const T=r[A.id],x=A.uniforms,I=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let P=0,C=x.length;P<C;P++){const N=Array.isArray(x[P])?x[P]:[x[P]];for(let E=0,S=N.length;E<S;E++){const D=N[E];if(h(D,P,E,I)===!0){const U=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let Q=0;for(let ne=0;ne<B.length;ne++){const Z=B[ne],j=_(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,U+Q,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):(Z.toArray(D.__data,Q),Q+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(A,T,x,I){const P=A.value,C=T+"_"+x;if(I[C]===void 0)return typeof P=="number"||typeof P=="boolean"?I[C]=P:I[C]=P.clone(),!0;{const N=I[C];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return I[C]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function g(A){const T=A.uniforms;let x=0;const I=16;for(let C=0,N=T.length;C<N;C++){const E=Array.isArray(T[C])?T[C]:[T[C]];for(let S=0,D=E.length;S<D;S++){const U=E[S],B=Array.isArray(U.value)?U.value:[U.value];for(let Q=0,ne=B.length;Q<ne;Q++){const Z=B[Q],j=_(Z),V=x%I,pe=V%j.boundary,ve=V+pe;x+=pe,ve!==0&&I-ve<j.storage&&(x+=I-ve),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=j.storage}}}const P=x%I;return P>0&&(x+=I-P),A.__size=x,A.__cache={},this}function _(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const x=o.indexOf(T.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class vT{constructor(e={}){const{canvas:t=_0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=Li,this.toneMappingExposure=1;const x=this;let I=!1,P=0,C=0,N=null,E=-1,S=null;const D=new nt,U=new nt;let B=null;const Q=new Ve(0);let ne=0,Z=t.width,j=t.height,V=1,pe=null,ve=null;const we=new nt(0,0,Z,j),Pe=new nt(0,0,Z,j);let $e=!1;const re=new lu;let he=!1,be=!1;this.transmissionResolutionScale=1;const F=new Ge,se=new Ge,ae=new z,ce=new nt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function R(){return N===null?V:1}let y=i;function ie(M,k){return t.getContext(M,k)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zl}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),y===null){const k="webgl2";if(y=ie(k,M),y===null)throw ie(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let $,q,ee,le,J,b,v,L,G,Y,W,me,ue,ge,Ue,de,xe,Ce,Ne,_e,Oe,He,dt,O;function Se(){$=new RM(y),$.init(),He=new uT(y,$),q=new SM(y,$,e,He),ee=new cT(y,$),q.reverseDepthBuffer&&f&&ee.buffers.depth.setReversed(!0),le=new IM(y),J=new KE,b=new lT(y,$,ee,J,q,He,le),v=new EM(x),L=new wM(x),G=new Bx(y),dt=new xM(y,G),Y=new CM(y,G,le,dt),W=new DM(y,Y,G,le),Ne=new LM(y,q,b),de=new MM(J),me=new jE(x,v,L,$,q,dt,de),ue=new gT(x,J),ge=new ZE,Ue=new iT($),Ce=new yM(x,v,L,ee,W,h,c),xe=new oT(x,W,q),O=new _T(y,le,q,ee),_e=new bM(y,$,le),Oe=new PM(y,$,le),le.programs=me.programs,x.capabilities=q,x.extensions=$,x.properties=J,x.renderLists=ge,x.shadowMap=xe,x.state=ee,x.info=le}Se();const te=new pT(x,y);this.xr=te,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const M=$.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=$.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(Z,j,!1))},this.getSize=function(M){return M.set(Z,j)},this.setSize=function(M,k,X=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,j=k,t.width=Math.floor(M*V),t.height=Math.floor(k*V),X===!0&&(t.style.width=M+"px",t.style.height=k+"px"),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set(Z*V,j*V).floor()},this.setDrawingBufferSize=function(M,k,X){Z=M,j=k,V=X,t.width=Math.floor(M*X),t.height=Math.floor(k*X),this.setViewport(0,0,M,k)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(we)},this.setViewport=function(M,k,X,K){M.isVector4?we.set(M.x,M.y,M.z,M.w):we.set(M,k,X,K),ee.viewport(D.copy(we).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(Pe)},this.setScissor=function(M,k,X,K){M.isVector4?Pe.set(M.x,M.y,M.z,M.w):Pe.set(M,k,X,K),ee.scissor(U.copy(Pe).multiplyScalar(V).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(M){ee.setScissorTest($e=M)},this.setOpaqueSort=function(M){pe=M},this.setTransparentSort=function(M){ve=M},this.getClearColor=function(M){return M.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(M=!0,k=!0,X=!0){let K=0;if(M){let H=!1;if(N!==null){const fe=N.texture.format;H=fe===ru||fe===iu||fe===nu}if(H){const fe=N.texture.type,Me=fe===ui||fe===cr||fe===Xs||fe===jr||fe===Ql||fe===eu,Ae=Ce.getClearColor(),Re=Ce.getClearAlpha(),Be=Ae.r,ke=Ae.g,Ie=Ae.b;Me?(g[0]=Be,g[1]=ke,g[2]=Ie,g[3]=Re,y.clearBufferuiv(y.COLOR,0,g)):(_[0]=Be,_[1]=ke,_[2]=Ie,_[3]=Re,y.clearBufferiv(y.COLOR,0,_))}else K|=y.COLOR_BUFFER_BIT}k&&(K|=y.DEPTH_BUFFER_BIT),X&&(K|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Ce.dispose(),ge.dispose(),Ue.dispose(),J.dispose(),v.dispose(),L.dispose(),W.dispose(),dt.dispose(),O.dispose(),me.dispose(),te.dispose(),te.removeEventListener("sessionstart",gu),te.removeEventListener("sessionend",_u),ki.stop()};function oe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const M=le.autoReset,k=xe.enabled,X=xe.autoUpdate,K=xe.needsUpdate,H=xe.type;Se(),le.autoReset=M,xe.enabled=k,xe.autoUpdate=X,xe.needsUpdate=K,xe.type=H}function Ee(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function We(M){const k=M.target;k.removeEventListener("dispose",We),_t(k)}function _t(M){It(M),J.remove(M)}function It(M){const k=J.get(M).programs;k!==void 0&&(k.forEach(function(X){me.releaseProgram(X)}),M.isShaderMaterial&&me.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,X,K,H,fe){k===null&&(k=De);const Me=H.isMesh&&H.matrixWorld.determinant()<0,Ae=cm(M,k,X,K,H);ee.setMaterial(K,Me);let Re=X.index,Be=1;if(K.wireframe===!0){if(Re=Y.getWireframeAttribute(X),Re===void 0)return;Be=2}const ke=X.drawRange,Ie=X.attributes.position;let Qe=ke.start*Be,it=(ke.start+ke.count)*Be;fe!==null&&(Qe=Math.max(Qe,fe.start*Be),it=Math.min(it,(fe.start+fe.count)*Be)),Re!==null?(Qe=Math.max(Qe,0),it=Math.min(it,Re.count)):Ie!=null&&(Qe=Math.max(Qe,0),it=Math.min(it,Ie.count));const yt=it-Qe;if(yt<0||yt===1/0)return;dt.setup(H,K,Ae,X,Re);let vt,et=_e;if(Re!==null&&(vt=G.get(Re),et=Oe,et.setIndex(vt)),H.isMesh)K.wireframe===!0?(ee.setLineWidth(K.wireframeLinewidth*R()),et.setMode(y.LINES)):et.setMode(y.TRIANGLES);else if(H.isLine){let Le=K.linewidth;Le===void 0&&(Le=1),ee.setLineWidth(Le*R()),H.isLineSegments?et.setMode(y.LINES):H.isLineLoop?et.setMode(y.LINE_LOOP):et.setMode(y.LINE_STRIP)}else H.isPoints?et.setMode(y.POINTS):H.isSprite&&et.setMode(y.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)et.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if($.get("WEBGL_multi_draw"))et.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Le=H._multiDrawStarts,Rt=H._multiDrawCounts,rt=H._multiDrawCount,vn=Re?G.get(Re).bytesPerElement:1,dr=J.get(K).currentProgram.getUniforms();for(let Zt=0;Zt<rt;Zt++)dr.setValue(y,"_gl_DrawID",Zt),et.render(Le[Zt]/vn,Rt[Zt])}else if(H.isInstancedMesh)et.renderInstances(Qe,yt,H.count);else if(X.isInstancedBufferGeometry){const Le=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Rt=Math.min(X.instanceCount,Le);et.renderInstances(Qe,yt,Rt)}else et.render(Qe,yt)};function at(M,k,X){M.transparent===!0&&M.side===Fn&&M.forceSinglePass===!1?(M.side=$t,M.needsUpdate=!0,no(M,k,X),M.side=li,M.needsUpdate=!0,no(M,k,X),M.side=Fn):no(M,k,X)}this.compile=function(M,k,X=null){X===null&&(X=M),p=Ue.get(X),p.init(k),T.push(p),X.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),M!==X&&M.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const K=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const fe=H.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){const Ae=fe[Me];at(Ae,X,H),K.add(Ae)}else at(fe,X,H),K.add(fe)}),T.pop(),p=null,K},this.compileAsync=function(M,k,X=null){const K=this.compile(M,k,X);return new Promise(H=>{function fe(){if(K.forEach(function(Me){J.get(Me).currentProgram.isReady()&&K.delete(Me)}),K.size===0){H(M);return}setTimeout(fe,10)}$.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let _n=null;function Wn(M){_n&&_n(M)}function gu(){ki.stop()}function _u(){ki.start()}const ki=new Qp;ki.setAnimationLoop(Wn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(M){_n=M,te.setAnimationLoop(M),M===null?ki.stop():ki.start()},te.addEventListener("sessionstart",gu),te.addEventListener("sessionend",_u),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(k),k=te.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,k,N),p=Ue.get(M,T.length),p.init(k),T.push(p),se.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),re.setFromProjectionMatrix(se),be=this.localClippingEnabled,he=de.init(this.clippingPlanes,be),m=ge.get(M,A.length),m.init(),A.push(m),te.enabled===!0&&te.isPresenting===!0){const fe=x.xr.getDepthSensingMesh();fe!==null&&Ta(fe,k,-1/0,x.sortObjects)}Ta(M,k,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(pe,ve),w=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,w&&Ce.addToRenderList(m,M),this.info.render.frame++,he===!0&&de.beginShadows();const X=p.state.shadowsArray;xe.render(X,M,k),he===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){const fe=k.cameras;if(H.length>0)for(let Me=0,Ae=fe.length;Me<Ae;Me++){const Re=fe[Me];yu(K,H,M,Re)}w&&Ce.render(M);for(let Me=0,Ae=fe.length;Me<Ae;Me++){const Re=fe[Me];vu(m,M,Re,Re.viewport)}}else H.length>0&&yu(K,H,M,k),w&&Ce.render(M),vu(m,M,k);N!==null&&C===0&&(b.updateMultisampleRenderTarget(N),b.updateRenderTargetMipmap(N)),M.isScene===!0&&M.onAfterRender(x,M,k),dt.resetDefaultState(),E=-1,S=null,T.pop(),T.length>0?(p=T[T.length-1],he===!0&&de.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ta(M,k,X,K){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||re.intersectsSprite(M)){K&&ce.setFromMatrixPosition(M.matrixWorld).applyMatrix4(se);const Me=W.update(M),Ae=M.material;Ae.visible&&m.push(M,Me,Ae,X,ce.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||re.intersectsObject(M))){const Me=W.update(M),Ae=M.material;if(K&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ce.copy(M.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ce.copy(Me.boundingSphere.center)),ce.applyMatrix4(M.matrixWorld).applyMatrix4(se)),Array.isArray(Ae)){const Re=Me.groups;for(let Be=0,ke=Re.length;Be<ke;Be++){const Ie=Re[Be],Qe=Ae[Ie.materialIndex];Qe&&Qe.visible&&m.push(M,Me,Qe,X,ce.z,Ie)}}else Ae.visible&&m.push(M,Me,Ae,X,ce.z,null)}}const fe=M.children;for(let Me=0,Ae=fe.length;Me<Ae;Me++)Ta(fe[Me],k,X,K)}function vu(M,k,X,K){const H=M.opaque,fe=M.transmissive,Me=M.transparent;p.setupLightsView(X),he===!0&&de.setGlobalState(x.clippingPlanes,X),K&&ee.viewport(D.copy(K)),H.length>0&&to(H,k,X),fe.length>0&&to(fe,k,X),Me.length>0&&to(Me,k,X),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function yu(M,k,X,K){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new lr(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Zs:ui,minFilter:ri,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const fe=p.state.transmissionRenderTarget[K.id],Me=K.viewport||D;fe.setSize(Me.z*x.transmissionResolutionScale,Me.w*x.transmissionResolutionScale);const Ae=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(Q),ne=x.getClearAlpha(),ne<1&&x.setClearColor(16777215,.5),x.clear(),w&&Ce.render(X);const Re=x.toneMapping;x.toneMapping=Li;const Be=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),he===!0&&de.setGlobalState(x.clippingPlanes,K),to(M,X,K),b.updateMultisampleRenderTarget(fe),b.updateRenderTargetMipmap(fe),$.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ie=0,Qe=k.length;Ie<Qe;Ie++){const it=k[Ie],yt=it.object,vt=it.geometry,et=it.material,Le=it.group;if(et.side===Fn&&yt.layers.test(K.layers)){const Rt=et.side;et.side=$t,et.needsUpdate=!0,xu(yt,X,K,vt,et,Le),et.side=Rt,et.needsUpdate=!0,ke=!0}}ke===!0&&(b.updateMultisampleRenderTarget(fe),b.updateRenderTargetMipmap(fe))}x.setRenderTarget(Ae),x.setClearColor(Q,ne),Be!==void 0&&(K.viewport=Be),x.toneMapping=Re}function to(M,k,X){const K=k.isScene===!0?k.overrideMaterial:null;for(let H=0,fe=M.length;H<fe;H++){const Me=M[H],Ae=Me.object,Re=Me.geometry,Be=K===null?Me.material:K,ke=Me.group;Ae.layers.test(X.layers)&&xu(Ae,k,X,Re,Be,ke)}}function xu(M,k,X,K,H,fe){M.onBeforeRender(x,k,X,K,H,fe),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(x,k,X,K,M,fe),H.transparent===!0&&H.side===Fn&&H.forceSinglePass===!1?(H.side=$t,H.needsUpdate=!0,x.renderBufferDirect(X,k,K,H,M,fe),H.side=li,H.needsUpdate=!0,x.renderBufferDirect(X,k,K,H,M,fe),H.side=Fn):x.renderBufferDirect(X,k,K,H,M,fe),M.onAfterRender(x,k,X,K,H,fe)}function no(M,k,X){k.isScene!==!0&&(k=De);const K=J.get(M),H=p.state.lights,fe=p.state.shadowsArray,Me=H.state.version,Ae=me.getParameters(M,H.state,fe,k,X),Re=me.getProgramCacheKey(Ae);let Be=K.programs;K.environment=M.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(M.isMeshStandardMaterial?L:v).get(M.envMap||K.environment),K.envMapRotation=K.environment!==null&&M.envMap===null?k.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",We),Be=new Map,K.programs=Be);let ke=Be.get(Re);if(ke!==void 0){if(K.currentProgram===ke&&K.lightsStateVersion===Me)return Su(M,Ae),ke}else Ae.uniforms=me.getUniforms(M),M.onBeforeCompile(Ae,x),ke=me.acquireProgram(Ae,Re),Be.set(Re,ke),K.uniforms=Ae.uniforms;const Ie=K.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ie.clippingPlanes=de.uniform),Su(M,Ae),K.needsLights=um(M),K.lightsStateVersion=Me,K.needsLights&&(Ie.ambientLightColor.value=H.state.ambient,Ie.lightProbe.value=H.state.probe,Ie.directionalLights.value=H.state.directional,Ie.directionalLightShadows.value=H.state.directionalShadow,Ie.spotLights.value=H.state.spot,Ie.spotLightShadows.value=H.state.spotShadow,Ie.rectAreaLights.value=H.state.rectArea,Ie.ltc_1.value=H.state.rectAreaLTC1,Ie.ltc_2.value=H.state.rectAreaLTC2,Ie.pointLights.value=H.state.point,Ie.pointLightShadows.value=H.state.pointShadow,Ie.hemisphereLights.value=H.state.hemi,Ie.directionalShadowMap.value=H.state.directionalShadowMap,Ie.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ie.spotShadowMap.value=H.state.spotShadowMap,Ie.spotLightMatrix.value=H.state.spotLightMatrix,Ie.spotLightMap.value=H.state.spotLightMap,Ie.pointShadowMap.value=H.state.pointShadowMap,Ie.pointShadowMatrix.value=H.state.pointShadowMatrix),K.currentProgram=ke,K.uniformsList=null,ke}function bu(M){if(M.uniformsList===null){const k=M.currentProgram.getUniforms();M.uniformsList=qo.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function Su(M,k){const X=J.get(M);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function cm(M,k,X,K,H){k.isScene!==!0&&(k=De),b.resetTextureUnits();const fe=k.fog,Me=K.isMeshStandardMaterial?k.environment:null,Ae=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Xt,Re=(K.isMeshStandardMaterial?L:v).get(K.envMap||Me),Be=K.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ke=!!X.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ie=!!X.morphAttributes.position,Qe=!!X.morphAttributes.normal,it=!!X.morphAttributes.color;let yt=Li;K.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(yt=x.toneMapping);const vt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,et=vt!==void 0?vt.length:0,Le=J.get(K),Rt=p.state.lights;if(he===!0&&(be===!0||M!==S)){const Ot=M===S&&K.id===E;de.setState(K,M,Ot)}let rt=!1;K.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Rt.state.version||Le.outputColorSpace!==Ae||H.isBatchedMesh&&Le.batching===!1||!H.isBatchedMesh&&Le.batching===!0||H.isBatchedMesh&&Le.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Le.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Le.instancing===!1||!H.isInstancedMesh&&Le.instancing===!0||H.isSkinnedMesh&&Le.skinning===!1||!H.isSkinnedMesh&&Le.skinning===!0||H.isInstancedMesh&&Le.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Le.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Le.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Le.instancingMorph===!1&&H.morphTexture!==null||Le.envMap!==Re||K.fog===!0&&Le.fog!==fe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==de.numPlanes||Le.numIntersection!==de.numIntersection)||Le.vertexAlphas!==Be||Le.vertexTangents!==ke||Le.morphTargets!==Ie||Le.morphNormals!==Qe||Le.morphColors!==it||Le.toneMapping!==yt||Le.morphTargetsCount!==et)&&(rt=!0):(rt=!0,Le.__version=K.version);let vn=Le.currentProgram;rt===!0&&(vn=no(K,k,H));let dr=!1,Zt=!1,os=!1;const pt=vn.getUniforms(),on=Le.uniforms;if(ee.useProgram(vn.program)&&(dr=!0,Zt=!0,os=!0),K.id!==E&&(E=K.id,Zt=!0),dr||S!==M){ee.buffers.depth.getReversed()?(F.copy(M.projectionMatrix),y0(F),x0(F),pt.setValue(y,"projectionMatrix",F)):pt.setValue(y,"projectionMatrix",M.projectionMatrix),pt.setValue(y,"viewMatrix",M.matrixWorldInverse);const qt=pt.map.cameraPosition;qt!==void 0&&qt.setValue(y,ae.setFromMatrixPosition(M.matrixWorld)),q.logarithmicDepthBuffer&&pt.setValue(y,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&pt.setValue(y,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Zt=!0,os=!0)}if(H.isSkinnedMesh){pt.setOptional(y,H,"bindMatrix"),pt.setOptional(y,H,"bindMatrixInverse");const Ot=H.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),pt.setValue(y,"boneTexture",Ot.boneTexture,b))}H.isBatchedMesh&&(pt.setOptional(y,H,"batchingTexture"),pt.setValue(y,"batchingTexture",H._matricesTexture,b),pt.setOptional(y,H,"batchingIdTexture"),pt.setValue(y,"batchingIdTexture",H._indirectTexture,b),pt.setOptional(y,H,"batchingColorTexture"),H._colorsTexture!==null&&pt.setValue(y,"batchingColorTexture",H._colorsTexture,b));const an=X.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Ne.update(H,X,vn),(Zt||Le.receiveShadow!==H.receiveShadow)&&(Le.receiveShadow=H.receiveShadow,pt.setValue(y,"receiveShadow",H.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(on.envMap.value=Re,on.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&k.environment!==null&&(on.envMapIntensity.value=k.environmentIntensity),Zt&&(pt.setValue(y,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&lm(on,os),fe&&K.fog===!0&&ue.refreshFogUniforms(on,fe),ue.refreshMaterialUniforms(on,K,V,j,p.state.transmissionRenderTarget[M.id]),qo.upload(y,bu(Le),on,b)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(qo.upload(y,bu(Le),on,b),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&pt.setValue(y,"center",H.center),pt.setValue(y,"modelViewMatrix",H.modelViewMatrix),pt.setValue(y,"normalMatrix",H.normalMatrix),pt.setValue(y,"modelMatrix",H.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ot=K.uniformsGroups;for(let qt=0,Aa=Ot.length;qt<Aa;qt++){const Hi=Ot[qt];O.update(Hi,vn),O.bind(Hi,vn)}}return vn}function lm(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function um(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,k,X){J.get(M.texture).__webglTexture=k,J.get(M.depthTexture).__webglTexture=X;const K=J.get(M);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=X===void 0,K.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,k){const X=J.get(M);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0};const dm=y.createFramebuffer();this.setRenderTarget=function(M,k=0,X=0){N=M,P=k,C=X;let K=!0,H=null,fe=!1,Me=!1;if(M){const Re=J.get(M);if(Re.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(y.FRAMEBUFFER,null),K=!1;else if(Re.__webglFramebuffer===void 0)b.setupRenderTarget(M);else if(Re.__hasExternalTextures)b.rebindTextures(M,J.get(M.texture).__webglTexture,J.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ie=M.depthTexture;if(Re.__boundDepthTexture!==Ie){if(Ie!==null&&J.has(Ie)&&(M.width!==Ie.image.width||M.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(M)}}const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Me=!0);const ke=J.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ke[k])?H=ke[k][X]:H=ke[k],fe=!0):M.samples>0&&b.useMultisampledRTT(M)===!1?H=J.get(M).__webglMultisampledFramebuffer:Array.isArray(ke)?H=ke[X]:H=ke,D.copy(M.viewport),U.copy(M.scissor),B=M.scissorTest}else D.copy(we).multiplyScalar(V).floor(),U.copy(Pe).multiplyScalar(V).floor(),B=$e;if(X!==0&&(H=dm),ee.bindFramebuffer(y.FRAMEBUFFER,H)&&K&&ee.drawBuffers(M,H),ee.viewport(D),ee.scissor(U),ee.setScissorTest(B),fe){const Re=J.get(M.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+k,Re.__webglTexture,X)}else if(Me){const Re=J.get(M.texture),Be=k;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Re.__webglTexture,X,Be)}else if(M!==null&&X!==0){const Re=J.get(M.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Re.__webglTexture,X)}E=-1},this.readRenderTargetPixels=function(M,k,X,K,H,fe,Me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){ee.bindFramebuffer(y.FRAMEBUFFER,Ae);try{const Re=M.texture,Be=Re.format,ke=Re.type;if(!q.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-K&&X>=0&&X<=M.height-H&&y.readPixels(k,X,K,H,He.convert(Be),He.convert(ke),fe)}finally{const Re=N!==null?J.get(N).__webglFramebuffer:null;ee.bindFramebuffer(y.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(M,k,X,K,H,fe,Me){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){const Re=M.texture,Be=Re.format,ke=Re.type;if(!q.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=M.width-K&&X>=0&&X<=M.height-H){ee.bindFramebuffer(y.FRAMEBUFFER,Ae);const Ie=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Ie),y.bufferData(y.PIXEL_PACK_BUFFER,fe.byteLength,y.STREAM_READ),y.readPixels(k,X,K,H,He.convert(Be),He.convert(ke),0);const Qe=N!==null?J.get(N).__webglFramebuffer:null;ee.bindFramebuffer(y.FRAMEBUFFER,Qe);const it=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await v0(y,it,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Ie),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,fe),y.deleteBuffer(Ie),y.deleteSync(it),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,k=null,X=0){M.isTexture!==!0&&(Pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1]);const K=Math.pow(2,-X),H=Math.floor(M.image.width*K),fe=Math.floor(M.image.height*K),Me=k!==null?k.x:0,Ae=k!==null?k.y:0;b.setTexture2D(M,0),y.copyTexSubImage2D(y.TEXTURE_2D,X,0,0,Me,Ae,H,fe),ee.unbindTexture()};const fm=y.createFramebuffer(),hm=y.createFramebuffer();this.copyTextureToTexture=function(M,k,X=null,K=null,H=0,fe=null){M.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,M=arguments[1],k=arguments[2],fe=arguments[3]||0,X=null),fe===null&&(H!==0?(Pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=H,H=0):fe=0);let Me,Ae,Re,Be,ke,Ie,Qe,it,yt;const vt=M.isCompressedTexture?M.mipmaps[fe]:M.image;if(X!==null)Me=X.max.x-X.min.x,Ae=X.max.y-X.min.y,Re=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,ke=X.min.y,Ie=X.isBox3?X.min.z:0;else{const an=Math.pow(2,-H);Me=Math.floor(vt.width*an),Ae=Math.floor(vt.height*an),M.isDataArrayTexture?Re=vt.depth:M.isData3DTexture?Re=Math.floor(vt.depth*an):Re=1,Be=0,ke=0,Ie=0}K!==null?(Qe=K.x,it=K.y,yt=K.z):(Qe=0,it=0,yt=0);const et=He.convert(k.format),Le=He.convert(k.type);let Rt;k.isData3DTexture?(b.setTexture3D(k,0),Rt=y.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(b.setTexture2DArray(k,0),Rt=y.TEXTURE_2D_ARRAY):(b.setTexture2D(k,0),Rt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,k.unpackAlignment);const rt=y.getParameter(y.UNPACK_ROW_LENGTH),vn=y.getParameter(y.UNPACK_IMAGE_HEIGHT),dr=y.getParameter(y.UNPACK_SKIP_PIXELS),Zt=y.getParameter(y.UNPACK_SKIP_ROWS),os=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,vt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,vt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Be),y.pixelStorei(y.UNPACK_SKIP_ROWS,ke),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ie);const pt=M.isDataArrayTexture||M.isData3DTexture,on=k.isDataArrayTexture||k.isData3DTexture;if(M.isDepthTexture){const an=J.get(M),Ot=J.get(k),qt=J.get(an.__renderTarget),Aa=J.get(Ot.__renderTarget);ee.bindFramebuffer(y.READ_FRAMEBUFFER,qt.__webglFramebuffer),ee.bindFramebuffer(y.DRAW_FRAMEBUFFER,Aa.__webglFramebuffer);for(let Hi=0;Hi<Re;Hi++)pt&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,J.get(M).__webglTexture,H,Ie+Hi),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,J.get(k).__webglTexture,fe,yt+Hi)),y.blitFramebuffer(Be,ke,Me,Ae,Qe,it,Me,Ae,y.DEPTH_BUFFER_BIT,y.NEAREST);ee.bindFramebuffer(y.READ_FRAMEBUFFER,null),ee.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||J.has(M)){const an=J.get(M),Ot=J.get(k);ee.bindFramebuffer(y.READ_FRAMEBUFFER,fm),ee.bindFramebuffer(y.DRAW_FRAMEBUFFER,hm);for(let qt=0;qt<Re;qt++)pt?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,an.__webglTexture,H,Ie+qt):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,an.__webglTexture,H),on?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ot.__webglTexture,fe,yt+qt):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Ot.__webglTexture,fe),H!==0?y.blitFramebuffer(Be,ke,Me,Ae,Qe,it,Me,Ae,y.COLOR_BUFFER_BIT,y.NEAREST):on?y.copyTexSubImage3D(Rt,fe,Qe,it,yt+qt,Be,ke,Me,Ae):y.copyTexSubImage2D(Rt,fe,Qe,it,Be,ke,Me,Ae);ee.bindFramebuffer(y.READ_FRAMEBUFFER,null),ee.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else on?M.isDataTexture||M.isData3DTexture?y.texSubImage3D(Rt,fe,Qe,it,yt,Me,Ae,Re,et,Le,vt.data):k.isCompressedArrayTexture?y.compressedTexSubImage3D(Rt,fe,Qe,it,yt,Me,Ae,Re,et,vt.data):y.texSubImage3D(Rt,fe,Qe,it,yt,Me,Ae,Re,et,Le,vt):M.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,fe,Qe,it,Me,Ae,et,Le,vt.data):M.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,fe,Qe,it,vt.width,vt.height,et,vt.data):y.texSubImage2D(y.TEXTURE_2D,fe,Qe,it,Me,Ae,et,Le,vt);y.pixelStorei(y.UNPACK_ROW_LENGTH,rt),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,vn),y.pixelStorei(y.UNPACK_SKIP_PIXELS,dr),y.pixelStorei(y.UNPACK_SKIP_ROWS,Zt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,os),fe===0&&k.generateMipmaps&&y.generateMipmap(Rt),ee.unbindTexture()},this.copyTextureToTexture3D=function(M,k,X=null,K=null,H=0){return M.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,K=arguments[1]||null,M=arguments[2],k=arguments[3],H=arguments[4]||0),Pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,k,X,K,H)},this.initRenderTarget=function(M){J.get(M).__webglFramebuffer===void 0&&b.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?b.setTextureCube(M,0):M.isData3DTexture?b.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?b.setTexture2DArray(M,0):b.setTexture2D(M,0),ee.unbindTexture()},this.resetState=function(){P=0,C=0,N=null,ee.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}function zf(n,e){if(e===Gy)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Sl||e===Lp){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Sl)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class yT extends rs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ET(t)}),this.register(function(t){return new TT(t)}),this.register(function(t){return new UT(t)}),this.register(function(t){return new NT(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new wT(t)}),this.register(function(t){return new RT(t)}),this.register(function(t){return new CT(t)}),this.register(function(t){return new PT(t)}),this.register(function(t){return new MT(t)}),this.register(function(t){return new IT(t)}),this.register(function(t){return new AT(t)}),this.register(function(t){return new DT(t)}),this.register(function(t){return new LT(t)}),this.register(function(t){return new bT(t)}),this.register(function(t){return new OT(t)}),this.register(function(t){return new BT(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Us.extractUrlBase(e);o=Us.resolveURL(l,this.path)}else o=Us.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Zp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===rm){try{o[je.KHR_BINARY_GLTF]=new kT(e)}catch(d){r&&r(d);return}s=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new JT(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(d){case je.KHR_MATERIALS_UNLIT:o[d]=new ST;break;case je.KHR_DRACO_MESH_COMPRESSION:o[d]=new HT(s,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[d]=new zT;break;case je.KHR_MESH_QUANTIZATION:o[d]=new VT;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function xT(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class bT{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ve(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Xt);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Jp(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Sx(u),l.distance=d;break;case"spot":l=new xx(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ni(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class ST{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return rr}extendParams(e,t,i){const r=[];e.color=new Ve(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Xt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Tt))}return Promise.all(r)}}class MT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class ET{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(a,a)}return Promise.all(s)}}class TT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class AT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class wT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Xt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Tt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class RT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class CT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(a[0],a[1],a[2],Xt),Promise.all(s)}}class PT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class IT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(a[0],a[1],a[2],Xt),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Tt)),Promise.all(s)}}class LT{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class DT{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class UT{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class NT{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class FT{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class OT{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=r.byteOffset||0,l=r.byteLength||0,u=r.count,d=r.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,r.mode,r.filter).then(function(h){return h.buffer}):o.ready.then(function(){const h=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(h),u,d,f,r.mode,r.filter),h})})}else return null}}class BT{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const l of r.primitives)if(l.mode!==un.TRIANGLES&&l.mode!==un.TRIANGLE_STRIP&&l.mode!==un.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),d=u.isGroup?u.children:[u],f=l[0].count,h=[];for(const g of d){const _=new Ge,m=new z,p=new Bi,A=new z(1,1,1),T=new Z0(g.geometry,g.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&A.fromBufferAttribute(c.SCALE,x),T.setMatrixAt(x,_.compose(m,p,A));for(const x in c)if(x==="_COLOR_0"){const I=c[x];T.instanceColor=new El(I.array,I.itemSize,I.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);gt.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),h.push(T)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const rm="glTF",vs=12,Vf={JSON:1313821514,BIN:5130562};class kT{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,vs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==rm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-vs,s=new DataView(e,vs);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Vf.JSON){const l=new Uint8Array(e,vs+o,a);this.content=i.decode(l)}else if(c===Vf.BIN){const l=vs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class HT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const d=Rl[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Rl[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],h=zr[f.componentType];l[d]=h.name,c[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,f){r.decodeDracoFile(u,function(h){for(const g in h.attributes){const _=h.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}d(h)},a,l,Xt,f)})})}}class zT{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class VT{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class sm extends eo{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=r-t,d=(i-t)/u,f=d*d,h=f*d,g=e*l,_=g-l,m=-2*h+3*f,p=h-f,A=1-m,T=p-f+d;for(let x=0;x!==a;x++){const I=o[_+x+a],P=o[_+x+c]*u,C=o[g+x+a],N=o[g+x]*u;s[x]=A*I+T*P+m*C+p*N}return s}}const GT=new Bi;class WT extends sm{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return GT.fromArray(s).normalize().toArray(s),s}}const un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gf={9728:Gt,9729:rn,9984:Sp,9985:Ho,9986:xs,9987:ri},Wf={33071:Ri,33648:ea,10497:Yr},bc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},XT={CUBICSPLINE:void 0,LINEAR:Ys,STEP:qs},Sc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qT(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new du({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:li})),n.DefaultMaterial}function Zi(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ni(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function YT(n,e,t){let i=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const d=e[l];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];if(i){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(f)}if(r){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(f)}if(s){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],d=l[1],f=l[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function jT(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function KT(n){let e;const t=n.extensions&&n.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Mc(t.attributes):e=n.indices+":"+Mc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Mc(n.targets[i]);return e}function Mc(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Cl(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $T(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ZT=new Ge;class JT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);r=i&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new vx(this.options.manager):this.textureLoader=new Tx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Zi(s,a,r),ni(a,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Us.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=bc[r.type],a=zr[r.componentType],c=r.normalized===!0,l=new a(r.count*o);return Promise.resolve(new Wt(l,o,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=bc[r.type],l=zr[r.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,f=r.byteOffset||0,h=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(h&&h!==d){const p=Math.floor(f/h),A="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let T=t.cache.get(A);T||(_=new l(a,p*h,r.count*h/u),T=new q0(_,h/u),t.cache.add(A,T)),m=new au(T,c,f%h/u,g)}else a===null?_=new l(r.count*c):_=new l(a,f,r.count*c),m=new Wt(_,c,g);if(r.sparse!==void 0){const p=bc.SCALAR,A=zr[r.sparse.indices.componentType],T=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,I=new A(o[1],T,r.sparse.count*p),P=new l(o[2],x,r.sparse.count*c);a!==null&&(m=new Wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,N=I.length;C<N;C++){const E=I[C];if(m.setX(E,P[C*c]),c>=2&&m.setY(E,P[C*c+1]),c>=3&&m.setZ(E,P[C*c+2]),c>=4&&m.setW(E,P[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Gf[f.magFilter]||rn,u.minFilter=Gf[f.minFilter]||ri,u.wrapS=Wf[f.wrapS]||Yr,u.wrapT=Wf[f.wrapT]||Yr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Gt&&u.minFilter!==rn,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(d){l=!0;const f=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(f,h){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new At(_);m.needsUpdate=!0,f(m)}),t.load(Us.resolveURL(d,s.path),g,void 0,h)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),ni(d,o),d.userData.mimeType=o.mimeType||$T(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new Yp,Bn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new qp,Bn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return du}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){const d=r[je.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),l.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Ve(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Xt),a.opacity=f[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,Tt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Fn);const u=s.alphaMode||Sc.OPAQUE;if(u===Sc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Sc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==rr&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ke(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==rr&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==rr){const d=s.emissiveFactor;a.emissive=new Ve().setRGB(d[0],d[1],d[2],Xt)}return s.emissiveTexture!==void 0&&o!==rr&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Tt)),Promise.all(l).then(function(){const d=new o(a);return s.name&&(d.name=s.name),ni(d,s),t.associations.set(d,{materials:e}),s.extensions&&Zi(r,d,s),d})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Xf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=KT(l),d=r[u];if(d)o.push(d.promise);else{let f;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=Xf(new zn,l,t),r[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?qT(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let h=0,g=u.length;h<g;h++){const _=u[h],m=o[h];let p;const A=l[h];if(m.mode===un.TRIANGLES||m.mode===un.TRIANGLE_STRIP||m.mode===un.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new j0(_,A):new sn(_,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===un.TRIANGLE_STRIP?p.geometry=zf(p.geometry,Lp):m.mode===un.TRIANGLE_FAN&&(p.geometry=zf(p.geometry,Sl));else if(m.mode===un.LINES)p=new ex(_,A);else if(m.mode===un.LINE_STRIP)p=new uu(_,A);else if(m.mode===un.LINE_LOOP)p=new tx(_,A);else if(m.mode===un.POINTS)p=new nx(_,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&jT(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ni(p,s),m.extensions&&Zi(r,p,m),t.assignFinalMaterial(p),d.push(p)}for(let h=0,g=d.length;h<g;h++)t.associations.set(d[h],{meshes:e,primitives:h});if(d.length===1)return s.extensions&&Zi(r,d[0],s),d[0];const f=new sr;s.extensions&&Zi(r,f,s),t.associations.set(f,{meshes:e});for(let h=0,g=d.length;h<g;h++)f.add(d[h]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new jt(g0.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Ma(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ni(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const d=o[l];if(d){a.push(d);const f=new Ge;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new cu(a,c)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let d=0,f=r.channels.length;d<f;d++){const h=r.channels[d],g=r.samplers[h.sampler],_=h.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,A=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",A)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){const f=d[0],h=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let A=0,T=f.length;A<T;A++){const x=f[A],I=h[A],P=g[A],C=_[A],N=m[A];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const E=i._createAnimationTracks(x,I,P,C,N);if(E)for(let S=0;S<E.length;S++)p.push(E[S])}return new dx(s,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let l=0,u=a.length;l<u;l++)o.push(i.getDependency("node",a[l]));const c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const u=l[0],d=l[1],f=l[2];f!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(f,ZT)});for(let h=0,g=d.length;h<g;h++)u.add(d[h]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new Wp:l.length>1?u=new sr:l.length===1?u=l[0]:u=new gt,u!==l[0])for(let d=0,f=l.length;d<f;d++)u.add(l[d]);if(s.name&&(u.userData.name=s.name,u.name=o),ni(u,s),s.extensions&&Zi(i,u,s),s.matrix!==void 0){const d=new Ge;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new sr;i.name&&(s.name=r.createUniqueName(i.name)),ni(s,i),i.extensions&&Zi(t,s,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(r.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,d=c.length;u<d;u++)s.add(c[u]);const l=u=>{const d=new Map;for(const[f,h]of r.associations)(f instanceof Bn||f instanceof At)&&d.set(f,h);return u.traverse(f=>{const h=r.associations.get(f);h!=null&&d.set(f,h)}),d};return r.associations=l(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,c=[];bi[s.path]===bi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(bi[s.path]){case bi.weights:l=Jr;break;case bi.rotation:l=Qr;break;case bi.position:case bi.scale:l=es;break;default:switch(i.itemSize){case 1:l=Jr;break;case 2:case 3:default:l=es;break}break}const u=r.interpolation!==void 0?XT[r.interpolation]:Ys,d=this._getArrayFromAccessor(i);for(let f=0,h=c.length;f<h;f++){const g=new l(c[f]+"."+bi[s.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Cl(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Qr?WT:sm;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function QT(n,e,t){const i=e.attributes,r=new fi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new z(c[0],c[1],c[2]),new z(l[0],l[1],l[2])),a.normalized){const u=Cl(zr[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new z,c=new z;for(let l=0,u=s.length;l<u;l++){const d=s[l];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],h=f.min,g=f.max;if(h!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),f.normalized){const _=Cl(zr[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Hn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Xf(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(const o in i){const a=Rl[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Je.workingColorSpace!==Xt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),ni(n,e),QT(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?YT(n,e.targets,t):n})}const eA={setup(){const n="ontouchstart"in window||navigator.maxTouchPoints>0,e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,t=Os((window.innerWidth<=768||e)&&n),i=()=>{if(t.value=(window.innerWidth<=768||e)&&n,l){const A=window.innerWidth/window.innerHeight,T=t.value?14:11;l.left=-T*A/2,l.right=T*A/2,l.top=T/2,l.bottom=-T/2,l.updateProjectionMatrix()}},r=Os(null),s=.001,o=.2,a=.95;let c,l,u,d=[],f=null;const h=new Fx,g=3e-4,_=5e-4;pa(()=>{m(),p(),window.addEventListener("resize",i),window.addEventListener("orientationchange",i)}),ma(()=>{window.removeEventListener("resize",i),window.removeEventListener("orientationchange",i)});function m(){c=new X0;const A=window.innerWidth/window.innerHeight,T=t.value?14:11;l=new Ma(-T*A/2,T*A/2,T/2,-T/2,.1,1e3),l.position.set(0,0,11),l.lookAt(c.position);const x=t.value?.6:.8;l.zoom=x,l.updateProjectionMatrix(),u=new vT({antialias:!0,alpha:!0}),u.setSize(window.innerWidth,window.innerHeight),u.outputEncoding=Tt,u.toneMapping=xp,u.toneMappingExposure=1.2,u.domElement.style.pointerEvents="none",r.value.appendChild(u.domElement);const I=new Jp(16777215,.8);I.position.set(3,5,5),c.add(I),c.add(new Ex(16777215,.6)),t.value||(u.domElement.addEventListener("pointerdown",N),u.domElement.addEventListener("pointermove",E),u.domElement.addEventListener("pointerup",S),u.domElement.addEventListener("pointerleave",S),window.addEventListener("mousemove",C)),window.addEventListener("scroll",()=>{const U=window.scrollY,B=3e-4,Q=t.value?.4:.3,ne=x,Z=x-U*B*.5,j=Math.max(Q,Math.min(ne,Z));l.zoom=j,l.updateProjectionMatrix()}),window.addEventListener("resize",()=>{const U=window.innerWidth/window.innerHeight;l.left=-T*U/2,l.right=T*U/2,l.top=T/2,l.bottom=-T/2,l.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)}),window.addEventListener("mousemove",C),u.domElement.addEventListener("pointerdown",N),u.domElement.addEventListener("pointermove",E),u.domElement.addEventListener("pointerup",S),u.domElement.addEventListener("pointerleave",S);function P(U){let B=U;for(;B;){const Q=d.find(ne=>ne.mesh===B);if(Q)return Q;B=B.parent}return null}function C(U){if(f){u.domElement.style.pointerEvents="auto";return}const B=u.domElement.getBoundingClientRect(),Q=new Ke((U.clientX-B.left)/B.width*2-1,-((U.clientY-B.top)/B.height)*2+1);h.setFromCamera(Q,l);const ne=[];d.forEach(j=>{j.mesh.traverse(V=>{V.isMesh&&ne.push(V)})});const Z=h.intersectObjects(ne,!0);u.domElement.style.pointerEvents=Z.length>0?"auto":"none"}function N(U){const B=u.domElement.getBoundingClientRect(),Q=new Ke((U.clientX-B.left)/B.width*2-1,-((U.clientY-B.top)/B.height)*2+1);h.setFromCamera(Q,l);const ne=[];d.forEach(j=>{j.mesh.traverse(V=>{V.isMesh&&ne.push(V)})});const Z=h.intersectObjects(ne,!0);if(Z.length>0){const j=P(Z[0].object);j&&(j.isDragging=!0,f=j,j.dragStart={pointerX:U.clientX,pointerY:U.clientY,rotationX:j.mesh.rotation.x,rotationY:j.mesh.rotation.y,time:performance.now()})}}function E(U){if(f&&f.isDragging&&f.dragStart){const B=U.clientX-f.dragStart.pointerX,Q=U.clientY-f.dragStart.pointerY,ne=f.dragStart.rotationY+B*s,Z=f.dragStart.rotationX+Q*s,j=performance.now(),V=j-f.dragStart.time||16,pe=Q*s/(V/1e3)*o,ve=B*s/(V/1e3)*o;f.rotationVelocity={x:pe,y:ve},f.dragStart.pointerX=U.clientX,f.dragStart.pointerY=U.clientY,f.dragStart.rotationX=f.mesh.rotation.x,f.dragStart.rotationY=f.mesh.rotation.y,f.dragStart.time=j,f.mesh.rotation.x=Z,f.mesh.rotation.y=ne}}function S(){f&&(f.isDragging=!1,f.dragStart=null,f=null),window.dispatchEvent(new Event("mousemove"))}function D(){requestAnimationFrame(D),d.forEach(U=>{U.mesh.rotation.y+=U.autoRotationSpeed,!t.value&&!U.isDragging&&U.rotationVelocity&&(U.mesh.rotation.x+=U.rotationVelocity.x,U.mesh.rotation.y+=U.rotationVelocity.y,U.rotationVelocity.x*=a,U.rotationVelocity.y*=a)}),u.render(c,l)}D()}function p(){const A=new yT;let T,x,I;t.value?(T=[{x:-3.5,y:5,z:1.5,rotX:Math.PI/5,rotY:-Math.PI/10,rotZ:-.2},{x:-2.5,y:-6,z:0,rotX:Math.PI/10,rotY:-Math.PI/12,rotZ:-.3},{x:4,y:-1,z:.5,rotX:Math.PI/4.5,rotY:Math.PI/5,rotZ:.1}],x=["/aspan_web/assets/islandTennis.glb","/aspan_web/assets/islandFerrariF40.glb","/aspan_web/assets/islandFootball.glb"],I=.95):(T=[{x:-7.5,y:2,z:1.5,rotX:Math.PI/5,rotY:-Math.PI/10,rotZ:-.2},{x:-7.2,y:-3.5,z:.2,rotX:Math.PI/8,rotY:-Math.PI/15,rotZ:-.2},{x:7.5,y:1.8,z:.5,rotX:Math.PI/4.5,rotY:Math.PI/5,rotZ:.1},{x:7.5,y:-3.2,z:0,rotX:Math.PI/8,rotY:-Math.PI/20,rotZ:.2},{x:0,y:-4.3,z:1,rotX:Math.PI/15,rotY:0,rotZ:0}],x=["/aspan_web/assets/islandTennis.glb","/aspan_web/assets/islandHouse.glb","/aspan_web/assets/islandGarage.glb","/aspan_web/assets/islandFootball.glb","/aspan_web/assets/islandFerrariF40.glb"],I=.8),T.forEach((P,C)=>{A.load(x[C],N=>{const E=N.scene;E.position.set(P.x,P.y,P.z),E.scale.set(I,I,I),E.rotation.set(P.rotX,P.rotY,P.rotZ),c.add(E),d.push({mesh:E,isDragging:!1,rotationVelocity:{x:0,y:0},dragStart:null,autoRotationSpeed:g+Math.random()*_})},void 0,N=>console.error("Error loading model:",N))})}return{threeContainer:r}}},tA={ref:"threeContainer",class:"three-container"};function nA(n,e,t,i,r,s){return mn(),Pn("div",tA,null,512)}const om=gn(eA,[["render",nA],["__scopeId","data-v-22c389f1"]]),iA="/aspan_web/assets/problem-map.png",rA="/aspan_web/assets/aspan-screen-gallery.png",No="/aspan_web/assets/features-screen.png",sA={components:{IslandContainer:om}};function oA(n,e,t,i,r,s){const o=Fr("IslandContainer");return mn(),Pn(dn,null,[Ze(o),e[0]||(e[0]=va('<section class="blue-screen" data-v-a5f2e68b></section><section class="hero" data-v-a5f2e68b><div class="hero-content" data-v-a5f2e68b><h1 class="hero-title" data-v-a5f2e68b>Build Knowledge<br data-v-a5f2e68b>Island by Island</h1><p class="hero-subtitle" data-v-a5f2e68b>Microlearning meets creative gamification</p><button class="cta-button" data-v-a5f2e68b>Start Your Journey</button></div></section><section class="problem-section" data-v-a5f2e68b><div class="problem-container" data-v-a5f2e68b><div class="problem-statement" data-v-a5f2e68b><h2 class="classic-heading-centred" data-v-a5f2e68b>Lack of education</h2><p class="classic-description-centred" data-v-a5f2e68b> There is lack of education, genuinely. </p></div><div class="solution-statement" data-v-a5f2e68b><h2 class="classic-heading-centred" data-v-a5f2e68b>Enter ASpan</h2><p class="classic-description-centred" data-v-a5f2e68b>You ain&#39;t seen nothing yet...</p></div><div class="problem-statement-image" data-v-a5f2e68b><img src="'+iA+'" alt="Not enough schools in Kazakhstan" data-v-a5f2e68b></div><div class="solution-statement-image" data-v-a5f2e68b><img src="'+rA+'" alt="Gallery of panels of ASpan app" data-v-a5f2e68b></div></div></section><section class="widgets-section" data-v-a5f2e68b><div class="widget-container" data-v-a5f2e68b><div class="widget square" data-v-a5f2e68b></div><div class="widget square" data-v-a5f2e68b></div><div class="widget square" data-v-a5f2e68b></div><div class="widget rectangle-h" data-v-a5f2e68b></div><div class="widget rectangle-v" data-v-a5f2e68b></div><div class="widget square" data-v-a5f2e68b></div><div class="widget square" data-v-a5f2e68b></div></div></section><section class="features-section" data-v-a5f2e68b><div class="features-grid" data-v-a5f2e68b><div class="topics-image first-order" data-v-a5f2e68b><img src="'+No+'" alt="Topics" data-v-a5f2e68b></div><div class="topics-text second-order" data-v-a5f2e68b><h2 class="classic-heading" data-v-a5f2e68b>Hundreds of Topics</h2><p class="classic-description" data-v-a5f2e68b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facere incidunt, repellat dolorem nobis sapiente velit! Officiis culpa, maiores ipsa, dolore eligendi reiciendis praesentium nam ex excepturi minima vel quidem! </p></div><div class="topics-text third-order" data-v-a5f2e68b><h2 class="classic-heading" data-v-a5f2e68b>Hundreds of Topics</h2><p class="classic-description" data-v-a5f2e68b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facere incidunt, repellat dolorem nobis sapiente velit! Officiis culpa, maiores ipsa, dolore eligendi reiciendis praesentium nam ex excepturi minima vel quidem! </p></div><div class="topics-image fourth-order" data-v-a5f2e68b><img src="'+No+'" alt="Topics" data-v-a5f2e68b></div><div class="topics-image fifth-order" data-v-a5f2e68b><img src="'+No+'" alt="Topics" data-v-a5f2e68b></div><div class="topics-text sixth-order" data-v-a5f2e68b><h2 class="classic-heading" data-v-a5f2e68b>Hundreds of Topics</h2><p class="classic-description" data-v-a5f2e68b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facere incidunt, repellat dolorem nobis sapiente velit! Officiis culpa, maiores ipsa, dolore eligendi reiciendis praesentium nam ex excepturi minima vel quidem! </p></div><div class="topics-text seventh-order" data-v-a5f2e68b><h2 class="classic-heading" data-v-a5f2e68b>Hundreds of Topics</h2><p class="classic-description" data-v-a5f2e68b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis facere incidunt, repellat dolorem nobis sapiente velit! Officiis culpa, maiores ipsa, dolore eligendi reiciendis praesentium nam ex excepturi minima vel quidem! </p></div><div class="topics-image eighth-order" data-v-a5f2e68b><img src="'+No+'" alt="Topics" data-v-a5f2e68b></div></div></section>',5))],64)}const aA=gn(sA,[["render",oA],["__scopeId","data-v-a5f2e68b"]]),cA={};function lA(n,e){return mn(),Pn("h1",null,"Microlessons")}const uA=gn(cA,[["render",lA]]),dA={};function fA(n,e){return mn(),Pn("h1",null,"Islands")}const hA=gn(dA,[["render",fA]]),pA={};function mA(n,e){return mn(),Pn("h1",null,"Volunteer")}const gA=gn(pA,[["render",mA]]),_A={};function vA(n,e){return mn(),Pn("h1",null,"Hackathon")}const yA=gn(_A,[["render",vA]]),xA={};function bA(n,e){return mn(),Pn("h1",null,"About Us")}const SA=gn(xA,[["render",bA]]),MA={};function EA(n,e){return e[0]||(e[0]=va('<h1 data-v-aa944c40><strong data-v-aa944c40>ASpan Terms and Conditions of Service</strong></h1><p data-v-aa944c40><strong data-v-aa944c40>Last Updated:</strong> February 28, 2025</p><h2 data-v-aa944c40><strong data-v-aa944c40>1. Introduction &amp; Acceptance of Terms</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>1.1What ASpan Is:</strong> ASpan is a non-commercial microlearning educational platform that provides short, factual, and clear pieces of knowledge on various topics. The Service is operated by ASpan, located at Kazakhstan, Astana, Seifullin 8 street (referred to in these Terms as &quot;ASpan,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using ASpan (including any content, functionality, and services offered on or through it), <strong data-v-aa944c40>you agree to be bound by these Terms and Conditions of Service</strong> (the &quot;Terms&quot;). These Terms form a legally binding agreement between you (the user) and ASpan. If you do not agree with any part of these Terms, <strong data-v-aa944c40>do not use the Service</strong>. </p><p data-v-aa944c40><strong data-v-aa944c40>1.2Acceptance of Terms:</strong> Your use of ASpan indicates your acceptance of and compliance with these Terms. You understand that these Terms may be updated from time to time as described in Section 9 below. In addition, ASpan has a separate <strong data-v-aa944c40>Privacy Policy</strong> that describes how we collect, use, and protect your personal information. Please review the Privacy Policy as it is incorporated by reference into these Terms. Using ASpan means you also agree to the Privacy Policy. If you have any questions about these Terms, please contact us at <strong data-v-aa944c40>[Contact Information]</strong> before using the Service. </p><h2 data-v-aa944c40><strong data-v-aa944c40>2. Eligibility &amp; User Accounts</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>2.1Age Requirements:</strong> ASpan is intended for users who are <strong data-v-aa944c40>12 years of age or older</strong>. By using the Service, you represent and warrant that you meet this age requirement. If you are under the age of majority in your jurisdiction (typically under 18 years old), you must have the permission of a parent or legal guardian to use ASpan. <strong data-v-aa944c40>Users between 12 and 17 years of age</strong> should review these Terms with a parent or guardian, and by using the Service you confirm that such review has occurred and that your parent/guardian consents to your use of ASpan. If you are <strong data-v-aa944c40>under 12 years old, you are not permitted to use ASpan</strong>. We reserve the right to request proof of age or parental consent at any time to verify compliance with this section. </p><p data-v-aa944c40><strong data-v-aa944c40>2.2 Account Registration:</strong> To access certain features of ASpan, you may need to create a user account. When registering an account, you agree to provide accurate, current, and complete information about yourself. At a minimum, account registration will require you to choose a username and provide a valid email address and a secure password. This information, along with a record of your last activity date on the platform, will be stored in our database (operated via AppWrite). You agree to keep your information up-to-date and to not misrepresent your identity. <strong data-v-aa944c40>Accounts are for personal use only</strong> – you may not create an account on behalf of someone else without proper authorization, and you may not sell, transfer, or license your account to any other person. </p><p data-v-aa944c40><strong data-v-aa944c40>2.3 Account Security:</strong> You are responsible for maintaining the confidentiality of your login credentials and for restricting access to your account. <strong data-v-aa944c40>You assume full responsibility for all activities that occur under your account</strong> (whether or not authorized by you). If you believe your account has been compromised or accessed without authorization, you must notify ASpan immediately. We are not liable for any loss or damage arising from your failure to safeguard your account information. ASpan reserves the right to disable or terminate any account that it suspects is involved in unauthorized activity or in violation of these Terms. </p><h2 data-v-aa944c40><strong data-v-aa944c40>3. Description of Services</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>3.1 Educational Content:</strong> ASpan provides a collection of microlearning content designed to help users quickly learn facts and key points about a wide range of topics (for example, science, history, technology, and more). Each learning module or snippet on ASpan is intentionally brief, focusing on clear and factual information that is easy to digest. The content on ASpan is generated with the assistance of advanced AI (specifically, a GPT-based language model) and is then reviewed and fact-checked by our team for accuracy and clarity. We strive to ensure that the information presented is reliable and up-to-date. Along with the textual content, ASpan includes references or links to factual sources (such as articles, textbooks, or reputable websites) so that users can verify information and explore the topic further if they wish. <strong data-v-aa944c40>These source links are provided for transparency and educational value</strong>, and by clicking them you will be navigating to third-party sites (see Section 6 regarding third-party links and our liability). </p><p data-v-aa944c40><strong data-v-aa944c40>3.2 Visual Aids:</strong> To enhance the learning experience, ASpan supplements text-based content with visual elements, including images and graphics. Some of these visuals are generated by artificial intelligence tools and others are created by human designers. Notably, ASpan collaborates with <strong data-v-aa944c40>Krea AI</strong> for certain AI-generated imagery under a formal agreement, which ensures ASpan has the rights to use and display those visuals. All visuals are selected or produced to be relevant to the educational content and to aid in understanding the material. While the visuals are illustrative and intended to reinforce learning, they are not meant to be exact representations in every context (for example, an AI-generated historical scene is for concept illustration only). </p><p data-v-aa944c40><strong data-v-aa944c40>3.3 Non-Commercial Service:</strong> ASpan is a non-commercial platform, meaning that we do not charge users for access to the educational content and we are not primarily driven by profit motives. The Service is provided for your personal, non-commercial use to support learning. We may introduce new features, content, or functional improvements over time to better serve our users. Any new features or tools which are added to ASpan will also be subject to these Terms. We reserve the right to modify or discontinue (temporarily or permanently) the Service or any part of it with or without notice, though we will endeavor to inform users of significant changes in advance when possible. </p><h2 data-v-aa944c40><strong data-v-aa944c40>4. User Conduct &amp; Restrictions</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>4.1</strong> When using ASpan, you agree to conduct yourself in a responsible, respectful manner. <strong data-v-aa944c40>You must use the Service in compliance with all applicable laws and regulations</strong>. By using ASpan, you further agree that you will <strong data-v-aa944c40>not</strong> engage in any of the following prohibited activities: </p><ul data-v-aa944c40><li data-v-aa944c40><strong data-v-aa944c40>Misrepresentation and Content Modification:</strong> ASpan is committed to maintaining the integrity and accuracy of its educational content. Users must not misrepresent ASpan’s materials by modifying, distorting, or falsifying lesson content (e.g., through screenshots, editing, or other manipulations) to present misleading or false information. Any attempt to alter ASpan’s educational materials in a way that misleads others or portrays the platform in a false or harmful manner is strictly prohibited </li></ul><ul data-v-aa944c40><li data-v-aa944c40><strong data-v-aa944c40>Disruption of Service:</strong> Do not disrupt or interfere with the normal operation of ASpan. This means you must not attempt to interfere with the servers, networks, or infrastructure of the Service (for example, by transmitting worms, viruses, malware, or any code of a destructive nature). You agree not to initiate any attacks, overload, or flood the platform, and not to take any action that imposes an unreasonable or disproportionately large load on our infrastructure.<br data-v-aa944c40></li><li data-v-aa944c40><strong data-v-aa944c40>Unauthorized Access:</strong> Do not attempt to gain unauthorized access to any portion or feature of ASpan, including other users’ accounts, or any system or network connected to the Service. This includes refraining from hacking, password “mining,” or any other illegitimate means of accessing data not intended for you. If you are not explicitly authorized to access an area of the Service, you must not try to do so.<br data-v-aa944c40></li><li data-v-aa944c40><strong data-v-aa944c40>No Data Scraping or Mining:</strong> You are expressly prohibited from using any automated means (such as scripts, bots, spiders, or crawlers) to access, query, or collect information or content from ASpan without our prior written permission. This includes <strong data-v-aa944c40>no web scraping, data mining, or harvesting of content or users’ information</strong>. You also agree not to use the Service or its content in order to develop, train, or improve any data-generating or AI model (for example, using ASpan content to train another AI) without our explicit consent.<br data-v-aa944c40></li><li data-v-aa944c40><strong data-v-aa944c40>No Reverse Engineering:</strong> You must not copy, decompile, reverse engineer, disassemble, or attempt to derive the source code or underlying ideas or algorithms of any part of ASpan (except as permitted by applicable law). This prohibition extends to any software or technology used in providing the Service. Tampering with or attempting to probe, scan, or test the vulnerability of any ASpan system or network without authorization is strictly forbidden.<br data-v-aa944c40></li><li data-v-aa944c40><strong data-v-aa944c40>Unauthorized Use of Content:</strong> ASpan’s content is provided for your personal learning. You agree not to reproduce, duplicate, copy, sell, trade, resell, or exploit any portion of the Service or content obtained through the Service for any commercial purpose. You may not remove any copyright, trademark, or other proprietary notices displayed on the content. (See Section 5 on Intellectual Property for more details on content usage rights.)<br data-v-aa944c40></li><li data-v-aa944c40><strong data-v-aa944c40>Respect for Others:</strong> IDo not collect or store personal data about other users without their consent. Any form of cheating, plagiarism, or academic dishonesty using the platform’s content is also prohibited – use ASpan to learn and educate yourself, not to deceive others about your knowledge.<br data-v-aa944c40></li></ul><p data-v-aa944c40><strong data-v-aa944c40>4.2</strong> Violating any of the above rules <strong data-v-aa944c40>may result in immediate suspension or termination of your access to ASpan</strong> (see Section 8 on Termination) and may also expose you to civil or criminal liability. ASpan reserves the right to investigate any misuse of the Service and to cooperate with law enforcement in prosecuting users who violate the law. We also reserve the right (but assume no obligation) to monitor your use of the Service for compliance with these Terms. </p><h2 data-v-aa944c40><strong data-v-aa944c40>5. Intellectual Property &amp; Licensing</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>5.1 ASpan Content Ownership:</strong> All content available on ASpan – including but not limited to text, articles, explanations, images, graphics, illustrations, designs, and the overall compilation and arrangement of such content – is the <strong data-v-aa944c40>intellectual property of ASpan</strong> or its licensors and is protected by copyright, trademark, and other intellectual property laws. This means ASpan (or our content providers) retains all rights, title, and interest in the content and the Service. The <strong data-v-aa944c40>microlearning texts</strong> and educational materials on ASpan are original works generated and curated by us (with the assistance of AI and human fact-checkers), and the <strong data-v-aa944c40>visual elements</strong> (images, graphics) are created or obtained by us, including those produced in collaboration with <strong data-v-aa944c40>Krea AI</strong> under a formal agreement. Our agreement with Krea AI grants ASpan the rights to use and display the AI-generated visuals as part of our content. All such materials are collectively referred to as &quot;ASpan Content.&quot; </p><p data-v-aa944c40><strong data-v-aa944c40>5.2 Trademarks:</strong> The name <strong data-v-aa944c40>&quot;ASpan&quot;</strong>, our logos, and any other ASpan product or service names or slogans that appear on the Service are trademarks or service marks of [Company Legal Name] (unless otherwise noted). You are not granted any right or license to use any of ASpan’s trademarks by these Terms. Any unauthorized use of our trademarks is strictly prohibited. Other trademarks, logos, or service marks appearing in the Service (for example, names of third-party source sites or tools like &quot;Krea AI&quot;) are the property of their respective owners. </p><p data-v-aa944c40><strong data-v-aa944c40>5.3 Limited License to Users:</strong> Subject to your compliance with these Terms, ASpan grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Service <strong data-v-aa944c40>for your personal, non-commercial educational purposes only</strong>. This license allows you to view and use the ASpan Content through our platform interface. <strong data-v-aa944c40>However, this license does not permit you to</strong> do any of the following without our prior written consent: </p><ul data-v-aa944c40><li data-v-aa944c40> Download, copy, or save ASpan Content to a personal repository (except as necessary for caching in your web browser or unless explicitly enabled by a download feature on the Service). </li><li data-v-aa944c40> Reproduce or <strong data-v-aa944c40>redistribute</strong> ASpan Content on any other website, app, publication, or platform. </li><li data-v-aa944c40> Modify, translate, or create derivative works based on ASpan Content (for example, you may not take our text or images and alter them to publish elsewhere). </li><li data-v-aa944c40><strong data-v-aa944c40>Publish or commercialize</strong> any ASpan Content, i.e., you cannot sell, rent, or license our educational materials to others. </li><li data-v-aa944c40> Remove or obscure any copyright or other proprietary notices contained in ASpan or in ASpan Content. </li><li data-v-aa944c40> Use ASpan Content in a manner that suggests any association with or endorsement by ASpan or [Company Name] without our approval. </li></ul><p data-v-aa944c40><strong data-v-aa944c40>5.4</strong> Any use of the Service or content outside the scope of the permitted use as set forth in these Terms <strong data-v-aa944c40>is strictly prohibited</strong> and will terminate the license granted herein. If you wish to use ASpan Content beyond what is allowed by these Terms (for example, if a teacher or organization wants to distribute materials in a classroom setting or include our content in a presentation), please <strong data-v-aa944c40>contact us for permission</strong>. We may be open to certain educational uses, but you must obtain written permission from us and comply with any licensing terms we provide. </p><p data-v-aa944c40><strong data-v-aa944c40>5.5 User-Submitted Content:</strong> (Note: ASpan is primarily a one-way content platform, and we do not currently allow users to post their own content publicly. If in the future ASpan offers features like user comments, contributions, or content sharing, additional terms will govern those submissions. For now, this section is to clarify intellectual property in ASpan’s content itself.) </p><p data-v-aa944c40><strong data-v-aa944c40>5.6 Reservation of Rights:</strong> All rights not expressly granted to you in these Terms are reserved by ASpan and its content providers. This means that except for the limited license above, you have no additional rights or ownership in the content or Service. ASpan may at any time revoke the permission to use content if you violate these Terms. Misuse of ASpan’s intellectual property may result in legal action, in addition to account termination. </p><h2 data-v-aa944c40><strong data-v-aa944c40>6. Disclaimers &amp; Limitations of Liability</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>6.1 &quot;As Is&quot; Service Disclaimer:</strong> ASpan is provided to you on an <strong data-v-aa944c40>&quot;as is&quot; and &quot;as available&quot;</strong> basis. While we are passionate about providing high-quality, accurate educational content, <strong data-v-aa944c40>ASpan makes no warranty or guarantee</strong> that the Service will meet your requirements or expectations. <strong data-v-aa944c40>To the fullest extent permitted by law</strong>, ASpan disclaims all warranties of any kind, whether express, implied, or statutory, regarding the Service and the content. This includes, but is not limited to, any implied warranties of <strong data-v-aa944c40>accuracy, completeness, reliability, merchantability, fitness for a particular purpose, title, non-infringement</strong>, or any warranty that the Service will be uninterrupted, error-free, secure, or free of harmful components (like viruses). We do not warrant that any errors or defects in the content will be corrected, although we strive to fix mistakes when identified. The educational information provided on ASpan is <strong data-v-aa944c40>for general knowledge purposes only</strong> and should not be relied upon as professional advice. For example, nothing on ASpan is intended to constitute medical, legal, financial, or other professional advice specific to your situation. Always consult a qualified professional for advice in those areas. </p><p data-v-aa944c40><strong data-v-aa944c40>6.2 Content Accuracy:</strong> ASpan’s team works hard to fact-check and verify the information presented. However, we <strong data-v-aa944c40>do not guarantee</strong> that all content is 100% accurate, up-to-date, or error-free. Sources may have inaccuracies or become outdated, and AI-generated content can occasionally contain mistakes despite our reviews. <strong data-v-aa944c40>Use your judgment</strong> and cross-reference critical information with the provided sources or other trusted resources. By using ASpan, you understand and agree that any reliance you place on the content is <strong data-v-aa944c40>at your own risk</strong>. If you spot an error or have a concern about any content, we welcome your feedback so we can improve the Service. </p><p data-v-aa944c40><strong data-v-aa944c40>6.3 Third-Party Links &amp; Sources:</strong> ASpan content often includes links or references to third-party websites and sources (for example, a link to a Wikipedia article, scientific journal, or news site for further reading or verification). These links are provided for your convenience and to enhance your learning. However, <strong data-v-aa944c40>ASpan has no control over the content or practices of those third-party sites</strong>. We do not endorse, guarantee, or assume responsibility for the information, services, or products that third-party websites may offer. Once you click a third-party link and leave ASpan, <strong data-v-aa944c40>these Terms no longer govern</strong>; any browsing or interaction on other websites is subject to that website’s own terms and policies. ASpan will not be liable for any loss or damage that may arise from your use of, or reliance on, content from third-party sources. We encourage you to review the terms and privacy policies of any third-party sites you visit. </p><p data-v-aa944c40><strong data-v-aa944c40>6.4 Limitation of Liability:</strong><strong data-v-aa944c40>To the maximum extent permitted by applicable law</strong>, in no event shall ASpan, or any of our affiliates, officers, employees, agents, partners, or licensors be liable for any <strong data-v-aa944c40>indirect, incidental, special, consequential, or punitive damages</strong> whatsoever. This includes, without limitation, damages for lost profits, lost data, loss of goodwill, business interruption, or other intangible losses arising out of or in connection with (a) your access to, use of, or inability to use the Service; (b) any conduct or content of any third party on the Service or any linked website; or (c) any content obtained from the Service, <strong data-v-aa944c40>even if</strong> ASpan has been advised of the possibility of such damages. </p><p data-v-aa944c40><strong data-v-aa944c40>6.5 </strong>In addition, ASpan’s total cumulative liability for <strong data-v-aa944c40>any claims arising out of or related to the Service</strong> or these Terms will be <strong data-v-aa944c40>limited to the greater of the amount (if any) you paid us to use the Service in the past six months or USD $50</strong>. (Since ASpan is non-commercial and typically free to use, this means our liability to you is minimal or zero.) This limitation applies to any claim, whether based on warranty, contract, statute, tort (including negligence) or any other legal theory, and whether or not ASpan has been informed of the possibility of such damage. </p><p data-v-aa944c40><strong data-v-aa944c40>6.6 Exceptions:</strong> Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. <strong data-v-aa944c40>If you reside in such a jurisdiction</strong>, some of the above limitations may not apply to you to the extent disallowed by applicable law. In such cases, ASpan’s liability will be limited to the <strong data-v-aa944c40>maximum extent permitted by law</strong>. Nothing in these Terms is intended to exclude or restrict any liability that cannot be excluded by law (for example, certain statutory warranties or liabilities under applicable consumer protection laws). </p><p data-v-aa944c40><strong data-v-aa944c40>6.7 Indemnification:</strong> You agree to indemnify and hold harmless ASpan,, its officers, employees, and agents from any claims, losses, liabilities, and expenses (including reasonable attorneys’ fees) that arise out of or relate to your misuse of the Service, violation of these Terms, or violation of any law or rights of a third party. We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, in which case you agree to cooperate with us in asserting any available defenses. </p><h2 data-v-aa944c40><strong data-v-aa944c40>7. Data Collection &amp; Privacy</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>7.1 </strong>Your privacy is important to us. ASpan limits the personal data it collects and uses it in accordance with our<a href="[https://chatgpt.com/c/67c1e7c1-7b34-8006-bdf0-4ee92fd50fce#](https://chatgpt.com/c/67c1e7c1-7b34-8006-bdf0-4ee92fd50fce#)" data-v-aa944c40> Privacy Policy</a> (see that document for full details). <strong data-v-aa944c40>By using ASpan, you agree to the collection and use of data as described here and in the Privacy Policy.</strong> Below is a summary of what data we collect and how we handle it: </p><ul data-v-aa944c40><li data-v-aa944c40><strong data-v-aa944c40>Personal Information Collected:</strong> When you create an account on ASpan, we collect certain information from you. This includes a username (which may or may not be your real name), your email address, and a password. We also log the date of your last activity on the platform (e.g., the last time you logged in or used the Service). This information is stored securely in our backend database (powered by AppWrite). We do <em data-v-aa944c40>not</em> require more sensitive personal details like physical address or phone number for basic use of the Service. ASpan is designed to gather minimal personal data necessary for account management and providing the Service.<br data-v-aa944c40></li><li data-v-aa944c40><strong data-v-aa944c40>Use of Collected Data:</strong> The information we collect is used for the following general purposes: to create and manage your user account (for instance, your email and password are used for login authentication and account recovery); to communicate with you (we might send service-related announcements or respond to support inquiries to your email); to personalize your experience (for example, remembering your progress or preferences); and to improve ASpan (using aggregated usage data to understand how the platform is used). We do <strong data-v-aa944c40>not</strong> sell your personal information to third parties. We may share data with service providers or partners who assist us in operating ASpan (such as our database host, email service, analytics provider, etc.), but only under strict obligations that they protect your data and only use it for the purposes we specify.<br data-v-aa944c40></li><li data-v-aa944c40><strong data-v-aa944c40>Data Security:</strong> We take reasonable measures to protect the information you provide to ASpan from unauthorized access or disclosure. Passwords are stored in an encrypted form (hashed) and we use security best practices to safeguard the database. However, no website or Internet transmission is completely secure, so we cannot guarantee absolute security. You also play a role in security by keeping your login credentials confidential (see Section 2 on Account Security).<br data-v-aa944c40></li><li data-v-aa944c40><strong data-v-aa944c40>Privacy Policy:</strong> For full information on how we handle user data—including details on cookies and analytics (if any), data retention practices, and your rights regarding your personal information—please review our Privacy Policy. The Privacy Policy is a separate document that is considered part of these Terms. If there is any conflict between these Terms and the Privacy Policy regarding personal data, the terms of the Privacy Policy will prevail for privacy matters. By accepting these Terms, you also agree to the terms of the Privacy Policy.<br data-v-aa944c40></li><li data-v-aa944c40><strong data-v-aa944c40>Parental Consent for Minors:</strong> If you are a parent or guardian of a user under 18 (especially for users 12-13 where parental consent may be legally required), by allowing your child to use ASpan, you consent to ASpan’s collection and use of the child’s information as described above and in the Privacy Policy. We do not knowingly collect personal data from children under 12, and if we become aware of an account registered by someone under 12 without verifiable parental consent, we will take steps to delete that account and information.<br data-v-aa944c40></li></ul><p data-v-aa944c40><strong data-v-aa944c40>7.2</strong> If you have questions about our data practices or wish to exercise any rights you may have regarding your personal data (for example, requesting deletion of your account data), please refer to the Privacy Policy for contact details and procedures. </p><h2 data-v-aa944c40><strong data-v-aa944c40>8. Termination of Service</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>8.1 By ASpan:</strong> ASpan reserves the right to <strong data-v-aa944c40>suspend or terminate your access to the Service at any time</strong>, for any reason, and without prior notice. This may include termination or suspension of individual accounts or of the Service as a whole. Some examples of situations where we might terminate or suspend access include: if you violate these Terms (or any other policies or guidelines related to ASpan), if we detect behavior that is unlawful or that poses a security risk, if required by law enforcement or other government agencies, or if we discontinue the Service. ASpan shall not be liable to you or any third party for any termination of your account or access to the Service. If your account is terminated due to a violation of these Terms, you may be barred from creating a new account or accessing ASpan in the future. </p><p data-v-aa944c40><strong data-v-aa944c40>8.2 By You:</strong> You have the right to stop using ASpan at any time. If you wish to terminate your account, you may do so by using any account deletion feature provided in the Service (if available) or by contacting us directly with a request to delete your account. Termination of your account will typically involve deactivating your profile and removing your personal data from active use. Please note that some residual data (such as logs or backups) may remain in our systems for a short period after termination, but will be purged according to our data retention policies as outlined in the Privacy Policy. </p><p data-v-aa944c40><strong data-v-aa944c40>8.3 Effect of Termination:</strong> Upon any termination of your access, whether initiated by you or by ASpan, <strong data-v-aa944c40>your right to use the Service will immediately cease</strong>. You must cease all use of ASpan content and delete any downloaded or saved content obtained from the Service (if any) in your possession. ASpan may, in its sole discretion, remove or discard any content or data associated with your account. Sections of these Terms that by their nature should survive termination (such as Intellectual Property rights, Disclaimers, Limitation of Liability, Governing Law, and Dispute Resolution) will continue to apply even after your access to the Service has been terminated. </p><h2 data-v-aa944c40><strong data-v-aa944c40>9. Amendments to Terms</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>9.1 Right to Update:</strong> ASpan may revise or update these Terms from time to time. We may do this to reflect changes in our Service, accommodate new technologies or features, comply with legal requirements, or for other valid reasons. Whenever we update the Terms, we will change the &quot;Last Updated&quot; date at the top of this document. In the case of <strong data-v-aa944c40>material changes</strong> (significant alterations to your rights or obligations under the Terms), we will make reasonable efforts to notify you in advance. Notification may occur through the Service (for example, via a prominent notice on our website or app) or via other communication methods (for example, sending an email to the address associated with your account). </p><p data-v-aa944c40><strong data-v-aa944c40>9.2 Your Responsibilities:</strong> It is your responsibility to review these Terms periodically for any changes. We encourage you to check the Terms whenever you receive notice of an update or whenever you use the Service, to stay informed about the rules that apply to you. <strong data-v-aa944c40>Continued use of ASpan after an updated version of the Terms has been posted</strong> (and after any required notice period for material changes) constitutes your acceptance of those changes. If you do not agree with any amendment to the Terms, you should discontinue use of the Service and, if necessary, terminate your account. </p><p data-v-aa944c40><strong data-v-aa944c40>9.3 Interim Changes:</strong> In some cases, ASpan might introduce new features or offers that come with their own supplemental terms. If any supplemental terms apply, we will present those to you at the relevant time (for example, when you opt to use that feature), and those terms will become part of your agreement with us if you use the feature. In the event of a conflict between these Terms and any supplemental terms, the supplemental terms will govern with respect to the specific feature or situation to which they apply. </p><h2 data-v-aa944c40><strong data-v-aa944c40>10. Governing Law &amp; Dispute Resolution</strong></h2><p data-v-aa944c40><strong data-v-aa944c40>10.1 Governing Law:</strong> These Terms and your use of ASpan are governed by and construed in accordance with the laws of <strong data-v-aa944c40>[Country/State/Region]</strong>, <strong data-v-aa944c40>without regard to its conflict of law principles</strong>. This means that the law of the specified jurisdiction will apply to any issues or disputes relating to these Terms or the Service, even if you reside in a different jurisdiction. However, we recognize that you may have mandatory consumer rights under the laws of your own country. <strong data-v-aa944c40>Nothing in this section is intended to limit your rights as a consumer under the laws of your local jurisdiction</strong> when those laws apply mandatorily. In any case, the United Nations Convention on Contracts for the International Sale of Goods (CISG) does not apply to these Terms. </p><p data-v-aa944c40><strong data-v-aa944c40>10.2 Initial Dispute Resolution:</strong><strong data-v-aa944c40>If you have a dispute or concern</strong> regarding ASpan or these Terms, we encourage you to contact us first and attempt to resolve the issue informally. Many concerns can be resolved quickly through our support team without formal proceedings. You can reach out to us at <strong data-v-aa944c40>[Contact Email/Address]</strong> with a brief written description of your issue and your contact information. We will attempt in good faith to resolve the dispute through discussions with you. </p><p data-v-aa944c40><strong data-v-aa944c40>10.3 Formal Dispute Resolution:</strong> In the event that we are unable to resolve a dispute informally, the following provisions will apply: </p><ul data-v-aa944c40><li data-v-aa944c40><strong data-v-aa944c40>Jurisdiction and Venue:</strong> Subject to any applicable laws that mandate otherwise, you agree that any legal suit, action, or proceeding arising out of or related to these Terms or the use of the Service shall be brought exclusively in the courts of <strong data-v-aa944c40>[Jurisdiction]</strong>. You consent to the jurisdiction of and venue in such courts and waive any objection that such courts are an inconvenient forum. (If ASpan chooses to include an arbitration clause or a different dispute resolution mechanism in the future, this section will be updated accordingly. As of now, disputes will be handled in court unless otherwise agreed by both parties.) </li><li data-v-aa944c40><strong data-v-aa944c40>Time Limit to File Claims:</strong> To the extent permitted by law, any claim or cause of action arising out of or related to your use of ASpan or these Terms must be filed within <strong data-v-aa944c40>one (1) year</strong> after such claim or cause of action arose. If a claim is not filed within this time frame, it shall be permanently barred, which means you will not have the right to pursue it. </li></ul><p data-v-aa944c40><strong data-v-aa944c40>10.4 Severability:</strong> If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision shall be enforced to the maximum extent permissible, and the remaining provisions of these Terms will remain in full force and effect. The invalid or unenforceable provision will be deemed modified in a manner that is valid and enforceable and most closely matches the original intent of the provision. </p><p data-v-aa944c40><strong data-v-aa944c40>10.5 No Waiver:</strong> Our failure to enforce any right or provision of these Terms will not be considered a waiver of that right or provision. Any waiver of any provision of these Terms will be effective only if in writing and signed by an authorized representative of ASpan. <strong data-v-aa944c40>No waiver</strong> of any term hereof shall be deemed a further or continuing waiver of such term or any other term. </p><p data-v-aa944c40><strong data-v-aa944c40>10.6 Entire Agreement:</strong> These Terms (along with the Privacy Policy and any other legal notices or guidelines posted on the Service) constitute the <strong data-v-aa944c40>entire agreement</strong> between you and ASpan regarding your use of the Service. It supersedes any prior agreements, understandings, or communications (whether oral or written) between you and us concerning the same subject matter. You acknowledge that you have not relied on any representation, warranty, or statement not expressly set out in these Terms. </p><p data-v-aa944c40><strong data-v-aa944c40>10.7 Assignment:</strong> You may not assign or transfer your rights or obligations under these Terms to anyone else without our prior written consent. ASpan may assign or transfer its rights and obligations under these Terms freely to an affiliate or in connection with a merger, acquisition, or sale of assets, or by operation of law or otherwise. </p><p data-v-aa944c40><strong data-v-aa944c40>10.8 Headings:</strong> The section titles and headings in these Terms are for convenience only and have no legal or contractual effect. </p><p data-v-aa944c40><strong data-v-aa944c40>10.9 Contact Information:</strong> If you have any questions, concerns, or feedback regarding these Terms or the Service itself, you can contact ASpan at <strong data-v-aa944c40>[Contact Email]</strong> or by mail at <strong data-v-aa944c40>[Company Address]</strong>. We value our users and will do our best to address your inquiry promptly. </p><hr data-v-aa944c40><p data-v-aa944c40> By using ASpan, you acknowledge that you have read, understood, and agree to these Terms and Conditions of Service. Thank you for being a part of ASpan’s learning community and for upholding these standards. Happy learning! </p>',59))}const TA=gn(MA,[["render",EA],["__scopeId","data-v-aa944c40"]]),AA={};function wA(n,e){return e[0]||(e[0]=va("<h1 data-v-ab71d0db><strong data-v-ab71d0db>Privacy Policy for ASpan</strong></h1><p data-v-ab71d0db><strong data-v-ab71d0db>Effective Date:</strong> 03.02.2025</p><p data-v-ab71d0db><strong data-v-ab71d0db>Last Updated:</strong> 03.02.2025</p><p data-v-ab71d0db><strong data-v-ab71d0db>Welcome to ASpan.</strong> ASpan is a non-profit educational platform (available as a mobile app and via a promotional website) dedicated to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use ASpan (“the platform,” “we,” “us,” or “our”). We are committed to complying with applicable privacy laws and regulations, including those designed to protect children under 16 (such as the EU General Data Protection Regulation’s provisions for children (GDPR-K) and the U.S. Children’s Online Privacy Protection Act (COPPA)). By using ASpan, you agree to the practices described in this Privacy Policy. </p><p data-v-ab71d0db><strong data-v-ab71d0db>Note for Minors:</strong> If you are under 16 years old, please review this Policy with a parent or guardian. ASpan does not knowingly collect personal information from children under 13 without parental consent, and by using ASpan you confirm that you are at least 16 years old or have your parent/guardian’s permission to use the platform and provide your personal data. </p><h2 data-v-ab71d0db><strong data-v-ab71d0db>1. Information We Collect</strong></h2><p data-v-ab71d0db> We <strong data-v-ab71d0db>collect only the minimum personal data necessary</strong> to create and manage your ASpan account and improve your learning experience. This includes: </p><ul data-v-ab71d0db><li data-v-ab71d0db><strong data-v-ab71d0db>Username:</strong> A display name or nickname you provide when creating an account. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Email Address:</strong> Used for account verification, login, and essential communications (e.g. password resets or important service updates). </li><li data-v-ab71d0db><strong data-v-ab71d0db>Password:</strong> A password you choose to secure your account. <em data-v-ab71d0db>For your safety, passwords are stored in a secure, hashed form and <strong data-v-ab71d0db>not</strong> in plain text.</em></li><li data-v-ab71d0db><strong data-v-ab71d0db>Last Activity Date:</strong> A timestamp or date of your last activity or login on the platform. This is collected automatically to help us understand platform usage and manage inactive accounts. </li></ul><p data-v-ab71d0db> All personal data is stored securely in our <strong data-v-ab71d0db>AppWrite database</strong>, which is a cloud-based data storage service. We do <strong data-v-ab71d0db>not</strong> collect any sensitive personal information such as physical addresses, phone numbers, payment details, or government IDs. We also do not collect any unnecessary data from your device – for example, we <strong data-v-ab71d0db>do not track</strong> your precise location, contacts, or device identifiers beyond what is needed for the basic functioning of the service. </p><h2 data-v-ab71d0db><strong data-v-ab71d0db>2. How We Use Your Information</strong></h2><p data-v-ab71d0db> We use the collected information <strong data-v-ab71d0db>solely to provide and improve the ASpan educational service.</strong> Specifically, your information is used to: </p><ul data-v-ab71d0db><li data-v-ab71d0db><strong data-v-ab71d0db>Create and Manage Your Account:</strong> We use your username, email, and password to set up your account, authenticate your login, and allow you to use the app’s features (such as saving progress or preferences). </li><li data-v-ab71d0db><strong data-v-ab71d0db>Provide the Educational Services:</strong> Your data allows us to deliver personalized content (if applicable) and keep track of your activity (using the last activity date) so that you can continue where you left off and we can ensure the platform is functioning properly for you. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Communicate with You:</strong> We may send you <strong data-v-ab71d0db>essential communications</strong> related to the service. For example, we might send a verification email when you register, an email to reset your password if you request it, or to inform you of important updates like changes to this Privacy Policy. We will <strong data-v-ab71d0db>not</strong> send you marketing or promotional emails, and there are <strong data-v-ab71d0db>no advertisements</strong> within the app. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Improve and Maintain Our Platform:</strong> Aggregated data such as usage statistics (e.g., how many users are active, using the last activity date) may be used to help us understand user engagement and improve ASpan’s features or performance. This data is <strong data-v-ab71d0db>not</strong> personally identifying beyond the purposes above, and it is used internally by our team to make the app better for users. </li></ul><p data-v-ab71d0db><strong data-v-ab71d0db>Non-Profit, No Monetization:</strong> ASpan is strictly a non-profit initiative. There are <strong data-v-ab71d0db>no in-app purchases, no subscription fees, and no ads</strong> on our platform. This means <strong data-v-ab71d0db>we do not monetize your personal information</strong> in any way. We do not use your data for advertising, nor do we profile you for marketing purposes. All usage of your data is solely to serve you as an educational tool. </p><h2 data-v-ab71d0db><strong data-v-ab71d0db>3. Disclosure of Information to Third Parties</strong></h2><p data-v-ab71d0db> Your privacy is extremely important to us. We treat your personal data as confidential and <strong data-v-ab71d0db>do not share, sell, or rent your personal information to any third parties</strong> for their own marketing or other purposes. In other words, <strong data-v-ab71d0db>no one outside of ASpan’s operation will receive your personal data</strong> for independent use. </p><p data-v-ab71d0db>The only circumstances under which we might disclose user data are:</p><ul data-v-ab71d0db><li data-v-ab71d0db><strong data-v-ab71d0db>Service Providers (Processors):</strong> ASpan uses certain trusted service providers to operate the platform – most notably, our AppWrite cloud database service where your data is stored. In such cases, the service provider is <strong data-v-ab71d0db>acting under our direction and on our behalf</strong>. They are <strong data-v-ab71d0db>not allowed to use your information for any other purpose</strong> except to store or process it for us, and they are bound by strict confidentiality and data protection obligations. Aside from these infrastructure providers, we currently do not use any analytics services, advertising networks, or other third-party tools that would require access to your personal data. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Legal Requirements:</strong> We may disclose information if required to do so by law or in response to a valid legal request (e.g., a court order, subpoena, or government demand) or to protect the rights, property, or safety of ASpan, our users, or the public. For instance, if we are obliged to cooperate with law enforcement or regulatory authorities, we will only provide the minimum necessary information and only when legally compelled. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Business Transfer:</strong> Since ASpan is non-profit and not a commercial enterprise, a sale or merger is unlikely. However, if there were ever a situation where ASpan’s ownership or structure changes (for example, if it is transferred to a non-profit educational organization or combined with another project), user data might be transferred to the new owner/organization. If that happens, we will ensure the same level of privacy protection is maintained and inform users of any changes. </li></ul><p data-v-ab71d0db> Aside from the above scenarios, <strong data-v-ab71d0db>no other sharing of data occurs.</strong> Specifically, we do not share user information with advertisers, data brokers, or unrelated third parties. Your data stays within the ASpan ecosystem, used only by those who need it to operate and improve the service in line with this Policy. </p><h2 data-v-ab71d0db><strong data-v-ab71d0db>4. Data Storage and International Transfers</strong></h2><p data-v-ab71d0db> All personal data collected through ASpan is stored in our <strong data-v-ab71d0db>AppWrite database</strong>, which is a secure cloud-based datastore. Because cloud services can involve servers located in various countries, your data <strong data-v-ab71d0db>may be stored and processed on servers outside of your home country</strong>. In fact, <strong data-v-ab71d0db>data storage and processing may occur internationally</strong>, including (potentially) in countries that have different data protection laws than your country of residence. </p><p data-v-ab71d0db> We understand that international data transfers require careful handling under privacy laws like the GDPR. <strong data-v-ab71d0db>No matter where your data is processed, we will protect it under the terms of this Privacy Policy and applicable law.</strong> If you are located in the European Economic Area (EEA) or another region with data transfer restrictions, we take appropriate safeguards to ensure that your personal information remains protected according to EU standards. These safeguards may include measures such as <strong data-v-ab71d0db>standard contractual clauses</strong> or ensuring our service providers (like AppWrite) are certified under frameworks that ensure adequate data protection. By using ASpan, you acknowledge that your information may be transferred to facilities located in other countries, and you <strong data-v-ab71d0db>consent to such international transfer</strong> for the purposes of storage and processing as described here. </p><p data-v-ab71d0db> We retain your personal data on our servers <strong data-v-ab71d0db>only for as long as necessary</strong> to fulfill the purposes outlined in this Policy. In practice, this means we will keep your data while your ASpan account is active. If you choose to delete your account (or request us to delete your data), or if your account becomes inactive for an extended period, we will remove or anonymize your personal information from our active databases, subject to our backup procedures and legal obligations (see Section 7 on <strong data-v-ab71d0db>Your Rights</strong> and Section 8 on <strong data-v-ab71d0db>Data Security</strong> for more on deletion). </p><h2 data-v-ab71d0db><strong data-v-ab71d0db>5. Data Security Measures</strong></h2><p data-v-ab71d0db><strong data-v-ab71d0db>Protecting your data is our priority.</strong> We implement industry-standard security measures to safeguard your personal information against unauthorized access, alteration, disclosure, or destruction. Some of the key security practices and technologies we use include: </p><ul data-v-ab71d0db><li data-v-ab71d0db><strong data-v-ab71d0db>Encryption:</strong> All communication between your app/browser and our servers is encrypted using HTTPS/TLS protocols. This means that data (such as your login credentials) is protected in transit and cannot be easily intercepted. Additionally, where possible, we utilize encryption at rest for stored data in the AppWrite database. For example, sensitive fields like passwords are stored using strong one-way cryptographic hashing so that they cannot be read or recovered in plain text. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Access Controls:</strong> We restrict access to personal data strictly to authorized personnel who need it to operate or maintain the service. The AppWrite platform provides robust authentication and permission systems, ensuring that each user can only access their own data and that our administrators can only access what is necessary for maintenance tasks. We use role-based access controls so that no one can access user data unless it is required for their job function. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Secure Infrastructure:</strong> Our AppWrite database and servers are protected by firewalls and regular security monitoring. We apply security patches and updates to our software and infrastructure promptly to mitigate risks. AppWrite itself is built with security in mind, employing measures such as rate limiting (to prevent brute-force attacks) and audit logging of significant events. </li><li data-v-ab71d0db><strong data-v-ab71d0db>No Third-Party Exposure:</strong> Because we do not integrate external analytics or advertising services, your data isn’t being transmitted to third-party networks during normal use of the app. This reduces potential vectors for data leaks. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Employee and Contractor Obligations:</strong> (If applicable) Any team members or volunteers who help operate ASpan are trained on the importance of privacy and are contractually bound to protect user data. They must follow strict guidelines and are subject to disciplinary measures if they fail to meet our data protection standards. </li></ul><p data-v-ab71d0db> While we strive to use commercially acceptable means to protect your personal information, <strong data-v-ab71d0db>no method of transmission over the internet or method of electronic storage is 100% secure</strong>. Therefore, we cannot guarantee absolute security. However, we continuously review and enhance our security practices to keep your data as safe as possible. If there is ever any indication of a data breach that affects your personal information, we will notify you and the appropriate authorities as required by law. </p><h2 data-v-ab71d0db><strong data-v-ab71d0db>6. Your Rights and Choices</strong></h2><p data-v-ab71d0db> We believe you should have control over your personal data. Subject to applicable laws, you have the following <strong data-v-ab71d0db>rights regarding your information</strong> on ASpan: </p><ul data-v-ab71d0db><li data-v-ab71d0db><strong data-v-ab71d0db>Access Your Data:</strong> You have the right to request a copy of the personal data we hold about you. We can provide you with a summary of your username, email, and any other associated information (such as last activity date) upon request. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Rectification (Correcting Your Data):</strong> If any personal information we have is incorrect or outdated (for example, if you need to update your email address), you have the right to correct it. You can update certain information through your account profile (if such an option is available) or by contacting us to request changes. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Deletion (Right to be Forgotten):</strong> You have the right to request deletion of your personal data. This can be done by deleting your account through the app (if that feature exists) or by contacting us directly with a deletion request. Once we verify your identity and ownership of the account, we will delete or anonymize your personal data from our systems. Please note that we might retain certain minimal information if necessary for legal compliance or internal security (for example, we may keep a record that an email belonged to a deleted account to prevent fraud or re-use of the account inappropriately), but we will inform you if any such retention is required. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Data Portability:</strong> For users in some jurisdictions (such as the EU under GDPR), you may have the right to request your personal data in a common portable format. Upon request, we can provide your basic account data in a machine-readable format. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Restriction or Objection to Processing:</strong> In certain circumstances, you may have the right to object to or ask us to limit (restrict) the processing of your data. For example, if you believe the data is inaccurate or our processing is unlawful, you can request limited use until the issue is resolved. Since ASpan only processes your data to provide our non-profit service, if you object to us processing necessary data (like your email or password), it may require that you discontinue use of the service. We will inform you of any implications if you seek to exercise this right. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Withdraw Consent:</strong> In the unusual case where we rely on your consent to process any personal data (for instance, if we ever ask for permission for a new feature), you have the right to withdraw that consent at any time. Withdrawal of consent will not affect the legality of any processing we carried out prior to your withdrawal. (Note: Currently, ASpan does not base its data processing on consent but rather on the need to provide the service, except for your acceptance of this Privacy Policy and Terms of Use by using the platform.) </li></ul><p data-v-ab71d0db><strong data-v-ab71d0db>How to Exercise Your Rights:</strong> You can exercise these rights at any time by contacting us (see the <strong data-v-ab71d0db>Contact Us</strong> section at the end of this Policy). For certain requests like data access, we may need to verify your identity to ensure we’re providing information to the correct person. We will respond to your request within a reasonable timeframe and in accordance with applicable law (typically within 30 days for most requests). There is no cost for exercising your rights, though if a request is manifestly unfounded or excessive (for example, repetitive requests), we may charge a reasonable fee or refuse to act on it as permitted by law. </p><p data-v-ab71d0db> Please note, if you delete your data or object to necessary processing, <strong data-v-ab71d0db>your ability to use ASpan may be impacted</strong>. We’ll always explain the consequences of honoring your request (for example, that deleting your account will remove access to your saved progress). </p><p data-v-ab71d0db> Finally, if you have concerns about how we handle your data, you also have the right to lodge a complaint with a data protection authority or regulatory body in your country. We encourage you to contact us first so we can address your concerns directly. </p><h2 data-v-ab71d0db><strong data-v-ab71d0db>7. Children’s Privacy (Users Under 16)</strong></h2><p data-v-ab71d0db> Protecting the privacy of young users is especially important to us. ASpan is intended for a general audience of learners and is <strong data-v-ab71d0db>not directed primarily at children under the age of 13</strong>. We recognize the need to provide further privacy protections for minors under 16 years old, in line with GDPR-K and COPPA. </p><ul data-v-ab71d0db><li data-v-ab71d0db><strong data-v-ab71d0db>No Sign-Ups Under 13:</strong> We do <strong data-v-ab71d0db>not knowingly collect or solicit personal information from children under 13 years of age</strong>. If you are under 13, please do not register an account or send any personal information to us. If we discover that we have collected personal data from a child under 13 without verifiable parental consent, we will delete that information as quickly as possible. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Parental Guidance for Ages 13–16:</strong> If you are between 13 and 16 years old, you should only use ASpan with the involvement and consent of a parent or legal guardian. While we currently do <strong data-v-ab71d0db>not have a formal process to obtain parental consent</strong> during registration, by using our platform we presume that you have obtained permission from your parent or guardian to use ASpan and that they have reviewed and agreed to this Privacy Policy. We encourage parents/guardians of minors using ASpan to supervise their child’s use of the platform and educate them about safe online practices. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Parental Rights:</strong> If you are a parent or guardian and you believe we have collected personal information from your child under 16 without appropriate consent, please contact us immediately. We will work with you to review, update, or delete the child’s information as required. Parents (especially of children under 13) have the right under COPPA to request the removal of their child’s personal data from our records. We will gladly honor such requests and confirm once the data has been deleted. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Educational Context:</strong> If ASpan is ever used in a school or educational setting involving students under 16, we expect that the school or educator has obtained any necessary parental consents or is acting as the agent for the parent (consistent with COPPA’s “school official exception”). Regardless, our policy remains not to share or use students’ personal data for any commercial purposes. </li></ul><p data-v-ab71d0db> By using ASpan, users under 16 acknowledge that they understand the importance of privacy and have either reached the age of 16 or have the consent and guidance of a parent/guardian. We are committed to complying with all applicable laws regarding children’s privacy and will update our practices as needed to remain in compliance. </p><h2 data-v-ab71d0db><strong data-v-ab71d0db>8. Changes to This Privacy Policy</strong></h2><p data-v-ab71d0db> We may update or modify this Privacy Policy from time to time to reflect changes in our practices, ensure ongoing compliance with relevant laws, or for other operational, legal, or regulatory reasons. When we make changes, we will do the following: </p><ul data-v-ab71d0db><li data-v-ab71d0db><strong data-v-ab71d0db>Notification of Changes:</strong> We will post the updated Privacy Policy on our website (and within the app, if applicable) with a new <strong data-v-ab71d0db>“Last Updated”</strong> date. If changes are significant, we will provide a more prominent notice or <strong data-v-ab71d0db>notify you directly</strong> (for example, by email to the address associated with your account or by an in-app message). </li><li data-v-ab71d0db><strong data-v-ab71d0db>Consent to Changes:</strong> If you continue to use ASpan after a Privacy Policy update takes effect, you will be deemed to have accepted the revised policy. However, if any change requires separate consent by law (for example, if in the future we were to collect additional data or use it for new purposes that require consent), we will obtain that consent from you. </li><li data-v-ab71d0db><strong data-v-ab71d0db>Review and Stay Informed:</strong> We encourage you to periodically review this Privacy Policy to stay informed about how we are protecting your information. The latest version of the Privacy Policy will always be available on our website. Past versions can be requested if you wish to see how the policy has evolved. </li></ul><p data-v-ab71d0db> If you do not agree with any updates to the Privacy Policy, you should stop using ASpan and may request that your data be deleted (see <strong data-v-ab71d0db>Your Rights</strong> above). We will not enforce material changes to this Privacy Policy retroactively without your express consent. </p><h2 data-v-ab71d0db><strong data-v-ab71d0db>9. Contact Information</strong></h2><p data-v-ab71d0db> We welcome any questions, concerns, or feedback you may have about your privacy or this Policy. If you need to contact us for any reason – whether it’s to exercise your rights, report a potential issue, or simply ask a question about how your information is handled – please reach out to us: </p><ul data-v-ab71d0db><li data-v-ab71d0db><strong data-v-ab71d0db>Email:</strong> [Privacy Contact Email Placeholder]</li><li data-v-ab71d0db><strong data-v-ab71d0db>Mailing Address:</strong> [Legal Address Placeholder]</li></ul><p data-v-ab71d0db><em data-v-ab71d0db>(We are in the process of establishing our official contact channels. Please use the above placeholder contact information for now – these will be updated once our official contact email and legal address are finalized.)</em></p><p data-v-ab71d0db><strong data-v-ab71d0db>Data Controller:</strong> For the purposes of data protection laws, the “controller” of your personal information is the ASpan team/organization. [If applicable, include the official entity name once available.] </p><p data-v-ab71d0db> We will do our best to respond promptly to your inquiries. Your privacy is important to us, and we take all complaints or questions seriously. If you contact us about a privacy issue, we may ask for verification of identity before sharing any information, in order to protect against unauthorized access to data. </p><p data-v-ab71d0db> Thank you for reading our Privacy Policy. By using ASpan, you place your trust in us, and we are committed to honoring that trust by keeping your personal information safe and using it responsibly. We hope you enjoy learning with ASpan, and we pledge to continue safeguarding your privacy every step of the way. </p>",47))}const RA=gn(AA,[["render",wA],["__scopeId","data-v-ab71d0db"]]),CA=[{path:"/",component:aA,children:[{path:"",component:om}]},{path:"/microlessons",component:uA},{path:"/islands",component:hA},{path:"/volunteer",component:gA},{path:"/hackathon",component:yA},{path:"/about-us",component:SA},{path:"/terms-of-use",component:TA},{path:"/privacy-policy",component:RA}],PA=Xv({history:xv("/aspan_web"),routes:CA}),am=H_(dy);am.use(PA);am.mount("#app");
