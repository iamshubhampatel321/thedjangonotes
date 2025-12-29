(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(c){if(c.ep)return;c.ep=!0;const f=o(c);fetch(c.href,f)}})();var Ha={exports:{}},os={},$a={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf;function sy(){if(lf)return ie;lf=1;var n=Symbol.for("react.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(T){return T===null||typeof T!="object"?null:(T=_&&T[_]||T["@@iterator"],typeof T=="function"?T:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,V={};function N(T,A,se){this.props=T,this.context=A,this.refs=V,this.updater=se||j}N.prototype.isReactComponent={},N.prototype.setState=function(T,A){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,A,"setState")},N.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function I(){}I.prototype=N.prototype;function H(T,A,se){this.props=T,this.context=A,this.refs=V,this.updater=se||j}var O=H.prototype=new I;O.constructor=H,L(O,N.prototype),O.isPureReactComponent=!0;var X=Array.isArray,Y=Object.prototype.hasOwnProperty,ne={current:null},ae={key:!0,ref:!0,__self:!0,__source:!0};function Z(T,A,se){var oe,ue={},ce=null,me=null;if(A!=null)for(oe in A.ref!==void 0&&(me=A.ref),A.key!==void 0&&(ce=""+A.key),A)Y.call(A,oe)&&!ae.hasOwnProperty(oe)&&(ue[oe]=A[oe]);var fe=arguments.length-2;if(fe===1)ue.children=se;else if(1<fe){for(var ve=Array(fe),ut=0;ut<fe;ut++)ve[ut]=arguments[ut+2];ue.children=ve}if(T&&T.defaultProps)for(oe in fe=T.defaultProps,fe)ue[oe]===void 0&&(ue[oe]=fe[oe]);return{$$typeof:n,type:T,key:ce,ref:me,props:ue,_owner:ne.current}}function Se(T,A){return{$$typeof:n,type:T.type,key:A,ref:T.ref,props:T.props,_owner:T._owner}}function Pe(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function Ze(T){var A={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(se){return A[se]})}var at=/\/+/g;function $e(T,A){return typeof T=="object"&&T!==null&&T.key!=null?Ze(""+T.key):A.toString(36)}function Je(T,A,se,oe,ue){var ce=typeof T;(ce==="undefined"||ce==="boolean")&&(T=null);var me=!1;if(T===null)me=!0;else switch(ce){case"string":case"number":me=!0;break;case"object":switch(T.$$typeof){case n:case s:me=!0}}if(me)return me=T,ue=ue(me),T=oe===""?"."+$e(me,0):oe,X(ue)?(se="",T!=null&&(se=T.replace(at,"$&/")+"/"),Je(ue,A,se,"",function(ut){return ut})):ue!=null&&(Pe(ue)&&(ue=Se(ue,se+(!ue.key||me&&me.key===ue.key?"":(""+ue.key).replace(at,"$&/")+"/")+T)),A.push(ue)),1;if(me=0,oe=oe===""?".":oe+":",X(T))for(var fe=0;fe<T.length;fe++){ce=T[fe];var ve=oe+$e(ce,fe);me+=Je(ce,A,se,ve,ue)}else if(ve=x(T),typeof ve=="function")for(T=ve.call(T),fe=0;!(ce=T.next()).done;)ce=ce.value,ve=oe+$e(ce,fe++),me+=Je(ce,A,se,ve,ue);else if(ce==="object")throw A=String(T),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return me}function lt(T,A,se){if(T==null)return T;var oe=[],ue=0;return Je(T,oe,"","",function(ce){return A.call(se,ce,ue++)}),oe}function Ye(T){if(T._status===-1){var A=T._result;A=A(),A.then(function(se){(T._status===0||T._status===-1)&&(T._status=1,T._result=se)},function(se){(T._status===0||T._status===-1)&&(T._status=2,T._result=se)}),T._status===-1&&(T._status=0,T._result=A)}if(T._status===1)return T._result.default;throw T._result}var re={current:null},M={transition:null},G={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:M,ReactCurrentOwner:ne};function U(){throw Error("act(...) is not supported in production builds of React.")}return ie.Children={map:lt,forEach:function(T,A,se){lt(T,function(){A.apply(this,arguments)},se)},count:function(T){var A=0;return lt(T,function(){A++}),A},toArray:function(T){return lt(T,function(A){return A})||[]},only:function(T){if(!Pe(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},ie.Component=N,ie.Fragment=o,ie.Profiler=c,ie.PureComponent=H,ie.StrictMode=l,ie.Suspense=h,ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,ie.act=U,ie.cloneElement=function(T,A,se){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var oe=L({},T.props),ue=T.key,ce=T.ref,me=T._owner;if(A!=null){if(A.ref!==void 0&&(ce=A.ref,me=ne.current),A.key!==void 0&&(ue=""+A.key),T.type&&T.type.defaultProps)var fe=T.type.defaultProps;for(ve in A)Y.call(A,ve)&&!ae.hasOwnProperty(ve)&&(oe[ve]=A[ve]===void 0&&fe!==void 0?fe[ve]:A[ve])}var ve=arguments.length-2;if(ve===1)oe.children=se;else if(1<ve){fe=Array(ve);for(var ut=0;ut<ve;ut++)fe[ut]=arguments[ut+2];oe.children=fe}return{$$typeof:n,type:T.type,key:ue,ref:ce,props:oe,_owner:me}},ie.createContext=function(T){return T={$$typeof:d,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:f,_context:T},T.Consumer=T},ie.createElement=Z,ie.createFactory=function(T){var A=Z.bind(null,T);return A.type=T,A},ie.createRef=function(){return{current:null}},ie.forwardRef=function(T){return{$$typeof:m,render:T}},ie.isValidElement=Pe,ie.lazy=function(T){return{$$typeof:g,_payload:{_status:-1,_result:T},_init:Ye}},ie.memo=function(T,A){return{$$typeof:y,type:T,compare:A===void 0?null:A}},ie.startTransition=function(T){var A=M.transition;M.transition={};try{T()}finally{M.transition=A}},ie.unstable_act=U,ie.useCallback=function(T,A){return re.current.useCallback(T,A)},ie.useContext=function(T){return re.current.useContext(T)},ie.useDebugValue=function(){},ie.useDeferredValue=function(T){return re.current.useDeferredValue(T)},ie.useEffect=function(T,A){return re.current.useEffect(T,A)},ie.useId=function(){return re.current.useId()},ie.useImperativeHandle=function(T,A,se){return re.current.useImperativeHandle(T,A,se)},ie.useInsertionEffect=function(T,A){return re.current.useInsertionEffect(T,A)},ie.useLayoutEffect=function(T,A){return re.current.useLayoutEffect(T,A)},ie.useMemo=function(T,A){return re.current.useMemo(T,A)},ie.useReducer=function(T,A,se){return re.current.useReducer(T,A,se)},ie.useRef=function(T){return re.current.useRef(T)},ie.useState=function(T){return re.current.useState(T)},ie.useSyncExternalStore=function(T,A,se){return re.current.useSyncExternalStore(T,A,se)},ie.useTransition=function(){return re.current.useTransition()},ie.version="18.3.1",ie}var uf;function Ll(){return uf||(uf=1,$a.exports=sy()),$a.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cf;function iy(){if(cf)return os;cf=1;var n=Ll(),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function d(m,h,y){var g,_={},x=null,j=null;y!==void 0&&(x=""+y),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(j=h.ref);for(g in h)l.call(h,g)&&!f.hasOwnProperty(g)&&(_[g]=h[g]);if(m&&m.defaultProps)for(g in h=m.defaultProps,h)_[g]===void 0&&(_[g]=h[g]);return{$$typeof:s,type:m,key:x,ref:j,props:_,_owner:c.current}}return os.Fragment=o,os.jsx=d,os.jsxs=d,os}var df;function oy(){return df||(df=1,Ha.exports=iy()),Ha.exports}var C=oy(),Ri={},Ya={exports:{}},it={},Ga={exports:{}},Ka={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ff;function ay(){return ff||(ff=1,(function(n){function s(M,G){var U=M.length;M.push(G);e:for(;0<U;){var T=U-1>>>1,A=M[T];if(0<c(A,G))M[T]=G,M[U]=A,U=T;else break e}}function o(M){return M.length===0?null:M[0]}function l(M){if(M.length===0)return null;var G=M[0],U=M.pop();if(U!==G){M[0]=U;e:for(var T=0,A=M.length,se=A>>>1;T<se;){var oe=2*(T+1)-1,ue=M[oe],ce=oe+1,me=M[ce];if(0>c(ue,U))ce<A&&0>c(me,ue)?(M[T]=me,M[ce]=U,T=ce):(M[T]=ue,M[oe]=U,T=oe);else if(ce<A&&0>c(me,U))M[T]=me,M[ce]=U,T=ce;else break e}}return G}function c(M,G){var U=M.sortIndex-G.sortIndex;return U!==0?U:M.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,m=d.now();n.unstable_now=function(){return d.now()-m}}var h=[],y=[],g=1,_=null,x=3,j=!1,L=!1,V=!1,N=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(M){for(var G=o(y);G!==null;){if(G.callback===null)l(y);else if(G.startTime<=M)l(y),G.sortIndex=G.expirationTime,s(h,G);else break;G=o(y)}}function X(M){if(V=!1,O(M),!L)if(o(h)!==null)L=!0,Ye(Y);else{var G=o(y);G!==null&&re(X,G.startTime-M)}}function Y(M,G){L=!1,V&&(V=!1,I(Z),Z=-1),j=!0;var U=x;try{for(O(G),_=o(h);_!==null&&(!(_.expirationTime>G)||M&&!Ze());){var T=_.callback;if(typeof T=="function"){_.callback=null,x=_.priorityLevel;var A=T(_.expirationTime<=G);G=n.unstable_now(),typeof A=="function"?_.callback=A:_===o(h)&&l(h),O(G)}else l(h);_=o(h)}if(_!==null)var se=!0;else{var oe=o(y);oe!==null&&re(X,oe.startTime-G),se=!1}return se}finally{_=null,x=U,j=!1}}var ne=!1,ae=null,Z=-1,Se=5,Pe=-1;function Ze(){return!(n.unstable_now()-Pe<Se)}function at(){if(ae!==null){var M=n.unstable_now();Pe=M;var G=!0;try{G=ae(!0,M)}finally{G?$e():(ne=!1,ae=null)}}else ne=!1}var $e;if(typeof H=="function")$e=function(){H(at)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,lt=Je.port2;Je.port1.onmessage=at,$e=function(){lt.postMessage(null)}}else $e=function(){N(at,0)};function Ye(M){ae=M,ne||(ne=!0,$e())}function re(M,G){Z=N(function(){M(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(M){M.callback=null},n.unstable_continueExecution=function(){L||j||(L=!0,Ye(Y))},n.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Se=0<M?Math.floor(1e3/M):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_getFirstCallbackNode=function(){return o(h)},n.unstable_next=function(M){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var U=x;x=G;try{return M()}finally{x=U}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(M,G){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var U=x;x=M;try{return G()}finally{x=U}},n.unstable_scheduleCallback=function(M,G,U){var T=n.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?T+U:T):U=T,M){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=U+A,M={id:g++,callback:G,priorityLevel:M,startTime:U,expirationTime:A,sortIndex:-1},U>T?(M.sortIndex=U,s(y,M),o(h)===null&&M===o(y)&&(V?(I(Z),Z=-1):V=!0,re(X,U-T))):(M.sortIndex=A,s(h,M),L||j||(L=!0,Ye(Y))),M},n.unstable_shouldYield=Ze,n.unstable_wrapCallback=function(M){var G=x;return function(){var U=x;x=G;try{return M.apply(this,arguments)}finally{x=U}}}})(Ka)),Ka}var pf;function ly(){return pf||(pf=1,Ga.exports=ay()),Ga.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf;function uy(){if(mf)return it;mf=1;var n=Ll(),s=ly();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,c={};function f(e,t){d(e,t),d(e+"Capture",t)}function d(e,t){for(c[e]=t,e=0;e<t.length;e++)l.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function x(e){return h.call(_,e)?!0:h.call(g,e)?!1:y.test(e)?_[e]=!0:(g[e]=!0,!1)}function j(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function L(e,t,r,i){if(t===null||typeof t>"u"||j(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function V(e,t,r,i,a,u,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=p}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){N[e]=new V(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];N[t]=new V(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){N[e]=new V(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){N[e]=new V(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){N[e]=new V(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){N[e]=new V(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){N[e]=new V(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){N[e]=new V(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){N[e]=new V(e,5,!1,e.toLowerCase(),null,!1,!1)});var I=/[\-:]([a-z])/g;function H(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(I,H);N[t]=new V(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(I,H);N[t]=new V(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(I,H);N[t]=new V(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){N[e]=new V(e,1,!1,e.toLowerCase(),null,!1,!1)}),N.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){N[e]=new V(e,1,!1,e.toLowerCase(),null,!0,!0)});function O(e,t,r,i){var a=N.hasOwnProperty(t)?N[t]:null;(a!==null?a.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(L(t,r,a,i)&&(r=null),i||a===null?x(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,i=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var X=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),ne=Symbol.for("react.portal"),ae=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),Se=Symbol.for("react.profiler"),Pe=Symbol.for("react.provider"),Ze=Symbol.for("react.context"),at=Symbol.for("react.forward_ref"),$e=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),M=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,T;function A(e){if(T===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);T=t&&t[1]||""}return`
`+T+e}var se=!1;function oe(e,t){if(!e||se)return"";se=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(E){var i=E}Reflect.construct(e,[],t)}else{try{t.call()}catch(E){i=E}e.call(t.prototype)}else{try{throw Error()}catch(E){i=E}e()}}catch(E){if(E&&i&&typeof E.stack=="string"){for(var a=E.stack.split(`
`),u=i.stack.split(`
`),p=a.length-1,v=u.length-1;1<=p&&0<=v&&a[p]!==u[v];)v--;for(;1<=p&&0<=v;p--,v--)if(a[p]!==u[v]){if(p!==1||v!==1)do if(p--,v--,0>v||a[p]!==u[v]){var w=`
`+a[p].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=p&&0<=v);break}}}finally{se=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?A(e):""}function ue(e){switch(e.tag){case 5:return A(e.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return e=oe(e.type,!1),e;case 11:return e=oe(e.type.render,!1),e;case 1:return e=oe(e.type,!0),e;default:return""}}function ce(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ae:return"Fragment";case ne:return"Portal";case Se:return"Profiler";case Z:return"StrictMode";case $e:return"Suspense";case Je:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ze:return(e.displayName||"Context")+".Consumer";case Pe:return(e._context.displayName||"Context")+".Provider";case at:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lt:return t=e.displayName||null,t!==null?t:ce(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}function me(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(t);case 8:return t===Z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ut(e){var t=ve(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,u=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(p){i=""+p,u.call(this,p)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(p){i=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xs(e){e._valueTracker||(e._valueTracker=ut(e))}function pu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=ve(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Ts(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xi(e,t){var r=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function mu(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=fe(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hu(e,t){t=t.checked,t!=null&&O(e,"checked",t,!1)}function Zi(e,t){hu(e,t);var r=fe(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ji(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ji(e,t.type,fe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gu(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ji(e,t,r){(t!=="number"||Ts(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Sr=Array.isArray;function On(e,t,r,i){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&i&&(e[r].defaultSelected=!0)}else{for(r=""+fe(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function eo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yu(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(o(92));if(Sr(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:fe(r)}}function vu(e,t){var r=fe(t.value),i=fe(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function wu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _u(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function to(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_u(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ks,Su=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ks=ks||document.createElement("div"),ks.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ks.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lh=["Webkit","ms","Moz","O"];Object.keys(Tr).forEach(function(e){lh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tr[t]=Tr[e]})});function xu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Tr.hasOwnProperty(e)&&Tr[e]?(""+t).trim():t+"px"}function Tu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,a=xu(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,a):e[r]=a}}var uh=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function no(e,t){if(t){if(uh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function ro(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var so=null;function io(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oo=null,Un=null,zn=null;function ku(e){if(e=Hr(e)){if(typeof oo!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Ys(t),oo(e.stateNode,e.type,t))}}function Pu(e){Un?zn?zn.push(e):zn=[e]:Un=e}function Eu(){if(Un){var e=Un,t=zn;if(zn=Un=null,ku(e),t)for(e=0;e<t.length;e++)ku(t[e])}}function Cu(e,t){return e(t)}function ju(){}var ao=!1;function bu(e,t,r){if(ao)return e(t,r);ao=!0;try{return Cu(e,t,r)}finally{ao=!1,(Un!==null||zn!==null)&&(ju(),Eu())}}function kr(e,t){var r=e.stateNode;if(r===null)return null;var i=Ys(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var lo=!1;if(m)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){lo=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{lo=!1}function ch(e,t,r,i,a,u,p,v,w){var E=Array.prototype.slice.call(arguments,3);try{t.apply(r,E)}catch(D){this.onError(D)}}var Er=!1,Ps=null,Es=!1,uo=null,dh={onError:function(e){Er=!0,Ps=e}};function fh(e,t,r,i,a,u,p,v,w){Er=!1,Ps=null,ch.apply(dh,arguments)}function ph(e,t,r,i,a,u,p,v,w){if(fh.apply(this,arguments),Er){if(Er){var E=Ps;Er=!1,Ps=null}else throw Error(o(198));Es||(Es=!0,uo=E)}}function _n(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Au(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Du(e){if(_n(e)!==e)throw Error(o(188))}function mh(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(o(188));return t!==e?null:e}for(var r=e,i=t;;){var a=r.return;if(a===null)break;var u=a.alternate;if(u===null){if(i=a.return,i!==null){r=i;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===r)return Du(a),e;if(u===i)return Du(a),t;u=u.sibling}throw Error(o(188))}if(r.return!==i.return)r=a,i=u;else{for(var p=!1,v=a.child;v;){if(v===r){p=!0,r=a,i=u;break}if(v===i){p=!0,i=a,r=u;break}v=v.sibling}if(!p){for(v=u.child;v;){if(v===r){p=!0,r=u,i=a;break}if(v===i){p=!0,i=u,r=a;break}v=v.sibling}if(!p)throw Error(o(189))}}if(r.alternate!==i)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:t}function Ru(e){return e=mh(e),e!==null?Fu(e):null}function Fu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fu(e);if(t!==null)return t;e=e.sibling}return null}var Mu=s.unstable_scheduleCallback,Lu=s.unstable_cancelCallback,hh=s.unstable_shouldYield,gh=s.unstable_requestPaint,je=s.unstable_now,yh=s.unstable_getCurrentPriorityLevel,co=s.unstable_ImmediatePriority,Nu=s.unstable_UserBlockingPriority,Cs=s.unstable_NormalPriority,vh=s.unstable_LowPriority,Vu=s.unstable_IdlePriority,js=null,Rt=null;function wh(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(js,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:xh,_h=Math.log,Sh=Math.LN2;function xh(e){return e>>>=0,e===0?32:31-(_h(e)/Sh|0)|0}var bs=64,As=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ds(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,u=e.pingedLanes,p=r&268435455;if(p!==0){var v=p&~a;v!==0?i=Cr(v):(u&=p,u!==0&&(i=Cr(u)))}else p=r&~a,p!==0?i=Cr(p):u!==0&&(i=Cr(u));if(i===0)return 0;if(t!==0&&t!==i&&(t&a)===0&&(a=i&-i,u=t&-t,a>=u||a===16&&(u&4194240)!==0))return t;if((i&4)!==0&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-Tt(t),a=1<<r,i|=e[r],t&=~a;return i}function Th(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kh(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,u=e.pendingLanes;0<u;){var p=31-Tt(u),v=1<<p,w=a[p];w===-1?((v&r)===0||(v&i)!==0)&&(a[p]=Th(v,t)):w<=t&&(e.expiredLanes|=v),u&=~v}}function fo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Iu(){var e=bs;return bs<<=1,(bs&4194240)===0&&(bs=64),e}function po(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function jr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=r}function Ph(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Tt(r),u=1<<a;t[a]=0,i[a]=-1,e[a]=-1,r&=~u}}function mo(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-Tt(r),a=1<<i;a&t|e[i]&t&&(e[i]|=t),r&=~a}}var pe=0;function Ou(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Uu,ho,zu,Bu,qu,go=!1,Rs=[],Kt=null,Qt=null,Xt=null,br=new Map,Ar=new Map,Zt=[],Eh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wu(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":br.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(t.pointerId)}}function Dr(e,t,r,i,a,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:u,targetContainers:[a]},t!==null&&(t=Hr(t),t!==null&&ho(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Ch(e,t,r,i,a){switch(t){case"focusin":return Kt=Dr(Kt,e,t,r,i,a),!0;case"dragenter":return Qt=Dr(Qt,e,t,r,i,a),!0;case"mouseover":return Xt=Dr(Xt,e,t,r,i,a),!0;case"pointerover":var u=a.pointerId;return br.set(u,Dr(br.get(u)||null,e,t,r,i,a)),!0;case"gotpointercapture":return u=a.pointerId,Ar.set(u,Dr(Ar.get(u)||null,e,t,r,i,a)),!0}return!1}function Hu(e){var t=Sn(e.target);if(t!==null){var r=_n(t);if(r!==null){if(t=r.tag,t===13){if(t=Au(r),t!==null){e.blockedOn=t,qu(e.priority,function(){zu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=vo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);so=i,r.target.dispatchEvent(i),so=null}else return t=Hr(r),t!==null&&ho(t),e.blockedOn=r,!1;t.shift()}return!0}function $u(e,t,r){Fs(e)&&r.delete(t)}function jh(){go=!1,Kt!==null&&Fs(Kt)&&(Kt=null),Qt!==null&&Fs(Qt)&&(Qt=null),Xt!==null&&Fs(Xt)&&(Xt=null),br.forEach($u),Ar.forEach($u)}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,go||(go=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,jh)))}function Fr(e){function t(a){return Rr(a,e)}if(0<Rs.length){Rr(Rs[0],e);for(var r=1;r<Rs.length;r++){var i=Rs[r];i.blockedOn===e&&(i.blockedOn=null)}}for(Kt!==null&&Rr(Kt,e),Qt!==null&&Rr(Qt,e),Xt!==null&&Rr(Xt,e),br.forEach(t),Ar.forEach(t),r=0;r<Zt.length;r++)i=Zt[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<Zt.length&&(r=Zt[0],r.blockedOn===null);)Hu(r),r.blockedOn===null&&Zt.shift()}var Bn=X.ReactCurrentBatchConfig,Ms=!0;function bh(e,t,r,i){var a=pe,u=Bn.transition;Bn.transition=null;try{pe=1,yo(e,t,r,i)}finally{pe=a,Bn.transition=u}}function Ah(e,t,r,i){var a=pe,u=Bn.transition;Bn.transition=null;try{pe=4,yo(e,t,r,i)}finally{pe=a,Bn.transition=u}}function yo(e,t,r,i){if(Ms){var a=vo(e,t,r,i);if(a===null)Lo(e,t,i,Ls,r),Wu(e,i);else if(Ch(a,e,t,r,i))i.stopPropagation();else if(Wu(e,i),t&4&&-1<Eh.indexOf(e)){for(;a!==null;){var u=Hr(a);if(u!==null&&Uu(u),u=vo(e,t,r,i),u===null&&Lo(e,t,i,Ls,r),u===a)break;a=u}a!==null&&i.stopPropagation()}else Lo(e,t,i,null,r)}}var Ls=null;function vo(e,t,r,i){if(Ls=null,e=io(i),e=Sn(e),e!==null)if(t=_n(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Au(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ls=e,null}function Yu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yh()){case co:return 1;case Nu:return 4;case Cs:case vh:return 16;case Vu:return 536870912;default:return 16}default:return 16}}var Jt=null,wo=null,Ns=null;function Gu(){if(Ns)return Ns;var e,t=wo,r=t.length,i,a="value"in Jt?Jt.value:Jt.textContent,u=a.length;for(e=0;e<r&&t[e]===a[e];e++);var p=r-e;for(i=1;i<=p&&t[r-i]===a[u-i];i++);return Ns=a.slice(e,1<i?1-i:void 0)}function Vs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Is(){return!0}function Ku(){return!1}function ct(e){function t(r,i,a,u,p){this._reactName=r,this._targetInst=a,this.type=i,this.nativeEvent=u,this.target=p,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(r=e[v],this[v]=r?r(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Is:Ku,this.isPropagationStopped=Ku,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Is)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Is)},persist:function(){},isPersistent:Is}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_o=ct(qn),Mr=U({},qn,{view:0,detail:0}),Dh=ct(Mr),So,xo,Lr,Os=U({},Mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ko,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(So=e.screenX-Lr.screenX,xo=e.screenY-Lr.screenY):xo=So=0,Lr=e),So)},movementY:function(e){return"movementY"in e?e.movementY:xo}}),Qu=ct(Os),Rh=U({},Os,{dataTransfer:0}),Fh=ct(Rh),Mh=U({},Mr,{relatedTarget:0}),To=ct(Mh),Lh=U({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nh=ct(Lh),Vh=U({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ih=ct(Vh),Oh=U({},qn,{data:0}),Xu=ct(Oh),Uh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bh[e])?!!t[e]:!1}function ko(){return qh}var Wh=U({},Mr,{key:function(e){if(e.key){var t=Uh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ko,charCode:function(e){return e.type==="keypress"?Vs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hh=ct(Wh),$h=U({},Os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zu=ct($h),Yh=U({},Mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ko}),Gh=ct(Yh),Kh=U({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qh=ct(Kh),Xh=U({},Os,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zh=ct(Xh),Jh=[9,13,27,32],Po=m&&"CompositionEvent"in window,Nr=null;m&&"documentMode"in document&&(Nr=document.documentMode);var eg=m&&"TextEvent"in window&&!Nr,Ju=m&&(!Po||Nr&&8<Nr&&11>=Nr),ec=" ",tc=!1;function nc(e,t){switch(e){case"keyup":return Jh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function tg(e,t){switch(e){case"compositionend":return rc(t);case"keypress":return t.which!==32?null:(tc=!0,ec);case"textInput":return e=t.data,e===ec&&tc?null:e;default:return null}}function ng(e,t){if(Wn)return e==="compositionend"||!Po&&nc(e,t)?(e=Gu(),Ns=wo=Jt=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ju&&t.locale!=="ko"?null:t.data;default:return null}}var rg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rg[e.type]:t==="textarea"}function ic(e,t,r,i){Pu(i),t=Ws(t,"onChange"),0<t.length&&(r=new _o("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var Vr=null,Ir=null;function sg(e){Tc(e,0)}function Us(e){var t=Kn(e);if(pu(t))return e}function ig(e,t){if(e==="change")return t}var oc=!1;if(m){var Eo;if(m){var Co="oninput"in document;if(!Co){var ac=document.createElement("div");ac.setAttribute("oninput","return;"),Co=typeof ac.oninput=="function"}Eo=Co}else Eo=!1;oc=Eo&&(!document.documentMode||9<document.documentMode)}function lc(){Vr&&(Vr.detachEvent("onpropertychange",uc),Ir=Vr=null)}function uc(e){if(e.propertyName==="value"&&Us(Ir)){var t=[];ic(t,Ir,e,io(e)),bu(sg,t)}}function og(e,t,r){e==="focusin"?(lc(),Vr=t,Ir=r,Vr.attachEvent("onpropertychange",uc)):e==="focusout"&&lc()}function ag(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Us(Ir)}function lg(e,t){if(e==="click")return Us(t)}function ug(e,t){if(e==="input"||e==="change")return Us(t)}function cg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:cg;function Or(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var a=r[i];if(!h.call(t,a)||!kt(e[a],t[a]))return!1}return!0}function cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dc(e,t){var r=cc(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cc(r)}}function fc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pc(){for(var e=window,t=Ts();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ts(e.document)}return t}function jo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dg(e){var t=pc(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&fc(r.ownerDocument.documentElement,r)){if(i!==null&&jo(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,u=Math.min(i.start,a);i=i.end===void 0?u:Math.min(i.end,a),!e.extend&&u>i&&(a=i,i=u,u=a),a=dc(r,u);var p=dc(r,i);a&&p&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),u>i?(e.addRange(t),e.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fg=m&&"documentMode"in document&&11>=document.documentMode,Hn=null,bo=null,Ur=null,Ao=!1;function mc(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ao||Hn==null||Hn!==Ts(i)||(i=Hn,"selectionStart"in i&&jo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ur&&Or(Ur,i)||(Ur=i,i=Ws(bo,"onSelect"),0<i.length&&(t=new _o("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Hn)))}function zs(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var $n={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionend:zs("Transition","TransitionEnd")},Do={},hc={};m&&(hc=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function Bs(e){if(Do[e])return Do[e];if(!$n[e])return e;var t=$n[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in hc)return Do[e]=t[r];return e}var gc=Bs("animationend"),yc=Bs("animationiteration"),vc=Bs("animationstart"),wc=Bs("transitionend"),_c=new Map,Sc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){_c.set(e,t),f(t,[e])}for(var Ro=0;Ro<Sc.length;Ro++){var Fo=Sc[Ro],pg=Fo.toLowerCase(),mg=Fo[0].toUpperCase()+Fo.slice(1);en(pg,"on"+mg)}en(gc,"onAnimationEnd"),en(yc,"onAnimationIteration"),en(vc,"onAnimationStart"),en("dblclick","onDoubleClick"),en("focusin","onFocus"),en("focusout","onBlur"),en(wc,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hg=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function xc(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,ph(i,t,void 0,e),e.currentTarget=null}function Tc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],a=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var p=i.length-1;0<=p;p--){var v=i[p],w=v.instance,E=v.currentTarget;if(v=v.listener,w!==u&&a.isPropagationStopped())break e;xc(a,v,E),u=w}else for(p=0;p<i.length;p++){if(v=i[p],w=v.instance,E=v.currentTarget,v=v.listener,w!==u&&a.isPropagationStopped())break e;xc(a,v,E),u=w}}}if(Es)throw e=uo,Es=!1,uo=null,e}function ge(e,t){var r=t[zo];r===void 0&&(r=t[zo]=new Set);var i=e+"__bubble";r.has(i)||(kc(t,e,2,!1),r.add(i))}function Mo(e,t,r){var i=0;t&&(i|=4),kc(r,e,i,t)}var qs="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[qs]){e[qs]=!0,l.forEach(function(r){r!=="selectionchange"&&(hg.has(r)||Mo(r,!1,e),Mo(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qs]||(t[qs]=!0,Mo("selectionchange",!1,t))}}function kc(e,t,r,i){switch(Yu(t)){case 1:var a=bh;break;case 4:a=Ah;break;default:a=yo}r=a.bind(null,t,r,e),a=void 0,!lo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Lo(e,t,r,i,a){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var v=i.stateNode.containerInfo;if(v===a||v.nodeType===8&&v.parentNode===a)break;if(p===4)for(p=i.return;p!==null;){var w=p.tag;if((w===3||w===4)&&(w=p.stateNode.containerInfo,w===a||w.nodeType===8&&w.parentNode===a))return;p=p.return}for(;v!==null;){if(p=Sn(v),p===null)return;if(w=p.tag,w===5||w===6){i=u=p;continue e}v=v.parentNode}}i=i.return}bu(function(){var E=u,D=io(r),R=[];e:{var b=_c.get(e);if(b!==void 0){var z=_o,q=e;switch(e){case"keypress":if(Vs(r)===0)break e;case"keydown":case"keyup":z=Hh;break;case"focusin":q="focus",z=To;break;case"focusout":q="blur",z=To;break;case"beforeblur":case"afterblur":z=To;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Fh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Gh;break;case gc:case yc:case vc:z=Nh;break;case wc:z=Qh;break;case"scroll":z=Dh;break;case"wheel":z=Zh;break;case"copy":case"cut":case"paste":z=Ih;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=Zu}var W=(t&4)!==0,be=!W&&e==="scroll",k=W?b!==null?b+"Capture":null:b;W=[];for(var S=E,P;S!==null;){P=S;var F=P.stateNode;if(P.tag===5&&F!==null&&(P=F,k!==null&&(F=kr(S,k),F!=null&&W.push(qr(S,F,P)))),be)break;S=S.return}0<W.length&&(b=new z(b,q,null,r,D),R.push({event:b,listeners:W}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",b&&r!==so&&(q=r.relatedTarget||r.fromElement)&&(Sn(q)||q[Ot]))break e;if((z||b)&&(b=D.window===D?D:(b=D.ownerDocument)?b.defaultView||b.parentWindow:window,z?(q=r.relatedTarget||r.toElement,z=E,q=q?Sn(q):null,q!==null&&(be=_n(q),q!==be||q.tag!==5&&q.tag!==6)&&(q=null)):(z=null,q=E),z!==q)){if(W=Qu,F="onMouseLeave",k="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(W=Zu,F="onPointerLeave",k="onPointerEnter",S="pointer"),be=z==null?b:Kn(z),P=q==null?b:Kn(q),b=new W(F,S+"leave",z,r,D),b.target=be,b.relatedTarget=P,F=null,Sn(D)===E&&(W=new W(k,S+"enter",q,r,D),W.target=P,W.relatedTarget=be,F=W),be=F,z&&q)t:{for(W=z,k=q,S=0,P=W;P;P=Yn(P))S++;for(P=0,F=k;F;F=Yn(F))P++;for(;0<S-P;)W=Yn(W),S--;for(;0<P-S;)k=Yn(k),P--;for(;S--;){if(W===k||k!==null&&W===k.alternate)break t;W=Yn(W),k=Yn(k)}W=null}else W=null;z!==null&&Pc(R,b,z,W,!1),q!==null&&be!==null&&Pc(R,be,q,W,!0)}}e:{if(b=E?Kn(E):window,z=b.nodeName&&b.nodeName.toLowerCase(),z==="select"||z==="input"&&b.type==="file")var $=ig;else if(sc(b))if(oc)$=ug;else{$=ag;var K=og}else(z=b.nodeName)&&z.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&($=lg);if($&&($=$(e,E))){ic(R,$,r,D);break e}K&&K(e,b,E),e==="focusout"&&(K=b._wrapperState)&&K.controlled&&b.type==="number"&&Ji(b,"number",b.value)}switch(K=E?Kn(E):window,e){case"focusin":(sc(K)||K.contentEditable==="true")&&(Hn=K,bo=E,Ur=null);break;case"focusout":Ur=bo=Hn=null;break;case"mousedown":Ao=!0;break;case"contextmenu":case"mouseup":case"dragend":Ao=!1,mc(R,r,D);break;case"selectionchange":if(fg)break;case"keydown":case"keyup":mc(R,r,D)}var Q;if(Po)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Wn?nc(e,r)&&(te="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(te="onCompositionStart");te&&(Ju&&r.locale!=="ko"&&(Wn||te!=="onCompositionStart"?te==="onCompositionEnd"&&Wn&&(Q=Gu()):(Jt=D,wo="value"in Jt?Jt.value:Jt.textContent,Wn=!0)),K=Ws(E,te),0<K.length&&(te=new Xu(te,e,null,r,D),R.push({event:te,listeners:K}),Q?te.data=Q:(Q=rc(r),Q!==null&&(te.data=Q)))),(Q=eg?tg(e,r):ng(e,r))&&(E=Ws(E,"onBeforeInput"),0<E.length&&(D=new Xu("onBeforeInput","beforeinput",null,r,D),R.push({event:D,listeners:E}),D.data=Q))}Tc(R,t)})}function qr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ws(e,t){for(var r=t+"Capture",i=[];e!==null;){var a=e,u=a.stateNode;a.tag===5&&u!==null&&(a=u,u=kr(e,r),u!=null&&i.unshift(qr(e,u,a)),u=kr(e,t),u!=null&&i.push(qr(e,u,a))),e=e.return}return i}function Yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pc(e,t,r,i,a){for(var u=t._reactName,p=[];r!==null&&r!==i;){var v=r,w=v.alternate,E=v.stateNode;if(w!==null&&w===i)break;v.tag===5&&E!==null&&(v=E,a?(w=kr(r,u),w!=null&&p.unshift(qr(r,w,v))):a||(w=kr(r,u),w!=null&&p.push(qr(r,w,v)))),r=r.return}p.length!==0&&e.push({event:t,listeners:p})}var gg=/\r\n?/g,yg=/\u0000|\uFFFD/g;function Ec(e){return(typeof e=="string"?e:""+e).replace(gg,`
`).replace(yg,"")}function Hs(e,t,r){if(t=Ec(t),Ec(e)!==t&&r)throw Error(o(425))}function $s(){}var No=null,Vo=null;function Io(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Oo=typeof setTimeout=="function"?setTimeout:void 0,vg=typeof clearTimeout=="function"?clearTimeout:void 0,Cc=typeof Promise=="function"?Promise:void 0,wg=typeof queueMicrotask=="function"?queueMicrotask:typeof Cc<"u"?function(e){return Cc.resolve(null).then(e).catch(_g)}:Oo;function _g(e){setTimeout(function(){throw e})}function Uo(e,t){var r=t,i=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(i===0){e.removeChild(a),Fr(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=a}while(r);Fr(t)}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function jc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Gn,Wr="__reactProps$"+Gn,Ot="__reactContainer$"+Gn,zo="__reactEvents$"+Gn,Sg="__reactListeners$"+Gn,xg="__reactHandles$"+Gn;function Sn(e){var t=e[Ft];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ot]||r[Ft]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=jc(e);e!==null;){if(r=e[Ft])return r;e=jc(e)}return t}e=r,r=e.parentNode}return null}function Hr(e){return e=e[Ft]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Ys(e){return e[Wr]||null}var Bo=[],Qn=-1;function nn(e){return{current:e}}function ye(e){0>Qn||(e.current=Bo[Qn],Bo[Qn]=null,Qn--)}function he(e,t){Qn++,Bo[Qn]=e.current,e.current=t}var rn={},ze=nn(rn),et=nn(!1),xn=rn;function Xn(e,t){var r=e.type.contextTypes;if(!r)return rn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var a={},u;for(u in r)a[u]=t[u];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function tt(e){return e=e.childContextTypes,e!=null}function Gs(){ye(et),ye(ze)}function bc(e,t,r){if(ze.current!==rn)throw Error(o(168));he(ze,t),he(et,r)}function Ac(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var a in i)if(!(a in t))throw Error(o(108,me(e)||"Unknown",a));return U({},r,i)}function Ks(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,xn=ze.current,he(ze,e),he(et,et.current),!0}function Dc(e,t,r){var i=e.stateNode;if(!i)throw Error(o(169));r?(e=Ac(e,t,xn),i.__reactInternalMemoizedMergedChildContext=e,ye(et),ye(ze),he(ze,e)):ye(et),he(et,r)}var Ut=null,Qs=!1,qo=!1;function Rc(e){Ut===null?Ut=[e]:Ut.push(e)}function Tg(e){Qs=!0,Rc(e)}function sn(){if(!qo&&Ut!==null){qo=!0;var e=0,t=pe;try{var r=Ut;for(pe=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}Ut=null,Qs=!1}catch(a){throw Ut!==null&&(Ut=Ut.slice(e+1)),Mu(co,sn),a}finally{pe=t,qo=!1}}return null}var Zn=[],Jn=0,Xs=null,Zs=0,mt=[],ht=0,Tn=null,zt=1,Bt="";function kn(e,t){Zn[Jn++]=Zs,Zn[Jn++]=Xs,Xs=e,Zs=t}function Fc(e,t,r){mt[ht++]=zt,mt[ht++]=Bt,mt[ht++]=Tn,Tn=e;var i=zt;e=Bt;var a=32-Tt(i)-1;i&=~(1<<a),r+=1;var u=32-Tt(t)+a;if(30<u){var p=a-a%5;u=(i&(1<<p)-1).toString(32),i>>=p,a-=p,zt=1<<32-Tt(t)+a|r<<a|i,Bt=u+e}else zt=1<<u|r<<a|i,Bt=e}function Wo(e){e.return!==null&&(kn(e,1),Fc(e,1,0))}function Ho(e){for(;e===Xs;)Xs=Zn[--Jn],Zn[Jn]=null,Zs=Zn[--Jn],Zn[Jn]=null;for(;e===Tn;)Tn=mt[--ht],mt[ht]=null,Bt=mt[--ht],mt[ht]=null,zt=mt[--ht],mt[ht]=null}var dt=null,ft=null,we=!1,Pt=null;function Mc(e,t){var r=wt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Lc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ft=tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Tn!==null?{id:zt,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=wt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,dt=e,ft=null,!0):!1;default:return!1}}function $o(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yo(e){if(we){var t=ft;if(t){var r=t;if(!Lc(e,t)){if($o(e))throw Error(o(418));t=tn(r.nextSibling);var i=dt;t&&Lc(e,t)?Mc(i,r):(e.flags=e.flags&-4097|2,we=!1,dt=e)}}else{if($o(e))throw Error(o(418));e.flags=e.flags&-4097|2,we=!1,dt=e}}}function Nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function Js(e){if(e!==dt)return!1;if(!we)return Nc(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Io(e.type,e.memoizedProps)),t&&(t=ft)){if($o(e))throw Vc(),Error(o(418));for(;t;)Mc(e,t),t=tn(t.nextSibling)}if(Nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ft=tn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=dt?tn(e.stateNode.nextSibling):null;return!0}function Vc(){for(var e=ft;e;)e=tn(e.nextSibling)}function er(){ft=dt=null,we=!1}function Go(e){Pt===null?Pt=[e]:Pt.push(e)}var kg=X.ReactCurrentBatchConfig;function $r(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(o(309));var i=r.stateNode}if(!i)throw Error(o(147,e));var a=i,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(p){var v=a.refs;p===null?delete v[u]:v[u]=p},t._stringRef=u,t)}if(typeof e!="string")throw Error(o(284));if(!r._owner)throw Error(o(290,e))}return e}function ei(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ic(e){var t=e._init;return t(e._payload)}function Oc(e){function t(k,S){if(e){var P=k.deletions;P===null?(k.deletions=[S],k.flags|=16):P.push(S)}}function r(k,S){if(!e)return null;for(;S!==null;)t(k,S),S=S.sibling;return null}function i(k,S){for(k=new Map;S!==null;)S.key!==null?k.set(S.key,S):k.set(S.index,S),S=S.sibling;return k}function a(k,S){return k=pn(k,S),k.index=0,k.sibling=null,k}function u(k,S,P){return k.index=P,e?(P=k.alternate,P!==null?(P=P.index,P<S?(k.flags|=2,S):P):(k.flags|=2,S)):(k.flags|=1048576,S)}function p(k){return e&&k.alternate===null&&(k.flags|=2),k}function v(k,S,P,F){return S===null||S.tag!==6?(S=Oa(P,k.mode,F),S.return=k,S):(S=a(S,P),S.return=k,S)}function w(k,S,P,F){var $=P.type;return $===ae?D(k,S,P.props.children,F,P.key):S!==null&&(S.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ye&&Ic($)===S.type)?(F=a(S,P.props),F.ref=$r(k,S,P),F.return=k,F):(F=ki(P.type,P.key,P.props,null,k.mode,F),F.ref=$r(k,S,P),F.return=k,F)}function E(k,S,P,F){return S===null||S.tag!==4||S.stateNode.containerInfo!==P.containerInfo||S.stateNode.implementation!==P.implementation?(S=Ua(P,k.mode,F),S.return=k,S):(S=a(S,P.children||[]),S.return=k,S)}function D(k,S,P,F,$){return S===null||S.tag!==7?(S=Rn(P,k.mode,F,$),S.return=k,S):(S=a(S,P),S.return=k,S)}function R(k,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Oa(""+S,k.mode,P),S.return=k,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Y:return P=ki(S.type,S.key,S.props,null,k.mode,P),P.ref=$r(k,null,S),P.return=k,P;case ne:return S=Ua(S,k.mode,P),S.return=k,S;case Ye:var F=S._init;return R(k,F(S._payload),P)}if(Sr(S)||G(S))return S=Rn(S,k.mode,P,null),S.return=k,S;ei(k,S)}return null}function b(k,S,P,F){var $=S!==null?S.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return $!==null?null:v(k,S,""+P,F);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Y:return P.key===$?w(k,S,P,F):null;case ne:return P.key===$?E(k,S,P,F):null;case Ye:return $=P._init,b(k,S,$(P._payload),F)}if(Sr(P)||G(P))return $!==null?null:D(k,S,P,F,null);ei(k,P)}return null}function z(k,S,P,F,$){if(typeof F=="string"&&F!==""||typeof F=="number")return k=k.get(P)||null,v(S,k,""+F,$);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Y:return k=k.get(F.key===null?P:F.key)||null,w(S,k,F,$);case ne:return k=k.get(F.key===null?P:F.key)||null,E(S,k,F,$);case Ye:var K=F._init;return z(k,S,P,K(F._payload),$)}if(Sr(F)||G(F))return k=k.get(P)||null,D(S,k,F,$,null);ei(S,F)}return null}function q(k,S,P,F){for(var $=null,K=null,Q=S,te=S=0,Ve=null;Q!==null&&te<P.length;te++){Q.index>te?(Ve=Q,Q=null):Ve=Q.sibling;var de=b(k,Q,P[te],F);if(de===null){Q===null&&(Q=Ve);break}e&&Q&&de.alternate===null&&t(k,Q),S=u(de,S,te),K===null?$=de:K.sibling=de,K=de,Q=Ve}if(te===P.length)return r(k,Q),we&&kn(k,te),$;if(Q===null){for(;te<P.length;te++)Q=R(k,P[te],F),Q!==null&&(S=u(Q,S,te),K===null?$=Q:K.sibling=Q,K=Q);return we&&kn(k,te),$}for(Q=i(k,Q);te<P.length;te++)Ve=z(Q,k,te,P[te],F),Ve!==null&&(e&&Ve.alternate!==null&&Q.delete(Ve.key===null?te:Ve.key),S=u(Ve,S,te),K===null?$=Ve:K.sibling=Ve,K=Ve);return e&&Q.forEach(function(mn){return t(k,mn)}),we&&kn(k,te),$}function W(k,S,P,F){var $=G(P);if(typeof $!="function")throw Error(o(150));if(P=$.call(P),P==null)throw Error(o(151));for(var K=$=null,Q=S,te=S=0,Ve=null,de=P.next();Q!==null&&!de.done;te++,de=P.next()){Q.index>te?(Ve=Q,Q=null):Ve=Q.sibling;var mn=b(k,Q,de.value,F);if(mn===null){Q===null&&(Q=Ve);break}e&&Q&&mn.alternate===null&&t(k,Q),S=u(mn,S,te),K===null?$=mn:K.sibling=mn,K=mn,Q=Ve}if(de.done)return r(k,Q),we&&kn(k,te),$;if(Q===null){for(;!de.done;te++,de=P.next())de=R(k,de.value,F),de!==null&&(S=u(de,S,te),K===null?$=de:K.sibling=de,K=de);return we&&kn(k,te),$}for(Q=i(k,Q);!de.done;te++,de=P.next())de=z(Q,k,te,de.value,F),de!==null&&(e&&de.alternate!==null&&Q.delete(de.key===null?te:de.key),S=u(de,S,te),K===null?$=de:K.sibling=de,K=de);return e&&Q.forEach(function(ry){return t(k,ry)}),we&&kn(k,te),$}function be(k,S,P,F){if(typeof P=="object"&&P!==null&&P.type===ae&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case Y:e:{for(var $=P.key,K=S;K!==null;){if(K.key===$){if($=P.type,$===ae){if(K.tag===7){r(k,K.sibling),S=a(K,P.props.children),S.return=k,k=S;break e}}else if(K.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ye&&Ic($)===K.type){r(k,K.sibling),S=a(K,P.props),S.ref=$r(k,K,P),S.return=k,k=S;break e}r(k,K);break}else t(k,K);K=K.sibling}P.type===ae?(S=Rn(P.props.children,k.mode,F,P.key),S.return=k,k=S):(F=ki(P.type,P.key,P.props,null,k.mode,F),F.ref=$r(k,S,P),F.return=k,k=F)}return p(k);case ne:e:{for(K=P.key;S!==null;){if(S.key===K)if(S.tag===4&&S.stateNode.containerInfo===P.containerInfo&&S.stateNode.implementation===P.implementation){r(k,S.sibling),S=a(S,P.children||[]),S.return=k,k=S;break e}else{r(k,S);break}else t(k,S);S=S.sibling}S=Ua(P,k.mode,F),S.return=k,k=S}return p(k);case Ye:return K=P._init,be(k,S,K(P._payload),F)}if(Sr(P))return q(k,S,P,F);if(G(P))return W(k,S,P,F);ei(k,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,S!==null&&S.tag===6?(r(k,S.sibling),S=a(S,P),S.return=k,k=S):(r(k,S),S=Oa(P,k.mode,F),S.return=k,k=S),p(k)):r(k,S)}return be}var tr=Oc(!0),Uc=Oc(!1),ti=nn(null),ni=null,nr=null,Ko=null;function Qo(){Ko=nr=ni=null}function Xo(e){var t=ti.current;ye(ti),e._currentValue=t}function Zo(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function rr(e,t){ni=e,Ko=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(nt=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Ko!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(ni===null)throw Error(o(308));nr=e,ni.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var Pn=null;function Jo(e){Pn===null?Pn=[e]:Pn.push(e)}function zc(e,t,r,i){var a=t.interleaved;return a===null?(r.next=r,Jo(t)):(r.next=a.next,a.next=r),t.interleaved=r,qt(e,i)}function qt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var on=!1;function ea(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(le&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,qt(e,r)}return a=i.interleaved,a===null?(t.next=t,Jo(i)):(t.next=a.next,a.next=t),i.interleaved=t,qt(e,r)}function ri(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,mo(e,r)}}function qc(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var a=null,u=null;if(r=r.firstBaseUpdate,r!==null){do{var p={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};u===null?a=u=p:u=u.next=p,r=r.next}while(r!==null);u===null?a=u=t:u=u.next=t}else a=u=t;r={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function si(e,t,r,i){var a=e.updateQueue;on=!1;var u=a.firstBaseUpdate,p=a.lastBaseUpdate,v=a.shared.pending;if(v!==null){a.shared.pending=null;var w=v,E=w.next;w.next=null,p===null?u=E:p.next=E,p=w;var D=e.alternate;D!==null&&(D=D.updateQueue,v=D.lastBaseUpdate,v!==p&&(v===null?D.firstBaseUpdate=E:v.next=E,D.lastBaseUpdate=w))}if(u!==null){var R=a.baseState;p=0,D=E=w=null,v=u;do{var b=v.lane,z=v.eventTime;if((i&b)===b){D!==null&&(D=D.next={eventTime:z,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var q=e,W=v;switch(b=t,z=r,W.tag){case 1:if(q=W.payload,typeof q=="function"){R=q.call(z,R,b);break e}R=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=W.payload,b=typeof q=="function"?q.call(z,R,b):q,b==null)break e;R=U({},R,b);break e;case 2:on=!0}}v.callback!==null&&v.lane!==0&&(e.flags|=64,b=a.effects,b===null?a.effects=[v]:b.push(v))}else z={eventTime:z,lane:b,tag:v.tag,payload:v.payload,callback:v.callback,next:null},D===null?(E=D=z,w=R):D=D.next=z,p|=b;if(v=v.next,v===null){if(v=a.shared.pending,v===null)break;b=v,v=b.next,b.next=null,a.lastBaseUpdate=b,a.shared.pending=null}}while(!0);if(D===null&&(w=R),a.baseState=w,a.firstBaseUpdate=E,a.lastBaseUpdate=D,t=a.shared.interleaved,t!==null){a=t;do p|=a.lane,a=a.next;while(a!==t)}else u===null&&(a.shared.lanes=0);jn|=p,e.lanes=p,e.memoizedState=R}}function Wc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=r,typeof a!="function")throw Error(o(191,a));a.call(i)}}}var Yr={},Mt=nn(Yr),Gr=nn(Yr),Kr=nn(Yr);function En(e){if(e===Yr)throw Error(o(174));return e}function ta(e,t){switch(he(Kr,t),he(Gr,e),he(Mt,Yr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:to(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=to(t,e)}ye(Mt),he(Mt,t)}function sr(){ye(Mt),ye(Gr),ye(Kr)}function Hc(e){En(Kr.current);var t=En(Mt.current),r=to(t,e.type);t!==r&&(he(Gr,e),he(Mt,r))}function na(e){Gr.current===e&&(ye(Mt),ye(Gr))}var xe=nn(0);function ii(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=[];function sa(){for(var e=0;e<ra.length;e++)ra[e]._workInProgressVersionPrimary=null;ra.length=0}var oi=X.ReactCurrentDispatcher,ia=X.ReactCurrentBatchConfig,Cn=0,Te=null,Re=null,Le=null,ai=!1,Qr=!1,Xr=0,Pg=0;function Be(){throw Error(o(321))}function oa(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!kt(e[r],t[r]))return!1;return!0}function aa(e,t,r,i,a,u){if(Cn=u,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oi.current=e===null||e.memoizedState===null?bg:Ag,e=r(i,a),Qr){u=0;do{if(Qr=!1,Xr=0,25<=u)throw Error(o(301));u+=1,Le=Re=null,t.updateQueue=null,oi.current=Dg,e=r(i,a)}while(Qr)}if(oi.current=ci,t=Re!==null&&Re.next!==null,Cn=0,Le=Re=Te=null,ai=!1,t)throw Error(o(300));return e}function la(){var e=Xr!==0;return Xr=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?Te.memoizedState=Le=e:Le=Le.next=e,Le}function yt(){if(Re===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Le===null?Te.memoizedState:Le.next;if(t!==null)Le=t,Re=e;else{if(e===null)throw Error(o(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Le===null?Te.memoizedState=Le=e:Le=Le.next=e}return Le}function Zr(e,t){return typeof t=="function"?t(e):t}function ua(e){var t=yt(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var i=Re,a=i.baseQueue,u=r.pending;if(u!==null){if(a!==null){var p=a.next;a.next=u.next,u.next=p}i.baseQueue=a=u,r.pending=null}if(a!==null){u=a.next,i=i.baseState;var v=p=null,w=null,E=u;do{var D=E.lane;if((Cn&D)===D)w!==null&&(w=w.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),i=E.hasEagerState?E.eagerState:e(i,E.action);else{var R={lane:D,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};w===null?(v=w=R,p=i):w=w.next=R,Te.lanes|=D,jn|=D}E=E.next}while(E!==null&&E!==u);w===null?p=i:w.next=v,kt(i,t.memoizedState)||(nt=!0),t.memoizedState=i,t.baseState=p,t.baseQueue=w,r.lastRenderedState=i}if(e=r.interleaved,e!==null){a=e;do u=a.lane,Te.lanes|=u,jn|=u,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ca(e){var t=yt(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var i=r.dispatch,a=r.pending,u=t.memoizedState;if(a!==null){r.pending=null;var p=a=a.next;do u=e(u,p.action),p=p.next;while(p!==a);kt(u,t.memoizedState)||(nt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),r.lastRenderedState=u}return[u,i]}function $c(){}function Yc(e,t){var r=Te,i=yt(),a=t(),u=!kt(i.memoizedState,a);if(u&&(i.memoizedState=a,nt=!0),i=i.queue,da(Qc.bind(null,r,i,e),[e]),i.getSnapshot!==t||u||Le!==null&&Le.memoizedState.tag&1){if(r.flags|=2048,Jr(9,Kc.bind(null,r,i,a,t),void 0,null),Ne===null)throw Error(o(349));(Cn&30)!==0||Gc(r,t,a)}return a}function Gc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Kc(e,t,r,i){t.value=r,t.getSnapshot=i,Xc(t)&&Zc(e)}function Qc(e,t,r){return r(function(){Xc(t)&&Zc(e)})}function Xc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!kt(e,r)}catch{return!0}}function Zc(e){var t=qt(e,1);t!==null&&bt(t,e,1,-1)}function Jc(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:e},t.queue=e,e=e.dispatch=jg.bind(null,Te,e),[t.memoizedState,e]}function Jr(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function ed(){return yt().memoizedState}function li(e,t,r,i){var a=Lt();Te.flags|=e,a.memoizedState=Jr(1|t,r,void 0,i===void 0?null:i)}function ui(e,t,r,i){var a=yt();i=i===void 0?null:i;var u=void 0;if(Re!==null){var p=Re.memoizedState;if(u=p.destroy,i!==null&&oa(i,p.deps)){a.memoizedState=Jr(t,r,u,i);return}}Te.flags|=e,a.memoizedState=Jr(1|t,r,u,i)}function td(e,t){return li(8390656,8,e,t)}function da(e,t){return ui(2048,8,e,t)}function nd(e,t){return ui(4,2,e,t)}function rd(e,t){return ui(4,4,e,t)}function sd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function id(e,t,r){return r=r!=null?r.concat([e]):null,ui(4,4,sd.bind(null,t,e),r)}function fa(){}function od(e,t){var r=yt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&oa(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function ad(e,t){var r=yt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&oa(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function ld(e,t,r){return(Cn&21)===0?(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=r):(kt(r,t)||(r=Iu(),Te.lanes|=r,jn|=r,e.baseState=!0),t)}function Eg(e,t){var r=pe;pe=r!==0&&4>r?r:4,e(!0);var i=ia.transition;ia.transition={};try{e(!1),t()}finally{pe=r,ia.transition=i}}function ud(){return yt().memoizedState}function Cg(e,t,r){var i=dn(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},cd(e))dd(t,r);else if(r=zc(e,t,r,i),r!==null){var a=Ke();bt(r,e,i,a),fd(r,t,i)}}function jg(e,t,r){var i=dn(e),a={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(cd(e))dd(t,a);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var p=t.lastRenderedState,v=u(p,r);if(a.hasEagerState=!0,a.eagerState=v,kt(v,p)){var w=t.interleaved;w===null?(a.next=a,Jo(t)):(a.next=w.next,w.next=a),t.interleaved=a;return}}catch{}finally{}r=zc(e,t,a,i),r!==null&&(a=Ke(),bt(r,e,i,a),fd(r,t,i))}}function cd(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function dd(e,t){Qr=ai=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function fd(e,t,r){if((r&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,mo(e,r)}}var ci={readContext:gt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},bg={readContext:gt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:td,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,li(4194308,4,sd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return li(4194308,4,e,t)},useInsertionEffect:function(e,t){return li(4,2,e,t)},useMemo:function(e,t){var r=Lt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=Lt();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Cg.bind(null,Te,e),[i.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:Jc,useDebugValue:fa,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=Jc(!1),t=e[0];return e=Eg.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=Te,a=Lt();if(we){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),Ne===null)throw Error(o(349));(Cn&30)!==0||Gc(i,t,r)}a.memoizedState=r;var u={value:r,getSnapshot:t};return a.queue=u,td(Qc.bind(null,i,u,e),[e]),i.flags|=2048,Jr(9,Kc.bind(null,i,u,r,t),void 0,null),r},useId:function(){var e=Lt(),t=Ne.identifierPrefix;if(we){var r=Bt,i=zt;r=(i&~(1<<32-Tt(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=Xr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Pg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ag={readContext:gt,useCallback:od,useContext:gt,useEffect:da,useImperativeHandle:id,useInsertionEffect:nd,useLayoutEffect:rd,useMemo:ad,useReducer:ua,useRef:ed,useState:function(){return ua(Zr)},useDebugValue:fa,useDeferredValue:function(e){var t=yt();return ld(t,Re.memoizedState,e)},useTransition:function(){var e=ua(Zr)[0],t=yt().memoizedState;return[e,t]},useMutableSource:$c,useSyncExternalStore:Yc,useId:ud,unstable_isNewReconciler:!1},Dg={readContext:gt,useCallback:od,useContext:gt,useEffect:da,useImperativeHandle:id,useInsertionEffect:nd,useLayoutEffect:rd,useMemo:ad,useReducer:ca,useRef:ed,useState:function(){return ca(Zr)},useDebugValue:fa,useDeferredValue:function(e){var t=yt();return Re===null?t.memoizedState=e:ld(t,Re.memoizedState,e)},useTransition:function(){var e=ca(Zr)[0],t=yt().memoizedState;return[e,t]},useMutableSource:$c,useSyncExternalStore:Yc,useId:ud,unstable_isNewReconciler:!1};function Et(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function pa(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:U({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var di={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=Ke(),a=dn(e),u=Wt(i,a);u.payload=t,r!=null&&(u.callback=r),t=an(e,u,a),t!==null&&(bt(t,e,a,i),ri(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=Ke(),a=dn(e),u=Wt(i,a);u.tag=1,u.payload=t,r!=null&&(u.callback=r),t=an(e,u,a),t!==null&&(bt(t,e,a,i),ri(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ke(),i=dn(e),a=Wt(r,i);a.tag=2,t!=null&&(a.callback=t),t=an(e,a,i),t!==null&&(bt(t,e,i,r),ri(t,e,i))}};function pd(e,t,r,i,a,u,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,p):t.prototype&&t.prototype.isPureReactComponent?!Or(r,i)||!Or(a,u):!0}function md(e,t,r){var i=!1,a=rn,u=t.contextType;return typeof u=="object"&&u!==null?u=gt(u):(a=tt(t)?xn:ze.current,i=t.contextTypes,u=(i=i!=null)?Xn(e,a):rn),t=new t(r,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=di,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=u),t}function hd(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&di.enqueueReplaceState(t,t.state,null)}function ma(e,t,r,i){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},ea(e);var u=t.contextType;typeof u=="object"&&u!==null?a.context=gt(u):(u=tt(t)?xn:ze.current,a.context=Xn(e,u)),a.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(pa(e,t,u,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&di.enqueueReplaceState(a,a.state,null),si(e,r,a,i),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,t){try{var r="",i=t;do r+=ue(i),i=i.return;while(i);var a=r}catch(u){a=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:a,digest:null}}function ha(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ga(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Rg=typeof WeakMap=="function"?WeakMap:Map;function gd(e,t,r){r=Wt(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){vi||(vi=!0,Da=i),ga(e,t)},r}function yd(e,t,r){r=Wt(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var a=t.value;r.payload=function(){return i(a)},r.callback=function(){ga(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(r.callback=function(){ga(e,t),typeof i!="function"&&(un===null?un=new Set([this]):un.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),r}function vd(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new Rg;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(r)||(a.add(r),e=$g.bind(null,e,t,r),t.then(e,e))}function wd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _d(e,t,r,i,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Wt(-1,1),t.tag=2,an(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Fg=X.ReactCurrentOwner,nt=!1;function Ge(e,t,r,i){t.child=e===null?Uc(t,null,r,i):tr(t,e.child,r,i)}function Sd(e,t,r,i,a){r=r.render;var u=t.ref;return rr(t,a),i=aa(e,t,r,i,u,a),r=la(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ht(e,t,a)):(we&&r&&Wo(t),t.flags|=1,Ge(e,t,i,a),t.child)}function xd(e,t,r,i,a){if(e===null){var u=r.type;return typeof u=="function"&&!Ia(u)&&u.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=u,Td(e,t,u,i,a)):(e=ki(r.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&a)===0){var p=u.memoizedProps;if(r=r.compare,r=r!==null?r:Or,r(p,i)&&e.ref===t.ref)return Ht(e,t,a)}return t.flags|=1,e=pn(u,i),e.ref=t.ref,e.return=t,t.child=e}function Td(e,t,r,i,a){if(e!==null){var u=e.memoizedProps;if(Or(u,i)&&e.ref===t.ref)if(nt=!1,t.pendingProps=i=u,(e.lanes&a)!==0)(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,Ht(e,t,a)}return ya(e,t,r,i,a)}function kd(e,t,r){var i=t.pendingProps,a=i.children,u=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(ar,pt),pt|=r;else{if((r&1073741824)===0)return e=u!==null?u.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(ar,pt),pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=u!==null?u.baseLanes:r,he(ar,pt),pt|=i}else u!==null?(i=u.baseLanes|r,t.memoizedState=null):i=r,he(ar,pt),pt|=i;return Ge(e,t,a,r),t.child}function Pd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ya(e,t,r,i,a){var u=tt(r)?xn:ze.current;return u=Xn(t,u),rr(t,a),r=aa(e,t,r,i,u,a),i=la(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ht(e,t,a)):(we&&i&&Wo(t),t.flags|=1,Ge(e,t,r,a),t.child)}function Ed(e,t,r,i,a){if(tt(r)){var u=!0;Ks(t)}else u=!1;if(rr(t,a),t.stateNode===null)pi(e,t),md(t,r,i),ma(t,r,i,a),i=!0;else if(e===null){var p=t.stateNode,v=t.memoizedProps;p.props=v;var w=p.context,E=r.contextType;typeof E=="object"&&E!==null?E=gt(E):(E=tt(r)?xn:ze.current,E=Xn(t,E));var D=r.getDerivedStateFromProps,R=typeof D=="function"||typeof p.getSnapshotBeforeUpdate=="function";R||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(v!==i||w!==E)&&hd(t,p,i,E),on=!1;var b=t.memoizedState;p.state=b,si(t,i,p,a),w=t.memoizedState,v!==i||b!==w||et.current||on?(typeof D=="function"&&(pa(t,r,D,i),w=t.memoizedState),(v=on||pd(t,r,v,i,b,w,E))?(R||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=w),p.props=i,p.state=w,p.context=E,i=v):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{p=t.stateNode,Bc(e,t),v=t.memoizedProps,E=t.type===t.elementType?v:Et(t.type,v),p.props=E,R=t.pendingProps,b=p.context,w=r.contextType,typeof w=="object"&&w!==null?w=gt(w):(w=tt(r)?xn:ze.current,w=Xn(t,w));var z=r.getDerivedStateFromProps;(D=typeof z=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(v!==R||b!==w)&&hd(t,p,i,w),on=!1,b=t.memoizedState,p.state=b,si(t,i,p,a);var q=t.memoizedState;v!==R||b!==q||et.current||on?(typeof z=="function"&&(pa(t,r,z,i),q=t.memoizedState),(E=on||pd(t,r,E,i,b,q,w)||!1)?(D||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(i,q,w),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(i,q,w)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||v===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=q),p.props=i,p.state=q,p.context=w,i=E):(typeof p.componentDidUpdate!="function"||v===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),i=!1)}return va(e,t,r,i,u,a)}function va(e,t,r,i,a,u){Pd(e,t);var p=(t.flags&128)!==0;if(!i&&!p)return a&&Dc(t,r,!1),Ht(e,t,u);i=t.stateNode,Fg.current=t;var v=p&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&p?(t.child=tr(t,e.child,null,u),t.child=tr(t,null,v,u)):Ge(e,t,v,u),t.memoizedState=i.state,a&&Dc(t,r,!0),t.child}function Cd(e){var t=e.stateNode;t.pendingContext?bc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bc(e,t.context,!1),ta(e,t.containerInfo)}function jd(e,t,r,i,a){return er(),Go(a),t.flags|=256,Ge(e,t,r,i),t.child}var wa={dehydrated:null,treeContext:null,retryLane:0};function _a(e){return{baseLanes:e,cachePool:null,transitions:null}}function bd(e,t,r){var i=t.pendingProps,a=xe.current,u=!1,p=(t.flags&128)!==0,v;if((v=p)||(v=e!==null&&e.memoizedState===null?!1:(a&2)!==0),v?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),he(xe,a&1),e===null)return Yo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(p=i.children,e=i.fallback,u?(i=t.mode,u=t.child,p={mode:"hidden",children:p},(i&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=p):u=Pi(p,i,0,null),e=Rn(e,i,r,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=_a(r),t.memoizedState=wa,e):Sa(t,p));if(a=e.memoizedState,a!==null&&(v=a.dehydrated,v!==null))return Mg(e,t,p,i,v,a,r);if(u){u=i.fallback,p=t.mode,a=e.child,v=a.sibling;var w={mode:"hidden",children:i.children};return(p&1)===0&&t.child!==a?(i=t.child,i.childLanes=0,i.pendingProps=w,t.deletions=null):(i=pn(a,w),i.subtreeFlags=a.subtreeFlags&14680064),v!==null?u=pn(v,u):(u=Rn(u,p,r,null),u.flags|=2),u.return=t,i.return=t,i.sibling=u,t.child=i,i=u,u=t.child,p=e.child.memoizedState,p=p===null?_a(r):{baseLanes:p.baseLanes|r,cachePool:null,transitions:p.transitions},u.memoizedState=p,u.childLanes=e.childLanes&~r,t.memoizedState=wa,i}return u=e.child,e=u.sibling,i=pn(u,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function Sa(e,t){return t=Pi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fi(e,t,r,i){return i!==null&&Go(i),tr(t,e.child,null,r),e=Sa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mg(e,t,r,i,a,u,p){if(r)return t.flags&256?(t.flags&=-257,i=ha(Error(o(422))),fi(e,t,p,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=i.fallback,a=t.mode,i=Pi({mode:"visible",children:i.children},a,0,null),u=Rn(u,a,p,null),u.flags|=2,i.return=t,u.return=t,i.sibling=u,t.child=i,(t.mode&1)!==0&&tr(t,e.child,null,p),t.child.memoizedState=_a(p),t.memoizedState=wa,u);if((t.mode&1)===0)return fi(e,t,p,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var v=i.dgst;return i=v,u=Error(o(419)),i=ha(u,i,void 0),fi(e,t,p,i)}if(v=(p&e.childLanes)!==0,nt||v){if(i=Ne,i!==null){switch(p&-p){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|p))!==0?0:a,a!==0&&a!==u.retryLane&&(u.retryLane=a,qt(e,a),bt(i,e,a,-1))}return Va(),i=ha(Error(o(421))),fi(e,t,p,i)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Yg.bind(null,e),a._reactRetry=t,null):(e=u.treeContext,ft=tn(a.nextSibling),dt=t,we=!0,Pt=null,e!==null&&(mt[ht++]=zt,mt[ht++]=Bt,mt[ht++]=Tn,zt=e.id,Bt=e.overflow,Tn=t),t=Sa(t,i.children),t.flags|=4096,t)}function Ad(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Zo(e.return,t,r)}function xa(e,t,r,i,a){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:a}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=r,u.tailMode=a)}function Dd(e,t,r){var i=t.pendingProps,a=i.revealOrder,u=i.tail;if(Ge(e,t,i.children,r),i=xe.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ad(e,r,t);else if(e.tag===19)Ad(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(he(xe,i),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&ii(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),xa(t,!1,a,r,u);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ii(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}xa(t,!0,r,null,u);break;case"together":xa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,r=pn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=pn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Lg(e,t,r){switch(t.tag){case 3:Cd(t),er();break;case 5:Hc(t);break;case 1:tt(t.type)&&Ks(t);break;case 4:ta(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,a=t.memoizedProps.value;he(ti,i._currentValue),i._currentValue=a;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(he(xe,xe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?bd(e,t,r):(he(xe,xe.current&1),e=Ht(e,t,r),e!==null?e.sibling:null);he(xe,xe.current&1);break;case 19:if(i=(r&t.childLanes)!==0,(e.flags&128)!==0){if(i)return Dd(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),he(xe,xe.current),i)break;return null;case 22:case 23:return t.lanes=0,kd(e,t,r)}return Ht(e,t,r)}var Rd,Ta,Fd,Md;Rd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ta=function(){},Fd=function(e,t,r,i){var a=e.memoizedProps;if(a!==i){e=t.stateNode,En(Mt.current);var u=null;switch(r){case"input":a=Xi(e,a),i=Xi(e,i),u=[];break;case"select":a=U({},a,{value:void 0}),i=U({},i,{value:void 0}),u=[];break;case"textarea":a=eo(e,a),i=eo(e,i),u=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=$s)}no(r,i);var p;r=null;for(E in a)if(!i.hasOwnProperty(E)&&a.hasOwnProperty(E)&&a[E]!=null)if(E==="style"){var v=a[E];for(p in v)v.hasOwnProperty(p)&&(r||(r={}),r[p]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(c.hasOwnProperty(E)?u||(u=[]):(u=u||[]).push(E,null));for(E in i){var w=i[E];if(v=a?.[E],i.hasOwnProperty(E)&&w!==v&&(w!=null||v!=null))if(E==="style")if(v){for(p in v)!v.hasOwnProperty(p)||w&&w.hasOwnProperty(p)||(r||(r={}),r[p]="");for(p in w)w.hasOwnProperty(p)&&v[p]!==w[p]&&(r||(r={}),r[p]=w[p])}else r||(u||(u=[]),u.push(E,r)),r=w;else E==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,v=v?v.__html:void 0,w!=null&&v!==w&&(u=u||[]).push(E,w)):E==="children"?typeof w!="string"&&typeof w!="number"||(u=u||[]).push(E,""+w):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(c.hasOwnProperty(E)?(w!=null&&E==="onScroll"&&ge("scroll",e),u||v===w||(u=[])):(u=u||[]).push(E,w))}r&&(u=u||[]).push("style",r);var E=u;(t.updateQueue=E)&&(t.flags|=4)}},Md=function(e,t,r,i){r!==i&&(t.flags|=4)};function es(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function Ng(e,t,r){var i=t.pendingProps;switch(Ho(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return tt(t.type)&&Gs(),qe(t),null;case 3:return i=t.stateNode,sr(),ye(et),ye(ze),sa(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Js(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pt!==null&&(Ma(Pt),Pt=null))),Ta(e,t),qe(t),null;case 5:na(t);var a=En(Kr.current);if(r=t.type,e!==null&&t.stateNode!=null)Fd(e,t,r,i,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(o(166));return qe(t),null}if(e=En(Mt.current),Js(t)){i=t.stateNode,r=t.type;var u=t.memoizedProps;switch(i[Ft]=t,i[Wr]=u,e=(t.mode&1)!==0,r){case"dialog":ge("cancel",i),ge("close",i);break;case"iframe":case"object":case"embed":ge("load",i);break;case"video":case"audio":for(a=0;a<zr.length;a++)ge(zr[a],i);break;case"source":ge("error",i);break;case"img":case"image":case"link":ge("error",i),ge("load",i);break;case"details":ge("toggle",i);break;case"input":mu(i,u),ge("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!u.multiple},ge("invalid",i);break;case"textarea":yu(i,u),ge("invalid",i)}no(r,u),a=null;for(var p in u)if(u.hasOwnProperty(p)){var v=u[p];p==="children"?typeof v=="string"?i.textContent!==v&&(u.suppressHydrationWarning!==!0&&Hs(i.textContent,v,e),a=["children",v]):typeof v=="number"&&i.textContent!==""+v&&(u.suppressHydrationWarning!==!0&&Hs(i.textContent,v,e),a=["children",""+v]):c.hasOwnProperty(p)&&v!=null&&p==="onScroll"&&ge("scroll",i)}switch(r){case"input":xs(i),gu(i,u,!0);break;case"textarea":xs(i),wu(i);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(i.onclick=$s)}i=a,t.updateQueue=i,i!==null&&(t.flags|=4)}else{p=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_u(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=p.createElement(r,{is:i.is}):(e=p.createElement(r),r==="select"&&(p=e,i.multiple?p.multiple=!0:i.size&&(p.size=i.size))):e=p.createElementNS(e,r),e[Ft]=t,e[Wr]=i,Rd(e,t,!1,!1),t.stateNode=e;e:{switch(p=ro(r,i),r){case"dialog":ge("cancel",e),ge("close",e),a=i;break;case"iframe":case"object":case"embed":ge("load",e),a=i;break;case"video":case"audio":for(a=0;a<zr.length;a++)ge(zr[a],e);a=i;break;case"source":ge("error",e),a=i;break;case"img":case"image":case"link":ge("error",e),ge("load",e),a=i;break;case"details":ge("toggle",e),a=i;break;case"input":mu(e,i),a=Xi(e,i),ge("invalid",e);break;case"option":a=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},a=U({},i,{value:void 0}),ge("invalid",e);break;case"textarea":yu(e,i),a=eo(e,i),ge("invalid",e);break;default:a=i}no(r,a),v=a;for(u in v)if(v.hasOwnProperty(u)){var w=v[u];u==="style"?Tu(e,w):u==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&Su(e,w)):u==="children"?typeof w=="string"?(r!=="textarea"||w!=="")&&xr(e,w):typeof w=="number"&&xr(e,""+w):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?w!=null&&u==="onScroll"&&ge("scroll",e):w!=null&&O(e,u,w,p))}switch(r){case"input":xs(e),gu(e,i,!1);break;case"textarea":xs(e),wu(e);break;case"option":i.value!=null&&e.setAttribute("value",""+fe(i.value));break;case"select":e.multiple=!!i.multiple,u=i.value,u!=null?On(e,!!i.multiple,u,!1):i.defaultValue!=null&&On(e,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=$s)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)Md(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(r=En(Kr.current),En(Mt.current),Js(t)){if(i=t.stateNode,r=t.memoizedProps,i[Ft]=t,(u=i.nodeValue!==r)&&(e=dt,e!==null))switch(e.tag){case 3:Hs(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hs(i.nodeValue,r,(e.mode&1)!==0)}u&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Ft]=t,t.stateNode=i}return qe(t),null;case 13:if(ye(xe),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&ft!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Vc(),er(),t.flags|=98560,u=!1;else if(u=Js(t),i!==null&&i.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[Ft]=t}else er(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),u=!1}else Pt!==null&&(Ma(Pt),Pt=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(xe.current&1)!==0?Fe===0&&(Fe=3):Va())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return sr(),Ta(e,t),e===null&&Br(t.stateNode.containerInfo),qe(t),null;case 10:return Xo(t.type._context),qe(t),null;case 17:return tt(t.type)&&Gs(),qe(t),null;case 19:if(ye(xe),u=t.memoizedState,u===null)return qe(t),null;if(i=(t.flags&128)!==0,p=u.rendering,p===null)if(i)es(u,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(p=ii(e),p!==null){for(t.flags|=128,es(u,!1),i=p.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)u=r,e=i,u.flags&=14680066,p=u.alternate,p===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=p.childLanes,u.lanes=p.lanes,u.child=p.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=p.memoizedProps,u.memoizedState=p.memoizedState,u.updateQueue=p.updateQueue,u.type=p.type,e=p.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return he(xe,xe.current&1|2),t.child}e=e.sibling}u.tail!==null&&je()>lr&&(t.flags|=128,i=!0,es(u,!1),t.lanes=4194304)}else{if(!i)if(e=ii(p),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),es(u,!0),u.tail===null&&u.tailMode==="hidden"&&!p.alternate&&!we)return qe(t),null}else 2*je()-u.renderingStartTime>lr&&r!==1073741824&&(t.flags|=128,i=!0,es(u,!1),t.lanes=4194304);u.isBackwards?(p.sibling=t.child,t.child=p):(r=u.last,r!==null?r.sibling=p:t.child=p,u.last=p)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=je(),t.sibling=null,r=xe.current,he(xe,i?r&1|2:r&1),t):(qe(t),null);case 22:case 23:return Na(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(pt&1073741824)!==0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Vg(e,t){switch(Ho(t),t.tag){case 1:return tt(t.type)&&Gs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),ye(et),ye(ze),sa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return na(t),null;case 13:if(ye(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(xe),null;case 4:return sr(),null;case 10:return Xo(t.type._context),null;case 22:case 23:return Na(),null;case 24:return null;default:return null}}var mi=!1,We=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,B=null;function or(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){Ee(e,t,i)}else r.current=null}function ka(e,t,r){try{r()}catch(i){Ee(e,t,i)}}var Ld=!1;function Og(e,t){if(No=Ms,e=pc(),jo(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{r.nodeType,u.nodeType}catch{r=null;break e}var p=0,v=-1,w=-1,E=0,D=0,R=e,b=null;t:for(;;){for(var z;R!==r||a!==0&&R.nodeType!==3||(v=p+a),R!==u||i!==0&&R.nodeType!==3||(w=p+i),R.nodeType===3&&(p+=R.nodeValue.length),(z=R.firstChild)!==null;)b=R,R=z;for(;;){if(R===e)break t;if(b===r&&++E===a&&(v=p),b===u&&++D===i&&(w=p),(z=R.nextSibling)!==null)break;R=b,b=R.parentNode}R=z}r=v===-1||w===-1?null:{start:v,end:w}}else r=null}r=r||{start:0,end:0}}else r=null;for(Vo={focusedElem:e,selectionRange:r},Ms=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var W=q.memoizedProps,be=q.memoizedState,k=t.stateNode,S=k.getSnapshotBeforeUpdate(t.elementType===t.type?W:Et(t.type,W),be);k.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var P=t.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(F){Ee(t,t.return,F)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return q=Ld,Ld=!1,q}function ts(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&e)===e){var u=a.destroy;a.destroy=void 0,u!==void 0&&ka(t,r,u)}a=a.next}while(a!==i)}}function hi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function Pa(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Nd(e){var t=e.alternate;t!==null&&(e.alternate=null,Nd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ft],delete t[Wr],delete t[zo],delete t[Sg],delete t[xg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vd(e){return e.tag===5||e.tag===3||e.tag===4}function Id(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ea(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=$s));else if(i!==4&&(e=e.child,e!==null))for(Ea(e,t,r),e=e.sibling;e!==null;)Ea(e,t,r),e=e.sibling}function Ca(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Ca(e,t,r),e=e.sibling;e!==null;)Ca(e,t,r),e=e.sibling}var Ie=null,Ct=!1;function ln(e,t,r){for(r=r.child;r!==null;)Od(e,t,r),r=r.sibling}function Od(e,t,r){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(js,r)}catch{}switch(r.tag){case 5:We||or(r,t);case 6:var i=Ie,a=Ct;Ie=null,ln(e,t,r),Ie=i,Ct=a,Ie!==null&&(Ct?(e=Ie,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ie.removeChild(r.stateNode));break;case 18:Ie!==null&&(Ct?(e=Ie,r=r.stateNode,e.nodeType===8?Uo(e.parentNode,r):e.nodeType===1&&Uo(e,r),Fr(e)):Uo(Ie,r.stateNode));break;case 4:i=Ie,a=Ct,Ie=r.stateNode.containerInfo,Ct=!0,ln(e,t,r),Ie=i,Ct=a;break;case 0:case 11:case 14:case 15:if(!We&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var u=a,p=u.destroy;u=u.tag,p!==void 0&&((u&2)!==0||(u&4)!==0)&&ka(r,t,p),a=a.next}while(a!==i)}ln(e,t,r);break;case 1:if(!We&&(or(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(v){Ee(r,t,v)}ln(e,t,r);break;case 21:ln(e,t,r);break;case 22:r.mode&1?(We=(i=We)||r.memoizedState!==null,ln(e,t,r),We=i):ln(e,t,r);break;default:ln(e,t,r)}}function Ud(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Ig),t.forEach(function(i){var a=Gg.bind(null,e,i);r.has(i)||(r.add(i),i.then(a,a))})}}function jt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var a=r[i];try{var u=e,p=t,v=p;e:for(;v!==null;){switch(v.tag){case 5:Ie=v.stateNode,Ct=!1;break e;case 3:Ie=v.stateNode.containerInfo,Ct=!0;break e;case 4:Ie=v.stateNode.containerInfo,Ct=!0;break e}v=v.return}if(Ie===null)throw Error(o(160));Od(u,p,a),Ie=null,Ct=!1;var w=a.alternate;w!==null&&(w.return=null),a.return=null}catch(E){Ee(a,t,E)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zd(t,e),t=t.sibling}function zd(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(t,e),Nt(e),i&4){try{ts(3,e,e.return),hi(3,e)}catch(W){Ee(e,e.return,W)}try{ts(5,e,e.return)}catch(W){Ee(e,e.return,W)}}break;case 1:jt(t,e),Nt(e),i&512&&r!==null&&or(r,r.return);break;case 5:if(jt(t,e),Nt(e),i&512&&r!==null&&or(r,r.return),e.flags&32){var a=e.stateNode;try{xr(a,"")}catch(W){Ee(e,e.return,W)}}if(i&4&&(a=e.stateNode,a!=null)){var u=e.memoizedProps,p=r!==null?r.memoizedProps:u,v=e.type,w=e.updateQueue;if(e.updateQueue=null,w!==null)try{v==="input"&&u.type==="radio"&&u.name!=null&&hu(a,u),ro(v,p);var E=ro(v,u);for(p=0;p<w.length;p+=2){var D=w[p],R=w[p+1];D==="style"?Tu(a,R):D==="dangerouslySetInnerHTML"?Su(a,R):D==="children"?xr(a,R):O(a,D,R,E)}switch(v){case"input":Zi(a,u);break;case"textarea":vu(a,u);break;case"select":var b=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!u.multiple;var z=u.value;z!=null?On(a,!!u.multiple,z,!1):b!==!!u.multiple&&(u.defaultValue!=null?On(a,!!u.multiple,u.defaultValue,!0):On(a,!!u.multiple,u.multiple?[]:"",!1))}a[Wr]=u}catch(W){Ee(e,e.return,W)}}break;case 6:if(jt(t,e),Nt(e),i&4){if(e.stateNode===null)throw Error(o(162));a=e.stateNode,u=e.memoizedProps;try{a.nodeValue=u}catch(W){Ee(e,e.return,W)}}break;case 3:if(jt(t,e),Nt(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(W){Ee(e,e.return,W)}break;case 4:jt(t,e),Nt(e);break;case 13:jt(t,e),Nt(e),a=e.child,a.flags&8192&&(u=a.memoizedState!==null,a.stateNode.isHidden=u,!u||a.alternate!==null&&a.alternate.memoizedState!==null||(Aa=je())),i&4&&Ud(e);break;case 22:if(D=r!==null&&r.memoizedState!==null,e.mode&1?(We=(E=We)||D,jt(t,e),We=E):jt(t,e),Nt(e),i&8192){if(E=e.memoizedState!==null,(e.stateNode.isHidden=E)&&!D&&(e.mode&1)!==0)for(B=e,D=e.child;D!==null;){for(R=B=D;B!==null;){switch(b=B,z=b.child,b.tag){case 0:case 11:case 14:case 15:ts(4,b,b.return);break;case 1:or(b,b.return);var q=b.stateNode;if(typeof q.componentWillUnmount=="function"){i=b,r=b.return;try{t=i,q.props=t.memoizedProps,q.state=t.memoizedState,q.componentWillUnmount()}catch(W){Ee(i,r,W)}}break;case 5:or(b,b.return);break;case 22:if(b.memoizedState!==null){Wd(R);continue}}z!==null?(z.return=b,B=z):Wd(R)}D=D.sibling}e:for(D=null,R=e;;){if(R.tag===5){if(D===null){D=R;try{a=R.stateNode,E?(u=a.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(v=R.stateNode,w=R.memoizedProps.style,p=w!=null&&w.hasOwnProperty("display")?w.display:null,v.style.display=xu("display",p))}catch(W){Ee(e,e.return,W)}}}else if(R.tag===6){if(D===null)try{R.stateNode.nodeValue=E?"":R.memoizedProps}catch(W){Ee(e,e.return,W)}}else if((R.tag!==22&&R.tag!==23||R.memoizedState===null||R===e)&&R.child!==null){R.child.return=R,R=R.child;continue}if(R===e)break e;for(;R.sibling===null;){if(R.return===null||R.return===e)break e;D===R&&(D=null),R=R.return}D===R&&(D=null),R.sibling.return=R.return,R=R.sibling}}break;case 19:jt(t,e),Nt(e),i&4&&Ud(e);break;case 21:break;default:jt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Vd(r)){var i=r;break e}r=r.return}throw Error(o(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(xr(a,""),i.flags&=-33);var u=Id(e);Ca(e,u,a);break;case 3:case 4:var p=i.stateNode.containerInfo,v=Id(e);Ea(e,v,p);break;default:throw Error(o(161))}}catch(w){Ee(e,e.return,w)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ug(e,t,r){B=e,Bd(e)}function Bd(e,t,r){for(var i=(e.mode&1)!==0;B!==null;){var a=B,u=a.child;if(a.tag===22&&i){var p=a.memoizedState!==null||mi;if(!p){var v=a.alternate,w=v!==null&&v.memoizedState!==null||We;v=mi;var E=We;if(mi=p,(We=w)&&!E)for(B=a;B!==null;)p=B,w=p.child,p.tag===22&&p.memoizedState!==null?Hd(a):w!==null?(w.return=p,B=w):Hd(a);for(;u!==null;)B=u,Bd(u),u=u.sibling;B=a,mi=v,We=E}qd(e)}else(a.subtreeFlags&8772)!==0&&u!==null?(u.return=a,B=u):qd(e)}}function qd(e){for(;B!==null;){var t=B;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:We||hi(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!We)if(r===null)i.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Et(t.type,r.memoizedProps);i.componentDidUpdate(a,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&Wc(t,u,i);break;case 3:var p=t.updateQueue;if(p!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Wc(t,p,r)}break;case 5:var v=t.stateNode;if(r===null&&t.flags&4){r=v;var w=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&r.focus();break;case"img":w.src&&(r.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var E=t.alternate;if(E!==null){var D=E.memoizedState;if(D!==null){var R=D.dehydrated;R!==null&&Fr(R)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}We||t.flags&512&&Pa(t)}catch(b){Ee(t,t.return,b)}}if(t===e){B=null;break}if(r=t.sibling,r!==null){r.return=t.return,B=r;break}B=t.return}}function Wd(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var r=t.sibling;if(r!==null){r.return=t.return,B=r;break}B=t.return}}function Hd(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{hi(4,t)}catch(w){Ee(t,r,w)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var a=t.return;try{i.componentDidMount()}catch(w){Ee(t,a,w)}}var u=t.return;try{Pa(t)}catch(w){Ee(t,u,w)}break;case 5:var p=t.return;try{Pa(t)}catch(w){Ee(t,p,w)}}}catch(w){Ee(t,t.return,w)}if(t===e){B=null;break}var v=t.sibling;if(v!==null){v.return=t.return,B=v;break}B=t.return}}var zg=Math.ceil,gi=X.ReactCurrentDispatcher,ja=X.ReactCurrentOwner,vt=X.ReactCurrentBatchConfig,le=0,Ne=null,Ae=null,Oe=0,pt=0,ar=nn(0),Fe=0,ns=null,jn=0,yi=0,ba=0,rs=null,rt=null,Aa=0,lr=1/0,$t=null,vi=!1,Da=null,un=null,wi=!1,cn=null,_i=0,ss=0,Ra=null,Si=-1,xi=0;function Ke(){return(le&6)!==0?je():Si!==-1?Si:Si=je()}function dn(e){return(e.mode&1)===0?1:(le&2)!==0&&Oe!==0?Oe&-Oe:kg.transition!==null?(xi===0&&(xi=Iu()),xi):(e=pe,e!==0||(e=window.event,e=e===void 0?16:Yu(e.type)),e)}function bt(e,t,r,i){if(50<ss)throw ss=0,Ra=null,Error(o(185));jr(e,r,i),((le&2)===0||e!==Ne)&&(e===Ne&&((le&2)===0&&(yi|=r),Fe===4&&fn(e,Oe)),st(e,i),r===1&&le===0&&(t.mode&1)===0&&(lr=je()+500,Qs&&sn()))}function st(e,t){var r=e.callbackNode;kh(e,t);var i=Ds(e,e===Ne?Oe:0);if(i===0)r!==null&&Lu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&Lu(r),t===1)e.tag===0?Tg(Yd.bind(null,e)):Rc(Yd.bind(null,e)),wg(function(){(le&6)===0&&sn()}),r=null;else{switch(Ou(i)){case 1:r=co;break;case 4:r=Nu;break;case 16:r=Cs;break;case 536870912:r=Vu;break;default:r=Cs}r=tf(r,$d.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function $d(e,t){if(Si=-1,xi=0,(le&6)!==0)throw Error(o(327));var r=e.callbackNode;if(ur()&&e.callbackNode!==r)return null;var i=Ds(e,e===Ne?Oe:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Ti(e,i);else{t=i;var a=le;le|=2;var u=Kd();(Ne!==e||Oe!==t)&&($t=null,lr=je()+500,An(e,t));do try{Wg();break}catch(v){Gd(e,v)}while(!0);Qo(),gi.current=u,le=a,Ae!==null?t=0:(Ne=null,Oe=0,t=Fe)}if(t!==0){if(t===2&&(a=fo(e),a!==0&&(i=a,t=Fa(e,a))),t===1)throw r=ns,An(e,0),fn(e,i),st(e,je()),r;if(t===6)fn(e,i);else{if(a=e.current.alternate,(i&30)===0&&!Bg(a)&&(t=Ti(e,i),t===2&&(u=fo(e),u!==0&&(i=u,t=Fa(e,u))),t===1))throw r=ns,An(e,0),fn(e,i),st(e,je()),r;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(o(345));case 2:Dn(e,rt,$t);break;case 3:if(fn(e,i),(i&130023424)===i&&(t=Aa+500-je(),10<t)){if(Ds(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){Ke(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Oo(Dn.bind(null,e,rt,$t),t);break}Dn(e,rt,$t);break;case 4:if(fn(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var p=31-Tt(i);u=1<<p,p=t[p],p>a&&(a=p),i&=~u}if(i=a,i=je()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zg(i/1960))-i,10<i){e.timeoutHandle=Oo(Dn.bind(null,e,rt,$t),i);break}Dn(e,rt,$t);break;case 5:Dn(e,rt,$t);break;default:throw Error(o(329))}}}return st(e,je()),e.callbackNode===r?$d.bind(null,e):null}function Fa(e,t){var r=rs;return e.current.memoizedState.isDehydrated&&(An(e,t).flags|=256),e=Ti(e,t),e!==2&&(t=rt,rt=r,t!==null&&Ma(t)),e}function Ma(e){rt===null?rt=e:rt.push.apply(rt,e)}function Bg(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var a=r[i],u=a.getSnapshot;a=a.value;try{if(!kt(u(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~ba,t&=~yi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Tt(t),i=1<<r;e[r]=-1,t&=~i}}function Yd(e){if((le&6)!==0)throw Error(o(327));ur();var t=Ds(e,0);if((t&1)===0)return st(e,je()),null;var r=Ti(e,t);if(e.tag!==0&&r===2){var i=fo(e);i!==0&&(t=i,r=Fa(e,i))}if(r===1)throw r=ns,An(e,0),fn(e,t),st(e,je()),r;if(r===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,rt,$t),st(e,je()),null}function La(e,t){var r=le;le|=1;try{return e(t)}finally{le=r,le===0&&(lr=je()+500,Qs&&sn())}}function bn(e){cn!==null&&cn.tag===0&&(le&6)===0&&ur();var t=le;le|=1;var r=vt.transition,i=pe;try{if(vt.transition=null,pe=1,e)return e()}finally{pe=i,vt.transition=r,le=t,(le&6)===0&&sn()}}function Na(){pt=ar.current,ye(ar)}function An(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,vg(r)),Ae!==null)for(r=Ae.return;r!==null;){var i=r;switch(Ho(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Gs();break;case 3:sr(),ye(et),ye(ze),sa();break;case 5:na(i);break;case 4:sr();break;case 13:ye(xe);break;case 19:ye(xe);break;case 10:Xo(i.type._context);break;case 22:case 23:Na()}r=r.return}if(Ne=e,Ae=e=pn(e.current,null),Oe=pt=t,Fe=0,ns=null,ba=yi=jn=0,rt=rs=null,Pn!==null){for(t=0;t<Pn.length;t++)if(r=Pn[t],i=r.interleaved,i!==null){r.interleaved=null;var a=i.next,u=r.pending;if(u!==null){var p=u.next;u.next=a,i.next=p}r.pending=i}Pn=null}return e}function Gd(e,t){do{var r=Ae;try{if(Qo(),oi.current=ci,ai){for(var i=Te.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}ai=!1}if(Cn=0,Le=Re=Te=null,Qr=!1,Xr=0,ja.current=null,r===null||r.return===null){Fe=1,ns=t,Ae=null;break}e:{var u=e,p=r.return,v=r,w=t;if(t=Oe,v.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var E=w,D=v,R=D.tag;if((D.mode&1)===0&&(R===0||R===11||R===15)){var b=D.alternate;b?(D.updateQueue=b.updateQueue,D.memoizedState=b.memoizedState,D.lanes=b.lanes):(D.updateQueue=null,D.memoizedState=null)}var z=wd(p);if(z!==null){z.flags&=-257,_d(z,p,v,u,t),z.mode&1&&vd(u,E,t),t=z,w=E;var q=t.updateQueue;if(q===null){var W=new Set;W.add(w),t.updateQueue=W}else q.add(w);break e}else{if((t&1)===0){vd(u,E,t),Va();break e}w=Error(o(426))}}else if(we&&v.mode&1){var be=wd(p);if(be!==null){(be.flags&65536)===0&&(be.flags|=256),_d(be,p,v,u,t),Go(ir(w,v));break e}}u=w=ir(w,v),Fe!==4&&(Fe=2),rs===null?rs=[u]:rs.push(u),u=p;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var k=gd(u,w,t);qc(u,k);break e;case 1:v=w;var S=u.type,P=u.stateNode;if((u.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(un===null||!un.has(P)))){u.flags|=65536,t&=-t,u.lanes|=t;var F=yd(u,v,t);qc(u,F);break e}}u=u.return}while(u!==null)}Xd(r)}catch($){t=$,Ae===r&&r!==null&&(Ae=r=r.return);continue}break}while(!0)}function Kd(){var e=gi.current;return gi.current=ci,e===null?ci:e}function Va(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ne===null||(jn&268435455)===0&&(yi&268435455)===0||fn(Ne,Oe)}function Ti(e,t){var r=le;le|=2;var i=Kd();(Ne!==e||Oe!==t)&&($t=null,An(e,t));do try{qg();break}catch(a){Gd(e,a)}while(!0);if(Qo(),le=r,gi.current=i,Ae!==null)throw Error(o(261));return Ne=null,Oe=0,Fe}function qg(){for(;Ae!==null;)Qd(Ae)}function Wg(){for(;Ae!==null&&!hh();)Qd(Ae)}function Qd(e){var t=ef(e.alternate,e,pt);e.memoizedProps=e.pendingProps,t===null?Xd(e):Ae=t,ja.current=null}function Xd(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Ng(r,t,pt),r!==null){Ae=r;return}}else{if(r=Vg(r,t),r!==null){r.flags&=32767,Ae=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Ae=null;return}}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Fe===0&&(Fe=5)}function Dn(e,t,r){var i=pe,a=vt.transition;try{vt.transition=null,pe=1,Hg(e,t,r,i)}finally{vt.transition=a,pe=i}return null}function Hg(e,t,r,i){do ur();while(cn!==null);if((le&6)!==0)throw Error(o(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var u=r.lanes|r.childLanes;if(Ph(e,u),e===Ne&&(Ae=Ne=null,Oe=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||wi||(wi=!0,tf(Cs,function(){return ur(),null})),u=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||u){u=vt.transition,vt.transition=null;var p=pe;pe=1;var v=le;le|=4,ja.current=null,Og(e,r),zd(r,e),dg(Vo),Ms=!!No,Vo=No=null,e.current=r,Ug(r),gh(),le=v,pe=p,vt.transition=u}else e.current=r;if(wi&&(wi=!1,cn=e,_i=a),u=e.pendingLanes,u===0&&(un=null),wh(r.stateNode),st(e,je()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],i(a.value,{componentStack:a.stack,digest:a.digest});if(vi)throw vi=!1,e=Da,Da=null,e;return(_i&1)!==0&&e.tag!==0&&ur(),u=e.pendingLanes,(u&1)!==0?e===Ra?ss++:(ss=0,Ra=e):ss=0,sn(),null}function ur(){if(cn!==null){var e=Ou(_i),t=vt.transition,r=pe;try{if(vt.transition=null,pe=16>e?16:e,cn===null)var i=!1;else{if(e=cn,cn=null,_i=0,(le&6)!==0)throw Error(o(331));var a=le;for(le|=4,B=e.current;B!==null;){var u=B,p=u.child;if((B.flags&16)!==0){var v=u.deletions;if(v!==null){for(var w=0;w<v.length;w++){var E=v[w];for(B=E;B!==null;){var D=B;switch(D.tag){case 0:case 11:case 15:ts(8,D,u)}var R=D.child;if(R!==null)R.return=D,B=R;else for(;B!==null;){D=B;var b=D.sibling,z=D.return;if(Nd(D),D===E){B=null;break}if(b!==null){b.return=z,B=b;break}B=z}}}var q=u.alternate;if(q!==null){var W=q.child;if(W!==null){q.child=null;do{var be=W.sibling;W.sibling=null,W=be}while(W!==null)}}B=u}}if((u.subtreeFlags&2064)!==0&&p!==null)p.return=u,B=p;else e:for(;B!==null;){if(u=B,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:ts(9,u,u.return)}var k=u.sibling;if(k!==null){k.return=u.return,B=k;break e}B=u.return}}var S=e.current;for(B=S;B!==null;){p=B;var P=p.child;if((p.subtreeFlags&2064)!==0&&P!==null)P.return=p,B=P;else e:for(p=S;B!==null;){if(v=B,(v.flags&2048)!==0)try{switch(v.tag){case 0:case 11:case 15:hi(9,v)}}catch($){Ee(v,v.return,$)}if(v===p){B=null;break e}var F=v.sibling;if(F!==null){F.return=v.return,B=F;break e}B=v.return}}if(le=a,sn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(js,e)}catch{}i=!0}return i}finally{pe=r,vt.transition=t}}return!1}function Zd(e,t,r){t=ir(r,t),t=gd(e,t,1),e=an(e,t,1),t=Ke(),e!==null&&(jr(e,1,t),st(e,t))}function Ee(e,t,r){if(e.tag===3)Zd(e,e,r);else for(;t!==null;){if(t.tag===3){Zd(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(un===null||!un.has(i))){e=ir(r,e),e=yd(t,e,1),t=an(t,e,1),e=Ke(),t!==null&&(jr(t,1,e),st(t,e));break}}t=t.return}}function $g(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&r,Ne===e&&(Oe&r)===r&&(Fe===4||Fe===3&&(Oe&130023424)===Oe&&500>je()-Aa?An(e,0):ba|=r),st(e,t)}function Jd(e,t){t===0&&((e.mode&1)===0?t=1:(t=As,As<<=1,(As&130023424)===0&&(As=4194304)));var r=Ke();e=qt(e,t),e!==null&&(jr(e,t,r),st(e,r))}function Yg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Jd(e,r)}function Gg(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(o(314))}i!==null&&i.delete(t),Jd(e,r)}var ef;ef=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)nt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return nt=!1,Lg(e,t,r);nt=(e.flags&131072)!==0}else nt=!1,we&&(t.flags&1048576)!==0&&Fc(t,Zs,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;pi(e,t),e=t.pendingProps;var a=Xn(t,ze.current);rr(t,r),a=aa(null,t,i,e,a,r);var u=la();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(i)?(u=!0,Ks(t)):u=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ea(t),a.updater=di,t.stateNode=a,a._reactInternals=t,ma(t,i,e,r),t=va(null,t,i,!0,u,r)):(t.tag=0,we&&u&&Wo(t),Ge(null,t,a,r),t=t.child),t;case 16:i=t.elementType;e:{switch(pi(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Qg(i),e=Et(i,e),a){case 0:t=ya(null,t,i,e,r);break e;case 1:t=Ed(null,t,i,e,r);break e;case 11:t=Sd(null,t,i,e,r);break e;case 14:t=xd(null,t,i,Et(i.type,e),r);break e}throw Error(o(306,i,""))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Et(i,a),ya(e,t,i,a,r);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Et(i,a),Ed(e,t,i,a,r);case 3:e:{if(Cd(t),e===null)throw Error(o(387));i=t.pendingProps,u=t.memoizedState,a=u.element,Bc(e,t),si(t,i,null,r);var p=t.memoizedState;if(i=p.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){a=ir(Error(o(423)),t),t=jd(e,t,i,r,a);break e}else if(i!==a){a=ir(Error(o(424)),t),t=jd(e,t,i,r,a);break e}else for(ft=tn(t.stateNode.containerInfo.firstChild),dt=t,we=!0,Pt=null,r=Uc(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(er(),i===a){t=Ht(e,t,r);break e}Ge(e,t,i,r)}t=t.child}return t;case 5:return Hc(t),e===null&&Yo(t),i=t.type,a=t.pendingProps,u=e!==null?e.memoizedProps:null,p=a.children,Io(i,a)?p=null:u!==null&&Io(i,u)&&(t.flags|=32),Pd(e,t),Ge(e,t,p,r),t.child;case 6:return e===null&&Yo(t),null;case 13:return bd(e,t,r);case 4:return ta(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=tr(t,null,i,r):Ge(e,t,i,r),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Et(i,a),Sd(e,t,i,a,r);case 7:return Ge(e,t,t.pendingProps,r),t.child;case 8:return Ge(e,t,t.pendingProps.children,r),t.child;case 12:return Ge(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,a=t.pendingProps,u=t.memoizedProps,p=a.value,he(ti,i._currentValue),i._currentValue=p,u!==null)if(kt(u.value,p)){if(u.children===a.children&&!et.current){t=Ht(e,t,r);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var v=u.dependencies;if(v!==null){p=u.child;for(var w=v.firstContext;w!==null;){if(w.context===i){if(u.tag===1){w=Wt(-1,r&-r),w.tag=2;var E=u.updateQueue;if(E!==null){E=E.shared;var D=E.pending;D===null?w.next=w:(w.next=D.next,D.next=w),E.pending=w}}u.lanes|=r,w=u.alternate,w!==null&&(w.lanes|=r),Zo(u.return,r,t),v.lanes|=r;break}w=w.next}}else if(u.tag===10)p=u.type===t.type?null:u.child;else if(u.tag===18){if(p=u.return,p===null)throw Error(o(341));p.lanes|=r,v=p.alternate,v!==null&&(v.lanes|=r),Zo(p,r,t),p=u.sibling}else p=u.child;if(p!==null)p.return=u;else for(p=u;p!==null;){if(p===t){p=null;break}if(u=p.sibling,u!==null){u.return=p.return,p=u;break}p=p.return}u=p}Ge(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,rr(t,r),a=gt(a),i=i(a),t.flags|=1,Ge(e,t,i,r),t.child;case 14:return i=t.type,a=Et(i,t.pendingProps),a=Et(i.type,a),xd(e,t,i,a,r);case 15:return Td(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:Et(i,a),pi(e,t),t.tag=1,tt(i)?(e=!0,Ks(t)):e=!1,rr(t,r),md(t,i,a),ma(t,i,a,r),va(null,t,i,!0,e,r);case 19:return Dd(e,t,r);case 22:return kd(e,t,r)}throw Error(o(156,t.tag))};function tf(e,t){return Mu(e,t)}function Kg(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,r,i){return new Kg(e,t,r,i)}function Ia(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qg(e){if(typeof e=="function")return Ia(e)?1:0;if(e!=null){if(e=e.$$typeof,e===at)return 11;if(e===lt)return 14}return 2}function pn(e,t){var r=e.alternate;return r===null?(r=wt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ki(e,t,r,i,a,u){var p=2;if(i=e,typeof e=="function")Ia(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case ae:return Rn(r.children,a,u,t);case Z:p=8,a|=8;break;case Se:return e=wt(12,r,t,a|2),e.elementType=Se,e.lanes=u,e;case $e:return e=wt(13,r,t,a),e.elementType=$e,e.lanes=u,e;case Je:return e=wt(19,r,t,a),e.elementType=Je,e.lanes=u,e;case re:return Pi(r,a,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pe:p=10;break e;case Ze:p=9;break e;case at:p=11;break e;case lt:p=14;break e;case Ye:p=16,i=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=wt(p,r,t,a),t.elementType=e,t.type=i,t.lanes=u,t}function Rn(e,t,r,i){return e=wt(7,e,i,t),e.lanes=r,e}function Pi(e,t,r,i){return e=wt(22,e,i,t),e.elementType=re,e.lanes=r,e.stateNode={isHidden:!1},e}function Oa(e,t,r){return e=wt(6,e,null,t),e.lanes=r,e}function Ua(e,t,r){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xg(e,t,r,i,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=po(0),this.expirationTimes=po(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=po(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function za(e,t,r,i,a,u,p,v,w){return e=new Xg(e,t,r,v,w),t===1?(t=1,u===!0&&(t|=8)):t=0,u=wt(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ea(u),e}function Zg(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ne,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function nf(e){if(!e)return rn;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var r=e.type;if(tt(r))return Ac(e,r,t)}return t}function rf(e,t,r,i,a,u,p,v,w){return e=za(r,i,!0,e,a,u,p,v,w),e.context=nf(null),r=e.current,i=Ke(),a=dn(r),u=Wt(i,a),u.callback=t??null,an(r,u,a),e.current.lanes=a,jr(e,a,i),st(e,i),e}function Ei(e,t,r,i){var a=t.current,u=Ke(),p=dn(a);return r=nf(r),t.context===null?t.context=r:t.pendingContext=r,t=Wt(u,p),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=an(a,t,p),e!==null&&(bt(e,a,p,u),ri(e,a,p)),p}function Ci(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ba(e,t){sf(e,t),(e=e.alternate)&&sf(e,t)}function Jg(){return null}var of=typeof reportError=="function"?reportError:function(e){console.error(e)};function qa(e){this._internalRoot=e}ji.prototype.render=qa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Ei(e,t,null,null)},ji.prototype.unmount=qa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){Ei(null,e,null,null)}),t[Ot]=null}};function ji(e){this._internalRoot=e}ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Zt.length&&t!==0&&t<Zt[r].priority;r++);Zt.splice(r,0,e),r===0&&Hu(e)}};function Wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function af(){}function ey(e,t,r,i,a){if(a){if(typeof i=="function"){var u=i;i=function(){var E=Ci(p);u.call(E)}}var p=rf(t,i,e,0,null,!1,!1,"",af);return e._reactRootContainer=p,e[Ot]=p.current,Br(e.nodeType===8?e.parentNode:e),bn(),p}for(;a=e.lastChild;)e.removeChild(a);if(typeof i=="function"){var v=i;i=function(){var E=Ci(w);v.call(E)}}var w=za(e,0,!1,null,null,!1,!1,"",af);return e._reactRootContainer=w,e[Ot]=w.current,Br(e.nodeType===8?e.parentNode:e),bn(function(){Ei(t,w,r,i)}),w}function Ai(e,t,r,i,a){var u=r._reactRootContainer;if(u){var p=u;if(typeof a=="function"){var v=a;a=function(){var w=Ci(p);v.call(w)}}Ei(t,p,e,a)}else p=ey(r,t,e,a,i);return Ci(p)}Uu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Cr(t.pendingLanes);r!==0&&(mo(t,r|1),st(t,je()),(le&6)===0&&(lr=je()+500,sn()))}break;case 13:bn(function(){var i=qt(e,1);if(i!==null){var a=Ke();bt(i,e,1,a)}}),Ba(e,1)}},ho=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var r=Ke();bt(t,e,134217728,r)}Ba(e,134217728)}},zu=function(e){if(e.tag===13){var t=dn(e),r=qt(e,t);if(r!==null){var i=Ke();bt(r,e,t,i)}Ba(e,t)}},Bu=function(){return pe},qu=function(e,t){var r=pe;try{return pe=e,t()}finally{pe=r}},oo=function(e,t,r){switch(t){case"input":if(Zi(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var a=Ys(i);if(!a)throw Error(o(90));pu(i),Zi(i,a)}}}break;case"textarea":vu(e,r);break;case"select":t=r.value,t!=null&&On(e,!!r.multiple,t,!1)}},Cu=La,ju=bn;var ty={usingClientEntryPoint:!1,Events:[Hr,Kn,Ys,Pu,Eu,La]},is={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ny={bundleType:is.bundleType,version:is.version,rendererPackageName:is.rendererPackageName,rendererConfig:is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:X.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ru(e),e===null?null:e.stateNode},findFiberByHostInstance:is.findFiberByHostInstance||Jg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Di=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Di.isDisabled&&Di.supportsFiber)try{js=Di.inject(ny),Rt=Di}catch{}}return it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ty,it.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wa(t))throw Error(o(200));return Zg(e,t,null,r)},it.createRoot=function(e,t){if(!Wa(e))throw Error(o(299));var r=!1,i="",a=of;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=za(e,1,!1,null,null,r,!1,i,a),e[Ot]=t.current,Br(e.nodeType===8?e.parentNode:e),new qa(t)},it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Ru(t),e=e===null?null:e.stateNode,e},it.flushSync=function(e){return bn(e)},it.hydrate=function(e,t,r){if(!bi(t))throw Error(o(200));return Ai(null,e,t,!0,r)},it.hydrateRoot=function(e,t,r){if(!Wa(e))throw Error(o(405));var i=r!=null&&r.hydratedSources||null,a=!1,u="",p=of;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),t=rf(t,null,e,1,r??null,a,!1,u,p),e[Ot]=t.current,Br(e),i)for(e=0;e<i.length;e++)r=i[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new ji(t)},it.render=function(e,t,r){if(!bi(t))throw Error(o(200));return Ai(null,e,t,!1,r)},it.unmountComponentAtNode=function(e){if(!bi(e))throw Error(o(40));return e._reactRootContainer?(bn(function(){Ai(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1},it.unstable_batchedUpdates=La,it.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!bi(r))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Ai(e,t,r,!1,i)},it.version="18.3.1-next-f1338f8080-20240426",it}var hf;function cy(){if(hf)return Ya.exports;hf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(s){console.error(s)}}return n(),Ya.exports=uy(),Ya.exports}var gf;function dy(){if(gf)return Ri;gf=1;var n=cy();return Ri.createRoot=n.createRoot,Ri.hydrateRoot=n.hydrateRoot,Ri}var fy=dy(),J=Ll();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),my=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,o,l)=>l?l.toUpperCase():o.toLowerCase()),yf=n=>{const s=my(n);return s.charAt(0).toUpperCase()+s.slice(1)},bp=(...n)=>n.filter((s,o,l)=>!!s&&s.trim()!==""&&l.indexOf(s)===o).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=J.forwardRef(({color:n="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:c="",children:f,iconNode:d,...m},h)=>J.createElement("svg",{ref:h,...hy,width:s,height:s,stroke:n,strokeWidth:l?Number(o)*24/Number(s):o,className:bp("lucide",c),...m},[...d.map(([y,g])=>J.createElement(y,g)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=(n,s)=>{const o=J.forwardRef(({className:l,...c},f)=>J.createElement(gy,{ref:f,iconNode:s,className:bp(`lucide-${py(yf(n))}`,`lucide-${n}`,l),...c}));return o.displayName=yf(n),o};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],vy=Xe("book-open",yy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],_y=Xe("check",wy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],hn=Xe("code",Sy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Ty=Xe("copy",xy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Py=Xe("database",ky);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Cy=Xe("globe",Ey);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],by=Xe("lightbulb",jy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Dy=Xe("moon",Ay);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],fl=Xe("rocket",Ry);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Qa=Xe("shield",Fy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Ly=Xe("sparkles",My);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Vy=Xe("star",Ny);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Oy=Xe("sun",Iy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],zy=Xe("wrench",Uy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ni=Xe("zap",By);function qy({currentTopic:n,setCurrentTopic:s,darkMode:o}){const l=[{id:"1",name:"Introduction to Django",icon:vy,emoji:"🎯"},{id:"2",name:"Environment Setup",icon:zy,emoji:"🛠️"},{id:"3",name:"Project & App Structure",icon:hn,emoji:"📁"},{id:"4",name:"URL Configuration & Views",icon:Cy,emoji:"🌐"},{id:"5",name:"Django Templates",icon:hn,emoji:"🎨"},{id:"6",name:"Models & ORM",icon:Py,emoji:"💾"},{id:"7",name:"Admin Panel",icon:Qa,emoji:"👑"},{id:"8",name:"Django Forms",icon:hn,emoji:"📝"},{id:"9",name:"Authentication",icon:Qa,emoji:"🔐"},{id:"10",name:"Sessions & Messages",icon:Ni,emoji:"💬"},{id:"11",name:"File & Image Handling",icon:hn,emoji:"📷"},{id:"12",name:"Class Based Views",icon:hn,emoji:"🏗️"},{id:"13",name:"Middleware",icon:Ni,emoji:"⚙️"},{id:"14",name:"Signals",icon:Ni,emoji:"📡"},{id:"15",name:"Django REST Framework",icon:fl,emoji:"🚀"},{id:"16",name:"Security",icon:Qa,emoji:"🛡️"},{id:"17",name:"Testing & Debugging",icon:hn,emoji:"🐛"},{id:"18",name:"Deployment",icon:fl,emoji:"🌍"},{id:"19",name:"Practice Projects",icon:hn,emoji:"🎮"}];return C.jsx("aside",{className:`w-80 ${o?"bg-gray-800 border-gray-700":"bg-white border-gray-200"} border-r overflow-y-auto`,children:C.jsxs("div",{className:"p-6",children:[C.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[C.jsx("div",{className:"text-4xl",children:"🐍"}),C.jsxs("div",{children:[C.jsx("h1",{className:`text-xl ${o?"text-white":"text-gray-900"}`,children:"Django Academy"}),C.jsx("p",{className:`text-sm ${o?"text-gray-400":"text-gray-600"}`,children:"For Young Coders!"})]})]}),C.jsx("nav",{className:"space-y-1",children:l.map(c=>C.jsxs("button",{onClick:()=>s(c.id),className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${n===c.id?o?"bg-green-600 text-white shadow-lg shadow-green-600/50":"bg-green-500 text-white shadow-lg":o?"text-gray-300 hover:bg-gray-700":"text-gray-700 hover:bg-gray-100"}`,children:[C.jsx("span",{className:"text-xl",children:c.emoji}),C.jsx("span",{className:"text-sm flex-1 text-left",children:c.name})]},c.id))})]})})}function Wy({darkMode:n,setDarkMode:s}){return C.jsx("header",{className:`${n?"bg-gray-800 border-gray-700":"bg-white border-gray-200"} border-b px-8 py-4`,children:C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("div",{children:[C.jsx("h2",{className:`text-2xl ${n?"text-white":"text-gray-900"}`,children:"Learn Django - The Fun Way! 🎉"}),C.jsx("p",{className:`text-sm ${n?"text-gray-400":"text-gray-600"}`,children:"Build amazing websites like a pro!"})]}),C.jsx("button",{onClick:()=>s(!n),className:`p-3 rounded-full transition-all duration-300 ${n?"bg-gray-700 text-yellow-400 hover:bg-gray-600":"bg-gray-200 text-gray-800 hover:bg-gray-300"}`,children:n?C.jsx(Oy,{size:24}):C.jsx(Dy,{size:24})})]})})}const Hy={1:{title:"Introduction to Django",subtitle:"Meet your new best friend for building websites!",emoji:"🎯",realWorldExample:"Think of Django like LEGO blocks for websites! Just like you use LEGO to build amazing castles and spaceships, Django helps programmers build cool websites like Instagram, YouTube, and Pinterest! 🏰🚀",quickTip:"Django is written in Python - a language that reads almost like English! If you can read, you can learn Django! 🐍",sections:[{heading:"🤔 What is Django?",content:"Django is a free and super powerful tool that helps people build websites really fast! It's like a magical toolbox full of ready-made pieces that work together perfectly.",points:["Created by awesome developers who wanted to make web development easier","Used by big companies like Instagram, Spotify, and NASA!","It's completely FREE and anyone can use it","Has a huge community of friendly developers ready to help"]},{heading:"🌟 Why Django is Awesome!",content:"Imagine you want to build a treehouse. You could cut down trees, make planks, and build everything from scratch... OR you could use a kit with pre-made walls, floors, and a roof! Django is like that kit but for websites!",points:["⚡ Super Fast: Build websites in days, not months!","🔒 Extra Safe: Django protects your website from bad guys automatically","📦 Batteries Included: Comes with everything you need built-in","🌍 Works Everywhere: From small blogs to giant social networks","🎓 Easy to Learn: Perfect for beginners and loved by experts"]},{heading:"🎁 Django Features (Cool Stuff Inside!)",content:"Django comes with so many helpful features, it's like getting a Swiss Army knife for coding!",points:["🎨 Admin Panel: A ready-made control center for your website","🔐 User Accounts: Login, logout, and password features built-in","💾 Database Magic: Store information without learning complicated database stuff","🛡️ Security Shield: Keeps hackers away automatically","📱 URL Routing: Helps people navigate your website smoothly","🖼️ Template System: Make beautiful pages easily"]},{heading:"🏗️ MVT Architecture (How Django Thinks)",content:"Django organizes websites using a pattern called MVT. Think of it like organizing your bedroom into three zones:",points:["📊 M = Models (The Toy Box): Where you keep all your data stored neatly","👀 V = Views (The Play Area): Where the action happens - this is your brain!","🎨 T = Templates (The Decorations): How everything looks on your walls"],code:`# Think of MVT like making a sandwich!

# MODEL (Ingredients) 🥪
class Sandwich:
    bread = "Wheat"
    cheese = "Cheddar"
    veggies = ["Lettuce", "Tomato"]

# VIEW (Recipe/Instructions) 👨‍🍳
def make_sandwich(request):
    ingredients = Sandwich()
    return show_sandwich(ingredients)

# TEMPLATE (How it looks on the plate) 🍽️
# Shows the beautiful sandwich to eat!`,language:"python",note:"Every Django website uses this MVT pattern. Once you understand it, you can build ANYTHING!"},{heading:"🆚 Django vs Other Frameworks",content:"How does Django compare to other website-building tools?",points:["🐍 Django (Python): Like a complete LEGO set with instructions - everything included!","🟢 Node.js/Express: Like loose LEGO bricks - more freedom but you build more yourself","💎 Ruby on Rails: Django's cousin - similar but uses Ruby language instead","⚛️ React/Vue: These are just for the front (what you see), Django does everything!"],note:"Django is perfect for beginners because it makes decisions for you, so you can focus on being creative! 🎨"}],challenge:'Name 3 famous websites that use Django. (Hint: One rhymes with "Insta-jam"! 📸)'},2:{title:"Environment Setup",subtitle:"Let's prepare your coding playground!",emoji:"🛠️",realWorldExample:"Setting up Django is like preparing your art studio before painting. You need your easel (computer), paints (Python), brushes (Django), and a canvas (project folder). Once everything is ready, you can create masterpieces! 🎨",quickTip:"Always use a virtual environment - it's like having a separate backpack for each project so things don't get mixed up! 🎒",sections:[{heading:"1️⃣ Installing Python",content:"Before Django, we need Python! Python is the language Django speaks.",points:["Visit python.org and download Python (version 3.8 or newer)",'During installation, CHECK the box that says "Add Python to PATH"',"This is super important - like telling your computer where Python lives!"],code:`# After installing, test if Python works:
# Open Terminal (Mac/Linux) or Command Prompt (Windows)

python --version
# Should show: Python 3.x.x

# or try:
python3 --version`,language:"bash"},{heading:"2️⃣ Creating a Virtual Environment",content:"A virtual environment is like a bubble for your project - it keeps all your tools separate and organized!",code:`# Step 1: Create a new folder for your project
mkdir my_awesome_project
cd my_awesome_project

# Step 2: Create a virtual environment named 'venv'
python -m venv venv

# What just happened? 🤔
# Python created a special folder with its own copy of tools!`,language:"bash",note:'The first "venv" is the command, the second "venv" is the name. You can name it anything like "myenv" or "django_env"!'},{heading:"3️⃣ Activating Your Virtual Environment",content:`Now we need to "turn on" our virtual environment. It's like flipping a light switch! 💡`,code:`# On Windows:
venv\\Scripts\\activate

# On Mac/Linux:
source venv/bin/activate

# You'll see (venv) appear at the start of your command line
# That means it's working! 🎉

# Like this:
# (venv) C:\\Users\\YourName\\my_awesome_project>`,language:"bash",note:"If you see (venv) at the beginning of your terminal, you're inside the bubble! If not, activation didn't work."},{heading:"4️⃣ Installing Django",content:"Now for the exciting part - let's install Django! This is like downloading a video game! 🎮",code:`# Make sure your virtual environment is activated first!
# You should see (venv) in your terminal

pip install django

# Wait a few seconds... Django is downloading!

# Check if Django installed correctly:
django-admin --version

# Should show something like: 5.0.0`,language:"bash",note:`"pip" is Python's app store! It downloads and installs Python tools for you automatically.`},{heading:"5️⃣ Creating Your First Django Project",content:"Time to create your very first Django project! This is like creating a new Minecraft world! 🌍",code:`# Create a new Django project named 'mysite'
django-admin startproject mysite

# This creates a folder called 'mysite' with magic files inside!

# Go inside your new project:
cd mysite

# Look at what's inside:
# On Windows: dir
# On Mac/Linux: ls`,language:"bash"},{heading:"6️⃣ Running the Development Server",content:"Let's start your website and see it in action! This is the moment you've been waiting for! 🚀",code:`# Make sure you're in the mysite folder
# (The one with manage.py inside)

python manage.py runserver

# You should see:
# Starting development server at http://127.0.0.1:8000/
# Quit the server with CTRL-BREAK (Windows) or CONTROL-C (Mac/Linux)`,language:"bash",note:"Open your web browser and go to http://127.0.0.1:8000/ - You should see a Django welcome page with a rocket! 🚀"},{heading:"7️⃣ Django Project Structure",content:"Let's explore the files Django created for you! Each file has a special job:",points:["📁 mysite/ (outer folder): Your project's home - everything lives here","🐍 manage.py: Your magic wand! Use this to control Django","📁 mysite/ (inner folder): Your project's brain - important settings","⚙️ settings.py: All the settings and configurations","🌐 urls.py: The map of your website (where pages live)","🚀 wsgi.py & asgi.py: Help launch your website to the world","💾 db.sqlite3: Your database (appears after first run)"],code:`mysite/                   # Your project folder
├── manage.py            # Django's control panel
├── mysite/              # Project configuration
│   ├── __init__.py      # Makes this a Python package
│   ├── settings.py      # All project settings
│   ├── urls.py          # URL routes (like a map)
│   ├── asgi.py          # For advanced deployment
│   └── wsgi.py          # For advanced deployment
└── db.sqlite3           # Your database`,language:"text"}],challenge:"Can you start your Django server and find the rocket? 🚀 Take a screenshot and show someone!"},3:{title:"Django Project & App Structure",subtitle:"Understanding how Django organizes everything!",emoji:"📁",realWorldExample:"Think of a Django project like a school 🏫. The school (project) has many classrooms (apps). Each classroom teaches something different - math, science, art. Similarly, a Django project has different apps for different features like users, blog posts, or shopping cart! 📚",quickTip:"One project, many apps! Keep each app focused on one thing - just like each classroom focuses on one subject! 🎯",sections:[{heading:"🏫 Project vs App - What's the Difference?",content:"This is super important to understand! Let's break it down:",points:["🏢 PROJECT = The entire website (like YouTube itself)","📦 APP = One feature of the website (like Comments, Videos, Users)","One project can have MANY apps working together","Apps are reusable - you can use them in different projects!","Think: Project = Pizza, Apps = Toppings! 🍕"],code:`# Real Example: Instagram
instagram_project/              # The whole Instagram
├── users/                      # App for user profiles
├── photos/                     # App for photo uploads
├── messages/                   # App for direct messages
├── stories/                    # App for stories
└── likes/                      # App for likes & comments

# Each app does ONE thing really well!`,language:"text"},{heading:"🎨 Creating Your First App",content:"Let's create an app! Remember: make sure your server is stopped first (Press Ctrl+C)",code:`# Stop the server first (Ctrl+C)
# Make sure you're in the project folder (where manage.py is)

python manage.py startapp blog

# This creates a new folder called 'blog' with files inside!

# Now let's see what it created:`,language:"bash"},{heading:"📂 Understanding App Structure",content:"Django created several files in your app folder. Let's learn what each one does!",points:["📄 __init__.py: Tells Python this is a package (leave it empty)","🎮 admin.py: Controls your admin panel (like a control room)","📱 apps.py: App configuration (settings for this app)","💾 models.py: Database tables (where you store data)","🧪 tests.py: For testing your code (make sure it works)","👁️ views.py: The brain - handles requests and responses","📁 migrations/: Tracks database changes (auto-generated)"],code:`blog/                        # Your new app!
├── __init__.py             # Makes it a Python package
├── admin.py                # Register models for admin panel
├── apps.py                 # App configuration
├── models.py               # Database models (tables)
├── tests.py                # Write tests here
├── views.py                # Your functions/logic
└── migrations/             # Database history
    └── __init__.py`,language:"text"},{heading:"🔧 Understanding settings.py",content:"The settings.py file is like your project's control panel! Let's look at important parts:",code:`# File: mysite/settings.py

# Super secret key - keeps your site safe! 🔐
SECRET_KEY = 'django-insecure-xyz123...'

# Is this in testing mode? (True) or live on internet? (False)
DEBUG = True  # Shows detailed errors - helpful for learning!

# Who can visit your site?
ALLOWED_HOSTS = []  # Empty = only you on your computer

# All the apps in your project (built-in + yours)
INSTALLED_APPS = [
    'django.contrib.admin',      # Admin panel
    'django.contrib.auth',       # User accounts
    'django.contrib.contenttypes',
    'django.contrib.sessions',   # Remember logged in users
    'django.contrib.messages',   # Flash messages
    'django.contrib.staticfiles', # CSS, JavaScript, images
    # Your apps go here! 👇
    'blog',  # Add your app!
]

# Database settings
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',  # Database file
    }
}

# Language and timezone
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'  # Can change to 'America/New_York', etc.`,language:"python",note:"After creating an app, you MUST add it to INSTALLED_APPS in settings.py! Otherwise Django won't know it exists! 🎯"},{heading:"🗺️ Understanding urls.py",content:"The urls.py file is like a map of your website! It tells Django which page to show for each URL.",code:`# File: mysite/urls.py

from django.contrib import admin
from django.urls import path

# URL patterns - like a map 🗺️
urlpatterns = [
    # When someone visits /admin/, show the admin page
    path('admin/', admin.site.urls),
    
    # We'll add more paths here later!
    # path('blog/', include('blog.urls')),  # Blog pages
    # path('about/', about_view),            # About page
]

# How it works:
# User types: yoursite.com/admin/
# Django looks at urls.py
# Finds matching path
# Shows the right page! 🎉`,language:"python"},{heading:"👁️ Understanding views.py",content:"Views are functions that handle what happens when someone visits a page. They're like the chef in a restaurant! 👨‍🍳",code:`# File: blog/views.py

from django.http import HttpResponse

# A simple view - like a recipe!
def home(request):
    # Someone asked for the home page
    # Let's give them something back!
    return HttpResponse("Hello! Welcome to my blog! 🎉")

# 'request' = what the visitor asked for
# 'HttpResponse' = your answer back to them

def about(request):
    return HttpResponse("This is the about page! 📝")

# Each view is like a different recipe
# Different page = different view function`,language:"python",note:"Views are the brain of your app! They decide what to show to visitors. 🧠"},{heading:"💾 Understanding models.py",content:"Models define your database tables. Think of them like Excel spreadsheets! 📊",code:`# File: blog/models.py

from django.db import models

# A model for blog posts
class Post(models.Model):
    title = models.CharField(max_length=200)  # Post title
    content = models.TextField()              # Post content
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title  # Shows title in admin

# This creates a table with columns:
# - id (automatic)
# - title (text, max 200 characters)
# - content (long text)
# - created_at (date and time)`,language:"python"},{heading:"🎛️ Understanding admin.py",content:"The admin.py file lets you control your models from Django's built-in admin panel! It's like a control room! 🎮",code:`# File: blog/admin.py

from django.contrib import admin
from .models import Post

# Register your model to see it in admin panel
admin.site.register(Post)

# Now you can:
# - Add new blog posts
# - Edit existing posts  
# - Delete posts
# All from a beautiful interface! 🎨`,language:"python",note:"The admin panel is one of Django's superpowers! Most other frameworks make you build this yourself! 💪"},{heading:"⚙️ App Configuration (apps.py)",content:"Each app has a configuration file. Usually you don't need to change it, but it's good to know!",code:`# File: blog/apps.py

from django.apps import AppConfig

class BlogConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'blog'  # App name
    verbose_name = 'My Awesome Blog'  # Friendly name in admin
    
# This file helps Django understand your app's settings`,language:"python"}],challenge:'Create an app called "portfolio" that could show your artwork or projects! What models would you need? 🎨'},4:{title:"URL Configuration & Views",subtitle:"Building the roads and destinations of your website!",emoji:"🌐",realWorldExample:`URLs are like street addresses 🏠 and views are like the houses at those addresses! When you type "www.youtube.com/watch", the URL leads you to a view (function) that shows you a video. It's like following a map to find treasure! 🗺️💎`,quickTip:"Think: URL = Address, View = What happens when you visit that address! 🎯",sections:[{heading:"🚦 What is URL Routing?",content:'URL routing is like being a traffic controller! You tell Django: "When someone visits THIS address, show them THAT page"',points:["User types a URL in their browser","Django checks its urls.py file (the map)","Finds the matching pattern","Calls the right view function","View sends back a page to show!"],code:`# Think of it like a pizza delivery!

# 1. Customer calls: "123 Main Street" (URL)
# 2. You check your map (urls.py)
# 3. Find the address
# 4. Send the driver (view) with pizza (response)
# 5. Customer gets pizza! 🍕

# Same with websites:
www.mysite.com/home  →  calls home_view()  →  shows home page`,language:"text"},{heading:"🛤️ Creating URL Patterns with path()",content:"The path() function is how we create URL routes. Let's learn how to use it!",code:`# File: mysite/urls.py

from django.contrib import admin
from django.urls import path
from blog import views  # Import views from blog app

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home),              # Home page (empty = root)
    path('about/', views.about),       # About page
    path('contact/', views.contact),   # Contact page
]

# How path() works:
# path('URL-pattern/', function_to_call, name='optional_name')

# Examples:
# User visits: yoursite.com/        → calls views.home
# User visits: yoursite.com/about/  → calls views.about`,language:"python",note:"Always end your URL patterns with a slash (/) - it's a Django best practice! 🎯"},{heading:"📦 Using include() for App URLs",content:"include() helps you organize URLs by app. Instead of putting all URLs in one file, each app gets its own!",code:`# File: mysite/urls.py (main URLs)

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blog/', include('blog.urls')),  # All blog URLs
    path('shop/', include('shop.urls')),  # All shop URLs
]

# Now create a urls.py file inside your blog app:
# File: blog/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.blog_home),           # blog/
    path('post/<int:id>/', views.post),  # blog/post/1/
    path('about/', views.blog_about),    # blog/about/
]

# This keeps things organized! Each app controls its own URLs! 🗂️`,language:"python"},{heading:"👨‍💻 Function Based Views (FBV)",content:"Function Based Views are Python functions that handle web requests. They're the easiest to learn!",code:`# File: blog/views.py

from django.http import HttpResponse

# A simple view function
def home(request):
    """
    This function runs when someone visits the home page
    'request' contains info about the visitor
    """
    return HttpResponse("Welcome to my website! 🏠")

# View with HTML
def about(request):
    html = """
    <html>
        <head><title>About Me</title></head>
        <body>
            <h1>About Me! 😊</h1>
            <p>I love coding with Django!</p>
        </body>
    </html>
    """
    return HttpResponse(html)

# Every view must:
# 1. Take 'request' as first parameter
# 2. Return an HttpResponse (or similar)`,language:"python",note:'The "request" parameter contains everything about the visitor - what they clicked, their browser, and more! 🔍'},{heading:"📄 Using render() for Templates",content:"render() is a shortcut to show HTML templates. It's much better than writing HTML in views!",code:`# File: blog/views.py

from django.shortcuts import render

def home(request):
    # render(request, 'template_name.html', context_dictionary)
    context = {
        'title': 'Home Page',
        'message': 'Welcome to my awesome blog!',
        'user_name': 'Cool Coder',
    }
    return render(request, 'home.html', context)

# Create: blog/templates/home.html
"""
<html>
    <head><title>{{ title }}</title></head>
    <body>
        <h1>{{ message }}</h1>
        <p>Hello, {{ user_name }}! 👋</p>
    </body>
</html>
"""

# The context dictionary passes data to the template!
# {{ variable }} in template gets replaced with actual values`,language:"python"},{heading:"🔀 Redirects - Sending Users to Different Pages",content:"Sometimes you want to send visitors to a different page. That's called a redirect!",code:`# File: blog/views.py

from django.shortcuts import redirect

def old_page(request):
    # Redirect to new page!
    return redirect('/new-page/')

def after_login(request):
    # Redirect to home after someone logs in
    return redirect('home')  # Using URL name

# Another way - using reverse:
from django.urls import reverse

def profile_redirect(request):
    url = reverse('user-profile', args=[123])  # Build URL
    return redirect(url)

# Common redirect scenarios:
# - After form submission → redirect to success page
# - After login → redirect to dashboard  
# - Old URL → redirect to new URL`,language:"python",note:'Redirects are like signs that say "Go this way instead!" 👉 They help guide your users!'},{heading:"🔢 URL Parameters - Dynamic URLs",content:"URL parameters let you capture values from the URL. Like having variables in your addresses!",code:`# File: blog/urls.py

from django.urls import path
from . import views

urlpatterns = [
    # Capture a number (post ID)
    path('post/<int:post_id>/', views.post_detail),
    
    # Capture text (username)
    path('user/<str:username>/', views.user_profile),
    
    # Capture any slug (URL-friendly text)
    path('article/<slug:slug>/', views.article),
]

# File: blog/views.py

def post_detail(request, post_id):
    # post_id comes from URL!
    return HttpResponse(f"You're viewing post #{post_id}")

def user_profile(request, username):
    return HttpResponse(f"Profile of {username}")

# URL Types:
# <int:name> = numbers only (1, 2, 100)
# <str:name> = any text
# <slug:name> = letters, numbers, hyphens, underscores`,language:"python"},{heading:"❌ Handling 404 & 500 Errors",content:"404 = Page not found. 500 = Server error. Let's create custom error pages!",code:`# File: blog/views.py

from django.shortcuts import render

def custom_404(request, exception):
    """Shows when page doesn't exist"""
    return render(request, '404.html', status=404)

def custom_500(request):
    """Shows when server has problems"""
    return render(request, '500.html', status=500)

# File: mysite/urls.py
# Add these at the bottom:

handler404 = 'blog.views.custom_404'
handler500 = 'blog.views.custom_500'

# Create templates: 404.html and 500.html
"""
<!-- 404.html -->
<html>
    <body>
        <h1>Oops! Page not found! 🔍</h1>
        <p>Looks like this page went on vacation!</p>
    </body>
</html>
"""`,language:"python",note:"Custom error pages make your website look professional even when things go wrong! 🎨"},{heading:"🏷️ Naming URLs - Making Life Easier",content:"You can give URLs names, then reference them by name instead of hardcoding paths!",code:`# File: blog/urls.py

from django.urls import path
from . import views

app_name = 'blog'  # Namespace for these URLs

urlpatterns = [
    path('', views.home, name='home'),
    path('post/<int:id>/', views.post, name='post-detail'),
    path('about/', views.about, name='about'),
]

# In views:
from django.urls import reverse

def some_view(request):
    url = reverse('blog:post-detail', args=[5])
    # Returns: '/blog/post/5/'
    return redirect(url)

# In templates:
"""
<a href="{% url 'blog:home' %}">Home</a>
<a href="{% url 'blog:post-detail' 123 %}">Post 123</a>
"""

# Benefits:
# ✓ Change URLs in one place
# ✓ No broken links
# ✓ Easier to remember`,language:"python"}],challenge:"Create a URL that captures someone's favorite color and shows a page with that color! Example: /color/blue/ 🎨"},5:{title:"Django Templates (DTL)",subtitle:"Make your pages beautiful and dynamic!",emoji:"🎨",realWorldExample:'Templates are like Mad Libs! 📝 Remember those fun games where you fill in blanks? "The ___ cat jumped over the ___ moon!" Django templates work the same way - you create an HTML page with blanks, and Django fills them in with real data! 🌙✨',quickTip:"Templates let you write HTML once and reuse it everywhere with different data - like a cookie cutter making different flavored cookies! 🍪",sections:[{heading:"📋 Template Basics",content:"Django Template Language (DTL) lets you mix HTML with special Django code. It's like adding superpowers to HTML!",code:`<!-- File: blog/templates/hello.html -->

<html>
<head>
    <title>My First Template</title>
</head>
<body>
    <h1>Hello, World! 🌍</h1>
    
    <!-- This is regular HTML -->
    <p>This is a static paragraph.</p>
    
    <!-- This is Django template magic! -->
    <p>Today is {{ today }}</p>
    <p>You have {{ message_count }} messages!</p>
</body>
</html>

<!-- File: blog/views.py -->
from django.shortcuts import render
from datetime import date

def hello(request):
    context = {
        'today': date.today(),
        'message_count': 5,
    }
    return render(request, 'hello.html', context)`,language:"django",note:'Templates go in a "templates" folder inside your app! Django finds them automatically! 📁'},{heading:"📊 Template Variables",content:"Variables let you display data from Python in your HTML. Use double curly braces: {{ variable }}",code:`<!-- Different types of variables -->

<!-- Simple variable -->
<p>Name: {{ user_name }}</p>

<!-- Dictionary access -->
<p>Age: {{ user.age }}</p>
<p>City: {{ user.city }}</p>

<!-- List access -->
<p>First item: {{ my_list.0 }}</p>
<p>Second item: {{ my_list.1 }}</p>

<!-- Object methods (no parentheses!) -->
<p>Upper: {{ name.upper }}</p>
<p>Length: {{ items.count }}</p>

<!-- The Python view: -->
def example(request):
    context = {
        'user_name': 'Alex',
        'user': {'age': 10, 'city': 'New York'},
        'my_list': ['apple', 'banana', 'orange'],
        'name': 'django',
        'items': [1, 2, 3, 4, 5],
    }
    return render(request, 'example.html', context)`,language:"django"},{heading:"🎭 Template Filters",content:"Filters modify variables. They're like Instagram filters but for data! Use the pipe symbol: |",code:`<!-- Common Filters -->

<!-- Make text uppercase -->
<p>{{ name|upper }}</p>
<!-- "django" becomes "DJANGO" -->

<!-- Make text lowercase -->  
<p>{{ name|lower }}</p>

<!-- Capitalize first letter -->
<p>{{ name|capfirst }}</p>
<!-- "django" becomes "Django" -->

<!-- Capitalize all words -->
<p>{{ sentence|title }}</p>

<!-- Show default if empty -->
<p>{{ value|default:"No value" }}</p>

<!-- Truncate text -->
<p>{{ long_text|truncatewords:5 }}</p>
<!-- Shows only first 5 words -->

<!-- Date formatting -->
<p>{{ today|date:"F d, Y" }}</p>
<!-- "December 25, 2025" -->

<!-- Numbers -->
<p>{{ price|floatformat:2 }}</p>
<!-- Shows 2 decimal places -->

<!-- Length -->
<p>Items: {{ my_list|length }}</p>

<!-- Chain filters! -->
<p>{{ name|upper|truncatechars:5 }}</p>`,language:"django",note:"You can chain multiple filters together - they apply from left to right! 🔗"},{heading:"🔀 If Statements",content:"Use if statements to show different things based on conditions - like choosing your adventure! 🎮",code:`<!-- Basic if -->
{% if user_logged_in %}
    <p>Welcome back! 👋</p>
{% else %}
    <p>Please log in! 🔐</p>
{% endif %}

<!-- if with elif -->
{% if age < 13 %}
    <p>You're a kid! 🧒</p>
{% elif age < 20 %}
    <p>You're a teenager! 🎮</p>
{% else %}
    <p>You're an adult! 👨</p>
{% endif %}

<!-- Comparison operators -->
{% if score >= 90 %}
    <p>Grade: A+ 🌟</p>
{% elif score >= 80 %}
    <p>Grade: B 👍</p>
{% else %}
    <p>Keep trying! 💪</p>
{% endif %}

<!-- Logical operators -->
{% if user.is_active and user.is_verified %}
    <p>Full access granted! ✅</p>
{% endif %}

{% if is_weekend or is_holiday %}
    <p>Time to relax! 😎</p>
{% endif %}

<!-- Check if variable exists -->
{% if user_name %}
    <p>Hello, {{ user_name }}!</p>
{% endif %}`,language:"django"},{heading:"🔁 For Loops",content:"Loops repeat HTML for each item in a list - super useful for showing lists of things!",code:`<!-- Basic loop -->
<ul>
{% for fruit in fruits %}
    <li>{{ fruit }} 🍎</li>
{% endfor %}
</ul>

<!-- Loop with counter -->
{% for item in items %}
    <p>{{ forloop.counter }}. {{ item }}</p>
    <!-- Shows: 1. First, 2. Second, etc. -->
{% endfor %}

<!-- Loop with index (starts at 0) -->
{% for item in items %}
    <p>Index {{ forloop.counter0 }}: {{ item }}</p>
{% endfor %}

<!-- Check if first or last -->
{% for color in colors %}
    <span style="color: {{ color }};"
    {% if forloop.first %}
        class="first-item"
    {% endif %}
    {% if forloop.last %}
        class="last-item"
    {% endif %}
    >
    {{ color }}
    </span>
{% endfor %}

<!-- Empty list handling -->
{% for post in posts %}
    <h3>{{ post.title }}</h3>
{% empty %}
    <p>No posts yet! 📝</p>
{% endfor %}

<!-- Loop through dictionary -->
{% for key, value in user.items %}
    <p>{{ key }}: {{ value }}</p>
{% endfor %}`,language:"django",note:"forloop.counter, forloop.first, and forloop.last are special variables Django gives you! 🎁"},{heading:"🏗️ Template Inheritance",content:"This is SUPER powerful! Create a base template and extend it - like building with LEGO using the same base! 🧱",code:`<!-- File: templates/base.html (The foundation) -->
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}My Website{% endblock %}</title>
</head>
<body>
    <!-- Header (same on every page) -->
    <header>
        <h1>My Awesome Website! 🌟</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/about/">About</a>
        </nav>
    </header>
    
    <!-- Main content (different on each page) -->
    <main>
        {% block content %}
        {% endblock %}
    </main>
    
    <!-- Footer (same on every page) -->
    <footer>
        <p>&copy; 2025 My Website</p>
    </footer>
</body>
</html>

<!-- File: templates/home.html (Uses the foundation) -->
{% extends 'base.html' %}

{% block title %}Home - My Website{% endblock %}

{% block content %}
    <h2>Welcome Home! 🏠</h2>
    <p>This is the home page content!</p>
{% endblock %}

<!-- File: templates/about.html -->
{% extends 'base.html' %}

{% block title %}About Us{% endblock %}

{% block content %}
    <h2>About Us 📖</h2>
    <p>We love Django!</p>
{% endblock %}`,language:"django"},{heading:"🎨 Static Files (CSS, JS, Images)",content:"Static files make your site look pretty! They're files that don't change - like CSS, JavaScript, and images.",code:`<!-- File: mysite/settings.py -->
# Add this at the bottom:

STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / 'static']

<!-- Create folder structure: -->
mysite/
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       └── logo.png

<!-- File: templates/base.html -->
{% load static %}

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="{% static 'css/style.css' %}">
</head>
<body>
    <img src="{% static 'images/logo.png' %}" alt="Logo">
    
    <script src="{% static 'js/script.js' %}"><\/script>
</body>
</html>

<!-- File: static/css/style.css -->
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #667eea, #764ba2);
    color: white;
    padding: 20px;
}

h1 {
    text-align: center;
    font-size: 3em;
}`,language:"django",note:"Always use {% load static %} at the top of templates that use static files! 📌"},{heading:"🔗 Template Tags",content:"Special template tags that do powerful things! They use {% %} syntax.",code:`<!-- URL tag - create links safely -->
<a href="{% url 'home' %}">Home</a>
<a href="{% url 'post-detail' post.id %}">Read Post</a>

<!-- Include tag - include other templates -->
{% include 'navbar.html' %}
{% include 'components/card.html' with title="Hello" %}

<!-- With tag - create temporary variables -->
{% with total=items|length %}
    <p>Total items: {{ total }}</p>
{% endwith %}

<!-- Now tag - current date/time -->
<p>Today: {% now "F d, Y" %}</p>
<p>Time: {% now "H:i" %}</p>

<!-- Spaceless tag - remove whitespace -->
{% spaceless %}
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
{% endspaceless %}

<!-- Comment tag - won't show in HTML -->
{% comment %}
    This is a Django comment
    Won't appear in the page source
{% endcomment %}

<!-- Or single line: -->
{# This is also a comment #}

<!-- CSRF token - IMPORTANT for forms! -->
<form method="post">
    {% csrf_token %}
    <input type="text" name="username">
</form>`,language:"django"},{heading:"🎯 Template Best Practices",content:"Tips to make your templates awesome and organized!",points:["📁 Keep templates organized in folders by app","🏗️ Use base.html and extend it for consistency","🧩 Create reusable components with {% include %}","🎨 Keep logic simple - complex logic goes in views","📝 Use meaningful variable names","💬 Add comments to explain complex parts","🔒 Always use {% csrf_token %} in forms","🔗 Use {% url %} instead of hardcoding links","✨ Keep HTML semantic and accessible"],code:`<!-- Good template structure -->

templates/
├── base.html              # Main layout
├── components/            # Reusable pieces
│   ├── navbar.html
│   ├── footer.html
│   └── card.html
├── blog/                  # Blog templates
│   ├── home.html
│   ├── post_detail.html
│   └── post_list.html
└── users/                 # User templates
    ├── login.html
    └── profile.html`,language:"text"}],challenge:"Create a template that displays your favorite games in a list with colors! Use loops and if statements to make it interactive! 🎮"},6:{title:"Django Models & ORM",subtitle:"Store and organize your data like a pro!",emoji:"💾",realWorldExample:"Models are like organizing your toy collection! 🧸 Imagine you have a notebook where you write down each toy: its name, color, size, and where you keep it. Django models work the same way - they help you organize and store information in a database! 📔",quickTip:"ORM means you can talk to your database using Python instead of complicated database language. It's like having a translator! 🗣️",sections:[{heading:"🗄️ What is ORM?",content:"ORM stands for Object-Relational Mapping. It's Django's way of letting you work with databases using Python code instead of SQL!",points:["Write Python code, Django handles the database","No need to learn SQL (database language)","Works with different databases (SQLite, PostgreSQL, MySQL)","Safer and prevents common database errors","Like having a super smart assistant! 🤖"],code:`# Without ORM (SQL - complicated!)
SELECT * FROM users WHERE age > 10;

# With Django ORM (Python - easy!)
User.objects.filter(age__gt=10)

# See? Python is way easier to read! 🎉`,language:"python"},{heading:"📝 Creating Your First Model",content:"A model is a Python class that represents a database table. Each attribute is a column!",code:`# File: blog/models.py

from django.db import models

class BlogPost(models.Model):
    # Field types - different data types!
    title = models.CharField(max_length=200)  # Short text
    content = models.TextField()               # Long text
    author = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    views = models.IntegerField(default=0)     # Numbers
    is_published = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-created_at']  # Newest first
        verbose_name = 'Blog Post'
        verbose_name_plural = 'Blog Posts'

# This creates a database table automatically! 🎉`,language:"python",note:"__str__ method returns what you see when you print the object. Very helpful! 👀"},{heading:"🎨 Field Types",content:"Django has many field types for different kinds of data. Choose the right one for your needs!",code:`# Common Field Types

# Text Fields
title = models.CharField(max_length=100)     # Short text (max length)
description = models.TextField()             # Long text (no limit)
slug = models.SlugField()                    # URL-friendly text

# Number Fields  
age = models.IntegerField()                  # Whole numbers
price = models.DecimalField(max_digits=10, decimal_places=2)
rating = models.FloatField()                 # Decimal numbers

# Date/Time Fields
birthday = models.DateField()                # Just date
event_time = models.DateTimeField()          # Date + time
duration = models.DurationField()            # Time period

# Boolean
is_active = models.BooleanField(default=True)

# Email and URL
email = models.EmailField()                  # Validates email
website = models.URLField()                  # Validates URL

# Files
profile_pic = models.ImageField(upload_to='profiles/')
document = models.FileField(upload_to='docs/')`,language:"python"},{heading:"🔨 Making Migrations",content:"After creating or changing models, you need to tell Django to update the database!",code:`# Step 1: Create migration files
python manage.py makemigrations

# Django says: "I found changes! Creating migration..."
# Creates a file in migrations/ folder

# Step 2: Apply migrations to database
python manage.py migrate

# Django says: "Applying changes to database..."
# Your database is now updated! ✅

# Check migration status
python manage.py showmigrations

# See migration SQL (optional)
python manage.py sqlmigrate blog 0001`,language:"bash",note:"Always run makemigrations then migrate after changing models! It's a two-step dance! 💃"},{heading:"✨ CRUD Operations",content:"CRUD = Create, Read, Update, Delete. The four basic operations you do with data!",code:`# File: views.py or Django shell

# CREATE - Adding new data 📝
# Method 1
post = BlogPost(title="My First Post", content="Hello World!")
post.save()

# Method 2 (recommended)
post = BlogPost.objects.create(
    title="My Second Post",
    content="This is awesome!",
    author="Alex"
)

# READ - Getting data 📖
# Get all posts
all_posts = BlogPost.objects.all()

# Get one specific post
post = BlogPost.objects.get(id=1)

# Filter posts
published_posts = BlogPost.objects.filter(is_published=True)
recent_posts = BlogPost.objects.filter(created_at__year=2025)

# UPDATE - Changing data ✏️
post = BlogPost.objects.get(id=1)
post.title = "Updated Title"
post.save()

# Or update multiple at once
BlogPost.objects.filter(author="Alex").update(is_published=True)

# DELETE - Removing data 🗑️
post = BlogPost.objects.get(id=1)
post.delete()

# Delete multiple
BlogPost.objects.filter(views=0).delete()`,language:"python"},{heading:"🔍 QuerySets & Filtering",content:"QuerySets let you search and filter data like a detective! 🕵️",code:`# QuerySet methods - chain them together!

# Exact match
BlogPost.objects.filter(author="Alex")

# Contains
BlogPost.objects.filter(title__contains="Django")
BlogPost.objects.filter(title__icontains="django")  # Case-insensitive

# Starts with / Ends with
BlogPost.objects.filter(title__startswith="How")
BlogPost.objects.filter(title__endswith="?")

# Greater than / Less than
BlogPost.objects.filter(views__gt=100)    # Greater than
BlogPost.objects.filter(views__gte=100)   # Greater than or equal
BlogPost.objects.filter(views__lt=50)     # Less than

# Range
BlogPost.objects.filter(views__range=(10, 100))

# Multiple conditions (AND)
BlogPost.objects.filter(author="Alex", is_published=True)

# OR conditions
from django.db.models import Q
BlogPost.objects.filter(Q(author="Alex") | Q(author="Sam"))

# Ordering
BlogPost.objects.order_by('-created_at')  # Newest first
BlogPost.objects.order_by('title')        # A to Z

# Limit results
BlogPost.objects.all()[:5]  # First 5 posts

# Count
BlogPost.objects.filter(is_published=True).count()

# Check if exists
exists = BlogPost.objects.filter(title="Test").exists()`,language:"python"},{heading:"🔗 Model Relationships",content:"Relationships connect models together, like friends holding hands! 🤝",code:`# File: models.py

# ONE TO MANY (ForeignKey)
# One author can have many posts
class Author(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()

class Post(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    # If author is deleted, delete their posts too

# Usage:
author = Author.objects.create(name="Alex")
post = Post.objects.create(title="Hello", author=author)
# Get all posts by an author
alex_posts = author.post_set.all()

# ONE TO ONE
# Each user has one profile
class User(models.Model):
    username = models.CharField(max_length=50)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField()
    avatar = models.ImageField()

# MANY TO MANY
# Posts can have many tags, tags can be on many posts
class Tag(models.Model):
    name = models.CharField(max_length=50)

class Article(models.Model):
    title = models.CharField(max_length=200)
    tags = models.ManyToManyField(Tag)

# Usage:
article = Article.objects.create(title="Django Tips")
tag1 = Tag.objects.create(name="Python")
tag2 = Tag.objects.create(name="Web")
article.tags.add(tag1, tag2)`,language:"python",note:'on_delete=models.CASCADE means "if parent is deleted, delete children too!" 🗑️'}],challenge:"Create a model for your favorite video games with fields: name, genre, rating, and release_year! 🎮"}},$y={7:{title:"Django Admin Panel",subtitle:"Your website's super control center!",emoji:"👑",realWorldExample:"The admin panel is like the cockpit of a spaceship! 🚀 Astronauts have all the controls in one place to manage everything. Django admin gives you a beautiful interface to manage all your data without writing any code! 🎮",quickTip:"The admin panel comes FREE with Django - other frameworks make you build this yourself! It saves hundreds of hours! ⏰",sections:[{heading:"👤 Creating a Superuser",content:"First, you need an admin account - this is like becoming the captain of your ship!",code:`# Run this command in your terminal
python manage.py createsuperuser

# Django will ask you:
# Username: admin (or whatever you like)
# Email: your@email.com
# Password: ******** (type a strong password)
# Password (again): ********

# Success! Now you can log in! 🎉`,language:"bash",note:"Remember your password! Write it down somewhere safe! 📝"},{heading:"🌐 Accessing the Admin Panel",content:"Let's visit your new control center!",code:`# Make sure your server is running
python manage.py runserver

# Open your browser and go to:
http://127.0.0.1:8000/admin/

# You'll see a beautiful login page!
# Enter your superuser username and password

# Welcome to your admin panel! 🎊`,language:"bash",note:"The admin URL is /admin/ - keep it secret, keep it safe! 🔒"},{heading:"📝 Registering Models",content:"To manage your models in the admin, you need to register them!",code:`# File: blog/admin.py

from django.contrib import admin
from .models import Post, Author, Category

# Simple registration
admin.site.register(Post)
admin.site.register(Author)

# Now you can see and edit these in the admin! 🎉`,language:"python"},{heading:"✨ Customizing the Admin Display",content:"Make your admin panel look awesome with custom displays!",code:`# File: blog/admin.py

from django.contrib import admin
from .models import Post

class PostAdmin(admin.ModelAdmin):
    # What columns to show in the list
    list_display = ['title', 'author', 'created_at', 'is_published']
    
    # Add filters on the side
    list_filter = ['is_published', 'created_at', 'author']
    
    # Add search box
    search_fields = ['title', 'content', 'author']
    
    # Make some fields clickable
    list_display_links = ['title']
    
    # Edit directly in the list
    list_editable = ['is_published']
    
    # How many items per page
    list_per_page = 25
    
    # Order by newest first
    ordering = ['-created_at']
    
    # Read-only fields
    readonly_fields = ['created_at', 'updated_at']

# Register with customization
admin.site.register(Post, PostAdmin)`,language:"python",note:"list_display is like choosing which columns to show in Excel! 📊"},{heading:"🔍 Adding Search and Filters",content:"Help yourself find things quickly with search and filters!",code:`class PostAdmin(admin.ModelAdmin):
    # Search by these fields
    search_fields = ['title', 'content', 'author__name']
    # author__name searches in related Author model!
    
    # Filter sidebar options
    list_filter = [
        'is_published',
        'created_at',
        'category',
    ]
    
    # Date hierarchy navigation
    date_hierarchy = 'created_at'
    # Adds cool date navigation at top! 📅

admin.site.register(Post, PostAdmin)`,language:"python"},{heading:"📦 Organizing Form Fields",content:"Make your edit forms beautiful and organized!",code:`class PostAdmin(admin.ModelAdmin):
    # Group fields in the form
    fieldsets = [
        ('Post Information', {
            'fields': ['title', 'slug', 'content']
        }),
        ('Metadata', {
            'fields': ['author', 'category', 'tags']
        }),
        ('Publishing', {
            'fields': ['is_published', 'publish_date'],
            'classes': ['collapse']  # Make this section collapsible!
        }),
    ]
    
    # Or simple list
    fields = ['title', 'content', 'author', 'is_published']

admin.site.register(Post, PostAdmin)`,language:"python",note:"Fieldsets are like organizing your desk into sections - much neater! 🗂️"},{heading:"🎨 Inline Admin",content:"Edit related objects on the same page - super convenient!",code:`# File: blog/admin.py

from django.contrib import admin
from .models import Author, Post

# Inline for editing posts within author page
class PostInline(admin.TabularInline):  # or StackedInline
    model = Post
    extra = 1  # Number of empty forms to show
    fields = ['title', 'is_published']

class AuthorAdmin(admin.ModelAdmin):
    list_display = ['name', 'email']
    inlines = [PostInline]  # Add the inline!

admin.site.register(Author, AuthorAdmin)

# Now when you edit an author, you can add/edit their posts too! 🎉`,language:"python"},{heading:"🎭 Custom Actions",content:"Add custom buttons to perform bulk actions!",code:`class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_published']
    actions = ['make_published', 'make_draft']
    
    def make_published(self, request, queryset):
        # Publish selected posts
        count = queryset.update(is_published=True)
        self.message_user(request, f'{count} posts published! 🎉')
    make_published.short_description = 'Publish selected posts'
    
    def make_draft(self, request, queryset):
        count = queryset.update(is_published=False)
        self.message_user(request, f'{count} posts unpublished')
    make_draft.short_description = 'Unpublish selected posts'

admin.site.register(Post, PostAdmin)

# Select multiple posts and use the action dropdown! 🔽`,language:"python"},{heading:"🌈 Customizing Admin Site",content:"Make the admin panel truly yours!",code:`# File: mysite/urls.py

from django.contrib import admin

# Customize the admin site
admin.site.site_header = 'My Awesome Blog Admin 🎨'
admin.site.site_title = 'Blog Admin Portal'
admin.site.index_title = 'Welcome to Blog Administration'

urlpatterns = [
    path('admin/', admin.site.urls),
]

# Now your admin has a custom title and header! ✨`,language:"python",note:"Make it fun and personal - you'll see this page a lot! 🎨"}],challenge:"Register a model and customize it with list_display, search, and filters! Make it look amazing! 🌟"},8:{title:"Django Forms",subtitle:"Collect information from your users!",emoji:"📝",realWorldExample:"Forms are like order forms at a restaurant! 🍔 The waiter (form) asks you questions (fields), you fill them out, and your order goes to the kitchen (database). Django forms help you collect and validate information from users!",quickTip:"Django forms automatically prevent bad data and protect against attacks - like having a bouncer for your data! 🛡️",sections:[{heading:"📋 HTML Forms in Django",content:"Let's start with a simple HTML form and see how Django handles it!",code:`<!-- File: templates/contact.html -->
<form method="POST">
    {% csrf_token %}  <!-- SUPER IMPORTANT! Protects from attacks -->
    
    <label>Your Name:</label>
    <input type="text" name="name" required>
    
    <label>Your Email:</label>
    <input type="email" name="email" required>
    
    <label>Message:</label>
    <textarea name="message" required></textarea>
    
    <button type="submit">Send Message 📨</button>
</form>

# File: views.py
def contact(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']
        print(f"Message from {name}: {message}")
        return HttpResponse("Thank you! 🎉")
    return render(request, 'contact.html')`,language:"django",note:"Never forget {% csrf_token %} in forms! It protects your site from bad guys! 🔒"},{heading:"🎨 Django Forms Class",content:"Django Forms classes make forms easier and safer!",code:`# File: blog/forms.py (create this file)

from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(
        max_length=100,
        label='Your Name',
        widget=forms.TextInput(attrs={'placeholder': 'John Doe'})
    )
    email = forms.EmailField(
        label='Your Email',
        widget=forms.EmailInput(attrs={'placeholder': 'john@example.com'})
    )
    subject = forms.CharField(max_length=200)
    message = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 5})
    )
    agree = forms.BooleanField(label='I agree to terms')

# File: views.py
from .forms import ContactForm

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():  # Validates everything!
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            # Process the data
            return HttpResponse("Success! 🎉")
    else:
        form = ContactForm()
    
    return render(request, 'contact.html', {'form': form})`,language:"python"},{heading:"🎯 Rendering Forms in Templates",content:"Django can render your forms automatically in different ways!",code:`<!-- File: templates/contact.html -->

<form method="POST">
    {% csrf_token %}
    
    <!-- Method 1: Quick and easy -->
    {{ form.as_p }}  <!-- Each field in <p> tags -->
    
    <!-- Method 2: Table format -->
    <table>
    {{ form.as_table }}
    </table>
    
    <!-- Method 3: List format -->
    <ul>
    {{ form.as_ul }}
    </ul>
    
    <!-- Method 4: Manual (most control!) -->
    <div>
        {{ form.name.label_tag }}
        {{ form.name }}
        {% if form.name.errors %}
            <span class="error">{{ form.name.errors }}</span>
        {% endif %}
    </div>
    
    <div>
        {{ form.email.label_tag }}
        {{ form.email }}
        {{ form.email.errors }}
    </div>
    
    <button type="submit">Submit 🚀</button>
</form>

<!-- Show all errors at top -->
{% if form.errors %}
    <div class="errors">
        <p>Please fix the following errors:</p>
        {{ form.errors }}
    </div>
{% endif %}`,language:"django",note:"form.as_p is the quickest way to render a form! Perfect for prototyping! ⚡"},{heading:"💾 ModelForms",content:"ModelForms automatically create forms from your models - super convenient!",code:`# File: blog/forms.py

from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post  # Which model to use
        fields = ['title', 'content', 'category', 'is_published']
        # Or use: fields = '__all__'  # All fields
        # Or use: exclude = ['author']  # All except author
        
        # Custom labels
        labels = {
            'title': 'Post Title',
            'is_published': 'Publish Now?'
        }
        
        # Custom widgets (form controls)
        widgets = {
            'content': forms.Textarea(attrs={'rows': 10}),
            'title': forms.TextInput(attrs={
                'placeholder': 'Enter amazing title...',
                'class': 'fancy-input'
            })
        }
        
        # Help text
        help_texts = {
            'title': 'Keep it short and catchy! 🎯'
        }

# File: views.py
from .forms import PostForm

def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save()  # Saves to database automatically!
            return redirect('post-detail', id=post.id)
    else:
        form = PostForm()
    
    return render(request, 'create_post.html', {'form': form})`,language:"python"},{heading:"✅ Form Validation",content:"Make sure users enter the right information!",code:`# File: forms.py

from django import forms

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content', 'email']
    
    # Validate specific field
    def clean_title(self):
        title = self.cleaned_data['title']
        
        # Check if title is too short
        if len(title) < 5:
            raise forms.ValidationError('Title must be at least 5 characters! ❌')
        
        # Check if title contains bad words
        bad_words = ['spam', 'fake']
        if any(word in title.lower() for word in bad_words):
            raise forms.ValidationError('Please use appropriate language! 🚫')
        
        return title
    
    # Validate multiple fields together
    def clean(self):
        cleaned_data = super().clean()
        title = cleaned_data.get('title')
        content = cleaned_data.get('content')
        
        # Make sure content is longer than title
        if title and content:
            if len(content) < len(title):
                raise forms.ValidationError(
                    'Content should be longer than title! 📝'
                )
        
        return cleaned_data`,language:"python",note:"clean_<fieldname> validates one field, clean() validates the whole form! 🎯"},{heading:"🎨 Custom Widgets",content:"Change how form fields look and work!",code:`# File: forms.py

from django import forms

class ArticleForm(forms.Form):
    # Text input with custom attributes
    title = forms.CharField(
        widget=forms.TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter title',
            'style': 'border: 2px solid blue;'
        })
    )
    
    # Textarea with custom size
    content = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 15, 'cols': 80})
    )
    
    # Dropdown select
    category = forms.ChoiceField(
        choices=[
            ('tech', 'Technology'),
            ('sport', 'Sports'),
            ('food', 'Food & Cooking'),
        ],
        widget=forms.Select(attrs={'class': 'dropdown'})
    )
    
    # Radio buttons
    status = forms.ChoiceField(
        choices=[('draft', 'Draft'), ('published', 'Published')],
        widget=forms.RadioSelect()
    )
    
    # Checkboxes
    tags = forms.MultipleChoiceField(
        choices=[('python', 'Python'), ('django', 'Django'), ('web', 'Web')],
        widget=forms.CheckboxSelectMultiple()
    )
    
    # Hidden field
    user_id = forms.IntegerField(widget=forms.HiddenInput())
    
    # Date picker
    publish_date = forms.DateField(
        widget=forms.DateInput(attrs={'type': 'date'})
    )`,language:"python"},{heading:"🔄 Updating with ModelForms",content:"Use ModelForms to edit existing data!",code:`# File: views.py

from .models import Post
from .forms import PostForm

def edit_post(request, post_id):
    # Get the post to edit
    post = Post.objects.get(id=post_id)
    
    if request.method == 'POST':
        # Pass existing post to form
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            form.save()  # Updates the existing post!
            return redirect('post-detail', id=post.id)
    else:
        # Pre-fill form with existing data
        form = PostForm(instance=post)
    
    return render(request, 'edit_post.html', {'form': form, 'post': post})

# File: templates/edit_post.html
"""
<h1>Edit Post: {{ post.title }}</h1>

<form method="POST">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Update Post ✏️</button>
</form>
"""`,language:"python",note:"instance=post tells the form to update that specific post instead of creating new! 🔄"}],challenge:"Create a form for adding your favorite books with title, author, and rating! Add validation! 📚"},9:{title:"Authentication & Authorization",subtitle:"User accounts, login, and permissions!",emoji:"🔐",realWorldExample:"Authentication is like showing your ID card! 🪪 Just like you need to prove who you are to enter certain places, users need to log in to access their accounts. Django makes this super easy!",quickTip:"Django has built-in user authentication - no need to build it from scratch! 🎁",sections:[{heading:"👤 Django User Model",content:"Django comes with a built-in User model that handles everything about users!",code:`# Django's User model has these fields automatically:
# - username
# - password (automatically encrypted!)
# - email
# - first_name
# - last_name
# - is_active (can this user log in?)
# - is_staff (can access admin?)
# - is_superuser (has all permissions?)
# - date_joined
# - last_login

# Import the User model
from django.contrib.auth.models import User

# Create a new user
user = User.objects.create_user(
    username='coolgamer123',
    email='gamer@example.com',
    password='secretpassword123',  # Django encrypts this automatically!
    first_name='Alex',
    last_name='Smith'
)

# Check if user exists
user_exists = User.objects.filter(username='coolgamer123').exists()

# Get a user
user = User.objects.get(username='coolgamer123')`,language:"python",note:"Never store passwords as plain text! Django automatically hashes them for security! 🔒"},{heading:"🚪 Login System",content:"Let users log in to your website!",code:`# File: views.py

from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        
        # Check if username and password are correct
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            # Password is correct! Log them in
            login(request, user)
            return redirect('home')
        else:
            # Wrong username or password
            return render(request, 'login.html', {
                'error': 'Invalid username or password! ❌'
            })
    
    return render(request, 'login.html')

# File: templates/login.html
"""
<form method="POST">
    {% csrf_token %}
    
    {% if error %}
        <p style="color: red;">{{ error }}</p>
    {% endif %}
    
    <input type="text" name="username" placeholder="Username" required>
    <input type="password" name="password" placeholder="Password" required>
    <button type="submit">Login 🔓</button>
</form>
"""`,language:"python"},{heading:"🚪 Logout System",content:"Let users log out when they're done!",code:`# File: views.py

from django.contrib.auth import logout
from django.shortcuts import redirect

def logout_view(request):
    logout(request)  # Logs out the current user
    return redirect('home')

# In your template:
"""
{% if request.user.is_authenticated %}
    <p>Welcome, {{ request.user.username }}! 👋</p>
    <a href="{% url 'logout' %}">Logout</a>
{% else %}
    <a href="{% url 'login' %}">Login</a>
{% endif %}
"""`,language:"python",note:"request.user is available in ALL templates and views - super convenient! 🎯"},{heading:"📝 Registration System",content:"Let new users create accounts!",code:`# File: views.py

from django.contrib.auth.models import User
from django.contrib.auth import login
from django.shortcuts import render, redirect

def register_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        
        # Check if passwords match
        if password1 != password2:
            return render(request, 'register.html', {
                'error': 'Passwords do not match! ❌'
            })
        
        # Check if username already exists
        if User.objects.filter(username=username).exists():
            return render(request, 'register.html', {
                'error': 'Username already taken! 😔'
            })
        
        # Create the user
        user = User.objects.create_user(
            username=username,
            email=email,
            password=password1
        )
        
        # Log them in automatically
        login(request, user)
        return redirect('home')
    
    return render(request, 'register.html')

# File: templates/register.html
"""
<form method="POST">
    {% csrf_token %}
    
    {% if error %}
        <p style="color: red;">{{ error }}</p>
    {% endif %}
    
    <input type="text" name="username" placeholder="Username" required>
    <input type="email" name="email" placeholder="Email" required>
    <input type="password" name="password1" placeholder="Password" required>
    <input type="password" name="password2" placeholder="Confirm Password" required>
    <button type="submit">Register 🎉</button>
</form>
"""`,language:"python"},{heading:"🔒 Using Django Forms for Auth",content:"Django provides ready-made forms for authentication!",code:`# File: views.py

from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login

# Registration with Django's form
def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()  # Creates the user
            login(request, user)  # Log them in
            return redirect('home')
    else:
        form = UserCreationForm()
    
    return render(request, 'register.html', {'form': form})

# Login with Django's form
def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('home')
    else:
        form = AuthenticationForm()
    
    return render(request, 'login.html', {'form': form})

# Template:
"""
<form method="POST">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Submit</button>
</form>
"""`,language:"python",note:"Django forms handle validation automatically - much safer! 🛡️"},{heading:"🚧 login_required Decorator",content:"Protect views so only logged-in users can access them!",code:`# File: views.py

from django.contrib.auth.decorators import login_required
from django.shortcuts import render

@login_required  # Only logged-in users can see this!
def profile_view(request):
    return render(request, 'profile.html', {
        'user': request.user
    })

@login_required(login_url='/login/')  # Redirect to custom login page
def secret_page(request):
    return render(request, 'secret.html')

# If user is not logged in, they get redirected to login page!`,language:"python",note:"@login_required is like a bouncer at a club - no login, no entry! 🚫"},{heading:"👥 Permissions & Groups",content:"Control what different users can do!",code:`# File: views.py

from django.contrib.auth.decorators import permission_required, user_passes_test

# Only users with specific permission can access
@permission_required('blog.add_post')
def create_post_view(request):
    # Only users who can add posts see this
    return render(request, 'create_post.html')

# Check if user is staff
@user_passes_test(lambda u: u.is_staff)
def admin_dashboard(request):
    # Only staff members can access
    return render(request, 'admin_dashboard.html')

# In views, check permissions manually
def some_view(request):
    if request.user.has_perm('blog.delete_post'):
        # User can delete posts
        pass

# Working with groups
from django.contrib.auth.models import Group

# Create a group
editors = Group.objects.create(name='Editors')

# Add user to group
user.groups.add(editors)

# Check if user is in group
if user.groups.filter(name='Editors').exists():
    print("User is an editor! ✏️")`,language:"python"},{heading:"🔑 Password Management",content:"Help users change and reset their passwords!",code:`# File: views.py

from django.contrib.auth import update_session_auth_hash

@login_required
def change_password(request):
    if request.method == 'POST':
        old_password = request.POST['old_password']
        new_password = request.POST['new_password']
        
        user = request.user
        
        # Check if old password is correct
        if user.check_password(old_password):
            user.set_password(new_password)  # Hash and set new password
            user.save()
            
            # Keep user logged in after password change
            update_session_auth_hash(request, user)
            
            return redirect('profile')
        else:
            return render(request, 'change_password.html', {
                'error': 'Old password is incorrect! ❌'
            })
    
    return render(request, 'change_password.html')

# Django also has built-in password reset views!
# Just add to urls.py:
"""
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('password-reset/', auth_views.PasswordResetView.as_view(), name='password_reset'),
]
"""`,language:"python",note:"Always use set_password() - it automatically hashes the password! Never save raw passwords! 🔐"},{heading:"🎯 Checking Authentication in Templates",content:"Show different content to logged-in vs logged-out users!",code:`<!-- File: templates/base.html -->

<!-- Check if user is logged in -->
{% if user.is_authenticated %}
    <p>Welcome back, {{ user.username }}! 👋</p>
    <p>Email: {{ user.email }}</p>
    <a href="{% url 'profile' %}">My Profile</a>
    <a href="{% url 'logout' %}">Logout</a>
{% else %}
    <a href="{% url 'login' %}">Login</a>
    <a href="{% url 'register' %}">Register</a>
{% endif %}

<!-- Check if user is staff -->
{% if user.is_staff %}
    <a href="{% url 'admin:index' %}">Admin Panel 👑</a>
{% endif %}

<!-- Check permissions -->
{% if perms.blog.add_post %}
    <a href="{% url 'create_post' %}">Write New Post ✏️</a>
{% endif %}`,language:"django"}],challenge:"Create a complete login, logout, and registration system for your website! Add a profile page too! 🎯"},10:{title:"Sessions & Messages",subtitle:"Remember users and show them messages!",emoji:"💬",realWorldExample:'Sessions are like a shopping cart that remembers what you added! 🛒 Messages are like sticky notes that show up once and disappear - perfect for "Success!" notifications!',quickTip:"Django sessions work automatically - just use request.session like a dictionary! 📦",sections:[{heading:"🍪 What are Sessions?",content:"Sessions store information about each user as they browse your website. It's like giving each visitor their own backpack to carry stuff!",points:["Sessions remember users between page loads","Each user gets their own session (like their own locker)","Sessions work automatically in Django - no setup needed!","Data is stored on the server (safe!)","Cookies are used to remember which session belongs to who"],code:`# Sessions are enabled by default in Django!
# Check settings.py for:

MIDDLEWARE = [
    'django.contrib.sessions.middleware.SessionMiddleware',  # ✅
]

INSTALLED_APPS = [
    'django.contrib.sessions',  # ✅
]`,language:"python"},{heading:"💾 Using Sessions",content:"Store and retrieve data in sessions - super easy!",code:`# File: views.py

def add_to_cart(request, product_id):
    # Get or create cart in session
    cart = request.session.get('cart', {})
    
    # Add product to cart
    if product_id in cart:
        cart[product_id] += 1  # Increase quantity
    else:
        cart[product_id] = 1  # Add new item
    
    # Save back to session
    request.session['cart'] = cart
    
    return HttpResponse("Added to cart! 🛒")

def view_cart(request):
    # Get cart from session (empty dict if doesn't exist)
    cart = request.session.get('cart', {})
    
    return render(request, 'cart.html', {'cart': cart})

def clear_cart(request):
    # Delete cart from session
    if 'cart' in request.session:
        del request.session['cart']
    
    return redirect('home')

# Other session operations:

# Set a value
request.session['favorite_color'] = 'blue'
request.session['visit_count'] = 5

# Get a value
color = request.session.get('favorite_color', 'red')  # Default: red

# Check if key exists
if 'cart' in request.session:
    print("User has a cart!")

# Delete a key
del request.session['favorite_color']

# Clear all session data
request.session.flush()`,language:"python",note:"Changes to session are saved automatically - no need to call save()! 🎉"},{heading:"⏱️ Session Settings",content:"Customize how sessions work!",code:`# File: settings.py

# How long sessions last (in seconds)
SESSION_COOKIE_AGE = 1209600  # 2 weeks (default)

# Expire session when browser closes?
SESSION_EXPIRE_AT_BROWSER_CLOSE = False  # Default: False

# Session cookie name
SESSION_COOKIE_NAME = 'sessionid'

# Save session on every request?
SESSION_SAVE_EVERY_REQUEST = False  # Default: False

# Where to store sessions
SESSION_ENGINE = 'django.contrib.sessions.backends.db'  # In database (default)
# Other options:
# 'django.contrib.sessions.backends.cache'  # In cache (faster!)
# 'django.contrib.sessions.backends.file'   # In files`,language:"python"},{heading:"✉️ Django Messages Framework",content:"Show temporary messages to users - perfect for notifications!",code:`# File: views.py

from django.contrib import messages
from django.shortcuts import redirect

def create_post(request):
    if request.method == 'POST':
        # ... save post ...
        
        # Add success message
        messages.success(request, 'Post created successfully! 🎉')
        return redirect('home')

def delete_post(request, post_id):
    # ... delete post ...
    
    messages.warning(request, 'Post deleted! 🗑️')
    return redirect('home')

def login_view(request):
    # ... login logic ...
    
    if user is None:
        messages.error(request, 'Invalid username or password! ❌')
    else:
        messages.info(request, f'Welcome back, {user.username}! 👋')
        return redirect('home')
    
    return render(request, 'login.html')

# Message levels:
messages.debug(request, 'Debug info')      # For developers
messages.info(request, 'FYI message')      # Blue
messages.success(request, 'It worked!')    # Green
messages.warning(request, 'Be careful')    # Yellow
messages.error(request, 'Something broke') # Red`,language:"python",note:"Messages appear once and then disappear - perfect for status updates! 💬"},{heading:"📺 Displaying Messages in Templates",content:"Show messages to your users!",code:`<!-- File: templates/base.html -->

<!-- Simple message display -->
{% if messages %}
    {% for message in messages %}
        <div class="alert alert-{{ message.tags }}">
            {{ message }}
        </div>
    {% endfor %}
{% endif %}

<!-- Styled message display -->
{% if messages %}
    <div class="messages">
        {% for message in messages %}
            <div class="message 
                {% if message.tags == 'success' %}success
                {% elif message.tags == 'error' %}error
                {% elif message.tags == 'warning' %}warning
                {% else %}info{% endif %}">
                {{ message }}
                <button onclick="this.parentElement.remove()">×</button>
            </div>
        {% endfor %}
    </div>
{% endif %}

<!-- CSS for messages -->
<style>
.message {
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
}

.message.success {
    background: #d4edda;
    color: #155724;
}

.message.error {
    background: #f8d7da;
    color: #721c24;
}

.message.warning {
    background: #fff3cd;
    color: #856404;
}

.message.info {
    background: #d1ecf1;
    color: #0c5460;
}
</style>`,language:"django"},{heading:"🎯 Practical Session Examples",content:"Real-world uses for sessions!",code:`# Example 1: Page view counter
def home(request):
    # Count how many times user visited
    visits = request.session.get('visits', 0)
    request.session['visits'] = visits + 1
    
    return render(request, 'home.html', {
        'visits': request.session['visits']
    })

# Example 2: Remember user preferences
def set_theme(request):
    theme = request.POST.get('theme', 'light')
    request.session['theme'] = theme
    messages.success(request, f'Theme changed to {theme}! 🎨')
    return redirect('home')

def get_theme(request):
    return request.session.get('theme', 'light')  # Default: light

# Example 3: Multi-step form
def step1(request):
    if request.method == 'POST':
        request.session['step1_data'] = {
            'name': request.POST['name'],
            'email': request.POST['email']
        }
        return redirect('step2')
    return render(request, 'step1.html')

def step2(request):
    if request.method == 'POST':
        # Get data from step 1
        step1_data = request.session.get('step1_data', {})
        
        # Combine with step 2 data
        full_data = {
            **step1_data,
            'address': request.POST['address'],
            'phone': request.POST['phone']
        }
        
        # Save to database
        # ... save full_data ...
        
        # Clear session
        del request.session['step1_data']
        
        messages.success(request, 'Registration complete! 🎉')
        return redirect('home')
    
    return render(request, 'step2.html')

# Example 4: Recently viewed items
def view_product(request, product_id):
    # Get recently viewed list
    recent = request.session.get('recent_products', [])
    
    # Add this product (avoid duplicates)
    if product_id in recent:
        recent.remove(product_id)
    recent.insert(0, product_id)  # Add to front
    
    # Keep only last 5
    recent = recent[:5]
    
    request.session['recent_products'] = recent
    
    return render(request, 'product.html')`,language:"python"},{heading:"🔔 Custom Message Tags",content:"Add extra CSS classes to messages!",code:`# File: views.py

from django.contrib import messages

def some_view(request):
    # Add custom tags (for CSS styling)
    messages.success(
        request, 
        'Profile updated!', 
        extra_tags='custom-success animated'
    )
    
    return redirect('profile')

# In template:
"""
{% for message in messages %}
    <div class="alert {{ message.tags }}">
        {{ message }}
    </div>
{% endfor %}
"""

# Results in:
# <div class="alert success custom-success animated">Profile updated!</div>`,language:"python"}],challenge:"Create a shopping cart using sessions and show success messages when items are added! 🛒"},11:{title:"File & Image Handling",subtitle:"Upload and manage files and images!",emoji:"📷",realWorldExample:"File uploads are like putting photos in a photo album! 📸 Django helps you save user-uploaded images and files safely on your server!",quickTip:"Use ImageField for pictures and FileField for any file type! 🖼️",sections:[{heading:"⚙️ Media Settings",content:"First, configure Django to handle uploaded files!",code:`# File: settings.py

# Where uploaded files are stored
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# BASE_DIR is defined at top of settings.py
# This creates a 'media' folder in your project

# File: mysite/urls.py (main urls.py)

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    # ... your other URL patterns ...
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)`,language:"python",note:"MEDIA_ROOT is where files are saved. MEDIA_URL is the URL to access them! 📁"},{heading:"🖼️ Creating Model with ImageField",content:"Add image fields to your models!",code:`# File: models.py

from django.db import models

class UserProfile(models.Model):
    name = models.CharField(max_length=100)
    # Image field!
    profile_picture = models.ImageField(upload_to='profiles/')
    # Files go to: media/profiles/
    
    bio = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    # Allow blank (optional image)
    featured_image = models.ImageField(
        upload_to='post_images/',
        blank=True,
        null=True
    )

class Document(models.Model):
    title = models.CharField(max_length=200)
    # Any file type!
    file = models.FileField(upload_to='documents/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

# Install Pillow for image handling:
# pip install Pillow`,language:"python"},{heading:"📤 Upload Form with Files",content:"Create a form to upload files!",code:`# File: forms.py

from django import forms
from .models import UserProfile

class ProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ['name', 'profile_picture', 'bio']

# File: views.py

from .forms import ProfileForm

def create_profile(request):
    if request.method == 'POST':
        # IMPORTANT: include request.FILES for file uploads!
        form = ProfileForm(request.POST, request.FILES)
        
        if form.is_valid():
            profile = form.save()
            messages.success(request, 'Profile created! 🎉')
            return redirect('profile', id=profile.id)
    else:
        form = ProfileForm()
    
    return render(request, 'create_profile.html', {'form': form})

# File: templates/create_profile.html
"""
<form method="POST" enctype="multipart/form-data">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Create Profile 📸</button>
</form>
"""`,language:"python",note:'Never forget enctype="multipart/form-data" in forms with file uploads! 🎯'},{heading:"🎨 Displaying Uploaded Images",content:"Show uploaded images in your templates!",code:`<!-- File: templates/profile.html -->

<div class="profile">
    <h2>{{ profile.name }}</h2>
    
    <!-- Check if image exists -->
    {% if profile.profile_picture %}
        <img src="{{ profile.profile_picture.url }}" 
             alt="{{ profile.name }}'s picture"
             style="width: 200px; height: 200px; border-radius: 50%;">
    {% else %}
        <img src="/static/images/default-avatar.png" alt="Default avatar">
    {% endif %}
    
    <p>{{ profile.bio }}</p>
</div>

<!-- For files (documents, PDFs, etc.) -->
{% if document.file %}
    <a href="{{ document.file.url }}" download>
        Download {{ document.title }} 📄
    </a>
{% endif %}`,language:"django"},{heading:"✏️ Updating Files",content:"Let users change their uploaded files!",code:`# File: views.py

def edit_profile(request, profile_id):
    profile = UserProfile.objects.get(id=profile_id)
    
    if request.method == 'POST':
        form = ProfileForm(
            request.POST,
            request.FILES,  # Don't forget this!
            instance=profile
        )
        
        if form.is_valid():
            form.save()
            messages.success(request, 'Profile updated! ✅')
            return redirect('profile', id=profile.id)
    else:
        form = ProfileForm(instance=profile)
    
    return render(request, 'edit_profile.html', {
        'form': form,
        'profile': profile
    })

# File: templates/edit_profile.html
"""
<form method="POST" enctype="multipart/form-data">
    {% csrf_token %}
    
    <!-- Show current image -->
    {% if profile.profile_picture %}
        <p>Current picture:</p>
        <img src="{{ profile.profile_picture.url }}" width="100">
    {% endif %}
    
    {{ form.as_p }}
    <button type="submit">Update Profile ✏️</button>
</form>
"""`,language:"python"},{heading:"🗑️ Deleting Files",content:"Remove files from storage when deleting objects!",code:`# File: views.py

import os
from django.conf import settings

def delete_profile(request, profile_id):
    profile = UserProfile.objects.get(id=profile_id)
    
    # Delete the image file from storage
    if profile.profile_picture:
        if os.path.isfile(profile.profile_picture.path):
            os.remove(profile.profile_picture.path)
    
    # Delete the database entry
    profile.delete()
    
    messages.success(request, 'Profile deleted! 🗑️')
    return redirect('home')

# Or use Django signals to auto-delete files:
# File: signals.py

from django.db.models.signals import post_delete
from django.dispatch import receiver
from .models import UserProfile

@receiver(post_delete, sender=UserProfile)
def delete_profile_picture(sender, instance, **kwargs):
    # Delete image file when profile is deleted
    if instance.profile_picture:
        if os.path.isfile(instance.profile_picture.path):
            os.remove(instance.profile_picture.path)`,language:"python",note:"Files don't auto-delete when you delete the model - you need to do it manually! 🧹"},{heading:"📏 File Validation",content:"Make sure users upload the right types and sizes of files!",code:`# File: forms.py

from django import forms
from django.core.exceptions import ValidationError

class ProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ['name', 'profile_picture', 'bio']
    
    def clean_profile_picture(self):
        image = self.cleaned_data.get('profile_picture')
        
        if image:
            # Check file size (5MB max)
            if image.size > 5 * 1024 * 1024:  # 5MB in bytes
                raise ValidationError('Image file too large! Max 5MB 📦')
            
            # Check file extension
            valid_extensions = ['.jpg', '.jpeg', '.png', '.gif']
            ext = os.path.splitext(image.name)[1].lower()
            if ext not in valid_extensions:
                raise ValidationError('Only JPG, PNG, and GIF allowed! 🖼️')
        
        return image

# Or use a custom validator:
from django.core.validators import FileExtensionValidator

class Post(models.Model):
    image = models.ImageField(
        upload_to='posts/',
        validators=[
            FileExtensionValidator(
                allowed_extensions=['jpg', 'jpeg', 'png']
            )
        ]
    )`,language:"python"},{heading:"📁 Dynamic Upload Paths",content:"Organize uploads into folders automatically!",code:`# File: models.py

def user_directory_path(instance, filename):
    # Files saved to: media/user_<id>/<filename>
    return f'user_{instance.user.id}/{filename}'

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to=user_directory_path)

# Or by date:
def date_directory_path(instance, filename):
    # Files saved to: media/2025/12/27/<filename>
    from datetime import date
    today = date.today()
    return f'{today.year}/{today.month}/{today.day}/{filename}'

class Post(models.Model):
    image = models.ImageField(upload_to=date_directory_path)

# Or rename files:
import uuid

def rename_image(instance, filename):
    ext = filename.split('.')[-1]
    new_filename = f'{uuid.uuid4()}.{ext}'
    return f'uploads/{new_filename}'

class Photo(models.Model):
    image = models.ImageField(upload_to=rename_image)`,language:"python"}],challenge:"Create a photo gallery where users can upload and view images! Add validation! 📸"},12:{title:"Class Based Views (CBV)",subtitle:"More powerful views with less code!",emoji:"🏗️",realWorldExample:"Class Based Views are like using power tools instead of hand tools! 🔧 They do common tasks automatically so you write less code!",quickTip:"Use ListView for lists, DetailView for single items, CreateView for forms! ⚡",sections:[{heading:"🤔 CBV vs FBV",content:"Function Based Views vs Class Based Views - what's the difference?",points:["📝 FBV: Simple functions, easy to understand","🏗️ CBV: Reusable classes, less code for common patterns","✅ FBV: Better for unique, custom logic","⚡ CBV: Better for standard CRUD operations","🎯 Both are valid - use what fits best!"],code:`# Function Based View (FBV)
def post_list(request):
    posts = Post.objects.all()
    return render(request, 'post_list.html', {'posts': posts})

# Class Based View (CBV) - same result!
from django.views.generic import ListView

class PostListView(ListView):
    model = Post
    template_name = 'post_list.html'
    context_object_name = 'posts'

# URLs for CBV:
path('posts/', PostListView.as_view(), name='post-list')`,language:"python"},{heading:"📋 ListView - Display List of Items",content:"Show a list of objects from your database!",code:`# File: views.py

from django.views.generic import ListView
from .models import Post

class PostListView(ListView):
    model = Post
    template_name = 'post_list.html'
    context_object_name = 'posts'  # Name in template
    paginate_by = 10  # Show 10 per page
    ordering = ['-created_at']  # Newest first

# File: urls.py
path('posts/', PostListView.as_view(), name='post-list')

# File: templates/post_list.html
"""
<h1>All Posts</h1>

{% for post in posts %}
    <div class="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
    </div>
{% endfor %}

<!-- Pagination -->
{% if is_paginated %}
    <div class="pagination">
        {% if page_obj.has_previous %}
            <a href="?page=1">First</a>
            <a href="?page={{ page_obj.previous_page_number }}">Previous</a>
        {% endif %}
        
        Page {{ page_obj.number }} of {{ page_obj.paginator.num_pages }}
        
        {% if page_obj.has_next %}
            <a href="?page={{ page_obj.next_page_number }}">Next</a>
            <a href="?page={{ page_obj.paginator.num_pages }}">Last</a>
        {% endif %}
    </div>
{% endif %}
"""`,language:"python",note:"ListView automatically handles pagination - super convenient! 📄"},{heading:"🔍 DetailView - Display Single Item",content:"Show details of one specific object!",code:`# File: views.py

from django.views.generic import DetailView
from .models import Post

class PostDetailView(DetailView):
    model = Post
    template_name = 'post_detail.html'
    context_object_name = 'post'

# File: urls.py
path('post/<int:pk>/', PostDetailView.as_view(), name='post-detail')
# pk = primary key (ID)

# File: templates/post_detail.html
"""
<article>
    <h1>{{ post.title }}</h1>
    <p class="meta">By {{ post.author }} on {{ post.created_at }}</p>
    <div class="content">
        {{ post.content }}
    </div>
</article>

<a href="{% url 'post-list' %}">Back to all posts</a>
"""

# Customizing:
class PostDetailView(DetailView):
    model = Post
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Add extra data
        context['related_posts'] = Post.objects.all()[:5]
        return context`,language:"python"},{heading:"➕ CreateView - Add New Items",content:"Create forms to add new database entries!",code:`# File: views.py

from django.views.generic.edit import CreateView
from django.urls import reverse_lazy
from .models import Post

class PostCreateView(CreateView):
    model = Post
    fields = ['title', 'content', 'category']
    template_name = 'post_form.html'
    success_url = reverse_lazy('post-list')  # Redirect after save

# Or use a form class:
from .forms import PostForm

class PostCreateView(CreateView):
    model = Post
    form_class = PostForm
    template_name = 'post_form.html'
    
    def form_valid(self, form):
        # Set author to current user
        form.instance.author = self.request.user
        return super().form_valid(form)
    
    def get_success_url(self):
        # Redirect to the created post
        return reverse_lazy('post-detail', kwargs={'pk': self.object.pk})

# File: urls.py
path('post/new/', PostCreateView.as_view(), name='post-create')

# File: templates/post_form.html
"""
<h1>Create New Post</h1>

<form method="POST">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Create Post ✨</button>
</form>
"""`,language:"python"},{heading:"✏️ UpdateView - Edit Existing Items",content:"Let users edit their data!",code:`# File: views.py

from django.views.generic.edit import UpdateView

class PostUpdateView(UpdateView):
    model = Post
    fields = ['title', 'content', 'category']
    template_name = 'post_form.html'
    
    def get_success_url(self):
        return reverse_lazy('post-detail', kwargs={'pk': self.object.pk})

# File: urls.py
path('post/<int:pk>/edit/', PostUpdateView.as_view(), name='post-edit')

# Same template as CreateView!
# It automatically pre-fills the form with existing data! 🎉

# Restrict to author only:
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin

class PostUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Post
    fields = ['title', 'content']
    
    def test_func(self):
        # Only author can edit
        post = self.get_object()
        return self.request.user == post.author`,language:"python"},{heading:"🗑️ DeleteView - Remove Items",content:"Delete objects with confirmation!",code:`# File: views.py

from django.views.generic.edit import DeleteView

class PostDeleteView(DeleteView):
    model = Post
    template_name = 'post_confirm_delete.html'
    success_url = reverse_lazy('post-list')

# File: urls.py
path('post/<int:pk>/delete/', PostDeleteView.as_view(), name='post-delete')

# File: templates/post_confirm_delete.html
"""
<h1>Delete Post</h1>

<p>Are you sure you want to delete "{{ post.title }}"? 🗑️</p>

<form method="POST">
    {% csrf_token %}
    <button type="submit" class="btn-danger">Yes, Delete</button>
    <a href="{% url 'post-detail' post.pk %}">Cancel</a>
</form>
"""

# Restrict to author:
class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Post
    success_url = reverse_lazy('post-list')
    
    def test_func(self):
        post = self.get_object()
        return self.request.user == post.author`,language:"python",note:"DeleteView shows a confirmation page by default - safety first! 🛡️"},{heading:"🔐 Mixins - Add Superpowers to CBVs",content:"Mixins add extra functionality to your class-based views!",code:`from django.contrib.auth.mixins import (
    LoginRequiredMixin,
    PermissionRequiredMixin,
    UserPassesTestMixin
)

# Only logged-in users can access
class PostCreateView(LoginRequiredMixin, CreateView):
    model = Post
    fields = ['title', 'content']
    login_url = '/login/'  # Where to redirect if not logged in

# Only users with specific permission
class PostCreateView(PermissionRequiredMixin, CreateView):
    model = Post
    fields = ['title', 'content']
    permission_required = 'blog.add_post'

# Custom test (only staff)
class StaffOnlyView(UserPassesTestMixin, ListView):
    model = Post
    
    def test_func(self):
        return self.request.user.is_staff

# Combine multiple mixins!
class PostUpdateView(
    LoginRequiredMixin,
    UserPassesTestMixin,
    UpdateView
):
    model = Post
    fields = ['title', 'content']
    
    def test_func(self):
        # Only author can edit
        post = self.get_object()
        return self.request.user == post.author`,language:"python"},{heading:"🎯 Customizing CBVs",content:"Override methods to customize behavior!",code:`class PostListView(ListView):
    model = Post
    
    # Filter which objects to show
    def get_queryset(self):
        # Only published posts
        return Post.objects.filter(is_published=True)
    
    # Add extra context
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['total_posts'] = Post.objects.count()
        context['categories'] = Category.objects.all()
        return context

class PostCreateView(CreateView):
    model = Post
    fields = ['title', 'content']
    
    # Before saving
    def form_valid(self, form):
        # Add author automatically
        form.instance.author = self.request.user
        messages.success(self.request, 'Post created! 🎉')
        return super().form_valid(form)
    
    # If form has errors
    def form_invalid(self, form):
        messages.error(self.request, 'Please fix the errors! ❌')
        return super().form_invalid(form)
    
    # Change template based on condition
    def get_template_names(self):
        if self.request.user.is_staff:
            return ['admin_post_form.html']
        return ['post_form.html']`,language:"python"}],challenge:"Convert one of your function-based views to a class-based view! See how much shorter it gets! 🚀"}},Yy={13:{title:"Middleware",subtitle:"Process requests before they reach views!",emoji:"⚙️",realWorldExample:"Middleware is like a security checkpoint at an airport! ✈️ Every request passes through it before reaching your views - perfect for logging, authentication checks, and more!",quickTip:"Middleware runs on EVERY request - use it wisely! ⚡",sections:[{heading:"🤔 What is Middleware?",content:"Middleware is code that runs before AND after every view! Think of it as a processing pipeline!",points:["Runs on EVERY request automatically","Can modify requests before they reach views","Can modify responses after views finish","Perfect for cross-cutting concerns (auth, logging, etc.)","Django comes with built-in middleware!"],code:`# Request → Middleware → View → Middleware → Response

# File: settings.py
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# Order matters! Top to bottom on request, bottom to top on response!`,language:"python"},{heading:"🏗️ Creating Custom Middleware",content:"Build your own middleware to add custom processing!",code:`# File: myapp/middleware.py

class SimpleMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration
        print("Middleware initialized!")
    
    def __call__(self, request):
        # Code that runs BEFORE the view
        print(f"Request to: {request.path}")
        
        # Call the view
        response = self.get_response(request)
        
        # Code that runs AFTER the view
        print(f"Response status: {response.status_code}")
        
        return response

# Add to settings.py:
MIDDLEWARE = [
    # ... other middleware ...
    'myapp.middleware.SimpleMiddleware',
]`,language:"python"},{heading:"📊 Logging Middleware Example",content:"Log every request to your website!",code:`# File: myapp/middleware.py

import time
import logging

logger = logging.getLogger(__name__)

class RequestLoggingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
    
    def __call__(self, request):
        # Start timer
        start_time = time.time()
        
        # Log request
        logger.info(f"🌐 {request.method} {request.path}")
        
        # Process request
        response = self.get_response(request)
        
        # Calculate time taken
        duration = time.time() - start_time
        
        # Log response
        logger.info(
            f"✅ {response.status_code} | "
            f"{request.path} | "
            f"{duration:.2f}s"
        )
        
        return response`,language:"python",note:"Great for debugging - see exactly what's happening on your server! 🔍"},{heading:"👤 User Activity Middleware",content:"Track what users are doing!",code:`# File: myapp/middleware.py

class UserActivityMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
    
    def __call__(self, request):
        # Check if user is logged in
        if request.user.is_authenticated:
            # Update last activity
            from django.utils import timezone
            request.user.last_activity = timezone.now()
            request.user.save(update_fields=['last_activity'])
        
        response = self.get_response(request)
        return response

# Need to add last_activity field to User model first!
# Or create a UserProfile model with this field`,language:"python"},{heading:"🚫 Blocking Middleware",content:"Block certain requests before they reach views!",code:`# File: myapp/middleware.py

from django.http import HttpResponseForbidden

class BlockIPMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        self.blocked_ips = ['192.168.1.100', '10.0.0.5']
    
    def __call__(self, request):
        # Get user's IP
        ip = self.get_client_ip(request)
        
        # Block if in blocked list
        if ip in self.blocked_ips:
            return HttpResponseForbidden("You are blocked! 🚫")
        
        response = self.get_response(request)
        return response
    
    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip`,language:"python"},{heading:"🎯 Adding Custom Headers",content:"Add headers to all responses!",code:`# File: myapp/middleware.py

class CustomHeaderMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
    
    def __call__(self, request):
        response = self.get_response(request)
        
        # Add custom headers
        response['X-Powered-By'] = 'Django 🐍'
        response['X-Developer'] = 'Cool Coder'
        response['X-Response-Time'] = 'Fast ⚡'
        
        return response

# Now all responses have these headers!`,language:"python"},{heading:"⚠️ Exception Handling Middleware",content:"Catch errors before they crash your site!",code:`# File: myapp/middleware.py

import logging

logger = logging.getLogger(__name__)

class ErrorHandlingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
    
    def __call__(self, request):
        return self.get_response(request)
    
    def process_exception(self, request, exception):
        # Log the error
        logger.error(
            f"❌ Error at {request.path}: {str(exception)}",
            exc_info=True
        )
        
        # You could send an email, save to database, etc.
        
        # Return None to let Django handle it normally
        # Or return a custom response
        return None`,language:"python"},{heading:"🔄 Request/Response Processing Methods",content:"Special methods you can add to middleware!",code:`class AdvancedMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
    
    def __call__(self, request):
        # Before view
        response = self.get_response(request)
        # After view
        return response
    
    def process_view(self, request, view_func, view_args, view_kwargs):
        # Called just before Django calls the view
        print(f"About to call view: {view_func.__name__}")
        return None  # or return HttpResponse to stop
    
    def process_exception(self, request, exception):
        # Called if view raises an exception
        logger.error(f"Error: {exception}")
        return None
    
    def process_template_response(self, request, response):
        # Called if response has render() method
        # Modify context or template here
        return response`,language:"python",note:"These special methods give you even more control! 🎛️"}],challenge:"Create a middleware that counts how many people visit your site and displays it! 📊"},14:{title:"Signals",subtitle:"Make things happen automatically!",emoji:"📡",realWorldExample:"Signals are like setting up dominoes! 🎲 When one thing happens (a user signs up), Django can automatically trigger another thing (send welcome email)!",quickTip:"Use signals to keep your code organized and automatic! 🎯",sections:[{heading:"📻 What are Signals?",content:"Signals let you run code automatically when certain events happen!",points:["Signals are notifications sent when actions occur","Like event listeners in JavaScript!","Django has built-in signals for common actions","You can create custom signals too","Great for keeping code decoupled and organized"],code:`# Example: When a user signs up...
# Signal: "Hey! A new user was created!"
# Your code: "Cool! Let's send them a welcome email!"

# Benefits:
# ✓ Keeps code organized
# ✓ Separates concerns
# ✓ Easy to add new actions
# ✓ Don't need to modify existing code`,language:"python"},{heading:"🎯 Built-in Django Signals",content:"Django comes with useful signals ready to use!",code:`# Model Signals (from django.db.models.signals):

pre_save        # Before model.save()
post_save       # After model.save()
pre_delete      # Before model.delete()
post_delete     # After model.delete()
m2m_changed     # When ManyToMany field changes

# Request/Response Signals (from django.core.signals):

request_started   # When HTTP request starts
request_finished  # When HTTP request ends

# User Signals (from django.contrib.auth.signals):

user_logged_in    # When user logs in
user_logged_out   # When user logs out
user_login_failed # When login fails`,language:"python"},{heading:"✨ Using post_save Signal",content:"Run code after saving a model!",code:`# File: myapp/signals.py (create this file)

from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import UserProfile

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    """
    Automatically create a profile when user is created
    """
    if created:  # Only for new users
        UserProfile.objects.create(user=instance)
        print(f"✅ Profile created for {instance.username}!")

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    """
    Save profile when user is saved
    """
    instance.userprofile.save()

# File: myapp/apps.py
class MyappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'myapp'
    
    def ready(self):
        import myapp.signals  # Import signals`,language:"python",note:"Now every new user automatically gets a profile! No code needed in views! 🎉"},{heading:"📧 Sending Email on User Registration",content:"Welcome new users automatically!",code:`# File: myapp/signals.py

from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from django.core.mail import send_mail

@receiver(post_save, sender=User)
def send_welcome_email(sender, instance, created, **kwargs):
    if created:
        send_mail(
            subject='Welcome to our site! 🎉',
            message=f'Hi {instance.username}! Thanks for joining!',
            from_email='noreply@mysite.com',
            recipient_list=[instance.email],
            fail_silently=True,
        )
        print(f"📧 Welcome email sent to {instance.email}")

# Now every new user gets a welcome email automatically!`,language:"python"},{heading:"🗑️ Using pre_delete Signal",content:"Do something before an object is deleted!",code:`# File: myapp/signals.py

from django.db.models.signals import pre_delete, post_delete
from django.dispatch import receiver
from .models import Post
import logging

logger = logging.getLogger(__name__)

@receiver(pre_delete, sender=Post)
def log_post_deletion(sender, instance, **kwargs):
    """
    Log before deleting a post
    """
    logger.warning(
        f"🗑️ About to delete post: {instance.title} by {instance.author}"
    )

@receiver(post_delete, sender=Post)
def delete_post_files(sender, instance, **kwargs):
    """
    Delete associated files after post is deleted
    """
    if instance.image:
        # Delete the image file
        import os
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)
            print(f"🖼️ Deleted image: {instance.image.name}")`,language:"python"},{heading:"🔑 User Login/Logout Signals",content:"Track when users log in and out!",code:`# File: myapp/signals.py

from django.contrib.auth.signals import (
    user_logged_in,
    user_logged_out,
    user_login_failed
)
from django.dispatch import receiver
from django.utils import timezone

@receiver(user_logged_in)
def on_user_logged_in(sender, request, user, **kwargs):
    """
    Track when user logs in
    """
    print(f"👋 {user.username} logged in at {timezone.now()}")
    
    # Update last login
    user.last_login = timezone.now()
    user.save()
    
    # Or create a login history entry
    # LoginHistory.objects.create(user=user, ip=get_client_ip(request))

@receiver(user_logged_out)
def on_user_logged_out(sender, request, user, **kwargs):
    """
    Track when user logs out
    """
    if user:
        print(f"👋 {user.username} logged out")

@receiver(user_login_failed)
def on_user_login_failed(sender, credentials, request, **kwargs):
    """
    Track failed login attempts
    """
    username = credentials.get('username')
    print(f"❌ Failed login attempt for: {username}")`,language:"python"},{heading:"🎨 Creating Custom Signals",content:"Make your own signals for custom events!",code:`# File: myapp/signals.py

from django.dispatch import Signal, receiver

# Create custom signal
post_published = Signal()  # When a blog post is published

# File: myapp/views.py

from .signals import post_published

def publish_post(request, post_id):
    post = Post.objects.get(id=post_id)
    post.is_published = True
    post.save()
    
    # Send the signal!
    post_published.send(
        sender=Post,
        post=post,
        published_by=request.user
    )
    
    return redirect('post-detail', id=post.id)

# File: myapp/handlers.py

@receiver(post_published)
def notify_subscribers(sender, post, published_by, **kwargs):
    """
    Notify all subscribers when post is published
    """
    print(f"📢 Post published: {post.title}")
    # Send emails to subscribers
    subscribers = post.author.subscribers.all()
    for subscriber in subscribers:
        send_mail(
            subject=f'New post from {post.author}!',
            message=f'{post.title}\\n\\n{post.content[:100]}...',
            from_email='noreply@mysite.com',
            recipient_list=[subscriber.email],
        )

@receiver(post_published)
def create_notification(sender, post, published_by, **kwargs):
    """
    Create in-app notification
    """
    Notification.objects.create(
        user=post.author,
        message=f'Your post "{post.title}" is now live! 🎉'
    )`,language:"python",note:"Custom signals let you create your own events! Super powerful! 💪"},{heading:"⚡ Signal Best Practices",content:"Tips for using signals effectively!",points:["✓ Keep signal handlers simple and fast","✓ Don't do heavy processing in signals","✓ Use signals for side effects, not core logic","✓ Be careful of infinite loops (signal triggering signal)","✓ Document your signals well","✓ Consider using Celery for slow tasks (emails, etc.)"],code:`# Good: Simple, fast operations
@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)  # Fast! ✅

# Bad: Slow operations
@receiver(post_save, sender=User)
def slow_operation(sender, instance, created, **kwargs):
    if created:
        # This is too slow! ❌
        send_100_emails()
        resize_50_images()
        call_slow_api()

# Better: Use background tasks
@receiver(post_save, sender=User)
def trigger_background_task(sender, instance, created, **kwargs):
    if created:
        # Send to background queue
        send_welcome_email.delay(instance.id)  # Celery task`,language:"python"}],challenge:"Create a signal that sends you a message every time someone creates a post! 📬"},15:{title:"Django REST Framework (DRF)",subtitle:"Build powerful APIs!",emoji:"🚀",realWorldExample:"APIs are like a waiter at a restaurant! 🍽️ Your app asks the API for data (order food), and the API brings it back in a format your app can use (delivers your meal)!",quickTip:"REST APIs let mobile apps, other websites, and more talk to your Django backend! 📱",sections:[{heading:"🌐 What is a REST API?",content:"REST APIs let different programs talk to your Django app!",points:["API = Application Programming Interface","REST = Representational State Transfer (a style)","Send data as JSON (like a dictionary)","Use HTTP methods: GET, POST, PUT, DELETE","Perfect for mobile apps, JavaScript frontends","Works with any programming language!"],code:`# Example API Request:
GET /api/posts/

# Response (JSON):
[
    {"id": 1, "title": "Hello World", "author": "Alex"},
    {"id": 2, "title": "Django is Cool", "author": "Sam"}
]

# Your mobile app, website, or any program can use this!`,language:"json"},{heading:"📦 Installing Django REST Framework",content:"First, install DRF!",code:`# Install Django REST Framework
pip install djangorestframework

# File: settings.py

INSTALLED_APPS = [
    # ... other apps ...
    'rest_framework',
]

# Optional: Add settings
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10
}`,language:"python",note:"DRF is a separate package that adds API superpowers to Django! 🦸"},{heading:"📝 Creating a Serializer",content:"Serializers convert Python objects to JSON and back!",code:`# File: myapp/serializers.py (create this file)

from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'author', 'created_at']
        # Or use '__all__' for all fields

# What it does:
post = Post.objects.get(id=1)
serializer = PostSerializer(post)
print(serializer.data)
# Output: {'id': 1, 'title': 'Hello', 'content': '...', ...}

# Convert back:
serializer = PostSerializer(data={'title': 'New Post', 'content': '...'})
if serializer.is_valid():
    serializer.save()  # Creates a Post!`,language:"python"},{heading:"🎯 Creating API Views",content:"Build views that return JSON instead of HTML!",code:`# File: myapp/views.py

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Post
from .serializers import PostSerializer

@api_view(['GET'])
def post_list(request):
    """
    List all posts
    """
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)  # many=True for lists
    return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
def post_detail(request, pk):
    """
    Get, update, or delete a specific post
    """
    try:
        post = Post.objects.get(pk=pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = PostSerializer(post)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# File: myapp/urls.py

urlpatterns = [
    path('api/posts/', post_list),
    path('api/posts/<int:pk>/', post_detail),
]`,language:"python"},{heading:"🏗️ Using ViewSets (Easier!)",content:"ViewSets make APIs even easier - all CRUD in one class!",code:`# File: myapp/views.py

from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    """
    Automatically provides:
    - list (GET /posts/)
    - create (POST /posts/)
    - retrieve (GET /posts/1/)
    - update (PUT /posts/1/)
    - destroy (DELETE /posts/1/)
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer

# File: myapp/urls.py

from rest_framework.routers import DefaultRouter
from .views import PostViewSet

router = DefaultRouter()
router.register(r'posts', PostViewSet)

urlpatterns = router.urls

# That's it! All CRUD operations work automatically! 🎉`,language:"python",note:"ViewSets are like magic - write 4 lines, get a complete API! ✨"},{heading:"🔐 API Authentication",content:"Protect your API so only authorized users can access it!",code:`# File: settings.py

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ],
}

# Token Authentication:

# 1. Add to INSTALLED_APPS
INSTALLED_APPS = [
    # ...
    'rest_framework.authtoken',
]

# 2. Run migrations
python manage.py migrate

# 3. Create tokens for users
from rest_framework.authtoken.models import Token
token = Token.objects.create(user=user)
print(token.key)  # Give this to the client

# 4. Client sends token in header:
# Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b

# File: views.py
from rest_framework.permissions import IsAuthenticated

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]  # Must be logged in!`,language:"python"},{heading:"🎨 Custom Serializer Fields",content:"Control exactly what data is returned!",code:`# File: serializers.py

from rest_framework import serializers
from .models import Post, Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'text', 'author', 'created_at']

class PostSerializer(serializers.ModelSerializer):
    # Include related comments
    comments = CommentSerializer(many=True, read_only=True)
    
    # Custom field
    comment_count = serializers.SerializerMethodField()
    
    # Make author_name instead of just author ID
    author_name = serializers.CharField(source='author.username', read_only=True)
    
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'author_name', 'comments', 'comment_count']
    
    def get_comment_count(self, obj):
        return obj.comments.count()

# Result:
{
    "id": 1,
    "title": "Hello",
    "content": "...",
    "author_name": "Alex",
    "comment_count": 5,
    "comments": [
        {"id": 1, "text": "Nice!", ...},
        {"id": 2, "text": "Cool!", ...}
    ]
}`,language:"python"},{heading:"🔍 Filtering & Searching",content:"Let users search and filter your API!",code:`# Install django-filter
pip install django-filter

# File: settings.py

INSTALLED_APPS = [
    # ...
    'django_filters',
]

REST_FRAMEWORK = {
    'DEFAULT_FILTER_BACKENDS': [
        'django_filters.rest_framework.DjangoFilterBackend',
        'rest_framework.filters.SearchFilter',
        'rest_framework.filters.OrderingFilter',
    ],
}

# File: views.py

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filterset_fields = ['author', 'category', 'is_published']
    search_fields = ['title', 'content']
    ordering_fields = ['created_at', 'title']

# Now you can use:
# /api/posts/?author=1              # Filter by author
# /api/posts/?search=django         # Search in title/content
# /api/posts/?ordering=-created_at  # Order by newest`,language:"python"},{heading:"📱 Testing Your API",content:"Use these tools to test your API!",code:`# 1. Django REST Framework Web Interface
# Just visit your API URL in a browser!
# http://localhost:8000/api/posts/
# You'll see a beautiful interface to test your API! 🎨

# 2. Using curl (command line)
curl http://localhost:8000/api/posts/

# 3. Using Python requests
import requests

# GET request
response = requests.get('http://localhost:8000/api/posts/')
print(response.json())

# POST request
data = {'title': 'New Post', 'content': 'Hello!'}
response = requests.post('http://localhost:8000/api/posts/', json=data)

# With authentication
headers = {'Authorization': 'Token YOUR_TOKEN_HERE'}
response = requests.get('http://localhost:8000/api/posts/', headers=headers)

# 4. Browser tools: Postman, Insomnia (free!)`,language:"python",note:"DRF's built-in interface makes testing super easy! Just use your browser! 🌐"}],challenge:"Create a simple API for your favorite books! Include title, author, and rating! 📚"},16:{title:"Security in Django",subtitle:"Keep your website safe from bad guys!",emoji:"🛡️",realWorldExample:"Security is like having locks on your doors and windows! 🔒 Django comes with built-in protection against common attacks - it's like having a security guard!",quickTip:"Django protects you automatically from many attacks - but you still need to follow best practices! 🛡️",sections:[{heading:"🔐 Django's Built-in Security",content:"Django protects you from common attacks automatically!",points:["🛡️ CSRF Protection - Stops fake form submissions","🚫 SQL Injection Protection - ORM prevents malicious database queries","⚠️ XSS Protection - Auto-escapes HTML in templates","🔒 Password Hashing - Never stores plain text passwords","🎯 Clickjacking Protection - Prevents your site being framed","✅ Security middleware enabled by default"],code:`# Django does this automatically:

# 1. CSRF Protection
{% csrf_token %}  # In every form

# 2. SQL Injection Prevention
User.objects.filter(username=user_input)  # Safe! ✅
# vs raw SQL with user input (dangerous!) ❌

# 3. XSS Protection
{{ user_input }}  # Automatically escaped!
{{ user_input|safe }}  # Only if you trust it!

# 4. Password Hashing
user.set_password('plain_password')  # Automatically hashed!`,language:"django",note:"Django is secure by default - but you need to use it correctly! 🎯"},{heading:"🔑 Secure Password Storage",content:"Django handles passwords safely!",code:`# ALWAYS use these methods:

from django.contrib.auth.models import User

# Create user (password auto-hashed)
user = User.objects.create_user(
    username='alex',
    password='secretpassword'
)

# Check password
if user.check_password('secretpassword'):
    print("Correct! ✅")

# Change password
user.set_password('newpassword')
user.save()

# NEVER do this:
user.password = 'plaintext'  # ❌ WRONG!

# Password is stored as:
# "pbkdf2_sha256$260000$..." (hashed and salted)`,language:"python"},{heading:"🌐 HTTPS and Secure Settings",content:"Important security settings for production!",code:`# File: settings.py (for production)

# Force HTTPS
SECURE_SSL_REDIRECT = True

# Secure cookies
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

# Prevent browsers from guessing content type
SECURE_CONTENT_TYPE_NOSNIFF = True

# Enable browser XSS protection
SECURE_BROWSER_XSS_FILTER = True

# Prevent clickjacking
X_FRAME_OPTIONS = 'DENY'

# HSTS - Force HTTPS for specified time
SECURE_HSTS_SECONDS = 31536000  # 1 year
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True

# Hide Django version
SECURE_REFERRER_POLICY = 'same-origin'`,language:"python",note:"Only enable these in production with HTTPS! 🔒"},{heading:"🚫 Protecting Against CSRF",content:"CSRF = Cross-Site Request Forgery. Django stops it automatically!",code:`# Always include CSRF token in forms:

<!-- ✅ Safe Form -->
<form method="POST">
    {% csrf_token %}
    <input type="text" name="username">
    <button type="submit">Submit</button>
</form>

<!-- ❌ Unsafe Form - will be rejected! -->
<form method="POST">
    <input type="text" name="username">
    <button type="submit">Submit</button>
</form>

# In AJAX requests:
fetch('/api/endpoint/', {
    method: 'POST',
    headers: {
        'X-CSRFToken': getCookie('csrftoken'),
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});`,language:"django"},{heading:"✨ Preventing XSS Attacks",content:"XSS = Cross-Site Scripting. Django escapes HTML automatically!",code:`# Django automatically escapes dangerous HTML:

# User enters: <script>alert('hacked!')<\/script>
{{ user_input }}
# Renders as: &lt;script&gt;alert('hacked!')&lt;/script&gt;
# Browser shows it as text, not code! ✅

# Only mark as safe if you trust the source:
{{ trusted_html|safe }}  # Use carefully!

# In Python code:
from django.utils.html import escape

safe_text = escape(user_input)  # Escapes HTML

# Allow specific HTML tags:
from django.utils.html import strip_tags

clean_text = strip_tags(user_input)  # Removes all HTML`,language:"django",note:"Never use |safe on user input unless you know it's safe! 🚨"},{heading:"🔐 Environment Variables for Secrets",content:"Never hardcode secrets in code!",code:`# ❌ BAD - secrets in code:
SECRET_KEY = 'django-insecure-hardcoded-key-123'
DATABASE_PASSWORD = 'mypassword123'

# ✅ GOOD - use environment variables:

# 1. Install python-decouple
pip install python-decouple

# 2. Create .env file (add to .gitignore!)
# File: .env
SECRET_KEY=your-secret-key-here
DEBUG=False
DATABASE_URL=postgres://user:pass@localhost/dbname

# 3. Use in settings.py
from decouple import config

SECRET_KEY = config('SECRET_KEY')
DEBUG = config('DEBUG', default=False, cast=bool)
DATABASE_URL = config('DATABASE_URL')

# 4. Add .env to .gitignore
echo ".env" >> .gitignore

# Secrets never go to GitHub! 🎉`,language:"python"},{heading:"👤 User Input Validation",content:"Always validate and sanitize user input!",code:`# Use Django forms for validation:

from django import forms

class CommentForm(forms.Form):
    text = forms.CharField(
        max_length=500,
        min_length=1,
        strip=True  # Remove whitespace
    )
    email = forms.EmailField()  # Validates email format
    
    def clean_text(self):
        text = self.cleaned_data['text']
        
        # Check for spam keywords
        spam_words = ['spam', 'viagra', 'casino']
        if any(word in text.lower() for word in spam_words):
            raise forms.ValidationError('Spam detected! 🚫')
        
        return text

# Never trust user input:
# ❌ eval(user_input)  # VERY DANGEROUS!
# ❌ exec(user_input)  # VERY DANGEROUS!

# Always validate file uploads:
def clean_file(self):
    file = self.cleaned_data['file']
    if file.size > 5 * 1024 * 1024:  # 5MB
        raise forms.ValidationError('File too large!')
    return file`,language:"python"},{heading:"🎯 Security Best Practices",content:"Follow these tips to keep your site secure!",points:["✓ Keep Django and packages updated","✓ Use strong SECRET_KEY (long, random)","✓ Set DEBUG = False in production","✓ Use ALLOWED_HOSTS in production","✓ Always use {% csrf_token %} in forms","✓ Never store passwords in plain text","✓ Use environment variables for secrets","✓ Validate all user input","✓ Use HTTPS in production","✓ Regular security audits"],code:`# File: settings.py (Production)

# ✅ Good production settings:
DEBUG = False
ALLOWED_HOSTS = ['yourdomain.com', 'www.yourdomain.com']
SECRET_KEY = config('SECRET_KEY')  # From environment variable

# ✅ Keep packages updated:
pip install --upgrade django
pip list --outdated

# ✅ Security checklist:
python manage.py check --deploy`,language:"python"}],challenge:"Run python manage.py check --deploy and fix any security warnings! 🔒"},17:{title:"Testing & Debugging",subtitle:"Find and fix bugs like a detective!",emoji:"🐛",realWorldExample:"Testing is like checking your homework before turning it in! ✅ You make sure everything works correctly so users don't find problems later!",quickTip:"Write tests as you code - it saves time finding bugs later! 🎯",sections:[{heading:"🧪 Why Test?",content:"Testing helps you find bugs before your users do!",points:["✓ Catch bugs early","✓ Make sure your code actually works","✓ Prevent regressions (old bugs coming back)","✓ Document how your code should work","✓ Confidence to refactor code","✓ Professional development practice"],code:`# Without tests:
# 😰 "Did I break something?"
# 😱 "Users found a bug!"
# 😭 "I can't remember how this works!"

# With tests:
# 😊 "All tests pass - deploy with confidence!"
# 🎉 "Tests caught the bug before users saw it!"
# 💪 "Tests document how it works!"`,language:"python"},{heading:"✅ Writing Your First Test",content:"Django makes testing easy!",code:`# File: myapp/tests.py

from django.test import TestCase
from .models import Post

class PostModelTest(TestCase):
    def setUp(self):
        # Runs before each test
        Post.objects.create(
            title="Test Post",
            content="Test content"
        )
    
    def test_post_creation(self):
        """Test that post was created correctly"""
        post = Post.objects.get(title="Test Post")
        self.assertEqual(post.content, "Test content")
        self.assertIsNotNone(post.created_at)
    
    def test_post_str(self):
        """Test __str__ method"""
        post = Post.objects.get(title="Test Post")
        self.assertEqual(str(post), "Test Post")
    
    def test_post_count(self):
        """Test post count"""
        count = Post.objects.count()
        self.assertEqual(count, 1)

# Run tests:
python manage.py test`,language:"python",note:'Each test method must start with "test_" 🎯'},{heading:"🎯 Testing Views",content:"Test that your views work correctly!",code:`# File: myapp/tests.py

from django.test import TestCase, Client
from django.urls import reverse
from .models import Post

class PostViewTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.post = Post.objects.create(
            title="Test Post",
            content="Test content"
        )
    
    def test_post_list_view(self):
        """Test post list view"""
        response = self.client.get(reverse('post-list'))
        
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Test Post")
        self.assertTemplateUsed(response, 'post_list.html')
    
    def test_post_detail_view(self):
        """Test post detail view"""
        url = reverse('post-detail', args=[self.post.id])
        response = self.client.get(url)
        
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Test content")
    
    def test_post_create_view(self):
        """Test creating a post"""
        response = self.client.post(reverse('post-create'), {
            'title': 'New Post',
            'content': 'New content'
        })
        
        self.assertEqual(response.status_code, 302)  # Redirect
        self.assertTrue(Post.objects.filter(title='New Post').exists())`,language:"python"},{heading:"🔐 Testing Authentication",content:"Test login, logout, and permissions!",code:`# File: myapp/tests.py

from django.test import TestCase
from django.contrib.auth.models import User

class AuthenticationTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser',
            password='testpass123'
        )
    
    def test_login(self):
        """Test user can log in"""
        logged_in = self.client.login(
            username='testuser',
            password='testpass123'
        )
        self.assertTrue(logged_in)
    
    def test_protected_view(self):
        """Test protected view requires login"""
        # Without login
        response = self.client.get(reverse('profile'))
        self.assertEqual(response.status_code, 302)  # Redirects to login
        
        # With login
        self.client.login(username='testuser', password='testpass123')
        response = self.client.get(reverse('profile'))
        self.assertEqual(response.status_code, 200)  # Success!`,language:"python"},{heading:"📝 Testing Forms",content:"Make sure your forms validate correctly!",code:`# File: myapp/tests.py

from django.test import TestCase
from .forms import PostForm

class PostFormTest(TestCase):
    def test_valid_form(self):
        """Test form with valid data"""
        form = PostForm(data={
            'title': 'Test Post',
            'content': 'Test content'
        })
        self.assertTrue(form.is_valid())
    
    def test_invalid_form_empty_title(self):
        """Test form rejects empty title"""
        form = PostForm(data={
            'title': '',
            'content': 'Test content'
        })
        self.assertFalse(form.is_valid())
        self.assertIn('title', form.errors)
    
    def test_title_too_short(self):
        """Test title minimum length"""
        form = PostForm(data={
            'title': 'Hi',  # Too short
            'content': 'Test content'
        })
        self.assertFalse(form.is_valid())`,language:"python"},{heading:"🔍 Debugging with Print Statements",content:"The simplest debugging technique!",code:`# File: views.py

def my_view(request):
    print("🔍 View called!")
    print(f"Method: {request.method}")
    print(f"User: {request.user}")
    
    posts = Post.objects.all()
    print(f"📊 Found {posts.count()} posts")
    
    for post in posts:
        print(f"  - {post.title}")
    
    return render(request, 'template.html', {'posts': posts})

# Check your terminal/console to see the output!`,language:"python",note:"Print statements are simple but effective! 🎯"},{heading:"🐛 Using Django Debug Toolbar",content:"See exactly what's happening in your Django app!",code:`# Install:
pip install django-debug-toolbar

# File: settings.py

INSTALLED_APPS = [
    # ...
    'debug_toolbar',
]

MIDDLEWARE = [
    # ...
    'debug_toolbar.middleware.DebugToolbarMiddleware',
]

INTERNAL_IPS = [
    '127.0.0.1',
]

# File: urls.py

import debug_toolbar

urlpatterns = [
    # ...
    path('__debug__/', include(debug_toolbar.urls)),
]

# Now visit your site - you'll see a toolbar on the right!
# Shows: SQL queries, templates used, time taken, and more! 🎉`,language:"python"},{heading:"📊 Test Coverage",content:"See how much of your code is tested!",code:`# Install coverage:
pip install coverage

# Run tests with coverage:
coverage run --source='.' manage.py test

# See coverage report:
coverage report

# Results:
# Name                  Stmts   Miss  Cover
# -----------------------------------------
# myapp/models.py          20      2    90%
# myapp/views.py           30      5    83%
# myapp/forms.py           15      0   100%
# -----------------------------------------
# TOTAL                    65      7    89%

# Generate HTML report:
coverage html
# Open htmlcov/index.html in browser for detailed view

# Aim for 80%+ coverage! 🎯`,language:"bash"},{heading:"💡 Debugging Tips",content:"Become a debugging master!",points:["🔍 Read error messages carefully - they tell you what's wrong!","📍 Check the line number in the error","🖨️ Use print() statements to see what's happening","🐛 Use Django Debug Toolbar to see queries and timing","📝 Add logging instead of print for production","🧪 Write tests to catch bugs early","🔄 Use git to see what changed recently","💬 Ask for help - describe what you tried","🎯 Break complex code into smaller functions","☕ Take a break - fresh eyes find bugs faster!"],code:`# Common debugging workflow:

# 1. Read the error message
# Traceback tells you EXACTLY where the error is!

# 2. Add print statements
print(f"🔍 Value of x: {x}")
print(f"🔍 Type of y: {type(y)}")

# 3. Check your logic
if condition:
    print("✅ Condition is True")
else:
    print("❌ Condition is False")

# 4. Test small pieces
# Instead of testing the whole view, test just the function

# 5. Use the Django shell
python manage.py shell
>>> from myapp.models import Post
>>> Post.objects.all()
# Try your code interactively!`,language:"python"}],challenge:"Write tests for one of your models and one of your views! Aim for 100% coverage! 🎯"},18:{title:"Deployment",subtitle:"Launch your website to the world!",emoji:"🌍",realWorldExample:"Deployment is like opening your lemonade stand to customers! 🍋 You've built everything, now it's time to let everyone visit your website on the internet!",quickTip:"Start with easy platforms like Render or Railway - they're free and beginner-friendly! 🚀",sections:[{heading:"🎯 Development vs Production",content:"Your local computer vs the real internet!",points:["💻 Development: Your computer, DEBUG=True, small database","🌍 Production: Server on internet, DEBUG=False, real users","🔧 Development: Quick changes, errors are OK","🛡️ Production: Stable, secure, fast, no errors!","📊 Production needs: Database, static files, HTTPS, domain name"],code:`# File: settings.py (before deployment)

# ❌ Development settings:
DEBUG = True
ALLOWED_HOSTS = []
SECRET_KEY = 'django-insecure-hardcoded...'

# ✅ Production settings:
DEBUG = False
ALLOWED_HOSTS = ['yourdomain.com', 'www.yourdomain.com']
SECRET_KEY = os.environ.get('SECRET_KEY')  # From environment variable`,language:"python"},{heading:"📦 Preparing for Deployment",content:"Get your project ready for the world!",code:`# 1. Create requirements.txt
pip freeze > requirements.txt

# 2. Create .env file for secrets
# File: .env (add to .gitignore!)
SECRET_KEY=your-secret-key-here
DEBUG=False
DATABASE_URL=postgres://...

# 3. Update settings.py
from decouple import config

SECRET_KEY = config('SECRET_KEY')
DEBUG = config('DEBUG', default=False, cast=bool)

# 4. Set ALLOWED_HOSTS
ALLOWED_HOSTS = ['yourdomain.com', '.herokuapp.com']

# 5. Configure static files
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATIC_URL = '/static/'

# 6. Create Procfile (for some platforms)
# File: Procfile
web: gunicorn myproject.wsgi

# 7. Install gunicorn
pip install gunicorn
pip freeze > requirements.txt`,language:"python"},{heading:"🚀 Deploy to Render (Easy & Free!)",content:"Render is beginner-friendly and has a free tier!",code:`# Step 1: Prepare your project
pip install gunicorn whitenoise
pip freeze > requirements.txt

# Step 2: Update settings.py
# Add whitenoise for static files
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',  # Add this!
    # ... other middleware ...
]

STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Step 3: Create build.sh
#!/usr/bin/env bash
set -o errexit

pip install -r requirements.txt
python manage.py collectstatic --no-input
python manage.py migrate

# Step 4: Push to GitHub
git init
git add .
git commit -m "Ready for deployment"
git push

# Step 5: Go to render.com
# 1. Sign up with GitHub
# 2. Create new Web Service
# 3. Connect your repository
# 4. Set build command: ./build.sh
# 5. Set start command: gunicorn myproject.wsgi:application
# 6. Add environment variables (SECRET_KEY, etc.)
# 7. Click Deploy!

# Your site is live! 🎉`,language:"bash",note:"Render is super easy for beginners! Free tier available! 🎁"},{heading:"🎨 Collecting Static Files",content:"Get your CSS, JS, and images ready for production!",code:`# File: settings.py

import os

# Static files (CSS, JavaScript, Images)
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

# Media files (user uploads)
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# Install whitenoise for serving static files
pip install whitenoise

# Add to MIDDLEWARE (settings.py)
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',  # Right after SecurityMiddleware
    # ...
]

# Collect static files
python manage.py collectstatic

# This copies all static files to STATIC_ROOT folder`,language:"python"},{heading:"🗄️ Database for Production",content:"Use a real database (not SQLite) for production!",code:`# For production, use PostgreSQL

# Install:
pip install psycopg2-binary dj-database-url

# File: settings.py

import dj_database_url

# Development database
if DEBUG:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }
else:
    # Production database (from environment variable)
    DATABASES = {
        'default': dj_database_url.config(
            default=config('DATABASE_URL')
        )
    }

# Most hosting platforms provide DATABASE_URL automatically!`,language:"python"},{heading:"✅ Pre-Deployment Checklist",content:"Make sure everything is ready!",points:["☑️ DEBUG = False in production","☑️ SECRET_KEY in environment variable","☑️ ALLOWED_HOSTS configured","☑️ requirements.txt up to date","☑️ Static files collected","☑️ Database migrations run","☑️ HTTPS enabled","☑️ Environment variables set","☑️ Tests passing","☑️ Security check: python manage.py check --deploy"],code:`# Run Django's deployment checklist:
python manage.py check --deploy

# Fix any warnings or errors!

# Test your production settings locally:
DEBUG=False python manage.py runserver

# Make sure everything still works!`,language:"bash"},{heading:"🎓 After Deployment",content:"Your site is live - now what?",points:["🎉 Visit your live website!","📊 Monitor for errors (check logs)","🔄 Set up automatic deploys from GitHub","🔒 Enable HTTPS/SSL certificate","📧 Set up email (for password resets, etc.)","🗄️ Set up database backups","📈 Add analytics (optional)","🐛 Monitor for bugs and fix them","🚀 Keep improving your site!"],code:`# Common post-deployment tasks:

# 1. Run migrations on production
python manage.py migrate

# 2. Create superuser on production
python manage.py createsuperuser

# 3. Collect static files
python manage.py collectstatic

# 4. Check logs
# Most platforms have a logs viewer

# 5. Set up custom domain (optional)
# Configure DNS to point to your hosting platform

# Congrats! Your site is live! 🎊`,language:"bash"},{heading:"🆓 Free Hosting Options",content:"Great platforms for beginners!",points:["🟢 Render.com - Easy, free tier, great for Django","🚂 Railway.app - Simple, modern, free tier","🔷 PythonAnywhere - Django-friendly, free tier","📦 Heroku - Classic choice (paid)","☁️ Vercel/Netlify - For frontend (with DRF backend)","💎 Choose based on your needs and comfort level!"],code:`# Render.com (Recommended for beginners!)
# ✅ Pros: Easy, free tier, auto-deploy from GitHub
# ✅ Great documentation for Django

# Railway.app
# ✅ Pros: Modern UI, simple setup
# ✅ Easy environment variables

# PythonAnywhere
# ✅ Pros: Django-specific, web-based console
# ✅ Good for learners

# All have free tiers perfect for learning! 🎓`,language:"text"}],challenge:"Deploy your Django project to Render or Railway! Share your live website URL! 🚀"}};function Gy({code:n,language:s="python",darkMode:o}){const[l,c]=J.useState(!1),f=()=>{navigator.clipboard.writeText(n),c(!0),setTimeout(()=>c(!1),2e3)};return C.jsxs("div",{className:`relative rounded-xl overflow-hidden ${o?"bg-gray-900":"bg-gray-100"} shadow-lg`,children:[C.jsxs("div",{className:`flex items-center justify-between px-4 py-2 ${o?"bg-gray-800 border-b border-gray-700":"bg-gray-200 border-b border-gray-300"}`,children:[C.jsx("span",{className:`text-sm ${o?"text-gray-400":"text-gray-600"}`,children:s}),C.jsx("button",{onClick:f,className:`flex items-center gap-2 px-3 py-1 rounded-lg transition-all duration-200 ${l?"bg-green-500 text-white":o?"bg-gray-700 text-gray-300 hover:bg-gray-600":"bg-gray-300 text-gray-700 hover:bg-gray-400"}`,children:l?C.jsxs(C.Fragment,{children:[C.jsx(_y,{size:16}),C.jsx("span",{className:"text-sm",children:"Copied!"})]}):C.jsxs(C.Fragment,{children:[C.jsx(Ty,{size:16}),C.jsx("span",{className:"text-sm",children:"Copy"})]})})]}),C.jsx("pre",{className:`p-4 overflow-x-auto ${o?"text-gray-100":"text-gray-800"}`,children:C.jsx("code",{className:"text-sm font-mono",children:n})})]})}const Ap=J.createContext({});function Ky(n){const s=J.useRef(null);return s.current===null&&(s.current=n()),s.current}const Nl=typeof window<"u",Qy=Nl?J.useLayoutEffect:J.useEffect,Vl=J.createContext(null);function Il(n,s){n.indexOf(s)===-1&&n.push(s)}function Ol(n,s){const o=n.indexOf(s);o>-1&&n.splice(o,1)}const Yt=(n,s,o)=>o>s?s:o<n?n:o;let Ul=()=>{};const Gt={},Dp=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Rp(n){return typeof n=="object"&&n!==null}const Fp=n=>/^0[^.\s]+$/u.test(n);function zl(n){let s;return()=>(s===void 0&&(s=n()),s)}const xt=n=>n,Xy=(n,s)=>o=>s(n(o)),vs=(...n)=>n.reduce(Xy),ps=(n,s,o)=>{const l=s-n;return l===0?1:(o-n)/l};class Bl{constructor(){this.subscriptions=[]}add(s){return Il(this.subscriptions,s),()=>Ol(this.subscriptions,s)}notify(s,o,l){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](s,o,l);else for(let f=0;f<c;f++){const d=this.subscriptions[f];d&&d(s,o,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Vt=n=>n*1e3,St=n=>n/1e3;function Mp(n,s){return s?n*(1e3/s):0}const Lp=(n,s,o)=>(((1-3*o+3*s)*n+(3*o-6*s))*n+3*s)*n,Zy=1e-7,Jy=12;function ev(n,s,o,l,c){let f,d,m=0;do d=s+(o-s)/2,f=Lp(d,l,c)-n,f>0?o=d:s=d;while(Math.abs(f)>Zy&&++m<Jy);return d}function ws(n,s,o,l){if(n===s&&o===l)return xt;const c=f=>ev(f,0,1,n,o);return f=>f===0||f===1?f:Lp(c(f),s,l)}const Np=n=>s=>s<=.5?n(2*s)/2:(2-n(2*(1-s)))/2,Vp=n=>s=>1-n(1-s),Ip=ws(.33,1.53,.69,.99),ql=Vp(Ip),Op=Np(ql),Up=n=>(n*=2)<1?.5*ql(n):.5*(2-Math.pow(2,-10*(n-1))),Wl=n=>1-Math.sin(Math.acos(n)),zp=Vp(Wl),Bp=Np(Wl),tv=ws(.42,0,1,1),nv=ws(0,0,.58,1),qp=ws(.42,0,.58,1),rv=n=>Array.isArray(n)&&typeof n[0]!="number",Wp=n=>Array.isArray(n)&&typeof n[0]=="number",sv={linear:xt,easeIn:tv,easeInOut:qp,easeOut:nv,circIn:Wl,circInOut:Bp,circOut:zp,backIn:ql,backInOut:Op,backOut:Ip,anticipate:Up},iv=n=>typeof n=="string",vf=n=>{if(Wp(n)){Ul(n.length===4);const[s,o,l,c]=n;return ws(s,o,l,c)}else if(iv(n))return sv[n];return n},Fi=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function ov(n,s){let o=new Set,l=new Set,c=!1,f=!1;const d=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function h(g){d.has(g)&&(y.schedule(g),n()),g(m)}const y={schedule:(g,_=!1,x=!1)=>{const L=x&&c?o:l;return _&&d.add(g),L.has(g)||L.add(g),g},cancel:g=>{l.delete(g),d.delete(g)},process:g=>{if(m=g,c){f=!0;return}c=!0,[o,l]=[l,o],o.forEach(h),o.clear(),c=!1,f&&(f=!1,y.process(g))}};return y}const av=40;function Hp(n,s){let o=!1,l=!0;const c={delta:0,timestamp:0,isProcessing:!1},f=()=>o=!0,d=Fi.reduce((O,X)=>(O[X]=ov(f),O),{}),{setup:m,read:h,resolveKeyframes:y,preUpdate:g,update:_,preRender:x,render:j,postRender:L}=d,V=()=>{const O=Gt.useManualTiming?c.timestamp:performance.now();o=!1,Gt.useManualTiming||(c.delta=l?1e3/60:Math.max(Math.min(O-c.timestamp,av),1)),c.timestamp=O,c.isProcessing=!0,m.process(c),h.process(c),y.process(c),g.process(c),_.process(c),x.process(c),j.process(c),L.process(c),c.isProcessing=!1,o&&s&&(l=!1,n(V))},N=()=>{o=!0,l=!0,c.isProcessing||n(V)};return{schedule:Fi.reduce((O,X)=>{const Y=d[X];return O[X]=(ne,ae=!1,Z=!1)=>(o||N(),Y.schedule(ne,ae,Z)),O},{}),cancel:O=>{for(let X=0;X<Fi.length;X++)d[Fi[X]].cancel(O)},state:c,steps:d}}const{schedule:_e,cancel:yn,state:Ue,steps:Xa}=Hp(typeof requestAnimationFrame<"u"?requestAnimationFrame:xt,!0);let Vi;function lv(){Vi=void 0}const ot={now:()=>(Vi===void 0&&ot.set(Ue.isProcessing||Gt.useManualTiming?Ue.timestamp:performance.now()),Vi),set:n=>{Vi=n,queueMicrotask(lv)}},$p=n=>s=>typeof s=="string"&&s.startsWith(n),Yp=$p("--"),uv=$p("var(--"),Hl=n=>uv(n)?cv.test(n.split("/*")[0].trim()):!1,cv=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,vr={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ms={...vr,transform:n=>Yt(0,1,n)},Mi={...vr,default:1},us=n=>Math.round(n*1e5)/1e5,$l=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function dv(n){return n==null}const fv=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Yl=(n,s)=>o=>!!(typeof o=="string"&&fv.test(o)&&o.startsWith(n)||s&&!dv(o)&&Object.prototype.hasOwnProperty.call(o,s)),Gp=(n,s,o)=>l=>{if(typeof l!="string")return l;const[c,f,d,m]=l.match($l);return{[n]:parseFloat(c),[s]:parseFloat(f),[o]:parseFloat(d),alpha:m!==void 0?parseFloat(m):1}},pv=n=>Yt(0,255,n),Za={...vr,transform:n=>Math.round(pv(n))},Ln={test:Yl("rgb","red"),parse:Gp("red","green","blue"),transform:({red:n,green:s,blue:o,alpha:l=1})=>"rgba("+Za.transform(n)+", "+Za.transform(s)+", "+Za.transform(o)+", "+us(ms.transform(l))+")"};function mv(n){let s="",o="",l="",c="";return n.length>5?(s=n.substring(1,3),o=n.substring(3,5),l=n.substring(5,7),c=n.substring(7,9)):(s=n.substring(1,2),o=n.substring(2,3),l=n.substring(3,4),c=n.substring(4,5),s+=s,o+=o,l+=l,c+=c),{red:parseInt(s,16),green:parseInt(o,16),blue:parseInt(l,16),alpha:c?parseInt(c,16)/255:1}}const pl={test:Yl("#"),parse:mv,transform:Ln.transform},_s=n=>({test:s=>typeof s=="string"&&s.endsWith(n)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${n}`}),gn=_s("deg"),It=_s("%"),ee=_s("px"),hv=_s("vh"),gv=_s("vw"),wf={...It,parse:n=>It.parse(n)/100,transform:n=>It.transform(n*100)},cr={test:Yl("hsl","hue"),parse:Gp("hue","saturation","lightness"),transform:({hue:n,saturation:s,lightness:o,alpha:l=1})=>"hsla("+Math.round(n)+", "+It.transform(us(s))+", "+It.transform(us(o))+", "+us(ms.transform(l))+")"},De={test:n=>Ln.test(n)||pl.test(n)||cr.test(n),parse:n=>Ln.test(n)?Ln.parse(n):cr.test(n)?cr.parse(n):pl.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Ln.transform(n):cr.transform(n),getAnimatableNone:n=>{const s=De.parse(n);return s.alpha=0,De.transform(s)}},yv=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function vv(n){return isNaN(n)&&typeof n=="string"&&(n.match($l)?.length||0)+(n.match(yv)?.length||0)>0}const Kp="number",Qp="color",wv="var",_v="var(",_f="${}",Sv=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function hs(n){const s=n.toString(),o=[],l={color:[],number:[],var:[]},c=[];let f=0;const m=s.replace(Sv,h=>(De.test(h)?(l.color.push(f),c.push(Qp),o.push(De.parse(h))):h.startsWith(_v)?(l.var.push(f),c.push(wv),o.push(h)):(l.number.push(f),c.push(Kp),o.push(parseFloat(h))),++f,_f)).split(_f);return{values:o,split:m,indexes:l,types:c}}function Xp(n){return hs(n).values}function Zp(n){const{split:s,types:o}=hs(n),l=s.length;return c=>{let f="";for(let d=0;d<l;d++)if(f+=s[d],c[d]!==void 0){const m=o[d];m===Kp?f+=us(c[d]):m===Qp?f+=De.transform(c[d]):f+=c[d]}return f}}const xv=n=>typeof n=="number"?0:De.test(n)?De.getAnimatableNone(n):n;function Tv(n){const s=Xp(n);return Zp(n)(s.map(xv))}const vn={test:vv,parse:Xp,createTransformer:Zp,getAnimatableNone:Tv};function Ja(n,s,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(s-n)*6*o:o<1/2?s:o<2/3?n+(s-n)*(2/3-o)*6:n}function kv({hue:n,saturation:s,lightness:o,alpha:l}){n/=360,s/=100,o/=100;let c=0,f=0,d=0;if(!s)c=f=d=o;else{const m=o<.5?o*(1+s):o+s-o*s,h=2*o-m;c=Ja(h,m,n+1/3),f=Ja(h,m,n),d=Ja(h,m,n-1/3)}return{red:Math.round(c*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:l}}function Bi(n,s){return o=>o>0?s:n}const ke=(n,s,o)=>n+(s-n)*o,el=(n,s,o)=>{const l=n*n,c=o*(s*s-l)+l;return c<0?0:Math.sqrt(c)},Pv=[pl,Ln,cr],Ev=n=>Pv.find(s=>s.test(n));function Sf(n){const s=Ev(n);if(!s)return!1;let o=s.parse(n);return s===cr&&(o=kv(o)),o}const xf=(n,s)=>{const o=Sf(n),l=Sf(s);if(!o||!l)return Bi(n,s);const c={...o};return f=>(c.red=el(o.red,l.red,f),c.green=el(o.green,l.green,f),c.blue=el(o.blue,l.blue,f),c.alpha=ke(o.alpha,l.alpha,f),Ln.transform(c))},ml=new Set(["none","hidden"]);function Cv(n,s){return ml.has(n)?o=>o<=0?n:s:o=>o>=1?s:n}function jv(n,s){return o=>ke(n,s,o)}function Gl(n){return typeof n=="number"?jv:typeof n=="string"?Hl(n)?Bi:De.test(n)?xf:Dv:Array.isArray(n)?Jp:typeof n=="object"?De.test(n)?xf:bv:Bi}function Jp(n,s){const o=[...n],l=o.length,c=n.map((f,d)=>Gl(f)(f,s[d]));return f=>{for(let d=0;d<l;d++)o[d]=c[d](f);return o}}function bv(n,s){const o={...n,...s},l={};for(const c in o)n[c]!==void 0&&s[c]!==void 0&&(l[c]=Gl(n[c])(n[c],s[c]));return c=>{for(const f in l)o[f]=l[f](c);return o}}function Av(n,s){const o=[],l={color:0,var:0,number:0};for(let c=0;c<s.values.length;c++){const f=s.types[c],d=n.indexes[f][l[f]],m=n.values[d]??0;o[c]=m,l[f]++}return o}const Dv=(n,s)=>{const o=vn.createTransformer(s),l=hs(n),c=hs(s);return l.indexes.var.length===c.indexes.var.length&&l.indexes.color.length===c.indexes.color.length&&l.indexes.number.length>=c.indexes.number.length?ml.has(n)&&!c.values.length||ml.has(s)&&!l.values.length?Cv(n,s):vs(Jp(Av(l,c),c.values),o):Bi(n,s)};function em(n,s,o){return typeof n=="number"&&typeof s=="number"&&typeof o=="number"?ke(n,s,o):Gl(n)(n,s)}const Rv=n=>{const s=({timestamp:o})=>n(o);return{start:(o=!0)=>_e.update(s,o),stop:()=>yn(s),now:()=>Ue.isProcessing?Ue.timestamp:ot.now()}},tm=(n,s,o=10)=>{let l="";const c=Math.max(Math.round(s/o),2);for(let f=0;f<c;f++)l+=Math.round(n(f/(c-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},qi=2e4;function Kl(n){let s=0;const o=50;let l=n.next(s);for(;!l.done&&s<qi;)s+=o,l=n.next(s);return s>=qi?1/0:s}function Fv(n,s=100,o){const l=o({...n,keyframes:[0,s]}),c=Math.min(Kl(l),qi);return{type:"keyframes",ease:f=>l.next(c*f).value/s,duration:St(c)}}const Mv=5;function nm(n,s,o){const l=Math.max(s-Mv,0);return Mp(o-n(l),s-l)}const Ce={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},tl=.001;function Lv({duration:n=Ce.duration,bounce:s=Ce.bounce,velocity:o=Ce.velocity,mass:l=Ce.mass}){let c,f,d=1-s;d=Yt(Ce.minDamping,Ce.maxDamping,d),n=Yt(Ce.minDuration,Ce.maxDuration,St(n)),d<1?(c=y=>{const g=y*d,_=g*n,x=g-o,j=hl(y,d),L=Math.exp(-_);return tl-x/j*L},f=y=>{const _=y*d*n,x=_*o+o,j=Math.pow(d,2)*Math.pow(y,2)*n,L=Math.exp(-_),V=hl(Math.pow(y,2),d);return(-c(y)+tl>0?-1:1)*((x-j)*L)/V}):(c=y=>{const g=Math.exp(-y*n),_=(y-o)*n+1;return-tl+g*_},f=y=>{const g=Math.exp(-y*n),_=(o-y)*(n*n);return g*_});const m=5/n,h=Vv(c,f,m);if(n=Vt(n),isNaN(h))return{stiffness:Ce.stiffness,damping:Ce.damping,duration:n};{const y=Math.pow(h,2)*l;return{stiffness:y,damping:d*2*Math.sqrt(l*y),duration:n}}}const Nv=12;function Vv(n,s,o){let l=o;for(let c=1;c<Nv;c++)l=l-n(l)/s(l);return l}function hl(n,s){return n*Math.sqrt(1-s*s)}const Iv=["duration","bounce"],Ov=["stiffness","damping","mass"];function Tf(n,s){return s.some(o=>n[o]!==void 0)}function Uv(n){let s={velocity:Ce.velocity,stiffness:Ce.stiffness,damping:Ce.damping,mass:Ce.mass,isResolvedFromDuration:!1,...n};if(!Tf(n,Ov)&&Tf(n,Iv))if(n.visualDuration){const o=n.visualDuration,l=2*Math.PI/(o*1.2),c=l*l,f=2*Yt(.05,1,1-(n.bounce||0))*Math.sqrt(c);s={...s,mass:Ce.mass,stiffness:c,damping:f}}else{const o=Lv(n);s={...s,...o,mass:Ce.mass},s.isResolvedFromDuration=!0}return s}function Wi(n=Ce.visualDuration,s=Ce.bounce){const o=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:s}:n;let{restSpeed:l,restDelta:c}=o;const f=o.keyframes[0],d=o.keyframes[o.keyframes.length-1],m={done:!1,value:f},{stiffness:h,damping:y,mass:g,duration:_,velocity:x,isResolvedFromDuration:j}=Uv({...o,velocity:-St(o.velocity||0)}),L=x||0,V=y/(2*Math.sqrt(h*g)),N=d-f,I=St(Math.sqrt(h/g)),H=Math.abs(N)<5;l||(l=H?Ce.restSpeed.granular:Ce.restSpeed.default),c||(c=H?Ce.restDelta.granular:Ce.restDelta.default);let O;if(V<1){const Y=hl(I,V);O=ne=>{const ae=Math.exp(-V*I*ne);return d-ae*((L+V*I*N)/Y*Math.sin(Y*ne)+N*Math.cos(Y*ne))}}else if(V===1)O=Y=>d-Math.exp(-I*Y)*(N+(L+I*N)*Y);else{const Y=I*Math.sqrt(V*V-1);O=ne=>{const ae=Math.exp(-V*I*ne),Z=Math.min(Y*ne,300);return d-ae*((L+V*I*N)*Math.sinh(Z)+Y*N*Math.cosh(Z))/Y}}const X={calculatedDuration:j&&_||null,next:Y=>{const ne=O(Y);if(j)m.done=Y>=_;else{let ae=Y===0?L:0;V<1&&(ae=Y===0?Vt(L):nm(O,Y,ne));const Z=Math.abs(ae)<=l,Se=Math.abs(d-ne)<=c;m.done=Z&&Se}return m.value=m.done?d:ne,m},toString:()=>{const Y=Math.min(Kl(X),qi),ne=tm(ae=>X.next(Y*ae).value,Y,30);return Y+"ms "+ne},toTransition:()=>{}};return X}Wi.applyToOptions=n=>{const s=Fv(n,100,Wi);return n.ease=s.ease,n.duration=Vt(s.duration),n.type="keyframes",n};function gl({keyframes:n,velocity:s=0,power:o=.8,timeConstant:l=325,bounceDamping:c=10,bounceStiffness:f=500,modifyTarget:d,min:m,max:h,restDelta:y=.5,restSpeed:g}){const _=n[0],x={done:!1,value:_},j=Z=>m!==void 0&&Z<m||h!==void 0&&Z>h,L=Z=>m===void 0?h:h===void 0||Math.abs(m-Z)<Math.abs(h-Z)?m:h;let V=o*s;const N=_+V,I=d===void 0?N:d(N);I!==N&&(V=I-_);const H=Z=>-V*Math.exp(-Z/l),O=Z=>I+H(Z),X=Z=>{const Se=H(Z),Pe=O(Z);x.done=Math.abs(Se)<=y,x.value=x.done?I:Pe};let Y,ne;const ae=Z=>{j(x.value)&&(Y=Z,ne=Wi({keyframes:[x.value,L(x.value)],velocity:nm(O,Z,x.value),damping:c,stiffness:f,restDelta:y,restSpeed:g}))};return ae(0),{calculatedDuration:null,next:Z=>{let Se=!1;return!ne&&Y===void 0&&(Se=!0,X(Z),ae(Z)),Y!==void 0&&Z>=Y?ne.next(Z-Y):(!Se&&X(Z),x)}}}function zv(n,s,o){const l=[],c=o||Gt.mix||em,f=n.length-1;for(let d=0;d<f;d++){let m=c(n[d],n[d+1]);if(s){const h=Array.isArray(s)?s[d]||xt:s;m=vs(h,m)}l.push(m)}return l}function Bv(n,s,{clamp:o=!0,ease:l,mixer:c}={}){const f=n.length;if(Ul(f===s.length),f===1)return()=>s[0];if(f===2&&s[0]===s[1])return()=>s[1];const d=n[0]===n[1];n[0]>n[f-1]&&(n=[...n].reverse(),s=[...s].reverse());const m=zv(s,l,c),h=m.length,y=g=>{if(d&&g<n[0])return s[0];let _=0;if(h>1)for(;_<n.length-2&&!(g<n[_+1]);_++);const x=ps(n[_],n[_+1],g);return m[_](x)};return o?g=>y(Yt(n[0],n[f-1],g)):y}function qv(n,s){const o=n[n.length-1];for(let l=1;l<=s;l++){const c=ps(0,s,l);n.push(ke(o,1,c))}}function Wv(n){const s=[0];return qv(s,n.length-1),s}function Hv(n,s){return n.map(o=>o*s)}function $v(n,s){return n.map(()=>s||qp).splice(0,n.length-1)}function cs({duration:n=300,keyframes:s,times:o,ease:l="easeInOut"}){const c=rv(l)?l.map(vf):vf(l),f={done:!1,value:s[0]},d=Hv(o&&o.length===s.length?o:Wv(s),n),m=Bv(d,s,{ease:Array.isArray(c)?c:$v(s,c)});return{calculatedDuration:n,next:h=>(f.value=m(h),f.done=h>=n,f)}}const Yv=n=>n!==null;function Ql(n,{repeat:s,repeatType:o="loop"},l,c=1){const f=n.filter(Yv),m=c<0||s&&o!=="loop"&&s%2===1?0:f.length-1;return!m||l===void 0?f[m]:l}const Gv={decay:gl,inertia:gl,tween:cs,keyframes:cs,spring:Wi};function rm(n){typeof n.type=="string"&&(n.type=Gv[n.type])}class Xl{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(s=>{this.resolve=s})}notifyFinished(){this.resolve()}then(s,o){return this.finished.then(s,o)}}const Kv=n=>n/100;class Zl extends Xl{constructor(s){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:o}=this.options;o&&o.updatedAt!==ot.now()&&this.tick(ot.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=s,this.initAnimation(),this.play(),s.autoplay===!1&&this.pause()}initAnimation(){const{options:s}=this;rm(s);const{type:o=cs,repeat:l=0,repeatDelay:c=0,repeatType:f,velocity:d=0}=s;let{keyframes:m}=s;const h=o||cs;h!==cs&&typeof m[0]!="number"&&(this.mixKeyframes=vs(Kv,em(m[0],m[1])),m=[0,100]);const y=h({...s,keyframes:m});f==="mirror"&&(this.mirroredGenerator=h({...s,keyframes:[...m].reverse(),velocity:-d})),y.calculatedDuration===null&&(y.calculatedDuration=Kl(y));const{calculatedDuration:g}=y;this.calculatedDuration=g,this.resolvedDuration=g+c,this.totalDuration=this.resolvedDuration*(l+1)-c,this.generator=y}updateTime(s){const o=Math.round(s-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(s,o=!1){const{generator:l,totalDuration:c,mixKeyframes:f,mirroredGenerator:d,resolvedDuration:m,calculatedDuration:h}=this;if(this.startTime===null)return l.next(0);const{delay:y=0,keyframes:g,repeat:_,repeatType:x,repeatDelay:j,type:L,onUpdate:V,finalKeyframe:N}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,s):this.speed<0&&(this.startTime=Math.min(s-c/this.speed,this.startTime)),o?this.currentTime=s:this.updateTime(s);const I=this.currentTime-y*(this.playbackSpeed>=0?1:-1),H=this.playbackSpeed>=0?I<0:I>c;this.currentTime=Math.max(I,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let O=this.currentTime,X=l;if(_){const Z=Math.min(this.currentTime,c)/m;let Se=Math.floor(Z),Pe=Z%1;!Pe&&Z>=1&&(Pe=1),Pe===1&&Se--,Se=Math.min(Se,_+1),!!(Se%2)&&(x==="reverse"?(Pe=1-Pe,j&&(Pe-=j/m)):x==="mirror"&&(X=d)),O=Yt(0,1,Pe)*m}const Y=H?{done:!1,value:g[0]}:X.next(O);f&&(Y.value=f(Y.value));let{done:ne}=Y;!H&&h!==null&&(ne=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const ae=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&ne);return ae&&L!==gl&&(Y.value=Ql(g,this.options,N,this.speed)),V&&V(Y.value),ae&&this.finish(),Y}then(s,o){return this.finished.then(s,o)}get duration(){return St(this.calculatedDuration)}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+St(s)}get time(){return St(this.currentTime)}set time(s){s=Vt(s),this.currentTime=s,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=s:this.driver&&(this.startTime=this.driver.now()-s/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(s){this.updateTime(ot.now());const o=this.playbackSpeed!==s;this.playbackSpeed=s,o&&(this.time=St(this.currentTime))}play(){if(this.isStopped)return;const{driver:s=Rv,startTime:o}=this.options;this.driver||(this.driver=s(c=>this.tick(c))),this.options.onPlay?.();const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=o??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ot.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(s){return this.startTime=0,this.tick(s,!0)}attachTimeline(s){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),s.observe(this)}}function Qv(n){for(let s=1;s<n.length;s++)n[s]??(n[s]=n[s-1])}const Nn=n=>n*180/Math.PI,yl=n=>{const s=Nn(Math.atan2(n[1],n[0]));return vl(s)},Xv={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:yl,rotateZ:yl,skewX:n=>Nn(Math.atan(n[1])),skewY:n=>Nn(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},vl=n=>(n=n%360,n<0&&(n+=360),n),kf=yl,Pf=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Ef=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),Zv={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Pf,scaleY:Ef,scale:n=>(Pf(n)+Ef(n))/2,rotateX:n=>vl(Nn(Math.atan2(n[6],n[5]))),rotateY:n=>vl(Nn(Math.atan2(-n[2],n[0]))),rotateZ:kf,rotate:kf,skewX:n=>Nn(Math.atan(n[4])),skewY:n=>Nn(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function wl(n){return n.includes("scale")?1:0}function _l(n,s){if(!n||n==="none")return wl(s);const o=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,c;if(o)l=Zv,c=o;else{const m=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=Xv,c=m}if(!c)return wl(s);const f=l[s],d=c[1].split(",").map(e0);return typeof f=="function"?f(d):d[f]}const Jv=(n,s)=>{const{transform:o="none"}=getComputedStyle(n);return _l(o,s)};function e0(n){return parseFloat(n.trim())}const wr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],_r=new Set(wr),Cf=n=>n===vr||n===ee,t0=new Set(["x","y","z"]),n0=wr.filter(n=>!t0.has(n));function r0(n){const s=[];return n0.forEach(o=>{const l=n.getValue(o);l!==void 0&&(s.push([o,l.get()]),l.set(o.startsWith("scale")?1:0))}),s}const Vn={width:({x:n},{paddingLeft:s="0",paddingRight:o="0"})=>n.max-n.min-parseFloat(s)-parseFloat(o),height:({y:n},{paddingTop:s="0",paddingBottom:o="0"})=>n.max-n.min-parseFloat(s)-parseFloat(o),top:(n,{top:s})=>parseFloat(s),left:(n,{left:s})=>parseFloat(s),bottom:({y:n},{top:s})=>parseFloat(s)+(n.max-n.min),right:({x:n},{left:s})=>parseFloat(s)+(n.max-n.min),x:(n,{transform:s})=>_l(s,"x"),y:(n,{transform:s})=>_l(s,"y")};Vn.translateX=Vn.x;Vn.translateY=Vn.y;const In=new Set;let Sl=!1,xl=!1,Tl=!1;function sm(){if(xl){const n=Array.from(In).filter(l=>l.needsMeasurement),s=new Set(n.map(l=>l.element)),o=new Map;s.forEach(l=>{const c=r0(l);c.length&&(o.set(l,c),l.render())}),n.forEach(l=>l.measureInitialState()),s.forEach(l=>{l.render();const c=o.get(l);c&&c.forEach(([f,d])=>{l.getValue(f)?.set(d)})}),n.forEach(l=>l.measureEndState()),n.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}xl=!1,Sl=!1,In.forEach(n=>n.complete(Tl)),In.clear()}function im(){In.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(xl=!0)})}function s0(){Tl=!0,im(),sm(),Tl=!1}class Jl{constructor(s,o,l,c,f,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...s],this.onComplete=o,this.name=l,this.motionValue=c,this.element=f,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(In.add(this),Sl||(Sl=!0,_e.read(im),_e.resolveKeyframes(sm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:s,name:o,element:l,motionValue:c}=this;if(s[0]===null){const f=c?.get(),d=s[s.length-1];if(f!==void 0)s[0]=f;else if(l&&o){const m=l.readValue(o,d);m!=null&&(s[0]=m)}s[0]===void 0&&(s[0]=d),c&&f===void 0&&c.set(s[0])}Qv(s)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(s=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,s),In.delete(this)}cancel(){this.state==="scheduled"&&(In.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const i0=n=>n.startsWith("--");function o0(n,s,o){i0(s)?n.style.setProperty(s,o):n.style[s]=o}const a0=zl(()=>window.ScrollTimeline!==void 0),l0={};function u0(n,s){const o=zl(n);return()=>l0[s]??o()}const om=u0(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ls=([n,s,o,l])=>`cubic-bezier(${n}, ${s}, ${o}, ${l})`,jf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ls([0,.65,.55,1]),circOut:ls([.55,0,1,.45]),backIn:ls([.31,.01,.66,-.59]),backOut:ls([.33,1.53,.69,.99])};function am(n,s){if(n)return typeof n=="function"?om()?tm(n,s):"ease-out":Wp(n)?ls(n):Array.isArray(n)?n.map(o=>am(o,s)||jf.easeOut):jf[n]}function c0(n,s,o,{delay:l=0,duration:c=300,repeat:f=0,repeatType:d="loop",ease:m="easeOut",times:h}={},y=void 0){const g={[s]:o};h&&(g.offset=h);const _=am(m,c);Array.isArray(_)&&(g.easing=_);const x={delay:l,duration:c,easing:Array.isArray(_)?"linear":_,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"};return y&&(x.pseudoElement=y),n.animate(g,x)}function lm(n){return typeof n=="function"&&"applyToOptions"in n}function d0({type:n,...s}){return lm(n)&&om()?n.applyToOptions(s):(s.duration??(s.duration=300),s.ease??(s.ease="easeOut"),s)}class f0 extends Xl{constructor(s){if(super(),this.finishedTime=null,this.isStopped=!1,!s)return;const{element:o,name:l,keyframes:c,pseudoElement:f,allowFlatten:d=!1,finalKeyframe:m,onComplete:h}=s;this.isPseudoElement=!!f,this.allowFlatten=d,this.options=s,Ul(typeof s.type!="string");const y=d0(s);this.animation=c0(o,l,c,y,f),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const g=Ql(c,this.options,m,this.speed);this.updateMotionValue?this.updateMotionValue(g):o0(o,l,g),this.animation.cancel()}h?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:s}=this;s==="idle"||s==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const s=this.animation.effect?.getComputedTiming?.().duration||0;return St(Number(s))}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+St(s)}get time(){return St(Number(this.animation.currentTime)||0)}set time(s){this.finishedTime=null,this.animation.currentTime=Vt(s)}get speed(){return this.animation.playbackRate}set speed(s){s<0&&(this.finishedTime=null),this.animation.playbackRate=s}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(s){this.animation.startTime=s}attachTimeline({timeline:s,observe:o}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,s&&a0()?(this.animation.timeline=s,xt):o(this)}}const um={anticipate:Up,backInOut:Op,circInOut:Bp};function p0(n){return n in um}function m0(n){typeof n.ease=="string"&&p0(n.ease)&&(n.ease=um[n.ease])}const bf=10;class h0 extends f0{constructor(s){m0(s),rm(s),super(s),s.startTime&&(this.startTime=s.startTime),this.options=s}updateMotionValue(s){const{motionValue:o,onUpdate:l,onComplete:c,element:f,...d}=this.options;if(!o)return;if(s!==void 0){o.set(s);return}const m=new Zl({...d,autoplay:!1}),h=Vt(this.finishedTime??this.time);o.setWithVelocity(m.sample(h-bf).value,m.sample(h).value,bf),m.stop()}}const Af=(n,s)=>s==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(vn.test(n)||n==="0")&&!n.startsWith("url("));function g0(n){const s=n[0];if(n.length===1)return!0;for(let o=0;o<n.length;o++)if(n[o]!==s)return!0}function y0(n,s,o,l){const c=n[0];if(c===null)return!1;if(s==="display"||s==="visibility")return!0;const f=n[n.length-1],d=Af(c,s),m=Af(f,s);return!d||!m?!1:g0(n)||(o==="spring"||lm(o))&&l}function kl(n){n.duration=0,n.type="keyframes"}const v0=new Set(["opacity","clipPath","filter","transform"]),w0=zl(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function _0(n){const{motionValue:s,name:o,repeatDelay:l,repeatType:c,damping:f,type:d}=n;if(!(s?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:y}=s.owner.getProps();return w0()&&o&&v0.has(o)&&(o!=="transform"||!y)&&!h&&!l&&c!=="mirror"&&f!==0&&d!=="inertia"}const S0=40;class x0 extends Xl{constructor({autoplay:s=!0,delay:o=0,type:l="keyframes",repeat:c=0,repeatDelay:f=0,repeatType:d="loop",keyframes:m,name:h,motionValue:y,element:g,..._}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ot.now();const x={autoplay:s,delay:o,type:l,repeat:c,repeatDelay:f,repeatType:d,name:h,motionValue:y,element:g,..._},j=g?.KeyframeResolver||Jl;this.keyframeResolver=new j(m,(L,V,N)=>this.onKeyframesResolved(L,V,x,!N),h,y,g),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(s,o,l,c){this.keyframeResolver=void 0;const{name:f,type:d,velocity:m,delay:h,isHandoff:y,onUpdate:g}=l;this.resolvedAt=ot.now(),y0(s,f,d,m)||((Gt.instantAnimations||!h)&&g?.(Ql(s,l,o)),s[0]=s[s.length-1],kl(l),l.repeat=0);const x={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>S0?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...l,keyframes:s},j=!y&&_0(x)?new h0({...x,element:x.motionValue.owner.current}):new Zl(x);j.finished.then(()=>this.notifyFinished()).catch(xt),this.pendingTimeline&&(this.stopTimeline=j.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=j}get finished(){return this._animation?this.animation.finished:this._finished}then(s,o){return this.finished.finally(s).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),s0()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(s){this.animation.time=s}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(s){this.animation.speed=s}get startTime(){return this.animation.startTime}attachTimeline(s){return this._animation?this.stopTimeline=this.animation.attachTimeline(s):this.pendingTimeline=s,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const T0=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function k0(n){const s=T0.exec(n);if(!s)return[,];const[,o,l,c]=s;return[`--${o??l}`,c]}function cm(n,s,o=1){const[l,c]=k0(n);if(!l)return;const f=window.getComputedStyle(s).getPropertyValue(l);if(f){const d=f.trim();return Dp(d)?parseFloat(d):d}return Hl(c)?cm(c,s,o+1):c}function eu(n,s){return n?.[s]??n?.default??n}const dm=new Set(["width","height","top","left","right","bottom",...wr]),P0={test:n=>n==="auto",parse:n=>n},fm=n=>s=>s.test(n),pm=[vr,ee,It,gn,gv,hv,P0],Df=n=>pm.find(fm(n));function E0(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Fp(n):!0}const C0=new Set(["brightness","contrast","saturate","opacity"]);function j0(n){const[s,o]=n.slice(0,-1).split("(");if(s==="drop-shadow")return n;const[l]=o.match($l)||[];if(!l)return n;const c=o.replace(l,"");let f=C0.has(s)?1:0;return l!==o&&(f*=100),s+"("+f+c+")"}const b0=/\b([a-z-]*)\(.*?\)/gu,Pl={...vn,getAnimatableNone:n=>{const s=n.match(b0);return s?s.map(j0).join(" "):n}},Rf={...vr,transform:Math.round},A0={rotate:gn,rotateX:gn,rotateY:gn,rotateZ:gn,scale:Mi,scaleX:Mi,scaleY:Mi,scaleZ:Mi,skew:gn,skewX:gn,skewY:gn,distance:ee,translateX:ee,translateY:ee,translateZ:ee,x:ee,y:ee,z:ee,perspective:ee,transformPerspective:ee,opacity:ms,originX:wf,originY:wf,originZ:ee},tu={borderWidth:ee,borderTopWidth:ee,borderRightWidth:ee,borderBottomWidth:ee,borderLeftWidth:ee,borderRadius:ee,radius:ee,borderTopLeftRadius:ee,borderTopRightRadius:ee,borderBottomRightRadius:ee,borderBottomLeftRadius:ee,width:ee,maxWidth:ee,height:ee,maxHeight:ee,top:ee,right:ee,bottom:ee,left:ee,padding:ee,paddingTop:ee,paddingRight:ee,paddingBottom:ee,paddingLeft:ee,margin:ee,marginTop:ee,marginRight:ee,marginBottom:ee,marginLeft:ee,backgroundPositionX:ee,backgroundPositionY:ee,...A0,zIndex:Rf,fillOpacity:ms,strokeOpacity:ms,numOctaves:Rf},D0={...tu,color:De,backgroundColor:De,outlineColor:De,fill:De,stroke:De,borderColor:De,borderTopColor:De,borderRightColor:De,borderBottomColor:De,borderLeftColor:De,filter:Pl,WebkitFilter:Pl},mm=n=>D0[n];function hm(n,s){let o=mm(n);return o!==Pl&&(o=vn),o.getAnimatableNone?o.getAnimatableNone(s):void 0}const R0=new Set(["auto","none","0"]);function F0(n,s,o){let l=0,c;for(;l<n.length&&!c;){const f=n[l];typeof f=="string"&&!R0.has(f)&&hs(f).values.length&&(c=n[l]),l++}if(c&&o)for(const f of s)n[f]=hm(o,c)}class M0 extends Jl{constructor(s,o,l,c,f){super(s,o,l,c,f,!0)}readKeyframes(){const{unresolvedKeyframes:s,element:o,name:l}=this;if(!o||!o.current)return;super.readKeyframes();for(let h=0;h<s.length;h++){let y=s[h];if(typeof y=="string"&&(y=y.trim(),Hl(y))){const g=cm(y,o.current);g!==void 0&&(s[h]=g),h===s.length-1&&(this.finalKeyframe=y)}}if(this.resolveNoneKeyframes(),!dm.has(l)||s.length!==2)return;const[c,f]=s,d=Df(c),m=Df(f);if(d!==m)if(Cf(d)&&Cf(m))for(let h=0;h<s.length;h++){const y=s[h];typeof y=="string"&&(s[h]=parseFloat(y))}else Vn[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:s,name:o}=this,l=[];for(let c=0;c<s.length;c++)(s[c]===null||E0(s[c]))&&l.push(c);l.length&&F0(s,l,o)}measureInitialState(){const{element:s,unresolvedKeyframes:o,name:l}=this;if(!s||!s.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Vn[l](s.measureViewportBox(),window.getComputedStyle(s.current)),o[0]=this.measuredOrigin;const c=o[o.length-1];c!==void 0&&s.getValue(l,c).jump(c,!1)}measureEndState(){const{element:s,name:o,unresolvedKeyframes:l}=this;if(!s||!s.current)return;const c=s.getValue(o);c&&c.jump(this.measuredOrigin,!1);const f=l.length-1,d=l[f];l[f]=Vn[o](s.measureViewportBox(),window.getComputedStyle(s.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),this.removedTransforms?.length&&this.removedTransforms.forEach(([m,h])=>{s.getValue(m).set(h)}),this.resolveNoneKeyframes()}}function L0(n,s,o){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let l=document;const c=o?.[n]??l.querySelectorAll(n);return c?Array.from(c):[]}return Array.from(n)}const gm=(n,s)=>s&&typeof n=="number"?s.transform(n):n;function N0(n){return Rp(n)&&"offsetHeight"in n}const Ff=30,V0=n=>!isNaN(parseFloat(n));class I0{constructor(s,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=l=>{const c=ot.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty()},this.hasAnimated=!1,this.setCurrent(s),this.owner=o.owner}setCurrent(s){this.current=s,this.updatedAt=ot.now(),this.canTrackVelocity===null&&s!==void 0&&(this.canTrackVelocity=V0(this.current))}setPrevFrameValue(s=this.current){this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt}onChange(s){return this.on("change",s)}on(s,o){this.events[s]||(this.events[s]=new Bl);const l=this.events[s].add(o);return s==="change"?()=>{l(),_e.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const s in this.events)this.events[s].clear()}attach(s,o){this.passiveEffect=s,this.stopPassiveEffect=o}set(s){this.passiveEffect?this.passiveEffect(s,this.updateAndNotify):this.updateAndNotify(s)}setWithVelocity(s,o,l){this.set(o),this.prev=void 0,this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt-l}jump(s,o=!0){this.updateAndNotify(s),this.prev=s,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(s){this.dependents||(this.dependents=new Set),this.dependents.add(s)}removeDependent(s){this.dependents&&this.dependents.delete(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const s=ot.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||s-this.updatedAt>Ff)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Ff);return Mp(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(s){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=s(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function gr(n,s){return new I0(n,s)}const{schedule:nu}=Hp(queueMicrotask,!1),Dt={x:!1,y:!1};function ym(){return Dt.x||Dt.y}function O0(n){return n==="x"||n==="y"?Dt[n]?null:(Dt[n]=!0,()=>{Dt[n]=!1}):Dt.x||Dt.y?null:(Dt.x=Dt.y=!0,()=>{Dt.x=Dt.y=!1})}function vm(n,s){const o=L0(n),l=new AbortController,c={passive:!0,...s,signal:l.signal};return[o,c,()=>l.abort()]}function Mf(n){return!(n.pointerType==="touch"||ym())}function U0(n,s,o={}){const[l,c,f]=vm(n,o),d=m=>{if(!Mf(m))return;const{target:h}=m,y=s(h,m);if(typeof y!="function"||!h)return;const g=_=>{Mf(_)&&(y(_),h.removeEventListener("pointerleave",g))};h.addEventListener("pointerleave",g,c)};return l.forEach(m=>{m.addEventListener("pointerenter",d,c)}),f}const wm=(n,s)=>s?n===s?!0:wm(n,s.parentElement):!1,ru=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,z0=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function B0(n){return z0.has(n.tagName)||n.tabIndex!==-1}const Ii=new WeakSet;function Lf(n){return s=>{s.key==="Enter"&&n(s)}}function nl(n,s){n.dispatchEvent(new PointerEvent("pointer"+s,{isPrimary:!0,bubbles:!0}))}const q0=(n,s)=>{const o=n.currentTarget;if(!o)return;const l=Lf(()=>{if(Ii.has(o))return;nl(o,"down");const c=Lf(()=>{nl(o,"up")}),f=()=>nl(o,"cancel");o.addEventListener("keyup",c,s),o.addEventListener("blur",f,s)});o.addEventListener("keydown",l,s),o.addEventListener("blur",()=>o.removeEventListener("keydown",l),s)};function Nf(n){return ru(n)&&!ym()}function W0(n,s,o={}){const[l,c,f]=vm(n,o),d=m=>{const h=m.currentTarget;if(!Nf(m))return;Ii.add(h);const y=s(h,m),g=(j,L)=>{window.removeEventListener("pointerup",_),window.removeEventListener("pointercancel",x),Ii.has(h)&&Ii.delete(h),Nf(j)&&typeof y=="function"&&y(j,{success:L})},_=j=>{g(j,h===window||h===document||o.useGlobalTarget||wm(h,j.target))},x=j=>{g(j,!1)};window.addEventListener("pointerup",_,c),window.addEventListener("pointercancel",x,c)};return l.forEach(m=>{(o.useGlobalTarget?window:m).addEventListener("pointerdown",d,c),N0(m)&&(m.addEventListener("focus",y=>q0(y,c)),!B0(m)&&!m.hasAttribute("tabindex")&&(m.tabIndex=0))}),f}function _m(n){return Rp(n)&&"ownerSVGElement"in n}function H0(n){return _m(n)&&n.tagName==="svg"}const He=n=>!!(n&&n.getVelocity),$0=[...pm,De,vn],Y0=n=>$0.find(fm(n)),Sm=J.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function G0(n=!0){const s=J.useContext(Vl);if(s===null)return[!0,null];const{isPresent:o,onExitComplete:l,register:c}=s,f=J.useId();J.useEffect(()=>{if(n)return c(f)},[n]);const d=J.useCallback(()=>n&&l&&l(f),[f,l,n]);return!o&&l?[!1,d]:[!0]}const xm=J.createContext({strict:!1}),Vf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},yr={};for(const n in Vf)yr[n]={isEnabled:s=>Vf[n].some(o=>!!s[o])};function K0(n){for(const s in n)yr[s]={...yr[s],...n[s]}}const Q0=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Hi(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||Q0.has(n)}let Tm=n=>!Hi(n);function X0(n){typeof n=="function"&&(Tm=s=>s.startsWith("on")?!Hi(s):n(s))}try{X0(require("@emotion/is-prop-valid").default)}catch{}function Z0(n,s,o){const l={};for(const c in n)c==="values"&&typeof n.values=="object"||(Tm(c)||o===!0&&Hi(c)||!s&&!Hi(c)||n.draggable&&c.startsWith("onDrag"))&&(l[c]=n[c]);return l}const Gi=J.createContext({});function Ki(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function gs(n){return typeof n=="string"||Array.isArray(n)}const su=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],iu=["initial",...su];function Qi(n){return Ki(n.animate)||iu.some(s=>gs(n[s]))}function km(n){return!!(Qi(n)||n.variants)}function J0(n,s){if(Qi(n)){const{initial:o,animate:l}=n;return{initial:o===!1||gs(o)?o:void 0,animate:gs(l)?l:void 0}}return n.inherit!==!1?s:{}}function ew(n){const{initial:s,animate:o}=J0(n,J.useContext(Gi));return J.useMemo(()=>({initial:s,animate:o}),[If(s),If(o)])}function If(n){return Array.isArray(n)?n.join(" "):n}function Of(n,s){return s.max===s.min?0:n/(s.max-s.min)*100}const as={correct:(n,s)=>{if(!s.target)return n;if(typeof n=="string")if(ee.test(n))n=parseFloat(n);else return n;const o=Of(n,s.target.x),l=Of(n,s.target.y);return`${o}% ${l}%`}},tw={correct:(n,{treeScale:s,projectionDelta:o})=>{const l=n,c=vn.parse(n);if(c.length>5)return l;const f=vn.createTransformer(n),d=typeof c[0]!="number"?1:0,m=o.x.scale*s.x,h=o.y.scale*s.y;c[0+d]/=m,c[1+d]/=h;const y=ke(m,h,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),f(c)}},El={borderRadius:{...as,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:as,borderTopRightRadius:as,borderBottomLeftRadius:as,borderBottomRightRadius:as,boxShadow:tw};function Pm(n,{layout:s,layoutId:o}){return _r.has(n)||n.startsWith("origin")||(s||o!==void 0)&&(!!El[n]||n==="opacity")}const nw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},rw=wr.length;function sw(n,s,o){let l="",c=!0;for(let f=0;f<rw;f++){const d=wr[f],m=n[d];if(m===void 0)continue;let h=!0;if(typeof m=="number"?h=m===(d.startsWith("scale")?1:0):h=parseFloat(m)===0,!h||o){const y=gm(m,tu[d]);if(!h){c=!1;const g=nw[d]||d;l+=`${g}(${y}) `}o&&(s[d]=y)}}return l=l.trim(),o?l=o(s,c?"":l):c&&(l="none"),l}function ou(n,s,o){const{style:l,vars:c,transformOrigin:f}=n;let d=!1,m=!1;for(const h in s){const y=s[h];if(_r.has(h)){d=!0;continue}else if(Yp(h)){c[h]=y;continue}else{const g=gm(y,tu[h]);h.startsWith("origin")?(m=!0,f[h]=g):l[h]=g}}if(s.transform||(d||o?l.transform=sw(s,n.transform,o):l.transform&&(l.transform="none")),m){const{originX:h="50%",originY:y="50%",originZ:g=0}=f;l.transformOrigin=`${h} ${y} ${g}`}}const au=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Em(n,s,o){for(const l in s)!He(s[l])&&!Pm(l,o)&&(n[l]=s[l])}function iw({transformTemplate:n},s){return J.useMemo(()=>{const o=au();return ou(o,s,n),Object.assign({},o.vars,o.style)},[s])}function ow(n,s){const o=n.style||{},l={};return Em(l,o,n),Object.assign(l,iw(n,s)),l}function aw(n,s){const o={},l=ow(n,s);return n.drag&&n.dragListener!==!1&&(o.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(o.tabIndex=0),o.style=l,o}const lw={offset:"stroke-dashoffset",array:"stroke-dasharray"},uw={offset:"strokeDashoffset",array:"strokeDasharray"};function cw(n,s,o=1,l=0,c=!0){n.pathLength=1;const f=c?lw:uw;n[f.offset]=ee.transform(-l);const d=ee.transform(s),m=ee.transform(o);n[f.array]=`${d} ${m}`}function Cm(n,{attrX:s,attrY:o,attrScale:l,pathLength:c,pathSpacing:f=1,pathOffset:d=0,...m},h,y,g){if(ou(n,m,y),h){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:_,style:x}=n;_.transform&&(x.transform=_.transform,delete _.transform),(x.transform||_.transformOrigin)&&(x.transformOrigin=_.transformOrigin??"50% 50%",delete _.transformOrigin),x.transform&&(x.transformBox=g?.transformBox??"fill-box",delete _.transformBox),s!==void 0&&(_.x=s),o!==void 0&&(_.y=o),l!==void 0&&(_.scale=l),c!==void 0&&cw(_,c,f,d,!1)}const jm=()=>({...au(),attrs:{}}),bm=n=>typeof n=="string"&&n.toLowerCase()==="svg";function dw(n,s,o,l){const c=J.useMemo(()=>{const f=jm();return Cm(f,s,bm(l),n.transformTemplate,n.style),{...f.attrs,style:{...f.style}}},[s]);if(n.style){const f={};Em(f,n.style,n),c.style={...f,...c.style}}return c}const fw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function lu(n){return typeof n!="string"||n.includes("-")?!1:!!(fw.indexOf(n)>-1||/[A-Z]/u.test(n))}function pw(n,s,o,{latestValues:l},c,f=!1){const m=(lu(n)?dw:aw)(s,l,c,n),h=Z0(s,typeof n=="string",f),y=n!==J.Fragment?{...h,...m,ref:o}:{},{children:g}=s,_=J.useMemo(()=>He(g)?g.get():g,[g]);return J.createElement(n,{...y,children:_})}function Uf(n){const s=[{},{}];return n?.values.forEach((o,l)=>{s[0][l]=o.get(),s[1][l]=o.getVelocity()}),s}function uu(n,s,o,l){if(typeof s=="function"){const[c,f]=Uf(l);s=s(o!==void 0?o:n.custom,c,f)}if(typeof s=="string"&&(s=n.variants&&n.variants[s]),typeof s=="function"){const[c,f]=Uf(l);s=s(o!==void 0?o:n.custom,c,f)}return s}function Oi(n){return He(n)?n.get():n}function mw({scrapeMotionValuesFromProps:n,createRenderState:s},o,l,c){return{latestValues:hw(o,l,c,n),renderState:s()}}function hw(n,s,o,l){const c={},f=l(n,{});for(const x in f)c[x]=Oi(f[x]);let{initial:d,animate:m}=n;const h=Qi(n),y=km(n);s&&y&&!h&&n.inherit!==!1&&(d===void 0&&(d=s.initial),m===void 0&&(m=s.animate));let g=o?o.initial===!1:!1;g=g||d===!1;const _=g?m:d;if(_&&typeof _!="boolean"&&!Ki(_)){const x=Array.isArray(_)?_:[_];for(let j=0;j<x.length;j++){const L=uu(n,x[j]);if(L){const{transitionEnd:V,transition:N,...I}=L;for(const H in I){let O=I[H];if(Array.isArray(O)){const X=g?O.length-1:0;O=O[X]}O!==null&&(c[H]=O)}for(const H in V)c[H]=V[H]}}}return c}const Am=n=>(s,o)=>{const l=J.useContext(Gi),c=J.useContext(Vl),f=()=>mw(n,s,l,c);return o?f():Ky(f)};function cu(n,s,o){const{style:l}=n,c={};for(const f in l)(He(l[f])||s.style&&He(s.style[f])||Pm(f,n)||o?.getValue(f)?.liveStyle!==void 0)&&(c[f]=l[f]);return c}const gw=Am({scrapeMotionValuesFromProps:cu,createRenderState:au});function Dm(n,s,o){const l=cu(n,s,o);for(const c in n)if(He(n[c])||He(s[c])){const f=wr.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;l[f]=n[c]}return l}const yw=Am({scrapeMotionValuesFromProps:Dm,createRenderState:jm}),vw=Symbol.for("motionComponentSymbol");function dr(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function ww(n,s,o){return J.useCallback(l=>{l&&n.onMount&&n.onMount(l),s&&(l?s.mount(l):s.unmount()),o&&(typeof o=="function"?o(l):dr(o)&&(o.current=l))},[s])}const du=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),_w="framerAppearId",Rm="data-"+du(_w),Fm=J.createContext({});function Sw(n,s,o,l,c){const{visualElement:f}=J.useContext(Gi),d=J.useContext(xm),m=J.useContext(Vl),h=J.useContext(Sm).reducedMotion,y=J.useRef(null);l=l||d.renderer,!y.current&&l&&(y.current=l(n,{visualState:s,parent:f,props:o,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:h}));const g=y.current,_=J.useContext(Fm);g&&!g.projection&&c&&(g.type==="html"||g.type==="svg")&&xw(y.current,o,c,_);const x=J.useRef(!1);J.useInsertionEffect(()=>{g&&x.current&&g.update(o,m)});const j=o[Rm],L=J.useRef(!!j&&!window.MotionHandoffIsComplete?.(j)&&window.MotionHasOptimisedAnimation?.(j));return Qy(()=>{g&&(x.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),L.current&&g.animationState&&g.animationState.animateChanges())}),J.useEffect(()=>{g&&(!L.current&&g.animationState&&g.animationState.animateChanges(),L.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(j)}),L.current=!1),g.enteringChildren=void 0)}),g}function xw(n,s,o,l){const{layoutId:c,layout:f,drag:d,dragConstraints:m,layoutScroll:h,layoutRoot:y,layoutCrossfade:g}=s;n.projection=new o(n.latestValues,s["data-framer-portal-id"]?void 0:Mm(n.parent)),n.projection.setOptions({layoutId:c,layout:f,alwaysMeasureLayout:!!d||m&&dr(m),visualElement:n,animationType:typeof f=="string"?f:"both",initialPromotionConfig:l,crossfade:g,layoutScroll:h,layoutRoot:y})}function Mm(n){if(n)return n.options.allowProjection!==!1?n.projection:Mm(n.parent)}function rl(n,{forwardMotionProps:s=!1}={},o,l){o&&K0(o);const c=lu(n)?yw:gw;function f(m,h){let y;const g={...J.useContext(Sm),...m,layoutId:Tw(m)},{isStatic:_}=g,x=ew(m),j=c(m,_);if(!_&&Nl){kw();const L=Pw(g);y=L.MeasureLayout,x.visualElement=Sw(n,j,g,l,L.ProjectionNode)}return C.jsxs(Gi.Provider,{value:x,children:[y&&x.visualElement?C.jsx(y,{visualElement:x.visualElement,...g}):null,pw(n,m,ww(j,x.visualElement,h),j,_,s)]})}f.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=J.forwardRef(f);return d[vw]=n,d}function Tw({layoutId:n}){const s=J.useContext(Ap).id;return s&&n!==void 0?s+"-"+n:n}function kw(n,s){J.useContext(xm).strict}function Pw(n){const{drag:s,layout:o}=yr;if(!s&&!o)return{};const l={...s,...o};return{MeasureLayout:s?.isEnabled(n)||o?.isEnabled(n)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}function Ew(n,s){if(typeof Proxy>"u")return rl;const o=new Map,l=(f,d)=>rl(f,d,n,s),c=(f,d)=>l(f,d);return new Proxy(c,{get:(f,d)=>d==="create"?l:(o.has(d)||o.set(d,rl(d,void 0,n,s)),o.get(d))})}function Lm({top:n,left:s,right:o,bottom:l}){return{x:{min:s,max:o},y:{min:n,max:l}}}function Cw({x:n,y:s}){return{top:s.min,right:n.max,bottom:s.max,left:n.min}}function jw(n,s){if(!s)return n;const o=s({x:n.left,y:n.top}),l=s({x:n.right,y:n.bottom});return{top:o.y,left:o.x,bottom:l.y,right:l.x}}function sl(n){return n===void 0||n===1}function Cl({scale:n,scaleX:s,scaleY:o}){return!sl(n)||!sl(s)||!sl(o)}function Mn(n){return Cl(n)||Nm(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Nm(n){return zf(n.x)||zf(n.y)}function zf(n){return n&&n!=="0%"}function $i(n,s,o){const l=n-o,c=s*l;return o+c}function Bf(n,s,o,l,c){return c!==void 0&&(n=$i(n,c,l)),$i(n,o,l)+s}function jl(n,s=0,o=1,l,c){n.min=Bf(n.min,s,o,l,c),n.max=Bf(n.max,s,o,l,c)}function Vm(n,{x:s,y:o}){jl(n.x,s.translate,s.scale,s.originPoint),jl(n.y,o.translate,o.scale,o.originPoint)}const qf=.999999999999,Wf=1.0000000000001;function bw(n,s,o,l=!1){const c=o.length;if(!c)return;s.x=s.y=1;let f,d;for(let m=0;m<c;m++){f=o[m],d=f.projectionDelta;const{visualElement:h}=f.options;h&&h.props.style&&h.props.style.display==="contents"||(l&&f.options.layoutScroll&&f.scroll&&f!==f.root&&pr(n,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(s.x*=d.x.scale,s.y*=d.y.scale,Vm(n,d)),l&&Mn(f.latestValues)&&pr(n,f.latestValues))}s.x<Wf&&s.x>qf&&(s.x=1),s.y<Wf&&s.y>qf&&(s.y=1)}function fr(n,s){n.min=n.min+s,n.max=n.max+s}function Hf(n,s,o,l,c=.5){const f=ke(n.min,n.max,c);jl(n,s,o,f,l)}function pr(n,s){Hf(n.x,s.x,s.scaleX,s.scale,s.originX),Hf(n.y,s.y,s.scaleY,s.scale,s.originY)}function Im(n,s){return Lm(jw(n.getBoundingClientRect(),s))}function Aw(n,s,o){const l=Im(n,o),{scroll:c}=s;return c&&(fr(l.x,c.offset.x),fr(l.y,c.offset.y)),l}const $f=()=>({translate:0,scale:1,origin:0,originPoint:0}),mr=()=>({x:$f(),y:$f()}),Yf=()=>({min:0,max:0}),Me=()=>({x:Yf(),y:Yf()}),bl={current:null},Om={current:!1};function Dw(){if(Om.current=!0,!!Nl)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),s=()=>bl.current=n.matches;n.addEventListener("change",s),s()}else bl.current=!1}const Rw=new WeakMap;function Fw(n,s,o){for(const l in s){const c=s[l],f=o[l];if(He(c))n.addValue(l,c);else if(He(f))n.addValue(l,gr(c,{owner:n}));else if(f!==c)if(n.hasValue(l)){const d=n.getValue(l);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=n.getStaticValue(l);n.addValue(l,gr(d!==void 0?d:c,{owner:n}))}}for(const l in o)s[l]===void 0&&n.removeValue(l);return s}const Gf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Mw{scrapeMotionValuesFromProps(s,o,l){return{}}constructor({parent:s,props:o,presenceContext:l,reducedMotionConfig:c,blockInitialAnimation:f,visualState:d},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Jl,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=ot.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,_e.render(this.render,!1,!0))};const{latestValues:h,renderState:y}=d;this.latestValues=h,this.baseTarget={...h},this.initialValues=o.initial?{...h}:{},this.renderState=y,this.parent=s,this.props=o,this.presenceContext=l,this.depth=s?s.depth+1:0,this.reducedMotionConfig=c,this.options=m,this.blockInitialAnimation=!!f,this.isControllingVariants=Qi(o),this.isVariantNode=km(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(s&&s.current);const{willChange:g,..._}=this.scrapeMotionValuesFromProps(o,{},this);for(const x in _){const j=_[x];h[x]!==void 0&&He(j)&&j.set(h[x])}}mount(s){this.current=s,Rw.set(s,this),this.projection&&!this.projection.instance&&this.projection.mount(s),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,l)=>this.bindToMotionValue(l,o)),Om.current||Dw(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:bl.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),yn(this.notifyUpdate),yn(this.render),this.valueSubscriptions.forEach(s=>s()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const s in this.events)this.events[s].clear();for(const s in this.features){const o=this.features[s];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(s){this.children.add(s),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(s)}removeChild(s){this.children.delete(s),this.enteringChildren&&this.enteringChildren.delete(s)}bindToMotionValue(s,o){this.valueSubscriptions.has(s)&&this.valueSubscriptions.get(s)();const l=_r.has(s);l&&this.onBindTransform&&this.onBindTransform();const c=o.on("change",d=>{this.latestValues[s]=d,this.props.onUpdate&&_e.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,s,o)),this.valueSubscriptions.set(s,()=>{c(),f&&f(),o.owner&&o.stop()})}sortNodePosition(s){return!this.current||!this.sortInstanceNodePosition||this.type!==s.type?0:this.sortInstanceNodePosition(this.current,s.current)}updateFeatures(){let s="animation";for(s in yr){const o=yr[s];if(!o)continue;const{isEnabled:l,Feature:c}=o;if(!this.features[s]&&c&&l(this.props)&&(this.features[s]=new c(this)),this.features[s]){const f=this.features[s];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Me()}getStaticValue(s){return this.latestValues[s]}setStaticValue(s,o){this.latestValues[s]=o}update(s,o){(s.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=s,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let l=0;l<Gf.length;l++){const c=Gf[l];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const f="on"+c,d=s[f];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=Fw(this,this.scrapeMotionValuesFromProps(s,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(s){return this.props.variants?this.props.variants[s]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(s){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(s),()=>o.variantChildren.delete(s)}addValue(s,o){const l=this.values.get(s);o!==l&&(l&&this.removeValue(s),this.bindToMotionValue(s,o),this.values.set(s,o),this.latestValues[s]=o.get())}removeValue(s){this.values.delete(s);const o=this.valueSubscriptions.get(s);o&&(o(),this.valueSubscriptions.delete(s)),delete this.latestValues[s],this.removeValueFromRenderState(s,this.renderState)}hasValue(s){return this.values.has(s)}getValue(s,o){if(this.props.values&&this.props.values[s])return this.props.values[s];let l=this.values.get(s);return l===void 0&&o!==void 0&&(l=gr(o===null?void 0:o,{owner:this}),this.addValue(s,l)),l}readValue(s,o){let l=this.latestValues[s]!==void 0||!this.current?this.latestValues[s]:this.getBaseTargetFromProps(this.props,s)??this.readValueFromInstance(this.current,s,this.options);return l!=null&&(typeof l=="string"&&(Dp(l)||Fp(l))?l=parseFloat(l):!Y0(l)&&vn.test(o)&&(l=hm(s,o)),this.setBaseTarget(s,He(l)?l.get():l)),He(l)?l.get():l}setBaseTarget(s,o){this.baseTarget[s]=o}getBaseTarget(s){const{initial:o}=this.props;let l;if(typeof o=="string"||typeof o=="object"){const f=uu(this.props,o,this.presenceContext?.custom);f&&(l=f[s])}if(o&&l!==void 0)return l;const c=this.getBaseTargetFromProps(this.props,s);return c!==void 0&&!He(c)?c:this.initialValues[s]!==void 0&&l===void 0?void 0:this.baseTarget[s]}on(s,o){return this.events[s]||(this.events[s]=new Bl),this.events[s].add(o)}notify(s,...o){this.events[s]&&this.events[s].notify(...o)}scheduleRenderMicrotask(){nu.render(this.render)}}class Um extends Mw{constructor(){super(...arguments),this.KeyframeResolver=M0}sortInstanceNodePosition(s,o){return s.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(s,o){return s.style?s.style[o]:void 0}removeValueFromRenderState(s,{vars:o,style:l}){delete o[s],delete l[s]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:s}=this.props;He(s)&&(this.childSubscription=s.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function zm(n,{style:s,vars:o},l,c){const f=n.style;let d;for(d in s)f[d]=s[d];c?.applyProjectionStyles(f,l);for(d in o)f.setProperty(d,o[d])}function Lw(n){return window.getComputedStyle(n)}class Nw extends Um{constructor(){super(...arguments),this.type="html",this.renderInstance=zm}readValueFromInstance(s,o){if(_r.has(o))return this.projection?.isProjecting?wl(o):Jv(s,o);{const l=Lw(s),c=(Yp(o)?l.getPropertyValue(o):l[o])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(s,{transformPagePoint:o}){return Im(s,o)}build(s,o,l){ou(s,o,l.transformTemplate)}scrapeMotionValuesFromProps(s,o,l){return cu(s,o,l)}}const Bm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Vw(n,s,o,l){zm(n,s,void 0,l);for(const c in s.attrs)n.setAttribute(Bm.has(c)?c:du(c),s.attrs[c])}class Iw extends Um{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Me}getBaseTargetFromProps(s,o){return s[o]}readValueFromInstance(s,o){if(_r.has(o)){const l=mm(o);return l&&l.default||0}return o=Bm.has(o)?o:du(o),s.getAttribute(o)}scrapeMotionValuesFromProps(s,o,l){return Dm(s,o,l)}build(s,o,l){Cm(s,o,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(s,o,l,c){Vw(s,o,l,c)}mount(s){this.isSVGTag=bm(s.tagName),super.mount(s)}}const Ow=(n,s)=>lu(n)?new Iw(s):new Nw(s,{allowProjection:n!==J.Fragment});function hr(n,s,o){const l=n.getProps();return uu(l,s,o!==void 0?o:l.custom,n)}const Al=n=>Array.isArray(n);function Uw(n,s,o){n.hasValue(s)?n.getValue(s).set(o):n.addValue(s,gr(o))}function zw(n){return Al(n)?n[n.length-1]||0:n}function Bw(n,s){const o=hr(n,s);let{transitionEnd:l={},transition:c={},...f}=o||{};f={...f,...l};for(const d in f){const m=zw(f[d]);Uw(n,d,m)}}function qw(n){return!!(He(n)&&n.add)}function Dl(n,s){const o=n.getValue("willChange");if(qw(o))return o.add(s);if(!o&&Gt.WillChange){const l=new Gt.WillChange("auto");n.addValue("willChange",l),l.add(s)}}function qm(n){return n.props[Rm]}const Ww=n=>n!==null;function Hw(n,{repeat:s,repeatType:o="loop"},l){const c=n.filter(Ww),f=s&&o!=="loop"&&s%2===1?0:c.length-1;return c[f]}const $w={type:"spring",stiffness:500,damping:25,restSpeed:10},Yw=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Gw={type:"keyframes",duration:.8},Kw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Qw=(n,{keyframes:s})=>s.length>2?Gw:_r.has(n)?n.startsWith("scale")?Yw(s[1]):$w:Kw;function Xw({when:n,delay:s,delayChildren:o,staggerChildren:l,staggerDirection:c,repeat:f,repeatType:d,repeatDelay:m,from:h,elapsed:y,...g}){return!!Object.keys(g).length}const fu=(n,s,o,l={},c,f)=>d=>{const m=eu(l,n)||{},h=m.delay||l.delay||0;let{elapsed:y=0}=l;y=y-Vt(h);const g={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:s.getVelocity(),...m,delay:-y,onUpdate:x=>{s.set(x),m.onUpdate&&m.onUpdate(x)},onComplete:()=>{d(),m.onComplete&&m.onComplete()},name:n,motionValue:s,element:f?void 0:c};Xw(m)||Object.assign(g,Qw(n,g)),g.duration&&(g.duration=Vt(g.duration)),g.repeatDelay&&(g.repeatDelay=Vt(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let _=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(kl(g),g.delay===0&&(_=!0)),(Gt.instantAnimations||Gt.skipAnimations)&&(_=!0,kl(g),g.delay=0),g.allowFlatten=!m.type&&!m.ease,_&&!f&&s.get()!==void 0){const x=Hw(g.keyframes,m);if(x!==void 0){_e.update(()=>{g.onUpdate(x),g.onComplete()});return}}return m.isSync?new Zl(g):new x0(g)};function Zw({protectedKeys:n,needsAnimating:s},o){const l=n.hasOwnProperty(o)&&s[o]!==!0;return s[o]=!1,l}function Wm(n,s,{delay:o=0,transitionOverride:l,type:c}={}){let{transition:f=n.getDefaultTransition(),transitionEnd:d,...m}=s;l&&(f=l);const h=[],y=c&&n.animationState&&n.animationState.getState()[c];for(const g in m){const _=n.getValue(g,n.latestValues[g]??null),x=m[g];if(x===void 0||y&&Zw(y,g))continue;const j={delay:o,...eu(f||{},g)},L=_.get();if(L!==void 0&&!_.isAnimating&&!Array.isArray(x)&&x===L&&!j.velocity)continue;let V=!1;if(window.MotionHandoffAnimation){const I=qm(n);if(I){const H=window.MotionHandoffAnimation(I,g,_e);H!==null&&(j.startTime=H,V=!0)}}Dl(n,g),_.start(fu(g,_,x,n.shouldReduceMotion&&dm.has(g)?{type:!1}:j,n,V));const N=_.animation;N&&h.push(N)}return d&&Promise.all(h).then(()=>{_e.update(()=>{d&&Bw(n,d)})}),h}function Hm(n,s,o,l=0,c=1){const f=Array.from(n).sort((y,g)=>y.sortNodePosition(g)).indexOf(s),d=n.size,m=(d-1)*l;return typeof o=="function"?o(f,d):c===1?f*l:m-f*l}function Rl(n,s,o={}){const l=hr(n,s,o.type==="exit"?n.presenceContext?.custom:void 0);let{transition:c=n.getDefaultTransition()||{}}=l||{};o.transitionOverride&&(c=o.transitionOverride);const f=l?()=>Promise.all(Wm(n,l,o)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:y=0,staggerChildren:g,staggerDirection:_}=c;return Jw(n,s,h,y,g,_,o)}:()=>Promise.resolve(),{when:m}=c;if(m){const[h,y]=m==="beforeChildren"?[f,d]:[d,f];return h().then(()=>y())}else return Promise.all([f(),d(o.delay)])}function Jw(n,s,o=0,l=0,c=0,f=1,d){const m=[];for(const h of n.variantChildren)h.notify("AnimationStart",s),m.push(Rl(h,s,{...d,delay:o+(typeof l=="function"?0:l)+Hm(n.variantChildren,h,l,c,f)}).then(()=>h.notify("AnimationComplete",s)));return Promise.all(m)}function e1(n,s,o={}){n.notify("AnimationStart",s);let l;if(Array.isArray(s)){const c=s.map(f=>Rl(n,f,o));l=Promise.all(c)}else if(typeof s=="string")l=Rl(n,s,o);else{const c=typeof s=="function"?hr(n,s,o.custom):s;l=Promise.all(Wm(n,c,o))}return l.then(()=>{n.notify("AnimationComplete",s)})}function $m(n,s){if(!Array.isArray(s))return!1;const o=s.length;if(o!==n.length)return!1;for(let l=0;l<o;l++)if(s[l]!==n[l])return!1;return!0}const t1=iu.length;function Ym(n){if(!n)return;if(!n.isControllingVariants){const o=n.parent?Ym(n.parent)||{}:{};return n.props.initial!==void 0&&(o.initial=n.props.initial),o}const s={};for(let o=0;o<t1;o++){const l=iu[o],c=n.props[l];(gs(c)||c===!1)&&(s[l]=c)}return s}const n1=[...su].reverse(),r1=su.length;function s1(n){return s=>Promise.all(s.map(({animation:o,options:l})=>e1(n,o,l)))}function i1(n){let s=s1(n),o=Kf(),l=!0;const c=h=>(y,g)=>{const _=hr(n,g,h==="exit"?n.presenceContext?.custom:void 0);if(_){const{transition:x,transitionEnd:j,...L}=_;y={...y,...L,...j}}return y};function f(h){s=h(n)}function d(h){const{props:y}=n,g=Ym(n.parent)||{},_=[],x=new Set;let j={},L=1/0;for(let N=0;N<r1;N++){const I=n1[N],H=o[I],O=y[I]!==void 0?y[I]:g[I],X=gs(O),Y=I===h?H.isActive:null;Y===!1&&(L=N);let ne=O===g[I]&&O!==y[I]&&X;if(ne&&l&&n.manuallyAnimateOnMount&&(ne=!1),H.protectedKeys={...j},!H.isActive&&Y===null||!O&&!H.prevProp||Ki(O)||typeof O=="boolean")continue;const ae=o1(H.prevProp,O);let Z=ae||I===h&&H.isActive&&!ne&&X||N>L&&X,Se=!1;const Pe=Array.isArray(O)?O:[O];let Ze=Pe.reduce(c(I),{});Y===!1&&(Ze={});const{prevResolvedValues:at={}}=H,$e={...at,...Ze},Je=re=>{Z=!0,x.has(re)&&(Se=!0,x.delete(re)),H.needsAnimating[re]=!0;const M=n.getValue(re);M&&(M.liveStyle=!1)};for(const re in $e){const M=Ze[re],G=at[re];if(j.hasOwnProperty(re))continue;let U=!1;Al(M)&&Al(G)?U=!$m(M,G):U=M!==G,U?M!=null?Je(re):x.add(re):M!==void 0&&x.has(re)?Je(re):H.protectedKeys[re]=!0}H.prevProp=O,H.prevResolvedValues=Ze,H.isActive&&(j={...j,...Ze}),l&&n.blockInitialAnimation&&(Z=!1);const lt=ne&&ae;Z&&(!lt||Se)&&_.push(...Pe.map(re=>{const M={type:I};if(typeof re=="string"&&l&&!lt&&n.manuallyAnimateOnMount&&n.parent){const{parent:G}=n,U=hr(G,re);if(G.enteringChildren&&U){const{delayChildren:T}=U.transition||{};M.delay=Hm(G.enteringChildren,n,T)}}return{animation:re,options:M}}))}if(x.size){const N={};if(typeof y.initial!="boolean"){const I=hr(n,Array.isArray(y.initial)?y.initial[0]:y.initial);I&&I.transition&&(N.transition=I.transition)}x.forEach(I=>{const H=n.getBaseTarget(I),O=n.getValue(I);O&&(O.liveStyle=!0),N[I]=H??null}),_.push({animation:N})}let V=!!_.length;return l&&(y.initial===!1||y.initial===y.animate)&&!n.manuallyAnimateOnMount&&(V=!1),l=!1,V?s(_):Promise.resolve()}function m(h,y){if(o[h].isActive===y)return Promise.resolve();n.variantChildren?.forEach(_=>_.animationState?.setActive(h,y)),o[h].isActive=y;const g=d(h);for(const _ in o)o[_].protectedKeys={};return g}return{animateChanges:d,setActive:m,setAnimateFunction:f,getState:()=>o,reset:()=>{o=Kf()}}}function o1(n,s){return typeof s=="string"?s!==n:Array.isArray(s)?!$m(s,n):!1}function Fn(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Kf(){return{animate:Fn(!0),whileInView:Fn(),whileHover:Fn(),whileTap:Fn(),whileDrag:Fn(),whileFocus:Fn(),exit:Fn()}}class wn{constructor(s){this.isMounted=!1,this.node=s}update(){}}class a1 extends wn{constructor(s){super(s),s.animationState||(s.animationState=i1(s))}updateAnimationControlsSubscription(){const{animate:s}=this.node.getProps();Ki(s)&&(this.unmountControls=s.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:s}=this.node.getProps(),{animate:o}=this.node.prevProps||{};s!==o&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let l1=0;class u1 extends wn{constructor(){super(...arguments),this.id=l1++}update(){if(!this.node.presenceContext)return;const{isPresent:s,onExitComplete:o}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||s===l)return;const c=this.node.animationState.setActive("exit",!s);o&&!s&&c.then(()=>{o(this.id)})}mount(){const{register:s,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),s&&(this.unmount=s(this.id))}unmount(){}}const c1={animation:{Feature:a1},exit:{Feature:u1}};function ys(n,s,o,l={passive:!0}){return n.addEventListener(s,o,l),()=>n.removeEventListener(s,o)}function Ss(n){return{point:{x:n.pageX,y:n.pageY}}}const d1=n=>s=>ru(s)&&n(s,Ss(s));function ds(n,s,o,l){return ys(n,s,d1(o),l)}const Gm=1e-4,f1=1-Gm,p1=1+Gm,Km=.01,m1=0-Km,h1=0+Km;function Qe(n){return n.max-n.min}function g1(n,s,o){return Math.abs(n-s)<=o}function Qf(n,s,o,l=.5){n.origin=l,n.originPoint=ke(s.min,s.max,n.origin),n.scale=Qe(o)/Qe(s),n.translate=ke(o.min,o.max,n.origin)-n.originPoint,(n.scale>=f1&&n.scale<=p1||isNaN(n.scale))&&(n.scale=1),(n.translate>=m1&&n.translate<=h1||isNaN(n.translate))&&(n.translate=0)}function fs(n,s,o,l){Qf(n.x,s.x,o.x,l?l.originX:void 0),Qf(n.y,s.y,o.y,l?l.originY:void 0)}function Xf(n,s,o){n.min=o.min+s.min,n.max=n.min+Qe(s)}function y1(n,s,o){Xf(n.x,s.x,o.x),Xf(n.y,s.y,o.y)}function Zf(n,s,o){n.min=s.min-o.min,n.max=n.min+Qe(s)}function Yi(n,s,o){Zf(n.x,s.x,o.x),Zf(n.y,s.y,o.y)}function _t(n){return[n("x"),n("y")]}const Qm=({current:n})=>n?n.ownerDocument.defaultView:null,Jf=(n,s)=>Math.abs(n-s);function v1(n,s){const o=Jf(n.x,s.x),l=Jf(n.y,s.y);return Math.sqrt(o**2+l**2)}class Xm{constructor(s,o,{transformPagePoint:l,contextWindow:c=window,dragSnapToOrigin:f=!1,distanceThreshold:d=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=ol(this.lastMoveEventInfo,this.history),j=this.startEvent!==null,L=v1(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!j&&!L)return;const{point:V}=x,{timestamp:N}=Ue;this.history.push({...V,timestamp:N});const{onStart:I,onMove:H}=this.handlers;j||(I&&I(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),H&&H(this.lastMoveEvent,x)},this.handlePointerMove=(x,j)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=il(j,this.transformPagePoint),_e.update(this.updatePoint,!0)},this.handlePointerUp=(x,j)=>{this.end();const{onEnd:L,onSessionEnd:V,resumeAnimation:N}=this.handlers;if(this.dragSnapToOrigin&&N&&N(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const I=ol(x.type==="pointercancel"?this.lastMoveEventInfo:il(j,this.transformPagePoint),this.history);this.startEvent&&L&&L(x,I),V&&V(x,I)},!ru(s))return;this.dragSnapToOrigin=f,this.handlers=o,this.transformPagePoint=l,this.distanceThreshold=d,this.contextWindow=c||window;const m=Ss(s),h=il(m,this.transformPagePoint),{point:y}=h,{timestamp:g}=Ue;this.history=[{...y,timestamp:g}];const{onSessionStart:_}=o;_&&_(s,ol(h,this.history)),this.removeListeners=vs(ds(this.contextWindow,"pointermove",this.handlePointerMove),ds(this.contextWindow,"pointerup",this.handlePointerUp),ds(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(s){this.handlers=s}end(){this.removeListeners&&this.removeListeners(),yn(this.updatePoint)}}function il(n,s){return s?{point:s(n.point)}:n}function ep(n,s){return{x:n.x-s.x,y:n.y-s.y}}function ol({point:n},s){return{point:n,delta:ep(n,Zm(s)),offset:ep(n,w1(s)),velocity:_1(s,.1)}}function w1(n){return n[0]}function Zm(n){return n[n.length-1]}function _1(n,s){if(n.length<2)return{x:0,y:0};let o=n.length-1,l=null;const c=Zm(n);for(;o>=0&&(l=n[o],!(c.timestamp-l.timestamp>Vt(s)));)o--;if(!l)return{x:0,y:0};const f=St(c.timestamp-l.timestamp);if(f===0)return{x:0,y:0};const d={x:(c.x-l.x)/f,y:(c.y-l.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function S1(n,{min:s,max:o},l){return s!==void 0&&n<s?n=l?ke(s,n,l.min):Math.max(n,s):o!==void 0&&n>o&&(n=l?ke(o,n,l.max):Math.min(n,o)),n}function tp(n,s,o){return{min:s!==void 0?n.min+s:void 0,max:o!==void 0?n.max+o-(n.max-n.min):void 0}}function x1(n,{top:s,left:o,bottom:l,right:c}){return{x:tp(n.x,o,c),y:tp(n.y,s,l)}}function np(n,s){let o=s.min-n.min,l=s.max-n.max;return s.max-s.min<n.max-n.min&&([o,l]=[l,o]),{min:o,max:l}}function T1(n,s){return{x:np(n.x,s.x),y:np(n.y,s.y)}}function k1(n,s){let o=.5;const l=Qe(n),c=Qe(s);return c>l?o=ps(s.min,s.max-l,n.min):l>c&&(o=ps(n.min,n.max-c,s.min)),Yt(0,1,o)}function P1(n,s){const o={};return s.min!==void 0&&(o.min=s.min-n.min),s.max!==void 0&&(o.max=s.max-n.min),o}const Fl=.35;function E1(n=Fl){return n===!1?n=0:n===!0&&(n=Fl),{x:rp(n,"left","right"),y:rp(n,"top","bottom")}}function rp(n,s,o){return{min:sp(n,s),max:sp(n,o)}}function sp(n,s){return typeof n=="number"?n:n[s]||0}const C1=new WeakMap;class j1{constructor(s){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Me(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=s}start(s,{snapToCursor:o=!1,distanceThreshold:l}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const f=_=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(Ss(_).point)},d=(_,x)=>{const{drag:j,dragPropagation:L,onDragStart:V}=this.getProps();if(j&&!L&&(this.openDragLock&&this.openDragLock(),this.openDragLock=O0(j),!this.openDragLock))return;this.latestPointerEvent=_,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),_t(I=>{let H=this.getAxisMotionValue(I).get()||0;if(It.test(H)){const{projection:O}=this.visualElement;if(O&&O.layout){const X=O.layout.layoutBox[I];X&&(H=Qe(X)*(parseFloat(H)/100))}}this.originPoint[I]=H}),V&&_e.postRender(()=>V(_,x)),Dl(this.visualElement,"transform");const{animationState:N}=this.visualElement;N&&N.setActive("whileDrag",!0)},m=(_,x)=>{this.latestPointerEvent=_,this.latestPanInfo=x;const{dragPropagation:j,dragDirectionLock:L,onDirectionLock:V,onDrag:N}=this.getProps();if(!j&&!this.openDragLock)return;const{offset:I}=x;if(L&&this.currentDirection===null){this.currentDirection=b1(I),this.currentDirection!==null&&V&&V(this.currentDirection);return}this.updateAxis("x",x.point,I),this.updateAxis("y",x.point,I),this.visualElement.render(),N&&N(_,x)},h=(_,x)=>{this.latestPointerEvent=_,this.latestPanInfo=x,this.stop(_,x),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>_t(_=>this.getAnimationState(_)==="paused"&&this.getAxisMotionValue(_).animation?.play()),{dragSnapToOrigin:g}=this.getProps();this.panSession=new Xm(s,{onSessionStart:f,onStart:d,onMove:m,onSessionEnd:h,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:l,contextWindow:Qm(this.visualElement)})}stop(s,o){const l=s||this.latestPointerEvent,c=o||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!c||!l)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:m}=this.getProps();m&&_e.postRender(()=>m(l,c))}cancel(){this.isDragging=!1;const{projection:s,animationState:o}=this.visualElement;s&&(s.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(s,o,l){const{drag:c}=this.getProps();if(!l||!Li(s,c,this.currentDirection))return;const f=this.getAxisMotionValue(s);let d=this.originPoint[s]+l[s];this.constraints&&this.constraints[s]&&(d=S1(d,this.constraints[s],this.elastic[s])),f.set(d)}resolveConstraints(){const{dragConstraints:s,dragElastic:o}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;s&&dr(s)?this.constraints||(this.constraints=this.resolveRefConstraints()):s&&l?this.constraints=x1(l.layoutBox,s):this.constraints=!1,this.elastic=E1(o),c!==this.constraints&&l&&this.constraints&&!this.hasMutatedConstraints&&_t(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=P1(l.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:s,onMeasureDragConstraints:o}=this.getProps();if(!s||!dr(s))return!1;const l=s.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const f=Aw(l,c.root,this.visualElement.getTransformPagePoint());let d=T1(c.layout.layoutBox,f);if(o){const m=o(Cw(d));this.hasMutatedConstraints=!!m,m&&(d=Lm(m))}return d}startAnimation(s){const{drag:o,dragMomentum:l,dragElastic:c,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:m}=this.getProps(),h=this.constraints||{},y=_t(g=>{if(!Li(g,o,this.currentDirection))return;let _=h&&h[g]||{};d&&(_={min:0,max:0});const x=c?200:1e6,j=c?40:1e7,L={type:"inertia",velocity:l?s[g]:0,bounceStiffness:x,bounceDamping:j,timeConstant:750,restDelta:1,restSpeed:10,...f,..._};return this.startAxisValueAnimation(g,L)});return Promise.all(y).then(m)}startAxisValueAnimation(s,o){const l=this.getAxisMotionValue(s);return Dl(this.visualElement,s),l.start(fu(s,l,0,o,this.visualElement,!1))}stopAnimation(){_t(s=>this.getAxisMotionValue(s).stop())}pauseAnimation(){_t(s=>this.getAxisMotionValue(s).animation?.pause())}getAnimationState(s){return this.getAxisMotionValue(s).animation?.state}getAxisMotionValue(s){const o=`_drag${s.toUpperCase()}`,l=this.visualElement.getProps(),c=l[o];return c||this.visualElement.getValue(s,(l.initial?l.initial[s]:void 0)||0)}snapToCursor(s){_t(o=>{const{drag:l}=this.getProps();if(!Li(o,l,this.currentDirection))return;const{projection:c}=this.visualElement,f=this.getAxisMotionValue(o);if(c&&c.layout){const{min:d,max:m}=c.layout.layoutBox[o];f.set(s[o]-ke(d,m,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:s,dragConstraints:o}=this.getProps(),{projection:l}=this.visualElement;if(!dr(o)||!l||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};_t(d=>{const m=this.getAxisMotionValue(d);if(m&&this.constraints!==!1){const h=m.get();c[d]=k1({min:h,max:h},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.resolveConstraints(),_t(d=>{if(!Li(d,s,null))return;const m=this.getAxisMotionValue(d),{min:h,max:y}=this.constraints[d];m.set(ke(h,y,c[d]))})}addListeners(){if(!this.visualElement.current)return;C1.set(this.visualElement,this);const s=this.visualElement.current,o=ds(s,"pointerdown",h=>{const{drag:y,dragListener:g=!0}=this.getProps();y&&g&&this.start(h)}),l=()=>{const{dragConstraints:h}=this.getProps();dr(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,f=c.addEventListener("measure",l);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),_e.read(l);const d=ys(window,"resize",()=>this.scalePositionWithinConstraints()),m=c.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:y})=>{this.isDragging&&y&&(_t(g=>{const _=this.getAxisMotionValue(g);_&&(this.originPoint[g]+=h[g].translate,_.set(_.get()+h[g].translate))}),this.visualElement.render())}));return()=>{d(),o(),f(),m&&m()}}getProps(){const s=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:l=!1,dragPropagation:c=!1,dragConstraints:f=!1,dragElastic:d=Fl,dragMomentum:m=!0}=s;return{...s,drag:o,dragDirectionLock:l,dragPropagation:c,dragConstraints:f,dragElastic:d,dragMomentum:m}}}function Li(n,s,o){return(s===!0||s===n)&&(o===null||o===n)}function b1(n,s=10){let o=null;return Math.abs(n.y)>s?o="y":Math.abs(n.x)>s&&(o="x"),o}class A1 extends wn{constructor(s){super(s),this.removeGroupControls=xt,this.removeListeners=xt,this.controls=new j1(s)}mount(){const{dragControls:s}=this.node.getProps();s&&(this.removeGroupControls=s.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||xt}unmount(){this.removeGroupControls(),this.removeListeners()}}const ip=n=>(s,o)=>{n&&_e.postRender(()=>n(s,o))};class D1 extends wn{constructor(){super(...arguments),this.removePointerDownListener=xt}onPointerDown(s){this.session=new Xm(s,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Qm(this.node)})}createPanHandlers(){const{onPanSessionStart:s,onPanStart:o,onPan:l,onPanEnd:c}=this.node.getProps();return{onSessionStart:ip(s),onStart:ip(o),onMove:l,onEnd:(f,d)=>{delete this.session,c&&_e.postRender(()=>c(f,d))}}}mount(){this.removePointerDownListener=ds(this.node.current,"pointerdown",s=>this.onPointerDown(s))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ui={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let al=!1;class R1 extends J.Component{componentDidMount(){const{visualElement:s,layoutGroup:o,switchLayoutGroup:l,layoutId:c}=this.props,{projection:f}=s;f&&(o.group&&o.group.add(f),l&&l.register&&c&&l.register(f),al&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,onExitComplete:()=>this.safeToRemove()})),Ui.hasEverUpdated=!0}getSnapshotBeforeUpdate(s){const{layoutDependency:o,visualElement:l,drag:c,isPresent:f}=this.props,{projection:d}=l;return d&&(d.isPresent=f,al=!0,c||s.layoutDependency!==o||o===void 0||s.isPresent!==f?d.willUpdate():this.safeToRemove(),s.isPresent!==f&&(f?d.promote():d.relegate()||_e.postRender(()=>{const m=d.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:s}=this.props.visualElement;s&&(s.root.didUpdate(),nu.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:s,layoutGroup:o,switchLayoutGroup:l}=this.props,{projection:c}=s;al=!0,c&&(c.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(c),l&&l.deregister&&l.deregister(c))}safeToRemove(){const{safeToRemove:s}=this.props;s&&s()}render(){return null}}function Jm(n){const[s,o]=G0(),l=J.useContext(Ap);return C.jsx(R1,{...n,layoutGroup:l,switchLayoutGroup:J.useContext(Fm),isPresent:s,safeToRemove:o})}function F1(n,s,o){const l=He(n)?n:gr(n);return l.start(fu("",l,s,o)),l.animation}const M1=(n,s)=>n.depth-s.depth;class L1{constructor(){this.children=[],this.isDirty=!1}add(s){Il(this.children,s),this.isDirty=!0}remove(s){Ol(this.children,s),this.isDirty=!0}forEach(s){this.isDirty&&this.children.sort(M1),this.isDirty=!1,this.children.forEach(s)}}function N1(n,s){const o=ot.now(),l=({timestamp:c})=>{const f=c-o;f>=s&&(yn(l),n(f-s))};return _e.setup(l,!0),()=>yn(l)}const eh=["TopLeft","TopRight","BottomLeft","BottomRight"],V1=eh.length,op=n=>typeof n=="string"?parseFloat(n):n,ap=n=>typeof n=="number"||ee.test(n);function I1(n,s,o,l,c,f){c?(n.opacity=ke(0,o.opacity??1,O1(l)),n.opacityExit=ke(s.opacity??1,0,U1(l))):f&&(n.opacity=ke(s.opacity??1,o.opacity??1,l));for(let d=0;d<V1;d++){const m=`border${eh[d]}Radius`;let h=lp(s,m),y=lp(o,m);if(h===void 0&&y===void 0)continue;h||(h=0),y||(y=0),h===0||y===0||ap(h)===ap(y)?(n[m]=Math.max(ke(op(h),op(y),l),0),(It.test(y)||It.test(h))&&(n[m]+="%")):n[m]=y}(s.rotate||o.rotate)&&(n.rotate=ke(s.rotate||0,o.rotate||0,l))}function lp(n,s){return n[s]!==void 0?n[s]:n.borderRadius}const O1=th(0,.5,zp),U1=th(.5,.95,xt);function th(n,s,o){return l=>l<n?0:l>s?1:o(ps(n,s,l))}function up(n,s){n.min=s.min,n.max=s.max}function At(n,s){up(n.x,s.x),up(n.y,s.y)}function cp(n,s){n.translate=s.translate,n.scale=s.scale,n.originPoint=s.originPoint,n.origin=s.origin}function dp(n,s,o,l,c){return n-=s,n=$i(n,1/o,l),c!==void 0&&(n=$i(n,1/c,l)),n}function z1(n,s=0,o=1,l=.5,c,f=n,d=n){if(It.test(s)&&(s=parseFloat(s),s=ke(d.min,d.max,s/100)-d.min),typeof s!="number")return;let m=ke(f.min,f.max,l);n===f&&(m-=s),n.min=dp(n.min,s,o,m,c),n.max=dp(n.max,s,o,m,c)}function fp(n,s,[o,l,c],f,d){z1(n,s[o],s[l],s[c],s.scale,f,d)}const B1=["x","scaleX","originX"],q1=["y","scaleY","originY"];function pp(n,s,o,l){fp(n.x,s,B1,o?o.x:void 0,l?l.x:void 0),fp(n.y,s,q1,o?o.y:void 0,l?l.y:void 0)}function mp(n){return n.translate===0&&n.scale===1}function nh(n){return mp(n.x)&&mp(n.y)}function hp(n,s){return n.min===s.min&&n.max===s.max}function W1(n,s){return hp(n.x,s.x)&&hp(n.y,s.y)}function gp(n,s){return Math.round(n.min)===Math.round(s.min)&&Math.round(n.max)===Math.round(s.max)}function rh(n,s){return gp(n.x,s.x)&&gp(n.y,s.y)}function yp(n){return Qe(n.x)/Qe(n.y)}function vp(n,s){return n.translate===s.translate&&n.scale===s.scale&&n.originPoint===s.originPoint}class H1{constructor(){this.members=[]}add(s){Il(this.members,s),s.scheduleRender()}remove(s){if(Ol(this.members,s),s===this.prevLead&&(this.prevLead=void 0),s===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(s){const o=this.members.findIndex(c=>s===c);if(o===0)return!1;let l;for(let c=o;c>=0;c--){const f=this.members[c];if(f.isPresent!==!1){l=f;break}}return l?(this.promote(l),!0):!1}promote(s,o){const l=this.lead;if(s!==l&&(this.prevLead=l,this.lead=s,s.show(),l)){l.instance&&l.scheduleRender(),s.scheduleRender(),s.resumeFrom=l,o&&(s.resumeFrom.preserveOpacity=!0),l.snapshot&&(s.snapshot=l.snapshot,s.snapshot.latestValues=l.animationValues||l.latestValues),s.root&&s.root.isUpdating&&(s.isLayoutDirty=!0);const{crossfade:c}=s.options;c===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(s=>{const{options:o,resumingFrom:l}=s;o.onExitComplete&&o.onExitComplete(),l&&l.options.onExitComplete&&l.options.onExitComplete()})}scheduleRender(){this.members.forEach(s=>{s.instance&&s.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function $1(n,s,o){let l="";const c=n.x.translate/s.x,f=n.y.translate/s.y,d=o?.z||0;if((c||f||d)&&(l=`translate3d(${c}px, ${f}px, ${d}px) `),(s.x!==1||s.y!==1)&&(l+=`scale(${1/s.x}, ${1/s.y}) `),o){const{transformPerspective:y,rotate:g,rotateX:_,rotateY:x,skewX:j,skewY:L}=o;y&&(l=`perspective(${y}px) ${l}`),g&&(l+=`rotate(${g}deg) `),_&&(l+=`rotateX(${_}deg) `),x&&(l+=`rotateY(${x}deg) `),j&&(l+=`skewX(${j}deg) `),L&&(l+=`skewY(${L}deg) `)}const m=n.x.scale*s.x,h=n.y.scale*s.y;return(m!==1||h!==1)&&(l+=`scale(${m}, ${h})`),l||"none"}const ll=["","X","Y","Z"],Y1=1e3;let G1=0;function ul(n,s,o,l){const{latestValues:c}=s;c[n]&&(o[n]=c[n],s.setStaticValue(n,0),l&&(l[n]=0))}function sh(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:s}=n.options;if(!s)return;const o=qm(s);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:c,layoutId:f}=n.options;window.MotionCancelOptimisedAnimation(o,"transform",_e,!(c||f))}const{parent:l}=n;l&&!l.hasCheckedOptimisedAppear&&sh(l)}function ih({attachResizeListener:n,defaultParent:s,measureScroll:o,checkIsScrollRoot:l,resetTransform:c}){return class{constructor(d={},m=s?.()){this.id=G1++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(X1),this.nodes.forEach(t_),this.nodes.forEach(n_),this.nodes.forEach(Z1)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new L1)}addEventListener(d,m){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Bl),this.eventHandlers.get(d).add(m)}notifyListeners(d,...m){const h=this.eventHandlers.get(d);h&&h.notify(...m)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=_m(d)&&!H0(d),this.instance=d;const{layoutId:m,layout:h,visualElement:y}=this.options;if(y&&!y.current&&y.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||m)&&(this.isLayoutDirty=!0),n){let g,_=0;const x=()=>this.root.updateBlockedByResize=!1;_e.read(()=>{_=window.innerWidth}),n(d,()=>{const j=window.innerWidth;j!==_&&(_=j,this.root.updateBlockedByResize=!0,g&&g(),g=N1(x,250),Ui.hasAnimatedSinceResize&&(Ui.hasAnimatedSinceResize=!1,this.nodes.forEach(Sp)))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&y&&(m||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:_,hasRelativeLayoutChanged:x,layout:j})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const L=this.options.transition||y.getDefaultTransition()||a_,{onLayoutAnimationStart:V,onLayoutAnimationComplete:N}=y.getProps(),I=!this.targetLayout||!rh(this.targetLayout,j),H=!_&&x;if(this.options.layoutRoot||this.resumeFrom||H||_&&(I||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const O={...eu(L,"layout"),onPlay:V,onComplete:N};(y.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O),this.setAnimationOrigin(g,H)}else _||Sp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=j})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),yn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(r_),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&sh(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const _=this.path[g];_.shouldResetTransform=!0,_.updateScroll("snapshot"),_.options.layoutRoot&&_.willUpdate(!1)}const{layoutId:m,layout:h}=this.options;if(m===void 0&&!h)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(wp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(_p);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(e_),this.nodes.forEach(K1),this.nodes.forEach(Q1)):this.nodes.forEach(_p),this.clearAllSnapshots();const m=ot.now();Ue.delta=Yt(0,1e3/60,m-Ue.timestamp),Ue.timestamp=m,Ue.isProcessing=!0,Xa.update.process(Ue),Xa.preRender.process(Ue),Xa.render.process(Ue),Ue.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,nu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(J1),this.sharedNodes.forEach(s_)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,_e.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){_e.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Qe(this.snapshot.measuredBox.x)&&!Qe(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Me(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(m=!1),m&&this.instance){const h=l(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:h,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!nh(this.projectionDelta),h=this.getTransformTemplate(),y=h?h(this.latestValues,""):void 0,g=y!==this.prevTransformTemplateValue;d&&this.instance&&(m||Mn(this.latestValues)||g)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const m=this.measurePageBox();let h=this.removeElementScroll(m);return d&&(h=this.removeTransform(h)),l_(h),{animationId:this.root.animationId,measuredBox:m,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:d}=this.options;if(!d)return Me();const m=d.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(u_))){const{scroll:y}=this.root;y&&(fr(m.x,y.offset.x),fr(m.y,y.offset.y))}return m}removeElementScroll(d){const m=Me();if(At(m,d),this.scroll?.wasRoot)return m;for(let h=0;h<this.path.length;h++){const y=this.path[h],{scroll:g,options:_}=y;y!==this.root&&g&&_.layoutScroll&&(g.wasRoot&&At(m,d),fr(m.x,g.offset.x),fr(m.y,g.offset.y))}return m}applyTransform(d,m=!1){const h=Me();At(h,d);for(let y=0;y<this.path.length;y++){const g=this.path[y];!m&&g.options.layoutScroll&&g.scroll&&g!==g.root&&pr(h,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Mn(g.latestValues)&&pr(h,g.latestValues)}return Mn(this.latestValues)&&pr(h,this.latestValues),h}removeTransform(d){const m=Me();At(m,d);for(let h=0;h<this.path.length;h++){const y=this.path[h];if(!y.instance||!Mn(y.latestValues))continue;Cl(y.latestValues)&&y.updateSnapshot();const g=Me(),_=y.measurePageBox();At(g,_),pp(m,y.latestValues,y.snapshot?y.snapshot.layoutBox:void 0,g)}return Mn(this.latestValues)&&pp(m,this.latestValues),m}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ue.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==m;if(!(d||h&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:_}=this.options;if(!this.layout||!(g||_))return;this.resolvedRelativeTargetAt=Ue.timestamp;const x=this.getClosestProjectingParent();x&&this.linkedParentVersion!==x.layoutVersion&&!x.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(x&&x.layout?this.createRelativeTarget(x,this.layout.layoutBox,x.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Me(),this.targetWithTransforms=Me()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),y1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):At(this.target,this.layout.layoutBox),Vm(this.target,this.targetDelta)):At(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?this.createRelativeTarget(x,this.target,x.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Cl(this.parent.latestValues)||Nm(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,m,h){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Me(),this.relativeTargetOrigin=Me(),Yi(this.relativeTargetOrigin,m,h),At(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const d=this.getLead(),m=!!this.resumingFrom||this!==d;let h=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(h=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Ue.timestamp&&(h=!1),h)return;const{layout:y,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||g))return;At(this.layoutCorrected,this.layout.layoutBox);const _=this.treeScale.x,x=this.treeScale.y;bw(this.layoutCorrected,this.treeScale,this.path,m),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Me());const{target:j}=d;if(!j){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(cp(this.prevProjectionDelta.x,this.projectionDelta.x),cp(this.prevProjectionDelta.y,this.projectionDelta.y)),fs(this.projectionDelta,this.layoutCorrected,j,this.latestValues),(this.treeScale.x!==_||this.treeScale.y!==x||!vp(this.projectionDelta.x,this.prevProjectionDelta.x)||!vp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",j))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){if(this.options.visualElement?.scheduleRender(),d){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=mr(),this.projectionDelta=mr(),this.projectionDeltaWithTransform=mr()}setAnimationOrigin(d,m=!1){const h=this.snapshot,y=h?h.latestValues:{},g={...this.latestValues},_=mr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const x=Me(),j=h?h.source:void 0,L=this.layout?this.layout.source:void 0,V=j!==L,N=this.getStack(),I=!N||N.members.length<=1,H=!!(V&&!I&&this.options.crossfade===!0&&!this.path.some(o_));this.animationProgress=0;let O;this.mixTargetDelta=X=>{const Y=X/1e3;xp(_.x,d.x,Y),xp(_.y,d.y,Y),this.setTargetDelta(_),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Yi(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),i_(this.relativeTarget,this.relativeTargetOrigin,x,Y),O&&W1(this.relativeTarget,O)&&(this.isProjectionDirty=!1),O||(O=Me()),At(O,this.relativeTarget)),V&&(this.animationValues=g,I1(g,y,this.latestValues,Y,H,I)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Y},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(yn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=_e.update(()=>{Ui.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=gr(0)),this.currentAnimation=F1(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),d.onUpdate&&d.onUpdate(m)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Y1),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:m,target:h,layout:y,latestValues:g}=d;if(!(!m||!h||!y)){if(this!==d&&this.layout&&y&&oh(this.options.animationType,this.layout.layoutBox,y.layoutBox)){h=this.target||Me();const _=Qe(this.layout.layoutBox.x);h.x.min=d.target.x.min,h.x.max=h.x.min+_;const x=Qe(this.layout.layoutBox.y);h.y.min=d.target.y.min,h.y.max=h.y.min+x}At(m,h),pr(m,g),fs(this.projectionDeltaWithTransform,this.layoutCorrected,m,g)}}registerSharedNode(d,m){this.sharedNodes.has(d)||this.sharedNodes.set(d,new H1),this.sharedNodes.get(d).add(m);const y=m.options.initialPromotionConfig;m.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(m):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){const{layoutId:d}=this.options;return d?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:d}=this.options;return d?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:m,preserveFollowOpacity:h}={}){const y=this.getStack();y&&y.promote(this,h),d&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let m=!1;const{latestValues:h}=d;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(m=!0),!m)return;const y={};h.z&&ul("z",d,y,this.animationValues);for(let g=0;g<ll.length;g++)ul(`rotate${ll[g]}`,d,y,this.animationValues),ul(`skew${ll[g]}`,d,y,this.animationValues);d.render();for(const g in y)d.setStaticValue(g,y[g]),this.animationValues&&(this.animationValues[g]=y[g]);d.scheduleRender()}applyProjectionStyles(d,m){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=Oi(m?.pointerEvents)||"",d.transform=h?h(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=Oi(m?.pointerEvents)||""),this.hasProjected&&!Mn(this.latestValues)&&(d.transform=h?h({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=y.animationValues||y.latestValues;this.applyTransformsToTarget();let _=$1(this.projectionDeltaWithTransform,this.treeScale,g);h&&(_=h(g,_)),d.transform=_;const{x,y:j}=this.projectionDelta;d.transformOrigin=`${x.origin*100}% ${j.origin*100}% 0`,y.animationValues?d.opacity=y===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=y===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const L in El){if(g[L]===void 0)continue;const{correct:V,applyTo:N,isCSSVariable:I}=El[L],H=_==="none"?g[L]:V(g[L],y);if(N){const O=N.length;for(let X=0;X<O;X++)d[N[X]]=H}else I?this.options.visualElement.renderState.vars[L]=H:d[L]=H}this.options.layoutId&&(d.pointerEvents=y===this?Oi(m?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>d.currentAnimation?.stop()),this.root.nodes.forEach(wp),this.root.sharedNodes.clear()}}}function K1(n){n.updateLayout()}function Q1(n){const s=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&s&&n.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:l}=n.layout,{animationType:c}=n.options,f=s.source!==n.layout.source;c==="size"?_t(g=>{const _=f?s.measuredBox[g]:s.layoutBox[g],x=Qe(_);_.min=o[g].min,_.max=_.min+x}):oh(c,s.layoutBox,o)&&_t(g=>{const _=f?s.measuredBox[g]:s.layoutBox[g],x=Qe(o[g]);_.max=_.min+x,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+x)});const d=mr();fs(d,o,s.layoutBox);const m=mr();f?fs(m,n.applyTransform(l,!0),s.measuredBox):fs(m,o,s.layoutBox);const h=!nh(d);let y=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:_,layout:x}=g;if(_&&x){const j=Me();Yi(j,s.layoutBox,_.layoutBox);const L=Me();Yi(L,o,x.layoutBox),rh(j,L)||(y=!0),g.options.layoutRoot&&(n.relativeTarget=L,n.relativeTargetOrigin=j,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:o,snapshot:s,delta:m,layoutDelta:d,hasLayoutChanged:h,hasRelativeLayoutChanged:y})}else if(n.isLead()){const{onExitComplete:o}=n.options;o&&o()}n.options.transition=void 0}function X1(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function Z1(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function J1(n){n.clearSnapshot()}function wp(n){n.clearMeasurements()}function _p(n){n.isLayoutDirty=!1}function e_(n){const{visualElement:s}=n.options;s&&s.getProps().onBeforeLayoutMeasure&&s.notify("BeforeLayoutMeasure"),n.resetTransform()}function Sp(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function t_(n){n.resolveTargetDelta()}function n_(n){n.calcProjection()}function r_(n){n.resetSkewAndRotation()}function s_(n){n.removeLeadSnapshot()}function xp(n,s,o){n.translate=ke(s.translate,0,o),n.scale=ke(s.scale,1,o),n.origin=s.origin,n.originPoint=s.originPoint}function Tp(n,s,o,l){n.min=ke(s.min,o.min,l),n.max=ke(s.max,o.max,l)}function i_(n,s,o,l){Tp(n.x,s.x,o.x,l),Tp(n.y,s.y,o.y,l)}function o_(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const a_={duration:.45,ease:[.4,0,.1,1]},kp=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Pp=kp("applewebkit/")&&!kp("chrome/")?Math.round:xt;function Ep(n){n.min=Pp(n.min),n.max=Pp(n.max)}function l_(n){Ep(n.x),Ep(n.y)}function oh(n,s,o){return n==="position"||n==="preserve-aspect"&&!g1(yp(s),yp(o),.2)}function u_(n){return n!==n.root&&n.scroll?.wasRoot}const c_=ih({attachResizeListener:(n,s)=>ys(n,"resize",s),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),cl={current:void 0},ah=ih({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!cl.current){const n=new c_({});n.mount(window),n.setOptions({layoutScroll:!0}),cl.current=n}return cl.current},resetTransform:(n,s)=>{n.style.transform=s!==void 0?s:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),d_={pan:{Feature:D1},drag:{Feature:A1,ProjectionNode:ah,MeasureLayout:Jm}};function Cp(n,s,o){const{props:l}=n;n.animationState&&l.whileHover&&n.animationState.setActive("whileHover",o==="Start");const c="onHover"+o,f=l[c];f&&_e.postRender(()=>f(s,Ss(s)))}class f_ extends wn{mount(){const{current:s}=this.node;s&&(this.unmount=U0(s,(o,l)=>(Cp(this.node,l,"Start"),c=>Cp(this.node,c,"End"))))}unmount(){}}class p_ extends wn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let s=!1;try{s=this.node.current.matches(":focus-visible")}catch{s=!0}!s||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=vs(ys(this.node.current,"focus",()=>this.onFocus()),ys(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function jp(n,s,o){const{props:l}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&l.whileTap&&n.animationState.setActive("whileTap",o==="Start");const c="onTap"+(o==="End"?"":o),f=l[c];f&&_e.postRender(()=>f(s,Ss(s)))}class m_ extends wn{mount(){const{current:s}=this.node;s&&(this.unmount=W0(s,(o,l)=>(jp(this.node,l,"Start"),(c,{success:f})=>jp(this.node,c,f?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ml=new WeakMap,dl=new WeakMap,h_=n=>{const s=Ml.get(n.target);s&&s(n)},g_=n=>{n.forEach(h_)};function y_({root:n,...s}){const o=n||document;dl.has(o)||dl.set(o,{});const l=dl.get(o),c=JSON.stringify(s);return l[c]||(l[c]=new IntersectionObserver(g_,{root:n,...s})),l[c]}function v_(n,s,o){const l=y_(s);return Ml.set(n,o),l.observe(n),()=>{Ml.delete(n),l.unobserve(n)}}const w_={some:0,all:1};class __ extends wn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:s={}}=this.node.getProps(),{root:o,margin:l,amount:c="some",once:f}=s,d={root:o?o.current:void 0,rootMargin:l,threshold:typeof c=="number"?c:w_[c]},m=h=>{const{isIntersecting:y}=h;if(this.isInView===y||(this.isInView=y,f&&!y&&this.hasEnteredView))return;y&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",y);const{onViewportEnter:g,onViewportLeave:_}=this.node.getProps(),x=y?g:_;x&&x(h)};return v_(this.node.current,d,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:s,prevProps:o}=this.node;["amount","margin","root"].some(S_(s,o))&&this.startObserver()}unmount(){}}function S_({viewport:n={}},{viewport:s={}}={}){return o=>n[o]!==s[o]}const x_={inView:{Feature:__},tap:{Feature:m_},focus:{Feature:p_},hover:{Feature:f_}},T_={layout:{ProjectionNode:ah,MeasureLayout:Jm}},k_={...c1,...x_,...d_,...T_},zi=Ew(k_,Ow);function P_({example:n,darkMode:s}){return C.jsx(zi.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5},className:`mb-8 p-6 rounded-2xl ${s?"bg-gradient-to-r from-yellow-900 to-orange-900":"bg-gradient-to-r from-yellow-300 to-orange-300"} shadow-xl`,children:C.jsxs("div",{className:"flex items-start gap-4",children:[C.jsx("div",{className:`p-3 rounded-full ${s?"bg-yellow-800":"bg-yellow-400"}`,children:C.jsx(by,{className:s?"text-yellow-300":"text-yellow-800",size:32})}),C.jsxs("div",{className:"flex-1",children:[C.jsx("h3",{className:`text-2xl mb-2 ${s?"text-white":"text-gray-900"}`,children:"🌍 Real World Example"}),C.jsx("p",{className:`text-lg ${s?"text-yellow-100":"text-gray-800"}`,children:n})]})]})})}function E_({tip:n,darkMode:s}){return C.jsxs("div",{className:`mb-8 p-6 rounded-2xl ${s?"bg-gradient-to-r from-blue-900 to-purple-900 border border-blue-700":"bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300"} shadow-lg`,children:[C.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[C.jsx(Ly,{className:s?"text-purple-300":"text-purple-600",size:24}),C.jsx("h3",{className:`text-xl ${s?"text-white":"text-gray-900"}`,children:"Quick Tip!"})]}),C.jsx("p",{className:`text-lg ${s?"text-purple-200":"text-purple-900"}`,children:n})]})}function C_({topic:n,darkMode:s}){const l={...Hy,...$y,...Yy}[n];return l?C.jsx(zi.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"p-8",children:C.jsxs("div",{className:"max-w-5xl mx-auto",children:[C.jsx("div",{className:"mb-8",children:C.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[C.jsx("span",{className:"text-6xl",children:l.emoji}),C.jsxs("div",{children:[C.jsx("h1",{className:`text-4xl mb-2 ${s?"text-white":"text-gray-900"}`,children:l.title}),C.jsx("p",{className:`text-lg ${s?"text-gray-400":"text-gray-600"}`,children:l.subtitle})]})]})}),l.realWorldExample&&C.jsx(P_,{example:l.realWorldExample,darkMode:s}),l.quickTip&&C.jsx(E_,{tip:l.quickTip,darkMode:s}),l.sections.map((c,f)=>C.jsxs(zi.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:f*.1},className:`mb-8 p-6 rounded-2xl ${s?"bg-gray-800":"bg-white"} shadow-lg`,children:[C.jsx("h2",{className:`text-2xl mb-4 ${s?"text-white":"text-gray-900"}`,children:c.heading}),C.jsx("div",{className:`mb-4 text-lg leading-relaxed ${s?"text-gray-300":"text-gray-700"}`,children:c.content}),c.points&&C.jsx("ul",{className:`space-y-2 mb-4 ${s?"text-gray-300":"text-gray-700"}`,children:c.points.map((d,m)=>C.jsxs("li",{className:"flex items-start gap-3",children:[C.jsx("span",{className:"text-green-500 mt-1",children:"✓"}),C.jsx("span",{className:"flex-1",children:d})]},m))}),c.code&&C.jsx(Gy,{code:c.code,language:c.language||"python",darkMode:s}),c.note&&C.jsx("div",{className:`mt-4 p-4 rounded-lg ${s?"bg-blue-900/30 border border-blue-700":"bg-blue-50 border border-blue-200"}`,children:C.jsxs("p",{className:`flex items-start gap-2 ${s?"text-blue-300":"text-blue-700"}`,children:[C.jsx("span",{className:"text-xl",children:"💡"}),C.jsx("span",{children:c.note})]})})]},f)),l.challenge&&C.jsxs(zi.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:.5},className:`p-6 rounded-2xl ${s?"bg-gradient-to-r from-purple-900 to-pink-900":"bg-gradient-to-r from-purple-400 to-pink-400"} text-white shadow-xl`,children:[C.jsx("h3",{className:"text-2xl mb-3",children:"🎮 Challenge Time!"}),C.jsx("p",{className:"text-lg",children:l.challenge})]})]})}):C.jsx("div",{className:"p-8 text-center",children:C.jsx("p",{className:s?"text-gray-300":"text-gray-700",children:"Topic not found!"})})}function j_({setCurrentTopic:n,darkMode:s}){return C.jsx("div",{className:`p-8 ${s?"text-white":"text-gray-900"}`,children:C.jsxs("div",{className:"max-w-4xl mx-auto",children:[C.jsxs("div",{className:"text-center mb-12 animate-fade-in",children:[C.jsx("div",{className:"text-8xl mb-6 animate-bounce",children:"🐍"}),C.jsx("h1",{className:"text-5xl mb-4",children:"Welcome to Django Academy!"}),C.jsx("p",{className:`text-xl ${s?"text-gray-300":"text-gray-600"}`,children:"Where coding becomes an adventure! 🚀"})]}),C.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-12",children:[C.jsxs("div",{className:`p-6 rounded-2xl ${s?"bg-gradient-to-br from-blue-600 to-blue-800":"bg-gradient-to-br from-blue-400 to-blue-600"} text-white shadow-xl`,children:[C.jsx(fl,{size:48,className:"mb-4"}),C.jsx("h3",{className:"text-2xl mb-2",children:"Fun Learning"}),C.jsx("p",{children:"Learn Django with real-world examples that make sense!"})]}),C.jsxs("div",{className:`p-6 rounded-2xl ${s?"bg-gradient-to-br from-green-600 to-green-800":"bg-gradient-to-br from-green-400 to-green-600"} text-white shadow-xl`,children:[C.jsx(hn,{size:48,className:"mb-4"}),C.jsx("h3",{className:"text-2xl mb-2",children:"Code Examples"}),C.jsx("p",{children:"Copy and try real code examples with one click!"})]}),C.jsxs("div",{className:`p-6 rounded-2xl ${s?"bg-gradient-to-br from-purple-600 to-purple-800":"bg-gradient-to-br from-purple-400 to-purple-600"} text-white shadow-xl`,children:[C.jsx(Vy,{size:48,className:"mb-4"}),C.jsx("h3",{className:"text-2xl mb-2",children:"Easy to Understand"}),C.jsx("p",{children:"Complex concepts explained in simple words!"})]}),C.jsxs("div",{className:`p-6 rounded-2xl ${s?"bg-gradient-to-br from-orange-600 to-orange-800":"bg-gradient-to-br from-orange-400 to-orange-600"} text-white shadow-xl`,children:[C.jsx(Ni,{size:48,className:"mb-4"}),C.jsx("h3",{className:"text-2xl mb-2",children:"Interactive"}),C.jsx("p",{children:"Practice with fun projects and activities!"})]})]}),C.jsxs("div",{className:`text-center p-8 rounded-2xl ${s?"bg-gray-800":"bg-white"} shadow-xl`,children:[C.jsx("h2",{className:"text-3xl mb-4",children:"Ready to Start Your Journey? 🎯"}),C.jsx("p",{className:`text-lg mb-6 ${s?"text-gray-300":"text-gray-600"}`,children:"Click on any topic from the left sidebar to begin!"}),C.jsx("button",{onClick:()=>n("1"),className:"px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300",children:"Start with Introduction 🚀"})]}),C.jsxs("div",{className:`mt-12 p-6 rounded-2xl ${s?"bg-gray-800":"bg-gray-100"}`,children:[C.jsx("h3",{className:"text-2xl mb-4",children:"🌟 Fun Fact!"}),C.jsx("p",{className:`text-lg ${s?"text-gray-300":"text-gray-700"}`,children:"Django is named after the famous jazz guitarist Django Reinhardt! 🎸 Just like how Django created amazing music, you'll create amazing websites!"})]})]})})}function b_(){const[n,s]=J.useState(!0),[o,l]=J.useState(null);return C.jsx("div",{className:`min-h-screen ${n?"dark bg-gray-900":"bg-gray-50"}`,children:C.jsxs("div",{className:"flex h-screen overflow-hidden",children:[C.jsx(qy,{currentTopic:o,setCurrentTopic:l,darkMode:n}),C.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[C.jsx(Wy,{darkMode:n,setDarkMode:s}),C.jsx("main",{className:"flex-1 overflow-y-auto",children:o?C.jsx(C_,{topic:o,darkMode:n}):C.jsx(j_,{setCurrentTopic:l,darkMode:n})})]})]})})}fy.createRoot(document.getElementById("root")).render(C.jsx(b_,{}));
