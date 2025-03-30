(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Nl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const pt={},Us=[],Bn=()=>{},ym=()=>!1,la=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Fl=n=>n.startsWith("onUpdate:"),It=Object.assign,Ol=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Em=Object.prototype.hasOwnProperty,at=(n,e)=>Em.call(n,e),Oe=Array.isArray,Ns=n=>ua(n)==="[object Map]",Zf=n=>ua(n)==="[object Set]",Ge=n=>typeof n=="function",Et=n=>typeof n=="string",Oi=n=>typeof n=="symbol",mt=n=>n!==null&&typeof n=="object",Jf=n=>(mt(n)||Ge(n))&&Ge(n.then)&&Ge(n.catch),Qf=Object.prototype.toString,ua=n=>Qf.call(n),Tm=n=>ua(n).slice(8,-1),eh=n=>ua(n)==="[object Object]",Bl=n=>Et(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ar=Nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),da=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},bm=/-(\w)/g,vn=da(n=>n.replace(bm,(e,t)=>t?t.toUpperCase():"")),Am=/\B([A-Z])/g,fs=da(n=>n.replace(Am,"-$1").toLowerCase()),fa=da(n=>n.charAt(0).toUpperCase()+n.slice(1)),La=da(n=>n?`on${fa(n)}`:""),Li=(n,e)=>!Object.is(n,e),Ia=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},th=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},wm=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Rm=n=>{const e=Et(n)?Number(n):NaN;return isNaN(e)?n:e};let Ru;const ha=()=>Ru||(Ru=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hl(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Et(i)?Im(i):Hl(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Et(n)||mt(n))return n}const Cm=/;(?![^(]*\))/g,Pm=/:([^]+)/,Lm=/\/\*[^]*?\*\//g;function Im(n){const e={};return n.replace(Lm,"").split(Cm).forEach(t=>{if(t){const i=t.split(Pm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Br(n){let e="";if(Et(n))e=n;else if(Oe(n))for(let t=0;t<n.length;t++){const i=Br(n[t]);i&&(e+=i+" ")}else if(mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Dm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Um=Nl(Dm);function nh(n){return!!n||n===""}const ih=n=>!!(n&&n.__v_isRef===!0),pn=n=>Et(n)?n:n==null?"":Oe(n)||mt(n)&&(n.toString===Qf||!Ge(n.toString))?ih(n)?pn(n.value):JSON.stringify(n,sh,2):String(n),sh=(n,e)=>ih(e)?sh(n,e.value):Ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Da(i,r)+" =>"]=s,t),{})}:Zf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Da(t))}:Oi(e)?Da(e):mt(e)&&!Oe(e)&&!eh(e)?String(e):e,Da=(n,e="")=>{var t;return Oi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rn;class Nm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=rn,!e&&rn&&(this.index=(rn.scopes||(rn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=rn;try{return rn=this,e()}finally{rn=t}}}on(){rn=this}off(){rn=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Fm(){return rn}let ht;const Ua=new WeakSet;class rh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rn&&rn.active&&rn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ua.has(this)&&(Ua.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ah(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cu(this),ch(this);const e=ht,t=Cn;ht=this,Cn=!0;try{return this.fn()}finally{lh(this),ht=e,Cn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vl(e);this.deps=this.depsTail=void 0,Cu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ua.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rc(this)&&this.run()}get dirty(){return Rc(this)}}let oh=0,wr,Rr;function ah(n,e=!1){if(n.flags|=8,e){n.next=Rr,Rr=n;return}n.next=wr,wr=n}function kl(){oh++}function zl(){if(--oh>0)return;if(Rr){let e=Rr;for(Rr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;wr;){let e=wr;for(wr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function ch(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function lh(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Vl(i),Om(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Rc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(uh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function uh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Hr))return;n.globalVersion=Hr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Rc(n)){n.flags&=-3;return}const t=ht,i=Cn;ht=n,Cn=!0;try{ch(n);const s=n.fn(n._value);(e.version===0||Li(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ht=t,Cn=i,lh(n),n.flags&=-3}}function Vl(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Vl(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Om(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Cn=!0;const dh=[];function Bi(){dh.push(Cn),Cn=!1}function Hi(){const n=dh.pop();Cn=n===void 0?!0:n}function Cu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ht;ht=void 0;try{e()}finally{ht=t}}}let Hr=0;class Bm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ht||!Cn||ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ht)t=this.activeLink=new Bm(ht,this),ht.deps?(t.prevDep=ht.depsTail,ht.depsTail.nextDep=t,ht.depsTail=t):ht.deps=ht.depsTail=t,fh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ht.depsTail,t.nextDep=void 0,ht.depsTail.nextDep=t,ht.depsTail=t,ht.deps===t&&(ht.deps=i)}return t}trigger(e){this.version++,Hr++,this.notify(e)}notify(e){kl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{zl()}}}function fh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)fh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Cc=new WeakMap,cs=Symbol(""),Pc=Symbol(""),kr=Symbol("");function Bt(n,e,t){if(Cn&&ht){let i=Cc.get(n);i||Cc.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Gl),s.map=i,s.key=t),s.track()}}function si(n,e,t,i,s,r){const o=Cc.get(n);if(!o){Hr++;return}const a=c=>{c&&c.trigger()};if(kl(),e==="clear")o.forEach(a);else{const c=Oe(n),l=c&&Bl(t);if(c&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===kr||!Oi(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),l&&a(o.get(kr)),e){case"add":c?l&&a(o.get("length")):(a(o.get(cs)),Ns(n)&&a(o.get(Pc)));break;case"delete":c||(a(o.get(cs)),Ns(n)&&a(o.get(Pc)));break;case"set":Ns(n)&&a(o.get(cs));break}}zl()}function ps(n){const e=nt(n);return e===n?e:(Bt(e,"iterate",kr),_n(n)?e:e.map(Ht))}function pa(n){return Bt(n=nt(n),"iterate",kr),n}const Hm={__proto__:null,[Symbol.iterator](){return Na(this,Symbol.iterator,Ht)},concat(...n){return ps(this).concat(...n.map(e=>Oe(e)?ps(e):e))},entries(){return Na(this,"entries",n=>(n[1]=Ht(n[1]),n))},every(n,e){return qn(this,"every",n,e,void 0,arguments)},filter(n,e){return qn(this,"filter",n,e,t=>t.map(Ht),arguments)},find(n,e){return qn(this,"find",n,e,Ht,arguments)},findIndex(n,e){return qn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return qn(this,"findLast",n,e,Ht,arguments)},findLastIndex(n,e){return qn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return qn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Fa(this,"includes",n)},indexOf(...n){return Fa(this,"indexOf",n)},join(n){return ps(this).join(n)},lastIndexOf(...n){return Fa(this,"lastIndexOf",n)},map(n,e){return qn(this,"map",n,e,void 0,arguments)},pop(){return ur(this,"pop")},push(...n){return ur(this,"push",n)},reduce(n,...e){return Pu(this,"reduce",n,e)},reduceRight(n,...e){return Pu(this,"reduceRight",n,e)},shift(){return ur(this,"shift")},some(n,e){return qn(this,"some",n,e,void 0,arguments)},splice(...n){return ur(this,"splice",n)},toReversed(){return ps(this).toReversed()},toSorted(n){return ps(this).toSorted(n)},toSpliced(...n){return ps(this).toSpliced(...n)},unshift(...n){return ur(this,"unshift",n)},values(){return Na(this,"values",Ht)}};function Na(n,e,t){const i=pa(n),s=i[e]();return i!==n&&!_n(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const km=Array.prototype;function qn(n,e,t,i,s,r){const o=pa(n),a=o!==n&&!_n(n),c=o[e];if(c!==km[e]){const d=c.apply(n,r);return a?Ht(d):d}let l=t;o!==n&&(a?l=function(d,f){return t.call(this,Ht(d),f,n)}:t.length>2&&(l=function(d,f){return t.call(this,d,f,n)}));const u=c.call(o,l,i);return a&&s?s(u):u}function Pu(n,e,t,i){const s=pa(n);let r=t;return s!==n&&(_n(n)?t.length>3&&(r=function(o,a,c){return t.call(this,o,a,c,n)}):r=function(o,a,c){return t.call(this,o,Ht(a),c,n)}),s[e](r,...i)}function Fa(n,e,t){const i=nt(n);Bt(i,"iterate",kr);const s=i[e](...t);return(s===-1||s===!1)&&ql(t[0])?(t[0]=nt(t[0]),i[e](...t)):s}function ur(n,e,t=[]){Bi(),kl();const i=nt(n)[e].apply(n,t);return zl(),Hi(),i}const zm=Nl("__proto__,__v_isRef,__isVue"),hh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Oi));function Vm(n){Oi(n)||(n=String(n));const e=nt(this);return Bt(e,"has",n),e.hasOwnProperty(n)}class ph{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Jm:vh:r?_h:gh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Oe(e);if(!s){let c;if(o&&(c=Hm[t]))return c;if(t==="hasOwnProperty")return Vm}const a=Reflect.get(e,t,zt(e)?e:i);return(Oi(t)?hh.has(t):zm(t))||(s||Bt(e,"get",t),r)?a:zt(a)?o&&Bl(t)?a:a.value:mt(a)?s?Sh(a):ma(a):a}}class mh extends ph{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const c=ls(r);if(!_n(i)&&!ls(i)&&(r=nt(r),i=nt(i)),!Oe(e)&&zt(r)&&!zt(i))return c?!1:(r.value=i,!0)}const o=Oe(e)&&Bl(t)?Number(t)<e.length:at(e,t),a=Reflect.set(e,t,i,zt(e)?e:s);return e===nt(s)&&(o?Li(i,r)&&si(e,"set",t,i):si(e,"add",t,i)),a}deleteProperty(e,t){const i=at(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&si(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Oi(t)||!hh.has(t))&&Bt(e,"has",t),i}ownKeys(e){return Bt(e,"iterate",Oe(e)?"length":cs),Reflect.ownKeys(e)}}class Gm extends ph{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Wm=new mh,Xm=new Gm,qm=new mh(!0);const Lc=n=>n,ao=n=>Reflect.getPrototypeOf(n);function Ym(n,e,t){return function(...i){const s=this.__v_raw,r=nt(s),o=Ns(r),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=s[n](...i),u=t?Lc:e?Ic:Ht;return!e&&Bt(r,"iterate",c?Pc:cs),{next(){const{value:d,done:f}=l.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function co(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function jm(n,e){const t={get(s){const r=this.__v_raw,o=nt(r),a=nt(s);n||(Li(s,a)&&Bt(o,"get",s),Bt(o,"get",a));const{has:c}=ao(o),l=e?Lc:n?Ic:Ht;if(c.call(o,s))return l(r.get(s));if(c.call(o,a))return l(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Bt(nt(s),"iterate",cs),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=nt(r),a=nt(s);return n||(Li(s,a)&&Bt(o,"has",s),Bt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,c=nt(a),l=e?Lc:n?Ic:Ht;return!n&&Bt(c,"iterate",cs),a.forEach((u,d)=>s.call(r,l(u),l(d),o))}};return It(t,n?{add:co("add"),set:co("set"),delete:co("delete"),clear:co("clear")}:{add(s){!e&&!_n(s)&&!ls(s)&&(s=nt(s));const r=nt(this);return ao(r).has.call(r,s)||(r.add(s),si(r,"add",s,s)),this},set(s,r){!e&&!_n(r)&&!ls(r)&&(r=nt(r));const o=nt(this),{has:a,get:c}=ao(o);let l=a.call(o,s);l||(s=nt(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,r),l?Li(r,u)&&si(o,"set",s,r):si(o,"add",s,r),this},delete(s){const r=nt(this),{has:o,get:a}=ao(r);let c=o.call(r,s);c||(s=nt(s),c=o.call(r,s)),a&&a.call(r,s);const l=r.delete(s);return c&&si(r,"delete",s,void 0),l},clear(){const s=nt(this),r=s.size!==0,o=s.clear();return r&&si(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Ym(s,n,e)}),t}function Wl(n,e){const t=jm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(at(t,s)&&s in i?t:i,s,r)}const $m={get:Wl(!1,!1)},Km={get:Wl(!1,!0)},Zm={get:Wl(!0,!1)};const gh=new WeakMap,_h=new WeakMap,vh=new WeakMap,Jm=new WeakMap;function Qm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function eg(n){return n.__v_skip||!Object.isExtensible(n)?0:Qm(Tm(n))}function ma(n){return ls(n)?n:Xl(n,!1,Wm,$m,gh)}function xh(n){return Xl(n,!1,qm,Km,_h)}function Sh(n){return Xl(n,!0,Xm,Zm,vh)}function Xl(n,e,t,i,s){if(!mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=eg(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Fs(n){return ls(n)?Fs(n.__v_raw):!!(n&&n.__v_isReactive)}function ls(n){return!!(n&&n.__v_isReadonly)}function _n(n){return!!(n&&n.__v_isShallow)}function ql(n){return n?!!n.__v_raw:!1}function nt(n){const e=n&&n.__v_raw;return e?nt(e):n}function yr(n){return!at(n,"__v_skip")&&Object.isExtensible(n)&&th(n,"__v_skip",!0),n}const Ht=n=>mt(n)?ma(n):n,Ic=n=>mt(n)?Sh(n):n;function zt(n){return n?n.__v_isRef===!0:!1}function zr(n){return Mh(n,!1)}function tg(n){return Mh(n,!0)}function Mh(n,e){return zt(n)?n:new ng(n,e)}class ng{constructor(e,t){this.dep=new Gl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:nt(e),this._value=t?e:Ht(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||_n(e)||ls(e);e=i?e:nt(e),Li(e,t)&&(this._rawValue=e,this._value=i?e:Ht(e),this.dep.trigger())}}function Os(n){return zt(n)?n.value:n}const ig={get:(n,e,t)=>e==="__v_raw"?n:Os(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return zt(s)&&!zt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function yh(n){return Fs(n)?n:new Proxy(n,ig)}class sg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Gl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return ah(this,!0),!0}get value(){const e=this.dep.track();return uh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rg(n,e,t=!1){let i,s;return Ge(n)?i=n:(i=n.get,s=n.set),new sg(i,s,t)}const lo={},Ko=new WeakMap;let es;function og(n,e=!1,t=es){if(t){let i=Ko.get(t);i||Ko.set(t,i=[]),i.push(n)}}function ag(n,e,t=pt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:c}=t,l=S=>s?S:_n(S)||s===!1||s===0?wi(S,1):wi(S);let u,d,f,h,g=!1,_=!1;if(zt(n)?(d=()=>n.value,g=_n(n)):Fs(n)?(d=()=>l(n),g=!0):Oe(n)?(_=!0,g=n.some(S=>Fs(S)||_n(S)),d=()=>n.map(S=>{if(zt(S))return S.value;if(Fs(S))return l(S);if(Ge(S))return c?c(S,2):S()})):Ge(n)?e?d=c?()=>c(n,2):n:d=()=>{if(f){Bi();try{f()}finally{Hi()}}const S=es;es=u;try{return c?c(n,3,[h]):n(h)}finally{es=S}}:d=Bn,e&&s){const S=d,L=s===!0?1/0:s;d=()=>wi(S(),L)}const m=Fm(),p=()=>{u.stop(),m&&m.active&&Ol(m.effects,u)};if(r&&e){const S=e;e=(...L)=>{S(...L),p()}}let A=_?new Array(n.length).fill(lo):lo;const b=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const L=u.run();if(s||g||(_?L.some((P,C)=>Li(P,A[C])):Li(L,A))){f&&f();const P=es;es=u;try{const C=[L,A===lo?void 0:_&&A[0]===lo?[]:A,h];c?c(e,3,C):e(...C),A=L}finally{es=P}}}else u.run()};return a&&a(b),u=new rh(d),u.scheduler=o?()=>o(b,!1):b,h=S=>og(S,!1,u),f=u.onStop=()=>{const S=Ko.get(u);if(S){if(c)c(S,4);else for(const L of S)L();Ko.delete(u)}},e?i?b(!0):A=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function wi(n,e=1/0,t){if(e<=0||!mt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,zt(n))wi(n.value,e,t);else if(Oe(n))for(let i=0;i<n.length;i++)wi(n[i],e,t);else if(Zf(n)||Ns(n))n.forEach(i=>{wi(i,e,t)});else if(eh(n)){for(const i in n)wi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&wi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qr(n,e,t,i){try{return i?n(...i):n()}catch(s){ga(s,e,t)}}function Ln(n,e,t,i){if(Ge(n)){const s=Qr(n,e,t,i);return s&&Jf(s)&&s.catch(r=>{ga(r,e,t)}),s}if(Oe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Ln(n[r],e,t,i));return s}}function ga(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||pt;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,c,l)===!1)return}a=a.parent}if(r){Bi(),Qr(r,null,10,[n,c,l]),Hi();return}}cg(n,t,s,i,o)}function cg(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const qt=[];let Un=-1;const Bs=[];let Ei=null,Ps=0;const Eh=Promise.resolve();let Zo=null;function Th(n){const e=Zo||Eh;return n?e.then(this?n.bind(this):n):e}function lg(n){let e=Un+1,t=qt.length;for(;e<t;){const i=e+t>>>1,s=qt[i],r=Vr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Yl(n){if(!(n.flags&1)){const e=Vr(n),t=qt[qt.length-1];!t||!(n.flags&2)&&e>=Vr(t)?qt.push(n):qt.splice(lg(e),0,n),n.flags|=1,bh()}}function bh(){Zo||(Zo=Eh.then(wh))}function ug(n){Oe(n)?Bs.push(...n):Ei&&n.id===-1?Ei.splice(Ps+1,0,n):n.flags&1||(Bs.push(n),n.flags|=1),bh()}function Lu(n,e,t=Un+1){for(;t<qt.length;t++){const i=qt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;qt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ah(n){if(Bs.length){const e=[...new Set(Bs)].sort((t,i)=>Vr(t)-Vr(i));if(Bs.length=0,Ei){Ei.push(...e);return}for(Ei=e,Ps=0;Ps<Ei.length;Ps++){const t=Ei[Ps];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ei=null,Ps=0}}const Vr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function wh(n){try{for(Un=0;Un<qt.length;Un++){const e=qt[Un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Un<qt.length;Un++){const e=qt[Un];e&&(e.flags&=-2)}Un=-1,qt.length=0,Ah(),Zo=null,(qt.length||Bs.length)&&wh()}}let mn=null,Rh=null;function Jo(n){const e=mn;return mn=n,Rh=n&&n.type.__scopeId||null,e}function yt(n,e=mn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Vu(-1);const r=Jo(e);let o;try{o=n(...s)}finally{Jo(r),i._d&&Vu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Gi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Bi(),Ln(c,t,8,[n.el,a,n,e]),Hi())}}const dg=Symbol("_vte"),Ch=n=>n.__isTeleport,Ti=Symbol("_leaveCb"),uo=Symbol("_enterCb");function fg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xa(()=>{n.isMounted=!0}),Bh(()=>{n.isUnmounting=!0}),n}const dn=[Function,Array],Ph={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dn,onEnter:dn,onAfterEnter:dn,onEnterCancelled:dn,onBeforeLeave:dn,onLeave:dn,onAfterLeave:dn,onLeaveCancelled:dn,onBeforeAppear:dn,onAppear:dn,onAfterAppear:dn,onAppearCancelled:dn},Lh=n=>{const e=n.subTree;return e.component?Lh(e.component):e},hg={name:"BaseTransition",props:Ph,setup(n,{slots:e}){const t=u_(),i=fg();return()=>{const s=e.default&&Uh(e.default(),!0);if(!s||!s.length)return;const r=Ih(s),o=nt(n),{mode:a}=o;if(i.isLeaving)return Oa(r);const c=Iu(r);if(!c)return Oa(r);let l=Dc(c,o,i,t,d=>l=d);c.type!==Jt&&Gr(c,l);let u=t.subTree&&Iu(t.subTree);if(u&&u.type!==Jt&&!is(c,u)&&Lh(t).type!==Jt){let d=Dc(u,o,i,t);if(Gr(u,d),a==="out-in"&&c.type!==Jt)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},Oa(r);a==="in-out"&&c.type!==Jt?d.delayLeave=(f,h,g)=>{const _=Dh(i,u);_[String(u.key)]=u,f[Ti]=()=>{h(),f[Ti]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{g(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Ih(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Jt){e=t;break}}return e}const pg=hg;function Dh(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Dc(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:A,onAppearCancelled:b}=e,S=String(n.key),L=Dh(t,n),P=(T,y)=>{T&&Ln(T,i,9,y)},C=(T,y)=>{const D=y[1];P(T,y),Oe(T)?T.every(U=>U.length<=1)&&D():T.length<=1&&D()},N={mode:o,persisted:a,beforeEnter(T){let y=c;if(!t.isMounted)if(r)y=m||c;else return;T[Ti]&&T[Ti](!0);const D=L[S];D&&is(n,D)&&D.el[Ti]&&D.el[Ti](),P(y,[T])},enter(T){let y=l,D=u,U=d;if(!t.isMounted)if(r)y=p||l,D=A||u,U=b||d;else return;let B=!1;const Q=T[uo]=ne=>{B||(B=!0,ne?P(U,[T]):P(D,[T]),N.delayedLeave&&N.delayedLeave(),T[uo]=void 0)};y?C(y,[T,Q]):Q()},leave(T,y){const D=String(n.key);if(T[uo]&&T[uo](!0),t.isUnmounting)return y();P(f,[T]);let U=!1;const B=T[Ti]=Q=>{U||(U=!0,y(),Q?P(_,[T]):P(g,[T]),T[Ti]=void 0,L[D]===n&&delete L[D])};L[D]=n,h?C(h,[T,B]):B()},clone(T){const y=Dc(T,e,t,i,s);return s&&s(y),y}};return N}function Oa(n){if(_a(n))return n=Ui(n),n.children=null,n}function Iu(n){if(!_a(n))return Ch(n.type)&&n.children?Ih(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ge(t.default))return t.default()}}function Gr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Gr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Uh(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===kt?(o.patchFlag&128&&s++,i=i.concat(Uh(o.children,e,a))):(e||o.type!==Jt)&&i.push(a!=null?Ui(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Nh(n,e){return Ge(n)?It({name:n.name},e,{setup:n}):n}function Fh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Qo(n,e,t,i,s=!1){if(Oe(n)){n.forEach((g,_)=>Qo(g,e&&(Oe(e)?e[_]:e),t,i,s));return}if(Cr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Qo(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Kl(i.component):i.el,o=s?null:r,{i:a,r:c}=n,l=e&&e.r,u=a.refs===pt?a.refs={}:a.refs,d=a.setupState,f=nt(d),h=d===pt?()=>!1:g=>at(f,g);if(l!=null&&l!==c&&(Et(l)?(u[l]=null,h(l)&&(d[l]=null)):zt(l)&&(l.value=null)),Ge(c))Qr(c,a,12,[o,u]);else{const g=Et(c),_=zt(c);if(g||_){const m=()=>{if(n.f){const p=g?h(c)?d[c]:u[c]:c.value;s?Oe(p)&&Ol(p,r):Oe(p)?p.includes(r)||p.push(r):g?(u[c]=[r],h(c)&&(d[c]=u[c])):(c.value=[r],n.k&&(u[n.k]=c.value))}else g?(u[c]=o,h(c)&&(d[c]=o)):_&&(c.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,sn(m,t)):m()}}}ha().requestIdleCallback;ha().cancelIdleCallback;const Cr=n=>!!n.type.__asyncLoader,_a=n=>n.type.__isKeepAlive;function mg(n,e){Oh(n,"a",e)}function gg(n,e){Oh(n,"da",e)}function Oh(n,e,t=Ut){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(va(e,i,t),t){let s=t.parent;for(;s&&s.parent;)_a(s.parent.vnode)&&_g(i,e,t,s),s=s.parent}}function _g(n,e,t,i){const s=va(e,n,i,!0);Sa(()=>{Ol(i[e],s)},t)}function va(n,e,t=Ut,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Bi();const a=eo(t),c=Ln(e,t,n,o);return a(),Hi(),c});return i?s.unshift(r):s.push(r),r}}const fi=n=>(e,t=Ut)=>{(!Xr||n==="sp")&&va(n,(...i)=>e(...i),t)},vg=fi("bm"),xa=fi("m"),xg=fi("bu"),Sg=fi("u"),Bh=fi("bum"),Sa=fi("um"),Mg=fi("sp"),yg=fi("rtg"),Eg=fi("rtc");function Tg(n,e=Ut){va("ec",n,e)}const bg="components";function Hs(n,e){return wg(bg,n,!0,e)||n}const Ag=Symbol.for("v-ndc");function wg(n,e,t=!0,i=!1){const s=mn||Ut;if(s){const r=s.type;{const a=m_(r,!1);if(a&&(a===e||a===vn(e)||a===fa(vn(e))))return r}const o=Du(s[n]||r[n],e)||Du(s.appContext[n],e);return!o&&i?r:o}}function Du(n,e){return n&&(n[e]||n[vn(e)]||n[fa(vn(e))])}function ea(n,e,t,i){let s;const r=t,o=Oe(n);if(o||Et(n)){const a=o&&Fs(n);let c=!1;a&&(c=!_n(n),n=pa(n)),s=new Array(n.length);for(let l=0,u=n.length;l<u;l++)s[l]=e(c?Ht(n[l]):n[l],l,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(mt(n))if(n[Symbol.iterator])s=Array.from(n,(a,c)=>e(a,c,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(n[u],u,c,r)}}else s=[];return s}const Uc=n=>n?op(n)?Kl(n):Uc(n.parent):null,Pr=It(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Uc(n.parent),$root:n=>Uc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>kh(n),$forceUpdate:n=>n.f||(n.f=()=>{Yl(n.update)}),$nextTick:n=>n.n||(n.n=Th.bind(n.proxy)),$watch:n=>jg.bind(n)}),Ba=(n,e)=>n!==pt&&!n.__isScriptSetup&&at(n,e),Rg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=n;let l;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Ba(i,e))return o[e]=1,i[e];if(s!==pt&&at(s,e))return o[e]=2,s[e];if((l=n.propsOptions[0])&&at(l,e))return o[e]=3,r[e];if(t!==pt&&at(t,e))return o[e]=4,t[e];Nc&&(o[e]=0)}}const u=Pr[e];let d,f;if(u)return e==="$attrs"&&Bt(n.attrs,"get",""),u(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==pt&&at(t,e))return o[e]=4,t[e];if(f=c.config.globalProperties,at(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Ba(s,e)?(s[e]=t,!0):i!==pt&&at(i,e)?(i[e]=t,!0):at(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==pt&&at(n,o)||Ba(e,o)||(a=r[0])&&at(a,o)||at(i,o)||at(Pr,o)||at(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:at(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Uu(n){return Oe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Nc=!0;function Cg(n){const e=kh(n),t=n.proxy,i=n.ctx;Nc=!1,e.beforeCreate&&Nu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:b,unmounted:S,render:L,renderTracked:P,renderTriggered:C,errorCaptured:N,serverPrefetch:T,expose:y,inheritAttrs:D,components:U,directives:B,filters:Q}=e;if(l&&Pg(l,i,null),o)for(const j in o){const V=o[j];Ge(V)&&(i[j]=V.bind(t))}if(s){const j=s.call(t,t);mt(j)&&(n.data=ma(j))}if(Nc=!0,r)for(const j in r){const V=r[j],me=Ge(V)?V.bind(t,t):Ge(V.get)?V.get.bind(t,t):Bn,xe=!Ge(V)&&Ge(V.set)?V.set.bind(t):Bn,Re=bn({get:me,set:xe});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Le=>Re.value=Le})}if(a)for(const j in a)Hh(a[j],i,t,j);if(c){const j=Ge(c)?c.call(t):c;Reflect.ownKeys(j).forEach(V=>{Ho(V,j[V])})}u&&Nu(u,n,"c");function Z(j,V){Oe(V)?V.forEach(me=>j(me.bind(t))):V&&j(V.bind(t))}if(Z(vg,d),Z(xa,f),Z(xg,h),Z(Sg,g),Z(mg,_),Z(gg,m),Z(Tg,N),Z(Eg,P),Z(yg,C),Z(Bh,A),Z(Sa,S),Z(Mg,T),Oe(y))if(y.length){const j=n.exposed||(n.exposed={});y.forEach(V=>{Object.defineProperty(j,V,{get:()=>t[V],set:me=>t[V]=me})})}else n.exposed||(n.exposed={});L&&n.render===Bn&&(n.render=L),D!=null&&(n.inheritAttrs=D),U&&(n.components=U),B&&(n.directives=B),T&&Fh(n)}function Pg(n,e,t=Bn){Oe(n)&&(n=Fc(n));for(const i in n){const s=n[i];let r;mt(s)?"default"in s?r=ai(s.from||i,s.default,!0):r=ai(s.from||i):r=ai(s),zt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Nu(n,e,t){Ln(Oe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Hh(n,e,t,i){let s=i.includes(".")?ep(t,i):()=>t[i];if(Et(n)){const r=e[n];Ge(r)&&Lr(s,r)}else if(Ge(n))Lr(s,n.bind(t));else if(mt(n))if(Oe(n))n.forEach(r=>Hh(r,e,t,i));else{const r=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(r)&&Lr(s,r,n)}}function kh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let c;return a?c=a:!s.length&&!t&&!i?c=e:(c={},s.length&&s.forEach(l=>ta(c,l,o,!0)),ta(c,e,o)),mt(e)&&r.set(e,c),c}function ta(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ta(n,r,t,!0),s&&s.forEach(o=>ta(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Lg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Lg={data:Fu,props:Ou,emits:Ou,methods:Er,computed:Er,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:Er,directives:Er,watch:Dg,provide:Fu,inject:Ig};function Fu(n,e){return e?n?function(){return It(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function Ig(n,e){return Er(Fc(n),Fc(e))}function Fc(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Wt(n,e){return n?[...new Set([].concat(n,e))]:e}function Er(n,e){return n?It(Object.create(null),n,e):e}function Ou(n,e){return n?Oe(n)&&Oe(e)?[...new Set([...n,...e])]:It(Object.create(null),Uu(n),Uu(e??{})):e}function Dg(n,e){if(!n)return e;if(!e)return n;const t=It(Object.create(null),n);for(const i in e)t[i]=Wt(n[i],e[i]);return t}function zh(){return{app:null,config:{isNativeTag:ym,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ug=0;function Ng(n,e){return function(i,s=null){Ge(i)||(i=It({},i)),s!=null&&!mt(s)&&(s=null);const r=zh(),o=new WeakSet,a=[];let c=!1;const l=r.app={_uid:Ug++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:__,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&Ge(u.install)?(o.add(u),u.install(l,...d)):Ge(u)&&(o.add(u),u(l,...d))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,d){return d?(r.components[u]=d,l):r.components[u]},directive(u,d){return d?(r.directives[u]=d,l):r.directives[u]},mount(u,d,f){if(!c){const h=l._ceVNode||je(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),c=!0,l._container=u,u.__vue_app__=l,Kl(h.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Ln(a,l._instance,16),n(null,l._container),delete l._container.__vue_app__)},provide(u,d){return r.provides[u]=d,l},runWithContext(u){const d=ks;ks=l;try{return u()}finally{ks=d}}};return l}}let ks=null;function Ho(n,e){if(Ut){let t=Ut.provides;const i=Ut.parent&&Ut.parent.provides;i===t&&(t=Ut.provides=Object.create(i)),t[n]=e}}function ai(n,e,t=!1){const i=Ut||mn;if(i||ks){const s=ks?ks._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}const Vh={},Gh=()=>Object.create(Vh),Wh=n=>Object.getPrototypeOf(n)===Vh;function Fg(n,e,t,i=!1){const s={},r=Gh();n.propsDefaults=Object.create(null),Xh(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:xh(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Og(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=nt(s),[c]=n.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Ma(n.emitsOptions,f))continue;const h=e[f];if(c)if(at(r,f))h!==r[f]&&(r[f]=h,l=!0);else{const g=vn(f);s[g]=Oc(c,a,g,h,n,!1)}else h!==r[f]&&(r[f]=h,l=!0)}}}else{Xh(n,e,s,r)&&(l=!0);let u;for(const d in a)(!e||!at(e,d)&&((u=fs(d))===d||!at(e,u)))&&(c?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=Oc(c,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!at(e,d))&&(delete r[d],l=!0)}l&&si(n.attrs,"set","")}function Xh(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ar(c))continue;const l=e[c];let u;s&&at(s,u=vn(c))?!r||!r.includes(u)?t[u]=l:(a||(a={}))[u]=l:Ma(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(r){const c=nt(t),l=a||pt;for(let u=0;u<r.length;u++){const d=r[u];t[d]=Oc(s,c,d,l[d],n,!at(l,d))}}return o}function Oc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=at(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ge(c)){const{propsDefaults:l}=s;if(t in l)i=l[t];else{const u=eo(s);i=l[t]=c.call(null,e),u()}}else i=c;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===fs(t))&&(i=!0))}return i}const Bg=new WeakMap;function qh(n,e,t=!1){const i=t?Bg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let c=!1;if(!Ge(n)){const u=d=>{c=!0;const[f,h]=qh(d,e,!0);It(o,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!c)return mt(n)&&i.set(n,Us),Us;if(Oe(r))for(let u=0;u<r.length;u++){const d=vn(r[u]);Bu(d)&&(o[d]=pt)}else if(r)for(const u in r){const d=vn(u);if(Bu(d)){const f=r[u],h=o[d]=Oe(f)||Ge(f)?{type:f}:It({},f),g=h.type;let _=!1,m=!0;if(Oe(g))for(let p=0;p<g.length;++p){const A=g[p],b=Ge(A)&&A.name;if(b==="Boolean"){_=!0;break}else b==="String"&&(m=!1)}else _=Ge(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||at(h,"default"))&&a.push(d)}}const l=[o,a];return mt(n)&&i.set(n,l),l}function Bu(n){return n[0]!=="$"&&!Ar(n)}const Yh=n=>n[0]==="_"||n==="$stable",jl=n=>Oe(n)?n.map(Nn):[Nn(n)],Hg=(n,e,t)=>{if(e._n)return e;const i=yt((...s)=>jl(e(...s)),t);return i._c=!1,i},jh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Yh(s))continue;const r=n[s];if(Ge(r))e[s]=Hg(s,r,i);else if(r!=null){const o=jl(r);e[s]=()=>o}}},$h=(n,e)=>{const t=jl(e);n.slots.default=()=>t},Kh=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},kg=(n,e,t)=>{const i=n.slots=Gh();if(n.vnode.shapeFlag&32){const s=e._;s?(Kh(i,e,t),t&&th(i,"_",s,!0)):jh(e,i)}else e&&$h(n,e)},zg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=pt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Kh(s,e,t):(r=!e.$stable,jh(e,s)),o=e}else e&&($h(n,e),o={default:1});if(r)for(const a in s)!Yh(a)&&o[a]==null&&delete s[a]},sn=t_;function Vg(n){return Gg(n)}function Gg(n,e){const t=ha();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Bn,insertStaticContent:g}=n,_=(w,R,x,ie=null,K=null,q=null,ee=void 0,le=null,J=!!R.dynamicChildren)=>{if(w===R)return;w&&!is(w,R)&&(ie=F(w),Le(w,K,q,!0),w=null),R.patchFlag===-2&&(J=!1,R.dynamicChildren=null);const{type:M,ref:v,shapeFlag:I}=R;switch(M){case ya:m(w,R,x,ie);break;case Jt:p(w,R,x,ie);break;case ko:w==null&&A(R,x,ie,ee);break;case kt:U(w,R,x,ie,K,q,ee,le,J);break;default:I&1?L(w,R,x,ie,K,q,ee,le,J):I&6?B(w,R,x,ie,K,q,ee,le,J):(I&64||I&128)&&M.process(w,R,x,ie,K,q,ee,le,J,ce)}v!=null&&K&&Qo(v,w&&w.ref,q,R||w,!R)},m=(w,R,x,ie)=>{if(w==null)i(R.el=a(R.children),x,ie);else{const K=R.el=w.el;R.children!==w.children&&l(K,R.children)}},p=(w,R,x,ie)=>{w==null?i(R.el=c(R.children||""),x,ie):R.el=w.el},A=(w,R,x,ie)=>{[w.el,w.anchor]=g(w.children,R,x,ie,w.el,w.anchor)},b=({el:w,anchor:R},x,ie)=>{let K;for(;w&&w!==R;)K=f(w),i(w,x,ie),w=K;i(R,x,ie)},S=({el:w,anchor:R})=>{let x;for(;w&&w!==R;)x=f(w),s(w),w=x;s(R)},L=(w,R,x,ie,K,q,ee,le,J)=>{R.type==="svg"?ee="svg":R.type==="math"&&(ee="mathml"),w==null?P(R,x,ie,K,q,ee,le,J):T(w,R,K,q,ee,le,J)},P=(w,R,x,ie,K,q,ee,le)=>{let J,M;const{props:v,shapeFlag:I,transition:G,dirs:Y}=w;if(J=w.el=o(w.type,q,v&&v.is,v),I&8?u(J,w.children):I&16&&N(w.children,J,null,ie,K,Ha(w,q),ee,le),Y&&Gi(w,null,ie,"created"),C(J,w,w.scopeId,ee,ie),v){for(const ge in v)ge!=="value"&&!Ar(ge)&&r(J,ge,null,v[ge],q,ie);"value"in v&&r(J,"value",null,v.value,q),(M=v.onVnodeBeforeMount)&&Dn(M,ie,w)}Y&&Gi(w,null,ie,"beforeMount");const W=Wg(K,G);W&&G.beforeEnter(J),i(J,R,x),((M=v&&v.onVnodeMounted)||W||Y)&&sn(()=>{M&&Dn(M,ie,w),W&&G.enter(J),Y&&Gi(w,null,ie,"mounted")},K)},C=(w,R,x,ie,K)=>{if(x&&h(w,x),ie)for(let q=0;q<ie.length;q++)h(w,ie[q]);if(K){let q=K.subTree;if(R===q||np(q.type)&&(q.ssContent===R||q.ssFallback===R)){const ee=K.vnode;C(w,ee,ee.scopeId,ee.slotScopeIds,K.parent)}}},N=(w,R,x,ie,K,q,ee,le,J=0)=>{for(let M=J;M<w.length;M++){const v=w[M]=le?bi(w[M]):Nn(w[M]);_(null,v,R,x,ie,K,q,ee,le)}},T=(w,R,x,ie,K,q,ee)=>{const le=R.el=w.el;let{patchFlag:J,dynamicChildren:M,dirs:v}=R;J|=w.patchFlag&16;const I=w.props||pt,G=R.props||pt;let Y;if(x&&Wi(x,!1),(Y=G.onVnodeBeforeUpdate)&&Dn(Y,x,R,w),v&&Gi(R,w,x,"beforeUpdate"),x&&Wi(x,!0),(I.innerHTML&&G.innerHTML==null||I.textContent&&G.textContent==null)&&u(le,""),M?y(w.dynamicChildren,M,le,x,ie,Ha(R,K),q):ee||V(w,R,le,null,x,ie,Ha(R,K),q,!1),J>0){if(J&16)D(le,I,G,x,K);else if(J&2&&I.class!==G.class&&r(le,"class",null,G.class,K),J&4&&r(le,"style",I.style,G.style,K),J&8){const W=R.dynamicProps;for(let ge=0;ge<W.length;ge++){const ue=W[ge],_e=I[ue],Ne=G[ue];(Ne!==_e||ue==="value")&&r(le,ue,_e,Ne,K,x)}}J&1&&w.children!==R.children&&u(le,R.children)}else!ee&&M==null&&D(le,I,G,x,K);((Y=G.onVnodeUpdated)||v)&&sn(()=>{Y&&Dn(Y,x,R,w),v&&Gi(R,w,x,"updated")},ie)},y=(w,R,x,ie,K,q,ee)=>{for(let le=0;le<R.length;le++){const J=w[le],M=R[le],v=J.el&&(J.type===kt||!is(J,M)||J.shapeFlag&70)?d(J.el):x;_(J,M,v,null,ie,K,q,ee,!0)}},D=(w,R,x,ie,K)=>{if(R!==x){if(R!==pt)for(const q in R)!Ar(q)&&!(q in x)&&r(w,q,R[q],null,K,ie);for(const q in x){if(Ar(q))continue;const ee=x[q],le=R[q];ee!==le&&q!=="value"&&r(w,q,le,ee,K,ie)}"value"in x&&r(w,"value",R.value,x.value,K)}},U=(w,R,x,ie,K,q,ee,le,J)=>{const M=R.el=w?w.el:a(""),v=R.anchor=w?w.anchor:a("");let{patchFlag:I,dynamicChildren:G,slotScopeIds:Y}=R;Y&&(le=le?le.concat(Y):Y),w==null?(i(M,x,ie),i(v,x,ie),N(R.children||[],x,v,K,q,ee,le,J)):I>0&&I&64&&G&&w.dynamicChildren?(y(w.dynamicChildren,G,x,K,q,ee,le),(R.key!=null||K&&R===K.subTree)&&Zh(w,R,!0)):V(w,R,x,v,K,q,ee,le,J)},B=(w,R,x,ie,K,q,ee,le,J)=>{R.slotScopeIds=le,w==null?R.shapeFlag&512?K.ctx.activate(R,x,ie,ee,J):Q(R,x,ie,K,q,ee,J):ne(w,R,J)},Q=(w,R,x,ie,K,q,ee)=>{const le=w.component=l_(w,ie,K);if(_a(w)&&(le.ctx.renderer=ce),d_(le,!1,ee),le.asyncDep){if(K&&K.registerDep(le,Z,ee),!w.el){const J=le.subTree=je(Jt);p(null,J,R,x)}}else Z(le,w,R,x,K,q,ee)},ne=(w,R,x)=>{const ie=R.component=w.component;if(Qg(w,R,x))if(ie.asyncDep&&!ie.asyncResolved){j(ie,R,x);return}else ie.next=R,ie.update();else R.el=w.el,ie.vnode=R},Z=(w,R,x,ie,K,q,ee)=>{const le=()=>{if(w.isMounted){let{next:I,bu:G,u:Y,parent:W,vnode:ge}=w;{const Me=Jh(w);if(Me){I&&(I.el=ge.el,j(w,I,ee)),Me.asyncDep.then(()=>{w.isUnmounted||le()});return}}let ue=I,_e;Wi(w,!1),I?(I.el=ge.el,j(w,I,ee)):I=ge,G&&Ia(G),(_e=I.props&&I.props.onVnodeBeforeUpdate)&&Dn(_e,W,I,ge),Wi(w,!0);const Ne=ku(w),de=w.subTree;w.subTree=Ne,_(de,Ne,d(de.el),F(de),w,K,q),I.el=Ne.el,ue===null&&e_(w,Ne.el),Y&&sn(Y,K),(_e=I.props&&I.props.onVnodeUpdated)&&sn(()=>Dn(_e,W,I,ge),K)}else{let I;const{el:G,props:Y}=R,{bm:W,m:ge,parent:ue,root:_e,type:Ne}=w,de=Cr(R);Wi(w,!1),W&&Ia(W),!de&&(I=Y&&Y.onVnodeBeforeMount)&&Dn(I,ue,R),Wi(w,!0);{_e.ce&&_e.ce._injectChildStyle(Ne);const Me=w.subTree=ku(w);_(null,Me,x,ie,w,K,q),R.el=Me.el}if(ge&&sn(ge,K),!de&&(I=Y&&Y.onVnodeMounted)){const Me=R;sn(()=>Dn(I,ue,Me),K)}(R.shapeFlag&256||ue&&Cr(ue.vnode)&&ue.vnode.shapeFlag&256)&&w.a&&sn(w.a,K),w.isMounted=!0,R=x=ie=null}};w.scope.on();const J=w.effect=new rh(le);w.scope.off();const M=w.update=J.run.bind(J),v=w.job=J.runIfDirty.bind(J);v.i=w,v.id=w.uid,J.scheduler=()=>Yl(v),Wi(w,!0),M()},j=(w,R,x)=>{R.component=w;const ie=w.vnode.props;w.vnode=R,w.next=null,Og(w,R.props,ie,x),zg(w,R.children,x),Bi(),Lu(w),Hi()},V=(w,R,x,ie,K,q,ee,le,J=!1)=>{const M=w&&w.children,v=w?w.shapeFlag:0,I=R.children,{patchFlag:G,shapeFlag:Y}=R;if(G>0){if(G&128){xe(M,I,x,ie,K,q,ee,le,J);return}else if(G&256){me(M,I,x,ie,K,q,ee,le,J);return}}Y&8?(v&16&&ye(M,K,q),I!==M&&u(x,I)):v&16?Y&16?xe(M,I,x,ie,K,q,ee,le,J):ye(M,K,q,!0):(v&8&&u(x,""),Y&16&&N(I,x,ie,K,q,ee,le,J))},me=(w,R,x,ie,K,q,ee,le,J)=>{w=w||Us,R=R||Us;const M=w.length,v=R.length,I=Math.min(M,v);let G;for(G=0;G<I;G++){const Y=R[G]=J?bi(R[G]):Nn(R[G]);_(w[G],Y,x,null,K,q,ee,le,J)}M>v?ye(w,K,q,!0,!1,I):N(R,x,ie,K,q,ee,le,J,I)},xe=(w,R,x,ie,K,q,ee,le,J)=>{let M=0;const v=R.length;let I=w.length-1,G=v-1;for(;M<=I&&M<=G;){const Y=w[M],W=R[M]=J?bi(R[M]):Nn(R[M]);if(is(Y,W))_(Y,W,x,null,K,q,ee,le,J);else break;M++}for(;M<=I&&M<=G;){const Y=w[I],W=R[G]=J?bi(R[G]):Nn(R[G]);if(is(Y,W))_(Y,W,x,null,K,q,ee,le,J);else break;I--,G--}if(M>I){if(M<=G){const Y=G+1,W=Y<v?R[Y].el:ie;for(;M<=G;)_(null,R[M]=J?bi(R[M]):Nn(R[M]),x,W,K,q,ee,le,J),M++}}else if(M>G)for(;M<=I;)Le(w[M],K,q,!0),M++;else{const Y=M,W=M,ge=new Map;for(M=W;M<=G;M++){const ve=R[M]=J?bi(R[M]):Nn(R[M]);ve.key!=null&&ge.set(ve.key,M)}let ue,_e=0;const Ne=G-W+1;let de=!1,Me=0;const Pe=new Array(Ne);for(M=0;M<Ne;M++)Pe[M]=0;for(M=Y;M<=I;M++){const ve=w[M];if(_e>=Ne){Le(ve,K,q,!0);continue}let Be;if(ve.key!=null)Be=ge.get(ve.key);else for(ue=W;ue<=G;ue++)if(Pe[ue-W]===0&&is(ve,R[ue])){Be=ue;break}Be===void 0?Le(ve,K,q,!0):(Pe[Be-W]=M+1,Be>=Me?Me=Be:de=!0,_(ve,R[Be],x,null,K,q,ee,le,J),_e++)}const Fe=de?Xg(Pe):Us;for(ue=Fe.length-1,M=Ne-1;M>=0;M--){const ve=W+M,Be=R[ve],Ve=ve+1<v?R[ve+1].el:ie;Pe[M]===0?_(null,Be,x,Ve,K,q,ee,le,J):de&&(ue<0||M!==Fe[ue]?Re(Be,x,Ve,2):ue--)}}},Re=(w,R,x,ie,K=null)=>{const{el:q,type:ee,transition:le,children:J,shapeFlag:M}=w;if(M&6){Re(w.component.subTree,R,x,ie);return}if(M&128){w.suspense.move(R,x,ie);return}if(M&64){ee.move(w,R,x,ce);return}if(ee===kt){i(q,R,x);for(let I=0;I<J.length;I++)Re(J[I],R,x,ie);i(w.anchor,R,x);return}if(ee===ko){b(w,R,x);return}if(ie!==2&&M&1&&le)if(ie===0)le.beforeEnter(q),i(q,R,x),sn(()=>le.enter(q),K);else{const{leave:I,delayLeave:G,afterLeave:Y}=le,W=()=>i(q,R,x),ge=()=>{I(q,()=>{W(),Y&&Y()})};G?G(q,W,ge):ge()}else i(q,R,x)},Le=(w,R,x,ie=!1,K=!1)=>{const{type:q,props:ee,ref:le,children:J,dynamicChildren:M,shapeFlag:v,patchFlag:I,dirs:G,cacheIndex:Y}=w;if(I===-2&&(K=!1),le!=null&&Qo(le,null,x,w,!0),Y!=null&&(R.renderCache[Y]=void 0),v&256){R.ctx.deactivate(w);return}const W=v&1&&G,ge=!Cr(w);let ue;if(ge&&(ue=ee&&ee.onVnodeBeforeUnmount)&&Dn(ue,R,w),v&6)pe(w.component,x,ie);else{if(v&128){w.suspense.unmount(x,ie);return}W&&Gi(w,null,R,"beforeUnmount"),v&64?w.type.remove(w,R,x,ce,ie):M&&!M.hasOnce&&(q!==kt||I>0&&I&64)?ye(M,R,x,!1,!0):(q===kt&&I&384||!K&&v&16)&&ye(J,R,x),ie&&Je(w)}(ge&&(ue=ee&&ee.onVnodeUnmounted)||W)&&sn(()=>{ue&&Dn(ue,R,w),W&&Gi(w,null,R,"unmounted")},x)},Je=w=>{const{type:R,el:x,anchor:ie,transition:K}=w;if(R===kt){se(x,ie);return}if(R===ko){S(w);return}const q=()=>{s(x),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(w.shapeFlag&1&&K&&!K.persisted){const{leave:ee,delayLeave:le}=K,J=()=>ee(x,q);le?le(w.el,q,J):J()}else q()},se=(w,R)=>{let x;for(;w!==R;)x=f(w),s(w),w=x;s(R)},pe=(w,R,x)=>{const{bum:ie,scope:K,job:q,subTree:ee,um:le,m:J,a:M}=w;Hu(J),Hu(M),ie&&Ia(ie),K.stop(),q&&(q.flags|=8,Le(ee,w,R,x)),le&&sn(le,R),sn(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ye=(w,R,x,ie=!1,K=!1,q=0)=>{for(let ee=q;ee<w.length;ee++)Le(w[ee],R,x,ie,K)},F=w=>{if(w.shapeFlag&6)return F(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const R=f(w.anchor||w.el),x=R&&R[dg];return x?f(x):R};let re=!1;const ae=(w,R,x)=>{w==null?R._vnode&&Le(R._vnode,null,null,!0):_(R._vnode||null,w,R,null,null,null,x),R._vnode=w,re||(re=!0,Lu(),Ah(),re=!1)},ce={p:_,um:Le,m:Re,r:Je,mt:Q,mc:N,pc:V,pbc:y,n:F,o:n};return{render:ae,hydrate:void 0,createApp:Ng(ae)}}function Ha({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Wi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Wg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Zh(n,e,t=!1){const i=n.children,s=e.children;if(Oe(i)&&Oe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=bi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Zh(o,a)),a.type===ya&&(a.el=o.el)}}function Xg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(s=t[t.length-1],n[s]<l){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<l?r=a+1:o=a;l<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Jh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jh(e)}function Hu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const qg=Symbol.for("v-scx"),Yg=()=>ai(qg);function Lr(n,e,t){return Qh(n,e,t)}function Qh(n,e,t=pt){const{immediate:i,deep:s,flush:r,once:o}=t,a=It({},t),c=e&&i||!e&&r!=="post";let l;if(Xr){if(r==="sync"){const h=Yg();l=h.__watcherHandles||(h.__watcherHandles=[])}else if(!c){const h=()=>{};return h.stop=Bn,h.resume=Bn,h.pause=Bn,h}}const u=Ut;a.call=(h,g,_)=>Ln(h,u,g,_);let d=!1;r==="post"?a.scheduler=h=>{sn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():Yl(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=ag(n,e,a);return Xr&&(l?l.push(f):c&&f()),f}function jg(n,e,t){const i=this.proxy,s=Et(n)?n.includes(".")?ep(i,n):()=>i[n]:n.bind(i,i);let r;Ge(e)?r=e:(r=e.handler,t=e);const o=eo(this),a=Qh(s,r.bind(i),t);return o(),a}function ep(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const $g=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${vn(e)}Modifiers`]||n[`${fs(e)}Modifiers`];function Kg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||pt;let s=t;const r=e.startsWith("update:"),o=r&&$g(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Et(u)?u.trim():u)),o.number&&(s=t.map(wm)));let a,c=i[a=La(e)]||i[a=La(vn(e))];!c&&r&&(c=i[a=La(fs(e))]),c&&Ln(c,n,6,s);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Ln(l,n,6,s)}}function tp(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ge(n)){const c=l=>{const u=tp(l,e,!0);u&&(a=!0,It(o,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!r&&!a?(mt(n)&&i.set(n,null),null):(Oe(r)?r.forEach(c=>o[c]=null):It(o,r),mt(n)&&i.set(n,o),o)}function Ma(n,e){return!n||!la(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(n,e[0].toLowerCase()+e.slice(1))||at(n,fs(e))||at(n,e))}function ku(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:_}=n,m=Jo(n);let p,A;try{if(t.shapeFlag&4){const S=s||i,L=S;p=Nn(l.call(L,S,u,d,h,f,g)),A=a}else{const S=e;p=Nn(S.length>1?S(d,{attrs:a,slots:o,emit:c}):S(d,null)),A=e.props?a:Zg(a)}}catch(S){Ir.length=0,ga(S,n,1),p=je(Jt)}let b=p;if(A&&_!==!1){const S=Object.keys(A),{shapeFlag:L}=b;S.length&&L&7&&(r&&S.some(Fl)&&(A=Jg(A,r)),b=Ui(b,A,!1,!0))}return t.dirs&&(b=Ui(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&Gr(b,t.transition),p=b,Jo(m),p}const Zg=n=>{let e;for(const t in n)(t==="class"||t==="style"||la(t))&&((e||(e={}))[t]=n[t]);return e},Jg=(n,e)=>{const t={};for(const i in n)(!Fl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Qg(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?zu(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!Ma(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?zu(i,o,l):!0:!!o;return!1}function zu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Ma(t,r))return!0}return!1}function e_({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const np=n=>n.__isSuspense;function t_(n,e){e&&e.pendingBranch?Oe(n)?e.effects.push(...n):e.effects.push(n):ug(n)}const kt=Symbol.for("v-fgt"),ya=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),ko=Symbol.for("v-stc"),Ir=[];let on=null;function _t(n=!1){Ir.push(on=n?null:[])}function n_(){Ir.pop(),on=Ir[Ir.length-1]||null}let Wr=1;function Vu(n,e=!1){Wr+=n,n<0&&on&&e&&(on.hasOnce=!0)}function ip(n){return n.dynamicChildren=Wr>0?on||Us:null,n_(),Wr>0&&on&&on.push(n),n}function Mt(n,e,t,i,s,r){return ip(fe(n,e,t,i,s,r,!0))}function i_(n,e,t,i,s){return ip(je(n,e,t,i,s,!0))}function na(n){return n?n.__v_isVNode===!0:!1}function is(n,e){return n.type===e.type&&n.key===e.key}const sp=({key:n})=>n??null,zo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Et(n)||zt(n)||Ge(n)?{i:mn,r:n,k:e,f:!!t}:n:null);function fe(n,e=null,t=null,i=0,s=null,r=n===kt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&sp(e),ref:e&&zo(e),scopeId:Rh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mn};return a?($l(c,t),r&128&&n.normalize(c)):t&&(c.shapeFlag|=Et(t)?8:16),Wr>0&&!o&&on&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&on.push(c),c}const je=s_;function s_(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Ag)&&(n=Jt),na(n)){const a=Ui(n,e,!0);return t&&$l(a,t),Wr>0&&!r&&on&&(a.shapeFlag&6?on[on.indexOf(n)]=a:on.push(a)),a.patchFlag=-2,a}if(g_(n)&&(n=n.__vccOpts),e){e=r_(e);let{class:a,style:c}=e;a&&!Et(a)&&(e.class=Br(a)),mt(c)&&(ql(c)&&!Oe(c)&&(c=It({},c)),e.style=Hl(c))}const o=Et(n)?1:np(n)?128:Ch(n)?64:mt(n)?4:Ge(n)?2:0;return fe(n,e,t,i,s,o,r,!0)}function r_(n){return n?ql(n)||Wh(n)?It({},n):n:null}function Ui(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:c}=n,l=e?o_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:l,key:l&&sp(l),ref:e&&e.ref?t&&r?Oe(r)?r.concat(zo(e)):[r,zo(e)]:zo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==kt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ui(n.ssContent),ssFallback:n.ssFallback&&Ui(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&Gr(u,c.clone(u)),u}function At(n=" ",e=0){return je(ya,null,n,e)}function Ni(n,e){const t=je(ko,null,n);return t.staticCount=e,t}function rp(n="",e=!1){return e?(_t(),i_(Jt,null,n)):je(Jt,null,n)}function Nn(n){return n==null||typeof n=="boolean"?je(Jt):Oe(n)?je(kt,null,n.slice()):na(n)?bi(n):je(ya,null,String(n))}function bi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ui(n)}function $l(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),$l(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Wh(e)?e._ctx=mn:s===3&&mn&&(mn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ge(e)?(e={default:e,_ctx:mn},t=32):(e=String(e),i&64?(t=16,e=[At(e)]):t=8);n.children=e,n.shapeFlag|=t}function o_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Br([e.class,i.class]));else if(s==="style")e.style=Hl([e.style,i.style]);else if(la(s)){const r=e[s],o=i[s];o&&r!==o&&!(Oe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Dn(n,e,t,i=null){Ln(n,e,7,[t,i])}const a_=zh();let c_=0;function l_(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||a_,r={uid:c_++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Nm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qh(i,s),emitsOptions:tp(i,s),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:i.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Kg.bind(null,r),n.ce&&n.ce(r),r}let Ut=null;const u_=()=>Ut||mn;let ia,Bc;{const n=ha(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ia=e("__VUE_INSTANCE_SETTERS__",t=>Ut=t),Bc=e("__VUE_SSR_SETTERS__",t=>Xr=t)}const eo=n=>{const e=Ut;return ia(n),n.scope.on(),()=>{n.scope.off(),ia(e)}},Gu=()=>{Ut&&Ut.scope.off(),ia(null)};function op(n){return n.vnode.shapeFlag&4}let Xr=!1;function d_(n,e=!1,t=!1){e&&Bc(e);const{props:i,children:s}=n.vnode,r=op(n);Fg(n,i,r,e),kg(n,s,t);const o=r?f_(n,e):void 0;return e&&Bc(!1),o}function f_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Rg);const{setup:i}=t;if(i){Bi();const s=n.setupContext=i.length>1?p_(n):null,r=eo(n),o=Qr(i,n,0,[n.props,s]),a=Jf(o);if(Hi(),r(),(a||n.sp)&&!Cr(n)&&Fh(n),a){if(o.then(Gu,Gu),e)return o.then(c=>{Wu(n,c)}).catch(c=>{ga(c,n,0)});n.asyncDep=o}else Wu(n,o)}else ap(n)}function Wu(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:mt(e)&&(n.setupState=yh(e)),ap(n)}function ap(n,e,t){const i=n.type;n.render||(n.render=i.render||Bn);{const s=eo(n);Bi();try{Cg(n)}finally{Hi(),s()}}}const h_={get(n,e){return Bt(n,"get",""),n[e]}};function p_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,h_),slots:n.slots,emit:n.emit,expose:e}}function Kl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(yh(yr(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Pr)return Pr[t](n)},has(e,t){return t in e||t in Pr}})):n.proxy}function m_(n,e=!0){return Ge(n)?n.displayName||n.name:n.name||e&&n.__name}function g_(n){return Ge(n)&&"__vccOpts"in n}const bn=(n,e)=>rg(n,e,Xr);function Zl(n,e,t){const i=arguments.length;return i===2?mt(e)&&!Oe(e)?na(e)?je(n,null,[e]):je(n,e):je(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&na(t)&&(t=[t]),je(n,e,t))}const __="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hc;const Xu=typeof window<"u"&&window.trustedTypes;if(Xu)try{Hc=Xu.createPolicy("vue",{createHTML:n=>n})}catch{}const cp=Hc?n=>Hc.createHTML(n):n=>n,v_="http://www.w3.org/2000/svg",x_="http://www.w3.org/1998/Math/MathML",ni=typeof document<"u"?document:null,qu=ni&&ni.createElement("template"),S_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ni.createElementNS(v_,n):e==="mathml"?ni.createElementNS(x_,n):t?ni.createElement(n,{is:t}):ni.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ni.createTextNode(n),createComment:n=>ni.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ni.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{qu.innerHTML=cp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=qu.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},pi="transition",dr="animation",qr=Symbol("_vtc"),lp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},M_=It({},Ph,lp),y_=n=>(n.displayName="Transition",n.props=M_,n),kc=y_((n,{slots:e})=>Zl(pg,E_(n),e)),Xi=(n,e=[])=>{Oe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Yu=n=>n?Oe(n)?n.some(e=>e.length>1):n.length>1:!1;function E_(n){const e={};for(const U in n)U in lp||(e[U]=n[U]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:c=r,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,g=T_(s),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:A,onEnterCancelled:b,onLeave:S,onLeaveCancelled:L,onBeforeAppear:P=p,onAppear:C=A,onAppearCancelled:N=b}=e,T=(U,B,Q,ne)=>{U._enterCancelled=ne,qi(U,B?u:a),qi(U,B?l:o),Q&&Q()},y=(U,B)=>{U._isLeaving=!1,qi(U,d),qi(U,h),qi(U,f),B&&B()},D=U=>(B,Q)=>{const ne=U?C:A,Z=()=>T(B,U,Q);Xi(ne,[B,Z]),ju(()=>{qi(B,U?c:r),Yn(B,U?u:a),Yu(ne)||$u(B,i,_,Z)})};return It(e,{onBeforeEnter(U){Xi(p,[U]),Yn(U,r),Yn(U,o)},onBeforeAppear(U){Xi(P,[U]),Yn(U,c),Yn(U,l)},onEnter:D(!1),onAppear:D(!0),onLeave(U,B){U._isLeaving=!0;const Q=()=>y(U,B);Yn(U,d),U._enterCancelled?(Yn(U,f),Ju()):(Ju(),Yn(U,f)),ju(()=>{U._isLeaving&&(qi(U,d),Yn(U,h),Yu(S)||$u(U,i,m,Q))}),Xi(S,[U,Q])},onEnterCancelled(U){T(U,!1,void 0,!0),Xi(b,[U])},onAppearCancelled(U){T(U,!0,void 0,!0),Xi(N,[U])},onLeaveCancelled(U){y(U),Xi(L,[U])}})}function T_(n){if(n==null)return null;if(mt(n))return[ka(n.enter),ka(n.leave)];{const e=ka(n);return[e,e]}}function ka(n){return Rm(n)}function Yn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[qr]||(n[qr]=new Set)).add(e)}function qi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[qr];t&&(t.delete(e),t.size||(n[qr]=void 0))}function ju(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let b_=0;function $u(n,e,t,i){const s=n._endId=++b_,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:c}=A_(n,e);if(!o)return i();const l=o+"end";let u=0;const d=()=>{n.removeEventListener(l,f),r()},f=h=>{h.target===n&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),n.addEventListener(l,f)}function A_(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${pi}Delay`),r=i(`${pi}Duration`),o=Ku(s,r),a=i(`${dr}Delay`),c=i(`${dr}Duration`),l=Ku(a,c);let u=null,d=0,f=0;e===pi?o>0&&(u=pi,d=o,f=r.length):e===dr?l>0&&(u=dr,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?pi:dr:null,f=u?u===pi?r.length:c.length:0);const h=u===pi&&/\b(transform|all)(,|$)/.test(i(`${pi}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function Ku(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Zu(t)+Zu(n[i])))}function Zu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Ju(){return document.body.offsetHeight}function w_(n,e,t){const i=n[qr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Qu=Symbol("_vod"),R_=Symbol("_vsh"),C_=Symbol(""),P_=/(^|;)\s*display\s*:/;function L_(n,e,t){const i=n.style,s=Et(t);let r=!1;if(t&&!s){if(e)if(Et(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Vo(i,a,"")}else for(const o in e)t[o]==null&&Vo(i,o,"");for(const o in t)o==="display"&&(r=!0),Vo(i,o,t[o])}else if(s){if(e!==t){const o=i[C_];o&&(t+=";"+o),i.cssText=t,r=P_.test(t)}}else e&&n.removeAttribute("style");Qu in n&&(n[Qu]=r?i.display:"",n[R_]&&(i.display="none"))}const ed=/\s*!important$/;function Vo(n,e,t){if(Oe(t))t.forEach(i=>Vo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=I_(n,e);ed.test(t)?n.setProperty(fs(i),t.replace(ed,""),"important"):n[i]=t}}const td=["Webkit","Moz","ms"],za={};function I_(n,e){const t=za[e];if(t)return t;let i=vn(e);if(i!=="filter"&&i in n)return za[e]=i;i=fa(i);for(let s=0;s<td.length;s++){const r=td[s]+i;if(r in n)return za[e]=r}return e}const nd="http://www.w3.org/1999/xlink";function id(n,e,t,i,s,r=Um(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(nd,e.slice(6,e.length)):n.setAttributeNS(nd,e,t):t==null||r&&!nh(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Oi(t)?String(t):t)}function sd(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?cp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=nh(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function D_(n,e,t,i){n.addEventListener(e,t,i)}function U_(n,e,t,i){n.removeEventListener(e,t,i)}const rd=Symbol("_vei");function N_(n,e,t,i,s=null){const r=n[rd]||(n[rd]={}),o=r[e];if(i&&o)o.value=i;else{const[a,c]=F_(e);if(i){const l=r[e]=H_(i,s);D_(n,a,l,c)}else o&&(U_(n,a,o,c),r[e]=void 0)}}const od=/(?:Once|Passive|Capture)$/;function F_(n){let e;if(od.test(n)){e={};let i;for(;i=n.match(od);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):fs(n.slice(2)),e]}let Va=0;const O_=Promise.resolve(),B_=()=>Va||(O_.then(()=>Va=0),Va=Date.now());function H_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Ln(k_(i,t.value),e,5,[i])};return t.value=n,t.attached=B_(),t}function k_(n,e){if(Oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const ad=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,z_=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?w_(n,i,o):e==="style"?L_(n,t,i):la(e)?Fl(e)||N_(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):V_(n,e,i,o))?(sd(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&id(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Et(i))?sd(n,vn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),id(n,e,i,o))};function V_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&ad(e)&&Ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ad(e)&&Et(t)?!1:e in n}const G_=It({patchProp:z_},S_);let cd;function W_(){return cd||(cd=Vg(G_))}const X_=(...n)=>{const e=W_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Y_(i);if(!s)return;const r=e._component;!Ge(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,q_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function q_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Y_(n){return Et(n)?document.querySelector(n):n}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ls=typeof document<"u";function up(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function j_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&up(n.default)}const ot=Object.assign;function Ga(n,e){const t={};for(const i in e){const s=e[i];t[i]=In(s)?s.map(n):n(s)}return t}const Dr=()=>{},In=Array.isArray,dp=/#/g,$_=/&/g,K_=/\//g,Z_=/=/g,J_=/\?/g,fp=/\+/g,Q_=/%5B/g,ev=/%5D/g,hp=/%5E/g,tv=/%60/g,pp=/%7B/g,nv=/%7C/g,mp=/%7D/g,iv=/%20/g;function Jl(n){return encodeURI(""+n).replace(nv,"|").replace(Q_,"[").replace(ev,"]")}function sv(n){return Jl(n).replace(pp,"{").replace(mp,"}").replace(hp,"^")}function zc(n){return Jl(n).replace(fp,"%2B").replace(iv,"+").replace(dp,"%23").replace($_,"%26").replace(tv,"`").replace(pp,"{").replace(mp,"}").replace(hp,"^")}function rv(n){return zc(n).replace(Z_,"%3D")}function ov(n){return Jl(n).replace(dp,"%23").replace(J_,"%3F")}function av(n){return n==null?"":ov(n).replace(K_,"%2F")}function Yr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const cv=/\/$/,lv=n=>n.replace(cv,"");function Wa(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=hv(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Yr(o)}}function uv(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function ld(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function dv(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Xs(e.matched[i],t.matched[s])&&gp(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Xs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function gp(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!fv(n[t],e[t]))return!1;return!0}function fv(n,e){return In(n)?ud(n,e):In(e)?ud(e,n):n===e}function ud(n,e){return In(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function hv(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const mi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var jr;(function(n){n.pop="pop",n.push="push"})(jr||(jr={}));var Ur;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ur||(Ur={}));function pv(n){if(!n)if(Ls){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),lv(n)}const mv=/^[^#]+#/;function gv(n,e){return n.replace(mv,"#")+e}function _v(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Ea=()=>({left:window.scrollX,top:window.scrollY});function vv(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=_v(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function dd(n,e){return(history.state?history.state.position-e:-1)+n}const Vc=new Map;function xv(n,e){Vc.set(n,e)}function Sv(n){const e=Vc.get(n);return Vc.delete(n),e}let Mv=()=>location.protocol+"//"+location.host;function _p(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),ld(c,"")}return ld(t,n)+i+s}function yv(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const h=_p(n,location),g=t.value,_=e.value;let m=0;if(f){if(t.value=h,e.value=f,o&&o===g){o=null;return}m=_?f.position-_.position:0}else i(h);s.forEach(p=>{p(t.value,g,{delta:m,type:jr.pop,direction:m?m>0?Ur.forward:Ur.back:Ur.unknown})})};function c(){o=t.value}function l(f){s.push(f);const h=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(ot({},f.state,{scroll:Ea()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function fd(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Ea():null}}function Ev(n){const{history:e,location:t}=window,i={value:_p(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const d=n.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+c:Mv()+n+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(h){console.error(h),t[u?"replace":"assign"](f)}}function o(c,l){const u=ot({},e.state,fd(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});r(c,u,!0),i.value=c}function a(c,l){const u=ot({},s.value,e.state,{forward:c,scroll:Ea()});r(u.current,u,!0);const d=ot({},fd(i.value,c,null),{position:u.position+1},l);r(c,d,!1),i.value=c}return{location:i,state:s,push:a,replace:o}}function Tv(n){n=pv(n);const e=Ev(n),t=yv(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=ot({location:"",base:n,go:i,createHref:gv.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function bv(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),Tv(n)}function Av(n){return typeof n=="string"||n&&typeof n=="object"}function vp(n){return typeof n=="string"||typeof n=="symbol"}const xp=Symbol("");var hd;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(hd||(hd={}));function qs(n,e){return ot(new Error,{type:n,[xp]:!0},e)}function jn(n,e){return n instanceof Error&&xp in n&&(e==null||!!(n.type&e))}const pd="[^/]+?",wv={sensitive:!1,strict:!1,start:!0,end:!0},Rv=/[.+*?^${}()[\]/\\]/g;function Cv(n,e){const t=ot({},wv,e),i=[];let s=t.start?"^":"";const r=[];for(const l of n){const u=l.length?[]:[90];t.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const f=l[d];let h=40+(t.sensitive?.25:0);if(f.type===0)d||(s+="/"),s+=f.value.replace(Rv,"\\$&"),h+=40;else if(f.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=f;r.push({name:g,repeatable:_,optional:m});const A=p||pd;if(A!==pd){h+=10;try{new RegExp(`(${A})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${A}): `+S.message)}}let b=_?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;d||(b=m&&l.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),s+=b,h+=20,m&&(h+=-8),_&&(h+=-20),A===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(t.strict&&t.end){const l=i.length-1;i[l][i[l].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",g=r[f-1];d[g.name]=h&&g.repeatable?h.split("/"):h}return d}function c(l){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:_,optional:m}=h,p=g in l?l[g]:"";if(In(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const A=In(p)?p.join("/"):p;if(!A)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=A}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:c}}function Pv(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Sp(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=Pv(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(md(i))return 1;if(md(s))return-1}return s.length-i.length}function md(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Lv={type:0,value:""},Iv=/[a-zA-Z0-9_]/;function Dv(n){if(!n)return[[]];if(n==="/")return[[Lv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${l}": ${h}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,c,l="",u="";function d(){l&&(t===0?r.push({type:0,value:l}):t===1||t===2||t===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),t=1):f();break;case 4:f(),t=i;break;case 1:c==="("?t=2:Iv.test(c)?f():(d(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:t=3:u+=c;break;case 3:d(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function Uv(n,e,t){const i=Cv(Dv(n.path),t),s=ot(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Nv(n,e){const t=[],i=new Map;e=xd({strict:!1,end:!0,sensitive:!1},e);function s(d){return i.get(d)}function r(d,f,h){const g=!h,_=_d(d);_.aliasOf=h&&h.record;const m=xd(e,d),p=[_];if("alias"in d){const S=typeof d.alias=="string"?[d.alias]:d.alias;for(const L of S)p.push(_d(ot({},_,{components:h?h.record.components:_.components,path:L,aliasOf:h?h.record:_})))}let A,b;for(const S of p){const{path:L}=S;if(f&&L[0]!=="/"){const P=f.record.path,C=P[P.length-1]==="/"?"":"/";S.path=f.record.path+(L&&C+L)}if(A=Uv(S,f,m),h?h.alias.push(A):(b=b||A,b!==A&&b.alias.push(A),g&&d.name&&!vd(A)&&o(d.name)),Mp(A)&&c(A),_.children){const P=_.children;for(let C=0;C<P.length;C++)r(P[C],A,h&&h.children[C])}h=h||A}return b?()=>{o(b)}:Dr}function o(d){if(vp(d)){const f=i.get(d);f&&(i.delete(d),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(d);f>-1&&(t.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return t}function c(d){const f=Bv(d,t);t.splice(f,0,d),d.record.name&&!vd(d)&&i.set(d.record.name,d)}function l(d,f){let h,g={},_,m;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw qs(1,{location:d});m=h.record.name,g=ot(gd(f.params,h.keys.filter(b=>!b.optional).concat(h.parent?h.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),d.params&&gd(d.params,h.keys.map(b=>b.name))),_=h.stringify(g)}else if(d.path!=null)_=d.path,h=t.find(b=>b.re.test(_)),h&&(g=h.parse(_),m=h.record.name);else{if(h=f.name?i.get(f.name):t.find(b=>b.re.test(f.path)),!h)throw qs(1,{location:d,currentLocation:f});m=h.record.name,g=ot({},f.params,d.params),_=h.stringify(g)}const p=[];let A=h;for(;A;)p.unshift(A.record),A=A.parent;return{name:m,path:_,params:g,matched:p,meta:Ov(p)}}n.forEach(d=>r(d));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function gd(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function _d(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Fv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Fv(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function vd(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Ov(n){return n.reduce((e,t)=>ot(e,t.meta),{})}function xd(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Bv(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;Sp(n,e[r])<0?i=r:t=r+1}const s=Hv(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function Hv(n){let e=n;for(;e=e.parent;)if(Mp(e)&&Sp(n,e)===0)return e}function Mp({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function kv(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(fp," "),o=r.indexOf("="),a=Yr(o<0?r:r.slice(0,o)),c=o<0?null:Yr(r.slice(o+1));if(a in e){let l=e[a];In(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Sd(n){let e="";for(let t in n){const i=n[t];if(t=rv(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(In(i)?i.map(r=>r&&zc(r)):[i&&zc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function zv(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=In(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Vv=Symbol(""),Md=Symbol(""),Ql=Symbol(""),yp=Symbol(""),Gc=Symbol("");function fr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ai(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=f=>{f===!1?c(qs(4,{from:t,to:e})):f instanceof Error?c(f):Av(f)?c(qs(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],e,t,l));let d=Promise.resolve(u);n.length<3&&(d=d.then(l)),d.catch(f=>c(f))})}function Xa(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(up(c)){const u=(c.__vccOpts||c)[e];u&&r.push(Ai(u,t,i,o,a,s))}else{let l=c();r.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=j_(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const h=(d.__vccOpts||d)[e];return h&&Ai(h,t,i,o,a,s)()}))}}return r}function yd(n){const e=ai(Ql),t=ai(yp),i=bn(()=>{const c=Os(n.to);return e.resolve(c)}),s=bn(()=>{const{matched:c}=i.value,{length:l}=c,u=c[l-1],d=t.matched;if(!u||!d.length)return-1;const f=d.findIndex(Xs.bind(null,u));if(f>-1)return f;const h=Ed(c[l-2]);return l>1&&Ed(u)===h&&d[d.length-1].path!==h?d.findIndex(Xs.bind(null,c[l-2])):f}),r=bn(()=>s.value>-1&&Yv(t.params,i.value.params)),o=bn(()=>s.value>-1&&s.value===t.matched.length-1&&gp(t.params,i.value.params));function a(c={}){if(qv(c)){const l=e[Os(n.replace)?"replace":"push"](Os(n.to)).catch(Dr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:i,href:bn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Gv(n){return n.length===1?n[0]:n}const Wv=Nh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:yd,setup(n,{slots:e}){const t=ma(yd(n)),{options:i}=ai(Ql),s=bn(()=>({[Td(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Td(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&Gv(e.default(t));return n.custom?r:Zl("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Xv=Wv;function qv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Yv(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!In(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Ed(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Td=(n,e,t)=>n??e??t,jv=Nh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=ai(Gc),s=bn(()=>n.route||i.value),r=ai(Md,0),o=bn(()=>{let l=Os(r);const{matched:u}=s.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=bn(()=>s.value.matched[o.value]);Ho(Md,bn(()=>o.value+1)),Ho(Vv,a),Ho(Gc,s);const c=zr();return Lr(()=>[c.value,a.value,n.name],([l,u,d],[f,h,g])=>{u&&(u.instances[d]=l,h&&h!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),l&&u&&(!h||!Xs(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=s.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return bd(t.default,{Component:f,route:l});const h=d.props[u],g=h?h===!0?l.params:typeof h=="function"?h(l):h:null,m=Zl(f,ot({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return bd(t.default,{Component:m,route:l})||m}}});function bd(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const $v=jv;function Kv(n){const e=Nv(n.routes,n),t=n.parseQuery||kv,i=n.stringifyQuery||Sd,s=n.history,r=fr(),o=fr(),a=fr(),c=tg(mi);let l=mi;Ls&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ga.bind(null,F=>""+F),d=Ga.bind(null,av),f=Ga.bind(null,Yr);function h(F,re){let ae,ce;return vp(F)?(ae=e.getRecordMatcher(F),ce=re):ce=F,e.addRoute(ce,ae)}function g(F){const re=e.getRecordMatcher(F);re&&e.removeRoute(re)}function _(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function p(F,re){if(re=ot({},re||c.value),typeof F=="string"){const x=Wa(t,F,re.path),ie=e.resolve({path:x.path},re),K=s.createHref(x.fullPath);return ot(x,ie,{params:f(ie.params),hash:Yr(x.hash),redirectedFrom:void 0,href:K})}let ae;if(F.path!=null)ae=ot({},F,{path:Wa(t,F.path,re.path).path});else{const x=ot({},F.params);for(const ie in x)x[ie]==null&&delete x[ie];ae=ot({},F,{params:d(x)}),re.params=d(re.params)}const ce=e.resolve(ae,re),Ue=F.hash||"";ce.params=u(f(ce.params));const w=uv(i,ot({},F,{hash:sv(Ue),path:ce.path})),R=s.createHref(w);return ot({fullPath:w,hash:Ue,query:i===Sd?zv(F.query):F.query||{}},ce,{redirectedFrom:void 0,href:R})}function A(F){return typeof F=="string"?Wa(t,F,c.value.path):ot({},F)}function b(F,re){if(l!==F)return qs(8,{from:re,to:F})}function S(F){return C(F)}function L(F){return S(ot(A(F),{replace:!0}))}function P(F){const re=F.matched[F.matched.length-1];if(re&&re.redirect){const{redirect:ae}=re;let ce=typeof ae=="function"?ae(F):ae;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=A(ce):{path:ce},ce.params={}),ot({query:F.query,hash:F.hash,params:ce.path!=null?{}:F.params},ce)}}function C(F,re){const ae=l=p(F),ce=c.value,Ue=F.state,w=F.force,R=F.replace===!0,x=P(ae);if(x)return C(ot(A(x),{state:typeof x=="object"?ot({},Ue,x.state):Ue,force:w,replace:R}),re||ae);const ie=ae;ie.redirectedFrom=re;let K;return!w&&dv(i,ce,ae)&&(K=qs(16,{to:ie,from:ce}),Re(ce,ce,!0,!1)),(K?Promise.resolve(K):y(ie,ce)).catch(q=>jn(q)?jn(q,2)?q:xe(q):V(q,ie,ce)).then(q=>{if(q){if(jn(q,2))return C(ot({replace:R},A(q.to),{state:typeof q.to=="object"?ot({},Ue,q.to.state):Ue,force:w}),re||ie)}else q=U(ie,ce,!0,R,Ue);return D(ie,ce,q),q})}function N(F,re){const ae=b(F,re);return ae?Promise.reject(ae):Promise.resolve()}function T(F){const re=se.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(F):F()}function y(F,re){let ae;const[ce,Ue,w]=Zv(F,re);ae=Xa(ce.reverse(),"beforeRouteLeave",F,re);for(const x of ce)x.leaveGuards.forEach(ie=>{ae.push(Ai(ie,F,re))});const R=N.bind(null,F,re);return ae.push(R),ye(ae).then(()=>{ae=[];for(const x of r.list())ae.push(Ai(x,F,re));return ae.push(R),ye(ae)}).then(()=>{ae=Xa(Ue,"beforeRouteUpdate",F,re);for(const x of Ue)x.updateGuards.forEach(ie=>{ae.push(Ai(ie,F,re))});return ae.push(R),ye(ae)}).then(()=>{ae=[];for(const x of w)if(x.beforeEnter)if(In(x.beforeEnter))for(const ie of x.beforeEnter)ae.push(Ai(ie,F,re));else ae.push(Ai(x.beforeEnter,F,re));return ae.push(R),ye(ae)}).then(()=>(F.matched.forEach(x=>x.enterCallbacks={}),ae=Xa(w,"beforeRouteEnter",F,re,T),ae.push(R),ye(ae))).then(()=>{ae=[];for(const x of o.list())ae.push(Ai(x,F,re));return ae.push(R),ye(ae)}).catch(x=>jn(x,8)?x:Promise.reject(x))}function D(F,re,ae){a.list().forEach(ce=>T(()=>ce(F,re,ae)))}function U(F,re,ae,ce,Ue){const w=b(F,re);if(w)return w;const R=re===mi,x=Ls?history.state:{};ae&&(ce||R?s.replace(F.fullPath,ot({scroll:R&&x&&x.scroll},Ue)):s.push(F.fullPath,Ue)),c.value=F,Re(F,re,ae,R),xe()}let B;function Q(){B||(B=s.listen((F,re,ae)=>{if(!pe.listening)return;const ce=p(F),Ue=P(ce);if(Ue){C(ot(Ue,{replace:!0,force:!0}),ce).catch(Dr);return}l=ce;const w=c.value;Ls&&xv(dd(w.fullPath,ae.delta),Ea()),y(ce,w).catch(R=>jn(R,12)?R:jn(R,2)?(C(ot(A(R.to),{force:!0}),ce).then(x=>{jn(x,20)&&!ae.delta&&ae.type===jr.pop&&s.go(-1,!1)}).catch(Dr),Promise.reject()):(ae.delta&&s.go(-ae.delta,!1),V(R,ce,w))).then(R=>{R=R||U(ce,w,!1),R&&(ae.delta&&!jn(R,8)?s.go(-ae.delta,!1):ae.type===jr.pop&&jn(R,20)&&s.go(-1,!1)),D(ce,w,R)}).catch(Dr)}))}let ne=fr(),Z=fr(),j;function V(F,re,ae){xe(F);const ce=Z.list();return ce.length?ce.forEach(Ue=>Ue(F,re,ae)):console.error(F),Promise.reject(F)}function me(){return j&&c.value!==mi?Promise.resolve():new Promise((F,re)=>{ne.add([F,re])})}function xe(F){return j||(j=!F,Q(),ne.list().forEach(([re,ae])=>F?ae(F):re()),ne.reset()),F}function Re(F,re,ae,ce){const{scrollBehavior:Ue}=n;if(!Ls||!Ue)return Promise.resolve();const w=!ae&&Sv(dd(F.fullPath,0))||(ce||!ae)&&history.state&&history.state.scroll||null;return Th().then(()=>Ue(F,re,w)).then(R=>R&&vv(R)).catch(R=>V(R,F,re))}const Le=F=>s.go(F);let Je;const se=new Set,pe={currentRoute:c,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:S,replace:L,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:me,install(F){const re=this;F.component("RouterLink",Xv),F.component("RouterView",$v),F.config.globalProperties.$router=re,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Os(c)}),Ls&&!Je&&c.value===mi&&(Je=!0,S(s.location).catch(Ue=>{}));const ae={};for(const Ue in mi)Object.defineProperty(ae,Ue,{get:()=>c.value[Ue],enumerable:!0});F.provide(Ql,re),F.provide(yp,xh(ae)),F.provide(Gc,c);const ce=F.unmount;se.add(F),F.unmount=function(){se.delete(F),se.size<1&&(l=mi,B&&B(),B=null,c.value=mi,Je=!1,j=!1),ce()}}};function ye(F){return F.reduce((re,ae)=>re.then(()=>T(ae)),Promise.resolve())}return pe}function Zv(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(l=>Xs(l,a))?i.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(l=>Xs(l,c))||s.push(c))}return[t,i,s]}const xn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Jv={setup(){const n="ontouchstart"in window||navigator.maxTouchPoints>0,e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,t=zr(!1),i=zr((window.innerWidth<=768||e)&&n),s=()=>{i.value=(window.innerWidth<=768||e)&&n},r=()=>{t.value=!1};xa(()=>{window.addEventListener("resize",s),window.addEventListener("orientationchange",s)}),Sa(()=>{window.removeEventListener("resize",s),window.removeEventListener("orientationchange",s)});const o=()=>{t.value=!t.value};return Lr(t,a=>{a?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")}),{mobileMenuOpen:t,toggleMobileMenu:o,closeMobileMenu:r}}},Qv={class:"header"},e0={class:"container"},t0={class:"nav"},n0={key:0,class:"mobile-menu"},i0={class:"mobile-menu-content"};function s0(n,e,t,i,s,r){const o=Hs("RouterLink");return _t(),Mt("header",Qv,[fe("div",e0,[je(o,{to:"/",class:"logo"},{default:yt(()=>e[2]||(e[2]=[At("ASpan")])),_:1}),fe("nav",t0,[je(o,{to:"/",class:"nav-link"},{default:yt(()=>e[3]||(e[3]=[At(" Главная ")])),_:1}),je(o,{to:"/microlessons",class:"nav-link"},{default:yt(()=>e[4]||(e[4]=[At("Микроуроки")])),_:1}),je(o,{to:"/islands",class:"nav-link"},{default:yt(()=>e[5]||(e[5]=[At("Острова")])),_:1}),je(o,{to:"/volunteer",class:"nav-link"},{default:yt(()=>e[6]||(e[6]=[At("Волонтерство")])),_:1}),je(o,{to:"/hackathon",class:"nav-link"},{default:yt(()=>e[7]||(e[7]=[At("Хакатон")])),_:1}),je(o,{to:"/about-us",class:"nav-link"},{default:yt(()=>e[8]||(e[8]=[At("О нас")])),_:1})]),fe("button",{class:"mobile-menu-button",onClick:e[0]||(e[0]=(...a)=>i.toggleMobileMenu&&i.toggleMobileMenu(...a))},"☰")]),je(kc,{name:"mobile-menu"},{default:yt(()=>[i.mobileMenuOpen?(_t(),Mt("div",n0,[fe("button",{class:"close-button",onClick:e[1]||(e[1]=(...a)=>i.toggleMobileMenu&&i.toggleMobileMenu(...a))},"×"),fe("div",i0,[je(o,{to:"/",class:"mobile-menu-item",onClick:i.closeMobileMenu},{default:yt(()=>e[9]||(e[9]=[At("Главная")])),_:1},8,["onClick"]),je(o,{to:"/microlessons",class:"mobile-menu-item",onClick:i.closeMobileMenu},{default:yt(()=>e[10]||(e[10]=[At("Микроуроки")])),_:1},8,["onClick"]),je(o,{to:"/islands",class:"mobile-menu-item",onClick:i.closeMobileMenu},{default:yt(()=>e[11]||(e[11]=[At("Острова")])),_:1},8,["onClick"]),je(o,{to:"/volunteer",class:"mobile-menu-item",onClick:i.closeMobileMenu},{default:yt(()=>e[12]||(e[12]=[At("Волонтерство")])),_:1},8,["onClick"]),je(o,{to:"/hackathon",class:"mobile-menu-item",onClick:i.closeMobileMenu},{default:yt(()=>e[13]||(e[13]=[At("Хакатон")])),_:1},8,["onClick"]),je(o,{to:"/about-us",class:"mobile-menu-item",onClick:i.closeMobileMenu},{default:yt(()=>e[14]||(e[14]=[At("О нас")])),_:1},8,["onClick"])])])):rp("",!0)]),_:1})])}const r0=xn(Jv,[["render",s0],["__scopeId","data-v-ce9b943d"]]),o0="/aspan_web/assets/instagram-icon.png",a0="/aspan_web/assets/whatsapp-icon.png",c0={data(){return{currentYear:new Date().getFullYear()}}},l0={class:"main-footer"},u0={class:"footer-navigation"},d0={class:"footer-credit"};function f0(n,e,t,i,s,r){const o=Hs("RouterLink");return _t(),Mt("footer",l0,[e[4]||(e[4]=Ni('<div class="social-links" data-v-99be3d32><a href="https://www.instagram.com/aspanapp/" target="_blank" data-v-99be3d32><img src="'+o0+'" alt="Instagram" data-v-99be3d32></a><a href="https://wa.me/77473889664" target="_blank" data-v-99be3d32><img src="'+a0+'" alt="WhatsApp" data-v-99be3d32></a></div>',1)),fe("ul",u0,[fe("li",null,[je(o,{to:"/",class:"footer-element"},{default:yt(()=>e[0]||(e[0]=[At("Главная")])),_:1})]),fe("li",null,[je(o,{to:"/about-us",class:"footer-element"},{default:yt(()=>e[1]||(e[1]=[At("О нас")])),_:1})]),fe("li",null,[je(o,{to:"/terms-of-use",class:"footer-element"},{default:yt(()=>e[2]||(e[2]=[At("Условия использования")])),_:1})]),fe("li",null,[je(o,{to:"/privacy-policy",class:"footer-element"},{default:yt(()=>e[3]||(e[3]=[At("Политика конфиденциальности")])),_:1})])]),fe("p",d0,"ASpan © "+pn(s.currentYear),1)])}const h0=xn(c0,[["render",f0],["__scopeId","data-v-99be3d32"]]),p0={components:{Header:r0,Footer:h0}};function m0(n,e,t,i,s,r){const o=Hs("Header"),a=Hs("RouterView"),c=Hs("Footer");return _t(),Mt(kt,null,[je(o),fe("main",null,[je(a)]),je(c)],64)}const g0=xn(p0,[["render",m0]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eu="173",_0=0,Ad=1,v0=2,Ep=1,x0=2,ti=3,ui=0,Qt=1,On=2,Ii=0,zs=1,wd=2,Rd=3,Cd=4,S0=5,ss=100,M0=101,y0=102,E0=103,T0=104,b0=200,A0=201,w0=202,R0=203,Wc=204,Xc=205,C0=206,P0=207,L0=208,I0=209,D0=210,U0=211,N0=212,F0=213,O0=214,qc=0,Yc=1,jc=2,Ys=3,$c=4,Kc=5,Zc=6,Jc=7,Tp=0,B0=1,H0=2,Di=0,k0=1,z0=2,V0=3,tu=4,G0=5,W0=6,X0=7,Pd="attached",q0="detached",bp=300,js=301,$s=302,Qc=303,el=304,Ta=306,Ks=1e3,Ci=1001,sa=1002,jt=1003,Ap=1004,Tr=1005,an=1006,Go=1007,ri=1008,di=1009,wp=1010,Rp=1011,$r=1012,nu=1013,us=1014,Rn=1015,to=1016,iu=1017,su=1018,Zs=1020,Cp=35902,Pp=1021,Lp=1022,gn=1023,Ip=1024,Dp=1025,Vs=1026,Js=1027,ru=1028,ou=1029,Up=1030,au=1031,cu=1033,Wo=33776,Xo=33777,qo=33778,Yo=33779,tl=35840,nl=35841,il=35842,sl=35843,rl=36196,ol=37492,al=37496,cl=37808,ll=37809,ul=37810,dl=37811,fl=37812,hl=37813,pl=37814,ml=37815,gl=37816,_l=37817,vl=37818,xl=37819,Sl=37820,Ml=37821,jo=36492,yl=36494,El=36495,Np=36283,Tl=36284,bl=36285,Al=36286,Kr=2300,Zr=2301,qa=2302,Ld=2400,Id=2401,Dd=2402,Y0=2500,j0=0,Fp=1,wl=2,$0=3200,K0=3201,Op=0,Z0=1,Ri="",Pt="srgb",Kt="srgb-linear",ra="linear",dt="srgb",ms=7680,Ud=519,J0=512,Q0=513,ex=514,Bp=515,tx=516,nx=517,ix=518,sx=519,Rl=35044,Nd="300 es",oi=2e3,oa=2001;class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fd=1234567;const Nr=Math.PI/180,Qs=180/Math.PI;function Pn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function lu(n,e){return(n%e+e)%e}function rx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function ox(n,e,t){return n!==e?(t-n)/(e-n):0}function Fr(n,e,t){return(1-t)*n+t*e}function ax(n,e,t,i){return Fr(n,e,1-Math.exp(-t*i))}function cx(n,e=1){return e-Math.abs(lu(n,e*2)-e)}function lx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ux(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function dx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function fx(n,e){return n+Math.random()*(e-n)}function hx(n){return n*(.5-Math.random())}function px(n){n!==void 0&&(Fd=n);let e=Fd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mx(n){return n*Nr}function gx(n){return n*Qs}function _x(n){return(n&n-1)===0&&n!==0}function vx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function xx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Sx(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),h=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*h,a*l);break;case"YXY":n.set(c*h,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*h,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function An(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Mx={DEG2RAD:Nr,RAD2DEG:Qs,generateUUID:Pn,clamp:$e,euclideanModulo:lu,mapLinear:rx,inverseLerp:ox,lerp:Fr,damp:ax,pingpong:cx,smoothstep:lx,smootherstep:ux,randInt:dx,randFloat:fx,randFloatSpread:hx,seededRandom:px,degToRad:mx,radToDeg:gx,isPowerOfTwo:_x,ceilPowerOfTwo:vx,floorPowerOfTwo:xx,setQuaternionFromProperEuler:Sx,normalize:lt,denormalize:An};class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,i,s,r,o,a,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],_=s[0],m=s[3],p=s[6],A=s[1],b=s[4],S=s[7],L=s[2],P=s[5],C=s[8];return r[0]=o*_+a*A+c*L,r[3]=o*m+a*b+c*P,r[6]=o*p+a*S+c*C,r[1]=l*_+u*A+d*L,r[4]=l*m+u*b+d*P,r[7]=l*p+u*S+d*C,r[2]=f*_+h*A+g*L,r[5]=f*m+h*b+g*P,r[8]=f*p+h*S+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*r,h=l*r-o*c,g=t*d+i*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=h*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ya.makeScale(e,t)),this}rotate(e){return this.premultiply(Ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ya=new qe;function Hp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yx(){const n=Jr("canvas");return n.style.display="block",n}const Od={};function Is(n){n in Od||(Od[n]=!0,console.warn(n))}function Ex(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Tx(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bx(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Bd=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hd=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ax(){const n={enabled:!0,workingColorSpace:Kt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?ra:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Kt]:{primaries:e,whitePoint:i,transfer:ra,toXYZ:Bd,fromXYZ:Hd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Bd,fromXYZ:Hd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),n}const Qe=Ax();function ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let gs;class wx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gs===void 0&&(gs=Jr("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=gs}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ci(t[i]/255)*255):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rx=0;class kp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ja(s[o].image)):r.push(ja(s[o]))}else r=ja(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cx=0;class Lt extends sr{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Ci,s=Ci,r=an,o=ri,a=gn,c=di,l=Lt.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Pn(),this.name="",this.source=new kp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ks:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ks:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=bp;Lt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,s=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,S=(h+1)/2,L=(p+1)/2,P=(u+f)/4,C=(d+_)/4,N=(g+m)/4;return b>S&&b>L?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=P/i,r=C/i):S>L?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=P/s,r=N/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=C/r,s=N/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(d-_)/A,this.z=(f-u)/A,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Px extends sr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Lt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new kp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends Px{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class zp extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lx extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==f||l!==h||u!==g){let m=1-a;const p=c*f+l*h+u*g+d*_,A=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const L=Math.sqrt(b),P=Math.atan2(L,p*A);m=Math.sin(m*P)/L,a=Math.sin(a*P)/L}const S=a*A;if(c=c*m+f*S,l=l*m+h*S,u=u*m+g*S,d=d*m+_*S,m===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=L,l*=L,u*=L,d*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],g=r[o+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),f=c(i/2),h=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $a.copy(this).projectOnVector(e),this.sub($a)}reflect(e){return this.sub($a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new z,kd=new ki;class hi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(e.matrixWorld),this.union(fo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),ho.subVectors(this.max,hr),_s.subVectors(e.a,hr),vs.subVectors(e.b,hr),xs.subVectors(e.c,hr),gi.subVectors(vs,_s),_i.subVectors(xs,vs),Yi.subVectors(_s,xs);let t=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Yi.z,Yi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Yi.z,0,-Yi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Yi.y,Yi.x,0];return!Ka(t,_s,vs,xs,ho)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,_s,vs,xs,ho))?!1:(po.crossVectors(gi,_i),t=[po.x,po.y,po.z],Ka(t,_s,vs,xs,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $n=[new z,new z,new z,new z,new z,new z,new z,new z],yn=new z,fo=new hi,_s=new z,vs=new z,xs=new z,gi=new z,_i=new z,Yi=new z,hr=new z,ho=new z,po=new z,ji=new z;function Ka(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ji.fromArray(n,r);const a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),c=e.dot(ji),l=t.dot(ji),u=i.dot(ji);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ix=new hi,pr=new z,Za=new z;class zn{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ix.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(pr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(Za)),this.expandByPoint(pr.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new z,Ja=new z,mo=new z,vi=new z,Qa=new z,go=new z,ec=new z;class no{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ja.copy(e).add(t).multiplyScalar(.5),mo.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(Ja);const r=e.distanceTo(t)*.5,o=-this.direction.dot(mo),a=vi.dot(this.direction),c=-vi.dot(mo),l=vi.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=r*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ja).addScaledVector(mo,f),h}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),s=Kn.dot(Kn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,i,s,r){Qa.subVectors(t,e),go.subVectors(i,e),ec.crossVectors(Qa,go);let o=this.direction.dot(ec),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const c=a*this.direction.dot(go.crossVectors(vi,go));if(c<0)return null;const l=a*this.direction.dot(Qa.cross(vi));if(l<0||c+l>o)return null;const u=-a*vi.dot(ec);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(e,t,i,s,r,o,a,c,l,u,d,f,h,g,_,m){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,d,f,h,g,_,m)}set(e,t,i,s,r,o,a,c,l,u,d,f,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ss.setFromMatrixColumn(e,0).length(),r=1/Ss.setFromMatrixColumn(e,1).length(),o=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,h=c*d,g=l*u,_=l*d;t[0]=f+_*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,h=c*d,g=l*u,_=l*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,h=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*c,h=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+_,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dx,e,Ux)}lookAt(e,t,i){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),xi.crossVectors(i,tn),xi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),xi.crossVectors(i,tn)),xi.normalize(),_o.crossVectors(tn,xi),s[0]=xi.x,s[4]=_o.x,s[8]=tn.x,s[1]=xi.y,s[5]=_o.y,s[9]=tn.y,s[2]=xi.z,s[6]=_o.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],A=i[3],b=i[7],S=i[11],L=i[15],P=s[0],C=s[4],N=s[8],T=s[12],y=s[1],D=s[5],U=s[9],B=s[13],Q=s[2],ne=s[6],Z=s[10],j=s[14],V=s[3],me=s[7],xe=s[11],Re=s[15];return r[0]=o*P+a*y+c*Q+l*V,r[4]=o*C+a*D+c*ne+l*me,r[8]=o*N+a*U+c*Z+l*xe,r[12]=o*T+a*B+c*j+l*Re,r[1]=u*P+d*y+f*Q+h*V,r[5]=u*C+d*D+f*ne+h*me,r[9]=u*N+d*U+f*Z+h*xe,r[13]=u*T+d*B+f*j+h*Re,r[2]=g*P+_*y+m*Q+p*V,r[6]=g*C+_*D+m*ne+p*me,r[10]=g*N+_*U+m*Z+p*xe,r[14]=g*T+_*B+m*j+p*Re,r[3]=A*P+b*y+S*Q+L*V,r[7]=A*C+b*D+S*ne+L*me,r[11]=A*N+b*U+S*Z+L*xe,r[15]=A*T+b*B+S*j+L*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*d-s*l*d-r*a*f+i*l*f+s*a*h-i*c*h)+_*(+t*c*h-t*l*f+r*o*f-s*o*h+s*l*u-r*c*u)+m*(+t*l*d-t*a*h-r*o*d+i*o*h+r*a*u-i*l*u)+p*(-s*a*u-t*c*d+t*a*f+s*o*d-i*o*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],A=d*m*l-_*f*l+_*c*h-a*m*h-d*c*p+a*f*p,b=g*f*l-u*m*l-g*c*h+o*m*h+u*c*p-o*f*p,S=u*_*l-g*d*l+g*a*h-o*_*h-u*a*p+o*d*p,L=g*d*c-u*_*c-g*a*f+o*_*f+u*a*m-o*d*m,P=t*A+i*b+s*S+r*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=A*C,e[1]=(_*f*r-d*m*r-_*s*h+i*m*h+d*s*p-i*f*p)*C,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*p+i*c*p)*C,e[3]=(d*c*r-a*f*r-d*s*l+i*f*l+a*s*h-i*c*h)*C,e[4]=b*C,e[5]=(u*m*r-g*f*r+g*s*h-t*m*h-u*s*p+t*f*p)*C,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*C,e[7]=(o*f*r-u*c*r+u*s*l-t*f*l-o*s*h+t*c*h)*C,e[8]=S*C,e[9]=(g*d*r-u*_*r-g*i*h+t*_*h+u*i*p-t*d*p)*C,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*p+t*a*p)*C,e[11]=(u*a*r-o*d*r-u*i*l+t*d*l+o*i*h-t*a*h)*C,e[12]=L*C,e[13]=(u*_*s-g*d*s+g*i*f-t*_*f-u*i*m+t*d*m)*C,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*C,e[15]=(o*d*s-u*a*s+u*i*c-t*d*c-o*i*f+t*a*f)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,f=r*l,h=r*u,g=r*d,_=o*u,m=o*d,p=a*d,A=c*l,b=c*u,S=c*d,L=i.x,P=i.y,C=i.z;return s[0]=(1-(_+p))*L,s[1]=(h+S)*L,s[2]=(g-b)*L,s[3]=0,s[4]=(h-S)*P,s[5]=(1-(f+p))*P,s[6]=(m+A)*P,s[7]=0,s[8]=(g+b)*C,s[9]=(m-A)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ss.set(s[0],s[1],s[2]).length();const o=Ss.set(s[4],s[5],s[6]).length(),a=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);const l=1/r,u=1/o,d=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,t.setFromRotationMatrix(En),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=oi){const c=this.elements,l=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let h,g;if(a===oi)h=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===oa)h=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=oi){const c=this.elements,l=1/(t-e),u=1/(i-s),d=1/(o-r),f=(t+e)*l,h=(i+s)*u;let g,_;if(a===oi)g=(o+r)*d,_=-2*d;else if(a===oa)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ss=new z,En=new We,Dx=new z(0,0,0),Ux=new z(1,1,1),xi=new z,_o=new z,tn=new z,zd=new We,Vd=new ki;class kn{constructor(e=0,t=0,i=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class uu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nx=0;const Gd=new z,Ms=new ki,Zn=new We,vo=new z,mr=new z,Fx=new z,Ox=new ki,Wd=new z(1,0,0),Xd=new z(0,1,0),qd=new z(0,0,1),Yd={type:"added"},Bx={type:"removed"},ys={type:"childadded",child:null},tc={type:"childremoved",child:null};class vt extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new z,t=new kn,i=new ki,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new qe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(Wd,e)}rotateY(e){return this.rotateOnAxis(Xd,e)}rotateZ(e){return this.rotateOnAxis(qd,e)}translateOnAxis(e,t){return Gd.copy(e).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wd,e)}translateY(e){return this.translateOnAxis(Xd,e)}translateZ(e){return this.translateOnAxis(qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vo.copy(e):vo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(mr,vo,this.up):Zn.lookAt(vo,mr,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(Zn),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yd),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bx),tc.child=e,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yd),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,Fx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Ox,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}vt.DEFAULT_UP=new z(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new z,Jn=new z,nc=new z,Qn=new z,Es=new z,Ts=new z,jd=new z,ic=new z,sc=new z,rc=new z,oc=new it,ac=new it,cc=new it;class wn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Tn.subVectors(e,t),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Tn.subVectors(s,t),Jn.subVectors(i,t),nc.subVectors(e,t);const o=Tn.dot(Tn),a=Tn.dot(Jn),c=Tn.dot(nc),l=Jn.dot(Jn),u=Jn.dot(nc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-h-g,g,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qn.x),c.addScaledVector(o,Qn.y),c.addScaledVector(a,Qn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return oc.setScalar(0),ac.setScalar(0),cc.setScalar(0),oc.fromBufferAttribute(e,t),ac.fromBufferAttribute(e,i),cc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(oc,r.x),o.addScaledVector(ac,r.y),o.addScaledVector(cc,r.z),o}static isFrontFacing(e,t,i,s){return Tn.subVectors(i,t),Jn.subVectors(e,t),Tn.cross(Jn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Tn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Es.subVectors(s,i),Ts.subVectors(r,i),ic.subVectors(e,i);const c=Es.dot(ic),l=Ts.dot(ic);if(c<=0&&l<=0)return t.copy(i);sc.subVectors(e,s);const u=Es.dot(sc),d=Ts.dot(sc);if(u>=0&&d<=u)return t.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Es,o);rc.subVectors(e,r);const h=Es.dot(rc),g=Ts.dot(rc);if(g>=0&&h<=g)return t.copy(r);const _=h*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ts,a);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return jd.subVectors(r,s),a=(d-u)/(d-u+(h-g)),t.copy(s).addScaledVector(jd,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(Es,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},xo={h:0,s:0,l:0};function lc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Qe.workingColorSpace){if(e=lu(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=lc(o,r,e+1/3),this.g=lc(o,r,e),this.b=lc(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=Pt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const i=Vp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Qe.fromWorkingColorSpace(Ot.copy(this),e),Math.round($e(Ot.r*255,0,255))*65536+Math.round($e(Ot.g*255,0,255))*256+Math.round($e(Ot.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ot.copy(this),t);const i=Ot.r,s=Ot.g,r=Ot.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Pt){Qe.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,s=Ot.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(xo);const i=Fr(Si.h,xo.h,t),s=Fr(Si.s,xo.s,t),r=Fr(Si.l,xo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new ze;ze.NAMES=Vp;let Hx=0;class Hn extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=zs,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=Xc,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wc&&(i.blendSrc=this.blendSrc),this.blendDst!==Xc&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ud&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class os extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Tp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new z,So=new Ze;let kx=0;class $t{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rl,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)So.fromBufferAttribute(this,t),So.applyMatrix3(e),this.setXY(t,So.x,So.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=An(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rl&&(e.usage=this.usage),e}}class Gp extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wp extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class li extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}}let zx=0;const fn=new We,uc=new vt,bs=new z,nn=new hi,gr=new hi,Ct=new z;class Vn extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hp(e)?Wp:Gp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,i){return fn.makeTranslation(e,t,i),this.applyMatrix4(fn),this}scale(e,t,i){return fn.makeScale(e,t,i),this.applyMatrix4(fn),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new li(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(nn.min,gr.min),nn.expandByPoint(Ct),Ct.addVectors(nn.max,gr.max),nn.expandByPoint(Ct)):(nn.expandByPoint(gr.min),nn.expandByPoint(gr.max))}nn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ct));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ct.fromBufferAttribute(a,l),c&&(bs.fromBufferAttribute(e,l),Ct.add(bs)),s=Math.max(s,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new z,c[N]=new z;const l=new z,u=new z,d=new z,f=new Ze,h=new Ze,g=new Ze,_=new z,m=new z;function p(N,T,y){l.fromBufferAttribute(i,N),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,y),f.fromBufferAttribute(r,N),h.fromBufferAttribute(r,T),g.fromBufferAttribute(r,y),u.sub(l),d.sub(l),h.sub(f),g.sub(f);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(D),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[N].add(_),a[T].add(_),a[y].add(_),c[N].add(m),c[T].add(m),c[y].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,T=A.length;N<T;++N){const y=A[N],D=y.start,U=y.count;for(let B=D,Q=D+U;B<Q;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new z,S=new z,L=new z,P=new z;function C(N){L.fromBufferAttribute(s,N),P.copy(L);const T=a[N];b.copy(T),b.sub(L.multiplyScalar(L.dot(T))).normalize(),S.crossVectors(P,T);const D=S.dot(c[N])<0?-1:1;o.setXYZW(N,b.x,b.y,b.z,D)}for(let N=0,T=A.length;N<T;++N){const y=A[N],D=y.start,U=y.count;for(let B=D,Q=D+U;B<Q;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new z,r=new z,o=new z,a=new z,c=new z,l=new z,u=new z,d=new z;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let h=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?h=c[_]*a.data.stride+a.offset:h=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new $t(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $d=new We,$i=new no,Mo=new zn,Kd=new z,yo=new z,Eo=new z,To=new z,dc=new z,bo=new z,Zd=new z,Ao=new z;class cn extends vt{constructor(e=new Vn,t=new os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(dc.fromBufferAttribute(d,e),o?bo.addScaledVector(dc,u):bo.addScaledVector(dc.sub(t),u))}t.add(bo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(Mo.containsPoint($i.origin)===!1&&($i.intersectSphere(Mo,Kd)===null||$i.origin.distanceToSquared(Kd)>(e.far-e.near)**2))&&($d.copy(r).invert(),$i.copy(e.ray).applyMatrix4($d),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],A=Math.max(m.start,h.start),b=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=A,L=b;S<L;S+=3){const P=a.getX(S),C=a.getX(S+1),N=a.getX(S+2);s=wo(this,p,e,i,l,u,d,P,C,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const A=a.getX(m),b=a.getX(m+1),S=a.getX(m+2);s=wo(this,o,e,i,l,u,d,A,b,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],A=Math.max(m.start,h.start),b=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let S=A,L=b;S<L;S+=3){const P=S,C=S+1,N=S+2;s=wo(this,p,e,i,l,u,d,P,C,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const A=m,b=m+1,S=m+2;s=wo(this,o,e,i,l,u,d,A,b,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Vx(n,e,t,i,s,r,o,a){let c;if(e.side===Qt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===ui,a),c===null)return null;Ao.copy(a),Ao.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ao);return l<t.near||l>t.far?null:{distance:l,point:Ao.clone(),object:n}}function wo(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,yo),n.getVertexPosition(c,Eo),n.getVertexPosition(l,To);const u=Vx(n,e,t,i,yo,Eo,To,Zd);if(u){const d=new z;wn.getBarycoord(Zd,yo,Eo,To,d),s&&(u.uv=wn.getInterpolatedAttribute(s,a,c,l,d,new Ze)),r&&(u.uv1=wn.getInterpolatedAttribute(r,a,c,l,d,new Ze)),o&&(u.normal=wn.getInterpolatedAttribute(o,a,c,l,d,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new z,materialIndex:0};wn.getNormal(yo,Eo,To,f.normal),u.face=f,u.barycoord=d}return u}class io extends Vn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new li(l,3)),this.setAttribute("normal",new li(u,3)),this.setAttribute("uv",new li(d,2));function g(_,m,p,A,b,S,L,P,C,N,T){const y=S/C,D=L/N,U=S/2,B=L/2,Q=P/2,ne=C+1,Z=N+1;let j=0,V=0;const me=new z;for(let xe=0;xe<Z;xe++){const Re=xe*D-B;for(let Le=0;Le<ne;Le++){const Je=Le*y-U;me[_]=Je*A,me[m]=Re*b,me[p]=Q,l.push(me.x,me.y,me.z),me[_]=0,me[m]=0,me[p]=P>0?1:-1,u.push(me.x,me.y,me.z),d.push(Le/C),d.push(1-xe/N),j+=1}}for(let xe=0;xe<N;xe++)for(let Re=0;Re<C;Re++){const Le=f+Re+ne*xe,Je=f+Re+ne*(xe+1),se=f+(Re+1)+ne*(xe+1),pe=f+(Re+1)+ne*xe;c.push(Le,Je,pe),c.push(Je,se,pe),V+=6}a.addGroup(h,V,T),h+=V,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=er(n[t]);for(const s in i)e[s]=i[s]}return e}function Gx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Wx={clone:er,merge:Xt};var Xx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xx,this.fragmentShader=qx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=Gx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qp extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new z,Jd=new Ze,Qd=new Ze;class Yt extends qp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,Jd,Qd),t.subVectors(Qd,Jd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const As=-90,ws=1;class Yx extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yt(As,ws,e,t);s.layers=this.layers,this.add(s);const r=new Yt(As,ws,e,t);r.layers=this.layers,this.add(r);const o=new Yt(As,ws,e,t);o.layers=this.layers,this.add(o);const a=new Yt(As,ws,e,t);a.layers=this.layers,this.add(a);const c=new Yt(As,ws,e,t);c.layers=this.layers,this.add(c);const l=new Yt(As,ws,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Yp extends Lt{constructor(e,t,i,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:js,super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jx extends ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Yp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new io(5,5,5),r=new Fi({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Ii});r.uniforms.tEquirect.value=t;const o=new cn(s,r),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=an),new Yx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class as extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $x={type:"move"};class fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new as,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new as,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new as,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($x)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new as;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class jp extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Kx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rl,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new z;class du{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=An(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new du(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ef=new z,tf=new it,nf=new it,Zx=new z,sf=new We,Ro=new z,hc=new zn,rf=new We,pc=new no;class Jx extends cn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Pd,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ro),this.boundingBox.expandByPoint(Ro)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ro),this.boundingSphere.expandByPoint(Ro)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hc.copy(this.boundingSphere),hc.applyMatrix4(s),e.ray.intersectsSphere(hc)!==!1&&(rf.copy(s).invert(),pc.copy(e.ray).applyMatrix4(rf),!(this.boundingBox!==null&&pc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Pd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===q0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;tf.fromBufferAttribute(s.attributes.skinIndex,e),nf.fromBufferAttribute(s.attributes.skinWeight,e),ef.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=nf.getComponent(r);if(o!==0){const a=tf.getComponent(r);sf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Zx.copy(ef).applyMatrix4(sf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $p extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Kp extends Lt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=jt,u=jt,d,f){super(null,o,a,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const of=new We,Qx=new We;class fu{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new We;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Qx;of.multiplyMatrices(a,t[r]),of.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new fu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Kp(t,e,e,gn,Rn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new $p),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Cl extends $t{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rs=new We,af=new We,Co=[],cf=new hi,eS=new We,_r=new cn,vr=new zn;class tS extends cn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,eS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rs),cf.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(cf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rs),vr.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(i),e.ray.intersectsSphere(vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rs),af.multiplyMatrices(i,Rs),_r.matrixWorld=af,_r.raycast(e,Co);for(let o=0,a=Co.length;o<a;o++){const c=Co[o];c.instanceId=r,c.object=this,t.push(c)}Co.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Kp(new Float32Array(s*this.count),s,this.count,ru,Rn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const mc=new z,nS=new z,iS=new qe;class ts{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=mc.subVectors(i,t).cross(nS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(mc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||iS.getNormalMatrix(e),s=this.coplanarPoint(mc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new zn,Po=new z;class hu{constructor(e=new ts,t=new ts,i=new ts,s=new ts,r=new ts,o=new ts){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],f=s[7],h=s[8],g=s[9],_=s[10],m=s[11],p=s[12],A=s[13],b=s[14],S=s[15];if(i[0].setComponents(c-r,f-l,m-h,S-p).normalize(),i[1].setComponents(c+r,f+l,m+h,S+p).normalize(),i[2].setComponents(c+o,f+u,m+g,S+A).normalize(),i[3].setComponents(c-o,f-u,m-g,S-A).normalize(),i[4].setComponents(c-a,f-d,m-_,S-b).normalize(),t===oi)i[5].setComponents(c+a,f+d,m+_,S+b).normalize();else if(t===oa)i[5].setComponents(a,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Po.x=s.normal.x>0?e.max.x:e.min.x,Po.y=s.normal.y>0?e.max.y:e.min.y,Po.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zp extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const aa=new z,ca=new z,lf=new We,xr=new no,Lo=new zn,gc=new z,uf=new z;class pu extends vt{constructor(e=new Vn,t=new Zp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)aa.fromBufferAttribute(t,s-1),ca.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=aa.distanceTo(ca);e.setAttribute("lineDistance",new li(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=r,e.ray.intersectsSphere(Lo)===!1)return;lf.copy(s).invert(),xr.copy(e.ray).applyMatrix4(lf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=l){const p=u.getX(_),A=u.getX(_+1),b=Io(this,e,xr,c,p,A,_);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=Io(this,e,xr,c,_,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=l){const p=Io(this,e,xr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Io(this,e,xr,c,g-1,h,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Io(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(aa.fromBufferAttribute(a,s),ca.fromBufferAttribute(a,r),t.distanceSqToSegment(aa,ca,gc,uf)>i)return;gc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(gc);if(!(l<e.near||l>e.far))return{distance:l,point:uf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const df=new z,ff=new z;class sS extends pu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)df.fromBufferAttribute(t,s),ff.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+df.distanceTo(ff);e.setAttribute("lineDistance",new li(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rS extends pu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Jp extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hf=new We,Pl=new no,Do=new zn,Uo=new z;class oS extends vt{constructor(e=new Vn,t=new Jp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),Do.radius+=r,e.ray.intersectsSphere(Do)===!1)return;hf.copy(s).invert(),Pl.copy(e.ray).applyMatrix4(hf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=f,_=h;g<_;g++){const m=l.getX(g);Uo.fromBufferAttribute(d,m),pf(Uo,m,c,s,e,t,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,_=h;g<_;g++)Uo.fromBufferAttribute(d,g),pf(Uo,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function pf(n,e,t,i,s,r,o){const a=Pl.distanceSqToPoint(n);if(a<t){const c=new z;Pl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Qp extends Lt{constructor(e,t,i,s,r,o,a,c,l,u=Vs){if(u!==Vs&&u!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Vs&&(i=us),i===void 0&&u===Js&&(i=Zs),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ba extends Vn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const A=p*f-o;for(let b=0;b<l;b++){const S=b*d-r;g.push(S,-A,0),_.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let A=0;A<a;A++){const b=A+l*p,S=A+l*(p+1),L=A+1+l*(p+1),P=A+1+l*p;h.push(b,S,P),h.push(S,L,P)}this.setIndex(h),this.setAttribute("position",new li(g,3)),this.setAttribute("normal",new li(_,3)),this.setAttribute("uv",new li(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.widthSegments,e.heightSegments)}}class mu extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Op,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gn extends mu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class aS extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cS extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function No(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function lS(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function uS(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function mf(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function em(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class so{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class dS extends so{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ld,endingEnd:Ld}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Id:r=e,a=2*t-i;break;case Dd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Id:o=e,c=2*i-t;break;case Dd:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}const l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,A=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,b=(-1-h)*m+(1.5+h)*_+.5*g,S=h*m-h*_;for(let L=0;L!==a;++L)r[L]=p*o[u+L]+A*o[l+L]+b*o[c+L]+S*o[d+L];return r}}class fS extends so{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(s-t),d=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*d+o[c+f]*u;return r}}class hS extends so{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=No(t,this.TimeBufferType),this.values=No(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:No(e.times,Array),values:No(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new hS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Kr:t=this.InterpolantFactoryMethodDiscrete;break;case Zr:t=this.InterpolantFactoryMethodLinear;break;case qa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return Zr;case this.InterpolantFactoryMethodSmooth:return qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&lS(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===qa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){const _=t[d+g];if(_!==t[f+g]||_!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Zr;class rr extends Wn{constructor(e,t,i){super(e,t,i)}}rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Kr;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;class tm extends Wn{}tm.prototype.ValueTypeName="color";class tr extends Wn{}tr.prototype.ValueTypeName="number";class pS extends so{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)ki.slerpFlat(r,0,o,l-a,o,l,c);return r}}class nr extends Wn{InterpolantFactoryMethodLinear(e){return new pS(this.times,this.values,this.getValueSize(),e)}}nr.prototype.ValueTypeName="quaternion";nr.prototype.InterpolantFactoryMethodSmooth=void 0;class or extends Wn{constructor(e,t,i){super(e,t,i)}}or.prototype.ValueTypeName="string";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Kr;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends Wn{}ir.prototype.ValueTypeName="vector";class mS{constructor(e="",t=-1,i=[],s=Y0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(_S(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Wn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=uS(c);c=mf(c,1,u),l=mf(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new tr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const d=u[1];let f=s[d];f||(s[d]=f=[]),f.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,f,h,g,_){if(h.length!==0){const m=[],p=[];em(h,m,p,g),m.length!==0&&_.push(new d(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const f=l[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const h={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)h[f[g].morphTargets[_]]=-1;for(const _ in h){const m=[],p=[];for(let A=0;A!==f[g].morphTargets.length;++A){const b=f[g];m.push(b.time),p.push(b.morphTarget===_?1:0)}s.push(new tr(".morphTargetInfluence["+_+"]",m,p))}c=h.length*o}else{const h=".bones["+t[d].name+"]";i(ir,h+".position",f,"pos",s),i(nr,h+".quaternion",f,"rot",s),i(ir,h+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function gS(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tr;case"vector":case"vector2":case"vector3":case"vector4":return ir;case"color":return tm;case"quaternion":return nr;case"bool":case"boolean":return rr;case"string":return or}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function _S(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=gS(n.type);if(n.times===void 0){const t=[],i=[];em(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Pi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class vS{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const h=l[d],g=l[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const xS=new vS;class ar{constructor(e){this.manager=e!==void 0?e:xS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ar.DEFAULT_MATERIAL_NAME="__DEFAULT";const ei={};class SS extends Error{constructor(e,t){super(e),this.response=t}}class nm extends ar{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Pi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:i,onError:s});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ei[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=f?parseInt(f):0,g=h!==0;let _=0;const m=new ReadableStream({start(p){A();function A(){d.read().then(({done:b,value:S})=>{if(b)p.close();else{_+=S.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let P=0,C=u.length;P<C;P++){const N=u[P];N.onProgress&&N.onProgress(L)}p.enqueue(S),A()}},b=>{p.error(b)})}}});return new Response(m)}else throw new SS(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return l.arrayBuffer().then(g=>h.decode(g))}}}).then(l=>{Pi.add(e,l);const u=ei[e];delete ei[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onLoad&&h.onLoad(l)}}).catch(l=>{const u=ei[e];if(u===void 0)throw this.manager.itemError(e),l;delete ei[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class MS extends ar{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Pi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Jr("img");function c(){u(),Pi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class yS extends ar{constructor(e){super(e)}load(e,t,i,s){const r=new Lt,o=new MS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Aa extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const _c=new We,gf=new z,_f=new z;class gu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hu,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(gf),_f.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_f),t.updateMatrixWorld(),_c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ES extends gu{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Qs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class TS extends Aa{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ES}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vf=new We,Sr=new z,vc=new z;class bS extends gu{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Sr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Sr),vc.copy(i.position),vc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(vc),i.updateMatrixWorld(),s.makeTranslation(-Sr.x,-Sr.y,-Sr.z),vf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vf)}}class AS extends Aa{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new bS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wa extends qp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wS extends gu{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _u extends Aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new wS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class im extends Aa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Or{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class RS extends ar{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Pi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Pi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Pi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Pi.add(e,c),r.manager.itemStart(e)}}class CS extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const vu="\\[\\]\\.:\\/",PS=new RegExp("["+vu+"]","g"),xu="[^"+vu+"]",LS="[^"+vu.replace("\\.","")+"]",IS=/((?:WC+[\/:])*)/.source.replace("WC",xu),DS=/(WCOD+)?/.source.replace("WCOD",LS),US=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xu),NS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xu),FS=new RegExp("^"+IS+DS+US+NS+"$"),OS=["material","materials","bones","map"];class BS{constructor(e,t,i){const s=i||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ut{constructor(e,t,i){this.path=t,this.parsedPath=i||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,i):new ut(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(PS,"")}static parseTrackName(e){const t=FS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);OS.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=BS;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const xf=new We;class HS{constructor(e,t,i=0,s=1/0){this.ray=new no(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new uu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xf),this}intersectObject(e,t=!0,i=[]){return Ll(e,this,i,t),i.sort(Sf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ll(e[s],this,i,t);return i.sort(Sf),i}}function Sf(n,e){return n.distance-e.distance}function Ll(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Ll(r[o],e,t,!0)}}function Mf(n,e,t,i){const s=kS(i);switch(t){case Pp:return n*e;case Ip:return n*e;case Dp:return n*e*2;case ru:return n*e/s.components*s.byteLength;case ou:return n*e/s.components*s.byteLength;case Up:return n*e*2/s.components*s.byteLength;case au:return n*e*2/s.components*s.byteLength;case Lp:return n*e*3/s.components*s.byteLength;case gn:return n*e*4/s.components*s.byteLength;case cu:return n*e*4/s.components*s.byteLength;case Wo:case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nl:case sl:return Math.max(n,16)*Math.max(e,8)/4;case tl:case il:return Math.max(n,8)*Math.max(e,8)/2;case rl:case ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ul:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case dl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case xl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case jo:case yl:case El:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Np:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bl:case Al:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kS(n){switch(n){case di:case wp:return{byteLength:1,components:1};case $r:case Rp:case to:return{byteLength:2,components:1};case iu:case su:return{byteLength:2,components:4};case us:case nu:case Rn:return{byteLength:4,components:1};case Cp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function zS(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],_=d[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const _=d[h];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var VS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GS=`#ifdef USE_ALPHAHASH
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
#endif`,WS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jS=`#ifdef USE_AOMAP
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
#endif`,$S=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KS=`#ifdef USE_BATCHING
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
#endif`,ZS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tM=`#ifdef USE_IRIDESCENCE
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
#endif`,nM=`#ifdef USE_BUMPMAP
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
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dM=`#define PI 3.141592653589793
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
} // validated`,fM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hM=`vec3 transformedNormal = objectNormal;
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
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vM="gl_FragColor = linearToOutputTexel( gl_FragColor );",xM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,EM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CM=`#ifdef USE_GRADIENTMAP
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
}`,PM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DM=`uniform bool receiveShadow;
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
#endif`,UM=`#ifdef USE_ENVMAP
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
#endif`,NM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HM=`PhysicalMaterial material;
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
#endif`,kM=`struct PhysicalMaterial {
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
}`,zM=`
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
#endif`,VM=`#if defined( RE_IndirectDiffuse )
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
#endif`,GM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZM=`#if defined( USE_POINTS_UV )
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
#endif`,JM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ey=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ty=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ny=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iy=`#ifdef USE_MORPHTARGETS
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
#endif`,sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ry=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uy=`#ifdef USE_NORMALMAP
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
#endif`,dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,my=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,My=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,by=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ay=`float getShadowMask() {
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
}`,wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ry=`#ifdef USE_SKINNING
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
#endif`,Cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Py=`#ifdef USE_SKINNING
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
#endif`,Ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ny=`#ifdef USE_TRANSMISSION
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
#endif`,Fy=`#ifdef USE_TRANSMISSION
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
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ky=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vy=`uniform sampler2D t2D;
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
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`#include <common>
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
}`,jy=`#if DEPTH_PACKING == 3200
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
}`,$y=`#define DISTANCE
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
}`,Ky=`#define DISTANCE
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
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`uniform float scale;
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
}`,eE=`uniform vec3 diffuse;
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
}`,tE=`#include <common>
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
}`,nE=`uniform vec3 diffuse;
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
}`,iE=`#define LAMBERT
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
}`,sE=`#define LAMBERT
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
}`,rE=`#define MATCAP
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
}`,oE=`#define MATCAP
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
}`,aE=`#define NORMAL
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
}`,cE=`#define NORMAL
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
}`,lE=`#define PHONG
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
}`,uE=`#define PHONG
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
}`,dE=`#define STANDARD
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
}`,fE=`#define STANDARD
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
}`,hE=`#define TOON
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
}`,pE=`#define TOON
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
}`,mE=`uniform float size;
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
}`,gE=`uniform vec3 diffuse;
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
}`,_E=`#include <common>
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
}`,vE=`uniform vec3 color;
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
}`,xE=`uniform float rotation;
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
}`,SE=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:VS,alphahash_pars_fragment:GS,alphamap_fragment:WS,alphamap_pars_fragment:XS,alphatest_fragment:qS,alphatest_pars_fragment:YS,aomap_fragment:jS,aomap_pars_fragment:$S,batching_pars_vertex:KS,batching_vertex:ZS,begin_vertex:JS,beginnormal_vertex:QS,bsdfs:eM,iridescence_fragment:tM,bumpmap_pars_fragment:nM,clipping_planes_fragment:iM,clipping_planes_pars_fragment:sM,clipping_planes_pars_vertex:rM,clipping_planes_vertex:oM,color_fragment:aM,color_pars_fragment:cM,color_pars_vertex:lM,color_vertex:uM,common:dM,cube_uv_reflection_fragment:fM,defaultnormal_vertex:hM,displacementmap_pars_vertex:pM,displacementmap_vertex:mM,emissivemap_fragment:gM,emissivemap_pars_fragment:_M,colorspace_fragment:vM,colorspace_pars_fragment:xM,envmap_fragment:SM,envmap_common_pars_fragment:MM,envmap_pars_fragment:yM,envmap_pars_vertex:EM,envmap_physical_pars_fragment:UM,envmap_vertex:TM,fog_vertex:bM,fog_pars_vertex:AM,fog_fragment:wM,fog_pars_fragment:RM,gradientmap_pars_fragment:CM,lightmap_pars_fragment:PM,lights_lambert_fragment:LM,lights_lambert_pars_fragment:IM,lights_pars_begin:DM,lights_toon_fragment:NM,lights_toon_pars_fragment:FM,lights_phong_fragment:OM,lights_phong_pars_fragment:BM,lights_physical_fragment:HM,lights_physical_pars_fragment:kM,lights_fragment_begin:zM,lights_fragment_maps:VM,lights_fragment_end:GM,logdepthbuf_fragment:WM,logdepthbuf_pars_fragment:XM,logdepthbuf_pars_vertex:qM,logdepthbuf_vertex:YM,map_fragment:jM,map_pars_fragment:$M,map_particle_fragment:KM,map_particle_pars_fragment:ZM,metalnessmap_fragment:JM,metalnessmap_pars_fragment:QM,morphinstance_vertex:ey,morphcolor_vertex:ty,morphnormal_vertex:ny,morphtarget_pars_vertex:iy,morphtarget_vertex:sy,normal_fragment_begin:ry,normal_fragment_maps:oy,normal_pars_fragment:ay,normal_pars_vertex:cy,normal_vertex:ly,normalmap_pars_fragment:uy,clearcoat_normal_fragment_begin:dy,clearcoat_normal_fragment_maps:fy,clearcoat_pars_fragment:hy,iridescence_pars_fragment:py,opaque_fragment:my,packing:gy,premultiplied_alpha_fragment:_y,project_vertex:vy,dithering_fragment:xy,dithering_pars_fragment:Sy,roughnessmap_fragment:My,roughnessmap_pars_fragment:yy,shadowmap_pars_fragment:Ey,shadowmap_pars_vertex:Ty,shadowmap_vertex:by,shadowmask_pars_fragment:Ay,skinbase_vertex:wy,skinning_pars_vertex:Ry,skinning_vertex:Cy,skinnormal_vertex:Py,specularmap_fragment:Ly,specularmap_pars_fragment:Iy,tonemapping_fragment:Dy,tonemapping_pars_fragment:Uy,transmission_fragment:Ny,transmission_pars_fragment:Fy,uv_pars_fragment:Oy,uv_pars_vertex:By,uv_vertex:Hy,worldpos_vertex:ky,background_vert:zy,background_frag:Vy,backgroundCube_vert:Gy,backgroundCube_frag:Wy,cube_vert:Xy,cube_frag:qy,depth_vert:Yy,depth_frag:jy,distanceRGBA_vert:$y,distanceRGBA_frag:Ky,equirect_vert:Zy,equirect_frag:Jy,linedashed_vert:Qy,linedashed_frag:eE,meshbasic_vert:tE,meshbasic_frag:nE,meshlambert_vert:iE,meshlambert_frag:sE,meshmatcap_vert:rE,meshmatcap_frag:oE,meshnormal_vert:aE,meshnormal_frag:cE,meshphong_vert:lE,meshphong_frag:uE,meshphysical_vert:dE,meshphysical_frag:fE,meshtoon_vert:hE,meshtoon_frag:pE,points_vert:mE,points_frag:gE,shadow_vert:_E,shadow_frag:vE,sprite_vert:xE,sprite_frag:SE},Se={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Fn={basic:{uniforms:Xt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Xt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Xt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Xt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Xt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Xt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Xt([Se.points,Se.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Xt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Xt([Se.common,Se.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Xt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Xt([Se.sprite,Se.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Xt([Se.common,Se.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Xt([Se.lights,Se.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Fn.physical={uniforms:Xt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Fo={r:0,b:0,g:0},Zi=new kn,ME=new We;function yE(n,e,t,i,s,r,o){const a=new ze(0);let c=r===!0?0:1,l,u,d=null,f=0,h=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function _(b){let S=!1;const L=g(b);L===null?p(a,c):L&&L.isColor&&(p(L,1),S=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,S){const L=g(S);L&&(L.isCubeTexture||L.mapping===Ta)?(u===void 0&&(u=new cn(new io(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:er(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Zi.copy(S.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ME.makeRotationFromEuler(Zi)),u.material.toneMapped=Qe.getTransfer(L.colorSpace)!==dt,(d!==L||f!==L.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=L,f=L.version,h=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new cn(new ba(2,2),new Fi({name:"BackgroundMaterial",uniforms:er(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(L.colorSpace)!==dt,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||f!==L.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=L,f=L.version,h=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,S){b.getRGB(Fo,Xp(n)),i.buffers.color.setClear(Fo.r,Fo.g,Fo.b,S,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:_,addToRenderList:m,dispose:A}}function EE(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(y,D,U,B,Q){let ne=!1;const Z=d(B,U,D);r!==Z&&(r=Z,l(r.object)),ne=h(y,B,U,Q),ne&&g(y,B,U,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,S(y,D,U,B),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function d(y,D,U){const B=U.wireframe===!0;let Q=i[y.id];Q===void 0&&(Q={},i[y.id]=Q);let ne=Q[D.id];ne===void 0&&(ne={},Q[D.id]=ne);let Z=ne[B];return Z===void 0&&(Z=f(c()),ne[B]=Z),Z}function f(y){const D=[],U=[],B=[];for(let Q=0;Q<t;Q++)D[Q]=0,U[Q]=0,B[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:B,object:y,attributes:{},index:null}}function h(y,D,U,B){const Q=r.attributes,ne=D.attributes;let Z=0;const j=U.getAttributes();for(const V in j)if(j[V].location>=0){const xe=Q[V];let Re=ne[V];if(Re===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(Re=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(Re=y.instanceColor)),xe===void 0||xe.attribute!==Re||Re&&xe.data!==Re.data)return!0;Z++}return r.attributesNum!==Z||r.index!==B}function g(y,D,U,B){const Q={},ne=D.attributes;let Z=0;const j=U.getAttributes();for(const V in j)if(j[V].location>=0){let xe=ne[V];xe===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor));const Re={};Re.attribute=xe,xe&&xe.data&&(Re.data=xe.data),Q[V]=Re,Z++}r.attributes=Q,r.attributesNum=Z,r.index=B}function _(){const y=r.newAttributes;for(let D=0,U=y.length;D<U;D++)y[D]=0}function m(y){p(y,0)}function p(y,D){const U=r.newAttributes,B=r.enabledAttributes,Q=r.attributeDivisors;U[y]=1,B[y]===0&&(n.enableVertexAttribArray(y),B[y]=1),Q[y]!==D&&(n.vertexAttribDivisor(y,D),Q[y]=D)}function A(){const y=r.newAttributes,D=r.enabledAttributes;for(let U=0,B=D.length;U<B;U++)D[U]!==y[U]&&(n.disableVertexAttribArray(U),D[U]=0)}function b(y,D,U,B,Q,ne,Z){Z===!0?n.vertexAttribIPointer(y,D,U,Q,ne):n.vertexAttribPointer(y,D,U,B,Q,ne)}function S(y,D,U,B){_();const Q=B.attributes,ne=U.getAttributes(),Z=D.defaultAttributeValues;for(const j in ne){const V=ne[j];if(V.location>=0){let me=Q[j];if(me===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),me!==void 0){const xe=me.normalized,Re=me.itemSize,Le=e.get(me);if(Le===void 0)continue;const Je=Le.buffer,se=Le.type,pe=Le.bytesPerElement,ye=se===n.INT||se===n.UNSIGNED_INT||me.gpuType===nu;if(me.isInterleavedBufferAttribute){const F=me.data,re=F.stride,ae=me.offset;if(F.isInstancedInterleavedBuffer){for(let ce=0;ce<V.locationSize;ce++)p(V.location+ce,F.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ce=0;ce<V.locationSize;ce++)m(V.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let ce=0;ce<V.locationSize;ce++)b(V.location+ce,Re/V.locationSize,se,xe,re*pe,(ae+Re/V.locationSize*ce)*pe,ye)}else{if(me.isInstancedBufferAttribute){for(let F=0;F<V.locationSize;F++)p(V.location+F,me.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let F=0;F<V.locationSize;F++)m(V.location+F);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let F=0;F<V.locationSize;F++)b(V.location+F,Re/V.locationSize,se,xe,Re*pe,Re/V.locationSize*F*pe,ye)}}else if(Z!==void 0){const xe=Z[j];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(V.location,xe);break;case 3:n.vertexAttrib3fv(V.location,xe);break;case 4:n.vertexAttrib4fv(V.location,xe);break;default:n.vertexAttrib1fv(V.location,xe)}}}}A()}function L(){N();for(const y in i){const D=i[y];for(const U in D){const B=D[U];for(const Q in B)u(B[Q].object),delete B[Q];delete D[U]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const U in D){const B=D[U];for(const Q in B)u(B[Q].object),delete B[Q];delete D[U]}delete i[y.id]}function C(y){for(const D in i){const U=i[D];if(U[y.id]===void 0)continue;const B=U[y.id];for(const Q in B)u(B[Q].object),delete B[Q];delete U[y.id]}}function N(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function TE(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function bE(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==gn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const N=C===to&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==di&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Rn&&!N)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:L,maxSamples:P}}function AE(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ts,a=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const A=r?0:i,b=A*4;let S=p.clippingState||null;c.value=S,S=u(g,f,b,h);for(let L=0;L!==b;++L)S[L]=t[L];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=h+_*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=h;b!==_;++b,S+=4)o.copy(d[b]).applyMatrix4(A,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function wE(n){let e=new WeakMap;function t(o,a){return a===Qc?o.mapping=js:a===el&&(o.mapping=$s),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qc||a===el)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new jx(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ds=4,yf=[.125,.215,.35,.446,.526,.582],rs=20,xc=new wa,Ef=new ze;let Sc=null,Mc=0,yc=0,Ec=!1;const ns=(1+Math.sqrt(5))/2,Cs=1/ns,Tf=[new z(-ns,Cs,0),new z(ns,Cs,0),new z(-Cs,0,ns),new z(Cs,0,ns),new z(0,ns,-Cs),new z(0,ns,Cs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class bf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,Mc,yc),this._renderer.xr.enabled=Ec,e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:to,format:gn,colorSpace:Kt,depthBuffer:!1},s=Af(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Af(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RE(r)),this._blurMaterial=CE(r,e,t)}return s}_compileMaterial(e){const t=new cn(this._lodPlanes[0],e);this._renderer.compile(t,xc)}_sceneToCubeUV(e,t,i,s){const a=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ef),u.toneMapping=Di,u.autoClear=!1;const h=new os({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new cn(new io,h);let _=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,_=!0):(h.color.copy(Ef),_=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):A===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const b=this._cubeSize;Oo(s,A*b,p>2?b:0,b,b),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===js||e.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new cn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Oo(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,xc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tf[(s-r-1)%Tf.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new cn(this._lodPlanes[s],l),f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*rs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):rs;m>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);const p=[];let A=0;for(let C=0;C<rs;++C){const N=C/_,T=Math.exp(-N*N/2);p.push(T),C===0?A+=T:C<m&&(A+=2*T)}for(let C=0;C<p.length;C++)p[C]=p[C]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const S=this._sizeLods[s],L=3*S*(s>b-Ds?s-b+Ds:0),P=4*(this._cubeSize-S);Oo(t,L,P,3*S,2*S),c.setRenderTarget(t),c.render(d,xc)}}function RE(n){const e=[],t=[],i=[];let s=n;const r=n-Ds+1+yf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Ds?c=yf[o-n+Ds-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,_=3,m=2,p=1,A=new Float32Array(_*g*h),b=new Float32Array(m*g*h),S=new Float32Array(p*g*h);for(let P=0;P<h;P++){const C=P%3*2/3-1,N=P>2?0:-1,T=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];A.set(T,_*g*P),b.set(f,m*g*P);const y=[P,P,P,P,P,P];S.set(y,p*g*P)}const L=new Vn;L.setAttribute("position",new $t(A,_)),L.setAttribute("uv",new $t(b,m)),L.setAttribute("faceIndex",new $t(S,p)),e.push(L),s>Ds&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Af(n,e,t){const i=new ds(n,e,t);return i.texture.mapping=Ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function CE(n,e,t){const i=new Float32Array(rs),s=new z(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function wf(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Rf(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Su(){return`

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
	`}function PE(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Qc||c===el,u=c===js||c===$s;if(l||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new bf(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return l&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new bf(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function LE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Is("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function IE(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){const f=[],h=d.index,g=d.attributes.position;let _=0;if(h!==null){const A=h.array;_=h.version;for(let b=0,S=A.length;b<S;b+=3){const L=A[b+0],P=A[b+1],C=A[b+2];f.push(L,P,P,C,C,L)}}else if(g!==void 0){const A=g.array;_=g.version;for(let b=0,S=A.length/3-1;b<S;b+=3){const L=b+0,P=b+1,C=b+2;f.push(L,P,P,C,C,L)}}else return;const m=new(Hp(f)?Wp:Gp)(f,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function DE(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,r,f*o),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,r,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,_,0,g);let p=0;for(let A=0;A<g;A++)p+=h[A]*_[A];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function UE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function NE(n,e,t){const i=new WeakMap,s=new it;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var h=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let L=a.attributes.position.count*S,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const C=new Float32Array(L*P*4*d),N=new zp(C,L,P,d);N.type=Rn,N.needsUpdate=!0;const T=S*4;for(let D=0;D<d;D++){const U=p[D],B=A[D],Q=b[D],ne=L*P*4*D;for(let Z=0;Z<U.count;Z++){const j=Z*T;g===!0&&(s.fromBufferAttribute(U,Z),C[ne+j+0]=s.x,C[ne+j+1]=s.y,C[ne+j+2]=s.z,C[ne+j+3]=0),_===!0&&(s.fromBufferAttribute(B,Z),C[ne+j+4]=s.x,C[ne+j+5]=s.y,C[ne+j+6]=s.z,C[ne+j+7]=0),m===!0&&(s.fromBufferAttribute(Q,Z),C[ne+j+8]=s.x,C[ne+j+9]=s.y,C[ne+j+10]=s.z,C[ne+j+11]=Q.itemSize===4?s.w:1)}}f={count:d,texture:N,size:new Ze(L,P)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function FE(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const rm=new Lt,Cf=new Qp(1,1),om=new zp,am=new Lx,cm=new Yp,Pf=[],Lf=[],If=new Float32Array(16),Df=new Float32Array(9),Uf=new Float32Array(4);function cr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Pf[s];if(r===void 0&&(r=new Float32Array(s),Pf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ra(n,e){let t=Lf[e];t===void 0&&(t=new Int32Array(e),Lf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function OE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function BE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function HE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function kE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function zE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;Uf.set(i),n.uniformMatrix2fv(this.addr,!1,Uf),Rt(t,i)}}function VE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;Df.set(i),n.uniformMatrix3fv(this.addr,!1,Df),Rt(t,i)}}function GE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;If.set(i),n.uniformMatrix4fv(this.addr,!1,If),Rt(t,i)}}function WE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function XE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function qE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function YE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function jE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $E(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function KE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function ZE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function JE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Cf.compareFunction=Bp,r=Cf):r=rm,t.setTexture2D(e||r,s)}function QE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||am,s)}function eT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||cm,s)}function tT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||om,s)}function nT(n){switch(n){case 5126:return OE;case 35664:return BE;case 35665:return HE;case 35666:return kE;case 35674:return zE;case 35675:return VE;case 35676:return GE;case 5124:case 35670:return WE;case 35667:case 35671:return XE;case 35668:case 35672:return qE;case 35669:case 35673:return YE;case 5125:return jE;case 36294:return $E;case 36295:return KE;case 36296:return ZE;case 35678:case 36198:case 36298:case 36306:case 35682:return JE;case 35679:case 36299:case 36307:return QE;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return tT}}function iT(n,e){n.uniform1fv(this.addr,e)}function sT(n,e){const t=cr(e,this.size,2);n.uniform2fv(this.addr,t)}function rT(n,e){const t=cr(e,this.size,3);n.uniform3fv(this.addr,t)}function oT(n,e){const t=cr(e,this.size,4);n.uniform4fv(this.addr,t)}function aT(n,e){const t=cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cT(n,e){const t=cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function lT(n,e){const t=cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uT(n,e){n.uniform1iv(this.addr,e)}function dT(n,e){n.uniform2iv(this.addr,e)}function fT(n,e){n.uniform3iv(this.addr,e)}function hT(n,e){n.uniform4iv(this.addr,e)}function pT(n,e){n.uniform1uiv(this.addr,e)}function mT(n,e){n.uniform2uiv(this.addr,e)}function gT(n,e){n.uniform3uiv(this.addr,e)}function _T(n,e){n.uniform4uiv(this.addr,e)}function vT(n,e,t){const i=this.cache,s=e.length,r=Ra(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||rm,r[o])}function xT(n,e,t){const i=this.cache,s=e.length,r=Ra(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||am,r[o])}function ST(n,e,t){const i=this.cache,s=e.length,r=Ra(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||cm,r[o])}function MT(n,e,t){const i=this.cache,s=e.length,r=Ra(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||om,r[o])}function yT(n){switch(n){case 5126:return iT;case 35664:return sT;case 35665:return rT;case 35666:return oT;case 35674:return aT;case 35675:return cT;case 35676:return lT;case 5124:case 35670:return uT;case 35667:case 35671:return dT;case 35668:case 35672:return fT;case 35669:case 35673:return hT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return MT}}class ET{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nT(t.type)}}class TT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yT(t.type)}}class bT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Tc=/(\w+)(\])?(\[|\.)?/g;function Nf(n,e){n.seq.push(e),n.map[e.id]=e}function AT(n,e,t){const i=n.name,s=i.length;for(Tc.lastIndex=0;;){const r=Tc.exec(i),o=Tc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Nf(t,l===void 0?new ET(a,n,e):new TT(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new bT(a),Nf(t,d)),t=d}}}class $o{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);AT(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Ff(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const wT=37297;let RT=0;function CT(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Of=new qe;function PT(n){Qe._getMatrix(Of,Qe.workingColorSpace,n);const e=`mat3( ${Of.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case ra:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Bf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+CT(n.getShaderSource(e),o)}else return s}function LT(n,e){const t=PT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function IT(n,e){let t;switch(e){case k0:t="Linear";break;case z0:t="Reinhard";break;case V0:t="Cineon";break;case tu:t="ACESFilmic";break;case W0:t="AgX";break;case X0:t="Neutral";break;case G0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bo=new z;function DT(){Qe.getLuminanceCoefficients(Bo);const n=Bo.x.toFixed(4),e=Bo.y.toFixed(4),t=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function NT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function FT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function br(n){return n!==""}function Hf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(n){return n.replace(OT,HT)}const BT=new Map;function HT(n,e){let t=Ye[e];if(t===void 0){const i=BT.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Il(t)}const kT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zf(n){return n.replace(kT,zT)}function zT(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function VT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ep?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===x0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function GT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case js:case $s:e="ENVMAP_TYPE_CUBE";break;case Ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function XT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tp:e="ENVMAP_BLENDING_MULTIPLY";break;case B0:e="ENVMAP_BLENDING_MIX";break;case H0:e="ENVMAP_BLENDING_ADD";break}return e}function qT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function YT(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=VT(t),l=GT(t),u=WT(t),d=XT(t),f=qT(t),h=UT(t),g=NT(r),_=s.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),p.length>0&&(p+=`
`)):(m=[Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),p=[Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Di?IT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,LT("linearToOutputTexel",t.outputColorSpace),DT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),o=Il(o),o=Hf(o,t),o=kf(o,t),a=Il(a),a=Hf(a,t),a=kf(a,t),o=zf(o),a=zf(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Nd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=A+m+o,S=A+p+a,L=Ff(s,s.VERTEX_SHADER,b),P=Ff(s,s.FRAGMENT_SHADER,S);s.attachShader(_,L),s.attachShader(_,P),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(D){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(L).trim(),Q=s.getShaderInfoLog(P).trim();let ne=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,L,P);else{const j=Bf(s,L,"vertex"),V=Bf(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+j+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(B===""||Q==="")&&(Z=!1);Z&&(D.diagnostics={runnable:ne,programLog:U,vertexShader:{log:B,prefix:m},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(L),s.deleteShader(P),N=new $o(s,_),T=FT(s,_)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,wT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=P,this}let jT=0;class $T{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new KT(e),t.set(e,i)),i}}class KT{constructor(e){this.id=jT++,this.code=e,this.usedTimes=0}}function ZT(n,e,t,i,s,r,o){const a=new uu,c=new $T,l=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,y,D,U,B){const Q=U.fog,ne=B.geometry,Z=T.isMeshStandardMaterial?U.environment:null,j=(T.isMeshStandardMaterial?t:e).get(T.envMap||Z),V=j&&j.mapping===Ta?j.image.height:null,me=g[T.type];T.precision!==null&&(h=s.getMaxPrecision(T.precision),h!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",h,"instead."));const xe=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Re=xe!==void 0?xe.length:0;let Le=0;ne.morphAttributes.position!==void 0&&(Le=1),ne.morphAttributes.normal!==void 0&&(Le=2),ne.morphAttributes.color!==void 0&&(Le=3);let Je,se,pe,ye;if(me){const ct=Fn[me];Je=ct.vertexShader,se=ct.fragmentShader}else Je=T.vertexShader,se=T.fragmentShader,c.update(T),pe=c.getVertexShaderID(T),ye=c.getFragmentShaderID(T);const F=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),ae=B.isInstancedMesh===!0,ce=B.isBatchedMesh===!0,Ue=!!T.map,w=!!T.matcap,R=!!j,x=!!T.aoMap,ie=!!T.lightMap,K=!!T.bumpMap,q=!!T.normalMap,ee=!!T.displacementMap,le=!!T.emissiveMap,J=!!T.metalnessMap,M=!!T.roughnessMap,v=T.anisotropy>0,I=T.clearcoat>0,G=T.dispersion>0,Y=T.iridescence>0,W=T.sheen>0,ge=T.transmission>0,ue=v&&!!T.anisotropyMap,_e=I&&!!T.clearcoatMap,Ne=I&&!!T.clearcoatNormalMap,de=I&&!!T.clearcoatRoughnessMap,Me=Y&&!!T.iridescenceMap,Pe=Y&&!!T.iridescenceThicknessMap,Fe=W&&!!T.sheenColorMap,ve=W&&!!T.sheenRoughnessMap,Be=!!T.specularMap,Ve=!!T.specularColorMap,ft=!!T.specularIntensityMap,O=ge&&!!T.transmissionMap,Ee=ge&&!!T.thicknessMap,te=!!T.gradientMap,oe=!!T.alphaMap,Ae=T.alphaTest>0,be=!!T.alphaHash,Xe=!!T.extensions;let xt=Di;T.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(xt=n.toneMapping);const Nt={shaderID:me,shaderType:T.type,shaderName:T.name,vertexShader:Je,fragmentShader:se,defines:T.defines,customVertexShaderID:pe,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:h,batching:ce,batchingColor:ce&&B._colorsTexture!==null,instancing:ae,instancingColor:ae&&B.instanceColor!==null,instancingMorph:ae&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Kt,alphaToCoverage:!!T.alphaToCoverage,map:Ue,matcap:w,envMap:R,envMapMode:R&&j.mapping,envMapCubeUVHeight:V,aoMap:x,lightMap:ie,bumpMap:K,normalMap:q,displacementMap:f&&ee,emissiveMap:le,normalMapObjectSpace:q&&T.normalMapType===Z0,normalMapTangentSpace:q&&T.normalMapType===Op,metalnessMap:J,roughnessMap:M,anisotropy:v,anisotropyMap:ue,clearcoat:I,clearcoatMap:_e,clearcoatNormalMap:Ne,clearcoatRoughnessMap:de,dispersion:G,iridescence:Y,iridescenceMap:Me,iridescenceThicknessMap:Pe,sheen:W,sheenColorMap:Fe,sheenRoughnessMap:ve,specularMap:Be,specularColorMap:Ve,specularIntensityMap:ft,transmission:ge,transmissionMap:O,thicknessMap:Ee,gradientMap:te,opaque:T.transparent===!1&&T.blending===zs&&T.alphaToCoverage===!1,alphaMap:oe,alphaTest:Ae,alphaHash:be,combine:T.combine,mapUv:Ue&&_(T.map.channel),aoMapUv:x&&_(T.aoMap.channel),lightMapUv:ie&&_(T.lightMap.channel),bumpMapUv:K&&_(T.bumpMap.channel),normalMapUv:q&&_(T.normalMap.channel),displacementMapUv:ee&&_(T.displacementMap.channel),emissiveMapUv:le&&_(T.emissiveMap.channel),metalnessMapUv:J&&_(T.metalnessMap.channel),roughnessMapUv:M&&_(T.roughnessMap.channel),anisotropyMapUv:ue&&_(T.anisotropyMap.channel),clearcoatMapUv:_e&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(T.sheenRoughnessMap.channel),specularMapUv:Be&&_(T.specularMap.channel),specularColorMapUv:Ve&&_(T.specularColorMap.channel),specularIntensityMapUv:ft&&_(T.specularIntensityMap.channel),transmissionMapUv:O&&_(T.transmissionMap.channel),thicknessMapUv:Ee&&_(T.thicknessMap.channel),alphaMapUv:oe&&_(T.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(q||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!ne.attributes.uv&&(Ue||oe),fog:!!Q,useFog:T.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:re,skinning:B.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Le,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:xt,decodeVideoTexture:Ue&&T.map.isVideoTexture===!0&&Qe.getTransfer(T.map.colorSpace)===dt,decodeVideoTextureEmissive:le&&T.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(T.emissiveMap.colorSpace)===dt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===On,flipSided:T.side===Qt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Xe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&T.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function p(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)y.push(D),y.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(A(y,T),b(y,T),y.push(n.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function A(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function b(T,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),T.push(a.mask)}function S(T){const y=g[T.type];let D;if(y){const U=Fn[y];D=Wx.clone(U.uniforms)}else D=T.uniforms;return D}function L(T,y){let D;for(let U=0,B=u.length;U<B;U++){const Q=u[U];if(Q.cacheKey===y){D=Q,++D.usedTimes;break}}return D===void 0&&(D=new YT(n,y,T,r),u.push(D)),D}function P(T){if(--T.usedTimes===0){const y=u.indexOf(T);u[y]=u[u.length-1],u.pop(),T.destroy()}}function C(T){c.remove(T)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:L,releaseProgram:P,releaseShaderCache:C,programs:u,dispose:N}}function JT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function QT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,h,g,_,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,f,h,g,_,m){const p=o(d,f,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):t.push(p)}function c(d,f,h,g,_,m){const p=o(d,f,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||QT),i.length>1&&i.sort(f||Gf),s.length>1&&s.sort(f||Gf)}function u(){for(let d=e,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function eb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Wf,n.set(i,[o])):s>=r.length?(o=new Wf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function tb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ze};break;case"SpotLight":t={position:new z,direction:new z,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function nb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ib=0;function sb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rb(n){const e=new tb,t=nb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);const s=new z,r=new We,o=new We;function a(l){let u=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,A=0,b=0,S=0,L=0,P=0,C=0;l.sort(sb);for(let T=0,y=l.length;T<y;T++){const D=l[T],U=D.color,B=D.intensity,Q=D.distance,ne=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=U.r*B,d+=U.g*B,f+=U.b*B;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],B);C++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,V=t.get(D);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=ne,i.directionalShadowMatrix[h]=D.shadow.matrix,A++}i.directional[h]=Z,h++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(U).multiplyScalar(B),Z.distance=Q,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[_]=Z;const j=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,j.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[_]=j.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=ne,S++}_++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(U).multiplyScalar(B),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=Z,m++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const j=D.shadow,V=t.get(D);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=Z,g++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(B),Z.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[p]=Z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==h||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==A||N.numPointShadows!==b||N.numSpotShadows!==S||N.numSpotMaps!==L||N.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+L-P,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,N.directionalLength=h,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=A,N.numPointShadows=b,N.numSpotShadows=S,N.numSpotMaps=L,N.numLightProbes=C,i.version=ib++)}function c(l,u){let d=0,f=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,A=l.length;p<A;p++){const b=l[p];if(b.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(b.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(b.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function Xf(n){const e=new rb(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ob(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Xf(n),e.set(s,[a])):r>=o.length?(a=new Xf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const ab=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cb=`uniform sampler2D shadow_pass;
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
}`;function lb(n,e,t){let i=new hu;const s=new Ze,r=new Ze,o=new it,a=new aS({depthPacking:K0}),c=new cS,l={},u=t.maxTextureSize,d={[ui]:Qt,[Qt]:ui,[On]:On},f=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:ab,fragmentShader:cb}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Vn;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new cn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ep;let p=this.type;this.render=function(P,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const T=n.getRenderTarget(),y=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ii),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=p!==ti&&this.type===ti,Q=p===ti&&this.type!==ti;for(let ne=0,Z=P.length;ne<Z;ne++){const j=P[ne],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const me=V.getFrameExtents();if(s.multiply(me),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,V.mapSize.y=r.y)),V.map===null||B===!0||Q===!0){const Re=this.type!==ti?{minFilter:jt,magFilter:jt}:{};V.map!==null&&V.map.dispose(),V.map=new ds(s.x,s.y,Re),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const xe=V.getViewportCount();for(let Re=0;Re<xe;Re++){const Le=V.getViewport(Re);o.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),U.viewport(o),V.updateMatrices(j,Re),i=V.getFrustum(),S(C,N,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===ti&&A(V,N),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,y,D)};function A(P,C){const N=e.update(_);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ds(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(C,null,N,f,_,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(C,null,N,h,_,null)}function b(P,C,N,T){let y=null;const D=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)y=D;else if(y=N.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const U=y.uuid,B=C.uuid;let Q=l[U];Q===void 0&&(Q={},l[U]=Q);let ne=Q[B];ne===void 0&&(ne=y.clone(),Q[B]=ne,C.addEventListener("dispose",L)),y=ne}if(y.visible=C.visible,y.wireframe=C.wireframe,T===ti?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=n.properties.get(y);U.light=N}return y}function S(P,C,N,T,y){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===ti)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const B=e.update(P),Q=P.material;if(Array.isArray(Q)){const ne=B.groups;for(let Z=0,j=ne.length;Z<j;Z++){const V=ne[Z],me=Q[V.materialIndex];if(me&&me.visible){const xe=b(P,me,T,y);P.onBeforeShadow(n,P,C,N,B,xe,V),n.renderBufferDirect(N,null,B,xe,P,V),P.onAfterShadow(n,P,C,N,B,xe,V)}}}else if(Q.visible){const ne=b(P,Q,T,y);P.onBeforeShadow(n,P,C,N,B,ne,null),n.renderBufferDirect(N,null,B,ne,P,null),P.onAfterShadow(n,P,C,N,B,ne,null)}}const U=P.children;for(let B=0,Q=U.length;B<Q;B++)S(U[B],C,N,T,y)}function L(P){P.target.removeEventListener("dispose",L);for(const N in l){const T=l[N],y=P.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}const ub={[qc]:Yc,[jc]:Zc,[$c]:Jc,[Ys]:Kc,[Yc]:qc,[Zc]:jc,[Jc]:$c,[Kc]:Ys};function db(n,e){function t(){let O=!1;const Ee=new it;let te=null;const oe=new it(0,0,0,0);return{setMask:function(Ae){te!==Ae&&!O&&(n.colorMask(Ae,Ae,Ae,Ae),te=Ae)},setLocked:function(Ae){O=Ae},setClear:function(Ae,be,Xe,xt,Nt){Nt===!0&&(Ae*=xt,be*=xt,Xe*=xt),Ee.set(Ae,be,Xe,xt),oe.equals(Ee)===!1&&(n.clearColor(Ae,be,Xe,xt),oe.copy(Ee))},reset:function(){O=!1,te=null,oe.set(-1,0,0,0)}}}function i(){let O=!1,Ee=!1,te=null,oe=null,Ae=null;return{setReversed:function(be){if(Ee!==be){const Xe=e.get("EXT_clip_control");Ee?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);const xt=Ae;Ae=null,this.setClear(xt)}Ee=be},getReversed:function(){return Ee},setTest:function(be){be?F(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(be){te!==be&&!O&&(n.depthMask(be),te=be)},setFunc:function(be){if(Ee&&(be=ub[be]),oe!==be){switch(be){case qc:n.depthFunc(n.NEVER);break;case Yc:n.depthFunc(n.ALWAYS);break;case jc:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case $c:n.depthFunc(n.EQUAL);break;case Kc:n.depthFunc(n.GEQUAL);break;case Zc:n.depthFunc(n.GREATER);break;case Jc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=be}},setLocked:function(be){O=be},setClear:function(be){Ae!==be&&(Ee&&(be=1-be),n.clearDepth(be),Ae=be)},reset:function(){O=!1,te=null,oe=null,Ae=null,Ee=!1}}}function s(){let O=!1,Ee=null,te=null,oe=null,Ae=null,be=null,Xe=null,xt=null,Nt=null;return{setTest:function(ct){O||(ct?F(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(ct){Ee!==ct&&!O&&(n.stencilMask(ct),Ee=ct)},setFunc:function(ct,Sn,Xn){(te!==ct||oe!==Sn||Ae!==Xn)&&(n.stencilFunc(ct,Sn,Xn),te=ct,oe=Sn,Ae=Xn)},setOp:function(ct,Sn,Xn){(be!==ct||Xe!==Sn||xt!==Xn)&&(n.stencilOp(ct,Sn,Xn),be=ct,Xe=Sn,xt=Xn)},setLocked:function(ct){O=ct},setClear:function(ct){Nt!==ct&&(n.clearStencil(ct),Nt=ct)},reset:function(){O=!1,Ee=null,te=null,oe=null,Ae=null,be=null,Xe=null,xt=null,Nt=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,A=null,b=null,S=null,L=null,P=null,C=new ze(0,0,0),N=0,T=!1,y=null,D=null,U=null,B=null,Q=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,j=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),Z=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Z=j>=2);let me=null,xe={};const Re=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),Je=new it().fromArray(Re),se=new it().fromArray(Le);function pe(O,Ee,te,oe){const Ae=new Uint8Array(4),be=n.createTexture();n.bindTexture(O,be),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<te;Xe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(Ee+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return be}const ye={};ye[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(n.DEPTH_TEST),o.setFunc(Ys),K(!1),q(Ad),F(n.CULL_FACE),x(Ii);function F(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function re(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function ae(O,Ee){return d[O]!==Ee?(n.bindFramebuffer(O,Ee),d[O]=Ee,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ee),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function ce(O,Ee){let te=h,oe=!1;if(O){te=f.get(Ee),te===void 0&&(te=[],f.set(Ee,te));const Ae=O.textures;if(te.length!==Ae.length||te[0]!==n.COLOR_ATTACHMENT0){for(let be=0,Xe=Ae.length;be<Xe;be++)te[be]=n.COLOR_ATTACHMENT0+be;te.length=Ae.length,oe=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,oe=!0);oe&&n.drawBuffers(te)}function Ue(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const w={[ss]:n.FUNC_ADD,[M0]:n.FUNC_SUBTRACT,[y0]:n.FUNC_REVERSE_SUBTRACT};w[E0]=n.MIN,w[T0]=n.MAX;const R={[b0]:n.ZERO,[A0]:n.ONE,[w0]:n.SRC_COLOR,[Wc]:n.SRC_ALPHA,[D0]:n.SRC_ALPHA_SATURATE,[L0]:n.DST_COLOR,[C0]:n.DST_ALPHA,[R0]:n.ONE_MINUS_SRC_COLOR,[Xc]:n.ONE_MINUS_SRC_ALPHA,[I0]:n.ONE_MINUS_DST_COLOR,[P0]:n.ONE_MINUS_DST_ALPHA,[U0]:n.CONSTANT_COLOR,[N0]:n.ONE_MINUS_CONSTANT_COLOR,[F0]:n.CONSTANT_ALPHA,[O0]:n.ONE_MINUS_CONSTANT_ALPHA};function x(O,Ee,te,oe,Ae,be,Xe,xt,Nt,ct){if(O===Ii){_===!0&&(re(n.BLEND),_=!1);return}if(_===!1&&(F(n.BLEND),_=!0),O!==S0){if(O!==m||ct!==T){if((p!==ss||S!==ss)&&(n.blendEquation(n.FUNC_ADD),p=ss,S=ss),ct)switch(O){case zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wd:n.blendFunc(n.ONE,n.ONE);break;case Rd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Rd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}A=null,b=null,L=null,P=null,C.set(0,0,0),N=0,m=O,T=ct}return}Ae=Ae||Ee,be=be||te,Xe=Xe||oe,(Ee!==p||Ae!==S)&&(n.blendEquationSeparate(w[Ee],w[Ae]),p=Ee,S=Ae),(te!==A||oe!==b||be!==L||Xe!==P)&&(n.blendFuncSeparate(R[te],R[oe],R[be],R[Xe]),A=te,b=oe,L=be,P=Xe),(xt.equals(C)===!1||Nt!==N)&&(n.blendColor(xt.r,xt.g,xt.b,Nt),C.copy(xt),N=Nt),m=O,T=!1}function ie(O,Ee){O.side===On?re(n.CULL_FACE):F(n.CULL_FACE);let te=O.side===Qt;Ee&&(te=!te),K(te),O.blending===zs&&O.transparent===!1?x(Ii):x(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const oe=O.stencilWrite;a.setTest(oe),oe&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),le(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(O){y!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),y=O)}function q(O){O!==_0?(F(n.CULL_FACE),O!==D&&(O===Ad?n.cullFace(n.BACK):O===v0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),D=O}function ee(O){O!==U&&(Z&&n.lineWidth(O),U=O)}function le(O,Ee,te){O?(F(n.POLYGON_OFFSET_FILL),(B!==Ee||Q!==te)&&(n.polygonOffset(Ee,te),B=Ee,Q=te)):re(n.POLYGON_OFFSET_FILL)}function J(O){O?F(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function M(O){O===void 0&&(O=n.TEXTURE0+ne-1),me!==O&&(n.activeTexture(O),me=O)}function v(O,Ee,te){te===void 0&&(me===null?te=n.TEXTURE0+ne-1:te=me);let oe=xe[te];oe===void 0&&(oe={type:void 0,texture:void 0},xe[te]=oe),(oe.type!==O||oe.texture!==Ee)&&(me!==te&&(n.activeTexture(te),me=te),n.bindTexture(O,Ee||ye[O]),oe.type=O,oe.texture=Ee)}function I(){const O=xe[me];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(O){Je.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Je.copy(O))}function ve(O){se.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),se.copy(O))}function Be(O,Ee){let te=l.get(Ee);te===void 0&&(te=new WeakMap,l.set(Ee,te));let oe=te.get(O);oe===void 0&&(oe=n.getUniformBlockIndex(Ee,O.name),te.set(O,oe))}function Ve(O,Ee){const oe=l.get(Ee).get(O);c.get(Ee)!==oe&&(n.uniformBlockBinding(Ee,oe,O.__bindingPointIndex),c.set(Ee,oe))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},me=null,xe={},d={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,A=null,b=null,S=null,L=null,P=null,C=new ze(0,0,0),N=0,T=!1,y=null,D=null,U=null,B=null,Q=null,Je.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:F,disable:re,bindFramebuffer:ae,drawBuffers:ce,useProgram:Ue,setBlending:x,setMaterial:ie,setFlipSided:K,setCullFace:q,setLineWidth:ee,setPolygonOffset:le,setScissorTest:J,activeTexture:M,bindTexture:v,unbindTexture:I,compressedTexImage2D:G,compressedTexImage3D:Y,texImage2D:Me,texImage3D:Pe,updateUBOMapping:Be,uniformBlockBinding:Ve,texStorage2D:Ne,texStorage3D:de,texSubImage2D:W,texSubImage3D:ge,compressedTexSubImage2D:ue,compressedTexSubImage3D:_e,scissor:Fe,viewport:ve,reset:ft}}function fb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return h?new OffscreenCanvas(M,v):Jr("canvas")}function _(M,v,I){let G=1;const Y=J(M);if((Y.width>I||Y.height>I)&&(G=I/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const W=Math.floor(G*Y.width),ge=Math.floor(G*Y.height);d===void 0&&(d=g(W,ge));const ue=v?g(W,ge):d;return ue.width=W,ue.height=ge,ue.getContext("2d").drawImage(M,0,0,W,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+W+"x"+ge+")."),ue}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){n.generateMipmap(M)}function A(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(M,v,I,G,Y=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let W=v;if(v===n.RED&&(I===n.FLOAT&&(W=n.R32F),I===n.HALF_FLOAT&&(W=n.R16F),I===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(W=n.R8UI),I===n.UNSIGNED_SHORT&&(W=n.R16UI),I===n.UNSIGNED_INT&&(W=n.R32UI),I===n.BYTE&&(W=n.R8I),I===n.SHORT&&(W=n.R16I),I===n.INT&&(W=n.R32I)),v===n.RG&&(I===n.FLOAT&&(W=n.RG32F),I===n.HALF_FLOAT&&(W=n.RG16F),I===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(W=n.RG8UI),I===n.UNSIGNED_SHORT&&(W=n.RG16UI),I===n.UNSIGNED_INT&&(W=n.RG32UI),I===n.BYTE&&(W=n.RG8I),I===n.SHORT&&(W=n.RG16I),I===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(W=n.RGB8UI),I===n.UNSIGNED_SHORT&&(W=n.RGB16UI),I===n.UNSIGNED_INT&&(W=n.RGB32UI),I===n.BYTE&&(W=n.RGB8I),I===n.SHORT&&(W=n.RGB16I),I===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),I===n.UNSIGNED_INT&&(W=n.RGBA32UI),I===n.BYTE&&(W=n.RGBA8I),I===n.SHORT&&(W=n.RGBA16I),I===n.INT&&(W=n.RGBA32I)),v===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),v===n.RGBA){const ge=Y?ra:Qe.getTransfer(G);I===n.FLOAT&&(W=n.RGBA32F),I===n.HALF_FLOAT&&(W=n.RGBA16F),I===n.UNSIGNED_BYTE&&(W=ge===dt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function S(M,v){let I;return M?v===null||v===us||v===Zs?I=n.DEPTH24_STENCIL8:v===Rn?I=n.DEPTH32F_STENCIL8:v===$r&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===us||v===Zs?I=n.DEPTH_COMPONENT24:v===Rn?I=n.DEPTH_COMPONENT32F:v===$r&&(I=n.DEPTH_COMPONENT16),I}function L(M,v){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==jt&&M.minFilter!==an?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function P(M){const v=M.target;v.removeEventListener("dispose",P),N(v),v.isVideoTexture&&u.delete(v)}function C(M){const v=M.target;v.removeEventListener("dispose",C),y(v)}function N(M){const v=i.get(M);if(v.__webglInit===void 0)return;const I=M.source,G=f.get(I);if(G){const Y=G[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&T(M),Object.keys(G).length===0&&f.delete(I)}i.remove(M)}function T(M){const v=i.get(M);n.deleteTexture(v.__webglTexture);const I=M.source,G=f.get(I);delete G[v.__cacheKey],o.memory.textures--}function y(M){const v=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let Y=0;Y<v.__webglFramebuffer[G].length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[G][Y]);else n.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)n.deleteFramebuffer(v.__webglFramebuffer[G]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const I=M.textures;for(let G=0,Y=I.length;G<Y;G++){const W=i.get(I[G]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(I[G])}i.remove(M)}let D=0;function U(){D=0}function B(){const M=D;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),D+=1,M}function Q(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function ne(M,v){const I=i.get(M);if(M.isVideoTexture&&ee(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const G=M.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(I,M,v);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+v)}function Z(M,v){const I=i.get(M);if(M.version>0&&I.__version!==M.version){se(I,M,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+v)}function j(M,v){const I=i.get(M);if(M.version>0&&I.__version!==M.version){se(I,M,v);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+v)}function V(M,v){const I=i.get(M);if(M.version>0&&I.__version!==M.version){pe(I,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+v)}const me={[Ks]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[sa]:n.MIRRORED_REPEAT},xe={[jt]:n.NEAREST,[Ap]:n.NEAREST_MIPMAP_NEAREST,[Tr]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Go]:n.LINEAR_MIPMAP_NEAREST,[ri]:n.LINEAR_MIPMAP_LINEAR},Re={[J0]:n.NEVER,[sx]:n.ALWAYS,[Q0]:n.LESS,[Bp]:n.LEQUAL,[ex]:n.EQUAL,[ix]:n.GEQUAL,[tx]:n.GREATER,[nx]:n.NOTEQUAL};function Le(M,v){if(v.type===Rn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===an||v.magFilter===Go||v.magFilter===Tr||v.magFilter===ri||v.minFilter===an||v.minFilter===Go||v.minFilter===Tr||v.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,me[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,me[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,me[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,xe[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,xe[v.minFilter]),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===jt||v.minFilter!==Tr&&v.minFilter!==ri||v.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Je(M,v){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",P));const G=v.source;let Y=f.get(G);Y===void 0&&(Y={},f.set(G,Y));const W=Q(v);if(W!==M.__cacheKey){Y[W]===void 0&&(Y[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),Y[W].usedTimes++;const ge=Y[M.__cacheKey];ge!==void 0&&(Y[M.__cacheKey].usedTimes--,ge.usedTimes===0&&T(v)),M.__cacheKey=W,M.__webglTexture=Y[W].texture}return I}function se(M,v,I){let G=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=n.TEXTURE_3D);const Y=Je(M,v),W=v.source;t.bindTexture(G,M.__webglTexture,n.TEXTURE0+I);const ge=i.get(W);if(W.version!==ge.__version||Y===!0){t.activeTexture(n.TEXTURE0+I);const ue=Qe.getPrimaries(Qe.workingColorSpace),_e=v.colorSpace===Ri?null:Qe.getPrimaries(v.colorSpace),Ne=v.colorSpace===Ri||ue===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let de=_(v.image,!1,s.maxTextureSize);de=le(v,de);const Me=r.convert(v.format,v.colorSpace),Pe=r.convert(v.type);let Fe=b(v.internalFormat,Me,Pe,v.colorSpace,v.isVideoTexture);Le(G,v);let ve;const Be=v.mipmaps,Ve=v.isVideoTexture!==!0,ft=ge.__version===void 0||Y===!0,O=W.dataReady,Ee=L(v,de);if(v.isDepthTexture)Fe=S(v.format===Js,v.type),ft&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Fe,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Fe,de.width,de.height,0,Me,Pe,null));else if(v.isDataTexture)if(Be.length>0){Ve&&ft&&t.texStorage2D(n.TEXTURE_2D,Ee,Fe,Be[0].width,Be[0].height);for(let te=0,oe=Be.length;te<oe;te++)ve=Be[te],Ve?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ve.width,ve.height,Me,Pe,ve.data):t.texImage2D(n.TEXTURE_2D,te,Fe,ve.width,ve.height,0,Me,Pe,ve.data);v.generateMipmaps=!1}else Ve?(ft&&t.texStorage2D(n.TEXTURE_2D,Ee,Fe,de.width,de.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,Me,Pe,de.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,de.width,de.height,0,Me,Pe,de.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ve&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Fe,Be[0].width,Be[0].height,de.depth);for(let te=0,oe=Be.length;te<oe;te++)if(ve=Be[te],v.format!==gn)if(Me!==null)if(Ve){if(O)if(v.layerUpdates.size>0){const Ae=Mf(ve.width,ve.height,v.format,v.type);for(const be of v.layerUpdates){const Xe=ve.data.subarray(be*Ae/ve.data.BYTES_PER_ELEMENT,(be+1)*Ae/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,be,ve.width,ve.height,1,Me,Xe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ve.width,ve.height,de.depth,Me,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Fe,ve.width,ve.height,de.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ve.width,ve.height,de.depth,Me,Pe,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Fe,ve.width,ve.height,de.depth,0,Me,Pe,ve.data)}else{Ve&&ft&&t.texStorage2D(n.TEXTURE_2D,Ee,Fe,Be[0].width,Be[0].height);for(let te=0,oe=Be.length;te<oe;te++)ve=Be[te],v.format!==gn?Me!==null?Ve?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,ve.width,ve.height,Me,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Fe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ve.width,ve.height,Me,Pe,ve.data):t.texImage2D(n.TEXTURE_2D,te,Fe,ve.width,ve.height,0,Me,Pe,ve.data)}else if(v.isDataArrayTexture)if(Ve){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Fe,de.width,de.height,de.depth),O)if(v.layerUpdates.size>0){const te=Mf(de.width,de.height,v.format,v.type);for(const oe of v.layerUpdates){const Ae=de.data.subarray(oe*te/de.data.BYTES_PER_ELEMENT,(oe+1)*te/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,de.width,de.height,1,Me,Pe,Ae)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Me,Pe,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,de.width,de.height,de.depth,0,Me,Pe,de.data);else if(v.isData3DTexture)Ve?(ft&&t.texStorage3D(n.TEXTURE_3D,Ee,Fe,de.width,de.height,de.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Me,Pe,de.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,de.width,de.height,de.depth,0,Me,Pe,de.data);else if(v.isFramebufferTexture){if(ft)if(Ve)t.texStorage2D(n.TEXTURE_2D,Ee,Fe,de.width,de.height);else{let te=de.width,oe=de.height;for(let Ae=0;Ae<Ee;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Fe,te,oe,0,Me,Pe,null),te>>=1,oe>>=1}}else if(Be.length>0){if(Ve&&ft){const te=J(Be[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Fe,te.width,te.height)}for(let te=0,oe=Be.length;te<oe;te++)ve=Be[te],Ve?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Me,Pe,ve):t.texImage2D(n.TEXTURE_2D,te,Fe,Me,Pe,ve);v.generateMipmaps=!1}else if(Ve){if(ft){const te=J(de);t.texStorage2D(n.TEXTURE_2D,Ee,Fe,te.width,te.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Pe,de)}else t.texImage2D(n.TEXTURE_2D,0,Fe,Me,Pe,de);m(v)&&p(G),ge.__version=W.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function pe(M,v,I){if(v.image.length!==6)return;const G=Je(M,v),Y=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+I);const W=i.get(Y);if(Y.version!==W.__version||G===!0){t.activeTexture(n.TEXTURE0+I);const ge=Qe.getPrimaries(Qe.workingColorSpace),ue=v.colorSpace===Ri?null:Qe.getPrimaries(v.colorSpace),_e=v.colorSpace===Ri||ge===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ne=v.isCompressedTexture||v.image[0].isCompressedTexture,de=v.image[0]&&v.image[0].isDataTexture,Me=[];for(let oe=0;oe<6;oe++)!Ne&&!de?Me[oe]=_(v.image[oe],!0,s.maxCubemapSize):Me[oe]=de?v.image[oe].image:v.image[oe],Me[oe]=le(v,Me[oe]);const Pe=Me[0],Fe=r.convert(v.format,v.colorSpace),ve=r.convert(v.type),Be=b(v.internalFormat,Fe,ve,v.colorSpace),Ve=v.isVideoTexture!==!0,ft=W.__version===void 0||G===!0,O=Y.dataReady;let Ee=L(v,Pe);Le(n.TEXTURE_CUBE_MAP,v);let te;if(Ne){Ve&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Be,Pe.width,Pe.height);for(let oe=0;oe<6;oe++){te=Me[oe].mipmaps;for(let Ae=0;Ae<te.length;Ae++){const be=te[Ae];v.format!==gn?Fe!==null?Ve?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae,0,0,be.width,be.height,Fe,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae,Be,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae,0,0,be.width,be.height,Fe,ve,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae,Be,be.width,be.height,0,Fe,ve,be.data)}}}else{if(te=v.mipmaps,Ve&&ft){te.length>0&&Ee++;const oe=J(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Be,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(de){Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Me[oe].width,Me[oe].height,Fe,ve,Me[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Be,Me[oe].width,Me[oe].height,0,Fe,ve,Me[oe].data);for(let Ae=0;Ae<te.length;Ae++){const Xe=te[Ae].image[oe].image;Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae+1,0,0,Xe.width,Xe.height,Fe,ve,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae+1,Be,Xe.width,Xe.height,0,Fe,ve,Xe.data)}}else{Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Fe,ve,Me[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Be,Fe,ve,Me[oe]);for(let Ae=0;Ae<te.length;Ae++){const be=te[Ae];Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae+1,0,0,Fe,ve,be.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae+1,Be,Fe,ve,be.image[oe])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),W.__version=Y.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ye(M,v,I,G,Y,W){const ge=r.convert(I.format,I.colorSpace),ue=r.convert(I.type),_e=b(I.internalFormat,ge,ue,I.colorSpace),Ne=i.get(v),de=i.get(I);if(de.__renderTarget=v,!Ne.__hasExternalTextures){const Me=Math.max(1,v.width>>W),Pe=Math.max(1,v.height>>W);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,W,_e,Me,Pe,v.depth,0,ge,ue,null):t.texImage2D(Y,W,_e,Me,Pe,0,ge,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,Y,de.__webglTexture,0,K(v)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,Y,de.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(M,v,I){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer){const G=v.depthTexture,Y=G&&G.isDepthTexture?G.type:null,W=S(v.stencilBuffer,Y),ge=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=K(v);q(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,W,v.width,v.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,M)}else{const G=v.textures;for(let Y=0;Y<G.length;Y++){const W=G[Y],ge=r.convert(W.format,W.colorSpace),ue=r.convert(W.type),_e=b(W.internalFormat,ge,ue,W.colorSpace),Ne=K(v);I&&q(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,_e,v.width,v.height):q(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,_e,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,_e,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(v.depthTexture);G.__renderTarget=v,(!G.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ne(v.depthTexture,0);const Y=G.__webglTexture,W=K(v);if(v.depthTexture.format===Vs)q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(v.depthTexture.format===Js)q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function ae(M){const v=i.get(M),I=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){const G=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){const Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=G}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");re(v.__webglFramebuffer,M)}else if(I){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=n.createRenderbuffer(),F(v.__webglDepthbuffer[G],M,!1);else{const Y=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,W)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),F(v.__webglDepthbuffer,M,!1);else{const G=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,Y)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(M,v,I){const G=i.get(M);v!==void 0&&ye(G.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&ae(M)}function Ue(M){const v=M.texture,I=i.get(M),G=i.get(v);M.addEventListener("dispose",C);const Y=M.textures,W=M.isWebGLCubeRenderTarget===!0,ge=Y.length>1;if(ge||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=v.version,o.memory.textures++),W){I.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[ue]=[];for(let _e=0;_e<v.mipmaps.length;_e++)I.__webglFramebuffer[ue][_e]=n.createFramebuffer()}else I.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)I.__webglFramebuffer[ue]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(ge)for(let ue=0,_e=Y.length;ue<_e;ue++){const Ne=i.get(Y[ue]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&q(M)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ue=0;ue<Y.length;ue++){const _e=Y[ue];I.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[ue]);const Ne=r.convert(_e.format,_e.colorSpace),de=r.convert(_e.type),Me=b(_e.internalFormat,Ne,de,_e.colorSpace,M.isXRRenderTarget===!0),Pe=K(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Me,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,I.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),F(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Le(n.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)ye(I.__webglFramebuffer[ue][_e],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,_e);else ye(I.__webglFramebuffer[ue],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ue=0,_e=Y.length;ue<_e;ue++){const Ne=Y[ue],de=i.get(Ne);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),Le(n.TEXTURE_2D,Ne),ye(I.__webglFramebuffer,M,Ne,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(Ne)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ue=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,G.__webglTexture),Le(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)ye(I.__webglFramebuffer[_e],M,v,n.COLOR_ATTACHMENT0,ue,_e);else ye(I.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,ue,0);m(v)&&p(ue),t.unbindTexture()}M.depthBuffer&&ae(M)}function w(M){const v=M.textures;for(let I=0,G=v.length;I<G;I++){const Y=v[I];if(m(Y)){const W=A(M),ge=i.get(Y).__webglTexture;t.bindTexture(W,ge),p(W),t.unbindTexture()}}}const R=[],x=[];function ie(M){if(M.samples>0){if(q(M)===!1){const v=M.textures,I=M.width,G=M.height;let Y=n.COLOR_BUFFER_BIT;const W=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(M),ue=v.length>1;if(ue)for(let _e=0;_e<v.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let _e=0;_e<v.length;_e++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);const Ne=i.get(v[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,I,G,0,0,I,G,Y,n.NEAREST),c===!0&&(R.length=0,x.length=0,R.push(n.COLOR_ATTACHMENT0+_e),M.depthBuffer&&M.resolveDepthBuffer===!1&&(R.push(W),x.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,x)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let _e=0;_e<v.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);const Ne=i.get(v[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const v=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function K(M){return Math.min(s.maxSamples,M.samples)}function q(M){const v=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ee(M){const v=o.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function le(M,v){const I=M.colorSpace,G=M.format,Y=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||I!==Kt&&I!==Ri&&(Qe.getTransfer(I)===dt?(G!==gn||Y!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),v}function J(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.setTexture2D=ne,this.setTexture2DArray=Z,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=ce,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=q}function hb(n,e){function t(i,s=Ri){let r;const o=Qe.getTransfer(s);if(i===di)return n.UNSIGNED_BYTE;if(i===iu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===su)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wp)return n.BYTE;if(i===Rp)return n.SHORT;if(i===$r)return n.UNSIGNED_SHORT;if(i===nu)return n.INT;if(i===us)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===to)return n.HALF_FLOAT;if(i===Pp)return n.ALPHA;if(i===Lp)return n.RGB;if(i===gn)return n.RGBA;if(i===Ip)return n.LUMINANCE;if(i===Dp)return n.LUMINANCE_ALPHA;if(i===Vs)return n.DEPTH_COMPONENT;if(i===Js)return n.DEPTH_STENCIL;if(i===ru)return n.RED;if(i===ou)return n.RED_INTEGER;if(i===Up)return n.RG;if(i===au)return n.RG_INTEGER;if(i===cu)return n.RGBA_INTEGER;if(i===Wo||i===Xo||i===qo||i===Yo)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tl||i===nl||i===il||i===sl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rl||i===ol||i===al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===rl||i===ol)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===al)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cl||i===ll||i===ul||i===dl||i===fl||i===hl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl||i===Sl||i===Ml)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===cl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ll)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ul)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ml)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_l)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ml)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jo||i===yl||i===El)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===jo)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===El)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Np||i===Tl||i===bl||i===Al)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===jo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mb=`
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

}`;class gb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Lt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Fi({vertexShader:pb,fragmentShader:mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new cn(new ba(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _b extends sr{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null;const _=new gb,m=t.getContextAttributes();let p=null,A=null;const b=[],S=[],L=new Ze;let P=null;const C=new Yt;C.viewport=new it;const N=new Yt;N.viewport=new it;const T=[C,N],y=new CS;let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let pe=b[se];return pe===void 0&&(pe=new fc,b[se]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(se){let pe=b[se];return pe===void 0&&(pe=new fc,b[se]=pe),pe.getGripSpace()},this.getHand=function(se){let pe=b[se];return pe===void 0&&(pe=new fc,b[se]=pe),pe.getHandSpace()};function B(se){const pe=S.indexOf(se.inputSource);if(pe===-1)return;const ye=b[pe];ye!==void 0&&(ye.update(se.inputSource,se.frame,l||o),ye.dispatchEvent({type:se.type,data:se.inputSource}))}function Q(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",ne);for(let se=0;se<b.length;se++){const pe=S[se];pe!==null&&(S[se]=null,b[se].disconnect(pe))}D=null,U=null,_.reset(),e.setRenderTarget(p),h=null,f=null,d=null,s=null,A=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(se){l=se},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,F=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=m.stencil?Js:Vs,F=m.stencil?Zs:us);const ae={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(ae),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new ds(f.textureWidth,f.textureHeight,{format:gn,type:di,depthTexture:new Qp(f.textureWidth,f.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const ye={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),A=new ds(h.framebufferWidth,h.framebufferHeight,{format:gn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Je.setContext(s),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(se){for(let pe=0;pe<se.removed.length;pe++){const ye=se.removed[pe],F=S.indexOf(ye);F>=0&&(S[F]=null,b[F].disconnect(ye))}for(let pe=0;pe<se.added.length;pe++){const ye=se.added[pe];let F=S.indexOf(ye);if(F===-1){for(let ae=0;ae<b.length;ae++)if(ae>=S.length){S.push(ye),F=ae;break}else if(S[ae]===null){S[ae]=ye,F=ae;break}if(F===-1)break}const re=b[F];re&&re.connect(ye)}}const Z=new z,j=new z;function V(se,pe,ye){Z.setFromMatrixPosition(pe.matrixWorld),j.setFromMatrixPosition(ye.matrixWorld);const F=Z.distanceTo(j),re=pe.projectionMatrix.elements,ae=ye.projectionMatrix.elements,ce=re[14]/(re[10]-1),Ue=re[14]/(re[10]+1),w=(re[9]+1)/re[5],R=(re[9]-1)/re[5],x=(re[8]-1)/re[0],ie=(ae[8]+1)/ae[0],K=ce*x,q=ce*ie,ee=F/(-x+ie),le=ee*-x;if(pe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(le),se.translateZ(ee),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),re[10]===-1)se.projectionMatrix.copy(pe.projectionMatrix),se.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const J=ce+ee,M=Ue+ee,v=K-le,I=q+(F-le),G=w*Ue/M*J,Y=R*Ue/M*J;se.projectionMatrix.makePerspective(v,I,G,Y,J,M),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function me(se,pe){pe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(pe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let pe=se.near,ye=se.far;_.texture!==null&&(_.depthNear>0&&(pe=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),y.near=N.near=C.near=pe,y.far=N.far=C.far=ye,(D!==y.near||U!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,U=y.far),C.layers.mask=se.layers.mask|2,N.layers.mask=se.layers.mask|4,y.layers.mask=C.layers.mask|N.layers.mask;const F=se.parent,re=y.cameras;me(y,F);for(let ae=0;ae<re.length;ae++)me(re[ae],F);re.length===2?V(y,C,N):y.projectionMatrix.copy(C.projectionMatrix),xe(se,y,F)};function xe(se,pe,ye){ye===null?se.matrix.copy(pe.matrixWorld):(se.matrix.copy(ye.matrixWorld),se.matrix.invert(),se.matrix.multiply(pe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(pe.projectionMatrix),se.projectionMatrixInverse.copy(pe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Qs*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(se){c=se,f!==null&&(f.fixedFoveation=se),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=se)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Re=null;function Le(se,pe){if(u=pe.getViewerPose(l||o),g=pe,u!==null){const ye=u.views;h!==null&&(e.setRenderTargetFramebuffer(A,h.framebuffer),e.setRenderTarget(A));let F=!1;ye.length!==y.cameras.length&&(y.cameras.length=0,F=!0);for(let ce=0;ce<ye.length;ce++){const Ue=ye[ce];let w=null;if(h!==null)w=h.getViewport(Ue);else{const x=d.getViewSubImage(f,Ue);w=x.viewport,ce===0&&(e.setRenderTargetTextures(A,x.colorTexture,f.ignoreDepthValues?void 0:x.depthStencilTexture),e.setRenderTarget(A))}let R=T[ce];R===void 0&&(R=new Yt,R.layers.enable(ce),R.viewport=new it,T[ce]=R),R.matrix.fromArray(Ue.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Ue.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(w.x,w.y,w.width,w.height),ce===0&&(y.matrix.copy(R.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),F===!0&&y.cameras.push(R)}const re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const ce=d.getDepthInformation(ye[0]);ce&&ce.isValid&&ce.texture&&_.init(e,ce,s.renderState)}}for(let ye=0;ye<b.length;ye++){const F=S[ye],re=b[ye];F!==null&&re!==void 0&&re.update(F,pe,l||o)}Re&&Re(se,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),g=null}const Je=new sm;Je.setAnimationLoop(Le),this.setAnimationLoop=function(se){Re=se},this.dispose=function(){}}}const Ji=new kn,vb=new We;function xb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Xp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,A,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),b=A.envMap,S=A.envMapRotation;b&&(m.envMap.value=b,Ji.copy(S),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),m.envMapRotation.value.setFromMatrix4(vb.makeRotationFromEuler(Ji)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,A,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Sb(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,b){const S=b.program;i.uniformBlockBinding(A,S)}function l(A,b){let S=s[A.id];S===void 0&&(g(A),S=u(A),s[A.id]=S,A.addEventListener("dispose",m));const L=b.program;i.updateUBOMapping(A,L);const P=e.render.frame;r[A.id]!==P&&(f(A),r[A.id]=P)}function u(A){const b=d();A.__bindingPointIndex=b;const S=n.createBuffer(),L=A.__size,P=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,L,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const b=s[A.id],S=A.uniforms,L=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let P=0,C=S.length;P<C;P++){const N=Array.isArray(S[P])?S[P]:[S[P]];for(let T=0,y=N.length;T<y;T++){const D=N[T];if(h(D,P,T,L)===!0){const U=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let Q=0;for(let ne=0;ne<B.length;ne++){const Z=B[ne],j=_(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,U+Q,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):(Z.toArray(D.__data,Q),Q+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(A,b,S,L){const P=A.value,C=b+"_"+S;if(L[C]===void 0)return typeof P=="number"||typeof P=="boolean"?L[C]=P:L[C]=P.clone(),!0;{const N=L[C];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return L[C]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function g(A){const b=A.uniforms;let S=0;const L=16;for(let C=0,N=b.length;C<N;C++){const T=Array.isArray(b[C])?b[C]:[b[C]];for(let y=0,D=T.length;y<D;y++){const U=T[y],B=Array.isArray(U.value)?U.value:[U.value];for(let Q=0,ne=B.length;Q<ne;Q++){const Z=B[Q],j=_(Z),V=S%L,me=V%j.boundary,xe=V+me;S+=me,xe!==0&&L-xe<j.storage&&(S+=L-xe),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=j.storage}}}const P=S%L;return P>0&&(S+=L-P),A.__size=S,A.__cache={},this}function _(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function m(A){const b=A.target;b.removeEventListener("dispose",m);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class lm{constructor(e={}){const{canvas:t=yx(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const A=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this.toneMapping=Di,this.toneMappingExposure=1;const S=this;let L=!1,P=0,C=0,N=null,T=-1,y=null;const D=new it,U=new it;let B=null;const Q=new ze(0);let ne=0,Z=t.width,j=t.height,V=1,me=null,xe=null;const Re=new it(0,0,Z,j),Le=new it(0,0,Z,j);let Je=!1;const se=new hu;let pe=!1,ye=!1;this.transmissionResolutionScale=1;const F=new We,re=new We,ae=new z,ce=new it,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function R(){return N===null?V:1}let x=i;function ie(E,H){return t.getContext(E,H)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${eu}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",be,!1),x===null){const H="webgl2";if(x=ie(H,E),x===null)throw ie(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let K,q,ee,le,J,M,v,I,G,Y,W,ge,ue,_e,Ne,de,Me,Pe,Fe,ve,Be,Ve,ft,O;function Ee(){K=new LE(x),K.init(),Ve=new hb(x,K),q=new bE(x,K,e,Ve),ee=new db(x,K),q.reverseDepthBuffer&&f&&ee.buffers.depth.setReversed(!0),le=new UE(x),J=new JT,M=new fb(x,K,ee,J,q,Ve,le),v=new wE(S),I=new PE(S),G=new zS(x),ft=new EE(x,G),Y=new IE(x,G,le,ft),W=new FE(x,Y,G,le),Fe=new NE(x,q,M),de=new AE(J),ge=new ZT(S,v,I,K,q,ft,de),ue=new xb(S,J),_e=new eb,Ne=new ob(K),Pe=new yE(S,v,I,ee,W,h,c),Me=new lb(S,W,q),O=new Sb(x,le,q,ee),ve=new TE(x,K,le),Be=new DE(x,K,le),le.programs=ge.programs,S.capabilities=q,S.extensions=K,S.properties=J,S.renderLists=_e,S.shadowMap=Me,S.state=ee,S.info=le}Ee();const te=new _b(S,x);this.xr=te,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const E=K.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=K.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(Z,j,!1))},this.getSize=function(E){return E.set(Z,j)},this.setSize=function(E,H,X=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,j=H,t.width=Math.floor(E*V),t.height=Math.floor(H*V),X===!0&&(t.style.width=E+"px",t.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(Z*V,j*V).floor()},this.setDrawingBufferSize=function(E,H,X){Z=E,j=H,V=X,t.width=Math.floor(E*X),t.height=Math.floor(H*X),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(Re)},this.setViewport=function(E,H,X,$){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,H,X,$),ee.viewport(D.copy(Re).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Le)},this.setScissor=function(E,H,X,$){E.isVector4?Le.set(E.x,E.y,E.z,E.w):Le.set(E,H,X,$),ee.scissor(U.copy(Le).multiplyScalar(V).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(E){ee.setScissorTest(Je=E)},this.setOpaqueSort=function(E){me=E},this.setTransparentSort=function(E){xe=E},this.getClearColor=function(E){return E.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(E=!0,H=!0,X=!0){let $=0;if(E){let k=!1;if(N!==null){const he=N.texture.format;k=he===cu||he===au||he===ou}if(k){const he=N.texture.type,Te=he===di||he===us||he===$r||he===Zs||he===iu||he===su,we=Pe.getClearColor(),Ce=Pe.getClearAlpha(),He=we.r,ke=we.g,Ie=we.b;Te?(g[0]=He,g[1]=ke,g[2]=Ie,g[3]=Ce,x.clearBufferuiv(x.COLOR,0,g)):(_[0]=He,_[1]=ke,_[2]=Ie,_[3]=Ce,x.clearBufferiv(x.COLOR,0,_))}else $|=x.COLOR_BUFFER_BIT}H&&($|=x.DEPTH_BUFFER_BIT),X&&($|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Pe.dispose(),_e.dispose(),Ne.dispose(),J.dispose(),v.dispose(),I.dispose(),W.dispose(),ft.dispose(),O.dispose(),ge.dispose(),te.dispose(),te.removeEventListener("sessionstart",Mu),te.removeEventListener("sessionend",yu),zi.stop()};function oe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=le.autoReset,H=Me.enabled,X=Me.autoUpdate,$=Me.needsUpdate,k=Me.type;Ee(),le.autoReset=E,Me.enabled=H,Me.autoUpdate=X,Me.needsUpdate=$,Me.type=k}function be(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xe(E){const H=E.target;H.removeEventListener("dispose",Xe),xt(H)}function xt(E){Nt(E),J.remove(E)}function Nt(E){const H=J.get(E).programs;H!==void 0&&(H.forEach(function(X){ge.releaseProgram(X)}),E.isShaderMaterial&&ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,X,$,k,he){H===null&&(H=Ue);const Te=k.isMesh&&k.matrixWorld.determinant()<0,we=gm(E,H,X,$,k);ee.setMaterial($,Te);let Ce=X.index,He=1;if($.wireframe===!0){if(Ce=Y.getWireframeAttribute(X),Ce===void 0)return;He=2}const ke=X.drawRange,Ie=X.attributes.position;let et=ke.start*He,st=(ke.start+ke.count)*He;he!==null&&(et=Math.max(et,he.start*He),st=Math.min(st,(he.start+he.count)*He)),Ce!==null?(et=Math.max(et,0),st=Math.min(st,Ce.count)):Ie!=null&&(et=Math.max(et,0),st=Math.min(st,Ie.count));const Tt=st-et;if(Tt<0||Tt===1/0)return;ft.setup(k,$,we,X,Ce);let St,tt=ve;if(Ce!==null&&(St=G.get(Ce),tt=Be,tt.setIndex(St)),k.isMesh)$.wireframe===!0?(ee.setLineWidth($.wireframeLinewidth*R()),tt.setMode(x.LINES)):tt.setMode(x.TRIANGLES);else if(k.isLine){let De=$.linewidth;De===void 0&&(De=1),ee.setLineWidth(De*R()),k.isLineSegments?tt.setMode(x.LINES):k.isLineLoop?tt.setMode(x.LINE_LOOP):tt.setMode(x.LINE_STRIP)}else k.isPoints?tt.setMode(x.POINTS):k.isSprite&&tt.setMode(x.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)tt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))tt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const De=k._multiDrawStarts,Dt=k._multiDrawCounts,rt=k._multiDrawCount,Mn=Ce?G.get(Ce).bytesPerElement:1,hs=J.get($).currentProgram.getUniforms();for(let en=0;en<rt;en++)hs.setValue(x,"_gl_DrawID",en),tt.render(De[en]/Mn,Dt[en])}else if(k.isInstancedMesh)tt.renderInstances(et,Tt,k.count);else if(X.isInstancedBufferGeometry){const De=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Dt=Math.min(X.instanceCount,De);tt.renderInstances(et,Tt,Dt)}else tt.render(et,Tt)};function ct(E,H,X){E.transparent===!0&&E.side===On&&E.forceSinglePass===!1?(E.side=Qt,E.needsUpdate=!0,oo(E,H,X),E.side=ui,E.needsUpdate=!0,oo(E,H,X),E.side=On):oo(E,H,X)}this.compile=function(E,H,X=null){X===null&&(X=E),p=Ne.get(X),p.init(H),b.push(p),X.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),E!==X&&E.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const $=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const he=k.material;if(he)if(Array.isArray(he))for(let Te=0;Te<he.length;Te++){const we=he[Te];ct(we,X,k),$.add(we)}else ct(he,X,k),$.add(he)}),b.pop(),p=null,$},this.compileAsync=function(E,H,X=null){const $=this.compile(E,H,X);return new Promise(k=>{function he(){if($.forEach(function(Te){J.get(Te).currentProgram.isReady()&&$.delete(Te)}),$.size===0){k(E);return}setTimeout(he,10)}K.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Sn=null;function Xn(E){Sn&&Sn(E)}function Mu(){zi.stop()}function yu(){zi.start()}const zi=new sm;zi.setAnimationLoop(Xn),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(E){Sn=E,te.setAnimationLoop(E),E===null?zi.stop():zi.start()},te.addEventListener("sessionstart",Mu),te.addEventListener("sessionend",yu),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(H),H=te.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,H,N),p=Ne.get(E,b.length),p.init(H),b.push(p),re.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),se.setFromProjectionMatrix(re),ye=this.localClippingEnabled,pe=de.init(this.clippingPlanes,ye),m=_e.get(E,A.length),m.init(),A.push(m),te.enabled===!0&&te.isPresenting===!0){const he=S.xr.getDepthSensingMesh();he!==null&&Ca(he,H,-1/0,S.sortObjects)}Ca(E,H,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(me,xe),w=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,w&&Pe.addToRenderList(m,E),this.info.render.frame++,pe===!0&&de.beginShadows();const X=p.state.shadowsArray;Me.render(X,E,H),pe===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,k=m.transmissive;if(p.setupLights(),H.isArrayCamera){const he=H.cameras;if(k.length>0)for(let Te=0,we=he.length;Te<we;Te++){const Ce=he[Te];Tu($,k,E,Ce)}w&&Pe.render(E);for(let Te=0,we=he.length;Te<we;Te++){const Ce=he[Te];Eu(m,E,Ce,Ce.viewport)}}else k.length>0&&Tu($,k,E,H),w&&Pe.render(E),Eu(m,E,H);N!==null&&C===0&&(M.updateMultisampleRenderTarget(N),M.updateRenderTargetMipmap(N)),E.isScene===!0&&E.onAfterRender(S,E,H),ft.resetDefaultState(),T=-1,y=null,b.pop(),b.length>0?(p=b[b.length-1],pe===!0&&de.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ca(E,H,X,$){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||se.intersectsSprite(E)){$&&ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);const Te=W.update(E),we=E.material;we.visible&&m.push(E,Te,we,X,ce.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||se.intersectsObject(E))){const Te=W.update(E),we=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ce.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ce.copy(Te.boundingSphere.center)),ce.applyMatrix4(E.matrixWorld).applyMatrix4(re)),Array.isArray(we)){const Ce=Te.groups;for(let He=0,ke=Ce.length;He<ke;He++){const Ie=Ce[He],et=we[Ie.materialIndex];et&&et.visible&&m.push(E,Te,et,X,ce.z,Ie)}}else we.visible&&m.push(E,Te,we,X,ce.z,null)}}const he=E.children;for(let Te=0,we=he.length;Te<we;Te++)Ca(he[Te],H,X,$)}function Eu(E,H,X,$){const k=E.opaque,he=E.transmissive,Te=E.transparent;p.setupLightsView(X),pe===!0&&de.setGlobalState(S.clippingPlanes,X),$&&ee.viewport(D.copy($)),k.length>0&&ro(k,H,X),he.length>0&&ro(he,H,X),Te.length>0&&ro(Te,H,X),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Tu(E,H,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new ds(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?to:di,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const he=p.state.transmissionRenderTarget[$.id],Te=$.viewport||D;he.setSize(Te.z*S.transmissionResolutionScale,Te.w*S.transmissionResolutionScale);const we=S.getRenderTarget();S.setRenderTarget(he),S.getClearColor(Q),ne=S.getClearAlpha(),ne<1&&S.setClearColor(16777215,.5),S.clear(),w&&Pe.render(X);const Ce=S.toneMapping;S.toneMapping=Di;const He=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),pe===!0&&de.setGlobalState(S.clippingPlanes,$),ro(E,X,$),M.updateMultisampleRenderTarget(he),M.updateRenderTargetMipmap(he),K.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ie=0,et=H.length;Ie<et;Ie++){const st=H[Ie],Tt=st.object,St=st.geometry,tt=st.material,De=st.group;if(tt.side===On&&Tt.layers.test($.layers)){const Dt=tt.side;tt.side=Qt,tt.needsUpdate=!0,bu(Tt,X,$,St,tt,De),tt.side=Dt,tt.needsUpdate=!0,ke=!0}}ke===!0&&(M.updateMultisampleRenderTarget(he),M.updateRenderTargetMipmap(he))}S.setRenderTarget(we),S.setClearColor(Q,ne),He!==void 0&&($.viewport=He),S.toneMapping=Ce}function ro(E,H,X){const $=H.isScene===!0?H.overrideMaterial:null;for(let k=0,he=E.length;k<he;k++){const Te=E[k],we=Te.object,Ce=Te.geometry,He=$===null?Te.material:$,ke=Te.group;we.layers.test(X.layers)&&bu(we,H,X,Ce,He,ke)}}function bu(E,H,X,$,k,he){E.onBeforeRender(S,H,X,$,k,he),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(S,H,X,$,E,he),k.transparent===!0&&k.side===On&&k.forceSinglePass===!1?(k.side=Qt,k.needsUpdate=!0,S.renderBufferDirect(X,H,$,k,E,he),k.side=ui,k.needsUpdate=!0,S.renderBufferDirect(X,H,$,k,E,he),k.side=On):S.renderBufferDirect(X,H,$,k,E,he),E.onAfterRender(S,H,X,$,k,he)}function oo(E,H,X){H.isScene!==!0&&(H=Ue);const $=J.get(E),k=p.state.lights,he=p.state.shadowsArray,Te=k.state.version,we=ge.getParameters(E,k.state,he,H,X),Ce=ge.getProgramCacheKey(we);let He=$.programs;$.environment=E.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(E.isMeshStandardMaterial?I:v).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,He===void 0&&(E.addEventListener("dispose",Xe),He=new Map,$.programs=He);let ke=He.get(Ce);if(ke!==void 0){if($.currentProgram===ke&&$.lightsStateVersion===Te)return wu(E,we),ke}else we.uniforms=ge.getUniforms(E),E.onBeforeCompile(we,S),ke=ge.acquireProgram(we,Ce),He.set(Ce,ke),$.uniforms=we.uniforms;const Ie=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=de.uniform),wu(E,we),$.needsLights=vm(E),$.lightsStateVersion=Te,$.needsLights&&(Ie.ambientLightColor.value=k.state.ambient,Ie.lightProbe.value=k.state.probe,Ie.directionalLights.value=k.state.directional,Ie.directionalLightShadows.value=k.state.directionalShadow,Ie.spotLights.value=k.state.spot,Ie.spotLightShadows.value=k.state.spotShadow,Ie.rectAreaLights.value=k.state.rectArea,Ie.ltc_1.value=k.state.rectAreaLTC1,Ie.ltc_2.value=k.state.rectAreaLTC2,Ie.pointLights.value=k.state.point,Ie.pointLightShadows.value=k.state.pointShadow,Ie.hemisphereLights.value=k.state.hemi,Ie.directionalShadowMap.value=k.state.directionalShadowMap,Ie.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ie.spotShadowMap.value=k.state.spotShadowMap,Ie.spotLightMatrix.value=k.state.spotLightMatrix,Ie.spotLightMap.value=k.state.spotLightMap,Ie.pointShadowMap.value=k.state.pointShadowMap,Ie.pointShadowMatrix.value=k.state.pointShadowMatrix),$.currentProgram=ke,$.uniformsList=null,ke}function Au(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=$o.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function wu(E,H){const X=J.get(E);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.batchingColor=H.batchingColor,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.instancingMorph=H.instancingMorph,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function gm(E,H,X,$,k){H.isScene!==!0&&(H=Ue),M.resetTextureUnits();const he=H.fog,Te=$.isMeshStandardMaterial?H.environment:null,we=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Kt,Ce=($.isMeshStandardMaterial?I:v).get($.envMap||Te),He=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ke=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ie=!!X.morphAttributes.position,et=!!X.morphAttributes.normal,st=!!X.morphAttributes.color;let Tt=Di;$.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Tt=S.toneMapping);const St=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,tt=St!==void 0?St.length:0,De=J.get($),Dt=p.state.lights;if(pe===!0&&(ye===!0||E!==y)){const Vt=E===y&&$.id===T;de.setState($,E,Vt)}let rt=!1;$.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Dt.state.version||De.outputColorSpace!==we||k.isBatchedMesh&&De.batching===!1||!k.isBatchedMesh&&De.batching===!0||k.isBatchedMesh&&De.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&De.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&De.instancing===!1||!k.isInstancedMesh&&De.instancing===!0||k.isSkinnedMesh&&De.skinning===!1||!k.isSkinnedMesh&&De.skinning===!0||k.isInstancedMesh&&De.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&De.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&De.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&De.instancingMorph===!1&&k.morphTexture!==null||De.envMap!==Ce||$.fog===!0&&De.fog!==he||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==de.numPlanes||De.numIntersection!==de.numIntersection)||De.vertexAlphas!==He||De.vertexTangents!==ke||De.morphTargets!==Ie||De.morphNormals!==et||De.morphColors!==st||De.toneMapping!==Tt||De.morphTargetsCount!==tt)&&(rt=!0):(rt=!0,De.__version=$.version);let Mn=De.currentProgram;rt===!0&&(Mn=oo($,H,k));let hs=!1,en=!1,lr=!1;const gt=Mn.getUniforms(),ln=De.uniforms;if(ee.useProgram(Mn.program)&&(hs=!0,en=!0,lr=!0),$.id!==T&&(T=$.id,en=!0),hs||y!==E){ee.buffers.depth.getReversed()?(F.copy(E.projectionMatrix),Tx(F),bx(F),gt.setValue(x,"projectionMatrix",F)):gt.setValue(x,"projectionMatrix",E.projectionMatrix),gt.setValue(x,"viewMatrix",E.matrixWorldInverse);const Zt=gt.map.cameraPosition;Zt!==void 0&&Zt.setValue(x,ae.setFromMatrixPosition(E.matrixWorld)),q.logarithmicDepthBuffer&&gt.setValue(x,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&gt.setValue(x,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,en=!0,lr=!0)}if(k.isSkinnedMesh){gt.setOptional(x,k,"bindMatrix"),gt.setOptional(x,k,"bindMatrixInverse");const Vt=k.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),gt.setValue(x,"boneTexture",Vt.boneTexture,M))}k.isBatchedMesh&&(gt.setOptional(x,k,"batchingTexture"),gt.setValue(x,"batchingTexture",k._matricesTexture,M),gt.setOptional(x,k,"batchingIdTexture"),gt.setValue(x,"batchingIdTexture",k._indirectTexture,M),gt.setOptional(x,k,"batchingColorTexture"),k._colorsTexture!==null&&gt.setValue(x,"batchingColorTexture",k._colorsTexture,M));const un=X.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Fe.update(k,X,Mn),(en||De.receiveShadow!==k.receiveShadow)&&(De.receiveShadow=k.receiveShadow,gt.setValue(x,"receiveShadow",k.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ln.envMap.value=Ce,ln.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&H.environment!==null&&(ln.envMapIntensity.value=H.environmentIntensity),en&&(gt.setValue(x,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&_m(ln,lr),he&&$.fog===!0&&ue.refreshFogUniforms(ln,he),ue.refreshMaterialUniforms(ln,$,V,j,p.state.transmissionRenderTarget[E.id]),$o.upload(x,Au(De),ln,M)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&($o.upload(x,Au(De),ln,M),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&gt.setValue(x,"center",k.center),gt.setValue(x,"modelViewMatrix",k.modelViewMatrix),gt.setValue(x,"normalMatrix",k.normalMatrix),gt.setValue(x,"modelMatrix",k.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Vt=$.uniformsGroups;for(let Zt=0,Pa=Vt.length;Zt<Pa;Zt++){const Vi=Vt[Zt];O.update(Vi,Mn),O.bind(Vi,Mn)}}return Mn}function _m(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function vm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,H,X){J.get(E.texture).__webglTexture=H,J.get(E.depthTexture).__webglTexture=X;const $=J.get(E);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,H){const X=J.get(E);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0};const xm=x.createFramebuffer();this.setRenderTarget=function(E,H=0,X=0){N=E,P=H,C=X;let $=!0,k=null,he=!1,Te=!1;if(E){const Ce=J.get(E);if(Ce.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(x.FRAMEBUFFER,null),$=!1;else if(Ce.__webglFramebuffer===void 0)M.setupRenderTarget(E);else if(Ce.__hasExternalTextures)M.rebindTextures(E,J.get(E.texture).__webglTexture,J.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ie=E.depthTexture;if(Ce.__boundDepthTexture!==Ie){if(Ie!==null&&J.has(Ie)&&(E.width!==Ie.image.width||E.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(E)}}const He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const ke=J.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[H])?k=ke[H][X]:k=ke[H],he=!0):E.samples>0&&M.useMultisampledRTT(E)===!1?k=J.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?k=ke[X]:k=ke,D.copy(E.viewport),U.copy(E.scissor),B=E.scissorTest}else D.copy(Re).multiplyScalar(V).floor(),U.copy(Le).multiplyScalar(V).floor(),B=Je;if(X!==0&&(k=xm),ee.bindFramebuffer(x.FRAMEBUFFER,k)&&$&&ee.drawBuffers(E,k),ee.viewport(D),ee.scissor(U),ee.setScissorTest(B),he){const Ce=J.get(E.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ce.__webglTexture,X)}else if(Te){const Ce=J.get(E.texture),He=H;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Ce.__webglTexture,X,He)}else if(E!==null&&X!==0){const Ce=J.get(E.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Ce.__webglTexture,X)}T=-1},this.readRenderTargetPixels=function(E,H,X,$,k,he,Te){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=J.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we){ee.bindFramebuffer(x.FRAMEBUFFER,we);try{const Ce=E.texture,He=Ce.format,ke=Ce.type;if(!q.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-$&&X>=0&&X<=E.height-k&&x.readPixels(H,X,$,k,Ve.convert(He),Ve.convert(ke),he)}finally{const Ce=N!==null?J.get(N).__webglFramebuffer:null;ee.bindFramebuffer(x.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(E,H,X,$,k,he,Te){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=J.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we){const Ce=E.texture,He=Ce.format,ke=Ce.type;if(!q.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=E.width-$&&X>=0&&X<=E.height-k){ee.bindFramebuffer(x.FRAMEBUFFER,we);const Ie=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Ie),x.bufferData(x.PIXEL_PACK_BUFFER,he.byteLength,x.STREAM_READ),x.readPixels(H,X,$,k,Ve.convert(He),Ve.convert(ke),0);const et=N!==null?J.get(N).__webglFramebuffer:null;ee.bindFramebuffer(x.FRAMEBUFFER,et);const st=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Ex(x,st,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Ie),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,he),x.deleteBuffer(Ie),x.deleteSync(st),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,H=null,X=0){E.isTexture!==!0&&(Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1]);const $=Math.pow(2,-X),k=Math.floor(E.image.width*$),he=Math.floor(E.image.height*$),Te=H!==null?H.x:0,we=H!==null?H.y:0;M.setTexture2D(E,0),x.copyTexSubImage2D(x.TEXTURE_2D,X,0,0,Te,we,k,he),ee.unbindTexture()};const Sm=x.createFramebuffer(),Mm=x.createFramebuffer();this.copyTextureToTexture=function(E,H,X=null,$=null,k=0,he=null){E.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,E=arguments[1],H=arguments[2],he=arguments[3]||0,X=null),he===null&&(k!==0?(Is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=k,k=0):he=0);let Te,we,Ce,He,ke,Ie,et,st,Tt;const St=E.isCompressedTexture?E.mipmaps[he]:E.image;if(X!==null)Te=X.max.x-X.min.x,we=X.max.y-X.min.y,Ce=X.isBox3?X.max.z-X.min.z:1,He=X.min.x,ke=X.min.y,Ie=X.isBox3?X.min.z:0;else{const un=Math.pow(2,-k);Te=Math.floor(St.width*un),we=Math.floor(St.height*un),E.isDataArrayTexture?Ce=St.depth:E.isData3DTexture?Ce=Math.floor(St.depth*un):Ce=1,He=0,ke=0,Ie=0}$!==null?(et=$.x,st=$.y,Tt=$.z):(et=0,st=0,Tt=0);const tt=Ve.convert(H.format),De=Ve.convert(H.type);let Dt;H.isData3DTexture?(M.setTexture3D(H,0),Dt=x.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(M.setTexture2DArray(H,0),Dt=x.TEXTURE_2D_ARRAY):(M.setTexture2D(H,0),Dt=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,H.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,H.unpackAlignment);const rt=x.getParameter(x.UNPACK_ROW_LENGTH),Mn=x.getParameter(x.UNPACK_IMAGE_HEIGHT),hs=x.getParameter(x.UNPACK_SKIP_PIXELS),en=x.getParameter(x.UNPACK_SKIP_ROWS),lr=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,St.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,St.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,He),x.pixelStorei(x.UNPACK_SKIP_ROWS,ke),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ie);const gt=E.isDataArrayTexture||E.isData3DTexture,ln=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){const un=J.get(E),Vt=J.get(H),Zt=J.get(un.__renderTarget),Pa=J.get(Vt.__renderTarget);ee.bindFramebuffer(x.READ_FRAMEBUFFER,Zt.__webglFramebuffer),ee.bindFramebuffer(x.DRAW_FRAMEBUFFER,Pa.__webglFramebuffer);for(let Vi=0;Vi<Ce;Vi++)gt&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,J.get(E).__webglTexture,k,Ie+Vi),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,J.get(H).__webglTexture,he,Tt+Vi)),x.blitFramebuffer(He,ke,Te,we,et,st,Te,we,x.DEPTH_BUFFER_BIT,x.NEAREST);ee.bindFramebuffer(x.READ_FRAMEBUFFER,null),ee.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||J.has(E)){const un=J.get(E),Vt=J.get(H);ee.bindFramebuffer(x.READ_FRAMEBUFFER,Sm),ee.bindFramebuffer(x.DRAW_FRAMEBUFFER,Mm);for(let Zt=0;Zt<Ce;Zt++)gt?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,un.__webglTexture,k,Ie+Zt):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,un.__webglTexture,k),ln?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Vt.__webglTexture,he,Tt+Zt):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Vt.__webglTexture,he),k!==0?x.blitFramebuffer(He,ke,Te,we,et,st,Te,we,x.COLOR_BUFFER_BIT,x.NEAREST):ln?x.copyTexSubImage3D(Dt,he,et,st,Tt+Zt,He,ke,Te,we):x.copyTexSubImage2D(Dt,he,et,st,He,ke,Te,we);ee.bindFramebuffer(x.READ_FRAMEBUFFER,null),ee.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else ln?E.isDataTexture||E.isData3DTexture?x.texSubImage3D(Dt,he,et,st,Tt,Te,we,Ce,tt,De,St.data):H.isCompressedArrayTexture?x.compressedTexSubImage3D(Dt,he,et,st,Tt,Te,we,Ce,tt,St.data):x.texSubImage3D(Dt,he,et,st,Tt,Te,we,Ce,tt,De,St):E.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,he,et,st,Te,we,tt,De,St.data):E.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,he,et,st,St.width,St.height,tt,St.data):x.texSubImage2D(x.TEXTURE_2D,he,et,st,Te,we,tt,De,St);x.pixelStorei(x.UNPACK_ROW_LENGTH,rt),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Mn),x.pixelStorei(x.UNPACK_SKIP_PIXELS,hs),x.pixelStorei(x.UNPACK_SKIP_ROWS,en),x.pixelStorei(x.UNPACK_SKIP_IMAGES,lr),he===0&&H.generateMipmaps&&x.generateMipmap(Dt),ee.unbindTexture()},this.copyTextureToTexture3D=function(E,H,X=null,$=null,k=0){return E.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,$=arguments[1]||null,E=arguments[2],H=arguments[3],k=arguments[4]||0),Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,H,X,$,k)},this.initRenderTarget=function(E){J.get(E).__webglFramebuffer===void 0&&M.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?M.setTextureCube(E,0):E.isData3DTexture?M.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?M.setTexture2DArray(E,0):M.setTexture2D(E,0),ee.unbindTexture()},this.resetState=function(){P=0,C=0,N=null,ee.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function qf(n,e){if(e===j0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===wl||e===Fp){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===wl)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class um extends ar{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new bb(t)}),this.register(function(t){return new Ab(t)}),this.register(function(t){return new Nb(t)}),this.register(function(t){return new Fb(t)}),this.register(function(t){return new Ob(t)}),this.register(function(t){return new Rb(t)}),this.register(function(t){return new Cb(t)}),this.register(function(t){return new Pb(t)}),this.register(function(t){return new Lb(t)}),this.register(function(t){return new Tb(t)}),this.register(function(t){return new Ib(t)}),this.register(function(t){return new wb(t)}),this.register(function(t){return new Ub(t)}),this.register(function(t){return new Db(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new Bb(t)}),this.register(function(t){return new Hb(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Or.extractUrlBase(e);o=Or.resolveURL(l,this.path)}else o=Or.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new nm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===dm){try{o[Ke.KHR_BINARY_GLTF]=new kb(e)}catch(d){s&&s(d);return}r=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Qb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(d){case Ke.KHR_MATERIALS_UNLIT:o[d]=new Eb;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[d]=new zb(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[d]=new Vb;break;case Ke.KHR_MESH_QUANTIZATION:o[d]=new Gb;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function Mb(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class yb{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new ze(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Kt);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new _u(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new AS(u),l.distance=d;break;case"spot":l=new TS(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ii(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class Eb{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return os}extendParams(e,t,i){const s=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Kt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Pt))}return Promise.all(s)}}class Tb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class bb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(a,a)}return Promise.all(r)}}class Ab{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class wb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Rb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Kt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Pt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Cb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Pb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(a[0],a[1],a[2],Kt),Promise.all(r)}}class Lb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Ib{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(a[0],a[1],a[2],Kt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Pt)),Promise.all(r)}}class Db{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Ub{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Nb{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Fb{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ob{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Bb{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,d=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,s.mode,s.filter).then(function(h){return h.buffer}):o.ready.then(function(){const h=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(h),u,d,f,s.mode,s.filter),h})})}else return null}}class Hb{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const l of s.primitives)if(l.mode!==hn.TRIANGLES&&l.mode!==hn.TRIANGLE_STRIP&&l.mode!==hn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),d=u.isGroup?u.children:[u],f=l[0].count,h=[];for(const g of d){const _=new We,m=new z,p=new ki,A=new z(1,1,1),b=new tS(g.geometry,g.material,f);for(let S=0;S<f;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&A.fromBufferAttribute(c.SCALE,S),b.setMatrixAt(S,_.compose(m,p,A));for(const S in c)if(S==="_COLOR_0"){const L=c[S];b.instanceColor=new Cl(L.array,L.itemSize,L.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,c[S]);vt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),h.push(b)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const dm="glTF",Mr=12,Yf={JSON:1313821514,BIN:5130562};class kb{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Mr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Mr,r=new DataView(e,Mr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Yf.JSON){const l=new Uint8Array(e,Mr+o,a);this.content=i.decode(l)}else if(c===Yf.BIN){const l=Mr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class zb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const d=Dl[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Dl[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],h=Ws[f.componentType];l[d]=h.name,c[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,f){s.decodeDracoFile(u,function(h){for(const g in h.attributes){const _=h.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}d(h)},a,l,Kt,f)})})}}class Vb{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Gb{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class fm extends so{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,d=(i-t)/u,f=d*d,h=f*d,g=e*l,_=g-l,m=-2*h+3*f,p=h-f,A=1-m,b=p-f+d;for(let S=0;S!==a;S++){const L=o[_+S+a],P=o[_+S+c]*u,C=o[g+S+a],N=o[g+S]*u;r[S]=A*L+b*P+m*C+p*N}return r}}const Wb=new ki;class Xb extends fm{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return Wb.fromArray(r).normalize().toArray(r),r}}const hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ws={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jf={9728:jt,9729:an,9984:Ap,9985:Go,9986:Tr,9987:ri},$f={33071:Ci,33648:sa,10497:Ks},bc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Dl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qb={CUBICSPLINE:void 0,LINEAR:Zr,STEP:Kr},Ac={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Yb(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new mu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ui})),n.DefaultMaterial}function Qi(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ii(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jb(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const d=e[l];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];if(i){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(f)}if(s){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],d=l[1],f=l[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=d),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function $b(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Kb(n){let e;const t=n.extensions&&n.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wc(t.attributes):e=n.indices+":"+wc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+wc(n.targets[i]);return e}function wc(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Ul(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Zb(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Jb=new We;class Qb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Mb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new yS(this.options.manager):this.textureLoader=new RS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new nm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Qi(r,a,s),ii(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Or.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=bc[s.type],a=Ws[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new $t(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=bc[s.type],l=Ws[s.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,f=s.byteOffset||0,h=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(h&&h!==d){const p=Math.floor(f/h),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let b=t.cache.get(A);b||(_=new l(a,p*h,s.count*h/u),b=new Kx(_,h/u),t.cache.add(A,b)),m=new du(b,c,f%h/u,g)}else a===null?_=new l(s.count*c):_=new l(a,f,s.count*c),m=new $t(_,c,g);if(s.sparse!==void 0){const p=bc.SCALAR,A=Ws[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,L=new A(o[1],b,s.sparse.count*p),P=new l(o[2],S,s.sparse.count*c);a!==null&&(m=new $t(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,N=L.length;C<N;C++){const T=L[C];if(m.setX(T,P[C*c]),c>=2&&m.setY(T,P[C*c+1]),c>=3&&m.setZ(T,P[C*c+2]),c>=4&&m.setW(T,P[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=jf[f.magFilter]||an,u.minFilter=jf[f.minFilter]||ri,u.wrapS=$f[f.wrapS]||Ks,u.wrapT=$f[f.wrapT]||Ks,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==jt&&u.minFilter!==an,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(d){l=!0;const f=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(f,h){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Lt(_);m.needsUpdate=!0,f(m)}),t.load(Or.resolveURL(d,r.path),g,void 0,h)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),ii(d,o),d.userData.mimeType=o.mimeType||Zb(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new Jp,Hn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new Zp,Hn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return mu}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){const d=s[Ke.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),l.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Kt),a.opacity=f[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,Pt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=On);const u=r.alphaMode||Ac.OPAQUE;if(u===Ac.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ac.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==os&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ze(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==os&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==os){const d=r.emissiveFactor;a.emissive=new ze().setRGB(d[0],d[1],d[2],Kt)}return r.emissiveTexture!==void 0&&o!==os&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Pt)),Promise.all(l).then(function(){const d=new o(a);return r.name&&(d.name=r.name),ii(d,r),t.associations.set(d,{materials:e}),r.extensions&&Qi(s,d,r),d})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Kf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=Kb(l),d=s[u];if(d)o.push(d.promise);else{let f;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Kf(new Vn,l,t),s[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?Yb(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let h=0,g=u.length;h<g;h++){const _=u[h],m=o[h];let p;const A=l[h];if(m.mode===hn.TRIANGLES||m.mode===hn.TRIANGLE_STRIP||m.mode===hn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Jx(_,A):new cn(_,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===hn.TRIANGLE_STRIP?p.geometry=qf(p.geometry,Fp):m.mode===hn.TRIANGLE_FAN&&(p.geometry=qf(p.geometry,wl));else if(m.mode===hn.LINES)p=new sS(_,A);else if(m.mode===hn.LINE_STRIP)p=new pu(_,A);else if(m.mode===hn.LINE_LOOP)p=new rS(_,A);else if(m.mode===hn.POINTS)p=new oS(_,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&$b(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ii(p,r),m.extensions&&Qi(s,p,m),t.assignFinalMaterial(p),d.push(p)}for(let h=0,g=d.length;h<g;h++)t.associations.set(d[h],{meshes:e,primitives:h});if(d.length===1)return r.extensions&&Qi(s,d[0],r),d[0];const f=new as;r.extensions&&Qi(s,f,r),t.associations.set(f,{meshes:e});for(let h=0,g=d.length;h<g;h++)f.add(d[h]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Yt(Mx.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new wa(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ii(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const d=o[l];if(d){a.push(d);const f=new We;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new fu(a,c)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let d=0,f=s.channels.length;d<f;d++){const h=s.channels[d],g=s.samplers[h.sampler],_=h.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,A=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",A)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){const f=d[0],h=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let A=0,b=f.length;A<b;A++){const S=f[A],L=h[A],P=g[A],C=_[A],N=m[A];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const T=i._createAnimationTracks(S,L,P,C,N);if(T)for(let y=0;y<T.length;y++)p.push(T[y])}return new mS(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(i.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],d=l[1],f=l[2];f!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(f,Jb)});for(let h=0,g=d.length;h<g;h++)u.add(d[h]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new $p:l.length>1?u=new as:l.length===1?u=l[0]:u=new vt,u!==l[0])for(let d=0,f=l.length;d<f;d++)u.add(l[d]);if(r.name&&(u.userData.name=r.name,u.name=o),ii(u,r),r.extensions&&Qi(i,u,r),r.matrix!==void 0){const d=new We;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new as;i.name&&(r.name=s.createUniqueName(i.name)),ii(r,i),i.extensions&&Qi(t,r,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,d=c.length;u<d;u++)r.add(c[u]);const l=u=>{const d=new Map;for(const[f,h]of s.associations)(f instanceof Hn||f instanceof Lt)&&d.set(f,h);return u.traverse(f=>{const h=s.associations.get(f);h!=null&&d.set(f,h)}),d};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];yi[r.path]===yi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(yi[r.path]){case yi.weights:l=tr;break;case yi.rotation:l=nr;break;case yi.position:case yi.scale:l=ir;break;default:switch(i.itemSize){case 1:l=tr;break;case 2:case 3:default:l=ir;break}break}const u=s.interpolation!==void 0?qb[s.interpolation]:Zr,d=this._getArrayFromAccessor(i);for(let f=0,h=c.length;f<h;f++){const g=new l(c[f]+"."+yi[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Ul(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof nr?Xb:fm;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function eA(n,e,t){const i=e.attributes,s=new hi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new z(c[0],c[1],c[2]),new z(l[0],l[1],l[2])),a.normalized){const u=Ul(Ws[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new z,c=new z;for(let l=0,u=r.length;l<u;l++){const d=r[l];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],h=f.min,g=f.max;if(h!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),f.normalized){const _=Ul(Ws[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new zn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Kf(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(const o in i){const a=Dl[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Qe.workingColorSpace!==Kt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),ii(n,e),eA(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?jb(n,e.targets,t):n})}const tA={setup(){const n="ontouchstart"in window||navigator.maxTouchPoints>0,e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,t=zr((window.innerWidth<=768||e)&&n),i=()=>{if(t.value=(window.innerWidth<=768||e)&&n,l){const A=window.innerWidth/window.innerHeight,b=t.value?14:11;l.left=-b*A/2,l.right=b*A/2,l.top=b/2,l.bottom=-b/2,l.updateProjectionMatrix()}},s=zr(null),r=.001,o=.2,a=.95;let c,l,u,d=[],f=null;const h=new HS,g=3e-4,_=5e-4;xa(()=>{m(),p(),window.addEventListener("resize",i),window.addEventListener("orientationchange",i)}),Sa(()=>{window.removeEventListener("resize",i),window.removeEventListener("orientationchange",i)});function m(){c=new jp;const A=window.innerWidth/window.innerHeight,b=t.value?14:11;l=new wa(-b*A/2,b*A/2,b/2,-b/2,.1,1e3),l.position.set(0,0,11),l.lookAt(c.position);const S=t.value?.6:.8;l.zoom=S,l.updateProjectionMatrix(),u=new lm({antialias:!0,alpha:!0}),u.setSize(window.innerWidth,window.innerHeight),u.outputEncoding=Pt,u.toneMapping=tu,u.toneMappingExposure=1.2,u.domElement.style.pointerEvents="none",s.value.appendChild(u.domElement);const L=new _u(16777215,.8);L.position.set(3,5,5),c.add(L),c.add(new im(16777215,.6)),t.value||(u.domElement.addEventListener("pointerdown",N),u.domElement.addEventListener("pointermove",T),u.domElement.addEventListener("pointerup",y),u.domElement.addEventListener("pointerleave",y),window.addEventListener("mousemove",C)),window.addEventListener("scroll",()=>{const U=window.scrollY,B=3e-4,Q=t.value?.4:.3,ne=S,Z=S-U*B*.5,j=Math.max(Q,Math.min(ne,Z));l.zoom=j,l.updateProjectionMatrix()}),window.addEventListener("resize",()=>{const U=window.innerWidth/window.innerHeight;l.left=-b*U/2,l.right=b*U/2,l.top=b/2,l.bottom=-b/2,l.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)}),window.addEventListener("mousemove",C),u.domElement.addEventListener("pointerdown",N),u.domElement.addEventListener("pointermove",T),u.domElement.addEventListener("pointerup",y),u.domElement.addEventListener("pointerleave",y);function P(U){let B=U;for(;B;){const Q=d.find(ne=>ne.mesh===B);if(Q)return Q;B=B.parent}return null}function C(U){if(f){u.domElement.style.pointerEvents="auto";return}const B=u.domElement.getBoundingClientRect(),Q=new Ze((U.clientX-B.left)/B.width*2-1,-((U.clientY-B.top)/B.height)*2+1);h.setFromCamera(Q,l);const ne=[];d.forEach(j=>{j.mesh.traverse(V=>{V.isMesh&&ne.push(V)})});const Z=h.intersectObjects(ne,!0);u.domElement.style.pointerEvents=Z.length>0?"auto":"none"}function N(U){const B=u.domElement.getBoundingClientRect(),Q=new Ze((U.clientX-B.left)/B.width*2-1,-((U.clientY-B.top)/B.height)*2+1);h.setFromCamera(Q,l);const ne=[];d.forEach(j=>{j.mesh.traverse(V=>{V.isMesh&&ne.push(V)})});const Z=h.intersectObjects(ne,!0);if(Z.length>0){const j=P(Z[0].object);j&&(j.isDragging=!0,f=j,j.dragStart={pointerX:U.clientX,pointerY:U.clientY,rotationX:j.mesh.rotation.x,rotationY:j.mesh.rotation.y,time:performance.now()})}}function T(U){if(f&&f.isDragging&&f.dragStart){const B=U.clientX-f.dragStart.pointerX,Q=U.clientY-f.dragStart.pointerY,ne=f.dragStart.rotationY+B*r,Z=f.dragStart.rotationX+Q*r,j=performance.now(),V=j-f.dragStart.time||16,me=Q*r/(V/1e3)*o,xe=B*r/(V/1e3)*o;f.rotationVelocity={x:me,y:xe},f.dragStart.pointerX=U.clientX,f.dragStart.pointerY=U.clientY,f.dragStart.rotationX=f.mesh.rotation.x,f.dragStart.rotationY=f.mesh.rotation.y,f.dragStart.time=j,f.mesh.rotation.x=Z,f.mesh.rotation.y=ne}}function y(){f&&(f.isDragging=!1,f.dragStart=null,f=null),window.dispatchEvent(new Event("mousemove"))}function D(){requestAnimationFrame(D),d.forEach(U=>{U.mesh.rotation.y+=U.autoRotationSpeed,!t.value&&!U.isDragging&&U.rotationVelocity&&(U.mesh.rotation.x+=U.rotationVelocity.x,U.mesh.rotation.y+=U.rotationVelocity.y,U.rotationVelocity.x*=a,U.rotationVelocity.y*=a)}),u.render(c,l)}D()}function p(){const A=new um;let b,S,L;t.value?(b=[{x:-3.5,y:5,z:1.5,rotX:Math.PI/5,rotY:-Math.PI/10,rotZ:-.2},{x:-2.5,y:-6,z:0,rotX:Math.PI/10,rotY:-Math.PI/12,rotZ:-.3},{x:4,y:-1,z:.5,rotX:Math.PI/4.5,rotY:Math.PI/5,rotZ:.1}],S=["/aspan_web/assets/islandTennis.glb","/aspan_web/assets/islandFerrariF40.glb","/aspan_web/assets/islandFootball.glb"],L=.95):(b=[{x:-7.5,y:2,z:1.5,rotX:Math.PI/5,rotY:-Math.PI/10,rotZ:-.2},{x:-7.2,y:-3.5,z:.2,rotX:Math.PI/8,rotY:-Math.PI/15,rotZ:-.2},{x:7.5,y:1.8,z:.5,rotX:Math.PI/4.5,rotY:Math.PI/5,rotZ:.1},{x:7.5,y:-3.2,z:0,rotX:Math.PI/8,rotY:-Math.PI/20,rotZ:.2},{x:0,y:-4.3,z:1,rotX:Math.PI/15,rotY:0,rotZ:0}],S=["/aspan_web/assets/islandTennis.glb","/aspan_web/assets/islandHouse.glb","/aspan_web/assets/islandGarage.glb","/aspan_web/assets/islandFootball.glb","/aspan_web/assets/islandFerrariF40.glb"],L=.8),b.forEach((P,C)=>{A.load(S[C],N=>{const T=N.scene;T.position.set(P.x,P.y,P.z),T.scale.set(L,L,L),T.rotation.set(P.rotX,P.rotY,P.rotZ),c.add(T),d.push({mesh:T,isDragging:!1,rotationVelocity:{x:0,y:0},dragStart:null,autoRotationSpeed:g+Math.random()*_})},void 0,N=>console.error("Error loading model:",N))})}return{threeContainer:s}}},nA={ref:"threeContainer",class:"three-container"};function iA(n,e,t,i,s,r){return _t(),Mt("div",nA,null,512)}const hm=xn(tA,[["render",iA],["__scopeId","data-v-22c389f1"]]),sA="/aspan_web/assets/problem-map.png",rA="/aspan_web/assets/aspan-screen-gallery.png",oA="/aspan_web/assets/lessons-square.png",aA="/aspan_web/assets/quiz-square.png",cA="/aspan_web/assets/categories-square.png",lA="/aspan_web/assets/review-rectangleh.png",uA="/aspan_web/assets/hearts-rectanglev.png",dA="/aspan_web/assets/streak-square.png",fA="/aspan_web/assets/islands-square.png",hA="/aspan_web/assets/features-topics.png",pA="/aspan_web/assets/features-lessons.png",mA="/aspan_web/assets/features-quiz.png",pm="/aspan_web/assets/features-islands.png",gA={components:{IslandContainer:hm},methods:{scrollToWidgets(){const n=document.getElementById("widgets-section");n&&n.scrollIntoView({behavior:"smooth"})}}},_A={class:"hero"},vA={class:"hero-content"};function xA(n,e,t,i,s,r){const o=Hs("IslandContainer");return _t(),Mt(kt,null,[je(o),e[3]||(e[3]=fe("section",{class:"blue-screen"},null,-1)),fe("section",_A,[fe("div",vA,[e[1]||(e[1]=fe("h1",{class:"hero-title"},[At("Строй знания"),fe("br"),At("Остров за Островом")],-1)),e[2]||(e[2]=fe("p",{class:"hero-subtitle"},"Проходи микроуроки в игровом формате",-1)),fe("button",{class:"cta-button",onClick:e[0]||(e[0]=(...a)=>r.scrollToWidgets&&r.scrollToWidgets(...a))}," Начни свой путь ")])]),e[4]||(e[4]=Ni('<section class="problem-section" data-v-63e99803><div class="problem-container" data-v-63e99803><div class="problem-statement" data-v-63e99803><h2 class="classic-heading-centred" data-v-63e99803>Нехватка обучения</h2><p class="classic-description-centred" data-v-63e99803> На сегодняшний день в стране не хватает 270,000 учебных мест и 5 тысяч учителей. В интернете нет полезнах и доступных материалов для изучения различных тем на казахском и русском языках. </p></div><div class="solution-statement" data-v-63e99803><h2 class="classic-heading-centred" data-v-63e99803>Но есть ASpan</h2><p class="classic-description-centred" data-v-63e99803> ASpan это - приложение, которое предоставляет качественные материалы в интересном игровом формате. Наши микро-уроки были специально составленные учениками и учителями НИШа для максимально легкого и быстрого усвоения информации. </p></div><div class="problem-statement-image" data-v-63e99803><img src="'+sA+'" alt="Not enough schools in Kazakhstan" data-v-63e99803></div><div class="solution-statement-image" data-v-63e99803><img src="'+rA+'" alt="Gallery of panels of ASpan app" data-v-63e99803></div></div></section><section id="widgets-section" class="widgets-section" data-v-63e99803><div class="widget-container" data-v-63e99803><div class="widget square" data-v-63e99803><img src="'+oA+'" alt="Уроки" data-v-63e99803></div><div class="widget square" data-v-63e99803><img src="'+aA+'" alt="Квиз" data-v-63e99803></div><div class="widget square" data-v-63e99803><img src="'+cA+'" alt="Острова" data-v-63e99803></div><div class="widget rectangle-h" data-v-63e99803><img src="'+lA+'" alt="Обзор" data-v-63e99803></div><div class="widget rectangle-v" data-v-63e99803><img src="'+uA+'" alt="Сердца" data-v-63e99803></div><div class="widget square" data-v-63e99803><img src="'+dA+'" alt="Стрик" data-v-63e99803></div><div class="widget square" data-v-63e99803><img src="'+fA+'" alt="Длительность" data-v-63e99803></div></div></section><section class="features-section" data-v-63e99803><div class="features-grid" data-v-63e99803><div class="topics-image first-order" data-v-63e99803><img src="'+hA+'" alt="Topics" data-v-63e99803></div><div class="topics-text second-order" data-v-63e99803><h2 class="classic-heading" data-v-63e99803>Куча различных тем</h2><p class="classic-description" data-v-63e99803> В нашем приложении представлено множество разнообразных тем, чтобы удовлетворить любые интересы пользователей. Здесь вы найдёте материалы о ЗОЖ, финансах, космосе, истории, биологии и искусстве. Каждая тема разработана с учётом современных тенденций и потребностей, чтобы вы могли получить актуальную и полезную информацию. Мы уверены, что каждый найдёт что-то интересное и полезное для себя. </p></div><div class="topics-text third-order" data-v-63e99803><h2 class="classic-heading" data-v-63e99803>Уроки на каждую тему</h2><p class="classic-description" data-v-63e99803> На каждую тему у нас есть масса уроков, которые помогут разобраться во всём от начала до конца. Все уроки понятные и логичные, так что даже если ты только начинаешь, всё получится! </p></div><div class="topics-image fourth-order" data-v-63e99803><img src="'+pA+'" alt="Topics" data-v-63e99803></div><div class="topics-image fifth-order" data-v-63e99803><img src="'+mA+'" alt="Topics" data-v-63e99803></div><div class="topics-text sixth-order" data-v-63e99803><h2 class="classic-heading" data-v-63e99803>Викторины на каждый урок</h2><p class="classic-description" data-v-63e99803> К каждому уроку у нас есть викторины и всякие интерактивные штуки, чтобы учёба была не скучной. Наши тесты и игры помогут проверить, насколько ты понял материал, и сделать процесс обучения реально интересным. Это отличный способ учиться, играя и узнавая новое! </p></div><div class="topics-text seventh-order" data-v-63e99803><h2 class="classic-heading" data-v-63e99803>Зарабатывай и строй</h2><p class="classic-description" data-v-63e99803> В нашем приложении ты зарабатываешь валюту, проходя уроки и выполняя задания. Эти деньги можно тратить на покупку островов и других крутых бонусов, что делает обучение ещё более увлекательным и мотивирующим. </p></div><div class="topics-image eighth-order" data-v-63e99803><img src="'+pm+'" alt="Topics" data-v-63e99803></div></div></section>',3))],64)}const SA=xn(gA,[["render",xA],["__scopeId","data-v-63e99803"]]),MA={name:"LearningPaths",data(){return{spaceLessons:[{title:"Солнечная система",icon:"solar-system.png"},{title:"Первые люди в космосе",icon:"first-people.png"},{title:"Марс",icon:"mars.png"}],taxesLessons:[{title:"Зачем нам нужны налоги?",icon:"why-need-taxes.png"}]}},methods:{getImageUrl(n){return"/aspan_web/assets/"+n}}},yA={class:"whole-page"},EA={class:"learning-paths-container"},TA={class:"path-section"},bA={class:"path-header"},AA={class:"path-header-icon"},wA=["src"],RA={class:"path-items-container"},CA={class:"path-items"},PA=["src","alt"],LA={class:"item-title"},IA={class:"path-section"},DA={class:"path-header"},UA={class:"path-header-icon"},NA=["src"],FA={class:"path-items-container"},OA={class:"path-items"},BA=["src","alt"],HA={class:"item-title"};function kA(n,e,t,i,s,r){return _t(),Mt("div",yA,[fe("div",EA,[e[2]||(e[2]=fe("h1",{class:"main-heading"},"Микроуроки",-1)),e[3]||(e[3]=fe("p",{class:"main-subtitle"},"Выберите свой путь к знаниям",-1)),fe("section",TA,[fe("div",bA,[fe("div",AA,[fe("img",{src:r.getImageUrl("space-icon.png"),alt:"Space Icon"},null,8,wA)]),e[0]||(e[0]=fe("div",{class:"path-header-text"},[fe("h2",{class:"path-title"},"Космос"),fe("p",{class:"path-subtitle"},"Изучайте тайны вселенной")],-1))]),fe("div",RA,[fe("div",CA,[(_t(!0),Mt(kt,null,ea(s.spaceLessons,(o,a)=>(_t(),Mt("div",{key:a,class:"path-item"},[fe("img",{src:r.getImageUrl(o.icon),alt:o.title,class:"item-icon"},null,8,PA),fe("p",LA,pn(o.title),1)]))),128))])])]),fe("section",IA,[fe("div",DA,[fe("div",UA,[fe("img",{src:r.getImageUrl("finances-icon.png"),alt:"Taxes Icon"},null,8,NA)]),e[1]||(e[1]=fe("div",{class:"path-header-text"},[fe("h2",{class:"path-title"},"Налоги"),fe("p",{class:"path-subtitle"},"Откройте мир финансовых отношений")],-1))]),fe("div",FA,[fe("div",OA,[(_t(!0),Mt(kt,null,ea(s.taxesLessons,(o,a)=>(_t(),Mt("div",{key:a,class:"path-item"},[fe("img",{src:r.getImageUrl(o.icon),alt:o.title,class:"item-icon"},null,8,BA),fe("p",HA,pn(o.title),1)]))),128))])])])])])}const zA=xn(MA,[["render",kA],["__scopeId","data-v-8f301d1e"]]),VA="/aspan_web/assets/features-islands2.png",GA={name:"IslandsPage",data(){return{coins:0,islandSpawned:!1,scene:null,camera:null,renderer:null,animationId:null,islandModel:null}},methods:{completeLesson(){this.coins<10&&this.coins++},spawnIsland(){this.islandSpawned||(this.islandSpawned=!0,this.$nextTick(()=>{this.initThreeJS(),this.loadIsland()}))},initThreeJS(){const n=this.$refs.sceneContainer;this.scene=yr(new jp),this.scene.background=new ze(16120319);const e=n.clientWidth/n.clientHeight;this.camera=yr(new Yt(45,e,.1,1e3)),this.camera.position.set(0,2,7),this.camera.lookAt(new z(0,0,0)),this.renderer=yr(new lm({antialias:!0,alpha:!0})),this.renderer.setSize(n.clientWidth,n.clientHeight),this.renderer.outputEncoding=void 0,this.renderer.toneMapping=tu,this.renderer.toneMappingExposure=1.2,n.appendChild(this.renderer.domElement);const t=new im(16777215,.6);this.scene.add(t);const i=new _u(16777215,.8);i.position.set(3,5,5),this.scene.add(i),this.animate(),window.addEventListener("resize",this.onWindowResize)},animate(){this.animationId=requestAnimationFrame(()=>this.animate()),this.islandModel&&(this.islandModel.rotation.y+=.002),this.renderer.render(this.scene,this.camera)},onWindowResize(){const n=this.$refs.sceneContainer,e=n.clientWidth,t=n.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)},loadIsland(){new um().load("/aspan_web/assets/islandTennis.glb",e=>{const t=yr(e.scene);t.rotation.set(-Math.PI/-6,.5,0),t.position.set(0,-2,-10),t.scale.set(1.5,1.5,1.5),this.islandModel=t,this.scene.add(t)},void 0,e=>{console.error("Error loading island model:",e)})}},mounted(){},beforeUnmount(){window.removeEventListener("resize",this.onWindowResize),this.animationId&&cancelAnimationFrame(this.animationId),this.renderer&&this.renderer.dispose()}},WA={class:"gamification-section"},XA={class:"container"},qA={class:"info-panel"},YA={class:"coin-display"},jA={class:"island-panel"},$A={ref:"sceneContainer",class:"scene-container"};function KA(n,e,t,i,s,r){return _t(),Mt("div",null,[e[4]||(e[4]=Ni('<section class="islands-hero" data-v-67501f1f><div class="hero-overlay" data-v-67501f1f><div class="text-panel" data-v-67501f1f><h1 class="hero-title" data-v-67501f1f>Открывайте острова</h1><p class="hero-subtitle" data-v-67501f1f> Погрузитесь в мир уникальных приключений и открытий </p></div></div></section>',1)),fe("section",WA,[fe("div",XA,[fe("div",qA,[e[2]||(e[2]=fe("h2",{class:"info-heading"},"Зарабатывайте монеты",-1)),e[3]||(e[3]=fe("p",{class:"info-description"}," Завершайте уроки и получайте монету за каждый завершённый урок. Как только вы накопите 5 монет, вы сможете создать остров! ",-1)),fe("div",YA,[fe("h3",null,"Монеты: "+pn(s.coins),1)]),fe("button",{class:"complete-lesson-btn",onClick:e[0]||(e[0]=(...o)=>r.completeLesson&&r.completeLesson(...o))}," Завершить урок "),s.coins>=5&&!s.islandSpawned?(_t(),Mt("button",{key:0,class:"spawn-island-btn",onClick:e[1]||(e[1]=(...o)=>r.spawnIsland&&r.spawnIsland(...o))}," Вызвать остров ")):rp("",!0)]),fe("div",jA,[fe("div",$A,null,512)])])]),e[5]||(e[5]=Ni('<section class="features-section" data-v-67501f1f><div class="features-grid" data-v-67501f1f><div class="topics-image first-order" data-v-67501f1f><img src="'+pm+'" alt="Topics" data-v-67501f1f></div><div class="topics-text second-order" data-v-67501f1f><h2 class="classic-heading" data-v-67501f1f>Создайте свой мир островов!</h2><p class="classic-description" data-v-67501f1f> Погрузитесь в атмосферу творчества и настройте каждый остров под себя. Добавляйте уникальные элементы, изменяйте ландшафт и обустраивайте постройки так, чтобы каждый уголок отражал вашу индивидуальность. Позвольте своему воображению разгуляться и создайте пространство, в котором каждый остров станет воплощением ваших мечтаний и идей. </p></div><div class="topics-text third-order" data-v-67501f1f><h2 class="classic-heading" data-v-67501f1f>Проходите уроки и покупайте острова!</h2><p class="classic-description" data-v-67501f1f> За прохождение уроков вы получаете виртуальные монеты, которые можно использовать для покупки уникальных островов. Каждый остров имеет свою стоимость, и вы можете выбирать из множества вариантов — от небольших уютных уголков до целых архипелагов. Приобретая новые острова, вы расширяете свой виртуальный мир и открываете новые возможности для творчества и приключений. Чем больше уроков вы проходите, тем больше монет зарабатываете, что позволяет постепенно строить и развивать собственное королевство островов. </p></div><div class="topics-image fourth-order" data-v-67501f1f><img src="'+VA+'" alt="Topics" data-v-67501f1f></div></div></section>',1))])}const ZA=xn(GA,[["render",KA],["__scopeId","data-v-67501f1f"]]),JA="/aspan_web/assets/credit-card.png",QA={name:"VolunteerPage"};function ew(n,e,t,i,s,r){return _t(),Mt("div",null,e[0]||(e[0]=[fe("section",{class:"volunteer-description-section"},[fe("div",{class:"container"},[fe("div",{class:"description-text"},[fe("h1",null,"Стать волонтером"),fe("p",null," Мы всегда рады новым участникам! Если вы дизайнер, создатель уроков, специалист по SMM, программист или занимаетесь чем-то другим – присоединяйтесь к нам. Волонтеры работают под руководством наших ключевых участников и помогают создавать качественный контент и развивать приложение. ")])])],-1),fe("section",{class:"volunteer-form-section"},[fe("div",{class:"container"},[fe("div",{class:"volunteer-info"},[fe("h2",null,"Присоединяйтесь к нам в ASpan!"),fe("p",null," Мы всегда рады новым волонтёрам, которые помогут нам сделать обучение ещё лучше. Если вы хотите внести свой вклад в развитие ASpan – заполните форму и станьте частью нашей дружной команды! ")]),fe("div",{class:"form-container"},[fe("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSeQggJDlukXPuDo2jCwwgSavfEgSIPCmeTnLvE0ldWwLKmvjA/viewform?embedded=true",frameborder:"0",marginheight:"0",marginwidth:"0"},"Загрузка…")])])],-1),Ni('<section class="volunteer-donation-section" data-v-04db9d0e><div class="container donation-container" data-v-04db9d0e><div class="donation-image" data-v-04db9d0e><img src="'+JA+'" alt="Credit Card" data-v-04db9d0e></div><div class="donation-text" data-v-04db9d0e><h2 data-v-04db9d0e>Поддержите нас финансово</h2><p data-v-04db9d0e> Любая финансовая помощь очень важна для нас! Ваше пожертвование поможет создавать больше качественного контента и поддерживать работу приложения. Мы будем признательны за вашу поддержку! </p></div></div></section>',1)]))}const tw=xn(QA,[["render",ew],["__scopeId","data-v-04db9d0e"]]),nw={};function iw(n,e){return _t(),Mt("h1",null,"Hackathon")}const sw=xn(nw,[["render",iw]]),rw="/aspan_web/assets/mission.png",ow={name:"AboutUs",data(){return{history:[{date:"12.2024",title:"Грант Тәуелсіздік Ұрпақтары на 3 миллиона тенге",description:"В декабре 2024 года, команда ASpan выиграла грант размером 3 миллиона тенге.",image:"assets/timeline/tauelsizdik.png"},{date:"01.2025",title:"2 место на Zhastar Forum",description:"В январе 2025 года, команда ASpan заняла 2 место на Zhastar Forum.",image:"assets/timeline/zhastar.png"},{date:"02.2025",title:"2 место на хакатоне RIS Prime",description:"В феврале 2025 года, команда ASpan заняла 2 место на RIS Prime.",image:"assets/timeline/risprime.png"}],currentHistoryIndex:0,coreTeam:[{id:1,name:"Шоманов Асанали",role:"CEO",photo:"assets/team/asanali.png"},{id:2,name:"Толеев Нурхан",role:"CTO",photo:"assets/team/nurkhan.png"},{id:3,name:"Медетбаев Саги",role:"COO",photo:"assets/team/sagi.png"},{id:4,name:"Исенов Нариман",role:"Дизайнер",photo:"assets/team/nariman.png"},{id:5,name:"Ермек Алимжан",role:"Дизайнер",photo:"assets/team/alimzhan.png"},{id:6,name:"Кан Бен",role:"Монтажер",photo:"assets/team/ben.png"},{id:7,name:"Мендыбай Тимур",role:"SMM",photo:"assets/team/timur.png"},{id:8,name:"Баймурзина Нургуль",role:"SMM",photo:"assets/team/nurgul.png"},{id:9,name:"Мирман Исатай",role:"Составитель уроков",photo:"assets/team/isatay.png"},{id:10,name:"Саркулова Динара",role:"Составитель уроков",photo:"assets/team/dinara.png"},{id:11,name:"Мухаммеджанова Аружан",role:"Составитель уроков",photo:"assets/team/aruzhan.png"},{id:12,name:"Муссаева Аяжан",role:"Составитель уроков",photo:"assets/team/ayazhan.png"}],volunteers:[]}},computed:{currentHistory(){return this.history[this.currentHistoryIndex]}},methods:{nextHistory(){this.currentHistoryIndex<this.history.length-1&&this.currentHistoryIndex++},prevHistory(){this.currentHistoryIndex>0&&this.currentHistoryIndex--}}},aw={class:"history-section"},cw={class:"container"},lw=["src"],uw={class:"history-text"},dw={class:"history-date"},fw={class:"history-subheading"},hw={class:"history-description"},pw={class:"arrows"},mw={class:"team-section"},gw={class:"container"},_w={class:"team-category"},vw={class:"team-grid"},xw=["src","alt"],Sw={class:"team-name"},Mw={class:"team-role"},yw={class:"team-category"},Ew={class:"team-grid"},Tw=["src","alt"],bw={class:"team-name"},Aw={class:"team-role"};function ww(n,e,t,i,s,r){return _t(),Mt("div",null,[e[5]||(e[5]=Ni('<section class="mission-section" data-v-4a0a4597><div class="container" data-v-4a0a4597><div class="mission-text" data-v-4a0a4597><h1 class="mission-heading" data-v-4a0a4597>Наша миссия</h1><p class="mission-description" data-v-4a0a4597> Мы стремимся вдохновлять и развивать знания, делая обучение доступным и увлекательным для каждого. Наша цель – создавать пространство, где образование превращается в яркое приключение. </p></div><div class="mission-image" data-v-4a0a4597><img src="'+rw+'" alt="Mission Image" data-v-4a0a4597></div></div></section>',1)),fe("section",aw,[fe("div",cw,[je(kc,{name:"slide-fade",mode:"out-in"},{default:yt(()=>[(_t(),Mt("div",{class:"history-image",key:"image-"+s.currentHistoryIndex},[fe("img",{src:r.currentHistory.image,alt:"History Image"},null,8,lw)]))]),_:1}),fe("div",uw,[je(kc,{name:"slide-fade",mode:"out-in"},{default:yt(()=>[(_t(),Mt("div",{key:"text-"+s.currentHistoryIndex},[fe("h2",dw,pn(r.currentHistory.date),1),fe("h3",fw,pn(r.currentHistory.title),1),fe("p",hw,pn(r.currentHistory.description),1)]))]),_:1}),fe("div",pw,[fe("span",{class:Br(["arrow",{disabled:s.currentHistoryIndex<=0}]),onClick:e[0]||(e[0]=(...o)=>r.prevHistory&&r.prevHistory(...o))}," ↑ ",2),fe("span",{class:Br(["arrow",{disabled:s.currentHistoryIndex>=s.history.length-1}]),onClick:e[1]||(e[1]=(...o)=>r.nextHistory&&r.nextHistory(...o))}," ↓ ",2)])])])]),fe("section",mw,[fe("div",gw,[e[4]||(e[4]=fe("h2",{class:"section-heading"},"Наша команда",-1)),fe("div",_w,[e[2]||(e[2]=fe("h3",{class:"category-heading"},"Основные участники",-1)),fe("div",vw,[(_t(!0),Mt(kt,null,ea(s.coreTeam,o=>(_t(),Mt("div",{key:o.id,class:"team-card"},[fe("img",{src:o.photo,alt:o.name,class:"team-photo"},null,8,xw),fe("h4",Sw,pn(o.name),1),fe("p",Mw,pn(o.role),1)]))),128))])]),fe("div",yw,[e[3]||(e[3]=fe("h3",{class:"category-heading"},"Волонтеры",-1)),fe("div",Ew,[(_t(!0),Mt(kt,null,ea(s.volunteers,o=>(_t(),Mt("div",{key:o.id,class:"team-card"},[fe("img",{src:o.photo,alt:o.name,class:"team-photo"},null,8,Tw),fe("h4",bw,pn(o.name),1),fe("p",Aw,pn(o.role),1)]))),128))])])])])])}const Rw=xn(ow,[["render",ww],["__scopeId","data-v-4a0a4597"]]),Cw={};function Pw(n,e){return e[0]||(e[0]=Ni("<h1 data-v-3a2c2004>Условия использования сервиса ASpan</h1><h2 data-v-3a2c2004><strong data-v-3a2c2004>Последнее обновление: 28 февраля 2025 года</strong></h2><h2 data-v-3a2c2004>1. Введение и принятие условий</h2><p data-v-3a2c2004><strong data-v-3a2c2004>1.1 Что такое ASpan:</strong> ASpan — это некоммерческая микроплатформа для обучения, предоставляющая краткие, точные и четкие знания по различным темам. Сервис управляется ASpan, расположенным по адресу: Казахстан, Астана, улица Сейфуллина, 8 (далее именуемым “ASpan”, “мы”, “нас” или “наш”). Получая доступ к ASpan или используя его (включая любой контент, функции и услуги, предлагаемые на платформе или через нее), <strong data-v-3a2c2004>вы соглашаетесь соблюдать настоящие Условия использования (далее – “Условия”).</strong> Эти Условия представляют собой юридически обязывающее соглашение между вами (пользователем) и ASpan. Если вы не согласны с какой-либо частью Условий, <strong data-v-3a2c2004>не используйте сервис.</strong></p><p data-v-3a2c2004><strong data-v-3a2c2004>1.2 Принятие условий:</strong> Использование ASpan означает ваше согласие с настоящими Условиями и обязательство их соблюдать. Вы также понимаете, что Условия могут время от времени обновляться в соответствии с Разделом 9 ниже. Кроме того, ASpan имеет отдельную <strong data-v-3a2c2004>Политику конфиденциальности,</strong> которая описывает, как мы собираем, используем и защищаем вашу личную информацию. Пожалуйста, ознакомьтесь с Политикой конфиденциальности, поскольку она включена в эти Условия по ссылке. Использование ASpan означает, что вы также соглашаетесь с Политикой конфиденциальности. Если у вас есть вопросы по поводу этих Условий, свяжитесь с нами по перед использованием сервиса. </p><h2 data-v-3a2c2004>2. Требования к пользователям и учетные записи</h2><p data-v-3a2c2004><strong data-v-3a2c2004>2.1 Возрастные ограничения:</strong> ASpan предназначен для пользователей в возрасте от 4 лет и старше. Используя сервис, вы подтверждаете и гарантируете, что соответствуете этому возрастному требованию. Если <strong data-v-3a2c2004>вам менее 12 лет, вам необходимо получить разрешение родителя</strong> или законного опекуна для использования ASpan. Пользователи в возрасте от 4 до 11 лет должны использовать сервис под присмотром родителя или опекуна. Если <strong data-v-3a2c2004>вам от 12 до 17 лет, </strong>рекомендуется просмотреть настоящие Условия вместе с родителем или опекуном. Используя сервис, вы подтверждаете, что такое ознакомление состоялось и ваш родитель/опекун дал согласие на ваше использование ASpan. </p><p data-v-3a2c2004> Если вам <strong data-v-3a2c2004>менее 4 лет,</strong> использование ASpan запрещено. Мы оставляем за собой право запросить подтверждение возраста или согласие родителей в любое время, чтобы проверить соблюдение данного раздела. </p><p data-v-3a2c2004><strong data-v-3a2c2004>2.2 Регистрация учетной записи:</strong> Для доступа к определенным функциям ASpan вам может потребоваться создать учетную запись. При регистрации вы соглашаетесь предоставлять точную, актуальную и полную информацию о себе. Минимально регистрация требует выбора имени пользователя, указания действующего адреса электронной почты и надежного пароля. Эти данные, а также информация о вашей последней активности на платформе, хранятся в нашей базе данных (управляемой через AppWrite). Вы соглашаетесь поддерживать актуальность своих данных и не выдавать себя за другое лицо. <strong data-v-3a2c2004>Учетные записи </strong>предназначены только для <strong data-v-3a2c2004>личного использования</strong> – вы не можете создавать аккаунт от имени другого лица без соответствующего разрешения, а также продавать, передавать или лицензировать свою учетную запись кому-либо другому. </p><p data-v-3a2c2004><strong data-v-3a2c2004>2.3 Безопасность учетной записи:</strong> Вы несете ответственность за сохранение конфиденциальности своих учетных данных и ограничение доступа к своей учетной записи. <strong data-v-3a2c2004>Вы принимаете полную ответственность за все действия, совершаемые под вашим аккаунтом</strong> (независимо от того, авторизованы они вами или нет). Если вы считаете, что ваш аккаунт был взломан или использован без вашего разрешения, вы должны немедленно уведомить ASpan. Мы не несем ответственности за любые потери или ущерб, возникшие из-за несоблюдения вами мер безопасности учетной записи. ASpan оставляет за собой право отключить или удалить любую учетную запись, если заподозрит ее в несанкционированной деятельности или нарушении настоящих Условий. </p><h2 data-v-3a2c2004>3. Описание сервиса</h2><p data-v-3a2c2004><strong data-v-3a2c2004>3.1 Образовательный контент:</strong> ASpan предоставляет подборку микрообучающих материалов, разработанных для того, чтобы помочь пользователям быстро изучать факты и ключевые моменты по широкому спектру тем (например, наука, история, технологии и многое другое). Каждый учебный модуль или фрагмент информации на ASpan намеренно краток, сосредоточен на точных и понятных фактах, которые легко усвоить. </p><p data-v-3a2c2004> Контент на ASpan создается с помощью передовых технологий искусственного интеллекта (в частности, языковой модели GPT) и затем проходит проверку и редактуру нашей командой для обеспечения точности и ясности. Мы стремимся предоставлять достоверную и актуальную информацию. </p><p data-v-3a2c2004> Помимо текстового контента, ASpan включает ссылки на достоверные источники (такие как статьи, учебники или авторитетные веб-сайты), чтобы пользователи могли проверить информацию и изучить тему более глубоко. <strong data-v-3a2c2004>Эти ссылки предоставляются в целях прозрачности и образовательной ценности</strong>, и, переходя по ним, вы покидаете платформу ASpan (подробнее о сторонних ссылках см. Раздел 6). </p><p data-v-3a2c2004><strong data-v-3a2c2004>3.2 Визуальные материалы:</strong> Для улучшения процесса обучения ASpan дополняет текстовый контент визуальными элементами, включая изображения и графику. Часть этих визуальных материалов создается с помощью инструментов искусственного интеллекта, а часть разрабатывается дизайнерами. В частности, ASpan сотрудничает с <strong data-v-3a2c2004>Krea AI</strong> в области генерации изображений с помощью искусственного интеллекта на основании формального соглашения, которое гарантирует, что ASpan обладает всеми правами на использование и демонстрацию этих визуальных материалов. Все изображения подбираются или создаются таким образом, чтобы соответствовать образовательному контенту и способствовать лучшему пониманию материала. Однако они не всегда являются точными историческими или научными реконструкциями (например, историческая сцена, созданная ИИ, предназначена только для иллюстрации концепции). </p><p data-v-3a2c2004><strong data-v-3a2c2004>3.3 Некоммерческий характер сервиса:</strong> ASpan является некоммерческой платформой, что означает, что мы не взимаем плату за доступ к образовательному контенту и не ориентированы на получение прибыли. Сервис предназначен для личного некоммерческого использования в целях самообразования. Мы можем со временем добавлять новые функции, контент или улучшения, чтобы лучше обслуживать пользователей. Любые новые возможности и инструменты, добавленные в ASpan, также подпадают под действие настоящих Условий. Мы оставляем за собой право изменять или прекращать работу сервиса (временно или навсегда), с предварительным уведомлением пользователей о значительных изменениях, когда это возможно. </p><h2 data-v-3a2c2004>4. Поведение пользователей и ограничения</h2><p data-v-3a2c2004><strong data-v-3a2c2004>4.1 Обязательства пользователей:</strong> При использовании ASpan вы обязуетесь вести себя ответственно и уважительно. <strong data-v-3a2c2004>Вы должны использовать сервис в соответствии со всеми применимыми законами и нормативными актами.</strong></p><p data-v-3a2c2004> Кроме того, вы соглашаетесь не участвовать в следующих запрещенных действиях: </p><p data-v-3a2c2004> • <strong data-v-3a2c2004>Искажение и модификация контента –</strong> пользователи не должны изменять, искажать или фальсифицировать учебные материалы ASpan (например, с помощью редактирования скриншотов или других манипуляций), создавая вводящую в заблуждение или ложную информацию. Любые попытки изменить образовательный контент таким образом, чтобы дезинформировать других или представить платформу в ложном свете, строго запрещены. </p><p data-v-3a2c2004> • <strong data-v-3a2c2004>Нарушение работы сервиса – </strong>запрещается предпринимать действия, мешающие нормальному функционированию ASpan, включая попытки взлома серверов, распространение вирусов, перегрузку системы или любые другие способы нанесения вреда инфраструктуре платформы. </p><p data-v-3a2c2004> • <strong data-v-3a2c2004>Несанкционированный доступ – </strong>запрещается пытаться получить доступ к учетным записям других пользователей, а также к любым частям сервиса, к которым у вас нет разрешенного доступа. Это включает в себя взлом, подбор паролей и другие способы несанкционированного проникновения в систему. </p><p data-v-3a2c2004> • <strong data-v-3a2c2004>Сбор данных и автоматизированный доступ – </strong>запрещается использование ботов, скриптов, парсеров или других автоматизированных инструментов для извлечения информации с ASpan. Это включает <strong data-v-3a2c2004>парсинг данных, сбор пользовательской информации</strong> и другие формы несанкционированного извлечения контента. </p><p data-v-3a2c2004> • <strong data-v-3a2c2004>Обратный инжиниринг –</strong> запрещается копировать, декодировать, разбирать на составляющие или пытаться выявить исходный код любой части ASpan (за исключением случаев, разрешенных законом). </p><p data-v-3a2c2004> • <strong data-v-3a2c2004>Коммерческое использование контента – </strong>запрещается воспроизводить, копировать, распространять или продавать любой контент ASpan в коммерческих целях. Также запрещено удалять или скрывать авторские права, товарные знаки или другие права собственности на материалы платформы. </p><p data-v-3a2c2004> • <strong data-v-3a2c2004>Соблюдение этики –</strong> запрещается собирать личные данные других пользователей без их согласия. Также недопустимо использовать ASpan для обмана (например, плагиата, подделки ответов на экзаменах и т. д.). </p><p data-v-3a2c2004><strong data-v-3a2c2004>4.2 Последствия нарушений:</strong> Нарушение любого из вышеуказанных правил <strong data-v-3a2c2004>может привести к немедленному блокированию или удалению вашей учетной записи </strong>(см. Раздел 8 о прекращении доступа). </p><p data-v-3a2c2004> Мы оставляем за собой право расследовать любые случаи злоупотребления сервисом и сотрудничать с правоохранительными органами в случае нарушения закона. </p><p data-v-3a2c2004> Мы также оставляем за собой право (но не обязуемся) следить за использованием сервиса, чтобы убедиться, что пользователи соблюдают настоящие Условия. </p><h2 data-v-3a2c2004>5. Интеллектуальная собственность и лицензирование</h2><p data-v-3a2c2004><strong data-v-3a2c2004>5.1 Владение контентом ASpan:</strong> Весь контент, размещенный на ASpan (включая, но не ограничиваясь: текстовые материалы, статьи, объяснения, изображения, графику, иллюстрации, дизайн и их компоновку), является <strong data-v-3a2c2004>интеллектуальной собственностью ASpan</strong> или его лицензиаров и защищен авторским правом и другими законами о защите интеллектуальной собственности. Это означает, что ASpan (или наши поставщики контента) сохраняют все права, титулы и интересы в отношении контента и Сервиса. <strong data-v-3a2c2004>Микрообучающие тексты</strong> и образовательные материалы на ASpan являются оригинальными работами, созданными и отобранными нами (с помощью ИИ и проверяющих факты специалистов). <strong data-v-3a2c2004>Графические элементы</strong> (изображения, схемы) разрабатываются нами или получаются по лицензии, включая сотрудничество с <strong data-v-3a2c2004>Krea AI,</strong> что гарантирует законность использования визуального контента на платформе. </p><p data-v-3a2c2004><strong data-v-3a2c2004>5.2 Товарные знаки:</strong> Название <strong data-v-3a2c2004>“ASpan”,</strong> логотипы и другие обозначения, представленные на сервисе, являются товарными знаками ASpan (если не указано иное). Вам не предоставляется право использовать товарные знаки ASpan без нашего разрешения. </p><p data-v-3a2c2004><strong data-v-3a2c2004>5.3 Ограниченная лицензия для пользователей:</strong> При соблюдении настоящих Условий ASpan предоставляет вам ограниченную, неисключительную, непередаваемую, отзывную лицензию на <strong data-v-3a2c2004>личное и некоммерческое использование контента.</strong></p><p data-v-3a2c2004><strong data-v-3a2c2004>Эта лицензия не разрешает:</strong></p><p data-v-3a2c2004> • • Загружать, копировать или сохранять контент ASpan в личное хранилище (за исключением случаев, когда это необходимо для кэширования в веб-браузере или если такая возможность явно предусмотрена функцией загрузки в Сервисе). </p><p data-v-3a2c2004> • Воспроизводить или <strong data-v-3a2c2004>распространять</strong> контент ASpan на любом другом веб-сайте, в приложении, публикации или на другой платформе. </p><p data-v-3a2c2004> • Модифицировать, переводить или создавать производные работы на основе контента ASpan (например, вы не можете изменять наши тексты или изображения и публиковать их в другом месте). </p><p data-v-3a2c2004> • <strong data-v-3a2c2004>Публиковать или использовать контент</strong> ASpan в коммерческих целях, то есть вы не можете продавать, сдавать в аренду или лицензировать наши образовательные материалы другим лицам. </p><p data-v-3a2c2004> • Удалять или скрывать любые авторские права или другие уведомления о правах собственности, содержащиеся в ASpan или его контенте. </p><p data-v-3a2c2004> • Использовать контент ASpan таким образом, который предполагает связь с ASpan или его одобрение без нашего разрешения. </p><p data-v-3a2c2004><strong data-v-3a2c2004>5.4 Нарушение интеллектуальных прав:</strong> Любое использование контента за пределами разрешенных условий является <strong data-v-3a2c2004>нарушением настоящих Условий</strong> и может повлечь за собой юридическую ответственность. </p><p data-v-3a2c2004> Если вам требуется особое разрешение (например, для образовательного использования в классе), <strong data-v-3a2c2004>свяжитесь с нами для получения лицензии. </strong>Мы можем рассмотреть возможность использования контента в образовательных целях, но вы должны получить наше письменное разрешение и соблюдать любые условия лицензирования, которые мы предоставим. </p><p data-v-3a2c2004><strong data-v-3a2c2004>5.5 Контент, отправленный пользователями: </strong>(Примечание: ASpan в настоящее время является платформой с односторонней подачей контента, и пользователи не могут публиковать собственные материалы. В будущем, если ASpan предложит функции, такие как комментарии, пользовательские публикации или возможность делиться контентом, для этих действий будут введены дополнительные условия. Данный раздел предназначен для уточнения вопросов, связанных с интеллектуальной собственностью контента, размещенного в ASpan.) </p><p data-v-3a2c2004><strong data-v-3a2c2004>5.6 Сохранение прав:</strong> Все права, прямо не предоставленные вам в этих Условиях, сохраняются за ASpan и его поставщиками контента. Это означает, что, за исключением ограниченной лицензии, указанной выше, вы не получаете дополнительных прав или владения контентом или сервисом. </p><p data-v-3a2c2004> ASpan оставляет за собой право в любой момент отозвать разрешение на использование контента, если вы нарушаете настоящие Условия. Незаконное использование интеллектуальной собственности ASpan может привести к юридическим последствиям, включая судебные разбирательства и удаление вашего аккаунта. </p><h2 data-v-3a2c2004>6. Отказ от ответственности и ограничения ответственности</h2><p data-v-3a2c2004><strong data-v-3a2c2004>6.1 Отказ от гарантии «как есть»: </strong>Aspan предоставляется вам на условиях <strong data-v-3a2c2004>«как есть»</strong> и <strong data-v-3a2c2004>«по мере доступности».</strong> Хотя мы стремимся предоставлять качественный и точный образовательный контент, <strong data-v-3a2c2004>Aspan не гарантирует,</strong> что сервис будет соответствовать вашим требованиям или ожиданиям. <strong data-v-3a2c2004>В максимальной степени, разрешенной законом,</strong> Aspan отказывается от всех видов гарантий, как явных, так и подразумеваемых, в отношении сервиса и его содержимого. Это включает, но не ограничивается, любые подразумеваемые <strong data-v-3a2c2004>гарантии точности, полноты, надежности, товарной пригодности, соответствия определенной цели, права собственности, отсутствия нарушений,</strong> а также гарантии бесперебойной, безошибочной и безопасной работы сервиса или его защиты от вредоносных компонентов (например, вирусов). Мы не гарантируем исправление любых ошибок или дефектов в контенте, хотя стараемся устранять выявленные проблемы. </p><p data-v-3a2c2004> Образовательная информация, представленная в Aspan, <strong data-v-3a2c2004>предназначена исключительно для</strong><strong data-v-3a2c2004>общего ознакомления</strong> и не должна рассматриваться как профессиональная консультация. Например, ничего в Aspan не предназначено для замены медицинских, юридических, финансовых или иных профессиональных рекомендаций. Всегда обращайтесь за консультацией к квалифицированным специалистам по соответствующим вопросам. </p><p data-v-3a2c2004><strong data-v-3a2c2004>6.2 Точность контента:</strong> Команда ASpan прилагает все усилия для проверки фактов и подтверждения точности представленной информации. Однако <strong data-v-3a2c2004>мы не гарантируем,</strong> что весь контент является на 100% точным, актуальным или свободным от ошибок. Источники могут содержать неточности или устаревать, а созданный с помощью ИИ контент, несмотря на нашу проверку, иногда может включать ошибки. <strong data-v-3a2c2004>Используйте собственное суждение</strong> и сверяйте важную информацию с указанными источниками или другими надежными ресурсами. Используя ASpan, вы понимаете и соглашаетесь, что полагаться на контент вы можете только на <strong data-v-3a2c2004>свой страх и риск.</strong> Если вы заметите ошибку или у вас возникнут замечания к содержимому, мы будем рады вашему отзыву, чтобы улучшить работу сервиса. </p><p data-v-3a2c2004><strong data-v-3a2c2004>6.3 Ссылки на сторонние источники:</strong> Контент Aspan может включать ссылки или упоминания сторонних веб-сайтов и источников (например, ссылки на статьи в Википедии, научные журналы или новостные сайты для дополнительного изучения). Эти ссылки предоставляются для вашего удобства и расширения знаний. Однако <strong data-v-3a2c2004>Aspan не контролирует содержание или практики этих сторонних сайтов. </strong>Мы не одобряем, не гарантируем и не несем ответственности за информацию, услуги или товары, предлагаемые на таких сайтах. После перехода по сторонней ссылке условия использования <strong data-v-3a2c2004>Aspan больше не действуют;</strong> любые взаимодействия с другими сайтами регулируются их собственными условиями и политиками. Aspan не несет ответственности за любые потери или ущерб, возникшие в результате использования контента сторонних источников. Мы рекомендуем вам ознакомиться с условиями использования и политиками конфиденциальности любых сторонних сайтов, которые вы посещаете. </p><p data-v-3a2c2004><strong data-v-3a2c2004>6.4 Ограничение ответственности: В максимально возможной степени, разрешенной применимым законодательством,</strong> Aspan, а также наши аффилированные лица, сотрудники, партнеры и лицензодатели не несут ответственности за любые <strong data-v-3a2c2004>косвенные, случайные, особые, косвенные или штрафные убытки.</strong> Это включает, но не ограничивается, убытками, связанными с потерей прибыли, данных, репутации, прерыванием бизнеса или другими нематериальными потерями, возникшими в результате: </p><p data-v-3a2c2004> a) вашего доступа, использования или невозможности использования сервиса; </p><p data-v-3a2c2004> b) действий или контента третьих лиц в сервисе или на любых связанных веб-сайтах; </p><p data-v-3a2c2004> c) контента, полученного через сервис, <strong data-v-3a2c2004>даже если</strong> Aspan был уведомлен о возможности такого ущерба. </p><p data-v-3a2c2004><strong data-v-3a2c2004>6.5 Дополнительные ограничения:</strong> Кроме того, общая совокупная ответственность <strong data-v-3a2c2004>ASpan по любым требованиям, возникающим в связи с использованием Сервиса </strong>или настоящими Условиями, <strong data-v-3a2c2004>будет ограничена большей из следующих сумм: либо суммы (если таковая была), которую вы заплатили нам за использование Сервиса за последние шесть месяцев, либо 50 долларов США.</strong> (Поскольку ASpan является некоммерческим и, как правило, бесплатным сервисом, это означает, что наша ответственность перед вами минимальна или отсутствует.) Это ограничение применяется к любым требованиям, независимо от того, основаны ли они на гарантии, договоре, законе, правонарушении (включая халатность) или любой другой юридической теории, а также независимо от того, было ли ASpan уведомлено о возможности такого ущерба. </p><p data-v-3a2c2004><strong data-v-3a2c2004>6.6 Исключения:</strong> Некоторые юрисдикции не допускают исключение определенных гарантий или ограничение ответственности за случайный или косвенный ущерб. <strong data-v-3a2c2004>Если вы находитесь в такой юрисдикции,</strong> некоторые из вышеуказанных ограничений могут не применяться в той мере, в которой это запрещено законом. В таких случаях ответственность Aspan будет ограничена в <strong data-v-3a2c2004>максимальной степени, разрешенной законодательством.</strong></p><p data-v-3a2c2004> Ничто в настоящих условиях не предназначено для исключения или ограничения ответственности, которая не может быть исключена законом (например, определенные установленные законом гарантии или ответственность по применимым законам о защите прав потребителей). </p><p data-v-3a2c2004><strong data-v-3a2c2004>6.7 Возмещение убытков:</strong> Вы соглашаетесь возмещать и защищать Aspan, его сотрудников и агентов от любых претензий, убытков, обязательств и расходов (включая разумные расходы на юридическую защиту), возникающих в результате вашего ненадлежащего использования сервиса, нарушения настоящих условий или нарушения вами закона или прав третьих лиц. Мы оставляем за собой право взять на себя исключительную защиту и контроль в любых делах, подлежащих возмещению вами, при этом вы соглашаетесь сотрудничать с нами в обеспечении защиты. </p><h2 data-v-3a2c2004>7. Сбор данных и конфиденциальность</h2><p data-v-3a2c2004><strong data-v-3a2c2004>7.1 Ваша конфиденциальность важна для нас:</strong> ASpan ограничивает сбор персональных данных и использует их в соответствии с нашей Политикой конфиденциальности (см. этот документ для полной информации). <strong data-v-3a2c2004>Используя ASpan, вы соглашаетесь на сбор и использование данных, как описано здесь и в Политике конфиденциальности.</strong> Ниже приводится краткое описание того, какие данные мы собираем и как с ними обращаемся: </p><ul data-v-3a2c2004><li data-v-3a2c2004><strong data-v-3a2c2004>Собираемая личная информация: </strong>Когда вы создаете учетную запись на ASpan, мы собираем определенную информацию о вас. Это включает имя пользователя (которое может быть вашим реальным именем или псевдонимом), ваш адрес электронной почты и пароль. Мы также фиксируем дату вашей последней активности на платформе (например, последнее время входа в систему или использования Сервиса). Эта информация надежно хранится в нашей внутренней базе данных (работающей на AppWrite). Мы не требуем более чувствительных персональных данных, таких как физический адрес или номер телефона, для базового использования Сервиса. ASpan разработан таким образом, чтобы собирать минимально необходимый объем персональных данных для управления учетной записью и предоставления доступа к Сервису. </li></ul><ul data-v-3a2c2004><li data-v-3a2c2004><strong data-v-3a2c2004>Использование собранных данных:</strong> Собранная нами информация используется для следующих общих целей: Создание и управление вашей учетной записью (например, ваш email и пароль используются для аутентификации и восстановления доступа к аккаунту); Общение с вами (мы можем отправлять вам уведомления, связанные с работой сервиса, или отвечать на ваши запросы в службу поддержки по электронной почте); Персонализация вашего опыта (например, запоминание вашего прогресса или предпочтений); Улучшение работы ASpan (анализ агрегированных данных об использовании платформы для оптимизации работы сервиса). Мы <strong data-v-3a2c2004>не</strong> <strong data-v-3a2c2004>продаем</strong> ваши персональные данные третьим лицам. Мы можем передавать данные поставщикам услуг или партнерам, которые помогают нам управлять ASpan (например, хостинг базы данных, почтовые сервисы, аналитические инструменты и т. д.), но только при строгом обязательстве защищать ваши данные и использовать их исключительно в целях, установленных нами. </li></ul><ul data-v-3a2c2004><li data-v-3a2c2004><strong data-v-3a2c2004>Безопасность данных:</strong> Мы принимаем разумные меры для защиты информации, которую вы предоставляете ASpan, от несанкционированного доступа или раскрытия. Пароли хранятся в зашифрованном виде (хешированы). Мы применяем передовые методы безопасности для защиты базы данных. Однако ни один веб-сайт или передача данных через Интернет не могут гарантировать абсолютную безопасность. Вы также несете ответственность за защиту своей учетной записи, включая сохранение конфиденциальности ваших учетных данных (см. Раздел 2 о безопасности аккаунта). </li></ul><ul data-v-3a2c2004><li data-v-3a2c2004><strong data-v-3a2c2004>Политика конфиденциальности:</strong> Полная информация о том, как мы обрабатываем пользовательские данные, включая использование файлов cookie, аналитику (если применимо), принципы хранения данных и ваши права в отношении персональной информации, содержится в Политике конфиденциальности. Политика конфиденциальности является отдельным документом, но считается частью настоящих Условий. В случае расхождений между Условиями использования и Политикой конфиденциальности в вопросах обработки персональных данных приоритет имеет Политика конфиденциальности. Принимая эти Условия, вы также соглашаетесь с Политикой конфиденциальности. </li></ul><ul data-v-3a2c2004><li data-v-3a2c2004><strong data-v-3a2c2004>Согласие родителей для несовершеннолетних: </strong>Если вы являетесь родителем или законным представителем пользователя младше 18 лет (особенно если ему 12-13 лет, когда может требоваться юридическое согласие родителей), разрешая вашему ребенку использовать ASpan, вы даете согласие на сбор и использование его данных в порядке, описанном выше и в Политике конфиденциальности. Мы не собираем персональные данные детей младше 12 лет. Если нам станет известно, что учетная запись была зарегистрирована ребенком младше 12 лет без верифицированного согласия родителей, мы предпримем шаги для удаления этой учетной записи и всех связанных данных. </li></ul><p data-v-3a2c2004><strong data-v-3a2c2004>7.2 Запросы по данным и конфиденциальности</strong></p><p data-v-3a2c2004> Если у вас есть вопросы о нашей политике обработки данных или вы хотите воспользоваться своими правами в отношении персональных данных (например, запросить удаление учетной записи), пожалуйста, ознакомьтесь с Политикой конфиденциальности, где указаны контактные данные и инструкции по подаче таких запросов. </p><h2 data-v-3a2c2004>8. Прекращение обслуживания</h2><p data-v-3a2c2004><strong data-v-3a2c2004>8.1 По инициативе ASpan: </strong>ASpan оставляет за собой право <strong data-v-3a2c2004>приостановить или прекратить ваш доступ к Сервису в любое время,</strong> по любой причине и без предварительного уведомления. Это может включать прекращение или приостановку отдельных учетных записей или всего Сервиса. Некоторые примеры ситуаций, при которых мы можем прекратить или приостановить доступ: нарушение вами настоящих Условий (или других политик и правил ASpan), обнаружение незаконной деятельности или угрозы безопасности, требования правоохранительных органов или государственных органов, а также прекращение работы Сервиса. ASpan не несет ответственности перед вами или третьими лицами за прекращение вашей учетной записи или доступа к Сервису. Если ваша учетная запись была удалена из-за нарушения этих Условий, вам может быть запрещено создавать новую учетную запись или использовать ASpan в будущем. </p><p data-v-3a2c2004><strong data-v-3a2c2004>8.2 По вашему запросу:</strong> Вы имеете право прекратить использование ASpan в любое время. Если вы хотите удалить свою учетную запись, вы можете сделать это с помощью доступной в Сервисе функции удаления аккаунта (если она предусмотрена) или связавшись с нами напрямую с соответствующим запросом. Удаление учетной записи обычно включает деактивацию вашего профиля и удаление ваших персональных данных из активного использования. Обратите внимание, что некоторые остаточные данные (например, журналы или резервные копии) могут сохраняться в наших системах в течение короткого периода после удаления, но будут окончательно удалены в соответствии с нашей политикой хранения данных, изложенной в Политике конфиденциальности. </p><p data-v-3a2c2004><strong data-v-3a2c2004>8.3 Последствия прекращения:</strong> После любого прекращения доступа, независимо от того, инициировано оно вами или ASpan, <strong data-v-3a2c2004>ваше право на использование Сервиса немедленно прекращается. </strong>Вы обязаны прекратить использование контента ASpan и удалить любые загруженные или сохраненные материалы (если таковые имеются). ASpan вправе по своему усмотрению удалить или уничтожить любой контент или данные, связанные с вашей учетной записью. Разделы настоящих Условий, которые по своей сути должны оставаться в силе после прекращения (например, права на интеллектуальную собственность, отказы от ответственности, ограничение ответственности, применимое право и разрешение споров), продолжат действовать после прекращения вашего доступа к Сервису. </p><h2 data-v-3a2c2004>9. Изменения в Условиях</h2><p data-v-3a2c2004><strong data-v-3a2c2004>9.1 Право на обновление:</strong> ASpan оставляет за собой право периодически пересматривать или обновлять настоящие Условия. Это может быть сделано для отражения изменений в Сервисе, внедрения новых технологий или функций, соблюдения юридических требований или по другим обоснованным причинам. При каждом обновлении Условий мы будем изменять дату “Последнее обновление” в начале данного документа. В случае внесения <strong data-v-3a2c2004>существенных изменений</strong> (значительно влияющих на ваши права или обязанности по Условиям) мы предпримем разумные меры для предварительного уведомления вас. Уведомление может быть сделано через сам Сервис (например, в виде заметного объявления на нашем сайте или в приложении) либо с использованием других методов связи (например, отправка письма на электронную почту, связанную с вашей учетной записью). </p><p data-v-3a2c2004><strong data-v-3a2c2004>9.2 Ваши обязанности:</strong> Вы несете ответственность за периодическую проверку этих Условий на предмет изменений. Мы рекомендуем вам ознакомиться с Условиями всякий раз, когда вы получаете уведомление об их обновлении или используете Сервис, чтобы быть в курсе актуальных правил. <strong data-v-3a2c2004>Продолжение использования ASpan после публикации обновленной версии Условий</strong> (и по истечении возможного срока уведомления о значительных изменениях) означает ваше согласие с этими изменениями. Если вы не согласны с какими-либо поправками, вам следует прекратить использование Сервиса и, при необходимости, удалить свою учетную запись. </p><p data-v-3a2c2004><strong data-v-3a2c2004>9.3 Промежуточные изменения:</strong> В некоторых случаях ASpan может вводить новые функции или предложения, которые сопровождаются дополнительными условиями. Если такие условия применимы, мы представим их вам в соответствующий момент (например, при активации этой функции), и они станут частью вашего соглашения с нами, если вы воспользуетесь данной функцией. В случае противоречий между настоящими Условиями и дополнительными условиями, приоритет будет у дополнительных условий в отношении конкретной функции или ситуации, к которой они относятся. </p><h2 data-v-3a2c2004>10. Применимое право и разрешение споров</h2><p data-v-3a2c2004><strong data-v-3a2c2004>10.1 Применимое право: </strong>Настоящие Условия и использование вами ASpan регулируются и толкуются в соответствии с законодательством Республики Казахстан <strong data-v-3a2c2004>без учета его принципов коллизионного права.</strong> Однако, если вы проживаете за пределами Казахстана, у вас также могут быть обязательные потребительские права в соответствии с законодательством вашей страны. Это означает, что законодательство указанной юрисдикции будет применяться ко всем вопросам или спорам, связанным с настоящими Условиями или Сервисом, даже если вы проживаете в другой юрисдикции. Однако мы признаем, что у вас могут быть обязательные потребительские права в соответствии с законодательством вашей страны. <strong data-v-3a2c2004>Ничто в этом разделе не предназначено для ограничения ваших прав как потребителя в случаях, </strong>когда местное законодательство применимо в обязательном порядке. В любом случае, Конвенция ООН о договорах международной купли-продажи товаров (CISG) не применяется к настоящим Условиям. </p><p data-v-3a2c2004><strong data-v-3a2c2004>10.2 Первоначальное урегулирование споров:</strong><strong data-v-3a2c2004>Если у вас возник спор или претензия,</strong> связанная с ASpan или настоящими Условиями, мы рекомендуем сначала связаться с нами и попытаться решить вопрос неформально. Многие проблемы могут быть урегулированы быстро с помощью нашей службы поддержки без необходимости официальных разбирательств. Вы можете обратиться к нам по адресу aspanapp.kz@gmail.com, кратко описав суть вашего вопроса и указав свои контактные данные. Мы добросовестно постараемся разрешить спор путем переговоров с вами. </p><p data-v-3a2c2004><strong data-v-3a2c2004>10.2 Первоначальное урегулирование споров</strong></p><p data-v-3a2c2004> Если у вас возник спор или претензия, касающаяся ASpan или настоящих Условий, мы рекомендуем сначала связаться с нами, чтобы попытаться разрешить проблему неформально. </p><p data-v-3a2c2004> Большинство вопросов можно решить быстро при помощи нашей службы поддержки, без судебных разбирательств. Вы можете обратиться к нам по адресу [Контактный email/адрес], предоставив краткое письменное описание проблемы и свои контактные данные. Мы постараемся добросовестно разрешить спор путем переговоров. </p><p data-v-3a2c2004><strong data-v-3a2c2004>10.3 Формальное разрешение споров: </strong>Если разрешить спор неформально не удается, применяются следующие положения: </p><ul data-v-3a2c2004><li data-v-3a2c2004><strong data-v-3a2c2004>Подсудность и место рассмотрения:</strong> В соответствии с применимым законодательством, вы соглашаетесь, что любые судебные иски, вытекающие из настоящих Условий или использования Сервиса, рассматриваются исключительно в судах Республики Казахстан. Вы даете согласие на юрисдикцию этих судов и отказываетесь от возражений о неудобстве данного судебного места. (Если ASpan в будущем введет арбитражное разбирательство или другой механизм урегулирования споров, этот раздел будет обновлен. На данный момент споры решаются в суде, если иное не согласовано обеими сторонами.) </li></ul><ul data-v-3a2c2004><li data-v-3a2c2004><strong data-v-3a2c2004>Срок подачи исков:</strong> В пределах, разрешенных законом, любые претензии или основания для иска, связанные с вашим использованием ASpan или настоящими Условиями, должны быть поданы в течение <strong data-v-3a2c2004>одного (1) года</strong> с момента возникновения претензии. Если иск не подан в указанный срок, он навсегда теряет силу, что означает, что вы больше не сможете его предъявить. </li></ul><p data-v-3a2c2004><strong data-v-3a2c2004>10.4 Действительность отдельных положений: </strong>Если какое-либо положение настоящих Условий будет признано недействительным, незаконным или неисполнимым судом компетентной юрисдикции, оно должно быть исполнено в максимально возможной степени, а остальные положения Условий остаются в полной силе и действии. </p><p data-v-3a2c2004> Недействительное или неисполнимое положение считается измененным таким образом, чтобы оно стало действительным и исполнимым и при этом максимально соответствовало первоначальному намерению сторон. </p><p data-v-3a2c2004><strong data-v-3a2c2004>10.5 Отказ от прав: </strong>Наша неспособность применить или обеспечить исполнение любого права или положения настоящих Условий не считается отказом от такого права или положения. Любой отказ от какого-либо положения Условий действует только в письменной форме и должен быть подписан уполномоченным представителем ASpan. <strong data-v-3a2c2004>Отказ от</strong> одного положения не означает отказа от других положений или от дальнейшего применения того же самого положения в будущем. </p><p data-v-3a2c2004><strong data-v-3a2c2004>10.6 Полное соглашение: </strong>Настоящие Условия (включая Политику конфиденциальности и любые другие юридические уведомления или руководства, опубликованные в Сервисе) составляют <strong data-v-3a2c2004>полное соглашение</strong> между вами и ASpan в отношении использования Сервиса. Настоящие Условия заменяют все предыдущие соглашения, договоренности или коммуникации (как устные, так и письменные) между вами и нами по тому же предмету. Вы подтверждаете, что не полагались на какие-либо заявления, гарантии или обещания, которые не указаны прямо в настоящих Условиях. </p><p data-v-3a2c2004><strong data-v-3a2c2004>10.7 Передача прав и обязанностей: </strong>Вы не можете передавать или переуступать свои права и обязательства по настоящим Условиям третьим лицам без нашего предварительного письменного согласия. </p><p data-v-3a2c2004> ASpan имеет право свободно передавать или уступать свои права и обязанности по настоящим Условиям аффилированным компаниям или в связи с слиянием, приобретением, продажей активов, реорганизацией или иным образом. </p><p data-v-3a2c2004><strong data-v-3a2c2004>10.8 Заголовки: </strong>Заголовки разделов и пунктов в настоящих Условиях используются исключительно для удобства и не имеют юридической или договорной силы. </p><p data-v-3a2c2004><strong data-v-3a2c2004>10.9 Контактная информация: </strong>Если у вас есть вопросы, замечания или предложения относительно настоящих Условий или самого Сервиса, вы можете связаться с ASpan по адресу или отправить письмо по почте на 00001, Казахстан, Астана, Сейфуллина 8/2. </p><p data-v-3a2c2004> Мы ценим наших пользователей и постараемся оперативно ответить на ваш запрос. </p><hr data-v-3a2c2004><p data-v-3a2c2004> Используя ASpan, вы подтверждаете, что ознакомились, поняли и согласны с настоящими Условиями использования Сервиса. </p><p data-v-3a2c2004> Спасибо, что являетесь частью обучающего сообщества ASpan и поддерживаете эти стандарты! Успехов в обучении! </p>",96))}const Lw=xn(Cw,[["render",Pw],["__scopeId","data-v-3a2c2004"]]),Iw={};function Dw(n,e){return e[0]||(e[0]=Ni("<h1 data-v-d4cac563>Политика конфиденциальности ASpan</h1><p data-v-d4cac563><strong data-v-d4cac563>Дата вступления в силу: 30.03.2025</strong></p><p data-v-d4cac563><strong data-v-d4cac563>Последнее обновление: 30.03.2025</strong></p><p data-v-d4cac563></p><p data-v-d4cac563> Добро пожаловать в ASpan. ASpan – это некоммерческая образовательная платформа (доступная в виде мобильного приложения и промо-сайта), которая стремится защищать вашу конфиденциальность. Настоящая <strong data-v-d4cac563>Политика конфиденциальности </strong>объясняет, какие данные мы собираем, как мы их используем, храним и защищаем при использовании ASpan (далее – «платформа», «мы», «нас» или «наш»). Мы строго соблюдаем действующие законы о защите данных, включая <strong data-v-d4cac563>Общий регламент ЕС по защите данных (GDPR-K) для детей и Закон США о защите конфиденциальности детей в Интернете (COPPA).</strong> Используя ASpan, вы соглашаетесь с практиками, описанными в данной Политике конфиденциальности. </p><p data-v-d4cac563> Примечание для несовершеннолетних: Если вам меньше 16 лет, пожалуйста, ознакомьтесь с этой Политикой вместе с родителем или опекуном. Используя ASpan, вы подтверждаете, что вам уже исполнилось 16 лет или что у вас есть разрешение родителя/опекуна на использование платформы и предоставление персональных данных. </p><h2 data-v-d4cac563>1. Какие данные мы собираем</h2><p data-v-d4cac563> Мы собираем <strong data-v-d4cac563>минимум</strong> данных, необходимых для работы платформы и улучшения пользовательского опыта. Они включают в себя: </p><p data-v-d4cac563> • <strong data-v-d4cac563>Имя пользователя (никнейм) </strong>– отображаемое имя, которое вы указываете при создании учетной записи. </p><p data-v-d4cac563> • <strong data-v-d4cac563>Адрес электронной почты</strong> – используется для входа в систему </p><p data-v-d4cac563> • <strong data-v-d4cac563>Пароль</strong> – для безопасности и уникальности вашей учетной записи. <em data-v-d4cac563>Для вашей безопасности пароли хранятся в зашифрованном виде с использованием механизмов защиты базы данных Appwrite и не доступны в открытом виде. </em></p><p data-v-d4cac563> • <strong data-v-d4cac563>Дата последнего завершения урока </strong>– фиксируется автоматически для правильной работы логики серий (streak) </p><p data-v-d4cac563>Мы <strong data-v-d4cac563>НЕ собираем:</strong></p><p data-v-d4cac563>• Реальные имена, возраст, пол</p><p data-v-d4cac563>• Домашний адрес, номер телефона</p><p data-v-d4cac563>• Платежные данные</p><p data-v-d4cac563>• Геолокацию, контакты или другие данные устройства</p><p data-v-d4cac563> Все персональные данные хранятся в <strong data-v-d4cac563>безопасной облачной базе данных AppWrite</strong>. </p><h2 data-v-d4cac563>2. Как мы используем ваши данные</h2><p data-v-d4cac563> Мы используем собранные данные <strong data-v-d4cac563>только</strong> для предоставления образовательных услуг и не передаем их третьим лицам. </p><p data-v-d4cac563><strong data-v-d4cac563>Основные цели использования данных:</strong></p><p data-v-d4cac563><strong data-v-d4cac563> • Создание и управление учетной записью</strong></p><p data-v-d4cac563><strong data-v-d4cac563> • Обеспечение работы платформы </strong>(сохранение прогресса, отслеживание активности для внутренней логики) </p><p data-v-d4cac563><strong data-v-d4cac563> • Улучшение сервиса </strong>(анализ анонимных данных для улучшения контента) </p><p data-v-d4cac563><strong data-v-d4cac563>Отсутствие монетизации. </strong>ASpan – это <strong data-v-d4cac563>некоммерческий проект. </strong>В приложении <strong data-v-d4cac563>нет рекламы, платных подписок или встроенных покупок. </strong>Мы <strong data-v-d4cac563>не продаем и не передаем</strong> личные данные пользователей третьим лицам. </p><h2 data-v-d4cac563>3. Передача данных третьим лицам</h2><p data-v-d4cac563> Ваша конфиденциальность очень важна для нас. Мы <strong data-v-d4cac563>не передаем и не продаем</strong> личные данные пользователей сторонним организациям. Другими словами, никто за пределами ASpan не получит ваши персональные данные для самостоятельного использования. </p><p data-v-d4cac563><strong data-v-d4cac563>Данные могут передаваться только в следующих случаях:</strong></p><p data-v-d4cac563> • <strong data-v-d4cac563>Поставщики услуг (обработчики данных) </strong> – ASpan использует проверенных поставщиков услуг для обеспечения работы платформы – в частности, облачную базу данных AppWrite, где хранятся ваши данные. В этих случаях поставщик услуг действует по нашему поручению и под нашим контролем. Он не имеет права использовать вашу информацию для каких-либо других целей, кроме хранения и обработки данных для нас, и связан строгими обязательствами по конфиденциальности и защите данных. Помимо этих инфраструктурных провайдеров, в настоящее время мы не используем сервисы аналитики, рекламные сети или другие сторонние инструменты, требующие доступа к вашим персональным данным. </p><p data-v-d4cac563> • <strong data-v-d4cac563>Правовые требования</strong> – Мы можем раскрыть информацию, если это необходимо в соответствии с законом или по требованию государственных органов (например, по постановлению суда, повестке или запросу от правоохранительных органов), а также для защиты прав, собственности или безопасности ASpan, наших пользователей или общества. В случае необходимости сотрудничества с правоохранительными или регулирующими органами мы будем предоставлять только минимально необходимую информацию и только в случае законного требования. </p><p data-v-d4cac563> • <strong data-v-d4cac563>Изменение управления платформой </strong>– Поскольку ASpan является некоммерческим проектом, продажа или слияние маловероятны. Однако в случае изменения владельца или структуры (например, передачи проекта некоммерческой образовательной организации или объединения с другим проектом) пользовательские данные могут быть переданы новому владельцу или организации. В таком случае мы гарантируем сохранение уровня конфиденциальности и уведомим пользователей о любых изменениях. </p><p data-v-d4cac563> Помимо вышеуказанных случаев, <strong data-v-d4cac563>никакая другая передача данных не осуществляется</strong>. В частности, мы не передаем информацию о пользователях рекламодателям, брокерам данных или сторонним организациям, не связанным с ASpan. Ваши данные остаются внутри экосистемы ASpan и используются только теми, кому это необходимо для работы и улучшения сервиса в соответствии с данной Политикой. </p><h2 data-v-d4cac563>4. Хранение и передача данных</h2><p data-v-d4cac563> Все персональные данные, собранные через ASpan, хранятся в нашей облачной базе данных AppWrite, которая обеспечивает высокий уровень безопасности. Поскольку облачные сервисы могут использовать серверы в разных странах, ваши данные могут храниться и обрабатываться за пределами вашей страны. Фактически, обработка данных может происходить на международном уровне, включая (возможные) страны с другими законами о защите данных, чем в вашей стране проживания. </p><p data-v-d4cac563> Мы понимаем, что международные передачи данных требуют особого внимания в соответствии с законами о конфиденциальности, такими как GDPR. Независимо от того, где обрабатываются ваши данные, мы защищаем их в соответствии с условиями данной Политики конфиденциальности и применимыми законами. Если вы находитесь в Европейской экономической зоне (EEA) или другом регионе с ограничениями на передачу данных, мы принимаем соответствующие меры для обеспечения защиты вашей информации в соответствии с европейскими стандартами. Эти меры могут включать использование стандартных договорных положений или выбор поставщиков услуг (таких как AppWrite), сертифицированных в рамках механизмов, обеспечивающих адекватный уровень защиты данных. Используя ASpan, вы признаете, что ваши данные могут передаваться в другие страны и даете согласие на такую международную передачу для целей хранения и обработки, описанных здесь. </p><p data-v-d4cac563> Мы храним ваши персональные данные на наших серверах только в течение времени, необходимого для выполнения целей, указанных в данной Политике. На практике это означает, что мы сохраняем ваши данные, пока ваша учетная запись ASpan активна. Если вы решите удалить свою учетную запись (или запросите удаление данных) или если ваша учетная запись будет неактивной в течение длительного времени, мы удалим или анонимизируем ваши персональные данные из наших активных баз данных, за исключением случаев, когда их хранение необходимо в рамках резервного копирования или выполнения юридических обязательств (см. Раздел 7 «Ваши права» и Раздел 8 «Безопасность данных» для получения дополнительной информации об удалении). </p><h2 data-v-d4cac563>5. Безопасность данных</h2><p data-v-d4cac563> Защита вашей информации — наш приоритет. Мы используем современные меры безопасности для предотвращения несанкционированного доступа, изменения, раскрытия или уничтожения ваших данных. </p><p data-v-d4cac563> Шифрование: Пароли пользователей хранятся в зашифрованном виде с использованием встроенных механизмов безопасности платформы AppWrite. Передача данных осуществляется через платформу AppWrite, которая использует встроенные механизмы безопасности для защиты информации пользователей. </p><p data-v-d4cac563> Контроль доступа: Доступ к персональной информации ограничен. Каждый пользователь может видеть только свои данные, а система AppWrite обеспечивает строгие механизмы аутентификации и управления правами доступа. </p><p data-v-d4cac563> Безопасная инфраструктура: Серверы и база данных защищены брандмауэрами и постоянным мониторингом. AppWrite использует механизмы защиты, такие как ограничение частоты запросов (чтобы предотвратить подбор паролей) и аудит значимых событий. </p><p data-v-d4cac563> Отсутствие передачи данных третьим лицам: Мы не передаем ваши данные рекламным сервисам, брокерам данных или другим сторонним организациям. Вся информация остается в рамках системы и используется исключительно для работы и улучшения сервиса в соответствии с данной Политикой. </p><p data-v-d4cac563> Несмотря на строгие меры защиты, ни один метод передачи данных через интернет или электронного хранения не может гарантировать абсолютную безопасность. Однако мы регулярно анализируем и совершенствуем наши подходы к безопасности, чтобы обеспечить максимальную защиту ваших данных. В случае выявления инцидента, связанного с безопасностью, пользователи будут уведомлены в соответствии с законодательными требованиями </p><h2 data-v-d4cac563>6. Ваши права</h2><p data-v-d4cac563> Мы считаем, что вы должны иметь контроль над своими персональными данными. В соответствии с применимыми законами у вас есть следующие права в отношении информации, хранящейся в ASpan: </p><p data-v-d4cac563><strong data-v-d4cac563>Доступ к данным:</strong> Вы имеете право запросить копию персональных данных, которые мы храним о вас. По запросу мы можем предоставить вам сводную информацию, включая ваше имя пользователя, адрес электронной почты и другие связанные данные (например, дату последней активности). </p><p data-v-d4cac563><strong data-v-d4cac563>Исправление данных: </strong>Если какие-либо ваши персональные данные устарели или содержат ошибки (например, если вам необходимо обновить имя пользователя), вы имеете право внести исправления. Вы можете обновить имя пользователя через профиль в аккаунте либо обратиться к нам с запросом на изменение данных, если хотите изменить почту или пароль </p><p data-v-d4cac563><strong data-v-d4cac563>Удаление данных («Право быть забытым»): </strong>Вы можете запросить удаление своих персональных данных. Это можно сделать связавшись с нами напрямую. После подтверждения вашей личности и владения аккаунтом мы удалим или анонимизируем ваши данные в нашей системе. Обратите внимание, что в некоторых случаях нам может потребоваться сохранить минимальный объем информации в целях выполнения законодательных требований или обеспечения безопасности (например, мы можем оставить запись о том, что определенный адрес электронной почты принадлежал удаленному аккаунту, чтобы предотвратить мошенничество или повторное использование учетной записи). В случае необходимости такого сохранения данных мы вас уведомим. </p><p data-v-d4cac563><strong data-v-d4cac563>Ограничение или возражение против обработки данных: </strong>В определенных обстоятельствах вы имеете право возражать против обработки своих данных или запрашивать ограничение их использования. Например, если вы считаете, что данные содержат ошибки или обработка осуществляется с нарушением закона, вы можете потребовать ограничить их использование до разрешения вопроса. Поскольку ASpan обрабатывает данные исключительно для предоставления некоммерческого сервиса, отказ от обработки необходимых данных (например, адреса электронной почты или пароля) может привести к невозможности дальнейшего использования платформы. В случае реализации данного права мы уведомим вас о возможных последствиях. </p><p data-v-d4cac563><strong data-v-d4cac563>Отзыв согласия: </strong>В редких случаях, когда мы запрашиваем ваше согласие на обработку персональных данных (например, при внедрении новых функций), вы можете отозвать его в любой момент. Отзыв согласия не влияет на законность обработки, осуществленной до момента отзыва. В настоящее время ASpan не использует согласие в качестве правового основания для обработки данных, за исключением принятия Политики конфиденциальности и Условий использования при использовании платформы. </p><p data-v-d4cac563><strong data-v-d4cac563>Как реализовать свои права: </strong>Вы можете воспользоваться любым из перечисленных прав, связавшись с нами (см. раздел «Свяжитесь с нами» в конце данной Политики). В целях обеспечения безопасности мы можем запросить подтверждение личности перед предоставлением данных. Мы обязуемся отвечать на запросы в разумные сроки, в соответствии с требованиями законодательства (в течение 30 дней). Запросы обрабатываются бесплатно, однако в случае явно необоснованных или повторяющихся запросов мы можем отказать в их исполнении, если это допускается законом. </p><p data-v-d4cac563> Обратите внимание, что удаление данных или возражение против их обработки может повлиять на возможность использования ASpan. Мы всегда разъясним последствия вашего запроса (например, удаление аккаунта приведет к потере доступа к сохраненному прогрессу). </p><h2 data-v-d4cac563>7. Политика в отношении детей</h2><p data-v-d4cac563> Защита конфиденциальности юных пользователей особенно важна для нас. ASpan предназначен для широкой аудитории учащихся и не ориентирован непосредственно на детей младше 13 лет. Мы признаем необходимость предоставления дополнительных мер защиты данных для пользователей младше 16 лет в соответствии с GDPR-K и COPPA. </p><p data-v-d4cac563><strong data-v-d4cac563>Регистрация только с согласия родителей</strong> для пользователей младше 16 лет </p><p data-v-d4cac563> Наше приложение предназначено для пользователей от 4 лет и старше. Однако, если вам менее 16 лет, ваша учетная запись должна быть создана вашим родителем или законным представителем. Мы не собираем и не обрабатываем личные данные несовершеннолетних без согласия их родителей или опекунов. </p><p data-v-d4cac563><strong data-v-d4cac563>Права родителей. </strong>Если вы родитель или законный представитель и считаете, что мы случайно собрали личные данные вашего ребенка без вашего согласия, пожалуйста, свяжитесь с нами. Мы оперативно рассмотрим ваш запрос и при необходимости удалим данные ребенка. </p><p data-v-d4cac563><strong data-v-d4cac563>Образовательное использование. </strong>Если ASpan используется в образовательных учреждениях для учащихся младше 16 лет, мы ожидаем, что школа или преподаватель получили все необходимые согласия от родителей или действуют в качестве их уполномоченных представителей (в соответствии с исключением &quot;школьного официального лица&quot; в COPPA). Мы по-прежнему не будем использовать или передавать персональные данные учащихся в коммерческих целях. </p><p data-v-d4cac563> Используя ASpan, несовершеннолетние пользователи подтверждают, что их учетная запись была создана родителем или законным представителем. Мы соблюдаем все применимые законы о конфиденциальности детей и будем обновлять нашу политику в случае изменений в законодательстве. </p><h2 data-v-d4cac563>8. Изменения в политике конфиденциальности</h2><p data-v-d4cac563> Мы можем обновлять или изменять настоящую Политику конфиденциальности, чтобы отражать изменения в нашей деятельности, соблюдать требования законодательства или учитывать иные операционные, правовые и нормативные факторы. В случае изменений мы предпримем следующие меры: </p><p data-v-d4cac563><strong data-v-d4cac563>Уведомление об изменениях</strong>. Обновленная версия Политики конфиденциальности будет размещена в приложении и (при наличии) на нашем веб-сайте с указанием новой даты «Последнее обновление». В случае значительных изменений мы предоставим более заметное уведомление, например, с помощью всплывающего сообщения в приложении или уведомления на электронную почту, связанную с учетной записью пользователя. </p><p data-v-d4cac563><strong data-v-d4cac563>Согласие с изменениями. </strong>Продолжая использовать приложение после вступления обновленной Политики конфиденциальности в силу, вы автоматически соглашаетесь с ее новыми условиями. Однако если изменения требуют отдельного согласия в соответствии с законодательством (например, если мы начнем собирать дополнительные данные или использовать их для новых целей, требующих согласия), мы запросим его у вас отдельно. </p><p data-v-d4cac563><strong data-v-d4cac563>Ознакомление с актуальной версией</strong>. Мы рекомендуем вам периодически проверять Политику конфиденциальности, чтобы оставаться в курсе того, как защищаются ваши данные. Актуальная версия Политики всегда доступна в приложении и на веб-сайте. По запросу пользователи также могут ознакомиться с предыдущими версиями документа. </p><p data-v-d4cac563> Если вы не согласны с изменениями в Политике конфиденциальности, вы можете прекратить использование приложения и запросить удаление своих данных (см. раздел «Ваши права»). Мы не будем применять изменения Политики конфиденциальности задним числом без вашего явного согласия. </p><h2 data-v-d4cac563>9. Контактная информация</h2><p data-v-d4cac563> Если у вас есть вопросы по поводу конфиденциальности или вы хотите удалить свои данные, свяжитесь с нами: </p><p data-v-d4cac563><strong data-v-d4cac563>Email</strong>: aspanapp.kz@gmail.com</p><p data-v-d4cac563><strong data-v-d4cac563>Почтовый адрес</strong>: 010000, Казахстан, г.Астана, Сейфуллина 8/2 </p><p data-v-d4cac563>Мы ответим на ваш запрос в течение 30 дней.</p><p data-v-d4cac563><strong data-v-d4cac563>Спасибо, что выбрали ASpan! Мы ценим вашу конфиденциальность и стремимся создать безопасное образовательное пространство для всех пользователей.</strong></p>",71))}const Uw=xn(Iw,[["render",Dw],["__scopeId","data-v-d4cac563"]]),Nw=[{path:"/",component:SA,children:[{path:"",component:hm}]},{path:"/microlessons",component:zA},{path:"/islands",component:ZA},{path:"/volunteer",component:tw},{path:"/hackathon",component:sw},{path:"/about-us",component:Rw},{path:"/terms-of-use",component:Lw},{path:"/privacy-policy",component:Uw}],Fw=Kv({history:bv("/aspan_web"),routes:Nw,scrollBehavior(n,e,t){return{top:0}}}),mm=X_(g0);mm.use(Fw);mm.mount("#app");
